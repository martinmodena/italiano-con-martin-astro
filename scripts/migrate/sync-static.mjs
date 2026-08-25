// Sincronizza public/ con la parte statica di legacy-html:
// - tutti i file non-HTML (assets, pdf, styles.css, script.js, robots, sitemap, CNAME...)
// - le pagine redirect (meta refresh) come file HTML letterali
// - le pagine non templabili (404.html, verifica Google)
// Rimuove da public/ ciò che non proviene più da legacy-html (tranne _headers e README.md).
//
// Uso: node scripts/migrate/sync-static.mjs

import { copyFileSync, existsSync, mkdirSync, readdirSync, readFileSync, rmSync, statSync } from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const sourceDir = path.join(root, 'legacy-html');
const publicDir = path.join(root, 'public');
const keep = new Set(['_headers', 'README.md']);

function walk(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(fullPath) : [fullPath];
  });
}

function rel(base, file) {
  return path.relative(base, file).replaceAll('\\', '/');
}

const rawPassthrough = [/^google[a-z0-9_-]+\.html$/i, /^404\.html$/i];

// Immagini pesanti non usate dalle pagine: il vecchio workflow le rimuoveva
// dal deploy, qui non entrano proprio in public/.
const excluded = new Set([
  'assets/martin-portrait.png',
  'assets/licia.png',
  'assets/cane-osso-realistica.jpg',
  'assets/story-cane-osso-home.webp',
  'assets/story-cane-osso.jpg',
  'assets/story-cicala-formica.jpg',
  'assets/story-leone-topo.jpg',
  'assets/story-lepre-tartaruga.jpg',
  'assets/story-lupo-tre-porcellini.jpg',
  'assets/story-mugnaio-figlio-asino.jpg',
  'assets/story-pastorello.jpg',
  'assets/story-topo-citta-campagna.jpg',
  'assets/story-volpe-uva.jpg',
]);

// Selezione dei file da copiare
const wanted = new Map(); // rel -> absolute source
for (const file of walk(sourceDir)) {
  const relative = rel(sourceDir, file);
  if (relative === '.gitkeep' || relative === 'README.md' || excluded.has(relative)) continue;
  if (/\.html?$/i.test(relative)) {
    const isRaw = rawPassthrough.some((p) => p.test(relative));
    const isRedirect = !isRaw && readFileSync(file, 'utf8').includes('http-equiv="refresh"');
    if (!isRaw && !isRedirect) continue; // pagina vera: diventa rotta Astro
  }
  wanted.set(relative, file);
}

// Copia (incrementale su dimensione + mtime)
let copied = 0;
for (const [relative, file] of wanted) {
  const target = path.join(publicDir, relative);
  const src = statSync(file);
  let skip = false;
  if (existsSync(target)) {
    const dst = statSync(target);
    skip = dst.size === src.size && dst.mtimeMs >= src.mtimeMs;
  }
  if (!skip) {
    mkdirSync(path.dirname(target), { recursive: true });
    copyFileSync(file, target);
    copied += 1;
  }
}

// Rimozione dei file orfani
let removed = 0;
for (const file of walk(publicDir)) {
  const relative = rel(publicDir, file);
  if (keep.has(relative)) continue;
  if (!wanted.has(relative)) {
    rmSync(file);
    removed += 1;
  }
}
// Cartelle vuote rimaste
function pruneEmpty(dir) {
  if (!existsSync(dir)) return false;
  let empty = true;
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (!pruneEmpty(fullPath)) empty = false;
    } else {
      empty = false;
    }
  }
  if (empty && dir !== publicDir) {
    rmSync(dir, { recursive: true });
    return true;
  }
  return false;
}
pruneEmpty(publicDir);

console.log(`File statici totali: ${wanted.size}, copiati/aggiornati: ${copied}, rimossi: ${removed}`);

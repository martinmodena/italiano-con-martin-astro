// Converte le pagine redirect (meta refresh) di dist/ in redirect 301 veri per Cloudflare.
// Scrive dist/_redirects e cancella da dist/ le pagine HTML di redirect.
// Si lancia DOPO la build e gli audit, solo per la pubblicazione su Cloudflare
// (public/ non cambia: le pagine restano nel repository). Vedi DECISIONI_SITO.md, 2026-11-18.
// Uso: node scripts/cloudflare-redirects.mjs [--dry-run]
import { readdirSync, readFileSync, writeFileSync, unlinkSync, existsSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const DIST = 'dist';
const LIMIT = 2000; // limite di Cloudflare per i redirect statici
const dryRun = process.argv.includes('--dry-run');

function* walk(dir) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) yield* walk(p);
    else if (e.name.endsWith('.html')) yield p;
  }
}

const rules = [];
const files = [];
for (const file of walk(DIST)) {
  const html = readFileSync(file, 'utf8');
  if (!html.includes('http-equiv="refresh"')) continue;
  const m = html.match(/http-equiv="refresh"\s+content="\d+;\s*url=([^"]+)"/i);
  if (!m) throw new Error(`Redirect senza destinazione leggibile: ${file}`);
  let target = m[1].trim();
  const from = '/' + relative(DIST, file).split(sep).join('/');
  if (!target.startsWith('/') && !/^https?:\/\//.test(target)) {
    throw new Error(`Destinazione relativa non gestita in ${file}: ${target}`);
  }
  if (target.startsWith('/')) {
    const local = join(DIST, decodeURI(target.split(/[?#]/)[0]));
    const ok = existsSync(local) || existsSync(join(local, 'index.html'));
    if (!ok) throw new Error(`Destinazione inesistente: ${from} -> ${target}`);
  }
  if (from === target) throw new Error(`Redirect su se stesso: ${from}`);
  // Cloudflare confronta l'indirizzo codificato (%C5%82…): lettere non latine vanno scritte così.
  const enc = (u) => encodeURI(decodeURI(u));
  rules.push(`${enc(from)} ${enc(target)} 301`);
  // Anche la cartella senza index.html.
  if (from.endsWith('/index.html')) rules.push(`${enc(from.slice(0, -'index.html'.length))} ${enc(target)} 301`);
  files.push(file);
}

// Le destinazioni non devono essere a loro volta pagine di redirect (catene).
const sources = new Set(rules.map((r) => r.split(' ')[0]));
for (const r of rules) {
  const target = r.split(' ')[1];
  if (sources.has(target)) throw new Error(`Catena di redirect: ${r}`);
}
// Cloudflare con html_handling "none" (necessario per non togliere il .html dagli indirizzi)
// non apre da solo index.html nelle cartelle: lo diciamo noi, come faceva GitHub Pages.
const redirected = new Set(files.map((f) => '/' + relative(DIST, f).split(sep).join('/')));
for (const file of walk(DIST)) {
  const path = '/' + relative(DIST, file).split(sep).join('/');
  if (!path.endsWith('/index.html') || redirected.has(path)) continue;
  const dir = path.slice(0, -'index.html'.length);
  rules.push(`${encodeURI(dir)} ${encodeURI(path)} 200`);
  if (dir !== '/') rules.push(`${encodeURI(dir.slice(0, -1))} ${encodeURI(dir)} 301`);
}
if (rules.length > LIMIT) throw new Error(`Troppi redirect: ${rules.length} > ${LIMIT}`);

const header = '# Generato da scripts/cloudflare-redirects.mjs: non modificare a mano.\n';
if (!dryRun) {
  writeFileSync(join(DIST, '_redirects'), header + rules.join('\n') + '\n');
  for (const f of files) unlinkSync(f);
  // File che servono solo a GitHub Pages o al repository: Cloudflare non li pubblica.
  writeFileSync(join(DIST, '.assetsignore'), 'CNAME\nREADME.md\n.assetsignore\n');
}
console.log(`${dryRun ? '[prova] ' : ''}${rules.length} regole in _redirects, ${files.length} pagine HTML ${dryRun ? 'da togliere' : 'tolte'} da dist/.`);

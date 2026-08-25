// Verifica che ogni riferimento locale delle pagine costruite punti a un file
// realmente presente: fogli di stile, script, immagini, PDF e collegamenti
// interni. Segnala anche i casi in cui una pagina carica lo stesso file due
// volte sotto indirizzi diversi (due copie in cache, download doppio).
//
// Uso: node scripts/audit-links.mjs [--strict]
// Cartella analizzata: dist/ (override con SITE_ROOT).

import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';
import * as cheerio from 'cheerio';

const root = process.cwd();
const siteRoot = path.join(root, process.env.SITE_ROOT ?? 'dist');
const strict = process.argv.includes('--strict');

function walk(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(fullPath) : [fullPath];
  });
}

const pages = walk(siteRoot).filter((f) => /\.html?$/i.test(f));
const missing = [];
const duplicateAssets = [];

// Un percorso pubblico esiste se c'è il file, oppure la cartella con index.html
function resolves(publicPath) {
  const clean = decodeURIComponent(publicPath.split('#')[0].split('?')[0]);
  if (clean === '' || clean === '/') return existsSync(path.join(siteRoot, 'index.html'));
  const target = path.join(siteRoot, clean);
  if (existsSync(target)) {
    return statSync(target).isDirectory() ? existsSync(path.join(target, 'index.html')) : true;
  }
  return false;
}

for (const file of pages) {
  const relative = path.relative(siteRoot, file).replaceAll('\\', '/');
  const pageDir = path.posix.dirname('/' + relative);
  const html = readFileSync(file, 'utf8');
  const $ = cheerio.load(html);

  const refs = [];
  $('link[href], script[src], img[src], a[href], source[srcset]').each((_, el) => {
    const $el = $(el);
    const tag = el.tagName.toLowerCase();
    const attr = tag === 'link' || tag === 'a' ? 'href' : tag === 'source' ? 'srcset' : 'src';
    const value = $el.attr(attr);
    if (!value) return;
    if (/^(https?:|mailto:|tel:|data:|javascript:|#)/i.test(value)) return;
    let rel = null;
    if (tag === 'link') {
      rel = ($el.attr('rel') ?? '').toLowerCase();
      if (!['stylesheet', 'icon', 'apple-touch-icon', 'preload'].includes(rel)) return;
    }
    refs.push({ tag, attr, value, rel });
  });

  // Stesso file caricato sotto indirizzi diversi (query di versione discordi):
  // il browser lo scarica due volte e ne tiene due copie in cache.
  const byFile = {};

  for (const ref of refs) {
    const publicPath = ref.value.startsWith('/')
      ? ref.value
      : path.posix.normalize(path.posix.join(pageDir, ref.value));
    if (!resolves(publicPath)) {
      missing.push({ page: relative, tag: ref.tag, value: ref.value, resolved: publicPath });
    }
    if (ref.tag === 'link' || ref.tag === 'script') {
      const withoutQuery = decodeURIComponent(publicPath.split('#')[0].split('?')[0]);
      if (!/\.(css|js)$/i.test(withoutQuery)) continue;
      (byFile[withoutQuery] ??= new Set()).add(publicPath);
    }
  }

  for (const [file, variants] of Object.entries(byFile)) {
    if (variants.size > 1) {
      duplicateAssets.push({ page: relative, file, variants: [...variants] });
    }
  }
}

console.log(`# Audit dei collegamenti locali (${path.basename(siteRoot)})`);
console.log(`\nPagine analizzate: ${pages.length}`);
console.log(`Riferimenti non risolti: ${missing.length}`);
console.log(`Pagine che caricano lo stesso file due volte: ${duplicateAssets.length}`);

if (missing.length) {
  console.log('\n## Riferimenti non risolti\n');
  for (const m of missing) console.log(`- ${m.page}: <${m.tag}> "${m.value}" -> ${m.resolved}`);
}
if (duplicateAssets.length) {
  console.log('\n## Stesso file sotto indirizzi diversi\n');
  for (const d of duplicateAssets) console.log(`- ${d.page}: ${d.file} come ${d.variants.join(' , ')}`);
}

if (missing.length === 0 && duplicateAssets.length === 0) {
  console.log('\nNessun problema rilevato.');
}

if (strict && (missing.length || duplicateAssets.length)) {
  process.exitCode = 1;
}

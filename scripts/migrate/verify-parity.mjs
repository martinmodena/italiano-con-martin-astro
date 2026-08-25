// Verifica di parità tra dist/ (build Astro) e legacy-html/ (sito pubblicato).
// Confronto DOM-normalizzato, insensibile a spazi, ordine degli attributi e
// ordine degli elementi nel <head>. I metadati che nelle pagine legacy con il
// bug <head></head> stanno nel body vengono ricollocati nel head prima del
// confronto (la correzione è intenzionale).
//
// Uso: node scripts/migrate/verify-parity.mjs [filtro-percorso]

import { existsSync, readFileSync, readdirSync, writeFileSync, mkdirSync } from 'node:fs';
import path from 'node:path';
import * as cheerio from 'cheerio';

const root = process.cwd();
const legacyDir = path.join(root, 'legacy-html');
const distDir = path.join(root, 'dist');
const workDir = path.join(root, 'work', 'migration');
const filter = process.argv[2] ?? '';

function walk(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(fullPath) : [fullPath];
  });
}

function rel(base, file) {
  return path.relative(base, file).replaceAll('\\', '/');
}

function sortAttributes($) {
  $('*').each((_, el) => {
    if (!el.attribs) return;
    const sorted = Object.fromEntries(Object.entries(el.attribs).sort(([a], [b]) => a.localeCompare(b)));
    el.attribs = sorted;
  });
  // aria-current su <link> nell'head è HTML invalido (bug del vecchio
  // generatore): la migrazione lo rimuove, il confronto lo ignora.
  $('link[rel="alternate"][aria-current]').removeAttr('aria-current');
}

function squash(html) {
  // Insensibile agli spazi ai bordi dei nodi: il minifier HTML li rimuove
  // dove non cambiano il rendering. Il primo replace elimina i BOM (U+FEFF).
  return html
    .replace(/\uFEFF/g, '')
    .replace(/\s+/g, ' ')
    .replace(/>\s+/g, '>')
    .replace(/\s+</g, '<')
    .trim();
}

function canonicalJson(text) {
  try {
    return JSON.stringify(JSON.parse(text));
  } catch {
    return text.trim();
  }
}

// Restituisce { head: [chiavi ordinate], body: stringa } di un documento
function canonicalize(html) {
  const $ = cheerio.load(html);
  sortAttributes($);

  // JSON-LD canonico
  $('script[type="application/ld+json"]').each((_, el) => {
    $(el).text(canonicalJson($(el).text()));
  });

  const headerEl = $('header.site-header').get(0);
  const headNodes = [];
  const bodyParts = [];

  for (const el of $('head').children().toArray()) headNodes.push(el);

  // Nota: in cheerio/domhandler <script> e <style> hanno type dedicato
  const isElement = (node) => node.type === 'tag' || node.type === 'script' || node.type === 'style';
  let beforeHeader = Boolean(headerEl);
  for (const node of $('body').contents().toArray()) {
    if (node === headerEl) beforeHeader = false;
    if (beforeHeader && isElement(node)) {
      // pagine con bug <head></head>: metadati nel body -> trattati come head
      headNodes.push(node);
      continue;
    }
    if (isElement(node)) bodyParts.push($.html(node));
    else if (node.type === 'text' && node.data.trim() !== '') bodyParts.push(node.data);
  }

  const headKeys = headNodes.map((el) => squash($.html(el))).sort();
  return { head: headKeys, body: squash(bodyParts.join('')), lang: $('html').attr('lang') ?? '' };
}

function diffLists(a, b) {
  const onlyA = a.filter((x) => !b.includes(x));
  const onlyB = b.filter((x) => !a.includes(x));
  return { onlyA, onlyB };
}

function firstDivergence(a, b) {
  let i = 0;
  while (i < a.length && i < b.length && a[i] === b[i]) i++;
  return { index: i, a: a.slice(Math.max(0, i - 80), i + 200), b: b.slice(Math.max(0, i - 80), i + 200) };
}

const legacyHtml = walk(legacyDir).filter((f) => /\.html?$/i.test(f));
const results = { compared: 0, identical: 0, different: [], missingInDist: [], details: {} };

for (const file of legacyHtml) {
  const relative = rel(legacyDir, file);
  if (filter && !relative.includes(filter)) continue;
  const distFile = path.join(distDir, relative);
  if (!existsSync(distFile)) {
    results.missingInDist.push(relative);
    continue;
  }
  results.compared += 1;
  const legacy = canonicalize(readFileSync(file, 'utf8'));
  const built = canonicalize(readFileSync(distFile, 'utf8'));

  const issues = [];
  if (legacy.lang !== built.lang) issues.push(`lang: ${legacy.lang} -> ${built.lang}`);
  const headDiff = diffLists(legacy.head, built.head);
  if (headDiff.onlyA.length || headDiff.onlyB.length) {
    issues.push('head');
    results.details[relative] = {
      headOnlyLegacy: headDiff.onlyA,
      headOnlyDist: headDiff.onlyB,
    };
  }
  if (legacy.body !== built.body) {
    issues.push('body');
    results.details[relative] = {
      ...(results.details[relative] ?? {}),
      bodyDivergence: firstDivergence(legacy.body, built.body),
    };
  }
  if (issues.length) results.different.push({ page: relative, issues });
  else results.identical += 1;
}

// File presenti in dist ma non nel legacy (informativo)
const distHtml = walk(distDir).filter((f) => /\.html?$/i.test(f));
results.extraInDist = distHtml
  .map((f) => rel(distDir, f))
  .filter((relative) => (filter ? relative.includes(filter) : true))
  .filter((relative) => !existsSync(path.join(legacyDir, relative)));

mkdirSync(workDir, { recursive: true });
writeFileSync(path.join(workDir, 'parity.json'), JSON.stringify(results, null, 2) + '\n');

console.log(`Confrontate: ${results.compared}, identiche: ${results.identical}, diverse: ${results.different.length}`);
console.log(`Mancanti in dist: ${results.missingInDist.length}, extra in dist: ${results.extraInDist.length}`);
if (results.different.length) {
  for (const d of results.different.slice(0, 15)) console.log('  DIFF', d.page, d.issues.join('+'));
}
if (results.missingInDist.length) {
  for (const m of results.missingInDist.slice(0, 10)) console.log('  MISS', m);
}
console.log('Dettagli in work/migration/parity.json');

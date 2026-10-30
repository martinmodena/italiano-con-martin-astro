// Briciole di pane di tutto il sito, visibili e in JSON-LD (2026-10-30, Martin: «mantieni sempre coerente
// la struttura del sito e che sia perfetta dal punto di vista SEO»).
//
//   - grammatica:  Home / Grammatica / A1 (link a #a1 dell'indice) / titolo della lezione (h1)
//   - vocabolario: Home / Vocabolario / titolo della lezione (h1)
//   - letture e favole: le rifà create-reading-categories.mjs (Home / Letture / categoria / titolo)
//   - ogni pagina tranne le home riceve il BreadcrumbList in JSON-LD, costruito dalla briciola visibile;
//     le pagine senza briciola visibile (indici delle sezioni, Chi siamo, privacy) hanno Home > pagina.
//
// Idempotente. Va lanciato per ultimo, dopo i generatori delle lezioni e create-reading-categories.mjs.
// Con --check non scrive niente e fallisce se una pagina non ha il BreadcrumbList giusto (lo usa il deploy).
//
// Uso: node scripts/add-breadcrumbs.mjs [--check]

import fs from 'node:fs';
import path from 'node:path';
import { HOME, langOf, navLabel } from './data/breadcrumb-labels.mjs';

const SITE = 'https://italianoconmartin.com';
const CHECK = process.argv.includes('--check');
const read = (p) => fs.readFileSync(p, 'utf8');
const META_RE = /const meta = (\{[^]*?\r?\n\});\r?\n---/;
const stripTags = (s) => s.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const walk = (dir) => fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(path.join(dir, e.name)) : [path.join(dir, e.name)]));
const urlOfPath = (p) => '/' + p.replace(/index\.html$/, '');
const hrefsOf = (astro) => Object.fromEntries(JSON.parse(read(astro).match(META_RE)[1]).hreflangs.filter(([l]) => l !== 'x-default').map(([l, u]) => [l, decodeURI(u.replace(SITE, ''))]));

// Indici di grammatica e vocabolario in ogni lingua.
const gramIndex = new Set(Object.values(hrefsOf('src/pages/grammatica/index.astro')));
const vocabIndex = new Set(Object.values(hrefsOf('src/pages/vocabolario/index.astro')));
const sectionOf = (url) => {
  for (const base of gramIndex) if (url.startsWith(base) && url !== base) return ['grammar', base];
  for (const base of vocabIndex) if (url.startsWith(base) && url !== base) return ['vocab', base];
  return [null, null];
};

let problems = 0;
let changed = 0;
for (const astro of walk('src/pages').filter((f) => f.endsWith('.astro'))) {
  const src = read(astro);
  const m = src.match(META_RE);
  if (!m) continue;
  const meta = JSON.parse(m[1]);
  if (!meta.path || /noindex/.test(meta.robots || '')) continue;
  const url = urlOfPath(meta.path);
  const isHome = /^\/(?:[a-z]{2}\/)?$/.test(url);
  const htmlFile = path.join('src/html', meta.path);
  if (!fs.existsSync(htmlFile)) continue;
  let html = read(htmlFile);
  if (/http-equiv="refresh"/.test(html)) continue;
  const h1 = stripTags((html.match(/<h1[^>]*>([^]*?)<\/h1>/) || [, ''])[1]);

  // 1. Briciola visibile di grammatica e vocabolario: link assoluti, livello cliccabile, titolo = h1.
  const [section, base] = sectionOf(url);
  if (section && h1) {
    const old = html.match(/<p class="breadcrumbs"[^>]*>([^]*?)<\/p>/);
    const home = url.replace(/^(\/(?:[a-z]{2}\/)?).*$/, '$1');
    const lang = langOf(home);
    const homeLabel = HOME[lang];
    const sectionLabel = navLabel(lang, base);
    if (!homeLabel || !sectionLabel) throw new Error(`${htmlFile}: etichette della briciola non trovate`);
    const level = section === 'grammar' ? (url.slice(base.length).match(/^(a1|a2|b1|b2|c1)\//) || [])[1] : null;
    const crumb =
      `<p class="breadcrumbs" data-auto><a href="${home}">${homeLabel}</a> / <a href="${base}">${sectionLabel}</a>` +
      (level ? ` / <a href="${base}#${level}">${level.toUpperCase()}</a>` : '') +
      ` / ${esc(h1)}</p>`;
    let next = html;
    if (old) next = html.replace(old[0], crumb);
    else {
      const at = html.indexOf('>', html.indexOf('<div class="container', html.indexOf('<section class="page-intro">'))) + 1;
      if (at > 0) next = html.slice(0, at) + crumb + html.slice(at);
    }
    if (next !== html) {
      if (CHECK) {
        console.log(`Briciola da aggiornare: ${htmlFile}`);
        problems++;
      } else fs.writeFileSync(htmlFile, next);
      html = next;
    }
  }

  // 2. BreadcrumbList in JSON-LD, dalla briciola visibile (o Home > pagina).
  if (isHome) continue;
  const visible = html.match(/<p class="breadcrumbs"[^>]*>([^]*?)<\/p>/);
  let items;
  if (visible) {
    const parts = visible[1].split(/\s+\/\s+/);
    items = parts.map((part, i) => {
      const a = part.match(/<a [^>]*href="([^"]*)"[^>]*>([^<]*)<\/a>/);
      if (i === parts.length - 1 && !a) return [stripTags(part), url];
      return a ? [stripTags(a[2]), decodeURI(new URL(a[1], SITE + url).pathname + new URL(a[1], SITE + url).hash)] : [stripTags(part), url];
    });
  } else {
    const home = url.replace(/^(\/(?:[a-z]{2}\/)?).*$/, '$1');
    items = [[HOME[langOf(home)] || 'Home', home], [h1 || meta.title, url]];
  }
  const list = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map(([name, u], i) => ({ '@type': 'ListItem', position: i + 1, name, item: SITE + encodeURI(u) })),
  });
  const current = (meta.jsonld || []).filter((j) => j.includes('"BreadcrumbList"'));
  if (current.length === 1 && current[0] === list) continue;
  if (CHECK) {
    console.log(`BreadcrumbList mancante o diverso: ${astro}`);
    problems++;
    continue;
  }
  meta.jsonld = [...(meta.jsonld || []).filter((j) => !j.includes('"BreadcrumbList"')), list];
  fs.writeFileSync(astro, src.replace(META_RE, () => `const meta = ${JSON.stringify(meta, null, 2)};\n---`));
  changed++;
}

if (CHECK) {
  if (problems) {
    console.log(`\n${problems} pagine con le briciole da rifare: node scripts/add-breadcrumbs.mjs`);
    process.exit(1);
  }
  console.log('Briciole di pane: tutto in ordine.');
} else console.log(`Pagine aggiornate: ${changed}`);

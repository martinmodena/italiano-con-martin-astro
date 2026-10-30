// Categorie delle letture e pagine B1, B2, C1 (2026-10-29), in 10 lingue.
//
//   - riordina le sezioni dell'indice delle letture per categoria (Emma, Animali e natura, Corpo e salute,
//     Mente e tecnologia, Cultura e storia italiana, Favole) e toglie gli elenchi di link B1–C1;
//   - crea una pagina per categoria (/letture/animali-e-natura/ …) e una per livello (/letture/b1/ …);
//   - aggiorna le etichette delle tessere negli indici A1 e A2, la barra dei livelli (B1–C1 portano
//     alle pagine nuove) e la briciola di pane delle letture (Letture / Animali e natura / …);
//   - aggiunge le pagine nuove alla sitemap.
//
// Dati e testi in scripts/data/letture-categorie.mjs. Lo script è idempotente e va rilanciato
// dopo create-science-stories.mjs, create-level-readings.mjs, create-emma-stories.mjs e build-pt.mjs,
// che riscrivono gli indici. Le pagine portoghesi nuove sono «own: true» in scripts/data/pt/paginas.mjs:
// le scrive questo script, non build-pt.
//
// Uso: node scripts/create-reading-categories.mjs   poi   npm run build

import fs from 'node:fs';
import path from 'node:path';
import {
  CATEGORY_ORDER,
  DEFAULT_CATEGORY,
  CATEGORY_OF,
  CATEGORY_CODE,
  CATEGORIES,
  LEVEL_PAGES,
  UI,
} from './data/letture-categorie.mjs';
import { HOME, homeUrl, navLabel } from './data/breadcrumb-labels.mjs';

const SITE = 'https://italianoconmartin.com';
const LANGS = ['it', 'en', 'es', 'fr', 'cs', 'pl', 'tr', 'de', 'ja', 'pt'];
const HREFLANG = (l) => (l === 'pt' ? 'pt-BR' : l);
const LEVELS = ['b1', 'b2', 'c1'];

const read = (p) => fs.readFileSync(p, 'utf8');
const write = (p, s) => {
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, s);
};
const META_RE = /const meta = (\{[^]*?\r?\n\});\r?\n---/;
const readMeta = (p) => JSON.parse(read(p).match(META_RE)[1]);
const writeMeta = (p, meta) => write(p, read(p).replace(META_RE, () => `const meta = ${JSON.stringify(meta, null, 2)};\n---`));
const htmlOf = (url) => 'src/html/' + url.replace(/^\//, '') + (url.endsWith('/') ? 'index.html' : '');
const astroOf = (url) => 'src/pages/' + url.replace(/^\//, '') + (url.endsWith('/') ? 'index.astro' : '.astro');
const urlsOf = (astro) => Object.fromEntries(readMeta(astro).hreflangs.filter(([l]) => l !== 'x-default').map(([l, u]) => [l === 'pt-BR' ? 'pt' : l, decodeURI(u.replace(SITE, ''))]));
const resolve = (href, base) => decodeURI(new URL(href, SITE + base).pathname);
const prefixOf = (url) => '../'.repeat(url.split('/').length - 2);
const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;');

const indexUrl = urlsOf('src/pages/letture/index.astro');
const fableUrl = urlsOf('src/pages/favole/index.astro');
const catUrl = (cat, lang) => (cat === 'favole' ? fableUrl[lang] : indexUrl[lang] + CATEGORIES[cat][lang].slug + '/');
const levelUrl = (lv, lang) => indexUrl[lang] + lv + '/';

// Ogni URL di lettura o favola (in qualunque lingua) → chiave italiana («letture/il-polpo-…»).
const keyOf = {};
for (const dir of ['letture', 'favole'])
  for (const file of fs.readdirSync(`src/pages/${dir}`)) {
    if (!file.endsWith('.html.astro')) continue;
    const key = `${dir}/${file.replace('.html.astro', '')}`;
    const meta = readMeta(`src/pages/${dir}/${file}`);
    if (!meta.hreflangs) continue;
    for (const [, u] of meta.hreflangs) keyOf[decodeURI(u.replace(SITE, ''))] = key;
  }
const unknown = new Set();
function categoryOf(key) {
  if (key.startsWith('favole/')) return 'favole';
  if (key.startsWith('letture/emma-') || key === 'letture/storia-del-caffe-in-italia') return 'emma';
  if (CATEGORY_OF[key]) return CATEGORY_OF[key];
  unknown.add(key);
  return DEFAULT_CATEGORY;
}

const TILE_RE = /<a class="story-tile" href="([^"]*)">(?:(?!<\/a>)[^])*?<\/a>/g;
const levelsIn = (badge) => badge.match(/\b[ABC][12]\b/g) || [];

// Tessera con link assoluto, immagine con il prefisso giusto ed etichetta della categoria.
function retile(tile, href, cat, lang, pre, badgeLevels, anchor = '') {
  let t = tile.replace(/href="[^"]*"/, `href="${href}${anchor}"`).replace(/src="(?:\.\.\/)*assets\//, `src="${pre}assets/`);
  const label = cat === 'favole' ? '' : CATEGORIES[cat][lang].badge + ' · ';
  t = t.replace(/<span class="badge">[^<]*<\/span>/, `<span class="badge">${label}${badgeLevels.join(' · ')}</span>`);
  return t;
}

// Tessere dell'indice di una lingua, nell'ordine della pagina.
function tilesOf(lang) {
  const base = indexUrl[lang];
  const html = read(htmlOf(base));
  const seen = new Set();
  const tiles = [];
  for (const m of html.matchAll(TILE_RE)) {
    const href = resolve(m[1], base);
    if (seen.has(href)) continue;
    seen.add(href);
    const key = keyOf[href];
    if (!key) throw new Error(`${lang}: lettura sconosciuta ${href}`);
    const badge = (m[0].match(/<span class="badge">([^<]*)<\/span>/) || [, ''])[1];
    tiles.push({ html: m[0], href, key, cat: categoryOf(key), levels: levelsIn(badge) });
  }
  return tiles;
}

function catsNav(lang, current) {
  const links = [...CATEGORY_ORDER, 'favole'].map((cat) => {
    const name = cat === 'favole' ? UI[lang].fables : CATEGORIES[cat][lang].name;
    return `<a href="${catUrl(cat, lang)}"${cat === current ? ' aria-current="page"' : ''}>${name}</a>`;
  });
  return `<nav class="reading-cats" aria-label="${UI[lang].cats}">${links.join('')}</nav>`;
}

function levelNav(lang, current) {
  const html = read(htmlOf(indexUrl[lang]));
  const nav = html.match(/<nav class="level-hub-nav"[^]*?<\/nav>/)[0];
  const base = indexUrl[lang];
  return fixLevelNav(nav, base)
    .replace(/ aria-current="page"/g, '')
    .replace(new RegExp(`href="${current === 'all' ? base : base + current + '/'}"`), (m) => `${m} aria-current="page"`);
}
// B1, B2 e C1 portano alle pagine nuove (prima erano ancore dell'indice).
const fixLevelNav = (html, base) => html.replace(new RegExp(`href="${base}#(b1|b2|c1)"`, 'g'), `href="${base}$1/"`);

// ---------------------------------------------------------------- 1. indice delle letture
function rebuildIndex(lang, tiles) {
  const base = indexUrl[lang];
  const p = htmlOf(base);
  let h = read(p);
  const pre = prefixOf(base);
  const sections = [...CATEGORY_ORDER, 'favole'].map((cat) => {
    const list = tiles.filter((t) => t.cat === cat);
    if (!list.length) return '';
    const c = cat === 'favole' ? null : CATEGORIES[cat][lang];
    const name = c ? c.name : UI[lang].fables;
    const more = c ? UI[lang].more(list.length) : UI[lang].moreFables;
    return `<section class="level-section" id="${cat}">
            <div class="level-title">
              <span class="level">${CATEGORY_CODE[cat]}</span>
              <h2>${name}</h2>
            </div>${c ? `\n            <p>${c.intro}</p>` : ''}
            <div class="story-list">
              ${list.map((t) => retile(t.html, t.href, cat, lang, pre, t.levels)).join('\n              ')}
            </div>
            <p class="category-more"><a href="${catUrl(cat, lang)}">${more}</a></p>
          </section>`;
  });
  const start = h.indexOf('<section class="level-section"');
  const anchor = h.match(/<\/section>\s*<\/div>\s*<\/section>\s*<section class="conversion-section/);
  if (start < 0 || !anchor) throw new Error(`${lang}: sezioni dell'indice non trovate`);
  const end = anchor.index + '</section>'.length;
  h = h.slice(0, start) + sections.filter(Boolean).join('\n          ') + h.slice(end);
  h = h.replace(/<(?:div|nav) class="reading-cats"[^>]*>[^]*?<\/(?:div|nav)>/, catsNav(lang, null));
  h = fixLevelNav(h, base);
  write(p, h);
}

// ---------------------------------------------------------------- 2. pagine nuove (categorie e livelli)
function crumbs(lang) {
  const label = navLabel(lang, indexUrl[lang]);
  if (!label) throw new Error(`${lang}: voce «letture» del menu non trovata`);
  return [`<a href="${homeUrl(lang)}">${HOME[lang]}</a>`, `<a href="${indexUrl[lang]}">${label}</a>`];
}

function ctaOf(lang, pre) {
  const html = read(htmlOf(indexUrl[lang]));
  return html
    .slice(html.indexOf('<section class="conversion-section'), html.lastIndexOf('</main>'))
    .trim()
    .replace(/src="(?:\.\.\/)+assets\//g, `src="${pre}assets/`);
}

function writePage({ lang, url, urls, eyebrow, h1, lead, nav, tiles, crumb, seoTitle, seoDesc, image, items }) {
  const pre = prefixOf(url);
  const [home, readings] = crumbs(lang);
  const html = `<main>
      <section class="page-intro">
        <div class="container">
          <p class="breadcrumbs" data-auto>${home} / ${readings} / ${crumb}</p>
          <p class="eyebrow">${eyebrow}</p>
          <h1>${h1}</h1>
          <p class="lead">
            ${lead}
          </p>
          ${nav}
        </div>
      </section>
      <section class="section compact-top">
        <div class="container">
          <div class="story-list">
              ${tiles.join('\n              ')}
          </div>
        </div>
      </section>
      ${ctaOf(lang, pre)}
    </main>
`;
  write(htmlOf(url), html);

  const meta = readMeta(astroOf(indexUrl[lang]));
  const oldPre = meta.assetPrefix;
  const fixPre = (s) => s.split(`"${oldPre}`).join(`"${pre}`);
  const options = meta.optionsHtml
    .replace(/ aria-current="page"/g, '')
    .replace(/<a href="[^"]*" hreflang="([^"]+)"/g, (m, hl) => {
      const l = hl === 'pt-BR' ? 'pt' : hl;
      return `<a href="${urls[l]}" hreflang="${hl}"${l === lang ? ' aria-current="page"' : ''}`;
    });
  Object.assign(meta, {
    path: url.replace(/^\//, '') + 'index.html',
    title: seoTitle,
    description: seoDesc,
    canonical: SITE + url,
    og: [
      ['og:type', 'website'],
      ['og:site_name', 'Italiano con Martin'],
      ['og:title', seoTitle],
      ['og:description', seoDesc],
      ['og:url', SITE + url],
      ['og:image', `${SITE}/assets/${image}`],
      ['twitter:card', 'summary_large_image'],
      ['twitter:title', seoTitle],
      ['twitter:description', seoDesc],
      ['twitter:image', `${SITE}/assets/${image}`],
    ],
    jsonld: [
      JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: seoTitle,
        url: SITE + url,
        inLanguage: HREFLANG(lang),
        mainEntity: { '@type': 'ItemList', itemListElement: items.map(([name, u], i) => ({ '@type': 'ListItem', position: i + 1, name, url: SITE + u })) },
      }),
    ],
    hreflangs: [...LANGS.map((l) => [HREFLANG(l), SITE + urls[l]]), ['x-default', SITE + urls.it]],
    assetPrefix: pre,
    bodyScripts: meta.bodyScripts.map(fixPre),
    iconLinks: meta.iconLinks.map(fixPre),
    brandImgSrc: `${pre}assets/martin-photo.svg`,
    optionsHtml: options,
  });
  const rel = url.replace(/^\//, '');
  write(
    astroOf(url),
    `---
// Generato da scripts/create-reading-categories.mjs (categorie e livelli delle letture, 2026-10-29).
import SiteLayout from '~/layouts/SiteLayout.astro';
import main from '~/html/${rel}index.html?raw';
const meta = ${JSON.stringify(meta, null, 2)};
---

<SiteLayout meta={meta} main={main} />
`
  );
}

const titleOf = (tile) => tile.html.match(/<h2>([^<]*)<\/h2>/)[1].trim();
const imageOf = (tile) => tile.html.match(/src="(?:\.\.\/)*assets\/([^"]+)"/)[1].replace('-card.webp', '.webp');

function categoryPage(lang, cat, tiles) {
  const c = CATEGORIES[cat][lang];
  const url = catUrl(cat, lang);
  const list = tiles.filter((t) => t.cat === cat);
  const pre = prefixOf(url);
  const urls = Object.fromEntries(LANGS.map((l) => [l, catUrl(cat, l)]));
  writePage({
    lang,
    url,
    urls,
    eyebrow: UI[lang].cats,
    h1: c.name,
    lead: c.intro,
    nav: catsNav(lang, cat),
    tiles: list.map((t) => retile(t.html, t.href, cat, lang, pre, t.levels)),
    crumb: c.name,
    seoTitle: c.seoTitle,
    seoDesc: c.seoDesc,
    image: imageOf(list[0]),
    items: list.map((t) => [titleOf(t), t.href]),
  });
}

function levelPage(lang, lv, tiles) {
  const L = LEVEL_PAGES[lang];
  const url = levelUrl(lv, lang);
  const pre = prefixOf(url);
  const LV = lv.toUpperCase();
  const list = [...CATEGORY_ORDER, 'favole'].flatMap((cat) => tiles.filter((t) => t.cat === cat && t.levels.includes(LV)));
  const urls = Object.fromEntries(LANGS.map((l) => [l, levelUrl(lv, l)]));
  writePage({
    lang,
    url,
    urls,
    eyebrow: L.eyebrow,
    h1: L[lv].h1,
    lead: L[lv].lead,
    nav: levelNav(lang, lv),
    tiles: list.map((t) => retile(t.html, t.href, t.cat, lang, pre, [LV], `#${lv}`)),
    crumb: `${UI[lang].level} ${LV}`,
    seoTitle: L[lv].seoTitle,
    seoDesc: L[lv].seoDesc,
    image: imageOf(list[0]),
    items: list.map((t) => [titleOf(t), `${t.href}#${lv}`]),
  });
}

// ---------------------------------------------------------------- 3. pagine che esistono già
// Indici A1 e A2: etichette delle tessere e barra dei livelli. Indice delle favole: barra dei livelli.
function fixLevelIndex(lang, lv) {
  const url = indexUrl[lang] + lv + '/';
  const p = htmlOf(url);
  let h = read(p);
  h = h.replace(/(<a class="story-tile" href="([^"]*)">[^]*?<span class="badge">)([^<]*)(<\/span>)/g, (m, start, href, badge, end) => {
    const key = keyOf[resolve(href, url).replace(/#.*$/, '')];
    if (!key) return m;
    const cat = categoryOf(key);
    const label = cat === 'favole' ? '' : CATEGORIES[cat][lang].badge + ' · ';
    return start + label + levelsIn(badge).join(' · ') + end;
  });
  write(p, fixLevelNav(h, indexUrl[lang]));
}

// Briciole di pane, uguali in tutta la sezione (2026-10-30, Martin: «mantieni sempre coerente la struttura»):
//   letture      Home / Letture / <categoria> / titolo
//   favole       Home / Letture / Favole / titolo      (l'URL /favole/ resta: è la pagina che rende di più su Google)
//   indice favole, categorie, livelli   Home / Letture / <nome>
// Il BreadcrumbList in JSON-LD lo aggiunge poi add-breadcrumbs.mjs.
const stripTags = (s) => s.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
function setCrumbs(lang, pageUrl, trail, title) {
  const p = htmlOf(pageUrl);
  if (!fs.existsSync(p)) return;
  let h = read(p);
  const [home, readings] = crumbs(lang);
  const mid = trail.map(([name, url]) => ` / <a class="crumb-cat" href="${url}">${name}</a>`).join('');
  const old = h.match(/<p class="breadcrumbs"[^>]*>([^]*?)<\/p>/);
  const last = title ?? (old ? stripTags(old[1].split(/<\/a>\s*\/\s*/).at(-1)) : null);
  if (!last) return;
  // data-auto: build-pt.mjs ne traduce solo il titolo, il resto lo rifà questo script.
  const visible = `<p class="breadcrumbs" data-auto>${home} / ${readings}${mid} / ${last}</p>`;
  if (old) h = h.replace(old[0], visible);
  else {
    // Pagina senza briciola (l'indice delle favole): in testa all'introduzione.
    const at = h.indexOf('<div class="container">', h.indexOf('<section class="page-intro">'));
    if (at < 0) return;
    h = h.slice(0, at) + '<div class="container">' + visible + h.slice(at + '<div class="container">'.length);
  }
  write(p, h);

  // Il BreadcrumbList in JSON-LD lo scrive add-breadcrumbs.mjs per tutto il sito, dalla briciola visibile.
}

function fixCrumbs(lang, tiles) {
  const fables = [UI[lang].fables, fableUrl[lang]];
  for (const t of tiles) {
    if (t.cat === 'favole') setCrumbs(lang, t.href, [fables]);
    else setCrumbs(lang, t.href, [[CATEGORIES[t.cat][lang].name, catUrl(t.cat, lang)]]);
  }
  setCrumbs(lang, fableUrl[lang], [], UI[lang].fables);
  for (const cat of CATEGORY_ORDER) setCrumbs(lang, catUrl(cat, lang), [], CATEGORIES[cat][lang].name);
  for (const lv of [...LEVELS, 'a1', 'a2']) setCrumbs(lang, indexUrl[lang] + lv + '/', [], `${UI[lang].level} ${lv.toUpperCase()}`);
}

// Indice delle favole: stessa barra degli argomenti delle letture, con «Favole» evidenziato.
function fableIndexNav(lang) {
  const p = htmlOf(fableUrl[lang]);
  let h = fixLevelNav(read(p), indexUrl[lang]).replace(/<nav class="reading-cats"[^]*?<\/nav>/, '');
  h = h.replace(/(<nav class="level-hub-nav"[^]*?<\/nav>)/, `$1${catsNav(lang, 'favole')}`);
  write(p, h);
}

// ---------------------------------------------------------------- 4. sitemap e portoghese
function sitemap() {
  const p = 'public/sitemap.xml';
  let s = read(p);
  for (const lang of LANGS)
    for (const url of [...CATEGORY_ORDER.map((c) => catUrl(c, lang)), ...LEVELS.map((lv) => levelUrl(lv, lang))]) {
      const loc = SITE + encodeURI(url);
      if (!s.includes(`<loc>${loc}</loc>`)) s = s.replace(/\n?<\/urlset>/, `\n  <url><loc>${loc}</loc><changefreq>weekly</changefreq></url>\n</urlset>`);
    }
  write(p, s);
}

function ptPages() {
  const p = 'scripts/data/pt/paginas.mjs';
  let s = read(p);
  const lines = [];
  for (const url of [...CATEGORY_ORDER.map((c) => catUrl(c, 'it')), ...LEVELS.map((lv) => levelUrl(lv, 'it'))]) {
    const it = url.replace(/^\//, '') + 'index.html';
    const pt = (url === levelUrl('b1', 'it') || url === levelUrl('b2', 'it') || url === levelUrl('c1', 'it')
      ? levelUrl(url.split('/').at(-2), 'pt')
      : catUrl(CATEGORY_ORDER.find((c) => catUrl(c, 'it') === url), 'pt')
    ).replace(/^\//, '') + 'index.html';
    if (!s.includes(`'${it}'`)) lines.push(`  { it: '${it}', pt: '${pt}', own: true },`);
  }
  if (!lines.length) return;
  const at = s.lastIndexOf('];');
  s = s.slice(0, at) + '  // Categorie e livelli delle letture (2026-10-29): le scrive create-reading-categories.mjs.\n' + lines.join('\n') + '\n' + s.slice(at);
  write(p, s);
}

// ---------------------------------------------------------------- esecuzione
for (const lang of LANGS) {
  const tiles = tilesOf(lang);
  rebuildIndex(lang, tiles);
  for (const cat of CATEGORY_ORDER) categoryPage(lang, cat, tiles);
  for (const lv of LEVELS) levelPage(lang, lv, tiles);
  for (const lv of ['a1', 'a2']) fixLevelIndex(lang, lv);
  fableIndexNav(lang);
  fixCrumbs(lang, tiles);
  const count = Object.fromEntries([...CATEGORY_ORDER, 'favole'].map((c) => [c, tiles.filter((t) => t.cat === c).length]));
  console.log(lang, JSON.stringify(count));
}
sitemap();
ptPages();
if (unknown.size) console.log(`Letture senza categoria, messe in «${DEFAULT_CATEGORY}»: ${[...unknown].join(', ')}`);

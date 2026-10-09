#!/usr/bin/env node
// Costruisce le pagine in portoghese brasiliano (/pt/) partendo da quelle
// spagnole, frase per frase, con il dizionario in scripts/data/pt/.
//
//   node scripts/pt/build-pt.mjs            costruisce le pagine e aggiorna
//                                           hreflang, selettori e sitemap
//   node scripts/pt/build-pt.mjs --missing  scrive in work/pt-mancanti.txt le
//                                           frasi che il dizionario non ha
//
// Perché dallo spagnolo: è la lingua più vicina, e la sua pagina ha già
// separato con lang="it" l'italiano di studio dal testo di servizio.
// L'italiano non passa mai dal dizionario: resta identico.
//
// Lo script si rilancia ogni volta che una pagina spagnola cambia (i
// generatori la riscrivono) o che si aggiunge una pagina all'elenco: i link
// verso pagine che in portoghese non ci sono ancora diventano testo semplice,
// e le tessere degli indici che portano lì spariscono.

import { readFileSync, writeFileSync, existsSync, mkdirSync, globSync } from 'node:fs';
import path from 'node:path';
import * as cheerio from 'cheerio';
import { PAGES as PT_PAGES } from '../data/pt/paginas.mjs';
import { loadDictionary } from './dictionary.mjs';

const ROOT = process.cwd();
const SITE = 'https://italianoconmartin.com';
const HREFLANG = 'pt-BR';
const OPTION = `<a href="§" hreflang="${HREFLANG}" lang="${HREFLANG}"><span aria-hidden="true">🇧🇷</span><span>Português</span></a>`;
const MISSING_ONLY = process.argv.includes('--missing');

const dict = loadDictionary();
const missing = new Map();

// ---------------------------------------------------------------------------
// 1. Tutte le pagine del sito, raggruppate per pagina italiana
const pages = [];
for (const file of globSync('src/pages/**/*.astro', { cwd: ROOT })) {
  const src = readFileSync(file, 'utf8');
  const m = src.match(/const meta = (\{[\s\S]*?\r?\n\});\r?\n/);
  if (!m) continue;
  const meta = JSON.parse(m[1]);
  pages.push({ file: file.replaceAll('\\', '/'), src, meta, metaJson: m[1] });
}
const urlOf = (p) => `${SITE}/${p.replace(/index\.html$/, '')}`;
const byUrl = new Map(pages.map((p) => [decodeURI(urlOf(p.meta.path)), p]));

// Gruppo di una pagina portoghese: le pagine sorelle nelle altre lingue.
const groups = [];
for (const { it, pt } of PT_PAGES) {
  const itPage = byUrl.get(decodeURI(urlOf(it)));
  if (!itPage) throw new Error(`Pagina italiana non trovata: ${it}`);
  const esUrl = itPage.meta.hreflangs.find(([l]) => l === 'es')?.[1];
  const esPage = esUrl && byUrl.get(decodeURI(esUrl));
  if (!esPage) throw new Error(`Pagina spagnola non trovata per ${it}`);
  const siblings = itPage.meta.hreflangs
    .filter(([l]) => l !== 'x-default' && l !== HREFLANG)
    .map(([, u]) => byUrl.get(decodeURI(u)))
    .filter(Boolean);
  groups.push({ it, pt, ptUrl: urlOf(pt), itPage, esPage, siblings });
}

// Ogni URL di una pagina tradotta (in qualunque lingua) → URL portoghese.
const toPt = new Map();
for (const g of groups) {
  for (const s of g.siblings) toPt.set(decodeURI(urlOf(s.meta.path)), g.ptUrl);
  toPt.set(decodeURI(g.ptUrl), g.ptUrl);
}
// PDF: /pdf/es/<slug-es>-a1.pdf → /pdf/pt/<slug-pt>-a1.pdf
const slugOf = (p) => path.basename(p, '.html');
const pdfSlug = new Map(groups.map((g) => [slugOf(g.esPage.meta.path), slugOf(g.pt)]));

// ---------------------------------------------------------------------------
// 2. Traduzione di un frammento
const INLINE = new Set([
  'a',
  'em',
  'strong',
  'b',
  'i',
  'span',
  'br',
  'small',
  'sup',
  'sub',
  'code',
  'abbr',
  'mark',
  'u',
  's',
  'img',
  'kbd',
  'q',
  'time',
]);
const ATTRS = ['alt', 'aria-label', 'placeholder', 'title'];
// Tessere che spariscono se portano a una pagina non ancora tradotta
const CARD_SELECTORS = [
  'a.home-card',
  'a.story-tile',
  '.lesson-card',
  '.resource-card',
  '.reading-card',
  '.story-tile',
  '.level-tile',
];
const norm = (s) => s.replace(/\s+/g, ' ').trim();
const hasWords = (s) => /\p{L}{2,}/u.test(s);
// Per riconoscere una frase italiana: senza marcatura di lingua e senza tag.
const bare = (s) => norm(s.replace(/ lang="it"/g, '').replace(/<[^>]+>/g, ' '));

function translate(text, where) {
  const key = norm(text);
  if (!hasWords(key)) return text;
  const hit = dict.lookup(key);
  if (hit !== undefined) return hit;
  if (!missing.has(key)) missing.set(key, where);
  return text;
}

// innerHTML con i link sostituiti da segnaposto: la chiave non dipende
// dagli URL, che cambiano quando si aggiungono pagine.
function withPlaceholders(html) {
  const hrefs = [];
  const key = html.replace(/href="([^"]*)"/g, (_, h) => {
    hrefs.push(h);
    return `href="§${hrefs.length}"`;
  });
  return { key, hrefs };
}
const fromPlaceholders = (html, hrefs) => html.replace(/href="§(\d+)"/g, (_, n) => `href="${hrefs[n - 1]}"`);

function italianSegments(html) {
  const set = new Set();
  const $ = cheerio.load(html, null, false);
  walk(
    $,
    $.root()[0],
    (el) => set.add(bare(withPlaceholders($(el).html()).key)),
    () => {}
  );
  return set;
}

// Il testo di servizio di un elemento: tutto tranne l'italiano marcato.
function serviceText($, el) {
  const c = $(el).clone();
  c.find('[lang="it"]').remove();
  return c.text();
}

// Un tag in linea che contiene blocchi (la tessera <a> con <h3> e <p>) conta come blocco.
const isBlock = (c) => c.type === 'tag' && (!INLINE.has(c.name) || (c.children || []).some(isBlock));

// Un elenco di link uno dopo l'altro (pulsanti, livelli): ogni link è una frase.
const onlyLinks = (el) => {
  const kids = (el.children || []).filter((c) => c.type === 'tag' || /\S/.test(c.data || ''));
  return kids.length > 1 && kids.every((c) => c.type === 'tag' && c.name === 'a');
};

// Visita: `leaf` per gli elementi che contengono solo testo e tag in linea,
// `text` per i nodi di testo sparsi accanto a dei blocchi.
function walk($, node, leaf, text) {
  const mixed = (node.children || []).some(isBlock);
  for (const child of node.children || []) {
    if (child.type === 'text') {
      if (mixed && hasWords(child.data)) text(child);
      continue;
    }
    if (child.type !== 'tag' || child.name === 'script' || child.name === 'style') continue;
    if (child.attribs.lang === 'it') continue;
    if ((child.children || []).some(isBlock)) walk($, child, leaf, text);
    else if (onlyLinks(child)) {
      for (const a of child.children) if (a.type === 'tag' && hasWords(serviceText($, a))) leaf(a);
    } else if (hasWords(serviceText($, child))) leaf(child);
  }
}

function resolveHref(href, baseUrl) {
  if (!href || /^(#|mailto:|tel:|javascript:)/.test(href) || /^https?:\/\/(?!italianoconmartin\.com)/.test(href))
    return null;
  const u = new URL(href, baseUrl);
  return u;
}

function convertFragment(esHtml, itHtml, esPageUrl, ptPageUrl, where) {
  const $ = cheerio.load(esHtml, null, false);
  const itSet = italianSegments(itHtml);

  // a. link: verso le pagine portoghesi, o via se la pagina non c'è
  $('a[href]').each((_, a) => {
    const href = $(a).attr('href');
    const u = resolveHref(href, esPageUrl);
    if (!u) return;
    if (u.pathname.startsWith('/pdf/es/')) {
      const m = u.pathname.match(/^\/pdf\/es\/(.+)-(a1|a2|b1|b2|c1|all-levels)\.pdf$/);
      const slug = m && pdfSlug.get(decodeURIComponent(m[1]));
      if (slug) $(a).attr('href', `/pdf/pt/${slug}-${m[2]}.pdf`);
      else $(a).attr('data-pt-dead', '1');
      return;
    }
    if (!/\.html$|\/$/.test(u.pathname)) return; // risorse statiche
    const target = toPt.get(decodeURI(`${u.origin}${u.pathname}`));
    if (target) $(a).attr('href', new URL(target).pathname + u.hash);
    else $(a).attr('data-pt-dead', '1');
  });
  for (const sel of CARD_SELECTORS) {
    $(sel).each((_, card) => {
      const self = $(card).is('a[data-pt-dead]');
      const inner = $(card).find('a[href]');
      if (self || (inner.length && inner.toArray().every((a) => $(a).attr('data-pt-dead')))) $(card).remove();
    });
  }
  // tessere numerate della home (01, 02…): numeri di nuovo in fila
  $('.home-grid').each((_, grid) => {
    $(grid)
      .find('.card-number')
      .each((i, n) => $(n).text(String(i + 1).padStart(2, '0')));
  });
  // sezioni degli indici rimaste senza pagine, e i rimandi interni a loro
  $('.level-section').each((_, s) => {
    if (
      !$(s)
        .find('a[href]')
        .filter((_, a) => !$(a).attr('data-pt-dead') && !/^#/.test($(a).attr('href'))).length
    )
      $(s).remove();
  });
  $('.resource-directory, .story-list, .lesson-grid').each((_, el) => {
    if (!$(el).children().length) $(el).remove();
  });
  $('a[href^="#"]').each((_, a) => {
    const id = $(a).attr('href').slice(1);
    if (id && !$(`[id="${id}"]`).length) $(a).attr('data-pt-dead', '1');
  });
  $('a[data-pt-dead]').each((_, a) => {
    if ($(a).closest('.pdf-downloads,.pdf-downloads-level,.pdf-downloads-complete').length) $(a).remove();
    else if (onlyLinks($(a).parent()[0]) || /\bbutton\b/.test($(a).attr('class') || '')) $(a).remove();
    else $(a).replaceWith($(a).html());
  });

  // b. testo
  walk(
    $,
    $.root()[0],
    (el) => {
      const { key, hrefs } = withPlaceholders($(el).html());
      // Le etichette brevi (Persona, Forma, Nota) sono uguali in spagnolo e in italiano:
      // si riconoscono come italiane solo le frasi di almeno tre parole.
      if (itSet.has(bare(key)) && bare(key).split(' ').length >= 3) return;
      const out = translate(key, where);
      if (out !== key) $(el).html(fromPlaceholders(out, hrefs));
    },
    (node) => {
      const lead = node.data.match(/^\s*/)[0];
      const tail = node.data.match(/\s*$/)[0];
      const out = translate(node.data, where);
      if (out !== node.data) node.data = lead + norm(out) + tail;
    }
  );

  // c. attributi di servizio
  $('*').each((_, el) => {
    if ($(el).closest('[lang="it"]').length) return;
    for (const attr of ATTRS) {
      const v = el.attribs?.[attr];
      if (v && hasWords(v)) el.attribs[attr] = translate(v, where);
    }
    for (const [attr, v] of Object.entries(el.attribs || {})) {
      if (attr.startsWith('data-msg') && hasWords(v)) el.attribs[attr] = translate(v, where);
    }
    const href = el.attribs?.href;
    if (href && href.startsWith('https://wa.me/')) el.attribs.href = translate(href, where);
  });
  return $.html();
}

// ---------------------------------------------------------------------------
// 3. Metadati della pagina portoghese
function translateMeta(esMeta, g) {
  const where = g.pt;
  const t = (s) => (s ? translate(s, where) : s);
  const meta = structuredClone(esMeta);
  const depthEs = esMeta.path.split('/').length;
  const depthPt = g.pt.replace(/\/$/, '/index.html').split('/').length;
  if (depthEs !== depthPt) throw new Error(`Profondità diversa: ${esMeta.path} → ${g.pt}`);
  meta.path = g.pt;
  meta.lang = 'pt';
  meta.title = t(meta.title);
  meta.description = t(meta.description);
  meta.canonical = g.ptUrl;
  meta.brandHref = '/pt/';
  delete meta.ui; // menu e piè di pagina portoghesi arrivano da src/data/i18n.json
  meta.og = meta.og.map(([k, v]) => {
    if (/title$|description$/.test(k)) return [k, t(v)];
    if (k === 'og:url') return [k, g.ptUrl];
    if (k === 'og:locale') return [k, 'pt_BR'];
    return [k, v];
  });
  meta.jsonld = meta.jsonld.map((json) => {
    const data = JSON.parse(json);
    const ptFor = (v) => {
      const [base, hash] = v.split('#');
      const hit = toPt.get(decodeURI(base));
      return hit ? hit + (hash ? `#${hash}` : '') : null;
    };
    const fix = (o) => {
      if (Array.isArray(o)) return o.forEach(fix);
      if (!o || typeof o !== 'object') return;
      if (Array.isArray(o.itemListElement)) {
        o.itemListElement = o.itemListElement.filter((it) => !it.url || ptFor(it.url));
        o.itemListElement.forEach((it, i) => it.position && (it.position = i + 1));
      }
      for (const [k, v] of Object.entries(o)) {
        if (typeof v === 'string' && ['name', 'description', 'headline', 'about', 'teaches'].includes(k)) o[k] = t(v);
        else if (k === 'inLanguage' && v === 'es') o[k] = HREFLANG;
        else if (typeof v === 'string' && v.startsWith(SITE)) o[k] = ptFor(v) || v;
        else fix(v);
      }
    };
    fix(data);
    return JSON.stringify(data);
  });
  return meta;
}

// hreflang e selettore: la voce portoghese, dopo lo spagnolo
function withPt(meta, ptUrl, current) {
  const h = meta.hreflangs.filter(([l]) => l !== HREFLANG);
  const at = h.findIndex(([l]) => l === 'es') + 1;
  h.splice(at, 0, [HREFLANG, ptUrl]);
  meta.hreflangs = h;
  let options = meta.optionsHtml.replace(/<a href="[^"]*" hreflang="pt-BR"[\s\S]*?<\/a>/, '');
  if (current) options = options.replace(/ aria-current="page"/g, '');
  const option = OPTION.replace('§', new URL(ptUrl).pathname).replace(
    'lang="pt-BR">',
    current ? 'lang="pt-BR" aria-current="page">' : 'lang="pt-BR">'
  );
  const esEnd = options.search(/<a [^>]*hreflang="fr"/);
  meta.optionsHtml = esEnd >= 0 ? options.slice(0, esEnd) + option + options.slice(esEnd) : options + option;
  return meta;
}

function writeAstro(file, src, oldJson, meta) {
  const json = JSON.stringify(meta, null, 2);
  const out = src.replace(oldJson, json);
  if (out !== src) writeFileSync(file, out);
}

// ---------------------------------------------------------------------------
// 4. Costruzione
const built = [];
for (const g of groups) {
  const esFrag = path.join(ROOT, 'src/html', g.esPage.meta.path);
  const itFrag = path.join(ROOT, 'src/html', g.itPage.meta.path);
  const ptPath = g.pt;
  const html = convertFragment(
    readFileSync(esFrag, 'utf8'),
    existsSync(itFrag) ? readFileSync(itFrag, 'utf8') : '',
    urlOf(g.esPage.meta.path),
    g.ptUrl,
    g.pt
  );
  const meta = withPt(translateMeta(g.esPage.meta, g), g.ptUrl, true);
  meta.path = ptPath;
  built.push({ g, html, meta, ptPath });
}

if (missing.size) {
  const out = [...missing].map(([k, where], i) => `#${i + 1} [${where}]\n${k}\n`).join('\n');
  mkdirSync(path.join(ROOT, 'work'), { recursive: true });
  writeFileSync(path.join(ROOT, 'work/pt-mancanti.txt'), out);
  console.log(`Frasi senza traduzione: ${missing.size} → work/pt-mancanti.txt`);
  if (!MISSING_ONLY) process.exitCode = 1;
  process.exit();
}
if (MISSING_ONLY) {
  console.log('Il dizionario copre tutte le frasi.');
  process.exit();
}

for (const { g, html, meta, ptPath } of built) {
  const fragFile = path.join(ROOT, 'src/html', ptPath);
  mkdirSync(path.dirname(fragFile), { recursive: true });
  writeFileSync(fragFile, html);
  const astroFile = path.join(
    ROOT,
    'src/pages',
    g.pt.endsWith('/index.html') ? g.pt.replace(/\.html$/, '.astro') : `${g.pt}.astro`
  );
  mkdirSync(path.dirname(astroFile), { recursive: true });
  const importPath = `~/html/${ptPath}`;
  writeFileSync(
    astroFile,
    `---\n// Generata da scripts/pt/build-pt.mjs a partire dalla pagina spagnola: non modificare a mano.\nimport SiteLayout from '~/layouts/SiteLayout.astro';\nimport main from '${importPath}?raw';\nconst meta = ${JSON.stringify(meta, null, 2)};\n---\n\n<SiteLayout meta={meta} main={main} />\n`
  );
  // pagine sorelle: hreflang e selettore
  for (const s of g.siblings) {
    const fresh = readFileSync(s.file, 'utf8');
    const m = fresh.match(/const meta = (\{[\s\S]*?\r?\n\});\r?\n/);
    const sm = JSON.parse(m[1]);
    writeAstro(s.file, fresh, m[1], withPt(sm, g.ptUrl, false));
  }
}

// sitemap: la pagina portoghese subito dopo quella spagnola
const sitemapFile = path.join(ROOT, 'public/sitemap.xml');
let sitemap = readFileSync(sitemapFile, 'utf8');
let added = 0;
for (const { g } of built) {
  const loc = encodeURI(decodeURI(g.ptUrl));
  if (sitemap.includes(`<loc>${loc}</loc>`)) continue;
  const esLoc = encodeURI(decodeURI(urlOf(g.esPage.meta.path)));
  const line = `  <url><loc>${loc}</loc><changefreq>monthly</changefreq></url>\n`;
  const at = sitemap.indexOf(`<loc>${esLoc}</loc>`);
  if (at >= 0) {
    const end = sitemap.indexOf('\n', at) + 1;
    sitemap = sitemap.slice(0, end) + line + sitemap.slice(end);
  } else sitemap = sitemap.replace('</urlset>', `${line}</urlset>`);
  added++;
}
writeFileSync(sitemapFile, sitemap);
console.log(`Pagine portoghesi: ${built.length}. Voci nuove nella sitemap: ${added}.`);

// ATTENZIONE: strumento della migrazione una-tantum, GIÀ ESEGUITO.
// La sorgente del sito è ora src/pages/ + src/html/, che dopo la migrazione
// hanno ricevuto correzioni assenti in legacy-html (header uniforme, etichette
// accessibili localizzate). Rilanciare questo script le cancellerebbe:
// serve il flag esplicito --force-regenerate.
//
// Migrazione legacy-html -> Astro.
// Estrae da ogni pagina HTML: metadati SEO (ovunque si trovino: alcune pagine
// hanno un bug con <head></head> vuoto e i metadati nel body), contenuto tra
// header e footer, e script finali. Genera pagine Astro sottili su SiteLayout.
// Redirect e file non templabili restano file statici.
//
// Uso: node scripts/migrate/extract.mjs

import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import * as cheerio from 'cheerio';

const root = process.cwd();
const sourceDir = path.join(root, 'legacy-html');
const pagesDir = path.join(root, 'src', 'pages');
const htmlDir = path.join(root, 'src', 'html');
const dataDir = path.join(root, 'src', 'data');
const workDir = path.join(root, 'work', 'migration');
const marker = 'Migrated from legacy-html by scripts/migrate/extract.mjs';
const legacyMarker = 'Generated from legacy-html by scripts/import-html.mjs';

const report = { redirects: [], rawPages: [], anomalies: [], pages: 0, uiOverrides: [] };

if (!process.argv.includes('--force-regenerate')) {
  console.error(
    [
      'Rigenerazione bloccata: la sorgente del sito è src/pages/ + src/html/.',
      'Questo script ricostruisce quelle cartelle da legacy-html/ (congelato) e',
      'scarterebbe le correzioni applicate dopo la migrazione.',
      'Se sai davvero cosa stai facendo: node scripts/migrate/extract.mjs --force-regenerate',
    ].join('\n')
  );
  process.exit(1);
}

// ---------------------------------------------------------------- helpers

function walk(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(fullPath) : [fullPath];
  });
}

function rel(file) {
  return path.relative(sourceDir, file).replaceAll('\\', '/');
}

function anomaly(page, message) {
  report.anomalies.push({ page, message });
}

// ---------------------------------------------------------------- classify

const allFiles = walk(sourceDir);
const htmlFiles = allFiles.filter((f) => /\.html?$/i.test(f));

const redirectPages = [];
const rawPages = []; // 404, google verification: restano file statici interi
const realPages = [];

for (const file of htmlFiles) {
  const relative = rel(file);
  const html = readFileSync(file, 'utf8');
  if (/^google[a-z0-9_-]+\.html$/i.test(relative)) {
    rawPages.push(relative);
    continue;
  }
  const $ = cheerio.load(html);
  if ($('meta[http-equiv="refresh"]').length > 0) {
    redirectPages.push(relative);
    continue;
  }
  if ($('header.site-header').length === 1 && $('footer').length === 1) {
    realPages.push({ relative, html });
  } else {
    rawPages.push(relative);
  }
}

// ---------------------------------------------------------------- extract

const i18n = { languageOrder: [], languages: {}, ui: {} };
const uiVotes = {}; // lang -> Map(jsonUi -> count)

const METADATA_TAGS = new Set(['meta', 'title', 'link', 'script', 'style']);

function isMetadataNode(el, $) {
  const tag = el.tagName?.toLowerCase();
  if (!METADATA_TAGS.has(tag)) return false;
  if (tag === 'script') {
    return $(el).attr('type') === 'application/ld+json';
  }
  return true;
}

function extractPage(relative, html) {
  const $ = cheerio.load(html);
  const lang = $('html').attr('lang') || 'it';

  const meta = {
    path: relative,
    lang,
    title: $('title').first().text(),
    description: $('meta[name="description"]').first().attr('content') ?? null,
    canonical: $('link[rel="canonical"]').first().attr('href') ?? null,
    robots: $('meta[name="robots"]').first().attr('content') ?? null,
    author: $('meta[name="author"]').first().attr('content') ?? null,
    og: [],
    jsonld: [],
    hreflangs: [],
    extraHead: [],
    stylesheetHref: '',
    assetPrefix: '',
    brandHref: '',
    bodyScripts: [],
  };

  $('meta[property^="og:"], meta[name^="twitter:"]').each((_, el) => {
    const $el = $(el);
    meta.og.push([$el.attr('property') || $el.attr('name'), $el.attr('content') ?? '']);
  });

  // JSON-LD: solo quelli nell'head o prima dell'header (quelli dentro al
  // contenuto restano nel frammento e non vanno duplicati).
  const headerElForJsonld = $('header.site-header').get(0);
  const jsonldEls = new Set();
  $('head script[type="application/ld+json"]').each((_, el) => jsonldEls.add(el));
  for (const el of $('body').children().toArray()) {
    if (el === headerElForJsonld) break;
    if (el.tagName?.toLowerCase() === 'script' && $(el).attr('type') === 'application/ld+json') jsonldEls.add(el);
  }
  for (const el of jsonldEls) meta.jsonld.push($(el).text().trim());

  $('link[rel="alternate"][hreflang]').each((_, el) => {
    meta.hreflangs.push([$(el).attr('hreflang'), $(el).attr('href')]);
  });

  // Solo il foglio di stile principale è "riconosciuto": eventuali altri
  // <link rel="stylesheet"> (es. reading-answers.css) restano in extraHead.
  let mainStylesheetEl = null;
  $('link[rel="stylesheet"]').each((_, el) => {
    const href = $(el).attr('href') ?? '';
    if (!mainStylesheetEl && /(^|\/)styles\.css(\?|$)/.test(href)) {
      mainStylesheetEl = el;
      meta.stylesheetHref = href;
      meta.assetPrefix = href.replace(/styles\.css(\?.*)?$/, '');
    }
  });
  if (!mainStylesheetEl) anomaly(relative, 'styles.css non trovato');

  // Icone verbatim: alcune pagine ne hanno più di una, con sizes/versioni
  meta.iconLinks = $('link[rel="icon"], link[rel="apple-touch-icon"]')
    .toArray()
    .map((el) => $.html(el));

  // Nodi metadata non riconosciuti (preload ecc.), ovunque si trovino prima dell'header
  const header = $('header.site-header');
  const headerEl = header.get(0);
  const footerEl = $('footer').get(0);

  const preHeaderNodes = [];
  for (const el of $('head').children().toArray()) preHeaderNodes.push(el);
  for (const el of $('body').children().toArray()) {
    if (el === headerEl) break;
    preHeaderNodes.push(el);
  }

  for (const el of preHeaderNodes) {
    const $el = $(el);
    const tag = el.tagName?.toLowerCase();
    if (!tag) continue; // nodi testo/BOM
    if (!isMetadataNode(el, $)) {
      anomaly(relative, `elemento inatteso prima dell'header: <${tag}>`);
      continue;
    }
    const recognized =
      tag === 'title' ||
      (tag === 'meta' &&
        ($el.attr('charset') ||
          ['viewport', 'description', 'robots', 'author'].includes($el.attr('name')) ||
          ($el.attr('property') || '').startsWith('og:') ||
          ($el.attr('name') || '').startsWith('twitter:'))) ||
      (tag === 'link' &&
        (['canonical', 'icon', 'apple-touch-icon'].includes($el.attr('rel')) ||
          el === mainStylesheetEl ||
          ($el.attr('rel') === 'alternate' && $el.attr('hreflang')))) ||
      (tag === 'script' && $el.attr('type') === 'application/ld+json');
    if (!recognized) meta.extraHead.push($.html(el));
  }

  // Header: struttura attesa .nav-wrap = [a.brand, details, nav].
  // Le pagine con struttura diversa conservano l'header verbatim.
  const navWrap = header.find('.container.nav-wrap');
  const wrapTags = navWrap
    .children()
    .toArray()
    .map((el) => el.tagName?.toLowerCase());
  const summarySpans = header.find('details.language-switcher summary > span');
  const standardHeader =
    wrapTags.join(',') === 'a,details,nav' && header.find('a.brand').length === 1 && summarySpans.length === 3;
  if (!standardHeader) {
    meta.headerHtml = navWrap.html() ?? '';
  }

  meta.brandHref = header.find('a.brand').attr('href') ?? '';
  meta.brandImgSrc = header.find('a.brand img').attr('src') ?? '';

  const summaryAria = header.find('details.language-switcher summary').attr('aria-label') ?? '';
  const flag = header.find('summary .language-flag').text();
  const langName = header.find('summary .language-current').text();
  if (standardHeader && !i18n.languages[lang]) i18n.languages[lang] = { name: langName, flag };

  header.find('.language-options a').each((_, el) => {
    const $el = $(el);
    const l = $el.attr('hreflang');
    const spans = $el.find('span');
    if (l && spans.length === 2 && !i18n.languages[l]) {
      i18n.languages[l] = { name: $(spans[1]).text(), flag: $(spans[0]).text() };
    }
  });

  // Opzioni del selettore lingua: verbatim (non sempre derivabili dagli hreflang)
  meta.optionsHtml = header.find('.language-options').html() ?? '';

  const navHtml = header
    .find('nav > a')
    .toArray()
    .map((el) => $.html(el))
    .join('');
  // Footer verbatim (alcune pagine hanno una tagline accanto al marchio)
  const footerGridHtml = $('footer .footer-grid').html() ?? '';

  const ui = { summaryAria, nav: navHtml, footerGrid: footerGridHtml };
  uiVotes[lang] ??= {};
  const uiKey = JSON.stringify(ui);
  uiVotes[lang][uiKey] = (uiVotes[lang][uiKey] ?? 0) + 1;
  meta._ui = ui;

  // Contenuto: tutti gli elementi tra header e footer, verbatim
  const bodyChildren = $('body').children().toArray();
  const headerIdx = bodyChildren.indexOf(headerEl);
  const footerIdx = bodyChildren.indexOf(footerEl);
  if (headerIdx === -1 || footerIdx === -1 || footerIdx < headerIdx) {
    anomaly(relative, 'header/footer non trovati come figli diretti del body');
    return null;
  }
  const contentEls = bodyChildren.slice(headerIdx + 1, footerIdx);
  const mainHtml = contentEls.map((el) => $.html(el)).join('');
  if (!/^<main[\s>]/.test(mainHtml)) anomaly(relative, 'contenuto non inizia con <main>');

  // Script (e altro) dopo il footer, verbatim
  for (const el of bodyChildren.slice(footerIdx + 1)) {
    const tag = el.tagName?.toLowerCase();
    if (tag === 'script') {
      meta.bodyScripts.push($.html(el));
    } else if (tag) {
      anomaly(relative, `elemento inatteso dopo il footer: <${tag}>`);
    }
  }

  return { meta, mainHtml };
}

const extracted = realPages.map(({ relative, html }) => extractPage(relative, html)).filter((x) => x !== null);

// Consenso UI per lingua; le pagine che deviano usano un override integrale
for (const [lang, votes] of Object.entries(uiVotes)) {
  const winner = Object.entries(votes).sort((a, b) => b[1] - a[1])[0][0];
  i18n.ui[lang] = JSON.parse(winner);
}
for (const { meta } of extracted) {
  if (JSON.stringify(meta._ui) !== JSON.stringify(i18n.ui[meta.lang])) {
    meta.ui = meta._ui;
    report.uiOverrides.push(meta.path);
  }
  delete meta._ui;
}
i18n.languageOrder = ['it', 'en', 'es', 'fr', 'cs', 'pl', 'tr', 'de', 'ja'].filter((l) => i18n.languages[l]);

// ---------------------------------------------------------------- emit

// 1. Pulisce le pagine generate in precedenza (import-html e nostre)
if (existsSync(pagesDir)) {
  for (const file of walk(pagesDir).filter((f) => /\.astro$/i.test(f))) {
    const content = readFileSync(file, 'utf8');
    if (content.includes(legacyMarker) || content.includes(marker) || path.basename(file) === 'contact.astro') {
      rmSync(file);
    }
  }
}
rmSync(htmlDir, { recursive: true, force: true });

// 2. Frammenti di contenuto + pagine Astro sottili
for (const { meta, mainHtml } of extracted) {
  const fragmentPath = path.join(htmlDir, ...meta.path.split('/'));
  mkdirSync(path.dirname(fragmentPath), { recursive: true });
  writeFileSync(fragmentPath, mainHtml);

  const parts = meta.path.split('/');
  const file = parts.pop();
  const astroPath = /^index\.html?$/i.test(file)
    ? path.join(pagesDir, ...parts, 'index.astro')
    : path.join(pagesDir, ...parts, `${file}.astro`);
  mkdirSync(path.dirname(astroPath), { recursive: true });

  const importPath = `~/html/${meta.path}?raw`;
  const page = `---
// ${marker}
import SiteLayout from '~/layouts/SiteLayout.astro';
import main from '${importPath.replaceAll("'", "\\'")}';
const meta = ${JSON.stringify(meta, null, 2)};
---

<SiteLayout meta={meta} main={main} />
`;
  writeFileSync(astroPath, page);
  report.pages += 1;
}

// 3. i18n
mkdirSync(dataDir, { recursive: true });
writeFileSync(path.join(dataDir, 'i18n.json'), JSON.stringify(i18n, null, 2) + '\n');

// 4. Report
report.redirects = redirectPages;
report.rawPages = rawPages;
mkdirSync(workDir, { recursive: true });
writeFileSync(path.join(workDir, 'report.json'), JSON.stringify(report, null, 2) + '\n');

console.log(`Pagine templabili: ${report.pages}`);
console.log(`Redirect statici: ${redirectPages.length}`);
console.log(`File statici interi: ${rawPages.length} -> ${rawPages.join(', ')}`);
console.log(`Override UI per pagina: ${report.uiOverrides.length}`);
console.log(`Anomalie: ${report.anomalies.length} (vedi work/migration/report.json)`);

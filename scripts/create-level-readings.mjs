// Letture per livello (decisione 2026-09-29): genera nelle 8 lingue straniere
//   - la lettura «Al bar in Italia» (ex «La storia del caffè»), A1 + A2;
//   - gli indici per livello A1 e A2 (/en/readings/a1/ …);
//   - l'indice di tutti i livelli (pulsanti, livelli veri sulle schede, elenchi B1–C1);
// e completa hreflang e selettore lingua delle pagine italiane /letture/a1/ e /letture/a2/.
// Le pagine italiane sono la fonte: i brani e le domande si copiano da lì.
// Uso: node scripts/create-level-readings.mjs   poi   npm run build
//      python scripts/generate-pdfs.py --only storia-del-caffe-in-italia   e di nuovo npm run build
import fs from 'fs';
import path from 'path';
import { LANGS, T, A1_TILES, A2_TILES, CAFFE_A2_TITLE } from './data/letture-livelli-i18n.mjs';

const SITE = 'https://italianoconmartin.com';
const FLAGS = {
  it: ['🇮🇹', 'Italiano'],
  en: ['🇬🇧', 'English'],
  es: ['🇪🇸', 'Español'],
  fr: ['🇫🇷', 'Français'],
  cs: ['🇨🇿', 'Čeština'],
  pl: ['🇵🇱', 'Polski'],
  tr: ['🇹🇷', 'Türkçe'],
  de: ['🇩🇪', 'Deutsch'],
  ja: ['🇯🇵', '日本語'],
};
const ALL = ['it', ...LANGS];
const read = (p) => fs.readFileSync(p, 'utf8');
const write = (p, s) => {
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, s);
};
const it = (s) => s.replace(/<it>/g, '<span lang="it">').replace(/<\/it>/g, '</span>');
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// ---------------------------------------------------------------- meta delle pagine Astro
const META_RE = /const meta = (\{[^]*?\r?\n\});\r?\n---/;
const readMeta = (p) => JSON.parse(read(p).match(META_RE)[1]);
const writeMeta = (p, meta) =>
  write(
    p,
    read(p).replace(META_RE, () => `const meta = ${JSON.stringify(meta, null, 2)};\n---`)
  );
const hreflangs = (p) => Object.fromEntries(readMeta(p).hreflangs.map(([l, u]) => [l, decodeURI(u.replace(SITE, ''))]));
const astroOf = (url) => {
  const rel = url.replace(/^\//, '');
  return 'src/pages/' + (rel.endsWith('/') ? rel + 'index.astro' : rel + '.astro');
};
const htmlOf = (url) => {
  const rel = url.replace(/^\//, '');
  return 'src/html/' + (rel.endsWith('/') ? rel + 'index.html' : rel);
};

const indexUrl = hreflangs('src/pages/letture/index.astro');
const caffeUrl = hreflangs('src/pages/letture/storia-del-caffe-in-italia.html.astro');
const resUrl = (file) => hreflangs(`src/pages/${file}.html.astro`);
const gram = (g) => hreflangs(`src/pages/grammatica/${g}.html.astro`);
const levelUrl = (lang, level) => (lang === 'it' ? `/letture/${level}/` : indexUrl[lang] + level + '/');

const options = (urls, current) =>
  ALL.map(
    (l) =>
      `<a href="${urls[l]}" hreflang="${l}" lang="${l}"${l === current ? ' aria-current="page"' : ''}><span aria-hidden="true">${FLAGS[l][0]}</span><span>${FLAGS[l][1]}</span></a>`
  ).join('');
const hreflangList = (urls) => [...ALL.map((l) => [l, SITE + urls[l]]), ['x-default', SITE + urls.it]];

// ---------------------------------------------------------------- sorgente italiana
const itCaffe = read('src/html/letture/storia-del-caffe-in-italia.html');
const storyText = (level) => {
  const a = itCaffe.indexOf(`id="${level}"`);
  const s = itCaffe.indexOf('<div class="story-text">', a);
  return itCaffe.slice(s, itCaffe.indexOf('</div>', s) + 6);
};
const itHeading = (level) => itCaffe.slice(itCaffe.indexOf(`id="${level}"`)).match(/<h2>([^<]+)<\/h2>/)[1];
const itQuestions = (level) => {
  const a = itCaffe.indexOf(`id="${level}"`);
  const block = itCaffe.slice(a, itCaffe.indexOf('</article>', a));
  return [...block.matchAll(/<li>([^<]+)<textarea/g)].map((m) => m[1]);
};
const A1_WORDS = ['il banco', 'il barista', 'il cornetto', 'il bicchiere', 'Quanto costa?'];
const A2_WORDS = ['la cassa', 'lo scontrino', 'il tavolino', 'la tazzina', 'macchiato'];
const A1_BOX = [
  '<strong>Vorrei</strong> un latte.',
  '<strong>Prendo</strong> un caffè.',
  '<strong>Mi dà</strong> un cornetto?',
];
const A2_BOX = [
  '<strong>Ho chiesto</strong> un latte.',
  '<strong>Sono andata</strong> in un bar.',
  '<strong>Mi sono seduta</strong> a un tavolino.',
];

// ---------------------------------------------------------------- 1. «Al bar in Italia» nelle 8 lingue
function caffePage(lang) {
  const t = T[lang];
  const c = t.caffe;
  const url = caffeUrl[lang];
  const slug = path.basename(url, '.html');
  const old = read(htmlOf(url));
  const cta = old.slice(old.indexOf('<section class="conversion-section'), old.lastIndexOf('</main>'));
  const words = (list, glosses) => list.map((w, i) => `<span lang="it">${w}</span> = ${glosses[i]}`).join('<br>');
  const questions = (level, glosses) =>
    itQuestions(level)
      .map(
        (q, i) =>
          `<li><span lang="it">${q}</span><span class="q-gloss">${glosses[i]}</span><textarea rows="${i === 3 && level === 'a2' ? 3 : 2}" placeholder="${t.placeholder}"></textarea></li>`
      )
      .join('');
  const box = (level) => {
    const lines = level === 'a1' ? A1_BOX : A2_BOX;
    const expl = level === 'a1' ? c.a1Box : c.a2Box;
    const tryIt =
      level === 'a1'
        ? `${c.a1Try} <span lang="it"><em>Voglio un cappuccino.</em></span> → … · <span lang="it"><em>Dammi un’acqua.</em></span> → …`
        : `${c.a2Try} <span lang="it"><em>Oggi entro al bar, prendo un caffè e mi siedo.</em></span> → <span lang="it"><em>Ieri</em></span> …`;
    const g = level === 'a1' ? gram('a1/presente-verbi-irregolari')[lang] : gram('a2/passato-prossimo')[lang];
    return `<div class="structure-box">
          <h3>${c.box}</h3>
          <ul>
            ${lines.map((l, i) => `<li><span lang="it">${l}</span> → ${it(expl[i])}</li>`).join('\n            ')}
          </ul>
          <p>${tryIt}</p>
          <p class="structure-link">${c.review} <a href="${g}">${level === 'a1' ? c.a1Link : c.a2Link}</a></p>
        </div>`;
  };
  const card = (level) => `<article class="story-card" id="${level}">
        <header><div><span class="level">${level.toUpperCase()}</span><h2 lang="it">${itHeading(level)}</h2></div><p>${it(level === 'a1' ? c.a1Focus : c.a2Focus)}</p></header><div class="pdf-downloads pdf-downloads-level"><a class="button secondary" href="/pdf/${lang}/${slug}-${level}.pdf" download="">PDF ${level.toUpperCase()}</a></div>
        ${storyText(level).replace('<div class="story-text">', '<div class="story-text" lang="it">')}
        ${box(level)}
        <div class="learning-grid"><div><h3>${t.words}</h3><p>${words(level === 'a1' ? A1_WORDS : A2_WORDS, level === 'a1' ? c.a1Words : c.a2Words)}</p></div><div><h3>${t.questions}</h3><ol>${questions(level, level === 'a1' ? c.a1Q : c.a2Q)}</ol></div></div>
      </article>`;
  const p = c.phrases;
  const phrases = `<article class="story-card">
        <header><div><span class="level">${p.label}</span><h2>${p.title}</h2></div><p>${p.sub}</p></header>
        <div class="phrase-list">
          <p><strong>${p.order}:</strong> <span lang="it">Un caffè, per favore. · Vorrei un cappuccino. · Mi dà un cornetto alla crema? · Prendo un’acqua naturale / frizzante.</span></p>
          <p><strong>${p.pay}:</strong> <span lang="it">Quant’è? · Pago alla cassa? · Posso pagare con la carta? · Lo scontrino, grazie.</span></p>
          <p><strong>${p.coffees}:</strong> <span lang="it"><em>ristretto</em></span> (${p.ristretto}) · <span lang="it"><em>lungo</em></span> (${p.lungo}) · <span lang="it"><em>macchiato</em></span> (${p.macchiato}) · <span lang="it"><em>corretto</em></span> (${p.corretto}) · <span lang="it"><em>decaffeinato</em></span>, <span lang="it"><em>deca</em></span> (${p.deca}) · <span lang="it"><em>d’orzo</em></span> (${p.orzo}).</p>
          <p><strong>${p.where}:</strong> <span lang="it"><em>al banco</em></span> (${p.banco}) · <span lang="it"><em>al tavolo</em></span> (${p.tavolo}).</p>
          <p><strong>${p.friends}:</strong> <span lang="it">«Prendiamo un caffè?»</span> ${p.friendsText}</p>
        </div>
      </article>`;
  const html = `<main>
  <section class="story-hero">
    <div class="container">
      <p class="breadcrumbs"><a href="/${lang}/">${t.home}</a> / <a href="${indexUrl[lang]}">${t.readings}</a> / ${c.title}</p>
      <div class="story-hero-grid">
        <div>
          <p class="eyebrow">${c.eyebrow}</p>
          <h1>${c.title}</h1>
          <p class="lead">${c.lead}</p>
          <div class="level-nav"><a href="#a1">A1</a><a href="#a2">A2</a></div><div class="pdf-downloads pdf-downloads-complete" aria-label="${t.pdfAria}"><a class="button secondary" href="/pdf/${lang}/${slug}-all-levels.pdf" download="">${t.pdfAll}</a></div>
        </div>
        <figure class="story-figure">
          <img src="../../assets/reading-storia-caffe-italia.webp" alt="${esc(c.alt)}" width="960" height="540" decoding="async" loading="eager" fetchpriority="high">
          <figcaption>${c.caption}</figcaption>
        </figure>
      </div>
    </div>
  </section>
  <section class="section compact-top">
    <div class="container">
      ${card('a1')}
      ${card('a2')}
      ${phrases}
    </div>
  </section>
  ${cta.trim()}
</main>
`;
  write(htmlOf(url), html);

  const metaPath = astroOf(url);
  const meta = readMeta(metaPath);
  meta.title = c.seoTitle;
  meta.description = c.seoDesc;
  for (const pair of meta.og) {
    if (pair[0] === 'og:title' || pair[0] === 'twitter:title') pair[1] = c.seoTitle;
    if (pair[0] === 'og:description' || pair[0] === 'twitter:description') pair[1] = c.ogDesc;
  }
  meta.jsonld = [
    JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Article',
      name: c.title,
      url: SITE + url,
      inLanguage: lang,
      educationalLevel: 'A1-A2',
      image: `${SITE}/assets/reading-storia-caffe-italia.webp`,
    }),
  ];
  writeMeta(metaPath, meta);
}

// ---------------------------------------------------------------- 2. indici per livello
// Titolo, immagine e testo alternativo di ogni scheda si prendono dall'indice delle letture della lingua.
function tilesOf(indexHtml) {
  const map = {};
  for (const m of indexHtml.matchAll(
    /<a class="story-tile" href="([^"]+)"><img src="[^"]*\/assets\/([^"]+)" alt="([^"]*)"[^>]*>[^]*?<h2>([^<]+)<\/h2>/g
  ))
    map[decodeURI(m[1])] = { img: m[2], alt: m[3], title: m[4].trim() };
  return map;
}

function levelPage(lang, level) {
  const t = T[lang];
  const h = t.hub;
  const L = h[level];
  const url = levelUrl(lang, level);
  const indexHtml = read(htmlOf(indexUrl[lang]));
  const tiles = tilesOf(indexHtml);
  const tileList = level === 'a1' ? A1_TILES : A2_TILES;
  const tile = ([key, file, kind, w, m, forms, expl]) => {
    const target = file.startsWith('letture/') ? caffeUrl[lang] : resUrl(file)[lang];
    const info = tiles[target];
    if (!info) throw new Error(`${lang}: scheda non trovata nell'indice per ${target}`);
    const title = key === 'caffe' ? (level === 'a1' ? t.caffe.title : CAFFE_A2_TITLE[lang]) : info.title;
    const structure = `${h.structure}: <span lang="it">${forms}</span>${expl ? ` (${h.expl[expl]})` : ''}`;
    const cta = kind === 'fable' ? h.cta.fable : kind === 'fairy' ? h.cta.fairy : h.cta.story;
    return `<a class="story-tile" href="${target}#${level}"><img src="../../../assets/${info.img}" alt="${info.alt}" loading="lazy" width="640" height="360" decoding="async"><span class="badge">${h.badge[kind]} · ${level.toUpperCase()}</span>
                <h2>${title}</h2>
                <span class="tile-meta">${h.meta(w, m)}</span>
                <p>${h.hooks[level][key]}</p>
                <span class="tile-structure">${structure}</span>
                <strong>${cta}</strong></a>`;
  };
  const today = tileList.filter((x) => x[2] === 'everyday' || x[2] === 'original');
  const fables = tileList.filter((x) => x[2] === 'fable' || x[2] === 'fairy');
  const grams =
    level === 'a1'
      ? [
          'a1/presente-indicativo-verbi-regolari',
          'a1/presente-verbi-irregolari',
          'a1/ce-ci-sono',
          'a1/articoli-indeterminativi',
        ]
      : ['a2/passato-prossimo', 'a2/imperfetto', 'a2/passato-prossimo-o-imperfetto', 'a2/pronomi-diretti'];
  const gramText = L.gramText.replace(/\{(\d)\}/g, (_, i) => `<a href="${gram(grams[i])[lang]}">${L.links[i]}</a>`);
  const nav = navHtml(lang, level);
  const cta = indexHtml
    .slice(indexHtml.indexOf('<section class="conversion-section'), indexHtml.lastIndexOf('</main>'))
    .trim()
    .replace(/src="\.\.\/\.\.\/assets\//g, 'src="../../../assets/');
  const section = (id, name, list) => `<section class="level-section" id="${id}">
            <div class="level-title">
              <span class="level">${level.toUpperCase()}</span>
              <h2>${name}</h2>
            </div>
            <div class="story-list">
              ${list.map(tile).join('')}
            </div>
          </section>`;
  const html = `<main>
      <section class="page-intro">
        <div class="container">
          <p class="breadcrumbs"><a href="/${lang}/">${t.home}</a> / <a href="${indexUrl[lang]}">${t.readings}</a> / ${h.level} ${level.toUpperCase()}</p>
          <p class="eyebrow">${h.eyebrow}</p>
          <h1>${L.h1}</h1>
          <p class="lead">
            ${L.lead}
          </p>
          ${nav}
        </div>
      </section>
      <section class="section compact-top">
        <div class="container">
          <div class="level-guide">
            <div>
              <h2>${h.find}</h2>
              <p>${L.findText}</p>
            </div>
            <div>
              <h2>${h.how}</h2>
              <p>${it(L.howText)}</p>
            </div>
            <div>
              <h2>${L.gram}</h2>
              <p>${gramText}</p>
            </div>
          </div>
          ${section('storie', h.today, today)}
          ${section('favole', h.fables, fables)}
        </div>
      </section>
      ${cta}
    </main>
`;
  write(htmlOf(url), html);

  // Meta: si parte da quella dell'indice delle letture della stessa lingua.
  const meta = readMeta(astroOf(indexUrl[lang]));
  const urls = Object.fromEntries(ALL.map((l) => [l, levelUrl(l, level)]));
  const items = tileList.map(([key, file], i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: key === 'caffe' ? (level === 'a1' ? t.caffe.title : CAFFE_A2_TITLE[lang]) : tiles[resUrl(file)[lang]].title,
    url: SITE + (file.startsWith('letture/') ? caffeUrl[lang] : resUrl(file)[lang]) + '#' + level,
  }));
  Object.assign(meta, {
    path: url.replace(/^\//, '') + 'index.html',
    title: L.seoTitle,
    description: L.seoDesc,
    canonical: SITE + url,
    og: [
      ['og:type', 'website'],
      ['og:site_name', 'Italiano con Martin'],
      ['og:title', L.seoTitle],
      ['og:description', L.ogDesc],
      ['og:url', SITE + url],
      ['og:image', `${SITE}/assets/${level === 'a1' ? 'story-formica-wow' : 'reading-storia-caffe-italia'}.webp`],
      ['twitter:card', 'summary_large_image'],
      ['twitter:title', L.seoTitle],
      ['twitter:description', L.ogDesc],
      ['twitter:image', `${SITE}/assets/${level === 'a1' ? 'story-formica-wow' : 'reading-storia-caffe-italia'}.webp`],
    ],
    jsonld: [
      JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: L.seoTitle,
        url: SITE + url,
        inLanguage: lang,
        educationalLevel: level.toUpperCase(),
        mainEntity: { '@type': 'ItemList', itemListElement: items },
      }),
    ],
    hreflangs: hreflangList(urls),
    extraHead: [],
    assetPrefix: '../../../',
    bodyScripts: ['<script src="../../../script.js"></script>'],
    iconLinks: [
      '<link rel="icon" href="../../../favicon.png" type="image/png">',
      '<link rel="apple-touch-icon" href="../../../apple-touch-icon.png">',
    ],
    brandImgSrc: '../../../assets/martin-photo.svg',
    optionsHtml: options(urls, lang),
  });
  const rel = url.replace(/^\//, '');
  write(
    astroOf(url),
    `---
// Generato da scripts/create-level-readings.mjs (indice per livello, decisione 2026-09-29).
import SiteLayout from '~/layouts/SiteLayout.astro';
import main from '~/html/${rel}index.html?raw';
const meta = ${JSON.stringify(meta, null, 2)};
---

<SiteLayout meta={meta} main={main} />
`
  );
}

function navHtml(lang, current) {
  const t = T[lang].hub;
  const base = lang === 'it' ? '/letture/' : indexUrl[lang];
  const link = (href, label, on) => `<a href="${href}"${on ? ' aria-current="page"' : ''}>${label}</a>`;
  return `<nav class="level-hub-nav" aria-label="${t.navAria}">${[
    link(base, t.all, current === 'all'),
    link(base + 'a1/', 'A1', current === 'a1'),
    link(base + 'a2/', 'A2', current === 'a2'),
    link(base + '#b1', 'B1'),
    link(base + '#b2', 'B2'),
    link(base + '#c1', 'C1'),
  ].join('')}</nav>`;
}

// ---------------------------------------------------------------- 3. indice di tutti i livelli
const LEVELS_OF = {
  'letture/storia-del-caffe-in-italia': 'A1 · A2',
  'letture/come-preparare-una-pizza': 'A1 · A2',
  'letture/tecniche-di-memoria': 'A2 · B1',
  'letture/il-sonar-del-delfino': 'A2 · B1',
  'letture/insetto-con-gli-ingranaggi': 'A2 · B1',
  'letture/api-linguaggio-e-caratteristiche': 'A2 · B1',
  'letture/proteine-quante-ne-servono': 'B1 · B2',
  'letture/integratori-per-la-palestra': 'B1 · B2',
  'letture/futuro-intelligenza-artificiale': 'B1 · B2 · C1',
  'letture/storia-della-mafia-in-italia': 'B1 · B2 · C1',
  'letture/come-funziona-la-memoria-umana': 'B2 · C1',
  'letture/latte-materno': 'B2 · C1',
  'letture/la-meraviglia-del-dna': 'B2 · C1',
  'favole/la-formichina-wow': 'A1',
};
for (const f of fs.readdirSync('src/html/favole'))
  if (f !== 'index.html' && !LEVELS_OF['favole/' + f.replace('.html', '')])
    LEVELS_OF['favole/' + f.replace('.html', '')] = 'A1 · A2 · B1';

function allLevelsIndex(lang) {
  const t = T[lang];
  const p = htmlOf(indexUrl[lang]);
  let h = read(p);
  const byUrl = Object.fromEntries(
    Object.keys(LEVELS_OF).map((k) => [k.startsWith('letture/storia-del-caffe') ? caffeUrl[lang] : resUrl(k)[lang], k])
  );
  let count = 0;
  h = h.replace(
    /(<a class="story-tile" href="([^"]+)">[^]*?<span class="badge">)([^<]*)(<\/span>)/g,
    (m, pre, href, badge, post) => {
      const key = byUrl[decodeURI(href)];
      if (!key) throw new Error(`${lang}: livelli mancanti per ${href}`);
      count++;
      // La categoria («Science - A1-C1», o «Science · A2 · B1» se lo script è già passato) resta.
      const first = badge.split(/\s[-–·]\s/)[0];
      const cat = first && !/^[ABC][12]/.test(first) ? first + ' · ' : '';
      return (
        pre +
        (key.endsWith('storia-del-caffe-in-italia') ? T[lang].hub.badge.everyday + ' · ' : cat) +
        LEVELS_OF[key] +
        post
      );
    }
  );
  if (count !== 24) throw new Error(`${lang}: schede ${count}`);

  // La scheda del bar: testo nuovo e spostata fra Cultura (vicino alla pizza).
  const caffeHref = caffeUrl[lang];
  const tileRe = new RegExp(
    `<a class="story-tile" href="${caffeHref.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}">[^]*?</a>\\s*`
  );
  const encRe = new RegExp(
    `<a class="story-tile" href="[^"]*">(?:(?!</a>)[^])*?reading-storia-caffe-italia-card[^]*?</a>\\s*`
  );
  const oldTile = (h.match(tileRe) || h.match(encRe))[0];
  h = h.replace(oldTile, '');
  const newTile = oldTile
    .trim()
    .replace(/<h2>[^<]*<\/h2>/, `<h2>${t.caffe.title}</h2>`)
    .replace(/<p>[^<]*<\/p>/, `<p>${t.index.caffeDesc}</p>`)
    .replace(/<strong>[^<]*<\/strong>/, `<strong>${t.hub.cta.story}</strong>`);
  const pizzaEnd = new RegExp(
    `(href="${resUrl('letture/come-preparare-una-pizza')[lang].replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}">[^]*?</a>)`
  );
  if (!pizzaEnd.test(h)) throw new Error(`${lang}: scheda pizza non trovata`);
  h = h.replace(pizzaEnd, (m) => m + newTile);

  // Intestazione: testo, pulsanti dei livelli (sostituisce quelli di una generazione precedente).
  h = h.replace(/\s*<nav class="level-hub-nav"[^]*?<\/nav>/, '');
  h = h.replace(
    /<p class="lead">[^]*?<\/p>/,
    `<p class="lead">
            ${t.index.lead}
          </p>
          ${navHtml(lang, 'all')}`
  );

  // Elenchi B1, B2, C1.
  h = h.replace(/\s*<section class="level-section" id="(b1|b2|c1)">[^]*?<\/section>/g, '');
  const titles = tilesOf(h);
  const block = (lv) => {
    const L = lv.toUpperCase();
    const items = Object.entries(LEVELS_OF)
      .filter(([, v]) => v.includes(L))
      .map(([k]) => {
        const href = k.endsWith('storia-del-caffe-in-italia') ? caffeUrl[lang] : resUrl(k)[lang];
        return `<a href="${href}#${lv}">${titles[href].title}</a>`;
      });
    return `<section class="level-section" id="${lv}">
            <div class="level-title">
              <span class="level">${L}</span>
              <h2>${t.index.levelsTitle(L)}</h2>
            </div>
            <p>${t.index[lv]}</p>
            <div class="resource-directory"><div>${items.join('')}</div></div>
          </section>`;
  };
  const anchor = /<\/section>\s*<\/div>\s*<\/section>\s*<section class="conversion-section/;
  if (!anchor.test(h)) throw new Error(`${lang}: punto di inserimento non trovato`);
  h = h.replace(
    anchor,
    (m) => '</section>\n          ' + ['b1', 'b2', 'c1'].map(block).join('\n          ') + m.slice('</section>'.length)
  );
  write(p, h);
}

// ---------------------------------------------------------------- esecuzione
for (const lang of LANGS) {
  caffePage(lang);
  allLevelsIndex(lang);
  levelPage(lang, 'a1');
  levelPage(lang, 'a2');
}
// Le pagine italiane per livello ricevono hreflang e selettore lingua completi.
for (const level of ['a1', 'a2']) {
  const p = `src/pages/letture/${level}/index.astro`;
  const urls = Object.fromEntries(ALL.map((l) => [l, levelUrl(l, level)]));
  let s = read(p);
  // Accetta sia la forma scritta a mano (su più righe) sia quella già generata (su una riga).
  s = s.replace(
    / {2}hreflangs: (?:\[\[.*\]\]|\[[^]*?\n {2}\]),\n/,
    `  hreflangs: ${JSON.stringify(hreflangList(urls))},\n`
  );
  s = s.replace(
    / {2}optionsHtml:\n? *(?:'[^']*'|"(?:[^"\\]|\\.)*"),\n/,
    `  optionsHtml: ${JSON.stringify(options(urls, 'it'))},\n`
  );
  fs.writeFileSync(p, s);
}
// Sitemap: una voce per ogni indice per livello.
const sitemapPath = 'public/sitemap.xml';
let sitemap = read(sitemapPath);
for (const level of ['a1', 'a2'])
  for (const lang of ALL) {
    const loc = SITE + encodeURI(levelUrl(lang, level));
    if (!sitemap.includes(`<loc>${loc}</loc>`))
      sitemap = sitemap.replace(
        /\n?<\/urlset>/,
        `\n  <url><loc>${loc}</loc><changefreq>weekly</changefreq></url>\n</urlset>`
      );
  }
fs.writeFileSync(sitemapPath, sitemap);
console.log('Letture per livello generate in', LANGS.length, 'lingue.');

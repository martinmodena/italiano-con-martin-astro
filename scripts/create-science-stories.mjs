// Letture di scienza «che stupiscono» (2026-09-30): polpo, tardigrado, wood wide web.
// Genera in 9 lingue le pagine (solo i livelli adatti al tema, con il riquadro
// «La struttura di questo testo» e le fonti), le tessere nella sezione Scienza degli
// indici delle letture e le voci della sitemap. Stesso schema di create-emma-stories.mjs.
// Fonti: scripts/data/scienza-it.mjs (testi, parole, domande) e scienza-i18n.mjs (servizio).
// Ordine: node scripts/create-science-stories.mjs && node scripts/create-level-readings.mjs
//         npm run build, python scripts/generate-pdfs.py --only <file> …, npm run build
import fs from 'fs';
import path from 'path';
import { SCIENZA } from './data/scienza-it.mjs';
import { SCIENZA_UI, SCIENZA_I18N } from './data/scienza-i18n.mjs';
import { T } from './data/letture-livelli-i18n.mjs';

const SITE = 'https://italianoconmartin.com';
const LANGS = ['en', 'es', 'fr', 'cs', 'pl', 'tr', 'de', 'ja'];
const ALL = ['it', ...LANGS];
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
const read = (p) => fs.readFileSync(p, 'utf8');
const write = (p, s) => {
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, s);
};
const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const amp = (s) => s.replace(/ & /g, ' &amp; ');
const it = (s, lang) =>
  lang === 'it'
    ? s.replace(/<it>/g, '<em>').replace(/<\/it>/g, '</em>')
    : s.replace(/<it>/g, '<span lang="it">').replace(/<\/it>/g, '</span>');

const META_RE = /const meta = (\{[^]*?\r?\n\});\r?\n---/;
const readMeta = (p) => JSON.parse(read(p).match(META_RE)[1]);
const hreflangs = (p) => Object.fromEntries(readMeta(p).hreflangs.map(([l, u]) => [l, decodeURI(u.replace(SITE, ''))]));
const astroOf = (url) => 'src/pages/' + url.replace(/^\//, '') + '.astro';
const htmlOf = (url) => 'src/html/' + url.replace(/^\//, '');
const prefixOf = (url) => '../'.repeat(url.split('/').length - 2);

const indexUrl = hreflangs('src/pages/letture/index.astro');
const caffeUrl = hreflangs('src/pages/letture/storia-del-caffe-in-italia.html.astro');
const gram = (g) => hreflangs(`src/pages/grammatica/${g}.html.astro`);
const home = (lang) => (lang === 'it' ? '/' : `/${lang}/`);

export const scienceUrl = (r, lang) =>
  lang === 'it' ? `/${r.file}.html` : indexUrl[lang] + SCIENZA_I18N[r.key][lang].slug + '.html';
// Dati localizzati della lettura (titolo, gancio, testo alternativo, livello).
export const scienceText = (r, lang) => (lang === 'it' ? r : SCIENZA_I18N[r.key][lang]);
export const scienceLevel = (r, lang, id) =>
  lang === 'it' ? r.levels.find((l) => l.id === id) : SCIENZA_I18N[r.key][lang][id];
export const levelsLabel = (r) => r.levels.map((l) => l.id.toUpperCase()).join(' · ');

const urlsOf = (r) => Object.fromEntries(ALL.map((l) => [l, scienceUrl(r, l)]));
const options = (urls, current) =>
  ALL.map(
    (l) =>
      `<a href="${urls[l]}" hreflang="${l}" lang="${l}"${l === current ? ' aria-current="page"' : ''}><span aria-hidden="true">${FLAGS[l][0]}</span><span>${FLAGS[l][1]}</span></a>`
  ).join('');
const hreflangList = (urls) => [...ALL.map((l) => [l, SITE + urls[l]]), ['x-default', SITE + urls.it]];

function ctaOf(lang) {
  const h = read(htmlOf(caffeUrl[lang]));
  return h.slice(h.indexOf('<section class="conversion-section'), h.lastIndexOf('</main>')).trim();
}

const IT_LABELS = {
  home: 'Home',
  readings: 'Letture',
  pdfAria: 'Download PDF',
  pdfAll: 'PDF tutti i livelli',
  words: 'Parole utili',
  questions: 'Domande',
  placeholder: 'Scrivi la tua risposta',
};

function levelCard(r, lv, lang, slug) {
  const t = lang === 'it' ? IT_LABELS : T[lang];
  const tr = lang === 'it' ? null : SCIENZA_I18N[r.key][lang][lv.id];
  const itAttr = lang === 'it' ? '' : ' lang="it"';
  const L = lv.id.toUpperCase();
  const gloss = tr && (lv.id === 'a1' || lv.id === 'a2');
  const words = tr
    ? lv.words.map((w, i) => `<span lang="it">${w}</span> = ${it(tr.words[i], lang)}`).join('<br>')
    : lv.words.join(', ');
  const questions = lv.questions
    .map(
      (q, i) =>
        (tr ? `<li><span lang="it">${q}</span>${gloss ? `<span class="q-gloss">${tr.q[i]}</span>` : ''}` : `<li>${q}`) +
        `<textarea rows="${i === lv.questions.length - 1 ? 3 : 2}" placeholder="${t.placeholder}"></textarea></li>`
    )
    .join('');
  const boxTitle = lang === 'it' ? 'La struttura di questo testo' : T[lang].caffe.box;
  const review = lang === 'it' ? 'Ripassa:' : T[lang].caffe.review;
  const expl = tr ? tr.box : lv.boxExpl;
  const tryIt = lang === 'it' ? `<em>${lv.tryIt}</em>` : `<span lang="it"><em>${lv.tryIt}</em></span>`;
  const box = `<div class="structure-box">
          <h3>${boxTitle}</h3>
          <ul>
            ${lv.box.map((l, i) => `<li>${lang === 'it' ? amp(l) : `<span lang="it">${amp(l)}</span>`} → ${it(expl[i], lang)}</li>`).join('\n            ')}
          </ul>
          <p>${tr ? tr.tryLabel : lv.tryLabel} ${tryIt}</p>
          <p class="structure-link">${review} <a href="${gram(lv.grammar)[lang]}">${tr ? tr.link : lv.link}</a></p>
        </div>`;
  return `<article class="story-card" id="${lv.id}">
        <header><div><span class="level">${L}</span><h2${itAttr}>${lv.heading}</h2></div><p>${tr ? it(tr.focus, lang) : lv.focus}</p></header><div class="pdf-downloads pdf-downloads-level"><a class="button secondary" href="/pdf/${lang}/${slug}-${lv.id}.pdf" download="">PDF ${L}</a></div>
        <div class="story-text"${itAttr}>
          ${lv.text.map((p) => `<p>${amp(p)}</p>`).join('\n          ')}
        </div>
        ${box}
        <div class="learning-grid"><div><h3>${t.words}</h3><p>${words}</p></div><div><h3>${t.questions}</h3><ol>${questions}</ol></div></div>
      </article>`;
}

function page(r, lang) {
  const ui = SCIENZA_UI[lang];
  const t = lang === 'it' ? IT_LABELS : T[lang];
  const x = scienceText(r, lang);
  const url = scienceUrl(r, lang);
  const slug = path.basename(url, '.html');
  const pre = prefixOf(url);
  const sources = `<article class="story-card">
        <header><div><span class="level">${ui.sourcesLabel}</span><h2>${ui.sourcesTitle}</h2></div><p>${ui.sourcesSub}</p></header>
        <div class="story-text">
          ${r.sources.map((s) => `<p${lang === 'it' ? '' : ' lang="it"'}>${amp(s)}</p>`).join('\n          ')}
        </div>
      </article>`;
  const html = `<main>
  <section class="story-hero">
    <div class="container">
      <p class="breadcrumbs"><a href="${home(lang)}">${t.home}</a> / <a href="${indexUrl[lang]}">${t.readings}</a> / ${x.title}</p>
      <div class="story-hero-grid">
        <div>
          <p class="eyebrow">${ui.science} · ${levelsLabel(r)}</p>
          <h1>${x.title}</h1>
          <p class="lead">${x.lead}</p>
          <div class="level-nav">${r.levels.map((l) => `<a href="#${l.id}">${l.id.toUpperCase()}</a>`).join('')}</div><div class="pdf-downloads pdf-downloads-complete" aria-label="${t.pdfAria}"><a class="button secondary" href="/pdf/${lang}/${slug}-all-levels.pdf" download="">${t.pdfAll}</a></div>
        </div>
        <figure class="story-figure">
          <img src="${pre}assets/${r.image}.webp" alt="${esc(x.alt)}" width="960" height="540" decoding="async" loading="eager" fetchpriority="high">
        </figure>
      </div>
    </div>
  </section>
  <section class="section compact-top">
    <div class="container">
      ${r.levels.map((lv) => levelCard(r, lv, lang, slug)).join('\n      ')}
      ${sources}
    </div>
  </section>
  ${ctaOf(lang)}
</main>
`;
  write(htmlOf(url), html);

  // Meta: si parte da quella di «Al bar in Italia» nella stessa lingua (stessa cartella).
  const meta = readMeta(astroOf(caffeUrl[lang]));
  const urls = urlsOf(r);
  const image = `${SITE}/assets/${r.image}.webp`;
  Object.assign(meta, {
    path: url.replace(/^\//, ''),
    title: x.seoTitle,
    description: x.seoDesc,
    canonical: SITE + url,
    og: [
      ['og:type', 'article'],
      ['og:site_name', 'Italiano con Martin'],
      ['og:title', x.seoTitle],
      ['og:description', x.lead],
      ['og:url', SITE + url],
      ['og:image', image],
      ['og:image:width', '960'],
      ['og:image:height', '540'],
      ['twitter:card', 'summary_large_image'],
      ['twitter:title', x.seoTitle],
      ['twitter:description', x.lead],
      ['twitter:image', image],
    ],
    jsonld: [
      JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: x.title,
        url: SITE + url,
        inLanguage: lang,
        educationalLevel: levelsLabel(r).replace(/ · /g, '-'),
        image,
        author: { '@type': 'Person', name: 'Martin Modena' },
      }),
    ],
    hreflangs: hreflangList(urls),
    optionsHtml: options(urls, lang),
  });
  write(
    astroOf(url),
    `---
// Generato da scripts/create-science-stories.mjs (letture di scienza, 2026-09-30).
import SiteLayout from '~/layouts/SiteLayout.astro';
import main from '~/html/${url.replace(/^\//, '')}?raw';
const meta = ${JSON.stringify(meta, null, 2)};
---

<SiteLayout meta={meta} main={main} />
`
  );
}

// Tessere nella sezione Scienza dell'indice delle letture: in testa, nell'ordine di SCIENZA.
// Si clonano dalla tessera del sonar (etichette già tradotte); i livelli del badge li
// riscrive create-level-readings.mjs da READING_LEVELS.
function indexTiles(lang) {
  const p = htmlOf(indexUrl[lang] + 'index.html');
  let h = read(p);
  const pre = prefixOf(indexUrl[lang]);
  const m = h.match(/<a class="story-tile" href="[^"]*(?:sonar|ソナー)[^"]*\.html">(?:(?!<\/a>)[^])*?<\/a>/);
  if (!m) throw new Error(`${lang}: tessera del sonar non trovata`);
  const tiles = SCIENZA.filter((r) => !h.includes(`${path.basename(scienceUrl(r, lang))}"`)).map((r) => {
    const x = scienceText(r, lang);
    const href = lang === 'it' ? path.basename(scienceUrl(r, lang)) : scienceUrl(r, lang);
    return m[0]
      .replace(/href="[^"]*"/, `href="${href}"`)
      .replace(/src="[^"]*"/, `src="${pre}assets/${r.image}-card.webp"`)
      .replace(/alt="[^"]*"/, `alt="${esc(x.alt)}"`)
      .replace(/<span class="badge">[^<]*/, `<span class="badge">${SCIENZA_UI[lang].science} · ${levelsLabel(r)}`)
      .replace(/<h2>[^]*?<\/h2>/, `<h2>${x.title}</h2>`)
      .replace(/<p>[^]*?<\/p>/, `<p>${x.hook}</p>`);
  });
  if (!tiles.length) return;
  const start = h.indexOf('<div class="story-list">', h.indexOf('<section class="level-section" id="scienza">'));
  if (start < 0) throw new Error(`${lang}: sezione Scienza non trovata`);
  const at = h.indexOf('>', start) + 1;
  h = h.slice(0, at) + '\n              ' + tiles.join('') + h.slice(at);
  write(p, h);
}

if (process.argv[1] && process.argv[1].endsWith('create-science-stories.mjs')) {
  for (const lang of ALL) {
    for (const r of SCIENZA) page(r, lang);
    indexTiles(lang);
  }
  const sitemapPath = 'public/sitemap.xml';
  let sitemap = read(sitemapPath);
  for (const r of SCIENZA)
    for (const lang of ALL) {
      const loc = SITE + encodeURI(scienceUrl(r, lang));
      if (!sitemap.includes(`<loc>${loc}</loc>`))
        sitemap = sitemap.replace(
          /\n?<\/urlset>/,
          `\n  <url><loc>${loc}</loc><changefreq>monthly</changefreq></url>\n</urlset>`
        );
    }
  fs.writeFileSync(sitemapPath, sitemap);
  // Conteggio parole per livello, per controllare le lunghezze dei criteri.
  for (const r of SCIENZA)
    for (const lv of r.levels) {
      const n = lv.text
        .join(' ')
        .replace(/<[^>]+>/g, ' ')
        .split(/\s+/)
        .filter((w) => /\p{L}/u.test(w)).length;
      console.log(`  ${r.key} ${lv.id}: ${n} parole`);
    }
  console.log(`Letture di scienza: ${SCIENZA.length} in ${ALL.length} lingue.`);
}

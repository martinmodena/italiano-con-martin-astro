// «Emma in Italia» (decisione 2026-09-29): genera in 9 lingue le pagine dei racconti A1
// della serie e la navigazione fra episodi, anche sull'episodio 1 («Al bar in Italia»).
// Fonti: scripts/data/emma-it.mjs (racconti, parole, domande) e scripts/data/emma-i18n.mjs
// (testo di servizio). Gli indici si aggiornano con scripts/create-level-readings.mjs.
// Ordine: node scripts/create-emma-stories.mjs && node scripts/create-level-readings.mjs
//         npm run build, python scripts/generate-pdfs.py --only <file> …, npm run build
import fs from 'fs';
import path from 'path';
import { EMMA, EPISODE_1 } from './data/emma-it.mjs';
import { EMMA_UI, EMMA_I18N, EMMA_IT_BOX } from './data/emma-i18n.mjs';
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
// <it>…</it>: nelle pagine straniere diventa italiano marcato, in quella italiana solo corsivo.
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
const caffeUrl = hreflangs(`src/pages/${EPISODE_1}.html.astro`);
const gram = (g) => hreflangs(`src/pages/grammatica/${g}.html.astro`);
const levelA1 = (lang) => (lang === 'it' ? '/letture/a1/' : indexUrl[lang] + 'a1/');
const home = (lang) => (lang === 'it' ? '/' : `/${lang}/`);

export const episodeUrl = (ep, lang) =>
  lang === 'it' ? `/${ep.file}.html` : indexUrl[lang] + EMMA_I18N[ep.key][lang].slug + '.html';
const urlsOf = (ep) => Object.fromEntries(ALL.map((l) => [l, episodeUrl(ep, l)]));
const options = (urls, current) =>
  ALL.map(
    (l) =>
      `<a href="${urls[l]}" hreflang="${l}" lang="${l}"${l === current ? ' aria-current="page"' : ''}><span aria-hidden="true">${FLAGS[l][0]}</span><span>${FLAGS[l][1]}</span></a>`
  ).join('');
const hreflangList = (urls) => [...ALL.map((l) => [l, SITE + urls[l]]), ['x-default', SITE + urls.it]];

// Navigazione fra episodi: [precedente, tutte le letture A1, successivo].
export function seriesNav(lang, index) {
  const ui = EMMA_UI[lang];
  const prev = index === 0 ? caffeUrl[lang] : index > 0 ? episodeUrl(EMMA[index - 1], lang) : null;
  const next = index + 1 < EMMA.length ? episodeUrl(EMMA[index + 1], lang) : null;
  const links = [
    prev ? `<a href="${prev}">${ui.prev}</a>` : '<span></span>',
    `<a href="${levelA1(lang)}">${ui.allA1}</a>`,
    next ? `<a href="${next}">${ui.next}</a>` : '<span></span>',
  ];
  return `<section class="section compact-top series-section"><div class="container"><nav class="series-nav" aria-label="${ui.seriesAria}"><strong>${ui.series}</strong>${links.join('')}</nav></div></section>`;
}

function ctaOf(lang) {
  const h = read(htmlOf(caffeUrl[lang]));
  return h.slice(h.indexOf('<section class="conversion-section'), h.lastIndexOf('</main>')).trim();
}

function episodePage(ep, index, lang) {
  const ui = EMMA_UI[lang];
  const tr = lang === 'it' ? null : EMMA_I18N[ep.key][lang];
  const itBox = EMMA_IT_BOX[ep.key];
  const url = episodeUrl(ep, lang);
  const slug = path.basename(url, '.html');
  const pre = prefixOf(url);
  const title = tr ? tr.title : ep.title;
  const lead = tr ? tr.lead : ep.lead;
  const alt = tr ? tr.alt : ep.alt;
  const focus = tr ? it(tr.focus, lang) : ep.focus;
  const t =
    lang === 'it'
      ? {
          home: 'Home',
          readings: 'Letture',
          pdfAria: 'Download PDF',
          pdfAll: 'PDF tutti i livelli',
          words: 'Parole utili',
          questions: 'Domande',
          placeholder: 'Scrivi la tua risposta',
        }
      : T[lang];
  const boxTitle = lang === 'it' ? 'La struttura di questo testo' : T[lang].caffe.box;
  const review = lang === 'it' ? 'Ripassa:' : T[lang].caffe.review;
  const expl = tr ? tr.box : itBox.box;
  const tryLabel = tr ? tr.tryLabel : itBox.tryLabel;
  const linkText = tr ? tr.link : itBox.link;
  const itAttr = lang === 'it' ? '' : ' lang="it"';
  const words = tr
    ? ep.words.map((w, i) => `<span lang="it">${w}</span> = ${tr.words[i]}`).join('<br>')
    : ep.words.join(', ');
  const questions = ep.questions
    .map(
      (q, i) =>
        (tr ? `<li><span lang="it">${q}</span><span class="q-gloss">${tr.q[i]}</span>` : `<li>${q}`) +
        `<textarea rows="${i === 3 ? 3 : 2}" placeholder="${t.placeholder}"></textarea></li>`
    )
    .join('');
  const box = `<div class="structure-box">
          <h3>${boxTitle}</h3>
          <ul>
            ${ep.box.map((l, i) => `<li>${lang === 'it' ? l : `<span lang="it">${l}</span>`} → ${it(expl[i], lang)}</li>`).join('\n            ')}
          </ul>
          <p>${tryLabel} ${lang === 'it' ? `<em>${ep.tryIt}</em>` : `<span lang="it"><em>${ep.tryIt}</em></span>`}</p>
          <p class="structure-link">${review} <a href="${gram(ep.grammar)[lang]}">${linkText}</a></p>
        </div>`;
  const html = `<main>
  <section class="story-hero">
    <div class="container">
      <p class="breadcrumbs"><a href="${home(lang)}">${t.home}</a> / <a href="${indexUrl[lang]}">${t.readings}</a> / ${title}</p>
      <div class="story-hero-grid">
        <div>
          <p class="eyebrow">${ui.series} · ${ui.episode(index + 2)} · ${ui.story}</p>
          <h1>${title}</h1>
          <p class="lead">${lead}</p>
          <div class="level-nav"><a href="#a1">A1</a></div><div class="pdf-downloads pdf-downloads-complete" aria-label="${t.pdfAria}"><a class="button secondary" href="/pdf/${lang}/${slug}-all-levels.pdf" download="">${t.pdfAll}</a></div>
        </div>
        <figure class="story-figure">
          <img src="${pre}assets/${ep.image}.webp" alt="${esc(alt)}" width="960" height="540" decoding="async" loading="eager" fetchpriority="high">
        </figure>
      </div>
    </div>
  </section>
  <section class="section compact-top">
    <div class="container">
      <article class="story-card" id="a1">
        <header><div><span class="level">A1</span><h2${itAttr}>${ep.title}</h2></div><p>${focus}</p></header><div class="pdf-downloads pdf-downloads-level"><a class="button secondary" href="/pdf/${lang}/${slug}-a1.pdf" download="">PDF A1</a></div>
        <div class="story-text"${itAttr}>
          ${ep.text.map((p) => `<p>${p}</p>`).join('\n          ')}
        </div>
        ${box}
        <div class="learning-grid"><div><h3>${t.words}</h3><p>${words}</p></div><div><h3>${t.questions}</h3><ol>${questions}</ol></div></div>
      </article>
    </div>
  </section>
  ${seriesNav(lang, index)}
  ${ctaOf(lang)}
</main>
`;
  write(htmlOf(url), html);

  // Meta: si parte da quella di «Al bar in Italia» nella stessa lingua (stessa cartella).
  const meta = readMeta(astroOf(caffeUrl[lang]));
  const urls = urlsOf(ep);
  const seoTitle = tr ? tr.seoTitle : ep.seoTitle;
  const seoDesc = tr ? tr.seoDesc : ep.seoDesc;
  const image = `${SITE}/assets/${ep.image}.webp`;
  Object.assign(meta, {
    path: url.replace(/^\//, ''),
    title: seoTitle,
    description: seoDesc,
    canonical: SITE + url,
    og: [
      ['og:type', 'article'],
      ['og:site_name', 'Italiano con Martin'],
      ['og:title', seoTitle],
      ['og:description', lead],
      ['og:url', SITE + url],
      ['og:image', image],
      ['og:image:width', '960'],
      ['og:image:height', '540'],
      ['twitter:card', 'summary_large_image'],
      ['twitter:title', seoTitle],
      ['twitter:description', lead],
      ['twitter:image', image],
    ],
    jsonld: [
      JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        url: SITE + url,
        inLanguage: lang,
        educationalLevel: 'A1',
        image,
        isPartOf: { '@type': 'CreativeWorkSeries', name: ui.series },
        author: { '@type': 'Person', name: 'Martin Modena' },
      }),
    ],
    hreflangs: hreflangList(urls),
    optionsHtml: options(urls, lang),
  });
  write(
    astroOf(url),
    `---
// Generato da scripts/create-emma-stories.mjs (serie «Emma in Italia», decisione 2026-09-29).
import SiteLayout from '~/layouts/SiteLayout.astro';
import main from '~/html/${url.replace(/^\//, '')}?raw';
const meta = ${JSON.stringify(meta, null, 2)};
---

<SiteLayout meta={meta} main={main} />
`
  );
}

// Episodio 1: aggiunge (o rinnova) la navigazione della serie.
function episodeOneNav(lang) {
  const p = htmlOf(caffeUrl[lang]);
  let h = read(p).replace(/\s*<section class="section compact-top series-section">[^]*?<\/section>/, '');
  h = h.replace(
    /(\s*)<section class="conversion-section/,
    (m, ws) => `${ws}${seriesNav(lang, -1)}${ws}<section class="conversion-section`
  );
  write(p, h);
}

if (process.argv[1] && process.argv[1].endsWith('create-emma-stories.mjs')) {
  for (const lang of ALL) {
    EMMA.forEach((ep, i) => episodePage(ep, i, lang));
    episodeOneNav(lang);
  }
  // Sitemap: una voce per episodio e lingua.
  const sitemapPath = 'public/sitemap.xml';
  let sitemap = read(sitemapPath);
  for (const ep of EMMA)
    for (const lang of ALL) {
      const loc = SITE + encodeURI(episodeUrl(ep, lang));
      if (!sitemap.includes(`<loc>${loc}</loc>`))
        sitemap = sitemap.replace(
          /\n?<\/urlset>/,
          `\n  <url><loc>${loc}</loc><changefreq>monthly</changefreq></url>\n</urlset>`
        );
    }
  fs.writeFileSync(sitemapPath, sitemap);
  console.log(`Emma in Italia: ${EMMA.length} episodi in ${ALL.length} lingue.`);
}

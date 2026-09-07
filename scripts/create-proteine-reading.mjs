#!/usr/bin/env node
// Crea la lettura «Proteine: quante ne servono davvero» in tutte e 9 le
// lingue, seguendo il modello di scripts/create-issus-reading.mjs:
//
//   - src/html/<percorso>.html         frammento della pagina
//   - src/pages/<percorso>.html.astro  pagina con i metadati SEO
//   - tessera nell'indice delle letture di ogni lingua (sezione Scienza)
//   - 9 voci in public/sitemap.xml
//
// Il testo di studio (italiano) sta in scripts/data/proteine-reading-it.mjs,
// la cornice localizzata in scripts/data/proteine-reading-i18n.mjs.
//
// Le pagine .astro, la call to action e la tessera non si scrivono a mano: si
// clonano dalla lettura «L'insetto con gli ingranaggi», gia' tradotta e
// revisionata in tutte e 9 le lingue. Cosi' nav, footer, icone ed etichette
// restano quelle gia' corrette in ogni lingua.
//
// Rispetto al modello questa lettura ha tre tipi di scheda in piu', tutte di
// solo testo: gli esempi di atleti veri (badge «ESEMPI»), i miti (badge
// «MITI») e i consigli di spesa (badge «SPESA»).
//
// Uso:  node scripts/create-proteine-reading.mjs [--dry-run]

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import path from 'node:path';
import { LANGS, i18n } from './data/proteine-reading-i18n.mjs';
import { levels, insights, examples, myths, practice, labs, sources } from './data/proteine-reading-it.mjs';

const ROOT = process.cwd();
const DRY = process.argv.includes('--dry-run');
const IMAGE = 'reading-proteine';

// Risorsa da cui si clona la cornice gia' tradotta: la lettura sull'insetto
// con gli ingranaggi (metadati, call to action e tessera «Scienza»).
const ISSUS = {
  it: 'letture/insetto-con-gli-ingranaggi',
  en: 'en/readings/the-insect-with-gears',
  es: 'es/lecturas/el-insecto-con-engranajes',
  fr: 'fr/lectures/linsecte-a-engrenages',
  cs: 'cs/cteni/hmyz-s-ozubenymi-koly',
  pl: 'pl/czytanki/owad-z-zebatkami',
  tr: 'tr/okumalar/disli-carklari-olan-bocek',
  de: 'de/lesetexte/das-insekt-mit-zahnraedern',
  ja: 'ja/dokkai/歯車を持つ昆虫',
};
const ISSUS_SLUG = Object.fromEntries(LANGS.map((l) => [l, ISSUS[l].split('/').pop()]));

const routeOf = (lang) => (lang === 'it' ? `letture/${i18n.it.slug}` : `${lang}/${i18n[lang].dir}/${i18n[lang].slug}`);
const indexOf = (lang) => (lang === 'it' ? 'letture/index.html' : `${lang}/${i18n[lang].dir}/index.html`);
const urlOf = (lang) => `https://italianoconmartin.com/${routeOf(lang)}.html`;

const write = (rel, content) => {
  const file = path.join(ROOT, rel);
  if (DRY) {
    console.log(`  [dry-run] ${rel} (${content.length} byte)`);
    return;
  }
  mkdirSync(path.dirname(file), { recursive: true });
  writeFileSync(file, content, 'utf8');
  console.log(`  scritto ${rel}`);
};

// ---------------------------------------------------------------- frammento

// Le domande sono sempre in italiano; la traduzione di servizio (.q-gloss)
// esiste solo dove la usa il modello: A1, A2 e le domande aperte di C1 e degli
// approfondimenti.
function questionList(lang, questions, glosses, placeholder) {
  const items = questions.map((q, i) => {
    if (lang === 'it') return `<li>${q}<textarea rows="2" placeholder="${placeholder}"></textarea></li>`;
    const gloss = glosses && glosses[i] ? `<span class="q-gloss">${glosses[i]}</span>` : '';
    return `<li><span lang="it">${q}</span>${gloss}<textarea rows="2" placeholder="${placeholder}"></textarea></li>`;
  });
  return `<ol>${items.join('')}</ol>`;
}

function wordList(lang, words, glosses) {
  if (lang === 'it') return `<p>${words.join(', ')}</p>`;
  const rows = words.map((w, i) => `<span lang="it">${w}</span> = ${glosses[i]}`);
  return `<p>${rows.join('<br>')}</p>`;
}

function learningGrid(lang, t, words, wordGlosses, questions, questionGlosses, questionsLabel) {
  return (
    '<div class="learning-grid">' +
    `<div><h3>${t.wordsLabel}</h3>${wordList(lang, words, wordGlosses)}</div>` +
    `<div><h3>${questionsLabel}</h3>${questionList(lang, questions, questionGlosses, t.placeholder)}</div>` +
    '</div>'
  );
}

// Scheda di solo testo (miti, spesa, LAB): titolo e occhiello tradotti, corpo
// in italiano perche' e' materiale di studio.
function textCard(t, badge, card) {
  const [title, sub] = t.cards[card.key];
  return (
    `<article class="story-card"><header><div><span class="level">${badge}</span><h2>${title}</h2></div><p>${sub}</p></header>` +
    `<div class="story-text">\n  ${card.text.replace(/<\/p><p>/g, '</p>\n  <p>')}\n</div></article>`
  );
}

function buildFragment(lang) {
  const t = i18n[lang];
  const assets = lang === 'it' ? '../assets' : '../../assets';
  const homeHref = lang === 'it' ? '../' : `/${lang}/`;
  const indexHref = lang === 'it' ? './' : `/${lang}/${t.dir}/`;
  const pdfBase = `/pdf/${lang}/${t.slug}`;
  const h2Lang = lang === 'it' ? '' : ' lang="it"';
  // Glosse: 5 gruppi di livello + i tre approfondimenti; domande a1, a2, c1 e
  // due per ogni approfondimento.
  const wg = (n) => (t.words ? t.words[n] : null);
  const qg = (from, count) => (t.questions ? t.questions.slice(from, from + count) : null);

  const parts = [];
  parts.push('<main>');
  parts.push(
    '<section class="story-hero"><div class="container">' +
      `<p class="breadcrumbs"><a href="${homeHref}">${t.home}</a> / <a href="${indexHref}">${t.indexLabel}</a> / ${t.title}</p>` +
      '<div class="story-hero-grid"><div>\n' +
      `  <p class="eyebrow">${t.eyebrow}</p><h1>${t.title}</h1><p class="lead">${t.lead}</p>\n` +
      '  <div class="level-nav"><a href="#a1">A1</a><a href="#a2">A2</a><a href="#b1">B1</a><a href="#b2">B2</a><a href="#c1">C1</a></div>' +
      `<div class="pdf-downloads pdf-downloads-complete" aria-label="${t.pdfAria}">` +
      `<a class="button secondary" href="${pdfBase}-all-levels.pdf" download="">${t.pdfAll}</a></div>\n` +
      `</div><figure class="story-figure"><img src="${assets}/${IMAGE}.webp" alt="${t.alt}" width="960" height="540" decoding="async" loading="eager" fetchpriority="high">` +
      `<figcaption>${t.figcaption}</figcaption></figure></div></div></section>`
  );
  parts.push('<section class="section compact-top"><div class="container">');

  levels.forEach((lv, idx) => {
    const isC1 = lv.id === 'c1';
    const label = isC1 ? t.talkLabel : t.questionsLabel;
    const glosses = lv.id === 'a1' ? qg(0, 3) : lv.id === 'a2' ? qg(3, 3) : isC1 ? qg(6, 2) : null;
    parts.push(
      `<article class="story-card" id="${lv.id}"><header><div><span class="level">${lv.level}</span>` +
        `<h2${h2Lang}>${i18n.it.title} - livello ${lv.level}</h2></div><p>${t.levelSubs[idx]}</p></header>` +
        `<div class="pdf-downloads pdf-downloads-level"><a class="button secondary" href="${pdfBase}-${lv.id}.pdf" download="">PDF ${lv.level}</a></div>` +
        `<div class="story-text">${lv.text}</div>` +
        learningGrid(lang, t, lv.words, wg(idx), lv.questions, glosses, label) +
        '</article>'
    );
  });

  insights.forEach((card, i) => {
    const [title, sub] = t.cards[card.key];
    parts.push(
      `<article class="story-card"><header><div><span class="level">${t.insightLabel}</span><h2>${title}</h2></div><p>${sub}</p></header>` +
        `<div class="story-text">\n  ${card.text.replace(/<\/p><p>/g, '</p>\n  <p>')}\n</div>` +
        learningGrid(lang, t, card.words, wg(5 + i), card.questions, qg(8 + i * 2, 2), t.talkLabel) +
        '</article>'
    );
  });

  examples.forEach((card) => parts.push(textCard(t, t.examplesLabel, card)));
  myths.forEach((card) => parts.push(textCard(t, t.mythsLabel, card)));
  practice.forEach((card) => parts.push(textCard(t, t.practiceLabel, card)));
  labs.forEach((card) => parts.push(textCard(t, 'LAB', card)));

  parts.push(
    `<article class="story-card"><header><div><span class="level">${t.sourcesLabel}</span><h2>${t.sourcesTitle}</h2></div><p>${t.sourcesSub}</p></header>` +
      `<div class="story-text">\n  ${sources.map((s) => `<p>${s}</p>`).join('\n  ')}\n</div></article>`
  );

  parts.push('');
  parts.push('</div></section></main>');

  // La call to action finale e' identica a quella della lettura sull'insetto
  // con gli ingranaggi: stessa lingua, stessi link, gia' revisionata.
  const source = readFileSync(path.join(ROOT, 'src/html', `${ISSUS[lang]}.html`), 'utf8');
  const cta = source.slice(source.indexOf('<section class="conversion-section'));
  return `${parts.join('\n')}${cta.startsWith('<section') ? cta : ''}`.replace(/\n$/, '') + '\n';
}

// ------------------------------------------------------------------- pagina

function buildAstro(lang) {
  const t = i18n[lang];
  const route = routeOf(lang);
  const src = readFileSync(path.join(ROOT, 'src/pages', `${ISSUS[lang]}.html.astro`), 'utf8');

  // Sostituisce ogni URL della lettura clonata con quello della lettura nuova:
  // sistema in un colpo hreflang, x-default e selettore lingua.
  let out = src;
  for (const l of LANGS) out = out.split(`/${ISSUS[l]}.html`).join(`/${routeOf(l)}.html`);
  out = out.split(`~/html/${ISSUS[lang]}.html`).join(`~/html/${route}.html`);

  const start = out.indexOf('const meta = ');
  const end = out.lastIndexOf('};');
  const meta = JSON.parse(out.slice(start + 'const meta = '.length, end + 1));

  meta.path = `${route}.html`;
  meta.title = t.metaTitle;
  meta.description = t.metaDescription;
  meta.canonical = urlOf(lang);
  meta.og = meta.og.map(([k, v]) => {
    if (k === 'og:title') return [k, lang === 'it' ? `${t.title}: una lettura graduata A1-C1` : t.metaTitle];
    if (k === 'og:image') return [k, `https://italianoconmartin.com/assets/${IMAGE}.webp`];
    return [k, v];
  });
  if (meta.jsonld.length) {
    meta.jsonld = [
      JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        name: t.title,
        url: urlOf(lang),
        inLanguage: lang,
      }),
    ];
  }

  const indent = lang === 'it' ? 2 : 4;
  const body = JSON.stringify(meta, null, 2)
    .split('\n')
    .map((line, i) => (i === 0 ? line : ' '.repeat(indent - 2) + line))
    .join('\n');
  return `${out.slice(0, start)}const meta = ${body};\n---\n\n<SiteLayout meta={meta} main={main} />\n`;
}

// ------------------------------------------------------------------- indice

function updateIndex(lang) {
  const t = i18n[lang];
  const rel = path.join('src/html', indexOf(lang));
  const file = path.join(ROOT, rel);
  let html = readFileSync(file, 'utf8');
  if (html.includes(`${t.slug}.html`)) {
    console.log(`  indice ${lang}: gia' presente`);
    return;
  }

  const issus = ISSUS_SLUG[lang];
  const re = new RegExp(
    `<a class="story-tile" href="[^"]*${issus.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\.html"[\\s\\S]*?</a>`
  );
  const match = html.match(re);
  if (!match) throw new Error(`tessera dell'insetto non trovata in ${rel}`);

  const tile = match[0]
    .split(issus)
    .join(t.slug)
    .replace('reading-insetto-ingranaggi-card', `${IMAGE}-card`)
    .replace(/alt="[^"]*"/, `alt="${t.alt}"`)
    .replace(/<h2>[\s\S]*?<\/h2>/, `<h2>${t.cardTitle}</h2>`)
    .replace(/<p>[\s\S]*?<\/p>/, `<p>${t.cardDesc}</p>`);

  html = html.replace(match[0], `${match[0]}${tile}`);
  write(rel, html);
}

// ------------------------------------------------------------------ sitemap

function encodeLoc(url) {
  return [...url].map((ch) => (ch.charCodeAt(0) < 128 ? ch : `&#x${ch.codePointAt(0).toString(16)};`)).join('');
}

function updateSitemap() {
  const rel = 'public/sitemap.xml';
  let lines = readFileSync(path.join(ROOT, rel), 'utf8').split('\n');
  for (const lang of LANGS) {
    const loc = encodeLoc(urlOf(lang));
    if (lines.some((l) => l.includes(`<loc>${loc}</loc>`))) continue;
    const entry = `  <url><loc>${loc}</loc><changefreq>monthly</changefreq></url>`;
    const prefix = encodeLoc(
      `https://italianoconmartin.com/${lang === 'it' ? 'letture' : `${lang}/${i18n[lang].dir}`}/`
    );
    const group = lines
      .map((l, i) => ({ l, i }))
      .filter(({ l }) => l.includes(`<loc>${prefix}`) && l.includes('.html</loc>'));
    if (!group.length) throw new Error(`nessuna voce di sitemap per ${lang}`);
    const after = group.find(({ l }) => l > entry) ?? null;
    const at = after ? after.i : group[group.length - 1].i + 1;
    lines = [...lines.slice(0, at), entry, ...lines.slice(at)];
  }
  write(rel, lines.join('\n'));
}

// --------------------------------------------------------------------- main

console.log(`Lettura «${i18n.it.title}» - ${LANGS.length} lingue${DRY ? ' (dry-run)' : ''}`);
for (const lang of LANGS) {
  const route = routeOf(lang);
  write(path.join('src/html', `${route}.html`), buildFragment(lang));
  write(path.join('src/pages', `${route}.html.astro`), buildAstro(lang));
  updateIndex(lang);
}
updateSitemap();
console.log('Fatto.');

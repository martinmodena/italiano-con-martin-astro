#!/usr/bin/env node
// Crea la lettura «L'insetto con gli ingranaggi» (Issus coleoptratus) in tutte
// e 9 le lingue, seguendo il modello della lettura sulla mafia:
//
//   - src/html/<percorso>.html      frammento della pagina
//   - src/pages/<percorso>.html.astro  pagina con i metadati SEO
//   - tessera nell'indice delle letture di ogni lingua (sezione Scienza)
//   - 9 voci in public/sitemap.xml
//
// Il testo di studio (italiano) sta in scripts/data/issus-reading-it.mjs,
// la cornice localizzata in scripts/data/issus-reading-i18n.mjs.
//
// Le pagine .astro e le tessere non si scrivono a mano: si clonano da risorse
// gia' tradotte e revisionate (la lettura sulla mafia per i metadati, quella
// sul sonar del delfino per la tessera «Scienza»), come fa
// scripts/create-sea-vocabulary.mjs con la lezione della cucina. Cosi' nav,
// footer, icone e etichette restano quelle gia' corrette in ogni lingua.
//
// Uso:  node scripts/create-issus-reading.mjs [--dry-run]

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import path from 'node:path';
import { LANGS, i18n } from './data/issus-reading-i18n.mjs';
import { levels, insights, labs, sources } from './data/issus-reading-it.mjs';

const ROOT = process.cwd();
const DRY = process.argv.includes('--dry-run');
const IMAGE = 'reading-insetto-ingranaggi';

// Risorse da cui si clona la cornice gia' tradotta.
const MAFIA = {
  it: 'letture/storia-della-mafia-in-italia',
  en: 'en/readings/the-history-of-the-mafia-in-italy',
  es: 'es/lecturas/la-historia-de-la-mafia-en-italia',
  fr: 'fr/lectures/lhistoire-de-la-mafia-en-italie',
  cs: 'cs/cteni/historie-mafie-v-italii',
  pl: 'pl/czytanki/historia-mafii-we-włoszech',
  tr: 'tr/okumalar/italyada-mafyanin-tarihi',
  de: 'de/lesetexte/die-geschichte-der-mafia-in-italien',
  ja: 'ja/dokkai/イタリアのマフィアの歴史',
};
const DOLPHIN_SLUG = {
  it: 'il-sonar-del-delfino',
  en: 'dolphin-sonar',
  es: 'el-sonar-del-delfin',
  fr: 'le-sonar-du-dauphin',
  cs: 'delfinovy-sonar',
  pl: 'sonar-delfinow',
  tr: 'yunus-sonarı',
  de: 'delphin-sonar',
  ja: 'イルカソナー',
};

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
// esiste solo dove la usa la lettura sulla mafia: A1, A2 e le domande aperte
// di C1 e degli approfondimenti.
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

function buildFragment(lang) {
  const t = i18n[lang];
  const assets = lang === 'it' ? '../assets' : '../../assets';
  const homeHref = lang === 'it' ? '../' : `/${lang}/`;
  const indexHref = lang === 'it' ? './' : `/${lang}/${t.dir}/`;
  const pdfBase = `/pdf/${lang}/${t.slug}`;
  const h2Lang = lang === 'it' ? '' : ' lang="it"';
  // Glosse: 5 gruppi di livello + i due approfondimenti; domande a1,a2,c1,app1,app2.
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

  labs.forEach((card) => {
    const [title, sub] = t.cards[card.key];
    parts.push(
      `<article class="story-card"><header><div><span class="level">LAB</span><h2>${title}</h2></div><p>${sub}</p></header>` +
        `<div class="story-text">\n  ${card.text.replace(/<\/p><p>/g, '</p>\n  <p>')}\n</div></article>`
    );
  });

  parts.push(
    `<article class="story-card"><header><div><span class="level">${t.sourcesLabel}</span><h2>${t.sourcesTitle}</h2></div><p>${t.sourcesSub}</p></header>` +
      `<div class="story-text">\n  ${sources.map((s) => `<p>${s}</p>`).join('\n  ')}\n</div></article>`
  );

  parts.push('');
  parts.push('</div></section></main>');

  // La call to action finale e' identica a quella della lettura sulla mafia:
  // stessa lingua, stessi link, gia' revisionata.
  const mafiaFragment = readFileSync(path.join(ROOT, 'src/html', `${MAFIA[lang]}.html`), 'utf8');
  const cta = mafiaFragment.slice(mafiaFragment.indexOf('<section class="conversion-section'));
  return `${parts.join('\n')}${cta.startsWith('<section') ? cta : ''}`.replace(/\n$/, '') + '\n';
}

// ------------------------------------------------------------------- pagina

function buildAstro(lang) {
  const t = i18n[lang];
  const route = routeOf(lang);
  const src = readFileSync(path.join(ROOT, 'src/pages', `${MAFIA[lang]}.html.astro`), 'utf8');

  // Sostituisce ogni URL della lettura sulla mafia con quello della lettura
  // nuova: sistema in un colpo hreflang, x-default e selettore lingua.
  let out = src;
  for (const l of LANGS) out = out.split(`/${MAFIA[l]}.html`).join(`/${routeOf(l)}.html`);
  out = out.split(`~/html/${MAFIA[lang]}.html`).join(`~/html/${route}.html`);

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

  const dolphin = DOLPHIN_SLUG[lang];
  const re = new RegExp(
    `<a class="story-tile" href="[^"]*${dolphin.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\.html"[\\s\\S]*?</a>`
  );
  const match = html.match(re);
  if (!match) throw new Error(`tessera del sonar non trovata in ${rel}`);

  const tile = match[0]
    .split(dolphin)
    .join(t.slug)
    .replace('reading-sonar-delfino-card', `${IMAGE}-card`)
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

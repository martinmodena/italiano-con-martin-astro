#!/usr/bin/env node
// Crea la pagina dei falsi amici di una lingua (2026-10-06, per ora solo lo spagnolo).
//
// A differenza delle altre lezioni, la pagina esiste in UNA lingua sola: i falsi amici fra italiano e
// spagnolo non sono quelli fra italiano e inglese. Quindi niente versione italiana né hreflang verso le
// altre lingue; il selettore di lingua porta agli indici del vocabolario. Nell'indice del vocabolario la
// scheda si riconosce dal commento `// vocabulary-key: falsi-amici` (scripts/sort-vocabulary-index.mjs).
//
// Lo stampo è la lezione della cucina nella stessa lingua: le etichette di servizio (pulsante «Escucha»,
// progresso, segnaposto, invito alle lezioni) sono già tradotte e revisionate.
//
// Dati: scripts/data/false-friends-<lingua>.mjs. Immagini: public/assets/vocabolario/falsi-amici-<lingua>/,
// prompt in docs/prompt-immagini-falsi-amici.md. Lo script è idempotente.
//
// Uso: node scripts/create-false-friends.mjs

import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import * as cheerio from 'cheerio';
import { falseFriendsEs, falseFriendsEsPage } from './data/false-friends-es.mjs';
import { sortVocabularyIndexes } from './sort-vocabulary-index.mjs';

const root = process.cwd();
const SITE = 'https://italianoconmartin.com';
const VOCAB_CSS_VERSION = '20261006';
const INDEX = {
  it: 'vocabolario',
  en: 'en/vocabulary',
  es: 'es/vocabulario',
  fr: 'fr/vocabulaire',
  cs: 'cs/slovni-zasoba',
  pl: 'pl/slownictwo',
  tr: 'tr/kelime-bilgisi',
  de: 'de/wortschatz',
  ja: 'ja/goi',
};

const LESSONS = [{ lang: 'es', words: falseFriendsEs, page: falseFriendsEsPage }];

const esc = (s) => String(s).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const attr = (s) => esc(s).replaceAll('"', '&quot;');

function buildCard(w, page, prefix) {
  const examples = w.examples.map((s) => `<li><span lang="it">${esc(s)}</span></li>`).join('');
  return `<article class="word-card false-friend-card">
              <img src="${prefix}assets/vocabolario/falsi-amici-${page.lang}/${w.slug}.webp" alt="${attr(w.alt)}" loading="lazy" decoding="async">
              <div class="word-card-body">
                <h2 lang="it">${esc(w.it)}</h2>
                <p class="word-translation">${esc(page.meansLabel)}: <strong>${esc(w.itMeans)}</strong></p>
                <p class="false-friend-warning">${page.warning(esc(w.es), w.esIs)}</p>
                <div class="word-examples">
                  <strong>${esc(page.examplesLabel)}</strong>
                  <ol>${examples}</ol>
                </div>
                <button class="speak-word" data-word="${attr(w.it.replaceAll(' / ', ', '))}" type="button">${esc(page.speakLabel)}</button>
              </div>
            </article>`;
}

function buildTest(w, page, prefix, i) {
  const n = i + 1;
  return `<article class="word-test" data-answer="${attr(JSON.stringify(w.answers))}" data-key="${n}">
              <img src="${prefix}assets/vocabolario/falsi-amici-${page.lang}/${w.slug}.webp" alt="${attr(page.testAlt(n))}" loading="lazy" decoding="async">
              <div class="word-test-body">
                <span class="test-number">${n}</span>
                <label for="word-test-${n}">${esc(page.testLabel(w.ask))}</label>
                <input id="word-test-${n}" type="text" autocomplete="off" spellcheck="false" placeholder="${attr(page.placeholder)}" lang="it">
                <p class="word-test-feedback" aria-live="polite"></p>
              </div>
            </article>`;
}

function buildFragment({ lang, words, page }) {
  const template = readFileSync(path.join(root, 'src/html', page.template), 'utf8');
  const $ = cheerio.load(template, null, false);
  const prefix = '../../';
  page.lang = lang;
  page.speakLabel = $('.speak-word').first().text().trim();
  page.placeholder = $('.word-test input').first().attr('placeholder') ?? '';

  const crumbs = $('.breadcrumbs');
  crumbs.html(crumbs.html().replace(/[^/>]*$/, ` ${esc(page.crumb)}`));
  $('.page-intro .eyebrow').first().text(page.eyebrow);
  $('h1').first().text(page.h1);
  $('.page-intro .lead').first().html(page.lead);
  $('img.vocabulary-hero').attr('src', `${prefix}assets/vocabolario/${page.hero}`).attr('alt', page.heroAlt);

  $('.word-grid').html(
    '\n            ' + words.map((w) => buildCard(w, page, prefix)).join('\n            ') + '\n          '
  );

  const practice = $('.word-practice-section');
  practice.find('.practice-heading .eyebrow').text(page.practiceEyebrow);
  practice.find('#word-practice-title').text(page.practiceH2);
  practice.find('.practice-heading > p').html(page.practiceP);
  const progressText = practice.find('#word-progress-text');
  progressText.text(progressText.text().replace(/de \d+/, `de ${words.length}`));
  practice.find('#word-progress').attr('max', String(words.length));
  practice
    .find('.word-tests')
    .html(
      '\n            ' + words.map((w, i) => buildTest(w, page, prefix, i)).join('\n            ') + '\n          '
    );

  // Niente frasi libere da tradurre: l'esercizio è quello sopra.
  $('.translation-free-section').remove();
  $('.vocabulary-note').html(
    `\n            <strong>${esc(page.noteTitle)}</strong>\n            <p>${page.noteBody}</p>\n          `
  );
  return $.html();
}

function buildAstro({ lang, page }) {
  const own = `${page.dir}/${page.slug}.html`;
  const url = `${SITE}/${own}`;
  const source = readFileSync(path.join(root, 'src/pages', `${page.template}.astro`), 'utf8');
  const meta = JSON.parse(source.match(/const meta = (\{[\s\S]*?\n\});/)[1]);
  meta.path = own;
  meta.title = page.title;
  meta.description = page.description;
  meta.canonical = url;
  const og = {
    'og:title': page.title,
    'og:description': page.description,
    'og:url': url,
    'og:image': `${SITE}/assets/vocabolario/${page.hero}`,
  };
  meta.og = meta.og.map(([key, value]) => [key, og[key] ?? value]);
  meta.jsonld = [
    JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', name: page.h1, url, inLanguage: lang }),
  ];
  // Una lingua sola: l'unica alternativa è la pagina stessa.
  meta.hreflangs = [[lang, url]];
  meta.extraHead = meta.extraHead.map((s) =>
    s.replace(/vocabulary\.css\?v=[\w]+/, `vocabulary.css?v=${VOCAB_CSS_VERSION}`)
  );
  meta.bodyScripts = meta.bodyScripts.map((s) =>
    s.replace(/vocabulary\.js\?v=[\w]+/, `vocabulary.js?v=${VOCAB_CSS_VERSION}`)
  );
  let options = meta.optionsHtml;
  for (const [l, dir] of Object.entries(INDEX))
    options = options.replace(
      new RegExp(`href="[^"]*" hreflang="${l}"`),
      `href="/${l === lang ? own : `${dir}/`}" hreflang="${l}"`
    );
  meta.optionsHtml = options;
  return `---
// Generated by scripts/create-false-friends.mjs
// vocabulary-key: falsi-amici
import SiteLayout from '~/layouts/SiteLayout.astro';
import main from '~/html/${own}?raw';
const meta = ${JSON.stringify(meta, null, 2)};
---

<SiteLayout meta={meta} main={main} />
`;
}

function addIndexCard({ lang, page }) {
  const file = path.join(root, 'src/html', INDEX[lang], 'index.html');
  let html = readFileSync(file, 'utf8');
  const href = `/${page.dir}/${page.slug}.html`;
  const card = `<a class="vocabulary-category" href="${href}"><img src="../../assets/vocabolario/${page.hero}" width="1280" height="853" alt="${attr(page.heroAlt)}" loading="lazy" decoding="async">
              <div class="vocabulary-category-body">
                <h2>${esc(page.h1)}</h2>
                <p>${esc(page.cardText)}</p>
              </div></a>`;
  const existing = new RegExp(`<a class="vocabulary-category" href="${href}"[\\s\\S]*?</a>`);
  if (existing.test(html)) html = html.replace(existing, card);
  else {
    const cards = [...html.matchAll(/<a class="vocabulary-category" href="[^"]+"[\s\S]*?<\/a>/g)];
    const last = cards[cards.length - 1];
    const end = last.index + last[0].length;
    html = `${html.slice(0, end)}\n            ${card}${html.slice(end)}`;
  }
  writeFileSync(file, html);
}

function addToSitemap({ page }) {
  const file = path.join(root, 'public/sitemap.xml');
  const lines = readFileSync(file, 'utf8').split('\n');
  const loc = `${SITE}/${page.dir}/${page.slug}.html`;
  if (lines.some((l) => l.includes(`<loc>${loc}</loc>`))) return;
  let last = -1;
  lines.forEach((l, i) => {
    if (l.includes(`<loc>${SITE}/${page.dir}/`)) last = i;
  });
  lines.splice(last + 1, 0, `  <url><loc>${loc}</loc><changefreq>monthly</changefreq></url>`);
  writeFileSync(file, lines.join('\n'));
}

for (const lesson of LESSONS) {
  const own = `${lesson.page.dir}/${lesson.page.slug}.html`;
  writeFileSync(path.join(root, 'src/html', own), buildFragment(lesson));
  writeFileSync(path.join(root, 'src/pages', `${own}.astro`), buildAstro(lesson));
  addIndexCard(lesson);
  addToSitemap(lesson);
  console.log(`${lesson.lang}: ${lesson.words.length} falsi amici -> ${own}`);
}
sortVocabularyIndexes({ log: () => {} });
console.log('Poi: npm run build e gli audit.');

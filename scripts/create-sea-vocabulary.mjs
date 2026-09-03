#!/usr/bin/env node
/**
 * Crea la lezione di vocabolario "Il mare" in tutte e 9 le lingue.
 *
 * Metodo: ogni pagina nuova viene costruita a partire dalla pagina della
 * cucina gia' tradotta in quella lingua. Tutte le etichette di servizio
 * («Riconosci la parola», «Frasi da tradurre», i bottoni, il testo della
 * barra di avanzamento, la nota finale) vengono cosi' ereditate gia'
 * tradotte, senza riscriverle: si sostituiscono solo il titolo, l'immagine
 * di testata, le parole e i contatori.
 *
 * Le parole stanno in scripts/data/sea-vocabulary.mjs, le stringhe di pagina
 * in scripts/data/sea-vocabulary-pages.mjs.
 *
 * Uso:
 *   node scripts/create-sea-vocabulary.mjs --dry-run
 *   node scripts/create-sea-vocabulary.mjs
 *
 * Dopo: aggiungere `mare` a scripts/audit-vocabulary.mjs (lo script stampa
 * il blocco da incollare) e generare le immagini.
 */

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as cheerio from 'cheerio';
import { seaVocabulary, seaTranslationExercises } from './data/sea-vocabulary.mjs';
import { seaPages, seaExampleWord } from './data/sea-vocabulary-pages.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dryRun = process.argv.includes('--dry-run');
const LANGS = ['it', 'en', 'es', 'fr', 'cs', 'pl', 'tr', 'de', 'ja'];

/** La lezione della cucina, che fa da stampo: stesso impianto, gia' tradotto. */
const kitchen = {
  it: 'vocabolario/cucina.html',
  en: 'en/vocabulary/italian-kitchen-vocabulary.html',
  es: 'es/vocabulario/vocabulario-cocina-italiano.html',
  fr: 'fr/vocabulaire/vocabulaire-cuisine-italien.html',
  cs: 'cs/slovni-zasoba/italska-slovni-zasoba-kuchyne.html',
  pl: 'pl/slownictwo/wloskie-slownictwo-kuchnia.html',
  tr: 'tr/kelime-bilgisi/italyanca-mutfak-kelimeleri.html',
  de: 'de/wortschatz/italienischer-wortschatz-kueche.html',
  ja: 'ja/goi/italian-kitchen-vocabulary.html',
};

const seaPath = (lang) => `${seaPages[lang].dir}/${seaPages[lang].slug}.html`;
const seaUrl = (lang) => `https://italianoconmartin.com/${seaPath(lang)}`;
const kitchenUrl = (lang) => `https://italianoconmartin.com/${kitchen[lang]}`;

const escapeAttribute = (v) =>
  v.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const escapeHtml = (v) => v.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');

/** Trova il contenuto di un `<div class="...">`, contando i div annidati. */
function findContainer(html, className) {
  const opening = new RegExp(`<div class="${className}"[^>]*>`);
  const match = opening.exec(html);
  if (!match) return null;
  const contentStart = match.index + match[0].length;
  const tag = /<\/?div\b[^>]*>/g;
  tag.lastIndex = contentStart;
  let depth = 1;
  let found;
  while ((found = tag.exec(html))) {
    depth += found[0].startsWith('</') ? -1 : 1;
    if (depth === 0) return { contentStart, contentEnd: found.index };
  }
  return null;
}

function replaceContainer(html, className, content) {
  const box = findContainer(html, className);
  if (!box) throw new Error(`contenitore .${className} non trovato`);
  return html.slice(0, box.contentStart) + content + html.slice(box.contentEnd);
}

/** Legge dalla pagina della cucina le etichette gia' tradotte. */
function readTemplate(html) {
  const $ = cheerio.load(html, null, false);
  const card = $('.word-card').first();
  const test = $('.word-test').first();
  const exercise = $('.translation-exercise').first();
  const source = card.find('img').attr('src') ?? '';
  const testAltSample = test.find('img').attr('alt') ?? '';
  return {
    imagePrefix: source.slice(0, source.lastIndexOf('/')),
    examplesLabel: card.find('.word-examples strong').first().text(),
    speakLabel: card.find('.speak-word').first().text(),
    testLabel: test.find('label').first().text(),
    placeholder: test.find('input').first().attr('placeholder') ?? '',
    testAlt: (n) => testAltSample.replace(/\d+/, String(n)),
    translation: {
      label: exercise.find('.prompt-label').first().text(),
      fieldLabel: exercise.find('label').first().text(),
      button: exercise.find('.show-translation').first().text(),
      solutionLabel: exercise.find('.proposed-solution span').first().text(),
    },
  };
}

function buildCard(word, template, language) {
  const examples = word.examples.map((s) => `<li><span lang="it">${escapeHtml(s)}</span></li>`).join('');
  return `<article class="word-card">
              <img src="${template.imagePrefix}/${word.image}.webp" alt="${escapeAttribute(word.alt[language])}" loading="lazy" decoding="async">
              <div class="word-card-body">
                <h2>${escapeHtml(word.word)}</h2>
                <div class="word-examples">
                  <strong>${escapeHtml(template.examplesLabel)}</strong>
                  <ol>
                    ${examples}
                  </ol>
                </div>
                <button class="speak-word" data-word="${escapeAttribute(word.word)}" type="button">${escapeHtml(template.speakLabel)}</button>
              </div>
            </article>`;
}

function buildTest(word, template, index) {
  const n = index + 1;
  return `<article class="word-test" data-answer="${escapeAttribute(JSON.stringify(word.answers))}" data-key="${n}">
              <img src="${template.imagePrefix}/${word.image}.webp" alt="${escapeAttribute(template.testAlt(n))}" loading="lazy" decoding="async">
              <div class="word-test-body">
                <span class="test-number">${n}</span>
                <label for="word-test-${n}">${escapeHtml(template.testLabel)}</label>
                <input id="word-test-${n}" type="text" autocomplete="off" spellcheck="true" placeholder="${escapeAttribute(template.placeholder)}">
                <p class="word-test-feedback" aria-live="polite"></p>
              </div>
            </article>`;
}

function buildTranslation(exercise, template, language, index) {
  const n = index + 1;
  // Sulla pagina italiana la lingua di partenza e' l'inglese: unica eccezione
  // prevista da REGOLE_LINGUE.md per le traduzioni libere.
  const promptLang = language === 'it' ? 'en' : language;
  const prompt = exercise.prompt[language];
  return `<article class="translation-exercise" data-key="${n}">
              <div class="exercise-number" aria-hidden="true">${n}</div>
              <div class="translation-exercise-body">
                <p class="translation-prompt">
                  <span class="prompt-label">${escapeHtml(template.translation.label)}</span><strong lang="${promptLang}">${escapeHtml(prompt)}</strong>
                </p>
                <label for="translation-${n}">${escapeHtml(template.translation.fieldLabel)}</label>
                <textarea id="translation-${n}" rows="2" autocomplete="off" spellcheck="true"></textarea>
                <div class="translation-actions">
                  <button class="show-translation" type="button">${escapeHtml(template.translation.button)}</button>
                </div>
                <p class="proposed-solution" hidden="">
                  <span>${escapeHtml(template.translation.solutionLabel)}</span> <strong>${escapeHtml(exercise.solution)}</strong>
                </p>
              </div>
            </article>`;
}

/** Sostituisce i numeri dei contatori: occhiello, barra, testo del progresso. */
function updateCounters(html, oldCount, newCount, oldTrad, newTrad) {
  let out = html;
  const digits = new RegExp(`\\b${oldCount}\\b`);

  const practiceStart = out.indexOf('word-practice-section');
  const titleIndex = out.indexOf('<h2 id="word-practice-title"', practiceStart);
  if (practiceStart !== -1 && titleIndex !== -1) {
    const head = out.slice(practiceStart, titleIndex);
    out = out.slice(0, practiceStart) + head.replace(digits, String(newCount)) + out.slice(titleIndex);
  }
  out = out.replace(/(<progress id="word-progress" max=")\d+(")/, `$1${newCount}$2`);
  out = out.replace(
    /(<span id="word-progress-text">)([^<]*)(<\/span>)/,
    (w, open, text, close) => `${open}${text.replace(digits, String(newCount))}${close}`
  );

  const tradStart = out.indexOf('translation-free-section');
  const tradTitle = out.indexOf('<h2 id="translation-practice-title"', tradStart);
  if (tradStart !== -1 && tradTitle !== -1) {
    const head = out.slice(tradStart, tradTitle).replace(new RegExp(`\\b${oldTrad}\\b`), String(newTrad));
    out = out.slice(0, tradStart) + head + out.slice(tradTitle);
  }
  return out;
}

function buildPage(lang) {
  const src = path.join(root, 'src/html', kitchen[lang]);
  const html = readFileSync(src, 'utf8');
  const template = readTemplate(html);
  const page = seaPages[lang];
  const $ = cheerio.load(html, null, false);
  const oldCount = $('.word-card').length;
  const oldTrad = $('.translation-exercise').length;
  const kitchenName = $('h1').first().text().trim();
  const kitchenHeroAlt = $('img.vocabulary-hero').attr('alt') ?? '';

  let out = html;

  // 1. parole, esercizi di riconoscimento, traduzioni libere
  out = replaceContainer(
    out,
    'word-grid',
    '\n            ' + seaVocabulary.map((w) => buildCard(w, template, lang)).join('\n            ') + '\n          '
  );
  out = replaceContainer(
    out,
    'word-tests',
    '\n            ' + seaVocabulary.map((w, i) => buildTest(w, template, i)).join('\n            ') + '\n          '
  );
  out = replaceContainer(
    out,
    'translation-exercises',
    '\n            ' +
      seaTranslationExercises.map((e, i) => buildTranslation(e, template, lang, i)).join('\n            ') +
      '\n          '
  );

  // 2. contatori
  out = updateCounters(out, oldCount, seaVocabulary.length, oldTrad, seaTranslationExercises.length);

  // 3. titolo, briciole di pane, immagine di testata
  out = out.replace(
    new RegExp(`(<p class="breadcrumbs">.*?/\\s*)${escapeRegex(kitchenName)}(\\s*</p>)`, 's'),
    `$1${page.name}$2`
  );
  out = out.replace(/(<h1>)[^<]*(<\/h1>)/, `$1${escapeHtml(page.name)}$2`);
  out = out.replace(/cucina-hero\.webp/g, 'mare-hero.webp');
  if (kitchenHeroAlt) out = out.replace(escapeAttribute(kitchenHeroAlt), escapeAttribute(page.heroAlt));

  // 4. la parola d'esempio citata nel testo dell'esercizio e nella nota finale.
  // Nelle pagine localizzate l'`<em>` porta anche `lang="it"`: va conservato.
  const swapWord = (html, from, to) =>
    html.replace(new RegExp(`(<em(?:\\s+lang="it")?>)${escapeRegex(from)}(</em>)`, 'g'), `$1${to}$2`);
  out = swapWord(out, 'il frigorifero', seaExampleWord.withArticle);
  out = swapWord(out, 'frigorifero', seaExampleWord.bare);
  out = swapWord(out, 'la forchetta', seaExampleWord.withArticle);
  out = swapWord(out, 'forchetta', seaExampleWord.bare);

  return out;
}

const escapeRegex = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

function buildAstro(lang) {
  const src = path.join(root, 'src/pages', kitchen[lang] + '.astro');
  let out = readFileSync(src, 'utf8');
  const page = seaPages[lang];

  // Gli URL della cucina (hreflang e selettore lingua) diventano quelli del mare.
  for (const l of LANGS) {
    out = out.replaceAll(kitchenUrl(l), seaUrl(l));
    out = out.replaceAll(`/${kitchen[l]}`, `/${seaPath(l)}`);
  }
  out = out.replaceAll(`~/html/${kitchen[lang]}`, `~/html/${seaPath(lang)}`);
  out = out.replaceAll(`"${kitchen[lang]}"`, `"${seaPath(lang)}"`);
  out = out.replaceAll('cucina-hero.webp', 'mare-hero.webp');

  // Titolo e descrizione: sostituiti per valore, non per posizione.
  const oldTitle = /"title":\s*"([^"]+)"/.exec(out)?.[1];
  const oldDesc = /"description":\s*"([^"]+)"/.exec(out)?.[1];
  if (oldTitle) out = out.replaceAll(jsonEscape(oldTitle), jsonEscape(page.title));
  if (oldDesc) out = out.replaceAll(jsonEscape(oldDesc), jsonEscape(page.description));

  // Open Graph e Twitter hanno titolo e descrizione brevi, diversi dalla meta
  // description: vanno sostituiti a parte, per valore del campo, altrimenti
  // restano quelli della cucina.
  const setOg = (key, value) =>
    out.replace(new RegExp(`("${key}",\\s*\\n\\s*)"[^"]*"`), (_, head) => `${head}"${jsonEscape(value)}"`);
  for (const key of ['og:title', 'twitter:title']) out = setOg(key, page.title);
  for (const key of ['og:description', 'twitter:description']) out = setOg(key, page.description);

  // Nel JSON-LD resta il nome localizzato della lezione della cucina: a volte
  // con un'iniziale diversa da quella dell'H1, quindi si riscrive il campo.
  out = out.replace(/(\\"name\\":\\")[^"]*?(\\")/, `$1${jsonEscape(page.name)}$2`);

  return out;
}

const jsonEscape = (s) => JSON.stringify(s).slice(1, -1);

// --------------------------------------------------------------------------
console.log(
  `Lezione "Il mare": ${seaVocabulary.length} parole, ${seaTranslationExercises.length} frasi da tradurre.\n`
);

for (const lang of LANGS) {
  const htmlFile = path.join(root, 'src/html', seaPath(lang));
  const astroFile = path.join(root, 'src/pages', seaPath(lang) + '.astro');

  const html = buildPage(lang);
  const astro = buildAstro(lang);

  if (!dryRun) {
    mkdirSync(path.dirname(htmlFile), { recursive: true });
    mkdirSync(path.dirname(astroFile), { recursive: true });
    writeFileSync(htmlFile, html);
    writeFileSync(astroFile, astro);
  }
  const $ = cheerio.load(html, null, false);
  console.log(
    `${lang}: ${$('.word-card').length} schede, ${$('.word-test').length} esercizi, ${$('.translation-exercise').length} traduzioni -> ${seaPath(lang)}`
  );
}

// --- indici del vocabolario: il segnaposto diventa una scheda vera ---------
const indexFile = {
  it: 'src/html/vocabolario/index.html',
  en: 'src/html/en/vocabulary/index.html',
  es: 'src/html/es/vocabulario/index.html',
  fr: 'src/html/fr/vocabulaire/index.html',
  cs: 'src/html/cs/slovni-zasoba/index.html',
  pl: 'src/html/pl/slownictwo/index.html',
  tr: 'src/html/tr/kelime-bilgisi/index.html',
  de: 'src/html/de/wortschatz/index.html',
  ja: 'src/html/ja/goi/index.html',
};

console.log('');
for (const lang of LANGS) {
  const file = path.join(root, indexFile[lang]);
  let html = readFileSync(file, 'utf8');
  const page = seaPages[lang];

  if (html.includes(`${page.slug}.html"`)) {
    console.log(`indice ${lang}: gia' aggiornato`);
    continue;
  }

  // Il segnaposto «In preparazione» del mare: si riconosce dall'emoji.
  const placeholder =
    /<article class="vocabulary-category coming">\s*<div class="category-placeholder" aria-hidden="true">🌊<\/div>[\s\S]*?<\/article>/.exec(
      html
    );
  if (!placeholder) throw new Error(`${lang}: segnaposto del mare non trovato`);

  // Da una scheda gia' disponibile si prendono l'etichetta di stato e la
  // forma esatta del collegamento, gia' tradotte.
  const sample = /<a class="vocabulary-category"[\s\S]*?<\/a>/.exec(html);
  if (!sample) throw new Error(`${lang}: nessuna scheda disponibile da cui copiare`);
  const status = /<span class="status">([^<]*)<\/span>/.exec(sample[0])[1];
  const assetPrefix = /src="([^"]*)\/vocabolario\//.exec(sample[0])[1];
  const href = lang === 'it' ? `${page.slug}.html` : `/${seaPath(lang)}`;

  const card = `<a class="vocabulary-category" href="${href}"><img src="${assetPrefix}/vocabolario/mare-hero.webp" width="1280" height="853" alt="${escapeAttribute(page.heroAlt)}" loading="lazy" decoding="async">
              <div class="vocabulary-category-body">
                <h2>${escapeHtml(page.name)}</h2>
                <p>${escapeHtml(page.cardText)}</p>
                <span class="status">${escapeHtml(status)}</span>
              </div></a>`;

  html = html.slice(0, placeholder.index) + card + html.slice(placeholder.index + placeholder[0].length);
  if (!dryRun) writeFileSync(file, html);
  console.log(`indice ${lang}: segnaposto sostituito`);
}

// --- sitemap ---------------------------------------------------------------
{
  const file = path.join(root, 'public/sitemap.xml');
  let xml = readFileSync(file, 'utf8');
  const esc = (t) => [...t].map((c) => (c.charCodeAt(0) < 128 ? c : `&#x${c.codePointAt(0).toString(16)};`)).join('');
  let added = 0;
  for (const lang of LANGS) {
    const loc = esc(seaUrl(lang));
    if (xml.includes(loc)) continue;
    const ref = esc(kitchenUrl(lang));
    const at = xml.indexOf(ref);
    if (at === -1) throw new Error(`sitemap: manca la riga della cucina per ${lang}`);
    const lineEnd = xml.indexOf('\n', at) + 1;
    xml =
      xml.slice(0, lineEnd) + `  <url><loc>${loc}</loc><changefreq>monthly</changefreq></url>\n` + xml.slice(lineEnd);
    added += 1;
  }
  if (!dryRun && added) writeFileSync(file, xml);
  console.log(`\nsitemap: ${added} righe aggiunte`);
}

console.log('\nDa aggiungere a scripts/audit-vocabulary.mjs, dentro `routes`:\n');
console.log('  mare: {');
console.log(`    count: ${seaVocabulary.length},`);
for (const l of LANGS) console.log(`    ${l}: '${seaPath(l)}',`);
console.log('  },');
console.log("\ne 'mare' nell'elenco dei link dell'indice italiano in fondo allo stesso file.");
if (dryRun) console.log('\n(dry run: nessun file scritto)');

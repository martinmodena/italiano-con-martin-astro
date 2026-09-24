#!/usr/bin/env node
/**
 * Crea le due lezioni di vocabolario sugli animali in tutte e 9 le lingue:
 *
 *   - «Gli animali»                       50 parole, stessa struttura delle altre lezioni;
 *   - «Le caratteristiche degli animali»  50 aggettivi + due esercizi con trascinamento
 *                                         (associare gli animali agli aggettivi, anche con
 *                                         la negazione).
 *
 * Metodo: come per il mare (`create-sea-vocabulary.mjs`), ogni pagina parte dalla lezione
 * della cucina gia' tradotta in quella lingua, cosi' tutte le etichette di servizio
 * («Riconosci la parola», «Frasi da tradurre», i bottoni, la barra di avanzamento)
 * restano quelle gia' tradotte. Si sostituiscono titolo, testata, parole e contatori.
 * Nella lezione sulle caratteristiche gli esercizi «Riconosci la parola» (un aggettivo non si
 * riconosce da una foto) sono sostituiti dalle due sezioni con trascinamento.
 *
 * Dati:
 *   scripts/data/animals-vocabulary.mjs   le 50 parole e le frasi da tradurre
 *   scripts/data/traits-vocabulary.mjs    i 50 aggettivi, gli animali associabili, le frasi
 *   scripts/data/animals-pages.mjs        titoli, descrizioni e testi degli esercizi per lingua
 *
 * Il comportamento degli esercizi sta in public/assets/match.js e match.css.
 *
 * Uso:
 *   node scripts/create-animals-vocabulary.mjs --dry-run
 *   node scripts/create-animals-vocabulary.mjs
 *
 * Idempotente: rilanciarlo riscrive le pagine e lascia stare indici e sitemap se le voci ci sono gia'.
 */

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as cheerio from 'cheerio';
import { animalVocabulary, animalTranslationExercises } from './data/animals-vocabulary.mjs';
import { traitVocabulary, traitTranslationExercises } from './data/traits-vocabulary.mjs';
import { animalPages, animalExampleWord, traitPages, traitUi } from './data/animals-pages.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dryRun = process.argv.includes('--dry-run');
const LANGS = ['it', 'en', 'es', 'fr', 'cs', 'pl', 'tr', 'de', 'ja'];
const MATCH_ASSET_VERSION = '20260924';

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

// --- le due lezioni ----------------------------------------------------------
const lessons = {
  animali: {
    id: 'animali',
    pages: animalPages,
    hero: 'animali-hero.webp',
    words: animalVocabulary,
    translations: animalTranslationExercises,
    exampleWord: animalExampleWord,
  },
  caratteristiche: {
    id: 'caratteristiche',
    pages: traitPages,
    hero: 'caratteristiche-animali-hero.webp',
    words: traitVocabulary,
    translations: traitTranslationExercises,
    exampleWord: null,
  },
};

const pagePath = (lesson, lang) => `${lesson.pages[lang].dir}/${lesson.pages[lang].slug}.html`;
const pageUrl = (lesson, lang) => `https://italianoconmartin.com/${pagePath(lesson, lang)}`;
const kitchenUrl = (lang) => `https://italianoconmartin.com/${kitchen[lang]}`;

const escapeAttribute = (v) =>
  v.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const escapeHtml = (v) => v.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const escapeRegex = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const jsonEscape = (s) => JSON.stringify(s).slice(1, -1);
const fill = (text, vars) => text.replace(/\{(\w+)\}/g, (_, k) => String(vars[k]));

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

// --- schede, esercizi di riconoscimento, traduzioni --------------------------

function buildCard(word, template, lang, isTrait) {
  const examples = word.examples.map((s) => `<li><span lang="it">${escapeHtml(s)}</span></li>`).join('');
  const alt = isTrait ? (lang === 'it' ? `Illustrazione: ${word.bare}` : word.gloss[lang]) : word.alt[lang];
  const spoken = isTrait ? word.word.replace(' / ', ', ') : word.word;
  const gloss = isTrait ? `\n                <p class="word-translation">${escapeHtml(word.gloss[lang])}</p>` : '';
  return `<article class="word-card">
              <img src="${template.imagePrefix}/${word.image}.webp" alt="${escapeAttribute(alt)}" loading="lazy" decoding="async">
              <div class="word-card-body">
                <h2>${escapeHtml(word.word)}</h2>${gloss}
                <div class="word-examples">
                  <strong>${escapeHtml(template.examplesLabel)}</strong>
                  <ol>
                    ${examples}
                  </ol>
                </div>
                <button class="speak-word" data-word="${escapeAttribute(spoken)}" type="button">${escapeHtml(template.speakLabel)}</button>
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

// --- gli esercizi con trascinamento -------------------------------------------

/** Generatore pseudo-casuale con seme: le pagine si rigenerano sempre uguali. */
function mulberry32(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffle(list, random) {
  const out = [...list];
  for (let i = out.length - 1; i > 0; i -= 1) {
    const j = Math.floor(random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

const BANK_SIZE = 14;
const SET_SIZE = 10;

/**
 * Costruisce le serie di un esercizio. Per ogni serie:
 *  - la barra di animali contiene almeno una risposta giusta per ogni aggettivo;
 *  - il resto della barra e' fatto di animali che sono la risposta giusta per altri aggettivi
 *    della serie (o, nella forma negativa, animali che hanno la caratteristica: sono le trappole).
 * Positivo: e' giusto ogni animale di `matches`. Negativo: e' giusto ogni animale che NON e' in `matches`.
 */
function buildSets(traits, mode, seed) {
  const random = mulberry32(seed);
  const used = new Set();
  const sets = [];
  for (let i = 0; i < traits.length; i += SET_SIZE) {
    const setTraits = traits.slice(i, i + SET_SIZE);
    const bank = [];
    const goodFor = (t) => (mode === 'positive' ? t.matches : t.never);
    for (const t of setTraits) {
      const options = goodFor(t);
      if (bank.some((a) => options.includes(a))) continue;
      const pick = options.find((a) => !used.has(a) && !bank.includes(a)) ?? options.find((a) => !bank.includes(a));
      if (pick) bank.push(pick);
    }
    // Nella forma negativa ogni aggettivo deve avere almeno due trappole in barra (animali che la
    // caratteristica ce l'hanno), altrimenti tutto quello che si trascina e' giusto.
    if (mode === 'negative') {
      for (const t of setTraits) {
        const traps = () => bank.filter((a) => t.matches.includes(a)).length;
        for (const a of t.matches) {
          if (traps() >= 2) break;
          if (!bank.includes(a)) bank.push(a);
        }
      }
    }
    // Riempimento fino a BANK_SIZE con animali giusti per altri aggettivi della serie.
    const fillers = shuffle(
      [...new Set(setTraits.flatMap((t) => t.matches))].filter((a) => !bank.includes(a)),
      random
    );
    for (const a of fillers) {
      if (bank.length >= BANK_SIZE) break;
      bank.push(a);
    }
    bank.forEach((a) => used.add(a));
    const rows = setTraits.map((t) => {
      const ok = bank.filter((a) => (mode === 'positive' ? t.matches.includes(a) : !t.matches.includes(a)));
      if (bank.length - ok.length < 1) throw new Error(`${mode}: nessuna risposta sbagliata in barra per «${t.slug}»`);
      if (!ok.length) throw new Error(`${mode}: nessuna risposta giusta in barra per «${t.slug}»`);
      return { trait: t, ok, hint: (mode === 'positive' ? t.matches : t.never).find((a) => ok.includes(a)) ?? ok[0] };
    });
    sets.push({ rows, bank: shuffle(bank, random) });
  }
  return sets;
}

const animalBySlug = new Map(animalVocabulary.map((a) => [a.slug, a]));

function validateTraitData() {
  for (const t of traitVocabulary) {
    for (const slug of [...t.matches, ...t.never]) {
      if (!animalBySlug.has(slug)) throw new Error(`aggettivo «${t.slug}»: animale sconosciuto «${slug}»`);
    }
  }
}

function buildMatchSections(lang, template, ui) {
  const itAttr = lang === 'it' ? '' : ' lang="it"';
  const animalsPage = animalPages[lang];
  const animalsHref = lang === 'it' ? `${animalsPage.slug}.html` : `/${pagePath(lessons.animali, lang)}`;
  const linkHtml = `<a href="${animalsHref}">${escapeHtml(animalsPage.name)}</a>`;
  const lessonLine = fill(ui.lessonLink, { link: linkHtml });

  const chip = (slug) => {
    const a = animalBySlug.get(slug);
    return `<li><button class="match-chip" type="button" data-animal="${slug}" aria-pressed="false"><img src="${template.imagePrefix}/${a.image}.webp" alt="" width="56" height="56" loading="lazy" decoding="async" draggable="false"><span${itAttr}>${escapeHtml(a.word)}</span></button></li>`;
  };

  const section = (mode, sets, n0) => {
    const total = sets.reduce((sum, s) => sum + s.rows.length, 0);
    const text = ui[mode === 'positive' ? 'positive' : 'negative'];
    const messages = {
      'data-msg-progress': ui.ui.progressText,
      'data-msg-correct': ui.ui.correct,
      'data-msg-wrong': mode === 'positive' ? ui.ui.wrong : ui.ui.wrongNegative,
      'data-msg-complete': ui.ui.complete,
    };
    const attrs = Object.entries(messages)
      .map(([k, v]) => `${k}="${escapeAttribute(v)}"`)
      .join(' ');
    let counter = 0;
    const setsHtml = sets
      .map((set, si) => {
        const rows = set.rows
          .map(({ trait, ok, hint }) => {
            counter += 1;
            const label =
              mode === 'positive'
                ? `<strong class="match-trait"${itAttr}>${escapeHtml(trait.word)}</strong>`
                : `<strong class="match-trait"${itAttr}><span class="match-not">non è</span> ${escapeHtml(trait.word)}</strong>`;
            const dropLabel = fill(ui.ui.dropLabel, { adj: trait.word });
            return `<li class="match-row" data-key="${trait.slug}" data-ok="${escapeAttribute(JSON.stringify(ok))}" data-hint="${hint}">
                <div class="match-prompt"><span class="match-num" aria-hidden="true">${counter}</span>${label}</div>
                <div class="match-drop" tabindex="0" role="group" aria-label="${escapeAttribute(dropLabel)}" data-empty="${escapeAttribute(ui.ui.empty)}"></div>
                <button class="match-hint" type="button">${escapeHtml(ui.ui.hint)}</button>
                <p class="match-feedback" aria-live="polite"></p>
              </li>`;
          })
          .join('\n              ');
        const chips = set.bank.map(chip).join('\n                ');
        return `<div class="match-set" data-set="${si + 1}">
            <div class="match-set-title" role="heading" aria-level="3">${escapeHtml(fill(ui.ui.set, { n: si + 1, total: sets.length }))}</div>
            <ol class="match-rows">
              ${rows}
            </ol>
            <div class="match-tray" role="group" aria-label="${escapeAttribute(ui.ui.tray)}">
              <p class="match-tray-label">${escapeHtml(ui.ui.tray)}</p>
              <ul class="match-bank">
                ${chips}
              </ul>
            </div>
          </div>`;
      })
      .join('\n          ');
    void n0;
    return `<section class="section match-section match-${mode}" data-match="${mode}" data-total="${total}" ${attrs} aria-labelledby="match-title-${mode}">
        <div class="container">
          <div class="practice-heading">
            <div>
              <p class="eyebrow">${escapeHtml(text.eyebrow)}</p>
              <h2 id="match-title-${mode}">${escapeHtml(text.title)}</h2>
            </div>
            <p>${text.intro}</p>
          </div>
          ${mode === 'positive' ? `<p class="match-lesson-link">${lessonLine}</p>` : ''}
          <div class="word-progress match-progress-box" aria-live="polite">
            <div><strong>${escapeHtml(ui.ui.progress)}</strong><span class="match-progress-text">${escapeHtml(fill(ui.ui.progressText, { n: 0, total }))}</span></div>
            <progress class="match-progress" max="${total}" value="0">0%</progress>
            <div class="match-progress-actions"><button class="match-reset" type="button">${escapeHtml(ui.ui.reset)}</button><span class="match-complete" aria-live="polite"></span></div>
          </div>
          ${setsHtml}
        </div>
      </section>`;
  };

  const positive = buildSets(traitVocabulary, 'positive', 2409);
  const negativeTraits = traitVocabulary.filter((t) => t.never.length > 0);
  const negative = buildSets(negativeTraits, 'negative', 2410);
  return section('positive', positive, 0) + '\n\n      ' + section('negative', negative, positive.length);
}

// --- pagine ---------------------------------------------------------------------

function buildPage(lesson, lang) {
  const isTrait = lesson.id === 'caratteristiche';
  const src = path.join(root, 'src/html', kitchen[lang]);
  const html = readFileSync(src, 'utf8');
  const template = readTemplate(html);
  const page = lesson.pages[lang];
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
    '\n            ' +
      lesson.words.map((w) => buildCard(w, template, lang, isTrait)).join('\n            ') +
      '\n          '
  );
  if (!isTrait) {
    out = replaceContainer(
      out,
      'word-tests',
      '\n            ' + lesson.words.map((w, i) => buildTest(w, template, i)).join('\n            ') + '\n          '
    );
  }
  out = replaceContainer(
    out,
    'translation-exercises',
    '\n            ' +
      lesson.translations.map((e, i) => buildTranslation(e, template, lang, i)).join('\n            ') +
      '\n          '
  );

  // 2. la lezione sulle caratteristiche: niente «Riconosci la parola», ma gli esercizi da trascinare;
  //    e la nota sull'articolo lascia il posto a quella sulle due forme dell'aggettivo.
  if (isTrait) {
    const start = out.indexOf('<section class="section word-practice-section"');
    const end = out.indexOf('</section>', start);
    if (start === -1 || end === -1) throw new Error(`${lang}: sezione «Riconosci la parola» non trovata`);
    out =
      out.slice(0, start) + buildMatchSections(lang, template, traitUi[lang]) + out.slice(end + '</section>'.length);

    const note = traitUi[lang].note;
    out = out.replace(
      /(<div class="vocabulary-note">)[\s\S]*?(<\/div>)/,
      `$1\n            <strong>${escapeHtml(note.title)}</strong>\n            <p>${note.body}</p>\n          $2`
    );
  }

  // 3. contatori (la lezione sui caratteri non ha la barra del riconoscimento)
  out = updateCounters(out, oldCount, lesson.words.length, oldTrad, lesson.translations.length);

  // 4. titolo, briciole di pane, immagine di testata
  out = out.replace(
    new RegExp(`(<p class="breadcrumbs">.*?/\\s*)${escapeRegex(kitchenName)}(\\s*</p>)`, 's'),
    `$1${page.name}$2`
  );
  out = out.replace(/(<h1>)[^<]*(<\/h1>)/, `$1${escapeHtml(page.name)}$2`);
  out = out.replace(/cucina-hero\.webp/g, lesson.hero);
  if (kitchenHeroAlt) out = out.replace(escapeAttribute(kitchenHeroAlt), escapeAttribute(page.heroAlt));

  // 5. la parola d'esempio citata nel testo dell'esercizio e nella nota finale
  //    (nella lezione sulle caratteristiche la nota e' gia' stata sostituita).
  if (lesson.exampleWord) {
    const swapWord = (h, from, to) =>
      h.replace(new RegExp(`(<em(?:\\s+lang="it")?>)${escapeRegex(from)}(</em>)`, 'g'), `$1${to}$2`);
    out = swapWord(out, 'il frigorifero', lesson.exampleWord.withArticle);
    out = swapWord(out, 'frigorifero', lesson.exampleWord.bare);
    out = swapWord(out, 'la forchetta', lesson.exampleWord.withArticle);
    out = swapWord(out, 'forchetta', lesson.exampleWord.bare);
  }

  return out;
}

function buildAstro(lesson, lang) {
  const isTrait = lesson.id === 'caratteristiche';
  const src = path.join(root, 'src/pages', kitchen[lang] + '.astro');
  let out = readFileSync(src, 'utf8');
  const page = lesson.pages[lang];

  // Gli URL della cucina (hreflang e selettore lingua) diventano quelli della nuova lezione.
  for (const l of LANGS) {
    out = out.replaceAll(kitchenUrl(l), pageUrl(lesson, l));
    out = out.replaceAll(`/${kitchen[l]}`, `/${pagePath(lesson, l)}`);
  }
  out = out.replaceAll(`~/html/${kitchen[lang]}`, `~/html/${pagePath(lesson, lang)}`);
  out = out.replaceAll(`"${kitchen[lang]}"`, `"${pagePath(lesson, lang)}"`);
  out = out.replaceAll('cucina-hero.webp', lesson.hero);

  // Titolo e descrizione: sostituiti per valore, non per posizione.
  const oldTitle = /"title":\s*"([^"]+)"/.exec(out)?.[1];
  const oldDesc = /"description":\s*"([^"]+)"/.exec(out)?.[1];
  if (oldTitle) out = out.replaceAll(jsonEscape(oldTitle), jsonEscape(page.title));
  if (oldDesc) out = out.replaceAll(jsonEscape(oldDesc), jsonEscape(page.description));

  // Open Graph e Twitter hanno titolo e descrizione brevi: vanno sostituiti a parte.
  const setOg = (key, value) =>
    out.replace(new RegExp(`("${key}",\\s*\\n\\s*)"[^"]*"`), (_, head) => `${head}"${jsonEscape(value)}"`);
  for (const key of ['og:title', 'twitter:title']) out = setOg(key, page.title);
  for (const key of ['og:description', 'twitter:description']) out = setOg(key, page.description);

  // Nel JSON-LD resta il nome localizzato della lezione della cucina: si riscrive il campo.
  out = out.replace(/(\\"name\\":\\")[^"]*?(\\")/, `$1${jsonEscape(page.name)}$2`);

  // La lezione sulle caratteristiche carica anche gli stili e lo script degli esercizi da trascinare.
  if (isTrait) {
    const css = /("<link rel=\\"stylesheet\\" href=\\"([^"\\]*)assets\/vocabulary\.css\?v=[^"\\]*\\">")/.exec(out);
    if (!css) throw new Error(`${lang}: riga del foglio di stile del vocabolario non trovata`);
    const prefix = css[2];
    out = out.replace(
      css[1],
      `${css[1]},\n    "<link rel=\\"stylesheet\\" href=\\"${prefix}assets/match.css?v=${MATCH_ASSET_VERSION}\\">"`
    );
    const js = /("<script src=\\"[^"\\]*assets\/vocabulary\.js\?v=[^"\\]*\\"><\/script>")/.exec(out);
    if (!js) throw new Error(`${lang}: script del vocabolario non trovato`);
    out = out.replace(
      js[1],
      `${js[1]},\n    "<script src=\\"${prefix}assets/match.js?v=${MATCH_ASSET_VERSION}\\"></script>"`
    );
  }

  return out;
}

// --------------------------------------------------------------------------------
validateTraitData();

for (const lesson of Object.values(lessons)) {
  console.log(
    `Lezione "${lesson.pages.it.name}": ${lesson.words.length} parole, ${lesson.translations.length} frasi da tradurre.\n`
  );
  for (const lang of LANGS) {
    const htmlFile = path.join(root, 'src/html', pagePath(lesson, lang));
    const astroFile = path.join(root, 'src/pages', pagePath(lesson, lang) + '.astro');

    const html = buildPage(lesson, lang);
    const astro = buildAstro(lesson, lang);

    if (!dryRun) {
      mkdirSync(path.dirname(htmlFile), { recursive: true });
      mkdirSync(path.dirname(astroFile), { recursive: true });
      writeFileSync(htmlFile, html);
      writeFileSync(astroFile, astro);
    }
    const $ = cheerio.load(html, null, false);
    console.log(
      `${lang}: ${$('.word-card').length} schede, ${$('.word-test').length} esercizi, ${$('.match-row').length} righe da trascinare, ${$('.translation-exercise').length} traduzioni -> ${pagePath(lesson, lang)}`
    );
  }
  console.log('');
}

// --- indici del vocabolario: due schede nuove prima dei segnaposto «In preparazione» ---
for (const lang of LANGS) {
  const file = path.join(root, indexFile[lang]);
  let html = readFileSync(file, 'utf8');
  const sample = /<a class="vocabulary-category"[\s\S]*?<\/a>/.exec(html);
  if (!sample) throw new Error(`${lang}: nessuna scheda disponibile da cui copiare`);
  const status = /<span class="status">([^<]*)<\/span>/.exec(sample[0])[1];
  const assetPrefix = /src="([^"]*)\/vocabolario\//.exec(sample[0])[1];

  let added = 0;
  const cards = [];
  for (const lesson of Object.values(lessons)) {
    const page = lesson.pages[lang];
    if (html.includes(`${page.slug}.html"`)) continue;
    const href = lang === 'it' ? `${page.slug}.html` : `/${pagePath(lesson, lang)}`;
    cards.push(`<a class="vocabulary-category" href="${href}"><img src="${assetPrefix}/vocabolario/${lesson.hero}" width="1280" height="853" alt="${escapeAttribute(page.heroAlt)}" loading="lazy" decoding="async">
              <div class="vocabulary-category-body">
                <h2>${escapeHtml(page.name)}</h2>
                <p>${escapeHtml(page.cardText)}</p>
                <span class="status">${escapeHtml(status)}</span>
              </div></a>`);
    added += 1;
  }
  if (!added) {
    console.log(`indice ${lang}: gia' aggiornato`);
    continue;
  }
  // Prima del primo segnaposto; se non ce ne sono piu', in fondo alla griglia.
  const coming = html.indexOf('<article class="vocabulary-category coming">');
  const insertAt = coming !== -1 ? coming : html.lastIndexOf('</div>', html.indexOf('vocabulary-note'));
  html = html.slice(0, insertAt) + cards.join('\n            ') + '\n            ' + html.slice(insertAt);
  if (!dryRun) writeFileSync(file, html);
  console.log(`indice ${lang}: ${added} schede aggiunte`);
}

// --- sitemap -------------------------------------------------------------------------
{
  const file = path.join(root, 'public/sitemap.xml');
  let xml = readFileSync(file, 'utf8');
  const esc = (t) => [...t].map((c) => (c.charCodeAt(0) < 128 ? c : `&#x${c.codePointAt(0).toString(16)};`)).join('');
  let added = 0;
  for (const lesson of Object.values(lessons)) {
    for (const lang of LANGS) {
      const loc = esc(pageUrl(lesson, lang));
      if (xml.includes(loc)) continue;
      const ref = esc(kitchenUrl(lang));
      const at = xml.indexOf(ref);
      if (at === -1) throw new Error(`sitemap: manca la riga della cucina per ${lang}`);
      const lineEnd = xml.indexOf('\n', at) + 1;
      xml =
        xml.slice(0, lineEnd) + `  <url><loc>${loc}</loc><changefreq>monthly</changefreq></url>\n` + xml.slice(lineEnd);
      added += 1;
    }
  }
  if (!dryRun && added) writeFileSync(file, xml);
  console.log(`\nsitemap: ${added} righe aggiunte`);
}

console.log('\nDa aggiungere a scripts/audit-vocabulary.mjs, dentro `routes`:\n');
for (const lesson of Object.values(lessons)) {
  console.log(`  ${lesson.id}: {`);
  console.log(`    count: ${lesson.words.length},`);
  for (const l of LANGS) console.log(`    ${l}: '${pagePath(lesson, l)}',`);
  console.log('  },');
}
if (dryRun) console.log('\n(dry run: nessun file scritto)');

#!/usr/bin/env node
/**
 * Crea le lezioni di vocabolario sugli animali e sul corpo umano in tutte e 9 le lingue:
 *
 *   - «Gli animali»                              100 parole, stessa struttura delle altre lezioni;
 *   - «Le caratteristiche fisiche degli animali»  50 aggettivi (corpo, forza, aspetto, come si sta);
 *   - «La personalità degli animali»              62 aggettivi (carattere e stati d'animo);
 *   - «I verbi degli animali»                     119 verbi di tutti i giorni (nascere, lavorare, aiutare...);
 *   - «Il corpo umano»                            63 parti del corpo, foto realistiche (come «Gli animali»);
 *   - «I verbi del corpo»                         94 verbi (pettinarsi i capelli, toccare, arrossire...): gli
 *                                                 esercizi da trascinare usano le parti del corpo, non gli animali.
 *
 * Dal 2026-09-25 le tre lezioni insegnano parole utili anche per le persone: gli animali sono il
 * mezzo simpatico per ricordarle, non il fine (richiesta di Martin).
 *
 * Le lezioni con gli aggettivi e i verbi hanno, al posto di «Riconosci la parola» (un aggettivo o un
 * verbo non si riconosce da una foto), due esercizi con trascinamento: «quale animale e' cosi' / lo fa?»
 * e «quale animale non e' cosi' / non puo' farlo?».
 *
 * Metodo: come per il mare (`create-sea-vocabulary.mjs`), ogni pagina parte dalla lezione
 * della cucina gia' tradotta in quella lingua, cosi' tutte le etichette di servizio
 * («Riconosci la parola», «Frasi da tradurre», i bottoni, la barra di avanzamento)
 * restano quelle gia' tradotte. Si sostituiscono titolo, testata, parole e contatori.
 *
 * Dati:
 *   scripts/data/animals-vocabulary.mjs   le 100 parole e le frasi da tradurre
 *   scripts/data/traits-vocabulary.mjs    gli aggettivi (fisici e di carattere), gli animali associabili
 *   scripts/data/verbs-vocabulary.mjs     i verbi, gli animali che li fanno
 *   scripts/data/animals-pages.mjs        «Gli animali» e i testi degli esercizi sugli aggettivi
 *   scripts/data/animals-pages-more.mjs   le pagine di fisiche, personalita' e verbi
 *   scripts/data/body-vocabulary.mjs      le parti del corpo (2026-09-25)
 *   scripts/data/body-verbs.mjs           i verbi del corpo, con le parti del corpo che servono
 *   scripts/data/body-pages.mjs           le pagine delle due lezioni sul corpo
 *
 * Il comportamento degli esercizi sta in public/assets/match.js e match.css.
 *
 * La prima versione (2026-09-24) aveva una sola lezione «Le caratteristiche degli animali» con 50
 * aggettivi: e' stata divisa in due. Lo script toglie le pagine vecchie da src/, lascia dei
 * redirect `noindex` in public/ (gli URL sono gia' stati pubblicati), sostituisce la scheda
 * nell'indice del vocabolario e le righe nella sitemap.
 *
 * Uso:
 *   node scripts/create-animals-vocabulary.mjs --dry-run
 *   node scripts/create-animals-vocabulary.mjs
 *   node scripts/create-animals-vocabulary.mjs --review    (elenca le risposte «giuste» dedotte negli esercizi con la negazione)
 *
 * Idempotente: rilanciarlo riscrive le pagine e lascia stare indici e sitemap se le voci ci sono gia'.
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync, unlinkSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as cheerio from 'cheerio';
import { animalVocabulary, animalTranslationExercises } from './data/animals-vocabulary.mjs';
import {
  physicalTraits,
  personalityTraits,
  physicalTranslationExercises,
  personalityTranslationExercises,
} from './data/traits-vocabulary.mjs';
import { verbVocabulary, verbTranslationExercises } from './data/verbs-vocabulary.mjs';
import { animalPages, animalExampleWord, oldTraitPages, traitUi } from './data/animals-pages.mjs';
import {
  physicalPages,
  personalityPages,
  verbPages,
  physicalNote,
  personalityNote,
  verbUi,
  verbUiOverrides,
} from './data/animals-pages-more.mjs';

import { bodyVocabulary, bodyTranslationExercises } from './data/body-vocabulary.mjs';
import { bodyVerbs, bodyVerbTranslationExercises, NEUTRAL as bodyNeutral } from './data/body-verbs.mjs';
import { bodyPages, bodyExampleWord, bodyVerbPages, bodyVerbUi } from './data/body-pages.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dryRun = process.argv.includes('--dry-run');
const review = process.argv.includes('--review');
const LANGS = ['it', 'en', 'es', 'fr', 'cs', 'pl', 'tr', 'de', 'ja'];
const MATCH_ASSET_VERSION = '20260925';

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

// --- le lezioni -------------------------------------------------------------------
//   kind 'words'  : schede + «Riconosci la parola» + frasi da tradurre
//   kind 'match'  : schede + due esercizi con trascinamento + frasi da tradurre
//                   (la barra da cui si trascina e' fatta di animali, salvo `bank`/`bankPage`)
const lessons = {
  animali: {
    id: 'animali',
    kind: 'words',
    pages: animalPages,
    hero: 'animali-hero.webp',
    words: animalVocabulary,
    translations: animalTranslationExercises,
    exampleWord: animalExampleWord,
  },
  fisiche: {
    id: 'fisiche',
    kind: 'match',
    pages: physicalPages,
    hero: 'caratteristiche-fisiche-hero.webp',
    words: physicalTraits,
    translations: physicalTranslationExercises,
    exampleWord: null,
    notLabel: 'non è',
    seeds: [2411, 2412],
    uiFor: (lang) => ({ ...traitUi[lang], note: physicalNote[lang] }),
  },
  personalita: {
    id: 'personalita',
    kind: 'match',
    pages: personalityPages,
    // La testata e' quella della prima versione della lezione (i personaggi sono gli stessi).
    hero: 'caratteristiche-animali-hero.webp',
    words: personalityTraits,
    translations: personalityTranslationExercises,
    exampleWord: null,
    notLabel: 'non è',
    seeds: [2413, 2414],
    uiFor: (lang) => ({ ...traitUi[lang], note: personalityNote[lang] }),
  },
  verbi: {
    id: 'verbi',
    kind: 'match',
    pages: verbPages,
    hero: 'verbi-animali-hero.webp',
    words: verbVocabulary,
    translations: verbTranslationExercises,
    exampleWord: null,
    notLabel: 'non può',
    seeds: [2415, 2416],
    uiFor: (lang) => ({
      ...traitUi[lang],
      ...verbUi[lang],
      ui: { ...traitUi[lang].ui, ...verbUiOverrides[lang] },
    }),
  },
  corpo: {
    id: 'corpo',
    kind: 'words',
    pages: bodyPages,
    hero: 'corpo-umano-hero.webp',
    words: bodyVocabulary,
    translations: bodyTranslationExercises,
    exampleWord: bodyExampleWord,
  },
  verbicorpo: {
    id: 'verbicorpo',
    kind: 'match',
    pages: bodyVerbPages,
    hero: 'verbi-corpo-hero.webp',
    words: bodyVerbs,
    translations: bodyVerbTranslationExercises,
    exampleWord: null,
    // Le parole da trascinare sono le parti del corpo della lezione «Il corpo umano».
    bank: bodyVocabulary,
    bankPage: bodyPages,
    bankLessonId: 'corpo',
    // Le parti che servono un po' a tutto non entrano mai fra le risposte della forma negativa.
    neutral: bodyNeutral,
    yesLabel: 'serve per',
    notLabel: 'non serve per',
    seeds: [2417, 2418],
    uiFor: (lang) => ({
      ...traitUi[lang],
      ...bodyVerbUi[lang],
      ui: { ...traitUi[lang].ui, ...bodyVerbUi[lang].ui },
    }),
  },
};

/** La barra da cui si trascina: animali (default) o, per i verbi del corpo, parti del corpo. */
const bankOf = (lesson) => lesson.bank ?? animalVocabulary;
const bankPageOf = (lesson) => lesson.bankPage ?? animalPages;
const bankLessonOf = (lesson) => lessons[lesson.bankLessonId ?? 'animali'];

const pagePath = (lesson, lang) => `${lesson.pages[lang].dir}/${lesson.pages[lang].slug}.html`;
const pageUrl = (lesson, lang) => `https://italianoconmartin.com/${pagePath(lesson, lang)}`;
const kitchenUrl = (lang) => `https://italianoconmartin.com/${kitchen[lang]}`;
const oldPath = (lang) => `${oldTraitPages[lang].dir}/${oldTraitPages[lang].slug}.html`;
const oldUrl = (lang) => `https://italianoconmartin.com/${oldPath(lang)}`;

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

function buildCard(word, template, lang, isMatch) {
  const examples = word.examples.map((s) => `<li><span lang="it">${escapeHtml(s)}</span></li>`).join('');
  const alt = isMatch ? (lang === 'it' ? `Illustrazione: ${word.bare}` : word.gloss[lang]) : word.alt[lang];
  const spoken = isMatch ? word.word.replace(' / ', ', ') : word.word;
  const gloss = isMatch ? `\n                <p class="word-translation">${escapeHtml(word.gloss[lang])}</p>` : '';
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

/** Divide in serie di al massimo `max` righe, il piu' possibile uguali fra loro (32 -> 4 da 8). */
function chunkEvenly(list, max = SET_SIZE) {
  const count = Math.max(1, Math.ceil(list.length / max));
  const size = Math.ceil(list.length / count);
  const out = [];
  for (let i = 0; i < list.length; i += size) out.push(list.slice(i, i + size));
  return out;
}

const bankBySlug = (lesson) => new Map(bankOf(lesson).map((a) => [a.slug, a]));

/**
 * Costruisce le serie di un esercizio. Per ogni serie:
 *  - la barra di animali contiene almeno una risposta giusta per ogni riga;
 *  - il resto della barra e' fatto di animali che sono la risposta giusta per altre righe
 *    della serie (o, nella forma negativa, animali che hanno la caratteristica: sono le trappole);
 *  - in ogni riga c'e' almeno un animale sbagliato, altrimenti tutto sarebbe giusto.
 * Positivo: e' giusto ogni animale di `matches`. Negativo: e' giusto ogni animale che NON e' in `matches`.
 */
function buildSets(items, mode, seed, bankList = animalVocabulary, neutral = []) {
  const random = mulberry32(seed);
  // Nella forma negativa le parti «neutre» (corpo, pelle, cuore...) non entrano mai in barra: servono
  // un po' a tutto, e come risposta giusta o come trappola sarebbero discutibili.
  const banned = mode === 'negative' ? new Set(neutral) : new Set();
  const used = new Set();
  const sets = [];
  const isOk = (t, a) => (mode === 'positive' ? t.matches.includes(a) : !t.matches.includes(a));
  for (const setItems of chunkEvenly(items)) {
    const bank = [];
    const goodFor = (t) => (mode === 'positive' ? t.matches : t.never).filter((a) => !banned.has(a));
    for (const t of setItems) {
      const options = goodFor(t);
      if (bank.some((a) => options.includes(a))) continue;
      const pick = options.find((a) => !used.has(a) && !bank.includes(a)) ?? options.find((a) => !bank.includes(a));
      if (pick) bank.push(pick);
    }
    // Nella forma negativa ogni riga deve avere almeno due trappole in barra (animali che la
    // caratteristica ce l'hanno), altrimenti tutto quello che si trascina e' giusto.
    if (mode === 'negative') {
      for (const t of setItems) {
        const traps = () => bank.filter((a) => t.matches.includes(a)).length;
        for (const a of t.matches) {
          if (traps() >= 2) break;
          if (banned.has(a)) continue;
          if (!bank.includes(a)) bank.push(a);
        }
      }
    }
    // Riempimento fino a BANK_SIZE con animali giusti per altre righe della serie: nella forma
    // positiva i primi di `matches`, in quella negativa quelli di `never` (chiaramente «no»), cosi'
    // le righe con centinaia di animali associati (selvaggio) non riempiono la barra a caso.
    const fillerPool = (t) => (mode === 'positive' ? t.matches.slice(0, 6) : goodFor(t));
    const fillers = shuffle(
      [...new Set(setItems.flatMap(fillerPool))].filter((a) => !bank.includes(a)),
      random
    );
    for (const a of fillers) {
      if (bank.length >= BANK_SIZE) break;
      bank.push(a);
    }
    // Nella forma positiva, se una riga ha per giusti tutti gli animali della barra, si aggiunge
    // un animale che non c'entra.
    if (mode === 'positive') {
      for (const t of setItems) {
        if (bank.every((a) => isOk(t, a))) {
          const extra = shuffle(
            bankList.map((a) => a.slug).filter((a) => !bank.includes(a) && !isOk(t, a)),
            random
          )[0];
          if (extra) bank.push(extra);
        }
      }
    }
    bank.forEach((a) => used.add(a));
    const rows = setItems.map((t) => {
      const ok = bank.filter((a) => isOk(t, a));
      if (bank.length - ok.length < 1) throw new Error(`${mode}: nessuna risposta sbagliata in barra per «${t.slug}»`);
      if (!ok.length) throw new Error(`${mode}: nessuna risposta giusta in barra per «${t.slug}»`);
      return { trait: t, ok, hint: goodFor(t).find((a) => ok.includes(a)) ?? ok[0] };
    });
    sets.push({ rows, bank: shuffle(bank, random) });
  }
  return sets;
}

function validateLessonData() {
  for (const lesson of Object.values(lessons)) {
    if (lesson.kind !== 'match') continue;
    const known = bankBySlug(lesson);
    for (const t of lesson.words) {
      for (const slug of [...t.matches, ...t.never]) {
        if (!known.has(slug)) throw new Error(`«${t.slug}»: animale sconosciuto «${slug}»`);
      }
      if (!t.noMatch && !t.matches.length) throw new Error(`«${t.slug}»: nessun animale associato`);
      const clash = t.never.filter((a) => t.matches.includes(a));
      if (clash.length) throw new Error(`«${t.slug}»: in matches e in never insieme: ${clash.join(', ')}`);
    }
  }
}

/** Le righe di un esercizio: senza i verbi troppo generali; per la negazione, solo quelle con `never`. */
const matchItems = (lesson) => lesson.words.filter((t) => !t.noMatch);
const negativeItems = (lesson) => matchItems(lesson).filter((t) => t.never.length > 0);

function buildMatchSections(lesson, lang, template) {
  const ui = lesson.uiFor(lang);
  const itAttr = lang === 'it' ? '' : ' lang="it"';
  const animalsPage = bankPageOf(lesson)[lang];
  const animalsHref = lang === 'it' ? `${animalsPage.slug}.html` : `/${pagePath(bankLessonOf(lesson), lang)}`;
  const linkHtml = `<a href="${animalsHref}">${escapeHtml(animalsPage.name)}</a>`;
  const lessonLine = fill(ui.lessonLink, { link: linkHtml });

  const chipSource = bankBySlug(lesson);
  const chip = (slug) => {
    const a = chipSource.get(slug);
    return `<li><button class="match-chip" type="button" data-animal="${slug}" aria-pressed="false"><img src="${template.imagePrefix}/${a.image}.webp" alt="" width="56" height="56" loading="lazy" decoding="async" draggable="false"><span${itAttr}>${escapeHtml(a.word)}</span></button></li>`;
  };

  const section = (mode, sets) => {
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
                ? `<strong class="match-trait"${itAttr}>${lesson.yesLabel ? `<span class="match-yes">${lesson.yesLabel}</span> ` : ''}${escapeHtml(trait.word)}</strong>`
                : `<strong class="match-trait"${itAttr}><span class="match-not">${lesson.notLabel}</span> ${escapeHtml(trait.word)}</strong>`;
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

  const positive = buildSets(matchItems(lesson), 'positive', lesson.seeds[0], bankOf(lesson), lesson.neutral);
  const negative = buildSets(negativeItems(lesson), 'negative', lesson.seeds[1], bankOf(lesson), lesson.neutral);
  return { html: section('positive', positive) + '\n\n      ' + section('negative', negative), positive, negative };
}

/** Le righe della forma negativa con le risposte «giuste» che nessuno ha dichiarato in `never`: da rivedere a occhio. */
function reviewNegative(lesson, negative) {
  console.log(`\n== ${lesson.pages.it.name}: risposte giuste dedotte nella forma negativa ==`);
  for (const set of negative) {
    for (const { trait, ok } of set.rows) {
      const inferred = ok.filter((a) => !trait.never.includes(a));
      console.log(`${trait.word}: ${inferred.length ? inferred.join(', ') : '(solo quelle dichiarate)'}`);
    }
  }
}

// --- pagine ---------------------------------------------------------------------

function buildPage(lesson, lang) {
  const isMatch = lesson.kind === 'match';
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
  let negative = [];

  // 1. parole, esercizi di riconoscimento, traduzioni libere
  out = replaceContainer(
    out,
    'word-grid',
    '\n            ' +
      lesson.words.map((w) => buildCard(w, template, lang, isMatch)).join('\n            ') +
      '\n          '
  );
  if (!isMatch) {
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

  // 2. le lezioni con trascinamento: niente «Riconosci la parola», ma gli esercizi da trascinare;
  //    e la nota sull'articolo lascia il posto a quella della lezione.
  if (isMatch) {
    const start = out.indexOf('<section class="section word-practice-section"');
    const end = out.indexOf('</section>', start);
    if (start === -1 || end === -1) throw new Error(`${lang}: sezione «Riconosci la parola» non trovata`);
    const sections = buildMatchSections(lesson, lang, template);
    negative = sections.negative;
    out = out.slice(0, start) + sections.html + out.slice(end + '</section>'.length);

    const note = lesson.uiFor(lang).note;
    out = out.replace(
      /(<div class="vocabulary-note">)[\s\S]*?(<\/div>)/,
      `$1\n            <strong>${escapeHtml(note.title)}</strong>\n            <p>${note.body}</p>\n          $2`
    );
  }

  // 3. contatori (le lezioni con trascinamento non hanno la barra del riconoscimento)
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
  //    (nelle lezioni con trascinamento la nota e' gia' stata sostituita).
  if (lesson.exampleWord) {
    const swapWord = (h, from, to) =>
      h.replace(new RegExp(`(<em(?:\\s+lang="it")?>)${escapeRegex(from)}(</em>)`, 'g'), `$1${to}$2`);
    out = swapWord(out, 'il frigorifero', lesson.exampleWord.withArticle);
    out = swapWord(out, 'frigorifero', lesson.exampleWord.bare);
    out = swapWord(out, 'la forchetta', lesson.exampleWord.withArticle);
    out = swapWord(out, 'forchetta', lesson.exampleWord.bare);
  }

  return { out, negative };
}

function buildAstro(lesson, lang) {
  const isMatch = lesson.kind === 'match';
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

  // Le lezioni con trascinamento caricano anche gli stili e lo script degli esercizi.
  if (isMatch) {
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
validateLessonData();

for (const lesson of Object.values(lessons)) {
  console.log(
    `Lezione "${lesson.pages.it.name}": ${lesson.words.length} parole, ${lesson.translations.length} frasi da tradurre.\n`
  );
  for (const lang of LANGS) {
    const htmlFile = path.join(root, 'src/html', pagePath(lesson, lang));
    const astroFile = path.join(root, 'src/pages', pagePath(lesson, lang) + '.astro');

    const { out: html, negative } = buildPage(lesson, lang);
    const astro = buildAstro(lesson, lang);

    if (review && lang === 'it' && negative.length) reviewNegative(lesson, negative);

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

// --- la lezione «Le caratteristiche degli animali» della prima versione: via, con un redirect ---
{
  const target = lessons.personalita;
  for (const lang of LANGS) {
    const htmlFile = path.join(root, 'src/html', oldPath(lang));
    const astroFile = path.join(root, 'src/pages', oldPath(lang) + '.astro');
    const stubFile = path.join(root, 'public', oldPath(lang));
    const to = `/${pagePath(target, lang)}`;
    const stub = `<!doctype html><html lang="${lang}"><head><meta charset="utf-8"><meta name="robots" content="noindex,follow"><link rel="canonical" href="${pageUrl(target, lang)}"><meta http-equiv="refresh" content="0;url=${to}"><title>Redirect | Italiano con Martin</title></head><body><p><a href="${to}">Continue</a></p></body></html>`;
    if (!dryRun) {
      for (const f of [htmlFile, astroFile]) if (existsSync(f)) unlinkSync(f);
      mkdirSync(path.dirname(stubFile), { recursive: true });
      writeFileSync(stubFile, stub);
    }
  }
  console.log('Vecchia lezione «caratteristiche»: pagine tolte da src/, redirect in public/ verso la personalità.\n');
}

// --- indici del vocabolario: schede nuove prima dei segnaposto «In preparazione» ---
for (const lang of LANGS) {
  const file = path.join(root, indexFile[lang]);
  let html = readFileSync(file, 'utf8');
  const sample = /<a class="vocabulary-category"[\s\S]*?<\/a>/.exec(html);
  if (!sample) throw new Error(`${lang}: nessuna scheda disponibile da cui copiare`);
  const status = /<span class="status">([^<]*)<\/span>/.exec(sample[0])[1];
  const assetPrefix = /src="([^"]*)\/vocabolario\//.exec(sample[0])[1];

  // La scheda della prima versione della lezione sulle caratteristiche sparisce.
  const oldCard = new RegExp(
    `\\s*<a class="vocabulary-category" href="[^"]*${escapeRegex(oldTraitPages[lang].slug)}\\.html"[\\s\\S]*?</a>`
  );
  html = html.replace(oldCard, '');

  // Le schede che ci sono gia' prendono il testo aggiornato (conteggio delle parole compreso).
  for (const lesson of Object.values(lessons)) {
    const page = lesson.pages[lang];
    const card = new RegExp(
      `(<a class="vocabulary-category" href="[^"]*${escapeRegex(page.slug)}\\.html"[\\s\\S]*?<p>)[^<]*(</p>)`
    );
    html = html.replace(card, `$1${escapeHtml(page.cardText)}$2`);
  }

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
  if (added) {
    // Prima del primo segnaposto; se non ce ne sono piu', in fondo alla griglia.
    const coming = html.indexOf('<article class="vocabulary-category coming">');
    const insertAt = coming !== -1 ? coming : html.lastIndexOf('</div>', html.indexOf('vocabulary-note'));
    html = html.slice(0, insertAt) + cards.join('\n            ') + '\n            ' + html.slice(insertAt);
  }
  if (!dryRun) writeFileSync(file, html);
  console.log(`indice ${lang}: ${added} schede aggiunte`);
}

// --- sitemap -------------------------------------------------------------------------
{
  const file = path.join(root, 'public/sitemap.xml');
  let xml = readFileSync(file, 'utf8');
  const esc = (t) => [...t].map((c) => (c.charCodeAt(0) < 128 ? c : `&#x${c.codePointAt(0).toString(16)};`)).join('');

  // Via le righe della vecchia lezione.
  let removed = 0;
  for (const lang of LANGS) {
    const loc = `<loc>${esc(oldUrl(lang))}</loc>`;
    const before = xml.length;
    xml = xml
      .split('\n')
      .filter((line) => !line.includes(loc))
      .join('\n');
    if (xml.length !== before) removed += 1;
  }

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
  if (!dryRun) writeFileSync(file, xml);
  console.log(`\nsitemap: ${added} righe aggiunte, ${removed} vecchie tolte`);
}

console.log('\nDa mettere in scripts/audit-vocabulary.mjs, dentro `routes`:\n');
for (const lesson of Object.values(lessons)) {
  console.log(`  ${lesson.id}: {`);
  console.log(`    count: ${lesson.words.length},`);
  if (lesson.kind === 'match') {
    console.log(`    tests: 0,`);
    console.log(`    match: { positive: ${matchItems(lesson).length}, negative: ${negativeItems(lesson).length} },`);
  }
  for (const l of LANGS) console.log(`    ${l}: '${pagePath(lesson, l)}',`);
  console.log('  },');
}
if (dryRun) console.log('\n(dry run: nessun file scritto)');

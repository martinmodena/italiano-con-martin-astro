/**
 * Amplia la lezione di vocabolario "Il cibo" in tutte e 9 le lingue.
 *
 * Aggiunge alla pagina italiana e alle otto pagine localizzate le parole di
 * `scripts/data/food-vocabulary-extra.mjs`, ma solo quelle che hanno gia'
 * l'immagine in `public/assets/vocabolario/<slug>.webp`. Le parole senza
 * immagine vengono saltate e segnalate: cosi' la pagina resta sempre coerente
 * (stesso numero di schede e di esercizi in tutte le lingue, come pretende
 * `scripts/audit-vocabulary.mjs`) anche se le illustrazioni arrivano poche
 * alla volta.
 *
 * Ogni scheda nuova viene costruita copiando la forma delle schede gia'
 * presenti nella pagina: etichette, testo dei pulsanti e prefisso delle
 * immagini vengono letti dalla pagina stessa, quindi ogni lingua conserva le
 * sue traduzioni senza che sia necessario ripeterle qui.
 *
 * Uso:
 *   node scripts/expand-food-vocabulary.mjs --dry-run
 *   node scripts/expand-food-vocabulary.mjs
 *   node scripts/expand-food-vocabulary.mjs --images <cartella-immagini-grezze>
 *
 * Con `--images` le immagini grezze (png/jpg/webp, un file per parola, chiamato
 * come lo slug: pizza.png, pomodoro.png...) vengono convertite nel formato del
 * sito (512x512, sfondo trasparente, webp) prima di aggiornare le pagine.
 */

import { existsSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as cheerio from 'cheerio';
import sharp from 'sharp';
import { foodVocabularyExtra, foodTranslationExercises } from './data/food-vocabulary-extra.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const assetsDir = path.join(root, 'public', 'assets', 'vocabolario');

/** Le nove pagine della lezione, il file con i metadati e l'indice del vocabolario. */
const pages = {
  it: {
    lesson: 'src/html/vocabolario/cibo.html',
    meta: 'src/pages/vocabolario/cibo.html.astro',
    index: 'src/html/vocabolario/index.html',
    href: 'cibo.html',
  },
  en: {
    lesson: 'src/html/en/vocabulary/italian-food-vocabulary.html',
    meta: 'src/pages/en/vocabulary/italian-food-vocabulary.html.astro',
    index: 'src/html/en/vocabulary/index.html',
    href: '/en/vocabulary/italian-food-vocabulary.html',
  },
  es: {
    lesson: 'src/html/es/vocabulario/vocabulario-de-la-comida-en-italiano.html',
    meta: 'src/pages/es/vocabulario/vocabulario-de-la-comida-en-italiano.html.astro',
    index: 'src/html/es/vocabulario/index.html',
    href: '/es/vocabulario/vocabulario-de-la-comida-en-italiano.html',
  },
  fr: {
    lesson: 'src/html/fr/vocabulaire/vocabulaire-de-la-nourriture-en-italien.html',
    meta: 'src/pages/fr/vocabulaire/vocabulaire-de-la-nourriture-en-italien.html.astro',
    index: 'src/html/fr/vocabulaire/index.html',
    href: '/fr/vocabulaire/vocabulaire-de-la-nourriture-en-italien.html',
  },
  cs: {
    lesson: 'src/html/cs/slovni-zasoba/italska-slovni-zasoba-jidlo.html',
    meta: 'src/pages/cs/slovni-zasoba/italska-slovni-zasoba-jidlo.html.astro',
    index: 'src/html/cs/slovni-zasoba/index.html',
    href: '/cs/slovni-zasoba/italska-slovni-zasoba-jidlo.html',
  },
  pl: {
    lesson: 'src/html/pl/slownictwo/wloskie-slownictwo-jedzenie.html',
    meta: 'src/pages/pl/slownictwo/wloskie-slownictwo-jedzenie.html.astro',
    index: 'src/html/pl/slownictwo/index.html',
    href: '/pl/slownictwo/wloskie-slownictwo-jedzenie.html',
  },
  tr: {
    lesson: 'src/html/tr/kelime-bilgisi/italyanca-yemek-kelimeleri.html',
    meta: 'src/pages/tr/kelime-bilgisi/italyanca-yemek-kelimeleri.html.astro',
    index: 'src/html/tr/kelime-bilgisi/index.html',
    href: '/tr/kelime-bilgisi/italyanca-yemek-kelimeleri.html',
  },
  de: {
    lesson: 'src/html/de/wortschatz/italienischer-wortschatz-essen.html',
    meta: 'src/pages/de/wortschatz/italienischer-wortschatz-essen.html.astro',
    index: 'src/html/de/wortschatz/index.html',
    href: '/de/wortschatz/italienischer-wortschatz-essen.html',
  },
  ja: {
    lesson: 'src/html/ja/goi/italian-food-vocabulary.html',
    meta: 'src/pages/ja/goi/italian-food-vocabulary.html.astro',
    index: 'src/html/ja/goi/index.html',
    href: '/ja/goi/italian-food-vocabulary.html',
  },
};

const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const imagesFlag = args.indexOf('--images');
const rawImagesDir = imagesFlag === -1 ? null : args[imagesFlag + 1];

const escapeAttribute = (value) =>
  value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');

const escapeHtml = (value) => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');

/** Trova il `<div class="...">` indicato e restituisce dove finisce il suo contenuto. */
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

/** Converte le immagini grezze nel formato del sito: 512x512, trasparente, webp. */
async function convertRawImages(directory) {
  const wanted = new Map(foodVocabularyExtra.map((word) => [word.image, word]));
  const converted = [];
  for (const file of readdirSync(directory)) {
    const slug = path.parse(file).name.toLowerCase();
    if (!wanted.has(slug)) continue;
    if (!/\.(png|jpe?g|webp)$/i.test(file)) continue;
    const target = path.join(assetsDir, `${slug}.webp`);
    const resized = await sharp(path.join(directory, file))
      .ensureAlpha()
      .resize(460, 460, { fit: 'inside', withoutEnlargement: false })
      .toBuffer();
    await sharp({
      create: { width: 512, height: 512, channels: 4, background: { r: 255, g: 255, b: 255, alpha: 0 } },
    })
      .composite([{ input: resized, gravity: 'centre' }])
      .webp({ quality: 84, effort: 6 })
      .toFile(target);
    converted.push(slug);
  }
  return converted;
}

function buildCard(word, template, language) {
  const examples = word.examples
    .map((sentence) => `<li><span lang="it">${escapeHtml(sentence)}</span></li>`)
    .join('');
  return `<article class="word-card">
      <img src="${template.imagePrefix}/${word.image}.webp" alt="${escapeAttribute(word.alt[language])}" loading="lazy" decoding="async">
      <div class="word-card-body"><h2>${escapeHtml(word.word)}</h2><div class="word-examples"><strong>${escapeHtml(template.examplesLabel)}</strong><ol>
        ${examples}
      </ol></div><button class="speak-word" data-word="${escapeAttribute(word.word)}" type="button">${escapeHtml(template.speakLabel)}</button></div>
    </article>`;
}

function buildTest(word, template, index) {
  const number = index + 1;
  return `<article class="word-test" data-answer="${escapeAttribute(JSON.stringify(word.answers))}" data-key="${number}">
      <img src="${template.imagePrefix}/${word.image}.webp" alt="${escapeAttribute(template.testAlt(number))}" loading="lazy" decoding="async">
      <div class="word-test-body"><span class="test-number">${number}</span><label for="word-test-${number}">${escapeHtml(template.testLabel)}</label><input id="word-test-${number}" type="text" autocomplete="off" spellcheck="true" placeholder="${escapeAttribute(template.placeholder)}"><p class="word-test-feedback" aria-live="polite"></p></div>
    </article>`;
}

function buildTranslation(word, template, language, index) {
  const data = foodTranslationExercises[word.image];
  if (!data || !template.translation) return '';
  const number = index + 1;
  const prompt = data.prompt[language];
  if (!prompt) return '';
  // Sulla pagina italiana la lingua di partenza e' l'inglese: e' l'unica
  // eccezione prevista da REGOLE_LINGUE.md per le traduzioni libere.
  const promptLang = language === 'it' ? 'en' : language;
  return `<article class="translation-exercise" data-key="${number}"><div class="exercise-number" aria-hidden="true">${number}</div><div class="translation-exercise-body">
      <p class="translation-prompt"><span class="prompt-label">${escapeHtml(template.translation.label)}</span><strong lang="${promptLang}">${escapeHtml(prompt)}</strong></p>
      <label for="translation-${number}">${escapeHtml(template.translation.fieldLabel)}</label><textarea id="translation-${number}" rows="2" autocomplete="off" spellcheck="true"></textarea>
      <div class="translation-actions"><button class="show-translation" type="button">${escapeHtml(template.translation.button)}</button></div>
      <p class="proposed-solution" hidden=""><span>${escapeHtml(template.translation.solutionLabel)}</span> <strong>${escapeHtml(data.solution)}</strong></p>
    </div></article>`;
}

/** Legge dalla pagina le etichette gia' tradotte, per non doverle ripetere qui. */
function readTemplate(html) {
  const $ = cheerio.load(html, null, false);
  const card = $('.word-card').first();
  const test = $('.word-test').first();
  const exercise = $('.translation-exercise').first();
  if (!card.length || !test.length) throw new Error('nessuna scheda di riferimento nella pagina');
  const source = card.find('img').attr('src') ?? '';
  const testAltSample = test.find('img').attr('alt') ?? '';
  return {
    imagePrefix: source.slice(0, source.lastIndexOf('/')),
    examplesLabel: card.find('.word-examples strong').first().text(),
    speakLabel: card.find('.speak-word').first().text(),
    testLabel: test.find('label').first().text(),
    placeholder: test.find('input').first().attr('placeholder') ?? '',
    testAlt: (number) => testAltSample.replace(/\d+/, String(number)),
    existingImages: new Set(
      $('.word-card img')
        .map((_, img) => ($(img).attr('src') ?? '').split('/').pop().replace(/\.webp$/, ''))
        .get()
    ),
    currentCount: $('.word-card').length,
    translationCount: $('.translation-exercise').length,
    translation: exercise.length
      ? {
          label: exercise.find('.prompt-label').first().text(),
          fieldLabel: exercise.find('label').first().text(),
          button: exercise.find('.show-translation').first().text(),
          solutionLabel: exercise.find('.proposed-solution span').first().text(),
        }
      : null,
  };
}

/** Aggiorna i contatori: occhiello, barra di avanzamento ed etichetta del progresso. */
function updateCounters(html, oldCount, newCount) {
  const digits = new RegExp(`\\b${oldCount}\\b`);
  let updated = html;

  const practiceStart = updated.indexOf('word-practice-section');
  const titleIndex = updated.indexOf('<h2 id="word-practice-title"', practiceStart);
  if (practiceStart !== -1 && titleIndex !== -1) {
    const head = updated.slice(practiceStart, titleIndex);
    updated = updated.slice(0, practiceStart) + head.replace(digits, String(newCount)) + updated.slice(titleIndex);
  }

  updated = updated.replace(/(<progress id="word-progress" max=")\d+(")/, `$1${newCount}$2`);
  updated = updated.replace(/(<span id="word-progress-text">)([^<]*)(<\/span>)/, (whole, open, text, close) =>
    `${open}${text.replace(digits, String(newCount))}${close}`
  );
  return updated;
}

/** Aggiorna l'occhiello «N frasi libere» della sezione delle traduzioni. */
function updateTranslationCounter(html, oldCount, newCount) {
  const start = html.indexOf('translation-free-section');
  const title = html.indexOf('<h2 id="translation-practice-title"', start);
  if (start === -1 || title === -1) return html;
  const head = html.slice(start, title).replace(new RegExp(`\\b${oldCount}\\b`), String(newCount));
  return html.slice(0, start) + head + html.slice(title);
}

function updateMeta(file, oldCount, newCount) {
  if (!existsSync(file)) return false;
  const html = readFileSync(file, 'utf8');
  // Nei file dei metadati il numero delle parole compare due volte: nella meta
  // description e nella descrizione Open Graph. Se le occorrenze non sono due,
  // il numero e' finito anche altrove: meglio fermarsi che riscrivere a caso.
  const occurrences = html.match(new RegExp(`\\b${oldCount}\\b`, 'g')) ?? [];
  if (occurrences.length !== 2) {
    console.warn(`  ${path.relative(root, file)}: trovate ${occurrences.length} occorrenze di "${oldCount}", metadati non aggiornati`);
    return false;
  }
  const updated = html.replaceAll(new RegExp(`\\b${oldCount}\\b`, 'g'), String(newCount));
  if (updated === html) return false;
  if (!dryRun) writeFileSync(file, updated);
  return true;
}

function updateIndex(file, href, oldCount, newCount) {
  if (!existsSync(file)) return false;
  const html = readFileSync(file, 'utf8');
  const linkIndex = html.indexOf(`href="${href}"`);
  if (linkIndex === -1) return false;
  const paragraphStart = html.indexOf('<p>', linkIndex);
  const paragraphEnd = html.indexOf('</p>', paragraphStart);
  if (paragraphStart === -1 || paragraphEnd === -1) return false;
  const paragraph = html.slice(paragraphStart, paragraphEnd);
  const replaced = paragraph.replace(new RegExp(`\\b${oldCount}\\b`), String(newCount));
  if (replaced === paragraph) return false;
  const updated = html.slice(0, paragraphStart) + replaced + html.slice(paragraphEnd);
  if (!dryRun) writeFileSync(file, updated);
  return true;
}

function updateAudit(newCount) {
  const file = path.join(root, 'scripts', 'audit-vocabulary.mjs');
  const source = readFileSync(file, 'utf8');
  const updated = source.replace(/(cibo: \{\s*\n\s*count: )\d+/, `$1${newCount}`);
  if (updated === source) return false;
  if (!dryRun) writeFileSync(file, updated);
  return true;
}

const ready = foodVocabularyExtra.filter((word) => existsSync(path.join(assetsDir, `${word.image}.webp`)));

if (rawImagesDir) {
  const converted = await convertRawImages(path.resolve(rawImagesDir));
  console.log(`Immagini convertite: ${converted.length}${converted.length ? ` (${converted.join(', ')})` : ''}`);
  if (converted.length) {
    for (const word of foodVocabularyExtra) {
      if (converted.includes(word.image) && !ready.includes(word)) ready.push(word);
    }
    ready.sort((a, b) => foodVocabularyExtra.indexOf(a) - foodVocabularyExtra.indexOf(b));
  }
}

const stillMissing = foodVocabularyExtra.filter((word) => !ready.includes(word));

if (!ready.length) {
  console.log('Nessuna immagine nuova trovata in public/assets/vocabolario/.');
  console.log(`Mancano ${stillMissing.length} illustrazioni: ${stillMissing.map((word) => `${word.image}.webp`).join(', ')}`);
  process.exit(0);
}

let finalCount = 0;
for (const [language, config] of Object.entries(pages)) {
  const file = path.join(root, config.lesson);
  if (!existsSync(file)) {
    console.error(`Manca la pagina ${config.lesson}`);
    process.exitCode = 1;
    continue;
  }
  const html = readFileSync(file, 'utf8');
  const template = readTemplate(html);
  const toAdd = ready.filter((word) => !template.existingImages.has(word.image));
  if (!toAdd.length) {
    console.log(`${language}: nessuna parola da aggiungere (gia' ${template.currentCount}).`);
    finalCount = template.currentCount;
    continue;
  }

  const grid = findContainer(html, 'word-grid');
  const tests = findContainer(html, 'word-tests');
  if (!grid || !tests) throw new Error(`${config.lesson}: contenitori delle parole non trovati`);

  const cards = toAdd.map((word) => buildCard(word, template, language)).join('');
  const newTests = toAdd
    .map((word, index) => buildTest(word, template, template.currentCount + index))
    .join('');

  let updated = html.slice(0, tests.contentEnd) + newTests + html.slice(tests.contentEnd);
  updated = updated.slice(0, grid.contentEnd) + cards + updated.slice(grid.contentEnd);

  // Frasi da tradurre: solo per le parole che ne hanno una in
  // `foodTranslationExercises`, e solo quando la parola entra davvero in pagina.
  const exercises = toAdd
    .filter((word) => foodTranslationExercises[word.image])
    .map((word, index) => buildTranslation(word, template, language, template.translationCount + index))
    .filter(Boolean)
    .join('');
  if (exercises) {
    const box = findContainer(updated, 'translation-exercises');
    if (!box) throw new Error(`${config.lesson}: contenitore delle traduzioni non trovato`);
    const added = exercises.match(/class="translation-exercise"/g).length;
    updated = updated.slice(0, box.contentEnd) + exercises + updated.slice(box.contentEnd);
    updated = updateTranslationCounter(updated, template.translationCount, template.translationCount + added);
  }

  const newCount = template.currentCount + toAdd.length;
  updated = updateCounters(updated, template.currentCount, newCount);
  finalCount = newCount;

  if (!dryRun) writeFileSync(file, updated);
  updateMeta(path.join(root, config.meta), template.currentCount, newCount);
  updateIndex(path.join(root, config.index), config.href, template.currentCount, newCount);
  console.log(`${language}: ${template.currentCount} → ${newCount} parole (+${toAdd.length}).`);
}

if (finalCount) updateAudit(finalCount);

console.log(
  stillMissing.length
    ? `Mancano ancora ${stillMissing.length} illustrazioni: ${stillMissing.map((word) => `${word.image}.webp`).join(', ')}`
    : 'Tutte le illustrazioni sono presenti.'
);
if (dryRun) console.log('(--dry-run: nessun file scritto)');

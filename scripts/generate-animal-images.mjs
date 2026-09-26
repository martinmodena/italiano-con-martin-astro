#!/usr/bin/env node
// Genera le illustrazioni delle lezioni sugli animali via OpenRouter:
//   - «Gli animali» (100 parole)                                  -> --set animali
//   - «Le caratteristiche fisiche» e «La personalita'» (67 agg.)  -> --set caratteristiche
//   - «I verbi degli animali» (91 verbi)                          -> --set verbi
//   - «Il corpo umano» (63 parti del corpo, foto realistiche)     -> --set corpo
//   - «I verbi del corpo» (94 verbi, foto realistiche)            -> --set verbi-corpo
//   - «I mestieri» (foto realistiche, qualita' low per spendere poco) -> --set mestieri
//   - «Le persone intorno a noi» (come i mestieri)                   -> --set persone
//   - «Il tempo e le stagioni» (qualita' low, paesaggi in un cerchio) -> --set tempo
//   - «La casa» (qualita' low, stanze in un cerchio)                  -> --set casa
//   - «I verbi delle relazioni» (scene con piu' persone, come sopra)  -> --set relazioni
//   - «I colori e le forme» (animali, qualita' medium)               -> --set colori e --set colori-descrivi
// Lo script salta le immagini che esistono gia' in public/assets/vocabolario/: rilanciarlo genera
// solo quelle che mancano.
//
// Modello economico (gpt-image-1-mini, quality low): sono foto semplici e isolate
// (decisione del 2026-09-03, vedi AGENTS.md). Le testate delle lezioni, che sono la
// prima cosa che si vede, si fanno a parte con `generate-image.mjs` e
// `google/gemini-3-pro-image`.
//
// Stile voluto da Martin (2026-09-24): animali simpatici ma REALISTICI, non cartoni.
// Le due lezioni sul corpo (2026-09-25): foto fotorealistiche di persone, modello `medium` (le mani
// e i piedi a qualita' bassa escono con dita in piu').
// Vincoli del progetto: nessuna carne, nessun cibo di origine animale in scena.
//
// IMPORTANTE: le immagini grezze vanno poi ripulite dallo sfondo con
// `python scripts/remove-white-background.py <in> <out>` e portate nel formato del sito
// con `node scripts/convert-vocabulary-images.mjs <out>` (vedi docs/prompt-immagini-animali.md).
//
// Uso:
//   node scripts/generate-animal-images.mjs --set animali --out-dir <cartella>
//   node scripts/generate-animal-images.mjs --set caratteristiche --out-dir <cartella> --only pigro,veloce
//   node scripts/generate-animal-images.mjs --set verbi --out-dir <cartella>
//   node scripts/generate-animal-images.mjs --set animali --dry-run

import { readFileSync, existsSync, mkdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { animalVocabulary } from './data/animals-vocabulary.mjs';
import { traitVocabulary } from './data/traits-vocabulary.mjs';
import { verbVocabulary } from './data/verbs-vocabulary.mjs';
import { bodyVocabulary } from './data/body-vocabulary.mjs';
import { bodyVerbs } from './data/body-verbs.mjs';
import { jobVocabulary } from './data/jobs-vocabulary.mjs';
import { peopleVocabulary } from './data/people-vocabulary.mjs';
import { relationVerbs } from './data/relations-verbs.mjs';
import { colorVocabulary, colorDescribeRows } from './data/colors-vocabulary.mjs';
import { weatherVocabulary } from './data/weather-vocabulary.mjs';
import { houseVocabulary } from './data/house-vocabulary.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const assetsDir = path.join(root, 'public/assets/vocabolario');

function loadEnv() {
  const envPath = path.join(root, '.env');
  if (!existsSync(envPath)) return;
  for (const line of readFileSync(envPath, 'utf8').split('\n')) {
    const m = /^([A-Z_][A-Z0-9_]*)\s*=\s*(.*)\s*$/.exec(line);
    if (m && !(m[1] in process.env)) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '');
  }
}
loadEnv();

const args = process.argv.slice(2);
const getArg = (n) => {
  const i = args.indexOf(n);
  return i >= 0 && i + 1 < args.length ? args[i + 1] : null;
};

const setName = getArg('--set');
const model = getArg('--model') || 'openai/gpt-image-1-mini';
// I colori (2026-09-26): Martin vuole foto di qualita', ma senza spendere troppo -> `medium`.
const mediumSet = ['corpo', 'verbi-corpo', 'colori', 'colori-descrivi'].includes(setName);
const quality = getArg('--quality') || (mediumSet ? 'medium' : 'low');
const size = getArg('--size') || '1024x1024';
const only = getArg('--only') ? new Set(getArg('--only').split(',')) : null;
const outDir = getArg('--out-dir');
const concurrency = Number(getArg('--concurrency') || 4);
const dryRun = args.includes('--dry-run');

const sets = {
  animali: animalVocabulary,
  caratteristiche: traitVocabulary,
  verbi: verbVocabulary,
  corpo: bodyVocabulary,
  'verbi-corpo': bodyVerbs,
  mestieri: jobVocabulary,
  persone: peopleVocabulary,
  relazioni: relationVerbs,
  colori: colorVocabulary,
  'colori-descrivi': colorDescribeRows,
  tempo: weatherVocabulary,
  casa: houseVocabulary,
};
if (!sets[setName]) {
  console.error(
    'Serve --set animali|caratteristiche|verbi|corpo|verbi-corpo|mestieri|persone|relazioni|colori|colori-descrivi|tempo|casa.'
  );
  process.exit(1);
}
if (!dryRun && !outDir) {
  console.error('Serve --out-dir <cartella> (oppure --dry-run).');
  process.exit(1);
}

const PHOTO_END = [
  'Plain pure white background (#FFFFFF), soft diffused studio light, minimal contact shadow only, everything in sharp focus.',
  'The whole subject is completely inside the frame with a generous empty white margin on every side (at least 8%), never touching the edges of the picture, unless the subject is described as cropped.',
  'Correct human anatomy: exactly five fingers on each hand and five toes on each foot.',
  'No text, no logo, no watermark, no frame, no border, no meat, no blood, no nudity.',
];
const BODY_STYLE = [
  'Photorealistic studio photograph with true-to-life skin, hair and anatomy and natural colours, sharp and clean, like a stock photo for a school textbook.',
  ...PHOTO_END,
].join(' ');
const BODY_VERB_STYLE = [
  'Photorealistic photograph of an ordinary friendly person in everyday clothes performing the action, natural relaxed expression, true-to-life skin, hair and anatomy, like a stock photo for a language textbook.',
  ...PHOTO_END,
].join(' ');
const ANIMAL_STYLE = [
  'Adorable but realistic wildlife photograph: true-to-life anatomy, fur, feathers or scales and natural colours,',
  'with a charming friendly expression and big expressive eyes. Not a cartoon, not an illustration, not a 3D render, not a plush toy.',
  'Isolated on a pure white background (#FFFFFF), soft diffused studio light, minimal contact shadow only, everything in sharp focus.',
  'Wide full-body shot: the ENTIRE animal is visible from head to tail and feet, completely inside the frame with generous empty white margin on every side (at least 12%), never cropped, never a close-up.',
  'No text, no logo, no watermark, no frame, no border, no people, no meat.',
].join(' ');
// I mestieri: persona intera o a tre quarti con gli abiti e gli attrezzi del lavoro, riconoscibile a colpo
// d'occhio. Qualita' `low` (Martin, 2026-09-26): le mani sono piccole nell'inquadratura larga.
const JOB_STYLE = [
  'Photorealistic photograph of a friendly ordinary person at work, wearing the typical clothes and holding the typical tools of the job, so the job is recognisable at first glance, natural relaxed expression, like a stock photo for a language textbook.',
  'Wide full-body shot: the whole person from the top of the head to the shoes, small in the centre of the frame with wide empty white margins on every side, never cropped; only the objects needed to recognise the job, no busy background.',
  ...PHOTO_END,
].join(' ');
// Le persone intorno a noi: piccole scene di vita quotidiana con una o piu' persone, stessa impostazione.
const PEOPLE_STYLE = [
  'Photorealistic photograph of ordinary friendly people in a small everyday scene, natural relaxed expressions, true-to-life skin and anatomy, like a stock photo for a language textbook.',
  'Wide full-body shot: every person visible from the top of the head to the shoes, small in the centre of the frame with wide empty white margins on every side, never cropped; only the objects needed to understand the scene, no busy background.',
  ...PHOTO_END,
].join(' ');
// Il tempo e le stagioni: oggetti e piccole scene ritagliate sul bianco; i paesaggi come foto rotonde.
const WEATHER_STYLE = [
  'Photorealistic photograph for a language textbook, natural colours, true to life, not a cartoon, not an illustration, not a 3D render.',
  'The subject is shown as a small self-contained cut-out scene isolated on the white background: the white replaces the sky, with only a small patch of ground where needed. When the subject is a landscape cropped into a circle, the circle is centred with wide white margins around it and nothing outside it.',
  'Wide shot: people, if any, fully visible from head to shoes, small in the centre of the frame.',
  ...PHOTO_END,
].join(' ');
// La casa: oggetti e mobili ritagliati sul bianco; le stanze intere come foto rotonde.
const HOUSE_STYLE = [
  'Photorealistic product-style photograph for a language textbook, natural colours, true to life, an ordinary tidy European home, not a cartoon, not an illustration, not a 3D render.',
  'Objects and furniture are isolated on the white background, small in the centre of the frame. When the subject is a room cropped into a circle, the circle is centred with wide white margins around it and nothing outside it; no people.',
  ...PHOTO_END,
].join(' ');
const STYLE =
  {
    casa: HOUSE_STYLE,
    corpo: BODY_STYLE,
    'verbi-corpo': BODY_VERB_STYLE,
    mestieri: JOB_STYLE,
    persone: PEOPLE_STYLE,
    relazioni: PEOPLE_STYLE,
    tempo: WEATHER_STYLE,
  }[setName] ?? ANIMAL_STYLE;

const pending = sets[setName]
  .filter((w) => !existsSync(path.join(assetsDir, `${w.image}.webp`)))
  .filter((w) => !only || only.has(w.slug));

if (!pending.length) {
  console.log('Nessuna immagine da generare.');
  process.exit(0);
}

console.log(`${pending.length} immagini (${setName}) con ${model} (quality: ${quality}, size: ${size}).\n`);

if (dryRun) {
  for (const w of pending) console.log(`${w.slug}: ${STYLE} Subject: ${w.subject}.`);
  process.exit(0);
}

const apiKey = process.env.OPENROUTER_API_KEY;
if (!apiKey) {
  console.error('OPENROUTER_API_KEY non trovata in .env.');
  process.exit(1);
}
mkdirSync(outDir, { recursive: true });

let total = 0;
const failed = [];

async function generate(w) {
  for (let attempt = 1; attempt <= 2; attempt += 1) {
    try {
      const res = await fetch('https://openrouter.ai/api/v1/images', {
        method: 'POST',
        headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model,
          prompt: `${STYLE} Subject: ${w.subject}.`,
          size,
          quality,
          output_format: 'png',
          n: 1,
        }),
      });
      const json = await res.json();
      const item = json.data?.[0];
      if (!res.ok || !item?.b64_json) throw new Error(JSON.stringify(json).slice(0, 300));
      writeFileSync(path.join(outDir, `${w.slug}.png`), Buffer.from(item.b64_json, 'base64'));
      const cost = json.usage?.cost || 0;
      total += cost;
      console.log(`${w.slug}: ok ($${cost.toFixed(4)})`);
      return;
    } catch (err) {
      if (attempt === 2) {
        failed.push(w.slug);
        console.log(`${w.slug}: ERRORE ${err.message}`);
      }
    }
  }
}

const queue = [...pending];
await Promise.all(
  Array.from({ length: Math.min(concurrency, queue.length) }, async () => {
    while (queue.length) await generate(queue.shift());
  })
);

console.log(`\nFatte: ${pending.length - failed.length}/${pending.length}. Costo: $${total.toFixed(4)}.`);
if (failed.length) console.log('Fallite:', failed.join(','));
console.log(`\nProssimo passo, obbligatorio:\n  python scripts/remove-white-background.py ${outDir} <cartella-pulita>`);

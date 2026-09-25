#!/usr/bin/env node
// Genera le illustrazioni delle lezioni sugli animali via OpenRouter:
//   - «Gli animali» (100 parole)                                  -> --set animali
//   - «Le caratteristiche fisiche» e «La personalita'» (67 agg.)  -> --set caratteristiche
//   - «I verbi degli animali» (91 verbi)                          -> --set verbi
//   - «Il corpo umano» (63 parti del corpo, foto realistiche)     -> --set corpo
//   - «I verbi del corpo» (94 verbi, foto realistiche)            -> --set verbi-corpo
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
const bodySet = setName === 'corpo' || setName === 'verbi-corpo';
const quality = getArg('--quality') || (bodySet ? 'medium' : 'low');
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
};
if (!sets[setName]) {
  console.error('Serve --set animali|caratteristiche|verbi|corpo|verbi-corpo.');
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
const STYLE = { corpo: BODY_STYLE, 'verbi-corpo': BODY_VERB_STYLE }[setName] ?? ANIMAL_STYLE;

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

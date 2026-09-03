#!/usr/bin/env node
// Genera in blocco le illustrazioni mancanti per la lezione di vocabolario
// "Il cibo", via OpenRouter, e le salva come immagini grezze pronte per
// scripts/expand-food-vocabulary.mjs --images <cartella>.
//
// Ogni parola manca se non esiste ancora `public/assets/vocabolario/<slug>.webp`.
// Lo script salta quelle già pubblicate, cosi' si puo' rilanciare piu' volte
// senza rigenerare (e ripagare) quello che c'e' già.
//
// Uso:
//   node scripts/generate-vocabulary-images.mjs --out-dir <cartella>
//   node scripts/generate-vocabulary-images.mjs --out-dir <cartella> --only prosciutto,olio
//   node scripts/generate-vocabulary-images.mjs --out-dir <cartella> --limit 5
//   node scripts/generate-vocabulary-images.mjs --dry-run
//
// Poi:
//   node scripts/expand-food-vocabulary.mjs --images <cartella>
//
// La chiave OPENROUTER_API_KEY sta in .env, mai in questo file.

import { readFileSync, existsSync, mkdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { foodVocabularyExtra } from './data/food-vocabulary-extra.mjs';
import { foodVocabularyImagePrompts } from './data/food-vocabulary-image-prompts.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const assetsDir = path.join(root, 'public/assets/vocabolario');

function loadEnv() {
  const envPath = path.join(root, '.env');
  if (!existsSync(envPath)) return;
  for (const line of readFileSync(envPath, 'utf8').split('\n')) {
    const m = /^([A-Z_][A-Z0-9_]*)\s*=\s*(.*)\s*$/.exec(line);
    if (!m) continue;
    const [, key, rawValue] = m;
    if (!(key in process.env)) process.env[key] = rawValue.replace(/^["']|["']$/g, '');
  }
}
loadEnv();

const args = process.argv.slice(2);
const getArg = (name) => {
  const i = args.indexOf(name);
  return i >= 0 && i + 1 < args.length ? args[i + 1] : null;
};
const hasFlag = (name) => args.includes(name);

const model = getArg('--model') || 'openai/gpt-image-1-mini';
const quality = getArg('--quality') || 'low';
const size = getArg('--size') || '1024x1024';
const limit = getArg('--limit') ? Number(getArg('--limit')) : Infinity;
const only = getArg('--only') ? new Set(getArg('--only').split(',')) : null;
const outDir = getArg('--out-dir');
const dryRun = hasFlag('--dry-run');

if (!dryRun && !outDir) {
  console.error('Serve --out-dir <cartella> (oppure --dry-run per solo vedere i prompt).');
  process.exit(1);
}

const STYLE = [
  'Professional product photography, single subject, centred, isolated on a pure white background (#FFFFFF).',
  'Three-quarter angle slightly from above, soft diffused studio light, minimal contact shadow only, no harsh cast shadow.',
  'Natural realistic colours, everything in sharp focus.',
  'No text, no logo, no watermark, no frame, no border, no props, no plate, no cutlery, no hands, no other food items unless explicitly part of the subject.',
  'Show the most common, typical form of the subject, not a decorated or gourmet version.',
].join(' ');

const pending = foodVocabularyExtra
  .map((w) => w.image)
  .filter((slug) => foodVocabularyImagePrompts[slug])
  .filter((slug) => !existsSync(path.join(assetsDir, `${slug}.webp`)))
  .filter((slug) => !only || only.has(slug))
  .slice(0, limit);

if (!pending.length) {
  console.log('Nessuna parola da generare: tutte le immagini richieste esistono già.');
  process.exit(0);
}

console.log(`${pending.length} immagini da generare con ${model} (quality: ${quality}, size: ${size}).\n`);

if (dryRun) {
  for (const slug of pending) {
    console.log(`--- ${slug} ---`);
    console.log(`${STYLE} Subject: ${foodVocabularyImagePrompts[slug]}.`);
    console.log('');
  }
  process.exit(0);
}

const apiKey = process.env.OPENROUTER_API_KEY;
if (!apiKey) {
  console.error('OPENROUTER_API_KEY non trovata in .env.');
  process.exit(1);
}

if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });

let totalCost = 0;
let done = 0;
let failed = [];

for (const slug of pending) {
  const prompt = `${STYLE} Subject: ${foodVocabularyImagePrompts[slug]}.`;
  process.stdout.write(`${slug}... `);
  try {
    const res = await fetch('https://openrouter.ai/api/v1/images', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ model, prompt, size, quality, output_format: 'png', n: 1 }),
    });
    const json = await res.json();
    const item = json.data?.[0];
    if (!res.ok || !item?.b64_json) {
      throw new Error(JSON.stringify(json).slice(0, 300));
    }
    const buffer = Buffer.from(item.b64_json, 'base64');
    writeFileSync(path.join(outDir, `${slug}.png`), buffer);
    const cost = json.usage?.cost || 0;
    totalCost += cost;
    done += 1;
    console.log(`ok ($${cost.toFixed(4)})`);
  } catch (err) {
    failed.push(slug);
    console.log('ERRORE:', err.message);
  }
}

console.log(`\nFatte: ${done}/${pending.length}. Costo totale: $${totalCost.toFixed(4)}.`);
if (failed.length) console.log('Fallite (da riprovare):', failed.join(', '));
console.log(`\nProssimo passo: node scripts/expand-food-vocabulary.mjs --images ${outDir}`);

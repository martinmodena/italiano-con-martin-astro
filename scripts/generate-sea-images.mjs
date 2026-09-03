#!/usr/bin/env node
// Genera le illustrazioni della lezione "Il mare" via OpenRouter.
//
// Stessa logica di scripts/generate-vocabulary-images.mjs, ma legge i soggetti
// da scripts/data/sea-vocabulary.mjs (campo `subject`).
//
// IMPORTANTE: le immagini grezze vanno poi ripulite dallo sfondo con
// `python scripts/remove-white-background.py <in> <out>` prima di entrare in
// pagina, altrimenti si vede un rettangolo grigio intorno al soggetto.
//
// Uso:
//   node scripts/generate-sea-images.mjs --out-dir <cartella>
//   node scripts/generate-sea-images.mjs --out-dir <cartella> --only conchiglia,faro
//   node scripts/generate-sea-images.mjs --dry-run

import { readFileSync, existsSync, mkdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { seaVocabulary } from './data/sea-vocabulary.mjs';

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

const model = getArg('--model') || 'openai/gpt-image-1-mini';
const quality = getArg('--quality') || 'low';
const size = getArg('--size') || '1024x1024';
const only = getArg('--only') ? new Set(getArg('--only').split(',')) : null;
const outDir = getArg('--out-dir');
const dryRun = args.includes('--dry-run');

if (!dryRun && !outDir) {
  console.error('Serve --out-dir <cartella> (oppure --dry-run).');
  process.exit(1);
}

const STYLE = [
  'Professional product photography, single subject, centred, isolated on a pure white background (#FFFFFF).',
  'Three-quarter angle slightly from above, soft diffused studio light, minimal contact shadow only, no harsh cast shadow.',
  'Natural realistic colours, everything in sharp focus.',
  'No text, no logo, no watermark, no frame, no border, no people, no other objects unless explicitly part of the subject.',
  'Show the most common, typical form of the subject, not a decorated or stylised version.',
].join(' ');

const pending = seaVocabulary
  .filter((w) => !existsSync(path.join(assetsDir, `${w.image}.webp`)))
  .filter((w) => !only || only.has(w.image));

if (!pending.length) {
  console.log('Nessuna immagine da generare.');
  process.exit(0);
}

console.log(`${pending.length} immagini con ${model} (quality: ${quality}, size: ${size}).\n`);

if (dryRun) {
  for (const w of pending) console.log(`${w.image}: ${STYLE} Subject: ${w.subject}.`);
  process.exit(0);
}

const apiKey = process.env.OPENROUTER_API_KEY;
if (!apiKey) {
  console.error('OPENROUTER_API_KEY non trovata in .env.');
  process.exit(1);
}
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });

let total = 0;
const failed = [];
for (const w of pending) {
  process.stdout.write(`${w.image}... `);
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
    writeFileSync(path.join(outDir, `${w.image}.png`), Buffer.from(item.b64_json, 'base64'));
    const cost = json.usage?.cost || 0;
    total += cost;
    console.log(`ok ($${cost.toFixed(4)})`);
  } catch (err) {
    failed.push(w.image);
    console.log('ERRORE:', err.message);
  }
}

console.log(`\nFatte: ${pending.length - failed.length}/${pending.length}. Costo: $${total.toFixed(4)}.`);
if (failed.length) console.log('Fallite:', failed.join(', '));
console.log(`\nProssimo passo, obbligatorio:\n  python scripts/remove-white-background.py ${outDir} <cartella-pulita>`);

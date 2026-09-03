#!/usr/bin/env node
// Genera un'illustrazione per una lettura o una parola di vocabolario via
// OpenRouter (https://openrouter.ai/docs/features/multimodal/image-generation)
// e la salva gia' nei formati usati dal sito: figura 960x540 e tessera
// 640x360 per l'indice, entrambe in public/assets/, in webp.
//
// La chiave sta in .env (OPENROUTER_API_KEY=...), mai in questo file o in
// argomenti stampati altrove: .env e' escluso da git.
//
// Uso:
//   node scripts/generate-image.mjs --slug reading-storia-mafia-italia \
//     --prompt-file docs/prompt-immagine-storia-mafia.md
//   node scripts/generate-image.mjs --slug reading-storia-mafia-italia \
//     --prompt "testo del prompt qui"
//
// Opzioni:
//   --slug <nome>        nome file senza estensione: produce <nome>.webp e
//                         <nome>-card.webp in public/assets/ (obbligatorio)
//   --prompt <testo>      prompt diretto
//   --prompt-file <path>  file da cui leggere il prompt: se e' un .md con un
//                         blocco ```...```, usa solo il contenuto del blocco;
//                         altrimenti usa il file intero, ripulito
//   --model <id>          modello OpenRouter (default: google/gemini-3-pro-image)
//   --hero-width/-height  dimensioni della figura (default 960x540)
//   --card-width/-height  dimensioni della tessera (default 640x360)
//   --dry-run              stampa il prompt che verrebbe inviato ed esce

import { readFileSync, existsSync, mkdirSync } from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = process.cwd();
const ASSETS = path.join(ROOT, 'public/assets');

// Carica .env senza dipendenze esterne (Node 20.6+ ha process.loadEnvFile,
// ma restiamo compatibili anche senza).
function loadEnv() {
  const envPath = path.join(ROOT, '.env');
  if (!existsSync(envPath)) return;
  for (const line of readFileSync(envPath, 'utf8').split('\n')) {
    const m = /^([A-Z_][A-Z0-9_]*)\s*=\s*(.*)\s*$/.exec(line);
    if (!m) continue;
    const [, key, rawValue] = m;
    const value = rawValue.replace(/^["']|["']$/g, '');
    if (!(key in process.env)) process.env[key] = value;
  }
}
loadEnv();

const args = process.argv.slice(2);
const getArg = (name) => {
  const i = args.indexOf(name);
  return i >= 0 && i + 1 < args.length ? args[i + 1] : null;
};
const hasFlag = (name) => args.includes(name);

const slug = getArg('--slug');
const model = getArg('--model') || 'google/gemini-3-pro-image';
const heroW = Number(getArg('--hero-width') || 960);
const heroH = Number(getArg('--hero-height') || 540);
const cardW = Number(getArg('--card-width') || 640);
const cardH = Number(getArg('--card-height') || 360);
const dryRun = hasFlag('--dry-run');

if (!slug) {
  console.error('Serve --slug <nome-file-senza-estensione>');
  process.exit(1);
}

function extractPrompt() {
  const direct = getArg('--prompt');
  if (direct) return direct.trim();
  const filePath = getArg('--prompt-file');
  if (!filePath) {
    console.error('Serve --prompt "testo" oppure --prompt-file <path>');
    process.exit(1);
  }
  const raw = readFileSync(path.resolve(ROOT, filePath), 'utf8');
  const fenced = raw.match(/```(?:\w+)?\n([\s\S]*?)```/);
  const text = fenced ? fenced[1] : raw;
  return text.replace(/\s+/g, ' ').trim();
}

const prompt = extractPrompt();

if (dryRun) {
  console.log('Modello:', model);
  console.log('Prompt:\n' + prompt);
  process.exit(0);
}

const apiKey = process.env.OPENROUTER_API_KEY;
if (!apiKey) {
  console.error('OPENROUTER_API_KEY non trovata: mettila in .env (mai in questo file o in chat).');
  process.exit(1);
}

console.log('Genero con', model, '...');
const res = await fetch('https://openrouter.ai/api/v1/images', {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${apiKey}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    model,
    prompt,
    resolution: '2K',
    aspect_ratio: '16:9',
    quality: 'high',
    output_format: 'png',
    n: 1,
  }),
});

if (!res.ok) {
  const body = await res.text();
  console.error(`OpenRouter ha risposto ${res.status}:`, body.slice(0, 2000));
  process.exit(1);
}

const json = await res.json();
const item = json.data?.[0];
if (!item?.b64_json) {
  console.error('Risposta senza immagine:', JSON.stringify(json).slice(0, 2000));
  process.exit(1);
}

const buffer = Buffer.from(item.b64_json, 'base64');
if (!existsSync(ASSETS)) mkdirSync(ASSETS, { recursive: true });

const heroPath = path.join(ASSETS, `${slug}.webp`);
const cardPath = path.join(ASSETS, `${slug}-card.webp`);

await sharp(buffer).resize(heroW, heroH, { fit: 'cover' }).webp({ quality: 86, effort: 6 }).toFile(heroPath);
await sharp(buffer).resize(cardW, cardH, { fit: 'cover' }).webp({ quality: 86, effort: 6 }).toFile(cardPath);

const cost = json.usage?.cost;
console.log('Salvate:');
console.log(' ', path.relative(ROOT, heroPath), `(${heroW}x${heroH})`);
console.log(' ', path.relative(ROOT, cardPath), `(${cardW}x${cardH})`);
if (cost != null) console.log('Costo:', `$${cost}`);

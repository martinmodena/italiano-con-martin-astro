#!/usr/bin/env node
/**
 * Compone la testata di una lezione di vocabolario (1280x853) con le foto delle sue schede, invece di
 * generarla con un modello (decisione del 2026-09-26: Martin vuole spendere poco per le immagini).
 * Le foto delle schede sono quadrate con la persona al centro: da ognuna si prende la striscia centrale
 * e le strisce si mettono in fila su due righe.
 *
 * Uso:
 *   node scripts/build-collage-hero.mjs --subdir mestieri --out mestieri-hero.webp \
 *     --slugs cuoco,dottore,vigile-del-fuoco,pilota,contadino,giudice,pizzaiolo,meccanico,ballerino,poliziotto,pittore,idraulico
 */

import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const arg = (name) => {
  const i = args.indexOf(name);
  return i > -1 ? args[i + 1] : null;
};

const subdir = arg('--subdir');
const out = arg('--out');
const slugs = (arg('--slugs') ?? '').split(',').filter(Boolean);
if (!subdir || !out || slugs.length % 2) {
  console.error('Servono --subdir, --out e un numero pari di --slugs.');
  process.exit(1);
}

const W = 1280;
const H = 853;
const cols = slugs.length / 2;
const cellW = Math.floor(W / cols);
const cellH = Math.floor(H / 2);

const tiles = await Promise.all(
  slugs.map(async (slug, i) => {
    const file = path.join(root, 'public/assets/vocabolario', subdir, `${slug}.webp`);
    const { width, height } = await sharp(file).metadata();
    // La striscia centrale con le stesse proporzioni della cella.
    const stripW = Math.round((height * cellW) / cellH);
    const input = await sharp(file)
      .flatten({ background: '#ffffff' })
      .extract({ left: Math.round((width - stripW) / 2), top: 0, width: stripW, height })
      .resize(cellW, cellH)
      .toBuffer();
    return { input, left: (i % cols) * cellW + Math.floor((W - cols * cellW) / 2), top: Math.floor(i / cols) * cellH };
  })
);

await sharp({ create: { width: W, height: H, channels: 3, background: '#ffffff' } })
  .composite(tiles)
  .webp({ quality: 86, effort: 6 })
  .toFile(path.join(root, 'public/assets/vocabolario', out));
console.log(`public/assets/vocabolario/${out}`);

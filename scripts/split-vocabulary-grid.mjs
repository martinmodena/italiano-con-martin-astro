/**
 * Taglia una griglia di illustrazioni in immagini singole.
 *
 * Serve a generare molte illustrazioni con poche richieste: si chiede a
 * ChatGPT una sola immagine con piu' oggetti disposti a griglia su sfondo
 * bianco, e questo script la ritaglia in un file per oggetto, gia' pronto per
 * `expand-food-vocabulary.mjs --images`.
 *
 * Ogni riquadro viene rifilato attorno all'oggetto (lo sfondo bianco in
 * eccesso viene tolto), quindi non serve che la griglia sia perfetta: basta
 * che gli oggetti siano ben separati e in ordine di lettura, da sinistra a
 * destra e dall'alto in basso.
 *
 * Uso:
 *   node scripts/split-vocabulary-grid.mjs <immagine> <colonne>x<righe> <slug1,slug2,...> [cartella-uscita]
 *
 * Esempio (griglia di 9 oggetti, 3 per riga):
 *   node scripts/split-vocabulary-grid.mjs griglia1.png 3x3 pizza,panino,spaghetti,lasagne,gnocchi,risotto,zuppa,prosciutto,pollo
 *
 * Le immagini finiscono in `work/vocabolario-grezze/` salvo diversa indicazione.
 */

import { mkdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const [source, geometry, slugList, outputArg] = process.argv.slice(2);

if (!source || !geometry || !slugList) {
  console.error('Uso: node scripts/split-vocabulary-grid.mjs <immagine> <colonne>x<righe> <slug1,slug2,...> [cartella-uscita]');
  process.exit(1);
}

const match = /^(\d+)x(\d+)$/.exec(geometry);
if (!match) {
  console.error(`Griglia non valida: "${geometry}". Esempio corretto: 3x3`);
  process.exit(1);
}
const [columns, rows] = [Number(match[1]), Number(match[2])];
const slugs = slugList
  .split(',')
  .map((slug) => slug.trim())
  .filter(Boolean);

if (slugs.length > columns * rows) {
  console.error(`Hai indicato ${slugs.length} nomi ma la griglia ha ${columns * rows} riquadri.`);
  process.exit(1);
}

const outputDir = path.resolve(outputArg ?? path.join(root, 'work', 'vocabolario-grezze'));
mkdirSync(outputDir, { recursive: true });

const image = sharp(path.resolve(source));
const { width, height } = await image.metadata();
const cellWidth = Math.floor(width / columns);
const cellHeight = Math.floor(height / rows);

for (const [index, slug] of slugs.entries()) {
  const column = index % columns;
  const row = Math.floor(index / columns);
  const target = path.join(outputDir, `${slug}.png`);
  // Il ritaglio e la rifilatura vanno fatti in due passaggi: dentro una sola
  // pipeline sharp applicherebbe `trim` prima di `extract`, spostando i
  // riquadri.
  const cell = await sharp(path.resolve(source))
    .extract({ left: column * cellWidth, top: row * cellHeight, width: cellWidth, height: cellHeight })
    .toBuffer();
  // Rifila il bianco attorno all'oggetto: cosi' ogni oggetto riempie il suo
  // riquadro anche se nella griglia era piccolo o decentrato.
  await sharp(cell).trim({ background: '#ffffff', threshold: 12 }).png().toFile(target);
  console.log(`${slug}.png`);
}

console.log(`\n${slugs.length} immagini in ${path.relative(root, outputDir)}`);
console.log('Controllale, poi lancia:');
console.log(`  node scripts/expand-food-vocabulary.mjs --images "${path.relative(root, outputDir)}"`);

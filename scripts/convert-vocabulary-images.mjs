#!/usr/bin/env node
// Converte le immagini grezze di una scheda di vocabolario nel formato del
// sito: 512x512, webp, soggetto centrato su tela trasparente.
//
// Vale per qualunque lezione (il cibo ha il suo passaggio dentro
// expand-food-vocabulary.mjs; questo serve per le lezioni nuove).
//
// Le immagini in ingresso devono essere GIA' ripulite dallo sfondo con
// `python scripts/remove-white-background.py`: qui non si tocca lo sfondo.
//
// Uso:
//   node scripts/convert-vocabulary-images.mjs <cartella-immagini-pulite> [--subdir <nome>]
//
// Con --subdir le immagini vanno in public/assets/vocabolario/<nome>/ (le lezioni con
// molte parole, come gli animali, tengono le loro foto in una sottocartella).

import { existsSync, mkdirSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const subdirIndex = process.argv.indexOf('--subdir');
const subdir = subdirIndex >= 0 ? process.argv[subdirIndex + 1] : '';
const assetsDir = path.join(root, 'public/assets/vocabolario', subdir);

const source = process.argv[2];
if (!source) {
  console.error('Uso: node scripts/convert-vocabulary-images.mjs <cartella>');
  process.exit(1);
}
if (!existsSync(assetsDir)) mkdirSync(assetsDir, { recursive: true });

const files = readdirSync(source).filter((f) => /\.(png|jpe?g|webp)$/i.test(f));
if (!files.length) {
  console.error(`Nessuna immagine in ${source}`);
  process.exit(1);
}

for (const file of files) {
  const slug = path.parse(file).name.toLowerCase();
  const target = path.join(assetsDir, `${slug}.webp`);
  const resized = await sharp(path.join(source, file))
    .ensureAlpha()
    .resize(460, 460, { fit: 'inside', withoutEnlargement: false })
    .toBuffer();
  await sharp({
    create: { width: 512, height: 512, channels: 4, background: { r: 255, g: 255, b: 255, alpha: 0 } },
  })
    .composite([{ input: resized, gravity: 'centre' }])
    .webp({ quality: 84, effort: 6 })
    .toFile(target);
  console.log(slug);
}

console.log(`\nConvertite: ${files.length} in ${path.relative(root, assetsDir).replaceAll('\\', '/')}/`);

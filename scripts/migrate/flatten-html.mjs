// Appiattisce le rotte `X.html/index.html` prodotte da Astro in file `X.html`,
// per conservare gli URL storici del sito (es. /favole/il-cane-e-losso.html).
// Eseguito automaticamente dopo `astro build` (vedi script "build" in package.json).

import { existsSync, readdirSync, renameSync, rmSync } from 'node:fs';
import path from 'node:path';

const distDir = path.join(process.cwd(), 'dist');

function walkDirs(dir) {
  return readdirSync(dir, { withFileTypes: true })
    .filter((e) => e.isDirectory())
    .flatMap((e) => {
      const fullPath = path.join(dir, e.name);
      return [fullPath, ...walkDirs(fullPath)];
    });
}

let flattened = 0;
// Dal più profondo al meno profondo, così le cartelle si svuotano in ordine
const dirs = walkDirs(distDir).sort((a, b) => b.length - a.length);
for (const dir of dirs) {
  if (!/\.html?$/i.test(dir)) continue;
  const indexFile = path.join(dir, 'index.html');
  if (!existsSync(indexFile)) continue;
  const leftovers = readdirSync(dir).filter((name) => name !== 'index.html');
  if (leftovers.length > 0) {
    console.error(`ATTENZIONE: ${dir} contiene altri file oltre a index.html: ${leftovers.join(', ')}`);
    process.exitCode = 1;
    continue;
  }
  const tmp = `${dir}.__flatten__`;
  renameSync(indexFile, tmp);
  rmSync(dir, { recursive: true });
  renameSync(tmp, dir);
  flattened += 1;
}

console.log(`Rotte .html appiattite: ${flattened}`);

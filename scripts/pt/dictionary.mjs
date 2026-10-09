#!/usr/bin/env node
// Dizionario spagnolo → portoghese brasiliano delle frasi di servizio.
//
// Il file scripts/data/pt/dicionario.txt è fatto di coppie separate da una
// riga vuota:
//
//   es: Escribe la forma correcta.
//   pt: Escreva a forma correta.
//
// Per le frasi con un numero si usa un'espressione regolare:
//
//   re: ^Ejercicio (\d+)$
//   pt: Exercício $1
//
// Le note scritte per chi parla spagnolo («en español…») non si traducono:
// si riscrivono per chi parla portoghese.
//
// Unire le traduzioni nuove:
//   node scripts/pt/dictionary.mjs merge work/pt-traduzioni.txt
// dove work/pt-traduzioni.txt ripete i numeri di work/pt-mancanti.txt:
//   #1
//   Escreva a forma correta.

import { readFileSync, existsSync, appendFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = process.cwd();
const FILE = path.join(ROOT, 'scripts/data/pt/dicionario.txt');
const norm = (s) => s.replace(/\s+/g, ' ').trim();

export function loadDictionary() {
  const exact = new Map();
  const patterns = [];
  if (existsSync(FILE)) {
    for (const block of readFileSync(FILE, 'utf8').split(/\r?\n\s*\r?\n/)) {
      const lines = block.split(/\r?\n/).filter((l) => l.trim() && !l.startsWith('//'));
      if (!lines.length) continue;
      const src = lines.find((l) => /^(es|re): /.test(l));
      const dst = lines.find((l) => l.startsWith('pt: '));
      if (!src || !dst) throw new Error(`Voce del dizionario incompleta:\n${block}`);
      const value = dst.slice(4).trim();
      if (src.startsWith('re: ')) patterns.push([new RegExp(src.slice(4).trim()), value]);
      else exact.set(norm(src.slice(4)), value);
    }
  }
  return {
    size: exact.size + patterns.length,
    lookup(key) {
      if (exact.has(key)) return exact.get(key);
      for (const [re, value] of patterns) if (re.test(key)) return key.replace(re, value);
      return undefined;
    },
  };
}

function merge(translationsFile) {
  const missing = readFileSync(path.join(ROOT, 'work/pt-mancanti.txt'), 'utf8');
  const sources = new Map();
  for (const block of missing.split(/\r?\n(?=#\d+ )/)) {
    const m = block.match(/^#(\d+) \[[^\]]*\]\r?\n([\s\S]*?)\s*$/);
    if (m) sources.set(m[1], norm(m[2]));
  }
  const out = [];
  let n = 0;
  for (const block of readFileSync(translationsFile, 'utf8').split(/\r?\n(?=#\d+\s*\r?\n)/)) {
    const m = block.match(/^#(\d+)\s*\r?\n([\s\S]*?)\s*$/);
    if (!m) continue;
    const es = sources.get(m[1]);
    if (!es) throw new Error(`Numero #${m[1]} assente da work/pt-mancanti.txt`);
    out.push(`es: ${es}\npt: ${norm(m[2])}\n`);
    n++;
  }
  appendFileSync(FILE, `\n${out.join('\n')}`);
  console.log(`Aggiunte ${n} voci al dizionario (su ${sources.size} mancanti).`);
}

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  if (process.argv[2] === 'merge') merge(process.argv[3]);
  else console.log(`Voci nel dizionario: ${loadDictionary().size}`);
}

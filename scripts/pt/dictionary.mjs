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
import { STORIE } from '../data/storie-it.mjs';
import { STORIE_I18N, ORIGINI } from '../data/storie-i18n.mjs';
import { STORIE_PT } from '../data/storie-pt.mjs';

const ROOT = process.cwd();
const FILE = path.join(ROOT, 'scripts/data/pt/dicionario.txt');
const norm = (s) => s.replace(/\s+/g, ' ').trim();

// Le favole straniere (2026-10-30): le frasi portoghesi stanno in storie-pt.mjs, scritte per chi parla
// portoghese; qui si abbinano a quelle spagnole, comprese le righe che create-science-stories.mjs compone.
function addStories(exact, keys) {
  const set = (es, pt) => (exact.set(norm(es), norm(pt)), keys.add(norm(es)));
  const it = (s) => s.replace(/<it>/g, '<span lang="it">').replace(/<\/it>/g, '</span>');
  const amp = (s) => s.replace(/ & /g, ' &amp; ');
  const wordLine = (lv, words) => lv.words.map((w, i) => `<span lang="it">${w}</span> = ${it(words[i])}`).join('<br>');
  for (const r of STORIE) {
    const P = STORIE_PT[r.key];
    if (!P) continue;
    const E = STORIE_I18N[r.key].es;
    for (const k of ['title', 'seoTitle', 'seoDesc', 'lead', 'hook', 'alt']) set(E[k], P[k]);
    const levels = r.levels.map((l) => l.id.toUpperCase()).join(' · ');
    const [from, to] = [ORIGINI.es[r.origin], ORIGINI.pt[r.origin]];
    set(`${from} · ${levels}`, `${to} · ${levels}`);
    set(`Cuento · ${from} · ${levels}`, `Conto · ${to} · ${levels}`);
    for (const l of r.levels) set(`Cuento · ${from} · ${l.id.toUpperCase()}`, `Conto · ${to} · ${l.id.toUpperCase()}`);
    for (const lv of r.levels) {
      const [e, p] = [E[lv.id], P[lv.id]];
      set(it(e.focus), it(p.focus));
      set(e.hook, p.hook);
      lv.box.forEach((l, i) => set(`<span lang="it">${amp(l)}</span> → ${it(e.box[i])}`, `<span lang="it">${amp(l)}</span> → ${it(p.box[i])}`));
      set(`${e.tryLabel} <span lang="it"><em>${lv.tryIt}</em></span>`, `${p.tryLabel} <span lang="it"><em>${lv.tryIt}</em></span>`);
      set(`Repasa: <a href="§1">${e.link}</a>`, `Revise: <a href="§1">${p.link}</a>`);
      set(wordLine(lv, e.words), wordLine(lv, p.words));
      (e.q || []).forEach((q, i) => set(q, p.q[i]));
    }
  }
}

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
  const storyKeys = new Set();
  addStories(exact, storyKeys);
  return {
    size: exact.size + patterns.length,
    storyKeys,
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

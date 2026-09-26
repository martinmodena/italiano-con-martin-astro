#!/usr/bin/env node
/**
 * Disegna le immagini della lezione «La famiglia» a partire dai 17 ritagli della famiglia Rossi
 * (scripts/data/famiglia-rossi/<nome>.png, sfondo trasparente). Nessuna chiamata a un modello: costo zero.
 *
 *   public/assets/vocabolario/famiglia-hero.webp     l'albero intero con i nomi (1280x853, testata)
 *   public/assets/vocabolario/famiglia/<slug>.webp    una scheda per parola (512x512)
 *
 * In ogni scheda l'albero e' sbiadito; restano a colori chi parla (stella arancione), la persona
 * della parola (riquadro blu) e, a meta', le persone che le collegano. La scheda e' ingrandita su
 * quella parte dell'albero.
 *
 * Uso: node scripts/build-family-images.mjs [--only zio,zia]
 * Prompt dei due fogli di personaggi da cui vengono i ritagli: docs/prompt-immagini-famiglia.md.
 */

import { readFileSync, mkdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import { FAMILY, familyVocabulary } from './data/family-vocabulary.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const castDir = path.join(root, 'scripts/data/famiglia-rossi');
const outDir = path.join(root, 'public/assets/vocabolario');
const onlyArg = process.argv.indexOf('--only');
const only = onlyArg > -1 ? new Set(process.argv[onlyArg + 1].split(',')) : null;

const names = Object.keys(FAMILY.people);
const cast = {};
for (const n of names) {
  const file = path.join(castDir, `${n}.png`);
  const meta = await sharp(file).metadata();
  cast[n] = { w: meta.width, h: meta.height, href: `data:image/png;base64,${readFileSync(file).toString('base64')}` };
}

// --- geometria dell'albero -------------------------------------------------------------
// Un adulto e' alto ~560 px nel ritaglio; K lo porta a ~170 px nella testata.
const K = 0.29;
const W = 1280;
const H = 853;
const X0 = 95;
const U = (W - 2 * X0) / 7.25;
const ROW = 206;
const TOP = 16;
const NAME_SPACE = 34;

const box = (n) => {
  const { gen, col } = FAMILY.people[n];
  const w = cast[n].w * K;
  const h = cast[n].h * K;
  const cx = X0 + col * U;
  const base = TOP + gen * ROW + ROW - NAME_SPACE;
  return { cx, base, w, h, x: cx - w / 2, y: base - h };
};

// --- il percorso fra chi parla e la persona della parola --------------------------------
const edges = new Map(names.map((n) => [n, new Set()]));
for (const [a, b, kids] of FAMILY.couples) {
  edges.get(a).add(b);
  edges.get(b).add(a);
  for (const k of kids) {
    for (const p of [a, b]) {
      edges.get(p).add(k);
      edges.get(k).add(p);
    }
  }
}
function pathBetween(from, to) {
  const prev = new Map([[from, null]]);
  const queue = [from];
  while (queue.length) {
    const n = queue.shift();
    if (n === to) break;
    for (const m of edges.get(n)) {
      if (prev.has(m)) continue;
      prev.set(m, n);
      queue.push(m);
    }
  }
  const out = [];
  for (let n = to; n; n = prev.get(n)) out.push(n);
  return out;
}

// --- SVG ------------------------------------------------------------------------------
const LINE = '#96785a';
const ORANGE = '#f5a623';
const BLUE = '#2e8bc8';

function star(cx, cy, r) {
  const pts = [];
  for (let i = 0; i < 10; i += 1) {
    const rr = i % 2 === 0 ? r : r * 0.45;
    const a = (i * Math.PI) / 5;
    pts.push(`${(cx + rr * Math.sin(a)).toFixed(1)},${(cy - rr * Math.cos(a)).toFixed(1)}`);
  }
  return `<polygon points="${pts.join(' ')}" fill="${ORANGE}" stroke="#c77a0a" stroke-width="2"/>`;
}

function lines(opacity) {
  const out = [];
  for (const [a, b, kids] of FAMILY.couples) {
    const A = box(a);
    const B = box(b);
    const y = A.base - A.h * 0.55;
    const mx = (A.cx + B.cx) / 2;
    const bar = Math.min(...kids.map((k) => box(k).y)) - 12;
    const xs = [...kids.map((k) => box(k).cx), mx];
    out.push(
      `<path d="M${A.cx} ${y}H${B.cx}M${mx} ${y}V${bar}M${Math.min(...xs)} ${bar}H${Math.max(...xs)}${kids
        .map((k) => `M${box(k).cx} ${bar}V${box(k).y + 4}`)
        .join('')}" stroke="${LINE}" stroke-width="3" fill="none" opacity="${opacity}"/>`
    );
  }
  return out.join('');
}

const person = (n, opacity = 1) => {
  const b = box(n);
  return `<image href="${cast[n].href}" x="${b.x.toFixed(1)}" y="${b.y.toFixed(1)}" width="${b.w.toFixed(1)}" height="${b.h.toFixed(1)}" opacity="${opacity}"/>`;
};

const frame = (n, color) => {
  const b = box(n);
  const pad = 7;
  return `<rect x="${(b.x - pad).toFixed(1)}" y="${(b.y - pad).toFixed(1)}" width="${(b.w + 2 * pad).toFixed(1)}" height="${(b.h + 2 * pad).toFixed(1)}" rx="16" fill="${color}" fill-opacity="0.16" stroke="${color}" stroke-width="5"/>`;
};

const svg = (body) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}"><rect width="${W}" height="${H}" fill="#fff"/>${body}</svg>`;

// --- la testata: l'albero intero, con i nomi -------------------------------------------
async function hero() {
  const labels = names
    .map((n) => {
      const b = box(n);
      const label = n.charAt(0).toUpperCase() + n.slice(1);
      return `<text x="${b.cx}" y="${b.base + 24}" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="21" fill="#4a3c2e">${label}</text>`;
    })
    .join('');
  const body = lines(1) + names.map((n) => person(n)).join('') + labels;
  mkdirSync(outDir, { recursive: true });
  await sharp(Buffer.from(svg(body)))
    .webp({ quality: 88, effort: 6 })
    .toFile(path.join(outDir, 'famiglia-hero.webp'));
  console.log('famiglia-hero.webp');
}

// --- una scheda per parola --------------------------------------------------------------
const SCALE = 3; // l'albero si disegna grande, poi si ritaglia la parte che serve
async function card(word) {
  const lit = new Set([word.ref, ...word.targets].filter(Boolean));
  const via = new Set();
  if (word.ref) for (const t of word.targets) for (const n of pathBetween(word.ref, t)) if (!lit.has(n)) via.add(n);
  const everyone = word.targets.length === names.length || word.targets.length >= names.length - 1;

  const body =
    lines(everyone ? 1 : 0.35) +
    names
      .filter((n) => !lit.has(n) && !via.has(n))
      .map((n) => person(n, 0.2))
      .join('') +
    [...via].map((n) => person(n, 0.55)).join('') +
    word.targets.map((n) => frame(n, BLUE)).join('') +
    (word.ref ? frame(word.ref, ORANGE) : '') +
    [...lit].map((n) => person(n)).join('') +
    (word.ref ? star(box(word.ref).cx, box(word.ref).y - 26, 22) : '');

  // La parte da tenere: le persone coinvolte, con margine, resa quadrata.
  const focus = [...lit, ...via].map(box);
  let x0 = Math.min(...focus.map((b) => b.x)) - 30;
  let x1 = Math.max(...focus.map((b) => b.x + b.w)) + 30;
  let y0 = Math.min(...focus.map((b) => b.y)) - 60;
  let y1 = Math.max(...focus.map((b) => b.base)) + 22;
  let side = Math.max(x1 - x0, y1 - y0, 330);
  side = Math.min(side, W);
  const cx = (x0 + x1) / 2;
  const cy = (y0 + y1) / 2;
  x0 = Math.min(Math.max(cx - side / 2, 0), W - side);
  y0 = cy - side / 2;
  // Se il quadrato esce sopra o sotto, si allarga la tela con del bianco (l'albero e' piu' largo che alto).
  const big = await sharp(Buffer.from(svg(body)), { density: 72 * SCALE })
    .extend({ top: 400 * SCALE, bottom: 400 * SCALE, background: '#ffffff' })
    .png()
    .toBuffer();
  const region = {
    left: Math.round(x0 * SCALE),
    top: Math.round((y0 + 400) * SCALE),
    width: Math.round(side * SCALE),
    height: Math.round(side * SCALE),
  };
  await sharp(big)
    .extract(region)
    .resize(512, 512)
    .webp({ quality: 86, effort: 6 })
    .toFile(path.join(outDir, `${word.image}.webp`));
  console.log(`${word.image}.webp`);
}

mkdirSync(path.join(outDir, 'famiglia'), { recursive: true });
if (!only) await hero();
for (const w of familyVocabulary) if (!only || only.has(w.slug)) await card(w);

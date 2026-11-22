// Pagine più leggere, dopo la build (lanciato da `npm run build`). Vedi DECISIONI_SITO.md, 2026-11-22 (pagine più leggere).
//
// 1. Immagini responsive: per le immagini mostrate piccole (schede delle storie, categorie del
//    vocabolario, chip degli esercizi, foto degli insegnanti…) aggiunge `srcset` e `sizes` con
//    versioni ridotte in WebP, create in dist/assets/r/. Il `src` resta quello di sempre: link,
//    PDF (generate-pdfs.py legge src), Open Graph e immagini già indicizzate non cambiano.
// 2. Logo in alto (martin-photo.svg, 19 KB con una foto dentro): versioni WebP da 96 e 144 px.
// 3. CSS e JS locali con `?v=<impronta del contenuto>`: dopo una modifica il browser li riprende
//    subito, senza dover alzare a mano i numeri di versione.
//
// Le versioni ridotte si tengono in .cache/responsive-images (ignorata da git; nel deploy con
// actions/cache), così una build non le ricrea tutte. Nessun file di public/ viene toccato.
import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync, copyFileSync, statSync } from 'node:fs';
import { dirname, join, relative, sep, posix } from 'node:path';
import sharp from 'sharp';

const DIST = 'dist';
const CACHE = '.cache/responsive-images'; // fuori da node_modules: npm ci la cancellerebbe
const OUT = 'assets/r';
const QUALITY = 70;

// Dove e quanto grande si vede l'immagine (CSS di styles.css, vocabulary.css, match.css).
// `sizes` sbagliato per eccesso = byte in più; per difetto = immagine sfocata: meglio largo.
// Con object-fit: cover conta il lato che riempie: una scheda 320x230 con foto 16:9 ne vuole 410.
const CONTEXTS = [
  { test: (t, p) => /class="story-tile/.test(p), sizes: '(max-width:580px) calc((100vw - 64px) * 1.26), (max-width:900px) calc((50vw - 68px) * 1.26), 410px', widths: [480] },
  { test: (t, p) => /class="vocabulary-category/.test(p), sizes: '(max-width:580px) calc(100vw - 26px), (max-width:900px) calc(50vw - 30px), 380px', widths: [400, 640, 960] },
  { test: (t, p) => /class="match-chip/.test(p), sizes: '56px', widths: [64, 112, 168] },
  { test: (t, p) => /class="word-test/.test(p), sizes: '(max-width:580px) 140px, 270px', widths: [160, 384] },
  // Le schede delle parole sono alte e strette (object-fit: cover): conta l'altezza.
  { test: (t, p) => /class="word-card"/.test(p), sizes: '(max-width:580px) 380px, 340px', widths: [384] },
  // La foto in cima alle storie no: si vede larga 730 px già sul computer (cover), varianti inutili.
  { test: (t) => /class="teacher-photo"/.test(t), sizes: '(max-width:580px) 220px, (max-width:900px) 390px, 300px', widths: [320, 480, 640] },
  { test: (t, p) => /class="teacher-cta/.test(p), sizes: '76px', widths: [96, 160] },
  { test: (t, p) => /class="teacher-card/.test(p), sizes: '(max-width:580px) 220px, 150px', widths: [160] },
  { test: (t, p) => /class="about-portraits/.test(p), sizes: '180px', widths: [192, 360] },
  { test: (t, p) => /class="about-teacher/.test(p), sizes: '(max-width:900px) min(82vw, 390px), 390px', widths: [400, 640] },
];

const hash = (data) => createHash('sha1').update(data).digest('hex');
const posixPath = (p) => p.split(sep).join('/');

function* htmlFiles(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) yield* htmlFiles(full);
    else if (entry.name.endsWith('.html')) yield full;
  }
}

// Percorso nel sito (dist) di un src relativo alla pagina; null se esterno o non raster.
function sitePath(page, src) {
  if (/^(https?:|data:|\/\/)/.test(src)) return null;
  const clean = src.split(/[?#]/)[0];
  if (!/\.(webp|png|jpe?g)$/i.test(clean)) return null;
  let decoded = clean;
  try {
    decoded = decodeURI(clean);
  } catch {
    return null;
  }
  const pageDir = posixPath(dirname(relative(DIST, page)));
  const path = decoded.startsWith('/') ? decoded.slice(1) : posix.normalize(posix.join(pageDir, decoded));
  return path.startsWith('..') ? null : path;
}

mkdirSync(CACHE, { recursive: true });
const variants = new Map(); // percorso -> srcset (o null)
let created = 0, reused = 0;

async function variantSet(path, widths) {
  const key = `${path} ${widths}`;
  if (variants.has(key)) return variants.get(key);
  const file = join(DIST, path);
  if (!existsSync(file)) return variants.set(key, null).get(key);
  const data = readFileSync(file);
  const id = hash(data).slice(0, 12);
  const meta = await sharp(data).metadata();
  const width = meta.width;
  const base = path.replace(/^assets\//, '').replace(/\.(webp|png|jpe?g)$/i, '');
  const entries = [];
  const wanted = widths.filter((w) => w <= width * 0.8);
  for (const w of [...wanted, width]) {
    const name = `${OUT}/${base}-${w}.webp`;
    const cached = join(CACHE, `${id}-${w}.webp`);
    if (existsSync(cached)) reused++;
    else {
      const img = sharp(data).resize({ width: w, withoutEnlargement: true });
      writeFileSync(cached, await img.webp({ quality: QUALITY, effort: 5, alphaQuality: 90 }).toBuffer());
      created++;
    }
    // La versione a larghezza piena serve solo se è davvero più leggera dell'originale.
    if (w === width && statSync(cached).size > data.length * 0.85) {
      entries.push(`/${encodeURI(path)} ${w}w`);
      continue;
    }
    mkdirSync(dirname(join(DIST, name)), { recursive: true });
    copyFileSync(cached, join(DIST, name));
    entries.push(`/${encodeURI(name)} ${w}w`);
  }
  const value = entries.length > 1 || !entries[0]?.startsWith(`/${encodeURI(path)} `) ? entries.join(', ') : null;
  variants.set(key, value);
  return value;
}

// Logo: la foto JPEG dentro l'SVG, ritagliata come nel viewBox.
async function avatarSet() {
  const svgFile = join(DIST, 'assets/martin-photo.svg');
  if (!existsSync(svgFile)) return null;
  const svg = readFileSync(svgFile, 'utf8');
  const box = svg.match(/viewBox="([\d.]+) ([\d.]+) ([\d.]+) ([\d.]+)"/);
  const jpeg = svg.match(/href="data:image\/jpeg;base64,([^"]+)"/);
  const size = svg.match(/<image width="(\d+)" height="(\d+)"/);
  if (!box || !jpeg || !size) throw new Error('martin-photo.svg ha cambiato forma: aggiornare optimize-dist.mjs');
  const [x, y, w, h] = box.slice(1).map(Number);
  const photo = Buffer.from(jpeg[1], 'base64');
  const meta = await sharp(photo).metadata();
  const scale = meta.width / Number(size[1]);
  const entries = [];
  for (const px of [96, 144]) {
    const name = `${OUT}/martin-avatar-${px}.webp`;
    mkdirSync(join(DIST, OUT), { recursive: true });
    await sharp(photo)
      .extract({ left: Math.round(x * scale), top: Math.round(y * scale), width: Math.round(w * scale), height: Math.round(h * scale) })
      .resize(px, px)
      .webp({ quality: 78 })
      .toFile(join(DIST, name));
    entries.push(`/${name} ${px}w`);
  }
  return entries.join(', ');
}

// Impronte di CSS e JS.
const fingerprints = new Map();
function fingerprint(path) {
  if (!fingerprints.has(path)) {
    const file = join(DIST, path);
    fingerprints.set(path, existsSync(file) ? hash(readFileSync(file)).slice(0, 10) : null);
  }
  return fingerprints.get(path);
}

const avatar = await avatarSet();
let pages = 0, images = 0, assets = 0;
for (const page of htmlFiles(DIST)) {
  let html = readFileSync(page, 'utf8');
  if (html.includes('http-equiv="refresh"')) continue;
  const before = html;
  const pageDir = posixPath(dirname(relative(DIST, page)));

  // Immagini: si guarda il tag e i 300 caratteri prima (la scheda che lo contiene).
  const tags = [...html.matchAll(/<img\b[^>]*>/g)];
  const replacements = [];
  for (const m of tags) {
    const tag = m[0];
    if (/\ssrcset=/.test(tag)) continue;
    if (/class="brand-avatar"/.test(tag) && /martin-photo\.svg"/.test(tag) && avatar) {
      replacements.push([m.index, tag, tag.replace('<img ', `<img srcset="${avatar}" sizes="48px" `)]);
      continue;
    }
    const src = tag.match(/\ssrc="([^"]+)"/)?.[1];
    if (!src) continue;
    const context = CONTEXTS.find((c) => c.test(tag, html.slice(Math.max(0, m.index - 300), m.index)));
    if (!context) continue;
    const path = sitePath(page, src);
    if (!path) continue;
    const set = await variantSet(path, context.widths);
    if (!set) continue;
    // Niente `sizes="auto"`: Chrome userebbe la larghezza del riquadro e non quella che serve con cover.
    replacements.push([m.index, tag, tag.replace('<img ', `<img srcset="${set}" sizes="${context.sizes}" `)]);
    images++;
  }
  for (const [index, from, to] of replacements.reverse()) html = html.slice(0, index) + to + html.slice(index + from.length);

  // Indici del vocabolario: le barre del progresso (vocabulary-progress.js) arrivano dopo il primo
  // disegno e spostavano la griglia (CLS). Qui si mettono già vuote; lo script le sostituisce.
  if (html.includes('vocabulary-progress.js') && html.includes('<div class="vocabulary-grid') && !html.includes('course-progress-container')) {
    const bar = (cls, style = '') =>
      `<div class="${cls}"${style}><div class="progress-heading"><strong>&nbsp;</strong> <span>…</span></div><progress max="100" value="0"></progress></div>`;
    html = html.replace('<div class="vocabulary-grid', `<div class="course-progress-container">${bar('course-progress-summary')}</div><div class="vocabulary-grid`);
    html = html.replace(/(<a class="vocabulary-category[^"]*" href="[^"]+"[^>]*>(?:(?!<\/a>)[\s\S])*?)(<\/div><\/a>)/g,
      (all, start, end) => `${start}${bar('lesson-link-progress', ' style="margin-top:auto;padding-top:14px"')}${end}`);
  }

  // CSS e JS locali.
  html = html.replace(/(<(?:link[^>]*\shref|script[^>]*\ssrc)=")([^"]+\.(?:css|js))(?:\?v=[^"]*)?(")/g, (all, start, url, end) => {
    if (/^(https?:|\/\/)/.test(url)) return all;
    const path = url.startsWith('/') ? url.slice(1) : posix.normalize(posix.join(pageDir, url));
    const print = fingerprint(path);
    if (!print) return all;
    assets++;
    return `${start}${url}?v=${print}${end}`;
  });

  if (html !== before) {
    writeFileSync(page, html);
    pages++;
  }
}
console.log(`optimize-dist: ${pages} pagine, ${images} immagini con srcset, ${assets} CSS/JS con impronta; versioni create ${created}, riusate ${reused}.`);

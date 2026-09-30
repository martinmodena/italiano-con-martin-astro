// Metadati delle letture e delle favole che citano livelli assenti dalla pagina
// (2026-09-30): trim-reading-levels.mjs aveva corretto solo «A1–C1»; restavano
// «dal livello A1 al C1», «A1'den C1'e», «A1〜C1», «A1 から C1»… soprattutto in
// giapponese e nelle descrizioni tradotte a macchina. I livelli veri si leggono dai
// pulsanti .level-nav del frammento. Idempotente. Uso: node scripts/fix-reading-meta-levels.mjs [--dry-run]
import fs from 'fs';
import path from 'path';

const DRY = process.argv.includes('--dry-run');
const DIRS = [
  'letture',
  'favole',
  'en/readings',
  'en/stories',
  'es/lecturas',
  'es/cuentos',
  'fr/lectures',
  'fr/histoires',
  'cs/cteni',
  'cs/pribehy',
  'pl/czytanki',
  'pl/historie',
  'tr/okumalar',
  'tr/hikayeler',
  'de/lesetexte',
  'de/geschichten',
  'ja/dokkai',
  'ja/monogatari',
];
const META_RE = /const meta = (\{[^]*?\r?\n\s*\});\r?\n---/;
const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1'];
let changed = 0;
for (const d of DIRS)
  for (const f of fs.readdirSync(`src/pages/${d}`)) {
    if (!f.endsWith('.html.astro')) continue;
    const p = `src/pages/${d}/${f}`;
    const text = fs.readFileSync(p, 'utf8');
    const m = text.match(META_RE);
    const h = path.join('src/html', d, f.replace('.astro', ''));
    if (!m || !fs.existsSync(h)) continue;
    const nav = fs.readFileSync(h, 'utf8').match(/<div class="level-nav">([\s\S]*?)<\/div>/);
    if (!nav) continue;
    const lv = [...nav[1].matchAll(/#(a1|a2|b1|b2|c1)"/g)].map((x) => x[1].toUpperCase());
    const fix = (s) => {
      if (typeof s !== 'string' || !LEVELS.some((L) => !lv.includes(L) && new RegExp(`${L}(?![0-9])`).test(s)))
        return s;
      let out = s;
      if (!lv.includes('A1')) out = out.replace(/A1(?![0-9])/g, lv[0]);
      if (!lv.includes('C1')) out = out.replace(/C1(?![0-9])/g, lv[lv.length - 1]);
      return out;
    };
    const meta = JSON.parse(m[1]);
    const before = JSON.stringify(meta);
    meta.title = fix(meta.title);
    meta.description = fix(meta.description);
    meta.og = meta.og.map(([k, v]) => [k, fix(v)]);
    meta.jsonld = meta.jsonld.map(fix);
    if (JSON.stringify(meta) === before) continue;
    changed++;
    console.log(`${p}\n  ${meta.description}`);
    if (!DRY)
      fs.writeFileSync(
        p,
        text.replace(META_RE, () => `const meta = ${JSON.stringify(meta, null, 2)};\n---`)
      );
  }
console.log(`${changed} pagine${DRY ? ' (dry-run)' : ''}`);

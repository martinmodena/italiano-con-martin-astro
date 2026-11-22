// Peso del sito pubblicato: GitHub Pages ammette 1 GB. Vedi DECISIONI_SITO.md, 2026-11-22.
// Avvisa da 900 MB in su e se un PDF supera il peso normale; non blocca la pubblicazione.
// Uso: node scripts/audit-size.mjs   (cartella diversa: SITE_ROOT)
import { readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = process.env.SITE_ROOT || 'dist';
const MB = 1e6;
const SITE_WARN = 900 * MB;
const PDF_WARN = 2.5 * MB; // i più grandi: raccolta giapponese delle letture A1 (circa 1,7 MB) e libri di grammatica

let total = 0;
let pdfs = 0;
let pdfTotal = 0;
const heavy = [];
for (const entry of readdirSync(ROOT, { recursive: true, withFileTypes: true })) {
  if (!entry.isFile()) continue;
  const file = join(entry.parentPath, entry.name);
  const { size } = statSync(file);
  total += size;
  if (!entry.name.endsWith('.pdf')) continue;
  pdfs += 1;
  pdfTotal += size;
  if (size > PDF_WARN) heavy.push(`${file} (${(size / MB).toFixed(1)} MB)`);
}

const warn = (text) => console.log(`${process.env.GITHUB_ACTIONS ? '::warning::' : 'ATTENZIONE: '}${text}`);
console.log(`Peso del sito: ${(total / MB).toFixed(0)} MB su 1000; ${pdfs} PDF, ${(pdfTotal / MB).toFixed(0)} MB.`);
if (total >= SITE_WARN) warn(`il sito pesa ${(total / MB).toFixed(0)} MB, il limite di GitHub Pages è 1000 MB.`);
if (heavy.length) warn(`${heavy.length} PDF troppo pesanti: ${heavy.slice(0, 5).join(', ')}`);

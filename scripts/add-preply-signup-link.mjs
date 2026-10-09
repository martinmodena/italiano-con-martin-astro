// Aggiunge il link di iscrizione a Preply (programma «invita un amico» di Martin)
// nel riquadro finale «Scegli con chi imparare italiano» di ogni pagina, nelle 9 lingue.
// Idempotente: se il link c'è già ne aggiorna solo il testo.
// Sconto verificato il 2026-10-09: 30% sulla prima lezione di prova per chi è nuovo su Preply
// (help.preply.com, «Tutor referral program»); a Martin 25 $ quando lo studente si abbona.
// Uso: node scripts/add-preply-signup-link.mjs [--dry-run]
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import path from 'node:path';

export const PREPLY_SIGNUP_URL = 'https://preply.com/en/?pref=MTQzNzk2MzA=&id=1791558820.750165&ep=w1';

const LABELS = {
  it: 'Nuovo su Preply? Iscriviti da qui: 30% di sconto sulla lezione di prova',
  en: 'New to Preply? Sign up here: 30% off your trial lesson',
  es: '¿Nuevo en Preply? Regístrate aquí: 30 % de descuento en la clase de prueba',
  fr: 'Nouveau sur Preply ? Inscrivez-vous ici : 30 % de réduction sur le cours d’essai',
  cs: 'Jste na Preply poprvé? Zaregistrujte se zde: sleva 30 % na zkušební lekci',
  pl: 'Nowy na Preply? Zarejestruj się tutaj: 30% zniżki na lekcję próbną',
  tr: 'Preply’da yeni misiniz? Buradan kaydolun: deneme dersinde %30 indirim',
  de: 'Neu bei Preply? Hier registrieren: 30 % Rabatt auf die Probestunde',
  ja: 'Preplyは初めてですか？こちらから登録すると体験レッスンが30%オフ',
};

const LANGS = Object.keys(LABELS).filter((l) => l !== 'it');
const dryRun = process.argv.includes('--dry-run');
const root = path.join(process.cwd(), 'src', 'html');

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = path.join(dir, name);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (name.endsWith('.html')) out.push(p);
  }
  return out;
}

function langOf(file) {
  const first = path.relative(root, file).split(path.sep)[0];
  return LANGS.includes(first) ? first : 'it';
}

let changed = 0;
let skipped = 0;
for (const file of walk(root)) {
  const html = readFileSync(file, 'utf8');
  // Il riquadro finale di quasi tutte le pagine, oppure il riquadro WhatsApp delle pagine «Chi siamo».
  const cta = html.includes('class="teacher-cta-links"');
  const about = html.includes('class="about-contact"');
  if (!cta && !about) continue;
  const link = `<a class="preply-signup" href="${PREPLY_SIGNUP_URL.replace(/&/g, '&amp;')}" target="_blank" rel="sponsored noopener">${LABELS[langOf(file)]}</a>`;
  let next;
  if (html.includes('class="preply-signup"')) next = html.replace(/<a class="preply-signup"[^>]*>[^<]*<\/a>/, link);
  else if (cta) next = html.replace(/(<div class="teacher-cta-links">[\s\S]*?)(<\/div>)/, `$1${link}$2`);
  else
    next = html.replace(
      /(<section class="about-contact">[\s\S]*?)(<\/div><a class="button light final-cta")/,
      `$1<p>${link}</p>$2`
    );
  if (next === html) {
    skipped++;
    continue;
  }
  changed++;
  if (!dryRun) writeFileSync(file, next);
}
console.log(`${dryRun ? '[dry-run] ' : ''}link aggiunto a ${changed} pagine, ${skipped} erano già aggiornate`);

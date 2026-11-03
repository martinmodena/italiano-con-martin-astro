// Aggiunge il link di iscrizione a Preply (programma «invita un amico» di Martin)
// nel riquadro finale «Scegli con chi imparare italiano» di ogni pagina, nelle 10 lingue.
// Idempotente: se il link c'è già ne aggiorna testo e cartellino.
// Sconto verificato il 2026-10-09: fino al 30% sulla prima lezione di prova per chi è nuovo su Preply
// (help.preply.com, «Tutor referral program»; sotto i 7 € circa a lezione lo sconto non si applica tutto,
// per questo «fino al»); a Martin 25 $ quando lo studente si abbona.
// Il cartellino rosso «fino al −30%» (2026-11-03) è solo CSS (.preply-tag in public/styles.css) e dondola.
// Uso: node scripts/add-preply-signup-link.mjs [--dry-run]
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import path from 'node:path';

export const PREPLY_SIGNUP_URL = 'https://preply.com/en/?pref=MTQzNzk2MzA=&id=1791558820.750165&ep=w1';

// [parolina sopra il numero nel cartellino, numero, testo del link]
const LABELS = {
  it: ['fino al', '−30%', 'Nuovo su Preply? Iscriviti da qui: fino al 30% di sconto sulla lezione di prova'],
  en: ['up to', '−30%', 'New to Preply? Sign up here: up to 30% off your trial lesson'],
  es: ['hasta', '−30%', '¿Nuevo en Preply? Regístrate aquí: hasta un 30 % de descuento en la clase de prueba'],
  pt: ['até', '−30%', 'Novo no Preply? Cadastre-se aqui: até 30% de desconto na aula experimental'],
  fr: ['jusqu’à', '−30%', 'Nouveau sur Preply ? Inscrivez-vous ici : jusqu’à 30 % de réduction sur le cours d’essai'],
  cs: ['až', '−30%', 'Jste na Preply poprvé? Zaregistrujte se zde: sleva až 30 % na zkušební lekci'],
  pl: ['do', '−30%', 'Nowy na Preply? Zarejestruj się tutaj: do 30% zniżki na lekcję próbną'],
  tr: ['en fazla', '−%30', 'Preply’da yeni misiniz? Buradan kaydolun: deneme dersinde %30’a varan indirim'],
  de: ['bis zu', '−30%', 'Neu bei Preply? Hier registrieren: bis zu 30 % Rabatt auf die Probestunde'],
  ja: ['最大', '30%オフ', 'Preplyは初めてですか？こちらから登録すると体験レッスンが最大30%オフ'],
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

function preplySignupLink(lang) {
  const [small, pct, text] = LABELS[lang];
  return `<a class="preply-signup" href="${PREPLY_SIGNUP_URL.replace(/&/g, '&amp;')}" target="_blank" rel="sponsored noopener"><span class="preply-tag" aria-hidden="true"><small>${small}</small>${pct}</span><span class="preply-signup-text">${text}</span></a>`;
}

let changed = 0;
let skipped = 0;
for (const file of walk(root)) {
  const html = readFileSync(file, 'utf8');
  // Il riquadro finale di quasi tutte le pagine, oppure il riquadro WhatsApp delle pagine «Chi siamo».
  const cta = html.includes('class="teacher-cta-links"');
  const about = html.includes('class="about-contact"');
  if (!cta && !about) continue;
  const link = preplySignupLink(langOf(file));
  let next;
  if (html.includes('class="preply-signup"')) next = html.replace(/<a class="preply-signup"[^>]*>[\s\S]*?<\/a>/, link);
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
console.log(`${dryRun ? '[dry-run] ' : ''}link aggiornato in ${changed} pagine, ${skipped} erano già aggiornate`);

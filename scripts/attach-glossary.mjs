#!/usr/bin/env node
// Aggancia il glossario cliccabile alle pagine di una risorsa.
//
// Il glossario vive in tre file (public/assets/glossario.css, glossario.js e
// public/assets/glossario/<id>.json): questo script mette il foglio di stile
// in `extraHead` e lo script in `bodyScripts` di ogni pagina indicata, con il
// prefisso giusto per la sua profondità. È idempotente: rilanciarlo aggiorna
// la versione invece di aggiungere una seconda copia.
//
//   node scripts/attach-glossary.mjs <id-glossario> <pagina.astro> [altre...]
//
// Le pagine si indicano come percorso dentro src/pages, per esempio
// `favole/il-cane-e-losso.html.astro` oppure `en/stories/the-dog-and-the-bone.html.astro`.
//
// VERSIONE va alzata quando cambiano glossario.js o glossario.css, altrimenti
// i browser continuano a usare la copia in cache.

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const VERSIONE = '20260907a';
const RADICE_PAGINE = 'src/pages';

const [idGlossario, ...pagine] = process.argv.slice(2);

if (!idGlossario || !pagine.length) {
  console.error('Uso: node scripts/attach-glossary.mjs <id-glossario> <pagina.astro> [altre...]');
  process.exit(1);
}

const datiGlossario = join('public/assets/glossario', `${idGlossario}.json`);
if (!existsSync(datiGlossario)) {
  console.error(`Glossario mancante: ${datiGlossario}`);
  process.exit(1);
}

// Il JSON si carica sempre da un percorso assoluto: le pagine stanno a
// profondità diverse (favole/, en/stories/) ma il file è uno solo.
const percorsoJson = `/assets/glossario/${idGlossario}.json?v=${VERSIONE}`;

let aggiornate = 0;

for (const pagina of pagine) {
  const percorso = join(RADICE_PAGINE, pagina);
  if (!existsSync(percorso)) {
    console.error(`Pagina mancante: ${percorso}`);
    process.exitCode = 1;
    continue;
  }

  let testo = readFileSync(percorso, 'utf8');
  // Su Windows i file in cartella di lavoro hanno fine riga CRLF: si rispetta
  // quella che si trova, altrimenti git vede cambiato tutto il file.
  const fineRiga = testo.includes('\r\n') ? '\r\n' : '\n';

  const prefisso = testo.match(/"assetPrefix":\s*"([^"]*)"/)?.[1];
  if (prefisso === undefined) {
    console.error(`Senza assetPrefix, salto: ${percorso}`);
    process.exitCode = 1;
    continue;
  }

  // Via le righe di un aggancio precedente, così la versione si aggiorna
  // invece di aggiungere una seconda copia. Poi si rimettono a posto le
  // virgole rimaste appese e gli elenchi rimasti vuoti.
  testo = testo.replace(/^.*assets\/glossario\.(?:css|js).*\r?\n/gm, '');
  testo = testo.replace(/,(\s*\n\s*[\],])/g, '$1');
  testo = testo.replace(/\[\s*\n\s*\]/g, '[]');

  const rigaCss = `    "<link rel=\\"stylesheet\\" href=\\"${prefisso}assets/glossario.css?v=${VERSIONE}\\">"`;
  const rigaJs = `    "<script src=\\"${prefisso}assets/glossario.js?v=${VERSIONE}\\" data-glossario=\\"${percorsoJson}\\"></script>"`;

  testo = inserisci(testo, 'extraHead', rigaCss, 'in fondo', fineRiga);
  testo = inserisci(testo, 'bodyScripts', rigaJs, 'in cima', fineRiga);

  writeFileSync(percorso, testo);
  aggiornate += 1;
}

console.log(`Glossario «${idGlossario}» agganciato a ${aggiornate} pagine (versione ${VERSIONE}).`);

// Inserisce una riga in un elenco del blocco `meta`. Il foglio di stile va in
// fondo a extraHead (deve poter sovrascrivere gli altri), lo script in cima a
// bodyScripts (prima di script.js, come nelle pagine di vocabolario).
function inserisci(testo, campo, riga, dove, fineRiga) {
  const vuoto = new RegExp(`("${campo}":\\s*)\\[\\]`);
  if (vuoto.test(testo)) {
    return testo.replace(vuoto, `$1[${fineRiga}${riga}${fineRiga}  ]`);
  }

  const pieno = new RegExp(`("${campo}":\\s*\\[\\r?\\n)([\\s\\S]*?)(\\r?\\n  \\])`);
  const trovato = testo.match(pieno);
  if (!trovato) throw new Error(`Campo ${campo} non trovato o in un formato inatteso`);

  const contenuto = dove === 'in cima' ? `${riga},${fineRiga}${trovato[2]}` : `${trovato[2]},${fineRiga}${riga}`;
  return testo.replace(pieno, `$1${contenuto}$3`);
}

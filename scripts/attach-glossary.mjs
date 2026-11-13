#!/usr/bin/env node
// Aggancia il glossario cliccabile (parole con traduzione ed esempi, e
// traduzione dei paragrafi) alle pagine di una storia.
//
// Il glossario vive in tre file (public/assets/glossario.css, glossario.js e
// public/assets/glossario/<id>.json): questo script mette il foglio di stile
// in `extraHead` e lo script in `bodyScripts` di ogni pagina, con il prefisso
// giusto per la sua profondità. È idempotente: rilanciarlo aggiorna la
// versione invece di aggiungere una seconda copia.
//
//   node scripts/attach-glossary.mjs            tutti i glossari, in tutte le lingue
//   node scripts/attach-glossary.mjs --check    controlla soltanto (lo usa il deploy)
//   node scripts/attach-glossary.mjs <id> <pagina.astro> [altre...]   pagine scelte a mano
//
// <id> è il nome della pagina italiana (favole/il-lago-di-yogurt.html → il-lago-di-yogurt):
// le pagine straniere si trovano dall'hreflang italiano, come in add-fable-audio.mjs.
// I generatori delle favole (create-science-stories.mjs, build-pt.mjs...)
// riscrivono le pagine senza glossario: questo script va lanciato dopo di loro.
//
// VERSIONE va alzata quando cambiano glossario.js o glossario.css, altrimenti
// i browser continuano a usare la copia in cache.

import { readFileSync, writeFileSync, existsSync, readdirSync } from 'node:fs';
import { join, relative, basename } from 'node:path';

const VERSIONE = '20261113a';
const RADICE_PAGINE = 'src/pages';
const CARTELLA_GLOSSARI = 'public/assets/glossario';

const argomenti = process.argv.slice(2);
const soloControllo = argomenti.includes('--check');
const [idScelto, ...pagineScelte] = argomenti.filter((a) => a !== '--check');

function cammina(cartella, uscita = []) {
  for (const voce of readdirSync(cartella, { withFileTypes: true })) {
    const percorso = join(cartella, voce.name);
    if (voce.isDirectory()) cammina(percorso, uscita);
    else if (voce.name.endsWith('.html.astro')) uscita.push(percorso);
  }
  return uscita;
}

// Le pagine di un glossario: quella italiana con quel nome e tutte quelle che
// la citano come versione italiana nell'hreflang.
function pagineDi(id) {
  const tutte = cammina(RADICE_PAGINE).map((p) => ({ p, testo: readFileSync(p, 'utf8') }));
  const italiana = tutte.find(({ p, testo }) => basename(p) === `${id}.html.astro` && /"lang":\s*"it"/.test(testo));
  if (!italiana) return [];
  const url = italiana.testo.match(/"canonical":\s*"([^"]+)"/)?.[1];
  return tutte
    .filter(({ p, testo }) => p === italiana.p || (url && testo.includes(`"${url}"`)))
    .map(({ p }) => relative(RADICE_PAGINE, p));
}

const lavori = idScelto
  ? [[idScelto, pagineScelte.length ? pagineScelte : pagineDi(idScelto)]]
  : readdirSync(CARTELLA_GLOSSARI)
      .filter((f) => f.endsWith('.json'))
      .map((f) => basename(f, '.json'))
      .map((id) => [id, pagineDi(id)]);

const LINGUE = ['en', 'es', 'pt', 'fr', 'cs', 'pl', 'tr', 'de', 'ja'];
const LIVELLI_TRADOTTI = ['a1', 'a2', 'b1'];
const normalizza = (s) => s.toLocaleLowerCase('it').normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[‘’]/g, "'");
const parole = (s) => new Set((normalizza(s).match(/[\p{L}\p{M}]+/gu) || []).map(normalizza));

let problemi = 0;

for (const [idGlossario, pagine] of lavori) {
  const datiGlossario = join(CARTELLA_GLOSSARI, `${idGlossario}.json`);
  if (!existsSync(datiGlossario)) {
    console.error(`Glossario mancante: ${datiGlossario}`);
    problemi += 1;
    continue;
  }
  if (pagine.length < 10) {
    console.error(`${idGlossario}: trovate solo ${pagine.length} pagine su 10`);
    problemi += 1;
  }
  problemi += controllaContenuto(idGlossario, JSON.parse(readFileSync(datiGlossario, 'utf8')), pagine);
  // Il JSON si carica sempre da un percorso assoluto: le pagine stanno a
  // profondità diverse (favole/, en/stories/) ma il file è uno solo.
  const percorsoJson = `/assets/glossario/${idGlossario}.json?v=${VERSIONE}`;
  let aggiornate = 0;

  for (const pagina of pagine) {
    const percorso = join(RADICE_PAGINE, pagina);
    if (!existsSync(percorso)) {
      console.error(`Pagina mancante: ${percorso}`);
      problemi += 1;
      continue;
    }

    let testo = readFileSync(percorso, 'utf8');
    // Su Windows i file in cartella di lavoro hanno fine riga CRLF: si rispetta
    // quella che si trova, altrimenti git vede cambiato tutto il file.
    const fineRiga = testo.includes('\r\n') ? '\r\n' : '\n';

    const prefisso = testo.match(/"assetPrefix":\s*"([^"]*)"/)?.[1];
    if (prefisso === undefined) {
      console.error(`Senza assetPrefix, salto: ${percorso}`);
      problemi += 1;
      continue;
    }

    const rigaCss = `    "<link rel=\\"stylesheet\\" href=\\"${prefisso}assets/glossario.css?v=${VERSIONE}\\">"`;
    const rigaJs = `    "<script src=\\"${prefisso}assets/glossario.js?v=${VERSIONE}\\" data-glossario=\\"${percorsoJson}\\"></script>"`;

    if (soloControllo) {
      if (!testo.includes(rigaCss.trim()) || !testo.includes(rigaJs.trim())) {
        console.error(`Glossario «${idGlossario}» mancante o vecchio in ${percorso}`);
        problemi += 1;
      }
      continue;
    }

    // Via le righe di un aggancio precedente, così la versione si aggiorna
    // invece di aggiungere una seconda copia. Poi si rimettono a posto le
    // virgole rimaste appese e gli elenchi rimasti vuoti.
    const prima = testo;
    testo = testo.replace(/^.*assets\/glossario\.(?:css|js).*\r?\n/gm, '');
    testo = testo.replace(/,(\s*\n\s*[\],])/g, '$1');
    testo = testo.replace(/\[\s*\n\s*\]/g, '[]');

    testo = inserisci(testo, 'extraHead', rigaCss, 'in fondo', fineRiga);
    testo = inserisci(testo, 'bodyScripts', rigaJs, 'in cima', fineRiga);

    if (testo !== prima) {
      writeFileSync(percorso, testo);
      aggiornate += 1;
    }
  }

  if (!soloControllo)
    console.log(
      `Glossario «${idGlossario}»: ${pagine.length} pagine, ${aggiornate} aggiornate (versione ${VERSIONE}).`
    );
}

if (soloControllo && !problemi) console.log(`Glossari a posto (${lavori.length}).`);
if (problemi) process.exitCode = 1;

// Controlla il contenuto del glossario contro il brano italiano: ogni voce
// deve comparire nel testo, avere tre esempi (con la parola dentro, per il
// grassetto) e le traduzioni nelle 9 lingue; la traduzione del brano deve
// avere un testo per ogni paragrafo, in tutte le lingue e per A1, A2 e B1.
function controllaContenuto(id, dati, pagine) {
  const errori = [];
  const italiana = pagine.find((p) => readFileSync(join(RADICE_PAGINE, p), 'utf8').match(/"lang":\s*"it"/));
  const sorgente =
    italiana && readFileSync(join(RADICE_PAGINE, italiana), 'utf8').match(/from '~\/html\/(.+?)\?raw'/)?.[1];
  if (!sorgente) return 0;
  const html = readFileSync(join('src/html', sorgente), 'utf8');
  const livelli = {};
  for (const m of html.matchAll(
    /<article class="story-card[^"]*" id="(\w+)"[\s\S]*?<div class="story-text"[^>]*>([\s\S]*?)<\/div>/g
  )) {
    livelli[m[1]] = (m[2].match(/<p[\s>]/g) || []).length;
    livelli[m[1] + ':testo'] = m[2].replace(/<[^>]+>/g, ' ');
  }
  const tuttoIlTesto = parole(
    Object.keys(livelli)
      .filter((k) => k.endsWith(':testo'))
      .map((k) => livelli[k])
      .join(' ')
  );

  for (const voce of dati.voci || []) {
    const nome = voce.parola;
    if (!(voce.forme || []).some((f) => tuttoIlTesto.has(normalizza(f))))
      errori.push(`«${nome}»: nessuna forma compare nel brano`);
    const esempi = voce.esempi || [];
    if (esempi.length !== 3) errori.push(`«${nome}»: ${esempi.length} esempi invece di 3`);
    const forme = new Set([...(voce.forme || []), ...(voce.formeEsempi || [])].map(normalizza));
    for (const e of esempi)
      if (![...parole(e)].some((w) => forme.has(w))) errori.push(`«${nome}»: esempio senza la parola: ${e}`);
    const mancanti = LINGUE.filter((l) => !voce.traduzioni?.[l]);
    if (mancanti.length) errori.push(`«${nome}»: traduzioni mancanti ${mancanti.join(' ')}`);
  }

  if (dati.testo) {
    for (const lingua of LINGUE) {
      for (const livello of LIVELLI_TRADOTTI.filter((l) => livelli[l])) {
        const tradotto = dati.testo[lingua]?.[livello];
        if (!tradotto) errori.push(`testo ${lingua} ${livello}: manca`);
        else if (tradotto.length !== livelli[livello])
          errori.push(`testo ${lingua} ${livello}: ${tradotto.length} paragrafi invece di ${livelli[livello]}`);
      }
    }
  }

  errori.forEach((e) => console.error(`${id}: ${e}`));
  return errori.length;
}

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

// Mette il lettore audio «letto da Martin» nelle favole che hanno una registrazione
// (elenco in scripts/data/favole-audio.mjs), in tutte le lingue in cui la favola esiste.
// Il lettore va nella scheda del livello (id="a1", "a2"...), subito sopra il testo.
// Si può lanciare quante volte si vuole: toglie il lettore vecchio e lo rimette.
// I generatori delle favole (create-science-stories.mjs, build-pt.mjs...) riscrivono le
// pagine senza lettore: questo script va lanciato dopo di loro.
//   node scripts/add-fable-audio.mjs           scrive le pagine
//   node scripts/add-fable-audio.mjs --check   controlla soltanto (lo usa il deploy)
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { FAVOLE_AUDIO, AUDIO_LABEL } from './data/favole-audio.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PAGES = path.join(ROOT, 'src', 'pages');
const check = process.argv.includes('--check');

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name.endsWith('.html.astro')) out.push(p);
  }
  return out;
}

const astros = walk(PAGES).map((p) => ({ p, src: fs.readFileSync(p, 'utf8') }));
const OLD = /\s*<div class="fable-audio">[\s\S]*?<\/div>/g;
let problems = 0;
let changed = 0;

for (const [itPath, levels] of Object.entries(FAVOLE_AUDIO)) {
  const base = path.basename(itPath, '.html');
  for (const lv of levels) {
    const mp3 = path.join(ROOT, 'public', 'assets', 'audio', 'favole', `${base}-${lv}.mp3`);
    if (!fs.existsSync(mp3)) {
      console.error(`Manca l'audio ${path.relative(ROOT, mp3)}`);
      problems++;
    }
  }
  // La pagina italiana e tutte quelle che la citano come versione italiana (hreflang).
  const pages = astros.filter(
    ({ p, src }) =>
      path.relative(PAGES, p).replace(/\\/g, '/') === `${itPath}.astro` ||
      src.includes(`"https://italianoconmartin.com/${itPath}"`)
  );
  if (pages.length < 10) {
    console.error(`${itPath}: trovate solo ${pages.length} pagine su 10`);
    problems++;
  }
  for (const { p, src } of pages) {
    const lang = src.match(/"lang":\s*"(\w+)"/)?.[1];
    const raw = src.match(/from '~\/html\/(.+?)\?raw'/)?.[1];
    if (!lang || !raw || !AUDIO_LABEL[lang]) {
      console.error(`${path.relative(ROOT, p)}: lingua o HTML non trovati`);
      problems++;
      continue;
    }
    const htmlFile = path.join(ROOT, 'src', 'html', raw);
    const before = fs.readFileSync(htmlFile, 'utf8');
    let html = before.replace(OLD, '');
    for (const lv of levels) {
      const L = lv.toUpperCase();
      const player = `<div class="fable-audio"><p><span aria-hidden="true">🎧</span> ${AUDIO_LABEL[lang].replace('{L}', L)}</p><audio controls preload="none" src="/assets/audio/favole/${base}-${lv}.mp3"></audio></div>`;
      // Subito prima del testo della scheda di quel livello.
      const re = new RegExp(`(<article class="story-card" id="${lv}">[\\s\\S]*?)(\\n(\\s*)<div class="story-text")`);
      if (!re.test(html)) {
        console.error(`${path.relative(ROOT, htmlFile)}: scheda ${L} non trovata`);
        problems++;
        continue;
      }
      html = html.replace(re, (m, head, rest, sp) => `${head}\n${sp}${player}${rest}`);
    }
    if (html !== before) {
      if (check) {
        console.error(`${path.relative(ROOT, htmlFile)}: lettore audio mancante o vecchio`);
        problems++;
      } else {
        fs.writeFileSync(htmlFile, html);
        changed++;
      }
    }
  }
}

if (problems) {
  console.error(`add-fable-audio: ${problems} problemi`);
  process.exit(1);
}
console.log(check ? 'add-fable-audio: tutto a posto' : `add-fable-audio: ${changed} pagine aggiornate`);

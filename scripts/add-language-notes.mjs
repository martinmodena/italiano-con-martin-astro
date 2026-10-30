// Inserisce nelle lezioni di grammatica il riquadro «confronto con la tua lingua» (id="confronto"),
// subito dopo la regola, e la voce nel menu della lezione. I testi sono in data/confronti-lingua.mjs.
//
// Idempotente. Va lanciato dopo scripts/pt/build-pt.mjs (che toglie il riquadro spagnolo prima di tradurre)
// e prima di add-breadcrumbs.mjs. Con --check non scrive niente e fallisce se un riquadro manca o è diverso.
//
// Uso: node scripts/add-language-notes.mjs [--check]

import fs from 'node:fs';
import path from 'node:path';
import { NAV, NOTES } from './data/confronti-lingua.mjs';

const SITE = 'https://italianoconmartin.com';
const CHECK = process.argv.includes('--check');
const META_RE = /const meta = (\{[^]*?\r?\n\});\r?\n---/;
const BLOCK_RE = /<article class="lesson-box lang-note" id="confronto">[^]*?<\/article><!-- \/lang-note -->\s*/;
const NAV_RE = /<a href="#confronto">[^<]*<\/a>/;

const block = (n) =>
  `<article class="lesson-box lang-note" id="confronto">\n        <h2>${n.h2}</h2>\n        <p>${n.intro}</p>\n` +
  `        <table class="compare-table"><thead><tr><th>${n.th[0]}</th><th>${n.th[1]}</th></tr></thead><tbody>` +
  n.rows.map(([a, b]) => `<tr><td>${a}</td><td lang="it">${b}</td></tr>`).join('') +
  `</tbody></table>\n        <ul>${n.points.map((p) => `<li>${p}</li>`).join('')}</ul>\n      </article><!-- /lang-note -->\n\n      `;

let problems = 0;
let changed = 0;
for (const [itPath, byLang] of Object.entries(NOTES)) {
  const astro = path.join('src/pages', itPath + '.astro');
  const meta = JSON.parse(fs.readFileSync(astro, 'utf8').match(META_RE)[1]);
  for (const [hl, url] of meta.hreflangs) {
    if (hl === 'x-default') continue;
    const lang = hl.slice(0, 2);
    const note = byLang[lang];
    if (!note) throw new Error(`${itPath}: manca il confronto per ${lang}`);
    const file = path.join('src/html', decodeURI(url.replace(SITE + '/', '')));
    const html = fs.readFileSync(file, 'utf8');
    let next = html.replace(BLOCK_RE, '').replace(NAV_RE, '');
    const rule = next.indexOf('id="regola"');
    const end = next.indexOf('</article>', rule);
    if (rule < 0 || end < 0) throw new Error(`${file}: riquadro della regola non trovato`);
    const at = next.indexOf('<', end + '</article>'.length);
    next = next.slice(0, at) + block(note) + next.slice(at);
    next = next.replace(/(<div class="lesson-nav"><a href="#regola">[^<]*<\/a>)/, `$1<a href="#confronto">${NAV[lang]}</a>`);
    if (next === html) continue;
    if (CHECK) {
      console.log(`Confronto da aggiornare: ${file}`);
      problems++;
    } else {
      fs.writeFileSync(file, next);
      changed++;
    }
  }
}

if (CHECK) {
  if (problems) {
    console.log(`\n${problems} pagine da rifare: node scripts/add-language-notes.mjs`);
    process.exit(1);
  }
  console.log('Confronti con la lingua dello studente: tutto in ordine.');
} else console.log(`Pagine aggiornate: ${changed}`);

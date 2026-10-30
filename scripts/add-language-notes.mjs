// Inserisce nelle lezioni di grammatica il riquadro «confronto con la tua lingua» (id="confronto"),
// subito dopo la regola (o dopo il riquadro indicato con «after»), e la voce nel menu della lezione. I testi sono in data/confronti-lingua.mjs.
// Riscrive anche la sezione «Errori» con gli errori tipici di chi parla quella lingua (data/errori-lingua.mjs).
//
// Idempotente. Va lanciato dopo scripts/pt/build-pt.mjs (che toglie il riquadro spagnolo prima di tradurre)
// e prima di add-breadcrumbs.mjs. Con --check non scrive niente e fallisce se un riquadro manca o è diverso.
//
// Uso: node scripts/add-language-notes.mjs [--check]

import fs from 'node:fs';
import path from 'node:path';
import { NAV, NOTES } from './data/confronti-lingua.mjs';
import { ERR_H2, ERR_LABELS, ERRORS } from './data/errori-lingua.mjs';

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

// Sezione «Errori» riscritta per chi parla quella lingua (id="errori"): titolo e schede con la spiegazione.
// Alcune lezioni non hanno l'id: la sezione si riconosce dal titolo seguito dalle schede degli errori.
const ERR_RE = /<article class="lesson-box"(?: id="errori")?>\s*<h2>[^<]*<\/h2>\s*<div class="mistake-grid"[^]*?<\/article>/;
const errBlock = (lang, items) => {
  const [w, c] = ERR_LABELS[lang];
  const sp = lang === 'ja' ? '' : ' ';
  return (
    `<article class="lesson-box" id="errori">
        <h2>${ERR_H2[lang]}</h2>
        <div class="mistake-grid" data-auto>` +
    items.map(([wrong, right, why]) => `<div class="mistake"><strong>${w}${sp}<span lang="it">${wrong}</span></strong> ${c}${sp}<span lang="it">${right}</span><br>${why}</div>`).join('') +
    `</div>
      </article>`
  );
};

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
    // Dopo il riquadro indicato in «after», altrimenti dopo il primo del menu della lezione (di solito #regola).
    const anchor = byLang.after || (next.match(/<div class="lesson-nav"><a href="#([^"]+)"/) || [])[1];
    const rule = next.indexOf(`id="${anchor}"`);
    const end = next.indexOf('</article>', rule);
    if (!anchor || rule < 0 || end < 0) throw new Error(`${file}: riquadro #${anchor} non trovato`);
    const at = next.indexOf('<', end + '</article>'.length);
    next = next.slice(0, at) + block(note) + next.slice(at);
    next = next.replace(new RegExp(`(<div class="lesson-nav">.*?<a href="#${anchor}">[^<]*</a>)`), `$1<a href="#confronto">${NAV[lang]}</a>`);
    const errs = ERRORS[itPath] && ERRORS[itPath][lang];
    if (ERRORS[itPath] && !errs) throw new Error(`${itPath}: mancano gli errori per ${lang}`);
    if (errs) {
      if (!ERR_RE.test(next)) throw new Error(`${file}: sezione #errori non trovata`);
      next = next.replace(ERR_RE, () => errBlock(lang, errs));
    }
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

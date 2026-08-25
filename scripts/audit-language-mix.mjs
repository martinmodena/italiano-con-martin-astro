#!/usr/bin/env node
// Controlla che ogni pagina localizzata rispetti REGOLE_LINGUE.md:
// l'italiano di studio non deve essere tradotto, le etichette di servizio non
// devono restare in italiano, il marchio non deve essere adattato.
//
// Uso:  node scripts/audit-language-mix.mjs [--strict] [--lang es]
//
// Analizza la sorgente (src/html + src/pages), non la build: è lì che si
// correggono le pagine. Con --strict esce con codice 1 al primo errore.

import { readFileSync, existsSync, statSync, globSync } from 'node:fs';
import path from 'node:path';
import * as cheerio from 'cheerio';
import { LABELS, PREFIXES, PDF_DOWNLOADS, NAV_LABELS } from './data/labels.mjs';
import { LEVEL_FOCUS } from './data/level-focus.mjs';
import { TABLE_CELLS } from './data/table-cells.mjs';

// Etichette ammesse dentro le tabelle: quelle generali piu le celle che spiegano.
const CELL_LABELS = { ...LABELS, ...TABLE_CELLS };

const ROOT = process.cwd();
const HTML = path.join(ROOT, 'src/html');
const PAGES = path.join(ROOT, 'src/pages');
const args = process.argv.slice(2);
const STRICT = args.includes('--strict');
const ONLY_LANG = args.includes('--lang') ? args[args.indexOf('--lang') + 1] : null;

const norm = (s) => (s || '').replace(/\s+/g, ' ').trim();
const isFile = (f) => existsSync(f) && statSync(f).isFile();

// Contenitori che ospitano la lingua-oggetto: il testo deve coincidere con
// quello della pagina italiana, a meno delle etichette tradotte.
const STUDY_BLOCKS = ['.dialogue', '.story-text'];
const STUDY_TABLES = ['table.tbl', 'table.conj-table'];

// Termini italiani che, se compaiono nel titolo della pagina italiana, devono
// comparire tali e quali anche nella meta description localizzata.
const KEEP_TERMS = [
  'essere',
  'avere',
  'passato prossimo',
  'imperfetto',
  'passato remoto',
  'congiuntivo',
  'condizionale',
  'imperativo',
  'futuro semplice',
  'gerundio',
];

// Sottoinsieme che deve comparire anche nel titolo H1: sono i nomi italiani
// senza equivalente esatto. «imperativo», «gerundio», «infinito» e simili
// indicano categorie che esistono in tutte le lingue: nel titolo si può usare
// il nome locale, che è anche quello che il visitatore cerca su Google.
const KEEP_TERMS_TITLE = [
  'essere',
  'avere',
  'passato prossimo',
  'imperfetto',
  'passato remoto',
  'congiuntivo',
  'condizionale',
  'futuro semplice',
];

// Percorsi italiani raggiungibili solo dalla versione italiana del sito.
const IT_ONLY_LINK = /href="\/(chi-siamo|grammatica|letture|favole|vocabolario|contact)\//;

const errors = [];
const add = (page, kind, detail) => errors.push({ page, kind, detail });

function buildMap() {
  const out = [];
  for (const a of globSync('**/*.astro', { cwd: PAGES })) {
    const src = readFileSync(path.join(PAGES, a), 'utf8');
    const lang = (src.match(/"lang":\s*"([a-z-]+)"/) || [])[1];
    const page = (src.match(/"path":\s*"([^"]+)"/) || [])[1];
    const itHref = (src.match(/\[\s*"it",\s*"([^"]+)"\s*\]/) || [])[1];
    if (!lang || !page || lang === 'it') continue;
    let itPath = null;
    if (itHref) {
      itPath = itHref.replace('https://italianoconmartin.com/', '');
      if (itPath.endsWith('/')) itPath += 'index.html';
    }
    out.push({ lang, page, itPath, astro: a, meta: src });
  }
  return out;
}

for (const entry of buildMap()) {
  if (ONLY_LANG && entry.lang !== ONLY_LANG) continue;
  const file = path.join(HTML, entry.page);
  if (!isFile(file)) continue;
  const raw = readFileSync(file, 'utf8');
  const $ = cheerio.load(raw, null, false);
  const { lang, page } = entry;

  // 1. il marchio e i nomi non si adattano
  if (raw.includes('Martín')) add(page, 'marchio', '«Martín» al posto di «Martin»');

  // 2. nessun link alla versione italiana del sito
  if (IT_ONLY_LINK.test(raw)) add(page, 'link', 'collegamento a un percorso italiano');

  // 3. etichetta accessibile dei download nella lingua della pagina
  $('[aria-label]').each((_, e) => {
    const v = $(e).attr('aria-label');
    if (v === 'PDF downloads' && lang !== 'en') add(page, 'attributo', 'aria-label in inglese: "PDF downloads"');
    if (PDF_DOWNLOADS[lang] && $(e).hasClass('pdf-downloads') && v !== PDF_DOWNLOADS[lang]) {
      add(page, 'attributo', `aria-label "${v}" invece di "${PDF_DOWNLOADS[lang]}"`);
    }
  });

  // 4. le frasi da tradurre sono nella lingua della pagina
  if (lang !== 'en') {
    $('.translation-prompt strong[lang="en"]').each(() => {
      add(page, 'esercizio', 'frase da tradurre rimasta in inglese');
    });
  }

  // 5. etichette di servizio rimaste in italiano
  $('th, .example > strong').each((_, e) => {
    const t = norm($(e).text());
    if (LABELS[t] && LABELS[t][lang] !== t) add(page, 'etichetta', `etichetta italiana non tradotta: «${t}»`);
  });
  $('.mistake > strong').each((_, e) => {
    const t = norm($(e).text());
    const hit = Object.keys(PREFIXES).find((p) => t.startsWith(p));
    if (hit && PREFIXES[hit][lang] !== hit) add(page, 'etichetta', `prefisso italiano non tradotto: «${hit}»`);
  });

  if (!entry.itPath) continue;
  const itFile = path.join(HTML, entry.itPath);
  if (!isFile(itFile)) continue;
  const $it = cheerio.load(readFileSync(itFile, 'utf8'), null, false);

  // 6. il materiale di studio deve coincidere con l'italiano
  for (const sel of STUDY_BLOCKS) {
    const a = $it(sel).toArray();
    const b = $(sel).toArray();
    if (!a.length || a.length !== b.length) continue;
    a.forEach((el, i) => {
      if (norm($it(el).text()) !== norm($(b[i]).text())) {
        add(page, 'lingua-oggetto', `${sel}: materiale italiano tradotto`);
      }
    });
  }

  // 6b. nelle tabelle si confronta cella per cella, saltando le etichette
  for (const sel of STUDY_TABLES) {
    const a = $it(sel).toArray();
    const b = $(sel).toArray();
    if (!a.length || a.length !== b.length) continue;
    a.forEach((el, i) => {
      const itCells = $it(el).find('th, td').toArray();
      const locCells = $(b[i]).find('th, td').toArray();
      if (itCells.length !== locCells.length) return;
      itCells.forEach((c, k) => {
        const itText = norm($it(c).text());
        if (CELL_LABELS[itText]) return; // è un'etichetta: deve essere tradotta
        if (norm($(locCells[k]).text()) !== itText) {
          add(page, 'lingua-oggetto', `${sel}: cella italiana tradotta («${itText}»)`);
        }
      });
    });
  }

  // 6c. i nomi italiani dei tempi verbali non si traducono
  const itFocus = $it('.story-card header > p, .grammar-lesson header > p').toArray();
  const locFocus = $('.story-card header > p, .grammar-lesson header > p').toArray();
  if (itFocus.length && itFocus.length === locFocus.length) {
    itFocus.forEach((el, i) => {
      const tr = LEVEL_FOCUS[norm($it(el).text())];
      if (tr && tr[lang] && norm($(locFocus[i]).text()) !== tr[lang]) {
        add(page, 'termine', `nome di tempo verbale tradotto: «${norm($(locFocus[i]).text())}»`);
      }
    });
  }

  // 6d. le voci di navigazione della lezione sono nella lingua della pagina
  const itNav = $it('.lesson-nav a, .tabs a').toArray();
  const locNav = $('.lesson-nav a, .tabs a').toArray();
  if (itNav.length && itNav.length === locNav.length) {
    itNav.forEach((el, i) => {
      const tr = NAV_LABELS[norm($it(el).text())];
      if (!tr || !tr[lang]) return;
      const wanted = norm(tr[lang].replace(/<[^>]+>/g, ''));
      if (norm($(locNav[i]).text()) !== wanted) {
        add(page, 'etichetta', `voce di navigazione non allineata: «${norm($(locNav[i]).text())}»`);
      }
    });
  }

  // 7. i suggerimenti degli esercizi mostrano la forma italiana
  const itHints = $it('[data-hint]').toArray();
  const locHints = $('[data-hint]').toArray();
  if (itHints.length && itHints.length === locHints.length) {
    itHints.forEach((el, i) => {
      if ($it(el).attr('data-hint') !== $(locHints[i]).attr('data-hint')) {
        add(page, 'lingua-oggetto', 'suggerimento di esercizio tradotto');
      }
    });
  }

  // 8. le domande di comprensione restano in italiano
  const itQ = $it('h3')
    .filter((_, e) => $it(e).next('ol').length > 0)
    .toArray();
  const locQ = $('h3')
    .filter((_, e) => $(e).next('ol').length > 0)
    .toArray();
  if (itQ.length && itQ.length === locQ.length) {
    itQ.forEach((h3, i) => {
      const itItems = $it(h3).next('ol').children('li').toArray();
      const locItems = $(locQ[i]).next('ol').children('li').toArray();
      if (itItems.length !== locItems.length) return;
      itItems.forEach((li, k) => {
        const wanted = norm($it(li).text());
        const got = norm($(locItems[k]).children('span[lang="it"]').first().text());
        if (got !== wanted) add(page, 'domande', 'domanda di comprensione non in italiano');
      });
    });
  }

  // 9. i metadati SEO non contengono inglese residuo
  if (lang !== 'en') {
    const m = entry.meta.match(/"description":\s*"([^"]+)"/);
    if (m && /\b(to be|to have|Present Perfect|present perfect)\b/.test(m[1])) {
      add(page, 'seo', 'meta description con inglese residuo');
    }
    // il termine italiano della lezione deve restare nel titolo e nella descrizione
    const itTitle = norm($it('h1').first().text()).toLowerCase();
    for (const term of KEEP_TERMS) {
      if (!itTitle.includes(term)) continue;
      if (m && !m[1].toLowerCase().includes(term)) {
        add(page, 'seo', `meta description senza il termine italiano «${term}»`);
      }
      if (KEEP_TERMS_TITLE.includes(term) && !norm($('h1').first().text()).toLowerCase().includes(term)) {
        add(page, 'seo', `titolo H1 senza il termine italiano «${term}»`);
      }
      break;
    }
  }
}

// --------------------------------------------------------------------------
const byKind = {};
for (const e of errors) (byKind[e.kind] = byKind[e.kind] || []).push(e);

if (!errors.length) {
  console.log('audit lingue: nessun problema. Regole in REGOLE_LINGUE.md.');
  process.exit(0);
}

console.log(`audit lingue: ${errors.length} problemi\n`);
for (const [kind, list] of Object.entries(byKind).sort((a, b) => b[1].length - a[1].length)) {
  console.log(`${kind} (${list.length})`);
  const seen = new Set();
  for (const e of list) {
    const key = `${e.page}|${e.detail}`;
    if (seen.has(key)) continue;
    seen.add(key);
    if (seen.size > 8) {
      console.log(`  … e altri ${list.length - 8}`);
      break;
    }
    console.log(`  ${e.page}: ${e.detail}`);
  }
  console.log('');
}
console.log('Come si correggono: REGOLE_LINGUE.md');
process.exit(STRICT ? 1 : 0);

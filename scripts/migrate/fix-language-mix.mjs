#!/usr/bin/env node
// Ripara la mescolanza delle lingue nelle pagine localizzate di src/html.
//
// Regole applicate: REGOLE_LINGUE.md.
// L'italiano di studio viene ripristinato dalla pagina italiana corrispondente;
// le etichette di servizio restano (o diventano) nella lingua della pagina.
//
// Uso:  node scripts/migrate/fix-language-mix.mjs [--dry] [--lang es] [--only <sottostringa>]
//
// Script una tantum: dopo l'esecuzione le pagine sono corrette e il controllo
// permanente è affidato a scripts/audit-language-mix.mjs.

import { readFileSync, writeFileSync, existsSync, statSync, globSync } from 'node:fs';
import path from 'node:path';
import * as cheerio from 'cheerio';
import { LABELS, PREFIXES, PDF_DOWNLOADS, NAV_LABELS } from '../data/labels.mjs';
import { ITALIAN_BOX } from '../data/italian-box.mjs';
import { LESSON_CARD } from '../data/lesson-cards.mjs';
import { TRANSLATION_PROMPTS } from '../data/translation-prompts.mjs';
import { LEVEL_FOCUS } from '../data/level-focus.mjs';
import { TABLE_CELLS } from '../data/table-cells.mjs';

// Etichette ammesse dentro le tabelle: quelle generali piu le celle che spiegano.
const CELL_LABELS = { ...LABELS, ...TABLE_CELLS };

const ROOT = process.cwd();
const HTML = path.join(ROOT, 'src/html');
const PAGES = path.join(ROOT, 'src/pages');
const args = process.argv.slice(2);
const DRY = args.includes('--dry');
const ONLY_LANG = args.includes('--lang') ? args[args.indexOf('--lang') + 1] : null;
const ONLY = args.includes('--only') ? args[args.indexOf('--only') + 1] : null;

const norm = (s) => (s || '').replace(/\s+/g, ' ').trim();
const isFile = (f) => existsSync(f) && statSync(f).isFile();
const escapeText = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const ABOUT_URL = {
  en: '/en/about-us/',
  es: '/es/sobre-nosotros/',
  fr: '/fr/a-propos/',
  cs: '/cs/o-nas/',
  pl: '/pl/o-nas/',
  tr: '/tr/hakkimizda/',
  de: '/de/ueber-uns/',
  ja: '/ja/watashitachi-ni-tsuite/',
};

// Forme italiane che compaiono come <strong> dentro blocchi tradotti.
const ITALIAN_STRONGS = new Set([
  'Se avessi saputo...',
  'Se fossi partito...',
  'Ti do il libro.',
  'Mi mandi la foto?',
  'Porto i documenti a Marco.',
  'Ci spieghi la regola?',
  'potere',
  'volere',
  'dovere',
  'modale + infinito',
  'il',
  'lo',
  'la',
  'l’',
  "l'",
  'di',
  'da',
  'in',
  'con',
  'su',
  'per',
  'tra / fra',
  'a',
  'e',
  'o',
  'i',
  "C'è + singolare",
  'Ci sono + plurale',
  'andare',
  'fare',
  'stare',
  'venire',
  'Passato prossimo',
  'Imperfetto',
  'Avere',
  'Essere',
]);

// Etichette che nell'originale contengono un ausiliare italiano.
const AUX_LABELS = {
  'Con avere': {
    en: 'With avere',
    es: 'Con avere',
    fr: 'Avec avere',
    cs: 'Se slovesem avere',
    pl: 'Z avere',
    tr: 'avere ile',
    de: 'Mit avere',
    ja: 'avere を使う場合',
  },
  'Con essere': {
    en: 'With essere',
    es: 'Con essere',
    fr: 'Avec essere',
    cs: 'Se slovesem essere',
    pl: 'Z essere',
    tr: 'essere ile',
    de: 'Mit essere',
    ja: 'essere を使う場合',
  },
  'Con essere cambia la finale': {
    en: 'With essere the ending changes',
    es: 'Con essere cambia la terminación',
    fr: 'Avec essere, la terminaison change',
    cs: 'Se slovesem essere se mění koncovka',
    pl: 'Z essere zmienia się końcówka',
    tr: 'essere ile son ek değişir',
    de: 'Mit essere ändert sich die Endung',
    ja: 'essere では語尾が変わる',
  },
};

const stats = {};
const bump = (k, n = 1) => {
  stats[k] = (stats[k] || 0) + n;
};
const warnings = [];

// --- mappa pagina localizzata -> pagina italiana --------------------------
function buildMap() {
  const out = [];
  for (const a of globSync('**/*.astro', { cwd: PAGES })) {
    const src = readFileSync(path.join(PAGES, a), 'utf8');
    const lang = (src.match(/"lang":\s*"([a-z-]+)"/) || [])[1];
    const page = (src.match(/"path":\s*"([^"]+)"/) || [])[1];
    const itHref = (src.match(/\[\s*"it",\s*"([^"]+)"\s*\]/) || [])[1];
    if (!lang || !page) continue;
    let itPath = null;
    if (itHref) {
      itPath = itHref.replace('https://italianoconmartin.com/', '');
      if (itPath.endsWith('/')) itPath += 'index.html';
    }
    out.push({ lang, page, itPath });
  }
  return out;
}

// Un nodo di testo nudo è materiale italiano se è una frase completa o se
// contiene i segni usati per gli esempi (→, ❌, ✓).
function looksItalianSample(text) {
  const t = norm(text);
  if (!t) return false;
  if (/[→❌✓]/.test(t)) return true;
  return /^[A-ZÀÈÉÌÒÙ«“"']/.test(t) && /[.!?»]$/.test(t);
}

function decideStrong(itText, lang) {
  const t = norm(itText);
  if (PREFIXES[t]) return { mode: 'label', value: PREFIXES[t][lang] };
  if (AUX_LABELS[t]) return { mode: 'label', value: AUX_LABELS[t][lang] };
  if (LABELS[t]) return { mode: 'label', value: LABELS[t][lang] };
  if (ITALIAN_STRONGS.has(t)) return { mode: 'italian' };
  return { mode: 'keep' };
}

// Ricostruisce un blocco misto partendo dalla struttura italiana e tenendo il
// testo già localizzato soltanto per i nodi che sono lingua-veicolo.
function mergeBlock($it, itEl, $loc, locEl, lang) {
  const itKids = $it(itEl).contents().toArray();
  const locKids = $loc(locEl).contents().toArray();
  if (itKids.length !== locKids.length) return null;
  let changed = false;
  const parts = [];
  let afterPrefix = false;
  for (let i = 0; i < itKids.length; i++) {
    const itk = itKids[i];
    const lok = locKids[i];
    if (itk.type === 'text') {
      const itText = itk.data;
      const locText = lok.type === 'text' ? lok.data : $loc(lok).text();
      if (afterPrefix || looksItalianSample(itText)) {
        // Frammento italiano dentro un blocco misto: va marcato (cap. 6).
        const lead = itText.match(/^\s*/)[0];
        const tail = itText.match(/\s*$/)[0];
        parts.push(`${lead}<span lang="it">${escapeText(norm(itText))}</span>${tail}`);
        if (norm(itText) !== norm(locText)) changed = true;
      } else {
        parts.push(escapeText(locText));
      }
      afterPrefix = false;
      continue;
    }
    const tag = itk.tagName ? itk.tagName.toLowerCase() : '';
    if (tag === 'br') {
      parts.push('<br>');
      afterPrefix = false;
      continue;
    }
    if (tag === 'strong' || tag === 'em' || tag === 'b') {
      const itInner = $it(itk).html();
      const itText = norm($it(itk).text());
      const decision = tag === 'em' ? { mode: 'italian' } : decideStrong(itText, lang);
      afterPrefix = PREFIXES[itText] !== undefined;
      if (decision.mode === 'italian') {
        parts.push(`<${tag} lang="it">${itInner}</${tag}>`);
        if (itText !== norm($loc(lok).text())) changed = true;
      } else if (decision.mode === 'label') {
        parts.push(`<${tag}>${escapeText(decision.value)}</${tag}>`);
        if (norm(decision.value) !== norm($loc(lok).text())) changed = true;
      } else {
        parts.push($loc.html($loc(lok)));
      }
      continue;
    }
    if (looksItalianSample($it(itk).text())) {
      parts.push($it.html($it(itk)));
      changed = true;
    } else {
      parts.push($loc.html($loc(lok)));
    }
    afterPrefix = false;
  }
  return changed ? parts.join('') : null;
}

// Il blocco è interamente materiale italiano: si ripristina tale e quale.
const fullyItalian = ($it, el) => /[→❌✓]/.test(norm($it(el).text()));

// --- ripristino dell'italiano citato fra virgolette ------------------------
const QUOTES = /([“"«])\s*([^“”"«»]{1,80}?)\s*([”"»])/g;
function quotedIn(text) {
  const out = [];
  QUOTES.lastIndex = 0;
  let m;
  while ((m = QUOTES.exec(text)) !== null) out.push(m[2]);
  return out;
}

function restoreQuoted($it, $loc) {
  for (const sel of ['h1', 'h2', 'h3', 'h4', 'p', 'li', 'label']) {
    const itEls = $it(sel).toArray();
    const locEls = $loc(sel).toArray();
    if (!itEls.length || itEls.length !== locEls.length) continue;
    itEls.forEach((itEl, i) => {
      const itTokens = quotedIn($it(itEl).text());
      if (!itTokens.length) return;
      const nodes = [];
      const walk = (el) => {
        $loc(el)
          .contents()
          .each((_, n) => {
            if (n.type === 'text') nodes.push(n);
            else if (n.tagName && !['script', 'style'].includes(n.tagName.toLowerCase())) walk(n);
          });
      };
      walk(locEls[i]);
      const total = nodes.reduce((a, n) => a + quotedIn(n.data).length, 0);
      if (total !== itTokens.length) return;
      let idx = 0;
      for (const n of nodes) {
        if (!/[“"«]/.test(n.data)) continue;
        let touched = false;
        QUOTES.lastIndex = 0;
        const replaced = escapeText(n.data).replace(QUOTES, (full, q1, inner, q2) => {
          const wanted = itTokens[idx++];
          if (norm(inner) === norm(wanted)) return full;
          touched = true;
          return `${q1}<span lang="it">${escapeText(wanted)}</span>${q2}`;
        });
        if (touched) {
          $loc(n).replaceWith(replaced);
          bump('termine italiano fra virgolette');
        }
      }
    });
  }
}

// --- corsivi e grassetti in linea nel testo discorsivo ---------------------
const inlineScope = ($, tag) =>
  $(`p ${tag}, li ${tag}`).filter(
    (_, e) =>
      $(e).closest(
        '.italian-box, .dialogue, .rule-card, .card, .cols, .mistake, .example, .translation-prompt, .proposed-solution'
      ).length === 0
  );

function restoreInlineItalian($it, $loc) {
  for (const tag of ['strong', 'em']) {
    const itEls = inlineScope($it, tag).toArray();
    const locEls = inlineScope($loc, tag).toArray();
    if (!itEls.length || itEls.length !== locEls.length) continue;
    itEls.forEach((itEl, i) => {
      const itText = norm($it(itEl).text());
      // Un grassetto che finisce con i due punti introduce la frase: è
      // un'etichetta di servizio e resta nella lingua del visitatore.
      if (!itText || itText.endsWith(':')) return;
      const target = $loc(locEls[i]);
      if (norm(target.text()) !== itText) {
        target.html($it(itEl).html());
        bump('forma italiana nel testo');
      }
      target.attr('lang', 'it');
    });
  }
}

// --- maiuscole e punto finale nei titoli ----------------------------------
// La traduzione automatica ha lasciato titoli come «regla», «hablar» o
// «Ejercicios con retroalimentación inmediata.»: si allineano alla forma del
// titolo italiano, che è la stessa in tutte le lingue.
function fixHeadingShape($it, $loc) {
  const TRIM_DOT = /^(h[1-4]|button)$/i;
  for (const sel of ['h1', 'h2', 'h3', 'h4', 'button', '.status', 'label', 'p', '.score-card strong']) {
    const itEls = $it(sel).toArray();
    const locEls = $loc(sel).toArray();
    if (!itEls.length || itEls.length !== locEls.length) continue;
    itEls.forEach((itEl, i) => {
      const target = $loc(locEls[i]);
      const itText = norm($it(itEl).text());
      if (!itText || !/^\p{Lu}/u.test(itText)) return;
      if (target.children().length) {
        // elemento con tag interni: si tocca soltanto la prima parola
        const first = target.contents().first();
        if (!first.length || first[0].type !== 'text') return;
        const data = first[0].data;
        const m = data.match(/^(\s*)(\p{Ll})/u);
        if (!m) return;
        first[0].data = `${m[1]}${m[2].toUpperCase()}${data.slice(m[0].length)}`;
        bump('forma del titolo');
        return;
      }
      const locText = norm(target.text());
      if (!locText) return;
      let next = locText;
      if (/^\p{Ll}/u.test(next)) next = next[0].toUpperCase() + next.slice(1);
      if (!itText.endsWith('.') && next.endsWith('.') && TRIM_DOT.test(target[0].tagName || '')) {
        next = next.slice(0, -1);
      }
      if (next !== locText) {
        target.text(next);
        bump('forma del titolo');
      }
    });
  }
}

// --- navigazione interna della lezione ------------------------------------
function applyNavLabels($it, $loc, lang) {
  const itEls = $it('.lesson-nav a, .tabs a').toArray();
  const locEls = $loc('.lesson-nav a, .tabs a').toArray();
  if (!itEls.length || itEls.length !== locEls.length) return;
  itEls.forEach((el, i) => {
    const tr = NAV_LABELS[norm($it(el).text())];
    if (!tr || !tr[lang]) return;
    const target = $loc(locEls[i]);
    if (norm(target.text()) !== norm(tr[lang].replace(/<[^>]+>/g, ''))) {
      target.html(tr[lang]);
      bump('voce di navigazione');
    }
  });
}

// --- suggerimenti degli esercizi ------------------------------------------
// Mostrano la forma italiana da usare: sono materiale di studio e restano in
// italiano. Tradotti diventavano falsi («Essere: che lui sia» → «Ser: para que
// él sea»), cioè indicavano una forma che in italiano non esiste.
function restoreHints($it, $loc) {
  const itEls = $it('[data-hint]').toArray();
  const locEls = $loc('[data-hint]').toArray();
  if (!itEls.length || itEls.length !== locEls.length) return;
  itEls.forEach((el, i) => {
    const hint = $it(el).attr('data-hint');
    if ($loc(locEls[i]).attr('data-hint') !== hint) {
      $loc(locEls[i]).attr('data-hint', hint);
      bump('suggerimento di esercizio');
    }
  });
}

// --------------------------------------------------------------------------
function applyStructural($it, $loc, lang, entry) {
  // dialoghi: interamente italiani
  const itDial = $it('.dialogue').toArray();
  const locDial = $loc('.dialogue').toArray();
  if (itDial.length === locDial.length) {
    itDial.forEach((el, i) => {
      if (norm($it(el).text()) !== norm($loc(locDial[i]).text())) {
        $loc(locDial[i]).html($it(el).html()).attr('lang', 'it');
        bump('dialogo ripristinato');
      }
    });
  }

  // riquadri misti
  for (const sel of ['.rule-card', '.grid .card', '.cols .card']) {
    const itEls = $it(sel).toArray();
    const locEls = $loc(sel).toArray();
    if (itEls.length !== locEls.length) {
      if (itEls.length) warnings.push(`${entry.page}: ${sel} ${itEls.length}≠${locEls.length}`);
      continue;
    }
    itEls.forEach((el, i) => {
      if (fullyItalian($it, el)) {
        if (norm($it(el).text()) !== norm($loc(locEls[i]).text())) {
          $loc(locEls[i]).html($it(el).html()).attr('lang', 'it');
          bump(`${sel} ripristinato`);
        }
        return;
      }
      const merged = mergeBlock($it, el, $loc, locEls[i], lang);
      if (merged !== null) {
        $loc(locEls[i]).html(merged);
        bump(`${sel} ricomposto`);
      }
    });
  }

  // tabelle: celle italiane ripristinate, etichette tradotte
  for (const sel of ['table.tbl', 'table.conj-table']) {
    const itT = $it(sel).toArray();
    const locT = $loc(sel).toArray();
    if (itT.length !== locT.length) continue;
    itT.forEach((el, i) => {
      const itCells = $it(el).find('th, td').toArray();
      const locCells = $loc(locT[i]).find('th, td').toArray();
      if (itCells.length !== locCells.length) {
        warnings.push(`${entry.page}: ${sel} celle ${itCells.length}≠${locCells.length}`);
        return;
      }
      itCells.forEach((c, k) => {
        const itText = norm($it(c).text());
        const target = $loc(locCells[k]);
        const isHeader = c.tagName && c.tagName.toLowerCase() === 'th';
        if (CELL_LABELS[itText]) {
          if (norm(target.text()) !== CELL_LABELS[itText][lang]) {
            target.text(CELL_LABELS[itText][lang]);
            bump('cella: etichetta tradotta');
          }
          target.removeAttr('lang');
        } else {
          if (norm(target.text()) !== itText) {
            target.html($it(c).html());
            bump('cella: italiano ripristinato');
          }
          // Il corpo della tabella è tutto italiano: si marca una volta sola
          // su <tbody>, non cella per cella.
          if (isHeader) target.attr('lang', 'it');
          else target.removeAttr('lang');
        }
      });
      $loc(locT[i]).find('tbody').attr('lang', 'it');
    });
  }
}

// Etichette dentro i riquadri di esempio e di errore. La decisione si prende
// sempre guardando il testo ITALIANO di partenza, mai quello già localizzato:
// così la correzione si può rieseguire senza peggiorare le pagine.
function applyLabels($it, $loc, lang) {
  const itEx = $it('.example > strong').toArray();
  const locEx = $loc('.example > strong').toArray();
  if (itEx.length === locEx.length) {
    itEx.forEach((itEl, i) => {
      const itText = norm($it(itEl).text());
      const target = $loc(locEx[i]);
      if (LABELS[itText]) {
        if (norm(target.text()) !== LABELS[itText][lang]) {
          target.text(LABELS[itText][lang]);
          bump('etichetta di esempio');
        }
        target.removeAttr('lang');
      } else {
        if (norm(target.text()) !== itText) {
          target.html($it(itEl).html());
          bump('esempio italiano');
        }
        target.attr('lang', 'it');
      }
    });
  }

  const itMis = $it('.mistake > strong').toArray();
  const locMis = $loc('.mistake > strong').toArray();
  if (itMis.length !== locMis.length) return;
  itMis.forEach((itEl, i) => {
    const itHtml = $it(itEl).html() || '';
    const itText = norm($it(itEl).text());
    const target = $loc(locMis[i]);
    const hit = Object.keys(PREFIXES).find((p) => itText.startsWith(p));
    if (hit) {
      const rest = itHtml.slice(itHtml.indexOf(hit) + hit.length);
      const wanted = `${escapeText(PREFIXES[hit][lang])}<span lang="it">${rest}</span>`;
      if ((target.html() || '') !== wanted) {
        target.html(wanted);
        bump('prefisso di errore');
      }
    } else {
      if (norm(target.text()) !== itText) {
        target.html(itHtml);
        bump('errore tipico ripristinato');
      }
      target.attr('lang', 'it');
    }
  });
}

function applyItalianBox($loc, lang, itPath) {
  const box = ITALIAN_BOX[itPath];
  if (!box || !box[lang]) return;
  $loc('.italian-box').each((_, e) => {
    if (norm($loc(e).text()) !== norm(box[lang].replace(/<[^>]+>/g, ''))) {
      $loc(e).html(box[lang]);
      bump('angolo italiano');
    }
  });
}

function applyComprehension($it, $loc) {
  const itH3 = $it('h3')
    .filter((_, e) => $it(e).next('ol').length > 0)
    .toArray();
  if (!itH3.length) return;
  const locH3 = $loc('h3')
    .filter((_, e) => $loc(e).next('ol').length > 0)
    .toArray();
  if (itH3.length !== locH3.length) return;
  itH3.forEach((h3, i) => {
    const itItems = $it(h3).next('ol').children('li').toArray();
    const locItems = $loc(locH3[i]).next('ol').children('li').toArray();
    if (itItems.length !== locItems.length) return;
    const box = $loc(locH3[i]).closest('[id]');
    const level = (box.attr('id') || 'a1').toLowerCase();
    const withGloss = level === 'a1' || level === 'a2';
    itItems.forEach((li, k) => {
      const itText = norm($it(li).text());
      const target = $loc(locItems[k]);
      const locText = norm(target.find('.q-gloss').text() || target.text());
      if (norm(target.children('span[lang="it"]').text()) === itText) return;
      const gloss =
        withGloss && locText && locText !== itText ? `<span class="q-gloss">${escapeText(locText)}</span>` : '';
      target.html(`<span lang="it">${escapeText(itText)}</span>${gloss}`);
      bump('domanda di comprensione');
    });
  });
}

function applyLessonCards($it, $loc, lang) {
  const itCards = $it('.lesson-card').toArray();
  const locCards = $loc('.lesson-card').toArray();
  if (!itCards.length || itCards.length !== locCards.length) return;
  itCards.forEach((el, i) => {
    const itText = norm($it(el).find('p').first().text());
    const tr = LESSON_CARD[itText];
    if (!tr || !tr[lang]) return;
    const target = $loc(locCards[i]).find('p').first();
    if (norm(target.text()) !== norm(tr[lang].replace(/<[^>]+>/g, ''))) {
      target.html(tr[lang]);
      bump('descrizione di indice');
    }
  });
}

// --- riga del focus grammaticale nei blocchi per livello -------------------
function applyLevelFocus($it, $loc, lang) {
  const itEls = $it('.story-card header > p, .grammar-lesson header > p').toArray();
  const locEls = $loc('.story-card header > p, .grammar-lesson header > p').toArray();
  if (!itEls.length || itEls.length !== locEls.length) return;
  itEls.forEach((itEl, i) => {
    const tr = LEVEL_FOCUS[norm($it(itEl).text())];
    if (!tr || !tr[lang]) return;
    const target = $loc(locEls[i]);
    if (norm(target.text()) !== tr[lang]) {
      target.text(tr[lang]);
      bump('focus del livello');
    }
  });
}

function applyTranslationPrompts($loc, lang) {
  if (lang === 'en') return;
  $loc('.translation-prompt strong').each((_, e) => {
    const el = $loc(e);
    const tr = TRANSLATION_PROMPTS[norm(el.text())];
    if (tr && tr[lang]) {
      el.attr('lang', lang).text(tr[lang]);
      bump('frase da tradurre');
    }
  });
}

// --------------------------------------------------------------------------
function fixPage(entry) {
  const locFile = path.join(HTML, entry.page);
  if (!isFile(locFile)) return;
  const before = readFileSync(locFile, 'utf8');
  const $loc = cheerio.load(before, null, false);
  const { lang } = entry;

  $loc('[aria-label="PDF downloads"]').each((_, e) => {
    if (PDF_DOWNLOADS[lang] && $loc(e).attr('aria-label') !== PDF_DOWNLOADS[lang]) {
      $loc(e).attr('aria-label', PDF_DOWNLOADS[lang]);
      bump('etichetta download PDF');
    }
  });

  if (lang !== 'it') {
    $loc('a[href="/chi-siamo/"]').each((_, e) => {
      if (ABOUT_URL[lang]) {
        $loc(e).attr('href', ABOUT_URL[lang]);
        bump('link alla pagina italiana');
      }
    });

    const itFile = entry.itPath ? path.join(HTML, entry.itPath) : null;
    if (itFile && isFile(itFile)) {
      const $it = cheerio.load(readFileSync(itFile, 'utf8'), null, false);
      restoreQuoted($it, $loc);
      restoreInlineItalian($it, $loc);
      applyNavLabels($it, $loc, lang);
      fixHeadingShape($it, $loc);
      restoreHints($it, $loc);
      applyLabels($it, $loc, lang);
      applyStructural($it, $loc, lang, entry);
      applyItalianBox($loc, lang, entry.itPath);
      applyComprehension($it, $loc);
      applyLessonCards($it, $loc, lang);
      applyLevelFocus($it, $loc, lang);
    }
    applyTranslationPrompts($loc, lang);
  }

  let html = $loc.html();
  if (lang !== 'it' && html.includes('Martín')) {
    html = html.replace(/Martín/g, 'Martin');
    bump('nome dell’insegnante');
  }
  if (html !== before) {
    if (!DRY) writeFileSync(locFile, html);
    bump('PAGINE MODIFICATE');
  }
}

const map = buildMap().filter((m) => (!ONLY_LANG || m.lang === ONLY_LANG) && (!ONLY || m.page.includes(ONLY)));
for (const entry of map) fixPage(entry);

console.log(DRY ? '— prova a vuoto —' : '— modifiche applicate —');
for (const [k, v] of Object.entries(stats).sort((a, b) => b[1] - a[1])) console.log(`${String(v).padStart(6)}  ${k}`);
if (warnings.length) {
  console.log(`\nstrutture non allineate: ${warnings.length}`);
  warnings.slice(0, 20).forEach((w) => console.log('  ' + w));
}

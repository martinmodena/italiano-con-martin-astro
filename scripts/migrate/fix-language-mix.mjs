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
  en: '/en/about-us/', es: '/es/sobre-nosotros/', fr: '/fr/a-propos/', cs: '/cs/o-nas/',
  pl: '/pl/o-nas/', tr: '/tr/hakkimizda/', de: '/de/ueber-uns/', ja: '/ja/watashitachi-ni-tsuite/',
};

// Forme italiane che compaiono come <strong> dentro blocchi tradotti.
const ITALIAN_STRONGS = new Set([
  'Se avessi saputo...', 'Se fossi partito...',
  'Ti do il libro.', 'Mi mandi la foto?', 'Porto i documenti a Marco.', 'Ci spieghi la regola?',
  'potere', 'volere', 'dovere', 'modale + infinito',
  'il', 'lo', 'la', 'l’', "l'", 'di', 'da', 'in', 'con', 'su', 'per', 'tra / fra', 'a', 'e', 'o', 'i',
  "C'è + singolare", 'Ci sono + plurale',
  'andare', 'fare', 'stare', 'venire',
  'Passato prossimo', 'Imperfetto', 'Avere', 'Essere',
]);

// Etichette che nell'originale contengono un ausiliare italiano.
const AUX_LABELS = {
  'Con avere': { en: 'With avere', es: 'Con avere', fr: 'Avec avere', cs: 'Se slovesem avere', pl: 'Z avere', tr: 'avere ile', de: 'Mit avere', ja: 'avere を使う場合' },
  'Con essere': { en: 'With essere', es: 'Con essere', fr: 'Avec essere', cs: 'Se slovesem essere', pl: 'Z essere', tr: 'essere ile', de: 'Mit essere', ja: 'essere を使う場合' },
  'Con essere cambia la finale': { en: 'With essere the ending changes', es: 'Con essere cambia la terminación', fr: 'Avec essere, la terminaison change', cs: 'Se slovesem essere se mění koncovka', pl: 'Z essere zmienia się końcówka', tr: 'essere ile son ek değişir', de: 'Mit essere ändert sich die Endung', ja: 'essere では語尾が変わる' },
};

const stats = {};
const bump = (k, n = 1) => { stats[k] = (stats[k] || 0) + n; };
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
        parts.push(escapeText(itText));
        if (norm(itText) !== norm(locText)) changed = true;
      } else {
        parts.push(escapeText(locText));
      }
      afterPrefix = false;
      continue;
    }
    const tag = itk.tagName ? itk.tagName.toLowerCase() : '';
    if (tag === 'br') { parts.push('<br>'); afterPrefix = false; continue; }
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
      if (merged !== null) { $loc(locEls[i]).html(merged); bump(`${sel} ricomposto`); }
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
        if (LABELS[itText]) {
          if (norm(target.text()) !== LABELS[itText][lang]) {
            target.text(LABELS[itText][lang]);
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

function applyLabels($loc, lang) {
  $loc('.example > strong').each((_, e) => {
    const el = $loc(e);
    const t = norm(el.text());
    if (LABELS[t]) { el.text(LABELS[t][lang]); el.removeAttr('lang'); bump('etichetta di esempio'); }
    else if (!el.attr('lang')) el.attr('lang', 'it');
  });
  $loc('.mistake > strong').each((_, e) => {
    const el = $loc(e);
    const html = el.html() || '';
    const t = norm(el.text());
    const hit = Object.keys(PREFIXES).find((p) => t.startsWith(p));
    if (hit) {
      const rest = html.slice(html.indexOf(hit) + hit.length);
      el.html(`${escapeText(PREFIXES[hit][lang])}<span lang="it">${rest}</span>`);
      bump('prefisso di errore');
    } else if (!el.attr('lang')) {
      el.attr('lang', 'it');
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

function applyComprehension($it, $loc, lang) {
  const itH3 = $it('h3').filter((_, e) => norm($it(e).text()) === 'Comprensione').toArray();
  if (!itH3.length) return;
  const locH3 = $loc('h3').filter((_, e) => $loc(e).next('ol').length > 0).toArray();
  if (itH3.length !== locH3.length) return;
  itH3.forEach((h3, i) => {
    const itItems = $it(h3).next('ol').children('li').toArray();
    const locItems = $loc(locH3[i]).next('ol').children('li').toArray();
    if (itItems.length !== locItems.length) return;
    const level = ($loc(locH3[i]).closest('.story-card').attr('id') || 'a1').toLowerCase();
    const withGloss = level === 'a1' || level === 'a2';
    itItems.forEach((li, k) => {
      const itText = norm($it(li).text());
      const target = $loc(locItems[k]);
      const locText = norm(target.find('.q-gloss').text() || target.text());
      if (norm(target.children('span[lang="it"]').text()) === itText) return;
      const gloss = withGloss && locText && locText !== itText
        ? `<span class="q-gloss">${escapeText(locText)}</span>` : '';
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

function applyTranslationPrompts($loc, lang) {
  if (lang === 'en') return;
  $loc('.translation-prompt strong').each((_, e) => {
    const el = $loc(e);
    const tr = TRANSLATION_PROMPTS[norm(el.text())];
    if (tr && tr[lang]) { el.attr('lang', lang).text(tr[lang]); bump('frase da tradurre'); }
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
    if (PDF_DOWNLOADS[lang]) { $loc(e).attr('aria-label', PDF_DOWNLOADS[lang]); bump('etichetta download PDF'); }
  });

  if (lang !== 'it') {
    $loc('a[href="/chi-siamo/"]').each((_, e) => {
      if (ABOUT_URL[lang]) { $loc(e).attr('href', ABOUT_URL[lang]); bump('link alla pagina italiana'); }
    });

    const itFile = entry.itPath ? path.join(HTML, entry.itPath) : null;
    if (itFile && isFile(itFile)) {
      const $it = cheerio.load(readFileSync(itFile, 'utf8'), null, false);
      applyStructural($it, $loc, lang, entry);
      applyItalianBox($loc, lang, entry.itPath);
      applyComprehension($it, $loc, lang);
      applyLessonCards($it, $loc, lang);
    }
    applyLabels($loc, lang);
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

#!/usr/bin/env node
// Crea le lezioni A1 «I numeri», «Che ore sono?», «Giorni, mesi e date» e (2026-10-06)
// «Gli avverbi di frequenza»; sempre il 2026-10-06 le lezioni A2 «Il passato prossimo» (rifatta agli
// stessi URL) e «I participi passati irregolari», con 50 esercizi e una testata; poi «Stare +
// gerundio» (A2, 30 esercizi, senza testata).
// Ogni lezione può dichiarare `level` (default 'a1'), `exerciseCount` (default 30), `hero`
// (immagine in public/assets/, con `heroAlt` nei testi) e `after` (lo slug italiano della
// tessera dopo cui va la sua tessera nell'indice; default: dopo l'ultima lezione A1).
// Con --only slug1,slug2 riscrive solo le pagine di quelle lezioni.
// in tutte e 9 le lingue: frammenti in src/html, pagine .astro, tessere negli
// indici di grammatica, voci in public/sitemap.xml e in grammar-seo-*.mjs.
//
// Uso:  node scripts/create-a1-numbers-time-lessons.mjs
//
// Il contenuto sta in scripts/data/lezioni-a1/: `<slug>.mjs` ha la struttura
// della lezione e i testi italiani, `<slug>-i18n.mjs` le spiegazioni tradotte.
// Etichette di tabella e voci di navigazione vengono da labels.mjs e
// table-cells.mjs, come vuole scripts/audit-language-mix.mjs.
// Lo script è idempotente: riscrive le pagine, non duplica tessere né voci.

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { LABELS, NAV_LABELS, PDF_DOWNLOADS, PREFIXES } from './data/labels.mjs';
import { TABLE_CELLS } from './data/table-cells.mjs';
import { grammarSeoSlugs } from './grammar-seo-slugs.mjs';
import numeri from './data/lezioni-a1/numeri.mjs';
import numeriI18n from './data/lezioni-a1/numeri-i18n.mjs';
import ore from './data/lezioni-a1/che-ore-sono.mjs';
import oreI18n from './data/lezioni-a1/che-ore-sono-i18n.mjs';
import date from './data/lezioni-a1/giorni-mesi-date.mjs';
import dateI18n from './data/lezioni-a1/giorni-mesi-date-i18n.mjs';
import avverbi from './data/lezioni-a1/avverbi-di-frequenza.mjs';
import avverbiI18n from './data/lezioni-a1/avverbi-di-frequenza-i18n.mjs';
import passato from './data/lezioni-a2/passato-prossimo.mjs';
import passatoI18n from './data/lezioni-a2/passato-prossimo-i18n.mjs';
import participi from './data/lezioni-a2/participi-passati-irregolari.mjs';
import participiI18n from './data/lezioni-a2/participi-passati-irregolari-i18n.mjs';
import gerundio from './data/lezioni-a2/stare-gerundio.mjs';
import gerundioI18n from './data/lezioni-a2/stare-gerundio-i18n.mjs';
import connettivi from './data/lezioni-b1/connettivi.mjs';
import connettiviI18n from './data/lezioni-b1/connettivi-i18n.mjs';

const ROOT = process.cwd();
const SITE = 'https://italianoconmartin.com';
const LANGS = ['it', 'en', 'es', 'fr', 'cs', 'pl', 'tr', 'de', 'ja'];
const DIR = {
  it: 'grammatica',
  en: 'grammar',
  es: 'gramatica',
  fr: 'grammaire',
  cs: 'gramatika',
  pl: 'gramatyka',
  tr: 'dilbilgisi',
  de: 'grammatik',
  ja: 'bunpo',
};
const SEO_TERM = {
  en: 'Italian grammar',
  es: 'gramática italiana',
  fr: 'grammaire italienne',
  cs: 'italská gramatika',
  pl: 'gramatyka włoska',
  tr: 'İtalyanca dil bilgisi',
  de: 'italienische Grammatik',
  ja: 'イタリア語文法',
};

// Testi di servizio già in uso sulle lezioni revisionate.
const COMMON = {
  it: {
    home: 'Home',
    grammar: 'Grammatica',
    eyebrow: 'Grammatica A1',
    minutes: (n) => `${n} minuti`,
    exercises: (n) => `${n} esercizi`,
    level: 'Livello A1',
    mistakesH2: 'Errori comuni',
    exercisesH2: 'Esercizi con feedback immediato',
    conversationH2: 'Portalo nella conversazione',
    result: 'Il tuo risultato',
    score: (n) => `0 risposte corrette su ${n}`,
    reset: 'Ricomincia',
    next: 'Prossima lezione',
    back: 'Torna alla grammatica',
    status: 'Nuova lezione',
  },
  en: {
    home: 'Home',
    grammar: 'Grammar',
    eyebrow: 'Grammar A1',
    minutes: (n) => `${n} minutes`,
    exercises: (n) => `${n} exercises`,
    level: 'Level A1',
    mistakesH2: 'Common mistakes',
    exercisesH2: 'Exercises with instant feedback',
    conversationH2: 'Use it in conversation',
    result: 'Your result',
    score: (n) => `0 correct answers out of ${n}`,
    reset: 'Start again',
    next: 'Next lesson',
    back: 'Back to grammar',
    status: 'New lesson',
  },
  es: {
    home: 'Inicio',
    grammar: 'Gramática',
    eyebrow: 'Gramática A1',
    minutes: (n) => `${n} minutos`,
    exercises: (n) => `${n} ejercicios`,
    level: 'Nivel A1',
    mistakesH2: 'Errores comunes',
    exercisesH2: 'Ejercicios con corrección inmediata',
    conversationH2: 'Llévalo a la conversación',
    result: 'Tu resultado',
    score: (n) => `0 respuestas correctas de ${n}`,
    reset: 'Empezar de nuevo',
    next: 'Próxima lección',
    back: 'Volver a la gramática',
    status: 'Nueva lección',
  },
  fr: {
    home: 'Accueil',
    grammar: 'Grammaire',
    eyebrow: 'Grammaire A1',
    minutes: (n) => `${n} minutes`,
    exercises: (n) => `${n} exercices`,
    level: 'Niveau A1',
    mistakesH2: 'Erreurs fréquentes',
    exercisesH2: 'Exercices avec correction immédiate',
    conversationH2: 'Utilisez-le dans la conversation',
    result: 'Votre résultat',
    score: (n) => `0 bonnes réponses sur ${n}`,
    reset: 'Recommencer',
    next: 'Leçon suivante',
    back: 'Retour à la grammaire',
    status: 'Nouvelle leçon',
  },
  cs: {
    home: 'Domů',
    grammar: 'Gramatika',
    eyebrow: 'Gramatika A1',
    minutes: (n) => `${n} minut`,
    exercises: (n) => `${n} cvičení`,
    level: 'Úroveň A1',
    mistakesH2: 'Časté chyby',
    exercisesH2: 'Cvičení s okamžitou kontrolou',
    conversationH2: 'Použijte to v rozhovoru',
    result: 'Váš výsledek',
    score: (n) => `0 správných odpovědí z ${n}`,
    reset: 'Začít znovu',
    next: 'Další lekce',
    back: 'Zpět ke gramatice',
    status: 'Nová lekce',
  },
  pl: {
    home: 'Dom',
    grammar: 'Gramatyka',
    eyebrow: 'Gramatyka A1',
    minutes: (n) => `${n} minut`,
    exercises: (n) => `${n} ćwiczeń`,
    level: 'Poziom A1',
    mistakesH2: 'Typowe błędy',
    exercisesH2: 'Ćwiczenia z natychmiastową poprawą',
    conversationH2: 'Użyj tego w rozmowie',
    result: 'Twój wynik',
    score: (n) => `0 poprawnych odpowiedzi z ${n}`,
    reset: 'Zacznij od nowa',
    next: 'Następna lekcja',
    back: 'Wróć do gramatyki',
    status: 'Nowa lekcja',
  },
  tr: {
    home: 'Ana sayfa',
    grammar: 'Dilbilgisi',
    eyebrow: 'Dilbilgisi A1',
    minutes: (n) => `${n} dakika`,
    exercises: (n) => `${n} alıştırma`,
    level: 'Seviye A1',
    mistakesH2: 'Yaygın hatalar',
    exercisesH2: 'Anında geri bildirimli alıştırmalar',
    conversationH2: 'Konuşmada kullanın',
    result: 'Sonucunuz',
    score: (n) => `0 doğru cevap / ${n}`,
    reset: 'Baştan başla',
    next: 'Sonraki ders',
    back: 'Dilbilgisine geri dön',
    status: 'Yeni ders',
  },
  de: {
    home: 'Zuhause',
    grammar: 'Grammatik',
    eyebrow: 'Grammatik A1',
    minutes: (n) => `${n} Minuten`,
    exercises: (n) => `${n} Übungen`,
    level: 'Niveau A1',
    mistakesH2: 'Häufige Fehler',
    exercisesH2: 'Übungen mit sofortiger Rückmeldung',
    conversationH2: 'Im Gespräch anwenden',
    result: 'Dein Ergebnis',
    score: (n) => `0 richtige Antworten von ${n}`,
    reset: 'Neu beginnen',
    next: 'Nächste Lektion',
    back: 'Zurück zur Grammatik',
    status: 'Neue Lektion',
  },
  ja: {
    home: 'ホーム',
    grammar: '文法',
    eyebrow: '文法A1',
    minutes: (n) => `${n}分`,
    exercises: (n) => `練習問題${n}問`,
    level: 'レベルA1',
    mistakesH2: 'よくある間違い',
    exercisesH2: 'すぐに答え合わせできる練習問題',
    conversationH2: '会話で使ってみよう',
    result: 'あなたの結果',
    score: (n) => `${n}問中0問正解`,
    reset: 'もう一度始める',
    next: '次のレッスン',
    back: '文法に戻る',
    status: '新しいレッスン',
  },
};

const lessons = [
  { ...numeri, strings: { it: numeri.it, ...numeriI18n } },
  { ...ore, strings: { it: ore.it, ...oreI18n } },
  { ...date, strings: { it: date.it, ...dateI18n } },
  { ...avverbi, strings: { it: avverbi.it, ...avverbiI18n } },
  { ...passato, strings: { it: passato.it, ...passatoI18n } },
  { ...participi, strings: { it: participi.it, ...participiI18n } },
  { ...gerundio, strings: { it: gerundio.it, ...gerundioI18n } },
  { ...connettivi, strings: { it: connettivi.it, ...connettiviI18n } },
];
const onlyArg = process.argv.indexOf('--only');
const only = onlyArg >= 0 ? process.argv[onlyArg + 1].split(',') : null;
for (const lesson of lessons) {
  lesson.slugs = { it: lesson.slug, ...lesson.slugs };
  lesson.level ??= 'a1';
  const keys = Object.keys(lesson.strings.it).filter((key) => !['crumb', 'cardTitle'].includes(key));
  for (const lang of LANGS) {
    if (!lesson.strings[lang]) throw new Error(`${lesson.slug}: mancano i testi ${lang}`);
    const missing = keys.filter((key) => !lesson.strings[lang][key]);
    const extra = Object.keys(lesson.strings[lang]).filter((key) => !(key in lesson.strings.it));
    if (missing.length || extra.length)
      throw new Error(
        `${lesson.slug} ${lang}: mancano ${missing.join(', ') || '-'}; in più ${extra.join(', ') || '-'}`
      );
  }
}

const localSlug = (lang, italianSlug) =>
  lessons.find((l) => l.slug === italianSlug)?.slugs[lang] ?? grammarSeoSlugs[lang]?.[italianSlug] ?? italianSlug;
// Le lezioni che questo script non costruisce (es. «Passato prossimo o imperfetto?») si cercano su disco.
const levelOnDisk = (italianSlug) =>
  ['a1', 'a2', 'b1', 'b2', 'c1'].find((lv) =>
    existsSync(path.join(ROOT, 'src/html/grammatica', lv, `${italianSlug}.html`))
  );
const levelOf = (italianSlug, fallback = 'a1') =>
  lessons.find((l) => l.slug === italianSlug)?.level ?? levelOnDisk(italianSlug) ?? fallback;
const pagePath = (lang, italianSlug, level = levelOf(italianSlug)) =>
  `${lang === 'it' ? '' : `${lang}/`}${DIR[lang]}/${level}/${localSlug(lang, italianSlug)}.html`;
const attr = (s) => String(s).replaceAll('&', '&amp;').replaceAll('"', '&quot;');

function helpers(lang, ownLevel = 'a1') {
  let counter = 0;
  const translate = (dictionary, key, what) => {
    if (lang === 'it') return key;
    const value = dictionary[key]?.[lang];
    if (!value) throw new Error(`${what} senza traduzione ${lang}: «${key}»`);
    return value;
  };
  return {
    cell: (key) => (key.startsWith('=') ? key.slice(1) : translate({ ...LABELS, ...TABLE_CELLS }, key, 'etichetta')),
    table: (headers, rows) =>
      `<table class="conj-table"><thead><tr>${headers.map((h) => `<th>${h.startsWith('=') ? h.slice(1) : translate({ ...LABELS, ...TABLE_CELLS }, h, 'etichetta')}</th>`).join('')}</tr></thead><tbody lang="it">${rows.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table>`,
    examples: (items) =>
      `<div class="example-grid">${items.map(([label, sentence]) => `<div class="example"><strong>${label}</strong><br> <span lang="it">${sentence}</span></div>`).join('')}</div>`,
    mistakes: (pairs) =>
      `<div class="mistake-grid">${pairs.map(([wrong, right]) => `<div class="mistake"><strong>${translate(PREFIXES, 'Errato:', 'prefisso')} <span lang="it">${wrong}</span></strong> ${translate(PREFIXES, 'Corretto:', 'prefisso')} <span lang="it">${right}</span></div>`).join('')}</div>`,
    exercises: (items) =>
      items
        .map(({ q, a, alt, hint }) => {
          counter += 1;
          const altAttr = alt ? ` data-alt="${attr(alt)}"` : '';
          return `<div class="exercise" data-answer="${attr(a)}"${altAttr} data-hint="${attr(hint)}"><label lang="it">${counter}. ${q}</label><input autocomplete="off"><div class="feedback" aria-live="polite"></div></div>`;
        })
        .join(''),
    dialogue: (lines) =>
      `<div class="dialogue" lang="it">${lines.map(([who, text]) => `<p><strong>${who}:</strong> ${text}</p>`).join('')}</div>`,
    nav: (key) => translate(NAV_LABELS, key, 'voce di navigazione'),
    // Link a un'altra lezione di grammatica (slug italiano e livello).
    href: (slug, level) =>
      lang === 'it' ? `${level === ownLevel ? '' : `../${level}/`}${slug}.html` : `/${pagePath(lang, slug, level)}`,
    count: () => counter,
  };
}

function ctaSection(lang) {
  const file = path.join(ROOT, 'src/html', pagePath(lang, 'congiuntivo-imperfetto', 'c1'));
  const match = readFileSync(file, 'utf8').match(/<section class="conversion-section[\s\S]*?<\/section>/);
  if (!match) throw new Error(`CTA non trovata in ${file}`);
  return match[0];
}

function buildFragment(lesson, lang) {
  const L = lesson.strings[lang];
  const c = COMMON[lang];
  const h = helpers(lang, lesson.level);
  const body = lesson.body(L, h, c);
  const total = h.count();
  const expected = lesson.exerciseCount ?? 30;
  if (total !== expected) throw new Error(`${lesson.slug}: ${total} esercizi invece di ${expected}`);
  const LV = lesson.level.toUpperCase();
  const crumbs =
    lang === 'it'
      ? `<a href="../../">Home</a> / <a href="../">Grammatica</a> / ${LV} / ${L.crumb ?? L.h1}`
      : `<a href="/${lang}/">${c.home}</a> / <a href="/${lang}/${DIR[lang]}/">${c.grammar}</a> / ${LV} / ${L.h1}`;
  const nav = lesson.nav.map(([id, key]) => `<a href="#${id}">${h.nav(key)}</a>`).join('');
  const pdf = `/pdf/${lang}/${localSlug(lang, lesson.slug)}-${lesson.level}.pdf`;
  const nextLevel = levelOf(lesson.next, lesson.level);
  const nextHref = !lesson.next
    ? '../'
    : lang === 'it'
      ? `${nextLevel === lesson.level ? '' : `../${nextLevel}/`}${lesson.next}.html`
      : `/${pagePath(lang, lesson.next, nextLevel)}`;
  // Stili in linea: grammar-lesson.css non ha versione e i browser lo terrebbero in cache.
  const hero = lesson.hero
    ? `<figure style="margin:26px 0 0"><img src="/assets/${lesson.hero.src}" alt="${attr(L.heroAlt)}" width="${lesson.hero.width}" height="${lesson.hero.height}" decoding="async" loading="eager" fetchpriority="high" style="display:block;width:100%;height:auto;border-radius:24px"></figure>`
    : '';
  const actions = `<div class="score-card"><div><strong>${c.result}</strong><p id="score-text">${c.score(total)}</p></div><strong id="score-percent">0%</strong></div><div class="exercise-actions"><button class="reset-btn" id="reset-exercises" type="button">${c.reset}</button><a class="button primary" href="${nextHref}">${lesson.next ? c.next : c.back}</a></div>`;
  let html = `<main>
  <section class="page-intro"><div class="container lesson-shell"><p class="breadcrumbs">${crumbs}</p><p class="eyebrow">${c.eyebrow.replace('A1', LV)}</p><h1>${L.h1}</h1><p class="lead">${L.lead}</p><div class="lesson-meta"><span>${c.minutes(lesson.minutes)}</span><span>${c.exercises(total)}</span><span>${c.level.replace('A1', LV)}</span></div>${hero}<div class="lesson-nav">${nav}</div><div class="pdf-downloads" aria-label="${PDF_DOWNLOADS[lang]}"><a class="button secondary" href="${pdf}" download="">PDF ${LV}</a></div></div></section>
  <section class="section compact-top"><div class="container lesson-shell">
${body.replace('{{ACTIONS}}', actions)}
  </div></section>
  ${ctaSection(lang)}
</main>
`;
  if (lang === 'it') html = html.replace(/<span lang="it">([^<]*)<\/span>/g, '$1').replaceAll(' lang="it"', '');
  return html;
}

function buildAstro(lesson, lang) {
  const L = lesson.strings[lang];
  const template = path.join(ROOT, 'src/pages', `${pagePath(lang, 'congiuntivo-imperfetto', 'c1')}.astro`);
  const source = readFileSync(template, 'utf8');
  const meta = JSON.parse(source.match(/const meta = (\{[\s\S]*?\n\});/)[1]);
  const own = pagePath(lang, lesson.slug);
  const canonical = `${SITE}/${own}`;
  const LV = lesson.level.toUpperCase();
  const title =
    lang === 'it'
      ? `${L.h1} - livello ${LV} | Italiano con Martin`
      : `${L.h1} | ${SEO_TERM[lang]} ${LV} | Italiano con Martin`;
  meta.path = own;
  meta.title = title;
  meta.description = L.description;
  meta.canonical = canonical;
  const og = {
    'og:title': title,
    'og:description': L.description,
    'og:url': canonical,
    'twitter:title': title,
    'twitter:description': L.description,
  };
  if (lesson.hero) og['og:image'] = og['twitter:image'] = `${SITE}/assets/${lesson.hero.src}`;
  meta.og = meta.og.map(([key, value]) => [key, og[key] ?? value]);
  if (meta.jsonld.length)
    meta.jsonld = [
      JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LearningResource',
        name: L.h1,
        url: canonical,
        inLanguage: lang,
      }),
    ];
  meta.hreflangs = [
    ...LANGS.map((l) => [l, `${SITE}/${pagePath(l, lesson.slug)}`]),
    ['x-default', `${SITE}/${pagePath('it', lesson.slug)}`],
  ];
  let options = meta.optionsHtml;
  for (const l of LANGS)
    options = options.replace(
      new RegExp(`href="[^"]*" hreflang="${l}"`),
      `href="/${pagePath(l, lesson.slug)}" hreflang="${l}"`
    );
  meta.optionsHtml = options;
  return `---
// Generated by scripts/create-a1-numbers-time-lessons.mjs
import SiteLayout from '~/layouts/SiteLayout.astro';
import main from '~/html/${own}?raw';
const meta = ${JSON.stringify(meta, null, 2)};
---

<SiteLayout meta={meta} main={main} />
`;
}

function write(file, content) {
  mkdirSync(path.dirname(file), { recursive: true });
  writeFileSync(file, content);
}

// 1. frammenti e pagine
for (const lesson of lessons.filter((l) => !only || only.includes(l.slug))) {
  for (const lang of LANGS) {
    const own = pagePath(lang, lesson.slug);
    write(path.join(ROOT, 'src/html', own), buildFragment(lesson, lang));
    write(path.join(ROOT, 'src/pages', `${own}.astro`), buildAstro(lesson, lang));
  }
}

// 2. tessere negli indici di grammatica, dopo l'ultima lezione A1
let cards = 0;
for (const lang of LANGS) {
  const file = path.join(ROOT, 'src/html', lang === 'it' ? '' : lang, DIR[lang], 'index.html');
  let html = readFileSync(file, 'utf8');
  const anchorHref =
    lang === 'it' ? 'a1/aggettivi-e-pronomi-possessivi.html' : `/${pagePath(lang, 'aggettivi-e-pronomi-possessivi')}`;
  let anchor = html.split('\n').findIndex((line) => line.includes(`href="${anchorHref}"`));
  if (anchor < 0) throw new Error(`indice ${lang}: tessera di riferimento non trovata`);
  const lines = html.split('\n');
  const hrefOf = (slug) => (lang === 'it' ? `${levelOf(slug)}/${slug}.html` : `/${pagePath(lang, slug)}`);
  for (const lesson of lessons) {
    const L = lesson.strings[lang];
    const href = hrefOf(lesson.slug);
    let card = `          <a class="lesson-card ready" href="${href}"><span class="status">${COMMON[lang].status}</span><h3>${L.cardTitle ?? L.h1}</h3><p>${L.card}</p></a>`;
    if (lang === 'it') card = card.replace(/<span lang="it">([^<]*)<\/span>/g, '$1');
    if (lesson.after) {
      anchor = lines.findIndex((line) => line.includes(`href="${hrefOf(lesson.after)}"`));
      if (anchor < 0) throw new Error(`indice ${lang}: tessera ${lesson.after} non trovata`);
    }
    const existing = lines.findIndex((line) => line.includes(`href="${href}"`));
    if (existing >= 0) {
      // Una lezione rifatta (il passato prossimo) aggiorna il testo della tessera che c'era già.
      if (lesson.level !== 'a1') lines[existing] = card;
      anchor = existing;
      continue;
    }
    lines.splice(anchor + 1, 0, card);
    anchor += 1;
    cards += 1;
  }
  html = lines.join('\n');
  writeFileSync(file, html);
}

// 3. sitemap, dopo l'ultima lezione A1 di ogni lingua
const sitemapFile = path.join(ROOT, 'public/sitemap.xml');
const sitemapLines = readFileSync(sitemapFile, 'utf8').split('\n');
const xmlEscape = (s) => s.replace(/[^\x20-\x7e]/g, (ch) => `&#x${ch.codePointAt(0).toString(16)};`);
let urls = 0;
for (const lang of LANGS) {
  for (const lesson of lessons) {
    const prefix = `${SITE}/${lang === 'it' ? '' : `${lang}/`}${DIR[lang]}/${lesson.level}/`;
    const loc = xmlEscape(`${SITE}/${pagePath(lang, lesson.slug)}`);
    if (sitemapLines.some((line) => line.includes(`<loc>${loc}</loc>`))) continue;
    let last = -1;
    sitemapLines.forEach((line, i) => {
      if (line.includes(`<loc>${prefix}`)) last = i;
    });
    if (last < 0) throw new Error(`sitemap ${lang}: nessuna lezione ${lesson.level}`);
    sitemapLines.splice(last + 1, 0, `  <url><loc>${loc}</loc><changefreq>monthly</changefreq></url>`);
    urls += 1;
  }
}
writeFileSync(sitemapFile, sitemapLines.join('\n'));

// 4. slug e titoli attesi da audit-grammar-seo
function addToSeoMap(file, valueOf) {
  let source = readFileSync(file, 'utf8');
  for (const lang of LANGS.filter((l) => l !== 'it')) {
    const start = source.indexOf(`\n  ${lang}: {`);
    const end = source.indexOf('\n  },', start);
    const block = source.slice(start, end);
    const additions = lessons
      // Prettier toglie le virgolette alle chiavi che non ne hanno bisogno.
      .filter((lesson) => !new RegExp(`\\s'?${lesson.slug}'?:`).test(block))
      .map((lesson) => `\n    '${lesson.slug}': '${valueOf(lesson, lang).replaceAll("'", "\\'")}',`)
      .join('');
    source = source.slice(0, end) + additions + source.slice(end);
  }
  writeFileSync(file, source);
}
addToSeoMap(path.join(ROOT, 'scripts/grammar-seo-slugs.mjs'), (lesson, lang) => lesson.slugs[lang]);
addToSeoMap(path.join(ROOT, 'scripts/grammar-seo-titles.mjs'), (lesson, lang) => lesson.strings[lang].h1);

console.log(
  `Lezioni: ${lessons.length} × ${LANGS.length} lingue = ${lessons.length * LANGS.length} pagine. Tessere nuove negli indici: ${cards}. Voci nuove nella sitemap: ${urls}.`
);
if (!existsSync(path.join(ROOT, 'dist')))
  console.log('Poi: npm run build, generate-pdfs.py --only <slug>, di nuovo npm run build.');

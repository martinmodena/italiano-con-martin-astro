#!/usr/bin/env node
// Crea la lezione A1 «La pronuncia italiana» (2026-10-17) in 10 lingue: frammenti in src/html, pagine
// .astro, tessera in testa all'A1 negli indici di grammatica, sitemap, mappe di grammar-seo-*.mjs e
// l'elenco degli audio in work/pronuncia-audio.json (poi: python scripts/generate-pronuncia-audio.py).
//
// A differenza delle altre lezioni, la pagina non è la stessa tradotta: le «trappole» e i paragoni
// sono scritti per chi parla quella lingua (r/l per il giapponese, le doppie e b/v per lo spagnolo,
// la vocale finale per il portoghese…). Per questo anche la pagina portoghese la scrive questo
// script e non scripts/pt/build-pt.mjs (in paginas.mjs ha `own: true`).
//
// Materiale italiano comune: scripts/data/pronuncia/pronuncia-it.mjs; testi: i18n-<lingua>.mjs.
// Immagini: public/assets/grammatica/pronuncia/ (prompt in docs/prompt-immagini-pronuncia.md).
// Lo script è idempotente. Il PDF (generate-pdfs.py) salta i blocchi .no-print (esercizi e registratore).
//
// Uso:  node scripts/create-pronuncia-lesson.mjs

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { PDF_DOWNLOADS } from './data/labels.mjs';
import {
  SPOKEN,
  MALE_VOICE,
  audioId,
  VOWELS,
  FINAL_VOWELS,
  CG_ROWS,
  CG_QUIZ,
  SOUNDS,
  DOUBLE_PAIRS,
  DOUBLE_QUIZ,
  STRESS_GROUPS,
  STRESS_QUIZ,
  TRAP_QUIZ,
  TRAP_IMAGES,
  TWISTERS,
} from './data/pronuncia/pronuncia-it.mjs';

const ROOT = process.cwd();
const SITE = 'https://italianoconmartin.com';
// PRON_LANGS=it,en limita le lingue (solo per provare mentre si scrivono i testi).
const LANGS = process.env.PRON_LANGS?.split(',') ?? ['it', 'en', 'es', 'pt', 'fr', 'cs', 'pl', 'tr', 'de', 'ja'];
const HREFLANG = { pt: 'pt-BR' };
const code = (lang) => HREFLANG[lang] ?? lang;
const DIR = {
  it: 'grammatica',
  en: 'grammar',
  es: 'gramatica',
  pt: 'gramatica',
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
  pt: 'gramática italiana',
  fr: 'grammaire italienne',
  cs: 'italská gramatika',
  pl: 'gramatyka włoska',
  tr: 'İtalyanca dil bilgisi',
  de: 'italienische Grammatik',
  ja: 'イタリア語文法',
};
// Testi di servizio già in uso sulle altre lezioni A1 (create-a1-numbers-time-lessons.mjs).
const COMMON = {
  it: {
    home: 'Home',
    grammar: 'Grammatica',
    eyebrow: 'Grammatica A1',
    minutes: 'minuti',
    exercises: 'esercizi',
    level: 'Livello A1',
    next: 'Prossima lezione',
    reset: 'Ricomincia',
    status: 'Nuova lezione',
  },
  en: {
    home: 'Home',
    grammar: 'Grammar',
    eyebrow: 'Grammar A1',
    minutes: 'minutes',
    exercises: 'exercises',
    level: 'Level A1',
    next: 'Next lesson',
    reset: 'Start again',
    status: 'New lesson',
  },
  es: {
    home: 'Inicio',
    grammar: 'Gramática',
    eyebrow: 'Gramática A1',
    minutes: 'minutos',
    exercises: 'ejercicios',
    level: 'Nivel A1',
    next: 'Próxima lección',
    reset: 'Empezar de nuevo',
    status: 'Nueva lección',
  },
  pt: {
    home: 'Início',
    grammar: 'Gramática',
    eyebrow: 'Gramática A1',
    minutes: 'minutos',
    exercises: 'exercícios',
    level: 'Nível A1',
    next: 'Próxima lição',
    reset: 'Começar de novo',
    status: 'Lição nova',
  },
  fr: {
    home: 'Accueil',
    grammar: 'Grammaire',
    eyebrow: 'Grammaire A1',
    minutes: 'minutes',
    exercises: 'exercices',
    level: 'Niveau A1',
    next: 'Leçon suivante',
    reset: 'Recommencer',
    status: 'Nouvelle leçon',
  },
  cs: {
    home: 'Domů',
    grammar: 'Gramatika',
    eyebrow: 'Gramatika A1',
    minutes: 'minut',
    exercises: 'cvičení',
    level: 'Úroveň A1',
    next: 'Další lekce',
    reset: 'Začít znovu',
    status: 'Nová lekce',
  },
  pl: {
    home: 'Dom',
    grammar: 'Gramatyka',
    eyebrow: 'Gramatyka A1',
    minutes: 'minut',
    exercises: 'ćwiczeń',
    level: 'Poziom A1',
    next: 'Następna lekcja',
    reset: 'Zacznij od nowa',
    status: 'Nowa lekcja',
  },
  tr: {
    home: 'Ana sayfa',
    grammar: 'Dilbilgisi',
    eyebrow: 'Dilbilgisi A1',
    minutes: 'dakika',
    exercises: 'alıştırma',
    level: 'Seviye A1',
    next: 'Sonraki ders',
    reset: 'Baştan başla',
    status: 'Yeni ders',
  },
  de: {
    home: 'Zuhause',
    grammar: 'Grammatik',
    eyebrow: 'Grammatik A1',
    minutes: 'Minuten',
    exercises: 'Übungen',
    level: 'Niveau A1',
    next: 'Nächste Lektion',
    reset: 'Neu beginnen',
    status: 'Neue Lektion',
  },
  ja: {
    home: 'ホーム',
    grammar: '文法',
    eyebrow: '文法A1',
    minutes: '分',
    exercises: '問',
    level: 'レベルA1',
    next: '次のレッスン',
    reset: 'もう一度始める',
    status: '新しいレッスン',
  },
};
const MINUTES = 30;
const ASSET_VERSION = '20261017';
const IMG = '/assets/grammatica/pronuncia/';
const HERO = { src: 'grammatica/pronuncia-hero.webp', width: 1280, height: 720 };
const LANGUAGE_NAMES = JSON.parse(readFileSync(path.join(ROOT, 'src/data/i18n.json'), 'utf8')).languages;

const S = {};
for (const lang of LANGS) S[lang] = (await import(`./data/pronuncia/i18n-${lang}.mjs`)).default;

// Ogni lingua deve avere le stesse chiavi dell'italiano (salvo le trappole, che sono sue).
function shape(value, prefix = '') {
  if (Array.isArray(value) || typeof value !== 'object' || value === null) return [prefix];
  return Object.entries(value).flatMap(([k, v]) => shape(v, prefix ? `${prefix}.${k}` : k));
}
const itKeys = shape({ ...S.it, traps: { ...S.it.traps, items: [] } });
for (const lang of LANGS.slice(1)) {
  const keys = shape({ ...S[lang], traps: { ...S[lang].traps, items: [] } });
  const missing = itKeys.filter((k) => !keys.includes(k));
  const extra = keys.filter((k) => !itKeys.includes(k));
  if (missing.length || extra.length)
    throw new Error(`pronuncia ${lang}: mancano ${missing.join(', ') || '-'}; in più ${extra.join(', ') || '-'}`);
}

const SLUGS = {
  it: 'pronuncia',
  en: 'italian-pronunciation',
  es: 'pronunciacion-italiana',
  pt: 'pronuncia-do-italiano',
  fr: 'prononciation-italienne',
  cs: 'italska-vyslovnost',
  pl: 'wymowa-wloska',
  tr: 'italyanca-telaffuz',
  de: 'italienische-aussprache',
  ja: 'イタリア語の発音',
};
const pagePath = (lang) => `${lang === 'it' ? '' : `${lang}/`}${DIR[lang]}/a1/${SLUGS[lang]}.html`;
const attr = (s) =>
  String(s)
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replace(/<[^>]+>/g, '');
const plain = (s) => String(s).replace(/<[^>]+>/g, '');
const audios = new Map();
const useAudio = (word) => {
  const id = audioId(word);
  audios.set(id, SPOKEN[id] ?? word);
  return id;
};
Object.keys(SPOKEN).forEach((id) => audios.set(id, SPOKEN[id]));

// Pagina di un'altra lezione nelle 10 lingue, dagli hreflang della pagina italiana.
function hreflangsOf(italianPath) {
  const src = readFileSync(path.join(ROOT, 'src/pages', `${italianPath}.astro`), 'utf8');
  return new Map(JSON.parse(src.match(/const meta = (\{[\s\S]*?\n\});/)[1]).hreflangs);
}
const essere = hreflangsOf('grammatica/a1/verbo-essere.html');
const riflessivi = hreflangsOf('grammatica/a1/verbi-riflessivi.html');
const localPath = (map, lang) => decodeURI(new URL(map.get(code(lang))).pathname).replace(/^\//, '');

function ctaSection(lang) {
  const file = path.join(ROOT, 'src/html', localPath(riflessivi, lang));
  const match = readFileSync(file, 'utf8').match(/<section class="conversion-section[\s\S]*?<\/section>/);
  if (!match) throw new Error(`CTA non trovata in ${file}`);
  return match[0];
}

function buildFragment(lang) {
  const L = S[lang];
  const c = COMMON[lang];
  const ui = L.ui;
  const it = (w) => `<em lang="it">${w}</em>`;
  const play = (word, id = useAudio(word)) =>
    `<button type="button" class="pron-play" data-audio="${id}" aria-label="${attr(ui.play)}: ${attr(word)}"></button>`;
  const slow = (id) =>
    `<button type="button" class="pron-slow" data-audio="${id}" aria-label="${attr(ui.slow)}"></button>`;
  const chips = (words) =>
    `<ul class="pron-words">${words.map((w) => `<li class="pron-word">${play(w)}${it(w)}</li>`).join('')}</ul>`;
  const img = (name, alt, extra = '') =>
    `<img src="${IMG}${name}.webp" alt="${attr(alt)}" width="400" height="400" loading="lazy" decoding="async"${extra}>`;
  const recorder = () =>
    `<div class="pron-rec"><button type="button" class="pron-rec-btn"><span>${ui.record}</span></button><audio controls hidden></audio><span class="pron-rec-msg" aria-live="polite"></span></div>`;
  const meaning = (w) => L.meanings[w] ?? '';
  let n = 0;
  const quiz = (id, h3, p, rows) => {
    n = 0;
    return `<div class="pron-quiz no-print" id="${id}"><h3>${h3}</h3><p>${p}</p>${rows}<div class="pron-quiz-foot"><span class="pron-score" aria-live="polite"></span><button type="button" class="reset-btn pron-again">${ui.again}</button></div></div>`;
  };
  const num = () => `<span class="pron-q-num">${++n}.</span>`;
  const fb = '<span class="pron-fb" aria-live="polite"></span>';
  const optImg = (w) => (TRAP_IMAGES[w] || DOUBLE_PAIRS.flat().includes(w) ? img(TRAP_IMAGES[w] ?? w, '') : '');
  const pairQuestion = ([a, b]) => {
    useAudio(a);
    useAudio(b);
    return `<div class="pron-q" data-pair="${a}|${b}" data-needs-listen="1">${num()}<button type="button" class="pron-play pron-q-play" aria-label="${attr(ui.play)}"></button><span class="pron-opts">${[
      a,
      b,
    ]
      .map(
        (w) =>
          `<button type="button" class="pron-opt" data-value="${w}" data-id="${audioId(w)}" lang="it">${optImg(w)}${w}</button>`
      )
      .join('')}</span>${fb}</div>`;
  };

  const intro = `<section class="page-intro"><div class="container lesson-shell"><p class="breadcrumbs">${
    lang === 'it'
      ? `<a href="../../">Home</a> / <a href="../">Grammatica</a> / A1 / ${L.h1}`
      : `<a href="/${lang}/">${c.home}</a> / <a href="/${lang}/${DIR[lang]}/">${c.grammar}</a> / A1 / ${L.h1}`
  }</p><p class="eyebrow">${c.eyebrow}</p><h1>${L.h1}</h1><p class="lead">${L.lead}</p><div class="lesson-meta"><span>${
    lang === 'ja' ? `${MINUTES}${c.minutes}` : `${MINUTES} ${c.minutes}`
  }</span><span>${lang === 'ja' ? `練習問題44${c.exercises}` : `44 ${c.exercises}`}</span><span>${c.level}</span></div><figure style="margin:26px 0 0"><img src="/assets/${HERO.src}" alt="${attr(L.heroAlt)}" width="${HERO.width}" height="${HERO.height}" decoding="async" loading="eager" fetchpriority="high" style="display:block;width:100%;height:auto;border-radius:24px"></figure><div class="lesson-nav">${Object.entries(
    L.nav
  )
    .map(([id, label]) => `<a href="#${id}">${label}</a>`)
    .join(
      ''
    )}</div><div class="pdf-downloads" aria-label="${PDF_DOWNLOADS[lang] ?? 'Downloads em PDF'}"><a class="button secondary" href="/pdf/${lang}/${SLUGS[lang]}-a1.pdf" download="">PDF A1</a></div></div></section>`;

  const how = `<article class="lesson-box" id="come"><h2>${L.how.h2}</h2>${L.how.html}</article>`;

  const vowels = `<article class="lesson-box" id="vocali"><h2>${L.vowels.h2}</h2>${L.vowels.intro}<div class="pron-vowels">${VOWELS.map(
    ({ v, img: name, words }) =>
      `<figure class="pron-vowel"><img src="${IMG}${name}.webp" alt="${attr(L.vowels.cues[v].alt)}" width="560" height="560" loading="lazy" decoding="async"><span class="pron-letter" lang="it">${v.toUpperCase()} ${v}</span><p>${L.vowels.cues[v].cue}</p>${chips(words)}</figure>`
  ).join(
    ''
  )}</div><h3>${L.vowels.finalH3}</h3>${L.vowels.final}${chips(FINAL_VOWELS)}<h3>${L.vowels.eoH3}</h3>${L.vowels.eo}<div class="pron-figs"><figure class="pron-fig">${img('pesche', L.vowels.peach)}<figcaption>${L.vowels.peach}</figcaption></figure><figure class="pron-fig">${img('pescare', L.vowels.fishing)}<figcaption>${L.vowels.fishing}</figcaption></figure></div></article>`;

  const cgTable = `<table class="pron-table"><thead><tr>${L.cg.cols.map((h) => `<th>${h}</th>`).join('')}</tr></thead><tbody>${CG_ROWS.map(
    (r) => `<tr><td lang="it">${r.spell}</td><td>${L.cg.sounds[r.sound]}</td><td>${chips(r.words)}</td></tr>`
  ).join('')}</tbody></table>`;
  const cgQuiz = quiz(
    'es-cg',
    L.cg.exH3,
    L.cg.exP,
    CG_QUIZ.map(
      ([w, answer]) =>
        `<div class="pron-q" data-answer="${answer}" data-audio="${useAudio(w)}">${num()}<span class="pron-q-word" lang="it">${w}</span><span class="pron-opts"><button type="button" class="pron-opt" data-value="hard" data-label="${attr(L.cg.hard)}">${L.cg.hard}</button><button type="button" class="pron-opt" data-value="soft" data-label="${attr(L.cg.soft)}">${L.cg.soft}</button></span>${fb}</div>`
    ).join('')
  );
  const cg = `<article class="lesson-box" id="cg"><h2>${L.cg.h2}</h2>${L.cg.intro}${cgTable}${L.cg.tricks}${cgQuiz}</article>`;

  const sounds = `<article class="lesson-box" id="suoni"><h2>${L.sounds.h2}</h2>${L.sounds.intro}<div class="pron-sound-grid">${SOUNDS.map(
    ({ key, img: name, words }) => {
      const t = L.sounds.items[key];
      return `<div class="pron-sound${name ? '' : ' no-img'}">${name ? img(name, t.alt) : ''}<div><h3>${t.title}</h3><p>${t.text}</p>${chips(words)}</div></div>`;
    }
  ).join('')}</div></article>`;

  const pairCard = (w) =>
    `<figure class="pron-fig">${img(w, meaning(w))}<figcaption><span>${play(w)}${it(w)}</span><span class="pron-sep"> – </span><small>${meaning(w)}</small></figcaption></figure>`;
  const doubles = `<article class="lesson-box" id="doppie"><h2>${L.doubles.h2}</h2><div class="pron-cat">${img('gatto-salto', L.doubles.catAlt, ' style="aspect-ratio:1"')}<div>${L.doubles.intro}</div></div>${L.doubles.how}<h3>${L.doubles.pairsH3}</h3><div class="pron-pairs">${DOUBLE_PAIRS.map(
    ([a, b]) =>
      `<div class="pron-pair">${pairCard(a)}<span class="pron-neq" aria-hidden="true">≠</span>${pairCard(b)}</div>`
  ).join(
    ''
  )}</div><div class="pron-try no-print">${chips(['casa', 'cassa'])}${recorder()}</div>${L.doubles.anno}<div class="pron-try no-print"><ul class="pron-words"><li class="pron-word">${play('Buon anno!', 'buon-anno')}${it('Buon anno!')}</li></ul></div>${quiz(
    'es-doppie',
    L.doubles.exH3,
    L.doubles.exP,
    DOUBLE_QUIZ.map(pairQuestion).join('')
  )}</article>`;

  const stressQuiz = quiz(
    'es-accento',
    L.stress.exH3,
    L.stress.exP,
    STRESS_QUIZ.map(([word, answer]) => {
      const syl = word.split('-');
      const whole = syl.join('');
      const shown = syl.map((s, i) => (i === answer ? s.toUpperCase() : s)).join('-');
      return `<div class="pron-q" data-answer="${answer}" data-word="${shown}" data-needs-listen="1">${num()}<button type="button" class="pron-play pron-q-play" data-audio="${useAudio(whole)}" aria-label="${attr(ui.play)}"></button><span class="pron-opts" lang="it">${syl
        .map((s, i) => `<button type="button" class="pron-syl" data-i="${i}">${s}</button>`)
        .join('')}</span>${fb}</div>`;
    }).join('')
  );
  const stress = `<article class="lesson-box" id="accento"><h2>${L.stress.h2}</h2>${L.stress.intro}<div class="pron-stress-groups">${STRESS_GROUPS.map(
    (g) => `<div><h3>${L.stress.groups[g.key]}</h3>${chips(g.words)}</div>`
  ).join(
    ''
  )}</div><h3>${L.stress.anchorH3}</h3>${L.stress.anchor}<div class="pron-figs"><figure class="pron-fig">${img('ancora-nave', L.stress.anchorShip)}<figcaption>${play('Getta l’àncora!', 'ancora-nave')}${L.stress.anchorShip}</figcaption></figure><figure class="pron-fig">${img('ancora-bis', L.stress.anchorMore)}<figcaption>${play('Ancora un po’!', 'ancora-bis')}${L.stress.anchorMore}</figcaption></figure><figure class="pron-fig">${img('papa', L.stress.papa)}<figcaption>${play('Ciao, papà!', 'papa-frase')}${L.stress.papa}</figcaption></figure></div>${L.stress.capito}<div class="pron-try no-print"><ul class="pron-words"><li class="pron-word">${play('Hai capito?', 'capito-frase')}${it('Hai capito?')}</li><li class="pron-word">${play('Capitò tutto in un giorno.', 'capito-passato')}${it('Capitò tutto in un giorno.')}</li></ul></div>${stressQuiz}</article>`;

  const trapLink = (l) =>
    `<a class="pron-trap-link" href="/${pagePath(l)}" hreflang="${code(l)}" lang="${code(l)}">${LANGUAGE_NAMES[l].flag} ${LANGUAGE_NAMES[l].name}</a>`;
  const traps = `<article class="lesson-box" id="trappole"><h2>${L.traps.h2}</h2>${L.traps.intro}${L.traps.easy}<div class="pron-traps">${L.traps.items
    .map(
      (t) =>
        `<div class="pron-trap"><h3>${t.title}</h3><p>${t.text}</p>${chips(t.words)}${
          t.lang ? (t.lang === 'cs' ? `${trapLink('cs')} · ${trapLink('pl')}` : trapLink(t.lang)) : ''
        }</div>`
    )
    .join(
      ''
    )}</div>${quiz('es-trappole', L.traps.exH3, L.traps.exP, TRAP_QUIZ[lang].map(pairQuestion).join(''))}</article>`;

  const twisters = `<article class="lesson-box" id="scioglilingua"><h2>${L.twisters.h2}</h2>${L.twisters.intro}${TWISTERS.map(
    (id, i) =>
      `<div class="pron-twister"><blockquote lang="it">${SPOKEN[id]}</blockquote><div class="pron-tools no-print">${play(SPOKEN[id], id)}${slow(id)}${recorder()}</div><p>${L.twisters.notes[i]}</p></div>`
  ).join('')}${L.twisters.challenge}</article>`;

  const end = `<article class="lesson-box no-print" id="risultato"><h2>${L.end.h2}</h2><p>${L.end.text}</p><div class="score-card"><div><strong>${ui.total}</strong><p class="pron-total-text"></p></div><strong class="pron-total-percent">0%</strong></div><div class="exercise-actions"><button class="reset-btn pron-reset-all" type="button">${c.reset}</button><a class="button primary" href="/${localPath(essere, lang)}">${c.next}</a></div></article>`;

  const data = [
    ['audio-base', '/assets/audio/pronuncia/'],
    ['msg-correct', ui.correct],
    ['msg-wrong', ui.wrong],
    ['msg-listen', ui.listenFirst],
    ['msg-score', ui.score],
    ['msg-record', ui.record],
    ['msg-stop', ui.stop],
    ['msg-yours', ui.yours],
    ['msg-mic', ui.micError],
  ]
    .map(([k, v]) => ` data-${k}="${attr(v)}"`)
    .join('');
  let html = `<main>
  ${intro}
  <section class="section compact-top"><div class="container lesson-shell pron-lesson"${data}>
    ${how}
    ${vowels}
    ${cg}
    ${sounds}
    ${doubles}
    ${stress}
    ${traps}
    ${twisters}
    ${end}
  </div></section>
  ${ctaSection(lang)}
</main>
`;
  if (lang === 'it') html = html.replaceAll(' lang="it"', '');
  return html;
}

function buildAstro(lang) {
  const L = S[lang];
  const template = path.join(ROOT, 'src/pages', `${localPath(riflessivi, lang)}.astro`);
  const meta = JSON.parse(readFileSync(template, 'utf8').match(/const meta = (\{[\s\S]*?\n\});/)[1]);
  const own = pagePath(lang);
  const canonical = `${SITE}/${own}`;
  const title =
    lang === 'it'
      ? `${L.h1} – grammatica italiana A1 con audio ed esercizi`
      : `${L.h1} | ${SEO_TERM[lang]} A1 | Italiano con Martin`;
  meta.path = own;
  meta.title = title;
  meta.description = plain(L.description);
  meta.canonical = canonical;
  const og = {
    'og:title': title,
    'og:description': meta.description,
    'og:url': canonical,
    'og:image': `${SITE}/assets/${HERO.src}`,
    'twitter:title': title,
    'twitter:description': meta.description,
    'twitter:image': `${SITE}/assets/${HERO.src}`,
  };
  meta.og = meta.og.map(([key, value]) => [key, og[key] ?? value]);
  meta.jsonld = [
    JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'LearningResource',
      name: L.h1,
      url: canonical,
      inLanguage: code(lang),
      educationalLevel: 'A1',
    }),
  ];
  meta.hreflangs = [
    ...LANGS.map((l) => [code(l), `${SITE}/${pagePath(l)}`]),
    ['x-default', `${SITE}/${pagePath('it')}`],
  ];
  let options = meta.optionsHtml;
  for (const l of LANGS)
    options = options.replace(
      new RegExp(`href="[^"]*" hreflang="${code(l)}"`),
      `href="/${pagePath(l)}" hreflang="${code(l)}"`
    );
  meta.optionsHtml = options;
  const prefix = meta.assetPrefix;
  meta.extraHead = [
    `<link rel="stylesheet" href="${prefix}assets/grammar-lesson.css">`,
    `<link rel="stylesheet" href="/assets/pronuncia.css?v=${ASSET_VERSION}">`,
  ];
  meta.bodyScripts = [
    `<script src="/assets/pronuncia.js?v=${ASSET_VERSION}"></script>`,
    `<script src="${prefix}script.js"></script>`,
  ];
  return `---
// Generata da scripts/create-pronuncia-lesson.mjs: non modificare a mano.
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
for (const lang of LANGS) {
  write(path.join(ROOT, 'src/html', pagePath(lang)), buildFragment(lang));
  write(path.join(ROOT, 'src/pages', `${pagePath(lang)}.astro`), buildAstro(lang));
}

// 2. hreflang e selettore delle pagine… non servono altrove: la lezione è nuova. Tessera in testa all'A1
// degli indici di grammatica (il portoghese lo ricostruisce build-pt.mjs dall'indice spagnolo).
let cards = 0;
for (const lang of LANGS.filter((l) => l !== 'pt')) {
  const file = path.join(ROOT, 'src/html', lang === 'it' ? '' : lang, DIR[lang], 'index.html');
  const html = readFileSync(file, 'utf8');
  const href = lang === 'it' ? `a1/${SLUGS.it}.html` : `/${pagePath(lang)}`;
  let card = `          <a class="lesson-card ready" href="${href}"><span class="status">${COMMON[lang].status}</span><h3>${S[lang].h1}</h3><p>${S[lang].card}</p></a>`;
  if (lang === 'it') card = card.replaceAll(' lang="it"', '');
  const lines = html.split('\n');
  const existing = lines.findIndex((line) => line.includes(`href="${href}"`));
  if (existing >= 0) lines[existing] = card;
  else {
    const grid = lines.findIndex(
      (line, i) => line.includes('class="lesson-grid"') && lines.slice(0, i).some((l) => l.includes('id="a1"'))
    );
    if (grid < 0) throw new Error(`indice ${lang}: griglia A1 non trovata`);
    lines.splice(grid + 1, 0, card);
    cards += 1;
  }
  writeFileSync(file, lines.join('\n'));
}

// 3. sitemap: prima della prima lezione A1 di ogni lingua
const sitemapFile = path.join(ROOT, 'public/sitemap.xml');
const sitemapLines = readFileSync(sitemapFile, 'utf8').split('\n');
const xmlEscape = (s) => s.replace(/[^\x20-\x7e]/g, (ch) => `&#x${ch.codePointAt(0).toString(16)};`);
let urls = 0;
for (const lang of LANGS) {
  const loc = xmlEscape(`${SITE}/${pagePath(lang)}`);
  if (sitemapLines.some((line) => line.includes(`<loc>${loc}</loc>`))) continue;
  const prefix = `${SITE}/${lang === 'it' ? '' : `${lang}/`}${DIR[lang]}/a1/`;
  const first = sitemapLines.findIndex((line) => line.includes(`<loc>${prefix}`));
  if (first < 0) throw new Error(`sitemap ${lang}: nessuna lezione A1`);
  sitemapLines.splice(first, 0, `  <url><loc>${loc}</loc><changefreq>monthly</changefreq></url>`);
  urls += 1;
}
writeFileSync(sitemapFile, sitemapLines.join('\n'));

// 4. slug e titoli attesi da audit-grammar-seo (solo le 8 lingue che ci sono)
function addToSeoMap(file, valueOf) {
  let source = readFileSync(file, 'utf8');
  for (const lang of LANGS.filter((l) => l !== 'it')) {
    const start = source.indexOf(`\n  ${lang}: {`);
    if (start < 0) continue;
    const end = source.indexOf('\n  },', start);
    const block = source.slice(start, end);
    if (/\s'?pronuncia'?:/.test(block)) continue;
    source = source.slice(0, end) + `\n    pronuncia: '${valueOf(lang).replaceAll("'", "\\'")}',` + source.slice(end);
  }
  writeFileSync(file, source);
}
addToSeoMap(path.join(ROOT, 'scripts/grammar-seo-slugs.mjs'), (lang) => SLUGS[lang]);
addToSeoMap(path.join(ROOT, 'scripts/grammar-seo-titles.mjs'), (lang) => S[lang].h1);

// 5. elenco degli audio
const audioList = [...audios].map(([id, text]) => ({ id, text, voice: MALE_VOICE.has(id) ? 'male' : 'female' }));
write(path.join(ROOT, 'work/pronuncia-audio.json'), JSON.stringify(audioList, null, 2));
const missingAudio = audioList.filter(
  (a) => !existsSync(path.join(ROOT, 'public/assets/audio/pronuncia', `${a.id}.mp3`))
);
console.log(
  `Pronuncia: ${LANGS.length} pagine. Tessere nuove: ${cards}. Voci nuove nella sitemap: ${urls}. Audio: ${audioList.length} (mancano ${missingAudio.length}).`
);
if (missingAudio.length) console.log('Poi: python scripts/generate-pronuncia-audio.py');

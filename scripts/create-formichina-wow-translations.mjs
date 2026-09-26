#!/usr/bin/env node
// Traduce «La formichina Wow» (favola solo A1, prima esistente solo in italiano)
// nelle altre 8 lingue. Il racconto resta italiano; cambiano cornice, glosse e SEO.
//
// Per ogni lingua crea il frammento in src/html/ e la pagina in src/pages/,
// aggiunge la tessera agli indici «favole» e «letture» e la voce a public/sitemap.xml,
// poi aggiorna hreflang e selettore lingua anche della pagina italiana.
// Lo scheletro (breadcrumb, call to action, link, metadati) è clonato dalla favola
// «Il pastorello bugiardo» nella stessa lingua, così le etichette di servizio restano
// quelle già revisionate. Idempotente.

import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SITE = 'https://italianoconmartin.com';
const IMAGE = 'story-formica-wow';

const IT = { dir: 'favole', slug: 'la-formichina-wow', index: 'letture' };

// dir: cartella delle favole · index: cartella delle letture · base: favola da cui si clona lo scheletro
// words: glosse di la formica, l'aquila, il cielo, guardare, ridere, felice
const LANGS = {
  en: {
    dir: 'stories',
    index: 'readings',
    slug: 'the-little-ant-wow',
    base: 'the-lying-shepherd-boy',
    title: 'The Little Ant Wow',
    suffix: 'Italian story',
    placeholder: 'Write your answer',
    eyebrow: 'Fable at A1 level',
    lead: 'A story about those who look at the sky, even when others laugh.',
    alt: 'An eagle flies in the sky carrying two happy ants',
    figcaption: 'Original illustration for the fable',
    words: ['ant', 'eagle', 'sky', 'to look', 'to laugh', 'happy'],
    q: ['Why is Wow different from the other ants?', 'Do you think the world is like the anthill?'],
    tile: 'Looking up, even when others laugh.',
    description:
      'The Little Ant Wow: fable at A1 level about looking at the sky even when others laugh. Italian text with useful words and comprehension questions.',
  },
  es: {
    dir: 'cuentos',
    index: 'lecturas',
    slug: 'la-hormiguita-wow',
    base: 'el-pastor-mentiroso',
    title: 'La hormiguita Wow',
    suffix: 'cuento en italiano',
    placeholder: 'Escribe tu respuesta',
    eyebrow: 'Fábula de nivel A1',
    lead: 'Una historia sobre quien mira al cielo, incluso cuando los demás se ríen.',
    alt: 'Un águila vuela por el cielo y lleva consigo a dos hormigas felices',
    figcaption: 'Ilustración original para la fábula',
    words: ['hormiga', 'águila', 'cielo', 'mirar', 'reír', 'feliz'],
    q: ['¿Por qué Wow es diferente de las otras hormigas?', '¿Piensas que el mundo es parecido al hormiguero?'],
    tile: 'Mirar hacia arriba, incluso cuando los demás se ríen.',
    description:
      'La hormiguita Wow: fábula de nivel A1 sobre mirar al cielo aunque los demás se rían. Texto en italiano con palabras útiles y preguntas de comprensión.',
  },
  fr: {
    dir: 'histoires',
    index: 'lectures',
    slug: 'la-petite-fourmi-wow',
    base: 'le-berger-menteur',
    title: 'La petite fourmi Wow',
    suffix: 'histoire en italien',
    placeholder: 'Écrivez votre réponse',
    eyebrow: 'Fable de niveau A1',
    lead: 'Une histoire sur ceux qui regardent le ciel, même quand les autres rient.',
    alt: 'Un aigle vole dans le ciel et emporte deux fourmis heureuses',
    figcaption: 'Illustration originale pour la fable',
    words: ['fourmi', 'aigle', 'ciel', 'regarder', 'rire', 'heureux'],
    q: [
      'Pourquoi Wow est-elle différente des autres fourmis ?',
      'Pensez-vous que le monde ressemble à la fourmilière ?',
    ],
    tile: 'Regarder vers le haut, même quand les autres rient.',
    description:
      'La petite fourmi Wow : fable de niveau A1 sur ceux qui regardent le ciel même quand les autres rient. Texte en italien avec mots utiles et questions de compréhension.',
  },
  cs: {
    dir: 'pribehy',
    index: 'cteni',
    slug: 'mravenecka-wow',
    base: 'lezici-pastyr',
    title: 'Mravenečka Wow',
    suffix: 'italský příběh',
    placeholder: 'Napište svou odpověď',
    eyebrow: 'Bajka na úrovni A1',
    lead: 'Příběh o těch, kdo se dívají na oblohu, i když se ostatní smějí.',
    alt: 'Orel letí po obloze a nese dvě šťastné mravenečky',
    figcaption: 'Originální ilustrace k bajce',
    words: ['mravenec', 'orel', 'obloha', 'dívat se', 'smát se', 'šťastný'],
    q: ['Proč se Wow liší od ostatních mravenců?', 'Myslíte, že je svět podobný mraveništi?'],
    tile: 'Dívat se vzhůru, i když se ostatní smějí.',
    description:
      'Mravenečka Wow: bajka na úrovni A1 o dívání se na oblohu, i když se ostatní smějí. Italský text s užitečnými slovy a otázkami k porozumění.',
  },
  pl: {
    dir: 'historie',
    index: 'czytanki',
    slug: 'mroweczka-wow',
    base: 'kłamliwy-pasterz',
    title: 'Mróweczka Wow',
    suffix: 'historia po włosku',
    placeholder: 'Napisz swoją odpowiedź',
    eyebrow: 'Bajka na poziomie A1',
    lead: 'Historia o tych, którzy patrzą w niebo, nawet gdy inni się śmieją.',
    alt: 'Orzeł leci po niebie i niesie dwie szczęśliwe mróweczki',
    figcaption: 'Oryginalna ilustracja do bajki',
    words: ['mrówka', 'orzeł', 'niebo', 'patrzeć', 'śmiać się', 'szczęśliwy'],
    q: ['Dlaczego Wow różni się od innych mrówek?', 'Czy uważasz, że świat jest podobny do mrowiska?'],
    tile: 'Patrzeć w górę, nawet gdy inni się śmieją.',
    description:
      'Mróweczka Wow: bajka na poziomie A1 o patrzeniu w niebo, nawet gdy inni się śmieją. Włoski tekst z przydatnymi słowami i pytaniami do zrozumienia.',
  },
  tr: {
    dir: 'hikayeler',
    index: 'okumalar',
    slug: 'kucuk-karinca-wow',
    base: 'yalancı-coban-cocugu',
    title: 'Küçük Karınca Wow',
    suffix: 'İtalyanca hikâye',
    placeholder: 'Cevabınızı yazın',
    eyebrow: 'A1 seviyesinde masal',
    lead: 'Başkaları güldüğünde bile göğe bakanların hikâyesi.',
    alt: 'Bir kartal gökyüzünde uçuyor ve iki mutlu karıncayı taşıyor',
    figcaption: 'Masal için özgün çizim',
    words: ['karınca', 'kartal', 'gökyüzü', 'bakmak', 'gülmek', 'mutlu'],
    q: ['Wow neden diğer karıncalardan farklı?', 'Sizce dünya karınca yuvasına benziyor mu?'],
    tile: 'Başkaları güldüğünde bile yukarı bakmak.',
    description:
      'Küçük Karınca Wow: başkaları güldüğünde bile gökyüzüne bakmak üzerine A1 seviyesinde masal. Yararlı kelimeler ve anlama soruları içeren İtalyanca metin.',
  },
  de: {
    dir: 'geschichten',
    index: 'lesetexte',
    slug: 'die-kleine-ameise-wow',
    base: 'der-liegende-hirtenjunge',
    title: 'Die kleine Ameise Wow',
    suffix: 'italienische Geschichte',
    placeholder: 'Schreiben Sie Ihre Antwort',
    eyebrow: 'Fabel auf A1-Niveau',
    lead: 'Eine Geschichte über jemanden, der in den Himmel schaut, auch wenn die anderen lachen.',
    alt: 'Ein Adler fliegt am Himmel und trägt zwei glückliche Ameisen mit sich',
    figcaption: 'Originalillustration zur Fabel',
    words: ['Ameise', 'Adler', 'Himmel', 'schauen', 'lachen', 'glücklich'],
    q: ['Warum ist Wow anders als die anderen Ameisen?', 'Glauben Sie, dass die Welt dem Ameisenhaufen ähnlich ist?'],
    tile: 'Nach oben schauen, auch wenn die anderen lachen.',
    description:
      'Die kleine Ameise Wow: Fabel auf A1-Niveau über den Blick in den Himmel, auch wenn die anderen lachen. Italienischer Text mit nützlichen Wörtern und Verständnisfragen.',
  },
  ja: {
    dir: 'monogatari',
    index: 'dokkai',
    slug: 'chiisana-ari-wow',
    base: '横たわる羊飼いの少年',
    title: '小さなアリのWow',
    suffix: 'イタリア語の物語',
    placeholder: '答えを書いてください',
    eyebrow: 'A1レベルの寓話',
    lead: 'ほかの人が笑っても、空を見上げる人の物語。',
    alt: 'ワシが空を飛び、幸せそうな2匹のアリを連れている',
    figcaption: '寓話のためのオリジナルイラスト',
    words: ['アリ', 'ワシ', '空', '見る', '笑う', '幸せな'],
    q: ['Wowはなぜほかのアリと違うのですか？', '世界はアリの巣に似ていると思いますか？'],
    tile: 'ほかの人が笑っても、上を見上げること。',
    description:
      '小さなアリのWow：ほかの人が笑っても空を見上げることを描いた、A1レベルの寓話。役に立つ言葉と読解問題つきのイタリア語テキスト。',
  },
};

const ITALIAN_WORDS = ['la formica', 'l’aquila', 'il cielo', 'guardare', 'ridere', 'felice'];
const ITALIAN_QUESTIONS = ['Perché Wow è diversa dalle altre formiche?', 'Pensi che il mondo è simile al formicaio?'];

const read = (p) => readFileSync(path.join(root, p), 'utf8');
const write = (p, s) => writeFileSync(path.join(root, p), s);
const urlOf = (l) =>
  l === 'it' ? `${SITE}/${IT.dir}/${IT.slug}.html` : `${SITE}/${l}/${LANGS[l].dir}/${LANGS[l].slug}.html`;
const pathOf = (l) => new URL(urlOf(l)).pathname.replace(/^\//, '');

// --- Sorgente italiana ------------------------------------------------------
const itFragment = read(`src/html/${IT.dir}/${IT.slug}.html`);
const storyText = itFragment.match(/<div class="story-text">([\s\S]*?)<\/div>/)[1];

// --- Metadati: legge il blocco `const meta = {...};` di una pagina .astro ---
function readMeta(file) {
  const src = read(file);
  const start = src.indexOf('const meta = ') + 'const meta = '.length;
  const end = src.indexOf('};\n---', start) + 1;
  return { src, start, end, meta: JSON.parse(src.slice(start, end)) };
}
function writeMeta(file, { src, start, end }, meta) {
  write(file, src.slice(0, start) + JSON.stringify(meta, null, 2) + src.slice(end));
}

// Sostituisce, in un selettore lingua o in una lista hreflang, gli URL della favola base con quelli di Wow.
const allLangs = ['it', ...Object.keys(LANGS)];
function switcherHtml(baseOptions) {
  let html = baseOptions;
  for (const l of allLangs) {
    const re = new RegExp(`<a href="[^"]*" hreflang="${l}"`);
    html = html.replace(re, `<a href="${pathOf(l) ? '/' + pathOf(l) : ''}" hreflang="${l}"`);
  }
  return html;
}
const hreflangList = [...allLangs.map((l) => [l, urlOf(l)]), ['x-default', urlOf('it')]];

// --- Pagine localizzate -------------------------------------------------------
for (const [l, c] of Object.entries(LANGS)) {
  const baseFragment = read(`src/html/${l}/${c.dir}/${c.base}.html`);
  const breadcrumbs = baseFragment
    .match(/<p class="breadcrumbs">.*?<\/p>/)[0]
    .replace(/ \/ [^/<]*<\/p>$/, ` / ${c.title}</p>`);
  const cta = baseFragment.slice(baseFragment.indexOf('<section class="conversion-section'));
  const ph = c.placeholder;
  const words = ITALIAN_WORDS.map((w, i) => `<span lang="it">${w}</span> = ${c.words[i]}`).join('<br>');
  const questions = ITALIAN_QUESTIONS.map(
    (q, i) =>
      `<li><span lang="it">${q}</span><span class="q-gloss">${c.q[i]}</span><textarea rows="2" placeholder="${ph}"></textarea></li>`
  ).join('');
  const helpHeadings = baseFragment.match(
    /<div class="learning-grid"><div><h3>(.*?)<\/h3>[\s\S]*?<div><h3>(.*?)<\/h3>/
  );

  const fragment =
    `<main><section class="story-hero"><div class="container">${breadcrumbs}<div class="story-hero-grid"><div>` +
    `<p class="eyebrow">${c.eyebrow}</p><h1>${c.title}</h1><p class="lead">${c.lead}</p></div>` +
    `<figure class="story-figure"><img src="../../assets/${IMAGE}.webp" alt="${c.alt}" width="960" height="540" decoding="async" fetchpriority="high" loading="eager"><figcaption>${c.figcaption}</figcaption></figure></div></div></section>` +
    `<section class="section compact-top"><div class="container"><article class="story-card" id="a1"><header><div><span class="level">A1</span><h2 lang="it">La formichina Wow — livello A1</h2></div><p>Presente</p></header>` +
    `<div class="story-text" lang="it">${storyText}</div>` +
    `<div class="learning-grid"><div><h3>${helpHeadings[1]}</h3><p>${words}</p></div><div><h3>${helpHeadings[2]}</h3><ol>${questions}</ol></div></div></article></div></section>` +
    cta;
  write(`src/html/${l}/${c.dir}/${c.slug}.html`, fragment);

  // pagina .astro clonata dalla favola base
  const baseAstro = `src/pages/${l}/${c.dir}/${c.base}.html.astro`;
  const parsed = readMeta(baseAstro);
  const m = parsed.meta;
  const url = urlOf(l);
  const title = `${c.title} | ${c.suffix} | Italiano con Martin`;
  m.path = pathOf(l);
  m.title = title;
  m.description = c.description;
  m.canonical = url;
  const og = Object.fromEntries(m.og);
  Object.assign(og, {
    'og:title': title,
    'og:description': c.description,
    'og:url': url,
    'og:image': `${SITE}/assets/${IMAGE}.webp`,
    'twitter:title': title,
    'twitter:description': c.description,
    'twitter:image': `${SITE}/assets/${IMAGE}.webp`,
  });
  m.og = m.og.map(([k]) => [k, og[k]]);
  m.jsonld = [
    JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', name: c.title, url, inLanguage: l }),
  ];
  m.hreflangs = hreflangList;
  m.extraHead = m.extraHead.map((h) => h.replace(/assets\/[^"]*\.webp/, `assets/${IMAGE}.webp`));
  m.optionsHtml = switcherHtml(m.optionsHtml);
  const page = `src/pages/${l}/${c.dir}/${c.slug}.html.astro`;
  const out = `---\nimport SiteLayout from '~/layouts/SiteLayout.astro';\nimport main from '~/html/${l}/${c.dir}/${c.slug}.html?raw';\nconst meta = ${JSON.stringify(m, null, 2)};\n---\n\n<SiteLayout meta={meta} main={main} />\n`;
  write(page, out);
}

// --- Pagina italiana: hreflang e selettore lingua -------------------------------
{
  const file = `src/pages/${IT.dir}/${IT.slug}.html.astro`;
  const parsed = readMeta(file);
  const base = readMeta('src/pages/favole/il-pastorello-bugiardo.html.astro').meta;
  parsed.meta.hreflangs = hreflangList;
  parsed.meta.optionsHtml = switcherHtml(base.optionsHtml);
  writeMeta(file, parsed, parsed.meta);
}

// --- Tessere negli indici --------------------------------------------------------
function addTile(file, l, c) {
  const html = read(file);
  const href = `/${l}/${c.dir}/${c.slug}.html`;
  if (html.includes(href)) return;
  // la tessera dell'ultima favola completa (l'imperatore) fa da modello per etichette e call to action
  const start = html.lastIndexOf('<a class="story-tile"');
  const end = html.indexOf('</a>', start) + 4;
  const model = html.slice(start, end);
  const cta = model.match(/<strong>(.*?)<\/strong>/)[1];
  const tile =
    `<a class="story-tile" href="${href}"><img src="../../assets/${IMAGE}-card.webp" alt="${c.alt}" loading="lazy" width="640" height="360" decoding="async">` +
    `<span class="badge">A1</span><h2>${c.title}</h2><p>${c.tile}</p><strong>${cta}</strong></a>`;
  write(file, html.slice(0, end) + tile + html.slice(end));
}
for (const [l, c] of Object.entries(LANGS)) {
  addTile(`src/html/${l}/${c.dir}/index.html`, l, c);
  addTile(`src/html/${l}/${c.index}/index.html`, l, c);
}

// --- Sitemap ------------------------------------------------------------------
{
  let xml = read('public/sitemap.xml');
  for (const [l, c] of Object.entries(LANGS)) {
    const loc = urlOf(l);
    if (xml.includes(`<loc>${loc}</loc>`)) continue;
    const lines = xml.split('\n');
    const prefix = `<loc>${SITE}/${l}/${c.dir}/`;
    let last = -1;
    lines.forEach((line, i) => {
      if (line.includes(prefix)) last = i;
    });
    lines.splice(last + 1, 0, `  <url><loc>${loc}</loc><changefreq>monthly</changefreq></url>`);
    xml = lines.join('\n');
  }
  write('public/sitemap.xml', xml);
}
console.log('Fatto: 8 pagine localizzate, indici, sitemap e hreflang della pagina italiana.');

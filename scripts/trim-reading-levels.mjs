// Toglie dalle pagine di dettaglio (9 lingue) i livelli che non sono adatti al tema,
// cosi le pagine dicono le stesse cose degli indici per livello (READING_LEVELS).
// Tocca: articoli .story-card, pulsanti .level-nav, PDF del livello, titoli e descrizioni.
// Idempotente: una seconda esecuzione non trova piu niente da togliere.
// Dopo: build, poi `python scripts/generate-pdfs.py --only <nome>` per ogni pagina toccata.
import fs from 'node:fs';
import { READING_LEVELS } from './data/letture-livelli-i18n.mjs';

const ALL = ['a1', 'a2', 'b1', 'b2', 'c1'];
const keep = { ...READING_LEVELS };
for (const f of fs.readdirSync('src/html/favole'))
  if (f !== 'index.html' && !keep['favole/' + f.replace('.html', '')])
    keep['favole/' + f.replace('.html', '')] = 'A1 · A2 · B1';

// «in cinque livelli» -> «in tre livelli», per lingua (solo le favole lo dicono).
const NUMBER = {
  2: [
    ['cinque livelli', 'due livelli'],
    ['five levels', 'two levels'],
    ['cinco niveles', 'dos niveles'],
    ['cinq niveaux', 'deux niveaux'],
    ['pěti úrovních', 'dvou úrovních'],
    ['pięciu poziomach', 'dwóch poziomach'],
    ['beş seviyede', 'iki seviyede'],
    ['fünf Niveaus', 'zwei Niveaus'],
    ['5つのレベル', '2つのレベル'],
  ],
  3: [
    ['cinque livelli', 'tre livelli'],
    ['five levels', 'three levels'],
    ['cinco niveles', 'tres niveles'],
    ['cinq niveaux', 'trois niveaux'],
    ['pěti úrovních', 'třech úrovních'],
    ['pięciu poziomach', 'trzech poziomach'],
    ['beş seviyede', 'üç seviyede'],
    ['fünf Niveaus', 'drei Niveaus'],
    ['5つのレベル', '3つのレベル'],
  ],
};

const report = [];
for (const [key, label] of Object.entries(keep)) {
  const levels = label.toLowerCase().split(' · ');
  const drop = ALL.filter((l) => !levels.includes(l));
  if (!drop.length) continue;
  const first = levels[0].toUpperCase();
  const last = levels.at(-1).toUpperCase();
  const itAstro = `src/pages/${key}.html.astro`;
  const urls = [
    ...fs.readFileSync(itAstro, 'utf8').matchAll(/\[\s*"([a-z]{2})",\s*"https:\/\/italianoconmartin\.com\/([^"]+)"/g),
  ].map((m) => decodeURIComponent(m[2]));
  for (const path of urls) {
    const html = `src/html/${path}`;
    const astro = `src/pages/${path}.astro`;
    let h = fs.readFileSync(html, 'utf8');
    const pdfSlug = (h.match(/\/pdf\/([a-z]{2})\/([^"]+)-all-levels\.pdf/) || []).slice(1);
    let removed = 0;
    for (const lv of drop) {
      const re = new RegExp(`\\s*<article class="story-card" id="${lv}"[^>]*>[^]*?<\\/article>`);
      if (re.test(h)) {
        h = h.replace(re, '');
        removed++;
      }
      h = h.replace(/<div class="level-nav">[^]*?<\/div>/, (nav) =>
        nav.replace(new RegExp(`<a href="#${lv}">[^<]*</a>`), '')
      );
      if (pdfSlug.length) fs.rmSync(`public/pdf/${pdfSlug[0]}/${pdfSlug[1]}-${lv}.pdf`, { force: true });
    }
    if (/<article class="story-card" id="(a1|a2|b1|b2|c1)"/.test(h) && drop.some((lv) => h.includes(`id="${lv}"`)))
      throw new Error(`${html}: livello non tolto`);
    fs.writeFileSync(html, h);

    let a = fs.readFileSync(astro, 'utf8');
    a = a.replace(/A1([–-])C1/g, `${first}$1${last}`);
    for (const [from, to] of NUMBER[levels.length] || []) a = a.split(from).join(to).split(cap(from)).join(cap(to));
    fs.writeFileSync(astro, a);
    report.push(`${path}: -${removed}`);
  }
}
console.log(report.join('\n'));
console.log(`${report.length} pagine`);

// Indici delle favole: ora vanno da A1 a B1 (badge, titoli, descrizioni, testo introduttivo).
const FABLES = [
  'favole',
  'en/stories',
  'es/cuentos',
  'fr/histoires',
  'cs/pribehy',
  'pl/historie',
  'tr/hikayeler',
  'de/geschichten',
  'ja/monogatari',
];
const FABLE_TITLE = [
  ['beginners to advanced', 'beginners and intermediate learners'],
  ['principiantes y avanzados', 'principiantes e intermedios'],
  ['débutants et avancés', 'débutants et intermédiaires'],
  ['začátečníky i pokročilé', 'začátečníky i mírně pokročilé'],
  ['początkujących i zaawansowanych', 'początkujących i średnio zaawansowanych'],
  ['ve ileri seviye için', 've orta seviye için'],
  ['Anfänger und Fortgeschrittene', 'Anfänger und Mittelstufe'],
  ['初級から上級まで', '初級から中級まで'],
];
for (const dir of FABLES)
  for (const file of [`src/html/${dir}/index.html`, `src/pages/${dir}/index.astro`]) {
    let s = fs.readFileSync(file, 'utf8');
    s = s.replace(/A1 · A2 · B1 · B2 · C1/g, 'A1 · A2 · B1').replace(/A1・A2・B1・B2・C1/g, 'A1・A2・B1');
    s = s.replace(/C1/g, 'B1');
    for (const [from, to] of [...NUMBER[3], ...FABLE_TITLE]) s = s.split(from).join(to).split(cap(from)).join(cap(to));
    fs.writeFileSync(file, s);
  }

// Indici delle letture: il titolo A1–C1 resta vero per la raccolta, ma non «ognuno in cinque livelli».
const EACH = {
  letture: ['ognuno in cinque livelli con', 'ognuno nei livelli adatti al tema, con'],
  'en/readings': ['each in five levels with', 'each at the levels that suit it, with'],
  'es/lecturas': ['cada uno en cinco niveles con', 'cada uno en los niveles adecuados, con'],
  'fr/lectures': ['chacun en cinq niveaux avec', 'chacun aux niveaux qui lui conviennent, avec'],
  'cs/cteni': ['každý v pěti úrovních se', 'každý v úrovních, které se k němu hodí, se'],
  'pl/czytanki': ['każdy na pięciu poziomach, ze', 'każdy na odpowiednich poziomach, ze'],
  'tr/okumalar': ['her biri beş seviyede,', 'her biri uygun seviyelerde,'],
  'de/lesetexte': ['jeweils in fünf Niveaus mit', 'jeweils in den passenden Niveaus, mit'],
  'ja/dokkai': ['童話を5つのレベルで', '童話をそれぞれに合ったレベルで'],
};
for (const [dir, [from, to]] of Object.entries(EACH)) {
  const file = `src/pages/${dir}/index.astro`;
  fs.writeFileSync(file, fs.readFileSync(file, 'utf8').split(from).join(to));
}

function cap(s) {
  return s[0].toUpperCase() + s.slice(1);
}

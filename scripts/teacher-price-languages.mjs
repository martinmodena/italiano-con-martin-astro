// Prezzo delle lezioni e lingue parlate da Martin e Licia (2026-10-22).
// Martin: «aumenta il prezzo a 18 € a lezione» e «scrivi che Licia e Martin parlano
// sia spagnolo che inglese (serve ad attrarre quelli che sono indecisi)».
// Idempotente: porta ogni prezzo da 14 a PRICE e aggiunge la riga delle lingue
// nell'hero delle home e sotto il prezzo di ogni insegnante (home e «Chi siamo»).
// Va rilanciato se un generatore vecchio (update-teacher-*.mjs, sync-english-home.mjs)
// riscrive le home o le pagine «Chi siamo».
import { readFileSync, writeFileSync, existsSync } from 'node:fs';

const PRICE = 18;
const OLD = 14;

// lingua → [home, «Chi siamo»]
const PAGES = {
  it: ['index', 'chi-siamo/index'],
  en: ['en/index', 'en/about-us/index'],
  es: ['es/index', 'es/sobre-nosotros/index'],
  pt: ['pt/index', 'pt/sobre-nos/index'],
  fr: ['fr/index', 'fr/a-propos/index'],
  de: ['de/index', 'de/ueber-uns/index'],
  cs: ['cs/index', 'cs/o-nas/index'],
  pl: ['pl/index', 'pl/o-nas/index'],
  tr: ['tr/index', 'tr/hakkimizda/index'],
  ja: ['ja/index', 'ja/watashitachi-ni-tsuite/index'],
};

const LANGS = {
  it: { hero: 'Parliamo spagnolo e inglese', card: 'Parla anche spagnolo e inglese' },
  en: { hero: 'We speak Spanish and English', card: 'Also speaks Spanish and English' },
  es: { hero: 'Hablamos español e inglés', card: 'Habla también español e inglés' },
  pt: { hero: 'Falamos espanhol e inglês', card: 'Fala também espanhol e inglês' },
  fr: { hero: 'Nous parlons espagnol et anglais', card: 'Parle aussi espagnol et anglais' },
  de: { hero: 'Wir sprechen Spanisch und Englisch', card: 'Spricht auch Spanisch und Englisch' },
  cs: { hero: 'Mluvíme španělsky a anglicky', card: 'Mluví také španělsky a anglicky' },
  pl: { hero: 'Mówimy po hiszpańsku i angielsku', card: 'Mówi też po hiszpańsku i angielsku' },
  tr: { hero: 'İspanyolca ve İngilizce konuşuyoruz', card: 'İspanyolca ve İngilizce de konuşur' },
  ja: { hero: 'スペイン語・英語も話せます', card: 'スペイン語と英語も話せます' },
};

// Altri file che contengono il prezzo (script vecchi, llms.txt, dizionario portoghese).
const EXTRA = [
  'public/llms.txt',
  'scripts/seo-boost.mjs',
  'scripts/sync-english-home.mjs',
  'scripts/update-teacher-journey.mjs',
  'scripts/update-teacher-profiles.mjs',
  'scripts/data/pt/dicionario.txt',
];

// «14 €», «14€», «14 euro(s)», «14 eur», «14 euroluk», «14ユーロ» e «€14»
const priceAfterRe = new RegExp(`(?<![\\d.,])${OLD}(?= ?€| ?eur|ユーロ)`, 'g');
const priceBeforeRe = new RegExp(`(€ ?)${OLD}(?![\\d])`, 'g');
function setPrice(text) {
  return text.replace(priceAfterRe, String(PRICE)).replace(priceBeforeRe, `$1${PRICE}`);
}

function addLanguages(html, lang) {
  const { hero, card } = LANGS[lang];
  if (!html.includes('hero-languages')) {
    html = html.replace(/(<div class="hero-offer"[^>]*>[\s\S]*?)(<\/div>)/, `$1<span class="hero-languages">${hero}</span>$2`);
  }
  if (!html.includes('teacher-languages')) {
    html = html.replace(/(<p class="teacher-price">[\s\S]*?<\/p>)/g, `$1<p class="teacher-languages">${card}</p>`);
  }
  if (!html.includes('about-languages')) {
    html = html.replace(/(<strong class="about-price">[\s\S]*?<\/strong>)/g, `$1<p class="about-languages">${card}</p>`);
  }
  return html;
}

let changed = 0;
function update(file, fn) {
  if (!existsSync(file)) throw new Error(`manca ${file}`);
  const before = readFileSync(file, 'utf8');
  const after = fn(before);
  if (after !== before) {
    writeFileSync(file, after);
    changed++;
    console.log('aggiornato', file);
  }
}

for (const [lang, routes] of Object.entries(PAGES)) {
  for (const route of routes) {
    update(`src/html/${route}.html`, (t) => addLanguages(setPrice(t), lang));
    update(`src/pages/${route}.astro`, setPrice);
  }
}
for (const file of EXTRA) update(file, setPrice);

// Le pagine portoghesi le riscrive build-pt.mjs dallo spagnolo: servono le voci nel dizionario.
update('scripts/data/pt/dicionario.txt', (t) => {
  const pairs = [
    [LANGS.es.hero, LANGS.pt.hero],
    [LANGS.es.card, LANGS.pt.card],
  ].filter(([es]) => !t.includes(`es: ${es}\n`));
  if (!pairs.length) return t;
  const block = pairs.map(([es, pt]) => `es: ${es}\npt: ${pt}\n`).join('\n');
  const marker = '// Lezioni A1 spagnole corrette il 2026-10-09';
  return t.replace(marker, `// Lingue parlate da Martin e Licia (2026-10-22)\n${block}\n${marker}`);
});

console.log(changed ? `${changed} file aggiornati` : 'niente da cambiare');

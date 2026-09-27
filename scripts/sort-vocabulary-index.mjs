#!/usr/bin/env node
// Mette in ordine logico le schede degli indici del vocabolario, nelle 9 lingue (2026-09-28, richiesta di
// Martin: «ordina i link in ordine logico»).
//
// L'ordine va dal vicino al lontano: colori e corpo, le persone, i vestiti, la casa e il cibo, la scuola e il
// lavoro, la città, il tempo e la natura, lo sport, gli animali. Ogni lezione di parole è seguita dai suoi
// verbi (e, per gli animali, dagli aggettivi).
//
// Le schede delle altre lingue si riconoscono dall'URL italiano scritto negli `hreflangs` della loro pagina
// .astro, quindi basta un elenco solo. Una lezione che non è in ORDER finisce in fondo con un avviso: quando
// se ne crea una nuova va aggiunta qui. La prima scheda ha l'immagine `eager`, le altre `lazy`.
//
// Uso: node scripts/sort-vocabulary-index.mjs [--dry-run]
// Lo lancia anche create-animals-vocabulary.mjs dopo aver aggiunto le schede nuove.

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

export const ORDER = [
  // colori, corpo, emozioni
  'colori-forme',
  'corpo-umano',
  'verbi-corpo',
  'emozioni',
  // le persone
  'famiglia',
  'persone',
  'verbi-relazioni',
  'mestieri',
  'abbigliamento',
  // la casa e il cibo
  'casa',
  'verbi-casa',
  'cucina',
  'salotto',
  'cibo',
  // la scuola e il lavoro
  'scuola',
  'verbi-scuola',
  'ufficio',
  'verbi-ufficio',
  // la città
  'citta',
  'verbi-citta',
  // il tempo e la natura
  'tempo-stagioni',
  'mare',
  'verbi-mare',
  'montagna',
  'verbi-montagna',
  // lo sport
  'sport',
  'verbi-sport',
  // gli animali
  'animali',
  'caratteristiche-fisiche-animali',
  'personalita-animali',
  'verbi-animali',
];

const INDEX = {
  it: 'vocabolario',
  en: 'en/vocabulary',
  es: 'es/vocabulario',
  fr: 'fr/vocabulaire',
  cs: 'cs/slovni-zasoba',
  pl: 'pl/slownictwo',
  tr: 'tr/kelime-bilgisi',
  de: 'de/wortschatz',
  ja: 'ja/goi',
};

const CARD = /<a class="vocabulary-category" href="([^"]+)"[\s\S]*?<\/a>/g;

/** Lo slug italiano (senza .html) della lezione a cui punta la scheda. */
function italianSlug(lang, href) {
  if (lang === 'it') return href.replace(/\.html$/, '');
  const astro = path.join(root, 'src/pages', `${href.replace(/^\//, '')}.astro`);
  if (!existsSync(astro)) throw new Error(`${lang}: manca la pagina ${astro}`);
  const m = /"it",\s*"https:\/\/italianoconmartin\.com\/vocabolario\/([^"]+)\.html"/.exec(readFileSync(astro, 'utf8'));
  if (!m) throw new Error(`${lang}: nessun hreflang italiano in ${astro}`);
  return m[1];
}

export function sortVocabularyIndexes({ dryRun = false, log = console.log } = {}) {
  for (const [lang, dir] of Object.entries(INDEX)) {
    const file = path.join(root, 'src/html', dir, 'index.html');
    const html = readFileSync(file, 'utf8');
    const cards = [...html.matchAll(CARD)];
    if (!cards.length) throw new Error(`${lang}: nessuna scheda in ${file}`);
    const start = cards[0].index;
    const last = cards[cards.length - 1];
    const end = last.index + last[0].length;
    // Fra una scheda e l'altra ci sono solo spazi: altrimenti meglio fermarsi.
    for (let i = 1; i < cards.length; i += 1) {
      const gap = html.slice(cards[i - 1].index + cards[i - 1][0].length, cards[i].index);
      if (gap.trim()) throw new Error(`${lang}: fra le schede c'è altro («${gap.trim().slice(0, 40)}»)`);
    }
    const sep = html.slice(cards[0].index + cards[0][0].length, cards[1]?.index ?? end) || '\n            ';

    const keyed = cards.map((m, i) => {
      const slug = italianSlug(lang, m[1]);
      let rank = ORDER.indexOf(slug);
      if (rank === -1) {
        log(`  attenzione: «${slug}» non è in ORDER, la scheda resta in fondo (${lang})`);
        rank = ORDER.length + i;
      }
      return { rank, card: m[0] };
    });
    keyed.sort((a, b) => a.rank - b.rank);
    const sorted = keyed.map(({ card }, i) =>
      card.replace(/loading="(eager|lazy)"/, `loading="${i === 0 ? 'eager' : 'lazy'}"`)
    );
    const next = html.slice(0, start) + sorted.join(sep) + html.slice(end);
    if (next !== html && !dryRun) writeFileSync(file, next);
    log(`indice ${lang}: ${cards.length} schede${next === html ? ', già in ordine' : ', riordinate'}`);
  }
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  sortVocabularyIndexes({ dryRun: process.argv.includes('--dry-run') });
}

// Quanti esercizi ha ogni lezione di vocabolario, in tutte e 9 le lingue.
// Lo legge public/assets/vocabulary-progress.js negli indici del vocabolario
// per calcolare il progresso anche delle lezioni non ancora aperte.
// Si ricalcola a ogni build dai frammenti in src/html, quindi non va mai
// aggiornato a mano: un esercizio = una parola di «Riconosci la parola» o una
// riga da completare negli esercizi con trascinamento.
import fs from 'node:fs';
import path from 'node:path';

const VOCABULARY_DIRS = [
  'vocabolario',
  'en/vocabulary',
  'es/vocabulario',
  'fr/vocabulaire',
  'cs/slovni-zasoba',
  'pl/slownictwo',
  'tr/kelime-bilgisi',
  'de/wortschatz',
  'ja/goi',
];

export function GET() {
  const totals: Record<string, number> = {};
  for (const dir of VOCABULARY_DIRS) {
    const folder = path.join(process.cwd(), 'src/html', dir);
    for (const file of fs.readdirSync(folder)) {
      if (!file.endsWith('.html') || file === 'index.html') continue;
      const html = fs.readFileSync(path.join(folder, file), 'utf8');
      const words = (html.match(/class="word-test"/g) || []).length;
      const rows = (html.match(/class="match-row"/g) || []).length;
      if (words + rows) totals[`/${dir}/${file}`] = words + rows;
    }
  }
  return new Response(JSON.stringify(totals), { headers: { 'Content-Type': 'application/json' } });
}

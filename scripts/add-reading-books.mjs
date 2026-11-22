// Riquadri «Tutte le letture A1 in un PDF» in cima agli indici delle letture per livello
// (/letture/a1/ … /letture/c1/) e «Tutte le letture in PDF» nell'indice generale, nelle
// 10 lingue, con il link alla raccolta di `python scripts/generate-pdfs.py --readers`
// (Martin, 2026-11-22: «facciamo la raccolta»). I nomi dei file sono gli stessi di
// READER_STRINGS in generate-pdfs.py.
//
// Idempotente. Va rilanciato dopo i generatori che riscrivono gli indici delle letture
// (create-level-readings.mjs, create-reading-categories.mjs) e dopo scripts/pt/build-pt.mjs.
// Con --check non scrive niente e si ferma se un riquadro manca o è vecchio (lo fa il deploy).
import { existsSync, readFileSync, writeFileSync } from 'node:fs';

const LEVELS = ['a1', 'a2', 'b1', 'b2', 'c1'];
const T = {
  it: { dir: 'letture', file: 'letture-in-italiano-{lv}.pdf', strong: 'Tutte le letture {LV} in un PDF', text: 'I {n} testi di questa pagina in un unico PDF da stampare, con indice, parole utili e domande. Gratis.', button: 'Scarica il PDF ({LV})', all: 'Tutte le letture in PDF', allText: 'Un PDF gratis per ogni livello, con tutti i racconti, le favole e gli articoli di quel livello.' },
  en: { dir: 'en/readings', file: 'italian-graded-readers-{lv}.pdf', strong: 'All {LV} readings in one PDF', text: 'All {n} texts on this page in one printable PDF, with contents, useful words and questions. Free.', button: 'Download the PDF ({LV})', all: 'All the readings as PDFs', allText: 'One free PDF per level, with every story, fable and article of that level.' },
  es: { dir: 'es/lecturas', file: 'lecturas-en-italiano-{lv}.pdf', strong: 'Todas las lecturas {LV} en un PDF', text: 'Los {n} textos de esta página en un solo PDF para imprimir, con índice, palabras útiles y preguntas. Gratis.', button: 'Descarga el PDF ({LV})', all: 'Todas las lecturas en PDF', allText: 'Un PDF gratis por nivel, con todos los relatos, fábulas y artículos de ese nivel.' },
  pt: { dir: 'pt/leituras', file: 'leituras-em-italiano-{lv}.pdf', strong: 'Todas as leituras {LV} em um PDF', text: 'Os {n} textos desta página em um único PDF para imprimir, com sumário, palavras úteis e perguntas. Grátis.', button: 'Baixe o PDF ({LV})', all: 'Todas as leituras em PDF', allText: 'Um PDF grátis para cada nível, com todos os contos, fábulas e artigos daquele nível.' },
  fr: { dir: 'fr/lectures', file: 'lectures-en-italien-{lv}.pdf', strong: 'Toutes les lectures {LV} en un PDF', text: 'Les {n} textes de cette page dans un seul PDF à imprimer, avec sommaire, mots utiles et questions. Gratuit.', button: 'Télécharger le PDF ({LV})', all: 'Toutes les lectures en PDF', allText: 'Un PDF gratuit par niveau, avec tous les récits, fables et articles de ce niveau.' },
  cs: { dir: 'cs/cteni', file: 'cteni-v-italstine-{lv}.pdf', strong: 'Všechna čtení {LV} v jednom PDF', text: 'Všech {n} textů z této stránky v jednom PDF k tisku, s obsahem, užitečnými slovíčky a otázkami. Zdarma.', button: 'Stáhnout PDF ({LV})', all: 'Všechna čtení v PDF', allText: 'Jedno PDF zdarma pro každou úroveň, se všemi příběhy, bajkami a články dané úrovně.' },
  pl: { dir: 'pl/czytanki', file: 'czytanki-po-wlosku-{lv}.pdf', strong: 'Wszystkie czytanki {LV} w jednym PDF', text: 'Wszystkie teksty z tej strony ({n}) w jednym PDF do wydruku, ze spisem treści, przydatnymi słowami i pytaniami. Za darmo.', button: 'Pobierz PDF ({LV})', all: 'Wszystkie czytanki w PDF', allText: 'Jeden darmowy PDF na każdy poziom, ze wszystkimi opowiadaniami, bajkami i artykułami z tego poziomu.' },
  tr: { dir: 'tr/okumalar', file: 'italyanca-okuma-metinleri-{lv}.pdf', strong: 'Tüm {LV} okuma metinleri tek PDF’te', text: 'Bu sayfadaki {n} metnin tamamı yazdırılabilir tek bir PDF’te: içindekiler, faydalı kelimeler ve sorularla. Ücretsiz.', button: 'PDF’i indirin ({LV})', all: 'Tüm okuma metinleri PDF olarak', allText: 'Her seviye için ücretsiz bir PDF: o seviyedeki tüm hikâyeler, masallar ve yazılar.' },
  de: { dir: 'de/lesetexte', file: 'italienische-lesetexte-{lv}.pdf', strong: 'Alle {LV}-Lesetexte in einem PDF', text: 'Alle {n} Texte dieser Seite in einem PDF zum Ausdrucken, mit Inhaltsverzeichnis, nützlichen Wörtern und Fragen. Kostenlos.', button: 'PDF herunterladen ({LV})', all: 'Alle Lesetexte als PDF', allText: 'Ein kostenloses PDF pro Niveau, mit allen Geschichten, Fabeln und Artikeln dieses Niveaus.' },
  ja: { dir: 'ja/dokkai', file: 'italian-reading-{lv}.pdf', strong: '{LV}の読み物をすべて1つのPDFに', text: 'このページの{n}本の文章を、目次・役立つ単語・質問つきの印刷できる1つのPDFにまとめました。無料です。', button: 'PDFをダウンロード（{LV}）', all: '読み物をすべてPDFで', allText: 'レベルごとに無料のPDFがあり、そのレベルの物語・寓話・記事がすべて入っています。' },
};

const check = process.argv.includes('--check');
const BLOCK = /\n?\s*<div class="reading-book">[\s\S]*?<!-- \/reading-book -->/;
const fill = (text, lv, n) => text.replaceAll('{LV}', lv.toUpperCase()).replaceAll('{lv}', lv).replaceAll('{n}', n);
const problems = [];

function place(file, block) {
  if (!existsSync(file)) return problems.push(`${file}: manca`);
  const before = readFileSync(file, 'utf8');
  let html = before.replace(BLOCK, '');
  const nav = html.indexOf('<nav class="level-hub-nav"');
  if (nav === -1) return problems.push(`${file}: manca .level-hub-nav`);
  const end = html.indexOf('</nav>', nav) + '</nav>'.length;
  html = html.slice(0, end) + block + html.slice(end);
  if (html === before) return;
  if (check) problems.push(`${file}: riquadro della raccolta PDF mancante o vecchio`);
  else writeFileSync(file, html);
}

for (const [lang, t] of Object.entries(T)) {
  const links = [];
  for (const lv of LEVELS) {
    const file = `src/html/${t.dir}/${lv}/index.html`;
    if (!existsSync(file)) continue;
    const html = readFileSync(file, 'utf8');
    const n = new Set([...html.matchAll(/<a class="story-tile[^"]*" href="([^"]+)"/g)].map((m) => m[1])).size;
    const pdf = `/pdf/${lang}/${fill(t.file, lv, n)}`;
    if (!check && !existsSync(`public${pdf}`)) problems.push(`public${pdf}: manca, lanciare generate-pdfs.py --readers`);
    links.push(`<a class="button" href="${pdf}" download>${lv.toUpperCase()}</a>`);
    place(file, `\n          <div class="reading-book">\n            <div><strong>${fill(t.strong, lv, n)}</strong><p>${fill(t.text, lv, n)}</p></div>\n            <a class="button primary" href="${pdf}" download>${fill(t.button, lv, n)}</a>\n          </div><!-- /reading-book -->`);
  }
  place(`src/html/${t.dir}/index.html`, `\n          <div class="reading-book">\n            <div><strong>${t.all}</strong><p>${t.allText}</p></div>\n            <div class="reading-book-levels">${links.join('')}</div>\n          </div><!-- /reading-book -->`);
  if (!check) console.log(`${lang}: ${links.length} livelli`);
}
if (problems.length) {
  console.error(problems.join('\n'));
  console.error(check ? 'Lanciare: node scripts/add-reading-books.mjs' : '');
  process.exit(1);
}
if (check) console.log('Raccolte PDF delle letture: riquadri a posto.');

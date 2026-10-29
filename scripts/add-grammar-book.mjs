// Mette in cima agli indici di grammatica delle 10 lingue il riquadro
// «Tutta la grammatica in un PDF», con il link al libro che fa
// `python scripts/generate-pdfs.py --book`, e aggiunge «PDF» al title
// dell'indice (Martin, 2026-10-29: «se cercano grammatica italiana pdf gratis
// la trovano»).
//
// Idempotente: rilanciato aggiorna testo e numero di lezioni. Va rilanciato dopo
// `scripts/pt/build-pt.mjs`, che riscrive l'indice portoghese da quello spagnolo,
// e dopo ogni generatore che riscrive gli indici di grammatica da zero.

import { readFileSync, writeFileSync } from 'node:fs';

const BOOK = {
  it: { dir: 'grammatica', file: 'grammatica-italiana-a1-c1.pdf', title: ['Grammatica italiana per stranieri A1–C1: lezioni ed esercizi gratis', 'Grammatica italiana per stranieri A1–C1: lezioni, esercizi e PDF gratis'], strong: 'Tutta la grammatica in un PDF', text: 'Le {n} lezioni dall’A1 al C1 in un unico libro da stampare, con indice, esercizi e soluzioni. Gratis.', button: 'Scarica il PDF (A1–C1)' },
  en: { dir: 'en/grammar', file: 'italian-grammar-a1-c1.pdf', title: ['Italian grammar A1–C1: free lessons with exercises', 'Italian grammar A1–C1: free lessons, exercises and PDF'], strong: 'All the grammar in one PDF', text: 'All {n} lessons from A1 to C1 in one printable book, with contents, exercises and answers. Free.', button: 'Download the PDF (A1–C1)' },
  es: { dir: 'es/gramatica', file: 'gramatica-italiana-a1-c1.pdf', title: ['Gramática italiana A1–C1: lecciones gratis con ejercicios', 'Gramática italiana A1–C1: lecciones, ejercicios y PDF gratis'], strong: 'Toda la gramática en un PDF', text: 'Las {n} lecciones del A1 al C1 en un solo libro para imprimir, con índice, ejercicios y soluciones. Gratis.', button: 'Descarga el PDF (A1–C1)' },
  fr: { dir: 'fr/grammaire', file: 'grammaire-italienne-a1-c1.pdf', title: ['Grammaire italienne A1–C1 : leçons gratuites avec exercices', 'Grammaire italienne A1–C1 : leçons, exercices et PDF gratuits'], strong: 'Toute la grammaire en un PDF', text: 'Les {n} leçons de A1 à C1 dans un seul livre à imprimer, avec sommaire, exercices et corrigés. Gratuit.', button: 'Télécharger le PDF (A1–C1)' },
  cs: { dir: 'cs/gramatika', file: 'italska-gramatika-a1-c1.pdf', title: ['Italská gramatika A1–C1: lekce zdarma s cvičeními', 'Italská gramatika A1–C1: lekce, cvičení a PDF zdarma'], strong: 'Celá gramatika v jednom PDF', text: 'Všech {n} lekcí od A1 po C1 v jedné knize k tisku, s obsahem, cvičeními a řešením. Zdarma.', button: 'Stáhnout PDF (A1–C1)' },
  pl: { dir: 'pl/gramatyka', file: 'gramatyka-wloska-a1-c1.pdf', title: ['Gramatyka włoska A1–C1: darmowe lekcje z ćwiczeniami', 'Gramatyka włoska A1–C1: darmowe lekcje, ćwiczenia i PDF'], strong: 'Cała gramatyka w jednym PDF', text: 'Wszystkie lekcje od A1 do C1 ({n}) w jednej książce do wydruku, ze spisem treści, ćwiczeniami i odpowiedziami. Za darmo.', button: 'Pobierz PDF (A1–C1)' },
  tr: { dir: 'tr/dilbilgisi', file: 'italyanca-dilbilgisi-a1-c1.pdf', title: ['İtalyanca dil bilgisi A1–C1: alıştırmalı ücretsiz dersler', 'İtalyanca dil bilgisi A1–C1: ücretsiz dersler, alıştırmalar ve PDF'], strong: 'Tüm dil bilgisi tek bir PDF’te', text: 'A1’den C1’e {n} dersin tamamı yazdırılabilir tek bir kitapta: içindekiler, alıştırmalar ve cevaplarla. Ücretsiz.', button: 'PDF’i indirin (A1–C1)' },
  de: { dir: 'de/grammatik', file: 'italienische-grammatik-a1-c1.pdf', title: ['Italienische Grammatik A1–C1: kostenlose Lektionen mit Übungen', 'Italienische Grammatik A1–C1: kostenlose Lektionen, Übungen und PDF'], strong: 'Die ganze Grammatik in einem PDF', text: 'Alle {n} Lektionen von A1 bis C1 in einem Buch zum Ausdrucken, mit Inhaltsverzeichnis, Übungen und Lösungen. Kostenlos.', button: 'PDF herunterladen (A1–C1)' },
  ja: { dir: 'ja/bunpo', file: 'italian-grammar-a1-c1.pdf', title: ['イタリア語文法 A1〜C1：練習問題つき無料レッスン', 'イタリア語文法 A1〜C1：無料レッスン・練習問題・PDF'], strong: '文法のすべてを1つのPDFに', text: 'A1からC1までの{n}レッスンを、目次・練習問題・解答つきの印刷できる1冊にまとめました。無料です。', button: 'PDFをダウンロード（A1〜C1）' },
  pt: { dir: 'pt/gramatica', file: 'gramatica-italiana-a1-c1.pdf', title: ['Gramática italiana A1–C1: lições grátis com exercícios', 'Gramática italiana A1–C1: lições, exercícios e PDF grátis'], strong: 'Toda a gramática em um PDF', text: 'As {n} lições do A1 ao C1 em um único livro para imprimir, com sumário, exercícios e respostas. Grátis.', button: 'Baixe o PDF (A1–C1)' },
};

const BLOCK = /\n?\s*<div class="path-note grammar-book">[\s\S]*?<!-- \/grammar-book -->/;

for (const [lang, t] of Object.entries(BOOK)) {
  const htmlFile = `src/html/${t.dir}/index.html`;
  let html = readFileSync(htmlFile, 'utf8');
  const lessons = new Set([...html.matchAll(/class="lesson-card[^"]*" href="([^"]+)"/g)].map((match) => match[1])).size;
  const block = `\n      <div class="path-note grammar-book">\n        <div><strong>${t.strong}</strong><p>${t.text.replace('{n}', lessons)}</p></div>\n        <a class="button primary" href="/pdf/${lang}/${t.file}" download>${t.button}</a>\n      </div><!-- /grammar-book -->`;
  html = html.replace(BLOCK, '');
  // Subito dopo il riquadro «Non sai da dove iniziare?», dentro l'introduzione.
  const anchor = html.indexOf('<div class="path-note">');
  if (anchor === -1) throw new Error(`${htmlFile}: manca .path-note`);
  const end = html.indexOf('</div>', html.indexOf('</a>', anchor)) + '</div>'.length;
  html = html.slice(0, end) + block + html.slice(end);
  // Niente etichette «Nuova lezione» / «Lezione interattiva» sulle tessere (Martin, 2026-10-29:
  // «mi sembrano inutili»). I generatori delle lezioni le rimettono: per questo si tolgono qui.
  html = html.replace(/<span class="status">[^<]*<\/span>/g, '');
  writeFileSync(htmlFile, html);

  const pageFile = `src/pages/${t.dir}/index.astro`;
  const page = readFileSync(pageFile, 'utf8');
  writeFileSync(pageFile, page.split(t.title[0]).join(t.title[1]));
  console.log(`${lang}: ${lessons} lezioni, ${t.file}`);
}

import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const siteRoot = path.join(root, 'legacy-html');
const siteUrl = 'https://italianoconmartin.com';
const languages = ['en', 'es', 'fr', 'cs', 'pl', 'tr', 'de', 'ja'];
const routes = { letture: 'readings', favole: 'stories', grammatica: 'grammar' };
const copy = {
  en: { name: 'English', flag: '🇬🇧', home: 'Home', readings: 'Readings', grammar: 'Grammar', stories: 'Stories', book: 'Book on Preply', read: 'Read', story: 'Read the complete story', words: 'Useful words', speak: 'For speaking', comprehension: 'Comprehension', active: 'Active practice', exercise: 'Exercises', result: 'Your result', correct: 'correct answers out of', reset: 'Start again', next: 'Next lesson', back: 'Back to all readings', prefix: 'Italian reading' },
  es: { name: 'Español', flag: '🇪🇸', home: 'Inicio', readings: 'Lecturas', grammar: 'Gramática', stories: 'Historias', book: 'Reservar en Preply', read: 'Leer', story: 'Leer la historia completa', words: 'Palabras útiles', speak: 'Para hablar', comprehension: 'Comprensión', active: 'Práctica activa', exercise: 'Ejercicios', result: 'Tu resultado', correct: 'respuestas correctas de', reset: 'Empezar de nuevo', next: 'Siguiente lección', back: 'Volver a todas las lecturas', prefix: 'Lectura de italiano' },
  fr: { name: 'Français', flag: '🇫🇷', home: 'Accueil', readings: 'Lectures', grammar: 'Grammaire', stories: 'Histoires', book: 'Réserver sur Preply', read: 'Lire', story: 'Lire l’histoire complète', words: 'Mots utiles', speak: 'Pour parler', comprehension: 'Compréhension', active: 'Pratique active', exercise: 'Exercices', result: 'Votre résultat', correct: 'bonnes réponses sur', reset: 'Recommencer', next: 'Leçon suivante', back: 'Toutes les lectures', prefix: 'Lecture d’italien' },
  cs: { name: 'Čeština', flag: '🇨🇿', home: 'Domů', readings: 'Čtení', grammar: 'Gramatika', stories: 'Příběhy', book: 'Rezervovat na Preply', read: 'Číst', story: 'Přečíst celý příběh', words: 'Užitečná slova', speak: 'Pro mluvení', comprehension: 'Porozumění', active: 'Aktivní procvičování', exercise: 'Cvičení', result: 'Váš výsledek', correct: 'správných odpovědí z', reset: 'Začít znovu', next: 'Další lekce', back: 'Všechna čtení', prefix: 'Italské čtení' },
  pl: { name: 'Polski', flag: '🇵🇱', home: 'Strona główna', readings: 'Czytanki', grammar: 'Gramatyka', stories: 'Historie', book: 'Zarezerwuj na Preply', read: 'Czytaj', story: 'Przeczytaj całą historię', words: 'Przydatne słowa', speak: 'Do rozmowy', comprehension: 'Rozumienie tekstu', active: 'Aktywna praktyka', exercise: 'Ćwiczenia', result: 'Twój wynik', correct: 'poprawnych odpowiedzi z', reset: 'Zacznij od nowa', next: 'Następna lekcja', back: 'Wszystkie czytanki', prefix: 'Czytanka po włosku' },
  tr: { name: 'Türkçe', flag: '🇹🇷', home: 'Ana sayfa', readings: 'Okumalar', grammar: 'Dil bilgisi', stories: 'Hikâyeler', book: 'Preply’de rezervasyon yap', read: 'Oku', story: 'Hikâyenin tamamını oku', words: 'Yararlı kelimeler', speak: 'Konuşma için', comprehension: 'Anlama', active: 'Aktif pratik', exercise: 'Alıştırmalar', result: 'Sonucunuz', correct: 'doğru cevap /', reset: 'Yeniden başla', next: 'Sonraki ders', back: 'Tüm okumalar', prefix: 'İtalyanca okuma' },
  de: { name: 'Deutsch', flag: '🇩🇪', home: 'Startseite', readings: 'Lesetexte', grammar: 'Grammatik', stories: 'Geschichten', book: 'Auf Preply buchen', read: 'Lesen', story: 'Die ganze Geschichte lesen', words: 'Nützliche Wörter', speak: 'Zum Sprechen', comprehension: 'Verständnis', active: 'Aktives Üben', exercise: 'Übungen', result: 'Dein Ergebnis', correct: 'richtige Antworten von', reset: 'Neu beginnen', next: 'Nächste Lektion', back: 'Alle Lesetexte', prefix: 'Italienischer Lesetext' },
  ja: { name: '日本語', flag: '🇯🇵', home: 'ホーム', readings: '読解', grammar: '文法', stories: '物語', book: 'Preplyで予約', read: '読む', story: '物語をすべて読む', words: '役立つ単語', speak: '会話の練習', comprehension: '読解問題', active: '実践練習', exercise: '練習問題', result: '結果', correct: '問正解 /', reset: 'もう一度始める', next: '次のレッスン', back: 'すべての読解', prefix: 'イタリア語の読解' },
};
const metaSuffix = {
  en: 'Italian study text with useful words, questions and activities for learners from A1 to C1.',
  es: 'Texto de estudio en italiano con palabras útiles, preguntas y actividades para estudiantes de A1 a C1.',
  fr: 'Texte d’étude en italien avec mots utiles, questions et activités pour les niveaux A1 à C1.',
  cs: 'Italský studijní text s užitečnými slovy, otázkami a aktivitami pro úrovně A1 až C1.',
  pl: 'Tekst do nauki włoskiego z przydatnymi słowami, pytaniami i ćwiczeniami dla poziomów A1–C1.',
  tr: 'A1-C1 seviyesindeki öğrenciler için yararlı kelimeler, sorular ve etkinlikler içeren İtalyanca çalışma metni.',
  de: 'Italienischer Lerntext mit nützlichen Wörtern, Fragen und Aktivitäten für die Niveaus A1 bis C1.',
  ja: 'A1からC1レベルの学習者向けに、役立つ単語、質問、練習を含むイタリア語学習テキストです。',
};

const resources = collectResources();
for (const language of languages) {
  for (const resource of resources) writeLocalizedResource(resource, language);
  for (const category of Object.keys(routes)) writeLocalizedIndex(category, language);
}

function collectResources() {
  const result = [];
  for (const category of Object.keys(routes)) {
    const categoryRoot = path.join(siteRoot, category);
    for (const file of walk(categoryRoot)) {
      if (!file.endsWith('.html') || path.basename(file) === 'index.html') continue;
      result.push({ category, relative: path.relative(siteRoot, file).replaceAll('\\', '/') });
    }
  }
  return result.sort((a, b) => a.relative.localeCompare(b.relative));
}

function writeLocalizedResource(resource, language) {
  const source = readFileSync(path.join(siteRoot, resource.relative), 'utf8');
  const targetRelative = localizedRelative(resource, language);
  const target = path.join(siteRoot, targetRelative);
  mkdirSync(path.dirname(target), { recursive: true });
  writeFileSync(target, localizeHtml(source, resource, language, targetRelative));
}

function writeLocalizedIndex(category, language) {
  const sourcePath = path.join(siteRoot, category, 'index.html');
  if (!existsSync(sourcePath)) return;
  const resource = { category, relative: `${category}/index.html` };
  const targetRelative = path.join(language, routes[category], 'index.html');
  const target = path.join(siteRoot, targetRelative);
  writeFileSync(target, localizeHtml(readFileSync(sourcePath, 'utf8'), resource, language, targetRelative));
}

function localizeHtml(source, resource, language, targetRelative) {
  const t = copy[language];
  const localizedCategory = routes[resource.category];
  const canonical = `${siteUrl}/${language}/${localizedCategory}/${resource.relative.includes('/a1/') ? 'a1/' : resource.relative.includes('/a2/') ? 'a2/' : resource.relative.includes('/b1/') ? 'b1/' : resource.relative.includes('/b2/') ? 'b2/' : resource.relative.includes('/c1/') ? 'c1/' : ''}${path.basename(resource.relative)}`.replace('/index.html', '/');
  const prefix = resource.category === 'grammatica' && path.basename(resource.relative) !== 'index.html' ? '../../../' : '../../';
  const categoryUrl = `${siteUrl}/${language}/${localizedCategory}/`;
  const titleText = plainText((source.match(/<h1>([\s\S]*?)<\/h1>/i) || [,'Italiano'])[1]);
  const title = `${t.prefix}: ${titleText} | Italiano con Martin`;
  const description = `${t.prefix}: ${titleText}. ${metaSuffix[language]}`;
  const hreflang = buildHreflang(resource);
  let html = source.replace(/<html lang="it">/i, `<html lang="${language}">`);
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(title)}</title>`);
  html = html.replace(/<meta name="description" content="[^"]*">/i, `<meta name="description" content="${escapeHtml(description)}">`);
  html = html.replace(/<link rel="canonical" href="[^"]*">/i, `<link rel="canonical" href="${canonical}">`);
  html = html.replace(/<meta property="og:title" content="[^"]*">/i, `<meta property="og:title" content="${escapeHtml(title)}">`);
  html = html.replace(/<meta property="og:description" content="[^"]*">/i, `<meta property="og:description" content="${escapeHtml(description)}">`);
  html = html.replace(/<meta property="og:url" content="[^"]*">/i, `<meta property="og:url" content="${canonical}">`);
  html = html.replace(/<meta name="twitter:title" content="[^"]*">/i, `<meta name="twitter:title" content="${escapeHtml(title)}">`);
  html = html.replace(/<meta name="twitter:description" content="[^"]*">/i, `<meta name="twitter:description" content="${escapeHtml(description)}">`);
  html = html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/i, `<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@type': resource.category === 'grammatica' ? 'LearningResource' : 'Article', url: canonical, name: titleText, inLanguage: language, isPartOf: categoryUrl })}</script>`);
  html = html.replace(/<link rel="alternate" hreflang="[\s\S]*?(?=<link rel="stylesheet")/i, '');
  html = html.replace(/<link rel="canonical"[^>]*>/i, `${hreflang}<link rel="canonical" href="${canonical}">`);
  html = html.replace(/<details class="language-switcher">[\s\S]*?<\/details>/i, languageSelector(resource, language));
  html = html.replace(/(href|src)="(?:\.\.\/)+(?=(?:assets|styles\.css|script\.js|favicon\.png|apple-touch-icon\.png))/gi, `$1="${prefix}`);
  html = html.replace(/href="\.\.\/letture\//g, `href="/${language}/${routes.letture}/`);
  html = html.replace(/href="\.\.\/grammatica\//g, `href="/${language}/${routes.grammatica}/`);
  html = html.replace(/href="\.\.\/favole\//g, `href="/${language}/${routes.favole}/`);
  html = html.replace(/href="\.\.\/\.\.\/letture\//g, `href="/${language}/${routes.letture}/`);
  html = html.replace(/href="\.\.\/\.\.\/grammatica\//g, `href="/${language}/${routes.grammatica}/`);
  html = html.replace(/href="\.\.\/\.\.\/favole\//g, `href="/${language}/${routes.favole}/`);
  html = html.replace(/href="\.\.\/\.\.\/"/g, `href="/${language}/"`);
  html = html.replace(/href="\.\.\/"/g, `href="/${language}/"`);
  html = html.replace(/href="\.\/"/g, `href="/${language}/${localizedCategory}/"`);
  html = html.replace(/<a class="brand" href="[^"]*">/i, `<a class="brand" href="/${language}/">`);
  html = translateInterface(html, t);
  html = html.replaceAll(`<a href="/${language}/">${t.grammar}</a>`, `<a href="/${language}/${routes.grammatica}/">${t.grammar}</a>`);
  html = html.replaceAll('Grammatica A1', `${t.grammar} A1`).replaceAll('Grammatica A2', `${t.grammar} A2`).replaceAll('Grammatica B1', `${t.grammar} B1`).replaceAll('Grammatica B2', `${t.grammar} B2`).replaceAll('Grammatica C1', `${t.grammar} C1`);
  html = html.replace(/(\d+) risposte corrette su (\d+)/g, (_, correct, total) => `${correct} ${t.correct} ${total}`);
  return html;
}

function buildHreflang(resource) {
  const file = path.basename(resource.relative);
  const level = resource.category === 'grammatica' ? `${resource.relative.split('/')[1]}/` : '';
  const italianPath = file === 'index.html' ? `${resource.category}/` : resource.relative;
  const localizedPath = file === 'index.html' ? `${routes[resource.category]}/` : `${routes[resource.category]}/${level}${file}`;
  const links = [`<link rel="alternate" hreflang="it" href="${siteUrl}/${italianPath}">`];
  for (const language of languages) links.push(`<link rel="alternate" hreflang="${language}" href="${siteUrl}/${language}/${localizedPath}">`);
  links.push(`<link rel="alternate" hreflang="x-default" href="${siteUrl}/${italianPath}">`);
  return `${links.join('')}\n  `;
}

function languageSelector(resource, current) {
  const category = routes[resource.category];
  const file = path.basename(resource.relative);
  const level = resource.category === 'grammatica' ? `${resource.relative.split('/')[1]}/` : '';
  const italianPath = file === 'index.html' ? `${resource.category}/` : resource.relative;
  const localizedPath = file === 'index.html' ? `${category}/` : `${category}/${level}${file}`;
  const entries = [`<a href="/${italianPath}" hreflang="it" lang="it"><span aria-hidden="true">🇮🇹</span><span>Italiano</span></a>`];
  for (const language of languages) entries.push(`<a href="/${language}/${localizedPath}" hreflang="${language}" lang="${language}"${language === current ? ' aria-current="page"' : ''}><span aria-hidden="true">${copy[language].flag}</span><span>${copy[language].name}</span></a>`);
  return `<details class="language-switcher"><summary aria-label="Scegli lingua"><span class="language-flag" aria-hidden="true">${current === 'it' ? '🇮🇹' : copy[current].flag}</span><span class="language-current">${current === 'it' ? 'Italiano' : copy[current].name}</span><span class="language-chevron" aria-hidden="true">⌄</span></summary><div class="language-options">${entries.join('')}</div></details>`;
}

function translateInterface(html, t) {
  const replacements = [
    ['Home', t.home], ['Letture', t.readings], ['Grammatica', t.grammar], ['Favole', t.stories], ['Prenota su Preply', t.book],
    ['Leggi l’articolo', `${t.read} article`], ['Leggi l\'articolo', `${t.read} article`], ['Leggi la favola completa', t.story],
    ['Parole utili', t.words], ['Per parlare', t.speak], ['Comprensione', t.comprehension], ['Scheda lessico', t.words], ['Scheda attiva', t.active],
    ['Esercizi con feedback immediato', t.exercise], ['Il tuo risultato', t.result], ['Ricomincia', t.reset], ['Prossima lezione', t.next],
  ];
  for (const [from, to] of replacements) html = html.replaceAll(from, to);
  return html;
}

function localizedRelative(resource, language) {
  const parts = resource.relative.split('/');
  const level = resource.category === 'grammatica' ? `${parts[1]}/` : '';
  return `${language}/${routes[resource.category]}/${level}${parts.at(-1)}`;
}

function plainText(value) { return value.replace(/<[^>]+>/g, '').replaceAll('&rsquo;', "'").replaceAll('&nbsp;', ' ').trim(); }
function escapeHtml(value) { return value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;'); }
function walk(directory) {
  if (!existsSync(directory)) return [];
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const absolute = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(absolute) : [absolute];
  });
}

console.log(`Generated ${resources.length * languages.length} localized resource pages and ${languages.length * 3} localized hubs.`);

const sitemapUrls = [
  '/', '/letture/', '/favole/', '/grammatica/',
  ...resources.map((resource) => `/${resource.relative}`),
  ...languages.flatMap((language) => [
    `/${language}/`, `/${language}/readings/`, `/${language}/stories/`, `/${language}/grammar/`,
    ...resources.map((resource) => `/${language}/${localizedRelative(resource, language).split('/').slice(1).join('/')}`),
  ]),
];
const uniqueUrls = [...new Set(sitemapUrls)];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${uniqueUrls.map((url) => `  <url><loc>${siteUrl}${url}</loc><changefreq>monthly</changefreq></url>`).join('\n')}\n</urlset>\n`;
writeFileSync(path.join(siteRoot, 'sitemap.xml'), sitemap);

import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import * as cheerio from 'cheerio';

const root = process.cwd();
const source = cheerio.load(readFileSync(path.join(root, 'legacy-html', 'index.html'), 'utf8'), {
  decodeEntities: false,
});
source('html').attr('lang', 'en');
source('title').text('Learn Italian online with Martin and Licia | Italiano con Martin');
source('meta[name="description"]').attr(
  'content',
  'Practical one-to-one Italian lessons with Martin and Licia, plus free graded grammar, readings, stories and vocabulary.'
);
source('link[rel="canonical"]').attr('href', 'https://italianoconmartin.com/en/');
source('meta[property="og:url"]').attr('content', 'https://italianoconmartin.com/en/');
source('meta[property="og:title"],meta[name="twitter:title"]').attr(
  'content',
  'Learn Italian online with Martin and Licia | Italiano con Martin'
);
source('meta[property="og:description"],meta[name="twitter:description"]').attr(
  'content',
  'Practical one-to-one Italian lessons with Martin and Licia, plus free graded learning materials.'
);

const text = (selector, value) => source(selector).first().text(value);
const html = (selector, value) => source(selector).first().html(value);
html('.hero-kicker', 'Private online lessons <span aria-hidden="true">·</span> A1-C1');
text('.hero-copy .eyebrow', 'Italian for foreigners');
text('.hero-copy h1', 'Speak Italian with more confidence, one lesson at a time.');
text(
  '.hero-copy .lead',
  'Hi, I’m Martin, a native Italian teacher. Lessons are individual, practical and built around your level: real conversation, clear grammar and materials for continued study.'
);
text(
  '.hero-action-note',
  'Choose Preply to book immediately, or message me if you would like help choosing the right path.'
);
text('.actions .hero-cta:first-child', 'Book on Preply');
text('.actions .hero-cta:nth-child(2)', 'Message me on WhatsApp');
text('.teachers-section .section-heading .eyebrow', 'Two teachers, two approaches');
text('.teachers-section h2', 'Choose the teacher who fits you best.');
text(
  '.teachers-section .section-heading > p',
  'Martin and Licia teach Italian online for €10 per lesson. Choose the profile that feels closest to your goals.'
);
text('.teacher-card:nth-of-type(1) h3', 'Science, technology and etymology');
text(
  '.teacher-card:nth-of-type(1) div p:nth-of-type(2)',
  'Martin loves explaining how things work, where words come from and how language connects with culture and the modern world.'
);
text('.teacher-card:nth-of-type(1) .teacher-price', '€10 per lesson');
text('.teacher-card:nth-of-type(1) .button', "View Martin's profile");
text('.teacher-card:nth-of-type(2) h3', 'Art, patience and grammar');
text(
  '.teacher-card:nth-of-type(2) div p:nth-of-type(2)',
  'Licia is patient, loves art and is especially good at grammar. She helps you understand rules calmly and use them in conversation.'
);
text('.teacher-card:nth-of-type(2) .teacher-price', '€10 per lesson');
text('.teacher-card:nth-of-type(2) .button', "View Licia's profile");
text('.level-path-section .eyebrow', 'Quick path');
text('.level-path-section h2', 'Choose your level.');
text(
  '.level-path-section .section-heading > p',
  'Start with a lesson or a story. Then bring questions, new words and mistakes into conversation.'
);
const levelCopy = [
  ['Starter basics', 'Simple sentences, essential verbs and everyday dialogues.'],
  ['More independence', 'Past, future, modal verbs and practical conversations.'],
  ['More natural speech', 'Opinions, stories and richer sentences.'],
  ['More precision', 'Nuance, longer texts and confident conversation.'],
  ['Advanced fluency', 'Subtle meanings, complex texts and confident expression.'],
];
source('.level-path-grid a').each((i, el) => {
  source(el).find('strong').text(levelCopy[i][0]);
  source(el).find('small').text(levelCopy[i][1]);
});
text('.start-section .eyebrow', 'Free materials');
text('.start-section h2', 'Study freely, then bring it all into conversation.');
text(
  '.start-section .section-heading > p',
  'Use the site resources to prepare. In lessons we turn rules, stories and new words into spoken Italian.'
);
const cards = [
  ['Interactive grammar', 'Clear rules, real examples and exercises with immediate feedback.', 'Go to grammar'],
  [
    'Graded stories',
    'Classic stories in five levels, with vocabulary, questions and illustrations.',
    'Read the stories',
  ],
  [
    'Graded readings',
    'Science, technology, culture and history at different levels, with vocabulary and questions.',
    'Open the library',
  ],
  [
    'Illustrated vocabulary',
    'Words organized by setting, with images, example sentences and exercises.',
    'Explore the words',
  ],
];
source('.start-section .home-card').each((i, el) => {
  source(el).find('h3').text(cards[i][0]);
  source(el).find('p').text(cards[i][1]);
  source(el)
    .find('strong')
    .first()
    .contents()
    .first()
    .replaceWith(cards[i][2] + ' ');
});

const heroPhotos = `<div class="teacher-photo-pair"><div class="teacher-photo-frame"><img class="teacher-photo" src="../assets/martin-portrait.webp" alt="Martin, Italian teacher" width="800" height="1067" fetchpriority="high" decoding="async"></div><div class="teacher-photo-frame teacher-photo-frame-secondary"><img class="teacher-photo" src="../assets/licia-portrait.webp" alt="Licia, Italian teacher" width="800" height="800" decoding="async"></div></div><div class="teacher-badge"><strong>Martin &amp; Licia</strong><span>Native Italian teachers</span></div>`;
source('.teacher-photo-wrap').html(heroPhotos);

source('link[rel="alternate"][hreflang="it"]').removeAttr('aria-current');
source('link[rel="alternate"][hreflang="en"]').attr('aria-current', 'page');
source('.language-options a').removeAttr('aria-current').filter('[hreflang="en"]').attr('aria-current', 'page');
source('.language-current').text('English');
source('.language-flag').first().text('🇬🇧');
source('nav a').each((_, el) => {
  const href = source(el).attr('href');
  const labels = { Letture: 'Readings', Grammatica: 'Grammar', Vocabolario: 'Vocabulary', 'Chi siamo': 'About us' };
  if (labels[source(el).text().trim()]) source(el).text(labels[source(el).text().trim()]);
  if (href === 'letture/') source(el).attr('href', 'readings/');
  if (href === 'grammatica/') source(el).attr('href', 'grammar/');
  if (href === 'vocabolario/') source(el).attr('href', 'vocabulary/');
});
source('a[href="./"]').attr('href', '../en/');
source('[href^="grammatica/"]').each((_, el) =>
  source(el).attr('href', source(el).attr('href').replace('grammatica/', 'grammar/'))
);
source('[href^="favole/"]').each((_, el) =>
  source(el).attr('href', source(el).attr('href').replace('favole/', 'stories/'))
);
source('[href^="letture/"]').each((_, el) =>
  source(el).attr('href', source(el).attr('href').replace('letture/', 'readings/'))
);
source('[href^="vocabolario/"]').each((_, el) =>
  source(el).attr('href', source(el).attr('href').replace('vocabolario/', 'vocabulary/'))
);
source('[src^="assets/"]').each((_, el) => source(el).attr('src', `../${source(el).attr('src')}`));
source('[href="styles.css"]').attr('href', '../styles.css');
source('[src="script.js"]').attr('src', '../script.js');
source('[href="/chi-siamo/"]').attr('href', '/en/about-us/');

const replacements = {
  'Dettagli della lezione': 'Lesson details',
  '10€ a lezione': '€10 per lesson',
  'Lezione individuale': 'One-to-one lesson',
  'Conversazione reale': 'Real conversation',
  'Percorso personalizzato': 'Personalized path',
  'I punti forti delle lezioni': 'Lesson highlights',
  'Due insegnanti': 'Two teachers',
  'Scegli Martin o Licia in base al tuo stile.': 'Choose Martin or Licia based on your style.',
  'Lezioni 1:1 online': 'One-to-one online lessons',
  'Obiettivi, interessi e ritmo personali.': 'Personal goals, interests and pace.',
  '10€ per lezione': '€10 per lesson',
  'Grammatica, conversazione e materiali inclusi.': 'Grammar, conversation and materials included.',
  'Favole A1-C1': 'Graded stories A1-C1',
  'Letture graduate': 'Graded readings',
  'Immagini e pronuncia': 'Images and pronunciation',
  'Lezioni online individuali a 10€, letture graduate, grammatica e vocabolario.':
    'One-to-one online lessons at €10, graded readings, grammar and vocabulary.',
  '>Letture<': '>Readings<',
  '>Grammatica<': '>Grammar<',
  '>Vocabolario<': '>Vocabulary<',
  '>Chi siamo<': '>About us<',
  'Insegnante madrelingua italiano': 'Native Italian teacher',
  'Insegnante di italiano': 'Italian teacher',
  'Appassionato di scienza, tecnologia ed etimologia.': 'Passionate about science, technology and etymology.',
  'Insegnante paziente, appassionata d’arte e specializzata in grammatica.':
    'Patient teacher, passionate about art and specialized in grammar.',
  'Lezioni online individuali di italiano per stranieri con grammatica interattiva, letture graduate e percorsi dal livello A1 al C1.':
    'One-to-one online Italian lessons for foreigners with interactive grammar, graded readings and paths from A1 to C1.',
  'Martin, insegnante di italiano per stranieri': 'Martin, Italian teacher for foreigners',
  'Scegli lingua': 'Choose language',
  'Martin Modena, insegnante di italiano appassionato di scienza, tecnologia ed etimologia':
    'Martin Modena, Italian teacher passionate about science, technology and etymology',
  "Licia, insegnante di italiano paziente, appassionata d'arte e molto brava con la grammatica":
    'Licia, patient Italian teacher passionate about art and especially good at grammar',
  "Insegnante paziente, appassionata d'arte e specializzata in grammatica.":
    'Patient teacher, passionate about art and specialized in grammar.',
};
let serialized = source.html();
for (const [from, to] of Object.entries(replacements)) serialized = serialized.replaceAll(from, to);
serialized = serialized.replace(/[ \t]+$/gm, '');
writeFileSync(
  path.join(root, 'legacy-html', 'en', 'index.html'),
  `<!doctype html>\n${serialized.replace(/^<!doctype html>/i, '')}`
);

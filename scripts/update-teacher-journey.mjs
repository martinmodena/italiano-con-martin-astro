import { existsSync, readFileSync, readdirSync, writeFileSync, mkdirSync } from 'node:fs';
import path from 'node:path';
import * as cheerio from 'cheerio';

const root = process.cwd();
const siteRoot = path.join(root, 'legacy-html');
const siteUrl = 'https://italianoconmartin.com';
const martinUrl = 'https://preply.com/it/tutor/5086125';
const liciaUrl = 'https://preply.in/LICIA6IT2176799611?ts=17865248';
const whatsappNumber = '59167434075';

const copy = {
  it: {
    route: 'chi-siamo',
    flag: '🇮🇹',
    languageName: 'Italiano',
    about: 'Chi siamo',
    ctaTitle: 'Scegli con chi imparare italiano',
    ctaIntro: 'Due insegnanti, due sensibilità. Scegli il percorso più vicino ai tuoi interessi.',
    martinShort: 'Scienza, tecnologia ed etimologia',
    liciaShort: 'Arte, pazienza e grammatica',
    martinCta: 'Impara con Martin',
    liciaCta: 'Impara con Licia',
    discover: 'Conosci Martin e Licia',
    whatsapp: 'Scrivici su WhatsApp',
    title: 'Chi siamo: Martin e Licia, insegnanti di italiano online',
    eyebrow: 'I tuoi insegnanti',
    lead: 'Lezioni individuali di italiano con due insegnanti madrelingua, ciascuno con interessi e punti di forza diversi.',
    martinTitle: 'Lingua, scienza e curiosità',
    martinText:
      'Martin ama la scienza, la tecnologia e l’etimologia. Nelle sue lezioni collega la lingua alla cultura, alle idee e al mondo contemporaneo, con molta conversazione.',
    liciaTitle: 'Grammatica, arte e pazienza',
    liciaText:
      'Licia ama l’arte ed è particolarmente brava con la grammatica. Spiega con chiarezza, calma e pazienza, rispettando i tempi di ogni studente.',
    price: '10 € per lezione',
    contactTitle: 'Non sai quale insegnante scegliere?',
    contactText:
      'Scrivici su WhatsApp: ti aiutiamo a trovare il percorso più adatto al tuo livello e ai tuoi interessi.',
    meta: 'Conosci Martin e Licia, insegnanti madrelingua di italiano online. Lezioni individuali a 10 euro, profili Preply e contatto WhatsApp.',
    whatsappMessage: 'Ciao, vorrei informazioni sulle lezioni di italiano con Martin o Licia.',
    readings: 'Letture',
    grammar: 'Grammatica',
    vocabulary: 'Vocabolario',
    home: 'Home',
    footer: 'Lezioni online, letture graduate e grammatica.',
  },
  en: {
    route: 'about-us',
    flag: '🇬🇧',
    languageName: 'English',
    about: 'About us',
    ctaTitle: 'Choose who to learn Italian with',
    ctaIntro: 'Two teachers, two perspectives. Choose the approach that best matches your interests.',
    martinShort: 'Science, technology and etymology',
    liciaShort: 'Art, patience and grammar',
    martinCta: 'Learn with Martin',
    liciaCta: 'Learn with Licia',
    discover: 'Meet Martin and Licia',
    whatsapp: 'Message us on WhatsApp',
    title: 'About us: Martin and Licia, online Italian teachers',
    eyebrow: 'Your teachers',
    lead: 'One-to-one Italian lessons with two native teachers, each with different interests and strengths.',
    martinTitle: 'Language, science and curiosity',
    martinText:
      'Martin loves science, technology and etymology. His lessons connect language with culture, ideas and the contemporary world, with plenty of conversation.',
    liciaTitle: 'Grammar, art and patience',
    liciaText:
      'Licia loves art and is especially good at grammar. She explains clearly, calmly and patiently, respecting each student’s pace.',
    price: '€10 per lesson',
    contactTitle: 'Not sure which teacher to choose?',
    contactText: 'Message us on WhatsApp and we will help you find the best path for your level and interests.',
    meta: 'Meet Martin and Licia, native online Italian teachers. One-to-one lessons for 10 euros, Preply profiles and WhatsApp contact.',
    whatsappMessage: 'Hello, I would like information about Italian lessons with Martin or Licia.',
    readings: 'Readings',
    grammar: 'Grammar',
    vocabulary: 'Vocabulary',
    home: 'Home',
    footer: 'Online lessons, graded readings and clear grammar.',
  },
  es: {
    route: 'sobre-nosotros',
    flag: '🇪🇸',
    languageName: 'Español',
    about: 'Quiénes somos',
    ctaTitle: 'Elige con quién aprender italiano',
    ctaIntro: 'Dos profesores, dos perspectivas. Elige el enfoque que mejor se adapte a tus intereses.',
    martinShort: 'Ciencia, tecnología y etimología',
    liciaShort: 'Arte, paciencia y gramática',
    martinCta: 'Aprende con Martin',
    liciaCta: 'Aprende con Licia',
    discover: 'Conoce a Martin y Licia',
    whatsapp: 'Escríbenos por WhatsApp',
    title: 'Quiénes somos: Martin y Licia, profesores de italiano online',
    eyebrow: 'Tus profesores',
    lead: 'Clases individuales de italiano con dos profesores nativos, cada uno con intereses y puntos fuertes diferentes.',
    martinTitle: 'Lengua, ciencia y curiosidad',
    martinText:
      'A Martin le apasionan la ciencia, la tecnología y la etimología. Relaciona la lengua con la cultura, las ideas y el mundo actual, con mucha conversación.',
    liciaTitle: 'Gramática, arte y paciencia',
    liciaText:
      'Licia ama el arte y es especialmente buena con la gramática. Explica con claridad, calma y paciencia, respetando el ritmo de cada estudiante.',
    price: '10 € por clase',
    contactTitle: '¿No sabes qué profesor elegir?',
    contactText:
      'Escríbenos por WhatsApp y te ayudaremos a encontrar el camino más adecuado para tu nivel e intereses.',
    meta: 'Conoce a Martin y Licia, profesores nativos de italiano online. Clases individuales por 10 euros, perfiles de Preply y contacto por WhatsApp.',
    whatsappMessage: 'Hola, quisiera información sobre las clases de italiano con Martin o Licia.',
    readings: 'Lecturas',
    grammar: 'Gramática',
    vocabulary: 'Vocabulario',
    home: 'Inicio',
    footer: 'Clases online, lecturas graduadas y gramática clara.',
  },
  fr: {
    route: 'a-propos',
    flag: '🇫🇷',
    languageName: 'Français',
    about: 'À propos',
    ctaTitle: 'Choisissez avec qui apprendre l’italien',
    ctaIntro: 'Deux professeurs, deux sensibilités. Choisissez l’approche qui correspond le mieux à vos intérêts.',
    martinShort: 'Sciences, technologie et étymologie',
    liciaShort: 'Art, patience et grammaire',
    martinCta: 'Apprendre avec Martin',
    liciaCta: 'Apprendre avec Licia',
    discover: 'Découvrir Martin et Licia',
    whatsapp: 'Écrivez-nous sur WhatsApp',
    title: 'À propos : Martin et Licia, professeurs d’italien en ligne',
    eyebrow: 'Vos professeurs',
    lead: 'Des cours particuliers d’italien avec deux professeurs natifs aux intérêts et points forts complémentaires.',
    martinTitle: 'Langue, sciences et curiosité',
    martinText:
      'Martin aime les sciences, la technologie et l’étymologie. Ses cours relient la langue à la culture, aux idées et au monde contemporain, avec beaucoup de conversation.',
    liciaTitle: 'Grammaire, art et patience',
    liciaText:
      'Licia aime l’art et maîtrise particulièrement bien la grammaire. Elle explique avec clarté, calme et patience, en respectant le rythme de chaque élève.',
    price: '10 € par cours',
    contactTitle: 'Vous ne savez pas quel professeur choisir ?',
    contactText:
      'Écrivez-nous sur WhatsApp : nous vous aiderons à trouver le parcours adapté à votre niveau et à vos intérêts.',
    meta: 'Découvrez Martin et Licia, professeurs natifs d’italien en ligne. Cours particuliers à 10 euros, profils Preply et contact WhatsApp.',
    whatsappMessage: 'Bonjour, je voudrais des informations sur les cours d’italien avec Martin ou Licia.',
    readings: 'Lectures',
    grammar: 'Grammaire',
    vocabulary: 'Vocabulaire',
    home: 'Accueil',
    footer: 'Cours en ligne, lectures graduées et grammaire claire.',
  },
  cs: {
    route: 'o-nas',
    flag: '🇨🇿',
    languageName: 'Čeština',
    about: 'O nás',
    ctaTitle: 'Vyberte si, s kým se učit italsky',
    ctaIntro: 'Dva učitelé, dva přístupy. Vyberte si podle svých zájmů.',
    martinShort: 'Věda, technologie a etymologie',
    liciaShort: 'Umění, trpělivost a gramatika',
    martinCta: 'Učit se s Martinem',
    liciaCta: 'Učit se s Licií',
    discover: 'Poznejte Martina a Licii',
    whatsapp: 'Napište nám na WhatsApp',
    title: 'O nás: Martin a Licia, online učitelé italštiny',
    eyebrow: 'Vaši učitelé',
    lead: 'Individuální lekce italštiny se dvěma rodilými učiteli, z nichž každý má jiné zájmy a silné stránky.',
    martinTitle: 'Jazyk, věda a zvídavost',
    martinText:
      'Martin má rád vědu, technologie a etymologii. Propojuje jazyk s kulturou, myšlenkami a současným světem a věnuje hodně prostoru konverzaci.',
    liciaTitle: 'Gramatika, umění a trpělivost',
    liciaText:
      'Licia miluje umění a vyniká ve vysvětlování gramatiky. Vysvětluje jasně, klidně a trpělivě podle tempa každého studenta.',
    price: '10 € za lekci',
    contactTitle: 'Nevíte, kterého učitele si vybrat?',
    contactText: 'Napište nám na WhatsApp a pomůžeme vám najít cestu vhodnou pro vaši úroveň a zájmy.',
    meta: 'Poznejte Martina a Licii, rodilé online učitele italštiny. Individuální lekce za 10 eur, profily Preply a kontakt přes WhatsApp.',
    whatsappMessage: 'Dobrý den, chtěl(a) bych informace o lekcích italštiny s Martinem nebo Licií.',
    readings: 'Čtení',
    grammar: 'Gramatika',
    vocabulary: 'Slovní zásoba',
    home: 'Domů',
    footer: 'Online lekce, odstupňované čtení a jasná gramatika.',
  },
  pl: {
    route: 'o-nas',
    flag: '🇵🇱',
    languageName: 'Polski',
    about: 'O nas',
    ctaTitle: 'Wybierz, z kim uczyć się włoskiego',
    ctaIntro: 'Dwoje nauczycieli, dwa podejścia. Wybierz to, które najlepiej odpowiada Twoim zainteresowaniom.',
    martinShort: 'Nauka, technologia i etymologia',
    liciaShort: 'Sztuka, cierpliwość i gramatyka',
    martinCta: 'Ucz się z Martinem',
    liciaCta: 'Ucz się z Licią',
    discover: 'Poznaj Martina i Licię',
    whatsapp: 'Napisz do nas na WhatsApp',
    title: 'O nas: Martin i Licia, nauczyciele włoskiego online',
    eyebrow: 'Twoi nauczyciele',
    lead: 'Indywidualne lekcje włoskiego z dwojgiem native speakerów o różnych zainteresowaniach i mocnych stronach.',
    martinTitle: 'Język, nauka i ciekawość',
    martinText:
      'Martin interesuje się nauką, technologią i etymologią. Łączy język z kulturą, ideami i współczesnym światem, stawiając na rozmowę.',
    liciaTitle: 'Gramatyka, sztuka i cierpliwość',
    liciaText:
      'Licia kocha sztukę i szczególnie dobrze wyjaśnia gramatykę. Robi to jasno, spokojnie i cierpliwie, szanując tempo każdego ucznia.',
    price: '10 € za lekcję',
    contactTitle: 'Nie wiesz, którego nauczyciela wybrać?',
    contactText:
      'Napisz do nas na WhatsApp, a pomożemy znaleźć ścieżkę odpowiednią do Twojego poziomu i zainteresowań.',
    meta: 'Poznaj Martina i Licię, native speakerów uczących włoskiego online. Indywidualne lekcje za 10 euro, profile Preply i kontakt WhatsApp.',
    whatsappMessage: 'Dzień dobry, proszę o informacje o lekcjach włoskiego z Martinem lub Licią.',
    readings: 'Czytanki',
    grammar: 'Gramatyka',
    vocabulary: 'Słownictwo',
    home: 'Strona główna',
    footer: 'Lekcje online, czytanki poziomowane i jasna gramatyka.',
  },
  tr: {
    route: 'hakkimizda',
    flag: '🇹🇷',
    languageName: 'Türkçe',
    about: 'Hakkımızda',
    ctaTitle: 'İtalyancayı kiminle öğreneceğinizi seçin',
    ctaIntro: 'İki öğretmen, iki yaklaşım. İlgi alanlarınıza en uygun olanı seçin.',
    martinShort: 'Bilim, teknoloji ve etimoloji',
    liciaShort: 'Sanat, sabır ve dil bilgisi',
    martinCta: 'Martin ile öğren',
    liciaCta: 'Licia ile öğren',
    discover: 'Martin ve Licia’yı tanıyın',
    whatsapp: 'WhatsApp’tan yazın',
    title: 'Hakkımızda: Online İtalyanca öğretmenleri Martin ve Licia',
    eyebrow: 'Öğretmenleriniz',
    lead: 'Farklı ilgi alanlarına ve güçlü yönlere sahip iki ana dili İtalyanca olan öğretmenle bire bir dersler.',
    martinTitle: 'Dil, bilim ve merak',
    martinText:
      'Martin bilim, teknoloji ve etimolojiyi sever. Derslerinde dili kültür, fikirler ve günümüz dünyasıyla birleştirir ve bolca konuşma pratiği yapar.',
    liciaTitle: 'Dil bilgisi, sanat ve sabır',
    liciaText:
      'Licia sanatı sever ve dil bilgisini açıklamakta özellikle iyidir. Her öğrencinin hızına saygı göstererek açık, sakin ve sabırlı biçimde anlatır.',
    price: 'Ders başına 10 €',
    contactTitle: 'Hangi öğretmeni seçeceğinizden emin değil misiniz?',
    contactText: 'WhatsApp’tan yazın; seviyenize ve ilgi alanlarınıza en uygun yolu bulmanıza yardımcı olalım.',
    meta: 'Ana dili İtalyanca olan online öğretmenler Martin ve Licia’yı tanıyın. 10 euroluk bire bir dersler, Preply profilleri ve WhatsApp iletişimi.',
    whatsappMessage: 'Merhaba, Martin veya Licia ile İtalyanca dersleri hakkında bilgi almak istiyorum.',
    readings: 'Okumalar',
    grammar: 'Dil bilgisi',
    vocabulary: 'Kelime bilgisi',
    home: 'Ana sayfa',
    footer: 'Online dersler, seviyeli okumalar ve açık dil bilgisi.',
  },
  de: {
    route: 'ueber-uns',
    flag: '🇩🇪',
    languageName: 'Deutsch',
    about: 'Über uns',
    ctaTitle: 'Wählen Sie, mit wem Sie Italienisch lernen',
    ctaIntro: 'Zwei Lehrkräfte, zwei Perspektiven. Wählen Sie den Ansatz, der zu Ihren Interessen passt.',
    martinShort: 'Wissenschaft, Technologie und Etymologie',
    liciaShort: 'Kunst, Geduld und Grammatik',
    martinCta: 'Mit Martin lernen',
    liciaCta: 'Mit Licia lernen',
    discover: 'Martin und Licia kennenlernen',
    whatsapp: 'Per WhatsApp schreiben',
    title: 'Über uns: Martin und Licia, Online-Italienischlehrer',
    eyebrow: 'Ihre Lehrkräfte',
    lead: 'Italienisch-Einzelunterricht mit zwei muttersprachlichen Lehrkräften mit unterschiedlichen Interessen und Stärken.',
    martinTitle: 'Sprache, Wissenschaft und Neugier',
    martinText:
      'Martin liebt Wissenschaft, Technologie und Etymologie. Er verbindet Sprache mit Kultur, Ideen und der modernen Welt und legt großen Wert auf Konversation.',
    liciaTitle: 'Grammatik, Kunst und Geduld',
    liciaText:
      'Licia liebt Kunst und kann Grammatik besonders gut erklären. Sie erklärt klar, ruhig und geduldig und respektiert das Tempo jedes Lernenden.',
    price: '10 € pro Unterrichtsstunde',
    contactTitle: 'Sie wissen nicht, welche Lehrkraft Sie wählen sollen?',
    contactText:
      'Schreiben Sie uns per WhatsApp. Wir helfen Ihnen, den passenden Weg für Ihr Niveau und Ihre Interessen zu finden.',
    meta: 'Lernen Sie Martin und Licia kennen, muttersprachliche Online-Italienischlehrer. Einzelunterricht für 10 Euro, Preply-Profile und WhatsApp-Kontakt.',
    whatsappMessage: 'Hallo, ich möchte Informationen zum Italienischunterricht mit Martin oder Licia.',
    readings: 'Lesetexte',
    grammar: 'Grammatik',
    vocabulary: 'Wortschatz',
    home: 'Startseite',
    footer: 'Online-Unterricht, abgestufte Lesetexte und klare Grammatik.',
  },
  ja: {
    route: 'watashitachi-ni-tsuite',
    flag: '🇯🇵',
    languageName: '日本語',
    about: '私たちについて',
    ctaTitle: '一緒にイタリア語を学ぶ先生を選ぶ',
    ctaIntro: '二人の先生、二つの視点。興味に合った学び方を選べます。',
    martinShort: '科学・テクノロジー・語源',
    liciaShort: '芸術・忍耐・文法',
    martinCta: 'Martinと学ぶ',
    liciaCta: 'Liciaと学ぶ',
    discover: 'MartinとLiciaについて',
    whatsapp: 'WhatsAppで相談',
    title: '私たちについて：オンラインイタリア語講師MartinとLicia',
    eyebrow: '先生の紹介',
    lead: '異なる興味と得意分野を持つ二人のイタリア語ネイティブ講師によるマンツーマンレッスンです。',
    martinTitle: '言語・科学・好奇心',
    martinText:
      'Martinは科学、テクノロジー、語源が好きです。言語を文化、アイデア、現代社会と結び付け、会話を重視して教えます。',
    liciaTitle: '文法・芸術・忍耐',
    liciaText:
      'Liciaは芸術が好きで、文法の説明が特に得意です。一人ひとりのペースを大切にしながら、明確に、落ち着いて、根気よく説明します。',
    price: '1レッスン10ユーロ',
    contactTitle: 'どちらの先生を選ぶか迷っていますか？',
    contactText: 'WhatsAppでご相談ください。レベルや興味に合う学習方法をご案内します。',
    meta: 'オンラインイタリア語講師MartinとLiciaの紹介。1回10ユーロの個人レッスン、Preplyプロフィール、WhatsAppでのお問い合わせ。',
    whatsappMessage: 'MartinまたはLiciaのイタリア語レッスンについて知りたいです。',
    readings: '読解',
    grammar: '文法',
    vocabulary: '語彙',
    home: 'ホーム',
    footer: 'オンラインレッスン、レベル別読解、分かりやすい文法。',
  },
};

const categories = {
  it: { readings: '/letture/', grammar: '/grammatica/', vocabulary: '/vocabolario/' },
  en: { readings: '/en/readings/', grammar: '/en/grammar/', vocabulary: '/en/vocabulary/' },
  es: { readings: '/es/lecturas/', grammar: '/es/gramatica/', vocabulary: '/es/vocabulario/' },
  fr: { readings: '/fr/lectures/', grammar: '/fr/grammaire/', vocabulary: '/fr/vocabulaire/' },
  cs: { readings: '/cs/cteni/', grammar: '/cs/gramatika/', vocabulary: '/cs/slovni-zasoba/' },
  pl: { readings: '/pl/czytanki/', grammar: '/pl/gramatyka/', vocabulary: '/pl/slownictwo/' },
  tr: { readings: '/tr/okumalar/', grammar: '/tr/dilbilgisi/', vocabulary: '/tr/kelime-bilgisi/' },
  de: { readings: '/de/lesetexte/', grammar: '/de/grammatik/', vocabulary: '/de/wortschatz/' },
  ja: { readings: '/ja/dokkai/', grammar: '/ja/bunpo/', vocabulary: '/ja/goi/' },
};

for (const language of Object.keys(copy)) writeAboutPage(language);
for (const file of walk(siteRoot).filter((file) => file.endsWith('.html'))) updatePage(file);
updateSitemap();
console.log('Updated teacher calls to action and generated 9 localized about pages.');

function localizedPath(language) {
  return language === 'it' ? `/chi-siamo/` : `/${language}/${copy[language].route}/`;
}

function whatsappUrl(language) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(copy[language].whatsappMessage)}`;
}

function teacherOptions(language, assetPrefix = '') {
  const t = copy[language];
  return `<div class="teacher-cta-options"><article class="teacher-cta"><img src="${assetPrefix}assets/martin-portrait.webp" alt="Martin" width="800" height="1067" loading="lazy" decoding="async"><div><strong>Martin</strong><span>${escapeHtml(t.martinShort)}</span></div><a class="button light" href="${martinUrl}" target="_blank" rel="noopener">${escapeHtml(t.martinCta)}</a></article><article class="teacher-cta"><img src="${assetPrefix}assets/licia-portrait.webp" alt="Licia" width="800" height="800" loading="lazy" decoding="async"><div><strong>Licia</strong><span>${escapeHtml(t.liciaShort)}</span></div><a class="button light" href="${liciaUrl}" target="_blank" rel="noopener">${escapeHtml(t.liciaCta)}</a></article></div>`;
}

function teacherSection(language, assetPrefix, aboutHref) {
  const t = copy[language];
  return `<section class="conversion-section teacher-cta-section"><div class="container"><div class="teacher-cta-heading"><div><p class="eyebrow">Italiano con Martin</p><h2>${escapeHtml(t.ctaTitle)}</h2></div><p>${escapeHtml(t.ctaIntro)}</p></div>${teacherOptions(language, assetPrefix)}<div class="teacher-cta-links"><a href="${aboutHref}">${escapeHtml(t.discover)}</a><a href="${whatsappUrl(language)}" target="_blank" rel="noopener">${escapeHtml(t.whatsapp)}</a></div></div></section>`;
}

function updatePage(file) {
  const relative = path.relative(siteRoot, file).replaceAll('\\', '/');
  const first = relative.split('/')[0];
  const language = copy[first] ? first : 'it';
  const html = readFileSync(file, 'utf8');
  if (/http-equiv=["']refresh/i.test(html)) return;
  const $ = cheerio.load(html, { decodeEntities: false });
  const aboutHref = localizedPath(language);
  const currentPath = `/${relative.replace(/index\.html$/, '')}`;
  const isAboutPage = currentPath === aboutHref;
  const isHomePage = relative === 'index.html' || /^[a-z]{2}\/index\.html$/.test(relative);
  const depth = relative.split('/').length - 1;
  const assetPrefix = '../'.repeat(depth);

  if (!$('footer').length && $('main').length) {
    $('main').after(
      `<footer><div class="container footer-grid"><div><strong>Italiano con Martin</strong><p>${escapeHtml(copy[language].footer)}</p></div><div><a href="${categories[language].readings}">${escapeHtml(copy[language].readings)}</a><a href="${categories[language].grammar}">${escapeHtml(copy[language].grammar)}</a><a href="${categories[language].vocabulary}">${escapeHtml(copy[language].vocabulary)}</a></div></div></footer>`
    );
  }

  $('.site-header nav .about-link, footer .about-link').remove();
  const nav = $('.site-header nav').first();
  const navCta = nav.find('.nav-cta').first();
  const vocabularyHref = categories[language].vocabulary;
  const equivalentVocabularyLinks = (container) => container.find('a').filter((_, element) => {
    const current = $(element).attr('href') || '';
    return current === vocabularyHref || `/${current.replace(/^(?:\.\.\/)+/, '')}` === vocabularyHref;
  });
  const navVocabularyLinks = equivalentVocabularyLinks(nav);
  navVocabularyLinks.each((index, element) => {
    if (index > 0) $(element).remove();
  });
  if (nav.length && !navVocabularyLinks.length) {
    const vocabularyLink = `<a href="${vocabularyHref}">${escapeHtml(copy[language].vocabulary)}</a>`;
    if (navCta.length) navCta.before(vocabularyLink);
    else nav.append(vocabularyLink);
  }
  const aboutLink = `<a class="about-link" href="${aboutHref}"${isAboutPage ? ' aria-current="page"' : ''}>${escapeHtml(copy[language].about)}</a>`;
  if (navCta.length) navCta.before(aboutLink);
  else nav.append(aboutLink);
  const footerLinks = $('.footer-grid > div:last-child');
  const footerVocabularyLinks = equivalentVocabularyLinks(footerLinks);
  footerVocabularyLinks.each((index, element) => {
    if (index > 0) $(element).remove();
  });
  if (footerLinks.length && !footerVocabularyLinks.length)
    footerLinks.append(`<a href="${vocabularyHref}">${escapeHtml(copy[language].vocabulary)}</a>`);
  footerLinks.append(`<a class="about-link" href="${aboutHref}">${escapeHtml(copy[language].about)}</a>`);

  const conversion = $('.conversion-section').first();
  if (isHomePage && $('.teachers-section').length) {
    $('.teacher-cta-section').remove();
  } else if (conversion.length) {
    conversion.replaceWith(teacherSection(language, assetPrefix, aboutHref));
  } else if (!conversion.length && isResourcePage(relative)) {
    $('main').after(teacherSection(language, assetPrefix, aboutHref));
  }
  applyImagePerformanceHints($);
  writeFileSync(file, serialize($));
}

function writeAboutPage(language) {
  const t = copy[language];
  const route = localizedPath(language);
  const relative = route.replace(/^\//, '') + 'index.html';
  const output = path.join(siteRoot, relative);
  const depth = relative.split('/').length - 1;
  const prefix = '../'.repeat(depth);
  const homeHref = language === 'it' ? '/' : `/${language}/`;
  const canonical = `${siteUrl}${route}`;
  const alternates =
    Object.keys(copy)
      .map((code) => `<link rel="alternate" hreflang="${code}" href="${siteUrl}${localizedPath(code)}">`)
      .join('') + `<link rel="alternate" hreflang="x-default" href="${siteUrl}/chi-siamo/">`;
  const languageOptions = Object.entries(copy)
    .map(
      ([code, item]) =>
        `<a href="${localizedPath(code)}" hreflang="${code}" lang="${code}"${code === language ? ' aria-current="page"' : ''}><span aria-hidden="true">${item.flag}</span><span>${escapeHtml(item.languageName)}</span></a>`
    )
    .join('');
  const schema = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: t.title,
    url: canonical,
    inLanguage: language,
    about: [
      { '@type': 'Person', name: 'Martin Modena', jobTitle: 'Italian teacher', url: martinUrl },
      { '@type': 'Person', name: 'Licia', jobTitle: 'Italian teacher', url: liciaUrl },
    ],
  });
  const html = `<!doctype html>
<html lang="${language}"><head>${alternates}<link rel="canonical" href="${canonical}"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${escapeHtml(t.title)} | Italiano con Martin</title><meta name="description" content="${escapeHtml(t.meta)}"><meta name="robots" content="index,follow,max-image-preview:large"><meta name="author" content="Martin Modena"><meta property="og:type" content="website"><meta property="og:site_name" content="Italiano con Martin"><meta property="og:title" content="${escapeHtml(t.title)} | Italiano con Martin"><meta property="og:description" content="${escapeHtml(t.meta)}"><meta property="og:url" content="${canonical}"><meta property="og:image" content="${siteUrl}/assets/social-card.svg"><meta name="twitter:card" content="summary_large_image"><link rel="stylesheet" href="${prefix}styles.css"><link rel="icon" href="${prefix}favicon.png" type="image/png"><link rel="apple-touch-icon" href="${prefix}apple-touch-icon.png"><script type="application/ld+json">${schema}</script></head><body>
<header class="site-header"><div class="container nav-wrap"><a class="brand" href="${homeHref}"><img class="brand-avatar" src="${prefix}assets/martin-photo.svg" alt="Martin" width="48" height="48"><span>Italiano con Martin</span></a><details class="language-switcher"><summary aria-label="Language"><span class="language-flag" aria-hidden="true">${t.flag}</span><span class="language-current">${escapeHtml(t.languageName)}</span><span class="language-chevron" aria-hidden="true">⌄</span></summary><div class="language-options">${languageOptions}</div></details><nav><a href="${categories[language].readings}">${escapeHtml(t.readings)}</a><a href="${categories[language].grammar}">${escapeHtml(t.grammar)}</a><a href="${categories[language].vocabulary}">${escapeHtml(t.vocabulary)}</a><a class="about-link" href="${route}" aria-current="page">${escapeHtml(t.about)}</a><a class="nav-cta" href="${whatsappUrl(language)}" target="_blank" rel="noopener">${escapeHtml(t.whatsapp)}</a></nav></div></header>
<main><section class="about-hero"><div class="container"><p class="eyebrow">${escapeHtml(t.eyebrow)}</p><h1>${escapeHtml(t.title)}</h1><p class="lead">${escapeHtml(t.lead)}</p><div class="about-portraits"><img src="${prefix}assets/martin-portrait.webp" alt="Martin" width="800" height="1067" loading="eager" decoding="async" fetchpriority="high"><img src="${prefix}assets/licia-portrait.webp" alt="Licia" width="800" height="800" loading="eager" decoding="async" fetchpriority="high"></div></div></section>
<section class="about-teachers"><div class="container"><article class="about-teacher"><img src="${prefix}assets/martin-portrait.webp" alt="Martin" width="800" height="1067" loading="lazy" decoding="async"><div><p class="eyebrow">Martin</p><h2>${escapeHtml(t.martinTitle)}</h2><p>${escapeHtml(t.martinText)}</p><strong class="about-price">${escapeHtml(t.price)}</strong><a class="button primary" href="${martinUrl}" target="_blank" rel="noopener">${escapeHtml(t.martinCta)}</a></div></article><article class="about-teacher"><img src="${prefix}assets/licia-portrait.webp" alt="Licia" width="800" height="800" loading="lazy" decoding="async"><div><p class="eyebrow">Licia</p><h2>${escapeHtml(t.liciaTitle)}</h2><p>${escapeHtml(t.liciaText)}</p><strong class="about-price">${escapeHtml(t.price)}</strong><a class="button primary" href="${liciaUrl}" target="_blank" rel="noopener">${escapeHtml(t.liciaCta)}</a></div></article></div></section>
<section class="about-contact"><div class="container"><div><p class="eyebrow">WhatsApp</p><h2>${escapeHtml(t.contactTitle)}</h2><p>${escapeHtml(t.contactText)}</p></div><a class="button light final-cta" href="${whatsappUrl(language)}" target="_blank" rel="noopener">${escapeHtml(t.whatsapp)}</a></div></section></main>
<footer><div class="container footer-grid"><div><strong>Italiano con Martin</strong><p>${escapeHtml(t.footer)}</p></div><div><a href="${categories[language].readings}">${escapeHtml(t.readings)}</a><a href="${categories[language].grammar}">${escapeHtml(t.grammar)}</a><a href="${categories[language].vocabulary}">${escapeHtml(t.vocabulary)}</a><a class="about-link" href="${route}">${escapeHtml(t.about)}</a></div></div></footer><script src="${prefix}script.js"></script></body></html>`;
  mkdirSync(path.dirname(output), { recursive: true });
  writeFileSync(output, html);
}

function updateSitemap() {
  const file = path.join(siteRoot, 'sitemap.xml');
  if (!existsSync(file)) return;
  const source = readFileSync(file, 'utf8').replace(/<\?xml[^?]*\?>\s*/gi, '');
  const $ = cheerio.load(source, { xmlMode: true });
  const requiredUrls = [
    ...Object.keys(copy).map((language) => `${siteUrl}${localizedPath(language)}`),
    `${siteUrl}/contact/`,
  ];
  for (const loc of requiredUrls) {
    if (!$('loc').filter((_, element) => $(element).text() === loc).length)
      $('urlset').append(`<url><loc>${loc}</loc><changefreq>monthly</changefreq></url>`);
  }
  const xml = $.xml().replace(/<\?xml[^?]*\?>\s*/gi, '');
  writeFileSync(file, `<?xml version="1.0" encoding="UTF-8"?>\n${xml.trimEnd()}\n`);
}

function serialize($) {
  const document = $.html().replace(/^(?:\s*<!doctype html>\s*)+/i, '');
  return `<!doctype html>\n${document}`;
}

function applyImagePerformanceHints($) {
  $('img').each((_, element) => {
    const image = $(element);
    const source = image.attr('src');
    if (source?.endsWith('assets/licia.png')) {
      image.attr({ src: source.replace(/licia\.png$/, 'licia-portrait.webp'), width: '800', height: '800' });
    }
    if (!image.attr('decoding')) image.attr('decoding', 'async');
  });
  $('.brand-avatar').attr({ width: '48', height: '48' });
  $('.teacher-cta img, .about-teacher img').attr('loading', 'lazy');
  $('.about-portraits img, .teacher-photo, .story-figure img').attr({ loading: 'eager', fetchpriority: 'high' });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function isResourcePage(relative) {
  if (relative.endsWith('/index.html')) return false;
  return /(^|\/)(letture|favole|grammatica|vocabolario|readings|stories|grammar|vocabulary|lecturas|cuentos|gramatica|vocabulario|lectures|histoires|grammaire|vocabulaire|cteni|pribehy|gramatika|slovni-zasoba|czytanki|historie|gramatyka|slownictwo|okumalar|hikayeler|dilbilgisi|kelime-bilgisi|lesetexte|geschichten|grammatik|wortschatz|dokkai|monogatari|bunpo|goi)\//.test(
    relative
  );
}

function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) =>
    entry.isDirectory() ? walk(path.join(directory, entry.name)) : [path.join(directory, entry.name)]
  );
}

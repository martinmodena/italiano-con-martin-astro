import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const profiles = {
  en: {
    title: 'Learn Italian with Martin and Licia',
    intro: 'Choose the teacher who best fits your goals.',
    martinTitle: 'Science, technology and etymology',
    liciaTitle: 'Art, patience and grammar',
    martinDescription: 'Martin loves science, technology and etymology. He connects language, culture and the contemporary world.',
    liciaDescription: 'Licia is patient, loves art and is especially good at explaining grammar clearly and calmly.',
    martinAlt: 'Martin, Italian teacher passionate about science, technology and etymology',
    liciaAlt: 'Licia, patient Italian teacher passionate about art and grammar',
    martinCta: "View Martin's profile",
    liciaCta: "View Licia's profile",
    lessonLabel: 'per lesson',
    lessonMeta: 'Private lessons at 10 euros each.',
  },
  es: {
    title: 'Aprende italiano con Martin y Licia',
    intro: 'Elige al profesor que mejor se adapta a tus objetivos.',
    martinTitle: 'Ciencia, tecnología y etimología',
    liciaTitle: 'Arte, paciencia y gramática',
    martinDescription: 'A Martin le apasionan la ciencia, la tecnología y la etimología. Relaciona la lengua, la cultura y el mundo actual.',
    liciaDescription: 'Licia es paciente, ama el arte y explica la gramática con mucha claridad y calma.',
    martinAlt: 'Martin, profesor de italiano apasionado por la ciencia, la tecnología y la etimología',
    liciaAlt: 'Licia, profesora de italiano paciente, apasionada por el arte y la gramática',
    martinCta: 'Ver el perfil de Martin',
    liciaCta: 'Ver el perfil de Licia',
    lessonLabel: 'por clase',
    lessonMeta: 'Clases individuales por 10 euros.',
  },
  fr: {
    title: 'Apprenez l’italien avec Martin et Licia',
    intro: 'Choisissez le professeur qui correspond le mieux à vos objectifs.',
    martinTitle: 'Sciences, technologie et étymologie',
    liciaTitle: 'Art, patience et grammaire',
    martinDescription: 'Martin aime les sciences, la technologie et l’étymologie. Il relie la langue, la culture et le monde contemporain.',
    liciaDescription: 'Licia est patiente, elle aime l’art et explique très bien la grammaire, avec clarté et calme.',
    martinAlt: 'Martin, professeur d’italien passionné par les sciences, la technologie et l’étymologie',
    liciaAlt: 'Licia, professeure d’italien patiente, passionnée par l’art et la grammaire',
    martinCta: 'Voir le profil de Martin',
    liciaCta: 'Voir le profil de Licia',
    lessonLabel: 'par cours',
    lessonMeta: 'Cours individuels à 10 euros.',
  },
  cs: {
    title: 'Učte se italsky s Martinem a Licií',
    intro: 'Vyberte si učitele podle svých cílů.',
    martinTitle: 'Věda, technologie a etymologie',
    liciaTitle: 'Umění, trpělivost a gramatika',
    martinDescription: 'Martin má rád vědu, technologie a etymologii. Propojuje jazyk, kulturu a současný svět.',
    liciaDescription: 'Licia je trpělivá, miluje umění a skvěle vysvětluje gramatiku jasně a klidně.',
    martinAlt: 'Martin, učitel italštiny se zájmem o vědu, technologie a etymologii',
    liciaAlt: 'Licia, trpělivá učitelka italštiny se zájmem o umění a gramatiku',
    martinCta: 'Profil Martina',
    liciaCta: 'Profil Licie',
    lessonLabel: 'za lekci',
    lessonMeta: 'Individuální lekce za 10 eur.',
  },
  pl: {
    title: 'Ucz się włoskiego z Martinem i Licią',
    intro: 'Wybierz nauczyciela, który pasuje do Twoich celów.',
    martinTitle: 'Nauka, technologia i etymologia',
    liciaTitle: 'Sztuka, cierpliwość i gramatyka',
    martinDescription: 'Martin interesuje się nauką, technologią i etymologią. Łączy język, kulturę i współczesny świat.',
    liciaDescription: 'Licia jest cierpliwa, kocha sztukę i bardzo dobrze, spokojnie wyjaśnia gramatykę.',
    martinAlt: 'Martin, nauczyciel włoskiego zainteresowany nauką, technologią i etymologią',
    liciaAlt: 'Licia, cierpliwa nauczycielka włoskiego zainteresowana sztuką i gramatyką',
    martinCta: 'Profil Martina',
    liciaCta: 'Profil Licii',
    lessonLabel: 'za lekcję',
    lessonMeta: 'Indywidualne lekcje za 10 euro.',
  },
  tr: {
    title: 'Martin ve Licia ile İtalyanca öğrenin',
    intro: 'Hedeflerinize en uygun öğretmeni seçin.',
    martinTitle: 'Bilim, teknoloji ve etimoloji',
    liciaTitle: 'Sanat, sabır ve dil bilgisi',
    martinDescription: 'Martin bilimi, teknolojiyi ve etimolojiyi sever. Dili, kültürü ve günümüz dünyasını birbirine bağlar.',
    liciaDescription: 'Licia sabırlıdır, sanatı sever ve dil bilgisini açık ve sakin bir şekilde çok iyi açıklar.',
    martinAlt: 'Bilim, teknoloji ve etimolojiye ilgi duyan İtalyanca öğretmeni Martin',
    liciaAlt: 'Sanat ve dil bilgisine ilgi duyan sabırlı İtalyanca öğretmeni Licia',
    martinCta: 'Martin profilini gör',
    liciaCta: 'Licia profilini gör',
    lessonLabel: 'ders başına',
    lessonMeta: 'Bireysel dersler 10 euro.',
  },
  de: {
    title: 'Italienisch lernen mit Martin und Licia',
    intro: 'Wählen Sie die Lehrkraft, die zu Ihren Zielen passt.',
    martinTitle: 'Wissenschaft, Technologie und Etymologie',
    liciaTitle: 'Kunst, Geduld und Grammatik',
    martinDescription: 'Martin liebt Wissenschaft, Technologie und Etymologie. Er verbindet Sprache, Kultur und die moderne Welt.',
    liciaDescription: 'Licia ist geduldig, liebt Kunst und erklärt Grammatik besonders klar und ruhig.',
    martinAlt: 'Martin, Italienischlehrer mit Begeisterung für Wissenschaft, Technologie und Etymologie',
    liciaAlt: 'Licia, geduldige Italienischlehrerin mit Begeisterung für Kunst und Grammatik',
    martinCta: 'Martins Profil ansehen',
    liciaCta: 'Licias Profil ansehen',
    lessonLabel: 'pro Stunde',
    lessonMeta: 'Einzelunterricht für 10 Euro pro Stunde.',
  },
  ja: {
    title: 'MartinとLiciaと学ぶイタリア語',
    intro: '目標に合う先生を選べます。',
    martinTitle: '科学・テクノロジー・語源',
    liciaTitle: '芸術・忍耐力・文法',
    martinDescription: 'Martinは科学、テクノロジー、語源が好きです。言葉と文化、現代の世界をつなげて説明します。',
    liciaDescription: 'Liciaは忍耐強く、芸術を愛し、文法をわかりやすく丁寧に説明するのが得意です。',
    martinAlt: '科学、テクノロジー、語源に情熱を持つイタリア語講師Martin',
    liciaAlt: '芸術と文法に情熱を持つ忍耐強いイタリア語講師Licia',
    martinCta: 'Martinのプロフィール',
    liciaCta: 'Liciaのプロフィール',
    lessonLabel: '1レッスン',
    lessonMeta: '1レッスン10ユーロの個人レッスンです。',
  },
};

for (const [language, copy] of Object.entries(profiles)) {
  const file = path.join(root, 'legacy-html', language, 'index.html');
  let html = readFileSync(file, 'utf8');
  const section = `<section class="teachers-section section" aria-labelledby="teachers-title"><div class="container"><div class="section-heading"><div><p class="eyebrow">${copy.title}</p><h2 id="teachers-title">${copy.title}</h2></div><p>${copy.intro}</p></div><div class="teachers-grid"><article class="teacher-card"><img src="../assets/martin-portrait.webp" alt="${copy.martinAlt}" width="800" height="1067" loading="lazy" decoding="async"><div><p class="eyebrow">Martin</p><h3>${copy.martinTitle}</h3><p>${copy.martinDescription}</p><p class="teacher-price"><strong>10&euro;</strong> ${copy.lessonLabel}</p><a class="button primary" href="https://preply.com/it/tutor/5086125" target="_blank" rel="noopener">${copy.martinCta}</a></div></article><article class="teacher-card"><img src="../assets/licia-portrait.webp" alt="${copy.liciaAlt}" width="800" height="800" loading="lazy" decoding="async"><div><p class="eyebrow">Licia</p><h3>${copy.liciaTitle}</h3><p>${copy.liciaDescription}</p><p class="teacher-price"><strong>10&euro;</strong> ${copy.lessonLabel}</p><a class="button secondary" href="https://preply.in/LICIA6IT2176799611?ts=17865248" target="_blank" rel="noopener">${copy.liciaCta}</a></div></article></div></div></section>`;
  if (html.includes('class="teachers-section')) {
    html = html.replace(/<section class="teachers-section[^>]*>[\s\S]*?(?=<section class="conversion-section")/, section);
  } else {
    html = html.replace('<section class="conversion-section">', `${section}<section class="conversion-section">`);
  }
  html = html.replace(/<title>[^<]+<\/title>/, `<title>${copy.title} | Italiano con Martin</title>`);
  const description = `${copy.title}: ${copy.martinDescription} ${copy.liciaDescription} ${copy.lessonMeta}`;
  html = html.replace(/<meta name="description" content="[^"]+">/, `<meta name="description" content="${description}">`);
  html = html.replace(/<meta property="og:title" content="[^"]+">/, `<meta property="og:title" content="${copy.title} | Italiano con Martin">`);
  html = html.replace(/<meta property="og:description" content="[^"]+">/, `<meta property="og:description" content="${description}">`);
  writeFileSync(file, html);
}

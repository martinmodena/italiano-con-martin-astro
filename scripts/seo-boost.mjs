// Titoli e descrizioni pensati per la ricerca (2026-09-28).
//
// Riscrive `title`, `description` e i loro doppioni Open Graph/Twitter nelle
// pagine `src/pages/**.astro` delle 9 lingue:
// - lezioni di vocabolario: «Gli animali in italiano: 100 parole con immagini…»;
// - letture e favole: argomento + «lettura in italiano A1–C1 con PDF»;
// - lezioni di grammatica: «… | grammatica italiana A1 con esercizi»
//   (l'inizio del titolo resta quello di grammar-seo-titles.mjs, che l'audit controlla);
// - indici di categoria e home;
// - otto descrizioni di grammatica e tre sottotitoli (`p.lead`) tradotti male in
//   automatico, dove le forme italiane erano diventate «a, an, an» o «between and between».
//
// È idempotente: il titolo si ricostruisce da dati fissi, dall'h1 o da
// grammar-seo-titles.mjs, mai dal titolo già scritto. `--dry-run` stampa soltanto.
import fs from 'node:fs';
import path from 'node:path';
import { grammarSeoTitles } from './grammar-seo-titles.mjs';

const root = process.cwd();
const dryRun = process.argv.includes('--dry-run');
const LANGS = ['it', 'en', 'es', 'fr', 'cs', 'pl', 'tr', 'de', 'ja'];

// ---------------------------------------------------------------- vocabolario
// Argomento come lo cerca chi studia, nelle 9 lingue.
const VOCAB = {
  abbigliamento: [
    "Vocabolario dell'abbigliamento in italiano",
    'Clothes in Italian',
    'La ropa en italiano',
    'Les vêtements en italien',
    'Oblečení italsky',
    'Ubrania po włosku',
    'İtalyanca kıyafetler',
    'Kleidung auf Italienisch',
    'イタリア語の服・衣類',
  ],
  animali: [
    'Gli animali in italiano',
    'Animals in Italian',
    'Los animales en italiano',
    'Les animaux en italien',
    'Zvířata italsky',
    'Zwierzęta po włosku',
    'İtalyanca hayvan isimleri',
    'Tiere auf Italienisch',
    'イタリア語の動物の名前',
  ],
  'caratteristiche-fisiche-animali': [
    "Aggettivi per descrivere l'aspetto in italiano",
    'Italian adjectives to describe appearance',
    'Adjetivos en italiano para describir el aspecto',
    "Adjectifs italiens pour décrire l'apparence",
    'Italská přídavná jména pro popis vzhledu',
    'Włoskie przymiotniki opisujące wygląd',
    'Görünüşü anlatan İtalyanca sıfatlar',
    'Italienische Adjektive für das Aussehen',
    '外見を表すイタリア語の形容詞',
  ],
  'personalita-animali': [
    'Aggettivi di carattere e personalità in italiano',
    'Italian personality adjectives',
    'Adjetivos de personalidad en italiano',
    'Adjectifs de caractère en italien',
    'Povahové vlastnosti italsky',
    'Cechy charakteru po włosku',
    'İtalyanca kişilik sıfatları',
    'Charaktereigenschaften auf Italienisch',
    '性格を表すイタリア語の形容詞',
  ],
  'verbi-animali': [
    'Verbi italiani di tutti i giorni con gli animali',
    'Everyday Italian verbs with animals',
    'Verbos italianos cotidianos con animales',
    'Verbes italiens du quotidien avec les animaux',
    'Běžná italská slovesa se zvířaty',
    'Codzienne włoskie czasowniki ze zwierzętami',
    'Hayvanlarla günlük İtalyanca fiiller',
    'Italienische Alltagsverben mit Tieren',
    '動物で覚える日常のイタリア語動詞',
  ],
  casa: [
    'La casa e le stanze in italiano',
    'House and rooms in Italian',
    'La casa y las habitaciones en italiano',
    'La maison et les pièces en italien',
    'Dům a místnosti italsky',
    'Dom i pokoje po włosku',
    'İtalyanca ev ve odalar',
    'Haus und Zimmer auf Italienisch',
    'イタリア語の家と部屋',
  ],
  cibo: [
    'Il cibo in italiano',
    'Food in Italian',
    'La comida en italiano',
    'La nourriture en italien',
    'Jídlo italsky',
    'Jedzenie po włosku',
    'İtalyanca yiyecekler',
    'Essen und Lebensmittel auf Italienisch',
    'イタリア語の食べ物',
  ],
  citta: [
    'La città in italiano',
    'The city in Italian: places in town',
    'La ciudad en italiano',
    'La ville en italien',
    'Město italsky',
    'Miasto po włosku',
    'İtalyanca şehir kelimeleri',
    'Die Stadt auf Italienisch',
    'イタリア語の街の単語',
  ],
  'colori-forme': [
    'I colori e le forme in italiano',
    'Colors and shapes in Italian',
    'Colores y formas en italiano',
    'Les couleurs et les formes en italien',
    'Barvy a tvary italsky',
    'Kolory i kształty po włosku',
    'İtalyanca renkler ve şekiller',
    'Farben und Formen auf Italienisch',
    'イタリア語の色と形',
  ],
  'corpo-umano': [
    'Le parti del corpo in italiano',
    'Parts of the body in Italian',
    'Las partes del cuerpo en italiano',
    'Les parties du corps en italien',
    'Části těla italsky',
    'Części ciała po włosku',
    'İtalyanca vücudun bölümleri',
    'Körperteile auf Italienisch',
    'イタリア語の体の部位',
  ],
  cucina: [
    'Gli oggetti della cucina in italiano',
    'Kitchen items in Italian',
    'Utensilios de cocina en italiano',
    'Les ustensiles de cuisine en italien',
    'Kuchyňské potřeby italsky',
    'Kuchnia po włosku',
    'İtalyanca mutfak eşyaları',
    'Küchenutensilien auf Italienisch',
    'イタリア語のキッチン用品',
  ],
  emozioni: [
    'Le emozioni in italiano',
    'Feelings and emotions in Italian',
    'Las emociones en italiano',
    'Les émotions en italien',
    'Emoce italsky',
    'Emocje po włosku',
    'İtalyanca duygular',
    'Gefühle auf Italienisch',
    'イタリア語の感情表現',
  ],
  famiglia: [
    'La famiglia in italiano',
    'Family members in Italian',
    'La familia en italiano',
    'La famille en italien',
    'Rodina italsky',
    'Rodzina po włosku',
    'İtalyanca aile üyeleri',
    'Familie auf Italienisch',
    'イタリア語の家族の呼び方',
  ],
  mare: [
    'Il mare e la spiaggia in italiano',
    'Sea and beach in Italian',
    'El mar y la playa en italiano',
    'La mer et la plage en italien',
    'Moře a pláž italsky',
    'Morze i plaża po włosku',
    'İtalyanca deniz ve plaj',
    'Meer und Strand auf Italienisch',
    'イタリア語の海とビーチ',
  ],
  mestieri: [
    'I mestieri e le professioni in italiano',
    'Jobs and professions in Italian',
    'Profesiones y oficios en italiano',
    'Les métiers en italien',
    'Povolání italsky',
    'Zawody po włosku',
    'İtalyanca meslekler',
    'Berufe auf Italienisch',
    'イタリア語の職業',
  ],
  montagna: [
    'La montagna in italiano',
    'Mountains and hiking in Italian',
    'La montaña en italiano',
    'La montagne en italien',
    'Hory italsky',
    'Góry po włosku',
    'İtalyanca dağ kelimeleri',
    'Berge und Wandern auf Italienisch',
    'イタリア語の山・登山',
  ],
  persone: [
    'Le persone intorno a noi in italiano',
    'People around us in Italian',
    'Las personas de tu entorno en italiano',
    'Les personnes autour de nous en italien',
    'Lidé kolem nás italsky',
    'Ludzie wokół nas po włosku',
    'İtalyanca çevremizdeki insanlar',
    'Menschen im Alltag auf Italienisch',
    'イタリア語で身の回りの人々',
  ],
  salotto: [
    'Il salotto in italiano',
    'The living room in Italian',
    'El salón en italiano',
    'Le salon en italien',
    'Obývací pokoj italsky',
    'Salon po włosku',
    'İtalyanca oturma odası',
    'Wohnzimmer auf Italienisch',
    'イタリア語のリビングルーム',
  ],
  scuola: [
    'La scuola in italiano',
    'School and classroom in Italian',
    'La escuela en italiano',
    "L'école en italien",
    'Škola italsky',
    'Szkoła po włosku',
    'İtalyanca okul kelimeleri',
    'Schule auf Italienisch',
    'イタリア語の学校・教室',
  ],
  sport: [
    'Lo sport in italiano',
    'Sports in Italian',
    'Los deportes en italiano',
    'Les sports en italien',
    'Sport italsky',
    'Sport po włosku',
    'İtalyanca sporlar',
    'Sport auf Italienisch',
    'イタリア語のスポーツ',
  ],
  'tempo-stagioni': [
    'Il tempo e le stagioni in italiano',
    'Weather and seasons in Italian',
    'El tiempo y las estaciones en italiano',
    'La météo et les saisons en italien',
    'Počasí a roční období italsky',
    'Pogoda i pory roku po włosku',
    'İtalyanca hava durumu ve mevsimler',
    'Wetter und Jahreszeiten auf Italienisch',
    'イタリア語の天気と季節',
  ],
  ufficio: [
    "L'ufficio in italiano",
    'Office and work in Italian',
    'La oficina en italiano',
    'Le bureau en italien',
    'Kancelář italsky',
    'Biuro po włosku',
    'İtalyanca ofis kelimeleri',
    'Büro auf Italienisch',
    'イタリア語のオフィス用語',
  ],
  'verbi-casa': [
    'I verbi della casa in italiano',
    'Household verbs in Italian',
    'Verbos de la casa en italiano',
    'Les verbes de la maison en italien',
    'Slovesa pro domácnost italsky',
    'Czasowniki domowe po włosku',
    'İtalyanca ev fiilleri',
    'Verben für den Haushalt auf Italienisch',
    '家で使うイタリア語の動詞',
  ],
  'verbi-citta': [
    'I verbi della città in italiano',
    'City verbs in Italian',
    'Verbos de la ciudad en italiano',
    'Les verbes de la ville en italien',
    'Slovesa ve městě italsky',
    'Czasowniki w mieście po włosku',
    'İtalyanca şehir fiilleri',
    'Verben für die Stadt auf Italienisch',
    '街で使うイタリア語の動詞',
  ],
  'verbi-corpo': [
    'I verbi del corpo in italiano',
    'Body verbs in Italian',
    'Verbos del cuerpo en italiano',
    'Les verbes du corps en italien',
    'Slovesa těla italsky',
    'Czasowniki związane z ciałem po włosku',
    'İtalyanca vücut fiilleri',
    'Verben rund um den Körper auf Italienisch',
    '体を使うイタリア語の動詞',
  ],
  'verbi-mare': [
    'I verbi del mare in italiano',
    'Beach and sea verbs in Italian',
    'Verbos del mar en italiano',
    'Les verbes de la mer en italien',
    'Slovesa u moře italsky',
    'Czasowniki nad morzem po włosku',
    'İtalyanca deniz fiilleri',
    'Verben für Meer und Strand auf Italienisch',
    '海で使うイタリア語の動詞',
  ],
  'verbi-montagna': [
    'I verbi della montagna in italiano',
    'Mountain and hiking verbs in Italian',
    'Verbos de la montaña en italiano',
    'Les verbes de la montagne en italien',
    'Slovesa na horách italsky',
    'Czasowniki w górach po włosku',
    'İtalyanca dağ fiilleri',
    'Verben für Berge und Wandern auf Italienisch',
    '山で使うイタリア語の動詞',
  ],
  'verbi-relazioni': [
    'I verbi delle relazioni in italiano',
    'Relationship verbs in Italian',
    'Verbos de las relaciones en italiano',
    'Les verbes des relations en italien',
    'Slovesa o vztazích italsky',
    'Czasowniki o relacjach po włosku',
    'İtalyanca ilişki fiilleri',
    'Verben für Beziehungen auf Italienisch',
    '人間関係のイタリア語の動詞',
  ],
  'verbi-scuola': [
    'I verbi della scuola in italiano',
    'School verbs in Italian',
    'Verbos de la escuela en italiano',
    "Les verbes de l'école en italien",
    'Školní slovesa italsky',
    'Czasowniki szkolne po włosku',
    'İtalyanca okul fiilleri',
    'Verben für die Schule auf Italienisch',
    '学校で使うイタリア語の動詞',
  ],
  'verbi-sport': [
    'I verbi dello sport in italiano',
    'Sports verbs in Italian',
    'Verbos del deporte en italiano',
    'Les verbes du sport en italien',
    'Sportovní slovesa italsky',
    'Czasowniki sportowe po włosku',
    'İtalyanca spor fiilleri',
    'Sportverben auf Italienisch',
    'スポーツのイタリア語の動詞',
  ],
  'verbi-ufficio': [
    "I verbi dell'ufficio in italiano",
    'Office and work verbs in Italian',
    'Verbos de la oficina en italiano',
    'Les verbes du bureau en italien',
    'Kancelářská slovesa italsky',
    'Czasowniki biurowe po włosku',
    'İtalyanca ofis fiilleri',
    'Verben für Büro und Arbeit auf Italienisch',
    'オフィスで使うイタリア語の動詞',
  ],
};
const ADJECTIVE_LESSONS = new Set(['caratteristiche-fisiche-animali', 'personalita-animali']);

// Plurali dopo un numero: polacco e ceco usano il nominativo con 2–4 (22–24…).
const slavic = (n, few, many) => (n % 10 >= 2 && n % 10 <= 4 && !(n % 100 >= 12 && n % 100 <= 14) ? few : many);
const UNITS = {
  it: { words: () => 'parole', verbs: () => 'verbi', adjectives: () => 'aggettivi' },
  en: { words: () => 'words', verbs: () => 'verbs', adjectives: () => 'adjectives' },
  es: { words: () => 'palabras', verbs: () => 'verbos', adjectives: () => 'adjetivos' },
  fr: { words: () => 'mots', verbs: () => 'verbes', adjectives: () => 'adjectifs' },
  cs: {
    words: (n) => (n >= 2 && n <= 4 ? 'slova' : 'slov'),
    verbs: (n) => (n >= 2 && n <= 4 ? 'slovesa' : 'sloves'),
    adjectives: (n) => (n >= 2 && n <= 4 ? 'přídavná jména' : 'přídavných jmen'),
  },
  pl: {
    words: (n) => slavic(n, 'słówka', 'słówek'),
    verbs: (n) => slavic(n, 'czasowniki', 'czasowników'),
    adjectives: (n) => slavic(n, 'przymiotniki', 'przymiotników'),
  },
  tr: { words: () => 'kelime', verbs: () => 'fiil', adjectives: () => 'sıfat' },
  de: { words: () => 'Wörter', verbs: () => 'Verben', adjectives: () => 'Adjektive' },
  ja: { words: () => '語', verbs: () => '動詞', adjectives: () => '形容詞' },
};
function vocabTitle(lang, topic, n, kind) {
  const unit = UNITS[lang][kind](n);
  switch (lang) {
    case 'it':
      return `${topic}: ${n} ${unit} con immagini e pronuncia`;
    case 'en':
      return `${topic}: ${n} ${unit} with pictures and pronunciation`;
    case 'es':
      return `${topic}: ${n} ${unit} con imágenes y pronunciación`;
    case 'fr':
      return `${topic} : ${n} ${unit} avec images et prononciation`;
    case 'cs':
      return `${topic}: ${n} ${unit} s obrázky a výslovností`;
    case 'pl':
      return `${topic}: ${n} ${unit} ze zdjęciami i wymową`;
    case 'tr':
      return `${topic}: resimli ve telaffuzlu ${n} ${unit}`;
    case 'de':
      return `${topic}: ${n} ${unit} mit Bildern und Aussprache`;
    case 'ja':
      return kind === 'words' ? `${topic}：写真・発音つき${n}語` : `${topic}：写真・発音つき${unit}${n}語`;
  }
}

// ------------------------------------------------------------ letture e favole
const READING_SUFFIX = {
  it: (t, r) => `${t}: lettura in italiano per stranieri ${r} con PDF`,
  en: (t, r) => `${t}: Italian reading practice ${r} with PDF`,
  es: (t, r) => `${t}: lectura en italiano ${r} con PDF`,
  fr: (t, r) => `${t} : lecture en italien ${r} avec PDF`,
  cs: (t, r) => `${t}: italský text ke čtení ${r} s PDF`,
  pl: (t, r) => `${t}: czytanka po włosku ${r} z PDF`,
  tr: (t, r) => `${t}: İtalyanca okuma metni ${r} (PDF)`,
  de: (t, r) => `${t}: italienischer Lesetext ${r} mit PDF`,
  ja: (t, r) => `${t}：イタリア語読解 ${r}（PDF付き）`,
};
const STORY_SUFFIX = {
  it: (t, r) => `${t}: favola in italiano per stranieri ${r} (PDF)`,
  en: (t, r) => `${t}: Italian short story for learners ${r} (PDF)`,
  es: (t, r) => `${t}: cuento en italiano para estudiantes ${r} (PDF)`,
  fr: (t, r) => `${t} : conte en italien pour apprenants ${r} (PDF)`,
  cs: (t, r) => `${t}: italská pohádka pro studenty ${r} (PDF)`,
  pl: (t, r) => `${t}: włoska bajka dla uczących się ${r} (PDF)`,
  tr: (t, r) => `${t}: öğrenciler için İtalyanca masal ${r} (PDF)`,
  de: (t, r) => `${t}: italienisches Märchen für Lernende ${r} (PDF)`,
  ja: (t, r) => `${t}：学習者向けイタリア語の童話 ${r}（PDF付き）`,
};
// «La formichina Wow» ha un solo livello e niente PDF.
const STORY_A1_SUFFIX = {
  it: (t) => `${t}: favola in italiano per principianti (A1)`,
  en: (t) => `${t}: Italian short story for beginners (A1)`,
  es: (t) => `${t}: cuento en italiano para principiantes (A1)`,
  fr: (t) => `${t} : conte en italien pour débutants (A1)`,
  cs: (t) => `${t}: italská pohádka pro začátečníky (A1)`,
  pl: (t) => `${t}: włoska bajka dla początkujących (A1)`,
  tr: (t) => `${t}: yeni başlayanlar için İtalyanca masal (A1)`,
  de: (t) => `${t}: italienisches Märchen für Anfänger (A1)`,
  ja: (t) => `${t}：初心者向けイタリア語の童話（A1）`,
};
// ------------------------------------------------------------------ grammatica
const GRAMMAR_MID = {
  en: (l) => `Italian grammar ${l} with exercises`,
  es: (l) => `gramática italiana ${l} con ejercicios`,
  fr: (l) => `grammaire italienne ${l} avec exercices`,
  cs: (l) => `italská gramatika ${l} s cvičeními`,
  pl: (l) => `gramatyka włoska ${l} z ćwiczeniami`,
  tr: (l) => `İtalyanca dil bilgisi ${l}, alıştırmalı`,
  de: (l) => `italienische Grammatik ${l} mit Übungen`,
  ja: (l) => `イタリア語文法 ${l}・練習問題つき`,
};
// Descrizioni rifatte: la traduzione automatica aveva tradotto le forme italiane.
const GRAMMAR_DESCRIPTIONS = {
  'articoli-indeterminativi': {
    en: "Learn when to use un, uno, una and un' in Italian, with simple explanations, a complete table and interactive exercises with instant feedback.",
    es: "Aprende cuándo usar un, uno, una y un' en italiano, con explicaciones sencillas, una tabla completa y ejercicios interactivos con corrección inmediata.",
    fr: "Apprenez quand utiliser un, uno, una et un' en italien, avec des explications simples, un tableau complet et des exercices interactifs corrigés immédiatement.",
    cs: "Naučte se, kdy v italštině použít un, uno, una a un', s jednoduchým vysvětlením, úplnou tabulkou a interaktivními cvičeními s okamžitou opravou.",
    pl: "Dowiedz się, kiedy używać un, uno, una i un' po włosku: proste wyjaśnienia, pełna tabela i interaktywne ćwiczenia z natychmiastową korektą.",
    tr: "İtalyancada un, uno, una ve un' ne zaman kullanılır? Basit açıklamalar, eksiksiz tablo ve anında düzeltilen etkileşimli alıştırmalar.",
    de: "Lernen Sie, wann man im Italienischen un, uno, una und un' verwendet – mit einfachen Erklärungen, vollständiger Tabelle und interaktiven Übungen mit sofortiger Korrektur.",
    ja: "イタリア語の不定冠詞 un、uno、una、un' の使い分けを、やさしい説明、一覧表、すぐに答え合わせできる練習問題で学びます。",
  },
  'preposizioni-semplici': {
    en: 'Learn the Italian simple prepositions di, a, da, in, con, su, per, tra and fra with clear examples and interactive exercises.',
    es: 'Aprende las preposiciones simples italianas di, a, da, in, con, su, per, tra y fra con ejemplos claros y ejercicios interactivos.',
    fr: 'Apprenez les prépositions simples italiennes di, a, da, in, con, su, per, tra et fra avec des exemples clairs et des exercices interactifs.',
    cs: 'Naučte se italské jednoduché předložky di, a, da, in, con, su, per, tra a fra s jasnými příklady a interaktivními cvičeními.',
    pl: 'Poznaj włoskie przyimki proste di, a, da, in, con, su, per, tra i fra dzięki jasnym przykładom i interaktywnym ćwiczeniom.',
    tr: 'İtalyanca basit edatlar di, a, da, in, con, su, per, tra ve fra: açık örnekler ve etkileşimli alıştırmalarla öğrenin.',
    de: 'Lernen Sie die einfachen italienischen Präpositionen di, a, da, in, con, su, per, tra und fra mit klaren Beispielen und interaktiven Übungen.',
    ja: 'イタリア語の単純前置詞 di、a、da、in、con、su、per、tra、fra を、わかりやすい例と練習問題で学びます。',
  },
  'presente-verbi-irregolari': {
    en: 'Learn the Italian irregular verbs in the present tense – andare, fare, stare, dare, venire, uscire and sapere – with tables and exercises.',
    es: 'Aprende los verbos irregulares italianos en presente: andare, fare, stare, dare, venire, uscire y sapere, con tablas y ejercicios.',
    fr: 'Apprenez les verbes irréguliers italiens au présent : andare, fare, stare, dare, venire, uscire et sapere, avec des tableaux et des exercices.',
    cs: 'Naučte se italská nepravidelná slovesa v přítomném čase: andare, fare, stare, dare, venire, uscire a sapere, s tabulkami a cvičeními.',
    pl: 'Naucz się włoskich czasowników nieregularnych w czasie teraźniejszym: andare, fare, stare, dare, venire, uscire i sapere, z tabelami i ćwiczeniami.',
    tr: 'İtalyanca düzensiz fiillerin şimdiki zamanı: andare, fare, stare, dare, venire, uscire ve sapere, tablolar ve alıştırmalarla.',
    de: 'Lernen Sie die unregelmäßigen italienischen Verben im Präsens: andare, fare, stare, dare, venire, uscire und sapere, mit Tabellen und Übungen.',
    ja: 'イタリア語の不規則動詞の現在形（andare、fare、stare、dare、venire、uscire、sapere）を表と練習問題で学びます。',
  },
  'aggettivi-e-pronomi-possessivi': {
    en: 'Learn the Italian possessives mio, tuo, suo, nostro, vostro and loro with tables, examples, common mistakes and interactive exercises.',
    es: 'Aprende los posesivos italianos mio, tuo, suo, nostro, vostro y loro con tablas, ejemplos, errores comunes y ejercicios interactivos.',
    fr: 'Apprenez les possessifs italiens mio, tuo, suo, nostro, vostro et loro avec des tableaux, des exemples, les erreurs courantes et des exercices interactifs.',
    cs: 'Naučte se italská přivlastňovací zájmena mio, tuo, suo, nostro, vostro a loro s tabulkami, příklady, častými chybami a interaktivními cvičeními.',
    pl: 'Poznaj włoskie zaimki dzierżawcze mio, tuo, suo, nostro, vostro i loro: tabele, przykłady, typowe błędy i interaktywne ćwiczenia.',
    tr: 'İtalyanca iyelik sözcükleri mio, tuo, suo, nostro, vostro ve loro: tablolar, örnekler, sık yapılan hatalar ve etkileşimli alıştırmalar.',
    de: 'Lernen Sie die italienischen Possessivbegleiter mio, tuo, suo, nostro, vostro und loro mit Tabellen, Beispielen, typischen Fehlern und interaktiven Übungen.',
    ja: 'イタリア語の所有形容詞・所有代名詞（mio、tuo、suo、nostro、vostro、loro）を、表、例文、よくある間違い、練習問題で学びます。',
  },
  'ce-ci-sono': {
    en: "Learn how to use c'è and ci sono in Italian (there is, there are) with simple explanations, real examples and interactive exercises.",
    es: "Aprende a usar c'è y ci sono en italiano (hay) con explicaciones sencillas, ejemplos reales y ejercicios interactivos.",
    fr: "Apprenez à utiliser c'è et ci sono en italien (il y a) avec des explications simples, des exemples réels et des exercices interactifs.",
    cs: "Naučte se používat c'è a ci sono v italštině (je, jsou) s jednoduchým vysvětlením, skutečnými příklady a interaktivními cvičeními.",
    pl: "Naucz się używać c'è i ci sono po włosku (jest, są) dzięki prostym wyjaśnieniom, prawdziwym przykładom i interaktywnym ćwiczeniom.",
    tr: "İtalyancada c'è ve ci sono (var) kullanımını basit açıklamalar, gerçek örnekler ve etkileşimli alıştırmalarla öğrenin.",
    de: "Lernen Sie, c'è und ci sono im Italienischen zu verwenden (es gibt), mit einfachen Erklärungen, echten Beispielen und interaktiven Übungen.",
    ja: "イタリア語の c'è と ci sono（〜がある・いる）の使い方を、やさしい説明、実例、練習問題で学びます。",
  },
  'verbi-modali': {
    en: 'Learn the Italian modal verbs potere, volere and dovere with tables, practical examples, use with the infinitive and interactive exercises.',
    es: 'Aprende los verbos modales italianos potere, volere y dovere con tablas, ejemplos prácticos, el uso con el infinitivo y ejercicios interactivos.',
    fr: "Apprenez les verbes modaux italiens potere, volere et dovere avec des tableaux, des exemples pratiques, l'emploi avec l'infinitif et des exercices interactifs.",
    cs: 'Naučte se italská způsobová slovesa potere, volere a dovere s tabulkami, praktickými příklady, použitím s infinitivem a interaktivními cvičeními.',
    pl: 'Poznaj włoskie czasowniki modalne potere, volere i dovere: tabele, praktyczne przykłady, użycie z bezokolicznikiem i interaktywne ćwiczenia.',
    tr: 'İtalyanca kiplik fiilleri potere, volere ve dovere: tablolar, pratik örnekler, mastarla kullanım ve etkileşimli alıştırmalar.',
    de: 'Lernen Sie die italienischen Modalverben potere, volere und dovere mit Tabellen, praktischen Beispielen, dem Gebrauch mit dem Infinitiv und interaktiven Übungen.',
    ja: 'イタリア語の助動詞 potere、volere、dovere を、表、実用的な例文、不定詞との使い方、練習問題で学びます。',
  },
  'comparativo-e-superlativo': {
    en: 'Learn when to use di and che, the difference between meglio and migliore, and practise with 30 interactive exercises.',
    es: 'Aprende cuándo usar di y che, la diferencia entre meglio y migliore, y practica con 30 ejercicios interactivos.',
    fr: 'Apprenez quand utiliser di et che, la différence entre meglio et migliore, et entraînez-vous avec 30 exercices interactifs.',
    cs: 'Naučte se, kdy použít di a che, jaký je rozdíl mezi meglio a migliore, a procvičte si to ve 30 interaktivních cvičeních.',
    pl: 'Dowiedz się, kiedy używać di, a kiedy che, czym różni się meglio od migliore, i ćwicz z 30 interaktywnymi zadaniami.',
    tr: "di ile che'nin ne zaman kullanıldığını, meglio ile migliore arasındaki farkı öğrenin ve 30 etkileşimli alıştırmayla pratik yapın.",
    de: 'Lernen Sie, wann man di und wann che verwendet, den Unterschied zwischen meglio und migliore, und üben Sie mit 30 interaktiven Aufgaben.',
    ja: 'di と che の使い分け、meglio と migliore の違いを学び、30問の練習問題で身につけましょう。',
  },
  'forma-passiva': {
    en: 'Learn the Italian passive voice with essere, venire and andare, formal examples and interactive exercises.',
    es: 'Aprende la voz pasiva italiana con essere, venire y andare, ejemplos formales y ejercicios interactivos.',
    fr: 'Apprenez la voix passive italienne avec essere, venire et andare, des exemples formels et des exercices interactifs.',
    cs: 'Naučte se italský trpný rod se slovesy essere, venire a andare, s formálními příklady a interaktivními cvičeními.',
    pl: 'Naucz się włoskiej strony biernej z essere, venire i andare, na formalnych przykładach i w interaktywnych ćwiczeniach.',
    tr: 'İtalyancada essere, venire ve andare ile edilgen çatıyı resmî örnekler ve etkileşimli alıştırmalarla öğrenin.',
    de: 'Lernen Sie das italienische Passiv mit essere, venire und andare, mit formellen Beispielen und interaktiven Übungen.',
    ja: 'essere、venire、andare を使うイタリア語の受動態を、フォーマルな例文と練習問題で学びます。',
  },
};
// Sottotitoli rifatti: le forme italiane restano italiane e marcate lang="it".
const it = (s) => `<span lang="it">${s}</span>`;
const CHOOSE = {
  en: (a, b) => `Learn to choose between ${a} and ${b}.`,
  es: (a, b) => `Aprende a elegir entre ${a} y ${b}.`,
  fr: (a, b) => `Apprenez à choisir entre ${a} et ${b}.`,
  cs: (a, b) => `Naučte se vybírat mezi ${a} a ${b}.`,
  pl: (a, b) => `Naucz się wybierać między ${a} i ${b}.`,
  tr: (a, b) => `${a} ve ${b} arasında seçim yapmayı öğrenin.`,
  de: (a, b) => `Lernen Sie, zwischen ${a} und ${b} zu wählen.`,
  ja: (a, b) => `${a} と ${b} の使い分けを学びましょう。`,
};
const IRREGULAR = {
  en: (a, b) => `Some very common verbs do not fully follow the rule. Learn them in small groups: ${a} and ${b}.`,
  es: (a, b) => `Algunos verbos muy comunes no siguen del todo la regla. Apréndelos en pequeños grupos: ${a} y ${b}.`,
  fr: (a, b) =>
    `Certains verbes très courants ne suivent pas complètement la règle. Apprenez-les par petits groupes : ${a} et ${b}.`,
  cs: (a, b) => `Některá velmi běžná slovesa se pravidlem neřídí úplně. Naučte se je po malých skupinách: ${a} a ${b}.`,
  pl: (a, b) =>
    `Niektóre bardzo częste czasowniki nie do końca trzymają się reguły. Ucz się ich w małych grupach: ${a} i ${b}.`,
  tr: (a, b) =>
    `Çok sık kullanılan bazı fiiller kurala tam olarak uymaz. Onları küçük gruplar hâlinde öğrenin: ${a} ve ${b}.`,
  de: (a, b) =>
    `Einige sehr häufige Verben folgen der Regel nicht ganz. Lernen Sie sie in kleinen Gruppen: ${a} und ${b}.`,
  ja: (a, b) =>
    `よく使う動詞の中には、規則どおりに活用しないものがあります。少しずつグループで覚えましょう：${a}、${b}。`,
};
const GRAMMAR_LEADS = {
  'articoli-indeterminativi': (l) => CHOOSE[l](it('un, uno, una'), it('un’')),
  'preposizioni-semplici': (l) => CHOOSE[l](it('di, a, da, in, con, su, per, tra'), it('fra')),
  'presente-verbi-irregolari': (l) => IRREGULAR[l](it('andare, fare, stare, dare, venire, uscire'), it('sapere')),
};

// --------------------------------------------------------------- indici e home
const INDEX = {
  grammatica: {
    it: [
      'Grammatica italiana per stranieri A1–C1: lezioni ed esercizi gratis',
      'Tutta la grammatica italiana dal livello A1 al C1: spiegazioni semplici, tabelle, esempi reali ed esercizi interattivi con correzione immediata. Gratis.',
    ],
    en: [
      'Italian grammar A1–C1: free lessons with exercises',
      'Free Italian grammar lessons from A1 to C1: clear explanations, tables, real examples and interactive exercises with instant feedback.',
    ],
    es: [
      'Gramática italiana A1–C1: lecciones gratis con ejercicios',
      'Lecciones gratuitas de gramática italiana del A1 al C1: explicaciones claras, tablas, ejemplos reales y ejercicios interactivos con corrección inmediata.',
    ],
    fr: [
      'Grammaire italienne A1–C1 : leçons gratuites avec exercices',
      'Leçons gratuites de grammaire italienne du niveau A1 au C1 : explications claires, tableaux, exemples réels et exercices interactifs corrigés immédiatement.',
    ],
    cs: [
      'Italská gramatika A1–C1: lekce zdarma s cvičeními',
      'Bezplatné lekce italské gramatiky od A1 do C1: jasná vysvětlení, tabulky, skutečné příklady a interaktivní cvičení s okamžitou opravou.',
    ],
    pl: [
      'Gramatyka włoska A1–C1: darmowe lekcje z ćwiczeniami',
      'Darmowe lekcje gramatyki włoskiej od A1 do C1: jasne wyjaśnienia, tabele, prawdziwe przykłady i interaktywne ćwiczenia z natychmiastową korektą.',
    ],
    tr: [
      'İtalyanca dil bilgisi A1–C1: alıştırmalı ücretsiz dersler',
      "A1'den C1'e ücretsiz İtalyanca dil bilgisi dersleri: açık anlatımlar, tablolar, gerçek örnekler ve anında düzeltilen etkileşimli alıştırmalar.",
    ],
    de: [
      'Italienische Grammatik A1–C1: kostenlose Lektionen mit Übungen',
      'Kostenlose Lektionen zur italienischen Grammatik von A1 bis C1: klare Erklärungen, Tabellen, echte Beispiele und interaktive Übungen mit sofortiger Korrektur.',
    ],
    ja: [
      'イタリア語文法 A1〜C1：練習問題つき無料レッスン',
      'A1からC1までの無料イタリア語文法レッスン。わかりやすい説明、表、実例、すぐに答え合わせできる練習問題つき。',
    ],
  },
  vocabolario: {
    it: [
      'Vocabolario italiano illustrato: oltre {W} parole per temi',
      'Vocabolario italiano illustrato e gratuito: oltre {W} parole e verbi in {N} temi, ognuno con immagine, tre frasi d’esempio, pronuncia ed esercizi.',
    ],
    en: [
      'Italian vocabulary by topic: {W}+ words with pictures',
      'Free illustrated Italian vocabulary: over {W} words and verbs in {N} topics, each with a picture, three example sentences, pronunciation and exercises.',
    ],
    es: [
      'Vocabulario italiano por temas: más de {W} palabras con imágenes',
      'Vocabulario italiano ilustrado y gratuito: más de {W} palabras y verbos en {N} temas, cada uno con imagen, tres frases de ejemplo, pronunciación y ejercicios.',
    ],
    fr: [
      'Vocabulaire italien par thèmes : plus de {W} mots en images',
      'Vocabulaire italien illustré et gratuit : plus de {W} mots et verbes répartis en {N} thèmes, chacun avec une image, trois phrases d’exemple, la prononciation et des exercices.',
    ],
    cs: [
      'Italská slovní zásoba podle témat: přes {W} slov s obrázky',
      'Bezplatná ilustrovaná italská slovní zásoba: přes {W} slov a sloves v {N} tématech, každé s obrázkem, třemi příkladovými větami, výslovností a cvičeními.',
    ],
    pl: [
      'Słownictwo włoskie według tematów: ponad {W} słówek z obrazkami',
      'Darmowe ilustrowane słownictwo włoskie: ponad {W} słówek i czasowników w {N} tematach, każde ze zdjęciem, trzema przykładowymi zdaniami, wymową i ćwiczeniami.',
    ],
    tr: [
      "Konulara göre İtalyanca kelimeler: {W}'den fazla resimli kelime",
      "Ücretsiz resimli İtalyanca kelime hazinesi: {N} konuda {W}'den fazla kelime ve fiil; her biri resim, üç örnek cümle, telaffuz ve alıştırmalarla.",
    ],
    de: [
      'Italienischer Wortschatz nach Themen: über {W} Wörter mit Bildern',
      'Kostenloser italienischer Bildwortschatz: über {W} Wörter und Verben in {N} Themen, jeweils mit Bild, drei Beispielsätzen, Aussprache und Übungen.',
    ],
    ja: [
      'テーマ別イタリア語単語：写真つき{W}語以上',
      '無料のイタリア語単語集。{N}のテーマに{W}以上の単語と動詞を収録し、それぞれに写真、例文3つ、発音、練習問題つき。',
    ],
  },
  letture: {
    it: [
      'Letture graduate in italiano per stranieri A1–C1 (con PDF)',
      'Testi in italiano per stranieri dal livello A1 al C1: scienza, cultura, storia e favole, ognuno nei livelli adatti al tema, con parole utili, domande di comprensione e PDF gratis.',
    ],
    en: [
      'Italian graded readers A1–C1: free texts with questions and PDF',
      'Free Italian reading practice from A1 to C1: science, culture, history and fairy tales, each at the levels that suit it, with key vocabulary, comprehension questions and PDF.',
    ],
    es: [
      'Lecturas graduadas en italiano A1–C1: textos gratis con PDF',
      'Textos gratuitos en italiano del A1 al C1: ciencia, cultura, historia y cuentos, cada uno en los niveles adecuados, con vocabulario, preguntas de comprensión y PDF.',
    ],
    fr: [
      'Lectures graduées en italien A1–C1 : textes gratuits avec PDF',
      'Textes gratuits en italien du niveau A1 au C1 : science, culture, histoire et contes, chacun aux niveaux qui lui conviennent, avec vocabulaire, questions de compréhension et PDF.',
    ],
    cs: [
      'Italské texty ke čtení A1–C1: zdarma s PDF',
      'Bezplatné italské texty od A1 do C1: věda, kultura, historie a pohádky, každý v úrovních, které se k němu hodí, se slovní zásobou, otázkami k porozumění a PDF.',
    ],
    pl: [
      'Czytanki po włosku A1–C1: darmowe teksty z PDF',
      'Darmowe teksty po włosku od A1 do C1: nauka, kultura, historia i bajki, każdy na odpowiednich poziomach, ze słownictwem, pytaniami do tekstu i PDF.',
    ],
    tr: [
      "Seviyeli İtalyanca okuma metinleri A1–C1: ücretsiz ve PDF'li",
      "A1'den C1'e ücretsiz İtalyanca okuma metinleri: bilim, kültür, tarih ve masallar; her biri uygun seviyelerde, kelimeler, anlama soruları ve PDF ile.",
    ],
    de: [
      'Italienische Lesetexte A1–C1: kostenlose Texte mit PDF',
      'Kostenlose italienische Lesetexte von A1 bis C1: Wissenschaft, Kultur, Geschichte und Märchen, jeweils in den passenden Niveaus, mit Wortschatz, Verständnisfragen und PDF.',
    ],
    ja: [
      'イタリア語のレベル別読解 A1〜C1：PDF付き無料テキスト',
      'A1からC1までの無料イタリア語読解テキスト。科学、文化、歴史、童話をそれぞれに合ったレベルで、単語、読解問題、PDF付き。',
    ],
  },
  favole: {
    it: [
      'Favole in italiano per stranieri A1–B1 (con PDF)',
      'Favole classiche riscritte in italiano semplice in tre livelli, dall’A1 al B1: con parole utili, domande di comprensione, illustrazioni e PDF gratis.',
    ],
    en: [
      'Italian short stories for beginners and intermediate learners (A1–B1)',
      'Classic fairy tales rewritten in Italian at three levels, from A1 to B1, with key vocabulary, comprehension questions, illustrations and a free PDF.',
    ],
    es: [
      'Cuentos en italiano para principiantes e intermedios (A1–B1)',
      'Cuentos clásicos reescritos en italiano en tres niveles, del A1 al B1, con vocabulario, preguntas de comprensión, ilustraciones y PDF gratis.',
    ],
    fr: [
      'Contes en italien pour débutants et intermédiaires (A1–B1)',
      'Contes classiques réécrits en italien sur trois niveaux, de A1 à B1, avec vocabulaire, questions de compréhension, illustrations et PDF gratuit.',
    ],
    cs: [
      'Italské pohádky pro začátečníky i mírně pokročilé (A1–B1)',
      'Klasické pohádky převyprávěné italsky v třech úrovních, od A1 do B1, se slovní zásobou, otázkami k porozumění, ilustracemi a PDF zdarma.',
    ],
    pl: [
      'Włoskie bajki dla początkujących i średnio zaawansowanych (A1–B1)',
      'Klasyczne bajki opowiedziane po włosku na trzech poziomach, od A1 do B1, ze słownictwem, pytaniami do tekstu, ilustracjami i darmowym PDF.',
    ],
    tr: [
      'Yeni başlayanlar ve orta seviye için İtalyanca masallar (A1–B1)',
      "Üç seviyede İtalyanca yeniden yazılmış klasik masallar, A1'den B1'e: kelimeler, anlama soruları, resimler ve ücretsiz PDF.",
    ],
    de: [
      'Italienische Märchen für Anfänger und Mittelstufe (A1–B1)',
      'Klassische Märchen in drei Niveaus auf Italienisch neu erzählt, von A1 bis B1, mit Wortschatz, Verständnisfragen, Illustrationen und kostenlosem PDF.',
    ],
    ja: [
      '初級から中級までのイタリア語の童話（A1〜B1）',
      '有名な童話を3つのレベル（A1〜B1）のイタリア語で。単語、読解問題、イラスト、無料PDF付き。',
    ],
  },
};
const HOME_TITLES = {
  en: 'Online Italian lessons with native teachers, €12 | Italiano con Martin',
  es: 'Clases de italiano online con profesores nativos, 12 € | Italiano con Martin',
  fr: 'Cours d’italien en ligne avec des professeurs natifs, 12 € | Italiano con Martin',
  cs: 'Lekce italštiny online s rodilými mluvčími, 12 € | Italiano con Martin',
  pl: 'Lekcje włoskiego online z native speakerami, 12 € | Italiano con Martin',
  tr: 'Anadili İtalyanca öğretmenlerle online İtalyanca dersleri, 12 € | Italiano con Martin',
  de: 'Italienischunterricht online mit Muttersprachlern, 12 € | Italiano con Martin',
  ja: 'ネイティブ講師のオンラインイタリア語レッスン（12ユーロ） | Italiano con Martin',
};

// ------------------------------------------------------------------- motore
const walk = (d) =>
  fs
    .readdirSync(d, { withFileTypes: true })
    .flatMap((e) => (e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]));
const stripTags = (s) =>
  s
    .replace(/<[^>]+>/g, '')
    .replace(/\s+/g, ' ')
    .trim();
const firstNumber = (s) => Number((s || '').match(/\d+/)?.[0] || NaN);

function readPage(file) {
  const text = fs.readFileSync(file, 'utf8');
  const m = text.match(/const meta = (\{[\s\S]*?\n\s*\});?\s*\n---/);
  if (!m) return null;
  let meta;
  try {
    meta = JSON.parse(m[1]);
  } catch {
    return null;
  }
  const htmlRel = text.match(/import main from '~\/html\/([^']*)\?raw'/)?.[1];
  const htmlFile = htmlRel ? path.join(root, 'src/html', htmlRel) : null;
  const itHref = (meta.hreflangs || []).find(([l]) => l === 'it')?.[1];
  const itPath = itHref ? new URL(itHref).pathname : null;
  return { file, text, meta, htmlFile, itPath };
}

const pages = walk(path.join(root, 'src/pages'))
  .filter((f) => f.endsWith('.astro'))
  .map(readPage)
  .filter((p) => p && LANGS.includes(p.meta.lang) && !/noindex/.test(p.meta.robots || '') && p.itPath);

// Conteggi per l'indice del vocabolario, dalle descrizioni italiane delle lezioni.
const itVocab = pages.filter((p) => p.meta.lang === 'it' && /^\/vocabolario\/[^/]+\.html$/.test(p.itPath));
const vocabCounts = Object.fromEntries(
  itVocab.map((p) => [p.itPath.match(/([^/]+)\.html$/)[1], firstNumber(p.meta.description)])
);
const totalWords = Object.values(vocabCounts).reduce((a, b) => a + (b || 0), 0);
const lessonCount = itVocab.length;
const roundedWords = Math.floor(totalWords / 100) * 100;
const formatWords = (lang) =>
  ({ it: '.', de: '.', tr: '.', en: ',', fr: ' ', cs: ' ' })[lang] !== undefined
    ? String(roundedWords).replace(
        /\B(?=(\d{3})+(?!\d))/g,
        { it: '.', de: '.', tr: '.', en: ',', fr: ' ', cs: ' ' }[lang]
      )
    : String(roundedWords);

const warnings = [];
let changedPages = 0;
let changedLeads = 0;

function plan(p) {
  const { lang } = p.meta;
  const it = p.itPath;
  const h1 = () => {
    const html = p.htmlFile && fs.existsSync(p.htmlFile) ? fs.readFileSync(p.htmlFile, 'utf8') : '';
    const m = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
    return m ? stripTags(m[1]) : null;
  };

  // Livelli veri della pagina (pulsanti .level-nav del frammento): «A2–B1», in giapponese «A2〜B1».
  const levelRange = (lang) => {
    const html = p.htmlFile && fs.existsSync(p.htmlFile) ? fs.readFileSync(p.htmlFile, 'utf8') : '';
    const nav = html.match(/<div class="level-nav">([\s\S]*?)<\/div>/);
    const lv = nav ? [...nav[1].matchAll(/href="#(a1|a2|b1|b2|c1)"/g)].map((x) => x[1].toUpperCase()) : [];
    if (!lv.length) return null;
    const sep = lang === 'ja' ? '〜' : '–';
    return lv.length === 1 ? lv[0] : `${lv[0]}${sep}${lv[lv.length - 1]}`;
  };
  const hasRange = (title, r) => title.replace(/[〜~-]/g, '–').includes(r.replace('〜', '–'));

  if (it === '/') return lang === 'it' ? null : { title: HOME_TITLES[lang] };

  let m = it.match(/^\/(grammatica|vocabolario|letture|favole)\/$/);
  if (m) {
    const [title, description] = INDEX[m[1]][lang];
    const fill = (s) => s.replaceAll('{W}', formatWords(lang)).replaceAll('{N}', String(lessonCount));
    return { title: fill(title), description: fill(description) };
  }

  m = it.match(/^\/vocabolario\/([^/]+)\.html$/);
  if (m) {
    const slug = m[1];
    const topic = VOCAB[slug]?.[LANGS.indexOf(lang)];
    if (!topic) return (warnings.push(`VOCAB senza argomento: ${slug}`), null);
    const n = vocabCounts[slug];
    const own = firstNumber(p.meta.description);
    if (own && own !== n && lang !== 'ja') warnings.push(`VOCAB conteggio diverso: ${p.meta.path} (${own} ≠ it ${n})`);
    const kind = slug.startsWith('verbi-') ? 'verbs' : ADJECTIVE_LESSONS.has(slug) ? 'adjectives' : 'words';
    return { title: vocabTitle(lang, topic, n, kind) };
  }

  m = it.match(/^\/letture\/([^/]+)\.html$/);
  if (m) {
    const t = h1();
    if (!t) return null;
    // Titoli scritti a mano (Emma, bar, letture di scienza) o già giusti: si lasciano.
    const r = levelRange(lang);
    if (!r || hasRange(p.meta.title, r)) return null;
    // «Proteine: quante ne servono davvero» ha già i due punti: niente «: … :».
    const title = READING_SUFFIX[lang](t, r);
    return {
      title: /[:：]/.test(t)
        ? title.replace(`${t}: `, `${t} – `).replace(`${t} : `, `${t} – `).replace(`${t}：`, `${t} – `)
        : title,
    };
  }

  m = it.match(/^\/favole\/([^/]+)\.html$/);
  if (m) {
    const t = h1();
    if (!t) return null;
    if (m[1] === 'la-formichina-wow') return { title: STORY_A1_SUFFIX[lang](t) };
    // Le descrizioni con il numero giusto di livelli le scrive trim-reading-levels.mjs.
    const r = levelRange(lang);
    if (!r || hasRange(p.meta.title, r)) return null;
    return { title: STORY_SUFFIX[lang](t, r) };
  }

  m = it.match(/^\/grammatica\/(a1|a2|b1|b2|c1)\/([^/]+)\.html$/);
  if (m) {
    const level = m[1].toUpperCase();
    const slug = m[2];
    const out = {};
    if (lang === 'it') {
      const t = h1();
      if (t) out.title = `${t} – grammatica italiana ${level} con esercizi`;
    } else {
      const expected = grammarSeoTitles[lang]?.[slug];
      if (expected) out.title = `${expected} | ${GRAMMAR_MID[lang](level)}`;
      const d = GRAMMAR_DESCRIPTIONS[slug]?.[lang];
      if (d) out.description = d;
      const lead = GRAMMAR_LEADS[slug]?.(lang);
      if (lead) out.lead = lead;
    }
    return out;
  }
  return null;
}

for (const p of pages) {
  const change = plan(p);
  if (!change) continue;
  let text = p.text;
  const swap = (oldValue, newValue) => {
    if (oldValue == null || oldValue === newValue) return;
    text = text.split(JSON.stringify(oldValue)).join(JSON.stringify(newValue));
  };
  if (change.title) swap(p.meta.title, change.title);
  if (change.description) swap(p.meta.description, change.description);
  if (text !== p.text) {
    changedPages += 1;
    if (dryRun)
      console.log(
        `${p.meta.path}\n  T: ${change.title ?? '(=)'}${change.description ? `\n  D: ${change.description}` : ''}`
      );
    else fs.writeFileSync(p.file, text);
  }
  if (change.lead && p.htmlFile) {
    const html = fs.readFileSync(p.htmlFile, 'utf8');
    const next = html.replace(/<p class="lead">[\s\S]*?<\/p>/, `<p class="lead">${change.lead}</p>`);
    if (next !== html) {
      changedLeads += 1;
      if (dryRun) console.log(`  L: ${change.lead}`);
      else fs.writeFileSync(p.htmlFile, next);
    }
  }
}

console.log(
  `${dryRun ? '[dry-run] ' : ''}pagine: ${changedPages}, sottotitoli: ${changedLeads}, parole vocabolario: ${totalWords} in ${lessonCount} lezioni`
);
for (const w of warnings) console.warn(`! ${w}`);

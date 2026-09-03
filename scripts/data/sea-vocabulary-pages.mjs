// Stringhe di pagina della lezione "Il mare", lingua per lingua.
//
// I nomi localizzati e le descrizioni della tessera vengono dai segnaposto
// «In preparazione» gia' presenti negli indici del vocabolario: erano la
// promessa fatta al visitatore, questa lezione la mantiene.
//
// Le etichette di servizio (Riconosci la parola, Frasi da tradurre, i bottoni,
// il testo della barra di avanzamento) NON stanno qui: lo script le legge
// dalla pagina della cucina gia' tradotta, cosi' non si reinventano.

export const seaPages = {
  it: {
    dir: 'vocabolario',
    slug: 'mare',
    name: 'Il mare',
    title: 'Vocabolario del mare in italiano | Italiano con Martin',
    description: 'Impara 30 parole italiane del mare con immagini, tre frasi d’esempio, pronuncia ed esercizi.',
    heroAlt: 'Il mare illustrato con spiaggia, ombrellone, barca, conchiglie e faro',
    cardText: '30 parole per la spiaggia, la barca e le vacanze.',
  },
  en: {
    dir: 'en/vocabulary',
    slug: 'italian-sea-vocabulary',
    name: 'The sea',
    title: 'The sea | Italian vocabulary | Italiano con Martin',
    description: 'Learn 30 Italian sea words with images, three example sentences, pronunciation and exercises.',
    heroAlt: 'An illustrated sea with beach, umbrella, boat, shells and lighthouse',
    cardText: '30 words for the beach, the boat and holidays.',
  },
  es: {
    dir: 'es/vocabulario',
    slug: 'vocabulario-del-mar-en-italiano',
    name: 'El mar',
    title: 'el mar | vocabulario italiano | Italiano con Martin',
    description:
      'Aprende 30 palabras italianas del mar con imágenes, tres frases de ejemplo, pronunciación y ejercicios.',
    heroAlt: 'Un mar ilustrado con playa, sombrilla, barco, conchas y faro',
    cardText: '30 palabras para la playa, el barco y las vacaciones.',
  },
  fr: {
    dir: 'fr/vocabulaire',
    slug: 'vocabulaire-de-la-mer-en-italien',
    name: 'La mer',
    title: 'La mer | vocabulaire italien | Italiano con Martin',
    description:
      'Apprenez 30 mots italiens de la mer avec des images, trois exemples de phrases, la prononciation et des exercices.',
    heroAlt: 'Une mer illustrée avec plage, parasol, bateau, coquillages et phare',
    cardText: '30 mots pour la plage, le bateau et les vacances.',
  },
  cs: {
    dir: 'cs/slovni-zasoba',
    slug: 'italska-slovni-zasoba-more',
    name: 'Moře',
    title: 'moře | italská slovní zásoba | Italiano con Martin',
    description: 'Naučte se 30 italských slov o moři s obrázky, tři příkladové věty, výslovnost a cvičení.',
    heroAlt: 'Ilustrované moře s pláží, slunečníkem, lodí, mušlemi a majákem',
    cardText: '30 slov pro pláž, loď a dovolenou.',
  },
  pl: {
    dir: 'pl/slownictwo',
    slug: 'wloskie-slownictwo-morze',
    name: 'Morze',
    title: 'Morze | włoskie słownictwo | Italiano con Martin',
    description: 'Naucz się 30 włoskich słów o morzu z obrazkami, trzema przykładowymi zdaniami, wymową i ćwiczeniami.',
    heroAlt: 'Ilustrowane morze z plażą, parasolem, łodzią, muszlami i latarnią morską',
    cardText: '30 słów na określenie plaży, łodzi i wakacji.',
  },
  tr: {
    dir: 'tr/kelime-bilgisi',
    slug: 'italyanca-deniz-kelimeleri',
    name: 'Deniz',
    title: 'deniz | İtalyanca kelimeler | Italiano con Martin',
    description: 'Resimler, üç örnek cümle, telaffuz ve alıştırmalarla birlikte 30 İtalyanca deniz kelimesini öğrenin.',
    heroAlt: 'Plaj, şemsiye, tekne, deniz kabukları ve deniz feneri ile resimli bir deniz',
    cardText: 'Plaj, tekne ve tatiller için 30 kelime.',
  },
  de: {
    dir: 'de/wortschatz',
    slug: 'italienischer-wortschatz-meer',
    name: 'Das Meer',
    title: 'Das Meer | italienischer Wortschatz | Italiano con Martin',
    description:
      'Lernen Sie 30 italienische Wörter rund um das Meer mit Bildern, drei Beispielsätzen, Aussprache und Übungen.',
    heroAlt: 'Ein illustriertes Meer mit Strand, Sonnenschirm, Boot, Muscheln und Leuchtturm',
    cardText: '30 Wörter für den Strand, das Boot und den Urlaub.',
  },
  ja: {
    dir: 'ja/goi',
    slug: 'italian-sea-vocabulary',
    name: '海',
    title: '海 | イタリア語の語彙 | Italiano con Martin',
    description: '海に関するイタリア語の単語 30 個を画像、3 つの例文、発音、練習問題で学びます。',
    heroAlt: 'ビーチ、パラソル、ボート、貝殻、灯台のあるイラスト入りの海',
    cardText: 'ビーチ、ボート、休暇を表す 30 語。',
  },
};

// La parola italiana usata come esempio nel testo introduttivo dell'esercizio
// «Riconosci la parola» e nella nota finale: nelle pagine della cucina era
// «frigorifero» / «forchetta», qui diventa una parola di questa lezione.
export const seaExampleWord = { bare: 'conchiglia', withArticle: 'la conchiglia' };

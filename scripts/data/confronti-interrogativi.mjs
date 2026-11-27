// Confronto con la lingua dello studente ed errori tipici della lezione nuova «Gli interrogativi» (A1), 2026-11-27.
// Stesso formato di confronti-lingua.mjs ed errori-lingua.mjs, che li aggiungono a NOTES ed ERRORS; li inserisce
// scripts/add-language-notes.mjs.
//
// Le trappole per lingua: inglese «do / does», la preposizione in fondo («who with?»), «how old», «what's your
// name»; spagnolo e portoghese «cuál / qual» con l’apostrofo, «por qué / por que» in due parole, «qué tal»,
// il brasiliano «que horas sai?» senza «a» e «quanto custa os sapatos»; francese «est-ce que», «quel / quelle»,
// «combien de», «quel âge»; ceco e polacco «jaký / jaki» → com’è, «kolik / ile» + genitivo → quante, «kam / dokąd»,
// «čí / czyj»; turco il nome singolare dopo «kaç», il suffisso «-le» (kiminle), «yaşındasın»; tedesco «wie alt»,
// «woher», «was für ein»; giapponese il verbo in fondo, la particella dopo il nome (誰と), 「何歳ですか」.

const i = (s) => `<span lang="it">${s}</span>`;
const b = (s) => `<strong lang="it">${s}</strong>`;

const IQ = 'grammatica/a1/interrogativi.html';

export const NOTES_INTERROGATIVI = {
  [IQ]: {
    after: 'regola',
    it: {
      h2: 'Le domande: il confronto con l’inglese',
      intro: `In inglese le domande hanno bisogno di <em lang="en">do / does</em> e spesso lasciano la preposizione in fondo. In italiano no: parola interrogativa, verbo e basta.`,
      th: ['Inglese', 'Italiano'],
      rows: [
        ['Where do you live?', 'Dove abiti?'],
        ['Who are you going out with?', 'Con chi esci?'],
        ['How old are you?', 'Quanti anni hai?'],
        ['What’s your name?', 'Come ti chiami?'],
        ['Where are you from?', 'Di dove sei?'],
      ],
      points: [
        `Niente <em lang="en">do / does</em>: ${b('dove abiti?')}`,
        `La preposizione va ${b('all’inizio')}: ${i('con chi?, di dove?, a che ora?')}`,
        `L’età si chiede con ${b('quanti anni hai?')}, il nome con ${b('come ti chiami?')}`,
      ],
    },
    en: {
      h2: 'Questions compared with English',
      intro: `English questions need <em>do / does</em> and often leave the preposition at the end. Italian doesn’t: question word, verb, done.`,
      th: ['English', 'Italian'],
      rows: [
        ['Where do you live?', 'Dove abiti?'],
        ['Who are you going out with?', 'Con chi esci?'],
        ['How old are you?', 'Quanti anni hai?'],
        ['What’s your name?', 'Come ti chiami?'],
        ['Where are you from?', 'Di dove sei?'],
      ],
      points: [
        `No <em>do / does</em>: ${b('dove abiti?')}`,
        `The preposition goes ${b('first')}: ${i('con chi?, di dove?, a che ora?')}`,
        `Age is ${b('quanti anni hai?')} (“how many years do you have?”), your name ${b('come ti chiami?')} (“how do you call yourself?”).`,
      ],
    },
    es: {
      h2: 'Los interrogativos comparados con el español',
      intro: `Aquí el español ayuda mucho: casi todas las palabras se parecen (quién → ${i('chi')}, dónde → ${i('dove')}, cuándo → ${i('quando')}) y el orden es el mismo. Cuidado con la ortografía y con unas pocas expresiones.`,
      th: ['Español', 'Italiano'],
      rows: [
        ['¿Cuál es tu dirección?', 'Qual è il tuo indirizzo?'],
        ['¿Por qué estudias italiano?', 'Perché studi l’italiano?'],
        ['¿Qué tal?', 'Come va?'],
        ['¿Qué es esto?', 'Che cos’è questo?'],
        ['¿Qué hora es?', 'Che ore sono?'],
      ],
      points: [
        `«¿Cuál es?» → ${b('qual è')}, sin apóstrofo.`,
        `«¿Por qué?» y «porque» son la misma palabra: ${b('perché')}, junta y con tilde.`,
        `${i('Chi')} se lee «ki», ${i('che')} se lee «ke»: ${i('chi')} = quién, ${i('che')} = qué.`,
      ],
    },
    pt: {
      h2: 'Os interrogativos comparados com o português',
      intro: `O português ajuda muito: as palavras se parecem (quem → ${i('chi')}, onde → ${i('dove')}, quando → ${i('quando')}) e a ordem é parecida. As armadilhas estão na escrita e em alguns hábitos do Brasil.`,
      th: ['Português', 'Italiano'],
      rows: [
        ['Qual é o seu endereço?', 'Qual è il tuo indirizzo?'],
        ['Por que você estuda italiano?', 'Perché studi l’italiano?'],
        ['Que horas sai o trem?', 'A che ora parte il treno?'],
        ['Quanto custam os sapatos?', 'Quanto costano le scarpe?'],
        ['O que é isso?', 'Che cos’è questo?'],
      ],
      points: [
        `«Por que» e «porque» são uma palavra só: ${b('perché')}.`,
        `«Que horas sai?» precisa de ${b('a')}: ${i('a che ora parte?')}`,
        `${i('Chi')} se lê «ki», ${i('che')} se lê «ke»: ${i('chi')} = quem, ${i('che')} = que.`,
      ],
    },
    fr: {
      h2: 'Les interrogatifs comparés au français',
      intro: `Pas de « est-ce que » ni d’inversion en italien : le mot interrogatif, puis le verbe. Et « quel, combien de » sont plus simples.`,
      th: ['Français', 'Italien'],
      rows: [
        ['Qu’est-ce que tu fais ?', 'Che cosa fai?'],
        ['Où est-ce que tu habites ?', 'Dove abiti?'],
        ['Quelle robe tu préfères ?', 'Quale vestito preferisci?'],
        ['Combien de livres ?', 'Quanti libri?'],
        ['Quel âge as-tu ?', 'Quanti anni hai?'],
      ],
      points: [
        `Pas de « est-ce que » : ${b('che cosa fai?')}`,
        `« Quel / quelle » → ${b('quale')} (masculin et féminin), « quels / quelles » → ${b('quali')}.`,
        `« Combien de » → ${b('quanto, quanta, quanti, quante')}, sans « di ».`,
      ],
    },
    cs: {
      h2: 'Tázací slova ve srovnání s češtinou',
      intro: `Jako v češtině stojí tázací slovo na začátku. Italština ale nemá pády, takže „kolik lidí“ je ${i('quante persone')}, a „jaký“ a „kam“ se překládají jinak.`,
      th: ['Čeština', 'Italština'],
      rows: [
        ['Jaká je tvoje sestra?', 'Com’è tua sorella?'],
        ['Kolik lidí?', 'Quante persone?'],
        ['Kam jdeš?', 'Dove vai?'],
        ['Čí je ta kniha?', 'Di chi è questo libro?'],
        ['Kolik ti je let?', 'Quanti anni hai?'],
      ],
      points: [
        `„Jaký je?“ (popis) → ${b('com’è?')}, ne ${i('quale')}.`,
        `${i('Quanto')} se shoduje s podstatným jménem: ${b('quante persone')}.`,
        `„Kde“ i „kam“ je ${b('dove')}; „čí“ je ${b('di chi')}.`,
      ],
    },
    pl: {
      h2: 'Zaimki pytajne w porównaniu z polskim',
      intro: `Jak w polskim zaimek pytajny stoi na początku. Włoski nie ma jednak przypadków, więc „ile osób” to ${i('quante persone')}, a „jaki” i „dokąd” tłumaczy się inaczej.`,
      th: ['Polski', 'Włoski'],
      rows: [
        ['Jaka jest twoja siostra?', 'Com’è tua sorella?'],
        ['Ile osób?', 'Quante persone?'],
        ['Dokąd idziesz?', 'Dove vai?'],
        ['Czyja jest ta książka?', 'Di chi è questo libro?'],
        ['Ile masz lat?', 'Quanti anni hai?'],
      ],
      points: [
        `„Jaki jest?” (opis) → ${b('com’è?')}, nie ${i('quale')}.`,
        `${i('Quanto')} zgadza się z rzeczownikiem: ${b('quante persone')}.`,
        `„Gdzie” i „dokąd” to ${b('dove')}; „czyj” to ${b('di chi')}.`,
      ],
    },
    tr: {
      h2: 'Soru kelimeleri ve Türkçe',
      intro: `Türkçede soru kelimesi fiilin hemen önündedir ve evet / hayır sorularında “mi” vardır. İtalyancada soru kelimesi ${b('başa')} gelir, “mi” yoktur: sadece ses tonu değişir.`,
      th: ['Türkçe', 'İtalyanca'],
      rows: [
        ['Nerede oturuyorsun?', 'Dove abiti?'],
        ['Kiminle çıkıyorsun?', 'Con chi esci?'],
        ['Kaç kişi?', 'Quante persone?'],
        ['Kaç yaşındasın?', 'Quanti anni hai?'],
        ['Marco geliyor mu?', 'Marco viene?'],
      ],
      points: [
        `“-le” eki İtalyancada öndedir: “kiminle” → ${b('con chi')}.`,
        `“Kaç”tan sonra isim çoğuldur: ${b('quante persone')}.`,
        `Yaş ${i('avere')} ile sorulur: ${b('quanti anni hai?')}`,
      ],
    },
    de: {
      h2: 'Die Fragewörter im Vergleich mit dem Deutschen',
      intro: `Wie im Deutschen steht das Fragewort vorne und dann das Verb: „Wo wohnt deine Schwester?“ → ${i('dove abita tua sorella?')}. Unterschiede gibt es bei „wie alt“, „woher“ und „was für ein“.`,
      th: ['Deutsch', 'Italienisch'],
      rows: [
        ['Wie alt bist du?', 'Quanti anni hai?'],
        ['Woher kommst du?', 'Di dove sei? · Da dove vieni?'],
        ['Was für ein Buch?', 'Che libro?'],
        ['Wie viele Leute?', 'Quante persone?'],
        ['Wie heißt du?', 'Come ti chiami?'],
      ],
      points: [
        `„Wie alt“ → ${b('quanti anni')}, mit ${i('avere')}.`,
        `„Woher“ → ${b('di dove')} (Herkunft) oder ${b('da dove')} (Bewegung).`,
        `„Wann“ und „wenn“ sind beide ${b('quando')}.`,
      ],
    },
    ja: {
      h2: '疑問詞と日本語',
      intro: `日本語では疑問詞は文の中にあり、最後に「か」をつけます。イタリア語では疑問詞を${b('文のはじめ')}に置き、すぐ後に動詞が来ます。「か」はありません。`,
      th: ['日本語', 'イタリア語'],
      rows: [
        ['お姉さんはどこで働いていますか。', 'Dove lavora tua sorella?'],
        ['だれと出かけますか。', 'Con chi esci?'],
        ['何歳ですか。', 'Quanti anni hai?'],
        ['何人ですか。', 'Quante persone?'],
        ['お名前は？', 'Come ti chiami?'],
      ],
      points: [
        `疑問詞 → 動詞 → 主語の順：${b('dove lavora tua sorella?')}`,
        `「〜と」「〜から」などの前置詞は疑問詞の${b('前')}：${i('con chi?, di dove?')}`,
        `年齢は ${i('avere')}（持つ）で聞きます：${b('quanti anni hai?')}`,
      ],
    },
  },
};

export const ERRORS_INTERROGATIVI = {
  [IQ]: {
    it: [
      ['Chi esci con?', 'Con chi esci?', `<em lang="en">Who are you going out with?</em>: la preposizione va all’inizio.`],
      ['Come vecchio sei?', 'Quanti anni hai?', `<em lang="en">How old are you?</em> → ${b('quanti anni hai?')}`],
      ['Dove tu abiti?', 'Dove abiti?', `<em lang="en">Where do you live?</em>: niente <em lang="en">do</em> e di solito niente ${i('tu')}.`],
      ['Che è il tuo nome?', 'Come ti chiami?', `<em lang="en">What’s your name?</em> si dice ${b('come ti chiami?')}`],
      ['Qual’è il tuo numero?', 'Qual è il tuo numero?', `<em lang="en">What’s</em> ha l’apostrofo, ${b('qual è')} no.`],
    ],
    en: [
      ['Chi esci con?', 'Con chi esci?', `<em>Who are you going out with?</em>: the preposition goes first.`],
      ['Come vecchio sei?', 'Quanti anni hai?', `<em>How old are you?</em> → ${b('quanti anni hai?')}`],
      ['Dove tu abiti?', 'Dove abiti?', `<em>Where do you live?</em>: no “do”, and usually no ${i('tu')}.`],
      ['Che è il tuo nome?', 'Come ti chiami?', `<em>What’s your name?</em> → ${b('come ti chiami?')}`],
      ['Qual’è il tuo numero?', 'Qual è il tuo numero?', `<em>What’s</em> has an apostrophe, ${b('qual è')} doesn’t.`],
    ],
    es: [
      ['Qual’è il tuo indirizzo?', 'Qual è il tuo indirizzo?', `«¿Cuál es?» → ${b('qual è')}, sin apóstrofo.`],
      ['Per che studi l’italiano?', 'Perché studi l’italiano?', `«¿Por qué?» → ${b('perché')}, una sola palabra.`],
      ['Cuando parti?', 'Quando parti?', `«Cuándo» → ${b('quando')}, con qu.`],
      ['Che tal?', 'Come va?', `«¿Qué tal?» → ${b('come va?')}`],
      ['Che è questo?', 'Che cos’è questo?', `«¿Qué es esto?» → ${b('che cos’è?')} o ${b('cos’è?')}`],
    ],
    pt: [
      ['Qual’è il tuo indirizzo?', 'Qual è il tuo indirizzo?', `«Qual é?» → ${b('qual è')}, sem apóstrofo.`],
      ['Per che studi l’italiano?', 'Perché studi l’italiano?', `«Por que?» → ${b('perché')}, uma palavra só.`],
      ['Che ora parte il treno?', 'A che ora parte il treno?', `«Que horas sai o trem?» → ${b('a che ora')}: o ${i('a')} não pode faltar.`],
      ['Quanto costa le scarpe?', 'Quanto costano le scarpe?', `No Brasil se ouve «quanto custa os sapatos»; em italiano o verbo vai no plural, ${b('costano')}.`],
      ['Dove tu abiti?', 'Dove abiti?', `«Onde você mora?»: em italiano o pronome normalmente não aparece, ${b('dove abiti?')}`],
    ],
    fr: [
      ['Quanto di libri?', 'Quanti libri?', `« Combien de livres ? » → ${b('quanti libri?')}, sans ${i('di')}.`],
      ['Quale età hai?', 'Quanti anni hai?', `« Quel âge as-tu ? » → ${b('quanti anni hai?')}`],
      ['Quala borsa?', 'Quale borsa?', `« Quelle » → ${b('quale')}, même forme au masculin et au féminin.`],
      ['Di dove tu sei?', 'Di dove sei?', `« D’où tu es ? » : en italien le pronom ne se dit pas, ${b('di dove sei?')}`],
      ['Qual’è il tuo numero?', 'Qual è il tuo numero?', `${b('Qual è')} s’écrit sans apostrophe.`],
    ],
    cs: [
      ['Quale è tua sorella?', 'Com’è tua sorella?', `„Jaká je tvoje sestra?“ (popis) → ${b('com’è?')}`],
      ['Quanto persone?', 'Quante persone?', `„Kolik lidí“: ${i('quanto')} se shoduje s podstatným jménem, ${b('quante')}.`],
      ['A dove vai?', 'Dove vai?', `„Kam jdeš?“ → ${b('dove vai?')}, bez předložky.`],
      ['Quanti anni sei?', 'Quanti anni hai?', `„Kolik ti je let?“: věk se říká se slovesem ${b('avere')}.`],
      ['Qual’è il tuo numero?', 'Qual è il tuo numero?', `${b('Qual è')} se píše bez apostrofu.`],
    ],
    pl: [
      ['Quale è tua sorella?', 'Com’è tua sorella?', `„Jaka jest twoja siostra?” (opis) → ${b('com’è?')}`],
      ['Quanto persone?', 'Quante persone?', `„Ile osób”: ${i('quanto')} zgadza się z rzeczownikiem, ${b('quante')}.`],
      ['A dove vai?', 'Dove vai?', `„Dokąd idziesz?” → ${b('dove vai?')}, bez przyimka.`],
      ['Chi è questo libro?', 'Di chi è questo libro?', `„Czyja jest ta książka?” → ${b('di chi')}.`],
      ['Qual’è il tuo numero?', 'Qual è il tuo numero?', `${b('Qual è')} pisze się bez apostrofu.`],
    ],
    tr: [
      ['Chi con esci?', 'Con chi esci?', `“Kiminle”: İtalyancada ${b('con')} öne gelir.`],
      ['Quante persona?', 'Quante persone?', `“Kaç kişi”: İtalyancada isim çoğul olur, ${b('persone')}.`],
      ['Quanti anni sei?', 'Quanti anni hai?', `“Kaç yaşındasın?”: yaş ${b('avere')} ile sorulur.`],
      ['Dove tu abiti?', 'Dove abiti?', `“Sen nerede oturuyorsun?”: ${i('tu')} genellikle söylenmez.`],
      ['Qual’è il tuo numero?', 'Qual è il tuo numero?', `${b('Qual è')} kesme işaretsiz yazılır.`],
    ],
    de: [
      ['Come vecchio sei?', 'Quanti anni hai?', `„Wie alt bist du?“ → ${b('quanti anni hai?')}`],
      ['Dove vieni?', 'Di dove sei? · Da dove vieni?', `„Woher kommst du?“: ohne ${i('di')} oder ${i('da')} geht es nicht.`],
      ['Che per un libro?', 'Che libro?', `„Was für ein Buch?“ → ${b('che libro?')}`],
      ['Quanto persone?', 'Quante persone?', `„Wie viele Leute“: ${i('quanto')} wird angeglichen, ${b('quante')}.`],
      ['Qual’è il tuo numero?', 'Qual è il tuo numero?', `${b('Qual è')} schreibt man ohne Apostroph.`],
    ],
    ja: [
      ['Dove tua sorella lavora?', 'Dove lavora tua sorella?', `疑問詞のすぐ後に動詞：${b('dove lavora…?')}`],
      ['Chi con esci?', 'Con chi esci?', `「だれと」の「と」= ${i('con')} は前に置きます：${b('con chi')}。`],
      ['Quanti anni sei?', 'Quanti anni hai?', `「何歳ですか」：年齢は ${b('avere')} で聞きます。`],
      ['Quanto persone?', 'Quante persone?', `${i('quanto')} は名詞に合わせて変わります：${b('quante persone')}。`],
      ['Qual’è il tuo numero?', 'Qual è il tuo numero?', `${b('qual è')} にはアポストロフィをつけません。`],
    ],
  },
};

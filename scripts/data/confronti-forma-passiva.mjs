// Confronto con la lingua dello studente ed errori tipici della lezione «La forma passiva» (C1), rifatta il 2026-11-28
// (prima non aveva né l'uno né gli altri). Stesso formato di confronti-lingua.mjs ed errori-lingua.mjs, che li
// aggiungono a NOTES ed ERRORS; li inserisce scripts/add-language-notes.mjs.
//
// Le trappole per lingua: inglese il passivo del complemento indiretto («I was given a book»), «is being built»,
// l'accordo; spagnolo e portoghese «por» → da, la pasiva refleja e il brasiliano «vende-se casas» al singolare;
// francese «par» → da, «on» → si; tedesco «werden» → venire anche nei tempi composti («ist gebaut worden» → è stato
// costruito), «von» → da, «man» → si; ceco e polacco lo strumentale («postaven Petrem») e «przez» → da, il riflessivo
// «se prodává / sprzedaje się»; turco il suffisso -il-, «tarafından»; giapponese il passivo «indiretto» 「盗まれた」.

const i = (s) => `<span lang="it">${s}</span>`;
const b = (s) => `<strong lang="it">${s}</strong>`;

const FP = 'grammatica/c1/forma-passiva.html';

export const NOTES_PASSIVA = {
  [FP]: {
    after: 'regola',
    it: {
      h2: 'La forma passiva: il confronto con l’inglese',
      intro: `Il passivo inglese (<em lang="en">be</em> + participio, <em lang="en">by</em>) è molto simile. Le differenze: in italiano il participio si accorda, ci sono anche <em lang="it">venire</em> e <em lang="it">andare</em>, e solo il complemento oggetto può diventare soggetto.`,
      th: ['Inglese', 'Italiano'],
      rows: [
        ['The bridge was built in 1500.', 'Il ponte fu costruito nel 1500.'],
        ['The letter was written by Anna.', 'La lettera è stata scritta da Anna.'],
        ['I was given a book.', 'Mi è stato regalato un libro.'],
        ['The form must be filled in.', 'Il modulo va compilato.'],
        ['Houses for sale.', 'Si vendono case.'],
      ],
      points: [
        `<em lang="en">I was given</em>, <em lang="en">I was told</em> → ${b('mi è stato dato, mi è stato detto')}.`,
        `Il participio si accorda: ${i('la lettera è stata scritta')}.`,
        `<em lang="en">By</em> → ${b('da')}: ${i('da Anna, dal Comune')}.`,
      ],
    },
    en: {
      h2: 'The passive compared with English',
      intro: `The English passive (<em>be</em> + past participle, <em>by</em>) is very similar. The differences: Italian participles agree, there are also ${i('venire')} and ${i('andare')}, and only the direct object can become the subject.`,
      th: ['English', 'Italian'],
      rows: [
        ['The bridge was built in 1500.', 'Il ponte fu costruito nel 1500.'],
        ['The letter was written by Anna.', 'La lettera è stata scritta da Anna.'],
        ['I was given a book.', 'Mi è stato regalato un libro.'],
        ['The form must be filled in.', 'Il modulo va compilato.'],
        ['Houses for sale.', 'Si vendono case.'],
      ],
      points: [
        `“I was given”, “I was told” → ${b('mi è stato dato, mi è stato detto')}: the thing is the subject.`,
        `The participle agrees: ${i('la lettera è stata scritta')}.`,
        `“By” → ${b('da')}: ${i('da Anna, dal Comune')}.`,
      ],
    },
    es: {
      h2: 'La pasiva comparada con el español',
      intro: `La pasiva con «ser» funciona igual: ${i('il ponte fu costruito')} = «el puente fue construido». Pero el italiano la usa más que el español, también al hablar, y tiene dos formas propias: ${i('venire')} y ${i('andare')}.`,
      th: ['Español', 'Italiano'],
      rows: [
        ['Fue escrito por Cervantes.', 'Fu scritto da Cervantes.'],
        ['Se venden casas.', 'Si vendono case.'],
        ['Hay que rellenar el formulario.', 'Il modulo va compilato.'],
        ['El correo se reparte cada mañana.', 'La posta viene consegnata ogni mattina.'],
        ['Las maletas se perdieron.', 'Le valigie sono andate perse.'],
      ],
      points: [
        `«Por» → ${b('da')}: ${i('scritto da Cervantes')}, nunca ${i('per')}.`,
        `«Se venden casas» → ${b('si vendono case')}: igual que en español.`,
        `«Hay que hacerlo» con una cosa → ${b('va fatto')}.`,
      ],
    },
    pt: {
      h2: 'A voz passiva comparada com o português',
      intro: `A passiva com «ser» funciona igual: ${i('il ponte fu costruito')} = «a ponte foi construída». Mas o italiano tem duas formas a mais (${i('venire, andare')}) e cuidado com a passiva com «se».`,
      th: ['Português', 'Italiano'],
      rows: [
        ['Foi escrito por Machado de Assis.', 'Fu scritto da Machado de Assis.'],
        ['Vendem-se casas. · Vende-se casas.', 'Si vendono case.'],
        ['O formulário precisa ser preenchido.', 'Il modulo va compilato.'],
        ['A correspondência é entregue toda manhã.', 'La posta viene consegnata ogni mattina.'],
        ['As malas foram extraviadas.', 'Le valigie sono andate perse.'],
      ],
      points: [
        `«Por» → ${b('da')}: ${i('scritto da')}, nunca ${i('per')}.`,
        `Com o ${i('si')} o verbo concorda: ${b('si vendono case')}, nunca ${i('si vende case')}.`,
        `«Precisa ser feito» → ${b('va fatto')}.`,
      ],
    },
    fr: {
      h2: 'La voix passive comparée au français',
      intro: `Le passif avec « être » fonctionne comme en français, accord compris. Mais l’italien remplace souvent le « on » par ${i('si')} et a deux formes en plus : ${i('venire')} et ${i('andare')}.`,
      th: ['Français', 'Italien'],
      rows: [
        ['Il a été écrit par Hugo.', 'È stato scritto da Hugo.'],
        ['On vend des maisons.', 'Si vendono case.'],
        ['Le formulaire doit être rempli.', 'Il modulo va compilato.'],
        ['Le courrier est distribué chaque matin.', 'La posta viene consegnata ogni mattina.'],
        ['Les bagages ont été perdus.', 'I bagagli sono andati persi.'],
      ],
      points: [
        `« Par » → ${b('da')} : ${i('scritto da Hugo')}, jamais ${i('per')}.`,
        `« On vend des maisons » → ${b('si vendono case')}, verbe au pluriel.`,
        `« Doit être fait » → ${b('va fatto')}.`,
      ],
    },
    cs: {
      h2: 'Trpný rod ve srovnání s češtinou',
      intro: `Čeština má trpný rod („most byl postaven“) i zvratný („domy se prodávají“). Italština má obojí: ${i('il ponte fu costruito')}, ${i('si vendono case')}. Původce se ale neříká 7. pádem, nýbrž s ${b('da')}.`,
      th: ['Čeština', 'Italština'],
      rows: [
        ['Most byl postaven v roce 1500.', 'Il ponte fu costruito nel 1500.'],
        ['Dopis napsala Anna. · Dopis byl napsán Annou.', 'La lettera è stata scritta da Anna.'],
        ['Prodávají se domy.', 'Si vendono case.'],
        ['Formulář je třeba vyplnit.', 'Il modulo va compilato.'],
        ['Zavazadla se ztratila.', 'I bagagli sono andati persi.'],
      ],
      points: [
        `Původce (7. pád) → ${b('da')}: ${i('scritta da Anna')}.`,
        `Příčestí se shoduje dvakrát: ${b('è stata scritta')}.`,
        `„Je třeba udělat“ → ${b('va fatto')}.`,
      ],
    },
    pl: {
      h2: 'Strona bierna w porównaniu z polskim',
      intro: `Polski ma stronę bierną („most został zbudowany”) i formy z „się”. Włoski ma obie: ${i('il ponte fu costruito')}, ${i('si vendono case')}. Wykonawcę czynności wprowadza jednak ${b('da')}, nie „per”.`,
      th: ['Polski', 'Włoski'],
      rows: [
        ['Most został zbudowany w 1500 roku.', 'Il ponte fu costruito nel 1500.'],
        ['List został napisany przez Annę.', 'La lettera è stata scritta da Anna.'],
        ['Sprzedaje się domy.', 'Si vendono case.'],
        ['Formularz trzeba wypełnić.', 'Il modulo va compilato.'],
        ['Bagaże zaginęły.', 'I bagagli sono andati persi.'],
      ],
      points: [
        `„Przez” → ${b('da')}: ${i('scritta da Anna')}.`,
        `„Sprzedaje się domy” → ${b('si vendono case')}: czasownik w liczbie mnogiej.`,
        `„Został” → ${b('è stato')} (lub ${i('fu')}), „jest robiony” → ${b('viene fatto')}.`,
      ],
    },
    tr: {
      h2: 'Edilgen yapı ve Türkçe',
      intro: `Türkçede edilgen yapı fiile ek olarak eklenir (yapıldı, inşa edildi). İtalyancada ${b('essere')} + ortaç kullanılır ve ortaç özneye uyar. “Tarafından” yerine ${b('da')} gelir.`,
      th: ['Türkçe', 'İtalyanca'],
      rows: [
        ['Köprü 1500’de inşa edildi.', 'Il ponte fu costruito nel 1500.'],
        ['Mektup Anna tarafından yazıldı.', 'La lettera è stata scritta da Anna.'],
        ['Satılık evler.', 'Si vendono case.'],
        ['Form doldurulmalı.', 'Il modulo va compilato.'],
        ['Bavullar kayboldu.', 'I bagagli sono andati persi.'],
      ],
      points: [
        `“Tarafından” → ${b('da')}: ${i('scritta da Anna')}.`,
        `Ortaç özneye uyar: ${b('la lettera è stata scritta')}.`,
        `“Doldurulmalı” → ${b('va compilato')}.`,
      ],
    },
    de: {
      h2: 'Das Passiv im Vergleich mit dem Deutschen',
      intro: `Das deutsche Vorgangspassiv mit „werden“ entspricht ${b('venire')}, das Zustandspassiv mit „sein“ ${b('essere')}. Aber: In den zusammengesetzten Zeiten gibt es nur ${i('essere')}.`,
      th: ['Deutsch', 'Italienisch'],
      rows: [
        ['Die Post wird jeden Morgen zugestellt.', 'La posta viene consegnata ogni mattina.'],
        ['Die Brücke ist 1500 gebaut worden.', 'Il ponte è stato costruito nel 1500.'],
        ['Der Brief wurde von Anna geschrieben.', 'La lettera fu scritta da Anna.'],
        ['Man verkauft Häuser.', 'Si vendono case.'],
        ['Das Formular muss ausgefüllt werden.', 'Il modulo va compilato.'],
      ],
      points: [
        `„Ist … worden“ → ${b('è stato')} + Partizip, nie ${i('è venuto')}.`,
        `„Von“ → ${b('da')}: ${i('scritta da Anna')}.`,
        `„Man“ + Plural → ${b('si vendono')}: das Verb richtet sich nach der Sache.`,
      ],
    },
    ja: {
      h2: '受動態と日本語',
      intro: `日本語の「〜られる」は「財布を盗まれた」のように、迷惑を受けた人を主語にできます。イタリア語の受動態は、${b('目的語（もの）')}だけが主語になれます。`,
      th: ['日本語', 'イタリア語'],
      rows: [
        ['橋は 1500 年に建てられた。', 'Il ponte fu costruito nel 1500.'],
        ['手紙はアンナに書かれた。', 'La lettera è stata scritta da Anna.'],
        ['自転車を盗まれた。', 'Mi hanno rubato la bici. · La mia bici è stata rubata.'],
        ['家を売っています。', 'Si vendono case.'],
        ['書類に記入しなければならない。', 'Il modulo va compilato.'],
      ],
      points: [
        `「〜に（よって）」→ ${b('da')}：${i('scritta da Anna')}。`,
        `「（私が）盗まれた」は ${b('mi hanno rubato…')} か ${b('la mia bici è stata rubata')}。`,
        `過去分詞は主語に一致：${b('la lettera è stata scritta')}。`,
      ],
    },
  },
};

export const ERRORS_PASSIVA = {
  [FP]: {
    it: [
      ['Sono stato dato un libro.', 'Mi è stato dato un libro.', `<em lang="en">I was given a book</em>: il soggetto è il libro, ${b('mi è stato dato')}.`],
      ['La lettera è stato scritto.', 'La lettera è stata scritta.', `In inglese il participio non cambia; qui si accordano tutti e due: ${b('stata scritta')}.`],
      ['La casa è essendo costruita.', 'La casa viene costruita. · È in costruzione.', `<em lang="en">Is being built</em> non ha un calco: ${b('viene costruita')}, ${b('è in costruzione')}.`],
      ['Il modulo deve compilato.', 'Il modulo va compilato.', `<em lang="en">Must be filled in</em> → ${b('va compilato')} o ${i('deve essere compilato')}.`],
      ['Sono stato detto di aspettare.', 'Mi è stato detto di aspettare.', `<em lang="en">I was told</em> → ${b('mi è stato detto')}.`],
    ],
    en: [
      ['Sono stato dato un libro.', 'Mi è stato dato un libro.', `<em>I was given a book</em>: the book is the subject, ${b('mi è stato dato')}.`],
      ['La lettera è stato scritto.', 'La lettera è stata scritta.', `Both participles agree with ${i('lettera')}: ${b('stata scritta')}.`],
      ['La casa è essendo costruita.', 'La casa viene costruita. · È in costruzione.', `<em>Is being built</em> → ${b('viene costruita')} or ${b('è in costruzione')}.`],
      ['Il modulo deve compilato.', 'Il modulo va compilato.', `<em>Must be filled in</em> → ${b('va compilato')} or ${i('deve essere compilato')}.`],
      ['Sono stato detto di aspettare.', 'Mi è stato detto di aspettare.', `<em>I was told</em> → ${b('mi è stato detto')}.`],
    ],
    es: [
      ['Fu scritto per Cervantes.', 'Fu scritto da Cervantes.', `«Por» → ${b('da')}.`],
      ['La lettera è stata scritto.', 'La lettera è stata scritta.', `«Ha sido escrita»: en italiano los dos participios concuerdan, ${b('stata scritta')}.`],
      ['La porta sta chiusa.', 'La porta è chiusa.', `«La puerta está cerrada»: para el estado se usa ${b('essere')}, no ${i('stare')}.`],
      ['Il museo è stato venuto chiuso.', 'Il museo è stato chiuso.', `${i('Venire')} solo en tiempos simples: ${b('è stato chiuso')}.`],
      ['Si vende biciclette.', 'Si vendono biciclette.', `Como «se venden bicicletas»: ${b('si vendono')}.`],
    ],
    pt: [
      ['Si vende case.', 'Si vendono case.', `«Vende-se casas» é comum no Brasil, mas em italiano o verbo concorda: ${b('si vendono case')}.`],
      ['Fu scritto per Machado.', 'Fu scritto da Machado.', `«Por» → ${b('da')}.`],
      ['Il modulo precisa essere compilato.', 'Il modulo va compilato.', `«Precisa ser preenchido» → ${b('va compilato')} ou ${i('deve essere compilato')}.`],
      ['La lettera è stata scritto.', 'La lettera è stata scritta.', `Os dois particípios concordam: ${b('stata scritta')}.`],
      ['Il museo è venuto chiuso.', 'Il museo è stato chiuso.', `${i('Venire')} só nos tempos simples: ${b('è stato chiuso')}.`],
    ],
    fr: [
      ['Scritto per Hugo.', 'Scritto da Hugo.', `« Par » → ${b('da')}.`],
      ['Si vende case.', 'Si vendono case.', `« On vend des maisons » : avec ${i('si')} le verbe s’accorde, ${b('si vendono')}.`],
      ['Il museo è venuto chiuso.', 'Il museo è stato chiuso.', `${i('Venire')} seulement aux temps simples : ${b('è stato chiuso')}.`],
      ['Il modulo deve compilato.', 'Il modulo va compilato.', `« Doit être rempli » → ${b('va compilato')} ou ${i('deve essere compilato')}.`],
      ['Sono stato detto di aspettare.', 'Mi è stato detto di aspettare.', `« On m’a dit d’attendre » → ${b('mi è stato detto')} ou ${i('mi hanno detto')}.`],
    ],
    cs: [
      ['La lettera è stata scritta con Anna.', 'La lettera è stata scritta da Anna.', `„Napsán Annou“ (7. pád): původce je ${b('da')}, ne ${i('con')}.`],
      ['La lettera è stato scritto.', 'La lettera è stata scritta.', `Obě příčestí se shodují s ${i('lettera')}: ${b('stata scritta')}.`],
      ['Si vende case.', 'Si vendono case.', `„Prodávají se domy“: sloveso v množném čísle, ${b('si vendono')}.`],
      ['Il modulo deve compilato.', 'Il modulo va compilato.', `„Je třeba vyplnit“ → ${b('va compilato')}.`],
      ['Il museo è venuto chiuso.', 'Il museo è stato chiuso.', `${i('Venire')} jen v jednoduchých časech: ${b('è stato chiuso')}.`],
    ],
    pl: [
      ['La lettera è stata scritta per Anna.', 'La lettera è stata scritta da Anna.', `„Przez Annę” → ${b('da Anna')}; ${i('per Anna')} znaczy „dla Anny”.`],
      ['La lettera è stato scritto.', 'La lettera è stata scritta.', `Oba imiesłowy zgadzają się z ${i('lettera')}: ${b('stata scritta')}.`],
      ['Si vende case.', 'Si vendono case.', `„Sprzedaje się domy”: po włosku czasownik w liczbie mnogiej, ${b('si vendono')}.`],
      ['Il museo è venuto chiuso.', 'Il museo è stato chiuso.', `„Został zamknięty” → ${b('è stato chiuso')}; ${i('venire')} tylko w czasach prostych.`],
      ['Il modulo deve compilato.', 'Il modulo va compilato.', `„Trzeba wypełnić” → ${b('va compilato')}.`],
    ],
    tr: [
      ['La lettera è stato scritto.', 'La lettera è stata scritta.', `Ortaç özneye uyar: ${b('stata scritta')}.`],
      ['Scritta dalla parte di Anna.', 'Scritta da Anna.', `“Anna tarafından” → ${b('da Anna')}.`],
      ['Si vende case.', 'Si vendono case.', `“Satılık evler”: fiil çoğul, ${b('si vendono')}.`],
      ['Il modulo deve compilato.', 'Il modulo va compilato.', `“Doldurulmalı” → ${b('va compilato')}.`],
      ['Il museo è venuto chiuso.', 'Il museo è stato chiuso.', `${i('Venire')} sadece basit zamanlarda: ${b('è stato chiuso')}.`],
    ],
    de: [
      ['La casa è venuta costruita.', 'La casa è stata costruita.', `„Ist gebaut worden“: in zusammengesetzten Zeiten nur ${b('essere')}.`],
      ['Scritta di Anna.', 'Scritta da Anna.', `„Von Anna“ (Urheber) → ${b('da Anna')}.`],
      ['Si vende case.', 'Si vendono case.', `„Man verkauft Häuser“: das Verb richtet sich nach ${i('case')}, ${b('si vendono')}.`],
      ['Il modulo deve compilato.', 'Il modulo va compilato.', `„Muss ausgefüllt werden“ → ${b('va compilato')} oder ${i('deve essere compilato')}.`],
      ['La lettera è stato scritto.', 'La lettera è stata scritta.', `Beide Partizipien richten sich nach ${i('lettera')}: ${b('stata scritta')}.`],
    ],
    ja: [
      ['Sono stato rubato la bici.', 'Mi hanno rubato la bici.', `「自転車を盗まれた」：人は主語になれません。${b('mi hanno rubato la bici')} か ${i('la mia bici è stata rubata')}。`],
      ['La lettera è stato scritto.', 'La lettera è stata scritta.', `過去分詞は主語（${i('lettera')}、女性）に一致：${b('stata scritta')}。`],
      ['Scritta ad Anna.', 'Scritta da Anna.', `「アンナに書かれた」の「に」→ ${b('da')}。`],
      ['Si vende case.', 'Si vendono case.', `${i('case')} が複数なので ${b('si vendono')}。`],
      ['Il modulo deve compilato.', 'Il modulo va compilato.', `「記入しなければならない」→ ${b('va compilato')}。`],
    ],
  },
};

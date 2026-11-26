// Errori tipici della lezione «Il verbo avere» (A1), rifatta il 2026-11-26, per chi parla ogni lingua: cinque per
// lingua al posto dei tre o quattro di agosto. Stesso formato di errori-lingua.mjs, che li aggiunge a ERRORS (questa
// voce sostituisce quella vecchia); li inserisce scripts/add-language-notes.mjs. Il confronto con la lingua resta
// quello di confronti-lingua.mjs.
//
// Le trappole per lingua: inglese «I'm hungry», «have breakfast», «I need», la h; spagnolo «tener que», «hay»,
// «necesito»; portoghese «estar com fome», «ter que», «tem» = c'è; francese «il y a», «il a» senza h, «j'ai mal à»;
// tedesco «mir ist kalt», «es gibt», «ich brauche»; ceco e polacco «je mi», la risposta col solo verbo; turco «var»
// per il possesso e per il luogo; giapponese «いる» per la famiglia, «ある» per il luogo, la risposta col solo verbo.

const i = (s) => `<span lang="it">${s}</span>`;
const b = (s) => `<strong lang="it">${s}</strong>`;

const AV = 'grammatica/a1/verbo-avere.html';

export const ERRORS_VERBO_AVERE = {
  [AV]: {
    it: [
      ['Sono fame.', 'Ho fame.', `<em lang="en">I’m hungry</em> → ${b('avere')} + nome: ${b('ho fame')}.`],
      ['Ho colazione alle otto.', 'Faccio colazione alle otto.', `<em lang="en">Have breakfast</em> si dice con ${b('fare')}.`],
      ['Ho bisogno un caffè.', 'Ho bisogno di un caffè.', `<em lang="en">I need</em> → ${b('ho bisogno di')}, sempre con ${i('di')}.`],
      ['Hai una penna? Sì, ho.', 'Hai una penna? Sì, ce l’ho.', `<em lang="en">Yes, I have</em> → ${b('sì, ce l’ho')}.`],
      ['O un fratello.', 'Ho un fratello.', `La ${b('h')} non si sente, ma si scrive.`],
    ],
    en: [
      ['Sono fame.', 'Ho fame.', `<em>I’m hungry</em> → ${b('avere')} + noun: ${b('ho fame')}.`],
      ['Ho colazione alle otto.', 'Faccio colazione alle otto.', `<em>Have breakfast</em> uses ${b('fare')}.`],
      ['Ho bisogno un caffè.', 'Ho bisogno di un caffè.', `<em>I need</em> → ${b('ho bisogno di')}, always with ${i('di')}.`],
      ['Hai una penna? Sì, ho.', 'Hai una penna? Sì, ce l’ho.', `<em>Yes, I have</em> → ${b('sì, ce l’ho')}.`],
      ['O un fratello.', 'Ho un fratello.', `The ${b('h')} is silent, but you must write it.`],
    ],
    es: [
      ['Ho che lavorare.', 'Devo lavorare.', `<em>Tengo que</em> → ${b('dovere')}.`],
      ['Ha un bagno qui?', 'C’è un bagno qui?', `<em>¿Hay un baño?</em> → ${b('c’è')}; ${i('ha un bagno?')} significa «¿usted tiene un baño?».`],
      ['Ho bisogno un caffè.', 'Ho bisogno di un caffè.', `<em>Necesito un café</em> → ${b('ho bisogno di')}, con ${i('di')}.`],
      ['Ha il pelo corto.', 'Ha i capelli corti.', `<em>El pelo</em> de la cabeza es ${b('i capelli')}, en plural; ${i('il pelo')} es el de los animales.`],
      ['Lui a un cane.', 'Lui ha un cane.', `<em>Él tiene</em> → ${b('ha')}, con h; ${i('a')} es la preposición.`],
    ],
    pt: [
      ['Sono con fame.', 'Ho fame.', `«Estou com fome» → ${b('avere')}: ${b('ho fame')}.`],
      ['Sono con freddo.', 'Ho freddo.', `«Estou com frio» → ${b('ho freddo')}.`],
      ['Ho che lavorare.', 'Devo lavorare.', `«Tenho que» → ${b('dovere')}.`],
      ['Ha un bar qui vicino?', 'C’è un bar qui vicino?', `«Tem um bar aqui perto?» (existe) → ${b('c’è')}; ${i('ha un bar?')} quer dizer «ele tem um bar?».`],
      ['Ho bisogno un caffè.', 'Ho bisogno di un caffè.', `«Preciso de um café» → ${b('ho bisogno di')}, com ${i('di')}.`],
    ],
    fr: [
      ['Ha un libro sul tavolo.', 'C’è un libro sul tavolo.', `« Il y a » → ${b('c’è')} ; ${i('ha')} veut dire « il a ».`],
      ['Lui a un cane.', 'Lui ha un cane.', `« Il a » → ${b('ha')}, avec h ; ${i('a')} est la préposition « à ».`],
      ['Ho male alla testa.', 'Ho mal di testa.', `« J’ai mal à la tête » → ${b('mal di')} + partie du corps, sans article.`],
      ['Sono pressato.', 'Ho fretta.', `« Je suis pressé » → ${b('ho fretta')}, avec ${i('avere')}.`],
      ['Prendo la colazione alle otto.', 'Faccio colazione alle otto.', `« Prendre le petit-déjeuner » → ${b('fare colazione')}.`],
    ],
    cs: [
      ['Mi è trent’anni.', 'Ho trent’anni.', `„Je mi třicet“ → ${b('avere')}.`],
      ['Mi è freddo.', 'Ho freddo.', `„Je mi zima“ → ${b('ho freddo')}.`],
      ['Hai una penna? Sì, ho.', 'Hai una penna? Sì, ce l’ho.', `„Mám.“ italsky nestačí: ${b('sì, ce l’ho')}.`],
      ['Ho bisogno un caffè.', 'Ho bisogno di un caffè.', `„Potřebuji kávu“ → ${b('ho bisogno di')}, s ${i('di')}.`],
      ['O un fratello.', 'Ho un fratello.', `${b('H')} se nevyslovuje, ale píše se.`],
    ],
    pl: [
      ['Sono affamato.', 'Ho fame.', `„Jestem głodny” → ${b('ho fame')}; ${i('sono affamato')} brzmi jak „umieram z głodu”.`],
      ['Mi è freddo.', 'Ho freddo.', `„Jest mi zimno” → ${b('ho freddo')}.`],
      ['Hai una penna? Sì, ho.', 'Hai una penna? Sì, ce l’ho.', `„Mam.” po włosku nie wystarczy: ${b('sì, ce l’ho')}.`],
      ['Ho bisogno un caffè.', 'Ho bisogno di un caffè.', `„Potrzebuję kawy” → ${b('ho bisogno di')}, z ${i('di')}.`],
      ['O un fratello.', 'Ho un fratello.', `${b('H')} się nie wymawia, ale się ją pisze.`],
    ],
    tr: [
      ['C’è un gatto.', 'Ho un gatto.', `“Bir kedim var” (sahiplik) → ${b('ho un gatto')}. ${i('C’è un gatto')} “burada bir kedi var” demektir.`],
      ['Ha un bagno qui?', 'C’è un bagno qui?', `“Burada tuvalet var mı?” (yer) → ${b('c’è')}.`],
      ['Sono trent’anni.', 'Ho trent’anni.', `“Otuz yaşındayım” → yaş ${b('avere')} ile söylenir.`],
      ['Hai una penna? Sì, ho.', 'Hai una penna? Sì, ce l’ho.', `“Var.” İtalyancada yetmez: ${b('sì, ce l’ho')}.`],
      ['Ho bisogno un caffè.', 'Ho bisogno di un caffè.', `“Kahveye ihtiyacım var” → ${b('ho bisogno di')}, ${i('di')} ile.`],
    ],
    de: [
      ['Mi è freddo.', 'Ho freddo.', `„Mir ist kalt“ → ${b('ho freddo')}.`],
      ['Sono trent’anni.', 'Ho trent’anni.', `„Ich bin dreißig“ → das Alter mit ${b('avere')}.`],
      ['Ho bisogno un caffè.', 'Ho bisogno di un caffè.', `„Ich brauche einen Kaffee“ → ${b('ho bisogno di')}, mit ${i('di')}.`],
      ['Ha un bagno qui?', 'C’è un bagno qui?', `„Gibt es hier eine Toilette?“ → ${b('c’è')}.`],
      ['O un fratello.', 'Ho un fratello.', `Das ${b('h')} ist stumm, aber man schreibt es.`],
    ],
    ja: [
      ['C’è un fratello.', 'Ho un fratello.', `「兄がいます」（家族）は ${b('avere')} です。`],
      ['C’è una macchina.', 'Ho una macchina.', `「車があります」（持っている）は ${b('ho')}。${i('c’è')} は「そこに車がある」です。`],
      ['Sono trent’anni.', 'Ho trent’anni.', `「三十歳です」：年齢は ${b('avere')} です。`],
      ['Hai una penna? Sì, ho.', 'Hai una penna? Sì, ce l’ho.', `「うん、持ってる」は ${b('sì, ce l’ho')}。`],
      ['Ho bisogno un caffè.', 'Ho bisogno di un caffè.', `「コーヒーが必要」：${b('ho bisogno di')}、${i('di')} を忘れずに。`],
    ],
  },
};

// Errori tipici della lezione «C’è e ci sono» (A1), rifatta il 2026-11-26, per chi parla ogni lingua: cinque per
// lingua al posto dei quattro di agosto. Stesso formato di errori-lingua.mjs, che li aggiunge a ERRORS (questa voce
// sostituisce quella vecchia); li inserisce scripts/add-language-notes.mjs. Il confronto con la lingua resta quello di
// confronti-lingua.mjs.
//
// Le trappole per lingua: inglese «there's two», «people» plurale, «is Marco in?»; spagnolo e portoghese «hay / tem»
// invariabili, «había», «¿dónde hay…?»; francese «il y a» invariabile, «il y a deux ans», «les gens»; tedesco
// «es gibt» al singolare, «die Leute», «ist Marco da?»; ceco e polacco il «ci» che manca, «nie ma» + genitivo;
// turco «var» invariabile e per il possesso, il nome singolare dopo i numeri, il verbo in fondo; giapponese
// «ある・いる» invariabili, la famiglia con «いる», il verbo in fondo.

const i = (s) => `<span lang="it">${s}</span>`;
const b = (s) => `<strong lang="it">${s}</strong>`;

const CE = 'grammatica/a1/ce-ci-sono.html';

export const ERRORS_CE_CI_SONO = {
  [CE]: {
    it: [
      ['C’è due persone.', 'Ci sono due persone.', `Nell’inglese parlato si sente <em lang="en">there’s two people</em>; in italiano il plurale vuole sempre ${b('ci sono')}.`],
      ['Ci sono tanta gente.', 'C’è tanta gente.', `<em lang="en">People</em> è plurale, ma ${i('gente')} è singolare: ${b('c’è tanta gente')}.`],
      ['È una farmacia qui vicino?', 'C’è una farmacia qui vicino?', `<em lang="en">There is</em> non è ${i('è')}: senza ${i('ci')} vuol dire «è una farmacia?».`],
      ['Marco è?', 'C’è Marco?', `<em lang="en">Is Marco in?</em> si dice ${b('c’è Marco?')}`],
      ['Ci è un problema.', 'C’è un problema.', `Davanti a ${i('è')} il ${i('ci')} perde la ${i('i')}: ${b('c’è')}.`],
    ],
    en: [
      ['C’è due persone.', 'Ci sono due persone.', `In spoken English you hear <em>there’s two people</em>; in Italian a plural always takes ${b('ci sono')}.`],
      ['Ci sono tanta gente.', 'C’è tanta gente.', `<em>People</em> is plural, but ${i('gente')} is singular: ${b('c’è tanta gente')}.`],
      ['È una farmacia qui vicino?', 'C’è una farmacia qui vicino?', `<em>There is</em> is not ${i('è')}: without ${i('ci')} it means “is it a pharmacy?”.`],
      ['Marco è?', 'C’è Marco?', `<em>Is Marco in?</em> → ${b('c’è Marco?')}`],
      ['Ci è un problema.', 'C’è un problema.', `Before ${i('è')}, ${i('ci')} loses its ${i('i')}: ${b('c’è')}.`],
    ],
    es: [
      ['C’è due persone.', 'Ci sono due persone.', `<em>Hay</em> no cambia, ${i('c’è')} sí: con el plural, ${b('ci sono')}.`],
      ['Non c’è problemi.', 'Non ci sono problemi.', `<em>No hay problemas</em>: también en negativo el verbo va en plural.`],
      ['C’era molte persone.', 'C’erano molte persone.', `<em>Había</em> no cambia, pero ${i('c’era')} sí: en plural, ${b('c’erano')}.`],
      ['Dove c’è la stazione?', 'Dov’è la stazione?', `<em>¿Dónde está la estación?</em>: para algo concreto, ${b('è')}.`],
      ['Sta Marco?', 'C’è Marco?', `<em>¿Está Marco?</em> → ${b('c’è Marco?')}`],
    ],
    pt: [
      ['Ha una farmacia qui vicino?', 'C’è una farmacia qui vicino?', `O <em>tem</em> de «tem uma farmácia?» (existe) é ${b('c’è')}, não ${i('ha')}.`],
      ['C’è due persone.', 'Ci sono due persone.', `<em>Tem</em> não muda, ${i('c’è')} sim: no plural, ${b('ci sono')}.`],
      ['C’era molte persone.', 'C’erano molte persone.', `<em>Tinha</em> não muda, mas ${i('c’era')} sim: no plural, ${b('c’erano')}.`],
      ['Dove c’è la stazione?', 'Dov’è la stazione?', `<em>Onde fica a estação?</em>: para uma coisa concreta, ${b('è')}.`],
      ['Sta Marco?', 'C’è Marco?', `<em>O Marco está?</em> → ${b('c’è Marco?')}`],
    ],
    fr: [
      ['C’è due sedie.', 'Ci sono due sedie.', `« Il y a » ne change pas, ${i('c’è')} si : au pluriel, ${b('ci sono')}.`],
      ['Ci sono due anni, sono andato a Roma.', 'Due anni fa sono andato a Roma.', `« Il y a deux ans » (passé) → ${b('due anni fa')}.`],
      ['Non c’è di tempo.', 'Non c’è tempo.', `Pas de « de » après la négation : ${b('non c’è tempo')}.`],
      ['Ci sono tanta gente.', 'C’è tanta gente.', `« Les gens » est pluriel, ${i('gente')} est singulier : ${b('c’è tanta gente')}.`],
      ['Dove c’è la stazione?', 'Dov’è la stazione?', `« Où est la gare ? » : pour une chose précise, ${b('è')}.`],
    ],
    cs: [
      ['È una farmacia qui vicino?', 'C’è una farmacia qui vicino?', `Česky stačí „je“, italsky chybí ${b('ci')}: ${i('è una farmacia')} znamená „to je lékárna“.`],
      ['Sono due libri sul tavolo.', 'Sul tavolo ci sono due libri.', `„Na stole jsou dvě knihy“ → ${b('ci sono')}.`],
      ['C’è cinque persone.', 'Ci sono cinque persone.', `„Je tu pět lidí“: česky jednotné číslo, italsky ${b('ci sono')}.`],
      ['Non c’è problemi.', 'Non ci sono problemi.', `V záporu se číslo nemění: ${b('non ci sono')} problemi.`],
      ['È qui Marco?', 'C’è Marco?', `„Je tu Marco?“ → ${b('c’è Marco?')}`],
    ],
    pl: [
      ['È una farmacia qui vicino?', 'C’è una farmacia qui vicino?', `Po polsku wystarczy „jest”, po włosku brakuje ${b('ci')}: ${i('è una farmacia')} znaczy „to jest apteka”.`],
      ['Non c’è problemi.', 'Non ci sono problemi.', `„Nie ma problemów”: włoskie przeczenie zachowuje liczbę, ${b('non ci sono')}.`],
      ['C’è cinque persone.', 'Ci sono cinque persone.', `„Jest pięć osób”: po polsku liczba pojedyncza, po włosku ${b('ci sono')}.`],
      ['C’era tanti amici.', 'C’erano tanti amici.', `„Było wielu przyjaciół” → ${b('c’erano')}, w liczbie mnogiej.`],
      ['È qui Marco?', 'C’è Marco?', `„Czy jest Marco?” → ${b('c’è Marco?')}`],
    ],
    tr: [
      ['C’è due libri.', 'Ci sono due libri.', `“İki kitap var”: “var” değişmez, İtalyancada çoğul için ${b('ci sono')}.`],
      ['Ci sono due libro.', 'Ci sono due libri.', `Sayıdan sonra isim de çoğul olur: ${b('libri')}.`],
      ['C’è un gatto.', 'Ho un gatto.', `“Bir kedim var” sahiplik anlatır: ${b('ho un gatto')}.`],
      ['Una farmacia qui vicino c’è?', 'C’è una farmacia qui vicino?', `Fiil sona gelmez: ${b('c’è')} baştadır.`],
      ['C’era tanti amici.', 'C’erano tanti amici.', `“Çok arkadaş vardı” → ${b('c’erano')}, çoğul.`],
    ],
    de: [
      ['C’è due sedie.', 'Ci sono due sedie.', `„Es gibt“ bleibt im Singular, ${i('c’è')} nicht: ${b('ci sono')}.`],
      ['È una farmacia qui vicino?', 'C’è una farmacia qui vicino?', `„Es gibt“ ist nicht „es ist“: ohne ${i('ci')} heißt es „ist das eine Apotheke?“.`],
      ['Ci sono tanta gente.', 'C’è tanta gente.', `„Die Leute“ ist Plural, ${i('gente')} Singular: ${b('c’è tanta gente')}.`],
      ['Ci non sono problemi.', 'Non ci sono problemi.', `${b('Non')} steht ganz vorne, vor ${i('ci')}.`],
      ['È Marco qui?', 'C’è Marco?', `„Ist Marco da?“ → ${b('c’è Marco?')}`],
    ],
    ja: [
      ['C’è due libri.', 'Ci sono due libri.', `「二冊ある」：複数なら ${b('ci sono')} です。`],
      ['Sul tavolo un libro c’è.', 'Sul tavolo c’è un libro.', `動詞は最後に置きません。${b('c’è')} のあとに名詞が来ます。`],
      ['C’è un fratello.', 'Ho un fratello.', `「兄がいます」（家族）は ${b('ho')} です。`],
      ['Dove c’è la stazione?', 'Dov’è la stazione?', `「駅はどこですか？」：知っているものは ${b('è')}。`],
      ['Marco è?', 'C’è Marco?', `「マルコさんいますか？」→ ${b('c’è Marco?')}`],
    ],
  },
};

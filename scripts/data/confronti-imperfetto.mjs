// Errori tipici della lezione «L'imperfetto» (A2), rifatta il 2026-11-24, per chi parla ogni lingua: cinque per
// lingua al posto dei due o tre di ottobre. Stesso formato di errori-lingua.mjs, che li aggiunge a ERRORS; li
// inserisce scripts/add-language-notes.mjs. Il confronto con la lingua resta quello di confronti-lingua.mjs.
//
// Le trappole per lingua: inglese «used to», «was -ing», il simple past per le abitudini; spagnolo e portoghese
// «yo / eu era» uguale a «él / ele era», l'accento scritto, il pretérito indefinido; francese «ils parlaient»,
// «j'étais en train de»; ceco e polacco il vid perfettivo e la durata; tedesco il Perfekt per tutto, «es war kalt»;
// turco «-iyordu / -erdi»; giapponese «〜た» per tutto.

const i = (s) => `<span lang="it">${s}</span>`;
const b = (s) => `<strong lang="it">${s}</strong>`;

const IM = 'grammatica/a2/imperfetto.html';

export const ERRORS_IMPERFETTO = {
  [IM]: {
    it: [
      ['Usavo giocare a calcio.', 'Giocavo a calcio.', `<em lang="en">Used to</em> non si traduce: basta ${b('l’imperfetto')}.`],
      ['Ero leggendo quando è arrivato Marco.', 'Leggevo quando è arrivato Marco.', `<em lang="en">I was reading</em> → ${b('leggevo')} o ${i('stavo leggendo')}, mai ${i('ero')} + gerundio.`],
      ['Da bambino ho giocato a calcio ogni giorno.', 'Da bambino giocavo a calcio ogni giorno.', `Un’abitudine (<em lang="en">every day</em>) vuole ${b('l’imperfetto')}, anche se l’inglese usa il <em lang="en">simple past</em>.`],
      ['Io era stanco.', 'Io ero stanco.', `Con ${i('io')}: ${b('ero')}; ${i('era')} è «lui, lei».`],
      ['Ieri è stato freddo.', 'Ieri faceva freddo.', `<em lang="en">It was cold</em>: una descrizione, ${b('imperfetto')}, e il tempo con ${i('fare')}.`],
    ],
    en: [
      ['Usavo giocare a calcio.', 'Giocavo a calcio.', `<em>Used to</em> isn’t translated: the ${b('imperfetto')} is enough.`],
      ['Ero leggendo quando è arrivato Marco.', 'Leggevo quando è arrivato Marco.', `<em>I was reading</em> → ${b('leggevo')} or ${i('stavo leggendo')}, never ${i('ero')} + gerund.`],
      ['Da bambino ho giocato a calcio ogni giorno.', 'Da bambino giocavo a calcio ogni giorno.', `A habit (<em>every day</em>) needs the ${b('imperfetto')}, even where English uses the simple past.`],
      ['Io era stanco.', 'Io ero stanco.', `<em>I was</em> → ${b('ero')}; ${i('era')} is “he / she was”.`],
      ['Ieri è stato freddo.', 'Ieri faceva freddo.', `<em>It was cold</em>: a description, ${b('imperfetto')}, and weather with ${i('fare')}.`],
    ],
    es: [
      ['Io giocava a calcio.', 'Io giocavo a calcio.', `<em>Yo jugaba</em> y <em>él jugaba</em> son iguales en español; en italiano la primera persona termina en ${b('-o')}.`],
      ['Io era stanco.', 'Io ero stanco.', `<em>Yo era / yo estaba</em> → ${b('io ero')}; ${i('era')} es «él era».`],
      ['Noi giocàvamo.', 'Noi giocavamo.', `En español se escribe la tilde (<em>jugábamos</em>); en italiano no, y el acento cae en ${b('-va-')}.`],
      ['Io mangieva.', 'Io mangiavo.', `<em>Comía</em>: en italiano se mantiene la vocal del infinitivo, ${b('mangia-vo')}.`],
      ['Ieri ho visto un film mentre ho cenato.', 'Ieri ho visto un film mentre cenavo.', `Con ${i('mentre')}, la acción que dura va en ${b('imperfetto')}.`],
    ],
    pt: [
      ['Io giocava a calcio.', 'Io giocavo a calcio.', `<em>Eu jogava</em> e <em>ele jogava</em> são iguais em português; em italiano a primeira pessoa termina em ${b('-o')}.`],
      ['Io era stanco.', 'Io ero stanco.', `<em>Eu era / eu estava</em> → ${b('io ero')}; ${i('era')} é «ele era».`],
      ['Noi giocàvamo.', 'Noi giocavamo.', `Em português se escreve o acento (<em>jogávamos</em>); em italiano não, e a tônica cai em ${b('-va-')}.`],
      ['Io dormeva.', 'Io dormivo.', `<em>Eu dormia</em>: em italiano fica a vogal do infinitivo, ${b('dormi-vo')}.`],
      ['Stavo stanco.', 'Ero stanco.', `<em>Eu estava cansado</em> → ${b('ero stanco')}, com ${i('essere')}.`],
    ],
    fr: [
      ['Io era stanco.', 'Io ero stanco.', `<em>J’étais</em> → ${b('io ero')} ; ${i('era')} correspond à <em>il était</em>.`],
      ['Loro parlavono.', 'Loro parlavano.', `<em>Ils parlaient</em> → terminaison ${b('-avano')}.`],
      ['Io finiscevo.', 'Io finivo.', `<em>Je finissais</em>, mais en italien pas de ${i('-isc-')} : ${b('finivo')}.`],
      ['Ero in treno di leggere.', 'Stavo leggendo.', `<em>J’étais en train de lire</em> → ${b('stavo leggendo')} ou ${i('leggevo')}.`],
      ['Ho abitato a Roma quando ero piccolo.', 'Abitavo a Roma quando ero piccolo.', `Une situation qui dure, sans fin précise → ${b('imperfetto')}, comme en français.`],
    ],
    cs: [
      ['Da bambino ho giocato a calcio ogni giorno.', 'Da bambino giocavo a calcio ogni giorno.', `<em>Hrával jsem</em> (zvyk, nedokonavé) → ${b('imperfetto')}.`],
      ['Ho letto quando è arrivato Marco.', 'Leggevo quando è arrivato Marco.', `<em>Četl jsem, když…</em> (děj v průběhu) → ${b('leggevo')}.`],
      ['Io era stanco.', 'Io ero stanco.', `<em>Byl jsem</em> → ${b('io ero')}; ${i('era')} je <em>byl</em> (on).`],
      ['Abitavo a Roma per due anni.', 'Ho abitato a Roma per due anni.', `<em>Bydlel jsem tam dva roky</em> (přesná doba) → ${b('passato prossimo')}.`],
      ['Ieri è stato freddo.', 'Ieri faceva freddo.', `<em>Byla zima</em> (popis) → ${b('faceva freddo')}.`],
    ],
    pl: [
      ['Da bambino ho giocato a calcio ogni giorno.', 'Da bambino giocavo a calcio ogni giorno.', `<em>Grałem codziennie</em> (zwyczaj, niedokonany) → ${b('imperfetto')}.`],
      ['Ho letto quando è arrivato Marco.', 'Leggevo quando è arrivato Marco.', `<em>Czytałem, kiedy…</em> (czynność w toku) → ${b('leggevo')}.`],
      ['Io era stanco.', 'Io ero stanco.', `<em>Byłem</em> → ${b('io ero')}; ${i('era')} to <em>był</em> (on).`],
      ['Abitavo a Roma per due anni.', 'Ho abitato a Roma per due anni.', `<em>Mieszkałem tam dwa lata</em> (dokładny czas) → ${b('passato prossimo')}.`],
      ['Ieri è stato freddo.', 'Ieri faceva freddo.', `<em>Było zimno</em> (opis) → ${b('faceva freddo')}.`],
    ],
    tr: [
      ['Da bambino ho giocato a calcio ogni giorno.', 'Da bambino giocavo a calcio ogni giorno.', `<em>Oynardım</em> (alışkanlık) → ${b('imperfetto')}.`],
      ['Ho letto quando è arrivato Marco.', 'Leggevo quando è arrivato Marco.', `<em>Okuyordum</em> (süren eylem) → ${b('leggevo')}.`],
      ['Io era stanco.', 'Io ero stanco.', `<em>Yorgundum</em> → ${b('io ero')}; ${i('era')} üçüncü tekil kişidir.`],
      ['Abitavo a Roma per due anni.', 'Ho abitato a Roma per due anni.', `<em>İki yıl oturdum</em> (belli süre) → ${b('passato prossimo')}.`],
      ['Ieri è stato freddo.', 'Ieri faceva freddo.', `<em>Hava soğuktu</em> (betimleme) → ${b('faceva freddo')}.`],
    ],
    de: [
      ['Da bambino ho giocato sempre a calcio.', 'Da bambino giocavo sempre a calcio.', `Gewohnheit (<em>früher immer</em>) → ${b('imperfetto')}, auch wenn man auf Deutsch Perfekt sagt.`],
      ['Ho letto quando è arrivato Marco.', 'Leggevo quando è arrivato Marco.', `<em>Ich las gerade</em> → ${b('leggevo')}.`],
      ['Ieri sera è stato freddo.', 'Ieri sera faceva freddo.', `Beschreibungen in der Vergangenheit → ${b('imperfetto')}, und Wetter mit ${i('fare')}.`],
      ['Io era stanco.', 'Io ero stanco.', `<em>Ich war</em> → ${b('io ero')}; ${i('era')} ist <em>er / sie war</em>.`],
      ['Ho avuto dieci anni.', 'Avevo dieci anni.', `<em>Ich war zehn</em> (Alter) → ${b('avevo')} dieci anni.`],
    ],
    ja: [
      ['Da bambino ho giocato a calcio ogni giorno.', 'Da bambino giocavo a calcio ogni giorno.', `「よくしていた」（習慣）は ${b('imperfetto')} です。`],
      ['Ho letto quando è arrivato Marco.', 'Leggevo quando è arrivato Marco.', `「読んでいた」（続いていたこと）は ${b('leggevo')}。`],
      ['Ieri sera è stato freddo.', 'Ieri sera faceva freddo.', `「寒かった」（様子）は ${b('imperfetto')} で、天気は ${i('fare')} を使います。`],
      ['Io era stanco.', 'Io ero stanco.', `「私は疲れていた」は ${b('io ero')}。${i('era')} は「彼・彼女」です。`],
      ['Ho avuto dieci anni.', 'Avevo dieci anni.', `「10歳だった」（年齢）は ${b('avevo')} dieci anni。`],
    ],
  },
};

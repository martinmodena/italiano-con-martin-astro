// Errori tipici della lezione «I pronomi diretti» (A2), rifatta il 2026-11-25, per chi parla ogni lingua: cinque per
// lingua al posto dei tre o quattro di ottobre. Stesso formato di errori-lingua.mjs, che li aggiunge a ERRORS (questa
// voce sostituisce quella vecchia); li inserisce scripts/add-language-notes.mjs. Il confronto con la lingua resta
// quello di confronti-lingua.mjs.
//
// Le trappole per lingua: inglese il pronome dopo il verbo, «it», «wait for»; spagnolo «los / las», leísmo, «a»
// personale; portoghese brasiliano «eu vi ele» (il pronome soggetto come oggetto) e il pronome in mezzo; francese
// «les» unico, il pronome davanti all'infinito; tedesco il genere tedesco, «helfen / danken» con il dativo; ceco e
// polacco il pronome sottinteso, «pomoct / pomagać» con il dativo; turco e giapponese il pronome sottinteso e il genere.

const i = (s) => `<span lang="it">${s}</span>`;
const b = (s) => `<strong lang="it">${s}</strong>`;

const PD = 'grammatica/a2/pronomi-diretti.html';

export const ERRORS_PRONOMI_DIRETTI = {
  [PD]: {
    it: [
      ['Vedo lo ogni giorno.', 'Lo vedo ogni giorno.', `<em lang="en">I see him</em>: in italiano il pronome va ${b('prima')} del verbo.`],
      ['La pizza? Lo mangio.', 'La pizza? La mangio.', `<em lang="en">It</em> si sceglie secondo il genere: ${i('pizza')} è femminile.`],
      ['Ho visto la ieri.', 'L’ho vista ieri.', 'Pronome prima dell’ausiliare e participio accordato.'],
      ['Aspetto per l’autobus.', 'Aspetto l’autobus.', `<em lang="en">Wait for</em>: ${i('aspettare')} non vuole preposizioni, ${b('lo aspetto')}.`],
      ['Li ho comprato.', 'Li ho comprati.', `Con ${i('li')} il participio va al plurale.`],
    ],
    en: [
      ['Vedo lo ogni giorno.', 'Lo vedo ogni giorno.', `<em>I see him</em>: in Italian the pronoun comes ${b('before')} the verb.`],
      ['La pizza? Lo mangio.', 'La pizza? La mangio.', `<em>It</em> depends on gender: ${i('pizza')} is feminine.`],
      ['Ho visto la ieri.', 'L’ho vista ieri.', 'Pronoun before the auxiliary, and the participle agrees.'],
      ['Aspetto per l’autobus.', 'Aspetto l’autobus.', `<em>Wait for</em>: ${i('aspettare')} takes no preposition, ${b('lo aspetto')}.`],
      ['Li ho comprato.', 'Li ho comprati.', `With ${i('li')} the participle goes plural.`],
    ],
    es: [
      ['Los compro.', 'Li compro.', `<em>Los</em> → ${b('li')}; <em>las</em> → ${i('le')}.`],
      ['Marco le vedo spesso.', 'Marco lo vedo spesso.', `Sin leísmo: persona masculina → ${b('lo')}.`],
      ['Vedo a Maria.', 'Vedo Maria.', `Sin «a» personal: ${b('vedo Maria')} → ${i('la vedo')}.`],
      ['La ho visto.', 'L’ho vista.', '<em>La he visto</em>: en italiano se apostrofa y el participio concuerda.'],
      ['Le chiavi? Le ho trovato.', 'Le chiavi? Le ho trovate.', `Con ${i('le')} el participio va en femenino plural: ${b('trovate')}.`],
    ],
    pt: [
      ['Ho visto lui ieri.', 'L’ho visto ieri.', `«Eu vi ele»: em italiano o objeto é ${b('lo')}, antes do verbo.`],
      ['Posso ti chiamare.', 'Ti posso chiamare.', `«Posso te ligar»: o pronome vai antes de ${i('posso')} ou depois do infinitivo, ${b('posso chiamarti')}.`],
      ['La pizza? Ho mangiato.', 'La pizza? L’ho mangiata.', `O pronome não se omite: ${b('l’ho mangiata')}, com o particípio no feminino.`],
      ['Los compro.', 'Li compro.', `«Os compro» → ${b('li')}; «as compro» → ${i('le')}.`],
      ['Li ho comprato.', 'Li ho comprati.', `Com ${i('li')} o particípio vai para o plural.`],
    ],
    fr: [
      ['I libri? Le compro.', 'I libri? Li compro.', `« Les » a deux formes : ${b('li')} au masculin, ${i('le')} au féminin.`],
      ['Voglio la vedere.', 'Voglio vederla.', `« Je veux la voir » : le pronom se colle à l’infinitif, ${b('vederla')}, ou va avant, ${i('la voglio vedere')}.`],
      ['Le ho visto ieri.', 'L’ho vista ieri.', `${i('La')} s’élide, ${i('le')} (pluriel) jamais : ${b('l’ho vista')}.`],
      ['Ti chiamo te.', 'Chiamo te.', `Pas de doublement comme « je t’appelle, toi » : ${b('chiamo te')} ou ${i('ti chiamo')}.`],
      ['Li ho comprato.', 'Li ho comprati.', `Avec ${i('li')} le participe s’accorde au pluriel, à l’écrit comme à l’oral.`],
    ],
    cs: [
      ['Hai visto il film? Sì, ho visto.', 'Hai visto il film? Sì, l’ho visto.', `„Viděl.“: italsky zájmeno nesmí chybět, ${b('l’ho visto')}.`],
      ['Gli aiuto.', 'Lo aiuto.', `„Pomáhám mu“ (3. pád): ${i('aiutare')} má přímý předmět, ${b('lo aiuto')}.`],
      ['Vedo lo ogni giorno.', 'Lo vedo ogni giorno.', `Zájmeno stojí ${b('před')} slovesem.`],
      ['La macchina? Lo prendo.', 'La macchina? La prendo.', `Rozhoduje italský rod: ${i('macchina')} je ženského rodu.`],
      ['Li ho comprato.', 'Li ho comprati.', `S ${i('li')} je příčestí v množném čísle.`],
    ],
    pl: [
      ['Hai visto il film? Sì, ho visto.', 'Hai visto il film? Sì, l’ho visto.', `„Widziałem.“: po włosku zaimek musi być, ${b('l’ho visto')}.`],
      ['Gli aiuto.', 'Lo aiuto.', `„Pomagam mu“ (celownik): ${i('aiutare')} ma dopełnienie bliższe, ${b('lo aiuto')}.`],
      ['Vedo lo ogni giorno.', 'Lo vedo ogni giorno.', `Zaimek stoi ${b('przed')} czasownikiem.`],
      ['La macchina? Lo prendo.', 'La macchina? La prendo.', `Decyduje włoski rodzaj: ${i('macchina')} jest żeńska.`],
      ['Li ho comprato.', 'Li ho comprati.', `Z ${i('li')} imiesłów jest w liczbie mnogiej.`],
    ],
    tr: [
      ['Hai visto il film? Sì, ho visto.', 'Hai visto il film? Sì, l’ho visto.', `“Gördüm.”: İtalyancada zamir atlanmaz, ${b('l’ho visto')}.`],
      ['La pizza? Lo mangio.', 'La pizza? La mangio.', `“Onu” cinsiyete göre değişir: ${i('pizza')} dişildir, ${b('la')}.`],
      ['Gli aiuto.', 'Lo aiuto.', `“Ona yardım ediyorum”: ${i('aiutare')} doğrudan nesne alır, ${b('lo aiuto')}.`],
      ['Ho visto la ieri.', 'L’ho vista ieri.', 'Zamir yardımcı fiilden önce gelir ve ortaç uyum gösterir.'],
      ['Li ho comprato.', 'Li ho comprati.', `${i('Li')} ile ortaç çoğul olur.`],
    ],
    de: [
      ['Gli aiuto.', 'Lo aiuto.', `„Ich helfe ihm“ (Dativ): ${i('aiutare')} hat ein direktes Objekt, ${b('lo aiuto')}.`],
      ['Il giornale? La leggo.', 'Il giornale? Lo leggo.', `Es zählt das italienische Genus: ${i('il giornale')} ist maskulin (die Zeitung).`],
      ['Vedo lo ogni giorno.', 'Lo vedo ogni giorno.', `Das Pronomen steht ${b('vor')} dem Verb.`],
      ['Gli ringrazio.', 'Lo ringrazio.', `„Ich danke ihm“ (Dativ): ${i('ringraziare')} ist direkt, ${b('lo ringrazio')}.`],
      ['Li ho comprato.', 'Li ho comprati.', `Mit ${i('li')} steht das Partizip im Plural.`],
    ],
    ja: [
      ['Hai visto il film? Sì, ho visto.', 'Hai visto il film? Sì, l’ho visto.', `「うん、見た」：イタリア語では代名詞を省略しません：${b('l’ho visto')}。`],
      ['La pizza? Lo mangio.', 'La pizza? La mangio.', `「それを」は名詞の性で変わります：${i('pizza')} は女性名詞なので ${b('la')}。`],
      ['Ho visto la ieri.', 'L’ho vista ieri.', '代名詞は助動詞の前。過去分詞も一致させます。'],
      ['Li ho comprato.', 'Li ho comprati.', `${i('li')} のときは過去分詞も複数形。`],
      ['Lo voglio vederlo.', 'Lo voglio vedere.', `代名詞は一回だけ：${b('lo voglio vedere')} または ${i('voglio vederlo')}。`],
    ],
  },
};

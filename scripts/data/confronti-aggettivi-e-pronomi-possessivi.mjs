// Errori tipici della lezione «Aggettivi e pronomi possessivi» (A1), rifatta il 2026-11-26, per chi parla ogni lingua:
// cinque per lingua al posto dei tre o quattro di agosto. Stesso formato di errori-lingua.mjs, che li aggiunge a ERRORS
// (questa voce sostituisce quella vecchia); li inserisce scripts/add-language-notes.mjs. Il confronto con la lingua
// resta quello di confronti-lingua.mjs.
//
// Le trappole per lingua: inglese l'articolo, his / her, «a friend of mine», «their»; spagnolo «mi / mis» senza
// articolo e senza genere, «su» = loro; portoghese «sua» = di te, «o irmão dela», «a minha mãe»; francese «mon amie»,
// «leur / leurs»; ceco e polacco «svůj / swój» per tutte le persone, l'articolo che manca; turco i suffissi senza
// articolo né genere; tedesco «sein / ihr» secondo chi possiede, «Ihre» di cortesia; giapponese il possessivo
// sottinteso con la famiglia, «〜の».

const i = (s) => `<span lang="it">${s}</span>`;
const b = (s) => `<strong lang="it">${s}</strong>`;

const AP = 'grammatica/a1/aggettivi-e-pronomi-possessivi.html';

export const ERRORS_POSSESSIVI = {
  [AP]: {
    it: [
      ['Mio libro è sul tavolo.', 'Il mio libro è sul tavolo.', `<em lang="en">My book</em>: in italiano ci vuole l’articolo, ${b('il mio')}.`],
      ['Anna e sua fratello.', 'Anna e suo fratello.', `<em lang="en">Her brother</em>: conta ${i('fratello')}, che è maschile.`],
      ['La mia madre è medico.', 'Mia madre è medico.', `Con la famiglia al singolare niente articolo: ${b('mia madre')}.`],
      ['Un amico di mio.', 'Un mio amico.', `<em lang="en">A friend of mine</em> → ${b('un mio amico')}.`],
      ['Loro casa è grande.', 'La loro casa è grande.', `<em lang="en">Their house</em>: ${i('loro')} vuole sempre l’articolo.`],
    ],
    en: [
      ['Mio libro è sul tavolo.', 'Il mio libro è sul tavolo.', `<em>My book</em>: Italian needs the article, ${b('il mio')}.`],
      ['Anna e sua fratello.', 'Anna e suo fratello.', `<em>Her brother</em>: what counts is ${i('fratello')}, which is masculine.`],
      ['La mia madre è medico.', 'Mia madre è medico.', `Singular family nouns take no article: ${b('mia madre')}.`],
      ['Un amico di mio.', 'Un mio amico.', `<em>A friend of mine</em> → ${b('un mio amico')}.`],
      ['Loro casa è grande.', 'La loro casa è grande.', `<em>Their house</em>: ${i('loro')} always takes the article.`],
    ],
    es: [
      ['Mio libro è sul tavolo.', 'Il mio libro è sul tavolo.', `Calco de «mi libro»: en italiano hace falta el artículo, ${b('il mio')}.`],
      ['Miei fratelli sono alti.', 'I miei fratelli sono alti.', `«Mis hermanos»: en plural los familiares llevan artículo.`],
      ['Ecco le mie libri.', 'Ecco i miei libri.', `«Mis» sirve para los dos géneros; en italiano ${b('miei')} (masculino) o ${i('mie')} (femenino).`],
      ['Marco e Anna amano sua figlia.', 'Marco e Anna amano la loro figlia.', `«Su hija» (de ellos) → ${b('la loro figlia')}; ${i('sua')} es solo de él o de ella.`],
      ['Loro casa è grande.', 'La loro casa è grande.', `«Su casa» (de ellos) → ${b('la loro casa')}, siempre con artículo.`],
    ],
    pt: [
      ['Maria, è sua questa borsa?', 'Maria, è tua questa borsa?', `«É sua?» (de você) → ${b('tua')}. ${i('Sua')} quer dizer «dele, dela».`],
      ['Il fratello di lei è medico.', 'Suo fratello è medico.', `«O irmão dela» → ${b('suo fratello')}: o italiano não usa «dela» depois do nome.`],
      ['Mio libro è sul tavolo.', 'Il mio libro è sul tavolo.', `«Meu livro»: em italiano é preciso o artigo, ${b('il mio')}.`],
      ['La mia madre è medico.', 'Mia madre è medico.', `«A minha mãe»: com a família no singular, sem artigo, ${b('mia madre')}.`],
      ['La casa di loro è grande.', 'La loro casa è grande.', `«A casa deles» → ${b('la loro casa')}.`],
    ],
    fr: [
      ['Mio libro è sul tavolo.', 'Il mio libro è sul tavolo.', `Calque de « mon livre » : il faut l’article, ${b('il mio')}.`],
      ['Il mio amica.', 'La mia amica.', `« Mon amie » : en italien le féminin reste féminin, ${b('la mia')}.`],
      ['Loro casa è grande.', 'La loro casa è grande.', `« Leur maison » → ${b('la loro casa')}, avec l’article.`],
      ['I lori figli.', 'I loro figli.', `« Leurs enfants » : ${b('loro')} ne change jamais.`],
      ['Un amico a me.', 'Un mio amico.', `« Un ami à moi » → ${b('un mio amico')}.`],
    ],
    cs: [
      ['Mio libro è sul tavolo.', 'Il mio libro è sul tavolo.', `Čeština členy nemá, italština ho před přivlastňovacím zájmenem potřebuje: ${b('il mio')}.`],
      ['Anna e sua fratello.', 'Anna e suo fratello.', `„Její bratr“: rozhoduje rod slova ${i('fratello')} (mužský).`],
      ['Amo il suo lavoro: faccio l’insegnante.', 'Amo il mio lavoro: faccio l’insegnante.', `„Mám rád svou práci“: „svůj“ se překládá podle osoby, tady ${b('il mio')}.`],
      ['La mia madre è medico.', 'Mia madre è medico.', `Příbuzní v jednotném čísle jsou bez členu: ${b('mia madre')}.`],
      ['Miei fratelli sono alti.', 'I miei fratelli sono alti.', `V množném čísle se člen vrací: ${b('i miei fratelli')}.`],
    ],
    pl: [
      ['Mio libro è sul tavolo.', 'Il mio libro è sul tavolo.', `Polski nie ma rodzajników, ale włoski potrzebuje ich przed zaimkiem: ${b('il mio')}.`],
      ['Anna e sua fratello.', 'Anna e suo fratello.', `„Jej brat”: decyduje rodzaj słowa ${i('fratello')} (męski).`],
      ['Amo il suo lavoro: faccio l’insegnante.', 'Amo il mio lavoro: faccio l’insegnante.', `„Kocham swoją pracę”: „swój” tłumaczy się według osoby, tu ${b('il mio')}.`],
      ['La mia madre è medico.', 'Mia madre è medico.', `Członkowie rodziny w liczbie pojedynczej są bez rodzajnika: ${b('mia madre')}.`],
      ['Miei fratelli sono alti.', 'I miei fratelli sono alti.', `W liczbie mnogiej rodzajnik wraca: ${b('i miei fratelli')}.`],
    ],
    tr: [
      ['Mio libro è sul tavolo.', 'Il mio libro è sul tavolo.', `“Kitabım”: İtalyancada tanımlık da gerekir, ${b('il mio')}.`],
      ['Marco e suo sorella.', 'Marco e sua sorella.', `İyelik sıfatı ismin cinsiyetine uyar: ${i('sorella')} dişildir, ${b('sua')}.`],
      ['La mia madre è medico.', 'Mia madre è medico.', `Aile üyeleri tekilken tanımlıksızdır: ${b('mia madre')}.`],
      ['Miei amici sono qui.', 'I miei amici sono qui.', `“Arkadaşlarım”: çoğulda tanımlık gerekir, ${b('i miei')}.`],
      ['Loro casa è grande.', 'La loro casa è grande.', `“Onların evi” → ${b('la loro casa')}, tanımlıkla.`],
    ],
    de: [
      ['Mio libro è sul tavolo.', 'Il mio libro è sul tavolo.', `„Mein Buch“: im Italienischen mit Artikel, ${b('il mio')}.`],
      ['Anna e sua fratello.', 'Anna e suo fratello.', `„Ihr Bruder“: Es zählt ${i('fratello')} (männlich), nicht Anna.`],
      ['Signora, è la loro borsa?', 'Signora, è la Sua borsa?', `„Ist das Ihre Tasche?“ (Sie) → ${b('la Sua')}; ${i('loro')} heißt nur „ihr“ von mehreren Personen.`],
      ['Un amico di me.', 'Un mio amico.', `„Ein Freund von mir“ → ${b('un mio amico')}.`],
      ['La mia madre è medico.', 'Mia madre è medico.', `Familie im Singular ohne Artikel: ${b('mia madre')}.`],
    ],
    ja: [
      ['Chiamo madre.', 'Chiamo mia madre.', `「母に電話します」：イタリア語では ${b('mia')} を省きません。`],
      ['Mio libro è sul tavolo.', 'Il mio libro è sul tavolo.', `「私の本」でも冠詞が必要です：${b('il mio')}。`],
      ['Anna e sua fratello.', 'Anna e suo fratello.', `「彼女の兄」：${i('fratello')} が男性名詞なので ${b('suo')}。`],
      ['Un amico di mio.', 'Un mio amico.', `「私の友だちの一人」→ ${b('un mio amico')}。`],
      ['Loro casa è grande.', 'La loro casa è grande.', `「彼らの家」：${i('loro')} にはいつも冠詞がつきます。`],
    ],
  },
};

// Errori tipici della lezione «Il verbo essere» (A1), rifatta il 2026-11-26, per chi parla ogni lingua: cinque per
// lingua al posto dei tre o quattro di agosto. Stesso formato di errori-lingua.mjs, che li aggiunge a ERRORS (questa
// voce sostituisce quella vecchia); li inserisce scripts/add-language-notes.mjs. Il confronto con la lingua resta
// quello di confronti-lingua.mjs.
//
// Le trappole per lingua: inglese «it's me», l'età, «I'm cold», «I'm fine», l'accordo; spagnolo e portoghese
// «estar» + aggettivo, «estar bien», il plurale in -s, l'accento di è; francese «c'est moi», «je vais bien», il «vous»
// di cortesia; tedesco l'età, «mir ist kalt», «es ist kalt», il «Sie» al plurale, l'accordo; ceco «je mi»,
// «mám se», il «vy» di cortesia; polacco «jest mi zimno», «z Polski»; turco il verbo che manca alla terza persona,
// l'età, il genere, il «siz»; giapponese l'età, «元気です», «私はコーヒーです», il tempo, il genere.

const i = (s) => `<span lang="it">${s}</span>`;
const b = (s) => `<strong lang="it">${s}</strong>`;

const ES = 'grammatica/a1/verbo-essere.html';

export const ERRORS_VERBO_ESSERE = {
  [ES]: {
    it: [
      ['È io.', 'Sono io.', `<em lang="en">It’s me</em>: il verbo si accorda con ${i('io')}, ${b('sono io')}.`],
      ['Sono trent’anni.', 'Ho trent’anni.', `<em lang="en">I’m thirty</em>: l’età si dice con ${b('avere')}.`],
      ['Sono freddo.', 'Ho freddo.', `<em lang="en">I’m cold</em> → ${b('ho freddo')}. ${i('Sono freddo')} vuol dire «sono una persona fredda».`],
      ['Come sei? Sono bene.', 'Come stai? Sto bene.', `<em lang="en">How are you? I’m fine</em>: per la salute si usa ${b('stare')}.`],
      ['Anna è stanco.', 'Anna è stanca.', `<em lang="en">Tired</em> non cambia, ma in italiano l’aggettivo si accorda: ${b('stanca')}.`],
    ],
    en: [
      ['È io.', 'Sono io.', `<em>It’s me</em>: the verb agrees with ${i('io')}, ${b('sono io')}.`],
      ['Sono trent’anni.', 'Ho trent’anni.', `<em>I’m thirty</em>: age uses ${b('avere')}.`],
      ['Sono freddo.', 'Ho freddo.', `<em>I’m cold</em> → ${b('ho freddo')}. ${i('Sono freddo')} means “I’m a cold person”.`],
      ['Come sei? Sono bene.', 'Come stai? Sto bene.', `<em>How are you? I’m fine</em>: health uses ${b('stare')}.`],
      ['Anna è stanco.', 'Anna è stanca.', `<em>Tired</em> never changes in English, but in Italian it agrees: ${b('stanca')}.`],
    ],
    es: [
      ['Sto stanco.', 'Sono stanco.', `<em>Estoy cansado</em>: con adjetivos el italiano usa ${b('essere')}.`],
      ['Sto contenta.', 'Sono contenta.', `<em>Estoy contenta</em> → ${b('sono contenta')}.`],
      ['Sono bene.', 'Sto bene.', `Al revés: para la salud, ${b('stare')}. <em>Estoy bien</em> → ${b('sto bene')}.`],
      ['Le case sono grandes.', 'Le case sono grandi.', `El plural no lleva <em>-s</em>: ${b('grandi')}.`],
      ['Anna e italiana.', 'Anna è italiana.', `El verbo lleva tilde: ${b('è')}. ${i('E')} sin tilde es «y».`],
    ],
    pt: [
      ['Sto stanco.', 'Sono stanco.', `«Estou cansado»: com adjetivos o italiano usa ${b('essere')}.`],
      ['Sono bene.', 'Sto bene.', `Ao contrário: para a saúde, ${b('stare')}. «Estou bem» → ${b('sto bene')}.`],
      ['Sono con fame.', 'Ho fame.', `«Estou com fome» → ${b('avere')}: ${b('ho fame')}. Igual «estou com frio» → ${i('ho freddo')}.`],
      ['Le case sono grandes.', 'Le case sono grandi.', `O plural não tem <em>-s</em>: ${b('grandi')}.`],
      ['Anna e italiana.', 'Anna è italiana.', `O verbo tem acento: ${b('è')}. ${i('E')} sem acento é «e».`],
    ],
    fr: [
      ['È io.', 'Sono io.', `« C’est moi » : le verbe s’accorde avec ${i('io')}, ${b('sono io')}.`],
      ['Vado bene.', 'Sto bene.', `« Je vais bien » → ${b('sto bene')}, avec ${i('stare')}.`],
      ['Come vai?', 'Come stai?', `« Comment vas-tu ? » → ${b('come stai?')}`],
      ['Lei siete italiana, signora?', 'Lei è italiana, signora?', `Pas de « vous êtes » : le ${i('Lei')} de politesse prend la 3<sup>e</sup> personne du singulier, ${b('è')}.`],
      ['Anna e italiana.', 'Anna è italiana.', `Le verbe a l’accent : ${b('è')} ; ${i('e')} sans accent veut dire « et ». L’inverse du français.`],
    ],
    cs: [
      ['Mi è vent’anni.', 'Ho vent’anni.', `„Je mi dvacet“ → věk se říká s ${b('avere')}.`],
      ['Mi è freddo.', 'Ho freddo.', `„Je mi zima“ → ${b('ho freddo')}.`],
      ['Ho bene.', 'Sto bene.', `„Mám se dobře“ → se ${b('stare')}: ${b('sto bene')}.`],
      ['Lei siete italiana, signora?', 'Lei è italiana, signora?', `Ne „vy jste“: vykání s ${i('Lei')} má 3. osobu jednotného čísla, ${b('è')}.`],
      ['È io.', 'Sono io.', `„To jsem já“: sloveso se řídí ${i('io')}, ${b('sono io')}.`],
    ],
    pl: [
      ['Mi è freddo.', 'Ho freddo.', `„Jest mi zimno” → ${b('ho freddo')}.`],
      ['Oggi è freddo.', 'Oggi fa freddo.', `„Dziś jest zimno” (pogoda) → ${b('fa freddo')}.`],
      ['È io.', 'Sono io.', `„To ja”: czasownik zgadza się z ${i('io')}, ${b('sono io')}.`],
      ['Ho bene.', 'Sto bene.', `„Mam się dobrze” → ze ${b('stare')}: ${b('sto bene')}.`],
      ['Sono di Polonia.', 'Sono polacco.', `„Jestem z Polski” → ${b('sono polacco')} albo ${i('vengo dalla Polonia')}; ${i('di')} tylko z miastem: ${i('sono di Varsavia')}.`],
    ],
    tr: [
      ['Lui insegnante.', 'Lui è insegnante.', `“O öğretmen”: İtalyancada fiil gerekir, ${b('è')}.`],
      ['Sono vent’anni.', 'Ho vent’anni.', `“Yirmi yaşındayım” → yaş ${b('avere')} ile söylenir.`],
      ['Sono bene.', 'Sto bene.', `“İyiyim” → ${b('stare')} ile: ${b('sto bene')}.`],
      ['Anna è stanco.', 'Anna è stanca.', `Sıfat cinsiyete uyar: Anna kadın, ${b('stanca')}.`],
      ['Lei siete turca, signora?', 'Lei è turca, signora?', `Kibar “siz” çoğul değil: ${i('Lei')} tekil 3. kişi alır, ${b('è')}.`],
    ],
    de: [
      ['Sono trent’anni.', 'Ho trent’anni.', `„Ich bin dreißig“ → das Alter mit ${b('avere')}.`],
      ['Mi è freddo.', 'Ho freddo.', `„Mir ist kalt“ → ${b('ho freddo')}.`],
      ['Oggi è freddo.', 'Oggi fa freddo.', `„Es ist kalt“ (Wetter) → ${b('fa freddo')}.`],
      ['Lei sono italiana, signora?', 'Lei è italiana, signora?', `„Sie sind“ steht im Plural, das italienische ${i('Lei')} im Singular: ${b('è')}.`],
      ['Anna è stanco.', 'Anna è stanca.', `„Müde“ bleibt im Deutschen gleich, im Italienischen passt es sich an: ${b('stanca')}.`],
    ],
    ja: [
      ['Sono vent’anni.', 'Ho vent’anni.', `「二十歳です」：年齢は ${b('avere')} です。`],
      ['Sono bene.', 'Sto bene.', `「元気です」は ${b('sto bene')}。`],
      ['Io sono caffè.', 'Prendo un caffè.', `「私はコーヒーです」（注文）は ${b('prendo')} を使います。`],
      ['Oggi è freddo.', 'Oggi fa freddo.', `「今日は寒いです」（天気）は ${b('fa freddo')}。`],
      ['Anna è stanco.', 'Anna è stanca.', `形容詞は主語の性に合わせます：Anna は女性なので ${b('stanca')}。`],
    ],
  },
};

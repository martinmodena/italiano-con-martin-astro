// Errori tipici della lezione «L'imperativo» (B1), rifatta il 2026-11-23, per chi parla ogni lingua.
// Stesso formato di errori-lingua.mjs, che li aggiunge a ERRORS (sostituiscono quelli di ottobre);
// li inserisce scripts/add-language-notes.mjs. Il confronto con la lingua resta quello di confronti-lingua.mjs.
//
// Le trappole per lingua: inglese «don't» e il pronome prima; spagnolo «no hables» → non parli, «prendelo»,
// «no hagáis»; portoghese «não fala / não fale», «me escuta»; francese il trattino, il «vous» di cortesia e
// «donne-le-moi»; ceco e polacco il vykání / «proszę mówić», il pronome staccato; tedesco «Sie» al plurale
// e «non» dopo il verbo; turco «siz» per una persona; giapponese «〜てください» con l'infinito. Per tutti:
// dimi con una m, si siedi.

const i = (s) => `<span lang="it">${s}</span>`;
const b = (s) => `<strong lang="it">${s}</strong>`;

const IMP = 'grammatica/b1/imperativo.html';

export const ERRORS_IMPERATIVO = {
  [IMP]: {
    it: [
      ['Non parla adesso!', 'Non parlare adesso!', `<em lang="en">Don't speak</em> con ${i('tu')} è <strong>non + infinito</strong>; ${i('non parla')} è «lui non parla».`],
      ['Lo prendi!', 'Prendilo!', `<em lang="en">Take it</em>: con ${i('tu')} il pronome si attacca alla fine dell'imperativo.`],
      ['Parlate più lentamente, signora.', 'Parli più lentamente, signora.', `Una persona a cui dai del Lei: ${b('parli')}; ${i('voi')} è per più persone.`],
      ['Dimi la verità!', 'Dimmi la verità!', `${i("Di'")} + ${i('mi')}: dopo le forme corte la consonante ${b('raddoppia')}.`],
      ['Si siedi!', 'Siediti!', `<em lang="en">Sit down</em> con ${i('tu')}: il riflessivo va alla fine, ${b('siediti')}.`],
    ],
    en: [
      ['Non parla adesso!', 'Non parlare adesso!', `<em>Don't speak</em> with ${i('tu')} is <strong lang="it">non + infinitive</strong>; ${i('non parla')} means “he doesn't speak”.`],
      ['Lo prendi!', 'Prendilo!', `<em>Take it</em>: with ${i('tu')} the pronoun is glued to the end of the imperative.`],
      ['Parlate più lentamente, signora.', 'Parli più lentamente, signora.', `One person you call ${i('Lei')}: ${b('parli')}; ${i('voi')} is for several people.`],
      ['Dimi la verità!', 'Dimmi la verità!', `${i("Di'")} + ${i('mi')}: after the short forms the consonant ${b('doubles')}.`],
      ['Si siedi!', 'Siediti!', `<em>Sit down</em> with ${i('tu')}: the reflexive pronoun goes at the end, ${b('siediti')}.`],
    ],
    es: [
      ['Non parli adesso!', 'Non parlare adesso!', `Calco de <em>no hables</em>: ${i('non parli')} es de ${i('Lei')}. Con ${i('tu')}: ${b('non + infinitivo')}.`],
      ['Prendelo!', 'Prendilo!', `<em>Tómalo</em>: el imperativo de ${i('prendere')} con ${i('tu')} es ${i('prendi')}, en ${b('-i')}.`],
      ['Non facciate rumore!', 'Non fate rumore!', `<em>No hagáis</em>: con ${i('voi')} el negativo es igual al presente, ${b('non fate')}.`],
      ['Si sieda, Marco!', 'Siediti, Marco!', `<em>Siéntate</em> (tú) → ${b('siediti')}; ${i('si sieda')} es «siéntese» (usted).`],
      ['Dimi la verità!', 'Dimmi la verità!', `<em>Dime</em>: ${i("di'")} + ${i('mi')} = ${b('dimmi')}, con dos m.`],
    ],
    pt: [
      ['Non parla adesso!', 'Non parlare adesso!', `Decalque de <em>não fala</em>. Com ${i('tu')} o negativo é ${b('non + infinitivo')}.`],
      ['Non parli adesso!', 'Non parlare adesso!', `Decalque de <em>não fale</em>: ${i('non parli')} é a forma de ${i('Lei')}, não de ${i('tu')}.`],
      ['Mi ascolta!', 'Ascoltami!', `<em>Me escuta</em>: em italiano o pronome vai ${b('colado no fim')} do verbo.`],
      ['Si siedi!', 'Siediti!', `<em>Senta</em> (você, entre amigos) → ${b('siediti')}, com o pronome no fim.`],
      ['Dimi la verità!', 'Dimmi la verità!', `<em>Me diz</em>: ${i("di'")} + ${i('mi')} = ${b('dimmi')}, com dois m.`],
    ],
    fr: [
      ['Non parla adesso!', 'Non parlare adesso!', `Calque de <em>ne parle pas</em>. Avec ${i('tu')} : ${b('non + infinitif')}.`],
      ['Prendi-lo!', 'Prendilo!', 'Pas de trait d’union : le pronom se colle au verbe.'],
      ['Parlate più lentamente, signora.', 'Parli più lentamente, signora.', `Le <em>vous</em> de politesse à une seule personne, c’est ${b('Lei')}, pas ${i('voi')}.`],
      ['Dallomi!', 'Dammelo!', `<em>Donne-le-moi</em> : en italien d’abord la personne, puis la chose, ${b('dammelo')}.`],
      ['Dimi la verità!', 'Dimmi la verità!', `<em>Dis-moi</em> : ${i("di'")} + ${i('mi')} = ${b('dimmi')}, avec deux m.`],
    ],
    cs: [
      ['Non parla adesso!', 'Non parlare adesso!', `<em>Nemluv</em> → ${b('non + infinitiv')}; ${i('non parla')} = „on nemluví“.`],
      ['Prendi lo!', 'Prendilo!', 'Zájmeno se píše dohromady se slovesem.'],
      ['Parlate più lentamente, signore.', 'Parli più lentamente, signore.', `Vykání jedné osobě je ${b('Lei')}, ne ${i('voi')} jako česky.`],
      ['Si siedi!', 'Siediti!', `<em>Sedni si</em> → zvratné zájmeno na konec: ${b('siediti')}.`],
      ['Dimi la verità!', 'Dimmi la verità!', `<em>Řekni mi</em>: ${i("di'")} + ${i('mi')} = ${b('dimmi')}, se dvěma m.`],
    ],
    pl: [
      ['Non parla adesso!', 'Non parlare adesso!', `<em>Nie mów</em> → ${b('non + bezokolicznik')}; ${i('non parla')} = „on nie mówi”.`],
      ['Prendi lo!', 'Prendilo!', 'Zaimek pisze się razem z czasownikiem.'],
      ['Prego parlare più lentamente.', 'Parli più lentamente, per favore.', `Kalka z <em>proszę mówić</em>: grzecznie mówi się formą ${b('Lei')}.`],
      ['Si siedi!', 'Siediti!', `<em>Usiądź</em> → zaimek zwrotny na końcu: ${b('siediti')}.`],
      ['Dimi la verità!', 'Dimmi la verità!', `<em>Powiedz mi</em>: ${i("di'")} + ${i('mi')} = ${b('dimmi')}, z dwoma m.`],
    ],
    tr: [
      ['Non parla adesso!', 'Non parlare adesso!', `<em>Konuşma</em> → ${b('non + mastar')}; ${i('non parla')} = “o konuşmuyor”.`],
      ['Lo prendi!', 'Prendilo!', `<em>Onu al</em>: zamir fiilin ${b('sonuna')} eklenir.`],
      ['Parlate più lentamente, signore.', 'Parli più lentamente, signore.', `Tek bir kişiye kibarca <em>konuşun</em> → ${i('Lei')} biçimi: ${b('parli')}.`],
      ['Si siedi!', 'Siediti!', `<em>Otur</em> → dönüşlü zamir sonda: ${b('siediti')}.`],
      ['Dimi la verità!', 'Dimmi la verità!', `<em>Söyle bana</em>: ${i("di'")} + ${i('mi')} = ${b('dimmi')}, iki m ile.`],
    ],
    de: [
      ['Parla non!', 'Non parlare!', `<em>Sprich nicht</em>: ${i('non')} steht vorne, danach der ${b('Infinitiv')}.`],
      ['Prendi lo!', 'Prendilo!', `<em>Nimm es</em>: das Pronomen wird angehängt, in einem Wort.`],
      ['Parlate più lentamente, signore.', 'Parli più lentamente, signore.', `<em>Sprechen Sie</em> → ${i('Lei')}-Form ${b('parli')}, nicht ${i('voi')}.`],
      ['Si siedi!', 'Siediti!', `<em>Setz dich</em> → ${b('siediti')}, das Reflexivpronomen hinten.`],
      ['Dimi la verità!', 'Dimmi la verità!', `<em>Sag mir</em>: ${i("di'")} + ${i('mi')} = ${b('dimmi')}, mit Doppel-m.`],
    ],
    ja: [
      ['Non parla adesso!', 'Non parlare adesso!', `「話さないで」は ${b('non')} + 不定詞。${i('non parla')} は「彼は話さない」。`],
      ['Lo prendi!', 'Prendilo!', '「それを取って」の代名詞は動詞の最後にくっつけます。'],
      ['Per favore parlare più lentamente.', 'Parli più lentamente, per favore.', `「〜てください」を不定詞で言わず、${i('Lei')} の命令法 ${b('parli')} + ${i('per favore')} にします。`],
      ['Si siedi!', 'Siediti!', `「座って」（${i('tu')}）は ${b('siediti')}。再帰代名詞は最後です。`],
      ['Dimi la verità!', 'Dimmi la verità!', `${i("di'")} + ${i('mi')} は ${b('dimmi')}。m が2つになります。`],
    ],
  },
};

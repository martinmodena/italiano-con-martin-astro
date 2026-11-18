// Confronto con la lingua dello studente ed errori tipici della lezione «Il futuro anteriore» (B1), 2026-11-18.
// Stesso formato di confronti-lingua.mjs ed errori-lingua.mjs, che li aggiungono a NOTES ed ERRORS; li inserisce
// scripts/add-language-notes.mjs.
//
// Inglese e tedesco mettono il presente o il passato dopo «when / wenn» («when I have finished», «wenn ich fertig
// bin»); spagnolo e portoghese il congiuntivo («cuando haya terminado», «quando tiver terminado»), da cui l'errore
// «quando abbia finito»; il francese funziona quasi come l'italiano (futur antérieur, «il aura oublié»), ma sceglie
// avoir dove l'italiano vuole essere (été, coûté, semblé). Ceco e polacco usano l'aspetto perfettivo («až dodělám»,
// «jak skończę»); il turco -ince / -dıktan sonra e, per le ipotesi, -mıştır; il giapponese 〜たら e 〜ただろう.

const i = (s) => `<span lang="it">${s}</span>`;
const b = (s) => `<strong lang="it">${s}</strong>`;
const en = (s) => `<em lang="en">${s}</em>`;

const FUT = 'grammatica/b1/futuro-anteriore.html';

const IT = [
  'Quando avrò finito, ti chiamerò.',
  'Appena sarò arrivato, ti scriverò.',
  'Entro giugno avrò finito l’università.',
  'Sarà già uscito.',
  'Avrà perso il treno.',
];
const rows = (own) => own.map((s, n) => [s, IT[n]]);

export const NOTES_FUTURO_ANTERIORE = {
  [FUT]: {
    after: 'quando',
    it: {
      h2: "Il futuro anteriore: il confronto con l'inglese",
      intro: `Il futuro anteriore corrisponde a ${en('will have done')}, ma l'inglese lo usa poco: dopo ${en('when')} e ${en('as soon as')} mette il presente o il present perfect, l'italiano il futuro anteriore. E per le ipotesi sul passato l'inglese dice ${en('must have')}, l'italiano ${b('avrà fatto')}.`,
      th: ['Inglese', 'Italiano'],
      rows: rows([
        'When I have finished, I’ll call you.',
        'As soon as I arrive, I’ll text you.',
        'I will have finished university by June.',
        'He must have gone out already.',
        'He must have missed the train.',
      ]),
      points: [
        `${en('When I have finished')} diventa ${b('quando avrò finito')}: dopo ${i('quando')} e ${i('appena')} ci vuole il futuro.`,
        `${en('Must have')} + participio diventa ${b('avrà')} o ${b('sarà')} + participio: ${b('avrà perso')}.`,
        `L'ausiliare si sceglie come al passato prossimo: ${en('I will have arrived')} = ${b('sarò arrivato')}.`,
      ],
    },
    en: {
      h2: 'The futuro anteriore compared with English',
      intro: `The futuro anteriore is “will have done”, but English rarely uses it: after “when” and “as soon as” it uses the present or the present perfect, Italian uses the futuro anteriore. And for guesses about the past English says “must have”, Italian ${b('avrà fatto')}.`,
      th: ['English', 'Italian'],
      rows: rows([
        'When I have finished, I’ll call you.',
        'As soon as I arrive, I’ll text you.',
        'I will have finished university by June.',
        'He must have gone out already.',
        'He must have missed the train.',
      ]),
      points: [
        `“When I have finished” becomes ${b('quando avrò finito')}: after ${i('quando')} and ${i('appena')} Italian needs the future.`,
        `“Must have” + participle becomes ${b('avrà')} or ${b('sarà')} + participle: ${b('avrà perso')}.`,
        `Choose the auxiliary as in the passato prossimo: “I will have arrived” = ${b('sarò arrivato')}.`,
      ],
    },
    es: {
      h2: 'El futuro anteriore comparado con el español',
      intro: `El futuro anteriore es el futuro perfecto: «habré terminado» = ${b('avrò finito')}, y las suposiciones funcionan igual («habrá salido» = ${b('sarà uscito')}). La gran diferencia: después de «cuando» y «en cuanto» el español pone el subjuntivo, el italiano el futuro.`,
      th: ['Español', 'Italiano'],
      rows: rows([
        'Cuando haya terminado, te llamaré.',
        'En cuanto llegue, te escribiré.',
        'Para junio habré terminado la universidad.',
        'Ya habrá salido.',
        'Habrá perdido el tren.',
      ]),
      points: [
        `«Cuando haya terminado» es ${b('quando avrò finito')}: nunca ${i('quando abbia finito')}.`,
        `«En cuanto llegue» es ${b('appena sarò arrivato')} (o, hablando, ${b('appena arrivo')}).`,
        `«Habré» se convierte en ${b('avrò')} o ${b('sarò')}: «habrá ido» = ${b('sarà andato')}.`,
      ],
    },
    pt: {
      h2: 'O futuro anteriore comparado com o português',
      intro: `O futuro anteriore é o futuro composto: «terei terminado» = ${b('avrò finito')}, e as suposições funcionam parecido («deve ter saído» = ${b('sarà uscito')}). A grande diferença: depois de «quando» e «assim que» o português usa o futuro do subjuntivo, o italiano o futuro do indicativo.`,
      th: ['Português', 'Italiano'],
      rows: rows([
        'Quando eu tiver terminado, te ligo.',
        'Assim que eu chegar, te escrevo.',
        'Até junho terei terminado a faculdade.',
        'Ele já deve ter saído.',
        'Ele deve ter perdido o trem.',
      ]),
      points: [
        `«Quando eu tiver terminado» é ${b('quando avrò finito')}: o italiano não tem futuro do subjuntivo.`,
        `«Deve ter perdido» vira ${b('avrà perso')}: o futuro anteriore sozinho já diz «provavelmente».`,
        `«Terei» vira ${b('avrò')} ou ${b('sarò')}: «terá ido» = ${b('sarà andato')}.`,
      ],
    },
    fr: {
      h2: 'Le futuro anteriore comparé au français',
      intro: `Le futuro anteriore est le futur antérieur, et il s’emploie presque comme en français : après ${i('quando')} et ${i('appena')} (« quand j’aurai fini »), et pour les suppositions (« il aura oublié »). La différence est surtout dans l’auxiliaire.`,
      th: ['Français', 'Italien'],
      rows: rows([
        'Quand j’aurai fini, je t’appellerai.',
        'Dès que je serai arrivé, je t’écrirai.',
        'D’ici juin, j’aurai fini la fac.',
        'Il sera déjà sorti.',
        'Il aura raté le train.',
      ]),
      points: [
        `L’ordre des temps est le même qu’en français : ${b('quando avrò finito, ti chiamerò')}.`,
        `« J’aurai été » = ${b('sarò stato')}, « ça aura coûté » = ${b('sarà costato')} : l’italien prend ${i('essere')}.`,
        `La supposition est beaucoup plus fréquente qu’en français : ${b('sarà a casa')}, ${b('avrà dimenticato')}.`,
      ],
    },
    cs: {
      h2: 'Futuro anteriore v porovnání s češtinou',
      intro: `Čeština předbudoucí čas nemá: pořadí budoucích dějů vyjadřuje dokonavým videm („až dodělám, zavolám“) a domněnky slovy „asi, určitě“. Italština na obojí používá futuro anteriore: ${b('avrò finito')}, ${b('sarà uscito')}.`,
      th: ['Čeština', 'Italština'],
      rows: rows([
        'Až dodělám, zavolám ti.',
        'Jakmile přijedu, napíšu ti.',
        'Do června dokončím univerzitu.',
        'Asi už odešel.',
        'Asi mu ujel vlak.',
      ]),
      points: [
        `„Až dodělám“ = ${b('quando avrò finito')}: to, co proběhne dřív, je ve futuro anteriore.`,
        `„Asi už odešel“ = ${b('sarà già uscito')}: domněnka o minulosti bez slova „asi“.`,
        `Prosté „promluvím“ je ${b('parlerò')}: dokonavý vid neznamená futuro anteriore.`,
      ],
    },
    pl: {
      h2: 'Futuro anteriore w porównaniu z polskim',
      intro: `Polski nie ma czasu przyszłego uprzedniego: kolejność wyraża aspektem dokonanym („jak skończę, zadzwonię”), a przypuszczenia słowami „pewnie, chyba”. Włoski w obu przypadkach używa futuro anteriore: ${b('avrò finito')}, ${b('sarà uscito')}.`,
      th: ['Polski', 'Włoski'],
      rows: rows([
        'Jak skończę, zadzwonię do ciebie.',
        'Jak tylko przyjadę, napiszę do ciebie.',
        'Do czerwca skończę studia.',
        'Pewnie już wyszedł.',
        'Pewnie spóźnił się na pociąg.',
      ]),
      points: [
        `„Jak skończę” = ${b('quando avrò finito')}: to, co nastąpi wcześniej, idzie do futuro anteriore.`,
        `„Pewnie już wyszedł” = ${b('sarà già uscito')}: przypuszczenie bez słowa „pewnie”.`,
        `Zwykłe „porozmawiam” to ${b('parlerò')}: aspekt dokonany to nie futuro anteriore.`,
      ],
    },
    tr: {
      h2: 'Futuro anteriore ile Türkçe karşılaştırması',
      intro: `Türkçe sırayı eklerle verir (“bitirince”, “bitirdikten sonra”), tahmini de çoğu zaman -mıştır ile (“çıkmıştır”). İtalyanca ikisi için de futuro anteriore kullanır: ${b('avrò finito')}, ${b('sarà uscito')}. “Bitirmiş olacağım” biçimi de ona karşılık gelir.`,
      th: ['Türkçe', 'İtalyanca'],
      rows: rows([
        'Bitirince seni ararım.',
        'Varır varmaz sana yazarım.',
        'Hazirana kadar üniversiteyi bitirmiş olacağım.',
        'Çoktan çıkmıştır.',
        'Treni kaçırmıştır.',
      ]),
      points: [
        `“Bitirince” = ${b('quando avrò finito')}: önce olan şey futuro anteriore ile söylenir.`,
        `“-mıştır” ile yapılan tahmin = ${b('avrà')} / ${b('sarà')} + ortaç: ${b('avrà perso')}.`,
        `Ana cümlede futuro semplice kalır: ${b('ti chiamerò')}, “ararım”.`,
      ],
    },
    de: {
      h2: 'Das futuro anteriore im Vergleich mit dem Deutschen',
      intro: `Das futuro anteriore ist das Futur II, aber das Deutsche benutzt es selten: Nach „wenn“ und „sobald“ steht meist Perfekt oder Präsens. Für Vermutungen gibt es das Futur II auch im Deutschen („er wird es vergessen haben“), im Italienischen ist es viel häufiger: ${b('avrà dimenticato')}.`,
      th: ['Deutsch', 'Italienisch'],
      rows: rows([
        'Wenn ich fertig bin, rufe ich dich an.',
        'Sobald ich angekommen bin, schreibe ich dir.',
        'Bis Juni werde ich mit dem Studium fertig sein.',
        'Er ist wohl schon weg.',
        'Er hat wohl den Zug verpasst.',
      ]),
      points: [
        `„Wenn ich fertig bin“ = ${b('quando avrò finito')}: nach ${i('quando')} und ${i('appena')} steht Futur.`,
        `„Er hat wohl …“ = ${b('avrà')} + Partizip: das futuro anteriore ersetzt das „wohl“.`,
        `Reflexive Verben mit ${i('essere')}: „er wird sich ausgeruht haben“ = ${b('si sarà riposato')}.`,
      ],
    },
    ja: {
      h2: '未来完了と日本語の比較',
      intro: `日本語では、未来の順番は「〜たら」「〜てから」、推量は「〜ただろう」「〜たんだろう」で表します。イタリア語では、どちらも未来完了を使います：${b('avrò finito')}、${b('sarà uscito')}。`,
      th: ['日本語', 'イタリア語'],
      rows: rows([
        '終わったら電話するね。',
        '着いたらすぐメッセージを送るね。',
        '6月までには大学を卒業しているだろう。',
        'もう出かけただろう。',
        '電車に乗り遅れたんだろう。',
      ]),
      points: [
        `「終わったら」＝ ${b('quando avrò finito')}：「た」の形でも、未来の話なら未来完了。`,
        `「〜ただろう」＝ ${b('avrà')} / ${b('sarà')} ＋ 過去分詞：${b('avrà perso')}。`,
        `「〜だろう」が今のことなら単純未来：${b('sarà stanco')}（疲れているんだろう）。`,
      ],
    },
  },
};

export const ERRORS_FUTURO_ANTERIORE = {
  [FUT]: {
    it: [
      [
        'Quando avrò finito, ti avrò chiamato.',
        'Quando avrò finito, ti chiamerò.',
        `Il futuro anteriore va solo sulla cosa che viene prima; ${en('I’ll call you')} è ${b('ti chiamerò')}.`,
      ],
      [
        'Entro le otto avrò arrivato.',
        'Entro le otto sarò arrivato.',
        `${en('I will have arrived')}: ${i('arrivare')} vuole ${b('essere')}, anche se in inglese c’è ${en('have')}.`,
      ],
      [
        'Ieri sera sarà stanco.',
        'Ieri sera sarà stato stanco.',
        `${en('He must have been tired')}: un’ipotesi sul passato vuole il futuro anteriore.`,
      ],
    ],
    en: [
      [
        'Quando avrò finito, ti avrò chiamato.',
        'Quando avrò finito, ti chiamerò.',
        `Only what happens first takes the futuro anteriore; “I’ll call you” is ${b('ti chiamerò')}.`,
      ],
      [
        'Entro le otto avrò arrivato.',
        'Entro le otto sarò arrivato.',
        `“I will have arrived”: ${i('arrivare')} takes ${b('essere')}, even though English says “have”.`,
      ],
      [
        'Ieri sera sarà stanco.',
        'Ieri sera sarà stato stanco.',
        `“He must have been tired”: a guess about the past needs the futuro anteriore.`,
      ],
    ],
    es: [
      [
        'Quando abbia finito, ti chiamerò.',
        'Quando avrò finito, ti chiamerò.',
        `«Cuando haya terminado»: después de ${i('quando')} el italiano no usa el subjuntivo, sino el futuro.`,
      ],
      [
        'Appena sia arrivato, ti scriverò.',
        'Appena sarò arrivato, ti scriverò.',
        `«En cuanto haya llegado»: también después de ${i('appena')} va el futuro anteriore.`,
      ],
      ['Avrà andato a casa.', 'Sarà andato a casa.', `«Habrá ido»: ${i('andare')} lleva ${b('essere')}.`],
    ],
    pt: [
      [
        'Quando abbia finito, ti chiamerò.',
        'Quando avrò finito, ti chiamerò.',
        `«Quando eu tiver terminado»: depois de ${i('quando')} o italiano não usa o subjuntivo, mas o futuro.`,
      ],
      ['Avrà andato a casa.', 'Sarà andato a casa.', `«Deve ter ido»: ${i('andare')} usa ${b('essere')}.`],
      [
        'Ieri sera sarà stanco.',
        'Ieri sera sarà stato stanco.',
        `«Devia estar cansado ontem»: a suposição sobre o passado pede o futuro anteriore.`,
      ],
    ],
    fr: [
      [
        'Avrà stato malato.',
        'Sarà stato malato.',
        `« Il aura été malade » : en italien ${i('essere')} prend ${b('essere')}.`,
      ],
      [
        'Avrà costato molto.',
        'Sarà costato molto.',
        `« Ça aura coûté cher » : ${i('costare')} se conjugue avec ${b('essere')}.`,
      ],
      [
        'Gli avrà sembrato facile.',
        'Gli sarà sembrato facile.',
        `« Ça lui aura semblé facile » : ${i('sembrare')} prend ${b('essere')}.`,
      ],
    ],
    cs: [
      [
        'Domani avrò parlato con il direttore.',
        'Domani parlerò con il direttore.',
        `„Zítra promluvím“: dokonavé sloveso bez jiného budoucího okamžiku je ${b('futuro semplice')}.`,
      ],
      [
        'Anna sarà già uscito.',
        'Anna sarà già uscita.',
        `S ${i('essere')} se příčestí shoduje s podmětem: Anna → ${b('uscita')}.`,
      ],
      [
        'Ieri sera sarà stanco.',
        'Ieri sera sarà stato stanco.',
        `„Včera večer byl asi unavený“: domněnka o minulosti chce futuro anteriore.`,
      ],
    ],
    pl: [
      [
        'Domani avrò parlato con il direttore.',
        'Domani parlerò con il direttore.',
        `„Jutro porozmawiam”: czasownik dokonany bez innego momentu w przyszłości to ${b('futuro semplice')}.`,
      ],
      [
        'Anna sarà già uscito.',
        'Anna sarà già uscita.',
        `Z ${i('essere')} imiesłów zgadza się z podmiotem: Anna → ${b('uscita')}.`,
      ],
      [
        'Ieri sera sarà stanco.',
        'Ieri sera sarà stato stanco.',
        `„Wczoraj wieczorem pewnie był zmęczony”: przypuszczenie o przeszłości wymaga futuro anteriore.`,
      ],
    ],
    tr: [
      [
        'Quando avrò finito, ti avrò chiamato.',
        'Quando avrò finito, ti chiamerò.',
        `“Bitirince ararım”: ana cümle futuro semplice ile söylenir, ${b('ti chiamerò')}.`,
      ],
      ['Avrà andato a casa.', 'Sarà andato a casa.', `“Eve gitmiştir”: ${i('andare')} fiili ${b('essere')} alır.`],
      [
        'Ieri sera sarà stanco.',
        'Ieri sera sarà stato stanco.',
        `“Dün akşam yorgunmuştur”: geçmişle ilgili tahmin futuro anteriore ister.`,
      ],
    ],
    de: [
      [
        'Si avrà riposato.',
        'Si sarà riposato.',
        `„Er wird sich ausgeruht haben“: reflexive Verben haben im Italienischen immer ${b('essere')}.`,
      ],
      [
        'Quando avrò finito, ti avrò chiamato.',
        'Quando avrò finito, ti chiamerò.',
        `Nur das, was zuerst passiert, steht im futuro anteriore: „ich rufe dich an“ = ${b('ti chiamerò')}.`,
      ],
      [
        'Ieri sera sarà stanco.',
        'Ieri sera sarà stato stanco.',
        `„Gestern Abend war er wohl müde“: eine Vermutung über die Vergangenheit braucht das futuro anteriore.`,
      ],
    ],
    ja: [
      [
        'Ieri sera sarà stanco.',
        'Ieri sera sarà stato stanco.',
        `「昨日の夜は疲れていたんだろう」：過去の推量は未来完了。`,
      ],
      [
        'Quando avrò finito, ti avrò chiamato.',
        'Quando avrò finito, ti chiamerò.',
        `未来完了にするのは先に起きるほうだけ。「電話する」は ${b('ti chiamerò')}。`,
      ],
      [
        'Anna sarà già uscito.',
        'Anna sarà già uscita.',
        `${i('essere')} のときは過去分詞を主語に合わせる：Anna → ${b('uscita')}。`,
      ],
    ],
  },
};

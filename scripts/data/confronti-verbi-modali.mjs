// Confronto con la lingua dello studente ed errori tipici della lezione «I verbi modali» (A2), rifatta il 2026-11-25
// (prima non aveva né l'uno né gli altri). Stesso formato di confronti-lingua.mjs ed errori-lingua.mjs, che li
// aggiungono a NOTES ed ERRORS; li inserisce scripts/add-language-notes.mjs.
//
// Le trappole per lingua: inglese «can» per tutto (so nuotare), «want you to», «you» unico (puoi / può); spagnolo e
// portoghese «tener que / ter que», «hay que / precisa», «hace falta / leva»; portoghese il pronome prima
// dell'infinito («posso te ajudar»); francese il pronome davanti all'infinito («je peux le faire»), «il faut»,
// il vous di cortesia; tedesco l'infinito in fondo, «ich kann schwimmen», «du musst nicht»; ceco e polacco il verbo
// di moto sottinteso («musím domů»), «nemusíš / nie musisz»; turco i suffissi -ebil-, -meli e l'ordine; giapponese
// 「泳げる」 per sapere e potere, l'ordine.

const i = (s) => `<span lang="it">${s}</span>`;
const b = (s) => `<strong lang="it">${s}</strong>`;

const VM = 'grammatica/a2/verbi-modali.html';

export const NOTES_MODALI = {
  [VM]: {
    after: 'uso',
    it: {
      h2: "I verbi modali: il confronto con l'inglese",
      intro: `L'inglese ha <em lang="en">can, must, want</em>, che non cambiano mai. ${i('Potere, volere, dovere')} invece sono verbi veri: cambiano con la persona e hanno tutti i tempi.`,
      th: ['Inglese', 'Italiano'],
      rows: [
        ['I can come.', 'Posso venire.'],
        ['I can swim.', 'So nuotare.'],
        ['I have to / I must work.', 'Devo lavorare.'],
        ['I want you to come.', 'Voglio che tu venga.'],
        ["You don't have to pay.", 'Non c’è bisogno di pagare.'],
      ],
      points: [
        `<em lang="en">Can</em> per una cosa imparata è ${b('sapere')}: ${i('so nuotare, so guidare')}.`,
        `Niente <em lang="en">to</em>: <em lang="en">I want to go</em> → ${b('voglio andare')}.`,
        `<em lang="en">Must</em> e <em lang="en">have to</em> sono tutti e due ${b('dovere')}; al passato ${i('ho dovuto')}, ${i('sono dovuto')}.`,
      ],
    },
    en: {
      h2: 'Modal verbs compared with English',
      intro: `English <em>can, must, want</em> never change. ${i('Potere, volere, dovere')} are real verbs: they change with the person and have every tense.`,
      th: ['English', 'Italian'],
      rows: [
        ['I can come.', 'Posso venire.'],
        ['I can swim.', 'So nuotare.'],
        ['I have to / I must work.', 'Devo lavorare.'],
        ['I want you to come.', 'Voglio che tu venga.'],
        ["You don't have to pay.", 'Non c’è bisogno di pagare.'],
      ],
      points: [
        `<em>Can</em> for something you’ve learned is ${b('sapere')}: ${i('so nuotare, so guidare')}.`,
        `No “to”: <em>I want to go</em> → ${b('voglio andare')}.`,
        `<em>Must</em> and <em>have to</em> are both ${b('dovere')}; in the past ${i('ho dovuto')}, ${i('sono dovuto')} (I had to).`,
      ],
    },
    es: {
      h2: 'Los verbos modales comparados con el español',
      intro: `${i('Potere')} y ${i('volere')} funcionan como poder y querer. La diferencia: el italiano no tiene «tener que» ni «hay que», todo se dice con ${b('dovere')} o con ${b('bisogna')}.`,
      th: ['Español', 'Italiano'],
      rows: [
        ['Tengo que trabajar.', 'Devo lavorare.'],
        ['Hay que estudiar.', 'Bisogna studiare.'],
        ['Puedo ayudarte.', 'Posso aiutarti.'],
        ['Se tarda una hora.', 'Ci vuole un’ora.'],
        ['Quiero que vengas.', 'Voglio che tu venga.'],
      ],
      points: [
        `«Tengo que» → ${b('devo')}, nunca ${i('ho che')}.`,
        `El pronombre va donde en español: ${i('lo posso fare')} / ${i('posso farlo')}; pero «te» es ${b('ti')}: ${i('aiutarti')}.`,
        `«Sé nadar» → ${b('so nuotare')}: aquí el italiano y el español coinciden.`,
      ],
    },
    pt: {
      h2: 'Os verbos modais comparados com o português',
      intro: `${i('Potere')} e ${i('volere')} funcionam como poder e querer. A diferença: o italiano não tem «ter que» nem «precisar», tudo se diz com ${b('dovere')} ou com ${b('bisogna')}.`,
      th: ['Português', 'Italiano'],
      rows: [
        ['Tenho que trabalhar.', 'Devo lavorare.'],
        ['Preciso estudar.', 'Devo studiare.'],
        ['Posso te ajudar.', 'Posso aiutarti.'],
        ['Leva uma hora.', 'Ci vuole un’ora.'],
        ['Quero que você venha.', 'Voglio che tu venga.'],
      ],
      points: [
        `«Tenho que» → ${b('devo')}, nunca ${i('ho che')}.`,
        `O pronome não fica entre os dois verbos como no Brasil («posso te ajudar»): ${b('ti posso aiutare')} ou ${b('posso aiutarti')}.`,
        `«Sei nadar» → ${b('so nuotare')}: aqui o italiano e o português coincidem.`,
      ],
    },
    fr: {
      h2: 'Les verbes modaux comparés au français',
      intro: `${i('Potere, volere, dovere')} correspondent à pouvoir, vouloir, devoir, avec les mêmes emplois. Les différences sont dans la place du pronom, dans « il faut » et dans le passé.`,
      th: ['Français', 'Italien'],
      rows: [
        ['Je peux le faire.', 'Lo posso fare. · Posso farlo.'],
        ['Il faut partir.', 'Bisogna partire.'],
        ['Il faut une heure.', 'Ci vuole un’ora.'],
        ["J'ai dû partir.", 'Sono dovuto partire.'],
        ['Pourriez-vous m’aider ?', 'Potrebbe aiutarmi?'],
      ],
      points: [
        `Le pronom ne va jamais entre les deux verbes : ${b('lo posso fare')} ou ${b('posso farlo')}, pas ${i('posso lo fare')}.`,
        `« Il faut » + verbe → ${b('bisogna')}; « il faut » + temps ou chose → ${b('ci vuole, ci vogliono')}.`,
        `Le vouvoiement est ${b('Lei')}, à la troisième personne : ${i('può, potrebbe')}.`,
      ],
    },
    cs: {
      h2: 'Modální slovesa ve srovnání s češtinou',
      intro: `${i('Potere, volere, dovere')} odpovídají českému moct, chtít, muset. Italština má ale méně sloves: ${b('potere')} je moct i smět, ${b('dovere')} muset i mít.`,
      th: ['Čeština', 'Italština'],
      rows: [
        ['Musím domů.', 'Devo andare a casa.'],
        ['Umím plavat.', 'So nuotare.'],
        ['Smím dál?', 'Posso entrare?'],
        ['Nemusíš platit.', 'Non c’è bisogno di pagare.'],
        ['Mohl byste mi pomoct?', 'Potrebbe aiutarmi?'],
      ],
      points: [
        `Sloveso pohybu nesmí chybět: ${b('devo andare a casa')}, ne ${i('devo a casa')}.`,
        `„Umět“ je ${b('sapere')}: ${i('so nuotare')}.`,
        `„Nemusíš“ není ${i('non devi')} (to je spíš „nesmíš“), ale ${b('non c’è bisogno')}.`,
      ],
    },
    pl: {
      h2: 'Czasowniki modalne w porównaniu z polskim',
      intro: `${i('Potere, volere, dovere')} to polskie móc, chcieć, musieć. Włoski ma jednak mniej czasowników: ${b('potere')} to móc i „wolno“, ${b('dovere')} to musieć i mieć.`,
      th: ['Polski', 'Włoski'],
      rows: [
        ['Muszę do domu.', 'Devo andare a casa.'],
        ['Umiem pływać.', 'So nuotare.'],
        ['Czy mogę wejść?', 'Posso entrare?'],
        ['Nie musisz płacić.', 'Non c’è bisogno di pagare.'],
        ['Czy mógłby pan mi pomóc?', 'Potrebbe aiutarmi?'],
      ],
      points: [
        `Czasownik ruchu musi być: ${b('devo andare a casa')}, nie ${i('devo a casa')}.`,
        `„Umieć“ to ${b('sapere')}: ${i('so nuotare')}.`,
        `„Nie musisz“ to nie ${i('non devi')} (to raczej „nie wolno ci“), ale ${b('non c’è bisogno')}.`,
      ],
    },
    tr: {
      h2: 'Modal fiiller ve Türkçe',
      intro: `Türkçe bunları fiile ek olarak ekler (-ebil-, -meli). İtalyanca ise önce çekimli ${b('modal fiili')}, sonra ${b('mastarı')} koyar.`,
      th: ['Türkçe', 'İtalyanca'],
      rows: [
        ['Gelebilirim.', 'Posso venire.'],
        ['Yüzmeyi biliyorum. · Yüzebilirim.', 'So nuotare.'],
        ['Çalışmalıyım.', 'Devo lavorare.'],
        ['Gitmek istiyorum.', 'Voglio andare.'],
        ['Yorgun olmalısın.', 'Devi essere stanco.'],
      ],
      points: [
        `Sıra tersine döner: “gitmek istiyorum” → ${b('voglio andare')}, önce ${i('voglio')}.`,
        `Öğrenilmiş bir beceri için ${b('sapere')}: ${i('so nuotare')}, ${i('posso nuotare')} değil.`,
        `“-mış olmalı” tahmini İtalyancada da ${b('dovere')} ile yapılır: ${i('deve essere a casa')}.`,
      ],
    },
    de: {
      h2: 'Die Modalverben im Vergleich mit dem Deutschen',
      intro: `Deutsch hat sechs Modalverben, Italienisch drei: ${b('potere')} (können, dürfen), ${b('volere')} (wollen, möchten), ${b('dovere')} (müssen, sollen). Und der Infinitiv steht direkt dahinter.`,
      th: ['Deutsch', 'Italienisch'],
      rows: [
        ['Ich muss nach Hause gehen.', 'Devo andare a casa.'],
        ['Ich kann schwimmen.', 'So nuotare.'],
        ['Darf ich reinkommen?', 'Posso entrare?'],
        ['Du musst nicht zahlen.', 'Non c’è bisogno di pagare.'],
        ['Ich habe gehen müssen.', 'Sono dovuto andare.'],
      ],
      points: [
        `Der Infinitiv kommt sofort: ${b('devo andare a casa')}, nicht ${i('devo a casa andare')}.`,
        `„Können“ als Fähigkeit ist ${b('sapere')}: ${i('so nuotare, so l’italiano')}.`,
        `„Du musst nicht“ ist ${b('non c’è bisogno')}; ${i('non devi')} heißt eher „du darfst nicht“.`,
      ],
    },
    ja: {
      h2: '法助動詞と日本語',
      intro: `日本語では「〜できる」「〜たい」「〜なければならない」が動詞の<strong>後ろ</strong>につきます。イタリア語では${b('法助動詞が先')}、不定詞が後です。`,
      th: ['日本語', 'イタリア語'],
      rows: [
        ['行きたいです。', 'Voglio andare.'],
        ['泳げます。（習った）', 'So nuotare.'],
        ['今日は泳げません。（プールが休み）', 'Oggi non posso nuotare.'],
        ['働かなければなりません。', 'Devo lavorare.'],
        ['払わなくてもいいです。', 'Non c’è bisogno di pagare.'],
      ],
      points: [
        `語順は逆：「行きたい」→ ${b('voglio andare')}。`,
        `「泳げる」は二通り：習った能力は ${b('sapere')}、今の状況は ${b('potere')}。`,
        `「〜してはいけない」は ${i('non devi')}、「〜しなくてもいい」は ${b('non c’è bisogno di')}。`,
      ],
    },
  },
};

export const ERRORS_MODALI = {
  [VM]: {
    it: [
      ['Posso nuotare molto bene.', 'So nuotare molto bene.', `<em lang="en">I can swim</em>: per una cosa imparata si usa ${b('sapere')}.`],
      ['Voglio te venire.', 'Voglio che tu venga.', `<em lang="en">I want you to come</em> → ${b('voglio che tu venga')}.`],
      ['Posso lo fare.', 'Lo posso fare.', `Il pronome va prima del modale o dopo l'infinito: ${b('lo posso fare')}, ${i('posso farlo')}.`],
      ['Io può venire.', 'Io posso venire.', `${i('Può')} è lui, lei, Lei; con io: ${b('posso')}.`],
      ['Signora, puoi aiutarmi?', 'Signora, può aiutarmi?', `Con Lei, la terza persona: ${b('può')}.`],
    ],
    en: [
      ['Posso nuotare molto bene.', 'So nuotare molto bene.', `“I can swim” (a skill you learned) → ${b('sapere')}: ${b('so nuotare')}.`],
      ['Voglio te venire.', 'Voglio che tu venga.', `“I want you to come” → ${b('voglio che tu venga')}.`],
      ['Posso lo fare.', 'Lo posso fare.', `The pronoun goes before the modal or after the infinitive: ${b('lo posso fare')}, ${i('posso farlo')}.`],
      ['Io può venire.', 'Io posso venire.', `${i('Può')} is he, she or formal you; with io: ${b('posso')}.`],
      ['Signora, puoi aiutarmi?', 'Signora, può aiutarmi?', `Formal “you” (${i('Lei')}) takes the third person: ${b('può')}.`],
    ],
    es: [
      ['Ho che partire.', 'Devo partire.', `«Tengo que» → ${b('devo')}: no existe ${i('avere che')}.`],
      ['C’è che studiare.', 'Bisogna studiare.', `«Hay que» → ${b('bisogna')} o ${i('si deve')}.`],
      ['Noi potiamo venire.', 'Noi possiamo venire.', `«Podemos» → ${b('possiamo')}, con doble s.`],
      ['Posso aiutarte.', 'Posso aiutarti.', `«Ayudarte» → ${b('aiutarti')}: el pronombre es ${i('ti')}.`],
      ['Fa falta un’ora.', 'Ci vuole un’ora.', `«Hace falta una hora» → ${b('ci vuole')}.`],
    ],
    pt: [
      ['Ho che partire.', 'Devo partire.', `«Tenho que» → ${b('devo')}: não existe ${i('avere che')}.`],
      ['Posso ti aiutare.', 'Ti posso aiutare.', `«Posso te ajudar»: o pronome vai antes de ${i('posso')} ou depois do infinitivo, ${b('posso aiutarti')}.`],
      ['Noi potiamo venire.', 'Noi possiamo venire.', `«Podemos» → ${b('possiamo')}, com ss.`],
      ['Precisa studiare.', 'Bisogna studiare.', `«Precisa estudar» (é necessário) → ${b('bisogna')}.`],
      ['Porta un’ora.', 'Ci vuole un’ora.', `«Leva uma hora» → ${b('ci vuole')}.`],
    ],
    fr: [
      ['Posso lo fare.', 'Posso farlo.', `« Je peux le faire » : le pronom se colle à l’infinitif, ${b('posso farlo')}, ou va avant, ${i('lo posso fare')}.`],
      ['Bisogna un’ora.', 'Ci vuole un’ora.', `« Il faut une heure » → ${b('ci vuole')} ; ${i('bisogna')} seulement avec un verbe.`],
      ['Signora, potete aiutarmi?', 'Signora, può aiutarmi?', `Le vouvoiement est ${i('Lei')} : ${b('può')}, pas ${i('potete')}.`],
      ['Io può venire.', 'Io posso venire.', `« Je peux » → ${b('posso')} ; ${i('può')} est « il peut ».`],
      ['Mi devo alzarmi.', 'Mi devo alzare.', `Un seul pronom : ${b('mi devo alzare')} ou ${i('devo alzarmi')}.`],
    ],
    cs: [
      ['Devo a casa.', 'Devo andare a casa.', `„Musím domů“: italsky musí být sloveso, ${b('devo andare')}.`],
      ['Posso lo fare.', 'Lo posso fare.', `Zájmeno stojí před modálním slovesem nebo za infinitivem: ${b('lo posso fare')}, ${i('posso farlo')}.`],
      ['Signora, potete aiutarmi?', 'Signora, può aiutarmi?', `Vykání je ${i('Lei')}, třetí osoba: ${b('può')}.`],
      ['Io può venire.', 'Io posso venire.', `„Můžu“ → ${b('posso')}; ${i('può')} je „může“.`],
      ['Mi devo alzarmi.', 'Mi devo alzare.', `Jen jedno zájmeno: ${b('mi devo alzare')} nebo ${i('devo alzarmi')}.`],
    ],
    pl: [
      ['Devo a casa.', 'Devo andare a casa.', `„Muszę do domu“: po włosku musi być czasownik, ${b('devo andare')}.`],
      ['Posso lo fare.', 'Lo posso fare.', `Zaimek stoi przed czasownikiem modalnym albo po bezokoliczniku: ${b('lo posso fare')}, ${i('posso farlo')}.`],
      ['Io può venire.', 'Io posso venire.', `„Mogę“ → ${b('posso')}; ${i('può')} to „może“.`],
      ['Noi dovemo partire.', 'Noi dobbiamo partire.', `„Musimy“ → ${b('dobbiamo')}, nieregularne.`],
      ['Mi devo alzarmi.', 'Mi devo alzare.', `Tylko jeden zaimek: ${b('mi devo alzare')} albo ${i('devo alzarmi')}.`],
    ],
    tr: [
      ['Devo vado a casa.', 'Devo andare a casa.', `İkinci fiil çekimlenmez, ${b('mastar')} olur: ${b('andare')}.`],
      ['Posso nuotare molto bene.', 'So nuotare molto bene.', `“Yüzebilirim” (öğrendim) → ${b('so nuotare')}: beceri için ${i('sapere')}.`],
      ['Io può venire.', 'Io posso venire.', `“Gelebilirim” → ${b('posso')}; ${i('può')} üçüncü tekil kişidir.`],
      ['Noi dovemo partire.', 'Noi dobbiamo partire.', `“Gitmeliyiz” → ${b('dobbiamo')}, düzensiz.`],
      ['Mi devo alzarmi.', 'Mi devo alzare.', `Zamir bir kez: ${b('mi devo alzare')} ya da ${i('devo alzarmi')}.`],
    ],
    de: [
      ['Devo a casa andare.', 'Devo andare a casa.', `Der Infinitiv steht direkt nach dem Modalverb: ${b('devo andare a casa')}.`],
      ['Posso nuotare molto bene.', 'So nuotare molto bene.', `„Ich kann schwimmen“ (gelernt) → ${b('so nuotare')}.`],
      ['Posso lo fare.', 'Lo posso fare.', `Das Pronomen steht vor dem Modalverb oder am Infinitiv: ${b('lo posso fare')}, ${i('posso farlo')}.`],
      ['Io può venire.', 'Io posso venire.', `„Ich kann“ → ${b('posso')}; ${i('può')} ist „er kann“.`],
      ['Signora, potete aiutarmi?', 'Signora, può aiutarmi?', `„Sie“ ist ${i('Lei')} mit der dritten Person Singular: ${b('può')}.`],
    ],
    ja: [
      ['Posso nuotare molto bene.', 'So nuotare molto bene.', `「泳げる」（習った能力）は ${b('so nuotare')}。`],
      ['Devo vado a casa.', 'Devo andare a casa.', `二つ目の動詞は不定詞：${b('andare')}。`],
      ['Io può venire.', 'Io posso venire.', `io には ${b('posso')}。${i('può')} は三人称です。`],
      ['Posso lo fare.', 'Lo posso fare.', `代名詞は法助動詞の前か不定詞の後ろ：${b('lo posso fare')}、${i('posso farlo')}。`],
      ['Noi dovemo partire.', 'Noi dobbiamo partire.', `noi は ${b('dobbiamo')}（不規則）。`],
    ],
  },
};

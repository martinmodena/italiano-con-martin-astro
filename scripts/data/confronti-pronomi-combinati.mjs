// Confronto con la lingua dello studente ed errori tipici della lezione «I pronomi combinati» (B1), rifatta il
// 2026-11-27 (prima non aveva né l'uno né gli altri). Stesso formato di confronti-lingua.mjs ed errori-lingua.mjs, che
// li aggiungono a NOTES ed ERRORS; li inserisce scripts/add-language-notes.mjs.
//
// Le trappole per lingua: inglese l'ordine «give it to me» (diretto prima), him / her / them = glie-, nessun accordo
// del participio; spagnolo «se lo doy» → glielo, niente «ne», participio invariabile; portoghese brasiliano il
// pronome che sparisce («te dou», «me dá!») e «pra ele»; francese «je le lui donne» e «donne-le-moi» (ordine
// rovesciato alla terza persona e all'imperativo), «il y en a»; ceco e polacco «dám ti ho / dam ci to» con il «to»
// neutro, niente «ne»; turco l'oggetto sottinteso e «onu ona» (diretto prima); tedesco «ich gebe es dir» (diretto
// prima), «davon»; giapponese i pronomi sottintesi.

const i = (s) => `<span lang="it">${s}</span>`;
const b = (s) => `<strong lang="it">${s}</strong>`;

const PC = 'grammatica/b1/pronomi-combinati.html';

export const NOTES_COMBINATI = {
  [PC]: {
    after: 'regola',
    it: {
      h2: 'I pronomi combinati: il confronto con l’inglese',
      intro: `In inglese i pronomi vanno dopo il verbo e prima viene la cosa: <em lang="en">give it to me</em>. In italiano vanno prima del verbo e prima viene la persona: ${i('me lo dai')}.`,
      th: ['Inglese', 'Italiano'],
      rows: [
        ['I’ll give it to you.', 'Te lo do.'],
        ['Give it to me!', 'Dammelo!'],
        ['I told him / her / them.', 'Gliel’ho detto.'],
        ['Can you send it to me?', 'Me lo puoi mandare? · Puoi mandarmelo?'],
        ['Give me two of them!', 'Dammene due!'],
      ],
      points: [
        `Prima ${b('a chi')}, poi ${b('che cosa')}: ${i('te lo')}, non ${i('lo ti')}.`,
        `<em lang="en">Him, her, them</em> + <em lang="en">it</em> sono tutti ${b('glielo')}.`,
        `<em lang="en">Of them</em> con una quantità è ${b('ne')}: ${i('dammene due')}.`,
      ],
    },
    en: {
      h2: 'Combined pronouns compared with English',
      intro: `In English pronouns follow the verb and the thing comes first: <em>give it to me</em>. In Italian they go before the verb and the person comes first: ${i('me lo dai')}.`,
      th: ['English', 'Italian'],
      rows: [
        ['I’ll give it to you.', 'Te lo do.'],
        ['Give it to me!', 'Dammelo!'],
        ['I told him / her / them.', 'Gliel’ho detto.'],
        ['Can you send it to me?', 'Me lo puoi mandare? · Puoi mandarmelo?'],
        ['Give me two of them!', 'Dammene due!'],
      ],
      points: [
        `First ${b('to whom')}, then ${b('what')}: ${i('te lo')} (to you + it), never ${i('lo ti')}.`,
        `<em>Him, her, them</em> + <em>it</em> are all ${b('glielo')}.`,
        `“Of them” with a quantity is ${b('ne')}: ${i('dammene due')}.`,
      ],
    },
    es: {
      h2: 'Los pronombres combinados comparados con el español',
      intro: `Aquí el español ayuda mucho: el mismo orden (primero a quién, luego qué) y la misma posición (${i('te lo doy → te lo do')}, «dámelo» → ${i('dammelo')}). Las diferencias están en la tercera persona y en ${i('ne')}.`,
      th: ['Español', 'Italiano'],
      rows: [
        ['Te lo doy.', 'Te lo do.'],
        ['Se lo doy (a él, a ella, a ellos).', 'Glielo do.'],
        ['Dámelo.', 'Dammelo.'],
        ['Quiero decírtelo.', 'Voglio dirtelo.'],
        ['Dame dos.', 'Dammene due.'],
      ],
      points: [
        `«Se lo» → ${b('glielo')}, en una sola palabra.`,
        `El participio concuerda: «la carta, te la he dado» → ${b('te l’ho data')}.`,
        `Con una cantidad hace falta ${b('ne')}, que no existe en español: «dame dos» → ${i('dammene due')}.`,
      ],
    },
    pt: {
      h2: 'Os pronomes combinados comparados com o português',
      intro: `No Brasil quase ninguém diz «dei-lho»: se fala «dei pra ele» ou se tira o pronome («te dou», «me dá!»). Em italiano os dois pronomes juntos são normais no dia a dia e não podem faltar.`,
      th: ['Português', 'Italiano'],
      rows: [
        ['Te dou (isso).', 'Te lo do.'],
        ['Me dá!', 'Dammelo!'],
        ['Eu disse pra ele.', 'Gliel’ho detto.'],
        ['Quero te contar.', 'Voglio raccontartelo.'],
        ['Me dá dois.', 'Dammene due.'],
      ],
      points: [
        `O objeto não some: «te dou» → ${b('te lo do')}.`,
        `«Pra ele, pra ela, pra eles» + objeto → ${b('glielo')}.`,
        `Com quantidade se usa ${b('ne')}: «me dá dois» → ${i('dammene due')}.`,
      ],
    },
    fr: {
      h2: 'Les pronoms combinés comparés au français',
      intro: `« Je te le donne » marche comme ${i('te lo do')}. Mais à la troisième personne et à l’impératif, l’ordre français s’inverse : en italien, c’est ${b('toujours')} à qui, puis quoi.`,
      th: ['Français', 'Italien'],
      rows: [
        ['Je te le donne.', 'Te lo do.'],
        ['Je le lui donne.', 'Glielo do.'],
        ['Donne-le-moi !', 'Dammelo!'],
        ['Je t’en donne deux.', 'Te ne do due.'],
        ['Il y en a trois.', 'Ce ne sono tre.'],
      ],
      points: [
        `« Le lui, la leur » → ${b('glielo, gliela')}, en un seul mot.`,
        `À l’impératif aussi la personne d’abord : « donne-le-moi » → ${b('dammelo')}.`,
        `« Il y en a » → ${b('ce n’è, ce ne sono')}.`,
      ],
    },
    cs: {
      h2: 'Kombinovaná zájmena ve srovnání s češtinou',
      intro: `„Dám ti ho“: jako v češtině jde nejdřív dativ, pak akuzativ. V italštině ale zájmena stojí ${b('před slovesem')} (nebo jsou k němu připojená) a mění tvar: ${i('ti + lo → te lo')}.`,
      th: ['Čeština', 'Italština'],
      rows: [
        ['Dám ti to.', 'Te lo do.'],
        ['Dal jsem mu ji.', 'Gliel’ho data.'],
        ['Dej mi to!', 'Dammelo!'],
        ['Chci ti to říct.', 'Voglio dirtelo.'],
        ['Dej mi dva.', 'Dammene due.'],
      ],
      points: [
        `České „to“ se překládá podle rodu věci: ${i('lo')} nebo ${i('la')}.`,
        `„Mu, jí, jim“ + „to“ → ${b('glielo')}.`,
        `Při množství je potřeba ${b('ne')}: „dej mi dva“ → ${i('dammene due')}.`,
      ],
    },
    pl: {
      h2: 'Zaimki łączone w porównaniu z polskim',
      intro: `„Dam ci to”: jak w polskim najpierw celownik, potem biernik. Po włosku zaimki stoją jednak ${b('przed czasownikiem')} (albo są do niego doklejone) i zmieniają formę: ${i('ti + lo → te lo')}.`,
      th: ['Polski', 'Włoski'],
      rows: [
        ['Dam ci to.', 'Te lo do.'],
        ['Dałem mu ją.', 'Gliel’ho data.'],
        ['Daj mi to!', 'Dammelo!'],
        ['Chcę ci to powiedzieć.', 'Voglio dirtelo.'],
        ['Daj mi dwa.', 'Dammene due.'],
      ],
      points: [
        `Polskie „to” tłumaczy się według rodzaju rzeczy: ${i('lo')} albo ${i('la')}.`,
        `„Mu, jej, im” + „to” → ${b('glielo')}.`,
        `Przy ilości potrzebne jest ${b('ne')}: „daj mi dwa” → ${i('dammene due')}.`,
      ],
    },
    tr: {
      h2: 'Birleşik zamirler ve Türkçe',
      intro: `Türkçede nesne çoğu zaman söylenmez (“Veririm.”). İtalyancada iki zamir de söylenir, fiilin ${b('önüne')} gelir ve sıra hep aynıdır: önce kime, sonra ne.`,
      th: ['Türkçe', 'İtalyanca'],
      rows: [
        ['(Onu) sana veririm.', 'Te lo do.'],
        ['(Onu) ona söyledim.', 'Gliel’ho detto.'],
        ['Bana ver!', 'Dammelo!'],
        ['Sana söylemek istiyorum.', 'Voglio dirtelo.'],
        ['Bana iki tane ver.', 'Dammene due.'],
      ],
      points: [
        `Nesne düşmez: “veririm” → ${b('te lo do')}.`,
        `“Onu ona” sırası tersine döner: ${b('glielo')} (önce ${i('glie')} = ona, sonra ${i('lo')} = onu).`,
        `“İki tane” gibi miktarlarda ${b('ne')} gerekir: ${i('dammene due')}.`,
      ],
    },
    de: {
      h2: 'Kombinierte Pronomen im Vergleich mit dem Deutschen',
      intro: `Im Deutschen kommt bei zwei Pronomen zuerst das Akkusativ-Pronomen: „ich gebe es dir“. Im Italienischen ist es umgekehrt, und beide stehen ${b('vor dem Verb')}: ${i('te lo do')}.`,
      th: ['Deutsch', 'Italienisch'],
      rows: [
        ['Ich gebe es dir.', 'Te lo do.'],
        ['Ich habe es ihm / ihr / ihnen gesagt.', 'Gliel’ho detto.'],
        ['Gib es mir!', 'Dammelo!'],
        ['Ich will es dir sagen.', 'Voglio dirtelo. · Te lo voglio dire.'],
        ['Gib mir zwei davon!', 'Dammene due!'],
      ],
      points: [
        `Erst ${b('wem')}, dann ${b('was')}: ${i('te lo')}, nie ${i('lo ti')}.`,
        `„Es ihm, es ihr, es ihnen“ → ${b('glielo')}, ein Wort.`,
        `„Davon“ bei Mengen ist ${b('ne')}: ${i('dammene due')}.`,
      ],
    },
    ja: {
      h2: '結合代名詞と日本語',
      intro: `日本語では「それを」「あなたに」をよく省きます（「あげる」）。イタリア語では 2 つの代名詞をはっきり言い、動詞の${b('前')}に「だれに → 何を」の順で置きます。`,
      th: ['日本語', 'イタリア語'],
      rows: [
        ['（それを）あなたにあげます。', 'Te lo do.'],
        ['（それを）彼に言いました。', 'Gliel’ho detto.'],
        ['ちょうだい！', 'Dammelo!'],
        ['あなたに言いたい。', 'Voglio dirtelo.'],
        ['二つください。', 'Me ne dia due.'],
      ],
      points: [
        `「それを」は省けません：「あげる」→ ${b('te lo do')}。`,
        `「彼に・彼女に・彼らに」+「それを」→ ${b('glielo')}。`,
        `「二つ」のように数を言うときは ${b('ne')} が必要：${i('dammene due')}。`,
      ],
    },
  },
};

export const ERRORS_COMBINATI = {
  [PC]: {
    it: [
      ['Lo ti do.', 'Te lo do.', `<em lang="en">I give it to you</em>: in italiano prima la persona, ${b('te lo')}.`],
      ['Dai me lo!', 'Dammelo!', `<em lang="en">Give it to me!</em> → ${b('dammelo')}, una parola sola.`],
      ['Gli lo dico.', 'Glielo dico.', `<em lang="en">I tell him</em> + <em lang="en">it</em> → ${b('glielo')}.`],
      ['La chiave? Te l’ho dato.', 'La chiave? Te l’ho data.', `In inglese il participio non cambia; qui si accorda con ${i('la chiave')}: ${b('data')}.`],
      ['Dammi due.', 'Dammene due.', `<em lang="en">Give me two (of them)</em>: ci vuole ${b('ne')}.`],
    ],
    en: [
      ['Lo ti do.', 'Te lo do.', `<em>I give it to you</em>: in Italian the person comes first, ${b('te lo')}.`],
      ['Dai me lo!', 'Dammelo!', `<em>Give it to me!</em> → ${b('dammelo')}, one word.`],
      ['Gli lo dico.', 'Glielo dico.', `<em>I tell him</em> + <em>it</em> → ${b('glielo')}.`],
      ['La chiave? Te l’ho dato.', 'La chiave? Te l’ho data.', `The participle agrees with ${i('la chiave')}: ${b('data')}.`],
      ['Dammi due.', 'Dammene due.', `<em>Give me two (of them)</em>: you need ${b('ne')}.`],
    ],
    es: [
      ['Se lo do.', 'Glielo do.', `«Se lo doy» → ${b('glielo do')}; ${i('se lo')} en italiano es reflexivo.`],
      ['La lettera? Me l’ha dato.', 'La lettera? Me l’ha data.', `«Me la ha dado»: en italiano el participio concuerda, ${b('data')}.`],
      ['Gliela ho data.', 'Gliel’ho data.', `Delante de ${i('ho')}, ${i('la')} pierde la vocal: ${b('gliel’ho')}.`],
      ['Dammi due.', 'Dammene due.', `«Dame dos»: en italiano hace falta ${b('ne')}.`],
      ['Ci ne sono tre.', 'Ce ne sono tre.', `«Hay tres»: ${i('ci')} + ${i('ne')} → ${b('ce ne')}.`],
    ],
    pt: [
      ['Sì, ti do.', 'Sì, te lo do.', `«Te dou»: em italiano o objeto não some, ${b('te lo do')}.`],
      ['Dami!', 'Dammelo!', `«Me dá!» → ${b('dammelo')}, com dois m e com ${i('lo')}.`],
      ['Gli lo dico.', 'Glielo dico.', `«Digo pra ele» + objeto → ${b('glielo')}, uma palavra só.`],
      ['La foto? Te l’ho dato.', 'La foto? Te l’ho data.', `O particípio concorda com ${i('la foto')}: ${b('data')}.`],
      ['Dammi due.', 'Dammene due.', `«Me dá dois»: em italiano é preciso ${b('ne')}.`],
    ],
    fr: [
      ['Lo gli do.', 'Glielo do.', `« Je le lui donne » : en italien la personne d’abord, ${b('glielo')}.`],
      ['Dai lo a me!', 'Dammelo!', `« Donne-le-moi ! » → ${b('dammelo')}.`],
      ['Ci ne sono tre.', 'Ce ne sono tre.', `« Il y en a trois » → ${b('ce ne sono tre')}.`],
      ['La lettera? Te l’ho scritto.', 'La lettera? Te l’ho scritta.', `Comme « je te l’ai écrite », mais en italien l’accord s’entend toujours : ${b('scritta')}.`],
      ['Mi lo dici?', 'Me lo dici?', `« Me le » → ${b('me lo')} ; ${i('mi')} devient ${i('me')}.`],
    ],
    cs: [
      ['Ti lo do.', 'Te lo do.', `„Dám ti to“: ${i('ti')} se před ${i('lo')} mění na ${b('te')}.`],
      ['Gli la ho data.', 'Gliel’ho data.', `„Dal jsem mu ji“ → ${b('gliel’ho data')}, jedno slovo a apostrof.`],
      ['Dai mi lo!', 'Dammelo!', `„Dej mi to!“ → ${b('dammelo')}.`],
      ['Voglio ti lo dire.', 'Voglio dirtelo.', `„Chci ti to říct“: ${b('voglio dirtelo')} nebo ${i('te lo voglio dire')}.`],
      ['Dammi due.', 'Dammene due.', `„Dej mi dva“: italsky je potřeba ${b('ne')}.`],
    ],
    pl: [
      ['Ti lo do.', 'Te lo do.', `„Dam ci to”: ${i('ti')} przed ${i('lo')} zmienia się w ${b('te')}.`],
      ['Gli la ho data.', 'Gliel’ho data.', `„Dałem mu ją” → ${b('gliel’ho data')}, jedno słowo i apostrof.`],
      ['Dai mi lo!', 'Dammelo!', `„Daj mi to!” → ${b('dammelo')}.`],
      ['Voglio ti lo dire.', 'Voglio dirtelo.', `„Chcę ci to powiedzieć”: ${b('voglio dirtelo')} albo ${i('te lo voglio dire')}.`],
      ['Dammi due.', 'Dammene due.', `„Daj mi dwa”: po włosku potrzebne jest ${b('ne')}.`],
    ],
    tr: [
      ['Sì, ti do.', 'Sì, te lo do.', `“Veririm”: İtalyancada nesne söylenir, ${b('te lo do')}.`],
      ['Lo gli do.', 'Glielo do.', `“Onu ona veririm”: sıra tersine döner, ${b('glielo')}.`],
      ['Dai a me lo!', 'Dammelo!', `“Bana ver!” → ${b('dammelo')}, tek kelime.`],
      ['Mi lo dai?', 'Me lo dai?', `${i('Mi')}, ${i('lo')}’dan önce ${b('me')} olur.`],
      ['Dammi due.', 'Dammene due.', `“İki tane ver”: ${b('ne')} gerekir.`],
    ],
    de: [
      ['Lo ti do.', 'Te lo do.', `„Ich gebe es dir“: im Italienischen erst die Person, ${b('te lo')}.`],
      ['Dai lo mi!', 'Dammelo!', `„Gib es mir!“ → ${b('dammelo')}, ein Wort.`],
      ['Voglio te lo dire.', 'Voglio dirtelo.', `Entweder ${b('voglio dirtelo')} oder ${b('te lo voglio dire')}, nicht dazwischen.`],
      ['Gli lo dico.', 'Glielo dico.', `„Ich sage es ihm“ → ${b('glielo dico')}.`],
      ['Dammi due.', 'Dammene due.', `„Gib mir zwei davon“: „davon“ ist ${b('ne')}.`],
    ],
    ja: [
      ['Sì, ti do.', 'Sì, te lo do.', `「あげます」：「それを」にあたる ${b('lo')} は省けません。`],
      ['Dai!', 'Dammelo!', `「ちょうだい！」→ ${b('dammelo')}。${i('dai!')} だけだと「ほら、さあ」の意味です。`],
      ['Mi lo dai?', 'Me lo dai?', `${i('lo')} の前では ${i('mi')} が ${b('me')} になります。`],
      ['Gli lo dico.', 'Glielo dico.', `「彼にそれを言う」→ ${b('glielo')}、一語で書きます。`],
      ['Mi dia due.', 'Me ne dia due.', `「二つください」：数だけを言うときは ${b('ne')} が必要です。`],
    ],
  },
};

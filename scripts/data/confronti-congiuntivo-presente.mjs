// Confronto con la lingua dello studente ed errori tipici della lezione «Il congiuntivo presente» (B2), rifatta il
// 2026-11-27 (prima non aveva né l'uno né gli altri). Stesso formato di confronti-lingua.mjs ed errori-lingua.mjs, che
// li aggiungono a NOTES ed ERRORS; li inserisce scripts/add-language-notes.mjs.
//
// Le trappole per lingua: inglese senza congiuntivo («I think he is», «I want you to come»); spagnolo e portoghese
// l'indicativo dopo «creo que / acho que» e il congiuntivo dopo «cuando / quando você vier», «aunque es»; portoghese
// anche «se você puder» → se puoi; francese l'indicativo dopo «espérer», «il est probable que», «je crois que»;
// ceco e polacco «chci, abys… / chcę, żebyś…» con il condizionale; turco il nome verbale («gelmeni istiyorum»);
// tedesco «dass» + indicativo; giapponese 「〜てほしい」「〜と思う」.

const i = (s) => `<span lang="it">${s}</span>`;
const b = (s) => `<strong lang="it">${s}</strong>`;

const CP = 'grammatica/b2/congiuntivo-presente.html';

export const NOTES_CONG_PRESENTE = {
  [CP]: {
    after: 'usi',
    it: {
      h2: 'Il congiuntivo: il confronto con l’inglese',
      intro: `L’inglese moderno quasi non ha congiuntivo: dice <em lang="en">I think he is</em> e <em lang="en">I want you to come</em>. In italiano tutte e due le frasi vogliono il congiuntivo.`,
      th: ['Inglese', 'Italiano'],
      rows: [
        ['I think he’s right.', 'Penso che abbia ragione.'],
        ['I want you to come.', 'Voglio che tu venga.'],
        ['I hope it’s sunny tomorrow.', 'Spero che domani ci sia il sole.'],
        ['It’s important that everyone understands.', 'È importante che tutti capiscano.'],
        ['I hope to come.', 'Spero di venire.'],
      ],
      points: [
        `<em lang="en">I want you to…</em> → ${b('voglio che tu')} + congiuntivo.`,
        `<em lang="en">I think</em>, <em lang="en">I hope</em>, <em lang="en">it’s important</em> + ${i('che')} → congiuntivo.`,
        `Stesso soggetto: ${b('di + infinito')}, come <em lang="en">I hope to come</em>.`,
      ],
    },
    en: {
      h2: 'The congiuntivo compared with English',
      intro: `Modern English hardly has a subjunctive: it says <em>I think he is</em> and <em>I want you to come</em>. Italian uses the congiuntivo in both.`,
      th: ['English', 'Italian'],
      rows: [
        ['I think he’s right.', 'Penso che abbia ragione.'],
        ['I want you to come.', 'Voglio che tu venga.'],
        ['I hope it’s sunny tomorrow.', 'Spero che domani ci sia il sole.'],
        ['It’s important that everyone understands.', 'È importante che tutti capiscano.'],
        ['I hope to come.', 'Spero di venire.'],
      ],
      points: [
        `“I want you to…” → ${b('voglio che tu')} + congiuntivo, never ${i('voglio te')}.`,
        `“I think”, “I hope”, “it’s important” + ${i('che')} → congiuntivo.`,
        `Same subject: ${b('di + infinitive')}, like “I hope to come”.`,
      ],
    },
    es: {
      h2: 'El congiuntivo comparado con el subjuntivo español',
      intro: `El español tiene subjuntivo y se usa casi igual: «quiero que vengas» → ${i('voglio che tu venga')}. Pero hay tres diferencias importantes: las opiniones, ${i('quando')} y ${i('benché')}.`,
      th: ['Español', 'Italiano'],
      rows: [
        ['Creo que tiene razón.', 'Credo che abbia ragione.'],
        ['Me parece que es tarde.', 'Mi sembra che sia tardi.'],
        ['Cuando vengas, te lo digo.', 'Quando vieni (verrai), te lo dico.'],
        ['Aunque es tarde, me quedo.', 'Benché sia tardi, resto.'],
        ['Quiero que vengas.', 'Voglio che tu venga.'],
      ],
      points: [
        `Tras «creo que, pienso que, me parece que» el español usa indicativo; el italiano, ${b('congiuntivo')}: ${i('credo che sia')}.`,
        `Tras ${b('quando')} nunca congiuntivo: presente o futuro.`,
        `${b('Benché')} siempre con congiuntivo; con indicativo se dice ${i('anche se')}.`,
      ],
    },
    pt: {
      h2: 'O congiuntivo comparado com o subjuntivo português',
      intro: `O português tem subjuntivo e muitas vezes ele coincide: «quero que você venha» → ${i('voglio che tu venga')}. Mas há diferenças importantes com «acho que», com o futuro do subjuntivo e com o «se».`,
      th: ['Português', 'Italiano'],
      rows: [
        ['Acho que ele tem razão.', 'Penso che abbia ragione.'],
        ['Quando você vier, te ligo.', 'Quando verrai (vieni), ti chiamo.'],
        ['Se você puder, venha.', 'Se puoi, vieni.'],
        ['Parece que está tarde.', 'Mi sembra che sia tardi.'],
        ['Espero que você venha.', 'Spero che tu venga.'],
      ],
      points: [
        `Depois de «acho que, parece que» o português usa indicativo; o italiano, ${b('congiuntivo')}: ${i('penso che sia')}.`,
        `O italiano não tem futuro do subjuntivo: «quando você vier» → ${b('quando verrai')} ou ${i('quando vieni')}.`,
        `Depois de ${b('se')} nunca congiuntivo presente: «se você puder» → ${i('se puoi')}.`,
      ],
    },
    fr: {
      h2: 'Le congiuntivo comparé au subjonctif français',
      intro: `Le français a le subjonctif et l’emploie souvent comme l’italien : « il faut que tu viennes » → ${i('bisogna che tu venga')}. Mais l’italien l’utilise aussi après les verbes d’opinion et d’espoir, où le français met l’indicatif.`,
      th: ['Français', 'Italien'],
      rows: [
        ['Je pense qu’il a raison.', 'Penso che abbia ragione.'],
        ['J’espère qu’il vient.', 'Spero che venga.'],
        ['Il est probable qu’il pleut.', 'È probabile che piova.'],
        ['Bien qu’il soit tard…', 'Benché sia tardi…'],
        ['Je veux que tu viennes.', 'Voglio che tu venga.'],
      ],
      points: [
        `« Je pense, je crois, il me semble que » + indicatif → ${b('penso, credo, mi sembra che')} + congiuntivo.`,
        `« Espérer que » + indicatif → ${b('sperare che')} + congiuntivo.`,
        `« Il est probable que » → ${b('è probabile che')} + congiuntivo.`,
      ],
    },
    cs: {
      h2: 'Congiuntivo ve srovnání s češtinou',
      intro: `Čeština congiuntivo nemá. „Chci, abys přišel“ používá „aby“ s tvarem podmiňovacího způsobu; „myslím, že je“ oznamovací způsob. Italština v obou případech používá ${b('congiuntivo')}.`,
      th: ['Čeština', 'Italština'],
      rows: [
        ['Myslím, že má pravdu.', 'Penso che abbia ragione.'],
        ['Chci, abys přišel.', 'Voglio che tu venga.'],
        ['Doufám, že zítra bude svítit slunce.', 'Spero che domani ci sia il sole.'],
        ['Půjčím ti knihu, abys ji přečetl.', 'Ti presto il libro perché tu lo legga.'],
        ['Doufám, že přijdu.', 'Spero di venire.'],
      ],
      points: [
        `„Aby“ + minulý tvar → ${b('che')} / ${b('perché')} + congiuntivo přítomný.`,
        `„Myslím, že“, „doufám, že“ → ${b('penso che, spero che')} + congiuntivo.`,
        `Stejný podmět: ${b('di + infinitiv')}: ${i('spero di venire')}.`,
      ],
    },
    pl: {
      h2: 'Congiuntivo w porównaniu z polskim',
      intro: `Polski nie ma congiuntivo. „Chcę, żebyś przyszedł” używa „żeby” z formą przeszłą; „myślę, że jest” trybu oznajmującego. Włoski w obu przypadkach używa ${b('congiuntivo')}.`,
      th: ['Polski', 'Włoski'],
      rows: [
        ['Myślę, że ma rację.', 'Penso che abbia ragione.'],
        ['Chcę, żebyś przyszedł.', 'Voglio che tu venga.'],
        ['Mam nadzieję, że jutro będzie słońce.', 'Spero che domani ci sia il sole.'],
        ['Pożyczę ci książkę, żebyś ją przeczytał.', 'Ti presto il libro perché tu lo legga.'],
        ['Mam nadzieję, że przyjdę.', 'Spero di venire.'],
      ],
      points: [
        `„Żeby” + forma przeszła → ${b('che')} / ${b('perché')} + congiuntivo teraźniejszy.`,
        `„Myślę, że”, „mam nadzieję, że” → ${b('penso che, spero che')} + congiuntivo.`,
        `Ten sam podmiot: ${b('di + bezokolicznik')}: ${i('spero di venire')}.`,
      ],
    },
    tr: {
      h2: 'Congiuntivo ve Türkçe',
      intro: `Türkçe bu anlamları fiilden isim yaparak verir: “gelmeni istiyorum”, “haklı olduğunu düşünüyorum”. İtalyanca ise ${b('che')} + çekimli bir fiil kullanır, bu fiil de ${b('congiuntivo')}’dur.`,
      th: ['Türkçe', 'İtalyanca'],
      rows: [
        ['Haklı olduğunu düşünüyorum.', 'Penso che abbia ragione.'],
        ['Gelmeni istiyorum.', 'Voglio che tu venga.'],
        ['Umarım yarın güneş olur.', 'Spero che domani ci sia il sole.'],
        ['Geç olmasına rağmen kalıyorum.', 'Benché sia tardi, resto.'],
        ['Gelmeyi umuyorum.', 'Spero di venire.'],
      ],
      points: [
        `“-meni istiyorum” → ${b('voglio che tu')} + congiuntivo.`,
        `“-diğini düşünüyorum” → ${b('penso che')} + congiuntivo.`,
        `Aynı özne: ${b('di + mastar')}: ${i('spero di venire')}.`,
      ],
    },
    de: {
      h2: 'Das congiuntivo im Vergleich mit dem Deutschen',
      intro: `Der deutsche Konjunktiv wird anders verwendet (indirekte Rede, Irreales). Nach „ich glaube, dass“ oder „ich will, dass“ steht im Deutschen der Indikativ, im Italienischen das ${b('congiuntivo')}.`,
      th: ['Deutsch', 'Italienisch'],
      rows: [
        ['Ich glaube, dass er recht hat.', 'Credo che abbia ragione.'],
        ['Ich will, dass du kommst.', 'Voglio che tu venga.'],
        ['Ich hoffe, dass morgen die Sonne scheint.', 'Spero che domani ci sia il sole.'],
        ['Obwohl es spät ist, bleibe ich.', 'Benché sia tardi, resto.'],
        ['Ich hoffe zu kommen.', 'Spero di venire.'],
      ],
      points: [
        `„Ich will, dass du…“ → ${b('voglio che tu')} + congiuntivo.`,
        `„Ich glaube / hoffe, dass“ → ${b('credo / spero che')} + congiuntivo.`,
        `Gleiches Subjekt: ${b('di + Infinitiv')}, wie „ich hoffe zu kommen“.`,
      ],
    },
    ja: {
      h2: '接続法と日本語',
      intro: `日本語には接続法はありません。「来てほしい」「正しいと思う」のように言いますが、イタリア語では ${b('che')} のあとに動詞の ${b('congiuntivo')}（接続法）を使います。`,
      th: ['日本語', 'イタリア語'],
      rows: [
        ['彼は正しいと思います。', 'Penso che abbia ragione.'],
        ['あなたに来てほしい。', 'Voglio che tu venga.'],
        ['明日晴れるといいな。', 'Spero che domani ci sia il sole.'],
        ['遅いけれど、残ります。', 'Benché sia tardi, resto.'],
        ['行けるといいな（自分が）。', 'Spero di venire.'],
      ],
      points: [
        `「〜てほしい」→ ${b('voglio che')} + 接続法。`,
        `「〜と思う」「〜といい」→ ${b('penso che, spero che')} + 接続法。`,
        `主語が同じなら ${b('di + 不定詞')}：${i('spero di venire')}。`,
      ],
    },
  },
};

export const ERRORS_CONG_PRESENTE = {
  [CP]: {
    it: [
      ['Voglio che tu vieni.', 'Voglio che tu venga.', `<em lang="en">I want you to come</em>: dopo ${i('voglio che')} ci vuole il congiuntivo.`],
      ['Penso che lui è bravo.', 'Penso che lui sia bravo.', `<em lang="en">I think he is</em>: dopo ${i('penso che')}, ${b('sia')}.`],
      ['Voglio che io vada.', 'Voglio andare.', `Stesso soggetto: niente ${i('che')}, ${b('voglio andare')}.`],
      ['So che sia vero.', 'So che è vero.', `Con la certezza (${i('so che')}) ci vuole l’indicativo.`],
      ['Te lo do perché lo leggi.', 'Te lo do perché tu lo legga.', `<em lang="en">So that you read it</em>: ${i('perché')} di scopo vuole il congiuntivo.`],
    ],
    en: [
      ['Voglio che tu vieni.', 'Voglio che tu venga.', `<em>I want you to come</em>: after ${i('voglio che')}, the congiuntivo.`],
      ['Penso che lui è bravo.', 'Penso che lui sia bravo.', `<em>I think he is</em>: after ${i('penso che')}, ${b('sia')}.`],
      ['Voglio che io vada.', 'Voglio andare.', `Same subject: no ${i('che')}, just ${b('voglio andare')}.`],
      ['So che sia vero.', 'So che è vero.', `With certainty (${i('so che')}, I know) use the indicative.`],
      ['Te lo do perché lo leggi.', 'Te lo do perché tu lo legga.', `<em>So that you read it</em>: ${i('perché')} of purpose takes the congiuntivo.`],
    ],
    es: [
      ['Credo che è vero.', 'Credo che sia vero.', `«Creo que es verdad»: en italiano, tras ${i('credo che')}, ${b('sia')}.`],
      ['Mi sembra che è tardi.', 'Mi sembra che sia tardi.', `«Me parece que es tarde» → ${b('mi sembra che sia')}.`],
      ['Quando venga, te lo dico.', 'Quando verrai, te lo dico.', `«Cuando vengas»: tras ${i('quando')}, futuro o presente, ${b('verrai / vieni')}.`],
      ['Benché è tardi, resto.', 'Benché sia tardi, resto.', `«Aunque es tarde»: ${i('benché')} siempre con congiuntivo; si no, ${i('anche se è')}.`],
      ['Penso che ho ragione.', 'Penso di avere ragione.', `«Creo que tengo razón»: mismo sujeto, ${b('di + infinito')}.`],
    ],
    pt: [
      ['Penso che è vero.', 'Penso che sia vero.', `«Acho que é verdade»: em italiano, depois de ${i('penso che')}, ${b('sia')}.`],
      ['Quando venga, ti chiamo.', 'Quando verrai, ti chiamo.', `«Quando você vier»: o italiano não tem futuro do subjuntivo, ${b('verrai')} ou ${i('vieni')}.`],
      ['Se possa, vengo.', 'Se posso, vengo.', `«Se eu puder» → ${b('se posso')}: depois de ${i('se')}, nunca congiuntivo presente.`],
      ['Mi sembra che è tardi.', 'Mi sembra che sia tardi.', `«Parece que é tarde» → ${b('mi sembra che sia')}.`],
      ['Penso che ho ragione.', 'Penso di avere ragione.', `«Acho que tenho razão»: mesmo sujeito, ${b('di + infinito')}.`],
    ],
    fr: [
      ['Penso che è vero.', 'Penso che sia vero.', `« Je pense que c’est vrai » : en italien, ${b('sia')}.`],
      ['Spero che viene.', 'Spero che venga.', `« J’espère qu’il vient » : ${i('sperare che')} + congiuntivo, ${b('venga')}.`],
      ['È probabile che piove.', 'È probabile che piova.', `« Il est probable qu’il pleut » → ${b('piova')}.`],
      ['Credo che ha ragione.', 'Credo che abbia ragione.', `« Je crois qu’il a raison » → ${b('abbia')}.`],
      ['Penso che ho ragione.', 'Penso di avere ragione.', `« Je pense avoir raison » : même sujet, ${b('di + infinito')}.`],
    ],
    cs: [
      ['Voglio che tu verresti.', 'Voglio che tu venga.', `„Chci, abys přišel“: ne podmiňovací způsob, ale ${b('venga')}.`],
      ['Penso che è vero.', 'Penso che sia vero.', `„Myslím, že je to pravda“ → ${b('sia')}.`],
      ['Spero che viene.', 'Spero che venga.', `„Doufám, že přijde“ → ${b('venga')}.`],
      ['Te lo do perché lo leggi.', 'Te lo do perché tu lo legga.', `„Abys ji přečetl“: ${i('perché')} (účel) + congiuntivo.`],
      ['Penso che ho ragione.', 'Penso di avere ragione.', `„Myslím, že mám pravdu“: stejný podmět, ${b('di + infinitiv')}.`],
    ],
    pl: [
      ['Voglio che tu verresti.', 'Voglio che tu venga.', `„Chcę, żebyś przyszedł”: nie tryb przypuszczający, tylko ${b('venga')}.`],
      ['Penso che è vero.', 'Penso che sia vero.', `„Myślę, że to prawda” → ${b('sia')}.`],
      ['Spero che viene.', 'Spero che venga.', `„Mam nadzieję, że przyjdzie” → ${b('venga')}.`],
      ['Te lo do perché lo leggi.', 'Te lo do perché tu lo legga.', `„Żebyś ją przeczytał”: ${i('perché')} (cel) + congiuntivo.`],
      ['Penso che ho ragione.', 'Penso di avere ragione.', `„Myślę, że mam rację”: ten sam podmiot, ${b('di + bezokolicznik')}.`],
    ],
    tr: [
      ['Voglio tu venire.', 'Voglio che tu venga.', `“Gelmeni istiyorum” → ${b('voglio che tu venga')}.`],
      ['Penso che è vero.', 'Penso che sia vero.', `“Doğru olduğunu düşünüyorum” → ${b('sia')}.`],
      ['Spero che viene.', 'Spero che venga.', `“Umarım gelir” → ${b('venga')}.`],
      ['Benché è tardi, resto.', 'Benché sia tardi, resto.', `“Geç olmasına rağmen”: ${i('benché')} + congiuntivo.`],
      ['Penso che ho ragione.', 'Penso di avere ragione.', `“Haklı olduğumu düşünüyorum”: aynı özne, ${b('di + mastar')}.`],
    ],
    de: [
      ['Voglio che tu vieni.', 'Voglio che tu venga.', `„Ich will, dass du kommst“ → ${b('venga')}.`],
      ['Credo che ha ragione.', 'Credo che abbia ragione.', `„Ich glaube, dass er recht hat“ → ${b('abbia')}.`],
      ['Spero che viene.', 'Spero che venga.', `„Ich hoffe, dass er kommt“ → ${b('venga')}.`],
      ['Benché è tardi, resto.', 'Benché sia tardi, resto.', `„Obwohl es spät ist“: ${i('benché')} + congiuntivo.`],
      ['Penso che ho ragione.', 'Penso di avere ragione.', `„Ich glaube, recht zu haben“: gleiches Subjekt, ${b('di + Infinitiv')}.`],
    ],
    ja: [
      ['Voglio tu venire.', 'Voglio che tu venga.', `「来てほしい」→ ${b('voglio che tu venga')}。`],
      ['Penso che è vero.', 'Penso che sia vero.', `「本当だと思う」→ ${b('sia')}。`],
      ['Spero che viene.', 'Spero che venga.', `「来るといいな」→ ${b('venga')}。`],
      ['Benché è tardi, resto.', 'Benché sia tardi, resto.', `「遅いけれど」：${i('benché')} のあとは接続法。`],
      ['Penso che ho ragione.', 'Penso di avere ragione.', `「（自分が）正しいと思う」：主語が同じなら ${b('di + 不定詞')}。`],
    ],
  },
};

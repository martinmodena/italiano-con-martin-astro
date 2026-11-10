// Confronto con la lingua dello studente ed errori tipici della lezione «I pronomi indiretti» (A2),
// 2026-11-10. Stesso formato di confronti-lingua.mjs ed errori-lingua.mjs, che li aggiungono a NOTES
// ed ERRORS; li inserisce scripts/add-language-notes.mjs.
//
// Il punto comune: il verbo decide se la persona è diretta o indiretta, e non sempre come nella lingua
// dello studente (telefonare a, aiutare qualcuno, ringraziare qualcuno). Poi gli/le secondo il genere,
// piacere e mancare.

const i = (s) => `<span lang="it">${s}</span>`;
const b = (s) => `<strong lang="it">${s}</strong>`;
const en = (s) => `<em lang="en">${s}</em>`;

const KEY = 'grammatica/a2/pronomi-indiretti.html';

export const NOTES_INDIRETTI = {
  [KEY]: {
    after: 'diretto-indiretto',
    it: {
      h2: "I pronomi indiretti: il confronto con l'inglese",
      intro: `In inglese il pronome è sempre lo stesso: ${en('him')} vale per ${en('I see him')} e per ${en('I give him a book')}. In italiano no: ${b('lo vedo')}, ma ${b('gli do un libro')}. E il verbo non sempre vuole la stessa costruzione dell'inglese.`,
      th: ['Inglese', 'Italiano'],
      rows: [
        ['I phone him every day.', 'Gli telefono ogni giorno.'],
        ['I ask her a question.', 'Le faccio una domanda.'],
        ['I help him.', 'Lo aiuto.'],
        ['I like cats.', 'Mi piacciono i gatti.'],
        ['I miss you.', 'Mi manchi.'],
        ['I told them everything.', 'Gli ho detto tutto.'],
      ],
      points: [
        `${en('Phone')}, ${en('ask')}, ${en('answer')} non hanno ${en('to')}, ma in italiano vogliono ${i('a')}: ${b('gli telefono')}, ${b('le chiedo')}, ${b('gli rispondo')}.`,
        `${en('I like')} e ${en('I miss')} si rovesciano: la cosa è il soggetto e la persona è indiretta. ${b('Mi piace il gelato')}, ${b('mi manchi')} (= ${en('I miss you')}).`,
        `${en('Him')} e ${en('her')} diventano ${b('gli')} e ${b('le')}: per una donna ${i('gli')} è un errore.`,
      ],
    },
    en: {
      h2: 'Indirect pronouns compared with English',
      intro: `In English the pronoun is always the same: <em>him</em> works in <em>I see him</em> and in <em>I give him a book</em>. Italian has two forms: ${b('lo vedo')}, but ${b('gli do un libro')}. And Italian verbs don’t always take the same construction as English ones.`,
      th: ['English', 'Italian'],
      rows: [
        ['I phone him every day.', 'Gli telefono ogni giorno.'],
        ['I ask her a question.', 'Le faccio una domanda.'],
        ['I help him.', 'Lo aiuto.'],
        ['I like cats.', 'Mi piacciono i gatti.'],
        ['I miss you.', 'Mi manchi.'],
        ['I told them everything.', 'Gli ho detto tutto.'],
      ],
      points: [
        `<em>Phone</em>, <em>ask</em>, <em>answer</em> have no “to”, but in Italian they take ${i('a')}: ${b('gli telefono')}, ${b('le chiedo')}, ${b('gli rispondo')}.`,
        `<em>I like</em> and <em>I miss</em> are turned around: the thing is the subject and the person is indirect. ${b('Mi piace il gelato')}, ${b('mi manchi')} (= I miss you, not “you miss me”).`,
        `<em>Him</em> and <em>her</em> become ${b('gli')} and ${b('le')}: using ${i('gli')} for a woman is a mistake.`,
      ],
    },
    es: {
      h2: 'Los pronombres indirectos comparados con el español',
      intro: `El sistema es casi el mismo que en español: ${i('mi piace')} = me gusta, ${i('ti scrivo')} = te escribo. Las diferencias están en la tercera persona: el italiano distingue hombre y mujer, y nunca repite el pronombre como el español.`,
      th: ['Español', 'Italiano'],
      rows: [
        ['Le escribo a Marco.', 'Scrivo a Marco. · Gli scrivo.'],
        ['Le escribo a Anna.', 'Scrivo ad Anna. · Le scrivo.'],
        ['Les cuento todo.', 'Gli racconto tutto.'],
        ['A Marco le gusta el fútbol.', 'A Marco piace il calcio.'],
        ['Veo a Marco. Lo veo.', 'Vedo Marco. Lo vedo.'],
        ['Te echo de menos.', 'Mi manchi.'],
      ],
      points: [
        `El «le» español sirve para todos; en italiano ${b('gli')} es para un hombre (y para «les») y ${b('le')} para una mujer.`,
        `Nada de duplicar: «a Marco le gusta» es ${b('a Marco piace')} o ${b('gli piace')}, nunca las dos cosas juntas.`,
        `La «a» personal no existe: «veo a Marco» es ${b('vedo Marco')}, y el pronombre es directo, ${b('lo vedo')}.`,
      ],
    },
    pt: {
      h2: 'Os pronomes indiretos comparados com o português',
      intro: `No Brasil quase não se usam os pronomes indiretos átonos: diz-se «eu ligo pra ele», «eu falei pra ela». O italiano, ao contrário, usa sempre o pronome curto antes do verbo: ${b('gli telefono')}, ${b('le ho detto')}.`,
      th: ['Português', 'Italiano'],
      rows: [
        ['Eu ligo pra ele todo dia.', 'Gli telefono ogni giorno.'],
        ['Eu falei pra ela.', 'Le ho detto.'],
        ['Eu mando as fotos pra vocês.', 'Vi mando le foto.'],
        ['Ele gosta de futebol.', 'Gli piace il calcio.'],
        ['Eu ajudo ele.', 'Lo aiuto.'],
        ['Sinto sua falta.', 'Mi manchi.'],
      ],
      points: [
        `«Pra ele» e «pra ela» viram ${b('gli')} e ${b('le')}, antes do verbo: ${i('gli scrivo')}, não ${i('scrivo a lui')}, que só se usa para dar ênfase.`,
        `«Gostar de» funciona ao contrário: a coisa é o sujeito. ${b('Mi piace il calcio')}, ${b('mi piacciono i gatti')}, sem ${i('di')}.`,
        `«Sentir falta» é ${b('mancare')}: ${b('mi manchi')} = sinto sua falta (literalmente «você me falta»).`,
      ],
    },
    fr: {
      h2: 'Les pronoms indirects comparés au français',
      intro: `Le système est presque le même qu’en français : ${i('mi scrivi')} = tu m’écris, ${i('gli telefono')} = je lui téléphone. La grande différence : le français dit « lui » pour un homme et pour une femme, l’italien choisit ${b('gli')} ou ${b('le')}.`,
      th: ['Français', 'Italien'],
      rows: [
        ['Je lui téléphone. (à Marco)', 'Gli telefono.'],
        ['Je lui téléphone. (à Anna)', 'Le telefono.'],
        ['Je leur raconte tout.', 'Gli racconto tutto.'],
        ['Tu me manques.', 'Mi manchi.'],
        ['J’aime les chats.', 'Mi piacciono i gatti.'],
        ['Je l’aide.', 'Lo aiuto. · La aiuto.'],
      ],
      points: [
        `« Lui » se dit ${b('gli')} pour un homme et ${b('le')} pour une femme ; « leur » se dit ${b('gli')}.`,
        `${i('Le')} n’est pas « le » : c’est « lui » (à elle) ou « les » (féminin). ${i('Le scrivo')} = je lui écris.`,
        `${i('Mancare')} fonctionne comme « manquer » (${b('mi manchi')} = tu me manques), et ${i('piacere')} comme « plaire » : ${b('mi piace')} = ça me plaît.`,
      ],
    },
    cs: {
      h2: 'Srovnání s češtinou',
      intro: `Italská nepřímá zájmena odpovídají českému 3. pádu: ${i('gli')} = mu, ${i('le')} = jí. Ale italština má pro 3. a 4. pád u ${i('mi, ti, ci, vi')} stejný tvar, a slovesné vazby se ne vždy shodují.`,
      th: ['Čeština', 'Italština'],
      rows: [
        ['Zavolám mu.', 'Gli telefono.'],
        ['Napíšu jí.', 'Le scrivo.'],
        ['Pomůžu mu.', 'Lo aiuto.'],
        ['Poděkuji jí.', 'La ringrazio.'],
        ['Líbí se mi kočky.', 'Mi piacciono i gatti.'],
        ['Chybíš mi.', 'Mi manchi.'],
      ],
      points: [
        `„Pomoci mu“ a „poděkovat jí“ mají v italštině přímý předmět: ${b('lo aiuto')}, ${b('la ringrazio')}.`,
        `${i('Piacere')} a ${i('mancare')} fungují jako „líbit se“ a „chybět“: ${b('mi piace')}, ${b('mi manchi')}. To máte zadarmo.`,
        `„Jim“ je ${b('gli')}, stejně jako „mu“: ${i('gli racconto tutto')} = všechno jim vyprávím.`,
      ],
    },
    pl: {
      h2: 'Porównanie z polskim',
      intro: `Włoskie zaimki pośrednie odpowiadają polskiemu celownikowi: ${i('gli')} = mu, ${i('le')} = jej. Ale włoska konstrukcja czasownika nie zawsze pokrywa się z polską.`,
      th: ['Polski', 'Włoski'],
      rows: [
        ['Dzwonię do niego.', 'Gli telefono.'],
        ['Piszę do niej.', 'Le scrivo.'],
        ['Pomagam mu.', 'Lo aiuto.'],
        ['Dziękuję jej.', 'La ringrazio.'],
        ['Podobają mi się koty.', 'Mi piacciono i gatti.'],
        ['Brakuje mi ciebie.', 'Mi manchi.'],
      ],
      points: [
        `„Dzwonić do kogoś” i „pisać do kogoś” to po włosku celownik: ${b('gli telefono')}, ${b('le scrivo')}.`,
        `„Pomagać mu” i „dziękować jej” mają po włosku dopełnienie bezpośrednie: ${b('lo aiuto')}, ${b('la ringrazio')}.`,
        `${i('Piacere')} i ${i('mancare')} działają jak „podobać się” i „brakować”: ${b('mi piace')}, ${b('mi manchi')}.`,
      ],
    },
    tr: {
      h2: 'Türkçe ile karşılaştırma',
      intro: `İtalyanca dolaylı zamirler Türkçedeki -e hâline karşılık gelir: ${i('gli')}, ${i('le')} = ona. Ama Türkçede “o” kadın ve erkek için aynıdır; İtalyanca cinsiyete bakar. Fiillerin istediği hâl de her zaman aynı değildir.`,
      th: ['Türkçe', 'İtalyanca'],
      rows: [
        ['Onu arıyorum. (Marco’yu)', 'Gli telefono.'],
        ['Ona yazıyorum. (Anna’ya)', 'Le scrivo.'],
        ['Ona yardım ediyorum.', 'Lo aiuto.'],
        ['Ona teşekkür ediyorum.', 'La ringrazio.'],
        ['Kedileri seviyorum.', 'Mi piacciono i gatti.'],
        ['Seni özlüyorum.', 'Mi manchi.'],
      ],
      points: [
        `“Ona” bir erkek için ${b('gli')}, bir kadın için ${b('le')}; “onlara” ${b('gli')}.`,
        `“Onu aramak” İtalyancada -e hâliyle kurulur (${b('gli telefono')}), “ona yardım etmek” ve “ona teşekkür etmek” ise doğrudan nesneyle (${b('lo aiuto')}, ${b('la ringrazio')}).`,
        `“Seviyorum” ve “özlüyorum” İtalyancada tersine döner: ${b('mi piacciono i gatti')} (kediler hoşuma gidiyor), ${b('mi manchi')} (sen bana eksiksin).`,
      ],
    },
    de: {
      h2: 'Vergleich mit dem Deutschen',
      intro: `Die indirekten Pronomen entsprechen dem deutschen Dativ: ${i('gli')} = ihm, ${i('le')} = ihr. Aber bei ${i('mi, ti, ci, vi')} gibt es keinen Unterschied zwischen „mich“ und „mir“, und die Verben verlangen nicht immer denselben Fall wie im Deutschen.`,
      th: ['Deutsch', 'Italienisch'],
      rows: [
        ['Ich rufe ihn an.', 'Gli telefono.'],
        ['Ich frage sie.', 'Le chiedo.'],
        ['Ich helfe ihm.', 'Lo aiuto.'],
        ['Ich danke ihr.', 'La ringrazio.'],
        ['Mir gefallen Katzen.', 'Mi piacciono i gatti.'],
        ['Du fehlst mir.', 'Mi manchi.'],
      ],
      points: [
        `„Anrufen“ und „fragen“ (Akkusativ) sind im Italienischen indirekt: ${b('gli telefono')}, ${b('le chiedo')}.`,
        `„Helfen“ und „danken“ (Dativ) sind im Italienischen direkt: ${b('lo aiuto')}, ${b('la ringrazio')}.`,
        `${i('Piacere')} und ${i('mancare')} funktionieren wie „gefallen“ und „fehlen“: ${b('mi piace')}, ${b('mi manchi')}.`,
      ],
    },
    ja: {
      h2: '日本語との比較',
      intro: `間接目的語代名詞は日本語の「〜に」にあたります：${i('gli telefono')} ＝ 彼に電話する。でも日本語は「彼に」を省略することが多いのに対し、イタリア語では代名詞を必ず動詞の前に置きます。また、「彼」と「彼女」で形が変わります。`,
      th: ['日本語', 'イタリア語'],
      rows: [
        ['（彼に）毎日電話する。', 'Gli telefono ogni giorno.'],
        ['（彼女に）手紙を書く。', 'Le scrivo una lettera.'],
        ['（彼を）手伝う。', 'Lo aiuto.'],
        ['猫が好き。', 'Mi piacciono i gatti.'],
        ['あなたがいなくてさびしい。', 'Mi manchi.'],
        ['（彼らに）全部話した。', 'Gli ho detto tutto.'],
      ],
      points: [
        `日本語では省略する「彼に」「彼女に」も、イタリア語では言います：${b('gli telefono')}、${b('le scrivo')}。`,
        `「〜が好き」の「が」のものが、${i('piacere')}の主語です：${b('mi piacciono i gatti')}（猫が複数なので${i('piacciono')}）。`,
        `「手伝う」は「を」なので直接目的語：${b('lo aiuto')}。「電話する」は「に」なので間接目的語：${b('gli telefono')}。`,
      ],
    },
  },
};

export const ERRORS_INDIRETTI = {
  [KEY]: {
    it: [
      ['Lo telefono stasera.', 'Gli telefono stasera.', `${en('I’ll phone him')}: in italiano si telefona ${i('a')} qualcuno, quindi ${b('gli')}.`],
      ['Io piaccio il gelato.', 'Mi piace il gelato.', `${en('I like ice cream')}: il soggetto è il gelato, ${b('mi piace')}.`],
      ['Ti manco.', 'Mi manchi.', `${en('I miss you')} si rovescia: ${b('mi manchi')}, «tu manchi a me».`],
      ['Ho visto Anna e gli ho detto tutto.', 'Ho visto Anna e le ho detto tutto.', `${en('Her')} indiretto è ${b('le')}: ${i('gli')} è per un uomo.`],
    ],
    en: [
      ['Lo telefono stasera.', 'Gli telefono stasera.', `<em>I’ll phone him</em>: in Italian you phone ${i('a')} someone, so ${b('gli')}.`],
      ['Io piaccio il gelato.', 'Mi piace il gelato.', `<em>I like ice cream</em>: the subject is the ice cream, ${b('mi piace')}.`],
      ['Ti manco.', 'Mi manchi.', `<em>I miss you</em> is turned around: ${b('mi manchi')}, “you are missing to me”.`],
      ['Ho visto Anna e gli ho detto tutto.', 'Ho visto Anna e le ho detto tutto.', `Indirect <em>her</em> is ${b('le')}: ${i('gli')} is for a man.`],
    ],
    es: [
      ['Le ho scritto a Marco.', 'Ho scritto a Marco. · Gli ho scritto.', `«Le escribí a Marco»: en italiano no se repite, y para un hombre es ${b('gli')}.`],
      ['A Marco gli piace il calcio.', 'A Marco piace il calcio.', `«A Marco le gusta»: en italiano basta ${b('a Marco piace')} o ${b('gli piace')}.`],
      ['Vedo a Marco.', 'Vedo Marco.', `La «a» personal no existe: ${b('vedo Marco')}, ${b('lo vedo')}.`],
    ],
    pt: [
      ['Telefono lui ogni giorno.', 'Gli telefono ogni giorno.', `«Ligo pra ele»: em italiano usa-se o pronome curto antes do verbo, ${b('gli telefono')}.`],
      ['Mi piace di calcio.', 'Mi piace il calcio.', `«Gosto de futebol»: com ${i('piacere')} não há ${i('di')}, ${b('mi piace il calcio')}.`],
      ['Ho visto Anna e gli ho detto tutto.', 'Ho visto Anna e le ho detto tutto.', `«Falei pra ela»: para uma mulher é ${b('le')}.`],
    ],
    fr: [
      ['Gli ho telefonato. (à Anna)', 'Le ho telefonato.', `« Je lui ai téléphoné », à une femme : ${b('le')}, pas ${i('gli')}.`],
      ['Le ho scritta.', 'Le ho scritto.', `« Je lui ai écrit » : avec l’indirect le participe ne s’accorde pas, ${b('le ho scritto')}.`],
      ['Mi piace i gatti.', 'Mi piacciono i gatti.', `« Les chats me plaisent » : le verbe s’accorde avec la chose, ${b('piacciono')}.`],
    ],
    cs: [
      ['Gli aiuto.', 'Lo aiuto.', `„Pomůžu mu“: ${i('aiutare')} má přímý předmět, ${b('lo aiuto')}.`],
      ['Gli ringrazio.', 'Lo ringrazio.', `„Poděkuji mu“: ${i('ringraziare')} má přímý předmět, ${b('lo ringrazio')}.`],
      ['Ho visto Anna e gli ho detto tutto.', 'Ho visto Anna e le ho detto tutto.', `„Řekl jsem jí“: pro ženu ${b('le')}, ne ${i('gli')}.`],
    ],
    pl: [
      ['Gli aiuto.', 'Lo aiuto.', `„Pomagam mu”: ${i('aiutare')} ma dopełnienie bezpośrednie, ${b('lo aiuto')}.`],
      ['Telefono da lui.', 'Gli telefono.', `„Dzwonię do niego”: po włosku ${b('gli telefono')}, bez przyimka.`],
      ['Ho visto Anna e gli ho detto tutto.', 'Ho visto Anna e le ho detto tutto.', `„Powiedziałem jej”: dla kobiety ${b('le')}, nie ${i('gli')}.`],
    ],
    tr: [
      ['Lo telefono.', 'Gli telefono.', `“Onu arıyorum”: İtalyancada ${i('telefonare a')} denir, yani ${b('gli telefono')}.`],
      ['Gli aiuto.', 'Lo aiuto.', `“Ona yardım ediyorum”: ${i('aiutare')} doğrudan nesne alır, ${b('lo aiuto')}.`],
      ['Ho visto Anna e gli ho detto tutto.', 'Ho visto Anna e le ho detto tutto.', `“Ona söyledim”, bir kadına: ${b('le')}, ${i('gli')} değil.`],
    ],
    de: [
      ['Lo telefono.', 'Gli telefono.', `„Ich rufe ihn an“: im Italienischen ${i('telefonare a')}, also ${b('gli telefono')}.`],
      ['Gli aiuto.', 'Lo aiuto.', `„Ich helfe ihm“: ${i('aiutare')} ist direkt, ${b('lo aiuto')}.`],
      ['Lo chiedo.', 'Gli chiedo.', `„Ich frage ihn“: ${i('chiedere a')} qualcuno, also ${b('gli chiedo')}.`],
    ],
    ja: [
      ['Gli aiuto.', 'Lo aiuto.', `「彼を手伝う」：「を」なので直接目的語、${b('lo aiuto')}。`],
      ['Mi piace i gatti.', 'Mi piacciono i gatti.', `「猫が好き」：猫が複数なので${b('piacciono')}。`],
      ['Ho visto Anna e gli ho detto tutto.', 'Ho visto Anna e le ho detto tutto.', `女性には${b('le')}、${i('gli')}ではありません。`],
    ],
  },
};

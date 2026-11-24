// Confronto con la lingua dello studente ed errori tipici della lezione «Passato prossimo o imperfetto?» (A2),
// rifatta il 2026-11-24 (prima non aveva né l'uno né gli altri). Stesso formato di confronti-lingua.mjs ed
// errori-lingua.mjs, che li aggiungono a NOTES ed ERRORS; li inserisce scripts/add-language-notes.mjs.
//
// Le trappole per lingua: inglese il simple past per tutto, «used to», «for five years», «knew / found out»;
// spagnolo e portoghese quasi la stessa logica (indefinido / pretérito perfeito = passato prossimo), «ayer fui»
// e «ontem fui», «llevaba / fazia dois anos que»; francese quasi identico, «depuis» + imparfait; tedesco nessuna
// distinzione nel verbo, «erfahren / kennenlernen», «es war kalt»; ceco e polacco il vid, che non coincide
// (nedokonavé / niedokonany con durata precisa = passato prossimo); turco «-di» anche per le descrizioni,
// «-iyordu / -erdi»; giapponese «〜ていた» con una durata («5年間住んでいた») e «〜た» per le descrizioni.

const i = (s) => `<span lang="it">${s}</span>`;
const b = (s) => `<strong lang="it">${s}</strong>`;

const PI = 'grammatica/a2/passato-prossimo-o-imperfetto.html';

export const NOTES_PP_IMPERFETTO = {
  [PI]: {
    it: {
      h2: "Passato prossimo o imperfetto: il confronto con l'inglese",
      intro: `L'inglese usa spesso lo stesso <em lang="en">simple past</em> per un fatto e per una descrizione (<em lang="en">I went, it was</em>). In italiano bisogna scegliere: ${b('passato prossimo')} per i fatti, ${b('imperfetto')} per le descrizioni, le abitudini e le azioni in corso.`,
      th: ['Inglese', 'Italiano'],
      rows: [
        ['I went to the beach on Saturday.', 'Sabato sono andato al mare.'],
        ['When I was a child, I went to the beach every summer.', 'Da bambino andavo al mare ogni estate.'],
        ['I was having a shower when the phone rang.', 'Facevo la doccia quando è suonato il telefono.'],
        ['I lived in Milan for five years.', 'Ho abitato a Milano per cinque anni.'],
        ['I found out yesterday.', 'L’ho saputo ieri.'],
      ],
      points: [
        `Il <em lang="en">simple past</em> va diviso: «che cosa è successo?» → ${i('sono andato')}; «com'era, che cosa si faceva?» → ${i('andavo')}.`,
        `<em lang="en">For five years</em> chiude l'azione: ${b('ho abitato')}, non ${i('abitavo')}.`,
        `<em lang="en">Knew / found out</em>, <em lang="en">knew / met</em> → ${i('sapevo / ho saputo')}, ${i('conoscevo / ho conosciuto')}: un verbo solo, due tempi.`,
      ],
    },
    en: {
      h2: 'Passato prossimo or imperfetto compared with English',
      intro: `English often uses the same simple past for an event and for a description (<em>I went, it was</em>). Italian makes you choose: ${b('passato prossimo')} for events, ${b('imperfetto')} for descriptions, habits and actions in progress.`,
      th: ['English', 'Italian'],
      rows: [
        ['I went to the beach on Saturday.', 'Sabato sono andato al mare.'],
        ['When I was a child, I went to the beach every summer.', 'Da bambino andavo al mare ogni estate.'],
        ['I was having a shower when the phone rang.', 'Facevo la doccia quando è suonato il telefono.'],
        ['I lived in Milan for five years.', 'Ho abitato a Milano per cinque anni.'],
        ['I found out yesterday.', 'L’ho saputo ieri.'],
      ],
      points: [
        `Split the simple past: “what happened?” → ${i('sono andato')}; “what was it like, what used to happen?” → ${i('andavo')}.`,
        `<em>For five years</em> closes the action: ${b('ho abitato')}, not ${i('abitavo')}.`,
        `<em>Knew / found out</em>, <em>knew / met</em> → ${i('sapevo / ho saputo')}, ${i('conoscevo / ho conosciuto')}: one verb, two tenses.`,
      ],
    },
    es: {
      h2: 'Passato prossimo o imperfetto: comparación con el español',
      intro: `Buena noticia: la elección es casi la misma que en español. El ${b('passato prossimo')} corresponde al pretérito indefinido («fui») y también al perfecto («he ido»); el ${b('imperfetto')} corresponde al imperfecto («iba»).`,
      th: ['Español', 'Italiano'],
      rows: [
        ['El sábado fui a la playa.', 'Sabato sono andato al mare.'],
        ['De niño iba a la playa cada verano.', 'Da bambino andavo al mare ogni estate.'],
        ['Me duchaba cuando sonó el teléfono.', 'Facevo la doccia quando è suonato il telefono.'],
        ['Viví cinco años en Milán.', 'Ho abitato a Milano per cinque anni.'],
        ['Lo supe ayer.', 'L’ho saputo ieri.'],
      ],
      points: [
        `«Fui, vi, llegué» → ${b('passato prossimo')} en el italiano hablado, también con «ayer»: ${i('ieri sono andato')}.`,
        `«Llevaba dos años viviendo…» → ${i('abitava da due anni')}: ${b('da')} + imperfetto.`,
        `«Supe / sabía», «conocí / conocía», «tuve que / tenía que» funcionan igual: ${i('ho saputo / sapevo')}, ${i('ho conosciuto / conoscevo')}, ${i('ho dovuto / dovevo')}.`,
      ],
    },
    pt: {
      h2: 'Passato prossimo ou imperfetto: comparação com o português',
      intro: `Boa notícia: a escolha é quase a mesma do português. O ${b('passato prossimo')} corresponde ao pretérito perfeito («fui»); o ${b('imperfetto')} corresponde ao pretérito imperfeito («ia»).`,
      th: ['Português', 'Italiano'],
      rows: [
        ['No sábado eu fui à praia.', 'Sabato sono andato al mare.'],
        ['Quando era criança, eu ia à praia todo verão.', 'Da bambino andavo al mare ogni estate.'],
        ['Eu estava tomando banho quando o telefone tocou.', 'Facevo la doccia quando è suonato il telefono.'],
        ['Morei cinco anos em Milão.', 'Ho abitato a Milano per cinque anni.'],
        ['Fiquei sabendo ontem.', 'L’ho saputo ieri.'],
      ],
      points: [
        `«Fui, vi, cheguei» → ${b('passato prossimo')}: ${i('sono andato, ho visto, sono arrivato')}, com o auxiliar.`,
        `«Fazia dois anos que ele morava em Milão» → ${i('abitava a Milano da due anni')}: ${b('da')} + imperfetto.`,
        `«Fiquei sabendo / sabia», «conheci / conhecia», «tive que / tinha que» funcionam igual: ${i('ho saputo / sapevo')}, ${i('ho conosciuto / conoscevo')}, ${i('ho dovuto / dovevo')}.`,
      ],
    },
    fr: {
      h2: 'Passato prossimo ou imperfetto : comparaison avec le français',
      intro: `Bonne nouvelle : le choix est presque le même qu’en français. Le ${b('passato prossimo')} correspond au passé composé (« je suis allé »), l’${b('imperfetto')} à l’imparfait (« j’allais »).`,
      th: ['Français', 'Italien'],
      rows: [
        ['Samedi, je suis allé à la plage.', 'Sabato sono andato al mare.'],
        ['Enfant, j’allais à la plage chaque été.', 'Da bambino andavo al mare ogni estate.'],
        ['Je prenais ma douche quand le téléphone a sonné.', 'Facevo la doccia quando è suonato il telefono.'],
        ['J’ai habité cinq ans à Milan.', 'Ho abitato a Milano per cinque anni.'],
        ['Je l’ai su hier.', 'L’ho saputo ieri.'],
      ],
      points: [
        `Même logique : fait → ${b('passato prossimo')}, décor et habitude → ${b('imperfetto')}.`,
        `« Depuis deux ans » + imparfait → ${i('da due anni')} + imperfetto : ${i('abitava a Milano da due anni')}.`,
        `« J’ai su / je savais », « j’ai connu / je connaissais », « j’ai dû / je devais » : ${i('ho saputo / sapevo')}, ${i('ho conosciuto / conoscevo')}, ${i('ho dovuto / dovevo')}.`,
      ],
    },
    cs: {
      h2: 'Passato prossimo, nebo imperfetto: srovnání s češtinou',
      intro: `Volba často odpovídá vidu: dokonavé sloveso → ${b('passato prossimo')}, nedokonavé → ${b('imperfetto')}. Ale ne vždy: s přesnou dobou trvání je nedokonavé české sloveso v italštině passato prossimo.`,
      th: ['Česky', 'Italsky'],
      rows: [
        ['V sobotu jsem jel k moři.', 'Sabato sono andato al mare.'],
        ['Jako dítě jsem jezdil každé léto k moři.', 'Da bambino andavo al mare ogni estate.'],
        ['Sprchoval jsem se, když zazvonil telefon.', 'Facevo la doccia quando è suonato il telefono.'],
        ['Bydlel jsem v Miláně pět let.', 'Ho abitato a Milano per cinque anni.'],
        ['Dozvěděl jsem se to včera.', 'L’ho saputo ieri.'],
      ],
      points: [
        `«Bydlel jsem tam pět let», «celý den pršelo»: česky nedokonavé, italsky ${b('passato prossimo')} (${i('ho abitato, ha piovuto')}).`,
        `«Věděl jsem / dozvěděl jsem se», «znal jsem / seznámil jsem se» → jedno sloveso, dva časy: ${i('sapevo / ho saputo')}, ${i('conoscevo / ho conosciuto')}.`,
        `Popis («byla zima», «bylo mi deset») je vždy ${b('imperfetto')}: ${i('faceva freddo, avevo dieci anni')}.`,
      ],
    },
    pl: {
      h2: 'Passato prossimo czy imperfetto: porównanie z polskim',
      intro: `Wybór często odpowiada aspektowi: czasownik dokonany → ${b('passato prossimo')}, niedokonany → ${b('imperfetto')}. Ale nie zawsze: z dokładnym czasem trwania polski czasownik niedokonany to po włosku passato prossimo.`,
      th: ['Po polsku', 'Po włosku'],
      rows: [
        ['W sobotę pojechałem nad morze.', 'Sabato sono andato al mare.'],
        ['Jako dziecko jeździłem nad morze każdego lata.', 'Da bambino andavo al mare ogni estate.'],
        ['Brałem prysznic, kiedy zadzwonił telefon.', 'Facevo la doccia quando è suonato il telefono.'],
        ['Mieszkałem w Mediolanie pięć lat.', 'Ho abitato a Milano per cinque anni.'],
        ['Dowiedziałem się wczoraj.', 'L’ho saputo ieri.'],
      ],
      points: [
        `«Mieszkałem tam pięć lat», «cały dzień padało»: po polsku niedokonane, po włosku ${b('passato prossimo')} (${i('ho abitato, ha piovuto')}).`,
        `«Wiedziałem / dowiedziałem się», «znałem / poznałem» → jeden czasownik, dwa czasy: ${i('sapevo / ho saputo')}, ${i('conoscevo / ho conosciuto')}.`,
        `Opis («było zimno», «miałem dziesięć lat») to zawsze ${b('imperfetto')}: ${i('faceva freddo, avevo dieci anni')}.`,
      ],
    },
    tr: {
      h2: 'Passato prossimo mu, imperfetto mu: Türkçeyle karşılaştırma',
      intro: `Türkçeyle benzerlik büyük: «-di» çoğu zaman ${b('passato prossimo')}, «-iyordu» ve «-erdi» ${b('imperfetto')} olur. Ama «-di» betimlemelerde de kullanılır; İtalyancada betimleme her zaman imperfetto’dur.`,
      th: ['Türkçe', 'İtalyanca'],
      rows: [
        ['Cumartesi denize gittim.', 'Sabato sono andato al mare.'],
        ['Çocukken her yaz denize giderdim.', 'Da bambino andavo al mare ogni estate.'],
        ['Telefon çaldığında duş alıyordum.', 'Facevo la doccia quando è suonato il telefono.'],
        ['Hava soğuktu.', 'Faceva freddo.'],
        ['Dün öğrendim.', 'L’ho saputo ieri.'],
      ],
      points: [
        `«Hava soğuktu», «on yaşındaydım», «yorgundum»: Türkçede «-di», İtalyancada ${b('imperfetto')} (${i('faceva freddo, avevo dieci anni, ero stanco')}).`,
        `«Beş yıl oturdum» → ${b('ho abitato')} per cinque anni; «iki yıldır oturuyordu» → ${i('abitava da due anni')}.`,
        `«Biliyordum / öğrendim», «tanıyordum / tanıştım» → tek fiil, iki zaman: ${i('sapevo / ho saputo')}, ${i('conoscevo / ho conosciuto')}.`,
      ],
    },
    de: {
      h2: 'Passato prossimo oder imperfetto: Vergleich mit dem Deutschen',
      intro: `Das Deutsche unterscheidet hier nicht: «ich ging» und «ich bin gegangen» sagen nichts darüber, ob es ein Ereignis oder eine Beschreibung ist. Im Italienischen müssen Sie wählen: ${b('passato prossimo')} für Ereignisse, ${b('imperfetto')} für Beschreibungen, Gewohnheiten und laufende Handlungen.`,
      th: ['Deutsch', 'Italienisch'],
      rows: [
        ['Am Samstag bin ich ans Meer gefahren.', 'Sabato sono andato al mare.'],
        ['Als Kind bin ich jeden Sommer ans Meer gefahren.', 'Da bambino andavo al mare ogni estate.'],
        ['Ich duschte gerade, als das Telefon klingelte.', 'Facevo la doccia quando è suonato il telefono.'],
        ['Es war kalt.', 'Faceva freddo.'],
        ['Ich habe es gestern erfahren.', 'L’ho saputo ieri.'],
      ],
      points: [
        `Gleiches deutsches Verb, zwei italienische Zeiten: «bin gefahren» → ${i('sono andato')} (einmal) oder ${i('andavo')} (jeden Sommer).`,
        `«Seit zwei Jahren» in der Vergangenheit → ${b('da')} + imperfetto: ${i('abitava a Milano da due anni')}.`,
        `«Wissen / erfahren», «kennen / kennenlernen» → ein Verb, zwei Zeiten: ${i('sapevo / ho saputo')}, ${i('conoscevo / ho conosciuto')}.`,
      ],
    },
    ja: {
      h2: 'Passato prossimo と imperfetto：日本語との比較',
      intro: `「〜た」はよく ${b('passato prossimo')}、「〜ていた」はよく ${b('imperfetto')} になります。でも、いつもではありません。「寒かった」のような描写は imperfetto、「5年間住んでいた」のような期間のある動作は passato prossimo です。`,
      th: ['日本語', 'イタリア語'],
      rows: [
        ['土曜日に海へ行った。', 'Sabato sono andato al mare.'],
        ['子どものころ、毎年夏に海へ行っていた。', 'Da bambino andavo al mare ogni estate.'],
        ['電話が鳴った時、シャワーを浴びていた。', 'Facevo la doccia quando è suonato il telefono.'],
        ['ミラノに5年間住んでいた。', 'Ho abitato a Milano per cinque anni.'],
        ['寒かった。', 'Faceva freddo.'],
      ],
      points: [
        `「寒かった」「10歳だった」「疲れていた」→ ${b('imperfetto')}：${i('faceva freddo, avevo dieci anni, ero stanco')}。`,
        `「5年間住んでいた」「一日中雨が降っていた」→ ${b('passato prossimo')}：${i('ho abitato, ha piovuto')}。`,
        `「知っていた／知った」「知り合いだった／知り合った」→ 同じ動詞の二つの時制：${i('sapevo / ho saputo')}、${i('conoscevo / ho conosciuto')}。`,
      ],
    },
  },
};

export const ERRORS_PP_IMPERFETTO = {
  [PI]: {
    it: [
      ['Da bambino sono andato al mare ogni estate.', 'Da bambino andavo al mare ogni estate.', `Un'abitudine (<em lang="en">every summer</em>) vuole ${b('l’imperfetto')}, anche se l'inglese usa il <em lang="en">simple past</em>.`],
      ['Ieri era freddo.', 'Ieri faceva freddo.', `<em lang="en">It was cold</em>: il tempo si dice con ${b('fare')}, ${i('faceva freddo')}.`],
      ['Abitavo a Milano per cinque anni.', 'Ho abitato a Milano per cinque anni.', `<em lang="en">For five years</em> chiude l'azione: ${b('passato prossimo')}.`],
      ['Ho conosciuto Marta da anni.', 'Conoscevo Marta da anni.', `<em lang="en">I had known her for years</em> → ${b('conoscevo')}; ${i('ho conosciuto')} è <em lang="en">I met</em>.`],
      ['Quando ho avuto dieci anni, abitavo a Napoli.', 'Quando avevo dieci anni, abitavo a Napoli.', `L'età è sempre ${b('imperfetto')}: ${i('avevo dieci anni')}.`],
    ],
    en: [
      ['Da bambino sono andato al mare ogni estate.', 'Da bambino andavo al mare ogni estate.', `A habit (<em>every summer</em>) needs the ${b('imperfetto')}, even where English uses the simple past.`],
      ['Ieri era freddo.', 'Ieri faceva freddo.', `<em>It was cold</em>: weather takes ${b('fare')}, ${i('faceva freddo')}.`],
      ['Abitavo a Milano per cinque anni.', 'Ho abitato a Milano per cinque anni.', `<em>For five years</em> closes the action: ${b('passato prossimo')}.`],
      ['Ho conosciuto Marta da anni.', 'Conoscevo Marta da anni.', `<em>I had known her for years</em> → ${b('conoscevo')}; ${i('ho conosciuto')} means <em>I met</em>.`],
      ['Quando ho avuto dieci anni, abitavo a Napoli.', 'Quando avevo dieci anni, abitavo a Napoli.', `<em>When I was ten</em>: age is always ${b('imperfetto')}, ${i('avevo dieci anni')}.`],
    ],
    es: [
      ['Ieri andai al cinema.', 'Ieri sono andato al cinema.', `«Ayer fui» → ${b('sono andato')}: en el italiano hablado el passato remoto casi no se usa.`],
      ['Ieri andavo al cinema con Marta.', 'Ieri sono andato al cinema con Marta.', `Un hecho de ayer, como «fui», va en ${b('passato prossimo')}.`],
      ['Ho abitato a Milano da due anni quando l’ho conosciuta.', 'Abitavo a Milano da due anni quando l’ho conosciuta.', `«Llevaba dos años viviendo» → ${b('da')} + ${b('imperfetto')}.`],
      ['Ieri era freddo.', 'Ieri faceva freddo.', `«Hacía frío» → ${b('faceva freddo')}, con ${i('fare')}, como en español.`],
      ['Quando ho avuto dieci anni, abitavo a Napoli.', 'Quando avevo dieci anni, abitavo a Napoli.', `«Cuando tenía diez años» → ${b('avevo')}, imperfetto como en español.`],
    ],
    pt: [
      ['Ieri andai al cinema.', 'Ieri sono andato al cinema.', `«Ontem fui» → ${b('sono andato')}: no italiano falado o passato remoto quase não se usa.`],
      ['Ieri ho andato al cinema.', 'Ieri sono andato al cinema.', `«Fui» → ${b('sono andato')}, com ${i('essere')}: verbos de movimento usam ${i('essere')}.`],
      ['Ho abitato a Milano da due anni quando l’ho conosciuta.', 'Abitavo a Milano da due anni quando l’ho conosciuta.', `«Fazia dois anos que eu morava» → ${b('da')} + ${b('imperfetto')}.`],
      ['Ieri era freddo.', 'Ieri faceva freddo.', `«Fazia frio» → ${b('faceva freddo')}, com ${i('fare')}, como em português.`],
      ['Stavo stanco quando sono arrivato.', 'Ero stanco quando sono arrivato.', `«Eu estava cansado» → ${b('ero stanco')}, com ${i('essere')}.`],
    ],
    fr: [
      ['Ieri andai al cinema.', 'Ieri sono andato al cinema.', `« Hier, je suis allé » → ${b('sono andato')}, comme le passé composé ; le passato remoto est surtout écrit.`],
      ['Abitavo a Milano per cinque anni.', 'Ho abitato a Milano per cinque anni.', `« J’ai habité cinq ans » → ${b('passato prossimo')}, comme en français.`],
      ['Ieri era freddo.', 'Ieri faceva freddo.', `« Il faisait froid » → ${b('faceva freddo')}, avec ${i('fare')}, comme en français.`],
      ['Ieri ha piovuto quando sono uscito.', 'Ieri pioveva quando sono uscito.', `« Il pleuvait quand je suis sorti » : le décor reste à l’${b('imperfetto')}.`],
      ['Ho abitato a Milano da due anni quando l’ho conosciuta.', 'Abitavo a Milano da due anni quando l’ho conosciuta.', `« J’habitais là depuis deux ans » → ${b('da')} + ${b('imperfetto')}.`],
    ],
    cs: [
      ['Abitavo a Milano per cinque anni.', 'Ho abitato a Milano per cinque anni.', `<em>Bydlel jsem tam pět let</em>: přesná doba trvání → ${b('passato prossimo')}, i když je české sloveso nedokonavé.`],
      ['Mentre ho fatto la doccia, è suonato il telefono.', 'Mentre facevo la doccia, è suonato il telefono.', `<em>Když jsem se sprchoval</em> (probíhající děj) → ${b('facevo')}.`],
      ['Da bambino sono andato al mare ogni estate.', 'Da bambino andavo al mare ogni estate.', `<em>Jezdil jsem každé léto</em> (zvyk) → ${b('imperfetto')}.`],
      ['Ho conosciuto Marta da anni.', 'Conoscevo Marta da anni.', `<em>Znal jsem ji léta</em> → ${b('conoscevo')}; ${i('ho conosciuto')} je <em>seznámil jsem se</em>.`],
      ['Ieri è stato freddo.', 'Ieri faceva freddo.', `<em>Byla zima</em> (popis) → ${b('faceva freddo')}.`],
    ],
    pl: [
      ['Abitavo a Milano per cinque anni.', 'Ho abitato a Milano per cinque anni.', `<em>Mieszkałem pięć lat</em> (dokładny czas) → ${b('passato prossimo')}, choć polski czasownik jest niedokonany.`],
      ['Mentre ho fatto la doccia, è suonato il telefono.', 'Mentre facevo la doccia, è suonato il telefono.', `<em>Kiedy brałem prysznic</em> (czynność w toku) → ${b('facevo')}.`],
      ['Da bambino sono andato al mare ogni estate.', 'Da bambino andavo al mare ogni estate.', `<em>Jeździłem co roku</em> (zwyczaj) → ${b('imperfetto')}.`],
      ['Ho conosciuto Marta da anni.', 'Conoscevo Marta da anni.', `<em>Znałem ją od lat</em> → ${b('conoscevo')}; ${i('ho conosciuto')} to <em>poznałem</em>.`],
      ['Ieri è stato freddo.', 'Ieri faceva freddo.', `<em>Było zimno</em> (opis) → ${b('faceva freddo')}.`],
    ],
    tr: [
      ['Ieri è stato freddo.', 'Ieri faceva freddo.', `<em>Hava soğuktu</em> (betimleme) → ${b('faceva freddo')}.`],
      ['Quando ho avuto dieci anni, abitavo a Napoli.', 'Quando avevo dieci anni, abitavo a Napoli.', `<em>On yaşındayken</em> → ${b('avevo')}, yaş her zaman imperfetto.`],
      ['Sono stato stanco e sono andato a letto.', 'Ero stanco e sono andato a letto.', `<em>Yorgundum</em> (durum) → ${b('ero stanco')}.`],
      ['Abitavo a Milano per cinque anni.', 'Ho abitato a Milano per cinque anni.', `<em>Beş yıl oturdum</em> (belli süre) → ${b('passato prossimo')}.`],
      ['Ho conosciuto Marta da anni.', 'Conoscevo Marta da anni.', `<em>Onu yıllardır tanıyordum</em> → ${b('conoscevo')}; ${i('ho conosciuto')} <em>tanıştım</em> demektir.`],
    ],
    de: [
      ['Da bambino sono andato al mare ogni estate.', 'Da bambino andavo al mare ogni estate.', `<em>Ich bin jeden Sommer gefahren</em> (Gewohnheit) → ${b('imperfetto')}, auch wenn man auf Deutsch Perfekt sagt.`],
      ['Ieri è stato freddo.', 'Ieri faceva freddo.', `<em>Es war kalt</em> (Beschreibung) → ${b('faceva freddo')}.`],
      ['Quando ho avuto dieci anni, abitavo a Napoli.', 'Quando avevo dieci anni, abitavo a Napoli.', `<em>Als ich zehn war</em> → ${b('avevo')}: das Alter steht immer im imperfetto.`],
      ['Ho conosciuto Marta da anni.', 'Conoscevo Marta da anni.', `<em>Ich kannte sie seit Jahren</em> → ${b('conoscevo')}; ${i('ho conosciuto')} ist <em>ich habe kennengelernt</em>.`],
      ['Sapevo la notizia ieri sera.', 'Ho saputo la notizia ieri sera.', `<em>Ich habe es gestern erfahren</em> → ${b('ho saputo')}.`],
    ],
    ja: [
      ['Ieri è stato freddo.', 'Ieri faceva freddo.', `「寒かった」（描写）は ${b('faceva freddo')}。`],
      ['Abitavo a Milano per cinque anni.', 'Ho abitato a Milano per cinque anni.', `「5年間住んでいた」（期間がある）は ${b('passato prossimo')}。`],
      ['Sapevo la notizia ieri sera.', 'Ho saputo la notizia ieri sera.', `「昨日の夜ニュースを知った」は ${b('ho saputo')}。`],
      ['Quando ho avuto dieci anni, abitavo a Napoli.', 'Quando avevo dieci anni, abitavo a Napoli.', `「10歳の時」は ${b('avevo')} dieci anni。年齢はいつも imperfetto です。`],
      ['Sono stato contento e volevo ballare.', 'Ero contento e volevo ballare.', `「うれしかった」（気持ち）は ${b('ero contento')}。`],
    ],
  },
};

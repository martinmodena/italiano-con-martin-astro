// Stringhe di pagina della lezione «I verbi delle relazioni» (2026-09-26), kind 'match' con `photoRows`:
// l'esercizio da trascinare ha una FOTO per riga e i VERBI nella barra, e c'e' solo la forma positiva.
//
// I testi comuni agli esercizi con trascinamento (Progresso, Serie, Suggerimento, Ricomincia...) arrivano
// da `traitUi` (animals-pages.mjs); qui ci sono quelli che parlano di foto e verbi e la nota della pagina
// (ti amo / ti voglio bene, i verbi reciproci, i verbi con «a»).
//
// REGOLE_LINGUE.md: le parole italiane nei testi tradotti stanno in <em lang="it">; nelle meta
// description, che sono testo puro, gli esempi sono tradotti.

import { relationVerbs } from './relations-verbs.mjs';

const V = relationVerbs.length;
const it = (s) => `<em lang="it">${s}</em>`;

export const relationPages = {
  it: {
    dir: 'vocabolario',
    slug: 'verbi-relazioni',
    name: 'I verbi delle relazioni',
    title: 'Verbi delle relazioni in italiano | Italiano con Martin',
    description: `Impara ${V} verbi italiani per parlare delle persone che ami e che incontri — sposarsi, voler bene, litigare, fare pace, regalare, obbedire — con una foto, tre frasi d’esempio ed esercizi da trascinare.`,
    heroAlt:
      'Un uomo e una donna si abbracciano e si sorridono al tramonto, tra gli ulivi e i cipressi della campagna italiana',
    cardText: `${V} verbi per amore, famiglia e amicizia: sposarsi, voler bene, litigare, fare pace, regalare, obbedire…`,
  },
  en: {
    dir: 'en/vocabulary',
    slug: 'italian-relationship-verbs-vocabulary',
    name: 'Relationship verbs',
    title: 'Relationship verbs | Italian vocabulary | Italiano con Martin',
    description: `Learn ${V} Italian verbs to talk about the people you love and meet — to get married, to love, to argue, to make up, to give a present, to obey — with a photo, three example sentences and drag-and-drop exercises.`,
    heroAlt:
      'A man and a woman hug and smile at each other at sunset, among the olive trees and cypresses of the Italian countryside',
    cardText: `${V} verbs for love, family and friendship: to get married, to love, to argue, to make up, to give, to obey…`,
  },
  es: {
    dir: 'es/vocabulario',
    slug: 'vocabulario-verbos-de-las-relaciones-en-italiano',
    name: 'Los verbos de las relaciones',
    title: 'Los verbos de las relaciones | vocabulario italiano | Italiano con Martin',
    description: `Aprende ${V} verbos italianos para hablar de las personas que quieres y que conoces — casarse, querer, discutir, hacer las paces, regalar, obedecer — con una foto, tres frases de ejemplo y ejercicios de arrastrar.`,
    heroAlt:
      'Un hombre y una mujer se abrazan y se sonríen al atardecer, entre los olivos y los cipreses del campo italiano',
    cardText: `${V} verbos para el amor, la familia y la amistad: casarse, querer, discutir, hacer las paces, regalar, obedecer…`,
  },
  fr: {
    dir: 'fr/vocabulaire',
    slug: 'vocabulaire-verbes-des-relations-en-italien',
    name: 'Les verbes des relations',
    title: 'Les verbes des relations | vocabulaire italien | Italiano con Martin',
    description: `Apprenez ${V} verbes italiens pour parler des personnes que vous aimez et que vous rencontrez — se marier, aimer, se disputer, se réconcilier, offrir, obéir — avec une photo, trois exemples de phrases et des exercices à glisser-déposer.`,
    heroAlt:
      'Un homme et une femme s’enlacent et se sourient au coucher du soleil, parmi les oliviers et les cyprès de la campagne italienne',
    cardText: `${V} verbes pour l’amour, la famille et l’amitié : se marier, aimer, se disputer, se réconcilier, offrir, obéir…`,
  },
  cs: {
    dir: 'cs/slovni-zasoba',
    slug: 'italska-slovni-zasoba-slovesa-vztahu',
    name: 'Slovesa vztahů',
    title: 'Slovesa vztahů | italská slovní zásoba | Italiano con Martin',
    description: `Naučte se ${V} italských sloves o lidech, které máte rádi a které potkáváte — vzít se, mít rád, hádat se, usmířit se, darovat, poslouchat — s fotografií, třemi příkladovými větami a cvičeními na přetahování.`,
    heroAlt:
      'Muž a žena se objímají a usmívají se na sebe při západu slunce mezi olivovníky a cypřiši italského venkova',
    cardText: `${V} sloves o lásce, rodině a přátelství: vzít se, mít rád, hádat se, usmířit se, darovat, poslouchat…`,
  },
  pl: {
    dir: 'pl/slownictwo',
    slug: 'wloskie-slownictwo-czasowniki-relacji',
    name: 'Czasowniki relacji',
    title: 'Czasowniki relacji | włoskie słownictwo | Italiano con Martin',
    description: `Poznaj ${V} włoskich czasowników o ludziach, których kochasz i spotykasz — pobrać się, kochać, kłócić się, pogodzić się, podarować, słuchać — ze zdjęciem, trzema przykładowymi zdaniami i ćwiczeniami z przeciąganiem.`,
    heroAlt:
      'Mężczyzna i kobieta obejmują się i uśmiechają do siebie o zachodzie słońca, wśród oliwek i cyprysów włoskiej wsi',
    cardText: `${V} czasowników o miłości, rodzinie i przyjaźni: pobrać się, kochać, kłócić się, pogodzić się, podarować, słuchać…`,
  },
  tr: {
    dir: 'tr/kelime-bilgisi',
    slug: 'italyanca-iliski-fiilleri-kelimeleri',
    name: 'İlişki fiilleri',
    title: 'İlişki fiilleri | İtalyanca kelimeler | Italiano con Martin',
    description: `Sevdiğiniz ve tanıştığınız insanlardan söz etmek için ${V} İtalyanca fiil öğrenin — evlenmek, sevmek, kavga etmek, barışmak, hediye etmek, söz dinlemek — fotoğraf, üç örnek cümle ve sürükle-bırak alıştırmalarıyla.`,
    heroAlt:
      'Gün batımında İtalyan kırsalının zeytin ağaçları ve servileri arasında sarılıp birbirine gülümseyen bir kadın ve bir erkek',
    cardText: `Aşk, aile ve arkadaşlık için ${V} fiil: evlenmek, sevmek, kavga etmek, barışmak, hediye etmek, söz dinlemek…`,
  },
  de: {
    dir: 'de/wortschatz',
    slug: 'italienischer-wortschatz-verben-beziehungen',
    name: 'Verben der Beziehungen',
    title: 'Verben der Beziehungen | italienischer Wortschatz | Italiano con Martin',
    description: `Lerne ${V} italienische Verben, um über die Menschen zu sprechen, die du liebst und triffst — heiraten, lieb haben, streiten, sich versöhnen, schenken, gehorchen — mit Foto, drei Beispielsätzen und Übungen zum Ziehen.`,
    heroAlt:
      'Ein Mann und eine Frau umarmen sich und lächeln sich bei Sonnenuntergang an, zwischen den Olivenbäumen und Zypressen der italienischen Landschaft',
    cardText: `${V} Verben für Liebe, Familie und Freundschaft: heiraten, lieb haben, streiten, sich versöhnen, schenken, gehorchen …`,
  },
  ja: {
    dir: 'ja/goi',
    slug: 'italian-relationship-verbs-vocabulary',
    name: '人間関係の動詞',
    title: '人間関係の動詞 | イタリア語の語彙 | Italiano con Martin',
    description: `結婚する、大切に思う、けんかする、仲直りする、贈る、従うなど、愛する人や出会う人について話すためのイタリア語の動詞 ${V} 語を、写真、例文 3 つ、ドラッグ練習で学べます。`,
    heroAlt:
      '夕暮れのイタリアの田園、オリーブと糸杉の間で抱き合い、ほほえみ合う男性と女性',
    cardText: `恋愛・家族・友情の動詞 ${V} 語：結婚する、大切に思う、けんかする、仲直りする、贈る、従う…`,
  },
};

/** Testi dell'esercizio «guarda la foto e trascina il verbo» e nota della pagina. */
export const relationUi = {
  it: {
    note: {
      title: 'Ti amo o ti voglio bene?',
      body: '<em>Ti amo</em> si dice solo alla persona di cui si è innamorati; ai genitori, ai figli e agli amici si dice <em>ti voglio bene</em>. Molti verbi di questa lezione sono reciproci: l’azione va da una persona all’altra e viceversa (<em>ci sposiamo</em>, <em>si sono lasciati</em>, <em>vi conoscete?</em>); al passato prossimo prendono <em>essere</em> (<em>si sono sposati</em>). Altri vogliono <em>a</em> prima della persona: <em>voglio bene a mia madre</em>, <em>telefono a Luca</em>, <em>somiglio a mio padre</em>, <em>obbedisco alla maestra</em>, e quindi <em>gli</em> e <em>le</em> (<em>le telefono</em>). Alcune schede hanno più parole (<em>fare pace</em>, <em>prendersi cura di</em>) perché è così che si usano.',
    },
    positive: {
      eyebrow: 'Esercizio con trascinamento',
      title: 'Guarda la foto: quale verbo va bene?',
      intro:
        'Trascina un verbo sulla foto che descrive. Spesso vanno bene <strong>più verbi</strong> (un abbraccio è anche «voler bene»): basta trovarne uno, ma puoi aggiungerne quanti vuoi. Sul telefono: tocca il verbo, poi tocca la foto.',
    },
    ui: {
      progressText: '{n} di {total} foto descritte',
      tray: 'Verbi: trascinali sulle foto o toccali',
      wrong: 'Non proprio. Guarda meglio la foto e prova un altro verbo.',
      dropLabel: 'Verbi per la foto {adj}',
    },
  },
  en: {
    note: {
      title: `${it('Ti amo')} or ${it('ti voglio bene')}?`,
      body: `${it('Ti amo')} is only for the person you are in love with; to parents, children and friends you say ${it('ti voglio bene')}. Many verbs in this lesson are reciprocal: the action goes from one person to the other and back (${it('ci sposiamo')}, ${it('si sono lasciati')}, ${it('vi conoscete?')}); in the ${it('passato prossimo')} they take ${it('essere')} (${it('si sono sposati')}). Others need ${it('a')} before the person: ${it('voglio bene a mia madre')}, ${it('telefono a Luca')}, ${it('somiglio a mio padre')}, ${it('obbedisco alla maestra')}, so the pronouns are ${it('gli')} and ${it('le')} (${it('le telefono')}). Some cards have several words (${it('fare pace')}, ${it('prendersi cura di')}) because that is how they are used.`,
    },
    positive: {
      eyebrow: 'Drag-and-drop exercise',
      title: 'Look at the photo: which verb fits?',
      intro:
        'Drag a verb onto the photo it describes. Often <strong>several verbs</strong> fit (a hug is also <em lang="it">voler bene</em>): one is enough, but you can add as many as you like. On a phone: tap the verb, then tap the photo.',
    },
    ui: {
      progressText: '{n} of {total} photos described',
      tray: 'Verbs: drag them onto the photos or tap them',
      wrong: 'Not quite. Look at the photo again and try another verb.',
      dropLabel: 'Verbs for photo {adj}',
    },
  },
  es: {
    note: {
      title: `¿${it('Ti amo')} o ${it('ti voglio bene')}?`,
      body: `${it('Ti amo')} se dice solo a la persona de la que se está enamorado; a los padres, a los hijos y a los amigos se dice ${it('ti voglio bene')}. Muchos verbos de esta lección son recíprocos: la acción va de una persona a otra y viceversa (${it('ci sposiamo')}, ${it('si sono lasciati')}, ${it('vi conoscete?')}); en el ${it('passato prossimo')} llevan ${it('essere')} (${it('si sono sposati')}). Otros necesitan ${it('a')} antes de la persona: ${it('voglio bene a mia madre')}, ${it('telefono a Luca')}, ${it('somiglio a mio padre')}, ${it('obbedisco alla maestra')}, y por eso los pronombres son ${it('gli')} y ${it('le')} (${it('le telefono')}). Algunas fichas tienen varias palabras (${it('fare pace')}, ${it('prendersi cura di')}) porque así se usan.`,
    },
    positive: {
      eyebrow: 'Ejercicio de arrastrar',
      title: 'Mira la foto: ¿qué verbo va bien?',
      intro:
        'Arrastra un verbo hasta la foto que describe. A menudo sirven <strong>varios verbos</strong> (un abrazo también es <em lang="it">voler bene</em>): basta con uno, pero puedes añadir todos los que quieras. En el móvil: toca el verbo y luego toca la foto.',
    },
    ui: {
      progressText: '{n} de {total} fotos descritas',
      tray: 'Verbos: arrástralos a las fotos o tócalos',
      wrong: 'No exactamente. Mira bien la foto y prueba otro verbo.',
      dropLabel: 'Verbos para la foto {adj}',
    },
  },
  fr: {
    note: {
      title: `${it('Ti amo')} ou ${it('ti voglio bene')} ?`,
      body: `${it('Ti amo')} se dit seulement à la personne dont on est amoureux ; aux parents, aux enfants et aux amis on dit ${it('ti voglio bene')}. Beaucoup de verbes de cette leçon sont réciproques : l’action va d’une personne à l’autre et inversement (${it('ci sposiamo')}, ${it('si sono lasciati')}, ${it('vi conoscete ?')}) ; au ${it('passato prossimo')} ils prennent ${it('essere')} (${it('si sono sposati')}). D’autres demandent ${it('a')} devant la personne : ${it('voglio bene a mia madre')}, ${it('telefono a Luca')}, ${it('somiglio a mio padre')}, ${it('obbedisco alla maestra')}, d’où les pronoms ${it('gli')} et ${it('le')} (${it('le telefono')}). Certaines fiches ont plusieurs mots (${it('fare pace')}, ${it('prendersi cura di')}) parce que c’est ainsi qu’on les emploie.`,
    },
    positive: {
      eyebrow: 'Exercice à glisser-déposer',
      title: 'Regardez la photo : quel verbe convient ?',
      intro:
        'Faites glisser un verbe sur la photo qu’il décrit. Souvent <strong>plusieurs verbes</strong> conviennent (un câlin, c’est aussi <em lang="it">voler bene</em>) : un seul suffit, mais vous pouvez en ajouter autant que vous voulez. Sur téléphone : touchez le verbe, puis touchez la photo.',
    },
    ui: {
      progressText: '{n} photos décrites sur {total}',
      tray: 'Verbes : faites-les glisser sur les photos ou touchez-les',
      wrong: 'Pas tout à fait. Regardez bien la photo et essayez un autre verbe.',
      dropLabel: 'Verbes pour la photo {adj}',
    },
  },
  cs: {
    note: {
      title: `${it('Ti amo')}, nebo ${it('ti voglio bene')}?`,
      body: `${it('Ti amo')} se říká jen člověku, do kterého jste zamilovaní; rodičům, dětem a přátelům se říká ${it('ti voglio bene')}. Mnoho sloves v této lekci je vzájemných: děj jde od jednoho člověka k druhému a zpět (${it('ci sposiamo')}, ${it('si sono lasciati')}, ${it('vi conoscete?')}); v ${it('passato prossimo')} mají ${it('essere')} (${it('si sono sposati')}). Jiná chtějí před osobou ${it('a')}: ${it('voglio bene a mia madre')}, ${it('telefono a Luca')}, ${it('somiglio a mio padre')}, ${it('obbedisco alla maestra')}, a proto zájmena ${it('gli')} a ${it('le')} (${it('le telefono')}). Některé kartičky mají více slov (${it('fare pace')}, ${it('prendersi cura di')}), protože tak se opravdu používají.`,
    },
    positive: {
      eyebrow: 'Cvičení na přetahování',
      title: 'Podívejte se na fotku: které sloveso se hodí?',
      intro:
        'Přetáhněte sloveso na fotku, kterou popisuje. Často se hodí <strong>více sloves</strong> (objetí je i <em lang="it">voler bene</em>): stačí najít jedno, ale můžete přidat, kolik chcete. V telefonu: klepněte na sloveso a potom na fotku.',
    },
    ui: {
      progressText: '{n} z {total} fotek popsáno',
      tray: 'Slovesa: přetáhněte je na fotky nebo na ně klepněte',
      wrong: 'Ne tak docela. Podívejte se znovu na fotku a zkuste jiné sloveso.',
      dropLabel: 'Slovesa k fotce {adj}',
    },
  },
  pl: {
    note: {
      title: `${it('Ti amo')} czy ${it('ti voglio bene')}?`,
      body: `${it('Ti amo')} mówi się tylko osobie, w której jest się zakochanym; rodzicom, dzieciom i przyjaciołom mówi się ${it('ti voglio bene')}. Wiele czasowników z tej lekcji jest wzajemnych: czynność przechodzi od jednej osoby do drugiej i z powrotem (${it('ci sposiamo')}, ${it('si sono lasciati')}, ${it('vi conoscete?')}); w ${it('passato prossimo')} łączą się z ${it('essere')} (${it('si sono sposati')}). Inne wymagają ${it('a')} przed osobą: ${it('voglio bene a mia madre')}, ${it('telefono a Luca')}, ${it('somiglio a mio padre')}, ${it('obbedisco alla maestra')}, dlatego zaimki to ${it('gli')} i ${it('le')} (${it('le telefono')}). Niektóre fiszki mają kilka słów (${it('fare pace')}, ${it('prendersi cura di')}), bo tak się ich naprawdę używa.`,
    },
    positive: {
      eyebrow: 'Ćwiczenie z przeciąganiem',
      title: 'Spójrz na zdjęcie: który czasownik pasuje?',
      intro:
        'Przeciągnij czasownik na zdjęcie, które opisuje. Często pasuje <strong>kilka czasowników</strong> (przytulenie to też „voler bene”): wystarczy jeden, ale możesz dodać ile chcesz. Na telefonie: dotknij czasownika, a potem zdjęcia.',
    },
    ui: {
      progressText: '{n} z {total} zdjęć opisanych',
      tray: 'Czasowniki: przeciągnij je na zdjęcia albo ich dotknij',
      wrong: 'Nie całkiem. Przyjrzyj się zdjęciu i spróbuj innego czasownika.',
      dropLabel: 'Czasowniki do zdjęcia {adj}',
    },
  },
  tr: {
    note: {
      title: `${it('Ti amo')} mu, ${it('ti voglio bene')} mi?`,
      body: `${it('Ti amo')} yalnızca aşık olunan kişiye söylenir; anne babaya, çocuklara ve arkadaşlara ${it('ti voglio bene')} denir. Bu dersteki birçok fiil karşılıklıdır: eylem bir kişiden diğerine ve geri gider (${it('ci sposiamo')}, ${it('si sono lasciati')}, ${it('vi conoscete?')}); ${it('passato prossimo')}’da ${it('essere')} ile kullanılır (${it('si sono sposati')}). Bazıları kişiden önce ${it('a')} ister: ${it('voglio bene a mia madre')}, ${it('telefono a Luca')}, ${it('somiglio a mio padre')}, ${it('obbedisco alla maestra')}; bu yüzden zamirler ${it('gli')} ve ${it('le')} olur (${it('le telefono')}). Bazı kartlarda birden çok kelime var (${it('fare pace')}, ${it('prendersi cura di')}), çünkü gerçekten böyle kullanılırlar.`,
    },
    positive: {
      eyebrow: 'Sürükle-bırak alıştırması',
      title: 'Fotoğrafa bakın: hangi fiil uyuyor?',
      intro:
        'Bir fiili anlattığı fotoğrafın üzerine sürükleyin. Çoğu zaman <strong>birden çok fiil</strong> uyar (sarılmak aynı zamanda <em lang="it">voler bene</em> demektir): biri yeterli, ama istediğiniz kadar ekleyebilirsiniz. Telefonda: önce fiile, sonra fotoğrafa dokunun.',
    },
    ui: {
      progressText: '{total} fotoğraftan {n} tanesi anlatıldı',
      tray: 'Fiiller: fotoğraflara sürükleyin ya da dokunun',
      wrong: 'Tam değil. Fotoğrafa tekrar bakın ve başka bir fiil deneyin.',
      dropLabel: '{adj}. fotoğrafın fiilleri',
    },
  },
  de: {
    note: {
      title: `${it('Ti amo')} oder ${it('ti voglio bene')}?`,
      body: `${it('Ti amo')} sagt man nur zu der Person, in die man verliebt ist; zu Eltern, Kindern und Freunden sagt man ${it('ti voglio bene')}. Viele Verben dieser Lektion sind reziprok: Die Handlung geht von einer Person zur anderen und zurück (${it('ci sposiamo')}, ${it('si sono lasciati')}, ${it('vi conoscete?')}); im ${it('passato prossimo')} stehen sie mit ${it('essere')} (${it('si sono sposati')}). Andere brauchen ${it('a')} vor der Person: ${it('voglio bene a mia madre')}, ${it('telefono a Luca')}, ${it('somiglio a mio padre')}, ${it('obbedisco alla maestra')}, deshalb heißen die Pronomen ${it('gli')} und ${it('le')} (${it('le telefono')}). Manche Karten haben mehrere Wörter (${it('fare pace')}, ${it('prendersi cura di')}), weil man sie so wirklich verwendet.`,
    },
    positive: {
      eyebrow: 'Übung zum Ziehen',
      title: 'Schau dir das Foto an: Welches Verb passt?',
      intro:
        'Zieh ein Verb auf das Foto, das es beschreibt. Oft passen <strong>mehrere Verben</strong> (eine Umarmung ist auch <em lang="it">voler bene</em>): Eins reicht, du kannst aber so viele hinzufügen, wie du willst. Am Handy: Tippe auf das Verb und dann auf das Foto.',
    },
    ui: {
      progressText: '{n} von {total} Fotos beschrieben',
      tray: 'Verben: Zieh sie auf die Fotos oder tippe sie an',
      wrong: 'Nicht ganz. Schau dir das Foto noch einmal an und versuch ein anderes Verb.',
      dropLabel: 'Verben für Foto {adj}',
    },
  },
  ja: {
    note: {
      title: `${it('Ti amo')} か ${it('ti voglio bene')} か`,
      body: `${it('Ti amo')} は恋をしている相手にだけ言います。両親や子ども、友だちには ${it('ti voglio bene')} と言います。このレッスンの動詞の多くは相互的で、動作が一人からもう一人へ、またその逆へと向かいます（${it('ci sposiamo')}、${it('si sono lasciati')}、${it('vi conoscete?')}）。近過去（${it('passato prossimo')}）では ${it('essere')} を使います（${it('si sono sposati')}）。人の前に ${it('a')} が必要な動詞もあります：${it('voglio bene a mia madre')}、${it('telefono a Luca')}、${it('somiglio a mio padre')}、${it('obbedisco alla maestra')}。そのため代名詞は ${it('gli')}、${it('le')} になります（${it('le telefono')}）。複数の語からなるカード（${it('fare pace')}、${it('prendersi cura di')}）は、実際にそのように使うからです。`,
    },
    positive: {
      eyebrow: 'ドラッグ練習',
      title: '写真を見て：どの動詞が合う？',
      intro:
        '動詞を、それが表す写真の上にドラッグしてください。<strong>複数の動詞</strong>が合うこともよくあります（抱きしめる写真は「voler bene」でもあります）。一つ見つければ十分ですが、いくつ加えてもかまいません。スマートフォンでは、動詞をタップしてから写真をタップします。',
    },
    ui: {
      progressText: '{total} 枚中 {n} 枚の写真を説明しました',
      tray: '動詞：写真にドラッグするかタップしてください',
      wrong: '少し違います。写真をよく見て、別の動詞を試してください。',
      dropLabel: '写真 {adj} の動詞',
    },
  },
};

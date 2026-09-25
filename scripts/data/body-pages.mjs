// Stringhe di pagina delle due lezioni sul corpo (2026-09-25):
//
//   - «Il corpo umano»     (bodyPages,     kind 'words': schede + «Riconosci la parola» + traduzioni)
//   - «I verbi del corpo»  (bodyVerbPages, kind 'match': schede + esercizi da trascinare + traduzioni)
//
// Le etichette di servizio comuni a tutte le lezioni (Riconosci la parola, Frasi da tradurre, i bottoni,
// la barra di avanzamento) NON stanno qui: lo script le legge dalla pagina della cucina, gia' tradotta.
// I testi degli esercizi con trascinamento comuni (Progresso, Serie, Suggerimento...) arrivano da
// `traitUi` (animals-pages.mjs); qui ci sono quelli che parlano di parti del corpo invece che di animali.
//
// REGOLE_LINGUE.md: le parole italiane dentro i testi tradotti stanno in <em lang="it">.
// Nelle meta description, che sono testo puro, le parole di esempio sono tradotte.

import { bodyVocabulary } from './body-vocabulary.mjs';
import { bodyVerbs } from './body-verbs.mjs';

const N = bodyVocabulary.length;
const V = bodyVerbs.length;

export const bodyPages = {
  it: {
    dir: 'vocabolario',
    slug: 'corpo-umano',
    name: 'Il corpo umano',
    title: 'Vocabolario del corpo umano in italiano | Italiano con Martin',
    description: `Impara ${N} parti del corpo in italiano — testa, mano, ginocchio, cuore… — con foto realistiche, tre frasi d’esempio, pronuncia ed esercizi.`,
    heroAlt: 'Un gruppo di amici in un parco: ridono, si stirano e si danno il cinque',
    cardText: `${N} parole per la testa, il tronco, le mani, le gambe, la pelle, le ossa e gli organi, con foto realistiche.`,
  },
  en: {
    dir: 'en/vocabulary',
    slug: 'italian-human-body-vocabulary',
    name: 'The human body',
    title: 'The human body | Italian vocabulary | Italiano con Martin',
    description: `Learn ${N} parts of the body in Italian — head, hand, knee, heart… — with realistic photos, three example sentences, pronunciation and exercises.`,
    heroAlt: 'A group of friends in a park: laughing, stretching and high-fiving',
    cardText: `${N} words for the head, torso, hands, legs, skin, bones and organs, with realistic photos.`,
  },
  es: {
    dir: 'es/vocabulario',
    slug: 'vocabulario-del-cuerpo-humano-en-italiano',
    name: 'El cuerpo humano',
    title: 'El cuerpo humano | vocabulario italiano | Italiano con Martin',
    description: `Aprende ${N} partes del cuerpo en italiano — cabeza, mano, rodilla, corazón… — con fotos realistas, tres frases de ejemplo, pronunciación y ejercicios.`,
    heroAlt: 'Un grupo de amigos en un parque: se ríen, se estiran y se chocan los cinco',
    cardText: `${N} palabras para la cabeza, el tronco, las manos, las piernas, la piel, los huesos y los órganos, con fotos realistas.`,
  },
  fr: {
    dir: 'fr/vocabulaire',
    slug: 'vocabulaire-du-corps-humain-en-italien',
    name: 'Le corps humain',
    title: 'Le corps humain | vocabulaire italien | Italiano con Martin',
    description: `Apprenez ${N} parties du corps en italien — tête, main, genou, cœur… — avec des photos réalistes, trois exemples de phrases, la prononciation et des exercices.`,
    heroAlt: 'Un groupe d’amis dans un parc : ils rient, s’étirent et se tapent dans la main',
    cardText: `${N} mots pour la tête, le tronc, les mains, les jambes, la peau, les os et les organes, avec des photos réalistes.`,
  },
  cs: {
    dir: 'cs/slovni-zasoba',
    slug: 'italska-slovni-zasoba-lidske-telo',
    name: 'Lidské tělo',
    title: 'Lidské tělo | italská slovní zásoba | Italiano con Martin',
    description: `Naučte se ${N} částí těla italsky — hlava, ruka, koleno, srdce… — s realistickými fotografiemi, třemi příkladovými větami, výslovností a cvičeními.`,
    heroAlt: 'Skupina přátel v parku: smějí se, protahují se a dávají si pětku',
    cardText: `${N} slov pro hlavu, trup, ruce, nohy, kůži, kosti a orgány, s realistickými fotografiemi.`,
  },
  pl: {
    dir: 'pl/slownictwo',
    slug: 'wloskie-slownictwo-cialo-czlowieka',
    name: 'Ciało człowieka',
    title: 'Ciało człowieka | włoskie słownictwo | Italiano con Martin',
    description: `Poznaj ${N} części ciała po włosku — głowa, ręka, kolano, serce… — z realistycznymi zdjęciami, trzema przykładowymi zdaniami, wymową i ćwiczeniami.`,
    heroAlt: 'Grupa przyjaciół w parku: śmieją się, przeciągają i przybijają piątkę',
    cardText: `${N} słów: głowa, tułów, ręce, nogi, skóra, kości i narządy, z realistycznymi zdjęciami.`,
  },
  tr: {
    dir: 'tr/kelime-bilgisi',
    slug: 'italyanca-insan-vucudu-kelimeleri',
    name: 'İnsan vücudu',
    title: 'İnsan vücudu | İtalyanca kelimeler | Italiano con Martin',
    description: `İtalyanca ${N} vücut bölümünü öğrenin — baş, el, diz, kalp… — gerçekçi fotoğraflar, üç örnek cümle, telaffuz ve alıştırmalarla.`,
    heroAlt: 'Bir parkta bir grup arkadaş: gülüyor, geriniyor ve çak yapıyor',
    cardText: `Baş, gövde, eller, bacaklar, cilt, kemikler ve organlar için ${N} kelime, gerçekçi fotoğraflarla.`,
  },
  de: {
    dir: 'de/wortschatz',
    slug: 'italienischer-wortschatz-menschlicher-koerper',
    name: 'Der menschliche Körper',
    title: 'Der menschliche Körper | italienischer Wortschatz | Italiano con Martin',
    description: `Lerne ${N} Körperteile auf Italienisch — Kopf, Hand, Knie, Herz … — mit realistischen Fotos, drei Beispielsätzen, Aussprache und Übungen.`,
    heroAlt: 'Eine Gruppe von Freunden im Park: Sie lachen, strecken sich und geben sich ein High Five',
    cardText: `${N} Wörter für Kopf, Rumpf, Hände, Beine, Haut, Knochen und Organe, mit realistischen Fotos.`,
  },
  ja: {
    dir: 'ja/goi',
    slug: 'italian-human-body-vocabulary',
    name: '人間の体',
    title: '人間の体 | イタリア語の語彙 | Italiano con Martin',
    description: `頭、手、ひざ、心臓など、体の部分を表すイタリア語 ${N} 語を、リアルな写真、例文 3 つ、発音、練習問題で学べます。`,
    heroAlt: '公園で笑ったり、体を伸ばしたり、ハイタッチしたりする友だちのグループ',
    cardText: `頭、胴体、手、足、皮膚、骨、内臓の言葉 ${N} 語。リアルな写真付き。`,
  },
};

export const bodyExampleWord = { bare: 'mano', withArticle: 'la mano' };

export const bodyVerbPages = {
  it: {
    dir: 'vocabolario',
    slug: 'verbi-corpo',
    name: 'I verbi del corpo',
    title: 'Verbi del corpo in italiano | Italiano con Martin',
    description: `Impara ${V} verbi italiani legati al corpo — pettinarsi i capelli, lavarsi le mani, toccare, mordere, arrossire — con una foto realistica, tre frasi d’esempio ed esercizi da trascinare.`,
    heroAlt: 'Persone in un parco: una donna saluta con la mano, un uomo salta, una ragazza ride e applaude',
    cardText: `${V} verbi per le mani, la bocca, gli occhi e le gambe: pettinarsi, toccare, mordere, arrossire, sentire…`,
  },
  en: {
    dir: 'en/vocabulary',
    slug: 'italian-body-verbs-vocabulary',
    name: 'Body verbs',
    title: 'Body verbs | Italian vocabulary | Italiano con Martin',
    description: `Learn ${V} Italian verbs about the body — to comb your hair, to wash your hands, to touch, to bite, to blush — with a realistic photo, three example sentences and drag-and-drop exercises.`,
    heroAlt: 'People in a park: a woman waves, a man jumps, a girl laughs and claps',
    cardText: `${V} verbs for hands, mouth, eyes and legs: to comb, to touch, to bite, to blush, to hear…`,
  },
  es: {
    dir: 'es/vocabulario',
    slug: 'vocabulario-verbos-del-cuerpo-en-italiano',
    name: 'Los verbos del cuerpo',
    title: 'Los verbos del cuerpo | vocabulario italiano | Italiano con Martin',
    description: `Aprende ${V} verbos italianos relacionados con el cuerpo — peinarse, lavarse las manos, tocar, morder, sonrojarse — con una foto realista, tres frases de ejemplo y ejercicios de arrastrar.`,
    heroAlt: 'Personas en un parque: una mujer saluda con la mano, un hombre salta, una chica se ríe y aplaude',
    cardText: `${V} verbos para las manos, la boca, los ojos y las piernas: peinarse, tocar, morder, sonrojarse, oír…`,
  },
  fr: {
    dir: 'fr/vocabulaire',
    slug: 'vocabulaire-verbes-du-corps-en-italien',
    name: 'Les verbes du corps',
    title: 'Les verbes du corps | vocabulaire italien | Italiano con Martin',
    description: `Apprenez ${V} verbes italiens liés au corps — se peigner, se laver les mains, toucher, mordre, rougir — avec une photo réaliste, trois exemples de phrases et des exercices à glisser-déposer.`,
    heroAlt:
      'Des gens dans un parc : une femme fait un signe de la main, un homme saute, une jeune fille rit et applaudit',
    cardText: `${V} verbes pour les mains, la bouche, les yeux et les jambes : se peigner, toucher, mordre, rougir, entendre…`,
  },
  cs: {
    dir: 'cs/slovni-zasoba',
    slug: 'italska-slovni-zasoba-slovesa-tela',
    name: 'Slovesa těla',
    title: 'Slovesa těla | italská slovní zásoba | Italiano con Martin',
    description: `Naučte se ${V} italských sloves spojených s tělem — česat se, mýt si ruce, dotýkat se, kousat, červenat se — s realistickou fotografií, třemi příkladovými větami a cvičeními na přetahování.`,
    heroAlt: 'Lidé v parku: žena mává rukou, muž skáče, dívka se směje a tleská',
    cardText: `${V} sloves pro ruce, ústa, oči a nohy: česat se, dotýkat se, kousat, červenat se, slyšet…`,
  },
  pl: {
    dir: 'pl/slownictwo',
    slug: 'wloskie-slownictwo-czasowniki-ciala',
    name: 'Czasowniki związane z ciałem',
    title: 'Czasowniki związane z ciałem | włoskie słownictwo | Italiano con Martin',
    description: `Poznaj ${V} włoskich czasowników związanych z ciałem — czesać się, myć ręce, dotykać, gryźć, rumienić się — z realistycznym zdjęciem, trzema przykładowymi zdaniami i ćwiczeniami z przeciąganiem.`,
    heroAlt: 'Ludzie w parku: kobieta macha ręką, mężczyzna skacze, dziewczyna śmieje się i klaszcze',
    cardText: `${V} czasowników dla rąk, ust, oczu i nóg: czesać się, dotykać, gryźć, rumienić się, słyszeć…`,
  },
  tr: {
    dir: 'tr/kelime-bilgisi',
    slug: 'italyanca-vucut-fiilleri-kelimeleri',
    name: 'Vücut fiilleri',
    title: 'Vücut fiilleri | İtalyanca kelimeler | Italiano con Martin',
    description: `Vücutla ilgili ${V} İtalyanca fiili öğrenin — saçını taramak, ellerini yıkamak, dokunmak, ısırmak, kızarmak — gerçekçi bir fotoğraf, üç örnek cümle ve sürükle-bırak alıştırmalarıyla.`,
    heroAlt: 'Bir parkta insanlar: bir kadın el sallıyor, bir adam zıplıyor, bir kız gülüp alkışlıyor',
    cardText: `Eller, ağız, gözler ve bacaklar için ${V} fiil: taramak, dokunmak, ısırmak, kızarmak, duymak…`,
  },
  de: {
    dir: 'de/wortschatz',
    slug: 'italienischer-wortschatz-verben-koerper',
    name: 'Die Verben des Körpers',
    title: 'Die Verben des Körpers | italienischer Wortschatz | Italiano con Martin',
    description: `Lerne ${V} italienische Verben rund um den Körper — sich kämmen, sich die Hände waschen, berühren, beißen, erröten — mit einem realistischen Foto, drei Beispielsätzen und Drag-and-drop-Übungen.`,
    heroAlt: 'Menschen in einem Park: Eine Frau winkt, ein Mann springt, ein Mädchen lacht und klatscht',
    cardText: `${V} Verben für Hände, Mund, Augen und Beine: kämmen, berühren, beißen, erröten, hören …`,
  },
  ja: {
    dir: 'ja/goi',
    slug: 'italian-body-verbs-vocabulary',
    name: '体の動詞',
    title: '体の動詞 | イタリア語の語彙 | Italiano con Martin',
    description: `髪をとかす、手を洗う、触る、かむ、赤くなるなど、体に関するイタリア語の動詞 ${V} 語を、リアルな写真、例文 3 つ、ドラッグ＆ドロップの練習で学べます。`,
    heroAlt: '公園にいる人たち：手を振る女性、ジャンプする男性、笑って拍手する女の子',
    cardText: `手、口、目、足の動詞 ${V} 語：とかす、触る、かむ、赤くなる、聞こえる…`,
  },
};

/** Testi degli esercizi con trascinamento: le parti del corpo al posto degli animali. */
export const bodyVerbUi = {
  it: {
    lessonLink: 'Non ricordi una parte del corpo? Ripassa la lezione {link}.',
    note: {
      title: 'Con il corpo si usa l’articolo, non «mio»',
      body: 'Con le parti del corpo l’italiano usa di solito l’articolo, non l’aggettivo possessivo: <em>Mi lavo le mani</em> (non «le mie mani»), <em>Alzo il braccio</em>, <em>Mi fa male la testa</em>. I verbi che finiscono in <em>-si</em>, come <em>pettinarsi</em> e <em>lavarsi</em>, sono riflessivi: l’azione torna sulla persona stessa (<em>mi pettino</em>, <em>si pettina</em>). Alcune schede hanno più parole (<em>lavarsi le mani</em>, <em>sentire con le orecchie</em>) perché il verbo da solo non basta: sono le espressioni che si usano davvero. I verbi che riguardano tutto il corpo (<em>crescere</em>, <em>invecchiare</em>, <em>guarire</em>…) hanno la scheda ma non la riga negli esercizi.',
    },
    positive: {
      eyebrow: 'Esercizio con trascinamento',
      title: 'Quale parte del corpo serve?',
      intro:
        'Trascina una parte del corpo sul verbo per cui serve. Per ogni verbo basta trovare <strong>almeno una parte del corpo</strong>, ma puoi aggiungerne quante vuoi. Sul telefono: tocca la parte del corpo, poi tocca il verbo.',
    },
    negative: {
      eyebrow: 'Con la negazione',
      title: 'Quale parte del corpo non serve?',
      intro:
        'Ora al contrario: trascina una parte del corpo che <strong>non</strong> serve per quell’azione. Anche qui ne basta una. Attenzione alle trappole: nella barra ci sono anche parti del corpo che servono.',
    },
    ui: {
      progressText: '{n} di {total} verbi associati',
      tray: 'Parti del corpo: trascinale sui verbi o toccale',
      wrong: 'Non proprio. Prova con un’altra parte del corpo.',
      wrongNegative: 'Questa parte del corpo serve. Cercane un’altra.',
      dropLabel: 'Parti del corpo associate: {adj}',
    },
  },
  en: {
    lessonLink: 'Can’t remember a part of the body? Review the lesson {link}.',
    note: {
      title: 'With the body, Italian uses “the”, not “my”',
      body: 'With parts of the body Italian usually uses the definite article, not a possessive: <em lang="it">Mi lavo le mani</em> (not “le mie mani”), <em lang="it">Alzo il braccio</em>, <em lang="it">Mi fa male la testa</em>. Verbs ending in <em lang="it">-si</em>, like <em lang="it">pettinarsi</em> and <em lang="it">lavarsi</em>, are reflexive: the action goes back to the person (<em lang="it">mi pettino</em>, <em lang="it">si pettina</em>). Some cards have several words (<em lang="it">lavarsi le mani</em>, <em lang="it">sentire con le orecchie</em>) because the verb alone is not enough: these are the expressions people really use. Verbs about the whole body (<em lang="it">crescere</em>, <em lang="it">invecchiare</em>, <em lang="it">guarire</em>…) have a card but no row in the exercises.',
    },
    positive: {
      eyebrow: 'Drag-and-drop exercise',
      title: 'Which part of the body do you need?',
      intro:
        'Drag a part of the body onto the verb it is used for. For each verb you only need to find <strong>at least one part of the body</strong>, but you can add as many as you like. On a phone: tap the body part, then tap the verb.',
    },
    negative: {
      eyebrow: 'With negation',
      title: 'Which part of the body do you not need?',
      intro:
        'Now the other way round: drag a part of the body that is <strong>not</strong> used for that action. Again, one is enough. Beware of traps: the tray also contains body parts that are used.',
    },
    ui: {
      progressText: '{n} of {total} verbs matched',
      tray: 'Body parts: drag them onto the verbs or tap them',
      wrong: 'Not quite. Try another part of the body.',
      wrongNegative: 'This part of the body is used. Look for another one.',
      dropLabel: 'Matched body parts: {adj}',
    },
  },
  es: {
    lessonLink: '¿No recuerdas una parte del cuerpo? Repasa la lección {link}.',
    note: {
      title: 'Con el cuerpo, en italiano se usa el artículo, no «mi»',
      body: 'Con las partes del cuerpo el italiano suele usar el artículo, no el posesivo: <em lang="it">Mi lavo le mani</em> (no «le mie mani»), <em lang="it">Alzo il braccio</em>, <em lang="it">Mi fa male la testa</em>. Los verbos que terminan en <em lang="it">-si</em>, como <em lang="it">pettinarsi</em> y <em lang="it">lavarsi</em>, son reflexivos: la acción vuelve sobre la propia persona (<em lang="it">mi pettino</em>, <em lang="it">si pettina</em>). Algunas fichas tienen varias palabras (<em lang="it">lavarsi le mani</em>, <em lang="it">sentire con le orecchie</em>) porque el verbo solo no basta: son las expresiones que se usan de verdad. Los verbos que afectan a todo el cuerpo (<em lang="it">crescere</em>, <em lang="it">invecchiare</em>, <em lang="it">guarire</em>…) tienen ficha pero no fila en los ejercicios.',
    },
    positive: {
      eyebrow: 'Ejercicio de arrastrar',
      title: '¿Qué parte del cuerpo se necesita?',
      intro:
        'Arrastra una parte del cuerpo hasta el verbo para el que sirve. Para cada verbo basta encontrar <strong>al menos una parte del cuerpo</strong>, pero puedes añadir todas las que quieras. En el móvil: toca la parte del cuerpo y luego toca el verbo.',
    },
    negative: {
      eyebrow: 'Con negación',
      title: '¿Qué parte del cuerpo no se necesita?',
      intro:
        'Ahora al revés: arrastra una parte del cuerpo que <strong>no</strong> sirve para esa acción. Aquí también basta una. Cuidado con las trampas: en la barra también hay partes del cuerpo que sí sirven.',
    },
    ui: {
      progressText: '{n} de {total} verbos asociados',
      tray: 'Partes del cuerpo: arrástralas a los verbos o tócalas',
      wrong: 'No exactamente. Prueba con otra parte del cuerpo.',
      wrongNegative: 'Esta parte del cuerpo sí se usa. Busca otra.',
      dropLabel: 'Partes del cuerpo asociadas: {adj}',
    },
  },
  fr: {
    lessonLink: 'Vous ne vous souvenez plus d’une partie du corps ? Révisez la leçon {link}.',
    note: {
      title: 'Avec le corps, l’italien utilise l’article, pas « mon »',
      body: 'Avec les parties du corps, l’italien emploie en général l’article défini, pas le possessif : <em lang="it">Mi lavo le mani</em> (pas « le mie mani »), <em lang="it">Alzo il braccio</em>, <em lang="it">Mi fa male la testa</em>. Les verbes qui finissent en <em lang="it">-si</em>, comme <em lang="it">pettinarsi</em> et <em lang="it">lavarsi</em>, sont réfléchis : l’action revient sur la personne elle-même (<em lang="it">mi pettino</em>, <em lang="it">si pettina</em>). Certaines fiches ont plusieurs mots (<em lang="it">lavarsi le mani</em>, <em lang="it">sentire con le orecchie</em>) parce que le verbe seul ne suffit pas : ce sont les expressions qu’on utilise vraiment. Les verbes qui concernent tout le corps (<em lang="it">crescere</em>, <em lang="it">invecchiare</em>, <em lang="it">guarire</em>…) ont une fiche mais pas de ligne dans les exercices.',
    },
    positive: {
      eyebrow: 'Exercice à glisser-déposer',
      title: 'Quelle partie du corps faut-il ?',
      intro:
        'Faites glisser une partie du corps sur le verbe pour lequel on l’utilise. Pour chaque verbe, il suffit de trouver <strong>au moins une partie du corps</strong>, mais vous pouvez en ajouter autant que vous voulez. Sur téléphone : touchez la partie du corps, puis touchez le verbe.',
    },
    negative: {
      eyebrow: 'Avec la négation',
      title: 'Quelle partie du corps ne sert pas ?',
      intro:
        'Maintenant, à l’envers : faites glisser une partie du corps qui <strong>ne</strong> sert <strong>pas</strong> pour cette action. Là aussi, une seule suffit. Attention aux pièges : la barre contient aussi des parties du corps qui servent.',
    },
    ui: {
      progressText: '{n} verbes associés sur {total}',
      tray: 'Parties du corps : faites-les glisser sur les verbes ou touchez-les',
      wrong: 'Pas tout à fait. Essayez une autre partie du corps.',
      wrongNegative: 'Cette partie du corps sert. Cherchez-en une autre.',
      dropLabel: 'Parties du corps associées : {adj}',
    },
  },
  cs: {
    lessonLink: 'Nepamatujete si nějakou část těla? Zopakujte si lekci {link}.',
    note: {
      title: 'U částí těla se v italštině používá člen, ne „můj“',
      body: 'U částí těla italština obvykle používá určitý člen, ne přivlastňovací zájmeno: <em lang="it">Mi lavo le mani</em> (ne „le mie mani“), <em lang="it">Alzo il braccio</em>, <em lang="it">Mi fa male la testa</em>. Slovesa končící na <em lang="it">-si</em>, například <em lang="it">pettinarsi</em> a <em lang="it">lavarsi</em>, jsou zvratná: děj se vrací k osobě samotné (<em lang="it">mi pettino</em>, <em lang="it">si pettina</em>). Některé kartičky mají více slov (<em lang="it">lavarsi le mani</em>, <em lang="it">sentire con le orecchie</em>), protože samotné sloveso nestačí: jsou to výrazy, které se opravdu používají. Slovesa týkající se celého těla (<em lang="it">crescere</em>, <em lang="it">invecchiare</em>, <em lang="it">guarire</em>…) mají kartičku, ale ne řádek v cvičeních.',
    },
    positive: {
      eyebrow: 'Cvičení na přetahování',
      title: 'Jaká část těla se k tomu používá?',
      intro:
        'Přetáhněte část těla na sloveso, ke kterému se používá. Pro každé sloveso stačí najít <strong>alespoň jednu část těla</strong>, ale můžete přidat, kolik chcete. V telefonu: klepněte na část těla a potom na sloveso.',
    },
    negative: {
      eyebrow: 'Se záporem',
      title: 'Jaká část těla se k tomu nepoužívá?',
      intro:
        'Teď naopak: přetáhněte část těla, která se k tomu <strong>nepoužívá</strong>. I tady stačí jedna. Pozor na pasti: v liště jsou i části těla, které se používají.',
    },
    ui: {
      progressText: '{n} z {total} sloves přiřazeno',
      tray: 'Části těla: přetáhněte je na slovesa nebo na ně klepněte',
      wrong: 'Ne tak docela. Zkuste jinou část těla.',
      wrongNegative: 'Tato část těla se používá. Hledejte jinou.',
      dropLabel: 'Přiřazené části těla: {adj}',
    },
  },
  pl: {
    lessonLink: 'Nie pamiętasz jakiejś części ciała? Powtórz lekcję {link}.',
    note: {
      title: 'Przy częściach ciała po włosku używa się rodzajnika, nie „mój”',
      body: 'Przy częściach ciała włoski zwykle używa rodzajnika określonego, a nie zaimka dzierżawczego: <em lang="it">Mi lavo le mani</em> (nie „le mie mani”), <em lang="it">Alzo il braccio</em>, <em lang="it">Mi fa male la testa</em>. Czasowniki kończące się na <em lang="it">-si</em>, takie jak <em lang="it">pettinarsi</em> i <em lang="it">lavarsi</em>, są zwrotne: czynność wraca do samej osoby (<em lang="it">mi pettino</em>, <em lang="it">si pettina</em>). Niektóre karty mają kilka słów (<em lang="it">lavarsi le mani</em>, <em lang="it">sentire con le orecchie</em>), bo sam czasownik nie wystarcza: to wyrażenia, których naprawdę się używa. Czasowniki dotyczące całego ciała (<em lang="it">crescere</em>, <em lang="it">invecchiare</em>, <em lang="it">guarire</em>…) mają kartę, ale nie mają wiersza w ćwiczeniach.',
    },
    positive: {
      eyebrow: 'Ćwiczenie z przeciąganiem',
      title: 'Jaka część ciała jest potrzebna?',
      intro:
        'Przeciągnij część ciała na czasownik, do którego służy. Przy każdym czasowniku wystarczy znaleźć <strong>przynajmniej jedną część ciała</strong>, ale możesz dodać ich tyle, ile chcesz. Na telefonie: dotknij części ciała, a potem czasownika.',
    },
    negative: {
      eyebrow: 'Z przeczeniem',
      title: 'Jaka część ciała nie jest potrzebna?',
      intro:
        'Teraz na odwrót: przeciągnij część ciała, która <strong>nie</strong> służy do tej czynności. Tu też wystarczy jedna. Uwaga na pułapki: na pasku są też części ciała, które są potrzebne.',
    },
    ui: {
      progressText: '{n} z {total} czasowników dopasowano',
      tray: 'Części ciała: przeciągnij je na czasowniki lub dotknij',
      wrong: 'Niezupełnie. Spróbuj z inną częścią ciała.',
      wrongNegative: 'Ta część ciała jest potrzebna. Poszukaj innej.',
      dropLabel: 'Dopasowane części ciała: {adj}',
    },
  },
  tr: {
    lessonLink: 'Bir vücut bölümünü hatırlayamıyor musun? {link} dersini tekrar et.',
    note: {
      title: 'Vücut bölümlerinde İtalyanca “benim” değil, tanımlık kullanır',
      body: 'Vücut bölümlerinde İtalyanca genellikle iyelik sıfatı değil, belirli tanımlık kullanır: <em lang="it">Mi lavo le mani</em> (“le mie mani” değil), <em lang="it">Alzo il braccio</em>, <em lang="it">Mi fa male la testa</em>. <em lang="it">pettinarsi</em> ve <em lang="it">lavarsi</em> gibi <em lang="it">-si</em> ile biten fiiller dönüşlüdür: eylem kişinin kendisine döner (<em lang="it">mi pettino</em>, <em lang="it">si pettina</em>). Bazı kartlarda birden fazla kelime vardır (<em lang="it">lavarsi le mani</em>, <em lang="it">sentire con le orecchie</em>), çünkü tek başına fiil yetmez: bunlar gerçekten kullanılan ifadelerdir. Tüm vücudu ilgilendiren fiillerin (<em lang="it">crescere</em>, <em lang="it">invecchiare</em>, <em lang="it">guarire</em>…) kartı vardır ama alıştırmalarda satırı yoktur.',
    },
    positive: {
      eyebrow: 'Sürükle-bırak alıştırması',
      title: 'Hangi vücut bölümü gerekir?',
      intro:
        'Bir vücut bölümünü, onu kullandığın fiilin üzerine sürükle. Her fiil için <strong>en az bir vücut bölümü</strong> bulmak yeterli, ama istediğin kadar ekleyebilirsin. Telefonda: vücut bölümüne, sonra fiile dokun.',
    },
    negative: {
      eyebrow: 'Olumsuzla',
      title: 'Hangi vücut bölümü gerekmez?',
      intro:
        'Şimdi tersi: o eylem için <strong>gerekmeyen</strong> bir vücut bölümünü sürükle. Burada da bir tane yeterli. Tuzaklara dikkat: çubukta gerekli olan vücut bölümleri de var.',
    },
    ui: {
      progressText: '{total} fiilden {n} tanesi eşleşti',
      tray: 'Vücut bölümleri: fiillerin üzerine sürükle ya da dokun',
      wrong: 'Tam olarak değil. Başka bir vücut bölümü dene.',
      wrongNegative: 'Bu vücut bölümü gerekiyor. Başka birini ara.',
      dropLabel: 'Eşleşen vücut bölümleri: {adj}',
    },
  },
  de: {
    lessonLink: 'Du erinnerst dich nicht an einen Körperteil? Wiederhole die Lektion {link}.',
    note: {
      title: 'Beim Körper steht im Italienischen der Artikel, nicht „mein“',
      body: 'Bei Körperteilen verwendet das Italienische meist den bestimmten Artikel, nicht das Possessivpronomen: <em lang="it">Mi lavo le mani</em> (nicht „le mie mani“), <em lang="it">Alzo il braccio</em>, <em lang="it">Mi fa male la testa</em>. Verben auf <em lang="it">-si</em> wie <em lang="it">pettinarsi</em> und <em lang="it">lavarsi</em> sind reflexiv: Die Handlung kehrt zur Person zurück (<em lang="it">mi pettino</em>, <em lang="it">si pettina</em>). Manche Karten haben mehrere Wörter (<em lang="it">lavarsi le mani</em>, <em lang="it">sentire con le orecchie</em>), weil das Verb allein nicht reicht: Das sind die Ausdrücke, die man wirklich benutzt. Verben, die den ganzen Körper betreffen (<em lang="it">crescere</em>, <em lang="it">invecchiare</em>, <em lang="it">guarire</em> …), haben eine Karte, aber keine Zeile in den Übungen.',
    },
    positive: {
      eyebrow: 'Drag-and-drop-Übung',
      title: 'Welcher Körperteil wird gebraucht?',
      intro:
        'Ziehe einen Körperteil auf das Verb, für das man ihn braucht. Für jedes Verb genügt es, <strong>mindestens einen Körperteil</strong> zu finden, aber du kannst so viele hinzufügen, wie du willst. Auf dem Handy: Tippe auf den Körperteil, dann auf das Verb.',
    },
    negative: {
      eyebrow: 'Mit Verneinung',
      title: 'Welcher Körperteil wird nicht gebraucht?',
      intro:
        'Jetzt umgekehrt: Ziehe einen Körperteil, den man für diese Handlung <strong>nicht</strong> braucht. Auch hier genügt einer. Vorsicht, Fallen: In der Leiste sind auch Körperteile, die gebraucht werden.',
    },
    ui: {
      progressText: '{n} von {total} Verben zugeordnet',
      tray: 'Körperteile: Ziehe sie auf die Verben oder tippe sie an',
      wrong: 'Nicht ganz. Versuche es mit einem anderen Körperteil.',
      wrongNegative: 'Dieser Körperteil wird gebraucht. Suche einen anderen.',
      dropLabel: 'Zugeordnete Körperteile: {adj}',
    },
  },
  ja: {
    lessonLink: '体の部分を思い出せませんか？ レッスン「{link}」で復習しましょう。',
    note: {
      title: '体の部分には「私の」ではなく冠詞を使います',
      body: '体の部分には、イタリア語ではふつう所有形容詞ではなく定冠詞を使います：<em lang="it">Mi lavo le mani</em>（「le mie mani」とは言いません）、<em lang="it">Alzo il braccio</em>、<em lang="it">Mi fa male la testa</em>。<em lang="it">pettinarsi</em> や <em lang="it">lavarsi</em> のように <em lang="it">-si</em> で終わる動詞は再帰動詞で、動作が自分自身に戻ります（<em lang="it">mi pettino</em>、<em lang="it">si pettina</em>）。カードによっては複数の単語があります（<em lang="it">lavarsi le mani</em>、<em lang="it">sentire con le orecchie</em>）。動詞だけでは足りず、実際によく使う表現だからです。体全体にかかわる動詞（<em lang="it">crescere</em>、<em lang="it">invecchiare</em>、<em lang="it">guarire</em>…）にはカードはありますが、練習問題の行はありません。',
    },
    positive: {
      eyebrow: 'ドラッグ＆ドロップの練習',
      title: 'どの体の部分を使いますか？',
      intro:
        '動詞に使う体の部分をドラッグして重ねます。各動詞について<strong>少なくとも 1 つ</strong>見つければ十分ですが、いくつ追加してもかまいません。スマートフォンでは、体の部分をタップしてから動詞をタップします。',
    },
    negative: {
      eyebrow: '否定形で',
      title: 'どの体の部分は使いませんか？',
      intro:
        '今度は反対です。その動作に<strong>使わない</strong>体の部分をドラッグしてください。ここでも 1 つで十分です。わなに注意：バーには使う体の部分も入っています。',
    },
    ui: {
      progressText: '{total} 個中 {n} 個の動詞を関連づけました',
      tray: '体の部分：動詞にドラッグするか、タップしてください',
      wrong: '惜しい。別の体の部分を試してください。',
      wrongNegative: 'この体の部分は使います。ほかを探してください。',
      dropLabel: '関連づけた体の部分：{adj}',
    },
  },
};

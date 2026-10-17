// «La pronuncia italiana»: pagina francese (registro «vous»). Trappole per chi parla francese: l'accento
// sull'ultima sillaba, la u che è «ou», le vocali nasali, la e finale che si sente, ch = k, la r di gola,
// le doppie. Buone notizie: gn, la s di rose, la h muta.
export default {
  h1: 'La prononciation italienne',
  lead: 'L’italien se lit presque toujours comme il s’écrit : quelques règles suffisent pour lire à voix haute n’importe quel mot. Ici, vous les apprenez en écoutant : les cinq voyelles, le C et le G, les sons particuliers, les consonnes doubles (<em lang="it">casa</em> ou <em lang="it">cassa</em> ?), l’accent tonique, les pièges des francophones et quatre virelangues pour vous entraîner.',
  description:
    'La prononciation italienne pour francophones, avec audio : voyelles, c et g, gn, gli, sc, z, le r roulé, les consonnes doubles (casa / cassa, nono / nonno), l’accent tonique et les virelangues. 44 exercices d’écoute et un enregistreur pour comparer votre voix.',
  card: 'Voyelles, C et G, consonnes doubles (casa / cassa) et accent tonique, avec audio et exercices d’écoute.',
  heroAlt: 'Un micro ancien sur une table en bois devant une fenêtre donnant sur les toits d’un village italien',
  nav: {
    vocali: 'Voyelles',
    cg: 'C et G',
    suoni: 'Sons particuliers',
    doppie: 'Consonnes doubles',
    accento: 'Accent tonique',
    trappole: 'Pièges',
    scioglilingua: 'Virelangues',
  },
  ui: {
    play: 'Écouter',
    slow: 'Plus lentement',
    record: 'Enregistrez-vous',
    stop: 'Arrêter',
    yours: 'Votre voix',
    micError: 'Le micro n’est pas disponible : vérifiez les autorisations du navigateur.',
    correct: 'Bravo !',
    wrong: 'Non, c’était :',
    listenFirst: 'Écoutez d’abord, puis choisissez.',
    score: '{n} sur {t}',
    again: 'Nouveau tour',
    total: 'Votre résultat',
    vs: 'ou',
  },
  how: {
    h2: 'Comment fonctionne cette leçon',
    html: '<p>Appuyez sur <strong>▶</strong> pour écouter un mot et sur <strong>🐢</strong> pour l’entendre plus lentement. Dans les exercices d’écoute, la page choisit un mot au hasard : écoutez et choisissez celui que vous avez entendu. Avec <strong>🎙 Enregistrez-vous</strong>, vous pouvez enregistrer votre voix et la comparer au modèle : l’enregistrement reste dans votre navigateur, il ne part nulle part.</p><p class="mini-note"><strong>Le secret de l’italien :</strong> chaque lettre a (presque) toujours le même son. Pas de lettres muettes, sauf une : le <em lang="it">h</em>, comme en français. Avec les règles de cette page, vous saurez lire même les mots que vous n’avez jamais vus.</p>',
  },
  vowels: {
    h2: 'Les cinq voyelles : toujours nettes, toujours entières',
    intro:
      '<p>L’italien a cinq voyelles et les prononce toujours clairement, sans nasaliser et sans en avaler aucune. Regardez les visages : la bouche fait la moitié du travail.</p>',
    cues: {
      a: {
        cue: 'Bouche grande ouverte, comme chez le médecin : « Dites aaah ».',
        alt: 'Une grand-mère ouvre grand la bouche comme chez le médecin',
      },
      e: {
        cue: 'Bouche à moitié ouverte, un peu étirée : « Hein ? Quoi ? ».',
        alt: 'Un jeune homme dit « hein ? » la bouche entrouverte',
      },
      i: {
        cue: 'Le sourire de la photo : les lèvres s’étirent, comme pour « ouistiti ».',
        alt: 'Une fillette sourit largement comme pour une photo',
      },
      o: {
        cue: 'Lèvres rondes, comme pour la surprise : « Oh ! ».',
        alt: 'Une jeune femme dit « oh ! » les lèvres arrondies',
      },
      u: {
        cue: 'Lèvres en avant, comme le hibou : « Ouuu ». Le <em lang="it">u</em> italien se dit toujours « ou ».',
        alt: 'Un monsieur barbu fait « ouuu » comme un hibou',
      },
    },
    finalH3: 'La dernière voyelle s’entend aussi',
    final:
      '<p>En français, le <strong>e</strong> final est souvent muet. En italien, la voyelle finale ne se mange jamais : <em lang="it">pizz<strong>a</strong></em>, <em lang="it">Rom<strong>a</strong></em>, <em lang="it">gelat<strong>o</strong></em>, <em lang="it">nott<strong>e</strong></em> (un vrai « é » à la fin). C’est souvent elle qui dit s’il y a une chose ou plusieurs (<em lang="it">la pizza</em>, <em lang="it">le pizze</em>), ou si le mot est masculin ou féminin.</p>',
    eoH3: 'Bonus pour les curieux : le E et le O ont deux voix',
    eo: '<p>Comme en français (« dé » et « dès », « pomme » et « paume »), le <em lang="it">e</em> et le <em lang="it">o</em> peuvent être ouverts ou fermés. Un exemple célèbre : <em lang="it">la pèsca</em> (la pêche, le fruit) et <em lang="it">la pésca</em> (la pêche à la ligne) s’écrivent pareil. Rassurez-vous : à Milan, Rome et Naples, même les Italiens ne sont pas d’accord, et tout le monde vous comprendra.</p>',
    peach: 'la pèsca : la pêche (le fruit)',
    fishing: 'la pésca : la pêche à la ligne',
  },
  cg: {
    h2: 'C et G : durs ou doux ?',
    intro:
      '<p>Le <em lang="it">c</em> et le <em lang="it">g</em> ont deux sons. C’est la lettre suivante qui décide : devant <em lang="it">a</em>, <em lang="it">o</em>, <em lang="it">u</em> ils sont durs, devant <em lang="it">e</em> et <em lang="it">i</em> ils deviennent doux. Mais le son doux n’est pas le son français !</p>',
    cols: ['On écrit', 'On entend', 'Exemples'],
    sounds: {
      k: 'dur, comme dans « café »',
      c: 'doux, comme <strong>tch</strong> dans « tchèque »',
      g: 'dur, comme dans « gâteau »',
      j: 'doux, comme <strong>dj</strong> dans « Djibouti »',
    },
    tricks:
      '<p class="mini-note"><strong>Le H est un mur :</strong> placé entre le <em lang="it">c</em> et le <em lang="it">e</em> ou le <em lang="it">i</em>, il bloque la douceur. C’est comme votre <strong>qu</strong> : <em lang="it">che</em> = « qué », <em lang="it">chi</em> = « qui ». Voilà pourquoi <em lang="it">chiave</em> et <em lang="it">spaghetti</em> restent durs, et pourquoi <em lang="it">ch</em> n’est jamais le « ch » de « chat ».</p><p class="mini-note"><strong>Le I est un pont muet :</strong> dans <em lang="it">ciao</em>, <em lang="it">giallo</em> et <em lang="it">giorno</em>, le <em lang="it">i</em> sert seulement à adoucir la consonne. On ne dit pas « tchi-ao », mais <em lang="it">ciao</em>, une seule syllabe : « tchao ».</p>',
    exH3: 'Exercice 1 · Dur ou doux ?',
    exP: 'Lisez le mot et choisissez le son. Après votre réponse, vous entendez la prononciation.',
    hard: 'Dur (casa, gatto)',
    soft: 'Doux (ciao, gelato)',
  },
  sounds: {
    h2: 'Les sons particuliers',
    intro: '<p>Sept groupes de lettres à connaître. Écoutez les mots et répétez-les à voix haute.</p>',
    items: {
      gn: {
        title: '<em lang="it">gn</em> comme dans <em lang="it">gnocchi</em>',
        text: 'Le même son que dans « montagne » et « agneau » : vous l’avez déjà ! <em lang="it">Spagna</em> = « Espagne ».',
        alt: 'Une assiette de gnocchis à la sauce tomate et au basilic',
      },
      gli: {
        title: '<em lang="it">gli</em> comme dans <em lang="it">aglio</em>',
        text: 'Un <strong>l</strong> mouillé : proche de « lli » dans « millier » dit très vite, mais en un seul son, la langue collée au palais. Le <em lang="it">g</em> ne s’entend pas.',
        alt: 'Une tête d’ail',
      },
      sc: {
        title: '<em lang="it">sc</em> comme dans <em lang="it">sciarpa</em>',
        text: 'Devant <em lang="it">e</em> et <em lang="it">i</em>, c’est le <strong>ch</strong> de « chat » : <em lang="it">scena</em>, <em lang="it">pesce</em>. Devant <em lang="it">a</em>, <em lang="it">o</em>, <em lang="it">u</em> et avec le <em lang="it">h</em>, c’est « sk » : <em lang="it">scuola</em>, <em lang="it">schiena</em>.',
        alt: 'Une écharpe rouge en laine',
      },
      z: {
        title: '<em lang="it">z</em> comme dans <em lang="it">pizza</em> et <em lang="it">zebra</em>',
        text: 'Jamais le « z » de « zéro ». Deux sons : « ts » dans <em lang="it">pizza</em> et <em lang="it">grazie</em> (« gratsié »), « dz » dans <em lang="it">zebra</em> et <em lang="it">zero</em>. Si vous les confondez, personne ne le remarque : cela change d’une région à l’autre.',
        alt: 'Une pizza marinara à la tomate, à l’ail et à l’origan',
      },
      s: {
        title: '<em lang="it">s</em> comme dans <em lang="it">sole</em> et <em lang="it">rosa</em>',
        text: 'Comme en français ! Au début du mot, c’est le <strong>s</strong> de « soleil » : <em lang="it">sole</em>, <em lang="it">sale</em>. Entre deux voyelles, dans le Nord, il bourdonne comme dans « rose » : <em lang="it">rosa</em>, <em lang="it">casa</em>.',
        alt: 'Une rose rose',
      },
      r: {
        title: '<em lang="it">r</em> comme dans <em lang="it">rana</em>',
        text: 'Pas dans la gorge : c’est la pointe de la langue qui tape derrière les dents du haut. Un seul <em lang="it">r</em> = une petite tape (<em lang="it">caro</em>), le double <em lang="it">rr</em> = un petit roulement (<em lang="it">carro</em>), comme le r roulé de certains accents du Sud.',
        alt: 'Une grenouille verte',
      },
      h: {
        title: '<em lang="it">h</em> : la lettre timide',
        text: 'Muette, comme en français. <em lang="it">Ho</em>, <em lang="it">hai</em>, <em lang="it">ha</em>, <em lang="it">hanno</em> se lisent « o », « aï », « a », « anno ». Elle sert seulement à distinguer les mots écrits et à durcir le <em lang="it">c</em> et le <em lang="it">g</em>.',
      },
    },
  },
  doubles: {
    h2: 'Les consonnes doubles : le saut du chat',
    intro:
      '<p>Une consonne double ne s’écrit pas seulement deux fois : elle se prononce plus longue. Pensez à un chat avant de sauter : il s’arrête un instant, se prépare… et saute. Dans <em lang="it">cassa</em>, la voix s’arrête sur le <em lang="it">s</em> avant de repartir ; dans <em lang="it">casa</em>, non.</p>',
    catAlt: 'Un chat accroupi au bord d’une marche, prêt à sauter',
    how: '<p class="mini-note"><strong>Comment faire :</strong> en français, « belle » et « bêle » se prononcent presque pareil. En italien, la double s’entend vraiment, un peu comme dans « il l’a vu » face à « il a vu ». Avec <em lang="it">tt</em>, <em lang="it">pp</em>, <em lang="it">cc</em>, la bouche se ferme et attend un instant (<em lang="it">tutto</em>, <em lang="it">pappa</em>). Avec <em lang="it">ss</em>, <em lang="it">ll</em>, <em lang="it">nn</em>, <em lang="it">mm</em>, <em lang="it">rr</em>, le son s’allonge (<em lang="it">cassa</em>, <em lang="it">palla</em>, <em lang="it">nonno</em>). Et la voyelle qui précède devient plus courte.</p>',
    pairsH3: 'Une lettre change tout',
    anno: '<p class="mini-note"><strong>Attention aux vœux :</strong> le 31 décembre, on dit <em lang="it">Buon anno!</em> (bonne année), avec deux <em lang="it">n</em>. Avec un seul <em lang="it">n</em>, vous souhaitez bonne chance… à une partie du corps qu’on ne nomme pas à table. Les Italiens rient, mais vous : allongez le <em lang="it">n</em> !</p>',
    exH3: 'Exercice 2 · Écoutez et choisissez',
    exP: 'Appuyez sur ▶, écoutez et choisissez le mot entendu. Avec « Nouveau tour », la page choisit d’autres mots.',
  },
  stress: {
    h2: 'L’accent tonique : là où frappe la voix',
    intro:
      '<p>C’est le grand piège des francophones. En français, la voix monte toujours sur la dernière syllabe ; en italien, chaque mot a sa syllabe forte, le plus souvent l’avant-dernière. L’accent ne s’écrit que lorsqu’il tombe sur la dernière voyelle.</p>',
    groups: {
      penult: 'Sur l’avant-dernière syllabe : presque tous les mots',
      last: 'Sur la dernière : l’accent est écrit',
      third: 'Sur l’antépénultième : peu de mots, mais fréquents',
    },
    anchorH3: 'Un accent, deux mots',
    anchor:
      '<p>Mêmes lettres, accent différent : <em lang="it">l’àncora</em> est l’ancre du bateau, <em lang="it">ancóra</em> veut dire « encore ». Et n’appelez pas votre <em lang="it">papà</em> « <em lang="it">il papa</em> » : le pape habite au Vatican !</p>',
    anchorShip: 'l’àncora : l’ancre',
    anchorMore: 'ancóra : encore',
    papa: 'il papà : le papa',
    capito:
      '<p class="mini-note"><strong>Le champion :</strong> <em lang="it">càpito</em> (je tombe par hasard quelque part), <em lang="it">capìto</em> (compris : <em lang="it">hai capito?</em>) et <em lang="it">capitò</em> (cela arriva). Trois mots, les mêmes lettres.</p>',
    exH3: 'Exercice 3 · Touchez la syllabe forte',
    exP: 'Écoutez le mot et touchez la syllabe où frappe la voix.',
  },
  traps: {
    h2: 'Les pièges des francophones',
    intro:
      '<p>Chaque langue trébuche à un endroit différent. Voici les six habitudes qui trahissent un accent français en italien, et comment les corriger.</p>',
    easy: '<p class="mini-note"><strong>La bonne nouvelle :</strong> vous avez déjà le <strong>gn</strong> de « montagne », le <strong>s</strong> de « rose », le <strong>ch</strong> de « chat » (<em lang="it">pesce</em>) et le <strong>h</strong> muet. Et les voyelles ouvertes et fermées vous sont familières.</p>',
    items: [
      {
        title: 'L’accent n’est pas à la fin',
        text: 'On ne dit pas « cappucciNO » mais <em lang="it">cappucCIno</em>, pas « MilaNO » mais <em lang="it">MiLAno</em>. Et <em lang="it">macchina</em> se dit « MAcchina », sur la première syllabe.',
        words: ['cappuccino', 'Milano', 'macchina'],
      },
      {
        title: 'Le u se dit « ou »',
        text: 'Le « u » français n’existe pas en italien. <em lang="it">Tutto</em> = « toutto », <em lang="it">luna</em> = « louna », <em lang="it">uva</em> = « ouva ».',
        words: ['tutto', 'luna', 'uva'],
      },
      {
        title: 'Pas de voyelles nasales',
        text: 'Devant <em lang="it">n</em> et <em lang="it">m</em>, la voyelle reste pure et le <em lang="it">n</em> se prononce : <em lang="it">vino</em> n’est pas « vin », <em lang="it">con</em> finit par un vrai <strong>n</strong>, <em lang="it">bambino</em> se dit « bam-bi-no ».',
        words: ['vino', 'con', 'bambino'],
      },
      {
        title: 'Le e final se prononce',
        text: '<em lang="it">Notte</em>, <em lang="it">pane</em>, <em lang="it">bene</em> : la dernière lettre est un vrai « é ». Si vous l’avalez, <em lang="it">pane</em> (le pain) devient « pan »… qui n’existe pas.',
        words: ['notte', 'pane', 'bene'],
      },
      {
        title: 'Ch, c’est k',
        text: '<em lang="it">Chiesa</em> (église) se dit « kiéza », <em lang="it">Michele</em> se dit « Mikélé », et le vin <em lang="it">Chianti</em> commence par un « k ».',
        words: ['chiesa', 'Michele', 'Chianti'],
      },
      {
        title: 'Le r avec la langue',
        text: 'Sortez le <strong>r</strong> de la gorge et mettez-le sur la pointe de la langue : <em lang="it">Roma</em>, <em lang="it">caro</em>, <em lang="it">carro</em>. Astuce : dites très vite « tdtdtd », puis « ta-da » : le <strong>d</strong> rapide est presque un <em lang="it">r</em>.',
        words: ['Roma', 'caro', 'carro'],
      },
    ],
    exH3: 'Exercice 4 · Paires pièges',
    exP: 'Cinq paires avec <em lang="it">c</em> / <em lang="it">ch</em> et <em lang="it">sc</em> / <em lang="it">sch</em>, cinq avec consonnes simples et doubles. Écoutez et choisissez.',
  },
  twisters: {
    h2: 'Virelangues : la salle de sport de la bouche',
    intro:
      '<p><em lang="it">Gli scioglilingua</em> sont des phrases faites exprès pour trébucher, comme « Les chaussettes de l’archiduchesse ». Les Italiens les disent aux enfants, et tout le monde rit. Écoutez, répétez lentement, puis de plus en plus vite. Enregistrez-vous et comparez !</p>',
    notes: [
      '« Trente-trois Trentins entrèrent à Trente, tous les trente-trois en trottinant. » Entraîne le <em lang="it">r</em> et le <em lang="it">t</em> double : une rafale de <em lang="it">tr</em>.',
      '« Apelle, fils d’Apollon, fit une balle en peau de poulet. » Entraîne les doubles (<em lang="it">palla</em>, <em lang="it">pelle</em>, <em lang="it">pollo</em>) et le son <em lang="it">gli</em>.',
      '« Le cuisinier cuisine dans la cuisine et dit que la cuisinière est couchée et se tait parce que sa cousine ne cuisine pas. » Entraîne le <em lang="it">c</em> dur et doux : <em lang="it">cuoco</em>, <em lang="it">cuoce</em>, <em lang="it">cucina</em>, <em lang="it">giace</em>.',
      '« Serein il est, serein il sera ; s’il n’est pas serein, il se rassérénera. » Entraîne le <em lang="it">s</em> et le <em lang="it">r</em> : <em lang="it">sereno</em>, <em lang="it">rasserenerà</em>.',
    ],
    challenge:
      '<p class="mini-note"><strong>Le défi :</strong> arrivez-vous à dire le premier trois fois de suite, vite, sans faute ? La plupart des Italiens n’y arrivent pas.</p>',
  },
  end: {
    h2: 'Votre résultat',
    text: 'Les exercices d’écoute comptent 44 réponses. Refaites-les quand vous voulez : les mots changent à chaque tour.',
  },
  meanings: {
    casa: 'maison',
    cassa: 'caisse',
    nono: 'neuvième',
    nonno: 'grand-père',
    pala: 'pelle',
    palla: 'balle, ballon',
    sete: 'soif',
    sette: 'sept',
    caro: 'cher',
    carro: 'charrette',
    capello: 'un cheveu',
    cappello: 'chapeau',
    pena: 'peine, pitié',
    penna: 'stylo',
    sono: 'je suis',
    sonno: 'sommeil',
    rana: 'grenouille',
    lana: 'laine',
    mare: 'mer',
    male: 'mal',
    bacca: 'baie',
    vacca: 'vache',
    vino: 'vin',
    voto: 'vote',
    foto: 'photo',
    alto: 'grand',
    auto: 'voiture',
    cane: 'chien',
    cani: 'chiens',
    chiave: 'clé',
    chiavi: 'clés',
    pesche: 'pêches',
  },
};

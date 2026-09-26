// Le parole della lezione di vocabolario «La famiglia» (2026-09-26).
//
// Le immagini non sono foto: ogni scheda e' l'albero della famiglia Rossi, una famiglia inventata
// (richiesta di Martin: una famiglia «che tutti conoscono», ma senza personaggi protetti da copyright).
// I 17 personaggi sono stati disegnati una volta sola e ritagliati (scripts/data/famiglia-rossi/), cosi'
// sono identici in tutte le schede. Nell'albero sbiadito restano a colori:
//   - `ref`      chi parla, con la stella (lo zio «di Marco»); null = nessuna stella (la famiglia, la coppia)
//   - `targets`  la persona (o le persone) di cui parla la parola, nel riquadro blu
// Le persone che collegano le due restano a colori anche loro, a meta': le calcola
// scripts/build-family-images.mjs dall'albero qui sotto (FAMILY).
//
// Struttura di ogni voce: come body-vocabulary.mjs (image, slug, word, bare, examples, answers, alt).
// `alt` e' la stringa «(ignorato)|en|es|fr|cs|pl|tr|de|ja».

import { tr } from './traits-base.mjs';

const LANG_ORDER = ['it', 'en', 'es', 'fr', 'cs', 'pl', 'tr', 'de', 'ja'];

/**
 * L'albero della famiglia Rossi. Ogni coppia ha i suoi figli. Le posizioni (generazione, colonna)
 * servono a disegnare l'albero; l'ordine delle colonne evita che le linee si incrocino.
 */
export const FAMILY = {
  people: {
    giorgio: { gen: 0, col: 1.75 },
    rosa: { gen: 0, col: 2.75 },
    franco: { gen: 1, col: 0 },
    carla: { gen: 1, col: 1 },
    paolo: { gen: 1, col: 3.25 },
    lucia: { gen: 1, col: 4.25 },
    roberto: { gen: 1, col: 6.25 },
    elena: { gen: 1, col: 7.25 },
    davide: { gen: 2, col: 0 },
    sara: { gen: 2, col: 1 },
    luca: { gen: 2, col: 2.5 },
    anna: { gen: 2, col: 3.5 },
    marco: { gen: 2, col: 5 },
    giulia: { gen: 2, col: 6 },
    leo: { gen: 3, col: 3 },
    tommaso: { gen: 3, col: 5 },
    sofia: { gen: 3, col: 6 },
  },
  couples: [
    ['giorgio', 'rosa', ['franco', 'paolo']],
    ['franco', 'carla', ['davide', 'sara']],
    ['paolo', 'lucia', ['anna', 'marco']],
    ['roberto', 'elena', ['giulia']],
    ['luca', 'anna', ['leo']],
    ['marco', 'giulia', ['tommaso', 'sofia']],
  ],
};

const ALL = Object.keys(FAMILY.people);

/** Le risposte accettate: con e senza articolo, piu' i sinonimi (papa' per padre). */
const answersFor = (word, extra) => {
  const bare = word.replace(/^(il|lo|la|l’|i|gli|le)\s?/, '');
  const list = [bare, word, ...extra];
  if (word.includes('’')) list.push(word.replace('’', ' '), word.replace('’', ''));
  return [...new Set(list)];
};

const member = (slug, word, examples, alts, ref, targets, extra = []) => {
  const alt = alts.split('|');
  if (alt.length !== LANG_ORDER.length) throw new Error(`«${slug}»: alt deve avere 9 campi`);
  alt[0] = word.charAt(0).toUpperCase() + word.slice(1);
  if (examples.length !== 3) throw new Error(`«${slug}»: servono tre frasi d'esempio`);
  for (const p of [ref, ...targets])
    if (p && !FAMILY.people[p]) throw new Error(`«${slug}»: persona sconosciuta «${p}»`);
  return {
    image: `famiglia/${slug}`,
    slug,
    word,
    bare: word.replace(/^(il|lo|la|l’|i|gli|le)\s?/, ''),
    examples,
    answers: answersFor(word, extra),
    ref,
    targets,
    alt: Object.fromEntries(LANG_ORDER.map((lang, i) => [lang, alt[i]])),
  };
};

export const familyVocabulary = [
  // --- la famiglia intera e i genitori ------------------------------------------------
  member(
    'famiglia',
    'la famiglia',
    [
      'La famiglia Rossi è molto grande.',
      'La domenica pranzo con la mia famiglia.',
      'Ho una famiglia piccola: siamo in tre.',
    ],
    '|The family|La familia|La famille|Rodina|Rodzina|Aile|Die Familie|家族',
    null,
    ALL
  ),
  member(
    'genitori',
    'i genitori',
    [
      'I genitori di Marco si chiamano Paolo e Lucia.',
      'I miei genitori abitano in campagna.',
      'Vivo ancora con i miei genitori.',
    ],
    '|The parents|Los padres|Les parents|Rodiče|Rodzice|Anne ve baba|Die Eltern|両親',
    'marco',
    ['paolo', 'lucia']
  ),
  member(
    'padre',
    'il padre',
    ['Paolo è il padre di Marco e di Anna.', 'Mio padre fa il medico.', 'Papà, mi aiuti con i compiti?'],
    '|The father (dad)|El padre (papá)|Le père (papa)|Otec (táta)|Ojciec (tata)|Baba|Der Vater (Papa)|父（お父さん）',
    'marco',
    ['paolo'],
    ['papà', 'il papà', 'babbo', 'il babbo']
  ),
  member(
    'madre',
    'la madre',
    ['Lucia è la madre di Marco.', 'Mia madre cucina benissimo.', 'Mamma, dove sono le mie scarpe?'],
    '|The mother (mum)|La madre (mamá)|La mère (maman)|Matka (máma)|Matka (mama)|Anne|Die Mutter (Mama)|母（お母さん）',
    'marco',
    ['lucia'],
    ['mamma', 'la mamma']
  ),

  // --- figli e fratelli ----------------------------------------------------------------
  member(
    'figlio',
    'il figlio',
    ['Tommaso è il figlio di Marco e Giulia.', 'Mio figlio ha otto anni.', 'Hanno un figlio e una figlia.'],
    '|The son|El hijo|Le fils|Syn|Syn|Oğul|Der Sohn|息子',
    'marco',
    ['tommaso']
  ),
  member(
    'figlia',
    'la figlia',
    ['Sofia è la figlia più piccola di Marco.', 'Mia figlia va all’asilo.', 'Giulia è figlia di Roberto ed Elena.'],
    '|The daughter|La hija|La fille|Dcera|Córka|Kız evlat|Die Tochter|娘',
    'marco',
    ['sofia']
  ),
  member(
    'figli',
    'i figli',
    ['Marco ha due figli: Tommaso e Sofia.', 'Hai figli?', 'I miei figli giocano in giardino.'],
    '|The children (sons and daughters)|Los hijos|Les enfants|Děti|Dzieci|Çocuklar|Die Kinder|子どもたち（息子と娘）',
    'marco',
    ['tommaso', 'sofia']
  ),
  member(
    'fratello',
    'il fratello',
    ['Marco è il fratello di Anna.', 'Mio fratello è più grande di me.', 'Ho un fratello e due sorelle.'],
    '|The brother|El hermano|Le frère|Bratr|Brat|Erkek kardeş|Der Bruder|兄弟（兄・弟）',
    'anna',
    ['marco']
  ),
  member(
    'sorella',
    'la sorella',
    ['Anna è la sorella di Marco.', 'Mia sorella studia medicina.', 'La mia sorella minore si chiama Chiara.'],
    '|The sister|La hermana|La sœur|Sestra|Siostra|Kız kardeş|Die Schwester|姉妹（姉・妹）',
    'marco',
    ['anna']
  ),
  member(
    'fratelli',
    'i fratelli',
    ['Davide e Sara sono fratelli.', 'Quanti fratelli hai?', 'Ho due fratelli: un fratello e una sorella.'],
    '|Brothers and sisters (siblings)|Los hermanos|Les frères et sœurs|Sourozenci|Rodzeństwo|Kardeşler|Die Geschwister|きょうだい',
    null,
    ['davide', 'sara']
  ),
  member(
    'figlia-unica',
    'la figlia unica',
    [
      'Giulia è figlia unica: non ha fratelli.',
      'Sono figlio unico, ma ho tanti cugini.',
      'Da bambina, essere figlia unica era un po’ noioso.',
    ],
    '|The only child (daughter)|La hija única|La fille unique|Jedináček (dcera)|Jedynaczka|Tek çocuk (kız)|Das Einzelkind (Tochter)|一人っ子（娘）',
    'roberto',
    ['giulia'],
    ['figlio unico', 'il figlio unico']
  ),

  // --- la coppia ---------------------------------------------------------------------
  member(
    'marito',
    'il marito',
    ['Marco è il marito di Giulia.', 'Mio marito lavora in banca.', 'Anna e suo marito Luca vivono a Bologna.'],
    '|The husband|El marido|Le mari|Manžel|Mąż|Koca (eş)|Der Ehemann|夫',
    'giulia',
    ['marco']
  ),
  member(
    'moglie',
    'la moglie',
    ['Giulia è la moglie di Marco.', 'Mia moglie è di Napoli.', 'Luca è uscito con sua moglie.'],
    '|The wife|La esposa|La femme (l’épouse)|Manželka|Żona|Karı (eş)|Die Ehefrau|妻',
    'marco',
    ['giulia']
  ),
  member(
    'coppia',
    'la coppia',
    [
      'Roberto ed Elena sono una bella coppia.',
      'Sono una coppia da quarant’anni.',
      'Al ristorante ci sono molte coppie.',
    ],
    '|The couple|La pareja|Le couple|Pár|Para|Çift|Das Paar|夫婦（カップル）',
    null,
    ['roberto', 'elena']
  ),

  // --- nonni, nipoti, bisnonni -------------------------------------------------------
  member(
    'nonno',
    'il nonno',
    ['Paolo è il nonno di Tommaso.', 'Il nonno mi racconta sempre delle storie.', 'Mio nonno ha ottant’anni.'],
    '|The grandfather|El abuelo|Le grand-père|Dědeček|Dziadek|Dede|Der Großvater|祖父（おじいさん）',
    'tommaso',
    ['paolo']
  ),
  member(
    'nonna',
    'la nonna',
    ['Lucia è la nonna di Tommaso.', 'La nonna fa la torta di mele.', 'D’estate vado dalla nonna.'],
    '|The grandmother|La abuela|La grand-mère|Babička|Babcia|Büyükanne|Die Großmutter|祖母（おばあさん）',
    'tommaso',
    ['lucia']
  ),
  member(
    'nonni',
    'i nonni',
    [
      'Sofia ha quattro nonni: Paolo, Lucia, Roberto ed Elena.',
      'I nonni vengono a prenderci a scuola.',
      'Passo le vacanze dai nonni.',
    ],
    '|The grandparents|Los abuelos|Les grands-parents|Prarodiče|Dziadkowie|Büyükanne ve büyükbaba|Die Großeltern|祖父母',
    'sofia',
    ['paolo', 'lucia', 'roberto', 'elena']
  ),
  member(
    'nipote-m',
    'il nipote',
    [
      'Leo è il nipote di Marco: è il figlio di sua sorella.',
      'Il nonno gioca a carte con il nipote.',
      'Ho un nipote di due anni.',
    ],
    '|The nephew (also: the grandson)|El sobrino (también: el nieto)|Le neveu (aussi : le petit-fils)|Synovec (také: vnuk)|Siostrzeniec (także: wnuk)|Erkek yeğen (ayrıca: erkek torun)|Der Neffe (auch: der Enkel)|甥（孫の意味もある）',
    'marco',
    ['leo']
  ),
  member(
    'nipote-f',
    'la nipote',
    [
      'Sofia è la nipote di Paolo: è la figlia di suo figlio.',
      'La nonna porta la nipote al parco.',
      'Mia nipote vive in Francia.',
    ],
    '|The granddaughter (also: the niece)|La nieta (también: la sobrina)|La petite-fille (aussi : la nièce)|Vnučka (také: neteř)|Wnuczka (także: bratanica)|Kız torun (ayrıca: kız yeğen)|Die Enkelin (auch: die Nichte)|孫娘（姪の意味もある）',
    'paolo',
    ['sofia']
  ),
  member(
    'nipoti',
    'i nipoti',
    [
      'Paolo e Lucia hanno tre nipoti: Tommaso, Sofia e Leo.',
      'A Natale i nonni fanno i regali ai nipoti.',
      'La zia Carla adora i suoi nipoti.',
    ],
    '|The grandchildren (also: nephews and nieces)|Los nietos (también: los sobrinos)|Les petits-enfants (aussi : les neveux et nièces)|Vnoučata (také: synovci a neteře)|Wnuki (także: bratankowie i siostrzeńcy)|Torunlar (ayrıca: yeğenler)|Die Enkelkinder (auch: Neffen und Nichten)|孫たち（甥・姪の意味もある）',
    'paolo',
    ['tommaso', 'sofia', 'leo']
  ),
  member(
    'bisnonno',
    'il bisnonno',
    ['Giorgio è il bisnonno di Tommaso.', 'Il mio bisnonno è nato nel 1938.', 'Il bisnonno cammina con il bastone.'],
    '|The great-grandfather|El bisabuelo|L’arrière-grand-père|Pradědeček|Pradziadek|Büyük dede|Der Urgroßvater|曾祖父（ひいおじいさん）',
    'tommaso',
    ['giorgio']
  ),
  member(
    'bisnonna',
    'la bisnonna',
    [
      'Rosa è la bisnonna di Sofia.',
      'La bisnonna ricorda ancora la guerra.',
      'Ho conosciuto la mia bisnonna quando ero piccolo.',
    ],
    '|The great-grandmother|La bisabuela|L’arrière-grand-mère|Prababička|Prababcia|Büyük nine|Die Urgroßmutter|曾祖母（ひいおばあさん）',
    'sofia',
    ['rosa']
  ),

  // --- zii e cugini ------------------------------------------------------------------
  member(
    'zio',
    'lo zio',
    [
      'Franco è lo zio di Marco: è il fratello di suo padre.',
      'Mio zio abita in America.',
      'Lo zio mi ha regalato una bici.',
    ],
    '|The uncle|El tío|L’oncle|Strýc|Wujek (stryj)|Amca, dayı|Der Onkel|おじ',
    'marco',
    ['franco']
  ),
  member(
    'zia',
    'la zia',
    [
      'Carla è la zia di Marco: è la moglie di zio Franco.',
      'La zia fa dei biscotti buonissimi.',
      'Ho tre zie e due zii.',
    ],
    '|The aunt|La tía|La tante|Teta|Ciocia|Hala, teyze, yenge|Die Tante|おば',
    'marco',
    ['carla']
  ),
  member(
    'cugino',
    'il cugino',
    ['Davide è il cugino di Marco.', 'Mio cugino ha la mia stessa età.', 'D’estate gioco sempre con i miei cugini.'],
    '|The cousin (male)|El primo|Le cousin|Bratranec|Kuzyn|Kuzen (erkek)|Der Cousin|いとこ（男性）',
    'marco',
    ['davide']
  ),
  member(
    'cugina',
    'la cugina',
    ['Sara è la cugina di Marco.', 'Mia cugina si sposa a giugno.', 'Ho una cugina che vive a Londra.'],
    '|The cousin (female)|La prima|La cousine|Sestřenice|Kuzynka|Kuzen (kız)|Die Cousine|いとこ（女性）',
    'marco',
    ['sara']
  ),

  // --- i parenti acquisiti ------------------------------------------------------------
  member(
    'suocero',
    'il suocero',
    [
      'Roberto è il suocero di Marco: è il padre di sua moglie.',
      'Mio suocero è molto simpatico.',
      'Il suocero aiuta Marco in giardino.',
    ],
    '|The father-in-law|El suegro|Le beau-père|Tchán|Teść|Kayınpeder|Der Schwiegervater|義父（しゅうと）',
    'marco',
    ['roberto']
  ),
  member(
    'suocera',
    'la suocera',
    ['Elena è la suocera di Marco.', 'La domenica pranziamo da mia suocera.', 'Mia suocera mi telefona ogni giorno.'],
    '|The mother-in-law|La suegra|La belle-mère|Tchyně|Teściowa|Kayınvalide|Die Schwiegermutter|義母（しゅうとめ）',
    'marco',
    ['elena']
  ),
  member(
    'suoceri',
    'i suoceri',
    ['I suoceri di Marco sono Roberto ed Elena.', 'Stasera ceniamo dai suoceri.', 'Vado d’accordo con i miei suoceri.'],
    '|The parents-in-law|Los suegros|Les beaux-parents|Tchán a tchyně|Teściowie|Kayınpeder ve kayınvalide|Die Schwiegereltern|義理の両親',
    'marco',
    ['roberto', 'elena']
  ),
  member(
    'cognato',
    'il cognato',
    [
      'Luca è il cognato di Marco: è il marito di sua sorella.',
      'Mio cognato fa il cuoco.',
      'Esco a correre con mio cognato.',
    ],
    '|The brother-in-law|El cuñado|Le beau-frère|Švagr|Szwagier|Enişte, kayınbirader|Der Schwager|義理の兄弟',
    'marco',
    ['luca']
  ),
  member(
    'cognata',
    'la cognata',
    [
      'Anna è la cognata di Giulia: è la sorella di suo marito.',
      'Mia cognata mi presta spesso i libri.',
      'Vado in vacanza con le mie cognate.',
    ],
    '|The sister-in-law|La cuñada|La belle-sœur|Švagrová|Szwagierka|Görümce, baldız, yenge|Die Schwägerin|義理の姉妹',
    'giulia',
    ['anna']
  ),
  member(
    'genero',
    'il genero',
    [
      'Luca è il genero di Paolo: è il marito di sua figlia.',
      'Il genero di Elena è Marco.',
      'Mio genero è un bravo ragazzo.',
    ],
    '|The son-in-law|El yerno|Le gendre|Zeť|Zięć|Damat|Der Schwiegersohn|義理の息子（娘の夫）',
    'paolo',
    ['luca']
  ),
  member(
    'nuora',
    'la nuora',
    [
      'Giulia è la nuora di Paolo: è la moglie di suo figlio.',
      'Mia nuora è molto gentile.',
      'La suocera e la nuora cucinano insieme.',
    ],
    '|The daughter-in-law|La nuera|La belle-fille|Snacha|Synowa|Gelin|Die Schwiegertochter|義理の娘（息子の妻）',
    'paolo',
    ['giulia']
  ),
  member(
    'parenti',
    'i parenti',
    [
      'A Natale Marco vede tutti i suoi parenti.',
      'Ho molti parenti in Sicilia.',
      'Al matrimonio c’erano più di cento parenti.',
    ],
    '|The relatives|Los parientes|Les proches (la famille)|Příbuzní|Krewni|Akrabalar|Die Verwandten|親戚',
    'marco',
    ALL.filter((p) => p !== 'marco')
  ),
];

/** La parola usata come esempio nei testi dell'esercizio e nella nota («zio», «lo zio»). */
export const familyExampleWord = { bare: 'zio', withArticle: 'lo zio' };

export const familyTranslationExercises = [
  tr(
    'Mia sorella ha due figli.',
    'My sister has two children.',
    'Mi hermana tiene dos hijos.',
    'Ma sœur a deux enfants.',
    'Moje sestra má dvě děti.',
    'Moja siostra ma dwoje dzieci.',
    'Kız kardeşimin iki çocuğu var.',
    'Meine Schwester hat zwei Kinder.',
    '姉には子どもが二人います。'
  ),
  tr(
    'I miei nonni abitano in campagna.',
    'My grandparents live in the countryside.',
    'Mis abuelos viven en el campo.',
    'Mes grands-parents habitent à la campagne.',
    'Moji prarodiče bydlí na venkově.',
    'Moi dziadkowie mieszkają na wsi.',
    'Büyükannem ve büyükbabam köyde yaşıyor.',
    'Meine Großeltern wohnen auf dem Land.',
    '祖父母は田舎に住んでいます。'
  ),
  tr(
    'Mio padre si chiama Paolo.',
    'My father’s name is Paolo.',
    'Mi padre se llama Paolo.',
    'Mon père s’appelle Paolo.',
    'Můj otec se jmenuje Paolo.',
    'Mój ojciec ma na imię Paolo.',
    'Babamın adı Paolo.',
    'Mein Vater heißt Paolo.',
    '父の名前はパオロです。'
  ),
  tr(
    'Hai fratelli o sorelle?',
    'Do you have any brothers or sisters?',
    '¿Tienes hermanos o hermanas?',
    'Tu as des frères ou des sœurs ?',
    'Máš sourozence?',
    'Masz rodzeństwo?',
    'Kardeşin var mı?',
    'Hast du Geschwister?',
    'きょうだいはいますか？'
  ),
  tr(
    'Sono figlio unico.',
    'I am an only child.',
    'Soy hijo único.',
    'Je suis fils unique.',
    'Jsem jedináček.',
    'Jestem jedynakiem.',
    'Ben tek çocuğum.',
    'Ich bin ein Einzelkind.',
    '私は一人っ子です。'
  ),
  tr(
    'Mia moglie è italiana, ma i suoi genitori sono giapponesi.',
    'My wife is Italian, but her parents are Japanese.',
    'Mi esposa es italiana, pero sus padres son japoneses.',
    'Ma femme est italienne, mais ses parents sont japonais.',
    'Moje žena je Italka, ale její rodiče jsou Japonci.',
    'Moja żona jest Włoszką, ale jej rodzice są Japończykami.',
    'Karım İtalyan ama anne babası Japon.',
    'Meine Frau ist Italienerin, aber ihre Eltern sind Japaner.',
    '妻はイタリア人ですが、両親は日本人です。'
  ),
  tr(
    'La domenica pranziamo dai suoceri.',
    'On Sundays we have lunch at my in-laws’.',
    'Los domingos comemos en casa de los suegros.',
    'Le dimanche, nous déjeunons chez les beaux-parents.',
    'V neděli obědváme u tchána a tchyně.',
    'W niedzielę jemy obiad u teściów.',
    'Pazar günleri kayınpederimlerde öğle yemeği yiyoruz.',
    'Sonntags essen wir bei den Schwiegereltern zu Mittag.',
    '日曜日は義理の両親の家で昼ご飯を食べます。'
  ),
  tr(
    'Mio cugino è più giovane di me.',
    'My cousin is younger than me.',
    'Mi primo es más joven que yo.',
    'Mon cousin est plus jeune que moi.',
    'Můj bratranec je mladší než já.',
    'Mój kuzyn jest młodszy ode mnie.',
    'Kuzenim benden daha genç.',
    'Mein Cousin ist jünger als ich.',
    'いとこは私より若いです。'
  ),
  tr(
    'Lo zio Franco è il fratello di mio padre.',
    'Uncle Franco is my father’s brother.',
    'El tío Franco es el hermano de mi padre.',
    'L’oncle Franco est le frère de mon père.',
    'Strýc Franco je bratr mého otce.',
    'Wujek Franco jest bratem mojego ojca.',
    'Franco amca babamın erkek kardeşi.',
    'Onkel Franco ist der Bruder meines Vaters.',
    'フランコおじさんは父の兄弟です。'
  ),
  tr(
    'La nonna vuole bene a tutti i suoi nipoti.',
    'Grandma loves all her grandchildren.',
    'La abuela quiere a todos sus nietos.',
    'Grand-mère aime tous ses petits-enfants.',
    'Babička má ráda všechna svá vnoučata.',
    'Babcia kocha wszystkie swoje wnuki.',
    'Büyükanne bütün torunlarını seviyor.',
    'Oma hat alle ihre Enkelkinder lieb.',
    'おばあさんは孫たちみんなが大好きです。'
  ),
];

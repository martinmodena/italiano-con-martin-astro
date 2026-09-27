// Le parole della lezione di vocabolario «Le emozioni» (2026-09-27).
//
// 34 aggettivi per dire come ci si sente, in due gruppi: le emozioni piacevoli (16: felice, contento,
// emozionato, innamorato, orgoglioso, sollevato, commosso...) e quelle spiacevoli (18: triste, arrabbiato,
// preoccupato, spaventato, deluso, offeso, imbarazzato...). Ogni scheda ha le due forme (contento / contenta),
// e «Riconosci la parola» accetta anche il nome dell'emozione (la felicita', la paura, la rabbia...), che
// compare nelle frasi d'esempio. Qualche aggettivo c'e' anche in «La personalita' degli animali»: la' serve a
// descrivere il carattere, qui lo stato d'animo di una persona (la nota spiega la differenza).
//
// Struttura di ogni voce: come jobs-vocabulary.mjs. `alt` e' la stringa «(ignorato)|en|es|fr|cs|pl|tr|de|ja».
//
// Foto REALISTICHE con gpt-image-1-mini a qualita' `low`, `generate-animal-images.mjs --set emozioni`, stile
// `EMOTION_STYLE`: un volto e le spalle, espressione chiara, uomini e donne di eta' diverse a turno.

import { tr } from './traits-base.mjs';

const LANG_ORDER = ['it', 'en', 'es', 'fr', 'cs', 'pl', 'tr', 'de', 'ja'];

/** Tutte le forme («contento / contenta») piu' i nomi dell'emozione e i sinonimi (`extra`). */
const answersFor = (word, extra) => [...new Set([...word.split(' / '), ...extra])];

const emo = (slug, word, examples, alts, subject, extra = []) => {
  const alt = alts.split('|');
  if (alt.length !== LANG_ORDER.length) throw new Error(`«${slug}»: alt deve avere 9 campi`);
  alt[0] = word.charAt(0).toUpperCase() + word.slice(1);
  if (examples.length !== 3) throw new Error(`«${slug}»: servono tre frasi d'esempio`);
  return {
    image: `emozioni/${slug}`,
    slug,
    word,
    bare: word.split(' / ')[0],
    examples,
    answers: answersFor(word, extra),
    subject,
    alt: Object.fromEntries(LANG_ORDER.map((lang, i) => [lang, alt[i]])),
  };
};

export const emotionVocabulary = [
  // --- le emozioni piacevoli -----------------------------------------------------------------
  emo(
    'felice',
    'felice',
    ['Sono felice di vederti!', 'I bambini sono felici: domani non c’è scuola.', 'La felicità è nelle piccole cose.'],
    '|Happy|Feliz|Heureux, heureuse|Šťastný, šťastná|Szczęśliwy, szczęśliwa|Mutlu|Glücklich|幸せな、うれしい',
    'a young woman of about 25 laughing with a big genuine smile, eyes shining, arms open',
    ['felici', 'felicità', 'la felicità', 'gioia', 'la gioia']
  ),
  emo(
    'contento',
    'contento / contenta',
    ['Sei contento del nuovo lavoro?', 'Mia madre è contenta: ho preso un bel voto.', 'Sono contenta che sei venuto.'],
    '|Pleased, glad|Contento, contenta|Content, contente|Spokojený, spokojená, rád|Zadowolony, zadowolona|Memnun|Zufrieden, froh|満足した、うれしい',
    'a middle-aged man with a calm satisfied smile, giving a thumbs up',
    ['contenti', 'contente']
  ),
  emo(
    'allegro',
    'allegro / allegra',
    ['Mia nonna è sempre allegra.', 'Oggi sei molto allegro: cosa è successo?', 'È una canzone allegra.'],
    '|Cheerful, merry|Alegre|Joyeux, joyeuse, gai|Veselý, veselá|Wesoły, wesoła|Neşeli|Fröhlich, lustig|陽気な、明るい',
    'an elderly woman of about 70 laughing cheerfully and dancing a little on the spot',
    ['allegri', 'allegria', 'l’allegria']
  ),
  emo(
    'entusiasta',
    'entusiasta',
    [
      'Sono entusiasta del viaggio in Sicilia!',
      'Gli studenti sono entusiasti del nuovo corso.',
      'Luca parla con entusiasmo del suo progetto.',
    ],
    '|Enthusiastic|Entusiasmado, entusiasmada|Enthousiaste|Nadšený, nadšená|Entuzjastyczny, zachwycony|Hevesli, coşkulu|Begeistert|熱心な、わくわくした',
    'a young man jumping in the air with both fists raised, mouth open in a joyful shout',
    ['entusiasti', 'entusiasmo', 'l’entusiasmo']
  ),
  emo(
    'emozionato',
    'emozionato / emozionata',
    [
      'Sono emozionata: domani mi sposo!',
      'Prima dell’esame ero molto emozionato.',
      'Che emozione vederti dopo tanti anni!',
    ],
    '|Excited, moved (before an important moment)|Emocionado, emocionada|Ému, émue, excité (avant un grand moment)|Vzrušený, rozrušený (před důležitou chvílí)|Podekscytowany, przejęty|Heyecanlı|Aufgeregt (vor einem wichtigen Moment)|（大事な時を前に）ドキドキした、感激した',
    'a young woman holding a plane ticket with both hands close to her chest, big excited smile, eyes wide',
    ['emozionati', 'emozione', 'l’emozione']
  ),
  emo(
    'innamorato',
    'innamorato / innamorata',
    ['Marco è innamorato di Giulia.', 'Si vede che sei innamorata!', 'L’amore rende tutti un po’ matti.'],
    '|In love|Enamorado, enamorada|Amoureux, amoureuse|Zamilovaný, zamilovaná|Zakochany, zakochana|Âşık|Verliebt|恋している',
    'a young man with a dreamy smile holding a red rose against his chest, looking up',
    ['innamorati', 'amore', 'l’amore']
  ),
  emo(
    'orgoglioso',
    'orgoglioso / orgogliosa',
    ['Sono orgoglioso di te!', 'La mamma è orgogliosa del figlio laureato.', 'È una cosa di cui vado orgoglioso.'],
    '|Proud|Orgulloso, orgullosa|Fier, fière|Hrdý, hrdá|Dumny, dumna|Gururlu|Stolz|誇らしい',
    'a middle-aged woman smiling proudly, chin up, holding a framed graduation photo against her chest',
    ['orgogliosi', 'orgoglio', 'l’orgoglio']
  ),
  emo(
    'soddisfatto',
    'soddisfatto / soddisfatta',
    [
      'Sei soddisfatto del risultato?',
      'Il cliente è soddisfatto.',
      'Dopo una giornata di lavoro mi sento soddisfatta.',
    ],
    '|Satisfied|Satisfecho, satisfecha|Satisfait, satisfaite|Spokojený, spokojená|Zadowolony, usatysfakcjonowany|Tatmin olmuş|Zufrieden|満足した',
    'a man of about 40 leaning back with his hands behind his head and a satisfied smile, eyes half closed',
    ['soddisfatti', 'soddisfazione', 'la soddisfazione']
  ),
  emo(
    'rilassato',
    'rilassato / rilassata',
    ['In vacanza sono sempre rilassata.', 'Dopo lo yoga mi sento rilassato.', 'È un posto rilassante.'],
    '|Relaxed|Relajado, relajada|Détendu, détendue|Uvolněný, uvolněná|Zrelaksowany, zrelaksowana|Rahat, gevşemiş|Entspannt|リラックスした',
    'a young woman with closed eyes and a peaceful smile, headphones around her neck, shoulders relaxed',
    ['rilassati', 'relax', 'il relax']
  ),
  emo(
    'calmo',
    'calmo / calma',
    ['Stai calmo, non è successo niente.', 'Il mare oggi è calmo.', 'Mantieni la calma!'],
    '|Calm|Tranquilo, tranquila, calmado|Calme|Klidný, klidná|Spokojny, spokojna|Sakin|Ruhig|落ち着いた',
    'an elderly man with a serene neutral expression, eyes gently closed, hands together in front of his chest',
    ['calmi', 'calma', 'la calma', 'tranquillo', 'tranquilla']
  ),
  emo(
    'sollevato',
    'sollevato / sollevata',
    ['Il test è negativo: sono sollevata.', 'Mi sento sollevato dopo averti parlato.', 'Che sollievo!'],
    '|Relieved|Aliviado, aliviada|Soulagé, soulagée|Ulevený, ulevená|Ulżony, odczuwający ulgę|Rahatlamış|Erleichtert|ほっとした',
    'a young man breathing out with relief, hand on his chest, eyes closed, a small smile',
    ['sollevati', 'sollievo', 'il sollievo']
  ),
  emo(
    'grato',
    'grato / grata',
    ['Ti sono grata per il tuo aiuto.', 'Siamo grati a tutti i volontari.', 'Grazie, ti sono molto grato!'],
    '|Grateful|Agradecido, agradecida|Reconnaissant, reconnaissante|Vděčný, vděčná|Wdzięczny, wdzięczna|Minnettar|Dankbar|感謝している',
    'a middle-aged woman with a warm smile, both hands pressed together in front of her chest in thanks',
    ['grati', 'gratitudine', 'la gratitudine', 'riconoscente']
  ),
  emo(
    'divertito',
    'divertito / divertita',
    ['Mi guarda con un’aria divertita.', 'I bambini sono divertiti dal pagliaccio.', 'Che divertimento!'],
    '|Amused|Divertido, divertida (que se divierte)|Amusé, amusée|Pobavený, pobavená|Rozbawiony, rozbawiona|Eğlenmiş|Amüsiert|面白がっている',
    'a boy of about ten laughing hard, holding his belly, head tilted back',
    ['divertiti', 'divertimento', 'il divertimento']
  ),
  emo(
    'commosso',
    'commosso / commossa',
    [
      'Al matrimonio della figlia il papà era commosso.',
      'Mi sono commossa guardando il film.',
      'Ha pianto per la commozione.',
    ],
    '|Moved, touched|Conmovido, conmovida|Ému, émue|Dojatý, dojatá|Wzruszony, wzruszona|Duygulanmış|Gerührt|感動した、胸を打たれた',
    'an elderly man with tears in his eyes and a gentle smile, wiping a tear with his finger',
    ['commossi', 'commozione', 'la commozione']
  ),
  emo(
    'sorpreso',
    'sorpreso / sorpresa',
    ['Sono sorpreso di vederti qui!', 'Che sorpresa!', 'Era sorpresa: nessuno le aveva detto della festa.'],
    '|Surprised|Sorprendido, sorprendida|Surpris, surprise|Překvapený, překvapená|Zaskoczony, zaskoczona|Şaşırmış|Überrascht|驚いた',
    'a young woman with eyes wide open and mouth open in surprise, both hands on her cheeks',
    ['sorpresi', 'stupito', 'stupita']
  ),
  emo(
    'curioso',
    'curioso / curiosa',
    ['Sono curiosa di sapere com’è finita.', 'I bambini sono curiosi di tutto.', 'Per curiosità: quanti anni hai?'],
    '|Curious|Curioso, curiosa|Curieux, curieuse|Zvědavý, zvědavá|Ciekawy, ciekawa, zaciekawiony|Meraklı|Neugierig|好奇心のある、知りたがる',
    'a girl of about eight peeking over the top of a big cardboard box with wide curious eyes',
    ['curiosi', 'curiosità', 'la curiosità']
  ),

  // --- le emozioni spiacevoli ----------------------------------------------------------------
  emo(
    'triste',
    'triste',
    ['Perché sei triste?', 'È una storia triste.', 'La tristezza passa, vedrai.'],
    '|Sad|Triste|Triste|Smutný, smutná|Smutny, smutna|Üzgün|Traurig|悲しい',
    'a man of about 35 with a sad face, eyes looking down, mouth turned down, shoulders slumped',
    ['tristi', 'tristezza', 'la tristezza']
  ),
  emo(
    'arrabbiato',
    'arrabbiato / arrabbiata',
    ['Sei ancora arrabbiata con me?', 'Il capo è arrabbiato perché siamo in ritardo.', 'Ha urlato per la rabbia.'],
    '|Angry|Enfadado, enfadada|En colère, fâché|Naštvaný, naštvaná|Zły, zła, rozgniewany|Kızgın|Wütend, böse|怒っている',
    'a middle-aged woman with an angry face, frowning deeply, arms crossed, lips pressed tight',
    ['arrabbiati', 'rabbia', 'la rabbia', 'furioso', 'furiosa']
  ),
  emo(
    'nervoso',
    'nervoso / nervosa',
    [
      'Prima di parlare in pubblico sono sempre nervoso.',
      'Non essere nervosa, andrà tutto bene.',
      'Il traffico mi rende nervoso.',
    ],
    '|Nervous; irritable|Nervioso, nerviosa|Nerveux, nerveuse|Nervózní|Zdenerwowany, nerwowy|Gergin, sinirli|Nervös, gereizt|緊張した、いらいらした',
    'a young man biting his nails, eyes darting to the side, tense shoulders',
    ['nervosi', 'agitato', 'agitata']
  ),
  emo(
    'preoccupato',
    'preoccupato / preoccupata',
    ['Sono preoccupata per mio figlio.', 'Perché sei così preoccupato?', 'Non ti preoccupare!'],
    '|Worried|Preocupado, preocupada|Inquiet, inquiète, soucieux|Ustaraný, ustaraná|Zmartwiony, zmartwiona|Endişeli|Besorgt|心配している',
    'a mother of about 40 holding a phone, one hand on her forehead, eyebrows raised with worry',
    ['preoccupati', 'preoccupazione', 'la preoccupazione', 'ansioso', 'ansiosa', 'ansia', 'l’ansia']
  ),
  emo(
    'spaventato',
    'spaventato / spaventata',
    ['Il bambino è spaventato dal temporale.', 'Ho paura dei ragni.', 'Mi hai spaventato!'],
    '|Scared, frightened|Asustado, asustada|Effrayé, effrayée|Vystrašený, vystrašená|Przestraszony, przestraszona|Korkmuş|Erschrocken, verängstigt|怖がっている、おびえた',
    'a young woman with a frightened face, eyes wide open, hands raised in front of her, leaning back',
    ['spaventati', 'paura', 'la paura', 'impaurito', 'impaurita']
  ),
  emo(
    'stressato',
    'stressato / stressata',
    [
      'Questa settimana sono molto stressata.',
      'Il lavoro mi rende stressato.',
      'Ho bisogno di una vacanza: troppo stress!',
    ],
    '|Stressed|Estresado, estresada|Stressé, stressée|Vystresovaný, vystresovaná|Zestresowany, zestresowana|Stresli|Gestresst|ストレスがたまった',
    'a man of about 40 in a shirt and tie holding his head with both hands, eyes squeezed shut, papers flying around him',
    ['stressati', 'stress', 'lo stress']
  ),
  emo(
    'deluso',
    'deluso / delusa',
    ['Sono deluso: la squadra ha perso.', 'Mi aspettavo di più: sono delusa.', 'Che delusione!'],
    '|Disappointed|Decepcionado, decepcionada|Déçu, déçue|Zklamaný, zklamaná|Rozczarowany, rozczarowana|Hayal kırıklığına uğramış|Enttäuscht|がっかりした',
    'a teenage boy in a football shirt with a disappointed face, sighing, looking down, hands on his hips',
    ['delusi', 'delusione', 'la delusione']
  ),
  emo(
    'geloso',
    'geloso / gelosa',
    ['Il mio ragazzo è molto geloso.', 'Il fratellino è geloso della sorella nuova.', 'La gelosia rovina le coppie.'],
    '|Jealous|Celoso, celosa|Jaloux, jalouse|Žárlivý, žárlivá|Zazdrosny, zazdrosna|Kıskanç|Eifersüchtig|嫉妬している、やきもちを焼く',
    'a young woman with a jealous sideways glance, narrowed eyes and pursed lips, arms crossed',
    ['gelosi', 'gelosia', 'la gelosia', 'invidioso', 'invidiosa', 'invidia']
  ),
  emo(
    'offeso',
    'offeso / offesa',
    ['È offesa perché non l’hai invitata.', 'Scusa, non volevo offenderti.', 'Sei offeso con me?'],
    '|Offended, hurt|Ofendido, ofendida|Vexé, vexée, offensé|Uražený, uražená|Obrażony, obrażona|Kırılmış, gücenmiş|Beleidigt, gekränkt|気を悪くした、傷ついた',
    'a man of about 30 turning his head away with a hurt, sulky expression, chin up, arms crossed',
    ['offesi', 'offesa']
  ),
  emo(
    'imbarazzato',
    'imbarazzato / imbarazzata',
    ['Sono imbarazzata: ho sbagliato nome!', 'Era imbarazzato davanti a tutti.', 'Che imbarazzo!'],
    '|Embarrassed|Avergonzado, avergonzada, incómodo|Gêné, gênée, embarrassé|V rozpacích, zahanbený|Zawstydzony, zażenowany|Utanmış, mahcup|Verlegen, peinlich berührt|恥ずかしい、気まずい',
    'a young man with red cheeks and an awkward smile, rubbing the back of his neck, looking away',
    ['imbarazzati', 'imbarazzo', 'l’imbarazzo', 'vergogna', 'la vergogna']
  ),
  emo(
    'annoiato',
    'annoiato / annoiata',
    ['I ragazzi sono annoiati: non c’è niente da fare.', 'Sono annoiata da questo film.', 'Che noia!'],
    '|Bored|Aburrido, aburrida|Qui s’ennuie|Znuděný, znuděná|Znudzony, znudzona|Sıkılmış|Gelangweilt|退屈した',
    'a teenage girl resting her chin on her hand with a bored face, eyes half closed, sighing',
    ['annoiati', 'noia', 'la noia']
  ),
  emo(
    'stanco',
    'stanco / stanca',
    ['Sono stanco morto!', 'Dopo il viaggio i bambini sono stanchi.', 'La stanchezza si sente alla sera.'],
    '|Tired|Cansado, cansada|Fatigué, fatiguée|Unavený, unavená|Zmęczony, zmęczona|Yorgun|Müde|疲れた',
    'a woman of about 35 yawning with her hand over her mouth, dark circles under her eyes, hair a bit messy',
    ['stanchi', 'stanche', 'stanchezza', 'la stanchezza']
  ),
  emo(
    'confuso',
    'confuso / confusa',
    ['Scusa, sono un po’ confusa.', 'Le istruzioni mi hanno confuso.', 'C’è molta confusione.'],
    '|Confused|Confundido, confundida|Confus, confuse, perplexe|Zmatený, zmatená|Zdezorientowany, skołowany|Kafası karışmış|Verwirrt|混乱した、戸惑った',
    'a middle-aged man scratching his head with a puzzled look, one eyebrow raised, shrugging',
    ['confusi', 'confusione', 'la confusione', 'perplesso', 'perplessa']
  ),
  emo(
    'disgustato',
    'disgustato / disgustata',
    ['Sono disgustato da questo odore.', 'Che schifo!', 'Ha fatto una faccia disgustata.'],
    '|Disgusted|Asqueado, asqueada|Dégoûté, dégoûtée|Znechucený, znechucená|Zdegustowany, obrzydzony|İğrenmiş|Angewidert|うんざりした、気持ち悪い',
    'a young woman with a disgusted face, nose wrinkled, tongue slightly out, pushing away an old smelly sock',
    ['disgustati', 'disgusto', 'il disgusto', 'schifo']
  ),
  emo(
    'solo',
    'solo / sola',
    ['Da quando è morto il marito, si sente sola.', 'Vivo da solo.', 'La solitudine a volte fa bene.'],
    '|Lonely; alone|Solo, sola|Seul, seule|Osamělý, sám|Samotny, samotna, sam|Yalnız|Einsam, allein|さびしい、ひとりの',
    'an elderly man sitting alone on a bench, looking sad and lost in thought, hands clasped',
    ['soli', 'sole', 'solitudine', 'la solitudine']
  ),
  emo(
    'timido',
    'timido / timida',
    ['Da piccolo ero molto timido.', 'È timida: non parla con chi non conosce.', 'La timidezza si può vincere.'],
    '|Shy|Tímido, tímida|Timide|Plachý, plachá, stydlivý|Nieśmiały, nieśmiała|Utangaç|Schüchtern|恥ずかしがりの',
    'a little girl of about six hiding half behind her mother’s leg, peeking out shyly with a small smile',
    ['timidi', 'timidezza', 'la timidezza']
  ),
  emo(
    'disperato',
    'disperato / disperata',
    ['Ha perso il lavoro ed è disperato.', 'Non essere disperata: una soluzione c’è.', 'Piangeva per la disperazione.'],
    '|Desperate, in despair|Desesperado, desesperada|Désespéré, désespérée|Zoufalý, zoufalá|Zrozpaczony, zrozpaczona|Çaresiz, umutsuz|Verzweifelt|絶望した',
    'a young man sitting on the floor with his head in his hands, crying, in despair',
    ['disperati', 'disperazione', 'la disperazione']
  ),
  emo(
    'impaziente',
    'impaziente',
    [
      'Sono impaziente di partire!',
      'Non essere impaziente: arriva tra poco.',
      'I bambini aspettano il Natale con impazienza.',
    ],
    '|Impatient|Impaciente|Impatient, impatiente|Netrpělivý, netrpělivá|Niecierpliwy, niecierpliwa|Sabırsız|Ungeduldig|待ちきれない、いらいらした',
    'a woman of about 30 tapping her foot and looking at her wristwatch with an impatient frown',
    ['impazienti', 'impazienza', 'l’impazienza']
  ),
];

/** L'esempio delle istruzioni di «Riconosci la parola». */
export const emotionExampleWord = { bare: 'felicità', withArticle: 'la felicità' };

export const emotionTranslationExercises = [
  tr(
    'Come stai? Sono un po’ stanco, ma contento.',
    'How are you? I’m a bit tired, but happy.',
    '¿Cómo estás? Estoy un poco cansado, pero contento.',
    'Comment ça va ? Je suis un peu fatigué, mais content.',
    'Jak se máš? Jsem trochu unavený, ale spokojený.',
    'Jak się masz? Jestem trochę zmęczony, ale zadowolony.',
    'Nasılsın? Biraz yorgunum ama memnunum.',
    'Wie geht’s? Ich bin ein bisschen müde, aber zufrieden.',
    '元気？ちょっと疲れているけど、満足しているよ。'
  ),
  tr(
    'Ho paura del buio.',
    'I’m afraid of the dark.',
    'Tengo miedo a la oscuridad.',
    'J’ai peur du noir.',
    'Bojím se tmy.',
    'Boję się ciemności.',
    'Karanlıktan korkuyorum.',
    'Ich habe Angst vor der Dunkelheit.',
    '暗闇が怖いです。'
  ),
  tr(
    'Perché sei arrabbiata con me?',
    'Why are you angry with me?',
    '¿Por qué estás enfadada conmigo?',
    'Pourquoi tu es fâchée contre moi ?',
    'Proč se na mě zlobíš?',
    'Dlaczego jesteś na mnie zła?',
    'Neden bana kızgınsın?',
    'Warum bist du wütend auf mich?',
    'どうして私に怒っているの？'
  ),
  tr(
    'Sono emozionato: domani comincio il nuovo lavoro.',
    'I’m excited: tomorrow I start my new job.',
    'Estoy emocionado: mañana empiezo el nuevo trabajo.',
    'Je suis tout excité : demain je commence mon nouveau travail.',
    'Jsem nervózní a těším se: zítra začínám v nové práci.',
    'Jestem podekscytowany: jutro zaczynam nową pracę.',
    'Heyecanlıyım: yarın yeni işime başlıyorum.',
    'Ich bin aufgeregt: Morgen fange ich die neue Arbeit an.',
    'ドキドキしています。明日から新しい仕事です。'
  ),
  tr(
    'Non ti preoccupare, andrà tutto bene.',
    'Don’t worry, everything will be fine.',
    'No te preocupes, todo irá bien.',
    'Ne t’inquiète pas, tout ira bien.',
    'Neboj se, všechno dobře dopadne.',
    'Nie martw się, wszystko będzie dobrze.',
    'Merak etme, her şey yoluna girecek.',
    'Mach dir keine Sorgen, alles wird gut.',
    '心配しないで、きっと大丈夫だよ。'
  ),
  tr(
    'Siamo molto orgogliosi di nostra figlia.',
    'We’re very proud of our daughter.',
    'Estamos muy orgullosos de nuestra hija.',
    'Nous sommes très fiers de notre fille.',
    'Jsme na naši dceru velmi hrdí.',
    'Jesteśmy bardzo dumni z naszej córki.',
    'Kızımızla çok gurur duyuyoruz.',
    'Wir sind sehr stolz auf unsere Tochter.',
    '私たちは娘をとても誇りに思っています。'
  ),
  tr(
    'Il film era bello ma un po’ triste.',
    'The film was good but a bit sad.',
    'La película era bonita pero un poco triste.',
    'Le film était beau, mais un peu triste.',
    'Film byl hezký, ale trochu smutný.',
    'Film był ładny, ale trochę smutny.',
    'Film güzeldi ama biraz hüzünlüydü.',
    'Der Film war schön, aber ein bisschen traurig.',
    'その映画はよかったけど、少し悲しかった。'
  ),
  tr(
    'Che sorpresa! Non ti aspettavo.',
    'What a surprise! I wasn’t expecting you.',
    '¡Qué sorpresa! No te esperaba.',
    'Quelle surprise ! Je ne t’attendais pas.',
    'To je překvapení! Nečekal jsem tě.',
    'Co za niespodzianka! Nie spodziewałem się ciebie.',
    'Ne sürpriz! Seni beklemiyordum.',
    'Was für eine Überraschung! Ich habe dich nicht erwartet.',
    'びっくりした！来るとは思っていなかったよ。'
  ),
  tr(
    'Mi vergogno: ho dimenticato il tuo compleanno.',
    'I’m ashamed: I forgot your birthday.',
    'Me da vergüenza: olvidé tu cumpleaños.',
    'J’ai honte : j’ai oublié ton anniversaire.',
    'Stydím se: zapomněl jsem na tvoje narozeniny.',
    'Wstyd mi: zapomniałem o twoich urodzinach.',
    'Utanıyorum: doğum gününü unuttum.',
    'Ich schäme mich: Ich habe deinen Geburtstag vergessen.',
    '恥ずかしい。あなたの誕生日を忘れていました。'
  ),
  tr(
    'Sono impaziente di vederti!',
    'I can’t wait to see you!',
    '¡Estoy impaciente por verte!',
    'J’ai hâte de te voir !',
    'Nemůžu se dočkat, až tě uvidím!',
    'Nie mogę się doczekać, aż cię zobaczę!',
    'Seni görmek için sabırsızlanıyorum!',
    'Ich kann es kaum erwarten, dich zu sehen!',
    'あなたに会うのが待ちきれない！'
  ),
];

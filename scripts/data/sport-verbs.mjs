// I verbi della lezione «I verbi dello sport» (2026-09-28).
//
// Seguito di «Lo sport», chiesto da Martin: quattro gruppi, l'allenamento (10: allenarsi, riscaldarsi, fare
// stretching, fare pesi, fare le flessioni, andare in palestra, allenare...), il gioco con la palla (11: giocare
// a calcio, passare la palla, dribblare, tirare in porta, segnare, parare, fare canestro, schiacciare...), altri
// sport (5: andare a cavallo, remare, fare surf, tirare con l'arco, fare una capriola) e la gara (11: gareggiare,
// tifare, arbitrare, fare fallo, ammonire, arrivare primo, tagliare il traguardo, battere il record, premiare...).
// Non ripete correre, saltare, nuotare, tuffarsi, lanciare, giocare, vincere («I verbi degli animali»), calciare,
// sudare («I verbi del corpo»), pedalare («I verbi della città»), sciare, pattinare, scalare, fare snowboard,
// farsi male («I verbi della montagna»).
//
// Esercizio come «I verbi della città» (`photoRows`). Le coppie che una foto sola non distingue (allenarsi/fare
// pesi, tirare in porta/segnare/parare, arrivare primo/tagliare il traguardo, arbitrare/ammonire) si accettano a
// vicenda.
//
// Struttura di ogni voce: come city-verbs.mjs. Foto REALISTICHE con gpt-image-1-mini a qualita' `low`,
// `generate-animal-images.mjs --set verbi-sport`, stile PEOPLE_STYLE.

import { tr } from './traits-base.mjs';

const LANG_ORDER = ['it', 'en', 'es', 'fr', 'cs', 'pl', 'tr', 'de', 'ja'];

const sv = (slug, word, def, glosses, examples, scene, fits = []) => {
  if (glosses.length !== 8) throw new Error(`«${slug}»: servono 8 traduzioni`);
  if (examples.length !== 3) throw new Error(`«${slug}»: servono tre frasi d'esempio`);
  return {
    image: `verbi-sport/${slug}`,
    slug,
    word,
    bare: word,
    examples,
    subject: scene,
    matches: [slug, ...fits],
    never: [],
    noMatch: false,
    gloss: Object.fromEntries(LANG_ORDER.map((lang, i) => [lang, i === 0 ? def : glosses[i - 1]])),
  };
};

export const sportVerbs = [
  // --- l'allenamento --------------------------------------------------------------------------
  sv(
    'allenarsi',
    'allenarsi',
    'Fare esercizio con regolarità per migliorare in uno sport.',
    [
      'to train, to work out',
      'entrenar(se)',
      's’entraîner',
      'trénovat',
      'trenować',
      'antrenman yapmak',
      'trainieren',
      '練習する、トレーニングする',
    ],
    ['Mi alleno tre volte alla settimana.', 'La squadra si allena ogni martedì.', 'Ti alleni per la maratona?'],
    'a young woman in sportswear skipping with a jump rope, both feet in the air, a water bottle on the floor next to her',
    ['riscaldarsi', 'andare-in-palestra']
  ),
  sv(
    'riscaldarsi',
    'riscaldarsi',
    'Fare movimenti leggeri prima dello sport, per preparare i muscoli.',
    [
      'to warm up',
      'calentar',
      's’échauffer',
      'rozcvičit se',
      'rozgrzewać się',
      'ısınmak',
      'sich aufwärmen',
      'ウォーミングアップする',
    ],
    [
      'Prima di correre mi riscaldo per dieci minuti.',
      'Riscaldatevi bene prima della partita!',
      'Se non ti riscaldi, rischi di farti male.',
    ],
    'a young man in running clothes on a track doing arm circles to warm up, jogging on the spot, knees slightly raised',
    ['fare-stretching', 'allenarsi']
  ),
  sv(
    'fare-stretching',
    'fare stretching',
    'Allungare i muscoli con esercizi lenti.',
    [
      'to stretch',
      'hacer estiramientos',
      'faire des étirements',
      'protahovat se',
      'rozciągać się',
      'esneme hareketleri yapmak',
      'sich dehnen',
      'ストレッチをする',
    ],
    [
      'Dopo la corsa faccio sempre stretching.',
      'Fare stretching la mattina mi rilassa.',
      'L’allenatore ci fa fare stretching alla fine.',
    ],
    'a woman in leggings sitting on a yoga mat with one leg stretched out, reaching forward to touch her toes',
    ['riscaldarsi', 'fare-yoga']
  ),
  sv(
    'fare-pesi',
    'fare pesi',
    'Sollevare pesi per rinforzare i muscoli.',
    [
      'to lift weights',
      'hacer pesas',
      'faire de la musculation, soulever des poids',
      'posilovat, zvedat činky',
      'podnosić ciężary',
      'ağırlık çalışmak',
      'Gewichte heben',
      'ウエイトトレーニングをする',
    ],
    [
      'In palestra faccio pesi e corro sul tapis roulant.',
      'Mio fratello fa pesi tutti i giorni.',
      'Non fare pesi troppo pesanti all’inizio.',
    ],
    'a muscular man standing and lifting a dumbbell in each hand, arms bent, a weight bench next to him',
    ['allenarsi', 'andare-in-palestra']
  ),
  sv(
    'fare-le-flessioni',
    'fare le flessioni',
    'Piegare e stendere le braccia sul pavimento, con il corpo dritto.',
    [
      'to do push-ups',
      'hacer flexiones',
      'faire des pompes',
      'dělat kliky',
      'robić pompki',
      'şınav çekmek',
      'Liegestütze machen',
      '腕立て伏せをする',
    ],
    [
      'Ogni mattina faccio venti flessioni.',
      'Quante flessioni riesci a fare?',
      'Il soldato fa le flessioni in cortile.',
    ],
    'a young man doing a push-up on a mat, body straight, seen from the side',
    ['allenarsi']
  ),
  sv(
    'fare-gli-addominali',
    'fare gli addominali',
    'Fare esercizi per i muscoli della pancia.',
    [
      'to do sit-ups, to do crunches',
      'hacer abdominales',
      'faire des abdos',
      'posilovat břicho, dělat sedy-lehy',
      'robić brzuszki',
      'mekik çekmek',
      'Sit-ups machen, Bauchmuskeln trainieren',
      '腹筋をする',
    ],
    [
      'Faccio gli addominali prima di dormire.',
      'Fare gli addominali è faticoso!',
      'Oggi abbiamo fatto gli addominali per mezz’ora.',
    ],
    'a woman lying on her back on a mat with knees bent and hands behind her head, lifting her shoulders to do a crunch',
    ['allenarsi']
  ),
  sv(
    'fare-jogging',
    'fare jogging',
    'Correre piano, per tenersi in forma.',
    [
      'to go jogging',
      'hacer footing, salir a correr',
      'faire du jogging',
      'běhat (pro kondici)',
      'biegać, uprawiać jogging',
      'koşuya çıkmak',
      'joggen',
      'ジョギングをする',
    ],
    [
      'La domenica mattina faccio jogging nel parco.',
      'Vieni a fare jogging con me?',
      'Mio padre fa jogging da trent’anni.',
    ],
    'a smiling middle-aged man in a t-shirt, shorts and running shoes jogging along a path, earphones in his ears',
    ['allenarsi']
  ),
  sv(
    'andare-in-palestra',
    'andare in palestra',
    'Andare nel posto dove ci si allena con attrezzi e corsi.',
    [
      'to go to the gym',
      'ir al gimnasio',
      'aller à la salle de sport',
      'chodit do posilovny',
      'chodzić na siłownię',
      'spor salonuna gitmek',
      'ins Fitnessstudio gehen',
      'ジムに行く',
    ],
    ['Vado in palestra dopo il lavoro.', 'Da quando vai in palestra?', 'Sara va in palestra con un’amica.'],
    'a young woman in sportswear with a sports bag on her shoulder and a towel round her neck walking towards a row of treadmills and exercise machines',
    ['allenarsi', 'fare-pesi']
  ),
  sv(
    'fare-yoga',
    'fare yoga',
    'Fare lo yoga: posizioni del corpo e respirazione.',
    [
      'to do yoga',
      'hacer yoga',
      'faire du yoga',
      'cvičit jógu',
      'ćwiczyć jogę',
      'yoga yapmak',
      'Yoga machen',
      'ヨガをする',
    ],
    ['Faccio yoga per rilassarmi.', 'Mia nonna fa yoga due volte alla settimana.', 'Abbiamo fatto yoga in spiaggia.'],
    'a calm woman standing on one leg on a yoga mat in the tree pose, hands joined above her head',
    ['fare-stretching']
  ),
  sv(
    'allenare',
    'allenare',
    'Guidare gli allenamenti di una persona o di una squadra.',
    [
      'to coach, to train (someone)',
      'entrenar (a alguien)',
      'entraîner (quelqu’un)',
      'trénovat (někoho)',
      'trenować (kogoś)',
      'çalıştırmak (takım, sporcu)',
      '(jemanden) trainieren',
      '指導する、コーチをする',
    ],
    ['Mio zio allena una squadra di bambini.', 'Chi allena la nazionale?', 'Luca allena i ragazzi il sabato mattina.'],
    'a coach with a whistle around his neck and a clipboard explaining something to three children in football kits on a pitch',
    ['allenarsi']
  ),

  // --- il gioco con la palla ------------------------------------------------------------------
  sv(
    'giocare-a-calcio',
    'giocare a calcio',
    'Giocare lo sport in cui due squadre calciano il pallone verso la porta.',
    [
      'to play football (soccer)',
      'jugar al fútbol',
      'jouer au foot',
      'hrát fotbal',
      'grać w piłkę nożną',
      'futbol oynamak',
      'Fußball spielen',
      'サッカーをする',
    ],
    [
      'I ragazzi giocano a calcio nel cortile.',
      'Giochi a calcio in una squadra?',
      'Da piccolo giocavo a calcio tutti i pomeriggi.',
    ],
    'three children playing football on a small patch of grass, one running with the ball at his feet',
    ['passare-la-palla', 'dribblare']
  ),
  sv(
    'giocare-a-tennis',
    'giocare a tennis',
    'Giocare lo sport in cui si colpisce una pallina con la racchetta sopra una rete.',
    [
      'to play tennis',
      'jugar al tenis',
      'jouer au tennis',
      'hrát tenis',
      'grać w tenisa',
      'tenis oynamak',
      'Tennis spielen',
      'テニスをする',
    ],
    ['Giochiamo a tennis sabato?', 'Mia madre gioca a tennis molto bene.', 'Ho giocato a tennis per due ore.'],
    'a woman in white sportswear hitting a yellow tennis ball with a forehand stroke, racket swinging',
    ['servire']
  ),
  sv(
    'passare-la-palla',
    'passare la palla',
    'Dare la palla a un compagno di squadra.',
    [
      'to pass the ball',
      'pasar el balón',
      'faire une passe, passer le ballon',
      'přihrát míč',
      'podać piłkę',
      'pas vermek',
      'den Ball abgeben, passen',
      'パスする',
    ],
    ['Passa la palla, sono libero!', 'Non passa mai la palla a nessuno.', 'Mi ha passato la palla e ho segnato.'],
    'a football player kicking the ball sideways to a teammate a few metres away, who is waiting with open arms',
    ['giocare-a-calcio']
  ),
  sv(
    'dribblare',
    'dribblare',
    'Superare un avversario tenendo la palla vicina, con finte e piccoli tocchi.',
    [
      'to dribble (past someone)',
      'regatear',
      'dribbler',
      'kličkovat, obejít soupeře',
      'dryblować',
      'çalım atmak',
      'dribbeln',
      'ドリブルで抜く',
    ],
    [
      'Ha dribblato tre giocatori e ha tirato.',
      'Mio figlio dribbla benissimo.',
      'Non dribblare troppo: passa la palla!',
    ],
    'a football player in a red shirt running past a player in a blue shirt, the ball close to his feet',
    ['giocare-a-calcio']
  ),
  sv(
    'tirare-in-porta',
    'tirare in porta',
    'Calciare la palla forte verso la porta per fare gol.',
    [
      'to shoot (at goal)',
      'tirar a puerta, chutar',
      'tirer au but',
      'vystřelit na bránu',
      'strzelić na bramkę',
      'kaleye şut çekmek',
      'aufs Tor schießen',
      'シュートする',
    ],
    ['Ha tirato in porta da lontano.', 'Tira in porta, non aspettare!', 'Abbiamo tirato in porta solo due volte.'],
    'a football player kicking the ball hard towards a goal, the goalkeeper in the goal ready to jump',
    ['segnare', 'parare']
  ),
  sv(
    'segnare',
    'segnare',
    'Fare un gol o un punto.',
    [
      'to score',
      'marcar',
      'marquer (un but)',
      'dát gól, skórovat',
      'strzelić gola, zdobyć punkt',
      'gol atmak',
      'ein Tor schießen, punkten',
      '点を入れる、ゴールを決める',
    ],
    [
      'Chi ha segnato il primo gol?',
      'Marco ha segnato all’ultimo minuto.',
      'Oggi non abbiamo segnato nemmeno un punto.',
    ],
    'a football goal with the ball inside the net behind a diving goalkeeper who missed it, the player who kicked it raising his arms',
    ['tirare-in-porta', 'esultare']
  ),
  sv(
    'parare',
    'parare',
    'Fermare la palla perché non entri in porta.',
    [
      'to save, to stop (a shot)',
      'parar',
      'arrêter (le ballon), faire un arrêt',
      'chytit (střelu)',
      'obronić (strzał)',
      'kurtarmak (kaleci)',
      '(den Ball) halten, parieren',
      '（シュートを）止める、セーブする',
    ],
    ['Il portiere ha parato un rigore.', 'Hai parato benissimo!', 'Non è riuscito a parare il tiro.'],
    'a goalkeeper in gloves diving sideways in the air and catching a football with both hands in front of the goal',
    ['tirare-in-porta']
  ),
  sv(
    'fare-canestro',
    'fare canestro',
    'Fare entrare la palla nel canestro, nella pallacanestro.',
    [
      'to score a basket',
      'encestar',
      'marquer un panier',
      'dát koš',
      'trafić do kosza',
      'basket atmak, sayı yapmak',
      'einen Korb werfen',
      'シュートを決める（バスケットボール）',
    ],
    ['Ha fatto canestro da metà campo!', 'Non riesco mai a fare canestro.', 'Chi fa canestro vince la partita.'],
    'a basketball player jumping and throwing the orange ball into the hoop, the ball just entering the net',
    ['palleggiare']
  ),
  sv(
    'palleggiare',
    'palleggiare',
    'Far rimbalzare o toccare la palla più volte senza perderla.',
    [
      'to bounce the ball, to dribble (in basketball)',
      'botar el balón',
      'dribbler (en faisant rebondir le ballon)',
      'driblovat (s míčem)',
      'kozłować piłkę',
      'top sürmek (basketbolda)',
      'den Ball prellen, dribbeln',
      'ボールをつく、ドリブルする',
    ],
    ['Il bambino palleggia in cortile.', 'Palleggia con la mano sinistra.', 'Sai palleggiare con i piedi?'],
    'a teenage boy in a basketball vest bouncing an orange basketball on the ground with one hand',
    ['fare-canestro']
  ),
  sv(
    'servire',
    'servire',
    'Mettere in gioco la palla all’inizio di un punto, nel tennis o nella pallavolo.',
    [
      'to serve (in tennis, volleyball)',
      'sacar',
      'servir',
      'podávat, servírovat',
      'serwować',
      'servis atmak',
      'aufschlagen',
      'サーブする',
    ],
    ['Adesso servi tu.', 'Ha servito molto forte.', 'Chi serve per primo?'],
    'a tennis player tossing a yellow ball high above her head with one hand, racket raised behind her back, about to serve',
    ['giocare-a-tennis']
  ),
  sv(
    'schiacciare',
    'schiacciare',
    'Colpire la palla forte dall’alto verso il basso, nella pallavolo.',
    [
      'to spike, to smash',
      'rematar',
      'smasher',
      'smečovat',
      'zaatakować, zbić piłkę',
      'smaç vurmak',
      'schmettern',
      'スパイクを打つ',
    ],
    ['La nostra giocatrice schiaccia fortissimo.', 'Salta e schiaccia!', 'Ho schiacciato e abbiamo fatto punto.'],
    'a volleyball player jumping high above the net and hitting the white ball downwards with one arm',
    []
  ),

  // --- altri sport ----------------------------------------------------------------------------
  sv(
    'andare-a-cavallo',
    'andare a cavallo',
    'Stare in sella a un cavallo e guidarlo.',
    [
      'to ride a horse, to go horse riding',
      'montar a caballo',
      'faire du cheval, monter à cheval',
      'jezdit na koni',
      'jeździć konno',
      'ata binmek',
      'reiten',
      '乗馬をする、馬に乗る',
    ],
    [
      'Mia sorella va a cavallo da quando aveva sei anni.',
      'Sai andare a cavallo?',
      'In vacanza siamo andati a cavallo sulla spiaggia.',
    ],
    'a smiling young woman with a riding helmet sitting on a brown horse, holding the reins, the horse walking'
  ),
  sv(
    'remare',
    'remare',
    'Muovere una barca con i remi.',
    ['to row, to paddle', 'remar', 'ramer', 'veslovat', 'wiosłować', 'kürek çekmek', 'rudern', 'ボートをこぐ'],
    ['Remiamo fino all’altra parte del lago.', 'Remare è faticoso per le braccia.', 'I due ragazzi remano insieme.'],
    'a photograph cropped into a perfect circle, centred on the white background, showing two friends in life jackets rowing a small red rowing boat with wooden oars on a calm blue lake'
  ),
  sv(
    'fare-surf',
    'fare surf',
    'Stare in piedi su una tavola e scivolare sulle onde.',
    ['to surf', 'hacer surf', 'faire du surf', 'surfovat', 'surfować', 'sörf yapmak', 'surfen', 'サーフィンをする'],
    [
      'D’estate faccio surf in Portogallo.',
      'È difficile imparare a fare surf?',
      'Oggi non si può fare surf: non ci sono onde.',
    ],
    'a photograph cropped into a perfect circle, centred on the white background, showing a young surfer in a black wetsuit standing on a surfboard riding a breaking blue wave'
  ),
  sv(
    'tirare-con-larco',
    'tirare con l’arco',
    'Lanciare frecce con un arco verso un bersaglio.',
    [
      'to do archery, to shoot with a bow',
      'practicar tiro con arco',
      'tirer à l’arc',
      'střílet z luku',
      'strzelać z łuku',
      'okçuluk yapmak, ok atmak',
      'Bogen schießen',
      '弓を射る、アーチェリーをする',
    ],
    [
      'Mio figlio tira con l’arco il giovedì.',
      'Hai mai tirato con l’arco?',
      'Per tirare con l’arco serve concentrazione.',
    ],
    'a woman in sportswear pulling the string of a modern bow, aiming an arrow at a round target with coloured rings a few metres away'
  ),
  sv(
    'fare-una-capriola',
    'fare una capriola',
    'Rotolare in avanti con la testa sotto, sopra un tappeto.',
    [
      'to do a somersault, to do a forward roll',
      'dar una voltereta',
      'faire une roulade',
      'udělat kotoul',
      'zrobić fikołka',
      'takla atmak',
      'einen Purzelbaum schlagen, eine Rolle machen',
      '前転をする',
    ],
    [
      'Il bambino fa una capriola sul prato.',
      'A ginnastica abbiamo fatto le capriole.',
      'Sai fare una capriola all’indietro?',
    ],
    'a little girl in a leotard doing a forward roll on a long blue gym mat, seen from the side: her head tucked down touching the mat, her back rounded like a ball and her knees bent over her head, no other people'
  ),

  // --- la gara --------------------------------------------------------------------------------
  sv(
    'gareggiare',
    'gareggiare',
    'Partecipare a una gara contro altri atleti.',
    [
      'to compete, to race',
      'competir',
      'concourir, participer à une course',
      'závodit',
      'startować (w zawodach), rywalizować',
      'yarışmak',
      'an einem Wettkampf teilnehmen',
      '競う、試合に出る',
    ],
    [
      'Domenica gareggio nei cento metri.',
      'Ha gareggiato alle Olimpiadi.',
      'Gareggiamo per divertirci, non per vincere.',
    ],
    'three runners in numbered vests sprinting side by side on a red running track',
    ['arrivare-primo']
  ),
  sv(
    'tifare',
    'tifare',
    'Sostenere con passione una squadra o un atleta.',
    [
      'to support, to cheer (for)',
      'animar, ser hincha de',
      'supporter, encourager',
      'fandit',
      'kibicować',
      'tutmak (bir takımı), tezahürat yapmak',
      'anfeuern, Fan sein von',
      '応援する',
    ],
    ['Per che squadra tifi?', 'Tifo per la Roma da quando ero bambino.', 'Tutta la famiglia tifa per l’Italia.'],
    'three happy fans in a stadium stand cheering with raised arms, one waving a long striped scarf',
    ['esultare']
  ),
  sv(
    'arbitrare',
    'arbitrare',
    'Controllare che una partita si giochi secondo le regole.',
    [
      'to referee',
      'arbitrar',
      'arbitrer',
      'rozhodovat, pískat (zápas)',
      'sędziować',
      'hakemlik yapmak',
      '(ein Spiel) pfeifen, Schiedsrichter sein',
      '審判をする',
    ],
    ['Chi arbitra la finale?', 'Mio padre arbitra partite di calcio la domenica.', 'Ha arbitrato molto bene.'],
    'a football referee in a black kit blowing his whistle and pointing with his arm stretched out, on a green pitch',
    ['ammonire']
  ),
  sv(
    'fare-fallo',
    'fare fallo',
    'Fare un’azione vietata dalle regole, per esempio colpire un avversario.',
    [
      'to commit a foul',
      'hacer falta',
      'faire une faute',
      'faulovat',
      'sfaulować',
      'faul yapmak',
      'foulen',
      '反則をする、ファウルをする',
    ],
    [
      'Il difensore ha fatto fallo in area.',
      'Non ho fatto fallo, ho preso la palla!',
      'Se fai fallo, l’arbitro fischia.',
    ],
    'a football player in a blue shirt sliding and tripping a player in a red shirt, who is falling forward, the ball rolling away',
    ['ammonire']
  ),
  sv(
    'ammonire',
    'ammonire',
    'Mostrare il cartellino giallo a un giocatore, nel calcio.',
    [
      'to book, to give a yellow card',
      'amonestar, sacar tarjeta amarilla',
      'donner un carton jaune, avertir',
      'napomenout (žlutou kartou)',
      'ukarać żółtą kartką',
      'sarı kart göstermek',
      'verwarnen, die Gelbe Karte zeigen',
      'イエローカードを出す、警告する',
    ],
    [
      'L’arbitro ha ammonito due giocatori.',
      'È stato ammonito per un fallo.',
      'Se ti ammoniscono un’altra volta, devi uscire.',
    ],
    'a football referee holding up a yellow card in front of a disappointed player who is holding his hands open',
    ['arbitrare', 'fare-fallo']
  ),
  sv(
    'arrivare-primo',
    'arrivare primo',
    'Finire una gara prima di tutti gli altri.',
    [
      'to come first, to finish first',
      'llegar el primero, quedar primero',
      'arriver premier',
      'doběhnout první, vyhrát',
      'przybiec pierwszy, zająć pierwsze miejsce',
      'birinci gelmek',
      'als Erster ankommen',
      '一位になる',
    ],
    [
      'Giulia è arrivata prima nella gara di nuoto.',
      'Sono arrivato primo per un secondo!',
      'Chi arriva primo vince la medaglia d’oro.',
    ],
    'a runner breaking through a white finish tape with both arms raised, two other runners a few steps behind him',
    ['tagliare-il-traguardo', 'gareggiare']
  ),
  sv(
    'tagliare-il-traguardo',
    'tagliare il traguardo',
    'Passare la linea di arrivo alla fine di una gara.',
    [
      'to cross the finish line',
      'cruzar la meta',
      'franchir la ligne d’arrivée',
      'proběhnout cílem',
      'przekroczyć linię mety',
      'bitiş çizgisini geçmek',
      'die Ziellinie überqueren',
      'ゴールする、ゴールラインを越える',
    ],
    [
      'Ha tagliato il traguardo dopo quattro ore.',
      'Taglio il traguardo e mi siedo per terra.',
      'Tutti applaudono quando taglia il traguardo.',
    ],
    'a tired but happy woman marathon runner with a race number stepping over a plain white line painted across a strip of grey road, arms raised, a race arch of red and white balloons above her, no letters and no words anywhere',
    ['arrivare-primo']
  ),
  sv(
    'battere-il-record',
    'battere il record',
    'Fare il risultato migliore di sempre.',
    [
      'to break the record',
      'batir el récord',
      'battre le record',
      'překonat rekord',
      'pobić rekord',
      'rekor kırmak',
      'den Rekord brechen',
      '記録を破る',
    ],
    [
      'Ha battuto il record del mondo.',
      'Oggi ho battuto il mio record: dieci chilometri in cinquanta minuti!',
      'Nessuno è riuscito a battere quel record.',
    ],
    'an amazed young woman athlete with her hands on her head looking at a big stopwatch that her smiling coach is showing her',
    []
  ),
  sv(
    'esultare',
    'esultare',
    'Mostrare una grande gioia, per esempio dopo un gol o una vittoria.',
    [
      'to celebrate, to cheer (with joy)',
      'celebrar, festejar',
      'exulter, laisser éclater sa joie',
      'jásat',
      'cieszyć się, wiwatować',
      'sevinç çığlıkları atmak',
      'jubeln',
      '大喜びする',
    ],
    ['I giocatori esultano dopo il gol.', 'Tutto lo stadio ha esultato.', 'Non esultare troppo presto!'],
    'a football player sliding on his knees on the grass with both fists raised and his mouth open in a shout of joy',
    ['segnare', 'tifare']
  ),
  sv(
    'premiare',
    'premiare',
    'Dare un premio, una medaglia o una coppa a chi ha vinto.',
    [
      'to award, to present with a prize',
      'premiar',
      'récompenser, remettre un prix',
      'ocenit, předat cenu',
      'nagrodzić, wręczyć nagrodę',
      'ödül vermek',
      'auszeichnen, ehren',
      '表彰する、賞を与える',
    ],
    [
      'Il sindaco premia i vincitori.',
      'Mi hanno premiato come miglior giocatore.',
      'Alla fine del torneo premiamo tutte le squadre.',
    ],
    'a smiling official hanging a gold medal around the neck of a happy athlete standing on the top step of a podium',
    ['arrivare-primo']
  ),
  sv(
    'infortunarsi',
    'infortunarsi',
    'Farsi male durante lo sport.',
    [
      'to get injured',
      'lesionarse',
      'se blesser',
      'zranit se (při sportu)',
      'doznać kontuzji',
      'sakatlanmak',
      'sich verletzen',
      '（スポーツで）けがをする',
    ],
    [
      'Si è infortunato al ginocchio durante la partita.',
      'Mi sono infortunata e non posso giocare per un mese.',
      'Attento a non infortunarti!',
    ],
    'a football player sitting on the grass holding his knee with a pained face, a medic with a first aid bag kneeling next to him',
    []
  ),
];

export const sportVerbTranslationExercises = [
  tr(
    'Mi alleno tre volte alla settimana e vado in palestra dopo il lavoro.',
    'I train three times a week and go to the gym after work.',
    'Entreno tres veces por semana y voy al gimnasio después del trabajo.',
    'Je m’entraîne trois fois par semaine et je vais à la salle de sport après le travail.',
    'Trénuju třikrát týdně a po práci chodím do posilovny.',
    'Trenuję trzy razy w tygodniu i chodzę na siłownię po pracy.',
    'Haftada üç kez antrenman yapıyorum ve işten sonra spor salonuna gidiyorum.',
    'Ich trainiere dreimal pro Woche und gehe nach der Arbeit ins Fitnessstudio.',
    '週に3回トレーニングして、仕事のあとジムに行きます。'
  ),
  tr(
    'Prima di correre mi riscaldo, e dopo faccio stretching.',
    'Before running I warm up, and afterwards I stretch.',
    'Antes de correr caliento, y después hago estiramientos.',
    'Avant de courir, je m’échauffe, et après, je fais des étirements.',
    'Před během se rozcvičím a potom se protáhnu.',
    'Przed bieganiem się rozgrzewam, a potem się rozciągam.',
    'Koşmadan önce ısınıyorum, sonra da esneme hareketleri yapıyorum.',
    'Vor dem Laufen wärme ich mich auf, und danach dehne ich mich.',
    '走る前にウォーミングアップをして、そのあとストレッチをします。'
  ),
  tr(
    'Ogni mattina faccio venti flessioni e trenta addominali.',
    'Every morning I do twenty push-ups and thirty sit-ups.',
    'Cada mañana hago veinte flexiones y treinta abdominales.',
    'Chaque matin, je fais vingt pompes et trente abdos.',
    'Každé ráno udělám dvacet kliků a třicet sedů-lehů.',
    'Każdego ranka robię dwadzieścia pompek i trzydzieści brzuszków.',
    'Her sabah yirmi şınav ve otuz mekik çekiyorum.',
    'Jeden Morgen mache ich zwanzig Liegestütze und dreißig Sit-ups.',
    '毎朝、腕立て伏せを20回と腹筋を30回します。'
  ),
  tr(
    'Mio zio allena una squadra di bambini che giocano a calcio.',
    'My uncle coaches a team of children who play football.',
    'Mi tío entrena a un equipo de niños que juegan al fútbol.',
    'Mon oncle entraîne une équipe d’enfants qui jouent au foot.',
    'Můj strýc trénuje tým dětí, které hrají fotbal.',
    'Mój wujek trenuje drużynę dzieci, które grają w piłkę nożną.',
    'Amcam futbol oynayan bir çocuk takımını çalıştırıyor.',
    'Mein Onkel trainiert eine Mannschaft von Kindern, die Fußball spielen.',
    'おじはサッカーをする子どものチームを指導しています。'
  ),
  tr(
    'Mi ha passato la palla, ho tirato in porta e ho segnato!',
    'He passed me the ball, I shot at goal and I scored!',
    '¡Me pasó el balón, tiré a puerta y marqué!',
    'Il m’a fait une passe, j’ai tiré au but et j’ai marqué !',
    'Přihrál mi míč, vystřelil jsem na bránu a dal jsem gól!',
    'Podał mi piłkę, strzeliłem na bramkę i zdobyłem gola!',
    'Bana pas verdi, kaleye şut çektim ve gol attım!',
    'Er hat mir den Ball zugespielt, ich habe aufs Tor geschossen und getroffen!',
    '彼がパスをくれて、ぼくがシュートして、ゴールを決めた！'
  ),
  tr(
    'Il portiere ha parato un rigore e tutti i tifosi hanno esultato.',
    'The goalkeeper saved a penalty and all the fans cheered.',
    'El portero paró un penalti y todos los aficionados lo celebraron.',
    'Le gardien a arrêté un penalty et tous les supporters ont exulté.',
    'Brankář chytil penaltu a všichni fanoušci jásali.',
    'Bramkarz obronił rzut karny i wszyscy kibice wiwatowali.',
    'Kaleci bir penaltı kurtardı ve bütün taraftarlar sevinçle bağırdı.',
    'Der Torwart hat einen Elfmeter gehalten, und alle Fans haben gejubelt.',
    'キーパーがPKを止めて、ファンはみんな大喜びしました。'
  ),
  tr(
    'Sai andare a cavallo o tirare con l’arco?',
    'Can you ride a horse or shoot with a bow?',
    '¿Sabes montar a caballo o tirar con arco?',
    'Tu sais monter à cheval ou tirer à l’arc ?',
    'Umíš jezdit na koni nebo střílet z luku?',
    'Umiesz jeździć konno albo strzelać z łuku?',
    'Ata binmeyi ya da ok atmayı biliyor musun?',
    'Kannst du reiten oder Bogen schießen?',
    '馬に乗ったり、弓を射たりできますか？'
  ),
  tr(
    'Il difensore ha fatto fallo e l’arbitro lo ha ammonito.',
    'The defender committed a foul and the referee booked him.',
    'El defensa hizo falta y el árbitro lo amonestó.',
    'Le défenseur a fait une faute et l’arbitre lui a donné un carton jaune.',
    'Obránce fauloval a rozhodčí mu ukázal žlutou kartu.',
    'Obrońca sfaulował i sędzia ukarał go żółtą kartką.',
    'Defans oyuncusu faul yaptı ve hakem ona sarı kart gösterdi.',
    'Der Verteidiger hat gefoult, und der Schiedsrichter hat ihn verwarnt.',
    'ディフェンダーが反則をして、審判がイエローカードを出しました。'
  ),
  tr(
    'Giulia è arrivata prima e ha battuto il record della scuola.',
    'Giulia came first and broke the school record.',
    'Giulia llegó la primera y batió el récord del colegio.',
    'Giulia est arrivée première et a battu le record de l’école.',
    'Giulia doběhla první a překonala školní rekord.',
    'Giulia przybiegła pierwsza i pobiła rekord szkoły.',
    'Giulia birinci geldi ve okulun rekorunu kırdı.',
    'Giulia ist als Erste angekommen und hat den Schulrekord gebrochen.',
    'ジュリアは一位になって、学校の記録を破りました。'
  ),
  tr(
    'Mi sono infortunato al ginocchio e non posso gareggiare.',
    'I injured my knee and I can’t compete.',
    'Me lesioné la rodilla y no puedo competir.',
    'Je me suis blessé au genou et je ne peux pas concourir.',
    'Zranil jsem si koleno a nemůžu závodit.',
    'Doznałem kontuzji kolana i nie mogę startować.',
    'Dizimden sakatlandım ve yarışamıyorum.',
    'Ich habe mir das Knie verletzt und kann nicht antreten.',
    'ひざをけがしたので、試合に出られません。'
  ),
];

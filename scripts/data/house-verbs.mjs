// I verbi della lezione «I verbi della casa» (2026-09-27).
//
// Seguito di «La casa»: i verbi di quello che si fa in casa, in quattro gruppi: in cucina (11), le faccende
// (15), porte, scale e luci (13), la giornata (10). I verbi della cura del corpo (lavarsi i denti, pettinarsi,
// radersi, truccarsi...) non ci sono: stanno in «I verbi del corpo», citata nella nota della pagina.
//
// Esercizio come «I verbi delle relazioni» (`photoRows`): una foto per riga, i verbi scritti nella barra, per
// ogni foto e' giusto il suo verbo piu' quelli di `fits`. Le coppie che una foto sola non distingue bene
// (entrare/uscire, accendere/spegnere, aprire/chiudere) si accettano a vicenda.
//
// Struttura di ogni voce: come relations-verbs.mjs. Foto REALISTICHE con gpt-image-1-mini a qualita' `low`
// (Martin: spendere poco), `generate-animal-images.mjs --set verbi-casa`, stile PEOPLE_STYLE.

import { tr } from './traits-base.mjs';

const LANG_ORDER = ['it', 'en', 'es', 'fr', 'cs', 'pl', 'tr', 'de', 'ja'];

const hv = (slug, word, def, glosses, examples, scene, fits = []) => {
  if (glosses.length !== 8) throw new Error(`«${slug}»: servono 8 traduzioni`);
  if (examples.length !== 3) throw new Error(`«${slug}»: servono tre frasi d'esempio`);
  return {
    image: `verbi-casa/${slug}`,
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

export const houseVerbs = [
  // --- in cucina ---------------------------------------------------------------------------
  hv(
    'cucinare',
    'cucinare',
    'Preparare da mangiare.',
    ['to cook', 'cocinar', 'cuisiner', 'vařit', 'gotować', 'yemek pişirmek', 'kochen', '料理する'],
    ['Stasera cucino io.', 'Mio nonno cucina benissimo.', 'Cosa cucini per pranzo?'],
    'a man in an apron standing at a stove, stirring vegetables in a pan with a wooden spoon, steam rising',
    ['mescolare']
  ),
  hv(
    'apparecchiare',
    'apparecchiare',
    'Mettere sul tavolo piatti, bicchieri e posate prima di mangiare.',
    [
      'to set (lay) the table',
      'poner la mesa',
      'mettre la table',
      'prostřít stůl',
      'nakrywać do stołu',
      'sofrayı kurmak',
      'den Tisch decken',
      '食卓の用意をする',
    ],
    ['Puoi apparecchiare la tavola?', 'I bambini apparecchiano per sei.', 'Ho già apparecchiato: a tavola!'],
    'a girl of about ten placing plates and forks on a dining table with a tablecloth, other empty plates already set'
  ),
  hv(
    'sparecchiare',
    'sparecchiare',
    'Togliere piatti, bicchieri e posate dal tavolo dopo aver mangiato.',
    [
      'to clear the table',
      'quitar la mesa',
      'débarrasser la table',
      'sklidit ze stolu',
      'sprzątać ze stołu',
      'sofrayı toplamak',
      'den Tisch abräumen',
      '食卓を片づける',
    ],
    ['Dopo cena sparecchio io.', 'Chi sparecchia stasera?', 'Sparecchia e metti i piatti nel lavandino.'],
    'a young man carrying a stack of used empty plates and glasses away from a dining table after a meal'
  ),
  hv(
    'lavare-i-piatti',
    'lavare i piatti',
    'Pulire con acqua e sapone i piatti sporchi.',
    [
      'to wash (do) the dishes',
      'fregar los platos',
      'faire la vaisselle',
      'mýt nádobí',
      'zmywać naczynia',
      'bulaşık yıkamak',
      'abwaschen, spülen',
      '皿を洗う',
    ],
    ['Tu cucini, io lavo i piatti.', 'Lavo i piatti a mano.', 'Stasera non ho voglia di lavare i piatti.'],
    'a woman at a kitchen sink washing a plate with a sponge and soap foam, rubber gloves on',
    ['pulire']
  ),
  hv(
    'asciugare',
    'asciugare',
    'Togliere l’acqua da qualcosa con un panno.',
    [
      'to dry',
      'secar',
      'essuyer, sécher',
      'utírat, sušit',
      'wycierać, suszyć',
      'kurulamak',
      'abtrocknen',
      '拭く、乾かす',
    ],
    ['Io lavo e tu asciughi.', 'Asciuga i bicchieri con lo strofinaccio.', 'Il sole asciuga i panni.'],
    'an elderly man standing at a kitchen counter drying a wet white plate with a red-and-white checked cotton tea towel, a dish rack with plates beside him'
  ),
  hv(
    'tagliare',
    'tagliare',
    'Dividere qualcosa in pezzi con il coltello o le forbici.',
    ['to cut', 'cortar', 'couper', 'krájet, stříhat', 'kroić, ciąć', 'kesmek', 'schneiden', '切る'],
    ['Taglio le cipolle per il sugo.', 'Attento a non tagliarti!', 'Taglia il pane, per favore.'],
    'close view of two hands cutting a red pepper into strips with a kitchen knife on a wooden chopping board'
  ),
  hv(
    'sbucciare',
    'sbucciare',
    'Togliere la buccia alla frutta o alla verdura.',
    ['to peel', 'pelar', 'éplucher', 'loupat', 'obierać', 'soymak', 'schälen', '皮をむく'],
    ['Sbuccio le patate per la cena.', 'Mi sbucci una mela?', 'Le arance si sbucciano con le mani.'],
    'close view of two hands peeling a potato with a vegetable peeler, the peel curling off'
  ),
  hv(
    'mescolare',
    'mescolare',
    'Girare un cibo o un liquido con il cucchiaio per unire tutto.',
    [
      'to stir, to mix',
      'remover, mezclar',
      'mélanger, remuer',
      'míchat',
      'mieszać',
      'karıştırmak',
      'umrühren, mischen',
      '混ぜる、かき混ぜる',
    ],
    ['Mescola il sugo ogni tanto.', 'Mescolo la farina con l’acqua.', 'Metti lo zucchero e mescola.'],
    'close view of a hand stirring tomato sauce in a pot with a wooden spoon'
  ),
  hv(
    'versare',
    'versare',
    'Far scendere un liquido da un contenitore a un altro.',
    [
      'to pour',
      'echar, servir',
      'verser',
      'nalít',
      'nalewać',
      'dökmek, koymak (sıvı)',
      'eingießen, einschenken',
      '注ぐ',
    ],
    ['Ti verso un bicchiere d’acqua?', 'Versa l’olio nella padella.', 'Ho versato il caffè sul tavolo!'],
    'a woman pouring orange juice from a glass jug into a glass on a table',
    ['riempire']
  ),
  hv(
    'riempire',
    'riempire',
    'Mettere dentro qualcosa finché è pieno.',
    ['to fill', 'llenar', 'remplir', 'naplnit', 'napełniać', 'doldurmak', 'füllen', '満たす、いっぱいにする'],
    ['Riempio la pentola d’acqua.', 'Riempi la bottiglia al rubinetto.', 'Il bambino riempie il secchiello di sabbia.'],
    'a man standing at a kitchen sink holding a large cooking pot under the running kitchen tap, water visibly flowing from the tap into the pot',
    ['versare']
  ),
  hv(
    'svuotare',
    'svuotare',
    'Togliere tutto quello che c’è dentro.',
    ['to empty', 'vaciar', 'vider', 'vyprázdnit', 'opróżniać', 'boşaltmak', 'leeren, ausräumen', '空にする'],
    ['Svuoti la lavastoviglie?', 'Ho svuotato la valigia.', 'Svuota il secchio della spazzatura.'],
    'a teenage boy taking clean plates out of an open dishwasher and putting them away'
  ),

  // --- le faccende ---------------------------------------------------------------------------
  hv(
    'pulire',
    'pulire',
    'Togliere lo sporco.',
    [
      'to clean',
      'limpiar',
      'nettoyer',
      'uklízet, čistit',
      'sprzątać, czyścić',
      'temizlemek',
      'putzen, sauber machen',
      '掃除する、きれいにする',
    ],
    ['Il sabato puliamo la casa.', 'Pulisci il tavolo, per favore.', 'Ho pulito il bagno.'],
    'a woman wiping a kitchen counter with a cloth and a spray bottle',
    ['lavare-il-pavimento', 'spolverare']
  ),
  hv(
    'spazzare',
    'spazzare',
    'Pulire il pavimento con la scopa.',
    ['to sweep', 'barrer', 'balayer', 'zametat', 'zamiatać', 'süpürmek', 'fegen, kehren', '掃く'],
    ['Spazzo la cucina dopo pranzo.', 'Spazza le foglie dal balcone.', 'Il nonno spazza il cortile.'],
    'a man sweeping crumbs on a tiled floor into a dustpan with a broom',
    ['pulire']
  ),
  hv(
    'passare-laspirapolvere',
    'passare l’aspirapolvere',
    'Pulire il pavimento e i tappeti con l’aspirapolvere.',
    [
      'to vacuum, to hoover',
      'pasar la aspiradora',
      'passer l’aspirateur',
      'vysávat',
      'odkurzać',
      'süpürge çekmek',
      'staubsaugen',
      '掃除機をかける',
    ],
    [
      'Passo l’aspirapolvere in camera.',
      'Il gatto scappa quando passo l’aspirapolvere.',
      'Hai passato l’aspirapolvere?',
    ],
    'a young woman vacuuming a rug in a living room with an upright vacuum cleaner',
    ['pulire']
  ),
  hv(
    'lavare-il-pavimento',
    'lavare il pavimento',
    'Pulire il pavimento con acqua, un secchio e lo straccio.',
    [
      'to mop (wash) the floor',
      'fregar el suelo',
      'laver le sol',
      'vytírat podlahu',
      'myć podłogę',
      'yer silmek',
      'den Boden wischen',
      '床をふく',
    ],
    [
      'Ho appena lavato il pavimento: non entrare!',
      'Lavo il pavimento una volta alla settimana.',
      'Il pavimento è bagnato.',
    ],
    'a man mopping a shiny tiled floor with a mop, a bucket beside him',
    ['pulire']
  ),
  hv(
    'spolverare',
    'spolverare',
    'Togliere la polvere dai mobili.',
    [
      'to dust',
      'quitar el polvo',
      'épousseter, faire la poussière',
      'utírat prach',
      'ścierać kurze',
      'toz almak',
      'Staub wischen',
      'ほこりを払う',
    ],
    ['Spolvero i mobili ogni settimana.', 'Spolvera la libreria, è piena di polvere.', 'Non spolvero da un mese!'],
    'a woman dusting the shelves of a bookcase with a feather duster',
    ['pulire']
  ),
  hv(
    'fare-il-bucato',
    'fare il bucato',
    'Lavare i vestiti, di solito in lavatrice.',
    [
      'to do the laundry',
      'hacer la colada, lavar la ropa',
      'faire la lessive',
      'prát prádlo',
      'robić pranie',
      'çamaşır yıkamak',
      'Wäsche waschen',
      '洗濯する',
    ],
    ['Faccio il bucato il lunedì.', 'Metti i calzini nel bucato.', 'Con questo tempo il bucato non si asciuga.'],
    'a man loading dirty clothes from a laundry basket into a front-loading washing machine'
  ),
  hv(
    'stendere',
    'stendere',
    'Appendere i panni bagnati perché si asciughino.',
    [
      'to hang out (the washing)',
      'tender (la ropa)',
      'étendre (le linge)',
      'věšet prádlo',
      'wieszać pranie',
      'çamaşır asmak',
      'Wäsche aufhängen',
      '洗濯物を干す',
    ],
    ['Stendo i panni sul balcone.', 'Oggi c’è il sole: stendi fuori!', 'Chi ha steso le lenzuola?'],
    'a woman hanging wet laundry with clothes pegs on a clothes drying rack outdoors on a sunny balcony',
    ['appendere']
  ),
  hv(
    'stirare',
    'stirare',
    'Togliere le pieghe ai vestiti con il ferro da stiro.',
    ['to iron', 'planchar', 'repasser', 'žehlit', 'prasować', 'ütülemek', 'bügeln', 'アイロンをかける'],
    ['Stiro le camicie la domenica.', 'Odio stirare!', 'Questo vestito non si stira.'],
    'a man ironing a shirt on an ironing board with a steam iron'
  ),
  hv(
    'piegare',
    'piegare',
    'Mettere in ordine un vestito o un foglio girandone una parte sull’altra.',
    ['to fold', 'doblar', 'plier', 'skládat', 'składać', 'katlamak', 'falten, zusammenlegen', 'たたむ'],
    ['Piego le magliette e le metto nel cassetto.', 'Piega bene il foglio a metà.', 'Mi aiuti a piegare le lenzuola?'],
    'a woman sitting on a bed folding a t-shirt, a pile of neatly folded clothes next to her'
  ),
  hv(
    'riordinare',
    'riordinare',
    'Rimettere ogni cosa al suo posto.',
    [
      'to tidy up',
      'ordenar, recoger',
      'ranger',
      'uklidit',
      'sprzątać, porządkować',
      'toplamak, düzenlemek',
      'aufräumen',
      '片づける',
    ],
    ['Riordina la tua camera!', 'Dopo la festa abbiamo riordinato tutto.', 'Riordino i libri sullo scaffale.'],
    'a boy of about eight putting toys from the floor into a toy box in his bedroom',
    ['pulire']
  ),
  hv(
    'buttare-la-spazzatura',
    'buttare la spazzatura',
    'Portare fuori il sacco dei rifiuti e metterlo nel bidone.',
    [
      'to take out the rubbish (trash)',
      'sacar la basura',
      'sortir (jeter) les poubelles',
      'vynést odpadky',
      'wynosić śmieci',
      'çöpü atmak',
      'den Müll rausbringen',
      'ゴミを出す',
    ],
    ['Chi butta la spazzatura stasera?', 'Butto la spazzatura quando esco.', 'La carta va nel bidone blu.'],
    'a man in the street dropping a closed rubbish bag into a large green wheelie bin'
  ),
  hv(
    'fare-il-letto',
    'fare il letto',
    'Sistemare lenzuola e coperte sul letto dopo aver dormito.',
    [
      'to make the bed',
      'hacer la cama',
      'faire le lit',
      'ustlat postel',
      'ścielić łóżko',
      'yatağı toplamak',
      'das Bett machen',
      'ベッドを整える',
    ],
    ['Ogni mattina faccio il letto.', 'Hai fatto il letto?', 'In albergo non devo fare il letto.'],
    'a woman straightening the duvet and placing the pillows on a double bed',
    ['riordinare']
  ),
  hv(
    'innaffiare',
    'innaffiare',
    'Dare l’acqua alle piante.',
    ['to water (plants)', 'regar', 'arroser', 'zalévat', 'podlewać', 'sulamak', 'gießen', '水をやる'],
    ['Innaffio i fiori la sera.', 'Mentre sono via, innaffi tu le piante?', 'Ha piovuto: non serve innaffiare.'],
    'an elderly woman watering pots of red geraniums on a balcony with a green watering can'
  ),
  hv(
    'aggiustare',
    'aggiustare',
    'Fare in modo che una cosa rotta funzioni di nuovo.',
    ['to fix, to repair', 'arreglar', 'réparer', 'opravit', 'naprawiać', 'tamir etmek', 'reparieren', '直す、修理する'],
    ['Mio padre aggiusta tutto.', 'Devo aggiustare la sedia.', 'Il rubinetto perde: chi lo aggiusta?'],
    'a man kneeling and fixing the leg of a wooden chair with a screwdriver, a toolbox beside him'
  ),
  hv(
    'appendere',
    'appendere',
    'Mettere una cosa in alto attaccata a un chiodo, un gancio o un filo.',
    ['to hang (up)', 'colgar', 'accrocher, suspendre', 'pověsit', 'wieszać', 'asmak', 'aufhängen', '掛ける、吊るす'],
    ['Appendo il quadro in soggiorno.', 'Appendi la giacca all’attaccapanni.', 'Ho appeso le foto in camera.'],
    'a young woman standing on a small stool hanging a framed picture on a wall'
  ),

  // --- porte, scale e luci -------------------------------------------------------------------
  hv(
    'abitare',
    'abitare',
    'Vivere in un posto, avere lì la propria casa.',
    ['to live (somewhere)', 'vivir, residir', 'habiter', 'bydlet', 'mieszkać', 'oturmak, yaşamak', 'wohnen', '住む'],
    ['Abito a Milano.', 'Dove abiti?', 'Abitiamo al terzo piano.'],
    'a smiling family of three standing in front of the door of their small house, waving'
  ),
  hv(
    'traslocare',
    'traslocare',
    'Portare tutte le proprie cose in una casa nuova.',
    ['to move (house)', 'mudarse', 'déménager', 'stěhovat se', 'przeprowadzać się', 'taşınmak', 'umziehen', '引っ越す'],
    ['A maggio traslochiamo.', 'Traslocare è faticoso.', 'Ci aiuti a traslocare sabato?'],
    'a young couple carrying big cardboard moving boxes, more boxes piled up next to them'
  ),
  hv(
    'entrare',
    'entrare',
    'Andare dentro.',
    [
      'to come in, to enter',
      'entrar',
      'entrer',
      'vejít, vstoupit',
      'wchodzić',
      'girmek',
      'hereinkommen, eintreten',
      '入る',
    ],
    ['Entra pure, la porta è aperta.', 'Siamo entrati in casa.', 'Non si entra con le scarpe sporche!'],
    'a man stepping through an open front door into a house, one foot inside, a bag in his hand',
    ['uscire', 'aprire']
  ),
  hv(
    'uscire',
    'uscire',
    'Andare fuori.',
    [
      'to go out, to leave',
      'salir',
      'sortir',
      'vyjít, odejít',
      'wychodzić',
      'çıkmak',
      'hinausgehen, ausgehen',
      '出る、出かける',
    ],
    ['Esco di casa alle otto.', 'Stasera usciamo con gli amici.', 'Esci dal bagno, tocca a me!'],
    'a woman in a coat with a handbag walking out of her front door, closing it behind her',
    ['entrare', 'chiudere']
  ),
  hv(
    'salire',
    'salire',
    'Andare verso l’alto.',
    [
      'to go up, to climb',
      'subir',
      'monter',
      'jít nahoru, vystoupat',
      'wchodzić (w górę)',
      'çıkmak (yukarı)',
      'hinaufgehen, steigen',
      '上がる、登る',
    ],
    ['Salgo le scale a piedi.', 'Sali in macchina!', 'Siamo saliti al quinto piano.'],
    'a woman carrying shopping bags walking UP a staircase, seen from the side, one foot on a higher step, looking upward'
  ),
  hv(
    'scendere',
    'scendere',
    'Andare verso il basso.',
    [
      'to go down, to get off',
      'bajar',
      'descendre',
      'jít dolů, sejít',
      'schodzić',
      'inmek',
      'hinuntergehen, aussteigen',
      '下りる、降りる',
    ],
    [
      'Scendo a prendere il pane.',
      'Scendi dall’autobus alla prossima fermata.',
      'I bambini scendono le scale di corsa.',
    ],
    'a child running DOWN a staircase, seen from the bottom of the stairs, holding the banister, looking down'
  ),
  hv(
    'bussare',
    'bussare',
    'Battere sulla porta con la mano per farsi aprire.',
    [
      'to knock',
      'llamar (a la puerta)',
      'frapper (à la porte)',
      'klepat',
      'pukać',
      'kapıyı çalmak',
      'klopfen',
      'ノックする',
    ],
    ['Qualcuno bussa alla porta.', 'Bussa prima di entrare!', 'Ho bussato, ma non ha risposto nessuno.'],
    'a young man knocking with his knuckles on a closed wooden front door'
  ),
  hv(
    'suonare-il-campanello',
    'suonare il campanello',
    'Premere il bottone del campanello per farsi aprire.',
    [
      'to ring the doorbell',
      'tocar el timbre',
      'sonner (à la porte)',
      'zazvonit',
      'dzwonić do drzwi',
      'zili çalmak',
      'klingeln',
      '呼び鈴を鳴らす',
    ],
    [
      'Suono il campanello, ma non apre nessuno.',
      'Hanno suonato il campanello: vai tu?',
      'Il postino suona sempre due volte.',
    ],
    'a woman with a bouquet of flowers pressing the doorbell button next to a closed front door'
  ),
  hv(
    'aprire',
    'aprire',
    'Fare in modo che una cosa non sia più chiusa.',
    ['to open', 'abrir', 'ouvrir', 'otevřít', 'otwierać', 'açmak', 'öffnen, aufmachen', '開ける'],
    ['Apri la finestra, fa caldo.', 'Chi apre la porta?', 'Il negozio apre alle nove.'],
    'a woman opening a window wide with both hands, curtains moving, sunlight coming in',
    ['chiudere']
  ),
  hv(
    'chiudere',
    'chiudere',
    'Fare in modo che una cosa non sia più aperta.',
    [
      'to close, to shut',
      'cerrar',
      'fermer',
      'zavřít',
      'zamykać, zamknąć',
      'kapatmak',
      'schließen, zumachen',
      '閉める',
    ],
    ['Chiudi la porta, c’è corrente.', 'Chiudo le finestre prima di uscire.', 'La farmacia chiude alle otto.'],
    'a man closing the wooden shutters of a window from inside, the room getting darker',
    ['aprire']
  ),
  hv(
    'chiudere-a-chiave',
    'chiudere a chiave',
    'Chiudere una porta con la chiave, in modo che nessuno possa aprire.',
    [
      'to lock',
      'cerrar con llave',
      'fermer à clé',
      'zamknout na klíč',
      'zamykać na klucz',
      'kilitlemek',
      'abschließen',
      '鍵をかける',
    ],
    [
      'Hai chiuso a chiave la porta?',
      'La sera chiudo sempre a chiave.',
      'Mi sono chiuso fuori: le chiavi sono dentro!',
    ],
    'close view of a hand turning a key in the lock of a front door',
    ['chiudere']
  ),
  hv(
    'accendere',
    'accendere',
    'Far funzionare la luce o un apparecchio.',
    [
      'to switch on, to turn on',
      'encender',
      'allumer',
      'zapnout, rozsvítit',
      'włączać, zapalać',
      'açmak (ışık, cihaz)',
      'einschalten, anmachen',
      'つける、点ける',
    ],
    ['Accendi la luce, non vedo niente.', 'Accendo il forno a 180 gradi.', 'Chi ha acceso la televisione?'],
    'a woman switching on a table lamp in a dark room, the lamp glowing brightly',
    ['spegnere']
  ),
  hv(
    'spegnere',
    'spegnere',
    'Far smettere di funzionare la luce o un apparecchio.',
    [
      'to switch off, to turn off',
      'apagar',
      'éteindre',
      'vypnout, zhasnout',
      'wyłączać, gasić',
      'kapatmak (ışık, cihaz)',
      'ausschalten, ausmachen',
      '消す',
    ],
    ['Spegni la luce quando esci.', 'Ho spento il telefono.', 'Spegni la televisione e vieni a tavola!'],
    'a man pointing a remote control at a television, the screen black and switched off',
    ['accendere']
  ),

  // --- la giornata ---------------------------------------------------------------------------
  hv(
    'svegliarsi',
    'svegliarsi',
    'Smettere di dormire.',
    ['to wake up', 'despertarse', 'se réveiller', 'probudit se', 'budzić się', 'uyanmak', 'aufwachen', '目を覚ます'],
    ['Mi sveglio alle sette.', 'Stamattina mi sono svegliato tardi.', 'A che ora ti svegli?'],
    'a woman in bed just waking up, stretching her arms and yawning, an alarm clock on the bedside table',
    ['alzarsi']
  ),
  hv(
    'alzarsi',
    'alzarsi',
    'Uscire dal letto; mettersi in piedi.',
    ['to get up', 'levantarse', 'se lever', 'vstát', 'wstawać', 'kalkmak', 'aufstehen', '起きる、立ち上がる'],
    ['Mi alzo subito dopo la sveglia.', 'La domenica ci alziamo tardi.', 'Alzati, è ora di andare a scuola!'],
    'a man in pyjamas sitting up and putting his feet on the floor to get out of bed',
    ['svegliarsi']
  ),
  hv(
    'vestirsi',
    'vestirsi',
    'Mettersi i vestiti.',
    ['to get dressed', 'vestirse', 's’habiller', 'obléct se', 'ubierać się', 'giyinmek', 'sich anziehen', '服を着る'],
    ['Mi vesto ed esco.', 'I bambini si vestono da soli.', 'Vestiti, siamo in ritardo!'],
    'a boy of about seven putting on a sweater in front of an open wardrobe'
  ),
  hv(
    'fare-la-doccia',
    'fare la doccia',
    'Lavarsi sotto la doccia.',
    [
      'to have (take) a shower',
      'ducharse',
      'prendre une douche',
      'osprchovat se',
      'brać prysznic',
      'duş almak',
      'duschen',
      'シャワーを浴びる',
    ],
    ['Faccio la doccia la mattina.', 'Dopo la corsa faccio la doccia.', 'Non c’è acqua calda per la doccia.'],
    'a man behind a frosted glass shower screen, only his head and shoulders visible, water spraying from the shower head'
  ),
  hv(
    'fare-il-bagno',
    'fare il bagno',
    'Lavarsi nella vasca; anche nuotare al mare.',
    [
      'to have (take) a bath; to go for a swim',
      'bañarse',
      'prendre un bain ; se baigner',
      'vykoupat se',
      'kąpać się',
      'banyo yapmak; denize girmek',
      'baden',
      'お風呂に入る、泳ぐ',
    ],
    ['La sera il bambino fa il bagno.', 'Faccio il bagno con la schiuma.', 'D’estate facciamo il bagno al mare.'],
    'a small child sitting in a bathtub full of foam, playing with a yellow rubber duck'
  ),
  hv(
    'fare-colazione',
    'fare colazione',
    'Mangiare la mattina, il primo pasto del giorno.',
    [
      'to have breakfast',
      'desayunar',
      'prendre le petit-déjeuner',
      'snídat',
      'jeść śniadanie',
      'kahvaltı yapmak',
      'frühstücken',
      '朝ごはんを食べる',
    ],
    ['Faccio colazione con un caffè e una brioche.', 'Facciamo colazione insieme?', 'Non ho fatto colazione.'],
    'a family of three at a kitchen table having breakfast with coffee, orange juice, bread and jam, fruit'
  ),
  hv(
    'riposarsi',
    'riposarsi',
    'Fermarsi e stare tranquilli per recuperare le forze.',
    ['to rest', 'descansar', 'se reposer', 'odpočívat', 'odpoczywać', 'dinlenmek', 'sich ausruhen', '休む'],
    ['Dopo pranzo mi riposo un po’.', 'Sei stanco: riposati!', 'La domenica mi riposo.'],
    'an elderly man relaxing on a sofa with his feet up and eyes closed, a cup of tea on the table'
  ),
  hv(
    'guardare-la-televisione',
    'guardare la televisione',
    'Stare davanti alla televisione per vedere un programma.',
    [
      'to watch television',
      'ver la televisión',
      'regarder la télévision',
      'dívat se na televizi',
      'oglądać telewizję',
      'televizyon izlemek',
      'fernsehen',
      'テレビを見る',
    ],
    ['La sera guardiamo la televisione.', 'Non guardare la televisione mentre mangi!', 'Cosa guardi alla televisione?'],
    'two children sitting on a sofa watching a television, holding a remote control',
    ['riposarsi']
  ),
  hv(
    'andare-a-letto',
    'andare a letto',
    'Mettersi nel letto per dormire.',
    [
      'to go to bed',
      'irse a la cama, acostarse',
      'aller se coucher',
      'jít spát',
      'iść spać, kłaść się',
      'yatmak',
      'ins Bett gehen',
      '寝る、床につく',
    ],
    ['Vado a letto a mezzanotte.', 'Bambini, a letto!', 'Ieri sono andato a letto presto.'],
    'a girl in pyjamas climbing into bed and pulling up the blanket, a teddy bear on the pillow',
    ['dormire']
  ),
  hv(
    'dormire',
    'dormire',
    'Riposare con gli occhi chiusi, di notte o nel letto.',
    ['to sleep', 'dormir', 'dormir', 'spát', 'spać', 'uyumak', 'schlafen', '眠る'],
    ['Stanotte ho dormito male.', 'Il bambino dorme nella sua camera.', 'Quante ore dormi?'],
    'a man sleeping peacefully in bed under a blanket, head on the pillow, eyes closed',
    ['andare-a-letto', 'riposarsi']
  ),
];

export const houseVerbTranslationExercises = [
  tr(
    'Tu cucini e io lavo i piatti.',
    'You cook and I’ll do the dishes.',
    'Tú cocinas y yo friego los platos.',
    'Tu cuisines et moi, je fais la vaisselle.',
    'Ty vaříš a já umyju nádobí.',
    'Ty gotujesz, a ja zmywam naczynia.',
    'Sen yemek yap, ben bulaşıkları yıkayayım.',
    'Du kochst und ich spüle ab.',
    'あなたが料理して、私が皿を洗います。'
  ),
  tr(
    'Puoi apparecchiare la tavola, per favore?',
    'Can you set the table, please?',
    '¿Puedes poner la mesa, por favor?',
    'Tu peux mettre la table, s’il te plaît ?',
    'Můžeš prosím prostřít stůl?',
    'Możesz nakryć do stołu?',
    'Sofrayı kurar mısın lütfen?',
    'Kannst du bitte den Tisch decken?',
    '食卓の用意をしてくれる？'
  ),
  tr(
    'Ogni mattina mi sveglio alle sette e faccio colazione.',
    'Every morning I wake up at seven and have breakfast.',
    'Todas las mañanas me despierto a las siete y desayuno.',
    'Tous les matins, je me réveille à sept heures et je prends le petit-déjeuner.',
    'Každé ráno se probudím v sedm a nasnídám se.',
    'Codziennie rano budzę się o siódmej i jem śniadanie.',
    'Her sabah yedide uyanıyorum ve kahvaltı yapıyorum.',
    'Jeden Morgen wache ich um sieben auf und frühstücke.',
    '毎朝7時に起きて、朝ごはんを食べます。'
  ),
  tr(
    'Spegni la luce quando esci.',
    'Turn off the light when you go out.',
    'Apaga la luz cuando salgas.',
    'Éteins la lumière quand tu sors.',
    'Zhasni světlo, až budeš odcházet.',
    'Zgaś światło, kiedy wychodzisz.',
    'Çıkarken ışığı kapat.',
    'Mach das Licht aus, wenn du rausgehst.',
    '出かけるときは電気を消してね。'
  ),
  tr(
    'Il sabato puliamo la casa e facciamo il bucato.',
    'On Saturdays we clean the house and do the laundry.',
    'Los sábados limpiamos la casa y hacemos la colada.',
    'Le samedi, nous faisons le ménage et la lessive.',
    'V sobotu uklízíme a pereme prádlo.',
    'W soboty sprzątamy dom i robimy pranie.',
    'Cumartesileri evi temizliyor ve çamaşır yıkıyoruz.',
    'Samstags putzen wir das Haus und waschen Wäsche.',
    '土曜日は家を掃除して、洗濯をします。'
  ),
  tr(
    'Riordina la tua camera e fai il letto!',
    'Tidy your room and make your bed!',
    '¡Ordena tu habitación y haz la cama!',
    'Range ta chambre et fais ton lit !',
    'Ukliď si pokoj a ustel si postel!',
    'Posprzątaj swój pokój i pościel łóżko!',
    'Odanı topla ve yatağını düzelt!',
    'Räum dein Zimmer auf und mach dein Bett!',
    '部屋を片づけて、ベッドを整えなさい！'
  ),
  tr(
    'Hai chiuso a chiave la porta?',
    'Did you lock the door?',
    '¿Has cerrado la puerta con llave?',
    'Tu as fermé la porte à clé ?',
    'Zamkl jsi dveře na klíč?',
    'Zamknąłeś drzwi na klucz?',
    'Kapıyı kilitledin mi?',
    'Hast du die Tür abgeschlossen?',
    'ドアに鍵をかけた？'
  ),
  tr(
    'Abitiamo al terzo piano e saliamo sempre a piedi.',
    'We live on the third floor and always walk up.',
    'Vivimos en el tercer piso y siempre subimos a pie.',
    'Nous habitons au troisième étage et nous montons toujours à pied.',
    'Bydlíme ve třetím patře a vždycky chodíme nahoru pěšky.',
    'Mieszkamy na trzecim piętrze i zawsze wchodzimy pieszo.',
    'Üçüncü katta oturuyoruz ve hep yürüyerek çıkıyoruz.',
    'Wir wohnen im dritten Stock und gehen immer zu Fuß hinauf.',
    '私たちは4階に住んでいて、いつも歩いて上がります。'
  ),
  tr(
    'Dopo cena guardiamo la televisione e poi andiamo a letto.',
    'After dinner we watch television and then go to bed.',
    'Después de cenar vemos la televisión y luego nos vamos a la cama.',
    'Après le dîner, nous regardons la télévision, puis nous allons nous coucher.',
    'Po večeři se díváme na televizi a pak jdeme spát.',
    'Po kolacji oglądamy telewizję, a potem idziemy spać.',
    'Akşam yemeğinden sonra televizyon izliyoruz, sonra yatıyoruz.',
    'Nach dem Abendessen sehen wir fern und dann gehen wir ins Bett.',
    '夕食のあとテレビを見て、それから寝ます。'
  ),
  tr(
    'A maggio traslochiamo in una casa più grande.',
    'In May we’re moving to a bigger house.',
    'En mayo nos mudamos a una casa más grande.',
    'En mai, nous déménageons dans une maison plus grande.',
    'V květnu se stěhujeme do většího domu.',
    'W maju przeprowadzamy się do większego domu.',
    'Mayısta daha büyük bir eve taşınıyoruz.',
    'Im Mai ziehen wir in ein größeres Haus um.',
    '5月にもっと大きな家に引っ越します。'
  ),
];

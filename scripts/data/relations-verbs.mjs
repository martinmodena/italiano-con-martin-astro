// I verbi della lezione «I verbi delle relazioni» (2026-09-26).
//
// Richiesta di Martin: una scheda con i verbi dei rapporti fra le persone (sposarsi, rispettare, obbedire,
// avere figli, amare, regalare...), sul modello delle altre lezioni sui verbi.
//
// L'esercizio e' al contrario rispetto alle altre lezioni con trascinamento: ogni riga e' una FOTO (quella
// della scheda del verbo) e nella barra ci sono i VERBI scritti. Per ogni foto e' giusto il suo verbo e
// anche gli altri che la descrivono bene (`fits`): sulla foto di «consolare» vanno bene anche «abbracciare»
// e «voler bene» (Martin: «piu' di un verbo per foto»). Basta trovarne uno.
//
// Ogni voce:
//   image     percorso in public/assets/vocabolario/ senza estensione: relazioni/<slug>, oppure una foto gia'
//             fatta per «I verbi del corpo» (verbi-corpo/<slug>), riusata per risparmiare
//   word      il verbo, con quello che serve per usarlo (prendersi cura di, fare pace): resta in italiano
//   gloss     il verbo tradotto (in italiano: una breve definizione)
//   examples  tre frasi d'esempio in italiano, con il verbo coniugato
//   subject   la scena da fotografare (in inglese), per le foto nuove
//   matches   i verbi giusti per la foto: il verbo stesso piu' `fits`
//
// Foto REALISTICHE con gpt-image-1-mini a qualita' `low` (Martin, 2026-09-26: spendere poco).

import { tr } from './traits-base.mjs';

const LANG_ORDER = ['it', 'en', 'es', 'fr', 'cs', 'pl', 'tr', 'de', 'ja'];

const rv = (slug, word, def, glosses, examples, scene, fits = []) => {
  if (glosses.length !== 8) throw new Error(`«${slug}»: servono 8 traduzioni`);
  if (examples.length !== 3) throw new Error(`«${slug}»: servono tre frasi d'esempio`);
  const reuse = scene.startsWith('verbi-corpo/');
  return {
    image: reuse ? scene : `relazioni/${slug}`,
    slug,
    word,
    bare: word,
    examples,
    subject: reuse ? null : scene,
    matches: [slug, ...fits],
    never: [],
    noMatch: false,
    gloss: Object.fromEntries(LANG_ORDER.map((lang, i) => [lang, i === 0 ? def : glosses[i - 1]])),
  };
};

export const relationVerbs = [
  // --- amore e coppia ---------------------------------------------------------------------
  rv(
    'amare',
    'amare',
    'Provare un grande amore per qualcuno.',
    ['to love', 'amar', 'aimer', 'milovat', 'kochać', 'sevmek', 'lieben', '愛する'],
    ['Ti amo!', 'Paolo ama Lucia da quarant’anni.', 'I genitori amano i loro figli.'],
    'an elderly couple of about 75 sitting close together on a park bench, holding hands and looking at each other lovingly',
    ['voler-bene']
  ),
  rv(
    'voler-bene',
    'voler bene',
    'Provare affetto per qualcuno: si dice ad amici, genitori, figli.',
    [
      'to love, to care about (family, friends)',
      'querer (a alguien)',
      'aimer bien, aimer (famille, amis)',
      'mít rád',
      'kochać, lubić (rodzinę, przyjaciół)',
      'sevmek (aile, arkadaş)',
      'lieb haben, gern haben',
      '大切に思う、好きだ（家族・友だち）',
    ],
    ['Ti voglio bene, mamma.', 'Voglio molto bene ai miei amici.', 'I nonni vogliono bene ai nipoti.'],
    'a mother kneeling and hugging her small daughter warmly, both smiling with closed eyes',
    ['amare', 'abbracciare', 'coccolare']
  ),
  rv(
    'innamorarsi',
    'innamorarsi',
    'Cominciare ad amare qualcuno.',
    [
      'to fall in love',
      'enamorarse',
      'tomber amoureux',
      'zamilovat se',
      'zakochać się',
      'aşık olmak',
      'sich verlieben',
      '恋に落ちる',
    ],
    ['Mi sono innamorato di Giulia a prima vista.', 'Si sono innamorati in vacanza.', 'Ti sei mai innamorata?'],
    'a young man and a young woman sitting at a small café table, gazing at each other with shy smiles, a small red paper heart on the table',
    ['amare', 'chiacchierare']
  ),
  rv(
    'fidanzarsi',
    'fidanzarsi',
    'Promettere di sposarsi.',
    [
      'to get engaged',
      'prometerse, comprometerse',
      'se fiancer',
      'zasnoubit se',
      'zaręczyć się',
      'nişanlanmak',
      'sich verloben',
      '婚約する',
    ],
    [
      'Marco e Giulia si sono fidanzati a Natale.',
      'Ci fidanziamo e l’anno prossimo ci sposiamo.',
      'Si è fidanzata con un ragazzo spagnolo.',
    ],
    'a young man kneeling on one knee and offering an open ring box with an engagement ring to a surprised happy young woman who covers her mouth with her hands',
    ['amare', 'promettere', 'sorprendere']
  ),
  rv(
    'sposarsi',
    'sposarsi',
    'Diventare marito e moglie.',
    [
      'to get married',
      'casarse',
      'se marier',
      'vzít se, oženit se, vdát se',
      'pobrać się, wziąć ślub',
      'evlenmek',
      'heiraten',
      '結婚する',
    ],
    ['Anna e Luca si sposano a giugno.', 'Mi sono sposato dieci anni fa.', 'Vuoi sposarmi?'],
    'a bride in a white wedding dress and a groom in a dark suit exchanging wedding rings, smiling',
    ['amare', 'promettere', 'festeggiare']
  ),
  rv(
    'baciare',
    'baciare',
    'Toccare qualcuno con le labbra per affetto.',
    ['to kiss', 'besar', 'embrasser', 'políbit', 'całować', 'öpmek', 'küssen', 'キスする'],
    ['La mamma bacia il bambino.', 'In Italia ci si bacia sulle guance per salutarsi.', 'Mi ha baciato sulla fronte.'],
    'verbi-corpo/baciare',
    ['voler-bene', 'salutare']
  ),
  rv(
    'abbracciare',
    'abbracciare',
    'Stringere qualcuno tra le braccia.',
    ['to hug', 'abrazar', 'serrer dans ses bras', 'obejmout', 'przytulić', 'sarılmak', 'umarmen', '抱きしめる'],
    ['Abbraccio mio fratello all’aeroporto.', 'Gli amici si abbracciano dopo tanto tempo.', 'Vieni qui, ti abbraccio!'],
    'verbi-corpo/abbracciare',
    ['voler-bene', 'salutare', 'fare-pace']
  ),
  rv(
    'lasciarsi',
    'lasciarsi',
    'Finire una storia d’amore.',
    [
      'to break up',
      'dejarlo, separarse',
      'se quitter, rompre',
      'rozejít se',
      'rozstać się',
      'ayrılmak',
      'sich trennen',
      '別れる',
    ],
    ['Marta e Paolo si sono lasciati.', 'Mi ha lasciato per un’altra.', 'Ci siamo lasciati da amici.'],
    'a sad young couple standing back to back with arms crossed, not looking at each other, the woman holding a small suitcase',
    ['litigare', 'divorziare', 'arrabbiarsi']
  ),
  rv(
    'divorziare',
    'divorziare',
    'Finire il matrimonio davanti alla legge.',
    [
      'to get divorced',
      'divorciarse',
      'divorcer',
      'rozvést se',
      'rozwieść się',
      'boşanmak',
      'sich scheiden lassen',
      '離婚する',
    ],
    [
      'I miei genitori hanno divorziato quando ero piccolo.',
      'Hanno deciso di divorziare.',
      'In Italia si può divorziare dal 1970.',
    ],
    'a serious man and woman sitting at opposite ends of a table with legal papers in front of them, a wedding ring lying on the papers, not looking at each other',
    ['lasciarsi']
  ),
  rv(
    'litigare',
    'litigare',
    'Discutere in modo arrabbiato con qualcuno.',
    [
      'to argue, to quarrel',
      'discutir, pelearse',
      'se disputer',
      'hádat se',
      'kłócić się',
      'kavga etmek, tartışmak',
      'streiten',
      'けんかする、言い争う',
    ],
    ['I bambini litigano per un giocattolo.', 'Ho litigato con il mio capo.', 'Non litighiamo, per favore!'],
    'a man and a woman arguing face to face, both gesturing angrily with their hands',
    ['arrabbiarsi']
  ),
  rv(
    'fare-pace',
    'fare pace',
    'Tornare amici dopo un litigio.',
    [
      'to make up, to make peace',
      'hacer las paces',
      'se réconcilier, faire la paix',
      'usmířit se',
      'pogodzić się',
      'barışmak',
      'sich versöhnen',
      '仲直りする',
    ],
    ['Dopo il litigio abbiamo fatto pace.', 'Fate pace, dai!', 'Le due sorelle fanno sempre pace subito.'],
    'two children of about 8 who have just argued shaking hands and smiling shyly, making up',
    ['perdonare', 'chiedere-scusa']
  ),
  rv(
    'perdonare',
    'perdonare',
    'Non essere più arrabbiati con chi ha sbagliato.',
    ['to forgive', 'perdonar', 'pardonner', 'odpustit', 'wybaczyć', 'affetmek', 'verzeihen', '許す'],
    ['Ti perdono, ma non farlo più.', 'La nonna perdona sempre i nipoti.', 'Non riesco a perdonarlo.'],
    'a young woman smiling kindly and putting her hand on the shoulder of a sorry-looking friend who looks down with his hands together',
    ['fare-pace', 'chiedere-scusa']
  ),
  rv(
    'fidarsi',
    'fidarsi (di)',
    'Credere che qualcuno è onesto e non ci farà del male.',
    [
      'to trust',
      'confiar (en)',
      'faire confiance (à)',
      'věřit, důvěřovat',
      'ufać',
      'güvenmek',
      'vertrauen',
      '信頼する',
    ],
    ['Mi fido di te.', 'Non fidarti degli sconosciuti.', 'È una persona di cui ci si può fidare.'],
    'a young woman with closed eyes and arms crossed on her chest leaning backwards stiffly, a friend standing right behind her catching her by the shoulders with both hands, a trust exercise, both smiling',
    ['aiutare']
  ),
  rv(
    'promettere',
    'promettere',
    'Dire che faremo sicuramente una cosa.',
    ['to promise', 'prometer', 'promettre', 'slíbit', 'obiecać', 'söz vermek', 'versprechen', '約束する'],
    ['Ti prometto che torno presto.', 'Mi hai promesso di aiutarmi!', 'Il papà promette un gelato ai bambini.'],
    'close-up of two children’s hands making a pinky promise, little fingers hooked together, the two smiling children visible',
    ['fare-amicizia']
  ),

  // --- famiglia ---------------------------------------------------------------------------
  rv(
    'avere-figli',
    'avere figli',
    'Diventare genitori.',
    [
      'to have children',
      'tener hijos',
      'avoir des enfants',
      'mít děti',
      'mieć dzieci',
      'çocuk sahibi olmak',
      'Kinder haben',
      '子どもを持つ',
    ],
    ['Vogliamo avere due figli.', 'Hanno avuto un figlio l’anno scorso.', 'Hai figli?'],
    'a happy young couple holding their newborn baby wrapped in a white blanket, looking down at the baby',
    ['amare', 'voler-bene', 'prendersi-cura']
  ),
  rv(
    'prendersi-cura',
    'prendersi cura (di)',
    'Occuparsi di qualcuno che ha bisogno.',
    [
      'to take care (of)',
      'cuidar (de)',
      's’occuper (de), prendre soin (de)',
      'starat se (o)',
      'opiekować się',
      'bakmak, ilgilenmek',
      'sich kümmern (um)',
      '世話をする',
    ],
    [
      'Mi prendo cura di mia nonna.',
      'Chi si prende cura del gatto quando sei via?',
      'Gli infermieri si prendono cura dei malati.',
    ],
    'a young woman helping an elderly man walk, holding his arm, the man using a walking cane',
    ['aiutare', 'voler-bene', 'rispettare']
  ),
  rv(
    'coccolare',
    'coccolare',
    'Trattare qualcuno con tenerezza, con carezze e abbracci.',
    [
      'to cuddle, to pamper',
      'mimar',
      'câliner, dorloter',
      'mazlit',
      'przytulać, rozpieszczać',
      'şımartmak, sevip okşamak',
      'kuscheln, verwöhnen',
      '甘やかす、かわいがる',
    ],
    ['Il papà coccola la bambina.', 'Mi piace essere coccolato quando sono malato.', 'La nonna ci coccola sempre.'],
    'a father sitting on a sofa cuddling a smiling baby against his chest',
    ['voler-bene', 'abbracciare', 'prendersi-cura']
  ),
  rv(
    'sgridare',
    'sgridare',
    'Parlare in modo severo a qualcuno che ha sbagliato.',
    [
      'to scold, to tell off',
      'regañar',
      'gronder',
      'vynadat, pokárat',
      'skrzyczeć, zganić',
      'azarlamak',
      'schimpfen, ausschimpfen',
      '叱る',
    ],
    ['La mamma sgrida il bambino.', 'Il professore mi ha sgridato perché ero in ritardo.', 'Non sgridarlo, è piccolo!'],
    'a mother with a stern face pointing her finger at a small boy who looks down guiltily next to a broken vase',
    ['arrabbiarsi']
  ),
  rv(
    'obbedire',
    'obbedire',
    'Fare quello che ci dicono i genitori, gli insegnanti, le regole.',
    [
      'to obey',
      'obedecer',
      'obéir',
      'poslouchat, uposlechnout',
      'słuchać, być posłusznym',
      'itaat etmek, söz dinlemek',
      'gehorchen',
      '従う、言うことを聞く',
    ],
    ['I bambini obbediscono alla maestra.', 'Obbedisci alla mamma!', 'Non sempre obbedisco alle regole.'],
    'a small girl putting her toys into a toy box while her father points to the box, the girl nodding',
    ['aiutare', 'rispettare']
  ),
  rv(
    'somigliare',
    'somigliare (a)',
    'Essere simile a qualcuno, nell’aspetto o nel carattere.',
    [
      'to look like, to resemble',
      'parecerse (a)',
      'ressembler (à)',
      'podobat se',
      'być podobnym (do)',
      'benzemek',
      'ähneln, ähnlich sehen',
      '似ている',
    ],
    ['Tommaso somiglia molto a suo padre.', 'A chi somigli, alla mamma o al papà?', 'Le due sorelle si somigliano.'],
    'a father and his son of about 8 standing side by side, both with the same curly red hair, the same round glasses and the same striped t-shirt, smiling the same way'
  ),
  rv(
    'rispettare',
    'rispettare',
    'Trattare qualcuno con attenzione e considerazione.',
    [
      'to respect',
      'respetar',
      'respecter',
      'respektovat',
      'szanować',
      'saygı göstermek',
      'respektieren, achten',
      '尊重する、敬う',
    ],
    ['Bisogna rispettare gli anziani.', 'Rispetto le tue idee.', 'Il ragazzo rispetta le regole.'],
    'on a city bus a teenage boy standing up and politely offering his seat to an elderly woman with a shopping bag',
    ['aiutare', 'prendersi-cura']
  ),

  // --- incontri e gentilezza --------------------------------------------------------------
  rv(
    'salutare',
    'salutare',
    'Dire ciao, buongiorno o arrivederci.',
    [
      'to greet, to say hello / goodbye',
      'saludar',
      'saluer, dire bonjour',
      'pozdravit',
      'przywitać się, pożegnać się',
      'selam vermek, selamlaşmak',
      'grüßen',
      '挨拶する',
    ],
    ['Saluto i vicini quando esco.', 'Salutami tua sorella!', 'Ci siamo salutati alla stazione.'],
    'verbi-corpo/salutare-con-la-mano'
  ),
  rv(
    'presentare',
    'presentare',
    'Far conoscere una persona a un’altra.',
    [
      'to introduce (someone)',
      'presentar',
      'présenter',
      'představit',
      'przedstawić',
      'tanıştırmak',
      'vorstellen',
      '紹介する',
    ],
    ['Ti presento mio marito, Marco.', 'Mi ha presentato i suoi genitori.', 'Posso presentarti una collega?'],
    'a smiling woman standing between two people and gesturing with an open hand towards a man, introducing him to her female friend',
    ['conoscersi']
  ),
  rv(
    'conoscersi',
    'conoscersi',
    'Incontrarsi per la prima volta.',
    [
      'to meet (for the first time), to get to know each other',
      'conocerse',
      'faire connaissance, se rencontrer',
      'seznámit se',
      'poznać się',
      'tanışmak',
      'sich kennenlernen',
      '知り合う',
    ],
    ['Ci siamo conosciuti all’università.', 'Piacere di conoscerti!', 'Dove vi siete conosciuti?'],
    'two young adults at a party meeting for the first time, shaking hands and smiling, each holding a glass of orange juice',
    ['stringere-la-mano', 'salutare', 'fare-amicizia']
  ),
  rv(
    'stringere-la-mano',
    'stringere la mano',
    'Prendere la mano di qualcuno per salutarlo o fare un accordo.',
    [
      'to shake hands',
      'dar la mano',
      'serrer la main',
      'podat si ruku',
      'uścisnąć dłoń',
      'el sıkışmak',
      'die Hand geben',
      '握手する',
    ],
    [
      'Il direttore mi ha stretto la mano.',
      'Ci stringiamo la mano e facciamo pace.',
      'In Italia si stringe la mano quando ci si presenta.',
    ],
    'verbi-corpo/stringere-la-mano',
    ['salutare', 'conoscersi', 'fare-pace']
  ),
  rv(
    'invitare',
    'invitare',
    'Chiedere a qualcuno di venire a una festa, a cena, a casa.',
    ['to invite', 'invitar', 'inviter', 'pozvat', 'zaprosić', 'davet etmek', 'einladen', '招待する'],
    ['Ti invito alla mia festa di compleanno.', 'Ci hanno invitato a cena.', 'Chi inviti al matrimonio?'],
    'a smiling young woman handing a colourful envelope with an invitation card to a happy friend, balloons drawn on the envelope, no text'
  ),
  rv(
    'festeggiare',
    'festeggiare',
    'Fare una festa per un giorno speciale.',
    [
      'to celebrate',
      'celebrar, festejar',
      'fêter, célébrer',
      'slavit, oslavovat',
      'świętować',
      'kutlamak',
      'feiern',
      '祝う',
    ],
    ['Festeggiamo il compleanno della nonna.', 'Come festeggi il Capodanno?', 'Abbiamo festeggiato la laurea di Anna.'],
    'a family around a table with a fruit birthday cake with lit candles, wearing party hats, clapping and laughing',
    ['sorprendere']
  ),
  rv(
    'regalare',
    'regalare',
    'Dare qualcosa a qualcuno come regalo.',
    [
      'to give (as a present)',
      'regalar',
      'offrir (un cadeau)',
      'darovat',
      'podarować',
      'hediye etmek',
      'schenken',
      '贈る、プレゼントする',
    ],
    ['Ti regalo un libro.', 'Cosa regali alla mamma per il compleanno?', 'Mi hanno regalato una bicicletta.'],
    'a man giving a wrapped gift box with a big red ribbon to a delighted woman',
    ['sorprendere']
  ),
  rv(
    'ringraziare',
    'ringraziare',
    'Dire grazie.',
    [
      'to thank',
      'agradecer, dar las gracias',
      'remercier',
      'poděkovat',
      'dziękować',
      'teşekkür etmek',
      'danken, sich bedanken',
      '感謝する、お礼を言う',
    ],
    ['Ti ringrazio per l’aiuto.', 'Ho ringraziato il vicino per i fiori.', 'Ringrazia la nonna!'],
    'a grateful woman with her hand on her heart thanking a man who has just picked up and handed her the bag she had dropped'
  ),
  rv(
    'chiedere-scusa',
    'chiedere scusa',
    'Dire che ci dispiace per un errore.',
    [
      'to apologise, to say sorry',
      'pedir perdón, disculparse',
      's’excuser, demander pardon',
      'omluvit se',
      'przeprosić',
      'özür dilemek',
      'sich entschuldigen',
      '謝る',
    ],
    ['Ti chiedo scusa per il ritardo.', 'Chiedi scusa a tua sorella!', 'Mi ha chiesto scusa e l’ho perdonato.'],
    'a boy of about 10 with his hands pressed together apologising to a girl who stands with her arms crossed, looking offended'
  ),
  rv(
    'aiutare',
    'aiutare',
    'Fare qualcosa per qualcuno che ne ha bisogno.',
    ['to help', 'ayudar', 'aider', 'pomoct', 'pomagać', 'yardım etmek', 'helfen', '手伝う、助ける'],
    ['Mi aiuti a portare la valigia?', 'Aiuto il mio vicino a traslocare.', 'Gli amici si aiutano.'],
    'a young man helping his elderly neighbour carry heavy cardboard boxes up the front steps of a house'
  ),
  rv(
    'consolare',
    'consolare',
    'Aiutare chi è triste a stare meglio.',
    ['to comfort, to console', 'consolar', 'consoler', 'utěšit', 'pocieszyć', 'teselli etmek', 'trösten', '慰める'],
    ['Consolo la mia amica che piange.', 'Il papà consola il bambino caduto.', 'Nessuno riusciva a consolarla.'],
    'a young woman comforting her crying friend, her arm around her shoulders, handing her a tissue',
    ['abbracciare', 'voler-bene', 'aiutare']
  ),
  rv(
    'prestare',
    'prestare',
    'Dare una cosa che poi ci verrà restituita.',
    ['to lend', 'prestar', 'prêter', 'půjčit', 'pożyczyć (komuś)', 'ödünç vermek', 'leihen, ausleihen', '貸す'],
    ['Mi presti la penna?', 'Ho prestato la macchina a mio fratello.', 'Non presto mai i miei libri!'],
    'a university student handing a book to a classmate in a library, the classmate taking it gratefully',
    ['aiutare']
  ),
  rv(
    'condividere',
    'condividere',
    'Usare o mangiare una cosa insieme ad altri.',
    [
      'to share',
      'compartir',
      'partager',
      'sdílet, dělit se',
      'dzielić się',
      'paylaşmak',
      'teilen',
      '分け合う、共有する',
    ],
    ['Condivido l’appartamento con due amici.', 'I bambini condividono la merenda.', 'Condividi le foto con noi!'],
    'two small children sitting on a bench sharing a bag of apple slices, one offering a slice to the other'
  ),

  // --- parlare con gli altri ---------------------------------------------------------------
  rv(
    'chiacchierare',
    'chiacchierare',
    'Parlare di cose leggere, per piacere.',
    [
      'to chat',
      'charlar',
      'bavarder, discuter',
      'povídat si',
      'gawędzić, pogadać',
      'sohbet etmek',
      'plaudern',
      'おしゃべりする',
    ],
    [
      'Chiacchieriamo al bar ogni mattina.',
      'Le vicine chiacchierano sul pianerottolo.',
      'Smettete di chiacchierare in classe!',
    ],
    'two women friends sitting at a café table with cups of black coffee, chatting and laughing'
  ),
  rv(
    'spettegolare',
    'spettegolare',
    'Parlare degli altri alle loro spalle.',
    [
      'to gossip',
      'chismorrear, cotillear',
      'faire des commérages, cancaner',
      'drbat, pomlouvat',
      'plotkować',
      'dedikodu yapmak',
      'tratschen, klatschen',
      '噂話をする',
    ],
    ['Non mi piace spettegolare.', 'In ufficio si spettegola sempre del capo.', 'Le vicine spettegolano su tutti.'],
    'verbi-corpo/sussurrare',
    ['chiacchierare']
  ),
  rv(
    'telefonare',
    'telefonare',
    'Parlare con qualcuno al telefono.',
    [
      'to phone, to call',
      'llamar por teléfono',
      'téléphoner, appeler',
      'telefonovat, zavolat',
      'dzwonić',
      'telefon etmek, aramak',
      'telefonieren, anrufen',
      '電話する',
    ],
    ['Telefono alla nonna ogni domenica.', 'Ti telefono stasera.', 'Chi ha telefonato?'],
    'a smiling elderly woman sitting in an armchair talking on a smartphone',
    ['chiacchierare']
  ),
  rv(
    'fare-un-complimento',
    'fare un complimento',
    'Dire a qualcuno una cosa bella su di lui.',
    [
      'to pay a compliment',
      'hacer un cumplido',
      'faire un compliment',
      'složit poklonu',
      'powiedzieć komplement',
      'iltifat etmek',
      'ein Kompliment machen',
      '褒める',
    ],
    ['Mi ha fatto un complimento per il vestito.', 'Fai sempre complimenti alla cuoca!', 'Grazie del complimento!'],
    'a woman giving a thumbs up and admiring the new colourful dress of her friend, who blushes and smiles'
  ),

  // --- amici e compagni -------------------------------------------------------------------
  rv(
    'fare-amicizia',
    'fare amicizia',
    'Diventare amici.',
    [
      'to make friends',
      'hacer amigos',
      'se faire des amis, sympathiser',
      'spřátelit se',
      'zaprzyjaźnić się',
      'arkadaş olmak',
      'Freundschaft schließen',
      '友だちになる',
    ],
    [
      'I bambini fanno amicizia al parco.',
      'In Italia ho fatto amicizia con molte persone.',
      'È facile fare amicizia con lui.',
    ],
    'at a playground a boy offering a ball to a shy girl he has just met, both starting to smile',
    ['conoscersi']
  ),
  rv(
    'prendere-in-giro',
    'prendere in giro',
    'Ridere di qualcuno per farlo sentire male o per scherzo.',
    [
      'to tease, to make fun of',
      'burlarse (de), tomar el pelo',
      'se moquer (de)',
      'dělat si legraci, posmívat se',
      'naśmiewać się, drażnić',
      'dalga geçmek',
      'sich lustig machen, auf den Arm nehmen',
      'からかう',
    ],
    ['Non prendere in giro tuo fratello!', 'Mi prendi in giro?', 'A scuola lo prendevano in giro per gli occhiali.'],
    'a boy of about 9 laughing, pointing his finger at his older sister and sticking out his tongue, while she stands with hands on hips looking annoyed',
    ['dare-fastidio']
  ),
  rv(
    'dare-fastidio',
    'dare fastidio',
    'Disturbare qualcuno.',
    [
      'to bother, to annoy',
      'molestar, fastidiar',
      'déranger, embêter',
      'obtěžovat, otravovat',
      'przeszkadzać, dokuczać',
      'rahatsız etmek',
      'stören, nerven',
      '邪魔する、迷惑をかける',
    ],
    ['Il rumore mi dà fastidio.', 'Smettila di darmi fastidio!', 'Ti do fastidio se accendo la radio?'],
    'a little boy poking his older sister with a pencil while she tries to read a book on the sofa, she looks annoyed',
    ['prendere-in-giro']
  ),
  rv(
    'arrabbiarsi',
    'arrabbiarsi',
    'Diventare molto nervosi con qualcuno.',
    [
      'to get angry',
      'enfadarse',
      'se fâcher, se mettre en colère',
      'rozzlobit se',
      'zdenerwować się, złościć się',
      'kızmak, sinirlenmek',
      'sich ärgern, wütend werden',
      '怒る',
    ],
    ['Mio padre si arrabbia se torno tardi.', 'Non arrabbiarti, era uno scherzo!', 'La maestra si è arrabbiata.'],
    'a furious man shouting with an open mouth, red face, frowning, clenched fists raised, clearly very angry, full body',
    ['litigare']
  ),
  rv(
    'ignorare',
    'ignorare',
    'Fare finta di non vedere o non sentire qualcuno.',
    ['to ignore', 'ignorar', 'ignorer', 'ignorovat', 'ignorować', 'görmezden gelmek', 'ignorieren', '無視する'],
    ['Perché mi ignori?', 'Ha ignorato il mio messaggio.', 'Non ignorare i consigli della nonna.'],
    'a young woman staring at her phone and turning her back on a man who is talking to her and waving his hand'
  ),
  rv(
    'insegnare',
    'insegnare',
    'Aiutare qualcuno a imparare una cosa.',
    [
      'to teach',
      'enseñar',
      'enseigner, apprendre (à quelqu’un)',
      'učit',
      'uczyć',
      'öğretmek',
      'beibringen, lehren',
      '教える',
    ],
    [
      'Il nonno mi ha insegnato ad andare in bici.',
      'Insegno italiano agli stranieri.',
      'Chi ti ha insegnato a cucinare?',
    ],
    'a grandfather running behind a small grandson on a bicycle, holding the seat and teaching him to ride',
    ['aiutare', 'prendersi-cura']
  ),
  rv(
    'sorprendere',
    'sorprendere',
    'Fare una cosa che l’altro non si aspetta.',
    [
      'to surprise',
      'sorprender',
      'surprendre',
      'překvapit',
      'zaskoczyć, zrobić niespodziankę',
      'sürpriz yapmak, şaşırtmak',
      'überraschen',
      '驚かせる',
    ],
    [
      'Voglio sorprendere Giulia con una festa.',
      'Mi hai proprio sorpreso!',
      'Gli amici l’hanno sorpresa alla stazione.',
    ],
    'a group of friends jumping out with colourful balloons and confetti to surprise a woman who is entering the room, her hands on her cheeks in amazement, no text',
    ['festeggiare']
  ),
  rv(
    'andare-a-trovare',
    'andare a trovare',
    'Andare a casa di qualcuno per stare un po’ con lui.',
    [
      'to visit (someone)',
      'ir a ver, visitar (a alguien)',
      'rendre visite (à)',
      'navštívit',
      'odwiedzić',
      'ziyaret etmek',
      'besuchen',
      '（人を）訪ねる',
    ],
    [
      'Domenica vado a trovare i nonni.',
      'Vieni a trovarmi quando vuoi!',
      'Siamo andati a trovare un amico in ospedale.',
    ],
    'a young family with a small child arriving at the front door of a grandmother’s house with a bunch of flowers, the grandmother opening the door happily',
    ['salutare', 'accogliere']
  ),
  rv(
    'accogliere',
    'accogliere',
    'Ricevere qualcuno con gentilezza.',
    [
      'to welcome',
      'acoger, recibir',
      'accueillir',
      'přivítat',
      'przyjąć, powitać',
      'karşılamak',
      'empfangen, aufnehmen',
      '迎える、歓迎する',
    ],
    [
      'La famiglia mi ha accolto come una figlia.',
      'Accogliamo gli ospiti con un sorriso.',
      'Siamo stati accolti benissimo.',
    ],
    'a smiling host standing at an open front door with open arms, welcoming two guests who arrive with a bottle of juice',
    ['salutare', 'invitare']
  ),
];

export const relationTranslationExercises = [
  tr(
    'Ti voglio bene.',
    'I love you. (to a friend or a family member)',
    'Te quiero.',
    'Je t’aime. (à un ami ou à un proche)',
    'Mám tě rád.',
    'Kocham cię. (przyjacielowi lub komuś z rodziny)',
    'Seni seviyorum. (bir arkadaşa ya da aileden birine)',
    'Ich hab dich lieb.',
    '大好きだよ。（友だちや家族に）'
  ),
  tr(
    'Marco e Giulia si sono sposati nel 2015.',
    'Marco and Giulia got married in 2015.',
    'Marco y Giulia se casaron en 2015.',
    'Marco et Giulia se sont mariés en 2015.',
    'Marco a Giulia se vzali v roce 2015.',
    'Marco i Giulia pobrali się w 2015 roku.',
    'Marco ile Giulia 2015’te evlendi.',
    'Marco und Giulia haben 2015 geheiratet.',
    'マルコとジュリアは2015年に結婚しました。'
  ),
  tr(
    'Abbiamo litigato, ma poi abbiamo fatto pace.',
    'We argued, but then we made up.',
    'Discutimos, pero luego hicimos las paces.',
    'Nous nous sommes disputés, mais ensuite nous nous sommes réconciliés.',
    'Pohádali jsme se, ale pak jsme se usmířili.',
    'Pokłóciliśmy się, ale potem się pogodziliśmy.',
    'Kavga ettik ama sonra barıştık.',
    'Wir haben gestritten, aber dann haben wir uns versöhnt.',
    'けんかしましたが、そのあと仲直りしました。'
  ),
  tr(
    'Ti presento mia sorella.',
    'Let me introduce my sister to you.',
    'Te presento a mi hermana.',
    'Je te présente ma sœur.',
    'Představím ti svou sestru.',
    'Przedstawiam ci moją siostrę.',
    'Seni kız kardeşimle tanıştırayım.',
    'Ich stelle dir meine Schwester vor.',
    '妹を紹介します。'
  ),
  tr(
    'Cosa regali a tuo padre per il compleanno?',
    'What are you giving your father for his birthday?',
    '¿Qué le regalas a tu padre por su cumpleaños?',
    'Qu’est-ce que tu offres à ton père pour son anniversaire ?',
    'Co dáš tátovi k narozeninám?',
    'Co podarujesz tacie na urodziny?',
    'Babana doğum günü için ne hediye ediyorsun?',
    'Was schenkst du deinem Vater zum Geburtstag?',
    'お父さんの誕生日に何をあげますか？'
  ),
  tr(
    'Mi fido di te.',
    'I trust you.',
    'Confío en ti.',
    'Je te fais confiance.',
    'Věřím ti.',
    'Ufam ci.',
    'Sana güveniyorum.',
    'Ich vertraue dir.',
    'あなたを信頼しています。'
  ),
  tr(
    'I bambini devono obbedire ai genitori?',
    'Should children obey their parents?',
    '¿Los niños deben obedecer a sus padres?',
    'Les enfants doivent-ils obéir à leurs parents ?',
    'Mají děti poslouchat rodiče?',
    'Czy dzieci powinny słuchać rodziców?',
    'Çocuklar anne babalarının sözünü dinlemeli mi?',
    'Sollen Kinder ihren Eltern gehorchen?',
    '子どもは親に従うべきですか？'
  ),
  tr(
    'Ti chiedo scusa: ho sbagliato.',
    'I’m sorry: I made a mistake.',
    'Te pido perdón: me he equivocado.',
    'Je te demande pardon : je me suis trompé.',
    'Omlouvám se ti: udělal jsem chybu.',
    'Przepraszam cię: pomyliłem się.',
    'Özür dilerim: hata yaptım.',
    'Entschuldige bitte: Ich habe einen Fehler gemacht.',
    'ごめんなさい、私が間違っていました。'
  ),
  tr(
    'Tommaso somiglia molto al nonno.',
    'Tommaso looks a lot like his grandfather.',
    'Tommaso se parece mucho a su abuelo.',
    'Tommaso ressemble beaucoup à son grand-père.',
    'Tommaso se hodně podobá dědečkovi.',
    'Tommaso jest bardzo podobny do dziadka.',
    'Tommaso dedesine çok benziyor.',
    'Tommaso sieht seinem Opa sehr ähnlich.',
    'トンマーゾはおじいさんによく似ています。'
  ),
  tr(
    'Domenica andiamo a trovare i nonni.',
    'On Sunday we’re going to visit our grandparents.',
    'El domingo vamos a ver a los abuelos.',
    'Dimanche, nous allons rendre visite aux grands-parents.',
    'V neděli jedeme navštívit prarodiče.',
    'W niedzielę jedziemy odwiedzić dziadków.',
    'Pazar günü büyükanne ve büyükbabamızı ziyarete gidiyoruz.',
    'Am Sonntag besuchen wir die Großeltern.',
    '日曜日に祖父母を訪ねます。'
  ),
];

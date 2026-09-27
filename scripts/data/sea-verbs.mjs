// I verbi della lezione «I verbi del mare» (2026-09-28).
//
// Seguito di «Il mare», chiesto da Martin: quattro gruppi, la spiaggia (11: andare al mare, aprire
// l'ombrellone, abbronzarsi, scottarsi, fare un castello di sabbia, raccogliere le conchiglie, rilassarsi...),
// in acqua (8: bagnarsi i piedi, schizzare, fare il morto, saltare le onde, fare snorkeling, andare in
// pedalò, andare in canoa, salvare), la barca (8: andare in barca a vela, salpare, navigare, gettare l'ancora,
// attraccare, sbarcare, pescare, avere il mal di mare) e il mare (3: infrangersi, tramontare, affondare).
// Non ripete nuotare, tuffarsi, immergersi, galleggiare, prendere il sole, scavare («I verbi degli animali»),
// mettersi la crema, asciugarsi («I verbi del corpo»), fare il bagno («I verbi della casa»), noleggiare,
// passeggiare («I verbi della città»), remare, fare surf («I verbi dello sport»), rinfrescarsi, soccorrere
// («I verbi della montagna»).
//
// Esercizio come «I verbi della città» (`photoRows`). Le coppie che una foto sola non distingue (salpare/
// navigare, attraccare/sbarcare, bagnarsi i piedi/saltare le onde) si accettano a vicenda.
//
// Struttura di ogni voce: come city-verbs.mjs. Foto REALISTICHE con gpt-image-1-mini a qualita' `low`,
// `generate-animal-images.mjs --set verbi-mare`, stile PEOPLE_STYLE; le scene con molta acqua sono chieste
// come foto rotonde (sul fondo bianco il mare sparirebbe).

import { tr } from './traits-base.mjs';

const LANG_ORDER = ['it', 'en', 'es', 'fr', 'cs', 'pl', 'tr', 'de', 'ja'];
const ROUND = 'a photograph cropped into a perfect circle, centred on the white background, showing ';

const sv = (slug, word, def, glosses, examples, scene, fits = []) => {
  if (glosses.length !== 8) throw new Error(`«${slug}»: servono 8 traduzioni`);
  if (examples.length !== 3) throw new Error(`«${slug}»: servono tre frasi d'esempio`);
  return {
    image: `verbi-mare/${slug}`,
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

export const seaVerbs = [
  // --- la spiaggia ----------------------------------------------------------------------------
  sv(
    'andare-al-mare',
    'andare al mare',
    'Andare in un posto di mare, per un giorno o per le vacanze.',
    [
      'to go to the seaside',
      'ir a la playa',
      'aller à la mer',
      'jet k moři',
      'jechać nad morze',
      'denize gitmek',
      'ans Meer fahren',
      '海に行く',
    ],
    ['Ad agosto andiamo al mare.', 'Sei andato al mare quest’estate?', 'Da piccola andavo al mare con i nonni.'],
    'a happy family of three walking with beach bags, a folded beach umbrella and a rubber ring, the little girl holding a bucket and spade',
    ['rilassarsi']
  ),
  sv(
    'aprire-lombrellone',
    'aprire l’ombrellone',
    'Aprire il grande ombrello da spiaggia per fare ombra.',
    [
      'to open the beach umbrella',
      'abrir la sombrilla',
      'ouvrir le parasol',
      'otevřít slunečník',
      'rozłożyć parasol plażowy',
      'plaj şemsiyesini açmak',
      'den Sonnenschirm aufspannen',
      'ビーチパラソルを開く',
    ],
    [
      'Apri l’ombrellone, c’è troppo sole!',
      'Papà apre l’ombrellone e noi ci sediamo sotto.',
      'Non riesco ad aprire l’ombrellone: c’è vento.',
    ],
    'a man standing on a small patch of sand opening a big striped beach umbrella, pushing it up the pole'
  ),
  sv(
    'stendere-lasciugamano',
    'stendere l’asciugamano',
    'Aprire l’asciugamano sulla sabbia per sdraiarsi sopra.',
    [
      'to spread out your towel',
      'extender la toalla',
      'étendre sa serviette',
      'rozprostřít ručník',
      'rozłożyć ręcznik',
      'havluyu sermek',
      'das Handtuch ausbreiten',
      'タオルを広げる',
    ],
    [
      'Stendo l’asciugamano vicino all’acqua.',
      'Dove stendiamo gli asciugamani?',
      'Ha steso l’asciugamano e si è sdraiata al sole.',
    ],
    'a young woman in a sundress kneeling on a small patch of sand spreading out a colourful striped beach towel'
  ),
  sv(
    'abbronzarsi',
    'abbronzarsi',
    'Diventare più scuri di pelle stando al sole.',
    [
      'to get a tan',
      'broncearse',
      'bronzer, se faire bronzer',
      'opálit se',
      'opalać się',
      'bronzlaşmak',
      'braun werden',
      '日焼けする（小麦色に）',
    ],
    ['Mi abbronzo subito.', 'Quest’estate ti sei abbronzato molto!', 'Per abbronzarsi senza scottarsi serve la crema.'],
    'a tanned woman in a swimsuit lying on a sun lounger with sunglasses, relaxing in the sun with her eyes closed',
    ['rilassarsi']
  ),
  sv(
    'scottarsi',
    'scottarsi',
    'Bruciarsi la pelle, per esempio con troppo sole.',
    [
      'to get sunburnt, to burn yourself',
      'quemarse',
      'prendre un coup de soleil, se brûler',
      'spálit se',
      'spalić się (na słońcu), poparzyć się',
      'güneşte yanmak',
      'einen Sonnenbrand bekommen, sich verbrennen',
      '日焼けで赤くなる、やけどする',
    ],
    ['Mi sono scottato le spalle.', 'Metti la crema, se no ti scotti!', 'Attenta, il caffè è caldo: ti scotti.'],
    'a man in swimming trunks seen from behind and slightly from the side, his back and shoulders bright red from a painful sunburn with a clear white mark where his tank top straps were, touching his red shoulder and wincing'
  ),
  sv(
    'fare-un-castello-di-sabbia',
    'fare un castello di sabbia',
    'Costruire un castello con la sabbia bagnata.',
    [
      'to build a sandcastle',
      'hacer un castillo de arena',
      'faire un château de sable',
      'postavit hrad z písku',
      'zbudować zamek z piasku',
      'kumdan kale yapmak',
      'eine Sandburg bauen',
      '砂のお城を作る',
    ],
    [
      'I bambini fanno un castello di sabbia.',
      'Facciamo un castello di sabbia enorme!',
      'Il mare ha distrutto il nostro castello di sabbia.',
    ],
    'two small children kneeling on a small patch of sand building a sandcastle with towers, a red bucket and a spade next to them',
    ['raccogliere-le-conchiglie']
  ),
  sv(
    'raccogliere-le-conchiglie',
    'raccogliere le conchiglie',
    'Prendere da terra le conchiglie sulla spiaggia.',
    [
      'to collect shells',
      'recoger conchas',
      'ramasser des coquillages',
      'sbírat mušle',
      'zbierać muszelki',
      'deniz kabuğu toplamak',
      'Muscheln sammeln',
      '貝殻を拾う',
    ],
    [
      'La mattina presto raccolgo le conchiglie.',
      'Mia figlia raccoglie le conchiglie più belle.',
      'Abbiamo raccolto le conchiglie sulla riva.',
    ],
    'a little girl bending down on a small patch of wet sand picking up a seashell, holding a bucket full of shells'
  ),
  sv(
    'seppellire-nella-sabbia',
    'seppellire nella sabbia',
    'Coprire qualcuno o qualcosa con la sabbia, per gioco.',
    [
      'to bury in the sand',
      'enterrar en la arena',
      'enterrer dans le sable',
      'zahrabat do písku',
      'zakopać w piasku',
      'kuma gömmek',
      'im Sand eingraben',
      '砂に埋める',
    ],
    [
      'I bambini seppelliscono papà nella sabbia.',
      'Non seppellirmi nella sabbia!',
      'Ho seppellito le chiavi nella sabbia e non le trovo più.',
    ],
    'a laughing father lying on a patch of sand, his body covered with sand up to his neck, two children piling more sand on him with their hands'
  ),
  sv(
    'giocare-a-racchettoni',
    'giocare a racchettoni',
    'Colpire una pallina con due racchette di legno, in spiaggia.',
    [
      'to play beach tennis (with wooden paddles)',
      'jugar a las palas',
      'jouer aux raquettes de plage',
      'hrát plážový tenis (s pálkami)',
      'grać w paletki plażowe',
      'plaj raketi oynamak',
      'Beachball spielen (mit Holzschlägern)',
      'ビーチでラケット遊びをする',
    ],
    [
      'Giochiamo a racchettoni sulla riva?',
      'Mio nonno gioca a racchettoni ogni mattina.',
      'Non giocate a racchettoni vicino agli ombrelloni!',
    ],
    'two friends in swimsuits on a patch of sand hitting a small rubber ball back and forth with wooden beach paddles'
  ),
  sv(
    'gonfiare-il-materassino',
    'gonfiare il materassino',
    'Riempire d’aria il materassino per stare sull’acqua.',
    [
      'to blow up the air mattress',
      'inflar la colchoneta',
      'gonfler le matelas pneumatique',
      'nafouknout nafukovací lehátko',
      'nadmuchać materac',
      'deniz yatağını şişirmek',
      'die Luftmatratze aufblasen',
      '浮き輪マットをふくらませる',
    ],
    [
      'Mi aiuti a gonfiare il materassino?',
      'Gonfio il materassino con la pompa.',
      'Il bambino ha gonfiato il salvagente da solo.',
    ],
    'a boy sitting on the sand pumping up a blue inflatable air mattress with a foot pump'
  ),
  sv(
    'rilassarsi',
    'rilassarsi',
    'Stare tranquilli, senza pensieri e senza fatica.',
    [
      'to relax',
      'relajarse',
      'se détendre',
      'odpočívat, relaxovat',
      'relaksować się, odpoczywać',
      'rahatlamak, dinlenmek',
      'sich entspannen',
      'リラックスする',
    ],
    ['In vacanza voglio solo rilassarmi.', 'Rilassati, non c’è fretta!', 'Leggere un libro mi rilassa.'],
    'a smiling man lying in a hammock with his hands behind his head and a straw hat, eyes closed',
    ['abbronzarsi']
  ),

  // --- in acqua -------------------------------------------------------------------------------
  sv(
    'bagnarsi-i-piedi',
    'bagnarsi i piedi',
    'Mettere solo i piedi nell’acqua.',
    [
      'to get your feet wet, to paddle',
      'mojarse los pies',
      'se mouiller les pieds',
      'namočit si nohy',
      'zamoczyć stopy',
      'ayaklarını ıslatmak',
      'sich die Füße nass machen',
      '足をぬらす',
    ],
    [
      'L’acqua è fredda: mi bagno solo i piedi.',
      'Ci bagniamo i piedi e torniamo a casa.',
      'La nonna si è bagnata i piedi sulla riva.',
    ],
    ROUND +
      'an older woman holding her skirt and walking barefoot at the edge of the sea, small waves washing over her feet',
    ['saltare-le-onde']
  ),
  sv(
    'schizzare',
    'schizzare',
    'Far volare gocce d’acqua addosso a qualcuno.',
    [
      'to splash',
      'salpicar',
      'éclabousser',
      'stříkat, cákat',
      'chlapać, ochlapywać',
      'su sıçratmak',
      'spritzen',
      '水をかける',
    ],
    [
      'Non schizzarmi, l’acqua è fredda!',
      'I bambini si schizzano e ridono.',
      'La macchina mi ha schizzato passando nella pozzanghera.',
    ],
    ROUND +
      'two laughing children standing in shallow sea water up to their knees splashing water at each other with their hands, water drops flying',
    ['saltare-le-onde']
  ),
  sv(
    'fare-il-morto',
    'fare il morto',
    'Stare fermi sulla schiena sull’acqua, a galla.',
    [
      'to float on your back',
      'hacer el muerto',
      'faire la planche',
      'splývat na zádech',
      'unosić się na plecach',
      'sırtüstü suda durmak',
      'toter Mann spielen, sich auf dem Rücken treiben lassen',
      '背浮きをする',
    ],
    [
      'Non so nuotare bene, ma so fare il morto.',
      'Faccio il morto e guardo il cielo.',
      'Il maestro ci ha insegnato a fare il morto.',
    ],
    ROUND +
      'a relaxed man floating motionless on his back in calm clear blue sea water, arms and legs spread out, eyes closed, seen from above'
  ),
  sv(
    'saltare-le-onde',
    'saltare le onde',
    'Saltare in alto quando arriva un’onda, per gioco.',
    [
      'to jump over the waves',
      'saltar las olas',
      'sauter dans les vagues',
      'skákat přes vlny',
      'skakać przez fale',
      'dalgaların üstünden atlamak',
      'über die Wellen springen',
      '波を飛び越える',
    ],
    [
      'I ragazzi saltano le onde tutto il pomeriggio.',
      'Vieni a saltare le onde con me?',
      'Oggi il mare è mosso: si possono saltare le onde.',
    ],
    ROUND +
      'two happy children holding hands and jumping over a small breaking wave near the shore, foam splashing around their legs',
    ['schizzare', 'bagnarsi-i-piedi']
  ),
  sv(
    'fare-snorkeling',
    'fare snorkeling',
    'Nuotare con maschera e boccaglio per guardare sott’acqua.',
    [
      'to go snorkelling',
      'hacer esnórquel, bucear con tubo',
      'faire du snorkeling, faire de la plongée avec tuba',
      'šnorchlovat',
      'nurkować z rurką, snorkelować',
      'şnorkelle yüzmek',
      'schnorcheln',
      'シュノーケリングをする',
    ],
    ['Facciamo snorkeling vicino agli scogli.', 'Facendo snorkeling ho visto un polpo.', 'Hai mai fatto snorkeling?'],
    ROUND +
      'a young woman with a diving mask, snorkel and fins swimming underwater in clear turquoise water above rocks with small colourful fish'
  ),
  sv(
    'andare-in-pedalo',
    'andare in pedalò',
    'Andare sull’acqua con una piccola barca che si muove pedalando.',
    [
      'to go out on a pedalo',
      'montar en patín (de pedales)',
      'faire du pédalo',
      'jezdit na šlapadle',
      'pływać rowerkiem wodnym',
      'deniz bisikletine binmek',
      'Tretboot fahren',
      '足こぎボートに乗る',
    ],
    [
      'Andiamo in pedalò fino alla boa?',
      'Siamo andati in pedalò con i bambini.',
      'Andare in pedalò è faticoso per le gambe!',
    ],
    ROUND + 'a smiling couple pedalling a white pedalo with a small slide on a calm blue sea'
  ),
  sv(
    'andare-in-canoa',
    'andare in canoa',
    'Andare sull’acqua con una barca stretta e una pagaia.',
    [
      'to go canoeing, to go kayaking',
      'ir en canoa',
      'faire du canoë, du kayak',
      'jezdit na kánoi, na kajaku',
      'pływać kajakiem',
      'kano yapmak',
      'Kanu fahren',
      'カヌーに乗る',
    ],
    ['Domani andiamo in canoa lungo la costa.', 'Sai andare in canoa?', 'Siamo andati in canoa fino alla grotta.'],
    ROUND + 'a man in a life jacket paddling a red kayak with a double paddle on calm blue sea water near rocks'
  ),
  sv(
    'salvare',
    'salvare',
    'Portare fuori dal pericolo una persona.',
    ['to save, to rescue', 'salvar', 'sauver', 'zachránit', 'uratować', 'kurtarmak', 'retten', '助ける、救う'],
    ['Il bagnino ha salvato un bambino.', 'Mi hai salvato la vita!', 'I pompieri hanno salvato il gatto.'],
    ROUND +
      'a lifeguard in a red swimsuit swimming in the sea holding a red rescue float, pulling a tired swimmer who holds on to it'
  ),

  // --- la barca -------------------------------------------------------------------------------
  sv(
    'andare-in-barca-a-vela',
    'andare in barca a vela',
    'Andare sul mare con una barca che si muove con il vento.',
    [
      'to go sailing',
      'navegar a vela, ir en velero',
      'faire de la voile',
      'jachtařit, plout na plachetnici',
      'żeglować',
      'yelkenliyle açılmak',
      'segeln',
      'ヨットに乗る、セーリングをする',
    ],
    [
      'D’estate andiamo in barca a vela.',
      'Mio zio mi ha insegnato ad andare in barca a vela.',
      'Oggi non c’è vento: non si va in barca a vela.',
    ],
    ROUND + 'two friends sitting in a small white sailing boat with a big white sail, leaning out, on a sunny blue sea',
    ['navigare']
  ),
  sv(
    'salpare',
    'salpare',
    'Partire da un porto, per una barca o una nave.',
    [
      'to set sail, to leave port',
      'zarpar',
      'lever l’ancre, appareiller',
      'vyplout',
      'wypłynąć',
      'demir almak, limandan ayrılmak',
      'auslaufen, in See stechen',
      '出航する',
    ],
    ['Il traghetto salpa alle otto.', 'Siamo salpati all’alba.', 'La nave salpa tra dieci minuti.'],
    ROUND +
      'a white ferry leaving a small harbour, moving away from the quay with a trail of white foam behind it, people waving from the deck',
    ['navigare']
  ),
  sv(
    'navigare',
    'navigare',
    'Viaggiare per mare con una barca o una nave.',
    [
      'to sail, to navigate',
      'navegar',
      'naviguer',
      'plout, plavit se',
      'płynąć, żeglować',
      'denizde seyretmek',
      'segeln, (zur See) fahren',
      '航海する',
    ],
    [
      'Abbiamo navigato per tre giorni.',
      'La nave naviga verso la Sicilia.',
      'Mi piacerebbe navigare intorno al mondo.',
    ],
    ROUND +
      'a sailing yacht with white sails navigating on the open deep blue sea, nothing but water and sky around it',
    ['salpare', 'andare-in-barca-a-vela']
  ),
  sv(
    'gettare-lancora',
    'gettare l’ancora',
    'Buttare l’ancora in mare per fermare la barca.',
    [
      'to drop anchor',
      'echar el ancla',
      'jeter l’ancre',
      'spustit kotvu',
      'rzucić kotwicę',
      'demir atmak',
      'Anker werfen',
      'いかりを下ろす',
    ],
    [
      'Gettiamo l’ancora in questa baia.',
      'Il capitano ha gettato l’ancora vicino all’isola.',
      'Qui non si può gettare l’ancora.',
    ],
    'a sailor in a striped t-shirt on the front of a small wooden boat dropping a heavy metal anchor on a rope into the water',
    ['attraccare']
  ),
  sv(
    'attraccare',
    'attraccare',
    'Arrivare al molo e legare la barca.',
    [
      'to dock, to moor',
      'atracar',
      'accoster, amarrer',
      'přistát, zakotvit u mola',
      'przybić do brzegu, zacumować',
      'yanaşmak (iskeleye)',
      'anlegen',
      '接岸する、係留する',
    ],
    [
      'Il traghetto attracca al molo tre.',
      'Abbiamo attraccato nel porto di Capri.',
      'Aspetta che la barca attracchi prima di scendere.',
    ],
    ROUND +
      'a man on a wooden pier tying the rope of a small motorboat to a metal bollard, the boat alongside the pier',
    ['gettare-lancora', 'sbarcare']
  ),
  sv(
    'sbarcare',
    'sbarcare',
    'Scendere da una nave o da una barca.',
    [
      'to disembark, to get off (a boat)',
      'desembarcar',
      'débarquer',
      'vylodit se, vystoupit z lodi',
      'zejść na ląd, wysiąść ze statku',
      'gemiden inmek',
      'von Bord gehen',
      '（船から）降りる、上陸する',
    ],
    [
      'Siamo sbarcati sull’isola a mezzogiorno.',
      'I passeggeri sbarcano dal traghetto.',
      'Prima di sbarcare, prendete i bagagli.',
    ],
    'passengers with suitcases and backpacks walking down a ramp off a white ferry onto a quay',
    ['attraccare']
  ),
  sv(
    'pescare',
    'pescare',
    'Prendere pesci con la canna o con la rete.',
    [
      'to fish, to go fishing',
      'pescar',
      'pêcher',
      'rybařit',
      'łowić ryby',
      'balık tutmak',
      'angeln, fischen',
      '釣りをする',
    ],
    ['Mio nonno pesca sul molo ogni mattina.', 'Andiamo a pescare domenica?', 'Oggi non abbiamo pescato niente.'],
    'an old man in a hat sitting on a folding stool holding a fishing rod, the line going down out of the frame, a bucket next to him'
  ),
  sv(
    'avere-il-mal-di-mare',
    'avere il mal di mare',
    'Sentirsi male per il movimento della barca.',
    [
      'to be seasick',
      'marearse, tener mareo',
      'avoir le mal de mer',
      'mít mořskou nemoc',
      'mieć chorobę morską',
      'deniz tutmak',
      'seekrank sein',
      '船酔いする',
    ],
    [
      'Sulla barca ho sempre il mal di mare.',
      'Hai il mal di mare? Guarda l’orizzonte.',
      'Con il mare mosso tutti avevano il mal di mare.',
    ],
    'a pale young man in a life jacket leaning on the railing of a boat, holding his stomach with a sick face, a friend patting his back'
  ),

  // --- il mare --------------------------------------------------------------------------------
  sv(
    'infrangersi',
    'infrangersi',
    'Rompersi con forza contro qualcosa, come le onde sugli scogli.',
    [
      'to break, to crash (of waves)',
      'romper (las olas)',
      'se briser (vagues)',
      'tříštit se (vlny)',
      'rozbijać się (o fale)',
      'kırılmak, çarpmak (dalgalar)',
      'sich brechen (Wellen)',
      '（波が）砕ける',
    ],
    [
      'Le onde si infrangono sugli scogli.',
      'Il mare si infrangeva contro il molo.',
      'Mi piace guardare le onde che si infrangono.',
    ],
    ROUND +
      'a seascape with no people at all: a big white wave crashing against dark rocks on the coast, white spray and foam flying high in the air, blue sea behind'
  ),
  sv(
    'tramontare',
    'tramontare',
    'Scendere sotto l’orizzonte, per il sole alla sera.',
    [
      'to set (of the sun)',
      'ponerse (el sol)',
      'se coucher (soleil)',
      'zapadat (slunce)',
      'zachodzić (o słońcu)',
      '(güneş) batmak',
      'untergehen (Sonne)',
      '（日が）沈む',
    ],
    ['D’estate il sole tramonta tardi.', 'Guardiamo il sole che tramonta sul mare.', 'Il sole è già tramontato.'],
    ROUND +
      'a large orange sun setting on the horizon over a calm sea, the sky orange and pink, a couple seen from behind sitting on the beach watching it'
  ),
  sv(
    'affondare',
    'affondare',
    'Andare sotto l’acqua, fino al fondo.',
    [
      'to sink',
      'hundirse',
      'couler, sombrer',
      'potopit se',
      'zatonąć, tonąć',
      'batmak',
      'sinken, untergehen',
      '沈む、沈没する',
    ],
    [
      'Il Titanic è affondato nel 1912.',
      'Il sasso affonda, il legno galleggia.',
      'La barca vecchia è affondata nel porto.',
    ],
    ROUND +
      'an old small wooden rowing boat half sunk in calm clear shallow sea water, only its front still out of the water'
  ),
];

export const seaVerbTranslationExercises = [
  tr(
    'Ad agosto andiamo al mare con i nonni.',
    'In August we go to the seaside with our grandparents.',
    'En agosto vamos a la playa con los abuelos.',
    'En août, nous allons à la mer avec les grands-parents.',
    'V srpnu jedeme s prarodiči k moři.',
    'W sierpniu jedziemy nad morze z dziadkami.',
    'Ağustosta büyükannemle büyükbabamla denize gidiyoruz.',
    'Im August fahren wir mit den Großeltern ans Meer.',
    '8月は祖父母と海に行きます。'
  ),
  tr(
    'Papà apre l’ombrellone e io stendo l’asciugamano.',
    'Dad opens the beach umbrella and I spread out the towel.',
    'Papá abre la sombrilla y yo extiendo la toalla.',
    'Papa ouvre le parasol et j’étends la serviette.',
    'Táta otevře slunečník a já rozprostřu ručník.',
    'Tata rozkłada parasol, a ja rozkładam ręcznik.',
    'Babam şemsiyeyi açıyor, ben de havluyu seriyorum.',
    'Papa spannt den Sonnenschirm auf, und ich breite das Handtuch aus.',
    'パパがビーチパラソルを開いて、私はタオルを広げます。'
  ),
  tr(
    'Metti la crema, se no ti scotti invece di abbronzarti.',
    'Put on some sun cream, otherwise you’ll get burnt instead of tanned.',
    'Ponte crema, si no te quemas en vez de broncearte.',
    'Mets de la crème, sinon tu vas prendre un coup de soleil au lieu de bronzer.',
    'Namaž se krémem, jinak se místo opálení spálíš.',
    'Posmaruj się kremem, bo inaczej zamiast się opalić, spalisz się.',
    'Krem sür, yoksa bronzlaşacağına yanarsın.',
    'Creme dich ein, sonst bekommst du einen Sonnenbrand, statt braun zu werden.',
    '日焼け止めを塗って。でないと小麦色になるどころか赤くなるよ。'
  ),
  tr(
    'I bambini fanno un castello di sabbia e raccolgono le conchiglie.',
    'The children build a sandcastle and collect shells.',
    'Los niños hacen un castillo de arena y recogen conchas.',
    'Les enfants font un château de sable et ramassent des coquillages.',
    'Děti staví hrad z písku a sbírají mušle.',
    'Dzieci budują zamek z piasku i zbierają muszelki.',
    'Çocuklar kumdan kale yapıyor ve deniz kabuğu topluyor.',
    'Die Kinder bauen eine Sandburg und sammeln Muscheln.',
    '子どもたちは砂のお城を作って、貝殻を拾います。'
  ),
  tr(
    'L’acqua è fredda: mi bagno solo i piedi.',
    'The water is cold: I’m only getting my feet wet.',
    'El agua está fría: solo me mojo los pies.',
    'L’eau est froide : je me mouille seulement les pieds.',
    'Voda je studená: namočím si jen nohy.',
    'Woda jest zimna: zamoczę tylko stopy.',
    'Su soğuk: sadece ayaklarımı ıslatıyorum.',
    'Das Wasser ist kalt: Ich mache mir nur die Füße nass.',
    '水が冷たいから、足だけぬらします。'
  ),
  tr(
    'Non so nuotare bene, ma so fare il morto.',
    'I can’t swim well, but I can float on my back.',
    'No sé nadar bien, pero sé hacer el muerto.',
    'Je ne sais pas bien nager, mais je sais faire la planche.',
    'Neumím dobře plavat, ale umím splývat na zádech.',
    'Nie umiem dobrze pływać, ale umiem unosić się na plecach.',
    'İyi yüzemiyorum ama sırtüstü suda durabiliyorum.',
    'Ich kann nicht gut schwimmen, aber ich kann toter Mann spielen.',
    '上手に泳げないけれど、背浮きはできます。'
  ),
  tr(
    'Il bagnino ha salvato un ragazzo che non riusciva a tornare a riva.',
    'The lifeguard saved a boy who couldn’t get back to the shore.',
    'El socorrista salvó a un chico que no conseguía volver a la orilla.',
    'Le maître-nageur a sauvé un garçon qui n’arrivait pas à revenir au bord.',
    'Plavčík zachránil kluka, který se nemohl dostat zpátky na břeh.',
    'Ratownik uratował chłopaka, który nie mógł wrócić na brzeg.',
    'Cankurtaran kıyıya dönemeyen bir çocuğu kurtardı.',
    'Der Rettungsschwimmer hat einen Jungen gerettet, der nicht mehr ans Ufer zurückkam.',
    'ライフガードが岸に戻れなくなった男の子を助けました。'
  ),
  tr(
    'Il traghetto salpa alle otto e attracca a Capri alle nove.',
    'The ferry leaves at eight and docks in Capri at nine.',
    'El ferri zarpa a las ocho y atraca en Capri a las nueve.',
    'Le ferry appareille à huit heures et accoste à Capri à neuf heures.',
    'Trajekt vyplouvá v osm a v devět přistává na Capri.',
    'Prom wypływa o ósmej i przybija do Capri o dziewiątej.',
    'Feribot sekizde kalkıyor ve dokuzda Capri’ye yanaşıyor.',
    'Die Fähre läuft um acht aus und legt um neun in Capri an.',
    'フェリーは8時に出航して、9時にカプリ島に着きます。'
  ),
  tr(
    'Sulla barca ho sempre il mal di mare.',
    'I always get seasick on a boat.',
    'En el barco siempre me mareo.',
    'En bateau, j’ai toujours le mal de mer.',
    'Na lodi mám vždycky mořskou nemoc.',
    'Na łodzi zawsze mam chorobę morską.',
    'Teknede beni hep deniz tutar.',
    'Auf dem Boot werde ich immer seekrank.',
    '船に乗るといつも船酔いします。'
  ),
  tr(
    'La sera guardiamo il sole che tramonta sul mare.',
    'In the evening we watch the sun setting over the sea.',
    'Por la tarde miramos cómo se pone el sol sobre el mar.',
    'Le soir, nous regardons le soleil se coucher sur la mer.',
    'Večer se díváme, jak slunce zapadá nad mořem.',
    'Wieczorem patrzymy, jak słońce zachodzi nad morzem.',
    'Akşamları güneşin denizde batışını seyrediyoruz.',
    'Am Abend schauen wir zu, wie die Sonne über dem Meer untergeht.',
    '夕方、海に沈む夕日を眺めます。'
  ),
];

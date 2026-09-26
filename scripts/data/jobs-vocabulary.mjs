// Le parole della lezione di vocabolario «I mestieri» (2026-09-26).
//
// Ogni mestiere ha le due forme, maschile e femminile (il cuoco / la cuoca, l’attore / l’attrice): la
// nota della pagina spiega come si forma il femminile. Le foto alternano uomini e donne.
//
// Struttura di ogni voce: come body-vocabulary.mjs (image, slug, word, bare, examples, answers, alt,
// subject). `answers` accetta tutte e due le forme, con e senza articolo, piu' i sinonimi (`extra`).
// `alt` e' la stringa «(ignorato)|en|es|fr|cs|pl|tr|de|ja».
//
// Foto REALISTICHE con gpt-image-1-mini a qualita' `low` (Martin, 2026-09-26: spendere poco).
// Regole del progetto: niente carne, e dove si puo' niente pesce, uova, latticini (il pizzaiolo fa una
// marinara, il barista un caffe' nero): per questo mancano il macellaio e il pescatore.

import { tr } from './traits-base.mjs';

const LANG_ORDER = ['it', 'en', 'es', 'fr', 'cs', 'pl', 'tr', 'de', 'ja'];
const ARTICLE = /^(il|lo|la|l’|i|gli|le)\s?/;

/** Tutte le forme («il cuoco / la cuoca»), con e senza articolo e apostrofo, piu' i sinonimi. */
const answersFor = (word, extra) => {
  const list = [];
  for (const form of [...word.split(' / '), ...extra]) {
    list.push(form, form.replace(ARTICLE, ''));
    if (form.includes('’')) list.push(form.replace('’', ' '), form.replace('’', ''));
  }
  return [...new Set(list)];
};

const job = (slug, word, examples, alts, subject, extra = []) => {
  const alt = alts.split('|');
  if (alt.length !== LANG_ORDER.length) throw new Error(`«${slug}»: alt deve avere 9 campi`);
  alt[0] = word.charAt(0).toUpperCase() + word.slice(1);
  if (examples.length !== 3) throw new Error(`«${slug}»: servono tre frasi d'esempio`);
  return {
    image: `mestieri/${slug}`,
    slug,
    word,
    bare: word.split(' / ')[0].replace(ARTICLE, ''),
    examples,
    answers: answersFor(word, extra),
    subject,
    alt: Object.fromEntries(LANG_ORDER.map((lang, i) => [lang, alt[i]])),
  };
};

export const jobVocabulary = [
  // --- salute ---------------------------------------------------------------------------
  job(
    'dottore',
    'il dottore / la dottoressa',
    [
      'Mia sorella fa la dottoressa in ospedale.',
      'Se hai la febbre, chiama il dottore.',
      'Il dottore mi ha dato una medicina.',
    ],
    '|The doctor|El médico / la médica|Le médecin|Lékař / lékařka|Lekarz / lekarka|Doktor|Der Arzt / die Ärztin|医者',
    'a friendly female doctor in a white coat with a stethoscope around her neck, holding a clipboard',
    ['medico', 'il medico']
  ),
  job(
    'infermiere',
    'l’infermiere / l’infermiera',
    ['L’infermiera mi misura la febbre.', 'Luca fa l’infermiere di notte.', 'Gli infermieri lavorano molto.'],
    '|The nurse|El enfermero / la enfermera|L’infirmier / l’infirmière|Zdravotní bratr / zdravotní sestra|Pielęgniarz / pielęgniarka|Hemşire|Der Krankenpfleger / die Krankenschwester|看護師',
    'a male nurse in light blue scrubs with a stethoscope pushing an empty wheelchair, kind smile'
  ),
  job(
    'dentista',
    'il dentista / la dentista',
    ['Vado dal dentista due volte all’anno.', 'La dentista mi ha controllato i denti.', 'Ho paura del dentista.'],
    '|The dentist|El / la dentista|Le / la dentiste|Zubař / zubařka|Dentysta / dentystka|Diş hekimi|Der Zahnarzt / die Zahnärztin|歯医者',
    'a female dentist in a white coat and blue gloves holding a dental mirror and a big model of teeth'
  ),
  job(
    'farmacista',
    'il farmacista / la farmacista',
    [
      'Il farmacista mi ha consigliato uno sciroppo.',
      'La farmacista lavora in una farmacia del centro.',
      'Chiedi al farmacista!',
    ],
    '|The pharmacist|El / la farmacéutico/a|Le / la pharmacien(ne)|Lékárník / lékárnice|Farmaceuta|Eczacı|Der Apotheker / die Apothekerin|薬剤師',
    'a male pharmacist in a white coat standing in front of shelves of medicine boxes, holding a small box of pills'
  ),
  job(
    'veterinario',
    'il veterinario / la veterinaria',
    [
      'Portiamo il gatto dal veterinario.',
      'La veterinaria cura cani e gatti.',
      'Da grande voglio fare il veterinario.',
    ],
    '|The vet|El veterinario / la veterinaria|Le / la vétérinaire|Veterinář / veterinářka|Weterynarz|Veteriner|Der Tierarzt / die Tierärztin|獣医',
    'a female veterinarian in green scrubs gently holding a small happy puppy'
  ),

  // --- scuola e cultura --------------------------------------------------------------------
  job(
    'maestro',
    'il maestro / la maestra',
    [
      'La maestra insegna a leggere ai bambini.',
      'Il maestro di Tommaso è molto paziente.',
      'Mia madre fa la maestra alla scuola elementare.',
    ],
    '|The primary school teacher|El maestro / la maestra|L’instituteur / l’institutrice|Učitel / učitelka na základní škole|Nauczyciel / nauczycielka w szkole podstawowej|İlkokul öğretmeni|Der Grundschullehrer / die Grundschullehrerin|小学校の先生',
    'a female primary school teacher next to a small green chalkboard with simple drawings of an apple and a sun, holding a picture book',
    ['insegnante', 'l’insegnante']
  ),
  job(
    'professore',
    'il professore / la professoressa',
    [
      'Il professore di storia è molto bravo.',
      'La professoressa ha corretto i compiti.',
      'Domani ho l’esame con il professore.',
    ],
    '|The teacher (secondary school, university)|El profesor / la profesora|Le professeur / la professeure|Profesor / profesorka|Profesor / profesorka|Öğretmen, profesör|Der Lehrer / die Lehrerin (Gymnasium, Uni)|先生、教授',
    'a middle-aged male professor with glasses and a tweed jacket holding a thick book in front of a whiteboard with a simple diagram',
    ['insegnante', 'l’insegnante']
  ),
  job(
    'bibliotecario',
    'il bibliotecario / la bibliotecaria',
    [
      'La bibliotecaria mi ha aiutato a trovare un libro.',
      'Il bibliotecario mette in ordine gli scaffali.',
      'Chiedi alla bibliotecaria.',
    ],
    '|The librarian|El bibliotecario / la bibliotecaria|Le / la bibliothécaire|Knihovník / knihovnice|Bibliotekarz / bibliotekarka|Kütüphaneci|Der Bibliothekar / die Bibliothekarin|図書館員',
    'a female librarian carrying a stack of books in front of a tall wooden bookshelf'
  ),
  job(
    'traduttore',
    'il traduttore / la traduttrice',
    [
      'Faccio la traduttrice dall’inglese all’italiano.',
      'Il traduttore lavora da casa.',
      'Serve un traduttore per questo contratto.',
    ],
    '|The translator|El traductor / la traductora|Le traducteur / la traductrice|Překladatel / překladatelka|Tłumacz / tłumaczka|Çevirmen|Der Übersetzer / die Übersetzerin|翻訳者',
    'a male translator at a desk with a laptop and two open dictionaries'
  ),
  job(
    'giornalista',
    'il giornalista / la giornalista',
    [
      'La giornalista fa domande al sindaco.',
      'Il giornalista scrive un articolo.',
      'Mio zio fa il giornalista in televisione.',
    ],
    '|The journalist|El / la periodista|Le / la journaliste|Novinář / novinářka|Dziennikarz / dziennikarka|Gazeteci|Der Journalist / die Journalistin|記者、ジャーナリスト',
    'a female journalist holding a microphone and a small notebook, as if interviewing someone'
  ),
  job(
    'fotografo',
    'il fotografo / la fotografa',
    [
      'Il fotografo fa le foto al matrimonio.',
      'La fotografa usa una macchina fotografica grande.',
      'Vorrei fare il fotografo.',
    ],
    '|The photographer|El fotógrafo / la fotógrafa|Le / la photographe|Fotograf / fotografka|Fotograf / fotografka|Fotoğrafçı|Der Fotograf / die Fotografin|写真家',
    'a male photographer looking through a professional camera with a big lens'
  ),
  job(
    'scrittore',
    'lo scrittore / la scrittrice',
    [
      'Elsa Morante è una scrittrice italiana.',
      'Lo scrittore firma il suo nuovo libro.',
      'Da bambina volevo fare la scrittrice.',
    ],
    '|The writer|El escritor / la escritora|L’écrivain / l’écrivaine|Spisovatel / spisovatelka|Pisarz / pisarka|Yazar|Der Schriftsteller / die Schriftstellerin|作家',
    'a female writer sitting at a small desk writing in a notebook with a fountain pen, a few books beside her'
  ),

  // --- arte e spettacolo ------------------------------------------------------------------
  job(
    'attore',
    'l’attore / l’attrice',
    ['Sophia Loren è un’attrice famosa.', 'L’attore recita a teatro.', 'Mio cugino fa l’attore.'],
    '|The actor / the actress|El actor / la actriz|L’acteur / l’actrice|Herec / herečka|Aktor / aktorka|Oyuncu|Der Schauspieler / die Schauspielerin|俳優、女優',
    'a male actor on a small stage in a theatrical costume holding a theatre mask, dramatic pose'
  ),
  job(
    'cantante',
    'il cantante / la cantante',
    [
      'La cantante ha una voce bellissima.',
      'Il cantante canta una canzone d’amore.',
      'Al concerto c’erano tre cantanti.',
    ],
    '|The singer|El / la cantante|Le chanteur / la chanteuse|Zpěvák / zpěvačka|Piosenkarz / piosenkarka|Şarkıcı|Der Sänger / die Sängerin|歌手',
    'a female singer singing into a vintage microphone on a stand, eyes half closed'
  ),
  job(
    'musicista',
    'il musicista / la musicista',
    [
      'Il musicista suona la chitarra.',
      'Mia figlia vuole fare la musicista.',
      'I musicisti provano prima del concerto.',
    ],
    '|The musician|El / la músico|Le / la musicien(ne)|Hudebník / hudebnice|Muzyk|Müzisyen|Der Musiker / die Musikerin|音楽家、ミュージシャン',
    'a male musician playing an acoustic guitar'
  ),
  job(
    'pittore',
    'il pittore / la pittrice',
    [
      'La pittrice dipinge un paesaggio.',
      'Caravaggio era un grande pittore.',
      'Il pittore ha le mani sporche di colore.',
    ],
    '|The painter (artist)|El pintor / la pintora|Le peintre / la peintre|Malíř / malířka|Malarz / malarka|Ressam|Der Maler / die Malerin|画家',
    'a female artist painting a colourful landscape on a canvas on an easel, holding a palette and a brush'
  ),
  job(
    'ballerino',
    'il ballerino / la ballerina',
    ['La ballerina balla sulle punte.', 'Il ballerino si allena ogni giorno.', 'Da piccola facevo la ballerina.'],
    '|The dancer|El bailarín / la bailarina|Le danseur / la danseuse|Tanečník / tanečnice|Tancerz / tancerka|Dansçı|Der Tänzer / die Tänzerin|ダンサー',
    'a young male ballet dancer in a graceful leap, black tights and a white shirt'
  ),

  // --- ristoranti, bar e negozi ------------------------------------------------------------
  job(
    'cuoco',
    'il cuoco / la cuoca',
    ['Il cuoco prepara il risotto.', 'Mia nonna è un’ottima cuoca.', 'In questo ristorante lavorano quattro cuochi.'],
    '|The cook, the chef|El cocinero / la cocinera|Le cuisinier / la cuisinière|Kuchař / kuchařka|Kucharz / kucharka|Aşçı|Der Koch / die Köchin|料理人、コック',
    'a male chef in a white jacket and tall chef hat stirring a pan of colourful vegetables',
    ['chef', 'lo chef']
  ),
  job(
    'cameriere',
    'il cameriere / la cameriera',
    [
      'Cameriere, il conto per favore!',
      'La cameriera porta due bicchieri d’acqua.',
      'D’estate faccio il cameriere al mare.',
    ],
    '|The waiter / the waitress|El camarero / la camarera|Le serveur / la serveuse|Číšník / servírka|Kelner / kelnerka|Garson|Der Kellner / die Kellnerin|ウェイター、ウェイトレス',
    'a female waiter in a black apron carrying a tray with two glasses of water and a bottle'
  ),
  job(
    'barista',
    'il barista / la barista',
    ['Il barista prepara un caffè.', 'Buongiorno! – dice la barista.', 'Il barista conosce tutti i clienti.'],
    '|The barista, the bartender|El / la barista, el camarero de bar|Le / la barista, le serveur de bar|Barista|Barista|Barista|Der Barista, der Barkeeper|バリスタ',
    'a male barista behind an espresso machine handing over a small cup of black espresso'
  ),
  job(
    'pizzaiolo',
    'il pizzaiolo / la pizzaiola',
    [
      'Il pizzaiolo mette la pizza nel forno a legna.',
      'A Napoli ci sono pizzaioli bravissimi.',
      'La pizzaiola stende la pasta.',
    ],
    '|The pizza maker|El pizzero / la pizzera|Le pizzaïolo|Pizzař / pizzařka|Pizzaiolo, pizzerzysta|Pizzacı|Der Pizzabäcker / die Pizzabäckerin|ピザ職人',
    'a male pizza maker with a white cap putting a tomato and basil pizza marinara into a wood-fired oven with a long wooden peel'
  ),
  job(
    'panettiere',
    'il panettiere / la panettiera',
    [
      'Il panettiere si alza alle tre di notte.',
      'La panettiera mi dà il pane caldo.',
      'Vado dal panettiere a comprare il pane.',
    ],
    '|The baker|El panadero / la panadera|Le boulanger / la boulangère|Pekař / pekařka|Piekarz|Fırıncı|Der Bäcker / die Bäckerin|パン屋',
    'a female baker in a white apron holding a basket of fresh bread loaves'
  ),
  job(
    'commesso',
    'il commesso / la commessa',
    [
      'La commessa mi ha aiutato a scegliere un vestito.',
      'Il commesso sistema le scarpe.',
      'Mio fratello fa il commesso in un negozio.',
    ],
    '|The shop assistant|El dependiente / la dependienta|Le vendeur / la vendeuse|Prodavač / prodavačka|Sprzedawca / sprzedawczyni|Satış görevlisi|Der Verkäufer / die Verkäuferin|店員',
    'a female shop assistant with a name badge standing next to a clothes rail with shirts on hangers, holding up a folded red sweater to show it'
  ),
  job(
    'cassiere',
    'il cassiere / la cassiera',
    ['Paghiamo alla cassiera.', 'Il cassiere mi dà lo scontrino.', 'Al supermercato c’è un solo cassiere.'],
    '|The cashier|El cajero / la cajera|Le caissier / la caissière|Pokladník / pokladní|Kasjer / kasjerka|Kasiyer|Der Kassierer / die Kassiererin|レジ係',
    'a male supermarket cashier in a store polo shirt sitting at a checkout counter with a cash register, handing a receipt'
  ),
  job(
    'fioraio',
    'il fioraio / la fioraia',
    [
      'La fioraia prepara un mazzo di rose.',
      'Compro i fiori dal fioraio sotto casa.',
      'Il fioraio apre presto la mattina.',
    ],
    '|The florist|El florista / la florista|Le / la fleuriste|Květinář / květinářka|Kwiaciarz / kwiaciarka|Çiçekçi|Der Florist / die Floristin|花屋',
    'a female florist arranging a colourful bouquet of flowers'
  ),
  job(
    'parrucchiere',
    'il parrucchiere / la parrucchiera',
    ['Domani vado dal parrucchiere.', 'La parrucchiera mi taglia i capelli.', 'Il mio parrucchiere è molto bravo.'],
    '|The hairdresser|El peluquero / la peluquera|Le coiffeur / la coiffeuse|Kadeřník / kadeřnice|Fryzjer / fryzjerka|Kuaför|Der Friseur / die Friseurin|美容師',
    'a male hairdresser holding scissors and a comb, cutting the hair of a smiling woman sitting in a salon chair'
  ),
  job(
    'sarto',
    'il sarto / la sarta',
    ['La sarta accorcia i pantaloni.', 'Il sarto prende le misure.', 'Questo vestito l’ha fatto una sarta.'],
    '|The tailor / the dressmaker|El sastre / la costurera|Le tailleur / la couturière|Krejčí / švadlena|Krawiec / krawcowa|Terzi|Der Schneider / die Schneiderin|仕立て屋',
    'a female tailor with a measuring tape around her neck sitting at a table and sewing a piece of fabric on a sewing machine, a tailor mannequin beside her'
  ),

  // --- casa, lavori manuali, campagna ------------------------------------------------------
  job(
    'idraulico',
    'l’idraulico / l’idraulica',
    ['Il lavandino perde: chiamo l’idraulico.', 'L’idraulico ripara il tubo.', 'L’idraulica arriva domani mattina.'],
    '|The plumber|El fontanero / la fontanera|Le plombier / la plombière|Instalatér / instalatérka|Hydraulik|Tesisatçı|Der Klempner / die Klempnerin|配管工',
    'a male plumber in blue overalls kneeling and fixing a pipe under a sink with a big wrench'
  ),
  job(
    'elettricista',
    'l’elettricista',
    ['L’elettricista cambia la presa.', 'Non c’è luce: serve un elettricista.', 'Mia zia fa l’elettricista.'],
    '|The electrician|El / la electricista|L’électricien / l’électricienne|Elektrikář / elektrikářka|Elektryk|Elektrikçi|Der Elektriker / die Elektrikerin|電気技師',
    'a female electrician with a yellow hard hat and tool belt fixing an electrical socket on a wall with a screwdriver'
  ),
  job(
    'meccanico',
    'il meccanico / la meccanica',
    ['La macchina è dal meccanico.', 'Il meccanico cambia le gomme.', 'La meccanica ha le mani sporche di olio.'],
    '|The mechanic|El mecánico / la mecánica|Le / la mécanicien(ne)|Automechanik / automechanička|Mechanik|Tamirci|Der Mechaniker / die Mechanikerin|整備士',
    'a male car mechanic in grey overalls holding a wrench next to a car wheel'
  ),
  job(
    'muratore',
    'il muratore',
    ['Il muratore costruisce un muro.', 'I muratori lavorano anche d’estate.', 'Mio nonno faceva il muratore.'],
    '|The builder (bricklayer)|El albañil|Le maçon|Zedník|Murarz|Duvarcı|Der Maurer|れんが職人、建設作業員',
    'a male bricklayer with a hard hat laying red bricks with a trowel on a low brick wall'
  ),
  job(
    'falegname',
    'il falegname / la falegname',
    ['Il falegname fa un tavolo di legno.', 'La falegname ripara la sedia.', 'Il falegname usa la sega.'],
    '|The carpenter|El carpintero / la carpintera|Le / la menuisier(ère)|Truhlář / truhlářka|Stolarz|Marangoz|Der Tischler / die Tischlerin|大工',
    'a female carpenter sawing a wooden plank on a workbench, wood shavings'
  ),
  job(
    'imbianchino',
    'l’imbianchino / l’imbianchina',
    [
      'L’imbianchino dipinge le pareti di bianco.',
      'Chiamiamo l’imbianchino per la cucina.',
      'L’imbianchino sale sulla scala.',
    ],
    '|The (house) painter|El pintor de paredes|Le peintre en bâtiment|Malíř pokojů|Malarz pokojowy|Boyacı (badanacı)|Der Maler (Anstreicher)|塗装工',
    'a male house painter in white overalls painting a wall with a paint roller, standing next to a small ladder'
  ),
  job(
    'giardiniere',
    'il giardiniere / la giardiniera',
    ['Il giardiniere taglia l’erba.', 'La giardiniera pianta i fiori.', 'Il giardiniere viene ogni lunedì.'],
    '|The gardener|El jardinero / la jardinera|Le / la jardinier(ère)|Zahradník / zahradnice|Ogrodnik|Bahçıvan|Der Gärtner / die Gärtnerin|庭師',
    'a male gardener with gloves and a straw hat trimming a green bush with garden shears'
  ),
  job(
    'contadino',
    'il contadino / la contadina',
    [
      'Il contadino raccoglie i pomodori.',
      'La contadina vende la verdura al mercato.',
      'I miei nonni erano contadini.',
    ],
    '|The farmer|El campesino / la campesina|Le paysan / la paysanne|Zemědělec / zemědělkyně|Rolnik / rolniczka|Çiftçi|Der Bauer / die Bäuerin|農家',
    'a female farmer in a straw hat and boots holding a wooden crate full of tomatoes and vegetables',
    ['agricoltore', 'l’agricoltore']
  ),
  job(
    'operaio',
    'l’operaio / l’operaia',
    ['L’operaio lavora in fabbrica.', 'Gli operai iniziano alle sei.', 'Mia madre faceva l’operaia.'],
    '|The (factory) worker|El obrero / la obrera|L’ouvrier / l’ouvrière|Dělník / dělnice|Robotnik / robotnica|İşçi|Der Arbeiter / die Arbeiterin|工員、労働者',
    'a male factory worker with safety glasses, ear protection and orange high-visibility vest, holding a clipboard next to a machine'
  ),
  job(
    'spazzino',
    'lo spazzino / la spazzina',
    ['Lo spazzino pulisce la strada.', 'La mattina presto passa lo spazzino.', 'Gli spazzini raccolgono le foglie.'],
    '|The street sweeper|El barrendero / la barrendera|L’éboueur, le balayeur|Metař / uklízečka ulic|Zamiatacz ulic|Çöpçü|Der Straßenkehrer / die Straßenkehrerin|清掃作業員',
    'a female street sweeper in an orange high-visibility uniform sweeping leaves with a big broom next to a wheeled bin',
    ['netturbino', 'il netturbino']
  ),

  // --- trasporti e servizi -----------------------------------------------------------------
  job(
    'postino',
    'il postino / la postina',
    ['Il postino porta le lettere.', 'La postina arriva in bicicletta.', 'Oggi il postino non è passato.'],
    '|The postman / the postwoman|El cartero / la cartera|Le facteur / la factrice|Pošťák / pošťačka|Listonosz / listonoszka|Postacı|Der Briefträger / die Briefträgerin|郵便配達員',
    'a male postman in a uniform with a big shoulder bag holding a few letters'
  ),
  job(
    'autista',
    'l’autista',
    ['L’autista dell’autobus è molto gentile.', 'Mio padre fa l’autista.', 'L’autista si ferma alla fermata.'],
    '|The driver|El / la conductor(a), el chófer|Le / la chauffeur(e)|Řidič / řidička|Kierowca|Şoför|Der Fahrer / die Fahrerin|運転手',
    'an adult woman bus driver of about 40 in a blue uniform shirt and tie standing next to the front door of a city bus, holding a peaked cap'
  ),
  job(
    'tassista',
    'il tassista / la tassista',
    [
      'Il tassista conosce tutte le strade.',
      'La tassista mi porta alla stazione.',
      'Quanto costa? – chiedo al tassista.',
    ],
    '|The taxi driver|El / la taxista|Le / la chauffeur de taxi|Taxikář / taxikářka|Taksówkarz / taksówkarka|Taksici|Der Taxifahrer / die Taxifahrerin|タクシー運転手',
    'a male taxi driver leaning on a yellow taxi with a taxi sign on the roof, holding the car keys'
  ),
  job(
    'pilota',
    'il pilota / la pilota',
    ['La pilota fa atterrare l’aereo.', 'Il pilota parla ai passeggeri.', 'Da bambino volevo fare il pilota.'],
    '|The pilot|El / la piloto|Le / la pilote|Pilot / pilotka|Pilot|Pilot|Der Pilot / die Pilotin|パイロット',
    'a female airline pilot in a dark uniform with a pilot hat, holding a small suitcase, an airplane in the far background'
  ),
  job(
    'guida',
    'la guida turistica',
    [
      'La guida turistica ci mostra il Colosseo.',
      'Luca fa la guida turistica a Firenze.',
      'Seguite la guida, per favore!',
    ],
    '|The tour guide|El / la guía turístico/a|Le / la guide touristique|Průvodce / průvodkyně|Przewodnik / przewodniczka|Turist rehberi|Der Reiseführer / die Reiseführerin|観光ガイド',
    'a male tour guide raising a small flag on a stick, smiling and pointing to the side',
    ['guida', 'la guida', 'il guida']
  ),
  job(
    'babysitter',
    'la babysitter',
    ['La babysitter gioca con i bambini.', 'Stasera usciamo: viene la babysitter.', 'Mio fratello fa il babysitter.'],
    '|The babysitter|La niñera, el / la canguro|La / le baby-sitter|Chůva|Opiekunka do dzieci|Bebek bakıcısı|Der Babysitter / die Babysitterin|ベビーシッター',
    'a young female babysitter reading a colourful picture book to a small child sitting next to her',
    ['baby-sitter', 'la baby-sitter', 'il babysitter']
  ),

  // --- ufficio, legge, tecnica, scienza ----------------------------------------------------
  job(
    'impiegato',
    'l’impiegato / l’impiegata',
    ['L’impiegata lavora in banca.', 'Mio padre fa l’impiegato in un ufficio.', 'L’impiegato risponde al telefono.'],
    '|The office worker (clerk)|El empleado / la empleada|L’employé / l’employée|Úředník / úřednice|Urzędnik / urzędniczka|Memur, ofis çalışanı|Der Angestellte / die Angestellte|会社員、事務員',
    'a female office worker in a blouse sitting at a desk with a computer and papers, talking on a desk phone'
  ),
  job(
    'avvocato',
    'l’avvocato / l’avvocata',
    ['L’avvocato difende il cliente.', 'Mia cugina fa l’avvocata.', 'Ho bisogno di un avvocato.'],
    '|The lawyer|El abogado / la abogada|L’avocat / l’avocate|Advokát / advokátka|Adwokat / adwokatka|Avukat|Der Anwalt / die Anwältin|弁護士',
    'a male lawyer in a dark suit holding a leather briefcase and a folder of documents',
    ['l’avvocatessa', 'avvocatessa']
  ),
  job(
    'giudice',
    'il giudice / la giudice',
    ['La giudice legge la sentenza.', 'Il giudice batte il martelletto.', 'Mia zia fa il giudice a Roma.'],
    '|The judge|El / la juez|Le / la juge|Soudce / soudkyně|Sędzia|Hakim|Der Richter / die Richterin|裁判官',
    'a female judge in a black robe holding a wooden gavel'
  ),
  job(
    'architetto',
    'l’architetto / l’architetta',
    ['L’architetto disegna una casa.', 'L’architetta ha progettato questo ponte.', 'Studio per diventare architetto.'],
    '|The architect|El arquitecto / la arquitecta|L’architecte|Architekt / architektka|Architekt / architektka|Mimar|Der Architekt / die Architektin|建築家',
    'a male architect with glasses holding a rolled-up blueprint next to a small white model of a house'
  ),
  job(
    'ingegnere',
    'l’ingegnere / l’ingegnera',
    ['L’ingegnere controlla il cantiere.', 'Mia sorella fa l’ingegnera.', 'Gli ingegneri progettano i ponti.'],
    '|The engineer|El ingeniero / la ingeniera|L’ingénieur / l’ingénieure|Inženýr / inženýrka|Inżynier / inżynierka|Mühendis|Der Ingenieur / die Ingenieurin|エンジニア、技師',
    'a female engineer with a white hard hat holding a tablet, looking at plans'
  ),
  job(
    'informatico',
    'l’informatico / l’informatica',
    [
      'L’informatico ripara il mio computer.',
      'Mia figlia fa l’informatica e scrive programmi.',
      'L’informatico lavora davanti a tre schermi.',
    ],
    '|The IT specialist (programmer)|El informático / la informática|L’informaticien / l’informaticienne|Informatik / informatička|Informatyk / informatyczka|Bilgisayarcı (yazılımcı)|Der Informatiker / die Informatikerin|IT技術者、プログラマー',
    'a young male programmer with headphones around his neck typing on a laptop, a second monitor with colourful lines of code',
    ['programmatore', 'il programmatore', 'programmatrice', 'la programmatrice']
  ),
  job(
    'scienziato',
    'lo scienziato / la scienziata',
    [
      'La scienziata lavora in laboratorio.',
      'Lo scienziato guarda al microscopio.',
      'Rita Levi-Montalcini era una grande scienziata.',
    ],
    '|The scientist|El científico / la científica|Le / la scientifique|Vědec / vědkyně|Naukowiec|Bilim insanı|Der Wissenschaftler / die Wissenschaftlerin|科学者',
    'a female scientist in a lab coat and safety glasses holding a test tube with a blue liquid next to a microscope'
  ),
  job(
    'poliziotto',
    'il poliziotto / la poliziotta',
    [
      'Il poliziotto dirige il traffico.',
      'Se hai un problema, chiedi a una poliziotta.',
      'I poliziotti arrivano con la sirena.',
    ],
    '|The police officer|El policía / la policía|Le policier / la policière|Policista / policistka|Policjant / policjantka|Polis memuru|Der Polizist / die Polizistin|警察官',
    'a female police officer in a dark blue uniform and cap, friendly, raising one hand'
  ),
  job(
    'vigile-del-fuoco',
    'il vigile del fuoco',
    [
      'Il vigile del fuoco spegne l’incendio.',
      'I vigili del fuoco salvano il gatto sull’albero.',
      'Il numero dei vigili del fuoco è il 115.',
    ],
    '|The firefighter|El bombero / la bombera|Le pompier|Hasič / hasička|Strażak / strażaczka|İtfaiyeci|Der Feuerwehrmann / die Feuerwehrfrau|消防士',
    'a male firefighter in a full fire-resistant suit and helmet holding a fire hose',
    ['pompiere', 'il pompiere', 'la vigile del fuoco']
  ),
  job(
    'allenatore',
    'l’allenatore / l’allenatrice',
    [
      'L’allenatore parla con la squadra.',
      'La mia allenatrice di nuoto è severa.',
      'L’allenatore fischia la fine dell’allenamento.',
    ],
    '|The coach, the trainer|El entrenador / la entrenadora|L’entraîneur / l’entraîneuse|Trenér / trenérka|Trener / trenerka|Antrenör|Der Trainer / die Trainerin|コーチ、トレーナー',
    'a male sports coach in a tracksuit with a whistle around his neck holding a clipboard and a football under his arm'
  ),
];

/** La parola usata come esempio nei testi dell'esercizio e nella nota. */
export const jobExampleWord = { bare: 'cuoco', withArticle: 'il cuoco' };

export const jobTranslationExercises = [
  tr(
    'Che lavoro fai? – Faccio l’infermiera.',
    'What do you do for a living? – I’m a nurse.',
    '¿A qué te dedicas? – Soy enfermera.',
    'Qu’est-ce que tu fais comme travail ? – Je suis infirmière.',
    'Co děláš za práci? – Jsem zdravotní sestra.',
    'Czym się zajmujesz? – Jestem pielęgniarką.',
    'Ne iş yapıyorsun? – Hemşireyim.',
    'Was machst du beruflich? – Ich bin Krankenschwester.',
    'お仕事は何ですか？――看護師です。'
  ),
  tr(
    'Mio padre è medico e mia madre è avvocata.',
    'My father is a doctor and my mother is a lawyer.',
    'Mi padre es médico y mi madre es abogada.',
    'Mon père est médecin et ma mère est avocate.',
    'Můj otec je lékař a moje matka je advokátka.',
    'Mój ojciec jest lekarzem, a moja matka jest adwokatką.',
    'Babam doktor, annem avukat.',
    'Mein Vater ist Arzt und meine Mutter ist Anwältin.',
    '父は医者で、母は弁護士です。'
  ),
  tr(
    'Il cameriere porta il menù.',
    'The waiter brings the menu.',
    'El camarero trae la carta.',
    'Le serveur apporte le menu.',
    'Číšník přináší jídelní lístek.',
    'Kelner przynosi menu.',
    'Garson menüyü getiriyor.',
    'Der Kellner bringt die Speisekarte.',
    'ウェイターがメニューを持ってきます。'
  ),
  tr(
    'Da grande voglio fare l’attrice.',
    'When I grow up I want to be an actress.',
    'De mayor quiero ser actriz.',
    'Plus tard, je veux être actrice.',
    'Až budu velká, chci být herečka.',
    'Kiedy dorosnę, chcę być aktorką.',
    'Büyüyünce oyuncu olmak istiyorum.',
    'Wenn ich groß bin, will ich Schauspielerin werden.',
    '大きくなったら女優になりたいです。'
  ),
  tr(
    'La macchina è rotta: la porto dal meccanico.',
    'The car is broken: I’m taking it to the mechanic.',
    'El coche está roto: lo llevo al mecánico.',
    'La voiture est en panne : je l’emmène chez le mécanicien.',
    'Auto je rozbité: vezu ho k automechanikovi.',
    'Samochód jest zepsuty: zawiozę go do mechanika.',
    'Araba bozuk: tamirciye götürüyorum.',
    'Das Auto ist kaputt: Ich bringe es zum Mechaniker.',
    '車が壊れたので、整備士のところに持っていきます。'
  ),
  tr(
    'Mia sorella lavora come traduttrice.',
    'My sister works as a translator.',
    'Mi hermana trabaja como traductora.',
    'Ma sœur travaille comme traductrice.',
    'Moje sestra pracuje jako překladatelka.',
    'Moja siostra pracuje jako tłumaczka.',
    'Kız kardeşim çevirmen olarak çalışıyor.',
    'Meine Schwester arbeitet als Übersetzerin.',
    '姉は翻訳者として働いています。'
  ),
  tr(
    'Il panettiere apre alle sei di mattina.',
    'The baker opens at six in the morning.',
    'El panadero abre a las seis de la mañana.',
    'Le boulanger ouvre à six heures du matin.',
    'Pekař otevírá v šest ráno.',
    'Piekarz otwiera o szóstej rano.',
    'Fırıncı sabah altıda açıyor.',
    'Der Bäcker öffnet um sechs Uhr morgens.',
    'パン屋は朝6時に開きます。'
  ),
  tr(
    'Ho un appuntamento dal dentista.',
    'I have an appointment at the dentist’s.',
    'Tengo cita con el dentista.',
    'J’ai rendez-vous chez le dentiste.',
    'Mám objednávku u zubaře.',
    'Mam wizytę u dentysty.',
    'Diş hekiminden randevum var.',
    'Ich habe einen Termin beim Zahnarzt.',
    '歯医者の予約があります。'
  ),
  tr(
    'I vigili del fuoco sono arrivati subito.',
    'The firefighters arrived straight away.',
    'Los bomberos llegaron enseguida.',
    'Les pompiers sont arrivés tout de suite.',
    'Hasiči přijeli hned.',
    'Strażacy przyjechali od razu.',
    'İtfaiyeciler hemen geldi.',
    'Die Feuerwehrleute sind sofort gekommen.',
    '消防士たちはすぐに来ました。'
  ),
  tr(
    'La nostra professoressa di italiano è di Roma.',
    'Our Italian teacher is from Rome.',
    'Nuestra profesora de italiano es de Roma.',
    'Notre professeure d’italien est de Rome.',
    'Naše profesorka italštiny je z Říma.',
    'Nasza nauczycielka włoskiego jest z Rzymu.',
    'İtalyanca öğretmenimiz Romalı.',
    'Unsere Italienischlehrerin kommt aus Rom.',
    '私たちのイタリア語の先生はローマ出身です。'
  ),
];

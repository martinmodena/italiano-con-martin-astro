// Le parole della lezione di vocabolario «In viaggio» (2026-11-02).
//
// Secondo dei temi pratici proposti il 2026-11-02 (Martin: «Sì, i viaggi»), dopo «Dal medico e in farmacia».
// Tre gruppi: in aeroporto (9: il passaporto, la carta d'imbarco, il bagaglio a mano, la dogana...), in treno
// e in strada (14: il binario, la biglietteria, l'obliteratrice, il pullman, il casello, l'area di servizio...),
// dormire e visitare (11: la reception, la camera doppia, l'ostello, la guida, la cartolina...). Le parole gia'
// nella citta' (la stazione, il treno, l'albergo, il taxi) e nella montagna (lo zaino, la cartina) non si ripetono.
//
// Struttura di ogni voce: come health-vocabulary.mjs. `alt` e' la stringa «(ignorato)|en|es|fr|cs|pl|tr|de|ja».
//
// Foto REALISTICHE con gpt-image-1-mini a qualita' `medium`, `generate-animal-images.mjs --set viaggi`
// (TRAVEL_STYLE): oggetti ritagliati sul bianco, luoghi come foto rotonde, tabelloni e biglietti senza scritte.

import { tr } from './traits-base.mjs';

const LANG_ORDER = ['it', 'en', 'es', 'fr', 'cs', 'pl', 'tr', 'de', 'ja'];
const ARTICLE = /^(il|lo|la|l’|i|gli|le)\s?/;

/** Le forme della scheda, con e senza articolo e apostrofo, piu' quelle in `extra` (plurali, sinonimi). */
const answersFor = (word, extra) => {
  const list = [];
  for (const full of [...word.split(' / '), ...extra]) {
    for (const form of [full, full.replace(ARTICLE, '')]) {
      list.push(form);
      if (form.includes('’')) list.push(form.replace(/’/g, ' '), form.replace(/’/g, ''), form.replace(/’/g, "'"));
    }
  }
  return [...new Set(list)];
};

const trip = (slug, word, examples, alts, subject, extra = []) => {
  const alt = alts.split('|');
  if (alt.length !== LANG_ORDER.length) throw new Error(`«${slug}»: alt deve avere 9 campi`);
  alt[0] = word.charAt(0).toUpperCase() + word.slice(1);
  if (examples.length !== 3) throw new Error(`«${slug}»: servono tre frasi d'esempio`);
  return {
    image: `viaggi/${slug}`,
    slug,
    word,
    bare: word.split(' / ')[0].replace(ARTICLE, ''),
    examples,
    answers: answersFor(word, extra),
    subject,
    alt: Object.fromEntries(LANG_ORDER.map((lang, i) => [lang, alt[i]])),
  };
};

export const travelVocabulary = [
  // --- in aeroporto -----------------------------------------------------------------------------
  trip(
    'aeroporto',
    'l’aeroporto',
    ['L’aeroporto è a mezz’ora dal centro.', 'Ti vengo a prendere all’aeroporto.', 'All’aeroporto c’era una fila lunghissima.'],
    '|The airport|El aeropuerto|L’aéroport|Letiště|Lotnisko|Havalimanı|Der Flughafen|空港',
    'a modern airport terminal building with large glass windows and a control tower beside it, a plane parked in front, isolated cut-out with a small patch of tarmac, no words',
    ['aeroporti']
  ),
  trip(
    'aereo',
    'l’aereo',
    ['L’aereo atterra alle sei.', 'È la prima volta che prendo l’aereo.', 'In aereo dormo sempre.'],
    '|The plane|El avión|L’avion|Letadlo|Samolot|Uçak|Das Flugzeug|飛行機',
    'a passenger jet plane with a dark blue tail and a dark blue stripe along the white body, flying, seen from the side at a slight angle, clearly standing out from the white background, no logo, no text',
    ['aerei', 'l’aeroplano', 'aeroplano']
  ),
  trip(
    'passaporto',
    'il passaporto',
    ['Non dimenticare il passaporto!', 'Il mio passaporto scade a marzo.', 'Al controllo mi hanno chiesto il passaporto.'],
    '|The passport|El pasaporte|Le passeport|Cestovní pas|Paszport|Pasaport|Der Reisepass|パスポート',
    'a hand holding a dark red passport, closed, with a plain embossed emblem and no readable words',
    ['passaporti']
  ),
  trip(
    'carta-d-identita',
    'la carta d’identità',
    ['In Europa basta la carta d’identità.', 'Mi fa vedere la carta d’identità, per favore?', 'Ho perso la carta d’identità in treno.'],
    '|The identity card|El documento de identidad, el DNI|La carte d’identité|Občanský průkaz|Dowód osobisty|Kimlik kartı|Der Personalausweis|身分証明書',
    'a hand holding a light blue and pale pink plastic identity card with a small photo of a smiling face, a gold chip and dark grey lines instead of text, good contrast',
    ['carta d’identita', 'la carta d’identita', 'documento', 'il documento']
  ),
  trip(
    'carta-d-imbarco',
    'la carta d’imbarco',
    ['La carta d’imbarco è sul telefono.', 'Stampi la carta d’imbarco a casa?', 'All’uscita mostrate la carta d’imbarco.'],
    '|The boarding pass|La tarjeta de embarque|La carte d’embarquement|Palubní vstupenka|Karta pokładowa|Biniş kartı|Die Bordkarte|搭乗券',
    'a hand holding a paper boarding pass with a barcode and simple grey lines instead of text, a smartphone beside it',
    ['carte d’imbarco']
  ),
  trip(
    'valigia',
    'la valigia',
    ['Devo ancora fare la valigia.', 'La mia valigia è troppo pesante.', 'Ho una valigia rossa con le ruote.'],
    '|The suitcase|La maleta|La valise|Kufr|Walizka|Bavul, valiz|Der Koffer|スーツケース',
    'a red hard-shell suitcase on four wheels with the handle pulled up, product photo',
    ['valigie', 'le valigie']
  ),
  trip(
    'bagaglio-a-mano',
    'il bagaglio a mano',
    ['Viaggio solo con il bagaglio a mano.', 'Nel bagaglio a mano non si possono portare liquidi.', 'Il bagaglio a mano va sopra il sedile.'],
    '|The hand luggage, the carry-on|El equipaje de mano|Le bagage à main|Příruční zavazadlo|Bagaż podręczny|El bagajı|Das Handgepäck|機内持ち込み手荷物',
    'a small navy blue cabin trolley bag with a light jacket folded on top, product photo',
    ['bagaglio', 'il bagaglio', 'i bagagli', 'bagagli']
  ),
  trip(
    'controllo-di-sicurezza',
    'il controllo di sicurezza',
    ['Al controllo di sicurezza togli la giacca.', 'Il controllo di sicurezza è stato veloce.', 'Dopo il controllo di sicurezza c’è un bar.'],
    '|The security check|El control de seguridad|Le contrôle de sécurité|Bezpečnostní kontrola|Kontrola bezpieczeństwa|Güvenlik kontrolü|Die Sicherheitskontrolle|保安検査',
    'an airport security check: a grey plastic tray with a jacket and a phone going into an X-ray machine on a conveyor belt, a traveller walking through a metal detector gate',
    ['i controlli', 'controlli', 'il controllo', 'controllo']
  ),
  trip(
    'dogana',
    'la dogana',
    ['Alla dogana hanno aperto la mia valigia.', 'Hai qualcosa da dichiarare alla dogana?', 'Fuori dall’Europa si passa la dogana.'],
    '|Customs|La aduana|La douane|Celnice|Urząd celny, kontrola celna|Gümrük|Der Zoll|税関',
    'a customs officer in a dark blue uniform at a counter looking at an open suitcase in front of a traveller',
    ['dogane']
  ),
  // --- in treno e in strada ------------------------------------------------------------------
  trip(
    'binario',
    'il binario',
    ['Il treno per Roma parte dal binario sei.', 'Scusi, qual è il binario per Bari?', 'Aspettiamo sul binario.'],
    '|The platform, the track|El andén, la vía|Le quai, la voie|Nástupiště, kolej|Peron, tor|Peron|Das Gleis|（駅の）番線、ホーム',
    'an empty railway platform of an Italian station with the rails beside it, a bench and a hanging sign with a big number six, cropped into a circle',
    ['binari', 'i binari']
  ),
  trip(
    'biglietto',
    'il biglietto',
    ['Un biglietto per Firenze, per favore.', 'Ho comprato il biglietto online.', 'Il biglietto di andata e ritorno costa meno.'],
    '|The ticket|El billete|Le billet|Jízdenka, lístek|Bilet|Bilet|Die Fahrkarte, das Ticket|切符、チケット',
    'a hand holding a small orange and green paper train ticket with dark grey lines instead of text, clearly standing out from the white background',
    ['biglietti', 'i biglietti']
  ),
  trip(
    'biglietteria',
    'la biglietteria',
    ['La biglietteria apre alle sei.', 'Alla biglietteria c’è troppa gente: uso la macchinetta.', 'Ho chiesto l’orario in biglietteria.'],
    '|The ticket office|La taquilla, la venta de billetes|Le guichet, la billetterie|Pokladna|Kasa biletowa|Bilet gişesi|Der Fahrkartenschalter|切符売り場',
    'real photograph of a railway station ticket window: a clerk behind the glass and a traveller with a suitcase buying a ticket, photorealistic, not a drawing, not an illustration, no words on any sign',
    ['biglietterie']
  ),
  trip(
    'tabellone',
    'il tabellone',
    ['Guarda il tabellone: il treno è in ritardo.', 'Sul tabellone ci sono le partenze.', 'Il binario si vede sul tabellone.'],
    '|The departures board|El panel de salidas|Le tableau des départs|Odjezdová tabule|Tablica odjazdów|Kalkış panosu|Die Anzeigetafel|発車案内板',
    'a large black station departures board on which every line is only a row of small blank yellow rectangles, absolutely no letters, no words and no numbers anywhere on the board, two travellers looking up at it',
    ['tabelloni']
  ),
  trip(
    'obliteratrice',
    'l’obliteratrice',
    ['Prima di salire, timbra il biglietto nell’obliteratrice.', 'L’obliteratrice è vicino alla porta dell’autobus.', 'L’obliteratrice non funziona!'],
    '|The ticket validating machine|La máquina validadora|Le composteur|Označovač jízdenek|Kasownik|Bilet onaylama makinesi|Der Entwerter|改札機（切符に刻印する機械）',
    'a small yellow-and-green ticket validating machine mounted on a pole on a station platform, a hand inserting a paper ticket into its slot',
    ['obliteratrici', 'la macchinetta', 'macchinetta']
  ),
  trip(
    'carrozza',
    'la carrozza',
    ['Il mio posto è nella carrozza otto.', 'La carrozza ristorante è in fondo al treno.', 'In questa carrozza c’è silenzio.'],
    '|The (train) carriage, the coach|El vagón, el coche|La voiture (du train)|Vagon|Wagon|Vagon|Der Wagen, der Waggon|（電車の）車両',
    'the inside of a modern Italian train carriage with rows of blue seats and large windows, a few passengers sitting, cropped into a circle',
    ['carrozze', 'il vagone', 'vagone']
  ),
  trip(
    'passeggero',
    'il passeggero / la passeggera',
    ['I passeggeri scendono dal treno.', 'La passeggera accanto a me leggeva un libro.', 'Il pilota saluta i passeggeri.'],
    '|The passenger|El / la pasajero/a|Le passager / la passagère|Cestující|Pasażer / pasażerka|Yolcu|Der Fahrgast, der Passagier|乗客',
    'a scene cropped into a perfect circle, centred with wide white margins: a young woman in a dark green coat sitting in a blue train seat by the window with a small suitcase, smiling, green countryside visible through the window, rich natural colours and good contrast, nothing washed out or overexposed',
    ['passeggeri', 'i passeggeri', 'passeggere']
  ),
  trip(
    'traghetto',
    'il traghetto',
    ['Prendiamo il traghetto per la Sardegna.', 'Il traghetto parte dal porto alle dieci.', 'Sul traghetto ci sono anche le macchine.'],
    '|The ferry|El ferry, el transbordador|Le ferry|Trajekt|Prom|Feribot|Die Fähre|フェリー',
    'a large white car ferry sailing on calm blue sea, seen from the side, the water cropped into a circle, no text',
    ['traghetti']
  ),
  trip(
    'pullman',
    'il pullman',
    ['Il pullman per l’aeroporto parte ogni mezz’ora.', 'Siamo andati in gita in pullman.', 'In pullman costa meno che in treno.'],
    '|The coach, the long-distance bus|El autocar|Le car|Autobus (dálkový), zájezdový autobus|Autokar|Otobüs (şehirlerarası)|Der Reisebus|長距離バス、観光バス',
    'a large white modern touring coach bus seen from the front at an angle, no logo, no text',
    ['pullman', 'la corriera', 'corriera']
  ),
  trip(
    'autostrada',
    'l’autostrada',
    ['In autostrada non si può andare oltre i 130 all’ora.', 'Prendiamo l’autostrada o la statale?', 'C’è coda in autostrada.'],
    '|The motorway, the highway|La autopista|L’autoroute|Dálnice|Autostrada|Otoyol, otoban|Die Autobahn|高速道路',
    'a wide motorway with several lanes curving through green hills, a few cars, cropped into a circle',
    ['autostrade']
  ),
  trip(
    'casello',
    'il casello',
    ['Al casello si paga il pedaggio.', 'Esci al casello di Bologna.', 'Al casello c’era coda.'],
    '|The toll booth|La cabina de peaje|Le péage|Mýtná brána|Bramka na autostradzie|Gişe (otoyol)|Die Mautstelle|料金所',
    'a motorway toll plaza with several booths under a wide roof and a car stopping at a raised barrier, signs without words, isolated cut-out',
    ['caselli', 'il pedaggio']
  ),
  trip(
    'area-di-servizio',
    'l’area di servizio',
    ['Ci fermiamo all’area di servizio per un caffè.', 'La prossima area di servizio è tra venti chilometri.', 'All’area di servizio facciamo benzina.'],
    '|The service station (on the motorway)|El área de servicio|L’aire de service|Odpočívadlo, čerpací stanice u dálnice|Miejsce obsługi podróżnych (MOP)|Dinlenme tesisi|Die Raststätte|サービスエリア',
    'a motorway service area filling most of the frame, a glass café building with a plain red roof with no letters at all, petrol pumps under a canopy and a few parked cars, isolated cut-out, completely blank signs and roofs with no letters, no words and no logos anywhere',
    ['l’autogrill', 'autogrill', 'aree di servizio']
  ),
  trip(
    'distributore',
    'il distributore di benzina',
    ['Il distributore è chiuso la domenica.', 'Fermati al distributore, siamo in riserva.', 'Al distributore faccio il pieno.'],
    '|The petrol station, the gas station|La gasolinera|La station-service|Čerpací stanice, benzinka|Stacja benzynowa|Benzin istasyonu|Die Tankstelle|ガソリンスタンド',
    'a petrol pump with a nozzle and a car being refuelled by a driver, no brand, no words',
    ['distributore', 'il distributore', 'il benzinaio', 'benzinaio', 'distributori']
  ),
  trip(
    'cintura',
    'la cintura di sicurezza',
    ['Allacciate la cintura di sicurezza!', 'Anche dietro bisogna mettere la cintura.', 'In aereo la cintura si allaccia così.'],
    '|The seat belt|El cinturón de seguridad|La ceinture de sécurité|Bezpečnostní pás|Pas bezpieczeństwa|Emniyet kemeri|Der Sicherheitsgurt|シートベルト',
    'a man sitting in a car seat fastening his seat belt, the buckle clearly visible',
    ['cintura', 'la cintura', 'cinture']
  ),
  // --- dormire e visitare --------------------------------------------------------------------
  trip(
    'reception',
    'la reception',
    ['Lascia la chiave alla reception.', 'La reception è aperta ventiquattr’ore.', 'Chiediamo alla reception un buon ristorante.'],
    '|The reception (desk)|La recepción|La réception|Recepce|Recepcja|Resepsiyon|Die Rezeption|フロント',
    'a hotel reception desk with a smiling receptionist handing a key card to a guest with a suitcase, no words',
    ['ricevimento', 'il ricevimento']
  ),
  trip(
    'camera-doppia',
    'la camera doppia',
    ['Vorrei una camera doppia per due notti.', 'La camera doppia ha il bagno privato.', 'C’è una camera singola libera?'],
    '|The double room|La habitación doble|La chambre double|Dvoulůžkový pokoj|Pokój dwuosobowy|Çift kişilik oda|Das Doppelzimmer|ダブルルーム、ツインルーム',
    'a tidy hotel room with a large double bed with white sheets, two bedside lamps and a window, cropped into a circle, no people',
    ['camera', 'la camera', 'camere', 'la camera singola', 'camera singola', 'la camera matrimoniale', 'camera matrimoniale']
  ),
  trip(
    'ostello',
    'l’ostello',
    ['In ostello si spende poco.', 'Nell’ostello ho conosciuto ragazzi di tutto il mondo.', 'La camera dell’ostello ha sei letti.'],
    '|The hostel|El albergue, el hostal|L’auberge de jeunesse|Hostel, ubytovna|Hostel, schronisko młodzieżowe|Hostel|Die Jugendherberge, das Hostel|ユースホステル、ホステル',
    'a hostel dormitory room with two wooden bunk beds, lockers and a backpack on a bed, cropped into a circle',
    ['ostelli']
  ),
  trip(
    'campeggio',
    'il campeggio',
    ['D’estate andiamo in campeggio al lago.', 'Il campeggio ha le docce calde.', 'Abbiamo montato la tenda nel campeggio.'],
    '|The campsite|El camping|Le camping|Kemp, tábořiště|Kemping, pole namiotowe|Kamp alanı|Der Campingplatz|キャンプ場',
    'a small campsite under pine trees with two tents and a camper van, cropped into a circle',
    ['campeggi']
  ),
  trip(
    'turista',
    'il turista / la turista',
    ['A Venezia ci sono tanti turisti.', 'Una turista mi ha chiesto la strada.', 'Non voglio sembrare un turista!'],
    '|The tourist|El / la turista|Le / la touriste|Turista / turistka|Turysta / turystka|Turist|Der Tourist / die Touristin|観光客',
    'a smiling tourist in comfortable clothes with a small backpack and a camera around his neck, holding a folded map, full body',
    ['turista', 'il turista', 'la turista', 'turisti', 'i turisti', 'turiste']
  ),
  trip(
    'guida',
    'la guida',
    ['La guida ci racconta la storia del castello.', 'Ho comprato una guida di Roma.', 'Seguite la guida, per favore!'],
    '|The guide (person or book)|El / la guía|Le guide|Průvodce / průvodkyně|Przewodnik / przewodniczka|Rehber|Der Reiseführer / die Reiseführerin|ガイド、ガイドブック',
    'a female tour guide holding up a small closed umbrella, talking to a little group of tourists, all fully visible',
    ['guide', 'la guida turistica', 'guida turistica']
  ),
  trip(
    'ufficio-turistico',
    'l’ufficio turistico',
    ['All’ufficio turistico danno le cartine gratis.', 'Dov’è l’ufficio turistico?', 'L’ufficio turistico è chiuso la domenica pomeriggio.'],
    '|The tourist information office|La oficina de turismo|L’office de tourisme|Turistické informační centrum|Informacja turystyczna|Turizm danışma bürosu|Die Touristeninformation|観光案内所',
    'the front of a small tourist information office in an old Italian building: above the door only a blue square sign with a single big white lowercase letter i and nothing else written, leaflets in the window, isolated cut-out, no other letters or words anywhere',
    ['l’ufficio informazioni', 'ufficio informazioni', 'informazioni turistiche']
  ),
  trip(
    'macchina-fotografica',
    'la macchina fotografica',
    ['Ho dimenticato la macchina fotografica in albergo.', 'Ormai faccio le foto con il telefono, non con la macchina fotografica.', 'Mi fai una foto con la mia macchina fotografica?'],
    '|The camera|La cámara (de fotos)|L’appareil photo|Fotoaparát|Aparat fotograficzny|Fotoğraf makinesi|Der Fotoapparat|カメラ',
    'a black digital camera with a lens and a strap, product photo, no brand',
    ['macchine fotografiche', 'la fotocamera', 'fotocamera']
  ),
  trip(
    'cartolina',
    'la cartolina',
    ['Ti mando una cartolina da Napoli.', 'Le cartoline si comprano in tabaccheria.', 'Sulla cartolina c’è il Colosseo.'],
    '|The postcard|La postal|La carte postale|Pohlednice|Pocztówka, kartka pocztowa|Kartpostal|Die Postkarte|絵はがき',
    'a few picture postcards with sunny Italian landscapes spread on a white surface, one turned over showing simple grey lines instead of handwriting and a stamp',
    ['cartoline', 'le cartoline']
  ),
  trip(
    'souvenir',
    'il souvenir',
    ['Ho comprato un souvenir per mia madre.', 'I souvenir vicino ai monumenti costano tanto.', 'Questo piccolo souvenir viene da Pisa.'],
    '|The souvenir|El recuerdo, el souvenir|Le souvenir|Suvenýr|Pamiątka|Hediyelik eşya|Das Souvenir, das Andenken|お土産',
    'a few small souvenirs from Italy on a white surface: a little Leaning Tower of Pisa model, a fridge magnet with a gondola and a small painted ceramic plate with lemons',
    ['souvenirs', 'il ricordo', 'ricordo', 'il ricordino', 'ricordino']
  ),
  trip(
    'fila',
    'la fila',
    ['Per i Musei Vaticani c’è sempre la fila.', 'Mettiti in fila, per favore.', 'Abbiamo fatto la fila per un’ora.'],
    '|The queue, the line|La cola, la fila|La file d’attente, la queue|Fronta|Kolejka|Kuyruk, sıra|Die Schlange|行列',
    'a line of five people of different ages standing one behind the other, waiting patiently, full bodies, seen from the side',
    ['file', 'la coda', 'coda']
  ),
];

/** L'esempio delle istruzioni di «Riconosci la parola». */
export const travelExampleWord = { bare: 'valigia', withArticle: 'la valigia' };

export const travelTranslationExercises = [
  tr(
    'A che ora parte il treno per Napoli?',
    'What time does the train to Naples leave?',
    '¿A qué hora sale el tren para Nápoles?',
    'À quelle heure part le train pour Naples ?',
    'V kolik hodin jede vlak do Neapole?',
    'O której odjeżdża pociąg do Neapolu?',
    'Napoli treni saat kaçta kalkıyor?',
    'Um wie viel Uhr fährt der Zug nach Neapel?',
    'ナポリ行きの電車は何時に出発しますか？'
  ),
  tr(
    'Un biglietto di andata e ritorno per Firenze, per favore.',
    'A return ticket to Florence, please.',
    'Un billete de ida y vuelta a Florencia, por favor.',
    'Un aller-retour pour Florence, s’il vous plaît.',
    'Zpáteční jízdenku do Florencie, prosím.',
    'Poproszę bilet w obie strony do Florencji.',
    'Floransa’ya gidiş-dönüş bir bilet, lütfen.',
    'Eine Hin- und Rückfahrkarte nach Florenz, bitte.',
    'フィレンツェまでの往復切符を1枚お願いします。'
  ),
  tr(
    'Ho perso la coincidenza a Bologna.',
    'I missed my connection in Bologna.',
    'Perdí el enlace en Bolonia.',
    'J’ai raté ma correspondance à Bologne.',
    'V Boloni mi ujel přípoj.',
    'Spóźniłem się na przesiadkę w Bolonii.',
    'Bologna’da aktarmayı kaçırdım.',
    'Ich habe in Bologna meinen Anschluss verpasst.',
    'ボローニャで乗り継ぎに間に合いませんでした。'
  ),
  tr(
    'Il volo è in ritardo di due ore.',
    'The flight is two hours late.',
    'El vuelo lleva dos horas de retraso.',
    'Le vol a deux heures de retard.',
    'Let má dvě hodiny zpoždění.',
    'Lot jest opóźniony o dwie godziny.',
    'Uçuş iki saat rötarlı.',
    'Der Flug hat zwei Stunden Verspätung.',
    '飛行機は2時間遅れています。'
  ),
  tr(
    'Abbiamo prenotato una camera doppia per tre notti.',
    'We booked a double room for three nights.',
    'Hemos reservado una habitación doble para tres noches.',
    'Nous avons réservé une chambre double pour trois nuits.',
    'Zarezervovali jsme si dvoulůžkový pokoj na tři noci.',
    'Zarezerwowaliśmy pokój dwuosobowy na trzy noce.',
    'Üç gece için çift kişilik bir oda ayırttık.',
    'Wir haben ein Doppelzimmer für drei Nächte gebucht.',
    'ダブルルームを3泊予約しました。'
  ),
  tr(
    'Devo ancora fare la valigia.',
    'I still have to pack my suitcase.',
    'Todavía tengo que hacer la maleta.',
    'Je dois encore faire ma valise.',
    'Ještě si musím sbalit kufr.',
    'Muszę jeszcze spakować walizkę.',
    'Daha bavulumu hazırlamam lazım.',
    'Ich muss noch den Koffer packen.',
    'まだスーツケースに荷物を詰めないといけません。'
  ),
  tr(
    'Scusi, da quale binario parte il treno per Milano?',
    'Excuse me, which platform does the train to Milan leave from?',
    'Perdone, ¿de qué andén sale el tren para Milán?',
    'Excusez-moi, de quel quai part le train pour Milan ?',
    'Promiňte, ze kterého nástupiště jede vlak do Milána?',
    'Przepraszam, z którego peronu odjeżdża pociąg do Mediolanu?',
    'Affedersiniz, Milano treni hangi perondan kalkıyor?',
    'Entschuldigung, von welchem Gleis fährt der Zug nach Mailand?',
    'すみません、ミラノ行きの電車は何番線から出ますか？'
  ),
  tr(
    'Buon viaggio! Mandami una cartolina.',
    'Have a good trip! Send me a postcard.',
    '¡Buen viaje! Mándame una postal.',
    'Bon voyage ! Envoie-moi une carte postale.',
    'Šťastnou cestu! Pošli mi pohlednici.',
    'Szczęśliwej podróży! Wyślij mi pocztówkę.',
    'İyi yolculuklar! Bana bir kartpostal gönder.',
    'Gute Reise! Schick mir eine Postkarte.',
    'よい旅を！絵はがきを送ってね。'
  ),
];

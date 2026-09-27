// I verbi della lezione «I verbi della città» (2026-09-27).
//
// Seguito di «La città», chiesto da Martin: i verbi di quello che si fa in citta', in tre gruppi: la strada e
// i mezzi (17: attraversare, girare, prendere l'autobus, timbrare il biglietto, parcheggiare...), negozi e
// servizi (16: fare la spesa, pagare, provare, fare la fila, prelevare, spedire...) e il tempo libero (7:
// passeggiare, visitare, guardare le vetrine...). Non ripete entrare, uscire, salire e scendere (in «I verbi
// della casa») ne' camminare, correre e indicare (in «I verbi del corpo»).
//
// Esercizio come «I verbi della casa» (`photoRows`): una foto per riga, i verbi nella barra, per ogni foto e'
// giusto il suo verbo piu' quelli di `fits`. Le coppie che una foto sola non distingue (partire/arrivare,
// comprare/pagare, aspettare/fare la fila) si accettano a vicenda.
//
// Struttura di ogni voce: come house-verbs.mjs. Foto REALISTICHE con gpt-image-1-mini a qualita' `low`,
// `generate-animal-images.mjs --set verbi-citta`, stile PEOPLE_STYLE.

import { tr } from './traits-base.mjs';

const LANG_ORDER = ['it', 'en', 'es', 'fr', 'cs', 'pl', 'tr', 'de', 'ja'];

const cv = (slug, word, def, glosses, examples, scene, fits = []) => {
  if (glosses.length !== 8) throw new Error(`«${slug}»: servono 8 traduzioni`);
  if (examples.length !== 3) throw new Error(`«${slug}»: servono tre frasi d'esempio`);
  return {
    image: `verbi-citta/${slug}`,
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

export const cityVerbs = [
  // --- la strada e i mezzi -------------------------------------------------------------------
  cv(
    'attraversare',
    'attraversare',
    'Passare da una parte all’altra della strada.',
    [
      'to cross',
      'cruzar',
      'traverser',
      'přejít',
      'przechodzić (przez ulicę)',
      'karşıdan karşıya geçmek',
      'überqueren',
      '渡る',
    ],
    [
      'Attraversa sulle strisce!',
      'Il nonno attraversa la strada con il bambino.',
      'Abbiamo attraversato il ponte a piedi.',
    ],
    'a grandfather holding a small boy by the hand crossing a street on a white zebra crossing'
  ),
  cv(
    'girare',
    'girare',
    'Cambiare direzione: a destra o a sinistra.',
    ['to turn', 'girar', 'tourner', 'zahnout', 'skręcać', 'dönmek', 'abbiegen', '曲がる'],
    ['Al semaforo gira a destra.', 'Gira a sinistra dopo la chiesa.', 'Hai girato troppo presto!'],
    'a cyclist on a city street holding out his right arm to signal a turn, turning right at a street corner'
  ),
  cv(
    'andare-dritto',
    'andare dritto',
    'Continuare nella stessa direzione, senza girare.',
    [
      'to go straight on',
      'seguir recto',
      'aller tout droit',
      'jít rovně',
      'iść prosto',
      'düz gitmek',
      'geradeaus gehen',
      'まっすぐ行く',
    ],
    ['Vai sempre dritto fino alla piazza.', 'Al semaforo andate dritto.', 'La stazione? Dritto per cento metri.'],
    'a young woman seen from behind walking straight ahead along the middle of a long straight pedestrian street lined with shops',
    ['passeggiare']
  ),
  cv(
    'aspettare',
    'aspettare',
    'Stare fermi finché arriva qualcuno o qualcosa.',
    ['to wait (for)', 'esperar', 'attendre', 'čekat', 'czekać', 'beklemek', 'warten', '待つ'],
    ['Aspetto l’autobus da venti minuti.', 'Aspettami qui!', 'Ti aspetto davanti al cinema.'],
    'a man at a bus stop checking his wristwatch, waiting, looking down the street',
    ['fare-la-fila']
  ),
  cv(
    'prendere-lautobus',
    'prendere l’autobus',
    'Salire sull’autobus per fare un viaggio.',
    [
      'to take (catch) the bus',
      'coger (tomar) el autobús',
      'prendre le bus',
      'jet autobusem',
      'jechać autobusem',
      'otobüse binmek',
      'den Bus nehmen',
      'バスに乗る',
    ],
    ['Prendo l’autobus alle otto.', 'Per il centro prendi il numero 5.', 'Oggi non prendo l’autobus: vado a piedi.'],
    'a woman with a handbag stepping up into an orange city bus through its open front door',
    ['timbrare']
  ),
  cv(
    'timbrare',
    'timbrare il biglietto',
    'Mettere il biglietto nella macchinetta che segna la data e l’ora.',
    [
      'to validate the ticket',
      'validar el billete',
      'composter le billet',
      'označit jízdenku',
      'skasować bilet',
      'bileti onaylatmak',
      'die Fahrkarte entwerten',
      '切符に刻印する',
    ],
    ['Sull’autobus devi timbrare il biglietto.', 'Hai timbrato?', 'Ho dimenticato di timbrare il biglietto del treno.'],
    'close view of a hand inserting a small paper ticket into a yellow ticket-validating machine on a bus'
  ),
  cv(
    'guidare',
    'guidare',
    'Portare una macchina, un autobus o una moto.',
    ['to drive', 'conducir', 'conduire', 'řídit', 'prowadzić (samochód)', 'araba sürmek', 'fahren (Auto)', '運転する'],
    ['Mio figlio guida da un anno.', 'Non guidare se hai bevuto!', 'Guidi tu o guido io?'],
    'a smiling woman driving a car, seen through the open side window, both hands on the steering wheel'
  ),
  cv(
    'parcheggiare',
    'parcheggiare',
    'Fermare e lasciare la macchina in un posto.',
    ['to park', 'aparcar', 'se garer, garer', 'zaparkovat', 'parkować', 'park etmek', 'parken', '駐車する'],
    ['Non trovo un posto per parcheggiare.', 'Ho parcheggiato davanti alla farmacia.', 'Qui non si può parcheggiare.'],
    'a small red car seen from the side, parking at the kerb between two parked cars, the driver visible through the open front side window turning the steering wheel, a blue parking sign with a white P on a pole'
  ),
  cv(
    'fermarsi',
    'fermarsi',
    'Smettere di muoversi.',
    [
      'to stop',
      'pararse, detenerse',
      's’arrêter',
      'zastavit se',
      'zatrzymać się',
      'durmak',
      'anhalten, stehen bleiben',
      '止まる',
    ],
    ['Fermati, il semaforo è rosso!', 'L’autobus si ferma davanti alla scuola.', 'Ci fermiamo a prendere un caffè?'],
    'a cyclist stopping with one foot on the ground in front of a red traffic light',
    ['aspettare']
  ),
  cv(
    'pedalare',
    'pedalare',
    'Andare in bicicletta spingendo i pedali.',
    [
      'to pedal, to cycle',
      'pedalear',
      'pédaler',
      'šlapat, jet na kole',
      'pedałować, jechać rowerem',
      'pedal çevirmek, bisiklet sürmek',
      'Rad fahren, in die Pedale treten',
      '自転車をこぐ',
    ],
    ['Pedalo fino al lavoro ogni giorno.', 'In salita è faticoso pedalare.', 'I bambini pedalano nel parco.'],
    'a young man riding a green city bicycle along a bike lane, pedalling, seen from the side',
    ['noleggiare']
  ),
  cv(
    'fare-il-pieno',
    'fare il pieno',
    'Riempire di benzina il serbatoio della macchina.',
    [
      'to fill up (the tank)',
      'llenar el depósito',
      'faire le plein',
      'natankovat plnou nádrž',
      'zatankować do pełna',
      'depoyu doldurmak',
      'volltanken',
      '満タンにする',
    ],
    [
      'Prima di partire faccio il pieno.',
      'Fare il pieno costa sempre di più.',
      'C’è un distributore: facciamo il pieno?',
    ],
    'a man at a petrol station holding the fuel nozzle in the tank opening of his car, the pump next to him, no text'
  ),
  cv(
    'prendere-un-taxi',
    'prendere un taxi',
    'Chiamare o fermare un taxi e salirci.',
    [
      'to take a taxi',
      'coger (tomar) un taxi',
      'prendre un taxi',
      'vzít si taxi',
      'wziąć taksówkę',
      'taksiye binmek',
      'ein Taxi nehmen',
      'タクシーに乗る',
    ],
    ['È tardi: prendiamo un taxi.', 'Ho preso un taxi dall’aeroporto.', 'Prendere un taxi a Roma costa caro.'],
    'a woman with a rolling suitcase raising her arm to stop a white taxi at the side of a street'
  ),
  cv(
    'perdersi',
    'perdersi',
    'Non sapere più dove si è e come andare avanti.',
    [
      'to get lost',
      'perderse',
      'se perdre',
      'ztratit se, zabloudit',
      'zgubić się',
      'kaybolmak',
      'sich verlaufen',
      '道に迷う',
    ],
    ['A Venezia ci siamo persi.', 'Senza la cartina mi perdo sempre.', 'Non ti perdere!'],
    'a confused tourist with a backpack standing at a street corner, turning a big paper map in his hands, looking around',
    ['chiedere-indicazioni']
  ),
  cv(
    'chiedere-indicazioni',
    'chiedere indicazioni',
    'Domandare a qualcuno la strada per arrivare in un posto.',
    [
      'to ask for directions',
      'preguntar el camino',
      'demander son chemin',
      'zeptat se na cestu',
      'zapytać o drogę',
      'yol sormak',
      'nach dem Weg fragen',
      '道を尋ねる',
    ],
    [
      'Mi scusi, posso chiederle un’indicazione?',
      'Chiediamo indicazioni a quel signore.',
      'Ho chiesto indicazioni per la stazione.',
    ],
    'a young tourist woman with a map asking an elderly local man for directions on the street, the man pointing down the road',
    ['perdersi']
  ),
  cv(
    'partire',
    'partire',
    'Andare via da un posto per cominciare un viaggio.',
    [
      'to leave, to depart',
      'salir, irse',
      'partir',
      'odjet, odjíždět',
      'wyjeżdżać, odjeżdżać',
      'yola çıkmak, kalkmak',
      'abfahren, losfahren',
      '出発する',
    ],
    ['Il treno parte alle nove.', 'Domani partiamo per le vacanze.', 'Quando parti?'],
    'a family with suitcases on a railway platform waving goodbye from the door of a train',
    ['arrivare', 'perdere-il-treno']
  ),
  cv(
    'arrivare',
    'arrivare',
    'Giungere nel posto dove si voleva andare.',
    [
      'to arrive',
      'llegar',
      'arriver',
      'přijet, přijít',
      'przyjechać, przyjść',
      'varmak, gelmek',
      'ankommen',
      '着く、到着する',
    ],
    ['Siamo arrivati a Roma alle dieci.', 'L’autobus arriva tra cinque minuti.', 'A che ora arrivi?'],
    'a young man with a backpack stepping off a train onto a platform and hugging his mother who is waiting for him',
    ['partire']
  ),
  cv(
    'perdere-il-treno',
    'perdere il treno',
    'Arrivare in ritardo quando il treno è già partito.',
    [
      'to miss the train',
      'perder el tren',
      'rater le train',
      'zmeškat vlak',
      'spóźnić się na pociąg',
      'treni kaçırmak',
      'den Zug verpassen',
      '電車に乗り遅れる',
    ],
    ['Corri, o perdiamo il treno!', 'Ho perso il treno per due minuti.', 'Se perdi l’autobus, prendi il prossimo.'],
    'a man in a suit with a briefcase running on a platform with his arm out as the train leaves without him',
    ['partire']
  ),

  // --- negozi e servizi ----------------------------------------------------------------------
  cv(
    'fare-la-spesa',
    'fare la spesa',
    'Comprare da mangiare e le cose per la casa.',
    [
      'to do the (food) shopping',
      'hacer la compra',
      'faire les courses',
      'nakupovat (potraviny)',
      'robić zakupy',
      'alışveriş yapmak (market)',
      'einkaufen (Lebensmittel)',
      '買い物をする（食料品）',
    ],
    ['Il sabato faccio la spesa al supermercato.', 'Chi fa la spesa oggi?', 'Ho fatto la spesa: il frigo è pieno.'],
    'a man pushing a supermarket trolley full of fruit, vegetables, bread and pasta along an aisle',
    ['comprare', 'scegliere']
  ),
  cv(
    'comprare',
    'comprare',
    'Prendere una cosa e pagarla.',
    ['to buy', 'comprar', 'acheter', 'koupit', 'kupować', 'satın almak', 'kaufen', '買う'],
    ['Compro il pane tutti i giorni.', 'Ho comprato un vestito nuovo.', 'Cosa compriamo per la festa?'],
    'a smiling woman leaving a clothes shop with two paper shopping bags in her hands',
    ['pagare']
  ),
  cv(
    'pagare',
    'pagare',
    'Dare i soldi per una cosa o un servizio.',
    ['to pay', 'pagar', 'payer', 'zaplatit', 'płacić', 'ödemek', 'bezahlen', '払う'],
    ['Pago con la carta.', 'Quanto hai pagato?', 'Oggi pago io il caffè!'],
    'a customer paying at a shop counter by holding a bank card against a card machine held by the cashier',
    ['comprare']
  ),
  cv(
    'scegliere',
    'scegliere',
    'Prendere una cosa fra tante.',
    ['to choose', 'elegir, escoger', 'choisir', 'vybrat', 'wybierać', 'seçmek', 'auswählen', '選ぶ'],
    ['Scegli il gusto del gelato.', 'Non so quale scegliere!', 'Ho scelto la maglia blu.'],
    'a girl pointing at the colourful fruit sorbets in a gelato counter, choosing a flavour',
    ['ordinare']
  ),
  cv(
    'provare',
    'provare',
    'Mettersi un vestito in negozio per vedere se va bene.',
    ['to try on', 'probarse', 'essayer', 'zkusit si', 'przymierzać', 'denemek (giysi)', 'anprobieren', '試着する'],
    ['Posso provare questi pantaloni?', 'I camerini per provare sono in fondo.', 'Ho provato la giacca, ma è stretta.'],
    'a young man in a shop trying on a jacket in front of a full-length mirror, looking at himself'
  ),
  cv(
    'fare-la-fila',
    'fare la fila',
    'Aspettare il proprio turno dietro altre persone.',
    [
      'to queue, to wait in line',
      'hacer cola',
      'faire la queue',
      'stát ve frontě',
      'stać w kolejce',
      'sıraya girmek',
      'Schlange stehen',
      '列に並ぶ',
    ],
    [
      'All’ufficio postale ho fatto la fila per un’ora.',
      'Fate la fila, per favore!',
      'Davanti al museo c’è tanta gente in fila.',
    ],
    'five people standing one behind the other in a queue in front of a ticket counter window',
    ['aspettare']
  ),
  cv(
    'prelevare',
    'prelevare',
    'Prendere dei soldi dal proprio conto, per esempio al bancomat.',
    [
      'to withdraw (money)',
      'sacar dinero',
      'retirer (de l’argent)',
      'vybrat (peníze)',
      'wypłacać',
      'para çekmek',
      'Geld abheben',
      'お金を引き出す',
    ],
    ['Devo prelevare al bancomat.', 'Ho prelevato cinquanta euro.', 'Qui si può prelevare anche di notte.'],
    'a woman taking banknotes out of a cash machine in the wall of a bank'
  ),
  cv(
    'spedire',
    'spedire',
    'Mandare una lettera o un pacco con la posta.',
    [
      'to send, to post',
      'enviar, mandar',
      'envoyer, expédier',
      'poslat',
      'wysyłać',
      'göndermek',
      'schicken, verschicken',
      '送る、発送する',
    ],
    ['Spedisco un pacco a mia sorella.', 'Hai spedito la cartolina?', 'Ti spedisco il libro domani.'],
    'a man at a post office counter handing a cardboard parcel to the clerk'
  ),
  cv(
    'ordinare',
    'ordinare',
    'Chiedere al bar o al ristorante quello che si vuole.',
    ['to order', 'pedir', 'commander', 'objednat si', 'zamawiać', 'sipariş vermek', 'bestellen', '注文する'],
    ['Ordiniamo due caffè e una spremuta.', 'Avete già ordinato?', 'Ho ordinato una pizza marinara.'],
    'a couple sitting at a café table ordering from a waiter who writes on a small notepad',
    ['scegliere']
  ),
  cv(
    'prenotare',
    'prenotare',
    'Fissare prima un posto, un tavolo o una camera.',
    [
      'to book, to reserve',
      'reservar',
      'réserver',
      'rezervovat',
      'rezerwować',
      'rezervasyon yapmak',
      'reservieren, buchen',
      '予約する',
    ],
    ['Ho prenotato un tavolo per le otto.', 'Bisogna prenotare la visita al museo.', 'Hai prenotato l’albergo?'],
    'a woman on the phone in a restaurant, pointing at a page of a reservation book held by a waiter'
  ),
  cv(
    'vendere',
    'vendere',
    'Dare una cosa in cambio di soldi.',
    ['to sell', 'vender', 'vendre', 'prodávat', 'sprzedawać', 'satmak', 'verkaufen', '売る'],
    ['Al mercato vendono frutta e verdura.', 'Vendo la mia bici vecchia.', 'Questo negozio vende solo libri.'],
    'a market seller behind a fruit and vegetable stall handing a paper bag of tomatoes to a customer',
    ['pesare']
  ),
  cv(
    'pesare',
    'pesare',
    'Mettere una cosa sulla bilancia per sapere quanto è pesante.',
    ['to weigh', 'pesar', 'peser', 'vážit', 'ważyć', 'tartmak', 'wiegen', '量る'],
    ['Il fruttivendolo pesa le mele.', 'Quanto pesa questo pacco?', 'Pesa la farina prima di fare la torta.'],
    'a market seller weighing a bunch of bananas on a small shop scale',
    ['vendere']
  ),
  cv(
    'noleggiare',
    'noleggiare',
    'Usare per un po’ di tempo una cosa pagando, per esempio una bici o una macchina.',
    [
      'to rent, to hire',
      'alquilar',
      'louer',
      'půjčit si (za poplatek)',
      'wypożyczać',
      'kiralamak',
      'mieten, leihen',
      '（有料で）借りる、レンタルする',
    ],
    [
      'Noleggiamo le bici per un giro in centro.',
      'Ho noleggiato una macchina all’aeroporto.',
      'Quanto costa noleggiare gli sci?',
    ],
    'a young woman taking a bicycle out of a row of city bike-sharing bikes at a docking station',
    ['pedalare']
  ),
  cv(
    'consegnare',
    'consegnare',
    'Portare una cosa a chi la aspetta.',
    [
      'to deliver',
      'entregar',
      'livrer, remettre',
      'doručit',
      'dostarczać',
      'teslim etmek',
      'liefern, zustellen',
      '配達する、届ける',
    ],
    ['Il corriere consegna il pacco domani.', 'Consegnano la pizza a casa?', 'Ho consegnato i documenti in municipio.'],
    'a delivery rider with a big insulated backpack handing a pizza box to a woman at her front door'
  ),
  cv(
    'costruire',
    'costruire',
    'Fare una casa, un ponte o una strada mettendo insieme i materiali.',
    ['to build', 'construir', 'construire', 'stavět', 'budować', 'inşa etmek', 'bauen', '建てる、作る'],
    [
      'Stanno costruendo un nuovo ospedale.',
      'Hanno costruito il ponte in un anno.',
      'Mio nonno ha costruito questa casa.',
    ],
    'two construction workers in helmets and orange vests laying bricks on a wall, scaffolding behind them'
  ),
  cv(
    'rubare',
    'rubare',
    'Prendere di nascosto una cosa che non è propria.',
    ['to steal', 'robar', 'voler', 'ukrást', 'kraść', 'çalmak', 'stehlen', '盗む'],
    [
      'Mi hanno rubato il portafoglio sull’autobus!',
      'Attento, qui rubano le biciclette.',
      'Chi ha rubato la mia penna?',
    ],
    'a pickpocket in a crowd carefully taking a wallet out of the back pocket of a man who does not notice'
  ),

  // --- il tempo libero -------------------------------------------------------------------------
  cv(
    'passeggiare',
    'passeggiare',
    'Camminare con calma, per piacere.',
    [
      'to stroll, to go for a walk',
      'pasear',
      'se promener',
      'procházet se',
      'spacerować',
      'gezinti yapmak',
      'spazieren gehen',
      '散歩する',
    ],
    ['La sera passeggiamo in centro.', 'Passeggiare fa bene.', 'Abbiamo passeggiato lungo il fiume.'],
    'an elderly couple walking slowly arm in arm through a city square, relaxed and smiling',
    ['andare-dritto', 'guardare-le-vetrine']
  ),
  cv(
    'visitare',
    'visitare',
    'Andare a vedere un posto, un museo o una città.',
    [
      'to visit',
      'visitar',
      'visiter',
      'navštívit, prohlédnout si',
      'zwiedzać',
      'gezmek, ziyaret etmek',
      'besichtigen, besuchen',
      '訪れる、見学する',
    ],
    ['Domani visitiamo il Colosseo.', 'Hai mai visitato Napoli?', 'Visitare i musei il lunedì è impossibile.'],
    'a group of tourists with a guide holding up a small flag, looking up at an old cathedral facade',
    ['fotografare']
  ),
  cv(
    'fotografare',
    'fotografare',
    'Fare una foto.',
    [
      'to photograph, to take a photo',
      'fotografiar, hacer una foto',
      'photographier',
      'fotografovat',
      'fotografować',
      'fotoğraf çekmek',
      'fotografieren',
      '写真を撮る',
    ],
    ['Fotografo la fontana con il telefono.', 'Ci fotografi davanti al duomo?', 'Nel museo è vietato fotografare.'],
    'a young woman taking a photo of an old fountain with a camera',
    ['visitare']
  ),
  cv(
    'guardare-le-vetrine',
    'guardare le vetrine',
    'Passeggiare davanti ai negozi guardando cosa vendono.',
    [
      'to go window-shopping',
      'mirar escaparates',
      'faire du lèche-vitrines',
      'dívat se do výloh',
      'oglądać wystawy',
      'vitrinlere bakmak',
      'einen Schaufensterbummel machen',
      'ウィンドーショッピングをする',
    ],
    [
      'Il sabato guardiamo le vetrine in centro.',
      'Guardo le vetrine ma non compro niente.',
      'A Natale le vetrine sono bellissime.',
    ],
    'two friends standing in front of a shop window with shoes and bags, pointing at something inside',
    ['passeggiare']
  ),
  cv(
    'incontrarsi',
    'incontrarsi',
    'Vedersi con qualcuno in un posto.',
    [
      'to meet (up)',
      'quedar, encontrarse',
      'se retrouver, se rencontrer',
      'sejít se, potkat se',
      'spotykać się',
      'buluşmak',
      'sich treffen',
      '会う、待ち合わせる',
    ],
    ['Ci incontriamo in piazza alle sei.', 'Ci siamo incontrati per caso al mercato.', 'Dove ci incontriamo?'],
    'two young women meeting in a city square, greeting each other with a hug, one waving',
    ['divertirsi']
  ),
  cv(
    'brindare',
    'brindare',
    'Alzare i bicchieri e toccarli per festeggiare.',
    [
      'to toast, to drink to',
      'brindar',
      'trinquer, porter un toast',
      'připít si',
      'wznosić toast',
      'kadeh kaldırmak',
      'anstoßen',
      '乾杯する',
    ],
    ['Brindiamo agli sposi!', 'A mezzanotte brindiamo con lo spumante.', 'Alla salute! Brindiamo!'],
    'four friends at an outdoor café table raising and clinking glasses of sparkling wine, laughing',
    ['divertirsi']
  ),
  cv(
    'divertirsi',
    'divertirsi',
    'Passare il tempo in modo piacevole.',
    [
      'to have fun, to enjoy oneself',
      'divertirse, pasarlo bien',
      's’amuser',
      'bavit se',
      'dobrze się bawić',
      'eğlenmek',
      'sich amüsieren, Spaß haben',
      '楽しむ',
    ],
    ['Ci siamo divertiti tanto alla festa!', 'Divertitevi!', 'I bambini si divertono al luna park.'],
    'a group of young friends laughing and dancing at an outdoor summer street festival with string lights',
    ['brindare', 'incontrarsi']
  ),
];

export const cityVerbTranslationExercises = [
  tr(
    'Al semaforo gira a sinistra e poi vai dritto.',
    'At the traffic lights turn left and then go straight on.',
    'En el semáforo gira a la izquierda y luego sigue recto.',
    'Au feu, tourne à gauche, puis va tout droit.',
    'Na semaforu zahni doleva a pak jdi rovně.',
    'Na światłach skręć w lewo, a potem idź prosto.',
    'Trafik lambasında sola dön, sonra düz git.',
    'An der Ampel bieg links ab und geh dann geradeaus.',
    '信号を左に曲がって、それからまっすぐ行ってください。'
  ),
  tr(
    'Sull’autobus devi timbrare il biglietto.',
    'On the bus you have to validate your ticket.',
    'En el autobús tienes que validar el billete.',
    'Dans le bus, tu dois composter ton billet.',
    'V autobuse musíš označit jízdenku.',
    'W autobusie musisz skasować bilet.',
    'Otobüste bileti onaylatman gerekiyor.',
    'Im Bus musst du die Fahrkarte entwerten.',
    'バスでは切符に刻印しなければなりません。'
  ),
  tr(
    'Posso pagare con la carta?',
    'Can I pay by card?',
    '¿Puedo pagar con tarjeta?',
    'Je peux payer par carte ?',
    'Můžu zaplatit kartou?',
    'Czy mogę zapłacić kartą?',
    'Kartla ödeyebilir miyim?',
    'Kann ich mit Karte bezahlen?',
    'カードで払えますか？'
  ),
  tr(
    'Ci incontriamo davanti al museo alle dieci.',
    'We’ll meet in front of the museum at ten.',
    'Quedamos delante del museo a las diez.',
    'On se retrouve devant le musée à dix heures.',
    'Sejdeme se před muzeem v deset.',
    'Spotkamy się przed muzeum o dziesiątej.',
    'Saat onda müzenin önünde buluşuyoruz.',
    'Wir treffen uns um zehn vor dem Museum.',
    '10時に博物館の前で会いましょう。'
  ),
  tr(
    'Corri, o perdiamo il treno!',
    'Run, or we’ll miss the train!',
    '¡Corre, o perdemos el tren!',
    'Cours, sinon on va rater le train !',
    'Běž, nebo zmeškáme vlak!',
    'Biegnij, bo spóźnimy się na pociąg!',
    'Koş, yoksa treni kaçıracağız!',
    'Lauf, sonst verpassen wir den Zug!',
    '走って！電車に乗り遅れるよ！'
  ),
  tr(
    'Mi scusi, mi sono perso: dov’è la stazione?',
    'Excuse me, I’m lost: where is the station?',
    'Perdone, me he perdido: ¿dónde está la estación?',
    'Excusez-moi, je suis perdu : où est la gare ?',
    'Promiňte, ztratil jsem se: kde je nádraží?',
    'Przepraszam, zgubiłem się: gdzie jest dworzec?',
    'Affedersiniz, kayboldum: istasyon nerede?',
    'Entschuldigung, ich habe mich verlaufen: Wo ist der Bahnhof?',
    'すみません、道に迷いました。駅はどこですか？'
  ),
  tr(
    'All’ufficio postale ho fatto la fila per spedire un pacco.',
    'At the post office I queued to send a parcel.',
    'En correos hice cola para enviar un paquete.',
    'À la poste, j’ai fait la queue pour envoyer un colis.',
    'Na poště jsem stál ve frontě, abych poslal balík.',
    'Na poczcie stałem w kolejce, żeby wysłać paczkę.',
    'Postanede paket göndermek için sıraya girdim.',
    'Auf der Post habe ich Schlange gestanden, um ein Paket zu schicken.',
    '郵便局で小包を送るために列に並びました。'
  ),
  tr(
    'Ho prenotato un tavolo per quattro alle otto.',
    'I’ve booked a table for four at eight.',
    'He reservado una mesa para cuatro a las ocho.',
    'J’ai réservé une table pour quatre à huit heures.',
    'Zarezervoval jsem stůl pro čtyři na osmou.',
    'Zarezerwowałem stolik dla czterech osób na ósmą.',
    'Saat sekiz için dört kişilik masa ayırttım.',
    'Ich habe um acht einen Tisch für vier reserviert.',
    '8時に4人で席を予約しました。'
  ),
  tr(
    'In centro non si può parcheggiare: prendiamo un taxi.',
    'You can’t park in the centre: let’s take a taxi.',
    'En el centro no se puede aparcar: cojamos un taxi.',
    'On ne peut pas se garer au centre : prenons un taxi.',
    'V centru se nedá parkovat: vezmeme si taxi.',
    'W centrum nie można parkować: weźmy taksówkę.',
    'Merkeze park edilmiyor: taksiye binelim.',
    'Im Zentrum kann man nicht parken: Nehmen wir ein Taxi.',
    '中心街には駐車できないので、タクシーに乗りましょう。'
  ),
  tr(
    'La sera passeggiamo e guardiamo le vetrine.',
    'In the evening we stroll and look in the shop windows.',
    'Por la tarde paseamos y miramos escaparates.',
    'Le soir, nous nous promenons et faisons du lèche-vitrines.',
    'Večer se procházíme a díváme se do výloh.',
    'Wieczorem spacerujemy i oglądamy wystawy.',
    'Akşamları gezinip vitrinlere bakıyoruz.',
    'Abends gehen wir spazieren und machen einen Schaufensterbummel.',
    '夜は散歩をしてウィンドーショッピングをします。'
  ),
];

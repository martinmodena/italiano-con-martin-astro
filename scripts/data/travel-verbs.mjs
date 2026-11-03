// I verbi della lezione «I verbi del viaggio» (2026-11-03).
//
// Seguito di «In viaggio», chiesto da Martin: i verbi di chi viaggia, in quattro gruppi: preparare il
// viaggio (6: fare la valigia, fare il biglietto, cambiare i soldi...), in aeroporto (8: fare il check-in,
// prendere l'aereo, decollare, atterrare, ritirare i bagagli...), in treno e in strada (4: trascinare la
// valigia, fare l'autostop, dare un passaggio...) e in vacanza (7: alloggiare, affittare, esplorare...).
// Non ripete i verbi gia' nel sito: partire, arrivare, tornare, timbrare il biglietto, perdere il treno,
// prendere l'autobus e il taxi, prenotare, noleggiare, visitare, fotografare, perdersi, chiedere indicazioni
// («I verbi della citta'»), salire e scendere («I verbi della casa»), montare la tenda, campeggiare e
// pernottare («I verbi della montagna»), salpare e sbarcare («I verbi del mare»), andare in ferie («I verbi
// dell'ufficio»).
//
// Esercizio come «I verbi della citta'» (`photoRows`): una foto per riga, i verbi nella barra, per ogni foto e'
// giusto il suo verbo piu' quelli di `fits`. Le coppie che una foto sola non distingue (fare/disfare la
// valigia, decollare/atterrare) si accettano a vicenda; «viaggiare» va bene su tutte le foto di chi e' in
// viaggio.
//
// Struttura di ogni voce: come city-verbs.mjs. Foto REALISTICHE con gpt-image-1-mini a qualita' `medium`,
// `generate-animal-images.mjs --set verbi-viaggio`, stile PEOPLE_STYLE.

import { tr } from './traits-base.mjs';

const LANG_ORDER = ['it', 'en', 'es', 'fr', 'cs', 'pl', 'tr', 'de', 'ja'];

const tv = (slug, word, def, glosses, examples, scene, fits = []) => {
  if (glosses.length !== 8) throw new Error(`«${slug}»: servono 8 traduzioni`);
  if (examples.length !== 3) throw new Error(`«${slug}»: servono tre frasi d'esempio`);
  return {
    image: `verbi-viaggio/${slug}`,
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

export const travelVerbs = [
  // --- preparare il viaggio --------------------------------------------------------------------
  tv(
    'fare-la-valigia',
    'fare la valigia',
    'Mettere nella valigia le cose da portare in viaggio.',
    [
      'to pack (one’s suitcase)',
      'hacer la maleta',
      'faire sa valise',
      'balit si kufr',
      'pakować walizkę',
      'bavul hazırlamak',
      'den Koffer packen',
      'スーツケースに荷物を詰める',
    ],
    ['Domani parto e non ho ancora fatto la valigia.', 'Fai la valigia la sera prima!', 'Mia figlia fa sempre la valigia all’ultimo momento.'],
    'a young woman putting neatly folded sweaters into an open suitcase lying on a bed, a small pile of clothes beside it',
    ['disfare-la-valigia']
  ),
  tv(
    'disfare-la-valigia',
    'disfare la valigia',
    'Togliere le cose dalla valigia quando si arriva.',
    [
      'to unpack',
      'deshacer la maleta',
      'défaire sa valise',
      'vybalit si kufr',
      'rozpakować walizkę',
      'bavulu boşaltmak',
      'den Koffer auspacken',
      'スーツケースの荷物をほどく',
    ],
    ['Siamo arrivati in albergo e abbiamo disfatto le valigie.', 'Disfo la valigia domani: sono stanchissimo.', 'Quando torno, disfo subito la valigia.'],
    'a man in a hotel room taking a shirt out of an open suitcase and hanging it in an open wardrobe',
    ['fare-la-valigia']
  ),
  tv(
    'fare-il-biglietto',
    'fare il biglietto',
    'Comprare il biglietto del treno, dell’autobus o dell’aereo.',
    [
      'to buy a ticket',
      'sacar el billete',
      'prendre son billet',
      'koupit si jízdenku',
      'kupić bilet',
      'bilet almak',
      'eine Fahrkarte kaufen',
      '切符を買う',
    ],
    ['Hai già fatto il biglietto?', 'Il biglietto si fa alla macchinetta o in biglietteria.', 'Ho fatto il biglietto online.'],
    'a young man in a railway station buying a train ticket at a red self-service ticket machine, touching the blank screen, the machine completely plain with no letters, no words and no logos anywhere'
  ),
  tv(
    'cambiare-i-soldi',
    'cambiare i soldi',
    'Dare i soldi di un Paese per avere quelli di un altro.',
    [
      'to change money',
      'cambiar dinero',
      'changer de l’argent',
      'vyměnit peníze',
      'wymienić pieniądze',
      'para bozdurmak',
      'Geld wechseln',
      '両替する',
    ],
    ['Dove posso cambiare i soldi?', 'In aeroporto il cambio è caro: cambia i soldi in banca.', 'Ho cambiato cento euro in sterline.'],
    'a woman at a currency exchange counter handing banknotes through the window to a smiling cashier'
  ),
  tv(
    'caricare-i-bagagli',
    'caricare i bagagli',
    'Mettere valigie e borse in macchina, sul pullman o sul treno.',
    [
      'to load the luggage',
      'cargar el equipaje',
      'charger les bagages',
      'naložit zavazadla',
      'załadować bagaże',
      'bagajları yüklemek',
      'das Gepäck einladen',
      '荷物を積む',
    ],
    ['Carichiamo i bagagli e partiamo!', 'Mio padre ha caricato i bagagli nel bagagliaio.', 'Aiutami a caricare le valigie in macchina.'],
    'a father lifting a suitcase into the open boot of a family car, two more bags on the ground beside him'
  ),
  tv(
    'viaggiare',
    'viaggiare',
    'Andare in luoghi lontani da casa.',
    ['to travel', 'viajar', 'voyager', 'cestovat', 'podróżować', 'seyahat etmek', 'reisen', '旅行する'],
    ['Mi piace viaggiare in treno.', 'Hanno viaggiato per tutta l’Europa.', 'Quando viaggio, porto sempre un libro.'],
    'a young couple with backpacks and a small suitcase walking happily side by side through a sunny railway station',
    ['trascinare-la-valigia']
  ),
  // --- in aeroporto -----------------------------------------------------------------------------
  tv(
    'fare-il-check-in',
    'fare il check-in',
    'Presentarsi al banco dell’aeroporto o dell’albergo prima di partire o di entrare.',
    [
      'to check in',
      'facturar, hacer el check-in',
      's’enregistrer',
      'odbavit se',
      'odprawić się',
      'check-in yapmak',
      'einchecken',
      'チェックインする',
    ],
    ['Bisogna fare il check-in due ore prima del volo.', 'Ho fatto il check-in online.', 'In albergo si fa il check-in dalle due.'],
    'a woman at an airport check-in desk putting her suitcase on the baggage scale while the clerk behind the desk looks at a blank screen'
  ),
  tv(
    'mostrare-i-documenti',
    'mostrare i documenti',
    'Far vedere il passaporto o la carta d’identità a un controllo.',
    [
      'to show one’s documents',
      'enseñar los documentos',
      'montrer ses papiers',
      'ukázat doklady',
      'pokazać dokumenty',
      'kimlik göstermek',
      'die Papiere zeigen',
      '身分証明書を見せる',
    ],
    ['Al controllo bisogna mostrare i documenti.', 'Mi mostra il passaporto, per favore?', 'Ho mostrato la carta d’imbarco e sono salito.'],
    'a traveller handing a dark red passport to a uniformed officer sitting behind a glass booth at an airport passport control'
  ),
  tv(
    'prendere-laereo',
    'prendere l’aereo',
    'Viaggiare in aereo.',
    [
      'to fly, to take the plane',
      'coger (tomar) el avión',
      'prendre l’avion',
      'letět letadlem',
      'lecieć samolotem',
      'uçağa binmek',
      'fliegen, das Flugzeug nehmen',
      '飛行機に乗る',
    ],
    ['Per andare in Sicilia prendiamo l’aereo.', 'Non ho mai preso l’aereo.', 'Prendi l’aereo o il treno?'],
    'passengers with hand luggage climbing the steps of a mobile stairway up to the open door of a white passenger plane on the airport apron',
    ['viaggiare']
  ),
  tv(
    'allacciare-la-cintura',
    'allacciare la cintura',
    'Chiudere la cintura di sicurezza in aereo o in macchina.',
    [
      'to fasten one’s seat belt',
      'abrocharse el cinturón',
      'attacher sa ceinture',
      'zapnout si pás',
      'zapiąć pasy',
      'emniyet kemerini takmak',
      'sich anschnallen',
      'シートベルトを締める',
    ],
    ['Allacciate le cinture: stiamo per atterrare.', 'In macchina allaccia sempre la cintura!', 'Il bambino non riesce ad allacciare la cintura.'],
    'close view of a passenger in an airplane seat fastening the metal buckle of the lap seat belt with both hands'
  ),
  tv(
    'decollare',
    'decollare',
    'Lasciare la pista e alzarsi in volo.',
    ['to take off', 'despegar', 'décoller', 'vzlétnout', 'startować', 'kalkmak', 'starten, abheben', '離陸する'],
    ['L’aereo decolla alle sette.', 'Siamo decollati con un’ora di ritardo.', 'Durante il decollo spegnete il telefono.'],
    'a white passenger plane with a dark blue tail lifting off from a runway, nose up, wheels just leaving the ground, seen from the side',
    ['atterrare']
  ),
  tv(
    'atterrare',
    'atterrare',
    'Scendere dal cielo e toccare terra.',
    ['to land', 'aterrizar', 'atterrir', 'přistát', 'lądować', 'inmek (uçak)', 'landen', '着陸する'],
    ['Siamo atterrati a Napoli alle dieci.', 'L’aereo atterra tra venti minuti.', 'C’era nebbia e non potevamo atterrare.'],
    'a white passenger plane with a dark blue tail touching down on a runway, rear wheels on the tarmac with a puff of smoke, seen from the side',
    ['decollare']
  ),
  tv(
    'ritirare-i-bagagli',
    'ritirare i bagagli',
    'Prendere le valigie al nastro quando si arriva.',
    [
      'to collect one’s luggage',
      'recoger el equipaje',
      'récupérer ses bagages',
      'vyzvednout si zavazadla',
      'odebrać bagaż',
      'bagajları almak',
      'das Gepäck abholen',
      '荷物を受け取る',
    ],
    ['Dopo il volo andiamo a ritirare i bagagli.', 'Ho ritirato la valigia al nastro numero tre.', 'Dove si ritirano i bagagli?'],
    'a smiling woman lifting her green suitcase off a moving airport baggage carousel'
  ),
  tv(
    'perdere-la-valigia',
    'perdere la valigia',
    'Non trovare più la valigia, per esempio quando la compagnia aerea non la consegna.',
    [
      'to lose one’s suitcase',
      'perder la maleta',
      'perdre sa valise',
      'ztratit kufr',
      'zgubić walizkę',
      'bavulu kaybetmek',
      'den Koffer verlieren',
      'スーツケースをなくす',
    ],
    ['La compagnia aerea mi ha perso la valigia!', 'Se perdi la valigia, vai all’ufficio bagagli.', 'Ho perso la valigia e ho solo questi vestiti.'],
    'a worried man standing alone next to an empty airport baggage carousel, hands on his head, no suitcases anywhere'
  ),
  // --- in treno e in strada ---------------------------------------------------------------------
  tv(
    'trascinare-la-valigia',
    'trascinare la valigia',
    'Tirare dietro di sé la valigia con le rotelle.',
    [
      'to pull one’s suitcase',
      'arrastrar la maleta',
      'traîner sa valise',
      'táhnout kufr',
      'ciągnąć walizkę',
      'bavulu çekmek',
      'den Koffer ziehen',
      'スーツケースを引く',
    ],
    ['Ho trascinato la valigia fino alla stazione.', 'Sui sampietrini è difficile trascinare la valigia.', 'Trascina la valigia, non portarla in braccio!'],
    'a young woman walking along a station platform pulling a blue wheeled suitcase behind her by its handle',
    ['viaggiare']
  ),
  tv(
    'guardare-fuori-dal-finestrino',
    'guardare fuori dal finestrino',
    'Guardare il paesaggio dal treno, dall’aereo o dalla macchina.',
    [
      'to look out of the window',
      'mirar por la ventanilla',
      'regarder par la fenêtre (du train)',
      'dívat se z okna',
      'patrzeć przez okno',
      'pencereden dışarı bakmak',
      'aus dem Fenster schauen',
      '車窓から外を見る',
    ],
    ['In treno guardo fuori dal finestrino.', 'Guarda fuori dal finestrino: si vede il mare!', 'Il bambino ha guardato fuori dal finestrino per tutto il viaggio.'],
    'a boy kneeling on a train seat with his hands and nose against the window, looking out at green hills and the sea',
    ['viaggiare']
  ),
  tv(
    'fare-lautostop',
    'fare l’autostop',
    'Fermare le macchine col pollice alzato per avere un passaggio gratis.',
    [
      'to hitchhike',
      'hacer autostop',
      'faire du stop',
      'stopovat',
      'jechać autostopem',
      'otostop yapmak',
      'trampen',
      'ヒッチハイクする',
    ],
    ['Da giovane ho fatto l’autostop fino in Spagna.', 'Fare l’autostop di notte è pericoloso.', 'Abbiamo fatto l’autostop e un camionista ci ha portato a Roma.'],
    'a young man with a big backpack standing at the side of a country road holding out his arm with his thumb up'
  ),
  tv(
    'dare-un-passaggio',
    'dare un passaggio',
    'Portare qualcuno con la propria macchina.',
    [
      'to give someone a lift',
      'llevar a alguien (en coche)',
      'déposer quelqu’un, emmener en voiture',
      'svézt někoho',
      'podwieźć kogoś',
      'birini arabayla bırakmak',
      'jemanden mitnehmen',
      '車に乗せてあげる',
    ],
    ['Mi dai un passaggio fino alla stazione?', 'Un collega mi ha dato un passaggio.', 'Se vuoi, ti do un passaggio a casa.'],
    'a smiling woman leaning out of the open driver’s window of her car, offering a lift to a friend with a small bag who is opening the passenger door'
  ),
  // --- in vacanza -------------------------------------------------------------------------------
  tv(
    'alloggiare',
    'alloggiare',
    'Stare per qualche notte in un albergo, in un ostello o in una casa.',
    [
      'to stay (at a hotel)',
      'alojarse',
      'loger, séjourner',
      'ubytovat se, bydlet',
      'zatrzymać się (w hotelu)',
      'kalmak (otelde)',
      'übernachten, wohnen',
      '泊まる',
    ],
    ['Alloggiamo in un piccolo albergo vicino al mare.', 'Dove alloggiate a Firenze?', 'Ho alloggiato da amici per una settimana.'],
    'a couple with a suitcase entering a bright hotel room, the woman holding the door open with a key card, a made double bed visible'
  ),
  tv(
    'affittare',
    'affittare',
    'Pagare per usare una casa o un appartamento per un po’ di tempo.',
    [
      'to rent (a flat, a house)',
      'alquilar (un piso, una casa)',
      'louer (un appartement)',
      'pronajmout si (byt)',
      'wynająć (mieszkanie)',
      'kiralamak (ev)',
      'mieten (eine Wohnung)',
      '（部屋・家を）借りる',
    ],
    ['Quest’estate affittiamo una casa al mare.', 'Abbiamo affittato un appartamento in centro per una settimana.', 'Affittano camere ai turisti.'],
    'a smiling elderly owner handing a set of house keys to a young couple with a suitcase at the green front door of a holiday house'
  ),
  tv(
    'esplorare',
    'esplorare',
    'Girare un posto nuovo per scoprirlo.',
    ['to explore', 'explorar', 'explorer', 'prozkoumat', 'zwiedzać, odkrywać', 'keşfetmek', 'erkunden', '探検する'],
    ['Oggi esploriamo il centro storico.', 'Mi piace esplorare le strade meno turistiche.', 'Abbiamo esplorato l’isola in bicicletta.'],
    'two young friends walking curiously through a narrow sunny alley of an old Italian village, looking up at the old houses and the flowers on the balconies'
  ),
  tv(
    'fare-una-visita-guidata',
    'fare una visita guidata',
    'Visitare un luogo con una guida che spiega.',
    [
      'to go on a guided tour',
      'hacer una visita guiada',
      'faire une visite guidée',
      'jít na prohlídku s průvodcem',
      'zwiedzać z przewodnikiem',
      'rehberli tura katılmak',
      'an einer Führung teilnehmen',
      'ガイドツアーに参加する',
    ],
    ['Al museo abbiamo fatto una visita guidata.', 'La visita guidata dura un’ora.', 'Facciamo una visita guidata del castello?'],
    'a small group of tourists listening to a female guide who points at an old stone archway in an Italian square, a closed umbrella raised in her other hand'
  ),
  tv(
    'farsi-un-selfie',
    'farsi un selfie',
    'Fotografarsi da soli con il telefono.',
    [
      'to take a selfie',
      'hacerse un selfi',
      'prendre un selfie',
      'udělat si selfie',
      'zrobić sobie selfie',
      'selfie çekmek',
      'ein Selfie machen',
      '自撮りする',
    ],
    ['Ci facciamo un selfie davanti al Colosseo?', 'Si è fatta un selfie con il panorama dietro.', 'Basta selfie, guardiamo il paesaggio!'],
    'two smiling friends taking a selfie with a phone held at arm’s length, an old Italian bridge over a river behind them, the phone screen not visible'
  ),
  tv(
    'mandare-una-cartolina',
    'mandare una cartolina',
    'Scrivere una cartolina e spedirla a qualcuno dal luogo delle vacanze.',
    [
      'to send a postcard',
      'mandar una postal',
      'envoyer une carte postale',
      'poslat pohled',
      'wysłać pocztówkę',
      'kartpostal göndermek',
      'eine Postkarte schicken',
      '絵はがきを送る',
    ],
    ['Ti mando una cartolina da Venezia!', 'La nonna ci ha mandato una cartolina dalla montagna.', 'Oggi nessuno manda più cartoline.'],
    'a woman putting a picture postcard into the slot of a plain red post box on a sunny street, the post box with no letters, no words and no logos at all',
  ),
  tv(
    'godersi-la-vacanza',
    'godersi la vacanza',
    'Stare bene e approfittare dei giorni di vacanza.',
    [
      'to enjoy one’s holiday',
      'disfrutar de las vacaciones',
      'profiter de ses vacances',
      'užívat si dovolenou',
      'cieszyć się urlopem',
      'tatilin tadını çıkarmak',
      'den Urlaub genießen',
      '休暇を楽しむ',
    ],
    ['Spegni il telefono e goditi la vacanza!', 'Ci siamo goduti la vacanza senza fretta.', 'Si gode il sole sul balcone dell’albergo.'],
    'a relaxed woman with a sun hat sitting on a hotel balcony with a cup of coffee, smiling, looking at a sunny view of the sea and a few colourful houses on the coast, no church, no bell tower, no religious buildings or symbols'
  ),
];

export const travelVerbTranslationExercises = [
  tr(
    'Stasera faccio la valigia: domani parto presto.',
    'Tonight I’ll pack my suitcase: I’m leaving early tomorrow.',
    'Esta noche hago la maleta: mañana salgo temprano.',
    'Ce soir je fais ma valise : demain je pars tôt.',
    'Dnes večer si zabalím kufr: zítra brzy odjíždím.',
    'Dziś wieczorem pakuję walizkę: jutro wcześnie wyjeżdżam.',
    'Bu akşam bavulumu hazırlıyorum: yarın erken yola çıkıyorum.',
    'Heute Abend packe ich den Koffer: Morgen fahre ich früh los.',
    '今夜スーツケースに荷物を詰めます。明日は早く出発します。'
  ),
  tr(
    'Hai fatto il biglietto? Il treno parte tra dieci minuti.',
    'Have you bought your ticket? The train leaves in ten minutes.',
    '¿Has sacado el billete? El tren sale dentro de diez minutos.',
    'Tu as pris ton billet ? Le train part dans dix minutes.',
    'Koupil sis jízdenku? Vlak odjíždí za deset minut.',
    'Kupiłeś bilet? Pociąg odjeżdża za dziesięć minut.',
    'Bileti aldın mı? Tren on dakika sonra kalkıyor.',
    'Hast du die Fahrkarte gekauft? Der Zug fährt in zehn Minuten.',
    '切符は買った？電車は10分後に出るよ。'
  ),
  tr(
    'Allacciate le cinture: stiamo per decollare.',
    'Fasten your seat belts: we are about to take off.',
    'Abróchense los cinturones: vamos a despegar.',
    'Attachez vos ceintures : nous allons décoller.',
    'Zapněte si pásy: za chvíli vzlétneme.',
    'Zapnijcie pasy: zaraz startujemy.',
    'Kemerlerinizi takın: kalkmak üzereyiz.',
    'Schnallen Sie sich an: Wir starten gleich.',
    'シートベルトをお締めください。まもなく離陸します。'
  ),
  tr(
    'Siamo atterrati, ma la compagnia aerea ha perso la mia valigia.',
    'We landed, but the airline lost my suitcase.',
    'Hemos aterrizado, pero la compañía aérea ha perdido mi maleta.',
    'Nous avons atterri, mais la compagnie aérienne a perdu ma valise.',
    'Přistáli jsme, ale letecká společnost ztratila můj kufr.',
    'Wylądowaliśmy, ale linia lotnicza zgubiła moją walizkę.',
    'İndik ama havayolu şirketi bavulumu kaybetti.',
    'Wir sind gelandet, aber die Fluggesellschaft hat meinen Koffer verloren.',
    '着陸しましたが、航空会社が私のスーツケースをなくしました。'
  ),
  tr(
    'Mi dai un passaggio all’aeroporto?',
    'Can you give me a lift to the airport?',
    '¿Me llevas al aeropuerto?',
    'Tu peux m’emmener à l’aéroport ?',
    'Svezeš mě na letiště?',
    'Podwieziesz mnie na lotnisko?',
    'Beni havalimanına bırakır mısın?',
    'Nimmst du mich zum Flughafen mit?',
    '空港まで車で送ってくれる？'
  ),
  tr(
    'Quest’estate affittiamo una casa al mare.',
    'This summer we’re renting a house by the sea.',
    'Este verano alquilamos una casa en la playa.',
    'Cet été, nous louons une maison au bord de la mer.',
    'Letos v létě si pronajmeme dům u moře.',
    'Tego lata wynajmujemy dom nad morzem.',
    'Bu yaz deniz kenarında bir ev kiralıyoruz.',
    'Diesen Sommer mieten wir ein Haus am Meer.',
    'この夏は海辺の家を借ります。'
  ),
  tr(
    'Alloggiamo in un piccolo albergo in centro.',
    'We’re staying at a small hotel in the centre.',
    'Nos alojamos en un hotel pequeño en el centro.',
    'Nous logeons dans un petit hôtel du centre.',
    'Bydlíme v malém hotelu v centru.',
    'Mieszkamy w małym hotelu w centrum.',
    'Merkezde küçük bir otelde kalıyoruz.',
    'Wir wohnen in einem kleinen Hotel im Zentrum.',
    '私たちは中心街の小さなホテルに泊まっています。'
  ),
  tr(
    'Ti mando una cartolina da Napoli!',
    'I’ll send you a postcard from Naples!',
    '¡Te mando una postal desde Nápoles!',
    'Je t’envoie une carte postale de Naples !',
    'Pošlu ti pohled z Neapole!',
    'Wyślę ci pocztówkę z Neapolu!',
    'Sana Napoli’den kartpostal göndereceğim!',
    'Ich schicke dir eine Postkarte aus Neapel!',
    'ナポリから絵はがきを送るね！'
  ),
];

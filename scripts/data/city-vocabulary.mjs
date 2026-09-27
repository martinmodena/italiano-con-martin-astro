// Le parole della lezione di vocabolario «La città» (2026-09-27).
//
// Riempie il segnaposto «La città» («Strade, negozi, trasporti ed edifici») dell'indice del vocabolario.
// Quattro gruppi: i luoghi della citta' (17: la piazza, il municipio, la biblioteca, la stazione, il bar...),
// i negozi (9: il supermercato, il mercato, il panificio, l'edicola, la libreria...), la strada (12: il
// marciapiede, le strisce pedonali, il semaforo, la fermata dell'autobus...) e i mezzi di trasporto (8).
//
// Struttura di ogni voce: come house-vocabulary.mjs. `alt` e' la stringa «(ignorato)|en|es|fr|cs|pl|tr|de|ja».
//
// Foto REALISTICHE con gpt-image-1-mini a qualita' `low` (Martin: spendere poco),
// `generate-animal-images.mjs --set citta`: edifici, facciate di negozi, oggetti della strada e veicoli
// ritagliati sul bianco. Niente carne: al mercato frutta e verdura, al bar il caffe', niente pasticceria.

import { tr } from './traits-base.mjs';

const LANG_ORDER = ['it', 'en', 'es', 'fr', 'cs', 'pl', 'tr', 'de', 'ja'];
const ARTICLE = /^(il|lo|la|l’|i|gli|le)\s?/;

/** Le forme della scheda, con e senza articolo e apostrofo, piu' quelle in `extra` (plurali, sinonimi). */
const answersFor = (word, extra) => {
  const list = [];
  for (const form of [...word.split(' / '), ...extra]) {
    list.push(form, form.replace(ARTICLE, ''));
    if (form.includes('’')) list.push(form.replace('’', ' '), form.replace('’', ''));
  }
  return [...new Set(list)];
};

const city = (slug, word, examples, alts, subject, extra = []) => {
  const alt = alts.split('|');
  if (alt.length !== LANG_ORDER.length) throw new Error(`«${slug}»: alt deve avere 9 campi`);
  alt[0] = word.charAt(0).toUpperCase() + word.slice(1);
  if (examples.length !== 3) throw new Error(`«${slug}»: servono tre frasi d'esempio`);
  return {
    image: `citta/${slug}`,
    slug,
    word,
    bare: word.split(' / ')[0].replace(ARTICLE, ''),
    examples,
    answers: answersFor(word, extra),
    subject,
    alt: Object.fromEntries(LANG_ORDER.map((lang, i) => [lang, alt[i]])),
  };
};

const FRONT =
  'the front of a small Italian shop on the ground floor of an old building, isolated, like a cut-out, a small patch of pavement in front, with';

export const cityVocabulary = [
  // --- i luoghi della citta' ----------------------------------------------------------------
  city(
    'piazza',
    'la piazza',
    ['Ci vediamo in piazza alle sei.', 'La domenica c’è il mercato in piazza.', 'Piazza del Campo è a Siena.'],
    '|The square|La plaza|La place|Náměstí|Plac, rynek|Meydan|Der Platz|広場',
    'a small Italian town square seen from above at an angle, paved with stones, a fountain in the middle, old buildings around it, a few tiny people, cropped into a perfect circle, centred with wide white margins',
    ['piazze']
  ),
  city(
    'chiesa',
    'la chiesa',
    [
      'La chiesa è in fondo alla via.',
      'Si sono sposati in una chiesa antica.',
      'Le campane della chiesa suonano a mezzogiorno.',
    ],
    '|The church|La iglesia|L’église|Kostel|Kościół|Kilise|Die Kirche|教会',
    'a small Italian stone church with a bell tower, isolated, like a cut-out, a small patch of ground in front'
  ),
  city(
    'municipio',
    'il municipio',
    ['Per la carta d’identità devi andare in municipio.', 'Il municipio è in piazza.', 'Si sono sposati in municipio.'],
    '|The town hall|El ayuntamiento|La mairie, l’hôtel de ville|Radnice|Ratusz, urząd miasta|Belediye binası|Das Rathaus|市役所',
    'an old Italian town hall building with a clock on the facade, flags on the balcony and steps in front, isolated, like a cut-out',
    ['comune', 'il comune']
  ),
  city(
    'ospedale',
    'l’ospedale',
    [
      'Mia sorella lavora in ospedale.',
      'L’hanno portato all’ospedale in ambulanza.',
      'L’ospedale è aperto giorno e notte.',
    ],
    '|The hospital|El hospital|L’hôpital|Nemocnice|Szpital|Hastane|Das Krankenhaus|病院',
    'a modern hospital building with a red cross sign and an ambulance parked in front, isolated, like a cut-out'
  ),
  city(
    'scuola',
    'la scuola',
    [
      'I bambini vanno a scuola a piedi.',
      'La scuola comincia a settembre.',
      'Davanti alla scuola c’è un parcheggio per le bici.',
    ],
    '|The school|La escuela, el colegio|L’école|Škola|Szkoła|Okul|Die Schule|学校',
    'a school building with big windows and a small playground in front, children with backpacks walking in, isolated, like a cut-out'
  ),
  city(
    'biblioteca',
    'la biblioteca',
    [
      'Studio in biblioteca: c’è silenzio.',
      'Ho preso tre libri in prestito in biblioteca.',
      'La biblioteca chiude alle sette.',
    ],
    '|The library|La biblioteca|La bibliothèque|Knihovna|Biblioteka|Kütüphane|Die Bibliothek|図書館',
    'the inside of a quiet public library with tall bookshelves full of books and people reading at long wooden tables, cropped into a perfect circle, centred with wide white margins'
  ),
  city(
    'museo',
    'il museo',
    [
      'Il museo è chiuso il lunedì.',
      'Al museo ci sono i quadri di Caravaggio.',
      'Domenica andiamo al museo con i bambini.',
    ],
    '|The museum|El museo|Le musée|Muzeum|Muzeum|Müze|Das Museum|博物館、美術館',
    'the inside of an art museum with paintings in gold frames on the walls and two visitors looking at them, cropped into a perfect circle, centred with wide white margins'
  ),
  city(
    'teatro',
    'il teatro',
    ['Stasera andiamo a teatro.', 'Il teatro era pieno di gente.', 'La Scala è il teatro dell’opera di Milano.'],
    '|The theatre|El teatro|Le théâtre|Divadlo|Teatr|Tiyatro|Das Theater|劇場',
    'the inside of a classic Italian theatre seen from the stalls, red velvet seats, gold balconies and a stage with a red curtain, cropped into a perfect circle, centred with wide white margins'
  ),
  city(
    'cinema',
    'il cinema',
    ['Andiamo al cinema stasera?', 'Al cinema danno un film nuovo.', 'Al cinema non si parla!'],
    '|The cinema, movie theater|El cine|Le cinéma|Kino|Kino|Sinema|Das Kino|映画館',
    'the inside of a dark cinema with rows of red seats seen from behind, people watching a bright screen, cropped into a perfect circle, centred with wide white margins'
  ),
  city(
    'stazione',
    'la stazione',
    [
      'Il treno parte dalla stazione alle otto.',
      'Ti vengo a prendere alla stazione.',
      'La stazione è vicina al centro.',
    ],
    '|The (railway) station|La estación|La gare|Nádraží|Dworzec|İstasyon, gar|Der Bahnhof|駅',
    'a railway station platform with a red-and-white regional train standing at it, a clock and a platform roof, cropped into a perfect circle, centred with wide white margins',
    ['stazione dei treni']
  ),
  city(
    'banca',
    'la banca',
    ['Devo andare in banca a prelevare.', 'La banca apre alle otto e mezza.', 'Davanti alla banca c’è il bancomat.'],
    '|The bank|El banco|La banque|Banka|Bank|Banka|Die Bank|銀行',
    'the stone front of a bank building with glass doors and a cash machine in the wall, no words or letters anywhere, isolated, like a cut-out, a small patch of pavement in front',
    ['bancomat', 'il bancomat']
  ),
  city(
    'ufficio-postale',
    'l’ufficio postale',
    [
      'Spedisco il pacco all’ufficio postale.',
      'All’ufficio postale c’è sempre la fila.',
      'L’ufficio postale è accanto alla banca.',
    ],
    '|The post office|La oficina de correos|La poste, le bureau de poste|Pošta|Poczta, urząd pocztowy|Postane|Die Post, das Postamt|郵便局',
    'the front of a small post office with a yellow sign with a simple envelope symbol (no letters), a red post box in front, isolated, like a cut-out',
    ['posta', 'la posta']
  ),
  city(
    'parco',
    'il parco',
    ['La domenica facciamo una passeggiata al parco.', 'Nel parco ci sono le altalene.', 'Il cane corre nel parco.'],
    '|The park|El parque|Le parc|Park|Park|Park|Der Park|公園',
    'a green city park with trees, a path, a bench and a child on a swing, cropped into a perfect circle, centred with wide white margins',
    ['giardini', 'i giardini']
  ),
  city(
    'albergo',
    'l’albergo',
    [
      'Abbiamo dormito in un albergo vicino al mare.',
      'L’albergo ha una bella terrazza.',
      'Ho prenotato due notti in albergo.',
    ],
    '|The hotel|El hotel|L’hôtel|Hotel|Hotel|Otel|Das Hotel|ホテル',
    'the entrance of a small elegant Italian hotel with a revolving glass door, a doorman and a rolling suitcase, isolated, like a cut-out',
    ['hotel', 'l’hotel']
  ),
  city(
    'ristorante',
    'il ristorante',
    [
      'Stasera ceniamo al ristorante.',
      'Questo ristorante fa una pasta al pomodoro buonissima.',
      'Ho prenotato un tavolo al ristorante per le otto.',
    ],
    '|The restaurant|El restaurante|Le restaurant|Restaurace|Restauracja|Restoran|Das Restaurant|レストラン',
    'a small cut-out piece of the outdoor terrace of an Italian restaurant, isolated on white, with two small tables, white tablecloths, glasses of red wine and plates of pasta with tomato sauce, isolated, like a cut-out',
    ['trattoria', 'la trattoria', 'pizzeria', 'la pizzeria']
  ),
  city(
    'bar',
    'il bar',
    ['Prendiamo un caffè al bar?', 'Al bar sotto casa fanno un ottimo cappuccino.', 'Il bar apre alle sei di mattina.'],
    '|The café, coffee bar|La cafetería, el bar|Le café, le bar|Kavárna|Kawiarnia|Kafe|Das Café, die Bar|カフェ、バール',
    'an Italian coffee bar counter with an espresso machine, small cups of espresso on saucers and a barista behind it, isolated, like a cut-out',
    ['caffè', 'il caffè']
  ),
  city(
    'fontana',
    'la fontana',
    [
      'I turisti buttano una moneta nella fontana.',
      'D’estate i bambini giocano vicino alla fontana.',
      'La fontana di Trevi è a Roma.',
    ],
    '|The fountain|La fuente|La fontaine|Kašna, fontána|Fontanna|Çeşme, fıskiye|Der Brunnen|噴水',
    'a round stone fountain with water spraying up from a statue in the middle, isolated, like a cut-out'
  ),

  // --- i negozi -----------------------------------------------------------------------------
  city(
    'negozio',
    'il negozio',
    [
      'Il negozio chiude alle otto.',
      'In questa via ci sono tanti negozi.',
      'Ho comprato le scarpe in un negozio del centro.',
    ],
    '|The shop, store|La tienda|Le magasin, la boutique|Obchod|Sklep|Mağaza, dükkân|Das Geschäft, der Laden|店',
    `${FRONT} a big shop window full of colourful clothes on mannequins and an open glass door`,
    ['negozi', 'i negozi']
  ),
  city(
    'supermercato',
    'il supermercato',
    [
      'Faccio la spesa al supermercato.',
      'Il supermercato è aperto anche la domenica.',
      'Al supermercato prendo un carrello.',
    ],
    '|The supermarket|El supermercado|Le supermarché|Supermarket|Supermarket|Süpermarket|Der Supermarkt|スーパーマーケット',
    'the inside of a supermarket aisle with shelves of fruit, vegetables, pasta and bottles, a shopping trolley in front, cropped into a perfect circle, centred with wide white margins'
  ),
  city(
    'mercato',
    'il mercato',
    ['Il sabato vado al mercato.', 'Al mercato la frutta costa meno.', 'Il mercato è in piazza fino all’una.'],
    '|The market|El mercado|Le marché|Trh, tržiště|Targ, rynek|Pazar|Der Markt|市場',
    'an outdoor market stall under a striped awning, crates full of tomatoes, lemons, apples, courgettes and lettuce, isolated, like a cut-out'
  ),
  city(
    'panificio',
    'il panificio',
    [
      'Compro il pane al panificio sotto casa.',
      'Il panificio apre alle sette.',
      'Al panificio fanno anche la focaccia.',
    ],
    '|The bakery|La panadería|La boulangerie|Pekárna|Piekarnia|Fırın|Die Bäckerei|パン屋',
    `${FRONT} a shop window full of loaves of bread, baguettes and focaccia`,
    ['forno', 'il forno', 'panetteria', 'la panetteria']
  ),
  city(
    'gelateria',
    'la gelateria',
    [
      'Andiamo in gelateria dopo cena?',
      'In questa gelateria il gelato è artigianale.',
      'Davanti alla gelateria c’è sempre la fila.',
    ],
    '|The ice-cream shop|La heladería|Le glacier|Zmrzlinárna|Lodziarnia|Dondurmacı|Die Eisdiele|ジェラート屋',
    'an Italian gelato counter with trays of colourful fruit sorbets (lemon, strawberry, mango, raspberry) decorated with fruit, isolated, like a cut-out',
    ['gelato', 'il gelato']
  ),
  city(
    'edicola',
    'l’edicola',
    [
      'Compro il giornale in edicola.',
      'L’edicola è all’angolo della piazza.',
      'In edicola vendono anche i biglietti dell’autobus.',
    ],
    '|The newsstand|El quiosco|Le kiosque à journaux|Novinový stánek|Kiosk z gazetami|Gazete bayii|Der Zeitungskiosk|新聞スタンド、キオスク',
    'a green Italian street newsstand kiosk covered with newspapers and colourful magazines with blurred covers, isolated, like a cut-out',
    ['giornalaio', 'il giornalaio']
  ),
  city(
    'tabaccheria',
    'la tabaccheria',
    [
      'I francobolli si comprano in tabaccheria.',
      'In tabaccheria puoi ricaricare il telefono.',
      'La tabaccheria ha l’insegna con la T.',
    ],
    '|The tobacconist’s|El estanco|Le bureau de tabac|Trafika|Kiosk, trafika|Tekel bayii|Der Tabakladen|タバコ屋（切手・切符も売る店）',
    `${FRONT} a blue rectangular sign with a big white capital letter T above the door`,
    ['tabacchi', 'i tabacchi', 'tabaccaio']
  ),
  city(
    'farmacia',
    'la farmacia',
    ['Compro l’aspirina in farmacia.', 'La farmacia di turno è aperta di notte.', 'La farmacia ha una croce verde.'],
    '|The pharmacy, chemist’s|La farmacia|La pharmacie|Lékárna|Apteka|Eczane|Die Apotheke|薬局',
    `${FRONT} a glowing green cross sign above the door and shelves of medicine boxes behind the glass`
  ),
  city(
    'libreria',
    'la libreria',
    [
      'Ho comprato un romanzo in libreria.',
      'In libreria c’è una sezione per i bambini.',
      'La libreria del centro vende anche libri usati.',
    ],
    '|The bookshop|La librería|La librairie|Knihkupectví|Księgarnia|Kitapçı|Die Buchhandlung|書店',
    `${FRONT} a shop window full of stacked books with plain colourful covers and an open door`
  ),

  // --- la strada ----------------------------------------------------------------------------
  city(
    'strada',
    'la strada',
    ['Attento quando attraversi la strada!', 'Questa strada porta al centro.', 'Abito in una strada tranquilla.'],
    '|The street, road|La calle, la carretera|La rue, la route|Ulice, silnice|Ulica, droga|Sokak, yol|Die Straße|道、通り',
    'a short piece of city street seen from above at an angle, asphalt with white lines, a pavement on each side, isolated, like a cut-out',
    ['via', 'la via', 'strade']
  ),
  city(
    'marciapiede',
    'il marciapiede',
    [
      'Cammina sul marciapiede, non in strada!',
      'Il marciapiede è pieno di biciclette.',
      'Le macchine non possono parcheggiare sul marciapiede.',
    ],
    '|The pavement, sidewalk|La acera|Le trottoir|Chodník|Chodnik|Kaldırım|Der Bürgersteig|歩道',
    'a short piece of stone pavement with a kerb next to the asphalt, a woman walking on it, isolated, like a cut-out'
  ),
  city(
    'strisce-pedonali',
    'le strisce pedonali',
    [
      'Attraversa sulle strisce pedonali.',
      'Le macchine si fermano davanti alle strisce pedonali.',
      'Le strisce pedonali sono davanti alla scuola.',
    ],
    '|The zebra crossing, crosswalk|El paso de peatones|Le passage piéton|Přechod pro chodce|Przejście dla pieszych|Yaya geçidi|Der Zebrastreifen|横断歩道',
    'a piece of street seen from above with a white zebra crossing painted on it and a man crossing, isolated, like a cut-out',
    ['strisce', 'le strisce', 'passaggio pedonale']
  ),
  city(
    'semaforo',
    'il semaforo',
    ['Il semaforo è rosso: fermati!', 'Al semaforo gira a sinistra.', 'Aspettiamo il verde al semaforo.'],
    '|The traffic lights|El semáforo|Le feu (de circulation)|Semafor|Sygnalizacja świetlna, światła|Trafik lambası|Die Ampel|信号',
    'a traffic light on a grey pole with the red light glowing'
  ),
  city(
    'incrocio',
    'l’incrocio',
    ['All’incrocio gira a destra.', 'C’è stato un incidente all’incrocio.', 'Il negozio è subito dopo l’incrocio.'],
    '|The crossroads, junction|El cruce|Le carrefour|Křižovatka|Skrzyżowanie|Kavşak|Die Kreuzung|交差点',
    'a crossroads of two city streets seen from directly above, with zebra crossings and a few small cars, cropped into a perfect circle, centred with wide white margins'
  ),
  city(
    'rotonda',
    'la rotonda',
    [
      'Alla rotonda prendi la seconda uscita.',
      'In mezzo alla rotonda ci sono dei fiori.',
      'Dopo la rotonda c’è il supermercato.',
    ],
    '|The roundabout|La rotonda, la glorieta|Le rond-point|Kruhový objezd|Rondo|Göbek, dönel kavşak|Der Kreisverkehr|ロータリー、環状交差点',
    'a roundabout seen from directly above, a green island with flowers in the middle and a few small cars going around, cropped into a perfect circle, centred with wide white margins',
    ['rotatoria', 'la rotatoria']
  ),
  city(
    'ponte',
    'il ponte',
    ['Il ponte attraversa il fiume.', 'Ci baciamo sul ponte.', 'A Venezia ci sono più di quattrocento ponti.'],
    '|The bridge|El puente|Le pont|Most|Most|Köprü|Die Brücke|橋',
    'an old stone arched bridge over a small river, isolated, like a cut-out'
  ),
  city(
    'parcheggio',
    'il parcheggio',
    [
      'Non trovo parcheggio in centro.',
      'Il parcheggio della stazione è a pagamento.',
      'Ho lasciato la macchina nel parcheggio.',
    ],
    '|The car park, parking lot|El aparcamiento|Le parking|Parkoviště|Parking|Otopark|Der Parkplatz|駐車場',
    'a small open-air car park seen from above at an angle, white lines on the asphalt and five parked cars, a blue parking sign with a white P, isolated, like a cut-out',
    ['posteggio', 'il posteggio']
  ),
  city(
    'fermata',
    'la fermata dell’autobus',
    ['Ci vediamo alla fermata dell’autobus.', 'Alla fermata aspettano in tanti.', 'Scendi alla terza fermata.'],
    '|The bus stop|La parada del autobús|L’arrêt de bus|Autobusová zastávka|Przystanek autobusowy|Otobüs durağı|Die Bushaltestelle|バス停',
    'a bus stop with a glass shelter, a bench and a pole with a sign showing a bus symbol, two people waiting, isolated, like a cut-out',
    ['fermata', 'la fermata']
  ),
  city(
    'cartello',
    'il cartello stradale',
    ['Il cartello dice: senso unico.', 'Non ho visto il cartello di stop.', 'Segui i cartelli per il centro.'],
    '|The road sign|La señal de tráfico|Le panneau (de signalisation)|Dopravní značka|Znak drogowy|Trafik levhası|Das Verkehrsschild|交通標識',
    'two road signs on a grey pole: a round red-and-white no-entry sign and a blue sign with a white arrow',
    ['cartello', 'il cartello', 'segnale', 'il segnale']
  ),
  city(
    'lampione',
    'il lampione',
    [
      'Di notte i lampioni illuminano la strada.',
      'La bici è legata al lampione.',
      'Il lampione davanti a casa è rotto.',
    ],
    '|The street lamp|La farola|Le lampadaire, le réverbère|Pouliční lampa|Latarnia|Sokak lambası|Die Straßenlaterne|街灯',
    'an old-fashioned black iron street lamp on a tall pole, the lamp glowing warmly'
  ),
  city(
    'panchina',
    'la panchina',
    [
      'Ci sediamo su una panchina al parco.',
      'Il nonno legge il giornale sulla panchina.',
      'La panchina è appena verniciata!',
    ],
    '|The bench|El banco|Le banc|Lavička|Ławka|Bank (oturak)|Die Bank (Sitzbank)|ベンチ',
    'a green wooden park bench with cast-iron legs'
  ),

  // --- i mezzi di trasporto -----------------------------------------------------------------
  city(
    'autobus',
    'l’autobus',
    ['Prendo l’autobus per andare al lavoro.', 'L’autobus è in ritardo.', 'Il biglietto dell’autobus costa due euro.'],
    '|The bus|El autobús|Le bus|Autobus|Autobus|Otobüs|Der Bus|バス',
    'a modern orange city bus seen from the side at an angle, no logo, no text',
    ['bus', 'il bus', 'pullman', 'il pullman']
  ),
  city(
    'tram',
    'il tram',
    ['A Milano ci sono ancora i tram antichi.', 'Il tram passa ogni dieci minuti.', 'Scendo dal tram in piazza.'],
    '|The tram|El tranvía|Le tram|Tramvaj|Tramwaj|Tramvay|Die Straßenbahn|路面電車',
    'an old orange Milan tram on rails, seen from the side at an angle, no text'
  ),
  city(
    'metropolitana',
    'la metropolitana',
    [
      'Con la metropolitana arrivi in centro in dieci minuti.',
      'La metropolitana è piena la mattina.',
      'Qual è la fermata della metropolitana più vicina?',
    ],
    '|The underground, subway|El metro|Le métro|Metro|Metro|Metro|Die U-Bahn|地下鉄',
    'an underground metro train standing at a platform in a tiled station, doors open, cropped into a perfect circle, centred with wide white margins',
    ['metro', 'la metro', 'metropolitane']
  ),
  city(
    'taxi',
    'il taxi',
    ['Prendiamo un taxi per la stazione.', 'Il taxi è arrivato.', 'Di notte torno a casa in taxi.'],
    '|The taxi|El taxi|Le taxi|Taxi|Taksówka|Taksi|Das Taxi|タクシー',
    'a white Italian taxi car with a taxi light on the roof, seen from the side at an angle, no text'
  ),
  city(
    'bicicletta',
    'la bicicletta',
    ['Vado al lavoro in bicicletta.', 'Mi hanno rubato la bicicletta!', 'La bicicletta ha una gomma a terra.'],
    '|The bicycle|La bicicleta|Le vélo|Kolo|Rower|Bisiklet|Das Fahrrad|自転車',
    'a classic green city bicycle with a basket on the front, seen from the side',
    ['bici', 'la bici']
  ),
  city(
    'motorino',
    'il motorino',
    [
      'In città è comodo andare in motorino.',
      'In motorino bisogna mettere il casco.',
      'Il motorino è parcheggiato sul marciapiede.',
    ],
    '|The scooter, moped|La moto, el ciclomotor|Le scooter|Skútr|Skuter|Motosiklet, scooter|Der Motorroller|スクーター',
    'a light blue Italian scooter with a helmet hanging on it, seen from the side, no text',
    ['scooter', 'lo scooter', 'moto', 'la moto', 'vespa', 'la vespa']
  ),
  city(
    'macchina',
    'la macchina',
    ['Andiamo in macchina o a piedi?', 'Ho parcheggiato la macchina davanti a casa.', 'La mia macchina è rossa.'],
    '|The car|El coche|La voiture|Auto|Samochód|Araba|Das Auto|車',
    'a small red city car seen from the side at an angle, no logo',
    ['auto', 'l’auto', 'automobile', 'l’automobile']
  ),
  city(
    'treno',
    'il treno',
    ['Vado a Roma in treno.', 'Il treno per Firenze parte dal binario tre.', 'Il treno è in ritardo di venti minuti.'],
    '|The train|El tren|Le train|Vlak|Pociąg|Tren|Der Zug|電車、列車',
    'a modern red-and-white high-speed train seen from the front at an angle, on rails, no text'
  ),
];

/** L'esempio delle istruzioni di «Riconosci la parola». */
export const cityExampleWord = { bare: 'piazza', withArticle: 'la piazza' };

export const cityTranslationExercises = [
  tr(
    'Scusi, dov’è la stazione?',
    'Excuse me, where is the station?',
    'Perdone, ¿dónde está la estación?',
    'Excusez-moi, où est la gare ?',
    'Promiňte, kde je nádraží?',
    'Przepraszam, gdzie jest dworzec?',
    'Affedersiniz, istasyon nerede?',
    'Entschuldigung, wo ist der Bahnhof?',
    'すみません、駅はどこですか？'
  ),
  tr(
    'Al semaforo gira a destra e poi vai sempre dritto.',
    'At the traffic lights turn right and then go straight on.',
    'En el semáforo gira a la derecha y luego sigue todo recto.',
    'Au feu, tourne à droite, puis va tout droit.',
    'Na semaforu zahni doprava a pak jdi pořád rovně.',
    'Na światłach skręć w prawo, a potem idź prosto.',
    'Trafik lambasında sağa dön, sonra dümdüz git.',
    'An der Ampel bieg rechts ab und dann geh immer geradeaus.',
    '信号を右に曲がって、それからまっすぐ行ってください。'
  ),
  tr(
    'La farmacia è accanto alla banca.',
    'The pharmacy is next to the bank.',
    'La farmacia está al lado del banco.',
    'La pharmacie est à côté de la banque.',
    'Lékárna je vedle banky.',
    'Apteka jest obok banku.',
    'Eczane bankanın yanında.',
    'Die Apotheke ist neben der Bank.',
    '薬局は銀行の隣です。'
  ),
  tr(
    'Vado al lavoro in autobus, ma torno a piedi.',
    'I go to work by bus, but I walk back.',
    'Voy al trabajo en autobús, pero vuelvo a pie.',
    'Je vais au travail en bus, mais je rentre à pied.',
    'Do práce jezdím autobusem, ale zpátky chodím pěšky.',
    'Do pracy jeżdżę autobusem, ale wracam pieszo.',
    'İşe otobüsle gidiyorum ama yürüyerek dönüyorum.',
    'Ich fahre mit dem Bus zur Arbeit, aber ich gehe zu Fuß zurück.',
    '仕事にはバスで行きますが、帰りは歩きます。'
  ),
  tr(
    'Ci vediamo in piazza davanti alla chiesa.',
    'Let’s meet in the square in front of the church.',
    'Nos vemos en la plaza delante de la iglesia.',
    'On se retrouve sur la place devant l’église.',
    'Sejdeme se na náměstí před kostelem.',
    'Spotkajmy się na placu przed kościołem.',
    'Kilisenin önündeki meydanda buluşalım.',
    'Wir treffen uns auf dem Platz vor der Kirche.',
    '教会の前の広場で会いましょう。'
  ),
  tr(
    'Attraversa la strada sulle strisce pedonali.',
    'Cross the road at the zebra crossing.',
    'Cruza la calle por el paso de peatones.',
    'Traverse la rue sur le passage piéton.',
    'Přejdi silnici po přechodu pro chodce.',
    'Przejdź przez ulicę po przejściu dla pieszych.',
    'Karşıya yaya geçidinden geç.',
    'Geh über den Zebrastreifen über die Straße.',
    '横断歩道で道を渡りなさい。'
  ),
  tr(
    'Il sabato mattina vado al mercato e poi al bar.',
    'On Saturday morning I go to the market and then to the café.',
    'El sábado por la mañana voy al mercado y luego a la cafetería.',
    'Le samedi matin, je vais au marché, puis au café.',
    'V sobotu ráno chodím na trh a pak do kavárny.',
    'W sobotę rano chodzę na targ, a potem do kawiarni.',
    'Cumartesi sabahı pazara, sonra kafeye gidiyorum.',
    'Am Samstagmorgen gehe ich auf den Markt und dann ins Café.',
    '土曜日の朝は市場に行って、それからバールに行きます。'
  ),
  tr(
    'In centro non c’è parcheggio: prendiamo la metropolitana.',
    'There’s no parking in the centre: let’s take the underground.',
    'En el centro no hay aparcamiento: cojamos el metro.',
    'Il n’y a pas de place pour se garer au centre : prenons le métro.',
    'V centru se nedá zaparkovat: pojedeme metrem.',
    'W centrum nie ma gdzie zaparkować: jedźmy metrem.',
    'Merkezde park yeri yok: metroya binelim.',
    'Im Zentrum gibt es keinen Parkplatz: Nehmen wir die U-Bahn.',
    '中心街には駐車場がないので、地下鉄に乗りましょう。'
  ),
  tr(
    'Il museo è chiuso il lunedì.',
    'The museum is closed on Mondays.',
    'El museo cierra los lunes.',
    'Le musée est fermé le lundi.',
    'Muzeum je v pondělí zavřené.',
    'Muzeum jest zamknięte w poniedziałki.',
    'Müze pazartesi günleri kapalı.',
    'Das Museum ist montags geschlossen.',
    '博物館は月曜日が休みです。'
  ),
  tr(
    'Compro il giornale in edicola e il pane al panificio.',
    'I buy the newspaper at the newsstand and bread at the bakery.',
    'Compro el periódico en el quiosco y el pan en la panadería.',
    'J’achète le journal au kiosque et le pain à la boulangerie.',
    'Noviny kupuju ve stánku a chleba v pekárně.',
    'Gazetę kupuję w kiosku, a chleb w piekarni.',
    'Gazeteyi bayiden, ekmeği fırından alıyorum.',
    'Ich kaufe die Zeitung am Kiosk und das Brot in der Bäckerei.',
    '新聞はキオスクで、パンはパン屋で買います。'
  ),
];

// Le parole della lezione di vocabolario «La casa» (2026-09-27).
//
// Cinque gruppi: la casa e le stanze (11: la casa, il palazzo, l'ingresso, il soggiorno, la camera da letto...),
// le parti della casa (10: la porta, la chiave, le scale, il pavimento, l'interruttore...), la camera da letto
// (9), il bagno (9) e le faccende (4: la lavatrice, la scopa...). Gli oggetti della cucina e del salotto non ci
// sono: hanno gia' le loro lezioni («La cucina», «Il salotto»), citate nella nota della pagina.
//
// Struttura di ogni voce: come weather-vocabulary.mjs. `alt` e' la stringa «(ignorato)|en|es|fr|cs|pl|tr|de|ja».
//
// Foto REALISTICHE con gpt-image-1-mini a qualita' `low` (Martin: spendere poco),
// `generate-animal-images.mjs --set casa`. Le stanze e le superfici (pavimento, parete, soffitto) sono foto
// rotonde su fondo bianco, come i paesaggi del tempo; gli oggetti sono ritagliati.

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

const house = (slug, word, examples, alts, subject, extra = []) => {
  const alt = alts.split('|');
  if (alt.length !== LANG_ORDER.length) throw new Error(`«${slug}»: alt deve avere 9 campi`);
  alt[0] = word.charAt(0).toUpperCase() + word.slice(1);
  if (examples.length !== 3) throw new Error(`«${slug}»: servono tre frasi d'esempio`);
  return {
    image: `casa/${slug}`,
    slug,
    word,
    bare: word.split(' / ')[0].replace(ARTICLE, ''),
    examples,
    answers: answersFor(word, extra),
    subject,
    alt: Object.fromEntries(LANG_ORDER.map((lang, i) => [lang, alt[i]])),
  };
};

const ROOM = 'a photograph of a room cropped into a perfect circle, centred on the white background, showing';

export const houseVocabulary = [
  // --- la casa e le stanze ---------------------------------------------------------------
  house(
    'casa',
    'la casa',
    ['Stasera resto a casa.', 'La casa dei miei nonni ha un grande giardino.', 'Cerchiamo una casa più grande.'],
    '|The house, home|La casa|La maison|Dům, domov|Dom|Ev|Das Haus, das Zuhause|家',
    'a small two-storey Italian house with a red tiled roof, green shutters and a front door, with a small patch of lawn, isolated, like a cut-out',
    ['abitazione']
  ),
  house(
    'palazzo',
    'il palazzo',
    [
      'Abito in un palazzo di sei piani.',
      'Nel mio palazzo ci sono dodici appartamenti.',
      'Il palazzo di fronte ha un bel portone.',
    ],
    '|The apartment building|El edificio de pisos|L’immeuble|Činžovní dům|Blok, kamienica|Apartman binası|Das Wohnhaus, das Mehrfamilienhaus|集合住宅、マンション',
    'a typical Italian apartment building of five floors with balconies and shutters, isolated, like a cut-out, a small patch of pavement in front',
    ['condominio', 'il condominio', 'appartamento', 'l’appartamento', 'edificio']
  ),
  house(
    'ingresso',
    'l’ingresso',
    ['Lascia le scarpe nell’ingresso.', 'Nell’ingresso c’è un attaccapanni.', 'L’ingresso è piccolo ma luminoso.'],
    '|The entrance hall|La entrada, el recibidor|L’entrée|Předsíň|Przedpokój|Antre, giriş|Der Eingang, der Flur|玄関',
    `${ROOM} a small entrance hall of an apartment seen from inside, with the front door, a coat rack with coats, a shoe rack and a small mirror`,
    ['entrata', 'l’entrata']
  ),
  house(
    'soggiorno',
    'il soggiorno',
    [
      'La sera guardiamo la televisione in soggiorno.',
      'Il soggiorno è la stanza più grande della casa.',
      'Gli ospiti sono in soggiorno.',
    ],
    '|The living room|El salón, la sala de estar|Le séjour, le salon|Obývací pokoj|Salon, pokój dzienny|Oturma odası|Das Wohnzimmer|リビング、居間',
    `${ROOM} a bright living room with a sofa, an armchair, a coffee table, a rug and a television`,
    ['salotto', 'il salotto', 'sala', 'la sala']
  ),
  house(
    'cucina-stanza',
    'la cucina',
    ['La cucina ha una finestra sul cortile.', 'Mangiamo in cucina, non in soggiorno.', 'Mia madre è in cucina.'],
    '|The kitchen|La cocina|La cuisine|Kuchyně|Kuchnia|Mutfak|Die Küche|台所、キッチン',
    `${ROOM} a whole home kitchen with cupboards, a stove, a sink, a fridge and a small table with chairs, a bowl of fruit on the table`
  ),
  house(
    'camera-da-letto',
    'la camera da letto',
    [
      'La camera da letto è in fondo al corridoio.',
      'Nella mia camera da letto c’è un armadio enorme.',
      'I bambini dormono nella loro camera.',
    ],
    '|The bedroom|El dormitorio|La chambre (à coucher)|Ložnice|Sypialnia|Yatak odası|Das Schlafzimmer|寝室',
    `${ROOM} a cosy bedroom with a double bed, two bedside tables with lamps and a wardrobe`,
    ['camera', 'la camera', 'stanza da letto', 'la stanza da letto']
  ),
  house(
    'bagno',
    'il bagno',
    ['Il bagno è occupato, aspetta un attimo.', 'Scusi, dov’è il bagno?', 'La nostra casa ha due bagni.'],
    '|The bathroom|El baño|La salle de bains|Koupelna|Łazienka|Banyo|Das Badezimmer|浴室、トイレ',
    `${ROOM} a clean bathroom with a washbasin and mirror, a toilet, a shower and white towels`,
    ['bagni']
  ),
  house(
    'studio',
    'lo studio',
    [
      'Lavoro da casa, nello studio.',
      'Lo studio è pieno di libri.',
      'Ho trasformato la camera degli ospiti in uno studio.',
    ],
    '|The study, home office|El despacho, el estudio|Le bureau|Pracovna|Gabinet|Çalışma odası|Das Arbeitszimmer|書斎',
    `${ROOM} a small home study with a desk, a laptop, a desk lamp, an office chair and bookshelves`
  ),
  house(
    'balcone',
    'il balcone',
    [
      'D’estate facciamo colazione sul balcone.',
      'Sul balcone ho messo dei fiori.',
      'Il nostro balcone dà sulla strada.',
    ],
    '|The balcony|El balcón|Le balcon|Balkon|Balkon|Balkon|Der Balkon|バルコニー',
    'a small Italian balcony with an iron railing, pots of red geraniums, a small table and two chairs, attached to a piece of wall, isolated, like a cut-out',
    ['terrazzo', 'il terrazzo']
  ),
  house(
    'giardino',
    'il giardino',
    [
      'I bambini giocano in giardino.',
      'Nel giardino c’è un albero di limoni.',
      'La domenica mio padre lavora in giardino.',
    ],
    '|The garden|El jardín|Le jardin|Zahrada|Ogród|Bahçe|Der Garten|庭',
    `${ROOM.replace('a room', 'a small garden')} green lawn, flower beds, a small tree and a wooden bench`
  ),
  house(
    'garage',
    'il garage',
    ['La macchina è in garage.', 'In garage teniamo anche le biciclette.', 'Il garage è sotto il palazzo.'],
    '|The garage|El garaje|Le garage|Garáž|Garaż|Garaj|Die Garage|ガレージ、車庫',
    `${ROOM.replace('a room', 'a home garage')} a small car, two bicycles hanging on the wall and some shelves with boxes`,
    ['box', 'il box', 'autorimessa']
  ),

  // --- le parti della casa ---------------------------------------------------------------
  house(
    'porta',
    'la porta',
    ['Chiudi la porta, per favore.', 'Qualcuno bussa alla porta.', 'La porta della cucina è sempre aperta.'],
    '|The door|La puerta|La porte|Dveře|Drzwi|Kapı|Die Tür|ドア',
    'a single closed wooden interior door in its frame, with a metal handle, standing upright, isolated, like a cut-out',
    ['porte', 'portone', 'il portone']
  ),
  house(
    'chiave',
    'la chiave',
    [
      'Non trovo più le chiavi di casa!',
      'Giro la chiave nella serratura.',
      'Ho lasciato una copia della chiave alla vicina.',
    ],
    '|The key|La llave|La clé|Klíč|Klucz|Anahtar|Der Schlüssel|鍵',
    'a bunch of three metal house keys on a key ring',
    ['chiavi', 'le chiavi']
  ),
  house(
    'campanello',
    'il campanello',
    ['Suona il campanello: chi è?', 'Il campanello non funziona, bussa.', 'Sul campanello c’è il nostro cognome.'],
    '|The doorbell|El timbre|La sonnette|Zvonek|Dzwonek (do drzwi)|Kapı zili|Die Türklingel|呼び鈴、インターホン',
    'a round white doorbell button with a small name plate, mounted on a small square piece of wall, a finger about to press it',
    ['citofono', 'il citofono']
  ),
  house(
    'scale',
    'le scale',
    ['Prendo le scale, non l’ascensore.', 'Attento, le scale sono bagnate.', 'Abito al terzo piano: sono tante scale!'],
    '|The stairs|Las escaleras|L’escalier|Schody|Schody|Merdiven|Die Treppe|階段',
    'a short straight wooden staircase with a banister, seen from the side, isolated, like a cut-out',
    ['scala', 'la scala', 'scalini', 'gradini']
  ),
  house(
    'ascensore',
    'l’ascensore',
    [
      'L’ascensore è guasto: dobbiamo fare le scale.',
      'Prendiamo l’ascensore fino al quinto piano.',
      'Nel nostro palazzo non c’è l’ascensore.',
    ],
    '|The lift, elevator|El ascensor|L’ascenseur|Výtah|Winda|Asansör|Der Aufzug|エレベーター',
    'the metal sliding doors of a lift, half open, with the call buttons on the side, set in a small piece of wall, isolated, like a cut-out'
  ),
  house(
    'tetto',
    'il tetto',
    ['C’è un gatto sul tetto.', 'Il tetto è di tegole rosse.', 'Dopo il temporale il tetto perdeva acqua.'],
    '|The roof|El tejado|Le toit|Střecha|Dach|Çatı|Das Dach|屋根',
    'the pitched red terracotta tiled roof of a small house with a chimney, only the roof and the top of the walls, isolated, like a cut-out'
  ),
  house(
    'pavimento',
    'il pavimento',
    [
      'Il pavimento del soggiorno è di legno.',
      'Il bambino gioca sul pavimento.',
      'Ho lavato il pavimento: non camminare!',
    ],
    '|The floor|El suelo|Le sol, le plancher|Podlaha|Podłoga|Zemin, yer|Der Fußboden|床',
    'a square piece of warm wooden parquet floor seen from above at an angle, isolated, like a cut-out'
  ),
  house(
    'parete',
    'la parete',
    ['Ho appeso un quadro alla parete.', 'Le pareti della camera sono azzurre.', 'Il divano è contro la parete.'],
    '|The wall (inside)|La pared|Le mur|Stěna, zeď|Ściana|Duvar|Die Wand|壁',
    'a square piece of an inside wall painted light blue with a framed picture hanging on it and a light switch, seen straight on, isolated, like a cut-out',
    ['muro', 'il muro', 'pareti', 'le pareti']
  ),
  house(
    'soffitto',
    'il soffitto',
    [
      'Dal soffitto pende un lampadario.',
      'In questa casa i soffitti sono molto alti.',
      'C’è una macchia sul soffitto.',
    ],
    '|The ceiling|El techo|Le plafond|Strop|Sufit|Tavan|Die Zimmerdecke|天井',
    `${ROOM.replace('a room', 'a white room ceiling seen from below')} a glass chandelier hanging from the middle, the top of the walls around the edge`
  ),
  house(
    'interruttore',
    'l’interruttore',
    [
      'L’interruttore è vicino alla porta.',
      'Non trovo l’interruttore al buio.',
      'Premi l’interruttore per accendere la luce.',
    ],
    '|The light switch|El interruptor|L’interrupteur|Vypínač|Włącznik (światła)|Elektrik düğmesi|Der Lichtschalter|スイッチ',
    'a white light switch on a small square piece of wall, a finger pressing it',
    ['luce', 'la luce']
  ),

  // --- la camera da letto -----------------------------------------------------------------
  house(
    'letto',
    'il letto',
    ['Vado a letto alle undici.', 'Il letto è comodissimo.', 'La mattina faccio il letto.'],
    '|The bed|La cama|Le lit|Postel|Łóżko|Yatak|Das Bett|ベッド',
    'a double bed with a wooden headboard, white sheets, two pillows and a folded blue blanket'
  ),
  house(
    'armadio',
    'l’armadio',
    ['I vestiti sono nell’armadio.', 'L’armadio è pieno: non c’è più posto.', 'Ho appeso la giacca nell’armadio.'],
    '|The wardrobe, closet|El armario|L’armoire|Skříň|Szafa|Gardırop, dolap|Der Kleiderschrank|洋服だんす、クローゼット',
    'a tall wooden wardrobe with one door open showing clothes on hangers'
  ),
  house(
    'comodino',
    'il comodino',
    ['Sul comodino c’è la sveglia.', 'Tengo gli occhiali sul comodino.', 'Il libro è nel cassetto del comodino.'],
    '|The bedside table|La mesilla de noche|La table de chevet|Noční stolek|Szafka nocna|Komodin, başucu dolabı|Der Nachttisch|ナイトテーブル',
    'a small wooden bedside table with one drawer, a small lamp and a book on top'
  ),
  house(
    'cassetto',
    'il cassetto',
    ['Le calze sono nel primo cassetto.', 'Il cassetto è bloccato, non si apre.', 'Chiudi il cassetto!'],
    '|The drawer|El cajón|Le tiroir|Zásuvka, šuplík|Szuflada|Çekmece|Die Schublade|引き出し',
    'a wooden chest of drawers with the top drawer pulled open, folded socks and t-shirts inside',
    ['cassetti', 'cassettiera', 'la cassettiera']
  ),
  house(
    'cuscino',
    'il cuscino',
    ['Dormo con due cuscini.', 'Il cuscino è troppo alto per me.', 'Metti una federa pulita sul cuscino.'],
    '|The pillow|La almohada|L’oreiller|Polštář|Poduszka|Yastık|Das Kopfkissen|枕',
    'one white rectangular bed pillow',
    ['guanciale']
  ),
  house(
    'coperta',
    'la coperta',
    [
      'Fa freddo: prendi un’altra coperta.',
      'La nonna mi ha fatto una coperta di lana.',
      'Il gatto dorme sulla coperta.',
    ],
    '|The blanket|La manta|La couverture|Deka|Koc|Battaniye|Die Decke|毛布',
    'a folded warm woollen blanket in green and beige squares',
    ['piumone', 'il piumone', 'coperte']
  ),
  house(
    'lenzuolo',
    'il lenzuolo',
    ['Oggi cambio le lenzuola.', 'Le lenzuola sono appena lavate.', 'D’estate dormo solo con il lenzuolo.'],
    '|The sheet|La sábana|Le drap|Prostěradlo|Prześcieradło|Çarşaf|Das Betttuch, das Laken|シーツ',
    'a neat pile of folded white and light blue bed sheets',
    ['lenzuola', 'le lenzuola']
  ),
  house(
    'specchio',
    'lo specchio',
    [
      'Mi guardo allo specchio prima di uscire.',
      'Lo specchio del bagno è appannato.',
      'Nell’ingresso c’è uno specchio grande.',
    ],
    '|The mirror|El espejo|Le miroir|Zrcadlo|Lustro|Ayna|Der Spiegel|鏡',
    'a tall rectangular mirror with a thin wooden frame, reflecting only a plain light room, standing upright'
  ),
  house(
    'sveglia',
    'la sveglia',
    ['La sveglia suona alle sette.', 'Stamattina non ho sentito la sveglia.', 'Metto la sveglia sul telefono.'],
    '|The alarm clock|El despertador|Le réveil|Budík|Budzik|Çalar saat|Der Wecker|目覚まし時計',
    'a classic round red alarm clock with two bells on top'
  ),

  // --- il bagno -------------------------------------------------------------------------------
  house(
    'doccia',
    'la doccia',
    ['Faccio la doccia ogni mattina.', 'La doccia è troppo fredda!', 'Dopo la palestra faccio subito la doccia.'],
    '|The shower|La ducha|La douche|Sprcha|Prysznic|Duş|Die Dusche|シャワー',
    'a glass shower cabin with a chrome shower head spraying water, white tiles, isolated, like a cut-out'
  ),
  house(
    'vasca',
    'la vasca da bagno',
    [
      'I bambini fanno il bagno nella vasca.',
      'La vasca da bagno è piena di schiuma.',
      'Preferisco la doccia alla vasca.',
    ],
    '|The bathtub|La bañera|La baignoire|Vana|Wanna|Küvet|Die Badewanne|浴槽',
    'a white freestanding bathtub full of water and white foam, isolated',
    ['vasca', 'la vasca']
  ),
  house(
    'lavandino',
    'il lavandino',
    ['Mi lavo le mani al lavandino.', 'Il lavandino perde acqua.', 'Sul lavandino ci sono il sapone e lo spazzolino.'],
    '|The washbasin, sink|El lavabo|Le lavabo|Umyvadlo|Umywalka|Lavabo|Das Waschbecken|洗面台',
    'a white ceramic bathroom washbasin with a chrome tap, on a small wall-mounted cabinet, isolated',
    ['lavabo', 'il lavabo']
  ),
  house(
    'water',
    'il water',
    ['Il water è in bagno, a sinistra.', 'Abbassa la tavoletta del water!', 'Il water è intasato: chiamo l’idraulico.'],
    '|The toilet (bowl)|El váter, el inodoro|Les toilettes, la cuvette|Záchod|Sedes, muszla|Klozet|Die Toilette, das WC|便器、トイレ',
    'a clean white ceramic toilet with the lid closed, seen from the side at an angle, isolated',
    ['gabinetto', 'il gabinetto', 'wc', 'vater']
  ),
  house(
    'asciugamano',
    'l’asciugamano',
    ['Mi asciugo con l’asciugamano.', 'Gli asciugamani puliti sono nell’armadio.', 'Porta un asciugamano in piscina.'],
    '|The towel|La toalla|La serviette (de bain)|Ručník|Ręcznik|Havlu|Das Handtuch|タオル',
    'a neat pile of three folded fluffy towels in white, light green and light blue',
    ['asciugamani', 'gli asciugamani']
  ),
  house(
    'sapone',
    'il sapone',
    ['Lavati le mani con il sapone.', 'Il sapone è finito.', 'Questo sapone profuma di lavanda.'],
    '|The soap|El jabón|Le savon|Mýdlo|Mydło|Sabun|Die Seife|石けん',
    'a bar of lavender soap on a small ceramic soap dish, next to a pump bottle of liquid soap',
    ['saponetta', 'la saponetta']
  ),
  house(
    'spazzolino',
    'lo spazzolino',
    ['Ho dimenticato lo spazzolino a casa.', 'Cambia lo spazzolino ogni tre mesi.', 'Lo spazzolino è nel bicchiere.'],
    '|The toothbrush|El cepillo de dientes|La brosse à dents|Zubní kartáček|Szczoteczka do zębów|Diş fırçası|Die Zahnbürste|歯ブラシ',
    'a blue toothbrush lying next to a small glass cup',
    ['spazzolino da denti']
  ),
  house(
    'dentifricio',
    'il dentifricio',
    [
      'Metti un po’ di dentifricio sullo spazzolino.',
      'Il dentifricio sa di menta.',
      'Compra il dentifricio, è quasi finito.',
    ],
    '|The toothpaste|La pasta de dientes|Le dentifrice|Zubní pasta|Pasta do zębów|Diş macunu|Die Zahnpasta|歯磨き粉',
    'a plain white tube of toothpaste with no text, a little white-and-blue paste squeezed onto a toothbrush beside it'
  ),
  house(
    'carta-igienica',
    'la carta igienica',
    [
      'Non c’è più carta igienica!',
      'La carta igienica è sotto il lavandino.',
      'Al supermercato compro la carta igienica.',
    ],
    '|The toilet paper|El papel higiénico|Le papier toilette|Toaletní papír|Papier toaletowy|Tuvalet kâğıdı|Das Toilettenpapier|トイレットペーパー',
    'two rolls of white toilet paper, one standing and one lying down'
  ),

  // --- le faccende ----------------------------------------------------------------------------
  house(
    'lavatrice',
    'la lavatrice',
    ['Metto i vestiti sporchi in lavatrice.', 'La lavatrice è in bagno.', 'La lavatrice ha finito: stendi i panni?'],
    '|The washing machine|La lavadora|La machine à laver|Pračka|Pralka|Çamaşır makinesi|Die Waschmaschine|洗濯機',
    'a white front-loading washing machine with a round door, clothes visible inside, no brand logo'
  ),
  house(
    'scopa',
    'la scopa',
    [
      'Passa la scopa in cucina, per favore.',
      'La scopa è dietro la porta.',
      'Con la scopa e la paletta pulisco il pavimento.',
    ],
    '|The broom|La escoba|Le balai|Koště|Miotła|Süpürge|Der Besen|ほうき',
    'a household broom with a wooden handle standing upright next to a plastic dustpan'
  ),
  house(
    'aspirapolvere',
    'l’aspirapolvere',
    ['Il sabato passo l’aspirapolvere.', 'L’aspirapolvere fa troppo rumore.', 'Il cane ha paura dell’aspirapolvere.'],
    '|The vacuum cleaner|La aspiradora|L’aspirateur|Vysavač|Odkurzacz|Elektrikli süpürge|Der Staubsauger|掃除機',
    'a modern upright vacuum cleaner, no brand logo'
  ),
  house(
    'ferro-da-stiro',
    'il ferro da stiro',
    [
      'Il ferro da stiro è caldo: attenzione!',
      'Non trovo il ferro da stiro.',
      'Stiro la camicia con il ferro da stiro.',
    ],
    '|The iron (for clothes)|La plancha|Le fer à repasser|Žehlička|Żelazko|Ütü|Das Bügeleisen|アイロン',
    'a modern steam iron standing on its heel on an ironing board with a folded white shirt',
    ['ferro']
  ),
];

/** L'esempio delle istruzioni di «Riconosci la parola». */
export const houseExampleWord = { bare: 'letto', withArticle: 'il letto' };

export const houseTranslationExercises = [
  tr(
    'Il bagno è in fondo al corridoio, a destra.',
    'The bathroom is at the end of the corridor, on the right.',
    'El baño está al fondo del pasillo, a la derecha.',
    'La salle de bains est au fond du couloir, à droite.',
    'Koupelna je na konci chodby vpravo.',
    'Łazienka jest na końcu korytarza, po prawej.',
    'Banyo koridorun sonunda, sağda.',
    'Das Badezimmer ist am Ende des Flurs rechts.',
    '浴室は廊下の突き当たりの右です。'
  ),
  tr(
    'Abito al secondo piano di un palazzo senza ascensore.',
    'I live on the second floor of a building without a lift.',
    'Vivo en el segundo piso de un edificio sin ascensor.',
    'J’habite au deuxième étage d’un immeuble sans ascenseur.',
    'Bydlím ve druhém patře domu bez výtahu.',
    'Mieszkam na drugim piętrze w bloku bez windy.',
    'Asansörsüz bir binanın ikinci katında oturuyorum.',
    'Ich wohne im zweiten Stock eines Hauses ohne Aufzug.',
    'エレベーターのない建物の3階に住んでいます。'
  ),
  tr(
    'Stasera resto a casa.',
    'Tonight I’m staying at home.',
    'Esta noche me quedo en casa.',
    'Ce soir, je reste à la maison.',
    'Dnes večer zůstanu doma.',
    'Dziś wieczorem zostaję w domu.',
    'Bu akşam evde kalıyorum.',
    'Heute Abend bleibe ich zu Hause.',
    '今晩は家にいます。'
  ),
  tr(
    'Non trovo le chiavi di casa.',
    'I can’t find my house keys.',
    'No encuentro las llaves de casa.',
    'Je ne trouve pas les clés de la maison.',
    'Nemůžu najít klíče od domu.',
    'Nie mogę znaleźć kluczy do domu.',
    'Ev anahtarlarını bulamıyorum.',
    'Ich finde die Hausschlüssel nicht.',
    '家の鍵が見つかりません。'
  ),
  tr(
    'Nella camera da letto ci sono un letto, un armadio e due comodini.',
    'In the bedroom there is a bed, a wardrobe and two bedside tables.',
    'En el dormitorio hay una cama, un armario y dos mesillas de noche.',
    'Dans la chambre, il y a un lit, une armoire et deux tables de chevet.',
    'V ložnici je postel, skříň a dva noční stolky.',
    'W sypialni są łóżko, szafa i dwie szafki nocne.',
    'Yatak odasında bir yatak, bir gardırop ve iki komodin var.',
    'Im Schlafzimmer gibt es ein Bett, einen Kleiderschrank und zwei Nachttische.',
    '寝室にはベッドと洋服だんすとナイトテーブルが2つあります。'
  ),
  tr(
    'La mattina faccio la doccia e mi lavo i denti.',
    'In the morning I have a shower and brush my teeth.',
    'Por la mañana me ducho y me lavo los dientes.',
    'Le matin, je prends une douche et je me brosse les dents.',
    'Ráno se osprchuju a vyčistím si zuby.',
    'Rano biorę prysznic i myję zęby.',
    'Sabahları duş alıyorum ve dişlerimi fırçalıyorum.',
    'Morgens dusche ich und putze mir die Zähne.',
    '朝、シャワーを浴びて歯を磨きます。'
  ),
  tr(
    'Suona il campanello: puoi aprire la porta?',
    'The doorbell is ringing: can you open the door?',
    'Suena el timbre: ¿puedes abrir la puerta?',
    'On sonne : tu peux ouvrir la porte ?',
    'Zvoní zvonek: můžeš otevřít dveře?',
    'Dzwonek dzwoni: możesz otworzyć drzwi?',
    'Kapı çalıyor: kapıyı açabilir misin?',
    'Es klingelt: Kannst du die Tür aufmachen?',
    '呼び鈴が鳴っています。ドアを開けてくれる？'
  ),
  tr(
    'Il sabato passo l’aspirapolvere e faccio la lavatrice.',
    'On Saturdays I vacuum and do the washing.',
    'Los sábados paso la aspiradora y pongo la lavadora.',
    'Le samedi, je passe l’aspirateur et je fais une machine.',
    'V sobotu vysávám a peru prádlo v pračce.',
    'W soboty odkurzam i nastawiam pranie.',
    'Cumartesileri süpürge çekiyorum ve çamaşır makinesini çalıştırıyorum.',
    'Samstags sauge ich Staub und lasse die Waschmaschine laufen.',
    '土曜日には掃除機をかけて、洗濯機を回します。'
  ),
  tr(
    'D’estate mangiamo sul balcone.',
    'In summer we eat on the balcony.',
    'En verano comemos en el balcón.',
    'L’été, nous mangeons sur le balcon.',
    'V létě jíme na balkoně.',
    'Latem jemy na balkonie.',
    'Yazın balkonda yemek yiyoruz.',
    'Im Sommer essen wir auf dem Balkon.',
    '夏はバルコニーで食事をします。'
  ),
  tr(
    'La nostra casa ha tre camere e due bagni.',
    'Our house has three bedrooms and two bathrooms.',
    'Nuestra casa tiene tres dormitorios y dos baños.',
    'Notre maison a trois chambres et deux salles de bains.',
    'Náš dům má tři ložnice a dvě koupelny.',
    'Nasz dom ma trzy sypialnie i dwie łazienki.',
    'Evimizde üç yatak odası ve iki banyo var.',
    'Unser Haus hat drei Schlafzimmer und zwei Badezimmer.',
    '私たちの家には寝室が3つと浴室が2つあります。'
  ),
];

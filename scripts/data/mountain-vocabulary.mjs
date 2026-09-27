// Le parole della lezione di vocabolario «La montagna» (2026-09-27).
//
// Riempie l'ultimo segnaposto dell'indice del vocabolario («Sentieri, boschi, rifugi e paesaggi»).
// Cinque gruppi: il paesaggio (13: la montagna, la cima, la valle, il bosco, il sentiero, il lago, il
// panorama...), le piante (4), i rifugi e gli impianti (5: il rifugio, la baita, la funivia...), l'escursione
// (10: lo zaino, gli scarponi, la borraccia, la tenda...) e la neve e l'arrampicata (5: gli sci, lo slittino,
// la corda, il falo'...). Gli animali di montagna (la marmotta, l'aquila, il cervo) sono gia' nella lezione
// «Gli animali», citata nella nota.
//
// Struttura di ogni voce: come city-vocabulary.mjs. Foto REALISTICHE con gpt-image-1-mini a qualita' `low`,
// `generate-animal-images.mjs --set montagna`, stile `WEATHER_STYLE` (oggetti ritagliati, paesaggi come foto
// rotonde). Se torna la sfumatura scura ai bordi (vedi «La città») si applica la maschera rotonda.

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

const mount = (slug, word, examples, alts, subject, extra = []) => {
  const alt = alts.split('|');
  if (alt.length !== LANG_ORDER.length) throw new Error(`«${slug}»: alt deve avere 9 campi`);
  alt[0] = word.charAt(0).toUpperCase() + word.slice(1);
  if (examples.length !== 3) throw new Error(`«${slug}»: servono tre frasi d'esempio`);
  return {
    image: `montagna/${slug}`,
    slug,
    word,
    bare: word.split(' / ')[0].replace(ARTICLE, ''),
    examples,
    answers: answersFor(word, extra),
    subject,
    alt: Object.fromEntries(LANG_ORDER.map((lang, i) => [lang, alt[i]])),
  };
};

const ROUND = 'a landscape photograph cropped into a perfect circle, centred on the white background, showing';

export const mountainVocabulary = [
  // --- il paesaggio -------------------------------------------------------------------------
  mount(
    'montagna',
    'la montagna',
    [
      'D’estate andiamo in montagna.',
      'Il Monte Bianco è la montagna più alta d’Italia.',
      'Dalla finestra si vedono le montagne.',
    ],
    '|The mountain|La montaña|La montagne|Hora|Góra|Dağ|Der Berg|山',
    `${ROUND} a big rocky mountain with snow on the top under a blue sky, green slopes below`,
    ['monte', 'il monte', 'montagne']
  ),
  mount(
    'cima',
    'la cima',
    ['Siamo arrivati in cima dopo tre ore.', 'Sulla cima c’è una croce di legno.', 'Dalla cima si vede il lago.'],
    '|The summit, peak|La cima|Le sommet|Vrchol|Szczyt|Zirve|Der Gipfel|頂上',
    `${ROUND} two hikers with backpacks standing next to a wooden summit cross on a rocky mountain top, arms raised`,
    ['vetta', 'la vetta']
  ),
  mount(
    'valle',
    'la valle',
    ['Il paese è in fondo alla valle.', 'Nella valle scorre un fiume.', 'La Valle d’Aosta è piccola ma bellissima.'],
    '|The valley|El valle|La vallée|Údolí|Dolina|Vadi|Das Tal|谷',
    `${ROUND} a green valley between two mountains with a small village and a river at the bottom`,
    ['vallata', 'la vallata']
  ),
  mount(
    'bosco',
    'il bosco',
    ['Facciamo una passeggiata nel bosco.', 'Nel bosco ci sono tanti funghi.', 'Il sentiero attraversa il bosco.'],
    '|The wood, forest|El bosque|Le bois, la forêt|Les|Las|Orman, koru|Der Wald|森、林',
    `${ROUND} a green forest of tall fir trees with sunlight coming through the branches`,
    ['foresta', 'la foresta', 'boschi']
  ),
  mount(
    'sentiero',
    'il sentiero',
    ['Seguiamo il sentiero fino al rifugio.', 'Il sentiero è segnato in bianco e rosso.', 'Non uscire dal sentiero!'],
    '|The path, trail|El sendero|Le sentier|Stezka|Szlak, ścieżka|Patika|Der Wanderweg, der Pfad|山道、小道',
    `${ROUND} a narrow dirt hiking path winding across a green mountain meadow, a red-and-white trail mark painted on a rock`
  ),
  mount(
    'lago',
    'il lago',
    [
      'Il lago di Garda è il più grande d’Italia.',
      'L’acqua del lago è freddissima.',
      'Abbiamo fatto un picnic vicino al lago.',
    ],
    '|The lake|El lago|Le lac|Jezero|Jezioro|Göl|Der See|湖',
    `${ROUND} a clear turquoise mountain lake surrounded by fir trees and rocky peaks`,
    ['laghi']
  ),
  mount(
    'fiume',
    'il fiume',
    ['Il Po è il fiume più lungo d’Italia.', 'Il fiume passa sotto il ponte.', 'D’estate il fiume ha poca acqua.'],
    '|The river|El río|La rivière, le fleuve|Řeka|Rzeka|Nehir, ırmak|Der Fluss|川',
    `${ROUND} a clear mountain river flowing over round stones between green banks`,
    ['torrente', 'il torrente']
  ),
  mount(
    'cascata',
    'la cascata',
    [
      'La cascata è alta cento metri.',
      'Si sente il rumore della cascata.',
      'Ci siamo fatti una foto davanti alla cascata.',
    ],
    '|The waterfall|La cascada|La cascade|Vodopád|Wodospad|Şelale|Der Wasserfall|滝',
    `${ROUND} a tall white waterfall falling down a rocky cliff into a small green pool`
  ),
  mount(
    'ghiacciaio',
    'il ghiacciaio',
    [
      'Il ghiacciaio si scioglie ogni anno di più.',
      'Sul ghiacciaio si cammina con la corda.',
      'Dal rifugio si vede il ghiacciaio.',
    ],
    '|The glacier|El glaciar|Le glacier|Ledovec|Lodowiec|Buzul|Der Gletscher|氷河',
    `${ROUND} a large white-and-blue glacier between dark rocky mountain peaks`
  ),
  mount(
    'roccia',
    'la roccia',
    [
      'Ci sediamo su una roccia a mangiare.',
      'Attento, la roccia è scivolosa.',
      'Le Dolomiti sono di una roccia chiara.',
    ],
    '|The rock|La roca|Le rocher, la roche|Skála|Skała|Kaya|Der Felsen|岩',
    'one large grey mountain boulder with some moss and small grass around its base, isolated, like a cut-out',
    ['sasso', 'il sasso', 'pietra', 'la pietra']
  ),
  mount(
    'prato',
    'il prato',
    ['Le mucche mangiano l’erba nel prato.', 'Ci sdraiamo sul prato al sole.', 'Il prato è pieno di fiori.'],
    '|The meadow, lawn|El prado|Le pré, la prairie|Louka|Łąka|Çayır|Die Wiese|草原、牧草地',
    `${ROUND} a green alpine meadow full of small yellow, white and purple wild flowers, mountains in the distance`,
    ['erba', 'l’erba', 'pascolo']
  ),
  mount(
    'grotta',
    'la grotta',
    [
      'I bambini sono entrati nella grotta con la torcia.',
      'Nella grotta fa freddo anche d’estate.',
      'La grotta è piena di stalattiti.',
    ],
    '|The cave|La cueva|La grotte|Jeskyně|Jaskinia|Mağara|Die Höhle|洞窟',
    'the dark round entrance of a cave in a grey rock face, a little grass around it, isolated, like a cut-out',
    ['caverna', 'la caverna']
  ),
  mount(
    'panorama',
    'il panorama',
    [
      'Dalla cima c’è un panorama bellissimo.',
      'Guarda che panorama!',
      'Il rifugio ha una terrazza con il panorama sulle Alpi.',
    ],
    '|The view, panorama|El paisaje, la vista|Le panorama, la vue|Výhled, panorama|Widok, panorama|Manzara|Das Panorama, die Aussicht|眺め、景色',
    `${ROUND} a wide view from a mountain top over a long chain of snowy peaks and green valleys, a hiker seen from behind in the foreground looking at it`,
    ['vista', 'la vista']
  ),

  // --- le piante ----------------------------------------------------------------------------
  mount(
    'abete',
    'l’abete',
    ['A Natale facciamo l’albero con un abete.', 'Il bosco è pieno di abeti.', 'L’abete resta verde anche d’inverno.'],
    '|The fir tree|El abeto|Le sapin|Jedle, smrk|Jodła, świerk|Köknar|Die Tanne|モミの木',
    'one tall green fir tree on a small patch of grass, isolated, like a cut-out',
    ['pino', 'il pino', 'abeti']
  ),
  mount(
    'pigna',
    'la pigna',
    [
      'I bambini raccolgono le pigne nel bosco.',
      'Lo scoiattolo mangia i semi della pigna.',
      'Metto le pigne nel camino.',
    ],
    '|The pine cone|La piña|La pomme de pin|Šiška|Szyszka|Çam kozalağı|Der Tannenzapfen|松ぼっくり',
    'two brown pine cones lying on a few green pine needles',
    ['pigne']
  ),
  mount(
    'fungo',
    'il fungo',
    [
      'D’autunno andiamo a cercare funghi.',
      'Quel fungo è velenoso: non toccarlo!',
      'Stasera facciamo il risotto ai funghi.',
    ],
    '|The mushroom|La seta, el hongo|Le champignon|Houba|Grzyb|Mantar|Der Pilz|キノコ',
    'two brown porcini mushrooms growing in green moss with a few fallen leaves',
    ['funghi']
  ),
  mount(
    'stella-alpina',
    'la stella alpina',
    [
      'La stella alpina cresce in alta montagna.',
      'È vietato raccogliere le stelle alpine.',
      'La stella alpina ha i petali bianchi e morbidi.',
    ],
    '|The edelweiss|La flor de nieve, el edelweiss|L’edelweiss|Protěž alpská|Szarotka|Edelweiss (dağ çiçeği)|Das Edelweiß|エーデルワイス',
    'a small clump of white fuzzy edelweiss flowers growing between grey stones',
    ['stelle alpine']
  ),

  // --- rifugi e impianti ----------------------------------------------------------------------
  mount(
    'rifugio',
    'il rifugio',
    [
      'Dormiamo in un rifugio a duemila metri.',
      'Al rifugio mangiamo una polenta.',
      'Il rifugio è aperto solo d’estate.',
    ],
    '|The mountain hut, refuge|El refugio|Le refuge|Horská chata|Schronisko|Dağ evi, sığınak|Die Berghütte|山小屋',
    'a stone-and-wood mountain hut with red-and-white shutters and a small Italian flag (green, white and red), on a small patch of rocky ground, isolated, like a cut-out'
  ),
  mount(
    'baita',
    'la baita',
    ['Mio zio ha una baita in montagna.', 'La baita è tutta di legno.', 'Nella baita c’è un camino.'],
    '|The mountain cabin|La cabaña|Le chalet|Srub, chata|Chata, domek w górach|Dağ kulübesi|Die Almhütte|山の小屋、山荘',
    'a small old wooden alpine cabin with a stone base and a pile of firewood, on a small patch of grass, isolated, like a cut-out',
    ['chalet', 'lo chalet']
  ),
  mount(
    'funivia',
    'la funivia',
    [
      'Saliamo in funivia fino al ghiacciaio.',
      'La funivia parte ogni venti minuti.',
      'Dalla funivia si vede tutta la valle.',
    ],
    '|The cable car|El teleférico|Le téléphérique|Lanovka (kabinová)|Kolejka linowa|Teleferik|Die Seilbahn|ロープウェー',
    'a red cable car cabin hanging from a steel cable high above a snowy slope',
    ['cabinovia', 'la cabinovia', 'ovovia']
  ),
  mount(
    'seggiovia',
    'la seggiovia',
    [
      'Prendiamo la seggiovia fino in cima alla pista.',
      'Sulla seggiovia abbassa la sbarra!',
      'La seggiovia è chiusa per il vento.',
    ],
    '|The chairlift|El telesilla|Le télésiège|Sedačková lanovka|Wyciąg krzesełkowy|Telesiyej|Der Sessellift|チェアリフト',
    'a chairlift with two skiers sitting on a chair hanging from the cable, a snowy slope below'
  ),
  mount(
    'pista',
    'la pista da sci',
    [
      'Questa pista da sci è per principianti.',
      'Le piste nere sono le più difficili.',
      'Stamattina la pista è perfetta.',
    ],
    '|The ski slope|La pista de esquí|La piste de ski|Sjezdovka|Stok narciarski|Kayak pisti|Die Skipiste|スキー場のゲレンデ',
    `${ROUND} a groomed snowy ski slope with a few small skiers going down and fir trees on the sides`,
    ['pista', 'la pista', 'piste']
  ),

  // --- l'escursione ---------------------------------------------------------------------------
  mount(
    'zaino',
    'lo zaino',
    ['Nello zaino ho l’acqua e i panini.', 'Lo zaino è troppo pesante.', 'Metti la giacca nello zaino.'],
    '|The backpack, rucksack|La mochila|Le sac à dos|Batoh|Plecak|Sırt çantası|Der Rucksack|リュックサック',
    'an orange hiking backpack with straps and side pockets, no logo',
    ['zaini']
  ),
  mount(
    'scarponi',
    'gli scarponi',
    [
      'Per il sentiero servono gli scarponi.',
      'I miei scarponi sono pieni di fango.',
      'Ho comprato un paio di scarponi nuovi.',
    ],
    '|The hiking boots|Las botas de montaña|Les chaussures de randonnée|Pohorky|Buty trekkingowe|Dağ botları|Die Wanderschuhe|登山靴',
    'a pair of brown leather hiking boots with red laces',
    ['scarpone', 'lo scarpone', 'scarpe da montagna']
  ),
  mount(
    'borraccia',
    'la borraccia',
    ['Riempio la borraccia alla fontana.', 'Non dimenticare la borraccia!', 'La borraccia è vuota.'],
    '|The water bottle, flask|La cantimplora|La gourde|Láhev (na vodu)|Bidon, manierka|Matara|Die Trinkflasche|水筒',
    'a green metal water bottle with a carabiner clip on the lid'
  ),
  mount(
    'tenda',
    'la tenda',
    ['Dormiamo in tenda vicino al lago.', 'Montare la tenda è facile.', 'Piove dentro la tenda!'],
    '|The tent|La tienda de campaña|La tente|Stan|Namiot|Çadır|Das Zelt|テント',
    'a small yellow dome camping tent pitched on a patch of grass',
    ['tende']
  ),
  mount(
    'sacco-a-pelo',
    'il sacco a pelo',
    [
      'Nel sacco a pelo non ho freddo.',
      'Arrotola il sacco a pelo e mettilo nello zaino.',
      'Ho dimenticato il sacco a pelo!',
    ],
    '|The sleeping bag|El saco de dormir|Le sac de couchage|Spací pytel|Śpiwór|Uyku tulumu|Der Schlafsack|寝袋',
    'a blue sleeping bag lying unrolled and open, next to its rolled-up bag'
  ),
  mount(
    'cartina',
    'la cartina',
    ['Guardiamo la cartina: dove siamo?', 'Sulla cartina il rifugio è qui.', 'Ho comprato una cartina dei sentieri.'],
    '|The map|El mapa|La carte|Mapa|Mapa|Harita|Die Landkarte|地図',
    'a folded paper hiking map with mountain contour lines and a red dotted trail, no words',
    ['mappa', 'la mappa', 'carta', 'la carta']
  ),
  mount(
    'bussola',
    'la bussola',
    ['Con la bussola trovi il nord.', 'Sai usare la bussola?', 'La bussola indica il nord.'],
    '|The compass|La brújula|La boussole|Kompas|Kompas|Pusula|Der Kompass|コンパス、方位磁石',
    'a round hiking compass with a red needle, open on a transparent base'
  ),
  mount(
    'torcia',
    'la torcia',
    ['Di notte accendiamo la torcia.', 'La torcia non funziona: sono finite le pile.', 'Porta la torcia nella tenda.'],
    '|The torch, flashlight|La linterna|La lampe de poche|Baterka|Latarka|El feneri|Die Taschenlampe|懐中電灯',
    'a black torch switched on, a beam of light coming out of it, next to a head torch',
    ['pila', 'la pila', 'frontale', 'la frontale']
  ),
  mount(
    'bastoncini',
    'i bastoncini',
    ['In discesa uso i bastoncini.', 'I bastoncini aiutano le ginocchia.', 'Ho perso un bastoncino da sci.'],
    '|The poles (trekking, ski)|Los bastones|Les bâtons|Hůlky|Kijki|Yürüyüş batonları|Die Stöcke|ストック',
    'a pair of trekking poles with black handles and wrist straps, standing crossed',
    ['bastoncino', 'il bastoncino', 'bastoni']
  ),
  mount(
    'binocolo',
    'il binocolo',
    ['Con il binocolo vedo un’aquila!', 'Mi presti il binocolo?', 'Dal rifugio guardiamo le cime con il binocolo.'],
    '|The binoculars|Los prismáticos|Les jumelles|Dalekohled|Lornetka|Dürbün|Das Fernglas|双眼鏡',
    'a pair of black binoculars with a neck strap'
  ),

  // --- la neve e l'arrampicata ----------------------------------------------------------------
  mount(
    'sci',
    'gli sci',
    ['Gli sci sono in macchina.', 'Il bambino mette gli sci per la prima volta.', 'Noleggiamo gli sci al negozio.'],
    '|The skis|Los esquís|Les skis|Lyže|Narty|Kayak (takımı)|Die Skier|スキー板',
    'a pair of red skis standing upright side by side, with ski poles next to them',
    ['sciare', 'lo sci']
  ),
  mount(
    'snowboard',
    'lo snowboard',
    [
      'Mio figlio preferisce lo snowboard agli sci.',
      'Sto imparando ad andare in snowboard.',
      'Lo snowboard è appoggiato al muro.',
    ],
    '|The snowboard|El snowboard|Le snowboard|Snowboard|Deska snowboardowa|Snowboard|Das Snowboard|スノーボード',
    'a colourful blue-and-green snowboard with bindings, standing upright, no logo'
  ),
  mount(
    'slittino',
    'lo slittino',
    ['I bambini scendono con lo slittino.', 'Lo slittino va velocissimo!', 'Tiriamo lo slittino su per la collina.'],
    '|The sledge, sled|El trineo|La luge|Sáňky|Sanki|Kızak|Der Schlitten|そり',
    'a child in a red snowsuit sitting on a wooden sledge on a small patch of snow',
    ['slitta', 'la slitta']
  ),
  mount(
    'corda',
    'la corda',
    ['Per arrampicare serve una corda.', 'Tieni forte la corda!', 'La corda è lunga cinquanta metri.'],
    '|The rope|La cuerda|La corde|Lano|Lina|Halat, ip|Das Seil|ロープ',
    'a neatly coiled blue-and-orange climbing rope with a metal carabiner',
    ['corde']
  ),
  mount(
    'falo',
    'il falò',
    ['La sera accendiamo un falò.', 'Cantiamo intorno al falò.', 'Spegni bene il falò prima di andare a dormire.'],
    '|The campfire, bonfire|La hoguera|Le feu de camp|Táborák|Ognisko|Kamp ateşi|Das Lagerfeuer|たき火',
    'a small campfire burning in a ring of stones, logs and flames, on a small patch of grass',
    ['fuoco', 'il fuoco']
  ),
];

/** L'esempio delle istruzioni di «Riconosci la parola». */
export const mountainExampleWord = { bare: 'zaino', withArticle: 'lo zaino' };

export const mountainTranslationExercises = [
  tr(
    'D’estate andiamo in montagna, d’inverno a sciare.',
    'In summer we go to the mountains, in winter we go skiing.',
    'En verano vamos a la montaña y en invierno a esquiar.',
    'L’été, nous allons à la montagne ; l’hiver, nous allons skier.',
    'V létě jezdíme na hory, v zimě lyžovat.',
    'Latem jeździmy w góry, a zimą na narty.',
    'Yazın dağa, kışın kayağa gidiyoruz.',
    'Im Sommer fahren wir in die Berge, im Winter zum Skifahren.',
    '夏は山へ、冬はスキーに行きます。'
  ),
  tr(
    'Il sentiero arriva fino al rifugio in tre ore.',
    'The path reaches the mountain hut in three hours.',
    'El sendero llega hasta el refugio en tres horas.',
    'Le sentier arrive au refuge en trois heures.',
    'Stezka vede až k chatě za tři hodiny.',
    'Szlak prowadzi do schroniska w trzy godziny.',
    'Patika üç saatte dağ evine varıyor.',
    'Der Wanderweg führt in drei Stunden bis zur Hütte.',
    'この山道を3時間歩くと山小屋に着きます。'
  ),
  tr(
    'Nello zaino ho la borraccia, la cartina e una giacca.',
    'In my backpack I have a water bottle, a map and a jacket.',
    'En la mochila llevo la cantimplora, el mapa y una chaqueta.',
    'Dans mon sac à dos, j’ai une gourde, une carte et une veste.',
    'V batohu mám láhev, mapu a bundu.',
    'W plecaku mam bidon, mapę i kurtkę.',
    'Sırt çantamda matara, harita ve bir ceket var.',
    'Im Rucksack habe ich die Trinkflasche, die Landkarte und eine Jacke.',
    'リュックには水筒と地図と上着が入っています。'
  ),
  tr(
    'Dalla cima c’è un panorama bellissimo.',
    'There’s a beautiful view from the summit.',
    'Desde la cima hay una vista preciosa.',
    'Du sommet, il y a une vue magnifique.',
    'Z vrcholu je nádherný výhled.',
    'Ze szczytu jest piękny widok.',
    'Zirveden çok güzel bir manzara var.',
    'Vom Gipfel hat man eine wunderschöne Aussicht.',
    '頂上からの眺めはすばらしいです。'
  ),
  tr(
    'Stanotte dormiamo in tenda vicino al lago.',
    'Tonight we’re sleeping in a tent near the lake.',
    'Esta noche dormimos en una tienda cerca del lago.',
    'Cette nuit, nous dormons sous la tente près du lac.',
    'Dnes v noci spíme ve stanu u jezera.',
    'Dziś w nocy śpimy w namiocie nad jeziorem.',
    'Bu gece gölün yakınında çadırda uyuyoruz.',
    'Heute Nacht schlafen wir im Zelt am See.',
    '今夜は湖のそばでテントに泊まります。'
  ),
  tr(
    'Saliamo in funivia e scendiamo a piedi.',
    'We go up by cable car and come down on foot.',
    'Subimos en teleférico y bajamos a pie.',
    'Nous montons en téléphérique et nous descendons à pied.',
    'Nahoru pojedeme lanovkou a dolů půjdeme pěšky.',
    'Wjeżdżamy kolejką linową, a schodzimy pieszo.',
    'Teleferikle çıkıp yürüyerek iniyoruz.',
    'Wir fahren mit der Seilbahn hinauf und gehen zu Fuß hinunter.',
    'ロープウェーで上がって、歩いて下ります。'
  ),
  tr(
    'Nel bosco abbiamo trovato tanti funghi.',
    'We found lots of mushrooms in the woods.',
    'En el bosque encontramos muchas setas.',
    'Dans le bois, nous avons trouvé beaucoup de champignons.',
    'V lese jsme našli spoustu hub.',
    'W lesie znaleźliśmy dużo grzybów.',
    'Ormanda bir sürü mantar bulduk.',
    'Im Wald haben wir viele Pilze gefunden.',
    '森でキノコをたくさん見つけました。'
  ),
  tr(
    'Non uscire dal sentiero: è pericoloso.',
    'Don’t leave the path: it’s dangerous.',
    'No te salgas del sendero: es peligroso.',
    'Ne sors pas du sentier : c’est dangereux.',
    'Nescházej ze stezky: je to nebezpečné.',
    'Nie schodź ze szlaku: to niebezpieczne.',
    'Patikadan çıkma: tehlikeli.',
    'Verlass den Weg nicht: Das ist gefährlich.',
    '山道から外れないで。危ないです。'
  ),
  tr(
    'I bambini scendono dalla collina con lo slittino.',
    'The children go down the hill on the sledge.',
    'Los niños bajan la colina en trineo.',
    'Les enfants descendent la colline en luge.',
    'Děti sjíždějí z kopce na sáňkách.',
    'Dzieci zjeżdżają z górki na sankach.',
    'Çocuklar tepeden kızakla iniyor.',
    'Die Kinder fahren mit dem Schlitten den Hügel hinunter.',
    '子どもたちはそりで丘を下ります。'
  ),
  tr(
    'La sera accendiamo un falò e guardiamo le stelle.',
    'In the evening we light a campfire and look at the stars.',
    'Por la noche encendemos una hoguera y miramos las estrellas.',
    'Le soir, nous allumons un feu de camp et nous regardons les étoiles.',
    'Večer zapálíme táborák a díváme se na hvězdy.',
    'Wieczorem rozpalamy ognisko i patrzymy na gwiazdy.',
    'Akşam kamp ateşi yakıp yıldızlara bakıyoruz.',
    'Am Abend machen wir ein Lagerfeuer und schauen die Sterne an.',
    '夜はたき火をして星を眺めます。'
  ),
];

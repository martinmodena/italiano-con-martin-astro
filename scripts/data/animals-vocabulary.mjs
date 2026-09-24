// Le 50 parole della lezione di vocabolario "Gli animali".
//
// Struttura di ogni voce (la stessa di sea-vocabulary.mjs):
//   image     percorso in public/assets/vocabolario/ senza estensione
//   word      la parola italiana con l'articolo: e' lingua-oggetto, resta in italiano ovunque
//   examples  tre frasi d'esempio in italiano (REGOLE_LINGUE.md: restano sempre in italiano)
//   answers   risposte accettate dall'esercizio «Riconosci la parola»
//   alt       testo alternativo dell'immagine, tradotto in ogni lingua (lingua-veicolo)
//   subject   soggetto in inglese per generare l'immagine
//
// L'ordine di questo elenco e' l'ordine in cui le parole compaiono nella pagina
// e nei riquadri dell'esercizio della lezione sulle caratteristiche.
//
// `alt` e' scritto come elenco nell'ordine it, en, es, fr, cs, pl, tr, de, ja.

const LANG_ORDER = ['it', 'en', 'es', 'fr', 'cs', 'pl', 'tr', 'de', 'ja'];

/** Le risposte accettate: con e senza articolo, con e senza apostrofo. */
const answersFor = (word) => {
  const bare = word.replace(/^(il|lo|la|l’|i|gli|le)\s?/, '');
  const list = [bare, word];
  if (word.includes('’')) list.push(word.replace('’', ' '), word.replace('’', ''));
  return [...new Set(list)];
};

const animal = (image, word, examples, alts, subject) => ({
  image: `animali/${image}`,
  slug: image,
  word,
  examples,
  answers: answersFor(word),
  subject,
  alt: Object.fromEntries(LANG_ORDER.map((lang, i) => [lang, alts[i]])),
});

export const animalVocabulary = [
  animal(
    'cane',
    'il cane',
    ['Il cane corre nel parco.', 'Il mio cane si chiama Leo.', 'Il cane aspetta il padrone davanti alla porta.'],
    ['Un cane', 'A dog', 'Un perro', 'Un chien', 'Pes', 'Pies', 'Bir köpek', 'Ein Hund', '犬'],
    'a cute friendly golden retriever puppy sitting, looking at the camera with a happy open mouth'
  ),
  animal(
    'gatto',
    'il gatto',
    ['Il gatto dorme sul divano.', 'Il gatto beve il latte.', 'Il gatto salta sul tavolo.'],
    ['Un gatto', 'A cat', 'Un gato', 'Un chat', 'Kočka', 'Kot', 'Bir kedi', 'Eine Katze', '猫'],
    'a cute tabby cat sitting upright with big green eyes, curious face'
  ),
  animal(
    'cavallo',
    'il cavallo',
    ['Il cavallo corre nel prato.', 'Il cavallo mangia il fieno.', 'Il cavallo è marrone e alto.'],
    ['Un cavallo', 'A horse', 'Un caballo', 'Un cheval', 'Kůň', 'Koń', 'Bir at', 'Ein Pferd', '馬'],
    'a beautiful chestnut brown horse standing, side view, gentle eye, flowing dark mane'
  ),
  animal(
    'mucca',
    'la mucca',
    ['La mucca mangia l’erba.', 'La mucca vive in campagna.', 'Nel prato c’è una mucca.'],
    ['Una mucca', 'A cow', 'Una vaca', 'Une vache', 'Kráva', 'Krowa', 'Bir inek', 'Eine Kuh', '牛'],
    'a friendly black and white dairy cow standing, with a soft gentle face and small ears'
  ),
  animal(
    'maiale',
    'il maiale',
    ['Il maiale è rosa.', 'Il maiale vive nella fattoria.', 'Il maiale ama il fango.'],
    ['Un maiale', 'A pig', 'Un cerdo', 'Un cochon', 'Prase', 'Świnia', 'Bir domuz', 'Ein Schwein', '豚'],
    'a cute pink piglet standing, curious snout, floppy ears, cheerful'
  ),
  animal(
    'pecora',
    'la pecora',
    ['La pecora ha la lana bianca.', 'Le pecore mangiano l’erba.', 'Una pecora dorme sotto l’albero.'],
    ['Una pecora', 'A sheep', 'Una oveja', 'Un mouton', 'Ovce', 'Owca', 'Bir koyun', 'Ein Schaf', '羊'],
    'a fluffy woolly sheep with a soft cream fleece and a dark face, standing, sweet expression'
  ),
  animal(
    'asino',
    'l’asino',
    ['L’asino porta un sacco pesante.', 'L’asino ha le orecchie lunghe.', 'L’asino è grigio e tranquillo.'],
    ['Un asino', 'A donkey', 'Un burro', 'Un âne', 'Osel', 'Osioł', 'Bir eşek', 'Ein Esel', 'ロバ'],
    'a cute grey donkey standing, very long ears, big soft eyes, gentle expression'
  ),
  animal(
    'coniglio',
    'il coniglio',
    ['Il coniglio mangia una carota.', 'Il coniglio ha le orecchie lunghe.', 'Il coniglio salta nell’erba.'],
    ['Un coniglio', 'A rabbit', 'Un conejo', 'Un lapin', 'Králík', 'Królik', 'Bir tavşan', 'Ein Kaninchen', 'ウサギ'],
    'a cute light brown rabbit sitting with long upright ears and a twitching pink nose'
  ),
  animal(
    'topo',
    'il topo',
    ['Il topo è piccolo e grigio.', 'Il topo mangia il formaggio.', 'Un topo corre nella cucina.'],
    ['Un topo', 'A mouse', 'Un ratón', 'Une souris', 'Myš', 'Mysz', 'Bir fare', 'Eine Maus', 'ネズミ'],
    'a cute small grey field mouse sitting up on its hind legs, round ears, bright black eyes'
  ),
  animal(
    'leone',
    'il leone',
    ['Il leone è il re della savana.', 'Il leone ha una grande criniera.', 'Il leone ruggisce forte.'],
    ['Un leone', 'A lion', 'Un león', 'Un lion', 'Lev', 'Lew', 'Bir aslan', 'Ein Löwe', 'ライオン'],
    'a majestic male lion with a full golden mane, sitting calmly, gentle noble face'
  ),
  animal(
    'tigre',
    'la tigre',
    ['La tigre ha le strisce nere.', 'La tigre vive in Asia.', 'La tigre è un grande felino.'],
    ['Una tigre', 'A tiger', 'Un tigre', 'Un tigre', 'Tygr', 'Tygrys', 'Bir kaplan', 'Ein Tiger', 'トラ'],
    'a beautiful orange tiger with black stripes, standing, calm face, bright amber eyes'
  ),
  animal(
    'ghepardo',
    'il ghepardo',
    ['Il ghepardo corre velocissimo.', 'Il ghepardo ha le macchie nere.', 'Il ghepardo vive in Africa.'],
    ['Un ghepardo', 'A cheetah', 'Un guepardo', 'Un guépard', 'Gepard', 'Gepard', 'Bir çita', 'Ein Gepard', 'チーター'],
    'a sleek spotted cheetah standing alert, black tear-line markings on the face'
  ),
  animal(
    'elefante',
    'l’elefante',
    ['L’elefante ha una lunga proboscide.', 'L’elefante è molto grande.', 'L’elefante beve con la proboscide.'],
    ['Un elefante', 'An elephant', 'Un elefante', 'Un éléphant', 'Slon', 'Słoń', 'Bir fil', 'Ein Elefant', 'ゾウ'],
    'a cute baby elephant standing, big ears, small tusks, trunk curled upward, kind eyes'
  ),
  animal(
    'giraffa',
    'la giraffa',
    ['La giraffa ha un collo lunghissimo.', 'La giraffa mangia le foglie degli alberi.', 'La giraffa vive in Africa.'],
    [
      'Una giraffa',
      'A giraffe',
      'Una jirafa',
      'Une girafe',
      'Žirafa',
      'Żyrafa',
      'Bir zürafa',
      'Eine Giraffe',
      'キリン',
    ],
    'a young giraffe standing, long neck, patterned coat, long eyelashes, sweet face'
  ),
  animal(
    'ippopotamo',
    'l’ippopotamo',
    [
      'L’ippopotamo passa il giorno nell’acqua.',
      'L’ippopotamo è grosso e pesante.',
      'L’ippopotamo apre una bocca enorme.',
    ],
    [
      'Un ippopotamo',
      'A hippopotamus',
      'Un hipopótamo',
      'Un hippopotame',
      'Hroch',
      'Hipopotam',
      'Bir su aygırı',
      'Ein Nilpferd',
      'カバ',
    ],
    'a chubby baby hippopotamus standing, wet pinkish-grey skin, small round ears, friendly look'
  ),
  animal(
    'scimmia',
    'la scimmia',
    ['La scimmia mangia una banana.', 'La scimmia salta da un albero all’altro.', 'La scimmia è molto simpatica.'],
    ['Una scimmia', 'A monkey', 'Un mono', 'Un singe', 'Opice', 'Małpa', 'Bir maymun', 'Ein Affe', 'サル'],
    'a cute young brown monkey sitting, expressive face, long tail curled'
  ),
  animal(
    'gorilla',
    'il gorilla',
    ['Il gorilla vive nella foresta.', 'Il gorilla è grande e forte.', 'Il gorilla mangia foglie e frutta.'],
    ['Un gorilla', 'A gorilla', 'Un gorila', 'Un gorille', 'Gorila', 'Goryl', 'Bir goril', 'Ein Gorilla', 'ゴリラ'],
    'a gentle young gorilla sitting, dark fur, soft thoughtful brown eyes'
  ),
  animal(
    'orso',
    'l’orso',
    ['L’orso vive nel bosco.', 'L’orso mangia il miele.', 'In inverno l’orso dorme per molti mesi.'],
    ['Un orso', 'A bear', 'Un oso', 'Un ours', 'Medvěd', 'Niedźwiedź', 'Bir ayı', 'Ein Bär', 'クマ'],
    'a cute brown bear cub sitting upright, fluffy fur, round ears, curious face'
  ),
  animal(
    'panda',
    'il panda',
    ['Il panda mangia il bambù.', 'Il panda è bianco e nero.', 'Il panda vive in Cina.'],
    ['Un panda', 'A panda', 'Un panda', 'Un panda', 'Panda', 'Panda', 'Bir panda', 'Ein Panda', 'パンダ'],
    'a cute giant panda sitting and holding a bamboo stem, black eye patches, fluffy'
  ),
  animal(
    'lupo',
    'il lupo',
    ['Il lupo vive nel bosco.', 'Il lupo ulula alla luna.', 'I lupi vivono in branco.'],
    ['Un lupo', 'A wolf', 'Un lobo', 'Un loup', 'Vlk', 'Wilk', 'Bir kurt', 'Ein Wolf', 'オオカミ'],
    'a grey wolf standing, thick fur, intelligent pale amber eyes, calm expression'
  ),
  animal(
    'volpe',
    'la volpe',
    ['La volpe ha la coda folta e rossa.', 'La volpe esce dalla tana di sera.', 'La volpe corre nella neve.'],
    ['Una volpe', 'A fox', 'Un zorro', 'Un renard', 'Liška', 'Lis', 'Bir tilki', 'Ein Fuchs', 'キツネ'],
    'a cute red fox sitting, bushy tail wrapped around its paws, pointed ears, bright eyes'
  ),
  animal(
    'scoiattolo',
    'lo scoiattolo',
    ['Lo scoiattolo sale sull’albero.', 'Lo scoiattolo mangia una nocciola.', 'Lo scoiattolo ha una coda lunga.'],
    [
      'Uno scoiattolo',
      'A squirrel',
      'Una ardilla',
      'Un écureuil',
      'Veverka',
      'Wiewiórka',
      'Bir sincap',
      'Ein Eichhörnchen',
      'リス',
    ],
    'a cute red squirrel sitting upright holding a hazelnut, ear tufts, big bushy tail'
  ),
  animal(
    'bradipo',
    'il bradipo',
    ['Il bradipo vive sugli alberi.', 'Il bradipo si muove molto piano.', 'Il bradipo mangia foglie.'],
    [
      'Un bradipo',
      'A sloth',
      'Un perezoso',
      'Un paresseux',
      'Lenochod',
      'Leniwiec',
      'Bir tembel hayvan',
      'Ein Faultier',
      'ナマケモノ',
    ],
    'a cute three-toed sloth hanging from a short branch, gentle smiling face'
  ),
  animal(
    'canguro',
    'il canguro',
    [
      'Il canguro vive in Australia.',
      'Il canguro salta molto lontano.',
      'Il piccolo canguro sta nella tasca della mamma.',
    ],
    [
      'Un canguro',
      'A kangaroo',
      'Un canguro',
      'Un kangourou',
      'Klokan',
      'Kangur',
      'Bir kanguru',
      'Ein Känguru',
      'カンガルー',
    ],
    'a cute kangaroo standing upright on hind legs with a small joey peeking out of her pouch'
  ),
  animal(
    'delfino',
    'il delfino',
    ['Il delfino salta fuori dall’acqua.', 'Il delfino vive nel mare.', 'Il delfino nuota con gli amici.'],
    ['Un delfino', 'A dolphin', 'Un delfín', 'Un dauphin', 'Delfín', 'Delfin', 'Bir yunus', 'Ein Delfin', 'イルカ'],
    'a friendly bottlenose dolphin leaping in an arc, smiling face, smooth grey skin'
  ),
  animal(
    'balena',
    'la balena',
    [
      'La balena è l’animale più grande del mare.',
      'La balena non è un pesce: è un mammifero.',
      'La balena respira in superficie.',
    ],
    ['Una balena', 'A whale', 'Una ballena', 'Une baleine', 'Velryba', 'Wieloryb', 'Bir balina', 'Ein Wal', 'クジラ'],
    'a cute blue whale seen from the side, smooth blue-grey skin, small friendly eye, calm expression'
  ),
  animal(
    'aquila',
    'l’aquila',
    ['L’aquila vola molto in alto.', 'L’aquila ha un becco forte.', 'L’aquila fa il nido sulla montagna.'],
    ['Un’aquila', 'An eagle', 'Un águila', 'Un aigle', 'Orel', 'Orzeł', 'Bir kartal', 'Ein Adler', 'ワシ'],
    'a golden eagle perched, brown feathers, sharp yellow beak, proud bright eye'
  ),
  animal(
    'gufo',
    'il gufo',
    ['Il gufo ha due grandi occhi.', 'Il gufo esce di notte.', 'Il gufo vive sugli alberi.'],
    ['Un gufo', 'An owl', 'Un búho', 'Un hibou', 'Sova', 'Sowa', 'Bir baykuş', 'Eine Eule', 'フクロウ'],
    'a cute tawny owl perched, huge round dark eyes, fluffy brown feathers'
  ),
  animal(
    'pappagallo',
    'il pappagallo',
    ['Il pappagallo ha le piume colorate.', 'Il pappagallo ripete le parole.', 'Il pappagallo mangia i semi.'],
    [
      'Un pappagallo',
      'A parrot',
      'Un loro',
      'Un perroquet',
      'Papoušek',
      'Papuga',
      'Bir papağan',
      'Ein Papagei',
      'オウム',
    ],
    'a colourful scarlet macaw parrot perched, red blue and yellow feathers, curious eye'
  ),
  animal(
    'pinguino',
    'il pinguino',
    ['Il pinguino vive vicino al polo.', 'Il pinguino cammina in modo buffo.', 'Il pinguino nuota molto bene.'],
    [
      'Un pinguino',
      'A penguin',
      'Un pingüino',
      'Un manchot',
      'Tučňák',
      'Pingwin',
      'Bir penguen',
      'Ein Pinguin',
      'ペンギン',
    ],
    'a cute emperor penguin chick standing, fluffy grey down, black head, sweet face'
  ),
  animal(
    'cigno',
    'il cigno',
    ['Il cigno nuota sul lago.', 'Il cigno ha il collo lungo.', 'Il cigno è bianco.'],
    ['Un cigno', 'A swan', 'Un cisne', 'Un cygne', 'Labuť', 'Łabędź', 'Bir kuğu', 'Ein Schwan', '白鳥'],
    'an elegant white swan with a gracefully curved neck, orange beak with a black knob'
  ),
  animal(
    'pavone',
    'il pavone',
    ['Il pavone apre la coda.', 'La coda del pavone è blu e verde.', 'Il pavone cammina nel giardino.'],
    ['Un pavone', 'A peacock', 'Un pavo real', 'Un paon', 'Páv', 'Paw', 'Bir tavus kuşu', 'Ein Pfau', 'クジャク'],
    'a peacock with its tail feathers fully fanned out, iridescent blue and green eyespots'
  ),
  animal(
    'gallo',
    'il gallo',
    ['Il gallo canta la mattina.', 'Il gallo ha la cresta rossa.', 'Il gallo vive in campagna.'],
    ['Un gallo', 'A rooster', 'Un gallo', 'Un coq', 'Kohout', 'Kogut', 'Bir horoz', 'Ein Hahn', 'オンドリ'],
    'a proud rooster standing, red comb, golden and copper feathers, long curved tail'
  ),
  animal(
    'corvo',
    'il corvo',
    ['Il corvo è nero.', 'Il corvo vola sopra i campi.', 'Il corvo ha un becco forte.'],
    ['Un corvo', 'A raven', 'Un cuervo', 'Un corbeau', 'Havran', 'Kruk', 'Bir karga', 'Ein Rabe', 'カラス'],
    'a glossy black raven perched, bright intelligent eye, sturdy beak'
  ),
  animal(
    'struzzo',
    'lo struzzo',
    ['Lo struzzo è un uccello enorme.', 'Lo struzzo non vola, ma corre.', 'Lo struzzo ha il collo lungo.'],
    [
      'Uno struzzo',
      'An ostrich',
      'Un avestruz',
      'Une autruche',
      'Pštros',
      'Struś',
      'Bir devekuşu',
      'Ein Strauß',
      'ダチョウ',
    ],
    'an ostrich standing, long pinkish neck, big eyes with long eyelashes, fluffy black and white plumage'
  ),
  animal(
    'serpente',
    'il serpente',
    ['Il serpente striscia sul terreno.', 'Il serpente non ha le zampe.', 'Il serpente muove la lingua.'],
    ['Un serpente', 'A snake', 'Una serpiente', 'Un serpent', 'Had', 'Wąż', 'Bir yılan', 'Eine Schlange', 'ヘビ'],
    'a neat green snake coiled with its head raised, tongue slightly out, scaly texture, calm'
  ),
  animal(
    'coccodrillo',
    'il coccodrillo',
    ['Il coccodrillo vive nel fiume.', 'Il coccodrillo ha molti denti.', 'Il coccodrillo sta fermo nell’acqua.'],
    [
      'Un coccodrillo',
      'A crocodile',
      'Un cocodrilo',
      'Un crocodile',
      'Krokodýl',
      'Krokodyl',
      'Bir timsah',
      'Ein Krokodil',
      'ワニ',
    ],
    'a young green crocodile seen from the side, mouth closed in a slight smile, textured scales'
  ),
  animal(
    'tartaruga',
    'la tartaruga',
    ['La tartaruga ha un guscio duro.', 'La tartaruga cammina piano.', 'La tartaruga mangia l’insalata.'],
    [
      'Una tartaruga',
      'A tortoise',
      'Una tortuga',
      'Une tortue',
      'Želva',
      'Żółw',
      'Bir kaplumbağa',
      'Eine Schildkröte',
      'カメ',
    ],
    'a cute tortoise walking, domed patterned shell, wrinkled kind face'
  ),
  animal(
    'camaleonte',
    'il camaleonte',
    ['Il camaleonte cambia colore.', 'Il camaleonte ha una lingua lunga.', 'Il camaleonte sta sul ramo.'],
    [
      'Un camaleonte',
      'A chameleon',
      'Un camaleón',
      'Un caméléon',
      'Chameleon',
      'Kameleon',
      'Bir bukalemun',
      'Ein Chamäleon',
      'カメレオン',
    ],
    'a green chameleon perched on a thin twig, curled tail, swivelling eye, colourful skin'
  ),
  animal(
    'lucertola',
    'la lucertola',
    ['La lucertola prende il sole sul muro.', 'La lucertola è piccola e verde.', 'La lucertola scappa veloce.'],
    [
      'Una lucertola',
      'A lizard',
      'Una lagartija',
      'Un lézard',
      'Ještěrka',
      'Jaszczurka',
      'Bir kertenkele',
      'Eine Eidechse',
      'トカゲ',
    ],
    'a small green wall lizard with a long tail, basking, alert bright eye'
  ),
  animal(
    'rana',
    'la rana',
    ['La rana salta nello stagno.', 'La rana è verde.', 'La rana gracida di sera.'],
    ['Una rana', 'A frog', 'Una rana', 'Une grenouille', 'Žába', 'Żaba', 'Bir kurbağa', 'Ein Frosch', 'カエル'],
    'a cute bright green tree frog sitting, big golden eyes, smooth shiny skin'
  ),
  animal(
    'squalo',
    'lo squalo',
    ['Lo squalo nuota nel mare aperto.', 'Lo squalo ha molti denti.', 'Lo squalo ha una pinna sul dorso.'],
    ['Uno squalo', 'A shark', 'Un tiburón', 'Un requin', 'Žralok', 'Rekin', 'Bir köpekbalığı', 'Ein Hai', 'サメ'],
    'a small grey reef shark swimming, side view, dorsal fin, calm face, mouth closed'
  ),
  animal(
    'pesce-pagliaccio',
    'il pesce pagliaccio',
    [
      'Il pesce pagliaccio è arancione e bianco.',
      'Il pesce pagliaccio vive nella barriera corallina.',
      'Il pesce pagliaccio è piccolo.',
    ],
    [
      'Un pesce pagliaccio',
      'A clownfish',
      'Un pez payaso',
      'Un poisson-clown',
      'Klaun',
      'Błazenek',
      'Bir palyaço balığı',
      'Ein Clownfisch',
      'クマノミ',
    ],
    'a cute orange clownfish with white stripes, side view, small round eye'
  ),
  animal(
    'pesce-rosso',
    'il pesce rosso',
    ['Il pesce rosso nuota nell’acquario.', 'Il pesce rosso è arancione.', 'Do da mangiare al pesce rosso.'],
    [
      'Un pesce rosso',
      'A goldfish',
      'Un pez dorado',
      'Un poisson rouge',
      'Zlatá rybka',
      'Złota rybka',
      'Bir japon balığı',
      'Ein Goldfisch',
      '金魚',
    ],
    'a plump orange goldfish with flowing translucent fins, side view, round friendly eye'
  ),
  animal(
    'cavalluccio-marino',
    'il cavalluccio marino',
    [
      'Il cavalluccio marino è molto piccolo.',
      'Il cavalluccio marino ha la coda arrotolata.',
      'Il cavalluccio marino vive nel mare.',
    ],
    [
      'Un cavalluccio marino',
      'A seahorse',
      'Un caballito de mar',
      'Un hippocampe',
      'Mořský koník',
      'Konik morski',
      'Bir denizatı',
      'Ein Seepferdchen',
      'タツノオトシゴ',
    ],
    'a yellow-orange seahorse, upright, curled tail, textured body, small dorsal fin'
  ),
  animal(
    'formica',
    'la formica',
    ['La formica porta una foglia.', 'Le formiche vivono in un formicaio.', 'La formica è piccola e nera.'],
    ['Una formica', 'An ant', 'Una hormiga', 'Une fourmi', 'Mravenec', 'Mrówka', 'Bir karınca', 'Eine Ameise', 'アリ'],
    'a cute black ant seen from the side, glossy body, thin legs, antennae, macro photo'
  ),
  animal(
    'ape',
    'l’ape',
    ['L’ape fa il miele.', 'L’ape vola di fiore in fiore.', 'L’ape è gialla e nera.'],
    ['Un’ape', 'A bee', 'Una abeja', 'Une abeille', 'Včela', 'Pszczoła', 'Bir arı', 'Eine Biene', 'ミツバチ'],
    'a fuzzy honeybee in flight, yellow and black stripes, transparent wings, macro photo'
  ),
  animal(
    'farfalla',
    'la farfalla',
    ['La farfalla ha le ali colorate.', 'La farfalla vola sui fiori.', 'La farfalla è leggera.'],
    [
      'Una farfalla',
      'A butterfly',
      'Una mariposa',
      'Un papillon',
      'Motýl',
      'Motyl',
      'Bir kelebek',
      'Ein Schmetterling',
      'チョウ',
    ],
    'a colourful orange and black monarch butterfly with wings spread, macro photo'
  ),
  animal(
    'ragno',
    'il ragno',
    ['Il ragno fa la tela.', 'Il ragno ha otto zampe.', 'Il ragno aspetta nella tela.'],
    ['Un ragno', 'A spider', 'Una araña', 'Une araignée', 'Pavouk', 'Pająk', 'Bir örümcek', 'Eine Spinne', 'クモ'],
    'a small cute jumping spider with big shiny eyes, furry body, eight legs, macro photo'
  ),
  animal(
    'lumaca',
    'la lumaca',
    ['La lumaca ha un guscio sulla schiena.', 'La lumaca si muove molto piano.', 'Dopo la pioggia escono le lumache.'],
    [
      'Una lumaca',
      'A snail',
      'Un caracol',
      'Un escargot',
      'Hlemýžď',
      'Ślimak',
      'Bir salyangoz',
      'Eine Schnecke',
      'カタツムリ',
    ],
    'a cute garden snail with a spiral brown shell, two long eye stalks raised, glossy body'
  ),

  // --- Altri 50 animali (2026-09-24), aggiunti per avere abbastanza risposte nelle lezioni
  //     sulle caratteristiche e sui verbi. Stesso stampo dei primi 50, in coda cosi' i numeri
  //     degli esercizi gia' fatti non cambiano. ---

  // mammiferi
  animal(
    'castoro',
    'il castoro',
    ['Il castoro costruisce una diga.', 'Il castoro ha una coda larga e piatta.', 'Il castoro vive vicino al fiume.'],
    ['Un castoro', 'A beaver', 'Un castor', 'Un castor', 'Bobr', 'Bóbr', 'Bir kunduz', 'Ein Biber', 'ビーバー'],
    'a cute brown beaver sitting upright, big orange front teeth, flat scaly tail, holding a small stick'
  ),
  animal(
    'talpa',
    'la talpa',
    ['La talpa vive sotto terra.', 'La talpa scava lunghe gallerie.', 'La talpa ha il pelo morbido.'],
    ['Una talpa', 'A mole', 'Un topo', 'Une taupe', 'Krtek', 'Kret', 'Bir köstebek', 'Ein Maulwurf', 'モグラ'],
    'a cute mole with velvety dark fur, pink pointed snout and large pink digging paws, standing'
  ),
  animal(
    'riccio',
    'il riccio',
    ['Il riccio ha molte spine.', 'Il riccio si arrotola a palla.', 'Il riccio dorme in inverno.'],
    ['Un riccio', 'A hedgehog', 'Un erizo', 'Un hérisson', 'Ježek', 'Jeż', 'Bir kirpi', 'Ein Igel', 'ハリネズミ'],
    'a cute hedgehog seen from the side, back covered in brown spines, small pointed snout, bright eyes'
  ),
  animal(
    'pipistrello',
    'il pipistrello',
    ['Il pipistrello vola di notte.', 'Il pipistrello dorme a testa in giù.', 'Il pipistrello è un mammifero.'],
    [
      'Un pipistrello',
      'A bat',
      'Un murciélago',
      'Une chauve-souris',
      'Netopýr',
      'Nietoperz',
      'Bir yarasa',
      'Eine Fledermaus',
      'コウモリ',
    ],
    'a cute small brown fruit bat with wings folded, big dark eyes and fluffy face, hanging upside down from a twig'
  ),
  animal(
    'zebra',
    'la zebra',
    ['La zebra ha le strisce bianche e nere.', 'La zebra vive in Africa.', 'Le zebre corrono insieme.'],
    ['Una zebra', 'A zebra', 'Una cebra', 'Un zèbre', 'Zebra', 'Zebra', 'Bir zebra', 'Ein Zebra', 'シマウマ'],
    'a young zebra standing side view, bold black and white stripes, gentle eye, upright mane'
  ),
  animal(
    'rinoceronte',
    'il rinoceronte',
    ['Il rinoceronte ha un corno sul naso.', 'Il rinoceronte è grosso e pesante.', 'Il rinoceronte vive in Africa.'],
    [
      'Un rinoceronte',
      'A rhinoceros',
      'Un rinoceronte',
      'Un rhinocéros',
      'Nosorožec',
      'Nosorożec',
      'Bir gergedan',
      'Ein Nashorn',
      'サイ',
    ],
    'a young white rhinoceros standing side view, thick grey skin, one big horn, calm small eye'
  ),
  animal(
    'cammello',
    'il cammello',
    ['Il cammello vive nel deserto.', 'Il cammello ha la gobba sulla schiena.', 'Il cammello beve molta acqua.'],
    ['Un cammello', 'A camel', 'Un camello', 'Un chameau', 'Velbloud', 'Wielbłąd', 'Bir deve', 'Ein Kamel', 'ラクダ'],
    'a dromedary camel standing side view, one hump, long eyelashes, calm friendly face'
  ),
  animal(
    'lama',
    'il lama',
    [
      'Il lama vive sulle montagne del Sud America.',
      'Il lama ha il pelo lungo e morbido.',
      'Il lama sputa quando è arrabbiato.',
    ],
    ['Un lama', 'A llama', 'Una llama', 'Un lama', 'Lama', 'Lama', 'Bir lama', 'Ein Lama', 'ラマ'],
    'a fluffy cream-coloured llama standing, long neck, big soft eyes, woolly coat, curious face'
  ),
  animal(
    'koala',
    'il koala',
    ['Il koala vive in Australia.', 'Il koala dorme sull’albero.', 'Il koala mangia le foglie di eucalipto.'],
    ['Un koala', 'A koala', 'Un koala', 'Un koala', 'Koala', 'Koala', 'Bir koala', 'Ein Koala', 'コアラ'],
    'a cute grey koala sitting hugging a short eucalyptus branch, round fluffy ears, big black nose'
  ),
  animal(
    'marmotta',
    'la marmotta',
    ['La marmotta vive in montagna.', 'La marmotta dorme tutto l’inverno.', 'La marmotta scava una tana.'],
    [
      'Una marmotta',
      'A marmot',
      'Una marmota',
      'Une marmotte',
      'Svišť',
      'Świstak',
      'Bir marmot',
      'Ein Murmeltier',
      'マーモット',
    ],
    'a chubby alpine marmot sitting upright, brown-grey fur, small round ears, alert cute face'
  ),
  animal(
    'criceto',
    'il criceto',
    ['Il criceto corre nella ruota.', 'Il criceto ha le guance piene.', 'Il criceto mangia i semi.'],
    [
      'Un criceto',
      'A hamster',
      'Un hámster',
      'Un hamster',
      'Křeček',
      'Chomik',
      'Bir hamster',
      'Ein Hamster',
      'ハムスター',
    ],
    'a cute golden hamster sitting up holding a sunflower seed, chubby cheeks, tiny paws'
  ),
  animal(
    'foca',
    'la foca',
    ['La foca nuota nell’acqua fredda.', 'La foca riposa sul ghiaccio.', 'La foca ha i baffi lunghi.'],
    ['Una foca', 'A seal', 'Una foca', 'Un phoque', 'Tuleň', 'Foka', 'Bir fok', 'Eine Robbe', 'アザラシ'],
    'a cute grey spotted seal resting on its belly with head raised, long whiskers, big round dark eyes'
  ),
  animal(
    'lontra',
    'la lontra',
    ['La lontra nuota a pancia in su.', 'La lontra vive vicino al fiume.', 'La lontra gioca nell’acqua.'],
    ['Una lontra', 'An otter', 'Una nutria', 'Une loutre', 'Vydra', 'Wydra', 'Bir su samuru', 'Ein Otter', 'カワウソ'],
    'a cute river otter standing on its hind legs, sleek brown fur, long whiskers, playful face'
  ),
  animal(
    'cervo',
    'il cervo',
    ['Il cervo ha grandi corna.', 'Il cervo vive nel bosco.', 'Il cervo corre veloce.'],
    ['Un cervo', 'A deer', 'Un ciervo', 'Un cerf', 'Jelen', 'Jeleń', 'Bir geyik', 'Ein Hirsch', 'シカ'],
    'a graceful red deer stag standing side view, branching antlers, gentle dark eye'
  ),
  animal(
    'capra',
    'la capra',
    ['La capra sale sulle rocce.', 'La capra vive in montagna.', 'La capra mangia l’erba.'],
    ['Una capra', 'A goat', 'Una cabra', 'Une chèvre', 'Koza', 'Koza', 'Bir keçi', 'Eine Ziege', 'ヤギ'],
    'a cute white and brown goat standing, small curved horns, little beard, curious eyes'
  ),
  animal(
    'iena',
    'la iena',
    ['La iena vive nella savana.', 'La iena fa un verso che sembra una risata.', 'Le iene vivono in gruppo.'],
    ['Una iena', 'A hyena', 'Una hiena', 'Une hyène', 'Hyena', 'Hiena', 'Bir sırtlan', 'Eine Hyäne', 'ハイエナ'],
    'a spotted hyena standing side view, sandy fur with dark spots, round ears, slightly smiling face'
  ),
  animal(
    'leopardo',
    'il leopardo',
    ['Il leopardo ha il pelo a macchie.', 'Il leopardo sale sugli alberi.', 'Il leopardo vive in Africa e in Asia.'],
    [
      'Un leopardo',
      'A leopard',
      'Un leopardo',
      'Un léopard',
      'Levhart',
      'Lampart',
      'Bir leopar',
      'Ein Leopard',
      'ヒョウ',
    ],
    'a beautiful leopard standing side view, golden coat with black rosette spots, calm green eyes, the whole animal from nose to tail-tip small in the centre of the frame with wide empty white margins all around'
  ),
  animal(
    'scimpanze',
    'lo scimpanzé',
    ['Lo scimpanzé è molto intelligente.', 'Lo scimpanzé usa i bastoni come attrezzi.', 'Lo scimpanzé vive in gruppo.'],
    [
      'Uno scimpanzé',
      'A chimpanzee',
      'Un chimpancé',
      'Un chimpanzé',
      'Šimpanz',
      'Szympans',
      'Bir şempanze',
      'Ein Schimpanse',
      'チンパンジー',
    ],
    'a young chimpanzee sitting, dark fur, pale expressive face, big rounded ears, thoughtful look'
  ),
  animal(
    'formichiere',
    'il formichiere',
    [
      'Il formichiere ha il naso lungo.',
      'Il formichiere ha una lingua lunghissima.',
      'Il formichiere vive in America del Sud.',
    ],
    [
      'Un formichiere',
      'An anteater',
      'Un oso hormiguero',
      'Un fourmilier',
      'Mravenečník',
      'Mrówkojad',
      'Bir karıncayiyen',
      'Ein Ameisenbär',
      'アリクイ',
    ],
    'a giant anteater standing side view, long tubular snout, bushy tail, black and grey striped fur'
  ),
  animal(
    'suricato',
    'il suricato',
    [
      'Il suricato sta in piedi e guarda lontano.',
      'I suricati vivono in gruppo.',
      'Il suricato scava una tana nella sabbia.',
    ],
    [
      'Un suricato',
      'A meerkat',
      'Un suricato',
      'Un suricate',
      'Surikata',
      'Surykatka',
      'Bir mirket',
      'Ein Erdmännchen',
      'ミーアキャット',
    ],
    'a cute meerkat standing upright on its hind legs, alert, dark eye patches, sandy fur'
  ),
  animal(
    'cinghiale',
    'il cinghiale',
    ['Il cinghiale vive nel bosco.', 'Il cinghiale ha due zanne.', 'Il cinghiale è forte e veloce.'],
    [
      'Un cinghiale',
      'A wild boar',
      'Un jabalí',
      'Un sanglier',
      'Divoké prase',
      'Dzik',
      'Bir yaban domuzu',
      'Ein Wildschwein',
      'イノシシ',
    ],
    'a young wild boar standing side view, bristly dark brown fur, small tusks, curious face'
  ),

  // uccelli
  animal(
    'anatra',
    'l’anatra',
    ['L’anatra nuota nello stagno.', 'L’anatra ha le zampe palmate.', 'L’anatra fa qua qua.'],
    ['Un’anatra', 'A duck', 'Un pato', 'Un canard', 'Kachna', 'Kaczka', 'Bir ördek', 'Eine Ente', 'アヒル'],
    'a cute mallard duck standing, glossy green head, yellow bill, orange webbed feet'
  ),
  animal(
    'gallina',
    'la gallina',
    ['La gallina vive nel pollaio.', 'La gallina razzola nel cortile.', 'La gallina ha le piume marroni.'],
    ['Una gallina', 'A hen', 'Una gallina', 'Une poule', 'Slepice', 'Kura', 'Bir tavuk', 'Ein Huhn', 'ニワトリ'],
    'a friendly brown hen standing, small red comb, fluffy brown feathers, round bright eye'
  ),
  animal(
    'colomba',
    'la colomba',
    ['La colomba è il simbolo della pace.', 'La colomba vola sopra la piazza.', 'La colomba è bianca.'],
    ['Una colomba', 'A dove', 'Una paloma', 'Une colombe', 'Holubice', 'Gołąb', 'Bir güvercin', 'Eine Taube', 'ハト'],
    'a pure white dove standing, soft feathers, small pink feet, gentle dark eye'
  ),
  animal(
    'rondine',
    'la rondine',
    ['La rondine arriva in primavera.', 'La rondine fa il nido sotto il tetto.', 'La rondine vola molto veloce.'],
    [
      'Una rondine',
      'A swallow',
      'Una golondrina',
      'Une hirondelle',
      'Vlaštovka',
      'Jaskółka',
      'Bir kırlangıç',
      'Eine Schwalbe',
      'ツバメ',
    ],
    'a barn swallow perched, glossy dark blue back, rusty red throat, long forked tail, small bright eye'
  ),
  animal(
    'pellicano',
    'il pellicano',
    ['Il pellicano ha un becco enorme.', 'Il pellicano vive vicino al mare.', 'Il pellicano si tuffa in acqua.'],
    [
      'Un pellicano',
      'A pelican',
      'Un pelícano',
      'Un pélican',
      'Pelikán',
      'Pelikan',
      'Bir pelikan',
      'Ein Pelikan',
      'ペリカン',
    ],
    'a friendly white pelican standing, huge pale beak with a pouch, kind eye, empty beak'
  ),
  animal(
    'fenicottero',
    'il fenicottero',
    ['Il fenicottero è rosa.', 'Il fenicottero sta su una zampa sola.', 'Il fenicottero vive nei laghi.'],
    [
      'Un fenicottero',
      'A flamingo',
      'Un flamenco',
      'Un flamant rose',
      'Plameňák',
      'Flaming',
      'Bir flamingo',
      'Ein Flamingo',
      'フラミンゴ',
    ],
    'a pink flamingo standing on one leg, long curved neck, bent black-tipped beak'
  ),
  animal(
    'cicogna',
    'la cicogna',
    [
      'La cicogna ha le zampe lunghe.',
      'La cicogna fa il nido sul tetto.',
      'La cicogna vola verso l’Africa in autunno.',
    ],
    ['Una cicogna', 'A stork', 'Una cigüeña', 'Une cigogne', 'Čáp', 'Bocian', 'Bir leylek', 'Ein Storch', 'コウノトリ'],
    'a white stork standing, long red legs, long red beak, black wing feathers'
  ),
  animal(
    'gabbiano',
    'il gabbiano',
    ['Il gabbiano vola sopra il mare.', 'Il gabbiano è bianco e grigio.', 'Il gabbiano grida forte.'],
    ['Un gabbiano', 'A seagull', 'Una gaviota', 'Une mouette', 'Racek', 'Mewa', 'Bir martı', 'Eine Möwe', 'カモメ'],
    'a seagull standing, white body, grey wings, yellow beak with a red spot, bright eye'
  ),
  animal(
    'picchio',
    'il picchio',
    ['Il picchio batte sul tronco.', 'Il picchio ha un becco duro.', 'Il picchio vive nel bosco.'],
    [
      'Un picchio',
      'A woodpecker',
      'Un pájaro carpintero',
      'Un pic',
      'Datel',
      'Dzięcioł',
      'Bir ağaçkakan',
      'Ein Specht',
      'キツツキ',
    ],
    'a great spotted woodpecker clinging to a small tree trunk, black white and red feathers, strong beak'
  ),
  animal(
    'colibri',
    'il colibrì',
    ['Il colibrì è piccolissimo.', 'Il colibrì vola davanti al fiore.', 'Il colibrì batte le ali velocissimo.'],
    [
      'Un colibrì',
      'A hummingbird',
      'Un colibrí',
      'Un colibri',
      'Kolibřík',
      'Koliber',
      'Bir sinekkuşu',
      'Ein Kolibri',
      'ハチドリ',
    ],
    'a tiny iridescent green hummingbird with long thin beak, hovering, wings slightly blurred'
  ),
  animal(
    'usignolo',
    'l’usignolo',
    [
      'L’usignolo canta di notte.',
      'L’usignolo è un uccello piccolo e marrone.',
      'Il canto dell’usignolo è bellissimo.',
    ],
    [
      'Un usignolo',
      'A nightingale',
      'Un ruiseñor',
      'Un rossignol',
      'Slavík',
      'Słowik',
      'Bir bülbül',
      'Eine Nachtigall',
      'ナイチンゲール',
    ],
    'a small brown nightingale perched on a twig, beak open as if singing, round dark eye'
  ),
  animal(
    'falco',
    'il falco',
    ['Il falco vola molto veloce.', 'Il falco ha gli occhi acuti.', 'Il falco vive sulle montagne.'],
    ['Un falco', 'A falcon', 'Un halcón', 'Un faucon', 'Sokol', 'Sokół', 'Bir şahin', 'Ein Falke', 'ハヤブサ'],
    'a peregrine falcon perched, slate-grey back, barred cream chest, sharp dark eye, proud stance'
  ),
  animal(
    'tucano',
    'il tucano',
    [
      'Il tucano ha un grande becco colorato.',
      'Il tucano vive nella foresta tropicale.',
      'Il tucano è nero, giallo e arancione.',
    ],
    ['Un tucano', 'A toucan', 'Un tucán', 'Un toucan', 'Tukan', 'Tukan', 'Bir tukan', 'Ein Tukan', 'オオハシ'],
    'a toco toucan perched, huge orange beak, black body, white throat, blue eye ring'
  ),

  // rettili e anfibi
  animal(
    'cobra',
    'il cobra',
    ['Il cobra alza la testa e allarga il collo.', 'Il cobra è velenoso.', 'Il cobra vive in Asia e in Africa.'],
    ['Un cobra', 'A cobra', 'Una cobra', 'Un cobra', 'Kobra', 'Kobra', 'Bir kobra', 'Eine Kobra', 'コブラ'],
    'a king cobra coiled with its head raised and hood spread, calm, textured tan scales, mouth closed'
  ),
  animal(
    'iguana',
    'l’iguana',
    ['L’iguana è verde.', 'L’iguana ha una lunga coda.', 'L’iguana vive nelle foreste calde.'],
    ['Un’iguana', 'An iguana', 'Una iguana', 'Un iguane', 'Leguán', 'Legwan', 'Bir iguana', 'Ein Leguan', 'イグアナ'],
    'a green iguana standing side view, spiny crest along the back, long banded tail, calm eye'
  ),
  animal(
    'rospo',
    'il rospo',
    ['Il rospo ha la pelle rugosa.', 'Il rospo vive vicino all’acqua.', 'Il rospo esce di sera.'],
    [
      'Un rospo',
      'A toad',
      'Un sapo',
      'Un crapaud',
      'Ropucha',
      'Ropucha',
      'Bir kara kurbağası',
      'Eine Kröte',
      'ヒキガエル',
    ],
    'a brown warty toad sitting, golden eyes, bumpy skin, calm friendly expression'
  ),
  animal(
    'drago-di-komodo',
    'il drago di Komodo',
    [
      'Il drago di Komodo è una grande lucertola.',
      'Il drago di Komodo vive in Indonesia.',
      'Il drago di Komodo ha una lingua lunga.',
    ],
    [
      'Un drago di Komodo',
      'A Komodo dragon',
      'Un dragón de Komodo',
      'Un dragon de Komodo',
      'Varan komodský',
      'Waran z Komodo',
      'Bir Komodo ejderi',
      'Ein Komodowaran',
      'コモドオオトカゲ',
    ],
    'a young Komodo dragon standing side view, rough grey-brown scaly skin, long tail, forked tongue slightly out, the whole animal from nose to tail-tip small in the centre of the frame with wide empty white margins all around'
  ),

  // animali del mare
  animal(
    'polpo',
    'il polpo',
    ['Il polpo ha otto braccia.', 'Il polpo cambia colore.', 'Il polpo vive sul fondo del mare.'],
    [
      'Un polpo',
      'An octopus',
      'Un pulpo',
      'Une pieuvre',
      'Chobotnice',
      'Ośmiornica',
      'Bir ahtapot',
      'Ein Oktopus',
      'タコ',
    ],
    'a cute orange-red octopus with eight curled arms, big intelligent eyes, rounded head'
  ),
  animal(
    'medusa',
    'la medusa',
    ['La medusa è trasparente.', 'La medusa galleggia nell’acqua.', 'La medusa ha lunghi tentacoli.'],
    [
      'Una medusa',
      'A jellyfish',
      'Una medusa',
      'Une méduse',
      'Medúza',
      'Meduza',
      'Bir denizanası',
      'Eine Qualle',
      'クラゲ',
    ],
    'a translucent pale blue jellyfish with a rounded bell and long thin trailing tentacles'
  ),
  animal(
    'granchio',
    'il granchio',
    ['Il granchio cammina di lato.', 'Il granchio ha due chele.', 'Il granchio vive sulla spiaggia.'],
    ['Un granchio', 'A crab', 'Un cangrejo', 'Un crabe', 'Krab', 'Krab', 'Bir yengeç', 'Eine Krabbe', 'カニ'],
    'a cute red-orange crab seen from above at an angle, two raised claws, eyes on stalks'
  ),
  animal(
    'stella-marina',
    'la stella marina',
    [
      'La stella marina ha cinque braccia.',
      'La stella marina vive sul fondo del mare.',
      'La stella marina è arancione.',
    ],
    [
      'Una stella marina',
      'A starfish',
      'Una estrella de mar',
      'Une étoile de mer',
      'Hvězdice',
      'Rozgwiazda',
      'Bir deniz yıldızı',
      'Ein Seestern',
      'ヒトデ',
    ],
    'an orange starfish with five arms and a bumpy textured surface, seen from above'
  ),
  animal(
    'orca',
    'l’orca',
    ['L’orca è bianca e nera.', 'L’orca vive nel mare.', 'L’orca è molto intelligente.'],
    ['Un’orca', 'An orca', 'Una orca', 'Une orque', 'Kosatka', 'Orka', 'Bir orka', 'Ein Orca', 'シャチ'],
    'a friendly orca killer whale seen from the side, glossy black and white body, tall dorsal fin, calm eye, the whole animal from nose to tail-tip small in the centre of the frame with wide empty white margins all around'
  ),

  // insetti e altri piccoli animali
  animal(
    'coccinella',
    'la coccinella',
    ['La coccinella è rossa con i puntini neri.', 'La coccinella è piccola.', 'La coccinella cammina sulla foglia.'],
    [
      'Una coccinella',
      'A ladybird',
      'Una mariquita',
      'Une coccinelle',
      'Beruška',
      'Biedronka',
      'Bir uğur böceği',
      'Ein Marienkäfer',
      'テントウムシ',
    ],
    'a shiny red ladybird with black spots seen from above, tiny black legs, macro photo'
  ),
  animal(
    'libellula',
    'la libellula',
    ['La libellula ha quattro ali.', 'La libellula vola sopra l’acqua.', 'La libellula è blu e verde.'],
    [
      'Una libellula',
      'A dragonfly',
      'Una libélula',
      'Une libellule',
      'Vážka',
      'Ważka',
      'Bir yusufçuk',
      'Eine Libelle',
      'トンボ',
    ],
    'a blue-green dragonfly with four transparent veined wings spread, big compound eyes, macro photo, the whole animal from nose to tail-tip small in the centre of the frame with wide empty white margins all around'
  ),
  animal(
    'cavalletta',
    'la cavalletta',
    ['La cavalletta salta nell’erba.', 'La cavalletta è verde.', 'La cavalletta ha le zampe lunghe.'],
    [
      'Una cavalletta',
      'A grasshopper',
      'Un saltamontes',
      'Une sauterelle',
      'Kobylka',
      'Konik polny',
      'Bir çekirge',
      'Eine Heuschrecke',
      'バッタ',
    ],
    'a bright green grasshopper seen from the side, long folded hind legs, long antennae, macro photo'
  ),
  animal(
    'zanzara',
    'la zanzara',
    ['La zanzara punge di sera.', 'La zanzara ronza vicino all’orecchio.', 'La zanzara vive vicino all’acqua.'],
    [
      'Una zanzara',
      'A mosquito',
      'Un mosquito',
      'Un moustique',
      'Komár',
      'Komar',
      'Bir sivrisinek',
      'Eine Mücke',
      '蚊',
    ],
    'a mosquito seen from the side, thin long legs, slender body, delicate wings, macro photo, the whole animal from nose to tail-tip small in the centre of the frame with wide empty white margins all around'
  ),
  animal(
    'lucciola',
    'la lucciola',
    ['La lucciola brilla nel buio.', 'Le lucciole escono d’estate.', 'La lucciola è un piccolo insetto.'],
    [
      'Una lucciola',
      'A firefly',
      'Una luciérnaga',
      'Une luciole',
      'Světluška',
      'Świetlik',
      'Bir ateş böceği',
      'Ein Glühwürmchen',
      'ホタル',
    ],
    'a firefly beetle seen from the side, dark body with an orange head shield, softly glowing yellow-green tail, macro photo'
  ),
  animal(
    'scorpione',
    'lo scorpione',
    ['Lo scorpione ha una coda con il pungiglione.', 'Lo scorpione vive nel deserto.', 'Lo scorpione ha due chele.'],
    [
      'Uno scorpione',
      'A scorpion',
      'Un escorpión',
      'Un scorpion',
      'Štír',
      'Skorpion',
      'Bir akrep',
      'Ein Skorpion',
      'サソリ',
    ],
    'a small tan scorpion seen from above at an angle, two claws, curved tail raised, macro photo'
  ),
  animal(
    'bruco',
    'il bruco',
    ['Il bruco mangia le foglie.', 'Il bruco diventa una farfalla.', 'Il bruco è lungo e morbido.'],
    [
      'Un bruco',
      'A caterpillar',
      'Una oruga',
      'Une chenille',
      'Housenka',
      'Gąsienica',
      'Bir tırtıl',
      'Eine Raupe',
      'イモムシ',
    ],
    'a chubby green caterpillar with yellow stripes and tiny legs crawling on a leaf, macro photo'
  ),
];

// Le frasi da tradurre: la lingua di partenza e' quella del visitatore
// (REGOLE_LINGUE.md, §3); sulla pagina italiana e' l'inglese.
// Argomenti: soluzione italiana, poi en, es, fr, cs, pl, tr, de, ja; `it` riusa l'inglese.
const tr = (solution, en, es, fr, cs, pl, trk, de, ja) => ({
  solution,
  prompt: { it: en, en, es, fr, cs, pl, tr: trk, de, ja },
});

export const animalTranslationExercises = [
  tr(
    'Il gatto dorme sul divano.',
    'The cat sleeps on the sofa.',
    'El gato duerme en el sofá.',
    'Le chat dort sur le canapé.',
    'Kočka spí na gauči.',
    'Kot śpi na kanapie.',
    'Kedi kanepede uyuyor.',
    'Die Katze schläft auf dem Sofa.',
    '猫はソファで寝ています。'
  ),
  tr(
    'Il leone ruggisce forte.',
    'The lion roars loudly.',
    'El león ruge fuerte.',
    'Le lion rugit fort.',
    'Lev hlasitě řve.',
    'Lew głośno ryczy.',
    'Aslan yüksek sesle kükrüyor.',
    'Der Löwe brüllt laut.',
    'ライオンは大きな声でほえます。'
  ),
  tr(
    'L’ape fa il miele.',
    'The bee makes honey.',
    'La abeja hace la miel.',
    'L’abeille fait du miel.',
    'Včela vyrábí med.',
    'Pszczoła robi miód.',
    'Arı bal yapar.',
    'Die Biene macht Honig.',
    'ミツバチは蜂蜜を作ります。'
  ),
  tr(
    'Il cane aspetta il padrone davanti alla porta.',
    'The dog waits for its owner in front of the door.',
    'El perro espera a su dueño delante de la puerta.',
    'Le chien attend son maître devant la porte.',
    'Pes čeká na pána před dveřmi.',
    'Pies czeka na właściciela przed drzwiami.',
    'Köpek sahibini kapının önünde bekliyor.',
    'Der Hund wartet vor der Tür auf sein Herrchen.',
    '犬はドアの前で飼い主を待っています。'
  ),
  tr(
    'La giraffa ha un collo lunghissimo.',
    'The giraffe has a very long neck.',
    'La jirafa tiene un cuello larguísimo.',
    'La girafe a un cou très long.',
    'Žirafa má velmi dlouhý krk.',
    'Żyrafa ma bardzo długą szyję.',
    'Zürafanın çok uzun bir boynu var.',
    'Die Giraffe hat einen sehr langen Hals.',
    'キリンはとても長い首をしています。'
  ),
  tr(
    'La tartaruga cammina piano.',
    'The tortoise walks slowly.',
    'La tortuga camina despacio.',
    'La tortue marche lentement.',
    'Želva chodí pomalu.',
    'Żółw chodzi powoli.',
    'Kaplumbağa yavaş yürür.',
    'Die Schildkröte geht langsam.',
    'カメはゆっくり歩きます。'
  ),
  tr(
    'Il pappagallo ripete le parole.',
    'The parrot repeats words.',
    'El loro repite las palabras.',
    'Le perroquet répète les mots.',
    'Papoušek opakuje slova.',
    'Papuga powtarza słowa.',
    'Papağan kelimeleri tekrar eder.',
    'Der Papagei wiederholt die Wörter.',
    'オウムは言葉をくり返します。'
  ),
  tr(
    'Il pinguino nuota molto bene.',
    'The penguin swims very well.',
    'El pingüino nada muy bien.',
    'Le manchot nage très bien.',
    'Tučňák plave velmi dobře.',
    'Pingwin bardzo dobrze pływa.',
    'Penguen çok iyi yüzer.',
    'Der Pinguin schwimmt sehr gut.',
    'ペンギンはとても上手に泳ぎます。'
  ),
  tr(
    'La formica porta una foglia.',
    'The ant carries a leaf.',
    'La hormiga lleva una hoja.',
    'La fourmi porte une feuille.',
    'Mravenec nese list.',
    'Mrówka niesie liść.',
    'Karınca bir yaprak taşıyor.',
    'Die Ameise trägt ein Blatt.',
    'アリは葉っぱを運んでいます。'
  ),
  tr(
    'Il gufo esce di notte.',
    'The owl comes out at night.',
    'El búho sale de noche.',
    'Le hibou sort la nuit.',
    'Sova vylétá v noci.',
    'Sowa wychodzi nocą.',
    'Baykuş geceleri dışarı çıkar.',
    'Die Eule kommt nachts heraus.',
    'フクロウは夜に出てきます。'
  ),
  tr(
    'La balena non è un pesce: è un mammifero.',
    'The whale is not a fish: it is a mammal.',
    'La ballena no es un pez: es un mamífero.',
    'La baleine n’est pas un poisson : c’est un mammifère.',
    'Velryba není ryba: je to savec.',
    'Wieloryb nie jest rybą: jest ssakiem.',
    'Balina bir balık değil: bir memelidir.',
    'Der Wal ist kein Fisch: Er ist ein Säugetier.',
    'クジラは魚ではなく、哺乳類です。'
  ),
  tr(
    'Il pesce rosso nuota nell’acquario.',
    'The goldfish swims in the aquarium.',
    'El pez dorado nada en el acuario.',
    'Le poisson rouge nage dans l’aquarium.',
    'Zlatá rybka plave v akváriu.',
    'Złota rybka pływa w akwarium.',
    'Japon balığı akvaryumda yüzüyor.',
    'Der Goldfisch schwimmt im Aquarium.',
    '金魚は水槽の中で泳いでいます。'
  ),
];

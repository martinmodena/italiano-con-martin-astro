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

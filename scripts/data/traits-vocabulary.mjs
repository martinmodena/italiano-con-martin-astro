// I 50 aggettivi della lezione «Le caratteristiche degli animali».
//
// Ogni voce:
//   image     percorso in public/assets/vocabolario/ senza estensione
//   word      l'aggettivo con la forma maschile e quella femminile: e' lingua-oggetto
//   gloss     breve spiegazione nella lingua del visitatore (in italiano: una definizione)
//   examples  tre frasi d'esempio in italiano
//   subject   soggetto in inglese per l'immagine
//   matches   gli animali (slug di animals-vocabulary.mjs) a cui la caratteristica si puo'
//             attribuire: per gli esercizi basta trovarne UNO. Sono generosi di proposito.
//             Per la forma negativa vale il contrario: e' giusto ogni animale che NON
//             compare qui.
//   never     solo per i 20 aggettivi dell'esercizio con la negazione: animali che chiaramente
//             NON hanno la caratteristica. Servono a costruire i riquadri di animali.
//
// Nota per chi rivede: molte associazioni sono stereotipi culturali, come nei modi di dire
// italiani («furbo come una volpe», «testardo come un mulo»). La pagina lo dice esplicitamente.

const LANG_ORDER = ['it', 'en', 'es', 'fr', 'cs', 'pl', 'tr', 'de', 'ja'];

const trait = (image, word, def, glosses, examples, subject, matches, never = []) => ({
  image: `caratteristiche/${image}`,
  slug: image,
  word,
  // La forma da pronunciare e da cercare: la prima.
  bare: word.split(' / ')[0],
  examples,
  subject,
  matches,
  never,
  gloss: Object.fromEntries(LANG_ORDER.map((lang, i) => [lang, i === 0 ? def : glosses[i - 1]])),
});

export const traitVocabulary = [
  trait(
    'pigro',
    'pigro / pigra',
    'Non ha voglia di fare fatica.',
    ['lazy', 'perezoso', 'paresseux', 'líný', 'leniwy', 'tembel', 'faul', '怠け者の'],
    [
      'Il bradipo è un animale pigro.',
      'La domenica sono pigro e resto a letto.',
      'Mia sorella è pigra: non vuole mai uscire.',
    ],
    'a sleepy three-toed sloth lying lazily stretched out on a thick branch, half-closed eyes, relaxed smile',
    ['bradipo', 'gatto', 'maiale', 'leone', 'ippopotamo'],
    ['formica', 'ape', 'scoiattolo']
  ),
  trait(
    'laborioso',
    'laborioso / laboriosa',
    'Lavora tanto e con impegno.',
    ['hard-working', 'trabajador', 'travailleur', 'pracovitý', 'pracowity', 'çalışkan', 'fleißig', '勤勉な'],
    [
      'La formica è molto laboriosa.',
      'Mio padre è laborioso: lavora dalla mattina alla sera.',
      'Le api sono animali laboriosi.',
    ],
    'a determined black ant carrying a large green leaf over its head, side view, macro photo',
    ['formica', 'ape', 'asino', 'cavallo', 'scoiattolo'],
    ['bradipo', 'gatto', 'leone']
  ),
  trait(
    'vanitoso',
    'vanitoso / vanitosa',
    'Pensa molto al proprio aspetto.',
    ['vain', 'vanidoso', 'vaniteux', 'ješitný', 'próżny', 'kibirli', 'eitel', 'うぬぼれの強い'],
    [
      'Il pavone è vanitoso e mostra la coda.',
      'Marco è vanitoso: si guarda sempre allo specchio.',
      'Una gatta vanitosa si pulisce tutto il giorno.',
    ],
    'a peacock showing off with tail fully fanned and chin lifted proudly, looking pleased with itself',
    ['pavone', 'gallo', 'cigno', 'gatto'],
    ['formica', 'lumaca', 'ragno']
  ),
  trait(
    'coraggioso',
    'coraggioso / coraggiosa',
    'Non ha paura del pericolo.',
    ['brave', 'valiente', 'courageux', 'odvážný', 'odważny', 'cesur', 'mutig', '勇敢な'],
    [
      'Il leone è un animale coraggioso.',
      'Il pompiere è coraggioso.',
      'Sei stata coraggiosa a parlare davanti a tutti.',
    ],
    'a brave young lion standing tall with chest out and a determined confident look, facing the camera',
    ['leone', 'tigre', 'aquila', 'lupo', 'gorilla', 'cane'],
    ['coniglio', 'topo']
  ),
  trait(
    'amichevole',
    'amichevole',
    'Si comporta bene con tutti.',
    ['friendly', 'amistoso', 'amical', 'přátelský', 'przyjazny', 'arkadaş canlısı', 'freundlich', '友好的な'],
    ['Il mio cane è amichevole con tutti.', 'Il delfino è un animale amichevole.', 'I vicini sono persone amichevoli.'],
    'a happy friendly golden retriever with wagging tail and a big welcoming smile, tongue out',
    ['cane', 'delfino', 'cavallo', 'scimmia', 'elefante', 'panda']
  ),
  trait(
    'solitario',
    'solitario / solitaria',
    'Preferisce stare da solo.',
    ['solitary', 'solitario', 'solitaire', 'samotářský', 'samotny', 'yalnız', 'einzelgängerisch', '一匹狼の'],
    ['Il lupo solitario cammina da solo.', 'L’orso è un animale solitario.', 'Mio zio è solitario: vive in montagna.'],
    'a lone grey wolf standing all by itself in an empty space, calm and independent',
    ['orso', 'tigre', 'gatto', 'ragno', 'gufo', 'aquila', 'serpente', 'lupo']
  ),
  trait(
    'veloce',
    'veloce',
    'Corre o si muove in fretta.',
    ['fast', 'rápido', 'rapide', 'rychlý', 'szybki', 'hızlı', 'schnell', '速い'],
    ['Il ghepardo è un animale molto veloce.', 'Il treno è più veloce dell’autobus.', 'Questa macchina è veloce.'],
    'a cheetah sprinting at full speed, all legs off the ground, dynamic pose, focused eyes',
    ['ghepardo', 'cavallo', 'aquila', 'struzzo', 'delfino', 'squalo', 'lupo', 'lucertola', 'cane'],
    ['bradipo', 'lumaca', 'tartaruga']
  ),
  trait(
    'lento',
    'lento / lenta',
    'Si muove piano, senza fretta.',
    ['slow', 'lento', 'lent', 'pomalý', 'wolny', 'yavaş', 'langsam', '遅い'],
    ['La lumaca è lenta.', 'Oggi l’autobus è lento.', 'Il computer è lento.'],
    'a garden snail crawling very slowly along a leaf, leaving a shiny trail',
    ['lumaca', 'tartaruga', 'bradipo', 'camaleonte'],
    ['ghepardo', 'cavallo', 'delfino']
  ),
  trait(
    'forte',
    'forte',
    'Ha molta forza.',
    ['strong', 'fuerte', 'fort', 'silný', 'silny', 'güçlü', 'stark', '強い'],
    ['L’elefante è molto forte.', 'Mio nonno è ancora forte.', 'Il caffè italiano è forte.'],
    'a powerful gorilla standing tall, broad chest and strong arms, confident calm look',
    ['elefante', 'gorilla', 'leone', 'orso', 'tigre', 'cavallo', 'formica', 'ippopotamo', 'coccodrillo', 'aquila'],
    ['farfalla', 'lumaca', 'pesce-rosso']
  ),
  trait(
    'timido',
    'timido / timida',
    'Si vergogna davanti agli altri.',
    ['shy', 'tímido', 'timide', 'plachý', 'nieśmiały', 'utangaç', 'schüchtern', '内気な'],
    ['Il coniglio è un animale timido.', 'Anna è timida con le persone nuove.', 'Il bambino è timido e non parla.'],
    'a shy little rabbit peeking from behind a large green leaf, only half of its face visible, big eyes',
    ['coniglio', 'topo', 'pecora', 'scoiattolo', 'rana', 'tartaruga', 'gatto'],
    ['pappagallo', 'gallo', 'scimmia']
  ),
  trait(
    'curioso',
    'curioso / curiosa',
    'Vuole sapere e scoprire tutto.',
    ['curious', 'curioso', 'curieux', 'zvědavý', 'ciekawski', 'meraklı', 'neugierig', '好奇心旺盛な'],
    ['Il gatto è curioso: guarda dappertutto.', 'Sono curiosa di conoscere Roma.', 'I bambini sono curiosi.'],
    'a curious ginger kitten with wide eyes and head tilted, sniffing at something out of frame',
    ['gatto', 'scimmia', 'cane', 'topo', 'scoiattolo', 'corvo', 'delfino', 'volpe', 'gorilla']
  ),
  trait(
    'furbo',
    'furbo / furba',
    'Trova sempre il modo per riuscire.',
    ['cunning', 'astuto', 'rusé', 'mazaný', 'przebiegły', 'kurnaz', 'schlau', 'ずる賢い'],
    ['La volpe è furba.', 'Sei furbo: hai trovato una soluzione facile!', 'Il gatto furbo apre la porta.'],
    'a sly red fox looking sideways at the camera with a knowing smile and narrowed eyes',
    ['volpe', 'corvo', 'scimmia', 'gatto', 'lupo', 'topo', 'serpente', 'camaleonte']
  ),
  trait(
    'saggio',
    'saggio / saggia',
    'Ha esperienza e sa scegliere bene.',
    ['wise', 'sabio', 'sage', 'moudrý', 'mądry', 'bilge', 'weise', '賢明な'],
    ['Il gufo è un animale saggio.', 'Mia nonna è una donna saggia.', 'È stata una scelta saggia.'],
    'an old wise owl perched on a branch with a calm thoughtful gaze, slightly ruffled feathers',
    ['gufo', 'elefante', 'tartaruga', 'balena']
  ),
  trait(
    'goloso',
    'goloso / golosa',
    'Ama molto mangiare cose buone.',
    ['fond of sweets', 'goloso', 'gourmand', 'mlsný', 'łakomy', 'tatlı düşkünü', 'naschhaft', '食いしん坊な'],
    ['L’orso è goloso di miele.', 'Sono goloso di cioccolato.', 'Mia figlia è golosa di gelato.'],
    'a cute brown bear cub holding a big ripe red strawberry in its paws, mouth open with delight',
    ['orso', 'topo', 'maiale', 'formica', 'scoiattolo', 'panda', 'ape', 'gatto', 'cane']
  ),
  trait(
    'rumoroso',
    'rumoroso / rumorosa',
    'Fa molto rumore.',
    ['noisy', 'ruidoso', 'bruyant', 'hlučný', 'hałaśliwy', 'gürültülü', 'laut', 'うるさい'],
    ['Il pappagallo è molto rumoroso.', 'I vicini sono rumorosi.', 'Il gallo è rumoroso al mattino.'],
    'a colourful parrot squawking loudly with its beak wide open and wings half spread',
    ['pappagallo', 'gallo', 'scimmia', 'cane', 'leone', 'maiale', 'asino', 'rana', 'corvo', 'elefante'],
    ['serpente', 'farfalla', 'ragno', 'lumaca']
  ),
  trait(
    'silenzioso',
    'silenzioso / silenziosa',
    'Non fa rumore.',
    ['quiet', 'silencioso', 'silencieux', 'tichý', 'cichy', 'sessiz', 'leise', '静かな'],
    ['Il gufo vola in modo silenzioso.', 'Il gatto cammina silenzioso.', 'Questa strada è silenziosa di notte.'],
    'a black cat tiptoeing silently with one paw lifted, careful soft steps, alert eyes',
    [
      'gufo',
      'gatto',
      'serpente',
      'farfalla',
      'pesce-rosso',
      'ragno',
      'lumaca',
      'tartaruga',
      'squalo',
      'lucertola',
      'coccodrillo',
    ],
    ['pappagallo', 'gallo', 'leone']
  ),
  trait(
    'pauroso',
    'pauroso / paurosa',
    'Ha paura di tutto.',
    ['fearful', 'miedoso', 'peureux', 'bázlivý', 'strachliwy', 'korkak', 'ängstlich', '臆病な'],
    ['Il coniglio è pauroso.', 'Marta è paurosa e non guarda i film horror.', 'Il topo pauroso scappa nella tana.'],
    'a tiny frightened grey mouse trembling with wide scared eyes and ears back',
    ['coniglio', 'topo', 'pecora', 'scoiattolo', 'cavallo', 'gatto'],
    ['leone', 'gorilla', 'tigre']
  ),
  trait(
    'aggressivo',
    'aggressivo / aggressiva',
    'Attacca facilmente gli altri.',
    ['aggressive', 'agresivo', 'agressif', 'agresivní', 'agresywny', 'saldırgan', 'aggressiv', '攻撃的な'],
    [
      'Il cane è aggressivo quando ha paura.',
      'Lo squalo può essere aggressivo.',
      'Non essere aggressivo con i bambini.',
    ],
    'an angry white goose hissing with its neck stretched forward and wings spread wide',
    ['squalo', 'coccodrillo', 'tigre', 'lupo', 'gallo', 'serpente', 'ippopotamo', 'orso']
  ),
  trait(
    'dolce',
    'dolce',
    'Ha un carattere buono e tenero.',
    ['sweet', 'dulce', 'doux', 'milý', 'słodki', 'tatlı', 'süß', '優しい'],
    ['Il panda è dolce e tranquillo.', 'Mia madre ha un sorriso dolce.', 'Che bambino dolce!'],
    'a baby panda sitting and hugging a bamboo stalk, soft sweet expression',
    ['panda', 'coniglio', 'pecora', 'cane', 'gatto', 'giraffa', 'mucca']
  ),
  trait(
    'affettuoso',
    'affettuoso / affettuosa',
    'Mostra il suo affetto.',
    ['affectionate', 'cariñoso', 'affectueux', 'láskyplný', 'czuły', 'sevecen', 'anhänglich', '愛情深い'],
    ['Il gatto è affettuoso con me.', 'Mia nonna è molto affettuosa.', 'I cani sono animali affettuosi.'],
    'two fluffy rabbits cuddling close together, one nuzzling the other, tender moment',
    ['cane', 'gatto', 'scimmia', 'delfino', 'cavallo', 'gorilla', 'elefante', 'pinguino', 'coniglio']
  ),
  trait(
    'fedele',
    'fedele',
    'Non tradisce mai chi ama.',
    ['loyal', 'fiel', 'fidèle', 'věrný', 'wierny', 'sadık', 'treu', '忠実な'],
    ['Il cane è un amico fedele.', 'Il pinguino è fedele al suo compagno.', 'Sono un cliente fedele di questo bar.'],
    'a loyal dog sitting patiently and looking upward with devoted soulful eyes',
    ['cane', 'cigno', 'pinguino', 'lupo', 'cavallo']
  ),
  trait(
    'testardo',
    'testardo / testarda',
    'Non cambia mai idea.',
    ['stubborn', 'terco', 'têtu', 'tvrdohlavý', 'uparty', 'inatçı', 'stur', '頑固な'],
    ['L’asino è testardo.', 'Mio fratello è testardo e non cambia idea.', 'Non essere testarda!'],
    'a stubborn grey donkey planting its four hooves firmly and refusing to move, head lowered',
    ['asino', 'cavallo', 'gatto', 'maiale', 'cane', 'mucca']
  ),
  trait(
    'pericoloso',
    'pericoloso / pericolosa',
    'Può fare del male.',
    ['dangerous', 'peligroso', 'dangereux', 'nebezpečný', 'niebezpieczny', 'tehlikeli', 'gefährlich', '危険な'],
    ['Il coccodrillo è pericoloso.', 'Questa strada è pericolosa.', 'Il fuoco è pericoloso per i bambini.'],
    'a large crocodile with its jaws wide open showing teeth, threatening pose, side view',
    ['squalo', 'coccodrillo', 'tigre', 'leone', 'serpente', 'ippopotamo', 'orso', 'lupo', 'ragno', 'rana'],
    ['coniglio', 'pecora', 'farfalla', 'pesce-rosso']
  ),
  trait(
    'socievole',
    'socievole',
    'Ama stare con gli altri.',
    ['sociable', 'sociable', 'sociable', 'společenský', 'towarzyski', 'sosyal', 'gesellig', '社交的な'],
    ['Il delfino è un animale socievole.', 'Luca è socievole: ha molti amici.', 'Le scimmie sono socievoli.'],
    'three emperor penguins standing close together as if chatting',
    ['delfino', 'scimmia', 'cane', 'formica', 'ape', 'elefante', 'pinguino', 'lupo', 'pecora', 'cavallo']
  ),
  trait(
    'intelligente',
    'intelligente',
    'Capisce e impara in fretta.',
    ['intelligent', 'inteligente', 'intelligent', 'inteligentní', 'inteligentny', 'zeki', 'intelligent', '賢い'],
    [
      'Il delfino è molto intelligente.',
      'Mia figlia è intelligente e studia molto.',
      'I corvi sono uccelli intelligenti.',
    ],
    'a clever black crow holding a small twig in its beak like a tool, bright intelligent eye',
    ['delfino', 'scimmia', 'corvo', 'elefante', 'gorilla', 'cane', 'volpe', 'pappagallo', 'maiale', 'balena', 'lupo']
  ),
  trait(
    'orgoglioso',
    'orgoglioso / orgogliosa',
    'Ha una grande stima di sé.',
    ['proud', 'orgulloso', 'fier', 'hrdý', 'dumny', 'gururlu', 'stolz', '誇り高い'],
    [
      'Il leone cammina orgoglioso nella savana.',
      'Sono orgoglioso di mio figlio.',
      'Marta è orgogliosa del suo lavoro.',
    ],
    'a proud rooster puffing out its chest with its head held high, glossy feathers',
    ['leone', 'pavone', 'gallo', 'aquila', 'cigno', 'cavallo', 'tigre']
  ),
  trait(
    'gentile',
    'gentile',
    'Tratta bene le altre persone.',
    ['kind', 'amable', 'gentil', 'laskavý', 'życzliwy', 'nazik', 'nett', '親切な'],
    ['La giraffa è gentile con i piccoli.', 'Il cameriere è molto gentile.', 'Sei stato gentile ad aiutarmi.'],
    'a gentle brown horse lowering its head tenderly to nuzzle a small foal',
    ['giraffa', 'cavallo', 'elefante', 'panda', 'pecora', 'mucca', 'cane']
  ),
  trait(
    'tranquillo',
    'tranquillo / tranquilla',
    'Non è agitato.',
    ['calm', 'tranquilo', 'calme', 'klidný', 'spokojny', 'sakin', 'ruhig', '穏やかな'],
    ['La mucca è un animale tranquillo.', 'Oggi il mare è tranquillo.', 'Abito in un quartiere tranquillo.'],
    'a calm cow lying down peacefully with eyes half closed and a relaxed face',
    [
      'mucca',
      'tartaruga',
      'pecora',
      'panda',
      'bradipo',
      'gatto',
      'asino',
      'balena',
      'cigno',
      'elefante',
      'giraffa',
      'coniglio',
    ]
  ),
  trait(
    'allegro',
    'allegro / allegra',
    'Ha voglia di ridere e giocare.',
    ['cheerful', 'alegre', 'joyeux', 'veselý', 'wesoły', 'neşeli', 'fröhlich', '陽気な'],
    ['Il cane è allegro quando esce.', 'Mia nonna è sempre allegra.', 'Che canzone allegra!'],
    'a joyful bottlenose dolphin leaping out of the water with a big smile',
    ['cane', 'delfino', 'scimmia', 'scoiattolo', 'pappagallo', 'canguro', 'pinguino', 'maiale']
  ),
  trait(
    'elegante',
    'elegante',
    'Ha uno stile raffinato.',
    ['elegant', 'elegante', 'élégant', 'elegantní', 'elegancki', 'zarif', 'elegant', '優雅な'],
    ['Il cigno è elegante.', 'Il tuo vestito è molto elegante.', 'Il cavallo nero è alto ed elegante.'],
    'an elegant white swan gliding with a gracefully curved neck, perfectly composed',
    ['cigno', 'cavallo', 'giraffa', 'pavone', 'gatto', 'tigre', 'farfalla', 'pesce-rosso']
  ),
  trait(
    'goffo',
    'goffo / goffa',
    'Si muove in modo poco preciso.',
    ['clumsy', 'torpe', 'maladroit', 'nemotorný', 'niezdarny', 'sakar', 'tollpatschig', 'ぎこちない'],
    [
      'Il pinguino è goffo sulla terra, ma nuota bene.',
      'Il panda è un po’ goffo.',
      'Sono goffo: faccio cadere sempre qualcosa.',
    ],
    'a young penguin waddling awkwardly with flippers out, about to trip over its own feet',
    ['pinguino', 'panda', 'struzzo', 'ippopotamo', 'orso', 'elefante']
  ),
  trait(
    'paziente',
    'paziente',
    'Sa aspettare senza arrabbiarsi.',
    ['patient', 'paciente', 'patient', 'trpělivý', 'cierpliwy', 'sabırlı', 'geduldig', '忍耐強い'],
    ['Il ragno è paziente e aspetta nella tela.', 'Il dottore è paziente con tutti.', 'Devi essere paziente.'],
    'a grey cat sitting perfectly still and waiting patiently with focused calm eyes',
    ['ragno', 'gatto', 'coccodrillo', 'tartaruga', 'elefante', 'asino', 'cavallo', 'mucca', 'serpente', 'camaleonte']
  ),
  trait(
    'energico',
    'energico / energica',
    'Ha molta energia.',
    ['energetic', 'enérgico', 'énergique', 'energický', 'energiczny', 'enerjik', 'energiegeladen', '精力的な'],
    ['Lo scoiattolo è un animale energico.', 'Mio nonno è ancora energico.', 'Dopo il caffè sono più energica.'],
    'a red squirrel captured mid-leap through the air, full of energy, bushy tail streaming',
    ['scoiattolo', 'ape', 'formica', 'scimmia', 'canguro', 'delfino', 'cane', 'farfalla']
  ),
  trait(
    'sonnolento',
    'sonnolento / sonnolenta',
    'Ha voglia di dormire.',
    ['sleepy', 'somnoliento', 'somnolent', 'ospalý', 'senny', 'uykulu', 'schläfrig', '眠そうな'],
    ['Il gatto è sonnolento dopo pranzo.', 'Sono sonnolento: ho dormito poco.', 'La città è sonnolenta di domenica.'],
    'a sleepy koala hugging a branch, yawning with droopy eyelids',
    ['bradipo', 'gatto', 'orso', 'leone', 'maiale', 'cane', 'ippopotamo']
  ),
  trait(
    'grande',
    'grande',
    'Ha grandi dimensioni.',
    ['big', 'grande', 'grand', 'velký', 'duży', 'büyük', 'groß', '大きい'],
    ['L’elefante è un animale grande.', 'Abito in una casa grande.', 'Questa città è molto grande.'],
    'a huge adult elephant seen from the side, imposing size, calm eye',
    [
      'elefante',
      'balena',
      'giraffa',
      'ippopotamo',
      'orso',
      'gorilla',
      'coccodrillo',
      'struzzo',
      'cavallo',
      'mucca',
      'tigre',
      'leone',
      'squalo',
    ],
    ['formica', 'topo', 'ape', 'farfalla']
  ),
  trait(
    'piccolo',
    'piccolo / piccola',
    'Ha piccole dimensioni.',
    ['small', 'pequeño', 'petit', 'malý', 'mały', 'küçük', 'klein', '小さい'],
    ['La formica è piccola.', 'Ho un appartamento piccolo.', 'Il topo è più piccolo del gatto.'],
    'a tiny baby mouse sitting next to a large teacup, showing how small it is',
    [
      'formica',
      'ape',
      'topo',
      'ragno',
      'lumaca',
      'farfalla',
      'cavalluccio-marino',
      'pesce-rosso',
      'lucertola',
      'rana',
      'coniglio',
      'scoiattolo',
      'pesce-pagliaccio',
      'camaleonte',
      'gatto',
    ],
    ['elefante', 'balena', 'giraffa', 'ippopotamo']
  ),
  trait(
    'alto',
    'alto / alta',
    'Arriva molto in alto da terra.',
    ['tall', 'alto', 'grand', 'vysoký', 'wysoki', 'uzun boylu', 'hoch', '背が高い'],
    ['La giraffa è molto alta.', 'Mio fratello è alto e magro.', 'Quella montagna è alta.'],
    'a very tall giraffe standing straight with its long neck stretched upward, side view',
    ['giraffa', 'struzzo', 'elefante', 'cavallo']
  ),
  trait(
    'pesante',
    'pesante',
    'Ha molto peso.',
    ['heavy', 'pesado', 'lourd', 'těžký', 'ciężki', 'ağır', 'schwer', '重い'],
    ['L’ippopotamo è pesante.', 'La valigia è troppo pesante.', 'Non sollevare cose pesanti.'],
    'a heavy chubby hippopotamus standing with a wide round body, calm expression',
    [
      'elefante',
      'ippopotamo',
      'balena',
      'orso',
      'gorilla',
      'mucca',
      'maiale',
      'coccodrillo',
      'cavallo',
      'tigre',
      'leone',
    ],
    ['farfalla', 'ape', 'formica', 'scoiattolo']
  ),
  trait(
    'leggero',
    'leggero / leggera',
    'Ha poco peso.',
    ['light', 'ligero', 'léger', 'lehký', 'lekki', 'hafif', 'leicht', '軽い'],
    ['La farfalla è leggera.', 'Porto una borsa leggera.', 'Questa giacca è leggera.'],
    'a delicate butterfly resting on a flower petal, barely bending it, macro photo',
    ['farfalla', 'ape', 'formica', 'ragno', 'scoiattolo', 'lucertola', 'topo', 'cavalluccio-marino'],
    ['elefante', 'ippopotamo', 'balena']
  ),
  trait(
    'sporco',
    'sporco / sporca',
    'Non è pulito.',
    ['dirty', 'sucio', 'sale', 'špinavý', 'brudny', 'kirli', 'schmutzig', '汚れた'],
    ['Il maiale è sporco di fango.', 'Le mie scarpe sono sporche.', 'Il cane sporco ha bisogno di un bagno.'],
    'a cheerful pink pig covered in brown mud, muddy legs and snout',
    ['maiale', 'ippopotamo', 'topo', 'cane', 'mucca', 'cavallo', 'pecora', 'asino']
  ),
  trait(
    'pulito',
    'pulito / pulita',
    'Non ha macchie né sporco.',
    ['clean', 'limpio', 'propre', 'čistý', 'czysty', 'temiz', 'sauber', '清潔な'],
    ['Il gatto è molto pulito.', 'La cucina è pulita.', 'Ho le mani pulite.'],
    'a spotless white cat washing its front paw with its tongue, immaculate fur',
    ['gatto', 'cigno', 'pinguino', 'coniglio', 'formica', 'ape']
  ),
  trait(
    'selvaggio',
    'selvaggio / selvaggia',
    'Vive libero in natura.',
    ['wild', 'salvaje', 'sauvage', 'divoký', 'dziki', 'vahşi', 'wild', '野生の'],
    ['La tigre è un animale selvaggio.', 'La costa è selvaggia e bellissima.', 'Il gatto selvaggio vive nel bosco.'],
    'a wild tiger prowling with a low powerful stride, intense amber eyes',
    [
      'leone',
      'tigre',
      'lupo',
      'orso',
      'elefante',
      'gorilla',
      'squalo',
      'aquila',
      'coccodrillo',
      'serpente',
      'giraffa',
      'ghepardo',
      'volpe',
      'ippopotamo',
      'balena',
      'corvo',
    ],
    ['cane', 'gatto', 'mucca', 'pecora', 'maiale', 'coniglio', 'pesce-rosso', 'cavallo', 'asino']
  ),
  trait(
    'domestico',
    'domestico / domestica',
    'Vive con le persone, in casa.',
    ['domestic', 'doméstico', 'domestique', 'domácí', 'domowy', 'evcil', 'domestiziert', '飼いならされた'],
    ['Il cane è un animale domestico.', 'Ho due animali domestici.', 'I lavori domestici sono faticosi.'],
    'a friendly dog wearing a red collar sitting side by side with a tabby cat, both looking at the camera',
    ['cane', 'gatto', 'cavallo', 'mucca', 'maiale', 'pecora', 'asino', 'coniglio', 'gallo', 'pesce-rosso'],
    ['leone', 'tigre', 'lupo', 'squalo', 'coccodrillo', 'elefante', 'gorilla', 'aquila']
  ),
  trait(
    'velenoso',
    'velenoso / velenosa',
    'Il suo veleno può fare male.',
    ['poisonous', 'venenoso', 'venimeux', 'jedovatý', 'jadowity', 'zehirli', 'giftig', '毒のある'],
    ['Alcuni serpenti sono velenosi.', 'Attenzione: questa rana è velenosa!', 'Questo fungo è velenoso.'],
    'a tiny bright blue poison dart frog sitting on a green leaf, vivid warning colours',
    ['serpente', 'ragno', 'rana'],
    ['cane', 'gatto', 'cavallo', 'mucca', 'pecora', 'coniglio', 'delfino', 'elefante']
  ),
  trait(
    'pacifico',
    'pacifico / pacifica',
    'Non cerca lite né guerra.',
    ['peaceful', 'pacífico', 'paisible', 'mírumilovný', 'pokojowy', 'barışçıl', 'friedlich', '平和的な'],
    ['Il panda è un animale pacifico.', 'Siamo un popolo pacifico.', 'La protesta è stata pacifica.'],
    'a white dove holding an olive branch in its beak, calm and serene',
    [
      'panda',
      'mucca',
      'pecora',
      'coniglio',
      'tartaruga',
      'balena',
      'elefante',
      'giraffa',
      'delfino',
      'scoiattolo',
      'cavallo',
      'asino',
    ],
    ['tigre', 'coccodrillo', 'squalo', 'leone']
  ),
  trait(
    'romantico',
    'romantico / romantica',
    'Mostra l’amore con dolcezza.',
    ['romantic', 'romántico', 'romantique', 'romantický', 'romantyczny', 'romantik', 'romantisch', 'ロマンチックな'],
    ['Il cigno è un animale romantico.', 'Che cena romantica!', 'Mio marito è molto romantico.'],
    'two white swans facing each other with their necks forming a heart shape',
    ['cigno', 'pinguino', 'cavalluccio-marino', 'lupo']
  ),
  trait(
    'geloso',
    'geloso / gelosa',
    'Non vuole dividere chi ama.',
    ['jealous', 'celoso', 'jaloux', 'žárlivý', 'zazdrosny', 'kıskanç', 'eifersüchtig', '嫉妬深い'],
    ['Il mio cane è geloso del gatto.', 'Luca è geloso di Anna.', 'Non essere geloso!'],
    'a small dog glancing sideways with a sulky jealous look, ears slightly back',
    ['cane', 'gatto', 'gallo', 'gorilla', 'cavallo']
  ),
  trait(
    'vivace',
    'vivace',
    'È pieno di vita e movimento.',
    ['lively', 'vivaz', 'vif', 'čilý', 'żywy', 'canlı', 'lebhaft', '活発な'],
    ['Il cucciolo è vivace e gioca sempre.', 'Mia nipote è una bambina vivace.', 'La piazza è vivace di sera.'],
    'a lively young puppy bouncing playfully with ears flying and paws in the air',
    [
      'scoiattolo',
      'cane',
      'scimmia',
      'delfino',
      'canguro',
      'gatto',
      'coniglio',
      'ape',
      'rana',
      'pappagallo',
      'pesce-pagliaccio',
      'farfalla',
      'lucertola',
    ]
  ),
  trait(
    'indipendente',
    'indipendente',
    'Fa tutto da solo.',
    [
      'independent',
      'independiente',
      'indépendant',
      'nezávislý',
      'niezależny',
      'bağımsız',
      'unabhängig',
      '独立心の強い',
    ],
    ['Il gatto è un animale indipendente.', 'Mia figlia è molto indipendente.', 'Voglio una vita indipendente.'],
    'a confident cat walking alone with its tail held high, proud and self-sufficient',
    ['gatto', 'tigre', 'orso', 'volpe', 'aquila', 'gufo', 'ragno', 'serpente', 'tartaruga', 'coccodrillo', 'lucertola']
  ),
  trait(
    'protettivo',
    'protettivo / protettiva',
    'Difende chi ama.',
    ['protective', 'protector', 'protecteur', 'ochranářský', 'opiekuńczy', 'koruyucu', 'beschützend', '守ろうとする'],
    [
      'L’orsa è protettiva con i suoi cuccioli.',
      'Il papà è molto protettivo.',
      'Il cane è protettivo con la famiglia.',
    ],
    'a mother brown bear standing guard protectively over two small cubs',
    ['orso', 'cane', 'elefante', 'leone', 'lupo', 'gallo', 'cigno', 'gorilla', 'canguro', 'pinguino', 'mucca']
  ),
];

/** Le frasi da tradurre; la lingua di partenza e' quella del visitatore (in italiano: l'inglese). */
const tr = (solution, en, es, fr, cs, pl, trk, de, ja) => ({
  solution,
  prompt: { it: en, en, es, fr, cs, pl, tr: trk, de, ja },
});

export const traitTranslationExercises = [
  tr(
    'La formica è molto laboriosa.',
    'The ant is very hard-working.',
    'La hormiga es muy trabajadora.',
    'La fourmi est très travailleuse.',
    'Mravenec je velmi pracovitý.',
    'Mrówka jest bardzo pracowita.',
    'Karınca çok çalışkandır.',
    'Die Ameise ist sehr fleißig.',
    'アリはとても勤勉です。'
  ),
  tr(
    'Il leone è un animale coraggioso.',
    'The lion is a brave animal.',
    'El león es un animal valiente.',
    'Le lion est un animal courageux.',
    'Lev je odvážné zvíře.',
    'Lew jest odważnym zwierzęciem.',
    'Aslan cesur bir hayvandır.',
    'Der Löwe ist ein mutiges Tier.',
    'ライオンは勇敢な動物です。'
  ),
  tr(
    'La lumaca è lenta.',
    'The snail is slow.',
    'El caracol es lento.',
    'L’escargot est lent.',
    'Hlemýžď je pomalý.',
    'Ślimak jest wolny.',
    'Salyangoz yavaştır.',
    'Die Schnecke ist langsam.',
    'カタツムリは遅いです。'
  ),
  tr(
    'Il gufo è un animale saggio.',
    'The owl is a wise animal.',
    'El búho es un animal sabio.',
    'Le hibou est un animal sage.',
    'Sova je moudré zvíře.',
    'Sowa jest mądrym zwierzęciem.',
    'Baykuş bilge bir hayvandır.',
    'Die Eule ist ein weises Tier.',
    'フクロウは賢明な動物です。'
  ),
  tr(
    'Il cane è un amico fedele.',
    'The dog is a loyal friend.',
    'El perro es un amigo fiel.',
    'Le chien est un ami fidèle.',
    'Pes je věrný přítel.',
    'Pies jest wiernym przyjacielem.',
    'Köpek sadık bir arkadaştır.',
    'Der Hund ist ein treuer Freund.',
    '犬は忠実な友だちです。'
  ),
  tr(
    'La giraffa è molto alta.',
    'The giraffe is very tall.',
    'La jirafa es muy alta.',
    'La girafe est très grande.',
    'Žirafa je velmi vysoká.',
    'Żyrafa jest bardzo wysoka.',
    'Zürafa çok uzundur.',
    'Die Giraffe ist sehr groß.',
    'キリンはとても背が高いです。'
  ),
  tr(
    'Il pavone è vanitoso e mostra la coda.',
    'The peacock is vain and shows off its tail.',
    'El pavo real es vanidoso y muestra la cola.',
    'Le paon est vaniteux et montre sa queue.',
    'Páv je ješitný a ukazuje ocas.',
    'Paw jest próżny i pokazuje ogon.',
    'Tavus kuşu kibirlidir ve kuyruğunu gösterir.',
    'Der Pfau ist eitel und zeigt seinen Schwanz.',
    'クジャクはうぬぼれが強く、尾を広げて見せます。'
  ),
  tr(
    'Il gatto è curioso: guarda dappertutto.',
    'The cat is curious: it looks everywhere.',
    'El gato es curioso: mira por todas partes.',
    'Le chat est curieux : il regarde partout.',
    'Kočka je zvědavá: dívá se všude.',
    'Kot jest ciekawski: patrzy wszędzie.',
    'Kedi meraklıdır: her yere bakar.',
    'Die Katze ist neugierig: Sie schaut überall hin.',
    '猫は好奇心旺盛で、どこでも見ます。'
  ),
  tr(
    'Il panda è dolce e tranquillo.',
    'The panda is sweet and calm.',
    'El panda es dulce y tranquilo.',
    'Le panda est doux et calme.',
    'Panda je milá a klidná.',
    'Panda jest słodka i spokojna.',
    'Panda tatlı ve sakindir.',
    'Der Panda ist süß und ruhig.',
    'パンダは優しくて穏やかです。'
  ),
  tr(
    'Il ghepardo è un animale molto veloce.',
    'The cheetah is a very fast animal.',
    'El guepardo es un animal muy rápido.',
    'Le guépard est un animal très rapide.',
    'Gepard je velmi rychlé zvíře.',
    'Gepard jest bardzo szybkim zwierzęciem.',
    'Çita çok hızlı bir hayvandır.',
    'Der Gepard ist ein sehr schnelles Tier.',
    'チーターはとても速い動物です。'
  ),
  tr(
    'Alcuni serpenti sono velenosi.',
    'Some snakes are poisonous.',
    'Algunas serpientes son venenosas.',
    'Certains serpents sont venimeux.',
    'Někteří hadi jsou jedovatí.',
    'Niektóre węże są jadowite.',
    'Bazı yılanlar zehirlidir.',
    'Manche Schlangen sind giftig.',
    '毒を持つヘビもいます。'
  ),
  tr(
    'Il pinguino è goffo sulla terra, ma nuota bene.',
    'The penguin is clumsy on land, but it swims well.',
    'El pingüino es torpe en tierra, pero nada bien.',
    'Le manchot est maladroit sur terre, mais il nage bien.',
    'Tučňák je na souši nemotorný, ale dobře plave.',
    'Pingwin jest niezdarny na lądzie, ale dobrze pływa.',
    'Penguen karada sakardır ama iyi yüzer.',
    'Der Pinguin ist an Land tollpatschig, aber er schwimmt gut.',
    'ペンギンは陸ではぎこちないですが、泳ぎは上手です。'
  ),
];

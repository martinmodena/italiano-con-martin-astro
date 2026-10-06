# Prompt delle immagini: falsi amici italiano-inglese

2026-10-06, stesso stile e stesso modello dei falsi amici spagnoli (`docs/prompt-immagini-falsi-amici.md`):
`openai/gpt-image-1-mini` a qualità `medium`, 1024×1024, `node scripts/try-false-friends.mjs <cartella> --doc docs/prompt-immagini-falsi-amici-en.md`.
Le immagini divise in due hanno la bandiera italiana a sinistra e quella britannica a destra. _Rumore_ riusa la vignetta spagnola.

Stile comune:

```
Funny gentle cartoon vignette for a language-learning website, soft warm watercolour-like illustration with clean shapes, no black outlines, friendly expressions, bright but soft colours, the whole scene small in the centre with wide empty white margins on every side, plain pure white background. No text, no letters, no words, no speech bubbles, no logo, no watermark, no meat.
```

Soggetti:

- **camera** (en. _camera_ = macchina fotografica): a cosy bedroom with a bed, a bedside lamp and a window, and tucked in the bed under the duvet sleeps a giant old-fashioned photo camera with a cute sleepy face
- **parenti** (en. _parents_ = genitori): a big cheerful family gathering with many relatives of all ages, grandparents, aunts, uncles and cousins, and in front of them a little girl hugging only her mum and dad
- **libreria** (en. _library_ = biblioteca): two side-by-side panels separated by a thin vertical gap; left panel with a small Italian flag in its top corner: a bookshop with a shopkeeper at the till selling a book to a smiling customer; right panel with a small British Union Jack flag in its top corner: a quiet public library with long reading tables and students reading borrowed books
- **fattoria** (en. _factory_ = fabbrica): a cheerful cow wearing a hard hat and safety goggles working on a factory assembly line full of boxes on a conveyor belt, with chimneys in the background
- **stampa** (en. _stamp_ = francobollo): a big friendly printing press printing giant colourful postage stamps with flowers on them, the stamps flying out of the machine
- **confetti** (en. _confetti_ = coriandoli): at a wedding, smiling guests throw white sugared almonds over the bride and groom like confetti, the groom laughing and the bride covering her head with her hands
- **magazzino** (en. _magazine_ = rivista): a huge warehouse with tall metal shelves full of cardboard boxes, and a worker on a forklift who has stopped to read a colourful magazine
- **educato** (en. _educated_ = istruito): two side-by-side panels separated by a thin vertical gap; left panel with a small Italian flag in its top corner: a polite boy holding a door open for an old lady and bowing slightly; right panel with a small British Union Jack flag in its top corner: a proud young woman in a graduation gown and cap holding her diploma
- **annoiare** (en. _annoy_ = dare fastidio): a man on a sofa yawning, bored in front of a dull television, while a buzzing fly circles around his head and he swats at it, irritated
- **pretendere** (en. _pretend_ = fingere): two side-by-side panels separated by a thin vertical gap; left panel with a small Italian flag in its top corner: an angry customer at a shop counter pointing at a broken kettle and demanding his money back; right panel with a small British Union Jack flag in its top corner: two children pretending to be pirates with cardboard hats and wooden swords
- **estate** (en. _estate_ = tenuta): a grand country estate with a big villa, vineyards and cypress trees under a blazing summer sun, and in the front a family sunbathing under a beach umbrella on the lawn
- **pavimento** (en. _pavement_ = marciapiede): a man in slippers and an apron mopping the pavement of a city street with a mop and bucket, as if it were his kitchen floor, while passers-by look at him surprised
- **cantina** (en. _canteen_ = mensa): a wine cellar with big wooden barrels and bottle racks where office workers sit at a long table eating lunch from trays, like in a company canteen
- **bravo** (en. _brave_ = coraggioso): two side-by-side panels separated by a thin vertical gap; left panel with a small Italian flag in its top corner: a little girl playing the violin very well while the audience claps; right panel with a small British Union Jack flag in its top corner: a firefighter bravely carrying a kitten down a ladder
- **caldo** (en. _cold_ = freddo): a shivering man in a woolly hat and scarf standing in front of a sink, turning on the tap that has a red dot, and steaming hot water comes out, surprising him
- **fame** (en. _fame_ = fama): a famous male film star in a tuxedo on a red carpet, photographers flashing their cameras all around him, but he is very hungry and secretly takes a huge bite of a slice of plain pizza margherita with only red tomato sauce, white mozzarella and green basil leaves and no other toppings
- **casino** (en. _casino_ = casinò): a very messy living room with playing cards, roulette chips, dice and clothes scattered everywhere, and a mother standing in the doorway with her hands on her hips
- **morbido** (en. _morbid_ = macabro): a fluffy kitten sinking happily into a very soft pillow, next to a spooky plastic Halloween skeleton that looks at it surprised
- **argomento** (en. _argument_ = litigio): two side-by-side panels separated by a thin vertical gap; left panel with a small Italian flag in its top corner: a teacher pointing at a simple drawing of a planet on a blackboard while students listen; right panel with a small British Union Jack flag in its top corner: two neighbours arguing angrily over a garden fence
- **sensibile** (en. _sensible_ = sensato): two side-by-side panels separated by a thin vertical gap; left panel with a small Italian flag in its top corner: a man moved to tears watching a sad film with a box of tissues; right panel with a small British Union Jack flag in its top corner: a sensible woman in a raincoat and wellies with an umbrella walking calmly in the rain

Seconda versione di _fame_: nella prima la diva con la mano sulla pancia sembrava incinta e il panino sembrava un hamburger.
Terza versione: nella seconda la pizza aveva il salame piccante; ora il prompt chiede una margherita con solo pomodoro, mozzarella e basilico.

# Immagini delle lezioni di vocabolario del 2026-09-26/27

Come rifare tutte le immagini di queste lezioni: «I mestieri», «Le persone intorno a noi», «I verbi delle relazioni», «Il tempo e le stagioni», «La casa», «I verbi della casa», «La città», «La montagna», «I verbi della città», «Le emozioni».

## 1. Testate (copertine)

Modello di qualità `google/gemini-3-pro-image` (circa $0,13 l'una), una per lezione. Comando:

```bash
node scripts/generate-image.mjs --slug vocabolario/<nome>-hero --hero-width 1280 --hero-height 853 \
  --aspect-ratio 3:2 --no-card --prompt "<SCENA> <FINE>"
```

`<FINE>` è uguale per tutte:

```
Warm natural daylight, bright and inviting, true-to-life colours, skin and anatomy, candid and joyful, like a high-quality editorial photograph. No text, no letters, no logos, no signs with words, no meat, no fish. 3:2 landscape composition.
```

Le `<SCENA>`:

### `mestieri-hero`

```
A bright, natural, photorealistic photograph of six smiling workers of different ages standing together in a sunny Italian street, each clearly recognisable by clothes and tools: a chef in a white jacket holding a basket of fresh vegetables, a doctor with a stethoscope, a firefighter with a helmet, a mechanic in blue overalls with a wrench, a farmer in a straw hat, a teacher holding books. Full bodies visible, men and women.
```

### `persone-hero`

```
A bright, natural, photorealistic photograph of a lively sunny Italian town square full of ordinary people of all ages: grandparents on a bench, children playing, a young couple holding hands, a group of friends chatting, neighbours greeting each other, a tourist with a map.
```

### `verbi-relazioni-hero`

```
A bright, natural, photorealistic photograph of a warm family and friends garden party in the Italian countryside: a couple embracing, grandparents hugging their grandchildren, two friends shaking hands, a child giving a wrapped present to her mother, people laughing together around a long table with fruit and bread.
```

### `tempo-stagioni-hero`

```
A bright, photorealistic landscape photograph of the same Italian hillside with a single tree seen through the four seasons, divided into four vertical parts that blend softly into each other from left to right: spring with blossoms and a light rain shower, summer with blazing sun and golden fields, autumn with red and orange leaves and fog, winter with snow and a snowman. A rainbow arches across the sky.
```

### `casa-hero`

```
A bright, natural, photorealistic photograph of a cosy, tidy Italian apartment: an open living room with a sofa, a rug, a bookcase and plants, and through a wide doorway a kitchen and a glimpse of a bedroom, a balcony with geraniums, afternoon sunlight through the windows. No people.
```

### `verbi-casa-hero`

```
A bright, natural, photorealistic photograph of a family doing housework together in a sunny Italian home: a father cooking vegetables at the stove, a girl setting the table, a mother hanging washing on a drying rack on the balcony, a teenage boy vacuuming the rug, a grandmother watering plants. Full bodies visible.
```

### `citta-hero`

```
A bright, natural, photorealistic photograph of a sunny historic Italian city street opening onto a square: an orange tram, people on bicycles and scooters, pedestrians on a zebra crossing, café tables outside a bar, a fruit and vegetable market stall, shop windows, a church bell tower and a fountain.
```

### `montagna-hero`

```
A bright, natural, photorealistic photograph of the Italian Dolomites in summer: jagged peaks, a green alpine meadow with wild flowers, a wooden mountain hut, a turquoise lake, fir woods, and two hikers with backpacks and hiking poles walking along a trail.
```

### `verbi-citta-hero`

```
A bright, natural, photorealistic photograph of everyday life in a busy sunny Italian street: people crossing on a zebra crossing, a woman getting on an orange bus, a man paying with a card at a fruit and vegetable market stall, tourists taking photos, a cyclist, friends meeting with a hug outside a café.
```

(Il modello ne ha fatto un mosaico di sei riquadri: è piaciuto e resta così.)

### `emozioni-hero`

```
A bright, natural, photorealistic photograph of a group of five friends of different ages at an outdoor café table reacting to news, each showing a different clear emotion: one laughing happily, one surprised with hands on her cheeks, one hugging a friend with joy, one thoughtful and a little worried, one moved with tears of happiness. Faces clearly visible.
```

### `scuola-hero`

```
A bright, natural, photorealistic photograph of a sunny classroom in an Italian primary school: children of about eight sitting at wooden desks, several of them eagerly raising their hands, a smiling young teacher standing at a green chalkboard, a world globe on her desk, colourful pencil cases and exercise books on the desks, children's colourful drawings on the walls, big windows with sunlight.
```

### `ufficio-hero`

Ha sostituito l'illustrazione della prima versione della lezione (8 parole).

```
A bright, natural, photorealistic photograph of a modern open-plan office in an Italian city: colleagues of different ages working at light wooden desks with computers and plants, a small group having a relaxed meeting around a table with a laptop, two colleagues chatting and laughing with small espresso cups next to a coffee machine, big windows showing terracotta rooftops and a bell tower.
```

### `verbi-scuola-hero`

```
A bright, natural, photorealistic photo mosaic of six equal panels in a 3 by 2 grid separated by thin white lines, each showing one school action clearly: a smiling girl in a classroom eagerly raising her hand, a teenage boy taking notes in a notebook, a teacher explaining at a green chalkboard, two students in safety glasses doing an experiment with test tubes, a small boy drawing with coloured pencils, a young woman wearing a laurel wreath celebrating her university graduation with flowers.
```

### `verbi-ufficio-hero`

```
A bright, natural, photorealistic photo mosaic of six equal panels in a 3 by 2 grid separated by thin white lines, each showing one office action clearly: a woman typing on a computer keyboard, a man signing a contract with a pen, colleagues in a meeting around a table, a manager shaking hands with a happy new employee, a man with a headset on a video call on his laptop, two colleagues laughing during a coffee break with espresso cups.
```

### `verbi-montagna-hero`

```
A bright, natural, photorealistic photo mosaic of six equal panels in a 3 by 2 grid separated by thin white lines, each showing one mountain activity clearly: two hikers with backpacks walking on a trail in the Italian Dolomites, a woman with a helmet climbing a rock face, a green tent being put up on an alpine meadow, friends sitting around a campfire at dusk, a skier carving down a sunny snowy slope, two laughing children sledging down a snowy hill.
```

### `verbi-sport-hero` (2026-09-28)

```
A bright, natural, photorealistic photo mosaic of six equal panels in a 3 by 2 grid separated by thin white lines, each showing one sports action clearly: a goalkeeper in gloves diving to catch a football in front of the goal, a young woman volleyball player jumping and spiking the ball over the net, a woman doing yoga in the tree pose on a mat in a sunny park, a runner breaking the finish tape with his arms raised, happy fans in a stadium stand cheering with a striped scarf, a smiling girl with a riding helmet riding a brown horse in a field. Clothes and equipment without any brand logo, no text.
```

Le testate delle due lezioni sul corpo, rifatte lo stesso giorno, sono in [prompt-immagini-corpo.md](./prompt-immagini-corpo.md).

Dopo aver cambiato una testata va aggiornato `heroAlt` nel file `scripts/data/<lezione>-pages.mjs`, nelle 9 lingue, **e** l'`alt` della tessera negli indici del vocabolario. Se la lezione esiste già, il generatore non tocca gli indici.

### `sport-hero`

Rifatta il 2026-09-28 con `gemini-3-pro-image` ($0,13) al posto del collage provvisorio del 2026-09-27 (`build-collage-hero.mjs --subdir sport --slugs calcio,nuoto,ciclismo,ginnastica,tennis,equitazione,scherma,yoga`). Il nastro del traguardo ha la scritta «FINISH»: lasciata così.

```
A bright, natural, photorealistic photograph of a sunny Sunday morning at a public sports park in an Italian town: in the foreground a mixed group of young amateur players in plain colourful kits cheering after a goal on a green football pitch, a ball in the net; behind them people jogging on a red running track, a woman crossing a finish ribbon with her arms up, two people playing tennis, a family with bicycles and helmets, spectators with scarves on a small grandstand; terracotta rooftops and a bell tower in the distance, no brand logos, no text.
```

## 2. Foto delle parole

Il prompt di ogni parola è il campo `subject` della voce nel file dati. Lo stile comune (fondo bianco, niente testo, niente carne…) è in `scripts/generate-animal-images.mjs`. Modello `gpt-image-1-mini`, qualità `low` salvo dove indicato.

| Lezione                  | File dati                              | `--set`          | Stile           |
| ------------------------ | -------------------------------------- | ---------------- | --------------- |
| I mestieri               | `scripts/data/jobs-vocabulary.mjs`     | `mestieri`       | `JOB_STYLE`     |
| Le persone intorno a noi | `scripts/data/people-vocabulary.mjs`   | `persone`        | `PEOPLE_STYLE`  |
| I verbi delle relazioni  | `scripts/data/relations-verbs.mjs`     | `relazioni`      | `PEOPLE_STYLE`  |
| Il tempo e le stagioni   | `scripts/data/weather-vocabulary.mjs`  | `tempo`          | `WEATHER_STYLE` |
| La casa                  | `scripts/data/house-vocabulary.mjs`    | `casa`           | `HOUSE_STYLE`   |
| I verbi della casa       | `scripts/data/house-verbs.mjs`         | `verbi-casa`     | `PEOPLE_STYLE`  |
| La città                 | `scripts/data/city-vocabulary.mjs`     | `citta`          | `CITY_STYLE`    |
| La montagna              | `scripts/data/mountain-vocabulary.mjs` | `montagna`       | `WEATHER_STYLE` |
| I verbi della città      | `scripts/data/city-verbs.mjs`          | `verbi-citta`    | `PEOPLE_STYLE`  |
| Le emozioni              | `scripts/data/emotions-vocabulary.mjs` | `emozioni`       | `EMOTION_STYLE` |
| La scuola                | `scripts/data/school-vocabulary.mjs`   | `scuola`         | `SCHOOL_STYLE`  |
| L'ufficio                | `scripts/data/office-vocabulary.mjs`   | `ufficio`        | `OFFICE_STYLE`  |
| I verbi della scuola     | `scripts/data/school-verbs.mjs`        | `verbi-scuola`   | `PEOPLE_STYLE`  |
| I verbi dell'ufficio     | `scripts/data/office-verbs.mjs`        | `verbi-ufficio`  | `PEOPLE_STYLE`  |
| I verbi della montagna   | `scripts/data/mountain-verbs.mjs`      | `verbi-montagna` | `PEOPLE_STYLE`  |
| Lo sport                 | `scripts/data/sport-vocabulary.mjs`    | `sport`          | `SPORT_STYLE`   |
| I verbi dello sport      | `scripts/data/sport-verbs.mjs`         | `verbi-sport`    | `PEOPLE_STYLE`  |

Procedura completa per una lezione:

```bash
node scripts/generate-animal-images.mjs --set <set> --out-dir <grezze>
python scripts/round-mask.py <grezze> <slug,...>            # solo se serve, vedi sotto
python scripts/remove-white-background.py <grezze> <pulite> --whiten=<tutti gli slug>
node scripts/convert-vocabulary-images.mjs <pulite> --subdir <set>
```

In queste lezioni tutte le foto sono passate con `--whiten`.

### Ritocchi fatti a mano dopo la generazione

- **Maschera rotonda** (`scripts/round-mask.py`, raggio 0.44), per la sfumatura scura ai bordi:
  - `citta`: bar, biblioteca, cinema, metropolitana, museo, parcheggio, parco, ponte, scuola, strada, supermercato, ufficio-postale, ristorante;
  - `montagna`: bussola;
  - `verbi-citta`: andare-dritto, con raggio 0.46.
- **Foto rifatte più volte o a qualità più alta**:
  - `citta`: 34 foto rifatte a `low` dopo aver aggiunto a `CITY_STYLE` la frase sul fondo bianco; 16 rifatte a `medium` (banca, bar, biblioteca, cinema, fermata, metropolitana, museo, ospedale, parcheggio, parco, ponte, scuola, strada, supermercato, ufficio-postale, ristorante). Rigenerandole oggi con i prompt attuali basta `low` più la maschera.
  - Rifatte una volta per un difetto del soggetto, già corretto nel campo `subject`: `verbi-casa` asciugare e riempire, `montagna` rifugio, `verbi-citta` parcheggiare.
  - `verbi-scuola` essere-bocciato: il primo prompt (un ragazzino triste sui gradini della scuola) è stato **rifiutato dal filtro di sicurezza** di OpenAI; con uno studente universitario adulto è passato.
  - Rifatte a qualità `medium` con il soggetto riscritto (le prime erano poco chiare): `verbi-scuola` misurare, imparare-a-memoria, copiare; `verbi-ufficio` fare-gli-straordinari (la scena notturna si slavava con `--whiten`: ora c'è un orologio a muro sulle dieci), fare-un-colloquio, dimettersi (c'era un finto testo).
  - `verbi-montagna`: guardare-le-stelle, nevicare, pattinare e rinfrescarsi rifatte a `medium` come **foto rotonde** (il cielo notturno e la neve sparivano nel fondo bianco; sul ghiaccio non si vedevano i pattini): nel `subject` c'è ora «a photograph cropped into a perfect circle».
  - `scuola` righello: il primo era trasparente e spariva sul bianco; rifatto di legno, poi a qualità `medium` (`--only righello --quality medium`, $0,009) perché a `low` i segni erano pasticciati.
  - `sport`: il 2026-09-27 le prime 18 foto (gli sport, lo stadio, il campo), poi i crediti di OpenRouter sono finiti; il 2026-09-28 le altre 27 ($0,07). Tutte con `--whiten`, nessun ritocco. `arbitro` è stata **rifiutata dal filtro di sicurezza** con «a whistle in his mouth»; con il fischietto appeso al collo è passata. Attenzione: `--set sport` salta le foto già presenti in `public/`, non quelle già nella cartella `--out-dir`: rilanciandolo per una sola foto fallita le rifà tutte (meglio `--only <slug>`).
  - `verbi-sport` (2026-09-28): 37 foto `low` ($0,10), tutte con `--whiten`; remare e fare-surf chieste subito come foto rotonde (l'acqua sparirebbe nel bianco). Rifatte a `medium` con il soggetto riscritto ($0,02): fare-una-capriola (la prima era una verticale con due adulti che guardavano) e tagliare-il-traguardo (c'era la scritta «FINISH» per terra: ora un arco di palloncini e «no letters and no words anywhere»).

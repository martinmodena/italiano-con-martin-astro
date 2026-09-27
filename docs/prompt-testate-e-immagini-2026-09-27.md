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

Dopo aver cambiato una testata va aggiornato `heroAlt` nel file `scripts/data/<lezione>-pages.mjs`, nelle 9 lingue, **e** l'`alt` della tessera negli indici del vocabolario. Se la lezione esiste già, il generatore non tocca gli indici.

## 2. Foto delle parole

Il prompt di ogni parola è il campo `subject` della voce nel file dati. Lo stile comune (fondo bianco, niente testo, niente carne…) è in `scripts/generate-animal-images.mjs`. Modello `gpt-image-1-mini`, qualità `low` salvo dove indicato.

| Lezione                  | File dati                              | `--set`       | Stile           |
| ------------------------ | -------------------------------------- | ------------- | --------------- |
| I mestieri               | `scripts/data/jobs-vocabulary.mjs`     | `mestieri`    | `JOB_STYLE`     |
| Le persone intorno a noi | `scripts/data/people-vocabulary.mjs`   | `persone`     | `PEOPLE_STYLE`  |
| I verbi delle relazioni  | `scripts/data/relations-verbs.mjs`     | `relazioni`   | `PEOPLE_STYLE`  |
| Il tempo e le stagioni   | `scripts/data/weather-vocabulary.mjs`  | `tempo`       | `WEATHER_STYLE` |
| La casa                  | `scripts/data/house-vocabulary.mjs`    | `casa`        | `HOUSE_STYLE`   |
| I verbi della casa       | `scripts/data/house-verbs.mjs`         | `verbi-casa`  | `PEOPLE_STYLE`  |
| La città                 | `scripts/data/city-vocabulary.mjs`     | `citta`       | `CITY_STYLE`    |
| La montagna              | `scripts/data/mountain-vocabulary.mjs` | `montagna`    | `WEATHER_STYLE` |
| I verbi della città      | `scripts/data/city-verbs.mjs`          | `verbi-citta` | `PEOPLE_STYLE`  |
| Le emozioni              | `scripts/data/emotions-vocabulary.mjs` | `emozioni`    | `EMOTION_STYLE` |

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

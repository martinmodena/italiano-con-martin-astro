# Immagini della serie «Emma in Italia»

Testate dei racconti A1 della serie (decisione 2026-09-29). Generate con
`scripts/generate-image.mjs` via OpenRouter, modello `google/gemini-3-pro-image`
(circa $0,13 l'una), formato 16:9: figura 960×540 e tessera 640×360 in `public/assets/`.

Emma deve essere riconoscibile in tutte le testate: per questo ogni prompt ripete
la stessa descrizione del personaggio e lo stesso stile. Vincoli di sempre: niente
testo nell'immagine, niente carne né pesce (regola del 2026-09-07), niente persone reali.

Comando usato per ogni immagine (N = numero del blocco qui sotto):

```
node scripts/generate-image.mjs --slug <slug> --prompt "<blocco N>"
```

## 1. `reading-storia-caffe-italia` — episodio 1, «Al bar in Italia» (sostituisce la vecchia testata seppia)

```
Soft painterly gouache illustration, warm natural morning light, gentle colors, no black outlines, cinematic 16:9. Emma, a friendly young woman in her late twenties with shoulder-length wavy auburn hair, light freckles and round tortoiseshell glasses, wearing a mustard-yellow cardigan over a white t-shirt and a small dark-green backpack, stands at the zinc counter of a busy traditional Roman coffee bar, looking surprised at a tall glass of cold white milk that the smiling barista in a white shirt has just placed in front of her. On the counter: small espresso cups, a cappuccino, a plate of croissants. Behind the barista, a chrome espresso machine and shelves of bottles. Friendly, humorous, everyday Italian atmosphere. No text, no words, no letters, no logos, no meat, no fish.
```

## 2. `reading-emma-treno` — «Il biglietto del treno»

```
Soft painterly gouache illustration, warm natural morning light, gentle colors, no black outlines, cinematic 16:9. Emma, a friendly young woman in her late twenties with shoulder-length wavy auburn hair, light freckles and round tortoiseshell glasses, wearing a mustard-yellow cardigan over a white t-shirt and a small dark-green backpack, inserts a small paper train ticket into a green and white ticket validating machine on the platform of an Italian railway station. Beside her, a kind elderly man with a grey moustache and a small dog on a leash points at the machine, smiling. In the background a red and white Italian regional train waits at the platform under a metal canopy. No text, no words, no letters, no numbers, no logos.
```

## 3. `reading-emma-mercato` — «Al mercato»

```
Soft painterly gouache illustration, warm natural morning light, gentle colors, no black outlines, cinematic 16:9. Emma, a friendly young woman in her late twenties with shoulder-length wavy auburn hair, light freckles and round tortoiseshell glasses, wearing a mustard-yellow cardigan over a white t-shirt and a small dark-green backpack, stands at a colorful fruit and vegetable stall in an Italian open-air market in Florence, blushing and holding one red strawberry, while a cheerful greengrocer with an apron raises his hand as if to say "no touching". Crates of strawberries, red tomatoes, oranges, pears, green basil bunches. Old stone buildings in the background. No text, no words, no letters, no price tags, no logos, no meat, no fish.
```

## 4. `reading-emma-chiuso` — «Chiuso per pranzo»

```
Soft painterly gouache illustration, warm early afternoon sunlight, gentle colors, no black outlines, cinematic 16:9. Emma, a friendly young woman in her late twenties with shoulder-length wavy auburn hair, light freckles and round tortoiseshell glasses, wearing a mustard-yellow cardigan over a white t-shirt and a small dark-green backpack, stands puzzled in front of the closed wooden door of a small hand-painted ceramics shop in an empty medieval stone square of a Tuscan village, looking at her wristwatch. Colorful painted ceramic plates and cups in the shop window. Across the square, a lively trattoria with people eating at outdoor tables under a vine. No text, no words, no letters, no numbers, no signs with writing, no logos, no meat, no fish.
```

## 5. `reading-emma-farmacia` — «Mal di gola di domenica»

```
Soft painterly gouache illustration, soft Sunday morning light, gentle colors, no black outlines, cinematic 16:9. Emma, a friendly young woman in her late twenties with shoulder-length wavy auburn hair, light freckles and round tortoiseshell glasses, wearing a mustard-yellow cardigan over a white t-shirt, a warm scarf around her neck and a small dark-green backpack, walks towards an Italian pharmacy in a quiet old city street, holding a tissue, with a glowing green cross sign above the pharmacy entrance. Closed shutters on the other shops, a few pigeons, calm Sunday atmosphere. No text, no words, no letters, no logos.
```

## 6. `reading-emma-nonna` — «Il pranzo della nonna»

```
Soft painterly gouache illustration, warm golden midday light, gentle colors, no black outlines, cinematic 16:9. Emma, a friendly young woman in her late twenties with shoulder-length wavy auburn hair, light freckles and round tortoiseshell glasses, wearing a mustard-yellow cardigan over a white t-shirt, sits at a long family table in a cozy Italian home kitchen, looking amazed and full, while a small smiling Italian grandmother with white hair and an apron proudly brings a large baking dish of eggplant parmigiana to the table. Other family members laugh around the table: a young woman friend, an old grandfather, a couple. On the table: plates of homemade tagliatelle with tomato sauce, bread, a bowl of green salad, a water jug. Family photos on the wall. No text, no words, no letters, no logos, no meat, no fish.
```

## 7. `reading-emma-cena` — «Cena alle otto»

```
Soft painterly gouache illustration, warm evening light, gentle colors, no black outlines, cinematic 16:9. Emma, a friendly young woman in her late twenties with shoulder-length wavy auburn hair, light freckles and round tortoiseshell glasses, wearing a mustard-yellow cardigan over a white t-shirt, stands at the open door of an Italian apartment in the evening, holding a big bouquet of sunflowers, while her surprised host, a young man with wet hair and an old t-shirt, opens the door with a towel around his neck. Behind him an empty cozy kitchen with a set table and a pot on the stove. No text, no words, no letters, no logos, no meat, no fish.
```

## 8. `reading-emma-bagno` — «Il lavandino misterioso» (2026-10-09, primo tentativo, $0,13)

```
Soft painterly gouache illustration, soft warm morning light, gentle colors, no black outlines, cinematic 16:9. Emma, a friendly young woman in her late twenties with shoulder-length wavy auburn hair, light freckles and round tortoiseshell glasses, wearing modest loose long-sleeved light-blue cotton pyjamas, fully clothed, stands in a small bright Italian bathroom holding a toothbrush, tilting her head and looking curiously and puzzled at a white bidet with a small chrome tap, mounted on the wall beside the washbasin. Pale ceramic tiles, a small window with a terracotta rooftop view outside, a towel on a hook, a plant on the windowsill. Gentle humorous everyday atmosphere, tasteful and family-friendly. One person only. No text, no words, no letters, no logos.
```

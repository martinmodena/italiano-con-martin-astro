# Prompt delle immagini: favole straniere (2026-10-30)

Favole conosciute nei Paesi degli studenti, tradotte in italiano e messe in cima all'indice
delle favole della loro lingua (idea di Martin del 2026-10-30). Dati in
`scripts/data/storie-it.mjs` e `storie-i18n.mjs`, generatore `scripts/create-science-stories.mjs`.
Modello `google/gemini-3-pro-image`, 16:9: figura 960×540 e tessera 640×360 in `public/assets/`.
Vincoli di sempre: niente testo nell'immagine, niente cibo né carne, persone vestite in modo
sobrio, niente persone reali, niente magia.

```
node scripts/generate-image.mjs --slug <slug> --prompt "<blocco>"   (con --prompt-file lo script prende il PRIMO blocco del file, cioè questo comando)
```

## 1. `story-pentola-nasreddin` — «La pentola che ha partorito» (Nasreddin Hoca, Turchia)

Stile delle altre favole (illustrazione calda da libro di fiabe): il momento in cui Nasreddin
restituisce la pentola grande con dentro quella piccola e il vicino lo guarda stupito.

```
Cinematic 16:9 storybook illustration, warm detailed painterly style like a classic illustrated folk tale book, soft golden afternoon light, no black outlines. The sunny courtyard of an old Anatolian village house with whitewashed stone walls, a wooden door, a fig tree and pots of geraniums. On the left, a cheerful elderly man with a short white beard, a large white turban and a long simple brown robe holds out, with a mischievous smile, a big shiny copper cooking pot; inside it sits a small identical copper pot, like a baby pot. On the right, his neighbour, a middle-aged man in a simple long-sleeved shirt, waistcoat and cap, leans forward with wide surprised eyes and a delighted smile. A grey donkey peeks in from the side of the courtyard. Humorous, gentle, folk-tale atmosphere. Rich detail, soft depth of field. No text, no words, no letters, no numbers, no logos, no food.
```

## 2. `story-mantello-nasreddin` — «Mangia, mantello mio!» (Ye kürküm ye, Nasreddin Hoca, Turchia)

Il momento in cui Nasreddin, con il mantello elegante, avvicina la manica alla scodella e gli
ospiti lo guardano stupiti. Nella versione turca è una pelliccia: qui un mantello di stoffa
ricamato, per rispetto dei lettori vegani. Niente cibo visibile: la scodella è coperta.

```
Cinematic 16:9 storybook illustration, warm detailed painterly style like a classic illustrated folk tale book, warm evening lantern light, no black outlines. A festive courtyard of a wealthy old Anatolian house with carpets, cushions, hanging lanterns and arches. In the centre, a cheerful elderly man with a short white beard and a large white turban, wearing a splendid long red cloth coat embroidered with gold (no fur), sits on a cushion and politely holds the end of his wide sleeve over a large covered copper bowl, with a playful, wise smile, as if offering it a meal. Around him, well-dressed guests in modest long traditional clothes stare at him in astonishment, one with his mouth open, the host in an elegant waistcoat raising his hands in surprise. Humorous, gentle, folk-tale atmosphere. Rich detail, soft depth of field. No text, no words, no letters, no numbers, no logos, no visible food.
```

## 3. `story-topolina-giappone` — «Il matrimonio della topolina» (ねずみの嫁入り, Giappone)

Papà e mamma topo con la figlia davanti al vecchio muro di terra, con il sole e la nuvola in
cielo: il viaggio per trovare lo sposo «più forte del mondo».

```
Cinematic 16:9 storybook illustration, warm detailed painterly style like a classic illustrated Japanese folk tale book, soft watercolour textures, gentle morning light, no black outlines. A traditional Japanese countryside scene: an old earthen wall with a wooden roof and a small round hole at its base, a thatched farmhouse and rice fields in the background, a big friendly sun and a fluffy white cloud in a pale blue sky, a soft breeze bending the grasses. In the foreground a small family of grey mice dressed in simple Japanese kimono: a father mouse and a mother mouse proudly presenting their pretty young daughter in a pink kimono with a flower in her hair; from the hole in the wall a shy young mouse in a plain blue kimono peeks out and smiles at her. Gentle, humorous, heart-warming atmosphere. Rich detail, soft depth of field. No text, no words, no letters, no numbers, no logos, no food.
```

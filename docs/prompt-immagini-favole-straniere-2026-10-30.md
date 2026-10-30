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

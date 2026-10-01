# Prompt delle immagini: «Il brutto anatroccolo» e «La biblioteca nell’androne» (2026-10-01)

Due storie nuove generate con `scripts/create-science-stories.mjs` (dati in
`scripts/data/storie-it.mjs` e `storie-i18n.mjs`). Modello `google/gemini-3-pro-image`
(circa $0,13 l’una), formato 16:9: figura 960×540 e tessera 640×360 in `public/assets/`.
Vincoli di sempre: niente testo nell’immagine, niente cibo, niente persone reali.

Comando usato per ogni immagine:

```
node scripts/generate-image.mjs --slug <slug> --prompt "<blocco>"
```

## 1. `story-brutto-anatroccolo` — la fiaba

Stile delle altre favole (illustrazione calda da libro di fiabe, colline con cipressi):
il momento del riflesso, con i tre cigni e, sulla riva, la famiglia di anatre.

```
Cinematic 16:9 storybook illustration, warm detailed painterly style like a classic illustrated fairy tale book, soft golden spring morning light, no black outlines. A calm pond in a lush spring garden with blossoming trees, reeds and wildflowers, Tuscan-like hills and cypresses far in the background. In the foreground a young swan with fresh white feathers and a few last grey downy feathers on its back, neck bent shyly, looks down in surprise at its own clear reflection in the still water: the reflection shows a beautiful white swan. A little further away, three elegant adult white swans glide towards it in a welcoming way. On the grassy bank, half hidden, a small group of yellow ducklings and a mother duck watch, surprised. Gentle, hopeful, emotional atmosphere. Rich detail, soft depth of field. No text, no words, no letters, no numbers, no logos, no people, no food.
```

## 2. `reading-biblioteca-condominio` — la biblioteca nell’androne

La scena finale del livello B1: il giovedì pomeriggio Marco e Sara leggono ad alta voce
al signor Bruno, la signora Ferri con il cuscino «fa finta di non commuoversi», Chiara
sulla porta.

```
Cinematic 16:9 illustration, photorealistic with a soft painterly finish, warm late afternoon light, no black outlines. The entrance hall of an old Italian apartment building in Bologna: terrazzo floor, a stone staircase with a wrought-iron railing, a row of metal mailboxes on the wall, a tall arched wooden front door ajar with warm light outside. Against the wall, a simple old wooden bookshelf now full of colourful used books. An elderly man of about 85 in a beige cardigan and glasses, sitting on a wooden chair next to the shelf, smiles with his eyes closed while listening; a boy and a girl of about 13 sit on the bottom steps of the staircase, the girl reading aloud from an open book. A woman in her late sixties with grey hair, holding a small cushion, stands on the stairs pretending not to be moved, and a young woman in her thirties leans on the doorframe smiling. Cosy, tender, everyday atmosphere. All book spines and covers plain, without any writing. No text, no words, no letters, no numbers, no logos, no signs, no food.
```

Entrambe riuscite al primo tentativo, nessun ritocco.

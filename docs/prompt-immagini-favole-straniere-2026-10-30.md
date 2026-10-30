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

## 4. `story-paglia-giappone` — «Il milionario della paglia» (わらしべ長者, Giappone)

Il primo scambio: il ragazzo povero con la pagliuzza e l'insetto legato in cima, il bambino che
la vuole e la mamma che gli offre qualcosa in cambio. Raccontata senza la dea dell'originale.

```
Cinematic 16:9 storybook illustration, warm detailed painterly style like a classic illustrated Japanese folk tale book, soft watercolour textures, warm late-morning light, no black outlines. A dusty country road in old rural Japan, with rice fields, a wooden bridge, a thatched farmhouse and gentle mountains in the background. A poor but cheerful young man in a simple patched indigo kimono and straw sandals holds up a single long golden rice straw with a tiny buzzing fly tied to its tip by a thin thread. A small boy in a simple kimono points at the straw with delight, pulling the sleeve of his mother, a kind woman in a modest travelling kimono who holds out a small wrapped cloth bundle to the young man as a gift in exchange. A brown horse grazes in the distance. Gentle, hopeful, humorous atmosphere. Rich detail, soft depth of field. No text, no words, no letters, no numbers, no logos, no food.
```

## 5. `story-uccellini-gabbia` — «Gli uccellini in gabbia» (Ptaszki w klatce, Ignacy Krasicki, Polonia)

I due lucherini nella gabbia davanti alla finestra aperta: il giovane allegro, il vecchio che guarda fuori.

```
Cinematic 16:9 storybook illustration, warm detailed painterly style like a classic illustrated fable book, soft early morning light, no black outlines. An old wooden cage hangs by an open window of a Polish country manor house; beyond the window lie green meadows, birch trees and a wide bright sky with distant birds flying. Inside the cage two small yellow-green siskins sit on a perch: a young one, plump and cheerful, turned towards the room and singing; an old one with faded feathers, turned towards the open window, gazing sadly at the sky. Gentle, thoughtful, melancholy atmosphere. Rich detail, soft depth of field. No text, no words, no letters, no numbers, no logos, no people, no food.
```

## 6. `story-bue-ministro` — «Il bue ministro» (Wół minister, Ignacy Krasicki, Polonia)

La corte degli animali: il leone re sul trono, la scimmia che fa il buffone, il bue paziente con le carte.

```
Cinematic 16:9 storybook illustration, warm detailed painterly style like a classic illustrated fable book, warm candlelight, no black outlines. The throne room of an eighteenth-century Polish palace with tall windows and red curtains, populated only by animals. A majestic lion king with a small crown sits on the throne laughing, while a playful monkey in a colourful court jacket dances and juggles in front of him, sending papers flying. To the side a sly fox in a green coat watches, and a big calm ox in a plain dark minister's coat waits patiently by the door, holding a neat pile of documents. Humorous, satirical, gentle folk-tale atmosphere. Rich detail, soft depth of field. No text, no words, no letters, no numbers, no logos, no people, no food.
```

## 7. `story-grande-rapa` — «La grande rapa» (O veliké řepě, Repubblica Ceca)

La catena che tira: nonno, nonna, nipotina, cane, gatto e topolino.

```
Cinematic 16:9 storybook illustration, warm detailed painterly style like a classic illustrated Czech fairy tale book, soft golden late-summer light, no black outlines. A small vegetable garden beside a Czech village cottage with a red-tiled roof, a wooden fence and rolling fields behind. A long funny line of characters pulls together: an old grandfather with a white moustache in a modest shirt and waistcoat grips the leaves of a gigantic white and purple turnip half out of the ground; behind him an old grandmother in a long dress, apron and headscarf holds his waist; behind her a little girl in a long-sleeved dress; then a brown dog, a tabby cat and at the very end a tiny grey mouse, all straining with effort. Cheerful, humorous, warm atmosphere. Rich detail, soft depth of field. No text, no words, no letters, no numbers, no logos.
```

## 8. `story-galletto-gallina` — «Il galletto e la gallina» (O kohoutkovi a slepičce, Repubblica Ceca)

La gallina corre verso la sorgente mentre il galletto, sdraiato, aspetta: la corsa per salvarlo.

```
Cinematic 16:9 storybook illustration, warm detailed painterly style like a classic illustrated Czech fairy tale book, fresh early morning light with dew sparkling on the grass, no black outlines. A Czech countryside meadow with a small stone spring in the foreground, a wooden fence, a village with a little church on the hill. A brown hen hurries anxiously across the grass towards the spring, wings spread. In the background a small colourful rooster lies on his side on a heap of straw, weakly raising his head, in an unmistakably comic and gentle way, not hurt. A pink pig and a brown cow watch from behind the fence. Tender, lively, humorous atmosphere. Rich detail, soft depth of field. No text, no words, no letters, no numbers, no logos, no people, no food.
```

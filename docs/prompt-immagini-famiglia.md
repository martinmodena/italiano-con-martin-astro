# Immagini della lezione «La famiglia»

Lezione di vocabolario del 2026-09-26. Le immagini **non sono foto**: sono i 17 personaggi della **famiglia Rossi**, una famiglia inventata (Martin voleva una famiglia «che tutti conoscono», ma i Simpson o Peppa Pig sono protetti da copyright). Disegnati una volta sola, ritagliati e ricomposti al computer, così sono identici ovunque.

## Come sono nati

Due fogli di personaggi con `google/gemini-3-pro-image` (2K, rapporto 21:9, $0,135 l'uno), prompt qui sotto. I personaggi vanno su una sola riga con molto spazio bianco fra l'uno e l'altro: così si ritagliano da soli dividendo il foglio in colonne. I ritagli, con lo sfondo reso trasparente (riempimento dai bordi, così il bianco dei vestiti resta) e ridotti al 55 %, sono in `scripts/data/famiglia-rossi/<nome>.png`. Il foglio dei più anziani ha diviso male Giorgio e Rosa (il bastone li univa): Rosa è stata ritagliata a mano di 11 px.

Da lì `node scripts/build-family-images.mjs` disegna, **senza costi**:

- `famiglia-hero.webp`: l'albero intero con i nomi (1280x853);
- `famiglia/<slug>.webp`: una scheda per parola. L'albero è sbiadito; a colori restano chi parla (stella arancione, `ref`), la persona della parola (riquadro blu, `targets`) e, a metà, chi le collega (percorso più corto nell'albero). L'immagine è ingrandita su quelle persone.

L'albero (chi è sposato con chi, i figli, le posizioni) sta in `FAMILY` dentro `scripts/data/family-vocabulary.mjs`. Per aggiungere una parola basta indicare `ref` e `targets`.

## Se servono altri personaggi

Un personaggio nuovo va generato con lo **stesso stile** (primo paragrafo del prompt) e ritagliato allo stesso modo, sapendo che non sarà identico agli altri: meglio un parente nuovo che un'altra versione di uno che c'è già.

## Prompt: i più anziani (anziani.png)

```
Character sheet for a children's language textbook: eight members of the same Italian family,
drawn in a soft, warm gouache illustration style with gentle brush texture, friendly realistic
proportions (not a cartoon, no thick black outlines, no chibi). Each person stands alone, full body
from head to shoes, facing the viewer with a friendly smile, in ONE single horizontal row of eight,
evenly spaced, with wide empty white space between every person so that nobody touches or overlaps
anybody else. Plain pure white background, no floor, no shadows, no text, no labels, no numbers, no frames.
From left to right:
1) great-grandfather Giorgio, about 88, bald with a short white beard, round glasses, beige cardigan, brown trousers, walking with a wooden cane;
2) great-grandmother Rosa, about 85, white hair in a bun, small glasses, lilac dress with little white flowers;
3) grandfather Paolo, about 65, short grey hair and grey moustache, light blue shirt, dark blue trousers;
4) grandmother Lucia, about 62, short copper-red hair, emerald green dress, pearl necklace;
5) uncle Franco, about 60, dark brown beard, round belly, red and white checked shirt, jeans;
6) aunt Carla, about 58, blonde curly hair, mustard yellow sweater, grey skirt;
7) father-in-law Roberto, about 68, tall and thin, neat white hair, navy blazer, striped tie;
8) mother-in-law Elena, about 65, silver bob haircut, sky blue cardigan, white trousers.
Everybody clearly different in hair, clothes and colours, so they are easy to recognise.
```

## Prompt: i più giovani (giovani.png)

```
Character sheet for a children's language textbook: nine members of the same Italian family,
drawn in a soft, warm gouache illustration style with gentle brush texture, friendly realistic
proportions (not a cartoon, no thick black outlines, no chibi). Each person stands alone, full body
from head to shoes, facing the viewer with a friendly smile, in ONE single horizontal row of nine,
evenly spaced, with wide empty white space between every person so that nobody touches or overlaps
anybody else. Plain pure white background, no floor, no shadows, no text, no labels, no numbers, no frames.
From left to right:
1) Marco, a man of about 38, short dark brown hair, black rectangular glasses, orange sweater, jeans;
2) his wife Giulia, about 36, long straight black hair, purple blouse, black trousers;
3) his sister Anna, about 34, brown hair in a high ponytail, red jacket, white t-shirt, jeans;
4) her husband Luca, about 36, a tall Black man with short curly hair and a short beard, grey shirt, khaki trousers;
5) cousin Davide, about 22, curly light brown hair, green hoodie, sneakers;
6) cousin Sara, about 19, long blonde hair in two braids, pink sweater, denim skirt;
7) Tommaso, a boy of about 8, messy dark hair, blue and white striped t-shirt, shorts;
8) Sofia, a girl of about 5, dark pigtails, yellow dress, red shoes;
9) Leo, a toddler of about 2, light brown curls, light green dungarees, holding a small teddy bear.
Everybody clearly different in hair, clothes and colours, so they are easy to recognise.
```

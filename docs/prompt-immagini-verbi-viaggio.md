# Immagini della lezione «I verbi del viaggio» (2026-11-03)

## Le foto delle schede

I soggetti stanno nel campo `subject` di `scripts/data/travel-verbs.mjs` (25 verbi in `travelVerbs`). Lo stile è `PEOPLE_STYLE` in `scripts/generate-animal-images.mjs`, come i verbi della città, ma a qualità `medium` (`mediumSet`). Modello `openai/gpt-image-1-mini`.

```
node scripts/generate-animal-images.mjs --set verbi-viaggio --out-dir <cartella-grezza>
python scripts/remove-white-background.py <cartella-grezza> <cartella-pulita> --whiten=affittare,alloggiare,atterrare,cambiare-i-soldi,decollare,disfare-la-valigia,esplorare,fare-il-check-in,fare-la-valigia,fare-una-visita-guidata,godersi-la-vacanza,guardare-fuori-dal-finestrino,mostrare-i-documenti,prendere-laereo,ritirare-i-bagagli,trascinare-la-valigia
node scripts/convert-vocabulary-images.mjs <cartella-pulita> --subdir verbi-viaggio
```

Controllate tutte in un foglio di provini (contrasto, scritte, simboli religiosi). Rifatte tre con `--only`:

- **fare-il-biglietto**: la macchinetta aveva scritto «Tickets»; ora «completely plain with no letters, no words and no logos anywhere».
- **mandare-una-cartolina**: la buca delle lettere aveva scritto «POSTE»; ora «with no letters, no words and no logos at all».
- **godersi-la-vacanza**: sullo sfondo c'era un paese con un campanile dalla punta forse a croce; ora solo il mare e qualche casa, «no church, no bell tower, no religious buildings or symbols».

Le 16 foto con buchi nel ritaglio sono passate da `--whiten` (la versione nuova, che non sbiadisce). Costo: 0,23 $ + 0,03 $.

## La testata — `public/assets/vocabolario/verbi-viaggio-hero.webp`

Gratis con lo Space Hugging Face `Z-Image-Turbo` (`1248x832 ( 3:2 )`, seme 649499), portata a 1280×853 in webp qualità 82 con sharp. Il primo tentativo (seme 197877) aveva un campanile fuori dalla finestra, anche se il prompt lo vietava: rifatta con un ulivo al posto dei tetti.

```
Minimal, elegant photorealistic photograph: a young woman in a loose cream sweater and jeans closing a full blue suitcase lying on a white bed, smiling, in a bright simple bedroom with plain white walls; behind her an open window showing only green olive trees and blue sky, warm morning light, one subject only, lots of empty space, modest family-friendly clothing, no buildings outside, no towers, no text, no logos
```

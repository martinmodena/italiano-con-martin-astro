# Immagini della lezione «Il tempo libero» (2026-11-05)

## Le foto delle schede

I soggetti stanno nel campo `subject` di `scripts/data/leisure-vocabulary.mjs` (29 schede in `leisureVocabulary`). Lo stile è `LEISURE_STYLE` in `scripts/generate-animal-images.mjs` (`workplaceStyle` come il telefono: niente scritte, niente marchi, niente chiese, campanili o arte religiosa sugli sfondi, niente carne né pesce). Modello `openai/gpt-image-1-mini`, qualità `medium`.

```
node scripts/generate-animal-images.mjs --set tempo-libero --out-dir <cartella-grezza>
python scripts/remove-white-background.py <cartella-grezza> <cartella-pulita> --whiten=aperitivo,carte,cruciverba,disegno,fai-da-te,fotografia,fumetto,giardinaggio,gioco-da-tavolo,giro-in-bici,karaoke,passeggiata,picnic,puzzle,romanzo,sagra,serie,videogioco
node scripts/convert-vocabulary-images.mjs <cartella-pulita> --subdir tempo-libero
```

Controllate tutte in un foglio di provini (lo sfondo della sagra ingrandito: case, nessuna chiesa). Rifatta **carte**: la prima aveva il fondo verde su tutta la foto. Il modello mette sempre gli indici negli angoli delle carte («A», «7»), anche se vietati: si accettano, perché non sono parole e non svelano la risposta. **fotografia**, **karaoke** e **aperitivo** riempivano tutto il riquadro e sono state ritagliate in un cerchio con una maschera (costo zero).

Costo: 0,26 $ + 0,01 $.

## La testata — `public/assets/vocabolario/tempo-libero-hero.webp`

Gratis con lo Space Hugging Face `Z-Image-Turbo` (`1248x832 ( 3:2 )`, seme 66324), portata a 1280×853 in webp qualità 82 con sharp. Il primo tentativo (seme 505727) aveva un campanile dietro il terrazzo, anche se il prompt lo vietava: **con Z-Image-Turbo «Italian» nel prompt fa comparire campanili; meglio descrivere solo colline, ulivi e cielo**.

```
Minimal, elegant photorealistic photograph: a classical wooden acoustic guitar leaning against a simple wooden chair on a sunny terrace in the afternoon, terracotta tiles on the floor, a few potted red geraniums, behind the terrace wall only green hills, olive trees and blue sky, soft warm light, one subject only, lots of empty space, no buildings, no towers, no people, no text, no logos
```

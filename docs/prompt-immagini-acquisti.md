# Immagini della lezione «Fare acquisti: soldi e negozi» (2026-11-03)

## Le foto delle schede

I soggetti stanno nel campo `subject` di `scripts/data/shopping-vocabulary.mjs` (30 schede in `shoppingVocabulary`). Lo stile è `SHOPPING_STYLE` in `scripts/generate-animal-images.mjs` (`workplaceStyle` come i viaggi: soldi, cartellini e insegne senza scritte, al massimo il simbolo %, niente marchi, niente carne né pesce sui banchi). Modello `openai/gpt-image-1-mini`, qualità `medium`.

```
node scripts/generate-animal-images.mjs --set acquisti --out-dir <cartella-grezza>
python scripts/remove-white-background.py <cartella-grezza> <cartella-pulita> --whiten=bancomat,banconota,bilancia,buono-regalo,camerino,cassa,centro-commerciale,lista-della-spesa,mancia,pacco,pos,resto,sacchetto,salvadanaio,scontrino,soldi,spesa,vetrina
node scripts/convert-vocabulary-images.mjs <cartella-pulita> --subdir acquisti
```

Controllate tutte in un foglio di provini (contrasto, scritte, simboli religiosi; le banconote e le monete ingrandite: solo numeri e disegni). Rifatte due con `--only`:

- **conto**: il modello aveva disegnato un tablet; ora la cartellina di pelle aperta con il conto a righe grigie. Il fondo di legno riempiva tutta la foto, quindi è stata ritagliata in un cerchio con una maschera (costo zero).
- **scontrino**: era bianco su bianco; ora righe grigio scuro, con il POS e due monete accanto.

Costo: 0,27 $ + 0,02 $.

## La testata — `public/assets/vocabolario/acquisti-hero.webp`

La quota gratuita di Hugging Face del giorno era finita, quindi è stata fatta con `openai/gpt-image-1-mini` a qualità `medium`, 1536×1024 (0,013 $), e portata a 1280×853 in webp qualità 82 con sharp.

```
Minimal, elegant photorealistic photograph: a woman's hand holding three colourful plain paper shopping bags (red, ochre and green, with no logos) in a sunny Italian shopping street, the shop fronts and terracotta facades softly blurred in the background, shallow depth of field, warm natural light, one subject only, lots of empty space, no signs, no text, no logos, no church, no bell tower, no religious symbols
```

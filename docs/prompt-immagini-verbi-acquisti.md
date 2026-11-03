# Immagini della lezione «I verbi degli acquisti» (2026-11-03)

## Le foto delle schede

I soggetti stanno nel campo `subject` di `scripts/data/shopping-verbs.mjs` (23 verbi in `shoppingVerbs`). Lo stile è `PEOPLE_STYLE` in `scripts/generate-animal-images.mjs`, come i verbi del viaggio, a qualità `medium`. Modello `openai/gpt-image-1-mini`.

```
node scripts/generate-animal-images.mjs --set verbi-acquisti --out-dir <cartella-grezza>
python scripts/remove-white-background.py <cartella-grezza> <cartella-pulita> --whiten=comprare,contare-i-soldi,costare,dare-il-resto,fare-un-regalo,fare-uno-sconto,incartare,mettere-nel-carrello,pagare-in-contanti,pesare,restituire,ricevere-un-pacco,risparmiare,spendere,tirare-sul-prezzo
node scripts/convert-vocabulary-images.mjs <cartella-pulita> --subdir verbi-acquisti
```

Controllate tutte in un foglio di provini. Rifatte due con `--only`:

- **contare-i-soldi**: il modello aveva disegnato dollari americani; ora «colourful euro-style banknotes (blue, orange, green and red, not green dollars)».
- **costare**: il cartellino del prezzo non si vedeva; ora un primo piano di una donna che gira il cartellino di una borsa rossa.

Costo: 0,20 $ + 0,02 $.

## La testata — `public/assets/vocabolario/verbi-acquisti-hero.webp`

Gratis con lo Space Hugging Face `Z-Image-Turbo` (`1248x832 ( 3:2 )`, seme 195137), portata a 1280×853 in webp qualità 82 con sharp.

```
Minimal, elegant photorealistic photograph: close view of a hand holding a plain blue bank card against a small black card payment terminal on the wooden counter of a small Italian shop, warm natural light, the shop interior softly blurred behind, shallow depth of field, one subject only, lots of empty space, the terminal screen blank, no text, no logos, no numbers, no religious symbols
```

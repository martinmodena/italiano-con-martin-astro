# Immagini della lezione «Dov’è il gatto? Sopra, sotto, dentro, fuori» (2026-11-02)

## Le foto delle schede e dell’esercizio «Dov’è il gattino?»

I soggetti stanno nel campo `subject` di `scripts/data/places-vocabulary.mjs` (22 schede in `placeVocabulary`, 8 foto dell’esercizio in `placeDescribeRows`, tutte con lo stesso gattino rosso tigrato). Lo stile è `PLACE_STYLE` in `scripts/generate-animal-images.mjs`: animale simpatico ma realistico e uno o due oggetti semplici su bianco, con la posizione leggibile anche in miniatura. Modello `openai/gpt-image-1-mini`, qualità `medium` come i colori.

```
node scripts/generate-animal-images.mjs --set luogo --out-dir <cartella-grezza>
node scripts/generate-animal-images.mjs --set luogo-descrivi --out-dir <cartella-grezza>
python scripts/remove-white-background.py <cartella-grezza> <cartella-pulita> --whiten=a-destra,dov-e-tenda,in-mezzo,angolo,attraverso,accanto,in-cima,dov-e-tappeto
node scripts/convert-vocabulary-images.mjs <cartella-pulita> --subdir luogo
```

Costo: $0,27 per 30 foto più $0,02 per due rifatte. «Intorno» e «lontano» sono state rifatte con una descrizione più precisa (gli anatroccoli in cerchio visti dall'alto, il prato lungo in prospettiva con il cane piccolissimo in fondo): la prima versione non mostrava la parola. **`--whiten` per i soggetti bianchi** (il coniglio, la tenda, i tappeti, le pareti dell'angolo, la porta con la gattaiola, i pinguini, la capra): il ritaglio normale se li mangiava.

## La testata — `public/assets/vocabolario/dove-si-trova-hero.webp`

Una foto sola e semplice, come le altre testate del vocabolario (1280×853, 3:2). Con `gemini-3-pro-image` OpenRouter rispondeva 402 «weight_exceeds_budget» anche con 5,6 $ di credito (anche a risoluzione 1K): la testata è stata fatta gratis con lo Space Hugging Face `Z-Image-Turbo` (`1248x832 ( 3:2 )`, seme 224424), poi portata a 1280×853 in webp qualità 82 con sharp.

```
node scripts/generate-image.mjs --slug vocabolario/dove-si-trova-hero --aspect-ratio 3:2 --hero-width 1280 --hero-height 853 --no-card --prompt "<il blocco qui sotto>"
```

```
Realistic, bright, elegant photograph. Minimal and simple, one subject only, lots of empty space. A cute ginger tabby kitten peeking out of an open cardboard box placed on the warm terracotta tile floor of a sunny Italian kitchen; only its head and front paws show over the edge of the box, curious big eyes. The kitchen behind is softly blurred: a window with green wooden shutters and a pot of basil in warm morning light. Natural colours: terracotta, cream, olive green. No people. Absolutely no text, letters or numbers anywhere.
```

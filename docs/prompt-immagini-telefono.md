# Immagini della lezione «Il telefono e internet» (2026-11-03)

## Le foto delle schede

I soggetti stanno nel campo `subject` di `scripts/data/phone-vocabulary.mjs` (24 schede in `phoneVocabulary`). Lo stile è `PHONE_STYLE` in `scripts/generate-animal-images.mjs` (`workplaceStyle` come gli acquisti: schermi vuoti o con semplici forme colorate e simboli, mai parole o numeri, nessun marchio). Modello `openai/gpt-image-1-mini`, qualità `medium`.

```
node scripts/generate-animal-images.mjs --set telefono --out-dir <cartella-grezza>
python scripts/remove-white-background.py <cartella-grezza> <cartella-pulita> --whiten=batteria-esterna,caricabatterie,cavo,cellulare,chat,chiamata,codice-qr,messaggio-vocale,vivavoce,wi-fi,sim,campo
node scripts/convert-vocabulary-images.mjs <cartella-pulita> --subdir telefono
```

Controllate tutte in un foglio di provini. Rifatte sei con `--only`, quasi tutte per il bianco su bianco: gli oggetti del telefono sono spesso bianchi.

- **caricabatterie**, **auricolari** e **router**: ora neri, «clearly standing out from the white background».
- **presa**: la presa bianca ora sta su un quadrato di muro color terracotta, con un caricabatterie nero.
- **notifica**: la campanella bianca era quasi invisibile; ora lo schermo è blu scuro.
- **emoji**: toccavano i bordi dell'immagine; ora sono cinque su due file, con margini larghi.

Costo: 0,22 $ + 0,05 $.

## La testata — `public/assets/vocabolario/telefono-internet-hero.webp`

Gratis con lo Space Hugging Face `Z-Image-Turbo` (`1248x832 ( 3:2 )`, seme 749098), portata a 1280×853 in webp qualità 82 con sharp.

```
Minimal, elegant photorealistic photograph: a modern smartphone lying face up on a small round marble table of an Italian café, next to a small cup of espresso on a saucer, morning light, the café softly blurred behind, shallow depth of field, one subject only, lots of empty space, the phone screen dark and blank, no brand logo, no text, no religious symbols
```

# Immagini della lezione «Dal medico e in farmacia» (2026-11-02)

## Le foto delle schede

I soggetti stanno nel campo `subject` di `scripts/data/health-vocabulary.mjs` (34 schede in `healthVocabulary`). Lo stile è `HEALTH_STYLE` in `scripts/generate-animal-images.mjs` (`workplaceStyle` come la scuola: oggetti ritagliati, ambienti in un cerchio, persone vestite in modo sobrio, niente sangue né aghi in primo piano). Modello `openai/gpt-image-1-mini`, qualità `medium`.

```
node scripts/generate-animal-images.mjs --set salute --out-dir <cartella-grezza>
python scripts/remove-white-background.py <cartella-grezza> <cartella-pulita> --whiten=ambulanza,ambulatorio,benda,cerotto,compressa,medicina,medico-di-famiglia,mascherina,paziente,pomata,pronto-soccorso,ricetta,sala-d-attesa,termometro,vaccino,visita,tessera-sanitaria,stetoscopio,scottatura,ferita,frattura,influenza,livido,pressione,iniezione,sedia-a-rotelle,gocce,sciroppo,appuntamento
node scripts/convert-vocabulary-images.mjs <cartella-pulita> --subdir salute
```

Costo: $0,31 per 34 foto. `--whiten` per camici, scatole, bende, il termometro e la pomata bianchi; anche frattura, influenza, livido, pressione, iniezione, sedia a rotelle, gocce, sciroppo e appuntamento, dove il ritaglio normale bucava visi, maglioni e coperte chiare.

## La testata — `public/assets/vocabolario/salute-hero.webp`

Fatta gratis con lo Space Hugging Face `Z-Image-Turbo` (`1248x832 ( 3:2 )`, seme 572849), perché `gemini-3-pro-image` su OpenRouter risponde 402 con il credito attuale; portata a 1280×853 in webp qualità 82 con sharp.

```
Photorealistic photograph of the counter of a small traditional Italian pharmacy: wooden shelves full of neatly arranged white and pastel medicine boxes, a glowing green cross on the wall, a smiling female pharmacist in a white coat behind the counter handing a small white box, warm natural light, clean and calm atmosphere, simple composition, no readable text, no logos
```

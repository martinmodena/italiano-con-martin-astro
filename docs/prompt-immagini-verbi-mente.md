# Immagini della lezione «I verbi della mente e della parola» (2026-11-05)

## Le foto delle schede

I soggetti stanno nel campo `subject` di `scripts/data/mind-verbs.mjs` (27 verbi in `mindVerbs`). Lo stile è `PEOPLE_STYLE` in `scripts/generate-animal-images.mjs`, come i verbi degli acquisti, a qualità `medium`. I verbi sono astratti, quindi ogni scena ha un gesto o un'espressione molto chiari: le dita incrociate per *sperare*, il dito sulle labbra per *stare zitto*, la macchia di caffè per *accorgersi*, la bambina bendata per *indovinare*. Modello `openai/gpt-image-1-mini`.

```
node scripts/generate-animal-images.mjs --set verbi-mente --out-dir <cartella-grezza>
python scripts/remove-white-background.py <cartella-grezza> <cartella-pulita> --whiten=accorgersi,capire,chiacchierare,chiedere,conoscere,dimenticare,dire-una-bugia,dire,discutere,essere-d-accordo,indovinare,lamentarsi,preoccuparsi,ricordare,sapere,scherzare,spiegare,stare-zitto,sperare
node scripts/convert-vocabulary-images.mjs <cartella-pulita> --subdir verbi-mente
```

Controllate tutte in un foglio di provini. Rifatte due con `--only`:

- **dimenticare**: le chiavi non si vedevano; ora sono su un tavolino dietro l'uomo che rovescia le tasche.
- **dire**: era quasi uguale a *credere* (un papà inginocchiato che parla alla figlia); ora una donna alla finestra che dice qualcosa al vicino in strada. La foto di *credere* accetta anche *dire*.

Costo: 0,24 $ + 0,02 $.

## La testata — `public/assets/vocabolario/verbi-mente-parola-hero.webp`

Gratis con lo Space Hugging Face `Z-Image-Turbo` (`1248x832 ( 3:2 )`, seme 849805), portata a 1280×853 in webp qualità 82 con sharp. Senza la parola «Italian» nel prompt e con «no buildings, no towers», per non avere campanili sullo sfondo.

```
Minimal, elegant photorealistic photograph: two young women friends sitting at a small outdoor café table in warm afternoon light, talking and laughing, one of them resting her chin on her hand and listening thoughtfully, two small cups of coffee on the table, behind them only a softly blurred ochre wall with green plants, shallow depth of field, modest everyday clothing with long sleeves, lots of empty space, no buildings, no towers, no text, no logos
```

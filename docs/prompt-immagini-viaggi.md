# Immagini della lezione «In viaggio» (2026-11-02)

## Le foto delle schede

I soggetti stanno nel campo `subject` di `scripts/data/travel-vocabulary.mjs` (34 schede in `travelVocabulary`). Lo stile è `TRAVEL_STYLE` in `scripts/generate-animal-images.mjs` (`workplaceStyle` come la salute: oggetti ritagliati, luoghi in un cerchio, persone vestite in modo sobrio, niente marchi). Modello `openai/gpt-image-1-mini`, qualità `medium`.

```
node scripts/generate-animal-images.mjs --set viaggi --out-dir <cartella-grezza>
python scripts/remove-white-background.py <cartella-grezza> <cartella-pulita> --whiten=aereo,aeroporto,area-di-servizio,bagaglio-a-mano,biglietteria,biglietto,binario,camera-doppia,campeggio,carrozza,carta-d-identita,carta-d-imbarco,cartolina,casello,cintura,controllo-di-sicurezza,distributore,dogana,fila,guida,ostello,passaporto,passeggero,pullman,reception,tabellone,traghetto,turista,ufficio-turistico,autostrada,obliteratrice,souvenir
node scripts/convert-vocabulary-images.mjs <cartella-pulita> --subdir viaggi
```

Costo: $0,31 per 34 foto più $0,04 per quattro rifatte con `--only`: il tabellone («DEPARTURES») e l'ufficio turistico («TOURIST INFORMATION») avevano scritte in inglese, l'area di servizio «CAFE», la biglietteria sembrava un disegno. I soggetti nel file dati sono già quelli corretti (scritte vietate in modo esplicito, «photorealistic, not a drawing»). `--whiten` quasi ovunque: foto con persone, veicoli bianchi e carte chiare, che il ritaglio normale bucava.

## La testata — `public/assets/vocabolario/viaggi-hero.webp`

Fatta gratis con lo Space Hugging Face `Z-Image-Turbo` (`1248x832 ( 3:2 )`, seme 386275), perché `gemini-3-pro-image` su OpenRouter risponde 402 con il credito attuale; portata a 1280×853 in webp qualità 82 con sharp.

```
Realistic, bright, elegant photograph. Minimal and simple, one subject only, lots of empty space. A red hard-shell suitcase standing on the platform of a small sunny Italian railway station, a regional train arriving softly blurred in the background, old station building in warm ochre colour with green shutters, warm morning light. Natural colours. No people. Absolutely no text, letters or numbers anywhere.
```

## Foto rifatte il 2026-11-02

- **passeggero**: era slavata. La causa era `--whiten`, che schiariva tutta la foto in modo lineare: ora `scripts/remove-white-background.py` schiarisce solo i toni vicini allo sfondo. In più la scena ora è in un cerchio, come le altre scene, e il cappotto è verde scuro.
- **aereo**, **biglietto** e **carta-d-identita**: colori più decisi (coda blu, biglietto arancione e verde, tessera azzurra con la foto), perché le prime erano bianco su bianco.
- **area-di-servizio**: più grande nell'inquadratura, tetto rosso «with no letters at all», perché il modello aveva riscritto «CAFE».

Ritaglio: `--whiten=aereo,biglietto,carta-d-identita,area-di-servizio`; la passeggera è stata ritagliata normalmente.

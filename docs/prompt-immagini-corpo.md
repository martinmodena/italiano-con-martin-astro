# Immagini delle lezioni sul corpo

Due lezioni di vocabolario del 2026-09-25: «Il corpo umano» (63 parti del corpo) e «I verbi del corpo» (94 verbi). Ogni parola ha una foto, più una testata per lezione. Le foto dei verbi mostrano una persona (o solo le sue mani) che compie l'azione.

## Regole (Martin, 2026-09-25)

- **Foto realistiche.** Non illustrazioni: foto da manuale scolastico, con pelle, capelli e anatomia veri. Anche le testate sono fotografie (nelle altre lezioni sono illustrazioni a guazzo).
- **Modello `openai/gpt-image-1-mini` a `quality: "medium"`** (circa $0,009 l'una), non `low`: a qualità bassa mani e piedi escono con dita in più. Lo script `generate-animal-images.mjs` lo usa da solo con `--set corpo` e `--set verbi-corpo`.
- **Nessuna carne, niente sangue, niente nudo.** Gli organi interni (cervello, cuore, polmoni, stomaco, fegato, reni, intestino) sono **modelli anatomici di plastica da aula**, mai tessuti veri: il prompt lo dice esplicitamente. Ossa e scheletro sono modelli color avorio. Niente parti intime: per questo mancano parole come «il seno» o «il sedere». Un verbo non ha immagini di cibo di origine animale (per «mangiare» un'insalata, per «bere» l'acqua, per «leccare» un lecca-lecca).
- **Tenere sotto controllo le mani.** «Exactly five fingers on each hand and five toes on each foot» sta nel prompt di stile. Il dito medio non ha una scheda (il gesto è offensivo); «contare sulle dita» mostra tre dita.

## Come si rigenerano

```bash
node scripts/generate-animal-images.mjs --set corpo --out-dir <grezze>
python scripts/remove-white-background.py <grezze> <pulite> --whiten=<vedi sotto>
node scripts/convert-vocabulary-images.mjs <pulite> --subdir corpo
```

Uguale per i verbi (`--set verbi-corpo`, `--subdir verbi-corpo`). Lo script salta le immagini che esistono già, quindi rilanciarlo genera solo quelle che mancano. Il prompt di stile sta in `scripts/generate-animal-images.mjs` (`BODY_STYLE`, `BODY_VERB_STYLE`); il soggetto di ogni immagine è nel campo `subject` di `scripts/data/body-vocabulary.mjs` e `body-verbs.mjs`.

## Sfondo: quasi tutti i primi piani vanno con `--whiten`

Il ritaglio a colore scambia la pelle chiara per sfondo e si mangia pezzi di faccia, spalla e schiena. Per i **primi piani e i soggetti color avorio** si passa `--whiten` (corregge il colore, non ritaglia; sulle schede il fondo è bianco, quindi il rettangolo non si vede):

```
--whiten=colonna,osso,scheletro,costole,cranio,alluce,ascella,baffi,bocca,ciglia,collo,denti,fronte,ginocchio,guancia,labbra,lingua,mento,naso,occhi,orecchio,spalla,schiena,palpebra,sopracciglio,pancia,petto,nuca,testa,viso,barba,capelli,gomito,pelle
```

Il ritaglio vero funziona bene sugli oggetti isolati (organi, mani, piedi, orologio, telefono). **Le foto vanno guardate a occhio** con un foglio di contatto su fondo colorato.

`public/assets/match.css` ha `mix-blend-mode: multiply` sulle foto delle barre degli esercizi: il bianco delle foto ritoccate senza ritaglio sparisce anche quando la scheda cambia colore al passaggio del mouse.

Consiglio per le foto dei soggetti interi (scheletro, corpo, gamba, piede, organi): nel campo `subject` c'è, aggiunto dal codice (`WHOLE`), «the whole subject small in the centre of the frame with wide empty white margins on every side», altrimenti escono tagliate ai bordi.

## Testata «Il corpo umano» (`corpo-umano-hero.webp`)

Rifatta il 2026-09-27 (Martin: la copertina non andava bene; la prima, amici che si danno il cinque in un parco, sembrava una lezione sulle persone). Ora il corpo è il soggetto:

```
A bright, natural, photorealistic photograph of a smiling young woman in a fitted sleeveless sports top and leggings, barefoot, doing a wide star-shaped stretch in a bright minimalist studio with pale wooden floor and white walls: arms stretched out to the sides with open hands and spread fingers, legs apart, head up, so the whole body is clearly readable from head to toes: hair, face, neck, shoulders, arms, elbows, hands, belly, knees, legs and feet. Full body visible, centred, plenty of space around her. Warm natural daylight, bright and inviting, true-to-life colours, skin and anatomy, candid and joyful, like a high-quality editorial photograph. No text, no letters, no logos, no signs with words, no meat, no fish. 3:2 landscape composition.
```

(Il modello l'ha messa seduta a gambe larghe invece che in piedi: va bene così.)

## Testata «I verbi del corpo» (`verbi-corpo-hero.webp`)

Rifatta il 2026-09-27 per lo stesso motivo (la prima: persone al parco che saltano e salutano). Mosaico di sei gesti, come la testata dei verbi della città:

```
A bright, natural, photorealistic photo mosaic of six equal panels in a 3 by 2 grid separated by thin white lines, each showing one everyday action done with the body, close enough to see the gesture clearly: a man washing his hands with soap at a sink, a girl brushing her teeth in front of a mirror, a woman combing her long hair, a boy clapping his hands and laughing, an older man smelling a flower with closed eyes, a young woman stretching her arms up after waking up in bed. Warm natural daylight, bright and inviting, true-to-life colours, skin and anatomy, candid and joyful, like a high-quality editorial photograph. No text, no letters, no logos, no signs with words, no meat, no fish. 3:2 landscape composition.
```

Entrambe con `generate-image.mjs --slug vocabolario/<nome> --hero-width 1280 --hero-height 853 --aspect-ratio 3:2 --no-card --prompt "..."` (modello di default `google/gemini-3-pro-image`, $0,13 l'una).

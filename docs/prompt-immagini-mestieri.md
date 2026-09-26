# Immagini della lezione «I mestieri»

Lezione di vocabolario del 2026-09-26: 53 mestieri al maschile e al femminile, una foto realistica per mestiere. Le foto alternano uomini e donne.

## Scelte per spendere poco (Martin, 2026-09-26)

- **`gpt-image-1-mini` a qualità `low`** (~$0,0026 l'una), non `medium` come per il corpo: nelle inquadrature a figura intera le mani sono piccole e i difetti non si vedono. Prima 5 foto di prova, poi le altre. In tutto **$0,17** (53 + 5 prove + 5 rifatte).
- **La testata non è generata**: è un collage di 12 foto delle schede, fatto da `scripts/build-collage-hero.mjs` (costo zero). Comando in cima allo script.

## Come si rigenerano

```bash
node scripts/generate-animal-images.mjs --set mestieri --out-dir <grezze>
python scripts/remove-white-background.py <grezze> <pulite> --whiten=<tutti gli slug>
node scripts/convert-vocabulary-images.mjs <pulite> --subdir mestieri
```

Lo stile sta in `JOB_STYLE` dentro `scripts/generate-animal-images.mjs`, il soggetto di ogni foto nel campo `subject` di `scripts/data/jobs-vocabulary.mjs`.

## Lezioni imparate

- Il prompt deve chiedere **la figura intera, piccola al centro, con margini bianchi**: la prima prova aveva teste e piedi tagliati.
- **Tutte le foto con `--whiten`**: camici, grembiuli, giacche da cuoco e tute bianche verrebbero mangiati dal ritaglio a colore; sulle schede il fondo è bianco.
- Un mestiere si riconosce dagli **attrezzi e dal posto**, non dai vestiti: il commesso con un rotolo di pasta sembrava un panettiere (rifatto con lo stand dei vestiti), il cassiere senza cassa era un uomo con una scatola (rifatto al banco con il registratore di cassa), l'autista con un volante in mano sembrava un gioco (rifatto accanto alla porta dell'autobus). Rifatti anche l'infermiere (testa tagliata; ora spinge una sedia a rotelle) e il sarto (teneva in mano la macchina da cucire).
- Regola «niente carne»: niente macellaio né pescatore; il pizzaiolo inforna una marinara, il barista serve un caffè nero, il cuoco salta le verdure.

# Immagini per le schede di vocabolario

Come si producono le illustrazioni che mancano, e come si mettono nel sito.

Le schede di vocabolario mostrano **una parola per immagine** e riusano la stessa immagine nell'esercizio «Riconosci la parola». Finché l'immagine manca, la parola **non viene aggiunta alla pagina**: `scripts/expand-food-vocabulary.mjs` salta le parole senza illustrazione, così tutte e 9 le lingue restano allineate.

Stato al 2026-08-31: la lezione «Il cibo» ha 8 parole in pagina e **64 parole pronte in attesa dell'immagine** (`scripts/data/food-vocabulary-extra.mjs`). Quando le 64 immagini ci sono, la pagina passa a **72 parole**.

---

## 1. Il prompt da dare a ChatGPT

Una immagine per messaggio: chiedendone molte insieme lo stile cambia da una all'altra. Sostituisci `[SOGGETTO]` con la descrizione presa dalla tabella qui sotto.

> Crea un'immagine fotorealistica di **[SOGGETTO]** per una scheda di vocabolario italiano.
>
> Regole obbligatorie, identiche per ogni immagine della serie:
>
> - un solo soggetto, isolato: niente altri cibi, niente piatti, niente posate, niente tovaglie, niente mani, niente sfondo di cucina;
> - sfondo bianco puro e uniforme (#FFFFFF), senza ombre proiettate marcate; al massimo un'ombra di contatto molto tenue sotto il soggetto;
> - immagine quadrata, 1024×1024;
> - il soggetto è centrato e occupa circa il 75% dell'inquadratura, ripreso a tre quarti leggermente dall'alto;
> - luce da studio morbida e diffusa, colori naturali, messa a fuoco nitida su tutto il soggetto;
> - nessun testo, nessuna scritta, nessun logo, nessuna filigrana, nessuna cornice, nessun bordo;
> - resa da fotografia di prodotto: non un disegno, non un'illustrazione piatta, non uno stile cartone animato.
>
> Il soggetto deve essere riconoscibile a colpo d'occhio da chi sta imparando la parola per la prima volta: usa la forma più tipica e più comune, non una versione gourmet o elaborata.
>
> Salva il file con il nome che ti indico.

**Eccezioni utili.** Per i piatti larghi e piatti (`pizza`, `lasagne`, `focaccia`, `torta`) chiedi la ripresa **dall'alto** invece che a tre quarti. Per i liquidi (`latte`, `olio`, `aceto`, `vino`, `birra`, `succo`, `caffe`, `te`, `cappuccino`, `acqua`) chiedi il liquido **nel suo contenitore tipico** (bicchiere, tazzina, bottiglia), perché da soli non si riconoscono. Per le polveri (`sale`, `zucchero`, `farina`) chiedi una **ciotolina bianca** vista a tre quarti.

Il riferimento di stile sono le otto immagini già online: `public/assets/vocabolario/pane.webp`, `pasta.webp`, `riso.webp`, `carne.webp`, `pesce.webp`, `formaggio.webp`, `uovo.webp`, `mela.webp`.

---

## 2. Come si mettono nel sito

1. Salva ogni immagine con **esattamente** il nome della colonna «File» qui sotto, estensione `.png`, `.jpg` o `.webp` (il nome del file conta, l'estensione no), tutte in una cartella sola.
2. Esegui:

```bash
node scripts/expand-food-vocabulary.mjs --images C:\percorso\della\cartella
```

Lo script converte le immagini nel formato del sito (512×512, webp, soggetto centrato), aggiunge le parole che hanno l'immagine alle **9 pagine**, crea per ognuna la scheda con le 3 frasi d'esempio e l'esercizio di riconoscimento, aggiorna i contatori, i metadati SEO, l'indice del vocabolario e la soglia di `scripts/audit-vocabulary.mjs`.

3. Prima di pubblicare, la sequenza di `AGENTS.md`:

```bash
node scripts/audit-language-mix.mjs --strict && npm run build && node scripts/audit-site.mjs --strict && node scripts/audit-links.mjs --strict && npm run audit:vocabulary
```

Le immagini possono arrivare poche alla volta: lo script si può rieseguire quante volte serve e aggiunge solo quelle nuove.

---

## 3. Le 64 immagini che mancano

La descrizione della colonna «Soggetto» è quella da incollare al posto di `[SOGGETTO]`.

| # | File | Parola italiana | Soggetto |
| --- | --- | --- | --- |
| 1 | `pizza.webp` | la pizza | Una pizza |
| 2 | `panino.webp` | il panino | Un panino |
| 3 | `spaghetti.webp` | gli spaghetti | Degli spaghetti |
| 4 | `lasagne.webp` | le lasagne | Delle lasagne |
| 5 | `gnocchi.webp` | gli gnocchi | Degli gnocchi |
| 6 | `risotto.webp` | il risotto | Del risotto |
| 7 | `zuppa.webp` | la zuppa | Una zuppa |
| 8 | `prosciutto.webp` | il prosciutto | Del prosciutto |
| 9 | `pollo.webp` | il pollo | Del pollo |
| 10 | `tonno.webp` | il tonno | Del tonno |
| 11 | `yogurt.webp` | lo yogurt | Uno yogurt |
| 12 | `latte.webp` | il latte | Del latte |
| 13 | `burro.webp` | il burro | Del burro |
| 14 | `olio.webp` | l’olio | Dell’olio d’oliva |
| 15 | `sale.webp` | il sale | Del sale |
| 16 | `pepe.webp` | il pepe | Del pepe |
| 17 | `zucchero.webp` | lo zucchero | Dello zucchero |
| 18 | `farina.webp` | la farina | Della farina |
| 19 | `marmellata.webp` | la marmellata | Della marmellata |
| 20 | `pomodoro.webp` | il pomodoro | Un pomodoro |
| 21 | `insalata.webp` | l’insalata | Dell’insalata |
| 22 | `patata.webp` | la patata | Una patata |
| 23 | `carota.webp` | la carota | Una carota |
| 24 | `cipolla.webp` | la cipolla | Una cipolla |
| 25 | `aglio.webp` | l’aglio | Dell’aglio |
| 26 | `zucchina.webp` | la zucchina | Una zucchina |
| 27 | `melanzana.webp` | la melanzana | Una melanzana |
| 28 | `banana.webp` | la banana | Una banana |
| 29 | `arancia.webp` | l’arancia | Un’arancia |
| 30 | `limone.webp` | il limone | Un limone |
| 31 | `fragola.webp` | la fragola | Una fragola |
| 32 | `uva.webp` | l’uva | Dell’uva |
| 33 | `pera.webp` | la pera | Una pera |
| 34 | `gelato.webp` | il gelato | Un gelato |
| 35 | `torta.webp` | la torta | Una torta |
| 36 | `biscotti.webp` | i biscotti | Dei biscotti |
| 37 | `cornetto.webp` | il cornetto | Un cornetto |
| 38 | `caffe.webp` | il caffè | Un caffè |
| 39 | `te.webp` | il tè | Un tè |
| 40 | `acqua.webp` | l’acqua | Dell’acqua |
| 41 | `vino.webp` | il vino | Del vino |
| 42 | `birra.webp` | la birra | Una birra |
| 43 | `mozzarella.webp` | la mozzarella | Della mozzarella |
| 44 | `salame.webp` | il salame | Del salame |
| 45 | `bistecca.webp` | la bistecca | Una bistecca |
| 46 | `gamberi.webp` | i gamberi | Dei gamberi |
| 47 | `miele.webp` | il miele | Del miele |
| 48 | `aceto.webp` | l’aceto | Dell’aceto |
| 49 | `basilico.webp` | il basilico | Del basilico |
| 50 | `peperone.webp` | il peperone | Un peperone |
| 51 | `funghi.webp` | i funghi | Dei funghi |
| 52 | `piselli.webp` | i piselli | Dei piselli |
| 53 | `fagioli.webp` | i fagioli | Dei fagioli |
| 54 | `broccoli.webp` | i broccoli | Dei broccoli |
| 55 | `spinaci.webp` | gli spinaci | Degli spinaci |
| 56 | `pesca.webp` | la pesca | Una pesca |
| 57 | `ciliegia.webp` | la ciliegia | Una ciliegia |
| 58 | `anguria.webp` | l’anguria | Un’anguria |
| 59 | `ananas.webp` | l’ananas | Un ananas |
| 60 | `noci.webp` | le noci | Delle noci |
| 61 | `cioccolato.webp` | il cioccolato | Del cioccolato |
| 62 | `succo.webp` | il succo | Un succo di frutta |
| 63 | `cappuccino.webp` | il cappuccino | Un cappuccino |
| 64 | `focaccia.webp` | la focaccia | Della focaccia |

---

## 4. Se serve una parola che non è in elenco

Aggiungila a `scripts/data/food-vocabulary-extra.mjs` con la stessa forma delle altre: nome del file, parola con l'articolo, tre frasi d'esempio **in italiano** (non si traducono mai), le risposte accettate dall'esercizio e il testo alternativo dell'immagine tradotto in tutte e 9 le lingue. Poi produci l'immagine con il prompt qui sopra.

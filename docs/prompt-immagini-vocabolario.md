# Immagini per le schede di vocabolario

Come si producono le illustrazioni che mancano, e come si mettono nel sito.

Le schede di vocabolario mostrano **una parola per immagine** e riusano la stessa immagine nell'esercizio «Riconosci la parola». Finché l'immagine manca, la parola **non viene aggiunta alla pagina**: `scripts/expand-food-vocabulary.mjs` salta le parole senza illustrazione, così tutte e 9 le lingue restano allineate.

Stato al 2026-09-01: la lezione «Il cibo» ha **16 parole in pagina** e **56 parole pronte in attesa dell'immagine** (`scripts/data/food-vocabulary-extra.mjs`). Quando tutte le immagini ci sono, la pagina passa a **72 parole**.

Le prime 8 illustrazioni sono state generate con lo Space `mcp-tools/Z-Image-Turbo` via il connettore Hugging Face, seme fisso `1001`, 1024x1024. La GPU gratuita di Hugging Face si esaurisce dopo circa 8 immagini al giorno: o si aspetta il reset giornaliero, o si passa a Hugging Face PRO, o si generano con ChatGPT come descritto qui sotto.

---

## 1. Il prompt da dare a ChatGPT

Questo blocco si manda **una volta sola**, all'inizio della conversazione. Poi si mandano i soggetti della tabella, uno per messaggio: chiedendone molti insieme lo stile cambia da un'immagine all'altra.

```
Devo produrre una serie di 64 immagini per le schede di vocabolario di un sito
che insegna italiano. Le immagini devono sembrare tutte scattate nello stesso
studio, lo stesso giorno, con la stessa luce.

Regole valide per OGNI immagine della serie:

- fotografia di prodotto realistica: non un disegno, non un'illustrazione
  piatta, non uno stile cartone animato, non un rendering 3D;
- un solo soggetto, isolato. Niente altri cibi, niente tovaglie, niente posate,
  niente mani, niente sfondo di cucina, niente decorazioni;
- se nel soggetto ti indico un contenitore (bicchiere, tazzina, ciotola,
  piatto, bottiglia, vasetto), quello fa parte dell'immagine. Se non lo indico,
  nessun contenitore;
- sfondo bianco puro e uniforme (#FFFFFF). Nessuna ombra proiettata marcata:
  al massimo un'ombra di contatto molto tenue sotto il soggetto;
- immagine quadrata, 1024x1024;
- soggetto centrato, occupa circa il 75% dell'inquadratura, ripreso a tre
  quarti leggermente dall'alto (salvo quando ti scrivo "vista dall'alto");
- luce da studio morbida e diffusa, colori naturali, tutto a fuoco;
- nessun testo, nessuna scritta, nessun logo, nessuna filigrana, nessuna
  cornice, nessun bordo.

Il soggetto deve essere riconoscibile a colpo d'occhio da chi sta imparando la
parola per la prima volta: usa sempre la forma più tipica e più comune, mai una
versione gourmet, decorata o elaborata.

Ti manderò i soggetti uno alla volta. Per ognuno genera una sola immagine
seguendo queste regole, senza cambiare stile fra un'immagine e l'altra.
```

Lo sfondo bianco non è un ripiego: nelle schede l'immagine sta già su fondo bianco (`.word-card img { background: #fff }`), quindi si fonde come le otto illustrazioni già online, che hanno lo sfondo trasparente.

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

## 3. Le immagini che mancano

Le righe con ✅ sono gia' online.

La colonna «Soggetto» è il messaggio da mandare a ChatGPT dopo il blocco iniziale. La colonna «File» è il nome con cui va salvata l'immagine: deve essere esatto.

| # | File | Parola italiana | Soggetto |
| --- | --- | --- | --- |
| ✅ | `pizza.webp` | la pizza | una pizza margherita intera, vista dall'alto |
| ✅ | `panino.webp` | il panino | un panino imbottito con prosciutto |
| ✅ | `spaghetti.webp` | gli spaghetti | un piatto bianco di spaghetti al pomodoro |
| ✅ | `lasagne.webp` | le lasagne | una porzione di lasagne al forno, vista dall'alto |
| ✅ | `gnocchi.webp` | gli gnocchi | un piatto bianco di gnocchi al pomodoro |
| ✅ | `risotto.webp` | il risotto | un piatto bianco di risotto giallo allo zafferano |
| ✅ | `zuppa.webp` | la zuppa | una scodella bianca di zuppa di verdure |
| 8 | `prosciutto.webp` | il prosciutto | alcune fette di prosciutto crudo |
| 9 | `pollo.webp` | il pollo | un pollo arrosto intero |
| 10 | `tonno.webp` | il tonno | una scatoletta aperta di tonno |
| 11 | `yogurt.webp` | lo yogurt | un vasetto aperto di yogurt bianco |
| 12 | `latte.webp` | il latte | un bicchiere di latte |
| 13 | `burro.webp` | il burro | un panetto di burro |
| 14 | `olio.webp` | l’olio | una bottiglia di olio d'oliva |
| 15 | `sale.webp` | il sale | una ciotolina bianca di sale grosso |
| 16 | `pepe.webp` | il pepe | una ciotolina bianca di pepe nero in grani |
| 17 | `zucchero.webp` | lo zucchero | una ciotolina bianca di zucchero bianco |
| 18 | `farina.webp` | la farina | una ciotolina bianca di farina |
| 19 | `marmellata.webp` | la marmellata | un vasetto aperto di marmellata di albicocche |
| ✅ | `pomodoro.webp` | il pomodoro | un pomodoro rosso maturo con il picciolo verde |
| 21 | `insalata.webp` | l’insalata | una ciotola di insalata verde a foglie |
| 22 | `patata.webp` | la patata | una patata cruda con la buccia |
| 23 | `carota.webp` | la carota | una carota arancione con il ciuffo verde |
| 24 | `cipolla.webp` | la cipolla | una cipolla dorata intera |
| 25 | `aglio.webp` | l’aglio | una testa d'aglio bianca |
| 26 | `zucchina.webp` | la zucchina | una zucchina verde intera |
| 27 | `melanzana.webp` | la melanzana | una melanzana viola intera |
| 28 | `banana.webp` | la banana | una banana gialla matura |
| 29 | `arancia.webp` | l’arancia | un'arancia intera con una foglia verde |
| 30 | `limone.webp` | il limone | un limone giallo intero con una foglia verde |
| 31 | `fragola.webp` | la fragola | una fragola rossa con il picciolo verde |
| 32 | `uva.webp` | l’uva | un grappolo d'uva nera |
| 33 | `pera.webp` | la pera | una pera verde intera |
| 34 | `gelato.webp` | il gelato | un cono gelato con due palline |
| 35 | `torta.webp` | la torta | una torta al cioccolato intera, vista dall'alto |
| 36 | `biscotti.webp` | i biscotti | alcuni biscotti rotondi |
| 37 | `cornetto.webp` | il cornetto | un cornetto italiano dorato da colazione |
| 38 | `caffe.webp` | il caffè | una tazzina bianca di caffè espresso |
| 39 | `te.webp` | il tè | una tazza di tè caldo |
| 40 | `acqua.webp` | l’acqua | un bicchiere d'acqua |
| 41 | `vino.webp` | il vino | un bicchiere di vino rosso |
| 42 | `birra.webp` | la birra | un bicchiere di birra chiara con la schiuma |
| 43 | `mozzarella.webp` | la mozzarella | una mozzarella bianca tonda |
| 44 | `salame.webp` | il salame | un salame intero con alcune fette tagliate accanto |
| 45 | `bistecca.webp` | la bistecca | una bistecca di manzo cruda |
| 46 | `gamberi.webp` | i gamberi | alcuni gamberi rosa crudi |
| 47 | `miele.webp` | il miele | un vasetto di miele |
| 48 | `aceto.webp` | l’aceto | una bottiglia di aceto |
| 49 | `basilico.webp` | il basilico | un mazzetto di foglie di basilico fresco |
| 50 | `peperone.webp` | il peperone | un peperone giallo intero |
| 51 | `funghi.webp` | i funghi | alcuni funghi champignon |
| 52 | `piselli.webp` | i piselli | un mucchietto di piselli verdi freschi |
| 53 | `fagioli.webp` | i fagioli | un mucchietto di fagioli bianchi secchi |
| 54 | `broccoli.webp` | i broccoli | un broccolo verde intero |
| 55 | `spinaci.webp` | gli spinaci | un mazzetto di foglie di spinaci freschi |
| 56 | `pesca.webp` | la pesca | una pesca gialla matura |
| 57 | `ciliegia.webp` | la ciliegia | due ciliegie rosse unite dal picciolo |
| 58 | `anguria.webp` | l’anguria | una fetta di anguria rossa |
| 59 | `ananas.webp` | l’ananas | un ananas intero con il ciuffo |
| 60 | `noci.webp` | le noci | alcune noci con il guscio, una aperta a metà |
| 61 | `cioccolato.webp` | il cioccolato | una tavoletta di cioccolato fondente |
| 62 | `succo.webp` | il succo | un bicchiere di succo d'arancia |
| 63 | `cappuccino.webp` | il cappuccino | una tazza di cappuccino con la schiuma |
| 64 | `focaccia.webp` | la focaccia | una focaccia con olio e sale grosso, vista dall'alto |

---

## 4. Se serve una parola che non è in elenco

Aggiungila a `scripts/data/food-vocabulary-extra.mjs` con la stessa forma delle altre: nome del file, parola con l'articolo, tre frasi d'esempio **in italiano** (non si traducono mai), le risposte accettate dall'esercizio e il testo alternativo dell'immagine tradotto in tutte e 9 le lingue. Poi produci l'immagine con il prompt qui sopra.

# Istruzioni per agenti AI

Manuale operativo del progetto. Vale per qualsiasi assistente AI (Claude Code, ChatGPT/Codex, altri): `CLAUDE.md` rimanda qui, questo è l'unico file da tenere aggiornato.

Gli altri due documenti hanno ruoli distinti:

- `DECISIONI_SITO.md` — registro cronologico delle decisioni su sito, contenuti, lingue e SEO. Da leggere prima di modifiche strutturali; ogni nuova decisione va registrata lì nella stessa sessione.
- `REGOLE_LINGUE.md` — **quali parti di una pagina restano in italiano e quali vanno nella lingua del visitatore.**
  Da leggere prima di creare, tradurre o correggere qualsiasi pagina localizzata: le regole valgono sempre, senza eccezioni.
- `SITE_AUDIT.md` — esito dell'ultima revisione dei contenuti.

## Il sito in breve

italianoconmartin.com offre materiali gratuiti per chi studia italiano (letture graduate, favole, grammatica, vocabolario, PDF) e serve a portare visitatori alle lezioni su Preply di Martin e Licia. Ogni pagina esiste in italiano più 8 lingue.

## Architettura (dal 2026-08-25)

Il sito pubblicato su GitHub Pages è la **build Astro**: `npm run build` produce `dist/`, che viene pubblicata.

| Cartella                       | Contenuto                                                                                                                                |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `src/html/<percorso>.html`     | Il contenuto di ogni pagina (da `<main>` alle sezioni finali), HTML puro                                                                 |
| `src/pages/<percorso>.astro`   | Pagina sottile: metadati SEO (title, description, canonical, hreflang, Open Graph, JSON-LD) passati a `SiteLayout`                       |
| `src/layouts/SiteLayout.astro` | Layout unico: head, header con selettore lingua, footer, script                                                                          |
| `src/data/i18n.json`           | Per ognuna delle 9 lingue: nome, bandiera, etichetta accessibile, menu, footer                                                           |
| `public/`                      | File statici pubblicati tali e quali: immagini, PDF, `styles.css`, `script.js`, `robots.txt`, `sitemap.xml`, `CNAME`, redirect `noindex` |

Le rotte `X.html.astro` producono gli URL storici `X.html`: dopo la build, `scripts/migrate/flatten-html.mjs` converte `X.html/index.html` in un file `X.html`. È già agganciato allo script `build`.

`legacy-html/` è il vecchio sito statico, **congelato**: riferimento storico, non è più pubblicato, non va modificato né usato come sorgente. Va rimosso dal repository quando si decide di rinunciare al rollback immediato (oggi tiene i PDF in doppia copia su disco).

## Dove si modifica cosa

| Voglio cambiare…                                 | File da toccare                                                    |
| ------------------------------------------------ | ------------------------------------------------------------------ |
| Il testo di una pagina                           | `src/html/<percorso>.html`                                         |
| Titolo, descrizione, dati SEO di una pagina      | `src/pages/<percorso>.astro`                                       |
| Header, footer, selettore lingua (tutto il sito) | `src/layouts/SiteLayout.astro`                                     |
| Voci di menu, nome lingua, etichette per lingua  | `src/data/i18n.json`                                               |
| Grafica del sito                                 | `public/styles.css` **e** alza `CSS_VERSION` in `SiteLayout.astro` |
| Comportamento interattivo                        | `public/script.js`                                                 |
| Immagini, PDF                                    | `public/assets/`, `public/pdf/`                                    |

Aggiungere una pagina nuova significa creare il frammento in `src/html/` e la pagina in `src/pages/`, più le versioni nelle altre 8 lingue e le voci nella sitemap e negli indici di categoria.

## Regole operative

- **Una pagina nuova non esiste finché non è negli indici.** Ogni volta che si aggiunge una lettura, una favola, una lezione di grammatica o una scheda di vocabolario bisogna, nella stessa sessione:
  1. creare il frammento in `src/html/` e la pagina in `src/pages/`, **in tutte e 9 le lingue**;
  2. aggiungerla alla pagina indice della sua categoria (`letture/`, `favole/`, `grammatica/`, `vocabolario/`) **e a ogni indice che la contiene anche indirettamente** — per esempio una favola va sia in `favole/index.html` sia nella sezione «Favole» di `letture/index.html`, in tutte le lingue;
  3. aggiungerla a `public/sitemap.xml`.

  Controllo veloce prima di chiudere: `node scripts/audit-links.mjs --strict` e un confronto tra i file presenti in `src/html/<categoria>/` e i link presenti negli indici.

- **I livelli di una lettura raccontano le stesse cose, non cose diverse.** A1, A2, B1, B2 e C1 contengono **le stesse informazioni**: cambia la lingua, non il contenuto. A1 le dice con frasi corte e parole comuni, C1 con periodi articolati e lessico preciso, ma chi legge solo A1 non deve perdersi niente di quello che sa chi legge C1. Un livello che aggiunge fatti che gli altri non hanno è un errore da correggere.

  Vale anche per il resto della scheda: le parole utili di ogni livello sono prese da quel livello, e le domande verificano gli stessi fatti con formulazioni via via più difficili. Le domande sono **sempre in italiano**, con la traduzione di servizio in `.q-gloss` solo per A1 e A2, e sotto ognuna c'è un riquadro per scrivere la risposta (`<textarea>` dentro il `<li>`).

  Ogni paragrafo deve contenere almeno un dato concreto: una quantità, un meccanismo, un nome. Le frasi di riempimento («è importante», «svolge un ruolo particolare») vanno sostituite dal fatto che pretendono di riassumere.

- **Aggiungere parole a una scheda di vocabolario significa aggiornare tutto quello che le conta.** Una parola nuova richiede, nello stesso passaggio e in tutte e 9 le lingue: la scheda con le tre frasi d'esempio, l'esercizio «Riconosci la parola», i contatori delle due sezioni, la meta description, la scheda nell'indice del vocabolario e la soglia di `scripts/audit-vocabulary.mjs`. Ci pensa `scripts/expand-food-vocabulary.mjs`, che aggiunge anche una frase da tradurre per le parole che ne hanno una in `foodTranslationExercises`.

  **Una parola senza immagine non entra in pagina**: lo script la salta, così le 9 lingue restano allineate. Il prompt per produrre le illustrazioni e l'elenco di quelle che mancano sono in [docs/prompt-immagini-vocabolario.md](./docs/prompt-immagini-vocabolario.md). Per generarle: `node scripts/generate-image.mjs --slug <nome> --prompt "..."` (o `--prompt-file <path>`), che chiama OpenRouter con la chiave in `.env` (`OPENROUTER_API_KEY`, mai nel repository) e salva già `public/assets/<nome>.webp` e `<nome>-card.webp`.

- **Le immagini generate vanno sempre ripulite dallo sfondo.** Nessun modello produce un bianco puro `#FFFFFF`: viene fuori `#F9F7F7` o simile, e sulla scheda si vede un rettangolo grigio intorno al soggetto. Fra la generazione e l'inserimento in pagina ci va sempre `python scripts/remove-white-background.py <grezze> <pulite>`. Quando il soggetto è bianco anche lui (farina, sale, mozzarella, una medusa, una vela, un gabbiano) il ritaglio a colore gli mangia dei pezzi: per quelle parole si usa `--whiten=slug1,slug2`, che corregge il colore senza ritagliare. Lo script segnala i sospetti, ma **le immagini vanno guardate a occhio** prima di pubblicare: un foglio di contatto è il modo più rapido.

- **Il modello dipende da quanto conta l'immagine** (decisione 2026-09-03): foto semplici e isolate delle schede di vocabolario con `openai/gpt-image-1-mini` a `quality: "low"` (circa $0.0024 l'una); testate degli articoli e immagini di sezione con `google/gemini-3-pro-image` (circa $0.13), perché sono la prima cosa che si vede. Per le testate va chiesto esplicitamente uno stile illustrativo morbido, senza contorni neri: il modello di default vira al cartone animato e stona con le testate esistenti.

- **Una lezione di vocabolario nuova non si scrive da zero.** `scripts/create-sea-vocabulary.mjs` è il modello: parte dalla lezione della cucina già tradotta in ognuna delle 9 lingue e sostituisce solo titolo, testata, parole e contatori, così tutte le etichette di servizio restano quelle già tradotte. Poi `node scripts/convert-vocabulary-images.mjs <cartella-pulita>` porta le immagini nel formato del sito, e la lezione va registrata in `scripts/audit-vocabulary.mjs` (elenco `routes` **e** elenco dei link dell'indice italiano in fondo al file).

  Le pagine di vocabolario **non hanno PDF**: `scripts/generate-pdfs.py` copre solo letture, favole e grammatica. Se un giorno si aggiungono, vanno rigenerati a ogni parola nuova.

- **Prima di pubblicare** devono passare, nell'ordine:

  ```
  node scripts/audit-language-mix.mjs --strict
  npm run build
  node scripts/audit-site.mjs --strict
  node scripts/audit-links.mjs --strict
  npm run audit:vocabulary
  npm run audit:grammar-seo
  npm run check
  ```

  `audit-language-mix` analizza la sorgente (`src/html` + `src/pages`) e fa rispettare `REGOLE_LINGUE.md`: va eseguito **prima** della build, perché segnala errori che si correggono nei sorgenti.

  Gli audit analizzano `dist/` (si può cambiare cartella con la variabile `SITE_ROOT`). Il workflow di deploy li esegue comunque e blocca la pubblicazione se falliscono.

- **Rete di sicurezza**: `node scripts/migrate/verify-parity.mjs --ignore-intended-fixes` confronta la build con il sito storico neutralizzando le correzioni volute. Dal 2026-09-01 la base di confronto è **490 differenze su 1119 pagine**, tutte volute: le 36 precedenti (18 indici senza elenco testuale, 9 home riscritte, 9 pagine «Chi siamo» e la home inglese con la tariffa di 12 €) più le 469 pagine localizzate riparate secondo `REGOLE_LINGUE.md`. Alle 485 del 2026-08-25 si aggiungono le 9 pagine della lettura «Il latte materno», riscritta a mano il 2026-08-31. Dal 2026-09-01 si aggiunge `vocabolario/cibo.html`, la pagina italiana della lezione «Il cibo» ampliata a 16 parole (le 8 localizzate erano già fra le 469). Se il numero sale oltre 490, è cambiato qualcosa che non era previsto: va capito prima di pubblicare. Le pagine **«extra in dist»** sono invece quelle nate dopo la migrazione e assenti da `legacy-html/`: dal 2026-09-02 sono **9**, le nove lingue della lettura «La storia della mafia in Italia».

- Le lingue sono `it` (senza prefisso) più `en`, `es`, `fr`, `cs`, `pl`, `tr`, `de`, `ja`. Canonical e hreflang reciproci obbligatori.

- **Mescolanza delle lingue: vale `REGOLE_LINGUE.md`, sempre.** In sintesi: l'italiano è ciò che si impara (brani, esempi, coniugazioni, forme citate, domande di comprensione) e non si traduce mai, marcato `lang="it"`; la lingua del visitatore è ciò che spiega (menu, titoli, spiegazioni, istruzioni, etichette, attributi `alt`/`aria-label`/`data-hint`, SEO) e va tradotta al 100%. Il marchio «Italiano con Martin» e i nomi Martin e Licia non si traducono in nessuna lingua. Prima di tradurre in automatico vanno protetti i blocchi della lingua-oggetto: la lista in `scripts/generate-localized-resources.mjs` è incompleta e ha già rotto centinaia di pagine.

- Gli URL pubblici non si cambiano: sono indicizzati. I vecchi percorsi restano come redirect `noindex` in `public/`.

- Il deploy parte da solo al push su `main` (`.github/workflows/deploy.yml`): build → audit → pubblicazione.

## Da non fare

- **Non eseguire `scripts/migrate/extract.mjs`**: rigenererebbe `src/pages/` e `src/html/` da `legacy-html/`, cancellando tutte le correzioni successive alla migrazione. È protetto dal flag `--force-regenerate`.
- Non modificare `legacy-html/`: non è più la sorgente.
- Non toccare `dist/`: è generata, viene ricostruita a ogni build.
- Non cambiare `public/styles.css` senza alzare `CSS_VERSION`: i browser continuerebbero a mostrare la versione vecchia.

## Sviluppo locale

```
npm run dev
```

Avvia il server di sviluppo su http://localhost:4321 con ricarica automatica.

```
npm run build && npm run preview
```

Mostra il sito **come sarà pubblicato**, cioè la build reale. Da preferire per verificare URL `.html`, redirect e asset. La configurazione per l'anteprima nel browser sta in `.claude/launch.json`.

## Documentazione Astro

https://docs.astro.build — in particolare [routing](https://docs.astro.build/en/guides/routing/), [componenti](https://docs.astro.build/en/basics/astro-components/), [stili](https://docs.astro.build/en/guides/styling/), [i18n](https://docs.astro.build/en/guides/internationalization/).

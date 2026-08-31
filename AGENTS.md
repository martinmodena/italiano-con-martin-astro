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

- **Rete di sicurezza**: `node scripts/migrate/verify-parity.mjs --ignore-intended-fixes` confronta la build con il sito storico neutralizzando le correzioni volute. Dal 2026-08-31 la base di confronto è **489 differenze su 1119 pagine**, tutte volute: le 36 precedenti (18 indici senza elenco testuale, 9 home riscritte, 9 pagine «Chi siamo» e la home inglese con la tariffa di 12 €) più le 469 pagine localizzate riparate secondo `REGOLE_LINGUE.md`. Alle 485 del 2026-08-25 si aggiungono le 9 pagine della lettura «Il latte materno», riscritta a mano il 2026-08-31. Se il numero sale oltre 489, è cambiato qualcosa che non era previsto: va capito prima di pubblicare.

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

# Istruzioni per agenti AI

Manuale operativo del progetto. Vale per qualsiasi assistente AI (Claude Code, ChatGPT/Codex, altri): `CLAUDE.md` rimanda qui, questo è l'unico file da tenere aggiornato.

Gli altri due documenti hanno ruoli distinti:

- `DECISIONI_SITO.md` — registro cronologico delle decisioni su sito, contenuti, lingue e SEO. Da leggere prima di modifiche strutturali; ogni nuova decisione va registrata lì nella stessa sessione.
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

- **Prima di pubblicare** devono passare, nell'ordine:

  ```
  npm run build
  node scripts/audit-site.mjs --strict
  node scripts/audit-links.mjs --strict
  npm run audit:vocabulary
  npm run audit:grammar-seo
  npm run check
  ```

  Gli audit analizzano `dist/` (si può cambiare cartella con la variabile `SITE_ROOT`). Il workflow di deploy li esegue comunque e blocca la pubblicazione se falliscono.

- **Rete di sicurezza**: `node scripts/migrate/verify-parity.mjs --ignore-intended-fixes` confronta la build con il sito storico neutralizzando le correzioni volute. Deve restare a **0 differenze su 1119 pagine**. Se il numero sale, è cambiato qualcosa che non era previsto: va capito prima di pubblicare.

- Le lingue sono `it` (senza prefisso) più `en`, `es`, `fr`, `cs`, `pl`, `tr`, `de`, `ja`. Canonical e hreflang reciproci obbligatori. I brani di studio restano in italiano con `lang="it"`; interfaccia, istruzioni, vocabolario e domande vanno localizzati.

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

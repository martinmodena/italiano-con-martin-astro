# Istruzioni per agenti AI

## Architettura (dal 2026-08-25)

Il sito pubblicato su GitHub Pages (italianoconmartin.com) è la **build Astro**: `npm run build` → `dist/`.

Sorgente dei contenuti:

- `src/html/<percorso>.html` — frammento di contenuto di ogni pagina (da `<main>` alle sezioni CTA incluse), HTML puro.
- `src/pages/<percorso>.astro` — pagina sottile: importa il frammento e i metadati SEO (title, description, canonical, hreflang, Open Graph, JSON-LD) e li passa a `SiteLayout`.
- `src/layouts/SiteLayout.astro` — layout unico: head SEO, header con selettore lingua, footer, script. Modifiche a header/footer/head si fanno QUI, una volta sola per tutto il sito. Contiene `CSS_VERSION`: va alzata a ogni modifica di `public/styles.css`, così i browser scaricano il foglio aggiornato.
- `src/data/i18n.json` — per ciascuna delle 9 lingue: nome, bandiera, etichetta accessibile del selettore, navigazione e footer.
- `public/` — asset statici pubblicati tali e quali: immagini, PDF, `styles.css`, `script.js`, `robots.txt`, la sitemap curata `sitemap.xml`, `CNAME`, le pagine redirect `noindex`.

Le rotte `X.html.astro` producono URL storici `X.html` (dopo la build `scripts/migrate/flatten-html.mjs` appiattisce `X.html/index.html` in file `X.html`; è agganciato allo script `build`).

`legacy-html/` è il vecchio sito statico, **congelato come riferimento storico: non modificarlo e non usarlo come sorgente**. Gli script `scripts/migrate/{extract,sync-static,verify-parity}.mjs` sono serviti alla migrazione (parità verificata: 1119/1119 pagine identiche).

## Regole operative

- Leggere `DECISIONI_SITO.md` prima di modificare struttura, contenuti, lingue o SEO; registrare lì ogni nuova decisione nella stessa sessione.
- Prima del deploy devono passare: `npm run build`, poi `node scripts/audit-site.mjs --strict`, `node scripts/audit-links.mjs --strict`, `npm run audit:vocabulary`, `npm run audit:grammar-seo`. Gli audit leggono `dist/` (override con `SITE_ROOT`).
- `npm run verify:parity` confronta la build con il sito storico `legacy-html/`. Le correzioni volute applicate dopo la migrazione sono neutralizzate da `node scripts/migrate/verify-parity.mjs --ignore-intended-fixes`, che deve restare a zero differenze: se aumenta, è cambiato qualcosa di non voluto.
- `scripts/migrate/extract.mjs` NON va eseguito: rigenererebbe `src/pages/` e `src/html/` da `legacy-html/`, cancellando le correzioni successive alla migrazione.
- `npm run check` (astro check + eslint + prettier) deve restare verde.
- Ogni risorsa esiste in italiano più 8 lingue (`en`, `es`, `fr`, `cs`, `pl`, `tr`, `de`, `ja`) con canonical e hreflang reciproci; i brani di studio restano in italiano (`lang="it"`), interfaccia e domande localizzate.
- Il deploy parte dal push su `main` (workflow `.github/workflows/deploy.yml`): build → audit → publish su GitHub Pages.

## Development

Server di sviluppo in background:

```
astro dev --background
```

Gestione: `astro dev stop`, `astro dev status`, `astro dev logs`.

## Documentazione Astro

https://docs.astro.build — in particolare: [routing](https://docs.astro.build/en/guides/routing/), [componenti](https://docs.astro.build/en/basics/astro-components/), [contenuti](https://docs.astro.build/en/guides/content-collections/), [stili](https://docs.astro.build/en/guides/styling/), [i18n](https://docs.astro.build/en/guides/internationalization/).

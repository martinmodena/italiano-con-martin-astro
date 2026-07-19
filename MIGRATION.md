# Migrazione HTML in AstroWind

Questo progetto e stato creato dal template AstroWind e configurato per il deploy statico su GitHub Pages.

## Import delle pagine HTML

Le pagine HTML originali non erano presenti nel workspace. Per convertirle:

1. Copia i file del vecchio sito dentro `legacy-html`.
2. Mantieni la stessa struttura di cartelle del sito pubblicato.
3. Esegui `npm run import:html`.

Lo script genera pagine Astro in `src/pages` e copia gli asset non HTML in `public`, cosi gli URL restano il piu possibile compatibili:

- `legacy-html/index.html` diventa `/`
- `legacy-html/chi-siamo.html` diventa `/chi-siamo`
- `legacy-html/prodotti/index.html` diventa `/prodotti`

## GitHub Pages

La workflow `.github/workflows/deploy.yml` compila il sito e pubblica `dist` su GitHub Pages a ogni push su `main`.

Nel repository GitHub imposta:

- Settings -> Pages -> Build and deployment -> Source: `GitHub Actions`
- Branch principale: `main`

Per un repository utente o organizzazione chiamato `nomeutente.github.io`, imposta `BASE_PATH` a `/` nella workflow. Per un repository progetto, il valore predefinito `/${{ github.event.repository.name }}` e quello corretto.

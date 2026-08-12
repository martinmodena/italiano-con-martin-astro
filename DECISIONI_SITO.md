# Decisioni del sito

## Sorgente principale

Il repository `italiano-con-martin-astro` e la sorgente principale del sito: il deploy GitHub Pages pubblica `legacy-html/`. Il repository statico `italiano-con-martin` non deve essere usato come riferimento per le modifiche future.

## Lingue e SEO

- L'italiano resta la lingua predefinita con `/letture/`, `/grammatica/` e `/favole/`.
- Le lingue internazionali usano pagine statiche dedicate: `/en/`, `/es/`, `/fr/`, `/cs/`, `/pl/`, `/tr/`, `/de/` e `/ja/`.
- Le pagine localizzate devono avere `lang`, canonical, `hreflang` reciproci, meta description, Open Graph e presenza nella sitemap.
- Il selettore delle lingue deve mostrare le bandiere e collegare a URL permanenti.

## Dominio obbligatorio

Il sito deve funzionare sempre sia su GitHub Pages sia su `https://italianoconmartin.com/`. Ogni deploy deve verificare homepage e almeno una pagina localizzata, per esempio `/es/`, su entrambi gli indirizzi. Il dominio personalizzato e parte obbligatoria dei controlli SEO, navigazione, sitemap e pubblicazione.

## Regola operativa

Ogni indicazione contenuta in un prompt che modifica il sito, la struttura, i contenuti, le lingue, il dominio o la SEO deve essere registrata in questo file nella stessa sessione di lavoro.

## 2026-08-06 - Selettore lingua

- Il selettore lingua deve essere presente direttamente nell'HTML pubblicato, non creato solo via JavaScript.
- Le bandierine sono accettate come segnale visivo rapido, accompagnate sempre dal nome testuale della lingua.
- La home italiana deve dichiarare gli `hreflang` verso tutte le home localizzate e `x-default`.
- Il JavaScript non deve tradurre dinamicamente la home: ogni lingua deve restare una pagina statica indicizzabile.

## Audit 2026-08-12

La revisione completa ha rilevato 41 risorse educative italiane, 32 soli hub localizzati, nessuna pagina localizzata per le singole risorse e nessun PDF. E stato aggiunto `scripts/audit-site.mjs`, eseguibile con `npm run audit:site`, e il workflow lo esegue prima della preparazione del deploy. Le pagine localizzate non devono essere generate come copie con metadata tradotti: spiegazioni, istruzioni, vocabolario e domande devono essere tradotti e revisionati, mentre i brani di studio restano in italiano.

Il sito non va considerato completo finche l'audit segnala risorse mancanti o PDF mancanti.

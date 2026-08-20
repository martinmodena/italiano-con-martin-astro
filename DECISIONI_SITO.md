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

## 2026-08-12 - Seconda insegnante

- Licia e una seconda insegnante di italiano presentata sul sito insieme a Martin.
- Licia e descritta come paziente, appassionata d'arte e particolarmente brava con la grammatica.
- Martin e descritto come appassionato di scienza, tecnologia ed etimologia.
- Entrambi hanno una tariffa di 10 euro per lezione.
- Il profilo Preply di Licia deve essere collegato a `https://preply.in/LICIA6IT2176799611?ts=17865248`; il profilo di Martin resta collegato a `https://preply.com/it/tutor/5086125`.
- La homepage italiana e tutte le homepage localizzate devono presentare entrambi i profili, con foto, descrizione, prezzo e collegamento Preply.

## 2026-08-12 - Struttura multilingue delle risorse

- Ogni risorsa educativa deve avere una pagina statica dedicata nelle lingue `en`, `es`, `fr`, `cs`, `pl`, `tr`, `de` e `ja`, oltre alla pagina italiana originale.
- Le URL localizzate usano `/readings/`, `/stories/` e `/grammar/`, con il livello grammaticale mantenuto nel percorso.
- Il testo di studio italiano resta in italiano; interfaccia, istruzioni, etichette, metadata, navigazione, vocabolario e domande devono essere localizzati e revisionati.
- Ogni pagina deve avere canonical, hreflang reciproci, selettore statico con bandiera e nome della lingua, asset relativi funzionanti e sitemap aggiornata.
- `scripts/generate-localized-resources.mjs` genera localmente la struttura e `npm run audit:site` deve restituire zero errori prima del deploy.
- Le categorie e gli slug delle risorse devono essere nella lingua della pagina, non in italiano. Per esempio, la lezione inglese sul verbo essere usa `/en/grammar/a1/verb-to-be.html`, mentre la versione spagnola usa `/es/gramatica/a1/verbo-ser.html`.
- Titolo SEO, meta description, intestazioni, spiegazioni, istruzioni, navigazione, vocabolario e domande devono essere coerenti con la lingua selezionata. I titoli delle lezioni di grammatica devono includere l'equivalente locale dell'intento di ricerca "grammatica italiana".
- Il materiale oggetto di studio, come brani, esempi e coniugazioni italiane, resta in italiano ed e marcato semanticamente con `lang="it"` quando opportuno.
- I vecchi URL con categorie o slug italiani restano disponibili soltanto come redirect statici `noindex` verso il nuovo URL canonico localizzato, per non perdere collegamenti esistenti.
- Gli `hreflang`, il selettore lingua e la sitemap devono puntare esclusivamente agli URL canonici localizzati.
- L'audit di produzione deve essere eseguito in modalita rigorosa con `node scripts/audit-site.mjs --strict` e deve verificare anche coerenza linguistica, canonical, `hreflang`, redirect e disponibilita dei PDF.
- Ogni risorsa offre PDF per lingua e livello: cinque livelli per letture e favole, un livello per le lezioni di grammatica. L'inventario corrente e di 945 PDF.

## 2026-08-12 - Header responsive e fotografie

- Tutte le fotografie personali di Martin e Licia devono essere presentate con un ritaglio circolare, inclusi avatar, hero e schede insegnante, su desktop e mobile.
- L'header deve passare al menu compatto gia sui viewport stretti da tablet, prima che marchio, selettore lingua e navigazione possano sovrapporsi o troncare il nome.
- Su mobile il marchio occupa la prima riga con il pulsante menu; il selettore lingua occupa una seconda riga completa.

## 2026-08-12 - Titoli di studio e PDF per livello

- Nelle pagine localizzate di letture e favole, il titolo principale e i metadati restano tradotti per il lettore e per la SEO.
- I titoli interni dei blocchi A1, A2, B1, B2 e C1 fanno parte del materiale di studio: devono restare in italiano ed essere marcati con `lang="it"`, come il relativo brano.
- Nell'introduzione deve comparire un solo PDF completo contenente tutti i livelli A1-C1.
- Il PDF di un singolo livello deve comparire dentro il relativo blocco A1, A2, B1, B2 o C1, vicino al racconto che scarica.
- La generazione automatica non viene aggiunta al workflow di produzione finché i testi localizzati non sono stati revisionati; non si pubblicano copie incomplete.

## 2026-08-12 - Identita nei PDF e completezza degli indici

- Tutti i PDF devono mostrare `italianoconmartin.com` in modo evidente e cliccabile, sia nel pie di pagina sia in un blocco finale dedicato.
- Il blocco finale dei PDF deve includere una foto circolare di Martin e identificare chiaramente `Italiano con Martin`.
- I PDF di letture e favole devono includere l'immagine editoriale corrispondente al contenuto.
- Le pagine indice delle storie devono offrire un elenco testuale completo e immediatamente visibile di tutte le storie, oltre alle schede illustrate.
- L'audit deve fallire se una storia esistente non e collegata dall'indice in qualsiasi lingua.

## 2026-08-12 - Scelta dell'insegnante e pagina Chi siamo

- Le call to action finali non devono proporre soltanto Martin: devono permettere di scegliere chiaramente tra Martin e Licia, mostrando foto circolare, caratteristica principale e collegamento Preply di ciascuno.
- Le call to action devono includere anche un collegamento alla pagina dei docenti e un contatto WhatsApp.
- Il sito deve avere una pagina `Chi siamo` dedicata a Martin e Licia, localizzata in tutte le lingue, con profili, caratteristiche, tariffa di 10 euro, collegamenti Preply e WhatsApp.
- La pagina `Chi siamo` deve avere URL localizzato, canonical, hreflang reciproci, metadati SEO, dati strutturati e presenza nella sitemap.
- La navigazione e il footer devono collegare la pagina dei docenti nella lingua corrente.

## 2026-08-12 - Prestazioni e immagini

- Le immagini pubblicate devono usare formati moderni e dimensioni proporzionate all'uso; le fotografie originali ad alta risoluzione non devono essere referenziate direttamente dalle pagine.
- La foto di Licia usa `/assets/licia-portrait.webp`, ottimizzata a 800 x 800 pixel e meno di 100 KB; l'audit deve fallire se ricompare un riferimento alla PNG originale.
- Le fotografie visibili nella prima schermata devono essere caricate subito con priorita alta; le copie nelle schede e nelle call to action piu in basso devono usare caricamento differito.
- Ogni immagine deve dichiarare dimensioni intrinseche e decodifica asincrona quando possibile, per ridurre spostamenti del layout e blocchi durante il rendering.
- L'audit deve segnalare qualsiasi immagine locale effettivamente referenziata dalle pagine che superi 400 KB.

## 2026-08-12 - Integrita delle URL multilingue

- L'italiano resta senza prefisso; ogni altra lingua usa il proprio prefisso ISO (`/en/`, `/es/`, `/fr/`, `/cs/`, `/pl/`, `/tr/`, `/de/`, `/ja/`).
- Le categorie e gli slug canonici devono essere localizzati nella lingua della pagina; i vecchi percorsi restano esclusivamente redirect `noindex` verso il nuovo canonical.
- La sitemap deve essere XML valido con una sola dichiarazione, URL univoci e soltanto pagine canoniche indicizzabili.
- Ogni canonical deve coincidere con il percorso pubblico della pagina e ogni redirect deve puntare a una pagina canonica esistente.
- L'audit deve fallire in caso di prefisso lingua incoerente, canonical duplicato, redirect presente in sitemap o URL sitemap privo di pagina canonica.

## 2026-08-20 - Coerenza del menu

- L'header di ogni pagina italiana deve mantenere lo stesso ordine: marchio “Italiano con Martin”, selettore lingua, quindi Grammatica, Letture, Vocabolario e Chi siamo.
- Le pagine delle risorse non devono invertire marchio e selettore lingua: l'ordine uniforme evita spostamenti visivi tra una pagina e l'altra.

## 2026-08-20 - Completezza delle pagine-menu

- Ogni pagina-menu o indice di categoria deve collegare in modo visibile tutti gli articoli e le pagine pubblicati nella propria categoria: Letture, Favole, Grammatica e Vocabolario.
- La stessa completezza e obbligatoria per ogni lingua: una risorsa non puo essere pubblicata se manca dal relativo indice localizzato.
- L'audit rigoroso deve fallire in presenza di una pagina-menu mancante o di un articolo non collegato dal suo indice.

## 2026-08-20 - Comando di selezione lingua

- Nell'header il comando per scegliere la lingua mostra soltanto la bandiera della lingua corrente, senza sigla testuale, freccia o contenitore circolare.
- Il menu aperto conserva bandiere e nomi completi delle lingue, per rendere ogni scelta immediatamente riconoscibile e accessibile.

## 2026-08-20 - Colore dell'icona WhatsApp

- L'icona WhatsApp usa sempre il verde ufficiale `#25D366` quando il collegamento è su uno sfondo chiaro.
- Su pulsanti o aree con sfondo scuro o colorato, l'icona passa al bianco per mantenere il contrasto; si applica la classe `whatsapp-on-dark` se il contesto non è già riconosciuto dagli stili globali.

## 2026-08-20 - Altezza coerente dell'header

- L'header desktop deve avere sempre altezza `88px`, in home, indici, articoli e pagine localizzate; contenuti e stili locali non possono modificarne l’altezza.
- Tutte le pagine condividono gli stessi stili globali dell’header; una nuova versione del CSS rende la correzione visibile non appena scade la cache esistente.

## 2026-08-20 - Immagini della sezione Abbigliamento

- Il costume intero mostra un modello sportivo fucsia con spalline incrociate; il reggiseno nero con coppe modellate e le mutande nere fanno parte dello stesso coordinato visivo.
- I collant neri sono mostrati aperti e verticali, dalla vita ai piedi, mai piegati o arrotolati.
- Questi quattro asset sono immagini WebP trasparenti di `720 × 720 px`, ottimizzate per le card e gli esercizi: ogni file deve rimanere ben al di sotto del limite generale di 400 KB.
- Il bikini è un set completo isolato, senza modella: tessuto blu navy a coste con profili avorio coordinati su top e slip, anch’esso in WebP trasparente `720 × 720 px` ottimizzato.

## 2026-08-20 - Risposte alle domande nelle letture

- Ogni domanda a risposta libera deve essere disposta verticalmente: testo della domanda, poi una textarea a tutta larghezza del riquadro, senza affiancamenti o sovrapposizioni.
- I campi mantengono altezza minima, padding, bordo e stato di focus coerenti; la correzione è globale per tutte le letture e per ogni lingua.

## 2026-08-20 - Carattere informativo delle letture

- La lettura sul latte materno è un contenuto informativo e didattico autonomo: non deve citare, collegare o presentare jw.org come fonte di riferimento.
- La nota finale descrive lo scopo educativo e il limite sanitario del contenuto; la stessa regola vale per tutte le versioni linguistiche della lettura.

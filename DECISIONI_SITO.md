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
- I leggings sono sportivi fucsia, a vita alta e lunghezza alla caviglia, isolati senza persona; usano WebP trasparente `720 × 720 px` ottimizzato.

## 2026-08-20 - Risposte alle domande nelle letture

- Ogni domanda a risposta libera deve essere disposta verticalmente: testo della domanda, poi una textarea a tutta larghezza del riquadro, senza affiancamenti o sovrapposizioni.
- I campi mantengono altezza minima, padding, bordo e stato di focus coerenti; la correzione è globale per tutte le letture e per ogni lingua.

## 2026-08-20 - Carattere informativo delle letture

- La lettura sul latte materno è un contenuto informativo e didattico autonomo: non deve citare, collegare o presentare jw.org come fonte di riferimento.
- La nota finale descrive lo scopo educativo e il limite sanitario del contenuto; la stessa regola vale per tutte le versioni linguistiche della lettura.

## 2026-08-20 - Bandiere nel selettore della lingua

- Il selettore nell'header mostra la bandiera SVG della lingua corrente, non una sigla testuale o un'emoji che possa trasformarsi in lettere a seconda del sistema operativo.
- Nel menu a tendina ogni lingua è preceduta dalla stessa bandierina; il nome completo della lingua resta visibile per chiarezza.
- Le bandiere sono asset locali, leggeri e comuni a tutte le pagine, così il comportamento resta identico in ogni versione del sito.

## 2026-08-25 - Migrazione ad Astro come sorgente e builder

- Il sito pubblicato è la build Astro (`npm run build` → `dist/`); il workflow di deploy non copia più `legacy-html/`.
- La sorgente dei contenuti è nel progetto Astro: frammenti HTML in `src/html/`, pagine sottili in `src/pages/`, layout unico `src/layouts/SiteLayout.astro`, testi UI per lingua in `src/data/i18n.json`.
- Gli asset statici (immagini, PDF, styles.css, script.js, robots.txt, sitemap.xml, CNAME, redirect noindex) vivono in `public/` e vengono pubblicati tali e quali.
- Gli URL restano identici al sito storico, compresi i percorsi `.html` (garantiti da `scripts/migrate/flatten-html.mjs` dopo la build) e gli slug giapponesi.
- La parità con il sito storico è stata verificata pagina per pagina con `npm run verify:parity`: 1119 pagine su 1119 identiche a livello DOM.
- La migrazione corregge il bug delle 11 pagine (tutte le home) con `<head></head>` vuoto e i metadati SEO nel body: ora i metadati stanno nel head reale.
- Gli audit (`audit:site`, `audit:vocabulary`, `audit:grammar-seo`) esaminano `dist/` (variabile `SITE_ROOT` per cambiare cartella) e girano in CI dopo la build, prima del deploy.
- `legacy-html/` resta come riferimento storico congelato: non va più modificato; `npm run import:html` e i generatori collegati sono stati ritirati dagli script npm.
- La sitemap resta il file statico curato `public/sitemap.xml`; l'integrazione sitemap di Astro è disattivata.
- `legacy-html/` va rimosso dal repository soltanto dopo il primo deploy Astro andato a buon fine: finché resta presente, un rollback immediato è possibile ripristinando il vecchio workflow. Fino ad allora i PDF risultano duplicati su disco (in `legacy-html/pdf/` e `public/pdf/`); Git non duplica i contenuti identici, quindi il costo è solo nella copia di lavoro.

## 2026-08-25 - Header uniforme, etichette accessibili e asset unici

- L'ordine dell'header è uniforme su tutte le pagine e tutte le lingue: marchio, selettore lingua, menu. L'eccezione che invertiva marchio e selettore su 9 pagine (le 8 traduzioni della lettura sul latte materno e `privacy.html`) è stata eliminata; l'header è generato una sola volta da `SiteLayout.astro`.
- L'etichetta accessibile del selettore lingua è tradotta nella lingua della pagina ed è definita in `src/data/i18n.json` (`languages.<lingua>.summaryAria`). Prima il sito alternava `Language`, `Scegli lingua` e `Choose language` senza criterio.
- Ogni pagina carica `styles.css` da un solo indirizzo, con un'unica query di versione definita da `CSS_VERSION` in `SiteLayout.astro`. Quando cambia `public/styles.css` si alza quella costante: prima le tre varianti in circolazione creavano copie di cache disallineate tra una pagina e l'altra.
- La home inglese usava percorsi relativi errati (`/en/styles.css`, `/en/script.js`): il JavaScript era di fatto disattivato su quella pagina. Corretta.
- Nessuna pagina può caricare lo stesso file sotto indirizzi diversi né referenziare file inesistenti: lo verifica `npm run audit:links`, eseguito in CI con `--strict` prima del deploy.
- `scripts/migrate/extract.mjs` non va più eseguito: rigenererebbe le pagine da `legacy-html/` cancellando queste correzioni. È protetto dal flag `--force-regenerate`.

## 2026-08-25 - Ordine CSS, indici e home multilingua

- **Ordine dei fogli di stile.** In `SiteLayout.astro` `styles.css` va caricato **prima** dei CSS di pagina (`vocabulary.css`, `grammar-lesson.css`, `reading-answers.css`). La migrazione ad Astro aveva invertito l'ordine rispetto al sito storico: la regola generale `.section h2` vinceva sulle regole di pagina a parita di specificita e i titoli delle schede di vocabolario e dei riquadri di grammatica venivano resi a 60px invece che a 23px e 32px. Ripristinato l'ordine corretto.
- **Elenco testuale a inizio pagina rimosso.** Il blocco `.resource-directory` («Tutte le letture», «Tutte le storie») e stato tolto da tutti gli indici di `letture/` e `favole/` in tutte le lingue: era ridondante rispetto alle schede con immagine sotto. `scripts/generate-localized-resources.mjs` non lo ricrea piu, si limita a rimuovere eventuali residui.
- **Ogni pagina nuova va negli indici.** Regola operativa aggiunta ad `AGENTS.md`: una lettura, una favola, una lezione o una scheda esiste solo se compare anche nell'indice della sua categoria, negli indici che la contengono indirettamente (una favola sta sia in `favole/` sia nella sezione «Favole» di `letture/`) e nella sitemap, in tutte e 9 le lingue. Applicata subito recuperando «I vestiti nuovi dell'imperatore», che mancava dagli indici delle letture in tutte le lingue.
- **Home: Martin e Licia insieme.** L'hero della home nomina e mostra entrambi gli insegnanti (foto doppia, badge «Martin e Licia», testo al plurale) in tutte le lingue.
- **Home localizzate allineate.** Le home di `es`, `fr`, `de`, `cs`, `pl`, `tr`, `ja` avevano meno contenuto di quella italiana e inglese: mancavano i dettagli della lezione, la nota sotto i pulsanti, la riga di garanzie, il badge sulle foto, la fascia «01/02/03» e la sezione «Scegli il tuo livello». Sono state riscritte sulla stessa struttura di italiano e inglese, con testi tradotti.
- **Quadrato bianco decorativo rimosso.** `.landing-hero::before` disegnava un quadrato bianco arrotondato in alto a sinistra dell'hero: letto come difetto grafico e non come decorazione, e stato eliminato.

## 2026-08-25 - Foto dell'hero pari e tariffa a 12 €

- **Le due foto dell'hero hanno la stessa dimensione.** Prima Martin occupava `min(54%,300px)` e Licia `min(46%,250px)` con un ribasso di 42px: Licia risultava piu piccola, spostata in basso e passava inosservata (in alcune lingue sembrava proprio assente, anche se il markup la conteneva in tutte e 9). Ora entrambe usano `.teacher-photo-item` con `width:min(50%,220px)` e sono allineate in alto.
- **Ogni foto ha la sua etichetta.** Sotto ciascun cerchio c'e una pillola bianca con il nome dell'insegnante (`.teacher-photo-name`): «Martin» e «Licia» in otto lingue, «マルティン» e «リチア» in giapponese. Il badge centrale non ripete piu i nomi e riporta solo il ruolo tradotto («Insegnanti madrelingua» e equivalenti).
- **Il badge segue le foto nel flusso.** `.teacher-badge` non e piu posizionato in assoluto sul fondo del riquadro: con testi lunghi (tedesco: «Lehrkräfte mit Muttersprache Italienisch») andava a capo su tre righe e copriva le etichette dei nomi. Ora sta sotto le foto con un margine di 20px e si adatta alla lunghezza del testo in ogni lingua.
- **Tariffa: 12 € per entrambi gli insegnanti.** Il prezzo passa da 10 a 12 in ogni punto in cui compare: hero, fascia «01/02/03», schede insegnante, pagine «Chi siamo», title, meta description, Open Graph e JSON-LD, in tutte e 9 le lingue e in ogni formato locale (`12€`, `12 €`, `€12`, `12 euro/eur/euros/euroluk`, `12ユーロ`). Aggiornati anche gli script di manutenzione `scripts/sync-english-home.mjs`, `scripts/update-teacher-journey.mjs` e `scripts/update-teacher-profiles.mjs`, che altrimenti reintrodurrebbero 10 €.
- **Parita di migrazione.** La base di confronto di `verify-parity.mjs --ignore-intended-fixes` sale da 26 a 36 differenze volute: alle 26 precedenti si aggiungono le 9 pagine «Chi siamo» e la home inglese, cambiate dal nuovo prezzo.

## 2026-08-25 - Regole della mescolanza delle lingue

- Le regole complete stanno in `REGOLE_LINGUE.md`, richiamato da `AGENTS.md`: sono vincolanti per ogni pagina, in tutte e 9 le lingue.
- **Principio.** Ogni pagina localizzata contiene due lingue con due ruoli: l'italiano e la lingua-oggetto (cio che si impara) e non si traduce mai; la lingua del visitatore e la lingua-veicolo (cio che spiega) e va tradotta al 100%. Criterio operativo: se traducendo una stringa la pagina non insegna piu la stessa cosa, quella stringa resta in italiano.
- **Restano in italiano** con `lang="it"`: brani, favole, dialoghi, frasi di esempio, tabelle di coniugazione e desinenze, articoli/pronomi/preposizioni/verbi citati come oggetto della lezione, forme sbagliate negli errori tipici, testo degli esercizi da completare, parole del vocabolario, soluzioni proposte, titoli dei blocchi per livello, nomi propri dentro le frasi italiane.
- **Vanno tradotti**: menu, header, footer, briciole di pane, H1 e metadati SEO, spiegazioni, istruzioni, etichette di servizio (`Persona`, `Forma`, `Esempio`, `Identita`, `Presente`...), `Errato:`/`Corretto:`, suggerimenti degli esercizi, pulsanti, e tutti gli attributi testuali (`alt`, `aria-label`, `placeholder`, `title`, `data-hint`).
- **Frasi di traduzione libera.** La frase di partenza e nella lingua del visitatore. L'inglese e corretto solo nella versione inglese e in quella italiana.
- **Marchio e nomi.** «Italiano con Martin», «Martin» e «Licia» non si traducono né si adattano in nessuna lingua: mai «Martín». Unica eccezione, le etichette sotto le foto in giapponese.
- **Blocchi misti.** Riquadri come `.rule-card`, `.example`, `.mistake`, `.cols`, `.grid .card`, `.italian-box`, le tabelle e le descrizioni delle schede negli indici vanno tradotti elemento per elemento: etichetta nella lingua del visitatore, esempio italiano intatto.
- **Citazione dei termini italiani.** Nessuna virgoletta in `title`, H1, H2 e link: si scrive `El verbo italiano essere (ser y estar)`. Corsivo con `<em lang="it">` nel testo corrente. Virgolette curve solo per una forma isolata dentro un'istruzione o un suggerimento.
- **Termini grammaticali intraducibili.** Il nome italiano e sempre la forma principale (`passato prossimo`, `imperfetto`, `congiuntivo`, `passato remoto`); l'equivalente locale si mette fra parentesi una sola volta per pagina e solo se e davvero equivalente, altrimenti si usa una descrizione breve. Vietati `presente perfecto` per `passato prossimo` e `pasado remoto` per `passato remoto`.
- **Domande di comprensione.** Sono un esercizio sul testo italiano: vanno in italiano con `lang="it"` in tutte le lingue. Nei blocchi A1 e A2 sotto ogni domanda compare la traduzione di servizio nella lingua del visitatore; da B1 in su solo italiano. Il titolo del blocco e le etichette dei campi restano tradotti. Questa regola sostituisce la formulazione del 2026-08-12, dove le domande erano elencate tra i contenuti da localizzare.
- **Link.** Una pagina localizzata linka sempre la versione nella propria lingua.
- **Difetti gia rilevati.** Il confronto fra le 432 pagine localizzate e le rispettive pagine italiane ha trovato materiale di studio tradotto per errore in `table.tbl` (16 pagine), `.rule-card` (112), `.grid .card` (16), `.italian-box` (64), `.dialogue` (24), `.cols` (8) e negli indici di grammatica (8), piu etichette rimaste in italiano e attributi rimasti in inglese. L'elenco completo con i numeri sta nel capitolo 12 di `REGOLE_LINGUE.md`.
- **Causa.** `scripts/generate-localized-resources.mjs` protegge dalla traduzione automatica solo una parte dei selettori. Prima di rigenerare qualsiasi pagina la lista `preserveSelectors` va allineata a `REGOLE_LINGUE.md`.

## 2026-08-25 - Correzione della mescolanza delle lingue

- Applicate a tutto il sito le regole di `REGOLE_LINGUE.md`: **469 pagine localizzate corrette** con `node scripts/migrate/fix-language-mix.mjs`, piu 80 pagine `src/pages/` con i metadati SEO riscritti.
- **Materiale di studio ripristinato in italiano**: suggerimenti degli esercizi (2208), riquadri di regola (448), forme italiane nel testo (641), prefissi degli errori tipici (576), celle di tabella (279), riquadri «angolo italiano» (64), minidialoghi (24), schede di preposizioni ed esempi (280).
- **Domande di comprensione**: riportate in italiano con `lang="it"` in tutte le lingue (1016 domande). Nei blocchi A1 e A2 sotto ogni domanda compare la traduzione di servizio in `.q-gloss`; da B1 in su solo italiano. Aggiunto lo stile di `.q-gloss` a `public/styles.css` e alzato `CSS_VERSION` a `20260825e`.
- **Suggerimenti degli esercizi**: la regola del 2026-08-25 che li elencava tra i contenuti da tradurre e stata corretta. Mostrano la forma italiana da usare, quindi sono lingua-oggetto e restano in italiano.
- **Lingua del visitatore ripristinata**: etichette di tabelle e riquadri (678), `aria-label` dei PDF (395), frasi di traduzione libera portate dall'inglese alla lingua della pagina (364), voci di navigazione (289), maiuscole e punteggiatura dei titoli (280), descrizioni delle schede negli indici (173), link `/chi-siamo/` (8), «Martín» riportato a «Martin» (6).
- **Nomi dei tempi verbali**: la riga di focus dei blocchi A1-C1 in letture e favole traduceva i nomi italiani («Imperfetto e passato prossimo» era diventato «Imperfecto y presente perfecto», e nella stessa pagina si leggeva «sin passato remoto» in un blocco e «pasado remoto» in quello sotto). Ora il nome italiano resta e si traduce solo la cornice: 393 righe corrette. Il dizionario e in `scripts/data/level-focus.mjs` e l'audit fallisce se un nome torna tradotto.
- **SEO**: 80 meta description riscritte perche traducevano il nome italiano del tempo verbale (`presente perfecto` per `passato prossimo`, `to be` per `essere`). Regola: il termine italiano deve comparire sempre nella meta description; nel titolo H1 resta obbligatorio solo per i nomi senza equivalente esatto (`essere`, `avere`, `passato prossimo`, `imperfetto`, `passato remoto`, `congiuntivo`, `condizionale`, `futuro semplice`), mentre per le categorie universali (`imperativo`, `gerundio`, `infinito`, `participio`) il titolo puo usare il nome locale, che e anche quello cercato su Google.
- **Controllo permanente**: nuovo `scripts/audit-language-mix.mjs` (`npm run audit:languages`). Confronta ogni pagina localizzata con la rispettiva pagina italiana e fallisce se il materiale di studio e stato tradotto, se un'etichetta e rimasta in italiano, se un attributo e rimasto in inglese, se una domanda non e in italiano, se il marchio e stato adattato, se una pagina localizzata linka un percorso italiano o se un termine italiano sparisce dalla SEO. Eseguito in CI con `--strict` **prima** della build.
- **Prevenzione**: `preserveSelectors` in `scripts/generate-localized-resources.mjs` ora protegge anche `.rule-card`, `.rule-grid`, `.italian-box`, `.dialogue`, `.cols`, `.grid .card` e `table.tbl`. La lista va tenuta allineata al capitolo 2 di `REGOLE_LINGUE.md`.
- **Dizionari condivisi** in `scripts/data/`: `labels.mjs` (etichette e voci di navigazione nelle 8 lingue), `table-cells.mjs` (celle di tabella che spiegano), `level-focus.mjs` (riga di focus dei blocchi per livello), `italian-box.mjs`, `lesson-cards.mjs`, `translation-prompts.mjs`. Sono la fonte unica sia per la riparazione sia per l'audit.
- **Parita di migrazione**: la base di confronto di `verify-parity.mjs --ignore-intended-fixes` sale da 36 a **485 differenze su 1119 pagine**, tutte volute.
- **Resta da fare**: la riparazione ha sistemato la lingua di ogni blocco, non la qualita di scrittura delle spiegazioni gia tradotte. Restano frasi goffe ereditate dalla vecchia traduzione automatica, da rivedere a mano lingua per lingua.

## 2026-08-25 - Foto dell'hero in diagonale, lezioni 1:1 e pagina Chi siamo mantenuta

- **Le foto dell'hero sono grandi e sovrapposte in diagonale.** Diametro massimo da 220px a 285px (`--pw:min(62%,285px)` su `.teacher-photo-pair`), Licia in alto a destra sopra Martin, Martin in basso a sinistra sotto: sovrapposizione del 42% della larghezza e scarto verticale del 55%, cioe un asse a circa 45 gradi. La colonna dell'hero passa da `minmax(320px,.72fr)` a `minmax(340px,.86fr)` per fare spazio. Le pillole con i nomi restano sempre in primo piano (`z-index:3`).
- **Il badge «Insegnanti madrelingua» e stato rimosso dalle 9 home.** Il ruolo era gia detto nel testo di presentazione dell'hero e il riquadro rubava spazio alle foto. Il badge della pagina contatti (`/contact/`) resta: li identifica Martin e non e un doppione.
- **Le lezioni sono dichiarate 1:1 dove Martin e Licia si presentano.** La riga del prezzo delle schede insegnante dice «12 € per lezione 1:1» nelle 9 home e nelle 9 pagine «Chi siamo», tradotta come lingua-veicolo in ogni lingua (`per 1:1 lesson`, `por clase 1:1`, `par cours 1:1`, `za lekci 1:1`, `za lekcje 1:1`, `1:1 ders basina 12 €`, `pro 1:1-Unterrichtsstunde`, `1レッスン12ユーロ（マンツーマン）`).
- **`CSS_VERSION` alzato a `20260825f`.** Il contenuto di `public/styles.css` era cambiato lasciando invariata la stringa di versione: chi aveva il vecchio CSS in cache vedeva il layout precedente con il nuovo HTML. La regola resta: **ogni modifica a `public/styles.css` deve alzare `CSS_VERSION` in `src/layouts/SiteLayout.astro`.**
- **La pagina «Chi siamo» resta separata dalla home.** Valutata e scartata l'ipotesi di fondere i due contenuti e far puntare `/chi-siamo/` alla home con un redirect 301. Motivi: il traffico atterra sulle pagine di grammatica, letture, favole e vocabolario, e «Chi siamo» e il ponte tra il materiale gratuito e la lezione a pagamento; il link e nel menu e nel footer di 299 pagine e `scripts/audit-site.mjs` lo pretende su ognuna; una voce di menu che punta alla home duplicherebbe il logo. Gli URL non vanno spostati due volte.
- **Da fare nel tempo:** oggi `/chi-siamo/` e quasi un duplicato della sezione insegnanti della home (stessi ritratti, stesse due schede, stesso prezzo, stessi bottoni). Va differenziata: presentazione personale piu lunga, «com'e fatta una lezione 1:1», domande frequenti, recensioni quando ci saranno, e in fondo i collegamenti a grammatica, favole, letture e vocabolario. La home resta la vetrina corta e orientata alla prenotazione.

## 2026-08-31 - Lettura «Il latte materno» riscritta con dati verificabili

- **Motivo.** Il testo precedente era corretto ma generico: diceva che il latte «cambia», che il colostro è «ricco di sostanze utili» e che il latte è un «sistema biologico adattivo», senza mai dare un numero, un meccanismo o un nome. Una lettura di scienza che non contiene un solo fatto verificabile non si ricorda e non porta nessuno a tornare sul sito.
- **Criterio adottato per le letture di scienza:** ogni paragrafo deve contenere almeno un dato concreto (una quantità, un meccanismo, un nome). Le formule di riempimento («è importante», «ha un significato funzionale preciso», «svolge un ruolo particolare») vanno sostituite dal fatto che pretendono di riassumere. Il registro resta divulgativo: lo scopo è usare l'italiano su contenuti interessanti, non insegnare terminologia scientifica.
- **Contenuti nuovi, per livello.** A1: 87% di acqua, oltre 200 sostanze, 30 ml di colostro il primo giorno contro i 5 ml che tiene lo stomaco del neonato. A2: melatonina di notte e cortisolo di giorno; il latte per un bambino prematuro contiene più proteine, grassi e difese per alcune settimane. B1: gli oligosaccaridi, più di 200 tipi che il bambino non digerisce, nutrono il *Bifidobacterium infantis* e funzionano da esche per virus e batteri. B2: i globuli bianchi passano dallo 0-2% fino al 94% delle cellule durante un'infezione della madre **o del solo bambino**, e tornano al livello di partenza con la guarigione; gli anticorpi arrivano dall'intestino della madre alla ghiandola mammaria. C1: la lattoferrina difende sottraendo ferro ai batteri; il latte non è sterile; la formula artificiale è «una fotografia», il latte materno «una conversazione tra due corpi».
- **Fonti.** Spunto iniziale dalla pagina di jw.org sul latte materno (composizione variabile durante la poppata, melatonina notturna, colostro). I dati numerici aggiunti vengono dalla letteratura sull'allattamento umano: Hassiotou et al. 2013 per i globuli bianchi (0-2% → fino al 94%), gli studi sugli oligosaccaridi del latte umano (oltre 200 strutture, 5-23 g/l, funzione di recettori-esca) e la via entero-mammaria per gli anticorpi.
- **Applicato in tutte e 9 le lingue**: testo italiano identico, glosse e domande nella lingua del visitatore, `lead` e meta description riscritte. Nota informativa in fondo: resta in italiano perché `audit-language-mix` confronta tutti i blocchi `.story-text` con la pagina italiana.
- **Domande uniformate alla convenzione del sito.** La lettura usava ancora il vecchio template (`<label>` + `<textarea>`, domanda nella lingua del visitatore). Ora segue la decisione del 2026-08-25 come le altre otto letture: `<ol><li>` con la domanda in italiano marcata `lang="it"`, traduzione di servizio in `.q-gloss` solo per A1 e A2, solo italiano da B1 in su. Resta con il vecchio template la sola lettura `la-meraviglia-del-dna`.
- **`scripts/generate-pdfs.py` allineato all'architettura Astro.** Leggeva da `legacy-html/` (congelato) e scriveva in `legacy-html/pdf/`: produceva PDF con il testo vecchio, che nessuno pubblicava. Ora la sorgente predefinita è `dist/` e l'uscita `public/pdf/`, entrambe sovrascrivibili con le variabili `SITE_ROOT` e `PDF_OUT`. Aggiunto il filtro `--only <nome-file-italiano>`, che rigenera una sola risorsa in tutte e 9 le lingue e su tutti i livelli senza toccare gli altri 1000 PDF.

  ```
  npm run build
  python scripts/generate-pdfs.py --only latte-materno
  npm run build
  ```

  Il secondo `npm run build` serve a ricopiare i PDF nuovi da `public/` a `dist/`. Dipendenze Python: `reportlab`, `lxml`, `pillow`.
- **PDF rigenerati**: 54 file (9 lingue x 6 livelli, `all-levels` compreso).
- **Parità di migrazione**: `verify-parity.mjs --ignore-intended-fixes` riporta 489 differenze su 1119 pagine e le 9 pagine di questa lettura sono tra quelle diverse, come previsto: il testo è stato riscritto a mano e non deve più coincidere con `legacy-html/`. La soglia di riferimento in `AGENTS.md` va aggiornata a 489.

## 2026-08-31 - I PDF diventano schede di lavoro autonome

I PDF erano un riversamento del testo della pagina: nessuna intestazione che spiegasse che cosa fossero, le parole utili appiattite su una riga sola («poppata = toma grassi = grasas sazio = saciado»), la domanda italiana e la traduzione fuse nella stessa riga, nessuno spazio per rispondere e i livelli uno appiccicato all'altro. Fuori dal sito il file non si capiva.

- **Intestazione autoesplicativa.** Titolo, poi la riga «Lettura graduata per imparare l'italiano - livelli A1-C1» (o «livello B2») nella lingua del visitatore, l'immagine, un riquadro che dice come si usa la scheda e l'URL della pagina, cliccabile.
- **Una pagina per livello.** Nel PDF completo la copertina sta da sola e ogni livello parte in cima a una pagina nuova. Nei PDF di un solo livello l'intestazione resta in linea, perche una copertina intera per due pagine sarebbe spreco.
- **Parole utili in tabella a due colonne** (italiano / significato), con intestazione tradotta. Sulla pagina italiana la colonna del significato non c'e: non si traduce l'italiano in italiano.
- **Domande numerate**, con la domanda italiana in evidenza, la traduzione di servizio sotto in corsivo piccolo dove esiste, e due righe stampate per scrivere la risposta a mano.
- **Chiusura con Martin e Licia**: le due foto, la specialita di ognuno, il link a Preply per ciascuno e il link al sito. Il PDF diventa cosi un canale di conversione, non solo materiale. In ogni pagina il pie di pagina porta `italianoconmartin.com` cliccabile e il numero di pagina.
- **La nota informativa** (finalita educative, non sostituisce il parere di un professionista sanitario) entra in **ogni** PDF, anche in quelli di un solo livello.
- **Metadati del file**: titolo, autore «Italiano con Martin» e oggetto nella lingua del visitatore.
- **Applicato per ora solo a «Il latte materno»** (54 file). Gli altri PDF del sito conservano l'impaginazione vecchia finche non si decide di rigenerarli tutti: sono circa mille file e il confronto va fatto in un commit dedicato.

## 2026-08-31 - I livelli dicono le stesse cose, e la nota informativa esce

- **Regola nuova, vale per tutte le letture** (scritta anche in `AGENTS.md`): i cinque livelli contengono **le stesse informazioni**, spiegate con parole più semplici o più complesse. Prima non era così: la versione del mattino di questa lettura metteva il colostro in A1, gli ormoni in A2, gli oligosaccaridi in B1 e i globuli bianchi in B2, quindi chi leggeva A1 riceveva un quinto del contenuto. Ora i sei fatti - 87% di acqua e oltre 200 sostanze, la poppata che cambia, l'ora del giorno, gli zuccheri per i batteri, i globuli bianchi che salgono, il colostro tarato sullo stomaco - compaiono in tutti e cinque i livelli.
- **Nota informativa rimossa** dai nove file su richiesta. Con essa sparisce anche la frase «non sostituiscono il parere di un professionista sanitario», che era l'unico avviso su un contenuto di salute: se serve, va rimessa.
- **Riquadro per la risposta** sotto ogni domanda, sul sito e nel PDF. Sul sito è il `<textarea>` già previsto da `public/styles.css`, spostato dentro il `<li>` con `margin-top:8px`; `CSS_VERSION` sale a `20260831a`. Nel PDF il riquadro sostituisce le due righe orizzontali e riprende lo stesso bordo chiaro.
- **PDF rigenerati**: 54 file.

## 2026-08-31 - Vocabolario del cibo pronto per 72 parole, in attesa delle immagini

- **Da 8 a 72 parole.** `scripts/data/food-vocabulary-extra.mjs` passa da 42 a **64 voci**: aggiunte mozzarella, salame, bistecca, gamberi, miele, aceto, basilico, peperone, funghi, piselli, fagioli, broccoli, spinaci, pesca, ciliegia, anguria, ananas, noci, cioccolato, succo, cappuccino, focaccia. Ogni voce porta le tre frasi d'esempio in italiano, le risposte accettate dall'esercizio e il testo alternativo tradotto nelle 9 lingue.
- **Il blocco sono le immagini: nessuna delle 64 esiste.** Le parole entrano in pagina solo quando c'è l'illustrazione, quindi oggi la scheda resta a 8 parole. Il prompt da dare a ChatGPT, le eccezioni per liquidi, polveri e piatti larghi, l'elenco dei 64 nomi di file e il comando da lanciare dopo stanno in `docs/prompt-immagini-vocabolario.md`.
- **Le frasi da tradurre ora crescono con le parole.** `scripts/expand-food-vocabulary.mjs` aggiunge un esercizio di traduzione libera per le parole che ne hanno uno in `foodTranslationExercises` (pizza, pollo, pomodoro, patata, banana, gelato, caffè, vino) e aggiorna l'occhiello «N frasi libere». La frase di partenza è nella lingua del visitatore, in inglese solo sulla pagina italiana e su quella inglese, come vuole `REGOLE_LINGUE.md`.
- **Pipeline verificata end to end** con due immagini finte, poi annullata: 9 pagine da 8 a 10 parole, 10 esercizi con immagini, 10 frasi libere, contatori, metadati, indice e soglia dell'audit aggiornati in tutte le lingue; `audit-language-mix`, `audit-site`, `audit-links` e `audit:vocabulary` verdi. Corretto nell'occasione un errore nel contatore delle traduzioni: il confine di parola dell'espressione regolare era scritto `` dentro un template literal, quindi cercava il carattere di backspace invece dei numeri.
- **Le pagine di vocabolario non hanno PDF.** `scripts/generate-pdfs.py` genera solo letture, favole e grammatica. Se si vogliono anche qui, il generatore va esteso con un impaginato apposta (griglia di immagini con la parola e le frasi, più il test).

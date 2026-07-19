import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const root = process.cwd();

const additions = {
  'tecniche-di-memoria': {
    title: 'Tecniche di memoria',
    cards: [
      {
        label: 'Metodo',
        heading: 'Come costruire una memoria che funziona davvero',
        subtitle: 'Non basta leggere: bisogna recuperare',
        paragraphs: [
          'Una buona tecnica di memoria non serve a ricordare tutto: serve a ricordare quello che vuoi usare. Nello studio dell&#8217;italiano questa differenza &#232; importante. Puoi riconoscere una parola quando la leggi, ma non riuscire a dirla durante una conversazione. In quel caso la parola non &#232; ancora disponibile.',
          'Il primo passaggio &#232; trasformare la parola in un piccolo nodo di significato. Non scrivere solo <strong>finestra = window</strong>. Scrivi anche una frase: <strong>Apro la finestra perch&#233; fa caldo</strong>. Poi aggiungi una situazione: una stanza, una persona, un motivo. Pi&#249; collegamenti crei, pi&#249; strade avrai per recuperare la parola.',
          'Il secondo passaggio &#232; aspettare un po&#8217; prima di ripassare. Se ripeti subito dieci volte, la parola sembra facile, ma spesso &#232; solo memoria di pochi minuti. Se invece provi a ricordarla dopo qualche ora o il giorno dopo, lo sforzo &#232; maggiore e proprio per questo il ricordo diventa pi&#249; forte.',
          'Il terzo passaggio &#232; cambiare contesto. Una parola studiata sempre nello stesso ordine resta legata alla lista. Una parola usata in una domanda, in una risposta, in un messaggio e in una piccola storia diventa pi&#249; flessibile. Per parlare, la flessibilit&#224; conta pi&#249; della ripetizione perfetta.',
        ],
      },
      {
        label: 'Strategie',
        heading: 'Strategie poco usate dagli studenti',
        subtitle: 'Piccoli gesti, grande differenza',
        paragraphs: [
          '<strong>Spiegare a voce alta</strong> &#232; una tecnica molto potente. Se studi la parola <strong>comunque</strong>, non limitarti a tradurla. Prova a spiegare quando si usa: &#8220;La uso quando voglio continuare un&#8217;idea anche se prima c&#8217;&#232; un problema&#8221;. Questa spiegazione ti obbliga a capire la funzione della parola, non solo il significato.',
          '<strong>Creare coppie contrastive</strong> aiuta molto. Invece di studiare <strong>portare</strong> da solo, confrontalo con <strong>prendere</strong>. Invece di studiare <strong>sapere</strong> da solo, confrontalo con <strong>conoscere</strong>. Il cervello ricorda meglio quando deve distinguere, perch&#233; la differenza diventa un indizio.',
          '<strong>Usare errori controllati</strong> pu&#242; sembrare strano, ma funziona. Scrivi una frase sbagliata e poi correggila: <em>Io sono fame</em> diventa <strong>Io ho fame</strong>. L&#8217;errore rende visibile il punto critico. Naturalmente non bisogna ripetere l&#8217;errore senza correzione: il valore nasce dal confronto immediato.',
          '<strong>Ridurre il numero di parole</strong> &#232; spesso pi&#249; intelligente che aumentarlo. Cinque parole ripassate bene, usate in frasi vere e recuperate dopo giorni valgono pi&#249; di trenta parole lette una sola volta. La quantit&#224; d&#224; soddisfazione; la disponibilit&#224; crea competenza.',
        ],
      },
      {
        label: 'Italiano',
        heading: 'Applicazione pratica allo studio dell&#8217;italiano',
        subtitle: 'Dalla scheda alla conversazione',
        paragraphs: [
          'Per ogni parola nuova puoi usare una scheda in quattro righe. Riga 1: parola o espressione. Riga 2: frase esempio. Riga 3: domanda personale. Riga 4: prossimo ripasso. Per esempio: <strong>magari</strong>; <em>Magari domani ho tempo</em>; <em>Che cosa vorresti fare, magari quest&#8217;estate?</em>; ripasso tra due giorni.',
          'Le parole funzionali meritano pi&#249; attenzione delle parole rare. Termini come <strong>anzi</strong>, <strong>quindi</strong>, <strong>infatti</strong>, <strong>comunque</strong>, <strong>magari</strong> e <strong>mica</strong> cambiano il tono di una frase. Spesso fanno sembrare il tuo italiano pi&#249; naturale di una parola difficile imparata da un dizionario.',
          'Una tecnica utile &#232; creare una mini-conversazione. Prendi una parola e scrivi domanda, risposta e replica. Se studi <strong>nonostante</strong>, puoi scrivere: <em>Esci nonostante la pioggia?</em> <em>S&#236;, esco lo stesso.</em> <em>Allora prendi l&#8217;ombrello.</em> Cos&#236; la grammatica entra in una scena.',
          'Alla fine chiediti: posso usare questa parola domani con una persona? Se la risposta &#232; no, la scheda &#232; ancora troppo astratta. Una parola ricordata ma mai usata resta fragile; una parola usata anche male, corretta e ripetuta diventa parte della tua lingua attiva.',
        ],
      },
    ],
  },
  'come-funziona-la-memoria-umana': {
    title: 'Come funziona la memoria umana',
    cards: [
      {
        label: 'Scienza',
        heading: 'La memoria non &#232; una registrazione',
        subtitle: 'Ricordare significa ricostruire',
        paragraphs: [
          'Molte persone immaginano la memoria come una videocamera. In realt&#224;, quando ricordiamo, non riapriamo semplicemente un file. Ricostruiamo una scena usando tracce, emozioni, conoscenze generali e aspettative. Questo spiega perch&#233; due persone possano vivere lo stesso evento e raccontarlo in modo diverso.',
          'La memoria seleziona. Durante una giornata riceviamo troppi stimoli: rumori, volti, parole, immagini, movimenti. Il cervello non conserva tutto con la stessa forza. Ci&#242; che riceve attenzione, emozione o significato personale ha pi&#249; possibilit&#224; di diventare un ricordo stabile.',
          'Anche il recupero modifica il ricordo. Ogni volta che racconti un episodio, scegli alcune parti e ne lasci fuori altre. La storia diventa pi&#249; ordinata, ma pu&#242; anche cambiare leggermente. Questo non significa che tutti i ricordi siano falsi: significa che sono vivi, non fotografie immobili.',
          'Per imparare una lingua, questa idea &#232; utile. Se vuoi ricordare una parola, devi darle pi&#249; occasioni di essere ricostruita: ascoltarla, leggerla, dirla, scriverla, usarla in contesti diversi. La ripetizione meccanica crea familiarit&#224;; la ricostruzione crea uso.',
        ],
      },
      {
        label: 'Cervello',
        heading: 'Attenzione, emozione e sonno',
        subtitle: 'Tre fattori spesso sottovalutati',
        paragraphs: [
          'L&#8217;attenzione &#232; la porta d&#8217;ingresso della memoria. Se leggi una frase mentre controlli il telefono, una parte dell&#8217;informazione non viene elaborata bene. Per questo venti minuti concentrati possono essere pi&#249; produttivi di un&#8217;ora piena di interruzioni.',
          'L&#8217;emozione rende alcuni ricordi pi&#249; vividi. Una parola legata a una storia personale, a un sorriso, a un errore divertente o a una conversazione importante resta pi&#249; facilmente. Per questo le lezioni di lingua funzionano meglio quando non sono solo esercizi, ma situazioni umane.',
          'Il sonno ha un ruolo importante nel consolidamento. Dopo lo studio, il cervello continua a organizzare le informazioni. Studiare tutto in una notte pu&#242; servire per superare un test immediato, ma spesso produce ricordi deboli. Distribuire lo studio in pi&#249; giorni permette al sistema di lavorare meglio.',
          'Un fatto interessante &#232; che dimenticare non &#232; solo perdere. A volte dimenticare libera spazio, riduce il rumore e permette di generalizzare. Se ricordassimo ogni dettaglio senza filtro, sarebbe difficile trovare rapidamente l&#8217;informazione utile.',
        ],
      },
      {
        label: 'Lingua',
        heading: 'Che cosa significa ricordare una parola',
        subtitle: 'Riconoscere non basta',
        paragraphs: [
          'Nel vocabolario di una lingua esistono diversi gradi di conoscenza. Puoi aver visto una parola una volta, puoi riconoscerla leggendo, puoi capirla ascoltando, puoi usarla scrivendo, oppure puoi dirla spontaneamente mentre parli. Questi livelli non sono uguali.',
          'Una parola entra davvero nella lingua attiva quando riesci a recuperarla senza troppo sforzo. Per arrivarci, servono situazioni. Se studi <strong>comunque</strong>, devi sentirla in un dialogo, vederla in un testo, usarla per rispondere a un problema e magari confrontarla con <strong>per&#242;</strong> o <strong>tuttavia</strong>.',
          'La memoria di lavoro aiuta a costruire frasi. Quando parli, tieni in mente soggetto, verbo, accordo, tempo, pronuncia e intenzione comunicativa. Se la grammatica richiede troppa energia, resta poca attenzione per il messaggio. Automatizzare forme frequenti libera spazio mentale.',
          'Per questo gli esercizi migliori non sono solo quelli che chiedono una risposta corretta, ma quelli che portano alla produzione. Dopo aver completato una frase, prova sempre a crearne una tua. La memoria diventa pi&#249; forte quando l&#8217;informazione serve a comunicare qualcosa.',
        ],
      },
    ],
  },
  'api-linguaggio-e-caratteristiche': {
    title: 'Le api: caratteristiche e linguaggio',
    cards: [
      {
        label: 'Natura',
        heading: 'Un alveare non &#232; una citt&#224; in miniatura',
        subtitle: 'Una colonia funziona come un organismo collettivo',
        paragraphs: [
          'Quando guardiamo un alveare, possiamo pensare a una piccola citt&#224;. Ma l&#8217;immagine &#232; solo parzialmente corretta. Una colonia di api funziona pi&#249; come un organismo collettivo: migliaia di individui prendono decisioni senza un capo che controlli ogni azione.',
          'La regina non dirige il lavoro quotidiano. Il suo ruolo principale riguarda la riproduzione e la coesione chimica della colonia. Le operaie, invece, cambiano compito con l&#8217;et&#224; e con le necessit&#224; dell&#8217;alveare: pulizia, cura delle larve, costruzione del favo, difesa, raccolta di nettare e polline.',
          'Una cosa poco intuitiva &#232; che molte decisioni nascono da segnali locali. Se una fonte di cibo &#232; ricca, le api che tornano all&#8217;alveare danzano pi&#249; a lungo o pi&#249; intensamente. Questo aumenta la probabilit&#224; che altre api vadano nella stessa direzione. Non serve una riunione centrale: il sistema si autoregola.',
          'Per imparare italiano, questo tema offre parole utili: <strong>colonia</strong>, <strong>operaia</strong>, <strong>regina</strong>, <strong>favo</strong>, <strong>raccolta</strong>, <strong>segnale</strong>. Sono parole concrete, ma permettono anche di parlare di societ&#224;, cooperazione e ambiente.',
        ],
      },
      {
        label: 'Danza',
        heading: 'La danza delle api &#232; un codice imperfetto ma potente',
        subtitle: 'Direzione, distanza e qualit&#224;',
        paragraphs: [
          'La famosa danza a otto non comunica solo entusiasmo. La parte centrale, vibrante, contiene informazioni sulla direzione della fonte di cibo rispetto al sole. La durata del movimento d&#224; indicazioni sulla distanza. Il numero di ripetizioni e l&#8217;energia della danza possono segnalare quanto la fonte sia interessante.',
          'Il sistema non &#232; preciso come una mappa digitale. Le api ricevono un&#8217;indicazione e poi completano la ricerca usando odori, colori, memoria del paesaggio e segnali ambientali. Questo rende la danza ancora pi&#249; interessante: non &#232; un comando rigido, ma un messaggio da interpretare.',
          'Il paesaggio influenza la comunicazione. Vento, ostacoli, salita, distanza reale e fatica possono modificare l&#8217;esperienza del volo. Per questo la distanza comunicata non &#232; semplicemente una misura geometrica: include anche il costo del viaggio.',
          'Questa idea &#232; ottima per discutere in classe: una lingua umana non funziona come la danza delle api, ma entrambe mostrano che comunicare significa ridurre l&#8217;incertezza. Nessun messaggio elimina tutto il dubbio; chi riceve deve sempre interpretare.',
        ],
      },
      {
        label: 'Ambiente',
        heading: 'Perch&#233; le api sono importanti anche quando non fanno miele',
        subtitle: 'Impollinazione e biodiversit&#224;',
        paragraphs: [
          'Il miele &#232; la parte pi&#249; visibile del rapporto tra uomini e api, ma non &#232; la pi&#249; importante dal punto di vista ecologico. Molte piante dipendono dagli impollinatori per riprodursi. Quando un&#8217;ape passa da un fiore all&#8217;altro, trasporta polline e rende possibile la formazione di frutti e semi.',
          'Non tutte le piante dipendono allo stesso modo dalle api, e non tutte le api sono api da miele. Esistono molte specie di api selvatiche, spesso meno conosciute, che svolgono ruoli fondamentali negli ecosistemi locali. Parlare di api significa quindi parlare di un gruppo molto pi&#249; vario di quanto immaginiamo.',
          'Le minacce sono diverse: pesticidi, perdita di habitat, malattie, parassiti, cambiamento climatico e riduzione della variet&#224; dei fiori. Una colonia pu&#242; sembrare forte, ma dipende da un ambiente complesso. Se l&#8217;ambiente si impoverisce, anche la colonia diventa pi&#249; fragile.',
          'Dal punto di vista linguistico, questo argomento permette di usare connettivi di causa e conseguenza: <strong>poich&#233;</strong>, <strong>perci&#242;</strong>, <strong>di conseguenza</strong>, <strong>a causa di</strong>, <strong>grazie a</strong>. Non impari solo nomi di animali: impari a spiegare relazioni.',
        ],
      },
    ],
  },
  'come-preparare-una-pizza': {
    title: 'Come preparare una pizza',
    cards: [
      {
        label: 'Tecnica',
        heading: 'La pizza comincia prima del forno',
        subtitle: 'Farina, acqua, sale, lievito e tempo',
        paragraphs: [
          'Molti pensano che la pizza dipenda soprattutto dal condimento. In realt&#224;, la parte pi&#249; importante nasce prima: nell&#8217;impasto. Farina, acqua, sale e lievito sono ingredienti semplici, ma il risultato cambia moltissimo in base a proporzioni, temperatura e tempo.',
          'La farina contiene proteine che, con acqua e movimento, formano il glutine. Il glutine crea una rete elastica capace di trattenere i gas prodotti dalla fermentazione. Se la rete &#232; debole, l&#8217;impasto si rompe; se &#232; troppo tenace, diventa difficile da stendere.',
          'L&#8217;idratazione indica quanta acqua c&#8217;&#232; rispetto alla farina. Un impasto pi&#249; idratato pu&#242; essere leggero e alveolato, ma richiede pi&#249; attenzione. Un impasto meno idratato &#232; spesso pi&#249; facile da gestire, ma pu&#242; risultare meno soffice.',
          'Il sale non serve solo a dare sapore. Influenza anche la struttura dell&#8217;impasto e rallenta in parte l&#8217;attivit&#224; del lievito. Per questo non &#232; un dettaglio da aggiungere a caso: anche pochi grammi cambiano equilibrio, gusto e consistenza.',
        ],
      },
      {
        label: 'Cultura',
        heading: 'La pizza napoletana &#232; una tecnica culturale',
        subtitle: 'Non solo una ricetta',
        paragraphs: [
          'L&#8217;arte del pizzaiuolo napoletano &#232; stata riconosciuta dall&#8217;UNESCO come patrimonio culturale immateriale. Questo riconoscimento non riguarda una semplice lista di ingredienti, ma un insieme di gesti, saperi pratici, trasmissione orale e vita comunitaria.',
          'Il gesto della stesura &#232; importante. Il pizzaiuolo non schiaccia l&#8217;impasto in modo uniforme: spinge l&#8217;aria verso il bordo, lasciando il centro sottile e creando il cornicione. Il cornicione quindi non &#232; una cornice decorativa: &#232; il risultato di una tecnica.',
          'La cottura tradizionale nel forno a legna &#232; molto rapida e avviene a temperature molto alte. Questo crea un equilibrio particolare: il centro resta morbido, il bordo si gonfia e alcune piccole bruciature danno aroma. A casa, con temperature pi&#249; basse, bisogna adattare metodo e tempi.',
          'Anche il linguaggio della pizza &#232; culturale: <strong>impasto</strong>, <strong>lievitazione</strong>, <strong>maturazione</strong>, <strong>staglio</strong>, <strong>panetto</strong>, <strong>cornicione</strong>, <strong>forno a legna</strong>. Sono parole tecniche, ma raccontano un modo di lavorare.',
        ],
      },
      {
        label: 'Casa',
        heading: 'Come ragionare quando fai la pizza a casa',
        subtitle: 'Adattare invece di imitare',
        paragraphs: [
          'Il forno di casa non &#232; un forno professionale, quindi non conviene imitare tutto alla lettera. La domanda giusta non &#232;: &#8220;come faccio la vera pizza identica?&#8221;, ma: &#8220;come ottengo il miglior risultato con gli strumenti che ho?&#8221; Questa mentalit&#224; rende la cucina pi&#249; intelligente.',
          'Una pietra refrattaria o una teglia molto calda possono aiutare, perch&#233; trasferiscono calore rapidamente alla base. Anche preriscaldare bene il forno &#232; importante. Se il forno non &#232; caldo quando entra la pizza, l&#8217;impasto asciuga lentamente invece di gonfiarsi subito.',
          'Il condimento va controllato. Troppo pomodoro o troppa mozzarella rilasciano acqua e rendono il centro molle. Tagliare bene la mozzarella, scolare il liquido e non esagerare con le quantit&#224; pu&#242; migliorare pi&#249; di un ingrediente costoso.',
          'Dal punto di vista linguistico, preparare una pizza permette di praticare imperativo, sequenze temporali e verbi di cucina: <strong>mescola</strong>, <strong>lascia riposare</strong>, <strong>stendi</strong>, <strong>condisci</strong>, <strong>inforna</strong>, <strong>sforna</strong>. Una ricetta diventa una lezione di italiano pratico.',
        ],
      },
    ],
  },
  'storia-del-caffe-in-italia': {
    title: 'La storia del caff&#232; in Italia',
    cards: [
      {
        label: 'Storia',
        heading: 'Da bevanda esotica a rito quotidiano',
        subtitle: 'Il caff&#232; cambia luogo e significato',
        paragraphs: [
          'Il caff&#232; non nasce in Italia, ma in Italia trova una forma culturale molto riconoscibile. All&#8217;inizio era una bevanda nuova, costosa e un po&#8217; misteriosa. Poi entr&#242; nei caff&#232; cittadini, luoghi dove si leggeva, si discuteva, si facevano incontri e si costruiva opinione pubblica.',
          'I caff&#232; storici erano diversi dal bar veloce di oggi. Erano spazi di tempo lento: tavolini, giornali, conversazioni, politica, letteratura. Bere caff&#232; significava anche partecipare alla vita della citt&#224;. La bevanda creava un luogo sociale.',
          'Con il Novecento cambia il ritmo. L&#8217;espresso concentra l&#8217;esperienza in pochi secondi: ordinare, bere al banco, pagare, uscire. Questa rapidit&#224; si adatta alla citt&#224; moderna, al lavoro, ai mezzi pubblici, alla pausa breve.',
          'La moka porta invece il caff&#232; nella casa. Non produce lo stesso espresso del bar, ma produce un rito domestico fortissimo: il rumore, il profumo, la tazzina dopo pranzo, la frase &#8220;metto su il caff&#232;&#8221;. La tecnologia diventa abitudine familiare.',
        ],
      },
      {
        label: 'Gusto',
        heading: 'Perch&#233; il caff&#232; cambia sapore',
        subtitle: 'Non dipende solo dalla miscela',
        paragraphs: [
          'Quando una tazzina &#232; buona o cattiva, spesso diciamo subito che dipende dalla qualit&#224; del caff&#232;. In parte &#232; vero, ma non basta. Macinatura, acqua, temperatura, pressione, pulizia della macchina e tempo di estrazione cambiano profondamente il risultato.',
          'La macinatura controlla la superficie di contatto tra acqua e caff&#232;. Se &#232; troppo grossa, l&#8217;acqua passa rapidamente e il risultato pu&#242; essere debole. Se &#232; troppo fine, l&#8217;estrazione pu&#242; diventare amara o sbilanciata. La misura giusta dipende dal metodo.',
          'L&#8217;acqua &#232; un ingrediente invisibile ma fondamentale. Minerali, durezza e composizione influenzano l&#8217;estrazione e la percezione dell&#8217;acidit&#224;. Due persone possono usare lo stesso caff&#232; e ottenere sapori diversi solo perch&#233; usano acqua diversa.',
          'La pulizia conta pi&#249; di quanto molti pensino. Oli vecchi e residui nella macchina o nella moka possono dare sapori sgradevoli. In italiano puoi dire: <strong>sa di bruciato</strong>, <strong>&#232; acquoso</strong>, <strong>&#232; amaro</strong>, <strong>&#232; equilibrato</strong>, <strong>ha un buon aroma</strong>.',
        ],
      },
      {
        label: 'Lingua',
        heading: 'Ordinare un caff&#232; significa conoscere un codice',
        subtitle: 'Parole brevi, abitudini precise',
        paragraphs: [
          'In Italia dire <strong>un caff&#232;</strong> di solito significa chiedere un espresso. Questa informazione sorprende molti studenti, perch&#233; in altre lingue &#8220;caff&#232;&#8221; pu&#242; indicare una tazza pi&#249; grande. Al bar italiano, il contesto cambia il significato della parola.',
          'Il vocabolario &#232; ricco: <strong>ristretto</strong>, <strong>lungo</strong>, <strong>macchiato</strong>, <strong>corretto</strong>, <strong>decaffeinato</strong>, <strong>al banco</strong>, <strong>al tavolo</strong>. Ogni parola porta con s&#233; una pratica. Non sono solo etichette: indicano quantit&#224;, latte, alcol, luogo e prezzo.',
          'Anche il cappuccino ha regole sociali non scritte. Molti italiani lo bevono soprattutto al mattino, spesso a colazione. Naturalmente nessuna legge lo vieta dopo pranzo, ma l&#8217;abitudine culturale esiste. Conoscerla aiuta a capire battute, sguardi e piccoli commenti.',
          'La frase <strong>prendiamo un caff&#232;?</strong> spesso non riguarda solo la bevanda. Pu&#242; significare: vediamoci, parliamo cinque minuti, facciamo una pausa, riprendiamo energia. Una tazzina diventa una forma breve di relazione sociale.',
        ],
      },
    ],
  },
  'futuro-intelligenza-artificiale': {
    title: 'Il futuro dell&#8217;intelligenza artificiale',
    cards: [
      {
        label: 'Societ&#224;',
        heading: 'L&#8217;IA non &#232; solo una tecnologia',
        subtitle: 'Dati, potere e responsabilit&#224;',
        paragraphs: [
          'Quando parliamo di intelligenza artificiale, spesso pensiamo a programmi capaci di scrivere testi, creare immagini o rispondere a domande. Ma l&#8217;IA non &#232; solo uno strumento tecnico: &#232; anche un sistema sociale. Dipende da dati, aziende, regole, energia, lavoro umano e decisioni politiche.',
          'Un modello pu&#242; sembrare neutrale perch&#233; parla con tono sicuro e ordinato. In realt&#224;, le sue risposte dipendono da dati di addestramento, scelte di progettazione, obiettivi economici e limiti statistici. Una frase fluida non &#232; automaticamente una frase vera.',
          'Il potere dell&#8217;IA sta anche nella scala. Un errore umano pu&#242; restare locale; un errore automatico pu&#242; essere ripetuto migliaia di volte. Per questo servono controlli, trasparenza, responsabilit&#224; e persone capaci di fare domande precise.',
          'Studiare questo tema in italiano permette di imparare parole utili per il mondo contemporaneo: <strong>algoritmo</strong>, <strong>dati</strong>, <strong>automazione</strong>, <strong>pregiudizio</strong>, <strong>verifica</strong>, <strong>responsabilit&#224;</strong>. Non &#232; solo tecnologia: &#232; cittadinanza linguistica.',
        ],
      },
      {
        label: 'Lavoro',
        heading: 'Quali lavori cambieranno davvero',
        subtitle: 'Non solo compiti ripetitivi',
        paragraphs: [
          'Per anni si &#232; pensato che l&#8217;automazione avrebbe colpito soprattutto lavori manuali o ripetitivi. L&#8217;IA generativa cambia questa immagine, perch&#233; interviene anche su testi, analisi, comunicazione, programmazione, traduzione, marketing, assistenza clienti e produzione di contenuti.',
          'Questo non significa che tutte le professioni spariranno. Pi&#249; spesso cambieranno i compiti interni a una professione. Un insegnante potr&#224; usare strumenti per preparare materiali, ma dovr&#224; ancora capire lo studente. Un medico potr&#224; consultare sistemi di supporto, ma dovr&#224; prendere decisioni responsabili.',
          'La competenza centrale potrebbe diventare la capacit&#224; di collaborare con sistemi automatici. Saper scrivere una buona richiesta, controllare una risposta, riconoscere un errore, integrare fonti e spiegare una decisione sar&#224; pi&#249; importante che usare uno strumento in modo passivo.',
          'C&#8217;&#232; anche un rischio di disuguaglianza. Chi ha accesso a strumenti migliori, formazione e dati pu&#242; aumentare produttivit&#224; e opportunit&#224;. Chi non ha accesso o competenze pu&#242; restare indietro. Il futuro dell&#8217;IA dipende quindi anche da scuola, politiche pubbliche e formazione continua.',
        ],
      },
      {
        label: 'Scuola',
        heading: 'L&#8217;IA pu&#242; aiutare o indebolire l&#8217;apprendimento',
        subtitle: 'Dipende da come viene usata',
        paragraphs: [
          'A scuola e nello studio delle lingue, l&#8217;IA pu&#242; essere molto utile. Pu&#242; creare esempi, correggere testi, proporre esercizi, spiegare una regola in modo diverso e adattare il livello. Per uno studente autonomo, questo pu&#242; aumentare le occasioni di pratica.',
          'Il problema nasce quando lo strumento sostituisce lo sforzo cognitivo. Se l&#8217;IA scrive sempre al posto dello studente, lo studente produce meno, sbaglia meno in apparenza, ma impara anche meno. L&#8217;errore corretto &#232; una parte importante dell&#8217;apprendimento.',
          'Un uso intelligente &#232; chiedere aiuto dopo aver provato. Prima scrivi una frase, poi chiedi una correzione. Prima fai un riassunto, poi chiedi come migliorarlo. Prima rispondi a una domanda, poi confronti la tua risposta con una versione pi&#249; naturale.',
          'Per imparare italiano, puoi usare l&#8217;IA come partner di allenamento, ma non come sostituto della conversazione reale. Una lingua non &#232; solo grammatica corretta: &#232; ritmo, esitazione, ascolto, relazione, intenzione. Le persone restano necessarie proprio dove la lingua diventa vita.',
        ],
      },
    ],
  },
  'il-sonar-del-delfino': {
    title: 'Il sonar del delfino',
    cards: [
      {
        label: 'Biologia',
        heading: 'Il sonar del delfino non &#232; una semplice eco',
        subtitle: 'Forma, distanza e materiale',
        paragraphs: [
          'Il sonar naturale dei delfini si chiama ecolocalizzazione. Il principio sembra semplice: il delfino emette click, il suono colpisce un oggetto e l&#8217;eco torna indietro. Ma il risultato &#232; molto pi&#249; ricco di una semplice indicazione di distanza.',
          'L&#8217;eco cambia in base alla forma dell&#8217;oggetto, alla sua dimensione, al materiale e perfino alla struttura interna. Un oggetto pieno d&#8217;aria, pieno d&#8217;acqua o rivestito di materiale morbido non restituisce lo stesso profilo acustico. Per un delfino, queste differenze possono diventare informazione.',
          'La fronte del delfino contiene una struttura grassa chiamata <strong>melone</strong>, che aiuta a concentrare i suoni. La ricezione coinvolge anche la mandibola inferiore, attraverso cui le vibrazioni possono arrivare all&#8217;orecchio interno. Il corpo del delfino &#232; quindi parte dello strumento sensoriale.',
          'Il punto pi&#249; interessante &#232; che il delfino non &#8220;vede con il suono&#8221; nel modo in cui noi vediamo con gli occhi. Costruisce una rappresentazione acustica del mondo. Questo ci ricorda che la percezione non &#232; unica: ogni specie vive dentro una versione sensoriale diversa della realt&#224;.',
        ],
      },
      {
        label: 'Precisione',
        heading: 'Quanto &#232; preciso questo sistema',
        subtitle: 'Esperimenti e limiti',
        paragraphs: [
          'In esperimenti controllati, i delfini hanno mostrato capacit&#224; sorprendenti nel distinguere oggetti molto simili. Alcuni studi hanno osservato discriminazioni di spessore inferiori a un millimetro. Questo non significa che il delfino sia infallibile, ma mostra una sensibilit&#224; acustica straordinaria.',
          'La precisione dipende dalle condizioni. Distanza, rumore, forma dell&#8217;oggetto, angolo, movimento e qualit&#224; dell&#8217;acqua possono influenzare il risultato. Anche un sonar biologico ha limiti: non &#232; magia, &#232; un sistema fisico e sensoriale molto raffinato.',
          'Un aspetto non scontato &#232; l&#8217;efficienza. Il delfino non emette un rumore continuo; produce serie di click e modifica il ritmo quando si avvicina a un bersaglio. In questo modo raccoglie informazioni rapidamente senza sprecare segnale.',
          'La tecnologia umana ha costruito sonar artificiali potentissimi, ma il confronto con i delfini resta affascinante. La natura non ha progettato un apparecchio separato: ha integrato produzione del suono, ascolto, movimento e decisione in un unico organismo.',
        ],
      },
      {
        label: 'Lingua',
        heading: 'Perch&#233; questo articolo aiuta anche l&#8217;italiano',
        subtitle: 'Scienza e parole utili',
        paragraphs: [
          'Il tema del sonar permette di praticare verbi importanti: <strong>emettere</strong>, <strong>ricevere</strong>, <strong>distinguere</strong>, <strong>rilevare</strong>, <strong>orientarsi</strong>, <strong>interpretare</strong>. Sono verbi utili non solo per la scienza, ma anche per parlare di tecnologia, percezione e decisioni.',
          'Puoi usare questo testo per imparare connettivi di spiegazione: <strong>infatti</strong>, <strong>per questo</strong>, <strong>inoltre</strong>, <strong>tuttavia</strong>, <strong>nonostante</strong>. Per esempio: <em>Il sonar &#232; molto preciso; tuttavia dipende dalle condizioni dell&#8217;ambiente</em>.',
          'Il lessico scientifico aiuta anche a costruire frasi pi&#249; mature. Dire <strong>il delfino sente bene</strong> &#232; corretto, ma dire <strong>il delfino interpreta un profilo acustico complesso</strong> &#232; pi&#249; preciso. La lingua cresce quando cresce anche il contenuto.',
          'Una buona attivit&#224; &#232; confrontare il sonar con un senso umano. Che cosa perdiamo quando l&#8217;acqua &#232; scura? Che cosa guadagna il delfino con l&#8217;eco? Quali tecnologie umane cercano di imitare questa capacit&#224;? Cos&#236; la lettura diventa conversazione.',
        ],
      },
    ],
  },
};

for (const [slug, data] of Object.entries(additions)) {
  const file = path.join(root, 'legacy-html', 'letture', `${slug}.html`);
  let html = readFileSync(file, 'utf8');
  html = html.replace(/\n\s*<article class="story-card">\s*<header><div><span class="level">APPROFONDIMENTO[\s\S]*?(?=\n\s*<article class="story-card">\s*<header><div><span class="level">Fonti)/, '\n');
  const block = renderAdditions(data);
  html = html.replace(/\n\s*<article class="story-card">\s*<header><div><span class="level">Fonti/, `\n${block}\n      <article class="story-card">\n        <header><div><span class="level">Fonti`);
  writeFileSync(file, html, 'utf8');
}

function renderAdditions(data) {
  return toAsciiHtml(data.cards.map((card) => `      <article class="story-card">
        <header><div><span class="level">APPROFONDIMENTO</span><h2>${card.heading}</h2></div><p>${card.subtitle}</p></header>
        <div class="story-text">
${card.paragraphs.map((p) => `          <p>${p}</p>`).join('\n')}
        </div>
        <div class="learning-grid"><div><h3>Parole utili</h3><p>${lessonWords(card.label)}</p></div><div><h3>Per parlare</h3><ol><li>Spiega l&#8217;idea pi&#249; sorprendente in due frasi.</li><li>Usa tre parole nuove in un esempio personale.</li></ol></div></div>
      </article>`).join('\n'));
}

function lessonWords(label) {
  const words = {
    Metodo: 'recuperare, collegamento, contesto, disponibile, flessibile',
    Strategie: 'contrasto, spiegare, ipotesi, correzione, competenza',
    Italiano: 'scheda, collocazione, mini-conversazione, lingua attiva',
    Scienza: 'ricostruire, selezionare, traccia, aspettativa, contesto',
    Cervello: 'attenzione, emozione, sonno, consolidamento, filtro',
    Lingua: 'riconoscere, produrre, automatizzare, frase, comunicare',
    Natura: 'colonia, organismo collettivo, operaia, favo, segnale',
    Danza: 'direzione, distanza, codice, interpretare, incertezza',
    Ambiente: 'impollinazione, biodiversit&#224;, habitat, ecosistema',
    Tecnica: 'glutine, idratazione, fermentazione, struttura, consistenza',
    Cultura: 'pizzaiuolo, stesura, cornicione, patrimonio, gesto',
    Casa: 'preriscaldare, condire, infornare, adattare, risultato',
    Storia: 'bevanda, rito, caff&#232; storico, banco, moka',
    Gusto: 'macinatura, acqua, estrazione, aroma, amaro',
    'Societ&#224;': 'algoritmo, dati, controllo, responsabilit&#224;, verifica',
    Lavoro: 'automazione, professione, formazione, produttivit&#224;',
    Scuola: 'correzione, sforzo cognitivo, pratica, conversazione',
    Biologia: 'ecolocalizzazione, melone, mandibola, profilo acustico',
    Precisione: 'discriminare, bersaglio, limite, efficienza, segnale',
  };
  return words[label] || 'lessico, spiegazione, esempio, discussione';
}

function toAsciiHtml(value) {
  return value.replace(/[^\x00-\x7F]/g, (char) => `&#${char.codePointAt(0)};`);
}

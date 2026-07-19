import { writeFileSync } from 'node:fs';
import path from 'node:path';

const root = process.cwd();

const pages = [
  {
    slug: 'tecniche-di-memoria',
    title: 'Tecniche di memoria',
    category: 'Scienza - lettura graduata',
    image: 'reading-tecniche-memoria.webp',
    alt: 'Schede, mappe mentali e immagini per ricordare parole nuove',
    caption: 'La memoria migliora quando alterniamo attenzione, immagini, recupero attivo e ripasso distribuito.',
    description: 'Tecniche di memoria: lettura graduata A1-C1 con strategie pratiche e spiegazioni scientifiche per ricordare parole nuove.',
    lead: 'Ricordare non significa ripetere all\u2019infinito: significa creare collegamenti, recuperare al momento giusto e usare le parole in situazioni vive.',
    levels: [
      ['a1', 'Presente e frasi brevi', [
        'Quando studi italiano, incontri molte parole nuove. Alcune restano nella mente, altre spariscono dopo poco tempo.',
        'Una tecnica utile \u00e8 collegare una parola a un\u2019immagine. Se impari la parola <strong>chiave</strong>, puoi immaginare una chiave vera che apre una porta.',
        'Anche ripetere aiuta, ma non basta ripetere dieci volte nello stesso momento. \u00c8 meglio tornare sulla parola oggi, domani e poi fra qualche giorno.',
        'Una frase personale rende la parola pi\u00f9 viva. Per esempio: \u201cLa chiave \u00e8 nella mia borsa\u201d. Cos\u00ec la parola non resta sola: vive in una situazione.',
        'Studiare bene non significa studiare tanto in una sola volta. Significa tornare, provare, sbagliare e ricordare di nuovo.'
      ], 'ricordare, parola, immagine, frase, ripetere, provare'],
      ['a2', 'Consigli pratici', [
        'Molti studenti leggono liste di parole, ma la memoria funziona meglio quando l\u2019attenzione \u00e8 attiva. Una lista lunga sembra utile, per\u00f2 spesso resta fragile.',
        'Il ripasso distribuito \u00e8 pi\u00f9 efficace: studi una parola oggi, la ripassi domani e poi la recuperi dopo alcuni giorni. Ogni ritorno rende il ricordo pi\u00f9 stabile.',
        'Un\u2019altra tecnica \u00e8 il recupero attivo. Invece di guardare subito la risposta, chiudi il quaderno e prova a ricordare. Anche se sbagli, il tentativo prepara il cervello a imparare meglio.',
        'Le immagini aiutano molto. Una scena buffa, esagerata o personale resta pi\u00f9 facilmente nella memoria di una definizione astratta.',
        'Per l\u2019italiano, non studiare solo \u201cparole\u201d. Studia piccole frasi: <strong>prendere un caff\u00e8</strong>, <strong>fare una passeggiata</strong>, <strong>avere bisogno di</strong>. La lingua vive nei gruppi di parole.'
      ], 'ripasso distribuito, recupero attivo, lista, scena, gruppo di parole'],
      ['b1', 'Metodo di studio', [
        'Le tecniche di memoria servono a creare pi\u00f9 strade per arrivare alla stessa informazione. Una parola pu\u00f2 essere collegata al suono, a un\u2019immagine, a un gesto, a una frase e a un\u2019emozione.',
        'Il recupero attivo funziona perch\u00e9 obbliga il cervello a cercare l\u2019informazione. Rileggere d\u00e0 una sensazione di familiarit\u00e0, ma ricordare senza guardare \u00e8 un allenamento pi\u00f9 profondo.',
        'Il ripasso distribuito sfrutta un fatto semplice: dimenticare \u00e8 normale. Se recuperi una parola proprio quando sta diventando difficile, la rafforzi.',
        'Una tecnica poco usata \u00e8 spiegare una parola a voce alta. Se riesci a spiegare <strong>comunque</strong>, <strong>anzi</strong> o <strong>magari</strong> con esempi tuoi, non stai solo memorizzando: stai costruendo competenza.',
        'Per questo un buon metodo alterna tre momenti: incontro con la parola, tentativo di recupero, uso in una frase reale. La memoria e la comunicazione lavorano insieme.'
      ], 'familiarit\u00e0, rafforzare, competenza, spiegare, alternare'],
      ['b2', 'Strategie e limiti', [
        'La memoria non \u00e8 un archivio perfetto, ma un sistema dinamico. Ricordiamo meglio ci\u00f2 che recuperiamo spesso, ci\u00f2 che ha un significato personale e ci\u00f2 che appare in contesti diversi.',
        'Il recupero attivo \u00e8 pi\u00f9 efficace della semplice rilettura perch\u00e9 trasforma lo studio in una prova. Non devi aspettare di sapere tutto: puoi testarti anche quando sei incerto.',
        'Le mnemotecniche funzionano soprattutto quando sono personali. Una parola difficile pu\u00f2 essere collegata a un\u2019immagine assurda, a una parola simile nella tua lingua o a un piccolo racconto.',
        'Attenzione per\u00f2: una tecnica non sostituisce l\u2019uso reale. Puoi ricordare una parola con una scena mentale, ma devi poi usarla parlando, scrivendo e ascoltandola in contesto.',
        'Un metodo efficace per una lingua combina ripasso distribuito, recupero attivo, esempi personali e variazione. La stessa parola deve comparire in frasi diverse, con persone diverse e in momenti diversi.'
      ], 'mnemotecnica, contesto, variazione, significato personale, uso reale'],
      ['c1', 'Spiegazione avanzata', [
        'Le tecniche di memoria sono efficaci quando rispettano il funzionamento naturale del ricordo: codifica, associazione, recupero e consolidamento. Non aumentano magicamente la memoria; organizzano meglio il lavoro mentale.',
        'La ricerca su spacing e retrieval practice mostra che distribuire lo studio nel tempo e tentare di recuperare le informazioni favorisce la conservazione a lungo termine. \u00c8 controintuitivo perch\u00e9 lo sforzo sembra un segno di debolezza, mentre spesso \u00e8 proprio il segnale che l\u2019apprendimento sta diventando pi\u00f9 robusto.',
        'Nello studio linguistico, il problema non \u00e8 soltanto ricordare il significato di una parola, ma renderla disponibile quando serve. Un termine conosciuto passivamente non basta se non emerge durante una conversazione.',
        'Per questo conviene costruire schede brevi ma ricche: parola, frase esempio, immagine mentale, collocazione frequente, mini-domanda e data del prossimo ripasso. Una scheda cos\u00ec insegna lessico, grammatica e uso comunicativo.',
        'La domanda migliore non \u00e8 \u201cquante parole ho studiato?\u201d, ma \u201cquante parole riesco a recuperare senza aiuto e usare in una frase vera?\u201d. Questa domanda sposta l\u2019attenzione dalla quantit\u00e0 alla disponibilit\u00e0 reale.'
      ], 'codifica, consolidamento, disponibilit\u00e0 lessicale, collocazione, robusto']
    ],
    facts: [
      'La rilettura d\u00e0 spesso una falsa sensazione di sicurezza: riconoscere una parola non significa saperla recuperare.',
      'Un errore corretto subito pu\u00f2 aiutare l\u2019apprendimento, perch\u00e9 rende pi\u00f9 evidente la differenza tra ipotesi e risposta.',
      'Per le lingue, lo spacing funziona meglio quando il ripasso non \u00e8 solo visivo: bisogna anche ascoltare, pronunciare e produrre frasi.'
    ],
    sources: [
      ['Nature Reviews Psychology', 'https://www.nature.com/articles/s44159-022-00089-1', 'The science of effective learning with spacing and retrieval practice'],
      ['Language Learning', 'https://onlinelibrary.wiley.com/doi/abs/10.1111/lang.12479', 'The Effects of Spaced Practice on Second Language Learning'],
      ['ScienceDirect', 'https://www.sciencedirect.com/science/chapter/bookseries/pii/S0079742116000165', 'How Retrieval Attempts Affect Learning']
    ]
  },
  {
    slug: 'come-funziona-la-memoria-umana',
    title: 'Come funziona la memoria umana',
    category: 'Scienza - lettura graduata',
    image: 'reading-memoria-umana.webp',
    alt: 'Un cervello con connessioni luminose e immagini di ricordi',
    caption: 'La memoria non registra il passato come una videocamera: seleziona, collega e ricostruisce.',
    description: 'Come funziona la memoria umana: lettura graduata A1-C1 su attenzione, memoria di lavoro, ricordi e dimenticanza.',
    lead: 'La memoria \u00e8 meno fotografica di quanto pensiamo: per ricordare bene servono attenzione, collegamenti e recupero.',
    levels: [
      ['a1', 'Presente', [
        'La memoria ci aiuta ogni giorno. Ricordiamo nomi, parole, luoghi, volti e piccoli gesti.',
        'Per ricordare, prima dobbiamo fare attenzione. Se pensiamo ad altro, una parola entra male nella mente.',
        'Alcuni ricordi restano per poco tempo. Altri restano per molti anni, soprattutto se sono importanti per noi.',
        'Anche dimenticare \u00e8 normale. Il cervello non tiene tutto: sceglie, cambia e organizza.',
        'Quando studi italiano, aiutano esempi semplici, immagini e parole usate in una frase.'
      ], 'memoria, ricordare, attenzione, parola, dimenticare'],
      ['a2', 'Descrizione A2', [
        'La memoria umana non funziona come un computer. Non registra tutto in modo perfetto e non conserva ogni dettaglio.',
        'Il primo passo \u00e8 l\u2019attenzione. Quando siamo concentrati, un\u2019informazione pu\u00f2 diventare un ricordo.',
        'Poi il cervello collega la nuova informazione a qualcosa che conosciamo gi\u00e0. Per questo \u00e8 pi\u00f9 facile ricordare una parola se abbiamo un esempio vicino alla nostra vita.',
        'La memoria di lavoro \u00e8 come un piccolo tavolo mentale: ci aiuta a tenere alcune informazioni per poco tempo, mentre facciamo un compito.',
        'Dimenticare non \u00e8 sempre un problema. A volte ci aiuta a non tenere informazioni inutili e a lasciare spazio a ci\u00f2 che serve davvero.'
      ], 'informazione, concentrato, collegare, memoria di lavoro, dettaglio'],
      ['b1', 'Connettivi', [
        'La memoria \u00e8 un processo, non un luogo preciso dove mettiamo le informazioni. Per ricordare, il cervello deve codificare, conservare e recuperare.',
        'La codifica avviene quando trasformiamo un\u2019esperienza in una traccia mentale. Se l\u2019attenzione \u00e8 debole, anche la traccia sar\u00e0 debole.',
        'Il consolidamento rende il ricordo pi\u00f9 stabile. Sonno, emozione e ripetizione possono influenzare questa fase.',
        'Il recupero \u00e8 il momento in cui cerchiamo il ricordo. Ogni recupero pu\u00f2 rafforzarlo, ma pu\u00f2 anche modificarlo un po\u2019.',
        'Nello studio di una lingua, ricordare significa poter trovare una parola nel momento giusto, non solo riconoscerla quando la leggiamo.'
      ], 'codificare, consolidamento, recuperare, traccia mentale, riconoscere'],
      ['b2', 'Contrasti e concessioni', [
        'La memoria umana comprende sistemi diversi: memoria sensoriale, memoria di lavoro, memoria episodica, memoria semantica e abilit\u00e0 procedurali.',
        'Un ricordo pu\u00f2 sembrare chiarissimo e tuttavia essere incompleto. Questo succede perch\u00e9 ricordare non \u00e8 riprodurre, ma ricostruire.',
        'Quando raccontiamo un\u2019esperienza, usiamo dettagli reali, conoscenze generali e aspettative. Per questo due persone possono ricordare lo stesso evento in modi diversi.',
        'La memoria emotiva pu\u00f2 essere molto vivida, ma anche modificabile. L\u2019intensit\u00e0 di un ricordo non garantisce sempre la precisione di ogni dettaglio.',
        'Per imparare l\u2019italiano, questa idea \u00e8 utile: una parola diventa pi\u00f9 stabile quando compare in contesti vari, non quando resta isolata in una lista.'
      ], 'memoria episodica, memoria semantica, ricostruire, vivido, isolato'],
      ['c1', 'Argomentazione', [
        'La memoria umana \u00e8 selettiva, ricostruttiva e legata all\u2019identit\u00e0. Non conserva il passato come un archivio neutro: lo riorganizza in funzione del presente.',
        'Ricordare implica codifica, consolidamento e recupero; la fragilit\u00e0 di uno solo di questi passaggi pu\u00f2 rendere incerto il ricordo. Un\u2019informazione vista distrattamente, per esempio, pu\u00f2 non entrare mai davvero nel sistema.',
        'Il ruolo dell\u2019ippocampo \u00e8 centrale nella formazione di molti ricordi a lungo termine, ma la distinzione tra memoria di lavoro e memoria a lungo termine \u00e8 pi\u00f9 sfumata di quanto sembri nei manuali semplici.',
        'La dimenticanza, spesso percepita come fallimento, ha anche una funzione adattiva: senza selezione saremmo sommersi da dettagli irrilevanti.',
        'Nell\u2019apprendimento linguistico, questa prospettiva invita a creare contesti ricchi. Una parola deve essere vista, ascoltata, detta, scritta e recuperata in momenti diversi.'
      ], 'ippocampo, funzione adattiva, memoria ricostruttiva, identit\u00e0, contesto ricco']
    ],
    facts: [
      'La memoria non \u00e8 una registrazione video: anche i ricordi accurati sono ricostruiti.',
      'La memoria di lavoro e quella a lungo termine interagiscono pi\u00f9 di quanto si pensasse in passato.',
      'Dimenticare pu\u00f2 essere utile: riduce rumore mentale e rende pi\u00f9 facile scegliere le informazioni importanti.'
    ],
    sources: [
      ['ScienceDirect', 'https://www.sciencedirect.com/topics/psychology/reconstructive-memory', 'Reconstructive Memory'],
      ['PubMed', 'https://pubmed.ncbi.nlm.nih.gov/39406238/', 'Working memory and long-term memory in the hippocampus'],
      ['Nature Reviews Psychology', 'https://www.nature.com/articles/s44159-024-00312-1', 'Stability and malleability of emotional autobiographical memories']
    ]
  }
];

pages.push({
  slug: 'api-linguaggio-e-caratteristiche',
  title: 'Le api: caratteristiche e linguaggio',
  category: 'Scienza - lettura graduata',
  image: 'reading-api-linguaggio.webp',
  alt: 'Api su un favo in un prato con una traccia di danza nell\u2019aria',
  caption: 'La danza delle api trasforma direzione, distanza e qualit\u00e0 del cibo in movimento.',
  description: 'Le api: lettura graduata A1-C1 su alveare, impollinazione, danza dell\u2019addome e comunicazione animale.',
  lead: 'Le api non producono solo miele: organizzano una societ\u00e0 complessa e comunicano la posizione del cibo con una danza.',
  levels: [
    ['a1', 'Presente', ['Le api sono piccoli insetti molto importanti. Vivono in gruppo, dentro un alveare.', 'Le api volano sui fiori e prendono nettare e polline. Con il nettare fanno il miele.', 'Quando visitano i fiori, aiutano anche le piante. Questo lavoro si chiama impollinazione.', 'Nell\u2019alveare ci sono molte api operaie, una regina e, in certi periodi, i fuchi.', 'Le api comunicano anche con una danza. Un\u2019ape pu\u00f2 dire alle altre dove trovare fiori buoni.'], 'ape, fiore, miele, alveare, danza, polline'],
    ['a2', 'Descrizione A2', ['Le api sono insetti sociali: vivono in una comunit\u00e0 organizzata, dove ogni individuo ha un compito.', 'Alcune api cercano nettare e polline, altre proteggono l\u2019alveare, altre puliscono o curano le larve.', 'La danza delle api \u00e8 sorprendente. Con movimenti precisi, un\u2019ape informa le compagne sulla direzione e sulla distanza dei fiori.', 'Se il cibo \u00e8 vicino, la danza \u00e8 pi\u00f9 semplice. Se il cibo \u00e8 lontano, la danza diventa pi\u00f9 complessa e somiglia a un otto.', 'Le api sono fondamentali per l\u2019ambiente perch\u00e9 aiutano molte piante a riprodursi e sostengono una parte importante dell\u2019agricoltura.'], 'insetti sociali, nettare, polline, larve, regina'],
    ['b1', 'Relazioni e cause', ['Le api mostrano una forma di organizzazione sorprendente. L\u2019alveare funziona grazie alla collaborazione di migliaia di individui.', 'La danza dell\u2019addome \u00e8 uno dei sistemi di comunicazione animale pi\u00f9 studiati. Non \u00e8 un gesto casuale: contiene informazioni utili per le altre api.', 'La direzione della parte dritta della danza indica l\u2019angolo rispetto al sole. La durata del movimento comunica informazioni sulla distanza.', 'Le api non indicano solo \u201cc\u2019\u00e8 cibo\u201d. Possono comunicare anche quanto una fonte sia interessante, perch\u00e9 una fonte ricca produce danze pi\u00f9 intense o pi\u00f9 ripetute.', 'Proteggere le api significa proteggere anche biodiversit\u00e0, frutta, semi e molte coltivazioni che dipendono dagli impollinatori.'], 'collaborazione, fonte di cibo, comunicazione animale, biodiversit\u00e0, impollinatori'],
    ['b2', 'Lessico specifico', ['Le api sono spesso associate al miele, ma il loro valore ecologico va molto oltre. Come impollinatori, contribuiscono alla riproduzione di numerose specie vegetali.', 'La danza dell\u2019addome traduce un\u2019informazione spaziale in un codice corporeo. La posizione del sole diventa un riferimento, mentre la gravit\u00e0 sul favo aiuta a orientare il movimento.', 'Il sistema non \u00e8 perfetto come un GPS. Le api reclutate arrivano in una zona probabile e poi usano odori, colori e segnali dell\u2019ambiente per trovare i fiori.', 'Un fatto poco noto \u00e8 che la distanza comunicata dipende anche dal paesaggio: vento, ostacoli e fatica influenzano l\u2019esperienza del volo.', 'Pesticidi, perdita di habitat, malattie e cambiamento climatico rendono la vita delle colonie pi\u00f9 difficile. Il problema non riguarda solo le api, ma l\u2019equilibrio degli ecosistemi.'], 'impollinatori, codice corporeo, favo, ecosistema, pesticidi'],
    ['c1', 'Divulgazione avanzata', ['L\u2019alveare rappresenta un modello affascinante di intelligenza distribuita. Nessuna ape possiede una visione completa del sistema, eppure la colonia regola lavoro, difesa, nutrizione e riproduzione.', 'La danza mostra come un\u2019informazione spaziale possa essere tradotta in movimento. La durata della fase vibrante fornisce indizi sulla distanza; l\u2019orientamento rispetto alla verticale rimanda alla direzione rispetto al sole.', 'La comunicazione non elimina l\u2019incertezza. L\u2019ape danzatrice porta anche odori dei fiori visitati, e questi indizi aiutano le compagne a completare la ricerca fuori dall\u2019alveare.', 'Studi recenti suggeriscono che alcune api possano usare le informazioni della danza non solo come istruzioni di volo, ma come indicazioni da integrare con una rappresentazione pi\u00f9 ampia del territorio.', 'Studiare le api significa osservare insieme natura, cooperazione, linguaggio non umano e vulnerabilit\u00e0 ambientale. \u00c8 un tema perfetto per imparare lessico scientifico senza perdere il legame con la vita quotidiana.'], 'intelligenza distribuita, informazione spaziale, orientamento, vulnerabilit\u00e0, territorio']
  ],
  facts: ['La danza a otto comunica direzione e distanza, non solo entusiasmo.', 'L\u2019odore dei fiori resta importante: la danza guida, ma non sostituisce tutti gli altri sensi.', 'La colonia funziona come una rete: molte decisioni emergono da azioni locali, non da un comando centrale.'],
  sources: [['NC State Extension', 'https://content.ces.ncsu.edu/honey-bee-dance-language', 'The Honey Bee Dance Language'], ['ScienceDirect Topics', 'https://www.sciencedirect.com/topics/veterinary-science-and-veterinary-medicine/waggle-dance', 'Waggle Dance'], ['PNAS / PMC', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10041085/', 'Honey bees infer source location from dances']]
});

pages.push({
  slug: 'come-preparare-una-pizza',
  title: 'Come preparare una pizza',
  category: 'Cultura - lettura graduata',
  image: 'reading-preparare-pizza.webp',
  alt: 'Ingredienti per preparare una pizza su un tavolo di cucina',
  caption: 'La pizza \u00e8 una ricetta semplice solo in apparenza: impasto, tempo e calore cambiano tutto.',
  description: 'Come preparare una pizza: lettura graduata A1-C1 su impasto, lievitazione, cornicione e cultura napoletana.',
  lead: 'Preparare una pizza significa capire farina, acqua, lievito, tempo, forno e gesti: una ricetta diventa cultura.',
  levels: [
    ['a1', 'Imperativo semplice', ['Per preparare una pizza servono farina, acqua, lievito, sale, pomodoro, mozzarella e basilico.', 'Prima prepari l\u2019impasto. Metti farina, acqua, lievito e sale in una ciotola e lavori con le mani.', 'Poi l\u2019impasto deve riposare. Dopo alcune ore diventa pi\u00f9 morbido e cresce.', 'Quando \u00e8 pronto, stendi la base con attenzione. Non schiacciare troppo il bordo.', 'Alla fine metti pomodoro e mozzarella. La pizza va in forno molto caldo e si mangia subito.'], 'farina, acqua, lievito, pomodoro, forno, bordo'],
    ['a2', 'Sequenze temporali', ['Preparare una pizza richiede tempo, ma i passaggi sono chiari. Prima si prepara l\u2019impasto, poi si lascia riposare, infine si condisce e si cuoce.', 'Il riposo \u00e8 importante perch\u00e9 il lievito produce gas e rende l\u2019impasto pi\u00f9 leggero.', 'Quando l\u2019impasto \u00e8 pronto, si stende con le mani. Nella pizza napoletana il bordo alto si chiama <strong>cornicione</strong>.', 'Il condimento classico \u00e8 semplice: pomodoro, mozzarella, basilico e olio. Troppi ingredienti possono coprire il sapore della base.', 'La pizza cuoce meglio con molto calore. In un forno a legna la cottura \u00e8 molto rapida; a casa serve pi\u00f9 tempo.'], 'impasto, lievitazione, stendere, cornicione, condimento'],
    ['b1', 'Descrizione di procedura', ['La pizza sembra un piatto semplice, ma ogni fase ha la sua importanza. Un buon impasto nasce dall\u2019equilibrio tra farina, acqua, lievito, sale e tempo.', 'La quantit\u00e0 d\u2019acqua cambia la consistenza. Un impasto pi\u00f9 idratato pu\u00f2 risultare morbido, ma \u00e8 anche pi\u00f9 difficile da lavorare.', 'La lievitazione non deve essere affrettata: se l\u2019impasto riposa abbastanza, sviluppa struttura, profumo e maggiore digeribilit\u00e0.', 'Anche il modo di stendere conta. Le mani spingono l\u2019aria verso il bordo, creando il cornicione. Il mattarello, invece, pu\u00f2 schiacciare troppo l\u2019impasto.', 'Preparare una pizza \u00e8 anche un modo per parlare di cultura italiana: ingredienti locali, gesti manuali, forno, famiglia e convivialit\u00e0.'], 'idratazione, lievitazione, digeribile, mattarello, convivialit\u00e0'],
    ['b2', 'Tecnica e tradizione', ['La preparazione della pizza unisce tecnica e tradizione. Non basta seguire una ricetta: bisogna osservare l\u2019impasto e adattarsi a temperatura, farina e tempo disponibile.', 'La farina contiene proteine che, con acqua e movimento, formano il glutine. Questa rete trattiene i gas prodotti dalla fermentazione e d\u00e0 elasticit\u00e0 alla base.', 'La maturazione dell\u2019impasto \u00e8 diversa dalla semplice crescita visibile. Durante il riposo avvengono trasformazioni che influenzano sapore, profumo e consistenza.', 'Nella tradizione napoletana il gesto del pizzaiuolo non \u00e8 solo funzionale: \u00e8 una competenza trasmessa in bottega, fatta di mano, ritmo e osservazione.', 'Il condimento dovrebbe valorizzare la base senza coprirla. Una pizza equilibrata non accumula sapori, ma costruisce armonia tra impasto, pomodoro, latticino, olio e calore.'], 'glutine, fermentazione, maturazione, pizzaiuolo, equilibrio'],
    ['c1', 'Registro gastronomico', ['La pizza \u00e8 un esempio di come un prodotto gastronomico possa trasformarsi in patrimonio culturale. La sua forza nasce dalla tensione tra semplicit\u00e0 apparente e complessit\u00e0 tecnica.', 'L\u2019impasto dipende da variabili precise: idratazione, forza della farina, quantit\u00e0 di lievito, temperatura, tempo di maturazione e intensit\u00e0 della cottura.', 'L\u2019arte del pizzaiuolo napoletano, riconosciuta dall\u2019UNESCO nel 2017, comprende fasi manuali e sociali: preparazione dell\u2019impasto, staglio, stesura, condimento e cottura nel forno a legna.', 'Il cornicione non \u00e8 una decorazione. \u00c8 il risultato di una manipolazione che conserva gas e struttura, creando contrasto tra bordo gonfio e centro sottile.', 'Preparare una pizza significa eseguire una ricetta, ma anche partecipare a una tradizione viva: una conoscenza pratica che passa attraverso osservazione, ripetizione e comunit\u00e0.'], 'patrimonio culturale, staglio, cornicione, manipolazione, comunit\u00e0']
  ],
  facts: ['Il cornicione nasce anche dal modo in cui l\u2019aria viene spinta verso il bordo durante la stesura.', 'La lievitazione visibile e la maturazione dell\u2019impasto non sono la stessa cosa.', 'L\u2019UNESCO riconosce l\u2019arte del pizzaiuolo come pratica culturale, non semplicemente come ricetta.'],
  sources: [['UNESCO', 'https://ich.unesco.org/en/RL/art-of-neapolitan-Pizzaiuolo-00722', 'Art of Neapolitan Pizzaiuolo'], ['Commissione Nazionale Italiana UNESCO', 'https://www.unesco.it/it/iniziative-dellunesco/patrimonio-culturale-immateriale/larte-del-pizzaiuolo-napoletano/', 'L\u2019Arte del pizzaiuolo napoletano'], ['Ministero della Cultura', 'https://unesco.cultura.gov.it/en/projects/arte-pizzaiuoli-napoletani/', 'The art of Neapolitan Pizzaiuolo']]
});

pages.push({
  slug: 'storia-del-caffe-in-italia',
  title: 'La storia del caff\u00e8 in Italia',
  category: 'Storia - lettura graduata',
  image: 'reading-storia-caffe-italia.webp',
  alt: 'Moka, tazzine e caff\u00e8 in un ambiente storico italiano',
  caption: 'Il caff\u00e8 italiano \u00e8 una storia di luoghi pubblici, macchine, abitudini domestiche e parole quotidiane.',
  description: 'La storia del caff\u00e8 in Italia: lettura graduata A1-C1 su caff\u00e8 storici, espresso, moka e cultura quotidiana.',
  lead: 'Il caff\u00e8 in Italia non \u00e8 solo una bevanda: \u00e8 un rito sociale, una tecnologia domestica e un piccolo vocabolario di gesti.',
  levels: [
    ['a1', 'Presente e passato', ['In Italia molte persone bevono caff\u00e8 ogni giorno. Il caff\u00e8 \u00e8 piccolo, forte e caldo.', 'Spesso si beve al bar o a casa. Al bar una persona entra, chiede un espresso e lo beve in piedi.', 'A casa molte famiglie usano la moka. La moka fa un profumo forte e porta il caff\u00e8 in cucina.', 'Il caff\u00e8 non \u00e8 solo una bevanda. \u00c8 anche una pausa, un incontro e un\u2019abitudine italiana.', 'Per ordinare al bar bastano poche parole, ma sono parole importanti: <strong>un caff\u00e8</strong>, <strong>un cappuccino</strong>, <strong>macchiato</strong>.'], 'caff\u00e8, bar, casa, moka, pausa, espresso'],
    ['a2', 'Imperfetto', ['Il caff\u00e8 \u00e8 arrivato in Italia molti secoli fa. All\u2019inizio era una bevanda nuova, curiosa e anche costosa.', 'Nelle citt\u00e0 italiane sono nati luoghi speciali dove le persone bevevano caff\u00e8, parlavano, leggevano e discutevano.', 'Nel Novecento, l\u2019espresso e la moka hanno cambiato le abitudini. Il caff\u00e8 \u00e8 diventato pi\u00f9 rapido al bar e pi\u00f9 familiare in casa.', 'La moka, inventata nel XX secolo, ha portato un rito quotidiano nelle cucine italiane: acqua sotto, caff\u00e8 al centro, profumo sopra.', 'Ancora oggi il caff\u00e8 accompagna colazione, pausa di lavoro e incontri con gli amici. \u00c8 piccolo, ma occupa molto spazio nella vita sociale.'], 'bevanda, citt\u00e0, espresso, abitudine, incontro'],
    ['b1', 'Storia sociale', ['La storia del caff\u00e8 in Italia \u00e8 anche la storia di un rito sociale. Bere un caff\u00e8 significa spesso fermarsi, parlare e riconoscere un momento della giornata.', 'I caff\u00e8 storici non erano solo luoghi dove bere. Erano spazi di conversazione, politica, letteratura e incontro urbano.', 'Con l\u2019espresso, il caff\u00e8 italiano acquist\u00f2 un ritmo moderno: rapido, intenso, adatto alla vita della citt\u00e0 e al banco del bar.', 'Con la moka, invece, entr\u00f2 nella vita domestica di milioni di famiglie. Il suono della moka e il profumo del caff\u00e8 diventarono segnali familiari.', 'Una cosa interessante \u00e8 il linguaggio: in Italia \u201cprendere un caff\u00e8\u201d pu\u00f2 significare bere, ma anche incontrarsi, fare una pausa o iniziare una conversazione.'], 'rito sociale, caff\u00e8 storici, banco, vita domestica, conversazione'],
    ['b2', 'Contesto storico', ['Il caff\u00e8 in Italia non pu\u00f2 essere spiegato solo come consumo alimentare. \u00c8 un rito codificato, con luoghi, tempi, parole e gesti riconoscibili.', 'Tra Settecento e Ottocento, i caff\u00e8 cittadini divennero spazi di sociabilit\u00e0 e discussione. In questi luoghi si leggevano giornali, si parlava di politica e si costruivano relazioni.', 'Nel Novecento, la macchina per espresso ridefin\u00ec l\u2019esperienza del caff\u00e8. La pressione, la crema e la rapidit\u00e0 trasformarono una bevanda in un gesto urbano.', 'La moka rese domestico un immaginario che prima apparteneva soprattutto al bar. Non produce un espresso identico a quello professionale, ma costruisce un rito familiare potentissimo.', 'Questa doppia identit\u00e0 spiega perch\u00e9 il caff\u00e8 sia ancora cos\u00ec centrale: \u00e8 pubblico e privato, veloce e rituale, quotidiano e simbolico.'], 'sociabilit\u00e0, macchina per espresso, crema, rito familiare, simbolico'],
    ['c1', 'Analisi culturale', ['La storia del caff\u00e8 in Italia mostra come una bevanda importata possa diventare un simbolo nazionale attraverso pratiche sociali, oggetti tecnici e abitudini linguistiche.', 'I caff\u00e8 storici furono luoghi di mediazione culturale: spazi pubblici in cui leggere, discutere e costruire appartenenza urbana. Il caff\u00e8 non era solo consumo, ma anche tempo condiviso.', 'L\u2019espresso e la moka rappresentano due modelli complementari di modernit\u00e0 italiana. Il primo concentra velocit\u00e0, macchina e spazio pubblico; la seconda porta tecnologia, profumo e ritualit\u00e0 nella casa.', 'Anche la qualit\u00e0 del caff\u00e8 dipende da variabili meno visibili: macinatura, acqua, temperatura, pressione, pulizia della macchina e freschezza del prodotto.', 'Parlare di caff\u00e8 significa quindi parlare di identit\u00e0 quotidiana, storia materiale e relazioni sociali. Una tazzina pu\u00f2 contenere molto pi\u00f9 di una bevanda.'], 'mediazione culturale, spazio pubblico, ritualit\u00e0, storia materiale, macinatura']
  ],
  facts: ['La moka non fa tecnicamente lo stesso espresso del bar, ma ha costruito un rito domestico fortissimo.', 'Il caff\u00e8 italiano \u00e8 anche un sistema di parole: macchiato, ristretto, lungo, corretto, al banco.', 'La qualit\u00e0 in tazza dipende molto anche dall\u2019acqua e dall\u2019estrazione, non solo dalla miscela.'],
  sources: [['Accademia del Caff\u00e8 Espresso', 'https://accademiaespresso.com/en/about/', 'Accademia del caff\u00e8 espresso'], ['Specialty Coffee Association', 'https://sca.coffee/sca-news/25/issue-9/english/water-and-coffee-acidity-how-to-adapt-your-water-for-different-extraction-methods-25-magazine-issue-9-pxjby', 'Water and Coffee Acidity'], ['Specialty Coffee Association', 'https://sca.coffee/sca-news/25/issue-15/how-hot-is-hot-enough-brew-temperature-sensory-profile-and-consumer-acceptance-of-brewed-coffee-5dj5b', 'Brew Temperature and Coffee']]
});

pages.push({
  slug: 'futuro-intelligenza-artificiale',
  title: 'Il futuro dell\u2019intelligenza artificiale',
  category: 'Tecnologia - lettura graduata',
  image: 'reading-futuro-intelligenza-artificiale.webp',
  alt: 'Una figura digitale luminosa in una citt\u00e0 moderna con simboli di opportunit\u00e0 e rischio',
  caption: 'L\u2019intelligenza artificiale cambia lavoro, scuola e creativit\u00e0, ma richiede competenze critiche.',
  description: 'Il futuro dell\u2019intelligenza artificiale: lettura graduata A1-C1 su benefici, rischi, scuola, lavoro e responsabilit\u00e0.',
  lead: 'Il futuro dell\u2019IA non dipende solo dai programmi: dipende da regole, competenze, dati e decisioni umane.',
  levels: [
    ['a1', 'Futuro semplice', ['L\u2019intelligenza artificiale, o IA, \u00e8 una tecnologia. Aiuta computer e programmi a fare alcune attivit\u00e0 difficili.', 'Oggi l\u2019IA pu\u00f2 tradurre parole, rispondere a domande, creare immagini e aiutare nel lavoro.', 'Nel futuro, l\u2019IA potr\u00e0 aiutare medici, insegnanti, studenti e aziende.', 'Ma dobbiamo usarla con attenzione. Una risposta veloce non \u00e8 sempre una risposta giusta.', 'La tecnologia dipende da come le persone la usano. Per questo servono domande, controlli e responsabilit\u00e0.'], 'tecnologia, computer, programma, futuro, attenzione'],
    ['a2', 'Opinioni A2', ['L\u2019intelligenza artificiale \u00e8 gi\u00e0 presente nella vita quotidiana: telefoni, app, motori di ricerca e strumenti di lavoro.', 'I benefici possono essere importanti. L\u2019IA pu\u00f2 aiutare a studiare, organizzare informazioni e trovare soluzioni pi\u00f9 velocemente.', 'Ci sono per\u00f2 anche rischi: alcuni lavori possono cambiare, i dati personali possono essere usati male e le informazioni false possono sembrare vere.', 'Per questo molte persone pensano che servano regole chiare e una buona educazione digitale.', 'Un uso intelligente dell\u2019IA non elimina lo studio. Al contrario, richiede pi\u00f9 capacit\u00e0 di fare domande e controllare le risposte.'], 'app, dati personali, regole, benefici, rischi'],
    ['b1', 'Condizionale', ['Il futuro dell\u2019intelligenza artificiale dipender\u00e0 dalle scelte che facciamo oggi. Non esiste un solo futuro possibile.', 'Da una parte, l\u2019IA pu\u00f2 rendere pi\u00f9 rapido il lavoro, aiutare la ricerca e offrire strumenti personalizzati per l\u2019istruzione.', 'Dall\u2019altra parte, esistono rischi reali: perdita di privacy, dipendenza dagli strumenti automatici, errori difficili da vedere e diffusione di contenuti falsi.', 'Nel lavoro, alcuni compiti potrebbero essere automatizzati, mentre altri potrebbero diventare pi\u00f9 creativi grazie alla collaborazione con sistemi intelligenti.', 'La domanda centrale non \u00e8 se usare l\u2019IA, ma come usarla in modo trasparente, controllabile e utile alle persone.'], 'privacy, contenuti falsi, automatizzare, trasparente, controllabile'],
    ['b2', 'Argomentazione', ['L\u2019intelligenza artificiale sta entrando in scuola, medicina, arte, industria, giustizia e comunicazione. Il suo impatto non sar\u00e0 uguale in tutti i settori.', 'I benefici sono evidenti quando riduce compiti ripetitivi o analizza grandi quantit\u00e0 di dati. In questi casi pu\u00f2 liberare tempo per decisioni pi\u00f9 complesse.', 'Tuttavia, una tecnologia potente pu\u00f2 amplificare disuguaglianze e pregiudizi se i dati sono incompleti, distorti o raccolti senza trasparenza.', 'Nel campo educativo, l\u2019IA pu\u00f2 personalizzare esercizi e spiegazioni, ma pu\u00f2 anche indebolire l\u2019apprendimento se gli studenti delegano ogni sforzo cognitivo.', 'Il futuro dell\u2019IA richiede innovazione, educazione, controllo pubblico e responsabilit\u00e0. La competenza pi\u00f9 importante potrebbe essere saper collaborare con la macchina senza smettere di pensare.'], 'pregiudizi, disuguaglianze, delegare, controllo pubblico, responsabilit\u00e0'],
    ['c1', 'Registro critico', ['Il dibattito sull\u2019intelligenza artificiale riguarda la distribuzione del potere conoscitivo e decisionale nella societ\u00e0. Chi progetta i sistemi, chi possiede i dati e chi controlla gli errori avr\u00e0 un ruolo decisivo.', 'Un\u2019IA capace di produrre testi, immagini, codice e previsioni pu\u00f2 ampliare le possibilit\u00e0 umane, ma pu\u00f2 anche rendere opachi processi che dovrebbero restare spiegabili e contestabili.', 'Il rischio pi\u00f9 sottile \u00e8 la delega progressiva del giudizio. Se una decisione automatica appare neutrale, possiamo dimenticare che dietro ci sono dati, scelte tecniche, obiettivi economici e limiti statistici.', 'Secondo analisi internazionali, l\u2019IA generativa pu\u00f2 trasformare soprattutto lavori basati su conoscenza, comunicazione e informazione, non solo attivit\u00e0 manuali o ripetitive.', 'Un futuro desiderabile richiede competenza critica: non basta usare l\u2019IA, bisogna capirne limiti, incentivi, costi sociali e conseguenze sul modo in cui impariamo, lavoriamo e decidiamo.'], 'potere decisionale, opaco, contestabile, delega del giudizio, competenza critica']
  ],
  facts: ['L\u2019IA generativa non riguarda solo lavori ripetitivi: pu\u00f2 trasformare professioni basate su testi, analisi e comunicazione.', 'Una risposta fluida pu\u00f2 sembrare autorevole anche quando \u00e8 sbagliata: la verifica resta una competenza centrale.', 'A scuola, l\u2019IA pu\u00f2 aiutare o danneggiare: dipende da quanto sostiene lo sforzo dello studente invece di sostituirlo.'],
  sources: [['OECD', 'https://www.oecd.org/en/topics/artificial-intelligence-and-education-and-skills.html', 'Artificial intelligence and education and skills'], ['OECD', 'https://www.oecd.org/en/publications/job-creation-and-local-economic-development-2024_83325127-en/full-report/component-7.html', 'Generative AI and labour markets'], ['OECD.AI', 'https://oecd.ai/en/ai-publications/initial-considerations-genai', 'Initial policy considerations for generative AI']]
});

for (const page of pages) {
  writeFileSync(path.join(root, 'legacy-html', 'letture', `${page.slug}.html`), renderPage(page));
}

function renderPage(page) {
  const url = `https://italianoconmartin.com/letture/${page.slug}.html`;
  return toAsciiHtml(`<!doctype html>
<html lang="it">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>${escapeHtml(page.title)} A1-C1 | Italiano con Martin</title>
  <meta name="description" content="${escapeHtml(page.description)}">
  <link rel="canonical" href="${url}">
  <meta name="robots" content="index,follow,max-image-preview:large">
  <meta name="author" content="Martin Modena">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Italiano con Martin">
  <meta property="og:title" content="${escapeHtml(page.title)} A1-C1 | Italiano con Martin">
  <meta property="og:description" content="${escapeHtml(page.lead)}">
  <meta property="og:url" content="${url}">
  <meta property="og:image" content="https://italianoconmartin.com/assets/${page.image}">
  <meta property="og:image:width" content="960">
  <meta property="og:image:height" content="540">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeHtml(page.title)} A1-C1 | Italiano con Martin">
  <meta name="twitter:description" content="${escapeHtml(page.lead)}">
  <meta name="twitter:image" content="https://italianoconmartin.com/assets/${page.image}">
  <script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', url, headline: page.title, inLanguage: 'it', educationalLevel: 'A1-C1', image: `https://italianoconmartin.com/assets/${page.image}` })}</script>
  <link rel="stylesheet" href="../styles.css">
  <link rel="icon" href="../favicon.png" type="image/png">
  <link rel="apple-touch-icon" href="../apple-touch-icon.png">
</head>
<body>
<header class="site-header">
  <div class="container nav-wrap">
    <a class="brand" href="../"><img class="brand-avatar" src="../assets/martin-photo.svg" alt="Martin"><span>Italiano con Martin</span></a>
    <nav><a href="../letture/">Letture</a><a href="../grammatica/">Grammatica</a><a class="nav-cta" href="https://preply.com/it/tutor/5086125" target="_blank" rel="noopener">Prenota su Preply</a></nav>
  </div>
</header>
<main>
  <section class="story-hero">
    <div class="container">
      <p class="breadcrumbs"><a href="../">Home</a> / <a href="./">Letture</a> / ${escapeHtml(page.title)}</p>
      <div class="story-hero-grid">
        <div>
          <p class="eyebrow">${escapeHtml(page.category)}</p>
          <h1>${escapeHtml(page.title)}</h1>
          <p class="lead">${escapeHtml(page.lead)}</p>
          <div class="level-nav"><a href="#a1">A1</a><a href="#a2">A2</a><a href="#b1">B1</a><a href="#b2">B2</a><a href="#c1">C1</a></div>
        </div>
        <figure class="story-figure">
          <img src="../assets/${page.image}" alt="${escapeHtml(page.alt)}" width="960" height="540" decoding="async">
          <figcaption>${escapeHtml(page.caption)}</figcaption>
        </figure>
      </div>
    </div>
  </section>
  <section class="section compact-top">
    <div class="container">
${page.levels.map((level) => renderLevel(level, page.title)).join('\n')}
      <article class="story-card">
        <header><div><span class="level">INFO</span><h2>Tre cose poco conosciute</h2></div><p>Per parlarne in classe</p></header>
        <div class="story-text">
${page.facts.map((fact, i) => `          <p><strong>${i + 1}. ${escapeHtml(fact.split(':')[0])}${fact.includes(':') ? ':' : ''}</strong>${fact.includes(':') ? escapeHtml(fact.slice(fact.indexOf(':') + 1)) : ''}</p>`).join('\n')}
        </div>
      </article>
      <article class="story-card">
        <header><div><span class="level">Fonti</span><h2>Fonti usate</h2></div><p>Per approfondire</p></header>
        <div class="story-text">
${page.sources.map(([name, href, label]) => `          <p>${escapeHtml(name)}, <a href="${href}" target="_blank" rel="noopener">${escapeHtml(label)}</a>.</p>`).join('\n')}
        </div>
      </article>
    </div>
  </section>
  <section class="conversion-section">
    <div class="container conversion-card">
      <div><h2>Vuoi trasformare questa lettura in conversazione?</h2><p>Leggi il livello giusto per te e portiamo parole, idee e dubbi in una lezione individuale.</p></div>
      <div class="conversion-actions"><a class="button light" href="https://preply.com/it/tutor/5086125" target="_blank" rel="noopener">Prenota su Preply</a></div>
    </div>
  </section>
</main>
<footer><div class="container footer-grid"><div><strong>Italiano con Martin</strong><p>Letture graduate, grammatica chiara e lezioni online.</p></div><div><a href="../letture/">Letture</a><a href="../grammatica/">Grammatica</a></div></div></footer>
<script src="../script.js"></script>
</body>
</html>
`);
}

function renderLevel([id, subtitle, paragraphs, lexicon], title) {
  return `      <article class="story-card" id="${id}">
        <header><div><span class="level">${id.toUpperCase()}</span><h2>${escapeHtml(title)} - livello ${escapeHtml(id.toUpperCase())}</h2></div><p>${escapeHtml(subtitle)}</p></header>
        <div class="story-text">
${paragraphs.map((p) => `          <p>${p}</p>`).join('\n')}
        </div>
        <div class="learning-grid"><div><h3>Scheda lessico</h3><p>${escapeHtml(lexicon)}</p></div><div><h3>Scheda attiva</h3><ol><li>Riassumi l\u2019idea principale con parole tue.</li><li>Scegli due parole nuove e usale in una frase personale.</li></ol></div></div>
      </article>`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function toAsciiHtml(value) {
  return value.replace(/[^\x00-\x7F]/g, (char) => `&#${char.codePointAt(0)};`);
}

// Testo italiano della lettura «L'insetto con gli ingranaggi» (Issus coleoptratus).
//
// Questo testo e' materiale di studio: resta identico in tutte e 9 le lingue,
// come vuole REGOLE_LINGUE.md. Cambia solo la cornice (titoli, etichette,
// glosse), che sta in scripts/data/issus-reading-i18n.mjs.
//
// I cinque livelli contengono LE STESSE INFORMAZIONI, dette con parole via via
// piu' complesse: chi legge solo A1 non perde nessuno dei nove fatti.

const p = (...parts) => parts.map((t) => `<p>${t}</p>`).join('');

export const levels = [
  {
    id: 'a1',
    level: 'A1',
    text: p(
      'Questo insetto si chiama <em>Issus coleoptratus</em>. È molto piccolo: da adulto è lungo 5 o 6 millimetri. Vive sulle foglie, per esempio sull’edera, e beve la linfa delle piante.',
      'Il piccolo dell’insetto ha una cosa unica al mondo: due ingranaggi veri. Sono alla base delle due zampe posteriori. Sono due strisce con i denti, e i denti si incastrano.',
      'Ogni striscia è lunga 400 micrometri: sono quattro decimi di millimetro. Ogni striscia ha 10 o 12 denti.',
      'Gli ingranaggi servono per saltare. Le due zampe partono insieme: la differenza è di 30 microsecondi, cioè 30 milionesimi di secondo. Senza gli ingranaggi l’insetto gira su se stesso e cade male.',
      'Il salto è velocissimo. L’insetto arriva a 3,9 metri al secondo in 2 millesimi di secondo. La spinta è quasi 200 volte la forza di gravità.',
      'Perché l’insetto non usa i nervi? Perché i segnali dei nervi sono troppo lenti. Gli ingranaggi sono meccanici e non aspettano nessun ordine.',
      'I denti hanno la base rotonda. Anche gli ingegneri fanno così: un dente con la base rotonda non si rompe facilmente.',
      'Da adulto l’insetto perde gli ingranaggi. Cambia pelle e non li rifà più. Poi le zampe lavorano con l’attrito.',
      'Due scienziati inglesi, Malcolm Burrows e Gregory Sutton, trovano questi ingranaggi nel 2013. È il primo ingranaggio che funziona dentro un animale.'
    ),
    words: ['ingranaggio', 'zampa', 'dente', 'saltare', 'spinta'],
    questions: [
      'Dove sono gli ingranaggi dell’insetto?',
      'Quanti denti ha ogni striscia?',
      'Che cosa succede quando l’insetto diventa adulto?',
    ],
  },
  {
    id: 'a2',
    level: 'A2',
    text: p(
      'L’<em>Issus coleoptratus</em> è una piccola cicalina europea: da adulta misura fra 5 e 7 millimetri e non sa volare. Vive sull’edera e sulle foglie degli alberi, dove beve la linfa.',
      'Nel 2013 due ricercatori dell’Università di Cambridge, Malcolm Burrows e Gregory Sutton, hanno guardato al microscopio le zampe dei piccoli e hanno trovato una cosa che nessuno aveva mai visto in un animale: due ingranaggi dentati che si incastrano.',
      'Ogni ingranaggio è una striscia curva lunga circa 400 micrometri, cioè quattro decimi di millimetro, con 10 o 12 denti.',
      'Gli scienziati hanno filmato il salto con una telecamera velocissima. Le due zampe posteriori sono partite insieme, con una differenza di soli 30 microsecondi: 30 milionesimi di secondo.',
      'Questa precisione serve perché la spinta è enorme: l’insetto ha raggiunto 3,9 metri al secondo in 2 millesimi di secondo, quasi 200 volte l’accelerazione di gravità. Se una zampa parte prima dell’altra, il corpo gira su se stesso.',
      'Il sistema nervoso non può fare questo lavoro: gli impulsi dei nervi sono troppo lenti per una differenza così piccola. La natura ha risolto il problema con la meccanica, non con il cervello.',
      'I denti non finiscono con un angolo vivo alla base, ma con una curva morbida. Gli ingegneri usano la stessa forma nelle ruote dentate delle macchine, perché così il dente non si spezza.',
      'Da adulto l’insetto non ha più gli ingranaggi: dopo l’ultima muta le zampe sono lisce e lavorano soltanto con l’attrito.',
      'La ricerca è uscita sulla rivista «Science» il 13 settembre 2013.'
    ),
    words: ['cicalina', 'muta', 'attrito', 'ricercatore', 'microscopio'],
    questions: [
      'Che cosa hanno trovato Burrows e Sutton nelle zampe dei piccoli?',
      'Perché le due zampe devono partire insieme?',
      'Quanto è veloce il salto dell’insetto?',
    ],
  },
  {
    id: 'b1',
    level: 'B1',
    text: p(
      'L’<em>Issus coleoptratus</em> è una cicalina diffusa in Europa: l’adulto misura fra 5 e 7 millimetri, non vola e si sposta soprattutto saltando. I piccoli, che gli studiosi chiamano ninfe, passano l’inverno sull’edera e sulle piante sempreverdi.',
      'La ninfa ha alla base delle zampe posteriori due strisce curve di denti che si incastrano fra loro come le ruote dentate di un orologio. Ogni striscia è lunga circa 400 micrometri — quattro decimi di millimetro — e porta da dieci a dodici denti.',
      'A che cosa serve un ingranaggio dentro una zampa? A far partire le due gambe nello stesso istante. Quando l’insetto salta, le due zampe si muovono con uno scarto di 30 microsecondi, cioè trenta milionesimi di secondo: se una spingesse anche solo un po’ prima dell’altra, il corpo comincerebbe a girare su se stesso e il salto finirebbe di lato.',
      'La precisione serve perché la spinta è violentissima: la ninfa raggiunge 3,9 metri al secondo in due millesimi di secondo, un’accelerazione di quasi duecento volte quella di gravità.',
      'Il punto interessante è perché di questo non si occupa il sistema nervoso, come succede negli animali grandi. La risposta è il tempo: un impulso nervoso deve nascere, passare da una cellula all’altra e arrivare al muscolo, e tutto questo richiede molto più di trenta milionesimi di secondo. L’insetto non aspetta un ordine: è la forma stessa delle zampe che garantisce la sincronia.',
      'Anche il disegno dei denti è sorprendente. Alla base ogni dente non forma un angolo vivo, ma una curva morbida. È esattamente la soluzione che gli ingegneri adottano nelle ruote dentate d’acciaio, perché l’angolo vivo è il punto dove il metallo si spezza.',
      'Poi arriva il paradosso: l’adulto gli ingranaggi non li ha. Spariscono con l’ultima muta, e le zampe si sincronizzano solo per attrito, appoggiandosi una all’altra. Un’ipotesi è che un dente rotto sarebbe un guaio permanente: la ninfa cambia pelle e ricostruisce tutto, l’adulto no.',
      'La scoperta è di Malcolm Burrows e Gregory Sutton, dell’Università di Cambridge, ed è stata pubblicata su «Science» il 13 settembre 2013. È il primo ingranaggio funzionante mai trovato in un essere vivente.'
    ),
    words: ['ninfa', 'scarto', 'sincronia', 'spingere', 'meccanismo'],
    questions: [
      'Che cosa succederebbe se una zampa spingesse prima dell’altra?',
      'Perché il sistema nervoso non può garantire questa sincronia?',
      'Perché la base dei denti è arrotondata?',
    ],
  },
  {
    id: 'b2',
    level: 'B2',
    text: p(
      'L’<em>Issus coleoptratus</em> non ha niente di appariscente: è una cicalina europea di cinque-sette millimetri, incapace di volare, che vive succhiando la linfa di edera, tigli, querce e noccioli. La sua particolarità sta in uno stadio che dura poche settimane, quello della ninfa, e in un dettaglio che si vede soltanto al microscopio elettronico.',
      'Alla base delle zampe posteriori, sul segmento chiamato trocantere, la ninfa porta due file curve di denti rivolte l’una verso l’altra. Ogni fila misura circa 400 micrometri, quattro decimi di millimetro, e conta da dieci a dodici denti; quando le zampe si caricano per il salto i denti si impegnano fra loro, e le due articolazioni diventano un meccanismo solo.',
      'La misura decisiva è temporale. Riprendendo i salti con telecamere ad altissima velocità, Malcolm Burrows e Gregory Sutton hanno registrato uno sfasamento massimo di 30 microsecondi fra la partenza di una zampa e quella dell’altra: trenta milionesimi di secondo dentro un movimento che dura in tutto due millesimi di secondo.',
      'Il motivo di tanta severità sta nei numeri del salto: la ninfa passa da ferma a 3,9 metri al secondo — circa quattordici chilometri all’ora — in due millesimi di secondo, sottoponendo il proprio corpo a un’accelerazione di quasi duecento g. A queste energie una minima asimmetria di spinta si traduce in una rotazione incontrollata, e l’insetto atterrerebbe dove capita.',
      'Qui si capisce perché la soluzione non è nervosa. Nei vertebrati la simmetria dei movimenti è affidata al sistema nervoso, ma un impulso deve essere generato, condotto lungo la fibra e tradotto in contrazione muscolare, e la precisione che se ne ottiene si misura in millesimi di secondo, non in milionesimi. L’ingranaggio elimina il problema alla radice: non coordina due ordini, rende fisicamente impossibile che una zampa vada per conto suo.',
      'Il profilo dei denti aggiunge un dettaglio quasi imbarazzante per chi progetta macchine: sono asimmetrici e raccordati alla base con una curva, la stessa soluzione adottata nelle trasmissioni meccaniche per distribuire lo sforzo ed evitare che la rottura parta dall’angolo.',
      'Con l’ultima muta gli ingranaggi scompaiono. L’adulto sincronizza le zampe per semplice attrito fra due superfici che si toccano, e le ipotesi degli autori sono due: da un lato il corpo più grande rende meno critica la sincronia, dall’altro un dente spezzato sarebbe un danno definitivo, perché l’adulto non cambia più pelle e non può ricostruire nulla.',
      'Il lavoro è uscito su «Science» il 13 settembre 2013 con il titolo <em>Interacting gears synchronize propulsive leg movements in a jumping insect</em>. Prima di allora l’ingranaggio era considerato un’invenzione esclusivamente umana: in natura esistevano forme dentate ornamentali, non un meccanismo che trasmette davvero il movimento.'
    ),
    words: ['sfasamento', 'trocantere', 'articolazione', 'asimmetria', 'raccordato'],
    questions: [
      'In che modo la durata del salto rende impossibile una soluzione nervosa?',
      'Che cosa hanno in comune i denti dell’insetto e quelli di una trasmissione meccanica?',
      'Quali due ipotesi spiegano la scomparsa degli ingranaggi nell’adulto?',
    ],
  },
  {
    id: 'c1',
    level: 'C1',
    text: p(
      'Il caso dell’<em>Issus coleoptratus</em> interessa meno per la stranezza dell’oggetto che per il problema che risolve. Il problema è di controllo: come si ottiene una simmetria perfetta fra due arti quando il movimento dura meno di quanto occorra a un impulso nervoso per essere trasmesso e interpretato.',
      'La ninfa lo risolve spostando il controllo dal comando alla forma. Sui trocanteri delle zampe posteriori due settori dentati curvi, lunghi circa quattrocento micrometri e provvisti di dieci-dodici denti ciascuno, si ingranano prima della spinta: da quel momento le due articolazioni non sono più indipendenti, e la simmetria non è più un risultato da ottenere, ma un vincolo geometrico.',
      'Le riprese ad alta velocità di Burrows e Sutton fissano lo sfasamento residuo a trenta microsecondi, dentro un salto che porta l’animale a 3,9 metri al secondo in due millesimi di secondo, con un’accelerazione prossima ai duecento g. È un ordine di grandezza che il coordinamento nervoso non raggiunge: il passaggio del segnale fra le cellule e la contrazione del muscolo introducono ritardi variabili nell’ordine del millesimo di secondo, mille volte sopra la tolleranza richiesta.',
      'Vale la pena notare la geometria dei denti, asimmetrici e raccordati alla radice: è la soluzione che la meccanica industriale adotta per abbassare la concentrazione degli sforzi. La somiglianza non implica un progetto comune; indica piuttosto che, dato lo stesso vincolo fisico — trasmettere una forza elevata attraverso un contatto minuscolo senza innescare una frattura — lo spazio delle soluzioni efficaci è ristretto. È convergenza, non imitazione.',
      'Il dato che complica ogni lettura semplicistica è la scomparsa del meccanismo nell’adulto, che affida la sincronia all’attrito fra le superfici delle zampe. Un ingranaggio biologico non si ripara: la ninfa può permetterselo perché ogni muta lo rigenera, l’imago no. Una struttura tanto raffinata resta dunque confinata nella fase in cui è sostituibile, e questo dice qualcosa di generale sui limiti dei materiali biologici rispetto a quelli metallici.',
      'Resta il rilievo storico. Fino al 2013 l’ingranaggio funzionante era considerato un’esclusiva della tecnica umana, con radici che arrivano al meccanismo di Anticitera. Il lavoro pubblicato su «Science» il 13 settembre di quell’anno ha spostato quella frontiera e ha alimentato una linea di ricerca in microrobotica, dove il problema è identico: sincronizzare attuatori minuscoli senza affidarsi a un controllo elettronico troppo lento.'
    ),
    words: ['vincolo', 'convergenza', 'imago', 'attuatore', 'frattura'],
    questions: [
      'Che differenza c’è fra risolvere un problema con il comando e risolverlo con la forma?',
      'Perché una somiglianza fra natura e tecnica non dimostra un’imitazione?',
    ],
  },
];

export const insights = [
  {
    key: 'app1',
    text: p(
      'Negli animali grandi la simmetria dei movimenti è compito del sistema nervoso: il cervello manda due ordini, i muscoli obbediscono, e se uno parte un attimo prima l’errore si corregge strada facendo. Nell’<em>Issus</em> non c’è tempo per correggere niente: il salto dura due millesimi di secondo e finisce prima che qualsiasi correzione arrivi.',
      'Il problema non è la distanza. In un insetto lungo pochi millimetri il segnale ha pochissima strada da fare. Il problema sono i passaggi: ogni volta che il segnale passa da una cellula all’altra si perde qualche decimo di millesimo di secondo, e il muscolo ne perde altri prima di sviluppare forza. Soprattutto, questi ritardi non sono mai identici a destra e a sinistra.',
      'Trenta microsecondi sono trenta milionesimi di secondo, circa mille volte meno del tempo che serve a un occhio umano per accorgersi di qualcosa. Chiedere questa regolarità a due catene nervose separate è come chiedere a due persone di battere le mani nello stesso identico istante, senza guardarsi e senza contare.',
      'L’ingranaggio cambia la domanda. Non coordina due movimenti: ne fa uno solo. Quando i denti sono impegnati, la zampa destra non può muoversi senza muovere la sinistra, perché sono la stessa macchina. È la differenza fra dare un ordine e togliere un’alternativa, e in ingegneria la seconda è quasi sempre la strada più affidabile.'
    ),
    words: ['sinapsi', 'ritardo', 'obbedire', 'correggere', 'affidabile'],
    questions: [
      'Perché è più sicuro togliere un’alternativa che dare un ordine?',
      'In quali macchine costruite dall’uomo si usa lo stesso principio?',
    ],
  },
  {
    key: 'app2',
    text: p(
      'La parte più difficile da spiegare non sono gli ingranaggi, ma la loro scomparsa. La ninfa dell’<em>Issus</em> li ha in tutti i suoi stadi; l’adulto, dopo l’ultima muta, ha le zampe lisce e le sincronizza per attrito, appoggiando una superficie contro l’altra.',
      'La prima ipotesi riguarda la riparazione. Un dente scheggiato in un ingranaggio d’acciaio si sostituisce; un dente scheggiato di chitina no. Finché l’insetto cresce, ogni muta rifà tutto da capo e un danno dura pochi giorni. L’adulto non cambia più pelle: un dente rotto resterebbe rotto per il resto della vita, e un ingranaggio con un dente in meno lavora peggio di nessun ingranaggio.',
      'La seconda ipotesi riguarda la taglia. L’adulto è più grande e più pesante, la sua rotazione è più lenta a innescarsi e le superfici di contatto fra le zampe sono più ampie: l’attrito, che nella ninfa non basterebbe, nell’adulto è sufficiente.',
      'Le due spiegazioni non si escludono, e nessuna delle due è ancora dimostrata. È un buon esempio di come funziona la ricerca: la misura — trenta microsecondi, quattrocento micrometri, dieci-dodici denti — è certa, l’interpretazione è ancora aperta. Chi studia italiano lo nota subito nella lingua degli scienziati: <em>si ipotizza</em>, <em>sembra probabile</em>, <em>una possibile spiegazione</em>.'
    ),
    words: ['chitina', 'scheggiare', 'ipotesi', 'taglia', 'superficie'],
    questions: [
      'Perché un ingranaggio con un dente rotto è peggio di nessun ingranaggio?',
      'Che differenza c’è fra una misura e la sua interpretazione?',
    ],
  },
];

export const labs = [
  {
    key: 'lab1',
    text: p(
      '<strong>L’ingranaggio</strong> è l’insieme di due ruote dentate che lavorano insieme; <strong>la ruota dentata</strong> è il singolo pezzo e <strong>il dente</strong> è la sporgenza che entra nell’altra. Due ruote <strong>si incastrano</strong> o, in linguaggio tecnico, <strong>ingranano</strong>. Il verbo vive anche al figurato: «la cosa non ingrana» significa che non parte, non funziona.',
      'Attenzione a <strong>la marcia</strong>: in automobile è la posizione del cambio («metti la seconda»), ma la stessa parola indica il camminare («una marcia di venti chilometri») e il ritmo («a marcia ridotta»). <strong>Innestare la marcia</strong> vuol dire farla entrare; <strong>ingranare la marcia</strong> si sente spesso e vuol dire la stessa cosa.',
      'Nel testo tornano tre unità di misura: <strong>il micrometro</strong> (un millesimo di millimetro), <strong>il microsecondo</strong> (un milionesimo di secondo) e <strong>il millesimo di secondo</strong>, che si chiama anche <strong>millisecondo</strong>. Il prefisso <em>micro-</em> vale un milionesimo, il prefisso <em>milli-</em> un millesimo: la stessa regola vale per <em>microgrammo</em> e <em>millilitro</em>.',
      'Per il movimento servono tre parole: <strong>la spinta</strong> è la forza che manda avanti, <strong>l’attrito</strong> è la resistenza fra due superfici che si toccano, <strong>lo scarto</strong> è la differenza fra due valori. Da <em>spingere</em> viene <em>la spinta</em>, da <em>scartare</em> viene <em>lo scarto</em>: l’italiano forma moltissimi nomi così, prendendo il verbo e togliendo la desinenza.'
    ),
  },
  {
    key: 'lab2',
    text: p(
      'I numeri decimali si leggono con la virgola, non con il punto: <strong>3,9</strong> si dice «tre virgola nove». Il punto, in italiano, separa le migliaia: <strong>1.200</strong> è «milleduecento». È l’opposto dell’inglese, ed è l’errore più frequente in classe.',
      'Le frazioni piccole si dicono con gli ordinali: <strong>un decimo</strong>, <strong>un centesimo</strong>, <strong>un millesimo</strong>, <strong>un milionesimo</strong>. Parlando, «quattro decimi di millimetro» è più chiaro di «zero virgola quattro millimetri», e le due forme sono equivalenti.',
      'L’unità di misura resta al singolare solo dopo <em>un</em>: <em>un millimetro</em>, ma <em>cinque millimetri</em>, <em>quattrocento micrometri</em>, <em>due millesimi di secondo</em>. E la velocità si dice <strong>metri al secondo</strong>, con <em>al</em>: «tre virgola nove metri al secondo».',
      'Per gli ordini di grandezza l’italiano usa <strong>volte</strong>, e il moltiplicatore va prima: si dice <em>mille volte più veloce</em>, non «più veloce di mille volte». Nei paragoni con un numero preciso funziona anche <em>volte quanto</em>: «un’accelerazione duecento volte quella di gravità».'
    ),
  },
];

export const sources = [
  'Malcolm Burrows, Gregory Sutton, <a href="https://www.science.org/doi/10.1126/science.1240284" target="_blank" rel="noopener">Interacting Gears Synchronize Propulsive Leg Movements in a Jumping Insect</a>, «Science», 13 settembre 2013.',
  'University of Cambridge, <a href="https://phys.org/news/2013-09-functioning-mechanical-gears-nature.html" target="_blank" rel="noopener">Functioning mechanical gears seen in nature for the first time</a>, 12 settembre 2013.',
  'Kathryn Knight, <a href="https://journals.biologists.com/jeb/article/217/2/160/12580/Insect-gears-give-great-jumps" target="_blank" rel="noopener">Insect gears give great jumps</a>, «Journal of Experimental Biology», 2014.',
  'Smithsonian Magazine, <a href="https://www.smithsonianmag.com/science-nature/this-insect-has-the-only-mechanical-gears-ever-found-in-nature-6480908/" target="_blank" rel="noopener">This insect has the only mechanical gears ever found in nature</a>, 2013.',
  '<a href="https://www.jw.org/it/biblioteca-digitale/riviste/g201508/issus-coleoptratus/" target="_blank" rel="noopener">Gli ingranaggi dell’Issus coleoptratus</a>, «Svegliatevi!», agosto 2015.',
];

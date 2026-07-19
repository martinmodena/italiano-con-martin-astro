import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const root = process.cwd();

const labs = {
  'tecniche-di-memoria': [
    {
      title: 'Un metodo di sette giorni',
      subtitle: 'Organizzare il ripasso senza studiare tutto ogni giorno',
      paragraphs: [
        'Un buon piano di memoria non deve essere complicato. Giorno 1: scegli poche parole e costruisci frasi personali. Giorno 2: chiudi il quaderno e prova a recuperarle. Giorno 3: usa le parole in domande. Giorno 5: scrivi una mini-storia. Giorno 7: prova a parlarne a voce alta.',
        'La parte importante non &#232; il calendario perfetto, ma la distanza tra un incontro e l&#8217;altro. Se una parola ritorna quando stai quasi per dimenticarla, il cervello riceve un segnale utile: questa informazione serve ancora. Il ripasso diventa pi&#249; intelligente.',
        'Per esempio, se studi <strong>accorgersi</strong>, non ripetere solo la traduzione. Scrivi: <em>Mi sono accorto dell&#8217;errore</em>, poi chiediti: <em>Di che cosa mi sono accorto oggi?</em> In questo modo impari anche la costruzione con <strong>di</strong>.',
        'Dopo una settimana, elimina le schede troppo facili e conserva quelle che creano ancora esitazione. La memoria migliora anche quando sai scegliere che cosa non ripassare pi&#249;. Studiare tutto sempre &#232; inefficiente; studiare il punto debole &#232; molto pi&#249; utile.',
      ],
    },
    {
      title: 'Perch&#233; le parole astratte sono pi&#249; difficili',
      subtitle: 'Strategie per connettivi, avverbi e sfumature',
      paragraphs: [
        'Molti studenti ricordano facilmente parole concrete come <strong>tavolo</strong>, <strong>pane</strong> o <strong>cane</strong>, ma fanno fatica con parole come <strong>comunque</strong>, <strong>anzi</strong>, <strong>mica</strong>, <strong>addirittura</strong>. Il motivo &#232; semplice: non puoi immaginarle come oggetti.',
        'Per queste parole conviene memorizzare una funzione comunicativa. <strong>Anzi</strong> serve spesso a correggere o rafforzare: <em>Non &#232; difficile, anzi &#232; abbastanza facile</em>. <strong>Comunque</strong> pu&#242; chiudere una digressione o continuare nonostante un problema.',
        'Un trucco efficace &#232; creare coppie di frasi. Prima scrivi una frase semplice, poi aggiungi la parola astratta. <em>Sono stanco. Esco.</em> diventa <em>Sono stanco, comunque esco</em>. Cos&#236; senti il cambiamento di logica.',
        'Quando impari una lingua, non devi ricordare solo significati: devi ricordare movimenti del discorso. Le parole astratte sono come segnali stradali: non portano oggetti, ma organizzano la direzione del pensiero.',
      ],
    },
  ],
  'come-funziona-la-memoria-umana': [
    {
      title: 'Memoria episodica e memoria semantica',
      subtitle: 'Due modi diversi di conservare informazioni',
      paragraphs: [
        'La memoria episodica riguarda esperienze vissute: una cena, una lezione, un viaggio, una conversazione. La memoria semantica riguarda conoscenze generali: Roma &#232; la capitale d&#8217;Italia, <strong>andare</strong> &#232; un verbo irregolare, il plurale di <strong>libro</strong> &#232; <strong>libri</strong>.',
        'Quando impari italiano, questi due sistemi lavorano insieme. Puoi sapere una regola in modo semantico, ma ricordarla meglio se la colleghi a un episodio: una frase detta in classe, un errore corretto da qualcuno, una situazione concreta al bar.',
        'Questo spiega perch&#233; le storie aiutano l&#8217;apprendimento. Una storia crea personaggi, luoghi e conseguenze. Le parole non restano isolate: entrano in una scena. La scena aiuta la memoria episodica, mentre la ripetizione della struttura aiuta la memoria semantica.',
        'Per studiare meglio, prova a trasformare una regola in un episodio. Invece di memorizzare solo <strong>ho fame</strong>, immagina una persona che entra in cucina e dice: <em>Ho fame, c&#8217;&#232; qualcosa da mangiare?</em> La grammatica diventa una situazione.',
      ],
    },
    {
      title: 'Perch&#233; dimentichiamo proprio quando serve parlare',
      subtitle: 'Il problema del recupero sotto pressione',
      paragraphs: [
        'Molti studenti dicono: &#8220;Quando leggo capisco, ma quando parlo dimentico tutto&#8221;. Non &#232; pigrizia e non significa che non abbiano studiato. Parlare richiede recupero rapido, scelta grammaticale, pronuncia, ascolto dell&#8217;altra persona e gestione dell&#8217;ansia.',
        'Sotto pressione, la memoria di lavoro si riempie facilmente. Se devi pensare al verbo, alla preposizione, al genere, alla pronuncia e al contenuto, alcune informazioni diventano pi&#249; difficili da recuperare. Per questo la pratica orale deve essere graduale.',
        'Una soluzione &#232; automatizzare blocchi frequenti: <strong>secondo me</strong>, <strong>ho bisogno di</strong>, <strong>mi sembra che</strong>, <strong>non sono d&#8217;accordo</strong>. Queste espressioni pronte riducono il carico mentale e lasciano spazio all&#8217;idea principale.',
        'Un&#8217;altra soluzione &#232; accettare pause brevi. Dire <em>aspetta, come si dice...</em> &#232; una strategia comunicativa, non un fallimento. Anche i madrelingua cercano parole. La memoria funziona meglio quando la conversazione non diventa un esame continuo.',
      ],
    },
  ],
  'api-linguaggio-e-caratteristiche': [
    {
      title: 'La temperatura dentro l&#8217;alveare',
      subtitle: 'Un dettaglio invisibile ma fondamentale',
      paragraphs: [
        'Un alveare non &#232; solo un luogo dove le api conservano miele. &#200; anche un ambiente da regolare. Temperatura, umidit&#224; e ventilazione sono importanti per la salute della colonia e per lo sviluppo delle larve.',
        'Le api possono ventilare l&#8217;alveare muovendo le ali, distribuire acqua, raggrupparsi per conservare calore o modificare il comportamento collettivo quando l&#8217;ambiente cambia. Questa capacit&#224; mostra che la colonia risponde come un sistema coordinato.',
        'Il favo di cera &#232; una struttura sorprendente: leggero, modulare, resistente e adatto a conservare miele, polline e covata. La forma esagonale permette di usare bene lo spazio e il materiale, un dettaglio che ha affascinato matematici e naturalisti.',
        'Per lo studente di italiano, questi dettagli introducono parole meno comuni ma utili: <strong>temperatura</strong>, <strong>umidit&#224;</strong>, <strong>ventilare</strong>, <strong>conservare</strong>, <strong>resistente</strong>. Sono parole che servono anche fuori dalla biologia.',
      ],
    },
    {
      title: 'Che cosa possiamo imparare dalle api',
      subtitle: 'Cooperazione senza romanticismo',
      paragraphs: [
        'Le api vengono spesso usate come simbolo di lavoro ordinato e collaborazione. L&#8217;immagine &#232; utile, ma va capita bene. Una colonia non &#232; armoniosa perch&#233; ogni ape &#232; gentile: funziona perch&#233; comportamenti semplici, ripetuti da molti individui, producono un risultato complesso.',
        'Questo concetto si chiama spesso comportamento emergente. Nessuna ape controlla tutto, ma molte azioni locali creano un ordine globale. Lo stesso principio compare anche in traffico, mercati, reti digitali e alcuni sistemi sociali umani.',
        'La differenza &#232; che gli esseri umani discutono, cambiano regole, hanno valori, conflitti e responsabilit&#224; morali. Per questo il paragone con le api deve essere usato con attenzione: illumina alcuni aspetti dell&#8217;organizzazione, ma non spiega tutta la societ&#224; umana.',
        'In classe, questo tema permette di esercitare frasi comparative: <em>Le api collaborano in modo diverso dagli esseri umani</em>; <em>Una colonia &#232; pi&#249; automatica di una comunit&#224; umana</em>; <em>Il sistema sembra semplice, ma produce effetti complessi</em>.',
      ],
    },
  ],
  'come-preparare-una-pizza': [
    {
      title: 'Lievitazione e maturazione non sono sinonimi',
      subtitle: 'Due processi che cambiano l&#8217;impasto',
      paragraphs: [
        'Nel linguaggio quotidiano diciamo spesso che l&#8217;impasto deve lievitare. In realt&#224;, nella pizza contano sia la lievitazione sia la maturazione. La lievitazione riguarda soprattutto la produzione di gas; la maturazione riguarda trasformazioni pi&#249; lente che influenzano sapore, struttura e digeribilit&#224;.',
        'Un impasto pu&#242; crescere visibilmente ma non essere ancora ben maturato. Al contrario, un impasto tenuto a temperatura pi&#249; bassa pu&#242; sviluppare gusto e struttura in modo pi&#249; lento. Per questo molte ricette parlano di tempi lunghi e frigorifero.',
        'La temperatura controlla la velocit&#224;. Con pi&#249; caldo, il lievito lavora pi&#249; rapidamente; con pi&#249; freddo, il processo rallenta. Questo non &#232; solo un dettaglio tecnico: cambia il modo in cui devi organizzare la giornata.',
        'Per parlare di cucina in italiano, questa distinzione &#232; utilissima: <strong>lievitare</strong>, <strong>maturare</strong>, <strong>riposare</strong>, <strong>gonfiarsi</strong>, <strong>sviluppare sapore</strong>. Sono verbi che trasformano una ricetta in una spiegazione.',
      ],
    },
    {
      title: 'Gli errori pi&#249; comuni nella pizza fatta in casa',
      subtitle: 'Problemi pratici e soluzioni semplici',
      paragraphs: [
        'Uno degli errori pi&#249; frequenti &#232; aggiungere troppa farina durante la stesura. La farina evita che l&#8217;impasto si attacchi, ma se &#232; troppa brucia in forno e rende la base secca. Meglio usarne poca e lavorare con movimenti delicati.',
        'Un altro errore &#232; condire troppo presto. Se il pomodoro resta sull&#8217;impasto a lungo, pu&#242; bagnarlo e renderlo fragile. Conviene preparare tutti gli ingredienti prima e condire poco prima di infornare.',
        'Molte pizze casalinghe sono pallide perch&#233; il forno non &#232; abbastanza caldo o non &#232; stato preriscaldato bene. Anche la posizione della teglia conta: vicino alla parte pi&#249; calda si ottiene una base migliore, ma bisogna controllare per non bruciare il bordo.',
        'Un buon esercizio linguistico &#232; descrivere il problema e la soluzione: <em>L&#8217;impasto si attacca, quindi aggiungo poca farina</em>; <em>La pizza &#232; acquosa perch&#233; ho messo troppa mozzarella</em>. Cos&#236; impari causa, conseguenza e lessico pratico.',
      ],
    },
  ],
  'storia-del-caffe-in-italia': [
    {
      title: 'Il bar italiano come teatro sociale',
      subtitle: 'Gesti rapidi, significati condivisi',
      paragraphs: [
        'Il bar italiano &#232; un luogo particolare perch&#233; unisce velocit&#224; e relazione. Puoi entrare, ordinare un espresso, berlo in meno di due minuti e uscire. Allo stesso tempo, puoi salutare il barista, incontrare un vicino, scambiare due parole e sentirti parte di un quartiere.',
        'Il banco &#232; importante. Bere al banco significa spesso consumare rapidamente e pagare meno che al tavolo, dove c&#8217;&#232; servizio. Questa distinzione pu&#242; sorprendere chi viene da paesi dove il caff&#232; &#232; soprattutto una bevanda da portare via o da bere lentamente seduti.',
        'Il bar crea formule linguistiche brevi: <strong>un caff&#232;, per favore</strong>; <strong>macchiato caldo</strong>; <strong>lo prendo al banco</strong>; <strong>quant&#8217;&#232;?</strong>; <strong>pago dopo?</strong>. Sono frasi piccole, ma molto reali.',
        'In una lezione di italiano, il bar &#232; uno scenario perfetto perch&#233; unisce grammatica, cultura e pragmatica. Non basta sapere la parola <strong>caff&#232;</strong>: bisogna sapere come ordinare, quando pagare, come ringraziare e come muoversi nello spazio.',
      ],
    },
    {
      title: 'Moka, espresso e identit&#224; domestica',
      subtitle: 'Due modi diversi di intendere il caff&#232;',
      paragraphs: [
        'La moka e l&#8217;espresso non sono la stessa cosa. L&#8217;espresso del bar usa pressione pi&#249; alta e produce una crema caratteristica. La moka usa il vapore e la pressione generata dall&#8217;acqua calda nella caldaia. Il risultato &#232; diverso, ma culturalmente importantissimo.',
        'La moka ha reso il caff&#232; domestico, economico e quotidiano. In molte case italiane il suo rumore &#232; associato al mattino, alla pausa dopo pranzo, agli ospiti, alla cucina. &#200; un oggetto tecnico, ma anche affettivo.',
        'Anche qui la lingua racconta cultura: <strong>preparare la moka</strong>, <strong>mettere su il caff&#232;</strong>, <strong>la caffettiera borbotta</strong>, <strong>il caff&#232; sale</strong>. Queste espressioni non sono sempre traducibili parola per parola.',
        'Capire queste differenze aiuta a evitare stereotipi. Non esiste un solo modo italiano di bere caff&#232;: ci sono abitudini regionali, familiari, generazionali e personali. La cultura &#232; riconoscibile, ma non &#232; mai completamente uniforme.',
      ],
    },
  ],
  'futuro-intelligenza-artificiale': [
    {
      title: 'Il problema delle risposte plausibili',
      subtitle: 'Quando una frase sembra vera ma non lo &#232;',
      paragraphs: [
        'Uno dei rischi pi&#249; importanti dell&#8217;IA generativa &#232; la plausibilit&#224;. Una risposta pu&#242; essere scritta bene, con tono sicuro e struttura ordinata, ma contenere errori. Il cervello umano tende a fidarsi di ci&#242; che appare fluido e coerente.',
        'Per questo la verifica diventa una competenza essenziale. Non basta chiedere: <em>che cosa dice l&#8217;IA?</em> Bisogna chiedere: <em>da dove viene questa informazione?</em>, <em>&#232; aggiornata?</em>, <em>ci sono fonti?</em>, <em>il ragionamento &#232; controllabile?</em>',
        'Nel lavoro, questo cambia il valore della conoscenza. Chi conosce gi&#224; un argomento pu&#242; usare l&#8217;IA per accelerare, perch&#233; riconosce errori e lacune. Chi non conosce l&#8217;argomento rischia di accettare risposte sbagliate con sicurezza.',
        'Per lo studio dell&#8217;italiano vale lo stesso. Un correttore automatico pu&#242; migliorare una frase, ma tu devi capire perch&#233;. Se non capisci la correzione, la prossima volta dipenderai di nuovo dallo strumento.',
      ],
    },
    {
      title: 'Che cosa resta umano',
      subtitle: 'Giudizio, contesto e responsabilit&#224;',
      paragraphs: [
        'L&#8217;IA pu&#242; generare testi, immagini, riassunti e codice, ma non vive le conseguenze sociali delle sue risposte. La responsabilit&#224; resta umana: di chi progetta, di chi usa, di chi approva, di chi pubblica e di chi decide.',
        'Molte decisioni richiedono contesto: conoscere una persona, una comunit&#224;, una storia, un conflitto, un obiettivo educativo. Un sistema automatico pu&#242; aiutare a vedere opzioni, ma non dovrebbe sostituire completamente il giudizio in situazioni delicate.',
        'La competenza del futuro non sar&#224; solo tecnica. Serviranno capacit&#224; linguistiche, etiche e critiche: formulare domande, spiegare scelte, negoziare significati, riconoscere manipolazioni, distinguere precisione e persuasione.',
        'Paradossalmente, pi&#249; l&#8217;IA produce lingua, pi&#249; diventa importante saper leggere e scrivere bene. Chi padroneggia la lingua controlla meglio lo strumento; chi non la padroneggia rischia di essere guidato dallo strumento senza accorgersene.',
      ],
    },
  ],
  'il-sonar-del-delfino': [
    {
      title: 'Il mare cambia il modo di percepire',
      subtitle: 'Perch&#233; il suono diventa cos&#236; importante',
      paragraphs: [
        'Sott&#8217;acqua la luce si comporta in modo diverso rispetto all&#8217;aria. La visibilit&#224; pu&#242; diminuire rapidamente, soprattutto in acque torbide o profonde. Il suono, invece, viaggia molto bene nell&#8217;acqua. Per questo molti animali marini usano segnali acustici per orientarsi e comunicare.',
        'Il delfino vive in un ambiente tridimensionale: pu&#242; muoversi avanti, indietro, in alto e in basso. Deve trovare prede mobili, evitare ostacoli, restare vicino al gruppo e interpretare segnali in continuo cambiamento. Il sonar risponde a queste necessit&#224;.',
        'L&#8217;ecolocalizzazione non sostituisce completamente gli altri sensi. Vista, tatto, comportamento sociale e memoria dell&#8217;ambiente restano importanti. Il punto &#232; l&#8217;integrazione: il delfino combina informazioni diverse per decidere rapidamente.',
        'Questa idea aiuta anche a parlare di tecnologia. Un sistema intelligente non usa sempre una sola fonte di dati; spesso integra segnali. La natura offre esempi di percezione multimodale molto prima dei nostri dispositivi moderni.',
      ],
    },
    {
      title: 'Dal delfino alla tecnologia umana',
      subtitle: 'Imitare la natura non &#232; copiare',
      paragraphs: [
        'Gli esseri umani hanno sviluppato sonar artificiali per navigazione, ricerca, pesca, sicurezza e studio del fondale marino. Il principio generale ricorda l&#8217;ecolocalizzazione: emettere un segnale, ricevere un ritorno, interpretare il risultato.',
        'Per&#242; imitare la natura non significa copiarla perfettamente. Un delfino non usa solo un sensore: usa corpo, cervello, movimento, esperienza e attenzione. La tecnologia separa spesso questi elementi in strumenti diversi; l&#8217;animale li integra in un comportamento unico.',
        'Il confronto &#232; utile perch&#233; mostra due strade diverse verso lo stesso problema: conoscere ci&#242; che non si vede. Il sonar umano pu&#242; essere potente e misurabile; il sonar biologico &#232; adattivo, mobile e inserito nella vita quotidiana dell&#8217;animale.',
        'Per discutere in italiano, puoi usare questa struttura: <em>Da una parte..., dall&#8217;altra...</em>. Da una parte la tecnologia umana pu&#242; raggiungere grandi distanze; dall&#8217;altra il delfino usa il sonar in modo flessibile mentre nuota, caccia e interagisce.',
      ],
    },
  ],
};

for (const [slug, cards] of Object.entries(labs)) {
  const file = path.join(root, 'legacy-html', 'letture', `${slug}.html`);
  let html = readFileSync(file, 'utf8');
  html = html.replace(/\n\s*<article class="story-card">\s*<header><div><span class="level">LAB[\s\S]*?(?=\n\s*<article class="story-card">\s*<header><div><span class="level">Fonti)/, '\n');
  const block = toAsciiHtml(cards.map(renderCard).join('\n'));
  html = html.replace(/\n\s*<article class="story-card">\s*<header><div><span class="level">Fonti/, `\n${block}\n      <article class="story-card">\n        <header><div><span class="level">Fonti`);
  writeFileSync(file, html, 'utf8');
}

function renderCard(card) {
  return `      <article class="story-card">
        <header><div><span class="level">LAB</span><h2>${card.title}</h2></div><p>${card.subtitle}</p></header>
        <div class="story-text">
${card.paragraphs.map((p) => `          <p>${p}</p>`).join('\n')}
        </div>
      </article>`;
}

function toAsciiHtml(value) {
  return value.replace(/[^\x00-\x7F]/g, (char) => `&#${char.codePointAt(0)};`);
}

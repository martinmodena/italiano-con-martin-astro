// Lezione B1 «Il condizionale presente: vorrei, potresti, dovresti» (rifatta il 2026-11-23 agli stessi URL):
// struttura, materiale italiano e testi. Le spiegazioni tradotte stanno in condizionale-presente-i18n.mjs.
//
// Martin il 2026-11-23: «attenzione che ci sono lezioni con pochi esercizi come il condizionale presente». La
// lezione scritta a mano aveva una tabella, quattro usi, gli irregolari e 10 esercizi. Ora: gli usi (anche la
// notizia non confermata), la forma con l'ortografia (cercherei, mangerei), gli irregolari con la base del
// futuro, le frasi utili al bar e in negozio, i consigli e le opinioni, le trappole (andremo / andremmo, dopo
// «se», vorrei che, mi piacerebbero, il condizionale passato) e 30 esercizi. Confronto con la lingua: quello di
// confronti-lingua.mjs (after: 'usi'); errori per lingua in confronti-condizionale-presente.mjs.
// Nell'indice B1 la tessera resta dov'era; il pulsante finale porta al trapassato prossimo.

const it = (s) => `<span lang="it">${s}</span>`;

export default {
  slug: 'condizionale-presente',
  level: 'b1',
  next: 'trapassato-prossimo',
  minutes: 20,
  hero: { src: 'grammatica/condizionale-presente-hero.webp', width: 1280, height: 720 },
  // Gli slug stranieri esistono dal 2026-08 e non cambiano.
  slugs: {
    en: 'the-condizionale-presente',
    es: 'el-condizionale-presente-italiano',
    fr: 'le-condizionale-presente-italien',
    cs: 'italsky-condizionale-presente',
    pl: 'wloski-condizionale-presente',
    tr: 'italyanca-condizionale-presente',
    de: 'das-italienische-condizionale-presente',
    ja: 'イタリア語の-condizionale-presente',
  },
  nav: [
    ['usi', 'Usi'],
    ['forma', 'Forma'],
    ['irregolari', 'Irregolari'],
    ['frasi', 'Frasi utili'],
    ['consigli', 'Consigli'],
    ['trappole', 'Trappole'],
    ['errori', 'Errori'],
    ['esercizi', 'Esercizi'],
  ],
  body: (L, h, c) => `    <article class="lesson-box" id="usi"><h2>${L.usiH2}</h2><p>${L.usiP}</p>${h.examples([
    [L.uDesiderio, 'Vorrei un caffè, per favore.'],
    [L.uRichiesta, 'Potresti chiudere la finestra?'],
    [L.uConsiglio, 'Dovresti dormire di più.'],
    [L.uSogno, 'Mi piacerebbe vivere al mare.'],
    [L.uIpotesi, 'Con più tempo, imparerei il giapponese.'],
    [L.uNotizia, 'Secondo i giornali, il ministro sarebbe a Parigi.'],
  ])}<p class="mini-note">${L.usiNote}</p></article>
    <article class="lesson-box" id="forma"><h2>${L.formaH2}</h2><p>${L.formaP}</p>${h.table(
      ['Persona', `=${it('parlare')}`, `=${it('prendere')}`, `=${it('partire')}`],
      [
        ['io', 'parlerei', 'prenderei', 'partirei'],
        ['tu', 'parleresti', 'prenderesti', 'partiresti'],
        ['lui · lei', 'parlerebbe', 'prenderebbe', 'partirebbe'],
        ['noi', 'parleremmo', 'prenderemmo', 'partiremmo'],
        ['voi', 'parlereste', 'prendereste', 'partireste'],
        ['loro', 'parlerebbero', 'prenderebbero', 'partirebbero'],
      ]
    )}${h.examples([
      [L.fCa, 'cercare → cercherei · pagare → pagherei'],
      [L.fCia, 'mangiare → mangerei · cominciare → comincerei'],
      [L.fEmmo, 'noi parleremmo · loro parlerebbero'],
    ])}<p class="mini-note">${L.formaNote.replace('{{FUTURO}}', h.href('futuro-semplice', 'a2'))}</p></article>
    <article class="lesson-box" id="irregolari"><h2>${L.irrH2}</h2><p>${L.irrP}</p>${h.table(
      ['Infinito', 'Base futura', 'Esempio'],
      [
        ['essere', 'sar-', 'sarei, saresti, sarebbe'],
        ['avere', 'avr-', 'avrei, avresti, avrebbe'],
        ['andare', 'andr-', 'andrei, andresti, andrebbe'],
        ['potere', 'potr-', 'potrei, potresti, potrebbe'],
        ['dovere', 'dovr-', 'dovrei, dovresti, dovrebbe'],
        ['sapere', 'sapr-', 'saprei, sapresti, saprebbe'],
        ['vedere', 'vedr-', 'vedrei, vedresti, vedrebbe'],
        ['vivere', 'vivr-', 'vivrei, vivresti, vivrebbe'],
        ['fare', 'far-', 'farei, faresti, farebbe'],
        ['dare', 'dar-', 'darei, daresti, darebbe'],
        ['stare', 'star-', 'starei, staresti, starebbe'],
        ['dire', 'dir-', 'direi, diresti, direbbe'],
        ['volere', 'vorr-', 'vorrei, vorresti, vorrebbe'],
        ['venire', 'verr-', 'verrei, verresti, verrebbe'],
        ['tenere', 'terr-', 'terrei, terresti, terrebbe'],
        ['rimanere', 'rimarr-', 'rimarrei, rimarresti, rimarrebbe'],
        ['bere', 'berr-', 'berrei, berresti, berrebbe'],
      ]
    )}<p class="mini-note">${L.irrNote}</p></article>
    <article class="lesson-box" id="frasi"><h2>${L.frasiH2}</h2><p>${L.frasiP}</p>${h.examples([
      [L.fBar, 'Vorrei un cappuccino e un cornetto, per favore.'],
      [L.fNegozio, 'Scusi, avrebbe questa maglia in blu?'],
      [L.fTelefono, 'Buongiorno, potrei parlare con la dottoressa Bianchi?'],
      [L.fPermesso, 'Le dispiacerebbe aprire il finestrino?'],
      [L.fProposta, 'Ti andrebbe di venire al cinema stasera?'],
    ])}<p class="mini-note">${L.frasiNote}</p></article>
    <article class="lesson-box" id="consigli"><h2>${L.consH2}</h2><p>${L.consP}</p>${h.examples([
      [L.cDovere, 'Dovresti bere più acqua.'],
      [L.cPotere, 'Potresti chiedere a Licia: lei lo sa.'],
      [L.cAlPosto, 'Al posto tuo, prenderei il treno.'],
      [L.cMeglio, 'Sarebbe meglio partire presto.'],
      [L.cOpinione, 'Direi che è una buona idea.'],
    ])}<p class="mini-note">${L.consNote.replace('{{IPOTETICO}}', h.href('periodo-ipotetico', 'b2'))}</p></article>
    <article class="lesson-box" id="trappole"><h2>${L.trapH2}</h2><p>${L.trapP}</p>${h.examples([
      [L.tFuturo, 'Domani andremo al mare. · Andremmo al mare, ma piove.'],
      [L.tSe, 'Se avessi tempo, viaggerei.'],
      [L.tVorreiChe, 'Vorrei venire. · Vorrei che tu venissi.'],
      [L.tPiacere, 'Mi piacerebbe un gelato. · Mi piacerebbero due gelati.'],
      [L.tPassato, 'Oggi verrei volentieri. · Ieri sarei venuto volentieri.'],
    ])}<p class="mini-note">${L.trapNote
      .replace('{{CONGIMP}}', h.href('congiuntivo-imperfetto', 'c1'))
      .replace('{{PIACERE}}', h.href('verbo-piacere', 'a2'))
      .replace('{{CONDPASS}}', h.href('condizionale-passato', 'b2'))}</p></article>
    <article class="lesson-box" id="errori"><h2>${c.mistakesH2}</h2>${h.mistakes([
      ['Io vorrebbe un caffè.', 'Io vorrei un caffè.'],
      ['Se avrei tempo, viaggerei.', 'Se avessi tempo, viaggerei.'],
      ['Noi andremo volentieri, ma piove.', 'Noi andremmo volentieri, ma piove.'],
      ['Io anderei in treno.', 'Io andrei in treno.'],
      ['Mi piacerebbe due giorni di vacanza.', 'Mi piacerebbero due giorni di vacanza.'],
    ])}</article>
    <article class="lesson-box" id="esercizi"><h2>${c.exercisesH2}</h2><p>${L.exIntro}</p><h3>${L.part1H3}</h3><p>${L.part1P}</p>${h.exercises(
      [
        { q: 'Io ___ volentieri con te. (parlare)', a: 'parlerei', hint: 'Parlare: la a diventa e, io parlerei.' },
        { q: 'Tu ___ questa giacca? (prendere)', a: 'prenderesti', hint: 'Tu + prendere: prenderesti.' },
        {
          q: 'Lei ___ domani, ma non trova il biglietto. (partire)',
          a: 'partirebbe',
          hint: 'Lei + partire: partirebbe.',
        },
        {
          q: 'Noi ___ ancora un po’ di pizza. (mangiare)',
          a: 'mangeremmo',
          hint: 'Mangiare perde la i: mangeremmo, con due m.',
        },
        {
          q: 'In quale città ___ casa? (cercare, voi)',
          a: 'cerchereste',
          hint: 'Cercare prende la h per tenere il suono duro: cerchereste.',
        },
        {
          q: 'Loro ___ di più, ma non hanno tempo. (dormire)',
          a: 'dormirebbero',
          hint: 'Loro + dormire: dormirebbero.',
        },
        { q: 'Io ___ subito in vacanza! (andare)', a: 'andrei', hint: 'Andare è irregolare: andrei, non anderei.' },
        {
          q: 'Con un altro lavoro, tu ___ più tempo. (avere)',
          a: 'avresti',
          hint: 'Avere perde la e: avresti.',
        },
        { q: 'Marco ___ felice di vederti. (essere)', a: 'sarebbe', hint: 'Essere: sar- → sarebbe.' },
        {
          q: 'Noi ___ volentieri a cena da voi. (venire)',
          a: 'verremmo',
          hint: 'Venire ha due r: verremmo.',
        },
      ]
    )}<h3>${L.part2H3}</h3><p>${L.part2P}</p>${h.exercises([
      {
        q: 'Domani ___ al mare: è tutto deciso. (andare, noi)',
        a: 'andremo',
        hint: 'Un piano sicuro: futuro, con una m sola.',
      },
      {
        q: 'Noi ___ al mare, ma oggi piove. (andare)',
        a: 'andremmo',
        hint: 'Lo faremmo, ma non si può: condizionale, con due m.',
      },
      {
        q: 'Scusi, ___ dirmi che ore sono? (potere, Lei)',
        a: 'potrebbe',
        hint: 'Una richiesta gentile con Lei: potrebbe.',
      },
      {
        q: 'L’anno prossimo ___ in Francia per lavoro. (vivere, io)',
        a: 'vivrò',
        alt: 'vivro',
        hint: 'Un fatto previsto: futuro, vivrò.',
      },
      {
        q: 'Con un milione di euro, ___ una casa a Venezia. (comprare, io)',
        a: 'comprerei',
        hint: 'Un sogno, un’ipotesi: comprerei.',
      },
      {
        q: 'Stasera ___ tardi, non aspettarmi. (tornare, io)',
        a: 'tornerò',
        alt: 'tornero',
        hint: 'Un fatto sicuro di stasera: futuro, tornerò.',
      },
      { q: 'Voi ___ un tè? (volere)', a: 'vorreste', hint: 'Un’offerta gentile: vorreste, con due r.' },
      {
        q: 'Io al posto tuo ___ subito il medico. (chiamare)',
        a: 'chiamerei',
        hint: 'Al posto tuo + condizionale: chiamerei.',
      },
      {
        q: 'Sabato ___ i nonni, come ogni mese. (vedere, noi)',
        a: 'vedremo',
        hint: 'Un appuntamento fisso: futuro, vedremo.',
      },
      {
        q: 'Secondo me ___ meglio prenotare. (essere)',
        a: 'sarebbe',
        hint: 'Un consiglio gentile: sarebbe meglio.',
      },
    ])}<h3>${L.part3H3}</h3><p>${L.part3P}</p>${h.exercises([
      {
        q: 'Al bar: «Buongiorno, ___ un cornetto alla crema.» (volere, io)',
        a: 'vorrei',
        hint: 'Al bar si dice vorrei, non voglio.',
      },
      {
        q: 'In negozio: «Scusi, ___ questa maglia in blu?» (avere, Lei)',
        a: 'avrebbe',
        hint: 'Con Lei: avrebbe.',
      },
      {
        q: 'Al telefono: «Buongiorno, ___ parlare con la dottoressa Bianchi?» (potere, io)',
        a: 'potrei',
        hint: 'Io + potere: potrei.',
      },
      {
        q: 'A un amico stanco: «Secondo me ___ andare a letto presto.» (dovere, tu)',
        a: 'dovresti',
        hint: 'Un consiglio: dovresti.',
      },
      {
        q: '«Ti ___ di venire al cinema con noi?» (andare)',
        a: 'andrebbe',
        hint: 'Ti andrebbe di…? è un invito gentile.',
      },
      { q: '«Mi ___ visitare la Sicilia.» (piacere)', a: 'piacerebbe', hint: 'Mi piacerebbe + infinito.' },
      {
        q: '«Mi ___ due giorni di vacanza!» (servire)',
        a: 'servirebbero',
        hint: 'Due giorni è plurale: servirebbero.',
      },
      {
        q: 'In treno: «Le ___ chiudere il finestrino?» (dispiacere)',
        a: 'dispiacerebbe',
        hint: 'Le dispiacerebbe…? è molto gentile.',
      },
      {
        q: '«Al posto tuo, ___ a Marco la verità.» (dire, io)',
        a: 'direi',
        hint: 'Dire: direi.',
      },
      {
        q: 'Secondo la radio, oggi i treni ___ in ritardo. (arrivare)',
        a: 'arriverebbero',
        hint: 'Una notizia non confermata: arriverebbero.',
      },
    ])}{{ACTIONS}}</article>
    <article class="lesson-box"><h2>${c.conversationH2}</h2>${h.dialogue([
      ['Martin', 'Che cosa ti piacerebbe fare quest’estate?'],
      ['Studente', 'Mi piacerebbe andare in Sicilia, ma costa tanto.'],
      ['Martin', 'Potresti andarci a giugno: è più economico.'],
      ['Studente', 'Buona idea! Mi consiglieresti una città?'],
      ['Martin', 'Io andrei a Siracusa. E al posto tuo prenderei il treno: passare lo Stretto in traghetto è bellissimo!'],
    ])}</article>`,
  it: {
    h1: 'Il condizionale presente: vorrei, potresti, dovresti',
    card: 'Vorrei un caffè, potresti aiutarmi?, dovresti dormire: la forma, gli irregolari, le frasi gentili e i consigli.',
    lead: 'Vorrei un caffè, potresti aiutarmi?, dovresti dormire di più: il condizionale presente serve per chiedere con gentilezza, dare consigli, parlare di desideri e immaginare. Gli usi, la forma, gli irregolari (sarei, andrei, vorrei), le frasi utili al bar e in negozio, i consigli e le trappole. Con 30 esercizi.',
    description:
      'Il condizionale presente in italiano: quando si usa (gentilezza, desideri, consigli, ipotesi), la forma (parlerei, prenderei, partirei), gli irregolari (sarei, avrei, andrei, vorrei), frasi utili, andremo o andremmo, gli errori tipici e 30 esercizi.',
    heroAlt:
      'Un bancone di bar italiano di legno chiaro con una tazza di cappuccino e un cornetto su un piattino bianco, alla luce del mattino',
    usiH2: 'Quando si usa',
    usiP: 'Il condizionale è il modo di quello che <strong>si vorrebbe</strong>, <strong>si potrebbe</strong> o <strong>si dovrebbe</strong> fare. Gli italiani lo usano di continuo, soprattutto per essere gentili.',
    uDesiderio: 'Per chiedere con gentilezza',
    uRichiesta: 'Per una richiesta cortese',
    uConsiglio: 'Per dare un consiglio',
    uSogno: 'Per un desiderio',
    uIpotesi: 'Per immaginare',
    uNotizia: 'Per una notizia non confermata',
    usiNote:
      '<strong>Voglio un caffè</strong> è corretto, ma suona brusco, quasi un ordine; <strong>vorrei un caffè</strong> è quello che dicono tutti al bar. Nei giornali il condizionale segnala una notizia non ancora sicura: <em lang="it">il ministro sarebbe a Parigi</em> vuol dire «forse è a Parigi, lo dicono, ma non è confermato».',
    formaH2: 'La forma',
    formaP:
      'Si parte dalla stessa base del futuro: si toglie la <strong>-e</strong> finale dell’infinito (nei verbi in <strong>-are</strong> la <strong>a</strong> diventa <strong>e</strong>) e si aggiungono le desinenze <strong>-ei, -esti, -ebbe, -emmo, -este, -ebbero</strong>, uguali per tutti i verbi.',
    fCa: 'Verbi in -care e -gare: arriva la h',
    fCia: 'Verbi in -ciare e -giare: la i sparisce',
    fEmmo: 'Noi ha due m, loro finisce in -ebbero',
    formaNote:
      'Se conosci il <a href="{{FUTURO}}">futuro semplice</a> sei già a metà: <em lang="it">parlerò → parlerei</em>, <em lang="it">cercherò → cercherei</em>, <em lang="it">mangerò → mangerei</em>. Cambiano solo le desinenze. L’accento di <em lang="it">parlerebbe</em> e <em lang="it">parlerebbero</em> cade sulla <strong>e</strong> di <strong>-ebb-</strong>.',
    irrH2: 'Gli irregolari',
    irrP: 'Un verbo irregolare al futuro è irregolare anche al condizionale, con la <strong>stessa base</strong>: <em lang="it">andrò → andrei</em>, <em lang="it">vorrò → vorrei</em>, <em lang="it">sarò → sarei</em>. Le desinenze restano quelle di sempre.',
    irrNote:
      '<strong>Tre gruppi da ricordare.</strong> Perdono la vocale: <em lang="it">andrei, avrei, potrei, dovrei, saprei, vedrei, vivrei</em>. Hanno due r: <em lang="it">vorrei, verrei, terrei, rimarrei, berrei</em>. Tengono la a: <em lang="it">farei, darei, starei</em>. Ed <em lang="it">essere</em> fa <em lang="it">sarei</em>.',
    frasiH2: 'Le frasi utili',
    frasiP: 'Al bar, in negozio, al telefono e fra amici il condizionale è la forma normale della gentilezza. Queste frasi si possono imparare a memoria.',
    fBar: 'Al bar o al ristorante',
    fNegozio: 'In negozio, con Lei',
    fTelefono: 'Al telefono',
    fPermesso: 'Per chiedere un favore a uno sconosciuto',
    fProposta: 'Per proporre qualcosa a un amico',
    frasiNote:
      'Con chi non conosci si usa <strong>Lei</strong> e quindi la terza persona: <em lang="it">potrebbe</em>, <em lang="it">avrebbe</em>, <em lang="it">Le dispiacerebbe</em>. Con un amico <em lang="it">potresti</em>, <em lang="it">ti dispiacerebbe</em>. <strong>Ti andrebbe di…?</strong> vuol dire «hai voglia di…?» ed è il modo più naturale per invitare qualcuno.',
    consH2: 'Consigli e opinioni',
    consP: 'Per dare un consiglio senza sembrare un professore, il condizionale è perfetto: suggerisce, non ordina.',
    cDovere: 'Dovresti: il consiglio diretto',
    cPotere: 'Potresti: una possibilità',
    cAlPosto: 'Al posto tuo: io farei così',
    cMeglio: 'Sarebbe meglio + infinito',
    cOpinione: 'Direi che: un’opinione morbida',
    consNote:
      '<strong>Al posto tuo</strong> o <strong>io</strong> + condizionale (<em lang="it">io prenderei il treno</em>) è il consiglio più comune. Si può dire anche <em lang="it">se fossi in te, prenderei il treno</em>: è un <a href="{{IPOTETICO}}">periodo ipotetico</a>. Con <em lang="it">direi</em>, <em lang="it">penserei</em>, <em lang="it">preferirei</em> un’opinione diventa più gentile: <em lang="it">direi di sì</em>.',
    trapH2: 'Le trappole',
    trapP: 'Cinque punti in cui sbagliano quasi tutti, anche a livello avanzato.',
    tFuturo: 'Andremo (futuro) o andremmo (condizionale)?',
    tSe: 'Dopo se: congiuntivo, non condizionale',
    tVorreiChe: 'Vorrei + infinito o vorrei che + congiuntivo',
    tPiacere: 'Piacerebbe o piacerebbero?',
    tPassato: 'Oggi o ieri? Condizionale presente o passato',
    trapNote:
      '<strong>Una m o due?</strong> <em lang="it">andremo</em> è futuro, <em lang="it">andremmo</em> è condizionale: la doppia si sente, va pronunciata più lunga. <strong>Dopo se</strong> non si usa mai il condizionale: <em lang="it">se avessi</em>, con il <a href="{{CONGIMP}}">congiuntivo imperfetto</a>. Con <strong>vorrei</strong>, se il soggetto è lo stesso si usa l’infinito, se cambia serve <em lang="it">che</em> + congiuntivo imperfetto. <em lang="it">Piacere</em> si accorda con la cosa che piace, come spiega la lezione sul <a href="{{PIACERE}}">verbo piacere</a>. E per un desiderio che non si è realizzato nel passato serve il <a href="{{CONDPASS}}">condizionale passato</a>: <em lang="it">sarei venuto</em>.',
    exIntro: '30 frasi in tre parti. Scrivi solo quello che manca: la correzione arriva mentre scrivi.',
    part1H3: 'Parte 1 · La forma',
    part1P: 'Scrivi il verbo al condizionale presente.',
    part2H3: 'Parte 2 · Futuro o condizionale?',
    part2P: 'Un fatto sicuro o previsto va al futuro; un desiderio, un consiglio, una richiesta gentile o un’ipotesi al condizionale.',
    part3H3: 'Parte 3 · Al bar, in negozio, fra amici',
    part3P: 'Scrivi il verbo al condizionale presente, come lo direbbe un italiano.',
  },
};

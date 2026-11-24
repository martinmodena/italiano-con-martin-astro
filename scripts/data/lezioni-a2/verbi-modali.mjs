// Lezione A2 «I verbi modali: potere, volere, dovere» (rifatta il 2026-11-25 agli stessi URL): struttura, materiale
// italiano e testi. Le spiegazioni tradotte stanno in verbi-modali-i18n.mjs.
//
// Undicesima delle lezioni con pochi esercizi (Martin, 2026-11-23: «fai una alla volta»). La lezione di agosto era
// scritta a mano: l'uso, la tabella, il passato e 10 esercizi. Ora: gli usi (possibilità, permesso, desiderio,
// obbligo, probabilità), le forme, modale + infinito senza preposizione, la posizione dei pronomi (lo posso fare /
// posso farlo), potere o sapere, il passato (ausiliare, dovevo o sono dovuto), la cortesia (vorrei, potrebbe,
// dovresti), le trappole (non devi, voglio che, volere + nome) e 30 esercizi. Confronto ed errori per lingua in
// confronti-verbi-modali.mjs. Il pulsante finale porta ai pronomi diretti.

const it = (s) => `<span lang="it">${s}</span>`;

export default {
  slug: 'verbi-modali',
  level: 'a2',
  next: 'pronomi-diretti',
  minutes: 20,
  hero: { src: 'grammatica/verbi-modali-hero.webp', width: 1280, height: 720 },
  // Gli slug stranieri esistono dal 2026-08 e non cambiano.
  slugs: {
    en: 'italian-modal-verbs-potere-volere-dovere',
    es: 'verbos-modales-italianos-potere-volere-dovere',
    fr: 'verbes-modaux-italiens-potere-volere-dovere',
    cs: 'italska-modalni-slovesa-potere-volere-dovere',
    pl: 'wloskie-czasowniki-modalne-potere-volere-dovere',
    tr: 'italyanca-modal-fiiller-potere-volere-dovere',
    de: 'italienische-modalverben-potere-volere-dovere',
    ja: 'イタリア語の法助動詞-potere-volere-dovere',
  },
  nav: [
    ['uso', 'Uso'],
    ['forme', 'Forme'],
    ['infinito', 'Modale + infinito'],
    ['pronomi', 'Con i pronomi'],
    ['sapere', 'Potere o sapere?'],
    ['passato', 'Al passato'],
    ['gentili', 'Per essere gentili'],
    ['trappole', 'Trappole'],
    ['errori', 'Errori'],
    ['esercizi', 'Esercizi'],
  ],
  body: (L, h, c) => `    <article class="lesson-box" id="uso"><h2>${L.usoH2}</h2><p>${L.usoP}</p>${h.examples([
    [L.uPossibilita, 'Oggi posso uscire: non lavoro.'],
    [L.uPermesso, 'Posso aprire la finestra?'],
    [L.uVolere, 'Voglio imparare il cinese.'],
    [L.uDovere, 'Domani devo lavorare.'],
    [L.uProbabile, 'Hai dormito poco: devi essere stanco.'],
  ])}<p class="mini-note">${L.usoNote}</p></article>
    <article class="lesson-box" id="forme"><h2>${L.formeH2}</h2><p>${L.formeP}</p>${h.table(
      ['Persona', `=${it('potere')}`, `=${it('volere')}`, `=${it('dovere')}`],
      [
        ['io', 'posso', 'voglio', 'devo'],
        ['tu', 'puoi', 'vuoi', 'devi'],
        ['lui · lei · Lei', 'può', 'vuole', 'deve'],
        ['noi', 'possiamo', 'vogliamo', 'dobbiamo'],
        ['voi', 'potete', 'volete', 'dovete'],
        ['loro', 'possono', 'vogliono', 'devono'],
      ]
    )}<p class="mini-note">${L.formeNote}</p></article>
    <article class="lesson-box" id="infinito"><h2>${L.infH2}</h2><p>${L.infP}</p>${h.examples([
      [L.iSenza, 'Voglio andare al mare. · Devo studiare.'],
      [L.iNegazione, 'Non posso venire stasera.'],
      [L.iDomanda, 'Puoi ripetere, per favore?'],
      [L.iNome, 'Voglio un gelato. · Vorrei un caffè.'],
    ])}<p class="mini-note">${L.infNote}</p></article>
    <article class="lesson-box" id="pronomi"><h2>${L.pronH2}</h2><p>${L.pronP}</p>${h.examples([
      [L.pPrima, 'Lo posso fare. · Ti voglio aiutare. · Mi devo alzare.'],
      [L.pDopo, 'Posso farlo. · Voglio aiutarti. · Devo alzarmi.'],
      [L.pDue, 'Te lo posso dire. · Posso dirtelo.'],
    ])}<p class="mini-note">${L.pronNote.replace('{{DIRETTI}}', h.href('pronomi-diretti', 'a2'))}</p></article>
    <article class="lesson-box" id="sapere"><h2>${L.sapH2}</h2><p>${L.sapP}</p>${h.examples([
      [L.sSapere, 'So nuotare. · Sai guidare?'],
      [L.sPotere, 'Oggi non posso nuotare: la piscina è chiusa.'],
      [L.sRiuscire, 'Non riesco ad aprire la porta.'],
    ])}<p class="mini-note">${L.sapNote}</p></article>
    <article class="lesson-box" id="passato"><h2>${L.passH2}</h2><p>${L.passP}</p>${h.table(
      ['Frase al presente', 'Frase al passato'],
      [
        ['Devo lavorare.', 'Ho dovuto lavorare.'],
        ['Voglio vedere il film.', 'Ho voluto vedere il film.'],
        ['Devo partire.', 'Sono dovuto partire.'],
        ['Anna può venire.', 'Anna è potuta venire.'],
        ['Mi devo alzare.', 'Mi sono dovuto alzare.'],
      ]
    )}${h.examples([
      [L.paImperfetto, 'Dovevo partire, ma ho perso il treno.'],
      [L.paProssimo, 'Sono dovuto partire alle sei.'],
    ])}<p class="mini-note">${L.passNote.replace('{{SCEGLIERE}}', h.href('passato-prossimo-o-imperfetto', 'a2'))}</p></article>
    <article class="lesson-box" id="gentili"><h2>${L.gentH2}</h2><p>${L.gentP}</p>${h.examples([
      [L.gVorrei, 'Vorrei un caffè, per favore.'],
      [L.gPotrebbe, 'Scusi, potrebbe ripetere?'],
      [L.gPotresti, 'Potresti chiudere la porta?'],
      [L.gDovresti, 'Dovresti dormire di più.'],
    ])}<p class="mini-note">${L.gentNote.replace('{{CONDIZIONALE}}', h.href('condizionale-presente', 'b1'))}</p></article>
    <article class="lesson-box" id="trappole"><h2>${L.trapH2}</h2><p>${L.trapP}</p>${h.examples([
      [L.tNonDevi, 'Non devi fumare qui. · Non c’è bisogno di venire.'],
      [L.tVoglioChe, 'Voglio venire. · Voglio che tu venga.'],
      [L.tPuoPuoi, 'Puoi aiutarmi? (tu) · Può aiutarmi? (Lei)'],
      [L.tVuole, 'Ci vuole un’ora. · Ci vogliono due ore.'],
    ])}<p class="mini-note">${L.trapNote.replace('{{CONGIUNTIVO}}', h.href('congiuntivo-presente', 'b2'))}</p></article>
    <article class="lesson-box" id="errori"><h2>${c.mistakesH2}</h2>${h.mistakes([
      ['Voglio di andare al mare.', 'Voglio andare al mare.'],
      ['Devo vado a casa.', 'Devo andare a casa.'],
      ['Io può venire.', 'Io posso venire.'],
      ['Domani non so venire.', 'Domani non posso venire.'],
      ['Noi dovemo partire.', 'Noi dobbiamo partire.'],
    ])}</article>
    <article class="lesson-box" id="esercizi"><h2>${c.exercisesH2}</h2><p>${L.exIntro}</p><h3>${L.part1H3}</h3><p>${L.part1P}</p>${h.exercises(
      [
        { q: 'Stasera io non ___ uscire. (potere)', a: 'posso', hint: 'Potere con io: posso.' },
        { q: 'Tu ___ un caffè? (volere)', a: 'vuoi', hint: 'Volere con tu: vuoi.' },
        { q: 'Marco ___ lavorare sabato. (dovere)', a: 'deve', hint: 'Dovere con lui: deve.' },
        { q: 'Noi ___ imparare bene l’italiano. (volere)', a: 'vogliamo', hint: 'Volere con noi: vogliamo.' },
        { q: 'Voi ___ entrare, la porta è aperta. (potere)', a: 'potete', hint: 'Potere con voi: potete.' },
        { q: 'I bambini ___ andare a letto presto. (dovere)', a: 'devono', hint: 'Dovere con loro: devono.' },
        { q: 'Signora, ___ ripetere, per favore? (potere, Lei)', a: 'può', hint: 'Con Lei si usa la terza persona: può, con l’accento.' },
        { q: 'Che cosa ___ fare stasera, ragazzi? (volere)', a: 'volete', hint: 'Volere con voi: volete.' },
        { q: 'Domani noi ___ partire alle sei. (dovere)', a: 'dobbiamo', hint: 'Dovere con noi: dobbiamo.' },
        { q: 'I tuoi genitori ___ restare a cena? (volere)', a: 'vogliono', hint: 'Volere con loro: vogliono.' },
      ]
    )}<h3>${L.part2H3}</h3><p>${L.part2P}</p>${h.exercises([
      { q: 'Non ___ nuotare: non ho mai imparato. (io)', a: 'so', hint: 'Una cosa imparata: sapere, so nuotare.' },
      { q: 'Oggi non ___ nuotare: la piscina è chiusa. (io)', a: 'posso', hint: 'Oggi non è possibile: potere, posso.' },
      { q: 'Scusi, ___ aprire la finestra? Fa caldo. (io)', a: 'posso', hint: 'Chiedere il permesso: posso?' },
      { q: 'Domani c’è l’esame: stasera ___ studiare. (io)', a: 'devo', hint: 'Un obbligo: devo.' },
      { q: 'Mia sorella ___ parlare tre lingue. (lei)', a: 'sa', hint: 'Una capacità imparata: sa.' },
      { q: 'Che cosa ___ per il tuo compleanno? (tu)', a: 'vuoi', hint: 'Un desiderio: vuoi.' },
      { q: 'Hai lavorato dodici ore: ___ essere stanco. (tu)', a: 'devi', hint: 'Una cosa probabile: devi essere stanco.' },
      { q: 'In biblioteca non si ___ parlare ad alta voce.', a: 'può', hint: 'Non è permesso: non si può.' },
      { q: '___ guidare? Sì, ho la patente da dieci anni. (tu)', a: 'Sai', hint: 'Una capacità imparata: sai guidare?' },
      { q: 'Non ___ preoccuparti, va tutto bene. (tu)', a: 'devi', hint: 'Non devi = non c’è motivo, è meglio di no.' },
    ])}<h3>${L.part3H3}</h3><p>${L.part3P}</p>${h.exercises([
      { q: 'Ieri ___ dovuto lavorare fino a tardi. (io)', a: 'ho', hint: 'Lavorare vuole avere: ho dovuto lavorare.' },
      { q: 'Maria è ___ partire presto. (dovere)', a: 'dovuta', hint: 'Con essere il participio concorda: è dovuta.' },
      { q: 'Non siamo ___ venire alla festa. (potere)', a: 'potuti', hint: 'Con essere e noi: siamo potuti.' },
      { q: 'I ragazzi ___ voluto vedere il film. (avere)', a: 'hanno', hint: 'Vedere vuole avere: hanno voluto.' },
      { q: 'Anna si è ___ alzare alle cinque. (dovere)', a: 'dovuta', hint: 'Mi, ti, si prima del modale: si è dovuta alzare.' },
      { q: 'Ieri ___ uscire, ma poi sono rimasto a casa. (dovere, io)', a: 'dovevo', hint: 'Il programma, che poi non è successo: imperfetto, dovevo.' },
      { q: '___ un caffè, per favore. (volere, io)', a: 'Vorrei', hint: 'Per chiedere con gentilezza: vorrei.' },
      { q: 'Scusi, ___ dirmi che ore sono? (potere, Lei)', a: 'potrebbe', hint: 'Con Lei e gentile: potrebbe.' },
      { q: 'Sei stanco: ___ riposarti un po’. (dovere, tu)', a: 'dovresti', hint: 'Un consiglio: dovresti.' },
      { q: '___ aiutarmi con la valigia? (potere, tu)', a: 'Potresti', hint: 'Una richiesta gentile a un amico: potresti.' },
    ])}{{ACTIONS}}</article>
    <article class="lesson-box"><h2>${c.conversationH2}</h2>${h.dialogue([
      ['Martin', 'Sabato vuoi venire al lago con noi?'],
      ['Studente', 'Vorrei, ma devo lavorare fino all’una.'],
      ['Martin', 'Non c’è problema: possiamo partire dopo pranzo.'],
      ['Studente', 'Perfetto! Però c’è un problema: non so nuotare.'],
      ['Martin', 'Non devi nuotare per forza. Puoi prendere il sole e leggere.'],
      ['Studente', 'Allora vengo volentieri. Posso portare qualcosa?'],
    ])}</article>`,
  it: {
    h1: 'I verbi modali: potere, volere, dovere',
    card: 'Posso, voglio, devo: gli usi, le forme, i pronomi, potere o sapere, il passato e la cortesia.',
    lead: 'Posso uscire? Voglio imparare. Devo lavorare. Con potere, volere e dovere si chiede il permesso, si dice quello che si desidera e quello che è necessario. Gli usi, le forme, il modale con l’infinito, dove va il pronome (lo posso fare, posso farlo), potere o sapere, il passato (ho dovuto, sono dovuto), vorrei e potrebbe per essere gentili, e le trappole. Con 30 esercizi.',
    description:
      'I verbi modali in italiano: potere, volere e dovere, gli usi (possibilità, permesso, desiderio, obbligo, probabilità), il presente, il modale con l’infinito, i pronomi (lo posso fare, posso farlo), potere o sapere, il passato (ho dovuto, sono dovuto), vorrei e potrebbe, gli errori tipici e 30 esercizi.',
    heroAlt: 'Una vecchia porta di legno verde in un muro color ocra di una via italiana soleggiata, con un vaso di gerani rossi accanto',
    usoH2: 'A che cosa servono',
    usoP: 'Con <strong>potere</strong>, <strong>volere</strong> e <strong>dovere</strong> diciamo se una cosa è possibile, se la desideriamo o se è necessaria. Sono tra i verbi più usati dell’italiano.',
    uPossibilita: 'Potere: una possibilità',
    uPermesso: 'Potere: chiedere il permesso',
    uVolere: 'Volere: un desiderio, una volontà',
    uDovere: 'Dovere: un obbligo, una necessità',
    uProbabile: 'Dovere: una cosa probabile',
    usoNote:
      '<strong>Devi essere stanco</strong> non è un ordine: vuol dire «probabilmente sei stanco». Lo stesso con <em lang="it">deve essere a casa</em>, <em lang="it">deve essere molto caro</em>.',
    formeH2: 'Le forme del presente',
    formeP: 'Tutti e tre sono irregolari, e sono da sapere a memoria: si usano ogni giorno.',
    formeNote:
      'Attenzione all’accento di <strong>può</strong>. E a <em lang="it">noi</em>: <em lang="it">possiamo, vogliamo, dobbiamo</em>, con la doppia. <em lang="it">Voi potete, volete, dovete</em> sono invece regolari.',
    infH2: 'Modale + infinito',
    infP: 'Dopo un verbo modale il secondo verbo va all’<strong>infinito</strong>, <strong>senza preposizione</strong>: niente <em lang="it">a</em>, niente <em lang="it">di</em>.',
    iSenza: 'Modale + infinito, senza niente in mezzo',
    iNegazione: 'Il non va prima del modale',
    iDomanda: 'La domanda: la stessa frase, con un altro tono',
    iNome: 'Volere può avere anche un nome',
    infNote:
      'Si dice <em lang="it">voglio andare</em>, non <em lang="it">voglio di andare</em>; <em lang="it">devo studiare</em>, non <em lang="it">devo studio</em>. Solo il modale cambia con la persona: <em lang="it">io devo partire</em>, <em lang="it">loro devono partire</em>.',
    pronH2: 'Dove va il pronome?',
    pronP: 'Con i modali il pronome ha <strong>due posti</strong>: prima del modale, oppure attaccato alla fine dell’infinito (che perde la <em lang="it">-e</em>). Le due frasi vogliono dire la stessa cosa.',
    pPrima: 'Prima del modale',
    pDopo: 'Attaccato all’infinito',
    pDue: 'Anche con due pronomi',
    pronNote:
      'Mai in mezzo e mai due volte: <em lang="it">lo posso fare</em> o <em lang="it">posso farlo</em>, non <em lang="it">posso lo fare</em>. Tutti i pronomi sono nella lezione sui <a href="{{DIRETTI}}">pronomi diretti</a>.',
    sapH2: 'Potere o sapere?',
    sapP: 'Per una <strong>capacità imparata</strong> (nuotare, guidare, cucinare, parlare una lingua) l’italiano usa <strong>sapere</strong>, non potere. <strong>Potere</strong> dice se una cosa è possibile adesso.',
    sSapere: 'Sapere: so fare, ho imparato',
    sPotere: 'Potere: è possibile, è permesso',
    sRiuscire: 'Riuscire a: ce la faccio (o no)',
    sapNote:
      '<em lang="it">Non so nuotare</em>: non ho mai imparato. <em lang="it">Non posso nuotare</em>: oggi no, per un motivo (la piscina è chiusa, ho mal di schiena). <em lang="it">Non riesco a</em>: provo, ma è troppo difficile.',
    passH2: 'Al passato',
    passP: 'Al passato prossimo il modale prende di solito l’<strong>ausiliare del verbo che segue</strong>: <em lang="it">lavorare</em> vuole avere, quindi <em lang="it">ho dovuto lavorare</em>; <em lang="it">partire</em> vuole essere, quindi <em lang="it">sono dovuto partire</em>.',
    paImperfetto: 'Imperfetto: un programma, non sappiamo se è successo',
    paProssimo: 'Passato prossimo: è successo davvero',
    passNote:
      'Nel parlato si sente spesso anche <em lang="it">ho dovuto partire</em>: con essere è più curato. Con essere il participio concorda: <em lang="it">Anna è dovuta partire</em>. E con l’imperfetto <em lang="it">dovevo partire</em> spesso vuol dire «dovevo, ma non sono partito». Come scegliere tra i due tempi: <a href="{{SCEGLIERE}}">passato prossimo o imperfetto</a>.',
    gentH2: 'Per essere gentili',
    gentP: 'Al bar, in negozio o con uno sconosciuto, <em lang="it">voglio</em> e <em lang="it">puoi</em> suonano bruschi. Il <strong>condizionale</strong> li rende gentili.',
    gVorrei: 'Vorrei: per chiedere qualcosa',
    gPotrebbe: 'Potrebbe: una richiesta con Lei',
    gPotresti: 'Potresti: una richiesta a un amico',
    gDovresti: 'Dovresti: un consiglio',
    gentNote:
      '<em lang="it">Voglio un caffè</em> al bar sembra un ordine: si dice <strong>vorrei</strong>. <em lang="it">Dovresti</em> è un consiglio, <em lang="it">devi</em> un obbligo. Tutte le forme sono nella lezione sul <a href="{{CONDIZIONALE}}">condizionale presente</a>.',
    trapH2: 'Le trappole',
    trapP: 'Quattro punti in cui sbagliano in tanti.',
    tNonDevi: 'Non devi o non c’è bisogno?',
    tVoglioChe: 'Volere per sé o per un altro',
    tPuoPuoi: 'Puoi o può?',
    tVuole: 'Ci vuole, ci vogliono: serve del tempo',
    trapNote:
      '<strong>Non devi fumare</strong> vuol dire «è vietato», <em lang="it">non devi preoccuparti</em> «non c’è motivo». Per dire chiaramente che una cosa non è necessaria: <em lang="it">non c’è bisogno di</em> o <em lang="it">non è necessario</em>. Per volere una cosa da un’altra persona si usa <em lang="it">voglio che</em> + <a href="{{CONGIUNTIVO}}">congiuntivo</a>: <em lang="it">voglio che tu venga</em>. <em lang="it">Puoi</em> è per tu, <em lang="it">può</em> per Lei. E <em lang="it">ci vuole</em> non parla di desideri: vuol dire «serve».',
    exIntro: '30 frasi in tre parti. Scrivi solo la parola che manca: la correzione arriva mentre scrivi.',
    part1H3: 'Parte 1 · Il presente',
    part1P: 'Scrivi il verbo al presente.',
    part2H3: 'Parte 2 · Potere, volere, dovere o sapere?',
    part2P: 'Scegli il verbo giusto e scrivilo al presente.',
    part3H3: 'Parte 3 · Al passato e per essere gentili',
    part3P: 'L’ausiliare, il participio, l’imperfetto e il condizionale.',
  },
};

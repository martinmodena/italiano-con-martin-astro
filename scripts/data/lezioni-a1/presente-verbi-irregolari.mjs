// Lezione A1 «Il presente dei verbi irregolari: vado, faccio, vengo» (rifatta il 2026-11-23 agli stessi URL):
// struttura, materiale italiano e testi. Le spiegazioni tradotte stanno in presente-verbi-irregolari-i18n.mjs.
//
// Quinta delle lezioni con pochi esercizi (Martin, 2026-11-23). La lezione di agosto aveva sette verbi in due
// tabelle, sei frasi e 10 esercizi. Ora: l'idea (e i rimandi a essere, avere e ai modali, che hanno le loro
// lezioni), otto verbi in tabella (andare, fare, stare, dare; venire, uscire, dire, bere), gli schemi che
// aiutano (-g- con io e loro, noi e voi quasi regolari, -nno), sapere o conoscere (e sapere o potere), le
// espressioni di tutti i giorni (fare colazione, stare bene, dare una mano), le trappole e 30 esercizi.
// Il confronto con la lingua resta quello di confronti-lingua.mjs; gli errori per lingua sono in
// confronti-presente-irregolare.mjs. Le descrizioni e il sottotitolo scritti a mano in seo-boost.mjs sono stati
// tolti. Nell'indice A1 la tessera resta dov'era; il pulsante finale porta ai verbi riflessivi.

const it = (s) => `<span lang="it">${s}</span>`;

export default {
  slug: 'presente-verbi-irregolari',
  next: 'verbi-riflessivi',
  updateCard: true,
  minutes: 18,
  hero: { src: 'grammatica/presente-verbi-irregolari-hero.webp', width: 1280, height: 720 },
  // Gli slug stranieri esistono dal 2026-08 e non cambiano.
  slugs: {
    en: 'italian-present-tense-irregular-verbs',
    es: 'presente-de-los-verbos-irregulares-en-italiano',
    fr: 'present-des-verbes-irreguliers-en-italien',
    cs: 'pritomny-cas-nepravidelnych-italskych-sloves',
    pl: 'czas-terazniejszy-nieregularnych-czasownikow-wloskich',
    tr: 'italyanca-duzensiz-fiiller-simdiki-zaman',
    de: 'praesens-unregelmaessiger-italienischer-verben',
    ja: 'イタリア語の不規則動詞の現在形',
  },
  nav: [
    ['idea', 'Idea semplice'],
    ['tabella', 'Tabelle'],
    ['schemi', 'Come funziona'],
    ['sapere', 'Sapere o conoscere?'],
    ['frasi', 'Frasi utili'],
    ['trappole', 'Trappole'],
    ['errori', 'Errori'],
    ['esercizi', 'Esercizi'],
  ],
  body: (L, h, c) => `    <article class="lesson-box" id="idea"><h2>${L.ideaH2}</h2><p>${L.ideaP}</p>${h.examples([
    [L.iMovimento, 'Vado al lavoro. · Vengo da Napoli. · Esco alle otto.'],
    [L.iGiornata, 'Faccio colazione. · Sto a casa. · Bevo un caffè.'],
    [L.iParlare, 'Dico la verità. · So la risposta. · Ti do il mio numero.'],
  ])}<p class="mini-note">${L.ideaNote
    .replace('{{ESSERE}}', h.href('verbo-essere', 'a1'))
    .replace('{{AVERE}}', h.href('verbo-avere', 'a1'))
    .replace('{{MODALI}}', h.href('verbi-modali', 'a2'))}</p></article>
    <article class="lesson-box" id="tabella"><h2>${L.tabH2}</h2><p>${L.tabP}</p>${h.table(
      ['Persona', `=${it('andare')}`, `=${it('fare')}`, `=${it('stare')}`, `=${it('dare')}`],
      [
        ['io', 'vado', 'faccio', 'sto', 'do'],
        ['tu', 'vai', 'fai', 'stai', 'dai'],
        ['lui · lei · Lei', 'va', 'fa', 'sta', 'dà'],
        ['noi', 'andiamo', 'facciamo', 'stiamo', 'diamo'],
        ['voi', 'andate', 'fate', 'state', 'date'],
        ['loro', 'vanno', 'fanno', 'stanno', 'danno'],
      ]
    )}${h.table(
      ['Persona', `=${it('venire')}`, `=${it('uscire')}`, `=${it('dire')}`, `=${it('bere')}`],
      [
        ['io', 'vengo', 'esco', 'dico', 'bevo'],
        ['tu', 'vieni', 'esci', 'dici', 'bevi'],
        ['lui · lei · Lei', 'viene', 'esce', 'dice', 'beve'],
        ['noi', 'veniamo', 'usciamo', 'diciamo', 'beviamo'],
        ['voi', 'venite', 'uscite', 'dite', 'bevete'],
        ['loro', 'vengono', 'escono', 'dicono', 'bevono'],
      ]
    )}<p class="mini-note">${L.tabNote}</p></article>
    <article class="lesson-box" id="schemi"><h2>${L.schemiH2}</h2><p>${L.schemiP}</p>${h.examples([
      [L.sNoiVoi, 'andiamo, andate · veniamo, venite · usciamo, uscite'],
      [L.sNno, 'vanno · fanno · stanno · danno'],
      [L.sG, 'vengo, vengono · rimango, rimangono · tengo, tengono'],
      [L.sDire, 'dire → dico · fare → faccio · bere → bevo'],
    ])}<p class="mini-note">${L.schemiNote.replace('{{REGOLARI}}', h.href('presente-indicativo-verbi-regolari', 'a1'))}</p></article>
    <article class="lesson-box" id="sapere"><h2>${L.sapH2}</h2><p>${L.sapP}</p>${h.table(
      ['Persona', `=${it('sapere')}`],
      [
        ['io', 'so'],
        ['tu', 'sai'],
        ['lui · lei · Lei', 'sa'],
        ['noi', 'sappiamo'],
        ['voi', 'sapete'],
        ['loro', 'sanno'],
      ]
    )}${h.examples([
      [L.kSapere, 'So dov’è la stazione. · Sai che ore sono?'],
      [L.kConoscere, 'Conosco Marco. · Conosci Roma?'],
      [L.kCapacita, 'So nuotare. · Sai cucinare?'],
      [L.kPotere, 'Posso entrare? · Oggi non posso nuotare: piove.'],
    ])}<p class="mini-note">${L.sapNote}</p></article>
    <article class="lesson-box" id="frasi"><h2>${L.frasiH2}</h2><p>${L.frasiP}</p>${h.examples([
      [L.fFare, 'fare colazione · fare la spesa · fare una domanda · Che tempo fa?'],
      [L.fStare, 'Come stai? · Sto bene. · Sto a casa.'],
      [L.fAndare, 'vado a Roma · vado in Italia · vado a piedi · vado in treno'],
      [L.fDare, 'dare una mano · dare un esame · Mi dai il tuo numero?'],
      [L.fUscire, 'esco con gli amici · esco di casa alle otto'],
    ])}<p class="mini-note">${L.frasiNote.replace('{{PREPOSIZIONI}}', h.href('preposizioni-semplici', 'a1'))}</p></article>
    <article class="lesson-box" id="trappole"><h2>${L.trapH2}</h2><p>${L.trapP}</p>${h.examples([
      [L.tStare, 'Sto bene. · Come stai?'],
      [L.tVenire, 'Vengo da te stasera. · Vado al cinema.'],
      [L.tDa, 'Luca dà un libro a Maria. · Vengo da Roma.'],
      [L.tFare, 'Faccio i compiti. · Faccio una torta.'],
    ])}<p class="mini-note">${L.trapNote}</p></article>
    <article class="lesson-box" id="errori"><h2>${c.mistakesH2}</h2>${h.mistakes([
      ['Io ando.', 'Io vado.'],
      ['Loro venono.', 'Loro vengono.'],
      ['Sono bene, grazie.', 'Sto bene, grazie.'],
      ['Posso nuotare.', 'So nuotare.'],
      ['Conosco che è qui.', 'So che è qui.'],
    ])}</article>
    <article class="lesson-box" id="esercizi"><h2>${c.exercisesH2}</h2><p>${L.exIntro}</p><h3>${L.part1H3}</h3><p>${L.part1P}</p>${h.exercises(
      [
        { q: 'Io ___ al lavoro in bici. (andare)', a: 'vado', hint: 'Andare con io: vado.' },
        { q: 'Tu ___ colazione a casa? (fare)', a: 'fai', hint: 'Fare con tu: fai.' },
        { q: 'Come ___? (stare, tu)', a: 'stai', hint: 'Stare con tu: stai.' },
        { q: 'Luca ___ un libro a Maria. (dare)', a: 'dà', hint: 'Dare con lui: dà, con l’accento.' },
        { q: 'Noi ___ al mare domenica. (andare)', a: 'andiamo', hint: 'Con noi è regolare: andiamo.' },
        { q: 'Voi che cosa ___ stasera? (fare)', a: 'fate', hint: 'Fare con voi: fate.' },
        { q: 'I bambini ___ a casa oggi. (stare)', a: 'stanno', hint: 'Stare con loro: stanno, con due n.' },
        { q: 'I miei amici ___ in Spagna. (andare)', a: 'vanno', hint: 'Andare con loro: vanno.' },
        { q: 'Io ___ la spesa il sabato. (fare)', a: 'faccio', hint: 'Fare con io: faccio.' },
        { q: 'Noi ti ___ una mano. (dare)', a: 'diamo', hint: 'Dare con noi: diamo.' },
      ]
    )}<h3>${L.part2H3}</h3><p>${L.part2P}</p>${h.exercises([
      { q: 'Io ___ da Milano. (venire)', a: 'vengo', hint: 'Venire con io: vengo, con la g.' },
      { q: 'Tu ___ stasera? (uscire)', a: 'esci', hint: 'Uscire con tu: esci, con la e.' },
      { q: 'Anna ___ sempre la verità. (dire)', a: 'dice', hint: 'Dire con lei: dice.' },
      { q: 'Noi ___ un caffè insieme. (bere)', a: 'beviamo', hint: 'Bere viene da bevere: beviamo.' },
      { q: 'Loro ___ alla festa. (venire)', a: 'vengono', hint: 'Venire con loro: vengono, con la g.' },
      { q: 'Voi ___ con noi? (uscire)', a: 'uscite', hint: 'Con voi torna la u: uscite.' },
      { q: 'Io ___ di sì. (dire)', a: 'dico', hint: 'Dire con io: dico.' },
      { q: 'Tu ___ molta acqua? (bere)', a: 'bevi', hint: 'Bere con tu: bevi.' },
      { q: 'Io non ___ dov’è la stazione. (sapere)', a: 'so', hint: 'Sapere con io: so.' },
      { q: 'Loro ___ parlare tedesco. (sapere)', a: 'sanno', hint: 'Sapere con loro: sanno.' },
    ])}<h3>${L.part3H3}</h3><p>${L.part3P}</p>${h.exercises([
      { q: '___ bene, grazie! (stare, io)', a: 'sto', hint: 'Per la salute si usa stare: sto bene.' },
      { q: 'Che tempo ___ oggi? (fare)', a: 'fa', hint: 'Il tempo: che tempo fa?' },
      { q: 'Scusi, ___ dov’è il museo? (sapere, Lei)', a: 'sa', hint: 'Lei va come lui: sa.' },
      { q: '___ Roma? È bellissima! (conoscere, tu)', a: 'conosci', hint: 'Un luogo: conoscere, conosci.' },
      { q: 'Mia sorella ___ nuotare benissimo. (sapere)', a: 'sa', hint: 'Una cosa imparata: sapere, sa.' },
      { q: 'Stasera ___ al cinema con Luca. (andare, io)', a: 'vado', hint: 'Andare con io: vado.' },
      { q: 'Marco ___ dall’ufficio alle sei. (uscire)', a: 'esce', hint: 'Uscire con lui: esce.' },
      { q: '___ anche tu alla festa? (venire)', a: 'vieni', hint: 'Venire con tu: vieni.' },
      { q: 'Domani ___ un esame di matematica. (dare, io)', a: 'do', hint: 'Dare un esame: io do.' },
      { q: 'Ragazzi, che cosa ___? (bere, voi)', a: 'bevete', hint: 'Bere con voi: bevete.' },
    ])}{{ACTIONS}}</article>
    <article class="lesson-box"><h2>${c.conversationH2}</h2>${h.dialogue([
      ['Martin', 'Ciao! Come stai?'],
      ['Studente', 'Sto bene, grazie. Stasera esco con gli amici.'],
      ['Martin', 'Dove andate?'],
      ['Studente', 'Andiamo in centro: beviamo qualcosa e poi facciamo una passeggiata. Vieni anche tu?'],
      ['Martin', 'Volentieri! Ma non so dov’è il locale.'],
      ['Studente', 'Ti do l’indirizzo adesso.'],
    ])}</article>`,
  it: {
    h1: 'Il presente dei verbi irregolari: vado, faccio, vengo',
    card: 'Vado, faccio, sto, vengo, esco, so: i verbi irregolari più usati, gli schemi per ricordarli e sapere o conoscere.',
    lead: 'Vado al lavoro, faccio colazione, sto bene, vengo anch’io: i verbi più usati dell’italiano sono irregolari. Otto verbi in tabella (andare, fare, stare, dare, venire, uscire, dire, bere), gli schemi che aiutano a ricordarli, sapere o conoscere, le espressioni di tutti i giorni e le trappole. Con 30 esercizi.',
    description:
      'Il presente dei verbi irregolari italiani: andare, fare, stare, dare, venire, uscire, dire, bere e sapere in tabella, gli schemi per ricordarli (vengo, vanno), sapere o conoscere, fare colazione e stare bene, le trappole, gli errori tipici e 30 esercizi.',
    heroAlt:
      'Una piccola piazza di un paese italiano al mattino con il tavolino di un bar, due tazzine di caffè e una bicicletta appoggiata al muro',
    ideaH2: 'L’idea',
    ideaP: 'I verbi irregolari sono i più usati, perché servono per le cose di tutti i giorni: <strong>muoversi</strong>, <strong>fare</strong>, <strong>parlare</strong>. Proprio perché si usano tanto, hanno cambiato forma nel tempo.',
    iMovimento: 'Muoversi: andare, venire, uscire',
    iGiornata: 'La giornata: fare, stare, bere',
    iParlare: 'Parlare e sapere: dire, sapere, dare',
    ideaNote:
      '<strong>Impara le forme dentro frasi brevi</strong>, non come una lista: <em lang="it">vado a casa</em>, <em lang="it">faccio colazione</em>, <em lang="it">sto bene</em>. I due verbi più importanti, <em lang="it">essere</em> e <em lang="it">avere</em>, hanno le loro lezioni: <a href="{{ESSERE}}">essere</a> e <a href="{{AVERE}}">avere</a>; <em lang="it">potere, volere, dovere</em> sono nella lezione sui <a href="{{MODALI}}">verbi modali</a>.',
    tabH2: 'Le tabelle',
    tabP: 'Otto verbi in due gruppi. I primi quattro sono corti e si somigliano; gli altri quattro hanno una radice che cambia.',
    tabNote:
      '<strong>Dà</strong> (lui dà) ha l’accento, per non confonderlo con la preposizione <em lang="it">da</em>; <em lang="it">fa</em>, <em lang="it">va</em>, <em lang="it">sta</em> no. <strong>Uscire</strong> cambia la <strong>u</strong> in <strong>e</strong> quando l’accento cade sulla radice: <em lang="it">esco, esci, esce, escono</em>, ma <em lang="it">usciamo, uscite</em>. <strong>Dire</strong> e <strong>bere</strong> usano una radice antica: <em lang="it">dic-</em> e <em lang="it">bev-</em>.',
    schemiH2: 'Gli schemi che aiutano',
    schemiP: 'Anche i verbi irregolari seguono qualche schema. Se li conosci, ricordi le forme molto più facilmente.',
    sNoiVoi: 'Noi e voi: quasi sempre regolari',
    sNno: 'Loro con -nno: i verbi corti',
    sG: 'Io e loro con -g-',
    sDire: 'Una radice antica',
    schemiNote:
      '<strong>Con noi e voi</strong> si parte quasi sempre dall’infinito, come nei <a href="{{REGOLARI}}">verbi regolari</a>: <em lang="it">andiamo, venite, uscite</em>. <strong>Io e loro</strong> hanno spesso la stessa radice: <em lang="it">vengo / vengono</em>, <em lang="it">esco / escono</em>, <em lang="it">dico / dicono</em>. Se impari la forma di <em lang="it">io</em>, hai già quella di <em lang="it">loro</em>.',
    sapH2: 'Sapere o conoscere?',
    sapP: 'Molte lingue hanno un solo verbo, l’italiano ne ha due. E per «sapere fare una cosa» non si usa <em lang="it">potere</em>.',
    kSapere: 'Sapere: un’informazione',
    kConoscere: 'Conoscere: persone e luoghi',
    kCapacita: 'Sapere + infinito: una cosa imparata',
    kPotere: 'Potere: un permesso, una possibilità',
    sapNote:
      '<strong>So</strong> una cosa (<em lang="it">so che è qui</em>, <em lang="it">so la risposta</em>), <strong>conosco</strong> una persona o un posto (<em lang="it">conosco Anna, conosco Firenze</em>). <em lang="it">Conoscere</em> è regolare. E <strong>so nuotare</strong> vuol dire che ho imparato; <em lang="it">posso nuotare</em> vuol dire che oggi è possibile o permesso.',
    frasiH2: 'Le frasi di tutti i giorni',
    frasiP: 'Questi verbi formano tante espressioni fisse. Vale la pena impararle a memoria.',
    fFare: 'Fare: azioni e tempo',
    fStare: 'Stare: salute e posto',
    fAndare: 'Andare: dove e come',
    fDare: 'Dare: espressioni utili',
    fUscire: 'Uscire',
    frasiNote:
      '<strong>Andare a</strong> con le città (<em lang="it">vado a Roma</em>), <strong>andare in</strong> con i Paesi e i mezzi (<em lang="it">vado in Italia, vado in treno</em>), ma <em lang="it">a piedi</em>: le preposizioni sono nella lezione sulle <a href="{{PREPOSIZIONI}}">preposizioni semplici</a>. <em lang="it">Dare un esame</em> vuol dire «sostenere un esame», da studente.',
    trapH2: 'Le trappole',
    trapP: 'Quattro punti in cui sbagliano in tanti.',
    tStare: 'Sto bene, non sono bene',
    tVenire: 'Venire verso chi parla o ascolta, andare altrove',
    tDa: 'Dà (verbo) o da (preposizione)?',
    tFare: 'Fare = fare e creare',
    trapNote:
      '<strong>Come stai? Sto bene</strong>: per la salute si usa <em lang="it">stare</em>, non <em lang="it">essere</em>. <strong>Venire</strong> si usa quando ti muovi verso la persona con cui parli (<em lang="it">vengo da te</em>) o verso dove sei tu (<em lang="it">vieni qui!</em>); per tutto il resto <em lang="it">andare</em>. <strong>Fare</strong> vale per due verbi di molte lingue: fare un’azione e creare una cosa.',
    exIntro: '30 frasi in tre parti. Scrivi solo il verbo: la correzione arriva mentre scrivi.',
    part1H3: 'Parte 1 · Andare, fare, stare, dare',
    part1P: 'Scrivi il verbo al presente.',
    part2H3: 'Parte 2 · Venire, uscire, dire, bere, sapere',
    part2P: 'Scrivi il verbo al presente.',
    part3H3: 'Parte 3 · Nella vita di tutti i giorni',
    part3P: 'Espressioni fisse, sapere o conoscere: scrivi il verbo al presente.',
  },
};

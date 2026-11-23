// Lezione A1 «Il presente dei verbi regolari: parlo, prendo, dormo» (rifatta il 2026-11-23 agli stessi URL):
// struttura, materiale italiano e testi. Le spiegazioni tradotte stanno in presente-indicativo-verbi-regolari-i18n.mjs.
//
// Quarta delle lezioni con pochi esercizi (Martin, 2026-11-23). La lezione di agosto aveva gli usi, la tabella
// con pulire e 12 esercizi, senza confronto con la lingua né errori per lingua. Ora: gli usi (anche il futuro
// vicino e «da due anni»), le tre coniugazioni, i verbi in -isc-, l'ortografia (cerchi, paghi, mangi, studi),
// soggetto, negazione e domande, le trappole (ascoltare la musica, aspettare, cercare senza preposizione,
// l'accento di parlano) e 30 esercizi. Confronto ed errori per lingua in confronti-presente-regolare.mjs.
// Nell'indice A1 la tessera resta dov'era; il pulsante finale porta al presente dei verbi irregolari.

const it = (s) => `<span lang="it">${s}</span>`;

export default {
  slug: 'presente-indicativo-verbi-regolari',
  next: 'presente-verbi-irregolari',
  updateCard: true,
  minutes: 15,
  hero: { src: 'grammatica/presente-indicativo-verbi-regolari-hero.webp', width: 1280, height: 720 },
  // Gli slug stranieri esistono dal 2026-08 e non cambiano.
  slugs: {
    en: 'italian-present-indicative-regular-verbs',
    es: 'presente-indicativo-de-los-verbos-regulares-en-italiano',
    fr: 'present-indicatif-des-verbes-reguliers-en-italien',
    cs: 'pritomny-cas-pravidelnych-italskych-sloves',
    pl: 'czas-terazniejszy-regularnych-czasownikow-wloskich',
    tr: 'italyanca-duzenli-fiiller-simdiki-zaman',
    de: 'praesens-regelmaessiger-italienischer-verben',
    ja: 'イタリア語の規則動詞の現在形',
  },
  nav: [
    ['usi', 'Usi'],
    ['forma', 'Forma'],
    ['isc', 'Verbi in -isc-'],
    ['ortografia', 'Ortografia'],
    ['frasi', 'Frasi negative'],
    ['trappole', 'Trappole'],
    ['errori', 'Errori'],
    ['esercizi', 'Esercizi'],
  ],
  body: (L, h, c) => `    <article class="lesson-box" id="usi"><h2>${L.usiH2}</h2><p>${L.usiP}</p>${h.examples([
    [L.uAdesso, 'Parlo con Maria al telefono.'],
    [L.uAbitudine, 'La mattina prendo il caffè al bar.'],
    [L.uSempre, 'L’acqua bolle a cento gradi.'],
    [L.uFuturo, 'Domani parto per Roma.'],
    [L.uDa, 'Studio italiano da due anni.'],
  ])}<p class="mini-note">${L.usiNote}</p></article>
    <article class="lesson-box" id="forma"><h2>${L.formaH2}</h2><p>${L.formaP}</p>${h.table(
      ['Persona', `=${it('parlare')}`, `=${it('prendere')}`, `=${it('dormire')}`],
      [
        ['io', 'parlo', 'prendo', 'dormo'],
        ['tu', 'parli', 'prendi', 'dormi'],
        ['lui · lei · Lei', 'parla', 'prende', 'dorme'],
        ['noi', 'parliamo', 'prendiamo', 'dormiamo'],
        ['voi', 'parlate', 'prendete', 'dormite'],
        ['loro', 'parlano', 'prendono', 'dormono'],
      ]
    )}<p class="mini-note">${L.formaNote.replace('{{PRONUNCIA}}', h.href('pronuncia', 'a1'))}</p></article>
    <article class="lesson-box" id="isc"><h2>${L.iscH2}</h2><p>${L.iscP}</p>${h.table(
      ['Persona', `=${it('capire')}`, `=${it('finire')}`],
      [
        ['io', 'capisco', 'finisco'],
        ['tu', 'capisci', 'finisci'],
        ['lui · lei · Lei', 'capisce', 'finisce'],
        ['noi', 'capiamo', 'finiamo'],
        ['voi', 'capite', 'finite'],
        ['loro', 'capiscono', 'finiscono'],
      ]
    )}${h.examples([
      [L.iCon, 'capire · finire · preferire · pulire · spedire · costruire'],
      [L.iSenza, 'dormire · partire · aprire · sentire · offrire · seguire'],
    ])}<p class="mini-note">${L.iscNote}</p></article>
    <article class="lesson-box" id="ortografia"><h2>${L.ortH2}</h2><p>${L.ortP}</p>${h.examples([
      [L.oCare, 'cercare: cerco, cerchi, cerchiamo · pagare: pago, paghi, paghiamo'],
      [L.oIare, 'mangiare: mangio, mangi, mangiamo · studiare: studio, studi, studiamo'],
      [L.oGere, 'leggere: leggo, leggi · vincere: vinco, vinci'],
    ])}<p class="mini-note">${L.ortNote}</p></article>
    <article class="lesson-box" id="frasi"><h2>${L.frasiH2}</h2><p>${L.frasiP}</p>${h.examples([
      [L.fSoggetto, 'Parlo italiano. · Io parlo italiano, lui no.'],
      [L.fNon, 'Non mangio la carne. · Non lavoriamo il sabato.'],
      [L.fDomanda, 'Parli italiano? · Dove abiti? · Che cosa prendete?'],
      [L.fLei, 'Lei parla inglese? · Scusi, Lei abita qui?'],
    ])}<p class="mini-note">${L.frasiNote.replace('{{FREQUENZA}}', h.href('avverbi-di-frequenza', 'a1'))}</p></article>
    <article class="lesson-box" id="trappole"><h2>${L.trapH2}</h2><p>${L.trapP}</p>${h.examples([
      [L.tPreposizione, 'Ascolto la musica. · Aspetto l’autobus. · Cerco le chiavi.'],
      [L.tAbitare, 'Abito a Roma. · Abito in Italia.'],
      [L.tAccento, 'parlano · prendono · abitano'],
      [L.tIrregolari, 'essere, avere, fare, andare, stare, venire…'],
    ])}<p class="mini-note">${L.trapNote
      .replace('{{IRREGOLARI}}', h.href('presente-verbi-irregolari', 'a1'))
      .replace('{{RIFLESSIVI}}', h.href('verbi-riflessivi', 'a1'))}</p></article>
    <article class="lesson-box" id="errori"><h2>${c.mistakesH2}</h2>${h.mistakes([
      ['Io parla italiano.', 'Io parlo italiano.'],
      ['Noi credemo.', 'Noi crediamo.'],
      ['Io pulo la casa.', 'Io pulisco la casa.'],
      ['Tu cerci le chiavi.', 'Tu cerchi le chiavi.'],
      ['Ascolto alla musica.', 'Ascolto la musica.'],
    ])}</article>
    <article class="lesson-box" id="esercizi"><h2>${c.exercisesH2}</h2><p>${L.exIntro}</p><h3>${L.part1H3}</h3><p>${L.part1P}</p>${h.exercises(
      [
        { q: 'Io ___ italiano. (parlare)', a: 'parlo', hint: 'Con io: -o, parlo.' },
        { q: 'Tu ___ a Roma? (abitare)', a: 'abiti', hint: 'Con tu: -i, abiti.' },
        { q: 'Lei ___ in banca. (lavorare)', a: 'lavora', hint: 'Lui o lei, verbo in -are: -a, lavora.' },
        { q: 'Noi ___ la televisione. (guardare)', a: 'guardiamo', hint: 'Con noi sempre -iamo: guardiamo.' },
        { q: 'Voi ___ un caffè? (prendere)', a: 'prendete', hint: 'Voi, verbo in -ere: -ete, prendete.' },
        { q: 'Loro ___ il giornale. (leggere)', a: 'leggono', hint: 'Loro, verbo in -ere: -ono, leggono.' },
        { q: 'Io ___ a Milano. (vivere)', a: 'vivo', hint: 'Con io: -o, vivo.' },
        { q: 'Tu ___ poco. (dormire)', a: 'dormi', hint: 'Con tu: -i, dormi.' },
        { q: 'Marco ___ domani. (partire)', a: 'parte', hint: 'Lui, verbo in -ire: -e, parte.' },
        { q: 'Voi ___ la musica? (sentire)', a: 'sentite', hint: 'Voi, verbo in -ire: -ite, sentite.' },
      ]
    )}<h3>${L.part2H3}</h3><p>${L.part2P}</p>${h.exercises([
      { q: 'Io non ___ la domanda. (capire)', a: 'capisco', hint: 'Capire prende -isc-: capisco.' },
      { q: 'A che ora ___ di lavorare? (finire, tu)', a: 'finisci', hint: 'Finire prende -isc-: finisci.' },
      { q: 'Anna ___ il tè. (preferire)', a: 'preferisce', hint: 'Preferire prende -isc-: preferisce.' },
      { q: 'Loro ___ la cucina. (pulire)', a: 'puliscono', hint: 'Pulire prende -isc- anche con loro: puliscono.' },
      { q: 'Noi ___ subito. (capire)', a: 'capiamo', hint: 'Con noi niente -isc-: capiamo.' },
      { q: 'Tu ___ le chiavi? (cercare)', a: 'cerchi', hint: 'Cercare: la h tiene il suono duro, cerchi.' },
      { q: 'Tu ___ con la carta? (pagare)', a: 'paghi', hint: 'Pagare: la h tiene il suono duro, paghi.' },
      { q: 'Noi ___ un lavoro. (cercare)', a: 'cerchiamo', hint: 'Cercare con noi: cerchiamo.' },
      { q: 'Tu ___ la pasta ogni giorno? (mangiare)', a: 'mangi', hint: 'Mangiare: una i sola, mangi.' },
      { q: 'Tu ___ l’italiano o lo spagnolo? (studiare)', a: 'studi', hint: 'Studiare: una i sola, studi.' },
    ])}<h3>${L.part3H3}</h3><p>${L.part3P}</p>${h.exercises([
      { q: 'Scusi, Lei ___ inglese? (parlare)', a: 'parla', hint: 'Lei (formale) va come lui: parla.' },
      { q: 'Io non ___ la carne. (mangiare)', a: 'mangio', hint: 'Non va prima del verbo: non mangio.' },
      { q: '___ italiano da due anni. (studiare, io)', a: 'studio', hint: 'Presente + da: studio da due anni.' },
      { q: 'Noi ___ la radio ogni mattina. (ascoltare)', a: 'ascoltiamo', hint: 'Ascoltare, senza preposizione: ascoltiamo la radio.' },
      { q: 'Ti ___ alla stazione alle otto. (aspettare, io)', a: 'aspetto', hint: 'Aspettare qualcuno, senza per: aspetto.' },
      { q: 'Domani ___ per Parigi. (partire, noi)', a: 'partiamo', hint: 'Il presente va bene anche per domani: partiamo.' },
      { q: 'Che cosa ___ stasera? (cucinare, voi)', a: 'cucinate', hint: 'Voi, verbo in -are: cucinate.' },
      { q: 'I bambini non ___ mai la verdura. (finire)', a: 'finiscono', hint: 'Finire prende -isc- con loro: finiscono.' },
      { q: 'Anna ___ un appartamento in centro. (cercare)', a: 'cerca', hint: 'Con lei: cerca, la h serve solo davanti a i ed e.' },
      { q: 'Dove ___ i tuoi genitori? (abitare)', a: 'abitano', hint: 'Loro: abitano, con l’accento su a-.' },
    ])}{{ACTIONS}}</article>
    <article class="lesson-box"><h2>${c.conversationH2}</h2>${h.dialogue([
      ['Martin', 'Dove abiti?'],
      ['Studente', 'Abito a Torino, ma lavoro a Milano.'],
      ['Martin', 'E come arrivi al lavoro?'],
      ['Studente', 'Prendo il treno alle sette. Sul treno leggo e ascolto la musica.'],
      ['Martin', 'E la sera?'],
      ['Studente', 'Cucino, guardo un film e studio un po’ di italiano!'],
    ])}</article>`,
  it: {
    h1: 'Il presente dei verbi regolari: parlo, prendo, dormo',
    card: 'Parlo, prendo, dormo, capisco: le tre coniugazioni, i verbi in -isc-, l’ortografia, domande e negazione.',
    lead: 'Parlo italiano, prendo il treno, dormo poco: il presente serve per quello che fai adesso, ogni giorno e anche domani. Le tre coniugazioni (-are, -ere, -ire), i verbi in -isc- (capisco, finisco), l’ortografia (cerchi, mangi), domande e negazione e le trappole. Con 30 esercizi.',
    description:
      'Il presente indicativo dei verbi regolari italiani: quando si usa, le tre coniugazioni (parlo, prendo, dormo), i verbi in -isc- (capisco, finisco), l’ortografia (cerchi, paghi, mangi, studi), domande e negazione, le trappole, gli errori tipici e 30 esercizi.',
    heroAlt:
      'Un tavolo di cucina in legno con una tazza di caffè, un quaderno aperto con le pagine bianche e una matita, alla luce del mattino',
    usiH2: 'Quando si usa',
    usiP: 'Il presente è il tempo più usato in italiano. Serve per quello che succede <strong>adesso</strong>, per le <strong>abitudini</strong>, per le cose sempre vere e spesso anche per il <strong>futuro</strong> vicino.',
    uAdesso: 'Adesso',
    uAbitudine: 'Un’abitudine',
    uSempre: 'Una cosa sempre vera',
    uFuturo: 'Il futuro vicino',
    uDa: 'Da quanto tempo: presente + da',
    usiNote:
      '<strong>Domani parto</strong>: per i programmi sicuri gli italiani usano quasi sempre il presente, non il futuro. E per una cosa che è cominciata nel passato e continua ancora si usa il presente con <strong>da</strong>: <em lang="it">abito qui da tre anni</em>, <em lang="it">ti aspetto da un’ora</em>.',
    formaH2: 'Le tre coniugazioni',
    formaP: 'I verbi italiani finiscono in <strong>-are</strong>, <strong>-ere</strong> o <strong>-ire</strong>. Togli questa parte e aggiungi la desinenza della persona: <em lang="it">parl-are → parl-o</em>.',
    formaNote:
      '<strong>Tre cose da ricordare.</strong> Con <em lang="it">io</em> è sempre <strong>-o</strong>, con <em lang="it">tu</em> sempre <strong>-i</strong>, con <em lang="it">noi</em> sempre <strong>-iamo</strong>. <em lang="it">Lei</em> (formale) va come <em lang="it">lui</em> e <em lang="it">lei</em>: <em lang="it">Lei parla</em>. Con <em lang="it">loro</em> l’accento torna indietro: <em lang="it">PAR-la-no</em>, <em lang="it">PREN-do-no</em>, non <em lang="it">parlAno</em>; ne parla anche la lezione sulla <a href="{{PRONUNCIA}}">pronuncia</a>.',
    iscH2: 'I verbi in -isc-',
    iscP: 'Molti verbi in <strong>-ire</strong> aggiungono <strong>-isc-</strong> con <em lang="it">io, tu, lui, lei</em> e <em lang="it">loro</em>. Con <em lang="it">noi</em> e <em lang="it">voi</em>, no.',
    iCon: 'Con -isc-',
    iSenza: 'Senza -isc-',
    iscNote:
      'Non c’è una regola per sapere quali verbi in <strong>-ire</strong> prendono <strong>-isc-</strong>: si imparano. I più comuni senza <strong>-isc-</strong> sono quelli del secondo riquadro qui sopra. Attenzione alla pronuncia: <em lang="it">capisco</em> e <em lang="it">capiscono</em> hanno il suono <strong>sk</strong>, <em lang="it">capisci</em> e <em lang="it">capisce</em> il suono <strong>sc</strong> di <em lang="it">pesce</em>.',
    ortH2: 'L’ortografia',
    ortP: 'Alcuni verbi cambiano un po’ la scrittura per non cambiare il suono.',
    oCare: '-care e -gare: arriva la h davanti a i',
    oIare: '-iare: una i sola',
    oGere: '-cere e -gere: la scrittura non cambia, il suono sì',
    ortNote:
      '<strong>Cerchi</strong> con la h si legge come <em lang="it">cerco</em>: senza h, <em lang="it">cerci</em>, si leggerebbe come <em lang="it">ciao</em>. Al contrario <em lang="it">leggo</em> ha il suono duro e <em lang="it">leggi</em> quello dolce: si scrive normale, cambia solo la pronuncia. Con <em lang="it">mangiare</em> e <em lang="it">studiare</em> non si scrivono due i: <em lang="it">mangi</em>, <em lang="it">studi</em>, <em lang="it">mangiamo</em>.',
    frasiH2: 'Soggetto, negazione, domande',
    frasiP: 'Tre regole semplici per costruire le frasi.',
    fSoggetto: 'Il soggetto di solito non si dice',
    fNon: 'Negazione: non prima del verbo',
    fDomanda: 'Domande: lo stesso ordine, cambia la voce',
    fLei: 'Con Lei (formale): la forma di lui e lei',
    frasiNote:
      'La desinenza dice già chi fa l’azione, perciò <strong>io, tu, noi</strong> si dicono solo per sottolineare o fare un contrasto: <em lang="it">io lavoro, tu no!</em> Per la domanda non serve nessuna parola speciale: <em lang="it">Parli italiano.</em> e <em lang="it">Parli italiano?</em> cambiano solo con la voce, che sale alla fine. Per dire quante volte fai una cosa, vedi gli <a href="{{FREQUENZA}}">avverbi di frequenza</a>.',
    trapH2: 'Le trappole',
    trapP: 'Quattro punti in cui sbagliano in tanti.',
    tPreposizione: 'Ascoltare, aspettare, cercare: senza preposizione',
    tAbitare: 'Abitare a (città) e in (paese)',
    tAccento: 'L’accento di loro',
    tIrregolari: 'I verbi più usati sono irregolari',
    trapNote:
      'In molte lingue si dice «ascoltare <em>a</em>», «aspettare <em>per</em>», «cercare <em>per</em>»: in italiano no, <em lang="it">ascolto la musica, aspetto Luca, cerco un lavoro</em>. Si abita <strong>a</strong> Roma ma <strong>in</strong> Italia. E attenzione: i verbi più frequenti (<em lang="it">essere, avere, fare, andare</em>…) non seguono queste regole, li trovi nella lezione sul <a href="{{IRREGOLARI}}">presente dei verbi irregolari</a>; i verbi come <em lang="it">alzarsi</em> sono nella lezione sui <a href="{{RIFLESSIVI}}">verbi riflessivi</a>.',
    exIntro: '30 frasi in tre parti. Scrivi solo il verbo: la correzione arriva mentre scrivi.',
    part1H3: 'Parte 1 · -are, -ere, -ire',
    part1P: 'Scrivi il verbo al presente.',
    part2H3: 'Parte 2 · -isc- e ortografia',
    part2P: 'Attenzione ai verbi in -isc- e alla scrittura.',
    part3H3: 'Parte 3 · Nella vita di tutti i giorni',
    part3P: 'Domande, negazione, da quanto tempo: scrivi il verbo al presente.',
  },
};

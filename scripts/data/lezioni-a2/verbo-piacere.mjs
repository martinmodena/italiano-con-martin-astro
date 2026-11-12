// Lezione A2 «Il verbo piacere: mi piace, mi piacciono» (2026-11-12): struttura, materiale italiano e testi.
// Le spiegazioni tradotte stanno in verbo-piacere-i18n.mjs.
//
// Martin il 2026-11-12: «si potrebbe anche aggiungere una lezione sull'uso di piacere, forse ci sono altri verbi
// con la stessa struttura». Prima piacere era solo una sezione dei pronomi indiretti (A2). Qui: come funziona
// (la cosa è il soggetto), piace o piacciono (anche con l'infinito), a me / mi e anche a me / neanche a me,
// piacere con le persone (tu mi piaci), il passato con essere, i verbi come piacere (mancare, servire, bastare,
// sembrare, interessare, dispiacere, restare, toccare, andare, fare male) e le trappole (non mi piace ≠ mi
// dispiace, chi piace a chi, mi piacerebbe). Nell'indice A2 sta subito dopo «I pronomi indiretti», che ora
// porta qui con il pulsante finale; il pulsante finale di questa lezione porta ai pronomi combinati (B1).
// Confronto ed errori per lingua in confronti-piacere-trapassato.mjs.

export default {
  slug: 'verbo-piacere',
  level: 'a2',
  next: 'pronomi-combinati',
  after: 'pronomi-indiretti',
  minutes: 20,
  hero: { src: 'grammatica/verbo-piacere-hero.webp', width: 1280, height: 720 },
  slugs: {
    en: 'the-italian-verb-piacere',
    es: 'el-verbo-piacere-en-italiano',
    fr: 'le-verbe-piacere-en-italien',
    cs: 'sloveso-piacere-v-italstine',
    pl: 'czasownik-piacere-po-wlosku',
    tr: 'italyanca-piacere-fiili',
    de: 'das-verb-piacere-im-italienischen',
    ja: 'イタリア語の動詞piacere',
  },
  nav: [
    ['come-funziona', 'Come funziona'],
    ['piace-piacciono', 'Piace o piacciono?'],
    ['tonica', 'A me o mi?'],
    ['persone', 'Con le persone'],
    ['passato', 'Al passato'],
    ['verbi', 'Verbi come piacere'],
    ['trappole', 'Trappole'],
    ['errori', 'Errori'],
    ['esercizi', 'Esercizi'],
  ],
  body: (L, h, c) => `    <article class="lesson-box" id="come-funziona"><h2>${L.funzH2}</h2><p>${L.funzP}</p>${h.table(
    ['Forma tonica', 'Pronome', 'Esempio'],
    [
      ['a me', 'mi', 'Mi piace il mare.'],
      ['a te', 'ti', 'Ti piace il mare?'],
      ['a lui', 'gli', 'Gli piace il mare.'],
      ['a lei', 'le', 'Le piace il mare.'],
      ['a Lei', 'Le', 'Signora, Le piace il mare?'],
      ['a noi', 'ci', 'Ci piace il mare.'],
      ['a voi', 'vi', 'Vi piace il mare?'],
      ['a loro', 'gli', 'Gli piace il mare.'],
    ]
  )}<p class="mini-note">${L.funzNote.replace('{{INDIRETTI}}', h.href('pronomi-indiretti', 'a2'))}</p></article>
    <article class="lesson-box" id="piace-piacciono"><h2>${L.ppH2}</h2><p>${L.ppP}</p>${h.examples([
      [L.ppSing, 'Mi piace il caffè. · Ti piace questa canzone?'],
      [L.ppInf, 'Mi piace leggere. · Gli piace cantare e ballare.'],
      [L.ppPlur, 'Mi piacciono i libri. · Le piacciono le fragole.'],
    ])}<p class="mini-note">${L.ppNote}</p></article>
    <article class="lesson-box" id="tonica"><h2>${L.tonH2}</h2><p>${L.tonP}</p>${h.examples([
      [L.tAnche, '«Mi piace il mare.» «Anche a me!» · «A me no.»'],
      [L.tNeanche, '«Non mi piace il freddo.» «Neanche a me.» · «A me sì.»'],
      [L.tNome, 'A Marco piace il calcio. · Ai bambini piacciono i cartoni animati.'],
    ])}<p class="mini-note">${L.tonNote}</p></article>
    <article class="lesson-box" id="persone"><h2>${L.perH2}</h2><p>${L.perP}</p>${h.table(
      ['Persona', 'Forma', 'Esempio'],
      [
        ['io', 'piaccio', 'Piaccio ai tuoi genitori?'],
        ['tu', 'piaci', 'Tu mi piaci molto.'],
        ['lui · lei', 'piace', 'Marco piace a Giulia.'],
        ['noi', 'piacciamo', 'Piacciamo ai nostri vicini.'],
        ['voi', 'piacete', 'Voi piacete ai bambini.'],
        ['loro', 'piacciono', 'I tuoi amici mi piacciono.'],
      ]
    )}<p class="mini-note">${L.perNote}</p></article>
    <article class="lesson-box" id="passato"><h2>${L.pasH2}</h2><p>${L.pasP}</p>${h.examples([
      [L.paM, 'Mi è piaciuto il film.'],
      [L.paF, 'Mi è piaciuta la pizza.'],
      [L.paPl, 'Mi sono piaciuti i musei. · Mi sono piaciute le spiagge.'],
      [L.paAltri, 'Da bambino mi piacevano i fumetti. · Mi piacerebbe tornare.'],
    ])}<p class="mini-note">${L.pasNote}</p></article>
    <article class="lesson-box" id="verbi"><h2>${L.verbiH2}</h2><p>${L.verbiP}</p>${h.examples([
      [L.vMancare, 'Mi manchi. · Mi manca casa.'],
      [L.vServire, 'Mi serve una penna. · Ci servono due biglietti.'],
      [L.vBastare, 'Mi basta un caffè. · Bastano cinque minuti.'],
      [L.vSembrare, 'Mi sembra giusto. · Ti sembra una buona idea?'],
      [L.vInteressare, 'Mi interessa la storia. · Non mi interessano i pettegolezzi.'],
      [L.vDispiacere, 'Mi dispiace, non posso. · Ti dispiace se apro la finestra?'],
      [L.vRestare, 'Mi restano dieci euro. · Ci resta solo un giorno.'],
      [L.vToccare, 'Tocca a te! · Mi tocca lavorare anche sabato.'],
      [L.vAndare, 'Ti va un caffè? · Stasera non mi va di uscire.'],
      [L.vFareMale, 'Mi fa male la testa. · Mi fanno male i piedi.'],
    ])}<p class="mini-note">${L.verbiNote}</p></article>
    <article class="lesson-box" id="trappole"><h2>${L.trapH2}</h2><p>${L.trapP}</p>${h.examples([
      [L.tDisp, 'Non mi piace il rumore. · Mi dispiace per il ritardo.'],
      [L.tChi, 'Marco piace a Giulia. · Giulia piace a Marco.'],
      [L.tDesiderio, 'Mi piacerebbe visitare Venezia. · Ti piacerebbe venire con noi?'],
    ])}<p class="mini-note">${L.trapNote.replace('{{COMBINATI}}', h.href('pronomi-combinati', 'b1'))}</p></article>
    <article class="lesson-box" id="errori"><h2>${c.mistakesH2}</h2>${h.mistakes([
      ['Io piaccio la pizza.', 'Mi piace la pizza.'],
      ['Mi piace i gatti.', 'Mi piacciono i gatti.'],
      ['A me mi piace il mare.', 'A me piace il mare. · Mi piace il mare.'],
      ['Mi ha piaciuto il film.', 'Mi è piaciuto il film.'],
      ['Mi è piaciuto la pizza.', 'Mi è piaciuta la pizza.'],
    ])}</article>
    <article class="lesson-box" id="esercizi"><h2>${c.exercisesH2}</h2><p>${L.exIntro}</p><h3>${L.part1H3}</h3><p>${L.part1P}</p>${h.exercises(
      [
        { q: 'Mi ___ la pizza.', a: 'piace', hint: 'La pizza è una cosa sola: piace.' },
        { q: 'Ti ___ i film italiani?', a: 'piacciono', hint: 'I film sono più di uno: piacciono.' },
        { q: 'A Marco ___ leggere.', a: 'piace', hint: 'Con un verbo all’infinito: piace.' },
        { q: 'Ci ___ molto Roma.', a: 'piace', hint: 'Roma è una città sola: piace.' },
        { q: 'Le ___ le scarpe rosse.', a: 'piacciono', hint: 'Le scarpe sono plurale: piacciono.' },
        { q: 'Non mi ___ alzarmi presto.', a: 'piace', hint: 'Alzarsi è un verbo: piace.' },
        { q: 'Vi ___ gli spaghetti?', a: 'piacciono', hint: 'Gli spaghetti sono plurale: piacciono.' },
        { q: 'Ai bambini ___ giocare e correre.', a: 'piace', hint: 'Anche con due verbi all’infinito resta piace.' },
        { q: 'A mia madre non ___ i gatti.', a: 'piacciono', hint: 'I gatti sono plurale: piacciono.' },
        { q: 'Ti ___ questa città?', a: 'piace', hint: 'Una città: piace.' },
      ]
    )}<h3>${L.part2H3}</h3><p>${L.part2P}</p>${h.exercises([
      { q: 'A Luca piace il calcio. → ___ piace il calcio.', a: 'gli', hint: 'A Luca = a lui → gli.' },
      { q: 'A Sara piacciono i fiori. → ___ piacciono i fiori.', a: 'le', hint: 'A Sara = a lei → le.' },
      { q: 'A noi piace viaggiare. → ___ piace viaggiare.', a: 'ci', hint: 'A noi → ci.' },
      {
        q: 'A Paolo e Anna piace il mare. → ___ piace il mare.',
        a: 'gli',
        hint: 'A loro → gli, nella lingua di tutti i giorni.',
      },
      { q: '«Mi piace il jazz.» «Anche ___ me!»', a: 'a', hint: 'Anche a me: con anche si usa la forma tonica.' },
      {
        q: '«Non mi piace il freddo.» «___ a me.»',
        a: 'neanche',
        alt: 'nemmeno|neppure',
        hint: 'Per dire «io no, come te»: neanche a me.',
      },
      { q: 'Tu mi ___ molto. (piacere)', a: 'piaci', hint: 'Il soggetto è tu: tu piaci.' },
      { q: 'Io ti ___? (piacere)', a: 'piaccio', hint: 'Il soggetto è io: io piaccio.' },
      { q: 'Signora, Le ___ il nostro vino?', a: 'piace', hint: 'Il vino: piace. Le è il Lei formale.' },
      { q: 'Noi ___ ai tuoi genitori? (piacere)', a: 'piacciamo', hint: 'Il soggetto è noi: noi piacciamo.' },
    ])}<h3>${L.part3H3}</h3><p>${L.part3P}</p>${h.exercises([
      { q: 'Mi è ___ molto il film. (piacere)', a: 'piaciuto', hint: 'Il film, maschile singolare: piaciuto.' },
      { q: 'Ti è ___ la festa? (piacere)', a: 'piaciuta', hint: 'La festa, femminile: piaciuta.' },
      { q: 'Ci sono ___ i tuoi amici. (piacere)', a: 'piaciuti', hint: 'I tuoi amici, maschile plurale: piaciuti.' },
      {
        q: 'Da bambino mi ___ i fumetti. (piacere, imperfetto)',
        a: 'piacevano',
        hint: 'Imperfetto plurale: piacevano.',
      },
      {
        q: 'Mi ___ andare in Giappone. (piacere, condizionale)',
        a: 'piacerebbe',
        hint: 'Un desiderio: mi piacerebbe.',
      },
      { q: 'Mi ___ tanto! (mancare, a te)', a: 'manchi', hint: 'Sei tu che manchi a me: mi manchi.' },
      { q: 'Ti ___ una penna? (servire)', a: 'serve', hint: 'Una penna: serve.' },
      { q: 'Ci ___ due biglietti. (servire)', a: 'servono', hint: 'Due biglietti: servono.' },
      { q: 'Mi ___ cinque minuti. (bastare)', a: 'bastano', hint: 'Cinque minuti, plurale: bastano.' },
      { q: '___ dispiace, non posso venire.', a: 'mi', hint: 'Mi dispiace = chiedo scusa.' },
    ])}{{ACTIONS}}</article>
    <article class="lesson-box"><h2>${c.conversationH2}</h2>${h.dialogue([
      ['Martin', 'Allora, ti è piaciuta Napoli?'],
      ['Studente', 'Sì, tantissimo! Mi sono piaciuti soprattutto i vicoli e il mare.'],
      ['Martin', 'E la pizza? A me piace quella con i friarielli.'],
      ['Studente', 'Anche a me! Mi manca già. Mi piacerebbe tornarci in primavera.'],
      ['Martin', 'Ottima idea. E se ti serve un consiglio, scrivimi!'],
    ])}</article>`,
  it: {
    h1: 'Il verbo piacere: mi piace, mi piacciono',
    card: 'Mi piace, mi piacciono, mi è piaciuto, tu mi piaci: come funziona piacere e i verbi come lui.',
    lead: 'Mi piace il caffè, mi piacciono i libri, mi è piaciuto il film: con piacere la cosa è il soggetto e la persona è un pronome indiretto. Piace o piacciono, a me o mi, anche a me e neanche a me, tu mi piaci, il passato con essere e dieci verbi che funzionano allo stesso modo, come mancare, servire e bastare. Con 30 esercizi.',
    description:
      'Il verbo piacere in italiano: mi piace o mi piacciono, a me piace, anche a me e neanche a me, tu mi piaci, mi è piaciuto, mi piacerebbe e i verbi come piacere (mancare, servire, bastare, sembrare). Con 30 esercizi.',
    heroAlt:
      'Una ragazza con un maglione giallo annusa un mazzo di fiori a occhi chiusi, sorridendo, davanti a colline con gli ulivi',
    funzH2: 'Come funziona',
    funzP:
      '<em lang="it">Mi piace il mare</em> vuol dire, parola per parola, «il mare piace a me». <strong>Il soggetto è la cosa</strong> (il mare) e la persona è un <strong>pronome indiretto</strong> (mi = a me). Per questo il verbo cambia secondo la cosa, non secondo la persona.',
    funzNote:
      'Sono gli stessi pronomi della lezione sui <a href="{{INDIRETTI}}">pronomi indiretti</a>: <em lang="it">mi, ti, gli, le, Le, ci, vi, gli</em>. Il pronome va prima del verbo, anche nelle domande: <em lang="it">ti piace?</em>, e con <em lang="it">non</em> prima del pronome: <em lang="it">non mi piace</em>.',
    ppH2: 'Piace o piacciono?',
    ppP: 'Nel presente servono quasi sempre solo due forme: <strong>piace</strong> e <strong>piacciono</strong>. Scegli guardando la cosa che piace.',
    ppSing: 'Una cosa: piace',
    ppInf: 'Un verbo (anche due): piace',
    ppPlur: 'Più cose: piacciono',
    ppNote:
      '<strong>Mi piace il libro, mi piacciono i libri</strong>: cambia solo il verbo, il pronome resta <em lang="it">mi</em>. Con un verbo all’infinito si usa sempre <em lang="it">piace</em>, anche quando i verbi sono due: <em lang="it">mi piace cantare e ballare</em>.',
    tonH2: 'A me piace o mi piace?',
    tonP: 'Tutte e due sono giuste. <em lang="it">Mi piace</em> è la forma normale; <em lang="it">a me piace</em> mette l’accento sulla persona, per esempio per fare un confronto.',
    tAnche: 'Sono d’accordo: anche a me',
    tNeanche: 'Non piace a tutti e due: neanche a me',
    tNome: 'Con un nome: a + persona',
    tonNote:
      '<strong>Mai tutte e due insieme</strong>: <em lang="it">a me piace</em> oppure <em lang="it">mi piace</em>, non <em lang="it">a me mi piace</em> (si sente parlando, ma è da evitare). Nelle risposte brevi c’è solo la forma tonica: <em lang="it">anche a me</em>, <em lang="it">neanche a me</em>, <em lang="it">a me sì</em>, <em lang="it">a me no</em>. Con un nome si dice <em lang="it">a Marco piace</em> o <em lang="it">gli piace</em>.',
    perH2: 'Tu mi piaci: piacere con le persone',
    perP: 'Quando quello che piace è una persona, il verbo prende tutte le forme. Il soggetto è la persona che piace.',
    perNote:
      '<strong>Tu mi piaci</strong> = sei tu che piaci a me. <em lang="it">Marco piace a Giulia</em> vuol dire che è Giulia a trovare Marco simpatico o attraente. Con le persone <em lang="it">piacere</em> parla spesso di attrazione: per un amico si dice anche <em lang="it">mi sta simpatico</em>, e per l’amore <em lang="it">gli voglio bene</em>, <em lang="it">ti amo</em>.',
    pasH2: 'Al passato',
    pasP: 'Al passato prossimo <em lang="it">piacere</em> vuole <strong>essere</strong>, e il participio si accorda con la cosa che è piaciuta, come un aggettivo.',
    paM: 'Una cosa maschile: piaciuto',
    paF: 'Una cosa femminile: piaciuta',
    paPl: 'Più cose: piaciuti, piaciute',
    paAltri: 'Imperfetto e condizionale',
    pasNote:
      '<strong>Mi è piaciuta la pizza</strong>, non <em lang="it">mi ha piaciuto</em>. Per le abitudini del passato si usa l’imperfetto: <em lang="it">mi piaceva</em>, <em lang="it">mi piacevano</em>. E per un desiderio il condizionale: <em lang="it">mi piacerebbe</em> è il modo gentile di dire «vorrei».',
    verbiH2: 'I verbi come piacere',
    verbiP:
      'Molti verbi di tutti i giorni funzionano allo stesso modo: la persona è un pronome indiretto e il verbo si accorda con la cosa.',
    vMancare: 'Mancare: sentire la mancanza',
    vServire: 'Servire: avere bisogno',
    vBastare: 'Bastare: essere abbastanza',
    vSembrare: 'Sembrare: un’opinione',
    vInteressare: 'Interessare',
    vDispiacere: 'Dispiacere: chiedere scusa o permesso',
    vRestare: 'Restare: quello che rimane',
    vToccare: 'Toccare a: il turno o un obbligo',
    vAndare: 'Andare: avere voglia',
    vFareMale: 'Fare male: il dolore',
    verbiNote:
      '<strong>Mi manchi</strong> = sei tu che manchi a me, cioè sento la tua mancanza. La regola è sempre la stessa: <em lang="it">mi serve una penna</em>, ma <em lang="it">mi servono due penne</em>; <em lang="it">mi fa male la testa</em>, ma <em lang="it">mi fanno male i piedi</em>. Al passato vogliono tutti <em lang="it">essere</em>: <em lang="it">mi è mancata casa</em>, <em lang="it">mi è servito il tuo aiuto</em>.',
    trapH2: 'Le trappole',
    trapP: 'Tre cose da sapere per non dire il contrario di quello che pensi.',
    tDisp: 'Non mi piace ≠ mi dispiace',
    tChi: 'Chi piace a chi?',
    tDesiderio: 'Mi piacerebbe: un desiderio',
    trapNote:
      '<strong>Mi dispiace non è «non mi piace»</strong>: vuol dire «mi scuso» o «sono triste per te». <strong>In <em lang="it">Marco piace a Giulia</em> è Giulia che apprezza Marco</strong>: chi piace è il soggetto, chi apprezza ha <em lang="it">a</em>. E quando ti presentano qualcuno, <em lang="it">Piacere!</em> vuol dire «molto lieto». Il passo successivo: con un pronome diretto <em lang="it">mi</em> diventa <em lang="it">me</em>, come in <em lang="it">me lo dai?</em>: sono <a href="{{COMBINATI}}">i pronomi combinati</a>.',
    exIntro: '30 frasi in tre parti. Scrivi solo quello che manca: la correzione arriva mentre scrivi.',
    part1H3: 'Parte 1 · Piace o piacciono?',
    part1P: 'Scrivi piace o piacciono.',
    part2H3: 'Parte 2 · Il pronome e le persone',
    part2P: 'Scrivi il pronome, la parola che manca o la forma giusta di piacere.',
    part3H3: 'Parte 3 · Al passato e i verbi come piacere',
    part3P: 'Scrivi la forma del verbo indicato fra parentesi, o il pronome che manca.',
  },
};

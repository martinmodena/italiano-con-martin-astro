// Lezione A1 «I verbi riflessivi» (2026-10-09): struttura, materiale italiano e testi italiani.
// Le spiegazioni tradotte stanno in verbi-riflessivi-i18n.mjs.
//
// Mancava, ed è la grammatica della routine (mi sveglio, mi lavo, mi vesto): nasce insieme
// all'episodio di Emma sulla giornata («Il lavandino misterioso»), che la allena. Forma con i tre
// gruppi, i verbi della giornata, riflessivo o no (mi lavo / lavo la macchina, mi chiamo), i
// reciproci e i verbi «di sentimento» (mi diverto), il pronome con dovere/volere/potere e un cenno
// al passato prossimo con essere. Nell'indice A1 sta dopo «Il presente dei verbi irregolari».

const it = (s) => `<span lang="it">${s}</span>`;

export default {
  slug: 'verbi-riflessivi',
  next: 'genere-e-numero',
  after: 'presente-verbi-irregolari',
  minutes: 25,
  slugs: {
    en: 'italian-reflexive-verbs',
    es: 'verbos-reflexivos-en-italiano',
    fr: 'verbes-pronominaux-en-italien',
    cs: 'zvratna-slovesa-v-italstine',
    pl: 'czasowniki-zwrotne-po-wlosku',
    tr: 'italyancada-donuslu-fiiller',
    de: 'reflexive-verben-im-italienischen',
    ja: 'イタリア語の再帰動詞',
  },
  nav: [
    ['forma', 'Forma'],
    ['giornata', 'Giornata'],
    ['uso', 'Uso'],
    ['posizione', 'Posizione'],
    ['errori', 'Errori'],
    ['esercizi', 'Esercizi'],
  ],
  body: (L, h, c) => `    <article class="lesson-box" id="forma"><h2>${L.formaH2}</h2><p>${L.formaP}</p>${h.table(
    ['Persona', 'Pronome', `=${it('svegliarsi')}`, `=${it('mettersi')}`, `=${it('vestirsi')}`],
    [
      ['io', 'mi', 'mi sveglio', 'mi metto', 'mi vesto'],
      ['tu', 'ti', 'ti svegli', 'ti metti', 'ti vesti'],
      ['lui / lei', 'si', 'si sveglia', 'si mette', 'si veste'],
      ['noi', 'ci', 'ci svegliamo', 'ci mettiamo', 'ci vestiamo'],
      ['voi', 'vi', 'vi svegliate', 'vi mettete', 'vi vestite'],
      ['loro', 'si', 'si svegliano', 'si mettono', 'si vestono'],
    ]
  )}<p class="mini-note">${L.formaNote1}</p><p class="mini-note">${L.formaNote2}</p></article>
    <article class="lesson-box" id="giornata"><h2>${L.giornoH2}</h2><p>${L.giornoP}</p>${h.examples([
      [L.gMattina, 'Mi sveglio alle sette e mi alzo subito.'],
      [L.gBagno, 'Mi lavo la faccia e mi faccio la doccia.'],
      [L.gPronto, 'Mi vesto, mi pettino e mi trucco.'],
      [L.gGiorno, 'A pranzo mi siedo al bar e mi riposo un po’.'],
      [L.gSera, 'La sera mi lavo i denti e mi metto il pigiama.'],
      [L.gNotte, 'Mi addormento sempre verso mezzanotte.'],
    ])}<p class="mini-note">${L.giornoNote1}</p><p class="mini-note">${L.giornoNote2}</p></article>
    <article class="lesson-box" id="uso"><h2>${L.usoH2}</h2><p>${L.usoP}</p>${h.examples([
      [L.uSeStesso, 'Mi lavo. · Lavo la macchina.'],
      [L.uAltri, 'Mi sveglio alle sette. · Sveglio i bambini alle sette.'],
      [L.uNome, 'Mi chiamo Emma. · Chiamo Emma al telefono.'],
      [L.uReciproco, 'Ci vediamo domani! · Marco e Anna si sposano.'],
      [L.uSentire, 'Come ti senti? Mi sento bene.'],
      [L.uEmozioni, 'Mi diverto, mi annoio, mi arrabbio, mi ricordo.'],
    ])}<p class="mini-note">${L.usoNote}</p></article>
    <article class="lesson-box" id="posizione"><h2>${L.posH2}</h2><p>${L.posP}</p>${h.examples([
      [L.pNeg, 'Non mi alzo mai prima delle otto.'],
      [L.pPrima, 'Domani mi devo alzare presto.'],
      [L.pDopo, 'Domani devo alzarmi presto.'],
      [L.pInf, 'Vuoi riposarti un po’?'],
      [L.pPassato, 'Stamattina mi sono svegliato tardi. Anna si è svegliata presto.'],
    ])}<p class="mini-note">${L.posNote1}</p><p class="mini-note">${L.posNote2}</p></article>
    <article class="lesson-box" id="errori"><h2>${c.mistakesH2}</h2>${h.mistakes([
      ['Io sveglio alle sette.', 'Mi sveglio alle sette.'],
      ['Io chiamo Sara.', 'Mi chiamo Sara.'],
      ['Si sveglio presto.', 'Mi sveglio presto.'],
      ['Noi si alziamo.', 'Noi ci alziamo.'],
      ['Lui se lava.', 'Lui si lava.'],
      ['Mi lavo le mie mani.', 'Mi lavo le mani.'],
      ['Devo mi alzare.', 'Devo alzarmi. / Mi devo alzare.'],
      ['Mi ho svegliato tardi.', 'Mi sono svegliato tardi.'],
    ])}</article>
    <article class="lesson-box" id="esercizi"><h2>${c.exercisesH2}</h2><p>${L.exIntro}</p><h3>${L.part1H3}</h3><p>${L.part1P}</p>${h.exercises(
      [
        { q: 'Io ___ sveglio alle sette.', a: 'mi', hint: 'Io → mi.' },
        { q: 'Tu ___ alzi presto la domenica?', a: 'ti', hint: 'Tu → ti.' },
        { q: 'Luca ___ fa la doccia la sera.', a: 'si', hint: 'Lui → si.' },
        { q: 'Noi ___ vestiamo in fretta.', a: 'ci', hint: 'Noi → ci.' },
        { q: 'Voi ___ divertite alla festa?', a: 'vi', hint: 'Voi → vi.' },
        { q: 'I bambini ___ addormentano tardi.', a: 'si', hint: 'Loro → si, come lui e lei.' },
        { q: 'Ciao! Come ___ chiami?', a: 'ti', hint: 'Tu → ti chiami.' },
        { q: 'Piacere, io ___ chiamo Sara.', a: 'mi', hint: 'Io → mi chiamo.' },
        { q: 'Anna ___ trucca davanti allo specchio.', a: 'si', hint: 'Lei → si.' },
        { q: 'La domenica noi ___ riposiamo.', a: 'ci', hint: 'Noi → ci.' },
      ]
    )}<h3>${L.part2H3}</h3><p>${L.part2P}</p>${h.exercises([
      { q: 'Io mi ___ alle sette. (svegliarsi)', a: 'sveglio', hint: 'Io mi sveglio.' },
      { q: 'Tu ti ___ presto? (alzarsi)', a: 'alzi', hint: 'Tu ti alzi.' },
      { q: 'Mio padre si ___ la barba ogni mattina. (fare)', a: 'fa', hint: 'Lui si fa la barba.' },
      { q: 'Noi ci ___ in cinque minuti. (vestirsi)', a: 'vestiamo', hint: 'Noi ci vestiamo.' },
      { q: 'Voi vi ___ i denti dopo pranzo? (lavare)', a: 'lavate', hint: 'Voi vi lavate.' },
      { q: 'I ragazzi si ___ a mezzanotte. (addormentarsi)', a: 'addormentano', hint: 'Loro si addormentano.' },
      { q: 'Giulia si ___ i capelli. (pettinare)', a: 'pettina', hint: 'Lei si pettina.' },
      { q: 'Come ti ___ oggi? (sentirsi)', a: 'senti', hint: 'Tu ti senti.' },
      { q: 'Alle feste io mi ___ molto. (divertirsi)', a: 'diverto', hint: 'Io mi diverto.' },
      { q: 'Ciao, ci ___ domani! (vedersi)', a: 'vediamo', hint: 'Noi ci vediamo.' },
    ])}<h3>${L.part3H3}</h3><p>${L.part3P}</p>${h.exercises([
      {
        q: 'Ogni mattina ___ i bambini alle sette. (svegliare, io)',
        a: 'sveglio',
        hint: 'Sveglio un’altra persona: niente mi.',
      },
      { q: 'Ogni mattina ___ alle sei. (svegliarsi, io)', a: 'mi sveglio', hint: 'Sveglio me stesso: mi sveglio.' },
      { q: 'Il sabato ___ la macchina. (lavare, io)', a: 'lavo', hint: 'Lavo una cosa: niente mi.' },
      { q: 'Prima di mangiare ___ le mani. (lavarsi, io)', a: 'mi lavo', hint: 'Mi lavo le mani, senza «mie».' },
      { q: 'Domani devo ___ presto. (alzarsi)', a: 'alzarmi', hint: 'Dopo devo: alzarmi, con mi attaccato.' },
      { q: 'Non ___ mai prima delle otto. (alzarsi, io)', a: 'mi alzo', hint: 'Non + mi + verbo.' },
      { q: '___ Marco, piacere! (chiamarsi, io)', a: 'mi chiamo', hint: 'Il mio nome: mi chiamo.' },
      {
        q: '___ mia madre ogni domenica. (chiamare, io)',
        a: 'chiamo',
        hint: 'Telefono a una persona: chiamo, senza mi.',
      },
      {
        q: 'Sei stanco? Vuoi ___ un po’? (riposarsi)',
        a: 'riposarti',
        hint: 'Dopo vuoi: riposarti, con ti attaccato.',
      },
      { q: 'Stamattina mi ___ svegliata tardi.', a: 'sono', hint: 'Al passato prossimo i riflessivi vogliono essere.' },
    ])}{{ACTIONS}}</article>
    <article class="lesson-box"><h2>${c.conversationH2}</h2>${h.dialogue([
      ['Martin', 'A che ora ti svegli la mattina?'],
      ['Studente', 'Mi sveglio alle sette, ma mi alzo alle sette e mezza!'],
      ['Martin', 'E poi? Fai colazione a casa?'],
      ['Studente', 'No, mi lavo, mi vesto in cinque minuti e prendo un caffè al bar. La sera invece mi riposo.'],
    ])}</article>`,
  it: {
    h1: 'I verbi riflessivi',
    card: 'Mi sveglio, ti lavi, si veste: i verbi della routine di ogni giorno.',
    lead: 'Mi sveglio, mi lavo, mi vesto: i verbi riflessivi raccontano la giornata. Qui trovi come si formano, i verbi della routine, quando un verbo è riflessivo e quando no, dove va il pronome con devo e voglio, gli errori tipici e 30 esercizi.',
    description:
      'I verbi riflessivi in italiano: mi sveglio, ti lavi, si veste. Pronomi mi, ti, si, ci, vi, i verbi della routine, riflessivo o no (mi lavo / lavo la macchina), devo alzarmi, mi sono svegliato e 30 esercizi.',
    formaH2: 'Come si formano: mi, ti, si, ci, vi, si',
    formaP:
      'Un verbo riflessivo ha un piccolo pronome davanti: <em lang="it">mi</em>, <em lang="it">ti</em>, <em lang="it">si</em>, <em lang="it">ci</em>, <em lang="it">vi</em>, <em lang="it">si</em>. Il verbo si coniuga come sempre, nei tre gruppi in -are, -ere e -ire.',
    formaNote1:
      '<strong>L’infinito finisce in -si:</strong> <em lang="it">svegliarsi</em> = <em lang="it">svegliare</em> + <em lang="it">si</em>, <em lang="it">mettersi</em>, <em lang="it">vestirsi</em>. Nel dizionario trovi spesso il verbo senza -si.',
    formaNote2:
      '<strong>Si vale due volte:</strong> per <em lang="it">lui / lei</em> e per <em lang="it">loro</em>. Chi parla lo capisce dal verbo: <em lang="it">si sveglia</em>, <em lang="it">si svegliano</em>.',
    giornoH2: 'I verbi della giornata',
    giornoP: 'Quasi tutta la routine di ogni giorno si racconta con i verbi riflessivi.',
    gMattina: 'La sveglia',
    gBagno: 'In bagno',
    gPronto: 'Prepararsi',
    gGiorno: 'Durante il giorno',
    gSera: 'La sera',
    gNotte: 'La notte',
    giornoNote1:
      '<strong>Con le parti del corpo non si usa il possessivo:</strong> <em lang="it">mi lavo le mani</em>, <em lang="it">mi lavo i denti</em>, non <em lang="it">mi lavo le mie mani</em>. Il pronome <em lang="it">mi</em> dice già di chi sono.',
    giornoNote2:
      '<strong>Due irregolari da sapere:</strong> <em lang="it">sedersi</em> (<em lang="it">mi siedo, ti siedi, si siede, ci sediamo</em>) e <em lang="it">farsi la doccia</em>, che segue <em lang="it">fare</em> (<em lang="it">mi faccio, ti fai, si fa</em>).',
    usoH2: 'Riflessivo o no?',
    usoP: 'Lo stesso verbo può essere riflessivo o no. È riflessivo quando l’azione torna su chi la fa; senza pronome, l’azione va su un’altra persona o una cosa.',
    uSeStesso: 'Me stesso / una cosa',
    uAltri: 'Me stesso / un’altra persona',
    uNome: 'Il nome / il telefono',
    uReciproco: 'L’uno con l’altro',
    uSentire: 'Come stai: sentirsi',
    uEmozioni: 'Emozioni e memoria',
    usoNote:
      '<strong>Attenzione:</strong> molti verbi sono riflessivi in italiano ma non nella tua lingua, e vanno imparati con il pronome: <em lang="it">mi chiamo</em>, <em lang="it">mi diverto</em>, <em lang="it">mi ricordo</em>, <em lang="it">mi sposo</em>. Con il plurale il pronome può voler dire «l’uno con l’altro»: <em lang="it">ci vediamo</em>, <em lang="it">si sposano</em>.',
    posH2: 'Dove va il pronome?',
    posP: 'Di solito il pronome va subito prima del verbo, anche nelle frasi negative.',
    pNeg: 'Con non',
    pPrima: 'Con dovere, volere, potere: prima…',
    pDopo: '…oppure attaccato all’infinito',
    pInf: 'L’infinito cambia con la persona',
    pPassato: 'Al passato prossimo: essere',
    posNote1:
      '<strong>Con l’infinito il pronome cambia con la persona:</strong> <em lang="it">devo alzarmi</em>, <em lang="it">devi alzarti</em>, <em lang="it">deve alzarsi</em>. Le due forme (<em lang="it">mi devo alzare</em> / <em lang="it">devo alzarmi</em>) sono giuste tutte e due.',
    posNote2:
      '<strong>Al passato prossimo i riflessivi vogliono sempre essere</strong>, e il participio si accorda: <em lang="it">mi sono svegliato</em> (Marco), <em lang="it">mi sono svegliata</em> (Anna).',
    exIntro: '30 frasi in tre parti. Scrivi solo quello che manca: la correzione arriva mentre scrivi.',
    part1H3: 'Parte 1 · Il pronome',
    part1P: 'Scrivi mi, ti, si, ci o vi.',
    part2H3: 'Parte 2 · Il verbo',
    part2P: 'Scrivi il verbo al presente.',
    part3H3: 'Parte 3 · Riflessivo o no?',
    part3P: 'Scrivi la forma giusta: con il pronome solo se serve.',
  },
};

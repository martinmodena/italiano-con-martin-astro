// Lezione A2 «I participi passati irregolari» (2026-10-06): struttura, materiale italiano e testi
// italiani. Le spiegazioni tradotte stanno in participi-passati-irregolari-i18n.mjs.
//
// Nata insieme alla lezione sul passato prossimo rifatta (Martin: «la lista dei participi passati
// regolari ed irregolari con 100 esercizi»). I participi sono divisi per schema (-tto, -so, -sto…)
// perché si imparano a gruppi; i verbi in -urre, -orre, -arre hanno un gruppo e una spiegazione
// propri (Martin: «hai previsto anche i casi con "urre" come tradurre?»).

// Ogni gruppo: id (chiave dei testi tradotti: `g<Id>H` è la finale mostrata nel titolo, `g<Id>P`
// la spiegazione) e righe [infinito, participio, ausiliare, esempio].
export const GROUPS = [
  [
    'Tto',
    '-tto',
    [
      ['fare', 'fatto', 'avere', 'Ho fatto la spesa.'],
      ['dire', 'detto', 'avere', 'Che cosa hai detto?'],
      ['leggere', 'letto', 'avere', 'Ho letto un bel libro.'],
      ['scrivere', 'scritto', 'avere', 'Ti ho scritto un messaggio.'],
      ['descrivere', 'descritto', 'avere', 'Mi ha descritto la sua casa.'],
      ['rompere', 'rotto', 'avere', 'Ho rotto un bicchiere.'],
      ['interrompere', 'interrotto', 'avere', 'Scusa, ti ho interrotto.'],
      ['correggere', 'corretto', 'avere', 'La professoressa ha corretto i compiti.'],
      ['proteggere', 'protetto', 'avere', 'Il casco gli ha protetto la testa.'],
      ['eleggere', 'eletto', 'avere', 'Hanno eletto un nuovo sindaco.'],
      ['distruggere', 'distrutto', 'avere', 'Il terremoto ha distrutto il paese.'],
      ['friggere', 'fritto', 'avere', 'Ho fritto le patate.'],
      ['cuocere', 'cotto', 'avere', 'Hai cotto la pasta?'],
    ],
  ],
  [
    'So',
    '-so',
    [
      ['prendere', 'preso', 'avere', 'Ho preso l’autobus.'],
      ['accendere', 'acceso', 'avere', 'Chi ha acceso la luce?'],
      ['spendere', 'speso', 'avere', 'Ho speso troppo.'],
      ['scendere', 'sceso', 'essere / avere', 'Sono sceso dal treno.'],
      ['sorprendere', 'sorpreso', 'avere', 'La notizia mi ha sorpreso.'],
      ['offendere', 'offeso', 'avere', 'Ti ho offeso?'],
      ['difendere', 'difeso', 'avere', 'Ha difeso il suo amico.'],
      ['appendere', 'appeso', 'avere', 'Ho appeso il quadro.'],
      ['chiudere', 'chiuso', 'avere', 'Hai chiuso la porta?'],
      ['decidere', 'deciso', 'avere', 'Abbiamo deciso di partire.'],
      ['ridere', 'riso', 'avere', 'Abbiamo riso tanto.'],
      ['dividere', 'diviso', 'avere', 'Abbiamo diviso il conto.'],
      ['concludere', 'concluso', 'avere', 'Ha concluso il discorso.'],
      ['includere', 'incluso', 'avere', 'Hanno incluso la colazione nel prezzo.'],
      ['deludere', 'deluso', 'avere', 'Il film mi ha deluso.'],
      ['mordere', 'morso', 'avere', 'Il cane mi ha morso.'],
      ['perdere', 'perso', 'avere', 'Ho perso il portafoglio.'],
      ['correre', 'corso', 'avere / essere', 'Ho corso la maratona.'],
    ],
  ],
  [
    'Sso',
    '-sso',
    [
      ['mettere', 'messo', 'avere', 'Dove hai messo le chiavi?'],
      ['promettere', 'promesso', 'avere', 'Mi hai promesso un regalo.'],
      ['permettere', 'permesso', 'avere', 'Mi hanno permesso di uscire.'],
      ['smettere', 'smesso', 'avere', 'Ho smesso di fumare.'],
      ['succedere', 'successo', 'essere', 'Che cosa è successo?'],
      ['muovere', 'mosso', 'avere', 'Non ha mosso un dito.'],
      ['commuovere', 'commosso', 'avere', 'Il film mi ha commosso.'],
      ['discutere', 'discusso', 'avere', 'Abbiamo discusso del viaggio.'],
      ['esprimere', 'espresso', 'avere', 'Hai espresso un desiderio?'],
      ['concedere', 'concesso', 'avere', 'Mi hanno concesso un giorno libero.'],
      ['scuotere', 'scosso', 'avere', 'Ha scosso la testa.'],
    ],
  ],
  [
    'Sto',
    '-sto',
    [
      ['vedere', 'visto', 'avere', 'Hai visto Marco?'],
      ['chiedere', 'chiesto', 'avere', 'Ho chiesto un caffè.'],
      ['rispondere', 'risposto', 'avere', 'Non mi ha risposto.'],
      ['nascondere', 'nascosto', 'avere', 'Ho nascosto il regalo.'],
      ['rimanere', 'rimasto', 'essere', 'Sono rimasta a casa.'],
    ],
  ],
  [
    'Rto',
    '-rto',
    [
      ['aprire', 'aperto', 'avere', 'Ho aperto la finestra.'],
      ['offrire', 'offerto', 'avere', 'Mi ha offerto un caffè.'],
      ['coprire', 'coperto', 'avere', 'Ho coperto il bambino.'],
      ['scoprire', 'scoperto', 'avere', 'Ho scoperto un bel ristorante.'],
      ['soffrire', 'sofferto', 'avere', 'Ha sofferto molto.'],
      ['morire', 'morto', 'essere', 'Leonardo è morto nel 1519.'],
      ['accorgersi', 'accorto', 'essere', 'Non mi sono accorto di niente.'],
    ],
  ],
  [
    'Nto',
    '-nto',
    [
      ['vincere', 'vinto', 'avere', 'Abbiamo vinto la partita.'],
      ['convincere', 'convinto', 'avere', 'Mi hai convinto.'],
      ['spegnere', 'spento', 'avere', 'Hai spento la luce?'],
      ['piangere', 'pianto', 'avere', 'Ho pianto alla fine del film.'],
      ['dipingere', 'dipinto', 'avere', 'Ha dipinto un quadro.'],
      ['spingere', 'spinto', 'avere', 'Qualcuno mi ha spinto.'],
      ['fingere', 'finto', 'avere', 'Ha finto di dormire.'],
      ['aggiungere', 'aggiunto', 'avere', 'Ho aggiunto il sale.'],
      ['raggiungere', 'raggiunto', 'avere', 'Abbiamo raggiunto la cima.'],
      ['giungere', 'giunto', 'essere', 'Siamo giunti alla fine.'],
      ['assumere', 'assunto', 'avere', 'Mi hanno assunto!'],
    ],
  ],
  [
    'Lto',
    '-lto',
    [
      ['scegliere', 'scelto', 'avere', 'Hai scelto il vestito?'],
      ['togliere', 'tolto', 'avere', 'Ho tolto le scarpe.'],
      ['raccogliere', 'raccolto', 'avere', 'Abbiamo raccolto le olive.'],
      ['accogliere', 'accolto', 'avere', 'Ci hanno accolto bene.'],
      ['sciogliere', 'sciolto', 'avere', 'Il sole ha sciolto la neve.'],
      ['risolvere', 'risolto', 'avere', 'Ho risolto il problema.'],
      ['coinvolgere', 'coinvolto', 'avere', 'Mi hanno coinvolto nel progetto.'],
      ['rivolgersi', 'rivolto', 'essere', 'Mi sono rivolta all’ufficio informazioni.'],
    ],
  ],
  [
    'Urre',
    '-otto, -osto, -atto',
    [
      ['tradurre', 'tradotto', 'avere', 'Ho tradotto la lettera in inglese.'],
      ['produrre', 'prodotto', 'avere', 'La fabbrica ha prodotto mille biciclette.'],
      ['ridurre', 'ridotto', 'avere', 'Hanno ridotto i prezzi.'],
      ['condurre', 'condotto', 'avere', 'Ha condotto il programma per anni.'],
      ['introdurre', 'introdotto', 'avere', 'Il comune ha introdotto una nuova regola.'],
      ['porre', 'posto', 'avere', 'Ha posto una domanda difficile.'],
      ['proporre', 'proposto', 'avere', 'Mi hanno proposto un lavoro.'],
      ['comporre', 'composto', 'avere', 'Verdi ha composto molte opere.'],
      ['esporre', 'esposto', 'avere', 'Ha esposto i suoi quadri a Milano.'],
      ['opporsi', 'opposto', 'essere', 'Si è opposto al progetto.'],
      ['trarre', 'tratto', 'avere', 'Ha tratto una conclusione.'],
      ['attrarre', 'attratto', 'avere', 'La mostra ha attratto molti turisti.'],
      ['distrarre', 'distratto', 'avere', 'Il telefono mi ha distratto.'],
      ['sottrarre', 'sottratto', 'avere', 'Ha sottratto 5 da 12.'],
    ],
  ],
  [
    'Unici',
    '',
    [
      ['essere', 'stato', 'essere', 'Sono stato in Grecia.'],
      ['nascere', 'nato', 'essere', 'Sono nata a Torino.'],
      ['venire', 'venuto', 'essere', 'Sei venuto alla festa?'],
      ['vivere', 'vissuto', 'avere / essere', 'Ho vissuto a Londra.'],
      ['bere', 'bevuto', 'avere', 'Ho bevuto un tè.'],
      ['apparire', 'apparso', 'essere', 'È apparso un arcobaleno.'],
      ['scomparire', 'scomparso', 'essere', 'Il sole è scomparso dietro le nuvole.'],
      ['parere', 'parso', 'essere', 'Mi è parso strano.'],
      ['valere', 'valso', 'essere', 'Ne è valsa la pena.'],
      ['conoscere', 'conosciuto', 'avere', 'Ho conosciuto Luca a Roma.'],
      ['crescere', 'cresciuto', 'essere / avere', 'Sono cresciuto in campagna.'],
      ['piacere', 'piaciuto', 'essere', 'Mi è piaciuto molto.'],
      ['tacere', 'taciuto', 'avere', 'Ha taciuto per tutta la cena.'],
    ],
  ],
];

export const TOTAL = GROUPS.reduce((n, [, , rows]) => n + rows.length, 0);

const it = (s) => `<span lang="it">${s}</span>`;

export default {
  slug: 'participi-passati-irregolari',
  level: 'a2',
  exerciseCount: 50,
  next: 'passato-prossimo-o-imperfetto',
  after: 'passato-prossimo',
  minutes: 40,
  hero: { src: 'grammatica/participi-irregolari-hero.webp', width: 1280, height: 720 },
  slugs: {
    en: 'italian-irregular-past-participles',
    es: 'participios-irregulares-en-italiano',
    fr: 'participes-passes-irreguliers-en-italien',
    cs: 'nepravidelna-pricesti-v-italstine',
    pl: 'nieregularne-imieslowy-po-wlosku',
    tr: 'italyancada-duzensiz-gecmis-ortaclar',
    de: 'unregelmaessige-partizipien-im-italienischen',
    ja: 'イタリア語の不規則な過去分詞',
  },
  nav: [
    ['schemi', 'Gli schemi'],
    ['lista', 'La lista'],
    ['urre', 'Tradurre, porre, trarre'],
    ['composti', 'Verbi composti'],
    ['errori', 'Errori'],
    ['esercizi', 'Esercizi'],
  ],
  body: (L, h, c) => `    <article class="lesson-box" id="schemi"><h2>${L.schemiH2}</h2><p>${L.schemiP}</p>${h.table(
    ['Finale', 'Esempio'],
    [
      ['-tto', 'fare → fatto, scrivere → scritto, leggere → letto'],
      ['-so', 'prendere → preso, chiudere → chiuso, decidere → deciso'],
      ['-sso', 'mettere → messo, succedere → successo, discutere → discusso'],
      ['-sto', 'vedere → visto, chiedere → chiesto, rispondere → risposto'],
      ['-rto', 'aprire → aperto, offrire → offerto, morire → morto'],
      ['-nto', 'vincere → vinto, spegnere → spento, piangere → pianto'],
      ['-lto', 'scegliere → scelto, togliere → tolto, risolvere → risolto'],
      ['-urre → -otto', 'tradurre → tradotto, produrre → prodotto'],
      ['-orre → -osto', 'porre → posto, proporre → proposto'],
      ['-arre → -atto', 'trarre → tratto, distrarre → distratto'],
    ]
  )}<p class="mini-note">${L.schemiNote1}</p><p class="mini-note">${L.schemiNote2}</p></article>
    <article class="lesson-box" id="lista"><h2>${L.listaH2}</h2><p>${L.listaP}</p>${GROUPS.map(
      ([id, ending, rows]) =>
        `<h3>${ending ? `${L.groupPrefix} ${it(ending)}` : L.gUniciH}</h3><p>${L[`g${id}P`]}</p>${h.table(['Infinito', 'Participio', 'Ausiliare', 'Esempio'], rows)}`
    ).join(
      ''
    )}<p class="mini-note">${L.listaNote} <a href="${h.href('passato-prossimo', 'a2')}">${L.listaLink}</a></p></article>
    <article class="lesson-box" id="urre"><h2>${L.urreH2}</h2><p>${L.urreP}</p>${h.table(
      ['Infinito', 'Forma antica', 'Presente', 'Participio'],
      [
        ['fare', 'facere', 'io faccio', 'fatto'],
        ['dire', 'dicere', 'io dico', 'detto'],
        ['bere', 'bevere', 'io bevo', 'bevuto'],
        ['tradurre', 'traducere', 'io traduco', 'tradotto'],
        ['porre', 'ponere', 'io pongo', 'posto'],
        ['trarre', 'traere', 'io traggo', 'tratto'],
      ]
    )}${h.examples([
      [L.uUrre, 'tradurre, produrre, ridurre, condurre, introdurre, sedurre → tradotto, prodotto, ridotto…'],
      [L.uOrre, 'porre, proporre, comporre, esporre, opporre, supporre → posto, proposto, composto…'],
      [L.uArre, 'trarre, attrarre, distrarre, sottrarre → tratto, attratto, distratto…'],
      [L.uTempi, 'traduco, traducevo, ho tradotto · propongo, proponevo, ho proposto'],
    ])}<p class="mini-note">${L.urreNote}</p></article>
    <article class="lesson-box" id="composti"><h2>${L.compH2}</h2><p>${L.compP}</p>${h.table(
      ['Verbo base', 'Composti'],
      [
        ['prendere → preso', 'sorpreso, compreso, ripreso, appreso'],
        ['mettere → messo', 'promesso, permesso, smesso, ammesso'],
        ['scrivere → scritto', 'descritto, iscritto, riscritto'],
        ['fare → fatto', 'rifatto, soddisfatto'],
        ['dire → detto', 'contraddetto, predetto'],
        ['vedere → visto', 'rivisto, previsto'],
        ['venire → venuto', 'avvenuto, intervenuto, svenuto'],
        ['tenere → tenuto', 'ottenuto, mantenuto, trattenuto'],
        ['porre → posto', 'proposto, composto, esposto'],
        ['trarre → tratto', 'attratto, distratto, sottratto'],
      ]
    )}<p class="mini-note">${L.compNote1}</p><p class="mini-note">${L.compNote2}</p></article>
    <article class="lesson-box" id="errori"><h2>${c.mistakesH2}</h2>${h.mistakes([
      ['Ho prenduto il treno.', 'Ho preso il treno.'],
      ['Ho aprito la porta.', 'Ho aperto la porta.'],
      ['Ho scrivuto una lettera.', 'Ho scritto una lettera.'],
      ['Ho traduciuto il testo.', 'Ho tradotto il testo.'],
      ['Ho metteto il sale.', 'Ho messo il sale.'],
      ['Ho chieduto un caffè.', 'Ho chiesto un caffè.'],
      ['Sono nascuto a Roma.', 'Sono nato a Roma.'],
      ['Ho vivuto a Londra.', 'Ho vissuto a Londra.'],
      ['Ho deciduto di partire.', 'Ho deciso di partire.'],
      ['Non mi ha rispondato.', 'Non mi ha risposto.'],
    ])}</article>
    <article class="lesson-box" id="esercizi"><h2>${c.exercisesH2}</h2><p>${L.exIntro}</p><h3>${L.part1H3}</h3><p>${L.part1P}</p>${h.exercises(
      [
        { q: 'fare → ___', a: 'fatto', hint: 'Gruppo -tto: fatto.' },
        { q: 'scrivere → ___', a: 'scritto', hint: 'Gruppo -tto: scritto.' },
        { q: 'leggere → ___', a: 'letto', hint: 'Gruppo -tto: letto.' },
        { q: 'prendere → ___', a: 'preso', hint: 'Gruppo -so: preso.' },
        { q: 'chiudere → ___', a: 'chiuso', hint: 'Gruppo -so: chiuso.' },
        { q: 'decidere → ___', a: 'deciso', hint: 'Gruppo -so: deciso.' },
        { q: 'mettere → ___', a: 'messo', hint: 'Gruppo -sso: messo.' },
        { q: 'vedere → ___', a: 'visto', alt: 'veduto', hint: 'Gruppo -sto: visto.' },
        { q: 'chiedere → ___', a: 'chiesto', hint: 'Gruppo -sto: chiesto.' },
        { q: 'rispondere → ___', a: 'risposto', hint: 'Gruppo -sto: risposto.' },
      ]
    )}<h3>${L.part2H3}</h3><p>${L.part2P}</p>${h.exercises([
      { q: 'aprire → ___', a: 'aperto', hint: 'Gruppo -rto: aperto.' },
      { q: 'offrire → ___', a: 'offerto', hint: 'Gruppo -rto: offerto.' },
      { q: 'vincere → ___', a: 'vinto', hint: 'Gruppo -nto: vinto.' },
      { q: 'spegnere → ___', a: 'spento', hint: 'Gruppo -nto: spento.' },
      { q: 'scegliere → ___', a: 'scelto', hint: 'Gruppo -lto: scelto.' },
      { q: 'risolvere → ___', a: 'risolto', hint: 'Gruppo -lto: risolto.' },
      { q: 'morire → ___', a: 'morto', hint: 'Gruppo -rto: morto.' },
      { q: 'nascere → ___', a: 'nato', hint: 'Caso speciale: nato.' },
      { q: 'vivere → ___', a: 'vissuto', hint: 'Caso speciale: vissuto.' },
      { q: 'bere → ___', a: 'bevuto', hint: 'Bere viene da bevere: bevuto.' },
    ])}<h3>${L.part3H3}</h3><p>${L.part3P}</p>${h.exercises([
      { q: 'Ho ___ la lettera in inglese. (tradurre)', a: 'tradotto', hint: '-urre → -otto: tradotto.' },
      { q: 'Quest’anno la fabbrica ha ___ più auto. (produrre)', a: 'prodotto', hint: '-urre → -otto: prodotto.' },
      { q: 'Il negozio ha ___ i prezzi. (ridurre)', a: 'ridotto', hint: '-urre → -otto: ridotto.' },
      { q: 'Chi ha ___ la riunione? (condurre)', a: 'condotto', hint: '-urre → -otto: condotto.' },
      {
        q: 'La scuola ha ___ una nuova materia. (introdurre)',
        a: 'introdotto',
        hint: '-urre → -otto: introdotto.',
      },
      { q: 'Mi hanno ___ un lavoro a Milano. (proporre)', a: 'proposto', hint: '-orre → -osto: proposto.' },
      { q: 'Chi ha ___ questa musica? (comporre)', a: 'composto', hint: '-orre → -osto: composto.' },
      { q: 'Il giornalista ha ___ una domanda. (porre)', a: 'posto', hint: '-orre → -osto: posto.' },
      { q: 'Il rumore mi ha ___. (distrarre)', a: 'distratto', hint: '-arre → -atto: distratto.' },
      { q: 'Il festival ha ___ molta gente. (attrarre)', a: 'attratto', hint: '-arre → -atto: attratto.' },
    ])}<h3>${L.part4H3}</h3><p>${L.part4P}</p>${h.exercises([
      { q: 'Ieri (io) ___ un bel film. (vedere)', a: 'ho visto', hint: 'Avere + visto.' },
      { q: 'Chi ___ la finestra? (aprire)', a: 'ha aperto', hint: 'Avere + aperto.' },
      { q: 'Che cosa ___ la maestra? (dire)', a: 'ha detto', hint: 'Avere + detto.' },
      {
        q: 'Noi ___ a casa tutto il giorno. (rimanere)',
        a: 'siamo rimasti',
        alt: 'siamo rimaste',
        hint: 'Rimanere vuole essere: siamo rimasti / rimaste.',
      },
      {
        q: 'Maria ___ a Napoli nel 1995. (nascere)',
        a: 'è nata',
        alt: 'e nata',
        hint: 'Nascere vuole essere: è nata.',
      },
      { q: 'Tu ___ di fumare? (smettere)', a: 'hai smesso', hint: 'Avere + smesso.' },
      { q: 'Che cosa ___? (succedere)', a: 'è successo', alt: 'e successo', hint: 'Succedere vuole essere.' },
      { q: 'I bambini ___ la luce. (spegnere)', a: 'hanno spento', hint: 'Avere + spento.' },
      { q: 'Paolo mi ___ un caffè. (offrire)', a: 'ha offerto', hint: 'Avere + offerto.' },
      { q: 'Laura ___ alla festa? (venire)', a: 'è venuta', alt: 'e venuta', hint: 'Venire vuole essere: è venuta.' },
    ])}<h3>${L.part5H3}</h3><p>${L.part5P}</p>${h.exercises([
      { q: 'prendere → preso · sorprendere → ___', a: 'sorpreso', hint: 'Come prendere: sorpreso.' },
      { q: 'prendere → preso · comprendere → ___', a: 'compreso', hint: 'Come prendere: compreso.' },
      { q: 'mettere → messo · promettere → ___', a: 'promesso', hint: 'Come mettere: promesso.' },
      { q: 'mettere → messo · permettere → ___', a: 'permesso', hint: 'Come mettere: permesso.' },
      { q: 'scrivere → scritto · descrivere → ___', a: 'descritto', hint: 'Come scrivere: descritto.' },
      { q: 'fare → fatto · rifare → ___', a: 'rifatto', hint: 'Come fare: rifatto.' },
      { q: 'vedere → visto · prevedere → ___', a: 'previsto', hint: 'Come vedere: previsto.' },
      { q: 'venire → venuto · intervenire → ___', a: 'intervenuto', hint: 'Come venire: intervenuto.' },
      { q: 'porre → posto · supporre → ___', a: 'supposto', hint: 'Come porre: supposto.' },
      { q: 'dire → detto · contraddire → ___', a: 'contraddetto', hint: 'Come dire: contraddetto.' },
    ])}{{ACTIONS}}</article>
    <article class="lesson-box"><h2>${c.conversationH2}</h2>${h.dialogue([
      ['Martin', 'Hai letto il libro che ti ho prestato?'],
      ['Studente', 'Sì, l’ho letto in una settimana! Poi ho scritto una recensione e l’ho tradotta in inglese.'],
      ['Martin', 'Bravo! E che cosa hai scoperto?'],
      ['Studente', 'Ho scoperto che i participi irregolari non sono così difficili: ho messo tutto in una tabella.'],
    ])}</article>`,
  it: {
    h1: 'I participi passati irregolari: 100 verbi divisi per gruppi',
    crumb: 'Participi irregolari',
    cardTitle: 'Participi passati irregolari',
    card: 'Preso, scritto, tradotto: 100 participi irregolari divisi per gruppi, con l’ausiliare e 50 esercizi.',
    lead: 'Prendere fa preso, scrivere fa scritto, tradurre fa tradotto: i participi irregolari sembrano tanti, ma seguono pochi schemi. Qui trovi 100 verbi divisi per gruppi, con l’ausiliare e un esempio, il segreto dei verbi in -urre, -orre e -arre, i verbi composti e 50 esercizi.',
    description:
      'La lista dei participi passati irregolari italiani: 100 verbi divisi per gruppi (-tto, -so, -sto, -rto, -nto, -lto, -urre, -orre, -arre), con ausiliare ed esempio. Tradurre → tradotto, porre → posto, verbi composti e 50 esercizi.',
    heroAlt:
      'Una scrivania davanti a una finestra con vista sulla cupola di Firenze: un puzzle quasi finito e, accanto, alcuni pezzi dalle forme strane',
    schemiH2: 'Pochi schemi per tanti verbi',
    schemiP:
      'Quasi tutti i participi irregolari vengono da verbi in <strong>-ere</strong>. Non vanno imparati uno per uno: si somigliano per gruppi. Se sai che <em>prendere</em> fa <em>preso</em>, sai anche <em>accendere → acceso</em> e <em>spendere → speso</em>.',
    schemiNote1:
      '<strong>Non tutti i verbi in -ere sono irregolari.</strong> <em>Credere → creduto</em>, <em>vendere → venduto</em>, <em>ricevere → ricevuto</em>, <em>ripetere → ripetuto</em>, <em>cadere → caduto</em> seguono la regola.',
    schemiNote2:
      '<strong>Alcuni verbi hanno due forme.</strong> <em>Perdere → perso</em> o <em>perduto</em>, <em>vedere → visto</em> o <em>veduto</em>: la prima forma è quella di tutti i giorni.',
    listaH2: 'La lista completa',
    listaP:
      'Per ogni verbo trovi il participio, l’ausiliare del passato prossimo e un esempio. Quando l’ausiliare è <em>essere</em>, il participio si accorda: <em>sono rimasta</em>, <em>siamo nati</em>.',
    groupPrefix: 'Participi in',
    gTtoP: 'Molti verbi in <em>-gere</em>, <em>-ggere</em> e <em>-vere</em>, più <em>fare</em> e <em>dire</em>.',
    gSoP: 'Quasi tutti i verbi in <em>-dere</em> (<em>prendere</em>, <em>chiudere</em>, <em>decidere</em>): la <em>d</em> sparisce e resta <em>-so</em>.',
    gSsoP:
      '<em>Mettere</em> e i suoi composti, più alcuni verbi in <em>-uovere</em>, <em>-utere</em>, <em>-primere</em> e <em>-edere</em>.',
    gStoP: 'Pochi verbi, ma usatissimi: <em>visto</em>, <em>chiesto</em>, <em>risposto</em>.',
    gRtoP:
      'I verbi in <em>-rire</em> (<em>aprire</em>, <em>offrire</em>, <em>coprire</em>, <em>soffrire</em>), più <em>morire</em>. Sono quasi gli unici irregolari in <em>-ire</em>.',
    gNtoP:
      'I verbi in <em>-ncere</em>, <em>-gnere</em> e <em>-ngere</em>: <em>vincere → vinto</em>, <em>spegnere → spento</em>, <em>piangere → pianto</em>.',
    gLtoP:
      'I verbi in <em>-gliere</em> (<em>scegliere</em>, <em>togliere</em>) e in <em>-olvere</em>, <em>-olgere</em> (<em>risolvere</em>, <em>coinvolgere</em>).',
    gUrreP:
      'Tutti i verbi in <em>-urre</em> fanno <em>-otto</em>, tutti quelli in <em>-orre</em> fanno <em>-osto</em> e tutti quelli in <em>-arre</em> fanno <em>-atto</em>. Il perché è spiegato più sotto.',
    gUniciH: 'Casi speciali',
    gUniciP:
      'Da imparare a memoria: <em>stato</em>, <em>nato</em>, <em>venuto</em>, <em>vissuto</em>, <em>bevuto</em>. <em>Conoscere</em>, <em>crescere</em>, <em>piacere</em> e <em>tacere</em> fanno <em>-uto</em> ma prendono una <em>i</em>: <em>conosciuto</em>, <em>piaciuto</em>.',
    listaNote:
      '<strong>Essere o avere?</strong> Le regole per scegliere l’ausiliare e per l’accordo sono nella lezione sul passato prossimo.',
    listaLink: 'Vedi «Il passato prossimo»',
    urreH2: 'Tradurre, porre, trarre: perché tradotto?',
    urreP:
      '<em>Tradurre</em>, <em>porre</em> e <em>trarre</em> sembrano strani, ma il segreto è semplice: <strong>l’infinito è accorciato</strong>. Dietro <em>tradurre</em> c’è l’antico <em>traducere</em>: per questo diciamo <em>io traduco</em> e <em>ho tradotto</em>. Succede lo stesso con <em>fare</em> (<em>facere</em>), <em>dire</em> (<em>dicere</em>) e <em>bere</em> (<em>bevere</em>).',
    uUrre: 'Tutti i verbi in -urre → -otto',
    uOrre: 'Tutti i verbi in -orre → -osto',
    uArre: 'Tutti i verbi in -arre → -atto',
    uTempi: 'Negli altri tempi torna la forma lunga',
    urreNote:
      '<strong>Un verbo nuovo in -urre?</strong> Non serve cercarlo: <em>dedurre → dedotto</em>, <em>sedurre → sedotto</em>. Lo stesso vale per <em>-orre</em> (<em>imporre → imposto</em>) e <em>-arre</em> (<em>contrarre → contratto</em>).',
    compH2: 'I verbi composti',
    compP:
      'Un verbo composto da un altro verbo ha il participio del verbo base: se sai <em>prendere → preso</em>, sai anche <em>sorprendere → sorpreso</em> e <em>comprendere → compreso</em>.',
    compNote1:
      '<strong>Attenzione ai falsi composti.</strong> Il verbo deve essere davvero lo stesso: <em>spendere → speso</em> segue lo schema in <em>-so</em>, ma non viene da <em>prendere</em>.',
    compNote2:
      '<strong>L’ausiliare può cambiare.</strong> <em>Venire</em> vuole <em>essere</em> e anche <em>avvenire</em> (<em>è avvenuto</em>), ma <em>prevenire</em> vuole <em>avere</em> (<em>ho prevenuto un errore</em>).',
    exIntro:
      '50 frasi in cinque parti. Scrivi solo quello che manca: la correzione arriva mentre scrivi. Con l’indizio trovi il gruppo del verbo.',
    part1H3: 'Parte 1 · -tto, -so, -sso, -sto',
    part1P: 'Scrivi il participio passato.',
    part2H3: 'Parte 2 · -rto, -nto, -lto e casi speciali',
    part2P: 'Scrivi il participio passato.',
    part3H3: 'Parte 3 · -urre, -orre, -arre',
    part3P: 'Scrivi il participio del verbo tra parentesi.',
    part4H3: 'Parte 4 · Nella frase',
    part4P: 'Scrivi il verbo al passato prossimo: ausiliare + participio.',
    part5H3: 'Parte 5 · I verbi composti',
    part5P: 'Il participio del verbo base ti aiuta a trovare quello del composto.',
  },
};

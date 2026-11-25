// Lezione A2 «I pronomi diretti: lo, la, li, le» (rifatta il 2026-11-25 agli stessi URL): struttura, materiale
// italiano e testi. Le spiegazioni tradotte stanno in pronomi-diretti-i18n.mjs.
//
// Dodicesima delle lezioni con pochi esercizi (Martin, 2026-11-23: «fai una alla volta»). La lezione di agosto era
// scritta a mano: la regola, la tabella, quattro frasi utili e 10 esercizi. Ora: che cosa sostituiscono, le forme
// (anche La di cortesia), la posizione (prima del verbo, attaccati all'infinito, con i modali, ecco), il passato
// (l'ho vista, li ho comprati), lo «neutro» (lo so, non lo so), le forme toniche (vedo te, non lui), le trappole
// (verbi diretti in italiano: aspettare, ascoltare, cercare, aiutare, ringraziare) e 30 esercizi. Il confronto
// con la lingua resta quello di confronti-lingua.mjs; gli errori per lingua (cinque) sono in
// confronti-pronomi-diretti.mjs. Il pulsante finale porta ai pronomi indiretti.

const it = (s) => `<span lang="it">${s}</span>`;

export default {
  slug: 'pronomi-diretti',
  level: 'a2',
  next: 'pronomi-indiretti',
  minutes: 20,
  hero: { src: 'grammatica/pronomi-diretti-hero.webp', width: 1280, height: 720 },
  // Gli slug stranieri esistono dal 2026-08 e non cambiano.
  slugs: {
    en: 'italian-direct-object-pronouns',
    es: 'pronombres-directos-en-italiano',
    fr: 'pronoms-directs-en-italien',
    cs: 'prima-zajmena-v-italstine',
    pl: 'zaimki-bezposrednie-po-wlosku',
    tr: 'italyanca-dogrudan-nesne-zamirleri',
    de: 'direkte-pronomen-im-italienischen',
    ja: 'イタリア語の直接目的語代名詞',
  },
  nav: [
    ['regola', 'Regola'],
    ['forme', 'Forme'],
    ['posizione', 'Posizione'],
    ['passato', 'Al passato'],
    ['lo-so', 'Lo so'],
    ['tonici', 'Forme toniche'],
    ['trappole', 'Trappole'],
    ['errori', 'Errori'],
    ['esercizi', 'Esercizi'],
  ],
  body: (L, h, c) => `    <article class="lesson-box" id="regola"><h2>${L.regolaH2}</h2><p>${L.regolaP}</p>${h.examples([
    [L.rLo, 'Compro il pane. → Lo compro.'],
    [L.rLa, 'Vedo Maria. → La vedo.'],
    [L.rLi, 'Invito gli amici. → Li invito.'],
    [L.rLe, 'Leggo le email. → Le leggo.'],
  ])}<p class="mini-note">${L.regolaNote}</p></article>
    <article class="lesson-box" id="forme"><h2>${L.formeH2}</h2><p>${L.formeP}</p>${h.table(
      ['Persona / cosa', 'Pronome', 'Esempio'],
      [
        ['io', 'mi', 'Mi ascolti?'],
        ['tu', 'ti', 'Ti chiamo domani.'],
        ['lui · il libro', 'lo', 'Lo conosco. · Lo leggo.'],
        ['lei · la pizza', 'la', 'La vedo. · La mangio.'],
        ['Lei', 'La', 'La ringrazio, signora.'],
        ['noi', 'ci', 'Ci aspetti?'],
        ['voi', 'vi', 'Vi sento bene.'],
        ['loro · i libri', 'li', 'Li invito. · Li compro.'],
        ['loro · le chiavi', 'le', 'Le saluto. · Le cerco.'],
      ]
    )}<p class="mini-note">${L.formeNote}</p></article>
    <article class="lesson-box" id="posizione"><h2>${L.posH2}</h2><p>${L.posP}</p>${h.examples([
      [L.pPrima, 'La vedo. · Non la vedo.'],
      [L.pInfinito, 'È bello vederla. · Sono qui per aiutarti.'],
      [L.pModali, 'La voglio vedere. · Voglio vederla.'],
      [L.pEcco, 'Dove sono le chiavi? Eccole!'],
    ])}<p class="mini-note">${L.posNote.replace('{{MODALI}}', h.href('verbi-modali', 'a2')).replace('{{IMPERATIVO}}', h.href('imperativo', 'b1'))}</p></article>
    <article class="lesson-box" id="passato"><h2>${L.passH2}</h2><p>${L.passP}</p>${h.table(
      ['Frase al presente', 'Frase al passato'],
      [
        ['Lo vedo.', 'L’ho visto.'],
        ['La vedo.', 'L’ho vista.'],
        ['Li vedo.', 'Li ho visti.'],
        ['Le vedo.', 'Le ho viste.'],
        ['Ti vedo.', 'Ti ho visto. · Ti ho vista.'],
      ]
    )}<p class="mini-note">${L.passNote.replace('{{PARTICIPI}}', h.href('participi-passati-irregolari', 'a2'))}</p></article>
    <article class="lesson-box" id="lo-so"><h2>${L.losoH2}</h2><p>${L.losoP}</p>${h.examples([
      [L.lSo, 'Domani c’è sciopero. Lo so. · Non lo so.'],
      [L.lDico, 'Te lo dico: è una buona idea. · Lo penso anch’io.'],
      [L.lSembra, 'Sembra stanco, ma non lo è.'],
    ])}<p class="mini-note">${L.losoNote}</p></article>
    <article class="lesson-box" id="tonici"><h2>${L.tonH2}</h2><p>${L.tonP}</p>${h.examples([
      [L.tAtono, 'Ti chiamo stasera.'],
      [L.tContrasto, 'Chiamo te, non lui.'],
      [L.tPreposizione, 'Questo regalo è per te. · Vengo con lei.'],
    ])}<p class="mini-note">${L.tonNote}</p></article>
    <article class="lesson-box" id="trappole"><h2>${L.trapH2}</h2><p>${L.trapP}</p>${h.examples([
      [L.tDiretti, 'Aspetto l’autobus. → Lo aspetto. · Ascolto la radio. → La ascolto.'],
      [L.tAiutare, 'Aiuto Marco. → Lo aiuto. · Ringrazio Anna. → La ringrazio.'],
      [L.tTelefonare, 'Telefono a Marco. → Gli telefono.'],
      [L.tDoppio, 'Il libro? Lo leggo. · Leggo il libro.'],
    ])}<p class="mini-note">${L.trapNote.replace('{{INDIRETTI}}', h.href('pronomi-indiretti', 'a2'))}</p></article>
    <article class="lesson-box" id="errori"><h2>${c.mistakesH2}</h2>${h.mistakes([
      ['Vedo lo ogni giorno.', 'Lo vedo ogni giorno.'],
      ['La pizza? Lo mangio.', 'La pizza? La mangio.'],
      ['Ho visto la ieri.', 'L’ho vista ieri.'],
      ['Li ho comprato.', 'Li ho comprati.'],
      ['Lo voglio vederlo.', 'Lo voglio vedere.'],
    ])}</article>
    <article class="lesson-box" id="esercizi"><h2>${c.exercisesH2}</h2><p>${L.exIntro}</p><h3>${L.part1H3}</h3><p>${L.part1P}</p>${h.exercises(
      [
        { q: 'Compro il pane tutti i giorni. → ___ compro tutti i giorni.', a: 'Lo', hint: 'Il pane: maschile singolare, lo.' },
        { q: 'Conosci Maria? Sì, ___ conosco bene.', a: 'la', hint: 'Maria: femminile singolare, la.' },
        { q: 'Dove metti i libri? ___ metto sullo scaffale.', a: 'Li', hint: 'I libri: maschile plurale, li.' },
        { q: 'Leggi le email la mattina? Sì, ___ leggo subito.', a: 'le', hint: 'Le email: femminile plurale, le.' },
        { q: 'Mi ascolti? Sì, ___ ascolto.', a: 'ti', hint: 'Mi ascolti? Sì, ti ascolto (io ascolto te).' },
        { q: 'Ci aspettate? Sì, ___ aspettiamo.', a: 'vi', hint: 'Ci aspettate? Sì, vi aspettiamo (aspettiamo voi).' },
        { q: 'Marco, ___ chiamo stasera, va bene?', a: 'ti', hint: 'Chiamo te: ti chiamo.' },
        { q: 'Ragazzi, ___ vedete? Siamo qui!', a: 'ci', hint: 'Vedete noi: ci vedete.' },
        { q: 'Prendi l’ombrello? Sì, ___ prendo.', a: 'lo', hint: 'L’ombrello: maschile singolare, lo.' },
        { q: 'Signora, ___ ringrazio molto.', a: 'La', hint: 'Con Lei, per cortesia: La ringrazio.' },
      ]
    )}<h3>${L.part2H3}</h3><p>${L.part2P}</p>${h.exercises([
      { q: 'Il film? Voglio veder___ stasera.', a: 'lo', hint: 'Attaccato all’infinito: vederlo.' },
      { q: 'Le chiavi? Devo cercar___.', a: 'le', hint: 'Attaccato all’infinito: cercarle.' },
      { q: 'Il caffè? ___ posso preparare io.', a: 'Lo', hint: 'Prima del modale: lo posso preparare.' },
      { q: 'Questa canzone? Non ___ conosco.', a: 'la', hint: 'Non + pronome + verbo: non la conosco.' },
      { q: 'Dove sono i bambini? Ecco___!', a: 'li', hint: 'Con ecco si attacca: eccoli.' },
      { q: 'La lettera? Sto per scriver___.', a: 'la', hint: 'Attaccato all’infinito: scriverla.' },
      { q: 'I tuoi amici? Non ___ vedo da mesi.', a: 'li', hint: 'Gli amici: li.' },
      { q: 'Dove sono le chiavi? Non ___ trovo.', a: 'le', hint: 'Le chiavi: le.' },
      { q: 'Sai dov’è Luca? No, non ___ so.', a: 'lo', hint: 'Non lo so: lo vuol dire «questa cosa».' },
      { q: 'Aspetti l’autobus? Sì, ___ aspetto da venti minuti.', a: 'lo', hint: 'Aspettare è diretto: lo aspetto.' },
    ])}<h3>${L.part3H3}</h3><p>${L.part3P}</p>${h.exercises([
      { q: 'Hai visto Anna? Sì, l’ho ___ ieri. (vedere)', a: 'vista', hint: 'L’ = la: il participio è femminile, vista.' },
      { q: 'Hai comprato i biglietti? Sì, li ho ___ online. (comprare)', a: 'comprati', hint: 'Li: participio maschile plurale, comprati.' },
      { q: 'Hai letto le notizie? No, non le ho ___. (leggere)', a: 'lette', hint: 'Le: participio femminile plurale, lette.' },
      { q: 'Hai preso il treno? Sì, l’ho ___ alle otto. (prendere)', a: 'preso', hint: 'L’ = lo: preso.' },
      { q: 'Hai chiamato le tue amiche? Sì, ___ ho chiamate.', a: 'le', hint: 'Le amiche: le ho chiamate.' },
      { q: 'Hai visto i film di Fellini? Sì, li ho ___ tutti. (vedere)', a: 'visti', hint: 'Li: visti.' },
      { q: 'Hai fatto la spesa? Sì, l’ho ___ stamattina. (fare)', a: 'fatta', hint: 'La spesa: l’ho fatta.' },
      { q: 'Hai capito le regole? Sì, le ho ___. (capire)', a: 'capite', hint: 'Le regole: capite.' },
      { q: 'Hai sentito Marco? No, non l’ho ___ oggi. (sentire)', a: 'sentito', hint: 'Marco: l’ho sentito.' },
      { q: 'Hai messo le valigie in macchina? Sì, ___ ho messe nel bagagliaio.', a: 'le', hint: 'Le valigie: le ho messe.' },
    ])}{{ACTIONS}}</article>
    <article class="lesson-box"><h2>${c.conversationH2}</h2>${h.dialogue([
      ['Martin', 'Hai visto le mie chiavi? Non le trovo.'],
      ['Studente', 'Le ho viste stamattina in cucina.'],
      ['Martin', 'In cucina non ci sono. E il telefono? Lo cerco da mezz’ora!'],
      ['Studente', 'Il telefono ce l’hai in mano!'],
      ['Martin', 'Ah, eccolo! E le chiavi… eccole, nella giacca.'],
      ['Studente', 'Perfetto. Allora andiamo? Ti aspetto giù.'],
    ])}</article>`,
  it: {
    h1: 'I pronomi diretti: lo, la, li, le',
    card: 'Lo vedo, la chiamo, li ho comprati: le forme, la posizione, il passato, lo so e le forme toniche.',
    lead: 'Compro il pane → lo compro. Vedo Maria → la vedo. Con i pronomi diretti non si ripete la cosa o la persona. Le forme (mi, ti, lo, la, ci, vi, li, le e La di cortesia), dove vanno (prima del verbo, attaccati all’infinito, eccolo), il passato (l’ho vista, li ho comprati), lo so e non lo so, le forme toniche (chiamo te, non lui) e i verbi che in italiano sono diretti. Con 30 esercizi.',
    description:
      'I pronomi diretti in italiano: mi, ti, lo, la, ci, vi, li, le, che cosa sostituiscono, dove vanno (lo vedo, vederlo, lo posso fare, eccolo), il passato con l’accordo del participio (l’ho vista, li ho comprati), lo so, le forme toniche, gli errori tipici e 30 esercizi.',
    heroAlt: 'Un mazzo di chiavi su un tavolo di legno chiaro, accanto a una tazzina, nella luce del mattino',
    regolaH2: 'Che cosa sostituiscono',
    regolaP: 'Il pronome diretto prende il posto della persona o della cosa che risponde alla domanda <strong>chi?</strong> o <strong>che cosa?</strong>. Così non si ripete.',
    rLo: 'Lo: un maschile singolare',
    rLa: 'La: un femminile singolare',
    rLi: 'Li: un maschile plurale',
    rLe: 'Le: un femminile plurale',
    regolaNote:
      'Il pronome segue il <strong>genere della parola</strong>, non della persona o della cosa: <em lang="it">la macchina → la</em>, <em lang="it">il problema → lo</em>. Un gruppo misto è maschile: <em lang="it">Marco e Anna → li</em>.',
    formeH2: 'Le forme',
    formeP: 'Per io, tu, noi e voi ci sono <strong>mi, ti, ci, vi</strong>; per lui, lei, loro e per le cose <strong>lo, la, li, le</strong>.',
    formeNote:
      'Davanti a vocale <em lang="it">lo</em> e <em lang="it">la</em> diventano spesso <strong>l’</strong>: <em lang="it">l’aspetto</em>, <em lang="it">l’ho visto</em>. <em lang="it">Li</em> e <em lang="it">le</em> non si apostrofano mai. Con <em lang="it">Lei</em> di cortesia si usa <strong>La</strong>, per un uomo e per una donna: <em lang="it">La ringrazio</em>.',
    posH2: 'Dove va il pronome',
    posP: 'Di solito va <strong>prima del verbo coniugato</strong>, e dopo il <em lang="it">non</em>. Ma con l’infinito e con <em lang="it">ecco</em> si attacca alla fine.',
    pPrima: 'Prima del verbo coniugato',
    pInfinito: 'Attaccato all’infinito, che perde la -e',
    pModali: 'Con potere, volere, dovere: due posti',
    pEcco: 'Attaccato a ecco',
    posNote:
      'Mai in mezzo e mai due volte: <em lang="it">la voglio vedere</em> o <em lang="it">voglio vederla</em>, non <em lang="it">voglio la vedere</em> (vedi i <a href="{{MODALI}}">verbi modali</a>). Anche con l’imperativo di tu si attacca: <em lang="it">chiamalo!</em>, <em lang="it">aspettami!</em> (vedi l’<a href="{{IMPERATIVO}}">imperativo</a>).',
    passH2: 'Al passato',
    passP: 'Al passato prossimo il pronome va <strong>prima dell’ausiliare</strong>, e con <strong>lo, la, li, le</strong> il participio si accorda: cambia la vocale finale come un aggettivo.',
    passNote:
      'Con <em lang="it">lo</em> e <em lang="it">la</em> si scrive <em lang="it">l’ho</em>: è la vocale del participio che dice se era maschile o femminile (<em lang="it">l’ho visto, l’ho vista</em>). Con <em lang="it">mi, ti, ci, vi</em> l’accordo è libero: <em lang="it">Anna, ti ho vista</em> o <em lang="it">ti ho visto</em>. Attenzione ai participi irregolari: <em lang="it">l’ho fatta, le ho lette, li ho presi</em> (vedi i <a href="{{PARTICIPI}}">participi irregolari</a>).',
    losoH2: 'Lo so, non lo so',
    losoP: '<strong>Lo</strong> può sostituire anche una frase intera o un’idea: vuol dire «questa cosa». In italiano è quasi obbligatorio con <strong>sapere</strong>, <strong>dire</strong> e <strong>pensare</strong>.',
    lSo: 'Lo so, non lo so',
    lDico: 'Lo dico, lo penso',
    lSembra: 'Lo con essere: «lo è»',
    losoNote:
      'Alla domanda <em lang="it">sai dov’è Luca?</em> si risponde <strong>non lo so</strong>, quasi mai solo <em lang="it">non so</em>. E <em lang="it">te lo dico</em> unisce due pronomi: <em lang="it">ti</em> diventa <em lang="it">te</em> davanti a <em lang="it">lo</em>.',
    tonH2: 'Le forme toniche: me, te, lui, lei',
    tonP: 'Accanto a <em lang="it">mi, ti, lo, la</em> ci sono le forme <strong>toniche</strong>: <strong>me, te, lui, lei, Lei, noi, voi, loro</strong>. Vanno dopo il verbo, quando si vuole <strong>mettere in evidenza</strong> la persona, e dopo le preposizioni.',
    tAtono: 'Normale: il pronome atono',
    tContrasto: 'Per fare un contrasto: la forma tonica',
    tPreposizione: 'Dopo una preposizione: sempre la forma tonica',
    tonNote:
      '<em lang="it">Ti chiamo</em> è la frase di tutti i giorni; <em lang="it">chiamo te</em> vuol dire «te e non un altro». Mai tutte e due insieme: non <em lang="it">ti chiamo te</em>.',
    trapH2: 'Le trappole',
    trapP: 'Il pronome diretto va con i verbi <strong>senza preposizione</strong>. Alcuni verbi sono diretti in italiano ma non in altre lingue, e il contrario.',
    tDiretti: 'Aspettare, ascoltare, cercare, guardare: diretti',
    tAiutare: 'Aiutare e ringraziare: diretti',
    tTelefonare: 'Telefonare a: indiretto, gli',
    tDoppio: 'Il pronome sostituisce la parola: non tutti e due',
    trapNote:
      '<em lang="it">Aspetto l’autobus</em>, senza «per»: quindi <strong>lo aspetto</strong>. <em lang="it">Telefono a Marco</em> ha la preposizione <em lang="it">a</em>: quindi <em lang="it">gli telefono</em>, un pronome indiretto (vedi i <a href="{{INDIRETTI}}">pronomi indiretti</a>). <em lang="it">Il libro, lo leggo</em> si dice nel parlato per mettere in evidenza il libro all’inizio; ma non <em lang="it">lo leggo il libro lo</em>.',
    exIntro: '30 frasi in tre parti. Scrivi solo la parola che manca: la correzione arriva mentre scrivi.',
    part1H3: 'Parte 1 · Le forme',
    part1P: 'Scrivi il pronome diretto.',
    part2H3: 'Parte 2 · La posizione',
    part2P: 'Prima del verbo, attaccato all’infinito o a ecco.',
    part3H3: 'Parte 3 · Al passato',
    part3P: 'Il pronome o il participio accordato.',
  },
};

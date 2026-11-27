// Lezione B1 «I pronomi combinati» (rifatta il 2026-11-27 agli stessi URL): struttura, materiale italiano e testi.
// Le spiegazioni tradotte stanno in pronomi-combinati-i18n.mjs.
//
// Diciottesima delle lezioni con pochi esercizi (Martin, 2026-11-23: «fai una alla volta»). La lezione di agosto era
// scritta a mano: una tabella, quattro esempi con ne e 10 esercizi. Ora: la regola (indiretto + diretto, mi → me),
// la tabella con ne e con si, glielo per lui, lei, Lei e loro, con ne (me ne dai due?), al passato con l’accordo
// (te l’ho data, gliel’ho detto), la posizione (dirtelo, me lo puoi dire, dammelo, non dirmelo), con i riflessivi
// (me le lavo, se la mette), le espressioni (ce l’ho, me ne vado, ce la faccio, non me la sento), le trappole e 30
// esercizi. Prima non aveva né il confronto con la lingua né gli errori per lingua: stanno in
// confronti-pronomi-combinati.mjs. Nell’indice B1 la tessera resta dov’era; il pulsante finale porta all’imperativo.

export default {
  slug: 'pronomi-combinati',
  level: 'b1',
  next: 'imperativo',
  minutes: 20,
  hero: { src: 'grammatica/pronomi-combinati-hero.webp', width: 1280, height: 720 },
  // Gli slug stranieri esistono dal 2026-08 e non cambiano.
  slugs: {
    en: 'italian-combined-pronouns',
    es: 'pronombres-combinados-en-italiano',
    fr: 'pronoms-combines-en-italien',
    cs: 'kombinovana-zajmena-v-italstine',
    pl: 'zaimki-laczone-po-wlosku',
    tr: 'italyanca-birlesik-zamirler',
    de: 'kombinierte-pronomen-im-italienischen',
    ja: 'イタリア語の結合代名詞',
  },
  nav: [
    ['regola', 'Regola'],
    ['tabella', 'Tabella'],
    ['glielo', 'Glielo per tutti'],
    ['ne', 'Con ne'],
    ['passato', 'Al passato'],
    ['posizione', 'Posizione'],
    ['riflessivi', 'Con i riflessivi'],
    ['espressioni', 'Espressioni'],
    ['trappole', 'Trappole'],
    ['errori', 'Errori'],
    ['esercizi', 'Esercizi'],
  ],
  body: (L, h, c) => `    <article class="lesson-box" id="regola"><h2>${L.regolaH2}</h2><p>${L.regolaP}</p>${h.examples([
    [L.rOrdine, 'Ti do il regalo. → Te lo do.'],
    [L.rE, 'mi → me · ti → te · ci → ce · vi → ve'],
    [L.rDomanda, 'Mi mandi la foto? → Me la mandi?'],
  ])}<p class="mini-note">${L.regolaNote
    .replace('{{DIRETTI}}', h.href('pronomi-diretti', 'a2'))
    .replace('{{INDIRETTI}}', h.href('pronomi-indiretti', 'a2'))}</p></article>
    <article class="lesson-box" id="tabella"><h2>${L.tabH2}</h2><p>${L.tabP}</p>${h.table(
      ['Pronome', '=+ lo', '=+ la', '=+ li', '=+ le', '=+ ne'],
      [
        ['mi', 'me lo', 'me la', 'me li', 'me le', 'me ne'],
        ['ti', 'te lo', 'te la', 'te li', 'te le', 'te ne'],
        ['gli · le · Le', 'glielo', 'gliela', 'glieli', 'gliele', 'gliene'],
        ['ci', 'ce lo', 'ce la', 'ce li', 'ce le', 'ce ne'],
        ['vi', 've lo', 've la', 've li', 've le', 've ne'],
        ['si', 'se lo', 'se la', 'se li', 'se le', 'se ne'],
      ]
    )}<p class="mini-note">${L.tabNote}</p></article>
    <article class="lesson-box" id="glielo"><h2>${L.glH2}</h2><p>${L.glP}</p>${h.examples([
      [L.gLui, 'Do il libro a Marco. → Glielo do.'],
      [L.gLei, 'Do il libro ad Anna. → Glielo do.'],
      [L.gLoro, 'Do il libro ai ragazzi. → Glielo do.'],
      [L.gCortesia, 'Signora, Le porto il conto? → Glielo porto subito.'],
    ])}<p class="mini-note">${L.glNote}</p></article>
    <article class="lesson-box" id="ne"><h2>${L.neH2}</h2><p>${L.neP}</p>${h.examples([
      [L.nQuanti, 'Mi dai due biscotti? → Me ne dai due?'],
      [L.nUnPo, 'Ti porto un po’ d’acqua. → Te ne porto un po’.'],
      [L.nGliene, 'Compro tre penne a Luca. → Gliene compro tre.'],
      [L.nDi, 'Ti ho parlato del viaggio? → Te ne ho parlato?'],
    ])}<p class="mini-note">${L.neNote}</p></article>
    <article class="lesson-box" id="passato"><h2>${L.passH2}</h2><p>${L.passP}</p>${h.examples([
      [L.pLo, 'Chi ti ha dato il libro? Me l’ha dato Marco.'],
      [L.pLa, 'Hai mandato la foto a Giulia? Sì, gliel’ho mandata.'],
      [L.pLi, 'Ti hanno restituito i soldi? Sì, me li hanno restituiti.'],
      [L.pNe, 'Quante foto ti ha mandato? Me ne ha mandate tre.'],
    ])}<p class="mini-note">${L.passNote.replace('{{PASSATO}}', h.href('passato-prossimo', 'a2'))}</p></article>
    <article class="lesson-box" id="posizione"><h2>${L.posH2}</h2><p>${L.posP}</p>${h.examples([
      [L.poPrima, 'Te lo dico domani.'],
      [L.poInf, 'Voglio dirtelo. · Te lo voglio dire.'],
      [L.poImp, 'Dammelo! · Diglielo! · Fammi vedere → Fammelo vedere!'],
      [L.poNeg, 'Non dirmelo! · Non me lo dire!'],
      [L.poGer, 'Spiegandoglielo, ho capito anch’io.'],
    ])}<p class="mini-note">${L.posNote.replace('{{IMPERATIVO}}', h.href('imperativo', 'b1'))}</p></article>
    <article class="lesson-box" id="riflessivi"><h2>${L.riflH2}</h2><p>${L.riflP}</p>${h.examples([
      [L.rfMani, 'Mi lavo le mani. → Me le lavo.'],
      [L.rfSe, 'Marco si mette la giacca. → Se la mette.'],
      [L.rfPass, 'Ti sei messo il cappotto? Sì, me lo sono messo.'],
    ])}<p class="mini-note">${L.riflNote.replace('{{RIFLESSIVI}}', h.href('verbi-riflessivi', 'a1'))}</p></article>
    <article class="lesson-box" id="espressioni"><h2>${L.espH2}</h2><p>${L.espP}</p>${h.examples([
      [L.eCeLho, 'Hai la patente? Sì, ce l’ho. · No, non ce l’ho.'],
      [L.eVado, 'È tardi, me ne vado.'],
      [L.eFaccio, 'È difficile, ma ce la faccio!'],
      [L.eSento, 'Sono stanco, non me la sento di uscire.'],
      [L.ePrende, 'Non te la prendere, scherzavo!'],
    ])}<p class="mini-note">${L.espNote}</p></article>
    <article class="lesson-box" id="trappole"><h2>${L.trapH2}</h2><p>${L.trapP}</p>${h.examples([
      [L.tE, 'me lo, te la, ce li (mai mi lo, ti la)'],
      [L.tGlie, 'glielo, gliela, gliene: una parola sola'],
      [L.tOrdine, 'te lo do (mai lo ti do)'],
      [L.tAccordo, 'Le chiavi? Te le ho date.'],
    ])}<p class="mini-note">${L.trapNote}</p></article>
    <article class="lesson-box" id="errori"><h2>${c.mistakesH2}</h2>${h.mistakes([
      ['Mi lo dai?', 'Me lo dai?'],
      ['Gli lo dico.', 'Glielo dico.'],
      ['Lo ti mando.', 'Te lo mando.'],
      ['Le chiavi? Te le ho dato.', 'Le chiavi? Te le ho date.'],
      ['Ci ne sono tre.', 'Ce ne sono tre.'],
      ['Voglio te lo dire.', 'Voglio dirtelo. · Te lo voglio dire.'],
    ])}</article>
    <article class="lesson-box" id="esercizi"><h2>${c.exercisesH2}</h2><p>${L.exIntro}</p><h3>${L.part1H3}</h3><p>${L.part1P}</p>${h.exercises(
      [
        { q: 'Mi dai il libro? → ___ dai?', a: 'me lo', hint: 'Mi + lo → me lo.' },
        { q: 'Ti mando la foto. → ___ mando.', a: 'te la', hint: 'Ti + la → te la.' },
        { q: 'Dico il segreto a Marco. → ___ dico.', a: 'glielo', hint: 'Gli + lo → glielo, una parola sola.' },
        { q: 'Porto i fiori a Giulia. → ___ porto.', a: 'glieli', hint: 'Le (a Giulia) + li → glieli.' },
        { q: 'Ci spieghi la regola? → ___ spieghi?', a: 'ce la', hint: 'Ci + la → ce la.' },
        { q: 'Vi presto le chiavi. → ___ presto.', a: 've le', hint: 'Vi + le → ve le.' },
        { q: 'Mi dai due mele? → ___ dai due?', a: 'me ne', hint: 'Mi + ne → me ne.' },
        { q: 'Compro tre penne a Luca. → ___ compro tre.', a: 'gliene', hint: 'Gli + ne → gliene.' },
        { q: 'Signora, Le porto il caffè? → Sì, ___ porti, grazie.', a: 'me lo', hint: 'Mi porti il caffè → me lo porti.' },
        { q: 'Mando le foto ai ragazzi. → ___ mando.', a: 'gliele', hint: 'A loro + le → gliele.' },
      ]
    )}<h3>${L.part2H3}</h3><p>${L.part2P}</p>${h.exercises([
      { q: 'Mi hai dato la chiave? Sì, ___ho data.', a: 'te l’', alt: "te l'", hint: 'Ti + la davanti a ho → te l’ho data.' },
      { q: 'Hai detto la verità a Marco? Sì, ___ho detta.', a: 'gliel’', alt: "gliel'", hint: 'Gli + la davanti a ho → gliel’ho detta.' },
      { q: 'Chi ti ha regalato questi fiori? ___ ha regalati Anna.', a: 'me li', hint: 'Mi + li → me li; il participio si accorda: regalati.' },
      { q: 'Hai dato le chiavi ai ragazzi? Sì, gliele ho ___.', a: 'date', hint: 'Le chiavi, femminile plurale: gliele ho date.' },
      { q: 'Puoi dirmi la verità? → Puoi ___?', a: 'dirmela', hint: 'Con l’infinito i pronomi si attaccano: dirmela.' },
      { q: 'Me lo puoi spiegare? → Puoi ___?', a: 'spiegarmelo', hint: 'Spiegare + me + lo → spiegarmelo.' },
      { q: 'Dai il libro a me! → ___!', a: 'dammelo', hint: 'Da’ + me + lo, con la m doppia: dammelo.' },
      { q: 'Di’ la verità a Marco! → ___!', a: 'digliela', hint: 'Di’ + glie + la → digliela.' },
      { q: 'Non dirmelo! → Non ___ dire!', a: 'me lo', hint: 'Il pronome può anche andare prima: non me lo dire.' },
      { q: 'Fammi vedere le foto! → ___ vedere!', a: 'fammele', hint: 'Fa’ + me + le → fammele vedere.' },
    ])}<h3>${L.part3H3}</h3><p>${L.part3P}</p>${h.exercises([
      { q: 'Mi lavo le mani. → ___ lavo.', a: 'me le', hint: 'Mi + le → me le.' },
      { q: 'Marco si mette la giacca. → ___ mette.', a: 'se la', hint: 'Si + la → se la.' },
      { q: 'Ti sei messo il cappotto? Sì, ___ sono messo.', a: 'me lo', hint: 'Mi + lo → me lo sono messo.' },
      { q: 'Hai la patente? Sì, ___ho.', a: 'ce l’', alt: "ce l'", hint: 'Avere qualcosa nel parlato: ce l’ho.' },
      { q: 'È tardi: io ___ vado.', a: 'me ne', hint: 'Andarsene: me ne vado.' },
      { q: 'È difficile, ma ___ faccio!', a: 'ce la', hint: 'Farcela: ce la faccio.' },
      { q: 'Sono stanco, non ___ sento di uscire.', a: 'me la', hint: 'Sentirsela: non me la sento.' },
      { q: 'Quanti libri ti ha prestato Anna? ___ ha prestati tre.', a: 'me ne', hint: 'Mi + ne → me ne ha prestati tre.' },
      { q: 'Hai portato i documenti al direttore? Sì, ___ ho portati.', a: 'glieli', hint: 'Gli + li → glieli.' },
      { q: 'Ragazzi, ___ andate già?', a: 've ne', hint: 'Andarsene con voi: ve ne andate.' },
    ])}{{ACTIONS}}</article>
    <article class="lesson-box"><h2>${c.conversationH2}</h2>${h.dialogue([
      ['Studente', 'Che bel pacchetto! Chi te l’ha regalato?'],
      ['Martin', 'Me l’ha regalato Giulia per il compleanno.'],
      ['Studente', 'E tu che cosa le hai regalato per il suo?'],
      ['Martin', 'Un libro di cucina. Gliel’ho comprato a Bologna e gliel’ho spedito.'],
      ['Studente', 'Le è piaciuto?'],
      ['Martin', 'Sì, me l’ha detto subito! Te lo faccio vedere, ne ho comprato uno anche per me.'],
    ])}</article>`,
  it: {
    h1: 'I pronomi combinati',
    card: 'Te lo do, gliel’ho detto, dammelo: la tabella, glielo per tutti, con ne, al passato, la posizione, i riflessivi, ce la faccio e 30 esercizi.',
    lead: 'Ti do il regalo? Te lo do. Con i pronomi combinati un pronome indiretto e uno diretto si uniscono: me lo, te la, glielo, ce ne. La regola (mi diventa me), la tabella, glielo per lui, lei e loro, con ne, al passato (gliel’ho detto), la posizione (dirtelo, dammelo), con i riflessivi (me le lavo), le espressioni (ce l’ho, me ne vado, ce la faccio) e le trappole. Con 30 esercizi.',
    description:
      'I pronomi combinati in italiano: me lo, te la, glielo, ce ne, ve li. La regola (mi → me), la tabella, glielo per lui, lei, Lei e loro, con ne (me ne dai due?), al passato con l’accordo (te l’ho data, gliel’ho detto), la posizione (dirtelo, dammelo, non dirmelo), i riflessivi (me le lavo), ce l’ho, me ne vado, ce la faccio, gli errori tipici e 30 esercizi.',
    heroAlt: 'Una mano che porge un piccolo pacchetto regalo con carta verde e nastro rosso a un’altra mano aperta',
    regolaH2: 'La regola',
    regolaP:
      'Quando nella frase ci sono due pronomi, uno <strong>indiretto</strong> (a chi?) e uno <strong>diretto</strong> (che cosa?), si mettono insieme: prima l’indiretto, poi il diretto. E l’indiretto cambia la <em lang="it">i</em> in <strong>e</strong>.',
    rOrdine: 'Prima a chi, poi che cosa',
    rE: 'La i diventa e',
    rDomanda: 'Anche nelle domande',
    regolaNote:
      'Guarda la foto: <em lang="it">ti do il regalo → te lo do</em>. <em lang="it">Te</em> è «a te», <em lang="it">lo</em> è «il regalo». Prima di questa lezione conviene sapere bene <a href="{{DIRETTI}}">i pronomi diretti</a> e <a href="{{INDIRETTI}}">i pronomi indiretti</a>.',
    tabH2: 'La tabella',
    tabP: 'Ecco tutte le combinazioni. Le righe sono i pronomi indiretti (e il riflessivo <em lang="it">si</em>), le colonne i pronomi diretti e <em lang="it">ne</em>.',
    tabNote:
      'Tutte le forme sono di <strong>due parole</strong>, tranne quelle con <em lang="it">gli</em> e <em lang="it">le</em>, che diventano <strong>una parola sola</strong>: <em lang="it">glielo, gliela, glieli, gliele, gliene</em>. <em lang="it">Si</em> diventa <em lang="it">se</em>: <em lang="it">se lo mette</em>, <em lang="it">se ne va</em>.',
    glH2: 'Glielo per tutti',
    glP: 'Con <strong>gli</strong> (a lui) e <strong>le</strong> (a lei) la forma è la stessa: <strong>glie-</strong> + pronome diretto. Nel parlato vale anche per «a loro».',
    gLui: 'A lui',
    gLei: 'A lei',
    gLoro: 'A loro (parlato)',
    gCortesia: 'A Lei (cortesia)',
    glNote:
      '<em lang="it">Glielo do</em> può voler dire «lo do a lui», «a lei», «a Lei» o «a loro»: il contesto chiarisce. Per «a loro» nella lingua scritta e formale si trova anche <em lang="it">lo do loro</em>, ma nel parlato si dice <em lang="it">glielo do</em>. Con la cortesia: <em lang="it">Glielo porto subito, signora</em>.',
    neH2: 'Con ne',
    neP: '<strong>Ne</strong> sostituisce una quantità o «di questo». Con un pronome indiretto si comporta come <em lang="it">lo</em>: <em lang="it">me ne, te ne, gliene, ce ne, ve ne</em>.',
    nQuanti: 'Quanti? Con un numero',
    nUnPo: 'Un po’, molti, alcuni',
    nGliene: 'Gliene',
    nDi: 'Ne = di questo',
    neNote:
      'Il numero o la quantità restano nella frase: <em lang="it">me ne dai due?</em>, <em lang="it">gliene compro tre</em>. <em lang="it">Ne</em> sostituisce anche «di + qualcosa»: <em lang="it">ti ho parlato del viaggio? → te ne ho parlato?</em>. E con <em lang="it">c’è</em>: <em lang="it">ci sono molti posti? → ce ne sono molti</em>.',
    passH2: 'Al passato',
    passP: 'Al passato prossimo <em lang="it">lo</em> e <em lang="it">la</em> prendono l’apostrofo davanti ad <em lang="it">avere</em>, e il participio si accorda con il pronome diretto.',
    pLo: 'Me l’ha dato: maschile',
    pLa: 'Gliel’ho mandata: femminile',
    pLi: 'Me li hanno restituiti: plurale',
    pNe: 'Me ne ha mandate tre: con ne',
    passNote:
      'Il participio prende genere e numero della cosa: <em lang="it">te l’ho dato</em> (il libro), <em lang="it">te l’ho data</em> (la chiave), <em lang="it">te li ho dati</em>, <em lang="it">te le ho date</em>. Con <em lang="it">ne</em> si accorda con la quantità: <em lang="it">me ne ha mandate tre</em> (foto). Nel parlato l’accordo con <em lang="it">ne</em> a volte si perde, ma con <em lang="it">lo, la, li, le</em> è obbligatorio. Vedi <a href="{{PASSATO}}">il passato prossimo</a>.',
    posH2: 'Dove si mettono?',
    posP: 'Di solito i pronomi combinati vanno <strong>prima del verbo</strong>. Con l’infinito, il gerundio e l’imperativo si <strong>attaccano alla fine</strong> del verbo.',
    poPrima: 'Prima del verbo',
    poInf: 'Con l’infinito: attaccati o prima del modale',
    poImp: 'Con l’imperativo: attaccati',
    poNeg: 'Imperativo negativo: tutti e due',
    poGer: 'Con il gerundio: attaccati',
    posNote:
      'Con <em lang="it">potere, volere, dovere, sapere</em> ci sono due possibilità: <em lang="it">voglio dirtelo</em> o <em lang="it">te lo voglio dire</em>, mai <em lang="it">voglio te lo dire</em>. Con l’infinito la <em lang="it">e</em> finale cade: <em lang="it">dire → dirtelo</em>. Con <em lang="it">da’, di’, fa’, sta’, va’</em> la consonante raddoppia: <em lang="it">dammelo, diglielo, fammelo</em> (ma <em lang="it">gli</em> non raddoppia). Vedi <a href="{{IMPERATIVO}}">l’imperativo</a>.',
    riflH2: 'Con i riflessivi',
    riflP: 'Anche i pronomi riflessivi si combinano: <em lang="it">mi lavo le mani → me le lavo</em>. Il riflessivo va prima, il diretto dopo.',
    rfMani: 'Me le lavo',
    rfSe: 'Si → se',
    rfPass: 'Al passato con essere',
    riflNote:
      'Con le parti del corpo e i vestiti il riflessivo è molto comune: <em lang="it">mi metto il cappotto → me lo metto</em>, <em lang="it">si lava i capelli → se li lava</em>. Al passato l’ausiliare resta <em lang="it">essere</em> e il participio si accorda con il pronome diretto: <em lang="it">me le sono lavate</em> (le mani). Vedi <a href="{{RIFLESSIVI}}">i verbi riflessivi</a>.',
    espH2: 'Espressioni',
    espP: 'Alcuni verbi molto comuni contengono già due pronomi. Si imparano come parole intere.',
    eCeLho: 'Avercela: ce l’ho',
    eVado: 'Andarsene: me ne vado',
    eFaccio: 'Farcela: ce la faccio',
    eSento: 'Sentirsela: non me la sento',
    ePrende: 'Prendersela: non te la prendere',
    espNote:
      '<strong>Ce l’ho</strong> è il modo normale di dire «ho» quando rispondi (<em lang="it">hai la penna? Sì, ce l’ho</em>). <strong>Me ne vado</strong> = vado via. <strong>Ce la faccio</strong> = riesco. <strong>Non me la sento</strong> = non ho il coraggio o la voglia. <strong>Prendersela</strong> = offendersi: <em lang="it">non te la prendere</em>.',
    trapH2: 'Le trappole',
    trapP: 'Quattro punti in cui sbagliano in tanti.',
    tE: 'Mi, ti, ci, vi diventano me, te, ce, ve',
    tGlie: 'Glie- si attacca',
    tOrdine: 'L’ordine non cambia mai',
    tAccordo: 'Al passato il participio si accorda',
    trapNote:
      'Si dice <em lang="it">me lo</em>, mai <em lang="it">mi lo</em>; <em lang="it">glielo</em>, mai <em lang="it">gli lo</em>. L’indiretto viene sempre prima: <em lang="it">te lo do</em>, non <em lang="it">lo ti do</em>. E al passato il participio segue la cosa: <em lang="it">le chiavi? Te le ho date</em>.',
    exIntro: '30 frasi in tre parti. Scrivi i pronomi o la forma che manca: la correzione arriva mentre scrivi.',
    part1H3: 'Parte 1 · Le combinazioni',
    part1P: 'Me lo, te la, glielo, ce ne: sostituisci le parole con i pronomi.',
    part2H3: 'Parte 2 · Passato e posizione',
    part2P: 'Te l’ho data, dirmela, dammelo, non me lo dire.',
    part3H3: 'Parte 3 · Riflessivi ed espressioni',
    part3P: 'Me le lavo, se la mette, ce l’ho, me ne vado, ce la faccio.',
  },
};

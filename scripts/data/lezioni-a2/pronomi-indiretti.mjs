// Lezione A2 «I pronomi indiretti: mi, ti, gli, le» (2026-11-10): struttura, materiale italiano e testi italiani.
// Le spiegazioni tradotte stanno in pronomi-indiretti-i18n.mjs.
//
// Martin il 2026-11-10: «manca una lezione per i pronomi indiretti, vero? però ci sono quelli combinati..».
// C'erano «Pronomi diretti» (A2) e «Pronomi combinati» (B1), che dà gli indiretti per noti. Qui: le forme
// (mi, ti, gli, le, Le, ci, vi, gli/loro) con la forma tonica, diretto o indiretto (chi? / a chi?), la
// posizione, piacere e i verbi come lui (mancare, servire, sembrare, fare male), il passato prossimo senza
// accordo, le trappole (le = a lei o «loro» femminile, gli = a lui e a loro). Nell'indice A2 sta subito dopo
// «Pronomi diretti»; il pulsante finale porta ai pronomi combinati (B1).
// Il confronto con la lingua dello studente e gli errori per lingua sono in confronti-pronomi-indiretti.mjs.

export default {
  slug: 'pronomi-indiretti',
  level: 'a2',
  next: 'pronomi-combinati',
  after: 'pronomi-diretti',
  minutes: 20,
  hero: { src: 'grammatica/pronomi-indiretti-hero.webp', width: 1280, height: 720 },
  slugs: {
    en: 'italian-indirect-object-pronouns',
    es: 'pronombres-indirectos-en-italiano',
    fr: 'pronoms-indirects-en-italien',
    cs: 'neprima-zajmena-v-italstine',
    pl: 'zaimki-dopelnienia-dalszego-po-wlosku',
    tr: 'italyanca-dolayli-nesne-zamirleri',
    de: 'indirekte-pronomen-im-italienischen',
    ja: 'イタリア語の間接目的語代名詞',
  },
  nav: [
    ['forme', 'Forme'],
    ['diretto-indiretto', 'Diretto o indiretto?'],
    ['posizione', 'Posizione'],
    ['piacere', 'Con piacere'],
    ['passato', 'Al passato'],
    ['trappole', 'Trappole'],
    ['errori', 'Errori'],
    ['esercizi', 'Esercizi'],
  ],
  body: (L, h, c) => `    <article class="lesson-box" id="forme"><h2>${L.formeH2}</h2><p>${L.formeP}</p>${h.table(
    ['Persona', 'Pronome', 'Forma tonica', 'Esempio'],
    [
      ['io', 'mi', 'a me', 'Mi dai il sale?'],
      ['tu', 'ti', 'a te', 'Ti scrivo stasera.'],
      ['lui', 'gli', 'a lui', 'Gli telefono domani.'],
      ['lei', 'le', 'a lei', 'Le porto un caffè.'],
      ['Lei', 'Le', 'a Lei', 'Le posso fare una domanda?'],
      ['noi', 'ci', 'a noi', 'Ci spiega la regola.'],
      ['voi', 'vi', 'a voi', 'Vi mando le foto.'],
      ['loro', 'gli · loro', 'a loro', 'Gli racconto tutto. · Racconto loro tutto.'],
    ]
  )}<p class="mini-note">${L.formeNote1.replace('{{DIRETTI}}', h.href('pronomi-diretti', 'a2'))}</p><p class="mini-note">${L.formeNote2}</p></article>
    <article class="lesson-box" id="diretto-indiretto"><h2>${L.dirH2}</h2><p>${L.dirP}</p>${h.examples([
      [L.dChi, 'Vedo Marco. → Lo vedo. · Compro la torta. → La compro.'],
      [L.dAchi, 'Telefono a Marco. → Gli telefono. · Scrivo ad Anna. → Le scrivo.'],
      [L.dVerbi, 'dare · dire · chiedere · rispondere · telefonare · scrivere · mandare · regalare · spiegare'],
      [L.dDiretti, 'Aiuto Anna. → La aiuto. · Ringrazio Marco. → Lo ringrazio. · Ascolto i nonni. → Li ascolto.'],
    ])}<p class="mini-note">${L.dirNote}</p></article>
    <article class="lesson-box" id="posizione"><h2>${L.posH2}</h2><p>${L.posP}</p>${h.examples([
      [L.pPrima, 'Gli scrivo. · Ti telefono stasera.'],
      [L.pNon, 'Non le dico niente. · Non mi rispondi?'],
      [L.pInf, 'Voglio scrivergli. · Gli voglio scrivere.'],
      [L.pTonica, 'A me piace, a te no. · Lo dico a te, non a lui.'],
    ])}<p class="mini-note">${L.posNote}</p></article>
    <article class="lesson-box" id="piacere"><h2>${L.piaH2}</h2><p>${L.piaP}</p>${h.examples([
      [L.piSing, 'Mi piace il gelato. · Gli piace leggere.'],
      [L.piPlur, 'Mi piacciono i gatti. · Le piacciono i film italiani.'],
      [L.piAltri, 'Mi manca casa. · Ti serve aiuto? · Gli fa male la testa. · Ci sembra giusto.'],
    ])}<p class="mini-note">${L.piaNote}</p></article>
    <article class="lesson-box" id="passato"><h2>${L.pasH2}</h2><p>${L.pasP}</p>${h.examples([
      [L.paInd, 'Ho visto Anna e le ho parlato. · Gli ho scritto ieri.'],
      [L.paDir, 'Ho visto Anna. → L’ho vista. · Ho comprato le mele. → Le ho comprate.'],
    ])}<p class="mini-note">${L.pasNote}</p></article>
    <article class="lesson-box" id="trappole"><h2>${L.trapH2}</h2><p>${L.trapP}</p>${h.examples([
      [L.tLe, 'Le scrivo. (a lei) · Le compro. (le mele)'],
      [L.tGli, 'Vedo Paolo e gli parlo. · Vedo i nonni e gli parlo.'],
      [L.tLei, 'Signora, Le porto il conto? · Dottore, Le posso chiedere una cosa?'],
    ])}<p class="mini-note">${L.trapNote.replace('{{COMBINATI}}', h.href('pronomi-combinati', 'b1'))}</p></article>
    <article class="lesson-box" id="errori"><h2>${c.mistakesH2}</h2>${h.mistakes([
      ['Lo telefono stasera.', 'Gli telefono stasera.'],
      ['Ho visto Anna e gli ho detto tutto.', 'Ho visto Anna e le ho detto tutto.'],
      ['Le ho scritta una lettera.', 'Le ho scritto una lettera.'],
      ['Io piace il gelato.', 'Mi piace il gelato.'],
      ['Mi piace i gatti.', 'Mi piacciono i gatti.'],
    ])}</article>
    <article class="lesson-box" id="esercizi"><h2>${c.exercisesH2}</h2><p>${L.exIntro}</p><h3>${L.part1H3}</h3><p>${L.part1P}</p>${h.exercises(
      [
        { q: 'Telefono a Marco stasera. → ___ telefono stasera.', a: 'gli', hint: 'A Marco = a lui → gli.' },
        { q: 'Scrivo una lettera a Giulia. → ___ scrivo una lettera.', a: 'le', hint: 'A Giulia = a lei → le.' },
        { q: 'Marco, ___ dai una mano? (a me)', a: 'mi', hint: 'A me → mi.' },
        { q: 'Domani ___ porto il libro. (a te)', a: 'ti', hint: 'A te → ti.' },
        { q: 'Il professore ___ spiega la regola. (a noi)', a: 'ci', hint: 'A noi → ci.' },
        { q: 'Ragazzi, stasera ___ mando le foto. (a voi)', a: 'vi', hint: 'A voi → vi.' },
        { q: 'Rispondo ai miei genitori. → ___ rispondo subito.', a: 'gli', hint: 'A loro → gli, nella lingua di tutti i giorni.' },
        { q: 'Signora, ___ posso offrire un caffè? (a Lei)', a: 'Le', hint: 'Con il Lei formale: Le, con la maiuscola nello scritto.' },
        { q: 'Regalo un libro a mia sorella. → ___ regalo un libro.', a: 'le', hint: 'A mia sorella = a lei → le.' },
        { q: 'Chiedo un favore a Luca. → ___ chiedo un favore.', a: 'gli', hint: 'A Luca = a lui → gli.' },
      ]
    )}<h3>${L.part2H3}</h3><p>${L.part2P}</p>${h.exercises([
      { q: 'Vedo Marco ogni giorno. → ___ vedo ogni giorno.', a: 'lo', hint: 'Vedo chi? Marco: diretto → lo.' },
      { q: 'Telefono a Marco ogni giorno. → ___ telefono ogni giorno.', a: 'gli', hint: 'Telefono a chi? A Marco: indiretto → gli.' },
      { q: 'Ringrazio Anna per il regalo. → ___ ringrazio per il regalo.', a: 'la', hint: 'Ringraziare qualcuno, senza a: diretto → la.' },
      { q: 'Dico la verità ad Anna. → ___ dico la verità.', a: 'le', hint: 'Dico a chi? Ad Anna: indiretto → le.' },
      { q: 'Compro le mele al mercato. → ___ compro al mercato.', a: 'le', hint: 'Compro che cosa? Le mele: diretto femminile plurale → le.' },
      { q: 'Porto i fiori a Laura. → ___ porto i fiori.', a: 'le', hint: 'Porto i fiori a chi? A Laura: indiretto → le.' },
      { q: 'Aspetto i miei amici. → ___ aspetto.', a: 'li', hint: 'Aspettare qualcuno, senza a: diretto → li.' },
      { q: 'Rispondo a Paolo. → ___ rispondo.', a: 'gli', hint: 'Rispondere a qualcuno: indiretto → gli.' },
      { q: 'Saluto la vicina. → ___ saluto.', a: 'la', hint: 'Salutare qualcuno, senza a: diretto → la.' },
      { q: 'Mando un messaggio ai ragazzi. → ___ mando un messaggio.', a: 'gli', hint: 'Ai ragazzi = a loro → gli.' },
    ])}<h3>${L.part3H3}</h3><p>${L.part3P}</p>${h.exercises([
      { q: 'A Marco piace il calcio. → ___ piace il calcio.', a: 'gli', hint: 'A Marco = a lui → gli piace.' },
      { q: 'A me ___ i gatti. (piacere)', a: 'piacciono', hint: 'I gatti sono plurale: piacciono.' },
      { q: 'A Laura piacciono i film. → ___ piacciono i film.', a: 'le', hint: 'A Laura = a lei → le piacciono.' },
      { q: 'Ti ___ questa canzone? (piacere)', a: 'piace', hint: 'Una canzone: piace, al singolare.' },
      { q: 'Ci ___ molto l’Italia. (mancare)', a: 'manca', hint: 'Come piacere: il soggetto è l’Italia, quindi manca.' },
      { q: 'Mi ___ male la testa. (fare)', a: 'fa', hint: 'La testa è singolare: mi fa male.' },
      { q: 'Ieri ho telefonato a Paolo. → Ieri ___ ho telefonato.', a: 'gli', hint: 'A Paolo → gli, prima dell’ausiliare.' },
      { q: 'Ho scritto a Giulia. → ___ ho scritto.', a: 'le', hint: 'Le ho scritto: con l’indiretto niente apostrofo.' },
      { q: 'Le ho ___ la verità. (dire)', a: 'detto', hint: 'Con l’indiretto il participio non cambia: detto.' },
      { q: 'Alla mamma? Le ho ___ dei fiori. (regalare)', a: 'regalato', hint: 'Le è indiretto: il participio resta regalato.' },
    ])}{{ACTIONS}}</article>
    <article class="lesson-box"><h2>${c.conversationH2}</h2>${h.dialogue([
      ['Martin', 'Sabato è il compleanno di Giulia. Che cosa le regaliamo?'],
      ['Studente', 'Le piacciono i libri. Le compriamo un romanzo?'],
      ['Martin', 'Ottima idea! E Paolo? Gli hai telefonato?'],
      ['Studente', 'Sì, gli ho telefonato ieri e gli ho detto di venire alle otto.'],
      ['Martin', 'Perfetto. Mi mandi il suo numero? Così gli scrivo anch’io.'],
    ])}</article>`,
  it: {
    h1: 'I pronomi indiretti: mi, ti, gli, le',
    card: 'Gli telefono, le scrivo, mi piace: i pronomi indiretti, a chi?, piacere e il passato.',
    lead: 'Gli telefono, le scrivo, ti mando una foto, mi piace il gelato: i pronomi indiretti sostituiscono «a + persona». Le forme (mi, ti, gli, le, ci, vi), come distinguerli dai diretti, dove si mettono, piacere e i verbi come lui, il passato prossimo e le trappole di gli e le. Con 30 esercizi.',
    description:
      'I pronomi indiretti in italiano: mi, ti, gli, le, Le, ci, vi, gli/loro. Diretto o indiretto, la posizione, piacere e i verbi come mancare e servire, il passato prossimo, le trappole e 30 esercizi.',
    heroAlt: 'Una mano porge un piccolo regalo incartato a un’altra mano, davanti a colline sfumate con gli ulivi',
    formeH2: 'Le forme',
    formeP:
      'Il pronome indiretto sostituisce <strong>a + persona</strong>: <em lang="it">telefono a Marco</em> → <em lang="it">gli telefono</em>. Risponde alla domanda <em lang="it">a chi?</em> Accanto a ogni pronome c’è la forma tonica (<em lang="it">a me, a te</em>…), che si usa per insistere.',
    formeNote1:
      '<strong>Mi, ti, ci, vi</strong> sono uguali ai <a href="{{DIRETTI}}">pronomi diretti</a>: <em lang="it">mi vedi</em> (diretto), <em lang="it">mi scrivi</em> (indiretto). Cambiano solo le terze persone: <em lang="it">lo, la, li, le</em> diventano <strong>gli</strong> (a lui, a loro) e <strong>le</strong> (a lei).',
    formeNote2:
      '<strong>A loro</strong> si dice quasi sempre <em lang="it">gli</em>: <em lang="it">gli racconto tutto</em>. <em lang="it">Loro</em> dopo il verbo (<em lang="it">racconto loro tutto</em>) è corretto, ma suona formale: si trova soprattutto nello scritto.',
    dirH2: 'Diretto o indiretto?',
    dirP:
      'Basta una domanda. Se la persona risponde a <em lang="it">chi?</em> o <em lang="it">che cosa?</em>, il pronome è diretto; se risponde a <em lang="it">a chi?</em>, è indiretto. Quindi conta il verbo: alcuni vogliono <em lang="it">a</em> prima della persona, altri no.',
    dChi: 'Chi? Che cosa? → diretto',
    dAchi: 'A chi? → indiretto',
    dVerbi: 'Verbi con a + persona',
    dDiretti: 'Verbi senza a: diretto',
    dirNote:
      '<strong>Telefonare, rispondere, sorridere, chiedere</strong> vogliono <em lang="it">a</em>: <em lang="it">gli telefono</em>, <em lang="it">le rispondo</em>. <strong>Aiutare, ringraziare, ascoltare, aspettare, chiamare</strong> invece no: <em lang="it">la aiuto</em>, <em lang="it">lo ringrazio</em>. Nel dubbio, prova la frase con il nome: <em lang="it">telefono a Marco</em>, ma <em lang="it">aiuto Marco</em>.',
    posH2: 'Dove si mettono',
    posP:
      'Come i diretti, gli indiretti vanno <strong>prima del verbo coniugato</strong>. Con <em lang="it">non</em> l’ordine è <em lang="it">non</em> + pronome + verbo.',
    pPrima: 'Prima del verbo',
    pNon: 'Con non',
    pInf: 'Con l’infinito: due posti',
    pTonica: 'Forma tonica: per insistere',
    posNote:
      '<strong>Con dovere, potere, volere</strong> il pronome va prima del verbo modale o si attacca alla fine dell’infinito, che perde la <em lang="it">e</em>: <em lang="it">gli voglio scrivere</em> = <em lang="it">voglio scrivergli</em>. <strong>La forma tonica</strong> (<em lang="it">a me, a lui</em>) va dopo il verbo o all’inizio della frase e serve per mettere in evidenza la persona o per fare un contrasto.',
    piaH2: 'Piacere e i verbi come lui',
    piaP:
      'In italiano <em lang="it">mi piace il gelato</em> vuol dire, parola per parola, «il gelato piace a me». La persona è un pronome indiretto e <strong>il soggetto è la cosa</strong>: per questo il verbo si accorda con la cosa.',
    piSing: 'Una cosa o un verbo: piace',
    piPlur: 'Più cose: piacciono',
    piAltri: 'Altri verbi così',
    piaNote:
      '<strong>Mi piace il gatto, mi piacciono i gatti</strong>: cambia il verbo, non il pronome. Funzionano allo stesso modo <em lang="it">mancare</em> (<em lang="it">mi manchi</em> = sento la tua mancanza), <em lang="it">servire</em>, <em lang="it">sembrare</em>, <em lang="it">interessare</em>, <em lang="it">fare male</em>. Con un nome si dice <em lang="it">a Marco piace</em> oppure <em lang="it">gli piace</em>: <em lang="it">a Marco gli piace</em> si sente parlare, ma nello scritto è da evitare.',
    pasH2: 'Al passato prossimo',
    pasP:
      'Il pronome indiretto va prima dell’ausiliare, come il diretto. La differenza è il participio: <strong>con l’indiretto non cambia mai</strong>.',
    paInd: 'Indiretto: il participio non cambia',
    paDir: 'Diretto: il participio si accorda',
    pasNote:
      '<strong>Le ho scritto, non le ho scritta</strong>: l’accordo vale solo con <em lang="it">lo, la, li, le</em> diretti. E l’indiretto <em lang="it">le</em> non perde mai la vocale: <em lang="it">le ho parlato</em>, mai <em lang="it">l’ho parlato</em>. Con <em lang="it">piacere</em> l’ausiliare è <em lang="it">essere</em> e il participio si accorda con la cosa: <em lang="it">mi è piaciuta la pizza</em>.',
    trapH2: 'Le trappole',
    trapP: 'Tre cose da sapere per non confondersi e per parlare in modo naturale.',
    tLe: 'Le: a lei o «le» diretto plurale?',
    tGli: 'Gli: a lui e a loro',
    tLei: 'Le formale: a Lei',
    trapNote:
      '<strong>Le ha due vite:</strong> indiretto singolare (<em lang="it">le scrivo</em> = scrivo a lei) e diretto plurale (<em lang="it">le compro</em> = compro le mele); lo capisci dal verbo. <strong>Gli per una donna è un errore</strong>, anche se a volte si sente: <em lang="it">ho visto Anna e le ho detto</em>, non <em lang="it">gli ho detto</em>. E quando il pronome indiretto incontra un diretto, cambia forma: <em lang="it">gli + lo = glielo</em>, <em lang="it">mi + lo = me lo</em>. È il passo successivo: <a href="{{COMBINATI}}">i pronomi combinati</a>.',
    exIntro: '30 frasi in tre parti. Scrivi solo quello che manca: la correzione arriva mentre scrivi.',
    part1H3: 'Parte 1 · Il pronome indiretto giusto',
    part1P: 'Sostituisci a + persona con mi, ti, gli, le, Le, ci o vi.',
    part2H3: 'Parte 2 · Diretto o indiretto?',
    part2P: 'Scrivi lo, la, li, le (diretti) oppure gli, le (indiretti). Chiediti: chi? o a chi?',
    part3H3: 'Parte 3 · Piacere e il passato prossimo',
    part3P: 'Scrivi il pronome o la forma del verbo che manca.',
  },
};

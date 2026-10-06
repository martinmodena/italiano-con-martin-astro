// Lezione A1 «Gli avverbi di frequenza» (2026-10-06): struttura, materiale italiano e testi italiani.
// Le spiegazioni tradotte stanno in avverbi-di-frequenza-i18n.mjs.
//
// Chiesta da Martin: «una lista ordinata da quello che rappresenta il 100% (sempre) a quello che
// rappresenta lo 0%, mi piace l'idea di ordinarli e di esprimerli con una percentuale sebbene non sia
// perfettamente accurata». La scala è una tabella con una barra per riga (stile in linea, perché
// grammar-lesson.css non ha versione e i browser lo terrebbero in cache); la nota dice che le
// percentuali sono indicative.

// Avverbio (italiano), percentuale, frase d'esempio. Le traduzioni dell'avverbio stanno in `L.glosses`
// (vuoto in italiano), nello stesso ordine.
export const SCALE = [
  ['sempre', 100, 'Faccio sempre colazione.'],
  ['quasi sempre', 90, 'Vado quasi sempre al lavoro a piedi.'],
  ['di solito / solitamente', 80, 'Di solito ceno alle otto.'],
  ['spesso', 70, 'Vado spesso al cinema.'],
  ['a volte / qualche volta', 50, 'A volte cucino io.'],
  ['ogni tanto', 30, 'Ogni tanto chiamo mia nonna.'],
  ['raramente / di rado', 15, 'Prendo raramente il taxi.'],
  ['molto raramente', 10, 'Vado molto raramente in discoteca.'],
  ['quasi mai', 5, 'Non guardo quasi mai la televisione.'],
  ['mai', 0, 'Non fumo mai.'],
];

// Nelle lingue straniere la traduzione ha una colonna sua, «Traduzione», dopo l'avverbio: le celle italiane
// restano identiche a quelle della pagina italiana, come vuole REGOLE_LINGUE.md.
function scaleTable(L, h) {
  const translated = L.glosses.length > 0;
  const rows = SCALE.map(([adverb, percent, example], i) => {
    const gloss = translated ? `<td>${L.glosses[i]}</td>` : '';
    const bar = `<span aria-hidden="true" style="display:block;min-width:90px;height:10px;border-radius:6px;background:var(--soft);overflow:hidden"><span style="display:block;height:100%;width:${percent}%;background:var(--primary)"></span></span>`;
    return `<tr><td lang="it"><strong>${adverb}</strong></td>${gloss}<td><strong>${percent}%</strong>${bar}</td><td lang="it">${example}</td></tr>`;
  }).join('');
  const glossHead = translated ? `<th>${h.cell('Traduzione')}</th>` : '';
  return `<table class="conj-table"><thead><tr><th>${h.cell('Avverbio')}</th>${glossHead}<th>${h.cell('Frequenza')}</th><th>${h.cell('Esempio')}</th></tr></thead><tbody>${rows}</tbody></table>`;
}

export default {
  slug: 'avverbi-di-frequenza',
  next: null,
  minutes: 20,
  slugs: {
    en: 'adverbs-of-frequency-in-italian',
    es: 'adverbios-de-frecuencia-en-italiano',
    fr: 'adverbes-de-frequence-en-italien',
    cs: 'prislovce-frekvence-v-italstine',
    pl: 'przyslowki-czestotliwosci-po-wlosku',
    tr: 'italyancada-siklik-zarflari',
    de: 'haeufigkeitsadverbien-im-italienischen',
    ja: 'イタリア語の頻度の副詞',
  },
  nav: [
    ['scala', 'La scala'],
    ['posizione', 'Posizione'],
    ['mai', 'Non… mai'],
    ['quante-volte', 'Quante volte?'],
    ['errori', 'Errori'],
    ['esercizi', 'Esercizi'],
  ],
  body: (
    L,
    h,
    c
  ) => `    <article class="lesson-box" id="scala"><h2>${L.scalaH2}</h2><p>${L.scalaP}</p>${scaleTable(L, h)}<p class="mini-note">${L.scalaNote1}</p><p class="mini-note">${L.scalaNote2}</p></article>
    <article class="lesson-box" id="posizione"><h2>${L.posH2}</h2><p>${L.posP}</p>${h.examples([
      [L.pDopo, 'Vado spesso al cinema.'],
      [L.pInizio, 'Di solito ceno alle otto.'],
      [L.pFine, 'Ci vediamo ogni tanto.'],
      [L.pRiflessivo, 'Mi alzo sempre alle sette.'],
      [L.pEssere, 'Marco è sempre allegro.'],
      [L.pPassato, 'Ho sempre abitato a Milano.'],
    ])}<p class="mini-note">${L.posNote}</p></article>
    <article class="lesson-box" id="mai"><h2>${L.maiH2}</h2><p>${L.maiP}</p>${h.examples([
      [L.mMai, 'Non fumo mai.'],
      [L.mQuasi, 'Non esco quasi mai la sera.'],
      [L.mPassato, 'Non sono mai stato in Sicilia.'],
      [L.mDomanda, 'Sei mai stato a Roma?'],
      [L.mRisposta, 'Bevi il latte? Mai!'],
      [L.mNonSempre, 'Non sempre ho tempo per cucinare.'],
    ])}<p class="mini-note">${L.maiNote1}</p><p class="mini-note">${L.maiNote2}</p></article>
    <article class="lesson-box" id="quante-volte"><h2>${L.volteH2}</h2><p>${L.volteP}</p>${h.table(
      ['Espressione', 'Esempio'],
      [
        ['Quante volte…?', 'Quante volte alla settimana vai in palestra?'],
        ['ogni giorno / tutti i giorni', 'Bevo un caffè ogni giorno.'],
        ['una volta al giorno', 'Prendo la medicina una volta al giorno.'],
        ['due volte alla settimana', 'Vado a nuotare due volte alla settimana.'],
        ['una volta al mese', 'Vado dal parrucchiere una volta al mese.'],
        ['una volta all’anno', 'Vado in vacanza una volta all’anno.'],
        ['ogni lunedì / il lunedì', 'Il lunedì ho lezione d’italiano.'],
        ['ogni mattina / tutte le mattine', 'Corro tutte le mattine.'],
      ]
    )}<p class="mini-note">${L.volteNote1}</p><p class="mini-note">${L.volteNote2}</p></article>
    <article class="lesson-box" id="errori"><h2>${c.mistakesH2}</h2>${h.mistakes([
      ['Io mai bevo il caffè.', 'Non bevo mai il caffè.'],
      ['Bevo mai il caffè.', 'Non bevo mai il caffè.'],
      ['Non quasi mai esco.', 'Non esco quasi mai.'],
      ['Sempre faccio colazione.', 'Faccio sempre colazione.'],
      ['ogni giorni', 'ogni giorno / tutti i giorni'],
      ['tutti giorni', 'tutti i giorni'],
      ['qualche volte', 'qualche volta / a volte'],
      ['due tempi al giorno', 'due volte al giorno'],
    ])}</article>
    <article class="lesson-box" id="esercizi"><h2>${c.exercisesH2}</h2><p>${L.exIntro}</p><h3>${L.part1H3}</h3><p>${L.part1P}</p>${h.exercises(
      [
        { q: 'Bevo ___ il caffè la mattina. (100%)', a: 'sempre', hint: '100%: sempre.' },
        { q: 'Vado ___ al lavoro in bicicletta. (90%)', a: 'quasi sempre', hint: '90%: quasi sempre.' },
        {
          q: 'La sera ___ guardo un film. (80%)',
          a: 'di solito',
          alt: 'solitamente|normalmente',
          hint: '80%: di solito.',
        },
        { q: 'Mia sorella mi chiama ___. (70%)', a: 'spesso', alt: 'frequentemente', hint: '70%: spesso.' },
        {
          q: 'Il sabato ___ vado al mare. (50%)',
          a: 'a volte',
          alt: 'qualche volta',
          hint: '50%: a volte, qualche volta.',
        },
        { q: 'Vedo i miei cugini ___. (30%)', a: 'ogni tanto', hint: '30%: ogni tanto.' },
        { q: 'Prendo ___ il taxi: è caro. (15%)', a: 'raramente', alt: 'di rado', hint: '15%: raramente.' },
        { q: 'Vado ___ in discoteca. (10%)', a: 'molto raramente', hint: '10%: molto raramente.' },
        { q: 'Non guardo ___ la televisione. (5%)', a: 'quasi mai', hint: '5%: non… quasi mai.' },
        { q: 'Non fumo ___. (0%)', a: 'mai', hint: '0%: non… mai.' },
      ]
    )}<h3>${L.part2H3}</h3><p>${L.part2P}</p>${h.exercises([
      { q: '___ bevo mai il latte.', a: 'non', hint: 'Con mai serve anche non prima del verbo.' },
      { q: 'Luca non arriva ___ in orario. (0%)', a: 'mai', hint: '0%: non… mai.' },
      { q: 'Non esco quasi ___ la sera.', a: 'mai', hint: 'Quasi mai: non esco quasi mai.' },
      {
        q: 'Sei ___ stato in Sicilia? Sì, due volte.',
        a: 'mai',
        hint: 'Nelle domande mai vuol dire «qualche volta nella vita».',
      },
      { q: 'Non sono ___ stata a Napoli.', a: 'mai', hint: 'Al passato prossimo mai va fra sono e stata.' },
      { q: 'Ho ___ amato il mare. (100%)', a: 'sempre', hint: 'Fra ho e il participio: ho sempre amato.' },
      { q: 'Mi alzo ___ alle sette. (100%)', a: 'sempre', hint: 'Dopo il verbo: mi alzo sempre.' },
      { q: '___ sempre ho tempo per lo sport: lavoro molto.', a: 'non', hint: 'Non sempre = a volte sì, a volte no.' },
      { q: 'Non mangio ___ la carne: sono vegetariana.', a: 'mai', hint: '0%: non… mai.' },
      { q: 'Hai ___ visto un film di Fellini?', a: 'mai', hint: 'Hai mai visto…? = una volta nella vita.' },
    ])}<h3>${L.part3H3}</h3><p>${L.part3P}</p>${h.exercises([
      {
        q: '___ volte vai in palestra? Tre volte alla settimana.',
        a: 'quante',
        hint: 'Per chiedere la frequenza: quante volte?',
      },
      {
        q: 'Vado in palestra tre volte ___ settimana.',
        a: 'alla',
        alt: 'a',
        hint: 'Settimana è femminile: alla settimana.',
      },
      { q: 'Prendo le medicine due volte ___ giorno.', a: 'al', hint: 'Giorno è maschile: al giorno.' },
      {
        q: 'Vado dal dentista una volta ___anno.',
        a: 'all’',
        alt: "all'|all",
        hint: 'Anno comincia con una vocale: all’anno.',
      },
      { q: 'Pago l’affitto una volta ___ mese.', a: 'al', hint: 'Mese è maschile: al mese.' },
      { q: 'Faccio la spesa ___ giorni.', a: 'tutti i', hint: 'Tutti + i + plurale: tutti i giorni.' },
      { q: 'Leggo il giornale ___ mattina.', a: 'ogni', hint: 'Ogni + singolare: ogni mattina.' },
      { q: 'Telefono a mia madre ___ domenica.', a: 'ogni', hint: 'Ogni domenica = tutte le domeniche.' },
      { q: 'Vado in vacanza una ___ all’anno.', a: 'volta', hint: 'Una volta, due volte.' },
      { q: 'Vado ___ volta al cinema, ma non spesso.', a: 'qualche', hint: 'Qualche volta = a volte.' },
    ])}{{ACTIONS}}</article>
    <article class="lesson-box"><h2>${c.conversationH2}</h2>${h.dialogue([
      ['Martin', 'Quante volte alla settimana studi l’italiano?'],
      ['Studente', 'Di solito tre volte alla settimana, a volte anche di più.'],
      ['Martin', 'E parli spesso con gli italiani?'],
      ['Studente', 'Purtroppo no, quasi mai. Per questo faccio lezione con te!'],
    ])}</article>`,
  it: {
    h1: 'Gli avverbi di frequenza: sempre, spesso, mai',
    crumb: 'Avverbi di frequenza',
    cardTitle: 'Avverbi di frequenza',
    card: 'Sempre, spesso, a volte, mai: quanto spesso fai una cosa, dal 100% allo 0%.',
    lead: 'Quanto spesso fai una cosa? Qui trovi gli avverbi di frequenza in ordine, dal 100% (sempre) allo 0% (mai), dove metterli nella frase, la doppia negazione non… mai e 30 esercizi.',
    description:
      'Gli avverbi di frequenza in italiano in ordine dal 100% allo 0%: sempre, quasi sempre, di solito, spesso, a volte, ogni tanto, raramente, quasi mai, mai. Posizione nella frase, non… mai, quante volte? e 30 esercizi.',
    glosses: [],
    scalaH2: 'Dal 100% allo 0%: la scala',
    scalaP:
      'Gli avverbi di frequenza dicono <strong>quante volte</strong> facciamo una cosa. Eccoli in ordine, da quello che vale sempre a quello che non vale mai.',
    scalaNote1:
      '<strong>Le percentuali sono indicative.</strong> Servono a ricordare l’ordine: nessun italiano pensa «spesso = 70%». Fra parole vicine (<em lang="it">di solito</em> e <em lang="it">spesso</em>, <em lang="it">a volte</em> e <em lang="it">ogni tanto</em>) la differenza è piccola e dipende da chi parla.',
    scalaNote2:
      '<strong>Parole con lo stesso valore.</strong> <em lang="it">Di solito</em> = <em lang="it">solitamente</em> = <em lang="it">normalmente</em>. <em lang="it">Spesso</em> = <em lang="it">frequentemente</em>, più formale. <em lang="it">A volte</em> = <em lang="it">qualche volta</em>. <em lang="it">Raramente</em> = <em lang="it">di rado</em>.',
    posH2: 'Dove si mette l’avverbio',
    posP: 'Di solito l’avverbio va <strong>subito dopo il verbo</strong>. <em lang="it">Di solito</em>, <em lang="it">a volte</em>, <em lang="it">qualche volta</em> e <em lang="it">ogni tanto</em> possono stare anche all’inizio o alla fine della frase.',
    pDopo: 'Dopo il verbo',
    pInizio: 'All’inizio',
    pFine: 'Alla fine',
    pRiflessivo: 'Con un verbo riflessivo',
    pEssere: 'Con essere',
    pPassato: 'Al passato prossimo',
    posNote:
      '<strong>Al passato prossimo</strong> <em lang="it">sempre</em>, <em lang="it">spesso</em> e <em lang="it">mai</em> vanno di solito fra l’ausiliare e il participio: <em lang="it">ho sempre detto</em>, <em lang="it">non sono mai stato</em>. Gli avverbi di più parole stanno meglio all’inizio o alla fine: <em lang="it">ci siamo visti ogni tanto</em>.',
    maiH2: 'Non… mai: la doppia negazione',
    maiP: 'Con <em lang="it">mai</em> e <em lang="it">quasi mai</em> l’italiano usa <strong>due negazioni</strong>: <em lang="it">non</em> prima del verbo e <em lang="it">mai</em> dopo. Non è un errore: è obbligatorio.',
    mMai: 'Mai: 0%',
    mQuasi: 'Quasi mai: 5%',
    mPassato: 'Al passato prossimo',
    mDomanda: 'Nelle domande: una volta nella vita',
    mRisposta: 'Da solo, come risposta',
    mNonSempre: 'Non sempre: a volte sì, a volte no',
    maiNote1:
      '<strong>Mai all’inizio della frase?</strong> Si usa solo per dare forza, e allora <em lang="it">non</em> sparisce: <em lang="it">Mai visto una cosa così!</em> Nelle frasi normali si dice <em lang="it">non… mai</em>.',
    maiNote2:
      '<strong>Non sempre non vuol dire mai.</strong> <em lang="it">Non sempre ho ragione</em> vuol dire che a volte ho ragione e a volte no. Per lo 0% serve <em lang="it">mai</em>: <em lang="it">non ho mai ragione</em>.',
    volteH2: 'Quante volte? Ogni giorno, due volte alla settimana',
    volteP:
      'Per dire una frequenza precisa si usa <em lang="it">una volta</em>, <em lang="it">due volte</em>… con <em lang="it">al</em>, <em lang="it">alla</em>, <em lang="it">all’</em>, oppure <em lang="it">ogni</em> e <em lang="it">tutti i</em> / <em lang="it">tutte le</em>.',
    volteNote1:
      '<strong>Ogni vuole il singolare, tutti il plurale con l’articolo:</strong> <em lang="it">ogni giorno</em> = <em lang="it">tutti i giorni</em>, <em lang="it">ogni settimana</em> = <em lang="it">tutte le settimane</em>. Anche <em lang="it">qualche</em> vuole il singolare: <em lang="it">qualche volta</em>, mai <em lang="it">qualche volte</em>.',
    volteNote2:
      '<strong>Al, alla, all’</strong> seguono il genere della parola: <em lang="it">al giorno</em>, <em lang="it">al mese</em>, <em lang="it">alla settimana</em>, <em lang="it">all’anno</em>. Nel parlato si sente anche <em lang="it">due volte a settimana</em>.',
    exIntro: '30 frasi in tre parti. Scrivi solo quello che manca: la correzione arriva mentre scrivi.',
    part1H3: 'Parte 1 · La scala',
    part1P: 'Guarda la percentuale tra parentesi e scrivi l’avverbio.',
    part2H3: 'Parte 2 · Non… mai e la posizione',
    part2P: 'Scrivi la parola che manca.',
    part3H3: 'Parte 3 · Quante volte?',
    part3P: 'Completa l’espressione.',
  },
};

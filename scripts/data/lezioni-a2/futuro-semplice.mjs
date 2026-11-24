// Lezione A2 «Il futuro semplice: parlerò, sarò, andrò» (rifatta il 2026-11-24 agli stessi URL): struttura, materiale
// italiano e testi. Le spiegazioni tradotte stanno in futuro-semplice-i18n.mjs.
//
// Decima delle lezioni con pochi esercizi (Martin, 2026-11-23: «fai una alla volta»). La lezione di agosto era scritta
// a mano: la forma, quattro usi, sei irregolari e 10 esercizi. Ora: gli usi (programmi, previsioni, promesse, ipotesi
// e stime sul presente), la forma, l'ortografia (cercherò, comincerò, farò), gli irregolari in tre gruppi, futuro
// o presente (domani parto), quando / appena / se con il futuro, le trappole (andare a, l'accento, andremo /
// andremmo, saranno le tre) e 30 esercizi. Il confronto con la lingua resta quello di confronti-lingua.mjs (dopo
// #usi); gli errori per lingua sono in confronti-futuro-semplice.mjs. Il pulsante finale porta ai verbi modali.

const it = (s) => `<span lang="it">${s}</span>`;

export default {
  slug: 'futuro-semplice',
  level: 'a2',
  next: 'verbi-modali',
  minutes: 20,
  hero: { src: 'grammatica/futuro-semplice-hero.webp', width: 1280, height: 720 },
  // Gli slug stranieri esistono dal 2026-08 e non cambiano.
  slugs: {
    en: 'the-futuro-semplice-tense',
    es: 'el-futuro-semplice-italiano',
    fr: 'le-futuro-semplice-italien',
    cs: 'italsky-futuro-semplice',
    pl: 'wloski-futuro-semplice',
    tr: 'italyanca-futuro-semplice',
    de: 'das-italienische-futuro-semplice',
    ja: 'イタリア語の-futuro-semplice',
  },
  nav: [
    ['usi', 'Usi'],
    ['forma', 'Forma'],
    ['ortografia', 'Ortografia'],
    ['irregolari', 'Irregolari'],
    ['presente', 'Futuro o presente?'],
    ['quando', 'Quando e appena'],
    ['trappole', 'Trappole'],
    ['errori', 'Errori'],
    ['esercizi', 'Esercizi'],
  ],
  body: (L, h, c) => `    <article class="lesson-box" id="usi"><h2>${L.usiH2}</h2><p>${L.usiP}</p>${h.examples([
    [L.uProgrammi, 'L’anno prossimo studierò in Italia.'],
    [L.uPrevisioni, 'Domani pioverà al nord.'],
    [L.uPromesse, 'Ti chiamerò stasera, promesso!'],
    [L.uIpotesi, 'Dov’è Marco? Sarà a casa.'],
    [L.uStima, 'Quanti anni ha? Avrà trent’anni.'],
  ])}<p class="mini-note">${L.usiNote.replace('{{ANTERIORE}}', h.href('futuro-anteriore', 'b1'))}</p></article>
    <article class="lesson-box" id="forma"><h2>${L.formaH2}</h2><p>${L.formaP}</p>${h.table(
      ['Persona', `=${it('parlare')}`, `=${it('prendere')}`, `=${it('dormire')}`],
      [
        ['io', 'parlerò', 'prenderò', 'dormirò'],
        ['tu', 'parlerai', 'prenderai', 'dormirai'],
        ['lui · lei · Lei', 'parlerà', 'prenderà', 'dormirà'],
        ['noi', 'parleremo', 'prenderemo', 'dormiremo'],
        ['voi', 'parlerete', 'prenderete', 'dormirete'],
        ['loro', 'parleranno', 'prenderanno', 'dormiranno'],
      ]
    )}<p class="mini-note">${L.formaNote}</p></article>
    <article class="lesson-box" id="ortografia"><h2>${L.ortoH2}</h2><p>${L.ortoP}</p>${h.examples([
      [L.oCare, 'cercare → cercherò · pagare → pagherò'],
      [L.oCiare, 'cominciare → comincerò · mangiare → mangerò'],
      [L.oBrevi, 'dare → darò · fare → farò · stare → starò'],
    ])}<p class="mini-note">${L.ortoNote}</p></article>
    <article class="lesson-box" id="irregolari"><h2>${L.irrH2}</h2><p>${L.irrP}</p>${h.examples([
      [L.iVocale, 'avrò · andrò · potrò · dovrò · saprò · vedrò · vivrò'],
      [L.iDoppia, 'vorrò · verrò · terrò · rimarrò · berrò'],
      [L.iEssere, 'sarò · sarai · sarà · saremo · sarete · saranno'],
    ])}${h.table(
      ['Persona', `=${it('essere')}`, `=${it('avere')}`, `=${it('andare')}`, `=${it('venire')}`],
      [
        ['io', 'sarò', 'avrò', 'andrò', 'verrò'],
        ['tu', 'sarai', 'avrai', 'andrai', 'verrai'],
        ['lui · lei · Lei', 'sarà', 'avrà', 'andrà', 'verrà'],
        ['noi', 'saremo', 'avremo', 'andremo', 'verremo'],
        ['voi', 'sarete', 'avrete', 'andrete', 'verrete'],
        ['loro', 'saranno', 'avranno', 'andranno', 'verranno'],
      ]
    )}<p class="mini-note">${L.irrNote.replace('{{CONDIZIONALE}}', h.href('condizionale-presente', 'b1'))}</p></article>
    <article class="lesson-box" id="presente"><h2>${L.presH2}</h2><p>${L.presP}</p>${h.examples([
      [L.pSicuro, 'Domani parto per Roma. · Stasera vado al cinema.'],
      [L.pLontano, 'Un giorno andrò in Giappone.'],
      [L.pPrevisione, 'Secondo me vincerà l’Italia.'],
      [L.pStaPer, 'Sbrigati, il treno sta per partire!'],
    ])}<p class="mini-note">${L.presNote.replace('{{GERUNDIO}}', h.href('stare-gerundio', 'a2'))}</p></article>
    <article class="lesson-box" id="quando"><h2>${L.quandoH2}</h2><p>${L.quandoP}</p>${h.examples([
      [L.qQuando, 'Quando arriverò a Roma, ti chiamerò.'],
      [L.qAppena, 'Appena finirò il lavoro, uscirò.'],
      [L.qSe, 'Se pioverà, resteremo a casa.'],
      [L.qParlato, 'Quando arrivo, ti chiamo. · Se piove, restiamo a casa.'],
    ])}<p class="mini-note">${L.quandoNote.replace('{{IPOTETICO}}', h.href('periodo-ipotetico', 'b2'))}</p></article>
    <article class="lesson-box" id="trappole"><h2>${L.trapH2}</h2><p>${L.trapP}</p>${h.examples([
      [L.tAndare, 'Vado a studiare in biblioteca. · Domani studierò.'],
      [L.tAccento, 'parlerò · parlerà · farò · sarà'],
      [L.tCondizionale, 'andremo · andremmo'],
      [L.tOre, 'Che ore sono? Saranno le tre.'],
    ])}<p class="mini-note">${L.trapNote}</p></article>
    <article class="lesson-box" id="errori"><h2>${c.mistakesH2}</h2>${h.mistakes([
      ['Io parlarò.', 'Io parlerò.'],
      ['Io andarò.', 'Io andrò.'],
      ['Domani cercerò le chiavi.', 'Domani cercherò le chiavi.'],
      ['Domani verò alla festa.', 'Domani verrò alla festa.'],
      ['Va a piovere.', 'Pioverà.'],
    ])}</article>
    <article class="lesson-box" id="esercizi"><h2>${c.exercisesH2}</h2><p>${L.exIntro}</p><h3>${L.part1H3}</h3><p>${L.part1P}</p>${h.exercises(
      [
        { q: 'Domani io ___ con il direttore. (parlare)', a: 'parlerò', hint: '-are diventa -er-: parlerò.' },
        { q: 'Tu ___ il treno delle otto? (prendere)', a: 'prenderai', hint: 'Con tu: prenderai.' },
        { q: 'Stasera Anna ___ presto. (dormire)', a: 'dormirà', hint: 'Con lei: dormirà, con l’accento.' },
        { q: 'Noi ___ la cena alle nove. (preparare)', a: 'prepareremo', hint: 'Con noi: prepareremo.' },
        { q: 'Voi ___ la partita in TV? (guardare)', a: 'guarderete', hint: 'Con voi: guarderete.' },
        { q: 'Gli studenti ___ l’esame a giugno. (finire)', a: 'finiranno', hint: 'Con loro: finiranno.' },
        { q: 'Domani io ___ le chiavi. (cercare)', a: 'cercherò', hint: 'Con -care serve la h: cercherò.' },
        { q: 'Lunedì ___ un corso di yoga. (cominciare, io)', a: 'comincerò', hint: 'Con -ciare la i sparisce: comincerò.' },
        { q: 'Chi ___ il conto stasera? (pagare)', a: 'pagherà', hint: 'Con -gare serve la h: pagherà.' },
        { q: 'Stasera noi ___ in pizzeria. (mangiare)', a: 'mangeremo', hint: 'Con -giare la i sparisce: mangeremo.' },
      ]
    )}<h3>${L.part2H3}</h3><p>${L.part2P}</p>${h.exercises([
      { q: 'Domani ___ bel tempo. (fare)', a: 'farà', hint: 'Fare: farò, farai, farà.' },
      { q: 'Domani io ___ a casa tutto il giorno. (essere)', a: 'sarò', hint: 'Essere: sarò.' },
      { q: 'Tu ___ tempo stasera? (avere)', a: 'avrai', hint: 'Avere perde la e: avrai.' },
      { q: 'Ad agosto noi ___ in Sicilia. (andare)', a: 'andremo', hint: 'Andare perde la a: andremo.' },
      { q: 'I tuoi amici ___ alla festa? (venire)', a: 'verranno', hint: 'Venire ha la doppia r: verranno.' },
      { q: 'Mi dispiace, domani non ___ venire. (potere, io)', a: 'potrò', hint: 'Potere perde la e: potrò.' },
      { q: 'Voi ___ restare fino a tardi? (dovere)', a: 'dovrete', hint: 'Dovere perde la e: dovrete.' },
      { q: 'Quando lo ___ , ti scriverò. (sapere, io)', a: 'saprò', hint: 'Sapere perde la e: saprò.' },
      { q: 'Che cosa ___ da bere? (volere, tu)', a: 'vorrai', hint: 'Volere ha la doppia r: vorrai.' },
      { q: 'Ci ___ domani in ufficio. (vedere, noi)', a: 'vedremo', hint: 'Vedere perde la e: vedremo.' },
    ])}<h3>${L.part3H3}</h3><p>${L.part3P}</p>${h.exercises([
      { q: 'Quando ___ a Roma, ti chiamerò. (arrivare, io)', a: 'arriverò', hint: 'Quando + azione futura: arriverò.' },
      { q: 'Appena ___ il lavoro, uscirò. (finire, io)', a: 'finirò', hint: 'Appena + azione futura: finirò.' },
      { q: 'Se domani ___ , resteremo a casa. (piovere)', a: 'pioverà', hint: 'Se + futuro, futuro: pioverà.' },
      { q: 'Dov’è Luca? Non lo so, ___ in ufficio. (essere)', a: 'sarà', hint: 'Un’ipotesi sul presente: sarà (forse è).' },
      { q: 'Quanti anni ha la professoressa? ___ quarant’anni. (avere)', a: 'avrà', hint: 'Una stima: avrà (più o meno ha).' },
      { q: 'Che ore sono? ___ le cinque. (essere)', a: 'saranno', hint: 'Un’ora non sicura: saranno le cinque.' },
      { q: 'Ti ___ stasera, promesso! (chiamare, io)', a: 'chiamerò', hint: 'Una promessa: chiamerò.' },
      { q: 'Secondo me domani ___ l’Italia. (vincere)', a: 'vincerà', hint: 'Una previsione: vincerà.' },
      { q: 'Un giorno ___ un libro sulla mia vita. (scrivere, io)', a: 'scriverò', hint: 'Un progetto lontano: scriverò.' },
      { q: 'Quando ___ grande, farò il medico. (essere, io)', a: 'sarò', hint: 'Quando + futuro: sarò grande.' },
    ])}{{ACTIONS}}</article>
    <article class="lesson-box"><h2>${c.conversationH2}</h2>${h.dialogue([
      ['Martin', 'Che cosa farai quest’estate?'],
      ['Studente', 'Andrò in Italia! Starò un mese a Bologna e farò un corso di italiano.'],
      ['Martin', 'Che bello! E dove dormirai?'],
      ['Studente', 'Abiterò con una famiglia. Così parlerò italiano tutto il giorno.'],
      ['Martin', 'Allora quando tornerai, parlerai benissimo!'],
      ['Studente', 'Lo spero! Ti scriverò una cartolina in italiano.'],
    ])}</article>`,
  it: {
    h1: 'Il futuro semplice: parlerò, sarò, andrò',
    card: 'Domani pioverà, ti chiamerò, sarà a casa: gli usi, la forma, l’ortografia, gli irregolari e futuro o presente.',
    lead: 'L’anno prossimo studierò in Italia, domani pioverà, ti chiamerò stasera, Marco sarà a casa: il futuro parla di programmi, previsioni, promesse e ipotesi. Gli usi, la forma (parlerò, prenderò, dormirò), l’ortografia (cercherò, comincerò), gli irregolari (sarò, avrò, andrò, verrò), quando basta il presente, quando e appena con il futuro, e le trappole. Con 30 esercizi.',
    description:
      'Il futuro semplice in italiano: quando si usa (programmi, previsioni, promesse, ipotesi: sarà a casa), la forma (parlerò, prenderò, dormirò), l’ortografia (cercherò, comincerò), gli irregolari (sarò, avrò, andrò, verrò, vorrò), futuro o presente, quando e appena, gli errori tipici e 30 esercizi.',
    heroAlt: 'Una vecchia valigia marrone sul binario di una piccola stazione italiana all’alba, con i binari che si perdono verso le colline',
    usiH2: 'Quando si usa',
    usiP: 'Il futuro parla di quello che <strong>succederà</strong>: programmi, previsioni, promesse. Ma serve anche per una cosa che gli studenti non si aspettano: fare un’<strong>ipotesi sul presente</strong>.',
    uProgrammi: 'Programmi e progetti',
    uPrevisioni: 'Previsioni',
    uPromesse: 'Promesse',
    uIpotesi: 'Un’ipotesi sul presente',
    uStima: 'Una stima: più o meno',
    usiNote:
      '<strong>Sarà a casa</strong> non parla del futuro: vuol dire «forse è a casa». <strong>Avrà trent’anni</strong> vuol dire «più o meno ha trent’anni». Per un’ipotesi sul passato si usa il <a href="{{ANTERIORE}}">futuro anteriore</a>: <em lang="it">sarà già partito</em>.',
    formaH2: 'La forma',
    formaP: 'Si toglie la <strong>-e</strong> finale dell’infinito e si aggiungono <strong>-ò, -ai, -à, -emo, -ete, -anno</strong>. Le desinenze sono le stesse per tutti i verbi.',
    formaNote:
      'Attenzione ai verbi in <strong>-are</strong>: la <em lang="it">a</em> diventa <strong>e</strong>, <em lang="it">parlare → parlerò</em>, non <em lang="it">parlarò</em>. E all’accento scritto su <em lang="it">io</em> e <em lang="it">lui</em>: <em lang="it">parlerò</em>, <em lang="it">parlerà</em>.',
    ortoH2: 'L’ortografia',
    ortoP: 'Alcuni verbi cambiano un po’ per mantenere lo stesso suono.',
    oCare: 'Verbi in -care e -gare: si aggiunge la h',
    oCiare: 'Verbi in -ciare e -giare: la i sparisce',
    oBrevi: 'Dare, fare, stare: la a resta',
    ortoNote:
      'Senza la <strong>h</strong>, <em lang="it">cercerò</em> si leggerebbe con il suono di <em lang="it">cena</em>. E nei verbi in <em lang="it">-ciare</em> e <em lang="it">-giare</em> la <em lang="it">i</em> serviva solo per il suono dolce davanti ad <em lang="it">a</em>: davanti a <em lang="it">e</em> non serve più, <em lang="it">mangerò</em>.',
    irrH2: 'Gli irregolari',
    irrP: 'Gli irregolari cambiano solo la base: le desinenze restano quelle di sempre. Si dividono in tre gruppi.',
    iVocale: 'Perdono una vocale: avere, andare, potere, dovere, sapere, vedere, vivere',
    iDoppia: 'Doppia r: volere, venire, tenere, rimanere, bere',
    iEssere: 'Essere: sar-',
    irrNote:
      '<strong>Un trucco</strong>: la base del futuro è la stessa del <a href="{{CONDIZIONALE}}">condizionale</a>. Se sai <em lang="it">andrò</em>, sai anche <em lang="it">andrei</em>; se sai <em lang="it">verrò</em>, sai <em lang="it">verrei</em>. I verbi in -are come <em lang="it">dare, fare, stare</em> sono regolari ma tengono la <em lang="it">a</em>: <em lang="it">darò, farò, starò</em>.',
    presH2: 'Futuro o presente?',
    presP: 'Nell’italiano parlato, per un programma vicino e sicuro si usa spesso il <strong>presente</strong>, con un’espressione di tempo. Il futuro serve per i progetti lontani, le previsioni e le promesse.',
    pSicuro: 'Un programma vicino e sicuro: presente',
    pLontano: 'Un progetto lontano o incerto: futuro',
    pPrevisione: 'Una previsione: futuro',
    pStaPer: 'Stare per: una cosa che succede tra pochissimo',
    presNote:
      '<em lang="it">Domani parto</em> e <em lang="it">domani partirò</em> sono giusti tutti e due; il presente è più naturale nella conversazione. Per una cosa imminente si usa <a href="{{GERUNDIO}}">stare per</a>: <em lang="it">sta per piovere</em>.',
    quandoH2: 'Quando, appena, se',
    quandoP: 'Se l’azione è nel futuro, dopo <strong>quando</strong>, <strong>appena</strong> e <strong>se</strong> l’italiano scritto usa il futuro in tutte e due le parti della frase.',
    qQuando: 'Quando + futuro, futuro',
    qAppena: 'Appena + futuro, futuro',
    qSe: 'Se + futuro, futuro',
    qParlato: 'Nel parlato: presente + presente',
    quandoNote:
      'Il modo più sicuro: lo stesso tempo nelle due parti, futuro + futuro o presente + presente. Tutte le frasi con <em lang="it">se</em> sono nella lezione sul <a href="{{IPOTETICO}}">periodo ipotetico</a>.',
    trapH2: 'Le trappole',
    trapP: 'Quattro punti in cui sbagliano in tanti.',
    tAndare: 'Andare a + infinito: un movimento, non il futuro',
    tAccento: 'L’accento scritto',
    tCondizionale: 'Futuro o condizionale?',
    tOre: 'Saranno le tre: un’ipotesi',
    trapNote:
      '<strong>Vado a studiare</strong> vuol dire «vado in un posto per studiare»; per il futuro si dice <em lang="it">studierò</em>. Senza accento la parola cambia: <em lang="it">parlerò</em> (io, futuro), non <em lang="it">parlero</em>. <em lang="it">Andremo</em> (futuro, una <em lang="it">m</em>) non è <em lang="it">andremmo</em> (condizionale, due <em lang="it">m</em>). E <em lang="it">saranno le tre</em> vuol dire «più o meno sono le tre».',
    exIntro: '30 frasi in tre parti. Scrivi solo il verbo: la correzione arriva mentre scrivi.',
    part1H3: 'Parte 1 · La forma',
    part1P: 'Scrivi il verbo al futuro. Attenzione all’ortografia.',
    part2H3: 'Parte 2 · Gli irregolari',
    part2P: 'Scrivi il verbo al futuro.',
    part3H3: 'Parte 3 · Gli usi',
    part3P: 'Quando, appena, se, le ipotesi e le promesse.',
  },
};

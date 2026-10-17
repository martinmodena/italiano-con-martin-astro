// «La pronuncia italiana»: pagina tedesca (registro «du»). Trappole per chi parla tedesco: v che non è f,
// la s iniziale sorda e st/sp senza «sch», sch = sk, ch = k, ei ed eu separati, la r di gola o vocalizzata,
// le doppie. Buone notizie: la z di Zeit, la s di Rose, la logica delle vocali brevi prima delle doppie.
export default {
  h1: 'Italienische Aussprache',
  lead: 'Italienisch liest man fast immer so, wie man es schreibt: Ein paar Regeln reichen, um jedes Wort laut vorzulesen. Hier lernst du sie beim Zuhören: die fünf Vokale, C und G, die besonderen Laute, die Doppelkonsonanten (<em lang="it">casa</em> oder <em lang="it">cassa</em>?), die Betonung, die Fallen für Deutschsprachige und vier Zungenbrecher zum Üben.',
  description:
    'Italienische Aussprache für Deutschsprachige, mit Audio: Vokale, c und g, gn, gli, sc, z, v und f, Doppelkonsonanten (casa / cassa, nono / nonno), Betonung und Zungenbrecher. 44 Hörübungen und ein Rekorder, um deine Stimme zu vergleichen.',
  card: 'Vokale, C und G, Doppelkonsonanten (casa / cassa) und Betonung, mit Audio und Hörübungen.',
  heroAlt:
    'Ein altes Mikrofon auf einem Holztisch vor einem Fenster mit Blick auf die Dächer eines italienischen Städtchens',
  nav: {
    vocali: 'Vokale',
    cg: 'C und G',
    suoni: 'Besondere Laute',
    doppie: 'Doppelkonsonanten',
    accento: 'Betonung',
    trappole: 'Fallen',
    scioglilingua: 'Zungenbrecher',
  },
  ui: {
    play: 'Anhören',
    slow: 'Langsamer',
    record: 'Nimm dich auf',
    stop: 'Stopp',
    yours: 'Deine Stimme',
    micError: 'Das Mikrofon ist nicht verfügbar: Prüfe die Berechtigungen deines Browsers.',
    correct: 'Richtig!',
    wrong: 'Nein, es war:',
    listenFirst: 'Erst anhören, dann wählen.',
    score: '{n} von {t}',
    again: 'Neue Runde',
    total: 'Dein Ergebnis',
    vs: 'oder',
  },
  how: {
    h2: 'So funktioniert diese Lektion',
    html: '<p>Drück auf <strong>▶</strong>, um ein Wort zu hören, und auf <strong>🐢</strong>, um es langsamer zu hören. In den Hörübungen wählt die Seite ein Wort per Zufall: Hör zu und wähle das Wort, das du gehört hast. Mit <strong>🎙 Nimm dich auf</strong> kannst du deine Stimme aufnehmen und mit dem Vorbild vergleichen: Die Aufnahme bleibt in deinem Browser und wird nirgendwohin geschickt.</p><p class="mini-note"><strong>Das Geheimnis des Italienischen:</strong> Jeder Buchstabe hat (fast) immer denselben Laut. Keine überraschend stummen Buchstaben, bis auf einen: das <em lang="it">h</em>. Wer die Regeln dieser Seite kennt, kann auch Wörter lesen, die er noch nie gesehen hat.</p>',
  },
  vowels: {
    h2: 'Die fünf Vokale: immer klar, immer ganz',
    intro:
      '<p>Italienisch hat fünf Vokale und spricht sie immer deutlich aus, ohne in einen anderen Laut zu gleiten. Es gibt kein <strong>ä</strong>, <strong>ö</strong> oder <strong>ü</strong>. Schau dir die Gesichter an: Der Mund macht die halbe Arbeit.</p>',
    cues: {
      a: {
        cue: 'Mund weit offen, wie beim Arzt: „Sagen Sie Aaa“.',
        alt: 'Eine Großmutter öffnet den Mund weit wie beim Arzt',
      },
      e: { cue: 'Mund halb offen, etwas breit: „Hä? Was?“', alt: 'Ein junger Mann sagt „e?“ mit halb offenem Mund' },
      i: {
        cue: 'Das Fotolächeln: Die Lippen ziehen sich breit, wie bei „cheese“.',
        alt: 'Ein Mädchen lächelt breit wie für ein Foto',
      },
      o: { cue: 'Runde Lippen, wie beim Staunen: „Oh!“', alt: 'Eine junge Frau sagt „oh!“ mit runden Lippen' },
      u: { cue: 'Lippen nach vorn, wie die Eule: „Uuu“.', alt: 'Ein Herr mit Bart macht „uuu“ wie eine Eule' },
    },
    finalH3: 'Auch der letzte Vokal ist zu hören',
    final:
      '<p>Im Italienischen wird der Vokal am Wortende nie verschluckt und nie zu einem schwachen „e“ wie in „bitte“: <em lang="it">pizz<strong>a</strong></em>, <em lang="it">Rom<strong>a</strong></em>, <em lang="it">gelat<strong>o</strong></em>, <em lang="it">nott<strong>e</strong></em>. Oft sagt gerade er, ob es eine Sache ist oder viele (<em lang="it">la pizza</em>, <em lang="it">le pizze</em>) oder ob das Wort männlich oder weiblich ist.</p>',
    eoH3: 'Bonus für Neugierige: E und O haben zwei Stimmen',
    eo: '<p><em lang="it">E</em> und <em lang="it">o</em> können offen oder geschlossen sein. Ein berühmtes Beispiel: <em lang="it">la pèsca</em> (der Pfirsich) und <em lang="it">la pésca</em> (das Angeln) schreibt man gleich. Keine Sorge: In Mailand, Rom und Neapel sind sich nicht einmal die Italiener einig, und alle werden dich trotzdem verstehen.</p>',
    peach: 'la pèsca: der Pfirsich',
    fishing: 'la pésca: das Angeln',
  },
  cg: {
    h2: 'C und G: hart oder weich?',
    intro:
      '<p><em lang="it">C</em> und <em lang="it">g</em> haben zwei Laute. Es entscheidet der nächste Buchstabe: Vor <em lang="it">a</em>, <em lang="it">o</em>, <em lang="it">u</em> sind sie hart, vor <em lang="it">e</em> und <em lang="it">i</em> werden sie weich.</p>',
    cols: ['Man schreibt', 'Man hört', 'Beispiele'],
    sounds: {
      k: 'hart, wie <strong>k</strong> in „Katze“',
      c: 'weich, wie <strong>tsch</strong> in „tschüss“',
      g: 'hart, wie <strong>g</strong> in „gut“',
      j: 'weich, wie <strong>dsch</strong> in „Dschungel“',
    },
    tricks:
      '<p class="mini-note"><strong>Das H ist eine Mauer:</strong> Zwischen <em lang="it">c</em> und <em lang="it">e</em> oder <em lang="it">i</em> lässt es die Weichheit nicht durch. Deshalb bleiben <em lang="it">chiave</em> und <em lang="it">spaghetti</em> hart. Italienisches <em lang="it">ch</em> ist also immer ein <strong>k</strong>, nie das „ch“ aus „ich“ oder „Bach“.</p><p class="mini-note"><strong>Das I ist eine stumme Brücke:</strong> In <em lang="it">ciao</em>, <em lang="it">giallo</em> und <em lang="it">giorno</em> macht das <em lang="it">i</em> nur den Konsonanten weich. Man sagt nicht „tschi-ao“, sondern <em lang="it">ciao</em>, eine einzige Silbe: „tschau“.</p>',
    exH3: 'Übung 1 · Hart oder weich?',
    exP: 'Lies das Wort und wähle den Laut. Nach deiner Antwort hörst du, wie es ausgesprochen wird.',
    hard: 'Hart (casa, gatto)',
    soft: 'Weich (ciao, gelato)',
  },
  sounds: {
    h2: 'Die besonderen Laute',
    intro: '<p>Sieben Buchstabengruppen, die man kennen sollte. Hör dir die Wörter an und sprich sie laut nach.</p>',
    items: {
      gn: {
        title: '<em lang="it">gn</em> wie in <em lang="it">gnocchi</em>',
        text: 'Ein einziger Laut, wie <strong>gn</strong> in „Cognac“ oder „Champagner“: „Njokki“. Das <em lang="it">g</em> hört man nicht.',
        alt: 'Ein Teller Gnocchi mit Tomatensoße und Basilikum',
      },
      gli: {
        title: '<em lang="it">gli</em> wie in <em lang="it">aglio</em>',
        text: 'Ein weiches <strong>l</strong>, wie „lj“ in „Familie“ schnell gesprochen, aber als ein Laut: Die Zungenmitte drückt gegen den Gaumen. <em lang="it">Aglio</em> = „aljo“. Das <em lang="it">g</em> ist stumm.',
        alt: 'Eine Knolle Knoblauch',
      },
      sc: {
        title: '<em lang="it">sc</em> wie in <em lang="it">sciarpa</em>',
        text: 'Vor <em lang="it">e</em> und <em lang="it">i</em> ist es das deutsche <strong>sch</strong>: <em lang="it">scena</em> = „schena“, <em lang="it">pesce</em> = „pesche“. Vor <em lang="it">a</em>, <em lang="it">o</em>, <em lang="it">u</em> und mit <em lang="it">h</em> ist es „sk“: <em lang="it">scuola</em>, <em lang="it">schiena</em>.',
        alt: 'Ein roter Wollschal',
      },
      z: {
        title: '<em lang="it">z</em> wie in <em lang="it">pizza</em> und <em lang="it">zebra</em>',
        text: 'Das kennst du: <em lang="it">pizza</em> und <em lang="it">grazie</em> haben das <strong>z</strong> aus „Zeit“. Am Wortanfang ist es oft stimmhaft, „ds“: <em lang="it">zebra</em>, <em lang="it">zero</em>. Wenn du die beiden verwechselst, merkt es niemand: Es ändert sich von Region zu Region.',
        alt: 'Eine Pizza Marinara mit Tomaten, Knoblauch und Oregano',
      },
      s: {
        title: '<em lang="it">s</em> wie in <em lang="it">sole</em> und <em lang="it">rosa</em>',
        text: 'Am Wortanfang ist das <em lang="it">s</em> immer stimmlos, wie in „Haus“: <em lang="it">sole</em>, <em lang="it">sale</em>, nicht „Sonne“. Zwischen zwei Vokalen summt es im Norden wie in „Rose“: <em lang="it">rosa</em>, <em lang="it">casa</em>.',
        alt: 'Eine rosa Rose',
      },
      r: {
        title: '<em lang="it">r</em> wie in <em lang="it">rana</em>',
        text: 'Nicht im Rachen: Die Zungenspitze tippt hinter die oberen Zähne, wie das gerollte r in Bayern oder Österreich. Ein <em lang="it">r</em> ist ein Tipp (<em lang="it">caro</em>), <em lang="it">rr</em> ein kleiner Trommelwirbel (<em lang="it">carro</em>).',
        alt: 'Ein grüner Frosch',
      },
      h: {
        title: '<em lang="it">h</em>: der schüchterne Buchstabe',
        text: 'Er hat überhaupt keinen Laut. <em lang="it">Ho</em>, <em lang="it">hai</em>, <em lang="it">ha</em>, <em lang="it">hanno</em> liest man „o“, „ai“, „a“, „anno“. Er dient nur dazu, geschriebene Wörter zu unterscheiden und <em lang="it">c</em> und <em lang="it">g</em> hart zu machen.',
      },
    },
  },
  doubles: {
    h2: 'Doppelkonsonanten: der Sprung der Katze',
    intro:
      '<p>Ein Doppelkonsonant wird nicht nur zweimal geschrieben: Er wird länger gesprochen. Denk an eine Katze vor dem Sprung: Sie hält kurz inne, macht sich bereit… und springt. In <em lang="it">cassa</em> bleibt die Stimme auf dem <em lang="it">s</em> stehen, bevor sie weitergeht; in <em lang="it">casa</em> nicht.</p>',
    catAlt: 'Eine Katze, die geduckt am Rand einer Stufe sitzt, bereit zum Sprung',
    how: '<p class="mini-note"><strong>So geht’s:</strong> Im Deutschen zeigt ein Doppelkonsonant nur, dass der Vokal davor kurz ist („Ofen“ / „offen“). Diese Logik stimmt auch im Italienischen, aber der Konsonant selbst wird zusätzlich gehalten, wie in „Schiff<strong>f</strong>ahrt“ oder „Hand<strong>t</strong>uch“. Bei <em lang="it">tt</em>, <em lang="it">pp</em>, <em lang="it">cc</em> schließt sich der Mund und wartet einen Moment (<em lang="it">tutto</em>, <em lang="it">pappa</em>). Bei <em lang="it">ss</em>, <em lang="it">ll</em>, <em lang="it">nn</em>, <em lang="it">mm</em>, <em lang="it">rr</em> wird der Laut länger (<em lang="it">cassa</em>, <em lang="it">palla</em>, <em lang="it">nonno</em>).</p>',
    pairsH3: 'Ein Buchstabe ändert alles',
    anno: '<p class="mini-note"><strong>Vorsicht bei den Neujahrswünschen:</strong> An Silvester sagt man <em lang="it">Buon anno!</em> (Frohes neues Jahr), mit zwei <em lang="it">n</em>. Mit nur einem <em lang="it">n</em> wünschst du einem Körperteil Glück, den man bei Tisch nicht erwähnt. Die Italiener lachen, aber du: Zieh das <em lang="it">n</em> in die Länge!</p>',
    exH3: 'Übung 2 · Hör zu und wähle',
    exP: 'Drück auf ▶, hör zu und wähle das Wort, das du gehört hast. Mit „Neue Runde“ wählt die Seite andere Wörter.',
  },
  stress: {
    h2: 'Die Betonung: wo die Stimme landet',
    intro:
      '<p>In jedem Wort ist eine Silbe stärker als die anderen. Meist ist es die vorletzte, aber nicht immer. Der Akzent wird nur geschrieben, wenn er auf den letzten Vokal fällt. Und die unbetonten Silben bleiben klar: kein Murmel-e wie in „Lampe“.</p>',
    groups: {
      penult: 'Auf der vorletzten Silbe: fast alle Wörter',
      last: 'Auf der letzten: Der Akzent wird geschrieben',
      third: 'Auf der drittletzten: wenige Wörter, aber häufige',
    },
    anchorH3: 'Ein Akzent, zwei Wörter',
    anchor:
      '<p>Gleiche Buchstaben, andere Betonung: <em lang="it">l’àncora</em> ist der Anker des Schiffs, <em lang="it">ancóra</em> heißt „noch, wieder“. Und nenn deinen Papa, <em lang="it">papà</em>, nicht „<em lang="it">il papa</em>“: Der Papst wohnt im Vatikan!</p>',
    anchorShip: 'l’àncora: der Anker',
    anchorMore: 'ancóra: noch, wieder',
    papa: 'il papà: der Papa',
    capito:
      '<p class="mini-note"><strong>Der Champion:</strong> <em lang="it">càpito</em> (ich lande zufällig irgendwo), <em lang="it">capìto</em> (verstanden: <em lang="it">hai capito?</em>) und <em lang="it">capitò</em> (es geschah). Drei Wörter, dieselben Buchstaben.</p>',
    exH3: 'Übung 3 · Tippe auf die betonte Silbe',
    exP: 'Hör dir das Wort an und tippe auf die Silbe, auf der die Stimme landet.',
  },
  traps: {
    h2: 'Die Fallen für Deutschsprachige',
    intro:
      '<p>Jede Sprache stolpert an einer anderen Stelle. Das sind die sechs Gewohnheiten, die im Italienischen einen deutschen Akzent verraten, und wie du sie loswirst.</p>',
    easy: '<p class="mini-note"><strong>Die gute Nachricht:</strong> Das <strong>z</strong> aus „Zeit“ (<em lang="it">pizza</em>), das <strong>sch</strong> (<em lang="it">pesce</em>), das <strong>tsch</strong> (<em lang="it">ciao</em>) und das summende <strong>s</strong> aus „Rose“ hast du schon. Und die Regel „kurzer Vokal vor Doppelkonsonant“ kennst du aus dem Deutschen.</p>',
    items: [
      {
        title: 'V ist kein F',
        text: 'Im Deutschen ist „Vater“ ein F. Im Italienischen ist <em lang="it">v</em> immer stimmhaft, wie in „Vase“ oder „Wasser“: <em lang="it">vino</em> (Wein) ist nicht <em lang="it">fino</em> (fein), <em lang="it">voto</em> (Stimme) ist nicht <em lang="it">foto</em>.',
        words: ['vino', 'fino', 'voto', 'foto'],
      },
      {
        title: 'S am Anfang: zischen, nicht summen',
        text: '<em lang="it">Sole</em> beginnt wie „Haus“ endet, nicht wie „Sonne“. Und <em lang="it">st</em>, <em lang="it">sp</em> bleiben „s-t“, „s-p“: <em lang="it">studente</em>, <em lang="it">sport</em>, nie „Schtudente“.',
        words: ['sole', 'studente', 'sport'],
      },
      {
        title: 'Sch ist sk',
        text: 'Im Italienischen ist <em lang="it">sch</em> immer „sk“: <em lang="it">schiena</em> (Rücken) = „skiena“, <em lang="it">scherzo</em> = „skerzo“. Das deutsche „sch“ schreibt man <em lang="it">sci</em>, <em lang="it">sce</em>.',
        words: ['schiena', 'scherzo', 'scena'],
      },
      {
        title: 'Ch ist k',
        text: '<em lang="it">Chi</em> = „ki“, <em lang="it">anche</em> = „anke“, <em lang="it">Chianti</em> = „Kianti“. Nie das „ch“ aus „ich“.',
        words: ['chi', 'anche', 'Chianti'],
      },
      {
        title: 'Ei und eu getrennt',
        text: 'Jeder Vokal klingt für sich: <em lang="it">sei</em> = „se-i“, nicht „sai“; <em lang="it">Europa</em> = „e-u-ropa“, nicht „Oiropa“; <em lang="it">lei</em> = „le-i“.',
        words: ['sei', 'lei', 'Europa'],
      },
      {
        title: 'Das r wird gerollt und gesprochen',
        text: 'Kein Rachen-r und kein verschlucktes r am Ende: <em lang="it">per</em> ist nicht „pea“, <em lang="it">mare</em> ist nicht „Maare“. Die Zungenspitze tippt immer.',
        words: ['per', 'mare', 'Roma'],
      },
    ],
    exH3: 'Übung 4 · Fallenpaare',
    exP: 'Vier Paare mit <em lang="it">v</em> / <em lang="it">f</em>, fünf mit <em lang="it">c</em> / <em lang="it">ch</em> und <em lang="it">sc</em> / <em lang="it">sch</em>, eins mit einfachem und doppeltem Konsonanten. Hör zu und wähle.',
  },
  twisters: {
    h2: 'Zungenbrecher: Fitnessstudio für den Mund',
    intro:
      '<p><em lang="it">Gli scioglilingua</em> sind Sätze, die extra zum Stolpern gemacht sind, wie „Fischers Fritz fischt frische Fische“. Italiener sagen sie den Kindern, und alle lachen. Hör zu, sprich langsam nach und dann immer schneller. Nimm dich auf und vergleiche!</p>',
    notes: [
      '„Dreiunddreißig Trentiner kamen nach Trient, alle dreiunddreißig im Trab.“ Trainiert das <em lang="it">r</em> und das doppelte <em lang="it">t</em>: ein Trommelfeuer aus <em lang="it">tr</em>.',
      '„Apelles, Sohn des Apollo, machte einen Ball aus Hühnerhaut.“ Trainiert Doppelkonsonanten (<em lang="it">palla</em>, <em lang="it">pelle</em>, <em lang="it">pollo</em>) und den Laut <em lang="it">gli</em>.',
      '„Der Koch kocht in der Küche und sagt, dass die Köchin liegt und schweigt, weil ihre Cousine nicht kocht.“ Trainiert hartes und weiches <em lang="it">c</em>: <em lang="it">cuoco</em>, <em lang="it">cuoce</em>, <em lang="it">cucina</em>, <em lang="it">giace</em>.',
      '„Heiter ist es, heiter wird es sein; und wenn es nicht heiter ist, wird es sich aufheitern.“ Trainiert <em lang="it">s</em> und <em lang="it">r</em>: <em lang="it">sereno</em>, <em lang="it">rasserenerà</em>.',
    ],
    challenge:
      '<p class="mini-note"><strong>Die Herausforderung:</strong> Schaffst du den ersten dreimal hintereinander, schnell und ohne Fehler? Die meisten Italiener schaffen es nicht.</p>',
  },
  end: {
    h2: 'Dein Ergebnis',
    text: 'Die Hörübungen haben zusammen 44 Antworten. Wiederhole sie, so oft du willst: Die Wörter ändern sich in jeder Runde.',
  },
  meanings: {
    casa: 'Haus',
    cassa: 'Kasse',
    nono: 'neunter',
    nonno: 'Großvater',
    pala: 'Schaufel',
    palla: 'Ball',
    sete: 'Durst',
    sette: 'sieben',
    caro: 'teuer',
    carro: 'Karren',
    capello: 'ein Haar',
    cappello: 'Hut',
    pena: 'Mitleid',
    penna: 'Füller',
    sono: 'ich bin',
    sonno: 'Müdigkeit',
    rana: 'Frosch',
    lana: 'Wolle',
    mare: 'Meer',
    male: 'Schmerz',
    bacca: 'Beere',
    vacca: 'Kuh',
    vino: 'Wein',
    voto: 'Stimme (Wahl)',
    foto: 'Foto',
    alto: 'groß',
    auto: 'Auto',
    cane: 'Hund',
    cani: 'Hunde',
    chiave: 'Schlüssel',
    chiavi: 'Schlüssel (Mehrzahl)',
    pesche: 'Pfirsiche',
  },
};

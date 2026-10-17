// «La pronuncia italiana»: pagina polacca (registro «ty»). Trappole per chi parla polacco: c e ch, ci che
// non è ć, la h muta, l'accento che non è sempre sulla penultima, niente vocali nasali. Buone notizie:
// r, doppie, accento quasi sempre uguale, ń, cz, sz, dż.
export default {
  h1: 'Wymowa włoska',
  lead: 'Po włosku prawie zawsze czyta się tak, jak się pisze: wystarczy kilka zasad, żeby przeczytać na głos każde słowo. Tutaj nauczysz się ich, słuchając: pięć samogłosek, C i G, specjalne dźwięki, podwójne spółgłoski (<em lang="it">casa</em> czy <em lang="it">cassa</em>?), akcent, pułapki dla Polaków i cztery łamańce językowe do ćwiczenia.',
  description:
    'Wymowa włoska dla Polaków, z nagraniami: samogłoski, c i g, gn, gli, sc, z, podwójne spółgłoski (casa / cassa, nono / nonno), akcent i łamańce językowe. 44 ćwiczenia ze słuchu i nagrywanie własnego głosu dla porównania.',
  card: 'Samogłoski, C i G, podwójne spółgłoski (casa / cassa) i akcent, z nagraniami i ćwiczeniami ze słuchu.',
  heroAlt: 'Stary mikrofon na drewnianym stole przed oknem z widokiem na dachy włoskiego miasteczka',
  nav: {
    vocali: 'Samogłoski',
    cg: 'C i G',
    suoni: 'Specjalne dźwięki',
    doppie: 'Podwójne spółgłoski',
    accento: 'Akcent',
    trappole: 'Pułapki',
    scioglilingua: 'Łamańce językowe',
  },
  ui: {
    play: 'Posłuchaj',
    slow: 'Wolniej',
    record: 'Nagraj się',
    stop: 'Zatrzymaj',
    yours: 'Twój głos',
    micError: 'Mikrofon jest niedostępny: sprawdź uprawnienia przeglądarki.',
    correct: 'Dobrze!',
    wrong: 'Nie, to było:',
    listenFirst: 'Najpierw posłuchaj, potem wybierz.',
    score: '{n} z {t}',
    again: 'Nowa runda',
    total: 'Twój wynik',
    vs: 'czy',
  },
  how: {
    h2: 'Jak działa ta lekcja',
    html: '<p>Naciśnij <strong>▶</strong>, żeby usłyszeć słowo, a <strong>🐢</strong>, żeby usłyszeć je wolniej. W ćwiczeniach ze słuchu strona losuje słowo: posłuchaj i wybierz to, które usłyszałeś. Przyciskiem <strong>🎙 Nagraj się</strong> możesz nagrać swój głos i porównać go z wzorem: nagranie zostaje w twojej przeglądarce i nigdzie nie trafia.</p><p class="mini-note"><strong>Sekret włoskiego:</strong> tak jak w polskim, każda litera ma (prawie) zawsze ten sam dźwięk. Żadnych niemych liter-niespodzianek, oprócz jednej: <em lang="it">h</em>. Kto zna zasady z tej strony, przeczyta nawet słowa, których nigdy nie widział.</p>',
  },
  vowels: {
    h2: 'Pięć samogłosek: zawsze czyste, zawsze pełne',
    intro:
      '<p>Włoski ma pięć samogłosek i wymawia je zawsze wyraźnie. Nie ma <strong>y</strong>, <strong>ą</strong> ani <strong>ę</strong>. Popatrz na twarze: usta robią połowę roboty.</p>',
    cues: {
      a: {
        cue: 'Usta szeroko otwarte, jak u lekarza: „Proszę powiedzieć aaa”.',
        alt: 'Babcia szeroko otwiera usta jak u lekarza',
      },
      e: { cue: 'Usta do połowy, trochę rozciągnięte: „E? Co?”', alt: 'Chłopak mówi „e?” z lekko otwartymi ustami' },
      i: {
        cue: 'Uśmiech do zdjęcia: usta się rozciągają, jak przy „ser”.',
        alt: 'Dziewczynka uśmiecha się szeroko jak do zdjęcia',
      },
      o: { cue: 'Okrągłe usta, jak przy zdziwieniu: „O!”', alt: 'Młoda kobieta mówi „o!” z zaokrąglonymi ustami' },
      u: { cue: 'Usta do przodu, jak sowa: „Uuu”.', alt: 'Brodaty pan robi „uuu” jak sowa' },
    },
    finalH3: 'Ostatnią samogłoskę też słychać',
    final:
      '<p>Po włosku samogłoski na końcu słowa nigdy się nie połyka: <em lang="it">pizz<strong>a</strong></em>, <em lang="it">Rom<strong>a</strong></em>, <em lang="it">gelat<strong>o</strong></em>, <em lang="it">nott<strong>e</strong></em>. Często to właśnie ona mówi, czy rzecz jest jedna, czy jest ich wiele (<em lang="it">la pizza</em>, <em lang="it">le pizze</em>), albo czy słowo jest rodzaju męskiego, czy żeńskiego.</p>',
    eoH3: 'Bonus dla ciekawskich: E i O mają dwa głosy',
    eo: '<p><em lang="it">E</em> i <em lang="it">o</em> mogą być otwarte albo zamknięte. Słynny przykład: <em lang="it">la pèsca</em> (brzoskwinia) i <em lang="it">la pésca</em> (wędkowanie) pisze się tak samo. Spokojnie: w Mediolanie, Rzymie i Neapolu nawet Włosi się nie zgadzają, a zrozumie cię każdy.</p>',
    peach: 'la pèsca: brzoskwinia',
    fishing: 'la pésca: wędkowanie',
  },
  cg: {
    h2: 'C i G: twarde czy miękkie?',
    intro:
      '<p>Włoskie <em lang="it">c</em> i <em lang="it">g</em> mają po dwa dźwięki, i żaden nie jest polskim „c”. Decyduje następna litera: przed <em lang="it">a</em>, <em lang="it">o</em>, <em lang="it">u</em> są twarde, przed <em lang="it">e</em> i <em lang="it">i</em> robią się miękkie.</p>',
    cols: ['Pisze się', 'Słychać', 'Przykłady'],
    sounds: {
      k: 'twardo, jak <strong>k</strong> w „kot”',
      c: 'miękko, jak <strong>cz</strong> w „czas”',
      g: 'twardo, jak <strong>g</strong> w „góra”',
      j: 'miękko, jak <strong>dż</strong> w „dżem”',
    },
    tricks:
      '<p class="mini-note"><strong>H to mur:</strong> postawione między <em lang="it">c</em> a <em lang="it">e</em> lub <em lang="it">i</em>, nie przepuszcza miękkości. Dlatego <em lang="it">chiave</em> i <em lang="it">spaghetti</em> zostają twarde. Włoskie <em lang="it">ch</em> to więc zawsze <strong>k</strong>, nigdy polskie „ch”.</p><p class="mini-note"><strong>I to niemy mostek:</strong> w <em lang="it">ciao</em>, <em lang="it">giallo</em> i <em lang="it">giorno</em> litera <em lang="it">i</em> służy tylko do zmiękczenia spółgłoski. Nie mówi się „czi-ao”, tylko <em lang="it">ciao</em>, jedna sylaba: „czao”.</p>',
    exH3: 'Ćwiczenie 1 · Twarde czy miękkie?',
    exP: 'Przeczytaj słowo i wybierz dźwięk. Po odpowiedzi usłyszysz, jak się je wymawia.',
    hard: 'Twarde (casa, gatto)',
    soft: 'Miękkie (ciao, gelato)',
  },
  sounds: {
    h2: 'Specjalne dźwięki',
    intro: '<p>Siedem grup liter, które warto znać. Posłuchaj słów i powtórz je na głos.</p>',
    items: {
      gn: {
        title: '<em lang="it">gn</em> jak w <em lang="it">gnocchi</em>',
        text: 'To twoje <strong>ń</strong>! <em lang="it">Spagna</em> = „Spania”, <em lang="it">bagno</em> = „bańo”. <em lang="it">G</em> nie słychać.',
        alt: 'Talerz kopytek gnocchi z sosem pomidorowym i bazylią',
      },
      gli: {
        title: '<em lang="it">gli</em> jak w <em lang="it">aglio</em>',
        text: 'Miękkie <strong>l</strong>, jak w „liść” wymówionym bardzo miękko: środek języka dotyka podniebienia. <em lang="it">Aglio</em> = „alio”, <em lang="it">figlio</em> = „filio”. <em lang="it">G</em> nie słychać.',
        alt: 'Główka czosnku',
      },
      sc: {
        title: '<em lang="it">sc</em> jak w <em lang="it">sciarpa</em>',
        text: 'Przed <em lang="it">e</em> i <em lang="it">i</em> to <strong>sz</strong>: <em lang="it">scena</em> = „szena”, <em lang="it">pesce</em> = „pesze”. Przed <em lang="it">a</em>, <em lang="it">o</em>, <em lang="it">u</em> i z <em lang="it">h</em> to „sk”: <em lang="it">scuola</em>, <em lang="it">schiena</em>.',
        alt: 'Czerwony wełniany szalik',
      },
      z: {
        title: '<em lang="it">z</em> jak w <em lang="it">pizza</em> i <em lang="it">zebra</em>',
        text: 'Włoskie <em lang="it">z</em> to twoje <strong>c</strong> albo <strong>dz</strong>: <em lang="it">pizza</em> = „pica”, <em lang="it">grazie</em> = „gracje”, <em lang="it">zebra</em> = „dzebra”, <em lang="it">zero</em> = „dzero”. Nigdy polskie „z”. Jeśli pomylisz te dwa dźwięki, nikt nie zauważy: to zależy od regionu.',
        alt: 'Pizza marinara z pomidorami, czosnkiem i oregano',
      },
      s: {
        title: '<em lang="it">s</em> jak w <em lang="it">sole</em> i <em lang="it">rosa</em>',
        text: 'Na początku słowa to polskie <strong>s</strong>: <em lang="it">sole</em>, <em lang="it">sale</em>. Między samogłoskami na północy Włoch brzmi jak <strong>z</strong>: <em lang="it">rosa</em> = „roza”, <em lang="it">casa</em> = „kaza”.',
        alt: 'Różowa róża',
      },
      r: {
        title: '<em lang="it">r</em> jak w <em lang="it">rana</em>',
        text: 'To umiesz! To samo <strong>r</strong> co po polsku: pojedyncze <em lang="it">r</em> to jedno uderzenie języka (<em lang="it">caro</em>), podwójne <em lang="it">rr</em> to dłuższa wibracja (<em lang="it">carro</em>).',
        alt: 'Zielona żaba',
      },
      h: {
        title: '<em lang="it">h</em>: nieśmiała litera',
        text: 'Nie ma żadnego dźwięku, w przeciwieństwie do polskiego h. <em lang="it">Ho</em>, <em lang="it">hai</em>, <em lang="it">ha</em>, <em lang="it">hanno</em> czyta się „o”, „aj”, „a”, „anno”. Służy tylko do rozróżniania pisanych słów i do utwardzania <em lang="it">c</em> i <em lang="it">g</em>.',
      },
    },
  },
  doubles: {
    h2: 'Podwójne spółgłoski: skok kota',
    intro:
      '<p>Podwójną spółgłoskę nie tylko pisze się dwa razy: wymawia się ją dłużej. Pomyśl o kocie przed skokiem: na chwilę się zatrzymuje, przygotowuje… i skacze. W <em lang="it">cassa</em> głos zatrzymuje się na <em lang="it">s</em>, zanim pójdzie dalej; w <em lang="it">casa</em> nie.</p>',
    catAlt: 'Kot przyczajony na brzegu stopnia, gotowy do skoku',
    how: '<p class="mini-note"><strong>Jak to zrobić:</strong> znasz to z polskiego! „A<strong>nn</strong>a”, „le<strong>kk</strong>i”, „wa<strong>nn</strong>a”: tak samo brzmi włoskie <em lang="it">nonno</em>. Przy <em lang="it">tt</em>, <em lang="it">pp</em>, <em lang="it">cc</em> usta się zamykają i chwilę czekają (<em lang="it">tutto</em>, <em lang="it">pappa</em>). Przy <em lang="it">ss</em>, <em lang="it">ll</em>, <em lang="it">nn</em>, <em lang="it">mm</em>, <em lang="it">rr</em> dźwięk się wydłuża (<em lang="it">cassa</em>, <em lang="it">palla</em>, <em lang="it">nonno</em>). A samogłoska przed podwójną spółgłoską robi się krótsza.</p>',
    pairsH3: 'Jedna litera zmienia wszystko',
    anno: '<p class="mini-note"><strong>Uwaga na noworoczne życzenia:</strong> w sylwestra mówi się <em lang="it">Buon anno!</em> (szczęśliwego Nowego Roku), z dwoma <em lang="it">n</em>. Z jednym <em lang="it">n</em> życzysz szczęścia… części ciała, o której nie mówi się przy stole. Włosi się śmieją, ale ty: przeciągnij to <em lang="it">n</em>!</p>',
    exH3: 'Ćwiczenie 2 · Posłuchaj i wybierz',
    exP: 'Naciśnij ▶, posłuchaj i wybierz słowo, które usłyszałeś. Przyciskiem „Nowa runda” strona wylosuje inne słowa.',
  },
  stress: {
    h2: 'Akcent: gdzie uderza głos',
    intro:
      '<p>Dobra wiadomość: jak po polsku, akcent pada zwykle na przedostatnią sylabę. Ale nie zawsze: czasem na ostatnią, czasem na trzecią od końca. Kreskę pisze się tylko wtedy, gdy akcent pada na ostatnią samogłoskę.</p>',
    groups: {
      penult: 'Na przedostatniej sylabie: prawie wszystkie słowa',
      last: 'Na ostatniej: pisze się akcent',
      third: 'Na trzeciej od końca: niewiele słów, ale częstych',
    },
    anchorH3: 'Jeden akcent, dwa słowa',
    anchor:
      '<p>Te same litery, inny akcent: <em lang="it">l’àncora</em> to kotwica statku, <em lang="it">ancóra</em> znaczy „jeszcze, znowu”. I nie nazywaj taty, <em lang="it">papà</em>, „<em lang="it">il papa</em>”: papież mieszka w Watykanie!</p>',
    anchorShip: 'l’àncora: kotwica',
    anchorMore: 'ancóra: jeszcze, znowu',
    papa: 'il papà: tata',
    capito:
      '<p class="mini-note"><strong>Mistrz:</strong> <em lang="it">càpito</em> (trafiam gdzieś przypadkiem), <em lang="it">capìto</em> (zrozumiano: <em lang="it">hai capito?</em>) i <em lang="it">capitò</em> (zdarzyło się). Trzy słowa, te same litery.</p>',
    exH3: 'Ćwiczenie 3 · Dotknij akcentowanej sylaby',
    exP: 'Posłuchaj słowa i dotknij sylaby, na którą pada akcent.',
  },
  traps: {
    h2: 'Pułapki dla Polaków',
    intro:
      '<p>Każdy język potyka się w innym miejscu. Oto pięć nawyków, które po włosku zdradzają polski akcent, i jak je poprawić.</p>',
    easy: '<p class="mini-note"><strong>Dobra wiadomość:</strong> masz przewagę. Akcent zwykle na przedostatniej, <strong>r</strong>, podwójne spółgłoski, <strong>ń</strong> (<em lang="it">gn</em>), <strong>cz</strong> (<em lang="it">ci</em>), <strong>sz</strong> (<em lang="it">sci</em>) i <strong>dż</strong> (<em lang="it">gi</em>) już znasz. A <em lang="it">vino</em> to po prostu „wino”!</p>',
    items: [
      {
        title: 'C i ch nie są polskie',
        text: 'Włoskie <em lang="it">ci</em>, <em lang="it">ce</em> to „czi”, „cze”: <em lang="it">ciao</em> = „czao”, <em lang="it">cena</em> = „czena”. A <em lang="it">ch</em> to zawsze <strong>k</strong>: <em lang="it">chi</em> = „ki”, nigdy „chi”.',
        words: ['ciao', 'cena', 'chi'],
      },
      {
        title: 'Ci to nie ć',
        text: 'Polskie „ci” jest miękkie jak w „ciasto”; włoskie <em lang="it">ci</em> jest twardsze, jak „czy” w „czyste”, tylko z <strong>i</strong>: <em lang="it">cinema</em> = „czinema”, <em lang="it">dieci</em> = „dieczi”.',
        words: ['cinema', 'dieci', 'cibo'],
      },
      {
        title: 'H milczy',
        text: 'Polskie <strong>h</strong> słychać, włoskiego nie ma wcale: <em lang="it">hotel</em> = „otel”, <em lang="it">ho fame</em> = „o fame” (jestem głodny).',
        words: ['hotel', 'ho fame', 'hanno ragione'],
      },
      {
        title: 'Akcent nie zawsze na przedostatniej',
        text: 'Słowa z kreską mają akcent na końcu: <em lang="it">città</em> = „czit-TA”, <em lang="it">perché</em>. A niektóre na trzeciej sylabie od końca: <em lang="it">telefono</em> = „teLEfono”, nie „teleFOno”.',
        words: ['città', 'perché', 'telefono'],
      },
      {
        title: 'Bez samogłosek nosowych',
        text: 'Włoskie <em lang="it">e</em> i <em lang="it">o</em> przed <em lang="it">n</em> i <em lang="it">m</em> nie stają się „ę” ani „ą”: <em lang="it">tempo</em> = „tem-po”, <em lang="it">con</em> = „kon”, a <em lang="it">n</em> słychać wyraźnie.',
        words: ['tempo', 'con', 'mondo'],
      },
    ],
    exH3: 'Ćwiczenie 4 · Podchwytliwe pary',
    exP: 'Pięć par z <em lang="it">c</em> / <em lang="it">ch</em> i <em lang="it">sc</em> / <em lang="it">sch</em>, pięć z pojedynczą i podwójną spółgłoską. Posłuchaj i wybierz.',
  },
  twisters: {
    h2: 'Łamańce językowe: siłownia dla ust',
    intro:
      '<p><em lang="it">Gli scioglilingua</em> to zdania wymyślone specjalnie po to, żeby się na nich potknąć, jak polskie „W Szczebrzeszynie chrząszcz brzmi w trzcinie”. Włosi mówią je dzieciom i wszyscy się śmieją. Posłuchaj, powtórz powoli, a potem coraz szybciej. Nagraj się i porównaj!</p>',
    notes: [
      '„Trzydziestu trzech mieszkańców Trydentu weszło do Trydentu, wszyscy trzydziestu trzech truchtem.” Ćwiczy <em lang="it">r</em> i podwójne <em lang="it">t</em>: seria <em lang="it">tr</em>.',
      '„Apelles, syn Apolla, zrobił piłkę ze skóry kurczaka.” Ćwiczy podwójne spółgłoski (<em lang="it">palla</em>, <em lang="it">pelle</em>, <em lang="it">pollo</em>) i dźwięk <em lang="it">gli</em>.',
      '„Kucharz gotuje w kuchni i mówi, że kucharka leży i milczy, bo jej kuzynka nie gotuje.” Ćwiczy twarde i miękkie <em lang="it">c</em>: <em lang="it">cuoco</em>, <em lang="it">cuoce</em>, <em lang="it">cucina</em>, <em lang="it">giace</em>.',
      '„Pogodnie jest, pogodnie będzie, a jeśli pogodnie nie będzie, to się wypogodzi.” Ćwiczy <em lang="it">s</em> i <em lang="it">r</em>: <em lang="it">sereno</em>, <em lang="it">rasserenerà</em>.',
    ],
    challenge:
      '<p class="mini-note"><strong>Wyzwanie:</strong> czy dasz radę powiedzieć pierwszy trzy razy z rzędu, szybko i bez błędu? Większości Włochów się to nie udaje.</p>',
  },
  end: {
    h2: 'Twój wynik',
    text: 'Ćwiczenia ze słuchu mają razem 44 odpowiedzi. Powtarzaj je, kiedy chcesz: słowa zmieniają się w każdej rundzie.',
  },
  meanings: {
    casa: 'dom',
    cassa: 'kasa',
    nono: 'dziewiąty',
    nonno: 'dziadek',
    pala: 'łopata',
    palla: 'piłka',
    sete: 'pragnienie',
    sette: 'siedem',
    caro: 'drogi',
    carro: 'wóz',
    capello: 'jeden włos',
    cappello: 'kapelusz',
    pena: 'litość',
    penna: 'pióro',
    sono: 'jestem',
    sonno: 'senność',
    rana: 'żaba',
    lana: 'wełna',
    mare: 'morze',
    male: 'ból',
    bacca: 'jagoda',
    vacca: 'krowa',
    vino: 'wino',
    voto: 'głos w wyborach',
    foto: 'zdjęcie',
    alto: 'wysoki',
    auto: 'samochód',
    cane: 'pies',
    cani: 'psy',
    chiave: 'klucz',
    chiavi: 'klucze',
    pesche: 'brzoskwinie',
  },
};

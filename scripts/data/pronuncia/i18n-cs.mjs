// «La pronuncia italiana»: pagina ceca (registro «vy»). Trappole per chi parla ceco: c e ch, la z che è
// la c ceca, la h muta, l'accento che non sta sulla prima sillaba, le doppie. Buone notizie: r, ň, vocali.
export default {
  h1: 'Italská výslovnost',
  lead: 'Italština se skoro vždycky čte tak, jak se píše: stačí pár pravidel a přečtete nahlas jakékoli slovo. Tady se je naučíte poslechem: pět samohlásek, C a G, zvláštní hlásky, zdvojené souhlásky (<em lang="it">casa</em>, nebo <em lang="it">cassa</em>?), přízvuk, pasti pro Čechy a čtyři jazykolamy na trénink.',
  description:
    'Italská výslovnost pro Čechy, se zvukem: samohlásky, c a g, gn, gli, sc, z, zdvojené souhlásky (casa / cassa, nono / nonno), přízvuk a jazykolamy. 44 poslechových cvičení a nahrávání vlastního hlasu pro srovnání.',
  card: 'Samohlásky, C a G, zdvojené souhlásky (casa / cassa) a přízvuk, se zvukem a poslechovými cvičeními.',
  heroAlt: 'Starý mikrofon na dřevěném stole před oknem s výhledem na střechy italského městečka',
  nav: {
    vocali: 'Samohlásky',
    cg: 'C a G',
    suoni: 'Zvláštní hlásky',
    doppie: 'Zdvojené souhlásky',
    accento: 'Přízvuk',
    trappole: 'Pasti',
    scioglilingua: 'Jazykolamy',
  },
  ui: {
    play: 'Poslechnout',
    slow: 'Pomaleji',
    record: 'Nahrajte se',
    stop: 'Zastavit',
    yours: 'Váš hlas',
    micError: 'Mikrofon není dostupný: zkontrolujte oprávnění v prohlížeči.',
    correct: 'Správně!',
    wrong: 'Ne, bylo to:',
    listenFirst: 'Nejdřív poslouchejte, pak vyberte.',
    score: '{n} z {t}',
    again: 'Nové kolo',
    total: 'Váš výsledek',
    vs: 'nebo',
  },
  how: {
    h2: 'Jak tato lekce funguje',
    html: '<p>Stiskněte <strong>▶</strong> a uslyšíte slovo, s <strong>🐢</strong> ho uslyšíte pomaleji. V poslechových cvičeních stránka vybere slovo náhodně: poslechněte si ho a zvolte, které jste slyšeli. Tlačítkem <strong>🎙 Nahrajte se</strong> nahrajete svůj hlas a porovnáte ho s ukázkou: nahrávka zůstane ve vašem prohlížeči a nikam se neposílá.</p><p class="mini-note"><strong>Tajemství italštiny:</strong> stejně jako v češtině má každé písmeno (skoro) vždycky stejný zvuk. Žádná překvapivě němá písmena, kromě jednoho: <em lang="it">h</em>. Kdo zná pravidla z této stránky, přečte i slova, která nikdy neviděl.</p>',
  },
  vowels: {
    h2: 'Pět samohlásek: vždy čistých a celých',
    intro:
      '<p>Dobrá zpráva: italské samohlásky jsou skoro stejné jako české, jasné a bez přechodu do jiného zvuku. Nemají ale dlouhé verze: žádné á ani í. Podívejte se na obličeje: pusa udělá polovinu práce.</p>',
    cues: {
      a: { cue: 'Pusa dokořán, jako u doktora: „Řekněte áá“.', alt: 'Babička otevírá pusu dokořán jako u doktora' },
      e: { cue: 'Pusa napůl otevřená, trochu do šířky: „Hm? Cože?“', alt: 'Mladík říká „e?“ s pootevřenou pusou' },
      i: { cue: 'Úsměv na fotku: rty se roztáhnou, jako při „sýr“.', alt: 'Holčička se široce usmívá jako na fotku' },
      o: { cue: 'Kulaté rty jako při překvapení: „Ó!“', alt: 'Mladá žena říká „ó!“ s kulatými rty' },
      u: { cue: 'Rty dopředu jako sova: „Úúú“.', alt: 'Pán s vousy dělá „úúú“ jako sova' },
    },
    finalH3: 'Poslední samohláska je slyšet taky',
    final:
      '<p>V italštině se samohláska na konci slova nikdy nepolyká: <em lang="it">pizz<strong>a</strong></em>, <em lang="it">Rom<strong>a</strong></em>, <em lang="it">gelat<strong>o</strong></em>, <em lang="it">nott<strong>e</strong></em>. Často právě ona říká, jestli je věc jedna, nebo jich je víc (<em lang="it">la pizza</em>, <em lang="it">le pizze</em>), nebo jestli je slovo mužského, či ženského rodu.</p>',
    eoH3: 'Bonus pro zvídavé: E a O mají dva hlasy',
    eo: '<p><em lang="it">E</em> a <em lang="it">o</em> mohou být otevřené, nebo zavřené. Slavný příklad: <em lang="it">la pèsca</em> (broskev) a <em lang="it">la pésca</em> (rybaření) se píšou stejně. Nebojte se: v Miláně, Římě a Neapoli se neshodnou ani sami Italové a rozumět vám budou všichni.</p>',
    peach: 'la pèsca: broskev',
    fishing: 'la pésca: rybaření',
  },
  cg: {
    h2: 'C a G: tvrdé, nebo měkké?',
    intro:
      '<p>Italské <em lang="it">c</em> a <em lang="it">g</em> mají dva zvuky a ani jeden není české „c“. Rozhoduje písmeno, které následuje: před <em lang="it">a</em>, <em lang="it">o</em>, <em lang="it">u</em> jsou tvrdé, před <em lang="it">e</em> a <em lang="it">i</em> změkčí.</p>',
    cols: ['Píše se', 'Zní', 'Příklady'],
    sounds: {
      k: 'tvrdě, jako <strong>k</strong> v „kočka“',
      c: 'měkce, jako <strong>č</strong> v „čaj“',
      g: 'tvrdě, jako <strong>g</strong> v „guma“',
      j: 'měkce, jako <strong>dž</strong> v „džus“',
    },
    tricks:
      '<p class="mini-note"><strong>H je zeď:</strong> když stojí mezi <em lang="it">c</em> a <em lang="it">e</em> nebo <em lang="it">i</em>, nepustí měkkost dál. Proto <em lang="it">chiave</em> a <em lang="it">spaghetti</em> zůstávají tvrdé. Italské <em lang="it">ch</em> je tedy vždycky <strong>k</strong>, nikdy české „ch“.</p><p class="mini-note"><strong>I je neslyšný most:</strong> v <em lang="it">ciao</em>, <em lang="it">giallo</em> a <em lang="it">giorno</em> slouží <em lang="it">i</em> jen ke změkčení souhlásky. Neříká se „či-ao“, ale <em lang="it">ciao</em>, jedna slabika: „čao“.</p>',
    exH3: 'Cvičení 1 · Tvrdé, nebo měkké?',
    exP: 'Přečtěte slovo a zvolte zvuk. Po odpovědi uslyšíte, jak se vyslovuje.',
    hard: 'Tvrdé (casa, gatto)',
    soft: 'Měkké (ciao, gelato)',
  },
  sounds: {
    h2: 'Zvláštní hlásky',
    intro: '<p>Sedm skupin písmen, které je dobré znát. Poslechněte si slova a opakujte je nahlas.</p>',
    items: {
      gn: {
        title: '<em lang="it">gn</em> jako v <em lang="it">gnocchi</em>',
        text: 'To je vaše <strong>ň</strong>! <em lang="it">Spagna</em> = „Spaňa“, <em lang="it">bagno</em> = „baňo“. <em lang="it">G</em> není slyšet.',
        alt: 'Talíř noků s rajčatovou omáčkou a bazalkou',
      },
      gli: {
        title: '<em lang="it">gli</em> jako v <em lang="it">aglio</em>',
        text: 'Měkké <strong>l</strong>, jako slovenské <strong>ľ</strong>: střed jazyka se opře o patro. <em lang="it">Aglio</em> = „aľo“, <em lang="it">figlio</em> = „fiľo“. <em lang="it">G</em> není slyšet.',
        alt: 'Hlavička česneku',
      },
      sc: {
        title: '<em lang="it">sc</em> jako v <em lang="it">sciarpa</em>',
        text: 'Před <em lang="it">e</em> a <em lang="it">i</em> je to <strong>š</strong>: <em lang="it">scena</em> = „šena“, <em lang="it">pesce</em> = „peše“. Před <em lang="it">a</em>, <em lang="it">o</em>, <em lang="it">u</em> a s <em lang="it">h</em> je to „sk“: <em lang="it">scuola</em>, <em lang="it">schiena</em>.',
        alt: 'Červená vlněná šála',
      },
      z: {
        title: '<em lang="it">z</em> jako v <em lang="it">pizza</em> a <em lang="it">zebra</em>',
        text: 'Italské <em lang="it">z</em> je vaše <strong>c</strong>! <em lang="it">Pizza</em> = „pica“, <em lang="it">grazie</em> = „gracie“. Na začátku slova bývá znělé, „dz“: <em lang="it">zebra</em>, <em lang="it">zero</em>. Když je spletete, nikdo si toho nevšimne: liší se to podle regionu.',
        alt: 'Pizza marinara s rajčaty, česnekem a oreganem',
      },
      s: {
        title: '<em lang="it">s</em> jako v <em lang="it">sole</em> a <em lang="it">rosa</em>',
        text: 'Na začátku slova je to české <strong>s</strong>: <em lang="it">sole</em>, <em lang="it">sale</em>. Mezi dvěma samohláskami zní na severu Itálie jako <strong>z</strong>: <em lang="it">rosa</em> = „roza“, <em lang="it">casa</em> = „kaza“.',
        alt: 'Růžová růže',
      },
      r: {
        title: '<em lang="it">r</em> jako v <em lang="it">rana</em>',
        text: 'Tohle umíte! Stejné <strong>r</strong> jako v češtině: jednoduché <em lang="it">r</em> je jeden úder jazyka (<em lang="it">caro</em>), zdvojené <em lang="it">rr</em> je delší vibrace (<em lang="it">carro</em>). A žádné ř.',
        alt: 'Zelená žába',
      },
      h: {
        title: '<em lang="it">h</em>: plaché písmeno',
        text: 'Nemá vůbec žádný zvuk, na rozdíl od českého h. <em lang="it">Ho</em>, <em lang="it">hai</em>, <em lang="it">ha</em>, <em lang="it">hanno</em> se čtou „o“, „aj“, „a“, „anno“. Slouží jen k rozlišení psaných slov a ke ztvrdnutí <em lang="it">c</em> a <em lang="it">g</em>.',
      },
    },
  },
  doubles: {
    h2: 'Zdvojené souhlásky: kočičí skok',
    intro:
      '<p>Zdvojená souhláska se nejen píše dvakrát: vyslovuje se déle. Představte si kočku před skokem: na chvilku se zastaví, připraví se… a skočí. V <em lang="it">cassa</em> se hlas na <em lang="it">s</em> zastaví, než pokračuje; v <em lang="it">casa</em> ne.</p>',
    catAlt: 'Kočka přikrčená na okraji schodu, připravená ke skoku',
    how: '<p class="mini-note"><strong>Jak na to:</strong> čeština má délku u samohlásek (<em>á</em>, <em>í</em>), italština u souhlásek. Dlouhou souhlásku ale znáte i z češtiny: „mě<strong>kk</strong>ý“, „o<strong>dd</strong>ělit“, „ne<strong>jj</strong>asnější“. U <em lang="it">tt</em>, <em lang="it">pp</em>, <em lang="it">cc</em> se pusa zavře a chvilku čeká (<em lang="it">tutto</em>, <em lang="it">pappa</em>). U <em lang="it">ss</em>, <em lang="it">ll</em>, <em lang="it">nn</em>, <em lang="it">mm</em>, <em lang="it">rr</em> se zvuk protáhne (<em lang="it">cassa</em>, <em lang="it">palla</em>, <em lang="it">nonno</em>). A samohláska před zdvojenou souhláskou je kratší.</p>',
    pairsH3: 'Jedno písmeno změní všechno',
    anno: '<p class="mini-note"><strong>Pozor na novoroční přání:</strong> na Silvestra se říká <em lang="it">Buon anno!</em> (šťastný nový rok), se dvěma <em lang="it">n</em>. S jedním <em lang="it">n</em> přejete štěstí… části těla, o které se u stolu nemluví. Italové se zasmějí, ale vy: protáhněte to <em lang="it">n</em>!</p>',
    exH3: 'Cvičení 2 · Poslechněte si a vyberte',
    exP: 'Stiskněte ▶, poslechněte si slovo a vyberte, které jste slyšeli. Tlačítkem „Nové kolo“ stránka vybere jiná slova.',
  },
  stress: {
    h2: 'Přízvuk: kam dopadne hlas',
    intro:
      '<p>V češtině je přízvuk vždycky na první slabice. V italštině ne: většinou je na předposlední, někdy na poslední nebo na třetí od konce. Znaménko se píše jen tehdy, když přízvuk padne na poslední samohlásku, a neznamená délku.</p>',
    groups: {
      penult: 'Na předposlední slabice: skoro všechna slova',
      last: 'Na poslední: píše se znaménko',
      third: 'Na třetí od konce: málo slov, ale častých',
    },
    anchorH3: 'Jeden přízvuk, dvě slova',
    anchor:
      '<p>Stejná písmena, jiný přízvuk: <em lang="it">l’àncora</em> je kotva lodi, <em lang="it">ancóra</em> znamená „ještě, znovu“. A neříkejte tátovi, <em lang="it">papà</em>, „<em lang="it">il papa</em>“: papež bydlí ve Vatikánu!</p>',
    anchorShip: 'l’àncora: kotva',
    anchorMore: 'ancóra: ještě, znovu',
    papa: 'il papà: táta',
    capito:
      '<p class="mini-note"><strong>Šampion:</strong> <em lang="it">càpito</em> (náhodou se někde ocitnu), <em lang="it">capìto</em> (pochopeno: <em lang="it">hai capito?</em>) a <em lang="it">capitò</em> (stalo se). Tři slova, stejná písmena.</p>',
    exH3: 'Cvičení 3 · Klepněte na přízvučnou slabiku',
    exP: 'Poslechněte si slovo a klepněte na slabiku, na kterou dopadá hlas.',
  },
  traps: {
    h2: 'Pasti pro Čechy',
    intro:
      '<p>Každý jazyk klopýtá jinde. Tohle je pět zvyků, které v italštině prozradí český přízvuk, a jak je napravit.</p>',
    easy: '<p class="mini-note"><strong>Dobrá zpráva:</strong> máte náskok. Samohlásky, válené <strong>r</strong>, <strong>ň</strong> (<em lang="it">gn</em>), <strong>č</strong> (<em lang="it">ci</em>), <strong>š</strong> (<em lang="it">sci</em>) a <strong>c</strong> (<em lang="it">zz</em>) už znáte. Italové vám budou závidět, že umíte vyslovit „strč prst skrz krk“.</p>',
    items: [
      {
        title: 'C a ch nejsou česká',
        text: 'Italské <em lang="it">ci</em>, <em lang="it">ce</em> je „či“, „če“: <em lang="it">ciao</em>, <em lang="it">cena</em> = „čena“. A <em lang="it">ch</em> je vždycky <strong>k</strong>: <em lang="it">chi</em> = „ki“, nikdy „chi“.',
        words: ['ciao', 'cena', 'chi'],
      },
      {
        title: 'Z je vaše c',
        text: '<em lang="it">Pizza</em> čtěte „pica“, <em lang="it">grazie</em> „gracie“, <em lang="it">zucchero</em> „dzukero“. Nikdy české „z“ ze slova „zima“.',
        words: ['pizza', 'grazie', 'zucchero'],
      },
      {
        title: 'H mlčí',
        text: 'České <strong>h</strong> je znělé, italské vůbec neexistuje: <em lang="it">hotel</em> = „otel“, <em lang="it">ho fame</em> = „o fame“ (mám hlad).',
        words: ['hotel', 'ho fame', 'hanno ragione'],
      },
      {
        title: 'Přízvuk není na začátku',
        text: 'Nemluvte „Amico, BAnana“: italsky se říká <em lang="it">aMIco</em>, <em lang="it">baNAna</em>, <em lang="it">raGAZza</em>. Zkuste slovo ťukat prstem: silný úder až na předposlední slabice.',
        words: ['amico', 'banana', 'ragazza'],
      },
      {
        title: 'Délka patří souhláskám',
        text: 'Čeština prodlužuje samohlásky, italština souhlásky. <em lang="it">Nono</em> (devátý) a <em lang="it">nonno</em> (děda) se liší jen délkou <em lang="it">n</em>. A pozor: italské samohlásky nikdy neprodlužujte, ani pod přízvukem moc ne.',
        words: ['nonno', 'sette', 'palla'],
      },
    ],
    exH3: 'Cvičení 4 · Záludné dvojice',
    exP: 'Pět dvojic s <em lang="it">c</em> / <em lang="it">ch</em> a <em lang="it">sc</em> / <em lang="it">sch</em>, pět s jednoduchou a zdvojenou souhláskou. Poslechněte si a vyberte.',
  },
  twisters: {
    h2: 'Jazykolamy: posilovna pro pusu',
    intro:
      '<p><em lang="it">Gli scioglilingua</em> jsou věty schválně vymyšlené tak, aby se na nich klopýtalo, jako české „Třistatřicettři stříbrných stříkaček“. Italové je říkají dětem a všichni se smějí. Poslechněte si je, opakujte pomalu a pak stále rychleji. Nahrajte se a porovnejte!</p>',
    notes: [
      '„Třicet tři Trentinců vešlo do Trenta, všech třicet tři klusem.“ Trénuje <em lang="it">r</em> a zdvojené <em lang="it">t</em>: smršť <em lang="it">tr</em>.',
      '„Apelles, syn Apollónův, udělal míč z kuřecí kůže.“ Trénuje zdvojené souhlásky (<em lang="it">palla</em>, <em lang="it">pelle</em>, <em lang="it">pollo</em>) a hlásku <em lang="it">gli</em>.',
      '„Kuchař vaří v kuchyni a říká, že kuchařka leží a mlčí, protože její sestřenice nevaří.“ Trénuje tvrdé a měkké <em lang="it">c</em>: <em lang="it">cuoco</em>, <em lang="it">cuoce</em>, <em lang="it">cucina</em>, <em lang="it">giace</em>.',
      '„Jasno je, jasno bude, a když jasno nebude, vyjasní se.“ Trénuje <em lang="it">s</em> a <em lang="it">r</em>: <em lang="it">sereno</em>, <em lang="it">rasserenerà</em>.',
    ],
    challenge:
      '<p class="mini-note"><strong>Výzva:</strong> dokážete říct ten první třikrát za sebou, rychle a bez chyby? Většina Italů ne.</p>',
  },
  end: {
    h2: 'Váš výsledek',
    text: 'Poslechová cvičení mají dohromady 44 odpovědí. Opakujte je, kdykoli chcete: slova se v každém kole mění.',
  },
  meanings: {
    casa: 'dům',
    cassa: 'pokladna',
    nono: 'devátý',
    nonno: 'dědeček',
    pala: 'lopata',
    palla: 'míč',
    sete: 'žízeň',
    sette: 'sedm',
    caro: 'drahý',
    carro: 'vůz',
    capello: 'jeden vlas',
    cappello: 'klobouk',
    pena: 'lítost',
    penna: 'pero',
    sono: 'jsem',
    sonno: 'ospalost',
    rana: 'žába',
    lana: 'vlna',
    mare: 'moře',
    male: 'bolest',
    bacca: 'bobule',
    vacca: 'kráva',
    vino: 'víno',
    voto: 'hlas ve volbách',
    foto: 'fotka',
    alto: 'vysoký',
    auto: 'auto',
    cane: 'pes',
    cani: 'psi',
    chiave: 'klíč',
    chiavi: 'klíče',
    pesche: 'broskve',
  },
};

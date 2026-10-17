// «La pronuncia italiana»: pagina inglese. Trappole per chi parla inglese: vocali che scivolano, vocali
// ridotte, la r, le doppie, ch = k, p/t senza soffio, h muta.
export default {
  h1: 'Italian pronunciation',
  lead: 'Italian is almost always read the way it is written: a handful of rules is enough to read any word aloud. Here you learn them by listening: the five vowels, C and G, the special sounds, double consonants (<em lang="it">casa</em> or <em lang="it">cassa</em>?), word stress, the traps waiting for English speakers and four tongue twisters to practise with.',
  description:
    'Italian pronunciation for English speakers, with audio: vowels, c and g, gn, gli, sc, z, the rolled r, double consonants (casa / cassa, nono / nonno), stress and tongue twisters. 44 listening exercises and a recorder to compare your voice.',
  card: 'Vowels, C and G, double consonants (casa / cassa) and stress, with audio and listening exercises.',
  heroAlt:
    'A vintage microphone on a wooden table in front of a window looking out over the rooftops of an Italian town',
  nav: {
    vocali: 'Vowels',
    cg: 'C and G',
    suoni: 'Special sounds',
    doppie: 'Double consonants',
    accento: 'Stress',
    trappole: 'Traps',
    scioglilingua: 'Tongue twisters',
  },
  ui: {
    play: 'Listen',
    slow: 'Slower',
    record: 'Record yourself',
    stop: 'Stop',
    yours: 'Your voice',
    micError: 'The microphone is not available: check your browser permissions.',
    correct: 'Correct!',
    wrong: 'No, it was:',
    listenFirst: 'Listen first, then choose.',
    score: '{n} of {t}',
    again: 'New round',
    total: 'Your result',
    vs: 'or',
  },
  how: {
    h2: 'How this lesson works',
    html: '<p>Press <strong>▶</strong> to hear a word and <strong>🐢</strong> to hear it more slowly. In the listening exercises the page picks a word at random: listen and choose the one you heard. With <strong>🎙 Record yourself</strong> you can record your voice and compare it with the model: the recording stays in your browser and goes nowhere.</p><p class="mini-note"><strong>The secret of Italian:</strong> every letter (almost) always has the same sound. No surprise silent letters, except one: <em lang="it">h</em>. Once you know the rules on this page, you can read words you have never seen before. Goodbye, “though, through, tough”!</p>',
  },
  vowels: {
    h2: 'The five vowels: always clean, always whole',
    intro:
      '<p>Italian has five vowels and always pronounces them clearly, without sliding into another sound. Look at the faces: your mouth does half the work.</p>',
    cues: {
      a: {
        cue: 'Mouth wide open, like at the doctor’s: “Say aaah”.',
        alt: 'A grandmother opening her mouth wide as if at the doctor’s',
      },
      e: {
        cue: 'Mouth half open, a little wide: “Eh? What?”',
        alt: 'A young man saying “eh?” with his mouth half open',
      },
      i: { cue: 'The photo smile: your lips spread, as in “cheese”.', alt: 'A girl smiling widely as if for a photo' },
      o: { cue: 'Round lips, like a surprised “Oh!”', alt: 'A young woman saying “oh!” with round lips' },
      u: { cue: 'Lips pushed forward, like an owl: “Ooo”.', alt: 'A bearded man saying “ooo” like an owl' },
    },
    finalH3: 'The last vowel is heard too',
    final:
      '<p>In Italian the vowel at the end of a word is never swallowed: <em lang="it">pizz<strong>a</strong></em>, <em lang="it">Rom<strong>a</strong></em>, <em lang="it">gelat<strong>o</strong></em>, <em lang="it">nott<strong>e</strong></em>. It is often the vowel that tells you whether there is one thing or many (<em lang="it">la pizza</em>, <em lang="it">le pizze</em>) or whether a word is masculine or feminine. Not “pizzuh”: pizz-A!</p>',
    eoH3: 'Bonus for the curious: E and O have two voices',
    eo: '<p><em lang="it">E</em> and <em lang="it">o</em> can be open or closed. A famous example: <em lang="it">la pèsca</em> (the peach) and <em lang="it">la pésca</em> (fishing) are spelt the same. Relax: in Milan, Rome and Naples even Italians don’t agree, and everyone will understand you anyway.</p>',
    peach: 'la pèsca: the peach',
    fishing: 'la pésca: fishing',
  },
  cg: {
    h2: 'C and G: hard or soft?',
    intro:
      '<p><em lang="it">C</em> and <em lang="it">g</em> have two sounds. The next letter decides: before <em lang="it">a</em>, <em lang="it">o</em>, <em lang="it">u</em> they are hard, before <em lang="it">e</em> and <em lang="it">i</em> they become soft.</p>',
    cols: ['Spelling', 'Sound', 'Examples'],
    sounds: {
      k: 'hard, like <strong>k</strong> in “kite”',
      c: 'soft, like <strong>ch</strong> in “cheese”',
      g: 'hard, like <strong>g</strong> in “go”',
      j: 'soft, like <strong>j</strong> in “jam”',
    },
    tricks:
      '<p class="mini-note"><strong>H is a wall:</strong> placed between <em lang="it">c</em> and <em lang="it">e</em> or <em lang="it">i</em>, it stops the softness. That is why <em lang="it">chiave</em> and <em lang="it">spaghetti</em> stay hard. So <em lang="it">ch</em> in Italian is always a <strong>k</strong>: <em lang="it">Chianti</em> is “kee-anti”, never “chee-anti”.</p><p class="mini-note"><strong>I is a silent bridge:</strong> in <em lang="it">ciao</em>, <em lang="it">giallo</em> and <em lang="it">giorno</em> the <em lang="it">i</em> is only there to make the consonant soft. You don’t say “chee-ao” but <em lang="it">ciao</em>, one single syllable.</p>',
    exH3: 'Exercise 1 · Hard or soft?',
    exP: 'Read the word and choose the sound. After your answer you will hear how it is pronounced.',
    hard: 'Hard (casa, gatto)',
    soft: 'Soft (ciao, gelato)',
  },
  sounds: {
    h2: 'The special sounds',
    intro: '<p>Seven groups of letters to know. Listen to the words and repeat them aloud.</p>',
    items: {
      gn: {
        title: '<em lang="it">gn</em> as in <em lang="it">gnocchi</em>',
        text: 'One single sound, like <strong>ny</strong> in “canyon” or “onion”. The <em lang="it">g</em> is not heard: not “g-nocchi” and not “nocky”, but “nyocki”.',
        alt: 'A plate of gnocchi with tomato sauce and basil',
      },
      gli: {
        title: '<em lang="it">gli</em> as in <em lang="it">aglio</em>',
        text: 'A soft <strong>l</strong>, close to <strong>lli</strong> in “million”, but as one sound: the middle of your tongue presses on the roof of your mouth. The <em lang="it">g</em> is silent.',
        alt: 'A bulb of garlic',
      },
      sc: {
        title: '<em lang="it">sc</em> as in <em lang="it">sciarpa</em>',
        text: 'Before <em lang="it">e</em> and <em lang="it">i</em> it is <strong>sh</strong> as in “shoe”: <em lang="it">scena</em>, <em lang="it">pesce</em>. Before <em lang="it">a</em>, <em lang="it">o</em>, <em lang="it">u</em>, and with <em lang="it">h</em>, it is <strong>sk</strong>: <em lang="it">scuola</em>, <em lang="it">schiena</em>.',
        alt: 'A red wool scarf',
      },
      z: {
        title: '<em lang="it">z</em> as in <em lang="it">pizza</em> and <em lang="it">zebra</em>',
        text: 'Two sounds: <strong>ts</strong> as in “cats” (<em lang="it">pizza</em>, <em lang="it">grazie</em>) and <strong>dz</strong> as in “kids” (<em lang="it">zebra</em>, <em lang="it">zero</em>). Never the English “z” of “zoo”. If you mix up the two, nobody will notice: it changes from region to region.',
        alt: 'A pizza marinara with tomato, garlic and oregano',
      },
      s: {
        title: '<em lang="it">s</em> as in <em lang="it">sole</em> and <em lang="it">rosa</em>',
        text: 'At the start of a word it hisses like a snake, as in “sun”: <em lang="it">sole</em>, <em lang="it">sale</em>. Between two vowels, in the north, it buzzes like the <strong>s</strong> in “rose”: <em lang="it">rosa</em>, <em lang="it">casa</em>.',
        alt: 'A pink rose',
      },
      r: {
        title: '<em lang="it">r</em> as in <em lang="it">rana</em>',
        text: 'The tip of your tongue taps once behind your upper teeth: a single <em lang="it">r</em> is one tap (<em lang="it">caro</em>), a double <em lang="it">rr</em> is a little drum roll (<em lang="it">carro</em>). Your lips stay still: it is not the English “r”.',
        alt: 'A green frog',
      },
      h: {
        title: '<em lang="it">h</em>: the shy letter',
        text: 'It has no sound at all, as in “hour”. <em lang="it">Ho</em>, <em lang="it">hai</em>, <em lang="it">ha</em>, <em lang="it">hanno</em> are read “o”, “ai”, “a”, “anno”. It only exists to tell written words apart and to make <em lang="it">c</em> and <em lang="it">g</em> hard.',
      },
    },
  },
  doubles: {
    h2: 'Double consonants: the cat’s jump',
    intro:
      '<p>A double consonant isn’t just written twice: it is pronounced longer. Think of a cat about to jump: it stops for a moment, gets ready… and jumps. In <em lang="it">cassa</em> your voice rests on the <em lang="it">s</em> before moving on; in <em lang="it">casa</em> it doesn’t.</p>',
    catAlt: 'A cat crouching on the edge of a step, ready to jump',
    how: '<p class="mini-note"><strong>How to do it:</strong> English already has double consonants, but only between two words: “boo<strong>k c</strong>ase”, “mi<strong>d d</strong>ay”, “u<strong>nn</strong>amed”. Italian does the same thing inside one word. With <em lang="it">tt</em>, <em lang="it">pp</em>, <em lang="it">cc</em> your mouth closes and waits an instant (<em lang="it">tutto</em>, <em lang="it">pappa</em>). With <em lang="it">ss</em>, <em lang="it">ll</em>, <em lang="it">nn</em>, <em lang="it">mm</em>, <em lang="it">rr</em> the sound gets longer (<em lang="it">cassa</em>, <em lang="it">palla</em>, <em lang="it">nonno</em>). And the vowel before a double becomes shorter.</p>',
    pairsH3: 'One letter changes everything',
    anno: '<p class="mini-note"><strong>Careful with your New Year’s wishes:</strong> on 31 December Italians say <em lang="it">Buon anno!</em> (Happy New Year), with two <em lang="it">n</em>’s. With a single <em lang="it">n</em> you are wishing good luck… to a part of the body nobody mentions at the dinner table. Italians will laugh, but you: stretch that <em lang="it">n</em>!</p>',
    exH3: 'Exercise 2 · Listen and choose',
    exP: 'Press ▶, listen and choose the word you heard. With “New round” the page picks other words.',
  },
  stress: {
    h2: 'Stress: where your voice lands',
    intro:
      '<p>In every word one syllable is stronger than the others. It is usually the second to last, but not always. The accent is written only when it falls on the last vowel. And unlike English, the other vowels don’t shrink: <em lang="it">banana</em> has three equal, clear <em lang="it">a</em>’s.</p>',
    groups: {
      penult: 'On the second-to-last syllable: almost every word',
      last: 'On the last: the accent is written',
      third: 'On the third-to-last: few words, but common ones',
    },
    anchorH3: 'One accent, two words',
    anchor:
      '<p>Same letters, different stress: <em lang="it">l’àncora</em> is the anchor that holds a ship, <em lang="it">ancóra</em> means “again, more”. And don’t call your dad, <em lang="it">papà</em>, “<em lang="it">il papa</em>”: that’s the Pope!</p>',
    anchorShip: 'l’àncora: the anchor',
    anchorMore: 'ancóra: more, again',
    papa: 'il papà: dad',
    capito:
      '<p class="mini-note"><strong>The champion:</strong> <em lang="it">càpito</em> (I happen to be somewhere), <em lang="it">capìto</em> (understood: <em lang="it">hai capito?</em>) and <em lang="it">capitò</em> (it happened). Three words, the same letters.</p>',
    exH3: 'Exercise 3 · Tap the strong syllable',
    exP: 'Listen to the word and tap the syllable your voice lands on.',
  },
  traps: {
    h2: 'The traps for English speakers',
    intro:
      '<p>Every language stumbles in a different place. These are the six habits that give away an English accent in Italian, and how to fix them.</p>',
    easy: '<p class="mini-note"><strong>The good news:</strong> you already have most Italian sounds. The <strong>ch</strong> of “cheese” (<em lang="it">ciao</em>), the <strong>j</strong> of “jam” (<em lang="it">gelato</em>), the <strong>sh</strong> of “shoe” (<em lang="it">pesce</em>) and the <strong>ts</strong> of “cats” (<em lang="it">pizza</em>) are all in English.</p>',
    items: [
      {
        title: 'Vowels that slide',
        text: 'In English “no” becomes “noh-oo” and “say” becomes “seh-ee”. In Italian the vowel stays still from start to finish: <em lang="it">no</em>, <em lang="it">sole</em>, <em lang="it">Roma</em>. Keep your mouth frozen in the same position.',
        words: ['no', 'sole', 'Roma'],
      },
      {
        title: 'Vowels that shrink',
        text: 'English turns unstressed vowels into “uh”: “banana” = “buh-NA-nuh”. Italian never does: every vowel is full, stressed or not.',
        words: ['banana', 'pasta', 'telefono'],
      },
      {
        title: 'The r you already know',
        text: 'Say “butter” or “water” the American way, quickly: the tap in the middle is the Italian single <em lang="it">r</em>! Now put it in <em lang="it">caro</em> and <em lang="it">ora</em>. For <em lang="it">rr</em> and the <em lang="it">r</em> at the start of a word, tap several times.',
        words: ['caro', 'ora', 'Roma', 'carro'],
      },
      {
        title: 'Ch is always k',
        text: 'English reads <strong>ch</strong> as in “church”, Italian as <strong>k</strong>. <em lang="it">Bruschetta</em> is “brus-KET-ta”, not “brushetta”; <em lang="it">chiesa</em> (church) starts with a <strong>k</strong>.',
        words: ['bruschetta', 'Chianti', 'chiesa'],
      },
      {
        title: 'P and t without a puff of air',
        text: 'Put your hand in front of your mouth and say “pin”: you feel a puff of air. Italian <em lang="it">p</em>, <em lang="it">t</em> and <em lang="it">c</em> don’t have it. Say <em lang="it">pasta</em> with your hand there: no wind!',
        words: ['pasta', 'tutto', 'Pisa'],
      },
      {
        title: 'The silent h',
        text: '<em lang="it">Hotel</em> is “otel”, <em lang="it">ho fame</em> is “o fame”. As in “hour”, always.',
        words: ['hotel', 'ho fame', 'hanno ragione'],
      },
    ],
    exH3: 'Exercise 4 · Trap pairs',
    exP: 'Five pairs with <em lang="it">c</em> / <em lang="it">ch</em> and <em lang="it">sc</em> / <em lang="it">sch</em>, five with single and double consonants. Listen and choose.',
  },
  twisters: {
    h2: 'Tongue twisters: a gym for your mouth',
    intro:
      '<p><em lang="it">Gli scioglilingua</em> (literally “tongue melters”) are sentences made on purpose to trip you up. Italians say them to children, and everyone laughs. Listen, repeat slowly, then faster and faster. Record yourself and compare!</p>',
    notes: [
      '“Thirty-three people from Trento entered Trento, all thirty-three trotting.” Trains the <em lang="it">r</em> and the double <em lang="it">t</em>: a burst of <em lang="it">tr</em>.',
      '“Apelles, son of Apollo, made a ball out of chicken skin.” Trains double consonants (<em lang="it">palla</em>, <em lang="it">pelle</em>, <em lang="it">pollo</em>) and the <em lang="it">gli</em> sound.',
      '“The cook cooks in the kitchen and says the cook lies there quiet because her cousin doesn’t cook.” Trains hard and soft <em lang="it">c</em>: <em lang="it">cuoco</em>, <em lang="it">cuoce</em>, <em lang="it">cucina</em>, <em lang="it">giace</em>.',
      '“Clear it is, clear it will be; if it isn’t clear, it will clear up.” Trains <em lang="it">s</em> and <em lang="it">r</em>: <em lang="it">sereno</em>, <em lang="it">rasserenerà</em>.',
    ],
    challenge:
      '<p class="mini-note"><strong>The challenge:</strong> can you say the first one three times in a row, fast, without a mistake? Most Italians can’t.</p>',
  },
  end: {
    h2: 'Your result',
    text: 'The listening exercises count 44 answers. Repeat them whenever you like: the words change every round.',
  },
  meanings: {
    casa: 'house',
    cassa: 'checkout',
    nono: 'ninth',
    nonno: 'grandfather',
    pala: 'shovel',
    palla: 'ball',
    sete: 'thirst',
    sette: 'seven',
    caro: 'expensive',
    carro: 'cart',
    capello: 'a (single) hair',
    cappello: 'hat',
    pena: 'pity',
    penna: 'pen',
    sono: 'I am',
    sonno: 'sleepiness',
    rana: 'frog',
    lana: 'wool',
    mare: 'sea',
    male: 'pain',
    bacca: 'berry',
    vacca: 'cow',
    vino: 'wine',
    voto: 'vote',
    foto: 'photo',
    alto: 'tall',
    auto: 'car',
    cane: 'dog',
    cani: 'dogs',
    chiave: 'key',
    chiavi: 'keys',
    pesche: 'peaches',
  },
};

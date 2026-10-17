// «La pronuncia italiana»: pagina spagnola. Trappole per chi parla spagnolo: le doppie, la ll italiana,
// b/v, la z, la s sonora, ce/ci e ge/gi. Buone notizie: vocali, r e rr quasi uguali.
export default {
  h1: 'La pronunciación italiana',
  lead: 'El italiano casi siempre se lee como se escribe: bastan unas pocas reglas para leer en voz alta cualquier palabra. Aquí las aprendes escuchando: las cinco vocales, la C y la G, los sonidos especiales, las consonantes dobles (¿<em lang="it">casa</em> o <em lang="it">cassa</em>?), el acento, las trampas para hispanohablantes y cuatro trabalenguas para practicar.',
  description:
    'La pronunciación italiana para hispanohablantes, con audio: vocales, c y g, gn, gli, sc, z, las consonantes dobles (casa / cassa, nono / nonno), b y v, el acento y trabalenguas. 44 ejercicios de escucha y una grabadora para comparar tu voz.',
  card: 'Vocales, C y G, consonantes dobles (casa / cassa) y acento, con audio y ejercicios de escucha.',
  heroAlt: 'Un micrófono antiguo sobre una mesa de madera delante de una ventana con los tejados de un pueblo italiano',
  nav: {
    vocali: 'Vocales',
    cg: 'C y G',
    suoni: 'Sonidos especiales',
    doppie: 'Consonantes dobles',
    accento: 'Acento',
    trappole: 'Trampas',
    scioglilingua: 'Trabalenguas',
  },
  ui: {
    play: 'Escuchar',
    slow: 'Más despacio',
    record: 'Grábate',
    stop: 'Parar',
    yours: 'Tu voz',
    micError: 'El micrófono no está disponible: revisa los permisos del navegador.',
    correct: '¡Correcto!',
    wrong: 'No, era:',
    listenFirst: 'Primero escucha, luego elige.',
    score: '{n} de {t}',
    again: 'Otra ronda',
    total: 'Tu resultado',
    vs: 'o',
  },
  how: {
    h2: 'Cómo funciona esta lección',
    html: '<p>Pulsa <strong>▶</strong> para escuchar una palabra y <strong>🐢</strong> para oírla más despacio. En los ejercicios de escucha la página elige una palabra al azar: escucha y elige la que has oído. Con <strong>🎙 Grábate</strong> puedes grabar tu voz y compararla con el modelo: la grabación se queda en tu navegador, no va a ninguna parte.</p><p class="mini-note"><strong>El secreto del italiano:</strong> como en español, cada letra tiene (casi) siempre el mismo sonido. Ninguna letra muda por sorpresa, salvo una: la <em lang="it">h</em>, igual que en español. Quien aprende las reglas de esta página sabe leer también las palabras que nunca ha visto.</p>',
  },
  vowels: {
    h2: 'Las cinco vocales: siempre limpias, siempre enteras',
    intro:
      '<p>Buena noticia: las cinco vocales italianas son casi las mismas que las españolas, claras y sin deslizarse hacia otro sonido. Mira las caras: la boca hace la mitad del trabajo.</p>',
    cues: {
      a: {
        cue: 'Boca abierta, como en el médico: «Diga aaa».',
        alt: 'Una abuela abre mucho la boca como en el médico',
      },
      e: { cue: 'Boca a medias, un poco ancha: «¿Eh? ¿Qué?».', alt: 'Un chico dice «¿eh?» con la boca entreabierta' },
      i: {
        cue: 'La sonrisa de la foto: los labios se estiran, como en «patata».',
        alt: 'Una niña sonríe mucho como para una foto',
      },
      o: {
        cue: 'Labios redondos, como para la sorpresa: «¡Oh!».',
        alt: 'Una chica dice «¡oh!» con los labios redondos',
      },
      u: { cue: 'Labios hacia delante, como el búho: «Uuu».', alt: 'Un señor con barba dice «uuu» como un búho' },
    },
    finalH3: 'También la última vocal se oye',
    final:
      '<p>En italiano la vocal final nunca se come: <em lang="it">pizz<strong>a</strong></em>, <em lang="it">Rom<strong>a</strong></em>, <em lang="it">gelat<strong>o</strong></em>, <em lang="it">nott<strong>e</strong></em>. A menudo es ella la que dice si una cosa es una o muchas (<em lang="it">la pizza</em>, <em lang="it">le pizze</em>) o si es masculina o femenina.</p>',
    eoH3: 'Extra para curiosos: la E y la O tienen dos voces',
    eo: '<p>La <em lang="it">e</em> y la <em lang="it">o</em> pueden ser abiertas o cerradas, algo que el español no distingue. Un ejemplo famoso: <em lang="it">la pèsca</em> (el melocotón) y <em lang="it">la pésca</em> (la pesca) se escriben igual. Tranquilo: en Milán, Roma y Nápoles ni los italianos se ponen de acuerdo, y todos te entenderán igual.</p>',
    peach: 'la pèsca: el melocotón',
    fishing: 'la pésca: ir a pescar',
  },
  cg: {
    h2: 'C y G: ¿duras o suaves?',
    intro:
      '<p>La <em lang="it">c</em> y la <em lang="it">g</em> tienen dos sonidos. Decide la letra que viene después: delante de <em lang="it">a</em>, <em lang="it">o</em>, <em lang="it">u</em> son duras, delante de <em lang="it">e</em> e <em lang="it">i</em> se vuelven suaves. Cuidado: el sonido suave no es el español.</p>',
    cols: ['Se escribe', 'Se oye', 'Ejemplos'],
    sounds: {
      k: 'dura, como en «casa»',
      c: 'suave, como la <strong>ch</strong> de «chocolate»',
      g: 'dura, como en «gato»',
      j: 'suave, como la <strong>y</strong> fuerte de «yo» en Argentina, o la <strong>j</strong> inglesa de «jeans»',
    },
    tricks:
      '<p class="mini-note"><strong>La H es un muro:</strong> entre la <em lang="it">c</em> y la <em lang="it">e</em> o la <em lang="it">i</em>, no deja pasar la suavidad. Es como la <strong>qu</strong> española: <em lang="it">che</em> = «que», <em lang="it">chi</em> = «qui». Por eso <em lang="it">chiave</em> y <em lang="it">spaghetti</em> siguen duros.</p><p class="mini-note"><strong>La I es un puente que no se oye:</strong> en <em lang="it">ciao</em>, <em lang="it">giallo</em> y <em lang="it">giorno</em> la <em lang="it">i</em> sirve solo para suavizar la consonante. No se dice «chi-ao», sino <em lang="it">ciao</em>, una sola sílaba, como «chao».</p>',
    exH3: 'Ejercicio 1 · ¿Dura o suave?',
    exP: 'Lee la palabra y elige el sonido. Después de responder oirás cómo se pronuncia.',
    hard: 'Dura (casa, gatto)',
    soft: 'Suave (ciao, gelato)',
  },
  sounds: {
    h2: 'Los sonidos especiales',
    intro: '<p>Siete grupos de letras que hay que conocer. Escucha las palabras y repítelas en voz alta.</p>',
    items: {
      gn: {
        title: '<em lang="it">gn</em> como en <em lang="it">gnocchi</em>',
        text: '¡Es la <strong>ñ</strong>! <em lang="it">Spagna</em> = España, <em lang="it">bagno</em> se dice «baño». La <em lang="it">g</em> no se oye.',
        alt: 'Un plato de ñoquis con tomate y albahaca',
      },
      gli: {
        title: '<em lang="it">gli</em> como en <em lang="it">aglio</em>',
        text: 'Una <strong>l</strong> suave, como la <strong>ll</strong> tradicional de «calle» en las zonas que todavía la distinguen de la <strong>y</strong>. Nunca «y»: <em lang="it">figlio</em> no es «fiyo».',
        alt: 'Una cabeza de ajo',
      },
      sc: {
        title: '<em lang="it">sc</em> como en <em lang="it">sciarpa</em>',
        text: 'Delante de <em lang="it">e</em> e <em lang="it">i</em> es el sonido que se hace para pedir silencio, «shhh»: <em lang="it">scena</em>, <em lang="it">pesce</em>. Delante de <em lang="it">a</em>, <em lang="it">o</em>, <em lang="it">u</em> y con la <em lang="it">h</em> es «sc» dura: <em lang="it">scuola</em>, <em lang="it">schiena</em>.',
        alt: 'Una bufanda roja de lana',
      },
      z: {
        title: '<em lang="it">z</em> como en <em lang="it">pizza</em> y <em lang="it">zebra</em>',
        text: 'Nunca como la <strong>z</strong> de «zapato», ni como una <strong>s</strong>. Son dos sonidos: «ts» en <em lang="it">pizza</em> y <em lang="it">grazie</em> («gratsie»), «ds» en <em lang="it">zebra</em> y <em lang="it">zero</em>. Si confundes los dos, nadie se da cuenta: cambia de una región a otra.',
        alt: 'Una pizza marinara con tomate, ajo y orégano',
      },
      s: {
        title: '<em lang="it">s</em> como en <em lang="it">sole</em> y <em lang="it">rosa</em>',
        text: 'Al principio de la palabra es la <strong>s</strong> española: <em lang="it">sole</em>, <em lang="it">sale</em>. Entre dos vocales, en el norte, zumba como una abeja: <em lang="it">rosa</em>, <em lang="it">casa</em>, como la <strong>s</strong> de «mismo» cuando se dice rápido.',
        alt: 'Una rosa rosa',
      },
      r: {
        title: '<em lang="it">r</em> como en <em lang="it">rana</em>',
        text: '¡Ya la tienes! <em lang="it">caro</em> se dice como «caro», y <em lang="it">carro</em> como «carro». Igual que «pero» y «perro».',
        alt: 'Una rana verde',
      },
      h: {
        title: '<em lang="it">h</em>: la letra tímida',
        text: 'Muda, como en español. <em lang="it">Ho</em>, <em lang="it">hai</em>, <em lang="it">ha</em>, <em lang="it">hanno</em> se leen «o», «ai», «a», «anno». Solo sirve para distinguir palabras escritas y para endurecer la <em lang="it">c</em> y la <em lang="it">g</em>.',
      },
    },
  },
  doubles: {
    h2: 'Las consonantes dobles: el salto del gato',
    intro:
      '<p>Una consonante doble no solo se escribe dos veces: se pronuncia más larga. Piensa en un gato antes de saltar: se para un momento, se prepara… y salta. En <em lang="it">cassa</em> la voz se detiene en la <em lang="it">s</em> antes de seguir; en <em lang="it">casa</em>, no.</p>',
    catAlt: 'Un gato agazapado en el borde de un escalón, listo para saltar',
    how: '<p class="mini-note"><strong>Cómo se hace:</strong> ya conoces la diferencia entre «pero» y «perro». En italiano vale para casi todas las consonantes. Con <em lang="it">tt</em>, <em lang="it">pp</em>, <em lang="it">cc</em> la boca se cierra y espera un instante (<em lang="it">tutto</em>, <em lang="it">pappa</em>). Con <em lang="it">ss</em>, <em lang="it">ll</em>, <em lang="it">nn</em>, <em lang="it">mm</em> el sonido se alarga (<em lang="it">cassa</em>, <em lang="it">palla</em>, <em lang="it">nonno</em>). Y la vocal antes de la doble se vuelve más corta.</p>',
    pairsH3: 'Una letra lo cambia todo',
    anno: '<p class="mini-note"><strong>Cuidado con las felicitaciones:</strong> en Nochevieja se dice <em lang="it">Buon anno!</em>, con dos <em lang="it">n</em>, como en español «año»… pero sin la ñ. Con una sola <em lang="it">n</em> deseas buena suerte a una parte del cuerpo que no se nombra en la mesa. Los italianos se ríen, pero tú: ¡alarga la <em lang="it">n</em>!</p>',
    exH3: 'Ejercicio 2 · Escucha y elige',
    exP: 'Pulsa ▶, escucha y elige la palabra que has oído. Con «Otra ronda» la página elige otras palabras.',
  },
  stress: {
    h2: 'El acento: dónde golpea la voz',
    intro:
      '<p>Como en español, en cada palabra hay una sílaba más fuerte, casi siempre la penúltima. Pero el italiano escribe la tilde solo cuando el acento cae en la última vocal: <em lang="it">telefono</em> no lleva tilde aunque sea esdrújula.</p>',
    groups: {
      penult: 'En la penúltima sílaba: casi todas las palabras',
      last: 'En la última: se escribe la tilde',
      third: 'En la antepenúltima: pocas, pero frecuentes (¡sin tilde!)',
    },
    anchorH3: 'Un acento, dos palabras',
    anchor:
      '<p>Las letras son las mismas, el acento no: <em lang="it">l’àncora</em> es el ancla del barco, <em lang="it">ancóra</em> quiere decir «todavía, otra vez». Y no llames a tu <em lang="it">papà</em> «<em lang="it">il papa</em>»: ¡el papa vive en el Vaticano!</p>',
    anchorShip: 'l’àncora: el ancla',
    anchorMore: 'ancóra: otra vez, más',
    papa: 'il papà: el papá',
    capito:
      '<p class="mini-note"><strong>El campeón:</strong> <em lang="it">càpito</em> (acabo por casualidad en un sitio), <em lang="it">capìto</em> (entendido: <em lang="it">hai capito?</em>) y <em lang="it">capitò</em> (ocurrió). Tres palabras, las mismas letras.</p>',
    exH3: 'Ejercicio 3 · Toca la sílaba fuerte',
    exP: 'Escucha la palabra y toca la sílaba donde golpea la voz.',
  },
  traps: {
    h2: 'Las trampas para hispanohablantes',
    intro:
      '<p>El italiano y el español se parecen tanto que es fácil fiarse demasiado. Estos son los cinco detalles que delatan un acento español, y cómo arreglarlos.</p>',
    easy: '<p class="mini-note"><strong>La buena noticia:</strong> partes con ventaja. Las cinco vocales, la <strong>r</strong> y la <strong>rr</strong>, la <strong>ñ</strong> (<em lang="it">gn</em>), la <strong>ch</strong> (<em lang="it">ci</em>) y la <strong>h</strong> muda ya los tienes.</p>',
    items: [
      {
        title: 'Las dobles no son decoración',
        text: 'El español solo distingue «pero» y «perro». El italiano lo hace con casi todas las consonantes: <em lang="it">nono</em> (noveno) y <em lang="it">nonno</em> (abuelo), <em lang="it">sete</em> (sed) y <em lang="it">sette</em> (siete). Si no alargas, cambias la palabra.',
        words: ['nonno', 'sette', 'tutto'],
      },
      {
        title: 'La ll italiana no es «y»',
        text: 'En italiano <em lang="it">ll</em> es simplemente una <strong>l</strong> larga: <em lang="it">palla</em> es «pal-la», no «paya»; <em lang="it">bello</em> es «bel-lo», no «beyo».',
        words: ['palla', 'bello', 'cavallo'],
      },
      {
        title: 'La b y la v son distintas',
        text: 'En español suenan igual; en italiano no. La <em lang="it">v</em> se hace con los dientes de arriba sobre el labio de abajo, como una <strong>f</strong> con voz. <em lang="it">Bacca</em> es una baya, <em lang="it">vacca</em> es una vaca.',
        words: ['vino', 'vacca', 'bacca'],
      },
      {
        title: 'La z no es «s» ni «z» española',
        text: '<em lang="it">Pizza</em> es «pitsa», <em lang="it">grazie</em> es «gratsie», <em lang="it">zucchero</em> empieza con «ds». Piensa en la «ts» de «tsunami».',
        words: ['pizza', 'grazie', 'zucchero'],
      },
      {
        title: 'Ce, ci, ge, gi: ni «z» ni «j»',
        text: '<em lang="it">Cena</em> se lee «chena» y <em lang="it">gelato</em> empieza como la <strong>j</strong> inglesa de «jeans», nunca con la jota española. <em lang="it">Gente</em> no es «jente».',
        words: ['cena', 'gelato', 'gente'],
      },
    ],
    exH3: 'Ejercicio 4 · Parejas trampa',
    exP: 'Tres parejas con <em lang="it">b</em> / <em lang="it">v</em>, cinco con consonantes simples y dobles, dos con <em lang="it">c</em> / <em lang="it">ch</em>. Escucha y elige.',
  },
  twisters: {
    h2: 'Trabalenguas: el gimnasio de la boca',
    intro:
      '<p><em lang="it">Gli scioglilingua</em> son frases hechas a propósito para tropezar, como «Tres tristes tigres». Los italianos se los dicen a los niños, y todos se ríen. Escucha, repite despacio y luego cada vez más rápido. ¡Grábate y compara!</p>',
    notes: [
      '«Treinta y tres trentinos entraron en Trento, los treinta y tres al trote.» Entrena la <em lang="it">r</em> y la <em lang="it">t</em> doble: una ráfaga de <em lang="it">tr</em>.',
      '«Apeles, hijo de Apolo, hizo una pelota de piel de pollo.» Entrena las dobles (<em lang="it">palla</em>, <em lang="it">pelle</em>, <em lang="it">pollo</em>) y el sonido <em lang="it">gli</em>.',
      '«El cocinero cocina en la cocina y dice que la cocinera yace y calla porque su prima no cocina.» Entrena la <em lang="it">c</em> dura y suave: <em lang="it">cuoco</em>, <em lang="it">cuoce</em>, <em lang="it">cucina</em>, <em lang="it">giace</em>.',
      '«Despejado está, despejado estará; si no está despejado, se despejará.» Entrena la <em lang="it">s</em> y la <em lang="it">r</em>: <em lang="it">sereno</em>, <em lang="it">rasserenerà</em>.',
    ],
    challenge:
      '<p class="mini-note"><strong>El reto:</strong> ¿eres capaz de decir el primero tres veces seguidas, rápido y sin equivocarte? La mayoría de los italianos, no.</p>',
  },
  end: {
    h2: 'Tu resultado',
    text: 'Los ejercicios de escucha suman 44 respuestas. Repítelos cuando quieras: las palabras cambian en cada ronda.',
  },
  meanings: {
    casa: 'casa',
    cassa: 'caja del súper',
    nono: 'noveno',
    nonno: 'abuelo',
    pala: 'pala',
    palla: 'pelota',
    sete: 'sed',
    sette: 'siete',
    caro: 'caro',
    carro: 'carro',
    capello: 'un pelo',
    cappello: 'sombrero',
    pena: 'pena',
    penna: 'bolígrafo, pluma',
    sono: 'soy',
    sonno: 'sueño',
    rana: 'rana',
    lana: 'lana',
    mare: 'mar',
    male: 'dolor',
    bacca: 'baya',
    vacca: 'vaca',
    vino: 'vino',
    voto: 'voto',
    foto: 'foto',
    alto: 'alto',
    auto: 'coche',
    cane: 'perro',
    cani: 'perros',
    chiave: 'llave',
    chiavi: 'llaves',
    pesche: 'melocotones',
  },
};

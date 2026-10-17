// «La pronuncia italiana»: pagina in portoghese brasiliano. Trappole per chi parla portoghese: la vocale
// finale (-e → i, -o → u), ti/di palatalizzati, la l finale che diventa u (alto / auto), la r iniziale
// aspirata, le vocali nasali, le doppie. Buone notizie: gn = nh, gli = lh, ci = tch, la s di casa.
export default {
  h1: 'A pronúncia italiana',
  lead: 'O italiano quase sempre se lê como se escreve: bastam poucas regras para ler em voz alta qualquer palavra. Aqui você aprende ouvindo: as cinco vogais, o C e o G, os sons especiais, as consoantes duplas (<em lang="it">casa</em> ou <em lang="it">cassa</em>?), o acento, as armadilhas de quem fala português e quatro trava-línguas para treinar.',
  description:
    'A pronúncia italiana para brasileiros, com áudio: vogais, c e g, gn, gli, sc, z, a vogal final, as consoantes duplas (casa / cassa, nono / nonno), o acento e trava-línguas. 44 exercícios de escuta e um gravador para comparar a sua voz.',
  card: 'Vogais, C e G, consoantes duplas (casa / cassa) e acento, com áudio e exercícios de escuta.',
  heroAlt:
    'Um microfone antigo sobre uma mesa de madeira diante de uma janela com os telhados de uma cidadezinha italiana',
  nav: {
    vocali: 'Vogais',
    cg: 'C e G',
    suoni: 'Sons especiais',
    doppie: 'Consoantes duplas',
    accento: 'Acento',
    trappole: 'Armadilhas',
    scioglilingua: 'Trava-línguas',
  },
  ui: {
    play: 'Ouvir',
    slow: 'Mais devagar',
    record: 'Grave-se',
    stop: 'Parar',
    yours: 'A sua voz',
    micError: 'O microfone não está disponível: verifique as permissões do navegador.',
    correct: 'Certo!',
    wrong: 'Não, era:',
    listenFirst: 'Primeiro ouça, depois escolha.',
    score: '{n} de {t}',
    again: 'Nova rodada',
    total: 'O seu resultado',
    vs: 'ou',
  },
  how: {
    h2: 'Como funciona esta lição',
    html: '<p>Aperte <strong>▶</strong> para ouvir uma palavra e <strong>🐢</strong> para ouvi-la mais devagar. Nos exercícios de escuta a página escolhe uma palavra ao acaso: ouça e escolha a que você ouviu. Com <strong>🎙 Grave-se</strong> você pode gravar a sua voz e compará-la com o modelo: a gravação fica no seu navegador, não vai para lugar nenhum.</p><p class="mini-note"><strong>O segredo do italiano:</strong> cada letra tem (quase) sempre o mesmo som. Nenhuma letra muda de surpresa, a não ser uma: o <em lang="it">h</em>, como em português. Quem aprende as regras desta página sabe ler até as palavras que nunca viu.</p>',
  },
  vowels: {
    h2: 'As cinco vogais: sempre limpas, sempre inteiras',
    intro:
      '<p>O italiano tem cinco vogais e as pronuncia sempre claras, sem reduzi-las e sem nasalizá-las. Olhe as caras: a boca faz metade do trabalho.</p>',
    cues: {
      a: { cue: 'Boca aberta, como no médico: «Diga aaa».', alt: 'Uma avó abre bem a boca como no médico' },
      e: {
        cue: 'Boca pela metade, um pouco larga: «Hein? O quê?».',
        alt: 'Um rapaz diz «hein?» com a boca entreaberta',
      },
      i: {
        cue: 'O sorriso da foto: os lábios se esticam, como em «xis».',
        alt: 'Uma menina sorri bem largo como para uma foto',
      },
      o: { cue: 'Lábios redondos, como na surpresa: «Oh!».', alt: 'Uma moça diz «oh!» com os lábios redondos' },
      u: { cue: 'Lábios para a frente, como a coruja: «Uuu».', alt: 'Um senhor de barba diz «uuu» como uma coruja' },
    },
    finalH3: 'A última vogal também se ouve, e não muda',
    final:
      '<p>No Brasil, «leite» vira «leitchi» e «vinho» vira «vinhu». Em italiano não: a vogal final se pronuncia inteira e igual à escrita. <em lang="it">pizz<strong>a</strong></em>, <em lang="it">Rom<strong>a</strong></em>, <em lang="it">gelat<strong>o</strong></em> (com <strong>o</strong>, não «u»), <em lang="it">nott<strong>e</strong></em> (com <strong>e</strong>, não «i»). E é justamente ela que diz se uma coisa é uma ou muitas: <em lang="it">la pizza</em>, <em lang="it">le pizze</em>.</p>',
    eoH3: 'Bônus para curiosos: o E e o O têm duas vozes',
    eo: '<p>Como em português (avó e avô), o <em lang="it">e</em> e o <em lang="it">o</em> podem ser abertos ou fechados. Um exemplo famoso: <em lang="it">la pèsca</em> (o pêssego) e <em lang="it">la pésca</em> (a pesca) se escrevem igual. Fique tranquilo: em Milão, Roma e Nápoles nem os italianos concordam, e todo mundo vai entender você do mesmo jeito.</p>',
    peach: 'la pèsca: o pêssego',
    fishing: 'la pésca: ir pescar',
  },
  cg: {
    h2: 'C e G: duros ou suaves?',
    intro:
      '<p>O <em lang="it">c</em> e o <em lang="it">g</em> têm dois sons. Quem decide é a letra que vem depois: antes de <em lang="it">a</em>, <em lang="it">o</em>, <em lang="it">u</em> são duros, antes de <em lang="it">e</em> e <em lang="it">i</em> ficam suaves.</p>',
    cols: ['Escreve-se', 'Ouve-se', 'Exemplos'],
    sounds: {
      k: 'duro, como em «casa»',
      c: 'suave, como o <strong>tch</strong> de «tchau»',
      g: 'duro, como em «gato»',
      j: 'suave, como o <strong>dj</strong> de «dia» no Rio',
    },
    tricks:
      '<p class="mini-note"><strong>O H é um muro:</strong> entre o <em lang="it">c</em> e o <em lang="it">e</em> ou o <em lang="it">i</em>, não deixa passar a suavidade. É como o <strong>qu</strong> português: <em lang="it">che</em> = «que», <em lang="it">chi</em> = «qui». Por isso <em lang="it">chiave</em> e <em lang="it">spaghetti</em> continuam duros, e <em lang="it">ch</em> nunca é o «x» de «chá».</p><p class="mini-note"><strong>O I é uma ponte que não se ouve:</strong> em <em lang="it">ciao</em>, <em lang="it">giallo</em> e <em lang="it">giorno</em> o <em lang="it">i</em> só serve para suavizar a consoante. Não se diz «tchi-ao», mas <em lang="it">ciao</em>, uma sílaba só, igualzinho ao nosso «tchau».</p>',
    exH3: 'Exercício 1 · Duro ou suave?',
    exP: 'Leia a palavra e escolha o som. Depois da resposta você ouve como se pronuncia.',
    hard: 'Duro (casa, gatto)',
    soft: 'Suave (ciao, gelato)',
  },
  sounds: {
    h2: 'Os sons especiais',
    intro: '<p>Sete grupos de letras para conhecer. Ouça as palavras e repita em voz alta.</p>',
    items: {
      gn: {
        title: '<em lang="it">gn</em> como em <em lang="it">gnocchi</em>',
        text: 'É o seu <strong>nh</strong>! <em lang="it">Spagna</em> = Espanha, <em lang="it">bagno</em> se diz como «banho». O <em lang="it">g</em> não se ouve: «nhóqui».',
        alt: 'Um prato de nhoque com molho de tomate e manjericão',
      },
      gli: {
        title: '<em lang="it">gli</em> como em <em lang="it">aglio</em>',
        text: 'É o seu <strong>lh</strong>! <em lang="it">aglio</em> soa como «alho», <em lang="it">figlio</em> como «filho». O <em lang="it">g</em> não se ouve.',
        alt: 'Uma cabeça de alho',
      },
      sc: {
        title: '<em lang="it">sc</em> como em <em lang="it">sciarpa</em>',
        text: 'Antes de <em lang="it">e</em> e <em lang="it">i</em> é o <strong>x</strong> de «xícara» ou o <strong>ch</strong> de «chá»: <em lang="it">scena</em>, <em lang="it">pesce</em>. Antes de <em lang="it">a</em>, <em lang="it">o</em>, <em lang="it">u</em> e com o <em lang="it">h</em> é «sc» duro: <em lang="it">scuola</em>, <em lang="it">schiena</em> («squiena»).',
        alt: 'Um cachecol vermelho de lã',
      },
      z: {
        title: '<em lang="it">z</em> como em <em lang="it">pizza</em> e <em lang="it">zebra</em>',
        text: 'Não é o <strong>z</strong> de «zebra» em português. São dois sons: «ts» em <em lang="it">pizza</em> e <em lang="it">grazie</em> («grátsie»), «dz» em <em lang="it">zebra</em> e <em lang="it">zero</em>. Se você confundir os dois, ninguém percebe: muda de uma região para outra.',
        alt: 'Uma pizza marinara com tomate, alho e orégano',
      },
      s: {
        title: '<em lang="it">s</em> como em <em lang="it">sole</em> e <em lang="it">rosa</em>',
        text: 'Igual ao português! No começo da palavra é o <strong>s</strong> de «sol»: <em lang="it">sole</em>, <em lang="it">sale</em>. Entre duas vogais, no norte da Itália, zumbe como em «casa» e «rosa».',
        alt: 'Uma rosa cor-de-rosa',
      },
      r: {
        title: '<em lang="it">r</em> como em <em lang="it">rana</em>',
        text: 'Um <em lang="it">r</em> sozinho é o <strong>r</strong> de «caro» em português: uma batida da língua. Mas no começo da palavra e no <em lang="it">rr</em> a língua bate várias vezes: nunca o «h» do Rio. <em lang="it">Roma</em> não é «Homa».',
        alt: 'Uma rã verde',
      },
      h: {
        title: '<em lang="it">h</em>: a letra tímida',
        text: 'Muda, como em português. <em lang="it">Ho</em>, <em lang="it">hai</em>, <em lang="it">ha</em>, <em lang="it">hanno</em> se leem «o», «ai», «a», «anno». Só serve para distinguir palavras escritas e para endurecer o <em lang="it">c</em> e o <em lang="it">g</em>.',
      },
    },
  },
  doubles: {
    h2: 'As consoantes duplas: o pulo do gato',
    intro:
      '<p>Uma consoante dupla não é só escrita duas vezes: é pronunciada mais longa. Pense num gato antes de pular: ele para um instante, se prepara… e pula. Em <em lang="it">cassa</em> a voz para no <em lang="it">s</em> antes de seguir; em <em lang="it">casa</em>, não.</p>',
    catAlt: 'Um gato agachado na beira de um degrau, pronto para pular',
    how: '<p class="mini-note"><strong>Como se faz:</strong> em português «rr» e «ss» são só ortografia; em italiano a consoante dura mais. Com <em lang="it">tt</em>, <em lang="it">pp</em>, <em lang="it">cc</em> a boca se fecha e espera um instante (<em lang="it">tutto</em>, <em lang="it">pappa</em>). Com <em lang="it">ss</em>, <em lang="it">ll</em>, <em lang="it">nn</em>, <em lang="it">mm</em>, <em lang="it">rr</em> o som se alonga (<em lang="it">cassa</em>, <em lang="it">palla</em>, <em lang="it">nonno</em>). E a vogal antes da dupla fica mais curta.</p>',
    pairsH3: 'Uma letra muda tudo',
    anno: '<p class="mini-note"><strong>Cuidado com os votos de Ano-Novo:</strong> na virada do ano se diz <em lang="it">Buon anno!</em>, com dois <em lang="it">n</em>. Com um <em lang="it">n</em> só, você deseja boa sorte… a uma parte do corpo que não se menciona à mesa. Os italianos dão risada, mas você: alongue o <em lang="it">n</em>!</p>',
    exH3: 'Exercício 2 · Ouça e escolha',
    exP: 'Aperte ▶, ouça e escolha a palavra que você ouviu. Com «Nova rodada» a página escolhe outras palavras.',
  },
  stress: {
    h2: 'O acento: onde a voz bate',
    intro:
      '<p>Como em português, em cada palavra uma sílaba é mais forte, quase sempre a penúltima. Mas o italiano só escreve o acento quando ele cai na última vogal: <em lang="it">telefono</em> não tem acento gráfico, mesmo sendo proparoxítona.</p>',
    groups: {
      penult: 'Na penúltima sílaba: quase todas as palavras',
      last: 'Na última: o acento é escrito',
      third: 'Na antepenúltima: poucas, mas frequentes (sem acento gráfico!)',
    },
    anchorH3: 'Um acento, duas palavras',
    anchor:
      '<p>As letras são as mesmas, o acento não: <em lang="it">l’àncora</em> é a âncora do navio, <em lang="it">ancóra</em> quer dizer «ainda, de novo». E não chame o seu <em lang="it">papà</em> de «<em lang="it">il papa</em>»: o papa mora no Vaticano!</p>',
    anchorShip: 'l’àncora: a âncora',
    anchorMore: 'ancóra: de novo, mais',
    papa: 'il papà: o papai',
    capito:
      '<p class="mini-note"><strong>O campeão:</strong> <em lang="it">càpito</em> (vou parar num lugar por acaso), <em lang="it">capìto</em> (entendido: <em lang="it">hai capito?</em>) e <em lang="it">capitò</em> (aconteceu). Três palavras, as mesmas letras.</p>',
    exH3: 'Exercício 3 · Toque a sílaba forte',
    exP: 'Ouça a palavra e toque a sílaba onde a voz bate.',
  },
  traps: {
    h2: 'As armadilhas de quem fala português',
    intro:
      '<p>Italiano e português são primos, e é aí que mora o perigo: o ouvido acha que já sabe. Estes são os seis hábitos que entregam o sotaque brasileiro, e como corrigi-los.</p>',
    easy: '<p class="mini-note"><strong>A boa notícia:</strong> você já tem os sons mais difíceis para os outros. O <strong>nh</strong> (<em lang="it">gn</em>), o <strong>lh</strong> (<em lang="it">gli</em>), o <strong>tch</strong> de «tchau» (<em lang="it">ciao</em>), o <strong>dj</strong> de «dia» (<em lang="it">giorno</em>) e o <strong>s</strong> de «casa».</p>',
    items: [
      {
        title: 'O E final não vira I',
        text: 'Em italiano isso muda o sentido: <em lang="it">cane</em> é um cachorro, <em lang="it">cani</em> são vários. Se você diz «canhi», fala de uma matilha! Mesma coisa com o <strong>o</strong> final: <em lang="it">vino</em>, não «vinu».',
        words: ['cane', 'cani', 'notte', 'vino'],
      },
      {
        title: 'Ti e di sem «tch» e «dj»',
        text: 'No Brasil «tia» vira «tchia». Em italiano <em lang="it">ti</em> e <em lang="it">di</em> ficam secos, com a língua nos dentes: <em lang="it">tutti</em>, não «tutchi»; <em lang="it">dire</em>, não «djire».',
        words: ['tutti', 'dire', 'dieci'],
      },
      {
        title: 'O L não vira U',
        text: '«Brasil» se diz «Brasiu», mas em italiano o <em lang="it">l</em> se ouve sempre, com a língua nos dentes. Cuidado: <em lang="it">alto</em> e <em lang="it">auto</em> (carro) são duas palavras diferentes!',
        words: ['alto', 'auto', 'il', 'calma'],
      },
      {
        title: 'O R do começo não é H',
        text: 'No começo da palavra e no <em lang="it">rr</em>, o italiano faz vibrar a ponta da língua: <em lang="it">Roma</em>, <em lang="it">rosso</em>, <em lang="it">carro</em>. Pense no «r» do interior de São Paulo, só que rolado.',
        words: ['Roma', 'rosso', 'carro'],
      },
      {
        title: 'Nada de vogais nasais',
        text: 'Antes de <em lang="it">n</em> e <em lang="it">m</em> a vogal fica oral e o <em lang="it">n</em> se pronuncia de verdade: <em lang="it">pane</em> não é «pãe», <em lang="it">bambino</em> é «bam-bi-no», <em lang="it">un</em> termina com <strong>n</strong>.',
        words: ['pane', 'bambino', 'un'],
      },
      {
        title: 'As duplas existem',
        text: 'Em português «carro» e «osso» se escrevem com duas letras, mas não soam longas. Em italiano sim: <em lang="it">nonno</em> (avô) não é <em lang="it">nono</em> (nono).',
        words: ['nonno', 'palla', 'sette'],
      },
    ],
    exH3: 'Exercício 4 · Pares armadilha',
    exP: 'Quatro pares com <em lang="it">e</em> / <em lang="it">i</em> no final, <em lang="it">alto</em> / <em lang="it">auto</em>, três com consoantes simples e duplas e dois com <em lang="it">c</em> / <em lang="it">ch</em>. Ouça e escolha.',
  },
  twisters: {
    h2: 'Trava-línguas: a academia da boca',
    intro:
      '<p><em lang="it">Gli scioglilingua</em> são frases feitas de propósito para tropeçar, como o nosso «O rato roeu a roupa do rei de Roma». Os italianos dizem para as crianças, e todo mundo ri. Ouça, repita devagar e depois cada vez mais rápido. Grave-se e compare!</p>',
    notes: [
      '«Trinta e três trentinos entraram em Trento, todos os trinta e três trotando.» Treina o <em lang="it">r</em> e o <em lang="it">t</em> duplo: uma rajada de <em lang="it">tr</em>.',
      '«Apeles, filho de Apolo, fez uma bola de pele de frango.» Treina as duplas (<em lang="it">palla</em>, <em lang="it">pelle</em>, <em lang="it">pollo</em>) e o som <em lang="it">gli</em>.',
      '«O cozinheiro cozinha na cozinha e diz que a cozinheira está deitada e calada porque a prima dela não cozinha.» Treina o <em lang="it">c</em> duro e suave: <em lang="it">cuoco</em>, <em lang="it">cuoce</em>, <em lang="it">cucina</em>, <em lang="it">giace</em>.',
      '«Está sereno, sereno estará; se não estiver sereno, vai clarear.» Treina o <em lang="it">s</em> e o <em lang="it">r</em>: <em lang="it">sereno</em>, <em lang="it">rasserenerà</em>.',
    ],
    challenge:
      '<p class="mini-note"><strong>O desafio:</strong> você consegue dizer o primeiro três vezes seguidas, rápido, sem errar? A maioria dos italianos não consegue.</p>',
  },
  end: {
    h2: 'O seu resultado',
    text: 'Os exercícios de escuta somam 44 respostas. Repita quando quiser: as palavras mudam a cada rodada.',
  },
  meanings: {
    casa: 'casa',
    cassa: 'caixa do supermercado',
    nono: 'nono',
    nonno: 'avô',
    pala: 'pá',
    palla: 'bola',
    sete: 'sede',
    sette: 'sete',
    caro: 'caro',
    carro: 'carroça',
    capello: 'um fio de cabelo',
    cappello: 'chapéu',
    pena: 'pena, dó',
    penna: 'caneta',
    sono: 'sou',
    sonno: 'sono',
    rana: 'rã',
    lana: 'lã',
    mare: 'mar',
    male: 'dor',
    bacca: 'baga, frutinha',
    vacca: 'vaca',
    vino: 'vinho',
    voto: 'voto',
    foto: 'foto',
    alto: 'alto',
    auto: 'carro',
    cane: 'cachorro',
    cani: 'cachorros',
    chiave: 'chave',
    chiavi: 'chaves',
    pesche: 'pêssegos',
  },
};

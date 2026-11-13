// Glossario cliccabile dei brani di studio.
//
// L'HTML della pagina NON contiene marcatura: lo script legge un file JSON
// (indicato da data-glossario sul tag <script>), trova quelle parole dentro
// .story-text e le rende cliccabili. Così lo stesso brano vale per tutte e 9
// le lingue e i PDF restano puliti.
//
// Al clic si apre un riquadro con: la parola, la pronuncia (speechSynthesis,
// come nelle schede di vocabolario), la traduzione nella lingua della pagina
// e una frase d'esempio in italiano.
(function () {
  const script = document.currentScript;
  const sorgente = script && script.dataset.glossario;
  if (!sorgente) return;

  const lingua = (document.documentElement.lang || 'it').toLowerCase().split('-')[0];

  // Nelle pagine straniere il riquadro dà la traduzione della parola; nella
  // pagina italiana niente definizione (complicava le cose): solo pronuncia e
  // tre frasi d'esempio con la parola nello stesso significato del testo.
  const etichette = {
    it: { glossa: '', esempio: 'Esempi', ascolta: 'Ascolta', chiudi: 'Chiudi', suggerimento: 'Tocca le parole sottolineate: pronuncia e tre esempi.' },
    en: { glossa: 'Translation', esempio: 'Examples', ascolta: 'Listen', chiudi: 'Close', suggerimento: 'Tap the underlined words for the translation, three examples and the pronunciation.', mostra: 'Show translation', nascondi: 'Hide translation', suggerimentoTesto: 'Under each paragraph you can open the translation. Try reading on your own first!' },
    es: { glossa: 'Traducción', esempio: 'Ejemplos', ascolta: 'Escuchar', chiudi: 'Cerrar', suggerimento: 'Toca las palabras subrayadas: traducción, tres ejemplos y pronunciación.', mostra: 'Ver traducción', nascondi: 'Ocultar traducción', suggerimentoTesto: 'Debajo de cada párrafo puedes abrir la traducción. ¡Intenta leer primero solo!' },
    pt: { glossa: 'Tradução', esempio: 'Exemplos', ascolta: 'Ouvir', chiudi: 'Fechar', suggerimento: 'Toque nas palavras sublinhadas: tradução, três exemplos e pronúncia.', mostra: 'Ver tradução', nascondi: 'Ocultar tradução', suggerimentoTesto: 'Embaixo de cada parágrafo você pode abrir a tradução. Tente ler sozinho primeiro!' },
    fr: { glossa: 'Traduction', esempio: 'Exemples', ascolta: 'Écouter', chiudi: 'Fermer', suggerimento: 'Touchez les mots soulignés : traduction, trois exemples et prononciation.', mostra: 'Voir la traduction', nascondi: 'Masquer la traduction', suggerimentoTesto: 'Sous chaque paragraphe, vous pouvez ouvrir la traduction. Essayez d’abord de lire seul !' },
    cs: { glossa: 'Překlad', esempio: 'Příklady', ascolta: 'Poslechnout', chiudi: 'Zavřít', suggerimento: 'Klepněte na podtržená slova: překlad, tři příklady a výslovnost.', mostra: 'Zobrazit překlad', nascondi: 'Skrýt překlad', suggerimentoTesto: 'Pod každým odstavcem si můžete otevřít překlad. Zkuste ale nejdřív číst sami!' },
    pl: { glossa: 'Tłumaczenie', esempio: 'Przykłady', ascolta: 'Posłuchaj', chiudi: 'Zamknij', suggerimento: 'Dotknij podkreślonych słów: tłumaczenie, trzy przykłady i wymowa.', mostra: 'Pokaż tłumaczenie', nascondi: 'Ukryj tłumaczenie', suggerimentoTesto: 'Pod każdym akapitem możesz otworzyć tłumaczenie. Najpierw spróbuj przeczytać sam!' },
    tr: { glossa: 'Çeviri', esempio: 'Örnekler', ascolta: 'Dinle', chiudi: 'Kapat', suggerimento: 'Altı çizili kelimelere dokunun: çeviri, üç örnek ve telaffuz.', mostra: 'Çeviriyi göster', nascondi: 'Çeviriyi gizle', suggerimentoTesto: 'Her paragrafın altında çeviriyi açabilirsiniz. Ama önce kendiniz okumayı deneyin!' },
    de: { glossa: 'Übersetzung', esempio: 'Beispiele', ascolta: 'Anhören', chiudi: 'Schließen', suggerimento: 'Tippe auf die unterstrichenen Wörter: Übersetzung, drei Beispiele und Aussprache.', mostra: 'Übersetzung zeigen', nascondi: 'Übersetzung ausblenden', suggerimentoTesto: 'Unter jedem Absatz kannst du die Übersetzung öffnen. Versuch aber zuerst, allein zu lesen!' },
    ja: { glossa: '訳', esempio: '例文', ascolta: '発音を聞く', chiudi: '閉じる', suggerimento: '下線のある単語をタップすると、訳・例文3つ・発音が出ます。', mostra: '訳を見る', nascondi: '訳を隠す', suggerimentoTesto: '各段落の下で訳を開けます。まずは自分で読んでみましょう！' },
  };
  const testo = etichette[lingua] || etichette.it;

  const normalizza = (valore) =>
    valore
      .toLocaleLowerCase('it')
      .normalize('NFD')
      .replace(/[̀-ͯ]/g, '')
      .replace(/[‘’]/g, "'");

  fetch(sorgente)
    .then((risposta) => (risposta.ok ? risposta.json() : Promise.reject(risposta.status)))
    .then(costruisci)
    .catch(() => {
      /* Senza glossario la pagina resta esattamente com'era. */
    });

  function costruisci(dati) {
    const voci = (dati && dati.voci) || [];
    if (!voci.length) return;

    // Una stessa forma può avere più voci: «superficie» è quella dell'acqua
    // nel primo paragrafo e «in superficie» nell'ultimo. Le voci con una
    // condizione (contesto o livelli) vengono provate per prime; quella senza
    // condizioni resta come ripiego.
    const indice = new Map();
    voci.forEach((voce) => {
      (voce.forme || []).forEach((forma) => {
        const chiave = normalizza(forma);
        const elenco = indice.get(chiave) || [];
        if (voce.contesto || voce.livelli) elenco.unshift(voce);
        else elenco.push(voce);
        indice.set(chiave, elenco);
      });
    });

    const blocchi = document.querySelectorAll('.story-text');
    if (!blocchi.length) return;

    let trovate = 0;
    blocchi.forEach((blocco) => {
      // Ogni voce si segna una volta sola per livello: il testo resta leggibile.
      // Il conto è per voce, non per parola, così i due sensi di «superficie»
      // restano tutti e due cliccabili.
      const gia = new Set();
      const livello = (blocco.closest('.story-card') || {}).id || '';
      const nodi = [];
      const walker = document.createTreeWalker(blocco, NodeFilter.SHOW_TEXT);
      while (walker.nextNode()) nodi.push(walker.currentNode);

      nodi.forEach((nodo) => {
        const testoNodo = nodo.nodeValue;
        const frase = normalizza((nodo.parentElement || blocco).textContent || '');
        const parole = /[\p{L}\p{M}]+/gu;
        let corrispondenza;
        let ultimo = 0;
        let frammento = null;

        while ((corrispondenza = parole.exec(testoNodo))) {
          const chiave = normalizza(corrispondenza[0]);
          const voce = scegliVoce(indice.get(chiave), frase, livello);
          if (!voce || gia.has(voce)) continue;
          gia.add(voce);

          frammento = frammento || document.createDocumentFragment();
          if (corrispondenza.index > ultimo) {
            frammento.appendChild(document.createTextNode(testoNodo.slice(ultimo, corrispondenza.index)));
          }
          ultimo = corrispondenza.index + corrispondenza[0].length;
          // La punteggiatura subito dopo resta attaccata alla parola: il
          // pulsante è un blocco a sé e la virgola finiva da sola a capo.
          const punteggiatura = testoNodo.slice(ultimo).match(/^[,.;:!?…»”’)]+/);
          if (punteggiatura) {
            const insieme = document.createElement('span');
            insieme.className = 'gloss-nowrap';
            insieme.append(creaBottone(corrispondenza[0], voce), punteggiatura[0]);
            frammento.appendChild(insieme);
            ultimo += punteggiatura[0].length;
          } else {
            frammento.appendChild(creaBottone(corrispondenza[0], voce));
          }
          trovate += 1;
        }

        if (frammento) {
          if (ultimo < testoNodo.length) frammento.appendChild(document.createTextNode(testoNodo.slice(ultimo)));
          nodo.parentNode.replaceChild(frammento, nodo);
        }
      });
    });

    const tradotti = aggiungiTraduzioni(dati, blocchi);
    if (!trovate && !tradotti) return;
    aggiungiSuggerimento(blocchi[0], trovate, tradotti);
  }

  // Traduzione del brano, paragrafo per paragrafo, nella lingua della pagina.
  // Nel JSON: testo[lingua][livello] = un testo per ogni <p> di .story-text,
  // nello stesso ordine; «\n» va a capo come i <br> delle battute di dialogo.
  // È chiusa finché non la si apre: chi legge prova prima da solo.
  function aggiungiTraduzioni(dati, blocchi) {
    const perLingua = dati.testo && dati.testo[lingua];
    if (!perLingua || lingua === 'it' || !testo.mostra) return 0;
    const linguaPagina = document.documentElement.lang || lingua;
    let aggiunte = 0;
    blocchi.forEach((blocco) => {
      const livello = (blocco.closest('.story-card') || {}).id || '';
      const traduzioni = perLingua[livello];
      if (!traduzioni) return;
      const paragrafi = Array.from(blocco.children).filter((figlio) => figlio.tagName === 'P');
      // Se il numero dei paragrafi non torna, il brano è cambiato: meglio
      // nessuna traduzione che una traduzione accanto al paragrafo sbagliato.
      if (paragrafi.length !== traduzioni.length) return;
      paragrafi.forEach((paragrafo, i) => {
        const riquadroTr = document.createElement('div');
        riquadroTr.className = 'gloss-tr';
        const bottone = document.createElement('button');
        bottone.type = 'button';
        bottone.className = 'gloss-tr-toggle';
        bottone.textContent = testo.mostra;
        bottone.setAttribute('aria-expanded', 'false');
        const resa = document.createElement('p');
        resa.className = 'gloss-tr-text';
        resa.lang = linguaPagina;
        resa.hidden = true;
        resa.textContent = traduzioni[i];
        bottone.addEventListener('click', () => {
          const apri = resa.hidden;
          resa.hidden = !apri;
          bottone.textContent = apri ? testo.nascondi : testo.mostra;
          bottone.setAttribute('aria-expanded', String(apri));
        });
        riquadroTr.append(bottone, resa);
        paragrafo.after(riquadroTr);
        aggiunte += 1;
      });
    });
    return aggiunte;
  }

  // La stessa parola non ha sempre lo stesso significato: fra le voci che
  // hanno quella forma si sceglie quella che vale in questo punto del testo.
  // `contesto` è una parola vicina che deve comparire nello stesso paragrafo,
  // `livelli` limita la voce a certi livelli (per esempio solo al C1).
  function scegliVoce(candidate, frase, livello) {
    if (!candidate) return null;
    return (
      candidate.find((voce) => {
        if (voce.livelli && !voce.livelli.includes(livello)) return false;
        if (voce.contesto && !frase.includes(normalizza(voce.contesto))) return false;
        return true;
      }) || null
    );
  }

  function creaBottone(parolaNelTesto, voce) {
    const bottone = document.createElement('button');
    bottone.type = 'button';
    bottone.className = 'gloss-word';
    bottone.textContent = parolaNelTesto;
    bottone.setAttribute('aria-expanded', 'false');
    bottone.addEventListener('click', (evento) => {
      evento.stopPropagation();
      apri(bottone, voce);
    });
    return bottone;
  }

  function aggiungiSuggerimento(primoBlocco, parole, traduzioni) {
    const suggerimento = document.createElement('p');
    suggerimento.className = 'gloss-hint';
    suggerimento.textContent = [parole ? testo.suggerimento : '', traduzioni ? testo.suggerimentoTesto : '']
      .filter(Boolean)
      .join(' ');
    primoBlocco.parentNode.insertBefore(suggerimento, primoBlocco);
  }

  // --- Riquadro ------------------------------------------------------------

  let riquadro = null;
  let attivo = null;

  function creaRiquadro() {
    riquadro = document.createElement('div');
    riquadro.className = 'gloss-pop';
    riquadro.setAttribute('role', 'dialog');
    riquadro.hidden = true;
    riquadro.innerHTML =
      '<button type="button" class="gloss-close"></button>' +
      '<p class="gloss-head"><strong lang="it"></strong></p>' +
      '<button type="button" class="gloss-speak" hidden></button>' +
      '<img class="gloss-img" alt="" hidden loading="lazy" decoding="async">' +
      '<p class="gloss-translation"><span class="gloss-label"></span><span class="gloss-value"></span></p>' +
      '<div class="gloss-example"><span class="gloss-label"></span><ol class="gloss-examples" lang="it"></ol></div>';
    document.body.appendChild(riquadro);

    riquadro.querySelector('.gloss-close').textContent = '×';
    riquadro.querySelector('.gloss-close').setAttribute('aria-label', testo.chiudi);
    riquadro.querySelector('.gloss-close').addEventListener('click', chiudi);
    riquadro.addEventListener('click', (evento) => evento.stopPropagation());

    const parla = riquadro.querySelector('.gloss-speak');
    if ('speechSynthesis' in window) {
      parla.hidden = false;
      parla.textContent = '🔊 ' + testo.ascolta;
      parla.addEventListener('click', () => pronuncia(parla.dataset.word || '', 0.85));
    }
    return riquadro;
  }

  function apri(bottone, voce) {
    if (!riquadro) creaRiquadro();
    if (attivo === bottone && !riquadro.hidden) return chiudi();
    if (attivo) attivo.setAttribute('aria-expanded', 'false');
    attivo = bottone;
    bottone.setAttribute('aria-expanded', 'true');

    riquadro.setAttribute('aria-label', voce.parola);
    riquadro.querySelector('.gloss-head strong').textContent = voce.parola;
    riquadro.querySelector('.gloss-speak').dataset.word = voce.parola;

    const immagine = riquadro.querySelector('.gloss-img');
    if (voce.immagine) {
      immagine.src = voce.immagine;
      immagine.hidden = false;
    } else {
      immagine.removeAttribute('src');
      immagine.hidden = true;
    }

    // Nella pagina italiana nessuna definizione: solo gli esempi.
    const traduzione = lingua === 'it' ? '' : (voce.traduzioni && voce.traduzioni[lingua]) || '';
    const rigaTraduzione = riquadro.querySelector('.gloss-translation');
    rigaTraduzione.hidden = !traduzione;
    rigaTraduzione.querySelector('.gloss-label').textContent = testo.glossa;
    rigaTraduzione.querySelector('.gloss-value').textContent = traduzione;

    const esempi = (voce.esempi || (voce.esempio ? [voce.esempio] : [])).slice(0, 3);
    const esempio = riquadro.querySelector('.gloss-example');
    const lista = esempio.querySelector('.gloss-examples');
    lista.replaceChildren();
    esempio.hidden = !esempi.length;
    esempio.querySelector('.gloss-label').textContent = testo.esempio;
    esempi.forEach((frase) => lista.appendChild(rigaEsempio(frase, voce)));

    riquadro.hidden = false;
    posiziona(bottone);
    riquadro.querySelector('.gloss-close').focus({ preventScroll: true });
  }

  // Una frase d'esempio: la parola in grassetto (in qualunque delle sue forme)
  // e, se il browser sa parlare, un pulsantino per ascoltarla.
  function rigaEsempio(frase, voce) {
    const riga = document.createElement('li');
    const forme = new Set([voce.parola, ...(voce.forme || []), ...(voce.formeEsempi || [])].map(normalizza));
    const parole = /[\p{L}\p{M}]+/gu;
    let ultimo = 0;
    let corrispondenza;
    while ((corrispondenza = parole.exec(frase))) {
      if (!forme.has(normalizza(corrispondenza[0]))) continue;
      riga.append(frase.slice(ultimo, corrispondenza.index));
      const forte = document.createElement('strong');
      forte.textContent = corrispondenza[0];
      riga.append(forte);
      ultimo = corrispondenza.index + corrispondenza[0].length;
    }
    riga.append(frase.slice(ultimo));
    if ('speechSynthesis' in window) {
      const ascolta = document.createElement('button');
      ascolta.type = 'button';
      ascolta.className = 'gloss-say';
      ascolta.textContent = '🔊';
      ascolta.setAttribute('aria-label', testo.ascolta);
      ascolta.addEventListener('click', () => pronuncia(frase, 0.9));
      riga.append(' ', ascolta);
    }
    return riga;
  }

  function pronuncia(testoDaDire, velocita) {
    speechSynthesis.cancel();
    const voce = new SpeechSynthesisUtterance(testoDaDire);
    voce.lang = 'it-IT';
    voce.rate = velocita;
    speechSynthesis.speak(voce);
  }

  function posiziona(bottone) {
    const rettangolo = bottone.getBoundingClientRect();
    const larghezza = riquadro.offsetWidth;
    const margine = 12;
    let sinistra = rettangolo.left + rettangolo.width / 2 - larghezza / 2;
    sinistra = Math.max(margine, Math.min(sinistra, document.documentElement.clientWidth - larghezza - margine));

    // Sotto la parola, oppure sopra se sotto non ci sta. In ogni caso dentro
    // lo schermo e sotto l'header, che resta fisso in alto.
    const alto = riquadro.offsetHeight;
    const testata = (document.querySelector('.site-header')?.offsetHeight || 0) + 8;
    const spazioSotto = window.innerHeight - rettangolo.bottom;
    const sopra = spazioSotto < alto + margine && rettangolo.top - alto - 8 > testata;
    let cima = sopra ? rettangolo.top - alto - 8 : rettangolo.bottom + 8;
    cima = Math.min(cima, window.innerHeight - alto - margine);
    cima = Math.max(cima, testata);

    riquadro.style.left = sinistra + window.scrollX + 'px';
    riquadro.style.top = cima + window.scrollY + 'px';
  }

  function chiudi() {
    if (!riquadro || riquadro.hidden) return;
    riquadro.hidden = true;
    if ('speechSynthesis' in window) speechSynthesis.cancel();
    if (attivo) {
      attivo.setAttribute('aria-expanded', 'false');
      attivo.focus({ preventScroll: true });
      attivo = null;
    }
  }

  document.addEventListener('click', chiudi);
  document.addEventListener('keydown', (evento) => {
    if (evento.key === 'Escape') chiudi();
  });
  window.addEventListener('resize', chiudi);
})();

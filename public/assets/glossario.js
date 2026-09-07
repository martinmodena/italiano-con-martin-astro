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

  const etichette = {
    it: { glossa: 'Significato', esempio: 'Esempio', ascolta: 'Ascolta', chiudi: 'Chiudi', suggerimento: 'Tocca le parole sottolineate: significato, esempio e pronuncia.' },
    en: { glossa: 'Translation', esempio: 'Example', ascolta: 'Listen', chiudi: 'Close', suggerimento: 'Tap the underlined words for the translation, an example and the pronunciation.' },
    es: { glossa: 'Traducción', esempio: 'Ejemplo', ascolta: 'Escuchar', chiudi: 'Cerrar', suggerimento: 'Toca las palabras subrayadas: traducción, ejemplo y pronunciación.' },
    fr: { glossa: 'Traduction', esempio: 'Exemple', ascolta: 'Écouter', chiudi: 'Fermer', suggerimento: 'Touchez les mots soulignés : traduction, exemple et prononciation.' },
    cs: { glossa: 'Překlad', esempio: 'Příklad', ascolta: 'Poslechnout', chiudi: 'Zavřít', suggerimento: 'Klepněte na podtržená slova: překlad, příklad a výslovnost.' },
    pl: { glossa: 'Tłumaczenie', esempio: 'Przykład', ascolta: 'Posłuchaj', chiudi: 'Zamknij', suggerimento: 'Dotknij podkreślonych słów: tłumaczenie, przykład i wymowa.' },
    tr: { glossa: 'Çeviri', esempio: 'Örnek', ascolta: 'Dinle', chiudi: 'Kapat', suggerimento: 'Altı çizili kelimelere dokunun: çeviri, örnek ve telaffuz.' },
    de: { glossa: 'Übersetzung', esempio: 'Beispiel', ascolta: 'Anhören', chiudi: 'Schließen', suggerimento: 'Tippe auf die unterstrichenen Wörter: Übersetzung, Beispiel und Aussprache.' },
    ja: { glossa: '訳', esempio: '例文', ascolta: '発音を聞く', chiudi: '閉じる', suggerimento: '下線のある単語をタップすると、訳・例文・発音が出ます。' },
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
          frammento.appendChild(creaBottone(corrispondenza[0], voce));
          ultimo = corrispondenza.index + corrispondenza[0].length;
          trovate += 1;
        }

        if (frammento) {
          if (ultimo < testoNodo.length) frammento.appendChild(document.createTextNode(testoNodo.slice(ultimo)));
          nodo.parentNode.replaceChild(frammento, nodo);
        }
      });
    });

    if (!trovate) return;
    aggiungiSuggerimento(blocchi[0]);
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

  function aggiungiSuggerimento(primoBlocco) {
    const suggerimento = document.createElement('p');
    suggerimento.className = 'gloss-hint';
    suggerimento.textContent = testo.suggerimento;
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
      '<p class="gloss-example"><span class="gloss-label"></span><span lang="it"></span></p>';
    document.body.appendChild(riquadro);

    riquadro.querySelector('.gloss-close').textContent = '×';
    riquadro.querySelector('.gloss-close').setAttribute('aria-label', testo.chiudi);
    riquadro.querySelector('.gloss-close').addEventListener('click', chiudi);
    riquadro.addEventListener('click', (evento) => evento.stopPropagation());

    const parla = riquadro.querySelector('.gloss-speak');
    if ('speechSynthesis' in window) {
      parla.hidden = false;
      parla.textContent = '🔊 ' + testo.ascolta;
      parla.addEventListener('click', () => {
        speechSynthesis.cancel();
        const voce = new SpeechSynthesisUtterance(parla.dataset.word || '');
        voce.lang = 'it-IT';
        voce.rate = 0.85;
        speechSynthesis.speak(voce);
      });
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

    const traduzione = (voce.traduzioni && (voce.traduzioni[lingua] || voce.traduzioni.it)) || '';
    riquadro.querySelector('.gloss-translation .gloss-label').textContent = testo.glossa;
    riquadro.querySelector('.gloss-translation .gloss-value').textContent = traduzione;

    const esempio = riquadro.querySelector('.gloss-example');
    if (voce.esempio) {
      esempio.hidden = false;
      esempio.querySelector('.gloss-label').textContent = testo.esempio;
      esempio.querySelector('span[lang="it"]').textContent = voce.esempio;
    } else {
      esempio.hidden = true;
    }

    riquadro.hidden = false;
    posiziona(bottone);
    riquadro.querySelector('.gloss-close').focus({ preventScroll: true });
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

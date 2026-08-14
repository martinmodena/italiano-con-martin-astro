import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as cheerio from 'cheerio';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const siteRoot = path.join(root, 'legacy-html');
const template = readFileSync(path.join(siteRoot, 'vocabolario', 'cucina.html'), 'utf8');

const lessons = [
  {
    slug: 'abbigliamento',
    title: 'L’abbigliamento',
    seoTitle: 'Vocabolario dell’abbigliamento in italiano | Italiano con Martin',
    description: 'Impara 8 parole italiane dell’abbigliamento con immagini, tre frasi d’esempio, pronuncia ed esercizi.',
    lead: 'Apri l’armadio e scopri ogni parola attraverso un’immagine e tre frasi italiane d’esempio.',
    heroAlt: 'Abbigliamento illustrato con maglietta, camicia, pantaloni, gonna, vestito, giacca, scarpe e cappello',
    words: [
      ['maglietta', 'la maglietta', 'Una maglietta', ['Indosso una maglietta bianca.', 'La maglietta è di cotone.', 'Metto la maglietta nell’armadio.'], ['maglietta', 'la maglietta', 't-shirt', 'la t-shirt', 't shirt', 'la t shirt']],
      ['camicia', 'la camicia', 'Una camicia', ['Martin porta una camicia azzurra.', 'Abbottono la camicia.', 'La camicia è stirata.'], ['camicia', 'la camicia']],
      ['pantaloni', 'i pantaloni', 'Un paio di pantaloni', ['Questi pantaloni sono neri.', 'Indosso i pantaloni per andare al lavoro.', 'I pantaloni hanno quattro tasche.'], ['pantaloni', 'i pantaloni', 'calzoni', 'i calzoni']],
      ['gonna', 'la gonna', 'Una gonna', ['Licia indossa una gonna lunga.', 'La gonna arriva al ginocchio.', 'Questa gonna è molto elegante.'], ['gonna', 'la gonna']],
      ['vestito', 'il vestito', 'Un vestito', ['Indosso un vestito blu.', 'Il vestito è nell’armadio.', 'Questo vestito mi sta bene.'], ['vestito', 'il vestito', 'abito', 'l’abito', "l'abito"]],
      ['giacca', 'la giacca', 'Una giacca', ['Metto la giacca perché fa fresco.', 'La giacca ha due tasche.', 'Appendo la giacca.'], ['giacca', 'la giacca']],
      ['scarpe', 'le scarpe', 'Un paio di scarpe', ['Mi metto le scarpe.', 'Le scarpe sono sotto il letto.', 'Queste scarpe sono comode.'], ['scarpe', 'le scarpe']],
      ['cappello', 'il cappello', 'Un cappello', ['Porto un cappello al mare.', 'Il cappello protegge dal sole.', 'Tolgo il cappello quando entro.'], ['cappello', 'il cappello']],
    ],
    translations: [
      ['I am wearing a white T-shirt.', 'Indosso una maglietta bianca.'],
      ['Martin is wearing a light-blue shirt.', 'Martin porta una camicia azzurra.'],
      ['These trousers are black.', 'Questi pantaloni sono neri.'],
      ['The skirt reaches the knee.', 'La gonna arriva al ginocchio.'],
      ['The dress is in the wardrobe.', 'Il vestito è nell’armadio.'],
      ['The jacket has two pockets.', 'La giacca ha due tasche.'],
      ['These shoes are comfortable.', 'Queste scarpe sono comode.'],
      ['The hat protects from the sun.', 'Il cappello protegge dal sole.'],
    ],
  },
  {
    slug: 'cibo',
    title: 'Il cibo',
    seoTitle: 'Vocabolario del cibo in italiano | Italiano con Martin',
    description: 'Impara 8 parole italiane del cibo con immagini, tre frasi d’esempio, pronuncia ed esercizi.',
    lead: 'Siediti a tavola e scopri ogni parola attraverso un’immagine e tre frasi italiane d’esempio.',
    heroAlt: 'Cibo illustrato con pane, pasta, riso, carne, pesce, formaggio, uovo e mela',
    words: [
      ['pane', 'il pane', 'Un pane', ['Compro il pane fresco.', 'Taglio una fetta di pane.', 'Mangio il pane con il formaggio.'], ['pane', 'il pane']],
      ['pasta', 'la pasta', 'Della pasta', ['Cucino la pasta.', 'La pasta è al dente.', 'Condisco la pasta con il pomodoro.'], ['pasta', 'la pasta']],
      ['riso', 'il riso', 'Del riso', ['Il riso cuoce nella pentola.', 'Mangio il riso con le verdure.', 'Il riso è ancora caldo.'], ['riso', 'il riso']],
      ['carne', 'la carne', 'Della carne', ['Cucino la carne alla griglia.', 'La carne è tenera.', 'Taglio la carne con il coltello.'], ['carne', 'la carne']],
      ['pesce', 'il pesce', 'Un pesce', ['Il pesce è fresco.', 'Cucino il pesce al forno.', 'Mangiamo pesce il venerdì.'], ['pesce', 'il pesce']],
      ['formaggio', 'il formaggio', 'Del formaggio', ['Taglio un pezzo di formaggio.', 'Il formaggio è nel frigorifero.', 'Metto il formaggio sulla pasta.'], ['formaggio', 'il formaggio']],
      ['uovo', 'l’uovo', 'Un uovo', ['Rompo un uovo nella ciotola.', 'L’uovo è sodo.', 'Mangio un uovo a colazione.'], ['uovo', 'un uovo', 'l’uovo', "l'uovo"]],
      ['mela', 'la mela', 'Una mela', ['Lavo la mela.', 'La mela è rossa.', 'Mangio una mela come merenda.'], ['mela', 'la mela']],
    ],
    translations: [
      ['I buy fresh bread.', 'Compro il pane fresco.'],
      ['The pasta is al dente.', 'La pasta è al dente.'],
      ['I eat rice with vegetables.', 'Mangio il riso con le verdure.'],
      ['I cook the meat on the grill.', 'Cucino la carne alla griglia.'],
      ['I cook the fish in the oven.', 'Cucino il pesce al forno.'],
      ['The cheese is in the refrigerator.', 'Il formaggio è nel frigorifero.'],
      ['I eat an egg for breakfast.', 'Mangio un uovo a colazione.'],
      ['The apple is red.', 'La mela è rossa.'],
    ],
  },
  {
    slug: 'salotto',
    title: 'Il salotto',
    seoTitle: 'Vocabolario del salotto in italiano | Italiano con Martin',
    description: 'Impara 8 parole italiane del salotto con immagini, tre frasi d’esempio, pronuncia ed esercizi.',
    lead: 'Entra nel salotto e scopri ogni parola attraverso un’immagine e tre frasi italiane d’esempio.',
    heroAlt: 'Salotto illustrato con divano, poltrona, televisore, lampada, tappeto e libreria',
    words: [
      ['divano', 'il divano', 'Un divano', ['Mi siedo sul divano.', 'Il divano è davanti al televisore.', 'Sul divano ci sono due cuscini.'], ['divano', 'il divano']],
      ['poltrona', 'la poltrona', 'Una poltrona', ['La nonna legge in poltrona.', 'La poltrona è accanto alla lampada.', 'Questa poltrona è molto comoda.'], ['poltrona', 'la poltrona']],
      ['televisore', 'il televisore', 'Un televisore', ['Accendo il televisore.', 'Il televisore è davanti al divano.', 'Guardiamo un film in televisione.'], ['televisore', 'il televisore', 'televisione', 'la televisione', 'tv', 'la tv']],
      ['lampada', 'la lampada', 'Una lampada', ['Accendo la lampada perché è buio.', 'La lampada è vicino alla poltrona.', 'La lampada illumina il salotto.'], ['lampada', 'la lampada', 'lampada da terra', 'la lampada da terra']],
      ['tappeto', 'il tappeto', 'Un tappeto', ['Il tappeto è sotto il tavolino.', 'Cammino sul tappeto.', 'Questo tappeto è morbido.'], ['tappeto', 'il tappeto']],
      ['cuscino', 'il cuscino', 'Un cuscino', ['Appoggio la testa sul cuscino.', 'Il cuscino è sul divano.', 'Questo cuscino è blu.'], ['cuscino', 'il cuscino']],
      ['libreria', 'la libreria', 'Una libreria', ['I libri sono nella libreria.', 'La libreria è contro la parete.', 'Metto il romanzo nella libreria.'], ['libreria', 'la libreria', 'scaffale', 'lo scaffale']],
      ['telecomando', 'il telecomando', 'Un telecomando', ['Cambio canale con il telecomando.', 'Il telecomando è sul divano.', 'Non trovo il telecomando.'], ['telecomando', 'il telecomando']],
    ],
    translations: [
      ['I sit on the sofa.', 'Mi siedo sul divano.'],
      ['The armchair is next to the lamp.', 'La poltrona è accanto alla lampada.'],
      ['I turn on the television.', 'Accendo il televisore.'],
      ['The lamp lights up the living room.', 'La lampada illumina il salotto.'],
      ['The rug is under the coffee table.', 'Il tappeto è sotto il tavolino.'],
      ['The cushion is on the sofa.', 'Il cuscino è sul divano.'],
      ['The books are in the bookcase.', 'I libri sono nella libreria.'],
      ['I cannot find the remote control.', 'Non trovo il telecomando.'],
    ],
  },
  {
    slug: 'ufficio',
    title: 'L’ufficio',
    seoTitle: 'Vocabolario dell’ufficio in italiano | Italiano con Martin',
    description: 'Impara 8 parole italiane dell’ufficio con immagini, tre frasi d’esempio, pronuncia ed esercizi.',
    lead: 'Entra in ufficio e scopri ogni parola attraverso un’immagine e tre frasi italiane d’esempio.',
    heroAlt: 'Ufficio illustrato con scrivania, computer, tastiera, mouse, stampante e documenti',
    words: [
      ['scrivania', 'la scrivania', 'Una scrivania', ['Il computer è sulla scrivania.', 'Lavoro alla scrivania.', 'La scrivania ha due cassetti.'], ['scrivania', 'la scrivania']],
      ['computer', 'il computer', 'Un computer', ['Accendo il computer.', 'Scrivo un’email al computer.', 'Il computer è sulla scrivania.'], ['computer', 'il computer', 'pc', 'il pc']],
      ['tastiera', 'la tastiera', 'Una tastiera', ['Scrivo con la tastiera.', 'La tastiera è davanti al computer.', 'Pulisco la tastiera.'], ['tastiera', 'la tastiera']],
      ['mouse', 'il mouse', 'Un mouse', ['Muovo il cursore con il mouse.', 'Il mouse è accanto alla tastiera.', 'Clicco con il mouse.'], ['mouse', 'il mouse']],
      ['stampante', 'la stampante', 'Una stampante', ['La stampante è vicino alla scrivania.', 'Stampo il documento.', 'Nella stampante c’è un foglio.'], ['stampante', 'la stampante']],
      ['documento', 'il documento', 'Un documento', ['Leggo il documento.', 'Il documento è sulla scrivania.', 'Invio il documento per email.'], ['documento', 'il documento']],
      ['quaderno', 'il quaderno', 'Un quaderno', ['Prendo appunti sul quaderno.', 'Il quaderno è aperto.', 'Scrivo una data sul quaderno.'], ['quaderno', 'il quaderno', 'taccuino', 'il taccuino']],
      ['cestino', 'il cestino', 'Un cestino', ['Butto la carta nel cestino.', 'Il cestino è sotto la scrivania.', 'Il cestino è vuoto.'], ['cestino', 'il cestino', 'cestino della carta', 'il cestino della carta']],
    ],
    translations: [
      ['The computer is on the desk.', 'Il computer è sulla scrivania.'],
      ['I write an email on the computer.', 'Scrivo un’email al computer.'],
      ['The keyboard is in front of the computer.', 'La tastiera è davanti al computer.'],
      ['The mouse is next to the keyboard.', 'Il mouse è accanto alla tastiera.'],
      ['I print the document.', 'Stampo il documento.'],
      ['I send the document by email.', 'Invio il documento per email.'],
      ['I take notes in the notebook.', 'Prendo appunti sul quaderno.'],
      ['I throw the paper in the wastebasket.', 'Butto la carta nel cestino.'],
    ],
  },
];

const escapeAttribute = (value) => String(value).replaceAll('&', '&amp;').replaceAll('"', '&quot;');

for (const lesson of lessons) {
  const $ = cheerio.load(template, { decodeEntities: false });
  const canonical = `https://italianoconmartin.com/vocabolario/${lesson.slug}.html`;
  $('link[rel="alternate"]').remove();
  $('title').text(lesson.seoTitle);
  $('meta[name="description"]').attr('content', lesson.description);
  $('link[rel="canonical"]').attr('href', canonical);
  $('meta[property="og:title"]').attr('content', lesson.title);
  $('meta[property="og:description"]').attr('content', lesson.description);
  $('meta[property="og:url"]').attr('content', canonical);
  $('meta[property="og:image"]').attr('content', `https://italianoconmartin.com/assets/vocabolario/${lesson.slug}-hero.webp`);
  $('.breadcrumbs').html(`<a href="../">Home</a> / <a href="./">Vocabolario</a> / ${lesson.title}`);
  $('.page-intro h1').text(lesson.title);
  $('.page-intro .lead').text(lesson.lead);
  $('.vocabulary-hero').attr({ src: `../assets/vocabolario/${lesson.slug}-hero.webp`, alt: lesson.heroAlt });

  $('.word-grid').html(
    lesson.words.map(([image, word, alt, examples]) => `<article class="word-card">
      <img src="../assets/vocabolario/${image}.webp" alt="${escapeAttribute(alt)}" loading="lazy" decoding="async">
      <div class="word-card-body"><h2>${word}</h2><div class="word-examples"><strong>3 frasi d’esempio</strong><ol>
        ${examples.map((example) => `<li><span lang="it">${example}</span></li>`).join('')}
      </ol></div><button class="speak-word" data-word="${escapeAttribute(word)}" type="button">🔊 Ascolta</button></div>
    </article>`).join('')
  );
  $('.vocabulary-note').first().html('<strong>Piccola osservazione</strong><p>Impara sempre il nome insieme all’articolo. In questo modo ricorderai anche il genere della parola.</p>');

  $('.word-practice-section .eyebrow').text(`${lesson.words.length} esercizi con immagini`);
  $('#word-practice-title').text('Riconosci la parola');
  $('.word-practice-section .practice-heading > p').html('Osserva l’immagine e scrivi la parola italiana. Puoi scrivere anche l’articolo; sono accettati anche i sinonimi indicati.');
  $('#word-progress-text').text(`0 di ${lesson.words.length} corrette · 0%`);
  $('#word-progress').attr({ max: String(lesson.words.length), value: '0' }).text('0%');
  $('.word-tests').html(
    lesson.words.map(([image, , , , answers], index) => `<article class="word-test" data-answer="${escapeAttribute(JSON.stringify(answers))}" data-key="${index + 1}">
      <img src="../assets/vocabolario/${image}.webp" alt="Oggetto da riconoscere: esercizio ${index + 1}" loading="lazy" decoding="async">
      <div class="word-test-body"><span class="test-number">${index + 1}</span><label for="word-test-${index + 1}">Scrivi la parola in italiano</label><input id="word-test-${index + 1}" type="text" autocomplete="off" spellcheck="true" placeholder="La parola…"><p class="word-test-feedback" aria-live="polite"></p></div>
    </article>`).join('')
  );

  $('.translation-free-section .eyebrow').text(`${lesson.translations.length} frasi libere`);
  $('#translation-practice-title').text('Frasi da tradurre');
  $('.translation-free-section .practice-heading > p').text('Scrivi la tua traduzione e poi confrontala con una soluzione possibile. Queste attività vengono salvate sul dispositivo, ma non modificano il punteggio.');
  $('.translation-exercises').html(
    lesson.translations.map(([prompt, solution], index) => `<article class="translation-exercise" data-key="${index + 1}"><div class="exercise-number" aria-hidden="true">${index + 1}</div><div class="translation-exercise-body">
      <p class="translation-prompt"><span class="prompt-label">Traduci liberamente</span><strong lang="en">${prompt}</strong></p>
      <label for="translation-${index + 1}">La tua traduzione</label><textarea id="translation-${index + 1}" rows="2" autocomplete="off" spellcheck="true"></textarea>
      <div class="translation-actions"><button class="show-translation" type="button">Mostra la soluzione proposta</button></div>
      <p class="proposed-solution" hidden><span>Soluzione proposta:</span> <strong>${solution}</strong></p>
    </div></article>`).join('')
  );

  $('.site-header nav a[href="/vocabolario/"]').remove();
  const footerVocabularyLinks = $('footer a').filter((_, link) => $(link).text().trim() === 'Vocabolario');
  footerVocabularyLinks.slice(1).remove();
  writeFileSync(path.join(siteRoot, 'vocabolario', `${lesson.slug}.html`), `<!doctype html>\n${$.html().replace(/^<!doctype html>/i, '')}`);
}

console.log(`Generated ${lessons.length} vocabulary lessons.`);

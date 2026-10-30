// Sezione «Errori» delle lezioni di grammatica, scritta per chi parla ciascuna lingua (2026-10-30).
// Martin: le versioni nelle diverse lingue non sono traduzioni ma spiegazioni su misura della lingua dello studente.
// Ogni scheda: [frase sbagliata, frase corretta, perché chi parla questa lingua sbaglia (HTML)].
// Nella versione italiana gli errori sono quelli di chi parla inglese. Li inserisce scripts/add-language-notes.mjs.

export const ERR_H2 = {
  it: "Gli errori tipici di chi parla inglese",
  en: 'Typical mistakes English speakers make',
  es: 'Los errores típicos de quien habla español',
  pt: 'Os erros típicos de quem fala português',
  fr: 'Les erreurs typiques des francophones',
  cs: 'Typické chyby česky mluvících',
  pl: 'Typowe błędy Polaków',
  tr: 'Türkçe konuşanların tipik hataları',
  de: 'Typische Fehler von Deutschsprachigen',
  ja: '日本語話者によくある間違い',
};

export const ERR_LABELS = {
  it: ['Errato:', 'Corretto:'],
  en: ['Wrong:', 'Correct:'],
  es: ['Incorrecto:', 'Correcto:'],
  pt: ['Errado:', 'Correto:'],
  fr: ['Incorrect :', 'Correct :'],
  cs: ['Špatně:', 'Správně:'],
  pl: ['Błędnie:', 'Poprawnie:'],
  tr: ['Yanlış:', 'Doğru:'],
  de: ['Falsch:', 'Richtig:'],
  ja: ['誤：', '正：'],
};

export const ERRORS = {
  'grammatica/a1/ce-ci-sono.html': {
    it: [
      ["C'è due persone.", 'Ci sono due persone.', 'Nell\'inglese parlato si sente <em lang="en">there\'s two people</em>; in italiano il plurale vuole sempre <strong>ci sono</strong>.'],
      ['È una farmacia qui vicino?', "C'è una farmacia qui vicino?", '<em lang="en">There is</em> non è <span lang="it">è</span>: senza <span lang="it">ci</span> la frase vuol dire <em lang="en">is it a pharmacy?</em>'],
      ['Marco è?', "C'è Marco?", '<em lang="en">Is Marco in?</em> si dice con <span lang="it">c\'è</span>: in italiano va benissimo con una persona precisa.'],
      ['Ci è un problema.', "C'è un problema.", 'Davanti a <span lang="it">è</span> il <span lang="it">ci</span> perde la <span lang="it">i</span>: si scrive <strong>c\'è</strong>.'],
    ],
    en: [
      ["C'è due persone.", 'Ci sono due persone.', 'In spoken English you hear <em>there\'s two people</em>; in Italian a plural always takes <strong lang="it">ci sono</strong>.'],
      ['È una farmacia qui vicino?', "C'è una farmacia qui vicino?", '<em>There is</em> is not <span lang="it">è</span>: without <span lang="it">ci</span> the sentence means “is it a pharmacy?”'],
      ['Marco è?', "C'è Marco?", '<em>Is Marco in?</em> is <span lang="it">c\'è Marco?</span>: Italian happily uses <span lang="it">c\'è</span> with a specific person.'],
      ['Ci è un problema.', "C'è un problema.", 'Before <span lang="it">è</span>, <span lang="it">ci</span> loses its <span lang="it">i</span>: it is written <strong lang="it">c\'è</strong>.'],
    ],
    es: [
      ["C'è due persone.", 'Ci sono due persone.', 'Como <em>hay</em> no cambia nunca, se tiende a usar siempre <span lang="it">c\'è</span>. Con el plural: <strong lang="it">ci sono</strong>.'],
      ["Non c'è problemi.", 'Non ci sono problemi.', '<em>No hay problemas</em>: también en negativo el verbo concuerda con el plural.'],
      ["C'era molte persone.", "C'erano molte persone.", '<em>Había</em> no cambia, pero <span lang="it">c\'era</span> sí: en plural, <strong lang="it">c\'erano</strong>.'],
      ["Dove c'è la stazione?", "Dov'è la stazione?", 'Para algo concreto se usa <span lang="it">essere</span>, igual que <em>¿dónde está?</em> y no <em>¿dónde hay?</em>'],
    ],
    pt: [
      ['Ha una farmacia qui vicino?', "C'è una farmacia qui vicino?", 'O <em>tem</em> ou <em>há</em> de existência não se traduz com <span lang="it">avere</span>: é sempre <strong lang="it">c\'è</strong> ou <strong lang="it">ci sono</strong>.'],
      ["C'è due persone.", 'Ci sono due persone.', 'Como <em>tem</em> não muda, se tende a usar sempre <span lang="it">c\'è</span>. Com o plural: <strong lang="it">ci sono</strong>.'],
      ["C'era molte persone.", "C'erano molte persone.", '<em>Tinha</em> não muda, mas <span lang="it">c\'era</span> sim: no plural, <strong lang="it">c\'erano</strong>.'],
      ["Dove c'è la stazione?", "Dov'è la stazione?", 'Para uma coisa concreta se usa <span lang="it">essere</span>, como em <em>onde fica a estação?</em>'],
    ],
    fr: [
      ["C'è due sedie.", 'Ci sono due sedie.', 'Calque de <em>il y a</em>, qui ne change jamais. Au pluriel : <strong lang="it">ci sono</strong>.'],
      ['Ci sono due anni, sono andato a Roma.', 'Due anni fa sono andato a Roma.', '<em>Il y a deux ans</em> (dans le passé) se dit avec <strong lang="it">fa</strong>, placé après la durée.'],
      ["Non c'è di tempo.", "Non c'è tempo.", 'Pas de <em>de</em> après la négation : <em>il n\'y a pas de temps</em> → <span lang="it">non c\'è tempo</span>.'],
      ["Dove c'è la stazione?", "Dov'è la stazione?", 'Pour une chose précise, on utilise <span lang="it">essere</span>, comme dans <em>où est la gare ?</em>'],
    ],
    cs: [
      ['È una farmacia qui vicino?', "C'è una farmacia qui vicino?", 'Česky stačí <em>je</em>, italsky chybí <strong lang="it">ci</strong>. <span lang="it">È una farmacia</span> znamená „To je lékárna“.'],
      ['Sono due libri sul tavolo.', 'Sul tavolo ci sono due libri.', '<em>Jsou tam dvě knihy</em> → <strong lang="it">ci sono</strong>. Bez <span lang="it">ci</span> to znamená „Jsou to dvě knihy“.'],
      ["Non c'è problemi.", 'Non ci sono problemi.', 'V záporu se číslo nemění: <em>problémy</em> jsou množné číslo, tedy <strong lang="it">non ci sono</strong>.'],
      ['È qui Marco?', "C'è Marco?", '<em>Je tady Marco?</em> se říká <span lang="it">C\'è Marco?</span>'],
    ],
    pl: [
      ['È una farmacia qui vicino?', "C'è una farmacia qui vicino?", 'Po polsku wystarczy <em>jest</em>, po włosku brakuje <strong lang="it">ci</strong>. <span lang="it">È una farmacia</span> znaczy „to jest apteka”.'],
      ["Non c'è problemi.", 'Non ci sono problemi.', '<em>Nie ma</em> się nie zmienia, ale włoskie przeczenie zachowuje liczbę: <strong lang="it">non ci sono</strong> problemi.'],
      ['Sono due libri sul tavolo.', 'Sul tavolo ci sono due libri.', '<em>Na stole są dwie książki</em> → <strong lang="it">ci sono</strong>. Bez <span lang="it">ci</span> to znaczy „to są dwie książki”.'],
      ['È qui Marco?', "C'è Marco?", '<em>Czy jest Marco?</em> mówi się <span lang="it">C\'è Marco?</span>'],
    ],
    tr: [
      ["C'è due libri.", 'Ci sono due libri.', '<em>İki kitap var</em>: <em>var</em> değişmez, ama İtalyancada çoğul için <strong lang="it">ci sono</strong> gerekir.'],
      ['Ci sono due libro.', 'Ci sono due libri.', 'Türkçede sayıdan sonra isim tekil kalır; İtalyancada çoğul olur: <span lang="it">libro → libri</span>.'],
      ["C'è la mia macchina.", 'Ho una macchina.', '<em>Arabam var</em> sahiplik anlatır: İtalyancada <span lang="it">avere</span> kullanılır.'],
      ["Una farmacia qui vicino c'è?", "C'è una farmacia qui vicino?", 'Fiil cümlenin sonuna gelmez: <span lang="it">c\'è</span> başta durur.'],
    ],
    de: [
      ["C'è due sedie.", 'Ci sono due sedie.', '<em>Es gibt</em> bleibt immer im Singular, <span lang="it">c\'è</span> nicht: im Plural <strong lang="it">ci sono</strong>.'],
      ['È una farmacia qui vicino?', "C'è una farmacia qui vicino?", '<em>Es gibt</em> ist nicht <em>es ist</em>: ohne <span lang="it">ci</span> heißt der Satz „Ist das eine Apotheke?“'],
      ['Ci non sono problemi.', 'Non ci sono problemi.', '<span lang="it">Non</span> steht ganz vorne, vor <span lang="it">ci</span>.'],
      ['È Marco qui?', "C'è Marco?", '<em>Ist Marco da?</em> heißt <span lang="it">C\'è Marco?</span>, denn <span lang="it">ci</span> bedeutet „da“.'],
    ],
    ja: [
      ["C'è due libri.", 'Ci sono due libri.', '日本語は「一冊ある」「二冊ある」と動詞が同じですが、イタリア語は複数なら <strong lang="it">ci sono</strong> です。'],
      ["Sul tavolo un libro c'è.", "Sul tavolo c'è un libro.", '動詞は文の最後に置きません。<span lang="it">c\'è</span> のあとに名詞が来ます。'],
      ['Ci sono un libro.', "C'è un libro.", '一つなら単数の <strong lang="it">c\'è</strong> です。'],
      ['Marco è?', "C'è Marco?", '「マルコさんはいますか」は <span lang="it">C\'è Marco?</span> と言います。'],
    ],
  },

  'grammatica/b1/comparativo-e-superlativo.html': {
    it: [
      ['Roma è più grande che Pisa.', 'Roma è più grande di Pisa.', '<em lang="en">Than</em> fra due persone o due cose è <strong>di</strong>; <span lang="it">che</span> serve per due azioni o due qualità.'],
      ['È il libro più utile nella classe.', 'È il libro più utile della classe.', 'Dopo il superlativo l\'inglese usa <em lang="en">in</em>, l\'italiano <strong>di</strong>.'],
      ['Marco è come alto come Luca.', 'Marco è alto come Luca.', '<em lang="en">As … as</em> diventa una parola sola: <strong>come</strong> (o <span lang="it">quanto</span>).'],
      ['È molto bellissimo.', 'È bellissimo.', '<span lang="it">-issimo</span> vuol già dire <em lang="en">very</em>: <span lang="it">molto</span> è di troppo.'],
    ],
    en: [
      ['Roma è più grande che Pisa.', 'Roma è più grande di Pisa.', '<em>Than</em> between two people or things is <strong lang="it">di</strong>; <span lang="it">che</span> is for two actions or two qualities.'],
      ['È il libro più utile nella classe.', 'È il libro più utile della classe.', 'After a superlative English uses <em>in</em>, Italian uses <strong lang="it">di</strong>.'],
      ['Marco è come alto come Luca.', 'Marco è alto come Luca.', '<em>As … as</em> becomes a single word: <strong lang="it">come</strong> (or <span lang="it">quanto</span>).'],
      ['È molto bellissimo.', 'È bellissimo.', '<span lang="it">-issimo</span> already means “very”, so <span lang="it">molto</span> is one word too many.'],
    ],
    es: [
      ['Roma è più grande che Pisa.', 'Roma è più grande di Pisa.', 'Calco de <em>más grande que</em>. Entre dos personas o cosas el italiano usa <strong lang="it">di</strong>.'],
      ['Marco è più alto che io.', 'Marco è più alto di me.', '<em>Más alto que yo</em> → <span lang="it">di</span> + pronombre de complemento: <strong lang="it">di me, di te</strong>.'],
      ['Marco è tanto alto come Luca.', 'Marco è alto come Luca.', 'El <em>tan</em> de <em>tan … como</em> desaparece. (Si quieres usarlo: <span lang="it">tanto alto quanto</span>, nunca mezclado con <span lang="it">come</span>.)'],
      ['Il film è più lungo di noioso.', 'Il film è più lungo che noioso.', 'El error contrario, después de aprender <span lang="it">di</span>: entre dos cualidades de lo mismo se usa <strong lang="it">che</strong>.'],
    ],
    pt: [
      ['Roma è più grande che Pisa.', 'Roma è più grande di Pisa.', 'Decalque de <em>maior (do) que</em>. Entre duas pessoas ou coisas o italiano usa <strong lang="it">di</strong>.'],
      ['Marco è più alto che io.', 'Marco è più alto di me.', '<em>Mais alto que eu</em> → <span lang="it">di</span> + pronome oblíquo: <strong lang="it">di me, di te</strong>.'],
      ['La mia casa è maggiore della tua.', 'La mia casa è più grande della tua.', 'Para tamanho, <em>maior</em> é <span lang="it">più grande</span>; <span lang="it">maggiore</span> se usa para idade e importância.'],
      ['Marco è così alto quanto Luca.', 'Marco è alto quanto Luca.', 'O <em>tão</em> de <em>tão … quanto</em> cai: <span lang="it">alto quanto Luca</span> ou <span lang="it">alto come Luca</span>.'],
    ],
    fr: [
      ['Roma è più grande che Pisa.', 'Roma è più grande di Pisa.', 'Calque de <em>plus grande que</em>. Entre deux personnes ou deux choses : <strong lang="it">di</strong>.'],
      ['È il libro il più utile.', 'È il libro più utile.', 'Le français répète l\'article (<em>le livre le plus utile</em>), l\'italien jamais.'],
      ['Marco è così alto che Luca.', 'Marco è alto come Luca.', '<em>Aussi … que</em> devient simplement <strong lang="it">come</strong>.'],
      ['Ho più di libri di te.', 'Ho più libri di te.', '<em>Plus de livres</em> : en italien, pas de <span lang="it">di</span> entre <span lang="it">più</span> et le nom.'],
    ],
    cs: [
      ['Roma è più grande che Pisa.', 'Roma è più grande di Pisa.', '<em>Než</em> se mezi dvěma osobami nebo věcmi nepřekládá <span lang="it">che</span>, ale <strong lang="it">di</strong>.'],
      ['È più bello libro della classe.', 'È il libro più bello della classe.', 'Nejvyšší stupeň potřebuje člen a podstatné jméno stojí před <span lang="it">più</span>. <span lang="it">È più bello</span> znamená „je hezčí“.'],
      ['È il libro più utile nella classe.', 'È il libro più utile della classe.', '<em>Ve třídě</em> se po nejvyšším stupni říká <strong lang="it">della classe</strong>.'],
      ['Canta migliore di me.', 'Canta meglio di me.', '<em>Lépe</em> (příslovce) je <strong lang="it">meglio</strong>; <span lang="it">migliore</span> je <em>lepší</em> (přídavné jméno).'],
    ],
    pl: [
      ['Roma è più grande che Pisa.', 'Roma è più grande di Pisa.', '<em>Niż</em> między dwiema osobami lub rzeczami to nie <span lang="it">che</span>, tylko <strong lang="it">di</strong> (jak <em>od</em>: <em>większy od Pizy</em>).'],
      ['È più bello libro della classe.', 'È il libro più bello della classe.', 'Stopień najwyższy potrzebuje rodzajnika, a rzeczownik stoi przed <span lang="it">più</span>. <span lang="it">È più bello</span> znaczy „jest ładniejszy”.'],
      ['È il libro più utile nella classe.', 'È il libro più utile della classe.', '<em>W klasie</em> po stopniu najwyższym to <strong lang="it">della classe</strong>.'],
      ['Canta migliore di me.', 'Canta meglio di me.', '<em>Lepiej</em> (przysłówek) to <strong lang="it">meglio</strong>; <span lang="it">migliore</span> to <em>lepszy</em> (przymiotnik).'],
    ],
    tr: [
      ['Roma Pisa di più grande.', 'Roma è più grande di Pisa.', 'Türkçe sırayla kurulmuş: İtalyancada önce fiil ve sıfat, sonra <span lang="it">di</span> + karşılaştırılan şey gelir.'],
      ['È più facile leggere di scrivere.', 'È più facile leggere che scrivere.', 'Türkçede hep <em>-den</em> kullanılır; iki eylem karşılaştırılırken İtalyancada <strong lang="it">che</strong> gerekir.'],
      ['È più utile libro.', 'È il libro più utile.', '<em>En faydalı kitap</em>: tanımlık gerekir ve isim <span lang="it">più</span>dan önce gelir.'],
      ['Lei è più alto di me.', 'Lei è più alta di me.', 'Sıfat cinsiyete uyar: kadın için <span lang="it">alta</span>.'],
    ],
    de: [
      ['Roma è più grande come Pisa.', 'Roma è più grande di Pisa.', 'Wie umgangssprachlich <em>größer wie</em>: Nach <span lang="it">più</span> steht <strong lang="it">di</strong>, nie <span lang="it">come</span>.'],
      ['È il più utile libro.', 'È il libro più utile.', 'Im Superlativ steht das Nomen meist vor <span lang="it">più</span>: <span lang="it">il libro più utile</span>.'],
      ['Canta migliore di me.', 'Canta meglio di me.', '<em>Besser</em> beim Verb ist <strong lang="it">meglio</strong>; <span lang="it">migliore</span> steht nur beim Nomen.'],
      ['È più facile leggere di scrivere.', 'È più facile leggere che scrivere.', 'Werden zwei Tätigkeiten verglichen, wird <em>als</em> zu <strong lang="it">che</strong>.'],
    ],
    ja: [
      ['Roma è di Pisa più grande.', 'Roma è più grande di Pisa.', '日本語の語順（ピサより大きい）のままです。<span lang="it">più</span> + 形容詞 + <span lang="it">di</span> + 相手の順です。'],
      ['È il libro più utile nella classe.', 'È il libro più utile della classe.', '「クラスで一番」の「で」は <strong lang="it">di</strong> です。'],
      ['Lei è più alto di me.', 'Lei è più alta di me.', '形容詞は性に合わせます。女性なら <span lang="it">alta</span>。'],
      ['È più facile leggere di scrivere.', 'È più facile leggere che scrivere.', '二つの動作を比べるときは <strong lang="it">che</strong> を使います。'],
    ],
  },
};

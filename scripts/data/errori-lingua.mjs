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
};

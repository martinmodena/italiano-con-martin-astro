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

  'grammatica/a1/preposizioni-semplici.html': {
    it: [
      ['Sono in Roma.', 'Sono a Roma.', '<em lang="en">In Rome</em>: con le città si usa sempre <strong>a</strong>, anche per dire dove sei.'],
      ['Studio italiano per due anni.', 'Studio italiano da due anni.', '<em lang="en">For two years</em>, se continua ancora, è <strong>da</strong> + presente.'],
      ['Arrivo in cinque minuti.', 'Arrivo tra cinque minuti.', '<em lang="en">In five minutes</em> nel futuro è <strong>tra</strong> (o <span lang="it">fra</span>).'],
      ['Vado alla casa di Marco.', 'Vado da Marco.', '<em lang="en">To Marco\'s</em>: per andare a casa di qualcuno basta <strong>da</strong>.'],
    ],
    en: [
      ['Sono in Roma.', 'Sono a Roma.', '<em>In Rome</em>: cities always take <strong lang="it">a</strong>, even for where you are.'],
      ['Studio italiano per due anni.', 'Studio italiano da due anni.', '<em>For two years</em>, when it is still going on, is <strong lang="it">da</strong> + present tense.'],
      ['Arrivo in cinque minuti.', 'Arrivo tra cinque minuti.', '<em>In five minutes</em>, in the future, is <strong lang="it">tra</strong> (or <span lang="it">fra</span>).'],
      ['Vado alla casa di Marco.', 'Vado da Marco.', '<em>To Marco\'s</em>: to go to someone\'s place, <strong lang="it">da</strong> is enough.'],
    ],
    es: [
      ['Sono in Roma.', 'Sono a Roma.', 'Calco de <em>estoy en Roma</em>. Con ciudades, siempre <strong lang="it">a</strong>.'],
      ['Vado a Italia.', 'Vado in Italia.', 'Calco de <em>voy a Italia</em>. Con países, siempre <strong lang="it">in</strong>.'],
      ['Vengo di Milano.', 'Vengo da Milano.', 'El <em>de</em> de procedencia es <strong lang="it">da</strong>; <span lang="it">di</span> solo para el origen: <span lang="it">sono di Milano</span>.'],
      ['Arrivo dentro cinque minuti.', 'Arrivo tra cinque minuti.', '<em>Dentro de cinco minutos</em> → <strong lang="it">tra</strong>; <span lang="it">dentro</span> solo significa «en el interior».'],
    ],
    pt: [
      ['Abito in Roma.', 'Abito a Roma.', 'Decalque de <em>moro em Roma</em>. Com cidades, sempre <strong lang="it">a</strong>.'],
      ['Vado di treno.', 'Vado in treno.', '<em>De trem, de carro</em> → <strong lang="it">in treno, in macchina</strong>.'],
      ['Vengo di Milano.', 'Vengo da Milano.', 'O <em>de</em> de procedência é <strong lang="it">da</strong>; <span lang="it">di</span> só para a origem: <span lang="it">sono di Milano</span>.'],
      ['Studio italiano fa due anni.', 'Studio italiano da due anni.', '<em>Há dois anos</em> (e ainda estudo) → <strong lang="it">da</strong> + presente. <span lang="it">Fa</span> é só para o que já terminou.'],
    ],
    fr: [
      ['Vado al Giappone.', 'Vado in Giappone.', 'Calque de <em>au Japon</em> : en italien, tous les pays prennent <strong lang="it">in</strong>.'],
      ['Vengo di Milano.', 'Vengo da Milano.', 'Le <em>de</em> de provenance est <strong lang="it">da</strong> ; <span lang="it">di</span> sert pour l\'origine : <span lang="it">sono di Milano</span>.'],
      ['Arrivo in cinque minuti.', 'Arrivo tra cinque minuti.', '<em>Dans cinq minutes</em> → <strong lang="it">tra</strong>. <span lang="it">In cinque minuti</span> veut dire « en cinq minutes ».'],
      ['Vado al medico.', 'Vado dal medico.', '<em>Chez le médecin</em> → <strong lang="it">da</strong> + article : <span lang="it">dal medico</span>.'],
    ],
    cs: [
      ['Vado in Roma.', 'Vado a Roma.', '<em>Do Říma</em> i <em>v Římě</em> se u měst překládá <strong lang="it">a</strong>.'],
      ['Vado treno.', 'Vado in treno.', '<em>Vlakem</em> se vyjádří pádem, italsky je potřeba předložka: <strong lang="it">in treno</strong>.'],
      ['Studio italiano due anni.', 'Studio italiano da due anni.', '<em>Učím se dva roky</em> (a pořád): italsky <strong lang="it">da</strong> + přítomný čas.'],
      ['Vado a Marco.', 'Vado da Marco.', '<em>K Markovi</em> i <em>u Marka</em> je <strong lang="it">da</strong>.'],
    ],
    pl: [
      ['Vado in Roma.', 'Vado a Roma.', '<em>Do Rzymu</em> i <em>w Rzymie</em> przy miastach to <strong lang="it">a</strong>.'],
      ['Scrivo penna.', 'Scrivo con la penna.', '<em>Długopisem</em> to narzędnik bez przyimka; po włosku potrzebne jest <strong lang="it">con</strong>.'],
      ['Vado a Marco.', 'Vado da Marco.', '<em>Do Marka</em> i <em>u Marka</em> to <strong lang="it">da</strong>.'],
      ['Abito in Milano.', 'Abito a Milano.', '<em>W Mediolanie</em>: miejsce w mieście to też <strong lang="it">a</strong>, nie <span lang="it">in</span>.'],
    ],
    tr: [
      ['Roma a vado.', 'Vado a Roma.', 'Türkçede ek kelimenin sonuna gelir (<em>Roma\'ya</em>), İtalyancada edat önüne: <span lang="it">a Roma</span>.'],
      ['Vado in Roma.', 'Vado a Roma.', 'Şehirler için <strong lang="it">a</strong>, ülkeler için <span lang="it">in</span>: <span lang="it">vado in Italia</span>.'],
      ['Vado con treno.', 'Vado in treno.', '<em>Trenle</em>: taşıtlar için <strong lang="it">in</strong> kullanılır.'],
      ['Studio italiano per due anni.', 'Studio italiano da due anni.', '<em>İki yıldır</em> (hâlâ) → <strong lang="it">da</strong> + şimdiki zaman.'],
    ],
    de: [
      ['Vado in Roma.', 'Vado a Roma.', '<em>In Rom</em> und <em>nach Rom</em>: bei Städten immer <strong lang="it">a</strong>.'],
      ['Vado a Italia.', 'Vado in Italia.', '<em>Nach Italien</em>: bei Ländern immer <strong lang="it">in</strong>.'],
      ['Vado a Marco.', 'Vado da Marco.', '<em>Zu Marco</em> und <em>bei Marco</em> sind <strong lang="it">da</strong>.'],
      ['Arrivo in cinque minuti.', 'Arrivo tra cinque minuti.', '<em>In fünf Minuten</em> (in der Zukunft) ist <strong lang="it">tra</strong>.'],
    ],
    ja: [
      ['Vado in Roma.', 'Vado a Roma.', '町には <strong lang="it">a</strong> を使います。「に」も「で」も同じです。'],
      ['Vado a Italia.', 'Vado in Italia.', '国には <strong lang="it">in</strong> を使います。'],
      ['Vado con treno.', 'Vado in treno.', '「電車で」の「で」は乗り物なので <strong lang="it">in</strong> です。'],
      ['Studio italiano da due anni fa.', 'Studio italiano da due anni.', '「二年前から」の「前」は訳しません。<span lang="it">fa</span> は終わったことにだけ使います。'],
    ],
  },

  'grammatica/a1/avverbi-di-frequenza.html': {
    it: [
      ['Io sempre faccio colazione.', 'Faccio sempre colazione.', '<em lang="en">I always have</em>: in inglese l\'avverbio va prima del verbo, in italiano <strong>dopo</strong>.'],
      ['Fumo mai.', 'Non fumo mai.', '<em lang="en">I never smoke</em> ha una negazione sola; in italiano ne servono due: <strong>non … mai</strong>.'],
      ['Non mai fumo.', 'Non fumo mai.', '<span lang="it">Non</span> va prima del verbo, <span lang="it">mai</span> dopo.'],
      ['Usualmente ceno alle otto.', 'Di solito ceno alle otto.', '<em lang="en">Usually</em> si dice <strong>di solito</strong>; <span lang="it">usualmente</span> è rarissimo.'],
    ],
    en: [
      ['Io sempre faccio colazione.', 'Faccio sempre colazione.', '<em>I always have</em>: English puts the adverb before the verb, Italian puts it <strong>after</strong>.'],
      ['Fumo mai.', 'Non fumo mai.', '<em>I never smoke</em> has one negative; Italian needs two: <strong lang="it">non … mai</strong>.'],
      ['Non mai fumo.', 'Non fumo mai.', '<span lang="it">Non</span> goes before the verb, <span lang="it">mai</span> after it.'],
      ['Usualmente ceno alle otto.', 'Di solito ceno alle otto.', '<em>Usually</em> is <strong lang="it">di solito</strong>; <span lang="it">usualmente</span> is very rare.'],
    ],
    es: [
      ['Mai fumo.', 'Non fumo mai.', 'Calco de <em>nunca fumo</em>. En italiano: <strong lang="it">non</strong> delante del verbo y <span lang="it">mai</span> detrás, como <em>no fumo nunca</em>.'],
      ['Quasi mai esco la sera.', 'Non esco quasi mai la sera.', '<em>Casi nunca salgo</em> → igual que con <span lang="it">mai</span>: <span lang="it">non</span> + verbo + <span lang="it">quasi mai</span>.'],
      ['Sempre faccio colazione.', 'Faccio sempre colazione.', '<em>Siempre desayuno</em>: en italiano el adverbio va detrás del verbo.'],
    ],
    pt: [
      ['Mai fumo.', 'Non fumo mai.', 'Decalque de <em>nunca fumo</em>. Em italiano: <strong lang="it">non</strong> antes do verbo e <span lang="it">mai</span> depois.'],
      ['Quasi mai esco la sera.', 'Non esco quasi mai la sera.', '<em>Quase nunca saio</em> → <span lang="it">non</span> + verbo + <span lang="it">quasi mai</span>.'],
      ['Sempre faccio colazione.', 'Faccio sempre colazione.', '<em>Sempre tomo café</em>: em italiano o advérbio vai depois do verbo.'],
    ],
    fr: [
      ['Fumo mai.', 'Non fumo mai.', 'À l\'oral on dit <em>je fume jamais</em> ; en italien le <strong lang="it">non</strong> ne tombe jamais.'],
      ['Esco quasi mai la sera.', 'Non esco quasi mai la sera.', '<em>Je sors presque jamais</em> : même chose, il faut <span lang="it">non</span>.'],
      ["D'abitudine ceno alle otto.", 'Di solito ceno alle otto.', '<em>D\'habitude</em> se dit <strong lang="it">di solito</strong>.'],
      ['Esco raremente.', 'Esco raramente.', 'Attention à l\'orthographe : <em>rarement</em> → <strong lang="it">raramente</strong>.'],
    ],
    cs: [
      ['Mai non fumo.', 'Non fumo mai.', '<em>Nikdy nekouřím</em>: dvojí zápor máte správně, jen pořadí je jiné. <span lang="it">Non</span> před slovesem, <span lang="it">mai</span> za ním.'],
      ['Io sempre mi alzo alle sette.', 'Mi alzo sempre alle sette.', '<em>Vždycky vstávám</em>: italské příslovce stojí za slovesem.'],
      ['Sei a volte stato a Roma?', 'Sei mai stato a Roma?', '<em>Byl jsi někdy…?</em> — toto <em>někdy</em> neznamená „občas“ (<span lang="it">a volte</span>), ale <strong lang="it">mai</strong>.'],
    ],
    pl: [
      ['Mai non fumo.', 'Non fumo mai.', '<em>Nigdy nie palę</em>: podwójne przeczenie jest dobrze, tylko kolejność inna. <span lang="it">Non</span> przed czasownikiem, <span lang="it">mai</span> za nim.'],
      ['Io sempre mi alzo alle sette.', 'Mi alzo sempre alle sette.', '<em>Zawsze wstaję</em>: włoski przysłówek stoi za czasownikiem.'],
      ['Sei a volte stato a Roma?', 'Sei mai stato a Roma?', '<em>Byłeś kiedyś…?</em> — to <em>kiedyś</em> to nie „czasem” (<span lang="it">a volte</span>), tylko <strong lang="it">mai</strong>.'],
    ],
    tr: [
      ['Mai fumo.', 'Non fumo mai.', '<em>Hiç içmem</em>: <em>hiç</em> = <span lang="it">mai</span>, olumsuzluk eki = <strong lang="it">non</strong>. İkisi de gerekir.'],
      ['Io spesso al cinema vado.', 'Vado spesso al cinema.', 'Fiil sona gelmez; zarf fiilden sonra gelir.'],
      ['Non mai sono stato a Roma.', 'Non sono mai stato a Roma.', 'Geçmiş zamanda <span lang="it">mai</span> yardımcı fiil ile ortaç arasına gelir: <span lang="it">sono mai stato</span>.'],
    ],
    de: [
      ['Fumo mai.', 'Non fumo mai.', '<em>Ich rauche nie</em> hat eine Verneinung; im Italienischen braucht es zwei: <strong lang="it">non … mai</strong>.'],
      ['Non mai sono stato a Roma.', 'Non sono mai stato a Roma.', 'Das Adverb steht zwischen Hilfsverb und Partizip: <span lang="it">sono mai stato</span>.'],
      ['Ho abitato a Milano sempre.', 'Ho sempre abitato a Milano.', 'Das Adverb steht zwischen Hilfsverb und Partizip, nicht am Ende.'],
    ],
    ja: [
      ['Fumo mai.', 'Non fumo mai.', '「全然吸いません」の「ません」にあたる <strong lang="it">non</strong> も必要です。'],
      ['Spesso al cinema vado.', 'Vado spesso al cinema.', '動詞は最後に来ません。副詞は動詞のあとです。'],
      ['Non mai sono stato a Roma.', 'Non sono mai stato a Roma.', '過去形では <span lang="it">mai</span> は助動詞と過去分詞の間に入ります。<span lang="it">sono mai stato</span>。'],
    ],
  },

  'grammatica/b1/connettivi.html': {
    it: [
      ['Attualmente preferisco il tè.', 'In realtà preferisco il tè.', '<em lang="en">Actually</em> è <strong>in realtà</strong>; <span lang="it">attualmente</span> vuol dire <em lang="en">currently</em>.'],
      ['Sebbene sono stanco, finisco il lavoro.', 'Sebbene sia stanco, finisco il lavoro.', '<em lang="en">Although</em> non cambia il verbo, ma dopo <span lang="it">sebbene</span> ci vuole il <strong>congiuntivo</strong>.'],
      ['Siccome lunedì sono qui.', 'Sono qui da lunedì.', '<em lang="en">Since</em> di tempo è <strong>da</strong>; <span lang="it">siccome</span> indica solo la causa.'],
      ['Eventualmente ha trovato lavoro.', 'Alla fine ha trovato lavoro.', '<em lang="en">Eventually</em> è <strong>alla fine</strong>; <span lang="it">eventualmente</span> vuol dire «se serve».'],
    ],
    en: [
      ['Attualmente preferisco il tè.', 'In realtà preferisco il tè.', '<em>Actually</em> is <strong lang="it">in realtà</strong>; <span lang="it">attualmente</span> means “currently”.'],
      ['Sebbene sono stanco, finisco il lavoro.', 'Sebbene sia stanco, finisco il lavoro.', '<em>Although</em> doesn\'t change the verb, but <span lang="it">sebbene</span> needs the <strong>subjunctive</strong>.'],
      ['Siccome lunedì sono qui.', 'Sono qui da lunedì.', '<em>Since</em> for time is <strong lang="it">da</strong>; <span lang="it">siccome</span> only gives a reason.'],
      ['Eventualmente ha trovato lavoro.', 'Alla fine ha trovato lavoro.', '<em>Eventually</em> is <strong lang="it">alla fine</strong>; <span lang="it">eventualmente</span> means “if necessary”.'],
    ],
    es: [
      ['Esco anche se piova.', 'Esco anche se piove.', 'Calco de <em>aunque llueva</em>: después de <span lang="it">anche se</span>, siempre <strong>indicativo</strong>.'],
      ['Sebbene sono stanco, finisco il lavoro.', 'Sebbene sia stanco, finisco il lavoro.', 'El caso contrario: <em>aunque estoy cansado</em> va con indicativo, pero <span lang="it">sebbene</span> exige <strong>subjuntivo</strong>.'],
      ['Non è caro, sino economico.', 'Non è caro, ma economico.', '<em>No … sino</em> → <span lang="it">non … ma</span> (o <span lang="it">bensì</span>).'],
      ['Poi, non lo so.', 'Beh, non lo so.', '<span lang="it">Poi</span> no es <em>pues</em>: significa <em>luego, después</em>. Para empezar una respuesta: <strong lang="it">beh</strong>.'],
    ],
    pt: [
      ['Esco anche se piova.', 'Esco anche se piove.', 'Decalque de <em>mesmo que chova</em>: depois de <span lang="it">anche se</span>, sempre <strong>indicativo</strong>.'],
      ['Ancora che piova, esco.', 'Anche se piove, esco.', '<em>Ainda que</em> não é <span lang="it">ancora che</span>: diga <strong lang="it">anche se</strong> + indicativo ou <span lang="it">sebbene</span> + subjuntivo.'],
      ['Resto a casa, poi sono stanco.', 'Resto a casa, perché sono stanco.', '<em>Pois</em> (porque) é <strong lang="it">perché</strong>; <span lang="it">poi</span> quer dizer <em>depois</em>.'],
    ],
    fr: [
      ['Pertanto costa troppo.', 'Eppure costa troppo.', 'Faux ami : <span lang="it">pertanto</span> veut dire <em>donc</em>. <em>Pourtant</em> → <strong lang="it">eppure</strong> ou <span lang="it">tuttavia</span>.'],
      ['Durante che mangio, guardo la TV.', 'Mentre mangio, guardo la TV.', '<em>Pendant que</em> → <strong lang="it">mentre</strong>; <span lang="it">durante</span> va seulement devant un nom (<span lang="it">durante la cena</span>).'],
      ['Resto a casa car sono stanco.', 'Resto a casa perché sono stanco.', '<em>Car</em> n\'existe pas en italien : <strong lang="it">perché</strong> ou, à l\'écrit, <span lang="it">poiché</span>.'],
    ],
    cs: [
      ['Sebbene sono stanco, finisco il lavoro.', 'Sebbene sia stanco, finisco il lavoro.', 'Čeština konjunktiv nemá, italština ho po <span lang="it">sebbene, benché, nonostante</span> vyžaduje.'],
      ['Quando domani piove, resto a casa.', 'Se domani piove, resto a casa.', '<em>Když</em> ve smyslu „jestli“ je <strong lang="it">se</strong>; <span lang="it">quando</span> jen pro čas.'],
      ['Parlo piano, affinché mi capisci.', 'Parlo piano, affinché tu mi capisca.', '<em>Aby</em> → <span lang="it">affinché, perché</span> + <strong>konjunktiv</strong>.'],
    ],
    pl: [
      ['Io prendo il tè, a Marco il caffè.', 'Io prendo il tè, Marco invece il caffè.', 'Polskie <em>a</em> to <strong lang="it">invece</strong> albo <span lang="it">mentre</span>; włoskie <span lang="it">a</span> jest przyimkiem.'],
      ['Sebbene sono stanco, finisco il lavoro.', 'Sebbene sia stanco, finisco il lavoro.', 'Po <span lang="it">sebbene, benché, nonostante</span> potrzebny jest <strong>congiuntivo</strong>.'],
      ['Parlo piano, perché mi capisci.', 'Parlo piano, perché tu mi capisca.', '<em>Żebyś mnie rozumiał</em>: z indicativo <span lang="it">perché</span> znaczy „bo”. Cel wymaga <strong>congiuntivo</strong>.'],
    ],
    tr: [
      ['Perché sono stanco, resto a casa.', 'Siccome sono stanco, resto a casa.', 'Sebep başta gelirse <strong lang="it">siccome</strong> kullanılır; <span lang="it">perché</span> ana cümleden sonra gelir.'],
      ['Mentre mangiare, guardo la TV.', 'Mentre mangio, guardo la TV.', '<em>Yerken</em>: <span lang="it">mentre</span> çekimli fiil ister.'],
      ['Sebbene sono stanco, finisco il lavoro.', 'Sebbene sia stanco, finisco il lavoro.', '<em>Yorgun olmama rağmen</em> → <span lang="it">sebbene</span> + <strong>congiuntivo</strong>.'],
    ],
    de: [
      ['Resto a casa, perché stanco sono.', 'Resto a casa, perché sono stanco.', 'Nach <span lang="it">perché</span> (weil) wandert das Verb nicht ans Ende.'],
      ['Sono stanco, anche vado a letto.', 'Sono stanco, quindi vado a letto.', 'Falscher Freund: <em>also</em> ist <strong lang="it">quindi</strong>, <span lang="it">anche</span> heißt <em>auch</em>.'],
      ['Sebbene sono stanco, finisco il lavoro.', 'Sebbene sia stanco, finisco il lavoro.', '<em>Obwohl ich müde bin</em> steht im Indikativ, nach <span lang="it">sebbene</span> braucht es den <strong>Konjunktiv</strong>.'],
    ],
    ja: [
      ['Perché sono stanco, resto a casa.', 'Siccome sono stanco, resto a casa.', '「疲れているから」を先に言うときは <strong lang="it">siccome</strong> です。'],
      ['Mentre mangiare, guardo la TV.', 'Mentre mangio, guardo la TV.', '「食べながら」：<span lang="it">mentre</span> のあとは活用した動詞です。'],
      ['Anche se piova, esco.', 'Anche se piove, esco.', '「〜ても」の <span lang="it">anche se</span> は直説法です。接続法は <span lang="it">sebbene</span> のあとです。'],
    ],
  },

  'grammatica/a1/verbi-riflessivi.html': {
    it: [
      ['Alzo alle sette.', 'Mi alzo alle sette.', '<em lang="en">I get up</em> non ha pronome, ma in italiano <span lang="it">alzarsi</span> è riflessivo: <strong>mi</strong> alzo.'],
      ['Lavo le mie mani.', 'Mi lavo le mani.', '<em lang="en">My hands</em>: in italiano niente possessivo, basta il pronome.'],
      ['Mi ho alzato tardi.', 'Mi sono alzato tardi.', 'Con i verbi riflessivi l\'ausiliare è sempre <strong>essere</strong>.'],
      ['Mi chiamo è Anna.', 'Mi chiamo Anna.', '<em lang="en">My name is</em> → <span lang="it">mi chiamo</span>: il verbo è già <span lang="it">chiamo</span>, non serve <span lang="it">è</span>.'],
    ],
    en: [
      ['Alzo alle sette.', 'Mi alzo alle sette.', '<em>I get up</em> has no pronoun, but <span lang="it">alzarsi</span> is reflexive: <strong lang="it">mi</strong> alzo.'],
      ['Lavo le mie mani.', 'Mi lavo le mani.', '<em>My hands</em>: Italian drops the possessive, the pronoun is enough.'],
      ['Mi ho alzato tardi.', 'Mi sono alzato tardi.', 'Reflexive verbs always take <strong lang="it">essere</strong> in the past.'],
      ['Mi chiamo è Anna.', 'Mi chiamo Anna.', '<em>My name is</em> → <span lang="it">mi chiamo</span> (literally “I call myself”): no <span lang="it">è</span>.'],
    ],
    es: [
      ['Mi ho alzato tardi.', 'Mi sono alzato tardi.', '<em>Me he levantado</em> usa <em>haber</em>; el italiano, <strong lang="it">essere</strong>.'],
      ['Ci siamo alzato tardi.', 'Ci siamo alzati tardi.', 'Con <span lang="it">essere</span> el participio concuerda: <span lang="it">alzati</span>, <span lang="it">alzata</span>, <span lang="it">alzate</span>.'],
      ['Mi resto a casa.', 'Resto a casa.', '<em>Quedarse</em> no es reflexivo en italiano: <span lang="it">restare</span>.'],
      ['Mi vado.', 'Me ne vado.', '<em>Me voy</em> → <span lang="it">me ne vado</span> (o <span lang="it">vado via</span>).'],
    ],
    pt: [
      ['Alzo alle sette.', 'Mi alzo alle sette.', 'No Brasil se diz <em>eu levanto</em>, mas em italiano o pronome é obrigatório: <strong lang="it">mi</strong> alzo.'],
      ['Siedo sul divano.', 'Mi siedo sul divano.', '<em>Sentar</em> sem <em>se</em> → <span lang="it">sedersi</span>, sempre com o pronome.'],
      ['Lavo le mani.', 'Mi lavo le mani.', '<em>Lavo as mãos</em> → <span lang="it">mi lavo le mani</span>: o <span lang="it">mi</span> diz de quem são as mãos.'],
      ['Mi ho alzato tardi.', 'Mi sono alzato tardi.', 'No <span lang="it">passato prossimo</span>, os reflexivos usam <strong lang="it">essere</strong>.'],
    ],
    fr: [
      ['Me alzo alle sette.', 'Mi alzo alle sette.', 'Attention à l\'orthographe : <em>me</em> → <strong lang="it">mi</strong> (et <em>te</em> → <span lang="it">ti</span>).'],
      ['Noi si alziamo alle sette.', 'Noi ci alziamo alle sette.', 'Calque de <em>on se lève</em> : avec <span lang="it">noi</span> le pronom est <strong lang="it">ci</strong>.'],
      ['Mi passeggio nel parco.', 'Passeggio nel parco.', '<em>Se promener</em> n\'est pas pronominal en italien : <span lang="it">passeggiare</span> ou <span lang="it">fare una passeggiata</span>.'],
    ],
    cs: [
      ['Si lavo.', 'Mi lavo.', 'České <em>se</em> je pro všechny osoby stejné, italské zájmeno ne: <strong lang="it">mi</strong> lavo, <span lang="it">ti</span> lavi, <span lang="it">si</span> lava.'],
      ["Mi imparo l'italiano.", "Imparo l'italiano.", '<em>Učit se</em> není v italštině zvratné: <span lang="it">imparare</span>, <span lang="it">studiare</span>.'],
      ['Lavo mi le mani.', 'Mi lavo le mani.', 'Zájmeno stojí před slovesem, ne na druhém místě jako české <em>si</em>.'],
      ['Mi ho lavato.', 'Mi sono lavato.', 'V minulém čase zvratná slovesa používají <strong lang="it">essere</strong>.'],
    ],
    pl: [
      ['Si lavo.', 'Mi lavo.', 'Polskie <em>się</em> jest takie samo dla wszystkich osób, włoskie nie: <strong lang="it">mi</strong> lavo, <span lang="it">ti</span> lavi, <span lang="it">si</span> lava.'],
      ["Mi studio l'italiano.", "Studio l'italiano.", '<em>Uczyć się</em> nie jest zwrotne po włosku: <span lang="it">studiare</span>, <span lang="it">imparare</span>.'],
      ['Lavo le mani.', 'Mi lavo le mani.', '<em>Myję ręce</em> nie ma <em>się</em>, ale po włosku potrzebne jest <strong lang="it">mi</strong>.'],
      ['Mi ho lavato.', 'Mi sono lavato.', 'W czasie przeszłym czasowniki zwrotne mają <strong lang="it">essere</strong>.'],
    ],
    tr: [
      ['Alzo alle sette.', 'Mi alzo alle sette.', '<em>Kalkmak</em> Türkçede dönüşlü değildir, İtalyancada dönüşlüdür: <strong lang="it">mi</strong> alzo.'],
      ['Lavo le mie mani.', 'Mi lavo le mani.', '<em>Ellerimi</em>: iyelik gerekmez, <span lang="it">mi</span> yeterlidir.'],
      ['Mi ho alzato tardi.', 'Mi sono alzato tardi.', 'Dönüşlü fiiller geçmişte <strong lang="it">essere</strong> ile kurulur.'],
      ['Lei si è alzato.', 'Lei si è alzata.', 'Ortaç cinsiyete uyar: kadın için <span lang="it">alzata</span>.'],
    ],
    de: [
      ['Vesto mi.', 'Mi vesto.', '<em>Ich ziehe mich an</em>: im Italienischen steht das Pronomen <strong>vor</strong> dem Verb.'],
      ['Mi ho lavato.', 'Mi sono lavato.', '<em>Ich habe mich gewaschen</em> → <strong lang="it">essere</strong>, nicht <span lang="it">avere</span>.'],
      ['Alzo alle sette.', 'Mi alzo alle sette.', '<em>Aufstehen</em> ist im Deutschen nicht reflexiv, <span lang="it">alzarsi</span> schon.'],
      ['Sposiamo a maggio.', 'Ci sposiamo a maggio.', '<em>Wir heiraten</em> → <span lang="it">ci sposiamo</span>: <span lang="it">sposarsi</span> ist reflexiv.'],
    ],
    ja: [
      ['Alzo alle sette.', 'Mi alzo alle sette.', '「起きる」は日本語では普通の動詞ですが、イタリア語では <strong lang="it">mi</strong> が必要です。'],
      ['Tu mi alzi alle sette.', 'Tu ti alzi alle sette.', '代名詞は主語に合わせます。<span lang="it">tu</span> なら <span lang="it">ti</span>。<span lang="it">mi alzi</span> は「君が私を起こす」の意味になります。'],
      ['Lavo le mie mani.', 'Mi lavo le mani.', '「私の手」の「私の」は要りません。<span lang="it">mi</span> で十分です。'],
      ['Mi ho alzato tardi.', 'Mi sono alzato tardi.', '過去形では <strong lang="it">essere</strong> を使います。'],
    ],
  },
};

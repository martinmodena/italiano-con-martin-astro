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

  'grammatica/a2/passato-prossimo.html': {
    it: [
      ['Ho andato a Roma.', 'Sono andato a Roma.', '<em lang="en">I have gone</em> usa sempre <em lang="en">have</em>, ma i verbi di movimento vogliono <strong>essere</strong>.'],
      ['Lei è arrivato tardi.', 'Lei è arrivata tardi.', 'L\'inglese <em lang="en">arrived</em> non cambia; con <span lang="it">essere</span> il participio si accorda.'],
      ['Sono stato nato nel 1990.', 'Sono nato nel 1990.', '<em lang="en">I was born</em> non è un passivo in italiano: <span lang="it">nascere</span> al passato prossimo.'],
      ['Ho abitato qui da tre anni.', 'Abito qui da tre anni.', '<em lang="en">I\'ve lived here for three years</em> (e ci abito ancora) → presente + <strong>da</strong>.'],
    ],
    en: [
      ['Ho andato a Roma.', 'Sono andato a Roma.', '<em>I have gone</em> always uses <em>have</em>, but verbs of movement take <strong lang="it">essere</strong>.'],
      ['Lei è arrivato tardi.', 'Lei è arrivata tardi.', 'English <em>arrived</em> never changes; with <span lang="it">essere</span> the participle agrees.'],
      ['Sono stato nato nel 1990.', 'Sono nato nel 1990.', '<em>I was born</em> is not a passive in Italian: just <span lang="it">nascere</span> in the passato prossimo.'],
      ['Ho abitato qui da tre anni.', 'Abito qui da tre anni.', '<em>I\'ve lived here for three years</em> (and still do) → present tense + <strong lang="it">da</strong>.'],
    ],
    es: [
      ['Ho andato a Roma.', 'Sono andato a Roma.', '<em>He ido</em> usa <em>haber</em>, pero los verbos de movimiento van con <strong lang="it">essere</strong>.'],
      ['Ho stato a Roma.', 'Sono stato a Roma.', '<em>He estado</em> → <span lang="it">essere</span> se conjuga con <strong lang="it">essere</strong>.'],
      ['Maria è arrivato tardi.', 'Maria è arrivata tardi.', 'En español el participio no cambia (<em>ha llegado</em>); con <span lang="it">essere</span> sí concuerda.'],
      ['Mi ho alzato alle sette.', 'Mi sono alzato alle sette.', '<em>Me he levantado</em>: los reflexivos van siempre con <strong lang="it">essere</strong>.'],
    ],
    pt: [
      ['Ieri ho andato a Roma.', 'Ieri sono andato a Roma.', 'Os verbos de movimento usam <strong lang="it">essere</strong>: <span lang="it">sono andato</span>.'],
      ['Ho stato a Roma.', 'Sono stato a Roma.', '<em>Estive em Roma</em> → <span lang="it">essere</span> se conjuga com <strong lang="it">essere</strong>.'],
      ['Maria è arrivato tardi.', 'Maria è arrivata tardi.', 'Com <span lang="it">essere</span> o particípio concorda com o sujeito.'],
    ],
    fr: [
      ['Ho stato malato.', 'Sono stato malato.', '<em>J\'ai été</em> → en italien <span lang="it">essere</span> se conjugue avec <strong lang="it">essere</strong>.'],
      ['Il film mi ha piaciuto.', 'Il film mi è piaciuto.', '<em>Ça m\'a plu</em> → <span lang="it">piacere</span> prend <strong lang="it">essere</strong>.'],
      ['Ho riuscito a finire.', 'Sono riuscito a finire.', '<em>J\'ai réussi</em> → <span lang="it">riuscire</span> prend <strong lang="it">essere</strong>.'],
      ['Ha costato caro.', 'È costato caro.', '<em>Ça a coûté</em> → <span lang="it">costare</span> prend <strong lang="it">essere</strong>.'],
    ],
    cs: [
      ['Sono letto il libro.', 'Ho letto il libro.', 'České <em>četl jsem</em> neznamená <span lang="it">sono</span>: většina sloves má <strong lang="it">avere</strong>.'],
      ['Maria ha mangiata la pizza.', 'Maria ha mangiato la pizza.', 'Česky <em>snědla</em>, ale s <span lang="it">avere</span> se příčestí nemění.'],
      ['Ho andato a Roma.', 'Sono andato a Roma.', 'Slovesa pohybu mají <strong lang="it">essere</strong>.'],
      ['Ho abitato qui tre anni.', 'Abito qui da tre anni.', '<em>Bydlím tady tři roky</em> (pořád) → přítomný čas + <strong lang="it">da</strong>.'],
    ],
    pl: [
      ['Ieri andato a Roma.', 'Ieri sono andato a Roma.', '<em>Pojechałem</em> to jedno słowo, ale po włosku potrzebny jest czasownik posiłkowy: <strong lang="it">sono</strong> andato.'],
      ['Maria ha mangiata la pizza.', 'Maria ha mangiato la pizza.', 'Po polsku <em>zjadła</em>, ale z <span lang="it">avere</span> imiesłów się nie zmienia.'],
      ['Ho andato a Roma.', 'Sono andato a Roma.', 'Czasowniki ruchu mają <strong lang="it">essere</strong>.'],
      ['Ho abitato qui da tre anni.', 'Abito qui da tre anni.', '<em>Mieszkam tu od trzech lat</em> → czas teraźniejszy, jak po polsku.'],
    ],
    tr: [
      ['Ieri andato a Roma.', 'Ieri sono andato a Roma.', '<em>Gittim</em> tek kelimedir, ama İtalyancada yardımcı fiil gerekir: <strong lang="it">sono</strong> andato.'],
      ['Ho andato a Roma.', 'Sono andato a Roma.', 'Hareket fiilleri <strong lang="it">essere</strong> alır.'],
      ['Maria è arrivato tardi.', 'Maria è arrivata tardi.', '<span lang="it">Essere</span> ile ortaç cinsiyete uyar: kadın için <span lang="it">arrivata</span>.'],
      ['Ho abitato qui da tre anni.', 'Abito qui da tre anni.', '<em>Üç yıldır oturuyorum</em> → şimdiki zaman + <strong lang="it">da</strong>.'],
    ],
    de: [
      ['Ieri ho un film visto.', 'Ieri ho visto un film.', 'Das Partizip steht direkt nach dem Hilfsverb, nicht am Satzende.'],
      ['Mi ho lavato.', 'Mi sono lavato.', '<em>Ich habe mich gewaschen</em>: reflexive Verben haben immer <strong lang="it">essere</strong>.'],
      ['Il film mi ha piaciuto.', 'Il film mi è piaciuto.', '<em>Der Film hat mir gefallen</em> → <span lang="it">piacere</span> mit <strong lang="it">essere</strong>.'],
      ['Maria è arrivato tardi.', 'Maria è arrivata tardi.', 'Das deutsche Partizip bleibt gleich, mit <span lang="it">essere</span> richtet sich das italienische nach dem Subjekt.'],
    ],
    ja: [
      ['Ieri andato a Roma.', 'Ieri sono andato a Roma.', '「行った」は一語ですが、イタリア語では助動詞 <strong lang="it">sono</strong> が必要です。'],
      ['Ho andato a Roma.', 'Sono andato a Roma.', '移動の動詞は <strong lang="it">essere</strong> を使います。'],
      ['Maria è arrivato tardi.', 'Maria è arrivata tardi.', '<span lang="it">essere</span> のとき、過去分詞は主語の性に合わせます。'],
      ['Ho abitato qui da tre anni.', 'Abito qui da tre anni.', '「住んでいます」は今も続いているので現在形です。'],
    ],
  },

  'grammatica/b1/imperativo.html': {
    it: [
      ['Non parla adesso!', 'Non parlare adesso!', '<em lang="en">Don\'t speak</em> con <span lang="it">tu</span> è <strong>non + infinito</strong>.'],
      ['Lo prendi!', 'Prendilo!', '<em lang="en">Take it</em>: il pronome va attaccato alla fine dell\'imperativo.'],
      ['Non fai rumore!', 'Non fare rumore!', '<em lang="en">Don\'t make noise</em>: anche qui <span lang="it">non</span> + infinito.'],
      ['Tu parla italiano!', 'Parla italiano!', 'Come in inglese, l\'imperativo non vuole il soggetto.'],
    ],
    en: [
      ['Non parla adesso!', 'Non parlare adesso!', '<em>Don\'t speak</em> with <span lang="it">tu</span> is <strong lang="it">non + infinitive</strong>.'],
      ['Lo prendi!', 'Prendilo!', '<em>Take it</em>: the pronoun is attached to the end of the imperative.'],
      ['Non fai rumore!', 'Non fare rumore!', '<em>Don\'t make noise</em>: again <span lang="it">non</span> + infinitive.'],
      ['Tu parla italiano!', 'Parla italiano!', 'Just like in English, the imperative has no subject.'],
    ],
    es: [
      ['Non parli adesso!', 'Non parlare adesso!', 'Calco de <em>no hables</em>. Con <span lang="it">tu</span> el negativo es <strong lang="it">non + infinitivo</strong>.'],
      ['Prendelo!', 'Prendilo!', '<em>Tómalo</em>: el imperativo de <span lang="it">prendere</span> con <span lang="it">tu</span> es <span lang="it">prendi</span>, terminado en <span lang="it">-i</span>.'],
      ['Non facciate rumore!', 'Non fate rumore!', '<em>No hagáis</em>: con <span lang="it">voi</span> el negativo es igual al presente.'],
    ],
    pt: [
      ['Non parla adesso!', 'Non parlare adesso!', 'Decalque de <em>não fala</em>. Com <span lang="it">tu</span> o negativo é <strong lang="it">non + infinitivo</strong>.'],
      ['Non parli adesso!', 'Non parlare adesso!', 'Decalque de <em>não fale</em>: <span lang="it">non parli</span> é a forma de <span lang="it">Lei</span>, não de <span lang="it">tu</span>.'],
      ['Mi ascolta!', 'Ascoltami!', '<em>Me escuta</em>: em italiano o pronome vai colado no fim do verbo.'],
    ],
    fr: [
      ['Non parla adesso!', 'Non parlare adesso!', 'Calque de <em>ne parle pas</em>. Avec <span lang="it">tu</span> : <strong lang="it">non + infinitif</strong>.'],
      ['Prendi-lo!', 'Prendilo!', 'Pas de trait d\'union : le pronom se colle au verbe.'],
      ['Parlate più lentamente, signora.', 'Parli più lentamente, signora.', 'Le <em>vous</em> de politesse à une seule personne, c\'est <span lang="it">Lei</span>, pas <span lang="it">voi</span>.'],
    ],
    cs: [
      ['Non parla adesso!', 'Non parlare adesso!', '<em>Nemluv</em> → <strong lang="it">non + infinitiv</strong>.'],
      ['Prendi lo!', 'Prendilo!', 'Zájmeno se píše dohromady se slovesem.'],
      ['Parlate più lentamente, signore.', 'Parli più lentamente, signore.', 'Vykání jednomu člověku je <span lang="it">Lei</span>, ne <span lang="it">voi</span>.'],
    ],
    pl: [
      ['Non parla adesso!', 'Non parlare adesso!', '<em>Nie mów</em> → <strong lang="it">non + bezokolicznik</strong>.'],
      ['Prendi lo!', 'Prendilo!', 'Zaimek pisze się razem z czasownikiem.'],
      ['Prego parlare più lentamente.', 'Parli più lentamente, per favore.', 'Kalka z <em>proszę mówić</em>: grzecznie mówi się formą <span lang="it">Lei</span>.'],
    ],
    tr: [
      ['Non parla adesso!', 'Non parlare adesso!', '<em>Konuşma</em> → <strong lang="it">non + mastar</strong>.'],
      ['Lo prendi!', 'Prendilo!', '<em>Onu al</em>: zamir fiilin sonuna eklenir.'],
      ['Parlate più lentamente, signore.', 'Parli più lentamente, signore.', 'Tek bir kişiye kibarca <em>konuşun</em> → <span lang="it">Lei</span> biçimi: <span lang="it">parli</span>.'],
    ],
    de: [
      ['Parla non!', 'Non parlare!', '<em>Sprich nicht</em>: <span lang="it">non</span> steht vorne, danach der Infinitiv.'],
      ['Prendi lo!', 'Prendilo!', '<em>Nimm es</em>: das Pronomen wird angehängt, in einem Wort.'],
      ['Parlate più lentamente, signore.', 'Parli più lentamente, signore.', '<em>Sprechen Sie</em> → <span lang="it">Lei</span>-Form <span lang="it">parli</span>, nicht <span lang="it">voi</span>.'],
    ],
    ja: [
      ['Non parla adesso!', 'Non parlare adesso!', '「話さないで」は <strong lang="it">non</strong> + 不定詞です。'],
      ['Lo prendi!', 'Prendilo!', '「それを取って」の代名詞は動詞の最後にくっつけます。'],
      ['Per favore parlare più lentamente.', 'Parla più lentamente, per favore.', '「〜てください」を不定詞で言わず、命令法 + <span lang="it">per favore</span> にします。'],
    ],
  },

  'grammatica/a1/aggettivi-e-pronomi-possessivi.html': {
    it: [
      ['Mio libro è sul tavolo.', 'Il mio libro è sul tavolo.', '<em lang="en">My book</em>: in italiano ci vuole l\'articolo.'],
      ['Anna e sua fratello.', 'Anna e suo fratello.', '<em lang="en">Her brother</em>: conta <span lang="it">fratello</span>, che è maschile.'],
      ['La mia madre è medico.', 'Mia madre è medico.', 'Con i nomi di famiglia al singolare niente articolo.'],
      ['Un amico di mio.', 'Un mio amico.', '<em lang="en">A friend of mine</em> → <span lang="it">un mio amico</span>.'],
    ],
    en: [
      ['Mio libro è sul tavolo.', 'Il mio libro è sul tavolo.', '<em>My book</em>: Italian needs the article.'],
      ['Anna e sua fratello.', 'Anna e suo fratello.', '<em>Her brother</em>: what counts is <span lang="it">fratello</span>, which is masculine.'],
      ['La mia madre è medico.', 'Mia madre è medico.', 'Singular family nouns take no article.'],
      ['Un amico di mio.', 'Un mio amico.', '<em>A friend of mine</em> → <span lang="it">un mio amico</span>.'],
    ],
    es: [
      ['Mio libro è sul tavolo.', 'Il mio libro è sul tavolo.', 'Calco de <em>mi libro</em>: en italiano hace falta el artículo.'],
      ['Miei fratelli sono alti.', 'I miei fratelli sono alti.', '<em>Mis hermanos</em>: en plural los familiares llevan artículo.'],
      ['Loro casa è grande.', 'La loro casa è grande.', '<em>Su casa</em> (de ellos) → <span lang="it">la loro casa</span>, siempre con artículo.'],
    ],
    pt: [
      ['Mio libro è sul tavolo.', 'Il mio libro è sul tavolo.', 'Decalque de <em>meu livro</em>: em italiano é preciso o artigo.'],
      ['Maria, è sua questa borsa?', 'Maria, è tua questa borsa?', '<em>É sua?</em> (de você) → <span lang="it">tua</span>. <span lang="it">Sua</span> quer dizer <em>dele / dela</em>.'],
      ['Miei amici sono qui.', 'I miei amici sono qui.', '<em>Meus amigos</em> → com artigo: <span lang="it">i miei amici</span>.'],
    ],
    fr: [
      ['Mio libro è sul tavolo.', 'Il mio libro è sul tavolo.', 'Calque de <em>mon livre</em> : il faut l\'article.'],
      ['Il mio amica.', 'La mia amica.', '<em>Mon amie</em> : en italien le féminin reste féminin.'],
      ['Loro casa è grande.', 'La loro casa è grande.', '<em>Leur maison</em> → <span lang="it">la loro casa</span>, avec l\'article.'],
    ],
    cs: [
      ['Mio libro è sul tavolo.', 'Il mio libro è sul tavolo.', 'Čeština členy nemá, italština ho před přivlastňovacím zájmenem potřebuje.'],
      ['Anna e sua fratello.', 'Anna e suo fratello.', '<em>Její bratr</em>: rozhoduje rod slova <span lang="it">fratello</span> (mužský).'],
      ['La mia madre è medico.', 'Mia madre è medico.', 'Příbuzní v jednotném čísle jsou bez členu.'],
    ],
    pl: [
      ['Mio libro è sul tavolo.', 'Il mio libro è sul tavolo.', 'Polski nie ma rodzajników, ale włoski potrzebuje ich przed zaimkiem.'],
      ['Anna e sua fratello.', 'Anna e suo fratello.', '<em>Jej brat</em>: decyduje rodzaj słowa <span lang="it">fratello</span> (męski).'],
      ['La mia madre è medico.', 'Mia madre è medico.', 'Członkowie rodziny w liczbie pojedynczej są bez rodzajnika.'],
    ],
    tr: [
      ['Mio libro è sul tavolo.', 'Il mio libro è sul tavolo.', '<em>Kitabım</em>: İtalyancada tanımlık da gerekir.'],
      ['Marco e suo sorella.', 'Marco e sua sorella.', 'İyelik sıfatı ismin cinsiyetine uyar: <span lang="it">sorella</span> dişildir.'],
      ['La mia madre è medico.', 'Mia madre è medico.', 'Aile üyeleri tekilken tanımlıksızdır.'],
    ],
    de: [
      ['Mio libro è sul tavolo.', 'Il mio libro è sul tavolo.', '<em>Mein Buch</em>: im Italienischen mit Artikel.'],
      ['Anna e sua fratello.', 'Anna e suo fratello.', '<em>Ihr Bruder</em>: Es zählt <span lang="it">fratello</span> (männlich), nicht Anna.'],
      ['Un amico di me.', 'Un mio amico.', '<em>Ein Freund von mir</em> → <span lang="it">un mio amico</span>.'],
    ],
    ja: [
      ['Mio libro è sul tavolo.', 'Il mio libro è sul tavolo.', '「私の本」でも冠詞が必要です。'],
      ['Anna e sua fratello.', 'Anna e suo fratello.', '「彼女の兄」：<span lang="it">fratello</span> が男性名詞なので <span lang="it">suo</span> です。'],
      ['Chiamo madre.', 'Chiamo mia madre.', '「母に電話します」：イタリア語では <span lang="it">mia</span> を省きません。'],
    ],
  },

  'grammatica/a1/verbo-essere.html': {
    it: [
      ['È io.', 'Sono io.', '<em lang="en">It\'s me</em>: il verbo si accorda con <span lang="it">io</span>.'],
      ['Sono vent\'anni.', "Ho vent'anni.", '<em lang="en">I\'m twenty</em>: l\'età si dice con <strong>avere</strong>.'],
      ['Sono freddo.', 'Ho freddo.', '<em lang="en">I\'m cold</em> → <span lang="it">ho freddo</span>. <span lang="it">Sono freddo</span> vuol dire «sono una persona fredda».'],
      ['Come sei?', 'Come stai?', '<em lang="en">How are you?</em> si chiede con <strong>stare</strong>.'],
    ],
    en: [
      ['È io.', 'Sono io.', '<em>It\'s me</em>: the verb agrees with <span lang="it">io</span>.'],
      ["Sono vent'anni.", "Ho vent'anni.", '<em>I\'m twenty</em>: age uses <strong lang="it">avere</strong>.'],
      ['Sono freddo.', 'Ho freddo.', '<em>I\'m cold</em> → <span lang="it">ho freddo</span>. <span lang="it">Sono freddo</span> means “I\'m a cold person”.'],
      ['Come sei?', 'Come stai?', '<em>How are you?</em> uses <strong lang="it">stare</strong>.'],
    ],
    es: [
      ['Sto stanco.', 'Sono stanco.', '<em>Estoy cansado</em>: con adjetivos el italiano usa <strong lang="it">essere</strong>.'],
      ['Sto contento.', 'Sono contento.', '<em>Estoy contento</em> → <span lang="it">sono contento</span>.'],
      ['Sono bene.', 'Sto bene.', 'Al revés: para la salud, <strong lang="it">stare</strong>. <em>Estoy bien</em> → <span lang="it">sto bene</span>.'],
    ],
    pt: [
      ['Sto stanco.', 'Sono stanco.', '<em>Estou cansado</em>: com adjetivos o italiano usa <strong lang="it">essere</strong>.'],
      ['Sto contento.', 'Sono contento.', '<em>Estou contente</em> → <span lang="it">sono contento</span>.'],
      ['Sono bene.', 'Sto bene.', 'Ao contrário: para a saúde, <strong lang="it">stare</strong>. <em>Estou bem</em> → <span lang="it">sto bene</span>.'],
    ],
    fr: [
      ['È io.', 'Sono io.', '<em>C\'est moi</em> : le verbe s\'accorde avec <span lang="it">io</span>.'],
      ['Vado bene.', 'Sto bene.', '<em>Je vais bien</em> → <strong lang="it">sto bene</strong>.'],
      ['Come vai?', 'Come stai?', '<em>Comment vas-tu ?</em> → <span lang="it">come stai?</span>'],
    ],
    cs: [
      ["Mi è vent'anni.", "Ho vent'anni.", '<em>Je mi dvacet</em> → věk se říká s <strong lang="it">avere</strong>.'],
      ['Mi è freddo.', 'Ho freddo.', '<em>Je mi zima</em> → <span lang="it">ho freddo</span>.'],
      ['Ho bene.', 'Sto bene.', '<em>Mám se dobře</em> → se <strong lang="it">stare</strong>: <span lang="it">sto bene</span>.'],
      ['È io.', 'Sono io.', '<em>To jsem já</em>: sloveso se řídí <span lang="it">io</span>.'],
    ],
    pl: [
      ['Mi è freddo.', 'Ho freddo.', '<em>Jest mi zimno</em> → <strong lang="it">ho freddo</strong>.'],
      ['È io.', 'Sono io.', '<em>To ja</em>: czasownik zgadza się z <span lang="it">io</span>.'],
      ['Mi ho bene.', 'Sto bene.', '<em>Mam się dobrze</em> → ze <strong lang="it">stare</strong>: <span lang="it">sto bene</span>.'],
    ],
    tr: [
      ['Lui insegnante.', 'Lui è insegnante.', '<em>O öğretmen</em>: İtalyancada fiil gerekir.'],
      ["Sono vent'anni.", "Ho vent'anni.", '<em>Yirmi yaşındayım</em> → yaş <strong lang="it">avere</strong> ile söylenir.'],
      ['Sono bene.', 'Sto bene.', '<em>İyiyim</em> → <strong lang="it">stare</strong> ile: <span lang="it">sto bene</span>.'],
    ],
    de: [
      ['È io.', 'Sono io.', '<em>Ich bin es</em>: das Verb richtet sich nach <span lang="it">io</span>.'],
      ["Sono vent'anni.", "Ho vent'anni.", '<em>Ich bin zwanzig</em>: das Alter mit <strong lang="it">avere</strong>.'],
      ['Mi è freddo.', 'Ho freddo.', '<em>Mir ist kalt</em> → <span lang="it">ho freddo</span>.'],
      ['È freddo oggi.', 'Oggi fa freddo.', '<em>Es ist kalt</em> (Wetter) → <span lang="it">fa freddo</span>.'],
    ],
    ja: [
      ["Sono vent'anni.", "Ho vent'anni.", '「二十歳です」：年齢は <strong lang="it">avere</strong> です。'],
      ['Sono bene.', 'Sto bene.', '「元気です」は <strong lang="it">sto bene</strong>。'],
      ['Io sono caffè.', 'Prendo un caffè.', '「私はコーヒーです」（注文）は <span lang="it">prendo</span> を使います。'],
      ['È freddo oggi.', 'Oggi fa freddo.', '「今日は寒いです」（天気）は <span lang="it">fa freddo</span>。'],
    ],
  },

  'grammatica/a1/verbo-avere.html': {
    it: [
      ['Sono fame.', 'Ho fame.', '<em lang="en">I\'m hungry</em> → <strong>avere</strong> + nome.'],
      ['Ho colazione alle otto.', 'Faccio colazione alle otto.', '<em lang="en">Have breakfast</em> si dice con <strong>fare</strong>.'],
      ['Sei giusto.', 'Hai ragione.', '<em lang="en">You\'re right</em> → <span lang="it">hai ragione</span>.'],
      ['O un fratello.', 'Ho un fratello.', 'La <strong>h</strong> non si sente, ma si scrive.'],
    ],
    en: [
      ['Sono fame.', 'Ho fame.', '<em>I\'m hungry</em> → <strong lang="it">avere</strong> + noun.'],
      ['Ho colazione alle otto.', 'Faccio colazione alle otto.', '<em>Have breakfast</em> uses <strong lang="it">fare</strong>.'],
      ['Sei giusto.', 'Hai ragione.', '<em>You\'re right</em> → <span lang="it">hai ragione</span>.'],
      ['O un fratello.', 'Ho un fratello.', 'The <strong>h</strong> is silent, but you must write it.'],
    ],
    es: [
      ['Ho che lavorare.', 'Devo lavorare.', '<em>Tengo que</em> → <strong lang="it">dovere</strong>.'],
      ['Ha un problema.', "C'è un problema.", '<em>Hay un problema</em> → <span lang="it">c\'è</span>; <span lang="it">ha un problema</span> significa «él tiene un problema».'],
      ['Lui a un cane.', 'Lui ha un cane.', '<em>Él tiene</em> → <span lang="it">ha</span>, con h; <span lang="it">a</span> es la preposición.'],
    ],
    pt: [
      ['Sono con fame.', 'Ho fame.', '<em>Estou com fome</em> → <strong lang="it">avere</strong>: <span lang="it">ho fame</span>.'],
      ['Ho che lavorare.', 'Devo lavorare.', '<em>Tenho que</em> → <strong lang="it">dovere</strong>.'],
      ['Ha un problema.', "C'è un problema.", '<em>Tem um problema</em> (existe) → <span lang="it">c\'è</span>; <span lang="it">ha un problema</span> quer dizer «ele tem um problema».'],
    ],
    fr: [
      ['Ho male alla testa.', 'Ho mal di testa.', '<em>J\'ai mal à la tête</em> → <span lang="it">mal di</span> + partie du corps, sans article.'],
      ['Ha un libro sul tavolo.', "C'è un libro sul tavolo.", '<em>Il y a</em> → <span lang="it">c\'è</span> ; <span lang="it">ha</span> veut dire « il a ».'],
      ['Lui a un cane.', 'Lui ha un cane.', '<em>Il a</em> → <span lang="it">ha</span>, avec h ; <span lang="it">a</span> est la préposition.'],
    ],
    cs: [
      ["Mi è trent'anni.", "Ho trent'anni.", '<em>Je mi třicet</em> → <strong lang="it">avere</strong>.'],
      ['Mi è freddo.', 'Ho freddo.', '<em>Je mi zima</em> → <span lang="it">ho freddo</span>.'],
      ['O un fratello.', 'Ho un fratello.', '<strong>H</strong> se nevyslovuje, ale píše se.'],
    ],
    pl: [
      ['Sono fame.', 'Ho fame.', '<em>Jestem głodny</em> → <strong lang="it">avere</strong> + rzeczownik: <span lang="it">ho fame</span>.'],
      ['Mi è freddo.', 'Ho freddo.', '<em>Jest mi zimno</em> → <span lang="it">ho freddo</span>.'],
      ['O un fratello.', 'Ho un fratello.', '<strong>H</strong> się nie wymawia, ale się ją pisze.'],
    ],
    tr: [
      ["C'è mio fratello.", 'Ho un fratello.', '<em>Bir kardeşim var</em> → <span lang="it">ho un fratello</span>. <span lang="it">C\'è mio fratello</span> «kardeşim burada» demektir.'],
      ["Sono trent'anni.", "Ho trent'anni.", '<em>Otuz yaşındayım</em> → yaş <strong lang="it">avere</strong> ile söylenir.'],
      ['Sono giusto.', 'Ho ragione.', '<em>Haklıyım</em> → <span lang="it">ho ragione</span>.'],
    ],
    de: [
      ["Sono trent'anni.", "Ho trent'anni.", '<em>Ich bin dreißig</em> → das Alter mit <strong lang="it">avere</strong>.'],
      ['Mi è freddo.', 'Ho freddo.', '<em>Mir ist kalt</em> → <span lang="it">ho freddo</span>.'],
      ['Ho bisogno un caffè.', 'Ho bisogno di un caffè.', '<em>Ich brauche</em> → <span lang="it">ho bisogno <strong>di</strong></span>.'],
    ],
    ja: [
      ["C'è un fratello.", 'Ho un fratello.', '「兄がいます」（家族）は <strong lang="it">avere</strong> です。'],
      ["C'è una macchina.", 'Ho una macchina.', '「車があります」（持っている）は <span lang="it">ho</span>。<span lang="it">c\'è</span> は「そこに車がある」です。'],
      ["Sono trent'anni.", "Ho trent'anni.", '「三十歳です」：年齢は <strong lang="it">avere</strong> です。'],
    ],
  },

  'grammatica/a2/imperfetto.html': {
    it: [
      ['Usavo giocare a calcio.', 'Giocavo a calcio.', '<em lang="en">Used to</em> non si traduce: basta l\'imperfetto.'],
      ['Ero leggendo quando è arrivato Marco.', 'Leggevo quando è arrivato Marco.', '<em lang="en">I was reading</em> → <span lang="it">leggevo</span> o <span lang="it">stavo leggendo</span>, mai <span lang="it">ero</span> + gerundio.'],
      ['Da bambino ho giocato a calcio ogni giorno.', 'Da bambino giocavo a calcio ogni giorno.', 'Un\'abitudine (<em lang="en">every day</em>) vuole l\'imperfetto, anche se l\'inglese usa il <em lang="en">simple past</em>.'],
    ],
    en: [
      ['Usavo giocare a calcio.', 'Giocavo a calcio.', '<em>Used to</em> isn\'t translated: the imperfetto is enough.'],
      ['Ero leggendo quando è arrivato Marco.', 'Leggevo quando è arrivato Marco.', '<em>I was reading</em> → <span lang="it">leggevo</span> or <span lang="it">stavo leggendo</span>, never <span lang="it">ero</span> + gerund.'],
      ['Da bambino ho giocato a calcio ogni giorno.', 'Da bambino giocavo a calcio ogni giorno.', 'A habit (<em>every day</em>) needs the imperfetto, even where English uses the simple past.'],
    ],
    es: [
      ['Io giocava a calcio.', 'Io giocavo a calcio.', '<em>Yo jugaba</em> y <em>él jugaba</em> son iguales en español; en italiano la primera persona termina en <strong lang="it">-o</strong>.'],
      ['Io era stanco.', 'Io ero stanco.', '<em>Yo era / yo estaba</em> → <span lang="it">io ero</span>; <span lang="it">era</span> es «él era».'],
      ['Noi giocàvamo.', 'Noi giocavamo.', 'En español se escribe la tilde (<em>jugábamos</em>); en italiano no: <span lang="it">giocavamo</span>, con el acento en <span lang="it">-va-</span>.'],
    ],
    pt: [
      ['Io giocava a calcio.', 'Io giocavo a calcio.', '<em>Eu jogava</em> e <em>ele jogava</em> são iguais em português; em italiano a primeira pessoa termina em <strong lang="it">-o</strong>.'],
      ['Io era stanco.', 'Io ero stanco.', '<em>Eu era / eu estava</em> → <span lang="it">io ero</span>; <span lang="it">era</span> é «ele era».'],
      ['Noi giocàvamo.', 'Noi giocavamo.', 'Em português se escreve o acento (<em>jogávamos</em>); em italiano não: <span lang="it">giocavamo</span>.'],
    ],
    fr: [
      ['Io era stanco.', 'Io ero stanco.', '<em>J\'étais</em> → <span lang="it">io ero</span> ; <span lang="it">era</span> correspond à <em>il était</em>.'],
      ['Loro parlavono.', 'Loro parlavano.', '<em>Ils parlaient</em> → terminaison <strong lang="it">-avano</strong>.'],
    ],
    cs: [
      ['Da bambino ho giocato a calcio ogni giorno.', 'Da bambino giocavo a calcio ogni giorno.', '<em>Hrával jsem</em> (zvyk, nedokonavé) → <strong lang="it">imperfetto</strong>.'],
      ['Ho letto quando è arrivato Marco.', 'Leggevo quando è arrivato Marco.', '<em>Četl jsem, když…</em> (děj v průběhu) → <span lang="it">leggevo</span>.'],
      ['Io era stanco.', 'Io ero stanco.', '<em>Byl jsem</em> → <span lang="it">io ero</span>; <span lang="it">era</span> je <em>byl</em> (on).'],
    ],
    pl: [
      ['Da bambino ho giocato a calcio ogni giorno.', 'Da bambino giocavo a calcio ogni giorno.', '<em>Grałem codziennie</em> (zwyczaj, niedokonany) → <strong lang="it">imperfetto</strong>.'],
      ['Ho letto quando è arrivato Marco.', 'Leggevo quando è arrivato Marco.', '<em>Czytałem, kiedy…</em> (czynność w toku) → <span lang="it">leggevo</span>.'],
      ['Io era stanco.', 'Io ero stanco.', '<em>Byłem</em> → <span lang="it">io ero</span>; <span lang="it">era</span> to <em>był</em> (on).'],
    ],
    tr: [
      ['Da bambino ho giocato a calcio ogni giorno.', 'Da bambino giocavo a calcio ogni giorno.', '<em>Oynardım</em> (alışkanlık) → <strong lang="it">imperfetto</strong>.'],
      ['Ho letto quando è arrivato Marco.', 'Leggevo quando è arrivato Marco.', '<em>Okuyordum</em> (süren eylem) → <span lang="it">leggevo</span>.'],
      ['Io era stanco.', 'Io ero stanco.', '<em>Yorgundum</em> → <span lang="it">io ero</span>; <span lang="it">era</span> üçüncü tekil kişidir.'],
    ],
    de: [
      ['Da bambino ho giocato sempre a calcio.', 'Da bambino giocavo sempre a calcio.', 'Gewohnheit (<em>früher immer</em>) → <strong lang="it">imperfetto</strong>, auch wenn man auf Deutsch Perfekt sagt.'],
      ['Ho letto quando è arrivato Marco.', 'Leggevo quando è arrivato Marco.', '<em>Ich las gerade</em> → <span lang="it">leggevo</span>.'],
      ['Ieri sera è stato freddo.', 'Ieri sera faceva freddo.', 'Beschreibungen in der Vergangenheit → <span lang="it">imperfetto</span>, und Wetter mit <span lang="it">fare</span>.'],
    ],
    ja: [
      ['Da bambino ho giocato a calcio ogni giorno.', 'Da bambino giocavo a calcio ogni giorno.', '「よくしていた」（習慣）は <strong lang="it">imperfetto</strong> です。'],
      ['Ho letto quando è arrivato Marco.', 'Leggevo quando è arrivato Marco.', '「読んでいた」（続いていたこと）は <span lang="it">leggevo</span>。'],
      ['Ieri sera è stato freddo.', 'Ieri sera faceva freddo.', '「寒かった」（様子）は <span lang="it">imperfetto</span> で、天気は <span lang="it">fare</span> を使います。'],
    ],
  },
};

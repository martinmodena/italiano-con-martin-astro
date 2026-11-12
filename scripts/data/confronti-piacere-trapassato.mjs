// Confronto con la lingua dello studente ed errori tipici delle lezioni «Il verbo piacere» (A2) e
// «Il trapassato prossimo» (B1), 2026-11-12. Stesso formato di confronti-lingua.mjs ed errori-lingua.mjs,
// che li aggiungono a NOTES ed ERRORS; li inserisce scripts/add-language-notes.mjs.
//
// Piacere: chi ha «gustar», «plaire», «gefallen», «líbit se», «podobać się» ritrova la stessa costruzione; chi
// dice «I like», «gostar de», «sevmek», 「〜が好き」 deve rovesciare la frase. Trapassato: spagnolo, portoghese,
// francese, tedesco e turco hanno un tempo simile; ceco, polacco e giapponese no, e usano il passato con «già».

const i = (s) => `<span lang="it">${s}</span>`;
const b = (s) => `<strong lang="it">${s}</strong>`;
const en = (s) => `<em lang="en">${s}</em>`;

const PIACERE = 'grammatica/a2/verbo-piacere.html';
const TRAPASSATO = 'grammatica/b1/trapassato-prossimo.html';

export const NOTES_PIACERE_TRAPASSATO = {
  [PIACERE]: {
    after: 'come-funziona',
    it: {
      h2: "Piacere: il confronto con l'inglese",
      intro: `In inglese chi ama una cosa è il soggetto: ${en('I like cats')}. In italiano la frase si rovescia: il soggetto sono ${i('i gatti')}, e la persona è un pronome indiretto. Per questo il verbo si accorda con la cosa.`,
      th: ['Inglese', 'Italiano'],
      rows: [
        ['I like coffee.', 'Mi piace il caffè.'],
        ['I like cats.', 'Mi piacciono i gatti.'],
        ['I like reading.', 'Mi piace leggere.'],
        ['I miss you.', 'Mi manchi.'],
        ['I need a pen.', 'Mi serve una penna.'],
        ['Me too! · Me neither.', 'Anche a me! · Neanche a me.'],
      ],
      points: [
        `${en('I like')} diventa «a me piace»: ${b('mi piace')} + una cosa, ${b('mi piacciono')} + più cose.`,
        `${en('I miss you')} si rovescia ancora di più: ${b('mi manchi')}, «tu manchi a me». ${i('Ti manco')} vuol dire ${en('you miss me')}.`,
        `${en('Me too')} dopo ${i('mi piace')} è ${b('anche a me')}, non ${i('anche io')}.`,
      ],
    },
    en: {
      h2: 'Piacere compared with English',
      intro: `In English the person who likes is the subject: <em>I like cats</em>. Italian turns the sentence around: the subject is ${i('i gatti')} and the person is an indirect pronoun. That is why the verb agrees with the thing.`,
      th: ['English', 'Italian'],
      rows: [
        ['I like coffee.', 'Mi piace il caffè.'],
        ['I like cats.', 'Mi piacciono i gatti.'],
        ['I like reading.', 'Mi piace leggere.'],
        ['I miss you.', 'Mi manchi.'],
        ['I need a pen.', 'Mi serve una penna.'],
        ['Me too! · Me neither.', 'Anche a me! · Neanche a me.'],
      ],
      points: [
        `<em>I like</em> becomes “to me is pleasing”: ${b('mi piace')} + one thing, ${b('mi piacciono')} + several things.`,
        `<em>I miss you</em> is turned around even more: ${b('mi manchi')}, “you are missing to me”. ${i('Ti manco')} means “you miss me”.`,
        `“Me too” after ${i('mi piace')} is ${b('anche a me')}, not ${i('anche io')}.`,
      ],
    },
    es: {
      h2: 'Piacere comparado con el español',
      intro: `${i('Piacere')} funciona como «gustar»: la cosa es el sujeto y la persona es un pronombre indirecto. Lo que cambia es que el italiano no repite el pronombre y que el pasado lleva ${i('essere')}.`,
      th: ['Español', 'Italiano'],
      rows: [
        ['Me gusta el café.', 'Mi piace il caffè.'],
        ['Me gustan los gatos.', 'Mi piacciono i gatti.'],
        ['A mí me gusta el mar.', 'A me piace il mare. · Mi piace il mare.'],
        ['A Marco le gusta el fútbol.', 'A Marco piace il calcio. · Gli piace il calcio.'],
        ['Me ha gustado la película.', 'Mi è piaciuto il film.'],
        ['Te echo de menos.', 'Mi manchi.'],
      ],
      points: [
        `Nunca dos pronombres: «a mí me gusta» es ${b('a me piace')} o ${b('mi piace')}, no ${i('a me mi piace')}.`,
        `«Le gusta» se dice ${b('gli piace')} (a él, a ellos) o ${b('le piace')} (a ella).`,
        `En pasado, ${b('essere')} y concordancia: ${b('mi è piaciuta la pizza')}, ${b('mi sono piaciuti i musei')}.`,
      ],
    },
    pt: {
      h2: 'Piacere comparado com o português',
      intro: `Em português você diz «eu gosto <em>de</em> café»: a pessoa é o sujeito. Em italiano é o contrário, como «o café me agrada»: o sujeito é a coisa e a pessoa é um pronome indireto. E não há nenhum ${i('di')}.`,
      th: ['Português', 'Italiano'],
      rows: [
        ['Eu gosto de café.', 'Mi piace il caffè.'],
        ['Eu gosto de gatos.', 'Mi piacciono i gatti.'],
        ['Eu gosto de ler.', 'Mi piace leggere.'],
        ['Ela gosta de música.', 'Le piace la musica.'],
        ['Gostei do filme.', 'Mi è piaciuto il film.'],
        ['Estou com saudade de você.', 'Mi manchi.'],
      ],
      points: [
        `Pense em «agradar», não em «gostar de»: ${b('mi piace')} + uma coisa, ${b('mi piacciono')} + várias coisas.`,
        `Sem preposição: ${b('mi piace leggere')}, nunca ${i('mi piace di leggere')}.`,
        `«Gostei» é ${b('mi è piaciuto')}, com ${i('essere')} e concordância com a coisa: ${b('mi è piaciuta la pizza')}.`,
      ],
    },
    fr: {
      h2: 'Piacere comparé au français',
      intro: `${i('Piacere')} fonctionne comme « plaire » : ${i('mi piace il mare')} = la mer me plaît. Le français dit plus souvent « j’aime la mer », où la personne est le sujet : en italien il faut toujours penser à « plaire ».`,
      th: ['Français', 'Italien'],
      rows: [
        ['J’aime le café.', 'Mi piace il caffè.'],
        ['J’aime les chats.', 'Mi piacciono i gatti.'],
        ['Tu me plais.', 'Mi piaci.'],
        ['Tu me manques.', 'Mi manchi.'],
        ['Le film m’a plu.', 'Mi è piaciuto il film.'],
        ['Moi aussi. · Moi non plus.', 'Anche a me. · Neanche a me.'],
      ],
      points: [
        `« J’aime » se traduit par ${b('mi piace')} ou ${b('mi piacciono')} : le verbe s’accorde avec la chose.`,
        `« Manquer » est identique : ${b('mi manchi')} = tu me manques.`,
        `Au passé, ${b('essere')} et non « avoir » : ${b('mi è piaciuto')} = ça m’a plu.`,
      ],
    },
    cs: {
      h2: 'Piacere v porovnání s češtinou',
      intro: `${i('Piacere')} funguje přesně jako „líbit se“: ${i('mi piace il mare')} = líbí se mi moře. Věc je podmět, osoba je ve 3. pádě. České „mám rád“ se ale překládá také pomocí ${i('piacere')}.`,
      th: ['Čeština', 'Italština'],
      rows: [
        ['Líbí se mi moře.', 'Mi piace il mare.'],
        ['Mám rád kočky.', 'Mi piacciono i gatti.'],
        ['Rád čtu.', 'Mi piace leggere.'],
        ['Líbíš se mi.', 'Mi piaci.'],
        ['Chybíš mi.', 'Mi manchi.'],
        ['Film se mi líbil.', 'Mi è piaciuto il film.'],
      ],
      points: [
        `„Mám rád, rád dělám“ = ${b('mi piace')}, ${b('mi piacciono')}: sloveso se řídí věcí.`,
        `„Chybíš mi, stačí mi, bolí mě“ fungují stejně: ${b('mi manchi')}, ${b('mi basta')}, ${b('mi fa male')}.`,
        `V minulém čase pomocné sloveso ${b('essere')}: ${b('mi è piaciuta la pizza')}.`,
      ],
    },
    pl: {
      h2: 'Piacere w porównaniu z polskim',
      intro: `${i('Piacere')} działa dokładnie jak „podobać się”: ${i('mi piace il mare')} = podoba mi się morze. Rzecz jest podmiotem, osoba stoi w celowniku. Polskie „lubię” też tłumaczy się przez ${i('piacere')}.`,
      th: ['Polski', 'Włoski'],
      rows: [
        ['Podoba mi się morze.', 'Mi piace il mare.'],
        ['Lubię koty.', 'Mi piacciono i gatti.'],
        ['Lubię czytać.', 'Mi piace leggere.'],
        ['Podobasz mi się.', 'Mi piaci.'],
        ['Brakuje mi ciebie.', 'Mi manchi.'],
        ['Film mi się podobał.', 'Mi è piaciuto il film.'],
      ],
      points: [
        `„Lubię” = ${b('mi piace')}, ${b('mi piacciono')}: czasownik zgadza się z rzeczą, nie z osobą.`,
        `„Brakuje mi, wystarczy mi, boli mnie” działają tak samo: ${b('mi manchi')}, ${b('mi basta')}, ${b('mi fa male')}.`,
        `W czasie przeszłym czasownik posiłkowy ${b('essere')}: ${b('mi è piaciuta la pizza')}.`,
      ],
    },
    tr: {
      h2: 'Piacere ile Türkçe karşılaştırması',
      intro: `Türkçede “kahveyi severim” derken seven kişi öznedir. İtalyancada, “kahve hoşuma gidiyor” yapısındaki gibi, özne sevilen şeydir ve kişi dolaylı nesnedir. Bu yüzden fiil şeyle uyum yapar.`,
      th: ['Türkçe', 'İtalyanca'],
      rows: [
        ['Kahveyi severim.', 'Mi piace il caffè.'],
        ['Kedileri severim.', 'Mi piacciono i gatti.'],
        ['Okumayı severim.', 'Mi piace leggere.'],
        ['Senden hoşlanıyorum.', 'Mi piaci.'],
        ['Seni özledim.', 'Mi manchi.'],
        ['Filmi beğendim.', 'Mi è piaciuto il film.'],
      ],
      points: [
        `“Hoşuma gidiyor” diye düşünün: ${b('mi piace')} + tek şey, ${b('mi piacciono')} + birden çok şey.`,
        `Türkçede fiil çoğul nesneyle değişmez; İtalyancada değişir: ${b('mi piacciono i gatti')}.`,
        `“Seni özledim” tersine döner: ${b('mi manchi')}, “sen bana eksiksin”.`,
      ],
    },
    de: {
      h2: 'Piacere im Vergleich mit dem Deutschen',
      intro: `${i('Piacere')} funktioniert wie „gefallen“: ${i('mi piace il mare')} = mir gefällt das Meer. Die Sache ist das Subjekt, die Person steht im Dativ. Auch „ich mag“ und „gern“ übersetzt man mit ${i('piacere')}.`,
      th: ['Deutsch', 'Italienisch'],
      rows: [
        ['Mir gefällt das Meer.', 'Mi piace il mare.'],
        ['Ich mag Katzen.', 'Mi piacciono i gatti.'],
        ['Ich lese gern.', 'Mi piace leggere.'],
        ['Du gefällst mir.', 'Mi piaci.'],
        ['Du fehlst mir.', 'Mi manchi.'],
        ['Der Film hat mir gefallen.', 'Mi è piaciuto il film.'],
      ],
      points: [
        `„Ich mag, gern“ = ${b('mi piace')}, ${b('mi piacciono')}: wie „gefällt, gefallen“.`,
        `„Fehlen, reichen, wehtun“ funktionieren gleich: ${b('mi manchi')}, ${b('mi basta')}, ${b('mi fa male')}.`,
        `In der Vergangenheit ${b('essere')}, nicht „haben“: ${b('mi è piaciuto')} = hat mir gefallen.`,
      ],
    },
    ja: {
      h2: 'piacere と日本語の比較',
      intro: `日本語の「猫<strong>が</strong>好き」と同じように、イタリア語でも好きなもの（猫）が主語です。好きな人は間接目的語の代名詞（${i('mi')} ＝ 私に）になります。ちがいは、動詞が好きなものの数に合わせて変わることです。`,
      th: ['日本語', 'イタリア語'],
      rows: [
        ['コーヒーが好きです。', 'Mi piace il caffè.'],
        ['猫が好きです。', 'Mi piacciono i gatti.'],
        ['読むのが好きです。', 'Mi piace leggere.'],
        ['あなたが好きです。', 'Mi piaci.'],
        ['あなたがいなくて寂しい。', 'Mi manchi.'],
        ['映画、よかったです。', 'Mi è piaciuto il film.'],
      ],
      points: [
        `日本語は単数・複数を区別しませんが、イタリア語では ${b('mi piace')}（一つ）と ${b('mi piacciono')}（複数）を使い分けます。`,
        `「〜が必要」「〜が痛い」も同じ形：${b('mi serve')}、${b('mi fa male')}。`,
        `「私も」は ${b('anche a me')}。${i('anche io')} ではありません。`,
      ],
    },
  },
  [TRAPASSATO]: {
    after: 'quando',
    it: {
      h2: "Il trapassato prossimo: il confronto con l'inglese",
      intro: `Il trapassato prossimo corrisponde al ${en('past perfect')}: ${en('had left')} = ${b('era partito')}. Ma l'inglese usa sempre ${en('had')}, l'italiano sceglie fra ${i('avere')} ed ${i('essere')}; e l'inglese spesso lo salta, l'italiano no.`,
      th: ['Inglese', 'Italiano'],
      rows: [
        ['When I arrived, the train had already left.', 'Quando sono arrivato, il treno era già partito.'],
        ['I had never been to Rome.', 'Non ero mai stato a Roma.'],
        ['I was tired because I had worked all day.', 'Ero stanco perché avevo lavorato tutto il giorno.'],
        ['She said she had lost her keys.', 'Ha detto che aveva perso le chiavi.'],
        ['After we ate, we went out.', 'Dopo che avevamo mangiato, siamo usciti.'],
      ],
      points: [
        `${en('Had')} diventa ${b('avevo')} o ${b('ero')}: si sceglie come al passato prossimo.`,
        `${en('I had been')} è ${b('ero stato')}, con ${i('essere')}.`,
        `Quando l'inglese usa il passato semplice per un fatto precedente (${en('after we ate')}), l'italiano preferisce il trapassato.`,
      ],
    },
    en: {
      h2: 'The trapassato prossimo compared with English',
      intro: `The trapassato prossimo is the Italian past perfect: <em>had left</em> = ${b('era partito')}. But English always uses “had”, while Italian chooses between ${i('avere')} and ${i('essere')}; and English often skips it, Italian doesn’t.`,
      th: ['English', 'Italian'],
      rows: [
        ['When I arrived, the train had already left.', 'Quando sono arrivato, il treno era già partito.'],
        ['I had never been to Rome.', 'Non ero mai stato a Roma.'],
        ['I was tired because I had worked all day.', 'Ero stanco perché avevo lavorato tutto il giorno.'],
        ['She said she had lost her keys.', 'Ha detto che aveva perso le chiavi.'],
        ['After we ate, we went out.', 'Dopo che avevamo mangiato, siamo usciti.'],
      ],
      points: [
        `“Had” becomes ${b('avevo')} or ${b('ero')}: you choose as in the passato prossimo.`,
        `“I had been” is ${b('ero stato')}, with ${i('essere')}.`,
        `Where English uses the simple past for an earlier event (“after we ate”), Italian prefers the trapassato.`,
      ],
    },
    es: {
      h2: 'El trapassato prossimo comparado con el español',
      intro: `El trapassato prossimo es el pluscuamperfecto: «había salido» = ${b('era partito')}. El uso es el mismo; la diferencia está en el auxiliar: el español siempre dice «había», el italiano elige entre ${i('avere')} y ${i('essere')}.`,
      th: ['Español', 'Italiano'],
      rows: [
        ['Cuando llegué, el tren ya había salido.', 'Quando sono arrivato, il treno era già partito.'],
        ['Nunca había estado en Roma.', 'Non ero mai stato a Roma.'],
        ['Ana ya se había ido.', 'Anna era già andata via.'],
        ['Me dijo que había perdido las llaves.', 'Mi ha detto che aveva perso le chiavi.'],
        ['Ya lo había leído.', 'L’avevo già letto.'],
      ],
      points: [
        `«Había ido, había llegado» van con ${b('essere')}: ${b('ero andato')}, ${b('ero arrivato')}.`,
        `Con ${i('essere')} el participio concuerda: ${b('Anna era partita')}, ${b('eravamo usciti')}.`,
        `${i('Già')} va entre el auxiliar y el participio: ${b('era già partito')}.`,
      ],
    },
    pt: {
      h2: 'O trapassato prossimo comparado com o português',
      intro: `O trapassato prossimo é o mais-que-perfeito composto: «tinha saído» = ${b('era partito')}. O uso é o mesmo; a diferença está no auxiliar: em português é sempre «ter», em italiano ${i('avere')} ou ${i('essere')}.`,
      th: ['Português', 'Italiano'],
      rows: [
        ['Quando cheguei, o trem já tinha partido.', 'Quando sono arrivato, il treno era già partito.'],
        ['Eu nunca tinha estado em Roma.', 'Non ero mai stato a Roma.'],
        ['A Ana já tinha ido embora.', 'Anna era già andata via.'],
        ['Ele me disse que tinha perdido as chaves.', 'Mi ha detto che aveva perso le chiavi.'],
        ['Eu já tinha lido.', 'L’avevo già letto.'],
      ],
      points: [
        `«Tinha ido, tinha chegado» vão com ${b('essere')}: ${b('ero andato')}, ${b('ero arrivato')}.`,
        `Com ${i('essere')} o particípio concorda: ${b('Anna era partita')}.`,
        `${i('Già')} fica entre o auxiliar e o particípio: ${b('era già partito')}.`,
      ],
    },
    fr: {
      h2: 'Le trapassato prossimo comparé au français',
      intro: `Le trapassato prossimo est le plus-que-parfait : « il était parti » = ${b('era partito')}, « j’avais mangé » = ${b('avevo mangiato')}. Même usage, même mécanisme ; seuls quelques verbes changent d’auxiliaire.`,
      th: ['Français', 'Italien'],
      rows: [
        ['Quand je suis arrivé, le train était déjà parti.', 'Quando sono arrivato, il treno era già partito.'],
        ['Je n’étais jamais allé à Rome.', 'Non ero mai stato a Roma.'],
        ['J’avais été malade.', 'Ero stato male.'],
        ['Le film m’avait plu.', 'Il film mi era piaciuto.'],
        ['Il m’a dit qu’il avait perdu ses clés.', 'Mi ha detto che aveva perso le chiavi.'],
      ],
      points: [
        `« J’avais été » = ${b('ero stato')} : ${i('essere')} se conjugue avec ${i('essere')}.`,
        `Les verbes comme ${i('piacere, bastare, costare')} prennent ${b('essere')} : ${b('mi era piaciuto')}.`,
        `L’accord se fait comme en français : ${b('Anna era partita')}, ${b('l’avevo letta')}.`,
      ],
    },
    cs: {
      h2: 'Trapassato prossimo v porovnání s češtinou',
      intro: `Čeština předminulý čas („byl jsem udělal“) už skoro nepoužívá: stačí minulý čas a slova „už, předtím“. Italština potřebuje zvláštní tvar: ${b('era già partito')}.`,
      th: ['Čeština', 'Italština'],
      rows: [
        ['Když jsem přišel, vlak už odjel.', 'Quando sono arrivato, il treno era già partito.'],
        ['Nikdy předtím jsem v Římě nebyl.', 'Non ero mai stato a Roma.'],
        ['Byl jsem unavený, protože jsem celý den pracoval.', 'Ero stanco perché avevo lavorato tutto il giorno.'],
        ['Řekl mi, že ztratil klíče.', 'Mi ha detto che aveva perso le chiavi.'],
      ],
      points: [
        `Když se něco stalo před jinou minulou událostí, použijte ${b('trapassato')}, i když česky stačí „už“.`,
        `V nepřímé řeči se čas mění: „řekl, že ztratil“ = ${b('ha detto che aveva perso')}.`,
        `Pomocné sloveso vybírejte jako v passato prossimo: ${b('avevo mangiato')}, ${b('ero andato')}.`,
      ],
    },
    pl: {
      h2: 'Trapassato prossimo w porównaniu z polskim',
      intro: `Polski czas zaprzeszły („byłem zrobił”) jest dziś przestarzały: wystarczy czas przeszły i słowa „już, wcześniej”. Po włosku potrzebna jest osobna forma: ${b('era già partito')}.`,
      th: ['Polski', 'Włoski'],
      rows: [
        ['Kiedy przyjechałem, pociąg już odjechał.', 'Quando sono arrivato, il treno era già partito.'],
        ['Nigdy wcześniej nie byłem w Rzymie.', 'Non ero mai stato a Roma.'],
        ['Byłem zmęczony, bo cały dzień pracowałem.', 'Ero stanco perché avevo lavorato tutto il giorno.'],
        ['Powiedział mi, że zgubił klucze.', 'Mi ha detto che aveva perso le chiavi.'],
      ],
      points: [
        `Gdy coś wydarzyło się przed innym zdarzeniem z przeszłości, użyj ${b('trapassato')}, nawet jeśli po polsku wystarcza „już”.`,
        `W mowie zależnej czas się zmienia: „powiedział, że zgubił” = ${b('ha detto che aveva perso')}.`,
        `Czasownik posiłkowy wybierasz jak w passato prossimo: ${b('avevo mangiato')}, ${b('ero andato')}.`,
      ],
    },
    tr: {
      h2: 'Trapassato prossimo ile Türkçe karşılaştırması',
      intro: `Trapassato prossimo, Türkçedeki “-mişti / -dıydı” biçimine çok yakındır: “tren kalkmıştı” = ${b('il treno era partito')}. Fark: İtalyancada iki yardımcı fiil vardır, ${i('avere')} ve ${i('essere')}.`,
      th: ['Türkçe', 'İtalyanca'],
      rows: [
        ['Vardığımda tren çoktan kalkmıştı.', 'Quando sono arrivato, il treno era già partito.'],
        ['Roma’ya hiç gitmemiştim.', 'Non ero mai stato a Roma.'],
        ['Yorgundum, çünkü bütün gün çalışmıştım.', 'Ero stanco perché avevo lavorato tutto il giorno.'],
        ['Anahtarlarını kaybettiğini söyledi.', 'Mi ha detto che aveva perso le chiavi.'],
      ],
      points: [
        `“-mişti” = ${b('avevo / ero')} + ortaç; yardımcı fiil passato prossimo’daki gibi seçilir.`,
        `${i('Essere')} ile ortaç özneyle uyum yapar: ${b('Anna era partita')}.`,
        `Türkçede “-mişti” bazen sadece uzak geçmiş içindir; İtalyancada geçmişte başka bir an gerekir.`,
      ],
    },
    de: {
      h2: 'Das trapassato prossimo im Vergleich mit dem Deutschen',
      intro: `Das trapassato prossimo ist das Plusquamperfekt: „war abgefahren“ = ${b('era partito')}, „hatte gegessen“ = ${b('avevo mangiato')}. Gleicher Gebrauch; aber das Partizip steht nicht am Ende und wird mit ${i('essere')} angeglichen.`,
      th: ['Deutsch', 'Italienisch'],
      rows: [
        ['Als ich ankam, war der Zug schon abgefahren.', 'Quando sono arrivato, il treno era già partito.'],
        ['Ich war noch nie in Rom gewesen.', 'Non ero mai stato a Roma.'],
        ['Der Film hatte mir gefallen.', 'Il film mi era piaciuto.'],
        ['Anna war schon gegangen.', 'Anna era già andata via.'],
        ['Nachdem wir gegessen hatten, gingen wir aus.', 'Dopo che avevamo mangiato, siamo usciti.'],
      ],
      points: [
        `„Hatte gefallen, hatte gekostet, hatte sich gewaschen“ werden mit ${b('essere')} gebildet: ${b('mi era piaciuto')}, ${b('era costato')}, ${b('si era lavato')}.`,
        `Mit ${i('essere')} wird das Partizip angeglichen: ${b('Anna era partita')}.`,
        `Das Partizip steht direkt nach dem Hilfsverb: ${b('era già partito')}, nicht am Satzende.`,
      ],
    },
    ja: {
      h2: '大過去と日本語の比較',
      intro: `日本語には大過去という特別な時制がなく、「もう〜ていた」「〜たことがなかった」で表します。イタリア語では、過去のある時点より前のことに専用の形を使います：${b('era già partito')}。`,
      th: ['日本語', 'イタリア語'],
      rows: [
        ['着いたとき、電車はもう出ていた。', 'Quando sono arrivato, il treno era già partito.'],
        ['それまでローマに行ったことがなかった。', 'Non ero mai stato a Roma.'],
        ['一日中働いたので疲れていた。', 'Ero stanco perché avevo lavorato tutto il giorno.'],
        ['かぎをなくしたと言っていた。', 'Mi ha detto che aveva perso le chiavi.'],
      ],
      points: [
        `「もう〜ていた」が過去のある時点より前のことなら ${b('trapassato')}。`,
        `人の言葉を伝えるときは時制が変わります：「なくした」→ ${b('aveva perso')}。`,
        `「〜ていた」が「その最中だった」という意味なら半過去：${b('Anna dormiva')}。`,
      ],
    },
  },
};

export const ERRORS_PIACERE_TRAPASSATO = {
  [PIACERE]: {
    it: [
      [
        'Io piaccio la pizza.',
        'Mi piace la pizza.',
        `${en('I like pizza')}: il soggetto è la pizza, ${b('mi piace')}.`,
      ],
      [
        'Mi piace i gatti.',
        'Mi piacciono i gatti.',
        `${en('I like cats')}: i gatti sono plurale, ${b('mi piacciono')}.`,
      ],
      [
        '«Mi piace il mare.» «Anche io!»',
        '«Mi piace il mare.» «Anche a me!»',
        `${en('Me too')}, dopo ${i('mi piace')}, è ${b('anche a me')}.`,
      ],
      ['Io manco te.', 'Mi manchi.', `${en('I miss you')} si rovescia: ${b('mi manchi')}.`],
    ],
    en: [
      [
        'Io piaccio la pizza.',
        'Mi piace la pizza.',
        `<em>I like pizza</em>: the pizza is the subject, ${b('mi piace')}.`,
      ],
      ['Mi piace i gatti.', 'Mi piacciono i gatti.', `<em>I like cats</em>: cats are plural, ${b('mi piacciono')}.`],
      [
        '«Mi piace il mare.» «Anche io!»',
        '«Mi piace il mare.» «Anche a me!»',
        `“Me too” after ${i('mi piace')} is ${b('anche a me')}.`,
      ],
      ['Io manco te.', 'Mi manchi.', `<em>I miss you</em> is turned around: ${b('mi manchi')}.`],
    ],
    es: [
      [
        'A me mi piace il mare.',
        'A me piace il mare. · Mi piace il mare.',
        `«A mí me gusta»: en italiano un solo pronombre, ${b('a me piace')} o ${b('mi piace')}.`,
      ],
      [
        'A Marco gli piace il calcio.',
        'A Marco piace il calcio.',
        `«A Marco le gusta»: no se repite, ${b('a Marco piace')}.`,
      ],
      ['Mi ha piaciuto il film.', 'Mi è piaciuto il film.', `«Me ha gustado»: ${i('piacere')} va con ${b('essere')}.`],
    ],
    pt: [
      ['Piaccio del caffè.', 'Mi piace il caffè.', `«Gosto de café»: a coisa é o sujeito, ${b('mi piace il caffè')}.`],
      ['Mi piace di leggere.', 'Mi piace leggere.', `«Gosto de ler»: sem ${i('di')}, ${b('mi piace leggere')}.`],
      [
        'Mi ha piaciuto il film.',
        'Mi è piaciuto il film.',
        `«Gostei do filme»: ${i('piacere')} vai com ${b('essere')}.`,
      ],
    ],
    fr: [
      [
        'Mi ha piaciuto il film.',
        'Mi è piaciuto il film.',
        `« Le film m’a plu » : ${i('piacere')} prend ${b('essere')}.`,
      ],
      [
        '«Mi piace il mare.» «Anche io!»',
        '«Mi piace il mare.» «Anche a me!»',
        `« Moi aussi » après ${i('mi piace')} : ${b('anche a me')}.`,
      ],
      ['Mi piace i libri.', 'Mi piacciono i libri.', `« Les livres me plaisent » : pluriel, ${b('piacciono')}.`],
    ],
    cs: [
      [
        'Mi piace i gatti.',
        'Mi piacciono i gatti.',
        `„Líbí se mi kočky“: kočky jsou množné číslo, ${b('mi piacciono')}.`,
      ],
      ['Mi ha piaciuto il film.', 'Mi è piaciuto il film.', `„Film se mi líbil“: ${i('piacere')} má ${b('essere')}.`],
      ['«Mi piace il mare.» «Anche io!»', '«Mi piace il mare.» «Anche a me!»', `„Mně taky“: ${b('anche a me')}.`],
    ],
    pl: [
      ['Mi piace i gatti.', 'Mi piacciono i gatti.', `„Podobają mi się koty”: liczba mnoga, ${b('mi piacciono')}.`],
      [
        'Mi ha piaciuto il film.',
        'Mi è piaciuto il film.',
        `„Film mi się podobał”: ${i('piacere')} łączy się z ${b('essere')}.`,
      ],
      ['«Mi piace il mare.» «Anche io!»', '«Mi piace il mare.» «Anche a me!»', `„Mnie też”: ${b('anche a me')}.`],
    ],
    tr: [
      ['Io piaccio i gatti.', 'Mi piacciono i gatti.', `“Kedileri severim”: özne kedilerdir, ${b('mi piacciono')}.`],
      ['Mi piace i gatti.', 'Mi piacciono i gatti.', `Kediler çoğul olduğu için fiil de çoğul: ${b('piacciono')}.`],
      ['Io manco te.', 'Mi manchi.', `“Seni özledim”: ${b('mi manchi')}, “sen bana eksiksin”.`],
    ],
    de: [
      ['Mi ha piaciuto il film.', 'Mi è piaciuto il film.', `„Hat mir gefallen“: ${i('piacere')} hat ${b('essere')}.`],
      [
        'Io piaccio i gatti.',
        'Mi piacciono i gatti.',
        `„Ich mag Katzen“: denk an „mir gefallen Katzen“, ${b('mi piacciono')}.`,
      ],
      [
        'Ho bisogno una penna.',
        'Mi serve una penna.',
        `„Ich brauche einen Stift“: ${b('mi serve')} oder ${b('ho bisogno di una penna')}.`,
      ],
    ],
    ja: [
      ['Mi piace i gatti.', 'Mi piacciono i gatti.', `「猫が好き」：猫が複数なので ${b('piacciono')}。`],
      ['«Mi piace il mare.» «Anche io!»', '«Mi piace il mare.» «Anche a me!»', `「私も」は ${b('anche a me')}。`],
      ['Mi ha piaciuto il film.', 'Mi è piaciuto il film.', `${i('piacere')} の過去形は ${b('essere')} を使います。`],
    ],
  },
  [TRAPASSATO]: {
    it: [
      [
        'Quando sono arrivato, il treno è già partito.',
        'Quando sono arrivato, il treno era già partito.',
        `${en('Had already left')}: il fatto precedente va al trapassato, ${b('era partito')}.`,
      ],
      ['Avevo stato a Roma.', 'Ero stato a Roma.', `${en('I had been')}: ${i('essere')} vuole ${b('essere')}.`],
      [
        'Anna era già partito.',
        'Anna era già partita.',
        `Con ${i('essere')} il participio si accorda: ${b('partita')}.`,
      ],
    ],
    en: [
      [
        'Quando sono arrivato, il treno è già partito.',
        'Quando sono arrivato, il treno era già partito.',
        `“Had already left”: the earlier event goes into the trapassato, ${b('era partito')}.`,
      ],
      ['Avevo stato a Roma.', 'Ero stato a Roma.', `“I had been”: ${i('essere')} takes ${b('essere')}.`],
      ['Anna era già partito.', 'Anna era già partita.', `With ${i('essere')} the participle agrees: ${b('partita')}.`],
    ],
    es: [
      ['Avevo andato al mare.', 'Ero andato al mare.', `«Había ido»: ${i('andare')} va con ${b('essere')}.`],
      [
        'Anna era già partito.',
        'Anna era già partita.',
        `Con ${i('essere')} el participio concuerda: ${b('partita')}.`,
      ],
      [
        'Quando sono arrivato, il treno è già partito.',
        'Quando sono arrivato, il treno era già partito.',
        `«Ya había salido», no «ya salió»: ${b('era già partito')}.`,
      ],
    ],
    pt: [
      ['Avevo andato al mare.', 'Ero andato al mare.', `«Tinha ido»: ${i('andare')} vai com ${b('essere')}.`],
      ['Anna era già partito.', 'Anna era già partita.', `Com ${i('essere')} o particípio concorda: ${b('partita')}.`],
      [
        'Quando sono arrivato, il treno è già partito.',
        'Quando sono arrivato, il treno era già partito.',
        `«Já tinha partido»: ${b('era già partito')}.`,
      ],
    ],
    fr: [
      ['Avevo stato a Roma.', 'Ero stato a Roma.', `« J’avais été » : en italien ${i('essere')} prend ${b('essere')}.`],
      [
        'Il film mi aveva piaciuto.',
        'Il film mi era piaciuto.',
        `« Le film m’avait plu » : ${i('piacere')} prend ${b('essere')}.`,
      ],
      ['Mi aveva bastato.', 'Mi era bastato.', `« Ça m’avait suffi » : ${i('bastare')} prend ${b('essere')}.`],
    ],
    cs: [
      [
        'Quando sono arrivato, il treno è già partito.',
        'Quando sono arrivato, il treno era già partito.',
        `„Vlak už odjel“ před mým příchodem: ${b('era già partito')}.`,
      ],
      ['Avevo andato a casa.', 'Ero andato a casa.', `${i('Andare')} má pomocné sloveso ${b('essere')}.`],
      ['Anna era già partito.', 'Anna era già partita.', `S ${i('essere')} se příčestí shoduje: ${b('partita')}.`],
    ],
    pl: [
      [
        'Quando sono arrivato, il treno è già partito.',
        'Quando sono arrivato, il treno era già partito.',
        `„Pociąg już odjechał” przed moim przyjazdem: ${b('era già partito')}.`,
      ],
      ['Avevo andato a casa.', 'Ero andato a casa.', `${i('Andare')} łączy się z ${b('essere')}.`],
      ['Anna era già partito.', 'Anna era già partita.', `Z ${i('essere')} imiesłów się zgadza: ${b('partita')}.`],
    ],
    tr: [
      ['Avevo andato a casa.', 'Ero andato a casa.', `“Eve gitmiştim”: ${i('andare')} ${b('essere')} alır.`],
      ['Anna era già partito.', 'Anna era già partita.', `${i('Essere')} ile ortaç uyum yapar: ${b('partita')}.`],
      [
        'Quando sono arrivato, il treno è già partito.',
        'Quando sono arrivato, il treno era già partito.',
        `“Tren çoktan kalkmıştı”: ${b('era già partito')}.`,
      ],
    ],
    de: [
      [
        'Il film mi aveva piaciuto.',
        'Il film mi era piaciuto.',
        `„Hatte mir gefallen“: ${i('piacere')} hat ${b('essere')}.`,
      ],
      ['Si aveva lavato.', 'Si era lavato.', `„Er hatte sich gewaschen“: reflexive Verben haben immer ${b('essere')}.`],
      [
        'Anna era già partito.',
        'Anna era già partita.',
        `Mit ${i('essere')} wird das Partizip angeglichen: ${b('partita')}.`,
      ],
    ],
    ja: [
      [
        'Quando sono arrivato, il treno è già partito.',
        'Quando sono arrivato, il treno era già partito.',
        `「もう出ていた」は着く前のこと：${b('era già partito')}。`,
      ],
      ['Avevo andato a casa.', 'Ero andato a casa.', `${i('andare')} は ${b('essere')} を使います。`],
      [
        'Anna era già partito.',
        'Anna era già partita.',
        `${i('essere')} のとき過去分詞は主語に合わせます：${b('partita')}。`,
      ],
    ],
  },
};

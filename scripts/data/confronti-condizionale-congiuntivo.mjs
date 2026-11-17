// Confronto con la lingua dello studente ed errori tipici delle lezioni «Il condizionale passato» (B2) e
// «Il congiuntivo passato e trapassato» (C1), 2026-11-17. Stesso formato di confronti-lingua.mjs ed
// errori-lingua.mjs, che li aggiungono a NOTES ed ERRORS; li inserisce scripts/add-language-notes.mjs.
//
// Condizionale passato: la trappola comune è il futuro nel passato («he said he would come», «dijo que vendría»,
// «il a dit qu'il viendrait», «er sagte, er würde kommen» → ha detto che sarebbe venuto); ceco, polacco, turco e
// giapponese tengono il futuro («řekl, že přijde», «geleceğini söyledi»). Il condizionale delle notizie ha un
// equivalente in spagnolo e francese, «soll» in tedesco, «údajně / podobno» in ceco e polacco, «-mış» in turco.
// Congiuntivo passato e trapassato: spagnolo, portoghese e francese hanno tempi simili ma mettono l'indicativo
// dopo «creo que / acho que / je pense que»; inglese, ceco, polacco, turco e giapponese non hanno il congiuntivo.

const i = (s) => `<span lang="it">${s}</span>`;
const b = (s) => `<strong lang="it">${s}</strong>`;
const en = (s) => `<em lang="en">${s}</em>`;

const COND = 'grammatica/b2/condizionale-passato.html';
const CONG = 'grammatica/c1/congiuntivo-passato-e-trapassato.html';

export const NOTES_CONDIZIONALE_CONGIUNTIVO = {
  [COND]: {
    after: 'quando',
    it: {
      h2: "Il condizionale passato: il confronto con l'inglese",
      intro: `Il condizionale passato corrisponde a ${en('would have done')}: ${en('I would have come')} = ${b('sarei venuto')}. Ma l'inglese usa sempre ${en('have')}, l'italiano sceglie fra ${i('avere')} ed ${i('essere')}; e per il futuro nel passato l'inglese usa ${en('would come')}, l'italiano il condizionale passato.`,
      th: ['Inglese', 'Italiano'],
      rows: [
        ['I would have come, but I was ill.', 'Sarei venuto, ma ero malato.'],
        ['You should have told me.', 'Avresti dovuto dirmelo.'],
        ['If I had known, I would have helped you.', 'Se avessi saputo, ti avrei aiutato.'],
        ['He said he would come.', 'Ha detto che sarebbe venuto.'],
        ['The minister has reportedly resigned.', 'Il ministro avrebbe dato le dimissioni.'],
      ],
      points: [
        `${en('Would have')} diventa ${b('avrei')} o ${b('sarei')}: si sceglie come al passato prossimo.`,
        `${en('He said he would come')} è ${b('ha detto che sarebbe venuto')}, mai ${i('che verrebbe')}.`,
        `${en('Should have told')} è ${b('avrei dovuto dire')}: il passato va sul verbo modale.`,
      ],
    },
    en: {
      h2: 'The condizionale passato compared with English',
      intro: `The condizionale passato is “would have done”: <em>I would have come</em> = ${b('sarei venuto')}. But English always uses “have”, while Italian chooses between ${i('avere')} and ${i('essere')}; and for the future in the past English says “would come”, Italian uses the condizionale passato.`,
      th: ['English', 'Italian'],
      rows: [
        ['I would have come, but I was ill.', 'Sarei venuto, ma ero malato.'],
        ['You should have told me.', 'Avresti dovuto dirmelo.'],
        ['If I had known, I would have helped you.', 'Se avessi saputo, ti avrei aiutato.'],
        ['He said he would come.', 'Ha detto che sarebbe venuto.'],
        ['The minister has reportedly resigned.', 'Il ministro avrebbe dato le dimissioni.'],
      ],
      points: [
        `“Would have” becomes ${b('avrei')} or ${b('sarei')}: you choose as in the passato prossimo.`,
        `“He said he would come” is ${b('ha detto che sarebbe venuto')}, never ${i('che verrebbe')}.`,
        `“Should have told” is ${b('avrei dovuto dire')}: the past goes on the modal verb.`,
      ],
    },
    es: {
      h2: 'El condizionale passato comparado con el español',
      intro: `El condizionale passato es el condicional compuesto: «habría venido» = ${b('sarei venuto')}. La diferencia está en el auxiliar (el español siempre dice «habría») y, sobre todo, en el futuro en el pasado, donde el español usa el condicional simple.`,
      th: ['Español', 'Italiano'],
      rows: [
        ['Habría venido, pero estaba enfermo.', 'Sarei venuto, ma ero malato.'],
        ['Deberías habérmelo dicho.', 'Avresti dovuto dirmelo.'],
        ['Si hubiera sabido, te habría ayudado.', 'Se avessi saputo, ti avrei aiutato.'],
        ['Dijo que vendría.', 'Ha detto che sarebbe venuto.'],
        ['El ministro habría dimitido.', 'Il ministro avrebbe dato le dimissioni.'],
      ],
      points: [
        `«Habría» se convierte en ${b('avrei')} o ${b('sarei')}: «habría ido» es ${b('sarei andato')}.`,
        `«Dijo que vendría» es ${b('ha detto che sarebbe venuto')}, nunca ${i('che verrebbe')}.`,
        `«Deberías haber dicho» es ${b('avresti dovuto dire')}: el pasado va en el modal.`,
      ],
    },
    pt: {
      h2: 'O condizionale passato comparado com o português',
      intro: `O condizionale passato é o futuro do pretérito composto: «eu teria vindo» = ${b('sarei venuto')}. A diferença está no auxiliar (o português sempre diz «teria») e, sobretudo, no futuro no passado, onde o português usa o futuro do pretérito simples.`,
      th: ['Português', 'Italiano'],
      rows: [
        ['Eu teria vindo, mas estava doente.', 'Sarei venuto, ma ero malato.'],
        ['Você deveria ter me contado.', 'Avresti dovuto dirmelo.'],
        ['Se eu tivesse sabido, teria te ajudado.', 'Se avessi saputo, ti avrei aiutato.'],
        ['Ele disse que viria.', 'Ha detto che sarebbe venuto.'],
        ['O ministro teria renunciado.', 'Il ministro avrebbe dato le dimissioni.'],
      ],
      points: [
        `«Teria» vira ${b('avrei')} ou ${b('sarei')}: «teria ido» é ${b('sarei andato')}.`,
        `«Disse que viria» é ${b('ha detto che sarebbe venuto')}, nunca ${i('che verrebbe')}.`,
        `«Deveria ter dito» é ${b('avresti dovuto dire')}: o passado vai no verbo modal.`,
      ],
    },
    fr: {
      h2: 'Le condizionale passato comparé au français',
      intro: `Le condizionale passato est votre conditionnel passé : « je serais venu » = ${b('sarei venuto')}, souvent avec le même auxiliaire. La grande différence, c’est le futur dans le passé, où le français emploie le conditionnel présent.`,
      th: ['Français', 'Italien'],
      rows: [
        ['Je serais venu, mais j’étais malade.', 'Sarei venuto, ma ero malato.'],
        ['Tu aurais dû me le dire.', 'Avresti dovuto dirmelo.'],
        ['Si j’avais su, je t’aurais aidé.', 'Se avessi saputo, ti avrei aiutato.'],
        ['Il a dit qu’il viendrait.', 'Ha detto che sarebbe venuto.'],
        ['Le ministre aurait démissionné.', 'Il ministro avrebbe dato le dimissioni.'],
      ],
      points: [
        `« Il a dit qu’il viendrait » se dit ${b('ha detto che sarebbe venuto')}, jamais ${i('che verrebbe')}.`,
        `« Si j’avais su » se dit ${b('se avessi saputo')}, au congiuntivo, pas à l’indicatif.`,
        `Le conditionnel journalistique existe aussi en italien : ${b('il ministro avrebbe dato le dimissioni')}.`,
      ],
    },
    cs: {
      h2: 'Condizionale passato ve srovnání s češtinou',
      intro: `Čeština dnes minulý kondicionál („byl bych přišel“) skoro nepoužívá a říká „přišel bych“ i o minulosti. Italština musí rozlišit: ${i('verrei')} (dnes) a ${b('sarei venuto')} (v minulosti). A budoucnost v minulosti, kterou čeština nechává v budoucím čase, je v italštině condizionale passato.`,
      th: ['Čeština', 'Italština'],
      rows: [
        ['Přišel bych, ale byl jsem nemocný.', 'Sarei venuto, ma ero malato.'],
        ['Měl jsi mi to říct.', 'Avresti dovuto dirmelo.'],
        ['Kdybych to věděl, pomohl bych ti.', 'Se avessi saputo, ti avrei aiutato.'],
        ['Řekl, že přijde.', 'Ha detto che sarebbe venuto.'],
        ['Ministr údajně odstoupil.', 'Il ministro avrebbe dato le dimissioni.'],
      ],
      points: [
        `„Přišel bych“ o minulosti je ${b('sarei venuto')}, ne ${i('verrei')}.`,
        `„Řekl, že přijde“ je ${b('ha detto che sarebbe venuto')}: budoucí čas se mění.`,
        `„Údajně“ ve zprávách vyjadřuje italština condizionale passato: ${b('avrebbe dato')}.`,
      ],
    },
    pl: {
      h2: 'Condizionale passato w porównaniu z polskim',
      intro: `Polszczyzna prawie nie używa już trybu przypuszczającego przeszłego („byłbym przyszedł”) i mówi „przyszedłbym” także o przeszłości. Włoski musi rozróżnić: ${i('verrei')} (dziś) i ${b('sarei venuto')} (w przeszłości). A przyszłość w przeszłości, którą polski zostawia w czasie przyszłym, po włosku jest w condizionale passato.`,
      th: ['Polski', 'Włoski'],
      rows: [
        ['Przyszedłbym, ale byłem chory.', 'Sarei venuto, ma ero malato.'],
        ['Powinieneś był mi to powiedzieć.', 'Avresti dovuto dirmelo.'],
        ['Gdybym wiedział, pomógłbym ci.', 'Se avessi saputo, ti avrei aiutato.'],
        ['Powiedział, że przyjdzie.', 'Ha detto che sarebbe venuto.'],
        ['Minister podobno podał się do dymisji.', 'Il ministro avrebbe dato le dimissioni.'],
      ],
      points: [
        `„Przyszedłbym” o przeszłości to ${b('sarei venuto')}, nie ${i('verrei')}.`,
        `„Powiedział, że przyjdzie” to ${b('ha detto che sarebbe venuto')}: czas przyszły się zmienia.`,
        `„Podobno” w wiadomościach to po włosku condizionale passato: ${b('avrebbe dato')}.`,
      ],
    },
    tr: {
      h2: 'Condizionale passato ile Türkçe karşılaştırması',
      intro: `Türkçe olmamış şeyleri “-ırdı” ya da “-acaktı” ile anlatır; İtalyanca ise condizionale passato kullanır ve ${i('avere')} ile ${i('essere')} arasında seçim yapar. Türkçede “geleceğini söyledi” gelecek zamanda kalır, İtalyancada condizionale passato olur.`,
      th: ['Türkçe', 'İtalyanca'],
      rows: [
        ['Gelirdim ama hastaydım.', 'Sarei venuto, ma ero malato.'],
        ['Bana söylemeliydin.', 'Avresti dovuto dirmelo.'],
        ['Bilseydim sana yardım ederdim.', 'Se avessi saputo, ti avrei aiutato.'],
        ['Geleceğini söyledi.', 'Ha detto che sarebbe venuto.'],
        ['Bakan istifa etmiş.', 'Il ministro avrebbe dato le dimissioni.'],
      ],
      points: [
        `“Söylemeliydin” iki parçalı olur: ${b('avresti dovuto')} + ${i('dire')}.`,
        `“Geleceğini söyledi” = ${b('ha detto che sarebbe venuto')}: gelecek zaman condizionale passato olur.`,
        `Haberlerdeki “-mış” (duyulan bilgi) İtalyancada condizionale passato ile verilir: ${b('avrebbe dato')}.`,
      ],
    },
    de: {
      h2: 'Das condizionale passato im Vergleich mit dem Deutschen',
      intro: `Das condizionale passato entspricht dem Konjunktiv II der Vergangenheit: „ich wäre gekommen“ = ${b('sarei venuto')}, „ich hätte gegessen“ = ${b('avrei mangiato')}. Hätte und wäre passen oft genau zu ${i('avrei')} und ${i('sarei')}. Anders ist die Zukunft in der Vergangenheit.`,
      th: ['Deutsch', 'Italienisch'],
      rows: [
        ['Ich wäre gekommen, aber ich war krank.', 'Sarei venuto, ma ero malato.'],
        ['Du hättest es mir sagen sollen.', 'Avresti dovuto dirmelo.'],
        ['Wenn ich es gewusst hätte, hätte ich dir geholfen.', 'Se avessi saputo, ti avrei aiutato.'],
        ['Er sagte, er würde kommen.', 'Ha detto che sarebbe venuto.'],
        ['Der Minister soll zurückgetreten sein.', 'Il ministro avrebbe dato le dimissioni.'],
      ],
      points: [
        `„Er sagte, er würde kommen“ ist ${b('ha detto che sarebbe venuto')}, nie ${i('che verrebbe')}.`,
        `„Du hättest es sagen sollen“ ist ${b('avresti dovuto dirlo')}: Modalverb zuerst, Infinitiv danach.`,
        `Das „soll“ der Nachrichten wird zum condizionale passato: ${b('avrebbe dato le dimissioni')}.`,
      ],
    },
    ja: {
      h2: '条件法過去と日本語のくらべかた',
      intro: `日本語では「〜したのに」「〜すればよかった」と文末で気持ちを表しますが、イタリア語では動詞を条件法過去にします：${b('sarei venuto')}、${b('avresti dovuto')}。また「来ると言った」の「来る」は、イタリア語では条件法過去になります。`,
      th: ['日本語', 'イタリア語'],
      rows: [
        ['行きたかったけど、病気だった。', 'Sarei venuto, ma ero malato.'],
        ['言ってくれればよかったのに。', 'Avresti dovuto dirmelo.'],
        ['知っていたら、手伝ったのに。', 'Se avessi saputo, ti avrei aiutato.'],
        ['彼は来ると言った。', 'Ha detto che sarebbe venuto.'],
        ['大臣が辞任したもよう。', 'Il ministro avrebbe dato le dimissioni.'],
      ],
      points: [
        `「〜すればよかったのに」は ${b('avresti dovuto')} ＋ 不定詞です。`,
        `「来ると言った」は ${b('ha detto che sarebbe venuto')}：未来が条件法過去になります。`,
        `ニュースの「〜したもよう」「〜したとみられる」は条件法過去で表します：${b('avrebbe dato')}。`,
      ],
    },
  },
  [CONG]: {
    after: 'quando',
    it: {
      h2: "Il congiuntivo passato e trapassato: il confronto con l'inglese",
      intro: `L'inglese non ha più un congiuntivo vivo: dopo ${en('I think')} usa l'indicativo. L'italiano vuole il congiuntivo, e sceglie fra passato e trapassato secondo il tempo del verbo principale. Il trapassato corrisponde al ${en('past perfect')} dopo ${en('if')}, ${en('as if')} e ${en('I wish')}.`,
      th: ['Inglese', 'Italiano'],
      rows: [
        ['I think Luca has left.', 'Penso che Luca sia partito.'],
        ['I thought Luca had left.', 'Pensavo che Luca fosse partito.'],
        ['If I had known, I would have come.', 'Se l’avessi saputo, sarei venuto.'],
        ['He looked at me as if he had never seen me.', 'Mi guardava come se non mi avesse mai visto.'],
        ['I wish I had studied more!', 'Magari avessi studiato di più!'],
      ],
      points: [
        `Dopo ${en('I think, I hope, I’m glad')} l'inglese usa l'indicativo; l'italiano ${b('penso che sia partito')}.`,
        `${en('Had + participle')} dopo ${en('if, as if, I wish')} diventa ${b('avessi / fossi')} + participio.`,
        `${en('I wish I had')} = ${b('magari avessi')}.`,
      ],
    },
    en: {
      h2: 'The congiuntivo passato and trapassato compared with English',
      intro: `English no longer has a living subjunctive: after “I think” it uses the indicative. Italian needs the subjunctive, and chooses between passato and trapassato according to the tense of the main verb. The trapassato matches the past perfect after “if”, “as if” and “I wish”.`,
      th: ['English', 'Italian'],
      rows: [
        ['I think Luca has left.', 'Penso che Luca sia partito.'],
        ['I thought Luca had left.', 'Pensavo che Luca fosse partito.'],
        ['If I had known, I would have come.', 'Se l’avessi saputo, sarei venuto.'],
        ['He looked at me as if he had never seen me.', 'Mi guardava come se non mi avesse mai visto.'],
        ['I wish I had studied more!', 'Magari avessi studiato di più!'],
      ],
      points: [
        `After “I think, I hope, I’m glad” English uses the indicative; Italian says ${b('penso che sia partito')}.`,
        `“Had + participle” after “if, as if, I wish” becomes ${b('avessi / fossi')} + participle.`,
        `“I wish I had” = ${b('magari avessi')}.`,
      ],
    },
    es: {
      h2: 'El congiuntivo passato y trapassato comparados con el español',
      intro: `Buenas noticias: ${b('abbia fatto')} es tu «haya hecho» y ${b('avessi fatto')} tu «hubiera hecho», con la misma concordancia de tiempos. Las diferencias: el auxiliar ${i('essere')} y los verbos de opinión, que en español llevan indicativo.`,
      th: ['Español', 'Italiano'],
      rows: [
        ['Espero que Luca haya llegado bien.', 'Spero che Luca sia arrivato bene.'],
        ['Esperaba que Luca hubiera llegado.', 'Speravo che Luca fosse arrivato.'],
        ['Creo que Luca ha salido.', 'Credo che Luca sia uscito.'],
        ['Si lo hubiera sabido, habría venido.', 'Se l’avessi saputo, sarei venuto.'],
        ['¡Ojalá hubiera estudiado más!', 'Magari avessi studiato di più!'],
      ],
      points: [
        `«Haya» → ${b('abbia')} o ${b('sia')}; «hubiera» → ${b('avessi')} o ${b('fossi')}.`,
        `«Creo que ha salido» lleva indicativo; en italiano ${b('credo che sia uscito')}.`,
        `«Ojalá hubiera» = ${b('magari avessi')}; «como si hubiera» = ${b('come se avesse')}.`,
      ],
    },
    pt: {
      h2: 'O congiuntivo passato e trapassato comparados com o português',
      intro: `Boa notícia: ${b('abbia fatto')} é o seu «tenha feito» e ${b('avessi fatto')} o seu «tivesse feito», com a mesma concordância de tempos. As diferenças: o auxiliar ${i('essere')} e os verbos de opinião, que em português pedem o indicativo.`,
      th: ['Português', 'Italiano'],
      rows: [
        ['Espero que o Luca tenha chegado bem.', 'Spero che Luca sia arrivato bene.'],
        ['Eu esperava que o Luca tivesse chegado.', 'Speravo che Luca fosse arrivato.'],
        ['Acho que o Luca saiu.', 'Credo che Luca sia uscito.'],
        ['Se eu tivesse sabido, teria vindo.', 'Se l’avessi saputo, sarei venuto.'],
        ['Quem me dera ter estudado mais!', 'Magari avessi studiato di più!'],
      ],
      points: [
        `«Tenha» → ${b('abbia')} ou ${b('sia')}; «tivesse» → ${b('avessi')} ou ${b('fossi')}.`,
        `«Acho que ele saiu» pede indicativo; em italiano ${b('credo che sia uscito')}.`,
        `«Quem me dera» = ${b('magari')}; «como se tivesse» = ${b('come se avesse')}.`,
      ],
    },
    fr: {
      h2: 'Le congiuntivo passato et trapassato comparés au français',
      intro: `${b('Che sia partito')} est votre « qu’il soit parti », souvent avec le même auxiliaire. Mais le français parlé n’emploie plus le subjonctif plus-que-parfait et met l’indicatif après « je pense que », « si » et « comme si » : l’italien, lui, met le congiuntivo.`,
      th: ['Français', 'Italien'],
      rows: [
        ['Je suis content qu’il soit venu.', 'Sono contento che sia venuto.'],
        ['Je pense qu’il est parti.', 'Penso che sia partito.'],
        ['Je pensais qu’il était parti.', 'Pensavo che fosse partito.'],
        ['Si j’avais su, je serais venu.', 'Se l’avessi saputo, sarei venuto.'],
        ['Comme s’il ne m’avait jamais vu.', 'Come se non mi avesse mai visto.'],
      ],
      points: [
        `Subjonctif passé → ${b('congiuntivo passato')} : « qu’il soit parti » = ${b('che sia partito')}.`,
        `« Je pense qu’il est parti » : en italien, congiuntivo, ${b('penso che sia partito')}.`,
        `« Si / comme si + plus-que-parfait » → ${b('se / come se + avessi, fossi')}.`,
      ],
    },
    cs: {
      h2: 'Congiuntivo passato a trapassato ve srovnání s češtinou',
      intro: `Čeština konjunktiv nemá a nemá ani souslednost časů: „myslím, že odjel“ i „myslel jsem, že odjel“. Italština mění obojí: ${b('penso che sia partito')}, ${b('pensavo che fosse partito')}. Po „kdyby“, „jako by“ a „kéž by“ je congiuntivo trapassato.`,
      th: ['Čeština', 'Italština'],
      rows: [
        ['Myslím, že Luca odjel.', 'Penso che Luca sia partito.'],
        ['Myslel jsem, že Luca odjel.', 'Pensavo che Luca fosse partito.'],
        ['Kdybych to věděl, přišel bych.', 'Se l’avessi saputo, sarei venuto.'],
        ['Díval se na mě, jako by mě nikdy neviděl.', 'Mi guardava come se non mi avesse mai visto.'],
        ['Kéž bych se víc učil!', 'Magari avessi studiato di più!'],
      ],
      points: [
        `Stejné české „odjel“ je italsky jednou ${b('sia partito')}, jednou ${b('fosse partito')}.`,
        `„Kdybych byl věděl“ = ${b('se avessi saputo')}, ne kondicionál.`,
        `„Jako by“ = ${b('come se')}, „kéž by“ = ${b('magari')}, obojí s trapassato.`,
      ],
    },
    pl: {
      h2: 'Congiuntivo passato i trapassato w porównaniu z polskim',
      intro: `Polszczyzna nie ma trybu łączącego ani następstwa czasów: „myślę, że wyjechał” i „myślałem, że wyjechał”. Włoski zmienia obie rzeczy: ${b('penso che sia partito')}, ${b('pensavo che fosse partito')}. Po „gdyby”, „jakby” i „gdybym tylko” jest congiuntivo trapassato.`,
      th: ['Polski', 'Włoski'],
      rows: [
        ['Myślę, że Luca wyjechał.', 'Penso che Luca sia partito.'],
        ['Myślałem, że Luca wyjechał.', 'Pensavo che Luca fosse partito.'],
        ['Gdybym wiedział, przyszedłbym.', 'Se l’avessi saputo, sarei venuto.'],
        ['Patrzył na mnie, jakby nigdy mnie nie widział.', 'Mi guardava come se non mi avesse mai visto.'],
        ['Gdybym tylko więcej się uczył!', 'Magari avessi studiato di più!'],
      ],
      points: [
        `To samo polskie „wyjechał” po włosku raz jest ${b('sia partito')}, raz ${b('fosse partito')}.`,
        `„Gdybym wiedział” (o przeszłości) = ${b('se avessi saputo')}, nie tryb przypuszczający.`,
        `„Jakby” = ${b('come se')}, „gdybym tylko” = ${b('magari')}, oba z trapassato.`,
      ],
    },
    tr: {
      h2: 'Congiuntivo passato ve trapassato ile Türkçe karşılaştırması',
      intro: `Türkçede görüş ve duygular ekle verilir (“gittiğini düşünüyorum”); İtalyanca ise ${i('che')} ile yeni bir cümle kurar ve dilek kipini kullanır. “-seydi”, “sanki … -mış gibi” ve “keşke” ise congiuntivo trapassato ile karşılanır.`,
      th: ['Türkçe', 'İtalyanca'],
      rows: [
        ['Luca’nın gittiğini düşünüyorum.', 'Penso che Luca sia partito.'],
        ['Luca’nın gittiğini düşünüyordum.', 'Pensavo che Luca fosse partito.'],
        ['Bilseydim gelirdim.', 'Se l’avessi saputo, sarei venuto.'],
        ['Sanki beni hiç görmemiş gibi bakıyordu.', 'Mi guardava come se non mi avesse mai visto.'],
        ['Keşke daha çok çalışsaydım!', 'Magari avessi studiato di più!'],
      ],
      points: [
        `Aynı “gittiğini” İtalyancada bir ${b('sia partito')}, bir ${b('fosse partito')} olur.`,
        `“Bilseydim” = ${b('se avessi saputo')}; “sanki … gibi” = ${b('come se')}.`,
        `“Keşke” = ${b('magari')}: ${b('magari avessi studiato')}.`,
      ],
    },
    de: {
      h2: 'Das congiuntivo passato und trapassato im Vergleich mit dem Deutschen',
      intro: `Das congiuntivo trapassato entspricht oft Ihrem Konjunktiv II der Vergangenheit: „hätte gewusst“ = ${b('avessi saputo')}, „wäre gekommen“ = ${b('fossi venuto')}. Aber nach „ich glaube, dass“ benutzt das Deutsche den Indikativ, das Italienische das congiuntivo.`,
      th: ['Deutsch', 'Italienisch'],
      rows: [
        ['Ich glaube, dass Luca abgereist ist.', 'Penso che Luca sia partito.'],
        ['Ich dachte, dass Luca abgereist war.', 'Pensavo che Luca fosse partito.'],
        ['Wenn ich es gewusst hätte, wäre ich gekommen.', 'Se l’avessi saputo, sarei venuto.'],
        ['Er sah mich an, als ob er mich nie gesehen hätte.', 'Mi guardava come se non mi avesse mai visto.'],
        ['Hätte ich doch mehr gelernt!', 'Magari avessi studiato di più!'],
      ],
      points: [
        `„Ich glaube, dass er abgereist ist“: im Italienischen congiuntivo, ${b('penso che sia partito')}.`,
        `„Wenn ich … hätte“ = ${b('se avessi')}; „als ob er … hätte“ = ${b('come se avesse')}.`,
        `„Hätte ich doch …!“ = ${b('magari avessi')}.`,
      ],
    },
    ja: {
      h2: '接続法過去・大過去と日本語のくらべかた',
      intro: `日本語では「出発したと思う」「出発したと思っていた」のように、時制を合わせず、特別な形も使いません。イタリア語では ${b('penso che sia partito')}、${b('pensavo che fosse partito')} と、接続法の形と時制を変えます。「〜していたら」「まるで〜たかのように」「〜しておけばよかった」は接続法大過去です。`,
      th: ['日本語', 'イタリア語'],
      rows: [
        ['ルカはもう出発したと思う。', 'Penso che Luca sia partito.'],
        ['ルカはもう出発したと思っていた。', 'Pensavo che Luca fosse partito.'],
        ['知っていたら、来たのに。', 'Se l’avessi saputo, sarei venuto.'],
        ['まるで一度も会ったことがないかのように、わたしを見ていた。', 'Mi guardava come se non mi avesse mai visto.'],
        ['もっと勉強しておけばよかった！', 'Magari avessi studiato di più!'],
      ],
      points: [
        `同じ「出発した」が、${b('sia partito')} にも ${b('fosse partito')} にもなります。`,
        `「知っていたら」＝ ${b('se avessi saputo')}、「まるで〜たかのように」＝ ${b('come se')}。`,
        `「〜しておけばよかった」＝ ${b('magari avessi')} ＋ 過去分詞。`,
      ],
    },
  },
};

export const ERRORS_CONDIZIONALE_CONGIUNTIVO = {
  [COND]: {
    it: [
      [
        'Ha detto che verrebbe.',
        'Ha detto che sarebbe venuto.',
        `${en('He said he would come')}: il futuro nel passato è ${b('sarebbe venuto')}.`,
      ],
      [
        'Avrei andato volentieri.',
        'Sarei andato volentieri.',
        `${en('I would have gone')}: ${i('andare')} vuole ${b('essere')}.`,
      ],
      [
        'Ieri vorrei uscire.',
        'Ieri sarei voluto uscire.',
        `Un desiderio passato e non realizzato: ${b('sarei voluto')} o ${b('avrei voluto')}.`,
      ],
    ],
    en: [
      [
        'Ha detto che verrebbe.',
        'Ha detto che sarebbe venuto.',
        `“He said he would come”: the future in the past is ${b('sarebbe venuto')}.`,
      ],
      ['Avrei andato volentieri.', 'Sarei andato volentieri.', `“I would have gone”: ${i('andare')} takes ${b('essere')}.`],
      [
        'Ieri vorrei uscire.',
        'Ieri sarei voluto uscire.',
        `A past wish that didn’t come true: ${b('sarei voluto')} or ${b('avrei voluto')}.`,
      ],
    ],
    es: [
      [
        'Ha detto che verrebbe.',
        'Ha detto che sarebbe venuto.',
        `«Dijo que vendría»: en italiano, condicional compuesto, ${b('sarebbe venuto')}.`,
      ],
      ['Avrei andato volentieri.', 'Sarei andato volentieri.', `«Habría ido»: ${i('andare')} va con ${b('essere')}.`],
      [
        'Dovresti avermelo detto.',
        'Avresti dovuto dirmelo.',
        `«Deberías habérmelo dicho»: el pasado va en el modal, ${b('avresti dovuto')}.`,
      ],
    ],
    pt: [
      [
        'Ha detto che verrebbe.',
        'Ha detto che sarebbe venuto.',
        `«Disse que viria»: em italiano, condicional composto, ${b('sarebbe venuto')}.`,
      ],
      ['Avrei andato volentieri.', 'Sarei andato volentieri.', `«Teria ido»: ${i('andare')} vai com ${b('essere')}.`],
      [
        'Dovresti avermelo detto.',
        'Avresti dovuto dirmelo.',
        `«Deveria ter me dito»: o passado vai no modal, ${b('avresti dovuto')}.`,
      ],
    ],
    fr: [
      [
        'Ha detto che verrebbe.',
        'Ha detto che sarebbe venuto.',
        `« Il a dit qu’il viendrait » : en italien, conditionnel passé, ${b('sarebbe venuto')}.`,
      ],
      [
        'Mi avrebbe piaciuto.',
        'Mi sarebbe piaciuto.',
        `« Ça m’aurait plu » : ${i('piacere')} prend ${b('essere')}.`,
      ],
      ['Avrei stato felice.', 'Sarei stato felice.', `« J’aurais été » : ${i('essere')} prend ${b('essere')}.`],
    ],
    cs: [
      ['Ieri verrei volentieri.', 'Ieri sarei venuto volentieri.', `„Včera bych rád přišel“: o minulosti ${b('sarei venuto')}.`],
      [
        'Ha detto che verrà.',
        'Ha detto che sarebbe venuto.',
        `„Řekl, že přijde“: budoucnost v minulosti je ${b('sarebbe venuto')}.`,
      ],
      ['Laura sarebbe venuto.', 'Laura sarebbe venuta.', `S ${i('essere')} se příčestí shoduje: ${b('venuta')}.`],
    ],
    pl: [
      ['Ieri verrei volentieri.', 'Ieri sarei venuto volentieri.', `„Wczoraj chętnie bym przyszedł”: o przeszłości ${b('sarei venuto')}.`],
      [
        'Ha detto che verrà.',
        'Ha detto che sarebbe venuto.',
        `„Powiedział, że przyjdzie”: przyszłość w przeszłości to ${b('sarebbe venuto')}.`,
      ],
      ['Laura sarebbe venuto.', 'Laura sarebbe venuta.', `Z ${i('essere')} imiesłów się zgadza: ${b('venuta')}.`],
    ],
    tr: [
      [
        'Ha detto che verrà.',
        'Ha detto che sarebbe venuto.',
        `“Geleceğini söyledi”: geçmişte gelecek ${b('sarebbe venuto')} olur.`,
      ],
      ['Avrei andato volentieri.', 'Sarei andato volentieri.', `${i('Andare')} ${b('essere')} alır.`],
      ['Laura sarebbe venuto.', 'Laura sarebbe venuta.', `${i('Essere')} ile ortaç uyum yapar: ${b('venuta')}.`],
    ],
    de: [
      [
        'Ha detto che verrebbe.',
        'Ha detto che sarebbe venuto.',
        `„Er sagte, er würde kommen“: im Italienischen ${b('sarebbe venuto')}.`,
      ],
      [
        'Avresti dirmelo dovuto.',
        'Avresti dovuto dirmelo.',
        `„Du hättest es mir sagen sollen“: Modalverb zuerst, ${b('avresti dovuto dirmelo')}.`,
      ],
      ['Mi avrei divertito.', 'Mi sarei divertito.', `„Ich hätte mich amüsiert“: reflexiv, also ${b('essere')}.`],
    ],
    ja: [
      [
        'Ha detto che verrà.',
        'Ha detto che sarebbe venuto.',
        `「来ると言った」：過去から見た未来は ${b('sarebbe venuto')}。`,
      ],
      ['Laura sarebbe venuto.', 'Laura sarebbe venuta.', `${i('essere')} のときは過去分詞が変わる：${b('venuta')}。`],
      ['Avrei andato volentieri.', 'Sarei andato volentieri.', `${i('andare')} は ${b('essere')} を使う。`],
    ],
  },
  [CONG]: {
    it: [
      [
        'Penso che Marco è partito.',
        'Penso che Marco sia partito.',
        `Dopo ${i('penso che')} ci vuole il congiuntivo: ${b('sia partito')}.`,
      ],
      [
        'Pensavo che Marco sia partito.',
        'Pensavo che Marco fosse partito.',
        `${en('I thought he had left')}: verbo al passato, ${b('fosse partito')}.`,
      ],
      [
        'Se avrei saputo, sarei venuto.',
        'Se avessi saputo, sarei venuto.',
        `${en('If I had known')}: dopo ${i('se')} il congiuntivo, ${b('avessi saputo')}.`,
      ],
    ],
    en: [
      [
        'Penso che Marco è partito.',
        'Penso che Marco sia partito.',
        `After ${i('penso che')} you need the subjunctive: ${b('sia partito')}.`,
      ],
      [
        'Pensavo che Marco sia partito.',
        'Pensavo che Marco fosse partito.',
        `“I thought he had left”: past main verb, ${b('fosse partito')}.`,
      ],
      [
        'Se avrei saputo, sarei venuto.',
        'Se avessi saputo, sarei venuto.',
        `“If I had known”: after ${i('se')} the subjunctive, ${b('avessi saputo')}.`,
      ],
    ],
    es: [
      [
        'Credo che Luca è uscito.',
        'Credo che Luca sia uscito.',
        `«Creo que ha salido» lleva indicativo; ${i('credo che')} lleva congiuntivo: ${b('sia uscito')}.`,
      ],
      ['Spero che abbia arrivato bene.', 'Spero che sia arrivato bene.', `«Haya llegado»: ${i('arrivare')} va con ${b('essere')}.`],
      [
        'Se l’avrei saputo, sarei venuto.',
        'Se l’avessi saputo, sarei venuto.',
        `«Si lo hubiera sabido»: ${b('se l’avessi saputo')}.`,
      ],
    ],
    pt: [
      [
        'Credo che Luca è uscito.',
        'Credo che Luca sia uscito.',
        `«Acho que ele saiu» pede indicativo; ${i('credo che')} pede congiuntivo: ${b('sia uscito')}.`,
      ],
      ['Spero che abbia arrivato bene.', 'Spero che sia arrivato bene.', `«Tenha chegado»: ${i('arrivare')} vai com ${b('essere')}.`],
      [
        'Se l’avrei saputo, sarei venuto.',
        'Se l’avessi saputo, sarei venuto.',
        `«Se eu tivesse sabido»: ${b('se l’avessi saputo')}.`,
      ],
    ],
    fr: [
      [
        'Penso che è partito.',
        'Penso che sia partito.',
        `« Je pense qu’il est parti » : en italien, congiuntivo, ${b('sia partito')}.`,
      ],
      [
        'Se l’avevo saputo, sarei venuto.',
        'Se l’avessi saputo, sarei venuto.',
        `« Si je l’avais su » : congiuntivo trapassato, ${b('se l’avessi saputo')}.`,
      ],
      [
        'Come se non mi aveva mai visto.',
        'Come se non mi avesse mai visto.',
        `« Comme s’il ne m’avait jamais vu » : ${b('come se non mi avesse mai visto')}.`,
      ],
    ],
    cs: [
      [
        'Penso che Luca è partito.',
        'Penso che Luca sia partito.',
        `Po ${i('penso che')} je konjunktiv: ${b('sia partito')}.`,
      ],
      [
        'Pensavo che Luca è partito.',
        'Pensavo che Luca fosse partito.',
        `„Myslel jsem, že odjel“: hlavní sloveso v minulosti, ${b('fosse partito')}.`,
      ],
      [
        'Se avrei saputo, sarei venuto.',
        'Se avessi saputo, sarei venuto.',
        `„Kdybych byl věděl“: po ${i('se')} nikdy kondicionál, ${b('avessi saputo')}.`,
      ],
    ],
    pl: [
      [
        'Penso che Luca è partito.',
        'Penso che Luca sia partito.',
        `Po ${i('penso che')} jest congiuntivo: ${b('sia partito')}.`,
      ],
      [
        'Pensavo che Luca è partito.',
        'Pensavo che Luca fosse partito.',
        `„Myślałem, że wyjechał”: czasownik główny w przeszłości, ${b('fosse partito')}.`,
      ],
      [
        'Se avrei saputo, sarei venuto.',
        'Se avessi saputo, sarei venuto.',
        `„Gdybym wiedział”: po ${i('se')} nigdy tryb przypuszczający, ${b('avessi saputo')}.`,
      ],
    ],
    tr: [
      [
        'Penso che Luca è partito.',
        'Penso che Luca sia partito.',
        `${i('Penso che')} sonrasında congiuntivo gelir: ${b('sia partito')}.`,
      ],
      [
        'Pensavo che Luca sia partito.',
        'Pensavo che Luca fosse partito.',
        `“Gittiğini düşünüyordum”: ana fiil geçmişte, ${b('fosse partito')}.`,
      ],
      [
        'Magari avrei studiato di più!',
        'Magari avessi studiato di più!',
        `“Keşke çalışsaydım”: ${i('magari')} + ${b('avessi studiato')}.`,
      ],
    ],
    de: [
      [
        'Penso che Luca è partito.',
        'Penso che Luca sia partito.',
        `„Ich glaube, dass er abgereist ist“: im Italienischen congiuntivo, ${b('sia partito')}.`,
      ],
      [
        'Se avrei saputo, sarei venuto.',
        'Se avessi saputo, sarei venuto.',
        `„Wenn ich es gewusst hätte“: nach ${i('se')} ${b('avessi saputo')}, nicht der Konditional.`,
      ],
      [
        'Magari avrei studiato di più!',
        'Magari avessi studiato di più!',
        `„Hätte ich doch mehr gelernt!“: ${b('magari avessi studiato')}.`,
      ],
    ],
    ja: [
      [
        'Penso che Luca è partito.',
        'Penso che Luca sia partito.',
        `${i('penso che')} のあとは接続法：${b('sia partito')}。`,
      ],
      [
        'Pensavo che Luca sia partito.',
        'Pensavo che Luca fosse partito.',
        `「出発したと思っていた」：主節が過去なので ${b('fosse partito')}。`,
      ],
      [
        'Se avrei saputo, sarei venuto.',
        'Se avessi saputo, sarei venuto.',
        `「知っていたら」：${i('se')} のあとは接続法、${b('avessi saputo')}。`,
      ],
    ],
  },
};

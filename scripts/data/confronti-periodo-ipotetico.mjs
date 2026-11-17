// Confronto con la lingua dello studente ed errori tipici della lezione «Il periodo ipotetico» (B2), rifatta il
// 2026-11-17. Stesso formato di confronti-lingua.mjs ed errori-lingua.mjs, che li aggiungono a NOTES ed ERRORS;
// li inserisce scripts/add-language-notes.mjs.
//
// Le trappole per lingua: inglese «if I would», «if I were you»; spagnolo e francese mettono l'indicativo dopo
// «si» dove l'italiano vuole il congiuntivo (francese «si j'avais» → se avessi; «au cas où» + condizionale);
// portoghese usa il futuro del congiuntivo («se você vier») dove l'italiano ha l'indicativo; ceco e polacco
// hanno «kdyby / gdyby» con il condizionale in tutte e due le parti e spesso non distinguono presente e
// passato; tedesco «wenn ich haben würde» e la frase senza «wenn» (hätte ich das gewusst); turco ha il
// suffisso «-sa / -se» alla fine del verbo; giapponese «〜たら» non distingue reale e irreale.

const i = (s) => `<span lang="it">${s}</span>`;
const b = (s) => `<strong lang="it">${s}</strong>`;
const en = (s) => `<em lang="en">${s}</em>`;

const IPO = 'grammatica/b2/periodo-ipotetico.html';

export const NOTES_PERIODO_IPOTETICO = {
  [IPO]: {
    after: 'tipi',
    it: {
      h2: "Il periodo ipotetico: il confronto con l'inglese",
      intro: `I tre tipi corrispondono ai tre ${en('conditionals')} inglesi. La differenza: dopo ${en('if')} l'inglese usa il passato (${en('if I had')}), l'italiano il ${b('congiuntivo')} (${b('se avessi')}).`,
      th: ['Inglese', 'Italiano'],
      rows: [
        ['If it rains, I’ll stay at home.', 'Se piove, resto a casa.'],
        ['If I had time, I would read more.', 'Se avessi tempo, leggerei di più.'],
        ['If I were you, I’d talk to her.', 'Se fossi in te, parlerei con lei.'],
        ['If I had known, I would have come.', 'Se l’avessi saputo, sarei venuto.'],
        ['If I had studied medicine, I would be a doctor now.', 'Se avessi studiato medicina, ora sarei medico.'],
      ],
      points: [
        `${en('If I had')} è ${b('se avessi')}, non ${i('se avevo')}: dopo ${i('se')} serve il congiuntivo.`,
        `${en('If I were you')} è ${b('se fossi in te')}.`,
        `${en('Would have')} diventa ${b('avrei')} o ${b('sarei')}, come al passato prossimo.`,
      ],
    },
    en: {
      h2: 'Italian if-clauses compared with English',
      intro: `Italian types match the English first, second and third conditionals. The difference: after “if” English uses a past tense (<em>if I had</em>), Italian uses the ${b('congiuntivo')} (${b('se avessi')}).`,
      th: ['English', 'Italian'],
      rows: [
        ['If it rains, I’ll stay at home.', 'Se piove, resto a casa.'],
        ['If I had time, I would read more.', 'Se avessi tempo, leggerei di più.'],
        ['If I were you, I’d talk to her.', 'Se fossi in te, parlerei con lei.'],
        ['If I had known, I would have come.', 'Se l’avessi saputo, sarei venuto.'],
        ['If I had studied medicine, I would be a doctor now.', 'Se avessi studiato medicina, ora sarei medico.'],
      ],
      points: [
        `“If I had” is ${b('se avessi')}, not ${i('se avevo')}: the past tense after “if” becomes the subjunctive.`,
        `“If I were you” is ${b('se fossi in te')}: Italian keeps the subjunctive alive where English keeps only “were”.`,
        `“Would have” becomes ${b('avrei')} or ${b('sarei')}, chosen as in the passato prossimo.`,
      ],
    },
    es: {
      h2: 'El periodo ipotetico comparado con el español',
      intro: `El sistema es casi igual al español: «si tuviera…, haría…» = ${b('se avessi…, farei…')}. Las diferencias están en los detalles: el futuro después de ${i('se')} y el auxiliar del pasado.`,
      th: ['Español', 'Italiano'],
      rows: [
        ['Si llueve, me quedo en casa.', 'Se piove, resto a casa.'],
        ['Si vienes a Roma, te llevaré al Coliseo.', 'Se vieni (verrai) a Roma, ti porterò al Colosseo.'],
        ['Si tuviera tiempo, leería más.', 'Se avessi tempo, leggerei di più.'],
        ['Si hubiera ido, me habría divertido.', 'Se fossi andato, mi sarei divertito.'],
        ['De haberlo sabido, habría venido.', 'Se l’avessi saputo, sarei venuto.'],
      ],
      points: [
        `«Si hubiera ido» es ${b('se fossi andato')}: con los verbos de movimiento el italiano usa ${i('essere')}.`,
        `El italiano admite el futuro después de ${i('se')}: ${b('se verrai, ti porterò')}. El español nunca.`,
        `«De haberlo sabido» no se traduce palabra por palabra: ${b('se l’avessi saputo')}.`,
      ],
    },
    pt: {
      h2: 'O periodo ipotetico comparado com o português',
      intro: `O sistema é muito parecido com o português: «se eu tivesse…, faria…» = ${b('se avessi…, farei…')}. A grande diferença é o futuro do subjuntivo, que o italiano não tem.`,
      th: ['Português', 'Italiano'],
      rows: [
        ['Se chover, fico em casa.', 'Se piove, resto a casa.'],
        ['Se você vier a Roma, te levo ao Coliseu.', 'Se vieni a Roma, ti porto al Colosseo.'],
        ['Se eu tivesse tempo, leria mais.', 'Se avessi tempo, leggerei di più.'],
        ['Se eu tivesse sabido, teria vindo.', 'Se l’avessi saputo, sarei venuto.'],
        ['Se eu tivesse estudado medicina, hoje seria médico.', 'Se avessi studiato medicina, oggi sarei medico.'],
      ],
      points: [
        `«Se chover», «se você vier»: o futuro do subjuntivo vira ${b('indicativo')} em italiano: ${b('se piove, se vieni')}.`,
        `«Se eu tivesse ido» é ${b('se fossi andato')}: com verbos de movimento o italiano usa ${i('essere')}.`,
        `Em italiano dá para usar o futuro depois de ${i('se')}: ${b('se verrai, ti porterò')}.`,
      ],
    },
    fr: {
      h2: 'Le periodo ipotetico comparé au français',
      intro: `Le français et l’italien partagent la règle « jamais de conditionnel après si ». Mais là où le français met l’<strong>imparfait</strong> et le <strong>plus-que-parfait de l’indicatif</strong>, l’italien met le ${b('congiuntivo')}.`,
      th: ['Français', 'Italien'],
      rows: [
        ['S’il pleut, je reste à la maison.', 'Se piove, resto a casa.'],
        ['Si j’avais le temps, je lirais plus.', 'Se avessi tempo, leggerei di più.'],
        ['Si j’étais toi, je lui parlerais.', 'Se fossi in te, le parlerei.'],
        ['Si j’avais su, je serais venu.', 'Se l’avessi saputo, sarei venuto.'],
        ['Au cas où il pleuvrait, on restera à l’intérieur.', 'Nel caso in cui piovesse, staremo dentro.'],
      ],
      points: [
        `« Si j’avais » = ${b('se avessi')}, jamais ${i('se avevo')} à l’écrit : c’est l’erreur typique des francophones.`,
        `« Si j’avais su » = ${b('se avessi saputo')} : congiuntivo trapassato, pas plus-que-parfait.`,
        `« Au cas où » + conditionnel devient ${b('nel caso in cui')} + congiuntivo : ${b('nel caso in cui piovesse')}.`,
      ],
    },
    cs: {
      h2: 'Periodo ipotetico ve srovnání s češtinou',
      intro: `Čeština má «jestli» pro skutečnost a «kdyby» pro představu, s podmiňovacím způsobem v obou částech. Italština dává kondicionál <strong>jen do důsledku</strong> a po ${i('se')} dává konjunktiv.`,
      th: ['Čeština', 'Italština'],
      rows: [
        ['Jestli bude pršet, zůstanu doma.', 'Se piove, resto a casa.'],
        ['Kdybych měl čas, četl bych víc.', 'Se avessi tempo, leggerei di più.'],
        ['Být tebou, promluvil bych s ní.', 'Se fossi in te, parlerei con lei.'],
        ['Kdybych to (býval) věděl, byl bych přišel.', 'Se l’avessi saputo, sarei venuto.'],
        ['Kdybych studoval medicínu, teď bych byl lékař.', 'Se avessi studiato medicina, ora sarei medico.'],
      ],
      points: [
        `«Kdybych měl» je ${b('se avessi')}, nikdy ${i('se avrei')}: kondicionál po ${i('se')} nestojí.`,
        `«Kdybych to věděl» o minulosti je ${b('se l’avessi saputo')}: italština minulost vždy označí.`,
        `«Jestli bude pršet» může být ${b('se piove')} i ${b('se pioverà')}.`,
      ],
    },
    pl: {
      h2: 'Periodo ipotetico w porównaniu z polskim',
      intro: `Polski ma «jeśli» dla rzeczywistości i «gdyby» dla wyobrażenia, z trybem przypuszczającym w obu częściach. Włoski daje tryb warunkowy <strong>tylko do skutku</strong>, a po ${i('se')} stawia congiuntivo.`,
      th: ['Polski', 'Włoski'],
      rows: [
        ['Jeśli będzie padać, zostanę w domu.', 'Se piove, resto a casa.'],
        ['Gdybym miał czas, czytałbym więcej.', 'Se avessi tempo, leggerei di più.'],
        ['Na twoim miejscu porozmawiałbym z nią.', 'Se fossi in te, parlerei con lei.'],
        ['Gdybym wiedział, przyszedłbym.', 'Se l’avessi saputo, sarei venuto.'],
        ['Gdybym studiował medycynę, teraz byłbym lekarzem.', 'Se avessi studiato medicina, ora sarei medico.'],
      ],
      points: [
        `«Gdybym miał» to ${b('se avessi')}, nigdy ${i('se avrei')}: po ${i('se')} nie ma trybu warunkowego.`,
        `«Gdybym wiedział» o przeszłości to ${b('se l’avessi saputo')}: włoski zawsze zaznacza przeszłość.`,
        `«Jeśli będzie padać» to ${b('se piove')} albo ${b('se pioverà')}.`,
      ],
    },
    tr: {
      h2: 'Periodo ipotetico ile Türkçe karşılaştırması',
      intro: `Türkçede koşul fiilin sonundaki bir ektir (-sa/-se, -saydı); İtalyancada cümlenin başında ${b('se')} vardır ve fiilin zamanı değişir. İki dilde de iki kısmın sırası değişebilir.`,
      th: ['Türkçe', 'İtalyanca'],
      rows: [
        ['Yağmur yağarsa evde kalırım.', 'Se piove, resto a casa.'],
        ['Vaktim olsa daha çok okurdum.', 'Se avessi tempo, leggerei di più.'],
        ['Senin yerinde olsam onunla konuşurdum.', 'Se fossi in te, parlerei con lei.'],
        ['Bilseydim gelirdim.', 'Se l’avessi saputo, sarei venuto.'],
        ['Tıp okusaydım, şimdi doktor olurdum.', 'Se avessi studiato medicina, ora sarei medico.'],
      ],
      points: [
        `«-sa/-se» (olsa) → ${b('se avessi, se fossi')}; «-ırdı» (okurdum) → ${b('leggerei')}.`,
        `«-saydı» (bilseydim) → ${b('se avessi saputo')}; «-ırdı» (gelirdim) burada ${b('sarei venuto')} olur.`,
        `Türkçedeki «-ırdı» iki anlama gelir; İtalyancada ${b('leggerei')} (şimdi) ile ${b('avrei letto')} (geçmiş) ayrıdır.`,
      ],
    },
    de: {
      h2: 'Der periodo ipotetico im Vergleich mit dem Deutschen',
      intro: `Das Deutsche hat Konjunktiv II in beiden Teilen (wenn ich hätte, würde ich); das Italienische verteilt die Rollen: ${b('congiuntivo')} nach ${i('se')}, ${b('condizionale')} in der Folge.`,
      th: ['Deutsch', 'Italienisch'],
      rows: [
        ['Wenn es regnet, bleibe ich zu Hause.', 'Se piove, resto a casa.'],
        ['Wenn ich Zeit hätte, würde ich mehr lesen.', 'Se avessi tempo, leggerei di più.'],
        ['An deiner Stelle würde ich mit ihr reden.', 'Se fossi in te, parlerei con lei.'],
        ['Hätte ich das gewusst, wäre ich gekommen.', 'Se l’avessi saputo, sarei venuto.'],
        ['Hätte ich Medizin studiert, wäre ich jetzt Arzt.', 'Se avessi studiato medicina, ora sarei medico.'],
      ],
      points: [
        `«Wenn ich haben würde» gibt es im Italienischen nicht: nach ${i('se')} nie ${i('avrei')}, sondern ${b('avessi')}.`,
        `«Hätte ich das gewusst» ohne «wenn»: im gesprochenen Italienisch geht ${b('avessi saputo, sarei venuto')} auch ohne ${i('se')}.`,
        `«Wäre ich gegangen» = ${b('fossi andato')}: die Hilfsverben stimmen oft mit dem Deutschen überein.`,
      ],
    },
    ja: {
      h2: '日本語とくらべた periodo ipotetico',
      intro: `日本語の「〜たら」「〜ば」は、現実の仮定にも想像にも使えます。イタリア語では、現実なら${b('直説法')}、想像なら${b('接続法')}と、必ず選ばなければなりません。`,
      th: ['日本語', 'イタリア語'],
      rows: [
        ['雨が降ったら、家にいます。', 'Se piove, resto a casa.'],
        ['時間があったら、もっと読むのに。', 'Se avessi tempo, leggerei di più.'],
        ['私があなたなら、彼女と話します。', 'Se fossi in te, parlerei con lei.'],
        ['知っていたら、来たのに。', 'Se l’avessi saputo, sarei venuto.'],
        ['医学を勉強していたら、今ごろ医者だったのに。', 'Se avessi studiato medicina, ora sarei medico.'],
      ],
      points: [
        `「時間があったら」は、本当にありそうなら ${b('se ho tempo')}、想像なら ${b('se avessi tempo')} です。`,
        `「〜のに」の後悔は、イタリア語では${b('条件法')}で表します：${b('sarei venuto')}。`,
        `${i('se')} は文の最初に来ますが、帰結を先に言うこともできます：${b('Ti avrei aiutato, se me l’avessi chiesto.')}`,
      ],
    },
  },
};

export const ERRORS_PERIODO_IPOTETICO = {
  [IPO]: {
    it: [
      ['Se avevo tempo, leggerei.', 'Se avessi tempo, leggerei.', `${en('If I had time')}: dopo ${i('se')} il congiuntivo, ${b('avessi')}.`],
      ['Se sarei in te, parlerei con lei.', 'Se fossi in te, parlerei con lei.', `${en('If I were you')}: ${b('se fossi in te')}.`],
    ],
    en: [
      ['Se avevo tempo, leggerei.', 'Se avessi tempo, leggerei.', `“If I had time”: after ${i('se')} use the subjunctive, ${b('avessi')}.`],
      ['Se sarei in te, parlerei con lei.', 'Se fossi in te, parlerei con lei.', `“If I were you”: ${b('se fossi in te')}.`],
      ['Se avrei saputo, sarei venuto.', 'Se avessi saputo, sarei venuto.', `“If I had known”, never “if I would have known”: ${b('se avessi saputo')}.`],
    ],
    es: [
      ['Se avrei tempo, leggerei.', 'Se avessi tempo, leggerei.', `Como «si tendría»: después de ${i('se')}, ${b('avessi')}.`],
      ['Se avessi andato, mi sarei divertito.', 'Se fossi andato, mi sarei divertito.', `«Si hubiera ido»: ${i('andare')} lleva ${b('essere')}.`],
    ],
    pt: [
      ['Se pioverà domani, resto a casa.', 'Se domani piove, resto a casa.', `«Se chover»: futuro do subjuntivo → presente, ou futuro nas duas partes.`],
      ['Se avessi andato, mi sarei divertito.', 'Se fossi andato, mi sarei divertito.', `«Se eu tivesse ido»: ${i('andare')} usa ${b('essere')}.`],
    ],
    fr: [
      ['Se avevo tempo, leggerei.', 'Se avessi tempo, leggerei.', `« Si j’avais » : congiuntivo imperfetto, ${b('avessi')}.`],
      ['Se avevo saputo, sarei venuto.', 'Se avessi saputo, sarei venuto.', `« Si j’avais su » : congiuntivo trapassato, ${b('avessi saputo')}.`],
      ['Nel caso in cui pioverebbe, restiamo dentro.', 'Nel caso in cui piovesse, restiamo dentro.', `« Au cas où il pleuvrait » : ${b('nel caso in cui piovesse')}.`],
    ],
    cs: [
      ['Se avrei tempo, leggerei.', 'Se avessi tempo, leggerei.', `«Kdybych měl»: po ${i('se')} konjunktiv, ${b('avessi')}.`],
      ['Ieri, se lo sapessi, verrei.', 'Ieri, se l’avessi saputo, sarei venuto.', `Minulost: ${b('se l’avessi saputo, sarei venuto')}.`],
    ],
    pl: [
      ['Se avrei tempo, leggerei.', 'Se avessi tempo, leggerei.', `«Gdybym miał»: po ${i('se')} congiuntivo, ${b('avessi')}.`],
      ['Ieri, se lo sapessi, verrei.', 'Ieri, se l’avessi saputo, sarei venuto.', `Przeszłość: ${b('se l’avessi saputo, sarei venuto')}.`],
    ],
    tr: [
      ['Se avrei tempo, leggerei.', 'Se avessi tempo, leggerei.', `«Vaktim olsa»: ${i('se')}’den sonra congiuntivo, ${b('avessi')}.`],
      ['Se lo sapessi, sarei venuto ieri.', 'Se l’avessi saputo, sarei venuto ieri.', `«Bilseydim»: ${b('se l’avessi saputo')}.`],
    ],
    de: [
      ['Se avrei tempo, leggerei.', 'Se avessi tempo, leggerei.', `«Wenn ich Zeit haben würde»: nach ${i('se')} nur ${b('avessi')}.`],
      ['Quando avessi tempo, leggerei.', 'Se avessi tempo, leggerei.', `«Wenn» als Bedingung ist ${b('se')}; ${i('quando')} heißt nur «wann, sobald».`],
    ],
    ja: [
      ['Se ho tempo, leggerei.', 'Se avessi tempo, leggerei.', `想像なら、${i('se')} のあとも接続法：${b('se avessi tempo')}。`],
      ['Se l’avessi saputo, verrei.', 'Se l’avessi saputo, sarei venuto.', `「来たのに」は過去：${b('sarei venuto')}。`],
    ],
  },
};

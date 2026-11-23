// Errori tipici della lezione «Il condizionale presente» (B1), rifatta il 2026-11-23, per chi parla ogni lingua.
// Stesso formato di errori-lingua.mjs, che li aggiunge a ERRORS (sostituiscono i tre errori di agosto);
// li inserisce scripts/add-language-notes.mjs. Il confronto con la lingua resta quello di confronti-lingua.mjs.
//
// Le trappole per lingua: inglese «would» per le abitudini passate e «if I would»; spagnolo e portoghese la
// desinenza -ía / -ia e la a di -are; francese l'imperfetto dopo «si» e le desinenze -ais / -ait; ceco e polacco
// il condizionale dopo «kdyby / gdyby» e «powinieneś» reso con devi; tedesco «würde» tradotto e «möchte» reso con
// voglio; turco «-meli» reso con devi; giapponese il soggetto e la doppia m. Per tutti: andremo / andremmo,
// anderei, mi piacerebbe due…

const i = (s) => `<span lang="it">${s}</span>`;
const b = (s) => `<strong lang="it">${s}</strong>`;

const CP = 'grammatica/b1/condizionale-presente.html';

export const ERRORS_CONDIZIONALE_PRESENTE = {
  [CP]: {
    it: [
      ['Se avrei tempo, viaggerei.', 'Se avessi tempo, viaggerei.', `<em lang="en">If I had</em>: dopo ${i('se')} ci vuole il <strong>congiuntivo</strong>, mai il condizionale.`],
      ['Da bambino andrei al mare ogni estate.', 'Da bambino andavo al mare ogni estate.', `<em lang="en">We would go</em> per un’abitudine del passato è ${b('imperfetto')}, non condizionale.`],
      ['Noi andremo volentieri, ma piove.', 'Noi andremmo volentieri, ma piove.', `<em lang="en">We would go</em>: condizionale con ${b('due m')}; ${i('andremo')} è <em lang="en">we will go</em>.`],
      ['Io anderei in treno.', 'Io andrei in treno.', `${i('Andare')} ha la base del futuro ${b('andr-')}: ${i('andrei')}.`],
      ['Voglio un caffè, per favore.', 'Vorrei un caffè, per favore.', `<em lang="en">I want</em> suona brusco: al bar si dice ${b('vorrei')}, come <em lang="en">I’d like</em>.`],
    ],
    en: [
      ['Se avrei tempo, viaggerei.', 'Se avessi tempo, viaggerei.', `<em>If I had</em>: after ${i('se')} you need the <strong>subjunctive</strong>, never the conditional.`],
      ['Da bambino andrei al mare ogni estate.', 'Da bambino andavo al mare ogni estate.', `<em>We would go</em> for a past habit is the ${b('imperfetto')}, not the conditional.`],
      ['Noi andremo volentieri, ma piove.', 'Noi andremmo volentieri, ma piove.', `<em>We would go</em>: conditional with ${b('double m')}; ${i('andremo')} means <em>we will go</em>.`],
      ['Io anderei in treno.', 'Io andrei in treno.', `${i('Andare')} uses the future stem ${b('andr-')}: ${i('andrei')}.`],
      ['Voglio un caffè, per favore.', 'Vorrei un caffè, per favore.', `<em>I want</em> sounds blunt: at the bar say ${b('vorrei')}, <em>I’d like</em>.`],
    ],
    es: [
      ['Io parleria con lui.', 'Io parlerei con lui.', `<em>Hablaría</em>: la terminación <em>-ía</em> no existe; con ${i('io')} es ${b('-ei')}.`],
      ['Io parlarei con lui.', 'Io parlerei con lui.', `Como en el futuro, la ${i('a')} de ${i('-are')} se vuelve ${b('e')}.`],
      ['Mi piaceria viaggiare.', 'Mi piacerebbe viaggiare.', `<em>Me gustaría</em> → ${b('piacerebbe')}.`],
      ['Noi andremo volentieri, ma piove.', 'Noi andremmo volentieri, ma piove.', `<em>Iríamos</em>: condicional con ${b('dos m')}; ${i('andremo')} es <em>iremos</em>.`],
      ['Mi piacerebbe due giorni di vacanza.', 'Mi piacerebbero due giorni di vacanza.', `Como <em>me gustarían dos días</em>: plural ${b('piacerebbero')}.`],
    ],
    pt: [
      ['Io parleria con lui.', 'Io parlerei con lui.', `<em>Falaria</em>: a terminação <em>-ia</em> não existe; com ${i('io')} é ${b('-ei')}.`],
      ['Io parlarei con lui.', 'Io parlerei con lui.', `Como no futuro, a ${i('a')} de ${i('-are')} vira ${b('e')}.`],
      ['Mi piaceria viaggiare.', 'Mi piacerebbe viaggiare.', `<em>Eu gostaria</em> → ${b('mi piacerebbe')}.`],
      ['Noi andremo volentieri, ma piove.', 'Noi andremmo volentieri, ma piove.', `<em>Iríamos</em>: condicional com ${b('dois m')}; ${i('andremo')} é <em>iremos</em>.`],
      ['Se avrei tempo, viaggerei.', 'Se avessi tempo, viaggerei.', `<em>Se eu tivesse</em>: depois de ${i('se')} vem o ${b('congiuntivo imperfetto')}.`],
    ],
    fr: [
      ['Se avevo tempo, viaggerei.', 'Se avessi tempo, viaggerei.', `<em>Si j’avais</em> : après ${i('se')}, ${b('congiuntivo imperfetto')}, pas imparfait.`],
      ['Loro parlerebbono.', 'Loro parlerebbero.', `<em>Ils parleraient</em> → terminaison ${b('-ebbero')}.`],
      ['Io parlerebbe con lui.', 'Io parlerei con lui.', `<em>Je parlerais</em> → avec ${i('io')}, terminaison ${b('-ei')} ; ${i('parlerebbe')} = <em>il parlerait</em>.`],
      ['Noi andremo volentieri, ma piove.', 'Noi andremmo volentieri, ma piove.', `<em>Nous irions</em> : conditionnel avec ${b('deux m')} ; ${i('andremo')} = <em>nous irons</em>.`],
      ['Potreste aiutarmi, signora?', 'Potrebbe aiutarmi, signora?', `Pour vouvoyer une personne : ${b('Lei')}, troisième personne, pas ${i('voi')}.`],
    ],
    cs: [
      ['Se avrei tempo, viaggerei.', 'Se avessi tempo, viaggerei.', `<em>Kdybych měl</em> → po ${i('se')} ${b('congiuntivo')}, ne kondicionál.`],
      ['Io vorrebbe un caffè.', 'Io vorrei un caffè.', `<em>Chtěl bych</em> → s ${i('io')} koncovka ${b('-ei')}.`],
      ['Noi andremo volentieri, ma piove.', 'Noi andremmo volentieri, ma piove.', `<em>Šli bychom</em>: kondicionál se ${b('dvěma m')}; ${i('andremo')} = <em>půjdeme</em>.`],
      ['Io anderei in treno.', 'Io andrei in treno.', `${i('Andare')} má kmen budoucího času ${b('andr-')}: ${i('andrei')}.`],
      ['Potreste aiutarmi, signora?', 'Potrebbe aiutarmi, signora?', `Vykání: ${b('Lei')} a třetí osoba jednotného čísla, ne ${i('voi')} jako česky.`],
    ],
    pl: [
      ['Se avrei tempo, viaggerei.', 'Se avessi tempo, viaggerei.', `<em>Gdybym miał</em> → po ${i('se')} ${b('congiuntivo')}, nie tryb przypuszczający.`],
      ['Io vorrebbe un caffè.', 'Io vorrei un caffè.', `<em>Chciałbym</em> → z ${i('io')} końcówka ${b('-ei')}.`],
      ['Noi andremo volentieri, ma piove.', 'Noi andremmo volentieri, ma piove.', `<em>Poszlibyśmy</em>: tryb przypuszczający z ${b('dwoma m')}; ${i('andremo')} = <em>pójdziemy</em>.`],
      ['Devi dormire di più, sei stanco.', 'Dovresti dormire di più, sei stanco.', `<em>Powinieneś</em> to rada: ${b('dovresti')}; ${i('devi')} brzmi jak <em>musisz</em>.`],
      ['Io anderei in treno.', 'Io andrei in treno.', `${i('Andare')} ma temat czasu przyszłego ${b('andr-')}: ${i('andrei')}.`],
    ],
    tr: [
      ['Se avrei tempo, viaggerei.', 'Se avessi tempo, viaggerei.', `<em>Vaktim olsa</em> → ${i('se')} + ${b('congiuntivo')}; şart kipi sadece <em>-erdi</em> kısmında.`],
      ['Io vorrebbe un caffè.', 'Io vorrei un caffè.', `${i('io')} için ek ${b('-ei')}; ${i('vorrebbe')} = <em>o isterdi</em>.`],
      ['Noi andremo volentieri, ma piove.', 'Noi andremmo volentieri, ma piove.', `<em>Giderdik</em>: ${b('iki m')} ile şart kipi; ${i('andremo')} = <em>gideceğiz</em>.`],
      ['Devi dormire di più, sei stanco.', 'Dovresti dormire di più, sei stanco.', `Tavsiye olan <em>-malısın</em> → ${b('dovresti')}; ${i('devi')} zorunluluk gibi duyulur.`],
      ['Io anderei in treno.', 'Io andrei in treno.', `${i('Andare')} gelecek zaman gövdesini kullanır: ${b('andr-')}, ${i('andrei')}.`],
    ],
    de: [
      ['Se avrei tempo, viaggerei.', 'Se avessi tempo, viaggerei.', `<em>Wenn ich hätte</em> → ${i('se avessi')} (congiuntivo), nicht „wenn ich haben würde“.`],
      ['Io vorrebbe un caffè.', 'Io vorrei un caffè.', `<em>Ich möchte</em> → mit ${i('io')} die Endung ${b('-ei')}.`],
      ['Noi andremo volentieri, ma piove.', 'Noi andremmo volentieri, ma piove.', `<em>Wir würden gehen</em>: Konditional mit ${b('doppeltem m')}; ${i('andremo')} = <em>wir werden gehen</em>.`],
      ['Voglio un caffè, per favore.', 'Vorrei un caffè, per favore.', `<em>Ich möchte</em> ist ${b('vorrei')}; ${i('voglio')} = <em>ich will</em>, klingt schroff.`],
      ['Potreste aiutarmi, signora?', 'Potrebbe aiutarmi, signora?', `Die Höflichkeitsform ist ${b('Lei')} mit der 3. Person Singular, nicht ${i('voi')}.`],
    ],
    ja: [
      ['Se avrei tempo, viaggerei.', 'Se avessi tempo, viaggerei.', `「時間があったら」：${i('se')} のあとは ${b('congiuntivo')}、条件法ではありません。`],
      ['Io vorrebbe un caffè.', 'Io vorrei un caffè.', `${i('io')} の語尾は ${b('-ei')}。${i('vorrebbe')} は「彼・彼女」の形です。`],
      ['Noi andremo volentieri, ma piove.', 'Noi andremmo volentieri, ma piove.', `「行くのになあ」は ${b('m が2つ')}の条件法。${i('andremo')} は「行くだろう」（未来形）。`],
      ['Voglio un caffè, per favore.', 'Vorrei un caffè, per favore.', `${i('voglio')} は「ほしい」で直接的すぎます。注文は ${b('vorrei')}。`],
      ['Io anderei in treno.', 'Io andrei in treno.', `${i('andare')} は未来形と同じ語幹 ${b('andr-')}：${i('andrei')}。`],
    ],
  },
};

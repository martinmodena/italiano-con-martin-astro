// Errori tipici della lezione «Il futuro semplice» (A2), rifatta il 2026-11-24, per chi parla ogni lingua: cinque per
// lingua al posto dei tre di ottobre. Stesso formato di errori-lingua.mjs, che li aggiunge a ERRORS; li inserisce
// scripts/add-language-notes.mjs. Il confronto con la lingua resta quello di confronti-lingua.mjs (dopo #usi).
//
// Le trappole per lingua: inglese «going to», «will», il presente dopo «when»; spagnolo e portoghese «voy a / vou»,
// il congiuntivo dopo «cuando / quando» («cuando llegue», «quando eu chegar»); francese il futur proche; tedesco
// «werden» e il presente dopo «wenn»; ceco e polacco «budu / będę» + infinito; turco l'ordine e «-ecek»; giapponese
// nessun futuro, il presente per tutto.

const i = (s) => `<span lang="it">${s}</span>`;
const b = (s) => `<strong lang="it">${s}</strong>`;

const FU = 'grammatica/a2/futuro-semplice.html';

export const ERRORS_FUTURO = {
  [FU]: {
    it: [
      ['Va a piovere.', 'Pioverà.', `<em lang="en">It's going to rain</em>: ${i('andare a')} indica un movimento, non il futuro.`],
      ['Io parlarò.', 'Io parlerò.', `Nei verbi in ${i('-are')} la ${i('a')} diventa ${b('e')}.`],
      ['Domani cercerò le chiavi.', 'Domani cercherò le chiavi.', `Con ${i('-care')} serve la ${b('h')}: ${b('cercherò')}.`],
      ['Io andarò.', 'Io andrò.', `Alcuni futuri perdono una vocale: ${b('andrò')}, ${i('potrò, avrò')}.`],
      ['Domani verò alla festa.', 'Domani verrò alla festa.', `${i('Venire')} ha la doppia r: ${b('verrò')}.`],
    ],
    en: [
      ['Va a piovere.', 'Pioverà.', `<em>It’s going to rain</em>: ${i('andare a')} is about movement, not the future.`],
      ['Io parlarò.', 'Io parlerò.', `In ${i('-are')} verbs the ${i('a')} becomes ${b('e')}.`],
      ['Domani cercerò le chiavi.', 'Domani cercherò le chiavi.', `With ${i('-care')} you need an ${b('h')}: ${b('cercherò')}.`],
      ['Io andarò.', 'Io andrò.', `Some futures drop a vowel: ${b('andrò')}, ${i('potrò, avrò')}.`],
      ['Domani verò alla festa.', 'Domani verrò alla festa.', `${i('Venire')} has a double r: ${b('verrò')}.`],
    ],
    es: [
      ['Domani vado a studiare.', 'Domani studierò.', `«Voy a estudiar» → ${b('studierò')} o ${i('studio')}: ${i('vado a')} es un movimiento.`],
      ['Quando arrivi, mi chiamerai.', 'Quando arriverai, mi chiamerai.', `«Cuando llegues» (subjuntivo) → ${b('arriverai')}, futuro.`],
      ['Io parlarò.', 'Io parlerò.', `«Hablaré», pero en italiano la ${i('a')} de ${i('-are')} se vuelve ${b('e')}.`],
      ['Io anderò.', 'Io andrò.', `${i('Andare')} pierde la vocal: ${b('andrò')}.`],
      ['Domani verò alla festa.', 'Domani verrò alla festa.', `«Vendré» → ${b('verrò')}, con doble r.`],
    ],
    pt: [
      ['Domani vado a studiare.', 'Domani studierò.', `«Vou estudar» → ${b('studierò')} ou ${i('studio')}: ${i('vado a')} é um movimento.`],
      ['Quando arrivi, mi chiamerai.', 'Quando arriverai, mi chiamerai.', `«Quando você chegar» (subjuntivo) → ${b('arriverai')}, futuro.`],
      ['Io parlarò.', 'Io parlerò.', `«Falarei», mas em italiano a ${i('a')} de ${i('-are')} vira ${b('e')}.`],
      ['Io anderò.', 'Io andrò.', `${i('Andare')} perde a vogal: ${b('andrò')}.`],
      ['Domani verò alla festa.', 'Domani verrò alla festa.', `«Virei» → ${b('verrò')}, com r dobrado.`],
    ],
    fr: [
      ['Vado a partire domani.', 'Parto domani.', `« Je vais partir » : le futur proche ne se dit pas avec ${i('andare')}, ${b('parto')} ou ${i('partirò')}.`],
      ['Io parlarò.', 'Io parlerò.', `Comme « je parlerai » : le ${i('a')} de ${i('-are')} devient ${b('e')}.`],
      ['Io irò.', 'Io andrò.', `« J’irai » → ${b('andrò')}, du verbe ${i('andare')}.`],
      ['Domani verò alla festa.', 'Domani verrò alla festa.', `« Je viendrai » → ${b('verrò')}, avec deux r.`],
      ['Domani cercerò le chiavi.', 'Domani cercherò le chiavi.', `Pour garder le son dur : ${b('cercherò')}, avec h.`],
    ],
    cs: [
      ['Domani sarò parlare con lui.', 'Domani parlerò con lui.', `«Budu mluvit» → ${b('parlerò')}: žádné pomocné sloveso.`],
      ['Io parlarò.', 'Io parlerò.', `U sloves na ${i('-are')} se ${i('a')} mění na ${b('e')}.`],
      ['Noi andremmo al mare domani.', 'Noi andremo al mare domani.', `«Pojedeme» → ${b('andremo')}, jedno m; ${i('andremmo')} je kondicionál.`],
      ['Io andarò.', 'Io andrò.', `${i('Andare')} ztrácí samohlásku: ${b('andrò')}.`],
      ['Domani verò alla festa.', 'Domani verrò alla festa.', `${i('Venire')} má dvojité r: ${b('verrò')}.`],
    ],
    pl: [
      ['Domani sarò parlare con lui.', 'Domani parlerò con lui.', `«Będę mówić» → ${b('parlerò')}: bez czasownika posiłkowego.`],
      ['Io parlarò.', 'Io parlerò.', `W czasownikach na ${i('-are')} ${i('a')} zmienia się w ${b('e')}.`],
      ['Noi andremmo al mare domani.', 'Noi andremo al mare domani.', `«Pojedziemy» → ${b('andremo')}, jedno m; ${i('andremmo')} to tryb przypuszczający.`],
      ['Io andarò.', 'Io andrò.', `${i('Andare')} traci samogłoskę: ${b('andrò')}.`],
      ['Domani verò alla festa.', 'Domani verrò alla festa.', `${i('Venire')} ma podwójne r: ${b('verrò')}.`],
    ],
    tr: [
      ['Io parlarò.', 'Io parlerò.', `${i('-are')} fiillerinde ${i('a')}, ${b('e')} olur.`],
      ['Domani cercerò le chiavi.', 'Domani cercherò le chiavi.', `${i('-care')} fiillerinde ${b('h')} eklenir: ${b('cercherò')}.`],
      ['Noi andremmo al mare domani.', 'Noi andremo al mare domani.', `«Gideceğiz» → ${b('andremo')}, tek m; ${i('andremmo')} şart kipidir.`],
      ['Io andarò.', 'Io andrò.', `${i('Andare')} bir ünlüyü kaybeder: ${b('andrò')}.`],
      ['Domani verò alla festa.', 'Domani verrò alla festa.', `${i('Venire')} çift r ile: ${b('verrò')}.`],
    ],
    de: [
      ['Domani sarò parlare con lui.', 'Domani parlerò con lui.', `«Ich werde mit ihm sprechen» → ${b('parlerò')}: kein Hilfsverb.`],
      ['Noi andremmo al mare domani.', 'Noi andremo al mare domani.', `«Wir werden fahren» → ${b('andremo')}, ein m; ${i('andremmo')} ist «wir würden».`],
      ['Io parlarò.', 'Io parlerò.', `Bei Verben auf ${i('-are')} wird ${i('a')} zu ${b('e')}.`],
      ['Io andarò.', 'Io andrò.', `${i('Andare')} verliert einen Vokal: ${b('andrò')}.`],
      ['Domani verò alla festa.', 'Domani verrò alla festa.', `${i('Venire')} mit Doppel-r: ${b('verrò')}.`],
    ],
    ja: [
      ['Io parlarò.', 'Io parlerò.', `${i('-are')} 動詞では ${i('a')} が ${b('e')} に変わります。`],
      ['Noi andremmo al mare domani.', 'Noi andremo al mare domani.', `「行きます」→ ${b('andremo')}（m は一つ）。${i('andremmo')} は条件法です。`],
      ['Comincierò domani.', 'Comincerò domani.', `${i('-ciare')} 動詞では ${i('i')} がなくなります：${b('comincerò')}。`],
      ['Io andarò.', 'Io andrò.', `${i('Andare')} は母音が落ちます：${b('andrò')}。`],
      ['Domani verò alla festa.', 'Domani verrò alla festa.', `${i('Venire')} は r が二つ：${b('verrò')}。`],
    ],
  },
};

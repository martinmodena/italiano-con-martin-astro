// Errori tipici della lezione «Il presente dei verbi irregolari» (A1), rifatta il 2026-11-23, per chi parla ogni
// lingua: cinque per lingua al posto dei tre di ottobre. Stesso formato di errori-lingua.mjs, che li aggiunge a
// ERRORS; li inserisce scripts/add-language-notes.mjs. Il confronto con la lingua resta quello di confronti-lingua.mjs.
//
// Le trappole per lingua: inglese «can» (so / posso) e «know» (so / conosco), «I'm fine» con essere; spagnolo
// «salir» / salire, «estar en Roma», «conozco a Anna»; portoghese «eu sei» / sei, «saio»; francese «je vais
// bien», «je sors»; ceco e polacco andare per «jet / jechać», «mám se dobře»; tedesco «können» e «kennen»;
// turco «bilmek» per sapere e conoscere; giapponese «行く» per venire verso chi ascolta.

const i = (s) => `<span lang="it">${s}</span>`;
const b = (s) => `<strong lang="it">${s}</strong>`;

const PI = 'grammatica/a1/presente-verbi-irregolari.html';

export const ERRORS_PRESENTE_IRREGOLARE = {
  [PI]: {
    it: [
      ['Posso nuotare.', 'So nuotare.', `<em lang="en">I can swim</em> (capacità imparata) → ${b('sapere')}.`],
      ['Conosco che è qui.', 'So che è qui.', `<em lang="en">I know that…</em> → ${b('sapere')}; ${i('conoscere')} per persone e luoghi.`],
      ['Sono bene, grazie.', 'Sto bene, grazie.', `<em lang="en">I’m fine</em> → ${b('stare')}, non ${i('essere')}.`],
      ['Io ando.', 'Io vado.', `${i('Andare')} è irregolare: ${b('vado, vai, va, vanno')}.`],
      ['Loro venono.', 'Loro vengono.', `Con ${i('loro')} torna la ${b('g')} di ${i('vengo')}.`],
    ],
    en: [
      ['Posso nuotare.', 'So nuotare.', `<em>I can swim</em> (a learned skill) → ${b('sapere')}.`],
      ['Conosco che è qui.', 'So che è qui.', `<em>I know that…</em> → ${b('sapere')}; ${i('conoscere')} is for people and places.`],
      ['Sono bene, grazie.', 'Sto bene, grazie.', `<em>I’m fine</em> → ${b('stare')}, not ${i('essere')}.`],
      ['Io ando.', 'Io vado.', `${i('Andare')} is irregular: ${b('vado, vai, va, vanno')}.`],
      ['Loro venono.', 'Loro vengono.', `With ${i('loro')} the ${b('g')} of ${i('vengo')} comes back.`],
    ],
    es: [
      ['Salgo stasera.', 'Esco stasera.', `<em>Salir</em> → ${b('uscire')}; ${i('salgo')} significa «subo».`],
      ['Io ando.', 'Io vado.', `<em>Voy</em> → ${b('vado')}; ${i('andare')} no se conjuga como <em>andar</em>.`],
      ['Loro venono.', 'Loro vengono.', `<em>Vienen</em> → ${b('vengono')}, con la ${i('g')} de ${i('vengo')}.`],
      ['Sta a Roma.', 'È a Roma.', `<em>Está en Roma</em> (lugar) → ${b('è')}; ${i('stare')} es sobre todo para la salud.`],
      ['Conosco a Anna.', 'Conosco Anna.', `<em>Conozco a Anna</em>: en italiano sin ${b('a')}.`],
    ],
    pt: [
      ['Io sei nuotare.', 'Io so nuotare.', `<em>Eu sei</em> → ${b('io so')}; ${i('sei')} é «você é».`],
      ['Io saio stasera.', 'Io esco stasera.', `<em>Saio</em> → ${b('esco')}, de ${i('uscire')}.`],
      ['Loro venono.', 'Loro vengono.', `<em>Eles vêm</em> → ${b('vengono')}.`],
      ['Sono bene, grazie.', 'Sto bene, grazie.', `<em>Estou bem</em> → ${b('sto bene')}, com ${i('stare')}.`],
      ['Lui da un libro.', 'Lui dà un libro.', `<em>Ele dá</em> → ${b('dà')}, com acento.`],
    ],
    fr: [
      ['Vado bene.', 'Sto bene.', `<em>Je vais bien</em> → ${b('sto bene')}.`],
      ['Sorto stasera.', 'Esco stasera.', `<em>Je sors</em> → ${b('esco')}, du verbe ${i('uscire')}.`],
      ['Loro vano.', 'Loro vanno.', `<em>Ils vont</em> → ${b('vanno')}, avec deux n.`],
      ['Prendo colazione.', 'Faccio colazione.', `<em>Prendre le petit-déjeuner</em> → ${b('fare colazione')}.`],
      ['Lui da un libro.', 'Lui dà un libro.', `<em>Il donne</em> → ${b('dà')}, avec l’accent.`],
    ],
    cs: [
      ['Io ando.', 'Io vado.', `${i('Andare')} je nepravidelné: ${b('vado, vai, va, vanno')}.`],
      ['Loro venono.', 'Loro vengono.', `${i('Venire')}: ${b('vengo, vieni, viene, vengono')}.`],
      ['Lui fà.', 'Lui fa.', `${b('Fa')} se píše bez přízvuku; přízvuk má jen ${i('dà')}.`],
      ['Ho bene.', 'Sto bene.', `<em>Mám se dobře</em> → ${b('sto bene')}, se ${i('stare')}.`],
      ['Posso nuotare.', 'So nuotare.', `<em>Umím plavat</em> → ${b('sapere')}.`],
    ],
    pl: [
      ['Io ando.', 'Io vado.', `${i('Andare')} jest nieregularne: ${b('vado, vai, va, vanno')}.`],
      ['Loro venono.', 'Loro vengono.', `${i('Venire')}: ${b('vengo, vieni, viene, vengono')}.`],
      ['Lui fà.', 'Lui fa.', `${b('Fa')} piszemy bez akcentu; akcent ma tylko ${i('dà')}.`],
      ['Ho bene.', 'Sto bene.', `<em>Mam się dobrze</em> → ${b('sto bene')}, ze ${i('stare')}.`],
      ['Posso nuotare.', 'So nuotare.', `<em>Umiem pływać</em> → ${b('sapere')}.`],
    ],
    tr: [
      ['Posso nuotare.', 'So nuotare.', `<em>Yüzme biliyorum</em> (beceri) → ${b('sapere')}.`],
      ['So Anna.', 'Conosco Anna.', `<em>Anna’yı tanıyorum</em>: kişiler için ${b('conoscere')}.`],
      ['Io ando.', 'Io vado.', `${i('Andare')} düzensizdir: ${b('vado, vai, va, vanno')}.`],
      ['Loro venono.', 'Loro vengono.', `${i('Venire')}: ${b('vengono')}.`],
      ['Sono bene.', 'Sto bene.', `<em>İyiyim</em> → ${b('sto bene')}, ${i('stare')} ile.`],
    ],
    de: [
      ['Posso nuotare.', 'So nuotare.', `<em>Ich kann schwimmen</em> (gelernt) → ${b('sapere')}.`],
      ['So Anna.', 'Conosco Anna.', `<em>Ich kenne Anna</em> → ${b('conoscere')}.`],
      ['Io ando.', 'Io vado.', `${i('Andare')} ist unregelmäßig: ${b('vado, vai, va, vanno')}.`],
      ['Loro venono.', 'Loro vengono.', `${i('Venire')}: ${b('vengono')}.`],
      ['Vado bene.', 'Sto bene.', `<em>Mir geht’s gut</em> → ${b('sto bene')}, mit ${i('stare')}.`],
    ],
    ja: [
      ['Posso nuotare.', 'So nuotare.', `「泳げる（泳ぎ方を知っている）」は ${b('sapere')}。`],
      ['So Anna.', 'Conosco Anna.', `「アンナを知っている」（人）は ${b('conoscere')}。`],
      ['Che tempo è?', 'Che tempo fa?', `「どんな天気？」は ${b('fare')} を使います：${i('Che tempo fa?')}。`],
      ['Io ando.', 'Io vado.', `${i('andare')} は不規則：${b('vado, vai, va, vanno')}。`],
      ['Sono bene.', 'Sto bene.', `「元気です」は ${b('sto bene')}（${i('stare')}）。`],
    ],
  },
};

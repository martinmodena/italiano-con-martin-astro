#!/usr/bin/env node
// Lezione B1 «Imperativo»: aggiunge noi, Lei e Loro, il trucco per ricordare
// (tu/noi/voi = presente, Lei/Loro = congiuntivo), gli irregolari, i pronomi
// con Lei e dieci esercizi nuovi, nelle 10 lingue (Martin, 2026-11-17).
//
// Uso: node scripts/expand-imperativo.mjs
// Idempotente: se la pagina ha già il riquadro #trucco la salta.
// SUPERATO il 2026-11-23: la lezione ora la costruisce create-a1-numbers-time-lessons.mjs
// (dati in scripts/data/lezioni-b1/imperativo*.mjs). Non rilanciarlo.

import { readFileSync, writeFileSync } from 'node:fs';

const FILES = {
  it: 'src/html/grammatica/b1/imperativo.html',
  en: 'src/html/en/grammar/b1/the-italian-imperative.html',
  es: 'src/html/es/gramatica/b1/el-imperativo-italiano.html',
  fr: 'src/html/fr/grammaire/b1/limperatif-italien.html',
  de: 'src/html/de/grammatik/b1/der-italienische-imperativ.html',
  pl: 'src/html/pl/gramatyka/b1/tryb-rozkazujacy-po-wlosku.html',
  cs: 'src/html/cs/gramatika/b1/italsky-imperativ.html',
  tr: 'src/html/tr/dilbilgisi/b1/italyanca-emir-kipi.html',
  ja: 'src/html/ja/bunpo/b1/イタリア語の命令法.html',
  pt: 'src/html/pt/gramatica/b1/o-imperativo-italiano.html',
};

// ---------- materiale italiano comune ----------
const PERSONS = ['Tu', 'Noi', 'Voi', 'Lei', 'Loro'];
const REGULAR = [
  ['parlare', 'parla', 'parliamo', 'parlate', 'parli', 'parlino'],
  ['prendere', 'prendi', 'prendiamo', 'prendete', 'prenda', 'prendano'],
  ['partire', 'parti', 'partiamo', 'partite', 'parta', 'partano'],
  ['finire', 'finisci', 'finiamo', 'finite', 'finisca', 'finiscano'],
];
const IRREGULAR = [
  ['andare', "va' / vai", 'andiamo', 'andate', 'vada', 'vadano'],
  ['fare', "fa' / fai", 'facciamo', 'fate', 'faccia', 'facciano'],
  ['dare', "da' / dai", 'diamo', 'date', 'dia', 'diano'],
  ['stare', "sta' / stai", 'stiamo', 'state', 'stia', 'stiano'],
  ['dire', "di'", 'diciamo', 'dite', 'dica', 'dicano'],
  ['venire', 'vieni', 'veniamo', 'venite', 'venga', 'vengano'],
  ['essere', 'sii', 'siamo', 'siate', 'sia', 'siano'],
  ['avere', 'abbi', 'abbiamo', 'abbiate', 'abbia', 'abbiano'],
  ['sapere', 'sappi', 'sappiamo', 'sappiate', 'sappia', 'sappiano'],
];
const EXAMPLES = [
  'Prendi il libro. Prendilo.',
  'Ascolta me. Ascoltami.',
  'Mandate la foto. Mandatela.',
  'Il treno parte: prendiamolo!',
  'Signora, il modulo: lo firmi qui.',
  'Signori, si accomodino.',
  'Non lo prendere. / Non prenderlo.',
  'Signora, non si preoccupi.',
];
const NEW_EXERCISES = [
  ['entri', 'Signora, ___ pure! (Lei, entrare)', 'Lei = congiuntivo: entrare diventa entri.'],
  ['andiamo', '___ al cinema stasera! (noi, andare)', 'Noi = presente: andiamo.'],
  ['aspetti', 'Dottore, ___ un momento, per favore. (Lei, aspettare)', 'Verbo in -are con Lei: la vocale diventa i.'],
  ['chiudano', 'Signori, ___ la porta, per favore. (Loro, chiudere)', 'Loro = congiuntivo: chiudano.'],
  ['sii', '___ paziente, arriva subito. (tu, essere)', 'Essere con tu: sii.'],
  ['scriva', 'Signora, ___ qui il Suo nome. (Lei, scrivere)', 'Verbo in -ere con Lei: la vocale diventa a.'],
  ['dica', 'Dottore, mi ___ la verità. (Lei, dire)', 'Che Lei dica: dica.'],
  ['beviamolo', 'Il caffè è pronto: ___ subito! (noi, bere + lo)', 'Con noi il pronome si attacca alla fine: beviamo + lo.'],
  ['venga', 'Signor Rossi, ___ pure con noi! (Lei, venire)', 'Che Lei venga: venga.'],
  ['dimmi', '___ la verità! (tu, dire + mi)', "Di' + mi: la m raddoppia."],
];

// ---------- testi per lingua ----------
// I(x): forma italiana dentro un testo straniero.
const mk = (lang) => (x) => (lang === 'it' ? `<em>${x}</em>` : `<em lang="it">${x}</em>`);

const T = {
  it: (I) => ({
    lead: `Dai istruzioni, consigli e inviti con tutte le persone: ${I('ascolta')} (tu), ${I('andiamo')} (noi), ${I('entrate')} (voi), ${I('si accomodi')} (Lei). Con un trucco per ricordare le forme senza fatica.`,
    nav: ['Tutte le persone', 'Il trucco', 'Irregolari'],
    inf: 'Infinito',
    tabH2: 'Le cinque persone: tu, noi, voi, Lei, Loro',
    tabP: `L'imperativo ha cinque persone. Non c'è ${I('io')}: non diamo ordini a noi stessi.`,
    tabLi: [
      `<strong>Noi</strong> è un invito a fare qualcosa insieme: ${I('Andiamo! Mangiamo qualcosa!')}`,
      `<strong>Lei</strong> è la forma di cortesia, per una persona a cui dai del Lei: ${I('Signora, entri pure.')}`,
      `<strong>Loro</strong> è la cortesia con più persone. Oggi è rara (camerieri, annunci, lettere): nella vita di tutti i giorni si usa ${I('voi')}.`,
      `<strong>Negativo:</strong> con tu ${I('non')} + infinito (${I('non parlare')}); con tutte le altre persone ${I('non')} + la stessa forma: ${I('non parliamo, non parlate, non parli, non parlino')}.`,
    ],
    trH2: 'Il trucco per ricordare: due famiglie',
    fam1: [`Tu, noi, voi → come il presente`, `Sono le persone del dialogo alla pari, gli «amici». ${I('Prendi')} = tu prendi, ${I('parti')} = tu parti, ${I('parliamo')} = noi parliamo, ${I('parlate')} = voi parlate. Una sola eccezione: tu con i verbi in ${I('-are')}, che tengono la loro <strong>a</strong>: parl<strong>a</strong>re → ${I('parla!')}`],
    fam2: [`Lei, Loro → come il congiuntivo`, `Sono le persone della cortesia, i «signori». Pensa a una frase con ${I('che')} e poi togli il ${I('che')}: (che) Lei ${I('entri')} → ${I('Entri!')} · (che) Loro ${I('aspettino')} → ${I('Aspettino!')}`],
    swapH3: 'Tu e Lei si scambiano le vocali',
    swapHead: ['', 'verbi in -are', 'verbi in -ere / -ire'],
    swapP: `La ${I('a')} e la ${I('i')} fanno a cambio: tu ${I('parla')} ↔ Lei ${I('parli')}, tu ${I('prendi')} ↔ Lei ${I('prenda')}.`,
    slogan: `<strong>Da ricordare: tra amici il presente, con i signori il congiuntivo.</strong> Anche i pronomi seguono le due famiglie: con tu, noi e voi si attaccano alla fine (${I('prendilo, prendiamolo, prendetelo')}); con Lei e Loro vanno prima (${I('lo prenda, lo prendano')}).`,
    personal: `<strong>Per chi parla inglese:</strong> <em lang="en">let's</em> non si traduce, basta la forma di noi: <em lang="en">Let's go!</em> = ${I('Andiamo!')} E l'inglese non ha un «you» di cortesia: in italiano la gentilezza sta nel verbo, ${I('Entri!')} invece di ${I('Entra!')}`,
    irrH2: 'I verbi irregolari, senza fatica',
    irrP: `Il trucco funziona anche qui: Lei e Loro prendono il congiuntivo (${I('vada, faccia, dica, venga')}…), noi e voi sono quasi sempre il presente. Le sorprese sono poche:`,
    irrLi: [
      `<strong>Le cinque forme corte con tu:</strong> ${I("va', da', fa', sta', di'")}. Ripetile come una filastrocca. Per le prime quattro va bene anche il presente: ${I('vai, dai, fai, stai')}.`,
      `<strong>Con un pronome la consonante raddoppia:</strong> ${I("di' + mi = dimmi, fa' + lo = fallo, da' + mi = dammi, va' + ci = vacci")}. Unica eccezione: ${I('gli')} (${I('digli, fagli')}).`,
      `<strong>Essere, avere, sapere</strong> sono gli unici con una sorpresa anche per tu e voi: ${I('sii, abbi, sappi; siate, abbiate, sappiate')} (dal congiuntivo). ${I('Sii paziente! Abbiate fiducia!')}`,
    ],
    exH2: 'Con i pronomi',
    exP: 'Con tu, noi e voi il pronome si attacca alla fine; con Lei e Loro va prima del verbo.',
  }),

  en: (I) => ({
    lead: `Give instructions, advice and invitations with every person: ${I('ascolta')} (tu), ${I('andiamo')} (noi), ${I('entrate')} (voi), ${I('si accomodi')} (Lei). Plus a trick to remember the forms effortlessly.`,
    nav: ['All persons', 'The trick', 'Irregular verbs'],
    inf: 'Infinitive',
    tabH2: `The five persons: ${I('tu, noi, voi, Lei, Loro')}`,
    tabP: `The Italian imperative has five persons. There is no ${I('io')}: we don't give orders to ourselves.`,
    tabLi: [
      `<strong lang="it">Noi</strong> is English <em>let's</em>: ${I('Andiamo!')} (let's go!), ${I('Mangiamo qualcosa!')} (let's eat something!).`,
      `<strong lang="it">Lei</strong> is the polite form for one person you address formally: ${I('Signora, entri pure.')} (please come in, madam).`,
      `<strong lang="it">Loro</strong> is the polite form for several people. It's rare today (waiters, announcements, letters): in everyday life people use ${I('voi')}.`,
      `<strong>Negative:</strong> with ${I('tu')}, ${I('non')} + infinitive (${I('non parlare')}); with every other person, ${I('non')} + the same form: ${I('non parliamo, non parlate, non parli, non parlino')}.`,
    ],
    trH2: 'The trick to remember: two families',
    fam1: [`${I('Tu, noi, voi')} → same as the present`, `These are the people you talk to as equals, your "friends". ${I('Prendi')} = ${I('tu prendi')}, ${I('parti')} = ${I('tu parti')}, ${I('parliamo')} = ${I('noi parliamo')}, ${I('parlate')} = ${I('voi parlate')}. Only one exception: ${I('tu')} with <em>-are</em> verbs, which keep their <strong>a</strong>: ${I('parlare')} → ${I('parla!')}`],
    fam2: [`${I('Lei, Loro')} → same as the subjunctive`, `These are the polite persons, the "ladies and gentlemen". Think of a sentence with ${I('che')}, then drop the ${I('che')}: ${I('(che) Lei entri')} → ${I('Entri!')} · ${I('(che) Loro aspettino')} → ${I('Aspettino!')}`],
    swapH3: `${I('Tu')} and ${I('Lei')} swap their vowels`,
    swapHead: ['', '-are verbs', '-ere / -ire verbs'],
    swapP: `The <strong>a</strong> and the <strong>i</strong> change places: ${I('tu parla')} ↔ ${I('Lei parli')}, ${I('tu prendi')} ↔ ${I('Lei prenda')}.`,
    slogan: `<strong>Remember: present tense among friends, subjunctive for ladies and gentlemen.</strong> Pronouns follow the same two families: with ${I('tu, noi, voi')} they're glued to the end (${I('prendilo, prendiamolo, prendetelo')}); with ${I('Lei')} and ${I('Loro')} they go before (${I('lo prenda, lo prendano')}).`,
    personal: `<strong>For English speakers:</strong> <em>let's</em> isn't a separate word in Italian, it's the ${I('noi')} form: <em>Let's go!</em> = ${I('Andiamo!')} And English has no polite "you": in Italian, politeness lives in the verb, ${I('Entri!')} instead of ${I('Entra!')}`,
    irrH2: 'Irregular verbs, the easy way',
    irrP: `The trick works here too: ${I('Lei')} and ${I('Loro')} take the subjunctive (${I('vada, faccia, dica, venga')}…), ${I('noi')} and ${I('voi')} are almost always the present. There are only a few surprises:`,
    irrLi: [
      `<strong>The five short forms with ${I('tu')}:</strong> ${I("va', da', fa', sta', di'")}. Say them like a nursery rhyme. For the first four the present works too: ${I('vai, dai, fai, stai')}.`,
      `<strong>Add a pronoun and the consonant doubles:</strong> ${I("di' + mi = dimmi, fa' + lo = fallo, da' + mi = dammi, va' + ci = vacci")}. Only exception: ${I('gli')} (${I('digli, fagli')}).`,
      `<strong lang="it">Essere, avere, sapere</strong> are the only ones with a surprise for ${I('tu')} and ${I('voi')} too: ${I('sii, abbi, sappi; siate, abbiate, sappiate')} (from the subjunctive). ${I('Sii paziente!')} (be patient!)`,
    ],
    exH2: 'With pronouns',
    exP: `With ${I('tu, noi, voi')} the pronoun is attached to the end; with ${I('Lei')} and ${I('Loro')} it goes before the verb.`,
  }),

  es: (I) => ({
    lead: `Da instrucciones, consejos e invitaciones con todas las personas: ${I('ascolta')} (tu), ${I('andiamo')} (noi), ${I('entrate')} (voi), ${I('si accomodi')} (Lei). Con un truco para recordar las formas sin esfuerzo.`,
    nav: ['Todas las personas', 'El truco', 'Irregulares'],
    inf: 'Infinitivo',
    tabH2: `Las cinco personas: ${I('tu, noi, voi, Lei, Loro')}`,
    tabP: `El imperativo italiano tiene cinco personas. No existe ${I('io')}: no nos damos órdenes a nosotros mismos.`,
    tabLi: [
      `<strong lang="it">Noi</strong> es una invitación a hacer algo juntos, como «vamos»: ${I('Andiamo! Mangiamo qualcosa!')}`,
      `<strong lang="it">Lei</strong> es la forma de cortesía, como <em>usted</em>: ${I('Signora, entri pure.')} (pase, señora).`,
      `<strong lang="it">Loro</strong> es la cortesía con varias personas, como <em>ustedes</em>, pero en Italia es rara (camareros, avisos, cartas): en la vida diaria se usa ${I('voi')}.`,
      `<strong>Negativo:</strong> con ${I('tu')}, ${I('non')} + infinitivo (${I('non parlare')}); con las demás personas, ${I('non')} + la misma forma: ${I('non parliamo, non parlate, non parli, non parlino')}.`,
    ],
    trH2: 'El truco para recordar: dos familias',
    fam1: [`${I('Tu, noi, voi')} → igual que el presente`, `Son las personas del trato de tú, los «amigos». ${I('Prendi')} = ${I('tu prendi')}, ${I('parti')} = ${I('tu parti')}, ${I('parliamo')} = ${I('noi parliamo')}, ${I('parlate')} = ${I('voi parlate')}. Una sola excepción: ${I('tu')} con los verbos en <em>-are</em>, que conservan su <strong>a</strong>: ${I('parlare')} → ${I('parla!')}`],
    fam2: [`${I('Lei, Loro')} → igual que el subjuntivo`, `Son las personas de cortesía, los «señores». Piensa en una frase con ${I('che')} y quita el ${I('che')}: ${I('(che) Lei entri')} → ${I('Entri!')} · ${I('(che) Loro aspettino')} → ${I('Aspettino!')}`],
    swapH3: `${I('Tu')} y ${I('Lei')} se intercambian las vocales`,
    swapHead: ['', 'verbos en -are', 'verbos en -ere / -ire'],
    swapP: `La <strong>a</strong> y la <strong>i</strong> cambian de lugar: ${I('tu parla')} ↔ ${I('Lei parli')}, ${I('tu prendi')} ↔ ${I('Lei prenda')}.`,
    slogan: `<strong>Para recordar: entre amigos, presente; con los señores, subjuntivo.</strong> Los pronombres siguen las mismas familias: con ${I('tu, noi, voi')} van pegados al final (${I('prendilo, prendiamolo, prendetelo')}); con ${I('Lei')} y ${I('Loro')} van delante (${I('lo prenda, lo prendano')}).`,
    personal: `<strong>Este truco ya lo conoces:</strong> en español <em>usted</em> y <em>ustedes</em> también usan el subjuntivo: <em>usted hable</em> = ${I('Lei parli')}, <em>ustedes hablen</em> = ${I('Loro parlino')}. Cuidado con <em>nosotros</em>: el español dice <em>hablemos</em>, el italiano ${I('parliamo')}, igual que el presente. Y con los pronombres el italiano va al revés: <em>tómelo</em> → ${I('lo prenda')}.`,
    irrH2: 'Los verbos irregulares, sin esfuerzo',
    irrP: `El truco funciona también aquí: ${I('Lei')} y ${I('Loro')} toman el subjuntivo (${I('vada, faccia, dica, venga')}…), ${I('noi')} y ${I('voi')} son casi siempre el presente. Las sorpresas son pocas:`,
    irrLi: [
      `<strong>Las cinco formas cortas con ${I('tu')}:</strong> ${I("va', da', fa', sta', di'")}. Repítelas como una canción. Para las cuatro primeras vale también el presente: ${I('vai, dai, fai, stai')}.`,
      `<strong>Con un pronombre, la consonante se duplica:</strong> ${I("di' + mi = dimmi, fa' + lo = fallo, da' + mi = dammi, va' + ci = vacci")}. Única excepción: ${I('gli')} (${I('digli, fagli')}).`,
      `<strong lang="it">Essere, avere, sapere</strong> son los únicos con sorpresa también para ${I('tu')} y ${I('voi')}: ${I('sii, abbi, sappi; siate, abbiate, sappiate')} (del subjuntivo). ${I('Sii paziente!')} (¡ten paciencia!)`,
    ],
    exH2: 'Con pronombres',
    exP: `Con ${I('tu, noi, voi')} el pronombre se pega al final; con ${I('Lei')} y ${I('Loro')} va delante del verbo (al revés que en español: <em>siéntese</em> → ${I('si accomodi')}).`,
  }),

  pt: (I) => ({
    lead: `Dê instruções, conselhos e convites com todas as pessoas: ${I('ascolta')} (tu), ${I('andiamo')} (noi), ${I('entrate')} (voi), ${I('si accomodi')} (Lei). Com um truque para lembrar as formas sem esforço.`,
    nav: ['Todas as pessoas', 'O truque', 'Irregulares'],
    inf: 'Infinitivo',
    tabH2: `As cinco pessoas: ${I('tu, noi, voi, Lei, Loro')}`,
    tabP: `O imperativo italiano tem cinco pessoas. Não existe ${I('io')}: ninguém dá ordens a si mesmo.`,
    tabLi: [
      `<strong lang="it">Noi</strong> é um convite para fazer algo juntos, como «vamos»: ${I('Andiamo! Mangiamo qualcosa!')}`,
      `<strong lang="it">Lei</strong> é a forma de cortesia, como <em>o senhor / a senhora</em>: ${I('Signora, entri pure.')} (pode entrar, senhora).`,
      `<strong lang="it">Loro</strong> é a cortesia com várias pessoas. Hoje é rara (garçons, avisos, cartas): no dia a dia se usa ${I('voi')}.`,
      `<strong>Negativo:</strong> com ${I('tu')}, ${I('non')} + infinitivo (${I('non parlare')}); com as outras pessoas, ${I('non')} + a mesma forma: ${I('non parliamo, non parlate, non parli, non parlino')}.`,
    ],
    trH2: 'O truque para lembrar: duas famílias',
    fam1: [`${I('Tu, noi, voi')} → igual ao presente`, `São as pessoas da conversa informal, os «amigos». ${I('Prendi')} = ${I('tu prendi')}, ${I('parti')} = ${I('tu parti')}, ${I('parliamo')} = ${I('noi parliamo')}, ${I('parlate')} = ${I('voi parlate')}. Uma só exceção: ${I('tu')} com os verbos em <em>-are</em>, que guardam o seu <strong>a</strong>: ${I('parlare')} → ${I('parla!')}`],
    fam2: [`${I('Lei, Loro')} → igual ao subjuntivo`, `São as pessoas da cortesia, os «senhores». Pense numa frase com ${I('che')} e tire o ${I('che')}: ${I('(che) Lei entri')} → ${I('Entri!')} · ${I('(che) Loro aspettino')} → ${I('Aspettino!')}`],
    swapH3: `${I('Tu')} e ${I('Lei')} trocam as vogais`,
    swapHead: ['', 'verbos em -are', 'verbos em -ere / -ire'],
    swapP: `O <strong>a</strong> e o <strong>i</strong> trocam de lugar: ${I('tu parla')} ↔ ${I('Lei parli')}, ${I('tu prendi')} ↔ ${I('Lei prenda')}.`,
    slogan: `<strong>Para lembrar: entre amigos, presente; com os senhores, subjuntivo.</strong> Os pronomes seguem as mesmas famílias: com ${I('tu, noi, voi')} ficam colados no fim (${I('prendilo, prendiamolo, prendetelo')}); com ${I('Lei')} e ${I('Loro')} vêm antes (${I('lo prenda, lo prendano')}).`,
    personal: `<strong>Você já conhece esse truque:</strong> em português <em>o senhor</em> e <em>vocês</em> também usam o subjuntivo: <em>o senhor fale</em> = ${I('Lei parli')}, <em>os senhores falem</em> = ${I('Loro parlino')}. Atenção: o <em>fale!</em> que no Brasil se diz para um amigo, em italiano, com ${I('tu')}, é ${I('parla!')} E o <em>falemos</em> vira ${I('parliamo')}, igual ao presente.`,
    irrH2: 'Os verbos irregulares, sem esforço',
    irrP: `O truque funciona aqui também: ${I('Lei')} e ${I('Loro')} pegam o subjuntivo (${I('vada, faccia, dica, venga')}…), ${I('noi')} e ${I('voi')} são quase sempre o presente. As surpresas são poucas:`,
    irrLi: [
      `<strong>As cinco formas curtas com ${I('tu')}:</strong> ${I("va', da', fa', sta', di'")}. Repita como uma cantiga. Para as quatro primeiras também vale o presente: ${I('vai, dai, fai, stai')}.`,
      `<strong>Com um pronome, a consoante dobra:</strong> ${I("di' + mi = dimmi, fa' + lo = fallo, da' + mi = dammi, va' + ci = vacci")}. Única exceção: ${I('gli')} (${I('digli, fagli')}).`,
      `<strong lang="it">Essere, avere, sapere</strong> são os únicos com surpresa também para ${I('tu')} e ${I('voi')}: ${I('sii, abbi, sappi; siate, abbiate, sappiate')} (do subjuntivo). ${I('Sii paziente!')} (tenha paciência!)`,
    ],
    exH2: 'Com pronomes',
    exP: `Com ${I('tu, noi, voi')} o pronome se junta no fim do verbo; com ${I('Lei')} e ${I('Loro')} vem antes.`,
  }),

  fr: (I) => ({
    lead: `Donnez des instructions, des conseils et des invitations à toutes les personnes : ${I('ascolta')} (tu), ${I('andiamo')} (noi), ${I('entrate')} (voi), ${I('si accomodi')} (Lei). Avec une astuce pour retenir les formes sans effort.`,
    nav: ['Toutes les personnes', "L'astuce", 'Irréguliers'],
    inf: 'Infinitif',
    tabH2: `Les cinq personnes : ${I('tu, noi, voi, Lei, Loro')}`,
    tabP: `L'impératif italien a cinq personnes. Pas de ${I('io')} : on ne se donne pas d'ordres à soi-même.`,
    tabLi: [
      `<strong lang="it">Noi</strong> invite à faire quelque chose ensemble, comme « allons-y » : ${I('Andiamo! Mangiamo qualcosa!')}`,
      `<strong lang="it">Lei</strong> est la forme de politesse pour une personne, notre « vous » de politesse : ${I('Signora, entri pure.')} (entrez, Madame).`,
      `<strong lang="it">Loro</strong> est la politesse pour plusieurs personnes. Il est rare aujourd'hui (serveurs, annonces, lettres) : au quotidien on dit ${I('voi')}.`,
      `<strong>Négatif :</strong> avec ${I('tu')}, ${I('non')} + infinitif (${I('non parlare')}) ; avec toutes les autres personnes, ${I('non')} + la même forme : ${I('non parliamo, non parlate, non parli, non parlino')}.`,
    ],
    trH2: "L'astuce pour retenir : deux familles",
    fam1: [`${I('Tu, noi, voi')} → comme le présent`, `Ce sont les personnes du tutoiement, les « amis ». ${I('Prendi')} = ${I('tu prendi')}, ${I('parti')} = ${I('tu parti')}, ${I('parliamo')} = ${I('noi parliamo')}, ${I('parlate')} = ${I('voi parlate')}. Une seule exception : ${I('tu')} avec les verbes en <em>-are</em>, qui gardent leur <strong>a</strong> : ${I('parlare')} → ${I('parla!')}`],
    fam2: [`${I('Lei, Loro')} → comme le subjonctif`, `Ce sont les personnes de politesse, les « messieurs-dames ». Pensez à une phrase avec ${I('che')}, puis enlevez le ${I('che')} : ${I('(che) Lei entri')} → ${I('Entri!')} · ${I('(che) Loro aspettino')} → ${I('Aspettino!')}`],
    swapH3: `${I('Tu')} et ${I('Lei')} échangent leurs voyelles`,
    swapHead: ['', 'verbes en -are', 'verbes en -ere / -ire'],
    swapP: `Le <strong>a</strong> et le <strong>i</strong> changent de place : ${I('tu parla')} ↔ ${I('Lei parli')}, ${I('tu prendi')} ↔ ${I('Lei prenda')}.`,
    slogan: `<strong>À retenir : entre amis le présent, avec les messieurs-dames le subjonctif.</strong> Les pronoms suivent les mêmes familles : avec ${I('tu, noi, voi')} ils s'attachent à la fin (${I('prendilo, prendiamolo, prendetelo')}) ; avec ${I('Lei')} et ${I('Loro')} ils se placent devant (${I('lo prenda, lo prendano')}).`,
    personal: `<strong>Bonne nouvelle pour les francophones :</strong> comme en français, l'impératif de ${I('noi')} et de ${I('voi')} est la forme du présent : <em>parlons, parlez</em> = ${I('parliamo, parlate')}. Pour ${I('Lei')}, pensez au subjonctif de <em>qu'il parle</em> : ${I('(che) Lei parli')} → ${I('Parli!')} Attention : le « vous » de politesse n'est pas ${I('voi')}, c'est ${I('Lei')}.`,
    irrH2: 'Les verbes irréguliers, sans effort',
    irrP: `L'astuce marche ici aussi : ${I('Lei')} et ${I('Loro')} prennent le subjonctif (${I('vada, faccia, dica, venga')}…), ${I('noi')} et ${I('voi')} sont presque toujours le présent. Les surprises sont rares :`,
    irrLi: [
      `<strong>Les cinq formes courtes avec ${I('tu')} :</strong> ${I("va', da', fa', sta', di'")}. Répétez-les comme une comptine. Pour les quatre premières, le présent marche aussi : ${I('vai, dai, fai, stai')}.`,
      `<strong>Avec un pronom, la consonne double :</strong> ${I("di' + mi = dimmi, fa' + lo = fallo, da' + mi = dammi, va' + ci = vacci")}. Seule exception : ${I('gli')} (${I('digli, fagli')}).`,
      `<strong lang="it">Essere, avere, sapere</strong> sont les seuls à réserver une surprise pour ${I('tu')} et ${I('voi')} aussi : ${I('sii, abbi, sappi ; siate, abbiate, sappiate')} (du subjonctif), comme en français <em>sois, aie, sache</em> ! ${I('Sii paziente!')}`,
    ],
    exH2: 'Avec des pronoms',
    exP: `Avec ${I('tu, noi, voi')} le pronom s'attache à la fin ; avec ${I('Lei')} et ${I('Loro')} il se place devant le verbe.`,
  }),

  de: (I) => ({
    lead: `Gib Anweisungen, Ratschläge und Einladungen mit allen Personen: ${I('ascolta')} (tu), ${I('andiamo')} (noi), ${I('entrate')} (voi), ${I('si accomodi')} (Lei). Mit einem Trick, um dir die Formen mühelos zu merken.`,
    nav: ['Alle Personen', 'Der Trick', 'Unregelmäßige'],
    inf: 'Infinitiv',
    tabH2: `Die fünf Personen: ${I('tu, noi, voi, Lei, Loro')}`,
    tabP: `Der italienische Imperativ hat fünf Personen. Ein ${I('io')} gibt es nicht: Befehle an sich selbst gibt man nicht.`,
    tabLi: [
      `<strong lang="it">Noi</strong> lädt ein, etwas gemeinsam zu tun, wie „Gehen wir!“: ${I('Andiamo! Mangiamo qualcosa!')}`,
      `<strong lang="it">Lei</strong> ist die Höflichkeitsform für eine Person, unser „Sie“: ${I('Signora, entri pure.')} (Kommen Sie herein.)`,
      `<strong lang="it">Loro</strong> ist die Höflichkeitsform für mehrere Personen. Heute selten (Kellner, Durchsagen, Briefe): im Alltag sagt man ${I('voi')}.`,
      `<strong>Verneinung:</strong> mit ${I('tu')} ${I('non')} + Infinitiv (${I('non parlare')}); bei allen anderen Personen ${I('non')} + dieselbe Form: ${I('non parliamo, non parlate, non parli, non parlino')}.`,
    ],
    trH2: 'Der Trick zum Merken: zwei Familien',
    fam1: [`${I('Tu, noi, voi')} → wie das Präsens`, `Das sind die Personen, die man duzt, die „Freunde“. ${I('Prendi')} = ${I('tu prendi')}, ${I('parti')} = ${I('tu parti')}, ${I('parliamo')} = ${I('noi parliamo')}, ${I('parlate')} = ${I('voi parlate')}. Nur eine Ausnahme: ${I('tu')} bei Verben auf <em>-are</em>, die ihr <strong>a</strong> behalten: ${I('parlare')} → ${I('parla!')}`],
    fam2: [`${I('Lei, Loro')} → wie der Konjunktiv (congiuntivo)`, `Das sind die Höflichkeitsformen, die „Damen und Herren“. Denk an einen Satz mit ${I('che')} und lass das ${I('che')} weg: ${I('(che) Lei entri')} → ${I('Entri!')} · ${I('(che) Loro aspettino')} → ${I('Aspettino!')}`],
    swapH3: `${I('Tu')} und ${I('Lei')} tauschen die Vokale`,
    swapHead: ['', 'Verben auf -are', 'Verben auf -ere / -ire'],
    swapP: `Das <strong>a</strong> und das <strong>i</strong> tauschen die Plätze: ${I('tu parla')} ↔ ${I('Lei parli')}, ${I('tu prendi')} ↔ ${I('Lei prenda')}.`,
    slogan: `<strong>Merksatz: unter Freunden das Präsens, bei Damen und Herren der congiuntivo.</strong> Auch die Pronomen folgen den zwei Familien: bei ${I('tu, noi, voi')} hängen sie hinten am Verb (${I('prendilo, prendiamolo, prendetelo')}); bei ${I('Lei')} und ${I('Loro')} stehen sie davor (${I('lo prenda, lo prendano')}).`,
    personal: `<strong>Für Deutschsprachige:</strong> im Deutschen sagt man „Gehen wir!“ und „Kommen Sie herein!“, immer mit Pronomen. Im Italienischen steckt alles im Verb: ${I('Andiamo!')} ${I('Entri!')}, ohne ${I('noi')} und ohne ${I('Lei')}. Und das höfliche „Sie“ ist nicht ${I('voi')}, sondern ${I('Lei')}, mit dem Verb in der 3. Person Singular.`,
    irrH2: 'Unregelmäßige Verben ohne Mühe',
    irrP: `Der Trick funktioniert auch hier: ${I('Lei')} und ${I('Loro')} nehmen den congiuntivo (${I('vada, faccia, dica, venga')}…), ${I('noi')} und ${I('voi')} sind fast immer das Präsens. Überraschungen gibt es wenige:`,
    irrLi: [
      `<strong>Die fünf Kurzformen mit ${I('tu')}:</strong> ${I("va', da', fa', sta', di'")}. Sag sie auf wie einen Abzählreim. Bei den ersten vier geht auch das Präsens: ${I('vai, dai, fai, stai')}.`,
      `<strong>Mit einem Pronomen verdoppelt sich der Konsonant:</strong> ${I("di' + mi = dimmi, fa' + lo = fallo, da' + mi = dammi, va' + ci = vacci")}. Einzige Ausnahme: ${I('gli')} (${I('digli, fagli')}).`,
      `<strong lang="it">Essere, avere, sapere</strong> haben als einzige auch bei ${I('tu')} und ${I('voi')} eine Überraschung: ${I('sii, abbi, sappi; siate, abbiate, sappiate')} (aus dem congiuntivo). ${I('Sii paziente!')} (Sei geduldig!)`,
    ],
    exH2: 'Mit Pronomen',
    exP: `Bei ${I('tu, noi, voi')} wird das Pronomen hinten angehängt; bei ${I('Lei')} und ${I('Loro')} steht es vor dem Verb.`,
  }),

  pl: (I) => ({
    lead: `Wydawaj polecenia, rady i zaproszenia we wszystkich osobach: ${I('ascolta')} (tu), ${I('andiamo')} (noi), ${I('entrate')} (voi), ${I('si accomodi')} (Lei). Z prostym sposobem, żeby zapamiętać formy bez wysiłku.`,
    nav: ['Wszystkie osoby', 'Sposób na pamięć', 'Nieregularne'],
    inf: 'Bezokolicznik',
    tabH2: `Pięć osób: ${I('tu, noi, voi, Lei, Loro')}`,
    tabP: `Włoski tryb rozkazujący ma pięć osób. Nie ma ${I('io')}: sobie samemu nie wydajemy poleceń.`,
    tabLi: [
      `<strong lang="it">Noi</strong> to zachęta do wspólnego działania, jak „chodźmy”: ${I('Andiamo! Mangiamo qualcosa!')}`,
      `<strong lang="it">Lei</strong> to forma grzecznościowa dla jednej osoby, jak „Pan / Pani”: ${I('Signora, entri pure.')} (Proszę wejść.)`,
      `<strong lang="it">Loro</strong> to forma grzecznościowa dla kilku osób, jak „Państwo”. Dziś rzadka (kelnerzy, komunikaty, listy): na co dzień mówi się ${I('voi')}.`,
      `<strong>Przeczenie:</strong> przy ${I('tu')} ${I('non')} + bezokolicznik (${I('non parlare')}); przy pozostałych osobach ${I('non')} + ta sama forma: ${I('non parliamo, non parlate, non parli, non parlino')}.`,
    ],
    trH2: 'Sposób na pamięć: dwie rodziny',
    fam1: [`${I('Tu, noi, voi')} → jak czas teraźniejszy`, `To osoby, z którymi jesteśmy na „ty”, „przyjaciele”. ${I('Prendi')} = ${I('tu prendi')}, ${I('parti')} = ${I('tu parti')}, ${I('parliamo')} = ${I('noi parliamo')}, ${I('parlate')} = ${I('voi parlate')}. Tylko jeden wyjątek: ${I('tu')} przy czasownikach na <em>-are</em>, które zachowują swoje <strong>a</strong>: ${I('parlare')} → ${I('parla!')}`],
    fam2: [`${I('Lei, Loro')} → jak congiuntivo`, `To osoby grzecznościowe, „Państwo”. Pomyśl o zdaniu z ${I('che')} i usuń ${I('che')}: ${I('(che) Lei entri')} → ${I('Entri!')} · ${I('(che) Loro aspettino')} → ${I('Aspettino!')}`],
    swapH3: `${I('Tu')} i ${I('Lei')} zamieniają się samogłoskami`,
    swapHead: ['', 'czasowniki na -are', 'czasowniki na -ere / -ire'],
    swapP: `<strong>A</strong> i <strong>i</strong> zamieniają się miejscami: ${I('tu parla')} ↔ ${I('Lei parli')}, ${I('tu prendi')} ↔ ${I('Lei prenda')}.`,
    slogan: `<strong>Do zapamiętania: z przyjaciółmi czas teraźniejszy, z Państwem congiuntivo.</strong> Zaimki idą za tymi samymi rodzinami: przy ${I('tu, noi, voi')} dołączamy je na końcu (${I('prendilo, prendiamolo, prendetelo')}); przy ${I('Lei')} i ${I('Loro')} stoją przed czasownikiem (${I('lo prenda, lo prendano')}).`,
    personal: `<strong>Dla Polaków:</strong> ${I('Lei parli')} przypomina polskie „niech Pan mówi”: forma z „niech” to właśnie odpowiednik congiuntivo. A „Chodźmy!” to po włosku ${I('Andiamo!')}, forma ${I('noi')} równa czasowi teraźniejszemu. Uwaga: „proszę wejść” to nie bezokolicznik, tylko ${I('Entri!')}`,
    irrH2: 'Czasowniki nieregularne bez wysiłku',
    irrP: `Sposób działa i tutaj: ${I('Lei')} i ${I('Loro')} biorą congiuntivo (${I('vada, faccia, dica, venga')}…), ${I('noi')} i ${I('voi')} to prawie zawsze czas teraźniejszy. Niespodzianek jest niewiele:`,
    irrLi: [
      `<strong>Pięć krótkich form dla ${I('tu')}:</strong> ${I("va', da', fa', sta', di'")}. Powtarzaj je jak wyliczankę. Dla pierwszych czterech dobry jest też czas teraźniejszy: ${I('vai, dai, fai, stai')}.`,
      `<strong>Z zaimkiem spółgłoska się podwaja:</strong> ${I("di' + mi = dimmi, fa' + lo = fallo, da' + mi = dammi, va' + ci = vacci")}. Jedyny wyjątek: ${I('gli')} (${I('digli, fagli')}).`,
      `<strong lang="it">Essere, avere, sapere</strong> jako jedyne mają niespodziankę także dla ${I('tu')} i ${I('voi')}: ${I('sii, abbi, sappi; siate, abbiate, sappiate')} (z congiuntivo). ${I('Sii paziente!')} (Bądź cierpliwy!)`,
    ],
    exH2: 'Z zaimkami',
    exP: `Przy ${I('tu, noi, voi')} zaimek dołączamy na końcu czasownika; przy ${I('Lei')} i ${I('Loro')} stoi przed nim.`,
  }),

  cs: (I) => ({
    lead: `Dávejte pokyny, rady a pozvání ve všech osobách: ${I('ascolta')} (tu), ${I('andiamo')} (noi), ${I('entrate')} (voi), ${I('si accomodi')} (Lei). S trikem, jak si tvary zapamatovat bez námahy.`,
    nav: ['Všechny osoby', 'Trik na zapamatování', 'Nepravidelná slovesa'],
    inf: 'Infinitiv',
    tabH2: `Pět osob: ${I('tu, noi, voi, Lei, Loro')}`,
    tabP: `Italský rozkazovací způsob má pět osob. Chybí ${I('io')}: sami sobě rozkazy nedáváme.`,
    tabLi: [
      `<strong lang="it">Noi</strong> je výzva udělat něco společně, jako „pojďme“: ${I('Andiamo! Mangiamo qualcosa!')}`,
      `<strong lang="it">Lei</strong> je zdvořilá forma pro jednu osobu, české vykání: ${I('Signora, entri pure.')} (Pojďte dál, paní.)`,
      `<strong lang="it">Loro</strong> je zdvořilá forma pro více osob. Dnes je vzácná (číšníci, hlášení, dopisy): v běžném životě se říká ${I('voi')}.`,
      `<strong>Zápor:</strong> u ${I('tu')} ${I('non')} + infinitiv (${I('non parlare')}); u ostatních osob ${I('non')} + stejný tvar: ${I('non parliamo, non parlate, non parli, non parlino')}.`,
    ],
    trH2: 'Trik na zapamatování: dvě rodiny',
    fam1: [`${I('Tu, noi, voi')} → jako přítomný čas`, `To jsou osoby, kterým tykáme, „přátelé“. ${I('Prendi')} = ${I('tu prendi')}, ${I('parti')} = ${I('tu parti')}, ${I('parliamo')} = ${I('noi parliamo')}, ${I('parlate')} = ${I('voi parlate')}. Jediná výjimka: ${I('tu')} u sloves na <em>-are</em>, která si nechávají své <strong>a</strong>: ${I('parlare')} → ${I('parla!')}`],
    fam2: [`${I('Lei, Loro')} → jako congiuntivo`, `To jsou zdvořilé osoby, „dámy a pánové“. Představte si větu s ${I('che')} a ${I('che')} vynechte: ${I('(che) Lei entri')} → ${I('Entri!')} · ${I('(che) Loro aspettino')} → ${I('Aspettino!')}`],
    swapH3: `${I('Tu')} a ${I('Lei')} si vymění samohlásky`,
    swapHead: ['', 'slovesa na -are', 'slovesa na -ere / -ire'],
    swapP: `<strong>A</strong> a <strong>i</strong> si vymění místa: ${I('tu parla')} ↔ ${I('Lei parli')}, ${I('tu prendi')} ↔ ${I('Lei prenda')}.`,
    slogan: `<strong>Zapamatujte si: mezi přáteli přítomný čas, s dámami a pány congiuntivo.</strong> Zájmena se řídí stejnými rodinami: u ${I('tu, noi, voi')} se připojují na konec (${I('prendilo, prendiamolo, prendetelo')}); u ${I('Lei')} a ${I('Loro')} stojí před slovesem (${I('lo prenda, lo prendano')}).`,
    personal: `<strong>Pro Čechy:</strong> ${I('Lei parli')} připomíná české „ať mluví“: tvar s „ať“ odpovídá italskému congiuntivu. A „Pojďme!“ je italsky ${I('Andiamo!')}, tvar ${I('noi')} stejný jako přítomný čas. Pozor: vykání není ${I('voi')}, ale ${I('Lei')}, se slovesem ve 3. osobě jednotného čísla.`,
    irrH2: 'Nepravidelná slovesa bez námahy',
    irrP: `Trik funguje i tady: ${I('Lei')} a ${I('Loro')} berou congiuntivo (${I('vada, faccia, dica, venga')}…), ${I('noi')} a ${I('voi')} jsou skoro vždy přítomný čas. Překvapení je málo:`,
    irrLi: [
      `<strong>Pět krátkých tvarů pro ${I('tu')}:</strong> ${I("va', da', fa', sta', di'")}. Opakujte je jako říkanku. U prvních čtyř platí i přítomný čas: ${I('vai, dai, fai, stai')}.`,
      `<strong>Se zájmenem se souhláska zdvojí:</strong> ${I("di' + mi = dimmi, fa' + lo = fallo, da' + mi = dammi, va' + ci = vacci")}. Jediná výjimka: ${I('gli')} (${I('digli, fagli')}).`,
      `<strong lang="it">Essere, avere, sapere</strong> mají jako jediná překvapení i pro ${I('tu')} a ${I('voi')}: ${I('sii, abbi, sappi; siate, abbiate, sappiate')} (z congiuntiva). ${I('Sii paziente!')} (Buď trpělivý!)`,
    ],
    exH2: 'Se zájmeny',
    exP: `U ${I('tu, noi, voi')} se zájmeno připojuje na konec; u ${I('Lei')} a ${I('Loro')} stojí před slovesem.`,
  }),

  tr: (I) => ({
    lead: `Bütün şahıslarla talimat, öneri ve davet verin: ${I('ascolta')} (tu), ${I('andiamo')} (noi), ${I('entrate')} (voi), ${I('si accomodi')} (Lei). Biçimleri zahmetsizce akılda tutmak için bir yolla birlikte.`,
    nav: ['Bütün şahıslar', 'Akılda tutma yolu', 'Düzensizler'],
    inf: 'Mastar',
    tabH2: `Beş şahıs: ${I('tu, noi, voi, Lei, Loro')}`,
    tabP: `İtalyanca emir kipinin beş şahsı vardır. ${I('io')} yoktur: insan kendine emir vermez.`,
    tabLi: [
      `<strong lang="it">Noi</strong> birlikte bir şey yapmaya davettir, Türkçedeki «-elim / -alım» gibi: ${I('Andiamo!')} (Gidelim!), ${I('Mangiamo qualcosa!')} (Bir şey yiyelim!)`,
      `<strong lang="it">Lei</strong> tek kişiye resmî hitaptır: ${I('Signora, entri pure.')} (Buyurun, girin hanımefendi.)`,
      `<strong lang="it">Loro</strong> birden fazla kişiye resmî hitaptır. Bugün nadirdir (garsonlar, anonslar, mektuplar): günlük hayatta ${I('voi')} kullanılır.`,
      `<strong>Olumsuz:</strong> ${I('tu')} ile ${I('non')} + mastar (${I('non parlare')}); diğer bütün şahıslarla ${I('non')} + aynı biçim: ${I('non parliamo, non parlate, non parli, non parlino')}.`,
    ],
    trH2: 'Akılda tutma yolu: iki aile',
    fam1: [`${I('Tu, noi, voi')} → şimdiki zamanla aynı`, `Bunlar senli benli konuştuğumuz «arkadaşlar». ${I('Prendi')} = ${I('tu prendi')}, ${I('parti')} = ${I('tu parti')}, ${I('parliamo')} = ${I('noi parliamo')}, ${I('parlate')} = ${I('voi parlate')}. Tek istisna: <em>-are</em> ile biten fiillerde ${I('tu')}; bu fiiller <strong>a</strong>'larını korur: ${I('parlare')} → ${I('parla!')}`],
    fam2: [`${I('Lei, Loro')} → congiuntivo ile aynı`, `Bunlar resmî şahıslar, «beyefendiler ve hanımefendiler». ${I('che')} ile bir cümle düşünün, sonra ${I('che')}'yi atın: ${I('(che) Lei entri')} → ${I('Entri!')} · ${I('(che) Loro aspettino')} → ${I('Aspettino!')}`],
    swapH3: `${I('Tu')} ile ${I('Lei')} ünlülerini değiştirir`,
    swapHead: ['', '-are fiilleri', '-ere / -ire fiilleri'],
    swapP: `<strong>a</strong> ile <strong>i</strong> yer değiştirir: ${I('tu parla')} ↔ ${I('Lei parli')}, ${I('tu prendi')} ↔ ${I('Lei prenda')}.`,
    slogan: `<strong>Aklınızda olsun: arkadaşlar arasında şimdiki zaman, resmî hitapta congiuntivo.</strong> Zamirler de aynı iki aileyi izler: ${I('tu, noi, voi')} ile fiilin sonuna eklenir (${I('prendilo, prendiamolo, prendetelo')}); ${I('Lei')} ve ${I('Loro')} ile fiilden önce gelir (${I('lo prenda, lo prendano')}).`,
    personal: `<strong>Türkçe konuşanlar için:</strong> «Gidelim!» İtalyancada ${I('Andiamo!')} olur: ${I('noi')} biçimi, şimdiki zamanla aynı. Türkçede resmî hitap «siz» ile yapılır (Buyurun, girin!); İtalyancada ise ${I('voi')} değil, 3. tekil şahıs ${I('Lei')} kullanılır: ${I('Entri!')}`,
    irrH2: 'Düzensiz fiiller, zahmetsizce',
    irrP: `Bu yol burada da işe yarar: ${I('Lei')} ve ${I('Loro')} congiuntivo alır (${I('vada, faccia, dica, venga')}…), ${I('noi')} ve ${I('voi')} neredeyse her zaman şimdiki zamandır. Sürprizler azdır:`,
    irrLi: [
      `<strong>${I('tu')} ile beş kısa biçim:</strong> ${I("va', da', fa', sta', di'")}. Bir tekerleme gibi tekrarlayın. İlk dördü için şimdiki zaman da olur: ${I('vai, dai, fai, stai')}.`,
      `<strong>Zamir eklenince ünsüz ikileşir:</strong> ${I("di' + mi = dimmi, fa' + lo = fallo, da' + mi = dammi, va' + ci = vacci")}. Tek istisna: ${I('gli')} (${I('digli, fagli')}).`,
      `<strong lang="it">Essere, avere, sapere</strong> ${I('tu')} ve ${I('voi')} için de sürpriz yapan tek fiillerdir: ${I('sii, abbi, sappi; siate, abbiate, sappiate')} (congiuntivo'dan). ${I('Sii paziente!')} (Sabırlı ol!)`,
    ],
    exH2: 'Zamirlerle',
    exP: `${I('tu, noi, voi')} ile zamir fiilin sonuna eklenir; ${I('Lei')} ve ${I('Loro')} ile fiilden önce gelir.`,
  }),

  ja: (I) => ({
    lead: `すべての人称で指示・助言・誘いを言いましょう：${I('ascolta')}（tu）、${I('andiamo')}（noi）、${I('entrate')}（voi）、${I('si accomodi')}（Lei）。形を楽に覚えるコツも紹介します。`,
    nav: ['すべての人称', '覚え方のコツ', '不規則動詞'],
    inf: '不定詞',
    tabH2: `5つの人称：${I('tu, noi, voi, Lei, Loro')}`,
    tabP: `イタリア語の命令法には5つの人称があります。${I('io')}（私）はありません。自分自身に命令はしないからです。`,
    tabLi: [
      `<strong lang="it">Noi</strong> は「〜しましょう」という誘いです：${I('Andiamo!')}（行きましょう！）、${I('Mangiamo qualcosa!')}（何か食べましょう！）`,
      `<strong lang="it">Lei</strong> は1人に対する丁寧な形です：${I('Signora, entri pure.')}（どうぞお入りください。）`,
      `<strong lang="it">Loro</strong> は複数の人に対する丁寧な形です。今ではまれで（ウェイター、アナウンス、手紙）、日常では ${I('voi')} を使います。`,
      `<strong>否定：</strong>${I('tu')} は ${I('non')} + 不定詞（${I('non parlare')}）。ほかの人称はすべて ${I('non')} + 同じ形：${I('non parliamo, non parlate, non parli, non parlino')}。`,
    ],
    trH2: '覚え方のコツ：2つのグループ',
    fam1: [`${I('Tu, noi, voi')} → 現在形と同じ`, `対等に話す相手、「友だち」グループです。${I('Prendi')} = ${I('tu prendi')}、${I('parti')} = ${I('tu parti')}、${I('parliamo')} = ${I('noi parliamo')}、${I('parlate')} = ${I('voi parlate')}。例外は1つだけ：<em>-are</em> 動詞の ${I('tu')} は、自分の <strong>a</strong> を残します：${I('parlare')} → ${I('parla!')}`],
    fam2: [`${I('Lei, Loro')} → 接続法（congiuntivo）と同じ`, `丁寧に話す相手、「お客さま」グループです。${I('che')} の付いた文を考えて、${I('che')} を取るだけ：${I('(che) Lei entri')} → ${I('Entri!')} ・ ${I('(che) Loro aspettino')} → ${I('Aspettino!')}`],
    swapH3: `${I('Tu')} と ${I('Lei')} は母音を入れ替える`,
    swapHead: ['', '-are 動詞', '-ere / -ire 動詞'],
    swapP: `<strong>a</strong> と <strong>i</strong> が入れ替わります：${I('tu parla')} ↔ ${I('Lei parli')}、${I('tu prendi')} ↔ ${I('Lei prenda')}。`,
    slogan: `<strong>覚えておこう：友だちには現在形、お客さまには接続法。</strong>代名詞も同じ2つのグループに従います。${I('tu, noi, voi')} では動詞の後ろに付け（${I('prendilo, prendiamolo, prendetelo')}）、${I('Lei')} と ${I('Loro')} では動詞の前に置きます（${I('lo prenda, lo prendano')}）。`,
    personal: `<strong>日本語話者へ：</strong>「行きましょう」はイタリア語で ${I('Andiamo!')}（${I('noi')} の形で、現在形と同じ）。「お入りください」のような丁寧な言い方は、「あなた」ではなく3人称の ${I('Lei')} を使い、${I('Entri!')} と言います。丁寧さは「ください」ではなく、動詞の形で表します。`,
    irrH2: '不規則動詞も楽に',
    irrP: `このコツはここでも使えます：${I('Lei')} と ${I('Loro')} は接続法（${I('vada, faccia, dica, venga')}…）、${I('noi')} と ${I('voi')} はほとんど現在形です。注意点はわずかです：`,
    irrLi: [
      `<strong>${I('tu')} の5つの短い形：</strong>${I("va', da', fa', sta', di'")}。早口言葉のように繰り返しましょう。最初の4つは現在形でも OK：${I('vai, dai, fai, stai')}。`,
      `<strong>代名詞が付くと子音が重なります：</strong>${I("di' + mi = dimmi, fa' + lo = fallo, da' + mi = dammi, va' + ci = vacci")}。例外は ${I('gli')} だけ（${I('digli, fagli')}）。`,
      `<strong lang="it">Essere, avere, sapere</strong> だけは ${I('tu')} と ${I('voi')} でも特別な形です：${I('sii, abbi, sappi; siate, abbiate, sappiate')}（接続法から）。${I('Sii paziente!')}（我慢してね！）`,
    ],
    exH2: '代名詞と一緒に',
    exP: `${I('tu, noi, voi')} では代名詞を動詞の最後に付け、${I('Lei')} と ${I('Loro')} では動詞の前に置きます。`,
  }),
};

// ---------- costruzione dei blocchi ----------
function build(lang) {
  const I = mk(lang);
  const t = T[lang](I);
  const it = lang === 'it';
  const pth = (p) => (it ? `<th>${p}</th>` : `<th lang="it">${p}</th>`);
  const tbody = it ? '<tbody>' : '<tbody lang="it">';
  const table = (rows) =>
    `<table class="conj-table"><thead><tr><th>${t.inf}</th>${PERSONS.map(pth).join('')}</tr></thead>${tbody}${rows
      .map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join('')}</tr>`)
      .join('')}</tbody></table>`;
  const li = (arr) => `<ul>${arr.map((x) => `<li>${x}</li>`).join('')}</ul>`;
  const exAttr = it ? '' : ' lang="it"';

  const tabella = `<article class="lesson-box" id="tabella"><h2>${t.tabH2}</h2><p>${t.tabP}</p>${table(REGULAR)}${li(t.tabLi)}</article>`;

  const swap = `<table class="compare-table"><thead><tr>${t.swapHead.map((h) => `<th>${h}</th>`).join('')}</tr></thead><tbody><tr><th${exAttr}>tu</th><td lang="it">parl<strong>a</strong></td><td lang="it">prend<strong>i</strong>, part<strong>i</strong></td></tr><tr><th${exAttr}>Lei</th><td lang="it">parl<strong>i</strong></td><td lang="it">prend<strong>a</strong>, part<strong>a</strong></td></tr></tbody></table>`;

  const trucco = `<article class="lesson-box" id="trucco"><h2>${t.trH2}</h2><div class="example-grid"><div class="example"><strong>${t.fam1[0]}</strong><br>${t.fam1[1]}</div><div class="example"><strong>${t.fam2[0]}</strong><br>${t.fam2[1]}</div></div><h3>${t.swapH3}</h3>${swap}<p>${t.swapP}</p><p class="mini-note">${t.slogan}</p><p class="mini-note">${t.personal}</p></article>`;

  const irregolari = `<article class="lesson-box" id="irregolari"><h2>${t.irrH2}</h2><p>${t.irrP}</p>${table(IRREGULAR)}${li(t.irrLi)}</article>`;

  const esempi = `<article class="lesson-box" id="esempi"><h2>${t.exH2}</h2><p>${t.exP}</p><div class="example-grid">${EXAMPLES.map((e) => `<div class="example"${exAttr}>${e}</div>`).join('')}</div></article>`;

  const exercises = NEW_EXERCISES.map(
    ([ans, label, hint], k) =>
      `<div class="exercise" data-answer="${ans}" data-hint="${hint.replace(/"/g, '&quot;')}"><label${exAttr}>${11 + k}. ${label}</label><input autocomplete="off"><div class="feedback"></div></div>`,
  ).join('');

  return { t, tabella, trucco, irregolari, esempi, exercises };
}

function replaceOnce(html, re, repl, what, file) {
  if (!re.test(html)) throw new Error(`${file}: non trovo ${what}`);
  return html.replace(re, repl);
}

for (const [lang, file] of Object.entries(FILES)) {
  let html = readFileSync(file, 'utf8');
  if (html.includes('id="trucco"')) {
    console.log(`${lang}: già fatto`);
    continue;
  }
  const b = build(lang);
  html = replaceOnce(html, /<p class="lead">[\s\S]*?<\/p>/, `<p class="lead">${b.t.lead}</p>`, 'lead', file);
  html = replaceOnce(
    html,
    /<a href="#tabella">[^<]*<\/a>/,
    `<a href="#tabella">${b.t.nav[0]}</a><a href="#trucco">${b.t.nav[1]}</a><a href="#irregolari">${b.t.nav[2]}</a>`,
    'nav',
    file,
  );
  html = replaceOnce(
    html,
    /<article class="lesson-box" id="tabella">[\s\S]*?<\/article>/,
    () => b.tabella + b.trucco + b.irregolari,
    'tabella',
    file,
  );
  html = replaceOnce(html, /<article class="lesson-box" id="esempi">[\s\S]*?<\/article>/, () => b.esempi, 'esempi', file);
  html = replaceOnce(html, /<\/div><div class="score-card">/, () => `${b.exercises}</div><div class="score-card">`, 'esercizi', file);
  html = replaceOnce(html, /(id="score-text">[^<]*?)\b10\b/, '$120', 'punteggio', file);
  const n = (html.match(/class="exercise"/g) || []).length;
  if (n !== 20) throw new Error(`${file}: ${n} esercizi invece di 20`);
  writeFileSync(file, html);
  console.log(`${lang}: ok`);
}

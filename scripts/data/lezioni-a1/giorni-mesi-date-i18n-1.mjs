// «Giorni, mesi e date»: inglese, spagnolo, francese, tedesco.
// Le forme italiane restano in <em lang="it"> / <span lang="it">.

const mOf = '<span lang="it">Il mese di…</span>';
const faFra = '<span lang="it">Fra = tra</span>';

export default {
  en: {
    h1: 'Days, months and dates in Italian',
    card: 'Days of the week, months, seasons, dates, <span lang="it">ieri</span> and <span lang="it">domani</span>, <span lang="it">fa</span> and <span lang="it">tra</span>.',
    lead: 'The days of the week, the months and seasons, how to say the date and the words for when: yesterday, today, tomorrow, ago and in. With 30 exercises.',
    description:
      'Days of the week, months and dates in Italian made simple: lunedì or il lunedì, in agosto, il primo maggio, l’otto marzo, nel 2026, ieri and domani, fa, tra and da, and 30 exercises.',
    giorniH2: 'The days of the week',
    giorniP:
      'In Italy the week starts on Monday. Unlike in English, days are written with a small letter. They are all masculine except <em lang="it">la domenica</em> (Sunday). From <em lang="it">lunedì</em> to <em lang="it">venerdì</em> the stress falls on the last syllable, which carries an accent.',
    gOne: 'One particular day',
    gEvery: 'Every week',
    gFem: '<span lang="it">Domenica</span> is feminine',
    gPlural: 'Plural',
    giorniNote1:
      '<strong>With or without the article?</strong> Without the article it is one particular day, the next one: <em lang="it">sabato vado al cinema</em> (this Saturday). With the article it is a habit, every week: <em lang="it">il sabato vado al cinema</em> (on Saturdays). No preposition is needed before the day: <em lang="it">ci vediamo venerdì</em> (see you on Friday).',
    giorniNote2:
      '<strong>In the plural</strong> the days with an accent do not change: <em lang="it">il lunedì, i lunedì</em>. <em lang="it">Sabato</em> and <em lang="it">domenica</em> do: <em lang="it">i sabati, le domeniche</em>.',
    giorniNote3:
      '<strong>Where do the names come from?</strong> <em lang="it">Lunedì</em> is the day of the Moon (<em lang="it">Luna</em>), <em lang="it">martedì</em> of Mars, <em lang="it">mercoledì</em> of Mercury, <em lang="it">giovedì</em> of Jupiter, <em lang="it">venerdì</em> of Venus: <em lang="it">-dì</em> comes from Latin <em lang="la">dies</em>, day. <em lang="it">Sabato</em> comes from Hebrew <em>shabbat</em> and <em lang="it">domenica</em> from Latin <em lang="la">dies dominica</em>, the Lord’s day.',
    mesiH2: 'Months and seasons',
    mesiP:
      'Months are also written with a small letter and are all masculine: <em lang="it">un gennaio freddo, un agosto caldo</em>. There are four seasons.',
    mMonth: '<span lang="it">In</span> or <span lang="it">a</span> + month',
    mSeason: 'Seasons',
    mOf,
    mFromTo: 'From… to…',
    mesiNote1:
      '<strong><span lang="it">In</span> or <span lang="it">a</span>?</strong> With months both are fine: <em lang="it">in agosto</em> or <em lang="it">ad agosto</em> (<em lang="it">ad</em> before a vowel), <em lang="it">a maggio</em> or <em lang="it">in maggio</em>. With seasons you say <em lang="it">in estate, in inverno</em>, but also <em lang="it">d’estate, d’inverno</em>.',
    mesiNote2:
      '<strong>The gender of the seasons.</strong> <em lang="it">La primavera</em> (spring) and <em lang="it">l’estate</em> (summer) are feminine, <em lang="it">l’autunno</em> (autumn) and <em lang="it">l’inverno</em> (winter) are masculine. Astronomical seasons start around the 21st of the month (<em lang="it">il 21 marzo</em>), but in everyday life people think of the months in the table.',
    dateH2: 'How to say the date',
    dateP:
      'The date is said like this: article, day, month and year, always in this order. The day is an ordinary number (<em lang="it">il tre maggio</em>), not “the third”; only the first day of the month uses the ordinal: <em lang="it">il primo maggio</em>.',
    dAsk: 'Question',
    dAsk2: 'Informal question',
    dWeekday: 'Day and date',
    dBirthday: 'Birthday',
    dYear: 'Year',
    dLetter: 'In a letter',
    dateNote1:
      '<strong>Day first, then month.</strong> In Italy <em lang="it">05/12</em> is <em lang="it">il cinque dicembre</em> (5 December), not May 12.',
    dateNote2:
      '<strong><span lang="it">L’otto</span> and <span lang="it">l’undici</span>.</strong> <em lang="it">Otto</em> and <em lang="it">undici</em> begin with a vowel, so the article becomes <em lang="it">l’</em>: <em lang="it">l’otto marzo, l’undici settembre</em>.',
    dateNote3:
      '<strong>Years take the article:</strong> <em lang="it">nel 2019</em> (<em lang="it">in + il</em>, in 2019), <em lang="it">dal 2020 al 2024</em>. In a full date, though, the year follows the month with no article: <em lang="it">il 3 marzo 2026</em>. In a letter or a document the day has no article either: <em lang="it">Roma, 3 marzo 2026</em>.',
    quandoH2: 'Yesterday, today, tomorrow',
    quandoNote1:
      '<strong><span lang="it">Stamattina</span> and <span lang="it">stasera</span></strong> are single words: <em lang="it">questa mattina → stamattina</em> (this morning), <em lang="it">questa sera → stasera</em> (this evening). In the same way you say <em lang="it">stanotte</em> (tonight).',
    quandoNote2:
      '<strong><span lang="it">Scorso</span> (last) and <span lang="it">prossimo</span> (next) agree with the noun:</strong> <em lang="it">il mese scorso, la settimana scorsa</em>. <em lang="it">Prossimo</em> can also go before the noun: <em lang="it">la prossima settimana</em> = <em lang="it">la settimana prossima</em>.',
    freqH3: 'How often?',
    fEvery: 'Every day',
    fTimes: 'Per week',
    fMonth: 'Per month',
    fNever: 'Never',
    faH2: '<span lang="it">Fa</span>, <span lang="it">tra</span> and <span lang="it">da</span>',
    faP: '<em lang="it">Fa</em> (ago) looks back into the past and comes after the time expression: <em lang="it">due anni fa</em>. <em lang="it">Tra</em> (or <em lang="it">fra</em>: they are the same) looks forward into the future and comes before it: <em lang="it">tra due anni</em> (in two years).',
    faPast: 'In the past',
    faFuture: 'In the future',
    faFra,
    faDa: '<span lang="it">Da</span> + time',
    faNote:
      '<strong><span lang="it">Da</span> + time, with the present tense.</strong> When an action started in the past and is still going on, Italian uses the present with <em lang="it">da</em>: <em lang="it">studio italiano da due anni</em> (I have been studying Italian for two years). You do not say <em lang="it">per due anni</em>.',
    exIntro: '30 sentences in three parts. Type only what is missing: your answer is checked as you type.',
    part1H3: 'Part 1 · Days, months and seasons',
    part1P: 'Write the missing word.',
    part2H3: 'Part 2 · Dates',
    part2P: 'Complete the date. Write numbers in words.',
    part3H3: 'Part 3 · Yesterday, today, tomorrow, <span lang="it">fa</span> and <span lang="it">tra</span>',
    part3P: 'Write the missing word.',
  },
  es: {
    h1: 'Días, meses y fechas en italiano',
    card: 'Días de la semana, meses, estaciones, fechas, <span lang="it">ieri</span> y <span lang="it">domani</span>, <span lang="it">fa</span> y <span lang="it">tra</span>.',
    lead: 'Los días de la semana, los meses y las estaciones, cómo se dice la fecha y las palabras para decir cuándo: ayer, hoy, mañana, hace y dentro de. Con 30 ejercicios.',
    description:
      'Días de la semana, meses y fechas en italiano explicados fácil: lunedì o il lunedì, in agosto, il primo maggio, l’otto marzo, nel 2026, ieri y domani, fa, tra y da, y 30 ejercicios.',
    giorniH2: 'Los días de la semana',
    giorniP:
      'En Italia la semana empieza el lunes. Los días se escriben con minúscula, como en español, y son todos masculinos salvo <em lang="it">la domenica</em> (el domingo). De <em lang="it">lunedì</em> a <em lang="it">venerdì</em> llevan tilde en la última sílaba.',
    gOne: 'Un día concreto',
    gEvery: 'Todas las semanas',
    gFem: '<span lang="it">Domenica</span> es femenino',
    gPlural: 'Plural',
    giorniNote1:
      '<strong>¿Con o sin artículo?</strong> Sin artículo es un solo día, el más cercano: <em lang="it">sabato vado al cinema</em> (este sábado). Con artículo es una costumbre, todas las semanas: <em lang="it">il sabato vado al cinema</em> (los sábados). Delante del día no hace falta ninguna preposición: <em lang="it">ci vediamo venerdì</em> (nos vemos el viernes).',
    giorniNote2:
      '<strong>En plural</strong> los días con tilde no cambian: <em lang="it">il lunedì, i lunedì</em>. <em lang="it">Sabato</em> y <em lang="it">domenica</em>, en cambio, sí: <em lang="it">i sabati, le domeniche</em>.',
    giorniNote3:
      '<strong>¿De dónde vienen los nombres?</strong> Como en español: <em lang="it">lunedì</em> es el día de la Luna, <em lang="it">martedì</em> de Marte, <em lang="it">mercoledì</em> de Mercurio, <em lang="it">giovedì</em> de Júpiter y <em lang="it">venerdì</em> de Venus; <em lang="it">-dì</em> viene del latín <em lang="la">dies</em>, día. <em lang="it">Sabato</em> viene del hebreo <em>shabbat</em> y <em lang="it">domenica</em> del latín <em lang="la">dies dominica</em>, el día del Señor.',
    mesiH2: 'Los meses y las estaciones',
    mesiP:
      'También los meses se escriben con minúscula y son todos masculinos: <em lang="it">un gennaio freddo, un agosto caldo</em>. Las estaciones son cuatro.',
    mMonth: '<span lang="it">In</span> o <span lang="it">a</span> + mes',
    mSeason: 'Las estaciones',
    mOf,
    mFromTo: 'De… a…',
    mesiNote1:
      '<strong>¿<span lang="it">In</span> o <span lang="it">a</span>?</strong> Con los meses valen las dos: <em lang="it">in agosto</em> o <em lang="it">ad agosto</em> (<em lang="it">ad</em> delante de vocal), <em lang="it">a maggio</em> o <em lang="it">in maggio</em>. Con las estaciones se dice <em lang="it">in estate, in inverno</em>, pero también <em lang="it">d’estate, d’inverno</em>.',
    mesiNote2:
      '<strong>El género de las estaciones.</strong> <em lang="it">La primavera</em> y <em lang="it">l’estate</em> (el verano) son femeninas; <em lang="it">l’autunno</em> y <em lang="it">l’inverno</em>, masculinas. Las estaciones astronómicas empiezan hacia el día 21 del mes (<em lang="it">il 21 marzo</em>), pero en la vida diaria se piensa en los meses de la tabla.',
    dateH2: 'Cómo se dice la fecha',
    dateP:
      'La fecha se dice así: artículo, día, mes y año, siempre en este orden. El día es un número normal (<em lang="it">il tre maggio</em>); solo el primer día del mes usa el ordinal: <em lang="it">il primo maggio</em>.',
    dAsk: 'Pregunta',
    dAsk2: 'Pregunta informal',
    dWeekday: 'Día y fecha',
    dBirthday: 'Cumpleaños',
    dYear: 'Año',
    dLetter: 'En una carta',
    dateNote1:
      '<strong>Primero el día y luego el mes</strong>, como en español: <em lang="it">05/12</em> es <em lang="it">il cinque dicembre</em>.',
    dateNote2:
      '<strong><span lang="it">L’otto</span> y <span lang="it">l’undici</span>.</strong> <em lang="it">Otto</em> y <em lang="it">undici</em> empiezan por vocal, así que el artículo se convierte en <em lang="it">l’</em>: <em lang="it">l’otto marzo, l’undici settembre</em>.',
    dateNote3:
      '<strong>Los años llevan artículo:</strong> <em lang="it">nel 2019</em> (<em lang="it">in + il</em>, en 2019), <em lang="it">dal 2020 al 2024</em>. En la fecha completa, en cambio, el año va después del mes, sin artículo y sin <em lang="it">di</em>: <em lang="it">il 3 marzo 2026</em>. En una carta o un documento tampoco el día lleva artículo: <em lang="it">Roma, 3 marzo 2026</em>.',
    quandoH2: 'Ayer, hoy, mañana',
    quandoNote1:
      '<strong><span lang="it">Stamattina</span> y <span lang="it">stasera</span></strong> son una sola palabra: <em lang="it">questa mattina → stamattina</em> (esta mañana), <em lang="it">questa sera → stasera</em> (esta tarde o esta noche). Del mismo modo se dice <em lang="it">stanotte</em> (esta noche, durante la noche).',
    quandoNote2:
      '<strong><span lang="it">Scorso</span> (pasado) y <span lang="it">prossimo</span> (próximo) concuerdan con el sustantivo:</strong> <em lang="it">il mese scorso, la settimana scorsa</em>. <em lang="it">Prossimo</em> también puede ir delante: <em lang="it">la prossima settimana</em> = <em lang="it">la settimana prossima</em>.',
    freqH3: '¿Con qué frecuencia?',
    fEvery: 'Todos los días',
    fTimes: 'A la semana',
    fMonth: 'Al mes',
    fNever: 'Nunca',
    faH2: '<span lang="it">Fa</span>, <span lang="it">tra</span> y <span lang="it">da</span>',
    faP: '<em lang="it">Fa</em> (hace) mira hacia atrás, al pasado, y va después de la expresión de tiempo: <em lang="it">due anni fa</em> (hace dos años). <em lang="it">Tra</em> (o <em lang="it">fra</em>: son iguales) mira hacia delante, al futuro, y va antes: <em lang="it">tra due anni</em> (dentro de dos años).',
    faPast: 'En el pasado',
    faFuture: 'En el futuro',
    faFra,
    faDa: '<span lang="it">Da</span> + tiempo',
    faNote:
      '<strong><span lang="it">Da</span> + tiempo, con el presente.</strong> Cuando una acción empezó en el pasado y sigue ahora, se usa el presente con <em lang="it">da</em>: <em lang="it">studio italiano da due anni</em> (estudio italiano desde hace dos años). No se dice <em lang="it">per due anni</em>.',
    exIntro: '30 frases en tres partes. Escribe solo lo que falta: la corrección aparece mientras escribes.',
    part1H3: 'Parte 1 · Días, meses y estaciones',
    part1P: 'Escribe la palabra que falta.',
    part2H3: 'Parte 2 · Las fechas',
    part2P: 'Completa la fecha. Los números se escriben en letras.',
    part3H3: 'Parte 3 · Ayer, hoy, mañana, <span lang="it">fa</span> y <span lang="it">tra</span>',
    part3P: 'Escribe la palabra que falta.',
  },
  fr: {
    h1: 'Jours, mois et dates en italien',
    card: 'Jours de la semaine, mois, saisons, dates, <span lang="it">ieri</span> et <span lang="it">domani</span>, <span lang="it">fa</span> et <span lang="it">tra</span>.',
    lead: 'Les jours de la semaine, les mois et les saisons, comment dire la date et les mots pour dire quand : hier, aujourd’hui, demain, il y a et dans. Avec 30 exercices.',
    description:
      'Jours de la semaine, mois et dates en italien expliqués simplement : lunedì ou il lunedì, in agosto, il primo maggio, l’otto marzo, nel 2026, ieri et domani, fa, tra et da, et 30 exercices.',
    giorniH2: 'Les jours de la semaine',
    giorniP:
      'En Italie, la semaine commence le lundi. Les jours s’écrivent avec une minuscule, comme en français, et sont tous masculins sauf <em lang="it">la domenica</em> (le dimanche). De <em lang="it">lunedì</em> à <em lang="it">venerdì</em>, ils portent un accent sur la dernière syllabe.',
    gOne: 'Un jour précis',
    gEvery: 'Chaque semaine',
    gFem: '<span lang="it">Domenica</span> est féminin',
    gPlural: 'Pluriel',
    giorniNote1:
      '<strong>Avec ou sans article ?</strong> Sans article, il s’agit d’un seul jour, le plus proche : <em lang="it">sabato vado al cinema</em> (samedi). Avec l’article, c’est une habitude, chaque semaine : <em lang="it">il sabato vado al cinema</em> (le samedi). Comme en français, pas de préposition devant le jour : <em lang="it">ci vediamo venerdì</em> (à vendredi).',
    giorniNote2:
      '<strong>Au pluriel</strong>, les jours avec accent ne changent pas : <em lang="it">il lunedì, i lunedì</em>. <em lang="it">Sabato</em> et <em lang="it">domenica</em>, eux, changent : <em lang="it">i sabati, le domeniche</em>.',
    giorniNote3:
      '<strong>D’où viennent les noms ?</strong> Comme en français : <em lang="it">lunedì</em> est le jour de la Lune, <em lang="it">martedì</em> de Mars, <em lang="it">mercoledì</em> de Mercure, <em lang="it">giovedì</em> de Jupiter, <em lang="it">venerdì</em> de Vénus ; <em lang="it">-dì</em> vient du latin <em lang="la">dies</em>, jour. <em lang="it">Sabato</em> vient de l’hébreu <em>shabbat</em> et <em lang="it">domenica</em> du latin <em lang="la">dies dominica</em>, le jour du Seigneur.',
    mesiH2: 'Les mois et les saisons',
    mesiP:
      'Les mois s’écrivent eux aussi avec une minuscule et sont tous masculins : <em lang="it">un gennaio freddo, un agosto caldo</em>. Il y a quatre saisons.',
    mMonth: '<span lang="it">In</span> ou <span lang="it">a</span> + mois',
    mSeason: 'Les saisons',
    mOf,
    mFromTo: 'De… à…',
    mesiNote1:
      '<strong><span lang="it">In</span> ou <span lang="it">a</span> ?</strong> Avec les mois, les deux sont possibles : <em lang="it">in agosto</em> ou <em lang="it">ad agosto</em> (<em lang="it">ad</em> devant une voyelle), <em lang="it">a maggio</em> ou <em lang="it">in maggio</em>. Avec les saisons, on dit <em lang="it">in estate, in inverno</em>, mais aussi <em lang="it">d’estate, d’inverno</em>.',
    mesiNote2:
      '<strong>Le genre des saisons.</strong> <em lang="it">La primavera</em> (le printemps) et <em lang="it">l’estate</em> (l’été) sont féminins, <em lang="it">l’autunno</em> et <em lang="it">l’inverno</em> masculins. Les saisons astronomiques commencent vers le 21 du mois (<em lang="it">il 21 marzo</em>), mais dans la vie de tous les jours on pense aux mois du tableau.',
    dateH2: 'Comment dire la date',
    dateP:
      'La date se dit ainsi : article, jour, mois et année, toujours dans cet ordre. Le jour est un nombre ordinaire (<em lang="it">il tre maggio</em>) ; seul le premier jour du mois prend l’ordinal : <em lang="it">il primo maggio</em>, comme « le premier mai ».',
    dAsk: 'Question',
    dAsk2: 'Question familière',
    dWeekday: 'Jour et date',
    dBirthday: 'Anniversaire',
    dYear: 'Année',
    dLetter: 'Dans une lettre',
    dateNote1:
      '<strong>D’abord le jour, puis le mois</strong>, comme en français : <em lang="it">05/12</em> est <em lang="it">il cinque dicembre</em>.',
    dateNote2:
      '<strong><span lang="it">L’otto</span> et <span lang="it">l’undici</span>.</strong> <em lang="it">Otto</em> et <em lang="it">undici</em> commencent par une voyelle, l’article devient donc <em lang="it">l’</em> : <em lang="it">l’otto marzo, l’undici settembre</em>.',
    dateNote3:
      '<strong>Les années prennent l’article :</strong> <em lang="it">nel 2019</em> (<em lang="it">in + il</em>, en 2019), <em lang="it">dal 2020 al 2024</em>. Dans une date complète, en revanche, l’année suit le mois sans article : <em lang="it">il 3 marzo 2026</em>. Dans une lettre ou un document, le jour n’a pas d’article non plus : <em lang="it">Roma, 3 marzo 2026</em>.',
    quandoH2: 'Hier, aujourd’hui, demain',
    quandoNote1:
      '<strong><span lang="it">Stamattina</span> et <span lang="it">stasera</span></strong> s’écrivent en un seul mot : <em lang="it">questa mattina → stamattina</em> (ce matin), <em lang="it">questa sera → stasera</em> (ce soir). De la même façon, on dit <em lang="it">stanotte</em> (cette nuit).',
    quandoNote2:
      '<strong><span lang="it">Scorso</span> (dernier) et <span lang="it">prossimo</span> (prochain) s’accordent avec le nom :</strong> <em lang="it">il mese scorso, la settimana scorsa</em>. <em lang="it">Prossimo</em> peut aussi se placer devant le nom : <em lang="it">la prossima settimana</em> = <em lang="it">la settimana prossima</em>.',
    freqH3: 'Combien de fois ?',
    fEvery: 'Chaque jour',
    fTimes: 'Par semaine',
    fMonth: 'Par mois',
    fNever: 'Jamais',
    faH2: '<span lang="it">Fa</span>, <span lang="it">tra</span> et <span lang="it">da</span>',
    faP: '<em lang="it">Fa</em> (il y a) regarde en arrière, vers le passé, et se place après l’expression de temps : <em lang="it">due anni fa</em> (il y a deux ans). <em lang="it">Tra</em> (ou <em lang="it">fra</em> : c’est pareil) regarde en avant, vers le futur, et se place devant : <em lang="it">tra due anni</em> (dans deux ans).',
    faPast: 'Dans le passé',
    faFuture: 'Dans le futur',
    faFra,
    faDa: '<span lang="it">Da</span> + durée',
    faNote:
      '<strong><span lang="it">Da</span> + durée, avec le présent.</strong> Quand une action a commencé dans le passé et continue encore, on emploie le présent avec <em lang="it">da</em>, comme « depuis » : <em lang="it">studio italiano da due anni</em> (j’étudie l’italien depuis deux ans). On ne dit pas <em lang="it">per due anni</em>.',
    exIntro:
      '30 phrases en trois parties. Écrivez seulement ce qui manque : la correction s’affiche pendant que vous écrivez.',
    part1H3: 'Partie 1 · Jours, mois et saisons',
    part1P: 'Écrivez le mot qui manque.',
    part2H3: 'Partie 2 · Les dates',
    part2P: 'Complétez la date. Les nombres s’écrivent en lettres.',
    part3H3: 'Partie 3 · Hier, aujourd’hui, demain, <span lang="it">fa</span> et <span lang="it">tra</span>',
    part3P: 'Écrivez le mot qui manque.',
  },
  de: {
    h1: 'Wochentage, Monate und Datum auf Italienisch',
    card: 'Wochentage, Monate, Jahreszeiten, Datum, <span lang="it">ieri</span> und <span lang="it">domani</span>, <span lang="it">fa</span> und <span lang="it">tra</span>.',
    lead: 'Die Wochentage, die Monate und Jahreszeiten, wie man das Datum sagt und die Wörter für „wann“: gestern, heute, morgen, vor und in. Mit 30 Übungen.',
    description:
      'Wochentage, Monate und Datum auf Italienisch einfach erklärt: lunedì oder il lunedì, in agosto, il primo maggio, l’otto marzo, nel 2026, ieri und domani, fa, tra und da, mit 30 Übungen.',
    giorniH2: 'Die Wochentage',
    giorniP:
      'In Italien beginnt die Woche am Montag. Anders als im Deutschen schreibt man die Tage klein. Sie sind alle maskulin, außer <em lang="it">la domenica</em> (Sonntag). Von <em lang="it">lunedì</em> bis <em lang="it">venerdì</em> liegt die Betonung auf der letzten Silbe, die einen Akzent trägt.',
    gOne: 'Ein bestimmter Tag',
    gEvery: 'Jede Woche',
    gFem: '<span lang="it">Domenica</span> ist feminin',
    gPlural: 'Plural',
    giorniNote1:
      '<strong>Mit oder ohne Artikel?</strong> Ohne Artikel ist es ein einziger Tag, der nächste: <em lang="it">sabato vado al cinema</em> (am Samstag). Mit Artikel ist es eine Gewohnheit, jede Woche: <em lang="it">il sabato vado al cinema</em> (samstags). Vor dem Tag steht keine Präposition: <em lang="it">ci vediamo venerdì</em> (bis Freitag).',
    giorniNote2:
      '<strong>Im Plural</strong> bleiben die Tage mit Akzent gleich: <em lang="it">il lunedì, i lunedì</em>. <em lang="it">Sabato</em> und <em lang="it">domenica</em> ändern sich dagegen: <em lang="it">i sabati, le domeniche</em>.',
    giorniNote3:
      '<strong>Woher kommen die Namen?</strong> <em lang="it">Lunedì</em> ist der Tag des Mondes (<em lang="it">Luna</em>), <em lang="it">martedì</em> des Mars, <em lang="it">mercoledì</em> des Merkur, <em lang="it">giovedì</em> des Jupiter, <em lang="it">venerdì</em> der Venus; <em lang="it">-dì</em> kommt vom lateinischen <em lang="la">dies</em>, Tag. <em lang="it">Sabato</em> stammt vom hebräischen <em>shabbat</em>, <em lang="it">domenica</em> vom lateinischen <em lang="la">dies dominica</em>, dem Tag des Herrn.',
    mesiH2: 'Monate und Jahreszeiten',
    mesiP:
      'Auch die Monate schreibt man klein, und sie sind alle maskulin: <em lang="it">un gennaio freddo, un agosto caldo</em>. Es gibt vier Jahreszeiten.',
    mMonth: '<span lang="it">In</span> oder <span lang="it">a</span> + Monat',
    mSeason: 'Jahreszeiten',
    mOf,
    mFromTo: 'Von… bis…',
    mesiNote1:
      '<strong><span lang="it">In</span> oder <span lang="it">a</span>?</strong> Bei Monaten geht beides: <em lang="it">in agosto</em> oder <em lang="it">ad agosto</em> (<em lang="it">ad</em> vor Vokal), <em lang="it">a maggio</em> oder <em lang="it">in maggio</em>. Bei Jahreszeiten sagt man <em lang="it">in estate, in inverno</em>, aber auch <em lang="it">d’estate, d’inverno</em>.',
    mesiNote2:
      '<strong>Das Geschlecht der Jahreszeiten.</strong> <em lang="it">La primavera</em> (Frühling) und <em lang="it">l’estate</em> (Sommer) sind feminin, <em lang="it">l’autunno</em> (Herbst) und <em lang="it">l’inverno</em> (Winter) maskulin. Die astronomischen Jahreszeiten beginnen um den 21. des Monats (<em lang="it">il 21 marzo</em>), im Alltag denkt man aber an die Monate aus der Tabelle.',
    dateH2: 'So sagt man das Datum',
    dateP:
      'Das Datum sagt man so: Artikel, Tag, Monat und Jahr, immer in dieser Reihenfolge. Der Tag ist eine normale Grundzahl (<em lang="it">il tre maggio</em>), nicht wie im Deutschen eine Ordnungszahl. Nur der erste Tag des Monats verwendet die Ordnungszahl: <em lang="it">il primo maggio</em>.',
    dAsk: 'Frage',
    dAsk2: 'Umgangssprachliche Frage',
    dWeekday: 'Tag und Datum',
    dBirthday: 'Geburtstag',
    dYear: 'Jahr',
    dLetter: 'In einem Brief',
    dateNote1:
      '<strong>Erst der Tag, dann der Monat</strong>, wie im Deutschen: <em lang="it">05/12</em> ist <em lang="it">il cinque dicembre</em>.',
    dateNote2:
      '<strong><span lang="it">L’otto</span> und <span lang="it">l’undici</span>.</strong> <em lang="it">Otto</em> und <em lang="it">undici</em> beginnen mit einem Vokal, deshalb wird der Artikel zu <em lang="it">l’</em>: <em lang="it">l’otto marzo, l’undici settembre</em>.',
    dateNote3:
      '<strong>Jahreszahlen brauchen den Artikel:</strong> <em lang="it">nel 2019</em> (<em lang="it">in + il</em>, im Jahr 2019), <em lang="it">dal 2020 al 2024</em>. Im vollständigen Datum steht das Jahr dagegen ohne Artikel nach dem Monat: <em lang="it">il 3 marzo 2026</em>. In einem Brief oder Dokument hat auch der Tag keinen Artikel: <em lang="it">Roma, 3 marzo 2026</em>.',
    quandoH2: 'Gestern, heute, morgen',
    quandoNote1:
      '<strong><span lang="it">Stamattina</span> und <span lang="it">stasera</span></strong> sind ein einziges Wort: <em lang="it">questa mattina → stamattina</em> (heute Morgen), <em lang="it">questa sera → stasera</em> (heute Abend). Genauso sagt man <em lang="it">stanotte</em> (heute Nacht).',
    quandoNote2:
      '<strong><span lang="it">Scorso</span> (letzte) und <span lang="it">prossimo</span> (nächste) richten sich nach dem Substantiv:</strong> <em lang="it">il mese scorso, la settimana scorsa</em>. <em lang="it">Prossimo</em> kann auch vor dem Substantiv stehen: <em lang="it">la prossima settimana</em> = <em lang="it">la settimana prossima</em>.',
    freqH3: 'Wie oft?',
    fEvery: 'Jeden Tag',
    fTimes: 'Pro Woche',
    fMonth: 'Pro Monat',
    fNever: 'Nie',
    faH2: '<span lang="it">Fa</span>, <span lang="it">tra</span> und <span lang="it">da</span>',
    faP: '<em lang="it">Fa</em> (vor) blickt zurück in die Vergangenheit und steht nach der Zeitangabe: <em lang="it">due anni fa</em> (vor zwei Jahren). <em lang="it">Tra</em> (oder <em lang="it">fra</em>, beide bedeuten dasselbe) blickt nach vorn in die Zukunft und steht davor: <em lang="it">tra due anni</em> (in zwei Jahren).',
    faPast: 'Vergangenheit',
    faFuture: 'Zukunft',
    faFra,
    faDa: '<span lang="it">Da</span> + Zeitraum',
    faNote:
      '<strong><span lang="it">Da</span> + Zeitraum, mit dem Präsens.</strong> Wenn eine Handlung in der Vergangenheit begonnen hat und noch andauert, verwendet man wie im Deutschen das Präsens, mit <em lang="it">da</em> (seit): <em lang="it">studio italiano da due anni</em> (ich lerne seit zwei Jahren Italienisch). Man sagt nicht <em lang="it">per due anni</em>.',
    exIntro: '30 Sätze in drei Teilen. Schreib nur, was fehlt: Die Korrektur erscheint schon beim Tippen.',
    part1H3: 'Teil 1 · Wochentage, Monate und Jahreszeiten',
    part1P: 'Schreib das fehlende Wort.',
    part2H3: 'Teil 2 · Das Datum',
    part2P: 'Ergänze das Datum. Zahlen schreibst du in Worten.',
    part3H3: 'Teil 3 · Gestern, heute, morgen, <span lang="it">fa</span> und <span lang="it">tra</span>',
    part3P: 'Schreib das fehlende Wort.',
  },
};

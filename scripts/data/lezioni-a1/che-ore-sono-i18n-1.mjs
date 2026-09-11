// «Che ore sono? L’ora in italiano»: inglese, spagnolo, francese, tedesco.
// Le forme italiane restano in <em lang="it"> / <span lang="it">.

const qAll = '<span lang="it">All’una</span>';
const qA = '<span lang="it">A mezzogiorno, a mezzanotte</span>';

export default {
  en: {
    h1: 'Telling the time in Italian',
    card: 'Asking and telling the time, <span lang="it">a che ora</span>, timetables and parts of the day.',
    lead: 'Asking and telling the time, making an appointment, reading a train timetable. This lesson covers the rules, the parts of the day and 30 exercises.',
    description:
      'Telling the time in Italian made simple: che ore sono?, è l’una and sono le due, e un quarto, e mezza, meno dieci, a che ora?, alle and all’, the 24-hour clock and 30 exercises.',
    oraH2: 'Asking and telling the time',
    oraP: 'There are two ways to ask the time, and both are correct: <em lang="it">Che ore sono?</em> and <em lang="it">Che ora è?</em> In the answer we use <em lang="it">essere</em> and the feminine article, because we are thinking of the word <em lang="it">ore</em> (hours): <em lang="it">sono le tre</em>.',
    oraNote1:
      '<strong>Why <span lang="it">è l’una</span> but <span lang="it">sono le due</span>?</strong> One o’clock is a single hour, so the verb is singular: <em lang="it">è l’una</em>. From two o’clock on there is more than one hour, so the verb is plural: <em lang="it">sono le due, sono le dieci</em>.',
    oraNote2:
      '<strong><span lang="it">Mezzogiorno</span> (midday) and <span lang="it">mezzanotte</span> (midnight)</strong> take no article: <em lang="it">è mezzogiorno, è mezzanotte</em>. For 12:00 you can also say <em lang="it">sono le dodici</em>.',
    minH2: 'Minutes: <span lang="it">e, meno, un quarto, mezza</span>',
    minP: 'After the hour, add the minutes with <em lang="it">e</em> (and). After half past, you can also say how many minutes are left until the next hour, with <em lang="it">meno</em> (minus).',
    minNote1:
      '<strong><span lang="it">Mezza</span> or <span lang="it">mezzo</span>?</strong> Both are fine: <em lang="it">le tre e mezza</em>, <em lang="it">le tre e mezzo</em>. With a quarter you need <em lang="it">un</em>: <em lang="it">le tre e un quarto</em>.',
    minNote2:
      '<strong><span lang="it">Meno</span> means that some minutes are missing.</strong> <em lang="it">Sono le quattro meno venti</em> = <em lang="it">mancano venti minuti alle quattro</em> (twenty to four). <em lang="it">Meno</em> is usually used when there are 20 minutes or fewer to go.',
    quandoH2: 'At what time? <span lang="it">Alle, all’, a mezzogiorno</span>',
    quandoP:
      'To say when something happens, use <em lang="it">a</em> + article: <em lang="it">alle</em> (<em lang="it">a + le</em>) with almost every hour, <em lang="it">all’</em> (<em lang="it">a + l’</em>) with one o’clock. With <em lang="it">mezzogiorno</em> and <em lang="it">mezzanotte</em>, <em lang="it">a</em> is enough.',
    qAsk: 'Question',
    qAlle: '<span lang="it">Alle</span> + hour',
    qAll,
    qA,
    qDalle: 'From… to…',
    qVerso: 'Roughly',
    qPunto: 'Exactly',
    qRitardo: 'Late',
    quandoNote:
      '<strong><span lang="it">Che ore sono?</span> or <span lang="it">A che ora?</span></strong> <em lang="it">Che ore sono?</em> asks the time right now: <em lang="it">sono le otto</em>. <em lang="it">A che ora…?</em> asks when something happens: <em lang="it">alle otto</em>.',
    h24H2: 'Everyday time and official time',
    h24P: 'With friends and family Italians use the hours from 1 to 12 and, if needed, add the part of the day: <em lang="it">le otto di mattina, le otto di sera</em>. Official timetables (trains, shops, offices, television) use the 24-hour clock, and the minutes are said as numbers.',
    h24Note:
      '<strong>No <span lang="it">quarto</span>, <span lang="it">mezza</span> or <span lang="it">meno</span> in official times.</strong> The 17:45 train leaves <em lang="it">alle diciassette e quarantacinque</em>, not <em lang="it">alle sei meno un quarto</em>.',
    dayH2: 'Parts of the day',
    dayNote1:
      '<strong><span lang="it">Di mattina, del pomeriggio, di sera, di notte</span>.</strong> With the hour you say <em lang="it">le otto di mattina</em> (or <em lang="it">del mattino</em>), <em lang="it">le tre del pomeriggio</em>, <em lang="it">le nove di sera</em>, <em lang="it">le due di notte</em>. The times in the table are only a guide.',
    dayNote2:
      '<strong><span lang="it">Buongiorno, buonasera, buonanotte</span>.</strong> <em lang="it">Buongiorno</em> is used in the morning and until early afternoon, <em lang="it">buonasera</em> from the afternoon on. <em lang="it">Buonanotte</em> is only said when going to bed or saying goodbye late at night.',
    exIntro: '30 sentences in three parts. Type only what is missing: your answer is checked as you type.',
    part1H3: 'Part 1 · <span lang="it">Che ore sono?</span>',
    part1P: 'Look at the time in brackets and complete the answer.',
    part2H3: 'Part 2 · At what time?',
    part2P: 'Write the missing word.',
    part3H3: 'Part 3 · Official time and parts of the day',
    part3P: 'Read the time and complete the sentence.',
  },
  es: {
    h1: 'La hora en italiano',
    card: 'Preguntar y decir la hora, <span lang="it">a che ora</span>, horarios y partes del día.',
    lead: 'Preguntar y decir la hora, quedar con alguien, leer el horario de un tren. Aquí tienes las reglas, las partes del día y 30 ejercicios.',
    description:
      'La hora en italiano explicada fácil: che ore sono?, è l’una y sono le due, e un quarto, e mezza, meno dieci, a che ora?, alle y all’, el horario oficial y 30 ejercicios.',
    oraH2: 'Preguntar y decir la hora',
    oraP: 'Para preguntar la hora hay dos preguntas, y las dos son correctas: <em lang="it">Che ore sono?</em> y <em lang="it">Che ora è?</em> En la respuesta usamos <em lang="it">essere</em> y el artículo femenino, porque pensamos en la palabra <em lang="it">ore</em> (horas): <em lang="it">sono le tre</em>, igual que «son las tres».',
    oraNote1:
      '<strong>¿Por qué <span lang="it">è l’una</span> pero <span lang="it">sono le due</span>?</strong> Como en español: la una es una sola hora, así que el verbo va en singular (<em lang="it">è l’una</em>). A partir de las dos hay más de una hora y el verbo va en plural: <em lang="it">sono le due, sono le dieci</em>.',
    oraNote2:
      '<strong><span lang="it">Mezzogiorno</span> (mediodía) y <span lang="it">mezzanotte</span> (medianoche)</strong> no llevan artículo: <em lang="it">è mezzogiorno, è mezzanotte</em>. Para las 12:00 también se dice <em lang="it">sono le dodici</em>.',
    minH2: 'Los minutos: <span lang="it">e, meno, un quarto, mezza</span>',
    minP: 'Después de la hora se añaden los minutos con <em lang="it">e</em> (y). Pasada la media hora también se puede decir cuántos minutos faltan para la hora siguiente, con <em lang="it">meno</em> (menos).',
    minNote1:
      '<strong>¿<span lang="it">Mezza</span> o <span lang="it">mezzo</span>?</strong> Las dos son correctas: <em lang="it">le tre e mezza</em>, <em lang="it">le tre e mezzo</em>. Con el cuarto, en cambio, hace falta <em lang="it">un</em>: <em lang="it">le tre e un quarto</em>.',
    minNote2:
      '<strong><span lang="it">Meno</span> significa que faltan minutos.</strong> <em lang="it">Sono le quattro meno venti</em> = <em lang="it">mancano venti minuti alle quattro</em> (faltan veinte para las cuatro). Normalmente se usa <em lang="it">meno</em> cuando faltan 20 minutos o menos.',
    quandoH2: '¿A qué hora? <span lang="it">Alle, all’, a mezzogiorno</span>',
    quandoP:
      'Para decir cuándo pasa algo usamos <em lang="it">a</em> + artículo: <em lang="it">alle</em> (<em lang="it">a + le</em>) con casi todas las horas y <em lang="it">all’</em> (<em lang="it">a + l’</em>) con la una. Con <em lang="it">mezzogiorno</em> y <em lang="it">mezzanotte</em> basta <em lang="it">a</em>.',
    qAsk: 'Pregunta',
    qAlle: '<span lang="it">Alle</span> + hora',
    qAll,
    qA,
    qDalle: 'De… a…',
    qVerso: 'Más o menos',
    qPunto: 'En punto',
    qRitardo: 'Con retraso',
    quandoNote:
      '<strong>¿<span lang="it">Che ore sono?</span> o <span lang="it">A che ora?</span></strong> <em lang="it">Che ore sono?</em> pregunta la hora de ahora: <em lang="it">sono le otto</em>. <em lang="it">A che ora…?</em> pregunta cuándo pasa algo: <em lang="it">alle otto</em>.',
    h24H2: 'La hora de cada día y la hora oficial',
    h24P: 'Con amigos y familia se usan las horas del 1 al 12 y, si hace falta, se añade la parte del día: <em lang="it">le otto di mattina, le otto di sera</em>. En los horarios oficiales (trenes, tiendas, oficinas, televisión) se usan las 24 horas y los minutos se dicen con el número.',
    h24Note:
      '<strong>En la hora oficial, nada de <span lang="it">quarto</span>, <span lang="it">mezza</span> ni <span lang="it">meno</span>.</strong> El tren de las 17:45 sale <em lang="it">alle diciassette e quarantacinque</em>, no <em lang="it">alle sei meno un quarto</em>.',
    dayH2: 'Las partes del día',
    dayNote1:
      '<strong><span lang="it">Di mattina, del pomeriggio, di sera, di notte</span>.</strong> Con la hora se dice <em lang="it">le otto di mattina</em> (o <em lang="it">del mattino</em>), <em lang="it">le tre del pomeriggio</em>, <em lang="it">le nove di sera</em>, <em lang="it">le due di notte</em>. Las horas de la tabla son orientativas.',
    dayNote2:
      '<strong><span lang="it">Buongiorno, buonasera, buonanotte</span>.</strong> <em lang="it">Buongiorno</em> se usa por la mañana y hasta primera hora de la tarde; <em lang="it">buonasera</em>, de la tarde en adelante. <em lang="it">Buonanotte</em> solo se dice al irse a dormir o al despedirse muy tarde por la noche.',
    exIntro: '30 frases en tres partes. Escribe solo lo que falta: la corrección aparece mientras escribes.',
    part1H3: 'Parte 1 · <span lang="it">Che ore sono?</span>',
    part1P: 'Mira la hora entre paréntesis y completa la respuesta.',
    part2H3: 'Parte 2 · ¿A qué hora?',
    part2P: 'Escribe la palabra que falta.',
    part3H3: 'Parte 3 · Hora oficial y partes del día',
    part3P: 'Lee la hora y completa la frase.',
  },
  fr: {
    h1: 'L’heure en italien',
    card: 'Demander et dire l’heure, <span lang="it">a che ora</span>, horaires et moments de la journée.',
    lead: 'Demander et dire l’heure, fixer un rendez-vous, lire un horaire de train. Vous trouverez ici les règles, les moments de la journée et 30 exercices.',
    description:
      'L’heure en italien expliquée simplement : che ore sono?, è l’una et sono le due, e un quarto, e mezza, meno dieci, a che ora?, alle et all’, l’heure officielle et 30 exercices.',
    oraH2: 'Demander et dire l’heure',
    oraP: 'Pour demander l’heure, il existe deux questions, toutes deux correctes : <em lang="it">Che ore sono?</em> et <em lang="it">Che ora è?</em> Dans la réponse, on utilise <em lang="it">essere</em> et l’article féminin, car on pense au mot <em lang="it">ore</em> (heures) : <em lang="it">sono le tre</em>.',
    oraNote1:
      '<strong>Pourquoi <span lang="it">è l’una</span> mais <span lang="it">sono le due</span> ?</strong> Une heure est une seule heure, le verbe est donc au singulier : <em lang="it">è l’una</em>. À partir de deux heures, il y en a plusieurs et le verbe passe au pluriel : <em lang="it">sono le due, sono le dieci</em>.',
    oraNote2:
      '<strong><span lang="it">Mezzogiorno</span> (midi) et <span lang="it">mezzanotte</span> (minuit)</strong> n’ont pas d’article : <em lang="it">è mezzogiorno, è mezzanotte</em>. Pour 12 h, on dit aussi <em lang="it">sono le dodici</em>.',
    minH2: 'Les minutes : <span lang="it">e, meno, un quarto, mezza</span>',
    minP: 'Après l’heure, on ajoute les minutes avec <em lang="it">e</em> (et). Après la demie, on peut aussi dire combien de minutes il manque avant l’heure suivante, avec <em lang="it">meno</em> (moins).',
    minNote1:
      '<strong><span lang="it">Mezza</span> ou <span lang="it">mezzo</span> ?</strong> Les deux sont corrects : <em lang="it">le tre e mezza</em>, <em lang="it">le tre e mezzo</em>. Avec le quart, en revanche, il faut <em lang="it">un</em> : <em lang="it">le tre e un quarto</em>.',
    minNote2:
      '<strong><span lang="it">Meno</span> indique qu’il manque des minutes.</strong> <em lang="it">Sono le quattro meno venti</em> = <em lang="it">mancano venti minuti alle quattro</em> (quatre heures moins vingt). On emploie en général <em lang="it">meno</em> quand il reste 20 minutes ou moins.',
    quandoH2: 'À quelle heure ? <span lang="it">Alle, all’, a mezzogiorno</span>',
    quandoP:
      'Pour dire quand quelque chose se passe, on utilise <em lang="it">a</em> + article : <em lang="it">alle</em> (<em lang="it">a + le</em>) avec presque toutes les heures, <em lang="it">all’</em> (<em lang="it">a + l’</em>) avec une heure. Avec <em lang="it">mezzogiorno</em> et <em lang="it">mezzanotte</em>, <em lang="it">a</em> suffit.',
    qAsk: 'Question',
    qAlle: '<span lang="it">Alle</span> + heure',
    qAll,
    qA,
    qDalle: 'De… à…',
    qVerso: 'À peu près',
    qPunto: 'Pile',
    qRitardo: 'En retard',
    quandoNote:
      '<strong><span lang="it">Che ore sono?</span> ou <span lang="it">A che ora?</span></strong> <em lang="it">Che ore sono?</em> demande l’heure qu’il est maintenant : <em lang="it">sono le otto</em>. <em lang="it">A che ora…?</em> demande quand quelque chose se passe : <em lang="it">alle otto</em>.',
    h24H2: 'L’heure de tous les jours et l’heure officielle',
    h24P: 'Entre amis et en famille, on utilise les heures de 1 à 12 et, si nécessaire, on ajoute le moment de la journée : <em lang="it">le otto di mattina, le otto di sera</em>. Les horaires officiels (trains, magasins, bureaux, télévision) utilisent le format 24 heures, et les minutes se disent avec le nombre.',
    h24Note:
      '<strong>Pas de <span lang="it">quarto</span>, <span lang="it">mezza</span> ni <span lang="it">meno</span> dans l’heure officielle.</strong> Le train de 17 h 45 part <em lang="it">alle diciassette e quarantacinque</em>, et non <em lang="it">alle sei meno un quarto</em>.',
    dayH2: 'Les moments de la journée',
    dayNote1:
      '<strong><span lang="it">Di mattina, del pomeriggio, di sera, di notte</span>.</strong> Avec l’heure, on dit <em lang="it">le otto di mattina</em> (ou <em lang="it">del mattino</em>), <em lang="it">le tre del pomeriggio</em>, <em lang="it">le nove di sera</em>, <em lang="it">le due di notte</em>. Les horaires du tableau sont indicatifs.',
    dayNote2:
      '<strong><span lang="it">Buongiorno, buonasera, buonanotte</span>.</strong> <em lang="it">Buongiorno</em> s’utilise le matin et jusqu’en début d’après-midi, <em lang="it">buonasera</em> à partir de l’après-midi. <em lang="it">Buonanotte</em> se dit seulement au moment d’aller dormir ou en se quittant tard dans la nuit.',
    exIntro:
      '30 phrases en trois parties. Écrivez seulement ce qui manque : la correction s’affiche pendant que vous écrivez.',
    part1H3: 'Partie 1 · <span lang="it">Che ore sono?</span>',
    part1P: 'Regardez l’heure entre parenthèses et complétez la réponse.',
    part2H3: 'Partie 2 · À quelle heure ?',
    part2P: 'Écrivez le mot qui manque.',
    part3H3: 'Partie 3 · Heure officielle et moments de la journée',
    part3P: 'Lisez l’heure et complétez la phrase.',
  },
  de: {
    h1: 'Uhrzeit auf Italienisch',
    card: 'Nach der Uhrzeit fragen, <span lang="it">a che ora</span>, Fahrpläne und Tageszeiten.',
    lead: 'Nach der Uhrzeit fragen und sie sagen, eine Verabredung treffen, einen Zugfahrplan lesen. Hier findest du die Regeln, die Tageszeiten und 30 Übungen.',
    description:
      'Die Uhrzeit auf Italienisch einfach erklärt: che ore sono?, è l’una und sono le due, e un quarto, e mezza, meno dieci, a che ora?, alle und all’, offizielle Uhrzeit und 30 Übungen.',
    oraH2: 'Nach der Uhrzeit fragen und sie sagen',
    oraP: 'Es gibt zwei Fragen nach der Uhrzeit, beide sind richtig: <em lang="it">Che ore sono?</em> und <em lang="it">Che ora è?</em> In der Antwort verwenden wir <em lang="it">essere</em> und den weiblichen Artikel, weil wir an das Wort <em lang="it">ore</em> (Stunden) denken: <em lang="it">sono le tre</em>.',
    oraNote1:
      '<strong>Warum <span lang="it">è l’una</span>, aber <span lang="it">sono le due</span>?</strong> Ein Uhr ist eine einzige Stunde, deshalb steht das Verb im Singular: <em lang="it">è l’una</em>. Ab zwei Uhr sind es mehrere Stunden, deshalb steht das Verb im Plural: <em lang="it">sono le due, sono le dieci</em>.',
    oraNote2:
      '<strong><span lang="it">Mezzogiorno</span> (Mittag) und <span lang="it">mezzanotte</span> (Mitternacht)</strong> stehen ohne Artikel: <em lang="it">è mezzogiorno, è mezzanotte</em>. Für 12:00 Uhr sagt man auch <em lang="it">sono le dodici</em>.',
    minH2: 'Die Minuten: <span lang="it">e, meno, un quarto, mezza</span>',
    minP: 'Nach der Stunde folgen die Minuten mit <em lang="it">e</em> (und). Nach der halben Stunde kann man auch sagen, wie viele Minuten bis zur nächsten Stunde fehlen, mit <em lang="it">meno</em> (weniger).',
    minNote1:
      '<strong><span lang="it">Mezza</span> oder <span lang="it">mezzo</span>?</strong> Beides ist richtig: <em lang="it">le tre e mezza</em>, <em lang="it">le tre e mezzo</em>. Achtung: Anders als bei „halb vier“ zählt man von der vollen Stunde aus, <em lang="it">le tre e mezza</em> ist also 3:30 Uhr. Beim Viertel braucht man <em lang="it">un</em>: <em lang="it">le tre e un quarto</em>.',
    minNote2:
      '<strong><span lang="it">Meno</span> heißt, dass Minuten fehlen.</strong> <em lang="it">Sono le quattro meno venti</em> = <em lang="it">mancano venti minuti alle quattro</em> (zwanzig vor vier). Meist verwendet man <em lang="it">meno</em>, wenn höchstens 20 Minuten fehlen.',
    quandoH2: 'Um wie viel Uhr? <span lang="it">Alle, all’, a mezzogiorno</span>',
    quandoP:
      'Um zu sagen, wann etwas passiert, verwenden wir <em lang="it">a</em> + Artikel: <em lang="it">alle</em> (<em lang="it">a + le</em>) bei fast allen Uhrzeiten, <em lang="it">all’</em> (<em lang="it">a + l’</em>) bei ein Uhr. Bei <em lang="it">mezzogiorno</em> und <em lang="it">mezzanotte</em> genügt <em lang="it">a</em>.',
    qAsk: 'Frage',
    qAlle: '<span lang="it">Alle</span> + Uhrzeit',
    qAll,
    qA,
    qDalle: 'Von… bis…',
    qVerso: 'Ungefähr',
    qPunto: 'Pünktlich',
    qRitardo: 'Verspätung',
    quandoNote:
      '<strong><span lang="it">Che ore sono?</span> oder <span lang="it">A che ora?</span></strong> <em lang="it">Che ore sono?</em> fragt nach der Uhrzeit jetzt: <em lang="it">sono le otto</em>. <em lang="it">A che ora…?</em> fragt, wann etwas passiert: <em lang="it">alle otto</em>.',
    h24H2: 'Alltagssprache und offizielle Uhrzeit',
    h24P: 'Mit Freunden und Familie verwendet man die Stunden von 1 bis 12 und fügt bei Bedarf die Tageszeit hinzu: <em lang="it">le otto di mattina, le otto di sera</em>. Offizielle Zeitangaben (Züge, Geschäfte, Ämter, Fernsehen) verwenden die 24-Stunden-Zählung, und die Minuten werden als Zahl gesagt.',
    h24Note:
      '<strong>Bei offiziellen Uhrzeiten kein <span lang="it">quarto</span>, <span lang="it">mezza</span> oder <span lang="it">meno</span>.</strong> Der Zug um 17:45 Uhr fährt <em lang="it">alle diciassette e quarantacinque</em>, nicht <em lang="it">alle sei meno un quarto</em>.',
    dayH2: 'Die Tageszeiten',
    dayNote1:
      '<strong><span lang="it">Di mattina, del pomeriggio, di sera, di notte</span>.</strong> Mit der Uhrzeit sagt man <em lang="it">le otto di mattina</em> (oder <em lang="it">del mattino</em>), <em lang="it">le tre del pomeriggio</em>, <em lang="it">le nove di sera</em>, <em lang="it">le due di notte</em>. Die Zeiten in der Tabelle sind nur Richtwerte.',
    dayNote2:
      '<strong><span lang="it">Buongiorno, buonasera, buonanotte</span>.</strong> <em lang="it">Buongiorno</em> sagt man morgens und bis zum frühen Nachmittag, <em lang="it">buonasera</em> ab dem Nachmittag. <em lang="it">Buonanotte</em> sagt man nur, wenn man schlafen geht oder sich spät in der Nacht verabschiedet.',
    exIntro: '30 Sätze in drei Teilen. Schreib nur, was fehlt: Die Korrektur erscheint schon beim Tippen.',
    part1H3: 'Teil 1 · <span lang="it">Che ore sono?</span>',
    part1P: 'Schau dir die Uhrzeit in Klammern an und ergänze die Antwort.',
    part2H3: 'Teil 2 · Um wie viel Uhr?',
    part2P: 'Schreib das fehlende Wort.',
    part3H3: 'Teil 3 · Offizielle Uhrzeit und Tageszeiten',
    part3P: 'Lies die Uhrzeit und ergänze den Satz.',
  },
};

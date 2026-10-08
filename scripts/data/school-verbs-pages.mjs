// Stringhe di pagina della lezione «I verbi della scuola» (2026-09-27), kind 'match' con `photoRows`, come
// «I verbi della città»: una FOTO per riga, i VERBI nella barra, solo la forma positiva.
//
// I testi comuni dell'esercizio arrivano da `relationUi` (relations-pages.mjs); qui ci sono la nota della
// pagina (studiare / imparare, imparare a + infinito, fare una domanda, essere promosso / bocciato con
// l'accordo, laurearsi in) e l'introduzione dell'esercizio con un esempio della scuola.
//
// REGOLE_LINGUE.md: le parole italiane nei testi tradotti stanno in <em lang="it">; nelle meta
// description, che sono testo puro, gli esempi sono tradotti.

import { schoolVerbs } from './school-verbs.mjs';
import { schoolPages } from './school-pages.mjs';
import { relationPages } from './relations-pages.mjs';

const V = schoolVerbs.length;
const it = (s) => `<em lang="it">${s}</em>`;
const LANGS = ['it', 'en', 'es', 'fr', 'cs', 'pl', 'tr', 'de', 'ja'];

const linkTo = (page) => `<a href="/${page.dir}/${page.slug}.html">${page.name}</a>`;
const school = (lang) => linkTo(schoolPages[lang]);
const relations = (lang) => linkTo(relationPages[lang]);

export const schoolVerbPages = {
  it: {
    dir: 'vocabolario',
    slug: 'verbi-scuola',
    name: 'I verbi della scuola',
    title: 'Verbi della scuola in italiano | Italiano con Martin',
    description: `Impara ${V} verbi italiani della scuola — studiare, imparare, ripassare, prendere appunti, alzare la mano, spiegare, sbagliare, correggere, superare un esame — con una foto, tre frasi d’esempio ed esercizi da trascinare.`,
    heroAlt:
      'Una bambina sorridente seduta al banco alza la mano in un’aula con la lavagna verde',
    cardText: `${V} verbi per la scuola: studiare, imparare, ripassare, alzare la mano, spiegare, sbagliare, correggere…`,
  },
  en: {
    dir: 'en/vocabulary',
    slug: 'italian-school-verbs-vocabulary',
    name: 'School verbs',
    title: 'School verbs | Italian vocabulary | Italiano con Martin',
    description: `Learn ${V} Italian verbs for school — to study, to learn, to revise, to take notes, to raise your hand, to explain, to make a mistake, to correct, to pass an exam — with a photo, three example sentences and drag-and-drop exercises.`,
    heroAlt:
      'A smiling girl sitting at her desk raises her hand in a classroom with a green chalkboard',
    cardText: `${V} verbs for school: to study, to learn, to revise, to raise your hand, to explain, to make a mistake, to correct…`,
  },
  es: {
    dir: 'es/vocabulario',
    slug: 'vocabulario-verbos-de-la-escuela-en-italiano',
    name: 'Los verbos de la escuela',
    title: 'Los verbos de la escuela | vocabulario italiano | Italiano con Martin',
    description: `Aprende ${V} verbos italianos de la escuela — estudiar, aprender, repasar, tomar apuntes, levantar la mano, explicar, equivocarse, corregir, aprobar un examen — con una foto, tres frases de ejemplo y ejercicios de arrastrar.`,
    heroAlt:
      'Una niña sonriente sentada en su pupitre levanta la mano en un aula con una pizarra verde',
    cardText: `${V} verbos para la escuela: estudiar, aprender, repasar, levantar la mano, explicar, equivocarse, corregir…`,
  },
  fr: {
    dir: 'fr/vocabulaire',
    slug: 'vocabulaire-verbes-de-l-ecole-en-italien',
    name: 'Les verbes de l’école',
    title: 'Les verbes de l’école | vocabulaire italien | Italiano con Martin',
    description: `Apprenez ${V} verbes italiens de l’école — étudier, apprendre, réviser, prendre des notes, lever la main, expliquer, se tromper, corriger, réussir un examen — avec une photo, trois exemples de phrases et des exercices à glisser-déposer.`,
    heroAlt:
      'Une petite fille souriante assise à son pupitre lève la main dans une salle de classe avec un tableau vert',
    cardText: `${V} verbes pour l’école : étudier, apprendre, réviser, lever la main, expliquer, se tromper, corriger…`,
  },
  cs: {
    dir: 'cs/slovni-zasoba',
    slug: 'italska-slovni-zasoba-slovesa-skoly',
    name: 'Slovesa ve škole',
    title: 'Slovesa ve škole | italská slovní zásoba | Italiano con Martin',
    description: `Naučte se ${V} italských sloves ze školy — učit se, naučit se, opakovat si, dělat si poznámky, hlásit se, vysvětlit, udělat chybu, opravit, udělat zkoušku — s fotografií, třemi příkladovými větami a cvičeními na přetahování.`,
    heroAlt:
      'Usměvavá holčička sedí v lavici a hlásí se ve třídě se zelenou tabulí',
    cardText: `${V} sloves pro školu: učit se, naučit se, opakovat si, hlásit se, vysvětlit, udělat chybu, opravit…`,
  },
  pl: {
    dir: 'pl/slownictwo',
    slug: 'wloskie-slownictwo-czasowniki-szkoly',
    name: 'Czasowniki w szkole',
    title: 'Czasowniki w szkole | włoskie słownictwo | Italiano con Martin',
    description: `Poznaj ${V} włoskich czasowników ze szkoły — uczyć się, nauczyć się, powtarzać, robić notatki, podnieść rękę, wyjaśniać, pomylić się, poprawiać, zdać egzamin — ze zdjęciem, trzema przykładowymi zdaniami i ćwiczeniami z przeciąganiem.`,
    heroAlt:
      'Uśmiechnięta dziewczynka siedzi w ławce i podnosi rękę w klasie z zieloną tablicą',
    cardText: `${V} czasowników do szkoły: uczyć się, nauczyć się, powtarzać, podnieść rękę, wyjaśniać, pomylić się, poprawiać…`,
  },
  tr: {
    dir: 'tr/kelime-bilgisi',
    slug: 'italyanca-okul-fiilleri-kelimeleri',
    name: 'Okul fiilleri',
    title: 'Okul fiilleri | İtalyanca kelimeler | Italiano con Martin',
    description: `Okul için ${V} İtalyanca fiil öğrenin — ders çalışmak, öğrenmek, tekrar etmek, not almak, parmak kaldırmak, açıklamak, hata yapmak, düzeltmek, sınavı geçmek — fotoğraf, üç örnek cümle ve sürükle-bırak alıştırmalarıyla.`,
    heroAlt:
      'Sırasında oturan gülümseyen bir kız, yeşil kara tahtalı bir sınıfta elini kaldırıyor',
    cardText: `Okul için ${V} fiil: ders çalışmak, öğrenmek, tekrar etmek, parmak kaldırmak, açıklamak, hata yapmak, düzeltmek…`,
  },
  de: {
    dir: 'de/wortschatz',
    slug: 'italienischer-wortschatz-verben-schule',
    name: 'Verben in der Schule',
    title: 'Verben in der Schule | italienischer Wortschatz | Italiano con Martin',
    description: `Lerne ${V} italienische Verben für die Schule — lernen, wiederholen, mitschreiben, sich melden, erklären, einen Fehler machen, korrigieren, eine Prüfung bestehen — mit Foto, drei Beispielsätzen und Übungen zum Ziehen.`,
    heroAlt:
      'Ein lächelndes Mädchen sitzt an seinem Pult und meldet sich in einem Klassenzimmer mit grüner Tafel',
    cardText: `${V} Verben für die Schule: lernen, wiederholen, sich melden, erklären, einen Fehler machen, korrigieren …`,
  },
  ja: {
    dir: 'ja/goi',
    slug: 'italian-school-verbs-vocabulary',
    name: '学校の動詞',
    title: '学校の動詞 | イタリア語の語彙 | Italiano con Martin',
    description: `勉強する、学ぶ、復習する、ノートを取る、手を挙げる、説明する、間違える、直す、試験に合格するなど、学校で使うイタリア語の動詞 ${V} 語を、写真、例文 3 つ、ドラッグ練習で学べます。`,
    heroAlt:
      '緑の黒板のある教室で、机に座ってにこにこと手を挙げる女の子',
    cardText: `学校で使う動詞 ${V} 語：勉強する、学ぶ、復習する、手を挙げる、説明する、間違える、直す…`,
  },
};

const notes = {
  it: {
    title: 'Studiare o imparare?',
    body: `<em>Studiare</em> è il lavoro sui libri, <em>imparare</em> è il risultato: <em>studio tanto, ma non imparo niente!</em> Con l’infinito si dice <em>imparare a</em>: <em>imparo a nuotare</em>. Una domanda si <em>fa</em>: <em>posso fare una domanda?</em>; e si <em>fanno</em> anche <em>i compiti</em>, <em>un esperimento</em>, <em>merenda</em>. <em>Essere promosso</em> ed <em>essere bocciato</em> si accordano con chi parla: <em>sono stata promossa</em>, <em>sono stati bocciati</em>. Ci si <em>laurea in</em> una materia: <em>mi sono laureata in lettere</em>. Gli oggetti e i luoghi sono nella lezione ${school('it')}; <em>insegnare</em> e <em>chiacchierare</em> in ${relations('it')}.`,
  },
  en: {
    title: it('Studiare o imparare?'),
    body: `${it('Studiare')} (to study) is the work with books, ${it('imparare')} (to learn) is the result: ${it('studio tanto, ma non imparo niente!')} (I study a lot, but I don’t learn anything!). Before an infinitive it is ${it('imparare a')}: ${it('imparo a nuotare')} (I’m learning to swim). A question is “made”: ${it('posso fare una domanda?')} (may I ask a question?); you also “make” ${it('i compiti')} (homework), ${it('un esperimento')}, ${it('merenda')} (a snack). ${it('Essere promosso')} and ${it('essere bocciato')} agree with the speaker: ${it('sono stata promossa')}, ${it('sono stati bocciati')}. You graduate ${it('in')} a subject: ${it('mi sono laureata in lettere')} (I graduated in humanities). Objects and places are in the lesson ${school('en')}; ${it('insegnare')} (to teach) and ${it('chiacchierare')} (to chat) in ${relations('en')}.`,
  },
  es: {
    title: it('Studiare o imparare?'),
    body: `${it('Studiare')} (estudiar) es el trabajo con los libros, ${it('imparare')} (aprender) es el resultado: ${it('studio tanto, ma non imparo niente!')} (¡estudio mucho, pero no aprendo nada!). Delante de un infinitivo se dice ${it('imparare a')}: ${it('imparo a nuotare')} (aprendo a nadar). Una pregunta se «hace»: ${it('posso fare una domanda?')}; y también se «hacen» ${it('i compiti')} (los deberes), ${it('un esperimento')}, ${it('merenda')} (la merienda). ${it('Essere promosso')} y ${it('essere bocciato')} concuerdan con quien habla: ${it('sono stata promossa')}, ${it('sono stati bocciati')}. Uno se licencia ${it('in')} una materia: ${it('mi sono laureata in lettere')} (me licencié en Letras). Los objetos y los lugares están en la lección ${school('es')}; ${it('insegnare')} (enseñar) y ${it('chiacchierare')} (charlar), en ${relations('es')}.`,
  },
  fr: {
    title: it('Studiare o imparare?'),
    body: `${it('Studiare')} (étudier), c’est le travail sur les livres ; ${it('imparare')} (apprendre), c’est le résultat : ${it('studio tanto, ma non imparo niente!')} (j’étudie beaucoup, mais je n’apprends rien !). Devant un infinitif, on dit ${it('imparare a')} : ${it('imparo a nuotare')} (j’apprends à nager). Une question se « fait » : ${it('posso fare una domanda?')} (je peux poser une question ?) ; on « fait » aussi ${it('i compiti')} (les devoirs), ${it('un esperimento')}, ${it('merenda')} (le goûter). ${it('Essere promosso')} et ${it('essere bocciato')} s’accordent avec la personne : ${it('sono stata promossa')}, ${it('sono stati bocciati')}. On est diplômé ${it('in')} une matière : ${it('mi sono laureata in lettere')} (j’ai une licence de lettres). Les objets et les lieux sont dans la leçon ${school('fr')} ; ${it('insegnare')} (enseigner) et ${it('chiacchierare')} (bavarder) dans ${relations('fr')}.`,
  },
  cs: {
    title: it('Studiare o imparare?'),
    body: `${it('Studiare')} (učit se, studovat) je práce s knihami, ${it('imparare')} (naučit se) je výsledek: ${it('studio tanto, ma non imparo niente!')} (hodně se učím, ale nic se nenaučím!). Před infinitivem se říká ${it('imparare a')}: ${it('imparo a nuotare')} (učím se plavat). Otázka se „dělá“: ${it('posso fare una domanda?')} (můžu se na něco zeptat?); „dělají“ se také ${it('i compiti')} (úkoly), ${it('un esperimento')} (pokus), ${it('merenda')} (svačina). ${it('Essere promosso')} a ${it('essere bocciato')} se shodují s mluvčím: ${it('sono stata promossa')}, ${it('sono stati bocciati')}. Vystudovat obor se řekne ${it('laurearsi in')}: ${it('mi sono laureata in lettere')} (vystudovala jsem filologii). Předměty a místa najdete v lekci ${school('cs')}; ${it('insegnare')} (učit, vyučovat) a ${it('chiacchierare')} (povídat si) v lekci ${relations('cs')}.`,
  },
  pl: {
    title: it('Studiare o imparare?'),
    body: `${it('Studiare')} (uczyć się, studiować) to praca z książkami, ${it('imparare')} (nauczyć się) to wynik: ${it('studio tanto, ma non imparo niente!')} (dużo się uczę, ale niczego się nie uczę!). Przed bezokolicznikiem mówi się ${it('imparare a')}: ${it('imparo a nuotare')} (uczę się pływać). Pytanie się „robi”: ${it('posso fare una domanda?')} (mogę zadać pytanie?); „robi się” też ${it('i compiti')} (pracę domową), ${it('un esperimento')} (doświadczenie), ${it('merenda')} (przekąskę). ${it('Essere promosso')} i ${it('essere bocciato')} uzgadnia się z osobą: ${it('sono stata promossa')}, ${it('sono stati bocciati')}. Studia kończy się ${it('in')} jakiejś dziedzinie: ${it('mi sono laureata in lettere')} (skończyłam filologię). Przedmioty i miejsca są w lekcji ${school('pl')}; ${it('insegnare')} (uczyć kogoś) i ${it('chiacchierare')} (gawędzić) w lekcji ${relations('pl')}.`,
  },
  tr: {
    title: it('Studiare o imparare?'),
    body: `${it('Studiare')} (ders çalışmak) kitaplarla yapılan iştir, ${it('imparare')} (öğrenmek) ise sonuçtur: ${it('studio tanto, ma non imparo niente!')} (çok çalışıyorum ama hiçbir şey öğrenmiyorum!). Mastardan önce ${it('imparare a')} denir: ${it('imparo a nuotare')} (yüzmeyi öğreniyorum). Soru “yapılır”: ${it('posso fare una domanda?')} (bir soru sorabilir miyim?); ${it('i compiti')} (ödev), ${it('un esperimento')} (deney) ve ${it('merenda')} (ara öğün) de ${it('fare')} ile söylenir. ${it('Essere promosso')} ve ${it('essere bocciato')} konuşan kişiye göre çekimlenir: ${it('sono stata promossa')}, ${it('sono stati bocciati')}. Bir bölümden mezun olmak ${it('laurearsi in')} ile söylenir: ${it('mi sono laureata in lettere')} (edebiyat bölümünden mezun oldum). Eşyalar ve yerler ${school('tr')} dersinde; ${it('insegnare')} (öğretmek) ve ${it('chiacchierare')} (sohbet etmek) ${relations('tr')} dersinde.`,
  },
  de: {
    title: it('Studiare o imparare?'),
    body: `${it('Studiare')} ist das Lernen mit den Büchern, ${it('imparare')} ist das Ergebnis, das Gelernte: ${it('studio tanto, ma non imparo niente!')} (ich lerne viel, aber es bleibt nichts hängen!). Vor einem Infinitiv heißt es ${it('imparare a')}: ${it('imparo a nuotare')} (ich lerne schwimmen). Eine Frage „macht“ man: ${it('posso fare una domanda?')} (darf ich eine Frage stellen?); ebenso ${it('i compiti')} (Hausaufgaben), ${it('un esperimento')}, ${it('merenda')} (die Zwischenmahlzeit). ${it('Essere promosso')} und ${it('essere bocciato')} richten sich nach der Person: ${it('sono stata promossa')}, ${it('sono stati bocciati')}. Den Abschluss macht man ${it('in')} einem Fach: ${it('mi sono laureata in lettere')} (ich habe Literaturwissenschaft studiert). Gegenstände und Orte stehen in der Lektion ${school('de')}; ${it('insegnare')} (unterrichten) und ${it('chiacchierare')} (plaudern) in ${relations('de')}.`,
  },
  ja: {
    title: it('Studiare o imparare?'),
    body: `${it('Studiare')}（勉強する）は本を使ってする作業、${it('imparare')}（学ぶ、身につける）はその結果です：${it('studio tanto, ma non imparo niente!')}（たくさん勉強しても、何も身につかない！）。不定詞の前では ${it('imparare a')}：${it('imparo a nuotare')}（泳ぎを習っている）。質問は ${it('fare')} を使います：${it('posso fare una domanda?')}（質問してもいいですか？）。${it('i compiti')}（宿題）、${it('un esperimento')}（実験）、${it('merenda')}（おやつ）も ${it('fare')} です。${it('Essere promosso')} と ${it('essere bocciato')} は話す人の性・数に合わせます：${it('sono stata promossa')}、${it('sono stati bocciati')}。専攻は ${it('in')} で言います：${it('mi sono laureata in lettere')}（文学部を卒業しました）。物と場所はレッスン「${school('ja')}」に、${it('insegnare')}（教える）と ${it('chiacchierare')}（おしゃべりする）は「${relations('ja')}」にあります。`,
  },
};

const intros = {
  it: 'Trascina un verbo sulla foto che descrive. A volte vanno bene <strong>più verbi</strong> (chi studia sui libri sta anche ripassando): basta trovarne uno, ma puoi aggiungerne quanti vuoi. Sul telefono: tocca il verbo, poi tocca la foto.',
  en: 'Drag a verb onto the photo it describes. Sometimes <strong>several verbs</strong> fit (someone studying their books may also be revising: <em lang="it">ripassare</em>): one is enough, but you can add as many as you like. On a phone: tap the verb, then tap the photo.',
  es: 'Arrastra un verbo hasta la foto que describe. A veces sirven <strong>varios verbos</strong> (quien estudia con los libros también puede estar repasando: <em lang="it">ripassare</em>): basta con uno, pero puedes añadir todos los que quieras. En el móvil: toca el verbo y luego toca la foto.',
  fr: 'Faites glisser un verbe sur la photo qu’il décrit. Parfois <strong>plusieurs verbes</strong> conviennent (qui étudie ses livres peut aussi réviser : <em lang="it">ripassare</em>) : un seul suffit, mais vous pouvez en ajouter autant que vous voulez. Sur téléphone : touchez le verbe, puis touchez la photo.',
  cs: 'Přetáhněte sloveso na fotku, kterou popisuje. Někdy se hodí <strong>více sloves</strong> (kdo se učí z knih, může si zároveň opakovat: <em lang="it">ripassare</em>): stačí najít jedno, ale můžete přidat, kolik chcete. V telefonu: klepněte na sloveso a potom na fotku.',
  pl: 'Przeciągnij czasownik na zdjęcie, które opisuje. Czasem pasuje <strong>kilka czasowników</strong> (ktoś, kto uczy się z książek, może też powtarzać materiał: <em lang="it">ripassare</em>): wystarczy jeden, ale możesz dodać ile chcesz. Na telefonie: dotknij czasownika, a potem zdjęcia.',
  tr: 'Bir fiili anlattığı fotoğrafın üzerine sürükleyin. Bazen <strong>birden çok fiil</strong> uyar (kitaplarıyla ders çalışan biri aynı zamanda tekrar yapıyor olabilir: <em lang="it">ripassare</em>): biri yeterli, ama istediğiniz kadar ekleyebilirsiniz. Telefonda: önce fiile, sonra fotoğrafa dokunun.',
  de: 'Zieh ein Verb auf das Foto, das es beschreibt. Manchmal passen <strong>mehrere Verben</strong> (wer über den Büchern sitzt, wiederholt vielleicht auch den Stoff: <em lang="it">ripassare</em>): Eins reicht, du kannst aber so viele hinzufügen, wie du willst. Am Handy: Tippe auf das Verb und dann auf das Foto.',
  ja: '動詞を、それが表す写真の上にドラッグしてください。<strong>複数の動詞</strong>が合うこともあります（本で勉強している人は「<em lang="it">ripassare</em>」（復習する）でもあるかもしれません）。一つ見つければ十分ですが、いくつ加えてもかまいません。スマートフォンでは、動詞をタップしてから写真をタップします。',
};

/** Nota della pagina e introduzione dell'esercizio; il resto dei testi arriva da `relationUi`. */
export const schoolVerbUi = Object.fromEntries(
  LANGS.map((lang) => [lang, { note: notes[lang], positive: { intro: intros[lang] } }])
);

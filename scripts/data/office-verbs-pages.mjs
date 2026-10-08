// Stringhe di pagina della lezione «I verbi dell'ufficio» (2026-09-27), kind 'match' con `photoRows`, come
// «I verbi della città»: una FOTO per riga, i VERBI nella barra, solo la forma positiva.
//
// I testi comuni dell'esercizio arrivano da `relationUi` (relations-pages.mjs); qui ci sono la nota della
// pagina (le espressioni con fare, licenziare / licenziarsi / dimettersi, essere con i riflessivi, il participio
// assunto, andare in ferie / in pensione) e l'introduzione dell'esercizio con un esempio dell'ufficio.
//
// REGOLE_LINGUE.md: le parole italiane nei testi tradotti stanno in <em lang="it">; nelle meta
// description, che sono testo puro, gli esempi sono tradotti.

import { officeVerbs } from './office-verbs.mjs';
import { officePages } from './office-pages.mjs';

const V = officeVerbs.length;
const it = (s) => `<em lang="it">${s}</em>`;
const LANGS = ['it', 'en', 'es', 'fr', 'cs', 'pl', 'tr', 'de', 'ja'];

const linkTo = (page) => `<a href="/${page.dir}/${page.slug}.html">${page.name}</a>`;
const office = (lang) => linkTo(officePages[lang]);

export const officeVerbPages = {
  it: {
    dir: 'vocabolario',
    slug: 'verbi-ufficio',
    name: 'I verbi dell’ufficio',
    title: 'Verbi dell’ufficio in italiano | Italiano con Martin',
    description: `Impara ${V} verbi italiani del lavoro in ufficio — digitare, stampare, mandare un’email, firmare, fissare un appuntamento, fare gli straordinari, candidarsi, assumere — con una foto, tre frasi d’esempio ed esercizi da trascinare.`,
    heroAlt:
      'Due persone si stringono la mano sopra una scrivania di legno in un ufficio luminoso',
    cardText: `${V} verbi per l’ufficio: digitare, stampare, mandare un’email, firmare, fare una pausa, candidarsi, assumere…`,
  },
  en: {
    dir: 'en/vocabulary',
    slug: 'italian-office-verbs-vocabulary',
    name: 'Office verbs',
    title: 'Office verbs | Italian vocabulary | Italiano con Martin',
    description: `Learn ${V} Italian verbs for office work — to type, to print, to send an email, to sign, to make an appointment, to work overtime, to apply for a job, to hire — with a photo, three example sentences and drag-and-drop exercises.`,
    heroAlt:
      'Two people shake hands over a wooden desk in a bright office',
    cardText: `${V} verbs for the office: to type, to print, to send an email, to sign, to take a break, to apply, to hire…`,
  },
  es: {
    dir: 'es/vocabulario',
    slug: 'vocabulario-verbos-de-la-oficina-en-italiano',
    name: 'Los verbos de la oficina',
    title: 'Los verbos de la oficina | vocabulario italiano | Italiano con Martin',
    description: `Aprende ${V} verbos italianos del trabajo de oficina — teclear, imprimir, enviar un correo, firmar, concertar una cita, hacer horas extra, presentar una candidatura, contratar — con una foto, tres frases de ejemplo y ejercicios de arrastrar.`,
    heroAlt:
      'Dos personas se estrechan la mano sobre un escritorio de madera en una oficina luminosa',
    cardText: `${V} verbos para la oficina: teclear, imprimir, enviar un correo, firmar, hacer una pausa, postularse, contratar…`,
  },
  fr: {
    dir: 'fr/vocabulaire',
    slug: 'vocabulaire-verbes-du-bureau-en-italien',
    name: 'Les verbes du bureau',
    title: 'Les verbes du bureau | vocabulaire italien | Italiano con Martin',
    description: `Apprenez ${V} verbes italiens du travail de bureau — taper, imprimer, envoyer un e-mail, signer, fixer un rendez-vous, faire des heures supplémentaires, postuler, embaucher — avec une photo, trois exemples de phrases et des exercices à glisser-déposer.`,
    heroAlt:
      'Deux personnes se serrent la main au-dessus d’un bureau en bois dans un espace de travail lumineux',
    cardText: `${V} verbes pour le bureau : taper, imprimer, envoyer un e-mail, signer, faire une pause, postuler, embaucher…`,
  },
  cs: {
    dir: 'cs/slovni-zasoba',
    slug: 'italska-slovni-zasoba-slovesa-kancelare',
    name: 'Slovesa v kanceláři',
    title: 'Slovesa v kanceláři | italská slovní zásoba | Italiano con Martin',
    description: `Naučte se ${V} italských sloves z kanceláře — psát na klávesnici, tisknout, poslat e-mail, podepsat, domluvit si schůzku, pracovat přesčas, ucházet se o místo, přijmout do práce — s fotografií, třemi příkladovými větami a cvičeními na přetahování.`,
    heroAlt:
      'Dva lidé si podávají ruce nad dřevěným stolem ve světlé kanceláři',
    cardText: `${V} sloves pro kancelář: psát na klávesnici, tisknout, poslat e-mail, podepsat, udělat si přestávku, ucházet se o místo…`,
  },
  pl: {
    dir: 'pl/slownictwo',
    slug: 'wloskie-slownictwo-czasowniki-biura',
    name: 'Czasowniki w biurze',
    title: 'Czasowniki w biurze | włoskie słownictwo | Italiano con Martin',
    description: `Poznaj ${V} włoskich czasowników z pracy w biurze — pisać na klawiaturze, drukować, wysłać e-mail, podpisać, umówić spotkanie, robić nadgodziny, aplikować, zatrudnić — ze zdjęciem, trzema przykładowymi zdaniami i ćwiczeniami z przeciąganiem.`,
    heroAlt:
      'Dwie osoby podają sobie ręce nad drewnianym biurkiem w jasnym biurze',
    cardText: `${V} czasowników do biura: pisać na klawiaturze, drukować, wysłać e-mail, podpisać, zrobić przerwę, zatrudnić…`,
  },
  tr: {
    dir: 'tr/kelime-bilgisi',
    slug: 'italyanca-ofis-fiilleri-kelimeleri',
    name: 'Ofis fiilleri',
    title: 'Ofis fiilleri | İtalyanca kelimeler | Italiano con Martin',
    description: `Ofis işleri için ${V} İtalyanca fiil öğrenin — klavyeyle yazmak, yazdırmak, e-posta göndermek, imzalamak, randevu almak, fazla mesai yapmak, işe başvurmak, işe almak — fotoğraf, üç örnek cümle ve sürükle-bırak alıştırmalarıyla.`,
    heroAlt:
      'Aydınlık bir ofiste ahşap bir masanın üzerinden tokalaşan iki kişi',
    cardText: `Ofis için ${V} fiil: klavyeyle yazmak, yazdırmak, e-posta göndermek, imzalamak, mola vermek, işe almak…`,
  },
  de: {
    dir: 'de/wortschatz',
    slug: 'italienischer-wortschatz-verben-buero',
    name: 'Verben im Büro',
    title: 'Verben im Büro | italienischer Wortschatz | Italiano con Martin',
    description: `Lerne ${V} italienische Verben für die Büroarbeit — tippen, drucken, eine E-Mail schicken, unterschreiben, einen Termin vereinbaren, Überstunden machen, sich bewerben, einstellen — mit Foto, drei Beispielsätzen und Übungen zum Ziehen.`,
    heroAlt:
      'Zwei Personen geben sich über einem Holzschreibtisch in einem hellen Büro die Hand',
    cardText: `${V} Verben für das Büro: tippen, drucken, eine E-Mail schicken, unterschreiben, Pause machen, sich bewerben …`,
  },
  ja: {
    dir: 'ja/goi',
    slug: 'italian-office-verbs-vocabulary',
    name: 'オフィスの動詞',
    title: 'オフィスの動詞 | イタリア語の語彙 | Italiano con Martin',
    description: `入力する、印刷する、メールを送る、署名する、アポを取る、残業する、応募する、採用するなど、オフィスで使うイタリア語の動詞 ${V} 語を、写真、例文 3 つ、ドラッグ練習で学べます。`,
    heroAlt:
      '明るいオフィスで、木の机越しに握手する二人',
    cardText: `オフィスで使う動詞 ${V} 語：入力する、印刷する、メールを送る、署名する、休憩する、応募する、採用する…`,
  },
};

const notes = {
  it: {
    title: 'Fare una pausa',
    body: `In ufficio si usa tantissimo <em>fare</em>: <em>fare una riunione</em>, <em>una pausa</em>, <em>una presentazione</em>, <em>un colloquio</em>, <em>gli straordinari</em>, <em>carriera</em>. <em>Licenziare</em> è mandare via qualcuno: <em>mi hanno licenziato</em>; chi lascia il lavoro da solo <em>si dimette</em> o <em>si licenzia</em>: <em>mi sono licenziata</em>. I verbi riflessivi vogliono <em>essere</em>: <em>mi sono candidato</em>, <em>si è dimessa</em>. <em>Assumere</em> ha il participio <em>assunto</em>: <em>mi hanno assunto!</em> Si va <em>in ferie</em> (per un po’) e <em>in pensione</em> (per sempre). Gli oggetti e i luoghi sono nella lezione ${office('it')}.`,
  },
  en: {
    title: it('Fare una pausa'),
    body: `At the office Italian uses ${it('fare')} (to do, to make) all the time: ${it('fare una riunione')} (to hold a meeting), ${it('una pausa')} (a break), ${it('una presentazione')}, ${it('un colloquio')} (an interview), ${it('gli straordinari')} (overtime), ${it('carriera')} (a career). ${it('Licenziare')} is to fire someone: ${it('mi hanno licenziato')} (I was fired); if you leave by choice you ${it('ti dimetti')} or ${it('ti licenzi')}: ${it('mi sono licenziata')} (I quit). Reflexive verbs take ${it('essere')}: ${it('mi sono candidato')}, ${it('si è dimessa')}. ${it('Assumere')} (to hire) has the participle ${it('assunto')}: ${it('mi hanno assunto!')} (I got the job!). You go ${it('in ferie')} (on holiday, for a while) and ${it('in pensione')} (into retirement, for good). Objects and places are in the lesson ${office('en')}.`,
  },
  es: {
    title: it('Fare una pausa'),
    body: `En la oficina se usa muchísimo ${it('fare')} (hacer): ${it('fare una riunione')} (hacer una reunión), ${it('una pausa')}, ${it('una presentazione')}, ${it('un colloquio')} (una entrevista), ${it('gli straordinari')} (horas extra), ${it('carriera')} (carrera). ${it('Licenziare')} es despedir a alguien: ${it('mi hanno licenziato')} (me han despedido); quien deja el trabajo por su cuenta ${it('si dimette')} o ${it('si licenzia')}: ${it('mi sono licenziata')} (he dimitido). Los verbos reflexivos llevan ${it('essere')}: ${it('mi sono candidato')}, ${it('si è dimessa')}. ${it('Assumere')} (contratar) tiene el participio ${it('assunto')}: ${it('mi hanno assunto!')} (¡me han contratado!). Se va ${it('in ferie')} (de vacaciones, por un tiempo) y ${it('in pensione')} (a la jubilación, para siempre). Los objetos y los lugares están en la lección ${office('es')}.`,
  },
  fr: {
    title: it('Fare una pausa'),
    body: `Au bureau, l’italien utilise sans cesse ${it('fare')} (faire) : ${it('fare una riunione')} (faire une réunion), ${it('una pausa')}, ${it('una presentazione')}, ${it('un colloquio')} (un entretien), ${it('gli straordinari')} (des heures supplémentaires), ${it('carriera')} (carrière). ${it('Licenziare')}, c’est licencier quelqu’un : ${it('mi hanno licenziato')} (on m’a licencié) ; qui part de lui-même ${it('si dimette')} ou ${it('si licenzia')} : ${it('mi sono licenziata')} (j’ai démissionné). Attention, faux ami : en italien ${it('licenziarsi')} veut dire démissionner. Les verbes pronominaux prennent ${it('essere')} : ${it('mi sono candidato')}, ${it('si è dimessa')}. ${it('Assumere')} (embaucher) a le participe ${it('assunto')} : ${it('mi hanno assunto!')} (on m’a embauché !). On part ${it('in ferie')} (en congés, pour un temps) et ${it('in pensione')} (à la retraite, pour toujours). Les objets et les lieux sont dans la leçon ${office('fr')}.`,
  },
  cs: {
    title: it('Fare una pausa'),
    body: `V kanceláři se neustále používá ${it('fare')} (dělat): ${it('fare una riunione')} (mít poradu), ${it('una pausa')} (přestávku), ${it('una presentazione')}, ${it('un colloquio')} (pohovor), ${it('gli straordinari')} (přesčasy), ${it('carriera')} (kariéru). ${it('Licenziare')} znamená někoho propustit: ${it('mi hanno licenziato')} (propustili mě); kdo odchází sám, ${it('si dimette')} nebo ${it('si licenzia')}: ${it('mi sono licenziata')} (dala jsem výpověď). Zvratná slovesa mají ${it('essere')}: ${it('mi sono candidato')}, ${it('si è dimessa')}. ${it('Assumere')} (přijmout do práce) má příčestí ${it('assunto')}: ${it('mi hanno assunto!')} (vzali mě!). Jede se ${it('in ferie')} (na dovolenou, na chvíli) a ${it('in pensione')} (do důchodu, natrvalo). Předměty a místa najdete v lekci ${office('cs')}.`,
  },
  pl: {
    title: it('Fare una pausa'),
    body: `W biurze ciągle używa się ${it('fare')} (robić): ${it('fare una riunione')} (zrobić zebranie), ${it('una pausa')} (przerwę), ${it('una presentazione')}, ${it('un colloquio')} (rozmowę kwalifikacyjną), ${it('gli straordinari')} (nadgodziny), ${it('carriera')} (karierę). ${it('Licenziare')} to zwolnić kogoś: ${it('mi hanno licenziato')} (zwolnili mnie); kto odchodzi sam, ${it('si dimette')} albo ${it('si licenzia')}: ${it('mi sono licenziata')} (złożyłam wypowiedzenie). Czasowniki zwrotne łączą się z ${it('essere')}: ${it('mi sono candidato')}, ${it('si è dimessa')}. ${it('Assumere')} (zatrudnić) ma imiesłów ${it('assunto')}: ${it('mi hanno assunto!')} (przyjęli mnie!). Idzie się ${it('in ferie')} (na urlop, na jakiś czas) i ${it('in pensione')} (na emeryturę, na zawsze). Przedmioty i miejsca są w lekcji ${office('pl')}.`,
  },
  tr: {
    title: it('Fare una pausa'),
    body: `Ofiste ${it('fare')} (yapmak) fiili sürekli kullanılır: ${it('fare una riunione')} (toplantı yapmak), ${it('una pausa')} (mola), ${it('una presentazione')} (sunum), ${it('un colloquio')} (iş görüşmesi), ${it('gli straordinari')} (fazla mesai), ${it('carriera')} (kariyer). ${it('Licenziare')} birini işten çıkarmaktır: ${it('mi hanno licenziato')} (beni işten çıkardılar); kendi isteğiyle ayrılan kişi ${it('si dimette')} ya da ${it('si licenzia')}: ${it('mi sono licenziata')} (istifa ettim). Dönüşlü fiiller ${it('essere')} alır: ${it('mi sono candidato')}, ${it('si è dimessa')}. ${it('Assumere')} (işe almak) fiilinin ortacı ${it('assunto')}: ${it('mi hanno assunto!')} (işe alındım!). ${it('In ferie')} (bir süreliğine izne) ve ${it('in pensione')} (temelli emekliliğe) gidilir. Eşyalar ve yerler ${office('tr')} dersinde.`,
  },
  de: {
    title: it('Fare una pausa'),
    body: `Im Büro braucht man ständig ${it('fare')} (machen): ${it('fare una riunione')} (eine Besprechung abhalten), ${it('una pausa')} (eine Pause), ${it('una presentazione')}, ${it('un colloquio')} (ein Vorstellungsgespräch), ${it('gli straordinari')} (Überstunden), ${it('carriera')} (Karriere). ${it('Licenziare')} heißt jemanden entlassen: ${it('mi hanno licenziato')} (man hat mir gekündigt); wer selbst geht, ${it('si dimette')} oder ${it('si licenzia')}: ${it('mi sono licenziata')} (ich habe gekündigt). Reflexive Verben bilden das Perfekt mit ${it('essere')}: ${it('mi sono candidato')}, ${it('si è dimessa')}. ${it('Assumere')} (einstellen) hat das Partizip ${it('assunto')}: ${it('mi hanno assunto!')} (ich habe die Stelle!). Man geht ${it('in ferie')} (in Urlaub, für eine Weile) und ${it('in pensione')} (in Rente, für immer). Gegenstände und Orte stehen in der Lektion ${office('de')}.`,
  },
  ja: {
    title: it('Fare una pausa'),
    body: `オフィスでは ${it('fare')}（する）がよく使われます：${it('fare una riunione')}（会議をする）、${it('una pausa')}（休憩）、${it('una presentazione')}（プレゼン）、${it('un colloquio')}（面接）、${it('gli straordinari')}（残業）、${it('carriera')}（出世）。${it('Licenziare')} は人を解雇することです：${it('mi hanno licenziato')}（クビになった）。自分から辞める場合は ${it('si dimette')} または ${it('si licenzia')}：${it('mi sono licenziata')}（辞めました）。再帰動詞は ${it('essere')} を使います：${it('mi sono candidato')}、${it('si è dimessa')}。${it('Assumere')}（採用する）の過去分詞は ${it('assunto')}：${it('mi hanno assunto!')}（採用された！）。${it('in ferie')}（しばらく休暇に）、${it('in pensione')}（ずっと退職生活に）と言います。物と場所はレッスン「${office('ja')}」にあります。`,
  },
};

const intros = {
  it: 'Trascina un verbo sulla foto che descrive. A volte vanno bene <strong>più verbi</strong> (chi è alla stampante sta stampando, ma forse anche fotocopiando): basta trovarne uno, ma puoi aggiungerne quanti vuoi. Sul telefono: tocca il verbo, poi tocca la foto.',
  en: 'Drag a verb onto the photo it describes. Sometimes <strong>several verbs</strong> fit (someone at the printer is printing, but maybe also photocopying: <em lang="it">fotocopiare</em>): one is enough, but you can add as many as you like. On a phone: tap the verb, then tap the photo.',
  es: 'Arrastra un verbo hasta la foto que describe. A veces sirven <strong>varios verbos</strong> (quien está en la impresora imprime, pero quizá también fotocopia: <em lang="it">fotocopiare</em>): basta con uno, pero puedes añadir todos los que quieras. En el móvil: toca el verbo y luego toca la foto.',
  fr: 'Faites glisser un verbe sur la photo qu’il décrit. Parfois <strong>plusieurs verbes</strong> conviennent (qui est à l’imprimante imprime, mais photocopie peut-être aussi : <em lang="it">fotocopiare</em>) : un seul suffit, mais vous pouvez en ajouter autant que vous voulez. Sur téléphone : touchez le verbe, puis touchez la photo.',
  cs: 'Přetáhněte sloveso na fotku, kterou popisuje. Někdy se hodí <strong>více sloves</strong> (kdo stojí u tiskárny, tiskne, ale možná i kopíruje: <em lang="it">fotocopiare</em>): stačí najít jedno, ale můžete přidat, kolik chcete. V telefonu: klepněte na sloveso a potom na fotku.',
  pl: 'Przeciągnij czasownik na zdjęcie, które opisuje. Czasem pasuje <strong>kilka czasowników</strong> (ktoś przy drukarce drukuje, ale może też kseruje: <em lang="it">fotocopiare</em>): wystarczy jeden, ale możesz dodać ile chcesz. Na telefonie: dotknij czasownika, a potem zdjęcia.',
  tr: 'Bir fiili anlattığı fotoğrafın üzerine sürükleyin. Bazen <strong>birden çok fiil</strong> uyar (yazıcının başındaki kişi yazdırıyordur, belki de fotokopi çekiyordur: <em lang="it">fotocopiare</em>): biri yeterli, ama istediğiniz kadar ekleyebilirsiniz. Telefonda: önce fiile, sonra fotoğrafa dokunun.',
  de: 'Zieh ein Verb auf das Foto, das es beschreibt. Manchmal passen <strong>mehrere Verben</strong> (wer am Drucker steht, druckt, kopiert aber vielleicht auch: <em lang="it">fotocopiare</em>): Eins reicht, du kannst aber so viele hinzufügen, wie du willst. Am Handy: Tippe auf das Verb und dann auf das Foto.',
  ja: '動詞を、それが表す写真の上にドラッグしてください。<strong>複数の動詞</strong>が合うこともあります（プリンターの前にいる人は印刷していますが、「<em lang="it">fotocopiare</em>」（コピーする）かもしれません）。一つ見つければ十分ですが、いくつ加えてもかまいません。スマートフォンでは、動詞をタップしてから写真をタップします。',
};

/** Nota della pagina e introduzione dell'esercizio; il resto dei testi arriva da `relationUi`. */
export const officeVerbUi = Object.fromEntries(
  LANGS.map((lang) => [lang, { note: notes[lang], positive: { intro: intros[lang] } }])
);

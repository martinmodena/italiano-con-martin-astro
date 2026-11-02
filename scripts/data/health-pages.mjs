// Stringhe di pagina della lezione «Dal medico e in farmacia» (2026-11-02), kind 'words'.
//
// `note` non e' tradotta: e' scritta per chi parla ciascuna lingua (Martin, 2026-10-29). Il punto comune:
// si va DAL medico (da + persona) ma IN farmacia e AL pronto soccorso; il dolore si dice con «mi fa male»
// + articolo, senza possessivo (mi fa male la gola, mi fanno male i piedi) o con «ho mal di»; la medicina
// si «prende», non si «beve». Poi le trappole della lingua dello studente (drug / la droga, constipado /
// costipato, Termin / termine, ambulance in ceco, ilaç içmek, 薬を飲む...).
//
// REGOLE_LINGUE.md: le parole italiane nei testi tradotti stanno in <em lang="it">; nelle meta
// description, che sono testo puro, gli esempi sono tradotti.

import { healthVocabulary } from './health-vocabulary.mjs';

const N = healthVocabulary.length;
const it = (s) => `<em lang="it">${s}</em>`;

export const healthPages = {
  it: {
    dir: 'vocabolario',
    slug: 'salute',
    name: 'Dal medico e in farmacia',
    title: 'Dal medico e in farmacia: vocabolario italiano | Italiano con Martin',
    description: `Impara ${N} parole della salute in italiano — il medico di famiglia, la ricetta, la tosse, la farmacia, la compressa, lo sciroppo, il cerotto… — con foto, tre frasi d’esempio, pronuncia ed esercizi.`,
    heroAlt:
      'Il bancone di una farmacia italiana con gli scaffali pieni di scatole e una farmacista sorridente in camice bianco',
    cardText: `${N} parole per stare bene: dal medico, i piccoli malanni e quello che si compra in farmacia.`,
    note: {
      title: 'Dal medico, in farmacia, al pronto soccorso',
      body: 'Dal medico si va con <em>da</em>, perché è una persona: <em>vado dal medico</em>, <em>dal dentista</em>. Nei luoghi si va <em>in farmacia</em>, <em>in ospedale</em> e <em>al pronto soccorso</em>. Il dolore si dice con <em>mi fa male</em> e l’articolo, senza <em>mio</em>: <em>mi fa male la gola</em>, <em>mi fanno male i piedi</em> (plurale!), oppure con <em>ho mal di</em>: <em>ho mal di gola</em>. Le medicine si <em>prendono</em>, anche lo sciroppo: <em>prendo una compressa</em>. <em>La ricetta</em> è sia quella del medico sia quella della torta, e <em>il gesso</em> è sia quello del braccio rotto sia quello della lavagna: <em>ho il braccio ingessato</em>. Di notte e la domenica è aperta <em>la farmacia di turno</em>. Quando qualcuno starnutisce si dice <em>Salute!</em>, a chi è malato <em>Guarisci presto!</em>, e per le emergenze in tutta Europa si chiama il <em>112</em>.',
    },
  },
  en: {
    dir: 'en/vocabulary',
    slug: 'italian-health-vocabulary',
    name: 'At the doctor’s and at the pharmacy',
    title: 'At the doctor’s and at the pharmacy | Italian vocabulary | Italiano con Martin',
    description: `Learn ${N} Italian health words — the family doctor, the prescription, the cough, the pharmacy, the tablet, the syrup, the plaster… — with photos, three example sentences, pronunciation and exercises.`,
    heroAlt: 'The counter of an Italian pharmacy with shelves full of boxes and a smiling pharmacist in a white coat',
    cardText: `${N} words to stay well: at the doctor’s, small ailments and what you buy at the pharmacy.`,
    note: {
      title: `Never ask for ${it('droga')} at the pharmacy!`,
      body: `The biggest trap: a “drug” you take for a cold is ${it('un farmaco')} or ${it('una medicina')}; ${it('la droga')} means only illegal drugs. In the same way the chemist’s is ${it('la farmacia')} (${it('il chimico')} is a scientist), and ${it('un’ingiuria')} is an insult, not an injury (${it('una ferita')}). “My throat hurts” has no “my” in Italian: ${it('mi fa male la gola')}, ${it('mi fanno male i piedi')} (plural verb!), or simply ${it('ho mal di gola')}. You go ${it('dal medico')} (to the doctor’s, ${it('da')} + person) but ${it('in farmacia')} and ${it('al pronto soccorso')} (A&E). Medicine is “taken”, syrup too: ${it('prendo lo sciroppo')}. ${it('La ricetta')} is both a prescription and a recipe, and ${it('il gesso')} is both a plaster cast and chalk. At night one ${it('farmacia di turno')} stays open. When someone sneezes, say ${it('Salute!')}; to someone ill, ${it('Guarisci presto!')} (get well soon). The emergency number in Italy, as everywhere in Europe, is ${it('112')}.`,
    },
  },
  es: {
    dir: 'es/vocabulario',
    slug: 'vocabulario-de-la-salud-en-italiano',
    name: 'En el médico y en la farmacia',
    title: 'En el médico y en la farmacia | vocabulario italiano | Italiano con Martin',
    description: `Aprende ${N} palabras de la salud en italiano — el médico de cabecera, la receta, la tos, la farmacia, la pastilla, el jarabe, la tirita… — con fotos, tres frases de ejemplo, pronunciación y ejercicios.`,
    heroAlt: 'El mostrador de una farmacia italiana con estanterías llenas de cajas y una farmacéutica sonriente con bata blanca',
    cardText: `${N} palabras para estar bien: en el médico, los pequeños males y lo que se compra en la farmacia.`,
    note: {
      title: `Si estás constipado, no digas ${it('costipato')}`,
      body: `La trampa más famosa: «estoy constipado» es ${it('ho il raffreddore')}; ${it('costipato')} en italiano hace pensar en el estreñimiento. Al médico se va con ${it('da')}, porque es una persona: ${it('vado dal medico')}, ${it('dal dentista')} (no ${it('al medico')}). A los lugares, en cambio, ${it('in farmacia')}, ${it('in ospedale')}, ${it('al pronto soccorso')} (a urgencias). «Me duele la garganta» funciona igual que en español, pero con ${it('fare')}: ${it('mi fa male la gola')}, ${it('mi fanno male i piedi')} (plural, como «me duelen»), o bien ${it('ho mal di gola')}. La tirita es ${it('il cerotto')}, el jarabe ${it('lo sciroppo')}, la pomada ${it('la pomata')} y la receta ${it('la ricetta')} (que, como en español, también es la de cocina). ${it('Il gesso')} es la escayola del brazo roto y también la tiza. De noche abre ${it('la farmacia di turno')} (la de guardia). Cuando alguien estornuda se dice ${it('Salute!')} (¡Jesús!) y a un enfermo ${it('Guarisci presto!')} (¡que te mejores!). Para las emergencias, el ${it('112')}.`,
    },
  },
  fr: {
    dir: 'fr/vocabulaire',
    slug: 'vocabulaire-de-la-sante-en-italien',
    name: 'Chez le médecin et à la pharmacie',
    title: 'Chez le médecin et à la pharmacie | vocabulaire italien | Italiano con Martin',
    description: `Apprenez ${N} mots italiens de la santé — le médecin traitant, l’ordonnance, la toux, la pharmacie, le comprimé, le sirop, le pansement… — avec des photos, trois exemples de phrases, la prononciation et des exercices.`,
    heroAlt: 'Le comptoir d’une pharmacie italienne avec des étagères pleines de boîtes et une pharmacienne souriante en blouse blanche',
    cardText: `${N} mots pour être en forme : chez le médecin, les petits bobos et ce qu’on achète à la pharmacie.`,
    note: {
      title: `${it('Dal medico')}, comme « chez le médecin »`,
      body: `Bonne nouvelle : ${it('da')} fonctionne comme « chez » : ${it('vado dal medico')}, ${it('dal dentista')}. Pour les lieux, ${it('in farmacia')}, ${it('in ospedale')}, ${it('al pronto soccorso')} (aux urgences). Attention à « j’ai mal à la gorge » : ${it('ho mal di gola')}, avec ${it('di')} et sans article ; ou bien ${it('mi fa male la gola')}, ${it('mi fanno male i piedi')} (verbe au pluriel). L’ordonnance, c’est ${it('la ricetta')} (comme la recette de cuisine !) : ${it('un’ordinanza')} est un arrêté du maire. Le pansement adhésif est ${it('il cerotto')}, la bande ${it('la benda')}, le comprimé ${it('la compressa')} et la pastille pour la gorge ${it('la pastiglia')}. ${it('La puntura')} est à la fois la piqûre de l’infirmière et celle du moustique, comme en français. ${it('Il gesso')} est le plâtre du bras cassé et aussi la craie. La nuit, c’est ${it('la farmacia di turno')} (de garde) qui est ouverte. Quand quelqu’un éternue, on dit ${it('Salute!')} (à tes souhaits) et à un malade ${it('Guarisci presto!')} (bon rétablissement). Pour les urgences : le ${it('112')}.`,
    },
  },
  cs: {
    dir: 'cs/slovni-zasoba',
    slug: 'italska-slovni-zasoba-zdravi',
    name: 'U lékaře a v lékárně',
    title: 'U lékaře a v lékárně | italská slovní zásoba | Italiano con Martin',
    description: `Naučte se ${N} italských slov o zdraví — praktický lékař, recept, kašel, lékárna, tableta, sirup, náplast… — s fotografiemi, třemi příkladovými větami, výslovností a cvičeními.`,
    heroAlt: 'Pult italské lékárny s regály plnými krabiček a usměvavou lékárnicí v bílém plášti',
    cardText: `${N} slov, abyste byli zdraví: u lékaře, drobné nemoci a to, co se kupuje v lékárně.`,
    note: {
      title: `${it('Ambulanza')} není ambulance`,
      body: `Pozor na falešného přítele: české „ambulance“ (ordinace) je italsky ${it('l’ambulatorio')}; ${it('l’ambulanza')} je sanitka, která jezdí se sirénou. K lékaři se jde s ${it('da')}, protože je to osoba: ${it('vado dal medico')}, ${it('dal dentista')}. Do míst ${it('in farmacia')}, ${it('in ospedale')}, ${it('al pronto soccorso')} (na pohotovost). „Bolí mě v krku“ je ${it('mi fa male la gola')} nebo ${it('ho mal di gola')}; „bolí mě nohy“ má sloveso v množném čísle: ${it('mi fanno male i piedi')}. Prášek je ${it('la compressa')} nebo ${it('la pastiglia')}, náplast ${it('il cerotto')}, mast ${it('la pomata')}. ${it('La ricetta')} je recept od lékaře i recept na koláč, stejně jako v češtině. ${it('Il gesso')} je sádra na zlomené ruce i křída na tabuli. V noci má otevřeno ${it('la farmacia di turno')} (pohotovostní lékárna). Když někdo kýchne, řekne se ${it('Salute!')} (na zdraví), nemocnému ${it('Guarisci presto!')} (brzy se uzdrav). Tísňová linka je ${it('112')}.`,
    },
  },
  pl: {
    dir: 'pl/slownictwo',
    slug: 'wloskie-slownictwo-zdrowie',
    name: 'U lekarza i w aptece',
    title: 'U lekarza i w aptece | włoskie słownictwo | Italiano con Martin',
    description: `Poznaj ${N} włoskich słów o zdrowiu — lekarz rodzinny, recepta, kaszel, apteka, tabletka, syrop, plaster… — ze zdjęciami, trzema przykładowymi zdaniami, wymową i ćwiczeniami.`,
    heroAlt: 'Lada włoskiej apteki z półkami pełnymi pudełek i uśmiechniętą farmaceutką w białym fartuchu',
    cardText: `${N} słów, żeby być zdrowym: u lekarza, drobne dolegliwości i to, co kupuje się w aptece.`,
    note: {
      title: `${it('Mi fa male')}, czyli „boli mnie”`,
      body: `Dobra wiadomość: ból po włosku buduje się jak po polsku, z zaimkiem i bez „mój”: „boli mnie gardło” to ${it('mi fa male la gola')}, a „bolą mnie nogi” to ${it('mi fanno male i piedi')} (czasownik w liczbie mnogiej). Można też powiedzieć ${it('ho mal di gola')}. Do lekarza idzie się z ${it('da')}, bo to osoba: ${it('vado dal medico')}, ${it('dal dentista')}; do miejsc ${it('in farmacia')}, ${it('in ospedale')}, ${it('al pronto soccorso')} (na SOR). Uwaga na fałszywych przyjaciół: ${it('la droga')} to narkotyk, a nie drogeria, a lek to ${it('il farmaco')} albo ${it('la medicina')}. Plaster to ${it('il cerotto')}, tabletka ${it('la compressa')} lub ${it('la pastiglia')}, maść ${it('la pomata')}. ${it('La ricetta')} to recepta od lekarza, ale też przepis na ciasto. ${it('Il gesso')} to gips na złamaną rękę i kreda do tablicy. W nocy otwarta jest ${it('la farmacia di turno')} (apteka dyżurna). Kiedy ktoś kichnie, mówi się ${it('Salute!')} (na zdrowie), choremu ${it('Guarisci presto!')} (zdrowiej szybko). Numer alarmowy to ${it('112')}.`,
    },
  },
  tr: {
    dir: 'tr/kelime-bilgisi',
    slug: 'italyanca-saglik-kelimeleri',
    name: 'Doktorda ve eczanede',
    title: 'Doktorda ve eczanede | İtalyanca kelimeler | Italiano con Martin',
    description: `Sağlıkla ilgili ${N} İtalyanca kelime öğrenin — aile hekimi, reçete, öksürük, eczane, tablet, şurup, yara bandı… — fotoğraflar, üç örnek cümle, telaffuz ve alıştırmalarla.`,
    heroAlt: 'Raflarında kutular dizili bir İtalyan eczanesinin tezgâhı ve beyaz önlüklü gülümseyen bir eczacı',
    cardText: `Sağlıklı kalmak için ${N} kelime: doktorda, küçük rahatsızlıklar ve eczaneden alınanlar.`,
    note: {
      title: `İlaç içilmez, ${it('si prende')}!`,
      body: `Türkçede ilaç “içilir”, İtalyancada ise “alınır”: ${it('prendo una medicina')}, ${it('prendo lo sciroppo')}; ${it('bevo una medicina')} denmez. Doktora ${it('da')} ile gidilir, çünkü doktor bir kişidir: ${it('vado dal medico')}, ${it('dal dentista')}. Yerlere ise ${it('in farmacia')}, ${it('in ospedale')}, ${it('al pronto soccorso')} (acil servise). “Boğazım ağrıyor” derken iyelik eki yoktur, artikel vardır: ${it('mi fa male la gola')} ya da ${it('ho mal di gola')}; “ayaklarım ağrıyor” ise çoğul fiille ${it('mi fanno male i piedi')}. Türkçede artikel olmadığı için kelimeleri artikelleriyle öğrenin: ${it('la tosse')}, ${it('il cerotto')}, ${it('lo sciroppo')}. ${it('La ricetta')} hem doktorun reçetesi hem de yemek tarifidir; ${it('il gesso')} hem kırık kolun alçısı hem de tebeşirdir. Gece ${it('la farmacia di turno')} (nöbetçi eczane) açıktır. Biri hapşırınca ${it('Salute!')} (çok yaşa), hasta birine “geçmiş olsun” yerine ${it('Guarisci presto!')} denir. Acil numara ${it('112')}’dir.`,
    },
  },
  de: {
    dir: 'de/wortschatz',
    slug: 'italienischer-wortschatz-gesundheit',
    name: 'Beim Arzt und in der Apotheke',
    title: 'Beim Arzt und in der Apotheke | italienischer Wortschatz | Italiano con Martin',
    description: `Lerne ${N} italienische Wörter rund um die Gesundheit — der Hausarzt, das Rezept, der Husten, die Apotheke, die Tablette, der Hustensaft, das Pflaster … — mit Fotos, drei Beispielsätzen, Aussprache und Übungen.`,
    heroAlt: 'Die Theke einer italienischen Apotheke mit Regalen voller Schachteln und einer lächelnden Apothekerin im weißen Kittel',
    cardText: `${N} Wörter, um gesund zu bleiben: beim Arzt, kleine Beschwerden und was man in der Apotheke kauft.`,
    note: {
      title: `Der Termin ist ${it('l’appuntamento')}`,
      body: `Die größte Falle: Der Arzttermin heißt ${it('l’appuntamento')}; ${it('il termine')} ist das Ende oder eine Frist. Die Arztpraxis ist ${it('l’ambulatorio')} oder ${it('lo studio medico')}, nicht „la prassi“. Zum Arzt geht man mit ${it('da')}, weil er eine Person ist: ${it('vado dal medico')}, ${it('dal dentista')}; zu Orten ${it('in farmacia')}, ${it('in ospedale')}, ${it('al pronto soccorso')} (in die Notaufnahme). Gute Nachricht: „Mir tut der Hals weh“ ist im Italienischen genauso gebaut, mit Dativ und ohne „mein“: ${it('mi fa male la gola')}, ${it('mi fanno male i piedi')} (Verb im Plural), oder kurz ${it('ho mal di gola')}. ${it('La ricetta')} ist wie „das Rezept“ beim Arzt und in der Küche, ${it('il gesso')} wie „der Gips“, aber auch die Kreide. Die Spritze ist ${it('l’iniezione')} oder ${it('la puntura')}, der Hustensaft ${it('lo sciroppo')}. Nachts hat ${it('la farmacia di turno')} (die Notdienstapotheke) offen. Wenn jemand niest, sagt man ${it('Salute!')} (Gesundheit!), zu Kranken ${it('Guarisci presto!')} (gute Besserung). Notruf: ${it('112')}.`,
    },
  },
  ja: {
    dir: 'ja/goi',
    slug: 'italian-health-vocabulary',
    name: '病院と薬局',
    title: '病院と薬局 | イタリア語の語彙 | Italiano con Martin',
    description: `かかりつけ医、処方箋、咳、薬局、錠剤、シロップ、絆創膏など、健康に関するイタリア語 ${N} 語を、写真、例文 3 つ、発音、練習問題で学べます。`,
    heroAlt: '箱がぎっしり並んだ棚と、白衣を着てほほえむ薬剤師がいるイタリアの薬局のカウンター',
    cardText: `元気でいるための ${N} 語。医者で、ちょっとした不調、薬局で買うもの。`,
    note: {
      title: `薬は「飲む」ではなく ${it('prendere')}`,
      body: `日本語では薬を「飲む」と言いますが、イタリア語では「とる」${it('prendere')} を使います：${it('prendo una medicina')}、${it('prendo lo sciroppo')}。${it('bevo una medicina')} とは言いません。また、日本ではちょっとした病気でも「病院」に行きますが、イタリアではまず ${it('il medico di famiglia')}（かかりつけ医）の ${it('ambulatorio')}（診療所）に行きます。${it('l’ospedale')} は大きな病院、${it('il pronto soccorso')} は救急外来です。医者は人なので ${it('da')} を使います：${it('vado dal medico')}、${it('dal dentista')}。場所には ${it('in farmacia')}、${it('in ospedale')}、${it('al pronto soccorso')}。「喉が痛い」は ${it('mi fa male la gola')} または ${it('ho mal di gola')}、「足が痛い」は動詞が複数形の ${it('mi fanno male i piedi')} です。冠詞もいっしょに覚えましょう：${it('la tosse')}、${it('il cerotto')}、${it('lo sciroppo')}。${it('la ricetta')} は処方箋と料理のレシピの両方、${it('il gesso')} はギプスとチョークの両方です。夜は ${it('la farmacia di turno')}（当番薬局）が開いています。くしゃみをした人には ${it('Salute!')}、病気の人には「お大事に」の意味で ${it('Guarisci presto!')} と言います。緊急番号は ${it('112')} です。`,
    },
  },
};

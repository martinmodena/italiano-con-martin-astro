// Stringhe di pagina della lezione «I verbi della casa» (2026-09-27), kind 'match' con `photoRows`, come
// «I verbi delle relazioni»: una FOTO per riga, i VERBI nella barra, solo la forma positiva.
//
// I testi comuni dell'esercizio (Progresso, Serie, barra, messaggio d'errore) arrivano da `relationUi`
// (relations-pages.mjs), che parla gia' di foto e verbi; qui ci sono la nota della pagina e l'introduzione
// dell'esercizio con un esempio della casa.
//
// REGOLE_LINGUE.md: le parole italiane nei testi tradotti stanno in <em lang="it">; nelle meta
// description, che sono testo puro, gli esempi sono tradotti.

import { houseVerbs } from './house-verbs.mjs';
import { housePages } from './house-pages.mjs';
import { bodyVerbPages } from './body-pages.mjs';

const V = houseVerbs.length;
const it = (s) => `<em lang="it">${s}</em>`;
const LANGS = ['it', 'en', 'es', 'fr', 'cs', 'pl', 'tr', 'de', 'ja'];

const linkTo = (page) => `<a href="/${page.dir}/${page.slug}.html">${page.name}</a>`;
const body = (lang) => linkTo(bodyVerbPages[lang]);
const house = (lang) => linkTo(housePages[lang]);

export const houseVerbPages = {
  it: {
    dir: 'vocabolario',
    slug: 'verbi-casa',
    name: 'I verbi della casa',
    title: 'Verbi della casa in italiano | Italiano con Martin',
    description: `Impara ${V} verbi italiani per la vita in casa — cucinare, apparecchiare, fare il bucato, stirare, accendere, spegnere, svegliarsi — con una foto, tre frasi d’esempio ed esercizi da trascinare.`,
    heroAlt:
      'Una mano apre una finestra con le persiane verdi sui tetti e sui cipressi di un paese italiano',
    cardText: `${V} verbi per la vita in casa: cucinare, apparecchiare, pulire, fare il bucato, accendere, spegnere, svegliarsi…`,
  },
  en: {
    dir: 'en/vocabulary',
    slug: 'italian-household-verbs-vocabulary',
    name: 'Household verbs',
    title: 'Household verbs | Italian vocabulary | Italiano con Martin',
    description: `Learn ${V} Italian verbs for life at home — to cook, to set the table, to do the laundry, to iron, to switch on, to switch off, to wake up — with a photo, three example sentences and drag-and-drop exercises.`,
    heroAlt:
      'A hand opens a window with green shutters onto the rooftops and cypresses of an Italian town',
    cardText: `${V} verbs for life at home: to cook, to set the table, to clean, to do the laundry, to switch on and off, to wake up…`,
  },
  es: {
    dir: 'es/vocabulario',
    slug: 'vocabulario-verbos-de-la-casa-en-italiano',
    name: 'Los verbos de la casa',
    title: 'Los verbos de la casa | vocabulario italiano | Italiano con Martin',
    description: `Aprende ${V} verbos italianos para la vida en casa — cocinar, poner la mesa, hacer la colada, planchar, encender, apagar, despertarse — con una foto, tres frases de ejemplo y ejercicios de arrastrar.`,
    heroAlt:
      'Una mano abre una ventana con persianas verdes que da a los tejados y los cipreses de un pueblo italiano',
    cardText: `${V} verbos para la vida en casa: cocinar, poner la mesa, limpiar, hacer la colada, encender, apagar, despertarse…`,
  },
  fr: {
    dir: 'fr/vocabulaire',
    slug: 'vocabulaire-verbes-de-la-maison-en-italien',
    name: 'Les verbes de la maison',
    title: 'Les verbes de la maison | vocabulaire italien | Italiano con Martin',
    description: `Apprenez ${V} verbes italiens pour la vie à la maison — cuisiner, mettre la table, faire la lessive, repasser, allumer, éteindre, se réveiller — avec une photo, trois exemples de phrases et des exercices à glisser-déposer.`,
    heroAlt:
      'Une main ouvre une fenêtre aux volets verts sur les toits et les cyprès d’un village italien',
    cardText: `${V} verbes pour la vie à la maison : cuisiner, mettre la table, nettoyer, faire la lessive, allumer, éteindre, se réveiller…`,
  },
  cs: {
    dir: 'cs/slovni-zasoba',
    slug: 'italska-slovni-zasoba-slovesa-domova',
    name: 'Slovesa domova',
    title: 'Slovesa domova | italská slovní zásoba | Italiano con Martin',
    description: `Naučte se ${V} italských sloves pro život doma — vařit, prostřít stůl, prát prádlo, žehlit, zapnout, vypnout, probudit se — s fotografií, třemi příkladovými větami a cvičeními na přetahování.`,
    heroAlt:
      'Ruka otevírá okno se zelenými okenicemi s výhledem na střechy a cypřiše italského městečka',
    cardText: `${V} sloves pro život doma: vařit, prostřít stůl, uklízet, prát prádlo, zapnout, vypnout, probudit se…`,
  },
  pl: {
    dir: 'pl/slownictwo',
    slug: 'wloskie-slownictwo-czasowniki-domowe',
    name: 'Czasowniki domowe',
    title: 'Czasowniki domowe | włoskie słownictwo | Italiano con Martin',
    description: `Poznaj ${V} włoskich czasowników o życiu w domu — gotować, nakrywać do stołu, robić pranie, prasować, włączać, wyłączać, budzić się — ze zdjęciem, trzema przykładowymi zdaniami i ćwiczeniami z przeciąganiem.`,
    heroAlt:
      'Dłoń otwiera okno z zielonymi okiennicami z widokiem na dachy i cyprysy włoskiego miasteczka',
    cardText: `${V} czasowników o życiu w domu: gotować, nakrywać do stołu, sprzątać, robić pranie, włączać, wyłączać, budzić się…`,
  },
  tr: {
    dir: 'tr/kelime-bilgisi',
    slug: 'italyanca-ev-fiilleri-kelimeleri',
    name: 'Ev fiilleri',
    title: 'Ev fiilleri | İtalyanca kelimeler | Italiano con Martin',
    description: `Evdeki hayat için ${V} İtalyanca fiil öğrenin — yemek pişirmek, sofrayı kurmak, çamaşır yıkamak, ütülemek, açmak, kapatmak, uyanmak — fotoğraf, üç örnek cümle ve sürükle-bırak alıştırmalarıyla.`,
    heroAlt:
      'Bir el, bir İtalyan kasabasının çatılarına ve servilerine bakan yeşil panjurlu bir pencereyi açıyor',
    cardText: `Evdeki hayat için ${V} fiil: yemek pişirmek, sofrayı kurmak, temizlemek, çamaşır yıkamak, açmak, kapatmak, uyanmak…`,
  },
  de: {
    dir: 'de/wortschatz',
    slug: 'italienischer-wortschatz-verben-haushalt',
    name: 'Verben im Haushalt',
    title: 'Verben im Haushalt | italienischer Wortschatz | Italiano con Martin',
    description: `Lerne ${V} italienische Verben für das Leben zu Hause — kochen, den Tisch decken, Wäsche waschen, bügeln, einschalten, ausschalten, aufwachen — mit Foto, drei Beispielsätzen und Übungen zum Ziehen.`,
    heroAlt:
      'Eine Hand öffnet ein Fenster mit grünen Fensterläden zu den Dächern und Zypressen eines italienischen Städtchens',
    cardText: `${V} Verben für das Leben zu Hause: kochen, den Tisch decken, putzen, Wäsche waschen, einschalten, ausschalten, aufwachen …`,
  },
  ja: {
    dir: 'ja/goi',
    slug: 'italian-household-verbs-vocabulary',
    name: '家の動詞',
    title: '家の動詞 | イタリア語の語彙 | Italiano con Martin',
    description: `料理する、食卓の用意をする、洗濯する、アイロンをかける、つける、消す、目を覚ますなど、家での生活のためのイタリア語の動詞 ${V} 語を、写真、例文 3 つ、ドラッグ練習で学べます。`,
    heroAlt:
      '緑の鎧戸の窓を開ける手。窓の外にはイタリアの町の屋根と糸杉',
    cardText: `家での生活の動詞 ${V} 語：料理する、食卓の用意をする、掃除する、洗濯する、つける、消す、目を覚ます…`,
  },
};

const notes = {
  it: {
    title: 'Fare il letto, fare il bucato',
    body: `Molte faccende si dicono con <em>fare</em>: <em>fare il letto</em>, <em>fare il bucato</em>, <em>fare la doccia</em>, <em>fare colazione</em>, <em>fare la spesa</em>. La luce e gli apparecchi si <em>accendono</em> e si <em>spengono</em> (<em>accendi la luce</em>, <em>spegni la televisione</em>); porte, finestre e rubinetti si <em>aprono</em> e si <em>chiudono</em> (<em>apri l’acqua</em>). I verbi della giornata sono riflessivi: <em>mi sveglio</em>, <em>mi alzo</em>, <em>mi vesto</em>, e al passato prossimo prendono <em>essere</em> (<em>mi sono alzata alle sette</em>), come <em>entrare</em>, <em>uscire</em>, <em>salire</em> e <em>scendere</em> (<em>sono uscito alle otto</em>). Si dice <em>esco di casa</em> ma <em>entro in casa</em>. I verbi per lavarsi, pettinarsi e truccarsi sono nella lezione ${body('it')}; le parole della casa in ${house('it')}.`,
  },
  en: {
    title: `${it('Fare il letto')}, ${it('fare il bucato')}`,
    body: `Many chores use ${it('fare')} (to do, to make): ${it('fare il letto')} (make the bed), ${it('fare il bucato')} (do the laundry), ${it('fare la doccia')} (have a shower), ${it('fare colazione')} (have breakfast), ${it('fare la spesa')} (do the shopping). Lights and appliances are switched on and off with ${it('accendere')} and ${it('spegnere')} (${it('accendi la luce')}, ${it('spegni la televisione')}); doors, windows and taps are opened and closed with ${it('aprire')} and ${it('chiudere')} (${it('apri l’acqua')}, turn on the water). The verbs of the daily routine are reflexive: ${it('mi sveglio')}, ${it('mi alzo')}, ${it('mi vesto')}, and in the ${it('passato prossimo')} they take ${it('essere')} (${it('mi sono alzata alle sette')}), just like ${it('entrare')}, ${it('uscire')}, ${it('salire')} and ${it('scendere')} (${it('sono uscito alle otto')}). You say ${it('esco di casa')} (I leave the house) but ${it('entro in casa')} (I go into the house). Verbs for washing, combing your hair and putting on make-up are in the lesson ${body('en')}; the words for the house are in ${house('en')}.`,
  },
  es: {
    title: `${it('Fare il letto')}, ${it('fare il bucato')}`,
    body: `Muchas tareas se dicen con ${it('fare')} (hacer): ${it('fare il letto')} (hacer la cama), ${it('fare il bucato')} (hacer la colada), ${it('fare la doccia')} (ducharse), ${it('fare colazione')} (desayunar), ${it('fare la spesa')} (hacer la compra). La luz y los aparatos se encienden y se apagan con ${it('accendere')} y ${it('spegnere')} (${it('accendi la luce')}, ${it('spegni la televisione')}); puertas, ventanas y grifos se abren y se cierran con ${it('aprire')} y ${it('chiudere')} (${it('apri l’acqua')}, abre el grifo). Los verbos del día son reflexivos: ${it('mi sveglio')}, ${it('mi alzo')}, ${it('mi vesto')}, y en el ${it('passato prossimo')} llevan ${it('essere')} (${it('mi sono alzata alle sette')}), igual que ${it('entrare')}, ${it('uscire')}, ${it('salire')} y ${it('scendere')} (${it('sono uscito alle otto')}). Se dice ${it('esco di casa')} (salgo de casa) pero ${it('entro in casa')} (entro en casa). Los verbos para lavarse, peinarse y maquillarse están en la lección ${body('es')}; las palabras de la casa, en ${house('es')}.`,
  },
  fr: {
    title: `${it('Fare il letto')}, ${it('fare il bucato')}`,
    body: `Beaucoup de tâches se disent avec ${it('fare')} (faire) : ${it('fare il letto')} (faire le lit), ${it('fare il bucato')} (faire la lessive), ${it('fare la doccia')} (prendre une douche), ${it('fare colazione')} (prendre le petit-déjeuner), ${it('fare la spesa')} (faire les courses). La lumière et les appareils s’allument et s’éteignent avec ${it('accendere')} et ${it('spegnere')} (${it('accendi la luce')}, ${it('spegni la televisione')}) ; portes, fenêtres et robinets s’ouvrent et se ferment avec ${it('aprire')} et ${it('chiudere')} (${it('apri l’acqua')}, ouvre le robinet). Les verbes de la journée sont pronominaux : ${it('mi sveglio')}, ${it('mi alzo')}, ${it('mi vesto')}, et au ${it('passato prossimo')} ils prennent ${it('essere')} (${it('mi sono alzata alle sette')}), comme ${it('entrare')}, ${it('uscire')}, ${it('salire')} et ${it('scendere')} (${it('sono uscito alle otto')}). On dit ${it('esco di casa')} (je sors de la maison) mais ${it('entro in casa')} (j’entre dans la maison). Les verbes pour se laver, se coiffer et se maquiller sont dans la leçon ${body('fr')} ; les mots de la maison dans ${house('fr')}.`,
  },
  cs: {
    title: `${it('Fare il letto')}, ${it('fare il bucato')}`,
    body: `Mnoho domácích prací se říká se slovesem ${it('fare')} (dělat): ${it('fare il letto')} (ustlat postel), ${it('fare il bucato')} (vyprat prádlo), ${it('fare la doccia')} (osprchovat se), ${it('fare colazione')} (nasnídat se), ${it('fare la spesa')} (nakoupit). Světlo a spotřebiče se zapínají a vypínají slovesy ${it('accendere')} a ${it('spegnere')} (${it('accendi la luce')}, ${it('spegni la televisione')}); dveře, okna a kohoutky se otvírají a zavírají slovesy ${it('aprire')} a ${it('chiudere')} (${it('apri l’acqua')}, pusť vodu). Slovesa denního režimu jsou zvratná: ${it('mi sveglio')}, ${it('mi alzo')}, ${it('mi vesto')}, a v ${it('passato prossimo')} mají ${it('essere')} (${it('mi sono alzata alle sette')}), stejně jako ${it('entrare')}, ${it('uscire')}, ${it('salire')} a ${it('scendere')} (${it('sono uscito alle otto')}). Říká se ${it('esco di casa')} (odcházím z domu), ale ${it('entro in casa')} (vcházím do domu). Slovesa pro mytí, česání a líčení najdete v lekci ${body('cs')}; slova o domě v lekci ${house('cs')}.`,
  },
  pl: {
    title: `${it('Fare il letto')}, ${it('fare il bucato')}`,
    body: `Wiele prac domowych mówi się z czasownikiem ${it('fare')} (robić): ${it('fare il letto')} (ścielić łóżko), ${it('fare il bucato')} (robić pranie), ${it('fare la doccia')} (brać prysznic), ${it('fare colazione')} (jeść śniadanie), ${it('fare la spesa')} (robić zakupy). Światło i urządzenia włącza się i wyłącza czasownikami ${it('accendere')} i ${it('spegnere')} (${it('accendi la luce')}, ${it('spegni la televisione')}); drzwi, okna i krany otwiera się i zamyka czasownikami ${it('aprire')} i ${it('chiudere')} (${it('apri l’acqua')}, odkręć wodę). Czasowniki codziennych czynności są zwrotne: ${it('mi sveglio')}, ${it('mi alzo')}, ${it('mi vesto')}, a w ${it('passato prossimo')} łączą się z ${it('essere')} (${it('mi sono alzata alle sette')}), tak jak ${it('entrare')}, ${it('uscire')}, ${it('salire')} i ${it('scendere')} (${it('sono uscito alle otto')}). Mówi się ${it('esco di casa')} (wychodzę z domu), ale ${it('entro in casa')} (wchodzę do domu). Czasowniki o myciu, czesaniu i makijażu są w lekcji ${body('pl')}; słowa o domu w lekcji ${house('pl')}.`,
  },
  tr: {
    title: `${it('Fare il letto')}, ${it('fare il bucato')}`,
    body: `Ev işlerinin çoğu ${it('fare')} (yapmak) fiiliyle söylenir: ${it('fare il letto')} (yatağı toplamak), ${it('fare il bucato')} (çamaşır yıkamak), ${it('fare la doccia')} (duş almak), ${it('fare colazione')} (kahvaltı yapmak), ${it('fare la spesa')} (alışveriş yapmak). Işık ve cihazlar ${it('accendere')} ve ${it('spegnere')} ile açılıp kapatılır (${it('accendi la luce')}, ${it('spegni la televisione')}); kapı, pencere ve musluklar ise ${it('aprire')} ve ${it('chiudere')} ile (${it('apri l’acqua')}, suyu aç). Günlük rutin fiilleri dönüşlüdür: ${it('mi sveglio')}, ${it('mi alzo')}, ${it('mi vesto')}; ${it('passato prossimo')} zamanında ${it('essere')} alırlar (${it('mi sono alzata alle sette')}), tıpkı ${it('entrare')}, ${it('uscire')}, ${it('salire')} ve ${it('scendere')} gibi (${it('sono uscito alle otto')}). ${it('Esco di casa')} (evden çıkıyorum) ama ${it('entro in casa')} (eve giriyorum) denir. Yıkanma, taranma ve makyaj fiilleri ${body('tr')} dersinde; evle ilgili kelimeler ${house('tr')} dersinde.`,
  },
  de: {
    title: `${it('Fare il letto')}, ${it('fare il bucato')}`,
    body: `Viele Hausarbeiten sagt man mit ${it('fare')} (machen): ${it('fare il letto')} (das Bett machen), ${it('fare il bucato')} (Wäsche waschen), ${it('fare la doccia')} (duschen), ${it('fare colazione')} (frühstücken), ${it('fare la spesa')} (einkaufen). Licht und Geräte schaltet man mit ${it('accendere')} und ${it('spegnere')} ein und aus (${it('accendi la luce')}, ${it('spegni la televisione')}); Türen, Fenster und Wasserhähne öffnet und schließt man mit ${it('aprire')} und ${it('chiudere')} (${it('apri l’acqua')}, dreh das Wasser auf). Die Verben des Tagesablaufs sind reflexiv: ${it('mi sveglio')}, ${it('mi alzo')}, ${it('mi vesto')}, und im ${it('passato prossimo')} stehen sie mit ${it('essere')} (${it('mi sono alzata alle sette')}), genau wie ${it('entrare')}, ${it('uscire')}, ${it('salire')} und ${it('scendere')} (${it('sono uscito alle otto')}). Man sagt ${it('esco di casa')} (ich gehe aus dem Haus), aber ${it('entro in casa')} (ich gehe ins Haus). Die Verben fürs Waschen, Kämmen und Schminken stehen in der Lektion ${body('de')}; die Wörter rund ums Haus in ${house('de')}.`,
  },
  ja: {
    title: `${it('Fare il letto')}、${it('fare il bucato')}`,
    body: `家事の多くは ${it('fare')}（する）で言います：${it('fare il letto')}（ベッドを整える）、${it('fare il bucato')}（洗濯する）、${it('fare la doccia')}（シャワーを浴びる）、${it('fare colazione')}（朝ごはんを食べる）、${it('fare la spesa')}（買い物をする）。電気や家電は ${it('accendere')}（つける）と ${it('spegnere')}（消す）を使います（${it('accendi la luce')}、${it('spegni la televisione')}）。ドア・窓・蛇口は ${it('aprire')}（開ける）と ${it('chiudere')}（閉める）です（${it('apri l’acqua')}、水を出して）。一日の動詞は再帰動詞です：${it('mi sveglio')}、${it('mi alzo')}、${it('mi vesto')}。${it('passato prossimo')} では ${it('essere')} を使います（${it('mi sono alzata alle sette')}）。${it('entrare')}、${it('uscire')}、${it('salire')}、${it('scendere')} も同じです（${it('sono uscito alle otto')}）。「家を出る」は ${it('esco di casa')}、「家に入る」は ${it('entro in casa')} と言います。体を洗う、髪をとかす、化粧をするなどの動詞はレッスン「${body('ja')}」に、家の単語は「${house('ja')}」にあります。`,
  },
};

const intros = {
  it: 'Trascina un verbo sulla foto che descrive. A volte vanno bene <strong>più verbi</strong> (chi versa l’acqua nella pentola la sta anche riempiendo): basta trovarne uno, ma puoi aggiungerne quanti vuoi. Sul telefono: tocca il verbo, poi tocca la foto.',
  en: 'Drag a verb onto the photo it describes. Sometimes <strong>several verbs</strong> fit (pouring water into a pot is also <em lang="it">riempire</em>): one is enough, but you can add as many as you like. On a phone: tap the verb, then tap the photo.',
  es: 'Arrastra un verbo hasta la foto que describe. A veces sirven <strong>varios verbos</strong> (echar agua en la olla también es <em lang="it">riempire</em>): basta con uno, pero puedes añadir todos los que quieras. En el móvil: toca el verbo y luego toca la foto.',
  fr: 'Faites glisser un verbe sur la photo qu’il décrit. Parfois <strong>plusieurs verbes</strong> conviennent (verser de l’eau dans une casserole, c’est aussi <em lang="it">riempire</em>) : un seul suffit, mais vous pouvez en ajouter autant que vous voulez. Sur téléphone : touchez le verbe, puis touchez la photo.',
  cs: 'Přetáhněte sloveso na fotku, kterou popisuje. Někdy se hodí <strong>více sloves</strong> (lít vodu do hrnce je také <em lang="it">riempire</em>, plnit): stačí najít jedno, ale můžete přidat, kolik chcete. V telefonu: klepněte na sloveso a potom na fotku.',
  pl: 'Przeciągnij czasownik na zdjęcie, które opisuje. Czasem pasuje <strong>kilka czasowników</strong> (nalewanie wody do garnka to też <em lang="it">riempire</em>, napełniać): wystarczy jeden, ale możesz dodać ile chcesz. Na telefonie: dotknij czasownika, a potem zdjęcia.',
  tr: 'Bir fiili anlattığı fotoğrafın üzerine sürükleyin. Bazen <strong>birden çok fiil</strong> uyar (tencereye su koymak aynı zamanda <em lang="it">riempire</em>, doldurmak demektir): biri yeterli, ama istediğiniz kadar ekleyebilirsiniz. Telefonda: önce fiile, sonra fotoğrafa dokunun.',
  de: 'Zieh ein Verb auf das Foto, das es beschreibt. Manchmal passen <strong>mehrere Verben</strong> (wer Wasser in den Topf gießt, füllt ihn auch: <em lang="it">riempire</em>): Eins reicht, du kannst aber so viele hinzufügen, wie du willst. Am Handy: Tippe auf das Verb und dann auf das Foto.',
  ja: '動詞を、それが表す写真の上にドラッグしてください。<strong>複数の動詞</strong>が合うこともあります（鍋に水を注ぐ写真は「<em lang="it">riempire</em>」（満たす）でもあります）。一つ見つければ十分ですが、いくつ加えてもかまいません。スマートフォンでは、動詞をタップしてから写真をタップします。',
};

/** Nota della pagina e introduzione dell'esercizio; il resto dei testi arriva da `relationUi`. */
export const houseVerbUi = Object.fromEntries(
  LANGS.map((lang) => [lang, { note: notes[lang], positive: { intro: intros[lang] } }])
);

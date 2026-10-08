// Stringhe di pagina della lezione «I mestieri» (2026-09-26), kind 'words'.
//
// Campi come in family-pages.mjs; qui c'e' solo `note` (il paragrafo introduttivo resta quello della
// cucina): come si dice che lavoro si fa (fare + articolo, essere senza articolo) e come si forma il
// femminile dei mestieri.
//
// REGOLE_LINGUE.md: le parole italiane nei testi tradotti stanno in <em lang="it">; nelle meta
// description, che sono testo puro, gli esempi sono tradotti.

import { jobVocabulary } from './jobs-vocabulary.mjs';

const N = jobVocabulary.length;
const it = (s) => `<em lang="it">${s}</em>`;

export const jobPages = {
  it: {
    dir: 'vocabolario',
    slug: 'mestieri',
    name: 'I mestieri',
    title: 'Vocabolario dei mestieri in italiano | Italiano con Martin',
    description: `Impara ${N} mestieri in italiano, al maschile e al femminile — il cuoco e la cuoca, l’attore e l’attrice, il dentista e la dentista… — con foto, tre frasi d’esempio, pronuncia ed esercizi.`,
    heroAlt:
      'Un cappello da cuoco bianco e un grembiule piegato su un bancone di legno con un rametto di basilico, in una cucina luminosa',
    cardText: `${N} mestieri al maschile e al femminile: dal cuoco alla dottoressa, dall’idraulico all’attrice, con foto.`,
    note: {
      title: 'Faccio il cuoco, sono cuoco',
      body: 'Per dire che lavoro fai usa <em>fare</em> con l’articolo (<em>faccio l’infermiera</em>, <em>fa il cuoco</em>) oppure <em>essere</em> senza articolo (<em>sono medico</em>, <em>è avvocata</em>). Il femminile: <em>-o</em> diventa <em>-a</em> (<em>cuoco</em>, <em>cuoca</em>), <em>-iere</em> diventa <em>-iera</em> (<em>cameriere</em>, <em>cameriera</em>), <em>-tore</em> diventa <em>-trice</em> (<em>attore</em>, <em>attrice</em>); le parole in <em>-ista</em> e in <em>-ante</em> non cambiano, cambia solo l’articolo (<em>il dentista</em>, <em>la dentista</em>; <em>il cantante</em>, <em>la cantante</em>). Alcuni femminili sono recenti (<em>l’avvocata</em>, <em>l’ingegnera</em>, <em>l’architetta</em>): si usano sempre di più, ma sentirai anche <em>l’avvocato</em> per una donna.',
    },
  },
  en: {
    dir: 'en/vocabulary',
    slug: 'italian-jobs-vocabulary',
    name: 'Jobs',
    title: 'Jobs | Italian vocabulary | Italiano con Martin',
    description: `Learn ${N} jobs in Italian, in the masculine and the feminine — cook, actor and actress, dentist… — with photos, three example sentences, pronunciation and exercises.`,
    heroAlt:
      'A white chef’s hat and a folded apron on a wooden counter with a sprig of basil, in a bright kitchen',
    cardText: `${N} jobs in the masculine and the feminine: from the cook to the doctor, from the plumber to the actress, with photos.`,
    note: {
      title: `${it('Faccio il cuoco')}, ${it('sono cuoco')}`,
      body: `To say what you do, use ${it('fare')} with the article (${it('faccio l’infermiera')}, ${it('fa il cuoco')}) or ${it('essere')} without the article (${it('sono medico')}, ${it('è avvocata')}). The feminine: ${it('-o')} becomes ${it('-a')} (${it('cuoco')}, ${it('cuoca')}), ${it('-iere')} becomes ${it('-iera')} (${it('cameriere')}, ${it('cameriera')}), ${it('-tore')} becomes ${it('-trice')} (${it('attore')}, ${it('attrice')}); words ending in ${it('-ista')} and ${it('-ante')} don’t change, only the article does (${it('il dentista')}, ${it('la dentista')}; ${it('il cantante')}, ${it('la cantante')}). Some feminine forms are recent (${it('l’avvocata')}, ${it('l’ingegnera')}, ${it('l’architetta')}): they are more and more common, but you will also hear ${it('l’avvocato')} for a woman.`,
    },
  },
  es: {
    dir: 'es/vocabulario',
    slug: 'vocabulario-de-las-profesiones-en-italiano',
    name: 'Las profesiones',
    title: 'Las profesiones | vocabulario italiano | Italiano con Martin',
    description: `Aprende ${N} profesiones en italiano, en masculino y en femenino — cocinero y cocinera, actor y actriz, dentista… — con fotos, tres frases de ejemplo, pronunciación y ejercicios.`,
    heroAlt:
      'Un gorro de cocinero blanco y un delantal doblado sobre una encimera de madera con una ramita de albahaca, en una cocina luminosa',
    cardText: `${N} profesiones en masculino y en femenino: del cocinero a la médica, del fontanero a la actriz, con fotos.`,
    note: {
      title: `${it('Faccio il cuoco')}, ${it('sono cuoco')}`,
      body: `Para decir a qué te dedicas usa ${it('fare')} con el artículo (${it('faccio l’infermiera')}, ${it('fa il cuoco')}) o ${it('essere')} sin artículo (${it('sono medico')}, ${it('è avvocata')}). El femenino: ${it('-o')} pasa a ${it('-a')} (${it('cuoco')}, ${it('cuoca')}), ${it('-iere')} pasa a ${it('-iera')} (${it('cameriere')}, ${it('cameriera')}), ${it('-tore')} pasa a ${it('-trice')} (${it('attore')}, ${it('attrice')}); las palabras en ${it('-ista')} y en ${it('-ante')} no cambian, solo cambia el artículo (${it('il dentista')}, ${it('la dentista')}; ${it('il cantante')}, ${it('la cantante')}). Algunos femeninos son recientes (${it('l’avvocata')}, ${it('l’ingegnera')}, ${it('l’architetta')}): se usan cada vez más, pero también oirás ${it('l’avvocato')} para una mujer.`,
    },
  },
  fr: {
    dir: 'fr/vocabulaire',
    slug: 'vocabulaire-des-metiers-en-italien',
    name: 'Les métiers',
    title: 'Les métiers | vocabulaire italien | Italiano con Martin',
    description: `Apprenez ${N} métiers en italien, au masculin et au féminin — cuisinier et cuisinière, acteur et actrice, dentiste… — avec des photos, trois exemples de phrases, la prononciation et des exercices.`,
    heroAlt:
      'Une toque de cuisinier blanche et un tablier plié sur un comptoir en bois avec un brin de basilic, dans une cuisine lumineuse',
    cardText: `${N} métiers au masculin et au féminin : du cuisinier à la médecin, du plombier à l’actrice, avec des photos.`,
    note: {
      title: `${it('Faccio il cuoco')}, ${it('sono cuoco')}`,
      body: `Pour dire quel métier vous faites, utilisez ${it('fare')} avec l’article (${it('faccio l’infermiera')}, ${it('fa il cuoco')}) ou ${it('essere')} sans article (${it('sono medico')}, ${it('è avvocata')}). Le féminin : ${it('-o')} devient ${it('-a')} (${it('cuoco')}, ${it('cuoca')}), ${it('-iere')} devient ${it('-iera')} (${it('cameriere')}, ${it('cameriera')}), ${it('-tore')} devient ${it('-trice')} (${it('attore')}, ${it('attrice')}) ; les mots en ${it('-ista')} et en ${it('-ante')} ne changent pas, seul l’article change (${it('il dentista')}, ${it('la dentista')} ; ${it('il cantante')}, ${it('la cantante')}). Certains féminins sont récents (${it('l’avvocata')}, ${it('l’ingegnera')}, ${it('l’architetta')}) : ils sont de plus en plus courants, mais vous entendrez aussi ${it('l’avvocato')} pour une femme.`,
    },
  },
  cs: {
    dir: 'cs/slovni-zasoba',
    slug: 'italska-slovni-zasoba-povolani',
    name: 'Povolání',
    title: 'Povolání | italská slovní zásoba | Italiano con Martin',
    description: `Naučte se ${N} povolání italsky, v mužském i ženském rodě — kuchař a kuchařka, herec a herečka, zubař… — s fotografiemi, třemi příkladovými větami, výslovností a cvičeními.`,
    heroAlt:
      'Bílá kuchařská čepice a složená zástěra na dřevěném pultu s větvičkou bazalky ve světlé kuchyni',
    cardText: `${N} povolání v mužském i ženském rodě: od kuchaře po lékařku, od instalatéra po herečku, s fotografiemi.`,
    note: {
      title: `${it('Faccio il cuoco')}, ${it('sono cuoco')}`,
      body: `Když říkáte, co děláte, použijte ${it('fare')} se členem (${it('faccio l’infermiera')}, ${it('fa il cuoco')}) nebo ${it('essere')} bez členu (${it('sono medico')}, ${it('è avvocata')}). Ženský rod: z ${it('-o')} je ${it('-a')} (${it('cuoco')}, ${it('cuoca')}), z ${it('-iere')} je ${it('-iera')} (${it('cameriere')}, ${it('cameriera')}), z ${it('-tore')} je ${it('-trice')} (${it('attore')}, ${it('attrice')}); slova na ${it('-ista')} a ${it('-ante')} se nemění, mění se jen člen (${it('il dentista')}, ${it('la dentista')}; ${it('il cantante')}, ${it('la cantante')}). Některé ženské tvary jsou nové (${it('l’avvocata')}, ${it('l’ingegnera')}, ${it('l’architetta')}): používají se čím dál víc, ale uslyšíte i ${it('l’avvocato')} o ženě.`,
    },
  },
  pl: {
    dir: 'pl/slownictwo',
    slug: 'wloskie-slownictwo-zawody',
    name: 'Zawody',
    title: 'Zawody | włoskie słownictwo | Italiano con Martin',
    description: `Poznaj ${N} zawodów po włosku, w rodzaju męskim i żeńskim — kucharz i kucharka, aktor i aktorka, dentysta… — ze zdjęciami, trzema przykładowymi zdaniami, wymową i ćwiczeniami.`,
    heroAlt:
      'Biała czapka kucharska i złożony fartuch na drewnianym blacie z gałązką bazylii, w jasnej kuchni',
    cardText: `${N} zawodów w rodzaju męskim i żeńskim: od kucharza po lekarkę, od hydraulika po aktorkę, ze zdjęciami.`,
    note: {
      title: `${it('Faccio il cuoco')}, ${it('sono cuoco')}`,
      body: `Aby powiedzieć, czym się zajmujesz, użyj ${it('fare')} z rodzajnikiem (${it('faccio l’infermiera')}, ${it('fa il cuoco')}) albo ${it('essere')} bez rodzajnika (${it('sono medico')}, ${it('è avvocata')}). Rodzaj żeński: ${it('-o')} zmienia się w ${it('-a')} (${it('cuoco')}, ${it('cuoca')}), ${it('-iere')} w ${it('-iera')} (${it('cameriere')}, ${it('cameriera')}), ${it('-tore')} w ${it('-trice')} (${it('attore')}, ${it('attrice')}); słowa zakończone na ${it('-ista')} i ${it('-ante')} się nie zmieniają, zmienia się tylko rodzajnik (${it('il dentista')}, ${it('la dentista')}; ${it('il cantante')}, ${it('la cantante')}). Niektóre formy żeńskie są nowe (${it('l’avvocata')}, ${it('l’ingegnera')}, ${it('l’architetta')}): używa się ich coraz częściej, ale usłyszysz też ${it('l’avvocato')} o kobiecie.`,
    },
  },
  tr: {
    dir: 'tr/kelime-bilgisi',
    slug: 'italyanca-meslek-kelimeleri',
    name: 'Meslekler',
    title: 'Meslekler | İtalyanca kelimeler | Italiano con Martin',
    description: `İtalyanca ${N} mesleği eril ve dişil biçimleriyle öğrenin — aşçı, oyuncu, diş hekimi… — fotoğraflar, üç örnek cümle, telaffuz ve alıştırmalarla.`,
    heroAlt:
      'Aydınlık bir mutfakta, ahşap bir tezgâhın üzerinde beyaz bir aşçı şapkası, katlanmış bir önlük ve bir dal fesleğen',
    cardText: `Eril ve dişil biçimleriyle ${N} meslek: aşçıdan doktora, tesisatçıdan oyuncuya, fotoğraflarla.`,
    note: {
      title: `${it('Faccio il cuoco')}, ${it('sono cuoco')}`,
      body: `Ne iş yaptığınızı söylemek için artikelle ${it('fare')} (${it('faccio l’infermiera')}, ${it('fa il cuoco')}) ya da artikelsiz ${it('essere')} (${it('sono medico')}, ${it('è avvocata')}) kullanın. Dişil biçim: ${it('-o')}, ${it('-a')} olur (${it('cuoco')}, ${it('cuoca')}); ${it('-iere')}, ${it('-iera')} olur (${it('cameriere')}, ${it('cameriera')}); ${it('-tore')}, ${it('-trice')} olur (${it('attore')}, ${it('attrice')}). ${it('-ista')} ve ${it('-ante')} ile biten kelimeler değişmez, yalnızca artikel değişir (${it('il dentista')}, ${it('la dentista')}; ${it('il cantante')}, ${it('la cantante')}). Bazı dişil biçimler yenidir (${it('l’avvocata')}, ${it('l’ingegnera')}, ${it('l’architetta')}): giderek daha çok kullanılıyor, ama bir kadın için ${it('l’avvocato')} dendiğini de duyarsınız.`,
    },
  },
  de: {
    dir: 'de/wortschatz',
    slug: 'italienischer-wortschatz-berufe',
    name: 'Berufe',
    title: 'Berufe | italienischer Wortschatz | Italiano con Martin',
    description: `Lerne ${N} Berufe auf Italienisch, in der männlichen und der weiblichen Form — Koch und Köchin, Schauspieler und Schauspielerin, Zahnarzt … — mit Fotos, drei Beispielsätzen, Aussprache und Übungen.`,
    heroAlt:
      'Eine weiße Kochmütze und eine gefaltete Schürze auf einer Holztheke mit einem Zweig Basilikum, in einer hellen Küche',
    cardText: `${N} Berufe in der männlichen und der weiblichen Form: vom Koch bis zur Ärztin, vom Klempner bis zur Schauspielerin, mit Fotos.`,
    note: {
      title: `${it('Faccio il cuoco')}, ${it('sono cuoco')}`,
      body: `Um zu sagen, was du beruflich machst, nimm ${it('fare')} mit Artikel (${it('faccio l’infermiera')}, ${it('fa il cuoco')}) oder ${it('essere')} ohne Artikel (${it('sono medico')}, ${it('è avvocata')}). Die weibliche Form: aus ${it('-o')} wird ${it('-a')} (${it('cuoco')}, ${it('cuoca')}), aus ${it('-iere')} wird ${it('-iera')} (${it('cameriere')}, ${it('cameriera')}), aus ${it('-tore')} wird ${it('-trice')} (${it('attore')}, ${it('attrice')}); Wörter auf ${it('-ista')} und ${it('-ante')} bleiben gleich, nur der Artikel ändert sich (${it('il dentista')}, ${it('la dentista')}; ${it('il cantante')}, ${it('la cantante')}). Manche weiblichen Formen sind neu (${it('l’avvocata')}, ${it('l’ingegnera')}, ${it('l’architetta')}): Sie werden immer häufiger, aber du hörst auch ${it('l’avvocato')} für eine Frau.`,
    },
  },
  ja: {
    dir: 'ja/goi',
    slug: 'italian-jobs-vocabulary',
    name: '職業',
    title: '職業 | イタリア語の語彙 | Italiano con Martin',
    description: `料理人、俳優・女優、歯医者など、職業を表すイタリア語 ${N} 語を男性形と女性形で、写真、例文 3 つ、発音、練習問題とともに学べます。`,
    heroAlt: '明るいキッチンの木のカウンターに置かれた白いコック帽、たたんだエプロン、バジルの小枝',
    cardText: `男性形と女性形で覚える職業 ${N} 語。料理人から医者、配管工から女優まで。写真付き。`,
    note: {
      title: `${it('Faccio il cuoco')}、${it('sono cuoco')}`,
      body: `職業を言うときは、冠詞をつけて ${it('fare')} を使う（${it('faccio l’infermiera')}、${it('fa il cuoco')}）か、冠詞なしで ${it('essere')} を使います（${it('sono medico')}、${it('è avvocata')}）。女性形：${it('-o')} は ${it('-a')} に（${it('cuoco')}、${it('cuoca')}）、${it('-iere')} は ${it('-iera')} に（${it('cameriere')}、${it('cameriera')}）、${it('-tore')} は ${it('-trice')} に（${it('attore')}、${it('attrice')}）なります。${it('-ista')} と ${it('-ante')} で終わる語は変わらず、冠詞だけが変わります（${it('il dentista')}、${it('la dentista')}；${it('il cantante')}、${it('la cantante')}）。新しい女性形もあります（${it('l’avvocata')}、${it('l’ingegnera')}、${it('l’architetta')}）。使われることが増えていますが、女性に ${it('l’avvocato')} と言うのも耳にします。`,
    },
  },
};

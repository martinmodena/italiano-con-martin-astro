// «Giorni, mesi e date»: ceco, polacco, turco, giapponese.
// Le forme italiane restano in <em lang="it"> / <span lang="it">.

const mOf = '<span lang="it">Il mese di…</span>';
const faFra = '<span lang="it">Fra = tra</span>';

export default {
  cs: {
    h1: 'Dny, měsíce a data v italštině',
    card: 'Dny v týdnu, měsíce, roční období, data, <span lang="it">ieri</span> a <span lang="it">domani</span>, <span lang="it">fa</span> a <span lang="it">tra</span>.',
    lead: 'Dny v týdnu, měsíce a roční období, jak se říká datum a slova, která říkají kdy: včera, dnes, zítra, před a za. S 30 cvičeními.',
    description:
      'Dny v týdnu, měsíce a data v italštině jednoduše: lunedì nebo il lunedì, in agosto, il primo maggio, l’otto marzo, nel 2026, ieri a domani, fa, tra a da a 30 cvičení.',
    giorniH2: 'Dny v týdnu',
    giorniP:
      'V Itálii začíná týden pondělím. Dny se píšou s malým písmenem, stejně jako v češtině, a všechny jsou mužského rodu kromě <em lang="it">la domenica</em> (neděle). Od <em lang="it">lunedì</em> do <em lang="it">venerdì</em> mají přízvuk na poslední slabice, označený akcentem.',
    gOne: 'Konkrétní den',
    gEvery: 'Každý týden',
    gFem: '<span lang="it">Domenica</span> je ženského rodu',
    gPlural: 'Množné číslo',
    giorniNote1:
      '<strong>Se členem, nebo bez něj?</strong> Bez členu jde o jediný den, ten nejbližší: <em lang="it">sabato vado al cinema</em> (tuto sobotu). Se členem jde o zvyk, každý týden: <em lang="it">il sabato vado al cinema</em> (každou sobotu). Před dnem se nepoužívá žádná předložka: <em lang="it">ci vediamo venerdì</em> (uvidíme se v pátek).',
    giorniNote2:
      '<strong>V množném čísle</strong> se dny s akcentem nemění: <em lang="it">il lunedì, i lunedì</em>. <em lang="it">Sabato</em> a <em lang="it">domenica</em> se ale mění: <em lang="it">i sabati, le domeniche</em>.',
    giorniNote3:
      '<strong>Odkud pocházejí názvy?</strong> <em lang="it">Lunedì</em> je den Měsíce (<em lang="it">Luna</em>), <em lang="it">martedì</em> Marsu, <em lang="it">mercoledì</em> Merkuru, <em lang="it">giovedì</em> Jupiteru, <em lang="it">venerdì</em> Venuše; <em lang="it">-dì</em> pochází z latinského <em lang="la">dies</em>, den. <em lang="it">Sabato</em> pochází z hebrejského <em>šabat</em> a <em lang="it">domenica</em> z latinského <em lang="la">dies dominica</em>, den Páně.',
    mesiH2: 'Měsíce a roční období',
    mesiP:
      'I měsíce se píšou s malým písmenem a všechny jsou mužského rodu: <em lang="it">un gennaio freddo, un agosto caldo</em>. Roční období jsou čtyři.',
    mMonth: '<span lang="it">In</span>, nebo <span lang="it">a</span> + měsíc',
    mSeason: 'Roční období',
    mOf,
    mFromTo: 'Od… do…',
    mesiNote1:
      '<strong><span lang="it">In</span>, nebo <span lang="it">a</span>?</strong> U měsíců je správně obojí: <em lang="it">in agosto</em> nebo <em lang="it">ad agosto</em> (<em lang="it">ad</em> před samohláskou), <em lang="it">a maggio</em> nebo <em lang="it">in maggio</em>. U ročních období se říká <em lang="it">in estate, in inverno</em>, ale také <em lang="it">d’estate, d’inverno</em>.',
    mesiNote2:
      '<strong>Rod ročních období.</strong> <em lang="it">La primavera</em> (jaro) a <em lang="it">l’estate</em> (léto) jsou ženského rodu, <em lang="it">l’autunno</em> (podzim) a <em lang="it">l’inverno</em> (zima) mužského. Astronomická roční období začínají kolem 21. dne v měsíci (<em lang="it">il 21 marzo</em>), v běžném životě se ale myslí na měsíce z tabulky.',
    dateH2: 'Jak se říká datum',
    dateP:
      'Datum se říká takto: člen, den, měsíc a rok, vždy v tomto pořadí. Den je obyčejná základní číslovka (<em lang="it">il tre maggio</em>), ne řadová jako v češtině. Řadovou číslovku má jen první den v měsíci: <em lang="it">il primo maggio</em>.',
    dAsk: 'Otázka',
    dAsk2: 'Hovorová otázka',
    dWeekday: 'Den a datum',
    dBirthday: 'Narozeniny',
    dYear: 'Rok',
    dLetter: 'V dopise',
    dateNote1:
      '<strong>Nejdřív den, potom měsíc</strong>, stejně jako v češtině: <em lang="it">05/12</em> je <em lang="it">il cinque dicembre</em>.',
    dateNote2:
      '<strong><span lang="it">L’otto</span> a <span lang="it">l’undici</span>.</strong> <em lang="it">Otto</em> a <em lang="it">undici</em> začínají samohláskou, proto se člen mění na <em lang="it">l’</em>: <em lang="it">l’otto marzo, l’undici settembre</em>.',
    dateNote3:
      '<strong>Letopočty mají člen:</strong> <em lang="it">nel 2019</em> (<em lang="it">in + il</em>, v roce 2019), <em lang="it">dal 2020 al 2024</em>. V celém datu však rok následuje za měsícem bez členu: <em lang="it">il 3 marzo 2026</em>. V dopise nebo v dokumentu je bez členu i den: <em lang="it">Roma, 3 marzo 2026</em>.',
    quandoH2: 'Včera, dnes, zítra',
    quandoNote1:
      '<strong><span lang="it">Stamattina</span> a <span lang="it">stasera</span></strong> jsou jedno slovo: <em lang="it">questa mattina → stamattina</em> (dnes ráno), <em lang="it">questa sera → stasera</em> (dnes večer). Stejně tak se říká <em lang="it">stanotte</em> (dnes v noci).',
    quandoNote2:
      '<strong><span lang="it">Scorso</span> (minulý) a <span lang="it">prossimo</span> (příští) se shodují s podstatným jménem:</strong> <em lang="it">il mese scorso, la settimana scorsa</em>. <em lang="it">Prossimo</em> může stát i před podstatným jménem: <em lang="it">la prossima settimana</em> = <em lang="it">la settimana prossima</em>.',
    freqH3: 'Jak často?',
    fEvery: 'Každý den',
    fTimes: 'Týdně',
    fMonth: 'Měsíčně',
    fNever: 'Nikdy',
    faH2: '<span lang="it">Fa</span>, <span lang="it">tra</span> a <span lang="it">da</span>',
    faP: '<em lang="it">Fa</em> (před) se dívá zpět do minulosti a stojí za časovým údajem: <em lang="it">due anni fa</em> (před dvěma lety). <em lang="it">Tra</em> (nebo <em lang="it">fra</em>, znamenají totéž) se dívá dopředu do budoucnosti a stojí před ním: <em lang="it">tra due anni</em> (za dva roky).',
    faPast: 'V minulosti',
    faFuture: 'V budoucnosti',
    faFra,
    faDa: '<span lang="it">Da</span> + doba',
    faNote:
      '<strong><span lang="it">Da</span> + doba, s přítomným časem.</strong> Když děj začal v minulosti a stále trvá, používá se stejně jako v češtině přítomný čas, se slovem <em lang="it">da</em>: <em lang="it">studio italiano da due anni</em> (učím se italsky už dva roky). Neříká se <em lang="it">per due anni</em>.',
    exIntro: '30 vět ve třech částech. Napište jen to, co chybí: kontrola probíhá už během psaní.',
    part1H3: 'Část 1 · Dny, měsíce a roční období',
    part1P: 'Napište chybějící slovo.',
    part2H3: 'Část 2 · Data',
    part2P: 'Doplňte datum. Čísla pište slovy.',
    part3H3: 'Část 3 · Včera, dnes, zítra, <span lang="it">fa</span> a <span lang="it">tra</span>',
    part3P: 'Napište chybějící slovo.',
  },
  pl: {
    h1: 'Dni, miesiące i daty po włosku',
    card: 'Dni tygodnia, miesiące, pory roku, daty, <span lang="it">ieri</span> i <span lang="it">domani</span>, <span lang="it">fa</span> i <span lang="it">tra</span>.',
    lead: 'Dni tygodnia, miesiące i pory roku, jak podać datę i słowa, które mówią kiedy: wczoraj, dziś, jutro, temu i za. Z 30 ćwiczeniami.',
    description:
      'Dni tygodnia, miesiące i daty po włosku w prosty sposób: lunedì czy il lunedì, in agosto, il primo maggio, l’otto marzo, nel 2026, ieri i domani, fa, tra i da oraz 30 ćwiczeń.',
    giorniH2: 'Dni tygodnia',
    giorniP:
      'We Włoszech tydzień zaczyna się w poniedziałek. Dni pisze się małą literą, tak jak po polsku, i wszystkie są rodzaju męskiego z wyjątkiem <em lang="it">la domenica</em> (niedziela). Od <em lang="it">lunedì</em> do <em lang="it">venerdì</em> akcent pada na ostatnią sylabę i jest zaznaczony w piśmie.',
    gOne: 'Konkretny dzień',
    gEvery: 'Co tydzień',
    gFem: '<span lang="it">Domenica</span> jest rodzaju żeńskiego',
    gPlural: 'Liczba mnoga',
    giorniNote1:
      '<strong>Z rodzajnikiem czy bez?</strong> Bez rodzajnika chodzi o jeden dzień, najbliższy: <em lang="it">sabato vado al cinema</em> (w tę sobotę). Z rodzajnikiem to zwyczaj, co tydzień: <em lang="it">il sabato vado al cinema</em> (w soboty). Przed dniem nie stawia się przyimka: <em lang="it">ci vediamo venerdì</em> (do zobaczenia w piątek).',
    giorniNote2:
      '<strong>W liczbie mnogiej</strong> dni z akcentem się nie zmieniają: <em lang="it">il lunedì, i lunedì</em>. <em lang="it">Sabato</em> i <em lang="it">domenica</em> natomiast tak: <em lang="it">i sabati, le domeniche</em>.',
    giorniNote3:
      '<strong>Skąd pochodzą nazwy?</strong> <em lang="it">Lunedì</em> to dzień Księżyca (<em lang="it">Luna</em>), <em lang="it">martedì</em> Marsa, <em lang="it">mercoledì</em> Merkurego, <em lang="it">giovedì</em> Jowisza, <em lang="it">venerdì</em> Wenus; <em lang="it">-dì</em> pochodzi od łacińskiego <em lang="la">dies</em>, dzień. <em lang="it">Sabato</em> pochodzi od hebrajskiego <em>szabat</em>, a <em lang="it">domenica</em> od łacińskiego <em lang="la">dies dominica</em>, dzień Pański.',
    mesiH2: 'Miesiące i pory roku',
    mesiP:
      'Miesiące także pisze się małą literą i wszystkie są rodzaju męskiego: <em lang="it">un gennaio freddo, un agosto caldo</em>. Pory roku są cztery.',
    mMonth: '<span lang="it">In</span> czy <span lang="it">a</span> + miesiąc',
    mSeason: 'Pory roku',
    mOf,
    mFromTo: 'Od… do…',
    mesiNote1:
      '<strong><span lang="it">In</span> czy <span lang="it">a</span>?</strong> Przy miesiącach obie formy są poprawne: <em lang="it">in agosto</em> lub <em lang="it">ad agosto</em> (<em lang="it">ad</em> przed samogłoską), <em lang="it">a maggio</em> lub <em lang="it">in maggio</em>. Przy porach roku mówi się <em lang="it">in estate, in inverno</em>, ale też <em lang="it">d’estate, d’inverno</em>.',
    mesiNote2:
      '<strong>Rodzaj pór roku.</strong> <em lang="it">La primavera</em> (wiosna) i <em lang="it">l’estate</em> (lato) są rodzaju żeńskiego, <em lang="it">l’autunno</em> (jesień) i <em lang="it">l’inverno</em> (zima) męskiego. Astronomiczne pory roku zaczynają się około 21. dnia miesiąca (<em lang="it">il 21 marzo</em>), ale na co dzień myśli się o miesiącach z tabeli.',
    dateH2: 'Jak podać datę',
    dateP:
      'Datę podaje się tak: rodzajnik, dzień, miesiąc i rok, zawsze w tej kolejności. Dzień to zwykły liczebnik główny (<em lang="it">il tre maggio</em>), a nie porządkowy jak po polsku. Liczebnik porządkowy ma tylko pierwszy dzień miesiąca: <em lang="it">il primo maggio</em>.',
    dAsk: 'Pytanie',
    dAsk2: 'Pytanie potoczne',
    dWeekday: 'Dzień i data',
    dBirthday: 'Urodziny',
    dYear: 'Rok',
    dLetter: 'W liście',
    dateNote1:
      '<strong>Najpierw dzień, potem miesiąc</strong>, tak jak po polsku: <em lang="it">05/12</em> to <em lang="it">il cinque dicembre</em>.',
    dateNote2:
      '<strong><span lang="it">L’otto</span> i <span lang="it">l’undici</span>.</strong> <em lang="it">Otto</em> i <em lang="it">undici</em> zaczynają się od samogłoski, więc rodzajnik zmienia się w <em lang="it">l’</em>: <em lang="it">l’otto marzo, l’undici settembre</em>.',
    dateNote3:
      '<strong>Lata wymagają rodzajnika:</strong> <em lang="it">nel 2019</em> (<em lang="it">in + il</em>, w 2019 roku), <em lang="it">dal 2020 al 2024</em>. W pełnej dacie rok stoi jednak po miesiącu bez rodzajnika: <em lang="it">il 3 marzo 2026</em>. W liście lub dokumencie także dzień jest bez rodzajnika: <em lang="it">Roma, 3 marzo 2026</em>.',
    quandoH2: 'Wczoraj, dziś, jutro',
    quandoNote1:
      '<strong><span lang="it">Stamattina</span> i <span lang="it">stasera</span></strong> to jedno słowo: <em lang="it">questa mattina → stamattina</em> (dziś rano), <em lang="it">questa sera → stasera</em> (dziś wieczorem). Tak samo mówi się <em lang="it">stanotte</em> (dziś w nocy).',
    quandoNote2:
      '<strong><span lang="it">Scorso</span> (ubiegły) i <span lang="it">prossimo</span> (następny) zgadzają się z rzeczownikiem:</strong> <em lang="it">il mese scorso, la settimana scorsa</em>. <em lang="it">Prossimo</em> może też stać przed rzeczownikiem: <em lang="it">la prossima settimana</em> = <em lang="it">la settimana prossima</em>.',
    freqH3: 'Jak często?',
    fEvery: 'Codziennie',
    fTimes: 'W tygodniu',
    fMonth: 'W miesiącu',
    fNever: 'Nigdy',
    faH2: '<span lang="it">Fa</span>, <span lang="it">tra</span> i <span lang="it">da</span>',
    faP: '<em lang="it">Fa</em> (temu) patrzy wstecz, w przeszłość, i stoi po określeniu czasu: <em lang="it">due anni fa</em> (dwa lata temu). <em lang="it">Tra</em> (lub <em lang="it">fra</em>, znaczą to samo) patrzy naprzód, w przyszłość, i stoi przed nim: <em lang="it">tra due anni</em> (za dwa lata).',
    faPast: 'W przeszłości',
    faFuture: 'W przyszłości',
    faFra,
    faDa: '<span lang="it">Da</span> + czas trwania',
    faNote:
      '<strong><span lang="it">Da</span> + czas trwania, z czasem teraźniejszym.</strong> Gdy czynność zaczęła się w przeszłości i trwa nadal, używa się, tak jak po polsku, czasu teraźniejszego z <em lang="it">da</em> (od): <em lang="it">studio italiano da due anni</em> (uczę się włoskiego od dwóch lat). Nie mówi się <em lang="it">per due anni</em>.',
    exIntro: '30 zdań w trzech częściach. Wpisz tylko to, czego brakuje: poprawka pojawia się już podczas pisania.',
    part1H3: 'Część 1 · Dni, miesiące i pory roku',
    part1P: 'Wpisz brakujące słowo.',
    part2H3: 'Część 2 · Daty',
    part2P: 'Uzupełnij datę. Liczby zapisz słownie.',
    part3H3: 'Część 3 · Wczoraj, dziś, jutro, <span lang="it">fa</span> i <span lang="it">tra</span>',
    part3P: 'Wpisz brakujące słowo.',
  },
  tr: {
    h1: 'İtalyanca günler, aylar ve tarihler',
    card: 'Haftanın günleri, aylar, mevsimler, tarihler, <span lang="it">ieri</span> ve <span lang="it">domani</span>, <span lang="it">fa</span> ve <span lang="it">tra</span>.',
    lead: 'Haftanın günleri, aylar ve mevsimler, tarihin nasıl söylendiği ve zamanı anlatan kelimeler: dün, bugün, yarın, önce ve sonra. 30 alıştırmayla.',
    description:
      'İtalyanca günler, aylar ve tarihler kolayca: lunedì mi il lunedì mi, in agosto, il primo maggio, l’otto marzo, nel 2026, ieri ve domani, fa, tra ve da ile 30 alıştırma.',
    giorniH2: 'Haftanın günleri',
    giorniP:
      'İtalya’da hafta pazartesi başlar. Günler küçük harfle yazılır ve <em lang="it">la domenica</em> (pazar) dışında hepsi erildir. <em lang="it">Lunedì</em> ile <em lang="it">venerdì</em> arasındaki günlerde vurgu son hecededir ve işaretle gösterilir.',
    gOne: 'Belirli bir gün',
    gEvery: 'Her hafta',
    gFem: '<span lang="it">Domenica</span> dişildir',
    gPlural: 'Çoğul',
    giorniNote1:
      '<strong>Artikelli mi, artikelsiz mi?</strong> Artikel yoksa söz konusu olan tek bir gündür, en yakın olanı: <em lang="it">sabato vado al cinema</em> (bu cumartesi). Artikel varsa bir alışkanlıktır, her hafta: <em lang="it">il sabato vado al cinema</em> (cumartesileri). Günün önüne edat gelmez: <em lang="it">ci vediamo venerdì</em> (cuma görüşürüz).',
    giorniNote2:
      '<strong>Çoğulda</strong> vurgu işaretli günler değişmez: <em lang="it">il lunedì, i lunedì</em>. <em lang="it">Sabato</em> ve <em lang="it">domenica</em> ise değişir: <em lang="it">i sabati, le domeniche</em>.',
    giorniNote3:
      '<strong>İsimler nereden geliyor?</strong> <em lang="it">Lunedì</em> Ay’ın (<em lang="it">Luna</em>), <em lang="it">martedì</em> Mars’ın, <em lang="it">mercoledì</em> Merkür’ün, <em lang="it">giovedì</em> Jüpiter’in, <em lang="it">venerdì</em> Venüs’ün günüdür; <em lang="it">-dì</em>, Latince <em lang="la">dies</em> (gün) kelimesinden gelir. <em lang="it">Sabato</em> İbranice <em>şabat</em> kelimesinden, <em lang="it">domenica</em> ise Latince <em lang="la">dies dominica</em> (Rab’bin günü) ifadesinden gelir.',
    mesiH2: 'Aylar ve mevsimler',
    mesiP:
      'Aylar da küçük harfle yazılır ve hepsi erildir: <em lang="it">un gennaio freddo, un agosto caldo</em>. Dört mevsim vardır.',
    mMonth: '<span lang="it">In</span> ya da <span lang="it">a</span> + ay',
    mSeason: 'Mevsimler',
    mOf,
    mFromTo: 'Başlangıç ve bitiş',
    mesiNote1:
      '<strong><span lang="it">In</span> mi, <span lang="it">a</span> mı?</strong> Aylarla ikisi de doğrudur: <em lang="it">in agosto</em> ya da <em lang="it">ad agosto</em> (ünlüden önce <em lang="it">ad</em>), <em lang="it">a maggio</em> ya da <em lang="it">in maggio</em>. Mevsimlerle <em lang="it">in estate, in inverno</em> denir, ama <em lang="it">d’estate, d’inverno</em> da kullanılır.',
    mesiNote2:
      '<strong>Mevsimlerin cinsiyeti.</strong> <em lang="it">La primavera</em> (ilkbahar) ve <em lang="it">l’estate</em> (yaz) dişil, <em lang="it">l’autunno</em> (sonbahar) ve <em lang="it">l’inverno</em> (kış) erildir. Astronomik mevsimler ayın 21’i civarında başlar (<em lang="it">il 21 marzo</em>), ama günlük hayatta tablodaki aylar düşünülür.',
    dateH2: 'Tarih nasıl söylenir?',
    dateP:
      'Tarih şöyle söylenir: artikel, gün, ay ve yıl, her zaman bu sırayla. Gün normal bir sayıdır (<em lang="it">il tre maggio</em>); yalnızca ayın ilk günü sıra sayısıyla söylenir: <em lang="it">il primo maggio</em>.',
    dAsk: 'Soru',
    dAsk2: 'Gündelik soru',
    dWeekday: 'Gün ve tarih',
    dBirthday: 'Doğum günü',
    dYear: 'Yıl',
    dLetter: 'Bir mektupta',
    dateNote1:
      '<strong>Önce gün, sonra ay</strong>, tıpkı Türkçedeki gibi: <em lang="it">05/12</em>, <em lang="it">il cinque dicembre</em> demektir.',
    dateNote2:
      '<strong><span lang="it">L’otto</span> ve <span lang="it">l’undici</span>.</strong> <em lang="it">Otto</em> ve <em lang="it">undici</em> ünlüyle başladığı için artikel <em lang="it">l’</em> olur: <em lang="it">l’otto marzo, l’undici settembre</em>.',
    dateNote3:
      '<strong>Yıllar artikel alır:</strong> <em lang="it">nel 2019</em> (<em lang="it">in + il</em>, 2019’da), <em lang="it">dal 2020 al 2024</em>. Tam tarihte ise yıl, aydan sonra artikelsiz gelir: <em lang="it">il 3 marzo 2026</em>. Mektupta ya da resmî belgede gün de artikelsiz yazılır: <em lang="it">Roma, 3 marzo 2026</em>.',
    quandoH2: 'Dün, bugün, yarın',
    quandoNote1:
      '<strong><span lang="it">Stamattina</span> ve <span lang="it">stasera</span></strong> tek kelimedir: <em lang="it">questa mattina → stamattina</em> (bu sabah), <em lang="it">questa sera → stasera</em> (bu akşam). Aynı şekilde <em lang="it">stanotte</em> (bu gece) denir.',
    quandoNote2:
      '<strong><span lang="it">Scorso</span> (geçen) ve <span lang="it">prossimo</span> (gelecek) isme uyar:</strong> <em lang="it">il mese scorso, la settimana scorsa</em>. <em lang="it">Prossimo</em> ismin önüne de gelebilir: <em lang="it">la prossima settimana</em> = <em lang="it">la settimana prossima</em>.',
    freqH3: 'Ne sıklıkla?',
    fEvery: 'Her gün',
    fTimes: 'Haftada',
    fMonth: 'Ayda',
    fNever: 'Hiç',
    faH2: '<span lang="it">Fa</span>, <span lang="it">tra</span> ve <span lang="it">da</span>',
    faP: '<em lang="it">Fa</em> (önce) geçmişe bakar ve zaman ifadesinden sonra gelir: <em lang="it">due anni fa</em> (iki yıl önce). <em lang="it">Tra</em> (ya da <em lang="it">fra</em>, ikisi aynıdır) geleceğe bakar ve zaman ifadesinden önce gelir: <em lang="it">tra due anni</em> (iki yıl sonra).',
    faPast: 'Geçmişte',
    faFuture: 'Gelecekte',
    faFra,
    faDa: '<span lang="it">Da</span> + süre',
    faNote:
      '<strong><span lang="it">Da</span> + süre, şimdiki zamanla.</strong> Geçmişte başlayıp hâlâ süren bir eylem için <em lang="it">da</em> ile şimdiki zaman kullanılır: <em lang="it">studio italiano da due anni</em> (iki yıldır İtalyanca çalışıyorum). <em lang="it">Per due anni</em> denmez.',
    exIntro: 'Üç bölümde 30 cümle. Yalnızca eksik olanı yazın: düzeltme siz yazarken gelir.',
    part1H3: 'Bölüm 1 · Günler, aylar ve mevsimler',
    part1P: 'Eksik kelimeyi yazın.',
    part2H3: 'Bölüm 2 · Tarihler',
    part2P: 'Tarihi tamamlayın. Sayıları yazıyla yazın.',
    part3H3: 'Bölüm 3 · Dün, bugün, yarın, <span lang="it">fa</span> ve <span lang="it">tra</span>',
    part3P: 'Eksik kelimeyi yazın.',
  },
  ja: {
    h1: 'イタリア語の曜日・月・日付',
    card: '曜日、月、季節、日付、<span lang="it">ieri</span> と <span lang="it">domani</span>、<span lang="it">fa</span> と <span lang="it">tra</span>。',
    lead: '曜日、月と季節、日付の言い方、そして「いつ」を表すことば（昨日、今日、明日、〜前、〜後）。練習問題30問つき。',
    description:
      'イタリア語の曜日・月・日付をやさしく解説：lunedì と il lunedì、in agosto、il primo maggio、l’otto marzo、nel 2026、ieri と domani、fa・tra・da、練習問題30問。',
    giorniH2: '曜日',
    giorniP:
      'イタリアでは一週間は月曜日から始まります。曜日は小文字で書き、<em lang="it">la domenica</em>（日曜日）以外はすべて男性名詞です。<em lang="it">lunedì</em> から <em lang="it">venerdì</em> までは最後の音節にアクセントがあり、アクセント記号をつけて書きます。',
    gOne: '特定の日',
    gEvery: '毎週',
    gFem: '<span lang="it">domenica</span> は女性名詞',
    gPlural: '複数',
    giorniNote1:
      '<strong>冠詞をつける？つけない？</strong>冠詞なしは、いちばん近いその日だけを指します：<em lang="it">sabato vado al cinema</em>（今度の土曜日に）。冠詞つきは毎週の習慣です：<em lang="it">il sabato vado al cinema</em>（毎週土曜日に）。曜日の前に前置詞はいりません：<em lang="it">ci vediamo venerdì</em>（金曜日に会いましょう）。',
    giorniNote2:
      '<strong>複数形</strong>　アクセント記号のある曜日は変化しません：<em lang="it">il lunedì, i lunedì</em>。<em lang="it">sabato</em> と <em lang="it">domenica</em> は変化します：<em lang="it">i sabati, le domeniche</em>。',
    giorniNote3:
      '<strong>名前の由来</strong>　日本語の曜日と同じように、天体の名前から来ています。<em lang="it">lunedì</em> は月（<em lang="it">Luna</em>）の日、<em lang="it">martedì</em> は火星（マルス）、<em lang="it">mercoledì</em> は水星（メルクリウス）、<em lang="it">giovedì</em> は木星（ユピテル）、<em lang="it">venerdì</em> は金星（ウェヌス）の日です。<em lang="it">-dì</em> はラテン語の <em lang="la">dies</em>（日）から来ています。<em lang="it">sabato</em> はヘブライ語の「シャバット」、<em lang="it">domenica</em> はラテン語の <em lang="la">dies dominica</em>（主の日）が語源です。',
    mesiH2: '月と季節',
    mesiP:
      '月の名前も小文字で書き、すべて男性名詞です：<em lang="it">un gennaio freddo, un agosto caldo</em>。季節は四つです。',
    mMonth: '<span lang="it">in</span> または <span lang="it">a</span> + 月',
    mSeason: '季節',
    mOf,
    mFromTo: '〜から〜まで',
    mesiNote1:
      '<strong><span lang="it">in</span> と <span lang="it">a</span> のどちら？</strong>月にはどちらも使えます：<em lang="it">in agosto</em> または <em lang="it">ad agosto</em>（母音の前では <em lang="it">ad</em>）、<em lang="it">a maggio</em> または <em lang="it">in maggio</em>。季節には <em lang="it">in estate, in inverno</em> と言いますが、<em lang="it">d’estate, d’inverno</em> とも言います。',
    mesiNote2:
      '<strong>季節の性</strong>　<em lang="it">la primavera</em>（春）と <em lang="it">l’estate</em>（夏）は女性名詞、<em lang="it">l’autunno</em>（秋）と <em lang="it">l’inverno</em>（冬）は男性名詞です。天文学上の季節は各月の21日ごろに始まりますが（<em lang="it">il 21 marzo</em>）、日常生活では表の月で考えます。',
    dateH2: '日付の言い方',
    dateP:
      '日付は「冠詞＋日＋月＋年」の順に言います。日本語とは順番が逆です。日はふつうの数ですが（<em lang="it">il tre maggio</em>）、月の最初の日だけは序数を使います：<em lang="it">il primo maggio</em>。',
    dAsk: '質問',
    dAsk2: 'くだけた質問',
    dWeekday: '曜日と日付',
    dBirthday: '誕生日',
    dYear: '年',
    dLetter: '手紙で',
    dateNote1:
      '<strong>日が先、月があと。</strong>イタリアでは <em lang="it">05/12</em> は <em lang="it">il cinque dicembre</em>（12月5日）で、5月12日ではありません。',
    dateNote2:
      '<strong><span lang="it">l’otto</span> と <span lang="it">l’undici</span></strong>　<em lang="it">otto</em> と <em lang="it">undici</em> は母音で始まるので、冠詞は <em lang="it">l’</em> になります：<em lang="it">l’otto marzo, l’undici settembre</em>。',
    dateNote3:
      '<strong>年には冠詞をつけます：</strong><em lang="it">nel 2019</em>（<em lang="it">in + il</em>、2019年に）、<em lang="it">dal 2020 al 2024</em>。ただし完全な日付では、年は月のあとに冠詞なしで続きます：<em lang="it">il 3 marzo 2026</em>。手紙や書類では日にも冠詞をつけません：<em lang="it">Roma, 3 marzo 2026</em>。',
    quandoH2: '昨日・今日・明日',
    quandoNote1:
      '<strong><span lang="it">stamattina</span> と <span lang="it">stasera</span></strong>は一語です：<em lang="it">questa mattina → stamattina</em>（今朝）、<em lang="it">questa sera → stasera</em>（今晩）。同じように <em lang="it">stanotte</em>（今夜）とも言います。',
    quandoNote2:
      '<strong><span lang="it">scorso</span>（先〜）と <span lang="it">prossimo</span>（来〜）は名詞に合わせて変化します：</strong><em lang="it">il mese scorso, la settimana scorsa</em>。<em lang="it">prossimo</em> は名詞の前にも置けます：<em lang="it">la prossima settimana</em> = <em lang="it">la settimana prossima</em>。',
    freqH3: 'どのくらいの頻度？',
    fEvery: '毎日',
    fTimes: '週に',
    fMonth: '月に',
    fNever: '一度も〜ない',
    faH2: '<span lang="it">fa</span>、<span lang="it">tra</span>、<span lang="it">da</span>',
    faP: '<em lang="it">fa</em>（〜前）は過去を振り返り、時間を表す語のあとに置きます：<em lang="it">due anni fa</em>（2年前）。<em lang="it">tra</em>（<em lang="it">fra</em> も同じ意味）は未来を向き、時間を表す語の前に置きます：<em lang="it">tra due anni</em>（2年後）。',
    faPast: '過去',
    faFuture: '未来',
    faFra,
    faDa: '<span lang="it">da</span> + 期間',
    faNote:
      '<strong><span lang="it">da</span> + 期間は現在形で。</strong>過去に始まって今も続いている行為には、<em lang="it">da</em> と現在形を使います：<em lang="it">studio italiano da due anni</em>（2年前からイタリア語を勉強しています）。<em lang="it">per due anni</em> とは言いません。',
    exIntro: '3部構成の30問です。空欄に入る部分だけを書いてください。入力と同時に答え合わせされます。',
    part1H3: '第1部・曜日、月、季節',
    part1P: '空欄に入る語を書きましょう。',
    part2H3: '第2部・日付',
    part2P: '日付を完成させましょう。数はつづりで書きます。',
    part3H3: '第3部・昨日、今日、明日、<span lang="it">fa</span> と <span lang="it">tra</span>',
    part3P: '空欄に入る語を書きましょう。',
  },
};

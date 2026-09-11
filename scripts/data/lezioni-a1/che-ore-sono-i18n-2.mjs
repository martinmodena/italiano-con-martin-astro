// «Che ore sono? L’ora in italiano»: ceco, polacco, turco, giapponese.
// Le forme italiane restano in <em lang="it"> / <span lang="it">.

const qAll = '<span lang="it">All’una</span>';
const qA = '<span lang="it">A mezzogiorno, a mezzanotte</span>';

export default {
  cs: {
    h1: 'Hodiny a čas v italštině',
    card: 'Kolik je hodin, <span lang="it">a che ora</span>, jízdní řády a části dne.',
    lead: 'Zeptat se, kolik je hodin, a odpovědět, domluvit si schůzku, přečíst jízdní řád vlaku. Najdete tu pravidla, části dne a 30 cvičení.',
    description:
      'Čas v italštině jednoduše: che ore sono?, è l’una a sono le due, e un quarto, e mezza, meno dieci, a che ora?, alle a all’, oficiální čas a 30 cvičení.',
    oraH2: 'Kolik je hodin?',
    oraP: 'Na čas se můžete zeptat dvěma otázkami, obě jsou správné: <em lang="it">Che ore sono?</em> a <em lang="it">Che ora è?</em> V odpovědi používáme <em lang="it">essere</em> a ženský člen, protože myslíme na slovo <em lang="it">ore</em> (hodiny): <em lang="it">sono le tre</em>.',
    oraNote1:
      '<strong>Proč <span lang="it">è l’una</span>, ale <span lang="it">sono le due</span>?</strong> Jedna hodina je jen jedna, proto je sloveso v jednotném čísle: <em lang="it">è l’una</em>. Od dvou hodin je hodin víc, proto je sloveso v množném čísle: <em lang="it">sono le due, sono le dieci</em>.',
    oraNote2:
      '<strong><span lang="it">Mezzogiorno</span> (poledne) a <span lang="it">mezzanotte</span> (půlnoc)</strong> nemají člen: <em lang="it">è mezzogiorno, è mezzanotte</em>. Ve 12:00 se říká také <em lang="it">sono le dodici</em>.',
    minH2: 'Minuty: <span lang="it">e, meno, un quarto, mezza</span>',
    minP: 'Za hodinu se přidávají minuty se spojkou <em lang="it">e</em> (a). Po půl hodině lze také říct, kolik minut chybí do další hodiny, se slovem <em lang="it">meno</em> (méně).',
    minNote1:
      '<strong><span lang="it">Mezza</span>, nebo <span lang="it">mezzo</span>?</strong> Obojí je správně: <em lang="it">le tre e mezza</em>, <em lang="it">le tre e mezzo</em>. Pozor: počítá se od celé hodiny, takže <em lang="it">le tre e mezza</em> je 3:30, tedy „půl čtvrté“, ne „půl třetí“. U čtvrthodiny je potřeba <em lang="it">un</em>: <em lang="it">le tre e un quarto</em>.',
    minNote2:
      '<strong><span lang="it">Meno</span> znamená, že minuty chybí.</strong> <em lang="it">Sono le quattro meno venti</em> = <em lang="it">mancano venti minuti alle quattro</em> (za dvacet minut čtyři). <em lang="it">Meno</em> se obvykle používá, když chybí 20 minut nebo méně.',
    quandoH2: 'V kolik? <span lang="it">Alle, all’, a mezzogiorno</span>',
    quandoP:
      'Když říkáme, kdy se něco děje, používáme <em lang="it">a</em> + člen: <em lang="it">alle</em> (<em lang="it">a + le</em>) u téměř všech hodin, <em lang="it">all’</em> (<em lang="it">a + l’</em>) u jedné hodiny. U <em lang="it">mezzogiorno</em> a <em lang="it">mezzanotte</em> stačí <em lang="it">a</em>.',
    qAsk: 'Otázka',
    qAlle: '<span lang="it">Alle</span> + hodina',
    qAll,
    qA,
    qDalle: 'Od… do…',
    qVerso: 'Přibližně',
    qPunto: 'Přesně',
    qRitardo: 'Zpoždění',
    quandoNote:
      '<strong><span lang="it">Che ore sono?</span>, nebo <span lang="it">A che ora?</span></strong> <em lang="it">Che ore sono?</em> se ptá, kolik je hodin teď: <em lang="it">sono le otto</em>. <em lang="it">A che ora…?</em> se ptá, kdy se něco děje: <em lang="it">alle otto</em>.',
    h24H2: 'Běžný a oficiální čas',
    h24P: 'S přáteli a v rodině se používají hodiny od 1 do 12 a v případě potřeby se přidá část dne: <em lang="it">le otto di mattina, le otto di sera</em>. V oficiálních údajích (vlaky, obchody, úřady, televize) se používá 24hodinový čas a minuty se říkají číslem.',
    h24Note:
      '<strong>V oficiálním čase žádné <span lang="it">quarto</span>, <span lang="it">mezza</span> ani <span lang="it">meno</span>.</strong> Vlak v 17:45 odjíždí <em lang="it">alle diciassette e quarantacinque</em>, ne <em lang="it">alle sei meno un quarto</em>.',
    dayH2: 'Části dne',
    dayNote1:
      '<strong><span lang="it">Di mattina, del pomeriggio, di sera, di notte</span>.</strong> S hodinou se říká <em lang="it">le otto di mattina</em> (nebo <em lang="it">del mattino</em>), <em lang="it">le tre del pomeriggio</em>, <em lang="it">le nove di sera</em>, <em lang="it">le due di notte</em>. Časy v tabulce jsou jen orientační.',
    dayNote2:
      '<strong><span lang="it">Buongiorno, buonasera, buonanotte</span>.</strong> <em lang="it">Buongiorno</em> se používá ráno a do časného odpoledne, <em lang="it">buonasera</em> od odpoledne dál. <em lang="it">Buonanotte</em> se říká jen před spaním nebo při loučení pozdě v noci.',
    exIntro: '30 vět ve třech částech. Napište jen to, co chybí: kontrola probíhá už během psaní.',
    part1H3: 'Část 1 · <span lang="it">Che ore sono?</span>',
    part1P: 'Podívejte se na čas v závorce a doplňte odpověď.',
    part2H3: 'Část 2 · V kolik?',
    part2P: 'Napište chybějící slovo.',
    part3H3: 'Část 3 · Oficiální čas a části dne',
    part3P: 'Přečtěte si čas a doplňte větu.',
  },
  pl: {
    h1: 'Która godzina? Godziny po włosku',
    card: 'Pytanie o godzinę, <span lang="it">a che ora</span>, rozkłady jazdy i pory dnia.',
    lead: 'Zapytać o godzinę i ją podać, umówić się na spotkanie, odczytać rozkład jazdy pociągu. Znajdziesz tu zasady, pory dnia i 30 ćwiczeń.',
    description:
      'Godziny po włosku w prosty sposób: che ore sono?, è l’una i sono le due, e un quarto, e mezza, meno dieci, a che ora?, alle i all’, czas oficjalny i 30 ćwiczeń.',
    oraH2: 'Pytanie o godzinę i odpowiedź',
    oraP: 'O godzinę można zapytać na dwa sposoby, oba poprawne: <em lang="it">Che ore sono?</em> i <em lang="it">Che ora è?</em> W odpowiedzi używamy <em lang="it">essere</em> i rodzajnika żeńskiego, bo myślimy o słowie <em lang="it">ore</em> (godziny): <em lang="it">sono le tre</em>.',
    oraNote1:
      '<strong>Dlaczego <span lang="it">è l’una</span>, ale <span lang="it">sono le due</span>?</strong> Pierwsza to tylko jedna godzina, więc czasownik jest w liczbie pojedynczej: <em lang="it">è l’una</em>. Od drugiej godzin jest więcej, więc czasownik jest w liczbie mnogiej: <em lang="it">sono le due, sono le dieci</em>.',
    oraNote2:
      '<strong><span lang="it">Mezzogiorno</span> (południe) i <span lang="it">mezzanotte</span> (północ)</strong> nie mają rodzajnika: <em lang="it">è mezzogiorno, è mezzanotte</em>. O 12:00 mówi się też <em lang="it">sono le dodici</em>.',
    minH2: 'Minuty: <span lang="it">e, meno, un quarto, mezza</span>',
    minP: 'Po godzinie dodaje się minuty ze spójnikiem <em lang="it">e</em> (i). Po wpół można też powiedzieć, ilu minut brakuje do następnej godziny, ze słowem <em lang="it">meno</em> (mniej).',
    minNote1:
      '<strong><span lang="it">Mezza</span> czy <span lang="it">mezzo</span>?</strong> Obie formy są poprawne: <em lang="it">le tre e mezza</em>, <em lang="it">le tre e mezzo</em>. Uwaga: liczy się od pełnej godziny, więc <em lang="it">le tre e mezza</em> to 3:30, czyli „wpół do czwartej”, a nie „wpół do trzeciej”. Przy kwadransie potrzebne jest <em lang="it">un</em>: <em lang="it">le tre e un quarto</em>.',
    minNote2:
      '<strong><span lang="it">Meno</span> znaczy, że brakuje minut.</strong> <em lang="it">Sono le quattro meno venti</em> = <em lang="it">mancano venti minuti alle quattro</em> (za dwadzieścia czwarta). Zwykle używa się <em lang="it">meno</em>, gdy brakuje 20 minut lub mniej.',
    quandoH2: 'O której? <span lang="it">Alle, all’, a mezzogiorno</span>',
    quandoP:
      'Aby powiedzieć, kiedy coś się dzieje, używamy <em lang="it">a</em> + rodzajnik: <em lang="it">alle</em> (<em lang="it">a + le</em>) przy prawie wszystkich godzinach, <em lang="it">all’</em> (<em lang="it">a + l’</em>) przy pierwszej. Przy <em lang="it">mezzogiorno</em> i <em lang="it">mezzanotte</em> wystarczy <em lang="it">a</em>.',
    qAsk: 'Pytanie',
    qAlle: '<span lang="it">Alle</span> + godzina',
    qAll,
    qA,
    qDalle: 'Od… do…',
    qVerso: 'Mniej więcej',
    qPunto: 'Punktualnie',
    qRitardo: 'Spóźnienie',
    quandoNote:
      '<strong><span lang="it">Che ore sono?</span> czy <span lang="it">A che ora?</span></strong> <em lang="it">Che ore sono?</em> to pytanie o godzinę teraz: <em lang="it">sono le otto</em>. <em lang="it">A che ora…?</em> to pytanie, kiedy coś się dzieje: <em lang="it">alle otto</em>.',
    h24H2: 'Godziny na co dzień i czas oficjalny',
    h24P: 'Z przyjaciółmi i rodziną używa się godzin od 1 do 12 i w razie potrzeby dodaje porę dnia: <em lang="it">le otto di mattina, le otto di sera</em>. W oficjalnych rozkładach (pociągi, sklepy, urzędy, telewizja) używa się zegara 24-godzinnego, a minuty podaje się liczbą.',
    h24Note:
      '<strong>W czasie oficjalnym nie ma <span lang="it">quarto</span>, <span lang="it">mezza</span> ani <span lang="it">meno</span>.</strong> Pociąg o 17:45 odjeżdża <em lang="it">alle diciassette e quarantacinque</em>, a nie <em lang="it">alle sei meno un quarto</em>.',
    dayH2: 'Pory dnia',
    dayNote1:
      '<strong><span lang="it">Di mattina, del pomeriggio, di sera, di notte</span>.</strong> Z godziną mówi się <em lang="it">le otto di mattina</em> (lub <em lang="it">del mattino</em>), <em lang="it">le tre del pomeriggio</em>, <em lang="it">le nove di sera</em>, <em lang="it">le due di notte</em>. Godziny w tabeli są orientacyjne.',
    dayNote2:
      '<strong><span lang="it">Buongiorno, buonasera, buonanotte</span>.</strong> <em lang="it">Buongiorno</em> mówi się rano i do wczesnego popołudnia, <em lang="it">buonasera</em> od popołudnia. <em lang="it">Buonanotte</em> mówi się tylko przed snem albo przy pożegnaniu późno w nocy.',
    exIntro: '30 zdań w trzech częściach. Wpisz tylko to, czego brakuje: poprawka pojawia się już podczas pisania.',
    part1H3: 'Część 1 · <span lang="it">Che ore sono?</span>',
    part1P: 'Spójrz na godzinę w nawiasie i uzupełnij odpowiedź.',
    part2H3: 'Część 2 · O której?',
    part2P: 'Wpisz brakujące słowo.',
    part3H3: 'Część 3 · Czas oficjalny i pory dnia',
    part3P: 'Przeczytaj godzinę i uzupełnij zdanie.',
  },
  tr: {
    h1: 'İtalyancada saat',
    card: 'Saati sormak ve söylemek, <span lang="it">a che ora</span>, tarifeler ve günün bölümleri.',
    lead: 'Saati sormak ve söylemek, randevu vermek, tren tarifesini okumak. Burada kuralları, günün bölümlerini ve 30 alıştırmayı bulacaksınız.',
    description:
      'İtalyancada saat kolayca: che ore sono?, è l’una ve sono le due, e un quarto, e mezza, meno dieci, a che ora?, alle ve all’, resmî saat ve 30 alıştırma.',
    oraH2: 'Saati sormak ve söylemek',
    oraP: 'Saati sormanın iki yolu vardır ve ikisi de doğrudur: <em lang="it">Che ore sono?</em> ve <em lang="it">Che ora è?</em> Cevapta <em lang="it">essere</em> fiilini ve dişil artikeli kullanırız, çünkü aklımızda <em lang="it">ore</em> (saatler) kelimesi vardır: <em lang="it">sono le tre</em>.',
    oraNote1:
      '<strong>Neden <span lang="it">è l’una</span> ama <span lang="it">sono le due</span>?</strong> Saat bir, tek bir saattir; bu yüzden fiil tekildir: <em lang="it">è l’una</em>. Saat ikiden itibaren birden fazla saat vardır; bu yüzden fiil çoğuldur: <em lang="it">sono le due, sono le dieci</em>.',
    oraNote2:
      '<strong><span lang="it">Mezzogiorno</span> (öğle) ve <span lang="it">mezzanotte</span> (gece yarısı)</strong> artikel almaz: <em lang="it">è mezzogiorno, è mezzanotte</em>. Saat 12:00 için <em lang="it">sono le dodici</em> da denir.',
    minH2: 'Dakikalar: <span lang="it">e, meno, un quarto, mezza</span>',
    minP: 'Saatten sonra dakikalar <em lang="it">e</em> (ve) ile eklenir. Buçuktan sonra, bir sonraki saate kaç dakika kaldığını <em lang="it">meno</em> (eksi) ile de söyleyebilirsiniz.',
    minNote1:
      '<strong><span lang="it">Mezza</span> mı, <span lang="it">mezzo</span> mu?</strong> İkisi de doğrudur: <em lang="it">le tre e mezza</em>, <em lang="it">le tre e mezzo</em>. Çeyrek için ise <em lang="it">un</em> gerekir: <em lang="it">le tre e un quarto</em>.',
    minNote2:
      '<strong><span lang="it">Meno</span>, dakikaların eksik olduğunu gösterir.</strong> <em lang="it">Sono le quattro meno venti</em> = <em lang="it">mancano venti minuti alle quattro</em> (dörde yirmi var). <em lang="it">Meno</em> genellikle 20 dakika ya da daha az kaldığında kullanılır.',
    quandoH2: 'Saat kaçta? <span lang="it">Alle, all’, a mezzogiorno</span>',
    quandoP:
      'Bir şeyin ne zaman olduğunu söylemek için <em lang="it">a</em> + artikel kullanırız: neredeyse bütün saatlerle <em lang="it">alle</em> (<em lang="it">a + le</em>), saat birle <em lang="it">all’</em> (<em lang="it">a + l’</em>). <em lang="it">Mezzogiorno</em> ve <em lang="it">mezzanotte</em> ile yalnızca <em lang="it">a</em> yeterlidir.',
    qAsk: 'Soru',
    qAlle: '<span lang="it">Alle</span> + saat',
    qAll,
    qA,
    qDalle: 'Başlangıç ve bitiş',
    qVerso: 'Aşağı yukarı',
    qPunto: 'Tam saatinde',
    qRitardo: 'Gecikme',
    quandoNote:
      '<strong><span lang="it">Che ore sono?</span> mu, <span lang="it">A che ora?</span> mı?</strong> <em lang="it">Che ore sono?</em> şu anki saati sorar: <em lang="it">sono le otto</em>. <em lang="it">A che ora…?</em> bir şeyin ne zaman olduğunu sorar: <em lang="it">alle otto</em>.',
    h24H2: 'Günlük saat ve resmî saat',
    h24P: 'Arkadaşlarla ve aileyle 1’den 12’ye kadar saatler kullanılır, gerekirse günün bölümü eklenir: <em lang="it">le otto di mattina, le otto di sera</em>. Resmî saatlerde (trenler, dükkânlar, resmî daireler, televizyon) 24 saat düzeni kullanılır ve dakikalar sayıyla söylenir.',
    h24Note:
      '<strong>Resmî saatte <span lang="it">quarto</span>, <span lang="it">mezza</span> ve <span lang="it">meno</span> kullanılmaz.</strong> 17:45 treni <em lang="it">alle diciassette e quarantacinque</em> kalkar; <em lang="it">alle sei meno un quarto</em> değil.',
    dayH2: 'Günün bölümleri',
    dayNote1:
      '<strong><span lang="it">Di mattina, del pomeriggio, di sera, di notte</span>.</strong> Saatle birlikte <em lang="it">le otto di mattina</em> (ya da <em lang="it">del mattino</em>), <em lang="it">le tre del pomeriggio</em>, <em lang="it">le nove di sera</em>, <em lang="it">le due di notte</em> denir. Tablodaki saatler yaklaşıktır.',
    dayNote2:
      '<strong><span lang="it">Buongiorno, buonasera, buonanotte</span>.</strong> <em lang="it">Buongiorno</em> sabah ve öğleden sonranın ilk saatlerine kadar, <em lang="it">buonasera</em> öğleden sonradan itibaren kullanılır. <em lang="it">Buonanotte</em> yalnızca yatmaya giderken ya da gece geç saatte vedalaşırken söylenir.',
    exIntro: 'Üç bölümde 30 cümle. Yalnızca eksik olanı yazın: düzeltme siz yazarken gelir.',
    part1H3: 'Bölüm 1 · <span lang="it">Che ore sono?</span>',
    part1P: 'Parantez içindeki saate bakın ve cevabı tamamlayın.',
    part2H3: 'Bölüm 2 · Saat kaçta?',
    part2P: 'Eksik kelimeyi yazın.',
    part3H3: 'Bölüm 3 · Resmî saat ve günün bölümleri',
    part3P: 'Saati okuyun ve cümleyi tamamlayın.',
  },
  ja: {
    h1: 'イタリア語の時刻の言い方',
    card: '時刻の聞き方と言い方、<span lang="it">a che ora</span>、時刻表、一日の時間帯。',
    lead: '時刻をたずねて答える、待ち合わせの時間を決める、電車の時刻表を読む。このレッスンでは、ルール、一日の時間帯と30問の練習問題を学びます。',
    description:
      'イタリア語の時刻の言い方をやさしく解説：che ore sono?、è l’una と sono le due、e un quarto、e mezza、meno dieci、a che ora?、alle と all’、24時間制、練習問題30問。',
    oraH2: '時刻のたずね方と答え方',
    oraP: '時刻のたずね方は二つあり、どちらも正しい言い方です：<em lang="it">Che ore sono?</em> と <em lang="it">Che ora è?</em>。答えでは <em lang="it">essere</em> と女性の冠詞を使います。<em lang="it">ore</em>（時間）という語を思い浮かべているからです：<em lang="it">sono le tre</em>。',
    oraNote1:
      '<strong>なぜ <span lang="it">è l’una</span> なのに <span lang="it">sono le due</span> なのでしょう？</strong>1時は一つの時間なので、動詞は単数です：<em lang="it">è l’una</em>。2時からは複数なので、動詞も複数になります：<em lang="it">sono le due, sono le dieci</em>。',
    oraNote2:
      '<strong><span lang="it">mezzogiorno</span>（正午）と <span lang="it">mezzanotte</span>（夜中の12時）</strong>には冠詞をつけません：<em lang="it">è mezzogiorno, è mezzanotte</em>。昼の12時は <em lang="it">sono le dodici</em> とも言います。',
    minH2: '分の言い方：<span lang="it">e, meno, un quarto, mezza</span>',
    minP: '時のあとに <em lang="it">e</em>（と）で分を加えます。30分を過ぎたら、次の時まであと何分かを <em lang="it">meno</em>（マイナス）で言うこともできます。',
    minNote1:
      '<strong><span lang="it">mezza</span> と <span lang="it">mezzo</span> のどちら？</strong>どちらも正しいです：<em lang="it">le tre e mezza</em>、<em lang="it">le tre e mezzo</em>。15分の場合は <em lang="it">un</em> が必要です：<em lang="it">le tre e un quarto</em>。',
    minNote2:
      '<strong><span lang="it">meno</span> は「あと何分」という意味です。</strong><em lang="it">Sono le quattro meno venti</em> = <em lang="it">mancano venti minuti alle quattro</em>（4時20分前）。<em lang="it">meno</em> はふつう、残りが20分以下のときに使います。',
    quandoH2: '何時に？ <span lang="it">Alle, all’, a mezzogiorno</span>',
    quandoP:
      '何かが起こる時刻を言うときは <em lang="it">a</em> + 冠詞を使います：ほとんどの時刻には <em lang="it">alle</em>（<em lang="it">a + le</em>）、1時には <em lang="it">all’</em>（<em lang="it">a + l’</em>）。<em lang="it">mezzogiorno</em> と <em lang="it">mezzanotte</em> には <em lang="it">a</em> だけで十分です。',
    qAsk: '質問',
    qAlle: '<span lang="it">alle</span> + 時刻',
    qAll,
    qA,
    qDalle: '〜から〜まで',
    qVerso: 'だいたい',
    qPunto: 'ちょうど',
    qRitardo: '遅刻',
    quandoNote:
      '<strong><span lang="it">Che ore sono?</span> と <span lang="it">A che ora?</span> の違い</strong>　<em lang="it">Che ore sono?</em> は今の時刻をたずねます：<em lang="it">sono le otto</em>。<em lang="it">A che ora…?</em> は何かが起こる時刻をたずねます：<em lang="it">alle otto</em>。',
    h24H2: '日常の言い方と公式の時刻',
    h24P: '友人や家族との会話では1〜12時を使い、必要なら時間帯を加えます：<em lang="it">le otto di mattina, le otto di sera</em>。公式の時刻（電車、お店、役所、テレビ）では24時間制を使い、分は数字で言います。',
    h24Note:
      '<strong>公式の時刻では <span lang="it">quarto</span>、<span lang="it">mezza</span>、<span lang="it">meno</span> を使いません。</strong>17時45分の電車は <em lang="it">alle diciassette e quarantacinque</em> に出発します（<em lang="it">alle sei meno un quarto</em> ではありません）。',
    dayH2: '一日の時間帯',
    dayNote1:
      '<strong><span lang="it">Di mattina, del pomeriggio, di sera, di notte</span></strong>　時刻といっしょに <em lang="it">le otto di mattina</em>（または <em lang="it">del mattino</em>）、<em lang="it">le tre del pomeriggio</em>、<em lang="it">le nove di sera</em>、<em lang="it">le due di notte</em> と言います。表の時間はおおよその目安です。',
    dayNote2:
      '<strong><span lang="it">Buongiorno, buonasera, buonanotte</span></strong>　<em lang="it">Buongiorno</em> は朝から昼過ぎまで、<em lang="it">buonasera</em> は午後から使います。<em lang="it">Buonanotte</em> は寝るときや、夜遅くに別れるときだけ使います。',
    exIntro: '3部構成の30問です。空欄に入る部分だけを書いてください。入力と同時に答え合わせされます。',
    part1H3: '第1部・<span lang="it">Che ore sono?</span>',
    part1P: 'かっこ内の時刻を見て、答えを完成させましょう。',
    part2H3: '第2部・何時に？',
    part2P: '空欄に入る語を書きましょう。',
    part3H3: '第3部・公式の時刻と時間帯',
    part3P: '時刻を読んで、文を完成させましょう。',
  },
};

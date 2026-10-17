// «La pronuncia italiana»: pagina turca (forma cortese). Trappole per chi parla turco: ci = çi, gi = ci,
// ch = k, i gruppi iniziali senza vocale in più (sport, strada), l'accento, la h muta.
// Buone notizie: le doppie esistono anche in turco (anne, dikkat), e ş, ç, c, ny ci sono già.
export default {
  h1: 'İtalyanca telaffuz',
  lead: 'İtalyanca neredeyse her zaman yazıldığı gibi okunur: birkaç kural, her kelimeyi sesli okumaya yeter. Burada bu kuralları dinleyerek öğreneceksiniz: beş ünlü, C ve G, özel sesler, çift ünsüzler (<em lang="it">casa</em> mı, <em lang="it">cassa</em> mı?), vurgu, Türkçe konuşanları bekleyen tuzaklar ve pratik için dört tekerleme.',
  description:
    'Türkler için İtalyanca telaffuz, sesli: ünlüler, c ve g, gn, gli, sc, z, çift ünsüzler (casa / cassa, nono / nonno), vurgu ve tekerlemeler. 44 dinleme alıştırması ve sesinizi karşılaştırmak için bir kayıt aracı.',
  card: 'Ünlüler, C ve G, çift ünsüzler (casa / cassa) ve vurgu: sesli ve dinleme alıştırmalı.',
  heroAlt: 'Bir İtalyan kasabasının çatılarına bakan pencerenin önünde, ahşap masanın üzerinde eski bir mikrofon',
  nav: {
    vocali: 'Ünlüler',
    cg: 'C ve G',
    suoni: 'Özel sesler',
    doppie: 'Çift ünsüzler',
    accento: 'Vurgu',
    trappole: 'Tuzaklar',
    scioglilingua: 'Tekerlemeler',
  },
  ui: {
    play: 'Dinleyin',
    slow: 'Daha yavaş',
    record: 'Sesinizi kaydedin',
    stop: 'Durdur',
    yours: 'Sizin sesiniz',
    micError: 'Mikrofon kullanılamıyor: tarayıcı izinlerini kontrol edin.',
    correct: 'Doğru!',
    wrong: 'Hayır, doğrusu:',
    listenFirst: 'Önce dinleyin, sonra seçin.',
    score: '{n} / {t}',
    again: 'Yeni tur',
    total: 'Sonucunuz',
    vs: 'veya',
  },
  how: {
    h2: 'Bu ders nasıl çalışır?',
    html: '<p>Bir kelimeyi dinlemek için <strong>▶</strong>, daha yavaş dinlemek için <strong>🐢</strong> düğmesine basın. Dinleme alıştırmalarında sayfa rastgele bir kelime seçer: dinleyin ve duyduğunuz kelimeyi seçin. <strong>🎙 Sesinizi kaydedin</strong> düğmesiyle kendi sesinizi kaydedip örnekle karşılaştırabilirsiniz: kayıt tarayıcınızda kalır, hiçbir yere gönderilmez.</p><p class="mini-note"><strong>İtalyancanın sırrı:</strong> Türkçede olduğu gibi her harfin (neredeyse) her zaman aynı sesi vardır. Sürpriz sessiz harf yok, biri hariç: <em lang="it">h</em>. Bu sayfadaki kuralları bilen, hiç görmediği kelimeleri bile okuyabilir.</p>',
  },
  vowels: {
    h2: 'Beş ünlü: her zaman temiz, her zaman tam',
    intro:
      '<p>İyi haber: İtalyancanın beş ünlüsü Türkçedeki a, e, i, o, u ile hemen hemen aynıdır. Ama <strong>ı</strong>, <strong>ö</strong> ve <strong>ü</strong> yoktur. Yüzlere bakın: işin yarısını ağız yapar.</p>',
    cues: {
      a: {
        cue: 'Ağız kocaman açık, doktordaki gibi: “Aaa deyin.”',
        alt: 'Doktordaymış gibi ağzını kocaman açan bir büyükanne',
      },
      e: { cue: 'Ağız yarı açık, biraz yayvan: “Ee? Ne?”', alt: 'Ağzı yarı açık “e?” diyen bir genç' },
      i: {
        cue: 'Fotoğraf gülümsemesi: dudaklar yanlara gerilir, “peynir” der gibi.',
        alt: 'Fotoğraf için kocaman gülümseyen bir kız çocuğu',
      },
      o: {
        cue: 'Yuvarlak dudaklar, şaşırınca olduğu gibi: “Oo!”',
        alt: 'Dudaklarını yuvarlayıp “o!” diyen genç bir kadın',
      },
      u: { cue: 'Dudaklar öne, baykuş gibi: “Uuu.”', alt: 'Baykuş gibi “uuu” diyen sakallı bir bey' },
    },
    finalH3: 'Son ünlü de duyulur',
    final:
      '<p>İtalyancada kelimenin sonundaki ünlü asla yutulmaz: <em lang="it">pizz<strong>a</strong></em>, <em lang="it">Rom<strong>a</strong></em>, <em lang="it">gelat<strong>o</strong></em>, <em lang="it">nott<strong>e</strong></em>. Çoğu zaman bir şeyin tek mi çok mu olduğunu (<em lang="it">la pizza</em>, <em lang="it">le pizze</em>) ya da eril mi dişil mi olduğunu söyleyen de odur.</p>',
    eoH3: 'Meraklılara bonus: E ve O’nun iki sesi var',
    eo: '<p><em lang="it">E</em> ve <em lang="it">o</em> açık ya da kapalı olabilir. Ünlü bir örnek: <em lang="it">la pèsca</em> (şeftali) ve <em lang="it">la pésca</em> (balık tutma) aynı yazılır. İçiniz rahat olsun: Milano, Roma ve Napoli’de İtalyanlar bile anlaşamıyor ve herkes sizi yine anlayacaktır.</p>',
    peach: 'la pèsca: şeftali',
    fishing: 'la pésca: balık tutma',
  },
  cg: {
    h2: 'C ve G: sert mi, yumuşak mı?',
    intro:
      '<p>İtalyancada <em lang="it">c</em> ve <em lang="it">g</em> iki sese sahiptir ve Türkçedeki gibi okunmaz. Karar veren, sonraki harftir: <em lang="it">a</em>, <em lang="it">o</em>, <em lang="it">u</em> önünde serttirler, <em lang="it">e</em> ve <em lang="it">i</em> önünde yumuşarlar.</p>',
    cols: ['Yazılış', 'Okunuş', 'Örnekler'],
    sounds: {
      k: 'sert, “kedi”deki <strong>k</strong> gibi',
      c: 'yumuşak, “çay”daki <strong>ç</strong> gibi',
      g: 'sert, “gül”deki <strong>g</strong> gibi',
      j: 'yumuşak, “cam”daki <strong>c</strong> gibi',
    },
    tricks:
      '<p class="mini-note"><strong>H bir duvardır:</strong> <em lang="it">c</em> ile <em lang="it">e</em> ya da <em lang="it">i</em> arasına girince yumuşamayı engeller. Bu yüzden <em lang="it">chiave</em> ve <em lang="it">spaghetti</em> sert kalır: <em lang="it">chi</em> = “ki”, <em lang="it">che</em> = “ke”.</p><p class="mini-note"><strong>I sessiz bir köprüdür:</strong> <em lang="it">ciao</em>, <em lang="it">giallo</em> ve <em lang="it">giorno</em> kelimelerinde <em lang="it">i</em> sadece ünsüzü yumuşatmak için oradadır. “Çi-ao” denmez, tek hecede <em lang="it">ciao</em> denir: “çao”.</p>',
    exH3: 'Alıştırma 1 · Sert mi, yumuşak mı?',
    exP: 'Kelimeyi okuyun ve sesi seçin. Cevaptan sonra nasıl okunduğunu duyacaksınız.',
    hard: 'Sert (casa, gatto)',
    soft: 'Yumuşak (ciao, gelato)',
  },
  sounds: {
    h2: 'Özel sesler',
    intro: '<p>Bilinmesi gereken yedi harf grubu. Kelimeleri dinleyin ve yüksek sesle tekrarlayın.</p>',
    items: {
      gn: {
        title: '<em lang="it">gnocchi</em> kelimesindeki <em lang="it">gn</em>',
        text: 'Tek bir ses, “ny” gibi: <em lang="it">Spagna</em> = “Spanya”, <em lang="it">bagno</em> = “banyo”. <em lang="it">G</em> duyulmaz.',
        alt: 'Domates soslu ve fesleğenli bir tabak gnocchi',
      },
      gli: {
        title: '<em lang="it">aglio</em> kelimesindeki <em lang="it">gli</em>',
        text: 'Yumuşak bir <strong>l</strong>, tek seste “ly” gibi: dilin ortası damağa yaslanır. <em lang="it">Aglio</em> = “alyo”, <em lang="it">figlio</em> = “filyo”. <em lang="it">G</em> duyulmaz.',
        alt: 'Bir baş sarımsak',
      },
      sc: {
        title: '<em lang="it">sciarpa</em> kelimesindeki <em lang="it">sc</em>',
        text: '<em lang="it">e</em> ve <em lang="it">i</em> önünde <strong>ş</strong> olur: <em lang="it">scena</em> = “şena”, <em lang="it">pesce</em> = “peşe”. <em lang="it">a</em>, <em lang="it">o</em>, <em lang="it">u</em> önünde ve <em lang="it">h</em> ile “sk” olur: <em lang="it">scuola</em>, <em lang="it">schiena</em>.',
        alt: 'Kırmızı yün bir atkı',
      },
      z: {
        title: '<em lang="it">pizza</em> ve <em lang="it">zebra</em> kelimelerindeki <em lang="it">z</em>',
        text: 'Türkçedeki “z” değildir. İki sesi vardır: <em lang="it">pizza</em> ve <em lang="it">grazie</em> kelimelerinde “ts” (“pitsa”, “gratsie”), <em lang="it">zebra</em> ve <em lang="it">zero</em> kelimelerinde “dz”. İkisini karıştırırsanız kimse fark etmez: bölgeden bölgeye değişir.',
        alt: 'Domatesli, sarımsaklı ve kekikli bir pizza marinara',
      },
      s: {
        title: '<em lang="it">sole</em> ve <em lang="it">rosa</em> kelimelerindeki <em lang="it">s</em>',
        text: 'Kelime başında Türkçedeki <strong>s</strong> gibidir: <em lang="it">sole</em>, <em lang="it">sale</em>. İki ünlü arasında, kuzeyde, <strong>z</strong> gibi vızıldar: <em lang="it">rosa</em> = “roza”, <em lang="it">casa</em> = “kaza”.',
        alt: 'Pembe bir gül',
      },
      r: {
        title: '<em lang="it">rana</em> kelimesindeki <em lang="it">r</em>',
        text: 'Türkçedeki <strong>r</strong>’ye çok yakındır: dilin ucu üst dişlerin arkasına bir kez vurur (<em lang="it">caro</em>). Çift <em lang="it">rr</em> daha uzun bir titreşimdir (<em lang="it">carro</em>). Kelime sonunda bile net kalır, hışırtıya dönmez.',
        alt: 'Yeşil bir kurbağa',
      },
      h: {
        title: '<em lang="it">h</em>: utangaç harf',
        text: 'Türkçenin aksine, hiç sesi yoktur. <em lang="it">Ho</em>, <em lang="it">hai</em>, <em lang="it">ha</em>, <em lang="it">hanno</em> “o”, “ay”, “a”, “anno” diye okunur. Sadece yazılı kelimeleri ayırmaya ve <em lang="it">c</em> ile <em lang="it">g</em>’yi sertleştirmeye yarar.',
      },
    },
  },
  doubles: {
    h2: 'Çift ünsüzler: kedinin sıçrayışı',
    intro:
      '<p>Çift ünsüz sadece iki kez yazılmaz: daha uzun söylenir. Sıçramadan önceki bir kediyi düşünün: bir an durur, hazırlanır… ve sıçrar. <em lang="it">Cassa</em> kelimesinde ses, devam etmeden önce <em lang="it">s</em> üzerinde durur; <em lang="it">casa</em> kelimesinde durmaz.</p>',
    catAlt: 'Bir basamağın kenarında çömelmiş, sıçramaya hazır bir kedi',
    how: '<p class="mini-note"><strong>Nasıl yapılır:</strong> bunu zaten biliyorsunuz! Türkçede “a<strong>nn</strong>e”, “e<strong>ll</strong>i”, “di<strong>kk</strong>at” nasıl söyleniyorsa, İtalyancada <em lang="it">nonno</em>, <em lang="it">palla</em>, <em lang="it">tutto</em> de öyle söylenir. <em lang="it">tt</em>, <em lang="it">pp</em>, <em lang="it">cc</em> ile ağız kapanır ve bir an bekler; <em lang="it">ss</em>, <em lang="it">ll</em>, <em lang="it">nn</em>, <em lang="it">mm</em>, <em lang="it">rr</em> ile ses uzar.</p>',
    pairsH3: 'Bir harf her şeyi değiştirir',
    anno: '<p class="mini-note"><strong>Yılbaşı dileklerine dikkat:</strong> 31 Aralık’ta iki <em lang="it">n</em> ile <em lang="it">Buon anno!</em> (Mutlu yıllar!) denir. Tek <em lang="it">n</em> ile söylerseniz, sofrada adı anılmayan bir vücut bölümüne iyi şanslar dilemiş olursunuz. İtalyanlar güler, ama siz <em lang="it">n</em>’yi uzatın!</p>',
    exH3: 'Alıştırma 2 · Dinleyin ve seçin',
    exP: '▶ düğmesine basın, dinleyin ve duyduğunuz kelimeyi seçin. “Yeni tur” ile sayfa başka kelimeler seçer.',
  },
  stress: {
    h2: 'Vurgu: sesin vurduğu yer',
    intro:
      '<p>Türkçede vurgu genellikle son hecededir; İtalyancada çoğu zaman sondan bir önceki hecededir. Vurgu işareti sadece vurgu son ünlüye düştüğünde yazılır.</p>',
    groups: {
      penult: 'Sondan bir önceki hecede: neredeyse bütün kelimeler',
      last: 'Son hecede: vurgu işareti yazılır',
      third: 'Sondan üçüncü hecede: az ama sık kullanılan kelimeler',
    },
    anchorH3: 'Bir vurgu, iki kelime',
    anchor:
      '<p>Harfler aynı, vurgu farklı: <em lang="it">l’àncora</em> geminin çapası, <em lang="it">ancóra</em> ise “yine, daha” demektir. Ve babanıza, <em lang="it">papà</em>, sakın “<em lang="it">il papa</em>” demeyin: Papa Vatikan’da yaşıyor!</p>',
    anchorShip: 'l’àncora: çapa',
    anchorMore: 'ancóra: yine, daha',
    papa: 'il papà: baba',
    capito:
      '<p class="mini-note"><strong>Şampiyon:</strong> <em lang="it">càpito</em> (bir yere tesadüfen düşerim), <em lang="it">capìto</em> (anlaşıldı: <em lang="it">hai capito?</em>) ve <em lang="it">capitò</em> (oldu, başına geldi). Üç kelime, aynı harfler.</p>',
    exH3: 'Alıştırma 3 · Vurgulu heceye dokunun',
    exP: 'Kelimeyi dinleyin ve sesin vurduğu heceye dokunun.',
  },
  traps: {
    h2: 'Türkçe konuşanlar için tuzaklar',
    intro:
      '<p>Her dil başka bir yerde tökezler. İşte İtalyancada Türk aksanını ele veren beş alışkanlık ve nasıl düzeltileceği.</p>',
    easy: '<p class="mini-note"><strong>İyi haber:</strong> çift ünsüzler Türkçede de var (anne, elli, dikkat): birçok öğrencinin en büyük zorluğu sizin için kolay. <strong>ş</strong> (<em lang="it">sci</em>), <strong>ç</strong> (<em lang="it">ci</em>), <strong>c</strong> (<em lang="it">gi</em>) ve <strong>r</strong> de zaten sizde var.</p>',
    items: [
      {
        title: 'C ve G Türkçedeki gibi değil',
        text: 'İtalyancada <em lang="it">ci</em> = “çi”, <em lang="it">gi</em> = “ci”: <em lang="it">ciao</em> = “çao”, <em lang="it">gelato</em> = “celato”, <em lang="it">cena</em> = “çena”. Türkçedeki <strong>c</strong> sesini <em lang="it">gi</em>, <em lang="it">ge</em> ile yazın.',
        words: ['ciao', 'gelato', 'cena'],
      },
      {
        title: 'Ch her zaman k',
        text: '<em lang="it">chi</em> = “ki”, <em lang="it">che</em> = “ke”, <em lang="it">chiesa</em> (kilise) = “kieza”. Asla “ç” değil.',
        words: ['chi', 'che', 'chiesa'],
      },
      {
        title: 'Baştaki ünsüzlere ünlü eklemeyin',
        text: 'Türkçe “spor”u bazen “ispor” diye söyler, “istasyon”da olduğu gibi. İtalyancada <em lang="it">sport</em>, <em lang="it">strada</em>, <em lang="it">scuola</em> doğrudan ünsüzle başlar: “istrada” değil, <em lang="it">strada</em>.',
        words: ['sport', 'strada', 'scuola'],
      },
      {
        title: 'Vurgu sonda değil',
        text: '“arkadaŞIM” der gibi sona vurmayın: <em lang="it">aMIco</em>, <em lang="it">raGAZza</em>, <em lang="it">baNAna</em>. Vurgu çoğunlukla sondan bir önceki hecededir.',
        words: ['amico', 'ragazza', 'banana'],
      },
      {
        title: 'H susar',
        text: 'Türkçede <strong>h</strong> duyulur, İtalyancada hiç duyulmaz: <em lang="it">hotel</em> = “otel”, <em lang="it">ho fame</em> = “o fame” (açım).',
        words: ['hotel', 'ho fame', 'hanno ragione'],
      },
    ],
    exH3: 'Alıştırma 4 · Tuzak çiftler',
    exP: '<em lang="it">c</em> / <em lang="it">ch</em> ve <em lang="it">sc</em> / <em lang="it">sch</em> ile beş çift, tek ve çift ünsüzle beş çift. Dinleyin ve seçin.',
  },
  twisters: {
    h2: 'Tekerlemeler: ağız için spor salonu',
    intro:
      '<p><em lang="it">Gli scioglilingua</em>, Türkçedeki “Şu köşe yaz köşesi, şu köşe kış köşesi” gibi, insanı tökezletmek için yazılmış cümlelerdir. İtalyanlar onları çocuklara söyler ve herkes güler. Dinleyin, yavaşça tekrarlayın, sonra gittikçe hızlanın. Sesinizi kaydedin ve karşılaştırın!</p>',
    notes: [
      '“Otuz üç Trentolu Trento’ya girdi, otuz üçü de tırıs giderek.” <em lang="it">r</em> ve çift <em lang="it">t</em> çalıştırır: art arda <em lang="it">tr</em>.',
      '“Apollon’un oğlu Apelles, tavuk derisinden bir top yaptı.” Çift ünsüzleri (<em lang="it">palla</em>, <em lang="it">pelle</em>, <em lang="it">pollo</em>) ve <em lang="it">gli</em> sesini çalıştırır.',
      '“Aşçı mutfakta pişirir ve kuzeni yemek yapmadığı için aşçı kadının yatıp sustuğunu söyler.” Sert ve yumuşak <em lang="it">c</em> çalıştırır: <em lang="it">cuoco</em>, <em lang="it">cuoce</em>, <em lang="it">cucina</em>, <em lang="it">giace</em>.',
      '“Hava açık, açık olacak; açık olmazsa açılacak.” <em lang="it">s</em> ve <em lang="it">r</em> çalıştırır: <em lang="it">sereno</em>, <em lang="it">rasserenerà</em>.',
    ],
    challenge:
      '<p class="mini-note"><strong>Meydan okuma:</strong> ilkini üç kez arka arkaya, hızlı ve hatasız söyleyebilir misiniz? İtalyanların çoğu söyleyemez.</p>',
  },
  end: {
    h2: 'Sonucunuz',
    text: 'Dinleme alıştırmaları toplam 44 cevaptan oluşuyor. İstediğiniz zaman tekrarlayın: kelimeler her turda değişir.',
  },
  meanings: {
    casa: 'ev',
    cassa: 'kasa',
    nono: 'dokuzuncu',
    nonno: 'dede',
    pala: 'kürek',
    palla: 'top',
    sete: 'susuzluk',
    sette: 'yedi',
    caro: 'pahalı',
    carro: 'araba (at arabası)',
    capello: 'tek bir saç teli',
    cappello: 'şapka',
    pena: 'acıma, yazık',
    penna: 'dolma kalem',
    sono: 'ben …-im',
    sonno: 'uykululuk',
    rana: 'kurbağa',
    lana: 'yün',
    mare: 'deniz',
    male: 'ağrı',
    bacca: 'meyve tanesi, böğürtlen',
    vacca: 'inek',
    vino: 'şarap',
    voto: 'oy',
    foto: 'fotoğraf',
    alto: 'uzun boylu',
    auto: 'otomobil',
    cane: 'köpek',
    cani: 'köpekler',
    chiave: 'anahtar',
    chiavi: 'anahtarlar',
    pesche: 'şeftaliler',
  },
};

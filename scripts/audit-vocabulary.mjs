import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import * as cheerio from 'cheerio';

const root = path.resolve(process.env.SITE_ROOT ?? 'dist');
const routes = {
  cucina: {
    count: 20,
    it: 'vocabolario/cucina.html',
    en: 'en/vocabulary/italian-kitchen-vocabulary.html',
    es: 'es/vocabulario/vocabulario-cocina-italiano.html',
    fr: 'fr/vocabulaire/vocabulaire-cuisine-italien.html',
    cs: 'cs/slovni-zasoba/italska-slovni-zasoba-kuchyne.html',
    pl: 'pl/slownictwo/wloskie-slownictwo-kuchnia.html',
    tr: 'tr/kelime-bilgisi/italyanca-mutfak-kelimeleri.html',
    de: 'de/wortschatz/italienischer-wortschatz-kueche.html',
    ja: 'ja/goi/italian-kitchen-vocabulary.html',
  },
  salotto: {
    count: 8,
    it: 'vocabolario/salotto.html',
    en: 'en/vocabulary/italian-living-room-vocabulary.html',
    es: 'es/vocabulario/vocabulario-del-salon-en-italiano.html',
    fr: 'fr/vocabulaire/vocabulaire-du-salon-en-italien.html',
    cs: 'cs/slovni-zasoba/italska-slovni-zasoba-obyvaci-pokoj.html',
    pl: 'pl/slownictwo/wloskie-slownictwo-salon.html',
    tr: 'tr/kelime-bilgisi/italyanca-oturma-odasi-kelimeleri.html',
    de: 'de/wortschatz/italienischer-wortschatz-wohnzimmer.html',
    ja: 'ja/goi/italian-living-room-vocabulary.html',
  },
  ufficio: {
    count: 8,
    it: 'vocabolario/ufficio.html',
    en: 'en/vocabulary/italian-office-vocabulary.html',
    es: 'es/vocabulario/vocabulario-de-la-oficina-en-italiano.html',
    fr: 'fr/vocabulaire/vocabulaire-du-bureau-en-italien.html',
    cs: 'cs/slovni-zasoba/italska-slovni-zasoba-kancelar.html',
    pl: 'pl/slownictwo/wloskie-slownictwo-biuro.html',
    tr: 'tr/kelime-bilgisi/italyanca-ofis-kelimeleri.html',
    de: 'de/wortschatz/italienischer-wortschatz-buero.html',
    ja: 'ja/goi/italian-office-vocabulary.html',
  },
  abbigliamento: {
    count: 57,
    it: 'vocabolario/abbigliamento.html',
    en: 'en/vocabulary/italian-clothing-vocabulary.html',
    es: 'es/vocabulario/vocabulario-de-la-ropa-en-italiano.html',
    fr: 'fr/vocabulaire/vocabulaire-des-vetements-en-italien.html',
    cs: 'cs/slovni-zasoba/italska-slovni-zasoba-obleceni.html',
    pl: 'pl/slownictwo/wloskie-slownictwo-ubrania.html',
    tr: 'tr/kelime-bilgisi/italyanca-giyim-kelimeleri.html',
    de: 'de/wortschatz/italienischer-wortschatz-kleidung.html',
    ja: 'ja/goi/italian-clothing-vocabulary.html',
  },
  mare: {
    count: 30,
    it: 'vocabolario/mare.html',
    en: 'en/vocabulary/italian-sea-vocabulary.html',
    es: 'es/vocabulario/vocabulario-del-mar-en-italiano.html',
    fr: 'fr/vocabulaire/vocabulaire-de-la-mer-en-italien.html',
    cs: 'cs/slovni-zasoba/italska-slovni-zasoba-more.html',
    pl: 'pl/slownictwo/wloskie-slownictwo-morze.html',
    tr: 'tr/kelime-bilgisi/italyanca-deniz-kelimeleri.html',
    de: 'de/wortschatz/italienischer-wortschatz-meer.html',
    ja: 'ja/goi/italian-sea-vocabulary.html',
  },
  animali: {
    count: 100,
    it: 'vocabolario/animali.html',
    en: 'en/vocabulary/italian-animals-vocabulary.html',
    es: 'es/vocabulario/vocabulario-de-los-animales-en-italiano.html',
    fr: 'fr/vocabulaire/vocabulaire-des-animaux-en-italien.html',
    cs: 'cs/slovni-zasoba/italska-slovni-zasoba-zvirata.html',
    pl: 'pl/slownictwo/wloskie-slownictwo-zwierzeta.html',
    tr: 'tr/kelime-bilgisi/italyanca-hayvan-kelimeleri.html',
    de: 'de/wortschatz/italienischer-wortschatz-tiere.html',
    ja: 'ja/goi/italian-animals-vocabulary.html',
  },
  // Aggettivi e verbi: niente «Riconosci la parola» (un aggettivo o un verbo non si riconosce da una
  // foto), ma due esercizi con trascinamento: una riga per ogni parola («quale animale e' cosi' / lo
  // fa?») e, per le parole con animali che chiaramente non lo sono, una riga in «non lo e'».
  // Nei verbi tre non hanno riga (dormire, mangiare, camminare: ogni animale lo fa).
  fisiche: {
    count: 32,
    tests: 0,
    match: { positive: 32, negative: 13 },
    it: 'vocabolario/caratteristiche-fisiche-animali.html',
    en: 'en/vocabulary/italian-animal-physical-traits-vocabulary.html',
    es: 'es/vocabulario/vocabulario-caracteristicas-fisicas-animales-en-italiano.html',
    fr: 'fr/vocabulaire/vocabulaire-caracteristiques-physiques-des-animaux-en-italien.html',
    cs: 'cs/slovni-zasoba/italska-slovni-zasoba-fyzicke-vlastnosti-zvirat.html',
    pl: 'pl/slownictwo/wloskie-slownictwo-cechy-fizyczne-zwierzat.html',
    tr: 'tr/kelime-bilgisi/italyanca-hayvan-fiziksel-ozellikleri-kelimeleri.html',
    de: 'de/wortschatz/italienischer-wortschatz-koerperliche-eigenschaften-tiere.html',
    ja: 'ja/goi/italian-animal-physical-traits-vocabulary.html',
  },
  personalita: {
    count: 35,
    tests: 0,
    match: { positive: 35, negative: 10 },
    it: 'vocabolario/personalita-animali.html',
    en: 'en/vocabulary/italian-animal-personality-vocabulary.html',
    es: 'es/vocabulario/vocabulario-personalidad-animales-en-italiano.html',
    fr: 'fr/vocabulaire/vocabulaire-personnalite-des-animaux-en-italien.html',
    cs: 'cs/slovni-zasoba/italska-slovni-zasoba-povaha-zvirat.html',
    pl: 'pl/slownictwo/wloskie-slownictwo-charakter-zwierzat.html',
    tr: 'tr/kelime-bilgisi/italyanca-hayvan-kisiligi-kelimeleri.html',
    de: 'de/wortschatz/italienischer-wortschatz-persoenlichkeit-tiere.html',
    ja: 'ja/goi/italian-animal-personality-vocabulary.html',
  },
  verbi: {
    count: 91,
    tests: 0,
    match: { positive: 88, negative: 7 },
    it: 'vocabolario/verbi-animali.html',
    en: 'en/vocabulary/italian-animal-verbs-vocabulary.html',
    es: 'es/vocabulario/vocabulario-verbos-de-animales-en-italiano.html',
    fr: 'fr/vocabulaire/vocabulaire-verbes-des-animaux-en-italien.html',
    cs: 'cs/slovni-zasoba/italska-slovni-zasoba-slovesa-zvirat.html',
    pl: 'pl/slownictwo/wloskie-slownictwo-czasowniki-zwierzat.html',
    tr: 'tr/kelime-bilgisi/italyanca-hayvan-fiilleri-kelimeleri.html',
    de: 'de/wortschatz/italienischer-wortschatz-verben-tiere.html',
    ja: 'ja/goi/italian-animal-verbs-vocabulary.html',
  },
  cibo: {
    count: 72,
    it: 'vocabolario/cibo.html',
    en: 'en/vocabulary/italian-food-vocabulary.html',
    es: 'es/vocabulario/vocabulario-de-la-comida-en-italiano.html',
    fr: 'fr/vocabulaire/vocabulaire-de-la-nourriture-en-italien.html',
    cs: 'cs/slovni-zasoba/italska-slovni-zasoba-jidlo.html',
    pl: 'pl/slownictwo/wloskie-slownictwo-jedzenie.html',
    tr: 'tr/kelime-bilgisi/italyanca-yemek-kelimeleri.html',
    de: 'de/wortschatz/italienischer-wortschatz-essen.html',
    ja: 'ja/goi/italian-food-vocabulary.html',
  },
};

const errors = [];
let pages = 0;

/** Gli esercizi con trascinamento: righe, risposte giuste presenti in barra, testi di servizio. */
function checkMatchExercises($, relative, expected, errors) {
  for (const [mode, rowCount] of Object.entries(expected)) {
    const section = $(`.match-section[data-match="${mode}"]`);
    if (section.length !== 1) {
      errors.push(`${relative}: expected one ${mode} match section, found ${section.length}`);
      continue;
    }
    const rows = section.find('.match-row');
    if (rows.length !== rowCount) errors.push(`${relative}: ${rows.length} ${mode} match rows, expected ${rowCount}`);
    if (Number(section.attr('data-total')) !== rowCount)
      errors.push(`${relative}: ${mode} data-total is not ${rowCount}`);
    for (const attr of ['data-msg-progress', 'data-msg-correct', 'data-msg-wrong', 'data-msg-complete'])
      if (!section.attr(attr)) errors.push(`${relative}: ${mode} section without ${attr}`);
    section.find('.match-set').each((_, set) => {
      const bank = new Set(
        $(set)
          .find('.match-chip')
          .map((__, chip) => $(chip).attr('data-animal'))
          .get()
      );
      $(set)
        .find('.match-row')
        .each((__, row) => {
          const key = $(row).attr('data-key');
          let ok = [];
          try {
            ok = JSON.parse($(row).attr('data-ok') || '[]');
          } catch {
            errors.push(`${relative}: ${mode} row ${key} has invalid data-ok`);
          }
          if (!ok.length) errors.push(`${relative}: ${mode} row ${key} has no correct answer`);
          if (ok.length >= bank.size)
            errors.push(`${relative}: ${mode} row ${key} has no wrong animal in its tray, everything would be correct`);
          if (ok.some((a) => !bank.has(a)))
            errors.push(`${relative}: ${mode} row ${key} expects an animal that is not in its tray`);
          if (!ok.includes($(row).attr('data-hint'))) errors.push(`${relative}: ${mode} row ${key} has a wrong hint`);
        });
    });
  }
}
for (const config of Object.values(routes)) {
  for (const [language, relative] of Object.entries(config)) {
    if (['count', 'tests', 'match'].includes(language)) continue;
    const file = path.join(root, relative);
    if (!existsSync(file)) {
      errors.push(`Missing ${relative}`);
      continue;
    }
    pages += 1;
    const $ = cheerio.load(readFileSync(file, 'utf8'));
    const checks = [
      ['word cards', $('.word-card').length],
      ['word tests', $('.word-test').length, config.tests ?? config.count],
      ['translation exercises', $('.translation-exercise').length],
    ];
    for (const [label, actual, expectedOverride] of checks) {
      if (label === 'translation exercises') {
        if (actual < 1) errors.push(`${relative}: no translation exercises found`);
      } else if (actual !== (expectedOverride ?? config.count)) {
        errors.push(`${relative}: ${actual} ${label}, expected ${expectedOverride ?? config.count}`);
      }
    }
    $('.word-card').each((index, card) => {
      if ($(card).find('.word-examples li').length !== 3)
        errors.push(`${relative}: card ${index + 1} does not have three examples`);
    });
    if (config.match) checkMatchExercises($, relative, config.match, errors);
    if ($('.word-test-actions,.word-test-solution').length) errors.push(`${relative}: old answer buttons found`);
    if ($('.translation-free-section #word-progress').length)
      errors.push(`${relative}: translations incorrectly affect progress`);
    const vocabularyNav = $('.site-header nav a').filter((_, link) =>
      /\/vocabolario\/$|\/vocabulary\/$|\/vocabulario\/$|\/vocabulaire\/$|\/slovni-zasoba\/$|\/slownictwo\/$|\/kelime-bilgisi\/$|\/wortschatz\/$|\/goi\/$/.test(
        $(link).attr('href') || ''
      )
    );
    if (vocabularyNav.length !== 1)
      errors.push(`${relative}: expected one vocabulary navigation link, found ${vocabularyNav.length}`);
    const vocabularyFooterLinks = $('footer a').filter((_, link) =>
      /^(\.\/|.*\/(vocabolario|vocabulary|vocabulario|vocabulaire|slovni-zasoba|slownictwo|kelime-bilgisi|wortschatz|goi)\/)$/i.test(
        $(link).attr('href') || ''
      )
    );
    if (vocabularyFooterLinks.length !== 1)
      errors.push(`${relative}: expected one vocabulary footer link, found ${vocabularyFooterLinks.length}`);
  }
}

const index = readFileSync(path.join(root, 'vocabolario', 'index.html'), 'utf8');
for (const lesson of [
  'cucina',
  'salotto',
  'ufficio',
  'abbigliamento',
  'cibo',
  'mare',
  'animali',
  'caratteristiche-fisiche-animali',
  'personalita-animali',
  'verbi-animali',
])
  if (!index.includes(`href="${lesson}.html"`)) errors.push(`Italian vocabulary index does not link ${lesson}`);

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log(`Vocabulary audit passed: ${pages} localized lesson pages checked.`);

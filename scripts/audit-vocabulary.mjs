import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import * as cheerio from 'cheerio';

const root = path.resolve('legacy-html');
const routes = {
  cucina: {
    count: 20,
    it: 'vocabolario/cucina.html', en: 'en/vocabulary/italian-kitchen-vocabulary.html', es: 'es/vocabulario/vocabulario-cocina-italiano.html', fr: 'fr/vocabulaire/vocabulaire-cuisine-italien.html', cs: 'cs/slovni-zasoba/italska-slovni-zasoba-kuchyne.html', pl: 'pl/slownictwo/wloskie-slownictwo-kuchnia.html', tr: 'tr/kelime-bilgisi/italyanca-mutfak-kelimeleri.html', de: 'de/wortschatz/italienischer-wortschatz-kueche.html', ja: 'ja/goi/italian-kitchen-vocabulary.html',
  },
  salotto: {
    count: 8,
    it: 'vocabolario/salotto.html', en: 'en/vocabulary/italian-living-room-vocabulary.html', es: 'es/vocabulario/vocabulario-del-salon-en-italiano.html', fr: 'fr/vocabulaire/vocabulaire-du-salon-en-italien.html', cs: 'cs/slovni-zasoba/italska-slovni-zasoba-obyvaci-pokoj.html', pl: 'pl/slownictwo/wloskie-slownictwo-salon.html', tr: 'tr/kelime-bilgisi/italyanca-oturma-odasi-kelimeleri.html', de: 'de/wortschatz/italienischer-wortschatz-wohnzimmer.html', ja: 'ja/goi/italian-living-room-vocabulary.html',
  },
  ufficio: {
    count: 8,
    it: 'vocabolario/ufficio.html', en: 'en/vocabulary/italian-office-vocabulary.html', es: 'es/vocabulario/vocabulario-de-la-oficina-en-italiano.html', fr: 'fr/vocabulaire/vocabulaire-du-bureau-en-italien.html', cs: 'cs/slovni-zasoba/italska-slovni-zasoba-kancelar.html', pl: 'pl/slownictwo/wloskie-slownictwo-biuro.html', tr: 'tr/kelime-bilgisi/italyanca-ofis-kelimeleri.html', de: 'de/wortschatz/italienischer-wortschatz-buero.html', ja: 'ja/goi/italian-office-vocabulary.html',
  },
  abbigliamento: {
    count: 57,
    it: 'vocabolario/abbigliamento.html', en: 'en/vocabulary/italian-clothing-vocabulary.html', es: 'es/vocabulario/vocabulario-de-la-ropa-en-italiano.html', fr: 'fr/vocabulaire/vocabulaire-des-vetements-en-italien.html', cs: 'cs/slovni-zasoba/italska-slovni-zasoba-obleceni.html', pl: 'pl/slownictwo/wloskie-slownictwo-ubrania.html', tr: 'tr/kelime-bilgisi/italyanca-giyim-kelimeleri.html', de: 'de/wortschatz/italienischer-wortschatz-kleidung.html', ja: 'ja/goi/italian-clothing-vocabulary.html',
  },
  cibo: {
    count: 8,
    it: 'vocabolario/cibo.html', en: 'en/vocabulary/italian-food-vocabulary.html', es: 'es/vocabulario/vocabulario-de-la-comida-en-italiano.html', fr: 'fr/vocabulaire/vocabulaire-de-la-nourriture-en-italien.html', cs: 'cs/slovni-zasoba/italska-slovni-zasoba-jidlo.html', pl: 'pl/slownictwo/wloskie-slownictwo-jedzenie.html', tr: 'tr/kelime-bilgisi/italyanca-yemek-kelimeleri.html', de: 'de/wortschatz/italienischer-wortschatz-essen.html', ja: 'ja/goi/italian-food-vocabulary.html',
  },
};

const errors = [];
let pages = 0;
for (const [lesson, config] of Object.entries(routes)) {
  for (const [language, relative] of Object.entries(config)) {
    if (language === 'count') continue;
    const file = path.join(root, relative);
    if (!existsSync(file)) {
      errors.push(`Missing ${relative}`);
      continue;
    }
    pages += 1;
    const $ = cheerio.load(readFileSync(file, 'utf8'));
    const checks = [
      ['word cards', $('.word-card').length],
      ['word tests', $('.word-test').length],
      ['translation exercises', $('.translation-exercise').length],
    ];
    for (const [label, actual] of checks) {
      if (label === 'translation exercises') {
        if (actual < 1) errors.push(`${relative}: no translation exercises found`);
      } else if (actual !== config.count) {
        errors.push(`${relative}: ${actual} ${label}, expected ${config.count}`);
      }
    }
    $('.word-card').each((index, card) => {
      if ($(card).find('.word-examples li').length !== 3) errors.push(`${relative}: card ${index + 1} does not have three examples`);
    });
    if ($('.word-test-actions,.word-test-solution').length) errors.push(`${relative}: old answer buttons found`);
    if ($('.translation-free-section #word-progress').length) errors.push(`${relative}: translations incorrectly affect progress`);
    const vocabularyNav = $('.site-header nav a').filter((_, link) => /\/vocabolario\/$|\/vocabulary\/$|\/vocabulario\/$|\/vocabulaire\/$|\/slovni-zasoba\/$|\/slownictwo\/$|\/kelime-bilgisi\/$|\/wortschatz\/$|\/goi\/$/.test($(link).attr('href') || ''));
    if (vocabularyNav.length !== 1) errors.push(`${relative}: expected one vocabulary navigation link, found ${vocabularyNav.length}`);
    const vocabularyFooterLinks = $('footer a').filter((_, link) => /^(\.\/|.*\/(vocabolario|vocabulary|vocabulario|vocabulaire|slovni-zasoba|slownictwo|kelime-bilgisi|wortschatz|goi)\/)$/i.test($(link).attr('href') || ''));
    if (vocabularyFooterLinks.length !== 1) errors.push(`${relative}: expected one vocabulary footer link, found ${vocabularyFooterLinks.length}`);
  }
}

const index = readFileSync(path.join(root, 'vocabolario', 'index.html'), 'utf8');
for (const lesson of ['cucina', 'salotto', 'ufficio', 'abbigliamento', 'cibo']) if (!index.includes(`href="${lesson}.html"`)) errors.push(`Italian vocabulary index does not link ${lesson}`);

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log(`Vocabulary audit passed: ${pages} localized lesson pages checked.`);

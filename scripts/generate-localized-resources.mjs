import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import * as cheerio from 'cheerio';

const root = process.cwd();
const siteRoot = path.join(root, 'legacy-html');
const siteUrl = 'https://italianoconmartin.com';
const cacheFile = path.join(root, 'translations', 'review-cache.json');
const languages = ['en', 'es', 'fr', 'cs', 'pl', 'tr', 'de', 'ja'];
const languageData = {
  en: { name: 'English', flag: '🇬🇧', categories: { letture: 'readings', favole: 'stories', grammatica: 'grammar' } },
  es: { name: 'Español', flag: '🇪🇸', categories: { letture: 'lecturas', favole: 'cuentos', grammatica: 'gramatica' } },
  fr: { name: 'Français', flag: '🇫🇷', categories: { letture: 'lectures', favole: 'histoires', grammatica: 'grammaire' } },
  cs: { name: 'Čeština', flag: '🇨🇿', categories: { letture: 'cteni', favole: 'pribehy', grammatica: 'gramatika' } },
  pl: { name: 'Polski', flag: '🇵🇱', categories: { letture: 'czytanki', favole: 'historie', grammatica: 'gramatyka' } },
  tr: { name: 'Türkçe', flag: '🇹🇷', categories: { letture: 'okumalar', favole: 'hikayeler', grammatica: 'dilbilgisi' } },
  de: { name: 'Deutsch', flag: '🇩🇪', categories: { letture: 'lesetexte', favole: 'geschichten', grammatica: 'grammatik' } },
  ja: { name: '日本語', flag: '🇯🇵', categories: { letture: 'dokkai', favole: 'monogatari', grammatica: 'bunpo' } },
};
const seoLabels = {
  en: { grammatica: 'Italian grammar', letture: 'graded Italian reading', favole: 'Italian story' },
  es: { grammatica: 'gramática italiana', letture: 'lectura graduada en italiano', favole: 'cuento en italiano' },
  fr: { grammatica: 'grammaire italienne', letture: 'lecture graduée en italien', favole: 'histoire en italien' },
  cs: { grammatica: 'italská gramatika', letture: 'odstupňované čtení v italštině', favole: 'italský příběh' },
  pl: { grammatica: 'gramatyka włoska', letture: 'czytanka stopniowana po włosku', favole: 'historia po włosku' },
  tr: { grammatica: 'İtalyanca dil bilgisi', letture: 'seviyelendirilmiş İtalyanca okuma', favole: 'İtalyanca hikâye' },
  de: { grammatica: 'italienische Grammatik', letture: 'abgestufter italienischer Lesetext', favole: 'italienische Geschichte' },
  ja: { grammatica: 'イタリア語文法', letture: 'レベル別イタリア語読解', favole: 'イタリア語の物語' },
};
const legacyCategories = { letture: 'readings', favole: 'stories', grammatica: 'grammar' };
const slugOverrides = {
  en: { 'verbo-essere': 'verb-to-be', 'il-sonar-del-delfino': 'dolphin-sonar', 'il-cane-e-losso': 'the-dog-and-the-bone' },
  es: { 'verbo-essere': 'verbo-ser', 'il-sonar-del-delfino': 'el-sonar-del-delfin', 'il-cane-e-losso': 'el-perro-y-el-hueso' },
  fr: { 'verbo-essere': 'verbe-etre', 'il-sonar-del-delfino': 'le-sonar-du-dauphin', 'il-cane-e-losso': 'le-chien-et-los' },
  cs: { 'verbo-essere': 'sloveso-byt' }, pl: { 'verbo-essere': 'czasownik-byc' },
  tr: { 'verbo-essere': 'essere-fiili' }, de: { 'verbo-essere': 'verb-essere-sein' }, ja: { 'verbo-essere': 'essere-doshi' },
};
const preserveSelectors = [
  '.story-text', '.conj-table', '.example-grid', '.mistake-grid', '.exercise label',
  '.brand', '.language-switcher', '[lang="it"]', '.footer-grid > div:first-child > strong', 'script', 'style', 'code', 'pre',
];
const attributeNames = ['alt', 'aria-label', 'data-hint', 'placeholder', 'title'];
const sourceCategories = ['letture', 'favole', 'grammatica'];
const cache = existsSync(cacheFile) ? JSON.parse(readFileSync(cacheFile, 'utf8')) : {};
const reviewedOverrides = {
  en: {
    'Il verbo essere': 'Italian verb essere (to be)',
    'Quando usiamo “essere”?': 'When do we use “essere”?',
    'essere': 'essere',
    '“è” vuole l’accento. “E” senza accento è la congiunzione.': 'The Italian form “è” needs the accent. “E” without an accent means “and”.',
    'Sono insegnante': 'Sono insegnante',
    'Sono un insegnante': 'Sono un insegnante',
    'Con “io” usiamo “sono”.': 'With “io”, use “sono”.',
    'Con “tu” usiamo “sei”.': 'With “tu”, use “sei”.',
    'Con “lei” usiamo “è”, con l’accento.': 'With “lei”, use the accented form “è”.',
    'Con “noi” usiamo “siamo”.': 'With “noi”, use “siamo”.',
    'Con “voi” usiamo “siete”.': 'With “voi”, use “siete”.',
    'Con “loro” usiamo “sono”.': 'With “loro”, use “sono”.',
    'Per la forma negativa: non + sono.': 'For the negative form, use non + sono.',
    'Marco e io = noi, quindi “siamo”.': 'Marco e io corresponds to noi, so use “siamo”.',
    'Anna e Luca = loro, quindi “sono”.': 'Anna e Luca corresponds to loro, so use “sono”.',
    'Mettiamo': 'Place',
    'prima del verbo:': 'before the verb:',
  },
  es: { 'Il verbo essere': 'El verbo italiano essere' },
  fr: { 'Il verbo essere': 'Le verbe italien essere' },
  cs: { 'Il verbo essere': 'Italské sloveso essere' },
  pl: { 'Il verbo essere': 'Włoski czasownik essere' },
  tr: { 'Il verbo essere': 'İtalyanca essere fiili' },
  de: { 'Il verbo essere': 'Das italienische Verb essere' },
  ja: { 'Il verbo essere': 'イタリア語動詞 essere' },
};
for (const [language, entries] of Object.entries(reviewedOverrides)) {
  for (const [source, target] of Object.entries(entries)) cache[cacheKey(language, source)] = target;
}
const resources = collectResources();
const sources = collectSources();
const routeMaps = {};

for (const language of languages) {
  const strings = collectStringsForLanguage(language);
  await translateMissing(strings, language);
  mkdirSync(path.dirname(cacheFile), { recursive: true });
  writeFileSync(cacheFile, `${JSON.stringify(cache, null, 2)}\n`);
}
for (const language of languages) {
  routeMaps[language] = buildRouteMap(language);
}
for (const language of languages) {
  writeLanguage(language);
}

updateItalianAlternates();
updateLocalizedHomes();
writeSitemap();
mkdirSync(path.dirname(cacheFile), { recursive: true });
writeFileSync(cacheFile, `${JSON.stringify(cache, null, 2)}\n`);
console.log(`Generated and localized ${resources.length * languages.length} resource pages in ${languages.length} languages.`);

function collectResources() {
  const result = [];
  for (const category of sourceCategories) {
    for (const file of walk(path.join(siteRoot, category))) {
      if (!file.endsWith('.html') || path.basename(file) === 'index.html') continue;
      const relative = path.relative(siteRoot, file).replaceAll('\\', '/');
      const level = category === 'grammatica' ? relative.split('/')[1] : '';
      result.push({ category, level, relative, sourceSlug: path.basename(file, '.html') });
    }
  }
  return result.sort((a, b) => a.relative.localeCompare(b.relative));
}

function collectSources() {
  const map = new Map();
  for (const resource of resources) map.set(resource.relative, readFileSync(path.join(siteRoot, resource.relative), 'utf8'));
  for (const category of sourceCategories) map.set(`${category}/index.html`, readFileSync(path.join(siteRoot, category, 'index.html'), 'utf8'));
  return map;
}

function collectStringsForLanguage(language) {
  const strings = new Set();
  for (const [relative, html] of sources) {
    const category = relative.split('/')[0];
    const $ = cheerio.load(html, { decodeEntities: false });
    collectTranslatable($, strings);
    collectVocabularyStrings($, strings);
    const title = cleanText($('h1').first().text());
    if (title) strings.add(title);
    const categoryName = category === 'letture' ? 'Letture' : category === 'favole' ? 'Favole' : 'Grammatica';
    strings.add(categoryName);
  }
  return [...strings].filter((text) => !cache[cacheKey(language, text)]);
}

function collectTranslatable($, strings) {
  $('body *').contents().each((_, node) => {
    if (node.type !== 'text' || shouldPreserve($, node)) return;
    const text = cleanText(node.data);
    if (isTranslatable(text)) strings.add(text);
  });
  $('body *').each((_, element) => {
    if (shouldPreserve($, element)) return;
    for (const attribute of attributeNames) {
      const text = cleanText($(element).attr(attribute) || '');
      if (isTranslatable(text) && !/^https?:/i.test(text)) strings.add(text);
    }
  });
  $('meta[name="description"],meta[property="og:description"],meta[name="twitter:description"]').each((_, element) => {
    const text = cleanText($(element).attr('content') || '');
    if (isTranslatable(text)) strings.add(text);
  });
}

function collectVocabularyStrings($, strings) {
  $('.learning-grid > div').each((_, element) => {
    const heading = cleanText($(element).find('h3').first().text());
    if (!/^(Parole utili|Scheda lessico)$/i.test(heading)) return;
    const words = cleanText($(element).find('p').first().text()).split(',').map((word) => word.trim()).filter(Boolean);
    for (const word of words) if (isTranslatable(word)) strings.add(word);
  });
}

function shouldPreserve($, node) {
  const element = node.type === 'text' ? node.parent : node;
  return preserveSelectors.some((selector) => $(element).closest(selector).length > 0);
}

function isTranslatable(text) {
  return text.length > 1 && /[A-Za-zÀ-ÿ]/.test(text) && !/^(A1|A2|B1|B2|C1|LAB|SC|TE|CU|ST|FA)$/.test(text);
}

async function translateMissing(strings, language) {
  if (!strings.length) return;
  const batches = [];
  let batch = [];
  let size = 0;
  for (const text of strings) {
    if (batch.length >= 18 || size + text.length > 3200) {
      batches.push(batch); batch = []; size = 0;
    }
    batch.push(text); size += text.length;
  }
  if (batch.length) batches.push(batch);
  console.log(`${language}: translating ${strings.length} strings in ${batches.length} batches`);
  for (let index = 0; index < batches.length; index++) {
    const translated = await translateBatch(batches[index], language);
    batches[index].forEach((text, itemIndex) => { cache[cacheKey(language, text)] = translated[itemIndex] || text; });
    if ((index + 1) % 20 === 0) console.log(`${language}: ${index + 1}/${batches.length} batches`);
  }
}

async function translateBatch(strings, language, attempt = 1) {
  const payload = strings.map((text, index) => `__ICM_${index}__\n${text}`).join('\n');
  const url = new URL('https://translate.googleapis.com/translate_a/single');
  url.searchParams.set('client', 'gtx'); url.searchParams.set('sl', 'it'); url.searchParams.set('tl', language); url.searchParams.set('dt', 't'); url.searchParams.set('q', payload);
  try {
    const response = await fetch(url, { headers: { 'User-Agent': 'ItalianoConMartin/1.0' } });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    const output = data[0].map((part) => part[0]).join('');
    const result = Array(strings.length).fill('');
    const matches = [...output.matchAll(/__ICM_(\d+)__\s*([\s\S]*?)(?=__ICM_\d+__|$)/g)];
    for (const match of matches) result[Number(match[1])] = match[2].trim();
    if (result.some((value) => !value)) throw new Error('Incomplete batch response');
    return result;
  } catch (error) {
    if (attempt >= 4) throw error;
    await new Promise((resolve) => setTimeout(resolve, attempt * 1200));
    return translateBatch(strings, language, attempt + 1);
  }
}

function buildRouteMap(language) {
  const map = new Map();
  for (const resource of resources) {
    const $ = cheerio.load(sources.get(resource.relative), { decodeEntities: false });
    const title = cleanText($('h1').first().text());
    const translatedTitle = translation(language, title);
    const slug = slugOverrides[language]?.[resource.sourceSlug] || slugify(translatedTitle) || resource.sourceSlug;
    const category = languageData[language].categories[resource.category];
    const level = resource.level ? `${resource.level}/` : '';
    map.set(resource.relative, `${language}/${category}/${level}${slug}.html`);
  }
  return map;
}

function writeLanguage(language) {
  for (const category of sourceCategories) writeLocalizedIndex(category, language);
  for (const resource of resources) writeLocalizedResource(resource, language);
}

function writeLocalizedIndex(category, language) {
  const sourceRelative = `${category}/index.html`;
  const targetRelative = `${language}/${languageData[language].categories[category]}/index.html`;
  const html = localizeDocument(sources.get(sourceRelative), { category, language, sourceRelative, targetRelative, isIndex: true });
  writeFile(targetRelative, html);
  const legacy = `${language}/${legacyCategories[category]}/index.html`;
  if (legacy !== targetRelative) writeFile(legacy, redirectPage(`/${targetRelative.replace('index.html', '')}`, language));
}

function writeLocalizedResource(resource, language) {
  const targetRelative = routeMaps[language].get(resource.relative);
  const html = localizeDocument(sources.get(resource.relative), { ...resource, language, sourceRelative: resource.relative, targetRelative, isIndex: false });
  writeFile(targetRelative, html);
  const legacy = `${language}/${legacyCategories[resource.category]}/${resource.level ? `${resource.level}/` : ''}${resource.sourceSlug}.html`;
  if (legacy !== targetRelative) writeFile(legacy, redirectPage(`/${targetRelative}`, language));
}

function localizeDocument(source, context) {
  const { language, category, sourceRelative, targetRelative, isIndex } = context;
  const $ = cheerio.load(source, { decodeEntities: false });
  normalizeDocument($);
  $('html').attr('lang', language);
  applyVocabularyGlosses($, language);
  applyTranslations($, language);
  const title = cleanText($('h1').first().text());
  const canonical = `${siteUrl}/${targetRelative.replace('index.html', '')}`;
  const level = context.level ? ` ${context.level.toUpperCase()}` : '';
  const seoTitle = `${title}: ${seoLabels[language][category]}${level} | Italiano con Martin`;
  $('title').text(seoTitle);
  $('link[rel="canonical"]').remove(); $('link[rel="alternate"]').remove();
  $('meta[property="og:url"]').attr('content', canonical);
  $('meta[property="og:title"],meta[name="twitter:title"]').attr('content', seoTitle);
  const alternates = buildAlternates(sourceRelative, category, isIndex);
  $('head').prepend(`${alternates}<link rel="canonical" href="${canonical}">`);
  $('script[type="application/ld+json"]').remove();
  $('head').append(`<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@type': category === 'grammatica' ? 'LearningResource' : 'Article', name: title, url: canonical, inLanguage: language })}</script>`);
  $('.language-switcher').replaceWith(languageSelector(sourceRelative, category, language, isIndex));
  rewriteAssets($, targetRelative);
  rewriteInternalLinks($, category, language, sourceRelative);
  addPdfLinks($, { ...context, targetRelative });
  return serialize($);
}

function applyVocabularyGlosses($, language) {
  $('.learning-grid > div').each((_, element) => {
    const heading = cleanText($(element).find('h3').first().text());
    if (!/^(Parole utili|Scheda lessico)$/i.test(heading)) return;
    const paragraph = $(element).find('p').first();
    const words = cleanText(paragraph.text()).split(',').map((word) => word.trim()).filter(Boolean);
    if (!words.length) return;
    paragraph.html(words.map((word) => `<span lang="it">${escapeHtml(word)}</span> = ${escapeHtml(translation(language, word))}`).join('<br>'));
  });
}

function applyTranslations($, language) {
  $('body *').contents().each((_, node) => {
    if (node.type !== 'text' || shouldPreserve($, node)) return;
    const original = cleanText(node.data);
    if (!isTranslatable(original)) return;
    const leading = node.data.match(/^\s*/)?.[0] || '';
    const trailing = node.data.match(/\s*$/)?.[0] || '';
    node.data = `${leading}${translation(language, original)}${trailing}`;
  });
  $('body *').each((_, element) => {
    if (shouldPreserve($, element)) return;
    for (const attribute of attributeNames) {
      const original = cleanText($(element).attr(attribute) || '');
      if (isTranslatable(original) && !/^https?:/i.test(original)) $(element).attr(attribute, translation(language, original));
    }
  });
  $('meta[name="description"],meta[property="og:description"],meta[name="twitter:description"]').each((_, element) => {
    const original = cleanText($(element).attr('content') || '');
    if (isTranslatable(original)) $(element).attr('content', translation(language, original));
  });
}

function rewriteAssets($, targetRelative) {
  const depth = targetRelative.split('/').length - 1;
  const prefix = '../'.repeat(depth);
  $('[href],[src]').each((_, element) => {
    for (const attribute of ['href', 'src']) {
      const value = $(element).attr(attribute);
      if (!value || value.startsWith('#') || value.startsWith('/') || /^(https?:|mailto:|tel:)/i.test(value)) continue;
      const match = value.match(/(?:\.\.\/)*(assets\/[^?#]+|styles\.css|script\.js|favicon\.png|apple-touch-icon\.png)(.*)$/);
      if (match) $(element).attr(attribute, `${prefix}${match[1]}${match[2] || ''}`);
    }
  });
}

function rewriteInternalLinks($, category, language, sourceRelative) {
  const currentSourceDir = path.posix.dirname(sourceRelative);
  $('[href]').each((_, element) => {
    const href = $(element).attr('href');
    if (!href || href.startsWith('#') || href.startsWith('/') || /^(https?:|mailto:|tel:)/i.test(href)) return;
    const clean = href.split('#')[0].split('?')[0];
    if (!clean.endsWith('.html') && !clean.endsWith('/')) return;
    const resolved = path.posix.normalize(path.posix.join(currentSourceDir, clean));
    const key = resolved.endsWith('/') ? `${resolved}index.html` : resolved;
    const target = routeMaps[language].get(key);
    if (target) $(element).attr('href', `/${target}${href.includes('#') ? `#${href.split('#')[1]}` : ''}`);
  });
  const categoryPath = languageData[language].categories[category];
  $('.brand').attr('href', `/${language}/`);
  $('.breadcrumbs a').first().attr('href', `/${language}/`);
  $('.breadcrumbs a').eq(1).attr('href', `/${language}/${categoryPath}/`);
  $('nav a,footer a').each((_, element) => {
    const text = cleanText($(element).text()).toLowerCase();
    for (const sourceCategory of sourceCategories) {
      const translatedCategory = translation(language, sourceCategory === 'letture' ? 'Letture' : sourceCategory === 'favole' ? 'Favole' : 'Grammatica').toLowerCase();
      if (text === translatedCategory) $(element).attr('href', `/${language}/${languageData[language].categories[sourceCategory]}/`);
    }
  });
}

function buildAlternates(sourceRelative, category, isIndex) {
  const links = [`<link rel="alternate" hreflang="it" href="${siteUrl}/${isIndex ? `${category}/` : sourceRelative}">`];
  for (const language of languages) {
    const target = isIndex ? `${language}/${languageData[language].categories[category]}/` : routeMaps[language].get(sourceRelative);
    links.push(`<link rel="alternate" hreflang="${language}" href="${siteUrl}/${target}">`);
  }
  links.push(`<link rel="alternate" hreflang="x-default" href="${siteUrl}/${isIndex ? `${category}/` : sourceRelative}">`);
  return links.join('');
}

function languageSelector(sourceRelative, category, current, isIndex) {
  const entries = [`<a href="/${isIndex ? `${category}/` : sourceRelative}" hreflang="it" lang="it"><span aria-hidden="true">🇮🇹</span><span>Italiano</span></a>`];
  for (const language of languages) {
    const target = isIndex ? `${language}/${languageData[language].categories[category]}/` : routeMaps[language].get(sourceRelative);
    entries.push(`<a href="/${target}" hreflang="${language}" lang="${language}"${language === current ? ' aria-current="page"' : ''}><span aria-hidden="true">${languageData[language].flag}</span><span>${languageData[language].name}</span></a>`);
  }
  return `<details class="language-switcher"><summary aria-label="Language"><span class="language-flag" aria-hidden="true">${languageData[current].flag}</span><span class="language-current">${languageData[current].name}</span><span class="language-chevron" aria-hidden="true">⌄</span></summary><div class="language-options">${entries.join('')}</div></details>`;
}

function updateItalianAlternates() {
  for (const [sourceRelative, source] of sources) {
    const category = sourceRelative.split('/')[0];
    const isIndex = path.basename(sourceRelative) === 'index.html';
    const $ = cheerio.load(source, { decodeEntities: false });
    normalizeDocument($);
    $('link[rel="alternate"]').remove();
    $('head').prepend(buildAlternates(sourceRelative, category, isIndex));
    $('.language-switcher').replaceWith(italianLanguageSelector(sourceRelative, category, isIndex));
    if (!isIndex) {
      const parts = sourceRelative.split('/');
      addPdfLinks($, { category, language: 'it', level: category === 'grammatica' ? parts[1] : '', targetRelative: sourceRelative, isIndex: false });
    }
    writeFile(sourceRelative, serialize($));
  }
}

function italianLanguageSelector(sourceRelative, category, isIndex) {
  const entries = [`<a href="/${isIndex ? `${category}/` : sourceRelative}" hreflang="it" lang="it" aria-current="page"><span aria-hidden="true">🇮🇹</span><span>Italiano</span></a>`];
  for (const language of languages) {
    const target = isIndex ? `${language}/${languageData[language].categories[category]}/` : routeMaps[language].get(sourceRelative);
    entries.push(`<a href="/${target}" hreflang="${language}" lang="${language}"><span aria-hidden="true">${languageData[language].flag}</span><span>${languageData[language].name}</span></a>`);
  }
  return `<details class="language-switcher"><summary aria-label="Scegli lingua"><span class="language-flag" aria-hidden="true">🇮🇹</span><span class="language-current">Italiano</span><span class="language-chevron" aria-hidden="true">⌄</span></summary><div class="language-options">${entries.join('')}</div></details>`;
}

function updateLocalizedHomes() {
  for (const language of languages) {
    const file = path.join(siteRoot, language, 'index.html');
    if (!existsSync(file)) continue;
    let html = readFileSync(file, 'utf8');
    for (const category of sourceCategories) {
      const oldCategory = legacyCategories[category];
      const newCategory = languageData[language].categories[category];
      html = html.replaceAll(`/${language}/${oldCategory}/`, `/${language}/${newCategory}/`);
      html = html.replaceAll(`${oldCategory}/`, `${newCategory}/`);
    }
    writeFileSync(file, html);
  }
}

function writeSitemap() {
  const urls = ['/', '/letture/', '/favole/', '/grammatica/', ...resources.map((resource) => `/${resource.relative}`)];
  for (const language of languages) {
    urls.push(`/${language}/`);
    for (const category of sourceCategories) urls.push(`/${language}/${languageData[language].categories[category]}/`);
    for (const resource of resources) urls.push(`/${routeMaps[language].get(resource.relative)}`);
  }
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[...new Set(urls)].map((url) => `  <url><loc>${siteUrl}${url}</loc><changefreq>monthly</changefreq></url>`).join('\n')}\n</urlset>\n`;
  writeFileSync(path.join(siteRoot, 'sitemap.xml'), xml);
}

function addPdfLinks($, context) {
  if (context.isIndex) return;
  $('.pdf-downloads').remove();
  const slug = path.posix.basename(context.targetRelative, '.html');
  const levels = context.category === 'grammatica' ? [context.level] : ['a1', 'a2', 'b1', 'b2', 'c1'];
  const labels = levels.map((level) => `<a class="button secondary" href="/pdf/${context.language}/${slug}-${level}.pdf" download>PDF ${level.toUpperCase()}</a>`).join('');
  const block = `<div class="pdf-downloads" aria-label="PDF downloads">${labels}</div>`;
  const anchor = context.category === 'grammatica' ? $('.lesson-nav').first() : $('.level-nav').first();
  if (anchor.length) anchor.after(block); else $('main').prepend(block);
}

function redirectPage(target, language) {
  const escaped = target.replaceAll('&', '&amp;').replaceAll('"', '&quot;');
  return `<!doctype html><html lang="${language}"><head><meta charset="utf-8"><meta name="robots" content="noindex,follow"><link rel="canonical" href="${siteUrl}${escaped}"><meta http-equiv="refresh" content="0;url=${escaped}"><title>Redirect | Italiano con Martin</title></head><body><p><a href="${escaped}">Continue</a></p></body></html>`;
}

function translation(language, text) { return cache[cacheKey(language, cleanText(text))] || text; }
function cacheKey(language, text) { return `${language}::${text}`; }
function cleanText(text) { return String(text || '').replace(/\s+/g, ' ').trim(); }
function escapeHtml(value) { return String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;'); }
function slugify(value) {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[’'"“”]/g, '').replace(/[^\p{L}\p{N}]+/gu, '-').replace(/^-+|-+$/g, '');
}
function serialize($) {
  const html = $.html().replace(/^(?:\s*<!doctype html>\s*)+/i, '').replace(/[ \t]+$/gm, '');
  return `<!doctype html>\n${html}`;
}
function normalizeDocument($) {
  $('*').contents().filter((_, node) => node.type === 'text' && node.data.includes('\uFEFF')).each((_, node) => {
    node.data = node.data.replaceAll('\uFEFF', '');
  });
  $('body > meta, body > title, body > link, body > style').appendTo('head');
}
function writeFile(relative, content) {
  const file = path.join(siteRoot, relative); mkdirSync(path.dirname(file), { recursive: true }); writeFileSync(file, content);
}
function walk(directory) {
  if (!existsSync(directory)) return [];
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => entry.isDirectory() ? walk(path.join(directory, entry.name)) : [path.join(directory, entry.name)]);
}

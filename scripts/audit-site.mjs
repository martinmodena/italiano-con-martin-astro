import { existsSync, readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import * as cheerio from 'cheerio';

const root = process.cwd();
const publicRoot = path.join(root, process.env.SITE_ROOT ?? 'dist');
const siteUrl = 'https://italianoconmartin.com';
const languages = ['it', 'en', 'es', 'fr', 'cs', 'pl', 'tr', 'de', 'ja'];
const localizedLanguages = languages.filter((language) => language !== 'it');
const italianLeakPattern =
  /\b(Quando usiamo|Usiamo il|Impara|Scrivi|Ricomincia|Il tuo risultato|Prenota su|Prossima lezione|Esercizi con|Errori comuni|Parole utili|Domande di comprensione|Per parlare|Dalla regola|Durante una lezione|Livello|Letture|Grammatica|Favole)\b/i;
const seoTerms = {
  en: 'Italian grammar',
  es: 'gramática italiana',
  fr: 'grammaire italienne',
  cs: 'italská gramatika',
  pl: 'gramatyka włoska',
  tr: 'İtalyanca dil bilgisi',
  de: 'italienische Grammatik',
  ja: 'イタリア語文法',
};
const issues = [];
const resources = collectResources();

inspectIndexCoverage();
inspectTeacherJourney();
inspectImagePerformance();
inspectUrlArchitecture();

for (const resource of resources) {
  const italianHtml = readFileSync(path.join(publicRoot, resource.relative), 'utf8');
  const italianAlternates = readAlternates(italianHtml);
  for (const language of localizedLanguages) {
    const href = italianAlternates.get(language);
    if (!href) {
      issues.push(`- MISSING_HREFLANG | ${language} | ${resource.relative}`);
      continue;
    }
    const relative = decodeURIComponent(new URL(href).pathname.replace(/^\//, ''));
    const absolute = path.join(publicRoot, relative);
    if (!existsSync(absolute)) {
      issues.push(`- MISSING_PAGE | ${language} | /${relative.replaceAll('\\', '/')}`);
      continue;
    }
    inspectLocalizedPage(resource, language, relative, readFileSync(absolute, 'utf8'), href, italianHtml);
  }
  for (const language of languages) {
    const pageRelative =
      language === 'it'
        ? resource.relative
        : decodeURIComponent(new URL(italianAlternates.get(language)).pathname.replace(/^\//, ''));
    const slug = path.basename(pageRelative, '.html');
    const levels =
      resource.category === 'grammatica' ? [resource.relative.split('/')[1]] : ['a1', 'a2', 'b1', 'b2', 'c1'];
    for (const level of levels) {
      const pdf = path.join(publicRoot, 'pdf', language, `${slug}-${level}.pdf`);
      if (!existsSync(pdf)) issues.push(`- MISSING_PDF | ${language} | /pdf/${language}/${slug}-${level}.pdf`);
    }
    if (resource.category !== 'grammatica') {
      const pdf = path.join(publicRoot, 'pdf', language, `${slug}-all-levels.pdf`);
      if (!existsSync(pdf))
        issues.push(`- MISSING_COMPLETE_PDF | ${language} | /pdf/${language}/${slug}-all-levels.pdf`);
    }
  }
}

const pdfCount = existsSync(path.join(publicRoot, 'pdf'))
  ? walk(path.join(publicRoot, 'pdf')).filter((file) => file.endsWith('.pdf')).length
  : 0;
const readingsAndStories = resources.filter((resource) => resource.category !== 'grammatica').length;
const grammarLessons = resources.filter((resource) => resource.category === 'grammatica').length;
const expectedPdfCount = (readingsAndStories * 6 + grammarLessons) * languages.length;
if (pdfCount < expectedPdfCount)
  issues.push(`- MISSING_PDF_PACKAGE | expected ${expectedPdfCount} | found ${pdfCount}`);

const report = [
  '# Site Audit',
  '',
  `Generated: ${new Date().toISOString().slice(0, 10)}`,
  '',
  '## Inventory',
  '',
  `- Supported languages: ${languages.length}`,
  `- Educational resources: ${resources.length}`,
  `- Expected localized resource pages: ${resources.length * languages.length}`,
  `- Expected PDF files: ${expectedPdfCount}`,
  `- Existing PDF files: ${pdfCount}`,
  `- Localized teacher pages: ${languages.length}`,
  `- Findings: ${issues.length}`,
  '',
  '## Findings',
  '',
  ...(issues.length ? issues : ['- No findings.']),
  '',
  '## Publication Rule',
  '',
  'Every localized page must have translated explanatory content, a localized URL, reciprocal hreflang, canonical metadata, and its PDF package.',
  '',
].join('\n');

writeFileSync(path.join(root, 'SITE_AUDIT.md'), report);
console.log(report);
if (process.argv.includes('--strict') && issues.length) process.exitCode = 1;

function inspectLocalizedPage(resource, language, relative, html, expectedCanonical, italianHtml) {
  const $ = cheerio.load(html, { decodeEntities: false });
  const label = `${language} | /${relative.replaceAll('\\', '/')}`;
  if (html.includes('\uFEFF')) issues.push(`- EMBEDDED_BOM | ${label}`);
  if (!$('head meta[charset]').length || !$('head title').length) issues.push(`- BROKEN_HEAD_METADATA | ${label}`);
  if ($('html').attr('lang') !== language) issues.push(`- WRONG_LANG | ${label}`);
  if ($('link[rel="canonical"]').attr('href') !== expectedCanonical) issues.push(`- WRONG_CANONICAL | ${label}`);
  if ($('link[rel="alternate"]').length !== 10) issues.push(`- INCOMPLETE_HREFLANG | ${label}`);
  if ($('meta[name="robots"]').attr('content')?.includes('noindex')) issues.push(`- NOINDEX_LOCALIZED_PAGE | ${label}`);
  if ((html.match(/<!doctype html>/gi) || []).length !== 1) issues.push(`- INVALID_DOCTYPE | ${label}`);
  if (!html.includes('language-switcher') || !html.includes('aria-current="page"'))
    issues.push(`- BROKEN_LANGUAGE_SWITCHER | ${label}`);
  if (resource.category !== 'grammatica') {
    const italianDocument = cheerio.load(italianHtml, { decodeEntities: false });
    const expectedHeadings = italianDocument('.story-card[id] h2')
      .map((_, element) => italianDocument(element).text().trim())
      .get();
    const localizedHeadings = $('.story-card[id] h2')
      .map((_, element) => $(element).text().trim())
      .get();
    if (
      JSON.stringify(localizedHeadings) !== JSON.stringify(expectedHeadings) ||
      $('.story-card[id] h2[lang="it"]').length !== expectedHeadings.length
    ) {
      issues.push(`- TRANSLATED_STUDY_HEADING | ${label}`);
    }
    if ($('.pdf-downloads-complete a[href$="-all-levels.pdf"]').length !== 1)
      issues.push(`- MISSING_COMPLETE_PDF_LINK | ${label}`);
    for (const level of ['a1', 'a2', 'b1', 'b2', 'c1']) {
      if ($(`.story-card#${level} > .pdf-downloads-level a[href$="-${level}.pdf"]`).length !== 1)
        issues.push(`- MISPLACED_LEVEL_PDF_LINK | ${label} | ${level}`);
    }
  }
  const bodyClone = $('body').clone();
  bodyClone
    .find('.story-text,.conj-table,.example-grid,.mistake-grid,.exercise label,[lang="it"],script,style')
    .remove();
  const explanatoryText = bodyClone.text().replace(/\s+/g, ' ');
  const leak = explanatoryText.match(italianLeakPattern)?.[0];
  if (leak) issues.push(`- ITALIAN_EXPLANATION | ${label} | ${leak}`);
  if (
    resource.category === 'grammatica' &&
    !$('title').text().toLocaleLowerCase(language).includes(seoTerms[language].toLocaleLowerCase(language))
  ) {
    issues.push(`- MISSING_LOCALIZED_SEO_TERM | ${label} | ${seoTerms[language]}`);
  }
}

function readAlternates(html) {
  const $ = cheerio.load(html, { decodeEntities: false });
  return new Map(
    $('link[rel="alternate"][hreflang]')
      .map((_, element) => [[$(element).attr('hreflang'), $(element).attr('href')]])
      .get()
  );
}

function collectResources() {
  const result = [];
  for (const category of ['letture', 'favole', 'grammatica']) {
    for (const file of walk(path.join(publicRoot, category))) {
      if (!file.endsWith('.html') || path.basename(file) === 'index.html') continue;
      result.push({ category, relative: path.relative(publicRoot, file).replaceAll('\\', '/') });
    }
  }
  return result.sort((a, b) => a.relative.localeCompare(b.relative));
}

function collectMenuResources() {
  const result = [];
  for (const category of ['letture', 'favole', 'grammatica', 'vocabolario']) {
    for (const file of walk(path.join(publicRoot, category))) {
      if (!file.endsWith('.html') || path.basename(file) === 'index.html') continue;
      result.push({ category, relative: path.relative(publicRoot, file).replaceAll('\\', '/') });
    }
  }
  return result.sort((a, b) => a.relative.localeCompare(b.relative));
}

function inspectIndexCoverage() {
  const menuResources = collectMenuResources();
  for (const category of ['letture', 'favole', 'grammatica', 'vocabolario']) {
    const categoryResources = menuResources.filter((resource) => resource.category === category);
    const italianIndex = path.join(publicRoot, category, 'index.html');
    if (!existsSync(italianIndex)) {
      issues.push(`- MISSING_INDEX_PAGE | it | /${category}/`);
      continue;
    }
    const italianHtml = readFileSync(italianIndex, 'utf8');
    const italianDocument = cheerio.load(italianHtml, { decodeEntities: false });
    for (const resource of categoryResources) {
      const href = path.basename(resource.relative);
      if (!italianDocument(`a[href$="${href}"]`).length)
        issues.push(`- MISSING_INDEX_LINK | it | ${resource.relative}`);
    }
    const alternates = readAlternates(italianHtml);
    for (const language of localizedLanguages) {
      const indexHref = alternates.get(language);
      if (!indexHref) {
        issues.push(`- MISSING_INDEX_PAGE | ${language} | /${category}/`);
        continue;
      }
      const indexRelative = decodeURIComponent(new URL(indexHref).pathname.replace(/^\//, ''));
      const localizedIndex = path.join(publicRoot, indexRelative, 'index.html');
      if (!existsSync(localizedIndex)) {
        issues.push(`- MISSING_INDEX_PAGE | ${language} | ${indexHref}`);
        continue;
      }
      const indexDocument = cheerio.load(readFileSync(localizedIndex, 'utf8'), { decodeEntities: false });
      const indexPath = new URL(indexHref).pathname;
      const linkedPaths = indexDocument('a[href]')
        .map((_, element) =>
          decodeURIComponent(new URL(indexDocument(element).attr('href'), `${siteUrl}${indexPath}`).pathname)
        )
        .get();
      for (const resource of categoryResources) {
        const source = readFileSync(path.join(publicRoot, resource.relative), 'utf8');
        const localizedHref = readAlternates(source).get(language);
        const expectedPath = localizedHref ? decodeURIComponent(new URL(localizedHref).pathname) : '';
        if (!localizedHref || !linkedPaths.includes(expectedPath)) {
          issues.push(`- MISSING_INDEX_LINK | ${language} | ${resource.relative}`);
        }
      }
    }
  }
}

function inspectImagePerformance() {
  const liciaPortrait = path.join(publicRoot, 'assets', 'licia-portrait.webp');
  if (!existsSync(liciaPortrait)) {
    issues.push('- MISSING_OPTIMIZED_IMAGE | /assets/licia-portrait.webp');
  } else if (statSync(liciaPortrait).size > 100 * 1024) {
    issues.push(`- OVERSIZED_TEACHER_IMAGE | /assets/licia-portrait.webp | ${statSync(liciaPortrait).size} bytes`);
  }

  const referencedImages = new Set();
  for (const file of walk(publicRoot).filter((entry) => entry.endsWith('.html'))) {
    const html = readFileSync(file, 'utf8');
    if (html.includes('assets/licia.png'))
      issues.push(`- UNOPTIMIZED_IMAGE_REFERENCE | /${path.relative(publicRoot, file).replaceAll('\\', '/')}`);
    const $ = cheerio.load(html, { decodeEntities: false });
    $('img[src]').each((_, element) => {
      const source = $(element).attr('src').split('?')[0];
      if (/^(?:https?:|data:)/.test(source)) return;
      const absolute = source.startsWith('/')
        ? path.join(publicRoot, source.slice(1))
        : path.resolve(path.dirname(file), source);
      if (existsSync(absolute)) referencedImages.add(absolute);
    });
  }
  for (const image of referencedImages) {
    if (statSync(image).size > 400 * 1024) {
      issues.push(
        `- OVERSIZED_REFERENCED_IMAGE | /${path.relative(publicRoot, image).replaceAll('\\', '/')} | ${statSync(image).size} bytes`
      );
    }
  }
}

function inspectUrlArchitecture() {
  const sitemapFile = path.join(publicRoot, 'sitemap.xml');
  const sitemapXml = readFileSync(sitemapFile, 'utf8');
  const declarations = sitemapXml.match(/<\?xml[^?]*\?>/gi) || [];
  if (declarations.length !== 1 || !sitemapXml.trimStart().startsWith('<?xml')) {
    issues.push(`- INVALID_SITEMAP_DECLARATION | expected 1 | found ${declarations.length}`);
  }
  const sitemapDocument = cheerio.load(sitemapXml.replace(/<\?xml[^?]*\?>\s*/gi, ''), { xmlMode: true });
  const sitemapUrls = sitemapDocument('urlset > url > loc')
    .map((_, element) => sitemapDocument(element).text().trim())
    .get();
  const sitemapSet = new Set(sitemapUrls);
  if (sitemapSet.size !== sitemapUrls.length)
    issues.push(`- DUPLICATE_SITEMAP_URL | ${sitemapUrls.length - sitemapSet.size} duplicate(s)`);

  const canonicalPages = new Map();
  const redirects = [];
  for (const file of walk(publicRoot).filter((entry) => entry.endsWith('.html'))) {
    const relative = path.relative(publicRoot, file).replaceAll('\\', '/');
    const html = readFileSync(file, 'utf8');
    const $ = cheerio.load(html, { decodeEntities: false });
    const canonical = $('link[rel="canonical"]').attr('href');
    if (!canonical) continue;
    const pagePath = `/${relative.replace(/index\.html$/, '')}`;
    const isRedirect = $('meta[http-equiv="refresh" i]').length > 0;
    if (isRedirect) {
      redirects.push({ relative, canonical, robots: $('meta[name="robots"]').attr('content') || '' });
      if (sitemapSet.has(`${siteUrl}${pagePath}`)) issues.push(`- REDIRECT_IN_SITEMAP | /${relative}`);
      continue;
    }

    const canonicalPath = decodeURIComponent(new URL(canonical).pathname);
    if (canonicalPath !== pagePath) issues.push(`- CANONICAL_PATH_MISMATCH | /${relative} | ${canonicalPath}`);
    if (canonicalPages.has(canonical)) issues.push(`- DUPLICATE_CANONICAL | ${canonical}`);
    canonicalPages.set(canonical, relative);
    if (!sitemapSet.has(canonical)) issues.push(`- CANONICAL_MISSING_FROM_SITEMAP | ${canonical}`);

    const language = $('html').attr('lang');
    if (language && language !== 'it' && !pagePath.startsWith(`/${language}/`))
      issues.push(`- LANGUAGE_PREFIX_MISMATCH | ${language} | /${relative}`);
    if (language === 'it' && /^\/(en|es|fr|cs|pl|tr|de|ja)\//.test(pagePath))
      issues.push(`- ITALIAN_PAGE_WITH_LANGUAGE_PREFIX | /${relative}`);
  }

  for (const { relative, canonical, robots } of redirects) {
    if (!robots.includes('noindex')) issues.push(`- INDEXABLE_REDIRECT | /${relative}`);
    if (!canonicalPages.has(canonical)) issues.push(`- REDIRECT_TARGET_NOT_CANONICAL | /${relative} | ${canonical}`);
  }
  for (const url of sitemapSet) {
    if (!canonicalPages.has(url)) issues.push(`- SITEMAP_URL_WITHOUT_CANONICAL_PAGE | ${url}`);
  }
}

function inspectTeacherJourney() {
  const routes = {
    it: 'chi-siamo/index.html',
    en: 'en/about-us/index.html',
    es: 'es/sobre-nosotros/index.html',
    fr: 'fr/a-propos/index.html',
    cs: 'cs/o-nas/index.html',
    pl: 'pl/o-nas/index.html',
    tr: 'tr/hakkimizda/index.html',
    de: 'de/ueber-uns/index.html',
    ja: 'ja/watashitachi-ni-tsuite/index.html',
  };
  for (const [language, relative] of Object.entries(routes)) {
    const file = path.join(publicRoot, relative);
    if (!existsSync(file)) {
      issues.push(`- MISSING_ABOUT_PAGE | ${language} | /${relative}`);
      continue;
    }
    const $ = cheerio.load(readFileSync(file, 'utf8'), { decodeEntities: false });
    if ($('link[rel="alternate"]').length !== 10)
      issues.push(`- INCOMPLETE_ABOUT_HREFLANG | ${language} | /${relative}`);
    if ($('.about-teacher').length !== 2 || $('.about-teacher a[href*="preply"]').length !== 2)
      issues.push(`- INCOMPLETE_TEACHER_PROFILES | ${language} | /${relative}`);
    if (!$('a[href^="https://wa.me/59167434075"]').length)
      issues.push(`- MISSING_WHATSAPP | ${language} | /${relative}`);
  }
  for (const file of walk(publicRoot).filter((entry) => entry.endsWith('.html'))) {
    const html = readFileSync(file, 'utf8');
    if (/http-equiv=["']refresh/i.test(html)) continue;
    const $ = cheerio.load(html, { decodeEntities: false });
    if (!$('.site-header').length) continue;
    const label = `/${path.relative(publicRoot, file).replaceAll('\\', '/')}`;
    if (!$('.site-header .about-link').length || !$('.footer-grid .about-link').length)
      issues.push(`- MISSING_ABOUT_NAVIGATION | ${label}`);
    if (
      $('.conversion-section').length &&
      ($('.teacher-cta').length !== 2 || $('.teacher-cta a[href*="preply"]').length !== 2)
    )
      issues.push(`- INCOMPLETE_TEACHER_CTA | ${label}`);
  }
}

function walk(directory) {
  if (!existsSync(directory)) return [];
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) =>
    entry.isDirectory() ? walk(path.join(directory, entry.name)) : [path.join(directory, entry.name)]
  );
}

import { existsSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import * as cheerio from 'cheerio';

const root = process.cwd();
const publicRoot = path.join(root, 'legacy-html');
const languages = ['it', 'en', 'es', 'fr', 'cs', 'pl', 'tr', 'de', 'ja'];
const localizedLanguages = languages.filter((language) => language !== 'it');
const italianLeakPattern = /\b(Quando usiamo|Usiamo il|Impara|Scrivi|Ricomincia|Il tuo risultato|Prenota su|Prossima lezione|Esercizi con|Errori comuni|Parole utili|Domande di comprensione|Per parlare|Dalla regola|Durante una lezione|Livello|Letture|Grammatica|Favole)\b/i;
const seoTerms = {
  en: 'Italian grammar', es: 'gramática italiana', fr: 'grammaire italienne', cs: 'italská gramatika',
  pl: 'gramatyka włoska', tr: 'İtalyanca dil bilgisi', de: 'italienische Grammatik', ja: 'イタリア語文法',
};
const issues = [];
const resources = collectResources();

inspectIndexCoverage();

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
    const pageRelative = language === 'it' ? resource.relative : decodeURIComponent(new URL(italianAlternates.get(language)).pathname.replace(/^\//, ''));
    const slug = path.basename(pageRelative, '.html');
    const levels = resource.category === 'grammatica' ? [resource.relative.split('/')[1]] : ['a1', 'a2', 'b1', 'b2', 'c1'];
    for (const level of levels) {
      const pdf = path.join(publicRoot, 'pdf', language, `${slug}-${level}.pdf`);
      if (!existsSync(pdf)) issues.push(`- MISSING_PDF | ${language} | /pdf/${language}/${slug}-${level}.pdf`);
    }
    if (resource.category !== 'grammatica') {
      const pdf = path.join(publicRoot, 'pdf', language, `${slug}-all-levels.pdf`);
      if (!existsSync(pdf)) issues.push(`- MISSING_COMPLETE_PDF | ${language} | /pdf/${language}/${slug}-all-levels.pdf`);
    }
  }
}

const pdfCount = existsSync(path.join(publicRoot, 'pdf')) ? walk(path.join(publicRoot, 'pdf')).filter((file) => file.endsWith('.pdf')).length : 0;
const readingsAndStories = resources.filter((resource) => resource.category !== 'grammatica').length;
const grammarLessons = resources.filter((resource) => resource.category === 'grammatica').length;
const expectedPdfCount = (readingsAndStories * 6 + grammarLessons) * languages.length;
if (pdfCount < expectedPdfCount) issues.push(`- MISSING_PDF_PACKAGE | expected ${expectedPdfCount} | found ${pdfCount}`);

const report = [
  '# Site Audit', '', `Generated: ${new Date().toISOString().slice(0, 10)}`, '', '## Inventory', '',
  `- Supported languages: ${languages.length}`,
  `- Educational resources: ${resources.length}`,
  `- Expected localized resource pages: ${resources.length * languages.length}`,
  `- Expected PDF files: ${expectedPdfCount}`,
  `- Existing PDF files: ${pdfCount}`,
  `- Findings: ${issues.length}`, '', '## Findings', '',
  ...(issues.length ? issues : ['- No findings.']), '', '## Publication Rule', '',
  'Every localized page must have translated explanatory content, a localized URL, reciprocal hreflang, canonical metadata, and its PDF package.', '',
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
  if (!html.includes('language-switcher') || !html.includes('aria-current="page"')) issues.push(`- BROKEN_LANGUAGE_SWITCHER | ${label}`);
  if (resource.category !== 'grammatica') {
    const italianDocument = cheerio.load(italianHtml, { decodeEntities: false });
    const expectedHeadings = italianDocument('.story-card[id] h2').map((_, element) => italianDocument(element).text().trim()).get();
    const localizedHeadings = $('.story-card[id] h2').map((_, element) => $(element).text().trim()).get();
    if (JSON.stringify(localizedHeadings) !== JSON.stringify(expectedHeadings) || $('.story-card[id] h2[lang="it"]').length !== expectedHeadings.length) {
      issues.push(`- TRANSLATED_STUDY_HEADING | ${label}`);
    }
    if ($('.pdf-downloads-complete a[href$="-all-levels.pdf"]').length !== 1) issues.push(`- MISSING_COMPLETE_PDF_LINK | ${label}`);
    for (const level of ['a1', 'a2', 'b1', 'b2', 'c1']) {
      if ($(`.story-card#${level} > .pdf-downloads-level a[href$="-${level}.pdf"]`).length !== 1) issues.push(`- MISPLACED_LEVEL_PDF_LINK | ${label} | ${level}`);
    }
  }
  const bodyClone = $('body').clone();
  bodyClone.find('.story-text,.conj-table,.example-grid,.mistake-grid,.exercise label,[lang="it"],script,style').remove();
  const explanatoryText = bodyClone.text().replace(/\s+/g, ' ');
  const leak = explanatoryText.match(italianLeakPattern)?.[0];
  if (leak) issues.push(`- ITALIAN_EXPLANATION | ${label} | ${leak}`);
  if (resource.category === 'grammatica' && !$('title').text().toLocaleLowerCase(language).includes(seoTerms[language].toLocaleLowerCase(language))) {
    issues.push(`- MISSING_LOCALIZED_SEO_TERM | ${label} | ${seoTerms[language]}`);
  }
}

function readAlternates(html) {
  const $ = cheerio.load(html, { decodeEntities: false });
  return new Map($('link[rel="alternate"][hreflang]').map((_, element) => [[$(element).attr('hreflang'), $(element).attr('href')]]).get());
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

function inspectIndexCoverage() {
  const storyResources = resources.filter((resource) => resource.category === 'favole');
  const italianHtml = readFileSync(path.join(publicRoot, 'favole', 'index.html'), 'utf8');
  const italianDocument = cheerio.load(italianHtml, { decodeEntities: false });
  for (const resource of storyResources) {
    const href = path.basename(resource.relative);
    if (!italianDocument(`.resource-directory a[href$="${href}"]`).length) issues.push(`- MISSING_INDEX_LINK | it | ${resource.relative}`);
  }
  const alternates = readAlternates(italianHtml);
  for (const language of localizedLanguages) {
    const indexHref = alternates.get(language);
    if (!indexHref) continue;
    const indexRelative = decodeURIComponent(new URL(indexHref).pathname.replace(/^\//, ''));
    const indexDocument = cheerio.load(readFileSync(path.join(publicRoot, indexRelative, 'index.html'), 'utf8'), { decodeEntities: false });
    for (const resource of storyResources) {
      const source = readFileSync(path.join(publicRoot, resource.relative), 'utf8');
      const localizedHref = readAlternates(source).get(language);
      const expectedPath = localizedHref ? decodeURIComponent(new URL(localizedHref).pathname) : '';
      const linkedPaths = indexDocument('.resource-directory a').map((_, element) => decodeURIComponent(indexDocument(element).attr('href') || '')).get();
      if (!localizedHref || !linkedPaths.includes(expectedPath)) {
        issues.push(`- MISSING_INDEX_LINK | ${language} | ${resource.relative}`);
      }
    }
  }
}

function walk(directory) {
  if (!existsSync(directory)) return [];
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => entry.isDirectory() ? walk(path.join(directory, entry.name)) : [path.join(directory, entry.name)]);
}

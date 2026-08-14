import { existsSync, readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';
import * as cheerio from 'cheerio';
import { grammarSeoSlugs } from './grammar-seo-slugs.mjs';
import { grammarSeoTitles } from './grammar-seo-titles.mjs';

const root = process.cwd();
const siteRoot = path.join(root, 'legacy-html');
const siteUrl = 'https://italianoconmartin.com';
const levels = ['a1', 'a2', 'b1', 'b2', 'c1'];
const categories = {
  en: { grammar: 'grammar', vocabulary: 'vocabulary' },
  es: { grammar: 'gramatica', vocabulary: 'vocabulario' },
  fr: { grammar: 'grammaire', vocabulary: 'vocabulaire' },
  cs: { grammar: 'gramatika', vocabulary: 'slovni-zasoba' },
  pl: { grammar: 'gramatyka', vocabulary: 'slownictwo' },
  tr: { grammar: 'dilbilgisi', vocabulary: 'kelime-bilgisi' },
  de: { grammar: 'grammatik', vocabulary: 'wortschatz' },
  ja: { grammar: 'bunpo', vocabulary: 'goi' },
};
const sitemap = readFileSync(path.join(siteRoot, 'sitemap.xml'), 'utf8');
const sitemapDocument = cheerio.load(sitemap, { xmlMode: true });
const sitemapUrls = new Set(
  sitemapDocument('loc')
    .map((_, element) => sitemapDocument(element).text())
    .get()
);
const findings = [];
let canonicalCount = 0;
let redirectCount = 0;

for (const [language, lessons] of Object.entries(grammarSeoSlugs)) {
  const { grammar, vocabulary } = categories[language];
  const grammarIndexPath = path.join(siteRoot, language, grammar, 'index.html');
  const grammarIndex = cheerio.load(readFileSync(grammarIndexPath, 'utf8'));
  for (const [sourceSlug, targetSlug] of Object.entries(lessons)) {
    const matches = levels
      .map((level) => ({
        level,
        file: path.join(siteRoot, language, grammar, level, `${targetSlug}.html`),
      }))
      .filter(({ file }) => existsSync(file));
    if (matches.length !== 1) {
      findings.push(`CANONICAL_COUNT | ${language} | ${sourceSlug} | ${matches.length}`);
      continue;
    }
    canonicalCount += 1;
    const { level, file } = matches[0];
    const html = readFileSync(file, 'utf8');
    const pathname = `/${language}/${grammar}/${level}/${targetSlug}.html`;
    const canonical = `${siteUrl}${pathname}`;
    const expectedTitle = grammarSeoTitles[language]?.[sourceSlug];
    const document = cheerio.load(html);
    const heading = document('h1').first().text().replace(/\s+/g, ' ').trim();
    const pageTitle = document('title').first().text().replace(/\s+/g, ' ').trim();
    const breadcrumb = document('.breadcrumbs').first().text().replace(/\s+/g, ' ').trim();
    const cardTitle = grammarIndex(`a.lesson-card[href$="/${targetSlug}.html"] h3`)
      .first()
      .text()
      .replace(/\s+/g, ' ')
      .trim();
    if (/http-equiv=["']refresh/i.test(html)) findings.push(`CANONICAL_IS_REDIRECT | ${pathname}`);
    if (!html.includes(`<link rel="canonical" href="${canonical}">`)) findings.push(`WRONG_CANONICAL | ${pathname}`);
    if (!expectedTitle) findings.push(`MISSING_EXPECTED_TITLE | ${language} | ${sourceSlug}`);
    if (expectedTitle && heading !== expectedTitle) findings.push(`WRONG_H1 | ${pathname} | ${heading}`);
    if (expectedTitle && !pageTitle.startsWith(`${expectedTitle} |`))
      findings.push(`WRONG_TITLE | ${pathname} | ${pageTitle}`);
    if (expectedTitle && !breadcrumb.endsWith(`/ ${expectedTitle}`))
      findings.push(`WRONG_BREADCRUMB | ${pathname} | ${breadcrumb}`);
    if (expectedTitle && cardTitle !== expectedTitle)
      findings.push(`WRONG_INDEX_CARD | ${language} | ${targetSlug} | ${cardTitle || 'missing'}`);
    if (!html.includes(`href="/${language}/${vocabulary}/"`)) findings.push(`MISSING_VOCABULARY_NAV | ${pathname}`);
    if (!sitemapUrls.has(canonical)) findings.push(`MISSING_FROM_SITEMAP | ${pathname}`);
    const pdf = path.join(siteRoot, 'pdf', language, `${targetSlug}-${level}.pdf`);
    if (!existsSync(pdf)) findings.push(`MISSING_PDF | ${pathname}`);
  }

  const grammarRoot = path.join(siteRoot, language, categories[language].grammar);
  for (const file of walk(grammarRoot)) {
    if (!file.endsWith('.html')) continue;
    const html = readFileSync(file, 'utf8');
    if (!/http-equiv=["']refresh/i.test(html)) continue;
    redirectCount += 1;
    const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1] || '';
    const target = canonical.replace(siteUrl, '');
    if (!target || !existsSync(path.join(siteRoot, decodeURIComponent(target)))) {
      findings.push(`BROKEN_REDIRECT | /${path.relative(siteRoot, file).replaceAll('\\', '/')}`);
    }
  }
}

console.log(
  `# Grammar SEO Audit\n\n- Canonical lessons: ${canonicalCount}\n- Compatibility redirects: ${redirectCount}\n- Findings: ${findings.length}`
);
if (findings.length) {
  console.log(`\n${findings.map((finding) => `- ${finding}`).join('\n')}`);
  process.exitCode = 1;
}

function walk(directory) {
  if (!existsSync(directory)) return [];
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) =>
    entry.isDirectory() ? walk(path.join(directory, entry.name)) : [path.join(directory, entry.name)]
  );
}

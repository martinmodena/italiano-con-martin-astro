import { existsSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const publicRoot = path.join(root, 'legacy-html');
const languages = ['it', 'en', 'es', 'fr', 'cs', 'pl', 'tr', 'de', 'ja'];
const routes = {
  it: { letture: 'letture', grammatica: 'grammatica', favole: 'favole' },
  en: { letture: 'readings', grammatica: 'grammar', favole: 'stories' },
  es: { letture: 'readings', grammatica: 'grammar', favole: 'stories' },
  fr: { letture: 'readings', grammatica: 'grammar', favole: 'stories' },
  cs: { letture: 'readings', grammatica: 'grammar', favole: 'stories' },
  pl: { letture: 'readings', grammatica: 'grammar', favole: 'stories' },
  tr: { letture: 'readings', grammatica: 'grammar', favole: 'stories' },
  de: { letture: 'readings', grammatica: 'grammar', favole: 'stories' },
  ja: { letture: 'readings', grammatica: 'grammar', favole: 'stories' },
};

const issues = [];
const resources = collectResources();

for (const resource of resources) {
  for (const language of languages) {
    const relative = localizedPath(resource, language);
    const absolute = path.join(publicRoot, relative);
    if (!existsSync(absolute)) {
      issues.push(`- MISSING_PAGE | ${language} | /${relative.replaceAll('\\', '/')}`);
      continue;
    }

    const html = readFileSync(absolute, 'utf8');
    for (const marker of ['<title>', 'meta name="description"', 'rel="canonical"', 'hreflang']) {
      if (!html.includes(marker)) issues.push(`- MISSING_SEO | ${language} | ${relative} | ${marker}`);
    }
  }
}

const pdfCount = existsSync(path.join(publicRoot, 'pdf'))
  ? walk(path.join(publicRoot, 'pdf')).filter((file) => file.endsWith('.pdf')).length
  : 0;

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
  `- Existing PDF files: ${pdfCount}`,
  `- Findings: ${issues.length}`,
  '',
  '## Findings',
  '',
  ...(issues.length ? issues : ['- No findings.']),
  '',
  '## Publication Rule',
  '',
  'This audit is intentionally non-blocking until every resource has reviewed translations, localized after-reading sections, reciprocal hreflang, and its PDF package.',
  '',
].join('\n');

writeFileSync(path.join(root, 'SITE_AUDIT.md'), report);
console.log(report);

function collectResources() {
  const result = [];
  for (const category of ['letture', 'favole', 'grammatica']) {
    const categoryRoot = path.join(publicRoot, category);
    for (const file of walk(categoryRoot)) {
      if (!file.endsWith('.html') || path.basename(file) === 'index.html') continue;
      const relative = path.relative(publicRoot, file).replaceAll('\\', '/');
      result.push({ category, relative });
    }
  }
  return result.sort((a, b) => a.relative.localeCompare(b.relative));
}

function localizedPath(resource, language) {
  if (language === 'it') return resource.relative;
  const parts = resource.relative.split('/');
  const category = routes[language][resource.category];
  const file = parts.at(-1);
  const level = resource.category === 'grammatica' ? `${parts[1]}/` : '';
  return path.join(language, category, level, file);
}

function walk(directory) {
  if (!existsSync(directory)) return [];
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const absolute = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(absolute) : [absolute];
  });
}

import { copyFileSync, existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const sourceDir = path.join(root, 'legacy-html');
const pagesDir = path.join(root, 'src', 'pages');
const publicDir = path.join(root, 'public');
const generatedMarker = 'Generated from legacy-html by scripts/import-html.mjs';

if (!existsSync(sourceDir)) {
  throw new Error('Missing legacy-html directory.');
}

const sourceFiles = walk(sourceDir);
const htmlFiles = sourceFiles.filter((file) => /\.html?$/i.test(file));

if (htmlFiles.length === 0) {
  console.log('No .html files found in legacy-html. Add the existing site files there and run npm run import:html.');
  process.exit(0);
}

for (const file of sourceFiles) {
  const relative = path.relative(sourceDir, file);
  if (/\.html?$/i.test(file)) continue;

  const target = path.join(publicDir, relative);
  mkdirSync(path.dirname(target), { recursive: true });
  copyFileSync(file, target);
}

for (const file of htmlFiles) {
  const relative = path.relative(sourceDir, file);
  const output = pageOutputPath(relative);
  const html = readFileSync(file, 'utf8');
  const title = extractTitle(html) || titleFromPath(relative);
  const body = extractBody(html) || html;

  mkdirSync(path.dirname(output), { recursive: true });
  writeFileSync(
    output,
    `---\nimport Layout from '~/layouts/PageLayout.astro';\n\nconst metadata = {\n  title: ${JSON.stringify(title)},\n};\n\nconst legacyHtml = ${JSON.stringify(body)};\n---\n\n<!-- ${generatedMarker}: ${relative.replaceAll('\\', '/')} -->\n<Layout metadata={metadata}>\n  <main class="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">\n    <div class="legacy-html prose max-w-none dark:prose-invert" set:html={legacyHtml} />\n  </main>\n</Layout>\n`
  );
}

console.log(`Imported ${htmlFiles.length} HTML page(s) into src/pages and copied static assets into public.`);

function walk(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(fullPath) : fullPath;
  });
}

function pageOutputPath(relative) {
  const normalized = relative.replaceAll('\\', '/').replace(/\.html?$/i, '.astro');
  const parts = normalized.split('/');
  const file = parts.pop();

  if (/^index\.astro$/i.test(file)) {
    return path.join(pagesDir, ...parts, 'index.astro');
  }

  return path.join(pagesDir, ...parts, file);
}

function extractTitle(html) {
  const match = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  return match ? decodeEntities(stripTags(match[1]).trim()) : '';
}

function extractBody(html) {
  const match = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  return match ? match[1].trim() : '';
}

function stripTags(value) {
  return value.replace(/<[^>]+>/g, ' ');
}

function decodeEntities(value) {
  return value
    .replaceAll('&amp;', '&')
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>')
    .replaceAll('&quot;', '"')
    .replaceAll('&#39;', "'");
}

function titleFromPath(relative) {
  const base = path.basename(relative, path.extname(relative));
  return base === 'index'
    ? 'Home'
    : base
        .replace(/[-_]+/g, ' ')
        .replace(/\b\w/g, (char) => char.toUpperCase());
}

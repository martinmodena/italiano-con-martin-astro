import { copyFileSync, existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const sourceDir = path.join(root, 'legacy-html');
const pagesDir = path.join(root, 'src', 'pages');
const publicDir = path.join(root, 'public');
const generatedMarker = 'Generated from legacy-html by scripts/import-html.mjs';
const passthroughHtml = [/^google[a-z0-9_-]+\.html$/i];

if (!existsSync(sourceDir)) {
  throw new Error('Missing legacy-html directory.');
}

const sourceFiles = walk(sourceDir);
const htmlFiles = sourceFiles.filter((file) => {
  const relative = path.relative(sourceDir, file).replaceAll('\\', '/');
  return /\.html?$/i.test(file) && !passthroughHtml.some((pattern) => pattern.test(relative));
});

if (htmlFiles.length === 0) {
  console.log('No .html files found in legacy-html. Add the existing site files there and run npm run import:html.');
  process.exit(0);
}

for (const file of sourceFiles) {
  const relative = path.relative(sourceDir, file);
  const normalized = relative.replaceAll('\\', '/');
  if (normalized === '.gitkeep') continue;
  if (/\.html?$/i.test(file) && !shouldCopyHtmlToPublic(normalized)) continue;

  const target = path.join(publicDir, relative);
  mkdirSync(path.dirname(target), { recursive: true });
  copyFileSync(file, target);
}

removeGeneratedPages(pagesDir);

for (const file of htmlFiles) {
  const relative = path.relative(sourceDir, file);
  const output = pageOutputPath(relative);
  const html = readFileSync(file, 'utf8');
  const documentHtml = ensureGeneratedComment(html, relative);

  mkdirSync(path.dirname(output), { recursive: true });
  writeFileSync(
    output,
    outputPage(documentHtml, relative)
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
  const normalized = relative.replaceAll('\\', '/');
  const parts = normalized.split('/');
  const file = parts.pop();

  if (/^index\.html?$/i.test(file)) {
    return path.join(pagesDir, ...parts, 'index.astro');
  }

  if (/^404\.html?$/i.test(file) && parts.length === 0) {
    return path.join(pagesDir, '404.astro');
  }

  return path.join(pagesDir, ...parts, `${file}.astro`);
}

function outputPage(html, relative) {
  return `---\nconst documentHtml = ${JSON.stringify(html)};\n---\n\n<Fragment set:html={documentHtml} />\n`;
}

function ensureGeneratedComment(html, relative) {
  const comment = `<!-- ${generatedMarker}: ${relative.replaceAll('\\', '/')} -->`;
  return html.includes(generatedMarker) ? html : html.replace(/<!doctype html>/i, `$&\n${comment}`);
}

function shouldCopyHtmlToPublic(relative) {
  if (passthroughHtml.some((pattern) => pattern.test(relative))) return true;
  if (/^404\.html?$/i.test(relative)) return false;
  return !/(^|\/)index\.html?$/i.test(relative);
}

function removeGeneratedPages(dir) {
  if (!existsSync(dir)) return;

  for (const file of walk(dir).filter((entry) => /\.astro$/i.test(entry))) {
    const content = readFileSync(file, 'utf8');
    if (content.includes(generatedMarker)) {
      rmSync(file);
    }
  }
}

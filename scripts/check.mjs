/**
 * Validates the generated site. This is what replaces the type checker: the
 * compiler could not see inside JSX strings either, but a broken link or a
 * missing canonical is exactly the kind of mistake worth catching.
 *
 *   node scripts/check.mjs
 */
import { readFile, readdir, stat } from 'node:fs/promises';
import { join, relative } from 'node:path';

import { build } from '../build.mjs';

const DIST = 'dist';
const failures = [];
const fail = (message) => failures.push(message);

async function walk(dir) {
  const found = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) found.push(...(await walk(path)));
    else found.push(path);
  }
  return found;
}

const { pages } = await build({ quiet: true });
const files = await walk(DIST);
const htmlFiles = files.filter((f) => f.endsWith('.html'));

/* 1. Every declared page exists. */
for (const page of pages) {
  const file = join(DIST, page.path, 'index.html');
  if (!files.includes(file)) fail(`missing page: ${page.path}`);
}
if (!files.includes(join(DIST, 'index.html'))) fail('missing language redirector');
if (!files.includes(join(DIST, '404.html'))) fail('missing 404 page');

/* 2. Head essentials on every rendered page. */
for (const page of pages) {
  const html = await readFile(join(DIST, page.path, 'index.html'), 'utf8');
  const need = [
    ['<title>', 'title'],
    ['name="description"', 'description'],
    ['rel="canonical"', 'canonical link'],
    ['hreflang="pt-BR"', 'pt hreflang'],
    ['hreflang="en"', 'en hreflang'],
    ['property="og:image"', 'open graph image'],
    ['application/ld+json', 'structured data'],
  ];
  for (const [needle, label] of need) {
    if (!html.includes(needle)) fail(`${page.path} has no ${label}`);
  }
  const lang = html.match(/<html lang="([^"]+)"/)?.[1];
  const expected = page.lang === 'pt' ? 'pt-BR' : 'en';
  if (lang !== expected) fail(`${page.path} declares lang="${lang}", expected "${expected}"`);
}

/* 3. No unresolved template placeholders or raw objects leaked into the HTML. */
for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8');
  for (const bad of ['undefined<', '>undefined', '[object Object]', 'NaN<', '${']) {
    if (html.includes(bad)) fail(`${relative(DIST, file)} contains "${bad}"`);
  }
}

/* 4. Every internal link and asset reference resolves to a real file. */
const exists = new Set(files.map((f) => '/' + relative(DIST, f).split('\\').join('/')));
const resolves = (href) => {
  const path = href.split('#')[0].split('?')[0];
  if (!path) return true;
  return exists.has(path) || exists.has(`${path}index.html`) || exists.has(path.replace(/\/$/, '') + '/index.html');
};

for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8');
  const refs = [...html.matchAll(/(?:href|src)="(\/[^"]*)"/g)].map((m) => m[1]);
  for (const ref of new Set(refs)) {
    if (!resolves(ref)) fail(`${relative(DIST, file)} links to ${ref}, which does not exist`);
  }
}

/* 5. Both languages produce the same number of pages. */
const perLang = { pt: 0, en: 0 };
for (const page of pages) perLang[page.lang]++;
if (perLang.pt !== perLang.en) fail(`page count differs: ${perLang.pt} pt vs ${perLang.en} en`);

/* 6. Nothing oversized slipped into the output. */
for (const file of files) {
  const { size } = await stat(file);
  if (size > 512 * 1024) fail(`${relative(DIST, file)} is ${(size / 1024).toFixed(0)} kB, over the 512 kB budget`);
}

if (failures.length) {
  console.error(`\n[check] ${failures.length} problem${failures.length > 1 ? 's' : ''}:\n`);
  for (const message of failures) console.error(`  · ${message}`);
  process.exit(1);
}

console.log(`[check] ok — ${pages.length} pages, ${htmlFiles.length} html files, ${files.length} files total`);

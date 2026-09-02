/**
 * The whole build. Reads the content, writes a folder of static files.
 *
 *   node build.mjs
 *
 * Output in dist/: one HTML file per page, one hashed CSS, one hashed JS,
 * everything in public/ copied as-is, plus sitemap, robots, a language
 * redirector and a 404 page.
 */
import { createHash } from 'node:crypto';
import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

import { LANGS, profile, projects } from './src/content/site.js';
import { ui } from './src/content/ui.js';
import { absolute, BASE_PATH } from './src/lib/config.js';
import { to } from './src/lib/i18n.js';
import { layout } from './src/ui/layout.js';
import { home } from './src/pages/home.js';
import { about } from './src/pages/about.js';
import { projectsList } from './src/pages/projects.js';
import { caseStudy } from './src/pages/case.js';

const DIST = 'dist';
const hash = (content) => createHash('sha256').update(content).digest('hex').slice(0, 8);

async function write(path, content) {
  const full = join(DIST, path);
  await mkdir(dirname(full), { recursive: true });
  await writeFile(full, content, 'utf8');
  return Buffer.byteLength(content);
}

/** Every page of the site, as data. Adding a page means adding an entry here. */
function pages() {
  const list = [];
  for (const lang of LANGS) {
    const suffix = `${profile.name}`;
    list.push({
      path: to('/', lang),
      lang,
      title: `${profile.name} — ${profile.role[lang]}`,
      description: profile.tagline[lang],
      body: home(lang),
      priority: 1,
    });
    list.push({
      path: to('/about', lang),
      lang,
      title: `${ui.nav.about[lang]} · ${suffix}`,
      description: profile.tagline[lang],
      body: about(lang),
      priority: 0.7,
    });
    list.push({
      path: to('/projects', lang),
      lang,
      title: `${ui.project.all[lang]} · ${suffix}`,
      description: ui.project.allSub[lang],
      body: projectsList(lang),
      priority: 0.7,
    });
    for (const project of projects) {
      list.push({
        path: to(`/projects/${project.slug}`, lang),
        lang,
        title: `${project.name} — ${project.tagline[lang].slice(0, 60)} · ${suffix}`,
        description: project.summary[lang],
        ogType: 'article',
        ogTitle: project.name,
        body: caseStudy(project, lang),
        priority: 0.7,
      });
    }
  }
  return list;
}

/* ── Language redirector and error page ─────────────────────────────────── */
const shell = (title, body) => `<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${title}</title>
<meta name="robots" content="noindex">
<style>
  :root{color-scheme:light dark}
  html,body{height:100%}
  body{margin:0;display:grid;place-items:center;font:16px/1.6 ui-sans-serif,system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;background:#fff;color:#3a4251;text-align:center;padding:2rem}
  a{color:inherit;font-weight:600}
  .k{font:600 12px/1 ui-monospace,SFMono-Regular,Menlo,monospace;letter-spacing:.18em;text-transform:uppercase;opacity:.5}
  h1{font-size:clamp(1.5rem,4vw,2rem);letter-spacing:-.02em;margin:.75rem 0 .5rem}
  p{margin:.25rem 0;opacity:.75}
  @media (prefers-color-scheme:dark){body{background:#080a0e;color:#d5dae3}}
</style>
</head>
<body>${body}</body>
</html>
`;

const redirector = () =>
  shell(
    'Redirecting…',
    `<div>
  <p class="k">Redirecionando · Redirecting</p>
  <noscript><p><a href="${BASE_PATH}/pt/">Português</a> · <a href="${BASE_PATH}/en/">English</a></p></noscript>
</div>
<script>
(function(){
  var base = ${JSON.stringify(BASE_PATH)};
  var nav = (navigator.language || 'pt').toLowerCase();
  location.replace(base + '/' + (nav.indexOf('pt') === 0 ? 'pt' : 'en') + '/');
})();
</script>`,
  );

const notFound = () =>
  shell(
    '404',
    `<div>
  <p class="k">404</p>
  <h1>${ui.notFound.title.pt} · ${ui.notFound.title.en}</h1>
  <p>${ui.notFound.body.pt}</p>
  <p>${ui.notFound.body.en}</p>
  <p style="margin-top:1.5rem"><a href="${BASE_PATH}/pt/">${ui.notFound.cta.pt}</a> · <a href="${BASE_PATH}/en/">${ui.notFound.cta.en}</a></p>
</div>`,
  );

/* ── Build ──────────────────────────────────────────────────────────────── */
export async function build({ liveReload = false, quiet = false } = {}) {
  const started = Date.now();
  await rm(DIST, { recursive: true, force: true });
  await mkdir(DIST, { recursive: true });

  await cp('public', DIST, { recursive: true });

  const css = await readFile('src/styles/app.css', 'utf8');
  const cssPath = `/app.${hash(css)}.css`;
  await write(cssPath, css);

  const js = await readFile('src/assets/app.js', 'utf8');
  const jsPath = `/app.${hash(js)}.js`;
  await write(jsPath, js);

  const assets = { css: cssPath, js: jsPath };
  const all = pages();
  let bytes = 0;
  for (const page of all) {
    const document = layout({ ...page, assets, liveReload, children: page.body });
    bytes += await write(`${page.path}index.html`, String(document));
  }

  await write('/index.html', redirector());
  await write('/404.html', notFound());
  await write('/.nojekyll', '');

  const now = new Date().toISOString();
  await write(
    '/sitemap.xml',
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${all
      .map((p) => `  <url><loc>${absolute(p.path)}</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq><priority>${p.priority}</priority></url>`)
      .join('\n')}\n</urlset>\n`,
  );
  await write('/robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${absolute('/sitemap.xml')}\n`);

  if (!quiet) {
    console.log(
      `[build] ${all.length} pages, ${(bytes / 1024).toFixed(0)} kB HTML, ${(css.length / 1024).toFixed(1)} kB CSS, ${(js.length / 1024).toFixed(1)} kB JS in ${Date.now() - started} ms`,
    );
  }
  return { assets, pages: all };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  build().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}

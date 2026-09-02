/**
 * Pós-build para publicação estática (GitHub Pages).
 *
 * O site vive em /pt e /en. Como a exportação estática não tem middleware,
 * este script escreve:
 *   out/index.html  → detecta o idioma do navegador e redireciona
 *   out/404.html    → página de erro do GitHub Pages, bilíngue
 *   out/.nojekyll   → impede o Jekyll de ignorar a pasta _next
 */
import { mkdir, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join } from 'node:path';

const OUT = join(process.cwd(), 'out');
const BASE = process.env.NEXT_PUBLIC_BASE_PATH || '';

if (!existsSync(OUT)) {
  console.error('[postbuild] pasta "out" não encontrada — rode "next build" antes.');
  process.exit(1);
}

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

// ── index.html: escolhe o idioma e redireciona ───────────────────────────────
const redirect = shell(
  'Redirecionando…',
  `<div>
  <p class="k">Redirecionando · Redirecting</p>
  <noscript><p><a href="${BASE}/pt/">Português</a> · <a href="${BASE}/en/">English</a></p></noscript>
</div>
<script>
(function(){
  var base = ${JSON.stringify(BASE)};
  var nav = (navigator.language || navigator.userLanguage || 'pt').toLowerCase();
  var lang = nav.indexOf('pt') === 0 ? 'pt' : 'en';
  location.replace(base + '/' + lang + '/');
})();
</script>`,
);

// ── 404.html: erro do GitHub Pages ───────────────────────────────────────────
const notFound = shell(
  '404',
  `<div>
  <p class="k">404</p>
  <h1>Página não encontrada · Page not found</h1>
  <p>O endereço que você abriu não existe por aqui.</p>
  <p>The address you opened does not exist here.</p>
  <p style="margin-top:1.5rem"><a href="${BASE}/pt/">Início</a> · <a href="${BASE}/en/">Home</a></p>
</div>`,
);

await mkdir(OUT, { recursive: true });
await writeFile(join(OUT, 'index.html'), redirect, 'utf8');
await writeFile(join(OUT, '404.html'), notFound, 'utf8');
await writeFile(join(OUT, '.nojekyll'), '', 'utf8');

console.log(`[postbuild] index.html, 404.html e .nojekyll escritos em out/${BASE ? ` (basePath: ${BASE})` : ''}`);

/**
 * Development server: serves dist/, rebuilds when a source file changes and
 * reloads the open tab. No dependencies, no bundler, no watcher library.
 *
 *   node dev.mjs [port]
 */
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { watch } from 'node:fs';
import { extname, join, normalize } from 'node:path';

import { build } from './build.mjs';

const PORT = Number(process.argv[2] || process.env.PORT || 3000);
const DIST = 'dist';

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
};

const clients = new Set();

async function resolve(urlPath) {
  const clean = normalize(decodeURIComponent(urlPath.split('?')[0])).replace(/^(\.\.[/\\])+/, '');
  const candidates = clean.endsWith('/') ? [join(clean, 'index.html')] : [clean, join(clean, 'index.html'), `${clean}.html`];
  for (const candidate of candidates) {
    const file = join(DIST, candidate);
    try {
      if ((await stat(file)).isFile()) return file;
    } catch {
      /* try the next candidate */
    }
  }
  return null;
}

const server = createServer(async (req, res) => {
  if (req.url === '/__reload') {
    res.writeHead(200, { 'content-type': 'text/event-stream', 'cache-control': 'no-cache', connection: 'keep-alive' });
    res.write('\n');
    clients.add(res);
    req.on('close', () => clients.delete(res));
    return;
  }

  const file = await resolve(req.url);
  if (!file) {
    const missing = await readFile(join(DIST, '404.html')).catch(() => 'Not found');
    res.writeHead(404, { 'content-type': 'text/html; charset=utf-8' });
    res.end(missing);
    return;
  }

  res.writeHead(200, { 'content-type': TYPES[extname(file)] || 'application/octet-stream', 'cache-control': 'no-store' });
  res.end(await readFile(file));
});

let rebuilding = false;
let pending = false;

async function rebuild() {
  if (rebuilding) {
    pending = true;
    return;
  }
  rebuilding = true;
  try {
    await build({ liveReload: true });
    for (const client of clients) client.write('data: reload\n\n');
  } catch (error) {
    console.error('[dev] build failed:', error.message);
  } finally {
    rebuilding = false;
    if (pending) {
      pending = false;
      rebuild();
    }
  }
}

await build({ liveReload: true });

let timer;
for (const dir of ['src', 'public']) {
  watch(dir, { recursive: true }, () => {
    clearTimeout(timer);
    timer = setTimeout(rebuild, 80);
  });
}

server.listen(PORT, () => {
  console.log(`[dev] http://localhost:${PORT}/pt/  ·  watching src/ and public/`);
});

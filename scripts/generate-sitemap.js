import { readdirSync, statSync, writeFileSync, existsSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const BASE_URL = 'https://traceremove.com';
const DIST_DIR = 'dist';
const SITEMAP_PATH = join(DIST_DIR, 'sitemap.xml');

function walk(dir) {
  const entries = readdirSync(dir);
  const files = [];

  for (const entry of entries) {
    const fullPath = join(dir, entry);
    const stats = statSync(fullPath);

    if (stats.isDirectory()) {
      files.push(...walk(fullPath));
    } else if (stats.isFile() && fullPath.endsWith('.html')) {
      files.push(fullPath);
    }
  }

  return files;
}

if (!existsSync(DIST_DIR)) {
  throw new Error(`Missing dist directory: ${DIST_DIR}. Run vite build first.`);
}

const htmlFiles = walk(DIST_DIR);

const urls = htmlFiles
  .map((file) => relative(DIST_DIR, file).split(sep).join('/'))
  .map((relPath) => {
    if (relPath === 'index.html') {
      return `${BASE_URL}/`;
    }

    if (relPath.endsWith('/index.html')) {
      const clean = relPath.slice(0, -'index.html'.length);
      return `${BASE_URL}/${clean}`;
    }

    return `${BASE_URL}/${relPath.replace(/\.html$/, '')}`;
  })
  .sort((a, b) => a.localeCompare(b));

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
  .map((url) => `  <url><loc>${url}</loc></url>`)
  .join('\n')}\n</urlset>\n`;

writeFileSync(SITEMAP_PATH, xml, 'utf8');
console.log(`Generated sitemap with ${urls.length} URLs at ${SITEMAP_PATH}`);

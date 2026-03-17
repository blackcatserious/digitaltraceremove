import { readdirSync, statSync, writeFileSync, existsSync, readFileSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const BASE_URL = 'https://traceremove.com';
const DIST_DIR = 'dist';
const SITEMAP_PATH = join(DIST_DIR, 'sitemap.xml');
const PAGES_DATA_PATH = 'src/data/pages.ts';

function walkHtmlFiles(dir) {
  const entries = readdirSync(dir);
  let files = [];

  for (const entry of entries) {
    const fullPath = join(dir, entry);
    const stats = statSync(fullPath);

    if (stats.isDirectory()) {
      files = files.concat(walkHtmlFiles(fullPath));
    } else if (stats.isFile() && entry.endsWith('.html')) {
      files.push(fullPath);
    }
  }

  return files;
}

function relHtmlToPath(relPath) {
  const normalized = relPath.split(sep).join('/');
  let urlPath = `/${normalized.replace(/\/index\.html$/, '/').replace(/\.html$/, '')}`;

  if (urlPath === '/index/' || urlPath === '/index') {
    urlPath = '/';
  }

  if (!urlPath.startsWith('/')) {
    urlPath = `/${urlPath}`;
  }

  if (urlPath.length > 1 && urlPath.endsWith('/')) {
    urlPath = urlPath.slice(0, -1);
  }

  return urlPath;
}

function parseKeysFromPagesData(fileContent, sectionName) {
  const sectionStart = fileContent.indexOf(`const ${sectionName}`);
  if (sectionStart === -1) return [];

  const nextSectionStart =
    sectionName === 'serviceConfigs'
      ? fileContent.indexOf('const industryConfigs', sectionStart)
      : fileContent.indexOf('const formatCurrency', sectionStart);

  const section = fileContent.slice(sectionStart, nextSectionStart === -1 ? fileContent.length : nextSectionStart);
  const matches = [...section.matchAll(/\bkey:\s*'([^']+)'/g)];
  return [...new Set(matches.map((m) => m[1]))];
}

function getExpectedAppPaths() {
  if (!existsSync(PAGES_DATA_PATH)) return [];

  const source = readFileSync(PAGES_DATA_PATH, 'utf8');
  const serviceKeys = parseKeysFromPagesData(source, 'serviceConfigs');
  const industryKeys = parseKeysFromPagesData(source, 'industryConfigs');

  if (!serviceKeys.length || !industryKeys.length) return [];

  const topLevel = [
    '/',
    '/blog',
    '/contact',
    '/case-studies',
    '/resources',
    '/about',
    '/services',
    '/faq',
    '/academy',
    '/media',
    '/team',
    '/partners',
    '/trust',
    '/command-center',
    '/join',
    '/privacy',
    '/terms',
  ];

  const localizedBases = ['en', 'fr', 'es'];
  const localizedTopLevel = localizedBases.flatMap((lang) => {
    const root = `/${lang}`;
    const rest = topLevel.filter((p) => p !== '/').map((p) => `/${lang}${p}`);
    return [root, ...rest];
  });

  const servicePages = localizedBases.flatMap((lang) =>
    serviceKeys.flatMap((serviceKey) => industryKeys.map((industryKey) => `/${lang}/${serviceKey}-${industryKey}`)),
  );

  return [...topLevel, ...localizedTopLevel, ...servicePages];
}

if (!existsSync(DIST_DIR)) {
  throw new Error(`Missing dist directory: ${DIST_DIR}. Run vite build first.`);
}

const htmlFiles = walkHtmlFiles(DIST_DIR);
const distPaths = htmlFiles.map((file) => relHtmlToPath(relative(DIST_DIR, file)));
const fallbackPaths = getExpectedAppPaths();

const paths = [...new Set([...distPaths, ...fallbackPaths])].sort((a, b) => a.localeCompare(b));
const today = new Date().toISOString().split('T')[0];

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths
  .map((p) => {
    const priority = p === '/' ? '1.0' : p.startsWith('/en/') || p.startsWith('/fr/') || p.startsWith('/es/') ? '0.8' : '0.9';
    return `  <url>\n    <loc>${BASE_URL}${p}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${priority}</priority>\n  </url>`;
  })
  .join('\n')}\n</urlset>\n`;

writeFileSync(SITEMAP_PATH, xml, 'utf8');
console.log(`Sitemap generated with ${paths.length} URLs`);

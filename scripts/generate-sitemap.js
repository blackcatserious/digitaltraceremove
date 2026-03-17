import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BASE_URL = 'https://traceremove.com';
const DIST_DIR = 'dist';
const SITEMAP_PATH = join(DIST_DIR, 'sitemap.xml');

const routes = [
  '/',
  '/contact', '/case-studies', '/resources', '/about', '/services',
  '/faq', '/blog', '/academy', '/media', '/team', '/partners',
  '/trust', '/command-center', '/join', '/privacy', '/terms',
  '/fr/', '/fr/contact', '/fr/case-studies', '/fr/resources',
  '/fr/about', '/fr/services', '/fr/faq', '/fr/blog',
  '/es/', '/es/contact', '/es/case-studies', '/es/resources',
  '/es/about', '/es/services', '/es/faq', '/es/blog',
];

const services = [
  'analytics-setup', 'brand-identity', 'brand-intelligence',
  'community-building', 'content-strategy', 'conversion-optimization',
  'demand-generation', 'email-nurture', 'marketing-automation',
  'performance-ads', 'pr-outreach', 'product-launch',
  'sales-enablement', 'seo', 'ui-ux', 'video-production'
];
const industries = ['manufacturing', 'saas', 'ecommerce', 'fintech', 'healthcare'];

for (const service of services) {
  for (const industry of industries) {
    routes.push(`/en/${service}-${industry}`);
    routes.push(`/fr/${service}-${industry}`);
    routes.push(`/es/${service}-${industry}`);
  }
}

const uniqueRoutes = [...new Set(routes)];
const today = new Date().toISOString().split('T')[0];

if (!existsSync(DIST_DIR)) {
  mkdirSync(DIST_DIR, { recursive: true });
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${uniqueRoutes
  .map((route) => {
    const normalizedRoute = route === '/fr/' ? '/fr' : route === '/es/' ? '/es' : route;
    return `  <url>\n    <loc>${BASE_URL}${normalizedRoute}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`;
  })
  .join('\n')}\n</urlset>\n`;

writeFileSync(SITEMAP_PATH, xml, 'utf8');
console.log(`Sitemap generated with ${uniqueRoutes.length} URLs`);

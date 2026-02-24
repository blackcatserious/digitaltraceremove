# Search Console & Indexing Rollout Checklist

This repository cannot directly register properties inside Google Search Console because that requires account-level browser authentication. The implementation below prepares the site artifacts so the SEO team can complete registration quickly.

## What was implemented in code
- Robots policy now allows crawl while blocking internal/system routes (`/api/`, `/admin/`, `/process.php`).
- Multi-sitemap output now includes a sitemap index (`/sitemap.xml`) and language sitemaps:
  - `/sitemap-en.xml`
  - `/sitemap-fr.xml`
  - `/sitemap-es.xml`
- Each sitemap URL entry includes:
  - `<lastmod>`
  - `<changefreq>`
  - `<priority>`
  - `xhtml:link` hreflang alternates (`en`, `fr`, `es`, and `x-default`)
- Added a Vercel redirect rule for `/process.php` returning `410 Gone` to remove the recurring 403-style crawl issue.
- Added canonical host redirect from `www.traceremove.com` to `traceremove.com`.

## Manual Google Search Console actions (required)
1. Register both properties:
   - `https://traceremove.com`
   - `https://www.traceremove.com`
2. Submit sitemap index:
   - `https://traceremove.com/sitemap.xml`
3. Validate language sitemaps are discovered from index:
   - `https://traceremove.com/sitemap-en.xml`
   - `https://traceremove.com/sitemap-fr.xml`
   - `https://traceremove.com/sitemap-es.xml`
4. Use URL Inspection on priority pages (home, service pages, blog posts, contact, free-audit).
5. Open Coverage report and check:
   - Crawl errors
   - Excluded pages
   - Discovered, currently not indexed
6. Run Google Rich Results Test on home, service, and FAQ pages.

## Rendering caveat (important)
The app is still a Vite SPA (client-rendered). If URL Inspection reports rendered-content issues, migrate to SSR/SSG (for example Next.js) so core text and metadata are present in server HTML (`view-source`).

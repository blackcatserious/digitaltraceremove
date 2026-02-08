# UI/Performance Audit & Action Plan

## Scope
Reviewed CSS styling tokens, contrast risks, image usage, caching hooks, and form submission logic. Notes below reflect the current implementation plus remaining remediation opportunities.

## Styling findings (colors & typography)
- Base typography and light theme defaults are defined in `src/index.css` (`:root` and heading colors). The main application uses a dark theme with gradients and semi-transparent overlays in `src/App.css`.
- CSS variables found in `src/App.css` include motion tokens and a muted text token (`--text-muted`). Additional section-scoped variables (`--graph-*`, `--card-*`, `--button-glow`) control visual styling across the app.

### Contrast risk areas
- `--text-muted` is used widely on top of translucent dark backgrounds and gradients, which can reduce contrast for small copy (metadata, captions, helper text, legal text). Consider using a higher-contrast token for small text sizes or reinforcing contrast for elements that sit on low-contrast gradients.
- Several backgrounds are composed of multiple gradients and alpha overlays, which can make contrast harder to predict. These should be normalized through a shared color token set to make accessibility audits repeatable.

### Recommendations (color system)
- Introduce a shared token set (e.g., `--color-text`, `--color-text-muted`, `--color-text-muted-strong`, `--color-surface-1`, `--color-surface-2`, `--color-border`) and refactor repeated literal values into tokens.
- Where available, standardize contrast using an elevated muted token for labels, helper text, and metadata that must meet WCAG AA for 14px–16px copy.

## Performance improvements
- **Reduce animation overhead:** A `prefers-reduced-motion` section now limits motion, but the CSS still includes multiple animated gradients and orbit effects. Consider consolidating repeated keyframes and reducing always-on animations for long sessions.
- **Code-splitting:** `src/App.tsx` remains a monolithic file that includes nearly all page content. Split by routes into `src/pages/` and lazy-load non-critical sections to reduce initial bundle size.
- **SEO delivery:** A `prebuild` script generates `sitemap.xml` and `robots.txt` before the Vite build, which should be kept in the build pipeline for crawlability.

## Image usage review
- SVGs are stored in `public/` (`traceremove-orbit.svg`, `traceremove-mark.svg`) and are referenced in `src/App.tsx` via `<img src="/traceremove-*.svg" />`. The non-critical hero orbits now use `loading="lazy"`.
- No background images in CSS (only gradients). No large raster images detected.

### Image optimization plan
- If migrating to Next.js, replace `<img>` with `next/image` for hero and branding visuals. Use `priority` for above-the-fold visuals and `loading="lazy"` for below-the-fold images. Provide explicit `width`/`height` to prevent layout shift.
- If large raster assets are introduced later, convert to WebP/AVIF and set `decoding="async"` to minimize main-thread work.

## Caching & headers
- This is a Vite app (`vite.config.ts`), and there is no `_document.js` or middleware. Headers are configured via `vercel.json`, including CSP, HSTS, and long-lived caching for static assets.

## Forms & submission logic
- **Contact + service inquiry forms:** Submit to `api/hubspot.js`, create a HubSpot contact + deal, and show success/failure states on the client.
- **Footer subscribe form:** Now calls the same HubSpot endpoint and includes error/success messaging.

## HubSpot integration (implemented)
1. **Backend endpoint:** `api/hubspot.js` handles contact + deal creation using server-side credentials.
2. **Environment variables:** `.env.example` documents required values (`HUBSPOT_PRIVATE_APP_TOKEN`, `HUBSPOT_DEAL_PIPELINE_ID`, `HUBSPOT_DEAL_STAGE_ID`, `HUBSPOT_DEFAULT_DEAL_AMOUNT`).
3. **Client integration:** Contact, footer, and service inquiry forms call the endpoint and display success/error feedback.
4. **Validation:** Server-side validation enforces required fields and sanitizes payloads before sending to HubSpot.

## Suggested next steps
- Centralize and refactor color tokens for predictable contrast.
- Audit gradients with an accessibility tool to confirm WCAG AA contrast and adjust `--text-muted` further if needed.
- Split `App.tsx` into route-level chunks with lazy loading to reduce bundle size.
- Keep `vercel.json` updated as new routes/assets are added and monitor CSP violations in production.

# UI/Performance Audit & Action Plan

## Scope
Reviewed CSS styling tokens, contrast risks, image usage, caching hooks, and form submission logic to prepare a remediation and integration plan.

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
- **Reduce animation overhead:** The CSS includes extensive keyframes and repeated animated elements. Add a `prefers-reduced-motion` section that disables or shortens heavy animations for accessibility and performance.
- **Code-splitting:** `src/App.tsx` is a monolithic file that includes nearly all page content. Split by routes into `src/pages/` and lazy-load non-critical sections to reduce initial bundle size.

## Image usage review
- SVGs are stored in `public/` (`traceremove-orbit.svg`, `traceremove-mark.svg`) and are referenced in `src/App.tsx` via `<img src="/traceremove-*.svg" />`.
- No background images in CSS (only gradients). No large raster images detected.

### Image optimization plan
- If migrating to Next.js, replace `<img>` with `next/image` for hero and branding visuals. Use `priority` for above-the-fold visuals and `loading="lazy"` for below-the-fold images. Provide explicit `width`/`height` to prevent layout shift.

## Caching & headers
- This is a Vite app (`vite.config.ts`), and there is no `_document.js` or middleware. Caching headers will need to be set at the hosting layer (e.g., `vercel.json`, `netlify.toml`, or platform-specific headers configuration).

## Forms & submission logic
- **Contact form:** Present in `src/App.tsx` and currently only toggles a local `submitted` state and resets fields. There is no network submission.
- **Footer subscribe form:** Also local-only; no backend call.

## HubSpot integration plan (once write permissions are available)
1. **Backend endpoint:** Add a serverless function (e.g., `/api/hubspot-contact`) that sends contact data to HubSpot using a private token.
2. **Environment variables:**
   - Server-side: `HUBSPOT_PRIVATE_APP_TOKEN` (kept on the server only).
   - Client-side (if needed): `VITE_HUBSPOT_PORTAL_ID` (public identifier only).
3. **Client integration:** Update the contact and footer forms to call the backend endpoint with JSON payloads and display success/error states.
4. **Validation:** Add field validation (email format, required fields) before submission.

## Suggested next steps
- Centralize and refactor color tokens for predictable contrast.
- Add reduced-motion fallbacks and consider minimizing always-on animations.
- Split `App.tsx` into route-level chunks with lazy loading.
- Implement form submission endpoints (HubSpot or a proxy service).
- Add hosting-level caching headers for static assets.


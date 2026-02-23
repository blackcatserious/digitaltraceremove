# Analytics Tracking Plan (GTM-first)

## What is implemented in code
- Front-end now bootstraps **Google Tag Manager** via `VITE_GTM_CONTAINER_ID`.
- `trackEvent` writes standardized event payloads to `window.dataLayer` (no direct `gtag` hardcoding).
- Existing form and phone interactions are mapped to GA4-friendly names:
  - `form_submit` with `form_name`, `form_location`, `language`
  - `phone_click` with `page`, `language`
  - `cta_click` with `cta_text`, `cta_location`, `page`, `language`
  - `reputation_score_started`

## GTM container tasks (manual)
Configure tags inside GTM so this repo remains script-light:
1. GA4 Configuration tag (all pages)
2. GA4 Event tags for:
   - `form_submit`
   - `consultation_booked`
   - `lead_magnet_download`
   - `reputation_score_started`
   - `reputation_score_completed`
   - `breach_check_completed`
   - `chat_initiated`
   - `phone_click`
   - `cta_click`
3. Meta Pixel tag (base + event mapping from dataLayer)
4. Calendly listener tag -> dispatch `consultation_booked`
5. Optional HubSpot/Hotjar tags

## GA4 admin tasks (manual)
- Property: **TraceRemove.com**
- Currency: USD
- Time zone: US Mountain Time
- Enhanced measurement: ON
- Mark key events:
  - `form_submit`
  - `consultation_booked`
  - `reputation_score_completed`
  - `lead_magnet_download`

## Audience setup in GA4 (manual)
- All visitors (30d)
- Engaged visitors (2+ pages or 30+ sec)
- Service page viewers
- Blog readers (3+ blog views)
- Audit starters not completed
- Hot leads (pricing + service in session)

## Meta Pixel custom conversions (manual)
- `/free-audit` thank-you page
- `/reputation-score` results page
- Calendly confirmation URL

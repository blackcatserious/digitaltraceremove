import type { Language } from './pages'
import type { ConversionAction } from '../lib/analytics'

export type LandingField = {
  name: string
  label: string
  placeholder: string
  type?: 'text' | 'email' | 'url'
  required?: boolean
}

export type LandingCopy = {
  slug: string // EN path segment, e.g. 'remove-negative-reviews'
  formName: string // Netlify form name (must match static form in index.html)
  conversion: ConversionAction
  eyebrow: string
  h1: string
  subhead: string
  primaryCta: string
  primaryCtaSub: string
  proofRow: string[]
  bullets: string[]
  honestyLine: string
  formIntro: string
  trustFooter: string
  fields: LandingField[]
  success: string
}

// EN copy is authored verbatim from the brief. FR/ES are scaffolded from EN
// with a visible TODO marker — they are NOT human translations yet.
const TODO_TRANSLATION = 'TODO: human translation'

export const landingPages: Record<string, LandingCopy> = {
  'remove-negative-reviews': {
    slug: 'remove-negative-reviews',
    formName: 'lp-remove-negative-reviews',
    conversion: 'audit_request',
    eyebrow: 'Negative reviews · Brooklyn, NYC · Since 2019',
    h1: 'Most negative reviews can come down. The ones that can’t, we bury.',
    subhead:
      'Platform-policy takedowns, TOS-violation escalation, and direct publisher negotiation — executed by senior operators only. No offshore handoffs. Pay after results.',
    primaryCta: 'Scan your reviews in 10 seconds →',
    primaryCtaSub: 'Instant preview now. Full written audit in 48 hours.',
    proofRow: ['+840 assets removed / suppressed', '92% 12-month retention', '48h crisis SLA'],
    bullets: [
      'Remove fake and TOS-violating reviews via platform policy and DMCA',
      'Clean up review-bomb attacks across Google, Trustpilot, G2, Yelp',
      'Rebuild your aggregate score with legitimate review-acquisition',
    ],
    honestyLine:
      'If a review can’t come down under any policy, we’ll tell you — and show you the suppression route instead. No hand-waving.',
    formIntro:
      'The platform, the review URL, and your email. That’s it — we figure out the rest from the SERP. A senior analyst replies within 48 hours.',
    trustFooter: 'NDA on the first message · No sales pressure · Pay after results',
    fields: [
      { name: 'platform', label: 'Platform', placeholder: 'e.g. Google, Trustpilot, Yelp', required: true },
      { name: 'review_url', label: 'Review URL', placeholder: 'https://…', type: 'url', required: true },
      { name: 'email', label: 'Your email', placeholder: 'you@company.com', type: 'email', required: true },
    ],
    success: 'Received. A senior analyst replies within 48 hours.',
  },
  'serp-suppression': {
    slug: 'serp-suppression',
    formName: 'lp-serp-suppression',
    conversion: 'audit_request',
    eyebrow: 'Negative search results · Brooklyn, NYC · Since 2019',
    h1: 'When it can’t come down, it gets buried.',
    subhead:
      'Authority content, digital PR, and technical SEO engineered to push negative results off the first two pages of your branded search. Senior operators only. Weekly SERP diffs, so you watch it move.',
    primaryCta: 'Scan your branded search in 10 seconds →',
    primaryCtaSub: 'Instant preview now. Full written audit in 48 hours.',
    proofRow: ['+840 assets removed / suppressed', '92% 12-month retention', '48h crisis SLA'],
    bullets: [
      'Build and rank authority assets that outrank the negatives',
      'Earned placements in tier-1 and vertical press (digital PR)',
      'Structured data and technical SEO to consolidate your first page',
    ],
    honestyLine:
      'We can’t delete a result we don’t control — so we out-rank it. You get a weekly SERP diff showing exactly what moved, and what hasn’t.',
    formIntro:
      'The name or brand to clean up, the result that’s hurting you, and your email. A senior analyst replies within 48 hours.',
    trustFooter: 'NDA on the first message · No sales pressure · Pay after results',
    fields: [
      { name: 'brand', label: 'Name or brand', placeholder: 'Name or brand to clean up', required: true },
      { name: 'result_url', label: 'The result that’s hurting you', placeholder: 'https://… or describe it', required: true },
      { name: 'email', label: 'Your email', placeholder: 'you@company.com', type: 'email', required: true },
    ],
    success: 'Received. A senior analyst replies within 48 hours.',
  },
  individuals: {
    slug: 'individuals',
    formName: 'lp-individuals',
    conversion: 'audit_request',
    eyebrow: 'For professionals & executives · Brooklyn, NYC',
    h1: 'HR Googles you. Clients Google you. This is the page they see.',
    subhead:
      'When your name carries your career, the first page of Google is your reputation. We remove what can come down, bury what can’t, and clear your personal data off the broker sites feeding it. Senior operators only. Pay after results.',
    primaryCta: 'See what they see — scan your name in 10 seconds →',
    primaryCtaSub: 'Instant preview now. Full written audit in 48 hours.',
    proofRow: ['+840 assets removed / suppressed', '92% 12-month retention', 'Data-broker opt-outs'],
    bullets: [
      'Remove old posts, unflattering results, and exposed personal data',
      'Opt you out of people-search and data-broker sites',
      'Build and rank the version of you that should show up first',
    ],
    honestyLine:
      'We won’t promise to erase everything — some results can’t come down under any policy. We’ll tell you which, and bury the rest.',
    formIntro:
      'Your name, the result you’re worried about, and your email. A senior analyst replies within 48 hours.',
    trustFooter: 'Discreet · NDA on request · No sales pressure',
    fields: [
      { name: 'full_name', label: 'Your name', placeholder: 'First and last name', required: true },
      { name: 'result_url', label: 'The result you’re worried about', placeholder: 'https://… or describe it', required: true },
      { name: 'email', label: 'Your email', placeholder: 'you@email.com', type: 'email', required: true },
    ],
    success: 'Received. A senior analyst replies within 48 hours.',
  },
  'agencies/white-label': {
    slug: 'agencies/white-label',
    formName: 'lp-agencies-white-label',
    conversion: 'contact',
    eyebrow: 'White-label for agencies · Brooklyn, NYC · Since 2019',
    h1: 'The reputation bench your team doesn’t staff.',
    subhead:
      'White-label content removal, SERP suppression, and crisis response for PR, SEO, and reputation agencies. We work behind your brand, sign your NDA, and report on your templates. Your client sees better results from the agency they already trust.',
    primaryCta: 'Book a partner call →',
    primaryCtaSub: 'NDA before we talk. Scoped pricing, pay after results.',
    proofRow: ['+840 assets removed / suppressed', '92% 12-month retention', '48h crisis SLA'],
    bullets: [
      'We execute under your brand — your client never sees us',
      'Your NDA, your reporting templates, your timelines',
      'Per-engagement pricing, pay after results — no hidden markups',
    ],
    honestyLine:
      'We stay in lane. No poaching your client, no upsell behind your back. We deliver the work and close clean.',
    formIntro:
      'Your agency, the kind of work you need covered, and your email. A senior partner replies within one business day.',
    trustFooter: 'NDA-first · White-label by default · Senior operators only',
    fields: [
      { name: 'agency', label: 'Your agency', placeholder: 'Agency name', required: true },
      { name: 'work_needed', label: 'Work you need covered', placeholder: 'e.g. SERP suppression, review removal', required: true },
      { name: 'email', label: 'Your email', placeholder: 'you@agency.com', type: 'email', required: true },
    ],
    success: 'Received. A senior partner replies within one business day.',
  },
}

export const landingSlugs = Object.keys(landingPages)

// Locale-aware path. EN is unprefixed; FR/ES are prefixed.
export const getLandingPath = (slug: string, language: Language): string =>
  language === 'en' ? `/${slug}` : `/${language}/${slug}`

// FR/ES are scaffolds: we reuse the EN copy and surface a visible TODO banner
// rather than auto-translating and presenting it as final.
export const localeNote = (language: Language): string | null =>
  language === 'en' ? null : `${TODO_TRANSLATION} — showing English copy until ${language.toUpperCase()} is provided.`

# Email Lifecycle Sequences (EN / FR / ES)

This document defines the operational email automations requested for lead capture, post-audit follow-up, and monthly newsletters.

## 1) Data model and segmentation requirements

To support language-based messaging and downstream routing, every lead capture flow should pass these properties into HubSpot:

- `email` (required)
- `firstname` / `lastname` (or single `name` then normalized)
- `preferred_language` (`en`, `fr`, `es`)
- `lead_source` (e.g. `instagram_dm`, `free_audit`, `contact_form`, `reputation_score`, `blog`)
- `lead_magnet` (if applicable)
- `audit_status` (`requested`, `in_progress`, `delivered`)
- `lifecycle_stage` (`subscriber`, `lead`, `marketingqualifiedlead`, `opportunity`)
- `last_conversion_page`

## 2) Sequence A — Welcome sequence (triggered on any lead capture)

### Trigger
- Enrollment condition: any form/API lead creation where `email` is known and `welcome_sequence_completed != true`.

### Suppression
- Do not enroll if contact is already in a sales pipeline stage `opportunity` or beyond.
- Do not enroll if contact opted out.

### Branching
- Branch on `preferred_language` to send EN/FR/ES variants.

### Cadence
- Day 0: Welcome + value delivery confirmation
- Day 1: Key risk checklist
- Day 3: Social proof + case outcome
- Day 5: Service fit quiz / CTA
- Day 7: Consultation prompt

### Message goals
- Establish trust and confidentiality
- Deliver immediate educational value
- Drive first meaningful conversion (`consultation_booked` or `free_audit_request`)

---

## 3) Sequence B — Post-audit sequence (after audit delivery)

### Trigger
- Enrollment condition: `audit_status = delivered` OR webhook event from audit delivery workflow.

### Steps (exact requested timeline)
1. **Day 0** — “Your reputation audit results are ready” + PDF attached
2. **Day 2** — “Here’s what we recommend based on your audit” + top 3 priorities
3. **Day 4** — “How [similar client] solved the same problems you have”
4. **Day 7** — “Let’s discuss your results — book a free 30-min call”

### Language handling
- Send version based on `preferred_language` (`en`, `fr`, `es`).

### Required assets
- Audit PDF template (language-specific cover copy)
- Priority block generator (top 3 actions from audit output)
- Case study snippets by segment (individual / SMB / enterprise)

---

## 4) Sequence C — Monthly newsletter

### Audience
- Three active lists:
  - `newsletter_en`
  - `newsletter_fr`
  - `newsletter_es`

### Content structure (every send)
- 1 case study
- 2 practical tips
- 1 tool recommendation
- 1 primary CTA

### Send policy
- Frequency: monthly
- Send day: Tuesday
- Send time: 10:00 AM in recipient timezone

### Operational setup
- Use HubSpot timezone send optimization when available.
- Fallback: workflow branches by major timezone group if native timezone scheduling is unavailable.

---

## 5) Suggested subject lines by language

### EN
- Welcome: “You’re in — here’s your reputation protection starter kit”
- Post-audit D0: “Your reputation audit results are ready”
- Monthly: “This month’s reputation brief: case study, 2 tactics, 1 tool”

### FR
- Welcome: “Bienvenue — votre kit de protection réputation est prêt”
- Post-audit D0: “Vos résultats d’audit réputation sont prêts”
- Monthly: “Brief réputation du mois : 1 cas, 2 tactiques, 1 outil”

### ES
- Welcome: “Bienvenido/a — tu kit inicial de protección reputacional está listo”
- Post-audit D0: “Tus resultados de auditoría reputacional están listos”
- Monthly: “Brief mensual: 1 caso, 2 tácticas y 1 herramienta”

---

## 6) Event instrumentation alignment (for GTM/GA4)

Emit or map these events from email and CRM actions:
- `form_submit`
- `lead_magnet_download`
- `consultation_booked`
- `reputation_score_started`
- `reputation_score_completed`

Recommended custom CRM events:
- `welcome_sequence_started`
- `welcome_sequence_completed`
- `post_audit_sequence_started`
- `post_audit_call_clicked`
- `newsletter_clicked`

---

## 7) Implementation checklist

1. Create/update HubSpot contact properties listed in Section 1.
2. Build three language branches per workflow.
3. Add enrollment suppression for existing high-stage deals.
4. Connect audit delivery action to post-audit enrollment trigger.
5. Create EN/FR/ES newsletter lists and monthly template blocks.
6. QA each workflow with test contacts in all 3 languages.
7. Confirm event forwarding into GTM/GA4 dashboards.

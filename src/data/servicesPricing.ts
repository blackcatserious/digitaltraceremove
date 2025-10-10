import { type Language } from './pages'

export type PricingTier = {
  id: string
  name: string
  price: string
  cadence: string
  description: string
  highlight: string
  features: string[]
}

export type ServicePillar = {
  title: string
  description: string
  bullets: string[]
}

export type AddOn = {
  name: string
  price: string
  description: string
  benefits: string[]
}

export type WorkflowStep = {
  title: string
  duration: string
  description: string
  outputs: string[]
}

export type Metric = {
  label: string
  value: string
}

export type Testimonial = {
  quote: string
  author: string
  role: string
}

export type ComparisonRow = {
  label: string
  traceremove: string
  traditional: string
}

export type Deliverable = {
  title: string
  description: string
  cadence: string
}

export type SupportChannel = {
  name: string
  availability: string
  description: string
}

export type IndustrySpotlight = {
  id: string
  name: string
  challenge: string
  approach: string
  metric: string
  proof: string
}

export type ConciergeTouchpoint = {
  title: string
  description: string
  availability: string
  channel: string
}

export type EnablementStream = {
  title: string
  description: string
  rhythm: string
  assets: string[]
}

export type IntegrationPartner = {
  name: string
  category: string
  description: string
  coverage: string
}

export type ProcurementArtifact = {
  title: string
  description: string
  format: string
  availability: string
}

export type ComplianceFramework = {
  id: string
  name: string
  framework: string
  coverage: string
  renewal: string
  evidence: string
}

export type ComplianceBadge = {
  label: string
  description: string
}

export type RoiInput = {
  label: string
  help: string
  suffix?: string
  prefix?: string
  min: number
  max: number
  step: number
  defaultValue: number
}

export type RoiScenario = {
  title: string
  loss: string
  improvement: string
  description: string
  bullets: string[]
}

export type RoiCopy = {
  title: string
  subtitle: string
  inputs: {
    incidents: RoiInput
    retention: RoiInput
    customerValue: RoiInput
  }
  assumption: string
  result: {
    headline: string
    label: string
    monthlyLabel: string
    customersLabel: string
    summary: string
  }
  scenarios: RoiScenario[]
}

export type ServicesPricingCopy = {
  hero: {
    eyebrow: string
    heading: string
    body: string
    primaryCta: string
    secondaryCta: string
    note: string
  }
  promise: {
    title: string
    paragraphs: string[]
    bullets: string[]
  }
  pillars: {
    title: string
    subtitle: string
    items: ServicePillar[]
  }
  pricing: {
    title: string
    subtitle: string
    tiers: PricingTier[]
    note: string
  }
  comparison: {
    title: string
    subtitle: string
    criteriaLabel: string
    columns: { traceremove: string; traditional: string }
    rows: ComparisonRow[]
  }
  addOns: {
    title: string
    subtitle: string
    items: AddOn[]
  }
  deliverables: {
    title: string
    subtitle: string
    items: Deliverable[]
  }
  workflow: {
    title: string
    subtitle: string
    steps: WorkflowStep[]
  }
  assurance: {
    title: string
    subtitle: string
    metrics: Metric[]
    testimonials: Testimonial[]
  }
  compliance: {
    title: string
    subtitle: string
    frameworks: ComplianceFramework[]
    badges: ComplianceBadge[]
  }
  support: {
    title: string
    subtitle: string
    channels: SupportChannel[]
  }
  industries: {
    title: string
    subtitle: string
    sectors: IndustrySpotlight[]
  }
  concierge: {
    title: string
    subtitle: string
    touchpoints: ConciergeTouchpoint[]
  }
  procurement: {
    title: string
    subtitle: string
    artifacts: ProcurementArtifact[]
  }
  enablement: {
    title: string
    subtitle: string
    streams: EnablementStream[]
  }
  integrations: {
    title: string
    subtitle: string
    partners: IntegrationPartner[]
  }
  timeline: {
    title: string
    subtitle: string
    phases: {
      title: string
      duration: string
      description: string
      outcomes: string[]
    }[]
  }
  guarantees: {
    title: string
    subtitle: string
    items: {
      title: string
      description: string
    }[]
  }
  roi: RoiCopy
  faqs: {
    title: string
    items: { question: string; answer: string }[]
  }
  cta: {
    title: string
    body: string
    primary: string
    secondary: string
  }
}

export const servicesPricingCopy: Record<Language, ServicesPricingCopy> = {
  en: {
    hero: {
      eyebrow: 'Services & Pricing',
      heading: 'Choose the squad that protects your brand while shipping growth.',
      body:
        'Every engagement is led by Founder & CEO Artur Ziganshin with a multilingual core team covering reputation recovery, demand generation, and product storytelling. Use the packages below to benchmark investment, then we tailor the scope to your velocity.',
      primaryCta: 'Start a custom scope',
      secondaryCta: 'Download pricing PDF',
      note: 'Average ramp time: 10 business days from kickoff.',
    },
    promise: {
      title: 'What you unlock with Traceremove',
      paragraphs: [
        'We operate as an extension of your leadership team, pairing growth strategists, security engineers, and creative directors who already collaborate across English, French, and Spanish markets.',
        'Every plan combines motion-rich storytelling, performance experimentation, and rapid incident response so your reputation is defended while pipeline keeps scaling.',
      ],
      bullets: [
        'Founder-led diagnostics with direct access to Artur Ziganshin throughout the engagement.',
        'Weekly performance rooms that surface insights, blockers, and next experiments in one animated command center.',
        'Clear measurement frameworks with Looker Studio dashboards, guardrail alerts, and executive-ready recaps.',
      ],
    },
    pillars: {
      title: 'Modular service pillars',
      subtitle: 'Blend the pods you need—each plan includes these building blocks.',
      items: [
        {
          title: 'Brand defense & reputation control',
          description:
            'Monitoring, takedowns, and community management that keep fake reviews, phishing domains, and negative narratives from compounding.',
          bullets: [
            '24/7 threat monitoring across search, marketplaces, social, and messaging apps.',
            'Escalation playbooks with registrar, platform, and legal partner coordination.',
            'Review authentication systems plus proactive community engagement scripts.',
          ],
        },
        {
          title: 'Growth operations & experimentation',
          description:
            'Lifecycle campaigns, conversion experiments, and paid media programs that are instrumented for speed without sacrificing governance.',
          bullets: [
            'Full-funnel diagnostics covering acquisition, retention, and expansion flows.',
            'Experiment backlog prioritisation with motion dashboards and win-loss retros.',
            'Attribution modelling, incrementality testing, and revenue reporting cadences.',
          ],
        },
        {
          title: 'Creative systems & experience design',
          description:
            'Narratives, design systems, and interaction patterns that move across channels while reflecting your brand’s protected positioning.',
          bullets: [
            'Modular storytelling frameworks with localized messaging kits and hero visuals.',
            'Component libraries for landing pages, sales enablement, and product education.',
            'Motion design guidelines plus asset production for launch, social, and PR moments.',
          ],
        },
      ],
    },
    pricing: {
      title: 'Pricing calibrated to momentum',
      subtitle: 'Select a plan as a starting point; we finalize scope after a collaborative diagnostic.',
      tiers: [
        {
          id: 'launch',
          name: 'Launch Safeguard',
          price: '$6,800 / month',
          cadence: '3-month minimum',
          description: 'Rapid response squad to clean risk, relaunch trust signals, and prime growth experiments.',
          highlight: 'Best for teams entering a new market or recovering from reputation shocks.',
          features: [
            'Daily monitoring + takedown execution across three priority channels.',
            'Two motion-enabled campaign launches per month with creative + analytics support.',
            'Weekly performance room with growth, brand, and product stakeholders.',
            'Foundational dashboard suite with sentiment, traffic, and lead indicators.',
            'Crisis hotline with 60-minute response commitment.',
          ],
        },
        {
          id: 'scale',
          name: 'Scale Acceleration',
          price: '$11,500 / month',
          cadence: '6-month partnership',
          description: 'Integrated pod aligning marketing, product, and CX to scale defensible demand.',
          highlight: 'Ideal for Series A-C companies balancing aggressive growth with brand protection.',
          features: [
            'Always-on monitoring + legal coordination across five priority territories.',
            'Four experiment launches per month with CRO, lifecycle, and paid media squads.',
            'Creative system refresh including hero visuals, component library, and playbooks.',
            'Advanced measurement stack with attribution, MMM, and executive scorecards.',
            'Quarterly stakeholder workshop with roadmap realignment and enablement.',
          ],
        },
        {
          id: 'enterprise',
          name: 'Enterprise Guardian',
          price: '$18,500 / month',
          cadence: '12-month transformation',
          description: 'Multi-market transformation team embedding governance, experimentation, and executive reporting.',
          highlight: 'Designed for global brands with complex risk, compliance, and revenue targets.',
          features: [
            'Global monitoring fabric across 12+ channels with automated intervention triggers.',
            'Dedicated creative newsroom producing weekly assets with localization + motion.',
            'Full RevOps alignment covering sales enablement, partner activation, and CS plays.',
            'Scenario planning, crisis simulation, and board-ready communications support.',
            'Embedded analysts modelling revenue impact and forecasting pipeline resilience.',
          ],
        },
      ],
      note: 'Need a shorter engagement or in-house enablement? We scope project intensives starting at $12,000.',
    },
    comparison: {
      title: 'Why teams switch to Traceremove',
      subtitle: 'A quick snapshot of how our operator-led pod differs from traditional agencies.',
      criteriaLabel: 'Decision lens',
      columns: {
        traceremove: 'Traceremove operator pod',
        traditional: 'Traditional agency model',
      },
      rows: [
        {
          label: 'Leadership access',
          traceremove:
            'Founder & CEO Artur Ziganshin drives every diagnostic, playbook review, and crisis huddle with the core team.',
          traditional:
            'Layers of account managers filter insights before they reach senior operators, slowing decisions.',
        },
        {
          label: 'Speed to intervention',
          traceremove:
            '60-minute hotline backed by multilingual analysts and legal partners who can neutralize threats around the clock.',
          traditional:
            'Ticket queues and timezone gaps delay takedowns and leave fake reviews or spoofed domains active for days.',
        },
        {
          label: 'Measurement & motion',
          traceremove:
            'Unified dashboards with growth, brand safety, and revenue metrics plus motion design recaps for stakeholders.',
          traditional:
            'Fragmented spreadsheets with monthly reporting that fails to capture live sentiment or opportunity swings.',
        },
        {
          label: 'Language coverage',
          traceremove: 'English, French, and Spanish specialists embedded in every pod to mirror your markets.',
          traditional: 'External translators bolt on after the fact, diluting nuance and delaying launch.',
        },
      ],
    },
    addOns: {
      title: 'Add-on accelerators',
      subtitle: 'Layer specialist tracks on top of your base plan whenever you need extra lift.',
      items: [
        {
          name: 'Crisis simulation lab',
          price: '$4,200',
          description: 'Tabletop exercise that stress-tests your brand protection rituals with live scoring.',
          benefits: [
            'Custom attack scenarios mapped to your industry and tech stack.',
            'Cross-functional response drills with debrief and updated playbooks.',
            'Executive summary with prioritized remediation roadmap.',
          ],
        },
        {
          name: 'Paid media firewall',
          price: '$3,600',
          description: 'Detection and mitigation of impersonator ads stealing branded demand.',
          benefits: [
            '24-hour sweeps across Google, Meta, TikTok, and programmatic exchanges.',
            'Complaint filing and budget reallocation workflows managed by our team.',
            'Creative refresh focused on trust, proof, and safety messaging.',
          ],
        },
        {
          name: 'Executive visibility studio',
          price: '$2,900',
          description: 'Thought-leadership engine pairing narrative design with distribution ops.',
          benefits: [
            'Monthly ghostwritten articles and LinkedIn motions with localized variations.',
            'Speaker bureau outreach plus media training sessions.',
            'Performance dashboard showing reach, sentiment, and sourced pipeline.',
          ],
        },
      ],
    },
    deliverables: {
      title: 'What ships each quarter',
      subtitle: 'Every scope is mapped to tangible, reviewable artefacts so you always see progress.',
      items: [
        {
          title: 'Threat intelligence board',
          description: 'Live risk register, takedown history, and decision log maintained in shared workspaces.',
          cadence: 'Updated daily',
        },
        {
          title: 'Growth experiment releases',
          description: 'New landing pages, nurture flows, paid assets, and motion graphics ready for launch.',
          cadence: '2-6 drops per month',
        },
        {
          title: 'Executive narrative kit',
          description: 'Narrative memos, leadership talking points, and social scripts localized per market.',
          cadence: 'Monthly package',
        },
        {
          title: 'Revenue & sentiment pulse',
          description: 'KPI dashboard with commentary, forecast adjustments, and recommended next bets.',
          cadence: 'Bi-weekly',
        },
      ],
    },
    workflow: {
      title: 'How our programs run',
      subtitle: 'From kickoff to recurring rituals, every phase is orchestrated with transparency.',
      steps: [
        {
          title: 'Immersion & risk sweep',
          duration: 'Week 1',
          description: 'Stakeholder interviews, data access, and threat inventory to map the current state.',
          outputs: [
            'Reputation & growth diagnostic with prioritized risks.',
            'Access checklist + instrumentation readiness score.',
          ],
        },
        {
          title: 'Momentum blueprint',
          duration: 'Weeks 2-3',
          description: 'Experience mapping, hypothesis design, and pricing validation with your leadership.',
          outputs: [
            '90-day roadmap with experiments, safeguards, and owners.',
            'Measurement framework plus executive communications plan.',
          ],
        },
        {
          title: 'Activation sprints',
          duration: 'Weeks 4-12',
          description: 'Cross-functional pods launch campaigns, harden reputation layers, and automate reporting.',
          outputs: [
            'Weekly releases across creative, lifecycle, and product surfaces.',
            'Looker Studio dashboard suite with live commentary.',
          ],
        },
        {
          title: 'Scale & enablement',
          duration: 'Ongoing',
          description: 'We embed rituals, train your team, and evolve the roadmap based on signal loops.',
          outputs: [
            'Playbooks, templates, and recorded training sessions.',
            'Quarterly business reviews with executive scorecards.',
          ],
        },
      ],
    },
    assurance: {
      title: 'Evidence & guarantees',
      subtitle: 'We operate with radical transparency so you see impact in motion.',
      metrics: [
        { label: 'Average review recovery window', value: '14 hours' },
        { label: 'Net-new pipeline influenced', value: '+38% YoY' },
        { label: 'Markets activated per engagement', value: '3 languages' },
      ],
      testimonials: [
        {
          quote:
            'Traceremove cleaned 1,200 fake listings in under two weeks while launching new revenue campaigns that beat our control by 27%.',
          author: 'Camille Roy',
          role: 'VP Growth, Fintech scale-up',
        },
        {
          quote:
            'The team orchestrated legal, product, and marketing stakeholders across three countries without slowing delivery—our board now sees weekly progress pulses.',
          author: 'Luis Méndez',
          role: 'Chief Communications Officer, Global retail brand',
        },
      ],
    },
    compliance: {
      title: 'Regulatory compliance ready on day one',
      subtitle:
        'Every engagement ships with documentation, evidence, and bilingual counsel alignment so procurement can accelerate approvals.',
      frameworks: [
        {
          id: 'iso27001',
          name: 'ISO 27001 Response Map',
          framework: 'ISO 27001 Annex A',
          coverage:
            'Control narratives linking monitoring, takedown workflows, and brand recovery procedures to Annex A domains.',
          renewal: 'Refreshed every 90 days with change logs and risk reviews.',
          evidence: 'Includes risk register excerpts, playbook library, and corrective action tracker.',
        },
        {
          id: 'soc2',
          name: 'SOC 2 Action Workbook',
          framework: 'SOC 2 Type II',
          coverage:
            'Trust services mapping that proves security, availability, and confidentiality controls across marketing and product stacks.',
          renewal: 'Updated alongside quarterly control testing and auditor coordination.',
          evidence: 'Provides control matrix, monitoring dashboards, and incident drill reports.',
        },
        {
          id: 'gdpr',
          name: 'GDPR + LGPD Readiness Pack',
          framework: 'GDPR / LGPD',
          coverage:
            'Data processing inventory, lawful basis documentation, and multilingual consent journeys for EU and LATAM markets.',
          renewal: 'Reviewed biannually with privacy counsel and DPO partners.',
          evidence: 'Delivers DPIA templates, vendor assessment logs, and breach notification scripts.',
        },
      ],
      badges: [
        {
          label: 'Signed DPAs in 48h',
          description:
            'Pre-approved templates with EU/US clauses, bilingual counsel notes, and tracked signature workflows.',
        },
        {
          label: 'Audit trails on demand',
          description:
            'Motion dashboards archive takedowns, review disputes, and communication threads for regulator-ready exports.',
        },
        {
          label: 'Security questionnaire vault',
          description:
            'Library of 400+ infosec answers covering cloud, marketing, and data residency controls with localized context.',
        },
      ],
    },
    support: {
      title: 'Support that never powers down',
      subtitle: 'Direct access to the humans doing the work, not a generic help desk.',
      channels: [
        {
          name: 'Critical escalation hotline',
          availability: '24/7 · English / Français / Español',
          description: 'Immediate access to Artur Ziganshin and the response unit for domain spoofing, data leaks, or viral crises.',
        },
        {
          name: 'Traceremove Command Center',
          availability: 'Weekdays 8:00–22:00 local',
          description: 'Shared Notion + Slack hub with experiment boards, takedown trackers, and annotated motion updates.',
        },
        {
          name: 'Executive office hours',
          availability: 'Weekly 45-minute session',
          description: 'Leadership-only forum to review momentum, unblock approvals, and align global stakeholders.',
        },
      ],
    },
    industries: {
      title: 'Industry playbooks we run every week',
      subtitle: 'Pick a package and we tailor the rituals to your sector’s pressure points.',
      sectors: [
        {
          id: 'saas',
          name: 'SaaS scaleups',
          challenge: 'Fake review networks spiking churn across English and Spanish app stores.',
          approach: 'Bilingual takedown desk combines legal scripts with lifecycle win-back streams inside 14 days.',
          metric: '38% reduction in fraudulent listings within the first month.',
          proof: 'SaaS marketplace retained $4.2M ARR after coordinated sweep.',
        },
        {
          id: 'hospitality',
          name: 'Luxury hospitality groups',
          challenge: 'Viral rumor cycles suppressing direct bookings across EMEA and the Americas.',
          approach: 'On-site reputation SWAT pairs UGC activations with concierge enablement in English, French, and Spanish.',
          metric: '+22% direct bookings restored within eight weeks.',
          proof: 'Paris & Barcelona flagships regained share post influencer partnerships.',
        },
        {
          id: 'fintech',
          name: 'Fintech disruptors',
          challenge: 'Regulatory scrutiny and spoofed domains eroding trust in LATAM.',
          approach: 'Domain recovery pods sync with compliance counsel and investor comms to align every release.',
          metric: 'Zero spoofed domains live after 30 days.',
          proof: 'Series D wallet reopened waitlist with regulator-backed messaging.',
        },
        {
          id: 'healthcare',
          name: 'Healthcare networks',
          challenge: 'Physician impersonation scams driving patient complaints and staff burnout.',
          approach: 'Signal monitoring fuses with patient communications, clinic training, and escalation scripts.',
          metric: '40% drop in complaint escalations quarter over quarter.',
          proof: 'National telehealth brand restored CMS quality ratings and patient trust.',
        },
      ],
    },
    concierge: {
      title: 'White-glove concierge at every tier',
      subtitle: 'Founder-led guidance with proactive rituals so you never chase us for updates.',
      touchpoints: [
        {
          title: 'Signal war room',
          description: 'Shared Slack and WhatsApp command center staffed by multilingual strategists and analysts.',
          availability: '24/7 monitoring with <30 minute response on priority alerts.',
          channel: 'Slack · WhatsApp',
        },
        {
          title: 'Founder escalation lane',
          description: 'Direct access to Artur Ziganshin for board reviews, sensitive negotiations, or press briefings.',
          availability: 'Immediate callbacks for critical items, daily sync during active incidents.',
          channel: 'Secure phone · Signal',
        },
        {
          title: 'Insight huddles',
          description: 'Weekly instrumentation review with recommendations, blockers, and upcoming experiments.',
          availability: 'Standing 60-minute session aligned to your core time zone.',
          channel: 'Zoom · Live dashboards',
        },
      ],
    },
    procurement: {
      title: 'Procurement-ready documentation from day one',
      subtitle:
        'Accelerate security, legal, and finance reviews with transparent artefacts that answer every due diligence checklist.',
      artifacts: [
        {
          title: 'Security & compliance dossier',
          description:
            'Control inventory covering encryption, access, incident response, and data residency with linked policies and audit evidence.',
          format: 'PDF bundle',
          availability: 'Refreshed quarterly or after any material change.',
        },
        {
          title: 'Risk & liability alignment matrix',
          description:
            'Maps deliverables, data flows, and responsibilities against your procurement requirements and contractual guardrails.',
          format: 'Interactive spreadsheet',
          availability: 'Delivered during scoping, updated collaboratively as scope evolves.',
        },
        {
          title: 'Investment justification kit',
          description:
            'Executive briefing outlining pricing, ROI assumptions, billing terms, and escalation clauses for CFO sign-off.',
          format: 'Executive deck',
          availability: 'Available at proposal stage with scenario refresh on request.',
        },
        {
          title: 'Stakeholder onboarding playbook',
          description:
            'Step-by-step orientation with kickoff agenda, RACI, communication cadences, and multilingual escalation tree.',
          format: 'Notion workspace',
          availability: 'Shared pre-kickoff and maintained in real time.',
        },
      ],
    },
    enablement: {
      title: 'Enablement accelerators that embed with your operators',
      subtitle:
        'Each plan unlocks immersive working sessions so your team absorbs the rituals, tooling, and storytelling required to sustain momentum.',
      streams: [
        {
          title: 'Executive war room',
          rhythm: 'Weekly 45-minute command center',
          description:
            'Founder-led review aligning incidents, growth experiments, and resourcing decisions inside one animated dashboard environment.',
          assets: [
            'Escalation and growth scoreboard tailored to your leadership metrics.',
            'Decision log with action owners, due dates, and multilingual communications templates.',
            'Board and investor narrative prompts refreshed after every session.',
          ],
        },
        {
          title: 'Revenue recovery lab',
          rhythm: 'Bi-weekly experimentation sprint',
          description:
            'Operators and analysts pair to rebuild funnels, recalibrate paid mix, and recapture lost demand within 14 days.',
          assets: [
            'Channel playbooks with localized creative, targeting, and measurement checkpoints.',
            'GrowthSpark dashboards visualizing lift, retention, and pipeline velocity in real time.',
            'QA checklist covering landing experiences, CRM automation, and attribution handoffs.',
          ],
        },
        {
          title: 'Brand trust studio',
          rhythm: 'Monthly immersive production',
          description:
            'Creative directors, strategists, and motion designers co-create signature stories and assets that reinforce trust signals.',
          assets: [
            'Hero narrative frameworks with social, PR, and product storyline variants.',
            'Motion design kit with editable files, animation presets, and usage guides for your team.',
            'Proactive review and community response scripts tuned for each supported locale.',
          ],
        },
      ],
    },
    integrations: {
      title: 'Connect your stack without slowing down',
      subtitle:
        'We plug into your analytics, marketing, security, and support systems on day one so insights and escalations stay in sync.',
      partners: [
        {
          name: 'Looker Studio & BigQuery',
          category: 'Analytics & dashboards',
          description:
            'Stream sentiment, demand, and incident telemetry into motion-rich Looker Studio boards powered by BigQuery models that your leadership already trusts.',
          coverage: 'Live within 5 business days with two years of historical context imported.',
        },
        {
          name: 'HubSpot & Salesforce',
          category: 'Revenue platforms',
          description:
            'Sync lead scoring, pipeline velocity, and escalation ownership inside your CRM so recovered demand converts without manual reconciliation.',
          coverage: 'Bi-directional automation shipped during week one with governance reviews.',
        },
        {
          name: 'Cloudflare · AWS WAF · Registrar network',
          category: 'Domain & security',
          description:
            'Pair our takedown desk with your edge protection to automatically neutralize spoofed domains, phishing journeys, and shadow infrastructure.',
          coverage: 'Escalation circuits activated in under 48 hours across priority markets.',
        },
        {
          name: 'Trustpilot · Google Business Profile',
          category: 'Review ecosystems',
          description:
            'Authenticate reviews, dispute fraud, and publish proof points directly from the platforms where prospects validate your reputation.',
          coverage: 'Content policies aligned in English, French, and Spanish with daily monitoring.',
        },
        {
          name: 'Zendesk · Intercom · Gorgias',
          category: 'Customer care',
          description:
            'Loop CS and reputation squads together so escalations, macros, and proactive outreach live inside the tools your agents use every hour.',
          coverage: 'Playbooks and automations deployed within 10 days including localization.',
        },
        {
          name: 'Slack & Microsoft Teams',
          category: 'Collaboration rituals',
          description:
            'Route alerts, wins, and executive-ready recaps straight into the channels your operators already monitor so momentum never bottlenecks.',
          coverage: 'War-room channels configured on kickoff with layered access controls.',
        },
      ],
    },
    timeline: {
      title: 'How momentum compounds over 90 days',
      subtitle: 'Every engagement follows a battle-tested rhythm with transparent milestones and measurable outputs.',
      phases: [
        {
          title: 'Stabilize the signal',
          duration: 'Days 1-10',
          description:
            'We neutralize active threats, secure accounts, and re-establish trusted surfaces before we relaunch growth.',
          outcomes: [
            'Threat inventory with severity scoring and assigned owners.',
            'Domain, listing, and review recovery actions in-flight within 48 hours.',
            'Updated crisis communications matrix across languages.',
          ],
        },
        {
          title: 'Rebuild trust narratives',
          duration: 'Weeks 2-5',
          description:
            'Motion-enabled storytelling, social proof, and enablement assets go live while experimentation pods accelerate.',
          outcomes: [
            'New hero, landing, and lifecycle experiences localized for priority markets.',
            'Automated sentiment reporting with live dashboards and alerting.',
            'Playbooks for review authentication and community response cadence.',
          ],
        },
        {
          title: 'Scale defensible growth',
          duration: 'Weeks 6-12',
          description:
            'We compound the wins—expanding campaigns, refining pricing, and transferring rituals so your team sustains velocity.',
          outcomes: [
            'Experiment pipeline with clear ROI modeling and approval tracks.',
            'Quarterly executive narrative kit plus board-ready performance recap.',
            'Training, documentation, and tool access transitioned to internal leads.',
          ],
        },
      ],
    },
    guarantees: {
      title: 'Commitments we stand behind',
      subtitle: 'Founder-led accountability with safeguards that keep your leadership confident.',
      items: [
        {
          title: 'Founder on-call guarantee',
          description:
            'Artur Ziganshin joins every critical escalation and weekly performance room—no handoffs to junior account layers.',
        },
        {
          title: '30-day momentum checkpoint',
          description:
            'If we miss the agreed milestone outcomes in month one, we extend the engagement at no additional cost until recovered.',
        },
        {
          title: 'Source-of-truth transparency',
          description:
            'Real-time dashboards, budget tracking, and experimentation notes stay client-owned so you maintain control long-term.',
        },
      ],
    },
    roi: {
      title: 'Model your brand protection ROI',
      subtitle: 'Adjust the inputs to see how quickly proactive recovery safeguards revenue.',
      inputs: {
        incidents: {
          label: 'Monthly critical incidents',
          help: 'Fake reviews, phishing domains, urgent takedowns we resolve for your team.',
          suffix: '/mo',
          min: 0,
          max: 120,
          step: 1,
          defaultValue: 12,
        },
        retention: {
          label: 'Demand rescued per incident',
          help: 'Percent of at-risk buyers we recover once Traceremove intercepts the threat.',
          suffix: '%',
          min: 10,
          max: 100,
          step: 5,
          defaultValue: 65,
        },
        customerValue: {
          label: 'Average revenue per customer',
          help: 'Blend of first purchase, retention, and expansion per saved account.',
          prefix: '$',
          min: 100,
          max: 20000,
          step: 100,
          defaultValue: 850,
        },
      },
      assumption:
        'Projection assumes protected demand compounds for 12 months with Traceremove as lead partner.',
      result: {
        headline: 'Projected annual revenue safeguarded',
        label: 'Annual impact',
        monthlyLabel: 'Monthly revenue protected',
        customersLabel: 'Customers retained each month',
        summary:
          'Traceremove keeps {{value}} from leaking each year by neutralising threats before they erode trust.',
      },
      scenarios: [
        {
          title: 'Marketplace sabotage',
          loss: 'Up to $180K in listings lost when fake sellers flood your catalog.',
          improvement: 'Traceremove restores verified experiences in under 48 hours.',
          description:
            'Our takedown desk coordinates with marketplaces, payment providers, and customers to reestablish trust.',
          bullets: [
            'Rapid seller verification sweeps across Amazon, Etsy, and niche marketplaces.',
            'Customer messaging sequences that recover stalled checkouts and reviews.',
            'Escalation to marketplace trust & safety teams with evidence packs.',
          ],
        },
        {
          title: 'Review fraud crisis',
          loss: 'Teams lose $95K in pipeline each month when fake 1-star waves go unanswered.',
          improvement: 'Traceremove authenticates reviews and amplifies verified social proof within hours.',
          description:
            'We blend investigations, legal outreach, and growth programs so confidence rebounds across every touchpoint.',
          bullets: [
            'Machine-assisted pattern detection across G2, Capterra, and app stores.',
            'Outreach workflows that convert silent champions into high-intent testimonials.',
            'Motion content kits that relaunch search, paid, and lifecycle trust signals.',
          ],
        },
        {
          title: 'Executive impersonation',
          loss: 'Spoofed domains and emails bleed $60K+ per breach in refunds and churn.',
          improvement: 'Traceremove blocks phishing infrastructure and restores comms clarity the same day.',
          description:
            'Security engineers and storytellers combine takedowns with leadership communication drills to steady the market.',
          bullets: [
            'Domain and inbox sweeps with registrar escalations and DMARC hardening.',
            'Prepared statements and newsroom assets for investors, partners, and press.',
            'Follow-the-funnel dashboards showing regained revenue and retention.',
          ],
        },
      ],
    },
    faqs: {
      title: 'Services & pricing FAQs',
      items: [
        {
          question: 'Can we start with a project instead of a retainer?',
          answer:
            'Yes. We scope 6- to 8-week intensives focused on remediation or go-to-market acceleration starting at $12,000. Most teams then roll into a retainer once momentum is proven.',
        },
        {
          question: 'How do you collaborate with internal teams?',
          answer:
            'We embed inside your existing tools (Slack, Notion, Jira, HubSpot, etc.) and run weekly ceremonies that include your marketing, product, and CX leads. Every deliverable ships with documentation for easy handoff.',
        },
        {
          question: 'Do you work with regulated industries?',
          answer:
            'Absolutely. We handle compliance reviews, security requirements, and legal approvals for finance, healthcare, public sector, and marketplace organizations across three languages.',
        },
      ],
    },
    cta: {
      title: 'Ready to protect and grow with one squad?',
      body:
        'Share your goals and current pressure points. We will return within 24 hours with a tailored agenda and the specialists we recommend embedding with your team.',
      primary: 'Book a strategy call',
      secondary: 'Email Artur directly',
    },
  },
  fr: {
    hero: {
      eyebrow: 'Services & Tarifs',
      heading: 'Choisissez le squad qui protège votre marque tout en accélérant la croissance.',
      body:
        'Chaque mission est dirigée par le Fondateur & CEO Artur Ziganshin avec une équipe centrale multilingue couvrant réputation, génération de demande et storytelling produit. Utilisez les offres ci-dessous pour cadrer l’investissement, puis nous ajustons le périmètre à votre rythme.',
      primaryCta: 'Construire un devis sur mesure',
      secondaryCta: 'Télécharger la grille tarifaire',
      note: 'Temps moyen de déploiement : 10 jours ouvrés après le kick-off.',
    },
    promise: {
      title: 'Ce que vous débloquez avec Traceremove',
      paragraphs: [
        'Nous opérons comme le prolongement de votre comité de direction en alignant stratèges growth, ingénieurs sécurité et directeurs créatifs déjà rodés aux marchés francophone, anglophone et hispanophone.',
        'Chaque offre combine storytelling animé, expérimentation performance et réponse incident rapide afin que votre réputation soit protégée pendant que le pipeline s’amplifie.',
      ],
      bullets: [
        'Diagnostic piloté par le fondateur avec accès direct à Artur Ziganshin pendant toute la mission.',
        'Rooms hebdomadaires où insights, blocages et prochaines expérimentations sont synchronisés dans un centre de commande animé.',
        'Cadres de mesure clairs avec dashboards Looker Studio, alertes de garde-fous et synthèses exécutives.',
      ],
    },
    pillars: {
      title: 'Piliers de service modulaires',
      subtitle: 'Assemblez les pods nécessaires — chaque plan inclut ces briques.',
      items: [
        {
          title: 'Défense de marque & contrôle de réputation',
          description:
            'Veille, retraits et community management pour éviter que faux avis, domaines frauduleux et narratifs négatifs ne s’amplifient.',
          bullets: [
            'Surveillance 24/7 sur moteurs, marketplaces, réseaux sociaux et messageries.',
            'Playbooks d’escalade avec coordination registraires, plateformes et partenaires juridiques.',
            'Systèmes d’authentification des avis et scripts d’engagement communautaire proactif.',
          ],
        },
        {
          title: 'Operations growth & expérimentation',
          description:
            'Campagnes lifecycle, tests de conversion et programmes media instrumentés pour la vitesse sans sacrifier la gouvernance.',
          bullets: [
            'Diagnostic full funnel couvrant acquisition, rétention et expansion.',
            'Priorisation du backlog d’expériences avec dashboards animés et retros wins/losses.',
            'Modélisation d’attribution, tests d’incrémentalité et cadences de reporting revenu.',
          ],
        },
        {
          title: 'Systèmes créatifs & design d’expérience',
          description:
            'Narrations, design systems et interactions cohérentes sur les canaux en respectant votre positionnement protégé.',
          bullets: [
            'Cadres narratifs modulaires avec kits de messages localisés et visuels hero.',
            'Bibliothèques de composants pour landing pages, enablement commercial et éducation produit.',
            'Guidelines motion design et production d’assets pour lancement, social et RP.',
          ],
        },
      ],
    },
    pricing: {
      title: 'Tarifs calibrés sur le momentum',
      subtitle: 'Choisissez une offre de base ; nous finalisons le périmètre après un diagnostic collaboratif.',
      tiers: [
        {
          id: 'launch',
          name: 'Pack Lancement sécurisé',
          price: '6 800 $ / mois',
          cadence: 'Engagement minimum de 3 mois',
          description:
            'Squad de réponse rapide pour assainir les risques, relancer les signaux de confiance et préparer les expérimentations growth.',
          highlight:
            'Parfait pour les équipes qui entrent sur un nouveau marché ou sortent d’une crise de réputation.',
          features: [
            'Monitoring quotidien + exécution des retraits sur trois canaux prioritaires.',
            'Deux lancements de campagne animés par mois avec support créatif et analytics.',
            'Room performance hebdomadaire avec parties prenantes growth, marque et produit.',
            'Suite de dashboards fondamentaux : sentiment, trafic et indicateurs leads.',
            'Hotline crise avec engagement de réponse en 60 minutes.',
          ],
        },
        {
          id: 'scale',
          name: 'Pack Accélération scale',
          price: '11 500 $ / mois',
          cadence: 'Partenariat de 6 mois',
          description:
            'Pod intégré alignant marketing, produit et CX pour scaler une demande défendable.',
          highlight:
            'Idéal pour les entreprises Series A-C qui équilibrent croissance agressive et protection de marque.',
          features: [
            'Monitoring continu + coordination juridique sur cinq territoires prioritaires.',
            'Quatre expérimentations mensuelles avec squads CRO, lifecycle et paid media.',
            'Refonte du système créatif : visuels hero, librairie de composants et playbooks.',
            'Stack de mesure avancée avec attribution, MMM et scorecards exécutives.',
            'Atelier trimestriel avec réalignement roadmap et enablement équipes.',
          ],
        },
        {
          id: 'enterprise',
          name: 'Pack Guardian entreprise',
          price: '18 500 $ / mois',
          cadence: 'Transformation sur 12 mois',
          description:
            'Équipe transformation multi-marchés qui embarque gouvernance, expérimentation et reporting exécutif.',
          highlight:
            'Pensé pour les marques globales avec enjeux complexes de risque, conformité et revenu.',
          features: [
            'Tissu de monitoring mondial sur 12+ canaux avec déclencheurs d’intervention automatisés.',
            'Newsroom créative dédiée produisant des assets hebdomadaires localisés & motion.',
            'Alignement RevOps complet : enablement sales, activation partenaires, plans CS.',
            'Planification de scénarios, simulations de crise et support communication board.',
            'Analystes embarqués modélisant l’impact revenu et la résilience pipeline.',
          ],
        },
      ],
      note:
        'Besoin d’un sprint court ou d’enablement interne ? Nous concevons des intensifs à partir de 12 000 $.',
    },
    comparison: {
      title: 'Pourquoi les équipes passent chez Traceremove',
      subtitle: 'Un aperçu de ce qui différencie notre escouade opérateurs d’une agence traditionnelle.',
      criteriaLabel: 'Angle de décision',
      columns: {
        traceremove: 'Pod opérateurs Traceremove',
        traditional: 'Modèle agence traditionnel',
      },
      rows: [
        {
          label: 'Accès à la direction',
          traceremove:
            'Le fondateur & CEO Artur Ziganshin anime chaque diagnostic, revue de playbook et cellule de crise avec l’équipe cœur.',
          traditional:
            'Des couches de chefs de projet filtrent l’information avant qu’elle n’atteigne les décideurs, ce qui ralentit tout.',
        },
        {
          label: 'Vitesse d’intervention',
          traceremove:
            'Hotline 60 minutes appuyée par des analystes multilingues et des partenaires juridiques mobilisables à toute heure.',
          traditional:
            'Files d’attente et décalages horaires retardent les retraits et laissent des faux avis ou domaines frauduleux actifs plusieurs jours.',
        },
        {
          label: 'Mesure & motion design',
          traceremove:
            'Dashboards unifiés growth, brand safety et revenu avec comptes rendus animés pour les parties prenantes.',
          traditional:
            'Tableurs fragmentés et reporting mensuel qui ne capte ni le sentiment temps réel ni les opportunités.',
        },
        {
          label: 'Couverture linguistique',
          traceremove: 'Spécialistes anglais, français et espagnol intégrés à chaque pod pour refléter vos marchés.',
          traditional: 'Traductions externalisées a posteriori, sans nuance et avec des retards de mise en ligne.',
        },
      ],
    },
    addOns: {
      title: 'Accélérateurs additionnels',
      subtitle: 'Ajoutez des tracks spécialisés à votre plan de base lorsque vous avez besoin d’un boost.',
      items: [
        {
          name: 'Laboratoire de simulation de crise',
          price: '4 200 $',
          description:
            'Exercice tabletop qui éprouve vos rituels de protection de marque avec scoring live.',
          benefits: [
            'Scénarios d’attaque sur mesure adaptés à votre industrie et stack tech.',
            'Drills cross-fonctionnels avec debrief et playbooks mis à jour.',
            'Synthèse exécutive avec feuille de route de remédiation priorisée.',
          ],
        },
        {
          name: 'Pare-feu paid media',
          price: '3 600 $',
          description:
            'Détection et mitigation des publicités usurpées qui captent votre demande.',
          benefits: [
            'Sweeps 24h sur Google, Meta, TikTok et régies programmatiques.',
            'Gestion des plaintes et réallocation budgétaire pilotée par notre équipe.',
            'Refresh créatif axé sur preuves, confiance et messages sécurité.',
          ],
        },
        {
          name: 'Studio visibilité dirigeants',
          price: '2 900 $',
          description:
            'Moteur de thought leadership combinant design narratif et opérations de diffusion.',
          benefits: [
            'Articles ghostwrités mensuels et motions LinkedIn avec variations locales.',
            'Prospection speakers + sessions de media training.',
            'Dashboard performance couvrant reach, sentiment et pipeline généré.',
          ],
        },
      ],
    },
    deliverables: {
      title: 'Livrables par trimestre',
      subtitle: 'Chaque périmètre est relié à des artefacts concrets et vérifiables pour matérialiser l’avancement.',
      items: [
        {
          title: 'Tableau de bord de veille',
          description: 'Registre des risques, historique des retraits et journal de décision partagé en continu.',
          cadence: 'Mise à jour quotidienne',
        },
        {
          title: 'Lancements d’expériences growth',
          description: 'Landing pages, séquences nurture, assets paid et animations motion prêts à activer.',
          cadence: '2 à 6 déploiements par mois',
        },
        {
          title: 'Kit narratif exécutif',
          description: 'Memos narratifs, éléments de langage dirigeants et scripts sociaux localisés par marché.',
          cadence: 'Package mensuel',
        },
        {
          title: 'Pulse revenu & sentiment',
          description: 'Dashboard KPI avec commentaires, ajustements de forecast et prochaines actions recommandées.',
          cadence: 'Bi-mensuel',
        },
      ],
    },
    workflow: {
      title: 'Comment se déroulent nos programmes',
      subtitle: 'Du kick-off aux rituels récurrents, chaque phase est orchestrée avec transparence.',
      steps: [
        {
          title: 'Immersion & sweep des risques',
          duration: 'Semaine 1',
          description:
            'Interviews parties prenantes, accès data et inventaire des menaces pour cartographier l’état actuel.',
          outputs: [
            'Diagnostic réputation & growth avec risques priorisés.',
            'Checklist d’accès + score de préparation instrumentation.',
          ],
        },
        {
          title: 'Blueprint momentum',
          duration: 'Semaines 2-3',
          description:
            'Mapping d’expérience, design d’hypothèses et validation pricing avec vos dirigeants.',
          outputs: [
            'Roadmap 90 jours : expériences, garde-fous et owners.',
            'Cadre de mesure + plan de communication exécutive.',
          ],
        },
        {
          title: 'Sprints d’activation',
          duration: 'Semaines 4-12',
          description:
            'Pods cross-fonctionnels lancent campagnes, renforcent la réputation et automatisent le reporting.',
          outputs: [
            'Releases hebdomadaires sur créa, lifecycle et surfaces produit.',
            'Suite Looker Studio avec commentaires live.',
          ],
        },
        {
          title: 'Scale & enablement',
          duration: 'En continu',
          description:
            'Nous ancrons les rituels, formons vos équipes et faisons évoluer la roadmap selon les signaux.',
          outputs: [
            'Playbooks, templates et sessions de formation enregistrées.',
            'Business reviews trimestrielles avec scorecards exécutives.',
          ],
        },
      ],
    },
    assurance: {
      title: 'Preuves & garanties',
      subtitle: 'Transparence radicale pour visualiser l’impact en direct.',
      metrics: [
        { label: 'Délai moyen de récupération d’avis', value: '14 heures' },
        { label: 'Pipeline net nouveau influencé', value: '+38 % vs N-1' },
        { label: 'Marchés activés par mission', value: '3 langues' },
      ],
      testimonials: [
        {
          quote:
            'Traceremove a supprimé 1 200 faux listings en moins de deux semaines tout en lançant des campagnes qui ont battu notre contrôle de 27 %.',
          author: 'Camille Roy',
          role: 'VP Growth, scale-up fintech',
        },
        {
          quote:
            'L’équipe a orchestré juridique, produit et marketing sur trois pays sans ralentir la livraison — notre board reçoit désormais des pulses hebdomadaires.',
          author: 'Luis Méndez',
          role: 'Directeur communication, marque retail globale',
        },
      ],
    },
    compliance: {
      title: 'Conformité prête dès le jour un',
      subtitle:
        'Chaque mission arrive avec la documentation, les preuves et l’alignement juridique bilingue nécessaires pour accélérer vos comités achats.',
      frameworks: [
        {
          id: 'iso27001',
          name: 'Cartographie ISO 27001',
          framework: 'ISO 27001 Annexe A',
          coverage:
            'Narratifs de contrôle reliant veille, procédures de retrait et plans de reprise de réputation aux domaines de l’Annexe A.',
          renewal: 'Actualisé tous les 90 jours avec journaux de changements et revues des risques.',
          evidence: 'Inclut extraits du registre des risques, bibliothèque de playbooks et suivi des actions correctives.',
        },
        {
          id: 'soc2',
          name: 'Workbook SOC 2',
          framework: 'SOC 2 Type II',
          coverage:
            'Mapping des critères de sécurité, disponibilité et confidentialité couvrant marketing et produit.',
          renewal: 'Mis à jour lors des tests de contrôle trimestriels et de la coordination avec l’auditeur.',
          evidence: 'Fournit matrice de contrôle, tableaux de bord de monitoring et rapports de simulations d’incident.',
        },
        {
          id: 'gdpr',
          name: 'Pack RGPD + LGPD',
          framework: 'RGPD / LGPD',
          coverage:
            'Inventaire des traitements, bases légales et parcours de consentement multilingues pour l’Europe et l’Amérique latine.',
          renewal: 'Revu deux fois par an avec les conseils privacy et les DPO partenaires.',
          evidence: 'Livré avec modèles d’AIPD, registres d’évaluation fournisseurs et scripts de notification d’incident.',
        },
      ],
      badges: [
        {
          label: 'DPA signés en 48 h',
          description:
            'Modèles pré-approuvés avec clauses UE/US, annotations juridiques bilingues et suivi des signatures.',
        },
        {
          label: 'Traçabilité prête pour l’audit',
          description:
            'Tableaux de bord animés archivant retraits, contestations d’avis et échanges pour export immédiat aux régulateurs.',
        },
        {
          label: 'Base de questionnaires sécurité',
          description:
            'Bibliothèque de plus de 400 réponses infosec couvrant cloud, marketing et résidence des données avec contexte localisé.',
        },
      ],
    },
    support: {
      title: 'Un support qui ne dort jamais',
      subtitle: 'Accès direct aux opérateurs, jamais à un help desk générique.',
      channels: [
        {
          name: 'Hotline d’escalade critique',
          availability: '24/7 · Français / English / Español',
          description: 'Accès immédiat à Artur Ziganshin et à l’unité de réponse pour usurpation de domaine, fuite de données ou crise virale.',
        },
        {
          name: 'Command Center Traceremove',
          availability: 'Du lundi au vendredi · 8h00–22h00',
          description: 'Hub Notion + Slack partagé avec boards d’expériences, suivis de retraits et updates animés.',
        },
        {
          name: 'Office hours exécutifs',
          availability: 'Session hebdomadaire de 45 minutes',
          description: 'Espace dirigeants pour aligner le momentum, lever les blocages et coordonner les parties prenantes globales.',
        },
      ],
    },
    industries: {
      title: 'Playbooks sectoriels activés chaque semaine',
      subtitle: 'Chaque forfait se module selon les pressions propres à votre industrie et à vos marchés.',
      sectors: [
        {
          id: 'saas',
          name: 'Scale-ups SaaS',
          challenge: 'Réseaux de faux avis qui augmentent le churn sur les stores anglophones et hispanophones.',
          approach: 'Cellule de retrait bilingue combinant scripts juridiques et séquences win-back en 14 jours.',
          metric: '-38 % de listings frauduleux en 30 jours.',
          proof: 'Place de marché SaaS ayant préservé 4,2 M$ d’ARR après l’opération.',
        },
        {
          id: 'hospitality',
          name: 'Groupes hôteliers premium',
          challenge: 'Rumeurs virales qui étouffent les réservations directes en EMEA et Amériques.',
          approach: 'Escouade réputation sur site couplant activations UGC et enablement concierge en trois langues.',
          metric: '+22 % de réservations directes restaurées en huit semaines.',
          proof: 'Flagships Paris & Barcelone ayant regagné leurs parts grâce aux partenariats influence.',
        },
        {
          id: 'fintech',
          name: 'Fintech en hypercroissance',
          challenge: 'Pression réglementaire et domaines usurpés qui fragilisent la confiance en LATAM.',
          approach: 'Pods de récupération de domaines synchronisés avec juridique et communication investisseurs.',
          metric: '0 domaine usurpé actif après 30 jours.',
          proof: 'Portefeuille Série D ayant rouvert sa liste d’attente avec un discours validé par les autorités.',
        },
        {
          id: 'healthcare',
          name: 'Réseaux santé & téléconsultation',
          challenge: 'Impersonations de praticiens générant plaintes patients et burn-out des équipes.',
          approach: 'Monitoring des signaux couplé à la communication patient et aux scripts d’escalade pour les cliniques.',
          metric: '-40 % de plaintes escaladées d’un trimestre à l’autre.',
          proof: 'Marque de télésanté nationale ayant retrouvé sa notation qualité CMS.',
        },
      ],
    },
    concierge: {
      title: 'Conciergerie premium sur chaque palier',
      subtitle: 'Pilotage fondateur avec rituels proactifs pour que vous restiez toujours en avance sur les signaux.',
      touchpoints: [
        {
          title: 'Salle de commandement Signal',
          description: 'Slack et WhatsApp partagés, animés par des stratégistes multilingues et analysts en continu.',
          availability: 'Monitoring 24/7 avec réponse <30 minutes sur alertes critiques.',
          channel: 'Slack · WhatsApp',
        },
        {
          title: 'Voie d’escalade fondateur',
          description: 'Accès direct à Artur Ziganshin pour updates board, négociations sensibles ou briefings presse.',
          availability: 'Rappel immédiat sur sujets critiques, point quotidien pendant incident.',
          channel: 'Téléphone sécurisé · Signal',
        },
        {
          title: 'Comités insight',
          description: 'Revue instrumentation hebdomadaire : recommandations, blockers et prochaines expérimentations.',
          availability: 'Session de 60 minutes calée sur votre fuseau horaire central.',
          channel: 'Zoom · Dashboards live',
        },
      ],
    },
    procurement: {
      title: 'Documentation achats prête dès le jour 1',
      subtitle:
        'Accélérez les validations sécurité, juridiques et financières grâce à des artefacts transparents qui répondent à chaque contrôle de due diligence.',
      artifacts: [
        {
          title: 'Dossier sécurité & conformité',
          description:
            'Inventaire des contrôles couvrant chiffrement, accès, réponse aux incidents et localisation des données avec politiques et preuves d’audit associées.',
          format: 'Pack PDF',
          availability: 'Actualisé chaque trimestre ou après tout changement majeur.',
        },
        {
          title: 'Matrice d’alignement risques & responsabilités',
          description:
            'Cartographie livrables, flux de données et responsabilités face à vos exigences achats et clauses contractuelles.',
          format: 'Tableur interactif',
          availability: 'Remis lors du cadrage et mis à jour collaborativement selon l’évolution du périmètre.',
        },
        {
          title: 'Kit de justification d’investissement',
          description:
            'Brief exécutif détaillant tarifs, hypothèses ROI, modalités de facturation et clauses d’escalade pour validation CFO.',
          format: 'Présentation exécutive',
          availability: 'Disponible dès la proposition avec mises à jour sur demande.',
        },
        {
          title: 'Playbook d’onboarding des parties prenantes',
          description:
            'Parcours pas à pas avec agenda de kick-off, RACI, cadences de communication et arbre d’escalade multilingue.',
          format: 'Workspace Notion',
          availability: 'Partagé avant le kick-off et maintenu en temps réel.',
        },
      ],
    },
    enablement: {
      title: 'Accélérateurs d’activation intégrés à vos équipes',
      subtitle:
        'Chaque forfait débloque des ateliers immersifs pour transmettre rituels, outils et storytelling à vos équipes internes.',
      streams: [
        {
          title: 'War room exécutive',
          rhythm: 'Command center hebdomadaire de 45 minutes',
          description:
            'Revue pilotée par le fondateur alignant incidents, expérimentations growth et arbitrages de ressources dans un dashboard animé.',
          assets: [
            'Tableau de bord d’escalade et de croissance adapté à vos indicateurs de direction.',
            'Journal de décision avec responsables, échéances et templates de communication multilingues.',
            'Prompts narratifs pour board et investisseurs mis à jour après chaque session.',
          ],
        },
        {
          title: 'Lab de reprise de revenus',
          rhythm: 'Sprint d’expérimentation bi-hebdomadaire',
          description:
            'Opérateurs et analysts reconstruisent funnels, recalibrent le mix paid et récupèrent la demande perdue en 14 jours.',
          assets: [
            'Playbooks canal avec créas localisées, ciblage et checkpoints de mesure.',
            'Dashboards GrowthSpark visualisant lift, rétention et vélocité pipeline en temps réel.',
            'Checklist QA couvrant landing pages, automatisations CRM et handoffs attribution.',
          ],
        },
        {
          title: 'Studio confiance marque',
          rhythm: 'Production immersive mensuelle',
          description:
            'Directeurs créa, stratégistes et motion designers co-construisent des récits signature qui renforcent vos signaux de confiance.',
          assets: [
            'Frameworks narratifs héro avec déclinaisons social, PR et produit.',
            'Kit motion avec fichiers éditables, presets d’animation et guides d’usage pour vos équipes.',
            'Scripts proactifs d’avis et de communauté adaptés à chaque langue couverte.',
          ],
        },
      ],
    },
    integrations: {
      title: 'Connectez votre stack sans ralentir vos équipes',
      subtitle:
        'Nous branchons analytics, marketing, sécurité et support dès le jour 1 pour synchroniser signaux et escalades.',
      partners: [
        {
          name: 'Looker Studio & BigQuery',
          category: 'Analytique & tableaux de bord',
          description:
            'Diffusion continue du sentiment, de la demande et des incidents dans des tableaux Looker Studio animés par des modèles BigQuery déjà validés par votre direction.',
          coverage: 'Mise en ligne en 5 jours ouvrés avec deux ans d’historique importés.',
        },
        {
          name: 'HubSpot & Salesforce',
          category: 'Plateformes go-to-market',
          description:
            'Synchronisation scoring, vélocité pipeline et ownership d’escalade dans votre CRM pour convertir la demande récupérée sans rapprochement manuel.',
          coverage: 'Automatisations bi-directionnelles livrées la première semaine avec revue de gouvernance.',
        },
        {
          name: 'Cloudflare · AWS WAF · Réseau registraires',
          category: 'Sécurité domaines & edge',
          description:
            'Notre desk retrait se couple à vos protections edge pour neutraliser automatiquement domaines spoofés, parcours de phishing et infrastructures fantômes.',
          coverage: 'Circuits d’escalade activés en moins de 48 h sur les marchés prioritaires.',
        },
        {
          name: 'Trustpilot · Google Business Profile',
          category: 'Écosystèmes d’avis',
          description:
            'Authentification des avis, contestation de la fraude et publication de preuves directement sur les plateformes où vos prospects valident la confiance.',
          coverage: 'Politiques contenus harmonisées en français, anglais et espagnol avec monitoring quotidien.',
        },
        {
          name: 'Zendesk · Intercom · Gorgias',
          category: 'Relation client',
          description:
            'Lien direct entre squads CX et réputation pour que macros, escalades et outreach proactif vivent dans les outils utilisés par vos agents chaque heure.',
          coverage: 'Playbooks et automatisations déployés en 10 jours avec localisation incluse.',
        },
        {
          name: 'Slack & Microsoft Teams',
          category: 'Rituels de collaboration',
          description:
            'Acheminement des alertes, victoires et synthèses exécutives dans les canaux que vos opérateurs consultent déjà pour éviter tout goulot.',
          coverage: 'Salons de war-room configurés dès le kickoff avec contrôles d’accès granulaires.',
        },
      ],
    },
    timeline: {
      title: 'Comment l’élan se construit en 90 jours',
      subtitle: 'Chaque mission suit un rythme éprouvé avec jalons visibles et résultats mesurables.',
      phases: [
        {
          title: 'Stabiliser le signal',
          duration: 'Jours 1-10',
          description:
            'Neutralisation des menaces actives, sécurisation des accès et remise à niveau de vos surfaces de confiance avant la relance.',
          outcomes: [
            'Inventaire des menaces scoré par sévérité avec owners attribués.',
            'Actions de retrait domaines, listings et avis engagées en moins de 48 h.',
            'Matrice de communication de crise mise à jour dans chaque langue.',
          ],
        },
        {
          title: 'Reconstruire les récits de confiance',
          duration: 'Semaines 2-5',
          description:
            'Storytelling animé, preuves sociales et assets d’activation sortent pendant que les pods d’expérimentation montent en puissance.',
          outcomes: [
            'Nouvelles expériences hero, landing et lifecycle localisées pour les marchés prioritaires.',
            'Reporting sentiment automatisé avec dashboards live et alertes.',
            'Playbooks d’authentification des avis et cadence de réponse communautaire.',
          ],
        },
        {
          title: 'Accélérer une croissance défendable',
          duration: 'Semaines 6-12',
          description:
            'Capitalisation sur les gains : extension des campagnes, optimisation pricing et transfert des rituels à vos équipes.',
          outcomes: [
            'Pipeline d’expérimentations avec modélisation ROI et circuits de validation.',
            'Kit narratif exécutif trimestriel et synthèse performance pour le board.',
            'Formations, documentation et accès outils remis aux leaders internes.',
          ],
        },
      ],
    },
    guarantees: {
      title: 'Nos engagements contractuels',
      subtitle: 'Responsabilité fondatrice et garde-fous qui rassurent vos dirigeants.',
      items: [
        {
          title: 'Fondateur en première ligne',
          description:
            'Artur Ziganshin participe à chaque escalade critique et aux rooms hebdomadaires — aucun relais à une couche junior.',
        },
        {
          title: 'Checkpoint momentum à 30 jours',
          description:
            'Si les jalons convenus ne sont pas atteints le premier mois, nous prolongeons la mission sans frais jusqu’au rattrapage.',
        },
        {
          title: 'Transparence source de vérité',
          description:
            'Dashboards temps réel, suivi budgétaire et notes d’expérimentation restent en propriété client pour garder la main durablement.',
        },
      ],
    },
    roi: {
      title: 'Calculez votre ROI de protection de marque',
      subtitle: 'Ajustez les paramètres pour visualiser la vitesse à laquelle la récupération proactive sécurise vos revenus.',
      inputs: {
        incidents: {
          label: 'Incidents critiques mensuels',
          help: 'Avis frauduleux, domaines de phishing, demandes de retrait que nous gérons pour vous.',
          suffix: '/mois',
          min: 0,
          max: 120,
          step: 1,
          defaultValue: 12,
        },
        retention: {
          label: 'Demande sauvée par incident',
          help: 'Pourcentage d’acheteurs à risque que nous récupérons dès que Traceremove neutralise la menace.',
          suffix: '%',
          min: 10,
          max: 100,
          step: 5,
          defaultValue: 65,
        },
        customerValue: {
          label: 'Revenu moyen par client',
          help: 'Moyenne panier initial, réachat et expansion par compte sauvegardé.',
          prefix: '€',
          min: 100,
          max: 20000,
          step: 100,
          defaultValue: 800,
        },
      },
      assumption:
        'Projection basée sur 12 mois de demande protégée avec Traceremove comme partenaire principal.',
      result: {
        headline: 'Revenus annuels sécurisés estimés',
        label: 'Impact annuel',
        monthlyLabel: 'Revenus mensuels protégés',
        customersLabel: 'Clients sauvegardés chaque mois',
        summary:
          'Traceremove empêche {{value}} de s’évaporer chaque année en neutralisant les menaces avant qu’elles ne fassent chuter la confiance.',
      },
      scenarios: [
        {
          title: 'Sabotage marketplace',
          loss: 'Jusqu’à 180 000 € de ventes perdues lorsque de faux vendeurs saturent votre catalogue.',
          improvement: 'Traceremove rétablit des expériences vérifiées en moins de 48 h.',
          description:
            'Notre cellule retrait coordonne marketplaces, prestataires de paiement et clients pour réinstaller la confiance.',
          bullets: [
            'Vérifications éclairs des vendeurs sur Amazon, Etsy et plateformes spécialisées.',
            'Séquences messages clients qui relancent paniers et avis légitimes.',
            'Escalades auprès des équipes trust & safety avec dossiers de preuves.',
          ],
        },
        {
          title: 'Crise d’avis frauduleux',
          loss: 'Jusqu’à 95 000 € de pipeline mensuel envolé lorsque les vagues de faux avis 1★ restent sans réponse.',
          improvement: 'Traceremove authentifie les avis et amplifie les preuves sociales en quelques heures.',
          description:
            'Nous combinons investigations, actions juridiques et programmes de croissance pour restaurer la confiance sur chaque point de contact.',
          bullets: [
            'Détection assistée par IA sur G2, Capterra et stores applicatifs.',
            'Parcours d’activation qui transforment les clients satisfaits en témoignages à forte intention.',
            'Kits de contenus animés qui relancent SEO, paid et nurturing.',
          ],
        },
        {
          title: 'Usurpation de dirigeants',
          loss: 'Les domaines et emails usurpés coûtent plus de 60 000 € par incident en remboursements et churn.',
          improvement: 'Traceremove bloque l’infrastructure de phishing et clarifie la communication dans la journée.',
          description:
            'Ingénieurs sécurité et storytellers orchestrent retraits et messages leadership pour stabiliser le marché.',
          bullets: [
            'Audit domaines et messageries avec escalades registraires et durcissement DMARC.',
            'Prises de parole prêtes pour investisseurs, partenaires et presse.',
            'Dashboards temps réel montrant revenus regagnés et fidélisation.',
          ],
        },
      ],
    },
    faqs: {
      title: 'FAQ services & tarifs',
      items: [
        {
          question: 'Peut-on commencer par un projet plutôt qu’un abonnement ?',
          answer:
            'Oui. Nous cadrons des intensifs de 6 à 8 semaines centrés sur la remédiation ou l’accélération go-to-market à partir de 12 000 $. La plupart des équipes basculent ensuite sur un abonnement une fois le momentum validé.',
        },
        {
          question: 'Comment collaborez-vous avec les équipes internes ?',
          answer:
            'Nous intégrons vos outils existants (Slack, Notion, Jira, HubSpot…) et animons des cérémonies hebdomadaires avec vos leads marketing, produit et CX. Chaque livrable est documenté pour faciliter le passage de relais.',
        },
        {
          question: 'Travaillez-vous avec des secteurs régulés ?',
          answer:
            'Absolument. Nous gérons revues conformité, exigences sécurité et validations légales pour finance, santé, secteur public et marketplaces dans nos trois langues.',
        },
      ],
    },
    cta: {
      title: 'Prêts à protéger et accélérer avec un seul squad ?',
      body:
        'Partagez vos objectifs et points de pression. Nous revenons sous 24 h avec un agenda personnalisé et les spécialistes à embarquer.',
      primary: 'Planifier un call stratégique',
      secondary: 'Écrire directement à Artur',
    },
  },
  es: {
    hero: {
      eyebrow: 'Servicios y precios',
      heading: 'Elige el squad que protege tu marca mientras acelera el crecimiento.',
      body:
        'Cada colaboración está liderada por el Fundador y CEO Artur Ziganshin junto a un núcleo senior multilingüe que cubre reputación, generación de demanda y storytelling de producto. Usa los paquetes como referencia y luego ajustamos el alcance a tu velocidad.',
      primaryCta: 'Solicitar propuesta a medida',
      secondaryCta: 'Descargar tabla de precios',
      note: 'Tiempo medio de puesta en marcha: 10 días hábiles desde el kickoff.',
    },
    promise: {
      title: 'Lo que desbloqueas con Traceremove',
      paragraphs: [
        'Operamos como extensión de tu dirección, alineando estrategas de growth, ingenieros de seguridad y directores creativos que ya trabajan en mercados en inglés, francés y español.',
        'Cada plan combina storytelling animado, experimentación de performance y respuesta rápida a incidentes para defender tu reputación mientras el pipeline sigue escalando.',
      ],
      bullets: [
        'Diagnóstico liderado por el fundador con acceso directo a Artur Ziganshin durante toda la colaboración.',
        'Salas semanales donde insights, bloqueos y próximos experimentos se sincronizan en un centro de mando animado.',
        'Marcos de medición claros con dashboards en Looker Studio, alertas preventivas y resúmenes ejecutivos.',
      ],
    },
    pillars: {
      title: 'Pilares de servicio modulares',
      subtitle: 'Combina los pods que necesitas: cada plan incluye estos bloques.',
      items: [
        {
          title: 'Defensa de marca y control reputacional',
          description:
            'Monitoreo, eliminaciones y gestión de comunidad para evitar que reseñas falsas, dominios phishing y narrativas negativas se multipliquen.',
          bullets: [
            'Vigilancia 24/7 en buscadores, marketplaces, redes sociales y apps de mensajería.',
            'Playbooks de escalado con coordinación de registradores, plataformas y aliados legales.',
            'Sistemas de autenticación de reseñas y guiones de engagement proactivo.',
          ],
        },
        {
          title: 'Operaciones de growth y experimentación',
          description:
            'Campañas lifecycle, experimentos de conversión y programas de paid media instrumentados para la velocidad sin perder gobernanza.',
          bullets: [
            'Diagnóstico full funnel que cubre adquisición, retención y expansión.',
            'Priorización del backlog de experimentos con tableros animados y retros wins/losses.',
            'Modelos de atribución, pruebas de incrementalidad y cadencias de reporting de ingresos.',
          ],
        },
        {
          title: 'Sistemas creativos y diseño de experiencia',
          description:
            'Narrativas, sistemas de diseño e interacciones que viajan por los canales reflejando tu posicionamiento protegido.',
          bullets: [
            'Marcos narrativos modulares con mensajes localizados y visuales hero.',
            'Bibliotecas de componentes para landing pages, enablement comercial y educación de producto.',
            'Guías de motion design y producción de assets para lanzamientos, social y PR.',
          ],
        },
      ],
    },
    pricing: {
      title: 'Precios calibrados para el momentum',
      subtitle: 'Elige un plan como punto de partida; cerramos el alcance tras un diagnóstico conjunto.',
      tiers: [
        {
          id: 'launch',
          name: 'Escudo de lanzamiento',
          price: '6 800 $ / mes',
          cadence: 'Compromiso mínimo de 3 meses',
          description:
            'Escuadrón de respuesta rápida para limpiar riesgos, reactivar señales de confianza y preparar experimentos de growth.',
          highlight:
            'Ideal para equipos que entran a un nuevo mercado o se recuperan de golpes reputacionales.',
          features: [
            'Monitoreo diario + ejecuciones de retirada en tres canales prioritarios.',
            'Dos lanzamientos de campaña con motion al mes con soporte creativo y analítico.',
            'Sala de performance semanal con referentes de growth, marca y producto.',
            'Suite de dashboards base con sentimiento, tráfico e indicadores de leads.',
            'Línea directa de crisis con respuesta garantizada en 60 minutos.',
          ],
        },
        {
          id: 'scale',
          name: 'Aceleración scale',
          price: '11 500 $ / mes',
          cadence: 'Alianza de 6 meses',
          description:
            'Pod integrado que alinea marketing, producto y CX para escalar demanda defendible.',
          highlight:
            'Pensado para compañías Series A-C que equilibran crecimiento agresivo con protección de marca.',
          features: [
            'Monitoreo continuo + coordinación legal en cinco territorios prioritarios.',
            'Cuatro experimentos mensuales con squads de CRO, lifecycle y paid media.',
            'Actualización del sistema creativo con visuales hero, librería de componentes y playbooks.',
            'Stack de medición avanzado con atribución, MMM y scorecards ejecutivas.',
            'Workshop trimestral con realineamiento de roadmap y enablement.',
          ],
        },
        {
          id: 'enterprise',
          name: 'Guardia enterprise',
          price: '18 500 $ / mes',
          cadence: 'Transformación de 12 meses',
          description:
            'Equipo de transformación multi-mercado que integra gobernanza, experimentación y reporting ejecutivo.',
          highlight:
            'Diseñado para marcas globales con objetivos complejos de riesgo, cumplimiento e ingresos.',
          features: [
            'Red de monitoreo global en 12+ canales con disparadores de intervención automatizados.',
            'Sala creativa dedicada que produce assets semanales con localización y motion.',
            'Alineación RevOps total: enablement comercial, activación de partners y plays de CS.',
            'Planificación de escenarios, simulaciones de crisis y soporte de comunicaciones al directorio.',
            'Analistas embebidos modelando impacto en ingresos y resiliencia del pipeline.',
          ],
        },
      ],
      note:
        '¿Prefieres un sprint corto o enablement interno? Diseñamos intensivos desde 12 000 $.',
    },
    comparison: {
      title: 'Por qué los equipos se cambian a Traceremove',
      subtitle: 'Una mirada rápida a cómo nuestro pod de operadores supera a una agencia tradicional.',
      criteriaLabel: 'Criterio clave',
      columns: {
        traceremove: 'Pod operador Traceremove',
        traditional: 'Agencia tradicional',
      },
      rows: [
        {
          label: 'Acceso al liderazgo',
          traceremove:
            'El fundador y CEO Artur Ziganshin dirige cada diagnóstico, revisión de playbooks y war room junto al equipo central.',
          traditional:
            'Capas de accounts filtran la información antes de llegar a los decisores senior, lo que frena las decisiones.',
        },
        {
          label: 'Velocidad de intervención',
          traceremove:
            'Hotline de 60 minutos respaldada por analistas multilingües y socios legales capaces de neutralizar amenazas 24/7.',
          traditional:
            'Filas de tickets y diferencias horarias retrasan los retiros y dejan activos los reviews falsos o dominios clonados durante días.',
        },
        {
          label: 'Medición y motion',
          traceremove:
            'Dashboards unificados con métricas de growth, seguridad de marca e ingresos más recaps animados para stakeholders.',
          traditional:
            'Hojas de cálculo fragmentadas con reportes mensuales que no capturan sentimiento en vivo ni cambios de oportunidad.',
        },
        {
          label: 'Cobertura de idiomas',
          traceremove: 'Especialistas en inglés, francés y español integrados en cada pod para reflejar tus mercados.',
          traditional: 'Traductores externos se suman al final, perdiendo matices y retrasando el lanzamiento.',
        },
      ],
    },
    addOns: {
      title: 'Aceleradores opcionales',
      subtitle: 'Activa tracks especializados sobre tu plan base cuando necesites impulso extra.',
      items: [
        {
          name: 'Laboratorio de simulación de crisis',
          price: '4 200 $',
          description:
            'Ejercicio tabletop que pone a prueba tus rituales de protección de marca con scoring en vivo.',
          benefits: [
            'Escenarios de ataque personalizados según tu industria y stack tecnológico.',
            'Drills multifuncionales con debrief y playbooks actualizados.',
            'Resumen ejecutivo con hoja de ruta priorizada de remediación.',
          ],
        },
        {
          name: 'Cortafuegos de paid media',
          price: '3 600 $',
          description:
            'Detección y mitigación de anuncios impostores que capturan tu demanda de marca.',
          benefits: [
            'Barridos cada 24 h en Google, Meta, TikTok y redes programáticas.',
            'Gestión de reclamaciones y redistribución de presupuesto a cargo del equipo.',
            'Actualización creativa enfocada en confianza, prueba social y seguridad.',
          ],
        },
        {
          name: 'Estudio de visibilidad ejecutiva',
          price: '2 900 $',
          description:
            'Motor de thought leadership que combina narrativa con operaciones de distribución.',
          benefits: [
            'Artículos ghostwritten mensuales y movimientos en LinkedIn con variaciones locales.',
            'Gestión de oportunidades de speaker y sesiones de media training.',
            'Dashboard de performance con alcance, sentimiento y pipeline generado.',
          ],
        },
      ],
    },
    deliverables: {
      title: 'Entregables por trimestre',
      subtitle: 'Cada alcance se conecta a artefactos tangibles para que veas el avance sin dudas.',
      items: [
        {
          title: 'Tablero de inteligencia de riesgos',
          description: 'Registro vivo de amenazas, historial de retiros y bitácora de decisiones en espacios compartidos.',
          cadence: 'Actualizado a diario',
        },
        {
          title: 'Lanzamientos de experimentos de growth',
          description: 'Landing pages, flujos nurture, piezas pagas y gráficos motion listos para desplegar.',
          cadence: '2 a 6 entregas mensuales',
        },
        {
          title: 'Kit narrativo ejecutivo',
          description: 'Memorandos, talking points de liderazgo y guiones sociales localizados por mercado.',
          cadence: 'Entrega mensual',
        },
        {
          title: 'Pulso de ingresos y sentimiento',
          description: 'Dashboard de KPI con comentarios, ajustes de forecast y próximas apuestas recomendadas.',
          cadence: 'Cada dos semanas',
        },
      ],
    },
    workflow: {
      title: 'Cómo operan nuestros programas',
      subtitle: 'Del kickoff a los rituales recurrentes, cada fase se coordina con transparencia.',
      steps: [
        {
          title: 'Inmersión y barrido de riesgos',
          duration: 'Semana 1',
          description:
            'Entrevistas con stakeholders, acceso a datos e inventario de amenazas para mapear la situación actual.',
          outputs: [
            'Diagnóstico de reputación y growth con riesgos priorizados.',
            'Checklist de accesos y score de preparación de instrumentación.',
          ],
        },
        {
          title: 'Blueprint de momentum',
          duration: 'Semanas 2-3',
          description:
            'Mapeo de experiencia, diseño de hipótesis y validación de pricing junto a tu liderazgo.',
          outputs: [
            'Roadmap de 90 días con experimentos, salvaguardas y responsables.',
            'Marco de medición y plan de comunicación ejecutiva.',
          ],
        },
        {
          title: 'Sprints de activación',
          duration: 'Semanas 4-12',
          description:
            'Pods multifuncionales lanzan campañas, refuerzan la reputación y automatizan el reporting.',
          outputs: [
            'Lanzamientos semanales en creatividades, lifecycle y superficies de producto.',
            'Suite de dashboards en Looker Studio con comentarios en vivo.',
          ],
        },
        {
          title: 'Escala y enablement',
          duration: 'Continuo',
          description:
            'Anclamos rituales, capacitamos a tu equipo y evolucionamos la hoja de ruta según las señales.',
          outputs: [
            'Playbooks, plantillas y sesiones de formación grabadas.',
            'Business reviews trimestrales con scorecards ejecutivas.',
          ],
        },
      ],
    },
    assurance: {
      title: 'Evidencias y garantías',
      subtitle: 'Trabajamos con transparencia radical para ver el impacto en movimiento.',
      metrics: [
        { label: 'Ventana media para recuperar reseñas', value: '14 horas' },
        { label: 'Pipeline nuevo influenciado', value: '+38 % interanual' },
        { label: 'Mercados activados por engagement', value: '3 idiomas' },
      ],
      testimonials: [
        {
          quote:
            'Traceremove limpió 1 200 listados falsos en menos de dos semanas mientras lanzaba campañas que superaron nuestro control en un 27 %.',
          author: 'Camille Roy',
          role: 'VP Growth, fintech scale-up',
        },
        {
          quote:
            'El equipo coordinó legal, producto y marketing en tres países sin frenar la entrega; ahora nuestro directorio recibe pulsos semanales.',
          author: 'Luis Méndez',
          role: 'Chief Communications Officer, marca retail global',
        },
      ],
    },
    compliance: {
      title: 'Conformidad regulatoria desde el inicio',
      subtitle:
        'Cada proyecto incluye documentación, evidencias y coordinación jurídica bilingüe para acelerar las aprobaciones de compras.',
      frameworks: [
        {
          id: 'iso27001',
          name: 'Mapa de respuesta ISO 27001',
          framework: 'ISO 27001 Anexo A',
          coverage:
            'Relatos de control que vinculan monitoreo, flujos de retirada y planes de recuperación de marca con los dominios del Anexo A.',
          renewal: 'Actualizado cada 90 días con registros de cambios y revisiones de riesgos.',
          evidence: 'Incluye extractos del registro de riesgos, biblioteca de playbooks y seguimiento de acciones correctivas.',
        },
        {
          id: 'soc2',
          name: 'Cuaderno SOC 2',
          framework: 'SOC 2 Tipo II',
          coverage:
            'Mapeo de los criterios de seguridad, disponibilidad y confidencialidad que cubren marketing y producto.',
          renewal: 'Se actualiza junto a las pruebas trimestrales de control y la coordinación con auditores.',
          evidence: 'Aporta matriz de controles, dashboards de monitoreo e informes de simulacros de incidentes.',
        },
        {
          id: 'gdpr',
          name: 'Kit RGPD + LGPD',
          framework: 'RGPD / LGPD',
          coverage:
            'Inventario de tratamiento de datos, bases legales y recorridos de consentimiento multilingües para Europa y Latinoamérica.',
          renewal: 'Revisado dos veces al año con asesores de privacidad y socios DPO.',
          evidence: 'Incluye plantillas de EIPD, registros de evaluación de proveedores y guiones de notificación de brechas.',
        },
      ],
      badges: [
        {
          label: 'DPA firmados en 48 h',
          description:
            'Plantillas preaprobadas con cláusulas UE/EE. UU., anotaciones legales bilingües y seguimiento de firmas.',
        },
        {
          label: 'Trazabilidad lista para auditores',
          description:
            'Dashboards animados archivan retiradas, disputas de reseñas y conversaciones para exportar al regulador.',
        },
        {
          label: 'Repositorio de cuestionarios de seguridad',
          description:
            'Biblioteca con más de 400 respuestas de ciberseguridad sobre cloud, marketing y residencia de datos con contexto localizado.',
        },
      ],
    },
    support: {
      title: 'Soporte que nunca se apaga',
      subtitle: 'Acceso directo al equipo operador, sin intermediarios.',
      channels: [
        {
          name: 'Hotline de escalación crítica',
          availability: '24/7 · English / Français / Español',
          description: 'Acceso inmediato a Artur Ziganshin y a la unidad de respuesta ante dominios clonados, filtraciones o crisis virales.',
        },
        {
          name: 'Traceremove Command Center',
          availability: 'Lunes a viernes · 8:00–22:00 local',
          description: 'Hub compartido en Notion + Slack con tableros de experimentos, seguimiento de retiros y actualizaciones animadas.',
        },
        {
          name: 'Office hours ejecutivas',
          availability: 'Sesión semanal de 45 minutos',
          description: 'Espacio para liderazgo donde revisamos momentum, desbloqueamos aprobaciones y alineamos a los stakeholders globales.',
        },
      ],
    },
    industries: {
      title: 'Playbooks por industria activados cada semana',
      subtitle: 'Elegís un paquete y modulamos los rituales según la presión real de tu sector.',
      sectors: [
        {
          id: 'saas',
          name: 'Scaleups SaaS',
          challenge: 'Redes de reseñas falsas elevan la rotación en tiendas en inglés y español.',
          approach: 'Mesa de bajas bilingüe que combina guiones legales con flujos de win-back en menos de 14 días.',
          metric: '-38 % de listados fraudulentos durante el primer mes.',
          proof: 'Marketplace SaaS retuvo 4,2 M$ de ARR tras la barrida coordinada.',
        },
        {
          id: 'hospitality',
          name: 'Hotelería de lujo',
          challenge: 'Ciclos virales frenan reservas directas en EMEA y las Américas.',
          approach: 'Escuadrón reputacional on-site combina activaciones UGC y enablement de concierge en tres idiomas.',
          metric: '+22 % de reservas directas recuperadas en ocho semanas.',
          proof: 'Hoteles insignia en París y Barcelona recuperaron cuota con alianzas de creadores.',
        },
        {
          id: 'fintech',
          name: 'Fintech disruptivas',
          challenge: 'Scrutinio regulatorio y dominios falsos erosionan la confianza en LATAM.',
          approach: 'Pods de recuperación de dominios coordinan legal, compliance y comunicación con inversores.',
          metric: '0 dominios suplantados activos tras 30 días.',
          proof: 'Billetera Serie D reabrió lista de espera con narrativa avalada por reguladores.',
        },
        {
          id: 'healthcare',
          name: 'Redes de salud',
          challenge: 'Suplantaciones de profesionales disparan quejas de pacientes y fatiga del staff.',
          approach: 'Monitoreo de señales integrado con comunicación paciente y guías de escalación para clínicas.',
          metric: '-40 % de quejas escaladas trimestre contra trimestre.',
          proof: 'Marca nacional de telemedicina recuperó su rating de calidad CMS.',
        },
      ],
    },
    concierge: {
      title: 'Concierge de alto toque en cada plan',
      subtitle: 'Acompañamiento liderado por el fundador con rituales proactivos para que nunca tengas que perseguir updates.',
      touchpoints: [
        {
          title: 'Cuarto de guerra de señales',
          description: 'Slack y WhatsApp compartidos con estrategas multilingües y analistas monitoreando en vivo.',
          availability: 'Cobertura 24/7 con respuesta <30 minutos en alertas prioritarias.',
          channel: 'Slack · WhatsApp',
        },
        {
          title: 'Vía de escalación con el fundador',
          description: 'Acceso directo a Artur Ziganshin para comités de directorio, negociaciones sensibles o briefings de prensa.',
          availability: 'Callbacks inmediatos en incidentes y touchpoint diario mientras dure la crisis.',
          channel: 'Teléfono seguro · Signal',
        },
        {
          title: 'Rondas de insights',
          description: 'Revisión semanal de la instrumentación con recomendaciones, bloqueos y experimentos próximos.',
          availability: 'Sesión fija de 60 minutos adaptada a tu huso horario.',
          channel: 'Zoom · Dashboards en vivo',
        },
      ],
    },
    procurement: {
      title: 'Documentación de compras lista desde el día uno',
      subtitle:
        'Acelera las revisiones de seguridad, legales y financieras con artefactos transparentes que resuelven cada checklist de due diligence.',
      artifacts: [
        {
          title: 'Dossier de seguridad y cumplimiento',
          description:
            'Inventario de controles que cubre cifrado, accesos, respuesta a incidentes y residencia de datos con políticas y evidencias de auditoría enlazadas.',
          format: 'Paquete PDF',
          availability: 'Actualizado trimestralmente o tras cualquier cambio material.',
        },
        {
          title: 'Matriz de alineación de riesgos y responsabilidades',
          description:
            'Mapea entregables, flujos de datos y responsabilidades frente a tus requisitos de compras y cláusulas contractuales.',
          format: 'Hoja de cálculo interactiva',
          availability: 'Entregada durante el scoping y actualizada en colaboración cuando evoluciona el alcance.',
        },
        {
          title: 'Kit de justificación de inversión',
          description:
            'Resumen ejecutivo con precios, supuestos de ROI, condiciones de facturación y cláusulas de escalamiento para aprobación financiera.',
          format: 'Presentación ejecutiva',
          availability: 'Disponible en la fase de propuesta con actualizaciones bajo demanda.',
        },
        {
          title: 'Playbook de onboarding de stakeholders',
          description:
            'Guía paso a paso con agenda de kickoff, RACI, cadencias de comunicación y árbol de escalación multilingüe.',
          format: 'Workspace en Notion',
          availability: 'Compartido antes del kickoff y mantenido en tiempo real.',
        },
      ],
    },
    enablement: {
      title: 'Aceleradores de enablement dentro de tu equipo',
      subtitle:
        'Cada plan abre talleres inmersivos para transferir rituales, herramientas y storytelling que sostienen el impulso.',
      streams: [
        {
          title: 'War room ejecutivo',
          rhythm: 'Comando semanal de 45 minutos',
          description:
            'Revisión liderada por el fundador que alinea incidentes, experimentos de growth y decisiones de recursos dentro de un dashboard animado.',
          assets: [
            'Scoreboard de escalación y crecimiento alineado a tus métricas directivas.',
            'Log de decisiones con responsables, deadlines y plantillas multilingües de comunicación.',
            'Prompts narrativos para board e inversores actualizados en cada sesión.',
          ],
        },
        {
          title: 'Laboratorio de recuperación de ingresos',
          rhythm: 'Sprint de experimentación quincenal',
          description:
            'Operadores y analistas reconstruyen funnels, recalibran el mix pago y recuperan demanda perdida en 14 días.',
          assets: [
            'Playbooks por canal con creatividades localizadas, targeting y checkpoints de medición.',
            'Dashboards GrowthSpark que visualizan lift, retención y velocidad de pipeline en tiempo real.',
            'Checklist de QA que cubre landings, automatizaciones CRM y traspasos de atribución.',
          ],
        },
        {
          title: 'Studio de confianza de marca',
          rhythm: 'Producción inmersiva mensual',
          description:
            'Directores creativos, estrategas y motion designers co-crean relatos insignia y activos que refuerzan los signos de confianza.',
          assets: [
            'Frameworks narrativos hero con variaciones para social, PR y producto.',
            'Kit de motion con archivos editables, presets de animación y guías de uso para tu equipo.',
            'Guiones proactivos de reseñas y comunidad afinados para cada idioma soportado.',
          ],
        },
      ],
    },
    integrations: {
      title: 'Integramos tu stack sin perder ritmo',
      subtitle:
        'Conectamos analytics, marketing, seguridad y soporte desde el día uno para que las señales y las escalaciones permanezcan alineadas.',
      partners: [
        {
          name: 'Looker Studio & BigQuery',
          category: 'Analítica y dashboards',
          description:
            'Transmitimos sentimiento, demanda y telemetría de incidentes hacia tableros animados en Looker Studio alimentados por modelos de BigQuery validados por tu dirección.',
          coverage: 'Activo en 5 días hábiles con dos años de histórico importado.',
        },
        {
          name: 'HubSpot & Salesforce',
          category: 'Plataformas de revenue',
          description:
            'Sincronizamos scoring, velocidad de pipeline y ownership de escalaciones dentro de tu CRM para convertir la demanda recuperada sin conciliaciones manuales.',
          coverage: 'Automatizaciones bidireccionales listas en la primera semana con revisión de governance.',
        },
        {
          name: 'Cloudflare · AWS WAF · Red de registradores',
          category: 'Seguridad de dominios',
          description:
            'Acoplamos nuestro desk de retiros a tu protección perimetral para neutralizar dominios falsos, recorridos de phishing e infraestructura sombra de forma automática.',
          coverage: 'Circuitos de escalación activos en menos de 48 horas en tus mercados prioritarios.',
        },
        {
          name: 'Trustpilot · Google Business Profile',
          category: 'Ecosistemas de reseñas',
          description:
            'Autenticamos reseñas, disputamos fraudes y publicamos prueba social directamente en las plataformas donde los prospectos verifican tu reputación.',
          coverage: 'Políticas alineadas en inglés, francés y español con monitoreo diario.',
        },
        {
          name: 'Zendesk · Intercom · Gorgias',
          category: 'Atención al cliente',
          description:
            'Unimos CX y reputación para que escalaciones, macros y outreach proactivo vivan en las herramientas que tus agentes usan a cada hora.',
          coverage: 'Playbooks y automatizaciones desplegados en 10 días con localización incluida.',
        },
        {
          name: 'Slack & Microsoft Teams',
          category: 'Rituales de colaboración',
          description:
            'Enrutamos alertas, victorias y resúmenes ejecutivos directo a los canales que tu equipo ya sigue para que el momentum no se estanque.',
          coverage: 'Canales de war room configurados desde el kickoff con controles de acceso por niveles.',
        },
      ],
    },
    timeline: {
      title: 'Cómo se construye el momentum en 90 días',
      subtitle: 'Cada engagement sigue un ritmo probado con hitos visibles y entregables cuantificables.',
      phases: [
        {
          title: 'Estabilizar la señal',
          duration: 'Días 1-10',
          description:
            'Neutralizamos amenazas activas, aseguramos accesos y restablecemos las superficies de confianza antes de relanzar el crecimiento.',
          outcomes: [
            'Inventario de amenazas con puntaje de severidad y responsables asignados.',
            'Acciones de retiro de dominios, listados y reseñas en marcha en menos de 48 horas.',
            'Matriz de comunicación de crisis actualizada en los tres idiomas.',
          ],
        },
        {
          title: 'Reconstruir narrativas de confianza',
          duration: 'Semanas 2-5',
          description:
            'Historias en motion, prueba social y assets de habilitación salen a producción mientras los pods de experimentación aceleran.',
          outcomes: [
            'Nuevas experiencias hero, landing y lifecycle localizadas para los mercados prioritarios.',
            'Reportes de sentimiento automatizados con dashboards en vivo y alertas.',
            'Playbooks de autenticación de reseñas y cadencia de respuesta comunitaria.',
          ],
        },
        {
          title: 'Escalar un crecimiento defendible',
          duration: 'Semanas 6-12',
          description:
            'Capitalizamos las victorias: expandimos campañas, refinamos pricing y transferimos rituales para que tu equipo sostenga la velocidad.',
          outcomes: [
            'Pipeline de experimentos con modelado de ROI y carriles de aprobación claros.',
            'Kit narrativo ejecutivo trimestral y recap de performance listo para directorio.',
            'Capacitaciones, documentación y accesos a herramientas traspasados a líderes internos.',
          ],
        },
      ],
    },
    guarantees: {
      title: 'Compromisos que cumplimos',
      subtitle: 'Responsabilidad directa del fundador y garantías que mantienen tranquila a tu dirección.',
      items: [
        {
          title: 'Fundador siempre disponible',
          description:
            'Artur Ziganshin participa en cada escalación crítica y en las rooms semanales; nunca delegamos en capas junior.',
        },
        {
          title: 'Checkpoint de momentum a 30 días',
          description:
            'Si no alcanzamos los hitos pactados en el primer mes, extendemos el engagement sin costo adicional hasta recuperarlos.',
        },
        {
          title: 'Transparencia de fuente única',
          description:
            'Dashboards en tiempo real, seguimiento de presupuesto y notas de experimentación permanecen bajo tu propiedad para que mantengas el control.',
        },
      ],
    },
    roi: {
      title: 'Calcula tu ROI de protección de marca',
      subtitle: 'Ajusta los parámetros para ver qué tan rápido la recuperación proactiva protege tus ingresos.',
      inputs: {
        incidents: {
          label: 'Incidentes críticos mensuales',
          help: 'Reseñas falsas, dominios phishing y solicitudes urgentes que gestionamos por ti.',
          suffix: '/mes',
          min: 0,
          max: 120,
          step: 1,
          defaultValue: 12,
        },
        retention: {
          label: 'Demanda rescatada por incidente',
          help: 'Porcentaje de compradores en riesgo que recuperamos al neutralizar la amenaza.',
          suffix: '%',
          min: 10,
          max: 100,
          step: 5,
          defaultValue: 65,
        },
        customerValue: {
          label: 'Ingreso medio por cliente',
          help: 'Promedio de compra inicial, retención y expansión por cuenta protegida.',
          prefix: '€',
          min: 100,
          max: 20000,
          step: 100,
          defaultValue: 780,
        },
      },
      assumption:
        'Proyección basada en 12 meses de demanda protegida con Traceremove como socio principal.',
      result: {
        headline: 'Ingresos anuales protegidos estimados',
        label: 'Impacto anual',
        monthlyLabel: 'Ingresos mensuales protegidos',
        customersLabel: 'Clientes retenidos cada mes',
        summary:
          'Traceremove evita que {{value}} se pierdan cada año al neutralizar amenazas antes de que dañen la confianza.',
      },
      scenarios: [
        {
          title: 'Sabotaje en marketplaces',
          loss: 'Hasta 180 000 € en ventas perdidas cuando vendedores falsos inundan tu catálogo.',
          improvement: 'Traceremove restablece experiencias verificadas en menos de 48 horas.',
          description:
            'Nuestro equipo de retiros coordina marketplaces, procesadores de pago y clientes para reconstruir la confianza.',
          bullets: [
            'Barridos de verificación exprés en Amazon, Etsy y marketplaces de nicho.',
            'Secuencias de mensajes que recuperan carritos y reseñas legítimas.',
            'Escaladas con equipos de trust & safety acompañadas de paquetes de evidencia.',
          ],
        },
        {
          title: 'Crisis de reseñas falsas',
          loss: 'Se pierden 95 000 € de pipeline mensual cuando las oleadas de reseñas 1★ quedan sin respuesta.',
          improvement: 'Traceremove autentica reseñas y amplifica prueba social verificada en cuestión de horas.',
          description:
            'Combinamos investigación, acciones legales y programas de growth para que la confianza vuelva a cada punto de contacto.',
          bullets: [
            'Detección asistida por IA en G2, Capterra y tiendas de aplicaciones.',
            'Flujos de activación que convierten clientes satisfechos en testimonios de alta intención.',
            'Kits de contenido animado que reactivan SEO, paid y lifecycle.',
          ],
        },
        {
          title: 'Suplantación de directivos',
          loss: 'Dominios y correos falsos generan más de 60 000 € por incidente en reembolsos y churn.',
          improvement: 'Traceremove bloquea la infraestructura de phishing y ordena la comunicación el mismo día.',
          description:
            'Ingenieros de seguridad y storytellers coordinan retiros y mensajes ejecutivos para estabilizar al mercado.',
          bullets: [
            'Barridos de dominios y bandejas con escalados a registradores y endurecimiento DMARC.',
            'Mensajes preparados para inversores, partners y prensa.',
            'Dashboards que muestran ingresos recuperados y retención.',
          ],
        },
      ],
    },
    faqs: {
      title: 'Preguntas frecuentes sobre servicios y precios',
      items: [
        {
          question: '¿Podemos iniciar con un proyecto en lugar de un retainer?',
          answer:
            'Sí. Diseñamos intensivos de 6 a 8 semanas enfocados en remediación o aceleración go-to-market desde 12 000 $. La mayoría de los equipos pasa a retainer una vez que el momentum está validado.',
        },
        {
          question: '¿Cómo colaboran con los equipos internos?',
          answer:
            'Nos integramos en tus herramientas (Slack, Notion, Jira, HubSpot, etc.) y facilitamos ceremonias semanales con tus responsables de marketing, producto y CX. Cada entregable incluye documentación para un traspaso sencillo.',
        },
        {
          question: '¿Trabajan con industrias reguladas?',
          answer:
            'Por supuesto. Gestionamos revisiones de compliance, requisitos de seguridad y aprobaciones legales para finanzas, salud, sector público y marketplaces en nuestros tres idiomas.',
        },
      ],
    },
    cta: {
      title: '¿Listo para proteger y crecer con un solo squad?',
      body:
        'Comparte tus objetivos y puntos de presión. En menos de 24 horas respondemos con una agenda personalizada y los especialistas que recomendamos integrar.',
      primary: 'Agendar llamada estratégica',
      secondary: 'Escribir directamente a Artur',
    },
  },
}

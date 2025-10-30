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

export type SlaCommitment = {
  title: string
  description: string
  target: string
  coverage: string
}

export type ReportingRhythm = {
  title: string
  description: string
  cadence: string
  deliverables: string[]
}

export type IndustrySpotlight = {
  id: string
  name: string
  challenge: string
  approach: string
  metric: string
  proof: string
}

export type OperationalCadence = {
  title: string
  duration: string
  focus: string
  attendees: string[]
  outcomes: string[]
}

export type OperationalSignal = {
  label: string
  value: string
  description: string
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

export type GovernanceProtocol = {
  title: string
  description: string
  safeguards: string[]
}

export type PlatformCapability = {
  title: string
  description: string
  signals: string[]
}

export type IncidentPlaybook = {
  title: string
  responseTime: string
  description: string
  stages: string[]
  outcome: string
}

export type TransformationStory = {
  id: string
  title: string
  client: string
  sector: string
  challenge: string
  interventions: string[]
  outcome: string
  quote: string
  speaker: string
}

export type ResilienceDrill = {
  title: string
  scenario: string
  cadence: string
  outcomes: string[]
}

export type ResilienceSignal = {
  label: string
  value: string
  description: string
}

export type ExecutiveBriefing = {
  title: string
  cadence: string
  description: string
  takeaways: string[]
}

export type ExecutiveIndicator = {
  label: string
  value: string
  context: string
}

export type AdvisoryExpert = {
  id: string
  name: string
  title: string
  coverage: string
  focus: string
  specializations: string[]
}

export type OnboardingStage = {
  id: string
  title: string
  duration: string
  focus: string
  description: string
  checkpoints: string[]
}

export type OnboardingMetric = {
  label: string
  value: string
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
  governance: {
    title: string
    subtitle: string
    protocols: GovernanceProtocol[]
  }
  support: {
    title: string
    subtitle: string
    channels: SupportChannel[]
  }
  slas: {
    title: string
    subtitle: string
    commitments: SlaCommitment[]
  }
  reporting: {
    title: string
    subtitle: string
    rhythms: ReportingRhythm[]
  }
  industries: {
    title: string
    subtitle: string
    sectors: IndustrySpotlight[]
  }
  transformations: {
    title: string
    subtitle: string
    stories: TransformationStory[]
  }
  operations: {
    title: string
    subtitle: string
    cadences: OperationalCadence[]
    signals: OperationalSignal[]
  }
  resilience: {
    title: string
    subtitle: string
    drills: ResilienceDrill[]
    signals: ResilienceSignal[]
    cta: {
      label: string
      description: string
    }
  }
  executive: {
    title: string
    subtitle: string
    briefings: ExecutiveBriefing[]
    indicators: ExecutiveIndicator[]
    cta: {
      label: string
      description: string
    }
  }
  advisory: {
    title: string
    subtitle: string
    experts: AdvisoryExpert[]
    contact: {
      label: string
      description: string
    }
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
  platform: {
    title: string
    subtitle: string
    capabilities: PlatformCapability[]
  }
  playbooks: {
    title: string
    subtitle: string
    items: IncidentPlaybook[]
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
  onboarding: {
    title: string
    subtitle: string
    stages: OnboardingStage[]
    metrics: OnboardingMetric[]
    ctaLabel: string
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
    governance: {
      title: 'Governance & risk controls',
      subtitle: 'The approvals, policies, and evidence we maintain so every action stands up to scrutiny.',
      protocols: [
        {
          title: 'Escalation charters',
          description:
            'Mapped decision makers with timeboxed approvals across marketing, legal, product, and security stakeholders.',
          safeguards: [
            'Live RACI tracker embedded in your workspace with ownership animations for quick scanning.',
            'Localized notification templates covering English, French, and Spanish audiences.',
            'Crisis stand-ups triggered in under 45 minutes with documented next checkpoints.',
          ],
        },
        {
          title: 'Change management runway',
          description:
            'Structured review windows and QA rituals that keep launches compliant without slowing experimentation velocity.',
          safeguards: [
            'Async briefs with redline history, risk scoring, and approval timelines.',
            'Dual-operator QA paired with channel-specific verification checklists.',
            'Automated regression alerts wired into dashboards, Slack, and email digests.',
          ],
        },
        {
          title: 'Evidence & audit vault',
          description:
            'Centralized archive of takedowns, approvals, measurement artifacts, and comms transcripts ready for regulators.',
          safeguards: [
            'Encrypted repository with quarterly access reviews and retention policies.',
            'Chain-of-custody logs for every incident response action and escalation.',
            'Board-ready summaries with localized executive commentary and CTA tracking.',
          ],
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
    slas: {
      title: 'Response times you can schedule around',
      subtitle: 'Founder-enforced SLAs keep incidents contained before they spiral across markets.',
      commitments: [
        {
          title: 'Critical incident triage',
          target: '<15 min first-response window',
          description:
            'Multilingual incident leads activate bridge rooms that align security, legal, and comms in real time.',
          coverage: 'Domain hijacks · phishing infra · viral misinformation spikes',
        },
        {
          title: 'Platform escalation launch',
          target: '<45 min to file and document escalations',
          description:
            'Traceremove advocates package evidence, legal context, and motion snippets for marketplaces and regulators.',
          coverage: 'App stores · marketplaces · ad networks · review platforms',
        },
        {
          title: 'Executive situational brief',
          target: '<4 h signed-off summary',
          description:
            'Founder team delivers an executive-ready brief with impact forecast, decision asks, and next sync cadence.',
          coverage: 'Board, investors, and global leadership stakeholders',
        },
      ],
    },
    reporting: {
      title: 'Reporting rituals that keep decisions obvious',
      subtitle: 'Every engagement includes layered analytics so operators, finance, and the board see the same picture.',
      rhythms: [
        {
          title: 'Executive momentum review',
          cadence: 'Weekly',
          description:
            'Founder-led huddle that synthesizes threat removals, demand generation lift, and resourcing requirements.',
          deliverables: [
            'Animated scorecard spotlighting pipeline impact, revenue protected, and review health.',
            'Risk register with owner assignments and probability/severity motion cues.',
            'Action log recap distributed to stakeholders within two hours.',
          ],
        },
        {
          title: 'Growth & trust analytics packet',
          cadence: 'Bi-weekly',
          description:
            'Ops + analytics crew compile experimentation learnings, content performance, and sentiment deltas.',
          deliverables: [
            'Looker Studio dashboards refreshed with annotated wins and losses.',
            'Channel-by-channel pacing model with budget + creative recommendations.',
            'Community and support intelligence summary with proactive response templates.',
          ],
        },
        {
          title: 'Always-on observability',
          cadence: 'Real-time',
          description:
            'Motion dashboards push live alerts, review queues, and reputation health scores across devices.',
          deliverables: [
            'Slack + email notifications for threat detections and SLA checkpoints.',
            '24/7 analytics portal with localized drilldowns and audit-ready exports.',
            'API + webhook feeds to sync with BI, CRM, and incident tooling.',
          ],
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
    transformations: {
      title: 'Transformation stories from the field',
      subtitle:
        'Representative engagements showing how our pods blend reputation defense, growth momentum, and executive enablement.',
      stories: [
        {
          id: 'latam-fintech',
          title: 'Neutralising fake review rings before a Series B roadshow',
          client: 'LatAm fintech marketplace',
          sector: 'Fintech',
          challenge:
            'Coordinated review farms tanked app store ratings and search snippets across Spanish- and Portuguese-language surfaces hours before investor meetings.',
          interventions: [
            'Launched multilingual takedown sprint across marketplaces, paid placements, and affiliate channels within four hours.',
            'Refreshed launch hub with animated proof dashboards, verified customer films, and CRO experiments to maintain conversion while trust recovered.',
            'Fed escalated disputes into CX, legal, and product telemetry to detect new anomalies and pre-empt future attacks.',
          ],
          outcome:
            'Recovered a 4.8★ blended rating inside six days and generated a 22% lift in qualified pipeline during the same quarter.',
          quote:
            'Traceremove choreographed growth, legal, and CX into one war room—we stayed on offense with motion-rich proof while Artur’s team deleted the noise.',
          speaker: 'Chief Growth Officer, LatAm fintech marketplace',
        },
        {
          id: 'eu-retail',
          title: 'Rebuilding cross-border trust after domain spoofing',
          client: 'European luxury retailer',
          sector: 'Retail & eCommerce',
          challenge:
            'Fraudulent storefronts in three languages siphoned deposits and created an avalanche of social backlash heading into peak season.',
          interventions: [
            'Spun up registrar, platform, and payment escalations with real-time dashboards for the executive suite.',
            'Deployed motion-enabled reassurance campaigns across paid social, CRM, and point-of-sale signage to calm high-value clients.',
            'Activated concierge pods on WhatsApp and Instagram with multilingual scripts and proof visuals to handle VIP outreach.',
          ],
          outcome:
            'Chargebacks fell 63% within two weeks and net promoter scores rebounded from 21 to 58 ahead of holiday trading.',
          quote:
            'Their animations and scripts helped frontline teams recover confidence fast—leadership finally had one view of risk, revenue, and response.',
          speaker: 'Global CX Director, European luxury retailer',
        },
        {
          id: 'na-cyber',
          title: 'Aligning security and marketing during a breach narrative',
          client: 'North American cybersecurity SaaS',
          sector: 'Cybersecurity',
          challenge:
            'A competitor amplified a leaked incident, stalling enterprise renewals and eroding analyst confidence.',
          interventions: [
            'Scripted coordinated executive briefings, analyst updates, and motion explainers translating remediation progress.',
            'Ran resilience simulations with sales and success leads to reframe the story around rapid detection and partnership.',
            'Delivered a GrowthSpark-powered microsite surfacing live SLAs, uptime, and customer sentiment metrics.',
          ],
          outcome:
            'Closed 94% of at-risk renewals and landed two net-new Fortune 500 deals within the quarter while the brand sentiment index rose 18 points.',
          quote:
            'Artur’s core team made sure our truth moved faster than speculation—the animations, dashboards, and rehearsed responses turned fear into momentum.',
          speaker: 'Chief Revenue Officer, cybersecurity SaaS',
        },
      ],
    },
    operations: {
      title: 'Operational rhythm that keeps every squad aligned',
      subtitle:
        'Founder-led cadences orchestrate trust, growth, and product momentum across time zones with clear ownership.',
      cadences: [
        {
          title: 'Monday command center',
          duration: '60 minutes',
          focus: 'Threat sweeps, demand pacing, and experiment approvals',
          attendees: [
            'Artur Ziganshin',
            'Growth lead',
            'Security engineer',
            'Lifecycle strategist',
          ],
          outcomes: [
            'Prioritized takedowns with owners, evidence packs, and deadlines.',
            'Updated experiment backlog with motion briefs and launch dates.',
            'Executive recap dispatched to stakeholders within two hours.',
          ],
        },
        {
          title: 'Midweek pulse',
          duration: '30 minutes',
          focus: 'Channel health, creative QA, and sentiment analytics',
          attendees: [
            'Channel operators',
            'Creative director',
            'Data analyst',
          ],
          outcomes: [
            'Green/yellow/red dashboard review with intervention triggers.',
            'Creative refresh decisions paired with asset production timelines.',
            'Customer feedback snippets routed to product and CX teams.',
          ],
        },
        {
          title: 'Friday executive standdown',
          duration: '25 minutes',
          focus: 'Momentum scorecard, escalations, and next-week runway',
          attendees: [
            'Founding team',
            'Client executives',
            'Finance partner',
          ],
          outcomes: [
            'Week-in-review narrative with quantified revenue protected.',
            'Escalation board status including pending legal or platform actions.',
            'Next-week calendar lock with owners and prep requirements.',
          ],
        },
      ],
      signals: [
        {
          label: 'Average incident resolution velocity',
          value: '3.2 hours',
          description: 'Mean time to neutralize critical spoofed domains or fake review spikes.',
        },
        {
          label: 'Experiment launch adherence',
          value: '94%',
          description: 'Percentage of scheduled growth launches that ship on time after QA.',
        },
        {
          label: 'Stakeholder satisfaction score',
          value: '9.4 / 10',
          description: 'Rolling feedback from leadership surveys covering responsiveness and clarity.',
        },
      ],
    },
    resilience: {
      title: 'War-room simulations that harden your reputation perimeter',
      subtitle:
        'We choreograph full-spectrum drills with your comms, legal, and product squads so every threat triggers decisive action.',
      drills: [
        {
          title: 'Marketplace integrity breach',
          scenario: 'Coordinated fake review ring and spoofed seller storefront attempt to erode trust overnight.',
          cadence: 'Monthly',
          outcomes: [
            'Live triage maps aligning legal, trust & safety, and lifecycle responses within 20 minutes.',
            'Localized comms scripts distributed to support teams across English, French, and Spanish queues.',
            'Remediation backlog prioritized with ROI impact scoring and owner assignments.',
          ],
        },
        {
          title: 'Executive impersonation surge',
          scenario: 'Social and messaging clones target investors and press with fabricated statements.',
          cadence: 'Quarterly',
          outcomes: [
            'Rapid takedown toolkit rehearsed with LinkedIn, Instagram, and WhatsApp escalation partners.',
            'Investor and media notification flows refined with timestamped sign-offs from leadership.',
            'Forensics logging checklist validated for legal, security, and insurance stakeholders.',
          ],
        },
        {
          title: 'Product vulnerability narrative',
          scenario: 'Anonymous forum leak claims critical security flaw and spreads across tech press.',
          cadence: 'Bi-weekly micro-drills',
          outcomes: [
            'Engineering, product, and PR roundtable walks through patch timelines and evidence releases.',
            'Customer reassurance email/SMS copy iterated with compliance and privacy approvals.',
            'Dashboard instrumentation reviewed to ensure live status and uptime visuals are ready to publish.',
          ],
        },
      ],
      signals: [
        {
          label: 'Average drill participation',
          value: '42 stakeholders',
          description: 'Cross-functional leaders and operators trained per engagement, across three primary regions.',
        },
        {
          label: 'Runbook update velocity',
          value: '48 hours',
          description: 'Time to ship refreshed playbooks and knowledge base articles after each simulation.',
        },
        {
          label: 'Confidence delta post-drill',
          value: '+31 pts',
          description: 'Lift in self-reported readiness from executive sponsors after facilitated retros.',
        },
      ],
      cta: {
        label: 'Schedule a resilience drill',
        description: 'Invite your core leaders—we facilitate the session, capture gaps, and deliver an action report within 48 hours.',
      },
    },
    executive: {
      title: 'Executive briefing rituals',
      subtitle:
        'Founder & CEO Artur Ziganshin keeps leadership in the loop with motion-rich recaps, decision logs, and proactive asks.',
      briefings: [
        {
          title: 'Monday command briefing',
          cadence: 'Weekly · 30 minutes',
          description:
            'Kick off the week with Artur guiding threat updates, campaign momentum, and approvals required to stay ahead.',
          takeaways: [
            'Risk radar review with critical incidents, status, and escalation paths.',
            'Growth and retention dashboard pulses highlighting revenue being protected.',
            'Decision register outlining owners, deadlines, and supporting context.',
          ],
        },
        {
          title: 'Mid-month momentum forum',
          cadence: 'Bi-weekly · 45 minutes',
          description:
            'Deep-dive on experiments, creative performance, and resource pivots with data-rich storytelling.',
          takeaways: [
            'Experiment scorecards with animation overlays showing wins and next bets.',
            'Creative and narrative heatmap across English, French, and Spanish markets.',
            'Resourcing recommendations plus approvals needed to accelerate.',
          ],
        },
        {
          title: 'Board prep studio',
          cadence: 'Monthly · 40 minutes',
          description:
            'Founder team packages executive-ready decks, proof points, and response language ahead of investor or board reviews.',
          takeaways: [
            'Motion-designed board slides summarizing trust, growth, and pipeline health.',
            'Scenario analysis with modeled revenue impact and mitigation options.',
            'Follow-up toolkit including talking points, media briefs, and Q&A support.',
          ],
        },
      ],
      indicators: [
        {
          label: 'Board deck turnaround',
          value: '< 24 hours',
          context: 'Average time to deliver executive-ready summaries after an incident escalates.',
        },
        {
          label: 'Leadership satisfaction',
          value: '98% CSAT',
          context: 'Six-month rolling feedback from founders, CMOs, and COOs we support.',
        },
        {
          label: 'Escalation rehearsals',
          value: '12 per year',
          context: 'Simulations facilitated with your executive team to keep crisis playbooks sharp.',
        },
      ],
      cta: {
        label: 'Book an executive preview',
        description:
          'Request a private walkthrough with Artur Ziganshin to see how our briefings keep leadership aligned during high velocity moments.',
      },
    },
    advisory: {
      title: 'Strategist advisory council on standby',
      subtitle:
        'Tap the operators who solve your hardest brand, growth, and trust challenges across English, French, and Spanish markets.',
      experts: [
        {
          id: 'artur-ziganshin',
          name: 'Artur Ziganshin',
          title: 'Founder & CEO',
          coverage: 'Global · English / French / Spanish',
          focus:
            'Leads every diagnostic and crisis choreography, shaping executive-ready narratives and governance with your leadership team.',
          specializations: [
            'High-stakes incident command and board alignment.',
            'Go-to-market relaunch programs with motion storytelling.',
            'Cross-border reputation recovery and brand architecture.',
          ],
        },
        {
          id: 'clara-martel',
          name: 'Clara Martel',
          title: 'Principal, Reputation Systems',
          coverage: 'EMEA & North America',
          focus:
            'Architects monitoring fabrics, review authenticity programs, and concierge enablement rituals tailored to regulated industries.',
          specializations: [
            'Marketplace integrity sweeps and seller recovery.',
            'CX and community operations choreography.',
            'Legal, registrar, and platform escalation playbooks.',
          ],
        },
        {
          id: 'diego-santos',
          name: 'Diego Santos',
          title: 'Director, Growth Experiments',
          coverage: 'LATAM & US',
          focus:
            'Pairs experimentation, paid media, and lifecycle automation with trust signals so revenue rebounds quickly after attacks.',
          specializations: [
            'Full-funnel experiment design and CRO.',
            'Paid media firewalling and attribution modeling.',
            'Localized storytelling and enablement in Spanish and English.',
          ],
        },
      ],
      contact: {
        label: 'Meet the advisory team',
        description:
          'Share your brief and we will assemble the right mix of strategists for a chemistry session within 24 hours.',
      },
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
    platform: {
      title: 'Platform intelligence you inherit',
      subtitle:
        'Automated detection, analytics, and governance layers deploy with every engagement so your team gains instant visibility.',
      capabilities: [
        {
          title: 'Real-time risk graph',
          description:
            'Unified monitoring index that maps impersonations, review anomalies, and escalation owners across every market we support.',
          signals: [
            '50M+ sources scored with geo and language weighting.',
            'Automated takedown triggers for domains, ads, and social clones.',
            'Registrar + platform outreach sequences preloaded for legal teams.',
          ],
        },
        {
          title: 'Trust analytics workspace',
          description:
            'Looker Studio + BigQuery environment blending sentiment, funnel, and revenue telemetry with motion indicators for leadership.',
          signals: [
            'Executive dashboards refreshed hourly with annotation trails.',
            'API + webhook feeds syncing to CRM, CDP, and incident tooling.',
            'Automated variance alerts piping into Slack, Teams, and email.',
          ],
        },
        {
          title: 'Automation command center',
          description:
            'Low-code workflows orchestrating response rooms, approvals, and enablement drops without adding headcount.',
          signals: [
            'Scenario-based playbooks triggered by risk severity bands.',
            'Motion status boards tracking owner, deadline, and confidence.',
            'Translation + localization automations for EN/FR/ES releases.',
          ],
        },
      ],
    },
    playbooks: {
      title: 'Response playbooks on standby',
      subtitle:
        'Founder-authored sequences keep every incident contained while growth experiments keep shipping in parallel.',
      items: [
        {
          title: 'Spoofed domain takedown',
          responseTime: '15-minute first action',
          description:
            'Domain desk synchronizes legal counsel, paid media, and registrar partners to remove or reroute malicious clones.',
          stages: [
            'Signal detection flags registrar, hosting, and DNS data with screenshots.',
            'Automated outreach packages dispatch to registrar and ad platforms.',
            'Growth pod refreshes paid + organic creatives to reclaim traffic.',
          ],
          outcome: 'Malicious domain removed or redirected with zero lead downtime.',
        },
        {
          title: 'Fake review surge suppression',
          responseTime: '60-minute containment window',
          description:
            'Multilingual analysts verify authenticity, coordinate customer outreach, and trigger platform enforcement sweeps.',
          stages: [
            'Reviewer audit cross-references CRM, purchase, and support logs.',
            'Verified customers receive guided re-engagement prompts and templates.',
            'Legal + PR teams deploy narrative updates across press and social.',
          ],
          outcome: 'Authentic sentiment restored with trendline dashboards documenting recovery.',
        },
        {
          title: 'Executive impersonation response',
          responseTime: 'Under 30 minutes',
          description:
            'Security, comms, and enablement squads collapse on a shared channel to neutralize spoofed profiles targeting leadership.',
          stages: [
            'Automated takedown requests fire to social, messaging, and marketplace platforms.',
            'Stakeholder comms kit with scripts deploys to investors, partners, and teams.',
            'Trust campaigns refresh paid/owned channels with verified messaging.',
          ],
          outcome: 'False persona removed and reputation pulse stabilised within hours.',
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
    onboarding: {
      title: 'Founder-led onboarding that ships value in days',
      subtitle:
        'A multilingual strike team choreographs discovery, stabilization, and growth without waiting on paperwork.',
      stages: [
        {
          id: 'signal-sync',
          title: 'Signal sync & discovery',
          duration: 'Day 0 – Day 3',
          focus: 'Capture the baseline and align escalation rituals across teams.',
          description:
            'Founder Artur Ziganshin convenes marketing, product, legal, and CX leads to map narratives, risks, and desired outcomes in every language.',
          checkpoints: [
            'Multilingual kickoff with leadership and operational owners inside 24 hours.',
            'Access, data, and monitoring credentials validated across tools and regions.',
            'Threat landscape benchmarked with severity scoring and historical incidents.',
            'Escalation tree, working cadences, and success metrics ratified.',
          ],
        },
        {
          id: 'stabilize-shield',
          title: 'Stabilize & shield priority surfaces',
          duration: 'Day 4 – Day 10',
          focus: 'Neutralize urgent threats while establishing trust signals.',
          description:
            'Review, domain, and social desks deploy takedowns, publish clarifying narratives, and enable frontline teams to respond with confidence.',
          checkpoints: [
            'Rapid takedown sprints across marketplaces, ad platforms, and registrars.',
            'Crisis messaging updated with localized scripts and stakeholder briefs.',
            'Paid and owned channels refreshed with reassurance campaigns.',
            'Daily momentum notes circulate to executives with clear asks.',
          ],
        },
        {
          id: 'momentum-build',
          title: 'Momentum build & experiment launch',
          duration: 'Week 2 – Week 4',
          focus: 'Pair growth experimentation with ongoing protection to regain share.',
          description:
            'Growth pods launch CRO tests, lifecycle nurtures, and earned media moves while intelligence analysts monitor sentiment shifts.',
          checkpoints: [
            'Prioritized experiment backlog with owners, dependencies, and KPIs.',
            'GrowthSpark dashboards activated with real-time sentiment overlays.',
            'Community and review response playbooks rehearsed with operators.',
            'Partnership, PR, and paid sequences coordinated around wins.',
          ],
        },
        {
          id: 'scale-embed',
          title: 'Scale & embed rituals',
          duration: 'Month 2 onward',
          focus: 'Transfer playbooks, automate governance, and expand protection coverage.',
          description:
            'Enablement crews train internal teams, codify governance, and prepare future market launches with localized systems.',
          checkpoints: [
            'Training sprints for regional teams with recorded labs and office hours.',
            'Automation and integration workstreams finalize data sharing and alerts.',
            'Quarterly executive reviews lock next-wave roadmap and investment cases.',
            'Shared command center transitions with co-ownership and documentation.',
          ],
        },
      ],
      metrics: [
        {
          label: 'Time to first remediation',
          value: '46h avg',
          description: 'Average window from signature to first takedown, review reversal, or SERP suppression.',
        },
        {
          label: 'Stakeholder satisfaction',
          value: '4.8 / 5',
          description: 'Average onboarding score from executive sponsors across English, French, and Spanish markets.',
        },
        {
          label: 'Multilingual readiness',
          value: '3 desks live',
          description: 'Dedicated English, French, and Spanish strategists activated from day one.',
        },
      ],
      ctaLabel: 'Book your onboarding run-through',
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
    governance: {
      title: 'Gouvernance & contrôles des risques',
      subtitle: 'Nous documentons décisions, politiques et preuves pour que chaque action résiste aux audits.',
      protocols: [
        {
          title: 'Chartes d’escalade',
          description:
            'Cartographie des décideurs avec jalons d’approbation chronométrés côté marketing, juridique, produit et sécurité.',
          safeguards: [
            'RACI vivant intégré à vos espaces de travail avec animations de statut.',
            'Templates de notifications localisés EN / FR / ES prêts à diffuser.',
            'Stand-ups de crise déclenchés en moins de 45 minutes avec prochaines étapes tracées.',
          ],
        },
        {
          title: 'Runway de change management',
          description:
            'Fenêtres de revue structurées et rituels QA qui maintiennent la conformité sans brider l’expérimentation.',
          safeguards: [
            'Briefs asynchrones avec historique des redlines, scoring de risque et échéances d’approbation.',
            'QA en binôme s’appuyant sur des checklists de vérification par canal.',
            'Alertes de régression automatisées reliées à vos dashboards, Slack et emails.',
          ],
        },
        {
          title: 'Coffre preuves & audits',
          description:
            'Archive centralisée des retraits, validations, artefacts de mesure et transcripts prêts pour autorités et comex.',
          safeguards: [
            'Répertoire chiffré avec revue d’accès trimestrielle et politiques de rétention.',
            'Journal de chaîne de garde pour chaque action de réponse et escalade.',
            'Synthèses exécutives multilingues prêtes pour board avec suivi des décisions.',
          ],
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
    slas: {
      title: 'Des engagements de réponse sur lesquels vous pouvez compter',
      subtitle: 'Les SLA pilotés par le fondateur contiennent les incidents avant qu’ils ne se propagent sur vos marchés.',
      commitments: [
        {
          title: 'Triage incident critique',
          target: '<15 min pour la première réponse',
          description:
            'Leads incidents multilingues ouvrent une war room qui synchronise sécurité, juridique et communication en direct.',
          coverage: 'Détournements de domaines · infrastructures de phishing · vagues de désinformation',
        },
        {
          title: 'Lancement d’escalade plateforme',
          target: '<45 min pour déposer dossiers et preuves',
          description:
            'Les avocats Traceremove assemblent preuves, contexte légal et extraits motion pour marketplaces et régulateurs.',
          coverage: 'Stores applicatifs · marketplaces · régies publicitaires · plateformes d’avis',
        },
        {
          title: 'Brief de situation exécutif',
          target: '<4 h pour un résumé validé',
          description:
            'L’équipe fondatrice livre un mémo exécutif avec projection d’impact, décisions attendues et prochaine synchronisation.',
          coverage: 'Comité de direction, investisseurs et leadership global',
        },
      ],
    },
    reporting: {
      title: 'Des rituels de reporting qui facilitent les décisions',
      subtitle: 'Chaque mission inclut des couches d’analytics pour aligner opérations, finance et gouvernance.',
      rhythms: [
        {
          title: 'Revue momentum exécutive',
          cadence: 'Hebdomadaire',
          description:
            'Revue pilotée par le fondateur qui synthétise retraits de menaces, lift de la demande et besoins en ressources.',
          deliverables: [
            'Scorecard animée mettant en lumière revenus protégés, pipeline et santé des avis.',
            'Registre des risques avec propriétaires, probabilités et niveaux d’alerte.',
            'Compte rendu actionnable distribué aux parties prenantes sous deux heures.',
          ],
        },
        {
          title: 'Packet analytics croissance & confiance',
          cadence: 'Bi-hebdomadaire',
          description:
            'Équipe ops + analytics rassemble apprentissages d’expérimentation, performances contenus et deltas de sentiment.',
          deliverables: [
            'Dashboards Looker Studio annotés avec victoires et axes d’optimisation.',
            'Modèle de pacing par canal avec recommandations budget + création.',
            'Synthèse intelligence communauté & support avec scripts proactifs.',
          ],
        },
        {
          title: 'Observabilité continue',
          cadence: 'Temps réel',
          description:
            'Dashboards animés poussent alertes, files d’avis et score de santé réputationnel sur tous les devices.',
          deliverables: [
            'Notifications Slack + email pour détections et checkpoints SLA.',
            'Portail analytics 24/7 avec vues localisées et exports auditables.',
            'Flux API + webhooks connectés à vos outils BI, CRM et incident.',
          ],
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
    transformations: {
      title: 'Transformations orchestrées sur le terrain',
      subtitle:
        'Aperçu d’engagements où nos pods ont combiné défense de la réputation, accélération de la croissance et alignement exécutif.',
      stories: [
        {
          id: 'latam-fintech',
          title: 'Neutraliser des fermes d’avis avant un roadshow Série B',
          client: 'Place de marché fintech LATAM',
          sector: 'Fintech',
          challenge:
            'Des réseaux de faux avis ont fait chuter les notes d’app et les extraits search en espagnol et portugais à la veille des rencontres investisseurs.',
          interventions: [
            'Lancement d’un sprint de retraits multilingues couvrant stores, affiliés payants et partenaires influence en moins de quatre heures.',
            'Refonte du hub de lancement avec dashboards animés de preuves, témoignages clients filmés et expériences CRO pour maintenir la conversion.',
            'Boucle CX / juridique / produit alimentée par les litiges remontés pour détecter les nouvelles anomalies et renforcer les garde-fous.',
          ],
          outcome:
            'Note moyenne revenue à 4,8★ en six jours et +22 % de pipeline qualifié sur le trimestre.',
          quote:
            'Traceremove a mis croissance, juridique et CX dans la même war room — Artur et son équipe ont supprimé le bruit pendant que nous gardions l’offensive.',
          speaker: 'Chief Growth Officer, marketplace fintech LATAM',
        },
        {
          id: 'eu-retail',
          title: 'Reconstruire la confiance transfrontalière après du spoofing',
          client: 'Retailer luxe européen',
          sector: 'Retail & e-commerce',
          challenge:
            'Des boutiques frauduleuses dans trois langues détournaient des acomptes et déclenchaient une tempête sur les réseaux avant la haute saison.',
          interventions: [
            'Escalade coordonnée auprès des registrars, plateformes et PSP avec dashboards temps réel pour le comité de direction.',
            'Campagnes de réassurance animées sur paid social, CRM et PLV pour apaiser les client·es premium.',
            'Pods concierge activés sur WhatsApp et Instagram avec scripts multilingues et preuves visuelles pour gérer les VIP.',
          ],
          outcome:
            'Les rétrofacturations ont chuté de 63 % en deux semaines et le NPS est passé de 21 à 58 avant les fêtes.',
          quote:
            'Leur motion design et leurs scripts ont redonné confiance aux équipes terrain — la direction disposait enfin d’une vision unifiée du risque et du revenu.',
          speaker: 'Directrice CX globale, retailer luxe européen',
        },
        {
          id: 'na-cyber',
          title: 'Aligner sécurité et marketing pendant un récit de brèche',
          client: 'Editeur SaaS cybersécurité Amérique du Nord',
          sector: 'Cybersécurité',
          challenge:
            'Un concurrent amplifiait une fuite pour freiner les renouvellements enterprise et semer le doute chez les analystes.',
          interventions: [
            'Scénarisation des briefs exécutifs, updates analystes et explainers animés détaillant la remédiation.',
            'Simulations de résilience menées avec ventes et succès client pour repositionner la narration autour de la détection rapide.',
            'Microsite GrowthSpark diffusant SLAs, uptime et sentiment clients en temps réel.',
          ],
          outcome:
            '94 % des renouvellements à risque sécurisés et deux nouveaux comptes Fortune 500 signés sur le trimestre, avec +18 pts d’indice de sentiment.',
          quote:
            'L’équipe d’Artur a fait circuler notre vérité plus vite que la rumeur — animations, dashboards et répétitions ont transformé la peur en momentum.',
          speaker: 'Chief Revenue Officer, éditeur SaaS cybersécurité',
        },
      ],
    },
    operations: {
      title: 'Rythme opérationnel qui aligne chaque équipe',
      subtitle:
        'Des cadences pilotées par le fondateur orchestrent confiance, croissance et produit sur tous les fuseaux horaires.',
      cadences: [
        {
          title: 'Command center du lundi',
          duration: '60 minutes',
          focus: 'Veille des menaces, pilotage de la demande et arbitrage des expériences',
          attendees: [
            'Artur Ziganshin',
            'Lead croissance',
            'Ingénieur sécurité',
            'Stratège lifecycle',
          ],
          outcomes: [
            'Priorisation des retraits avec responsables, dossiers de preuves et échéances.',
            'Backlog d’expériences mis à jour avec briefs motion et dates de lancement.',
            'Synthèse exécutive envoyée aux parties prenantes sous deux heures.',
          ],
        },
        {
          title: 'Pulse de mi-semaine',
          duration: '30 minutes',
          focus: 'Santé des canaux, QA créative et analytics de sentiment',
          attendees: [
            'Opérateurs de canaux',
            'Directeur créatif',
            'Analyste data',
          ],
          outcomes: [
            'Revue du tableau de bord vert / jaune / rouge avec déclencheurs d’intervention.',
            'Décisions de refresh créatif accompagnées de plannings de production.',
            'Remontées clients routées vers les équipes produit et CX.',
          ],
        },
        {
          title: 'Standdown exécutif du vendredi',
          duration: '25 minutes',
          focus: 'Scorecard de momentum, escalades et préparation de la semaine suivante',
          attendees: [
            'Équipe fondatrice',
            'Dirigeants client',
            'Partenaire finance',
          ],
          outcomes: [
            'Narratif hebdomadaire avec revenus protégés quantifiés.',
            'Statut du board d’escalade incluant actions juridiques ou plateformes en cours.',
            'Calendrier de la semaine suivante verrouillé avec responsables et besoins de préparation.',
          ],
        },
      ],
      signals: [
        {
          label: 'Vitesse moyenne de résolution des incidents',
          value: '3,2 heures',
          description: 'Temps moyen pour neutraliser domaines usurpés ou vagues de faux avis critiques.',
        },
        {
          label: 'Respect des lancements d’expériences',
          value: '94 %',
          description: 'Part des expérimentations planifiées qui partent à l’heure après QA.',
        },
        {
          label: 'Satisfaction des parties prenantes',
          value: '9,4 / 10',
          description: 'Feedback continu des directions sur notre réactivité et la clarté des décisions.',
        },
      ],
    },
    resilience: {
      title: 'Simulations de crise qui blindent votre périmètre de réputation',
      subtitle:
        'Nous orchestrons des exercices grandeur nature avec vos équipes communication, juridique et produit afin que chaque menace déclenche une réponse coordonnée.',
      drills: [
        {
          title: 'Sabotage marketplace coordonné',
          scenario: 'Anneaux de faux avis et boutiques frauduleuses attaquent votre catalogue dans plusieurs langues.',
          cadence: 'Mensuel',
          outcomes: [
            'Cartographie de triage en direct alignant juridique, trust & safety et lifecycle en moins de 20 minutes.',
            'Scripts de communication localisés diffusés aux équipes support FR / EN / ES.',
            'Backlog de remédiation priorisé avec scoring d’impact et responsables identifiés.',
          ],
        },
        {
          title: 'Usurpation d’exécutif',
          scenario: 'Clones sociaux et messageries ciblent investisseurs et presse avec de faux communiqués.',
          cadence: 'Trimestriel',
          outcomes: [
            'Kit de retrait accéléré répété avec partenaires LinkedIn, Instagram et WhatsApp.',
            'Flux d’information investisseurs / médias affiné avec validations horodatées du leadership.',
            'Checklist de traçabilité validée pour juridique, sécurité et assurances.',
          ],
        },
        {
          title: 'Narratif faille produit',
          scenario: 'Une fuite anonyme prétend révéler une vulnérabilité critique et se propage dans la presse tech.',
          cadence: 'Micro-drills bi-mensuels',
          outcomes: [
            'Table ronde engineering / produit / PR sur calendrier de patch et publication des preuves.',
            'Messages clients email / SMS iterés avec conformité et privacy pour rassurer rapidement.',
            'Vérification des dashboards statut pour garantir disponibilité des visuels uptime et sécurité.',
          ],
        },
      ],
      signals: [
        {
          label: 'Participants moyens par exercice',
          value: '42 dirigeants & opérateurs',
          description: 'Leaders multi-fonctions formés par engagement sur nos trois régions principales.',
        },
        {
          label: 'Mise à jour des playbooks',
          value: '48 heures',
          description: 'Délai pour livrer playbooks et bases de connaissance révisés après chaque simulation.',
        },
        {
          label: 'Gain de confiance post-exercice',
          value: '+31 pts',
          description: 'Progression moyenne du score de confiance déclaré par les sponsors exécutifs.',
        },
      ],
      cta: {
        label: 'Programmer un exercice de résilience',
        description: 'Invitez vos leaders clés — nous animons la session, identifions les écarts et livrons un rapport d’actions sous 48 h.',
      },
    },
    executive: {
      title: 'Rituels de briefing exécutif',
      subtitle:
        'Artur Ziganshin pilote des syncs animés qui gardent le comité de direction aligné sur la protection de marque et la vitesse de croissance.',
      briefings: [
        {
          title: 'Briefing de commandement du lundi',
          cadence: 'Hebdomadaire · 30 minutes',
          description:
            'Ouverture de semaine menée par le fondateur avec mise à jour des menaces, dynamique des campagnes et arbitrages urgents.',
          takeaways: [
            'Revue du radar de risques avec incidents critiques, statut et voies d’escalade.',
            'Pulse des dashboards croissance & rétention mettant en lumière les revenus protégés.',
            'Registre des décisions avec propriétaires, échéances et contexte.',
          ],
        },
        {
          title: 'Forum momentum de mi-mois',
          cadence: 'Bi-hebdomadaire · 45 minutes',
          description:
            'Analyse approfondie des expérimentations, performances créatives et besoins de ressources appuyée par nos visualisations.',
          takeaways: [
            'Scorecards d’expériences avec animations illustrant victoires et prochains paris.',
            'Carte de chaleur narrative couvrant les marchés anglais, français et espagnol.',
            'Recommandations de ressources et validations nécessaires pour accélérer.',
          ],
        },
        {
          title: 'Studio préparation board',
          cadence: 'Mensuel · 40 minutes',
          description:
            'L’équipe fondatrice assemble decks exécutifs, preuves et éléments de langage avant vos revues investisseurs ou conseil.',
          takeaways: [
            'Slides animées synthétisant confiance, croissance et santé pipeline.',
            'Analyses de scénarios avec projections de revenus et options de mitigation.',
            'Kit de suivi incluant Q&R, briefs media et points de discussion.',
          ],
        },
      ],
      indicators: [
        {
          label: 'Délai de deck board',
          value: '< 24 h',
          context: 'Temps moyen pour livrer une synthèse exécutive après escalade.',
        },
        {
          label: 'Satisfaction leadership',
          value: '98 % CSAT',
          context: 'Feedback glissant sur 6 mois des fondateurs, CMO et COO accompagnés.',
        },
        {
          label: 'Exercices d’escalade',
          value: '12 par an',
          context: 'Simulations animées avec votre direction pour garder les playbooks affûtés.',
        },
      ],
      cta: {
        label: 'Planifier un briefing exécutif',
        description:
          'Demandez une session privée avec Artur Ziganshin afin de découvrir comment nos briefings maintiennent l’alignement en phase critique.',
      },
    },
    advisory: {
      title: 'Conseil stratégique mobilisable à la demande',
      subtitle:
        'Activez les opérateurs qui résolvent vos défis de marque, de croissance et de confiance sur les marchés anglophones, francophones et hispanophones.',
      experts: [
        {
          id: 'artur-ziganshin',
          name: 'Artur Ziganshin',
          title: 'Fondateur & CEO',
          coverage: 'Global · anglais / français / espagnol',
          focus:
            'Pilote chaque diagnostic et chorégraphie de crise, en façonnant avec vos dirigeants des narratifs exécutifs et des cadres de gouvernance.',
          specializations: [
            'Commandement d’incident critique et alignement board.',
            'Relances go-to-market avec storytelling animé.',
            'Reconstruction de réputation multi-pays et architecture de marque.',
          ],
        },
        {
          id: 'clara-martel',
          name: 'Clara Martel',
          title: 'Principal, systèmes de réputation',
          coverage: 'EMEA & Amérique du Nord',
          focus:
            'Conçoit des tissus de monitoring, des programmes d’authenticité avis et des rituels concierge adaptés aux secteurs régulés.',
          specializations: [
            'Assainissement des marketplaces et récupération vendeurs.',
            'Orchestration CX et communautés multilingues.',
            'Playbooks d’escalade juridique, registrar et plateformes.',
          ],
        },
        {
          id: 'diego-santos',
          name: 'Diego Santos',
          title: 'Director, growth experiments',
          coverage: 'LATAM & États-Unis',
          focus:
            'Couple expérimentation, paid media et automation lifecycle avec les signaux de confiance pour restaurer le revenu rapidement.',
          specializations: [
            'Design d’expériences full-funnel et CRO.',
            'Pare-feu paid media et modélisation d’attribution.',
            'Storytelling localisé et enablement en espagnol et anglais.',
          ],
        },
      ],
      contact: {
        label: 'Rencontrer le conseil',
        description:
          'Partagez votre contexte : nous réunissons la bonne combinaison de stratèges pour une session de cadrage sous 24 heures.',
      },
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
    platform: {
      title: 'Plateforme d’intelligence livrée avec la mission',
      subtitle:
        'Chaque mandat active nos couches de détection, d’analytics et de gouvernance afin que vos équipes disposent d’une visibilité instantanée.',
      capabilities: [
        {
          title: 'Graphe de risque temps réel',
          description:
            'Index unifié qui cartographie usurpations, anomalies d’avis et propriétaires d’escalade sur vos marchés cibles.',
          signals: [
            '50M+ sources scorées avec pondération géographique et linguistique.',
            'Déclencheurs automatiques pour retraits de domaines, annonces et clones sociaux.',
            'Séquences d’escalade pré-bâties pour registraires, marketplaces et équipes légales.',
          ],
        },
        {
          title: 'Workspace analytics confiance',
          description:
            'Environnement Looker Studio + BigQuery qui fusionne sentiment, funnels et revenus avec des indicateurs animés pour votre direction.',
          signals: [
            'Dashboards exécutifs rafraîchis chaque heure avec pistes d’annotation.',
            'Flux API + webhooks synchronisés avec CRM, CDP et outils incidents.',
            'Alertes de variance automatisées vers Slack, Teams et email.',
          ],
        },
        {
          title: 'Command center automatisation',
          description:
            'Workflows low-code qui orchestrent salles de crise, validations et livrables d’enablement sans ajouter de charge opérationnelle.',
          signals: [
            'Playbooks déclenchés selon le niveau de sévérité des risques.',
            'Tableaux de statut animés suivant responsables, échéances et confiance.',
            'Automatisations de traduction pour lancements EN/FR/ES et communication interne.',
          ],
        },
      ],
    },
    playbooks: {
      title: 'Playbooks de réponse prêts à l’emploi',
      subtitle:
        'Les séquences rédigées par la direction contiennent chaque incident pendant que vos initiatives croissance continuent.',
      items: [
        {
          title: 'Retrait de domaine usurpé',
          responseTime: 'Premières actions en 15 minutes',
          description:
            'Desk domaines synchronise juridique, paid media et registraires pour supprimer ou rediriger les clones malveillants.',
          stages: [
            'Détection signale données registrar, hébergeur et DNS avec captures.',
            'Dossiers d’escalade automatisés envoyés aux registraires et plateformes pub.',
            'Squad growth rafraîchit créas payées et SEO pour récupérer le trafic.',
          ],
          outcome: 'Domaine frauduleux retiré ou redirigé sans interruption de leads.',
        },
        {
          title: 'Suppression d’une vague de faux avis',
          responseTime: 'Fenêtre de confinement de 60 minutes',
          description:
            'Analystes multilingues vérifient l’authenticité, contactent les clients et déclenchent les actions des plateformes.',
          stages: [
            'Audit des auteurs croisant CRM, historiques d’achat et support.',
            'Clients vérifiés reçoivent prompts et scripts pour rétablir la vérité.',
            'Juridique + PR déploient mises à jour narratives sur presse et réseaux.',
          ],
          outcome: 'Sentiment authentique restauré avec dashboards prouvant la reprise.',
        },
        {
          title: 'Riposte à l’impersonation exécutive',
          responseTime: 'Moins de 30 minutes',
          description:
            'Équipes sécurité, communication et enablement se réunissent pour neutraliser les profils usurpant vos dirigeants.',
          stages: [
            'Requêtes de retrait automatiques vers réseaux sociaux, messageries et marketplaces.',
            'Kit de communication déployé auprès d’investisseurs, partenaires et équipes internes.',
            'Campagnes confiance rafraîchissent owned & paid media avec messages vérifiés.',
          ],
          outcome: 'Fausse identité supprimée et pouls réputationnel stabilisé en quelques heures.',
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
    onboarding: {
      title: 'Onboarding fondateur déployé en quelques jours',
      subtitle:
        'Une escouade multilingue orchestre découverte, stabilisation et croissance sans latence opérationnelle.',
      stages: [
        {
          id: 'synchronisation-signal',
          title: 'Synchronisation des signaux & découverte',
          duration: 'Jour 0 – Jour 3',
          focus: 'Capturer la base et aligner les rituels d’escalade entre équipes.',
          description:
            'Artur Ziganshin réunit marketing, produit, juridique et CX pour cartographier récits, risques et ambitions dans chaque langue.',
          checkpoints: [
            'Kickoff multilingue avec direction et owners opérationnels sous 24 h.',
            'Accès, données et credentials monitoring validés sur vos outils et régions.',
            'Cartographie du paysage de menaces avec scoring de sévérité et incidents passés.',
            'Arbre d’escalade, cadences de travail et indicateurs de succès ratifiés.',
          ],
        },
        {
          id: 'stabiliser-proteger',
          title: 'Stabiliser & protéger les surfaces prioritaires',
          duration: 'Jour 4 – Jour 10',
          focus: 'Neutraliser les urgences tout en réinstallant des signaux de confiance.',
          description:
            'Desks avis, domaines et social lancent retraits, narratifs clarifiants et enablement terrain pour répondre avec assurance.',
          checkpoints: [
            'Sprints de retrait rapides sur marketplaces, plateformes pub et registraires.',
            'Messagerie de crise mise à jour avec scripts localisés et briefs parties prenantes.',
            'Canaux paid & owned rafraîchis avec campagnes de réassurance.',
            'Notes momentum quotidiennes aux dirigeants avec décisions attendues.',
          ],
        },
        {
          id: 'momentum-experiments',
          title: 'Construire le momentum & lancer les expériences',
          duration: 'Semaine 2 – Semaine 4',
          focus: 'Associer expérimentation croissance et protection continue pour regagner des parts.',
          description:
            'Pods growth activent tests CRO, nurturing et earned media tandis que les analystes surveillent l’évolution du sentiment.',
          checkpoints: [
            'Backlog d’expérimentations priorisé avec owners, dépendances et KPIs.',
            'Dashboards GrowthSpark activés avec overlays sentiment temps réel.',
            'Playbooks réponse communauté & avis répétés avec vos opérateurs.',
            'Séquences partenariats, PR et paid coordonnées autour des victoires.',
          ],
        },
        {
          id: 'scale-ancrer',
          title: 'Scaler & ancrer les rituels',
          duration: 'Mois 2 et au-delà',
          focus: 'Transférer les playbooks, automatiser la gouvernance et étendre la couverture.',
          description:
            'Les équipes enablement forment vos talents, codifient la gouvernance et préparent les prochains lancements marchés.',
          checkpoints: [
            'Bootcamps pour équipes régionales avec labs enregistrés et office hours.',
            'Travaux d’automatisation & intégration finalisant partage de données et alertes.',
            'Revues exécutives trimestrielles verrouillant roadmap et business case.',
            'Transition du command center partagé avec co-ownership et documentation.',
          ],
        },
      ],
      metrics: [
        {
          label: 'Temps jusqu’à la première remédiation',
          value: '46 h moy.',
          description: 'Fenêtre moyenne entre signature et premier retrait, renversement d’avis ou suppression SERP.',
        },
        {
          label: 'Satisfaction des parties prenantes',
          value: '4,8 / 5',
          description: 'Score onboarding moyen fourni par les sponsors exécutifs sur nos marchés EN/FR/ES.',
        },
        {
          label: 'Prêt multilingue',
          value: '3 desks actifs',
          description: 'Stratèges natifs anglais, français et espagnol opérationnels dès le jour 1.',
        },
      ],
      ctaLabel: 'Réserver votre session d’onboarding',
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
    governance: {
      title: 'Gobernanza y controles de riesgo',
      subtitle: 'Documentamos decisiones, políticas y evidencias para que cada acción resista auditorías.',
      protocols: [
        {
          title: 'Cartas de escalación',
          description:
            'Mapa de decisores con aprobaciones cronometradas entre marketing, legal, producto y seguridad.',
          safeguards: [
            'RACI vivo integrado en tus workspaces con indicadores animados de estado.',
            'Plantillas de notificación localizadas EN / FR / ES listas para enviar.',
            'Stand-ups de crisis disparados en menos de 45 minutos con próximos pasos documentados.',
          ],
        },
        {
          title: 'Runway de gestión de cambios',
          description:
            'Ventanas de revisión y rituales de QA estructurados que mantienen la conformidad sin frenar la experimentación.',
          safeguards: [
            'Briefs asíncronos con historial de redlines, scoring de riesgo y deadlines de aprobación.',
            'QA en pareja apoyado en checklists de verificación por canal.',
            'Alertas de regresión automatizadas conectadas a dashboards, Slack y resúmenes por email.',
          ],
        },
        {
          title: 'Bóveda de evidencias y auditoría',
          description:
            'Archivo centralizado de retiros, aprobaciones, artefactos de medición y transcripciones listo para reguladores y directorio.',
          safeguards: [
            'Repositorio cifrado con revisiones de acceso trimestrales y políticas de retención.',
            'Logs de cadena de custodia para cada acción y escalación de incidentes.',
            'Resúmenes ejecutivos multilingües para el board con seguimiento de decisiones y CTA.',
          ],
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
    slas: {
      title: 'Compromisos de respuesta en los que podés confiar',
      subtitle: 'SLA dirigidos por el fundador contienen los incidentes antes de que se multipliquen.',
      commitments: [
        {
          title: 'Triage de incidentes críticos',
          target: '<15 min primera respuesta',
          description:
            'Leads multilingües activan una war room que coordina seguridad, legal y comunicación en vivo.',
          coverage: 'Dominios secuestrados · infraestructura phishing · picos de desinformación',
        },
        {
          title: 'Escalación a plataformas',
          target: '<45 min para presentar y documentar casos',
          description:
            'Los defensores Traceremove empaquetan evidencias, contexto legal y piezas motion para marketplaces y reguladores.',
          coverage: 'Tiendas de apps · marketplaces · redes publicitarias · portales de reseñas',
        },
        {
          title: 'Informe ejecutivo de situación',
          target: '<4 h resumen aprobado',
          description:
            'El equipo fundador entrega un brief ejecutivo con impacto previsto, decisiones requeridas y próxima cadencia.',
          coverage: 'Directorio, inversores y liderazgo global',
        },
      ],
    },
    reporting: {
      title: 'Rituales de reporting que hacen obvia la decisión',
      subtitle: 'Cada colaboración incluye analytics multicapa para alinear operaciones, finanzas y gobernanza.',
      rhythms: [
        {
          title: 'Revisión de momentum ejecutiva',
          cadence: 'Semanal',
          description:
            'Sesion liderada por el fundador que sintetiza retiros de amenazas, lift de demanda y necesidades de recursos.',
          deliverables: [
            'Scorecard animada con ingresos protegidos, pipeline y salud de reseñas.',
            'Registro de riesgos con responsables, probabilidad y severidad.',
            'Resumen accionable enviado a stakeholders dentro de las dos horas posteriores.',
          ],
        },
        {
          title: 'Paquete analytics de growth & trust',
          cadence: 'Quincenal',
          description:
            'Equipo de operaciones y analytics recopila aprendizajes de experimentos, performance de contenidos y cambios de sentimiento.',
          deliverables: [
            'Dashboards Looker Studio con anotaciones de victorias y oportunidades.',
            'Modelo de pacing por canal con recomendaciones de presupuesto y creatividades.',
            'Resumen de inteligencia de comunidad y soporte con guiones proactivos.',
          ],
        },
        {
          title: 'Observabilidad permanente',
          cadence: 'Tiempo real',
          description:
            'Dashboards animados emiten alertas, colas de reseñas y score de salud reputacional en todos los dispositivos.',
          deliverables: [
            'Notificaciones en Slack + email para detecciones y checkpoints SLA.',
            'Portal analytics 24/7 con vistas localizadas y exports listos para auditoría.',
            'Feeds API + webhooks conectados a BI, CRM y gestión de incidentes.',
          ],
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
    transformations: {
      title: 'Transformaciones impulsadas con nuestros pods',
      subtitle:
        'Historias donde blindamos reputación, aceleramos demanda y mantuvimos al liderazgo en control sin frenar el crecimiento.',
      stories: [
        {
          id: 'latam-fintech',
          title: 'Neutralizar anillos de reseñas falsas antes del roadshow Serie B',
          client: 'Marketplace fintech LATAM',
          sector: 'Fintech',
          challenge:
            'Horas antes de reunirse con inversores, granjas de reseñas hundieron las calificaciones en español y portugués.',
          interventions: [
            'Sprint de derribos multilingües cubriendo marketplaces, paid media y afiliados en menos de cuatro horas.',
            'Relanzamiento del hub con dashboards animados, testimonios en video y experimentos CRO para sostener conversiones.',
            'Canalización de disputas a CX, legal y producto para detectar nuevos patrones y fortalecer alertas.',
          ],
          outcome:
            'El rating promedio volvió a 4,8★ en seis días y el pipeline calificado creció 22 % ese trimestre.',
          quote:
            'Traceremove alineó growth, legal y CX en una sola war room; mientras Artur limpiaba el ruido seguimos generando confianza en público.',
          speaker: 'Chief Growth Officer, marketplace fintech LATAM',
        },
        {
          id: 'eu-retail',
          title: 'Recuperar la confianza transfronteriza tras tiendas clonadas',
          client: 'Retailer de lujo europeo',
          sector: 'Retail & eCommerce',
          challenge:
            'Sitios fraudulentos en tres idiomas desviaban depósitos y encendían la conversación negativa antes de la temporada alta.',
          interventions: [
            'Escalaciones coordinadas con registradores, plataformas y PSP acompañadas de dashboards en vivo para dirección.',
            'Campañas de tranquilidad con motion design en paid social, CRM y señalética para clientes VIP.',
            'Pods concierge en WhatsApp e Instagram con guiones multilingües y recursos visuales verificables.',
          ],
          outcome:
            'Los contracargos bajaron 63 % en dos semanas y el NPS subió de 21 a 58 antes de las fiestas.',
          quote:
            'Sus animaciones y guiones devolvieron la calma a nuestros equipos; por primera vez el board vio riesgo y revenue en un mismo panel.',
          speaker: 'Directora global de CX, retailer de lujo europeo',
        },
        {
          id: 'na-cyber',
          title: 'Alinear seguridad y marketing durante una narrativa de brecha',
          client: 'SaaS de ciberseguridad Norteamérica',
          sector: 'Ciberseguridad',
          challenge:
            'Un competidor amplificó una filtración antigua, deteniendo renovaciones enterprise y generando dudas en analistas.',
          interventions: [
            'Guiones coordinados para briefings ejecutivos, updates a analistas y explainers animados sobre la remediación.',
            'Simulacros de resiliencia con ventas y customer success para reposicionar la historia en torno a la detección rápida.',
            'Micrositio con GrowthSpark mostrando SLA, uptime y sentimiento de clientes en tiempo real.',
          ],
          outcome:
            'Cerramos 94 % de renovaciones en riesgo y sumamos dos Fortune 500 nuevos mientras el índice de sentimiento subió 18 puntos.',
          quote:
            'El equipo de Artur hizo que nuestra versión corriera más rápido que el rumor; dashboards y prácticas animadas convirtieron el miedo en impulso.',
          speaker: 'Chief Revenue Officer, SaaS de ciberseguridad',
        },
      ],
    },
    operations: {
      title: 'Ritmo operativo que mantiene a todos alineados',
      subtitle:
        'Cadencias lideradas por el fundador sincronizan confianza, crecimiento y producto sin importar el huso horario.',
      cadences: [
        {
          title: 'Command center de los lunes',
          duration: '60 minutos',
          focus: 'Barridos de amenazas, pacing de demanda y aprobaciones de experimentos',
          attendees: [
            'Artur Ziganshin',
            'Lead de growth',
            'Ingeniero de seguridad',
            'Estratega de lifecycle',
          ],
          outcomes: [
            'Prioridad de retiros con responsables, paquetes de evidencia y deadlines claros.',
            'Backlog de experimentos actualizado con briefs motion y fechas de lanzamiento.',
            'Resumen ejecutivo enviado a stakeholders en menos de dos horas.',
          ],
        },
        {
          title: 'Pulso de mitad de semana',
          duration: '30 minutos',
          focus: 'Salud de canales, QA creativa y analítica de sentimiento',
          attendees: [
            'Operadores de canal',
            'Director creativo',
            'Analista de datos',
          ],
          outcomes: [
            'Revisión del dashboard verde / amarillo / rojo con disparadores de intervención.',
            'Decisiones de refresh creativo con calendario de producción asociado.',
            'Insights de clientes derivados a producto y experiencia de cliente.',
          ],
        },
        {
          title: 'Standdown ejecutivo del viernes',
          duration: '25 minutos',
          focus: 'Scorecard de momentum, escalaciones y agenda de la semana siguiente',
          attendees: [
            'Equipo fundador',
            'Ejecutivos del cliente',
            'Socio de finanzas',
          ],
          outcomes: [
            'Narrativa semanal con ingresos protegidos cuantificados.',
            'Estado del tablero de escalaciones incluyendo acciones legales o con plataformas.',
            'Agenda de la semana siguiente bloqueada con responsables y requisitos de preparación.',
          ],
        },
      ],
      signals: [
        {
          label: 'Velocidad media de resolución de incidentes',
          value: '3,2 horas',
          description: 'Tiempo promedio para neutralizar dominios falsos o avalanchas de reseñas negativas.',
        },
        {
          label: 'Cumplimiento de lanzamientos de experimentos',
          value: '94 %',
          description: 'Porcentaje de lanzamientos planificados que salen a tiempo luego del QA.',
        },
        {
          label: 'Satisfacción de stakeholders',
          value: '9,4 / 10',
          description: 'Feedback continuo de las direcciones sobre nuestra velocidad y claridad.',
        },
      ],
    },
    resilience: {
      title: 'Simulacros de guerra que blindan tu reputación digital',
      subtitle:
        'Coreografiamos incidentes de extremo a extremo con tus equipos de comunicación, legal y producto para que la respuesta sea automática.',
      drills: [
        {
          title: 'Sabotaje coordinado en marketplaces',
          scenario: 'Anillos de reseñas falsas y tiendas apócrifas intentan erosionar la confianza en cuestión de horas.',
          cadence: 'Mensual',
          outcomes: [
            'Mapa de triage en vivo que alinea jurídico, trust & safety y lifecycle en menos de 20 minutos.',
            'Scripts de comunicación localizados distribuidos a los equipos de soporte en EN / FR / ES.',
            'Backlog de remediación priorizado con puntaje de impacto y responsables asignados.',
          ],
        },
        {
          title: 'Oleada de suplantación ejecutiva',
          scenario: 'Clones en redes sociales y mensajería apuntan a inversores y prensa con declaraciones falsas.',
          cadence: 'Trimestral',
          outcomes: [
            'Toolkit de derribo practicado con partners de LinkedIn, Instagram y WhatsApp.',
            'Flujos de aviso a inversores y medios afinados con aprobaciones con sello de hora del liderazgo.',
            'Checklist forense validada para legal, seguridad y aseguradoras.',
          ],
        },
        {
          title: 'Narrativa de vulnerabilidad de producto',
          scenario: 'Un hilo anónimo afirma una falla crítica y se expande por foros y prensa tecnológica.',
          cadence: 'Micro-drills quincenales',
          outcomes: [
            'Mesa redonda entre ingeniería, producto y PR sobre tiempos de parche y publicación de evidencias.',
            'Mensajes de tranquilidad para clientes en email / SMS iterados con compliance y privacidad.',
            'Revisión de tableros de estatus para garantizar visualizaciones de uptime listas para salir al aire.',
          ],
        },
      ],
      signals: [
        {
          label: 'Promedio de participantes por simulacro',
          value: '42 líderes y operadores',
          description: 'Personas clave entrenadas por engagement en nuestras tres regiones principales.',
        },
        {
          label: 'Tiempo para actualizar runbooks',
          value: '48 horas',
          description: 'Ventana para liberar playbooks y bases de conocimiento actualizados tras cada simulación.',
        },
        {
          label: 'Salto de confianza post-simulacro',
          value: '+31 pts',
          description: 'Incremento medio en el puntaje de confianza reportado por sponsors ejecutivos.',
        },
      ],
      cta: {
        label: 'Agenda un simulacro de resiliencia',
        description: 'Invitá a tus líderes clave: facilitamos la sesión, documentamos brechas y enviamos un informe accionable en 48 horas.',
      },
    },
    executive: {
      title: 'Rituales de briefing ejecutivo',
      subtitle:
        'Artur Ziganshin mantiene al liderazgo sincronizado con resúmenes animados, bitácoras de decisión y pedidos proactivos.',
      briefings: [
        {
          title: 'Briefing de comando de los lunes',
          cadence: 'Semanal · 30 minutos',
          description:
            'Arrancamos la semana con el fundador guiando actualizaciones de amenazas, momentum de campañas y aprobaciones críticas.',
          takeaways: [
            'Revisión del radar de riesgos con incidentes críticos, estado y rutas de escalación.',
            'Pulso de dashboards de crecimiento y retención mostrando ingresos protegidos.',
            'Registro de decisiones con responsables, plazos y contexto clave.',
          ],
        },
        {
          title: 'Foro de momentum de mitad de mes',
          cadence: 'Quincenal · 45 minutos',
          description:
            'Profundizamos en experimentos, performance creativa y reasignación de recursos con storytelling basado en datos.',
          takeaways: [
            'Scorecards de experimentos con animaciones que destacan victorias y próximas apuestas.',
            'Mapa de calor narrativo para los mercados en inglés, francés y español.',
            'Recomendaciones de recursos y aprobaciones necesarias para acelerar.',
          ],
        },
        {
          title: 'Studio de preparación para board',
          cadence: 'Mensual · 40 minutos',
          description:
            'El equipo fundador empaqueta decks ejecutivos, pruebas y lenguaje de respuesta antes de reuniones con inversores o directorio.',
          takeaways: [
            'Slides animadas que resumen confianza, crecimiento y salud del pipeline.',
            'Análisis de escenarios con impacto de ingresos modelado y opciones de mitigación.',
            'Kit de seguimiento con talking points, briefs de prensa y soporte de Q&A.',
          ],
        },
      ],
      indicators: [
        {
          label: 'Entrega de deck para el board',
          value: '< 24 h',
          context: 'Tiempo promedio para enviar resúmenes ejecutivos después de una escalación.',
        },
        {
          label: 'Satisfacción del liderazgo',
          value: '98 % CSAT',
          context: 'Feedback móvil de los últimos 6 meses entre founders, CMO y COO aliados.',
        },
        {
          label: 'Simulacros de escalación',
          value: '12 al año',
          context: 'Ensayos facilitados con tu equipo ejecutivo para mantener playbooks afilados.',
        },
      ],
      cta: {
        label: 'Agenda un preview ejecutivo',
        description:
          'Solicitá una sesión privada con Artur Ziganshin y descubrí cómo los briefings sostienen la alineación en momentos de alta velocidad.',
      },
    },
    advisory: {
      title: 'Consejo estratégico disponible en segundos',
      subtitle:
        'Activa a los operadores que resuelven tus desafíos de marca, crecimiento y confianza en inglés, francés y español.',
      experts: [
        {
          id: 'artur-ziganshin',
          name: 'Artur Ziganshin',
          title: 'Fundador & CEO',
          coverage: 'Global · inglés / francés / español',
          focus:
            'Dirige cada diagnóstico y la coreografía de crisis, moldeando narrativas listas para directorio y gobernanza junto a tu liderazgo.',
          specializations: [
            'Comando de incidentes críticos y alineación con directorios.',
            'Relanzamientos go-to-market con storytelling en motion.',
            'Recuperación reputacional multi-país y arquitectura de marca.',
          ],
        },
        {
          id: 'clara-martel',
          name: 'Clara Martel',
          title: 'Principal, sistemas de reputación',
          coverage: 'EMEA y Norteamérica',
          focus:
            'Diseña tejidos de monitoreo, programas de autenticidad de reseñas y rituales concierge para industrias reguladas.',
          specializations: [
            'Limpieza de marketplaces y recuperación de vendedores.',
            'Orquestación de CX y comunidades multilingües.',
            'Playbooks de escalación con legal, registradores y plataformas.',
          ],
        },
        {
          id: 'diego-santos',
          name: 'Diego Santos',
          title: 'Director, growth experiments',
          coverage: 'LATAM y Estados Unidos',
          focus:
            'Combina experimentación, paid media y automatización lifecycle con señales de confianza para recuperar ingresos rápido.',
          specializations: [
            'Diseño de experimentos full-funnel y CRO.',
            'Firewall de paid media y modelado de atribución.',
            'Storytelling localizado y enablement en español e inglés.',
          ],
        },
      ],
      contact: {
        label: 'Hablar con el consejo',
        description:
          'Contanos tus objetivos y armamos la mezcla correcta de estrategas para una sesión exploratoria en menos de 24 horas.',
      },
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
    platform: {
      title: 'Plataforma de inteligencia desde el día uno',
      subtitle:
        'Activamos capas de detección, analítica y gobernanza para que tu equipo tenga visibilidad inmediata sin otra implementación.',
      capabilities: [
        {
          title: 'Grafo de riesgo en tiempo real',
          description:
            'Índice unificado que mapea suplantaciones, anomalías de reseñas y responsables de escalación en todos tus mercados prioritarios.',
          signals: [
            '50M+ fuentes ponderadas por geografía e idioma.',
            'Disparadores automáticos para retirar dominios, anuncios y clones sociales.',
            'Secuencias de outreach listas para registradores, marketplaces y equipos legales.',
          ],
        },
        {
          title: 'Workspace de analytics de confianza',
          description:
            'Looker Studio + BigQuery combinan sentimiento, funnel y revenue con indicadores animados para liderazgo.',
          signals: [
            'Dashboards ejecutivos actualizados cada hora con anotaciones colaborativas.',
            'Feeds API + webhooks enlazados a CRM, CDP e incident response.',
            'Alertas de variación entregadas en segundos vía Slack, Teams y correo.',
          ],
        },
        {
          title: 'Command center de automatización',
          description:
            'Workflows low-code que coordinan salas de respuesta, aprobaciones y enablement sin sumar overhead operativo.',
          signals: [
            'Playbooks activados según bandas de severidad del riesgo.',
            'Boards animados muestran responsables, deadlines y nivel de confianza.',
            'Automatizaciones de localización para lanzamientos EN/FR/ES y comunicaciones internas.',
          ],
        },
      ],
    },
    playbooks: {
      title: 'Playbooks de respuesta listos para activar',
      subtitle:
        'Secuencias escritas por la dirección contienen cada incidente mientras los experimentos de crecimiento siguen avanzando.',
      items: [
        {
          title: 'Retiro de dominio suplantado',
          responseTime: 'Primera acción en 15 minutos',
          description:
            'El desk de dominios coordina legales, paid media y registradores para eliminar o redirigir clones maliciosos.',
          stages: [
            'Detección reúne datos de registrar, hosting y DNS con evidencias visuales.',
            'Paquetes automáticos se envían a registradores y plataformas publicitarias.',
            'El pod de growth actualiza campañas pagas y orgánicas para recuperar tráfico.',
          ],
          outcome: 'Dominio fraudulento fuera de línea o redirigido sin cortar la generación de leads.',
        },
        {
          title: 'Contención de reseñas falsas',
          responseTime: 'Ventana de control de 60 minutos',
          description:
            'Analistas multilingües validan autenticidad, activan outreach a clientes y fuerzan acciones de las plataformas.',
          stages: [
            'Auditoría cruza CRM, historial de compra y tickets de soporte.',
            'Clientes verificados reciben guías y scripts para recuperar la narrativa.',
            'Legal + PR publican actualizaciones en prensa y canales sociales.',
          ],
          outcome: 'Sentimiento legítimo restablecido con dashboards que muestran la recuperación.',
        },
        {
          title: 'Respuesta a impersonación ejecutiva',
          responseTime: 'Menos de 30 minutos',
          description:
            'Seguridad, comunicaciones y enablement se coordinan en un canal compartido para neutralizar perfiles que imitan al liderazgo.',
          stages: [
            'Solicitudes de retirada automáticas a redes sociales, mensajería y marketplaces.',
            'Kit de mensajes se despliega a inversores, partners y equipos internos.',
            'Campañas de confianza refrescan paid & owned media con mensajes verificados.',
          ],
          outcome: 'Identidad falsa eliminada y pulso reputacional estabilizado en cuestión de horas.',
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
    onboarding: {
      title: 'Onboarding liderado por el fundador listo en días',
      subtitle:
        'Un escuadrón multilingüe coreografía descubrimiento, estabilización y crecimiento sin fricción operativa.',
      stages: [
        {
          id: 'sincronizacion-senal',
          title: 'Sincronización de señales y discovery',
          duration: 'Día 0 – Día 3',
          focus: 'Capturar la línea base y alinear rituales de escalación entre equipos.',
          description:
            'Artur Ziganshin reúne marketing, producto, legal y CX para mapear narrativas, riesgos y metas en cada idioma.',
          checkpoints: [
            'Kickoff multilingüe con dirección y responsables operativos dentro de las primeras 24 h.',
            'Credenciales, datos y accesos de monitoreo validados en herramientas y regiones clave.',
            'Benchmark de amenazas con puntaje de severidad e historial de incidentes.',
            'Árbol de escalación, cadencias de trabajo y métricas de éxito ratificados.',
          ],
        },
        {
          id: 'estabilizar-blindar',
          title: 'Estabilizar y blindar superficies críticas',
          duration: 'Día 4 – Día 10',
          focus: 'Neutralizar urgencias mientras instalamos señales de confianza.',
          description:
            'Los desks de reseñas, dominios y social ejecutan retiros, publican narrativas claras y habilitan a los equipos de frente.',
          checkpoints: [
            'Sprints de retiro en marketplaces, plataformas de anuncios y registradores.',
            'Mensajería de crisis actualizada con guiones localizados y briefs para stakeholders.',
            'Canales pagados y propios refrescados con campañas de tranquilidad.',
            'Notas diarias de momentum para el comité ejecutivo con decisiones solicitadas.',
          ],
        },
        {
          id: 'construir-momentum',
          title: 'Construir momentum y lanzar experimentos',
          duration: 'Semana 2 – Semana 4',
          focus: 'Unir experimentación de growth y protección continua para recuperar share.',
          description:
            'Pods de crecimiento activan pruebas CRO, nurtures y jugadas de earned media mientras analistas siguen el pulso del sentimiento.',
          checkpoints: [
            'Backlog de experimentos priorizado con dueños, dependencias y KPIs.',
            'Dashboards GrowthSpark encendidos con overlays de sentimiento en tiempo real.',
            'Playbooks de respuesta comunitaria y de reseñas practicados con operadores.',
            'Secuencias de partners, PR y paid alineadas a los hitos logrados.',
          ],
        },
        {
          id: 'escalar-rituales',
          title: 'Escalar y dejar rituales instalados',
          duration: 'Mes 2 en adelante',
          focus: 'Transferir playbooks, automatizar governance y ampliar la cobertura.',
          description:
            'Los equipos de enablement forman talento interno, codifican gobernanza y preparan próximas expansiones de mercado.',
          checkpoints: [
            'Bootcamps para equipos regionales con laboratorios grabados y office hours.',
            'Frentes de automatización e integraciones cierran flujos de datos y alertas.',
            'Revisiones ejecutivas trimestrales aseguran roadmap y casos de inversión.',
            'Command center compartido transfiere co-ownership y documentación completa.',
          ],
        },
      ],
      metrics: [
        {
          label: 'Tiempo hasta la primera remediación',
          value: '46 h promedio',
          description: 'Ventana promedio entre la firma y el primer retiro, reversión de reseña o supresión en SERP.',
        },
        {
          label: 'Satisfacción de sponsors',
          value: '4.8 / 5',
          description: 'Puntuación media de onboarding entregada por sponsors ejecutivos en mercados EN/FR/ES.',
        },
        {
          label: 'Preparación multilingüe',
          value: '3 squads activos',
          description: 'Estrategas nativos en inglés, francés y español activos desde el primer día.',
        },
      ],
      ctaLabel: 'Agenda tu recorrido de onboarding',
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

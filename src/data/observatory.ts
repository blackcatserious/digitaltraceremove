import { type Language } from './pages'

export type ObservatoryResourceTarget =
  | 'resources'
  | 'contact'
  | 'servicesPricing'
  | 'blog'

export interface ObservatoryCopy {
  hero: {
    eyebrow: string
    title: string
    subtitle: string
    description: string
    primaryCta: string
    secondaryCta: string
    secondaryHref: string
    metrics: { id: string; value: string; label: string; detail: string }[]
    visualCaption: string
  }
  radar: {
    title: string
    description: string
    signals: { id: string; title: string; status: string; detail: string }[]
  }
  spotlights: {
    title: string
    description: string
    cards: { id: string; title: string; summary: string; insight: string; action: string }[]
  }
  pulse: {
    title: string
    description: string
    alerts: {
      id: string
      name: string
      medium: string
      cadence: string
      summary: string
      focus: string
      recipients: string
    }[]
  }
  threatReports: {
    title: string
    description: string
    reports: {
      id: string
      name: string
      timeframe: string
      summary: string
      response: string
      asset: string
    }[]
  }
  dashboards: {
    title: string
    description: string
    panels: { id: string; title: string; metric: string; delta: string; description: string }[]
  }
  forecasts: {
    title: string
    description: string
    projections: {
      id: string
      horizon: string
      scenario: string
      summary: string
      impact: string
      action: string
    }[]
  }
  benchmarks: {
    title: string
    description: string
    metrics: {
      id: string
      name: string
      value: string
      change: string
      baseline: string
      narrative: string
    }[]
  }
  indices: {
    title: string
    description: string
    indices: {
      id: string
      name: string
      score: string
      trend: string
      signal: string
      recommendation: string
    }[]
  }
  briefings: {
    title: string
    description: string
    sessions: {
      id: string
      title: string
      audience: string
      cadence: string
      host: string
      focus: string
      commitment: string
    }[]
  }
  coverage: {
    title: string
    description: string
    desks: {
      id: string
      region: string
      uptime: string
      focus: string
      analysts: string
    }[]
  }
  responders: {
    title: string
    description: string
    roster: {
      id: string
      name: string
      role: string
      coverage: string
      specialties: string
      languages: string
      background: string
    }[]
  }
  labs: {
    title: string
    description: string
    tracks: { id: string; name: string; focus: string; cadence: string; lead: string }[]
  }
  alliances: {
    title: string
    description: string
    programs: {
      id: string
      name: string
      partners: string
      coverage: string
      integration: string
      outcome: string
    }[]
  }
  automations: {
    title: string
    description: string
    workflows: {
      id: string
      name: string
      trigger: string
      automation: string
      human: string
    }[]
  }
  knowledgeBase: {
    title: string
    description: string
    resources: {
      id: string
      name: string
      format: string
      length: string
      summary: string
      cta: string
      target: ObservatoryResourceTarget
    }[]
  }
  casefiles: {
    title: string
    description: string
    cases: {
      id: string
      name: string
      sector: string
      incident: string
      action: string
      result: string
    }[]
  }
  intelRequests: {
    title: string
    description: string
    requests: {
      id: string
      name: string
      sla: string
      status: string
      summary: string
      owner: string
    }[]
  }
  fieldNotes: {
    title: string
    description: string
    regionLabel: string
    windowLabel: string
    ownerLabel: string
    observationLabel: string
    actionLabel: string
    followUpLabel: string
    notes: {
      id: string
      headline: string
      region: string
      window: string
      owner: string
      observation: string
      action: string
      followUp: string
    }[]
  }
  intercepts: {
    title: string
    description: string
    entries: {
      id: string
      name: string
      severity: string
      timestamp: string
      summary: string
      resolution: string
      owner: string
      channel: string
    }[]
  }
  rhythms: {
    title: string
    description: string
    rituals: {
      id: string
      name: string
      window: string
      owner: string
      outcome: string
      tooling: string
    }[]
  }
  escalation: {
    title: string
    description: string
    contacts: { id: string; name: string; role: string; channel: string }[]
    note: string
  }
  cta: {
    title: string
    body: string
    primary: string
    secondary: string
  }
}

export const observatoryCopy: Record<Language, ObservatoryCopy> = {
  en: {
    hero: {
      eyebrow: 'Always-on observatory',
      title: 'Live intelligence for every brand heartbeat',
      subtitle: 'Traceremove Brand Observatory',
      description:
        'Our analysts, AI observability stack, and response desks watch every signal touching your brand — search, socials, listings, and marketplaces — so reputation threats are neutralised before they trend.',
      primaryCta: 'Book an observatory walkthrough',
      secondaryCta: 'See how we triage spikes',
      secondaryHref: '#observatory-radar',
      metrics: [
        {
          id: 'm1',
          value: '2.4M',
          label: 'Signals parsed daily',
          detail: 'Search impressions, review deltas, fraud takedown queues.',
        },
        {
          id: 'm2',
          value: '38 min',
          label: 'Average disruption neutralised',
          detail: 'From detection to action plan shared with founders.',
        },
        {
          id: 'm3',
          value: '11 languages',
          label: 'Human validation coverage',
          detail: 'Native analysts in Americas, EMEA, LATAM, and APAC pods.',
        },
      ],
      visualCaption: 'Realtime dashboards showing cross-market sentiment drift.',
    },
    radar: {
      title: 'Global radar desk',
      description:
        'Every alert is ranked, contextualised, and paired with the right operator so leadership only sees what matters. AI-assisted triage keeps noise low while analysts double-check every red flag.',
      signals: [
        {
          id: 's1',
          title: 'Review manipulation sweeps',
          status: 'Red — active sweep',
          detail: 'Coordinated 1-star blasts detected across three delivery platforms in Montréal. Legal templates issued and listing recovery underway.',
        },
        {
          id: 's2',
          title: 'Search volatility tracker',
          status: 'Amber — monitoring',
          detail: 'Competitor bidding hijacked branded keywords in Paris. Campaign negative keywords and landing page rewrites rolling out.',
        },
        {
          id: 's3',
          title: 'Marketplace impersonation',
          status: 'Resolved — de-indexed',
          detail: 'Madrid drop-shipper suspended. Domain watchlist expanded and registrar notified of additional lookalike domains.',
        },
        {
          id: 's4',
          title: 'Executive phishing alerts',
          status: 'Green — simulated',
          detail: 'Founders completed bilingual rehearsal with security cell. Next drill scheduled with LATAM leadership pod.',
        },
      ],
    },
    spotlights: {
      title: 'Spotlights & storyboards',
      description:
        'Weekly spotlights help teams understand the context behind each spike. We annotate impact, share the counter narrative, and package reusable assets your teams can ship fast.',
      cards: [
        {
          id: 'c1',
          title: 'Q-commerce trust crash',
          summary:
            'A viral TikTok accused an express grocer of damaged produce. Sentiment fell 27 points overnight.',
          insight:
            'Rapid asset swaps and bilingual statement from the COO reversed sentiment within 12 hours.',
          action: 'Download asset pack',
        },
        {
          id: 'c2',
          title: 'Luxury resale clone network',
          summary:
            'Eleven fraudulent Instagram shops copying a Spanish reseller funnelled payments through messaging apps.',
          insight:
            'Traceremove takedowns plus customer comms regained €420k protected pipeline in 3 days.',
          action: 'Review response templates',
        },
        {
          id: 'c3',
          title: 'Fintech onboarding bottleneck',
          summary:
            'Negative Trustpilot streak linked to a new KYC vendor. Sign-ups slipped 14% week-over-week.',
          insight:
            'Playbook triggered dynamic FAQ updates, CRO experiments, and direct founder outreach to top reviewers.',
          action: 'Open remediation workflow',
        },
      ],
    },
    pulse: {
      title: 'Incident pulse alerts',
      description:
        'Founders stay ahead through live alert bundles delivered to the channels they already trust. Each pulse includes summary, recommended actions, and routed owners so no threat slips.',
      alerts: [
        {
          id: 'p1',
          name: 'Review integrity sweep',
          medium: 'Signal + Slack',
          cadence: 'Triggered within 2 minutes of anomaly',
          summary:
            'Live intercept packages cross-check suspect reviews across marketplaces, paid media comments, and NPS verbatims.',
          focus:
            'Routes review manipulation attempts straight to operations, legal, and media pods with pre-approved response language.',
          recipients: 'Founders · Regional ops leads · Counsel desk',
        },
        {
          id: 'p2',
          name: 'WhatsApp crisis broadcast',
          medium: 'Encrypted WhatsApp list',
          cadence: 'Every 30 minutes until neutralised',
          summary:
            'Secure mobile digest pairs threat score, customer impact, and key talking points for execs on the move.',
          focus:
            'Keeps distributed leadership aligned on rebuttal assets and stakeholder comms while command center runs remediation.',
          recipients: 'Executive team · Country managers · PR partners',
        },
        {
          id: 'p3',
          name: 'Executive impersonation killswitch',
          medium: 'Email + founder bridge',
          cadence: 'Immediately when spoof detected',
          summary:
            'Identity graphing flags spoofed inbox domains, SMS lookalikes, and compromised landing pages tied to exec personas.',
          focus:
            'Pushes takedown kits, MFA resets, and investor notification scripts with severity tags for each exposure.',
          recipients: 'Founders · Security · Investor relations',
        },
      ],
    },
    threatReports: {
      title: 'Weekly threat reports',
      description:
        'Every Friday we publish a founder digest distilling the most material risks, the counter-moves we executed, and where leadership decisions accelerated recovery.',
      reports: [
        {
          id: 'r1',
          name: 'Marketplace fraud pulse',
          timeframe: 'Last 7 days',
          summary:
            'Counterfeit clusters across EU luxury marketplaces targeting accessories. Nine storefronts linked through wallet analytics.',
          response:
            'Issued platform takedowns, swapped PDP copy, and launched retargeting reassurance campaigns across paid social.',
          asset: 'Open enforcement brief',
        },
        {
          id: 'r2',
          name: 'Generative review attacks',
          timeframe: '72-hour window',
          summary:
            'AI-written negative streak detected on Spanish delivery apps with identical phrasing and VPN fingerprints.',
          response:
            'Deployed verified buyer prompts, activated media rebuttals, and notified marketplaces through founder desks.',
          asset: 'View counter narrative kit',
        },
        {
          id: 'r3',
          name: 'Executive impersonation surge',
          timeframe: 'Current sprint',
          summary:
            'Spoofed onboarding emails hitting LATAM prospects referencing a fake investment round and wiring instructions.',
          response:
            'Pushed takedowns with registrars, updated nurture templates, and escalated to affected investors with briefing notes.',
          asset: 'Download investor alert pack',
        },
      ],
    },
    dashboards: {
      title: 'Intelligence dashboards',
      description:
        'Dashboards translate sentiment, conversion, and fraud alerts into executive-ready context. Each panel pairs telemetry with the recommended motion so leadership can approve actions instantly.',
      panels: [
        {
          id: 'd1',
          title: 'Sentiment drift',
          metric: '+18.2',
          delta: 'pts in 72h',
          description: 'Composite review, social, and support sentiment with anomaly annotations and CTA guidance.',
        },
        {
          id: 'd2',
          title: 'Revenue at risk',
          metric: '$3.1M',
          delta: 'protected this quarter',
          description: 'Maps incidents to projected revenue loss plus confirmed recovery once playbooks execute.',
        },
        {
          id: 'd3',
          title: 'Emerging surfaces',
          metric: '27',
          delta: 'new mentions flagged',
          description: 'Surfaces new channels where the brand is mentioned so GTM can join conversations safely.',
        },
      ],
    },
    forecasts: {
      title: 'Scenario forecasting',
      description:
        'Forward models flag the next disruption arcs so founders see how fast to mobilise, which regions feel the hit first, and the counter-moves already in draft.',
      projections: [
        {
          id: 'f1',
          horizon: 'Next 24 hours',
          scenario: 'Coordinated review fraud wave',
          summary:
            'Marketplace signals show burner accounts queueing one-star streaks across food delivery and home services listings in Montréal and Lyon.',
          impact:
            'Model projects a 12% dip in loyalty sign-ups and a 0.4 star rating drop if the wave lands before sweeps trigger.',
          action:
            'Escalate rapid-response review sweeps, force verified purchase prompts, and queue legal takedowns across Uber Eats, Deliveroo, and Amazon Handmade.',
        },
        {
          id: 'f2',
          horizon: 'Next 7 days',
          scenario: 'Influencer misinformation loop',
          summary:
            'FR and ES creator chatter hints at a fabricated recall rumour seeded by a competitor-funded agency targeting skincare routines.',
          impact:
            'Would lift negative brand queries by 22% and spike support ticket volume 1.3x if rebuttals lag.',
          action:
            'Pre-produce founder briefing clips, align spokesperson quotes in three languages, and sync paid social reassurance bursts with affiliate updates.',
        },
        {
          id: 'f3',
          horizon: '30-day outlook',
          scenario: 'Marketplace impersonation network',
          summary:
            'Domain permutations and social handles registered in APAC signal a drop-ship impersonation network preparing to spoof official storefronts.',
          impact:
            'Risking $2.1M GMV plus partner trust erosion as disputes cascade through payment processors.',
          action:
            'Pre-register priority domains, trigger registrar takedown holds, ready ad verification pushes, and rehearse seller outreach playbooks with partner ops.',
        },
      ],
    },
    benchmarks: {
      title: 'Performance benchmarks',
      description:
        'Live benchmarks show how observatory operations outperform the market so leadership can message progress with proof.',
      metrics: [
        {
          id: 'bm1',
          name: 'Incident neutralisation speed',
          value: '42 min',
          change: '↓6 min vs last month',
          baseline: 'SLA target: under 55 minutes',
          narrative:
            'Automation-assisted routing and pre-cleared playbooks cut review loops while founders approve within dedicated stand-ups.',
        },
        {
          id: 'bm2',
          name: 'Share of positive coverage',
          value: '71%',
          change: '↑9 pts QoQ',
          baseline: 'Enterprise SaaS benchmark: 58%',
          narrative:
            'Rapid spokesperson deployment plus media observatory rebuttals flipped hostile narratives across tier-one tech and fintech press.',
        },
        {
          id: 'bm3',
          name: 'Revenue preserved',
          value: '$4.8M',
          change: 'protected last quarter',
          baseline: 'Baseline risk: $6.2M exposure',
          narrative:
            'Marketplace takedowns, ad negative keyword shields, and customer comms automation prevented conversion leakage.',
        },
      ],
    },
    indices: {
      title: 'Resilience indices',
      description:
        'Composite scores blend signal health, audience trust, and playbook readiness so founders can spot risk drift before it requires escalation.',
      indices: [
        {
          id: 'ri1',
          name: 'Reputation stability',
          score: '92 / 100',
          trend: '↑ 3 pts week-over-week',
          signal: 'Search & review harmony',
          recommendation:
            'Keep executive AMAs on weekly cadence and expand advocacy prompts to loyalty cohorts to preserve headroom.',
        },
        {
          id: 'ri2',
          name: 'Response precision',
          score: '88 / 100',
          trend: '↔ steady',
          signal: 'Playbook turnaround speed',
          recommendation:
            'Refresh scenario macros for LATAM desk and rotate automation QA pods through next drill cycle.',
        },
        {
          id: 'ri3',
          name: 'Escalation readiness',
          score: '95 / 100',
          trend: '↑ 1 pt',
          signal: 'Founder hotline rehearsal',
          recommendation:
            'Lock next fusion war-room walkthrough with product, finance, and legal observers to maintain gold-standard alignment.',
        },
      ],
    },
    briefings: {
      title: 'Founder briefings',
      description:
        'Rapid-fire syncs keep decision-makers aligned. Each briefing condenses signal analysis, the playbook underway, and what we need from founders next.',
      sessions: [
        {
          id: 'b1',
          title: 'Executive stand-up',
          audience: 'Founders & comms leads',
          cadence: 'Daily · 09:00 CET',
          host: 'Artur Ziganshin',
          focus: 'Prioritise overnight escalations, assign spokespersons, and approve budget unlocks.',
          commitment: '15 minutes with follow-up action register in Notion.',
        },
        {
          id: 'b2',
          title: 'Regional intel huddle',
          audience: 'Regional GMs & marketing',
          cadence: 'Twice weekly',
          host: 'Clara Martel',
          focus: 'Share playbook performance, align local creative swaps, and review channel stability.',
          commitment: '25 minutes plus async recap with assets.',
        },
        {
          id: 'b3',
          title: 'Board alignment dial-in',
          audience: 'Board observers & investor relations',
          cadence: 'Weekly',
          host: 'Diego Santos',
          focus: 'Summarise reputational posture, ROI recovered, and highlight support asks.',
          commitment: '20 minutes including Q&A transcript.',
        },
      ],
    },
    coverage: {
      title: 'Follow-the-sun coverage',
      description:
        'Three desks rotate to keep your brand observed without pause. Every pod blends native-language analysts, automation engineers, and legal partners.',
      desks: [
        {
          id: 'cov1',
          region: 'Americas desk',
          uptime: '18 hours',
          focus: 'Marketplace fraud, executive phishing, crisis media buys.',
          analysts: 'Diego Santos · Daniela Rojas · Jason Lee',
        },
        {
          id: 'cov2',
          region: 'EMEA desk',
          uptime: '20 hours',
          focus: 'Search volatility, regulatory monitoring, trust & safety escalations.',
          analysts: 'Artur Ziganshin · Clara Martel · Sofia Andersson',
        },
        {
          id: 'cov3',
          region: 'APAC acceleration',
          uptime: '16 hours',
          focus: 'Marketplace cloning, review manipulation, partner enablement.',
          analysts: 'Kenji Arai · Priya Desai · Miguel Cortez',
        },
      ],
    },
    responders: {
      title: 'Responder leadership desk',
      description:
        'Founder-led strategists anchor every incident bridge and ensure regional desks move in lockstep. They approve countermeasures, brief stakeholders, and mentor on-call analysts through each escalation.',
      roster: [
        {
          id: 'res1',
          name: 'Artur Ziganshin',
          role: 'Founder & Chief Strategist',
          coverage: 'Global escalation bridge · Always-on',
          specialties: 'High-severity incidents, investor narratives, cross-market brand rebuilds',
          languages: 'English · French · Russian',
          background:
            'Leads every fusion sprint personally, syncing legal, security, growth, and product pods while aligning founders on next-step decisions within minutes.',
        },
        {
          id: 'res2',
          name: 'Clara Martel',
          role: 'Director, EMEA Observatory',
          coverage: 'EMEA crises · Search and review integrity',
          specialties: 'Marketplace enforcement, regulatory comms, multilingual narrative control',
          languages: 'French · English · Italian',
          background:
            'Former news editor who coordinates analyst pods in Paris and Dubai, crafting rapid rebuttals and briefing stakeholder coalitions before stories trend.',
        },
        {
          id: 'res3',
          name: 'Diego Santos',
          role: 'Lead Strategist, Americas Desk',
          coverage: 'North & South America · 24/7 command',
          specialties: 'Executive protection, trust & safety escalations, retail marketplace recovery',
          languages: 'Spanish · English · Portuguese',
          background:
            'Partners with founders on ground-zero incidents, running bilingual war rooms and coordinating platform takedowns with our legal network.',
        },
      ],
    },
    labs: {
      title: 'Observatory labs',
      description:
        'Founders get direct access to our lab pods building predictive models, automation, and counter-messaging frameworks tailored to each market.',
      tracks: [
        {
          id: 'l1',
          name: 'Signal fusion lab',
          focus: 'Combines search, social, and CRM deltas into one risk score per region.',
          cadence: 'Daily refresh',
          lead: 'Clara Martel · EMEA Intelligence',
        },
        {
          id: 'l2',
          name: 'Narrative strike team',
          focus: 'Crafts crisis-ready creative in 3 languages with adaptive media buys.',
          cadence: 'Weekly sprints',
          lead: 'Diego Santos · LATAM Creative',
        },
        {
          id: 'l3',
          name: 'Marketplace forensics',
          focus: 'Detects counterfeit sellers with AI clustering and manual sweeps.',
          cadence: 'Twice weekly',
          lead: 'Artur Ziganshin · Founder desk',
        },
      ],
    },
    alliances: {
      title: 'Enterprise integrations & alliances',
      description:
        'We stitch the observatory into your martech, commerce, and legal stack so every risk signal lands exactly where your operators work.',
      programs: [
        {
          id: 'ally1',
          name: 'Search guardian alliance',
          partners: 'Google Ads Integrity · Microsoft Ads Trust · Custom search listeners',
          coverage: 'Real-time branded keyword auctions across 37 markets with anomaly scoring.',
          integration: 'Pushes takedown-ready evidence packs into Salesforce and the incident Slack bridge.',
          outcome: 'Blocks hijacked clicks and prevents reputational leakage before budgets burn.',
        },
        {
          id: 'ally2',
          name: 'Marketplace enforcement guild',
          partners: 'Amazon Brand Registry · Mercado Libre Compliance · Shopify Protect',
          coverage: 'Monitors listings, seller clones, and review velocity on 48 platforms.',
          integration: 'Syncs case IDs into Zendesk and auto-opens legal workflows with counsel.',
          outcome: 'Compresses counterfeit takedowns from days to hours while preserving ratings.',
        },
        {
          id: 'ally3',
          name: 'Communications rapid response collective',
          partners: 'Crisis PR networks · Regional spokesperson bench · Legal affairs',
          coverage: 'Tracks hostile narratives across press, podcasts, and short-form video.',
          integration: 'Feeds narrative heatmaps into Notion playbooks and press room asset kits.',
          outcome: 'Keeps founders in front of the story with aligned talking points and approvals.',
        },
      ],
    },
    automations: {
      title: 'Human + automation choreography',
      description:
        'Automation handles the heavy lifting while analysts steer the decision points that require judgement and founder alignment.',
      workflows: [
        {
          id: 'auto1',
          name: 'Sentiment spike triage',
          trigger: 'Social and review sentiment dips faster than 6 points hour-over-hour.',
          automation: 'Signal fusion bot escalates with annotated dashboards and auto-tagged transcripts.',
          human: 'Analyst validates false positives and briefs founders on the recommended response.',
        },
        {
          id: 'auto2',
          name: 'Marketplace takedown autopilot',
          trigger: 'Counterfeit clusters or price dumping detected on priority SKUs.',
          automation: 'Evidence bundle compiled, rights-owner notices dispatched, and seller IDs suspended.',
          human: 'Legal liaison confirms jurisdiction nuances and coordinates replacement stock messaging.',
        },
        {
          id: 'auto3',
          name: 'Executive impersonation guard',
          trigger: 'Lookalike domains or spoofed messaging apps mimic leadership identities.',
          automation: 'Domains quarantined, DMARC tightened, and warning scripts pushed to partner channels.',
          human: 'Founder desk records a personalised alert and prioritises direct stakeholder outreach.',
        },
      ],
    },
    knowledgeBase: {
      title: 'Founder intelligence knowledge base',
      description:
        'Your teams stay battle ready with founder-authored playbooks, broadcast templates, and rehearsal guides tuned to the latest observatory intelligence.',
      resources: [
        {
          id: 'kb1',
          name: 'Crisis intercept workspace',
          format: 'Interactive Notion playbook',
          length: '42 pages',
          summary:
            'Step-by-step intercept rituals, bilingual statement starters, and escalation macros refreshed weekly by the founder desk.',
          cta: 'Open the playbook',
          target: 'resources',
        },
        {
          id: 'kb2',
          name: 'Signal choreography workshop',
          format: 'Video briefing + transcript',
          length: '9-minute walkthrough',
          summary:
            'See how we fuse sentiment, search, and marketplace data into a single escalation narrative that boards can act on instantly.',
          cta: 'Watch the briefing',
          target: 'blog',
        },
        {
          id: 'kb3',
          name: 'Executive rehearsal huddle',
          format: 'Founders-only live session',
          length: '20-minute agenda',
          summary:
            'Book a private run-through with Artur Ziganshin to tailor observatory rituals, success metrics, and next-quarter response drills.',
          cta: 'Book a consult',
          target: 'contact',
        },
      ],
    },
    casefiles: {
      title: 'Field case files',
      description:
        'Snapshots from the observatory floor showing how we fold intelligence, legal, and communications into rapid threat resolution.',
      cases: [
        {
          id: 'cf1',
          name: 'Luxury retailer review flooding',
          sector: 'Luxury retail',
          incident: 'Coordinated one-star review blast across EU marketplaces and Google Shopping.',
          action:
            'Escalated to marketplaces with merchant-of-record affidavits and automated fraud classifiers inside two hours.',
          result:
            'Recovered a 4.6★ score, reinstated Shopping placements, and issued loyalty reassurance messaging within 48 hours.',
        },
        {
          id: 'cf2',
          name: 'Fintech app store clone purge',
          sector: 'Financial services',
          incident: 'Fraudulent lookalike apps harvesting credentials across LATAM stores.',
          action:
            'Activated legal, mobilised platform trust teams, and pushed an in-app security broadcast in three languages.',
          result: 'Removed 31 clones, restored app store rankings, and halted credential stuffing campaigns.',
        },
        {
          id: 'cf3',
          name: 'Hospitality data leak rumour',
          sector: 'Hospitality',
          incident: 'Anonymous Telegram channels alleging a guest data breach ahead of a peak weekend.',
          action:
            'Correlated telemetry, traced the rumour origin, and briefed press plus VIP hosts with verified status updates.',
          result: 'Neutralised speculation, kept occupancy at 96%, and published a transparent resilience summary.',
        },
      ],
    },
    intelRequests: {
      title: 'Live intelligence desk',
      description:
        'Founders and chiefs of staff submit flash requests when they need rapid clarity on a spike, surge, or rumour.',
      requests: [
        {
          id: 'ir1',
          name: 'APAC influencer surge triage',
          sla: '90 minutes to first insight',
          status: 'In flight',
          summary:
            'Validating whether a viral TikTok clip is organic or a coordinated smear tied to a challenger marketplace.',
          owner: 'Clara Martel · Observatory APAC desk',
        },
        {
          id: 'ir2',
          name: 'LATAM product recall monitoring',
          sla: '45 minutes to escalation pack',
          status: 'Resolved in 4 hours',
          summary:
            'Cross-checking consumer complaints, logistics data, and seller chatter before triggering a voluntary recall.',
          owner: 'Diego Santos · LATAM response lead',
        },
        {
          id: 'ir3',
          name: 'EMEA board briefing synthesis',
          sla: 'Same-day executive brief',
          status: 'Delivered',
          summary:
            'Preparing reputation trendlines and next-quarter risk projections for the audit and risk committee.',
          owner: 'Artur Ziganshin · Founder desk',
        },
      ],
    },
    fieldNotes: {
      title: 'Analyst field notes',
      description:
        'Live dispatches from the observatory floor capturing nuance that dashboards alone can miss — the texture behind the signals.',
      regionLabel: 'Region',
      windowLabel: 'Observation window',
      ownerLabel: 'Observer',
      observationLabel: 'What we\'re seeing',
      actionLabel: 'Action taken',
      followUpLabel: 'Next follow-up',
      notes: [
        {
          id: 'fn1',
          headline: 'Creator sting neutralised before escalation',
          region: 'North America · DTC',
          window: '04:00 – 07:00 ET',
          owner: 'Diego Santos',
          observation:
            'Influencer Discord servers circulating a falsified “exposé” deck seeded by a disgruntled ex-agency partner.',
          action:
            'Issued a quiet truth set with receipts to trusted creators, triggered marketplace watchlists, and prepped executive talking points.',
          followUp:
            'Schedule a live town hall with our top 20 creators and push refreshed guardrails into the affiliate kit within 24 hours.',
        },
        {
          id: 'fn2',
          headline: 'Marketplace whisper campaign diffused',
          region: 'EMEA · Luxury',
          window: '09:30 – 11:00 CET',
          owner: 'Clara Martel',
          observation:
            'WhatsApp voice notes hinting at a supposed quality recall were traced to a reseller syndicate trying to undercut flagship pricing.',
          action:
            'Captured forensic audio, escalated takedowns, and armed client concierges with personalised reassurances in French, English, and Arabic.',
          followUp:
            'Deploy undercover buys to confirm stock authenticity claims and review loyalty churn metrics during the next sunrise triage.',
        },
        {
          id: 'fn3',
          headline: 'Regional banking rumour contained',
          region: 'LATAM · Financial services',
          window: '18:00 – 20:00 BRT',
          owner: 'Artur Ziganshin',
          observation:
            'Coordinated Reddit threads alleging insolvency picked up traction among fintech founders and venture groups.',
          action:
            'Activated the founder bridge, published liquidity proof points, and synchronised with regulators and payment partners before market open.',
          followUp:
            'Maintain hourly monitoring overnight and prepare an executive Q&A pack for next-morning investor calls.',
        },
      ],
    },
    intercepts: {
      title: 'Critical intercept log',
      description:
        'A rolling log of the highest-severity incidents we have neutralised this week with context you can share across leadership threads.',
      entries: [
        {
          id: 'i1',
          name: 'Deepfake press pitch intercepted',
          severity: 'Severity 1 · Active containment',
          timestamp: '04:10 UTC',
          summary:
            'An AI-forged press pitch impersonated our founder with credential-harvesting forms aimed at fintech journalists.',
          resolution:
            'Intercepted before publication, launched credential resets, and distributed verified quotes via the command center wire.',
          owner: 'Artur Ziganshin · Founder desk',
          channel: 'Press & media outreach',
        },
        {
          id: 'i2',
          name: 'Fake review swarm dismantled',
          severity: 'Severity 2 · Neutralised',
          timestamp: '12:25 CET',
          summary:
            'Six hundred negative marketplace reviews triggered by a competitor botnet targeted premium SKUs across France.',
          resolution:
            'Filed takedowns, restored authentic ratings, and launched a reassurance drip to loyalty cohorts within 45 minutes.',
          owner: 'Clara Martel · EMEA Intelligence',
          channel: 'Marketplace governance',
        },
        {
          id: 'i3',
          name: 'Executive WhatsApp scam blocked',
          severity: 'Severity 2 · Contained',
          timestamp: '21:40 BRT',
          summary:
            'Spoofed WhatsApp messages requesting urgent wire transfers reached 42 channel partners in Brazil.',
          resolution:
            'Disabled lookalike domains, issued a bilingual alert pack, and ring-fenced partner payments within the hour.',
          owner: 'Diego Santos · Americas desk',
          channel: 'Partner communications',
        },
      ],
    },
    rhythms: {
      title: 'Response rhythms & rituals',
      description:
        'Cadence keeps founders, analysts, and automation in lockstep. These rituals align every desk around the next decisive move.',
      rituals: [
        {
          id: 'rh1',
          name: 'Sunrise triage review',
          window: '06:30 CET · 20 min',
          owner: 'Clara Martel & automation desk',
          outcome: 'Align overnight escalations, flag manual follow-ups, and refresh radar priorities.',
          tooling: 'Signal fusion dashboard · Notion war log',
        },
        {
          id: 'rh2',
          name: 'Market pulse sync',
          window: '13:00 UTC · 25 min',
          owner: 'Regional GMs with observatory leads',
          outcome: 'Review sentiment deltas, align creative swaps, and confirm response queue status.',
          tooling: 'Live observatory boards · Figma asset room',
        },
        {
          id: 'rh3',
          name: 'Evening founder recap',
          window: '19:30 local time · 15 min',
          owner: 'Artur Ziganshin & incident commander',
          outcome: 'Confirm resolutions, escalate unresolved blockers, and share the next-day watchlist.',
          tooling: 'Command center bridge · Slack incident channel',
        },
      ],
    },
    escalation: {
      title: 'Escalation bridges',
      description:
        'When a story needs to move fast, founders can engage our hotline, encrypted workspace, or war-room rotation. Every bridge routes straight to the core team.',
      contacts: [
        {
          id: 'e1',
          name: 'Traceremove hotline',
          role: '60-minute global response',
          channel: '+1 606 302 2958',
        },
        {
          id: 'e2',
          name: 'Signal desk inbox',
          role: 'Encrypted channel for screenshots, listings, and scripts',
          channel: 'signal@traceremove.com',
        },
        {
          id: 'e3',
          name: 'Founder bridge',
          role: 'Artur Ziganshin joins critical incidents directly',
          channel: 'book via Calendly · 24/7 escalation slot',
        },
      ],
      note: 'Prefer WhatsApp or Telegram? Let us know — we spin up secure channels in minutes.',
    },
    cta: {
      title: 'Ready to activate the observatory?',
      body: 'We plug into your analytics, comms, and product stack in under 10 days. Let’s orchestrate your brand defence together.',
      primary: 'Schedule a strategy session',
      secondary: 'Explore services & pricing',
    },
  },
  fr: {
    hero: {
      eyebrow: 'Observatoire en continu',
      title: 'Une intelligence en direct pour chaque battement de marque',
      subtitle: 'Traceremove Brand Observatory',
      description:
        "Nos analystes, notre stack d’observabilité IA et nos cellules de réponse surveillent chaque signal touchant votre marque — recherche, réseaux sociaux, marketplaces — pour neutraliser les menaces avant qu’elles ne se propagent.",
      primaryCta: 'Réserver une démo de l’observatoire',
      secondaryCta: 'Voir notre triage des pics',
      secondaryHref: '#observatory-radar',
      metrics: [
        {
          id: 'm1',
          value: '2,4 M',
          label: 'Signaux analysés par jour',
          detail: 'Impressions search, variations d’avis, files de retraits de fraude.',
        },
        {
          id: 'm2',
          value: '38 min',
          label: 'Neutralisation moyenne',
          detail: 'Du repérage au plan d’action partagé avec les fondateurs.',
        },
        {
          id: 'm3',
          value: '11 langues',
          label: 'Validation humaine',
          detail: 'Analystes natifs Amériques, EMEA, LATAM et APAC.',
        },
      ],
      visualCaption: 'Tableaux de bord en direct sur la dérive de sentiment multi-marchés.',
    },
    radar: {
      title: 'Cellule radar mondiale',
      description:
        "Chaque alerte est priorisée, contextualisée et assignée au bon opérateur. Le triage assisté par IA limite le bruit pendant que nos analystes valident chaque signal critique.",
      signals: [
        {
          id: 's1',
          title: 'Balayages d’avis frauduleux',
          status: 'Rouge — actif',
          detail:
            'Campagnes de notes 1 étoile détectées sur trois plateformes de livraison à Montréal. Modèles juridiques envoyés, récupération des fiches en cours.',
        },
        {
          id: 's2',
          title: 'Volatilité search',
          status: 'Ambre — sous veille',
          detail:
            'Un concurrent achète vos mots-clés de marque à Paris. Ajout de mots-clés négatifs et réécriture des landing pages.',
        },
        {
          id: 's3',
          title: 'Impersonation marketplace',
          status: 'Résolu — déréférencé',
          detail: 'Revendeur madrilène suspendu. Liste de surveillance des domaines élargie et registrar alerté.',
        },
        {
          id: 's4',
          title: 'Alertes phishing dirigeants',
          status: 'Vert — exercice',
          detail: 'Fondateurs entraînés en bilingue avec notre cellule sécurité. Prochain drill prévu avec le pôle LATAM.',
        },
      ],
    },
    spotlights: {
      title: 'Spotlights & storyboards',
      description:
        "Chaque semaine nous racontons l’histoire derrière les signaux. Nous mesurons l’impact, partageons la contre-narration et livrons des assets prêts à déployer.",
      cards: [
        {
          id: 'c1',
          title: 'Chute de confiance Q-commerce',
          summary:
            'Un TikTok viral accuse un épicier express de livrer des produits abîmés. Le sentiment chute de 27 points en une nuit.',
          insight:
            'Changement rapide des assets et déclaration bilingue de la COO ont inversé le narratif en 12 heures.',
          action: 'Télécharger le kit d’assets',
        },
        {
          id: 'c2',
          title: 'Réseau de clones luxe',
          summary:
            'Onze boutiques Instagram frauduleuses copiant un revendeur espagnol et détournant les paiements.',
          insight:
            'Traceremove a obtenu les retraits, orchestré la communication client et protégé 420 k€ de pipeline en 3 jours.',
          action: 'Consulter les templates de réponse',
        },
        {
          id: 'c3',
          title: 'Goulot d’onboarding fintech',
          summary:
            'Série négative Trustpilot liée à un nouveau prestataire KYC. -14 % d’inscriptions semaine sur semaine.',
          insight:
            'FAQ dynamiques, tests CRO et contact direct des reviewers par le fondateur ont stabilisé la conversion.',
          action: 'Ouvrir le workflow de remédiation',
        },
      ],
    },
    pulse: {
      title: 'Alertes pulse incidents',
      description:
        'Les fondateurs reçoivent en direct des paquets d’alertes sur leurs canaux de confiance. Chaque pulse embarque résumé, actions recommandées et propriétaires assignés pour ne rien laisser passer.',
      alerts: [
        {
          id: 'p1',
          name: 'Balayage intégrité des avis',
          medium: 'Signal + Slack',
          cadence: 'Déclenché < 2 min après anomalie',
          summary:
            'Dossiers d’interception qui recoupent avis suspects sur marketplaces, commentaires paid media et verbatims NPS.',
          focus:
            'Dirige automatiquement les tentatives de manipulation vers opérations, juridique et médias avec langage validé.',
          recipients: 'Fondateurs · Leads opérations régionaux · Cellule juridique',
        },
        {
          id: 'p2',
          name: 'Diffusion WhatsApp de crise',
          medium: 'Liste WhatsApp chiffrée',
          cadence: 'Toutes les 30 min jusqu’à résolution',
          summary:
            'Digest mobile sécurisé combinant score de menace, impact client et éléments de langage pour dirigeants en déplacement.',
          focus:
            'Maintient le leadership distribué aligné sur les assets de riposte et la communication parties prenantes pendant la remédiation.',
          recipients: 'Comex · Directeurs pays · Partenaires RP',
        },
        {
          id: 'p3',
          name: 'Coupe-circuit usurpation dirigeants',
          medium: 'Email + bridge fondateur',
          cadence: 'Immédiat dès spoof détecté',
          summary:
            'Graphes d’identité repèrent domaines email, SMS et pages compromises ciblant vos dirigeants.',
          focus:
            'Diffuse kits de retrait, resets MFA et scripts investisseurs avec niveau de sévérité par exposition.',
          recipients: 'Fondateurs · Sécurité · Relations investisseurs',
        },
      ],
    },
    threatReports: {
      title: 'Rapports de menaces hebdomadaires',
      description:
        'Chaque vendredi nous envoyons un digest fondateur résumant les risques critiques, les contre-mesures déployées et les décisions de leadership qui ont accéléré la reprise.',
      reports: [
        {
          id: 'r1',
          name: 'Pulse fraude marketplace',
          timeframe: '7 derniers jours',
          summary:
            'Cluster de contrefaçons sur des marketplaces luxe EU visant les accessoires. Neuf boutiques reliées par analyse de portefeuilles.',
          response:
            'Takedowns plateforme, mise à jour des pages produits et campagnes rassurance en paid social.',
          asset: 'Ouvrir la note d’application',
        },
        {
          id: 'r2',
          name: 'Attaques d’avis génératifs',
          timeframe: 'Fenêtre 72 h',
          summary:
            'Série négative rédigée par IA sur des apps de livraison espagnoles avec phrasé identique et empreintes VPN.',
          response:
            'Prompts acheteurs vérifiés, riposte média et notifications aux marketplaces via le desk fondateur.',
          asset: 'Voir le kit de contre-narratif',
        },
        {
          id: 'r3',
          name: 'Pic d’usurpation dirigeants',
          timeframe: 'Sprint en cours',
          summary:
            'Emails d’onboarding usurpés visant des prospects LATAM avec faux tour de table et instructions de virement.',
          response:
            'Takedowns registrar, mise à jour des séquences nurture et briefing aux investisseurs concernés.',
          asset: 'Télécharger l’alerte investisseurs',
        },
      ],
    },
    dashboards: {
      title: 'Dashboards d’intelligence',
      description:
        "Les dashboards convertissent sentiment, conversion et alertes fraude en contexte actionnable. Chaque panel associe télémétrie et mouvement recommandé.",
      panels: [
        {
          id: 'd1',
          title: 'Dérive de sentiment',
          metric: '+18,2',
          delta: 'pts en 72 h',
          description: 'Synthèse avis, social et support avec annotations d’anomalies et CTA.',
        },
        {
          id: 'd2',
          title: 'Revenus protégés',
          metric: '3,1 M€',
          delta: 'ce trimestre',
          description: 'Relie incidents et pertes potentielles puis confirme la récupération post-playbook.',
        },
        {
          id: 'd3',
          title: 'Surfaces émergentes',
          metric: '27',
          delta: 'nouveaux signaux',
          description: 'Identifie les nouveaux canaux où la marque est citée pour intervenir en sécurité.',
        },
      ],
    },
    forecasts: {
      title: 'Prévisions de scénarios',
      description:
        'Nos modèles projectifs révèlent la prochaine courbe de disruption pour indiquer aux dirigeants la vitesse de mobilisation, les régions touchées et les contre-mesures déjà prêtes.',
      projections: [
        {
          id: 'f1',
          horizon: 'Prochaines 24 h',
          scenario: 'Déferlante de faux avis coordonnés',
          summary:
            'Les signaux marketplace révèlent des comptes jetables préparant des salves 1 étoile sur les plateformes de livraison et services à domicile à Montréal et Lyon.',
          impact:
            'Le modèle anticipe une baisse de 12 % des inscriptions fidélité et -0,4 étoile si les balayages tardent.',
          action:
            'Déclencher les balayages accélérés, imposer la preuve d’achat vérifiée et lancer les demandes juridiques auprès d’Uber Eats, Deliveroo et Amazon Handmade.',
        },
        {
          id: 'f2',
          horizon: 'Prochaine semaine',
          scenario: 'Boucle de désinformation d’influenceurs',
          summary:
            'Les conversations FR et ES laissent entendre une rumeur de rappel fabriquée par une agence financée par un concurrent ciblant les routines skincare.',
          impact:
            'Ferait grimper de 22 % les requêtes négatives et 1,3x les tickets support si les contre-discours tardent.',
          action:
            'Préparer les clips de briefing fondateur, aligner les citations des porte-paroles en trois langues et synchroniser les campagnes rassurantes payantes avec les affiliés.',
        },
        {
          id: 'f3',
          horizon: 'Vision à 30 jours',
          scenario: 'Réseau d’usurpation marketplaces',
          summary:
            'Des permutations de domaines et handles sociaux enregistrés en APAC signalent un réseau dropshipping prêt à usurper les boutiques officielles.',
          impact:
            'Menace 2,1 M€ de GMV et la confiance partenaires avec un effet domino sur les litiges.',
          action:
            'Pré-enregistrer les domaines clés, demander des blocages aux registrars, préparer les vérifications publicitaires et répéter les scripts d’alerte vendeurs avec l’équipe partenaires.',
        },
      ],
    },
    benchmarks: {
      title: 'Indicateurs de performance',
      description:
        'Des benchmarks en direct montrent comment l’observatoire surperforme le marché pour que le leadership prouve les progrès avec des chiffres.',
      metrics: [
        {
          id: 'bm1',
          name: 'Vitesse de neutralisation des incidents',
          value: '42 min',
          change: '↓6 min vs mois dernier',
          baseline: 'Objectif SLA : moins de 55 min',
          narrative:
            'Le routage assisté par automatisation et les playbooks pré-validés réduisent les boucles de revue tandis que les fondateurs statuent lors des stand-ups dédiés.',
        },
        {
          id: 'bm2',
          name: 'Part de couverture positive',
          value: '71 %',
          change: '↑9 pts T/T',
          baseline: 'Benchmark SaaS entreprise : 58 %',
          narrative:
            'Le déploiement rapide des porte-paroles et les contre-récits médias ont retourné les narratifs hostiles dans la presse tech et fintech.',
        },
        {
          id: 'bm3',
          name: 'Revenus préservés',
          value: '4,8 M$',
          change: 'protégés dernier trimestre',
          baseline: 'Risque initial : 6,2 M$ d’exposition',
          narrative:
            'Retraits marketplace, négatifs mots-clés et automatisation des communications clients ont empêché la fuite de conversion.',
        },
      ],
    },
    indices: {
      title: 'Indices de résilience',
      description:
        'Des scores composites croisent la santé des signaux, la confiance des audiences et la préparation des playbooks pour détecter les dérives avant l’escalade.',
      indices: [
        {
          id: 'ri1',
          name: 'Stabilité réputationnelle',
          score: '92 / 100',
          trend: '↑ 3 pts semaine après semaine',
          signal: 'Harmonie recherche & avis',
          recommendation:
            'Maintenir les sessions AMA fondatrices hebdomadaires et étendre les invitations advocacy aux cercles fidélité pour conserver la marge positive.',
        },
        {
          id: 'ri2',
          name: 'Précision de réponse',
          score: '88 / 100',
          trend: '↔ stable',
          signal: 'Vitesse d’exécution des playbooks',
          recommendation:
            'Actualiser les macros de scénario pour le desk LATAM et faire tourner les pods QA automatisation lors du prochain cycle de drill.',
        },
        {
          id: 'ri3',
          name: 'Préparation à l’escalade',
          score: '95 / 100',
          trend: '↑ 1 pt',
          signal: 'Répétition de la hotline fondateur',
          recommendation:
            'Bloquer la prochaine revue war room fusion avec produit, finance et juridique pour préserver l’alignement premium.',
        },
      ],
    },
    briefings: {
      title: 'Briefings fondateurs',
      description:
        'Des synchronisations rapides maintiennent l’alignement. Chaque session condense l’analyse, le playbook en cours et les décisions attendues des dirigeants.',
      sessions: [
        {
          id: 'b1',
          title: 'Stand-up exécutif',
          audience: 'Fondateurs & communication',
          cadence: 'Quotidien · 09h00 CET',
          host: 'Artur Ziganshin',
          focus: 'Prioriser les escalades nocturnes, nommer les porte-parole et valider les budgets.',
          commitment: '15 minutes avec registre d’actions dans Notion.',
        },
        {
          id: 'b2',
          title: 'Huddle intelligence régions',
          audience: 'DG régionaux & marketing',
          cadence: 'Bi-hebdomadaire',
          host: 'Clara Martel',
          focus: 'Performance des playbooks, ajustements créatifs locaux, stabilité des canaux.',
          commitment: '25 minutes + récap asynchrone avec assets.',
        },
        {
          id: 'b3',
          title: 'Point alignement board',
          audience: 'Board & relations investisseurs',
          cadence: 'Hebdomadaire',
          host: 'Diego Santos',
          focus: 'Posture réputationnelle, ROI récupéré et demandes de support.',
          commitment: '20 minutes avec compte rendu Q&R.',
        },
      ],
    },
    coverage: {
      title: 'Couverture follow-the-sun',
      description:
        'Trois desks se relaient pour ne jamais quitter votre marque des yeux. Chaque pod regroupe analystes natifs, ingénieurs automation et partenaires juridiques.',
      desks: [
        {
          id: 'cov1',
          region: 'Desk Amériques',
          uptime: '18 heures',
          focus: 'Fraude marketplace, phishing dirigeants, achats médias de crise.',
          analysts: 'Diego Santos · Daniela Rojas · Jason Lee',
        },
        {
          id: 'cov2',
          region: 'Desk EMEA',
          uptime: '20 heures',
          focus: 'Volatilité search, veille réglementaire, escalades trust & safety.',
          analysts: 'Artur Ziganshin · Clara Martel · Sofia Andersson',
        },
        {
          id: 'cov3',
          region: 'Accélération APAC',
          uptime: '16 heures',
          focus: 'Clonage marketplace, manipulation d’avis, enablement partenaires.',
          analysts: 'Kenji Arai · Priya Desai · Miguel Cortez',
        },
      ],
    },
    responders: {
      title: 'Cellule leadership des répondants',
      description:
        'Les stratèges menés par le fondateur orchestrent chaque pont d’incident et maintiennent l’alignement des desks régionaux. Ils valident les contre-mesures, briefent les parties prenantes et coachent les analystes de garde.',
      roster: [
        {
          id: 'res1',
          name: 'Artur Ziganshin',
          role: 'Fondateur & Chief Strategist',
          coverage: 'Pont d’escalade global · 24/7',
          specialties: 'Incidents critiques, narration investisseurs, reconstructions multi-marchés',
          languages: 'Anglais · Français · Russe',
          background:
            'Pilote chaque sprint de fusion en personne, synchronisant juridique, sécurité, growth et produit pour donner aux fondateurs des décisions claires en quelques minutes.',
        },
        {
          id: 'res2',
          name: 'Clara Martel',
          role: 'Directrice observatoire EMEA',
          coverage: 'Crises EMEA · Search & avis',
          specialties: 'Exécution marketplace, communication réglementaire, contrôle narratif multilingue',
          languages: 'Français · Anglais · Italien',
          background:
            'Ancienne rédactrice en chef qui coordonne les pods de Paris et Dubaï, rédige des contre-discours et prépare les coalitions avant qu’une polémique n’émerge.',
        },
        {
          id: 'res3',
          name: 'Diego Santos',
          role: 'Lead strategist desk Amériques',
          coverage: 'Amériques Nord & Sud · Commande continue',
          specialties: 'Protection dirigeants, escalades trust & safety, relance marketplace retail',
          languages: 'Espagnol · Anglais · Portugais',
          background:
            'Accompagne les fondateurs sur les incidents critiques, anime des war rooms bilingues et active les retraits plateformes via notre réseau juridique.',
        },
      ],
    },
    labs: {
      title: 'Labs de l’observatoire',
      description:
        "Les fondateurs accèdent directement à nos pods développant modèles prédictifs, automatisations et contre-narrations adaptées à chaque marché.",
      tracks: [
        {
          id: 'l1',
          name: 'Lab fusion de signaux',
          focus: 'Fusionne search, social et CRM pour un score de risque par région.',
          cadence: 'Mise à jour quotidienne',
          lead: 'Clara Martel · Intelligence EMEA',
        },
        {
          id: 'l2',
          name: 'Strike team narratif',
          focus: 'Crée des assets de crise en 3 langues avec achats média adaptatifs.',
          cadence: 'Sprints hebdo',
          lead: 'Diego Santos · Créa LATAM',
        },
        {
          id: 'l3',
          name: 'Forensics marketplace',
          focus: 'Détecte les vendeurs contrefaits via clustering IA et audits manuels.',
          cadence: 'Bi-hebdo',
          lead: 'Artur Ziganshin · Founder desk',
        },
      ],
    },
    alliances: {
      title: 'Alliances & intégrations enterprise',
      description:
        "Nous ancrons l’observatoire dans vos écosystèmes marketing, commerce et juridique afin que chaque signal de risque arrive directement auprès des opérateurs.",
      programs: [
        {
          id: 'ally1',
          name: 'Alliance gardienne search',
          partners: 'Google Ads Integrity · Microsoft Ads Trust · Écoutes search custom',
          coverage: 'Surveillance temps réel des enchères mots-clés de marque dans 37 marchés avec scoring d’anomalie.',
          integration: 'Déverse des dossiers prêts pour retrait dans Salesforce et le bridge Slack incidents.',
          outcome: 'Bloque les détournements de clics et évite la fuite de réputation avant l’impact budgétaire.',
        },
        {
          id: 'ally2',
          name: 'Guilde d’application marketplace',
          partners: 'Amazon Brand Registry · Mercado Libre Compliance · Shopify Protect',
          coverage: 'Suit listings, clones vendeurs et vitesse d’avis sur 48 plateformes.',
          integration: 'Synchronise les IDs de cas dans Zendesk et déclenche les workflows juridiques avec le cabinet.',
          outcome: 'Réduit les retraits contrefaçon de plusieurs jours à quelques heures tout en préservant les notes.',
        },
        {
          id: 'ally3',
          name: 'Collectif réponse communication',
          partners: 'Réseaux PR de crise · Banc de porte-parole régionaux · Affaires juridiques',
          coverage: 'Cartographie les narratifs hostiles dans la presse, les podcasts et la vidéo courte.',
          integration: 'Alimente les heatmaps narratifs dans Notion et les kits médias press room.',
          outcome: 'Permet aux fondateurs de garder une longueur d’avance avec messages alignés et validations rapides.',
        },
      ],
    },
    automations: {
      title: 'Chorégraphie humain + automatisation',
      description:
        'L’automatisation absorbe la charge tandis que les analystes valident chaque décision clé nécessitant du jugement et l’accord des dirigeants.',
      workflows: [
        {
          id: 'auto1',
          name: 'Triage pic de sentiment',
          trigger: 'Le sentiment social ou avis chute de plus de 6 points en une heure.',
          automation: 'Le bot fusion des signaux escalade avec dashboards annotés et transcriptions taguées.',
          human: 'Un analyste valide les faux positifs et briefe les fondateurs sur la réponse recommandée.',
        },
        {
          id: 'auto2',
          name: 'Autopilote retraits marketplace',
          trigger: 'Clusters contrefaits ou dumping prix détectés sur les SKU prioritaires.',
          automation: 'Assemble le dossier probant, envoie les notifications ayants droit et suspend les vendeurs.',
          human: 'Le relais juridique confirme les nuances locales et coordonne la communication stock de remplacement.',
        },
        {
          id: 'auto3',
          name: 'Bouclier usurpation dirigeants',
          trigger: 'Domaines sosies ou messageries spoofées imitant les identités leadership.',
          automation: 'Met en quarantaine les domaines, renforce DMARC et pousse des scripts d’alerte aux partenaires.',
          human: 'La cellule fondateur enregistre une alerte personnalisée et priorise la sensibilisation directe.',
        },
      ],
    },
    knowledgeBase: {
      title: 'Base de connaissances pilotée par les fondateurs',
      description:
        'Playbooks, modèles d’annonces et guides de répétition rédigés par le founder desk pour garder vos équipes prêtes face aux signaux de l’observatoire.',
      resources: [
        {
          id: 'kb1',
          name: 'Espace d’interception de crise',
          format: 'Playbook Notion interactif',
          length: '42 pages',
          summary:
            'Rituels d’interception pas à pas, amorces de messages bilingues et macros d’escalade mises à jour chaque semaine par la cellule fondatrice.',
          cta: 'Ouvrir le playbook',
          target: 'resources',
        },
        {
          id: 'kb2',
          name: 'Atelier chorégraphie des signaux',
          format: 'Briefing vidéo + transcription',
          length: 'Parcours de 9 minutes',
          summary:
            'Comprenez comment nous fusionnons sentiment, search et marketplaces en une narration d’escalade que les conseils peuvent activer immédiatement.',
          cta: 'Regarder le briefing',
          target: 'blog',
        },
        {
          id: 'kb3',
          name: 'Session de répétition exécutive',
          format: 'Session live réservée aux fondateurs',
          length: 'Agenda de 20 minutes',
          summary:
            'Réservez un passage privé avec Artur Ziganshin pour adapter rituels, métriques de succès et drills du prochain trimestre.',
          cta: 'Réserver une session',
          target: 'contact',
        },
      ],
    },
    casefiles: {
      title: 'Dossiers terrain en cours',
      description:
        'Instantanés du plateau de l’observatoire montrant comment nous synchronisons veille, juridique et communication pour résoudre les crises en quelques heures.',
      cases: [
        {
          id: 'cf1',
          name: 'Déluge d’avis pour un acteur luxe',
          sector: 'Retail luxe',
          incident: 'Vague coordonnée de notes une étoile sur marketplaces européennes et Google Shopping.',
          action:
            'Constitution de dossiers marchand, engagement des équipes trust & safety et diffusion d’un pack rassurance clients en deux heures.',
          result:
            'Retour à une note 4,6★, réactivation des emplacements Shopping et préservation du chiffre d’affaires week-end.',
        },
        {
          id: 'cf2',
          name: 'Purge de clones d’app fintech',
          sector: 'Services financiers',
          incident: 'Applications imitatrices collectant des identifiants sur les stores LATAM.',
          action:
            'Activation juridique, mobilisation des équipes trust plateformes et diffusion d’une alerte in-app trilingue.',
          result: 'Suppression de 31 clones, restauration des classements stores et arrêt des tentatives de credential stuffing.',
        },
        {
          id: 'cf3',
          name: 'Rumeur fuite données hôtelière',
          sector: 'Hospitalité',
          incident: 'Canaux Telegram anonymes annonçant une fuite clients avant un week-end critique.',
          action:
            'Corrélation des télémétries, traçage de l’origine et briefing presse plus VIP avec mises à jour vérifiées.',
          result: 'Spéculation neutralisée, taux d’occupation maintenu à 96 % et publication d’un bulletin résilience.',
        },
      ],
    },
    intelRequests: {
      title: 'Desk renseignements express',
      description:
        'Les directions communication et opérations soumettent des requêtes flash dès qu’un pic doit être éclairci.',
      requests: [
        {
          id: 'ir1',
          name: 'Analyse pic influenceurs APAC',
          sla: '90 minutes pour le premier insight',
          status: 'En cours',
          summary:
            'Qualification d’un TikTok viral pour déterminer s’il s’agit d’un pic organique ou d’une campagne hostile orchestrée.',
          owner: 'Clara Martel · Desk observatoire APAC',
        },
        {
          id: 'ir2',
          name: 'Surveillance rappel produit LATAM',
          sla: '45 minutes pour le pack escalade',
          status: 'Clos en 4 heures',
          summary:
            'Croisement plaintes clients, données logistiques et conversations vendeurs avant un rappel volontaire.',
          owner: 'Diego Santos · Lead réponse LATAM',
        },
        {
          id: 'ir3',
          name: 'Synthèse briefing board EMEA',
          sla: 'Brief exécutif dans la journée',
          status: 'Livré',
          summary:
            'Préparation de courbes de réputation et projections risques T+1 pour le comité audit et risques.',
          owner: 'Artur Ziganshin · Founder desk',
        },
      ],
    },
    fieldNotes: {
      title: 'Notes terrain des analystes',
      description:
        'Des dépêches brutes depuis la salle d’observation qui capturent les nuances humaines derrière nos signaux automatisés.',
      regionLabel: 'Région',
      windowLabel: 'Fenêtre d’observation',
      ownerLabel: 'Observateur',
      observationLabel: 'Ce que nous constatons',
      actionLabel: 'Action engagée',
      followUpLabel: 'Suite prévue',
      notes: [
        {
          id: 'fn1',
          headline: 'Manœuvre créateur désamorcée à temps',
          region: 'Amérique du Nord · DNVB',
          window: '04 h 00 – 07 h 00 ET',
          owner: 'Diego Santos',
          observation:
            'Serveurs Discord d’influenceurs diffusant un faux dossier “révélations” semé par un ancien partenaire agence.',
          action:
            'Partage des preuves aux créateurs de confiance, déclenchement des watchlists marketplace et préparation de points de langage exécutifs.',
          followUp:
            'Organiser un town hall avec le top 20 créateurs et mettre à jour le kit affiliés sous 24 h.',
        },
        {
          id: 'fn2',
          headline: 'Campagne de rumeurs marketplace neutralisée',
          region: 'EMEA · Luxe',
          window: '09 h 30 – 11 h 00 CET',
          owner: 'Clara Martel',
          observation:
            'Notes vocales WhatsApp laissant entendre un rappel qualité, traquées jusqu’à un réseau de revendeurs opportunistes.',
          action:
            'Collecte audio médico-légale, demandes de retrait, et script de réassurance personnalisé FR/EN/AR pour les concierges clients.',
          followUp:
            'Effectuer des achats mystère pour valider l’authenticité et surveiller la fidélité lors du prochain triage matinal.',
        },
        {
          id: 'fn3',
          headline: 'Rumeur bancaire régionale contenue',
          region: 'LATAM · Services financiers',
          window: '18 h 00 – 20 h 00 BRT',
          owner: 'Artur Ziganshin',
          observation:
            'Threads Reddit coordonnés évoquant une insolvabilité, relayés par fondateurs fintech et fonds de capital-risque.',
          action:
            'Activation du pont fondateur, publication de preuves de liquidité et synchronisation avec régulateurs et partenaires de paiement avant l’ouverture des marchés.',
          followUp:
            'Maintenir une veille horaire nocturne et préparer une FAQ exécutive pour les investisseurs du lendemain matin.',
        },
      ],
    },
    intercepts: {
      title: 'Journal des interceptions critiques',
      description:
        'Le journal en direct des incidents les plus sévères neutralisés cette semaine, prêt à être partagé avec vos instances dirigeantes.',
      entries: [
        {
          id: 'i1',
          name: 'Pitch presse deepfake neutralisé',
          severity: 'Sévérité 1 · Contention active',
          timestamp: '04 h 10 UTC',
          summary:
            'Un faux pitch média généré par IA usurpait notre fondateur avec des formulaires de vol d’identifiants destinés aux journalistes fintech.',
          resolution:
            'Bloqué avant publication, réinitialisation des accès et diffusion de citations vérifiées via le fil du command center.',
          owner: 'Artur Ziganshin · Cellule fondateur',
          channel: 'Presse & relations médias',
        },
        {
          id: 'i2',
          name: 'Escadron d’avis frauduleux démantelé',
          severity: 'Sévérité 2 · Neutralisé',
          timestamp: '12 h 25 CET',
          summary:
            'Six cents faux avis marketplace orchestrés par un bot concurrent visaient nos gammes premium en France.',
          resolution:
            'Déréférencement express, restauration des notes authentiques et relance réassurance vers les cohortes fidélité en 45 minutes.',
          owner: 'Clara Martel · Intelligence EMEA',
          channel: 'Gouvernance marketplace',
        },
        {
          id: 'i3',
          name: 'Arnaque WhatsApp dirigeant bloquée',
          severity: 'Sévérité 2 · Contenue',
          timestamp: '21 h 40 BRT',
          summary:
            'Des messages WhatsApp usurpés réclamant des virements urgents ont touché 42 partenaires au Brésil.',
          resolution:
            'Désactivation des domaines sosies, kit d’alerte bilingue et sécurisation des flux partenaires dans l’heure.',
          owner: 'Diego Santos · Desk Amériques',
          channel: 'Communication partenaires',
        },
      ],
    },
    rhythms: {
      title: 'Rituels de réponse',
      description:
        'Une cadence partagée maintient fondateurs, analystes et automatisation parfaitement synchronisés autour du prochain mouvement décisif.',
      rituals: [
        {
          id: 'rh1',
          name: 'Revue triage à l’aube',
          window: '06 h 30 CET · 20 min',
          owner: 'Clara Martel & desk automatisation',
          outcome: 'Aligner les escalades nocturnes, signaler les suivis manuels et recalibrer les priorités du radar.',
          tooling: 'Tableau fusion des signaux · Journal de crise Notion',
        },
        {
          id: 'rh2',
          name: 'Synchronisation pulse marché',
          window: '13 h 00 UTC · 25 min',
          owner: 'DG régionaux & leads observatoire',
          outcome: 'Passer en revue les deltas de sentiment, ajuster les créations et confirmer l’état des files de réponse.',
          tooling: 'Boards observatoire en direct · Salle d’actifs Figma',
        },
        {
          id: 'rh3',
          name: 'Récap fondateur soir',
          window: '19 h 30 locale · 15 min',
          owner: 'Artur Ziganshin & incident commander',
          outcome: 'Valider les résolutions, escalader les blocages et partager la watchlist du lendemain.',
          tooling: 'Bridge command center · Canal incident Slack',
        },
      ],
    },
    escalation: {
      title: 'Ponts d’escalade',
      description:
        "Quand l’histoire s’emballe, engagez notre hotline, l’espace chiffré ou notre rotation war-room. Chaque pont mène au core team.",
      contacts: [
        {
          id: 'e1',
          name: 'Hotline Traceremove',
          role: 'Réponse mondiale en 60 min',
          channel: '+1 606 302 2958',
        },
        {
          id: 'e2',
          name: 'Inbox signaux',
          role: 'Canal chiffré pour captures, listings et scripts',
          channel: 'signal@traceremove.com',
        },
        {
          id: 'e3',
          name: 'Bridge fondateur',
          role: 'Artur Ziganshin rejoint les incidents critiques',
          channel: 'réservation Calendly · slot 24/7',
        },
      ],
      note: 'Besoin de WhatsApp ou Telegram ? Nous ouvrons un canal sécurisé en quelques minutes.',
    },
    cta: {
      title: 'Prêt à activer l’observatoire ?',
      body: 'Nous connectons vos analytics, vos équipes comms et produit en moins de 10 jours. Construisons votre défense de marque.',
      primary: 'Planifier une session stratégique',
      secondary: 'Découvrir services & tarifs',
    },
  },
  es: {
    hero: {
      eyebrow: 'Observatorio permanente',
      title: 'Inteligencia en vivo para cada latido de la marca',
      subtitle: 'Traceremove Brand Observatory',
      description:
        'Nuestros analistas, la pila de observabilidad con IA y las mesas de respuesta vigilan cada señal de tu marca — búsquedas, redes, marketplaces — para neutralizar riesgos antes de que exploten.',
      primaryCta: 'Agenda un tour del observatorio',
      secondaryCta: 'Mira cómo atendemos picos',
      secondaryHref: '#observatory-radar',
      metrics: [
        {
          id: 'm1',
          value: '2,4 M',
          label: 'Señales analizadas al día',
          detail: 'Impresiones search, variaciones de reseñas, colas antifraude.',
        },
        {
          id: 'm2',
          value: '38 min',
          label: 'Neutralización promedio',
          detail: 'Desde la detección hasta el plan entregado a founders.',
        },
        {
          id: 'm3',
          value: '11 idiomas',
          label: 'Cobertura humana',
          detail: 'Analistas nativos en Américas, EMEA, LATAM y APAC.',
        },
      ],
      visualCaption: 'Dashboards en tiempo real con deriva de sentimiento por mercado.',
    },
    radar: {
      title: 'Mesa radar global',
      description:
        'Cada alerta se clasifica, contextualiza y asigna al operador correcto. El triage asistido por IA reduce el ruido mientras los analistas validan cada bandera roja.',
      signals: [
        {
          id: 's1',
          title: 'Barridos de reseñas falsas',
          status: 'Rojo — operativo',
          detail:
            'Oleadas de reseñas de 1 estrella en tres apps de delivery en Montreal. Plantillas legales emitidas y recuperación de fichas en curso.',
        },
        {
          id: 's2',
          title: 'Volatilidad en búsqueda',
          status: 'Ámbar — monitoreo',
          detail:
            'Competidor comprando keywords de marca en París. Ajuste de negativas y nuevos landings activados.',
        },
        {
          id: 's3',
          title: 'Imitación en marketplaces',
          status: 'Resuelto — dado de baja',
          detail:
            'Vendedor madrileño suspendido. Lista de dominios similares ampliada y registrar notificado.',
        },
        {
          id: 's4',
          title: 'Alertas de phishing a ejecutivos',
          status: 'Verde — simulacro',
          detail:
            'Fundadores completaron ensayo bilingüe con la célula de seguridad. Próximo drill con el equipo LATAM.',
        },
      ],
    },
    spotlights: {
      title: 'Spotlights y storyboards',
      description:
        'Cada semana contamos la historia detrás de los picos. Medimos impacto, compartimos contra-narrativa y entregamos assets listos para desplegar.',
      cards: [
        {
          id: 'c1',
          title: 'Caída de confianza q-commerce',
          summary:
            'Un TikTok viral acusó a un súper express de entregar productos dañados. El sentimiento cayó 27 puntos en una noche.',
          insight:
            'Cambio rápido de assets y declaración bilingüe de la COO revirtieron el daño en 12 horas.',
          action: 'Descargar kit de assets',
        },
        {
          id: 'c2',
          title: 'Red de clones de lujo',
          summary:
            'Once tiendas falsas en Instagram copiaban a un reseller español y desviaban pagos.',
          insight:
            'Traceremove coordinó las bajas, comunicó a clientes y protegió €420k de pipeline en 3 días.',
          action: 'Ver plantillas de respuesta',
        },
        {
          id: 'c3',
          title: 'Cuello de botella fintech',
          summary:
            'Racha de reseñas negativas ligada a un nuevo proveedor KYC. Altas bajaron 14 % semana contra semana.',
          insight:
            'FAQs dinámicas, tests CRO y alcance directo del fundador estabilizaron la conversión.',
          action: 'Abrir flujo de remediación',
        },
      ],
    },
    pulse: {
      title: 'Alertas pulse de incidentes',
      description:
        'Los fundadores se mantienen un paso adelante con paquetes de alertas enviados a los canales que ya utilizan. Cada pulse incluye resumen, pasos sugeridos y responsables asignados.',
      alerts: [
        {
          id: 'p1',
          name: 'Barrido de integridad de reseñas',
          medium: 'Signal + Slack',
          cadence: 'Disparado a los 2 min de la anomalía',
          summary:
            'Paquetes de intercepción que cruzan reseñas sospechosas en marketplaces, comentarios de paid media y verbatims NPS.',
          focus:
            'Deriva los intentos de manipulación directo a operaciones, legal y media con lenguaje aprobado por los fundadores.',
          recipients: 'Founders · Líderes de operaciones regionales · Mesa legal',
        },
        {
          id: 'p2',
          name: 'Broadcast de crisis por WhatsApp',
          medium: 'Lista cifrada de WhatsApp',
          cadence: 'Cada 30 minutos hasta neutralizar',
          summary:
            'Resumen móvil seguro que combina puntaje de amenaza, impacto en clientes y mensajes clave para ejecutivos en movimiento.',
          focus:
            'Mantiene al liderazgo distribuido alineado con assets de respuesta y comunicación a stakeholders mientras el command center ejecuta.',
          recipients: 'Equipo ejecutivo · Country managers · Partners de PR',
        },
        {
          id: 'p3',
          name: 'Interruptor de suplantación ejecutiva',
          medium: 'Email + puente fundador',
          cadence: 'Inmediato al detectar spoof',
          summary:
            'Grafos de identidad detectan dominios, SMS y landing pages comprometidas ligadas a los ejecutivos.',
          focus:
            'Envía kits de derribo, reseteos MFA y guiones para inversores con etiquetas de severidad por exposición.',
          recipients: 'Founders · Seguridad · Relaciones con inversores',
        },
      ],
    },
    threatReports: {
      title: 'Reportes de amenazas semanales',
      description:
        'Cada viernes enviamos un digest para founders con los riesgos más críticos, las contramedidas ejecutadas y dónde la dirección aceleró la recuperación.',
      reports: [
        {
          id: 'r1',
          name: 'Pulso de fraude en marketplaces',
          timeframe: 'Últimos 7 días',
          summary:
            'Clusters de falsificaciones en marketplaces de lujo europeos atacando accesorios. Nueve tiendas conectadas vía wallets.',
          response:
            'Emitimos bajas, actualizamos copy en PDP y lanzamos campañas de tranquilidad en paid social.',
          asset: 'Abrir informe de aplicación',
        },
        {
          id: 'r2',
          name: 'Ataques de reseñas generativas',
          timeframe: 'Ventana de 72 h',
          summary:
            'Racha negativa escrita con IA en apps de delivery españolas con frases idénticas y huellas VPN.',
          response:
            'Activamos prompts a compradores verificados, campañas de contrapeso mediático y avisos a marketplaces.',
          asset: 'Ver kit de contra-narrativa',
        },
        {
          id: 'r3',
          name: 'Ola de suplantación ejecutiva',
          timeframe: 'Sprint actual',
          summary:
            'Emails de onboarding falsos a prospectos LATAM mencionando una ronda ficticia y órdenes de transferencia.',
          response:
            'Solicitamos bajas a registradores, actualizamos nurtures y avisamos a inversionistas con briefing.',
          asset: 'Descargar alerta a inversionistas',
        },
      ],
    },
    dashboards: {
      title: 'Dashboards de inteligencia',
      description:
        'Los dashboards convierten sentimiento, conversión y alertas de fraude en contexto ejecutivo listo para acción. Cada panel une telemetría con el movimiento recomendado.',
      panels: [
        {
          id: 'd1',
          title: 'Deriva de sentimiento',
          metric: '+18,2',
          delta: 'pts en 72 h',
          description: 'Resumen de reseñas, redes y soporte con anomalías anotadas y CTA.',
        },
        {
          id: 'd2',
          title: 'Ingresos protegidos',
          metric: '3,1 M€',
          delta: 'este trimestre',
          description: 'Relaciona incidentes con pérdida proyectada y confirma recuperación tras el playbook.',
        },
        {
          id: 'd3',
          title: 'Superficies emergentes',
          metric: '27',
          delta: 'nuevas menciones',
          description: 'Detecta nuevos canales donde se menciona la marca para intervenir con seguridad.',
        },
      ],
    },
    forecasts: {
      title: 'Previsiones de escenarios',
      description:
        'Nuestros modelos predictivos anticipan la siguiente curva de disrupción para que los directivos sepan a qué velocidad movilizarse, qué regiones sentirán el impacto y qué contra-movimientos ya están listos.',
      projections: [
        {
          id: 'f1',
          horizon: 'Próximas 24 h',
          scenario: 'Oleada coordinada de reseñas falsas',
          summary:
            'Las señales de marketplaces muestran cuentas desechables preparando rachas de una estrella en entregas y servicios a domicilio en Montreal y Lyon.',
          impact:
            'El modelo prevé una caída del 12 % en altas de lealtad y -0,4 estrellas si los barridos tardan.',
          action:
            'Activar barridos acelerados de reseñas, exigir comprobantes verificados y lanzar solicitudes legales en Uber Eats, Deliveroo y Amazon Handmade.',
        },
        {
          id: 'f2',
          horizon: 'Próximos 7 días',
          scenario: 'Bucle de desinformación de influencers',
          summary:
            'Conversaciones FR y ES de creadores insinúan un retiro fabricado por una agencia financiada por competidor en rutinas de skincare.',
          impact:
            'Podría elevar 22 % las búsquedas negativas de marca y multiplicar por 1,3 los tickets de soporte si las réplicas tardan.',
          action:
            'Preproducir clips del fundador, alinear citas de portavoces en tres idiomas y sincronizar oleadas pagadas de tranquilidad con afiliados.',
        },
        {
          id: 'f3',
          horizon: 'Perspectiva 30 días',
          scenario: 'Red de suplantación en marketplaces',
          summary:
            'Permutaciones de dominios y handles sociales registrados en APAC señalan una red de dropshipping lista para suplantar tiendas oficiales.',
          impact:
            'Amenaza 2,1 M$ de GMV y la confianza de partners con disputas en cadena.',
          action:
            'Pre-registrar dominios críticos, solicitar bloqueos a registradores, preparar verificaciones publicitarias y ensayar guiones de contacto a vendedores con operaciones de partners.',
        },
      ],
    },
    benchmarks: {
      title: 'Indicadores de rendimiento',
      description:
        'Los benchmarks en vivo muestran cómo la operación del observatorio supera al mercado para que liderazgo comunique avances con evidencia.',
      metrics: [
        {
          id: 'bm1',
          name: 'Velocidad de neutralización de incidentes',
          value: '42 min',
          change: '↓6 min vs mes anterior',
          baseline: 'Objetivo SLA: menos de 55 min',
          narrative:
            'El enrutamiento asistido por automatización y los playbooks preaprobados reducen ciclos de revisión mientras los founders deciden en los stand-ups dedicados.',
        },
        {
          id: 'bm2',
          name: 'Cuota de cobertura positiva',
          value: '71 %',
          change: '↑9 pts trimestre a trimestre',
          baseline: 'Referente SaaS empresarial: 58 %',
          narrative:
            'El despliegue veloz de portavoces y contrarrelatos mediáticos revirtió narrativas hostiles en prensa tech y fintech.',
        },
        {
          id: 'bm3',
          name: 'Ingresos preservados',
          value: '4,8 M$',
          change: 'protegidos último trimestre',
          baseline: 'Riesgo base: 6,2 M$ expuestos',
          narrative:
            'Los retiros en marketplaces, keywords negativos y automatización de comunicaciones evitaron fugas de conversión.',
        },
      ],
    },
    indices: {
      title: 'Índices de resiliencia',
      description:
        'Puntajes compuestos combinan la salud de señales, la confianza de la audiencia y la preparación de los playbooks para detectar derivas antes de que escalen.',
      indices: [
        {
          id: 'ri1',
          name: 'Estabilidad reputacional',
          score: '92 / 100',
          trend: '↑ 3 pts semana a semana',
          signal: 'Armonía de búsqueda y reseñas',
          recommendation:
            'Mantener AMAs ejecutivas semanales y ampliar prompts de advocacy a cohortes de lealtad para sostener la ventaja.',
        },
        {
          id: 'ri2',
          name: 'Precisión de respuesta',
          score: '88 / 100',
          trend: '↔ estable',
          signal: 'Velocidad de activación de playbooks',
          recommendation:
            'Actualizar macros de escenario para el desk LATAM y rotar los pods de QA de automatización en el próximo ciclo de drill.',
        },
        {
          id: 'ri3',
          name: 'Preparación de escalamiento',
          score: '95 / 100',
          trend: '↑ 1 pt',
          signal: 'Ensayo de hotline de fundadores',
          recommendation:
            'Agendar el siguiente recorrido de war room de fusión con producto, finanzas y legal para conservar la alineación premium.',
        },
      ],
    },
    briefings: {
      title: 'Briefings para founders',
      description:
        'Sincronizaciones exprés mantienen a los decisores alineados. Cada sesión condensa análisis, playbook en curso y próximos pasos para liderazgo.',
      sessions: [
        {
          id: 'b1',
          title: 'Briefing ejecutivo diario',
          audience: 'Founders y comunicación',
          cadence: 'Diario · 09:00 CET',
          host: 'Artur Ziganshin',
          focus: 'Priorizar escalaciones nocturnas, asignar voceros y aprobar desbloqueos de presupuesto.',
          commitment: '15 minutos con registro de acciones en Notion.',
        },
        {
          id: 'b2',
          title: 'Huddle de inteligencia regional',
          audience: 'GMs regionales y marketing',
          cadence: 'Dos veces por semana',
          host: 'Clara Martel',
          focus: 'Revisar performance de playbooks, alinear cambios creativos y salud de canales.',
          commitment: '25 minutos más recap asíncrono con assets.',
        },
        {
          id: 'b3',
          title: 'Dial-in para el board',
          audience: 'Consejo e inversores',
          cadence: 'Semanal',
          host: 'Diego Santos',
          focus: 'Postura reputacional, ROI protegido y solicitudes de soporte.',
          commitment: '20 minutos incluyendo Q&A transcrito.',
        },
      ],
    },
    coverage: {
      title: 'Cobertura follow-the-sun',
      description:
        'Tres desks se relevan para que la marca nunca quede sin vigilancia. Cada pod combina analistas nativos, ingenieros de automatización y aliados legales.',
      desks: [
        {
          id: 'cov1',
          region: 'Desk Américas',
          uptime: '18 horas',
          focus: 'Fraude en marketplaces, phishing a ejecutivos, medios de crisis.',
          analysts: 'Diego Santos · Daniela Rojas · Jason Lee',
        },
        {
          id: 'cov2',
          region: 'Desk EMEA',
          uptime: '20 horas',
          focus: 'Volatilidad en search, monitoreo regulatorio, escalaciones de trust & safety.',
          analysts: 'Artur Ziganshin · Clara Martel · Sofia Andersson',
        },
        {
          id: 'cov3',
          region: 'Aceleración APAC',
          uptime: '16 horas',
          focus: 'Clones de marketplaces, manipulación de reseñas, enablement de partners.',
          analysts: 'Kenji Arai · Priya Desai · Miguel Cortez',
        },
      ],
    },
    responders: {
      title: 'Mesa de liderazgo de respondedores',
      description:
        'Estrategas liderados por el fundador sostienen cada puente de incidentes y mantienen alineados a los desks regionales. Aprueban contramedidas, preparan a los stakeholders y guían a los analistas de guardia.',
      roster: [
        {
          id: 'res1',
          name: 'Artur Ziganshin',
          role: 'Fundador y Chief Strategist',
          coverage: 'Puente de escalación global · 24/7',
          specialties: 'Incidentes críticos, narrativa para inversores, reconstrucciones multi-mercado',
          languages: 'Inglés · Francés · Ruso',
          background:
            'Dirige personalmente cada sprint de fusión, sincronizando legal, seguridad, growth y producto para que los founders tengan decisiones claras en minutos.',
        },
        {
          id: 'res2',
          name: 'Clara Martel',
          role: 'Directora del observatorio EMEA',
          coverage: 'Crisis EMEA · Search y reseñas',
          specialties: 'Aplicación en marketplaces, comunicación regulatoria, control narrativo multilingüe',
          languages: 'Francés · Inglés · Italiano',
          background:
            'Ex editora que hoy coordina pods en París y Dubái, redacta contra-relatos y prepara coaliciones antes de que la crisis sea tendencia.',
        },
        {
          id: 'res3',
          name: 'Diego Santos',
          role: 'Lead strategist desk Américas',
          coverage: 'Américas Norte y Sur · Comando continuo',
          specialties: 'Protección ejecutiva, escalaciones trust & safety, recuperación retail en marketplaces',
          languages: 'Español · Inglés · Portugués',
          background:
            'Acompaña a los founders en incidentes críticos, dirige war rooms bilingües y coordina retiros de plataformas con nuestra red legal.',
        },
      ],
    },
    labs: {
      title: 'Labs del observatorio',
      description:
        'Los founders acceden directo a pods que construyen modelos predictivos, automatizaciones y contra-narrativas hechas para cada mercado.',
      tracks: [
        {
          id: 'l1',
          name: 'Lab de fusión de señales',
          focus: 'Combina search, social y CRM en un score de riesgo por región.',
          cadence: 'Actualización diaria',
          lead: 'Clara Martel · Inteligencia EMEA',
        },
        {
          id: 'l2',
          name: 'Strike team narrativo',
          focus: 'Crea piezas de crisis en 3 idiomas con medios adaptativos.',
          cadence: 'Sprints semanales',
          lead: 'Diego Santos · Creativo LATAM',
        },
        {
          id: 'l3',
          name: 'Forense marketplace',
          focus: 'Detecta vendedores falsos con clustering IA y barridos manuales.',
          cadence: 'Dos veces por semana',
          lead: 'Artur Ziganshin · Founder desk',
        },
      ],
    },
    alliances: {
      title: 'Alianzas e integraciones enterprise',
      description:
        'Incrustamos el observatorio en tu stack de marketing, comercio y legal para que cada señal crítica llegue al equipo que la debe ejecutar.',
      programs: [
        {
          id: 'ally1',
          name: 'Alianza guardián de search',
          partners: 'Google Ads Integrity · Microsoft Ads Trust · Escuchas search personalizadas',
          coverage: 'Vigila subastas de keywords de marca en 37 mercados con scoring de anomalías en tiempo real.',
          integration: 'Envía expedientes listos para retiro a Salesforce y al bridge de incidentes en Slack.',
          outcome: 'Bloquea clics secuestrados y evita fugas reputacionales antes de quemar presupuesto.',
        },
        {
          id: 'ally2',
          name: 'Gremio de cumplimiento marketplace',
          partners: 'Amazon Brand Registry · Mercado Libre Compliance · Shopify Protect',
          coverage: 'Monitorea listados, clones de vendedores y velocidad de reseñas en 48 plataformas.',
          integration: 'Sincroniza IDs de casos en Zendesk y abre automáticamente workflows legales con el despacho.',
          outcome: 'Reduce retiros por falsificación de días a horas mientras protege la calificación.',
        },
        {
          id: 'ally3',
          name: 'Colectivo de respuesta en comunicaciones',
          partners: 'Redes PR de crisis · Banco de voceros regionales · Asuntos legales',
          coverage: 'Mapea narrativas hostiles en prensa, pódcasts y video corto.',
          integration: 'Alimenta mapas de calor narrativos en Notion y kits de prensa listos para enviar.',
          outcome: 'Mantiene a los founders delante de la historia con mensajes alineados y aprobaciones ágiles.',
        },
      ],
    },
    automations: {
      title: 'Coreografía humano + automatización',
      description:
        'La automatización hace el trabajo pesado mientras los analistas validan cada decisión que requiere criterio y coordinación ejecutiva.',
      workflows: [
        {
          id: 'auto1',
          name: 'Triage de picos de sentimiento',
          trigger: 'El sentimiento social o de reseñas cae más de 6 puntos en una hora.',
          automation: 'El bot de fusión de señales escala con tableros anotados y transcripciones etiquetadas.',
          human: 'Un analista descarta falsos positivos y resume la respuesta sugerida a los founders.',
        },
        {
          id: 'auto2',
          name: 'Autopiloto de retiros en marketplaces',
          trigger: 'Se detectan clusters falsos o dumping de precios en SKUs prioritarios.',
          automation: 'Compila el expediente probatorio, envía avisos de derechos y suspende IDs de vendedores.',
          human: 'El enlace legal revisa matices por país y coordina mensajes de stock de reemplazo.',
        },
        {
          id: 'auto3',
          name: 'Escudo contra suplantación ejecutiva',
          trigger: 'Dominios lookalike o apps de mensajería spoofeadas imitan identidades de liderazgo.',
          automation: 'Pone en cuarentena dominios, refuerza DMARC y difunde scripts de alerta a partners.',
          human: 'La mesa del fundador graba una alerta personalizada y prioriza el contacto directo con stakeholders.',
        },
      ],
    },
    knowledgeBase: {
      title: 'Base de conocimiento dirigida por fundadores',
      description:
        'Playbooks, plantillas de comunicación y guías de ensayo escritos por el founder desk para mantener a tus equipos listos ante las señales del observatorio.',
      resources: [
        {
          id: 'kb1',
          name: 'Espacio de interceptación de crisis',
          format: 'Playbook interactivo en Notion',
          length: '42 páginas',
          summary:
            'Rituales paso a paso, aperturas bilingües para mensajes y macros de escalación actualizadas cada semana por el founder desk.',
          cta: 'Abrir el playbook',
          target: 'resources',
        },
        {
          id: 'kb2',
          name: 'Taller de coreografía de señales',
          format: 'Briefing en video + transcripción',
          length: 'Recorrido de 9 minutos',
          summary:
            'Descubre cómo combinamos sentimiento, búsqueda y marketplaces en una narrativa de escalación que los directorios activan de inmediato.',
          cta: 'Ver el briefing',
          target: 'blog',
        },
        {
          id: 'kb3',
          name: 'Huddle de ensayo ejecutivo',
          format: 'Sesión en vivo solo fundadores',
          length: 'Agenda de 20 minutos',
          summary:
            'Agenda una sesión privada con Artur Ziganshin para ajustar rituales, métricas de éxito y simulacros del próximo trimestre.',
          cta: 'Reservar consultoría',
          target: 'contact',
        },
      ],
    },
    casefiles: {
      title: 'Expedientes de campo',
      description:
        'Instantáneas del piso del observatorio mostrando cómo combinamos inteligencia, legal y comunicación para cerrar incidentes en horas.',
      cases: [
        {
          id: 'cf1',
          name: 'Diluvio de reseñas en lujo',
          sector: 'Retail de lujo',
          incident: 'Oleada coordinada de reseñas de una estrella en marketplaces europeos y Google Shopping.',
          action:
            'Se activaron equipos de confianza, expedientes de titularidad y mensajes de tranquilidad en menos de dos horas.',
          result:
            'Se recuperó la calificación a 4,6★, se reactivaron los espacios de Shopping y se protegió la facturación del fin de semana.',
        },
        {
          id: 'cf2',
          name: 'Purge de clones en app fintech',
          sector: 'Servicios financieros',
          incident: 'Apps imitadoras capturando credenciales en tiendas LATAM.',
          action:
            'Activamos al equipo legal, involucramos a los equipos trust & safety y enviamos alerta in-app en tres idiomas.',
          result: 'Eliminamos 31 clones, recuperamos rankings en tiendas y frenamos campañas de robo de credenciales.',
        },
        {
          id: 'cf3',
          name: 'Rumor de fuga en hotelería',
          sector: 'Hospitalidad',
          incident: 'Canales de Telegram anónimos insinuando filtración de datos previo a un fin de semana pico.',
          action:
            'Cruzamos telemetría, rastreamos origen y briefings a prensa y hosts VIP con estatus verificado.',
          result: 'La especulación se desactivó, la ocupación se mantuvo en 96 % y publicamos resumen de resiliencia.',
        },
      ],
    },
    intelRequests: {
      title: 'Mesa de inteligencia en vivo',
      description:
        'Dirección ejecutiva eleva solicitudes flash cuando necesita claridad inmediata sobre picos, rumores o anomalías.',
      requests: [
        {
          id: 'ir1',
          name: 'Triage de pico de influencers APAC',
          sla: '90 minutos para el primer insight',
          status: 'En curso',
          summary:
            'Validamos si un video viral de TikTok es orgánico o parte de una campaña coordinada contra la marca.',
          owner: 'Clara Martel · Mesa APAC del observatorio',
        },
        {
          id: 'ir2',
          name: 'Monitoreo de retiro en LATAM',
          sla: '45 minutos para el paquete de escalación',
          status: 'Cerrado en 4 horas',
          summary:
            'Cotejamos quejas de clientes, logística y conversaciones de vendedores antes de accionar un retiro voluntario.',
          owner: 'Diego Santos · Líder de respuesta LATAM',
        },
        {
          id: 'ir3',
          name: 'Síntesis para el board EMEA',
          sla: 'Informe ejecutivo el mismo día',
          status: 'Entregado',
          summary:
            'Preparamos tendencias de reputación y proyecciones de riesgo para el comité de auditoría y riesgos.',
          owner: 'Artur Ziganshin · Mesa del fundador',
        },
      ],
    },
    fieldNotes: {
      title: 'Bitácora de campo de analistas',
      description:
        'Despachos en vivo desde el observatorio que documentan la textura humana detrás de los tableros: qué ocurre, quién lo lidera y cómo se sostiene la respuesta.',
      regionLabel: 'Región',
      windowLabel: 'Ventana de observación',
      ownerLabel: 'Observador',
      observationLabel: 'Qué vemos',
      actionLabel: 'Acción ejecutada',
      followUpLabel: 'Próximo seguimiento',
      notes: [
        {
          id: 'fn1',
          headline: 'Emboscada de creadores desactivada',
          region: 'Norteamérica · DTC',
          window: '04:00 – 07:00 ET',
          owner: 'Diego Santos',
          observation:
            'Servidores de Discord de influencers compartiendo un supuesto dossier filtrado sembrado por un ex socio de agencia.',
          action:
            'Distribuimos el set de hechos a creadores aliados, activamos alertas en marketplaces y preparamos líneas ejecutivas.',
          followUp:
            'Realizar town hall con los 20 creadores clave y actualizar el kit de afiliados en menos de 24 horas.',
        },
        {
          id: 'fn2',
          headline: 'Campaña de susurros en marketplaces contenida',
          region: 'EMEA · Lujo',
          window: '09:30 – 11:00 CET',
          owner: 'Clara Martel',
          observation:
            'Notas de voz en WhatsApp insinuando un retiro de calidad, originadas en un sindicato de revendedores.',
          action:
            'Se documentó audio forense, se cursaron retiros y se equipó a los concierges con mensajes de tranquilidad en francés, inglés y árabe.',
          followUp:
            'Ejecutar compras encubiertas para validar inventario y revisar churn de fidelidad en el próximo triage matutino.',
        },
        {
          id: 'fn3',
          headline: 'Rumor bancario regional bajo control',
          region: 'LATAM · Servicios financieros',
          window: '18:00 – 20:00 BRT',
          owner: 'Artur Ziganshin',
          observation:
            'Hilos coordinados en Reddit insinuando insolvencia que empezaban a permear entre founders fintech e inversores.',
          action:
            'Se activó el puente fundador, se publicaron pruebas de liquidez y se coordinó con reguladores y partners de pago antes de la apertura.',
          followUp:
            'Mantener monitoreo horario nocturno y preparar paquete de Q&A ejecutivo para llamadas con inversores al amanecer.',
        },
      ],
    },
    intercepts: {
      title: 'Registro crítico de interceptaciones',
      description:
        'Bitácora en vivo de los incidentes de mayor severidad neutralizados esta semana, lista para compartir con el liderazgo.',
      entries: [
        {
          id: 'i1',
          name: 'Pitch de prensa deepfake desactivado',
          severity: 'Severidad 1 · Contención activa',
          timestamp: '04:10 UTC',
          summary:
            'Un pitch de prensa generado por IA suplantó al fundador con formularios de robo de credenciales para periodistas fintech.',
          resolution:
            'Se bloqueó antes de su publicación, se forzaron reseteos de credenciales y se enviaron citas verificadas mediante el cable del command center.',
          owner: 'Artur Ziganshin · Mesa del fundador',
          channel: 'Prensa y medios',
        },
        {
          id: 'i2',
          name: 'Enjambre de reseñas falsas desmantelado',
          severity: 'Severidad 2 · Neutralizado',
          timestamp: '12:25 CET',
          summary:
            'Seiscientas reseñas negativas en marketplaces activadas por un bot de la competencia atacaron SKU premium en Francia.',
          resolution:
            'Se presentaron retiros, se restauraron valoraciones reales y se activó un goteo de tranquilidad para clientes fieles en 45 minutos.',
          owner: 'Clara Martel · Inteligencia EMEA',
          channel: 'Gobernanza marketplace',
        },
        {
          id: 'i3',
          name: 'Estafa de WhatsApp a directivos bloqueada',
          severity: 'Severidad 2 · Contenida',
          timestamp: '21:40 BRT',
          summary:
            'Mensajes falsos de WhatsApp solicitando transferencias urgentes llegaron a 42 socios comerciales en Brasil.',
          resolution:
            'Se inhabilitaron dominios similares, se envió un paquete de alerta bilingüe y se blindaron los pagos de partners en una hora.',
          owner: 'Diego Santos · Desk Américas',
          channel: 'Comunicaciones con partners',
        },
      ],
    },
    rhythms: {
      title: 'Ritmos de respuesta',
      description:
        'La cadencia compartida mantiene a fundadores, analistas y automatización completamente sincronizados para el siguiente movimiento clave.',
      rituals: [
        {
          id: 'rh1',
          name: 'Revisión de triage al amanecer',
          window: '06:30 CET · 20 min',
          owner: 'Clara Martel y desk de automatización',
          outcome: 'Alinear escaladas nocturnas, señalar seguimientos manuales y ajustar prioridades del radar.',
          tooling: 'Panel de fusión de señales · Bitácora Notion',
        },
        {
          id: 'rh2',
          name: 'Sync de pulso de mercado',
          window: '13:00 UTC · 25 min',
          owner: 'GMs regionales y leads del observatorio',
          outcome: 'Revisar deltas de sentimiento, coordinar cambios creativos y confirmar el estado de las colas de respuesta.',
          tooling: 'Tableros del observatorio en vivo · Biblioteca Figma',
        },
        {
          id: 'rh3',
          name: 'Resumen vespertino con founders',
          window: '19:30 hora local · 15 min',
          owner: 'Artur Ziganshin y incident commander',
          outcome: 'Validar resoluciones, escalar bloqueos pendientes y compartir la watchlist del día siguiente.',
          tooling: 'Bridge del command center · Canal de incidentes en Slack',
        },
      ],
    },
    escalation: {
      title: 'Puentes de escalación',
      description:
        'Cuando hay que moverse rápido, activa la hotline, el workspace cifrado o nuestra rotación de war-room. Todo conecta con el core team.',
      contacts: [
        {
          id: 'e1',
          name: 'Hotline Traceremove',
          role: 'Respuesta global en 60 min',
          channel: '+1 606 302 2958',
        },
        {
          id: 'e2',
          name: 'Inbox de señales',
          role: 'Canal cifrado para capturas, listings y guiones',
          channel: 'signal@traceremove.com',
        },
        {
          id: 'e3',
          name: 'Puente fundador',
          role: 'Artur Ziganshin se suma directo a incidentes críticos',
          channel: 'agenda en Calendly · slot 24/7',
        },
      ],
      note: '¿Prefieres WhatsApp o Telegram? Abrimos un canal seguro en minutos.',
    },
    cta: {
      title: '¿Listo para activar el observatorio?',
      body: 'Integramos tus analytics, comunicaciones y producto en menos de 10 días. Diseñemos juntos la defensa de tu marca.',
      primary: 'Agendar sesión estratégica',
      secondary: 'Ver servicios y precios',
    },
  },
}

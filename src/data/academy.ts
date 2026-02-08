import { type Language, withRussianFallback } from './pages'

export type AcademyMetric = {
  label: string
  value: string
  annotation: string
}

export type AcademyTrack = {
  id: string
  title: string
  description: string
  duration: string
  format: string
  focus: string
  outcomes: string[]
  modules: string[]
}

export type AcademyWorkshop = {
  title: string
  focus: string
  length: string
  format: string
  takeaways: string[]
}

export type AcademyLab = {
  title: string
  description: string
  lead: string
  cadence: string
  deliverables: string[]
}

export type AcademyCohort = {
  id: string
  title: string
  start: string
  cadence: string
  focus: string
  seats: string
  description: string
  highlights: string[]
}

export type AcademyScholarship = {
  id: string
  title: string
  description: string
  value: string
  eligibility: string[]
  support: string[]
  cta: string
}

export type AcademyHighlight = {
  label: string
  description: string
}

export type AcademyMentor = {
  name: string
  role: string
  bio: string
  expertise: string[]
  availability: string
  languages: string[]
  note: string
}

export type AcademyOfficeHour = {
  title: string
  facilitator: string
  cadence: string
  format: string
  focus: string
  takeaways: string[]
}

export type AcademyCertification = {
  id: string
  title: string
  description: string
  badgeLabel: string
  validation: string
  requirements: string[]
  renewal: string
}

export type AcademyTestimonial = {
  quote: string
  name: string
  role: string
}

export type AcademyToolkit = {
  id: string
  title: string
  description: string
  artifacts: string[]
  impact: string
}

export type AcademyAlumniStory = {
  id: string
  name: string
  role: string
  organization: string
  quote: string
  outcome: string
  focus: string
}

export type AcademyHeroSecondaryTarget = 'caseStudies' | 'resources' | 'servicesPricing'

export const academyCopy: Record<
  Language,
  {
    hero: {
      eyebrow: string
      title: string
      subtitle: string
      primaryCta: string
      secondaryCta: string
      secondaryTarget: AcademyHeroSecondaryTarget
      visualCaption: string
      metrics: AcademyMetric[]
    }
    tracksHeading: string
    tracksSubtitle: string
    trackOutcomeLabel: string
    trackModuleLabel: string
    tracks: AcademyTrack[]
    workshopsHeading: string
    workshopsSubtitle: string
    workshopTakeawayLabel: string
    workshops: AcademyWorkshop[]
    labsHeading: string
    labsSubtitle: string
    labDeliverableLabel: string
    labs: AcademyLab[]
    cohortsHeading: string
    cohortsSubtitle: string
    cohortStartLabel: string
    cohortCadenceLabel: string
    cohortFocusLabel: string
    cohortSeatsLabel: string
    cohortHighlightsLabel: string
    cohortActionLabel: string
    cohortsNote: string
    cohorts: AcademyCohort[]
    mentorshipHeading: string
    mentorshipSubtitle: string
    mentorExpertiseLabel: string
    mentorAvailabilityLabel: string
    mentorLanguagesLabel: string
    mentorNoteLabel: string
    mentors: AcademyMentor[]
    officeHoursHeading: string
    officeHoursSubtitle: string
    officeHoursFacilitatorLabel: string
    officeHoursCadenceLabel: string
    officeHoursFormatLabel: string
    officeHoursFocusLabel: string
    officeHoursTakeawayLabel: string
    officeHours: AcademyOfficeHour[]
    certificationsHeading: string
    certificationsSubtitle: string
    certificationValidationLabel: string
    certificationRequirementsLabel: string
    certificationRenewalLabel: string
    certifications: AcademyCertification[]
    scholarshipsHeading: string
    scholarshipsSubtitle: string
    scholarshipValueLabel: string
    scholarshipEligibilityLabel: string
    scholarshipSupportLabel: string
    scholarshipActionLabel: string
    scholarships: AcademyScholarship[]
    communityHeading: string
    communitySubtitle: string
    communityHighlights: AcademyHighlight[]
    toolkitHeading: string
    toolkitSubtitle: string
    toolkitResourcesLabel: string
    toolkitImpactLabel: string
    toolkit: AcademyToolkit[]
    alumniHeading: string
    alumniSubtitle: string
    alumniCtaLabel: string
    alumni: AcademyAlumniStory[]
    testimonialsHeading: string
    testimonials: AcademyTestimonial[]
    cta: {
      title: string
      subtitle: string
      primary: string
      secondary: string
    }
  }
> = withRussianFallback({
  en: {
    hero: {
      eyebrow: 'Traceremove Academy',
      title: 'Train your brand guardians like insiders',
      subtitle:
        'Weekly live labs, async playbooks, and bilingual enablement guided by the strategists who neutralise threats every day.',
      primaryCta: 'Book an enablement consult',
      secondaryCta: 'Explore recent wins',
      secondaryTarget: 'caseStudies',
      visualCaption: 'Academy cohorts across three markets',
      metrics: [
        {
          label: 'Leaders certified',
          value: '1.2k+',
          annotation: 'Marketing, legal, and operations executives trained since 2021',
        },
        {
          label: 'Playbooks shipped',
          value: '180+',
          annotation: 'SEO, reputation, and escalation frameworks updated quarterly',
        },
        {
          label: 'Markets covered',
          value: '3',
          annotation: 'English, French, and Spanish cohorts every quarter',
        },
      ],
    },
    tracksHeading: 'Immersive learning tracks',
    tracksSubtitle:
      'Select the pathway that maps to your role. Each track blends live coaching, asynchronous sprints, and industry simulations.',
    trackOutcomeLabel: 'Key outcomes',
    trackModuleLabel: 'Signature modules',
    tracks: [
      {
        id: 'defense-leadership',
        title: 'Brand defense leadership',
        description:
          'Executive-level cohort covering threat intelligence, takedown orchestration, and stakeholder reporting for global teams.',
        duration: '6 weeks',
        format: 'Live + async',
        focus: 'Directors & VPs',
        outcomes: [
          'Model incident severity and escalation windows with confidence.',
          'Coordinate legal, PR, and growth squads through a unified playbook.',
          'Report measurable risk reduction to boards and investors.',
        ],
        modules: [
          'Scenario triage frameworks',
          'Cross-market takedown sequencing',
          'Stakeholder assurance dashboards',
          'Executive reporting rituals',
        ],
      },
      {
        id: 'search-authority',
        title: 'Search authority accelerators',
        description:
          'SEO managers and product marketers learn to defend rankings, rebuild trust, and activate proactive content firewalls.',
        duration: '5 weeks',
        format: 'Studio intensives',
        focus: 'Growth & SEO leads',
        outcomes: [
          'Stabilise rankings after attack cycles within fourteen days.',
          'Design multilingual content velocity plans aligned to legal guardrails.',
          'Instrument monitoring dashboards that surface harmful deltas instantly.',
        ],
        modules: [
          'SERP threat mapping drills',
          'Narrative reverse-engineering',
          'Authority rebuild cadences',
          'Analytics instrumentation lab',
        ],
      },
      {
        id: 'reputation-ops',
        title: 'Reputation operations pods',
        description:
          'Customer experience and community teams master authenticity verification, review takedowns, and escalation choreography.',
        duration: '4 weeks',
        format: 'Hybrid cohorts',
        focus: 'CX & community leads',
        outcomes: [
          'Detect fake review networks before they erode conversion.',
          'Deploy verified customer councils and rapid outreach cadences.',
          'Translate platform policy updates into ready-to-launch responses.',
        ],
        modules: [
          'Review fraud intelligence',
          'Advocacy council activation',
          'Marketplace response studio',
          'Signal handoff automation',
        ],
      },
    ],
    workshopsHeading: 'Live workshops & clinics',
    workshopsSubtitle:
      'Join tactical deep dives led by Artur Ziganshin and our multilingual pod leads. Every session includes templates you can deploy the same day.',
    workshopTakeawayLabel: 'Takeaways',
    workshops: [
      {
        title: 'Executive tabletop simulation',
        focus: 'C-suite alignment',
        length: '120 minutes',
        format: 'Virtual + recordings',
        takeaways: [
          'Crisis alignment script for leadership briefings.',
          'Board-ready scorecard template with leading indicators.',
        ],
      },
      {
        title: 'Marketplace takedown studio',
        focus: 'Commerce ops',
        length: '90 minutes',
        format: 'Interactive lab',
        takeaways: [
          'Appeal packets tuned to Amazon, Google, and Trustpilot.',
          'Automation recipes for evidence capture and follow up.',
        ],
      },
      {
        title: 'Narrative relaunch writing room',
        focus: 'Content & comms',
        length: '75 minutes',
        format: 'Live copy sprint',
        takeaways: [
          'Localized launch storyboard kit in EN/FR/ES.',
          'CTA ladder library to convert regained traffic.',
        ],
      },
    ],
    labsHeading: 'Operator labs',
    labsSubtitle:
      'Small group labs keep the momentum between workshops. Bring active incidents, dashboards, and stakeholder challenges.',
    labDeliverableLabel: 'Deliverables',
    labs: [
      {
        title: 'Signals lab',
        description: 'Instrument detection workflows and alert thresholds with our intelligence engineers.',
        lead: 'Clara Martel · Head of Intelligence',
        cadence: 'Bi-weekly',
        deliverables: [
          'Custom signal taxonomy & alert map.',
          'Data pipeline QA checklist.',
          'Slack + PagerDuty integration starter.',
        ],
      },
      {
        title: 'Escalation lab',
        description: 'Dry-run escalations with legal, PR, and marketplace experts to stress test your processes.',
        lead: 'Diego Santos · Response Lead',
        cadence: 'Weekly',
        deliverables: [
          'Escalation runbooks with bilingual scripts.',
          'Stakeholder notification matrix.',
          'Post-incident review scorecard.',
        ],
      },
      {
        title: 'Growth storytelling lab',
        description: 'Transform regained visibility into measurable revenue through conversion storytelling.',
        lead: 'Artur Ziganshin · Founder & CEO',
        cadence: 'Monthly',
        deliverables: [
          'Launch campaign storyboard.',
          'Proof library linking wins to revenue.',
          'Executive headline pack.',
        ],
      },
    ],
    cohortsHeading: 'Upcoming cohorts & immersions',
    cohortsSubtitle:
      'Reserve seats for the next Academy waves. Cohorts stay intentionally small so every leader receives direct feedback from our strategists.',
    cohortStartLabel: 'Kickoff',
    cohortCadenceLabel: 'Cadence',
    cohortFocusLabel: 'Built for',
    cohortSeatsLabel: 'Seats remaining',
    cohortHighlightsLabel: 'Spotlight labs',
    cohortActionLabel: 'Reserve seats',
    cohortsNote:
      'Need a private enablement sprint? Mention it when you contact us and we will configure a custom intake within 48 hours.',
    cohorts: [
      {
        id: 'executive-resilience',
        title: 'Executive resilience intensive',
        start: '5 May 2024 · GMT+1',
        cadence: '6 weeks · Live + async',
        focus: 'CMO, CRO, Chief of Staff',
        seats: '8 seats left',
        description:
          'Leadership cohort covering enterprise risk steering, stakeholder assurance, and rapid takedown orchestration alongside our core team.',
        highlights: [
          'Board-level incident simulation with Artur Ziganshin.',
          'Live dark web and SERP threat review lab.',
          'Stakeholder assurance storytelling sprint.',
        ],
      },
      {
        id: 'search-authority-sprint',
        title: 'Search authority rebuild studio',
        start: '21 May 2024 · Virtual',
        cadence: '4 weeks · Studio intensives',
        focus: 'SEO & growth leads',
        seats: '12 seats left',
        description:
          'Hands-on studio rebuilding trust signals, multilingual SEO defenses, and review integrity workflows with Clara Martel’s intelligence pod.',
        highlights: [
          'SERP volatility monitoring setup.',
          'Content firewall calendar co-creation.',
          'Review dispute kit in English, French, Spanish.',
        ],
      },
      {
        id: 'marketplace-trust',
        title: 'Marketplace trust accelerator',
        start: '4 June 2024 · Hybrid Barcelona',
        cadence: '3 weeks · Hybrid fieldwork',
        focus: 'Marketplace & operations leaders',
        seats: '6 seats left',
        description:
          'Hybrid fieldwork anchored in Barcelona focused on rooting out fake storefronts, synchronising marketplace policies, and securing conversion recovery.',
        highlights: [
          'On-site marketplace policy summit.',
          'Fraud network teardown with Diego Santos.',
          'Customer advocacy relaunch playbook.',
        ],
      },
    ],
    mentorshipHeading: 'Mentors on the front lines',
    mentorshipSubtitle:
      'Book deep-dive sessions with the strategists who lead our managed engagements. Every mentor works active incidents each week.',
    mentorExpertiseLabel: 'Active specialisations',
    mentorAvailabilityLabel: 'Office hours',
    mentorLanguagesLabel: 'Languages',
    mentorNoteLabel: 'Best for',
    mentors: [
      {
        name: 'Artur Ziganshin',
        role: 'Founder & CEO',
        bio: 'Artur directs Traceremove response programmes across three continents, blending executive comms, platform escalations, and growth reactivation.',
        expertise: [
          'Board and investor assurance frameworks',
          'Domain & marketplace takedowns',
          'Revenue rescue storytelling',
        ],
        availability: 'Mondays & Wednesdays · 09:00–12:00 ET',
        languages: ['English', 'Spanish'],
        note: 'Founders, CEOs, and boards needing orchestrated crisis leadership.',
      },
      {
        name: 'Clara Martel',
        role: 'Head of Intelligence',
        bio: 'Former investigative journalist guiding multilingual threat intelligence pods monitoring review fraud and emerging policy shifts.',
        expertise: [
          'Cross-market signal pipelines',
          'Narrative risk modelling',
          'Marketplace policy enforcement',
        ],
        availability: 'Tuesdays · 14:00–18:00 CET',
        languages: ['French', 'English'],
        note: 'Intelligence, legal, and policy teams building proactive listening.',
      },
      {
        name: 'Diego Santos',
        role: 'Response Lead',
        bio: 'Diego oversees Spanish and LATAM response operations with a focus on deceptive listings, review integrity, and high-velocity takedowns.',
        expertise: [
          'Incident war-room facilitation',
          'Marketplace & SERP recovery',
          'Customer trust communications',
        ],
        availability: 'Thursdays · 10:00–13:00 CDT',
        languages: ['Spanish', 'English'],
        note: 'CX, comms, and operations leaders managing active escalations.',
      },
    ],
    officeHoursHeading: 'Live response office hours',
    officeHoursSubtitle:
      'Drop into rotating clinics covering the week’s most urgent threats. Sessions are capped at eight seats to keep guidance specific.',
    officeHoursFacilitatorLabel: 'Facilitator',
    officeHoursCadenceLabel: 'Cadence',
    officeHoursFormatLabel: 'Format',
    officeHoursFocusLabel: 'Focus',
    officeHoursTakeawayLabel: 'You will leave with',
    officeHours: [
      {
        title: 'Reputation triage stand-up',
        facilitator: 'Clara Martel',
        cadence: 'Weekly',
        format: 'Live working session',
        focus: 'Prioritise incidents in under 15 minutes and assign the right playbooks.',
        takeaways: [
          'Risk triage canvas template.',
          'Escalation messaging snippets.',
          '90-day visibility projection worksheet.',
        ],
      },
      {
        title: 'Marketplace takedown desk',
        facilitator: 'Diego Santos',
        cadence: 'Bi-weekly',
        format: 'Case clinic',
        focus: 'Audit fraudulent sellers, file cross-platform takedowns, and prep proof packs.',
        takeaways: [
          'Evidence locker checklist.',
          'Appeal letter outline for Amazon & Google.',
          'Response SLA cheat sheet.',
        ],
      },
      {
        title: 'Executive assurance huddle',
        facilitator: 'Artur Ziganshin',
        cadence: 'Monthly',
        format: 'Leadership roundtable',
        focus: 'Shape board-ready updates that connect defence wins to commercial impact.',
        takeaways: [
          'Board narrative storyboard.',
          'Metric stack for investor briefings.',
          'Follow-up action tracker template.',
        ],
      },
    ],
    certificationsHeading: 'Certification pathways',
    certificationsSubtitle:
      'Earn credentials that prove your team can defend visibility, rebuild trust, and communicate outcomes under pressure.',
    certificationValidationLabel: 'Validated by',
    certificationRequirementsLabel: 'Requirements',
    certificationRenewalLabel: 'Renewal',
    certifications: [
      {
        id: 'strategic-brand-defender',
        title: 'Strategic Brand Defender',
        description: 'Confirms executives can lead multidisciplinary war rooms, negotiate platform enforcement, and report to boards.',
        badgeLabel: 'Badge: Strategic Brand Defender',
        validation: 'Assessed by Artur Ziganshin and external legal advisors.',
        requirements: [
          'Complete the Brand defense leadership track.',
          'Lead a live incident simulation with passing score.',
          'Submit executive reporting packet for review.',
        ],
        renewal: 'Annual tabletop exercise plus refresher clinic on major platform updates.',
      },
      {
        id: 'search-authority-architect',
        title: 'Search Authority Architect',
        description: 'Recognises growth leaders who stabilise rankings post-crisis and design multilingual authority regrowth plans.',
        badgeLabel: 'Badge: Search Authority Architect',
        validation: 'Audited by Clara Martel and partner SEO analysts.',
        requirements: [
          'Finish the Search authority accelerator track.',
          'Ship a 90-day recovery roadmap with measurement plan.',
          'Pass SERP threat mapping proficiency assessment.',
        ],
        renewal: 'Biannual submission of live ranking improvements across two markets.',
      },
      {
        id: 'customer-trust-sentinel',
        title: 'Customer Trust Sentinel',
        description: 'Demonstrates CX and ops leaders can eradicate fake reviews, coordinate outreach, and sustain trust metrics.',
        badgeLabel: 'Badge: Customer Trust Sentinel',
        validation: 'Reviewed by Diego Santos and external CX auditors.',
        requirements: [
          'Complete the Trust operations mastery modules.',
          'Document a verified review remediation win.',
          'Maintain CSAT above agreed thresholds for 60 days.',
        ],
        renewal: 'Annual audit of trust metrics and updated outreach scripts.',
      },
    ],
    scholarshipsHeading: 'Scholarships & sponsorships',
    scholarshipsSubtitle:
      'We remove barriers for teams safeguarding essential services, community platforms, and underfunded founders.',
    scholarshipValueLabel: 'Coverage',
    scholarshipEligibilityLabel: 'Eligibility',
    scholarshipSupportLabel: 'Support included',
    scholarshipActionLabel: 'Nominate a leader',
    scholarships: [
      {
        id: 'essential-services',
        title: 'Essential services fellowship',
        description:
          'For hospitals, utilities, and civic platforms facing persistent reputation attacks across multiple markets.',
        value: '100% tuition covered',
        eligibility: [
          'Operate in a critical infrastructure or public trust sector.',
          'Facing active misinformation or fake review campaigns.',
          'Commit to sharing anonymised learnings with other fellows.',
        ],
        support: [
          'Priority placement in the next executive resilience intensive.',
          'Dedicated bilingual strategist for 90 days of implementation.',
          'Custom tabletop and incident rehearsal for your leadership team.',
        ],
        cta: 'Apply for the fellowship',
      },
      {
        id: 'founder-sprint',
        title: 'Founder sprint sponsorship',
        description:
          'Supports bootstrapped founders rebuilding credibility after coordinated defamation or marketplace abuse.',
        value: '50% tuition covered + travel stipend',
        eligibility: [
          'Founder-led company under 50 employees.',
          'Documented reputation attack impacting revenue.',
          'Ability to attend at least three live sessions.',
        ],
        support: [
          'Access to search authority rebuild studio.',
          'One-on-one mentoring with Artur Ziganshin.',
          'Conversion storytelling audit with our growth pod.',
        ],
        cta: 'Request sponsorship',
      },
      {
        id: 'community-guardians',
        title: 'Community guardians grant',
        description:
          'Helps nonprofits and advocacy groups train volunteer moderators and rapid-response teams.',
        value: 'Partial scholarship + enablement credits',
        eligibility: [
          'Registered nonprofit or community collective.',
          'Active online community exceeding 10k members.',
          'Commitment to publish public impact summary within 90 days.',
        ],
        support: [
          'Seat bundle for reputation operations pods cohort.',
          'Template pack translated across English, French, Spanish.',
          'Quarterly office hour passes for volunteer leads.',
        ],
        cta: 'Nominate your organisation',
      },
    ],
    communityHeading: 'Community & support',
    communitySubtitle:
      'Enrollment unlocks persistent guidance so your team never navigates reputation risk alone.',
    communityHighlights: [
      {
        label: 'Office hours',
        description: 'Drop-in clinics every Thursday for English, French, and Spanish cohorts.',
      },
      {
        label: 'Signal digest',
        description: 'Bi-weekly alert brief on emerging scams, policy updates, and platform shifts.',
      },
      {
        label: 'Playbook vault',
        description: 'Downloadable templates updated quarterly with the latest enforcement learnings.',
      },
    ],
    toolkitHeading: 'Enablement toolkits',
    toolkitSubtitle:
      'Translate Academy learnings into action with ready-made operating systems your teams can deploy the moment class ends.',
    toolkitResourcesLabel: 'Inside the kit',
    toolkitImpactLabel: 'Impact delivered',
    toolkit: [
      {
        id: 'intel-vault',
        title: 'Threat intelligence vault',
        description:
          'Build a living repository of takedown precedents, fraudster patterns, and regulatory contacts synced across markets.',
        artifacts: [
          'Template taxonomy for labelling escalations by severity and channel.',
          'Automation-ready spreadsheet with macros for fraudster cluster analysis.',
          'Quarterly update workflow with ownership rotation and alerts.',
        ],
        impact: 'Reduces evidence gathering time by 63% during multi-market escalations.',
      },
      {
        id: 'crisis-room',
        title: 'Crisis war room command pack',
        description:
          'Spin up a remote-ready command centre with comms scripts, reporting cadences, and stakeholder routing templates.',
        artifacts: [
          '60-minute incident stand-up agenda translated across EN/FR/ES.',
          'Executive-ready briefing deck with live KPI embeds.',
          'Pre-approved escalation macros for legal, policy, and platform outreach.',
        ],
        impact: 'Accelerates time-to-first-response from 6 hours to under 90 minutes on average.',
      },
      {
        id: 'authority-rebuilder',
        title: 'Search authority rebuilder',
        description:
          'Operationalise the SEO recovery plan with sprint boards, content briefs, and link reclamation cadences.',
        artifacts: [
          'Six-week backlog with prioritised recovery epics and owners.',
          'Localized content brief templates for multilingual turnaround articles.',
          'Measurement dashboard schema with trust and conversion benchmarks.',
        ],
        impact: 'Restores pre-incident organic conversions within two sprint cycles.',
      },
    ],
    alumniHeading: 'Alumni in action',
    alumniSubtitle:
      'See how recent cohorts translated the curriculum into measurable brand protection wins within weeks of graduation.',
    alumniCtaLabel: 'Book an alumni briefing',
    alumni: [
      {
        id: 'leah-martin',
        name: 'Leah Martin',
        role: 'VP Growth',
        organization: 'North American marketplace',
        quote:
          'We left with a full-scale investigation kit and stakeholder playbook. The first takedown sprint closed inside 72 hours.',
        outcome: 'Reclaimed 38% of lost GMV and reinstated star seller badges within one launch cycle.',
        focus: 'Review fraud dismantling',
      },
      {
        id: 'romain-lefevre',
        name: 'Romain Lefèvre',
        role: 'Chief Communications Officer',
        organization: 'European fintech',
        quote:
          'Our executive suite finally rehearsed coordinated comms, legal, and product responses instead of reacting in silos.',
        outcome: 'Cut misinformation downtimes by 55% and secured regulator assurances before launch.',
        focus: 'Cross-functional crisis orchestration',
      },
      {
        id: 'carla-mendez',
        name: 'Carla Méndez',
        role: 'Head of Customer Experience',
        organization: 'Iberian travel brand',
        quote:
          'Scripts from the moderation lab gave our CX team confidence to intervene early and escalate only genuine threats.',
        outcome: 'Lowered contested chargebacks by 41% while increasing CSAT nine points quarter-over-quarter.',
        focus: 'Community moderation excellence',
      },
    ],
    testimonialsHeading: 'What Academy alumni say',
    testimonials: [
      {
        quote:
          'Traceremove gave us a repeatable playbook for review fraud investigations. Our trust score recovered within one launch cycle.',
        name: 'Leah Martin',
        role: 'VP Growth · North American marketplace',
      },
      {
        quote:
          'The tabletop exercise aligned legal, comms, and product in a single afternoon. We finally have executive muscle memory.',
        name: 'Romain Lefèvre',
        role: 'Chief Communications Officer · European fintech',
      },
      {
        quote:
          'Our Spanish CX pod now runs proactive outreach with the scripts from the lab. Escalations dropped 48% in two quarters.',
        name: 'Carla Méndez',
        role: 'Head of Customer Experience · Iberian travel brand',
      },
    ],
    cta: {
      title: 'Ready to embed the Academy inside your organisation?',
      subtitle:
        'Connect with Artur Ziganshin’s team to tailor curricula, schedule private cohorts, or pair Academy access with managed services.',
      primary: 'Plan a curriculum mapping',
      secondary: 'Review managed services',
    },
  },
  fr: {
    hero: {
      eyebrow: 'Traceremove Academy',
      title: 'Formez vos gardiens de marque comme des insiders',
      subtitle:
        'Labs hebdomadaires, playbooks asynchrones et accompagnement bilingue animés par les stratèges qui neutralisent les menaces chaque jour.',
      primaryCta: 'Réserver une session d’onboarding',
      secondaryCta: 'Découvrir nos succès récents',
      secondaryTarget: 'caseStudies',
      visualCaption: 'Cohortes Academy sur trois marchés',
      metrics: [
        {
          label: 'Leaders certifiés',
          value: '1,2k+',
          annotation: 'Marketing, juridique et opérations formés depuis 2021',
        },
        {
          label: 'Playbooks livrés',
          value: '180+',
          annotation: 'Cadres SEO, réputation et escalade mis à jour chaque trimestre',
        },
        {
          label: 'Marchés couverts',
          value: '3',
          annotation: 'Cohortes en anglais, français et espagnol chaque trimestre',
        },
      ],
    },
    tracksHeading: 'Parcours immersifs',
    tracksSubtitle:
      'Choisissez la trajectoire adaptée à votre rôle. Chaque parcours combine coaching en direct, sprints asynchrones et simulations sectorielles.',
    trackOutcomeLabel: 'Résultats clés',
    trackModuleLabel: 'Modules signature',
    tracks: [
      {
        id: 'defense-leadership',
        title: 'Leadership brand defense',
        description:
          'Cohorte de direction couvrant intelligence des menaces, orchestration des retraits et reporting aux parties prenantes.',
        duration: '6 semaines',
        format: 'Live + async',
        focus: 'Directeurs & VP',
        outcomes: [
          'Modéliser la sévérité des incidents et les fenêtres d’escalade.',
          'Coordonner juridique, RP et growth via un playbook unifié.',
          'Rapporter la réduction du risque aux conseils d’administration.',
        ],
        modules: [
          'Cadres de triage des scénarios',
          'Orchestration multimarques des retraits',
          'Tableaux de bord d’assurance parties prenantes',
          'Rituels de reporting exécutif',
        ],
      },
      {
        id: 'search-authority',
        title: 'Accélérateurs d’autorité SEO',
        description:
          'Responsables SEO et marketing produit apprennent à défendre les positions, reconstruire la confiance et activer des pare-feux narratifs.',
        duration: '5 semaines',
        format: 'Studios intensifs',
        focus: 'Leads growth & SEO',
        outcomes: [
          'Stabiliser les positions après attaque en moins de 14 jours.',
          'Concevoir des plans de contenu multilingues alignés aux contraintes légales.',
          'Instrumenter des dashboards qui détectent immédiatement les dérives.',
        ],
        modules: [
          'Cartographie des menaces SERP',
          'Reverse-engineering narratif',
          'Cadences de reconstruction d’autorité',
          'Lab instrumentation analytics',
        ],
      },
      {
        id: 'reputation-ops',
        title: 'Pods opérations réputation',
        description:
          'Équipes relation client et communautés maîtrisent la vérification d’authenticité, les retraits d’avis et la chorégraphie des escalades.',
        duration: '4 semaines',
        format: 'Cohortes hybrides',
        focus: 'Responsables CX & communauté',
        outcomes: [
          'Détecter les réseaux d’avis frauduleux avant perte de conversion.',
          'Déployer des conseils clients vérifiés et cadences d’outreach.',
          'Traduire les mises à jour de politiques plateformes en réponses prêtes.',
        ],
        modules: [
          'Veille fraude avis',
          'Activation des conseils d’ambassadeurs',
          'Studio de réponse marketplaces',
          'Automatisation des handoffs de signaux',
        ],
      },
    ],
    workshopsHeading: 'Workshops & cliniques live',
    workshopsSubtitle:
      'Plongez dans des sessions tactiques animées par Artur Ziganshin et nos leads multilingues. Chaque workshop inclut des modèles déployables immédiatement.',
    workshopTakeawayLabel: 'Livrables',
    workshops: [
      {
        title: 'Tabletop exécutif',
        focus: 'Alignement C-level',
        length: '120 minutes',
        format: 'Virtuel + replays',
        takeaways: [
          'Script d’alignement crise pour les briefings leadership.',
          'Template de scorecard conseil avec indicateurs avancés.',
        ],
      },
      {
        title: 'Studio retraits marketplaces',
        focus: 'Opérations commerce',
        length: '90 minutes',
        format: 'Lab interactif',
        takeaways: [
          'Dossiers d’appel optimisés Amazon, Google, Trustpilot.',
          'Recettes d’automatisation pour preuves et relances.',
        ],
      },
      {
        title: 'Salle d’écriture relance narrative',
        focus: 'Contenu & communication',
        length: '75 minutes',
        format: 'Sprint live',
        takeaways: [
          'Storyboard de relance localisé EN/FR/ES.',
          'Bibliothèque d’appels à l’action pour reconvertir le trafic.',
        ],
      },
    ],
    labsHeading: 'Labs opérateurs',
    labsSubtitle:
      'Les labs en petit comité entretiennent le rythme entre les workshops. Apportez incidents, dashboards et défis parties prenantes.',
    labDeliverableLabel: 'Livrables',
    labs: [
      {
        title: 'Signals lab',
        description: 'Instrumentez vos workflows de détection et seuils d’alerte avec nos ingénieurs.',
        lead: 'Clara Martel · Head of Intelligence',
        cadence: 'Bi-hebdomadaire',
        deliverables: [
          'Taxonomie de signaux personnalisée.',
          'Checklist QA des pipelines data.',
          'Starter intégrations Slack + PagerDuty.',
        ],
      },
      {
        title: 'Escalation lab',
        description: 'Répétez vos escalades avec experts juridique, RP et marketplaces pour éprouver vos processus.',
        lead: 'Diego Santos · Response Lead',
        cadence: 'Hebdomadaire',
        deliverables: [
          'Runbooks bilingues d’escalade.',
          'Matrice de notification parties prenantes.',
          'Scorecard de retour d’expérience.',
        ],
      },
      {
        title: 'Growth storytelling lab',
        description: 'Transformez la visibilité regagnée en revenus mesurables via la narration.',
        lead: 'Artur Ziganshin · Fondateur & CEO',
        cadence: 'Mensuel',
        deliverables: [
          'Storyboard de campagne de relance.',
          'Bibliothèque de preuves reliées au revenu.',
          'Pack de titres exécutifs.',
        ],
      },
    ],
    cohortsHeading: 'Cohortes & immersions à venir',
    cohortsSubtitle:
      'Réservez vos places pour les prochaines vagues Academy. Les groupes restent volontairement restreints pour garantir du feedback individuel de nos stratèges.',
    cohortStartLabel: 'Lancement',
    cohortCadenceLabel: 'Cadence',
    cohortFocusLabel: 'Pour qui',
    cohortSeatsLabel: 'Places restantes',
    cohortHighlightsLabel: 'Labs mis en avant',
    cohortActionLabel: 'Réserver une place',
    cohortsNote:
      'Besoin d’un sprint privatisé ? Indiquez-le lors du contact, nous organisons une session dédiée sous 48 h.',
    cohorts: [
      {
        id: 'executive-resilience',
        title: 'Intensive résilience leadership',
        start: '5 mai 2024 · GMT+1',
        cadence: '6 semaines · Live + async',
        focus: 'CMO, CRO, Chief of Staff',
        seats: '8 places restantes',
        description:
          'Programme de direction couvrant pilotage du risque, assurance parties prenantes et orchestration accélérée des retraits aux côtés de notre équipe cœur.',
        highlights: [
          'Simulation de crise niveau conseil avec Artur Ziganshin.',
          'Analyse live des menaces dark web et SERP.',
          'Sprint storytelling assurance parties prenantes.',
        ],
      },
      {
        id: 'search-authority-sprint',
        title: 'Studio reconstruction d’autorité SEO',
        start: '21 mai 2024 · Virtuel',
        cadence: '4 semaines · Studios intensifs',
        focus: 'Leads SEO & growth',
        seats: '12 places restantes',
        description:
          'Atelier pratique pour rebâtir les signaux de confiance, les défenses SEO multilingues et les workflows d’intégrité des avis avec le pod intelligence de Clara Martel.',
        highlights: [
          'Mise en place d’un monitoring volatilité SERP.',
          'Co-création du calendrier content firewall.',
          'Kit de contestation d’avis EN/FR/ES.',
        ],
      },
      {
        id: 'marketplace-trust',
        title: 'Accélérateur confiance marketplaces',
        start: '4 juin 2024 · Hybride Barcelone',
        cadence: '3 semaines · Immersion hybride',
        focus: 'Leaders marketplaces & opérations',
        seats: '6 places restantes',
        description:
          'Immersion hybride à Barcelone pour démanteler les faux vendeurs, synchroniser les politiques marketplaces et sécuriser la reprise des conversions.',
        highlights: [
          'Sommet politique marketplaces sur site.',
          'Démantèlement de réseaux fraude avec Diego Santos.',
          'Playbook relance advocacy client.',
        ],
      },
    ],
    mentorshipHeading: 'Mentors en première ligne',
    mentorshipSubtitle:
      'Réservez des sessions approfondies avec les stratèges qui pilotent nos missions gérées. Chaque mentor traite des incidents réels chaque semaine.',
    mentorExpertiseLabel: 'Spécialisations actives',
    mentorAvailabilityLabel: 'Plages de rendez-vous',
    mentorLanguagesLabel: 'Langues',
    mentorNoteLabel: 'Idéal pour',
    mentors: [
      {
        name: 'Artur Ziganshin',
        role: 'Fondateur & CEO',
        bio: 'Artur orchestre les programmes de réponse Traceremove sur trois continents en combinant communication exécutive, escalades plateformes et relance de la croissance.',
        expertise: [
          'Cadres d’assurance pour conseils et investisseurs',
          'Retraits domaines & marketplaces',
          'Narration revenue rescue',
        ],
        availability: 'Lundis & mercredis · 15h00–18h00 CET',
        languages: ['Anglais', 'Espagnol'],
        note: 'Dirigeants, fondateurs et boards recherchant un pilotage de crise coordonné.',
      },
      {
        name: 'Clara Martel',
        role: 'Head of Intelligence',
        bio: 'Ancienne journaliste d’investigation qui guide nos cellules d’intelligence multilingues sur la fraude avis et les évolutions réglementaires.',
        expertise: [
          'Pipelines de signaux multi-marchés',
          'Modélisation des risques narratifs',
          'Application des politiques marketplaces',
        ],
        availability: 'Mardis · 14h00–18h00 CET',
        languages: ['Français', 'Anglais'],
        note: 'Équipes intelligence, juridique et policy qui bâtissent une veille proactive.',
      },
      {
        name: 'Diego Santos',
        role: 'Response Lead',
        bio: 'Diego supervise les opérations de réponse Espagne & LATAM avec un focus sur les faux avis, listings abusifs et retraits à haute vitesse.',
        expertise: [
          'Animation de war-rooms incident',
          'Récupération marketplaces & SERP',
          'Communication confiance client',
        ],
        availability: 'Jeudis · 10h00–13h00 CDT',
        languages: ['Espagnol', 'Anglais'],
        note: 'Leaders CX, communication et opérations gérant des escalades en cours.',
      },
    ],
    officeHoursHeading: 'Office hours de réponse',
    officeHoursSubtitle:
      'Participez à des clinics thématiques sur les menaces du moment. Huit places maximum pour conserver un coaching précis.',
    officeHoursFacilitatorLabel: 'Facilitateur',
    officeHoursCadenceLabel: 'Cadence',
    officeHoursFormatLabel: 'Format',
    officeHoursFocusLabel: 'Focus',
    officeHoursTakeawayLabel: 'Vous repartez avec',
    officeHours: [
      {
        title: 'Stand-up triage réputation',
        facilitator: 'Clara Martel',
        cadence: 'Hebdomadaire',
        format: 'Session live',
        focus: 'Prioriser les incidents en moins de 15 minutes et affecter le bon playbook.',
        takeaways: [
          'Canvas de triage du risque.',
          'Snippets de messages d’escalade.',
          'Projection visibilité sur 90 jours.',
        ],
      },
      {
        title: 'Desk retraits marketplaces',
        facilitator: 'Diego Santos',
        cadence: 'Bi-hebdomadaire',
        format: 'Clinic de cas',
        focus: 'Auditer les vendeurs frauduleux, déposer des retraits multi-plateformes et préparer les preuves.',
        takeaways: [
          'Checklist dossier de preuves.',
          'Trame de lettre d’appel Amazon & Google.',
          'Aide-mémoire SLA de réponse.',
        ],
      },
      {
        title: 'Huddle assurance exécutive',
        facilitator: 'Artur Ziganshin',
        cadence: 'Mensuel',
        format: 'Table ronde direction',
        focus: 'Construire des updates board-ready reliant défense et impact business.',
        takeaways: [
          'Storyboard narratif conseil.',
          'Stack de métriques pour investisseurs.',
          'Tracker d’actions de suivi.',
        ],
      },
    ],
    certificationsHeading: 'Parcours de certification',
    certificationsSubtitle:
      'Obtenez des accréditations prouvant la capacité de vos équipes à défendre la visibilité, restaurer la confiance et communiquer sous pression.',
    certificationValidationLabel: 'Validé par',
    certificationRequirementsLabel: 'Prérequis',
    certificationRenewalLabel: 'Renouvellement',
    certifications: [
      {
        id: 'strategic-brand-defender',
        title: 'Strategic Brand Defender',
        description: 'Atteste que les dirigeants peuvent mener des war-rooms pluridisciplinaires, négocier les plateformes et reporter aux conseils.',
        badgeLabel: 'Badge : Strategic Brand Defender',
        validation: 'Évalué par Artur Ziganshin et des conseillers juridiques externes.',
        requirements: [
          'Suivre le parcours Leadership brand defense.',
          'Diriger une simulation d’incident validée.',
          'Soumettre un pack de reporting exécutif.',
        ],
        renewal: 'Exercice tabletop annuel + clinic de mise à jour plateformes.',
      },
      {
        id: 'search-authority-architect',
        title: 'Search Authority Architect',
        description: 'Reconnaît les leaders growth capables de stabiliser les positions et de bâtir des plans multilingues de reconquête.',
        badgeLabel: 'Badge : Search Authority Architect',
        validation: 'Audité par Clara Martel et des analystes SEO partenaires.',
        requirements: [
          'Finaliser le parcours Accélérateurs d’autorité SEO.',
          'Livrer une feuille de route de reprise 90 jours avec plan de mesure.',
          'Réussir l’évaluation mapping des menaces SERP.',
        ],
        renewal: 'Soumission semestrielle d’améliorations de ranking sur deux marchés.',
      },
      {
        id: 'customer-trust-sentinel',
        title: 'Customer Trust Sentinel',
        description: 'Prouve que les responsables CX/ops éliminent les faux avis, coordonnent l’outreach et maintiennent les indicateurs de confiance.',
        badgeLabel: 'Badge : Customer Trust Sentinel',
        validation: 'Revu par Diego Santos et des auditeurs CX externes.',
        requirements: [
          'Suivre les modules Trust operations mastery.',
          'Documenter une remédiation avis réussie.',
          'Maintenir le CSAT au-dessus du seuil 60 jours.',
        ],
        renewal: 'Audit annuel des métriques confiance et mise à jour des scripts.',
      },
    ],
    scholarshipsHeading: 'Bourses & parrainages',
    scholarshipsSubtitle:
      'Nous levons les freins pour les équipes qui protègent des services essentiels, des plateformes communautaires et des fondateurs sous-financés.',
    scholarshipValueLabel: 'Couverture',
    scholarshipEligibilityLabel: 'Éligibilité',
    scholarshipSupportLabel: 'Accompagnement inclus',
    scholarshipActionLabel: 'Proposer une candidature',
    scholarships: [
      {
        id: 'essential-services',
        title: 'Fellowship services essentiels',
        description:
          'Pour hôpitaux, services publics et plateformes civiques confrontés à des attaques réputationnelles persistantes sur plusieurs marchés.',
        value: '100 % des frais couverts',
        eligibility: [
          'Opérer dans un secteur d’infrastructure critique ou de confiance publique.',
          'Subir une campagne active de désinformation ou de faux avis.',
          'Partager des enseignements anonymisés avec les autres fellows.',
        ],
        support: [
          'Priorité sur la prochaine intensive résilience leadership.',
          'Stratège bilingue dédié pendant 90 jours de déploiement.',
          'Tabletop et répétition d’incident personnalisés pour votre direction.',
        ],
        cta: 'Déposer une candidature',
      },
      {
        id: 'founder-sprint',
        title: 'Sponsorship sprint fondateur',
        description:
          'Soutient les fondateurs bootstrappés qui reconstruisent leur crédibilité après diffamation coordonnée ou abus marketplaces.',
        value: '50 % des frais + stipend déplacement',
        eligibility: [
          'Entreprise dirigée par son fondateur avec moins de 50 employés.',
          'Attaque réputationnelle documentée impactant le revenu.',
          'Disponibilité pour participer à au moins trois sessions live.',
        ],
        support: [
          'Accès au studio reconstruction d’autorité SEO.',
          'Mentorat individuel avec Artur Ziganshin.',
          'Audit storytelling conversion avec notre pod growth.',
        ],
        cta: 'Demander un sponsorship',
      },
      {
        id: 'community-guardians',
        title: 'Bourse gardiens de communauté',
        description:
          'Aide les associations et collectifs à former modérateurs bénévoles et cellules de réponse rapide.',
        value: 'Bourse partielle + crédits enablement',
        eligibility: [
          'Organisation à but non lucratif ou collectif communautaire déclaré.',
          'Communauté en ligne active de plus de 10k membres.',
          'Engagement à publier un retour d’impact public sous 90 jours.',
        ],
        support: [
          'Pack de places pour la cohorte opérations réputation.',
          'Templates traduits EN/FR/ES.',
          'Pass trimestriels aux office hours pour les leads bénévoles.',
        ],
        cta: 'Nommer votre organisation',
      },
    ],
    communityHeading: 'Communauté & support',
    communitySubtitle:
      'Votre inscription ouvre un accompagnement continu : vous n’affrontez plus le risque réputationnel seul.',
    communityHighlights: [
      {
        label: 'Office hours',
        description: 'Clinics ouvertes chaque jeudi pour les cohortes EN/FR/ES.',
      },
      {
        label: 'Signal digest',
        description: 'Brief bimensuel sur nouvelles fraudes, politiques et évolutions plateformes.',
      },
      {
        label: 'Vault de playbooks',
        description: 'Modèles téléchargeables mis à jour chaque trimestre.',
      },
    ],
    toolkitHeading: 'Trousses opérationnelles',
    toolkitSubtitle:
      'Convertissez les enseignements de l’Academy en systèmes prêts à l’emploi pour vos équipes, disponibles dès la fin des sessions.',
    toolkitResourcesLabel: 'Dans la trousse',
    toolkitImpactLabel: 'Impact constaté',
    toolkit: [
      {
        id: 'intel-vault',
        title: 'Coffre d’intelligence des menaces',
        description:
          'Constituez un référentiel vivant des précédents de retrait, modes opératoires fraudeurs et contacts régulateurs pour chaque marché.',
        artifacts: [
          'Taxonomie de classement des incidents par sévérité et canal.',
          'Tableur automatisé avec macros pour regrouper les réseaux fraudeurs.',
          'Workflow de mise à jour trimestrielle avec rotation des responsables et alertes.',
        ],
        impact: 'Réduit de 63 % le temps de collecte de preuves lors d’escalades multi-marchés.',
      },
      {
        id: 'crisis-room',
        title: 'Pack salle de crise',
        description:
          'Déployez un centre de commandement distribué avec scripts de communication, cadences de reporting et matrices de parties prenantes.',
        artifacts: [
          'Agenda de stand-up incident de 60 minutes traduit en EN/FR/ES.',
          'Deck exécutif prêt à l’emploi avec indicateurs en temps réel.',
          'Macros d’escalade pré-validées pour juridique, politique et plateformes.',
        ],
        impact: 'Fait passer le délai de première réponse de 6 heures à moins de 90 minutes.',
      },
      {
        id: 'authority-rebuilder',
        title: 'Relanceur d’autorité SEO',
        description:
          'Industrialisez la reconstruction SEO via des boards de sprint, briefs contenus et rituels de récupération de liens.',
        artifacts: [
          'Backlog de six semaines avec épopées priorisées et responsables.',
          'Modèles de briefs multilingues pour contenus de relance.',
          'Schéma de tableau de bord mesurant confiance et conversions.',
        ],
        impact: 'Restaure les conversions organiques pré-incident en deux sprints.',
      },
    ],
    alumniHeading: 'Alumni en action',
    alumniSubtitle:
      'Découvrez comment les cohortes récentes ont transformé le programme en résultats mesurables quelques semaines après la certification.',
    alumniCtaLabel: 'Planifier un échange avec un alumni',
    alumni: [
      {
        id: 'leah-martin',
        name: 'Leah Martin',
        role: 'VP Growth',
        organization: 'Marketplace nord-américaine',
        quote:
          'Nous sommes repartis avec un kit d’enquête complet et un playbook parties prenantes. Le premier sprint de retrait s’est clos en 72 heures.',
        outcome: 'A récupéré 38 % du GMV perdu et rétabli les badges vendeurs en un cycle de lancement.',
        focus: 'Démantèlement des faux avis',
      },
      {
        id: 'romain-lefevre',
        name: 'Romain Lefèvre',
        role: 'Directeur communication',
        organization: 'Fintech européenne',
        quote:
          'Le comité exécutif a enfin répété des réponses coordonnées juridique, produit et communication au lieu de réagir en silos.',
        outcome: 'A réduit de 55 % les temps d’exposition aux rumeurs et obtenu des garanties du régulateur avant lancement.',
        focus: 'Orchestration de crise transverse',
      },
      {
        id: 'carla-mendez',
        name: 'Carla Méndez',
        role: 'Directrice expérience client',
        organization: 'Marque de voyage ibérique',
        quote:
          'Les scripts du lab de modération ont donné confiance à l’équipe CX pour intervenir tôt et n’escalader que les menaces avérées.',
        outcome: 'A réduit de 41 % les rétrofacturations contestées tout en gagnant neuf points de satisfaction client.',
        focus: 'Excellence modération communautaire',
      },
    ],
    testimonialsHeading: 'Ce que disent les alumni',
    testimonials: [
      {
        quote:
          'Traceremove nous a fourni un playbook reproductible pour les enquêtes fraude avis. Notre score de confiance est revenu en un cycle.',
        name: 'Leah Martin',
        role: 'VP Growth · Marketplace nord-américaine',
      },
      {
        quote:
          "L’exercice tabletop a aligné juridique, communication et produit en une après-midi. Nous avons enfin des réflexes exécutifs.",
        name: 'Romain Lefèvre',
        role: 'Chief Communications Officer · Fintech européenne',
      },
      {
        quote:
          'Notre équipe CX espagnole mène désormais des outreaches proactives avec les scripts du lab. Les escalades ont chuté de 48 % en deux trimestres.',
        name: 'Carla Méndez',
        role: 'Head of Customer Experience · Marque voyage Ibérie',
      },
    ],
    cta: {
      title: 'Prêt à intégrer l’Academy dans votre organisation ?',
      subtitle:
        'Contactez l’équipe d’Artur Ziganshin pour adapter le programme, planifier des cohortes privées ou combiner Academy et services gérés.',
      primary: 'Planifier un mapping pédagogique',
      secondary: 'Explorer nos services gérés',
    },
  },
  es: {
    hero: {
      eyebrow: 'Traceremove Academy',
      title: 'Forma a tus guardianes de marca como insiders',
      subtitle:
        'Labs semanales en vivo, playbooks asíncronos y acompañamiento bilingüe liderado por los estrategas que neutralizan amenazas cada día.',
      primaryCta: 'Reservar consultoría de enablement',
      secondaryCta: 'Ver victorias recientes',
      secondaryTarget: 'caseStudies',
      visualCaption: 'Cohortes Academy en tres mercados',
      metrics: [
        {
          label: 'Líderes certificados',
          value: '1,2k+',
          annotation: 'Marketing, legal y operaciones formados desde 2021',
        },
        {
          label: 'Playbooks entregados',
          value: '180+',
          annotation: 'Marcos de SEO, reputación y escalada actualizados trimestralmente',
        },
        {
          label: 'Mercados cubiertos',
          value: '3',
          annotation: 'Cohortes en inglés, francés y español cada trimestre',
        },
      ],
    },
    tracksHeading: 'Trayectorias inmersivas',
    tracksSubtitle:
      'Elige el camino que se ajusta a tu rol. Cada trayectoria combina coaching en vivo, sprints asíncronos y simulaciones sectoriales.',
    trackOutcomeLabel: 'Resultados clave',
    trackModuleLabel: 'Módulos insignia',
    tracks: [
      {
        id: 'defense-leadership',
        title: 'Liderazgo de defensa de marca',
        description:
          'Cohorte ejecutiva que cubre inteligencia de amenazas, orquestación de retiros y reportes para stakeholders globales.',
        duration: '6 semanas',
        format: 'En vivo + async',
        focus: 'Directores y VPs',
        outcomes: [
          'Modelar la severidad de incidentes y ventanas de escalada con seguridad.',
          'Coordinar equipos legales, PR y growth mediante un playbook unificado.',
          'Reportar reducción de riesgo medible a juntas e inversionistas.',
        ],
        modules: [
          'Marcos de triage de escenarios',
          'Secuenciación de retiros multimerado',
          'Dashboards de confianza para stakeholders',
          'Rituales de reporte ejecutivo',
        ],
      },
      {
        id: 'search-authority',
        title: 'Aceleradores de autoridad SEO',
        description:
          'Responsables SEO y marketers de producto aprenden a defender rankings, reconstruir confianza y activar cortafuegos de contenido.',
        duration: '5 semanas',
        format: 'Intensivos de estudio',
        focus: 'Líderes de growth y SEO',
        outcomes: [
          'Estabilizar rankings tras ataques en catorce días.',
          'Diseñar planes de contenido multilingües alineados con legales.',
          'Instrumentar dashboards que alertan al instante de variaciones críticas.',
        ],
        modules: [
          'Mapeo de amenazas SERP',
          'Ingeniería inversa de narrativas',
          'Cadencias de reconstrucción de autoridad',
          'Laboratorio de instrumentación analítica',
        ],
      },
      {
        id: 'reputation-ops',
        title: 'Pods de operaciones de reputación',
        description:
          'Equipos de experiencia cliente y comunidad dominan la verificación de autenticidad, retiros de reseñas y coreografía de escaladas.',
        duration: '4 semanas',
        format: 'Cohortes híbridas',
        focus: 'Líderes de CX y comunidad',
        outcomes: [
          'Detectar redes de reseñas falsas antes de perder conversión.',
          'Activar consejos de clientes verificados y cadencias proactivas.',
          'Traducir cambios de políticas en respuestas listas para desplegar.',
        ],
        modules: [
          'Inteligencia de fraude en reseñas',
          'Activación de consejos de advocacy',
          'Estudio de respuestas en marketplaces',
          'Automatización de handoffs de señales',
        ],
      },
    ],
    workshopsHeading: 'Workshops y clínicas en vivo',
    workshopsSubtitle:
      'Participa en sesiones tácticas dirigidas por Artur Ziganshin y nuestros líderes multilingües. Cada workshop entrega plantillas listas para usar.',
    workshopTakeawayLabel: 'Entregables',
    workshops: [
      {
        title: 'Simulación ejecutiva tabletop',
        focus: 'Alineación C-suite',
        length: '120 minutos',
        format: 'Virtual + grabaciones',
        takeaways: [
          'Guion de alineación de crisis para briefings de liderazgo.',
          'Plantilla de scorecard para juntas con indicadores adelantados.',
        ],
      },
      {
        title: 'Studio de retiros en marketplaces',
        focus: 'Operaciones de comercio',
        length: '90 minutos',
        format: 'Laboratorio interactivo',
        takeaways: [
          'Paquetes de apelación para Amazon, Google y Trustpilot.',
          'Recetas de automatización para evidencias y seguimiento.',
        ],
      },
      {
        title: 'Sala de redacción para relanzos narrativos',
        focus: 'Contenido y comunicación',
        length: '75 minutos',
        format: 'Sprint en vivo',
        takeaways: [
          'Storyboard de relanzamiento localizado EN/FR/ES.',
          'Biblioteca de CTAs para reconvertir tráfico recuperado.',
        ],
      },
    ],
    labsHeading: 'Labs para operadores',
    labsSubtitle:
      'Los labs en grupos reducidos mantienen el ritmo entre workshops. Trae incidentes activos, dashboards y retos con stakeholders.',
    labDeliverableLabel: 'Entregables',
    labs: [
      {
        title: 'Signals lab',
        description: 'Instrumenta flujos de detección y umbrales de alerta con nuestros ingenieros.',
        lead: 'Clara Martel · Head of Intelligence',
        cadence: 'Quincenal',
        deliverables: [
          'Taxonomía de señales personalizada.',
          'Checklist de QA para pipelines de datos.',
          'Starter de integraciones Slack + PagerDuty.',
        ],
      },
      {
        title: 'Escalation lab',
        description: 'Ensaya escaladas con expertos legales, PR y marketplaces para reforzar procesos.',
        lead: 'Diego Santos · Response Lead',
        cadence: 'Semanal',
        deliverables: [
          'Runbooks bilingües de escalada.',
          'Matriz de notificación para stakeholders.',
          'Scorecard de revisión post-incidente.',
        ],
      },
      {
        title: 'Growth storytelling lab',
        description: 'Convierte visibilidad recuperada en ingresos medibles con storytelling.',
        lead: 'Artur Ziganshin · Fundador & CEO',
        cadence: 'Mensual',
        deliverables: [
          'Storyboard de campaña de relanzamiento.',
          'Biblioteca de evidencias ligadas a revenue.',
          'Paquete de titulares ejecutivos.',
        ],
      },
    ],
    cohortsHeading: 'Próximas cohortes e inmersiones',
    cohortsSubtitle:
      'Reserva tu plaza en las próximas olas de la Academy. Los grupos son reducidos para garantizar feedback directo de nuestros estrategas.',
    cohortStartLabel: 'Inicio',
    cohortCadenceLabel: 'Cadencia',
    cohortFocusLabel: 'Dirigido a',
    cohortSeatsLabel: 'Cupos disponibles',
    cohortHighlightsLabel: 'Labs destacados',
    cohortActionLabel: 'Reservar plaza',
    cohortsNote:
      '¿Necesitas un sprint privado? Dínoslo al contactarnos y organizaremos una edición personalizada en 48 horas.',
    cohorts: [
      {
        id: 'executive-resilience',
        title: 'Intensivo de resiliencia ejecutiva',
        start: '5 mayo 2024 · GMT+1',
        cadence: '6 semanas · Live + async',
        focus: 'CMO, CRO y Chief of Staff',
        seats: 'Quedan 8 cupos',
        description:
          'Cohorte de liderazgo que cubre dirección de riesgo, aseguramiento de stakeholders y orquestación rápida de retiros junto a nuestro equipo central.',
        highlights: [
          'Simulación de crisis a nivel directorio con Artur Ziganshin.',
          'Laboratorio en vivo de amenazas dark web y SERP.',
          'Sprint de storytelling para tranquilizar a stakeholders.',
        ],
      },
      {
        id: 'search-authority-sprint',
        title: 'Estudio de reconstrucción de autoridad SEO',
        start: '21 mayo 2024 · Virtual',
        cadence: '4 semanas · Estudios intensivos',
        focus: 'Líderes de SEO y growth',
        seats: 'Quedan 12 cupos',
        description:
          'Estudio práctico para reactivar señales de confianza, defensas SEO multilingües y flujos de integridad de reseñas junto al pod de inteligencia de Clara Martel.',
        highlights: [
          'Configuración de monitoreo de volatilidad SERP.',
          'Co-creación de calendario content firewall.',
          'Kit de disputa de reseñas en EN/FR/ES.',
        ],
      },
      {
        id: 'marketplace-trust',
        title: 'Acelerador de confianza en marketplaces',
        start: '4 junio 2024 · Híbrido Barcelona',
        cadence: '3 semanas · Inmersión híbrida',
        focus: 'Líderes de marketplaces y operaciones',
        seats: 'Quedan 6 cupos',
        description:
          'Inmersión híbrida en Barcelona enfocada en erradicar vendedores falsos, alinear políticas y asegurar la recuperación de conversiones.',
        highlights: [
          'Cumbre presencial de políticas de marketplaces.',
          'Desmantelamiento de redes fraudulentas con Diego Santos.',
          'Playbook para relanzar la defensa de clientes.',
        ],
      },
    ],
    mentorshipHeading: 'Mentores en primera línea',
    mentorshipSubtitle:
      'Agenda sesiones profundas con los estrategas que lideran nuestras cuentas gestionadas. Cada mentor atiende incidentes reales todas las semanas.',
    mentorExpertiseLabel: 'Especializaciones activas',
    mentorAvailabilityLabel: 'Horarios',
    mentorLanguagesLabel: 'Idiomas',
    mentorNoteLabel: 'Ideal para',
    mentors: [
      {
        name: 'Artur Ziganshin',
        role: 'Fundador & CEO',
        bio: 'Artur dirige los programas de respuesta de Traceremove en tres continentes combinando comunicación ejecutiva, escalaciones de plataforma y reactivación del crecimiento.',
        expertise: [
          'Marcos de aseguramiento para directorios e inversores',
          'Retiro de dominios y marketplaces',
          'Narrativas de recuperación de ingresos',
        ],
        availability: 'Lunes y miércoles · 09:00–12:00 ET',
        languages: ['Inglés', 'Español'],
        note: 'Fundadores, CEOs y boards que necesitan liderazgo de crisis coordinado.',
      },
      {
        name: 'Clara Martel',
        role: 'Head of Intelligence',
        bio: 'Ex periodista de investigación que guía células de inteligencia multilingües contra fraude de reseñas y cambios normativos.',
        expertise: [
          'Pipelines de señales multimercado',
          'Modelado de riesgo narrativo',
          'Ejecución de políticas en marketplaces',
        ],
        availability: 'Martes · 14:00–18:00 CET',
        languages: ['Francés', 'Inglés'],
        note: 'Equipos de inteligencia, legal y policy que construyen escucha proactiva.',
      },
      {
        name: 'Diego Santos',
        role: 'Response Lead',
        bio: 'Diego lidera operaciones de respuesta para España y LATAM con foco en listados falsos, integridad de reseñas y retiros acelerados.',
        expertise: [
          'Facilitación de war-rooms de incidentes',
          'Recuperación de marketplaces y SERP',
          'Comunicaciones de confianza al cliente',
        ],
        availability: 'Jueves · 10:00–13:00 CDT',
        languages: ['Español', 'Inglés'],
        note: 'Líderes de CX, comunicación y operaciones con escaladas activas.',
      },
    ],
    officeHoursHeading: 'Office hours en vivo',
    officeHoursSubtitle:
      'Únete a clínicas rotativas sobre las amenazas más urgentes de la semana. Cada sesión tiene un máximo de ocho asientos.',
    officeHoursFacilitatorLabel: 'Facilitador',
    officeHoursCadenceLabel: 'Cadencia',
    officeHoursFormatLabel: 'Formato',
    officeHoursFocusLabel: 'Enfoque',
    officeHoursTakeawayLabel: 'Te llevarás',
    officeHours: [
      {
        title: 'Stand-up de triage reputacional',
        facilitator: 'Clara Martel',
        cadence: 'Semanal',
        format: 'Sesión en vivo',
        focus: 'Priorizar incidentes en menos de 15 minutos y asignar el playbook adecuado.',
        takeaways: [
          'Plantilla de canvas de triage de riesgo.',
          'Fragmentos de mensajes de escalada.',
          'Proyección de visibilidad a 90 días.',
        ],
      },
      {
        title: 'Desk de retiros en marketplaces',
        facilitator: 'Diego Santos',
        cadence: 'Quincenal',
        format: 'Clínica de casos',
        focus: 'Auditar vendedores fraudulentos, presentar retiros multiplataforma y preparar paquetes de evidencia.',
        takeaways: [
          'Checklist para dossier de evidencias.',
          'Guion de apelación para Amazon y Google.',
          'Chuleta de SLA de respuesta.',
        ],
      },
      {
        title: 'Huddle de confianza ejecutiva',
        facilitator: 'Artur Ziganshin',
        cadence: 'Mensual',
        format: 'Mesa redonda directiva',
        focus: 'Construir actualizaciones para el directorio que conecten defensa con impacto comercial.',
        takeaways: [
          'Storyboard narrativo para el directorio.',
          'Stack de métricas para inversores.',
          'Tracker de acciones de seguimiento.',
        ],
      },
    ],
    certificationsHeading: 'Rutas de certificación',
    certificationsSubtitle:
      'Consigue credenciales que demuestran que tu equipo puede defender visibilidad, restaurar confianza y comunicar resultados bajo presión.',
    certificationValidationLabel: 'Validado por',
    certificationRequirementsLabel: 'Requisitos',
    certificationRenewalLabel: 'Renovación',
    certifications: [
      {
        id: 'strategic-brand-defender',
        title: 'Strategic Brand Defender',
        description: 'Confirma que los ejecutivos pueden liderar war-rooms multidisciplinarios, negociar con plataformas y reportar a directorios.',
        badgeLabel: 'Insignia: Strategic Brand Defender',
        validation: 'Evaluado por Artur Ziganshin y asesores legales externos.',
        requirements: [
          'Completar el track Leadership brand defense.',
          'Dirigir una simulación de incidente aprobada.',
          'Entregar paquete de reporting ejecutivo para revisión.',
        ],
        renewal: 'Ejercicio tabletop anual más clínica de actualización de plataformas.',
      },
      {
        id: 'search-authority-architect',
        title: 'Search Authority Architect',
        description: 'Reconoce a líderes de growth que estabilizan rankings tras crisis y diseñan planes multilingües de reconquista.',
        badgeLabel: 'Insignia: Search Authority Architect',
        validation: 'Auditado por Clara Martel y analistas SEO aliados.',
        requirements: [
          'Finalizar el track Aceleradores de autoridad SEO.',
          'Entregar roadmap de recuperación a 90 días con plan de medición.',
          'Aprobar evaluación de mapeo de amenazas SERP.',
        ],
        renewal: 'Envío semestral de mejoras de ranking en dos mercados.',
      },
      {
        id: 'customer-trust-sentinel',
        title: 'Customer Trust Sentinel',
        description: 'Demuestra que líderes de CX y operaciones erradican reseñas falsas, coordinan outreach y sostienen métricas de confianza.',
        badgeLabel: 'Insignia: Customer Trust Sentinel',
        validation: 'Revisado por Diego Santos y auditores CX externos.',
        requirements: [
          'Completar los módulos Trust operations mastery.',
          'Documentar un caso exitoso de remediación de reseñas.',
          'Mantener CSAT por encima del umbral durante 60 días.',
        ],
        renewal: 'Auditoría anual de métricas de confianza y actualización de guiones.',
      },
    ],
    scholarshipsHeading: 'Becas y patrocinios',
    scholarshipsSubtitle:
      'Eliminamos barreras para equipos que protegen servicios esenciales, plataformas comunitarias y fundadores con recursos limitados.',
    scholarshipValueLabel: 'Cobertura',
    scholarshipEligibilityLabel: 'Requisitos',
    scholarshipSupportLabel: 'Acompañamiento incluido',
    scholarshipActionLabel: 'Postular equipo',
    scholarships: [
      {
        id: 'essential-services',
        title: 'Beca servicios esenciales',
        description:
          'Para hospitales, utilities y plataformas cívicas que sufren ataques reputacionales persistentes en varios mercados.',
        value: '100 % de la matrícula',
        eligibility: [
          'Operar en un sector de infraestructura crítica o confianza pública.',
          'Enfrentar campañas activas de desinformación o reseñas falsas.',
          'Compartir aprendizajes anonimizados con la cohorte.',
        ],
        support: [
          'Lugar prioritario en el intensivo de resiliencia ejecutiva.',
          'Estratega bilingüe dedicado durante 90 días de implementación.',
          'Tabletop y simulacro de incidentes personalizado para tu dirección.',
        ],
        cta: 'Postular a la beca',
      },
      {
        id: 'founder-sprint',
        title: 'Patrocinio sprint fundadores',
        description:
          'Apoya a fundadores bootstrapped que reconstruyen credibilidad tras difamación coordinada o abuso en marketplaces.',
        value: '50 % de matrícula + estipendio de viaje',
        eligibility: [
          'Empresa liderada por su fundador con menos de 50 personas.',
          'Ataque reputacional documentado que afecta ingresos.',
          'Disponibilidad para asistir al menos a tres sesiones en vivo.',
        ],
        support: [
          'Acceso al estudio de reconstrucción de autoridad SEO.',
          'Mentoría individual con Artur Ziganshin.',
          'Auditoría de storytelling de conversión con nuestro pod de growth.',
        ],
        cta: 'Solicitar patrocinio',
      },
      {
        id: 'community-guardians',
        title: 'Beca guardianes de comunidad',
        description:
          'Ayuda a ONGs y colectivos a formar moderadores voluntarios y equipos de respuesta rápida.',
        value: 'Beca parcial + créditos de enablement',
        eligibility: [
          'Organización sin fines de lucro o colectivo comunitario registrado.',
          'Comunidad en línea activa con más de 10k miembros.',
          'Compromiso de publicar informe de impacto en 90 días.',
        ],
        support: [
          'Paquete de plazas para la cohorte de operaciones de reputación.',
          'Paquete de plantillas traducidas EN/FR/ES.',
          'Pases trimestrales a office hours para líderes voluntarios.',
        ],
        cta: 'Nominar organización',
      },
    ],
    communityHeading: 'Comunidad y soporte',
    communitySubtitle:
      'La inscripción desbloquea acompañamiento constante para que tu equipo nunca enfrente solo el riesgo reputacional.',
    communityHighlights: [
      {
        label: 'Office hours',
        description: 'Clínicas abiertas cada jueves para cohortes EN/FR/ES.',
      },
      {
        label: 'Signal digest',
        description: 'Resumen quincenal sobre nuevas estafas, políticas y cambios de plataforma.',
      },
      {
        label: 'Vault de playbooks',
        description: 'Plantillas descargables actualizadas cada trimestre.',
      },
    ],
    toolkitHeading: 'Kits de activación',
    toolkitSubtitle:
      'Convierte las lecciones de la Academy en sistemas listos para ejecutar con plantillas, tableros y rituales compartidos.',
    toolkitResourcesLabel: 'Incluye',
    toolkitImpactLabel: 'Impacto logrado',
    toolkit: [
      {
        id: 'intel-vault',
        title: 'Vault de inteligencia de amenazas',
        description:
          'Crea un repositorio vivo con precedentes de retiro, patrones de fraude y contactos regulatorios sincronizados por mercado.',
        artifacts: [
          'Taxonomía para clasificar incidentes por severidad y canal.',
          'Hoja automatizada con macros para agrupar redes fraudulentas.',
          'Workflow trimestral con rotación de responsables y alertas.',
        ],
        impact: 'Reduce 63 % el tiempo de recolección de evidencia en escaladas multi-mercado.',
      },
      {
        id: 'crisis-room',
        title: 'Pack de sala de crisis',
        description:
          'Lanza un centro de comando remoto con guiones de comunicación, cadencias de reporte y rutas de stakeholders.',
        artifacts: [
          'Agenda de stand-up de incidentes de 60 minutos en EN/FR/ES.',
          'Deck ejecutivo con indicadores en vivo.',
          'Macros de escalada aprobadas para legal, policy y plataformas.',
        ],
        impact: 'Disminuye el tiempo a la primera respuesta de 6 horas a menos de 90 minutos.',
      },
      {
        id: 'authority-rebuilder',
        title: 'Reconstructor de autoridad SEO',
        description:
          'Operacionaliza la recuperación SEO con tableros de sprint, briefs de contenido y rituales de reclamación de enlaces.',
        artifacts: [
          'Backlog de seis semanas con épicas priorizadas y responsables.',
          'Plantillas de briefs localizados para contenidos de recuperación.',
          'Esquema de dashboard con indicadores de confianza y conversión.',
        ],
        impact: 'Restaura las conversiones orgánicas previas en dos sprints.',
      },
    ],
    alumniHeading: 'Historias de alumni',
    alumniSubtitle:
      'Así activan los egresados el programa para defender marca, acelerar retiradas y generar confianza medible.',
    alumniCtaLabel: 'Agendar charla con alumni',
    alumni: [
      {
        id: 'leah-martin',
        name: 'Leah Martin',
        role: 'VP Growth',
        organization: 'Marketplace Norteamérica',
        quote:
          'Salimos con un kit de investigación completo y guías para cada stakeholder. El primer sprint de retiro cerró en 72 horas.',
        outcome: 'Recuperó 38 % del GMV perdido y restableció insignias premium en un ciclo.',
        focus: 'Desactivación de reseñas falsas',
      },
      {
        id: 'romain-lefevre',
        name: 'Romain Lefèvre',
        role: 'Chief Communications Officer',
        organization: 'Fintech europea',
        quote:
          'El comité ejecutivo practicó respuestas coordinadas entre legal, producto y comunicación en vez de reaccionar por separado.',
        outcome: 'Redujo 55 % el tiempo de desinformación al aire y aseguró garantías regulatorias previas al lanzamiento.',
        focus: 'Orquestación de crisis transversal',
      },
      {
        id: 'carla-mendez',
        name: 'Carla Méndez',
        role: 'Head of Customer Experience',
        organization: 'Marca de viajes Ibérica',
        quote:
          'Los guiones del laboratorio de moderación dieron seguridad al equipo CX para intervenir temprano y escalar solo amenazas reales.',
        outcome: 'Bajó 41 % los contracargos disputados y aumentó 9 puntos el CSAT trimestre a trimestre.',
        focus: 'Excelencia en moderación comunitaria',
      },
    ],
    testimonialsHeading: 'Lo que dicen los alumni',
    testimonials: [
      {
        quote:
          'Traceremove nos entregó un playbook repetible para investigar reseñas falsas. Recuperamos el puntaje de confianza en un ciclo.',
        name: 'Leah Martin',
        role: 'VP Growth · Marketplace Norteamérica',
      },
      {
        quote:
          'El ejercicio tabletop alineó legal, comunicación y producto en una tarde. Ahora tenemos memoria muscular ejecutiva.',
        name: 'Romain Lefèvre',
        role: 'Chief Communications Officer · Fintech europea',
      },
      {
        quote:
          'Nuestro equipo de CX en español ahora realiza outreach proactivo con los guiones del lab. Las escaladas bajaron 48 % en dos trimestres.',
        name: 'Carla Méndez',
        role: 'Head of Customer Experience · Marca de viajes Ibérica',
      },
    ],
    cta: {
      title: '¿Listo para integrar la Academy en tu organización?',
      subtitle:
        'Contacta al equipo de Artur Ziganshin para adaptar currículos, programar cohortes privadas o combinar Academy con servicios gestionados.',
      primary: 'Planificar mapping curricular',
      secondary: 'Revisar servicios gestionados',
    },
  },
})

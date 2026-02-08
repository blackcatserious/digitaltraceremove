export type ServiceSlug =
  | 'emergency-orm'
  | 'removal-packages'
  | 'security-takedown'
  | 'design-ops'

export type ServiceInfo = {
  slug: ServiceSlug
  title: string
  summary: string
  timeline: string
  priceRange: string
  includes: string[]
  process: string[]
}

export const services: ServiceInfo[] = [
  {
    slug: 'emergency-orm',
    title: 'Emergency ORM',
    summary:
      'Immediate response for sudden reputation attacks, negative search results, and high-risk media exposure.',
    timeline: '24–48 hours for initial removals, 7–10 days for sustained suppression.',
    priceRange: '$4,500–$18,000 per incident',
    includes: [
      'Rapid audit of SERPs and social platforms',
      'Removal outreach and de-indexing strategy',
      'Daily evidence log and stakeholder updates',
    ],
    process: [
      'NDA & brief: secure intake, evidence capture, and escalation routing.',
      'Diagnosis & plan: identify leverage points, legal pathways, and takedown sequence.',
      'Execution & report: removal actions, suppression campaigns, and final incident report.',
    ],
  },
  {
    slug: 'removal-packages',
    title: 'Removal Packages',
    summary:
      'Bundled link removal and de-indexing packages for executives, founders, and high-visibility teams.',
    timeline: '5–14 days depending on platform response times.',
    priceRange: '$2,800–$12,000 per package',
    includes: [
      'Platform escalation and rights management',
      'Search engine removal workflows',
      'Secure client portal updates',
    ],
    process: [
      'NDA & brief: gather URLs, sources, and jurisdiction details.',
      'Diagnosis & plan: prioritize removals by impact and speed.',
      'Execution & report: run removal tasks and deliver closeout report.',
    ],
  },
  {
    slug: 'security-takedown',
    title: 'Security Takedown',
    summary:
      'Rapid containment of doxxing, impersonation, and extortion threats across platforms and registrars.',
    timeline: 'Immediate containment within 24 hours, full takedown in 3–7 days.',
    priceRange: '$6,000–$22,000 per incident',
    includes: [
      'Threat analysis and digital forensics',
      'Registrar and hosting takedown coordination',
      'Evidence chain for legal teams',
    ],
    process: [
      'NDA & brief: intake security evidence and urgency ranking.',
      'Diagnosis & plan: map threat sources and takedown pathways.',
      'Execution & report: neutralize assets and provide final report.',
    ],
  },
  {
    slug: 'design-ops',
    title: 'Design Ops',
    summary:
      'Rebuild trust through owned media, executive visibility, and search-aligned content systems.',
    timeline: '2–6 weeks for initial asset launch.',
    priceRange: '$3,500–$15,000 per engagement',
    includes: [
      'Narrative positioning workshops',
      'Owned media and profile optimization',
      'Search-optimized content briefs',
    ],
    process: [
      'NDA & brief: collect stakeholder requirements and content assets.',
      'Diagnosis & plan: define narratives and content operations.',
      'Execution & report: launch assets and deliver performance readout.',
    ],
  },
]

export const serviceMap = services.reduce<Record<ServiceSlug, ServiceInfo>>((acc, service) => {
  acc[service.slug] = service
  return acc
}, {} as Record<ServiceSlug, ServiceInfo>)

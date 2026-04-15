export type Language = 'en' | 'fr' | 'es'

export interface ServicePackage {
  name: string
  price: string
  description: string
  deliverables: string[]
}

export interface ProcessStep {
  title: string
  description: string
}

export interface FaqItem {
  question: string
  answer: string
}

export interface CaseStudy {
  title: string
  summary: string
  impact: string
}

export interface ServicePageContent {
  id: string
  language: Language
  serviceKey: string
  industryKey: string
  serviceName: string
  industryName: string
  slug: string
  path: string
  title: string
  metaDescription: string
  seoKeywords: string[]
  hero: {
    preheading: string
    heading: string
    subheading: string
    primaryCta: string
    secondaryCta: string
  }
  overview: string[]
  serviceHighlights: string[]
  packages: ServicePackage[]
  differentiators: string[]
  process: ProcessStep[]
  metrics: string[]
  faq: FaqItem[]
  caseStudy: CaseStudy
  contactPrompt: string
}

export interface InsightPanelContent {
  id: string
  title: string
  description: string
  metricLabel: string
  metricValue: string
  metricDelta: string
  spotlight: string
  visualizationLabel: string
  trend: number[]
}

export interface InsightDashboardContent {
  eyebrow: string
  heading: string
  subheading: string
  ctaPrimary: string
  ctaSecondary: string
  panels: InsightPanelContent[]
}

interface LocalizedString {
  en: string
  fr: string
  es: string
}

interface LocalizedList {
  en: string[]
  fr: string[]
  es: string[]
}

interface ServiceConfig {
  key: string
  names: LocalizedString
  summary: LocalizedString
  promise: LocalizedString
  deliverables: LocalizedList
  proof: LocalizedString
  metrics: LocalizedList
  basePrice: number
}

interface IndustryConfig {
  key: string
  names: LocalizedString
  challenge: LocalizedString
  nuance: LocalizedString
  audience: LocalizedString
  multiplier: number
  accelerators: LocalizedList
}

const locales: Record<Language, string> = {
  en: 'en-US',
  fr: 'fr-FR',
  es: 'es-ES',
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    agencyName: 'Traceremove Digital Platform',
    discover: 'Discovery & Insight',
    blueprint: 'Go-to-market Blueprint',
    activation: 'Full-funnel Activation',
    optimisation: 'Measurement & Optimisation',
    starterPlan: 'Starter Plan',
    growthPlan: 'Growth Plan',
    scalePlan: 'Scale Plan',
    starterDescription: 'Designed for teams validating a growth channel with clear, time-bound experiments.',
    growthDescription: 'For marketing leaders expanding pipeline reliability with multi-touch campaigns.',
    scaleDescription: 'Enterprise-grade orchestration with experimentation, enablement, and executive reporting.',
    learnMore: 'See success story',
    contactCta: 'Book a strategy session',
    exploreWork: 'Download capabilities deck',
    overviewLabel: 'Why this matters',
    highlightsLabel: 'What we deliver',
    differentiatorsLabel: 'Why Traceremove',
    processLabel: 'How our team partners with yours',
    metricsLabel: 'Growth signals we focus on',
    faqLabel: 'Questions teams ask us',
    contactPrompt: 'Ready to build momentum? Let’s align on your targets and tailor the squad you need.',
    faq1q: 'How do we kick off collaboration?',
    faq2q: 'What does reporting look like?',
    faq3q: 'Can the engagement scale with us?',
    faq1aIntro: 'We start with a diagnostic workshop to map customer journeys, stack maturity, and data availability.',
    faq2aIntro: 'Every sprint concludes with an instrumentation review and a narrative dashboard built in Looker Studio.',
    faq3aIntro: 'Engagements are modular. We can add pods for creative, automation, or data science as new initiatives appear.',
    caseStudyTitle: 'Campaign velocity for {industry}',
    caseStudySummary: 'A {industry} brand partnered with Traceremove to activate {service} in six weeks.',
    caseStudyImpact: 'Result: {result}.',
    readMore: 'Read the full approach',
    heroPreheading: '{service} for {industry}',
    heroSubheading: 'Specialised squads that blend positioning, creative, and analytics to amplify revenue teams.',
    highlightService: 'Service focus',
    highlightChallenge: 'Industry pressure',
    highlightAcceleration: 'Acceleration',
    highlightEnablement: 'Enablement',
    highlightMomentum: 'Momentum',
    differentiator1:
      '{agency} embeds with your team so knowledge transfer and execution stay in lockstep.',
    differentiator2:
      'We orchestrate revenue, product, and creative stakeholders through agile ceremonies tailored to {industry}.',
    differentiator3:
      'Every initiative is paired with a measurement framework so {serviceLower} proves impact fast.',
    differentiator4:
      'Playbooks and templates become part of your internal stack, ensuring long-term autonomy.',
    processDescription1:
      'We audit data, positioning, and historical performance to uncover friction in the {industryLower} journey.',
    processDescription2:
      'Together we map plays, rituals, and success metrics that connect {serviceLower} to revenue outcomes.',
    processDescription3:
      'Our cross-functional squad ships creative, ops, and enablement artefacts with weekly insight reviews.',
    processDescription4:
      'We iterate based on experiment readouts, refining messaging, audience focus, and systems integration.',
  },
  fr: {
    agencyName: 'Agence numérique Traceremove',
    discover: 'Exploration & insights',
    blueprint: 'Plan de mise sur le marché',
    activation: 'Activation full funnel',
    optimisation: 'Mesure & optimisation',
    starterPlan: 'Offre Essentielle',
    growthPlan: 'Offre Croissance',
    scalePlan: 'Offre Expansion',
    starterDescription: 'Pensée pour les équipes qui valident un levier de croissance avec des expériences limitées dans le temps.',
    growthDescription: 'Pour les directions marketing qui veulent sécuriser leur pipeline avec des campagnes multicanales.',
    scaleDescription: 'Orchestration de niveau entreprise avec expérimentation, enablement et reporting exécutif.',
    learnMore: 'Voir le cas client',
    contactCta: 'Planifier une session stratégie',
    exploreWork: 'Télécharger notre offre',
    overviewLabel: 'Pourquoi c’est décisif',
    highlightsLabel: 'Ce que nous livrons',
    differentiatorsLabel: 'Pourquoi Traceremove',
    processLabel: 'Notre méthode de collaboration',
    metricsLabel: 'Indicateurs que nous suivons',
    faqLabel: 'Questions fréquentes',
    contactPrompt: 'Prêt à accélérer? Alignons-nous sur vos objectifs et constituons l’équipe dédiée.',
    faq1q: 'Comment démarre notre collaboration ?',
    faq2q: 'À quoi ressemble le reporting ?',
    faq3q: 'L’accompagnement peut-il évoluer ?',
    faq1aIntro: 'Nous débutons par un atelier de diagnostic pour cartographier les parcours clients, la maturité de votre stack et les données disponibles.',
    faq2aIntro: 'Chaque sprint se conclut par un point instrumentation et un tableau de bord narratif construit dans Looker Studio.',
    faq3aIntro: 'Nos missions sont modulaires. Nous ajoutons des squads créa, automation ou data science selon vos priorités.',
    caseStudyTitle: 'Accélération des campagnes pour {industry}',
    caseStudySummary: 'Une marque {industry} a confié à Traceremove l’activation de {service} en six semaines.',
    caseStudyImpact: 'Résultat : {result}.',
    readMore: 'Découvrir notre approche',
    heroPreheading: '{service} pour {industry}',
    heroSubheading: 'Des squads spécialisés qui allient positionnement, création et analytics pour amplifier les revenus.',
    highlightService: 'Focus service',
    highlightChallenge: 'Pression secteur',
    highlightAcceleration: 'Accélération',
    highlightEnablement: 'Montée en compétences',
    highlightMomentum: 'Dynamique',
    differentiator1:
      "{agency} s'immerge auprès de vos équipes pour assurer un transfert de connaissances fluide.",
    differentiator2:
      'Nous orchestrons marketing, produit et création avec des rituels agiles adaptés au secteur {industry}.',
    differentiator3:
      "Chaque initiative dispose d'un cadre de mesure pour que {serviceLower} prouve rapidement son impact.",
    differentiator4:
      "Playbooks et templates rejoignent votre stack interne afin de garantir l'autonomie durable.",
    processDescription1:
      "Nous auditons données, positionnement et performances passées pour lever les frictions du parcours {industryLower}.",
    processDescription2:
      "Ensemble nous cartographions jeux d'actions, rituels et KPIs reliant {serviceLower} aux résultats business.",
    processDescription3:
      "Notre squad pluridisciplinaire livre créa, ops et enablement avec des revues d'insights hebdomadaires.",
    processDescription4:
      "Nous itérons via les lectures d'expériences en ajustant messages, ciblages et intégrations systèmes.",
  },
  es: {
    agencyName: 'Agencia digital Traceremove',
    discover: 'Descubrimiento e insights',
    blueprint: 'Plan de go-to-market',
    activation: 'Activación full funnel',
    optimisation: 'Medición y optimización',
    starterPlan: 'Plan Inicial',
    growthPlan: 'Plan Crecimiento',
    scalePlan: 'Plan Escala',
    starterDescription: 'Pensado para equipos que prueban un canal de crecimiento mediante experimentos controlados.',
    growthDescription: 'Para líderes de marketing que desean ampliar un pipeline confiable con campañas multicanal.',
    scaleDescription: 'Orquestación nivel enterprise con experimentación, habilitación y reportes ejecutivos.',
    learnMore: 'Ver caso de éxito',
    contactCta: 'Agenda una sesión estratégica',
    exploreWork: 'Descargar brochure',
    overviewLabel: 'Por qué importa',
    highlightsLabel: 'Lo que entregamos',
    differentiatorsLabel: 'Por qué Traceremove',
    processLabel: 'Cómo colaboramos',
    metricsLabel: 'Indicadores clave',
    faqLabel: 'Preguntas frecuentes',
    contactPrompt: '¿Listo para generar tracción? Alineemos tus metas y armemos el squad ideal.',
    faq1q: '¿Cómo iniciamos la colaboración?',
    faq2q: '¿Cómo se ve el reporting?',
    faq3q: '¿La colaboración puede escalar?',
    faq1aIntro: 'Empezamos con un workshop de diagnóstico para mapear el journey del cliente, la madurez del stack y la disponibilidad de datos.',
    faq2aIntro: 'Cada sprint termina con una revisión de instrumentación y un dashboard narrativo construido en Looker Studio.',
    faq3aIntro: 'El servicio es modular. Sumamos pods creativos, de automatización o data science según evolucionan las iniciativas.',
    caseStudyTitle: 'Velocidad de campaña para {industry}',
    caseStudySummary: 'Una marca {industry} confió en Traceremove para activar {service} en seis semanas.',
    caseStudyImpact: 'Resultado: {result}.',
    readMore: 'Conoce el enfoque completo',
    heroPreheading: '{service} para {industry}',
    heroSubheading: 'Squads especializados que combinan posicionamiento, creatividad y analítica para impulsar ingresos.',
    highlightService: 'Enfoque del servicio',
    highlightChallenge: 'Presión del sector',
    highlightAcceleration: 'Aceleración',
    highlightEnablement: 'Habilitación',
    highlightMomentum: 'Impulso',
    differentiator1:
      '{agency} se integra con tu equipo para que el conocimiento fluya sin fricciones.',
    differentiator2:
      'Orquestamos marketing, producto y creatividad con rituales ágiles adaptados a {industry}.',
    differentiator3:
      'Cada iniciativa cuenta con un marco de medición para que {serviceLower} demuestre impacto rápido.',
    differentiator4:
      'Nuestros playbooks y plantillas pasan a formar parte de tu stack interno para asegurar autonomía.',
    processDescription1:
      'Auditamos datos, posicionamiento y performance histórica para eliminar fricciones en el viaje {industryLower}.',
    processDescription2:
      'Juntos mapeamos jugadas, rituales y métricas de éxito que conectan {serviceLower} con los resultados de ingresos.',
    processDescription3:
      'Nuestro squad multidisciplinario entrega creatividad, operaciones y enablement con revisiones semanales de insights.',
    processDescription4:
      'Iteramos a partir de los aprendizajes de experimentos, afinando mensajes, audiencias e integraciones.',
  },
}

const serviceConfigs: ServiceConfig[] = [
  {
    key: 'brand-identity',
    names: {
      en: 'Brand Identity Design',
      fr: 'Design d’identité de marque',
      es: 'Diseño de identidad de marca',
    },
    summary: {
      en: 'We translate strategic positioning into a visual and verbal identity system built for omnichannel storytelling.',
      fr: 'Nous transformons votre positionnement en un système visuel et verbal cohérent pour toutes les prises de parole.',
      es: 'Convertimos tu posicionamiento en un sistema visual y verbal coherente para cada punto de contacto.',
    },
    promise: {
      en: 'Our creative directors map brand architecture, tone, and asset libraries so teams ship confident creative fast.',
      fr: 'Nos directeurs créatifs cadrent l’architecture de marque, la tonalité et les librairies d’actifs pour accélérer la production.',
      es: 'Nuestros directores creativos definen arquitectura, tono y librerías de activos para lanzar creatividades con confianza.',
    },
    deliverables: {
      en: ['Narrative platform and manifesto', 'Visual logo suite with usage rules', 'Messaging matrix by audience segment', 'Art-direction guidelines for campaign assets', 'Editable templates for decks and sales collateral', 'Asset handover and enablement training'],
      fr: ['Plateforme narrative et manifeste', 'Suite de logos avec règles d’usage', 'Matrice de messages par segment', 'Recommandations d’arts directionnels', 'Templates éditables pour supports commerciaux', 'Passation d’actifs et formation des équipes'],
      es: ['Plataforma narrativa y manifiesto', 'Suite de logotipos con reglas de uso', 'Matriz de mensajes por segmento', 'Guías de dirección de arte para campañas', 'Plantillas editables para comerciales', 'Entrega de activos y capacitación del equipo'],
    },
    proof: {
      en: 'Unified assets cut concept approvals from six weeks to nine days across three teams.',
      fr: 'Un socle commun réduit les validations de six semaines à neuf jours sur trois équipes.',
      es: 'Los activos unificados redujeron las aprobaciones de seis semanas a nueve días en tres equipos.',
    },
    metrics: {
      en: ['Asset adoption rate', 'Brand recall uplift', 'Time-to-market for campaigns'],
      fr: ['Taux d’adoption des assets', 'Gain de mémorisation', 'Time-to-market des campagnes'],
      es: ['Adopción de activos', 'Incremento en recordación de marca', 'Time-to-market de campañas'],
    },
    basePrice: 5200,
  },
  {
    key: 'content-strategy',
    names: {
      en: 'Content Strategy & Production',
      fr: 'Stratégie et production de contenu',
      es: 'Estrategia y producción de contenidos',
    },
    summary: {
      en: 'Editorial strategists and producers plan narratives anchored in customer research and performance insights.',
      fr: 'Nos stratèges éditoriaux bâtissent des récits ancrés dans la recherche client et les signaux de performance.',
      es: 'Estrategas editoriales construyen relatos basados en investigación de clientes e insights de rendimiento.',
    },
    promise: {
      en: 'We deliver newsroom-like operations with briefs, production sprints, and distribution frameworks.',
      fr: 'Nous déployons une newsroom intégrant briefs, sprints de production et cadres de diffusion.',
      es: 'Operamos como una newsroom con briefs, sprints de producción y marcos de distribución.',
    },
    deliverables: {
      en: ['Voice of customer insight report', 'Editorial calendar tied to funnel stages', 'Long-form anchor asset production', 'Derivative asset kits for social and lifecycle', 'Distribution playbooks with channel copy', 'Performance retro and next-step roadmap'],
      fr: ['Rapport d’insights voix client', 'Calendrier éditorial par étape de funnel', 'Production d’un contenu pilier long format', 'Kits d’actifs dérivés social et lifecycle', 'Playbooks de diffusion avec copies canal', 'Rétro performance et roadmap suivante'],
      es: ['Informe de insights de cliente', 'Calendario editorial por etapa del embudo', 'Producción de pieza ancla de formato largo', 'Kits de activos derivados para social y lifecycle', 'Playbooks de distribución con copies por canal', 'Retro de performance y hoja de ruta siguiente'],
    },
    proof: {
      en: 'Clients ship 4x more strategic narratives without sacrificing quality control.',
      fr: 'Nos clients publient 4 fois plus de récits stratégiques sans sacrifier la qualité.',
      es: 'Los clientes publican 4 veces más relatos estratégicos sin perder control de calidad.',
    },
    metrics: {
      en: ['Share of voice growth', 'Content-assisted pipeline', 'Organic engagement lift'],
      fr: ['Gain de part de voix', 'Pipeline assisté par le contenu', 'Hausse de l’engagement organique'],
      es: ['Crecimiento en share of voice', 'Pipeline asistido por contenido', 'Incremento del engagement orgánico'],
    },
    basePrice: 6400,
  },
  {
    key: 'seo',
    names: {
      en: 'Technical & Strategic SEO',
      fr: 'SEO technique et stratégique',
      es: 'SEO técnico y estratégico',
    },
    summary: {
      en: 'Our SEO architects combine crawling diagnostics, entity modelling, and editorial enablement.',
      fr: 'Nos architectes SEO allient diagnostics de crawl, modélisation d’entités et coaching éditorial.',
      es: 'Nuestros arquitectos SEO combinan diagnósticos de crawl, modelado de entidades y habilitación editorial.',
    },
    promise: {
      en: 'We integrate with product and content squads to unlock discoverability without sacrificing performance.',
      fr: 'Nous co-construisons avec produit et contenu pour libérer la découvrabilité sans dégrader la performance.',
      es: 'Integramos producto y contenido para abrir descubrimiento sin sacrificar rendimiento.',
    },
    deliverables: {
      en: ['Technical audit and prioritised backlog', 'Information architecture blueprint', 'Schema and entity optimisation plan', 'Editorial briefs linked to opportunity clusters', 'Internal linking and pillar strategy', 'Analytics setup with Looker Studio dashboards'],
      fr: ['Audit technique et backlog priorisé', 'Blueprint d’architecture de l’information', 'Plan de schéma et d’optimisation d’entités', 'Briefs éditoriaux liés aux grappes d’opportunités', 'Stratégie de maillage interne et piliers', 'Mise en place analytics et dashboards Looker'],
      es: ['Auditoría técnica con backlog priorizado', 'Plano de arquitectura de información', 'Plan de optimización de schema y entidades', 'Briefs editoriales ligados a clústeres de oportunidad', 'Estrategia de interlinking y pilares', 'Implementación analítica con dashboards en Looker'],
    },
    proof: {
      en: 'Search-led pipeline increased 62% within two quarters.',
      fr: 'Le pipeline issu du search a progressé de 62 % en deux trimestres.',
      es: 'El pipeline proveniente de search creció 62 % en dos trimestres.',
    },
    metrics: {
      en: ['Non-brand traffic growth', 'Topical authority gains', 'Revenue per organic visit'],
      fr: ['Croissance du trafic hors marque', 'Gain d’autorité thématique', 'Revenu par visite organique'],
      es: ['Crecimiento de tráfico non-brand', 'Incremento de autoridad temática', 'Ingresos por visita orgánica'],
    },
    basePrice: 6800,
  },
  {
    key: 'performance-ads',
    names: {
      en: 'Performance Media & Paid Acquisition',
      fr: 'Media performance et acquisition payante',
      es: 'Medios de performance y adquisición paga',
    },
    summary: {
      en: 'Acquisition strategists manage cross-channel budgets with real-time experimentation frameworks.',
      fr: 'Nos spécialistes pilotent vos budgets multicanaux avec une logique d’expérimentation continue.',
      es: 'Estrategas de adquisición gestionan presupuestos multicanal con experimentación continua.',
    },
    promise: {
      en: 'We align creative, offers, and landing experiences to accelerate payback periods.',
      fr: 'Nous alignons créa, offres et landing pages pour raccourcir vos périodes de rentabilisation.',
      es: 'Alineamos creatividades, ofertas y landings para acelerar el payback.',
    },
    deliverables: {
      en: ['Channel and audience mapping', 'Creative lab briefs and asset production', 'Experiment roadmap with statistical guardrails', 'Budget pacing and efficiency dashboard', 'Landing page CRO recommendations', 'Attribution alignment workshop'],
      fr: ['Cartographie canaux et audiences', 'Briefs créatifs et production d’actifs', 'Feuille de route tests avec garde-fous statistiques', 'Dashboard de pilotage budgétaire', 'Recommandations CRO pour landing pages', 'Atelier d’alignement attribution'],
      es: ['Mapeo de canales y audiencias', 'Briefs creativos y producción de assets', 'Roadmap de experimentos con controles estadísticos', 'Dashboard de inversión y eficiencia', 'Recomendaciones CRO para landings', 'Workshop de alineación de atribución'],
    },
    proof: {
      en: 'Cost per qualified opportunity dropped 37% while spend scaled 2.3x.',
      fr: 'Le coût par opportunité qualifiée baisse de 37 % avec un budget x2,3.',
      es: 'El costo por oportunidad calificada cayó 37 % mientras la inversión creció 2,3x.',
    },
    metrics: {
      en: ['CAC payback period', 'Pipeline velocity', 'Creative fatigue signals'],
      fr: ['Période de payback CAC', 'Vélocité pipeline', 'Signaux de fatigue créative'],
      es: ['Periodo de payback del CAC', 'Velocidad de pipeline', 'Señales de fatiga creativa'],
    },
    basePrice: 7500,
  },
  {
    key: 'marketing-automation',
    names: {
      en: 'Marketing Automation & Lifecycle',
      fr: 'Automation marketing & lifecycle',
      es: 'Automatización y lifecycle marketing',
    },
    summary: {
      en: 'Automation architects orchestrate lifecycle journeys, scoring models, and RevOps alignment.',
      fr: 'Nos architectes automation orchestrent vos parcours lifecycle, vos scores et l’alignement RevOps.',
      es: 'Arquitectos de automatización orquestan journeys lifecycle, modelos de scoring y alineación con RevOps.',
    },
    promise: {
      en: 'We implement journey design backed by testing cadences so leads progress with precision.',
      fr: 'Nous déployons des parcours testés en continu pour faire progresser vos leads avec précision.',
      es: 'Implementamos journeys con cadencias de testing para hacer avanzar leads con precisión.',
    },
    deliverables: {
      en: ['Lifecycle opportunity mapping', 'Nurture architecture with trigger logic', 'Lead scoring and routing schema', 'Email & in-app messaging kits', 'Automation QA and documentation', 'RevOps alignment ceremonies'],
      fr: ['Cartographie des opportunités lifecycle', 'Architecture de nurturing et logiques de triggers', 'Schéma de scoring et de routage', 'Kits email et in-app messaging', 'Recette automation et documentation', 'Rituels d’alignement RevOps'],
      es: ['Mapeo de oportunidades lifecycle', 'Arquitectura de nurturing con triggers', 'Schema de scoring y ruteo', 'Kits de email e in-app messaging', 'QA de automatización y documentación', 'Ceremonias de alineación RevOps'],
    },
    proof: {
      en: 'Lifecycle contribution to revenue grew from 14% to 33% in nine months.',
      fr: 'La contribution du lifecycle au revenu passe de 14 % à 33 % en neuf mois.',
      es: 'La contribución del lifecycle a ingresos subió de 14 % a 33 % en nueve meses.',
    },
    metrics: {
      en: ['Lifecycle sourced revenue', 'Lead-to-opportunity conversion', 'Engagement heat maps'],
      fr: ['Revenu attribué au lifecycle', 'Conversion lead-to-opportunity', 'Cartes de chaleur d’engagement'],
      es: ['Ingresos originados en lifecycle', 'Conversión lead-oportunidad', 'Mapas de calor de engagement'],
    },
    basePrice: 7000,
  },
  {
    key: 'ui-ux',
    names: {
      en: 'UI/UX Design Systems',
      fr: 'Design system UI/UX',
      es: 'Sistemas de diseño UI/UX',
    },
    summary: {
      en: 'Product designers craft component libraries and research-backed interaction patterns.',
      fr: 'Nos designers produit bâtissent bibliothèques de composants et patterns testés.',
      es: 'Diseñadores de producto crean librerías de componentes y patrones testados.',
    },
    promise: {
      en: 'We align product, engineering, and marketing touchpoints around a shared design language.',
      fr: 'Nous alignons produit, engineering et marketing autour d’un langage de design commun.',
      es: 'Alineamos producto, ingeniería y marketing en torno a un lenguaje de diseño común.',
    },
    deliverables: {
      en: ['Design system audit and governance model', 'Component library in Figma with tokens', 'Accessibility standards and QA flows', 'Prototype validation with user testing', 'Documentation hub and adoption workshops', 'Design-to-dev handoff rituals'],
      fr: ['Audit du design system et gouvernance', 'Bibliothèque de composants Figma avec tokens', 'Standards d’accessibilité et QA', 'Validation prototypes via tests utilisateurs', 'Hub documentaire et ateliers adoption', 'Rituels de handoff design-dev'],
      es: ['Auditoría del design system y gobernanza', 'Librería de componentes en Figma con tokens', 'Estándares de accesibilidad y QA', 'Validación de prototipos con tests de usuarios', 'Hub documental y workshops de adopción', 'Rituales de handoff diseño-dev'],
    },
    proof: {
      en: 'Release cycle time decreased 28% after design system adoption.',
      fr: 'Le time-to-release baisse de 28 % après adoption du design system.',
      es: 'El tiempo de release cayó 28 % tras adoptar el design system.',
    },
    metrics: {
      en: ['Design debt reduction', 'Component adoption velocity', 'Task success rates'],
      fr: ['Réduction de la dette design', 'Vitesse d’adoption des composants', 'Taux de succès des tâches'],
      es: ['Reducción de deuda de diseño', 'Velocidad de adopción de componentes', 'Tasa de éxito en tareas'],
    },
    basePrice: 7800,
  },
  {
    key: 'product-launch',
    names: {
      en: 'Product Launch Playbooks',
      fr: 'Playbooks de lancement produit',
      es: 'Playbooks de lanzamiento de producto',
    },
    summary: {
      en: 'We operationalise cross-functional launch plans with precise revenue milestones.',
      fr: 'Nous orchestrons des plans de lancement transverses avec jalons business précis.',
      es: 'Orquestamos planes de lanzamiento transversales con hitos de ingresos claros.',
    },
    promise: {
      en: 'From positioning to enablement, we choreograph the entire launch runway.',
      fr: 'Du positionnement à l’enablement, nous chorégrapheons l’ensemble du lancement.',
      es: 'Del posicionamiento al enablement, coreografiamos todo el lanzamiento.',
    },
    deliverables: {
      en: ['Launch narrative and messaging houses', 'Segmented audience activation plan', 'Revenue milestone forecast and KPIs', 'Channel-by-channel execution tracker', 'Enablement toolkits for sales and CS', 'Post-launch optimisation backlog'],
      fr: ['Narratif de lancement et messages clés', 'Plan d’activation par segment d’audience', 'Prévision des jalons revenus et KPIs', 'Tracker d’exécution par canal', 'Kits d’enablement pour sales et CS', 'Backlog d’optimisation post-lancement'],
      es: ['Narrativa de lanzamiento y mensajes clave', 'Plan de activación por segmento', 'Forecast de hitos de ingresos y KPIs', 'Tracker de ejecución por canal', 'Kits de enablement para ventas y CS', 'Backlog de optimización post lanzamiento'],
    },
    proof: {
      en: 'Launch pipeline target exceeded by 118% in the first quarter.',
      fr: 'Objectif de pipeline dépassé de 118 % au premier trimestre.',
      es: 'La meta de pipeline se superó en 118 % el primer trimestre.',
    },
    metrics: {
      en: ['Launch-sourced pipeline', 'Enablement adoption', 'Customer activation rate'],
      fr: ['Pipeline issu du lancement', 'Adoption des outils d’enablement', 'Taux d’activation client'],
      es: ['Pipeline originado en el lanzamiento', 'Adopción de enablement', 'Tasa de activación de clientes'],
    },
    basePrice: 8200,
  },
  {
    key: 'demand-generation',
    names: {
      en: 'Demand Generation Programs',
      fr: 'Programmes de demand generation',
      es: 'Programas de generación de demanda',
    },
    summary: {
      en: 'Strategists design plays that blend events, paid, content, and partner motions.',
      fr: 'Nos stratégistes assemblent events, paid, contenu et partenariats dans des programmes cohérents.',
      es: 'Estrategas combinan eventos, paid, contenido y alianzas en programas coherentes.',
    },
    promise: {
      en: 'We build pipelines that compound with repeatable campaign frameworks.',
      fr: 'Nous construisons un pipeline cumulatif avec des cadres de campagnes répétables.',
      es: 'Construimos pipeline compuesto con frameworks de campañas repetibles.',
    },
    deliverables: {
      en: ['Demand waterfall analysis', 'Audience and persona prioritisation', 'Integrated campaign calendar', 'Signal-based nurture orchestration', 'Partner co-marketing kits', 'Performance retros and improvement backlog'],
      fr: ['Analyse du demand waterfall', 'Priorisation des audiences et personas', 'Calendrier de campagnes intégrées', 'Orchestration de nurturing basé sur les signaux', 'Kits de co-marketing partenaires', 'Rétros performances et backlog d’amélioration'],
      es: ['Análisis del demand waterfall', 'Priorización de audiencias y buyer persona', 'Calendario de campañas integradas', 'Orquestación de nurturing basado en señales', 'Kits de co-marketing con partners', 'Retros de desempeño y backlog de mejora'],
    },
    proof: {
      en: 'Marketing sourced pipeline doubled in five months.',
      fr: 'Le pipeline issu du marketing a doublé en cinq mois.',
      es: 'El pipeline originado en marketing se duplicó en cinco meses.',
    },
    metrics: {
      en: ['Marketing qualified pipeline', 'Channel mix efficiency', 'Event-to-opportunity rate'],
      fr: ['Pipeline marketing qualifié', 'Efficacité du mix canal', 'Conversion event-opportunité'],
      es: ['Pipeline marketing calificado', 'Eficiencia del mix de canales', 'Conversión evento-oportunidad'],
    },
    basePrice: 7600,
  },
  {
    key: 'email-nurture',
    names: {
      en: 'Email Nurture Systems',
      fr: 'Systèmes de nurturing email',
      es: 'Sistemas de nurturing por email',
    },
    summary: {
      en: 'Lifecycle strategists craft behavioural email programs rooted in segmentation and testing.',
      fr: 'Nos spécialistes lifecycle conçoivent des programmes email basés sur la segmentation et le test.',
      es: 'Estrategas lifecycle crean programas de email basados en segmentación y testeo.',
    },
    promise: {
      en: 'We continuously optimise cadence, creative, and offers to drive revenue, not just opens.',
      fr: 'Nous optimisons cadence, créa et offres pour générer du revenu, pas seulement des ouvertures.',
      es: 'Optimizamos cadencia, creatividades y ofertas para generar ingresos y no solo aperturas.',
    },
    deliverables: {
      en: ['Segmentation blueprint and data audit', 'Triggered lifecycle program design', 'Copywriting and design templates', 'Testing matrix with hypotheses and KPIs', 'Deliverability monitoring setup', 'Insights deck with revenue attribution'],
      fr: ['Blueprint de segmentation et audit data', 'Design des programmes déclenchés', 'Templates de copywriting et design', 'Matrice de tests avec hypothèses et KPIs', 'Mise en place du monitoring délivrabilité', 'Deck d’insights avec attribution revenu'],
      es: ['Blueprint de segmentación y auditoría de datos', 'Diseño de programas trigger', 'Plantillas de copy y diseño', 'Matriz de tests con hipótesis y KPIs', 'Configuración de monitoreo de entregabilidad', 'Deck de insights con atribución de ingresos'],
    },
    proof: {
      en: 'Lifecycle email drove 29% of closed-won revenue after optimisation.',
      fr: 'L’email lifecycle a généré 29 % du revenu signé après optimisation.',
      es: 'El email lifecycle generó 29 % del revenue cerrado tras la optimización.',
    },
    metrics: {
      en: ['Revenue per send', 'Program activation rate', 'Deliverability health'],
      fr: ['Revenu par envoi', 'Activation du programme', 'Santé de délivrabilité'],
      es: ['Ingresos por envío', 'Activación del programa', 'Salud de entregabilidad'],
    },
    basePrice: 6100,
  },
  {
    key: 'video-production',
    names: {
      en: 'Video & Motion Production',
      fr: 'Production vidéo & motion',
      es: 'Producción de video y motion',
    },
    summary: {
      en: 'Our studio produces modular video assets aligned to campaigns, product launches, and paid media.',
      fr: 'Notre studio produit des vidéos modulaires alignées sur vos campagnes, lancements et paid media.',
      es: 'Nuestro estudio produce videos modulares alineados con campañas, lanzamientos y paid media.',
    },
    promise: {
      en: 'We script, shoot, and edit for multi-format deployment with performance hooks.',
      fr: 'Nous scénarisons, tournons et montons pour tous formats avec un focus performance.',
      es: 'Guionamos, filmamos y editamos para múltiples formatos con ganchos de performance.',
    },
    deliverables: {
      en: ['Creative concept and storyboard', 'Production schedule and casting', 'On-site or remote direction', 'Modular edits for paid and organic', 'Motion graphics and subtitles package', 'Versioning toolkit and asset management'],
      fr: ['Concept créatif et storyboard', 'Planning de production et casting', 'Réalisation sur site ou à distance', 'Montages modulaires paid et organique', 'Motion design et package sous-titres', 'Kit de versions et gestion des assets'],
      es: ['Concepto creativo y storyboard', 'Plan de producción y casting', 'Dirección presencial o remota', 'Ediciones modulares para paid y orgánico', 'Motion graphics y paquete de subtítulos', 'Kit de versionado y gestión de assets'],
    },
    proof: {
      en: 'Campaign CTR improved 54% with modular video iterations.',
      fr: 'Le CTR campagne a augmenté de 54 % grâce aux déclinaisons vidéo modulaires.',
      es: 'El CTR de campaña subió 54 % con iteraciones de video modulares.',
    },
    metrics: {
      en: ['Video completion rate', 'Cost per engaged view', 'Creative refresh cadence'],
      fr: ['Taux de complétion vidéo', 'Coût par vue engagée', 'Cadence de refresh créatif'],
      es: ['Tasa de finalización de video', 'Costo por vista comprometida', 'Cadencia de refresh creativo'],
    },
    basePrice: 6900,
  },
  {
    key: 'analytics-setup',
    names: {
      en: 'Analytics & Attribution Setup',
      fr: 'Mise en place analytics & attribution',
      es: 'Implementación de analytics y atribución',
    },
    summary: {
      en: 'Data strategists implement tracking architectures that connect product, marketing, and revenue signals.',
      fr: 'Nos data strategists mettent en place une architecture de tracking qui relie produit, marketing et revenu.',
      es: 'Estrategas de datos implementan arquitecturas de tracking que conectan producto, marketing e ingresos.',
    },
    promise: {
      en: 'We make insights trustworthy so teams can operate on shared truths.',
      fr: 'Nous sécurisons vos insights pour que chaque équipe agisse avec des données fiables.',
      es: 'Aseguramos insights confiables para que todos trabajen sobre datos reales.',
    },
    deliverables: {
      en: ['Instrumentation audit and privacy review', 'Analytics tracking plan with governance', 'Attribution modelling recommendations', 'Dashboard suite with automated narratives', 'Enablement sessions for stakeholders', 'Measurement playbook and QA cadence'],
      fr: ['Audit d’instrumentation et revue privacy', 'Plan de tracking avec gouvernance', 'Recommandations de modèles d’attribution', 'Suite de dashboards avec narration automatisée', 'Sessions d’enablement pour les équipes', 'Playbook de mesure et cadence QA'],
      es: ['Auditoría de instrumentación y privacidad', 'Plan de tracking con gobernanza', 'Recomendaciones de modelos de atribución', 'Suite de dashboards con narrativa automatizada', 'Sesiones de enablement para equipos', 'Playbook de medición y cadencia de QA'],
    },
    proof: {
      en: 'Unified analytics eliminated conflicting reports and unlocked faster decisions.',
      fr: 'Un socle analytics unique supprime les rapports contradictoires et accélère les décisions.',
      es: 'La analítica unificada eliminó reportes contradictorios y aceleró decisiones.',
    },
    metrics: {
      en: ['Data freshness SLA', 'Attribution accuracy', 'Insight adoption rate'],
      fr: ['SLA de fraîcheur de données', 'Précision de l’attribution', 'Adoption des insights'],
      es: ['SLA de frescura de datos', 'Precisión de atribución', 'Adopción de insights'],
    },
    basePrice: 6300,
  },
  {
    key: 'sales-enablement',
    names: {
      en: 'Sales Enablement Content',
      fr: 'Contenus d’enablement commercial',
      es: 'Contenidos de enablement comercial',
    },
    summary: {
      en: 'Strategists partner with revenue teams to equip sellers with persuasive stories and tools.',
      fr: 'Nos stratèges co-construisent avec vos commerciaux des récits et outils convaincants.',
      es: 'Estrategas co-crean con ventas historias y herramientas persuasivas.',
    },
    promise: {
      en: 'We ensure marketing insight powers every buyer conversation.',
      fr: 'Nous faisons des insights marketing la base de chaque conversation acheteur.',
      es: 'Hacemos que cada conversación comercial se apoye en insights de marketing.',
    },
    deliverables: {
      en: ['Buyer narrative and objection handling', 'Modular pitch deck system', 'Interactive ROI calculators', 'Competitive intelligence playcards', 'Enablement workshops and certifications', 'Content governance and update cadence'],
      fr: ['Narratif acheteur et réponses aux objections', 'Système de pitch decks modulaires', 'Calculateurs ROI interactifs', 'Playcards de veille concurrentielle', 'Ateliers d’enablement et certifications', 'Gouvernance contenu et cadence de mises à jour'],
      es: ['Narrativa de comprador y manejo de objeciones', 'Sistema modular de pitch decks', 'Calculadoras de ROI interactivas', 'Playcards de inteligencia competitiva', 'Workshops de enablement y certificaciones', 'Gobernanza de contenidos y cadencia de actualización'],
    },
    proof: {
      en: 'Win rates increased 19% with refreshed enablement assets.',
      fr: 'Le taux de transformation progresse de 19 % grâce aux nouveaux contenus.',
      es: 'La tasa de cierre creció 19 % con nuevos assets de enablement.',
    },
    metrics: {
      en: ['Win rate lift', 'Sales cycle compression', 'Content utilization'],
      fr: ['Gain de win rate', 'Compression du cycle de vente', 'Utilisation des contenus'],
      es: ['Incremento del win rate', 'Compresión del ciclo de venta', 'Uso de contenidos'],
    },
    basePrice: 6000,
  },
  {
    key: 'pr-outreach',
    names: {
      en: 'PR & Thought Leadership Outreach',
      fr: 'RP et thought leadership',
      es: 'PR y posicionamiento de liderazgo',
    },
    summary: {
      en: 'Communications strategists secure earned placements that reinforce your category narrative.',
      fr: 'Nos communicants décrochent des prises de parole earned alignées à votre récit de catégorie.',
      es: 'Estrategas de comunicación logran espacios earned que refuerzan tu narrativa de categoría.',
    },
    promise: {
      en: 'We translate product expertise into editorial moments and executive visibility.',
      fr: 'Nous transformons l’expertise produit en prises de parole éditoriales et visibilité dirigeant.',
      es: 'Transformamos tu expertise de producto en momentos editoriales y visibilidad ejecutiva.',
    },
    deliverables: {
      en: ['Story mining workshops', 'Media list development and scoring', 'Thought leadership article ghostwriting', 'Pitch management and follow-up', 'Spokesperson coaching sessions', 'Measurement report on share of voice'],
      fr: ['Workshops de story mining', 'Construction et scoring des media lists', 'Ghostwriting d’articles leadership', 'Gestion des pitchs et relances', 'Coaching de porte-parole', 'Report de mesure sur la part de voix'],
      es: ['Workshops de story mining', 'Construcción y scoring de media lists', 'Ghostwriting de artículos de liderazgo', 'Gestión de pitches y seguimientos', 'Coaching de voceros', 'Reporte de share of voice'],
    },
    proof: {
      en: 'Share of voice grew 3.4x with coordinated outreach.',
      fr: 'La part de voix a été multipliée par 3,4 grâce à notre outreach.',
      es: 'El share of voice se multiplicó 3,4x con outreach coordinado.',
    },
    metrics: {
      en: ['Earned media placements', 'Executive visibility score', 'Share of voice change'],
      fr: ['Retombées média earned', 'Score de visibilité dirigeant', 'Évolution de la part de voix'],
      es: ['Publicaciones earned', 'Puntaje de visibilidad ejecutiva', 'Cambio de share of voice'],
    },
    basePrice: 5800,
  },
  {
    key: 'community-building',
    names: {
      en: 'Community Building & Advocacy',
      fr: 'Développement de communauté & advocacy',
      es: 'Construcción de comunidad y advocacy',
    },
    summary: {
      en: 'We cultivate member-led programs that turn your best customers into advocates.',
      fr: 'Nous animons des programmes qui transforment vos clients en ambassadeurs.',
      es: 'Diseñamos programas que convierten a tus mejores clientes en embajadores.',
    },
    promise: {
      en: 'Programming, content, and tooling keep momentum and feedback loops alive.',
      fr: 'Programmation, contenu et outils maintiennent la dynamique et les boucles de feedback.',
      es: 'Programación, contenido y herramientas mantienen viva la dinámica y el feedback.',
    },
    deliverables: {
      en: ['Community strategy canvas', 'Member onboarding journey', 'Programming calendar and playbooks', 'Advocacy incentive frameworks', 'Community platform configuration', 'Health dashboards and sentiment analysis'],
      fr: ['Canvas de stratégie communauté', 'Parcours d’onboarding membres', 'Calendrier de programmation et playbooks', 'Cadres d’incitation advocacy', 'Configuration de la plateforme communauté', 'Dashboards de santé et analyse de sentiment'],
      es: ['Canvas de estrategia de comunidad', 'Journey de onboarding de miembros', 'Calendario de programación y playbooks', 'Marcos de incentivos de advocacy', 'Configuración de la plataforma de comunidad', 'Dashboards de salud y análisis de sentimiento'],
    },
    proof: {
      en: 'Advocacy-sourced referrals increased 4.6x year over year.',
      fr: 'Les referrals générés par la communauté ont été multipliés par 4,6.',
      es: 'Las referidos generados por la comunidad crecieron 4,6x año contra año.',
    },
    metrics: {
      en: ['Community health score', 'Advocacy referrals', 'Engaged member ratio'],
      fr: ['Score de santé communauté', 'Referrals advocacy', 'Ratio de membres engagés'],
      es: ['Salud de la comunidad', 'Referidos advocacy', 'Ratio de miembros activos'],
    },
    basePrice: 5900,
  },
  {
    key: 'conversion-optimization',
    names: {
      en: 'Conversion Rate Optimisation',
      fr: 'Optimisation des conversions',
      es: 'Optimización de conversiones',
    },
    summary: {
      en: 'We run conversion experimentation programmes that remove friction and grow qualified pipeline.',
      fr: 'Nous pilotons des programmes d’expérimentation qui lèvent les frictions clés.',
      es: 'Dirigimos programas de experimentación que eliminan fricciones clave.',
    },
    promise: {
      en: 'Research, prioritisation, and rigorous testing unlock meaningful revenue uplift.',
      fr: 'Recherche, priorisation et tests rigoureux débloquent un revenu incrémental.',
      es: 'Investigación, priorización y tests rigurosos destraban ingresos incrementales.',
    },
    deliverables: {
      en: ['Quantitative and qualitative research synthesis', 'Hypothesis backlog with ICE scoring', 'Experiment design and development', 'Runbooks for testing tools', 'Insight library and decision log', 'Enablement for product and growth teams'],
      fr: ['Synthèse recherche quanti/quali', 'Backlog d’hypothèses scoré ICE', 'Design et développement des tests', 'Runbooks pour vos outils de testing', 'Bibliothèque d’insights et journal de décisions', 'Enablement pour équipes produit et growth'],
      es: ['Síntesis de investigación cuantitativa y cualitativa', 'Backlog de hipótesis con scoring ICE', 'Diseño y desarrollo de experimentos', 'Runbooks para herramientas de testing', 'Librería de insights y registro de decisiones', 'Enablement para equipos de producto y growth'],
    },
    proof: {
      en: 'Revenue per visitor increased 21% after three experimentation cycles.',
      fr: 'Le revenu par visiteur progresse de 21 % après trois cycles de tests.',
      es: 'El revenue por visitante creció 21 % tras tres ciclos de experimentación.',
    },
    metrics: {
      en: ['Conversion rate lift', 'Experiment velocity', 'Incremental revenue'],
      fr: ['Gain de taux de conversion', 'Vélocité des tests', 'Revenu incrémental'],
      es: ['Incremento del ratio de conversión', 'Velocidad de experimentos', 'Revenue incremental'],
    },
    basePrice: 6700,
  },
  {
    key: 'brand-intelligence',
    names: {
      en: 'Brand Intelligence Automation',
      fr: 'Automatisation de l’intelligence de marque',
      es: 'Automatización de inteligencia de marca',
    },
    summary: {
      en: 'We connect monitoring, response, and automation to keep brand intelligence always active.',
      fr: 'Nous connectons veille, retrait et réponse pour que vos opérations de réputation restent en éveil permanent.',
      es: 'Conectamos monitorización, retirada y respuesta para mantener tus operaciones de reputación siempre activas.',
    },
    promise: {
      en: 'Specialists orchestrate brand intelligence stacks, automations, and analyst rituals to neutralize threats fast.',
      fr: 'Nos spécialistes orchestrent la stack d’intelligence de marque, les automatisations et les rituels analystes pour neutraliser rapidement les menaces.',
      es: 'Especialistas orquestan el stack de inteligencia de marca, las automatizaciones y los rituales de analistas para neutralizar amenazas rápido.',
    },
    deliverables: {
      en: [
        'Signal architecture audit across search, social, marketplaces, and dark web monitors',
        '24/7 alerting rules with sentiment and severity scoring',
        'Takedown playbooks and escalation trees per channel',
        'Automated review authenticity sweeps and response templates',
        'Executive war-room dashboard with trending incidents',
        'Brand defence training for support, comms, and leadership teams',
      ],
      fr: [
        'Audit de l’architecture de signaux sur search, social, marketplaces et veille dark web',
        'Règles d’alerting 24/7 avec scoring de sentiment et de sévérité',
        'Playbooks de retrait et arbres d’escalade par canal',
        'Contrôles automatisés d’authenticité des avis et modèles de réponse',
        'Dashboard war room exécutif avec incidents émergents',
        'Formation défense de marque pour support, communication et direction',
      ],
      es: [
        'Auditoría de arquitectura de señales en search, social, marketplaces y monitores del dark web',
        'Reglas de alertas 24/7 con scoring de sentimiento y severidad',
        'Playbooks de retirada y árboles de escalamiento por canal',
        'Barridos automatizados de autenticidad de reseñas y plantillas de respuesta',
        'Dashboard de war room ejecutivo con incidentes en tendencia',
        'Capacitación en defensa de marca para soporte, comunicación y liderazgo',
      ],
    },
    proof: {
      en: 'Unified signals cut response time from 48 hours to under six across support and comms.',
      fr: 'La centralisation des signaux a réduit les temps de réponse de 48 h à moins de 6 h pour support et communication.',
      es: 'La unificación de señales redujo los tiempos de respuesta de 48 h a menos de 6 h entre soporte y comunicaciones.',
    },
    metrics: {
      en: ['Detection time to incident', 'Share of protected branded assets', 'Revenue preserved from fraud mitigation'],
      fr: ['Délai de détection des incidents', 'Part d’actifs de marque protégés', 'Revenus préservés grâce à la lutte contre la fraude'],
      es: ['Tiempo de detección por incidente', 'Porcentaje de activos de marca protegidos', 'Ingresos preservados por mitigación de fraude'],
    },
    basePrice: 8200,
  },
]

const industryConfigs: IndustryConfig[] = [
  {
    key: 'saas',
    names: {
      en: 'B2B SaaS',
      fr: 'SaaS B2B',
      es: 'SaaS B2B',
    },
    challenge: {
      en: 'Buying committees expand quickly and require layered storytelling across stakeholders.',
      fr: 'Les comités d’achat s’élargissent et demandent un récit adapté à chaque partie prenante.',
      es: 'Los comités de compra crecen y exigen relatos adaptados a cada stakeholder.',
    },
    nuance: {
      en: 'Success depends on integrating lifecycle signals with product usage insights.',
      fr: 'Le succès dépend de l’intégration des signaux lifecycle avec les insights d’usage produit.',
      es: 'El éxito depende de integrar señales de lifecycle con insights de uso del producto.',
    },
    audience: {
      en: 'We work closely with product marketing, demand gen, and RevOps leaders.',
      fr: 'Nous collaborons avec les équipes product marketing, demand gen et RevOps.',
      es: 'Colaboramos con product marketing, demand gen y RevOps.',
    },
    multiplier: 1,
    accelerators: {
      en: ['Product-led growth enablement', 'Usage telemetry integration', 'Partner ecosystem amplification'],
      fr: ['Enablement product-led growth', 'Intégration de la télémétrie d’usage', 'Amplification via l’écosystème partenaires'],
      es: ['Enablement product-led growth', 'Integración de telemetría de uso', 'Amplificación del ecosistema de partners'],
    },
  },
  {
    key: 'ecommerce',
    names: {
      en: 'E-commerce & Retail',
      fr: 'E-commerce & retail',
      es: 'E-commerce y retail',
    },
    challenge: {
      en: 'Margins are pressured by acquisition costs and volatile demand patterns.',
      fr: 'Les marges subissent la pression des coûts d’acquisition et de la demande volatile.',
      es: 'Los márgenes están presionados por el coste de adquisición y la demanda volátil.',
    },
    nuance: {
      en: 'We blend merchandising insight with lifecycle precision to grow repeat revenue.',
      fr: 'Nous combinons merchandising et lifecycle pour stimuler le revenu récurrent.',
      es: 'Combinamos insights de merchandising con lifecycle para hacer crecer el revenue recurrente.',
    },
    audience: {
      en: 'We align with growth, merchandising, and retention teams.',
      fr: 'Nous nous alignons avec les équipes growth, merchandising et fidélisation.',
      es: 'Nos alineamos con growth, merchandising y retención.',
    },
    multiplier: 0.9,
    accelerators: {
      en: ['Merchandising-data sync', 'Lifecycle promotion frameworks', 'Creative production for seasonal launches'],
      fr: ['Synchronisation data merchandising', 'Cadres promotionnels lifecycle', 'Production créative pour temps forts'],
      es: ['Sincronización de datos de merchandising', 'Marcos de promociones lifecycle', 'Producción creativa para temporadas'],
    },
  },
  {
    key: 'healthcare',
    names: {
      en: 'Healthcare & Biotech',
      fr: 'Santé & biotech',
      es: 'Salud y biotecnología',
    },
    challenge: {
      en: 'Strict compliance and scientific nuance demand rigorous content review cycles.',
      fr: 'La conformité et la nuance scientifique exigent des cycles de validation rigoureux.',
      es: 'La regulación y la precisión científica requieren ciclos de revisión rigurosos.',
    },
    nuance: {
      en: 'We integrate medical review with creative workflows to keep launches on schedule.',
      fr: 'Nous intégrons revue médicale et workflows créatifs pour tenir les délais.',
      es: 'Integramos revisión médica con flujos creativos para cumplir los plazos.',
    },
    audience: {
      en: 'We partner with medical, regulatory, and commercial teams.',
      fr: 'Nous travaillons avec les équipes médicales, réglementaires et commerciales.',
      es: 'Trabajamos con equipos médicos, regulatorios y comerciales.',
    },
    multiplier: 1.2,
    accelerators: {
      en: ['Regulatory-compliant workflows', 'Scientific advisory council coordination', 'Patient and HCP insight panels'],
      fr: ['Workflows conformes aux régulations', 'Coordination des comités scientifiques', 'Panels d’insights patients et HCP'],
      es: ['Workflows compatibles con regulación', 'Coordinación con consejo científico', 'Paneles de insights de pacientes y HCP'],
    },
  },
  {
    key: 'fintech',
    names: {
      en: 'Fintech & Financial Services',
      fr: 'Fintech & services financiers',
      es: 'Fintech y servicios financieros',
    },
    challenge: {
      en: 'Trust and compliance require transparent messaging and responsive data operations.',
      fr: 'La confiance et la conformité imposent une communication transparente et une data fiable.',
      es: 'La confianza y la regulación exigen mensajes transparentes y datos confiables.',
    },
    nuance: {
      en: 'We orchestrate stakeholder sign-off while maintaining campaign agility.',
      fr: 'Nous orchestrons les validations tout en conservant l’agilité des campagnes.',
      es: 'Orquestamos aprobaciones manteniendo la agilidad de las campañas.',
    },
    audience: {
      en: 'We align with compliance, product, and acquisition squads.',
      fr: 'Nous nous alignons avec compliance, produit et acquisition.',
      es: 'Nos alineamos con compliance, producto y adquisición.',
    },
    multiplier: 1.1,
    accelerators: {
      en: ['Risk and compliance coordination', 'Investor communications toolkit', 'Financial education content engines'],
      fr: ['Coordination risque et conformité', 'Toolkit de communication investisseurs', 'Moteurs de contenu éducatif financier'],
      es: ['Coordinación de riesgo y compliance', 'Toolkit de comunicación con inversores', 'Motores de contenido de educación financiera'],
    },
  },
  {
    key: 'manufacturing',
    names: {
      en: 'Advanced Manufacturing',
      fr: 'Industrie manufacturière avancée',
      es: 'Manufactura avanzada',
    },
    challenge: {
      en: 'Complex buying cycles across distributors and end users require clear enablement assets.',
      fr: 'Des cycles d’achat complexes demandent des supports d’enablement clairs.',
      es: 'Los ciclos de compra complejos exigen assets de enablement claros.',
    },
    nuance: {
      en: 'We translate technical differentiation into benefits that resonate with operators and procurement.',
      fr: 'Nous transformons la différenciation technique en bénéfices parlants pour opérateurs et achats.',
      es: 'Traducimos la diferenciación técnica en beneficios claros para operaciones y compras.',
    },
    audience: {
      en: 'We collaborate with product marketing, channel, and field sales teams.',
      fr: 'Nous collaborons avec product marketing, channel et ventes terrain.',
      es: 'Colaboramos con marketing de producto, canal y ventas de campo.',
    },
    multiplier: 0.95,
    accelerators: {
      en: ['Channel partner enablement', 'Technical documentation refresh', 'Field marketing playbooks'],
      fr: ['Enablement partenaires channel', 'Mise à jour de la documentation technique', 'Playbooks de marketing terrain'],
      es: ['Enablement de partners de canal', 'Actualización de documentación técnica', 'Playbooks de marketing en campo'],
    },
  },
]

const formatCurrency = (language: Language, value: number) =>
  new Intl.NumberFormat(locales[language], {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value)

const sentence = (input: string) => input.replace(/\s+/g, ' ').trim()

const replaceTokens = (text: string, replacements: Record<string, string>) =>
  text.replace(/\{(.*?)\}/g, (_, key) => replacements[key] ?? '')

const buildPage = (
  service: ServiceConfig,
  industry: IndustryConfig,
  language: Language,
  index: number,
): ServicePageContent => {
  const t = translations[language]
  const serviceName = service.names[language]
  const industryName = industry.names[language]
  const id = `${service.key}-${industry.key}-${language}-${index}`
  const slug = `${service.key}-${industry.key}`
  const path = `/${language}/${slug}`
  const preheading = sentence(
    replaceTokens(t.heroPreheading, {
      service: serviceName,
      industry: industryName,
    }),
  )

  const heading = `${t.agencyName} · ${serviceName}`
  const subheading = t.heroSubheading

  const replacements = {
    agency: t.agencyName,
    industry: industryName,
    industryLower: industryName.toLowerCase(),
    service: serviceName,
    serviceLower: serviceName.toLowerCase(),
  }

  const overview = [
    sentence(
      `${service.summary[language]} ${industry.challenge[language]}`,
    ),
    sentence(
      `${service.promise[language]} ${industry.nuance[language]}`,
    ),
    sentence(`${industry.audience[language]} ${service.proof[language]}`),
  ]

  const serviceHighlights = [
    sentence(`${t.highlightService}: ${service.summary[language]}`),
    sentence(`${t.highlightChallenge}: ${industry.challenge[language]}`),
    sentence(`${t.highlightAcceleration}: ${industry.accelerators[language][0]}`),
    sentence(`${t.highlightEnablement}: ${industry.accelerators[language][1]}`),
    sentence(`${t.highlightMomentum}: ${industry.accelerators[language][2]}`),
  ]

  const basePrice = service.basePrice * industry.multiplier
  const starterDeliverables = service.deliverables[language]
    .slice(0, 3)
    .concat(industry.accelerators[language][0])

  const growthDeliverables = service.deliverables[language]
    .slice(0, 4)
    .concat(industry.accelerators[language][1])
  const additionalGrowthItem = service.deliverables[language][4]
  if (additionalGrowthItem) {
    growthDeliverables.push(additionalGrowthItem)
  }

  const scaleDeliverables = service.deliverables[language]
    .concat(industry.accelerators[language][2])
    .filter(Boolean)

  const packages = [
    {
      name: t.starterPlan,
      price: formatCurrency(language, basePrice),
      description: t.starterDescription,
      deliverables: starterDeliverables,
    },
    {
      name: t.growthPlan,
      price: formatCurrency(language, basePrice * 1.45),
      description: t.growthDescription,
      deliverables: growthDeliverables,
    },
    {
      name: t.scalePlan,
      price: formatCurrency(language, basePrice * 2),
      description: t.scaleDescription,
      deliverables: scaleDeliverables,
    },
  ]

  const differentiators = [
    sentence(replaceTokens(t.differentiator1, replacements)),
    sentence(replaceTokens(t.differentiator2, replacements)),
    sentence(replaceTokens(t.differentiator3, replacements)),
    sentence(replaceTokens(t.differentiator4, replacements)),
  ]

  const process: ProcessStep[] = [
    {
      title: t.discover,
      description: sentence(replaceTokens(t.processDescription1, replacements)),
    },
    {
      title: t.blueprint,
      description: sentence(replaceTokens(t.processDescription2, replacements)),
    },
    {
      title: t.activation,
      description: sentence(replaceTokens(t.processDescription3, replacements)),
    },
    {
      title: t.optimisation,
      description: sentence(replaceTokens(t.processDescription4, replacements)),
    },
  ]

  const metrics = service.metrics[language]

  const faq: FaqItem[] = [
    {
      question: t.faq1q,
      answer: sentence(
        `${t.faq1aIntro} ${industry.accelerators[language][0]} ${serviceName}.`,
      ),
    },
    {
      question: t.faq2q,
      answer: sentence(
        `${t.faq2aIntro} ${service.metrics[language][0]} and ${service.metrics[language][1]} stay front and center.`,
      ),
    },
    {
      question: t.faq3q,
      answer: sentence(
        `${t.faq3aIntro} ${industry.accelerators[language][2]} extends coverage as priorities evolve.`,
      ),
    },
  ]

  const caseStudy: CaseStudy = {
    title: sentence(
      replaceTokens(t.caseStudyTitle, {
        industry: industryName.toLowerCase(),
      }),
    ),
    summary: sentence(
      replaceTokens(t.caseStudySummary, {
        industry: industryName.toLowerCase(),
        service: serviceName.toLowerCase(),
      }),
    ),
    impact: sentence(
      replaceTokens(t.caseStudyImpact, {
        result: service.metrics[language][2],
      }),
    ),
  }

  const metaDescription = sentence(
    `${serviceName} for ${industryName} by ${t.agencyName}. ${overview[0]}`,
  )

  const seoKeywords = [
    `${serviceName} ${industryName} agency`,
    `Traceremove ${service.key} ${industry.key}`,
    `${serviceName} pricing ${industryName}`,
  ]

  return {
    id,
    language,
    serviceKey: service.key,
    industryKey: industry.key,
    serviceName,
    industryName,
    slug,
    path,
    title: `${serviceName} · ${industryName} · Traceremove`,
    metaDescription,
    seoKeywords,
    hero: {
      preheading,
      heading,
      subheading,
      primaryCta: t.contactCta,
      secondaryCta: t.exploreWork,
    },
    overview,
    serviceHighlights,
    packages,
    differentiators,
    process,
    metrics,
    faq,
    caseStudy,
    contactPrompt: t.contactPrompt,
  }
}

const pagesUntrimmed: ServicePageContent[] = []

serviceConfigs.forEach((service, serviceIndex) => {
  industryConfigs.forEach((industry, industryIndex) => {
    ;(['en', 'fr', 'es'] as Language[]).forEach((language, languageIndex) => {
      const page = buildPage(
        service,
        industry,
        language,
        serviceIndex * industryConfigs.length * 3 + industryIndex * 3 + languageIndex,
      )
      pagesUntrimmed.push(page)
    })
  })
})

export const servicePages: ServicePageContent[] = pagesUntrimmed

export const languages: Language[] = ['en', 'fr', 'es']

export const languageLabels: Record<Language, string> = {
  en: 'English',
  fr: 'Français',
  es: 'Español',
}

export const interfaceCopy: Record<
  Language,
  {
    overview: string
    highlights: string
    packages: string
    differentiators: string
    process: string
    metrics: string
    caseStudy: string
    faq: string
    contactHeading: string
    searchPlaceholder: string
    searchResults: string
    languages: string
    services: string
    noMatches: string
  }
> = {
  en: {
    overview: translations.en.overviewLabel,
    highlights: translations.en.highlightsLabel,
    packages: 'Packages & Pricing',
    differentiators: translations.en.differentiatorsLabel,
    process: translations.en.processLabel,
    metrics: translations.en.metricsLabel,
    caseStudy: 'Case Study Snapshot',
    faq: translations.en.faqLabel,
    contactHeading: 'Let’s collaborate',
    searchPlaceholder: 'Search services',
    searchResults: 'Search results',
    languages: 'Languages',
    services: 'Services',
    noMatches: 'No matches yet',
  },
  fr: {
    overview: translations.fr.overviewLabel,
    highlights: translations.fr.highlightsLabel,
    packages: 'Offres & tarifs',
    differentiators: translations.fr.differentiatorsLabel,
    process: translations.fr.processLabel,
    metrics: translations.fr.metricsLabel,
    caseStudy: 'Cas client',
    faq: translations.fr.faqLabel,
    contactHeading: 'Co-créons votre prochaine étape',
    searchPlaceholder: 'Rechercher un service',
    searchResults: 'Résultats de recherche',
    languages: 'Langues',
    services: 'Services',
    noMatches: 'Aucun résultat',
  },
  es: {
    overview: translations.es.overviewLabel,
    highlights: translations.es.highlightsLabel,
    packages: 'Planes y tarifas',
    differentiators: translations.es.differentiatorsLabel,
    process: translations.es.processLabel,
    metrics: translations.es.metricsLabel,
    caseStudy: 'Caso destacado',
    faq: translations.es.faqLabel,
    contactHeading: 'Construyamos juntos',
    searchPlaceholder: 'Buscar servicios',
    searchResults: 'Resultados de búsqueda',
    languages: 'Idiomas',
    services: 'Servicios',
    noMatches: 'Sin coincidencias',
  },
}

export const insightDashboards: Record<Language, InsightDashboardContent> = {
  en: {
    eyebrow: 'Realtime insight stacks',
    heading: 'Visualize your brand defense velocity',
    subheading:
      'Our analysts feed live dashboards across SEO, review integrity, and legal actions so you can see the compounding lift.',
    ctaPrimary: 'Schedule a live tour',
    ctaSecondary: 'Review our case studies',
    panels: [
      {
        id: 'sentiment',
        title: 'Brand sentiment radar',
        description:
          'Synthesizes search, social, and review signals to sustain positive visibility across English, French, and Spanish results.',
        metricLabel: 'Positive visibility',
        metricValue: '92%',
        metricDelta: '+18 pts QoQ',
        spotlight:
          'The visualization highlights the weighted share of positive vs. negative mentions across Google, forums, and press that our monitoring pod neutralizes.',
        visualizationLabel: 'Positive perception trendline',
        trend: [62, 65, 68, 72, 78, 84, 89, 92],
      },
      {
        id: 'response',
        title: 'Crisis response latency',
        description: 'Tracks how quickly harmful narratives are identified, actioned, and resolved across channels.',
        metricLabel: 'Median takedown time',
        metricValue: '3.2h',
        metricDelta: '-41% vs last quarter',
        spotlight:
          'Each downward movement shows faster suppression triggered by our automation, legal, and media pods working in sync.',
        visualizationLabel: 'Response time decrease',
        trend: [48, 44, 39, 36, 32, 28, 24, 22],
      },
      {
        id: 'reviews',
        title: 'Review integrity shield',
        description: 'Detects fake review clusters before they erode conversion and customer trust in core markets.',
        metricLabel: 'Fraud blocked',
        metricValue: '1.8k',
        metricDelta: '+27% MoM',
        spotlight:
          'Bars represent fraudulent review networks removed before product launches, keeping marketplace ratings stable.',
        visualizationLabel: 'Removed fake review clusters',
        trend: [35, 42, 38, 55, 61, 68, 74, 82],
      },
    ],
  },
  fr: {
    eyebrow: 'Cockpits en direct',
    heading: 'Visualisez la vitesse de protection de votre marque',
    subheading:
      'Nos analystes alimentent des tableaux de bord vivants sur le SEO, l’intégrité des avis et les actions juridiques pour mesurer le gain composé.',
    ctaPrimary: 'Programmer une démonstration',
    ctaSecondary: 'Consulter nos études de cas',
    panels: [
      {
        id: 'sentiment',
        title: 'Radar de sentiment de marque',
        description:
          'Croise les signaux SEO, sociaux et avis afin de maintenir une visibilité positive dans chaque langue.',
        metricLabel: 'Visibilité positive',
        metricValue: '92 %',
        metricDelta: '+18 pts sur le trimestre',
        spotlight:
          'La visualisation montre la part pondérée de mentions positives vs négatives sur Google, forums et presse orchestrée par notre cellule de veille.',
        visualizationLabel: 'Courbe de perception positive',
        trend: [62, 65, 68, 72, 78, 84, 89, 92],
      },
      {
        id: 'response',
        title: 'Latence de réponse de crise',
        description:
          'Suit le temps nécessaire pour neutraliser les récits nuisibles sur chaque marché et canal.',
        metricLabel: 'Temps médian de retrait',
        metricValue: '3,2 h',
        metricDelta: '-41 % vs trimestre précédent',
        spotlight:
          'Chaque chute illustre une suppression plus rapide activée par nos cellules d’automatisation, juridiques et média.',
        visualizationLabel: 'Réduction du temps de réaction',
        trend: [48, 44, 39, 36, 32, 28, 24, 22],
      },
      {
        id: 'reviews',
        title: 'Bouclier d’avis authentiques',
        description:
          'Détecte les grappes d’avis frauduleux avant qu’elles n’érodent la conversion et la confiance des clients.',
        metricLabel: 'Fraude bloquée',
        metricValue: '1,8 k',
        metricDelta: '+27 % mois sur mois',
        spotlight:
          'Les barres représentent les réseaux d’avis frauduleux supprimés avant les lancements produits, stabilisant les notations.',
        visualizationLabel: 'Réseaux d’avis frauduleux supprimés',
        trend: [35, 42, 38, 55, 61, 68, 74, 82],
      },
    ],
  },
  es: {
    eyebrow: 'Paneles en tiempo real',
    heading: 'Visualiza la velocidad de protección de tu marca',
    subheading:
      'Nuestros analistas alimentan tableros vivos de SEO, integridad de reseñas y acciones legales para medir el crecimiento compuesto.',
    ctaPrimary: 'Agenda un tour en vivo',
    ctaSecondary: 'Revisa nuestros casos de éxito',
    panels: [
      {
        id: 'sentiment',
        title: 'Radar de sentimiento de marca',
        description:
          'Combina señales de búsqueda, sociales y reseñas para sostener visibilidad positiva en los tres idiomas.',
        metricLabel: 'Visibilidad positiva',
        metricValue: '92 %',
        metricDelta: '+18 pts trimestrales',
        spotlight:
          'La visualización destaca la cuota ponderada de menciones positivas vs negativas en Google, foros y prensa monitorizada por nuestro equipo.',
        visualizationLabel: 'Tendencia de percepción positiva',
        trend: [62, 65, 68, 72, 78, 84, 89, 92],
      },
      {
        id: 'response',
        title: 'Latencia de respuesta a crisis',
        description:
          'Controla la rapidez con la que se identifican y neutralizan narrativas dañinas en cada canal.',
        metricLabel: 'Tiempo medio de retirada',
        metricValue: '3,2 h',
        metricDelta: '-41 % vs trimestre anterior',
        spotlight:
          'Cada descenso refleja una neutralización más veloz activada por nuestros pods de automatización, legal y prensa.',
        visualizationLabel: 'Disminución del tiempo de respuesta',
        trend: [48, 44, 39, 36, 32, 28, 24, 22],
      },
      {
        id: 'reviews',
        title: 'Escudo de reseñas auténticas',
        description:
          'Detecta redes de reseñas falsas antes de que afecten la conversión y la confianza de los clientes.',
        metricLabel: 'Fraude bloqueado',
        metricValue: '1,8 k',
        metricDelta: '+27 % mes a mes',
        spotlight:
          'Las barras representan redes de reseñas fraudulentas eliminadas antes de lanzamientos, manteniendo calificaciones estables.',
        visualizationLabel: 'Redes de reseñas falsas eliminadas',
        trend: [35, 42, 38, 55, 61, 68, 74, 82],
      },
    ],
  },
}

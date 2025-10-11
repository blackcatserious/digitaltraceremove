import { type Language } from './pages'

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

export type AcademyHighlight = {
  label: string
  description: string
}

export type AcademyTestimonial = {
  quote: string
  name: string
  role: string
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
    communityHeading: string
    communitySubtitle: string
    communityHighlights: AcademyHighlight[]
    testimonialsHeading: string
    testimonials: AcademyTestimonial[]
    cta: {
      title: string
      subtitle: string
      primary: string
      secondary: string
    }
  }
> = {
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
}

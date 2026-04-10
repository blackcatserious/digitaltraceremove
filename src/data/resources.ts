import { type Language } from './pages'

export interface ResourceAsset {
  id: string
  format: string
  title: string
  summary: string
  length: string
  callout: string
}

export interface ResourceCategory {
  id: string
  eyebrow: string
  title: string
  description: string
  metricLabel: string
  metricValue: string
  metricDelta: string
  metricDescription: string
  visualLabel: string
  resources: ResourceAsset[]
}

export interface ResourceLibraryContent {
  hero: {
    eyebrow: string
    title: string
    subtitle: string
    ctaPrimary: string
    ctaSecondary: string
    ctaSecondaryHref: string
    metrics: { value: string; label: string; annotation: string }[]
    visualCaption: string
  }
  highlight: {
    eyebrow: string
    heading: string
    description: string
    stats: { value: string; caption: string }[]
  }
  categories: ResourceCategory[]
  workflow: {
    title: string
    description: string
    steps: { title: string; detail: string }[]
  }
  assetCta: string
  testimonialsHeading: string
  testimonials: { quote: string; attribution: string; role: string }[]
  cta: {
    title: string
    subtitle: string
    primary: string
    secondary: string
  }
  faqHeading: string
  faq: { question: string; answer: string }[]
}

export const resourceLibraryCopy: Record<Language, ResourceLibraryContent> = {
  en: {
    hero: {
      eyebrow: 'Resource library',
      title: 'Operational intelligence to defend and accelerate your brand',
      subtitle:
        'Deep-dives, templates, and motion-rich dashboards tailored for marketing, communications, and trust leaders operating across English, French, and Spanish markets.',
      ctaPrimary: 'Plan a resource tour',
      ctaSecondary: 'See latest case study',
      ctaSecondaryHref: '/case-studies',
      metrics: [
        {
          value: '47',
          label: 'Brand playbooks',
          annotation: 'Updated quarterly with new suppression and amplification rituals.',
        },
        {
          value: '18',
          label: 'Motion dashboards',
          annotation: 'Interactive visualisations covering search, sentiment, and reviews.',
        },
        {
          value: '72 hrs',
          label: 'Launch time',
          annotation: 'Average time to activate a tailored protection sprint after onboarding.',
        },
      ],
      visualCaption: 'Each asset is paired with a growth spark visual so teams grasp momentum instantly.',
    },
    highlight: {
      eyebrow: 'What you can access today',
      heading: 'Select the streams that match your mission',
      description:
        'Select a stream to download battle-tested systems, view live dashboards, and equip your leaders with multilingual response kits.',
      stats: [
        { value: '+312%', caption: 'Increase in branded search clarity after suppression sprints.' },
        { value: '9.4/10', caption: 'Stakeholder confidence score reported after sharing escalation kits.' },
        { value: '3 regions', caption: 'North America, EU, and LATAM-localised templates ready to deploy.' },
      ],
    },
    assetCta: 'Request access',
    testimonialsHeading: 'Leaders rely on the Traceremove library',
    categories: [
      {
        id: 'playbooks',
        eyebrow: 'Playbook vault',
        title: 'Campaign frameworks that neutralise threats and grow pipeline',
        description:
          'We help manage and resolve online data exposure',
        metricLabel: 'Average adoption speed',
        metricValue: '2.4 weeks',
        metricDelta: '+38% faster',
        metricDescription: 'Compared to in-house teams building sequences from scratch.',
        visualLabel: 'Playbook momentum',
        resources: [
          {
            id: 'command-center',
            format: 'Playbook · PDF',
            title: 'Always-on command center for modern SEO defence',
            summary:
              'Stand up a multilingual task force with escalation matrices, SERP heatmaps, and executive briefings ready to ship in under 24 hours.',
            length: '42 pages',
            callout: 'Includes airtable schema & automation recipes.',
          },
          {
            id: 'review-recovery',
            format: 'Playbook · Notion',
            title: 'Authentic review recovery & investigation workflows',
            summary:
              'Blend trust & safety signals, platform contacts, and CRM enrichment to identify fake reviewers, restore ratings, and close the loop with customers.',
            length: '6 modules',
            callout: 'Comes with ready-to-send escalation scripts.',
          },
          {
            id: 'executive-shield',
            format: 'Playbook · Slides',
            title: 'Executive shield storytelling kit',
            summary:
              'Narrative system connecting executive media, social proof, and analyst relations to counter coordinated misinformation campaigns.',
            length: '28 slides',
            callout: 'Features bilingual press outreach templates.',
          },
        ],
      },
      {
        id: 'labs',
        eyebrow: 'Insight labs',
        title: 'Animated dashboards and diagnostics for brand guardians',
        description:
          'Live Looker Studio and BigQuery dashboards that show how SEO, paid, social, and review ecosystems react once your brand protection programme is activated.',
        metricLabel: 'Signal clarity index',
        metricValue: '94/100',
        metricDelta: '+11 pts',
        metricDescription: 'Jump recorded after clients deploy our monitoring stack for 30 days.',
        visualLabel: 'Dashboard uplift',
        resources: [
          {
            id: 'serp-animator',
            format: 'Dashboard · Looker Studio',
            title: 'SERP animator with suppression velocity tracker',
            summary:
              'Visualises brand keywords, entity cards, and review snippets with animated overlays that highlight risk and progress by market.',
            length: 'Live data',
            callout: 'Includes territory filters for EN · FR · ES.',
          },
          {
            id: 'sentiment-sonar',
            format: 'Dashboard · BigQuery + Sheets',
            title: 'Sentiment sonar for dark social monitoring',
            summary:
              'Maps share of voice, virality bursts, and infiltration attempts across Reddit, Discord, Telegram, and niche communities.',
            length: 'Live data',
            callout: 'Exports CSV snapshots for legal teams.',
          },
          {
            id: 'board-brief',
            format: 'Report · PDF',
            title: 'We help manage and resolve online data exposure',
            summary:
              'Executive-grade packet combining metrics, storyline, and next-quarter focus so leadership teams see impact at a glance.',
            length: '18 pages',
            callout: 'Delivered with motion highlights for presentations.',
          },
        ],
      },
      {
        id: 'enablement',
        eyebrow: 'Enablement studio',
        title: 'Workshops, clinics, and office hours for your operators',
        description:
          'Interactive sessions that coach marketing, success, and security squads on how to apply every playbook with confidence while coordinating regionally.',
        metricLabel: 'Confidence uplift',
        metricValue: '+41%',
        metricDelta: 'Post-session average',
        metricDescription: 'Measured via anonymous feedback collected 48 hours after each clinic.',
        visualLabel: 'Team readiness',
        resources: [
          {
            id: 'sprint-kickoff',
            format: 'Workshop · 90 minutes',
            title: 'Brand protection sprint kickoff',
            summary:
              'Aligns marketing, CX, and legal stakeholders on threat taxonomy, sprint cadence, and KPI targets using collaborative motion canvases.',
            length: 'Live session',
            callout: 'Includes Miro workspace & facilitator guide.',
          },
          {
            id: 'review-clinic',
            format: 'Clinic · 60 minutes',
            title: 'Fake review remediation clinic',
            summary:
              'Coaches frontline teams on pattern detection, evidence collection, and outreach copywriting with multilingual examples.',
            length: 'Live session',
            callout: 'Bundles dispute tracker & outreach macros.',
          },
          {
            id: 'domain-fortress',
            format: 'Office hours · 45 minutes',
            title: 'Domain & website hardening office hours',
            summary:
              'Hands-on walkthrough to implement registrar locks, DMARC enforcement, and uptime monitoring with escalation playbooks.',
            length: 'Live session',
            callout: 'Comes with checklist & alert workflows.',
          },
        ],
      },
    ],
    workflow: {
      title: 'How we keep every asset fresh',
      description:
        'Our research pod, strategists, and designers operate on a continuous discovery loop. Every release is validated with active clients before entering the library.',
      steps: [
        {
          title: 'Field listening',
          detail: 'Monitor client war rooms, analyst chatter, and crisis incidents to prioritise the next assets.',
        },
        {
          title: 'Prototype & motion design',
          detail: 'Co-create visuals, scripts, and dashboards with our motion studio for maximum clarity.',
        },
        {
          title: 'Pilot & iterate',
          detail: 'Activate inside two anchor accounts, collect uplift metrics, and refine localisation.',
        },
        {
          title: 'Rollout & enable',
          detail: 'Publish to the library with walkthrough videos, facilitation guides, and support office hours.',
        },
      ],
    },
    testimonials: [
      {
        quote:
          '“The Traceremove resource stack let us neutralise a coordinated fake review attack in 48 hours while briefing our board with confidence.”',
        attribution: 'Sonia Patel',
        role: 'Chief Communications Officer, fintech scaleup',
      },
      {
        quote:
          '“Their animated dashboards visualise risk for our executives instantly. We now start each leadership meeting with the brand protection ticker.”',
        attribution: 'Marc Dubois',
        role: 'Global Marketing VP, hospitality group',
      },
    ],
    faqHeading: 'Questions teams ask us',
    cta: {
      title: 'Ready for guided access?',
      subtitle:
        'Book a walkthrough with TraceRemove Advisor and the strategist squad to align on the assets that match your next quarter objectives.',
      primary: 'Book a walkthrough',
      secondary: 'Download overview pack',
    },
    faq: [
      {
        question: 'How often are resources refreshed?',
        answer:
          'Playbooks are versioned every quarter, dashboards update in real time, and workshops are re-recorded whenever platform policies change.',
      },
      {
        question: 'Can we request bespoke assets?',
        answer:
          'Yes. Every client receives a backlog intake where we scope localisation, compliance needs, and delivery formats before activating a custom sprint.',
      },
      {
        question: 'Do you support our internal enablement team?',
        answer:
          'We partner with internal enablement leads to adapt facilitation guides, automate distribution, and co-host rollouts across your regions.',
      },
    ],
  },
  fr: {
    hero: {
      eyebrow: 'Bibliothèque de ressources',
      title: 'Intelligence opérationnelle pour protéger et accélérer votre marque',
      subtitle:
        'Analyses, modèles et tableaux de bord animés conçus pour les directions marketing, communication et confiance actives en français, anglais et espagnol.',
      ctaPrimary: 'Planifier une visite guidée',
      ctaSecondary: 'Voir le dernier cas client',
      ctaSecondaryHref: '/fr/case-studies',
      metrics: [
        {
          value: '47',
          label: 'Playbooks marque',
          annotation: 'Mise à jour chaque trimestre avec de nouveaux rituels de suppression et d’amplification.',
        },
        {
          value: '18',
          label: 'Tableaux animés',
          annotation: 'Visualisations interactives couvrant search, sentiment et avis clients.',
        },
        {
          value: '72 h',
          label: 'Temps de lancement',
          annotation: 'Délai moyen pour activer un sprint de protection dédié après onboarding.',
        },
      ],
      visualCaption: 'Chaque ressource intègre un visuel growth spark pour matérialiser immédiatement le momentum.',
    },
    highlight: {
      eyebrow: 'Ce que vous débloquez dès maintenant',
      heading: 'Choisissez les parcours adaptés à vos priorités',
      description:
        'Choisissez un parcours pour télécharger des systèmes éprouvés, consulter des tableaux en direct et équiper vos leaders avec des kits de réponse multilingues.',
      stats: [
        { value: '+312 %', caption: 'Hausse de clarté sur les recherches marque après un sprint de suppression.' },
        { value: '9,4/10', caption: 'Score de confiance des parties prenantes après diffusion des kits d’escalade.' },
        { value: '3 régions', caption: 'Modèles localisés Amériques, Europe et LATAM prêts à activer.' },
      ],
    },
    assetCta: 'Demander un accès',
    testimonialsHeading: 'Les dirigeants qui s’appuient sur la bibliothèque',
    categories: [
      {
        id: 'playbooks',
        eyebrow: 'Coffre à playbooks',
        title: 'Cadres de campagne pour neutraliser les menaces et générer du pipeline',
        description:
          'Séquences clé en main couvrant réponse de crise SEO, suppression d’avis frauduleux, réputation dirigeant et activation partenaires. Chaque playbook inclut éléments de langage, plan de mesure et prompts d’automatisation.',
        metricLabel: 'Vitesse d’adoption moyenne',
        metricValue: '2,4 semaines',
        metricDelta: '+38 % plus rapide',
        metricDescription: 'Comparé aux équipes internes qui construisent les séquences en autonomie.',
        visualLabel: 'Momentum playbook',
        resources: [
          {
            id: 'command-center',
            format: 'Playbook · PDF',
            title: 'Command center SEO défensif',
            summary:
              'Mettez sur pied une task force multilingue avec matrices d’escalade, heatmaps SERP et notes exécutives prêtes en moins de 24 heures.',
            length: '42 pages',
            callout: 'Inclut schéma Airtable et recettes d’automatisation.',
          },
          {
            id: 'review-recovery',
            format: 'Playbook · Notion',
            title: 'Workflow de récupération d’avis authentiques',
            summary:
              'Combine signaux trust & safety, contacts plateformes et enrichissement CRM pour identifier les faux avis, restaurer les notes et rassurer vos clients.',
            length: '6 modules',
            callout: 'Livré avec scripts d’escalade bilingues.',
          },
          {
            id: 'executive-shield',
            format: 'Playbook · Slides',
            title: 'Kit de protection exécutive',
            summary:
              'Système narratif reliant médias, preuves sociales et analystes afin de contrer les campagnes de désinformation coordonnées.',
            length: '28 slides',
            callout: 'Comprend modèles de presse bilingues.',
          },
        ],
      },
      {
        id: 'labs',
        eyebrow: 'Laboratoires insight',
        title: 'Tableaux et diagnostics animés pour vos gardiens de marque',
        description:
          'Dashboards Looker Studio et BigQuery qui montrent la réaction des écosystèmes SEO, paid, social et avis quand votre programme de protection se déclenche.',
        metricLabel: 'Indice de clarté des signaux',
        metricValue: '94/100',
        metricDelta: '+11 pts',
        metricDescription: 'Progression enregistrée après 30 jours avec notre stack de monitoring.',
        visualLabel: 'Uplift dashboard',
        resources: [
          {
            id: 'serp-animator',
            format: 'Dashboard · Looker Studio',
            title: 'Animateur SERP & suivi de suppression',
            summary:
              'Visualise mots-clés marque, cartes entités et extraits d’avis avec overlays animés qui indiquent risques et progrès par marché.',
            length: 'Données live',
            callout: 'Filtres territoires EN · FR · ES inclus.',
          },
          {
            id: 'sentiment-sonar',
            format: 'Dashboard · BigQuery + Sheets',
            title: 'Sonar de sentiment pour dark social',
            summary:
              'Cartographie part de voix, pics de viralité et tentatives dinfiltration sur Reddit, Discord, Telegram et communautés niches.',
            length: 'Données live',
            callout: 'Exports CSV pour équipes juridiques.',
          },
          {
            id: 'board-brief',
            format: 'Rapport · PDF',
            title: 'Briefing réputation trimestriel pour le board',
            summary:
              'Dossier exécutif combinant métriques, storyline et priorités trimestrielles pour une lecture instantanée par la direction.',
            length: '18 pages',
            callout: 'Livré avec animations pour vos présentations.',
          },
        ],
      },
      {
        id: 'enablement',
        eyebrow: 'Studio enablement',
        title: 'Ateliers, cliniques et office hours pour vos équipes',
        description:
          'Sessions interactives qui coachent marketing, success et sécurité pour appliquer chaque playbook avec assurance et coordination régionale.',
        metricLabel: 'Gain de confiance',
        metricValue: '+41 %',
        metricDelta: 'Moyenne post-session',
        metricDescription: 'Mesuré via feedback anonyme 48 h après chaque clinique.',
        visualLabel: 'Préparation des équipes',
        resources: [
          {
            id: 'sprint-kickoff',
            format: 'Atelier · 90 minutes',
            title: 'Kickoff sprint protection de marque',
            summary:
              'Aligne marketing, CX et juridique sur taxonomie des menaces, cadence de sprint et KPIs avec canvases animés collaboratifs.',
            length: 'Session live',
            callout: 'Inclut workspace Miro & guide facilitateur.',
          },
          {
            id: 'review-clinic',
            format: 'Clinique · 60 minutes',
            title: 'Clinique suppression avis frauduleux',
            summary:
              'Forme vos équipes terrain à la détection de motifs, collecte de preuves et rédaction doutreach multilingue.',
            length: 'Session live',
            callout: 'Fournit tracker de litiges & macros.',
          },
          {
            id: 'domain-fortress',
            format: 'Office hours · 45 minutes',
            title: 'Office hours durcissement domaines & site',
            summary:
              'Accompagnement pour mettre en place verrous registrars, DMARC et monitoring disponibilité avec playbooks descalade.',
            length: 'Session live',
            callout: 'Livré avec checklist & workflows dalerte.',
          },
        ],
      },
    ],
    workflow: {
      title: 'Notre méthode de mise à jour continue',
      description:
        'Équipe recherche, stratèges et designers fonctionnent en boucle de discovery permanente. Chaque ressource est validée chez des clients actifs avant publication.',
      steps: [
        {
          title: 'Écoute terrain',
          detail: 'Veille des war rooms clients, analystes et incidents de crise pour prioriser les futurs assets.',
        },
        {
          title: 'Prototype & motion design',
          detail: 'Co-conception de visuels, scripts et dashboards avec notre studio motion pour une clarté maximale.',
        },
        {
          title: 'Pilotage & itérations',
          detail: 'Activation chez deux comptes phares, mesure des uplifts et ajustement des localisations.',
        },
        {
          title: 'Déploiement & enablement',
          detail: 'Publication dans la bibliothèque avec vidéos de walkthrough, guides de facilitation et office hours.',
        },
      ],
    },
    testimonials: [
      {
        quote:
          '« Les ressources Traceremove nous ont permis de neutraliser une attaque coordonnée d’avis frauduleux en 48 h tout en rassurant notre board. »',
        attribution: 'Sonia Patel',
        role: 'Directrice Communication, fintech scale-up',
      },
      {
        quote:
          '« Leurs dashboards animés visualisent instantanément le risque pour nos dirigeants. Chaque comité démarre désormais avec le ticker de protection. »',
        attribution: 'Marc Dubois',
        role: 'VP Marketing global, groupe hôtellerie',
      },
    ],
    faqHeading: 'Questions que nous recevons',
    cta: {
      title: 'Prêt pour un accès guidé ?',
      subtitle:
        'Réservez une walkthrough avec TraceRemove Advisor et les stratèges pour aligner les assets sur vos objectifs du prochain trimestre.',
      primary: 'Réserver une walkthrough',
      secondary: 'Télécharger la synthèse',
    },
    faq: [
      {
        question: 'À quelle fréquence les ressources sont-elles mises à jour ?',
        answer:
          'Playbooks versionnés chaque trimestre, dashboards en temps réel, ateliers re-enregistrés dès que les politiques plateformes évoluent.',
      },
      {
        question: 'Pouvons-nous demander des assets sur mesure ?',
        answer:
          'Oui. Chaque client dispose d’un backlog intake où nous cadrons localisation, conformité et formats avant de lancer un sprint dédié.',
      },
      {
        question: 'Accompagnez-vous nos équipes enablement ?',
        answer:
          'Nous co-construisons guides de facilitation, automatisons la diffusion et co-animons les déploiements multi-régions.',
      },
    ],
  },
  es: {
    hero: {
      eyebrow: 'Biblioteca de recursos',
      title: 'Inteligencia operativa para proteger y acelerar tu marca',
      subtitle:
        'Análisis profundos, plantillas y dashboards con motion design pensados para marketing, comunicación y líderes de confianza en inglés, francés y español.',
      ctaPrimary: 'Agendar recorrido guiado',
      ctaSecondary: 'Ver caso más reciente',
      ctaSecondaryHref: '/es/case-studies',
      metrics: [
        {
          value: '47',
          label: 'Playbooks de marca',
          annotation: 'Actualizados cada trimestre con nuevos rituales de supresión y amplificación.',
        },
        {
          value: '18',
          label: 'Dashboards animados',
          annotation: 'Visualizaciones interactivas que cubren búsqueda, sentimiento y reseñas.',
        },
        {
          value: '72 h',
          label: 'Tiempo de activación',
          annotation: 'Promedio para activar un sprint de protección a medida después del onboarding.',
        },
      ],
      visualCaption: 'Cada activo se acompaña de un visual growth spark para transmitir momentum al instante.',
    },
    highlight: {
      eyebrow: 'Qué puedes explorar hoy',
      heading: 'Elige los flujos que impulsan tu misión',
      description:
        'Elige un flujo para descargar sistemas comprobados, consultar dashboards en vivo y equipar a tus líderes con kits de respuesta multilingües.',
      stats: [
        { value: '+312 %', caption: 'Mayor claridad de búsqueda de marca tras los sprints de supresión.' },
        { value: '9,4/10', caption: 'Confianza de stakeholders después de compartir los kits de escalación.' },
        { value: '3 regiones', caption: 'Plantillas localizadas para Norteamérica, UE y LATAM listas para usar.' },
      ],
    },
    assetCta: 'Solicitar acceso',
    testimonialsHeading: 'Referencias que confían en la biblioteca',
    categories: [
      {
        id: 'playbooks',
        eyebrow: 'Vault de playbooks',
        title: 'Frameworks de campaña que neutralizan amenazas y hacen crecer el pipeline',
        description:
          'Secuencias listas para usar que cubren respuesta SEO en crisis, retirada de reseñas falsas, reputación ejecutiva y activación de partners. Cada playbook incluye mensajes clave, plan de medición y prompts de automatización.',
        metricLabel: 'Velocidad media de adopción',
        metricValue: '2,4 semanas',
        metricDelta: '+38 % más rápido',
        metricDescription: 'Comparado con equipos internos creando secuencias desde cero.',
        visualLabel: 'Momentum playbook',
        resources: [
          {
            id: 'command-center',
            format: 'Playbook · PDF',
            title: 'Command center SEO defensivo',
            summary:
              'Activa un task force multilingüe con matrices de escalación, heatmaps SERP y briefings ejecutivos listos en menos de 24 horas.',
            length: '42 páginas',
            callout: 'Incluye esquema Airtable y recetas de automatización.',
          },
          {
            id: 'review-recovery',
            format: 'Playbook · Notion',
            title: 'Workflows para recuperar reseñas auténticas',
            summary:
              'Combina señales de trust & safety, contactos de plataformas y enriquecimiento CRM para detectar reseñas falsas, restaurar ratings y cerrar el loop con clientes.',
            length: '6 módulos',
            callout: 'Incluye guiones de escalación bilingües.',
          },
          {
            id: 'executive-shield',
            format: 'Playbook · Slides',
            title: 'Kit de protección ejecutiva',
            summary:
              'Sistema narrativo que conecta prensa, prueba social y analistas para contrarrestar campañas de desinformación coordinadas.',
            length: '28 slides',
            callout: 'Incluye plantillas de outreach bilingües.',
          },
        ],
      },
      {
        id: 'labs',
        eyebrow: 'Laboratorios insight',
        title: 'Dashboards y diagnósticos animados para guardianes de marca',
        description:
          'Dashboards Looker Studio y BigQuery que muestran cómo reaccionan SEO, paid, social y reseñas cuando se activa tu programa de protección de marca.',
        metricLabel: 'Índice de claridad de señal',
        metricValue: '94/100',
        metricDelta: '+11 pts',
        metricDescription: 'Incremento tras 30 días con nuestra infraestructura de monitoreo.',
        visualLabel: 'Impulso del dashboard',
        resources: [
          {
            id: 'serp-animator',
            format: 'Dashboard · Looker Studio',
            title: 'Animador SERP con tracker de supresión',
            summary:
              'Visualiza keywords de marca, tarjetas de entidades y snippets de reseñas con capas animadas que destacan riesgo y progreso por mercado.',
            length: 'Datos en vivo',
            callout: 'Incluye filtros EN · FR · ES.',
          },
          {
            id: 'sentiment-sonar',
            format: 'Dashboard · BigQuery + Sheets',
            title: 'Sonar de sentimiento para dark social',
            summary:
              'Mapea share of voice, picos de viralidad e intentos de infiltración en Reddit, Discord, Telegram y comunidades nicho.',
            length: 'Datos en vivo',
            callout: 'Exporta CSV para equipos legales.',
          },
          {
            id: 'board-brief',
            format: 'Reporte · PDF',
            title: 'Brief reputacional trimestral para el board',
            summary:
              'Paquete ejecutivo que combina métricas, narrativa y focos del próximo trimestre para que la dirección vea el impacto al instante.',
            length: '18 páginas',
            callout: 'Se entrega con highlights animados para presentaciones.',
          },
        ],
      },
      {
        id: 'enablement',
        eyebrow: 'Estudio de enablement',
        title: 'Talleres, clínicas y office hours para tus equipos',
        description:
          'Sesiones interactivas que entrenan a marketing, éxito y seguridad para aplicar cada playbook con confianza mientras coordinan regiones.',
        metricLabel: 'Incremento de confianza',
        metricValue: '+41 %',
        metricDelta: 'Promedio post-sesión',
        metricDescription: 'Medido con feedback anónimo 48 horas después de cada clínica.',
        visualLabel: 'Preparación del equipo',
        resources: [
          {
            id: 'sprint-kickoff',
            format: 'Taller · 90 minutos',
            title: 'Kickoff de sprint de protección de marca',
            summary:
              'Alinea a marketing, CX y legal en taxonomía de amenazas, cadencia de sprint y KPIs usando canvases colaborativos animados.',
            length: 'Sesión en vivo',
            callout: 'Incluye workspace de Miro y guía de facilitación.',
          },
          {
            id: 'review-clinic',
            format: 'Clínica · 60 minutos',
            title: 'Clínica para reseñas falsas',
            summary:
              'Capacita a los equipos de primera línea en detección de patrones, recopilación de evidencia y redacción de outreach multilingüe.',
            length: 'Sesión en vivo',
            callout: 'Incluye tracker de disputas y macros.',
          },
          {
            id: 'domain-fortress',
            format: 'Office hours · 45 minutos',
            title: 'Office hours de protección web y dominios',
            summary:
              'Implementa bloqueos de registrador, cumplimiento DMARC y monitoreo de uptime con playbooks de escalación.',
            length: 'Sesión en vivo',
            callout: 'Incluye checklist y flujos de alerta.',
          },
        ],
      },
    ],
    workflow: {
      title: 'Cómo mantenemos cada activo actualizado',
      description:
        'Nuestro equipo de investigación, estrategas y diseñadores trabaja en un ciclo continuo de discovery. Probamos cada lanzamiento con clientes activos antes de sumarlo a la biblioteca.',
      steps: [
        {
          title: 'Escucha en campo',
          detail: 'Monitorizamos war rooms, analistas y incidentes de crisis para priorizar los próximos assets.',
        },
        {
          title: 'Prototipo & motion',
          detail: 'Co-creamos visuales, guiones y dashboards con nuestro estudio de motion para máxima claridad.',
        },
        {
          title: 'Piloto & iteraciones',
          detail: 'Activamos en dos cuentas ancla, medimos el uplift y afinamos la localización.',
        },
        {
          title: 'Despliegue & enablement',
          detail: 'Publicamos en la biblioteca con videos walkthrough, guías de facilitación y office hours de soporte.',
        },
      ],
    },
    testimonials: [
      {
        quote:
          '“La suite de recursos de Traceremove nos permitió neutralizar una ola de reseñas falsas en 48 horas mientras informábamos al board con tranquilidad.”',
        attribution: 'Sonia Patel',
        role: 'Chief Communications Officer, fintech scaleup',
      },
      {
        quote:
          '“Sus dashboards animados muestran el riesgo a nuestros ejecutivos al instante. Ahora abrimos cada comité de dirección con el ticker de protección.”',
        attribution: 'Marc Dubois',
        role: 'VP Global de Marketing, grupo hotelero',
      },
    ],
    faqHeading: 'Preguntas frecuentes',
    cta: {
      title: '¿Listo para un acceso guiado?',
      subtitle:
        'Agenda una sesión con TraceRemove Advisor y el equipo de estrategas para alinear los assets con tus objetivos del próximo trimestre.',
      primary: 'Agendar walkthrough',
      secondary: 'Descargar dossier',
    },
    faq: [
      {
        question: '¿Con qué frecuencia se actualizan las piezas?',
        answer:
          'Los playbooks se versionan cada trimestre, los dashboards son en tiempo real y los talleres se regraban cuando cambian las políticas de plataforma.',
      },
      {
        question: '¿Podemos solicitar assets a medida?',
        answer:
          'Sí. Cada cliente cuenta con un intake donde definimos localización, requisitos legales y formatos antes de activar un sprint personalizado.',
      },
      {
        question: '¿Apoyan a nuestro equipo interno de enablement?',
        answer:
          'Colaboramos con enablement interno para adaptar guías, automatizar la distribución y co-facilitar lanzamientos regionales.',
      },
    ],
  },
}

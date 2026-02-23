import { type Language, withRussianFallback } from './pages'

export interface TrustSignal {
  label: string
  value: string
  description: string
}

export interface TrustPillar {
  id: string
  eyebrow: string
  title: string
  description: string
  bullets: string[]
}

export interface TrustFramework {
  id: string
  title: string
  summary: string
  certification: string
  renewal: string
}

export interface TrustStream {
  id: string
  title: string
  description: string
  bullets: string[]
}

export interface TrustContactAction {
  label: string
  href: string
}

export interface TrustCenterContent {
  hero: {
    kicker: string
    title: string
    subtitle: string
    body: string
    primaryCta: string
    secondaryCta: string
  }
  highlights: string[]
  signalsTitle: string
  signals: TrustSignal[]
  pillarsTitle: string
  pillarsSubtitle: string
  pillars: TrustPillar[]
  frameworksTitle: string
  frameworksSubtitle: string
  frameworks: TrustFramework[]
  streamsTitle: string
  streamsSubtitle: string
  streams: TrustStream[]
  contact: {
    title: string
    subtitle: string
    actions: TrustContactAction[]
    phone: string
    hours: string
  }
}

export const trustCenterCopy: Record<Language, TrustCenterContent> = withRussianFallback({
  en: {
    hero: {
      kicker: 'Trust center',
      title: 'Security, privacy, and resilience you can rely on',
      subtitle:
        'We protect high-velocity brands against manipulation, outages, and data exposure while keeping every market compliant.',
      body:
        'Artur Ziganshin and our senior trust core lead every engagement. We blend security engineering, legal counsel, and customer operations so brand protection becomes a reflex for your teams.',
      primaryCta: 'Book a security workshop',
      secondaryCta: 'Download control checklist',
    },
    highlights: [
      'ISO 27001-aligned controls with quarterly penetration testing across cloud, web, and data stacks.',
      'Realtime takedown desk spanning search, marketplaces, app stores, and social commerce.',
      'Dedicated incident response pods in English, French, and Spanish with 24/7 executive status updates.',
    ],
    signalsTitle: 'Resilience signals we publish',
    signals: [
      {
        label: 'Mean response time',
        value: '14 min',
        description: 'Average time to first human response on verified brand threats over the last 90 days.',
      },
      {
        label: 'Platform takedown rate',
        value: '97.6%',
        description: 'Success rate securing removal of fake assets across Google, Meta, Apple, and marketplace ecosystems.',
      },
      {
        label: 'Continuity uptime',
        value: '99.98%',
        description: 'Availability maintained across managed domains, landing pages, and monitoring infrastructure.',
      },
    ],
    pillarsTitle: 'How we keep trust operational',
    pillarsSubtitle: 'Three pillars coordinate people, platforms, and process so brand safety is always-on.',
    pillars: [
      {
        id: 'governance',
        eyebrow: 'Governance & privacy',
        title: 'Policy orchestration across every locale',
        description:
          'Centralized governance ensures data minimization, clear retention windows, and consent tracking across your funnels.',
        bullets: [
          'Data inventory and DPIA refreshes every 90 days.',
          'Regional privacy counsel covering GDPR, LGPD, and CPRA.',
          'Automated vendor risk scoring with remedial workflows.',
        ],
      },
      {
        id: 'defense',
        eyebrow: 'Detection & defense',
        title: 'Realtime monitoring with automated takedowns',
        description:
          'Sensor grids sweep SERPs, social, and marketplaces to intercept spoofed listings, fake reviews, and phishing infrastructure.',
        bullets: [
          'Signal fusion from search, marketplaces, and DMARC.',
          'Machine learning to flag sentiment anomalies and fake review clusters.',
          'Escalation ladders that mobilize our legal and registrar partners.',
        ],
      },
      {
        id: 'enablement',
        eyebrow: 'Enablement',
        title: 'Playbooks that empower your teams',
        description:
          'We equip marketing, product, and support leaders with motion-designed runbooks so incident response becomes muscle memory.',
        bullets: [
          'Localized tabletop exercises with executive reporting.',
          'Scenario templates covering misinformation, outages, and impersonation.',
          'Always-on enablement hub with fresh guidance and recordings.',
        ],
      },
    ],
    frameworksTitle: 'Certifications and assurance',
    frameworksSubtitle:
      'We align to global frameworks and maintain third-party validation so you can show stakeholders a verified control posture.',
    frameworks: [
      {
        id: 'iso',
        title: 'ISO 27001 alignment',
        summary: 'Control catalog mapped to Annex A with quarterly internal audits and executive scorecards.',
        certification: 'External surveillance audit: passed (Q2 2024).',
        renewal: 'Next recertification cycle: March 2025.',
      },
      {
        id: 'soc',
        title: 'SOC 2 Type II readiness',
        summary: 'Security, availability, and confidentiality controls monitored with continuous evidence collection.',
        certification: 'Independent readiness assessment completed with zero material gaps.',
        renewal: 'Formal attestation window underway for Q4 2024.',
      },
      {
        id: 'privacy',
        title: 'GDPR & global privacy',
        summary: 'Data protection impact assessments and ROPA maintained for EU, LATAM, and North American funnels.',
        certification: 'Appointed EU & UK representatives with annual review cadence.',
        renewal: 'Next regulatory briefing scheduled for September 2024.',
      },
    ],
    streamsTitle: 'Operational safeguards',
    streamsSubtitle: 'Dedicated pods handle monitoring, response, and communication around the clock.',
    streams: [
      {
        id: 'monitoring',
        title: 'Monitoring stream',
        description: 'Hybrid analysts and ML models sweep for anomalies every seven minutes.',
        bullets: [
          'Cross-channel watchlists for domains, apps, influencers, and affiliates.',
          'Dark web intelligence with credential stuffing alerts.',
          'Signal amplification into Slack, Teams, and PagerDuty.',
        ],
      },
      {
        id: 'response',
        title: 'Response stream',
        description: 'Incident commanders coordinate legal, registrar, and platform takedowns 24/7.',
        bullets: [
          'Bilingual response pods across Montreal, Paris, and Madrid.',
          'Documented playbooks for phishing, brandjacking, and outages.',
          'Executive dashboards updated every 30 minutes until resolution.',
        ],
      },
      {
        id: 'communications',
        title: 'Communications stream',
        description: 'Storytellers craft stakeholder messaging that protects reputation and trust.',
        bullets: [
          'Customer and partner notification frameworks with localization.',
          'Press and social escalation templates with spokesperson pairing.',
          'Scenario-based sentiment tracking with follow-up surveys.',
        ],
      },
    ],
    contact: {
      title: 'Need immediate support?',
      subtitle:
        'Escalate to our incident desk for verified takedowns or book a proactive audit to stress test your defenses.',
      actions: [
        { label: 'Chat with an incident lead', href: 'mailto:contact@traceremove.com' },
        { label: 'Call the trust hotline', href: 'tel:+16063022958' },
      ],
      phone: '+1 606 302 2958',
      hours: '24/7 coverage across North America, Europe, and LATAM.',
    },
  },
  fr: {
    hero: {
      kicker: 'Centre de confiance',
      title: 'Sécurité, confidentialité et résilience garanties',
      subtitle:
        'Nous protégeons les marques à forte croissance contre la manipulation, les interruptions et les fuites de données tout en restant conformes dans chaque marché.',
      body:
        'Artur Ziganshin et notre cellule trust senior pilotent chaque mission. Ingénierie sécurité, juridique et opérations clients travaillent ensemble pour faire de la protection de marque un réflexe.',
      primaryCta: 'Planifier un atelier sécurité',
      secondaryCta: 'Télécharger la checklist de contrôle',
    },
    highlights: [
      'Contrôles alignés ISO 27001 avec pentests trimestriels sur le cloud, le web et la donnée.',
      'Cellule de retrait en temps réel couvrant recherche, marketplaces, stores et social commerce.',
      'Pods d’incident bilingues 24/7 avec reporting exécutif continu.',
    ],
    signalsTitle: 'Indicateurs de résilience publiés',
    signals: [
      {
        label: 'Temps moyen de réponse',
        value: '14 min',
        description: 'Temps moyen avant premier contact humain sur les menaces marque vérifiées sur 90 jours.',
      },
      {
        label: 'Taux de retrait plateformes',
        value: '97,6 %',
        description: 'Taux de réussite pour retirer les actifs frauduleux sur Google, Meta, Apple et marketplaces.',
      },
      {
        label: 'Disponibilité assurée',
        value: '99,98 %',
        description: 'Disponibilité garantie sur domaines, landing pages et infrastructure de veille gérés.',
      },
    ],
    pillarsTitle: 'Notre approche opérationnelle',
    pillarsSubtitle:
      'Trois piliers coordonnent personnes, plateformes et process pour maintenir la sécurité de marque.',
    pillars: [
      {
        id: 'governance',
        eyebrow: 'Gouvernance & privacy',
        title: 'Politiques orchestrées dans chaque pays',
        description:
          'Une gouvernance centralisée garantit minimisation des données, durées de conservation maîtrisées et suivi des consentements.',
        bullets: [
          'Inventaires de données et DPIA remis à jour tous les 90 jours.',
          'Veille juridique régionale couvrant RGPD, LGPD et CPRA.',
          'Scoring automatisé des risques fournisseurs avec plans correctifs.',
        ],
      },
      {
        id: 'defense',
        eyebrow: 'Détection & défense',
        title: 'Surveillance continue et retraits automatisés',
        description:
          'Nos capteurs analysent SERP, réseaux et marketplaces pour bloquer listings, faux avis et infrastructures de phishing.',
        bullets: [
          'Fusion de signaux provenant de la recherche, marketplaces et DMARC.',
          'Modèles ML détectant anomalies de sentiment et clusters de faux avis.',
          'Escalades coordonnées avec partenaires juridiques et registraires.',
        ],
      },
      {
        id: 'enablement',
        eyebrow: 'Enablement',
        title: 'Playbooks qui outillent vos équipes',
        description:
          'Marketing, produit et support disposent de runbooks animés pour rendre la réponse incident réflexe.',
        bullets: [
          'Exercices de crise localisés avec reporting exécutif.',
          'Templates scénarios couvrant désinformation, pannes et usurpation.',
          'Hub d’enablement en continu avec contenus et replays mis à jour.',
        ],
      },
    ],
    frameworksTitle: 'Certifications et garanties',
    frameworksSubtitle:
      'Nous nous alignons sur les principaux référentiels et faisons certifier notre posture pour rassurer vos parties prenantes.',
    frameworks: [
      {
        id: 'iso',
        title: 'Alignement ISO 27001',
        summary: 'Catalogue de contrôles mappé à l’annexe A avec audits internes trimestriels et scorecards exécutives.',
        certification: 'Audit de surveillance externe : réussi (T2 2024).',
        renewal: 'Prochain cycle de recertification : mars 2025.',
      },
      {
        id: 'soc',
        title: 'Préparation SOC 2 Type II',
        summary: 'Contrôles sécurité, disponibilité et confidentialité monitorés avec collecte d’évidence continue.',
        certification: 'Évaluation indépendante finalisée sans écart majeur.',
        renewal: 'Fenêtre d’attestation en cours pour T4 2024.',
      },
      {
        id: 'privacy',
        title: 'Confidentialité & RGPD',
        summary: 'PIA et registres ROPA tenus pour l’UE, l’Amérique latine et l’Amérique du Nord.',
        certification: 'Représentants UE & UK nommés avec revue annuelle.',
        renewal: 'Prochain briefing réglementaire prévu en septembre 2024.',
      },
    ],
    streamsTitle: 'Garanties opérationnelles',
    streamsSubtitle: 'Des équipes dédiées assurent veille, réponse et communication 24/7.',
    streams: [
      {
        id: 'monitoring',
        title: 'Stream monitoring',
        description: 'Analystes hybrides et modèles ML surveillent toutes les sept minutes.',
        bullets: [
          'Listes de veille cross-canal pour domaines, apps, influenceurs et affiliés.',
          'Veille dark web avec alertes credential stuffing.',
          'Diffusion des signaux dans Slack, Teams et PagerDuty.',
        ],
      },
      {
        id: 'response',
        title: 'Stream réponse',
        description: 'Commanders d’incident coordonnent retraits juridiques et plateformes 24/7.',
        bullets: [
          'Pods bilingues répartis entre Montréal, Paris et Madrid.',
          'Playbooks documentés pour phishing, détournement de marque et pannes.',
          'Tableaux de bord exécutifs mis à jour toutes les 30 minutes.',
        ],
      },
      {
        id: 'communications',
        title: 'Stream communication',
        description: 'Storytellers préparent messages parties prenantes pour préserver la confiance.',
        bullets: [
          'Cadres de notification clients et partenaires avec localisation.',
          'Templates presse et social avec porte-parole dédié.',
          'Suivi du sentiment post-incident avec enquêtes ciblées.',
        ],
      },
    ],
    contact: {
      title: 'Besoin d’un appui immédiat ?',
      subtitle:
        'Escaladez vers notre cellule incident pour un retrait vérifié ou réservez un audit proactif.',
      actions: [
        { label: 'Écrire à un incident lead', href: 'mailto:contact@traceremove.com' },
        { label: 'Appeler la hotline trust', href: 'tel:+16063022958' },
      ],
      phone: '+1 606 302 2958',
      hours: 'Couverture 24/7 Amériques, Europe et Amérique latine.',
    },
  },
  es: {
    hero: {
      kicker: 'Centro de confianza',
      title: 'Seguridad, privacidad y resiliencia garantizadas',
      subtitle:
        'Protegemos marcas de alto crecimiento contra manipulaciones, caídas y filtraciones de datos manteniendo la conformidad en cada mercado.',
      body:
        'Artur Ziganshin y nuestro núcleo senior de trust lideran cada proyecto. Ingeniería de seguridad, asesoría legal y operaciones de clientes trabajan juntos para que la protección de marca sea automática.',
      primaryCta: 'Agenda un workshop de seguridad',
      secondaryCta: 'Descarga la checklist de controles',
    },
    highlights: [
      'Controles alineados a ISO 27001 con pentesting trimestral en cloud, web y datos.',
      'Mesa de retirada en tiempo real para buscadores, marketplaces, stores y social commerce.',
      'Pods de incidentes multilingües 24/7 con reportes ejecutivos continuos.',
    ],
    signalsTitle: 'Indicadores de resiliencia',
    signals: [
      {
        label: 'Tiempo medio de respuesta',
        value: '14 min',
        description: 'Tiempo promedio hasta el primer contacto humano ante amenazas verificadas en los últimos 90 días.',
      },
      {
        label: 'Ratio de retirada',
        value: '97,6 %',
        description: 'Porcentaje de éxito retirando activos falsos en Google, Meta, Apple y marketplaces.',
      },
      {
        label: 'Disponibilidad asegurada',
        value: '99,98 %',
        description: 'Disponibilidad mantenida en dominios, landings y monitorización gestionada.',
      },
    ],
    pillarsTitle: 'Cómo operamos la confianza',
    pillarsSubtitle:
      'Tres pilares sincronizan personas, plataformas y procesos para una seguridad siempre activa.',
    pillars: [
      {
        id: 'governance',
        eyebrow: 'Gobernanza y privacidad',
        title: 'Políticas coordinadas en cada país',
        description:
          'Una gobernanza centralizada garantiza minimización de datos, periodos de retención claros y seguimiento del consentimiento.',
        bullets: [
          'Inventarios de datos y DPIA actualizados cada 90 días.',
          'Cobertura legal regional para GDPR, LGPD y CPRA.',
          'Puntuación automatizada de riesgo a proveedores con planes de remediación.',
        ],
      },
      {
        id: 'defense',
        eyebrow: 'Detección y defensa',
        title: 'Monitorización continua y retiradas automáticas',
        description:
          'Nuestros sensores vigilan SERP, redes y marketplaces para detener listados falsos, reseñas y phishing.',
        bullets: [
          'Fusión de señales de búsqueda, marketplaces y DMARC.',
          'Modelos ML que detectan anomalías de sentimiento y clusters de reseñas falsas.',
          'Escaladas coordinadas con aliados legales y registradores.',
        ],
      },
      {
        id: 'enablement',
        eyebrow: 'Enablement',
        title: 'Playbooks que empoderan a tus equipos',
        description:
          'Marketing, producto y soporte reciben runbooks animados para convertir la respuesta a incidentes en hábito.',
        bullets: [
          'Ejercicios de simulación localizados con reportes ejecutivos.',
          'Plantillas de escenarios para desinformación, caídas e impersonación.',
          'Hub de enablement siempre actualizado con guías y grabaciones.',
        ],
      },
    ],
    frameworksTitle: 'Certificaciones y garantías',
    frameworksSubtitle:
      'Nos alineamos con los principales marcos y mantenemos validaciones externas para demostrar tu postura de control.',
    frameworks: [
      {
        id: 'iso',
        title: 'Alineación ISO 27001',
        summary: 'Catálogo de controles mapeado a Anexo A con auditorías internas trimestrales y scorecards ejecutivas.',
        certification: 'Auditoría de vigilancia externa aprobada (T2 2024).',
        renewal: 'Próximo ciclo de recertificación: marzo 2025.',
      },
      {
        id: 'soc',
        title: 'Preparación SOC 2 Tipo II',
        summary: 'Controles de seguridad, disponibilidad y confidencialidad con evidencia continua.',
        certification: 'Evaluación independiente completada sin hallazgos materiales.',
        renewal: 'Ventana de atestación en curso para T4 2024.',
      },
      {
        id: 'privacy',
        title: 'Privacidad global',
        summary: 'PIA y registros ROPA activos para UE, LATAM y Norteamérica.',
        certification: 'Representantes UE y Reino Unido designados con revisión anual.',
        renewal: 'Próximo briefing regulatorio en septiembre 2024.',
      },
    ],
    streamsTitle: 'Salvaguardas operativas',
    streamsSubtitle: 'Pods dedicados gestionan vigilancia, respuesta y comunicación 24/7.',
    streams: [
      {
        id: 'monitoring',
        title: 'Stream de monitoreo',
        description: 'Analistas híbridos y modelos ML revisan anomalías cada siete minutos.',
        bullets: [
          'Listas de vigilancia multicanal para dominios, apps, influencers y afiliados.',
          'Inteligencia dark web con alertas de credential stuffing.',
          'Amplificación de señales hacia Slack, Teams y PagerDuty.',
        ],
      },
      {
        id: 'response',
        title: 'Stream de respuesta',
        description: 'Comandantes coordinan retiradas legales y de plataformas 24/7.',
        bullets: [
          'Pods bilingües en Montreal, París y Madrid.',
          'Playbooks documentados para phishing, robo de marca y caídas.',
          'Dashboards ejecutivos actualizados cada 30 minutos.',
        ],
      },
      {
        id: 'communications',
        title: 'Stream de comunicación',
        description: 'Storytellers diseñan mensajes para proteger la reputación.',
        bullets: [
          'Marcos de notificación a clientes y partners con localización.',
          'Plantillas de prensa y social con voceros asignados.',
          'Seguimiento de sentimiento post-incidente con encuestas.',
        ],
      },
    ],
    contact: {
      title: '¿Necesitas ayuda inmediata?',
      subtitle:
        'Escala a nuestra mesa de incidentes para retiradas verificadas o agenda una auditoría proactiva.',
      actions: [
        { label: 'Habla con un incident lead', href: 'mailto:contact@traceremove.com' },
        { label: 'Llama a la hotline trust', href: 'tel:+16063022958' },
      ],
      phone: '+1 606 302 2958',
      hours: 'Cobertura 24/7 en Norteamérica, Europa y LATAM.',
    },
  },
})

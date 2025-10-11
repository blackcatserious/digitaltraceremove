import { type Language } from './pages'

export interface CommandCenterCopy {
  hero: {
    eyebrow: string
    title: string
    subtitle: string
    description: string
    primaryCta: string
    secondaryCta: string
    secondaryHref: string
    metrics: { value: string; label: string; annotation: string }[]
    visualCaption: string
  }
  monitoring: {
    title: string
    description: string
    signals: { id: string; label: string; detail: string; metric: string }[]
  }
  workflows: {
    title: string
    description: string
    steps: { id: string; title: string; description: string; duration: string }[]
  }
  intelligence: {
    title: string
    description: string
    feeds: {
      id: string
      title: string
      description: string
      cadence: string
      coverage: string
    }[]
  }
  fusion: {
    title: string
    description: string
    rooms: { id: string; title: string; goal: string; cadence: string }[]
  }
  playbooks: {
    title: string
    description: string
    items: { id: string; title: string; description: string; outcomes: string[] }[]
  }
  technology: {
    title: string
    description: string
    modules: { id: string; name: string; description: string; automation: string }[]
  }
  readiness: {
    title: string
    description: string
    columns: { title: string; bullets: string[] }[]
  }
  escalation: {
    title: string
    description: string
    tiers: {
      id: string
      level: string
      response: string
      channels: string[]
    }[]
    hotlineLabel: string
    hotlineValue: string
  }
  contact: {
    title: string
    subtitle: string
    primary: string
    secondary: string
    secondaryHref: string
  }
}

export const commandCenterCopy: Record<Language, CommandCenterCopy> = {
  en: {
    hero: {
      eyebrow: 'Command center',
      title: 'Digital risk command center operating in three languages',
      subtitle:
        'Senior analysts orchestrate suppression, review defence, and domain recovery across English, French, and Spanish marketplaces.',
      description:
        'We watch every signal your brand emits — from SERP volatility to rogue marketplace listings — and mobilise predefined response teams so you never navigate a crisis alone.',
      primaryCta: 'Activate the command center',
      secondaryCta: 'Download escalation matrix',
      secondaryHref: '/resources',
      metrics: [
        {
          value: '38m',
          label: 'Signals processed monthly',
          annotation: 'Cross-search, social, marketplace, review, and domain intelligence.',
        },
        {
          value: '27 min',
          label: 'Average triage time',
          annotation: 'From alert to verified diagnosis with recommended next steps.',
        },
        {
          value: '3 regions',
          label: 'Regional squads',
          annotation: 'North America, EU, and LATAM teams ready to engage around the clock.',
        },
      ],
      visualCaption: 'Live dashboards animate anomaly spikes so leadership sees risk posture instantly.',
    },
    monitoring: {
      title: 'Anomaly intelligence that sees around corners',
      description:
        'Command center analysts blend search trend monitoring, review quality audits, and adversarial research to surface the risks that matter before they escalate.',
      signals: [
        {
          id: 'serp',
          label: 'SERP anomaly sweeps',
          detail:
            'We benchmark branded keywords hourly, flag suppression opportunities, and trace malicious campaigns targeting your executives.',
          metric: '+41% faster mitigation when anomalies are caught within the first hour.',
        },
        {
          id: 'reviews',
          label: 'Review integrity forensics',
          detail:
            'Our investigators map fake-review networks, coordinate platform removals, and restore authentic sentiment with verified responses.',
          metric: '92% takedown rate across priority marketplaces within 48 hours.',
        },
        {
          id: 'domains',
          label: 'Domain & listing sweeps',
          detail:
            'We monitor spoofed domains, hijacked social handles, and fraudulent listings — triggering registrar, legal, and platform escalations instantly.',
          metric: 'Sub-2 hour registrar engagement on protected portfolios.',
        },
      ],
    },
    workflows: {
      title: 'Coordinated workflows built with your leadership team',
      description:
        'Every alert follows a scripted workflow that aligns communications, legal, product, and revenue teams so decisions stay synchronised while we neutralise threats.',
      steps: [
        {
          id: 'detect',
          title: 'Detect & diagnose',
          description:
            'Signal clustering, analyst review, and automated enrichment confirm severity, impacted regions, and recommended playbooks.',
          duration: 'Within 30 minutes',
        },
        {
          id: 'align',
          title: 'Align & brief leadership',
          description:
            'Briefing packs highlight risk score, stakeholder checklist, and message templates for executives and frontline teams.',
          duration: 'Within 60 minutes',
        },
        {
          id: 'deploy',
          title: 'Deploy countermeasures',
          description:
            'We launch platform escalations, publish recovery messaging, and adjust paid/organic guardrails in the affected regions.',
          duration: 'Within 90 minutes',
        },
        {
          id: 'review',
          title: 'Review & reinforce',
          description:
            'Post-incident retrospectives capture lessons learned, automation updates, and follow-on opportunities for trust-building.',
          duration: 'Within 24 hours',
        },
      ],
    },
    intelligence: {
      title: 'Persistent intelligence streams powering every play',
      description:
        'Dashboards feed live anomaly, sentiment, and impersonation data into the command floor so analysts can pivot without waiting for manual reports.',
      feeds: [
        {
          id: 'threatmap',
          title: 'Threat landscape map',
          description:
            'Clusters paid, organic, and social chatter by adversary to reveal which narratives are accelerating and where intervention is required next.',
          cadence: 'Updated every 15 minutes',
          coverage: 'Search, paid, social, marketplaces',
        },
        {
          id: 'sentiment',
          title: 'Sentiment fidelity barometer',
          description:
            'Blends first-party review signals with marketplace star drift to quantify brand trust erosion before it impacts pipeline.',
          cadence: 'Refreshed hourly',
          coverage: 'App stores, GMB, Trustpilot, regional review hubs',
        },
        {
          id: 'spoofing',
          title: 'Spoofing radar',
          description:
            'Detects spoofed domains, typosquats, rogue ads, and fake support handles so takedown motions trigger while attackers are still live.',
          cadence: 'Continuous with instant alerting',
          coverage: 'Domains, paid media, social, messaging platforms',
        },
      ],
    },
    fusion: {
      title: 'War rooms tuned to your leadership rhythms',
      description:
        'Command center strategists host persistent rooms that keep legal, comms, revenue, and product aligned — even when incidents unfold simultaneously across markets.',
      rooms: [
        {
          id: 'daily',
          title: 'Daily vigilance huddle',
          goal: 'Review overnight anomalies, priority escalations, and comms queue so stakeholders start the day with clarity.',
          cadence: '07:30 regional stand-ups',
        },
        {
          id: 'executive',
          title: 'Executive situation room',
          goal: 'Founder-led brief that synthesises revenue impact, reputational exposure, and recommended decision points.',
          cadence: 'Available on-demand within 15 minutes of activation',
        },
        {
          id: 'recovery',
          title: 'Recovery planning pod',
          goal: 'Document playbook updates, audience messaging, and growth experiments triggered by the latest incident learnings.',
          cadence: 'Twice weekly across impacted markets',
        },
      ],
    },
    playbooks: {
      title: 'Playbooks ready for rapid deployment',
      description:
        'Your command center subscription includes multilingual playbooks engineered with our legal, communications, and growth leads.',
      items: [
        {
          id: 'suppression',
          title: 'Search suppression sprint',
          description:
            'Shifts harmful narratives off page one while elevating owned and partner content across every locale you operate.',
          outcomes: [
            'Looker Studio dashboard outlining SERP velocity and saturation goals.',
            'Press, partner, and community amplification scripts tailored by language.',
            'Executive briefing deck with talking points and approved quotes.',
          ],
        },
        {
          id: 'reviews',
          title: 'Authentic review restoration',
          description:
            'Neutralises fake reviews, rebuilds confidence with verified customers, and arms sales/support with localisation-ready responses.',
          outcomes: [
            'Investigation workbook mapping suspicious clusters and root causes.',
            'Platform-specific escalation matrix with dedicated partner contacts.',
            'Customer re-engagement journey for email, chat, and WhatsApp follow-up.',
          ],
        },
        {
          id: 'executive',
          title: 'Executive shield response',
          description:
            'Protects leadership reputations with proactive media, community, and analyst outreach sequences tuned for each market.',
          outcomes: [
            'Narrative guardrails with pre-approved statements per channel.',
            'Stakeholder tracker covering boards, investors, and ecosystem allies.',
            'Measurement cadence with sentiment, reach, and share-of-voice targets.',
          ],
        },
      ],
    },
    technology: {
      title: 'Automation fabric powering every signal and escalation',
      description:
        'The command center stack blends proprietary crawlers with enterprise integrations so intelligence flows directly into your systems of record.',
      modules: [
        {
          id: 'crawler',
          name: 'Multilingual crawler fleet',
          description:
            'Captures SERP, marketplace, review, and social data with locale-aware parsers tuned to your keyword, product, and executive lists.',
          automation: 'Auto-prioritises anomalies with explainable scoring and routes them to the right analyst squad.',
        },
        {
          id: 'fusion',
          name: 'Evidence fusion layer',
          description:
            'Combines analyst notes, legal feedback, and media monitoring into a single incident timeline your leadership can approve in seconds.',
          automation: 'Synchronises updates to Slack, Teams, and email with templated stakeholder briefings in each language.',
        },
        {
          id: 'reporting',
          name: 'Executive reporting studio',
          description:
            'Generates Looker Studio and PowerPoint exports that track protected revenue, trust signals, and mitigation velocity.',
          automation: 'Delivers refreshed dashboards before every leadership check-in with personalised commentary from Artur Ziganshin.',
        },
      ],
    },
    readiness: {
      title: 'Always-on readiness rituals',
      description:
        'Operating an international brand means staying ready for coordinated threats. These rituals keep your teams confident, rehearsed, and connected to our analysts.',
      columns: [
        {
          title: 'Weekly readiness drills',
          bullets: [
            'Tabletop simulations spanning SEO, paid, and review sabotage scenarios.',
            'Localization reviews to ensure playbooks and templates reflect emerging cultural nuances.',
            'Signal calibration sessions with marketing, product, and customer care leaders.',
          ],
        },
        {
          title: 'Leadership intelligence',
          bullets: [
            'Founder-led briefing summarising incidents, resolved escalations, and competitive watchpoints.',
            'Quarterly horizon scans revealing new adversarial tactics and marketplace policy shifts.',
            'Secure executive workspace with annotated dashboards and decision logs.',
          ],
        },
      ],
    },
    escalation: {
      title: 'Escalation lanes with founder-level access',
      description:
        'When something breaks containment, you reach senior leadership immediately. No ticket queues or outsourced responders — just our core team.',
      tiers: [
        {
          id: 'p0',
          level: 'Priority zero',
          response:
            'Artur activates the executive bridge, aligns legal and communications, and deploys multilingual spokespeople to contain the threat.',
          channels: ['Direct Signal bridge', 'Founder WhatsApp hotline', 'Emergency Zoom room'],
        },
        {
          id: 'p1',
          level: 'Priority one',
          response:
            'Regional leads coordinate recovery while the core team issues verified customer messaging and marketplace takedown sequences.',
          channels: ['Regional Slack war room', 'Pager rotation', 'Incident knowledge base'],
        },
        {
          id: 'p2',
          level: 'Priority two',
          response:
            'Command center analysts document the event, share sentiment shifts, and recommend growth plays that reinforce trust signals.',
          channels: ['Insights email digest', 'Leadership dashboard', 'Follow-up coaching session'],
        },
      ],
      hotlineLabel: 'Hotline coverage',
      hotlineValue: '24/7/365 with native English, French, and Spanish squads',
    },
    contact: {
      title: 'Spin up your command center in under 72 hours',
      subtitle:
        'Share your regions, priority products, and existing partners — we configure the monitoring stack and mobilise analysts immediately.',
      primary: 'Book a mobilisation call',
      secondary: 'Email command@traceremove.com',
      secondaryHref: 'mailto:command@traceremove.com',
    },
  },
  fr: {
    hero: {
      eyebrow: 'Command center',
      title: 'Centre de commandement digital trilingue',
      subtitle:
        'Des analystes seniors orchestrent suppression, défense d’avis et récupération de domaines sur les marchés francophones, anglophones et hispanophones.',
      description:
        'Nous surveillons chaque signal émis par votre marque — volatilité SEO, listings frauduleux, usurpation de domaines — et activons des équipes de réponse prédéfinies pour que vous ne soyez jamais seul face à une crise.',
      primaryCta: 'Activer le command center',
      secondaryCta: 'Télécharger la matrice d’escalade',
      secondaryHref: '/fr/resources',
      metrics: [
        {
          value: '38 M',
          label: 'Signaux analysés par mois',
          annotation: 'SEO, social, marketplaces, avis et renseignement domaines combinés.',
        },
        {
          value: '27 min',
          label: 'Temps moyen de triage',
          annotation: 'De l’alerte au diagnostic validé avec plan d’action recommandé.',
        },
        {
          value: '3 régions',
          label: 'Squads régionales',
          annotation: 'Amériques, Europe et LATAM mobilisables 24/7.',
        },
      ],
      visualCaption: 'Des tableaux de bord animés montrent instantanément l’évolution du risque aux dirigeants.',
    },
    monitoring: {
      title: 'Une intelligence des anomalies qui anticipe les menaces',
      description:
        'Le centre de commandement combine veille SEO, audits d’intégrité des avis et recherche adversariale pour détecter les risques avant qu’ils n’explosent.',
      signals: [
        {
          id: 'serp',
          label: 'Balayages SERP',
          detail:
            'Benchmark horaire des requêtes brandées, détection d’opportunités de suppression et identification des campagnes malveillantes ciblant vos dirigeants.',
          metric: '+41 % de mitigation plus rapide lorsque l’anomalie est traitée dans l’heure.',
        },
        {
          id: 'reviews',
          label: 'Forensique des avis',
          detail:
            'Nos analystes cartographient les réseaux de faux avis, coordonnent les retraits plateformes et rétablissent la confiance avec des réponses authentiques.',
          metric: '92 % de taux de retrait sur les marketplaces prioritaires en moins de 48 h.',
        },
        {
          id: 'domains',
          label: 'Veille domaines & listings',
          detail:
            'Surveillance des domaines usurpés, comptes sociaux détournés et fiches frauduleuses — avec activation immédiate des registraires, juristes et partenaires plateformes.',
          metric: 'Moins de 2 heures pour engager les registraires sur les portefeuilles protégés.',
        },
      ],
    },
    workflows: {
      title: 'Des workflows coordonnés avec vos directions',
      description:
        'Chaque alerte suit un scénario validé avec vos équipes communication, juridique, produit et revenue pour que les décisions restent synchronisées pendant la neutralisation.',
      steps: [
        {
          id: 'detect',
          title: 'Détecter & diagnostiquer',
          description:
            'Clustering des signaux, revue analyste et enrichissement automatisé confirment gravité, zones impactées et playbooks à déployer.',
          duration: 'Sous 30 minutes',
        },
        {
          id: 'align',
          title: 'Aligner & briefer',
          description:
            'Dossiers de briefing avec score de risque, checklist parties prenantes et messages prêts à l’emploi pour dirigeants et équipes terrain.',
          duration: 'Sous 60 minutes',
        },
        {
          id: 'deploy',
          title: 'Déployer les contre-mesures',
          description:
            'Escalades plateformes, messages de réassurance et ajustements paid/organic par région concernée.',
          duration: 'Sous 90 minutes',
        },
        {
          id: 'review',
          title: 'Capitaliser & renforcer',
          description:
            'Rex post-incident avec enseignements, automatisations à mettre à jour et opportunités de réassurance.',
          duration: 'Sous 24 heures',
        },
      ],
    },
    intelligence: {
      title: 'Des flux d’intelligence pour guider chaque action',
      description:
        'Des tableaux de bord en direct alimentent le plateau de commandement en signaux d’anomalie, de sentiment et d’usurpation afin que les analystes pivotent sans attendre des rapports manuels.',
      feeds: [
        {
          id: 'threatmap',
          title: 'Cartographie des menaces',
          description:
            'Regroupe search, paid et conversations sociales par adversaire pour révéler les récits qui accélèrent et les zones d’intervention à prioriser.',
          cadence: 'Mise à jour toutes les 15 minutes',
          coverage: 'Search, paid, social, marketplaces',
        },
        {
          id: 'sentiment',
          title: 'Baromètre de fidélité',
          description:
            'Croise avis propriétaires et dérive des notes marketplaces pour quantifier l’érosion de confiance avant qu’elle n’impacte le pipeline.',
          cadence: 'Rafraîchi chaque heure',
          coverage: 'Stores apps, Google Business, Trustpilot, hubs régionaux',
        },
        {
          id: 'spoofing',
          title: 'Radar d’usurpation',
          description:
            'Détecte domaines typosquat, annonces frauduleuses et faux supports pour enclencher les retraits pendant que l’attaque est encore active.',
          cadence: 'Continu avec alertes instantanées',
          coverage: 'Domaines, paid media, social, messageries',
        },
      ],
    },
    fusion: {
      title: 'War rooms calés sur vos rythmes de direction',
      description:
        'Nos stratèges animent des salles de crise persistantes pour garder juridique, communication, revenue et produit alignés — même quand plusieurs incidents surviennent en parallèle.',
      rooms: [
        {
          id: 'daily',
          title: 'Vigilance quotidienne',
          goal: 'Passer en revue anomalies nocturnes, escalades prioritaires et files de messages afin que chaque équipe démarre alignée.',
          cadence: 'Stand-ups régionaux 7 h 30',
        },
        {
          id: 'executive',
          title: 'Salle de situation exécutive',
          goal: 'Brief piloté par le fondateur synthétisant impact business, exposition réputationnelle et décisions à acter.',
          cadence: 'Disponible à la demande en moins de 15 minutes',
        },
        {
          id: 'recovery',
          title: 'Atelier de reprise',
          goal: 'Documenter les mises à jour de playbooks, messages audiences et expérimentations growth issus des derniers enseignements.',
          cadence: 'Bi-hebdomadaire sur les marchés touchés',
        },
      ],
    },
    playbooks: {
      title: 'Des playbooks prêts à déployer',
      description:
        'Votre abonnement inclut des playbooks multilingues conçus avec nos experts juridiques, communication et growth.',
      items: [
        {
          id: 'suppression',
          title: 'Sprint de suppression SEO',
          description:
            'Écarte les récits néfastes de la première page tout en propulsant vos contenus propriétaires et partenaires sur chaque marché.',
          outcomes: [
            'Dashboard Looker Studio détaillant la vélocité SERP et les objectifs de couverture.',
            'Scripts d’amplification presse, partenaires et communauté adaptés à chaque langue.',
            'Deck de briefing exécutif avec éléments de langage et citations validées.',
          ],
        },
        {
          id: 'reviews',
          title: 'Restauration d’avis authentiques',
          description:
            'Neutralise les faux avis, reconstruit la confiance avec des clients vérifiés et outille ventes/support avec des réponses localisées.',
          outcomes: [
            'Classeur d’enquête cartographiant clusters suspects et causes racines.',
            'Matrice d’escalade par plateforme avec contacts partenaires dédiés.',
            'Parcours de réengagement clients via email, chat et WhatsApp.',
          ],
        },
        {
          id: 'executive',
          title: 'Protection exécutive',
          description:
            'Préserve la réputation leadership avec médias proactifs, communauté et analystes selon chaque région.',
          outcomes: [
            'Garde-fous narratifs avec messages approuvés par canal.',
            'Tableau de bord parties prenantes couvrant boards, investisseurs et alliés.',
            'Cadence de mesure incluant sentiment, reach et part de voix.',
          ],
        },
      ],
    },
    technology: {
      title: 'Tissu d’automatisation au service de chaque signal',
      description:
        'Le stack du command center combine crawlers propriétaires et intégrations d’entreprise pour injecter l’intelligence directement dans vos outils.',
      modules: [
        {
          id: 'crawler',
          name: 'Flotte de crawlers multilingues',
          description:
            'Capture données SERP, marketplaces, avis et social via des parseurs localisés alignés sur vos listes de mots-clés, produits et dirigeants.',
          automation: 'Priorise automatiquement les anomalies grâce à un scoring explicable et les route vers le squad analyste adéquat.',
        },
        {
          id: 'fusion',
          name: 'Couche de fusion des preuves',
          description:
            'Réunit notes analystes, retours juridiques et veille média dans une chronologie unique validée par votre direction.',
          automation: 'Synchronise mises à jour Slack, Teams et email avec des briefings parties prenantes prêts à l’emploi par langue.',
        },
        {
          id: 'reporting',
          name: 'Studio de reporting exécutif',
          description:
            'Génère exports Looker Studio et PowerPoint suivantrent revenus protégés, signaux de confiance et vélocité de mitigation.',
          automation: 'Diffuse des dashboards actualisés avant chaque point leadership avec commentaire personnalisé d’Artur Ziganshin.',
        },
      ],
    },
    readiness: {
      title: 'Rituels de préparation continue',
      description:
        'Exploiter une marque internationale impose d’être prêt face aux attaques coordonnées. Ces rituels maintiennent vos équipes entraînées et connectées à nos analystes.',
      columns: [
        {
          title: 'Drills hebdomadaires',
          bullets: [
            'Simulations tabletop couvrant sabotages SEO, paid et avis.',
            'Revues de localisation pour ajuster playbooks et templates aux signaux culturels émergents.',
            'Sessions de calibration des signaux avec marketing, produit et care.',
          ],
        },
        {
          title: 'Intelligence leadership',
          bullets: [
            'Briefing piloté par le fondateur sur incidents, escalades résolues et points de vigilance concurrents.',
            'Veilles trimestrielles sur les nouvelles tactiques adverses et évolutions des politiques marketplaces.',
            'Espace exécutif sécurisé avec dashboards annotés et journal de décision.',
          ],
        },
      ],
    },
    escalation: {
      title: 'Voies d’escalade avec accès fondateur',
      description:
        'Dès qu’un incident échappe au cadre prévu, vous contactez directement le leadership. Aucun ticket, aucune externalisation — seulement notre équipe cœur.',
      tiers: [
        {
          id: 'p0',
          level: 'Priorité zéro',
          response:
            'Artur ouvre le bridge exécutif, aligne juridique et communication et déploie des porte-parole multilingues pour contenir la menace.',
          channels: ['Bridge Signal direct', 'Hotline WhatsApp fondateur', 'Salle Zoom d’urgence'],
        },
        {
          id: 'p1',
          level: 'Priorité une',
          response:
            'Les leads régionaux coordonnent la reprise pendant que l’équipe centrale diffuse des messages vérifiés et enclenche les retraits marketplaces.',
          channels: ['War room Slack régionale', 'Rotation pager', 'Base de connaissance incidents'],
        },
        {
          id: 'p2',
          level: 'Priorité deux',
          response:
            'Les analystes documentent l’événement, partagent l’évolution du sentiment et recommandent des actions de réassurance.',
          channels: ['Digest email insights', 'Dashboard direction', 'Session de coaching follow-up'],
        },
      ],
      hotlineLabel: 'Couverture hotline',
      hotlineValue: '24/7/365 avec squads natifs anglais, français et espagnol',
    },
    contact: {
      title: 'Activez votre command center en moins de 72 h',
      subtitle:
        'Partagez vos régions, produits prioritaires et partenaires existants — nous configurons la veille et mobilisons les analystes immédiatement.',
      primary: 'Planifier un call de mobilisation',
      secondary: 'Écrire à command@traceremove.com',
      secondaryHref: 'mailto:command@traceremove.com',
    },
  },
  es: {
    hero: {
      eyebrow: 'Command center',
      title: 'Centro de comando digital trilingüe',
      subtitle:
        'Analistas senior coordinan supresión, defensa de reseñas y recuperación de dominios en los mercados en inglés, francés y español.',
      description:
        'Vigilamos cada señal de tu marca — volatilidad SEO, listados fraudulentos, dominios usurpados — y activamos equipos de respuesta predefinidos para que nunca enfrentes una crisis en solitario.',
      primaryCta: 'Activar el command center',
      secondaryCta: 'Descargar matriz de escalación',
      secondaryHref: '/es/resources',
      metrics: [
        {
          value: '38 M',
          label: 'Señales analizadas al mes',
          annotation: 'Cobertura combinada de SEO, social, marketplaces, reseñas y dominios.',
        },
        {
          value: '27 min',
          label: 'Tiempo medio de triage',
          annotation: 'De la alerta al diagnóstico verificado con plan recomendado.',
        },
        {
          value: '3 regiones',
          label: 'Escuadras regionales',
          annotation: 'Norteamérica, Europa y LATAM activas las 24 horas.',
        },
      ],
      visualCaption: 'Dashboards animados muestran al instante la postura de riesgo para la dirección.',
    },
    monitoring: {
      title: 'Inteligencia de anomalías que anticipa amenazas',
      description:
        'El centro de comando combina monitoreo SEO, auditorías de reseñas y research adversarial para detectar riesgos antes de que escalen.',
      signals: [
        {
          id: 'serp',
          label: 'Barridos SERP',
          detail:
            'Benchmarks horarios de keywords de marca, identificación de oportunidades de supresión y rastreo de campañas maliciosas contra tus ejecutivos.',
          metric: '+41 % de mitigación más rápida cuando se detecta en la primera hora.',
        },
        {
          id: 'reviews',
          label: 'Forense de reseñas',
          detail:
            'Nuestros analistas mapean redes de reseñas falsas, coordinan retiros con las plataformas y restauran el sentimiento auténtico con respuestas verificadas.',
          metric: '92 % de retiradas en marketplaces clave en menos de 48 h.',
        },
        {
          id: 'domains',
          label: 'Barridos de dominios y listings',
          detail:
            'Monitorizamos dominios suplantados, cuentas sociales robadas y listados fraudulentos activando de inmediato a registradores, legales y aliados de plataforma.',
          metric: 'Menos de 2 horas para activar a los registradores en portafolios protegidos.',
        },
      ],
    },
    workflows: {
      title: 'Workflows coordinados con tu liderazgo',
      description:
        'Cada alerta sigue un flujo acordado con tus equipos de comunicación, legal, producto y revenue para mantener decisiones sincronizadas mientras neutralizamos la amenaza.',
      steps: [
        {
          id: 'detect',
          title: 'Detectar y diagnosticar',
          description:
            'Clustering de señales, revisión analista y enriquecimiento automático confirman severidad, regiones impactadas y playbooks a activar.',
          duration: 'En menos de 30 minutos',
        },
        {
          id: 'align',
          title: 'Alinear y informar',
          description:
            'Paquetes de briefing con puntaje de riesgo, checklist de stakeholders y mensajes listos para líderes y equipos.',
          duration: 'En menos de 60 minutos',
        },
        {
          id: 'deploy',
          title: 'Desplegar contramedidas',
          description:
            'Escaladas en plataformas, mensajes de recuperación y ajustes paid/organic en las regiones afectadas.',
          duration: 'En menos de 90 minutos',
        },
        {
          id: 'review',
          title: 'Revisar y reforzar',
          description:
            'Retrospectivas post-incidente con aprendizajes, automatizaciones a actualizar y oportunidades de confianza.',
          duration: 'En menos de 24 horas',
        },
      ],
    },
    intelligence: {
      title: 'Flujos de inteligencia que alimentan cada decisión',
      description:
        'Tableros en vivo entregan datos de anomalías, sentimiento e impersonaciones directamente al piso de comando para que los analistas reaccionen sin esperar reportes manuales.',
      feeds: [
        {
          id: 'threatmap',
          title: 'Mapa de amenazas',
          description:
            'Agrupa búsquedas, paid y conversación social por actor adversario para mostrar qué narrativas aceleran y dónde intervenir.',
          cadence: 'Actualización cada 15 minutos',
          coverage: 'Search, paid, social, marketplaces',
        },
        {
          id: 'sentiment',
          title: 'Barómetro de confianza',
          description:
            'Combina reseñas propias con la deriva de estrellas en marketplaces para medir la erosión de confianza antes de que impacte ingresos.',
          cadence: 'Se refresca cada hora',
          coverage: 'App stores, Google Business, Trustpilot, hubs regionales',
        },
        {
          id: 'spoofing',
          title: 'Radar de suplantación',
          description:
            'Detecta dominios typosquat, anuncios falsos y cuentas de soporte apócrifas para iniciar retiros mientras el ataque sigue activo.',
          cadence: 'Continuo con alertas instantáneas',
          coverage: 'Dominios, paid media, social, plataformas de mensajería',
        },
      ],
    },
    fusion: {
      title: 'War rooms sincronizadas con tus ritmos ejecutivos',
      description:
        'Los estrategas del command center mantienen salas activas que alinean jurídico, comunicación, revenue y producto aun cuando varios incidentes ocurren en paralelo.',
      rooms: [
        {
          id: 'daily',
          title: 'Reunión diaria de vigilancia',
          goal: 'Repasar anomalías nocturnas, escalaciones críticas y la cola de comunicación para iniciar el día con claridad.',
          cadence: 'Stand-ups regionales 07:30',
        },
        {
          id: 'executive',
          title: 'Sala ejecutiva de situación',
          goal: 'Brief liderado por el fundador que sintetiza impacto en ingresos, exposición reputacional y decisiones recomendadas.',
          cadence: 'Disponible bajo demanda en menos de 15 minutos',
        },
        {
          id: 'recovery',
          title: 'Célula de recuperación',
          goal: 'Documentar actualizaciones de playbooks, mensajes por audiencia y experimentos de crecimiento activados por los últimos aprendizajes.',
          cadence: 'Dos veces por semana en mercados afectados',
        },
      ],
    },
    playbooks: {
      title: 'Playbooks listos para desplegar',
      description:
        'Tu suscripción incluye playbooks multilingües diseñados con nuestros leads legales, de comunicación y crecimiento.',
      items: [
        {
          id: 'suppression',
          title: 'Sprint de supresión SEO',
          description:
            'Desplaza narrativas dañinas de la primera página y amplifica contenidos propios y de partners en cada mercado.',
          outcomes: [
            'Dashboard Looker Studio con objetivos de velocidad SERP y saturación.',
            'Guiones de amplificación para prensa, partners y comunidad adaptados por idioma.',
            'Presentación ejecutiva con mensajes y citas aprobadas.',
          ],
        },
        {
          id: 'reviews',
          title: 'Restauración de reseñas auténticas',
          description:
            'Neutraliza reseñas falsas, reconstruye confianza con clientes verificados y equipa ventas/soporte con respuestas localizadas.',
          outcomes: [
            'Cuaderno de investigación que mapea clusters sospechosos y causas raíz.',
            'Matriz de escalación por plataforma con contactos prioritarios.',
            'Ruta de reenganche de clientes vía email, chat y WhatsApp.',
          ],
        },
        {
          id: 'executive',
          title: 'Respuesta de escudo ejecutivo',
          description:
            'Protege la reputación del liderazgo con outreach proactivo a medios, comunidad y analistas en cada región.',
          outcomes: [
            'Guías narrativas con declaraciones aprobadas por canal.',
            'Tablero de stakeholders con boards, inversores y aliados.',
            'Cadencia de métricas con sentimiento, alcance y share of voice.',
          ],
        },
      ],
    },
    technology: {
      title: 'Automatización que alimenta cada señal y escalación',
      description:
        'El stack del command center mezcla crawlers propietarios con integraciones empresariales para que la inteligencia llegue directo a tus sistemas.',
      modules: [
        {
          id: 'crawler',
          name: 'Flota de crawlers multilingües',
          description:
            'Captura datos de SERP, marketplaces, reseñas y social con parsers localizados alineados a tus listas de keywords, productos y ejecutivos.',
          automation: 'Prioriza automáticamente las anomalías con un scoring explicable y las dirige al squad analista adecuado.',
        },
        {
          id: 'fusion',
          name: 'Capa de fusión de evidencias',
          description:
            'Combina notas analistas, feedback legal y monitoreo de medios en una línea de tiempo única para aprobación ejecutiva.',
          automation: 'Sincroniza actualizaciones en Slack, Teams y email con briefings de stakeholders listos por idioma.',
        },
        {
          id: 'reporting',
          name: 'Estudio de reportes ejecutivos',
          description:
            'Genera exports de Looker Studio y PowerPoint que miden ingresos protegidos, señales de confianza y velocidad de mitigación.',
          automation: 'Entrega dashboards actualizados antes de cada checkpoint con comentarios personalizados de Artur Ziganshin.',
        },
      ],
    },
    readiness: {
      title: 'Rituales de preparación continua',
      description:
        'Gestionar una marca internacional exige estar listo ante amenazas coordinadas. Estos rituales mantienen a tus equipos entrenados y conectados con nuestros analistas.',
      columns: [
        {
          title: 'Drills semanales',
          bullets: [
            'Simulaciones tabletop sobre sabotajes SEO, paid y de reseñas.',
            'Revisiones de localización para ajustar playbooks y plantillas a nuevas señales culturales.',
            'Sesiones de calibración de señales con marketing, producto y atención al cliente.',
          ],
        },
        {
          title: 'Inteligencia ejecutiva',
          bullets: [
            'Briefing liderado por el fundador sobre incidentes, escalaciones resueltas y alertas competitivas.',
            'Escaneos trimestrales de nuevas tácticas adversarias y cambios en políticas de marketplaces.',
            'Espacio ejecutivo seguro con dashboards anotados y registro de decisiones.',
          ],
        },
      ],
    },
    escalation: {
      title: 'Vías de escalación con acceso al fundador',
      description:
        'Si un incidente sale del guion, hablas directo con liderazgo. Sin tickets ni terceros: solo nuestro equipo central.',
      tiers: [
        {
          id: 'p0',
          level: 'Prioridad cero',
          response:
            'Artur abre el bridge ejecutivo, alinea legal y comunicación y despliega portavoces multilingües para contener la amenaza.',
          channels: ['Bridge Signal directo', 'Hotline WhatsApp del fundador', 'Sala Zoom de emergencia'],
        },
        {
          id: 'p1',
          level: 'Prioridad uno',
          response:
            'Líderes regionales coordinan la recuperación mientras el equipo central emite mensajes verificados y activa retiros en marketplaces.',
          channels: ['War room Slack regional', 'Rotación pager', 'Base de conocimiento de incidentes'],
        },
        {
          id: 'p2',
          level: 'Prioridad dos',
          response:
            'Los analistas documentan el evento, comparten cambios de sentimiento y recomiendan jugadas para reforzar la confianza.',
          channels: ['Digest de insights', 'Dashboard ejecutivo', 'Sesión de coaching de seguimiento'],
        },
      ],
      hotlineLabel: 'Cobertura de hotline',
      hotlineValue: '24/7/365 con squads nativos en inglés, francés y español',
    },
    contact: {
      title: 'Lanza tu command center en menos de 72 h',
      subtitle:
        'Comparte regiones, productos clave y partners actuales — configuramos el monitoreo y activamos analistas de inmediato.',
      primary: 'Agendar llamada de movilización',
      secondary: 'Escribir a command@traceremove.com',
      secondaryHref: 'mailto:command@traceremove.com',
    },
  },
}

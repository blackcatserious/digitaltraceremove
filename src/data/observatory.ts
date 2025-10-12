import { type Language } from './pages'

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
  dashboards: {
    title: string
    description: string
    panels: { id: string; title: string; metric: string; delta: string; description: string }[]
  }
  labs: {
    title: string
    description: string
    tracks: { id: string; name: string; focus: string; cadence: string; lead: string }[]
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
            'Suppressions Traceremove + communication clients ont protégé 420 k€ de pipeline en 3 jours.',
          action: 'Consulter les templates',
        },
        {
          id: 'c3',
          title: 'Blocage onboarding fintech',
          summary:
            'Baisse d’inscriptions (-14 %) suite à un nouveau fournisseur KYC provoquant une série d’avis négatifs.',
          insight:
            'Playbook déclenchant FAQ dynamiques, tests CRO et contact direct des top reviewers par le fondateur.',
          action: 'Ouvrir le workflow',
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
            'Bajas de Traceremove más comunicación a clientes protegieron €420k de pipeline en 3 días.',
          action: 'Ver plantillas de respuesta',
        },
        {
          id: 'c3',
          title: 'Cuello de botella fintech',
          summary:
            'Racha de reseñas negativas ligada a un nuevo proveedor KYC. Altas bajaron 14 % semana contra semana.',
          insight:
            'Playbook activó FAQs dinámicas, tests CRO y alcance directo del fundador a los top reviewers.',
          action: 'Abrir flujo de remediación',
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

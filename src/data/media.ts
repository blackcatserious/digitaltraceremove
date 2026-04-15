import { type Language } from './pages'

export interface MediaMetric {
  value: string
  label: string
  description: string
}

export interface MediaOutlet {
  name: string
  region: string
  summary: string
}

export interface MediaRelease {
  id: string
  date: string
  title: string
  summary: string
  highlight: string
}

export interface MediaAsset {
  id: string
  title: string
  format: string
  size: string
  usage: string
}

export interface MediaSpokesperson {
  id: string
  name: string
  role: string
  bio: string
  topics: string
  languages: string
}

export interface MediaCenterContent {
  hero: {
    eyebrow: string
    title: string
    subtitle: string
    primaryCta: string
    secondaryCta: string
    secondaryHref: string
    mediaNote: string
    visualCaption: string
    metrics: MediaMetric[]
  }
  coverage: {
    heading: string
    description: string
    outlets: MediaOutlet[]
  }
  releases: {
    heading: string
    description: string
    ctaLabel: string
    items: MediaRelease[]
  }
  kit: {
    heading: string
    description: string
    usageNote: string
    downloadLabel: string
    assets: MediaAsset[]
  }
  spokespeople: {
    heading: string
    description: string
    focusLabel: string
    languagesLabel: string
    people: MediaSpokesperson[]
  }
  contact: {
    heading: string
    subtitle: string
    details: string[]
    emailLabel: string
    emailHref: string
    phoneLabel: string
    phoneHref: string
    note: string
  }
}

export const mediaCenterCopy: Record<Language, MediaCenterContent> = {
  en: {
    hero: {
      eyebrow: 'Press & media hub',
      title: 'Media kit and newsroom',
      subtitle:
        'Access press-ready storytelling, fast facts, and animated visuals that show how Traceremove shields brands while amplifying growth.',
      primaryCta: 'Book a media briefing',
      secondaryCta: 'Download press kit',
      secondaryHref: 'mailto:press@traceremove.com',
      mediaNote:
        'We respond to press requests within four business hours and coordinate spokesperson availability across time zones.',
      visualCaption: 'Newsroom visuals for trust, security, and reputation outcomes.',
      metrics: [
        {
          value: '48 hrs',
          label: 'Incident turnaround',
          description: 'Average time for us to activate a multilingual response cell after a press inquiry.',
        },
        {
          value: '36+',
          label: 'Markets covered',
          description: 'Regional expertise spanning North America, EU, LATAM, and key growth hubs worldwide.',
        },
        {
          value: '92%',
          label: 'Positive sentiment',
          description: 'Share of press coverage that references measurable brand recovery powered by Traceremove.',
        },
      ],
    },
    coverage: {
      heading: 'Recent coverage and analyst notes',
      description:
        'A snapshot of publications and analysts covering our digital trust and response methodology.',
      outlets: [
        {
          name: 'Brand Safety Weekly',
          region: 'North America',
          summary: 'Featured our rapid takedown playbook and executive escalation protocols for retail and travel brands.',
        },
        {
          name: 'Le Journal du Growth',
          region: 'France',
          summary: 'Explored how multilingual SEO labs recover intent keywords while neutralising misinformation surges.',
        },
        {
          name: 'LatAm Tech Radar',
          region: 'LATAM',
          summary: 'Highlighted our domain protection pods defending fintech and marketplace scale-ups from spoofing.',
        },
        {
          name: 'Signal & Trust Report',
          region: 'Global',
          summary: 'Analyst briefing on pairing AI monitoring with human-led investigations to authenticate reviews.',
        },
      ],
    },
    releases: {
      heading: 'Latest releases',
      description:
        'Announcements about new capabilities, research findings, and regional programme launches.',
      ctaLabel: 'Explore related insights',
      items: [
        {
          id: 'seo-surge',
          date: 'April 2024',
          title: 'Traceremove launches multilingual SEO surge cells',
          summary:
            'Dedicated squads align legal, content, and paid search to reclaim critical brand terms within days.',
          highlight: 'Includes performance dashboards showing 4.2× impression recovery in 30 days.',
        },
        {
          id: 'review-lab',
          date: 'March 2024',
          title: 'New review authenticity lab exposes coordinated fake review rings',
          summary:
            'Our data science pod now triangulates behavioural signals and platform forensics across 18 marketplaces.',
          highlight: 'Report features anonymised case studies from hospitality, fintech, and consumer apps.',
        },
        {
          id: 'domain-shield',
          date: 'January 2024',
          title: 'Domain shield retainer extends to high-growth fintech and SaaS',
          summary:
            'Traceremove adds registrar locks, 24/7 phishing sweeps, and crisis comms protocols to every engagement.',
          highlight: 'Provides play-by-play checklist for legal, security, and communications teams.',
        },
      ],
    },
    kit: {
      heading: 'Media assets & brand kit',
      description:
        'Download logos, founder portraits, motion graphics, and data visualisations for coverage and speaking engagements.',
      usageNote: 'Please reference Traceremove and link to traceremove.com when using these assets.',
      downloadLabel: 'Request download link',
      assets: [
        {
          id: 'logos',
          title: 'Logo pack',
          format: 'ZIP · SVG + PNG',
          size: '8.6 MB',
          usage: 'Primary, secondary, and monochrome marks with safe-space guidance.',
        },
        {
          id: 'founder',
          title: 'Founder photography',
          format: 'JPEG set · 4K',
          size: '12.4 MB',
          usage: 'Portraits of TraceRemove Advisor for press, conferences, and digital use.',
        },
        {
          id: 'motion',
          title: 'Motion loops',
          format: 'MP4 · 10s clips',
          size: '24 MB',
          usage: 'Abstract growth visuals showcasing suppression velocity and sentiment lift.',
        },
        {
          id: 'fact-sheet',
          title: 'Company fact sheet',
          format: 'PDF · 4 pages',
          size: '1.2 MB',
          usage: 'Headlines, services, leadership bios, and regional coverage data.',
        },
      ],
    },
    spokespeople: {
      heading: 'Spokespeople & expert commentary',
      description:
        'Connect with strategists who lead real-world brand protection programmes across regulated and high-growth sectors.',
      focusLabel: 'Focus areas',
      languagesLabel: 'Languages',
      people: [
        {
          id: 'artur',
          name: 'TraceRemove Advisor',
          role: 'Founder & CEO',
          bio: 'Leads crisis response, growth acceleration, and executive communications across English, French, and Spanish markets.',
          topics: 'Digital trust strategy, incident response, executive reputation',
          languages: 'English, French, Spanish, Russian',
        },
        {
          id: 'clara',
          name: 'Clara Martel',
          role: 'VP, Reputation Operations',
          bio: 'Architects review integrity programmes and AI-assisted monitoring frameworks for hospitality and fintech leaders.',
          topics: 'Review integrity, AI monitoring, multilingual SEO',
          languages: 'French, English',
        },
        {
          id: 'diego',
          name: 'Diego Santos',
          role: 'Head of Digital Trust',
          bio: 'Coordinates LATAM market escalations, domain recovery, and partnership programmes with marketplaces.',
          topics: 'Marketplace integrity, domain recovery, LATAM growth',
          languages: 'Spanish, English, Portuguese',
        },
      ],
    },
    contact: {
      heading: 'Press contact',
      subtitle: 'Tell us about your deadline and audience so we can prepare the right spokesperson and assets.',
      details: [
        'Available 06:00–22:00 EST with on-call support for urgent incidents.',
        'Briefings include motion visuals, metrics, and multilingual quotes you can publish immediately.',
      ],
      emailLabel: 'Email press@traceremove.com',
      emailHref: 'mailto:press@traceremove.com',
      phoneLabel: 'Call +1 (472) 248 0235',
      phoneHref: 'tel:+16063022958',
      note: 'Prefer WhatsApp or Signal? Mention it in your email and we will respond within minutes.',
    },
  },
  fr: {
    hero: {
      eyebrow: 'Espace presse',
      title: 'Kit média et newsroom',
      subtitle:
        'Accédez à des récits prêts pour la presse, des données clés et des visuels animés qui montrent comment Traceremove protège les marques tout en accélérant la croissance.',
      primaryCta: 'Planifier un brief média',
      secondaryCta: 'Télécharger le kit presse',
      secondaryHref: 'mailto:press@traceremove.com',
      mediaNote:
        'Nous répondons aux demandes presse en moins de quatre heures ouvrées et coordonnons la disponibilité des porte-parole sur chaque fuseau.',
      visualCaption: 'Des tableaux de bord animés illustrent la vitesse de suppression et le regain de réputation de notre portefeuille.',
      metrics: [
        {
          value: '48 h',
          label: 'Délai d’activation',
          description: 'Temps moyen pour mobiliser une cellule de réponse multilingue après votre demande presse.',
        },
        {
          value: '36+',
          label: 'Marchés couverts',
          description: 'Expertise régionale en Amérique du Nord, Europe, Amérique latine et hubs en forte croissance.',
        },
        {
          value: '92 %',
          label: 'Sentiment positif',
          description: 'Part des retombées presse mentionnant une amélioration mesurable portée par Traceremove.',
        },
      ],
    },
    coverage: {
      heading: 'Couverture récente et analyses',
      description:
        'Médias et analystes spécialisés en réputation, marketplaces et protection de marque font appel à Traceremove pour décrypter les enjeux.',
      outlets: [
        {
          name: 'Brand Safety Weekly',
          region: 'Amérique du Nord',
          summary: 'Met en lumière notre playbook de suppression rapide et nos protocoles d’escalade exécutifs pour le retail et le voyage.',
        },
        {
          name: 'Le Journal du Growth',
          region: 'France',
          summary: 'Explique comment nos labs SEO multilingues récupèrent les intentions clés tout en neutralisant les désinformations.',
        },
        {
          name: 'LatAm Tech Radar',
          region: 'Amérique latine',
          summary: 'Souligne nos cellules de protection de domaines pour les scale-ups fintech et marketplaces.',
        },
        {
          name: 'Signal & Trust Report',
          region: 'Global',
          summary: 'Brief analyste sur la combinaison monitoring IA et investigations humaines pour authentifier les avis.',
        },
      ],
    },
    releases: {
      heading: 'Derniers communiqués',
      description:
        'Angles, études animées et données de croissance prêtes pour les rédactions couvrant SEO, réputation et confiance digitale.',
      ctaLabel: 'Voir nos insights',
      items: [
        {
          id: 'seo-surge',
          date: 'Avril 2024',
          title: 'Traceremove lance des cellules SEO multilingues',
          summary:
            'Des squads dédiés alignent juridique, contenu et search payant pour récupérer les requêtes critiques en quelques jours.',
          highlight: 'Inclut des dashboards montrant un regain d’impressions x4,2 en 30 jours.',
        },
        {
          id: 'review-lab',
          date: 'Mars 2024',
          title: 'Un laboratoire d’authenticité des avis dévoile des réseaux de faux avis',
          summary:
            'Notre pôle data science croise désormais signaux comportementaux et forensics plateforme sur 18 marketplaces.',
          highlight: 'Le rapport présente des cas anonymisés dans l’hôtellerie, la fintech et les apps grand public.',
        },
        {
          id: 'domain-shield',
          date: 'Janvier 2024',
          title: 'Le programme Domain Shield s’étend aux fintech et SaaS en hypercroissance',
          summary:
            'Traceremove ajoute verrous registraires, veille phishing 24/7 et protocoles de crise à chaque accompagnement.',
          highlight: 'Fournit une checklist détaillée pour les équipes juridiques, sécurité et communication.',
        },
      ],
    },
    kit: {
      heading: 'Assets média & brand kit',
      description:
        'Téléchargez logos, portraits, motion graphics et visualisations pour vos articles, conférences et interviews.',
      usageNote: 'Merci de mentionner Traceremove et de lier vers traceremove.com lors de l’utilisation.',
      downloadLabel: 'Demander le lien de téléchargement',
      assets: [
        {
          id: 'logos',
          title: 'Pack logos',
          format: 'ZIP · SVG + PNG',
          size: '8,6 Mo',
          usage: 'Logos principal, secondaire et monochrome avec zones de protection.',
        },
        {
          id: 'founder',
          title: 'Photographies du fondateur',
          format: 'Série JPEG · 4K',
          size: '12,4 Mo',
          usage: 'Portraits d’TraceRemove Advisor pour la presse et la scène.',
        },
        {
          id: 'motion',
          title: 'Boucles motion',
          format: 'MP4 · 10 s',
          size: '24 Mo',
          usage: 'Visuels abstraits montrant vitesse de suppression et hausse de sentiment.',
        },
        {
          id: 'fact-sheet',
          title: 'Fiche entreprise',
          format: 'PDF · 4 pages',
          size: '1,2 Mo',
          usage: 'Chiffres clés, offres, bios leadership et couverture régionale.',
        },
      ],
    },
    spokespeople: {
      heading: 'Porte-parole & experts',
      description:
        'Contactez les stratèges qui pilotent des programmes de protection de marque sur des secteurs régulés et en forte croissance.',
      focusLabel: 'Domaines d’expertise',
      languagesLabel: 'Langues',
      people: [
        {
          id: 'artur',
          name: 'TraceRemove Advisor',
          role: 'Fondateur & CEO',
          bio: 'Pilote réponses de crise, accélération growth et communication exécutive en anglais, français et espagnol.',
          topics: 'Protection de marque, réputation des dirigeants, war room',
          languages: 'Anglais, français, espagnol, russe',
        },
        {
          id: 'clara',
          name: 'Clara Martel',
          role: 'VP Opérations Réputation',
          bio: 'Conçoit des programmes d’authenticité des avis et des frameworks de monitoring IA pour hôtellerie et fintech.',
          topics: 'Authenticité des avis, monitoring IA, SEO multilingue',
          languages: 'Français, anglais',
        },
        {
          id: 'diego',
          name: 'Diego Santos',
          role: 'Head of Digital Trust',
          bio: 'Coordonne les escalades LATAM, la récupération de domaines et les partenariats marketplaces.',
          topics: 'Intégrité marketplaces, récupération de domaines, croissance LATAM',
          languages: 'Espagnol, anglais, portugais',
        },
      ],
    },
    contact: {
      heading: 'Contact presse',
      subtitle: 'Précisez votre deadline et votre audience afin que nous préparions le bon porte-parole et les assets adaptés.',
      details: [
        'Disponibles de 06h00 à 22h00 EST avec astreinte pour incidents urgents.',
        'Les briefs incluent visuels animés, métriques et citations multilingues prêtes à publier.',
      ],
      emailLabel: 'Écrire à press@traceremove.com',
      emailHref: 'mailto:press@traceremove.com',
      phoneLabel: 'Appeler le +1 (472) 248 0235',
      phoneHref: 'tel:+16063022958',
      note: 'Besoin de WhatsApp ou Signal ? Mentionnez-le et nous répondrons en quelques minutes.',
    },
  },
  es: {
    hero: {
      eyebrow: 'Sala de prensa',
      title: 'Media kit y newsroom',
      subtitle:
        'Accede a historias listas para publicar, datos clave y visuales animados que muestran cómo Traceremove protege tu marca mientras acelera el crecimiento.',
      primaryCta: 'Solicitar briefing de prensa',
      secondaryCta: 'Descargar kit de prensa',
      secondaryHref: 'mailto:press@traceremove.com',
      mediaNote:
        'Respondemos a solicitudes de medios en menos de cuatro horas hábiles y coordinamos portavoces en todos los husos horarios.',
      visualCaption: 'Los dashboards animados muestran la velocidad de supresión y el impulso reputacional.',
      metrics: [
        {
          value: '48 h',
          label: 'Tiempo de activación',
          description: 'Tiempo medio para activar una célula de respuesta multilingüe tras tu solicitud.',
        },
        {
          value: '36+',
          label: 'Mercados cubiertos',
          description: 'Expertos en Norteamérica, Europa, LATAM y polos de hipercrecimiento.',
        },
        {
          value: '92 %',
          label: 'Sentimiento positivo',
          description: 'Cobertura mediática que destaca resultados tangibles impulsados por Traceremove.',
        },
      ],
    },
    coverage: {
      heading: 'Cobertura reciente y análisis',
      description:
        'Medios y analistas especializados en reputación, marketplaces y protección digital consultan a Traceremove para entender las amenazas actuales.',
      outlets: [
        {
          name: 'Brand Safety Weekly',
          region: 'Norteamérica',
          summary: 'Destacó nuestro playbook de respuesta rápida y los protocolos ejecutivos para retail y viajes.',
        },
        {
          name: 'Le Journal du Growth',
          region: 'Francia',
          summary: 'Mostró cómo los labs SEO multilingües recuperan keywords críticas mientras frenan la desinformación.',
        },
        {
          name: 'LatAm Tech Radar',
          region: 'LATAM',
          summary: 'Resaltó nuestras células de protección de dominios para scale-ups fintech y marketplaces.',
        },
        {
          name: 'Signal & Trust Report',
          region: 'Global',
          summary: 'Informe analista sobre combinar monitoreo IA con investigación humana para autenticar reseñas.',
        },
      ],
    },
    releases: {
      heading: 'Últimos comunicados',
      description:
        'Historias, estudios de motion y datos de crecimiento listos para periodistas que cubren SEO, reputación y confianza digital.',
      ctaLabel: 'Ver insights relacionados',
      items: [
        {
          id: 'seo-surge',
          date: 'Abril 2024',
          title: 'Traceremove lanza células SEO multilingües',
          summary:
            'Squads dedicados alinean legal, contenido y search pagado para recuperar términos clave en días.',
          highlight: 'Incluye dashboards con recuperación de impresiones de 4,2× en 30 días.',
        },
        {
          id: 'review-lab',
          date: 'Marzo 2024',
          title: 'Nuevo laboratorio detecta redes de reseñas falsas coordinadas',
          summary:
            'Nuestro equipo de data science cruza señales de comportamiento y forense de plataformas en 18 marketplaces.',
          highlight: 'Informe con casos anonimizados de hotelería, fintech y apps de consumo.',
        },
        {
          id: 'domain-shield',
          date: 'Enero 2024',
          title: 'Domain shield llega a fintech y SaaS de alto crecimiento',
          summary:
            'Traceremove integra locks registrales, barridos anti-phishing 24/7 y protocolos de crisis en cada servicio.',
          highlight: 'Incluye checklist paso a paso para legal, seguridad y comunicaciones.',
        },
      ],
    },
    kit: {
      heading: 'Assets y brand kit',
      description:
        'Descarga logos, retratos, gráficos animados y visualizaciones para artículos, keynotes y podcasts.',
      usageNote: 'Cita a Traceremove y enlaza a traceremove.com cuando utilices estos recursos.',
      downloadLabel: 'Solicitar enlace de descarga',
      assets: [
        {
          id: 'logos',
          title: 'Pack de logos',
          format: 'ZIP · SVG + PNG',
          size: '8,6 MB',
          usage: 'Versiones principal, secundaria y monocroma con guía de seguridad.',
        },
        {
          id: 'founder',
          title: 'Fotografías del fundador',
          format: 'Set JPEG · 4K',
          size: '12,4 MB',
          usage: 'Retratos de TraceRemove Advisor para prensa y eventos.',
        },
        {
          id: 'motion',
          title: 'Loops animados',
          format: 'MP4 · 10 s',
          size: '24 MB',
          usage: 'Visuales abstractos con la velocidad de supresión y la subida de sentimiento.',
        },
        {
          id: 'fact-sheet',
          title: 'Ficha de compañía',
          format: 'PDF · 4 páginas',
          size: '1,2 MB',
          usage: 'Servicios, biografías de liderazgo y datos de cobertura regional.',
        },
      ],
    },
    spokespeople: {
      heading: 'Portavoces y expertos',
      description:
        'Conecta con estrategas que operan programas de protección de marca en sectores regulados y en expansión.',
      focusLabel: 'Áreas de enfoque',
      languagesLabel: 'Idiomas',
      people: [
        {
          id: 'artur',
          name: 'TraceRemove Advisor',
          role: 'Fundador & CEO',
          bio: 'Dirige respuestas de crisis, aceleración growth y comunicación ejecutiva en inglés, francés y español.',
          topics: 'Protección de marca, reputación ejecutiva, war rooms',
          languages: 'Inglés, francés, español, ruso',
        },
        {
          id: 'clara',
          name: 'Clara Martel',
          role: 'VP Operaciones de Reputación',
          bio: 'Diseña programas de autenticidad de reseñas y monitoreo asistido por IA para hotelería y fintech.',
          topics: 'Integridad de reseñas, monitoreo IA, SEO multilingüe',
          languages: 'Francés, inglés',
        },
        {
          id: 'diego',
          name: 'Diego Santos',
          role: 'Head of Digital Trust',
          bio: 'Coordina escaladas en LATAM, recuperación de dominios y alianzas con marketplaces.',
          topics: 'Integridad marketplaces, recuperación de dominios, crecimiento LATAM',
          languages: 'Español, inglés, portugués',
        },
      ],
    },
    contact: {
      heading: 'Contacto prensa',
      subtitle: 'Cuéntanos tu deadline y audiencia para preparar al portavoz y los assets adecuados.',
      details: [
        'Disponibles de 06:00 a 22:00 EST con guardia para incidentes urgentes.',
        'Los briefings incluyen visuales animados, métricas y citas multilingües listas para publicar.',
      ],
      emailLabel: 'Escribir a press@traceremove.com',
      emailHref: 'mailto:press@traceremove.com',
      phoneLabel: 'Llamar al +1 (472) 248 0235',
      phoneHref: 'tel:+16063022958',
      note: '¿Prefieres WhatsApp o Signal? Indícalo y responderemos en minutos.',
    },
  },
}

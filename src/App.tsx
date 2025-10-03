import {
  Fragment,
  type CSSProperties,
  type ChangeEvent,
  type FormEvent,
  type MouseEvent,
  type ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { Link, NavLink, Route, Routes, useLocation, useParams } from 'react-router-dom'
import {
  interfaceCopy,
  languageLabels,
  languages,
  servicePages,
  type Language,
  type ServicePageContent,
} from './data/pages'
import {
  blogArticles,
  blogTopicLabels,
  blogTopics,
  getBlogArticlePath,
  getBlogBasePath,
  type BlogArticleTranslation,
  type BlogTopic,
} from './data/blog'
import './App.css'

const useCurrentLanguage = (): Language => {
  const location = useLocation()
  const match = languages.find((lang) => location.pathname.startsWith(`/${lang}/`))
  return match ?? 'en'
}

const buildNavigation = () => {
  const structure = new Map<
    Language,
    Map<
      string,
      {
        serviceName: string
        pages: ServicePageContent[]
      }
    >
  >()

  servicePages.forEach((page) => {
    if (!structure.has(page.language)) {
      structure.set(page.language, new Map())
    }
    const serviceGroup = structure.get(page.language)!
    if (!serviceGroup.has(page.serviceKey)) {
      serviceGroup.set(page.serviceKey, {
        serviceName: page.serviceName,
        pages: [],
      })
    }
    serviceGroup.get(page.serviceKey)!.pages.push(page)
  })

  const navigation: Record<Language, { serviceName: string; pages: ServicePageContent[] }[]> = {
    en: [],
    fr: [],
    es: [],
  }

  languages.forEach((language) => {
    const groups = structure.get(language)
    if (!groups) {
      return
    }

    navigation[language] = Array.from(groups.values())
      .map((group) => ({
        serviceName: group.serviceName,
        pages: group.pages.sort((a, b) => a.industryName.localeCompare(b.industryName)),
      }))
      .sort((a, b) => a.serviceName.localeCompare(b.serviceName))
  })

  return navigation
}

const navigation = buildNavigation()

const getTeamPath = (language: Language) => (language === 'en' ? '/team' : `/${language}/team`)

const getPartnersPath = (language: Language) => (language === 'en' ? '/partners' : `/${language}/partners`)

const getJoinPath = (language: Language) => (language === 'en' ? '/join' : `/${language}/join`)

const getContactPath = (language: Language) => (language === 'en' ? '/contact' : `/${language}/contact`)

const getPrivacyPath = (language: Language) => (language === 'en' ? '/privacy' : `/${language}/privacy`)

const getTermsPath = (language: Language) => (language === 'en' ? '/terms' : `/${language}/terms`)

const localeMap: Record<Language, string> = {
  en: 'en-US',
  fr: 'fr-FR',
  es: 'es-ES',
}

const formatLocaleDate = (language: Language, value: string) =>
  new Date(value).toLocaleDateString(localeMap[language], {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

const slugifyHeading = (value: string) =>
  value
    .normalize('NFD')
    .replace(/[^\p{L}\p{N}]+/gu, '-')
    .replace(/[\u0300-\u036f]+/g, '')
    .toLowerCase()
    .replace(/(^-|-$)+/g, '')

type GrowthSparkProps = {
  variant?: 'dark' | 'light'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  ariaLabel?: string
}

const growthBarSets: Record<NonNullable<GrowthSparkProps['size']>, number[]> = {
  sm: [38, 52, 46, 68, 60],
  md: [32, 48, 60, 74, 88, 96],
  lg: [28, 44, 58, 76, 88, 98, 92],
}

const GrowthSpark = ({ variant = 'dark', size = 'md', className = '', ariaLabel }: GrowthSparkProps) => {
  const bars = growthBarSets[size]
  const step = bars.length > 1 ? 100 / (bars.length - 1) : 100
  const points = bars
    .map((height, index) => {
      const x = Math.min(100, Math.max(0, index * step))
      const y = Math.min(100, Math.max(0, 100 - height))
      return `${x.toFixed(2)},${y.toFixed(2)}`
    })
    .join(' ')

  const classes = ['growth-spark', `growth-spark--${variant}`, `growth-spark--${size}`]
  if (className) {
    classes.push(className)
  }

  return (
    <div
      className={classes.join(' ')}
      {...(ariaLabel ? { role: 'img', 'aria-label': ariaLabel } : { 'aria-hidden': true })}
    >
      <div className="growth-spark__bars">
        {bars.map((height, index) => (
          <span
            key={`${index}-${height}`}
            className="growth-spark__bar"
            style={
              {
                '--bar-height': `${height}%`,
                '--bar-delay': `${index * 0.12}s`,
              } as CSSProperties
            }
          />
        ))}
      </div>
      <svg className="growth-spark__line" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true" focusable="false">
        <polyline points={points} />
      </svg>
    </div>
  )
}

const navCopy: Record<
  Language,
  {
    services: string
    team: string
    blog: string
    partners: string
    contact: string
    callToAction: string
    tagline: string
    joinUs: string
    openMenu: string
    closeMenu: string
  }
> = {
  en: {
    services: 'Services',
    team: 'Team',
    blog: 'Blog',
    partners: 'Partners',
    contact: 'Contact',
    callToAction: 'Book a strategy call',
    tagline: 'Growth marketing, revenue design, and product storytelling for teams shipping fast.',
    joinUs: 'Join us',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
  fr: {
    services: 'Services',
    team: 'Équipe',
    blog: 'Blog',
    partners: 'Partenaires',
    contact: 'Contact',
    callToAction: 'Planifier un échange',
    tagline: 'Marketing growth, modèles de revenus et narration produit pour les équipes ambitieuses.',
    joinUs: 'Rejoignez-nous',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
  },
  es: {
    services: 'Servicios',
    team: 'Equipo',
    blog: 'Blog',
    partners: 'Partners',
    contact: 'Contacto',
    callToAction: 'Reserva una sesión estratégica',
    tagline: 'Marketing de crecimiento, diseño de ingresos y storytelling de producto para equipos ágiles.',
    joinUs: 'Únete',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
  },
}

const teamCopy: Record<
  Language,
  {
    title: string
    subtitle: string
    intro: string
    cultureHeading: string
    culturePoints: string[]
    contactPrompt: string
  }
> = {
  en: {
    title: 'Meet the Traceremove team',
    subtitle: 'A multilingual collective led by Founder & CEO Artur Ziganshin',
    intro:
      'We are designers, strategists, technologists, and analysts who build compounding growth systems across North America and Europe. Our studio thrives on experimentation, data fluency, and cross-cultural empathy.',
    cultureHeading: 'How we collaborate',
    culturePoints: [
      'Fewer, deeper engagements so every playbook is customised for your market.',
      'Design sprints with Figma, Webflow, and AI tooling to accelerate creative approvals.',
      'Signal-rich analytics dashboards with Looker Studio, Mixpanel, and custom pipelines.',
    ],
    contactPrompt: 'Ready to collaborate? Reach out and we will respond within one business day.',
  },
  fr: {
    title: "Rencontrez l'équipe Traceremove",
    subtitle: 'Un collectif multilingue dirigé par le fondateur et CEO Artur Ziganshin',
    intro:
      'Nous sommes designers, stratèges, technologues et analystes. Nous bâtissons des systèmes de croissance cumulée pour l’Amérique du Nord et l’Europe, en misant sur l’expérimentation, la donnée et l’empathie interculturelle.',
    cultureHeading: 'Notre manière de travailler',
    culturePoints: [
      'Peu de mandats en parallèle afin de personnaliser chaque dispositif au marché visé.',
      'Design sprints avec Figma, Webflow et outils IA pour accélérer les validations créatives.',
      'Tableaux de bord à forte valeur ajoutée via Looker Studio, Mixpanel et pipelines sur mesure.',
    ],
    contactPrompt: "Envie de construire ensemble ? Écrivez-nous et nous vous répondons sous un jour ouvré.",
  },
  es: {
    title: 'Conoce al equipo de Traceremove',
    subtitle: 'Un colectivo multilingüe liderado por el fundador y CEO Artur Ziganshin',
    intro:
      'Somos diseñadores, estrategas, tecnólogos y analistas que construyen sistemas de crecimiento compuesto en Norteamérica y Europa. Nuestro estudio prospera gracias a la experimentación, los datos y la empatía intercultural.',
    cultureHeading: 'Cómo colaboramos',
    culturePoints: [
      'Pocos proyectos en paralelo para personalizar cada estrategia a tu mercado.',
      'Design sprints con Figma, Webflow y herramientas de IA para acelerar la creatividad.',
      'Paneles analíticos con insight profundo usando Looker Studio, Mixpanel y pipelines a medida.',
    ],
    contactPrompt: '¿Listo para colaborar? Escríbenos y respondemos en un día hábil.',
  },
}

const partnersCopy: Record<
  Language,
  {
    title: string
    subtitle: string
    description: string
    segmentsHeading: string
    segments: { title: string; description: string }[]
    benefitsHeading: string
    benefits: string[]
    programsHeading: string
    programs: { title: string; description: string }[]
    ctaHeading: string
    ctaBody: string
  }
> = {
  en: {
    title: 'Partner with Traceremove',
    subtitle: 'Co-create go-to-market velocity across brand, demand, and product growth.',
    description:
      'We collaborate with agencies, venture studios, accelerators, and SaaS platforms that want a trusted growth operator to plug in quickly. Our team delivers multilingual positioning, revenue design, and experimentation so your portfolio can move faster.',
    segmentsHeading: 'Who we partner with',
    segments: [
      {
        title: 'Venture and accelerator programs',
        description: 'Fractional marketing leadership, narrative design, and reporting frameworks for founders raising or scaling in new markets.',
      },
      {
        title: 'Digital agencies and studios',
        description: 'White-label growth strategy, CRO, and lifecycle execution that complements your creative or engineering core.',
      },
      {
        title: 'SaaS and platform ecosystems',
        description: 'Enablement assets, joint campaigns, and product education tailored to English, French, and Spanish-speaking customers.',
      },
    ],
    benefitsHeading: 'Partner benefits',
    benefits: [
      'Multilingual delivery across English, French, and Spanish markets.',
      'Executive-level strategy that ships with hands-on execution.',
      'Flexible revenue models: retainers, rev-share, or co-marketing swaps.',
      'Shared analytics to keep stakeholders aligned on impact.',
    ],
    programsHeading: 'Engagement programs',
    programs: [
      {
        title: 'Revenue lab sprints',
        description: '90-day engagements to stand up segmentation, offer architecture, and automated nurture flows with shared reporting.',
      },
      {
        title: 'Co-marketing alliances',
        description: 'Joint workshops, webinars, and playbooks to spotlight complementary expertise and capture qualified demand.',
      },
      {
        title: 'Partner enablement',
        description: 'Localized sales decks, onboarding journeys, and success collateral so teams can activate new offerings with confidence.',
      },
    ],
    ctaHeading: 'Ready to explore a partnership?',
    ctaBody: 'Introduce your team and goals at contact@traceremove.com — we will schedule an alignment session within two business days.',
  },
  fr: {
    title: 'Collaborez avec Traceremove',
    subtitle: 'Co-construisons votre go-to-market entre brand, demand generation et croissance produit.',
    description:
      "Nous accompagnons agences, fonds, accélérateurs et plateformes SaaS qui recherchent un partenaire growth fiable. L'équipe orchestre positionnement multilingue, modèles de revenus et expérimentation pour accélérer vos portefeuilles.",
    segmentsHeading: 'Nos partenaires',
    segments: [
      {
        title: 'Fonds et accélérateurs',
        description: 'Leadership marketing fractionné, narration stratégique et frameworks de reporting pour des fondateurs en levée ou en hypercroissance.',
      },
      {
        title: 'Agences et studios digitaux',
        description: 'Stratégie growth, CRO et lifecycle en marque blanche qui complète vos pôles créatif ou technique.',
      },
      {
        title: 'Écosystèmes SaaS et plateformes',
        description: 'Assets d’activation, campagnes conjointes et éducation produit adaptés aux audiences francophones, anglophones et hispanophones.',
      },
    ],
    benefitsHeading: 'Avantages partenaires',
    benefits: [
      'Exécution multilingue anglais, français et espagnol.',
      'Stratégie senior qui s’accompagne d’une mise en œuvre opérationnelle.',
      'Modèles de collaboration flexibles : retainer, partage de revenus ou co-marketing.',
      'Tableaux de bord partagés pour piloter l’impact ensemble.',
    ],
    programsHeading: 'Programmes',
    programs: [
      {
        title: 'Sprints revenue lab',
        description: '90 jours pour structurer segmentation, offres et automatisation nurturing avec reporting partagé.',
      },
      {
        title: 'Alliances co-marketing',
        description: 'Workshops, webinaires et playbooks co-brandés pour capter une demande qualifiée.',
      },
      {
        title: 'Enablement partenaires',
        description: 'Decks commerciaux, parcours onboarding et contenus de succès localisés pour activer de nouvelles offres.',
      },
    ],
    ctaHeading: 'Discutons de votre partenariat',
    ctaBody: 'Présentez-nous votre structure et vos objectifs via contact@traceremove.com — réponse garantie sous deux jours ouvrés.',
  },
  es: {
    title: 'Haz equipo con Traceremove',
    subtitle: 'Impulsemos tu go-to-market combinando marca, demanda y crecimiento de producto.',
    description:
      'Trabajamos con agencias, fondos, aceleradoras y plataformas SaaS que necesitan un operador de growth confiable. Diseñamos posicionamiento multilingüe, modelos de ingresos y experimentos para que tu portafolio acelere.',
    segmentsHeading: 'Socios ideales',
    segments: [
      {
        title: 'Fondos y aceleradoras',
        description: 'Liderazgo de marketing fraccional, narrativa estratégica y reporting para fundadores en ronda o expansión.',
      },
      {
        title: 'Agencias y estudios digitales',
        description: 'Estrategia de growth, CRO y lifecycle bajo tu marca para complementar capacidades creativas o técnicas.',
      },
      {
        title: 'Ecosistemas SaaS y plataformas',
        description: 'Activos de enablement, campañas conjuntas y educación de producto para audiencias en inglés, francés y español.',
      },
    ],
    benefitsHeading: 'Ventajas',
    benefits: [
      'Entrega multilingüe en inglés, francés y español.',
      'Estrategia ejecutiva con implementación práctica.',
      'Modelos flexibles: retainer, revenue share o co-marketing.',
      'Analítica compartida para alinear a todos los equipos.',
    ],
    programsHeading: 'Modalidades',
    programs: [
      {
        title: 'Sprints de revenue lab',
        description: '90 días para activar segmentación, arquitectura de ofertas y automatizaciones con reporting compartido.',
      },
      {
        title: 'Alianzas de co-marketing',
        description: 'Workshops, webinars y playbooks conjuntos para captar demanda calificada.',
      },
      {
        title: 'Enablement para partners',
        description: 'Presentaciones, recorridos de onboarding y contenidos de éxito localizados para activar nuevas ofertas.',
      },
    ],
    ctaHeading: '¿Nos asociamos?',
    ctaBody: 'Cuéntanos sobre tu organización en contact@traceremove.com — coordinamos una llamada en dos días hábiles.',
  },
}

const joinCopy: Record<
  Language,
  {
    title: string
    subtitle: string
    description: string
    valuesHeading: string
    values: { title: string; description: string }[]
    rolesHeading: string
    roles: string[]
    perksHeading: string
    perks: string[]
    ctaHeading: string
    ctaBody: string
  }
> = {
  en: {
    title: 'Join the Traceremove collective',
    subtitle: 'Remote-first growth operators shaping reputation, revenue, and product stories.',
    description:
      'We are always meeting strategists, storytellers, analysts, and builders who thrive in autonomous teams. If you love shipping experiments quickly and collaborating across languages, introduce yourself.',
    valuesHeading: 'How we work',
    values: [
      {
        title: 'Outcome obsessed',
        description: 'We design with metrics in mind and reverse-engineer every deliverable to business impact.',
      },
      {
        title: 'Multilingual by default',
        description: 'We operate across English, French, and Spanish markets, respecting regional nuance and accessibility.',
      },
      {
        title: 'Craft and curiosity',
        description: 'We merge experimentation with storytelling — from AI-assisted production to polished executive narratives.',
      },
    ],
    rolesHeading: 'Focus areas we hire for',
    roles: [
      'Growth strategist (contract and fractional engagements)',
      'Lifecycle marketing and CRM specialist',
      'Brand and product copywriter with localization experience',
      'Marketing analytics engineer (Looker Studio, Mixpanel, dbt)',
    ],
    perksHeading: 'What you can expect',
    perks: [
      'Remote-first collaboration with async rituals and quarterly in-person summits.',
      'Project-based autonomy with access to our playbooks, research, and tooling stack.',
      'Opportunities to lead multilingual workshops and client strategy rooms.',
      'Transparent profit sharing on long-term retainers.',
    ],
    ctaHeading: 'Introduce yourself',
    ctaBody: 'Send your portfolio, case studies, or LinkedIn to join@traceremove.com. Tell us about the markets you know best and the outcomes you love driving.',
  },
  fr: {
    title: "Rejoignez le collectif Traceremove",
    subtitle: 'Opérateurs growth remote-first, experts en réputation, revenus et narration produit.',
    description:
      "Nous rencontrons en continu des stratèges, créatifs, analystes et builders qui aiment l’autonomie. Si vous expédiez des expériences rapidement et collaborez en plusieurs langues, parlons-nous.",
    valuesHeading: 'Notre culture',
    values: [
      {
        title: 'Obsédés par l’impact',
        description: 'Chaque livrable est relié à un indicateur business clair et mesurable.',
      },
      {
        title: 'Multilingue par défaut',
        description: 'Nous opérons en anglais, français et espagnol tout en respectant les spécificités locales.',
      },
      {
        title: 'Curiosité et craft',
        description: 'Nous marions expérimentation, IA et storytelling pour créer des expériences mémorables.',
      },
    ],
    rolesHeading: 'Profils recherchés',
    roles: [
      'Stratège growth (mission ou temps partagé)',
      'Spécialiste lifecycle & CRM',
      'Copywriter marque & produit avec expérience en localisation',
      'Marketing analytics engineer (Looker Studio, Mixpanel, dbt)',
    ],
    perksHeading: 'Ce que nous offrons',
    perks: [
      'Organisation remote-first avec rituels asynchrones et sommets trimestriels.',
      'Autonomie projet avec accès à nos playbooks, recherches et stack outils.',
      'Opportunité d’animer des workshops multilingues et des comités stratégiques.',
      'Partage transparent des profits sur les retainers long terme.',
    ],
    ctaHeading: 'Envoyez votre profil',
    ctaBody: 'Partagez portfolio, études de cas ou LinkedIn via join@traceremove.com en précisant vos marchés et vos victoires préférées.',
  },
  es: {
    title: 'Únete al colectivo Traceremove',
    subtitle: 'Operadores de growth remotos que diseñan reputación, ingresos y relatos de producto.',
    description:
      'Buscamos estrategas, storytellers, analistas y makers que disfruten trabajar con autonomía. Si te emociona lanzar experimentos rápidos y colaborar en varios idiomas, preséntate.',
    valuesHeading: 'Nuestra cultura',
    values: [
      {
        title: 'Obsesión por el resultado',
        description: 'Todo entregable se conecta con métricas de negocio tangibles.',
      },
      {
        title: 'Multilingües de origen',
        description: 'Operamos en inglés, francés y español cuidando el contexto local.',
      },
      {
        title: 'Curiosidad y oficio',
        description: 'Combinamos experimentación, IA y narrativa para experiencias memorables.',
      },
    ],
    rolesHeading: 'Roles que buscamos',
    roles: [
      'Estratega de growth (contrato o fractional)',
      'Especialista en lifecycle marketing y CRM',
      'Copywriter de marca y producto con localización',
      'Ingeniero/a de analytics marketing (Looker Studio, Mixpanel, dbt)',
    ],
    perksHeading: 'Lo que ofrecemos',
    perks: [
      'Trabajo remoto-first con rituales asíncronos y encuentros trimestrales.',
      'Autonomía en proyectos con acceso a nuestros playbooks y stack de herramientas.',
      'Posibilidad de liderar workshops y salas estratégicas multilingües.',
      'Revenue share transparente en retainers de larga duración.',
    ],
    ctaHeading: 'Preséntate',
    ctaBody: 'Comparte tu portfolio, casos o LinkedIn en join@traceremove.com. Cuéntanos los mercados que mejor conoces y los resultados que disfrutas conseguir.',
  },
}

interface TeamMember {
  name: string
  role: string
  location: string
  bio: Record<Language, string>
  focus: Record<Language, string[]>
  color: string
}

const teamMembers: TeamMember[] = [
  {
    name: 'Artur Ziganshin',
    role: 'Founder & CEO',
    location: 'Toronto · Montréal',
    bio: {
      en: 'Artur steers brand, lifecycle, and product GTM initiatives for venture-backed SaaS and commerce teams. He leads multilingual strategy rooms and keeps every engagement grounded in measurable impact.',
      fr: 'Artur pilote les initiatives de marque, lifecycle et go-to-market produit pour des équipes SaaS et e-commerce financées. Il orchestre des workshops multilingues et relie chaque programme à des métriques tangibles.',
      es: 'Artur dirige iniciativas de marca, lifecycle y go-to-market de producto para equipos SaaS y comercio respaldados por venture capital. Conduce workshops multilingües y ancla cada programa en métricas claras.',
    },
    focus: {
      en: ['Strategic narrative architecture', 'Revenue operations modelling', 'Executive advisory'],
      fr: ['Architecture narrative stratégique', 'Modélisation des opérations revenue', 'Conseil exécutif'],
      es: ['Arquitectura narrativa estratégica', 'Modelado de revenue operations', 'Asesoría ejecutiva'],
    },
    color: '#38bdf8',
  },
  {
    name: 'Maya Lavoie',
    role: 'Design Systems Director',
    location: 'Québec City',
    bio: {
      en: 'Maya crafts high-velocity brand systems spanning product UI, marketing, and sales enablement. She blends motion design, illustration, and accessibility audits for every launch.',
      fr: 'Maya conçoit des systèmes de marque à forte cadence couvrant UI produit, marketing et sales enablement. Elle marie motion design, illustration et audits d’accessibilité pour chaque lancement.',
      es: 'Maya diseña sistemas de marca de alta velocidad que conectan UI de producto, marketing y enablement comercial. Integra motion design, ilustración y auditorías de accesibilidad en cada entrega.',
    },
    focus: {
      en: ['Design systems & tokens', 'Creative automation', 'Motion storytelling'],
      fr: ['Design systems & tokens', 'Automatisation créative', 'Motion storytelling'],
      es: ['Design systems y tokens', 'Automatización creativa', 'Motion storytelling'],
    },
    color: '#f97316',
  },
  {
    name: 'Luis Mendoza',
    role: 'Growth Engineering Lead',
    location: 'Madrid',
    bio: {
      en: 'Luis codes experimentation frameworks, analytics pipelines, and marketing automation that tie campaign insights to product velocity.',
      fr: "Luis développe des frameworks d'expérimentation, des pipelines analytics et des automatisations marketing reliant chaque campagne au produit.",
      es: 'Luis desarrolla frameworks de experimentación, pipelines de analítica y automatizaciones de marketing que conectan cada campaña con el producto.',
    },
    focus: {
      en: ['Data engineering', 'Attribution modelling', 'Lifecycle automation'],
      fr: ['Data engineering', "Modélisation d'attribution", 'Automatisation lifecycle'],
      es: ['Ingeniería de datos', 'Modelado de atribución', 'Automatización lifecycle'],
    },
    color: '#a855f7',
  },
  {
    name: 'Sofia Martínez',
    role: 'Client Strategy Partner',
    location: 'Barcelona · Remote',
    bio: {
      en: 'Sofia architects go-to-market roadmaps and facilitates multilingual revenue rooms to keep marketing, product, and sales in sync.',
      fr: 'Sofia structure des roadmaps go-to-market et anime des comités revenue multilingues pour aligner marketing, produit et ventes.',
      es: 'Sofia estructura roadmaps go-to-market y facilita revenue rooms multilingües que alinean marketing, producto y ventas.',
    },
    focus: {
      en: ['Integrated GTM planning', 'Stakeholder facilitation', 'Enablement playbooks'],
      fr: ['Planification GTM intégrée', 'Facilitation de parties prenantes', 'Playbooks d’enablement'],
      es: ['Planificación GTM integrada', 'Facilitación de stakeholders', 'Playbooks de enablement'],
    },
    color: '#22d3ee',
  },
]

type ServiceAccent = 'cyan' | 'violet' | 'emerald' | 'amber' | 'blue'

interface PrimaryService {
  key: string
  accent: ServiceAccent
  badge: Record<Language, string>
  title: Record<Language, string>
  description: Record<Language, string>
  price: Record<Language, string>
  bullets: Record<Language, string[]>
}

const primaryServices: PrimaryService[] = [
  {
    key: 'trace-removal',
    accent: 'cyan',
    badge: {
      en: 'Trace removal',
      fr: 'Effacement',
      es: 'Eliminación',
    },
    title: {
      en: 'Digital trace removal',
      fr: 'Suppression d’empreinte numérique',
      es: 'Eliminación de huella digital',
    },
    description: {
      en: 'Erase damaging search results, leaked assets, and platform footprints with legal-safe takedown workflows.',
      fr: 'Nous effaçons résultats de recherche nuisibles, fuites d’actifs et traces de plateformes via des workflows conformes.',
      es: 'Borramos resultados nocivos, activos filtrados y rastros en plataformas con flujos de baja conformes.',
    },
    price: {
      en: 'From $6,400 USD',
      fr: 'À partir de 6 400 $ US',
      es: 'Desde 6 400 USD',
    },
    bullets: {
      en: [
        'Crisis assessment in under 48 hours',
        'Coordinated removals across press, forums, and clouds',
        'Escalation pods for executives and high-risk teams',
      ],
      fr: [
        'Diagnostic de crise en moins de 48 h',
        'Suppression coordonnée presse, forums et clouds',
        'Pods d’escalade pour dirigeants et équipes sensibles',
      ],
      es: [
        'Evaluación de crisis en menos de 48 h',
        'Eliminaciones coordinadas en prensa, foros y nubes',
        'Pods de escalamiento para ejecutivos y equipos críticos',
      ],
    },
  },
  {
    key: 'serm',
    accent: 'violet',
    badge: {
      en: 'SERM',
      fr: 'SERM',
      es: 'SERM',
    },
    title: {
      en: 'Search reputation management',
      fr: 'Gestion de réputation search',
      es: 'Gestión de reputación en buscadores',
    },
    description: {
      en: 'Own every SERP pixel with always-on search monitoring, authority content, and knowledge panel optimisation.',
      fr: 'Maîtrisez chaque pixel SERP grâce au monitoring continu, aux contenus d’autorité et à l’optimisation du knowledge panel.',
      es: 'Control total del SERP con monitoreo continuo, contenidos de autoridad y optimización del knowledge panel.',
    },
    price: {
      en: 'From $4,900 USD / month',
      fr: 'À partir de 4 900 $ US / mois',
      es: 'Desde 4 900 USD / mes',
    },
    bullets: {
      en: [
        'Always-on search result audits',
        'Content seeding and knowledge panel optimisation',
        'Monthly sentiment dashboards and alerts',
      ],
      fr: [
        'Audit continu des résultats de recherche',
        'Activation de contenus et optimisation du knowledge panel',
        'Tableaux de bord de sentiment et alertes mensuelles',
      ],
      es: [
        'Auditoría continua de resultados de búsqueda',
        'Siembra de contenidos y optimización del knowledge panel',
        'Dashboards de sentimiento y alertas mensuales',
      ],
    },
  },
  {
    key: 'cyber-monitoring',
    accent: 'emerald',
    badge: {
      en: 'Cyber monitoring',
      fr: 'Cyber monitoring',
      es: 'Ciber monitoreo',
    },
    title: {
      en: 'Cybersecurity monitoring',
      fr: 'Monitoring cybersécurité',
      es: 'Monitoreo de ciberseguridad',
    },
    description: {
      en: 'Detect breaches, leaks, and impersonations early with continuous dark web, cloud, and device intelligence.',
      fr: 'Détectez fuites, intrusions et usurpations via une veille continue dark web, cloud et endpoints.',
      es: 'Detecta filtraciones, brechas e impersonaciones con inteligencia continua en dark web, cloud y endpoints.',
    },
    price: {
      en: 'From $7,800 USD / quarter',
      fr: 'À partir de 7 800 $ US / trimestre',
      es: 'Desde 7 800 USD / trimestre',
    },
    bullets: {
      en: [
        'Threat intelligence fused with brand risk scoring',
        'Incident playbooks aligned to SOC workflows',
        'Executive alerts with multilingual escalation',
      ],
      fr: [
        'Veille de menaces couplée à un scoring de risque marque',
        'Playbooks d’incident alignés sur vos workflows SOC',
        'Alertes dirigeants avec escalade multilingue',
      ],
      es: [
        'Inteligencia de amenazas unida a scoring de riesgo de marca',
        'Playbooks de incidentes alineados al SOC',
        'Alertas ejecutivas con escalamiento multilingüe',
      ],
    },
  },
  {
    key: 'design',
    accent: 'amber',
    badge: {
      en: 'Design ops',
      fr: 'Design ops',
      es: 'Design ops',
    },
    title: {
      en: 'Product & web design systems',
      fr: 'Systèmes de design produit & web',
      es: 'Sistemas de diseño digital',
    },
    description: {
      en: 'Prototype, test, and deploy immersive interfaces that translate trust into measurable activation.',
      fr: 'Prototyper, tester et livrer des interfaces immersives qui convertissent la confiance en activation mesurable.',
      es: 'Prototipamos, testeamos y lanzamos interfaces inmersivas que convierten confianza en activación medible.',
    },
    price: {
      en: 'From $5,600 USD',
      fr: 'À partir de 5 600 $ US',
      es: 'Desde 5 600 USD',
    },
    bullets: {
      en: [
        'Research-driven UX audits and journeys',
        'Design systems ready for dev handoff',
        'Motion language and accessibility baked in',
      ],
      fr: [
        'Audits UX et parcours guidés par la recherche',
        'Design systems prêts pour le handoff dev',
        'Langage motion et accessibilité intégrés',
      ],
      es: [
        'Auditorías UX guiadas por research',
        'Design systems listos para handoff dev',
        'Lenguaje de motion y accesibilidad integrados',
      ],
    },
  },
  {
    key: 'web-builds',
    accent: 'blue',
    badge: {
      en: 'Web builds',
      fr: 'Sites web',
      es: 'Sitios web',
    },
    title: {
      en: 'Website development sprints',
      fr: 'Sprints de développement web',
      es: 'Sprints de desarrollo web',
    },
    description: {
      en: 'Ship multilingual, high-performance websites with pricing clarity, modular pages, and analytics baked in.',
      fr: 'Livrez des sites multilingues haute performance avec tarification claire, pages modulaires et analytics intégrés.',
      es: 'Lanza sitios multilingües de alto rendimiento con precios claros, páginas modulares y analytics integrados.',
    },
    price: {
      en: 'From $8,900 USD',
      fr: 'À partir de 8 900 $ US',
      es: 'Desde 8 900 USD',
    },
    bullets: {
      en: [
        'Discovery, copy, and SEO localisation included',
        'Component-based builds in Webflow, Next, or Shopify',
        'Performance budgets with launch QA & training',
      ],
      fr: [
        'Discovery, contenus et SEO localisé inclus',
        'Développements modulaires Webflow, Next ou Shopify',
        'Budgets de performance avec QA de lancement et formation',
      ],
      es: [
        'Discovery, contenidos y SEO localizado incluidos',
        'Construcciones modulares en Webflow, Next o Shopify',
        'Presupuestos de performance con QA de lanzamiento y training',
      ],
    },
  },
]

const homeServicesCopy: Record<
  Language,
  {
    title: string
    description: string
  }
> = {
  en: {
    title: 'Precision programs that protect and accelerate your brand',
    description:
      'Every engagement is staffed by Artur Ziganshin and a senior pod covering reputation, security, design, and engineering so you launch with confidence.',
  },
  fr: {
    title: 'Des programmes précis pour protéger et accélérer votre marque',
    description:
      'Chaque mission est menée par Artur Ziganshin avec un pod senior couvrant réputation, sécurité, design et engineering pour lancer avec confiance.',
  },
  es: {
    title: 'Programas precisos que protegen y aceleran tu marca',
    description:
      'Cada colaboración está liderada por Artur Ziganshin con un pod senior de reputación, seguridad, diseño y tecnología para lanzar con confianza.',
  },
}

const homeHeroHeading: Record<Language, string> = {
  en: 'Multilingual service blueprints engineered for momentum.',
  fr: 'Des plans de services multilingues conçus pour accélérer votre momentum.',
  es: 'Planos de servicios multilingües diseñados para impulsar tu crecimiento.',
}

const homeFounderCopy: Record<Language, string> = {
  en: 'Founder & CEO leading every engagement with a senior core team operating across English, French, and Spanish markets.',
  fr: 'Fondateur et CEO pilotant chaque mission avec un noyau senior actif sur les marchés anglophone, francophone et hispanophone.',
  es: 'Fundador y CEO que lidera cada proyecto con un núcleo senior que opera en los mercados anglófono, francófono e hispanohablante.',
}

const homeTeamLinkCopy: Record<Language, string> = {
  en: 'Meet the team',
  fr: "Rencontrer l'équipe",
  es: 'Conoce al equipo',
}

const serviceCardCta: Record<Language, string> = {
  en: 'Book this service',
  fr: 'Réserver ce service',
  es: 'Reservar este servicio',
}

const HomePage = () => {
  const currentLanguage = useCurrentLanguage()
  const summaries = languages.map((language) => {
    const count = servicePages.filter((page) => page.language === language).length
    return { language, count }
  })

  const heroCta = navCopy[currentLanguage].callToAction
  const heroHeading = homeHeroHeading[currentLanguage]
  const serviceIntro = homeServicesCopy[currentLanguage]
  const serviceCta = serviceCardCta[currentLanguage]
  const founderNote = homeFounderCopy[currentLanguage]
  const teamLinkCopy = homeTeamLinkCopy[currentLanguage]
  const localizedServices = primaryServices.map((service) => ({
    key: service.key,
    accent: service.accent,
    badge: service.badge[currentLanguage],
    title: service.title[currentLanguage],
    description: service.description[currentLanguage],
    price: service.price[currentLanguage],
    bullets: service.bullets[currentLanguage],
    contactHref: `mailto:contact@traceremove.com?subject=${encodeURIComponent(service.title[currentLanguage])}`,
  }))

  return (
    <section className="home">
      <div className="home-hero">
        <div className="home-hero-copy">
          <span className="home-badge">Traceremove · Digital Agency</span>
          <h1>{heroHeading}</h1>
          <p>{navCopy[currentLanguage].tagline}</p>
          <div className="home-cta">
            <a className="button primary" href="mailto:contact@traceremove.com">
              contact@traceremove.com
            </a>
            <a className="button secondary" href="tel:+16063022958">
              +1 606 302 2958
            </a>
          </div>
          <div className="home-contact">
            <p>
              <strong>Artur Ziganshin</strong> — {founderNote}
            </p>
            <Link className="button ghost" to={getTeamPath(currentLanguage)}>
              {teamLinkCopy}
            </Link>
          </div>
        </div>
        <div className="home-hero-visual" aria-hidden="true">
          <div className="home-hero-visual__field" />
          <img src="/traceremove-orbit.svg" alt="" loading="lazy" />
          <GrowthSpark variant="light" size="md" className="home-hero-graph" />
          <GrowthSpark variant="dark" size="sm" className="home-hero-graph home-hero-graph--offset" />
        </div>
      </div>

      <section className="home-services">
        <header className="home-services__header">
          <h2>{serviceIntro.title}</h2>
          <p>{serviceIntro.description}</p>
        </header>
        <div className="home-services__grid">
          {localizedServices.map((service) => (
            <article key={service.key} className={`home-service-card home-service-card--${service.accent}`}>
              <div className="home-service-card__inner">
                <span className="home-service-card__badge">{service.badge}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <p className="home-service-card__price">{service.price}</p>
                <ul>
                  {service.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
              <a className="button primary" href={service.contactHref}>
                {serviceCta}
              </a>
            </article>
          ))}
        </div>
      </section>

      <div className="home-grid">
        {summaries.map(({ language, count }) => (
          <article key={language} className="home-card">
            <header>
              <h2>{languageLabels[language]}</h2>
              <p>{count} tailored pages</p>
            </header>
            <p>
              Navigate all {languageLabels[language]} services, from positioning and creative systems to lifecycle
              automation. Each page outlines outcomes, investment levels, and the rituals we run with your team.
            </p>
            <Link className="button tertiary" to={navigation[language][0]?.pages[0]?.path ?? '/'}>
              {language === 'en' && 'Explore English services'}
              {language === 'fr' && 'Découvrir les services'}
              {language === 'es' && 'Explorar servicios'}
            </Link>
          </article>
        ))}
      </div>

      <div className="home-panels">
        <article className="home-panel">
          <h3>Immersive launch playbooks</h3>
          <p>
            From narrative strategy to creative operations, every service page details timelines, pricing, and success
            metrics so stakeholders can align instantly.
          </p>
        </article>
        <article className="home-panel">
          <h3>Data-synced revenue ops</h3>
          <p>
            We stitch dashboards, attribution models, and experimentation cadences to activate multi-market growth with
            one unified team.
          </p>
        </article>
        <article className="home-panel">
          <h3>Leadership-level partnership</h3>
          <p>
            You work directly with Artur Ziganshin and our senior partners—no hand-offs, just outcomes delivered with
            precision.
          </p>
        </article>
      </div>

      <div className="home-banner">
        <p>
          {heroCta} — <a href="mailto:contact@traceremove.com">contact@traceremove.com</a> ·{' '}
          <a href="tel:+16063022958">+1 606 302 2958</a>
        </p>
      </div>
    </section>
  )
}

const ServicePageView = ({ page }: { page: ServicePageContent }) => {
  const labels = interfaceCopy[page.language]
  return (
    <article className="service-page">
      <header className="service-hero">
        <div className="service-hero-copy">
          <p className="service-preheading">{page.hero.preheading}</p>
          <h1>{page.hero.heading}</h1>
          <p className="service-subheading">{page.hero.subheading}</p>
          <div className="service-cta-group">
            <a href="#contact" className="button primary">
              {page.hero.primaryCta}
            </a>
            <a href="#case-study" className="button secondary">
              {page.hero.secondaryCta}
            </a>
          </div>
        </div>
        <div className="service-hero-visual" aria-hidden="true">
          <GrowthSpark variant="light" size="sm" className="service-hero-graph" />
          <img src="/traceremove-orbit.svg" alt="" loading="lazy" />
        </div>
      </header>

      <section className="service-section">
        <h2>{labels.overview}</h2>
        <div className="service-two-column">
          {page.overview.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="service-section">
        <h2>{labels.highlights}</h2>
        <ul className="service-highlight-list">
          {page.serviceHighlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </section>

      <section className="service-section">
        <h2>{labels.packages}</h2>
        <div className="package-grid">
          {page.packages.map((pkg) => (
            <article key={pkg.name} className="package-card">
              <header>
                <h3>{pkg.name}</h3>
                <p className="package-price">{pkg.price}</p>
              </header>
              <p>{pkg.description}</p>
              <ul>
                {pkg.deliverables.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="service-section">
        <h2>{labels.differentiators}</h2>
        <ul className="service-highlight-list">
          {page.differentiators.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="service-section">
        <h2>{labels.process}</h2>
        <ol className="process-steps">
          {page.process.map((step) => (
            <li key={step.title}>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="service-section">
        <h2>{labels.metrics}</h2>
        <ul className="metrics-list">
          {page.metrics.map((metric) => (
            <li key={metric}>{metric}</li>
          ))}
        </ul>
      </section>

      <section id="case-study" className="service-section">
        <h2>{labels.caseStudy}</h2>
        <article className="case-study">
          <h3>{page.caseStudy.title}</h3>
          <p>{page.caseStudy.summary}</p>
          <p className="case-impact">{page.caseStudy.impact}</p>
        </article>
      </section>

      <section className="service-section">
        <h2>{labels.faq}</h2>
        <dl className="faq-list">
          {page.faq.map((item) => (
            <div key={item.question} className="faq-item">
              <dt>{item.question}</dt>
              <dd>{item.answer}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section id="contact" className="service-section contact-section">
        <h2>{labels.contactHeading}</h2>
        <p>{page.contactPrompt}</p>
        <div className="contact-actions">
          <a className="button primary" href="mailto:contact@traceremove.com">
            contact@traceremove.com
          </a>
          <a className="button secondary" href="tel:+16063022958">
            +1 606 302 2958
          </a>
        </div>
      </section>
    </article>
  )
}

const TeamPage = () => {
  const language = useCurrentLanguage()
  const copy = teamCopy[language]

  return (
    <article className="team-page">
      <header className="team-hero">
        <div className="team-hero-copy">
          <p className="team-preheading">Traceremove</p>
          <h1>{copy.title}</h1>
          <p className="team-subheading">{copy.subtitle}</p>
          <p>{copy.intro}</p>
        </div>
        <div className="team-hero-visual" aria-hidden="true">
          <GrowthSpark variant="light" size="md" className="team-hero-graph" />
          <img src="/traceremove-orbit.svg" alt="" loading="lazy" />
        </div>
      </header>

      <section className="team-grid">
        {teamMembers.map((member) => (
          <article key={member.name} className="team-card">
            <div className="team-card-visual" style={{ background: member.color }} aria-hidden="true">
              <span>{member.name[0]}</span>
            </div>
            <div className="team-card-body">
              <header>
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-location">{member.location}</p>
              </header>
              <p>{member.bio[language]}</p>
              <ul>
                {member.focus[language].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section className="team-culture">
        <h2>{copy.cultureHeading}</h2>
        <ul>
          {copy.culturePoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
        <div className="team-contact">
          <p>{copy.contactPrompt}</p>
          <div className="team-contact-actions">
            <a className="button primary" href="mailto:contact@traceremove.com">
              contact@traceremove.com
            </a>
            <a className="button secondary" href="tel:+16063022958">
              +1 606 302 2958
            </a>
          </div>
        </div>
      </section>
    </article>
  )
}

const PartnersPage = () => {
  const language = useCurrentLanguage()
  const copy = partnersCopy[language]

  return (
    <article className="partners-page">
      <header className="partners-hero">
        <div className="partners-hero__copy">
          <p className="partners-kicker">Alliances</p>
          <h1>{copy.title}</h1>
          <p className="partners-hero__subtitle">{copy.subtitle}</p>
          <p>{copy.description}</p>
        </div>
        <div className="partners-hero__card" aria-hidden="true">
          <GrowthSpark variant="light" size="sm" className="partners-hero-graph" />
          <p className="partners-hero__tag">EN · FR · ES</p>
          <h2>Co-create velocity</h2>
          <p>Growth operating partners for founders, agencies, and platforms.</p>
        </div>
      </header>

      <section className="partners-section">
        <h2>{copy.segmentsHeading}</h2>
        <div className="partners-grid">
          {copy.segments.map((segment) => (
            <article key={segment.title} className="partners-card">
              <h3>{segment.title}</h3>
              <p>{segment.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="partners-section">
        <h2>{copy.benefitsHeading}</h2>
        <ul className="partners-benefits">
          {copy.benefits.map((benefit) => (
            <li key={benefit}>{benefit}</li>
          ))}
        </ul>
      </section>

      <section className="partners-section">
        <h2>{copy.programsHeading}</h2>
        <div className="partners-programs">
          {copy.programs.map((program) => (
            <article key={program.title} className="partners-program">
              <h3>{program.title}</h3>
              <p>{program.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="partners-cta">
        <div>
          <h2>{copy.ctaHeading}</h2>
          <p>{copy.ctaBody}</p>
        </div>
        <div className="partners-cta__actions">
          <a className="button primary" href="mailto:contact@traceremove.com?subject=Partnership inquiry">
            contact@traceremove.com
          </a>
          <a className="button secondary" href="tel:+16063022958">
            +1 606 302 2958
          </a>
        </div>
      </section>
    </article>
  )
}

const JoinPage = () => {
  const language = useCurrentLanguage()
  const copy = joinCopy[language]

  return (
    <article className="join-page">
      <header className="join-hero">
        <div className="join-hero__copy">
          <p className="join-kicker">Careers</p>
          <h1>{copy.title}</h1>
          <p className="join-hero__subtitle">{copy.subtitle}</p>
          <p>{copy.description}</p>
        </div>
        <div className="join-hero__card" aria-hidden="true">
          <GrowthSpark variant="light" size="sm" className="join-hero-graph" />
          <p>Remote · Multilingual</p>
          <h2>Build with us</h2>
          <p>Growth designers, analysts, storytellers, and operators.</p>
        </div>
      </header>

      <section className="join-section">
        <h2>{copy.valuesHeading}</h2>
        <div className="join-values">
          {copy.values.map((value) => (
            <article key={value.title} className="join-value">
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="join-section">
        <h2>{copy.rolesHeading}</h2>
        <ul className="join-roles">
          {copy.roles.map((role) => (
            <li key={role}>{role}</li>
          ))}
        </ul>
      </section>

      <section className="join-section">
        <h2>{copy.perksHeading}</h2>
        <ul className="join-perks">
          {copy.perks.map((perk) => (
            <li key={perk}>{perk}</li>
          ))}
        </ul>
      </section>

      <section className="join-cta">
        <div>
          <h2>{copy.ctaHeading}</h2>
          <p>{copy.ctaBody}</p>
        </div>
        <div className="join-cta__actions">
          <a className="button primary" href="mailto:join@traceremove.com">
            join@traceremove.com
          </a>
          <a className="button ghost" href="https://www.linkedin.com/company/traceremove/jobs/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </section>
    </article>
  )
}

const contactCopy: Record<
  Language,
  {
    kicker: string
    title: string
    subtitle: string
    intro: string
    formTitle: string
    detailTitle: string
    detailPoints: string[]
    successTitle: string
    successMessage: string
    submit: string
    legal: string
    fields: {
      name: { label: string; placeholder: string }
      email: { label: string; placeholder: string }
      company: { label: string; placeholder: string }
      phone: { label: string; placeholder: string }
      message: { label: string; placeholder: string }
    }
  }
> = {
  en: {
    kicker: 'Contact Traceremove',
    title: 'Design your next reputation breakthrough',
    subtitle: 'Share your objectives and we will craft a tailored response within one business day.',
    intro:
      'Tell us about your roadmap, KPIs, and reputation challenges. Our multilingual team will assemble a bespoke growth and risk mitigation program.',
    formTitle: 'Send us a note',
    detailTitle: 'Prefer a direct line?',
    detailPoints: [
      'Email contact@traceremove.com for quick scoping questions and proposals.',
      'Call +1 606 302 2958 Monday to Friday, 9am–6pm EST for immediate assistance.',
      'Book a 30-minute strategy session to leave with a prioritised roadmap and next steps.',
    ],
    successTitle: 'Thanks for reaching out',
    successMessage: 'We will review your message and respond within one business day.',
    submit: 'Send message',
    legal: 'By submitting this form you agree to be contacted about Traceremove services. We respect your inbox and privacy.',
    fields: {
      name: { label: 'Full name', placeholder: 'Jane Doe' },
      email: { label: 'Work email', placeholder: 'jane@company.com' },
      company: { label: 'Company or team', placeholder: 'Acme Corp' },
      phone: { label: 'Phone (optional)', placeholder: '+1 555 555 5555' },
      message: { label: 'How can we help?', placeholder: 'Share goals, timelines, or reputation risks…' },
    },
  },
  fr: {
    kicker: 'Contact Traceremove',
    title: 'Imaginez votre prochaine percée de réputation',
    subtitle: 'Partagez vos objectifs et nous vous envoyons une proposition sous 24 h.',
    intro:
      'Parlez-nous de votre feuille de route, de vos indicateurs clés et des défis réputationnels. Notre équipe multilingue bâtira un programme sur mesure.',
    formTitle: 'Écrivez-nous',
    detailTitle: 'Besoin d’un échange direct ?',
    detailPoints: [
      'Écrivez à contact@traceremove.com pour un cadrage rapide de votre projet.',
      'Appelez le +1 606 302 2958 du lundi au vendredi, 9h–18h EST.',
      'Réservez une session stratégique de 30 minutes pour repartir avec un plan priorisé.',
    ],
    successTitle: 'Merci pour votre message',
    successMessage: 'Nous revenons vers vous sous un jour ouvré.',
    submit: 'Envoyer',
    legal: 'En envoyant ce formulaire, vous acceptez que nous vous contactions au sujet de nos services. Vos données restent confidentielles.',
    fields: {
      name: { label: 'Nom complet', placeholder: 'Jeanne Dupont' },
      email: { label: 'Email professionnel', placeholder: 'jeanne@entreprise.com' },
      company: { label: 'Entreprise ou équipe', placeholder: 'Entreprise Exemple' },
      phone: { label: 'Téléphone (optionnel)', placeholder: '+33 6 12 34 56 78' },
      message: { label: 'Comment pouvons-nous aider ?', placeholder: 'Partagez vos objectifs, délais ou risques réputationnels…' },
    },
  },
  es: {
    kicker: 'Contacto Traceremove',
    title: 'Diseña tu próximo avance de reputación',
    subtitle: 'Comparte tus objetivos y enviaremos una propuesta en menos de 24 horas.',
    intro:
      'Cuéntanos tu hoja de ruta, métricas clave y retos de reputación. Nuestro equipo multilingüe armará un programa hecho a medida.',
    formTitle: 'Escríbenos',
    detailTitle: '¿Prefieres un contacto directo?',
    detailPoints: [
      'Escribe a contact@traceremove.com para dudas rápidas sobre alcance y propuestas.',
      'Llama al +1 606 302 2958 de lunes a viernes, 9h–18h EST.',
      'Agenda una sesión estratégica de 30 minutos y obtén un plan priorizado.',
    ],
    successTitle: 'Gracias por escribirnos',
    successMessage: 'Revisaremos tu mensaje y responderemos en un día hábil.',
    submit: 'Enviar mensaje',
    legal: 'Al enviar aceptas que te contactemos sobre los servicios de Traceremove. Protegemos tu privacidad.',
    fields: {
      name: { label: 'Nombre completo', placeholder: 'Ana Pérez' },
      email: { label: 'Correo profesional', placeholder: 'ana@empresa.com' },
      company: { label: 'Empresa o equipo', placeholder: 'Empresa Ejemplo' },
      phone: { label: 'Teléfono (opcional)', placeholder: '+34 600 123 456' },
      message: { label: '¿Cómo podemos ayudar?', placeholder: 'Comparte objetivos, plazos o riesgos de reputación…' },
    },
  },
}

const ContactPage = ({ language }: { language: Language }) => {
  const copy = contactCopy[language]
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (field: keyof typeof formData) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      if (submitted) {
        setSubmitted(false)
      }
      const value = event.target.value
      setFormData((prev) => ({
        ...prev,
        [field]: value,
      }))
    }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
    setFormData({ name: '', email: '', company: '', phone: '', message: '' })
  }

  return (
    <section className="contact-page">
      <header className="contact-hero">
        <p className="contact-kicker">{copy.kicker}</p>
        <h1>{copy.title}</h1>
        <p className="contact-subtitle">{copy.subtitle}</p>
        <p className="contact-intro">{copy.intro}</p>
      </header>
      <div className="contact-grid">
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <h2>{copy.formTitle}</h2>
          <div className="contact-form__fields">
            <div className="contact-field">
              <label htmlFor="contact-name">{copy.fields.name.label}</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder={copy.fields.name.placeholder}
                value={formData.name}
                onChange={handleChange('name')}
                required
              />
            </div>
            <div className="contact-field">
              <label htmlFor="contact-email">{copy.fields.email.label}</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder={copy.fields.email.placeholder}
                value={formData.email}
                onChange={handleChange('email')}
                required
              />
            </div>
            <div className="contact-field">
              <label htmlFor="contact-company">{copy.fields.company.label}</label>
              <input
                id="contact-company"
                name="company"
                type="text"
                autoComplete="organization"
                placeholder={copy.fields.company.placeholder}
                value={formData.company}
                onChange={handleChange('company')}
              />
            </div>
            <div className="contact-field">
              <label htmlFor="contact-phone">{copy.fields.phone.label}</label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder={copy.fields.phone.placeholder}
                value={formData.phone}
                onChange={handleChange('phone')}
              />
            </div>
            <div className="contact-field contact-field--full">
              <label htmlFor="contact-message">{copy.fields.message.label}</label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                placeholder={copy.fields.message.placeholder}
                value={formData.message}
                onChange={handleChange('message')}
                required
              />
            </div>
          </div>
          <button type="submit" className="button primary contact-submit">
            {copy.submit}
          </button>
          {submitted && (
            <div className="contact-success" role="status" aria-live="polite">
              <h3>{copy.successTitle}</h3>
              <p>{copy.successMessage}</p>
            </div>
          )}
          <p className="contact-legal">{copy.legal}</p>
        </form>
        <aside className="contact-details">
          <h2>{copy.detailTitle}</h2>
          <ul>
            {copy.detailPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <div className="contact-direct">
            <a className="button primary" href="mailto:contact@traceremove.com">
              contact@traceremove.com
            </a>
            <a className="button secondary" href="tel:+16063022958">
              +1 606 302 2958
            </a>
          </div>
        </aside>
      </div>
    </section>
  )
}

const NotFound = () => (
  <section className="service-page">
    <header className="service-hero">
      <div className="service-hero-copy">
        <p className="service-preheading">Traceremove</p>
        <h1>We couldn&apos;t find that page.</h1>
        <p className="service-subheading">Explore our services and choose the program that fits your roadmap.</p>
        <Link className="button primary" to="/">
          Back to overview
        </Link>
      </div>
      <div className="service-hero-visual" aria-hidden="true">
        <img src="/traceremove-orbit.svg" alt="" loading="lazy" />
      </div>
    </header>
  </section>
)

const blogListCopy: Record<
  Language,
  {
    kicker: string
    title: string
    subtitle: string
    intro: string
    readArticle: string
    filtersTitle: string
    filtersDescription: string
    topicsLabel: string
    allTopics: string
    searchLabel: string
    searchPlaceholder: string
    clearSearch: string
    emptyTitle: string
    emptyDescription: string
    resetFilters: string
    featuredLabel: string
  }
> = {
  en: {
    kicker: 'Traceremove Blog',
    title: 'Journal for reputation-led teams',
    subtitle: 'Frameworks across ORM, AI, cybersecurity, SEO, and web design.',
    intro:
      'Explore the operating manuals we use with clients shipping fast. Every article includes actionable workflows, checklists, and measurement rituals you can adapt today.',
    readArticle: 'Read article',
    filtersTitle: 'Refine the insights',
    filtersDescription:
      'Toggle focus areas or search keywords to surface the playbooks that match your growth moment.',
    topicsLabel: 'Filter by topic',
    allTopics: 'All topics',
    searchLabel: 'Search the library',
    searchPlaceholder: 'Search articles…',
    clearSearch: 'Clear search',
    emptyTitle: 'No articles match yet',
    emptyDescription: 'Try another keyword or reset the filters to explore the full library.',
    resetFilters: 'Reset filters',
    featuredLabel: 'Featured insight',
  },
  fr: {
    kicker: 'Blog Traceremove',
    title: 'Le journal des équipes guidées par la réputation',
    subtitle: 'Cadres sur l’ORM, l’IA, la cybersécurité, le SEO et le design web.',
    intro:
      'Découvrez les modes opératoires que nous activons chez nos clients. Chaque article propose workflows actionnables, checklists et rituels de mesure à adapter dès maintenant.',
    readArticle: 'Lire l’article',
    filtersTitle: 'Affiner les insights',
    filtersDescription:
      'Activez les thématiques ou recherchez des mots-clés pour faire émerger les playbooks adaptés.',
    topicsLabel: 'Filtrer par thématique',
    allTopics: 'Toutes les thématiques',
    searchLabel: 'Rechercher dans la bibliothèque',
    searchPlaceholder: 'Rechercher un article…',
    clearSearch: 'Effacer la recherche',
    emptyTitle: 'Aucun article ne correspond',
    emptyDescription: 'Essayez un autre mot-clé ou réinitialisez les filtres pour parcourir toute la bibliothèque.',
    resetFilters: 'Réinitialiser les filtres',
    featuredLabel: 'Insight mis en avant',
  },
  es: {
    kicker: 'Blog Traceremove',
    title: 'El journal para equipos guiados por la reputación',
    subtitle: 'Frameworks sobre ORM, IA, ciberseguridad, SEO y diseño web.',
    intro:
      'Explora los manuales operativos que usamos con clientes de alto crecimiento. Cada artículo comparte workflows accionables, checklists y rituales de medición listos para adaptar.',
    readArticle: 'Leer artículo',
    filtersTitle: 'Refinar los insights',
    filtersDescription:
      'Activa los focos o busca palabras clave para encontrar los playbooks que tu equipo necesita.',
    topicsLabel: 'Filtrar por temática',
    allTopics: 'Todas las temáticas',
    searchLabel: 'Buscar en la biblioteca',
    searchPlaceholder: 'Buscar artículos…',
    clearSearch: 'Borrar búsqueda',
    emptyTitle: 'Ningún artículo coincide',
    emptyDescription: 'Prueba con otra palabra clave o restablece los filtros para explorar toda la biblioteca.',
    resetFilters: 'Restablecer filtros',
    featuredLabel: 'Insight destacado',
  },
}

const blogArticleCopy: Record<
  Language,
  {
    backToBlog: string
    publishedOn: string
    shareTitle: string
    shareSubtitle: string
    shareLinkedIn: string
    shareTwitter: string
    shareEmail: string
    copyLink: string
    copied: string
    ctaTitle: string
    ctaBody: string
    ctaButton: string
    tocTitle: string
    tocHint: string
    scrollTop: string
    progressLabel: string
    relatedTitle: string
    relatedSubtitle: string
    relatedCta: string
  }
> = {
  en: {
    backToBlog: 'Back to articles',
    publishedOn: 'Published on',
    shareTitle: 'Share this playbook',
    shareSubtitle: 'Keep your partners and operators aligned with the latest Traceremove guidance.',
    shareLinkedIn: 'Share on LinkedIn',
    shareTwitter: 'Post on X',
    shareEmail: 'Send by email',
    copyLink: 'Copy link',
    copied: 'Link copied',
    ctaTitle: 'Need a rapid response team?',
    ctaBody:
      'Bring Traceremove into your brand room to design counter-narratives, remove fake reviews, and harden search trust across markets.',
    ctaButton: 'Book a strategy call',
    tocTitle: 'Navigate this playbook',
    tocHint: 'Jump to any section while the growth meter tracks your read.',
    scrollTop: 'Back to top',
    progressLabel: 'Reading progress',
    relatedTitle: 'Continue exploring',
    relatedSubtitle: 'Strategic playbooks that keep your brand weeks ahead of the noise.',
    relatedCta: 'Open playbook',
  },
  fr: {
    backToBlog: 'Retour aux articles',
    publishedOn: 'Publié le',
    shareTitle: 'Partagez ce playbook',
    shareSubtitle: 'Gardez vos partenaires et vos équipes alignés sur les recommandations Traceremove.',
    shareLinkedIn: 'Partager sur LinkedIn',
    shareTwitter: 'Publier sur X',
    shareEmail: 'Envoyer par e-mail',
    copyLink: 'Copier le lien',
    copied: 'Lien copié',
    ctaTitle: 'Besoin d’une équipe de riposte?',
    ctaBody:
      'Invitez Traceremove à vos comités de marque pour bâtir les contre-récits, supprimer les faux avis et renforcer la confiance sur les moteurs de recherche.',
    ctaButton: 'Planifier un échange',
    tocTitle: 'Parcourir le playbook',
    tocHint: 'Accédez à chaque chapitre pendant que l’indicateur suit votre lecture.',
    scrollTop: 'Revenir en haut',
    progressLabel: 'Progression de lecture',
    relatedTitle: 'Poursuivez l’exploration',
    relatedSubtitle: 'Des plans d’attaque pour garder votre marque plusieurs coups d’avance.',
    relatedCta: 'Découvrir le playbook',
  },
  es: {
    backToBlog: 'Volver a los artículos',
    publishedOn: 'Publicado el',
    shareTitle: 'Comparte este playbook',
    shareSubtitle: 'Mantén a tus socios y operadores alineados con las recomendaciones de Traceremove.',
    shareLinkedIn: 'Compartir en LinkedIn',
    shareTwitter: 'Publicar en X',
    shareEmail: 'Enviar por correo',
    copyLink: 'Copiar enlace',
    copied: 'Enlace copiado',
    ctaTitle: '¿Necesitas un equipo de respuesta rápida?',
    ctaBody:
      'Integra a Traceremove en tu war room para diseñar contra-narrativas, eliminar reseñas falsas y blindar la confianza en buscadores.',
    ctaButton: 'Reserva una sesión estratégica',
    tocTitle: 'Recorre el playbook',
    tocHint: 'Salta a cualquier capítulo mientras el indicador sigue tu lectura.',
    scrollTop: 'Volver arriba',
    progressLabel: 'Progreso de lectura',
    relatedTitle: 'Sigue explorando',
    relatedSubtitle: 'Playbooks estratégicos para mantener tu marca pasos delante del ruido.',
    relatedCta: 'Abrir playbook',
  },
}

const BlogPage = ({ language }: { language: Language }) => {
  const copy = blogListCopy[language]
  const [topicFilter, setTopicFilter] = useState<'all' | BlogTopic>('all')
  const [searchTerm, setSearchTerm] = useState('')

  const topics = useMemo(
    () =>
      blogTopics.map((topic) => ({
        key: topic,
        label: blogTopicLabels[language][topic],
      })),
    [language]
  )

  const articles = useMemo(
    () =>
      blogArticles
        .map((article) => {
          const translation = article.translations[language]
          if (!translation) {
            return undefined
          }
          return {
            slug: article.slug,
            publishedAt: article.publishedAt,
            topic: article.topic,
            translation,
          }
        })
        .filter(
          (article):
            article is {
              slug: string
              publishedAt: string
              topic: BlogTopic
              translation: BlogArticleTranslation
            } => Boolean(article)
        )
        .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()),
    [language]
  )

  const filteredArticles = useMemo(() => {
    const normalizedQuery = searchTerm.trim().toLowerCase()
    return articles.filter((article) => {
      const matchesTopic = topicFilter === 'all' || article.topic === topicFilter
      const matchesQuery =
        normalizedQuery.length === 0 ||
        [article.translation.title, article.translation.summary].some((value) =>
          value.toLowerCase().includes(normalizedQuery)
        )
      return matchesTopic && matchesQuery
    })
  }, [articles, searchTerm, topicFilter])

  const featuredArticle = filteredArticles[0]
  const remainingArticles = filteredArticles.slice(1)

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  const handleResetFilters = () => {
    setTopicFilter('all')
    setSearchTerm('')
  }

  return (
    <section className="blog-page">
      <header className="blog-hero">
        <p className="blog-hero__kicker">{copy.kicker}</p>
        <h1>{copy.title}</h1>
        <p className="blog-hero__subtitle">{copy.subtitle}</p>
        <p className="blog-hero__intro">{copy.intro}</p>
      </header>

      <div className="blog-filters" role="region" aria-label={copy.filtersTitle}>
        <div className="blog-filters__text">
          <h2>{copy.filtersTitle}</h2>
          <p>{copy.filtersDescription}</p>
        </div>
        <div className="blog-filters__controls">
          <div className="blog-topics" role="group" aria-label={copy.topicsLabel}>
            <button
              type="button"
              className={`blog-topic-button ${topicFilter === 'all' ? 'is-active' : ''}`}
              onClick={() => setTopicFilter('all')}
              aria-pressed={topicFilter === 'all'}
            >
              {copy.allTopics}
            </button>
            {topics.map((topic) => (
              <button
                key={topic.key}
                type="button"
                className={`blog-topic-button ${topicFilter === topic.key ? 'is-active' : ''}`}
                onClick={() => setTopicFilter(topic.key)}
                aria-pressed={topicFilter === topic.key}
              >
                {topic.label}
              </button>
            ))}
          </div>

          <label className="blog-search">
            <span>{copy.searchLabel}</span>
            <div className="blog-search__field">
              <input
                type="search"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder={copy.searchPlaceholder}
              />
              {searchTerm ? (
                <button type="button" onClick={() => setSearchTerm('')} aria-label={copy.clearSearch}>
                  <span aria-hidden="true">×</span>
                </button>
              ) : null}
            </div>
          </label>
        </div>
      </div>

      {featuredArticle ? (
        <>
          <article className="blog-featured">
            <span className="blog-featured__badge">{copy.featuredLabel}</span>
            <p className="blog-featured__topic">{featuredArticle.translation.topicLabel}</p>
            <h2>{featuredArticle.translation.title}</h2>
            <p className="blog-featured__summary">{featuredArticle.translation.summary}</p>
            <div className="blog-featured__meta">
              <span>{formatLocaleDate(language, featuredArticle.publishedAt)}</span>
              <span aria-hidden="true">•</span>
              <span>{featuredArticle.translation.readTime}</span>
            </div>
            <Link
              className="blog-featured__cta button primary"
              to={getBlogArticlePath(language, featuredArticle.slug)}
            >
              {copy.readArticle}
            </Link>
            <div className="blog-featured__spark" aria-hidden="true">
              <GrowthSpark variant="light" size="lg" />
            </div>
          </article>

          {remainingArticles.length > 0 ? (
            <div className="blog-grid">
              {remainingArticles.map((article) => (
                <article key={article.slug} className="blog-card">
                  <p className="blog-card__topic">{article.translation.topicLabel}</p>
                  <h2>{article.translation.title}</h2>
                  <p className="blog-card__summary">{article.translation.summary}</p>
                  <div className="blog-card__meta">
                    <span>{formatLocaleDate(language, article.publishedAt)}</span>
                    <span aria-hidden="true">•</span>
                    <span>{article.translation.readTime}</span>
                  </div>
                  <Link className="blog-card__link" to={getBlogArticlePath(language, article.slug)}>
                    {copy.readArticle}
                  </Link>
                </article>
              ))}
            </div>
          ) : null}
        </>
      ) : (
        <div className="blog-empty">
          <h2>{copy.emptyTitle}</h2>
          <p>{copy.emptyDescription}</p>
          <button type="button" className="button secondary" onClick={handleResetFilters}>
            {copy.resetFilters}
          </button>
        </div>
      )}
    </section>
  )
}

const BlogArticlePage = ({ language }: { language: Language }) => {
  const { slug } = useParams<{ slug: string }>()
  const copy = blogArticleCopy[language]
  const [shareUrl, setShareUrl] = useState('')
  const [copied, setCopied] = useState(false)
  const [readingProgress, setReadingProgress] = useState(0)
  const bodyRef = useRef<HTMLDivElement | null>(null)

  if (!slug) {
    return <NotFound />
  }

  const article = blogArticles.find((item) => item.slug === slug)

  if (!article) {
    return <NotFound />
  }

  const translation = article.translations[language]
  const articlePath = getBlogArticlePath(language, article.slug)

  if (!translation) {
    return <NotFound />
  }

  const sections = useMemo(
    () =>
      translation.body.map((section, index) => {
        const base = section.heading ? slugifyHeading(section.heading) : `section-${index + 1}`
        return {
          ...section,
          id: `${slug}-${base}`,
        }
      }),
    [slug, translation.body]
  )

  const tocSections = useMemo(() => sections.filter((section) => Boolean(section.heading)), [sections])
  const defaultActiveSection = tocSections[0]?.id ?? sections[0]?.id ?? ''
  const [activeSection, setActiveSection] = useState(defaultActiveSection)
  const activeSectionRef = useRef(defaultActiveSection)

  const relatedArticles = useMemo(() => {
    const ranked = blogArticles
      .filter((item) => item.slug !== article.slug)
      .map((item) => {
        const localized = item.translations[language]
        if (!localized) {
          return null
        }
        return {
          slug: item.slug,
          topic: item.topic,
          translation: localized,
          publishedAt: item.publishedAt,
        }
      })
      .filter(
        (
          value,
        ): value is {
          slug: string
          topic: BlogTopic
          translation: BlogArticleTranslation
          publishedAt: string
        } => value !== null,
      )

    const prioritized = [
      ...ranked.filter((item) => item.topic === article.topic),
      ...ranked.filter((item) => item.topic !== article.topic),
    ]

    const seen = new Set<string>()
    return prioritized.filter((item) => {
      if (seen.has(item.slug)) {
        return false
      }
      seen.add(item.slug)
      return true
    })
  }, [article.slug, article.topic, language])

  const formattedDate = formatLocaleDate(language, article.publishedAt)

  useEffect(() => {
    setActiveSection(defaultActiveSection)
    activeSectionRef.current = defaultActiveSection
  }, [defaultActiveSection])

  useEffect(() => {
    activeSectionRef.current = activeSection
  }, [activeSection])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const url = `${window.location.origin}${articlePath}`
      setShareUrl(url)
    } else {
      setShareUrl(articlePath)
    }
  }, [articlePath])

  useEffect(() => {
    if (!copied) {
      return
    }
    const timeout = window.setTimeout(() => {
      setCopied(false)
    }, 3200)
    return () => window.clearTimeout(timeout)
  }, [copied])

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    let frameId: number | null = null

    const updateScrollState = () => {
      frameId = null

      if (!sections.length) {
        setReadingProgress(0)
        if (activeSectionRef.current) {
          activeSectionRef.current = ''
          setActiveSection('')
        }
        return
      }

      const bodyElement = bodyRef.current

      if (!bodyElement) {
        setReadingProgress(0)
        return
      }

      const start = bodyElement.getBoundingClientRect().top + window.scrollY
      const viewportHeight = window.innerHeight
      const end = start + bodyElement.scrollHeight - viewportHeight

      if (end <= start) {
        setReadingProgress(1)
      } else {
        const ratio = (window.scrollY - start) / (end - start)
        const clamped = Math.min(1, Math.max(0, ratio))
        setReadingProgress((prev) => {
          if (Math.abs(prev - clamped) < 0.01) {
            return prev
          }
          return clamped
        })
      }

      const threshold = window.scrollY + viewportHeight * 0.28
      let candidateId = sections[0]?.id ?? ''

      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (!element) {
          continue
        }
        const elementTop = element.getBoundingClientRect().top + window.scrollY
        if (threshold >= elementTop) {
          candidateId = section.id
        } else {
          break
        }
      }

      if (candidateId !== activeSectionRef.current) {
        activeSectionRef.current = candidateId
        setActiveSection(candidateId)
      }
    }

    const requestUpdate = () => {
      if (frameId !== null) {
        return
      }
      frameId = window.requestAnimationFrame(updateScrollState)
    }

    requestUpdate()

    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)

    return () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId)
      }
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
    }
  }, [sections])

  const handleCopyLink = () => {
    if (!shareUrl) {
      return
    }

    const writeToClipboard = async () => {
      if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(shareUrl)
        setCopied(true)
        return
      }

      const textarea = document.createElement('textarea')
      textarea.value = shareUrl
      textarea.setAttribute('readonly', '')
      textarea.style.position = 'absolute'
      textarea.style.left = '-9999px'
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
      setCopied(true)
    }

    writeToClipboard().catch(() => {
      setCopied(false)
    })
  }

  const handleShare = (network: 'linkedin' | 'twitter' | 'email') => {
    if (!shareUrl || typeof window === 'undefined') {
      return
    }

    const encodedUrl = encodeURIComponent(shareUrl)
    const encodedTitle = encodeURIComponent(translation.title)
    const encodedSummary = encodeURIComponent(translation.summary)
    let url = ''

    switch (network) {
      case 'linkedin':
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`
        break
      case 'twitter':
        url = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`
        break
      case 'email':
        url = `mailto:?subject=${encodedTitle}&body=${encodedSummary}%0A%0A${encodedUrl}`
        break
      default:
        break
    }

    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer,width=600,height=600')
    }
  }

  const handleTocLinkClick = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault()

    if (typeof window === 'undefined') {
      return
    }

    const target = document.getElementById(id)
    if (!target) {
      return
    }

    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
    target.scrollIntoView({
      behavior: prefersReducedMotion ? 'auto' : ('smooth' as ScrollBehavior),
      block: 'start',
    })

    try {
      const url = new URL(window.location.href)
      url.hash = id
      window.history.replaceState(null, '', url.toString())
    } catch (error) {
      console.warn('Unable to update URL hash', error)
    }
  }

  const handleScrollToTop = () => {
    if (typeof window === 'undefined') {
      return
    }

    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    })
  }

  const progressPercentage = Math.round(readingProgress * 100)

  return (
    <article className="blog-article">
      <div
        className="blog-article__progress"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={progressPercentage}
        aria-label={copy.progressLabel}
      >
        <span className="blog-article__progress-bar" style={{ transform: `scaleX(${Math.max(0, Math.min(1, readingProgress))})` }} />
      </div>
      <header className="blog-article__hero">
        <div className="blog-article__labels">
          <span>{translation.heroKicker}</span>
          <span aria-hidden="true">•</span>
          <span>{translation.topicLabel}</span>
          <span aria-hidden="true">•</span>
          <span>{translation.readTime}</span>
        </div>
        <h1>{translation.title}</h1>
        <p className="blog-article__summary">{translation.summary}</p>
        <p className="blog-article__meta">
          <span>{copy.publishedOn}</span> {formattedDate}
        </p>
        <p className="blog-article__author">{translation.author}</p>
        <div className="blog-article__hero-visual" role="img" aria-label={translation.heroAlt} />
      </header>

      {tocSections.length > 0 ? (
        <nav className="blog-article__toc" aria-labelledby="blog-article-toc-heading">
          <div className="blog-article__toc-header">
            <div>
              <h2 id="blog-article-toc-heading">{copy.tocTitle}</h2>
              <p>{copy.tocHint}</p>
            </div>
            <span className="blog-article__toc-progress" aria-hidden="true">
              {copy.progressLabel}
              <strong>{progressPercentage}%</strong>
            </span>
          </div>
          <ol className="blog-article__toc-list">
            {tocSections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className={`blog-article__toc-link ${activeSection === section.id ? 'is-active' : ''}`}
                  onClick={(event) => handleTocLinkClick(event, section.id)}
                >
                  <span>{section.heading}</span>
                  <span className="blog-article__toc-indicator" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ol>
          <button type="button" className="blog-article__toc-scrolltop" onClick={handleScrollToTop}>
            {copy.scrollTop}
          </button>
        </nav>
      ) : null}

      <div className="blog-article__body" ref={bodyRef}>
        {sections.map((section) => (
          <section key={section.id} id={section.id} aria-label={section.heading ?? undefined}>
            {section.heading ? <h2>{section.heading}</h2> : null}
            {section.paragraphs.map((paragraph, paragraphIndex) => (
              <p key={`${section.id}-paragraph-${paragraphIndex}`}>{paragraph}</p>
            ))}
            {section.bullets ? (
              <ul>
                {section.bullets.map((item, bulletIndex) => (
                  <li key={`${section.id}-bullet-${bulletIndex}`}>{item}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
      </div>

      <aside className="blog-article__share" aria-labelledby="blog-article-share-heading">
        <div className="blog-article__share-text">
          <h2 id="blog-article-share-heading">{copy.shareTitle}</h2>
          <p>{copy.shareSubtitle}</p>
        </div>
        <div className="blog-article__share-actions">
          <button type="button" className="share-button share-button--linkedin" onClick={() => handleShare('linkedin')}>
            <span aria-hidden="true" className="share-button__icon">
              <svg viewBox="0 0 24 24" role="img" aria-hidden="true" focusable="false">
                <path d="M5.07 3.5a1.57 1.57 0 1 1-3.14 0 1.57 1.57 0 0 1 3.14 0ZM1.92 8.34h3.16V21H1.92V8.34Zm6.05 0h3.03v1.74h.04c.42-.8 1.45-1.64 2.99-1.64 3.2 0 3.79 2.11 3.79 4.85V21h-3.16v-6.79c0-1.62-.03-3.71-2.26-3.71-2.27 0-2.62 1.77-2.62 3.6V21H7.97V8.34Z" />
              </svg>
            </span>
            {copy.shareLinkedIn}
          </button>
          <button type="button" className="share-button share-button--twitter" onClick={() => handleShare('twitter')}>
            <span aria-hidden="true" className="share-button__icon">
              <svg viewBox="0 0 24 24" role="img" aria-hidden="true" focusable="false">
                <path d="M20.98 4.57c-.62.28-1.28.47-1.97.56a3.45 3.45 0 0 0 1.51-1.9 6.76 6.76 0 0 1-2.17.85 3.38 3.38 0 0 0-5.78 3.08 9.6 9.6 0 0 1-6.97-3.54 3.37 3.37 0 0 0 1.05 4.5 3.33 3.33 0 0 1-1.53-.42v.04c0 1.64 1.17 3.01 2.72 3.32-.28.07-.58.11-.89.11-.22 0-.43-.02-.63-.06.43 1.32 1.66 2.28 3.13 2.3A6.79 6.79 0 0 1 3 18.4a9.56 9.56 0 0 0 5.18 1.52c6.22 0 9.63-5.18 9.63-9.67 0-.15-.01-.31-.01-.46a6.9 6.9 0 0 0 1.7-1.77Z" />
              </svg>
            </span>
            {copy.shareTwitter}
          </button>
          <button type="button" className="share-button share-button--email" onClick={() => handleShare('email')}>
            <span aria-hidden="true" className="share-button__icon">
              <svg viewBox="0 0 24 24" role="img" aria-hidden="true" focusable="false">
                <path d="M20.5 5h-17A1.5 1.5 0 0 0 2 6.5v11A1.5 1.5 0 0 0 3.5 19h17a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 20.5 5Zm-.37 2L12 12.47 3.87 7h16.26ZM3.5 17.5V8.54l8.04 5.15a1 1 0 0 0 1.08 0l7.88-5.05v8.86h-17Z" />
              </svg>
            </span>
            {copy.shareEmail}
          </button>
          <button type="button" className="share-button share-button--copy" onClick={handleCopyLink}>
            <span aria-hidden="true" className="share-button__icon">
              <svg viewBox="0 0 24 24" role="img" aria-hidden="true" focusable="false">
                <path d="M8 3.5A1.5 1.5 0 0 1 9.5 2h9A1.5 1.5 0 0 1 20 3.5v9A1.5 1.5 0 0 1 18.5 14h-9A1.5 1.5 0 0 1 8 12.5v-9Zm1.5-.5a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-9ZM5.5 6A1.5 1.5 0 0 0 4 7.5v11A1.5 1.5 0 0 0 5.5 20h11a1.5 1.5 0 0 0 1.5-1.5V16h-1v2.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H8V6H5.5Z" />
              </svg>
            </span>
            {copied ? copy.copied : copy.copyLink}
          </button>
        </div>
      </aside>

      {relatedArticles.length ? (
        <section className="blog-article__related" aria-labelledby="blog-article-related-heading">
          <div className="blog-article__related-header">
            <h2 id="blog-article-related-heading">{copy.relatedTitle}</h2>
            <p>{copy.relatedSubtitle}</p>
          </div>
          <div className="blog-article__related-grid">
            {relatedArticles.slice(0, 3).map((item, index) => (
              <article key={item.slug} className="blog-related-card" data-index={index}>
                <div className="blog-related-card__spark" aria-hidden="true">
                  <GrowthSpark variant="light" size="sm" />
                </div>
                <p className="blog-related-card__topic">{item.translation.topicLabel}</p>
                <h3>{item.translation.title}</h3>
                <p className="blog-related-card__summary">{item.translation.summary}</p>
                <div className="blog-related-card__meta">
                  <span>{formatLocaleDate(language, item.publishedAt)}</span>
                  <span aria-hidden="true">•</span>
                  <span>{item.translation.readTime}</span>
                </div>
                <Link className="blog-related-card__link" to={getBlogArticlePath(language, item.slug)}>
                  {copy.relatedCta}
                </Link>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      <section className="blog-article__cta" aria-labelledby="blog-article-cta-heading">
        <div className="blog-article__cta-content">
          <h2 id="blog-article-cta-heading">{copy.ctaTitle}</h2>
          <p>{copy.ctaBody}</p>
        </div>
        <Link className="button primary" to={getContactPath(language)}>
          {copy.ctaButton}
        </Link>
      </section>

      <footer className="blog-article__footer">
        <Link to={getBlogBasePath(language)} className="blog-article__back">
          ← {copy.backToBlog}
        </Link>
      </footer>
    </article>
  )
}

const Header = ({ currentLanguage }: { currentLanguage: Language }) => {
  const [megaOpen, setMegaOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const copy = navCopy[currentLanguage]
  const groups = navigation[currentLanguage] ?? []

  useEffect(() => {
    setMegaOpen(false)
    setMobileOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const originalOverflow = document.body.style.overflow
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = originalOverflow
    }

    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [mobileOpen])

  useEffect(() => {
    if (!mobileOpen) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [mobileOpen])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 960) {
        setMobileOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const firstPages = useMemo(
    () =>
      languages.reduce<Record<Language, string>>((acc, lang) => {
        if (lang === 'en') {
          acc[lang] = '/'
        } else {
          acc[lang] = navigation[lang][0]?.pages[0]?.path ?? '/'
        }
        return acc
      }, { en: '/', fr: '/', es: '/' }),
    []
  )

  const handleCloseMobile = () => {
    setMobileOpen(false)
  }

  return (
    <header className={`tr-header ${mobileOpen ? 'is-mobile-open' : ''}`}>
      <div className="tr-header__inner">
        <div className="tr-header__brand">
          <Link to="/" className="tr-logo" aria-label="Traceremove home">
            <img src="/traceremove-mark.svg" alt="" aria-hidden="true" />
            <span>Traceremove</span>
          </Link>
          <button
            type="button"
            className={`tr-burger ${mobileOpen ? 'is-open' : ''}`}
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="tr-mobile-menu"
            aria-label={mobileOpen ? copy.closeMenu : copy.openMenu}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <nav className="tr-nav" aria-label="Main">
          <button
            type="button"
            className={`tr-nav__trigger ${megaOpen ? 'is-open' : ''}`}
            onClick={() => setMegaOpen((prev) => !prev)}
            aria-expanded={megaOpen}
            aria-controls="tr-megamenu"
          >
            {copy.services}
            <span className="tr-nav__chevron" aria-hidden="true" />
          </button>
          <NavLink className="tr-nav__link" to={getTeamPath(currentLanguage)}>
            {copy.team}
          </NavLink>
          <NavLink className="tr-nav__link" to={getPartnersPath(currentLanguage)}>
            {copy.partners}
          </NavLink>
          <NavLink className="tr-nav__link" to={getBlogBasePath(currentLanguage)}>
            {copy.blog}
          </NavLink>
          <NavLink className="tr-nav__link" to={getContactPath(currentLanguage)}>
            {copy.contact}
          </NavLink>
        </nav>

        <div className="tr-header__cta">
          <NavLink className="button primary" to={getJoinPath(currentLanguage)}>
            {copy.joinUs}
          </NavLink>
          <a className="button ghost" href="tel:+16063022958">
            +1 606 302 2958
          </a>
        </div>

        <div className="tr-languages" aria-label="Language switcher">
          {languages.map((language) => (
            <NavLink key={language} to={firstPages[language]} className={`tr-language ${language === currentLanguage ? 'is-active' : ''}`}>
              {languageLabels[language]}
            </NavLink>
          ))}
        </div>
      </div>

      <div id="tr-megamenu" className={`tr-megamenu ${megaOpen ? 'is-open' : ''}`}>
        <div className="tr-megamenu__inner">
          {groups.map((group) => (
            <div key={group.serviceName} className="tr-megamenu__column">
              <h3>{group.serviceName}</h3>
              <ul>
                {group.pages.map((page) => (
                  <li key={page.path}>
                    <NavLink to={page.path}>{page.industryName}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div id="tr-mobile-menu" className={`tr-mobile-menu ${mobileOpen ? 'is-open' : ''}`}>
        <button
          type="button"
          className="tr-mobile-menu__backdrop"
          aria-hidden="true"
          tabIndex={-1}
          onClick={handleCloseMobile}
        />
        <div
          className="tr-mobile-menu__panel"
          role="dialog"
          aria-modal="true"
          aria-label={`${copy.services} navigation`}
        >
          <div className="tr-mobile-menu__header">
            <span className="tr-mobile-menu__title">Traceremove</span>
            <button type="button" className="tr-mobile-close" aria-label={copy.closeMenu} onClick={handleCloseMobile}>
              <span />
              <span />
            </button>
          </div>
          <div className="tr-mobile-menu__inner">
            <div className="tr-mobile-section">
              <h3>{copy.services}</h3>
              {groups.map((group) => (
                <Fragment key={group.serviceName}>
                  <p className="tr-mobile-group-title">{group.serviceName}</p>
                  <ul>
                    {group.pages.map((page) => (
                      <li key={page.path}>
                        <NavLink to={page.path} onClick={handleCloseMobile}>
                          {page.industryName}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </Fragment>
              ))}
            </div>
            <div className="tr-mobile-section">
              <h3>{copy.team}</h3>
              <NavLink to={getTeamPath(currentLanguage)} className="tr-mobile-link" onClick={handleCloseMobile}>
                {copy.team}
              </NavLink>
              <NavLink to={getPartnersPath(currentLanguage)} className="tr-mobile-link" onClick={handleCloseMobile}>
                {copy.partners}
              </NavLink>
              <NavLink to={getBlogBasePath(currentLanguage)} className="tr-mobile-link" onClick={handleCloseMobile}>
                {copy.blog}
              </NavLink>
              <NavLink to={getContactPath(currentLanguage)} className="tr-mobile-link" onClick={handleCloseMobile}>
                {copy.contact}
              </NavLink>
              <NavLink to={getJoinPath(currentLanguage)} className="tr-mobile-link tr-mobile-link--cta" onClick={handleCloseMobile}>
                {copy.joinUs}
              </NavLink>
              <a className="tr-mobile-link" href="mailto:contact@traceremove.com" onClick={handleCloseMobile}>
                contact@traceremove.com
              </a>
              <a className="tr-mobile-link" href="tel:+16063022958" onClick={handleCloseMobile}>
                +1 606 302 2958
              </a>
            </div>
            <div className="tr-mobile-section">
              <h3>Languages</h3>
              <div className="tr-mobile-languages">
                {languages.map((language) => (
                  <NavLink
                    key={language}
                    to={firstPages[language]}
                    className={`tr-mobile-language${language === currentLanguage ? ' is-active' : ''}`}
                    onClick={handleCloseMobile}
                  >
                    {languageLabels[language]}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

const legalCopy: Record<
  Language,
  Record<
    'privacy' | 'terms',
    {
      kicker: string
      title: string
      subtitle: string
      updated: string
      sections: { heading: string; body: string[] }[]
      contactTitle: string
      contactBody: string[]
      ctaLabel: string
      secondaryLabel: string
      secondaryHref: string
      supportPhone: { label: string; href: string }
    }
  >
> = {
  en: {
    privacy: {
      kicker: 'Legal center',
      title: 'Privacy notice',
      subtitle:
        'We treat your data with the same care we apply to our own products. This page explains how we collect, use, and protect personal information across every market we serve.',
      updated: 'Updated: May 2024',
      sections: [
        {
          heading: 'Information we collect',
          body: [
            'We collect the contact details, company information, and context you share when you request proposals, download resources, register for events, or chat with our team.',
            'We also review aggregate usage analytics and log files through privacy-first tooling so we can improve the experience without storing personal identifiers.',
          ],
        },
        {
          heading: 'How we use your information',
          body: [
            'Your information helps us respond to briefs, configure multilingual squads, deliver the services you select, and keep you informed about operational updates tied to your engagement.',
            'We occasionally send research notes and product announcements when you opt in. Every message includes an instant unsubscribe link.',
          ],
        },
        {
          heading: 'How we share and store data',
          body: [
            'We only share data with infrastructure partners who help operate Traceremove—hosting, CRM, analytics, productivity, and payment vendors that are bound by strict confidentiality.',
            'Data is stored in the United States and European Union with encryption at rest and in transit. Access is limited to senior personnel with audited accounts.',
          ],
        },
        {
          heading: 'Your rights and choices',
          body: [
            'Email privacy@traceremove.com to request a copy of your data, ask for corrections, or demand deletion. We respond to every verified request within thirty days.',
            'You can opt out of marketing communication at any time, and we respect regulations such as GDPR, LGPD, and CCPA across every engagement.',
          ],
        },
      ],
      contactTitle: 'Need to talk with our privacy team?',
      contactBody: [
        'Tell us what you need to clarify and we will respond within one business day with the documentation or next steps required.',
        'We routinely coordinate with in-house counsel to align compliance expectations before launch.',
      ],
      ctaLabel: 'Open the contact form',
      secondaryLabel: 'Email privacy@traceremove.com',
      secondaryHref: 'mailto:privacy@traceremove.com',
      supportPhone: { label: 'Call +1 606 302 2958 to reach our privacy desk.', href: 'tel:+16063022958' },
    },
    terms: {
      kicker: 'Legal center',
      title: 'Terms of service',
      subtitle:
        'These terms describe how we partner with clients around the world, the responsibilities each side carries, and the principles that protect your brand and ours.',
      updated: 'Updated: May 2024',
      sections: [
        {
          heading: 'Scope of engagement',
          body: [
            'Each collaboration begins with an approved proposal or statement of work that defines deliverables, languages, timelines, and success metrics.',
            'Requests outside the agreed scope are estimated separately so we can staff the right specialists without slowing ongoing milestones.',
          ],
        },
        {
          heading: 'Intellectual property and confidentiality',
          body: [
            'Traceremove licenses pre-existing frameworks while granting you full rights to bespoke deliverables once invoices are paid in full.',
            'Campaign data, product roadmaps, and customer information remain confidential. We sign mutual NDAs on request and compartmentalise access internally.',
          ],
        },
        {
          heading: 'Fees, invoicing, and scheduling',
          body: [
            'Unless otherwise stated, engagements require a 30% deposit with remaining invoices due net 14 from the issue date.',
            "Pauses or cancellations need ten business days' notice. Work delivered to date will be invoiced, and retainers can roll into future initiatives within six months.",
          ],
        },
        {
          heading: 'Liability and compliance',
          body: [
            'We design programmes aligned with applicable marketing, advertising, and privacy regulations in the markets where you operate.',
            'Traceremove is not liable for indirect damages. If an issue arises, our total liability is capped at the fees paid for the affected services.',
          ],
        },
      ],
      contactTitle: 'Questions about these terms?',
      contactBody: [
        'We are happy to review clauses with your counsel and adjust engagement structures when compliance requirements evolve.',
        'Send us your redlines or schedule a working session so paperwork never slows your launch.',
      ],
      ctaLabel: 'Discuss an engagement',
      secondaryLabel: 'Email legal@traceremove.com',
      secondaryHref: 'mailto:legal@traceremove.com',
      supportPhone: { label: 'Call +1 606 302 2958 for urgent contract questions.', href: 'tel:+16063022958' },
    },
  },
  fr: {
    privacy: {
      kicker: 'Espace légal',
      title: 'Politique de confidentialité',
      subtitle:
        'Nous traitons vos données avec la même exigence que nos propres actifs numériques. Découvrez comment nous collectons, utilisons et protégeons vos informations.',
      updated: 'Mise à jour : mai 2024',
      sections: [
        {
          heading: 'Données collectées',
          body: [
            'Nous collectons les coordonnées, informations d’entreprise et éléments de contexte que vous partagez via nos formulaires, réservations de rendez-vous, téléchargements et échanges par email.',
            'Nous analysons également des statistiques d’utilisation agrégées avec des outils respectueux de la vie privée afin d’améliorer l’expérience sans stocker d’identifiants personnels.',
          ],
        },
        {
          heading: 'Utilisation des données',
          body: [
            'Ces informations nous permettent de répondre à vos briefs, de constituer des équipes multilingues, de livrer les services convenus et de vous tenir informé de l’avancement.',
            'Nous envoyons ponctuellement des analyses et actualités lorsque vous y consentez. Chaque message comporte un lien de désinscription immédiate.',
          ],
        },
        {
          heading: 'Partage et hébergement',
          body: [
            'Nous partageons vos données uniquement avec les partenaires d’infrastructure indispensables (hébergement, CRM, analytics, facturation) soumis à des clauses de confidentialité strictes.',
            'Les données sont hébergées aux États-Unis et dans l’Union européenne, chiffrées au repos comme en transit, et l’accès est limité à l’équipe dirigeante disposant de comptes audités.',
          ],
        },
        {
          heading: 'Vos droits',
          body: [
            'Écrivez à privacy@traceremove.com pour obtenir une copie, demander une correction ou la suppression de vos données. Chaque demande est traitée sous trente jours.',
            'Vous pouvez vous désinscrire des communications marketing à tout moment. Nous respectons le RGPD, la loi Sapin II, la LOPDGDD et les réglementations locales applicables.',
          ],
        },
      ],
      contactTitle: 'Besoin d’échanger avec notre équipe confidentialité ?',
      contactBody: [
        'Partagez votre demande et nous reviendrons vers vous sous un jour ouvré avec la documentation ou les actions nécessaires.',
        'Nous collaborons volontiers avec vos juristes pour cadrer les exigences de conformité avant vos lancements.',
      ],
      ctaLabel: 'Accéder au formulaire de contact',
      secondaryLabel: 'Écrire à privacy@traceremove.com',
      secondaryHref: 'mailto:privacy@traceremove.com',
      supportPhone: { label: 'Appelez le +1 606 302 2958 pour joindre notre cellule conformité.', href: 'tel:+16063022958' },
    },
    terms: {
      kicker: 'Espace légal',
      title: 'Conditions générales de service',
      subtitle:
        'Ces conditions décrivent notre mode de collaboration, les responsabilités partagées et les garanties qui protègent votre marque comme la nôtre.',
      updated: 'Mise à jour : mai 2024',
      sections: [
        {
          heading: 'Périmètre de la mission',
          body: [
            'Chaque collaboration démarre par une proposition ou un contrat (SOW) validé conjointement qui précise livrables, langues, planning et indicateurs de succès.',
            'Les demandes hors périmètre font l’objet d’un chiffrage complémentaire afin de mobiliser les bons spécialistes sans freiner les jalons en cours.',
          ],
        },
        {
          heading: 'Propriété intellectuelle et confidentialité',
          body: [
            'Traceremove concède ses cadres méthodologiques existants et vous transfère les droits sur les livrables sur mesure une fois les factures réglées.',
            'Les données de campagne, feuilles de route produit et informations clients restent confidentielles. Nous signons des NDA réciproques sur simple demande.',
          ],
        },
        {
          heading: 'Honoraires, facturation et calendrier',
          body: [
            'Sauf mention contraire, un acompte de 30 % est requis et le solde est payable à 14 jours date de facture.',
            'Les pauses ou annulations nécessitent un préavis de dix jours ouvrés. Le travail réalisé est facturé et les retainers peuvent être réaffectés à de futures missions sous six mois.',
          ],
        },
        {
          heading: 'Responsabilité et conformité',
          body: [
            'Nous concevons nos programmes dans le respect des réglementations marketing, publicitaires et de protection des données applicables sur vos marchés.',
            'Traceremove n’est pas responsable des dommages indirects. En cas de litige, notre responsabilité est limitée aux montants réglés pour les services concernés.',
          ],
        },
      ],
      contactTitle: 'Des questions sur ces conditions ?',
      contactBody: [
        'Nous passons volontiers vos clauses avec vos juristes et adaptons nos modalités lorsque vos obligations de conformité évoluent.',
        'Transmettez-nous vos remarques ou planifions un échange pour finaliser la signature sans retarder votre lancement.',
      ],
      ctaLabel: 'Discuter d’une collaboration',
      secondaryLabel: 'Écrire à legal@traceremove.com',
      secondaryHref: 'mailto:legal@traceremove.com',
      supportPhone: { label: 'Appelez le +1 606 302 2958 pour toute question contractuelle urgente.', href: 'tel:+16063022958' },
    },
  },
  es: {
    privacy: {
      kicker: 'Centro legal',
      title: 'Política de privacidad',
      subtitle:
        'Tratamos tus datos con el mismo rigor que aplicamos a nuestros propios sistemas. Aquí detallamos cómo los recopilamos, utilizamos y protegemos.',
      updated: 'Actualizado: mayo de 2024',
      sections: [
        {
          heading: 'Información que recopilamos',
          body: [
            'Recopilamos los datos de contacto, información de la empresa y contexto que compartes al solicitar propuestas, descargar recursos, registrarte a eventos o conversar con nuestro equipo.',
            'También analizamos métricas agregadas con herramientas de analítica respetuosas con la privacidad para mejorar la experiencia sin almacenar identificadores personales.',
          ],
        },
        {
          heading: 'Cómo utilizamos la información',
          body: [
            'Usamos tus datos para responder a los briefs, formar equipos multilingües, entregar los servicios acordados y mantenerte al tanto de la operación.',
            'Enviamos ocasionalmente investigaciones y novedades cuando lo autorizas, y cada mensaje incluye un enlace para darte de baja de inmediato.',
          ],
        },
        {
          heading: 'Cómo compartimos y almacenamos los datos',
          body: [
            'Solo compartimos información con proveedores esenciales de infraestructura: alojamiento, CRM, analítica, colaboración y pagos bajo acuerdos de confidencialidad estrictos.',
            'Los datos se almacenan en Estados Unidos y la Unión Europea con cifrado en reposo y en tránsito, y el acceso se limita al personal senior con cuentas auditadas.',
          ],
        },
        {
          heading: 'Tus derechos y opciones',
          body: [
            'Escríbenos a privacy@traceremove.com para solicitar una copia de tus datos, corregir información o pedir su eliminación. Respondemos a todas las solicitudes verificadas en menos de treinta días.',
            'Puedes darte de baja de las comunicaciones en cualquier momento. Cumplimos con GDPR, LGPD, CCPA y la normativa local aplicable en cada región.',
          ],
        },
      ],
      contactTitle: '¿Necesitas hablar con nuestro equipo de privacidad?',
      contactBody: [
        'Cuéntanos tu solicitud y responderemos en un día laborable con la documentación o acciones necesarias.',
        'También coordinamos requisitos regulatorios específicos para tus lanzamientos multinacionales.',
      ],
      ctaLabel: 'Abrir el formulario de contacto',
      secondaryLabel: 'Escribe a privacy@traceremove.com',
      secondaryHref: 'mailto:privacy@traceremove.com',
      supportPhone: { label: 'Llámanos al +1 606 302 2958 y pide hablar con nuestro equipo de privacidad.', href: 'tel:+16063022958' },
    },
    terms: {
      kicker: 'Centro legal',
      title: 'Términos del servicio',
      subtitle:
        'Estas condiciones resumen la forma en la que colaboramos, las responsabilidades de cada parte y las garantías que protegen tu marca y la nuestra.',
      updated: 'Actualizado: mayo de 2024',
      sections: [
        {
          heading: 'Alcance de la colaboración',
          body: [
            'Cada proyecto comienza con una propuesta o statement of work aprobado que define entregables, idiomas, cronograma y métricas clave.',
            'Las solicitudes fuera de alcance se presupuestan aparte para asignar a los especialistas adecuados sin detener los hitos en curso.',
          ],
        },
        {
          heading: 'Propiedad intelectual y confidencialidad',
          body: [
            'Traceremove licencia sus marcos existentes y te concede los derechos sobre los entregables personalizados una vez que las facturas están pagadas.',
            'Los datos de campañas, hojas de ruta de producto e información de clientes permanecen confidenciales. Firmamos acuerdos de confidencialidad recíprocos cuando lo solicitas.',
          ],
        },
        {
          heading: 'Honorarios, facturación y calendarios',
          body: [
            'Salvo indicación contraria, requerimos un anticipo del 30 % y el resto de las facturas se pagan a 14 días fecha de emisión.',
            'Las pausas o cancelaciones requieren un aviso de diez días hábiles. El trabajo ya entregado se facturará y los retainers podrán aplicarse a proyectos futuros dentro de los seis meses.',
          ],
        },
        {
          heading: 'Responsabilidad y cumplimiento',
          body: [
            'Diseñamos programas alineados con las normativas de marketing, publicidad y privacidad de los mercados donde operas.',
            'Traceremove no se hace responsable de daños indirectos. Si surge un problema, nuestra responsabilidad total se limita a los honorarios pagados por los servicios implicados.',
          ],
        },
      ],
      contactTitle: '¿Dudas sobre estos términos?',
      contactBody: [
        'Con gusto revisamos las cláusulas con tu equipo legal y adaptamos los acuerdos cuando cambian los requisitos de cumplimiento.',
        'Comparte tus comentarios o agenda una llamada para cerrar la documentación sin retrasar el lanzamiento.',
      ],
      ctaLabel: 'Hablar sobre una colaboración',
      secondaryLabel: 'Comparte términos en legal@traceremove.com',
      secondaryHref: 'mailto:legal@traceremove.com',
      supportPhone: { label: 'Habla con nosotros en el +1 606 302 2958 para resolver preguntas contractuales urgentes.', href: 'tel:+16063022958' },
    },
  },
}

const LegalPage = ({ language, variant }: { language: Language; variant: 'privacy' | 'terms' }) => {
  const copy = legalCopy[language][variant]

  return (
    <section className={`legal-page legal-page--${variant}`}>
      <header className="legal-hero">
        <p className="legal-kicker">{copy.kicker}</p>
        <h1>{copy.title}</h1>
        <p className="legal-subtitle">{copy.subtitle}</p>
        <p className="legal-updated">{copy.updated}</p>
        <GrowthSpark variant="light" size="md" className="legal-hero__spark" ariaLabel={copy.title} />
      </header>
      {copy.sections.map((section, index) => (
        <article
          key={`${variant}-${section.heading}`}
          className="legal-section"
          style={{ animationDelay: `${index * 0.12}s` } as CSSProperties}
        >
          <h2>{section.heading}</h2>
          {section.body.map((paragraph, paragraphIndex) => (
            <p key={`${section.heading}-${paragraphIndex}`}>{paragraph}</p>
          ))}
        </article>
      ))}
      <section className="legal-cta">
        <div className="legal-cta__text">
          <h2>{copy.contactTitle}</h2>
          {copy.contactBody.map((paragraph, index) => (
            <p key={`${variant}-cta-${index}`}>{paragraph}</p>
          ))}
          <p>
            <a href={copy.supportPhone.href}>{copy.supportPhone.label}</a>
          </p>
        </div>
        <div className="legal-cta__actions">
          <NavLink className="button primary" to={getContactPath(language)}>
            {copy.ctaLabel}
          </NavLink>
          <a className="button ghost" href={copy.secondaryHref}>
            {copy.secondaryLabel}
          </a>
        </div>
      </section>
    </section>
  )
}

const footerCopy: Record<
  Language,
  {
    rights: string
    studio: string
    founder: string
    team: string
    partners: string
    blog: string
    contact: string
    call: string
    join: string
    privacy: string
    terms: string
    subscribeTitle: string
    subscribeSubtitle: string
    subscribePlaceholder: string
    subscribeCta: string
    subscribeSuccess: string
  }
> = {
  en: {
    rights: 'All rights reserved.',
    studio: 'Traceremove is a multilingual digital agency crafting growth systems for bold teams.',
    founder: 'Founder & CEO Artur Ziganshin',
    team: 'Team',
    partners: 'Partners',
    blog: 'Blog',
    contact: 'Contact',
    call: 'Call us',
    join: 'Join us',
    privacy: 'Privacy policy',
    terms: 'Terms of service',
    subscribeTitle: 'Stay in the loop',
    subscribeSubtitle: 'Receive frameworks, playbooks, and release notes from our growth and reputation lab.',
    subscribePlaceholder: 'Your email address',
    subscribeCta: 'Subscribe',
    subscribeSuccess: 'Thanks for subscribing — check your inbox for a confirmation.',
  },
  fr: {
    rights: 'Tous droits réservés.',
    studio: "Traceremove est une agence digitale multilingue qui conçoit des systèmes de croissance pour les équipes ambitieuses.",
    founder: 'Fondateur & CEO Artur Ziganshin',
    team: 'Équipe',
    partners: 'Partenaires',
    blog: 'Blog',
    contact: 'Contact',
    call: 'Appelez-nous',
    join: 'Rejoignez-nous',
    privacy: 'Politique de confidentialité',
    terms: 'Conditions générales',
    subscribeTitle: 'Restez informé',
    subscribeSubtitle: 'Recevez frameworks, playbooks et notes de version de notre laboratoire growth & réputation.',
    subscribePlaceholder: 'Votre adresse email',
    subscribeCta: 'S’abonner',
    subscribeSuccess: 'Merci pour votre abonnement — vérifiez votre boîte de réception pour confirmer.',
  },
  es: {
    rights: 'Todos los derechos reservados.',
    studio: 'Traceremove es una agencia digital multilingüe que crea sistemas de crecimiento para equipos ambiciosos.',
    founder: 'Fundador y CEO Artur Ziganshin',
    team: 'Equipo',
    partners: 'Partners',
    blog: 'Blog',
    contact: 'Contacto',
    call: 'Llámanos',
    join: 'Únete',
    privacy: 'Política de privacidad',
    terms: 'Términos del servicio',
    subscribeTitle: 'Mantente al día',
    subscribeSubtitle: 'Recibe frameworks, playbooks y notas de lanzamiento de nuestro laboratorio de crecimiento y reputación.',
    subscribePlaceholder: 'Tu correo electrónico',
    subscribeCta: 'Suscribirme',
    subscribeSuccess: 'Gracias por suscribirte — revisa tu bandeja de entrada para confirmar.',
  },
}

const callWidgetCopy: Record<Language, { label: string; assist: string }> = {
  en: { label: 'Call +1 606 302 2958', assist: 'Speak with Artur Ziganshin' },
  fr: { label: 'Appelez +1 606 302 2958', assist: 'Échangez avec Artur Ziganshin' },
  es: { label: 'Llama al +1 606 302 2958', assist: 'Habla con Artur Ziganshin' },
}

type SocialKey =
  | 'whatsapp'
  | 'instagram'
  | 'facebook'
  | 'medium'
  | 'substack'
  | 'linkedin'
  | 'behance'
  | 'dribbble'

const socialLinks: { key: SocialKey; href: string }[] = [
  { key: 'whatsapp', href: 'https://wa.me/16063022958' },
  { key: 'instagram', href: 'https://www.instagram.com/traceremove' },
  { key: 'facebook', href: 'https://www.facebook.com/traceremove' },
  { key: 'medium', href: 'https://medium.com/@traceremove' },
  { key: 'substack', href: 'https://traceremove.substack.com' },
  { key: 'linkedin', href: 'https://www.linkedin.com/company/traceremove' },
  { key: 'behance', href: 'https://www.behance.net/traceremove' },
  { key: 'dribbble', href: 'https://dribbble.com/traceremove' },
]

const footerSocialLabels: Record<Language, Record<SocialKey, string>> = {
  en: {
    whatsapp: 'Message us on WhatsApp',
    instagram: 'Traceremove on Instagram',
    facebook: 'Traceremove on Facebook',
    medium: 'Traceremove on Medium',
    substack: 'Traceremove on Substack',
    linkedin: 'Traceremove on LinkedIn',
    behance: 'Traceremove portfolio on Behance',
    dribbble: 'Traceremove shots on Dribbble',
  },
  fr: {
    whatsapp: 'Écrivez-nous sur WhatsApp',
    instagram: 'Traceremove sur Instagram',
    facebook: 'Traceremove sur Facebook',
    medium: 'Traceremove sur Medium',
    substack: 'Traceremove sur Substack',
    linkedin: 'Traceremove sur LinkedIn',
    behance: 'Portfolio Traceremove sur Behance',
    dribbble: 'Créations Traceremove sur Dribbble',
  },
  es: {
    whatsapp: 'Escríbenos por WhatsApp',
    instagram: 'Traceremove en Instagram',
    facebook: 'Traceremove en Facebook',
    medium: 'Traceremove en Medium',
    substack: 'Traceremove en Substack',
    linkedin: 'Traceremove en LinkedIn',
    behance: 'Portafolio de Traceremove en Behance',
    dribbble: 'Proyectos de Traceremove en Dribbble',
  },
}

const renderSocialIcon = (key: SocialKey): JSX.Element | null => {
  switch (key) {
    case 'linkedin':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M4.983 3.5A2.484 2.484 0 0 1 7.5 1a2.5 2.5 0 1 1-2.517 2.5Zm.184 4.25h4.667v14.75H5.167Zm6.583 0h4.48v2.017h.064c.623-1.182 2.145-2.43 4.416-2.43 4.723 0 5.6 3.11 5.6 7.157v8.006h-4.667v-7.1c0-1.694-.031-3.873-2.362-3.873-2.366 0-2.729 1.85-2.729 3.756v7.217h-4.802Z" />
        </svg>
      )
    case 'whatsapp':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M12 2a10 10 0 0 0-8.66 15.15L3 22l4.08-1.28A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4.07-1.11l-.29-.17-2.42.76.8-2.34-.18-.3A8 8 0 1 1 12 20Zm4.33-5.1c-.24-.12-1.4-.7-1.62-.78s-.38-.12-.54.12-.62.78-.76.94-.28.18-.52.06a6.39 6.39 0 0 1-1.87-1.15 7.07 7.07 0 0 1-1.32-1.64c-.14-.24 0-.37.1-.49.1-.1.24-.28.36-.42s.16-.24.24-.4a.46.46 0 0 0 0-.42c-.06-.12-.54-1.3-.74-1.77s-.4-.4-.54-.4h-.46a.9.9 0 0 0-.66.3 2.79 2.79 0 0 0-.88 2.07 4.82 4.82 0 0 0 1 2.53A10.89 10.89 0 0 0 11 16.7a3.52 3.52 0 0 0 1.95.51 2.84 2.84 0 0 0 1.86-.6 2.19 2.19 0 0 0 .72-1.36c.06-.12 0-.18-.12-.24Z" />
        </svg>
      )
    case 'instagram':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M8 2h8a6 6 0 0 1 6 6v8a6 6 0 0 1-6 6H8a6 6 0 0 1-6-6V8a6 6 0 0 1 6-6Zm0 2a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4ZM12 7.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5Zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5Zm5.25-3.5a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25Z" />
        </svg>
      )
    case 'facebook':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M13.5 21.75v-7.62h2.56l.38-2.96H13.5V9a1.1 1.1 0 0 1 1.24-1.25h1.7V4.99a20.8 20.8 0 0 0-2.5-.14c-2.47 0-4.15 1.5-4.15 4.24v2.08H6.7v2.96h3.09v7.62Z" />
        </svg>
      )
    case 'medium':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M4 7.25a.75.75 0 0 1 .6-.73l2.88-.6a.75.75 0 0 1 .86.48l2.2 5.92 2.14-5.7a.75.75 0 0 1 .88-.47l2.78.65a.75.75 0 0 1 .57.73v10.34a.75.75 0 0 1-.57.73l-2.46.58a.75.75 0 0 1-.91-.52l-2.43-7.4-2.77 7.52a.75.75 0 0 1-.87.48l-2.88-.6A.75.75 0 0 1 4 18.48Z" />
        </svg>
      )
    case 'substack':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M4 5.5V3h16v2.5Zm0 2.5h16v2.5L12 14.5 4 10.5Zm0 4.5 8 4 8-4V21L12 17 4 21Z" />
        </svg>
      )
    case 'behance':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M4.4 5.5h4.9a4 4 0 0 1 4 3.9c0 1.6-.8 2.7-2.3 3.2 1.9.4 3 1.8 3 3.7a4.4 4.4 0 0 1-4.6 4.3H4.4Zm3 6.5h1.9a1.8 1.8 0 0 0 0-3.6H7.4Zm0 6.4h2.1a2 2 0 1 0 0-3.9H7.4Zm12-4.6c0-3.2 1.9-5.5 5-5.5 3.8 0 5 2.8 5 5.7l-.1.8h-6.8c.1 1.6.9 2.6 2.6 2.6a2.6 2.6 0 0 0 2.5-1.2l1.9 1.4a5.1 5.1 0 0 1-4.4 2.2c-3.4 0-5.7-2.2-5.7-5.9Zm2.8-1.3h4.1c-.1-1.4-.9-2.3-2-2.3-1.3 0-2 .8-2.1 2.3Zm-.7-6.2h5.6v1.7h-5.6Z" />
        </svg>
      )
    case 'dribbble':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M12 2a10 10 0 1 1-9.96 10A10 10 0 0 1 12 2Zm5.9 14.8a15.9 15.9 0 0 0-5-1.1 25 25 0 0 1 1.4 5.3 8.4 8.4 0 0 0 3.6-4.2ZM13 21.6a22.6 22.6 0 0 0-1.4-5.5c-3 .9-5.6 2.6-7.5 4.9a8.4 8.4 0 0 0 8.9.6Zm-9.4-2.5c2-2.4 4.8-4.2 8-5.1l-.1-.2a21.7 21.7 0 0 1-2.4-6.2A8.4 8.4 0 0 0 3.6 19.1Zm5-12.9a19 19 0 0 0 2.2 5.8 15.3 15.3 0 0 1 6-1.4 8.3 8.3 0 0 0-8.2-4.4ZM18 12a13 13 0 0 0-6.8 1.6l.2.4a24.1 24.1 0 0 1 1.5 5 8.4 8.4 0 0 0 5.3-7Z" />
        </svg>
      )
    default:
      return null
  }
}

const CallWidget = ({ currentLanguage }: { currentLanguage: Language }) => {
  const copy = callWidgetCopy[currentLanguage]

  return (
    <a className="call-widget" href="tel:+16063022958" aria-label={`${copy.label}. ${copy.assist}`}>
      <span className="call-widget__icon" aria-hidden="true">📞</span>
      <span className="call-widget__text">
        <span className="call-widget__label">{copy.label}</span>
        <span className="call-widget__assist">{copy.assist}</span>
      </span>
    </a>
  )
}

const Footer = ({ currentLanguage }: { currentLanguage: Language }) => {
  const copy = footerCopy[currentLanguage]
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubscribed(true)
    setEmail('')
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (subscribed) {
      setSubscribed(false)
    }
    setEmail(event.target.value)
  }

  return (
    <footer className="tr-footer">
      <div className="tr-footer__inner">
        <div className="tr-footer__brand">
          <img src="/traceremove-mark.svg" alt="" aria-hidden="true" />
          <div>
            <p className="tr-footer__title">Traceremove</p>
            <p className="tr-footer__tagline">{copy.studio}</p>
          </div>
        </div>
        <div className="tr-footer__contact">
          <a href="mailto:contact@traceremove.com">contact@traceremove.com</a>
          <a href="tel:+16063022958">+1 606 302 2958</a>
          <p>{copy.founder}</p>
          <form className="tr-footer__subscribe" onSubmit={handleSubmit} noValidate>
            <div>
              <h3>{copy.subscribeTitle}</h3>
              <p>{copy.subscribeSubtitle}</p>
            </div>
            <div className="tr-footer__subscribe-form">
              <input
                type="email"
                name="footer-email"
                placeholder={copy.subscribePlaceholder}
                value={email}
                onChange={handleChange}
                required
              />
              <button type="submit" className="button tertiary">
                {copy.subscribeCta}
              </button>
            </div>
            {subscribed && (
              <p className="tr-footer__subscribe-success" role="status" aria-live="polite">
                {copy.subscribeSuccess}
              </p>
            )}
          </form>
        </div>
        <div className="tr-footer__links">
          <NavLink to={getTeamPath(currentLanguage)}>{copy.team}</NavLink>
          <NavLink to={getPartnersPath(currentLanguage)}>{copy.partners}</NavLink>
          <NavLink to={getBlogBasePath(currentLanguage)}>{copy.blog}</NavLink>
          <NavLink to={getContactPath(currentLanguage)}>{copy.contact}</NavLink>
          <NavLink to={getJoinPath(currentLanguage)}>{copy.join}</NavLink>
          <a href="tel:+16063022958">{copy.call}</a>
        </div>
        <div className="tr-footer__legal">
          <NavLink to={getPrivacyPath(currentLanguage)}>{copy.privacy}</NavLink>
          <NavLink to={getTermsPath(currentLanguage)}>{copy.terms}</NavLink>
        </div>
        <div className="tr-footer__social">
          {socialLinks.map(({ key, href }) => (
            <a
              key={key}
              className={`tr-footer__social-link tr-footer__social-link--${key}`}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={footerSocialLabels[currentLanguage][key]}
            >
              {renderSocialIcon(key)}
            </a>
          ))}
        </div>
      </div>
      <p className="tr-footer__rights">© {new Date().getFullYear()} Traceremove. {copy.rights}</p>
    </footer>
  )
}

const AppLayout = ({ children }: { children: ReactNode }) => {
  const currentLanguage = useCurrentLanguage()

  return (
    <div className="app-layout">
      <Header currentLanguage={currentLanguage} />
      <main className="content">{children}</main>
      <Footer currentLanguage={currentLanguage} />
      <CallWidget currentLanguage={currentLanguage} />
    </div>
  )
}

function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="team" element={<TeamPage />} />
        <Route path="partners" element={<PartnersPage />} />
        <Route path="join" element={<JoinPage />} />
        <Route path="contact" element={<ContactPage language="en" />} />
        <Route path="blog" element={<BlogPage language="en" />} />
        <Route path="blog/:slug" element={<BlogArticlePage language="en" />} />
        <Route path="privacy" element={<LegalPage language="en" variant="privacy" />} />
        <Route path="terms" element={<LegalPage language="en" variant="terms" />} />
        {languages.map((language) => (
          <Fragment key={language}>
            <Route path={`${language}/team`} element={<TeamPage />} />
            <Route path={`${language}/partners`} element={<PartnersPage />} />
            <Route path={`${language}/join`} element={<JoinPage />} />
            <Route path={`${language}/contact`} element={<ContactPage language={language} />} />
            <Route path={`${language}/blog`} element={<BlogPage language={language} />} />
            <Route path={`${language}/blog/:slug`} element={<BlogArticlePage language={language} />} />
            <Route path={`${language}/privacy`} element={<LegalPage language={language} variant="privacy" />} />
            <Route path={`${language}/terms`} element={<LegalPage language={language} variant="terms" />} />
          </Fragment>
        ))}
        {servicePages.map((page) => (
          <Route key={page.id} path={page.path.slice(1)} element={<ServicePageView page={page} />} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AppLayout>
  )
}

export default App

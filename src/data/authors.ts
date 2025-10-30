import { type Language } from './pages'

export type AuthorId = 'artur-ziganshin' | 'clara-martel' | 'diego-santos'

type MultilingualText = Record<Language, string>

type MultilingualParagraphs = Record<Language, string[]>

type MultilingualList = Record<Language, string[]>

export interface AuthorProfile {
  id: AuthorId
  name: MultilingualText
  shortName: MultilingualText
  role: MultilingualText
  quote: MultilingualText
  availability: MultilingualText
  bio: MultilingualParagraphs
  focusAreas: MultilingualList
  ctaLabel: MultilingualText
  secondaryLabel: MultilingualText
  secondaryHref: string
  accent: 'violet' | 'teal' | 'sunset'
  initials: string
}

const t = (en: string, fr: string, es: string): MultilingualText => ({ en, fr, es })

const p = (en: string[], fr: string[], es: string[]): MultilingualParagraphs => ({ en, fr, es })

const l = (en: string[], fr: string[], es: string[]): MultilingualList => ({ en, fr, es })

export const authorProfiles: Record<AuthorId, AuthorProfile> = {
  'artur-ziganshin': {
    id: 'artur-ziganshin',
    name: t('Artur Ziganshin', 'Artur Ziganshin', 'Artur Ziganshin'),
    shortName: t('Artur', 'Artur', 'Artur'),
    role: t('Founder & CEO', 'Fondateur et CEO', 'Fundador y CEO'),
    quote: t(
      'Every engagement deserves a core team that has already defended brands through the hardest weeks of their journey.',
      'Chaque mission mérite une équipe centrale qui a déjà protégé des marques pendant les semaines les plus critiques.',
      'Cada proyecto merece un núcleo senior que ya defendió marcas durante sus semanas más críticas.',
    ),
    availability: t(
      'Designing multilingual war rooms for enterprise, regulated fintech, and growth-stage AI labs.',
      'Orchestration de war rooms multilingues pour les entreprises, les fintechs régulées et les laboratoires IA en croissance.',
      'Diseñando war rooms multilingües para empresas, fintechs reguladas y laboratorios de IA en expansión.',
    ),
    bio: p(
      [
        'Artur dirige Traceremove comme un bureau stratégique intégré qui accompagne fondateurs, directions marketing et équipes juridiques lorsque la réputation devient critique.',
        'Il structure des PMO de réponse rapide, des flux créatifs et des cellules de renseignements de marque capables de fonctionner en anglais, français et espagnol sans perdre de rythme.',
      ],
      [
        'Artur conduit Traceremove comme un bureau stratégique intégré qui accompagne fondateurs, directions marketing et équipes juridiques lorsque la réputation devient critique.',
        'Il structure des PMO de riposte, des flux créatifs et des cellules de renseignement de marque capables d’opérer en anglais, français et espagnol sans ralentissement.',
      ],
      [
        'Artur dirige Traceremove como un despacho estratégico integrado que acompaña a fundadores, marketing y legal cuando la reputación se vuelve crítica.',
        'Diseña PMO de respuesta rápida, flujos creativos y células de inteligencia de marca que operan en inglés, francés y español sin perder ritmo.',
      ],
    ),
    focusAreas: l(
      [
        'Executive crisis navigation with daily reporting cadence.',
        'Hybrid SEO, review integrity, and PR recovery programmes.',
        'Board-level communication, scenario modelling, and debriefs.',
      ],
      [
        'Pilotage de crise exécutive avec reporting quotidien.',
        'Programmes hybrides SEO, intégrité avis et récupération RP.',
        'Communication conseil, modélisation de scénarios et retours d’expérience.',
      ],
      [
        'Gestión de crisis ejecutiva con reportes diarios.',
        'Programas híbridos de SEO, integridad de reseñas y recuperación PR.',
        'Comunicación a directorio, modelado de escenarios y retroalimentación.',
      ],
    ),
    ctaLabel: t('Book time with Artur', 'Planifier un échange avec Artur', 'Agendar con Artur'),
    secondaryLabel: t('Connect on LinkedIn', 'Se connecter sur LinkedIn', 'Conectar en LinkedIn'),
    secondaryHref: 'https://www.linkedin.com/in/arturziganshin/',
    accent: 'violet',
    initials: 'AZ',
  },
  'clara-martel': {
    id: 'clara-martel',
    name: t('Clara Martel', 'Clara Martel', 'Clara Martel'),
    shortName: t('Clara', 'Clara', 'Clara'),
    role: t('Head of Intelligence', 'Directrice Intelligence', 'Directora de Inteligencia'),
    quote: t(
      'Our listening stack spots narrative drift before it erodes trust, allowing teams to intervene with precision.',
      'Notre stack d’écoute détecte les dérives narratives avant qu’elles n’érodent la confiance pour intervenir avec précision.',
      'Nuestra stack de escucha detecta la deriva narrativa antes de que erosione la confianza y nos permite intervenir con precisión.',
    ),
    availability: t(
      'Leading intelligence sprints for consumer electronics, hospitality, and public sector coalitions.',
      'Pilotage de sprints intelligence pour l’électronique grand public, l’hospitalité et les coalitions publiques.',
      'Dirigiendo sprints de inteligencia para electrónica de consumo, hospitality y coaliciones públicas.',
    ),
    bio: p(
      [
        'Clara orchestre les cellules de renseignement de Traceremove, combinant veille multicanale, modélisation linguistique et alertes automatisées pour garder les marques en avance.',
        'Elle structure des playbooks d’intervention qui unissent marketing, communication et conformité autour des mêmes signaux narratifs.',
      ],
      [
        'Clara orchestre les cellules de renseignement de Traceremove, combinant veille multicanale, modélisation linguistique et alertes automatisées pour garder les marques en avance.',
        'Elle structure des playbooks d’intervention qui unissent marketing, communication et conformité autour des mêmes signaux narratifs.',
      ],
      [
        'Clara lidera las células de inteligencia de Traceremove, combinando escucha multicanal, modelado lingüístico y alertas automatizadas para mantener a las marcas a la delantera.',
        'Estructura playbooks de intervención que alinean marketing, comunicación y cumplimiento alrededor de las mismas señales narrativas.',
      ],
    ),
    focusAreas: l(
      [
        'Narrative intelligence dashboards and alert automation.',
        'Cross-market misinformation and review integrity sweeps.',
        'Moderator enablement and legal intake collaboration.',
      ],
      [
        'Tableaux d’intelligence narrative et automatisation des alertes.',
        'Sweep multi-marchés contre désinformation et faux avis.',
        'Activation des modérateurs et coordination juridique.',
      ],
      [
        'Dashboards de inteligencia narrativa y automatización de alertas.',
        'Barridos multimerado contra desinformación y reseñas falsas.',
        'Empoderamiento de moderadores y coordinación legal.',
      ],
    ),
    ctaLabel: t('Schedule a sprint with Clara', 'Planifier un sprint avec Clara', 'Programar un sprint con Clara'),
    secondaryLabel: t('Request the intelligence brief', "Demander le brief d'intelligence", 'Solicitar el brief de inteligencia'),
    secondaryHref: 'mailto:intel@traceremove.com',
    accent: 'teal',
    initials: 'CM',
  },
  'diego-santos': {
    id: 'diego-santos',
    name: t('Diego Santos', 'Diego Santos', 'Diego Santos'),
    shortName: t('Diego', 'Diego', 'Diego'),
    role: t('Experience Design Lead', 'Lead Design Expérience', 'Líder de Experiencia de Marca'),
    quote: t(
      'When motion, copy, and search intent move together you convert attention into durable trust signals.',
      'Lorsque motion, contenu et intention de recherche avancent ensemble, l’attention se transforme en preuve de confiance durable.',
      'Cuando motion, contenido e intención de búsqueda avanzan juntas conviertes la atención en confianza duradera.',
    ),
    availability: t(
      'Guiding experience design systems for SaaS, mobility, and scale-up retail brands.',
      'Pilotage de systèmes d’expérience pour SaaS, mobilité et marques retail en hypercroissance.',
      'Guiando sistemas de experiencia para SaaS, movilidad y retail en hipercrecimiento.',
    ),
    bio: p(
      [
        'Diego dirige les systèmes de design et de motion chez Traceremove pour garantir que chaque intervention se traduit en expériences cohérentes.',
        'Il collabore avec les squads contenu, données et SEO pour livrer des assets multilingues qui consolident autorité et conversion.',
      ],
      [
        'Diego dirige les systèmes de design et de motion chez Traceremove pour garantir que chaque intervention se traduit en expériences cohérentes.',
        'Il collabore avec les squads contenu, données et SEO pour livrer des assets multilingues qui consolident autorité et conversion.',
      ],
      [
        'Diego lidera los sistemas de diseño y motion en Traceremove para garantizar que cada intervención se traduzca en experiencias coherentes.',
        'Colabora con contenido, datos y SEO para entregar assets multilingües que consolidan autoridad y conversión.',
      ],
    ),
    focusAreas: l(
      [
        'Motion systems for crisis landing pages and executive portals.',
        'Modular content libraries with localized governance.',
        'Design reviews that align creative, legal, and product leads.',
      ],
      [
        'Systèmes de motion pour landing pages de crise et portails exécutifs.',
        'Bibliothèques de contenu modulaires avec gouvernance localisée.',
        'Design reviews alignant créatif, juridique et produit.',
      ],
      [
        'Sistemas de motion para landings de crisis y portales ejecutivos.',
        'Bibliotecas de contenido modulares con gobernanza localizada.',
        'Revisiones de diseño que alinean creativo, legal y producto.',
      ],
    ),
    ctaLabel: t('Plan a design lab with Diego', 'Planifier un design lab avec Diego', 'Planear un design lab con Diego'),
    secondaryLabel: t('Review portfolio highlights', 'Découvrir les projets phares', 'Revisar proyectos destacados'),
    secondaryHref: 'https://www.behance.net/traceremove',
    accent: 'sunset',
    initials: 'DS',
  },
}

export const defaultAuthorId: AuthorId = 'artur-ziganshin'

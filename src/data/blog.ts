import { type Language } from './pages'

export type BlogTopic = 'orm' | 'ai' | 'cybersecurity' | 'seo' | 'web-design'

export interface BlogArticleSection {
  heading?: string
  paragraphs: string[]
  bullets?: string[]
}

export interface BlogArticleTranslation {
  title: string
  summary: string
  topicLabel: string
  heroKicker: string
  readTime: string
  seoTitle: string
  seoDescription: string
  author: string
  heroAlt: string
  body: BlogArticleSection[]
}

export interface BlogArticle {
  id: string
  slug: string
  topic: BlogTopic
  publishedAt: string
  translations: Record<Language, BlogArticleTranslation>
}

export const blogArticles: BlogArticle[] = [
  {
    id: 'orm-foundations',
    slug: 'owning-the-serp',
    topic: 'orm',
    publishedAt: '2024-01-15',
    translations: {
      en: {
        title: 'Owning the SERP: Modern Online Reputation Management',
        summary:
          'Reputation is now a search feature. Learn the frameworks we use to monitor, remediate, and protect your brand in the result pages that prospects trust.',
        topicLabel: 'Online Reputation Management',
        heroKicker: 'Strategy Playbook',
        readTime: '6 min read',
        seoTitle: 'Owning the SERP: Modern ORM Strategy',
        seoDescription: 'TraceRemove shares a modern ORM framework covering monitoring stacks, removal workflows, and proactive reputation design.',
        author: 'Artur Ziganshin',
        heroAlt: 'Dashboard showing search reputation signals across multiple channels.',
        body: [
          {
            paragraphs: [
              'The search results page is a live scorecard for trust. Enterprises that monitor only branded rankings miss the narratives forming in news, forums, and knowledge panels.',
              'We build ORM programs in three phases: telemetry, remediation, and acceleration. Each phase combines policy, automation, and human judgement.',
            ],
          },
          {
            heading: 'Telemetry that sees around corners',
            paragraphs: [
              'Your stack should map keyword clusters, trend velocity, and entity relationships. We integrate GDELT, Reddit, and search console exports to flag sentiment shifts within hours.',
            ],
            bullets: [
              'Create entity graphs linking executives, products, and common narratives.',
              'Score result volatility to prioritize takedown versus publish actions.',
              'Route critical mentions directly into executive communication channels.',
            ],
          },
          {
            heading: 'From removals to reputation design',
            paragraphs: [
              'Legal-safe removals, press outreach, and community responses only solve half the problem. To own the SERP, we seed durable assets: multimedia press kits, structured data, and thought leadership that answers intent-rich queries.',
              'Treat every remediation as a chance to redesign how your brand appears when the next crisis hits.',
            ],
          },
        ],
      },
      fr: {
        title: 'Maîtriser le SERP : l’ORM à haute vélocité',
        summary:
          'La réputation est un module de recherche. Découvrez notre cadre pour surveiller, assainir et renforcer votre marque sur les pages de résultats où vos prospects se fient.',
        topicLabel: 'Gestion de réputation en ligne',
        heroKicker: 'Guide stratégique',
        readTime: '6 min de lecture',
        seoTitle: 'Maîtriser le SERP : stratégie ORM moderne',
        seoDescription:
          'Traceremove partage un cadre ORM moderne couvrant monitoring, workflows de suppression et conception proactive de réputation.',
        author: 'Artur Ziganshin',
        heroAlt: 'Tableau de bord affichant les signaux de réputation sur plusieurs canaux.',
        body: [
          {
            paragraphs: [
              'La page de résultats est un baromètre de confiance. Se focaliser uniquement sur les requêtes de marque laisse les narratifs négatifs se former ailleurs : actualités, forums et knowledge panels.',
              'Nos programmes ORM suivent trois phases : télémétrie, remédiation, accélération. Chaque étape combine politiques, automatisation et jugement humain.',
            ],
          },
          {
            heading: 'Une télémétrie qui anticipe',
            paragraphs: [
              'Votre stack doit cartographier les clusters de mots-clés, la vélocité des tendances et les relations d’entités. Nous relions GDELT, Reddit et les exports Search Console pour détecter les variations de sentiment en quelques heures.',
            ],
            bullets: [
              'Établir des graphes d’entités reliant dirigeants, produits et narratifs récurrents.',
              'Qualifier la volatilité des résultats pour arbitrer suppression ou publication.',
              'Acheminer les mentions critiques dans les canaux de communication exécutifs.',
            ],
          },
          {
            heading: 'De la suppression à la conception de réputation',
            paragraphs: [
              'Les retraits légaux, le relai presse et la réponse communautaire ne suffisent pas. Pour posséder le SERP, nous diffusons des actifs durables : kits de presse, données structurées et leadership éclairé qui répondent aux intentions fortes.',
              'Chaque remédiation est l’occasion de repenser l’apparition de votre marque lors de la prochaine crise.',
            ],
          },
        ],
      },
      es: {
        title: 'Controlar el SERP: ORM para organizaciones que crecen rápido',
        summary:
          'La reputación es ya una función de búsqueda. Exploramos el marco que utilizamos para monitorear, corregir y blindar tu marca en los resultados que tus clientes consultan.',
        topicLabel: 'Gestión de reputación en línea',
        heroKicker: 'Manual estratégico',
        readTime: 'Lectura de 6 min',
        seoTitle: 'Controlar el SERP: estrategia ORM moderna',
        seoDescription:
          'Traceremove comparte un marco ORM moderno que cubre monitoreo, workflows de eliminación y diseño proactivo de reputación.',
        author: 'Artur Ziganshin',
        heroAlt: 'Panel con indicadores de reputación provenientes de múltiples canales.',
        body: [
          {
            paragraphs: [
              'La página de resultados es un marcador de confianza en tiempo real. Si solo vigilas palabras clave de marca, los relatos negativos crecen en noticias, foros y knowledge panels.',
              'Nuestros programas ORM avanzan en tres fases: telemetría, remediación y aceleración. Cada fase une políticas, automatización y criterio humano.',
            ],
          },
          {
            heading: 'Telemetría que anticipa movimientos',
            paragraphs: [
              'Tu stack debe mapear clústeres de keywords, velocidad de tendencias y relaciones de entidades. Conectamos GDELT, Reddit y exports de Search Console para detectar cambios de sentimiento en horas.',
            ],
            bullets: [
              'Construir grafos de entidades que unan directivos, productos y narrativas frecuentes.',
              'Puntuar la volatilidad de resultados para priorizar bajadas frente a publicaciones.',
              'Enviar menciones críticas a los canales ejecutivos adecuados.',
            ],
          },
          {
            heading: 'De las bajas al diseño de reputación',
            paragraphs: [
              'Las bajas legales, el outreach a prensa y las respuestas comunitarias solucionan solo la mitad. Para controlar el SERP sembramos activos duraderos: kits de prensa, datos estructurados y liderazgo intelectual adaptado a cada intención.',
              'Cada remediación es una oportunidad para rediseñar cómo aparece tu marca en la próxima crisis.',
            ],
          },
        ],
      },
    },
  },
  {
    id: 'ai-marketing',
    slug: 'designing-ai-assisted-campaigns',
    topic: 'ai',
    publishedAt: '2024-02-21',
    translations: {
      en: {
        title: 'Designing AI-Assisted Campaigns That Ship Faster',
        summary:
          'AI copilots can collapse weeks of production, but only if you scaffold prompts, guardrails, and human reviews. This blueprint shows how we deploy generative systems across marketing pods.',
        topicLabel: 'Applied AI',
        heroKicker: 'Workflow Blueprint',
        readTime: '5 min read',
        seoTitle: 'How Traceremove designs AI-assisted marketing campaigns',
        seoDescription:
          'Blueprint for AI-assisted campaigns covering prompt systems, QA loops, and measurement rituals to keep teams shipping fast.',
        author: 'Maya Lavoie',
        heroAlt: 'Designers collaborating with AI-generated assets pinned on a board.',
        body: [
          {
            paragraphs: [
              'Generative AI should remove toil, not add review chaos. We build campaign pods that ship with reusable prompt libraries and a QA stack that keeps compliance teams calm.',
            ],
          },
          {
            heading: 'Prompt systems as reusable assets',
            paragraphs: [
              'Treat prompts as product. Each deliverable gets a system prompt, guardrails, and expected outputs. Designers test prompts weekly and log drift to keep quality predictable.',
            ],
            bullets: [
              'Version prompts like code with owners and changelogs.',
              'Pair AI outputs with brand style tokens to keep typography and color consistent.',
              'Route experiments through a “red team” that stress-tests hallucination risks.',
            ],
          },
          {
            heading: 'Measurement rituals that build trust',
            paragraphs: [
              'We run control vs. AI-assisted benchmarks on launch cadence, approval velocity, and engagement. When the data proves value, stakeholders stop blocking automation.',
              'Every pod closes the loop with a retrospective, documenting what to templatize next.',
            ],
          },
        ],
      },
      fr: {
        title: 'Concevoir des campagnes assistées par IA qui livrent vite',
        summary:
          'Les copilotes IA peuvent réduire des semaines de production, à condition de cadrer prompts, garde-fous et revues humaines. Voici notre blueprint pour équiper les équipes marketing.',
        topicLabel: 'IA appliquée',
        heroKicker: 'Blueprint opérationnel',
        readTime: 'Lecture de 5 min',
        seoTitle: 'Comment Traceremove conçoit des campagnes marketing assistées par IA',
        seoDescription:
          'Blueprint pour campagnes assistées par IA : systèmes de prompts, boucles QA et rituels de mesure pour livrer plus vite.',
        author: 'Maya Lavoie',
        heroAlt: 'Designeuses collaborant avec des visuels générés par IA.',
        body: [
          {
            paragraphs: [
              'L’IA générative doit supprimer la pénibilité, pas ajouter du chaos de validation. Nous montons des pods de campagne dotés de bibliothèques de prompts réutilisables et d’une stack QA rassurante pour la conformité.',
            ],
          },
          {
            heading: 'Des systèmes de prompts comme actifs produits',
            paragraphs: [
              'Considérez les prompts comme un produit. Chaque livrable dispose d’un prompt système, de garde-fous et d’exemples attendus. Les designers testent les prompts chaque semaine et consignent les dérives pour maintenir la qualité.',
            ],
            bullets: [
              'Versionner les prompts comme du code avec propriétaires et changelog.',
              'Associer les sorties IA aux tokens de marque pour conserver typographie et couleurs.',
              'Soumettre les expérimentations à une “red team” qui évalue les risques d’hallucination.',
            ],
          },
          {
            heading: 'Des rituels de mesure qui inspirent confiance',
            paragraphs: [
              'Nous comparons cadence de lancement, vitesse d’approbation et engagement entre groupes témoins et pods assistés par IA.',
              'Chaque pod conclut par une rétrospective pour documenter la prochaine automatisation à industrialiser.',
            ],
          },
        ],
      },
      es: {
        title: 'Diseñar campañas asistidas por IA que se lanzan antes',
        summary:
          'Los copilotos de IA pueden comprimir semanas de producción si estructuras prompts, controles y revisiones humanas. Este blueprint muestra cómo desplegamos sistemas generativos en marketing.',
        topicLabel: 'IA aplicada',
        heroKicker: 'Blueprint operativo',
        readTime: 'Lectura de 5 min',
        seoTitle: 'Cómo Traceremove diseña campañas de marketing asistidas por IA',
        seoDescription:
          'Plano para campañas asistidas por IA con prompts reutilizables, QA colaborativa y métricas que aceleran lanzamientos.',
        author: 'Maya Lavoie',
        heroAlt: 'Creativos colaborando con recursos visuales generados por IA.',
        body: [
          {
            paragraphs: [
              'La IA generativa debe eliminar trabajo repetitivo, no sumar ciclos de revisión. Armamos pods de campaña con bibliotecas de prompts y una pila de QA que mantiene tranquila a la conformidad.',
            ],
          },
          {
            heading: 'Prompts como activos reutilizables',
            paragraphs: [
              'Trata los prompts como producto. Cada entregable tiene prompt de sistema, límites y resultados esperados. Los diseñadores prueban y documentan la deriva semanalmente para sostener la calidad.',
            ],
            bullets: [
              'Versionar los prompts como código con responsables y registros de cambios.',
              'Alinear la salida de IA con los tokens de marca para mantener consistencia visual.',
              'Pasar los experimentos por un “red team” que estresa los riesgos de alucinación.',
            ],
          },
          {
            heading: 'Rituales de medición que generan confianza',
            paragraphs: [
              'Comparamos cadencia de lanzamiento, velocidad de aprobación y engagement entre pods tradicionales y pods asistidos.',
              'Cada pod cierra con una retrospectiva que define la próxima automatización a estandarizar.',
            ],
          },
        ],
      },
    },
  },
  {
    id: 'cyber-hygiene',
    slug: 'executive-cyber-hygiene',
    topic: 'cybersecurity',
    publishedAt: '2023-12-05',
    translations: {
      en: {
        title: 'Executive Cyber Hygiene for Reputation-Heavy Teams',
        summary:
          'High-visibility leaders become entry points for breaches. Protect identities, devices, and cloud surfaces with this playbook built for hybrid teams.',
        topicLabel: 'Cybersecurity',
        heroKicker: 'Risk Mitigation',
        readTime: '7 min read',
        seoTitle: 'Executive cyber hygiene checklist for hybrid teams',
        seoDescription:
          'Prevent breaches around executives with practical steps covering identity, devices, data handling, and incident rehearsal.',
        author: 'Luis Mendoza',
        heroAlt: 'Security specialist configuring endpoint protection policies.',
        body: [
          {
            paragraphs: [
              'When attackers target executives, they go after personal inboxes, social accounts, and shared drives. Our hygiene program aligns IT, communications, and legal to remove single points of failure.',
            ],
          },
          {
            heading: 'Identity and device perimeter',
            paragraphs: [
              'Enforce hardware security keys on personal and corporate accounts. Ship travel kits with pre-configured devices and mobile device management profiles to eliminate insecure Wi-Fi usage.',
            ],
            bullets: [
              'Enroll executive assistants in phishing simulations with executive-specific lures.',
              'Maintain a vault of verified social media accounts to detect lookalikes fast.',
              'Rotate personal email aliases quarterly with updated SPF/DKIM policies.',
            ],
          },
          {
            heading: 'Run crisis rehearsals',
            paragraphs: [
              'Quarterly tabletop exercises keep comms and security aligned. Simulate account takeover, deepfake outreach, and credential leaks. Document the first five actions, owners, and escalation windows.',
            ],
          },
        ],
      },
      fr: {
        title: 'Hygiène cyber pour dirigeants et équipes très exposées',
        summary:
          'Les dirigeants visibles deviennent des portes d’entrée. Protégez identités, terminaux et surfaces cloud avec ce playbook pensé pour le travail hybride.',
        topicLabel: 'Cybersécurité',
        heroKicker: 'Réduction des risques',
        readTime: 'Lecture de 7 min',
        seoTitle: 'Checklist d’hygiène cyber pour équipes hybrides',
        seoDescription:
          'Prévenez les brèches autour des dirigeants avec des étapes concrètes : identité, terminaux, gestion des données et exercices de crise.',
        author: 'Luis Mendoza',
        heroAlt: 'Spécialiste sécurité configurant des politiques de protection des terminaux.',
        body: [
          {
            paragraphs: [
              'Les attaquants ciblent les dirigeants via boîtes mail personnelles, comptes sociaux et drives partagés. Notre programme aligne IT, communication et juridique pour supprimer les points de défaillance uniques.',
            ],
          },
          {
            heading: 'Périmètre identité et terminaux',
            paragraphs: [
              'Imposez des clés de sécurité matérielles sur les comptes personnels et professionnels. Fournissez des kits de voyage avec terminaux préconfigurés et profils MDM pour éviter le Wi-Fi non sécurisé.',
            ],
            bullets: [
              'Former les assistants de direction avec des simulations de phishing ciblant les dirigeants.',
              'Maintenir un registre des comptes sociaux vérifiés pour détecter les imitateurs.',
              'Changer les alias d’e-mail personnels chaque trimestre avec politiques SPF/DKIM à jour.',
            ],
          },
          {
            heading: 'Répéter les scénarios de crise',
            paragraphs: [
              'Des exercices trimestriels gardent communication et sécurité alignées. Simulez prise de contrôle, deepfake et fuite d’identifiants. Documentez les cinq premières actions, leurs responsables et les délais d’escalade.',
            ],
          },
        ],
      },
      es: {
        title: 'Higiene cibernética ejecutiva para equipos expuestos',
        summary:
          'Los líderes visibles son puertas de entrada. Protege identidades, dispositivos y superficies cloud con este playbook diseñado para equipos híbridos.',
        topicLabel: 'Ciberseguridad',
        heroKicker: 'Mitigación de riesgos',
        readTime: 'Lectura de 7 min',
        seoTitle: 'Checklist de higiene cibernética para equipos híbridos',
        seoDescription:
          'Evita brechas alrededor de ejecutivos con pasos prácticos sobre identidad, dispositivos, gestión de datos y simulacros.',
        author: 'Luis Mendoza',
        heroAlt: 'Especialista de seguridad configurando políticas de protección de endpoints.',
        body: [
          {
            paragraphs: [
              'Cuando los atacantes apuntan a ejecutivos, van tras correos personales, redes sociales y drives compartidos. Nuestro programa alinea IT, comunicación y legal para eliminar puntos únicos de fallo.',
            ],
          },
          {
            heading: 'Perímetro de identidad y dispositivos',
            paragraphs: [
              'Implementa llaves de seguridad físicas en cuentas personales y corporativas. Entrega kits de viaje con dispositivos preconfigurados y perfiles MDM para evitar Wi-Fi inseguro.',
            ],
            bullets: [
              'Entrena a asistentes ejecutivos con simulaciones de phishing adaptadas.',
              'Mantén un registro de cuentas sociales verificadas para detectar imitadores.',
              'Rota alias de correo personales de forma trimestral con políticas SPF/DKIM actualizadas.',
            ],
          },
          {
            heading: 'Ensayar crisis con frecuencia',
            paragraphs: [
              'Ejercicios trimestrales alinean comunicación y seguridad. Simula toma de cuentas, deepfakes y fugas de credenciales. Documenta las cinco primeras acciones, responsables y ventanas de escalamiento.',
            ],
          },
        ],
      },
    },
  },
  {
    id: 'seo-operations',
    slug: 'seo-operations-cadence',
    topic: 'seo',
    publishedAt: '2024-03-10',
    translations: {
      en: {
        title: 'SEO Operations: Building a Cadence Your Engineers Respect',
        summary:
          'Technical SEO fails when it runs on ticket queues. We share how to embed search roadmaps into product rituals so engineering, content, and leadership stay aligned.',
        topicLabel: 'Search Engine Optimization',
        heroKicker: 'Operations Framework',
        readTime: '8 min read',
        seoTitle: 'SEO operations cadence for product-led teams',
        seoDescription:
          'Learn how to run SEO operations alongside product sprints with rituals, dashboards, and collaboration patterns that scale.',
        author: 'Sofia Martínez',
        heroAlt: 'SEO lead facilitando un taller con dashboards proyectados en pantalla.',
        body: [
          {
            paragraphs: [
              'SEO backlogs die in intake queues. High-velocity teams run SEO as an operations layer across discovery, delivery, and enablement. That starts with shared rituals.',
            ],
          },
          {
            heading: 'Rituals that ship value every sprint',
            paragraphs: [
              'Pair weekly crawl reviews with product triage. Engineers only join when blockers impact velocity. Content strategists bring insights on search intent drift.',
            ],
            bullets: [
              'Use opportunity scorecards to compare search lift versus engineering effort.',
              'Automate lighthouse, schema, and internal link checks post-deploy.',
              'Share a living “SERP storyboard” so leadership sees narrative gains.',
            ],
          },
          {
            heading: 'Dashboards that keep everyone honest',
            paragraphs: [
              'Build a Looker Studio deck showing core web vitals, search visibility, and revenue attribution. Present it in the same forum as product OKRs to keep SEO attached to revenue.',
            ],
          },
        ],
      },
      fr: {
        title: 'Opérations SEO : instaurer un rythme respecté par les équipes produit',
        summary:
          'Le SEO technique échoue lorsqu’il dépend de files de tickets. Voici comment intégrer la feuille de route search dans les rituels produit pour aligner tech, contenu et direction.',
        topicLabel: 'Référencement naturel',
        heroKicker: 'Cadre opérationnel',
        readTime: 'Lecture de 8 min',
        seoTitle: 'Cadence opérations SEO pour équipes product-led',
        seoDescription:
          'Faites vivre le SEO aux côtés des sprints produit avec des rituels, dashboards et modes de collaboration scalables.',
        author: 'Sofia Martínez',
        heroAlt: 'Responsable SEO animant un atelier devant des tableaux de bord projetés.',
        body: [
          {
            paragraphs: [
              'Les backlogs SEO se perdent dans les files d’attente. Les équipes à grande vitesse traitent le SEO comme une couche opérationnelle couvrant discovery, delivery et enablement, portée par des rituels communs.',
            ],
          },
          {
            heading: 'Des rituels qui livrent de la valeur à chaque sprint',
            paragraphs: [
              'Associez les revues de crawl hebdomadaires au tri produit. Les ingénieurs n’interviennent que lorsque des blocages menacent la vélocité. Les stratèges contenu apportent les signaux de dérive d’intention.',
            ],
            bullets: [
              'Utiliser des scorecards d’opportunité pour arbitrer gain SEO vs effort d’ingénierie.',
              'Automatiser les contrôles lighthouse, schéma et maillage interne après déploiement.',
              'Partager un “storyboard SERP” vivant pour montrer à la direction la progression narrative.',
            ],
          },
          {
            heading: 'Des dashboards pour garder le focus',
            paragraphs: [
              'Construisez un deck Looker Studio affichant web vitals, visibilité et attribution revenu. Présentez-le dans le même forum que les OKR produit afin d’ancrer le SEO dans le revenu.',
            ],
          },
        ],
      },
      es: {
        title: 'Operaciones SEO: cadencia que respeta el equipo de producto',
        summary:
          'El SEO técnico falla cuando depende de colas de tickets. Te mostramos cómo incrustar el roadmap de search en los rituales de producto para alinear ingeniería, contenido y dirección.',
        topicLabel: 'Posicionamiento web',
        heroKicker: 'Marco operacional',
        readTime: 'Lectura de 8 min',
        seoTitle: 'Cadencia de operaciones SEO para equipos product-led',
        seoDescription:
          'Ejecuta operaciones SEO junto a los sprints de producto con rituales, tableros y colaboración que escalan.',
        author: 'Sofia Martínez',
        heroAlt: 'Líder SEO facilitando un taller frente a dashboards proyectados.',
        body: [
          {
            paragraphs: [
              'Los backlogs SEO mueren en las colas de tickets. Los equipos veloces ejecutan SEO como capa operativa en discovery, delivery y enablement, iniciando con rituales compartidos.',
            ],
          },
          {
            heading: 'Rituales que entregan valor en cada sprint',
            paragraphs: [
              'Combina revisiones de crawl con triaje de producto. Ingeniería participa solo cuando hay bloqueos. Estrategas de contenido aportan insights sobre deriva de intención de búsqueda.',
            ],
            bullets: [
              'Usar scorecards de oportunidad para equilibrar impacto SEO vs esfuerzo de ingeniería.',
              'Automatizar revisiones de lighthouse, schema y enlaces internos post lanzamiento.',
              'Compartir un “storyboard SERP” vivo para que dirección vea el avance narrativo.',
            ],
          },
          {
            heading: 'Dashboards que sostienen el alineamiento',
            paragraphs: [
              'Construye un deck en Looker Studio con core web vitals, visibilidad y atribución de ingresos. Preséntalo en el mismo foro que los OKR de producto para vincular el SEO al revenue.',
            ],
          },
        ],
      },
    },
  },
  {
    id: 'web-design',
    slug: 'web-design-systems',
    topic: 'web-design',
    publishedAt: '2024-04-18',
    translations: {
      en: {
        title: 'Design Systems That Convert: Web Foundations for High-Velocity Teams',
        summary:
          'A performant marketing site is a revenue machine, not a brochure. We break down the system architecture we deploy to keep design, content, and experimentation in sync.',
        topicLabel: 'Web Design',
        heroKicker: 'Design Systems',
        readTime: '9 min read',
        seoTitle: 'Web design systems that convert and scale experimentation',
        seoDescription:
          'Discover how Traceremove builds multilingual design systems with modular components, content governance, and testing loops.',
        author: 'Maya Lavoie',
        heroAlt: 'Bibliothèque de composants web affichée sur plusieurs écrans.',
        body: [
          {
            paragraphs: [
              'High-growth teams need a site that ships campaigns weekly without creating design debt. Our design systems layer tokens, patterns, and governance so every launch feels on-brand.',
            ],
          },
          {
            heading: 'Component libraries aligned with growth motions',
            paragraphs: [
              'We build component families with conversion states baked in: hero variants, pricing cards, testimonial carousels, and localized CTAs ready for launch in minutes.',
            ],
            bullets: [
              'Map components to funnel stages to avoid inconsistent storytelling.',
              'Expose Figma tokens directly to Webflow and React builds.',
              'Document animation guidelines with accessibility-first defaults.',
            ],
          },
          {
            heading: 'Governance that unlocks experimentation',
            paragraphs: [
              'Every module ships with usage guidelines, QA checklists, and measurement tags. Marketing teams spin experiments without waiting on engineering, while analytics stays trustworthy.',
            ],
          },
        ],
      },
      fr: {
        title: 'Des design systems qui convertissent : fondations web pour équipes rapides',
        summary:
          'Un site marketing performant est une machine à revenu, pas une brochure. Découvrez l’architecture système qui maintient design, contenu et expérimentation alignés.',
        topicLabel: 'Design web',
        heroKicker: 'Design systems',
        readTime: 'Lecture de 9 min',
        seoTitle: 'Design systems web qui convertissent et scalent l’expérimentation',
        seoDescription:
          'Découvrez comment Traceremove construit des design systems multilingues avec composants modulaires, gouvernance contenu et boucles de test.',
        author: 'Maya Lavoie',
        heroAlt: 'Bibliothèque de composants web affichée sur plusieurs écrans.',
        body: [
          {
            paragraphs: [
              'Les équipes en hypercroissance ont besoin d’un site qui lance des campagnes chaque semaine sans dette design. Nos design systems superposent tokens, patterns et gouvernance pour garder chaque lancement cohérent.',
            ],
          },
          {
            heading: 'Des bibliothèques alignées sur les parcours de conversion',
            paragraphs: [
              'Nous construisons des familles de composants avec des états de conversion intégrés : variantes de hero, cartes de prix, carrousels de témoignages et CTA localisés prêts en quelques minutes.',
            ],
            bullets: [
              'Associer chaque composant à une étape d’entonnoir pour éviter les incohérences.',
              'Relier directement les tokens Figma aux builds Webflow et React.',
              'Documenter les animations avec des paramètres accessibles par défaut.',
            ],
          },
          {
            heading: 'Une gouvernance qui libère l’expérimentation',
            paragraphs: [
              'Chaque module embarque des guidelines, checklists QA et tags de mesure. Les équipes marketing lancent des tests sans attendre l’ingénierie tout en gardant des données fiables.',
            ],
          },
        ],
      },
      es: {
        title: 'Design systems que convierten: bases web para equipos veloces',
        summary:
          'Un sitio de marketing performante es una máquina de revenue. Compartimos la arquitectura que mantiene alineados diseño, contenido y experimentación.',
        topicLabel: 'Diseño web',
        heroKicker: 'Design systems',
        readTime: 'Lectura de 9 min',
        seoTitle: 'Design systems web que convierten y escalan experimentación',
        seoDescription:
          'Aprende cómo Traceremove construye design systems multilingües con componentes modulares, gobierno de contenido y loops de test.',
        author: 'Maya Lavoie',
        heroAlt: 'Biblioteca de componentes web mostrada en múltiples pantallas.',
        body: [
          {
            paragraphs: [
              'Los equipos de alto crecimiento necesitan un sitio que lance campañas semanalmente sin crear deuda de diseño. Nuestros sistemas combinan tokens, patrones y gobierno para mantener cada lanzamiento en marca.',
            ],
          },
          {
            heading: 'Bibliotecas de componentes alineadas al crecimiento',
            paragraphs: [
              'Construimos familias de componentes con estados de conversión incluidos: variantes de hero, tarjetas de precios, carruseles de testimonios y CTA localizados listos en minutos.',
            ],
            bullets: [
              'Mapear componentes a etapas del embudo para evitar relatos inconsistentes.',
              'Expose tokens de Figma directamente a builds en Webflow y React.',
              'Documentar animaciones con parámetros accesibles por defecto.',
            ],
          },
          {
            heading: 'Gobernanza que habilita la experimentación',
            paragraphs: [
              'Cada módulo incluye guías de uso, checklists QA y etiquetas de medición. Marketing lanza experimentos sin esperar a ingeniería y las métricas siguen siendo confiables.',
            ],
          },
        ],
      },
    },
  },
]

export const getBlogBasePath = (language: Language) => (language === 'en' ? '/blog' : `/${language}/blog`)

export const getBlogArticlePath = (language: Language, slug: string) => `${getBlogBasePath(language)}/${slug}`


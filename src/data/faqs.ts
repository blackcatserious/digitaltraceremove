import { type Language } from './pages'

export interface FaqMetric {
  label: string
  value: string
  annotation: string
}

export interface FaqItem {
  question: string
  answer: string[]
}

export interface FaqCategoryContent {
  id: string
  eyebrow: string
  title: string
  description: string
  signalLabel: string
  signalValue: string
  signalDetail: string
  items: FaqItem[]
}

export type FaqGuideTarget = 'resources' | 'caseStudies' | 'blog' | 'contact'

export interface FaqGuide {
  id: string
  eyebrow: string
  title: string
  description: string
  ctaLabel: string
  target: FaqGuideTarget
}

export interface FaqSupportChannel {
  label: string
  detail: string
}

export interface FaqSupport {
  title: string
  subtitle: string
  notes: string[]
  channels: FaqSupportChannel[]
  ctaLabel: string
  ctaSecondary: string
  ctaSecondaryHref: string
}

export interface FaqPageCopy {
  hero: {
    eyebrow: string
    title: string
    subtitle: string
    description: string
    primaryCta: string
    secondaryCta: string
    secondaryHref: string
    assurance: string
    visualLabel: string
    metrics: FaqMetric[]
  }
  categoriesHeading: string
  categoriesDescription: string
  categories: FaqCategoryContent[]
  guidesHeading: string
  guidesDescription: string
  guides: FaqGuide[]
  support: FaqSupport
}

export const faqCopy: Record<Language, FaqPageCopy> = {
  en: {
    hero: {
      eyebrow: 'Knowledge centre',
      title: 'Frequently asked brand protection questions',
      subtitle: 'We help manage and resolve online data exposure',
      description:
        'Every engagement starts with clarity. Explore how Traceremove isolates threats, fortifies owned assets, and drives growth while keeping your brand credible across English, French, and Spanish markets.',
      primaryCta: 'Talk with our strategists',
      secondaryCta: 'Download the full FAQ deck',
      secondaryHref: 'mailto:support@traceremove.com?subject=Traceremove%20FAQ%20deck',
      assurance: 'Real practitioners respond within one business day with next steps tailored to your escalation level.',
      visualLabel: 'Animated dashboard showing incident response velocity',
      metrics: [
        {
          label: 'Average takedown time',
          value: '43m',
          annotation: 'Across coordinated search, marketplace, and social escalations in 2024.',
        },
        {
          label: 'Multilingual response desk',
          value: '24 / 7',
          annotation: 'Follow-the-sun analysts and strategists dedicated to English, French, and Spanish markets.',
        },
        {
          label: 'Engagement satisfaction',
          value: '96%',
          annotation: 'Clients rating our proactive communication and reporting as “exceptional”.',
        },
      ],
    },
    categoriesHeading: 'Choose a focus area',
    categoriesDescription:
      'Select the pressure you are facing to see recommended playbooks, time-to-value expectations, and the exact workflows we deploy.',
    categories: [
      {
        id: 'brand-defense',
        eyebrow: 'Brand defence',
        title: 'Protecting domains, listings, and search visibility',
        description:
          'We pair continuous monitoring with registrar, marketplace, and platform relationships so your owned assets stay trusted.',
        signalLabel: 'Hotline engagement',
        signalValue: 'under 15 min',
        signalDetail: 'Escalations routed to analysts and legal partners within minutes.',
        items: [
          {
            question: 'We help manage and resolve online data exposure',
            answer: [
              'Our registrar and hosting partners prioritise our tickets thanks to pre-approved workflows and legal templates. We typically secure takedowns or suspensions in under an hour once we receive proof of infringement.',
              'If litigation is required, we coordinate sworn statements, evidence bundles, and local counsel introductions so you have a complete chain of custody.',
            ],
          },
          {
            question: 'Do you monitor marketplaces and app stores automatically?',
            answer: [
              'Yes. We run multilingual scrapers and API connections across leading marketplaces, app stores, and review platforms. Alerts trigger analysts who validate severity before responding, so you only see prioritised actions.',
              'Dashboards surface removal status, takedown IDs, and open disputes so your stakeholders stay informed without chasing emails.',
            ],
          },
          {
            question: 'What evidence do you need from us to begin?',
            answer: [
              'A list of official domains, social handles, and authorised sellers accelerates onboarding. We can also ingest historic incidents and trademark documentation to speed up enforcement.',
              'If you lack formal policies, we draft interim guidance so your customer support, social, and legal teams know how to route issues instantly.',
            ],
          },
        ],
      },
      {
        id: 'review-integrity',
        eyebrow: 'Review integrity',
        title: 'Controlling fake reviews and sentiment sabotage',
        description:
          'Protect pipeline by verifying reviews, restoring authentic feedback, and shutting down coordinated negative campaigns.',
        signalLabel: 'Recovery timeline',
        signalValue: '7-10 days',
        signalDetail: 'Average time to normalise sentiment after a coordinated attack.',
        items: [
          {
            question: 'How do you spot coordinated fake reviews quickly?',
            answer: [
              'Our anomaly detection flags velocity spikes, language anomalies, and shared device fingerprints. Analysts cross-reference with CRM and support data to confirm authenticity.',
              'We then coordinate platform disputes with legal arguments in the appropriate language, providing template responses for your customer teams to close the loop gracefully.',
            ],
          },
          {
            question: 'Can you help collect genuine reviews to rebuild trust?',
            answer: [
              'Yes. We run compliant outreach sequences and partner enablement in English, French, and Spanish to activate real advocates. We coach your teams on post-resolution follow-ups that encourage verified feedback.',
              'Our reporting shows sentiment recovery over time so executives can see confidence returning across regions.',
            ],
          },
          {
            question: 'Do you coordinate with marketplaces and local regulators?',
            answer: [
              'We maintain contacts across major marketplaces, consumer watchdogs, and advertising standards bodies. When needed we prepare bilingual dossiers aligning with local legislation to accelerate removals.',
              'You stay informed with a secure log of submissions, rulings, and next steps so compliance stakeholders remain aligned.',
            ],
          },
        ],
      },
      {
        id: 'go-to-market',
        eyebrow: 'Go-to-market readiness',
        title: 'Aligning growth and protection programmes',
        description:
          'Traceremove embeds with marketing, product, and legal so every launch balances acquisition, retention, and risk mitigation.',
        signalLabel: 'Activation runway',
        signalValue: '30 days',
        signalDetail: 'We help manage and resolve online data exposure',
        items: [
          {
            question: 'How do you integrate with our internal teams?',
            answer: [
              'We form blended squads with your growth, comms, and legal stakeholders. Weekly stand-ups, shared dashboards, and clear playbooks keep everyone aligned regardless of language or timezone.',
              'Every workstream includes executive-ready status notes so leadership sees the measurable impact on pipeline and trust.',
            ],
          },
          {
            question: 'What reporting can we expect?',
            answer: [
              'Expect living dashboards covering search health, review velocity, domain integrity, and crisis drills. We also deliver narrative recaps with recommended experiments and risk posture updates.',
              'For sensitive incidents we supply encrypted evidence packets and legal-ready summaries that document every decision.',
            ],
          },
          {
            question: 'Can engagements scale up or down quickly?',
            answer: [
              'Yes. Pods expand with specialised analysts, translators, or media strategists as threat levels rise. When stability returns we transition to monitoring mode while preserving playbooks for rapid reactivation.',
              'You retain access to all artefacts, workflows, and dashboards we build so momentum continues even if the pod scales down.',
            ],
          },
        ],
      },
    ],
    guidesHeading: 'Deepen your understanding',
    guidesDescription:
      'Explore the resources our clients use to brief executives, align teams, and accelerate response times before crises unfold.',
    guides: [
      {
        id: 'playbooks',
        eyebrow: 'Playbooks',
        title: 'Download multilingual mitigation sequences',
        description:
          'Step-by-step crisis rehearsal templates, communication frameworks, and escalation matrices tailored to global brands.',
        ctaLabel: 'Browse resources',
        target: 'resources',
      },
      {
        id: 'evidence',
        eyebrow: 'Proof in action',
        title: 'See how brands recovered credibility fast',
        description:
          'Case studies highlighting domain recoveries, review normalisation, and proactive defence wins across industries.',
        ctaLabel: 'View case studies',
        target: 'caseStudies',
      },
      {
        id: 'insights',
        eyebrow: 'Insights',
        title: 'Stay ahead of emerging threat patterns',
        description:
          'Long-form articles from our strategists covering SEO integrity, insider tactics, and cross-market brand stewardship.',
        ctaLabel: 'Read the blog',
        target: 'blog',
      },
    ],
    support: {
      title: 'Need a tailored answer?',
      subtitle: 'We triage urgent escalations and long-term programmes in parallel so nothing slips through.',
      notes: [
        'Connect directly with the multilingual strategist overseeing your sector for rapid context.',
        'Share evidence, goals, and timelines securely — we respond within one business day.',
        'Urgent matters trigger our 24/7 escalation desk with registrar, marketplace, and legal partners looped in instantly.',
      ],
      channels: [
        { label: 'Escalation hotline', detail: '+1 (472) 248 0235 · 24/7' },
        { label: 'WhatsApp command desk', detail: '+1 (472) 248 0235' },
        { label: 'Email', detail: 'support@traceremove.com' },
      ],
      ctaLabel: 'Open the contact form',
      ctaSecondary: 'Message us on WhatsApp',
      ctaSecondaryHref: 'https://wa.me/16063022958',
    },
  },
  fr: {
    hero: {
      eyebrow: 'Centre de connaissances',
      title: 'Questions fréquentes sur la protection de marque',
      subtitle:
        'Réponses destinées aux directions marketing, communication et juridique qui protègent leur réputation en trois langues.',
      description:
        'Chaque mission commence par la clarté. Découvrez comment Traceremove neutralise les menaces, sécurise vos actifs et stimule la croissance tout en préservant la crédibilité de votre marque en français, anglais et espagnol.',
      primaryCta: 'Parler à nos stratèges',
      secondaryCta: 'Télécharger le guide complet',
      secondaryHref: 'mailto:support@traceremove.com?subject=Guide%20FAQ%20Traceremove',
      assurance: 'Nos spécialistes répondent sous un jour ouvré avec un plan adapté au niveau d’urgence.',
      visualLabel: 'Tableau de bord animé illustrant la vitesse de réponse aux incidents',
      metrics: [
        {
          label: 'Temps moyen de retrait',
          value: '43 min',
          annotation: 'Sur les suppressions coordonnées recherche, marketplaces et réseaux sociaux en 2024.',
        },
        {
          label: 'Cellule multilingue',
          value: '24 h / 7 j',
          annotation: 'Analystes et stratèges dédiés aux marchés francophone, hispanophone et anglophone.',
        },
        {
          label: 'Satisfaction clients',
          value: '96 %',
          annotation: 'Clients qualifiant notre communication proactive et nos rapports d’« exceptionnels ».',
        },
      ],
    },
    categoriesHeading: 'Choisissez votre enjeu',
    categoriesDescription:
      'Sélectionnez la pression que vous subissez pour découvrir nos playbooks recommandés, la vitesse de mise en œuvre et les workflows activés.',
    categories: [
      {
        id: 'brand-defense',
        eyebrow: 'Défense de marque',
        title: 'Protéger domaines, fiches et visibilité search',
        description:
          'Nous combinons veille continue et relations avec registraires, marketplaces et plateformes pour sécuriser vos actifs.',
        signalLabel: 'Prise en charge hotline',
        signalValue: 'moins de 15 min',
        signalDetail: 'Escalades orientées vers analystes et juristes en quelques minutes.',
        items: [
          {
            question: 'Combien de temps pour supprimer un faux domaine ou site cloné ?',
            answer: [
              'Nos partenaires registraires et hébergeurs priorisent nos tickets grâce à des workflows prévalidés et des modèles juridiques. Nous obtenons généralement suspension ou retrait en moins d’une heure après réception des preuves.',
              'Si une action juridique est nécessaire, nous coordonnons attestations, dossiers de preuves et mises en relation avec des avocats locaux afin d’assurer une traçabilité complète.',
            ],
          },
          {
            question: 'Surveillez-vous automatiquement marketplaces et app stores ?',
            answer: [
              'Oui. Nous opérons des scrapers multilingues et connexions API sur les principales marketplaces, stores et plateformes d’avis. Les alertes déclenchent une validation humaine qui priorise les actions pour votre équipe.',
              'Des tableaux de bord partagés affichent l’état des retraits, les identifiants de tickets et les litiges ouverts pour informer vos parties prenantes sans multiplier les emails.',
            ],
          },
          {
            question: 'Quelles informations fournir pour démarrer ?',
            answer: [
              'Une liste de vos domaines officiels, réseaux sociaux et revendeurs autorisés accélère l’onboarding. Nous pouvons également intégrer vos incidents passés et documents de marque pour renforcer l’exécution.',
              'Si vous n’avez pas encore de politique formalisée, nous rédigeons des consignes transitoires afin que support, social media et juridique sachent comment escalader immédiatement.',
            ],
          },
        ],
      },
      {
        id: 'review-integrity',
        eyebrow: 'Intégrité des avis',
        title: 'Contrôler faux avis et sabotage de sentiment',
        description:
          'Protégez votre pipeline en vérifiant les avis, en restaurant les retours authentiques et en stoppant les campagnes négatives coordonnées.',
        signalLabel: 'Retour à la normale',
        signalValue: '7 à 10 jours',
        signalDetail: 'Temps moyen pour stabiliser le sentiment après une attaque coordonnée.',
        items: [
          {
            question: 'Comment détectez-vous rapidement des faux avis coordonnés ?',
            answer: [
              'Nos modèles détectent pics de volume, anomalies linguistiques et empreintes d’appareils partagés. Les analystes croisent ensuite avec vos données CRM et support pour confirmer l’authenticité.',
              'Nous pilotons ensuite les litiges plateformes avec argumentaires juridiques adaptés à la langue, en fournissant des réponses types à vos équipes relation clients.',
            ],
          },
          {
            question: 'Pouvez-vous encourager les avis authentiques ?',
            answer: [
              'Oui. Nous orchestrons des séquences de relance conformes et des programmes partenaires en français, anglais et espagnol pour activer vos ambassadeurs. Nous accompagnons vos équipes sur les suivis post-résolution.',
              'Nos rapports visualisent la remontée du sentiment afin que les dirigeants constatent le retour de la confiance par région.',
            ],
          },
          {
            question: 'Coordonnez-vous avec marketplaces et régulateurs ?',
            answer: [
              'Nous entretenons des contacts auprès des principales marketplaces, autorités de consommation et instances publicitaires. Lorsque nécessaire nous préparons des dossiers bilingues alignés sur la législation locale.',
              'Vous disposez d’un registre sécurisé des dépôts, décisions et prochaines étapes pour garder conformité et juridique alignés.',
            ],
          },
        ],
      },
      {
        id: 'go-to-market',
        eyebrow: 'Go-to-market',
        title: 'Aligner croissance et protection',
        description:
          'Traceremove s’intègre à vos équipes marketing, produit et juridique pour lancer en alliant acquisition, rétention et mitigation des risques.',
        signalLabel: 'Mise en place',
        signalValue: '30 jours',
        signalDetail: 'De la découverte à un pod réputation multilingue pleinement opérationnel.',
        items: [
          {
            question: 'Comment collaborez-vous avec nos équipes internes ?',
            answer: [
              'Nous constituons des squads hybrides avec vos parties prenantes growth, communication et juridique. Points hebdomadaires, dashboards partagés et playbooks clairs maintiennent l’alignement malgré les fuseaux horaires.',
              'Chaque chantier inclut un reporting exécutif pour démontrer l’impact sur le pipeline et la confiance.',
            ],
          },
          {
            question: 'Quel reporting fournir ?',
            answer: [
              'Vous disposez de tableaux de bord vivants couvrant santé SEO, vélocité des avis, intégrité des domaines et exercices de crise. Nous livrons aussi des synthèses narratives avec recommandations et évolution du risque.',
              'Pour les incidents sensibles nous fournissons des dossiers chiffrés et résumés prêts pour le juridique documentant chaque décision.',
            ],
          },
          {
            question: 'Peut-on ajuster rapidement la capacité ?',
            answer: [
              'Oui. Les pods s’étoffent avec analystes, traducteurs ou stratèges médias selon le niveau de menace. Une fois la stabilité revenue, nous passons en mode monitoring tout en conservant les playbooks pour redéployer vite.',
              'Vous gardez l’accès à tous les livrables, workflows et dashboards créés afin de conserver le momentum même en réduisant la voilure.',
            ],
          },
        ],
      },
    ],
    guidesHeading: 'Approfondir',
    guidesDescription:
      'Parcourez les ressources utilisées par nos clients pour informer leurs dirigeants, aligner les équipes et accélérer les réponses avant la crise.',
    guides: [
      {
        id: 'playbooks',
        eyebrow: 'Playbooks',
        title: 'Téléchargez nos séquences multilingues',
        description:
          'Gabarits d’exercices de crise, cadres de communication et matrices d’escalade adaptés aux marques internationales.',
        ctaLabel: 'Voir les ressources',
        target: 'resources',
      },
      {
        id: 'evidence',
        eyebrow: 'Résultats',
        title: 'Découvrez des retours à la normale express',
        description:
          'Études de cas montrant récupération de domaines, normalisation d’avis et succès défensifs dans plusieurs secteurs.',
        ctaLabel: 'Consulter les cas clients',
        target: 'caseStudies',
      },
      {
        id: 'insights',
        eyebrow: 'Insights',
        title: 'Anticiper les nouveaux schémas de menaces',
        description:
          'Articles approfondis de nos stratèges sur l’intégrité SEO, les tactiques insiders et la gouvernance de marque internationale.',
        ctaLabel: 'Lire le blog',
        target: 'blog',
      },
    ],
    support: {
      title: 'Besoin d’une réponse sur mesure ?',
      subtitle: 'Nous traitons urgences et programmes de fond en parallèle pour que rien ne soit laissé de côté.',
      notes: [
        'Accédez directement au stratège multilingue référent de votre secteur pour un contexte immédiat.',
        'Partagez preuves, objectifs et délais en toute sécurité — réponse sous un jour ouvré.',
        'Les urgences déclenchent notre desk 24/7 avec registraires, marketplaces et partenaires juridiques mobilisés instantanément.',
      ],
      channels: [
        { label: 'Hotline d’escalade', detail: '+1 (472) 248 0235 · 24/7' },
        { label: 'WhatsApp command desk', detail: '+1 (472) 248 0235' },
        { label: 'Email', detail: 'support@traceremove.com' },
      ],
      ctaLabel: 'Ouvrir le formulaire',
      ctaSecondary: 'Nous écrire sur WhatsApp',
      ctaSecondaryHref: 'https://wa.me/16063022958',
    },
  },
  es: {
    hero: {
      eyebrow: 'Centro de conocimiento',
      title: 'Preguntas frecuentes sobre protección de marca',
      subtitle:
        'Respuestas para líderes de marketing, comunicación y legal que resguardan su reputación en tres idiomas.',
      description:
        'Cada colaboración comienza con claridad. Descubre cómo Traceremove neutraliza amenazas, refuerza tus activos y acelera el crecimiento sin perder credibilidad en inglés, francés y español.',
      primaryCta: 'Habla con nuestros estrategas',
      secondaryCta: 'Descargar el dossier completo',
      secondaryHref: 'mailto:support@traceremove.com?subject=FAQ%20Traceremove',
      assurance: 'Respondemos en menos de un día hábil con los siguientes pasos adecuados a tu nivel de urgencia.',
      visualLabel: 'Panel animado que muestra la velocidad de respuesta ante incidentes',
      metrics: [
        {
          label: 'Tiempo medio de retirada',
          value: '43 min',
          annotation: 'En eliminaciones coordinadas en buscadores, marketplaces y redes en 2024.',
        },
        {
          label: 'Mesa multilingüe',
          value: '24 / 7',
          annotation: 'Analistas y estrategas dedicados a mercados en inglés, francés y español.',
        },
        {
          label: 'Satisfacción',
          value: '96 %',
          annotation: 'Clientes calificando nuestra comunicación proactiva y reportes como “excepcionales”.',
        },
      ],
    },
    categoriesHeading: 'Elige el frente prioritario',
    categoriesDescription:
      'Selecciona la presión que estás viviendo para revisar los playbooks sugeridos, tiempos estimados y workflows que activamos.',
    categories: [
      {
        id: 'brand-defense',
        eyebrow: 'Defensa de marca',
        title: 'Proteger dominios, fichas y visibilidad en buscadores',
        description:
          'Combinamos monitoreo continuo y alianzas con registradores, marketplaces y plataformas para blindar tus activos.',
        signalLabel: 'Respuesta de hotline',
        signalValue: 'menos de 15 min',
        signalDetail: 'Escaladas derivadas a analistas y aliados legales en minutos.',
        items: [
          {
            question: '¿Qué tan rápido eliminan dominios falsos o tiendas clonadas?',
            answer: [
              'Nuestros socios registradores y de hosting priorizan los tickets de Traceremove gracias a flujos aprobados y plantillas legales. Normalmente logramos suspensiones en menos de una hora tras recibir la evidencia.',
              'Si hace falta acción legal, coordinamos declaraciones juradas, paquetes probatorios e introducciones con abogados locales para asegurar trazabilidad completa.',
            ],
          },
          {
            question: '¿Monitorean marketplaces y tiendas de apps de forma automática?',
            answer: [
              'Sí. Ejecutamos rastreadores multilingües y conexiones API en los principales marketplaces, app stores y portales de reseñas. Las alertas generan validación humana para priorizar solo lo crítico.',
              'Los dashboards muestran estado de remociones, IDs de tickets y disputas abiertas para mantener informados a tus stakeholders sin correos interminables.',
            ],
          },
          {
            question: '¿Qué información necesitan de nuestra parte?',
            answer: [
              'Una lista de dominios oficiales, perfiles sociales y vendedores autorizados acelera la incorporación. También podemos cargar incidentes históricos y documentación de marca para fortalecer la ejecución.',
              'Si no cuentas con políticas formales, redactamos guías provisionales para que soporte, social media y legal sepan escalar al instante.',
            ],
          },
        ],
      },
      {
        id: 'review-integrity',
        eyebrow: 'Integridad de reseñas',
        title: 'Controlar reseñas falsas y sabotaje de sentimiento',
        description:
          'Protege el pipeline verificando reseñas, recuperando feedback auténtico y frenando campañas negativas coordinadas.',
        signalLabel: 'Recuperación estimada',
        signalValue: '7-10 días',
        signalDetail: 'Tiempo medio para normalizar el sentimiento tras un ataque coordinado.',
        items: [
          {
            question: '¿Cómo detectan rápidamente reseñas falsas coordinadas?',
            answer: [
              'Nuestros modelos identifican picos de volumen, anomalías de lenguaje y huellas de dispositivos compartidos. Luego los analistas contrastan con CRM y soporte para confirmar autenticidad.',
              'Coordinamos disputas con las plataformas aportando argumentos legales en el idioma correcto y plantillas de respuesta para tus equipos de atención.',
            ],
          },
          {
            question: '¿Ayudan a recopilar reseñas reales para recuperar confianza?',
            answer: [
              'Claro. Ejecutamos secuencias de outreach y programas de partners en inglés, francés y español para activar defensores reales. Entrenamos a tus equipos en seguimientos posteriores a la resolución.',
              'Los informes muestran la recuperación del sentimiento con el tiempo para que la dirección vea cómo vuelve la confianza en cada región.',
            ],
          },
          {
            question: '¿Trabajan con marketplaces y reguladores locales?',
            answer: [
              'Mantenemos contactos en marketplaces clave, organismos de defensa del consumidor y autoridades publicitarias. Cuando es necesario preparamos expedientes bilingües alineados a la normativa local para acelerar remociones.',
              'Dispones de un registro seguro de envíos, resoluciones y próximos pasos para mantener alineados a cumplimiento y legal.',
            ],
          },
        ],
      },
      {
        id: 'go-to-market',
        eyebrow: 'Preparación go-to-market',
        title: 'Alinear crecimiento y protección',
        description:
          'Traceremove se integra con marketing, producto y legal para equilibrar adquisición, retención y mitigación de riesgos en cada lanzamiento.',
        signalLabel: 'Puesta en marcha',
        signalValue: '30 días',
        signalDetail: 'Desde discovery hasta un pod reputacional multilingüe operativo.',
        items: [
          {
            question: '¿Cómo se integran con nuestros equipos?',
            answer: [
              'Formamos squads mixtas con tus líderes de growth, comunicación y legal. Standups semanales, dashboards compartidos y playbooks claros mantienen la coordinación sin importar el huso horario.',
              'Cada frente incluye reportes ejecutivos que muestran el impacto medible en pipeline y confianza.',
            ],
          },
          {
            question: '¿Qué reporting entregan?',
            answer: [
              'Proveemos tableros vivos con salud SEO, velocidad de reseñas, integridad de dominios y simulacros de crisis. Además entregamos resúmenes narrativos con experimentos recomendados y postura de riesgo.',
              'En incidentes sensibles compartimos paquetes cifrados con evidencias y resúmenes listos para equipos legales.',
            ],
          },
          {
            question: '¿Se puede escalar la colaboración rápidamente?',
            answer: [
              'Sí. Los pods se amplían con analistas, traductores o estrategas de medios según suba la amenaza. Cuando vuelve la estabilidad pasamos a modo monitoreo manteniendo playbooks listos para reactivarse.',
              'Conservas acceso a los artefactos, flujos y tableros creados para que el momentum siga aun con menos capacidad.',
            ],
          },
        ],
      },
    ],
    guidesHeading: 'Amplía tu visión',
    guidesDescription:
      'Revisa los recursos que usan nuestros clientes para informar a la dirección, alinear equipos y acelerar respuestas antes de la crisis.',
    guides: [
      {
        id: 'playbooks',
        eyebrow: 'Playbooks',
        title: 'Descarga secuencias multilingües de mitigación',
        description:
          'Plantillas de simulacros, marcos de comunicación y matrices de escalamiento para marcas globales.',
        ctaLabel: 'Explorar recursos',
        target: 'resources',
      },
      {
        id: 'evidence',
        eyebrow: 'Resultados',
        title: 'Casos de recuperación acelerada',
        description:
          'Estudios de caso que muestran recuperación de dominios, normalización de reseñas y victorias defensivas.',
        ctaLabel: 'Ver casos de éxito',
        target: 'caseStudies',
      },
      {
        id: 'insights',
        eyebrow: 'Insights',
        title: 'Anticipa patrones de amenaza emergentes',
        description:
          'Artículos en profundidad sobre integridad SEO, tácticas internas y gobierno de marca multilingüe.',
        ctaLabel: 'Visitar el blog',
        target: 'blog',
      },
    ],
    support: {
      title: '¿Necesitas una respuesta a medida?',
      subtitle: 'Gestionamos urgencias y programas de largo plazo en paralelo para que nada se escape.',
      notes: [
        'Conecta con el estratega multilingüe responsable de tu sector para obtener contexto inmediato.',
        'Comparte evidencias, objetivos y plazos de forma segura — respondemos en menos de un día hábil.',
        'Las urgencias activan nuestra mesa 24/7 con registradores, marketplaces y aliados legales listos para intervenir.',
      ],
      channels: [
        { label: 'Línea de escalación', detail: '+1 (472) 248 0235 · 24/7' },
        { label: 'Desk WhatsApp', detail: '+1 (472) 248 0235' },
        { label: 'Email', detail: 'support@traceremove.com' },
      ],
      ctaLabel: 'Abrir el formulario',
      ctaSecondary: 'Escríbenos por WhatsApp',
      ctaSecondaryHref: 'https://wa.me/16063022958',
    },
  },
}


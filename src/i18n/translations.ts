export const supportedLanguages = ['en', 'fr', 'es', 'ru'] as const
export type SupportedLanguage = (typeof supportedLanguages)[number]

type TranslationSet = {
  nav: {
    services: string
    caseStudies: string
    resources: string
    contact: string
  }
  hero: {
    title: string
    subtitle: string
    primaryCta: string
    secondaryCta: string
  }
  services: {
    heading: string
    items: {
      emergencyOrm: string
      removalPackages: string
      securityTakedown: string
      designOps: string
    }
  }
  testimonials: {
    heading: string
    subheading: string
  }
  blog: {
    heading: string
    subheading: string
    readMore: string
  }
  footer: {
    headline: string
    compliance: string
    privacy: string
    terms: string
    careers: string
  }
  contact: {
    heading: string
    subheading: string
  }
  form: {
    name: string
    email: string
    urgency: string
    links: string
    deadline: string
    submit: string
    success: string
    error: string
  }
}

export const translations: Record<SupportedLanguage, TranslationSet> = {
  en: {
    nav: {
      services: 'Services',
      caseStudies: 'Case Studies',
      resources: 'Resources',
      contact: 'Contact',
    },
    hero: {
      title: 'Emergency Online Reputation Management: remove negative content in 24–48 hours.',
      subtitle:
        'Rapid-response packages for link removal, de-indexing, and digital crisis control backed by evidence logs and NDA protection.',
      primaryCta: 'Start a removal request',
      secondaryCta: 'See service options',
    },
    services: {
      heading: 'Core services built for urgent, high-stakes situations.',
      items: {
        emergencyOrm: 'Emergency ORM',
        removalPackages: 'Removal Packages',
        securityTakedown: 'Security Takedown',
        designOps: 'Design Ops',
      },
    },
    testimonials: {
      heading: 'Trusted by global counsel, founders, and public figures.',
      subheading: 'Confidentiality-first engagements with measurable outcomes.',
    },
    blog: {
      heading: 'Media & intelligence briefs',
      subheading: 'Press releases, case studies, and thought leadership.',
      readMore: 'Read more',
    },
    footer: {
      headline: 'Discrete response teams available 24/7.',
      compliance: 'Compliance & security',
      privacy: 'Privacy policy',
      terms: 'Terms',
      careers: 'Careers',
    },
    contact: {
      heading: 'Speak with an analyst',
      subheading: 'We respond within 2 hours with a secure intake.',
    },
    form: {
      name: 'Name',
      email: 'Email',
      urgency: 'Urgency',
      links: 'Links to remove',
      deadline: 'Desired deadline',
      submit: 'Send secure request',
      success: 'Your request has been received. We will respond shortly.',
      error: 'We could not submit the request. Please try again or call.',
    },
  },
  fr: {
    nav: {
      services: 'Services',
      caseStudies: 'Études de cas',
      resources: 'Ressources',
      contact: 'Contact',
    },
    hero: {
      title:
        'Gestion de réputation en ligne d’urgence : suppression de contenu négatif en 24–48 heures.',
      subtitle:
        'Des forfaits d’intervention rapide pour le retrait de liens, la désindexation et le contrôle de crise numérique.',
      primaryCta: 'Lancer une demande',
      secondaryCta: 'Voir les services',
    },
    services: {
      heading: 'Services clés conçus pour les situations critiques.',
      items: {
        emergencyOrm: 'ORM d’urgence',
        removalPackages: 'Forfaits de suppression',
        securityTakedown: 'Takedown sécurité',
        designOps: 'Design Ops',
      },
    },
    testimonials: {
      heading: 'Fiable pour les cabinets, fondateurs et figures publiques.',
      subheading: 'Engagements confidentiels et résultats mesurables.',
    },
    blog: {
      heading: 'Médias & notes stratégiques',
      subheading: 'Communiqués, études de cas et analyses.',
      readMore: 'Lire la suite',
    },
    footer: {
      headline: 'Équipes d’intervention disponibles 24/7.',
      compliance: 'Conformité & sécurité',
      privacy: 'Politique de confidentialité',
      terms: 'Conditions',
      careers: 'Carrières',
    },
    contact: {
      heading: 'Parler à un analyste',
      subheading: 'Réponse sous 2 heures avec un canal sécurisé.',
    },
    form: {
      name: 'Nom',
      email: 'Email',
      urgency: 'Urgence',
      links: 'Liens à supprimer',
      deadline: 'Date limite souhaitée',
      submit: 'Envoyer la demande',
      success: 'Votre demande a été reçue. Nous revenons vers vous rapidement.',
      error: 'Échec de l’envoi. Merci de réessayer ou d’appeler.',
    },
  },
  es: {
    nav: {
      services: 'Servicios',
      caseStudies: 'Casos',
      resources: 'Recursos',
      contact: 'Contacto',
    },
    hero: {
      title:
        'Gestión de reputación online de emergencia: elimina contenido negativo en 24–48 horas.',
      subtitle:
        'Paquetes de respuesta rápida para eliminación de enlaces, desindexación y control de crisis digital.',
      primaryCta: 'Iniciar solicitud',
      secondaryCta: 'Ver servicios',
    },
    services: {
      heading: 'Servicios esenciales para situaciones críticas.',
      items: {
        emergencyOrm: 'ORM de emergencia',
        removalPackages: 'Paquetes de eliminación',
        securityTakedown: 'Takedown de seguridad',
        designOps: 'Design Ops',
      },
    },
    testimonials: {
      heading: 'Confiado por asesores, fundadores y figuras públicas.',
      subheading: 'Compromisos confidenciales con resultados medibles.',
    },
    blog: {
      heading: 'Medios y reportes',
      subheading: 'Comunicados, estudios de caso y liderazgo de pensamiento.',
      readMore: 'Leer más',
    },
    footer: {
      headline: 'Equipos discretos disponibles 24/7.',
      compliance: 'Cumplimiento y seguridad',
      privacy: 'Política de privacidad',
      terms: 'Términos',
      careers: 'Carreras',
    },
    contact: {
      heading: 'Habla con un analista',
      subheading: 'Respondemos en 2 horas con un canal seguro.',
    },
    form: {
      name: 'Nombre',
      email: 'Correo electrónico',
      urgency: 'Urgencia',
      links: 'Enlaces a eliminar',
      deadline: 'Fecha límite deseada',
      submit: 'Enviar solicitud',
      success: 'Tu solicitud ha sido recibida. Responderemos pronto.',
      error: 'No se pudo enviar la solicitud. Intenta de nuevo.',
    },
  },
  ru: {
    nav: {
      services: 'Услуги',
      caseStudies: 'Кейсы',
      resources: 'Ресурсы',
      contact: 'Контакт',
    },
    hero: {
      title: 'Экстренное управление репутацией: удаление негативного контента за 24–48 часов.',
      subtitle:
        'Пакеты быстрого реагирования: удаление ссылок, деиндексация и контроль цифрового кризиса с NDA.',
      primaryCta: 'Отправить запрос',
      secondaryCta: 'Посмотреть услуги',
    },
    services: {
      heading: 'Ключевые услуги для срочных ситуаций.',
      items: {
        emergencyOrm: 'Экстренный ORM',
        removalPackages: 'Пакеты удаления',
        securityTakedown: 'Security Takedown',
        designOps: 'Design Ops',
      },
    },
    testimonials: {
      heading: 'Нам доверяют юристы, основатели и публичные лица.',
      subheading: 'Конфиденциальные проекты с измеримыми результатами.',
    },
    blog: {
      heading: 'Медиа и аналитика',
      subheading: 'Пресс-релизы, кейсы и экспертные обзоры.',
      readMore: 'Читать далее',
    },
    footer: {
      headline: 'Дежурные команды 24/7.',
      compliance: 'Комплаенс и безопасность',
      privacy: 'Политика конфиденциальности',
      terms: 'Условия',
      careers: 'Карьера',
    },
    contact: {
      heading: 'Связаться с аналитиком',
      subheading: 'Ответим в течение 2 часов через защищенный канал.',
    },
    form: {
      name: 'Имя',
      email: 'Эл. почта',
      urgency: 'Срочность',
      links: 'Ссылки для удаления',
      deadline: 'Желаемый срок',
      submit: 'Отправить запрос',
      success: 'Запрос получен. Мы скоро свяжемся с вами.',
      error: 'Не удалось отправить запрос. Попробуйте еще раз.',
    },
  },
}

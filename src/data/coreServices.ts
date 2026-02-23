import { type Language, withRussianFallback } from './pages'

export type CoreServiceSlug = 'emergency-orm' | 'removal-packages' | 'security-takedown' | 'design-ops'

export interface CoreServiceCopy {
  title: string
  summary: string
  timeline: string
  priceRange: string
  includesHeading: string
  includes: string[]
  processHeading: string
  steps: { title: string; description: string }[]
  formHeading: string
  formIntro: string
  fields: {
    name: string
    email: string
    urgency: string
    links: string
    deadline: string
  }
  urgencyOptions: string[]
  submit: string
  successTitle: string
  successMessage: string
  errorMessage: string
}

export interface CoreServiceDefinition {
  slug: CoreServiceSlug
  copy: Record<Language, CoreServiceCopy>
}

const baseProcess = (language: Language) =>
  withRussianFallback(
    {
      en: [
        { title: 'NDA & brief', description: 'We align on scope, constraints, and evidence requirements before any outreach.' },
        { title: 'Diagnosis & plan', description: 'We map URLs, platform policies, and legal levers into a 24–48h execution plan.' },
        { title: 'Execution & report', description: 'We deliver takedown actions, status tracking, and a final evidence log.' },
      ],
      fr: [
        { title: 'NDA & brief', description: 'Nous alignons le périmètre, les contraintes et les preuves attendues.' },
        { title: 'Diagnostic & plan', description: 'Nous cartographions URLs, politiques et leviers juridiques pour un plan 24–48h.' },
        { title: 'Exécution & rapport', description: 'Nous exécutons les retraits, suivons le statut et livrons un rapport final.' },
      ],
      es: [
        { title: 'NDA y brief', description: 'Alineamos alcance, restricciones y pruebas antes de actuar.' },
        { title: 'Diagnóstico y plan', description: 'Mapeamos URLs, políticas y recursos legales en un plan 24–48h.' },
        { title: 'Ejecución y reporte', description: 'Ejecutamos retiradas, seguimiento y reporte final con evidencias.' },
      ],
    }
  )[language]

export const coreServices: CoreServiceDefinition[] = [
  {
    slug: 'emergency-orm',
    copy: withRussianFallback(
      {
        en: {
          title: 'Emergency Online Reputation Management',
          summary: 'Rapid-response removal and suppression program for brand crises and executive threats.',
          timeline: 'Typical timeline: 24–48 hours for the first takedowns; 2–4 weeks for stabilization.',
          priceRange: 'Typical price range: $6,500–$18,000 depending on platform volume.',
          includesHeading: 'What’s included',
          includes: [
            'Priority takedown queue across platforms and marketplaces',
            'Search result monitoring and escalation matrix',
            'Daily comms cadence and evidence logs',
          ],
          processHeading: 'Three-step process',
          steps: baseProcess('en'),
          formHeading: 'Request emergency response',
          formIntro: 'Share the urgency level and the URLs you need removed. We will respond within one business day.',
          fields: {
            name: 'Name',
            email: 'Work email',
            urgency: 'Urgency',
            links: 'Links to remove',
            deadline: 'Desired deadline',
          },
          urgencyOptions: ['Immediate (0–24h)', 'Urgent (24–48h)', 'Standard (3–5 days)'],
          submit: 'Submit request',
          successTitle: 'Request received',
          successMessage: 'We will review and respond with an action plan shortly.',
          errorMessage: 'We could not submit the request. Please try again or email contact@traceremove.com.',
        },
        fr: {
          title: 'Gestion d’urgence de réputation en ligne',
          summary: 'Programme de retrait rapide et de suppression pour crises de marque et dirigeants exposés.',
          timeline: 'Délai moyen : 24–48h pour les premiers retraits ; 2–4 semaines pour stabiliser.',
          priceRange: 'Fourchette : 6 500–18 000 $ selon le volume de plateformes.',
          includesHeading: 'Inclus',
          includes: [
            'File prioritaire de retraits multi-plateformes',
            'Monitoring SERP et matrice d’escalade',
            'Cadence quotidienne et journaux de preuve',
          ],
          processHeading: 'Processus en trois étapes',
          steps: baseProcess('fr'),
          formHeading: 'Demander une intervention urgente',
          formIntro: 'Indiquez l’urgence et les URLs à supprimer. Réponse sous un jour ouvré.',
          fields: {
            name: 'Nom',
            email: 'Email professionnel',
            urgency: 'Urgence',
            links: 'Liens à supprimer',
            deadline: 'Échéance souhaitée',
          },
          urgencyOptions: ['Immédiat (0–24h)', 'Urgent (24–48h)', 'Standard (3–5 jours)'],
          submit: 'Envoyer la demande',
          successTitle: 'Demande reçue',
          successMessage: 'Nous revenons vers vous rapidement avec un plan d’action.',
          errorMessage: 'Impossible d’envoyer la demande. Réessayez ou écrivez à contact@traceremove.com.',
        },
        es: {
          title: 'Gestión urgente de reputación online',
          summary: 'Programa de retirada rápida y supresión para crisis de marca y ejecutivos expuestos.',
          timeline: 'Tiempo típico: 24–48h para las primeras retiradas; 2–4 semanas para estabilizar.',
          priceRange: 'Rango típico: 6.500–18.000 USD según el volumen de plataformas.',
          includesHeading: 'Incluye',
          includes: [
            'Cola prioritaria de retirada multi-plataforma',
            'Monitoreo SERP y matriz de escalado',
            'Cadencia diaria y registro de evidencias',
          ],
          processHeading: 'Proceso de tres pasos',
          steps: baseProcess('es'),
          formHeading: 'Solicitar respuesta urgente',
          formIntro: 'Comparte urgencia y URLs a remover. Respondemos en un día hábil.',
          fields: {
            name: 'Nombre',
            email: 'Email laboral',
            urgency: 'Urgencia',
            links: 'Links a remover',
            deadline: 'Fecha límite deseada',
          },
          urgencyOptions: ['Inmediato (0–24h)', 'Urgente (24–48h)', 'Estándar (3–5 días)'],
          submit: 'Enviar solicitud',
          successTitle: 'Solicitud recibida',
          successMessage: 'Responderemos pronto con un plan de acción.',
          errorMessage: 'No se pudo enviar. Intenta nuevamente o escribe a contact@traceremove.com.',
        },
      },
      {
        title: 'Экстренное управление репутацией в сети',
        summary: 'Программа срочного удаления и подавления негативного контента для кризисов бренда и руководителей.',
        timeline: 'Типичный срок: 24–48 часов для первых удалений; 2–4 недели для стабилизации.',
        priceRange: 'Диапазон: $6 500–18 000 в зависимости от объёма платформ.',
        includesHeading: 'Что входит',
        includes: [
          'Приоритетная очередь удаления по платформам',
          'Мониторинг выдачи и матрица эскалации',
          'Ежедневные отчёты и доказательная база',
        ],
        processHeading: 'Процесс в три шага',
        steps: baseProcess('ru'),
        formHeading: 'Запросить экстренную реакцию',
        formIntro: 'Укажите срочность и ссылки для удаления. Ответим в течение рабочего дня.',
        fields: {
          name: 'Имя',
          email: 'Рабочий email',
          urgency: 'Срочность',
          links: 'Ссылки на удаление',
          deadline: 'Желаемый срок',
        },
        urgencyOptions: ['Срочно (0–24ч)', 'Высокая срочность (24–48ч)', 'Стандарт (3–5 дней)'],
        submit: 'Отправить запрос',
        successTitle: 'Запрос получен',
        successMessage: 'Мы скоро свяжемся с планом действий.',
        errorMessage: 'Не удалось отправить запрос. Попробуйте снова или напишите contact@traceremove.com.',
      }
    ),
  },
  {
    slug: 'removal-packages',
    copy: withRussianFallback(
      {
        en: {
          title: 'Removal Packages',
          summary: 'Pre-scoped packages for link removal, delisting, and negative review cleanup.',
          timeline: 'Typical timeline: 5–12 business days depending on platform response times.',
          priceRange: 'Typical price range: $2,500–$9,500 per batch of URLs.',
          includesHeading: 'What’s included',
          includes: ['Platform policy analysis', 'Removal request preparation', 'Outcome tracking and recheck'],
          processHeading: 'Three-step process',
          steps: baseProcess('en'),
          formHeading: 'Request a removal package',
          formIntro: 'Send the links and the outcome you need. We will confirm scope and pricing.',
          fields: {
            name: 'Name',
            email: 'Work email',
            urgency: 'Urgency',
            links: 'Links to remove',
            deadline: 'Desired deadline',
          },
          urgencyOptions: ['Standard (5–10 days)', 'Fast-track (3–5 days)', 'Ongoing monthly'],
          submit: 'Request package',
          successTitle: 'Request sent',
          successMessage: 'We will respond with scope and timelines shortly.',
          errorMessage: 'We could not submit the request. Please try again or email contact@traceremove.com.',
        },
        fr: {
          title: 'Packages de retrait',
          summary: 'Offres cadrées pour retrait de liens, déréférencement et nettoyage d’avis.',
          timeline: 'Délai moyen : 5–12 jours ouvrés selon les plateformes.',
          priceRange: 'Fourchette : 2 500–9 500 $ par lot d’URLs.',
          includesHeading: 'Inclus',
          includes: ['Analyse des politiques plateformes', 'Préparation des demandes', 'Suivi et recontrôle'],
          processHeading: 'Processus en trois étapes',
          steps: baseProcess('fr'),
          formHeading: 'Demander un package de retrait',
          formIntro: 'Partagez les liens et le résultat attendu. Nous confirmons périmètre et tarifs.',
          fields: {
            name: 'Nom',
            email: 'Email professionnel',
            urgency: 'Urgence',
            links: 'Liens à supprimer',
            deadline: 'Échéance souhaitée',
          },
          urgencyOptions: ['Standard (5–10 jours)', 'Accéléré (3–5 jours)', 'Mensuel'],
          submit: 'Demander le package',
          successTitle: 'Demande envoyée',
          successMessage: 'Nous revenons vers vous rapidement avec le périmètre.',
          errorMessage: 'Envoi impossible. Réessayez ou écrivez à contact@traceremove.com.',
        },
        es: {
          title: 'Paquetes de retirada',
          summary: 'Paquetes definidos para retirar enlaces, desindexar y limpiar reseñas negativas.',
          timeline: 'Tiempo típico: 5–12 días hábiles según la plataforma.',
          priceRange: 'Rango típico: 2.500–9.500 USD por lote de URLs.',
          includesHeading: 'Incluye',
          includes: ['Análisis de políticas', 'Preparación de solicitudes', 'Seguimiento y verificación'],
          processHeading: 'Proceso de tres pasos',
          steps: baseProcess('es'),
          formHeading: 'Solicitar paquete de retirada',
          formIntro: 'Comparte enlaces y el resultado deseado. Confirmaremos alcance y precio.',
          fields: {
            name: 'Nombre',
            email: 'Email laboral',
            urgency: 'Urgencia',
            links: 'Links a remover',
            deadline: 'Fecha límite deseada',
          },
          urgencyOptions: ['Estándar (5–10 días)', 'Rápido (3–5 días)', 'Mensual'],
          submit: 'Solicitar paquete',
          successTitle: 'Solicitud enviada',
          successMessage: 'Responderemos pronto con alcance y tiempos.',
          errorMessage: 'No se pudo enviar. Intenta nuevamente o escribe a contact@traceremove.com.',
        },
      },
      {
        title: 'Пакеты удаления',
        summary: 'Готовые пакеты для удаления ссылок, деиндексации и очистки отзывов.',
        timeline: 'Типичный срок: 5–12 рабочих дней в зависимости от платформы.',
        priceRange: 'Диапазон: $2 500–9 500 за пакет URL.',
        includesHeading: 'Что входит',
        includes: ['Анализ политики платформ', 'Подготовка запросов', 'Отслеживание результата'],
        processHeading: 'Процесс в три шага',
        steps: baseProcess('ru'),
        formHeading: 'Запросить пакет удаления',
        formIntro: 'Пришлите ссылки и ожидаемый результат. Мы подтвердим объём и стоимость.',
        fields: {
          name: 'Имя',
          email: 'Рабочий email',
          urgency: 'Срочность',
          links: 'Ссылки на удаление',
          deadline: 'Желаемый срок',
        },
        urgencyOptions: ['Стандарт (5–10 дней)', 'Ускоренно (3–5 дней)', 'Ежемесячно'],
        submit: 'Запросить пакет',
        successTitle: 'Запрос отправлен',
        successMessage: 'Мы скоро уточним объём и сроки.',
        errorMessage: 'Не удалось отправить запрос. Попробуйте снова или напишите contact@traceremove.com.',
      }
    ),
  },
  {
    slug: 'security-takedown',
    copy: withRussianFallback(
      {
        en: {
          title: 'Security Takedown',
          summary: 'Targeted removal for leaks, impersonation, and security exposure.',
          timeline: 'Typical timeline: 48–72 hours for critical incidents, 1–2 weeks for full cleanup.',
          priceRange: 'Typical price range: $7,500–$22,000 depending on severity.',
          includesHeading: 'What’s included',
          includes: ['Threat intake & triage', 'Legal-safe takedown workflow', 'Evidence vault and escalation log'],
          processHeading: 'Three-step process',
          steps: baseProcess('en'),
          formHeading: 'Report a security takedown',
          formIntro: 'Provide links and a deadline. We will confirm the response plan within 24 hours.',
          fields: {
            name: 'Name',
            email: 'Work email',
            urgency: 'Urgency',
            links: 'Links to remove',
            deadline: 'Desired deadline',
          },
          urgencyOptions: ['Critical (same day)', 'High (48–72h)', 'Standard (1–2 weeks)'],
          submit: 'Submit report',
          successTitle: 'Report received',
          successMessage: 'We will confirm the response plan shortly.',
          errorMessage: 'We could not submit the report. Please try again or email contact@traceremove.com.',
        },
        fr: {
          title: 'Retrait sécurité',
          summary: 'Retrait ciblé pour fuites, usurpation et exposition de sécurité.',
          timeline: 'Délai moyen : 48–72h pour incidents critiques, 1–2 semaines pour nettoyage complet.',
          priceRange: 'Fourchette : 7 500–22 000 $ selon la gravité.',
          includesHeading: 'Inclus',
          includes: ['Analyse de menace', 'Workflow juridique sécurisé', 'Coffre de preuves et journal d’escalade'],
          processHeading: 'Processus en trois étapes',
          steps: baseProcess('fr'),
          formHeading: 'Signaler un retrait sécurité',
          formIntro: 'Indiquez les liens et l’échéance. Plan confirmé sous 24h.',
          fields: {
            name: 'Nom',
            email: 'Email professionnel',
            urgency: 'Urgence',
            links: 'Liens à supprimer',
            deadline: 'Échéance souhaitée',
          },
          urgencyOptions: ['Critique (jour même)', 'Élevée (48–72h)', 'Standard (1–2 semaines)'],
          submit: 'Envoyer le signalement',
          successTitle: 'Signalement reçu',
          successMessage: 'Nous confirmons le plan rapidement.',
          errorMessage: 'Envoi impossible. Réessayez ou écrivez à contact@traceremove.com.',
        },
        es: {
          title: 'Retirada de seguridad',
          summary: 'Retirada específica para filtraciones, suplantaciones y exposición de seguridad.',
          timeline: 'Tiempo típico: 48–72h para incidentes críticos, 1–2 semanas para limpieza total.',
          priceRange: 'Rango típico: 7.500–22.000 USD según severidad.',
          includesHeading: 'Incluye',
          includes: ['Triage de amenazas', 'Workflow legal seguro', 'Bóveda de evidencias y escalado'],
          processHeading: 'Proceso de tres pasos',
          steps: baseProcess('es'),
          formHeading: 'Reportar retirada de seguridad',
          formIntro: 'Comparte links y fecha límite. Confirmamos plan en 24h.',
          fields: {
            name: 'Nombre',
            email: 'Email laboral',
            urgency: 'Urgencia',
            links: 'Links a remover',
            deadline: 'Fecha límite deseada',
          },
          urgencyOptions: ['Crítico (mismo día)', 'Alto (48–72h)', 'Estándar (1–2 semanas)'],
          submit: 'Enviar reporte',
          successTitle: 'Reporte recibido',
          successMessage: 'Confirmaremos el plan pronto.',
          errorMessage: 'No se pudo enviar. Intenta nuevamente o escribe a contact@traceremove.com.',
        },
      },
      {
        title: 'Удаление угроз безопасности',
        summary: 'Точечное удаление утечек, подмен и угроз безопасности.',
        timeline: 'Типичный срок: 48–72 часа для критичных инцидентов, 1–2 недели для полной очистки.',
        priceRange: 'Диапазон: $7 500–22 000 в зависимости от серьёзности.',
        includesHeading: 'Что входит',
        includes: ['Триаж угроз', 'Юридически безопасный процесс удаления', 'Хранилище доказательств и журнал эскалации'],
        processHeading: 'Процесс в три шага',
        steps: baseProcess('ru'),
        formHeading: 'Сообщить об удалении угроз',
        formIntro: 'Укажите ссылки и срок. Мы подтвердим план в течение 24 часов.',
        fields: {
          name: 'Имя',
          email: 'Рабочий email',
          urgency: 'Срочность',
          links: 'Ссылки на удаление',
          deadline: 'Желаемый срок',
        },
        urgencyOptions: ['Критично (сегодня)', 'Высокая (48–72ч)', 'Стандарт (1–2 недели)'],
        submit: 'Отправить',
        successTitle: 'Заявка получена',
        successMessage: 'Мы подтвердим план в ближайшее время.',
        errorMessage: 'Не удалось отправить. Попробуйте снова или напишите contact@traceremove.com.',
      }
    ),
  },
  {
    slug: 'design-ops',
    copy: withRussianFallback(
      {
        en: {
          title: 'Design Ops',
          summary: 'Operational design support to stabilize trust signals and brand narrative.',
          timeline: 'Typical timeline: 2–6 weeks depending on asset volume.',
          priceRange: 'Typical price range: $4,500–$14,000.',
          includesHeading: 'What’s included',
          includes: ['Asset audit and prioritization', 'Narrative refresh for trust pages', 'Weekly stakeholder syncs'],
          processHeading: 'Three-step process',
          steps: baseProcess('en'),
          formHeading: 'Start a design ops request',
          formIntro: 'Tell us about the assets or pages you need refreshed.',
          fields: {
            name: 'Name',
            email: 'Work email',
            urgency: 'Urgency',
            links: 'Links to update',
            deadline: 'Desired deadline',
          },
          urgencyOptions: ['Standard (2–4 weeks)', 'Accelerated (1–2 weeks)', 'Ongoing retainer'],
          submit: 'Start request',
          successTitle: 'Request received',
          successMessage: 'We will follow up with a scoped plan.',
          errorMessage: 'We could not submit the request. Please try again or email contact@traceremove.com.',
        },
        fr: {
          title: 'Design Ops',
          summary: 'Support design opérationnel pour stabiliser les signaux de confiance et le récit de marque.',
          timeline: 'Délai moyen : 2–6 semaines selon le volume d’actifs.',
          priceRange: 'Fourchette : 4 500–14 000 $.',
          includesHeading: 'Inclus',
          includes: ['Audit et priorisation des assets', 'Refresh des pages de confiance', 'Syncs hebdomadaires'],
          processHeading: 'Processus en trois étapes',
          steps: baseProcess('fr'),
          formHeading: 'Lancer une demande Design Ops',
          formIntro: 'Expliquez les assets ou pages à mettre à jour.',
          fields: {
            name: 'Nom',
            email: 'Email professionnel',
            urgency: 'Urgence',
            links: 'Liens à mettre à jour',
            deadline: 'Échéance souhaitée',
          },
          urgencyOptions: ['Standard (2–4 semaines)', 'Accéléré (1–2 semaines)', 'Récurrent'],
          submit: 'Lancer la demande',
          successTitle: 'Demande reçue',
          successMessage: 'Nous reviendrons avec un plan précis.',
          errorMessage: 'Envoi impossible. Réessayez ou écrivez à contact@traceremove.com.',
        },
        es: {
          title: 'Design Ops',
          summary: 'Soporte operativo de diseño para estabilizar señales de confianza y narrativa.',
          timeline: 'Tiempo típico: 2–6 semanas según el volumen de assets.',
          priceRange: 'Rango típico: 4.500–14.000 USD.',
          includesHeading: 'Incluye',
          includes: ['Auditoría y priorización', 'Actualización de páginas de confianza', 'Syncs semanales'],
          processHeading: 'Proceso de tres pasos',
          steps: baseProcess('es'),
          formHeading: 'Iniciar solicitud Design Ops',
          formIntro: 'Indica los assets o páginas a actualizar.',
          fields: {
            name: 'Nombre',
            email: 'Email laboral',
            urgency: 'Urgencia',
            links: 'Links a actualizar',
            deadline: 'Fecha límite deseada',
          },
          urgencyOptions: ['Estándar (2–4 semanas)', 'Acelerado (1–2 semanas)', 'Retenedor continuo'],
          submit: 'Iniciar solicitud',
          successTitle: 'Solicitud recibida',
          successMessage: 'Responderemos con un plan acotado.',
          errorMessage: 'No se pudo enviar. Intenta nuevamente o escribe a contact@traceremove.com.',
        },
      },
      {
        title: 'Design Ops',
        summary: 'Операционная поддержка дизайна для стабилизации доверия и бренда.',
        timeline: 'Типичный срок: 2–6 недель в зависимости от объёма.',
        priceRange: 'Диапазон: $4 500–14 000.',
        includesHeading: 'Что входит',
        includes: ['Аудит и приоритизация активов', 'Обновление страниц доверия', 'Еженедельные синки'],
        processHeading: 'Процесс в три шага',
        steps: baseProcess('ru'),
        formHeading: 'Запустить запрос Design Ops',
        formIntro: 'Опишите активы или страницы, которые нужно обновить.',
        fields: {
          name: 'Имя',
          email: 'Рабочий email',
          urgency: 'Срочность',
          links: 'Ссылки для обновления',
          deadline: 'Желаемый срок',
        },
        urgencyOptions: ['Стандарт (2–4 недели)', 'Ускоренно (1–2 недели)', 'Ретейнер'],
        submit: 'Отправить запрос',
        successTitle: 'Запрос получен',
        successMessage: 'Мы вернемся с планом.',
        errorMessage: 'Не удалось отправить. Попробуйте снова или напишите contact@traceremove.com.',
      }
    ),
  },
]

export const coreServiceSlugs = coreServices.map((service) => service.slug)

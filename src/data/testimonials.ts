import { type Language, withRussianFallback } from './pages'

export interface Testimonial {
  quote: string
  name: string
  role: string
  logoAlt: string
}

export const testimonials: Record<Language, Testimonial[]> = withRussianFallback({
  en: [
    {
      quote: 'Traceremove removed high-risk content within 36 hours and kept our exec team informed daily.',
      name: 'Camille Laurent',
      role: 'VP Communications, Global Travel Brand',
      logoAlt: 'Global Travel Brand logo',
    },
    {
      quote: 'Their rapid-response playbook helped us stabilize search results and protect pipeline in one sprint.',
      name: 'Jordan Lee',
      role: 'Head of Growth, Series B SaaS',
      logoAlt: 'Series B SaaS company logo',
    },
  ],
  fr: [
    {
      quote: 'Traceremove a supprimé des contenus critiques en 36 heures avec un reporting quotidien.',
      name: 'Camille Laurent',
      role: 'VP Communication, groupe travel',
      logoAlt: 'Logo groupe travel',
    },
    {
      quote: 'Leur playbook d’urgence a stabilisé la SERP et protégé le pipeline.',
      name: 'Jordan Lee',
      role: 'Head of Growth, SaaS Série B',
      logoAlt: 'Logo SaaS Série B',
    },
  ],
  es: [
    {
      quote: 'Traceremove eliminó contenido crítico en 36 horas con reportes diarios.',
      name: 'Camille Laurent',
      role: 'VP Comunicación, marca global',
      logoAlt: 'Logo marca global',
    },
    {
      quote: 'Su playbook urgente estabilizó la SERP y protegió el pipeline.',
      name: 'Jordan Lee',
      role: 'Head of Growth, SaaS Serie B',
      logoAlt: 'Logo SaaS Serie B',
    },
  ],
})

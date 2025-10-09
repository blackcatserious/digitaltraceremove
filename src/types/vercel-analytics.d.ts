import type { ComponentType } from 'react'

declare module '@vercel/analytics/react' {
  export const Analytics: ComponentType
}

import { ReactNode } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { AnalyticsScript } from './AnalyticsScript'
import { PageTracker } from './PageTracker'

type LayoutProps = {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <AnalyticsScript />
      <PageTracker />
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </>
  )
}

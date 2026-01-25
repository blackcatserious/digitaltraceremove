/// <reference types="vite/client" />

import type React from 'react'

type StoreLocatorConfig = typeof import('./App').CONFIGURATION

declare global {
  interface GmpxStoreLocatorElement extends HTMLElement {
    configureFromQuickBuilder: (config: StoreLocatorConfig) => void
  }

  namespace JSX {
    interface IntrinsicElements {
      'gmpx-api-loader': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & { key?: string; 'solution-channel'?: string }
      'gmpx-store-locator': React.DetailedHTMLProps<
        React.HTMLAttributes<GmpxStoreLocatorElement>,
        GmpxStoreLocatorElement
      > & { 'map-id'?: string }
    }
  }
}

export {}

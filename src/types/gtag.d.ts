export {}

declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | string,
      targetId: string,
      params?: Record<string, unknown>
    ) => void
  }
}

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  build: {
    cssCodeSplit: true,
    modulePreload: { polyfill: true },
    rollupOptions: isSsrBuild
      ? undefined
      : {
          output: {
            manualChunks: {
              'react-vendor': ['react', 'react-dom', 'react-router-dom'],
              'vercel-telemetry': ['@vercel/analytics/react', '@vercel/speed-insights/react'],
            },
          },
        },
  },
}))

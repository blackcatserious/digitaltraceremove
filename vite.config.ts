import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const PrerenderPlugin = require('vite-plugin-prerender')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    PrerenderPlugin({
      staticDir: 'dist',
      routes: [
        '/en',
        '/en/',
        '/fr',
        '/fr/',
        '/es',
        '/es/',
        '/en/pricing',
        '/en/partners',
        '/en/case-studies',
        '/en/about',
        '/en/terms',
        '/en/privacy',
        '/en/refund',
        '/fr/pricing',
        '/es/pricing',
      ],
      renderer: new PrerenderPlugin.PuppeteerRenderer({
        renderAfterTime: 3000,
        headless: true,
      }),
    }),
  ],
  build: {
    sourcemap: false,
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          router: ['react-router-dom'],
        },
      },
    },
  },
})

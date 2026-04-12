import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import PrerenderPlugin from 'vite-plugin-prerender'

export default defineConfig({
  plugins: [
    react(),
    PrerenderPlugin({
      staticDir: 'dist',
      routes: [
        '/',
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
      ],
      renderer: new PrerenderPlugin.PuppeteerRenderer({
        renderAfterTime: 4000,
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

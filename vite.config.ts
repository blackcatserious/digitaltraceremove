import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Prerenderer from '@prerenderer/vite-plugin'

export default defineConfig({
  plugins: [
    react(),
    Prerenderer({
      routes: [
        '/en',
        '/fr',
        '/es',
        '/en/pricing',
        '/en/partners',
        '/en/case-studies',
        '/en/about',
        '/en/terms',
        '/en/privacy',
        '/en/refund',
      ],
      renderer: '@prerenderer/renderer-jsdom',
      rendererOptions: {
        renderAfterTime: 2000,
      },
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

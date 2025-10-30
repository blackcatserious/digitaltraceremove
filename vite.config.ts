import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const normalizePath = (id: string) => id.replace(/\\/g, '/')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          const normalized = normalizePath(id)

          if (normalized.includes('/node_modules/')) {
            if (normalized.includes('/node_modules/react-router')) {
              return 'router'
            }

            if (
              normalized.includes('/node_modules/react/') ||
              normalized.includes('/node_modules/react-dom/') ||
              normalized.includes('/node_modules/scheduler/')
            ) {
              return 'react-vendor'
            }

            if (normalized.includes('/node_modules/@vercel/')) {
              return 'instrumentation'
            }
          }

          if (normalized.includes('/src/data/')) {
            return 'content'
          }

          return undefined
        },
      },
    },
  },
})

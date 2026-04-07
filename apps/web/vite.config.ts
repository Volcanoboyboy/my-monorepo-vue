import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@my-repo/ui': fileURLToPath(new URL('../../packages/ui/src/index.ts', import.meta.url)),
    },
  },
  server: {
    port: 3000,
    fs: {
      allow: [
        fileURLToPath(new URL('.', import.meta.url)),
        fileURLToPath(new URL('../../packages/ui', import.meta.url)),
      ],
    },
  },
})

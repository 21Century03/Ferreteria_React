import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTest.js',
    coverage: {
      provider: 'v8',
      include: ['src/utils/**', 'src/components/**', 'src/services/**'],
    },
  },
})
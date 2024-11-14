import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  css: {
    modules: {
      localsConvention: 'camelCase'
    }
  },
  plugins: [react()]
})

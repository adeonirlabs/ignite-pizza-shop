/// <reference types="vitest" />

import path from "node:path"

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    include: ['src/**/*.spec.{ts,tsx}'],
    exclude: ['/node_modules/', '/.next/'],
    setupFiles: './vitest.setup.ts',
  },
})

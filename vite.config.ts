/// <reference types="vitest" />

import path from "node:path"

import { defineConfig, splitVendorChunkPlugin } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(), splitVendorChunkPlugin()],
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
    exclude: ['/node_modules/', '/.next/', 'src/tests/**/*'],
    setupFiles: './vitest.setup.ts',
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (id.includes("node_modules")) {
            return id.split("/node_modules/").pop()?.split("/")[0]
          }
          return null
        },
      },
    },
  },
})

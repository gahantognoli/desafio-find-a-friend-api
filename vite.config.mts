import { resolve } from 'path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  // plugins: [tsconfigPaths()],
  test: {
    globals: true,
    environmentMatchGlobs: [['src/http/controllers/**', 'prisma']],
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
})

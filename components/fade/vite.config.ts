import { resolve } from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig(async () => {
  return {
    build: {
      lib: {
        entry: {
          index: resolve(__dirname, 'src/index.ts'),
        },
      },
    },
  }
})

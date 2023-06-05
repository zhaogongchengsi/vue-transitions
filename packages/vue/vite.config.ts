import { dirname, join, resolve } from 'node:path'
import { defineConfig, normalizePath } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import fg from 'fast-glob'

export default defineConfig(async () => {
  const components = (await fg(['src/components/**/index.ts'], { dot: true, cwd: process.cwd() })).map(file => join(process.cwd(), file))

  const entries: Record<string, string> = {}
  components.forEach((path) => {
    const dir = normalizePath(dirname(path))
    entries[dir.slice(dir.lastIndexOf('/') + 1) || 'index'] = path
  })

  return {
    build: {
      target: 'modules',
      outDir: 'dist',
      emptyOutDir: false,
      sourcemap: true,
      minify: false,
      brotliSize: false,
      lib: {
        entry: {
          index: resolve(__dirname, 'src/index.ts'),
          ...entries,
        },
        name: 'VueTransitions',
        fileName: (_, entryName: string) => {
          return `${entryName}.js`
        },
        formats: ['es'],
      },
      rollupOptions: {
        // 确保外部化处理那些你不想打包进库的依赖
        external: ['vue'],
        output: {
          // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
          globals: {
            vue: 'Vue',
          },
        },
      },
    },

    plugins: [
      vue(),
      Components({
        dts: true,
      }),
    ],
  }
})

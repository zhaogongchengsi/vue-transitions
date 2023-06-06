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
        output: [
          {
            // 打包格式
            format: 'es',
            // 打包后文件名
            entryFileNames: '[name].mjs',
            // 让打包目录和我们目录对应
            // preserveModules: true,
            exports: 'named',
            // 配置打包根目录
            dir: './dist/es',
          },
          {
            // 打包格式
            format: 'cjs',
            // 打包后文件名
            entryFileNames: '[name].js',
            // 让打包目录和我们目录对应
            // preserveModules: true,
            exports: 'named',
            // 配置打包根目录
            dir: './dist/lib',
          },
        ],
      },
    },

    plugins: [
      // dts({ outputDir: ['dist', 'types'] }),
      vue(),
      Components({
        dts: true,
      }),
    ],
  }
})

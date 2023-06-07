// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { join } from 'node:path'
import vue from '@vitejs/plugin-vue'
import VueMacros from 'unplugin-vue-macros/vite'
import ei from 'postcss-easy-import'
import af from 'autoprefixer'
import pn from 'postcss-nested'
import pu from 'postcss-utilities'
import psm from 'postcss-selector-matches'
import pp from 'postcss-pseudo-is'
import psp from 'postcss-selector-prefixer'
import dts from 'vite-plugin-dts'

export function getConfig({ root, outDir, watch, cssPrefix }: { root: string; outDir: string; watch: boolean; cssPrefix: string }) {
  const postcssPlugin = [ei, af, pn, pu, psm, pp]

  if (cssPrefix !== 'none' && cssPrefix.trim() !== '')
    postcssPlugin.push(psp({ prefix: cssPrefix }))

  return {
    root,
    build: {
      target: 'modules',
      outDir,
      emptyOutDir: false,
      sourcemap: true,
      minify: false,
      brotliSize: false,
      rollupOptions: {
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
            dir: outDir,
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
            dir: outDir,
          },
        ],
      },
      watch: watch ? {} : null,
    },

    css: {
      postcss: {
        plugins: postcssPlugin,
      },
    },

    plugins: [
      VueMacros({
        plugins: {
          vue: vue({
            include: [/\.vue$/],
          }),
        },
      }),
      dts({
        root,
        cleanVueFileName: true,
        staticImport: true,
        entryRoot: root,
        tsConfigFilePath: join(root, 'tsconfig.json'),
      }),
    ],
  }
}

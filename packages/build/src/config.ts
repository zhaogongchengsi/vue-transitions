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

export interface GetConfigOption {
  root: string
  outDir: string
  watch: boolean
  cssPrefix: string
  packageJson: any
}

function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function getConfig({ root, outDir, watch, cssPrefix, packageJson }: GetConfigOption) {
  const postcssPlugin = [ei, af, pn, pu, psm, pp]
  const { name } = packageJson

  const umdName = (name.slice(name.lastIndexOf('/') + 1) as string).split('-').map(s => capitalizeFirstLetter(s)).join('')

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
            format: 'es',
            entryFileNames: '[name].js',
            exports: 'named',
            dir: outDir,
          },
          {
            format: 'cjs',
            entryFileNames: '[name].cjs',
            exports: 'named',
            dir: outDir,
          },
          {
            format: 'umd',
            entryFileNames: '[name].umd.js',
            exports: 'named',
            // 配置打包根目录
            globals: {
              vue: 'Vue',
            },
            dir: outDir,
            name: umdName,
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

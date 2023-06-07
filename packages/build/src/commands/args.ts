import type { ArgsDef } from 'citty'

export const commonArgs: ArgsDef = {
  name: {
    type: 'string',
    description: '需要打包的组件包名, * 代表所有',
    alias: 'n',
  },
  viteConfig: {
    type: 'string',
    description: '需要合并的vite的配置文件路径',
    alias: 'v',
    default: 'vite.config.ts',
  },
  outDir: {
    default: 'dist',
    description: '打包输出的文件夹',
    alias: 'o',
  },
  cssPrefix: {
    default: 'zrook-',
    description: '打包的css名字前缀, none 为不需要前缀',
    alias: 'c',
  },
}

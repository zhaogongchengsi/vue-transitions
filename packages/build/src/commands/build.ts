import { defineCommand } from 'citty'
import consola from 'consola'
import { buildAllComponent, buildComponent } from '../build'
import { commonArgs } from './args'

const isAll = (name: string) => name === '*'

export const build = defineCommand({
  meta: {
    name: 'build',
    description: 'Build an app',
  },
  args: {
    ...commonArgs,
  },
  async run({ args }) {
    const { name, viteConfig } = args as unknown as { name: string; viteConfig: string }
    const root = process.cwd()
    consola.start(`开始打包 ${isAll(name as string) ? '所有' : name}`)
    try {
      isAll(name as string) ? await buildAllComponent(root) : await buildComponent(root, viteConfig)
      consola.success(`打包成功 ${isAll(name as string) ? '所有' : name}`)
    }
    catch (err) {
      consola.error(err)
    }
  },
})

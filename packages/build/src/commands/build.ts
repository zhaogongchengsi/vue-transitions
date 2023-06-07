import { defineCommand } from 'citty'
import consola from 'consola'
import { buildAllComponent, buildComponent } from '../build'
import { commonArgs } from './args'
import type { CLIOption } from './options'

const isAll = (name: string) => name === '*'

export const build = defineCommand({
  meta: {
    name: 'build',
    description: '开启打包',
  },
  args: {
    ...commonArgs,
  },
  async run({ args }) {
    const opt = args as unknown as CLIOption
    const root = process.cwd()
    consola.start('开始打包...')
    try {
      isAll(opt.name as string) ? await buildAllComponent(root, opt) : await buildComponent(root, opt)
      consola.success('打包成功')
    }
    catch (err) {
      consola.error(err)
    }
  },
})

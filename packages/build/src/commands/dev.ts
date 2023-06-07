import { defineCommand } from 'citty'
import consola from 'consola'
import { buildComponent } from '../build'
import { commonArgs } from './args'
import type { CLIOption } from './options'

export const dev = defineCommand({
  meta: {
    name: 'dev',
    description: '开发模式运行',
  },
  args: {
    ...commonArgs,
  },
  async run({ args }) {
    const opt = args as unknown as CLIOption
    const root = process.cwd()
    try {
      await buildComponent(root, opt)
    }
    catch (err) {
      consola.error(err)
    }
  },
})

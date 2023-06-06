#! env node
import { defineCommand, runMain } from 'citty'
import { build } from './commands/build'

const main = defineCommand({
  meta: {
    name: 'vt',
    description: 'vt CLI',
    version: '0.0.0',
  },
  subCommands: {
    build,
  },
})

runMain(main)

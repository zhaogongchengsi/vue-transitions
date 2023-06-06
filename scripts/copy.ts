/* eslint-disable no-console */
import { resolve } from 'node:path'
import { copy } from 'fs-extra'

(async function () {
  const root = process.cwd()

  await copy(resolve(root, './src/types'), resolve(root, './dist/types'))

  console.log('Copy complete')
})()

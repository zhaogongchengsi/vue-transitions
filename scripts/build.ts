import { build, mergeConfig } from 'vite'
import { scan } from './scan'
import config from './config'

(async () => {
  console.log('Start building ...\n')

  const packages = await scan()

  await Promise.all(packages.map(({ dir, path }) => {
    return buildComponent(dir, path)
  }))

  console.log('Start End\n')
})()

async function buildComponent(root: string, entry: string) {
  await build(mergeConfig(config, {
    root,
    build: {
      lib: {
        entry,
      },
    },
  }, false))
}

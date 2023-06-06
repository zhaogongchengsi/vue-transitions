import { join } from 'node:path'
import { build, loadConfigFromFile, mergeConfig } from 'vite'
import { getConfig } from './config'
import { scanDirs } from './scan'
import { dirname } from './utils'

const mode = 'production'
export async function buildAllComponent(root: string, config = 'vite.config.ts', outDir: string) {
  const dirs = await scanDirs(root)

  for (const dir of dirs) {
    const dirName = dirname(dir)
    await buildComponent(dir, config, join(root, outDir, dirName))
  }
}

export async function buildComponent(root: string, config: string, outDir: string) {
  const loadConfig = await loadConfigFromFile({ command: 'build', mode }, join(root, config), root)
  if (!loadConfig)
    throw new Error(`配置文件获取失败(Configuration file acquisition failed), 根目录为: ${root}`)

  await build(mergeConfig(getConfig({ root, outDir }), loadConfig.config, false))
}

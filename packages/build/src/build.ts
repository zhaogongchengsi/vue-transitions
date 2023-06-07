import { join } from 'node:path'
import { build, loadConfigFromFile, mergeConfig } from 'vite'
import { getConfig } from './config'
import { scanDirs } from './scan'
import { clearFolder, dirname, readJson } from './utils'
import type { CLIOption } from './commands/options'

const mode = 'production'
export async function buildAllComponent(root: string, option: CLIOption) {
  const dirs = await scanDirs(root)

  for (const dir of dirs) {
    const dirName = dirname(dir)
    await buildComponent(dir, { ...option, outDir: join(root, option.outDir, dirName) })
  }
}

export async function buildComponent(root: string, { viteConfig, outDir, isDev, cssPrefix }: CLIOption) {
  const loadConfig = await loadConfigFromFile({ command: 'build', mode }, join(root, viteConfig), root)
  if (!loadConfig)
    throw new Error(`配置文件获取失败(Configuration file acquisition failed), 根目录为: ${root}`)

  const pkg = await readJson(join(root, 'package.json'))

  clearFolder(outDir)
  await build(mergeConfig(getConfig({ root, outDir, watch: isDev, cssPrefix, packageJson: pkg }), loadConfig.config, false))
}

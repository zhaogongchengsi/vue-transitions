import { build, loadConfigFromFile, mergeConfig } from 'vite'
import defaultConfig from './config'

const mode = 'production'
export async function buildAllComponent(root: string) {

}

export async function buildComponent(root: string, config: string) {
  const loadConfig = await loadConfigFromFile({ command: 'build', mode }, config, root)
  if (!loadConfig)
    throw new Error(`配置文件获取失败(Configuration file acquisition failed), 根目录为: ${root}`)

  await build(mergeConfig(defaultConfig, loadConfig.config, false))
}

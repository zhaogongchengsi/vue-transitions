import { dirname as dn, join } from 'node:path'
import { readFile } from 'node:fs/promises'
import { normalizePath } from 'vite'

export function dirname(path: string) {
  const _dirname = normalizePath(dn(path))
  return _dirname.slice(__dirname.lastIndexOf('/') + 1)
}

export async function createAlias(dirPath: string) {
  const { name } = (await readJson(join(dirPath, 'package.json')))
  return { [name]: dirPath }
}

export async function readJson(path: string) {
  const packageString = (await readFile(path)).toString()
  return JSON.parse(packageString)
}

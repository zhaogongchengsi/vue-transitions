import { join } from 'node:path'
import { readFile } from 'node:fs/promises'
import { readdirSync, rmdirSync, statSync, unlinkSync } from 'node:fs'
import { normalizePath } from 'vite'

export function dirname(path: string) {
  const _dirname = normalizePath(path)
  return _dirname.slice(_dirname.lastIndexOf('/') + 1)
}

export async function createAlias(dirPath: string) {
  const { name } = (await readJson(join(dirPath, 'package.json')))
  return { [name]: dirPath }
}

export async function readJson(path: string) {
  const packageString = (await readFile(path)).toString()
  return JSON.parse(packageString)
}

export function clearFolder(folderPath: string) {
  const files = readdirSync(folderPath)
  files.forEach((file) => {
    const filePath = join(folderPath, file)
    if (statSync(filePath).isDirectory()) {
      clearFolder(filePath)
      rmdirSync(filePath)
    }
    else {
      unlinkSync(filePath)
    }
  })
}

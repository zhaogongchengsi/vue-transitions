import { dirname } from 'node:path'
import fg from 'fast-glob'

export async function scan(root: string = process.cwd()) {
  const packages = (await fg(
    ['components/**/index.ts'],
    { dot: true, cwd: root, ignore: ['!**/node_modules/**'], absolute: true },
  )).map((path) => {
    return {
      dir: dirname(path),
      path,
    }
  })
  return packages
}

export async function scanDirs(root: string = process.cwd()) {
  return fg(['components/*'], { cwd: root, deep: 1, ignore: ['!**/node_modules/**'], absolute: true, onlyDirectories: true })
}

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

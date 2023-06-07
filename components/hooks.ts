export function useName(name: string, reverse = false) {
  const ns = ['zrook', ...name.split('-').filter(Boolean)]
  if (reverse)
    ns.push('reverse')

  return ns.join('-')
}

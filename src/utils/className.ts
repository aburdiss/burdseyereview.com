export function cls(...classes: (string | undefined)[]) {
  return classes.filter((cl) => !!cl).join(' ')
}

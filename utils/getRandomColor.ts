export const getRandomColor = () => {
  const r = Math.ceil(Math.random() * 255)
  const g = Math.ceil(Math.random() * 255)
  const b = Math.ceil(Math.random() * 255)

  const toHex = (value: number) => value.toString(16).padStart(2, '0')

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`
}

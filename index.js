/**
 * 
 * @param {string} txt Text to make bold
 * @returns {string}
 */
export const bold = txt => `\x1B[1m${txt}\x1b[0m`

/**
 * 
 * @param {number} col Hexadecimal number
 * @param {string} txt Text to coloring
 * @returns {string}
 */
export const hex = (col, txt) => {
  const [r, g, b] = convertToHex(col)
  return `\x1b[38;2;${r};${g};${b}m${txt}\x1b[0m`
}

function convertToHex(col) {
  const hex = parseInt(col, 16)

  return [hex >> 16 & 255, hex >> 8 & 255, hex & 255]
}
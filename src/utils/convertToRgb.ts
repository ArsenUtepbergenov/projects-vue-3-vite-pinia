export function convertToRgb(hexCode: string) {
  if (hexCode.length == 6) {
    let rgbArray = hexCode.match(/.{1,2}/g)
    if (rgbArray) {
      return {
        r: parseInt(rgbArray[0], 16),
        g: parseInt(rgbArray[1], 16),
        b: parseInt(rgbArray[2], 16),
      }
    }
  } else console.error('Only six-digit hex colors are allowed')
}

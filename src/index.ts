export default class Align {
  public static centralized(
    text: string,
    delimiter: string,
    lineSize: number
  ): string {
    const initText = Math.trunc(lineSize / 2 - text.length / 2) + 1
    const endText = initText + text.length + 1
    let cursorTextPosition = 0
    let alignedText = ''

    for (let x = 1; x <= lineSize; x++) {
      if (x >= initText && x <= endText) {
        alignedText += text[cursorTextPosition] || delimiter
        cursorTextPosition++
      } else {
        alignedText += delimiter
      }
    }

    return alignedText
  }

  public static rightAligned(
    text: string,
    delimiter: string,
    lineSize: number
  ): string {
    const initText = lineSize - text.length + 1
    const endText = lineSize
    let cursorTextPosition = 0
    let alignedText = ''

    for (let cursor = 1; cursor <= lineSize; cursor++) {
      if (cursor >= initText && cursor <= endText) {
        alignedText += text[cursorTextPosition] || delimiter
        cursorTextPosition++
      } else {
        alignedText += delimiter
      }
    }

    return alignedText
  }

  public static leftAligned(
    text: string,
    delimiter: string,
    lineSize: number
  ): string {
    let cursorTextPosition = 0
    let alignedText = ''

    for (let x = 1; x <= lineSize; x++) {
      if (x >= 1 && x <= text.length) {
        alignedText += text[cursorTextPosition] || delimiter
        cursorTextPosition++
      } else {
        alignedText += delimiter
      }
    }

    return alignedText
  }

  public static leftRightAligned(
    textLeft: string,
    textRight: string,
    delimiter: string,
    lineSize: number
  ): string {
    let cursorTextLeftPosition = 0
    const initTextRight = lineSize - textRight.length +1
    let cursorTextRightPosition = 0
    let alignedText = ''

    if (lineSize < textRight.length + textLeft.length) return Error.toString()

    for (let x = 1; x <= lineSize; x++) {
      if (x >= 1 && x <= textLeft.length) {
        alignedText += textLeft[cursorTextLeftPosition] || delimiter
        cursorTextLeftPosition++
      } else if (x >= initTextRight && x <= lineSize) {
        alignedText += textRight[cursorTextRightPosition] || delimiter
        cursorTextRightPosition++
      } else {
        alignedText += delimiter
      }
    }

    return alignedText
  }
}

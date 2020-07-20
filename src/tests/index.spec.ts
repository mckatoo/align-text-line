import align from '../'
import faker from 'faker'

describe('Align Text', () => {
  const text = faker.lorem.words(2)
  let delimiters = ''
  const delimiter = '-'
  const lineSize = faker.random.number({
    min: text.length + 10,
    max: text.length + 20,
    precision: 1,
  })

  for (let x = 0; x < lineSize - text.length; x++) {
    delimiters += delimiter
  }

  it('Should left align', () => {
    const textAligned = align.leftAligned(text, delimiter, lineSize)
    expect(lineSize).toBe(textAligned.length)
    expect(textAligned).toBe(`${text}${delimiters}`)
  })

  it('Should align right', () => {
    const textAligned = align.rightAligned(text, delimiter, lineSize)
    expect(lineSize).toBe(textAligned.length)
    expect(textAligned).toBe(`${delimiters}${text}`)
  })

  it('Should center align', () => {
    const sizeDelimiter = Math.trunc((lineSize - text.length) / 2)
    let halfDelimiter = ''
    for (let cursor = 0; cursor < sizeDelimiter; cursor++) {
      halfDelimiter += delimiter
    }
    const textAligned = align.centralized(text, delimiter, lineSize)
    expect(lineSize).toBe(textAligned.length)
    expect(textAligned).toContain(`${halfDelimiter}${text}${halfDelimiter}`)
  })

  it('Should should align firt word on left and next word on right', () => {
    const textAligned = align.leftRightAligned(
      'bola',
      'carro',
      delimiter,
      lineSize
    )
    let centerDelimiters = ''
    for (let cursor = 0; cursor < (lineSize - 9); cursor++) {
      centerDelimiters += '-'
    }
    expect(textAligned).toBe(`bola${centerDelimiters}carro`)
    expect(lineSize).toBe(textAligned.length)
  })
})

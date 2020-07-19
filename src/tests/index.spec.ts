import align from '../'

describe('Align Text', () => {
  const text = "TEXT TO ALIGN"

  it('Left Align', async () => {
    const textAligned = align.leftAligned(text, '-', 21)
    expect(textAligned).toBe('TEXT TO ALIGN--------')
  })

  it('Align Right', async () => {
    const textAligned = align.rightAligned(text, '-', 21)
    expect(textAligned).toBe('--------TEXT TO ALIGN')
  })

  it('Center Align', async () => {
    const textAligned = align.centralized(text, '-', 21)
    expect(textAligned).toBe('----TEXT TO ALIGN----')
  })

  it('Should align firt word on left and next word on right', async () => {
    const textAligned = align.leftRightAligned('bola', 'carro', '-', 15)
    expect(textAligned).toBe('bola------carro')
  })
})

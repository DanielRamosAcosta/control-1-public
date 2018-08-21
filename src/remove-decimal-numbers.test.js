const { removeDecimalNumbers } = require('./remove-decimal-numbers')

describe('remove decimal numbers', () => {
  it('removes the decimal numbers from an array', () => {
    expect(removeDecimalNumbers([1])).toEqual([1])
  })
  it('removes the decimal numbers from an array', () => {
    expect(removeDecimalNumbers([1.1])).toEqual([])
  })
  it('removes the decimal numbers from an array', () => {
    expect(removeDecimalNumbers([1, 2])).toEqual([1, 2])
  })
  it('removes the decimal numbers from an array', () => {
    expect(removeDecimalNumbers([2, 4, 5, 4.8])).toEqual([2, 4, 5])
  })
  it('removes the decimal numbers from an array', () => {
    expect(removeDecimalNumbers([1, 2, 3.1])).toEqual([1, 2])
  })
})

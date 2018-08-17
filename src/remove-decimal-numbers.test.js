const { removeDecimalNumbers } = require('./remove-decimal-numbers')

describe('remove decimal numbers', () => {
  it('removes the decimal numbers from an array', () => {
    expect(removeDecimalNumbers([1, 2, 3.1])).toEqual([1, 2])
  })
})

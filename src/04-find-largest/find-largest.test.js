const { findLargest } = require('./find-largest')

describe('findLargest', () => {
  xit('works', () => {
    const result = findLargest([10, 23, 5])
    expect(result).toEqual(23)
  })
  xit('works', () => {
    const result = findLargest([-10, -4, -1])
    expect(result).toEqual(-1)
  })
})

const numWays = require('./staircase-problem')

/**
 * 0 -> 0
 * 1 -> 1
 * 2 -> 2
 * 3 -> 3
 * 4 -> 5
 * 5 -> 8
 * 6 -> 13
 */

describe('the staircase problem', () => {
  xit('counts the numbers of ways to clib the stairs with 6 steps', () => {
    const result = numWays(6)
    expect(result).toEqual(13)
  })
})

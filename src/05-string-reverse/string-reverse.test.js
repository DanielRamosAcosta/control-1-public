const { stringReverse } = require('./string-reverse')

describe('stringReverse', () => {
  xit('works', () => {
    const result = stringReverse('hola que tal')
    expect(result).toEqual('lat euq aloh')
  })
})

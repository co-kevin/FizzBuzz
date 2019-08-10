import { say } from '../index'
import assert from 'assert'

describe('#say()', function () {
  it('should return 1 when give 1', function () {
    assert.equal(say(1), 1)
  })
  it('should return Fizz when give 3', function () {
    assert.equal(say(3), 'Fizz')
  })
  it('should return Buzz when give 5', function () {
    assert.equal(say(5), 'Buzz')
  })
  it('should return FizzBuzz when give 15', function () {
    assert.equal(say(15), 'FizzBuzz')
  })
})

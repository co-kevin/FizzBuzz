import { of } from '../index'
import assert from 'assert'

describe('FizzBuzz', function() {
  describe('#of()', function() {
    it('should return FizzBuzz give 15', function() {
      assert.equal(of(15), 'FizzBuzz')
    })
    it('should return Fizz give 3', function() {
      assert.equal(of(3), 'Fizz')
    })
    it('should return Buzz give 5', function() {
      assert.equal(of(5), 'Buzz')
    })
  })
})

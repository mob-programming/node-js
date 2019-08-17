var assert = require('assert');
var fizzBuzz = require('../src/fizzbuzz');


describe('FizzBuzz', function() {
    describe('fizzBuzz', function() {
        it('should return 1 when given 1', function() {
            assert.equal(fizzBuzz.fizzBuzz(1), 1)
        });

        it('should return 2 when given 2', function() {
          assert.equal(fizzBuzz.fizzBuzz(2), 2)
        });

        it('should return Fizz when given 3', function() {
          assert.equal(fizzBuzz.fizzBuzz(3), 'Fizz')
        });

        it('should return Buzz when given 5', function() {
          assert.equal(fizzBuzz.fizzBuzz(5), 'Buzz')
        });

        it('should return FizzBuzz when given 15', function() {
          assert.equal(fizzBuzz.fizzBuzz(15), 'FizzBuzz')
        });

        it('should return FizzBuzz when given 30', function() {
          assert.equal(fizzBuzz.fizzBuzz(30), 'FizzBuzz')
        });

        it('should return Fizz when given 6', function() {
          assert.equal(fizzBuzz.fizzBuzz(6), 'Fizz')
        });

        it('should return Buzz when given 10', function() {
          assert.equal(fizzBuzz.fizzBuzz(10), 'Buzz')
        });
    });
});
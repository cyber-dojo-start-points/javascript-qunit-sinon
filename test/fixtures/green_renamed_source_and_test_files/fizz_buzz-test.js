'use strict';

import fizzBuzz from './fizz_buzz.js';

QUnit.test('fizzBuzz says FizzBuzz for a multiple of fifteen', function(assert) {
    assert.equal(fizzBuzz(30), 'FizzBuzz', 'says FizzBuzz');
});

QUnit.test('fizzBuzz says Fizz for a multiple of three', function(assert) {
    assert.equal(fizzBuzz(9), 'Fizz', 'says Fizz');
});

QUnit.test('fizzBuzz says Buzz for a multiple of five', function(assert) {
    assert.equal(fizzBuzz(20), 'Buzz', 'says Buzz');
});

QUnit.test('fizzBuzz says the number itself otherwise', function(assert) {
    assert.equal(fizzBuzz(7), '7', 'says the number');
});

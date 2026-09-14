'use strict';

import hiker from './hiker.js';

QUnit.test('answer', function(assert) {
    assert.equal(hiker.answer(), 42, 'to life the universe and everything');
});

QUnit.test('answer is even', function(assert) {
    assert.equal(hiker.answer() % 2, 0, 'is an even number');
});

QUnit.test('answer size', function(assert) {
    assert.equal(String(hiker.answer()).length, 2, 'has two digits');
});

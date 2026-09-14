'use strict';

import hiker from './hiker.js';

QUnit.test('answer', function(assert) {
    assert.equal(hiker.answer(), 42, 'to life the universe and everything');
});

QUnit.test('answer is six times seven', function(assert) {
    assert.equal(hiker.answer(), 6 * 7, 'is six times seven');
});

'use strict';

import hiker from './hiker.js';

QUnit.test('answer size', function(assert) {
    assert.equal(String(hiker.answer()).length, 2, 'has two digits');
});

QUnit.test('answer size again', function(assert) {
    assert.equal(String(hiker.answer()).length, 3, 'has three digits');
});

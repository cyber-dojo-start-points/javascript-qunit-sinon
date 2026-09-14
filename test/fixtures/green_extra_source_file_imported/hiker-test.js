'use strict';

import hiker from './hiker.js';
import checksum from './checksum.js';

QUnit.test('answer', function(assert) {
    assert.equal(hiker.answer(), 42, 'to life the universe and everything');
});

QUnit.test('answer checksum', function(assert) {
    assert.equal(checksum(String(hiker.answer())), 2, 'has a two character checksum');
});

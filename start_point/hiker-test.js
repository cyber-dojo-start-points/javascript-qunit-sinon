'use strict';

import hiker from './hiker.js';

QUnit.test('answer', function(assert) {
    const info = 'to life the universe and everything';
    assert.equal(hiker.answer(), 42, info);
});

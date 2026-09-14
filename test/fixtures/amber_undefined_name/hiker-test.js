'use strict';

import hiker from './hiker.js';

QUnit.test('answer', function(assert) {
    const info = 'to life the universe and everything';
    assert.equal(ansewr(), hiker.answer(), info);
});

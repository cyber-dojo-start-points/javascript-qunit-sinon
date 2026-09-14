'use strict';

import hiker from './hiker.js';

// The loop sits at module scope, outside any QUnit.test, so qunit's per-test
// timeout never applies and the hang cannot degrade into an ordinary failure.
while (hiker.answer() === 42) {
}

QUnit.test('answer', function(assert) {
    const info = 'to life the universe and everything';
    assert.equal(hiker.answer(), 42, info);
});

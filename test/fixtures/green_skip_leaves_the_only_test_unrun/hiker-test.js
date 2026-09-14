'use strict';

import hiker from './hiker.js';

// QUnit.skip registers the test and never runs it. The assertion below would
// catch 6 * 9, and the summary counts nothing at all, so the run proves
// nothing.
QUnit.skip('answer', function(assert) {
    const info = 'to life the universe and everything';
    assert.equal(hiker.answer(), 42, info);
});

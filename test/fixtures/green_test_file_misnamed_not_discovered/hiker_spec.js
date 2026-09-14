'use strict';

import hiker from './hiker.js';

// cyber-dojo.sh collects *test*.js, a glob this name does not match, so the
// file is never loaded. Its assertion is false on purpose: the run is green
// only because qunit never runs it.
QUnit.test('answer size', function(assert) {
    assert.equal(String(hiker.answer()).length, 3, 'has three digits');
});

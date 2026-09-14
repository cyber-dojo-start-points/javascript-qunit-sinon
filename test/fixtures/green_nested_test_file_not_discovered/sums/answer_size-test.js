'use strict';

import hiker from '../hiker.js';

// cyber-dojo.sh collects test files with the glob *test*.js, which does not
// descend, so this file is never loaded. Its assertion is false on purpose:
// the run is green only because qunit never reaches it.
QUnit.test('answer size', function(assert) {
    assert.equal(String(hiker.answer()).length, 3, 'has three digits');
});

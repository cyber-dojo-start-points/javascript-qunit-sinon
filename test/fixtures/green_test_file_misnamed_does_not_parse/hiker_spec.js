'use strict';

import hiker from './hiker.js';

// cyber-dojo.sh collects *test*.js, a glob this name does not match, so the
// unparseable line below is never read by node. eslint reads every .js file
// under the sandbox, so it is eslint that reports the parsing error.
QUnit.test('answer size', function(assert) {
    assert.equal(String(hiker.answer()).length, ???);
});

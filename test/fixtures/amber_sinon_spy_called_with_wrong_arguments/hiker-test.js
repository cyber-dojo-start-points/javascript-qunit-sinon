'use strict';

import sinon from 'sinon';
import hiker from './hiker.js';

// sinon.assert throws rather than reporting through assert, so an unmet
// expectation reaches qunit as a death rather than as a failure.
QUnit.test('answer', function(assert) {
    const spy = sinon.spy(hiker, 'answer');
    hiker.answer('life');
    sinon.assert.calledWith(spy, 'the universe');
    assert.ok(true, 'asked about the universe');
    spy.restore();
});

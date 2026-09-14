'use strict';

import sinon from 'sinon';
import hiker from './hiker.js';

// The stub stands in for answer but nothing ever asks for it, so called is
// false and the assertion reports it as an ordinary failure.
QUnit.test('answer', function(assert) {
    const stub = sinon.stub(hiker, 'answer').returns(42);
    assert.ok(stub.called, 'the answer was asked for');
    stub.restore();
});

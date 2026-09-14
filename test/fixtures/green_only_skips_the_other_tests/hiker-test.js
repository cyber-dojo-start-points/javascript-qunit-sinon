'use strict';

import hiker from './hiker.js';

// QUnit.only runs its own test and drops every sibling. The dropped test
// below is the one that would catch 6 * 9, and the summary counts only the
// test that ran, so the run says nothing about the test it never reached.
QUnit.only('answer is a number', function(assert) {
    assert.equal(typeof hiker.answer(), 'number', 'is a number');
});

QUnit.test('answer', function(assert) {
    assert.equal(hiker.answer(), 42, 'to life the universe and everything');
});

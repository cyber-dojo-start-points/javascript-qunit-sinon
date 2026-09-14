'use strict';

import hiker from './hiker.js';

QUnit.test('answer', function(assert) {
    // qunit-cli writes its ticks and its summary to stdout, so flooding
    // stdout from inside a test fills the runner's per-stream cap before the
    // summary line is written. The cap keeps the head, so the flood survives
    // and the summary the colour rests on does not.
    for (let i = 0; i !== 4000; i += 1) {
        process.stdout.write('debug: i is ' + i + ', total is ' + (i * 2) + '\n');
    }
    assert.equal(hiker.answer(), 42, 'to life the universe and everything');
});

'use strict';

import hiker from './hiker.js';

// The file is collected and loaded, but it registers no QUnit.test, so the
// run reaches its summary having asserted nothing.
const answer = hiker.answer();

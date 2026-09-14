'use strict';

export default {
  answer
};

function answer() {
  process.stderr.write('answer was called\n');
  return 6 * 7;
}

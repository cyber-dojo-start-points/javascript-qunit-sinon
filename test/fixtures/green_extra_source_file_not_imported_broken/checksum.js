'use strict';

// No test file imports this, and qunit-cli loads only the files the *test*.js
// glob names, so the unparseable line below is never reached and the run
// stays green. eslint reads every .js file under the sandbox, so it is eslint
// that says the file is broken.
export default function checksum(text) {
  return text.length %%% 256;
}

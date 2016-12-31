var pronounceable = require('../pronounceable');

// Testing a word using the standard dataset.
// The `test` method returns true if a word is pronouncable
// and false otherwise.

var yes = 'samosa';
console.log(yes, pronounceable.test(yes));

var no = 'xghsii';
console.log(no, pronounceable.test(no));

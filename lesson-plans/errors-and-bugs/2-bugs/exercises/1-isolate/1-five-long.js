'use strict';

/*
  environment: microsoft edge

  name: SyntaxError
  message: Cannot read properties of null (reading 'length')

  location: Line 21, column 18

  life cycle: creation phase

  the mistake: trying to fix the unread properties of null (reading 'length')

  the fix(es): make properties of null readable (reading 'length')
*/


/*
  test cases:
    null -> ':('
    '' -> 'too short'
    'abcde' -> 'perfect'
    'abcdef' -> 'too long'

  experiment 1
    line:
    why:
    trying:

*/

let input = prompt('enter something 5 characters long');

if ((input === null)) {
  alert(':(');
} else if (input.length < 5) {
  alert('too short');
} else if (input.length > 5) {
  alert('too long');
} else {
  alert('perfect');
}

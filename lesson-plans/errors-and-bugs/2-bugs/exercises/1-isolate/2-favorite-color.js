'use strict';

/*
  environment: microsoft edge

  name: SyntaxError
  message: Cannot read properties of null (reading 'length')

  location: Line 21, column 30

  life cycle: creation phase

  the mistake: trying to fix the unread properties of null (reading 'length')

  the fix(es): make properties of null readable (reading 'length')
*/


/*
  test cases:
    ' ' -> 'you entered " "'
    'hi' -> 'you entered "hi"'
    'JavaScript' -> 'you entered "JavaScript"'

  experiment 1
    line:
    why:
    trying:

*/

let message = 'you entered "';

while (true) {
  const input = prompt('enter something');

  if (input !== null && input.length > 0) {
    message = input + '"';
    break;
  }
}

alert(message);

'use strict';

let input1 = prompt('enter your first name:');
let input2 = prompt('enter your last name');

let fullName = input1 + ' ' + input2

let greeting = '';

if (input1 === null) {
  greeting = 'hello anonymous.';
} else {
  greeting = 'hello ' + fullName + '!';
}

alert(greeting);

/*  ===== Challenges =====  (done)
  - Ask the user for their first and last names.
  - Greet them with their full name.
*/

'use strict';

console.log('--- in execution phase ---');

/*
  environment: microsoft edge

  name:TypeError
  message:maxNumber is not iterable

  location: line 22

  life cycle: in execution phase 

  the mistake: the variable for the (for of) loop doesn't use array   

  the fix(es): change the value of maxNumber with array 
*/

const maxNumber = [0, 1, 2, 3, 4, 5];

for (const i of maxNumber) {
  console.log(i); // 0, 1, 2, 3, 4, 5
}

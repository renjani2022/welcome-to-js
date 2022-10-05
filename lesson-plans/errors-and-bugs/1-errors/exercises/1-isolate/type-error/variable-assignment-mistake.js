

'use strict';

console.log('--- in execution phase ---');


/*
  environment: microsoft edge

  name: SyntaxError
  message: Invalid left-hand side in assignment

  location: line 26

  life cycle: in creation phase 

  the mistake: the value must be on the right-side after the variable  

  the fix(es): replace "true" after "isHappy"
*/


let isHappy = false;

isHappy = true;

console.log(isHappy)



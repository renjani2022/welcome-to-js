'use strict';

console.log('--- in execution phase ---');

/*
  environment: microsoft edge

  name: ReferenceError
  message: welf is not defined

  location: line 20, column 6

  life cycle: in execution phase

  the mistake: the variable not declared 

  the fix(es): defining the variable 
*/

let welf = 'ingrad';

console.log(welf);

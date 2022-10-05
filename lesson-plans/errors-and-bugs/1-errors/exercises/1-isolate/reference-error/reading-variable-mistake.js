'use strict';

console.log('--- in execution phase ---');

/*
  environment: microsoft edge

  name:  ReferenceError
  message: cannot access 'tomatoes' before initialization

  location: line 20, column 13

  life cycle: in execution phase

  the mistake: tomatoes is not declared/initialized yet

  the fix(es): declaring the tomatoes first
*/

let tomatoes = 'fresh';
console.log(tomatoes);



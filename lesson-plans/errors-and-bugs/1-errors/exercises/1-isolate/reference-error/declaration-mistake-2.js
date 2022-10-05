'use strict';

console.log('--- in execution phase ---');

/*
  environment: microsof edge

  name: Cannot access 'isValidUserName'
  message: Cannot access 'isValidUserName'

  location: line 24, column 19

  life cycle: in execution phase

  the mistake: isValidUserName is not yet declared and initialized 

  the fix(es): doing initialization before assigning   
*/

const userName = 'chiobin';
console.log('userName:', typeof userName, userName);

let isValidUserName;


if (userName.length > 3) {
  isValidUserName = true;
}

if (userName.length <= 3) {
  isValidUserName = false;
}

console.log('isValidUserName:', typeof isValidUserName, isValidUserName);

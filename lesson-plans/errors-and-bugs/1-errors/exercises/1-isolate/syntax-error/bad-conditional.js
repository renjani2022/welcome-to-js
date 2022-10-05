

'use strict';

console.log('--- in execution phase ---');


/*
  environment: microsoft edge 

  name: SyntaxError
  message: Unexpected token 

  location: line 27, column 29

  life cycle: Creation phase

  the mistake: token is wrong (doubled else))

  the fix(es): using else if 
*/

let userName = 'indrogo';

if (userName.length < 3) {
  console.log('too short');
} else if (userName.length < 5) {
  console.log('just right');
} else {
  console.log('too long');
}



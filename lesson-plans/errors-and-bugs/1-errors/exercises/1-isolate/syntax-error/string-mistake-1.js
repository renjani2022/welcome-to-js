

'use strict';

console.log('--- in execution phase ---');


/*
  environment:Microsoft Edge

  name:SyntaxError
  message: Invalid or unexpected token

  location: line 23

  life cycle: Creation phase

  the mistake: there is no code to break into two lines 

  the fix(es): fixing the string with the breaking line code
*/

const a = 'this is \n' +
'two lines';

console.log(a);

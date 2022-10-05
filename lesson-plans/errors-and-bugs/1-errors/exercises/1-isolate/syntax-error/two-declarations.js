'use strict';

console.log('--- in execution phase ---');

/*
  environment:Microsoft Edge

  name:SyntaxError
  message: Identifier 'tree' has already been declared

  location: line 23

  life cycle: Creation phase

  the mistake: repeating the declare/init (let) for the same variable

  the fix(es): delete the 2nd let 

*/

let tree = 'oak';

tree = 'birch';

console.log(tree)
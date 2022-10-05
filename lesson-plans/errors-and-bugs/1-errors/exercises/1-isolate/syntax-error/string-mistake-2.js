

'use strict';

console.log('--- in execution phase ---');


/*
  environment:Microsoft Edge

  name:SyntaxError
  message: Unexpected string

  location: line 34

  life cycle: Creation phase

  the mistake: the string without using adding code (+)

  the fix(es): put the (+) in string 
  
*/

const quotesInQuotes = 'remind yourself '  + '"I can do this!"' + ' at least once a day';

console.log(quotesInQuotes)



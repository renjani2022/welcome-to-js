// these are the only functions you will need
import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../../../lib/dom-io/index.js';

/*
  environment: Microsoft Edge

  name: SyntaxError
  message: Cannot use import statement outside a module

  location: line 2

  life cycle: creation phase 

  the mistake: 

  the fix(es):
*/

whenFormDataChanges('user-data', () => {
  console.log('\n--- form data changed ---');

  // --- read user input ---

  let text = readString('to-double');

  // --- repeat the text ---

  let repeated + text + '\n' + text;

  // --- display the repeated text ---

  displayString('doubled-input', repeated);
});

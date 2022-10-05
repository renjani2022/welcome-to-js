'use strict';

/* Value Swap

  Can you predict what the [trace] button will log to the console?
    use the [table] button to write down your predictions

  study tips: [variables], [open in] jsTutor, [ask me]

*/

let a = 'y';  // a (declare, init): y 
let b = 'x';  // b (declare, init): x
let t = '';  // t (declare, init):

console.log(a, b, t); 
// a (read): y
// b (read): x
// t (read): 
// a, b, t (read): y, x

t = a; 
// a (read): y
// t (assign): y
a = b;
// b (read): x
// a (assign): x
b = t;
// t (read): y
// b (assign): y

console.log(a, b, t);  
// a (read): x
// b (read): y 
// t (read): y 
// a, b, t (read): x, y, y 



// what did you do in this program? playing the logic
// what are the final values of `a` and `b`? x and y 
// how are they changed from the initial values? because 'a' and 'b' are declared again as a new string with another value
// is it possible to swap a and b without using t? No, it's impossible 




/* the simulation if we don't use 't'

a = b; 
--> b (read): x
--> a (assign): x
b = a; 
--> a (read): x
--> b (assign): x
console.log(a, b); 
--> a (read): x
--> b (read): x
--> a, b (read): x, x

/*
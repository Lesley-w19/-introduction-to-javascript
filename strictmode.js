//JavaScript Use Strict

// -- it  defines that javascript should be executed in strict mode.
// *** With strict mode, you can not, for example, use undeclared variables.

// Strict mode is declared by adding "use strict" to the beginning of a script.

//--- When declared at the beginning of a script, it has global scope. It specifies that all code in the script will execute in strict mode:

"use strict";
 const create = () =>{
     return;
 } 
 // -- the above has global scope

 const create1 = () =>{
  "use strict";
  //code
 }
 // -- the above has local scope as it is declared inside a function.

 
//NB: ensures all variables in your code are declared

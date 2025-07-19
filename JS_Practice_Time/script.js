// Variables:-
/*   
   1) Const: It is a block scoped variable. It can neither be re-declared nor re-assigned. It must be initialized  at  the time of declaration. It is hoisted but reference error occurs when accessed before initialization.
    Example:
*/
const id = 5;
// const id = 10; (Not allowed because const variables can't be re-declared)
// id = 2; (Not allowed because const variables can't be re-assigned)
console.log(id);

/*
  2) Let:- It is also blocked scoped. It can be updated and re-assigned but can't be re-declared. It is hoisted but not initialized. Hoisted but referenece error occurs when accessed before initialization.
  Example:-
*/
let myIdenty = "Ditam";
// let myIdenty = "Ditam Gupta";   (Error: because it can't be re-declared.)
myIdenty = "Ditam Gupta"; // (No Error: beacause it can be re-assigned.)
console.log(myIdenty);

/*
  3) var:- It is function-scoped. It can be re-declared and re-assigned. It is hoisted and initialized with undefined. It is hoisted and shows undefined when accessed before initialization. It is not recommended and suggested to use until it's the need.
  Example:-
*/
var myBool = true;
var myBool = false;
// (We got no error by re-dclaring/ re-assigning the value because it is allowed with var variables. That is why it is not recommended to use.)
console.log(myBool);

// Some examples for understanding related to Hoisting:-

/*
(console.log(a); // Undefined
var a = 10; )================> The process, that actually happens behind it, is:- 

var a; ==================> It automatically goes to the top of code and that is called hoisting.
console.log(a);
a=10;


 -------Learn about the following codes :- How is it possible that they are hoisted but still error?-------

 
console.log(b); // ReferenceError: Can't access 'b' before initialization
let b = 20; 

let b;
console.log(b); //Undefined
b = 20;
console.log(b); //20

console.log(c); // ReferenceError: Can't access 'c' before initialization
const c = 30;
*/

// Data Types:

/*
  There are two types of data types (primitive data types and non primitive data types).
    - Primitive data types:- Number, String, Boolean, Undefined, Null, BigInt (i.e. large amt. of numbers), Symbol
    - Non-primitive data types:- Array, Object, Function 
    
  The key difference between primitive data types and non-primitive data types is:
    - Primitive data types are immutable i.e. their value can't be changed and have value memory type.
        For example: 

        let name = "Ditam";
        name[0] = "P";
        console.log(name); // Ditam

  It clearly shows, we can't change the value but ---> we can re-assign them:-

        let name = "Ditam";
        name = "Pitam";
        console.log(name); // Pitam
    - Non-primitive data types are mutable i.e. their value can be changed and they are stored in reference memory type.

  Conclusion: 
*/

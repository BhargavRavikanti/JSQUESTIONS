// 1) what is scope?
// (1) Block scope
// (2) Function scope or local scope
// (3) Global scope
// Automatically Global
// 2) what is Lexical scope?
// 3) what is Hoisting?
// 4) what is Closure?

// 1) what is scope?
// SCOPE
// Variable "visibility"
// The location where a variable is defined dictates WHERE WE HAVE ACCESS TO THE VARIABLE

// JavaScript has 3 types of scope:

// Block scope
// Function scope or local scope
// Global scope

// (1) Block Scope
// ***************
// Before ES6 (2015), JavaScript had only Global Scope and Function Scope.

// ES6 introduced two important new JavaScript keywords: let and const.

// These two keywords provide Block Scope in JavaScript.

// Variables declared inside a { } block cannot be accessed from outside the block:

// Example;
// {
//   let x = 2;
//   console.log(x);
// }
// console.log(x); // x cannot access outside of the block {}

// Variables declared with the var keyword can NOT have block scope.

// Variables declared inside a { } block can be accessed from outside the block.

// Example
// {
//   var x = 3;
//   console.log(x);
// }
// console.log(x);

// Local Scope or function scope
// Variables declared within a JavaScript function, become LOCAL to the function.

// Example

// myFunction();
// function myFunction() {
//   let carName = "Volvo";
//   // code here CAN use carName
//   console.log(carName);
// }
// myFunction();
// console.log(carName); // code here can NOT use carName

// Local variables have Function Scope:

// They can only be accessed from within the function.

// Since local variables are only recognized inside their functions, variables with the same name can be used in different functions.

// Local variables are created when a function starts, and deleted when the function is completed.

// (2) Function Scope
// ***************
// JavaScript has function scope: Each function creates a new scope.

// Variables defined inside a function are not accessible (visible) from outside the function.

// Variables declared with var, let and const are quite similar when declared inside a function.

// They all have Function Scope:

// function myFunction1() {
//   var carName = "Volvo"; // Function Scope
//   console.log(carName);
// }
// myFunction1();
// function myFunction2() {
//   let carName = "Volvo"; // Function Scope
//   console.log(carName);
// }
// myFunction2();
// function myFunction3() {
//   const carName = "Volvo"; // Function Scope
//   console.log(carName);
// }
// myFunction3();

// (3) Global scope
// ***************
// Global JavaScript Variables
// A variable declared outside a function, becomes GLOBAL.

// Example
// let carName = "Volvo";
// console.log(carName); // code here can use carName

// function myFunction4() {
//   console.log(carName); // code here can also use carName
// }
// myFunction4();

// Global Scope
// Variables declared Globally (outside any function) have Global Scope.

// Global variables can be accessed from anywhere in a JavaScript program.

// Variables declared with var, let and const are quite similar when declared outside a block.

// They all have Global Scope:

// var number1 = 2; // Global scope
// console.log(number1);

// let number2 = 2; // Global scope
// console.log(number2);

// const number3 = 2; // Global scope
// console.log(number3);

// JavaScript Variables
// In JavaScript, objects and functions are also variables.

// Scope determines the accessibility of variables, objects, and functions from different parts of the code.

// Automatically Global
// ***************
// If you assign a value to a variable that has not been declared, it will automatically become a GLOBAL variable.

// This code example will declare a global variable carName, even if the value is assigned inside a function.

// Example
// console.log(carName); // code here can use carName

// function myFunction5() {
//   carName = "Volvo";
//   console.log(carName);
// }
// myFunction5();

// Strict Mode
// In "Strict Mode", undeclared variables are not automatically global.

// Warning
// Do NOT create global variables unless you intend to.

// Your global variables (or functions) can overwrite window variables (or functions).
// Any function, including the window object, can overwrite your global variables and functions.

// 2) what is Lexical scope?
// definition : the ability for a function scope to access variables from the parent scope.
//  We call the child function to be lexically bound by that of the parent function.

// // EXAMPLE 1
// function outer() {
//   let movie = "Amadeus";

//   function inner() {
//     // let movie = "The Shining";

//     function extraInner() {
//       //movie is not defined in this function
//       //but it has access to parent function's variables
//       console.log(movie.toUpperCase());
//     }
//     extraInner();
//   }
//   inner();
// }

// outer(); //'AMADEUS'

// NOTE: JavaScript uses a scope chain to find variables accessible in a certain scope. When a variable is referred to, JavaScript will look for it in the current scope and continue to parent scopes until it reaches the global scope. This chain of traversed scopes is called the scope chain.

// // EXAMPLE 2
// function parent() {
//   const name = "bharu";
//   function child() {
//     // const name = "child";
//     function grandChild() {
//       // const name = "grandchild";
//       function greatGrandChild() {
//         // const name = "greatgrandchild";
//         console.log(name);
//       }
//       greatGrandChild();
//     }
//     grandChild();
//   }
//   child();
// }
// parent();

// 3) what is Hoisting?
// It allows you to use functions and variables before they are declared.
// variables declared with var are hoisted
// variables declared with let & const are not hoisted
// function statements are hoisted

// variables declared with var are hoisted
// console.log(animal);
// var animal = "Tapir";
// console.log(animal);

// variables declared with let & const are not hoisted
// console.log(shrimp); // cannot access "shrimp" before initialization
// const shrimp = "Harlequin Shrimp";
// console.log(shrimp);

// function statements are hoisted
// howl();
// function howl() {
//   console.log("AWOOOOOOO");
// }

// function expressions are...kind of hoisted.
// The variable is hoisted, but has a value of undefined
// hoot();
// STORING FUNCTION IN A VARIABLE

// // hoot(); // this will not work
// console.log(hoot); // undefined

// var hoot = function () {
//   console.log("hooooooo hooooooo");
// };

// hoot();

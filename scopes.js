// 1) what is scope?
// (1) Block scope
// (2) Function scope or local scope
// (3) Global scope
// Automatically Global
// 2) what is Lexical scope?
// 3) what is Hoisting?
// 4) what is Closure?
// 5) IIFE

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

// 4) what is Closure?
// A closure is a function(child) having access to the parent scope, even after the parent function has closed.

// Jonas
// // EXAMPLE 1
// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };
// secureBooking()(); // parent function has closed // or invoked

// const booker = secureBooking();

// booker(); // child function having access to the parent scope
// booker(); // child function having access to the parent scope
// booker(); // child function having access to the parent scope

// console.dir(booker);

// // EXAMPLE 2
// let f;

// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// g();
// f();
// console.dir(f);

// // Re-assigning f function
// h();
// f();
// console.dir(f);

// EXAMPLE 3

// smilga
// EXAMPLE 1
// function outer() {
//   let privateVar = "secret";
//   function inner() {
//     console.log(`hello there secret is : ${privateVar}`);
//   }
//   return inner;
// }
// // console.log(privateVar); // not defined

// outer()();

// // const value = outer();
// // console.log(value);
// // value();

// EXAMPLE 2
// function newAccount(name, initialBalance) {
//   let balance = initialBalance;
//   function showBalance() {
//     console.log(`Hey ${name}, your balance is ${balance}`);
//   }
//   return showBalance;
// }

// newAccount("susan", 500)();

// const john = newAccount("john", 300);
// const bob = newAccount("bob", 1000);

// john();
// bob();

// // EXAMPLE 3
// function newAccount(name, initialBalance) {
//   let balance = initialBalance;
//   function showBalance() {
//     console.log(`Hey ${name}, your balance is ${balance}`);
//   }
//   function deposit(amount) {
//     balance += amount;
//     showBalance();
//   }
//   function withdraw(amount) {
//     if (amount > balance) {
//       console.log(`Hey ${name}, sorry not enough funds`);
//       return;
//     }
//     balance -= amount;
//     showBalance();
//   }
//   return { showBalance: showBalance, deposit: deposit, withdraw: withdraw };
// }

// const john = newAccount("john", 1000);
// const bob = newAccount("bob", 1000);

// john.showBalance();
// john.deposit(400);
// john.deposit(1000);
// john.withdraw(400);
// john.withdraw(2001);
// bob.showBalance();

// youtube VenkateshMogili
// Closures
// A closure is a feature in Javascript where an inner function has access to the outer function's variables and parameters - a scope chain.
// the inner function remembers the environment in which it was created.

// The closure has three scope chains:
// It has access to its own scope - variables defined between its curly brackets.
// It has access to the outer function's variables
// It has access to the global variables.

// before clousures some basic questions
// 1
// function example1() {
//   var a = 10;
// }
// console.log(a); // what is the output?
// Is it 10?

// 2
// function example2() {
//   var b = 20;
//   function innerFunction() {
//     return b;
//   }
//   return innerFunction;
// }
// let output = example2();
// console.log(output); // what is the output?
// // is it 20?

// // Let's see

// // Function Expressions?
// let one = function () {
//   // return 1;
// };
// What is function definiton?
// console.log(one); // what we define in a function
// What is function invoking
// console.log(one());
// What will be the output, if we don't return anything from a function?
// console.log(one());

// Nested Functions?
// function parent() {
//   function child1() {
//     function child2() {}
//   }
// }

// now let see what closure is
// var x = 100;
// function outer() {
//   var y = 50;
//   var n = 100;
//   function inner() {
//     var z = 10;
//     console.log(y + z + x);
//     y++;
//     z++;
//   }
//   return inner;
// }
// let inner = outer();
// // console.log(inner);
// // console.dir(inner);
// console.log(inner());
// console.log(inner());
// console.dir(inner);

// // closure Real time Example
// function Bank() {
//   var name = "Venkatesh";
//   function getName() {
//     return name;
//   }
//   function setName(newName) {
//     name = newName;
//   }
//   return { getName, setName };
// }
// let bank = Bank();
// console.log(bank);
// console.log(bank.getName());
// bank.setName("vivek");
// console.log(bank.getName());
// bank.setName("chinni");
// console.log(bank.getName());

// IIFE
// An IIFE(immediately Invoked Function Expression) is a javascript functon that runs as soon as it is defined.
// They don't pollute the global object, and they are a simple way to isolate variables declarations.

// const runOnce = function () {
//   console.log("This will never run again");
// };
// runOnce();

// // IIFE
// (function () {
//   console.log("This will never run again");
//   const isPrivate = 23;
// })();

// // console.log(isPrivate);

// (() => console.log("This will Also never run again"))();

// {
//   const isPrivate = 23;
//   var notPrivate = 46;
// }
// // console.log(isPrivate);
// console.log(notPrivate);

// Scope Chain
// The scope chain is how Javascript looks for variables. When looking for variables through the nested scope, the inner scope first looks at its own scope. If the variable is not assigned locally, which is inside the inner function or block scope, then JavaScript will look at the outer scope of said function or block to find the variable. If Javascript could not find the variable in any of the outer scopes on the chain, it will throw a reference error.

// Javascript Tutorial and Projects Course (2022)

////////////////////////////////
// 001 - Introduction
////////////////////////////////
////////////////////////////////
// 002 - Visual Studio Code and Google Chrome
////////////////////////////////
////////////////////////////////
// 003 - Javascript Basics
////////////////////////////////
////////////////////////////////
// 004 - Javascript Tutorial Continued
////////////////////////////////
////////////////////////////////
// 005 - DOM
////////////////////////////////
////////////////////////////////
// 006 - DOM Projects
////////////////////////////////
////////////////////////////////
// 007 - Deployment
////////////////////////////////
////////////////////////////////
// 008 - Objects
////////////////////////////////

// ======================================
// 001 - Intro
// ======================================
// Object Basics
// "this"
// Factory Functions
// Constructor Functions
// Prototypal Inheritence
// ES6 Class Syntax

// ======================================
// 002 - Object Basics
// ======================================
// 1)
// const person = {
//   name: "john",
//   age: 25,
//   married: true,
//   siblings: ["anna", "peter"],
//   greet: function (name) {
//     console.log(`Hello, my name is ${name}`);
//   },
//   sayHello(name) {
//     console.log(`hello, my name is ${name}`);
//   },
// };

// (1) console person
// console.log(person);

// (2) access name from person object.
// console.log(person.name);

// (3) access age from person object.
// console.log(person.name);

// (4) create property city and set value chicago
// person.city = "chicago";
// console.log(person.city);

// (5) pass argument bharu to greet method
// person.greet("bharu");

// (6) pass argument dhanush to sayHello method
// person.sayHello("dhanush");

// (7) delete siblings property and check is it deleted or not
// console.log(person.siblings);
// const siblings = delete person.siblings;
// console.log(siblings);
// or
// console.log(person.siblings);
// delete person.siblings;
// console.log(person.siblings);

// ======================================
// 003 - Nested Object,Bracket Notation
// ======================================
// 1)
// const age = 40;
// let random = "random-value";
// random = "age";
// const person = {
//   name: "john",
//   age: age,
//   married: true,
//   siblings: ["anna", "peter"],
//   greet: function (name) {
//     console.log(`Hello, my name is ${name}`);
//   },
//   sayHello(name) {
//     console.log(`Hello, my name is ${name}`);
//   },
//   job: {
//     title: "developer",
//     company: {
//       name: "coding addict",
//       address: "123 main street",
//     },
//   },
//   "random-value": "random",
//   "random value1": "random1",
// };

// // (1) access name from company from person object
// console.log(person.job.company.name);

// // (2) access title value from person object
// console.log(person.job.title);

// // (3) access address value from person object
// console.log(person.job.company.address);

// // (4) access random-value value from person object
// console.log(person["random-value"]);

// // (5) access age value using random variable from person object
// console.log(person[random]);

// // (6) access random value1 value from person object
// console.log(person["random value1"]);

// 2) create variable myAge 29 create object age and store myAge variable,"random-value" set value 10,"random age" set value "18 years" in that object
// const myAge = 29;
// const age = {
//   myAge: myAge,
//   "random-value": 10,
//   "random age": "18 years",
// };
// // (1) access myAge from age object
// console.log(age.myAge);
// // (2) access random-value from age
// console.log(age["random-value"]);
// // (3) access random age from age
// console.log(age["random age"]);

// 3) when to use square bracket notation in objects to access properties values?
// when objects has property like "random-value" this or "random age"

// ======================================
// 004 - 'this' - Keyword Basics
// ======================================
// 1)
// const john = {
//   firstName: "john",
//   lastName: "anderson",
//   fullName: function () {
//     console.log(this);
//     console.log(`My full name is ${this.firstName} ${this.lastName}`);
//   },
// };
// // (1) invoke fullname
// john.fullName();

// 2) copy paste john object 3 times and change object names peter,parker,nilson and change firstName peter,parker,nilson and lastName watson,tungston,hardstone and invoke fullName of 3 objects
// const peter = {
//   firstName: "peter",
//   lastName: "watson",
//   fullName: function () {
//     console.log(`My full name is ${this.firstName} ${this.lastName}`);
//   },
// };
// const parker = {
//   firstName: "parker",
//   lastName: "tungston",
//   fullName: function () {
//     console.log(`My full name is ${this.firstName} ${this.lastName}`);
//   },
// };
// const nilson = {
//   firstName: "nilson",
//   lastName: "hardstone",
//   fullName: function () {
//     console.log(`My full name is ${this.firstName} ${this.lastName}`);
//   },
// };

// peter.fullName();
// parker.fullName();
// nilson.fullName();

// 3)
// const data = {
//   firstName: "harish",
//   lastName: "anderson",
//   fullName: function () {
//     // (1) access firstName and lastname using this key word and console to browser
//     console.log(`${this.firstName}, ${this.lastName}`);
//   },
// };
// data.fullName();

// 4)
// const details = {
//   firstName: "harish",
//   lastName: "anderson",
//   age: 40,
//   // why this fullDetails function?
//   // to access firstname,lastName,age in one go
//   // why using this keyword?
//   // to access firstname,lastName,age in one go
//   // without this keyword we cannot access firstname,lastName,age using function fullDetails in one go
//   fullDetails: function () {
//     console.log(`${this.firstName}, ${this.lastName}, ${this.age}`);
//   },
// };
// details.fullDetails();

// // (1) change firstName value sharuk
// details.firstName = "sharuk";
// // (2) change lastName value watson
// details.lastName = "watson";
// // (3) change age value to 50
// details.age = "50";
// // (4) access fulldetails
// details.fullDetails();

// ======================================
// 005 - this - Keyword Advanced
// ======================================
// 1) guess output
// console.log(this);

// 2)
// function showThis() {
//   console.log(this);
// }

// const john = {
//   name: "john",
//   showThis: showThis,
// };
// const bob = {
//   name: "bob",
//   showThis: showThis,
// };

// (1) guess output
// john.showThis();
// (2) guess output
// bob.showThis();
// (3) guess output
// showThis(); // refer to window object

// 3)
// const btn1 = document.querySelector(".btn-1");
// const btn2 = document.querySelector(".btn-2");

// (1) guess output
// btn1.addEventListener("click", showThis);
// (2) guess output
// btn2.addEventListener("click", showThis);
// (3) guess output
// btn2.addEventListener("click", function () {
//   showThis();
// });

// ======================================
// 006 - Factory Functions
// ======================================

// ======================================
// 007 - Constructor Functions
// ======================================

// ======================================
// 008 - Constructor Property
// ======================================

// ======================================
// 009 - Prototype Property
// ======================================

// ======================================
// 010 - Property Lookup
// ======================================

// ======================================
// 011 - ES6 Class Syntax
// ======================================

// ======================================
// 012 - Call
// ======================================

// ======================================
// 013 - Apply,Arguments
// ======================================

// ======================================
// 014 - Bind
// ======================================

// ======================================
// 015 - Button Example
// ======================================

////////////////////////////////
// 009 - OOP Projects
////////////////////////////////
////////////////////////////////
// 010 - Functions
////////////////////////////////

// ======================================
// 001 - Intro
// ======================================
// ======================================
// 002 - IIFE
// ======================================
// 1) what is IIFE?
// IIFE Immediately-Invoked Function Expression
// To create the IIFE, we first create the function declaration: functionName() . Then, once the function is defined, we: Wrap parentheses around it.

// 2) write IIFE function contains variables num3 30,num4 50 and console num3+num4 and invoke
// (function () {
//   const num3 = 30;
//   const num4 = 50;
//   console.log(`the result is : ${num3 + num4}`);
// })();

// (function () {
//   const num3 = 30;
//   const num4 = 50;
//   console.log(`the result is : ${num3 + num4}`);
// })();

// 3) write IIFE function paramters num3,num4 console num3+num4 pass arguments 30,50
// pass arguments
// (function (num3, num4) {
//   console.log(`the result is : ${num3 + num4}`);
// })(30, 50);

// 4) write IIFE function expression
// return/assing to variable
// const result = (function (num3, num4) {
//   return num3 + num4;
// })(30, 50);
// console.log(result);

// ======================================
// 003 - Hoisting
// ======================================
// ======================================
// 004 - Clousure
// ======================================
// 1) what is clousure & example?
// closure gives you an access to an outer function's scope from an inner function
// make private variables with closures

// A closure is a function(child) having access to the parent scope, even after the parent function has closed.

// Example
// function parent() {
//   let age = 28;
//   function child() {
//     console.log(`bharu ${age}`);
//   }
//   return child;
// }
// // console.log(age); // not defined
// parent()();
// // or
// const clousure = parent();
// clousure();

// ======================================
// 005 - Clousure - Basic Example
// ======================================

// ======================================
// 006 - Clousure - Complete Example
// ======================================

////////////////////////////////
// 011 - ES6
////////////////////////////////
// ======================================
// 001 - ES6 Modile Intro
// ======================================

// ======================================
// 002 - VAR,LET,CONST
// ======================================
// ======================================
// 003 - Function Scop and Block Scope
// ======================================
// ======================================
// 004 - Template Strings
// ======================================
// ======================================
// 005 - Template Strings-HTML
// ======================================
// ======================================
// 006 - Tagged Template Literals
// ======================================
// ======================================
// 007 - Arrow Functions-Basics
// ======================================
////////////////////////////////
// 012 - Projects
////////////////////////////////
////////////////////////////////
// 013 - Modules
////////////////////////////////

// ======================================
// 001 - Intro
// ======================================
// Provide Structure
// Split Code Into Smaller Files
// Share Code Across App
// Same as React
// use Server Extension Locally
// Used in Projects

// ======================================
// 002 - Setup
// ======================================

// ======================================
// 003 - Named Export
// ======================================
// ======================================
// 004 - Default Export
// ======================================
// ======================================
// 005 - Get Element
// ======================================

////////////////////////////////
// 014 - Async Javascript
////////////////////////////////

// ======================================
// 001 - Intro
// ======================================
// Synchronous
// Asynchronous
// Callbacks
// Promises
// Async/Await

// ======================================
// 002 - Synchronous
// ======================================
// 1) what is synchronous javascript?
// Javascript is single threaded, synchronous language.
// Synchronous JavaScript is the programming approach where tasks of a program are executed sequentially one at a time.
// Example
// console.log(`i'm first`);
// console.log(`i'm second`);
// console.log(`i'm third`);

// console.log(`i'm first`);
// boilingWater();
// console.log(`i'm third`);

// function boilingWater() {
//   console.log("boiling...");
//   for (let i = 0; i < 100; i++) {
//     console.log("still not done...");
//   }
//   console.log("done.");
// }

// ======================================
// 003 - Recipe example
// ======================================
// 1) write example for synchnorous javascript
// Make Soup
// boil water 10 min
// chop carrots
// add carrots boil for 5 min
// chop onion
// add onion boil for 5 min

// boilWater(100);
// console.log(`chop carrot`);
// boilWater(50);
// console.log(`chop onion`);
// boilWater(50);

// function boilWater(time) {
//   console.log("boiling...");
//   for (let i = 0; i < time; i++) {
//     console.log("still not done...");
//   }
//   console.log("done.");
// }

// ======================================
// 004 - Asynchronous
// ======================================
// 1) what is Asynchronous javascript?
// Asynchronous JavaScript is the programming method where operations are run independently allowing the program to continue running while waiting for certain tasks to complete.

// 2) write example for Asynchnorous javascript
// Make Soup
// boil water 10 min
// chop carrots
// add carrots boil for 5 min
// chop onion
// add onion boil for 5 min

// boilWater(10000);
// console.log(`chop carrot`);

// function boilWater(time) {
//   console.log("boiling...");
//   setTimeout(() => {
//     console.log("done.");
//   }, time);
// }

// ======================================
// 005 - Callback Hell
// ======================================
// 1) what is callback hell?
// Callback Hell: Callback Hell is essentially nested callbacks stacked below one another forming a pyramid structure. Every callback depends/waits for the previous callback, thereby making a pyramid structure that affects the readability and maintainability of the code.

// ======================================
// 006 - Callback Hell - DOM Example
// ======================================
// ======================================
// 007 - Promises
// ======================================
// 1) what are promises?
// In JavaScript, a promise is a good way to handle asynchronous operations. It is used to find out if the asynchronous operation is successfully completed or not.

// ======================================
// 009 - Reject Example
// ======================================
// ======================================
// 010 - Promises - DOM Example
// ======================================
// ======================================
// 011 - Async Await
// ======================================

////////////////////////////////
// 015 - AJAX
////////////////////////////////

// ======================================
// 001 - Intro
// ======================================
// AJAX - Asynchronous Javascript and XML
// HTTP Requests - Communication between Client and Server
// API - Application Programming Interface

// ======================================
// 002 - AJAX,HTTP,API
// ======================================
// AJAX - Asynchronous Javascript and XML
// HTTP Requests - Communication between Client and Server
// API - Application Programming Interface

// ======================================
// 003 - Simple Text
// ======================================
// ======================================
// 004 - Add Button
// ======================================
// ======================================
// 005 - JSON
// ======================================
// ======================================
// 006 - Fetch
// ======================================
// ======================================
// 007 - Fetch - Errors gotcha
// ======================================
// ======================================
// 008 - Fetch - Big Picture
// ======================================
// ======================================
// 009 - Fetch with Functions
// ======================================
// ======================================
// 010 - Fetch - with async/await
// ======================================
// ======================================
// 011 - Try Catch
// ======================================

////////////////////////////////
// 016 - Projects
////////////////////////////////
////////////////////////////////
// 017 - Slider
////////////////////////////////
////////////////////////////////
// 018 - Stripe Submenus
////////////////////////////////
////////////////////////////////
// 019 - Pagination
////////////////////////////////
////////////////////////////////
// 020 - Comfy Store
////////////////////////////////

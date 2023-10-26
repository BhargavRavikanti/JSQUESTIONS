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
// (2) access name from person object.
// (3) access age from person object.
// (4) create property city and set value chicago
// (5) pass argument bharu to greet method
// (6) pass argument dhanush to sayHello method
// (7) delete siblings property and check is it deleted or not

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
// };

// (1) access name from company from person object
// (2) access title value from person object
// (3) access address value from person object
// (4) access random-value value from person object
// (5) access age value using random variable from person object
// (6) access random value1 value from person object

// 2) create variable myAge 29 create object age and store myAge variable,"random-value" set value 10,"random age" set value "18 years" in that object
// const myAge = 29;
// const age = {
//   myAge: myAge,
//   "random-value": 10,
//   "random age": "18 years",
// };
// (1) access myAge from age object
// (2) access random-value from age
// (3) access random age from age

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
// (1) console fullName

// 2) copy paste john object 3 times and change object names peter,parker,nilson and change firstName peter,parker,nilson and lastName watson,tungston,hardstone and invoke fullName of 3 objects

// 3)
// const data = {
//   firstName: "harish",
//   lastName: "anderson",
//   fullName: function () {
//     // (1) access firstName and lastname using this key word and console to browser
//   },
// };

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

// (1) change firstName value sharuk
// (2) change lastName value watson
// (3) change age value to 50
// (4) access fulldetails

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
// what is factory function?

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
// 2) write IIFE function contains variables num3 30,num4 50 and console num3+num4 and invoke

// 2) write IIFE function paramters num3,num4 console num3+num4 pass arguments 30,50

// 3) write IIFE function expression
// return/assing to variable

// ======================================
// 003 - Hoisting
// ======================================
// ======================================
// 004 - Clousure
// ======================================
// 1) what is clousure & example?

// ======================================
// 005 - Clousure - Basic Example
// ======================================
// ======================================
// 006 - Clousure - Complete Example
// ======================================

// 1) what is IIFE?
// 2) write IIFE function contains variables num3 30,num4 50 and console num3+num4 and invoke

// 2) write IIFE function paramters num3,num4 console num3+num4 pass arguments 30,50

// 3) write IIFE function expression
// return/assing to variable

////////////////////////////////
// 011 - ES6
////////////////////////////////
////////////////////////////////
// 012 - Projects
////////////////////////////////
////////////////////////////////
// 013 - Modules
////////////////////////////////
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
// ======================================
// 004 - Asynchronous
// ======================================
// 1) what is Asynchronous javascript?
// 2) write example for Asynchnorous javascript
// Make Soup
// boil water 10 min
// chop carrots
// add carrots boil for 5 min
// chop onion
// add onion boil for 5 min

// ======================================
// 005 - Callback Hell
// ======================================
// 1) what is callback hell?

// ======================================
// 006 - Callback Hell - DOM Example
// ======================================
// ======================================
// 007 - Promises
// ======================================
// 1) what are promises?

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

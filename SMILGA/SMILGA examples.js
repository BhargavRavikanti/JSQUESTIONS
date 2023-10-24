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

// ======================================
// 002 -
// ======================================
// ======================================
// 003 -
// ======================================
// ======================================
// 004 -
// ======================================
// ======================================
// 005 -
// ======================================

// ======================================
// 006 -
// ======================================
// ======================================
// 007 -
// ======================================
// ======================================
// 008 -
// ======================================
// ======================================
// 009 -
// ======================================
// ======================================
// 010 -
// ======================================
// ======================================
// 011 -
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

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
// IIFE Immediately-Invoked Function Expression
// older approach - new Modules
// simple approach to avoid global scope pollution
// good way at protecting the scope of your function and the variables within it.

// global namespace, extra steps

// const num1 = 30;
// const num2 = 50;
// // const num1 = 70;
// function add() {
//   console.log(`the result is : ${num1 + num2}`);
// }
// add();

// 1) write IIFE function contains variables num3 30,num4 50 and console num3+num4 and invoke
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
// Closure
// closure gives you an access to an outer function's scope from an inner function
// make private variables with closures

// function outer() {
//   let privateVar = "secret";
//   function inner() {
//     console.log(`hello there secret is : ${privateVar}`);
//   }
//   return inner;
// }
// // console.log(privateVar); // not defined

// outer()();

// const value = outer();
// console.log(value);
// value();

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
////////////////////////////////
// 014 - Async Javascript
////////////////////////////////
////////////////////////////////
// 015 - AJAX
////////////////////////////////
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

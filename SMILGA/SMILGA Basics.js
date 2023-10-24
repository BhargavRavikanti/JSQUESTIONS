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

// A closure is a feature of JavaScript that allows inner functions to access the outer scope of a function. Closure helps in binding a function to its outer boundary and is created automatically whenever a function is created.

// A closure is a function(child) having access to the parent scope, even after the parent function has closed.

// In JavaScript, closure provides access to the outer scope of a function from inside the inner function, even after the outer function has closed.

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
// const people = [
//   { name: "john", job: "developer" },
//   { name: "susan", job: "designer" },
//   { name: "anna", job: "the boss" },
// ];

// const container = document.querySelector(".container");
// const btn = document.querySelector(".btn");

// const showPeople = () => {
//   const showPeople = people.map((person) => {
//     console.log(person);
//   });
// };

// btn.addEventListener("click", () => {
//   showPeople();
// });

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
// Javascript is single threaded, synchronous language.
// Synchronous JavaScript is the programming approach where tasks of a program are executed sequentially one at a time.

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
// Make Soup
// boil water 10 min
// chop carrots
// add carrots boil for 5 min
// chop onion
// add onion boil for 5 min
// BROWSER!!!!! Fetch Data, Get Geolocation, setTimeout, setTimer etc

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
// Asynchronous JavaScript is the programming method where operations are run independently allowing the program to continue running while waiting for certain tasks to complete.

// Make Soup
// boil water 10 min
// chop carrots
// add carrots boil for 5 min
// chop onion
// add onion boil for 5 min
// BROWSER!!!!! Fetch Data, Get Geolocation, setTimeout, setTimer etc
// callbacks, promises, async/await

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
// Callback Hell: Callback Hell is essentially nested callbacks stacked below one another forming a pyramid structure. Every callback depends/waits for the previous callback, thereby making a pyramid structure that affects the readability and maintainability of the code.

boilWater();
console.log(`chop carrot`);

function boilWater() {
  console.log("boiling...");
  setTimeout(() => {
    console.log("done.");
    console.log("add carrots.");
    setTimeout(() => {
      console.log("carrots done");
      setTimeout(() => {
        console.log("onion done");
      }, 5000);
    }, 5000);
    console.log(`chop onion`);
  }, 10000);
}

// ======================================
// 006 - Callback Hell - DOM Example
// ======================================
// ======================================
// 007 - Promises
// ======================================
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

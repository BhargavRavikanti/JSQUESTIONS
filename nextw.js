////////////////////////////////////
// Fetch & Callbacks
////////////////////////////////////

// Callbacks & Schedulers
////////////////////////////////////
// callbacks - function as an argument
// schedulers - setInterval()
// clearInterval()
// setTimeOut()
// clearTimeOut()

// CALLBACKS
// A CallBack is a function that is passed as an argument to another function.

// function displayGreeting(displayName) {
//   console.log("Hello");
//   displayName();
//   console.log("Good Rvening");
// }

// method 1 writing anoynomous function in a higher order function as an argument
// displayGreeting(function () {
//   console.log("Ram");
// });

// method 2 writing function declaration first and  then passing as an argument to higher order function
// function displayRahul() {
//   console.log("Rahul");
// }
// displayGreeting(displayRahul);

// method 3 writing function expression and then passing as an argument to higher order function
// let displayRam = function () {
//   console.log("ram");
// };
// displayGreeting(displayRam);

// SCHEDULERS
// schedulers are used to schedule the execution of a callback function.

// There are different schedulers methods:
// 1) setInterval()
// 2) clearInterval()
// 3) setTimeout()
// 4) clearTimeout() many more....

// 1) setInterval()
// setInterval() allows us to run a function repeatedly, at the specified interval of time.

// syntax
// setInterval(function,delay)
// function - A callback function that is called repeatedly at the specified intervsl of time.
// delay - Time in milli seconds
// 1 second = 1000 milliseconds

// Example
// let counter = 0;
// setInterval(function(){
//  console.log(counter);
//  counter=counter+1;
// },2000);

// 2) clearInterval()
// clearInterval() cancels a schedule previously set up by calling setInterval().

// To execute clearInterval(), we need to pass the unique Id returned by setInterval().

// syntax
// let uniqueId = setInterval(function,delay);
// uniqued - a variable that saves the id returned by setInterval()

// syntax
// clearInterval()

// clearInterval(uniqueId)
// uniqueId - returned by setInterval method.

// let setIntervalBtn = document.getElementById("setIntervalBtn");
// let clearIntervalBtn = document.getElementById("clearIntervalBtn");

// let uniqueId = null;
// setIntervalBtn.onclick = function () {
//   let counter = 0;
//   uniqueId = setInterval(function () {
//     console.log(counter);
//     counter = counter + 1;
//   }, 2000);
//   console.log(uniqueId, "uniqueId");
// };

// clearIntervalBtn.onclick = function () {
//   clearInterval(uniqueId);
//   console.log("Interval cleared");
// };

// 3) setTimeOut()
// The setTimeout() method executes a fuction after the specified time

// syntax
// setTimeot(function,delay)
// function - A Callback function that is called after the specified time.
// delay - Time in milli seconds

// Example
// let counter = 0;
// setTimeout(function () {
//   console.log(counter);
//   counter = counter + 1;
// }, 2000);

// Cancelling Schedulers
// 4) clearTimeout()

// we can cancel the setTimeout() before it executes the callback function using clearTimeout.

// To execute clearTimeout(), we need to pass the uniqueId returned by setTimeout().

// suntax
// setTimeout()

// let uniqueId = setTimeout(function,delay);
// uniqueId - a variable to save the id returned by setTimeout()
// function - a callback function to be called after the specified time.
// delay - Time in milli seconds

// syntax
// clearTimeout()

// clearTimeout(uniqueId)
// uniqueId - returned by setTimeout() method

// let setTimeOutBtn = document.getElementById("setTimeoutBtn");
// let clearTimeoutBtn = document.getElementById("clearTimeoutBtn");

// let uniqueId = null;
// setTimeOutBtn.onclick = function () {
//   let counter = 0;
//   uniqueId = setTimeOut(function () {
//     console.log(counter);
//     counter = counter + 1;
//   }, 2000);
//   console.log(uniqueId, "uniqueId");
// };

// clearTimeoutBtn.onclick = function () {
//   clearTimeout(uniqueId);
//   console.log("interval clared");
// };

// EVENT LISTERNERS AND MORE EVENTS
////////////////////////////////////

// EVENT LISTENERS - addEventListener()
// EVENTS - keydown, keyup
// EVENT OBJECT - event.key, event.target, event.type

////////////////////////////////////
// MORE MODERN JS CONCEPTS
////////////////////////////////////

// ======================================
// 001 - More Modern JS Concepts Part-1
// ======================================
// spread operator - Arrays,objects & function calls
// rest parameters - destructuring arrays & objects
// functions - default parameters
// template literals

// ======================================
// 002 - More Modern JS Concepts Part-2
// ======================================
// operators - ternary operator
// conditional statements - switch statement
// functions - arrow functions

// ======================================
// 003 - Factory and Constrctor Functions
// ======================================
// creating multiple objects - factory function,constructor function
// constructor function - new operator
// object properties - constructor
// built in constructor functions - Date

// Methods to creating objects
// creating multiple objects
// we have multiple methods to create objects
// (1) Using Object Literals
// (2) Using Factory function
// (3) Using Constructor function
// (4) Using JS Classes

// (1) Using Object Literals

// const car1 = {
//   Color: "blue",
//   Brand: "Audi",
//   Start: function () {
//     console.log("started");
//   },
// };
// const car2 = {
//   Color: "red",
//   Brand: "Tata",
//   Start: function () {
//     console.log("started");
//   },
// };
// const car3 = {
//   Color: "green",
//   Brand: "BMW",
//   Start: function () {
//     console.log("started");
//   },
// };

// console.log(car1);
// console.log(car2);
// console.log(car3);

// (2) Using Factory function
// A Factory function is any function that returns a new object for every function call
// Function name should follow camelCase naming convention

// function createCar(color, brand) {
//   return {
//     color: color,
//     brand: brand,
//     Start: function () {
//       console.log("started");
//     },
//   };
// }

// let car1 = createCar("blue", "Audi");
// let car2 = createCar("red", "Tata");
// let car3 = createCar("green", "BMW");
// console.log(car1);
// console.log(car2);
// console.log(car3);

// simplified version of above example
// object property value
// shorthand notations

// function createCar(color, brand) {
//   return {
//     color,
//     brand,
//     Start() {
//       console.log("started");
//     },
//   };
// }

// let car1 = createCar("blue", "Audi");
// let car2 = createCar("red", "Tata");
// let car3 = createCar("green", "BMW");
// console.log(car1);
// console.log(car2);
// console.log(car3);

// (3) Using Constructor function
// A regular function that returns a new object on calling with the new operator.
// The created new object is called an instance.
// Note: Function name should follow PascalCase naming convention (means first letter also should be capital letter).

// The new Operator
// when a function is called with new,it does the following steps
// (1) creates an empty object and assigns to this
// this = { }; (implicitly)
// (2) Return this
// Return this (implicitly)

function CreateCar(color, brand) {
  this.color = color;
  this.brand = brand;
  this.start = function () {
    console.log("started");
  };
}

let car1 = new CreateCar("blue", "Audi");
let car2 = new CreateCar("red", "Tata");
let car3 = new CreateCar("green", "BMW");
console.log(car1);
console.log(car2);
console.log(car3);

// Differnces between Factory functions and Constructor functions
// Factory functions
// (1) Follows camelCase notation
// (2) No need of new Operator for function calling
// (3) Explicitly need to return the Object

// Constructor functions
// Allows PascalCase notation
// Need new Operator for function calling
// create object returns implicitly

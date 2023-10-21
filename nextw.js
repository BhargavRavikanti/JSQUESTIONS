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

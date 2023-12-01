// What is Synchronous JavaScript programming and Asynchronous Javascript programming
// what are the techniques for achieveing asynchronous operations in JS?
// what is callback hell
// what are promises
// what is async/await
// what http requests

// What is Synchronous JavaScript programming and Asynchronous Javascript
// Synchronous JavaScript : In Synchronous Programming code is executed line by line which means each line of code waits for the previous line of code to finish.

// EXAMPLE 1
// console.log("task 1 completed");
// console.log("task 2 completed");
// alert("stops task 3");
// console.log("task 3 completed");

// Aynchronous JavaScript : In Asynchronous Programming code is non blocking which means code execution does not wait for the previous line of code to finish and also can do multiple tasks at the same time.
// Asynchronous programming can be achieved by using setTimeout,setInterval,Callbacks,Promises,Async/await,Generators with yield,Event-driven programming

// Asynchronous JavaScript is the programming method where operations are run independently allowing the program to continue running while waiting for certain tasks to complete.

// EXAMPLE 1
// console.log("task 1 completed");
// console.log("task 2 completed");
// setTimeout(() => console.log("cannot stop task 3"), 2000);
// console.log("task 3 completed");

// EXAMPLE 2
// Asynchronous programming can do multiple tasks at the same time
// setTimeout(() => console.log("task 1"), 2000);
// setTimeout(() => console.log("task 2"), 2000);
// setTimeout(() => console.log("task 3"), 2000);
// setTimeout(() => console.log("task 4"), 2000);

// what are the techniques for achieveing asynchronous operations in JS?
// 1) setTimeout
// 2) setInterval
// 3) Callbacks
// 4) Promises
// 5) Asunc/await
// 6) Generators with yield
// 7) Event-driven programming

// Diffrences between synchronous and asynchronous
// Use of Asynchronous operations
// 1) Fetching Data from API
// 2) Downloading Files
// 3) Uploading Files
// 4) Animations and Transitions
// 5) Time taking operations... many more..

/*
// Example 1
// Synchronous Programming
// Not efficient
// console.log("start");
// function1();
// function2();
// console.log("end");

// // Time taking function
// function Function1() {
//   // Loading Data from API
//   // Uploading Files
//   // Animations
// }
// function Function2() {
//   console.log(100 + 50);
// }
*/

// ==================================
// callback hell
// ==================================
// what are callback functions?
// functions that are passed as arguments to other functions.

// callback hell : (Callback hell is a phenomenon where a Callback is called inside another Callback. It is the nesting of multiple Callbacks inside a function.so it becomes difficult to read,understand and maintain the code.)If you look at the design of the code, it seems just like a pyramid. Thus the Callback hell is also referred to as the 'Pyramid of Doom'.

// *****************************
/*
// EXAMPLE 1
// TOTAL 4 SECONDS FOR WHOLE PROCESS 1+2+1
// METHOD 1 (callback hell)
setTimeout(() => {
  console.log("1 second");
  setTimeout(() => {
    console.log("2 second");
    setTimeout(() => {
      console.log("1 second");
    }, 1000);
  }, 2000);
}, 1000);

// METHOD 2
// This is not a call backback hell.I just tried to achieve the above result
setTimeout(() => {
  console.log("1 second");
}, 1000);
setTimeout(() => {
  console.log("2 second");
}, 3000);
setTimeout(() => {
  console.log("1 second");
}, 4000);

// METHOD 3 USING PROMISES
function addSecond(time, step) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`${step}`);
      resolve();
    }, time);
  });
}

addSecond(1000, "1 second")
  .then(() => addSecond(2000, "2 second"))
  .then(() => addSecond(1000, "1 second"));
*/

// *****************************
/*
// EXAMPLE 2
// SMILGA callback hell DOM EXAMPLE

const heading1 = document.querySelector(".one");
const heading2 = document.querySelector(".two");
const heading3 = document.querySelector(".three");

const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  // what we need is clicking button
  // after one second h1 should red
  // then after two seconds h2 should green and
  // then after one second h3 should blue
  // TOTAL 4 SECONDS FOR WHOLE PROCESS 1+2+1
  // EXAMPLE 1
  // METHOD 1
  // setTimeout(() => {
  //   heading1.style.color = "red";
  //   setTimeout(() => {
  //     heading2.style.color = "green";
  //     setTimeout(() => {
  //       heading3.style.color = "blue";
  //     }, 1000);
  //   }, 2000);
  // }, 1000);
});
*/

// ==================================
// Promises
// ==================================
// PROMISES - Pending, Resolved, Rejected
// then, catch - pass another callback

/*
// In JavaScript, a promise is a good way to handle asynchronous operations.
// It is used to find out if the asynchronous operation is successfully completed or not

// Successful call completions are indicated by the resolve function call, and errors are indicated by the reject function call.

// SYNTAX
// You can create a promise using the promise constructor like this:

// let promise = new Promise(function(resolve, reject) {    
//     // Make an asynchronous call and either resolve or reject
// });
// In most cases, a promise may be used for an asynchronous operation. However, technically, you can resolve/reject on both synchronous and asynchronous operations.
*/

/*
// // EXAMPLE 1
// const promise = new Promise((resolve, reject) => {
//   let value = true;
//   // let value = false;
//   if (value) {
//     resolve([1, 2, 4]);
//   } else {
//     reject(`there was a error, value is false`);
//   }
// });

// promise
//   .then((taco) => {
//     console.log(taco);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
*/

/*
// EXAMPLE 2
// SMILGA Promises DOM EXAMPLE

const heading1 = document.querySelector(".one");
const heading2 = document.querySelector(".two");
const heading3 = document.querySelector(".three");

const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  // what we need is clicking button
  // after one second h1 should red
  // then after two seconds h2 should green and
  // then after one second h3 should blue
  // TOTAL 4 SECONDS FOR WHOLE PROCESS 1+2+1
  addColor(1000, heading1, "red")
    .then(() => addColor(2000, heading2, "green"))
    .then(() => addColor(1000, heading3, "blue"))
    .catch((err) => console.log(err));
});

// even if addColor is inside eventlistener it will work same as now
function addColor(time, element, color) {
  return new Promise((resolve, reject) => {
    if (element) {
      setTimeout(() => {
        element.style.color = color;
        resolve();
      }, time);
    } else {
      reject(new Error(`There is no such element ${element}`));
    }
  });
}
*/

/*
// EXAMPLE 3 I created
// TOTAL 4 SECONDS FOR WHOLE PROCESS 1+2+1
function addSecond(time, step) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`${step}`);
      resolve();
    }, time);
  });
}

addSecond(1000, "1 second")
  .then(() => addSecond(2000, "2 second"))
  .then(() => addSecond(1000, "1 second"));
  */

/*
// EXAMPLE 4
// SMILGA Promises DOM EXAMPLE REJECT

const heading1 = document.querySelector(".one");
const heading2 = document.querySelector(".two");
const heading3 = document.querySelector(".three");
const btn = document.querySelector(".btn");
const container = document.querySelector(".img-container");
const url = "https://source.unsplash.com/random";

btn.addEventListener("click", () => {
  loadImage(url)
    .then((taco) => container.appendChild(taco))
    .catch((error) => console.log(error));
});

function loadImage(url) {
  return (promise = new Promise((resolve, reject) => {
    let img = new Image();
    img.addEventListener("load", () => {
      resolve(img);
    });
    img.addEventListener("error", () => {
      reject(new Error(`Failed to load image from the source: ${url}`));
    });
    img.src = url;
  }));
}
*/

// ==================================
// async/await
// ==================================
// 2 pieces async/await
// callbacks, promises, async/await
// must have async
// await waits till promise is settled
// error handling - try/catch

// The async keyword
// async functions always return a promise.
// If the function returns a value, the promise will be resolved with that value
// If the function throws an exception, the promise will be rejected.

/*
// EXAMPLE 1
async function greet() {
 return "HELLO!";
}
// console.log(greet());

// we can use promise then & catch like how we use with promises
greet().then((val) => {
 console.log("PROMISE RESOLVED WITH :", val);
});
greet();
*/

/*
// EXAMPLE 2
// async function add(x, y) {
//   if (typeof x !== "number" || typeof y !== "number") {
//     throw "X and Y must be numbers";
//   }
//   return x + y;
// }

// console.log(add(4, 5)); // returns promise means we can you promise then and catch
// add("e", "r")
//   .then((val) => {
//     console.log("PROMISE RESOLVED WITH ", val);
//   })
//   .catch((err) => {
//     console.log("PROMISE RESOLVED WITH ", err);
//   });

// add(5, 10)
//   .then((val) => {
//     console.log("PROMISE RESOLVED WITH ", val);
//   })
//   .catch((err) => {
//     console.log("PROMISE RESOLVED WITH ", err);
//   });

// add("friend", "ajay")
//   .then((val) => {
//     console.log("PROMISE RESOLVED WITH ", val);
//   })
//   .catch((err) => {
//     console.log("PROMISE RESOLVED WITH ", err);
//   });

// add(6, 7)
//   .then((val) => {
//     console.log("PROMISE RESOLVED WITH ", val);
//   })
//   .catch((err) => {
//     console.log("PROMISE RESOLVED WITH ", err);
//   });
*/

/*
// EXAMPLE 3
// writing example 2 in promise way

// function add(x, y) {
//   return new Promise((resolve, reject) => {
//     if (typeof x !== "number" || typeof y !== "number") {
//       reject("X and Y must be numbers");
//     }
//     resolve(x + y);
//   });
// }

// add("e", "r")
//   .then((val) => {
//     console.log("PROMISE RESOLVED WITH ", val);
//   })
//   .catch((err) => {
//     console.log("PROMISE REJECTED WITH: ", err);
//   });

// add(5, 10)
//   .then((val) => {
//     console.log("PROMISE RESOLVED WITH ", val);
//   })
//   .catch((err) => {
//     console.log("PROMISE RESOLVED WITH ", err);
//   });

// add("friend", "ajay")
//   .then((val) => {
//     console.log("PROMISE RESOLVED WITH ", val);
//   })
//   .catch((err) => {
//     console.log("PROMISE RESOLVED WITH ", err);
//   });

// add(6, 7)
//   .then((val) => {
//     console.log("PROMISE RESOLVED WITH ", val);
//   })
//   .catch((err) => {
//     console.log("PROMISE RESOLVED WITH ", err);
//   });
// so we conclude that promises are a bit hard compared to async function
// we only used async keyword only
// after using using await key keyword we will see more magical
*/

// The await Keyword
// we can only use the await keyword inside of functions declared with async.
// await will pause the execution of the function,waiting for a promise to be resolved.

///////////////////////////////
///////////////////////////////
// smilga //
///////////////////////////////
///////////////////////////////

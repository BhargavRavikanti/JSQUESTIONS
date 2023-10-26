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
// Objects Basics

/*
Objects are collections of key (property) value pairs
Property values can be strings, numbers, booleans, arrays and functions however if the property value is a function it's called a method
*/

// object literal syntax,{}
// dot notation

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

// console.log(person);
// console.log(person.name);

// const name = person.name;
// console.log(name);
// person.age = 60;
// person.city = "chicago";

// console.log(person);
// // delete property
// // delete person.siblings;
// // or another method to understand properly
// const siblings = delete person.siblings;
// // console.log(siblings);
// // console.log(person.siblings);

// console.log(person);

// ======================================
// 003 - Nested Object,Bracket Notation
// ======================================
// nested objects
// set variable as property value
// dot notation vs bracket notation

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

// console.log(person.job.company.name);
// console.log(person.job.title);
// console.log(person.job.company.address);
// console.log(person["random-value"]);
// console.log(person[random]);

// console.log(person["random value1"]);

// ======================================
// 004 - 'this' - Keyword Basics
// ======================================

// ======================================
// 005 - this - Keyword Advanced
// ======================================

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

// boilWater();
// console.log(`chop carrot`);

// function boilWater() {
//   console.log("boiling...");
//   setTimeout(() => {
//     console.log("done.");
//     console.log("add carrots.");
//     setTimeout(() => {
//       console.log("carrots done");
//       setTimeout(() => {
//         console.log("onion done");
//       }, 5000);
//     }, 5000);
//     console.log(`chop onion`);
//   }, 10000);
// }

// ======================================
// 006 - Callback Hell - DOM Example
// ======================================
// callbacks, promises, async/await

/*
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
  // METHOD 2
  // setTimeout(() => {
  //   heading1.style.color = "red";
  // }, 1000);
  // setTimeout(() => {
  //   heading2.style.color = "green";
  // }, 3000);
  // setTimeout(() => {
  //   heading3.style.color = "blue";
  // }, 4000);
  // METHOD 3 USING PROMISES
  // addColor(1000, heading1, "red")
  //   .then(() => addColor(2000, heading2, "green"))
  //   .then(() => addColor(1000, heading3, "blue"))
  //   .catch((err) => console.log(err));

  // EXAMPLE 2
  // // METHOD 1
  // setTimeout(() => {
  //   console.log("1 second");
  //   setTimeout(() => {
  //     console.log("2 second");
  //     setTimeout(() => {
  //       console.log("1 second");
  //     }, 1000);
  //   }, 2000);
  // }, 1000);
  // // METHOD 2
  // setTimeout(() => {
  //   console.log("1 second");
  // }, 1000);
  // setTimeout(() => {
  //   console.log("2 second");
  // }, 3000);
  // setTimeout(() => {
  //   console.log("1 second");
  // }, 4000);
  // // METHOD 3 USING PROMISES
  // addSecond(1000, "1 second")
  //   .then(() => addSecond(2000, "2 second"))
  //   .then(() => addSecond(1000, "1 second"));
});

*/

// function addColor(time, element, color) {
//   return new Promise((resolve, reject) => {
//     if (element) {
//       setTimeout(() => {
//         element.style.color = color;
//         resolve();
//       }, time);
//     } else {
//       reject(new Error(`There is no such element ${element}`));
//     }
//   });
// }

// function addSecond(time, step) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(`${step}`);
//       resolve();
//     }, time);
//   });
// }

// ======================================
// 007 - Promises
// ======================================
// callbacks, promises, async/await
// PROMISES - Pending, Resolved, Rejected
// then catch - pass another callback

// In JavaScript, a promise is a good way to handle asynchronous operations. It is used to find out if the asynchronous operation is successfully completed or not.

/*
What is a Promise in JavaScript?
A Promise is a special JavaScript object. It produces a value after an asynchronous (aka, async) operation completes successfully, or an error if it does not complete successfully due to time out, network error, and so on.

Successful call completions are indicated by the resolve function call, and errors are indicated by the reject function call.

You can create a promise using the promise constructor like this:

let promise = new Promise(function(resolve, reject) {    
    // Make an asynchronous call and either resolve or reject
});
In most cases, a promise may be used for an asynchronous operation. However, technically, you can resolve/reject on both synchronous and asynchronous operations.
*/

// const heading1 = document.querySelector(".one");
// const heading2 = document.querySelector(".two");
// const heading3 = document.querySelector(".three");

// const btn = document.querySelector(".btn");

// btn.addEventListener("click", () => {});

// const promise = new Promise((resolve, reject) => {
//   // let value = true;
//   let value = false;
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

// ======================================
// 009 - Reject Example
// ======================================
// callbacks, promises, async/await

// const heading1 = document.querySelector(".one");
// const heading2 = document.querySelector(".two");
// const heading3 = document.querySelector(".three");
// const btn = document.querySelector(".btn");
// const container = document.querySelector(".img-container");
// const url = "https://source.unsplash.com/random";

// btn.addEventListener("click", () => {
//   loadImage(url)
//     .then((taco) => container.appendChild(taco))
//     .catch((error) => console.log(error));
// });

// function loadImage(url) {
//   return (promise = new Promise((resolve, reject) => {
//     let img = new Image();
//     img.addEventListener("load", () => {
//       resolve(img);
//     });
//     img.addEventListener("error", () => {
//       reject(new Error(`Failed to load image from the source: ${url}`));
//     });
//     img.src = url;
//   }));
// }

// ======================================
// 010 - Promises - DOM Example
// ======================================
// callbacks, promises, async/await
// what if no resolve, one is rejected
// const heading1 = document.querySelector(".one");
// const heading2 = document.querySelector(".two");
// const heading3 = document.querySelector(".three");
// const btn = document.querySelector(".btn");
// btn.addEventListener("click", () => {
//   addColor(1000, heading1, "red")
//     .then(() => addColor(2000, heading2, "green"))
//     .then(() => addColor(1000, heading3, "blue"))
//     .catch((err) => console.log(err));
// });

// function addColor(time, element, color) {
//   return new Promise((resolve, reject) => {
//     if (element) {
//       setTimeout(() => {
//         element.style.color = color;
//         resolve();
//       }, time);
//     } else {
//       reject(new Error(`There is no such element ${element}`));
//     }
//   });
// }

// ======================================
// 011 - Async Await
// ======================================
// callbacks, promises, async/await
// must have async
// await waits till promise is settled
// error handling - try/catch

// async function someFunction (){
//   await
// }
// const otherFunction = async() =>{
//   await
// }

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

// w3 schools
/*
// AJAX - Asynchronous Javascript and XML

// What is AJAX?
// AJAX = Asynchronous JavaScript And XML.

// AJAX is not a programming language.

// AJAX just uses a combination of:

// A browser built-in XMLHttpRequest object (to request data from a web server)
// JavaScript and HTML DOM (to display or use the data)
// AJAX is a misleading name. AJAX applications might use XML to transport data, but it is equally common to transport data as plain text or JSON text.

// AJAX allows web pages to be updated asynchronously by exchanging data with a web server behind the scenes. This means that it is possible to update parts of a web page, without reloading the whole page.

*/

// kinsta.com
/*

// HTTP Requests - Communication between Client and Server

Each section will introduce a new method for sending HTTP requests. We’ll start from the built-in methods like the fetch API and the XMLHttpRequest object before looking at some open-source HTTP request libraries like Axios and SuperAgent.

Let’s get started!

What Is a JavaScript HTTP Request?
HTTP requests in JavaScript are a set of predefined methods used for interacting with data stored on servers.

Every request sent to a server includes an endpoint and the type of request being sent. You can see an endpoint as a gateway between two programsː the client and the server.

The client is the program that sends a request while the server is the one that receives the request. The server sends back a response depending on the validity of the request. If the request is successful, the server sends back data in either XML or JSON format (JSON in most cases), and if the request fails, the server sends back an error message.

Responses sent back by the server are usually associated with status codes. These codes help us understand what the server is trying to say when it receives a request. Here are some of them and what they mean:

100–199 denotes an informational response.
200–299 denotes a successful request.
300–399 denotes redirection.
400–499 denotes client error.
500–599 denotes server error.
We’ll talk more about some of these in the sections that follow.

In the next section, you’ll see the different ways that you can make HTTP requests in JavaScript.

How To Make an HTTP Request in JavaScript
This section will be divided into sub-sections, each section teaching you different methods you can use to make HTTP requests in JavaScript.

Each method discussed will have an example showing how to send POST, GET, PUT/PATCH, and DELETE requests to servers.

JSON Placeholder will serve as the remote server/endpoint where all our requests will be sent.

Let’s dive in!

1. How To Make an HTTP Request in JavaScript Using XMLHttpRequest (AJAX)
2. How To Make an HTTP Request in JavaScript Using jQuery
3. How To Make Asynchronous Requests in jQuery Using the $.ajax() Method
4. How To Make an HTTP Request in JavaScript Using the Fetch API
5. How To Make an HTTP Request in JavaScript Using Axios
6. How To Make an HTTP Request in JavaScript Using SuperAgent
7. How To Make an HTTP Request in JavaScript Using Qwest

Summary
Our ability to interact with servers using JavaScript has evolved over the years. With a growing and active community of JavaScript developers, constant changes are still being made and new tools introduced to make the process simpler and easier.

The methods discussed in this tutorial don’t only apply to remote servers — they can also be used to interact with your own servers when building full stack web applications. They work with numerous JavaScript libraries and frameworks, too.

Everything you ever wanted to know about JavaScript HTTP requests- including how to perform CRUD operations in JavaScript.

*/

// w3 schools
// mdn

/*

// W3 SCHOOLS
// API - Application Programming Interface

A Web API is a developer's dream.

It can extend the functionality of the browser
It can greatly simplify complex functions
It can provide easy syntax to complex code

What is Web API?
API stands for Application Programming Interface.

A Web API is an application programming interface for the Web.

A Browser API can extend the functionality of a web browser.

A Server API can extend the functionality of a web server.

1) Browser APIs
All browsers have a set of built-in Web APIs to support complex operations, and to help accessing data.

For example, the Geolocation API can return the coordinates of where the browser is located.

2) Third Party APIs
Third party APIs are not built into your browser.

To use these APIs, you will have to download the code from the Web.

Examples:

YouTube API - Allows you to display videos on a web site.
Twitter API - Allows you to display Tweets on a web site.
Facebook API - Allows you to display Facebook info on a web site.

******************************************

// MDN
// API - Application Programming Interface

What are APIs?
Application Programming Interfaces (APIs) are constructs made available in programming languages to allow developers to create complex functionality more easily. They abstract more complex code away from you, providing some easier syntax to use in its place.

APIs in client-side JavaScript
Client-side JavaScript, in particular, has many APIs available to it — these are not part of the JavaScript language itself, rather they are built on top of the core JavaScript language, providing you with extra superpowers to use in your JavaScript code. They generally fall into two categories:

1) Browser APIs are built into your web browser and are able to expose data from the browser and surrounding computer environment and do useful complex things with it. For example, the Web Audio API provides JavaScript constructs for manipulating audio in the browser — taking an audio track, altering its volume, applying effects to it, etc. In the background, the browser is actually using some complex lower-level code (e.g. C++ or Rust) to do the actual audio processing. But again, this complexity is abstracted away from you by the API.

2) Third-party APIs are not built into the browser by default, and you generally have to retrieve their code and information from somewhere on the Web. For example, the Twitter API allows you to do things like displaying your latest tweets on your website. It provides a special set of constructs you can use to query the Twitter service and return specific information.

*/

// ======================================
// 003 - Simple Text
// ======================================
// const xhr = new XMLHttpRequest();

// xhr.open("GET", "./SMILGA/api/sample.txt");
// xhr.onreadystatechange = function () {
//   // console.log(xhr);
//   if (xhr.readyState === 4 && xhr.status === 200) {
//     const text = document.createElement("p");
//     text.textContent = xhr.responseText;
//     document.body.appendChild(text);
//   } else {
//     console.log({
//       status: xhr.status,
//       text: xhr.statusText,
//       state: xhr.readyState,
//     });
//   }
// };
// xhr.send();

// console.log("Hello World");

// ======================================
// 004 - Add Button
// ======================================

// const btn = document.querySelector(".btn");
// btn.addEventListener("click", () => {
//   getData();
// });
// function getData() {
//   const xhr = new XMLHttpRequest();
//   // console.log(xhr);

//   xhr.open("GET", "./SMILGA/api/sample.txt");
//   xhr.onreadystatechange = function () {
//     // console.log(xhr);
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       const text = document.createElement("p");
//       text.textContent = xhr.responseText;
//       document.body.appendChild(text);
//     } else {
//       console.log({
//         status: xhr.status,
//         text: xhr.statusText,
//         state: xhr.readyState,
//       });
//     }
//   };
//   // xhr.send();
// }

// ======================================
// 005 - JSON
// ======================================
// JSON - Javascript Object Notation

// const btn = document.querySelector(".btn");
// const url = "./SMILGA/api/people.json";
// btn.addEventListener("click", () => {
//   getData(url);
// });
// function getData(url) {
//   const xhr = new XMLHttpRequest();
//   console.log(xhr);

//   xhr.open("GET", url);
//   xhr.onreadystatechange = function () {
//     // console.log(xhr);
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       // parse
//       //stringyfy
//       const data = JSON.parse(xhr.responseText);
//       // console.log(typeof data);
//       // console.log(data);
//       const displayData = data
//         .map((item) => {
//           return `<p>${item.name}</p>`;
//         })
//         .join("");
//       const element = document.createElement("div");
//       element.innerHTML = displayData;
//       document.body.appendChild(element);
//     } else {
//       console.log({
//         status: xhr.status,
//         text: xhr.statusText,
//         state: xhr.readyState,
//       });
//     }
//   };
//   xhr.send();
// }

// ======================================
// 006 - Fetch
// ======================================
// Fetch built-in
// promised based
// XHR is not wrong, you can complete all our upcoming examples and projects using XHR. Fetch is just alternative approach that has simpler and cleaner syntax. The end result is the same.Still get dynamically, behind the scenes.

// const url = "./SMILGA/api/people.json";

// const response = fetch(url);
// console.log(response);

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

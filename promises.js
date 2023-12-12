// ASYNCHRONOUS PROGRAMMING - BASICS
// 1) what is asynchronous programming in JS? what is its use?
// 2) what is the differnce between synchronous and asynchronous programming?
// 3) what are the techniques for achieveing asynchronous operations in JS?
// 4) what is setTimeOut()?How is it used to handle asynchronous operations?
// 5) what is setInterval()?How is it used to handle asynchronous operations?
// 6) what is the role of callbacks in fetching API data asynchronously?
// 7) what is callback hell? How can it be avoided?

// PROMISES
// 1) what are Promises?
// 2) How to impliment Promises?
// 3) When to use Promises in real applications?
// 4) What is the use of Promise.all() method?
// 5) What is the use of Promise.race() method?
// 6) What is the difference between Promise.all() and Promise.race()?

// 1) what are Promises?

// ASYNC/AWAIT
// 1) What is the purpose of async/await?Compare it with Promises?
// 2) Explain the use of async and await keywords in JS?
// 3) Can we use async keyword without await keyword and vice versa?
// 4) How do you handle erros in asyn/await?

// 1) What is the purpose of async/await?Compare it with Promises?
// function fetchData() {
//   return new Promise((resolve, reject) => {
//     // asynchronous operation
//     setTimeout(() => {
//       resolve("Data has been fetched");
//     }, 1000);
//   });
// }

// // Promises
// fetchData()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// // async-await
// async function doSomethingAsync() {
//   try {
//     const result = await fetchData();
//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   }
// }
// doSomethingAsync();

// Similarities and Differnces between Promises and asunc-await:
// (1) Promises and async-await can achieve the same goal of handling asynchronous operations.
// (2) async-await provides a more concise and redeable syntax that resembles synchronous code whereas Promises use a chaining syntax with then() and catch() which is not that redeable.
// (3) async-await still relies on Promises for handling the asynchronous nature of the code.

// 2) Explain the use of async and await keywords in JS?
// function delay(ms) {
//   return new Promise((resolve, reject) =>
//     setTimeout(() => {
//       console.log("Running");
//       resolve();
//     }, ms)
//   );
// }

// async function greet() {
//   console.log("Starting...");

//   delay(2000); // Not block
//   console.log("Not Blocked");

//   await delay(1000); // Block the code until completion
//   console.log("Not Blocked");
// }
// greet();

// The async keyword is used to define a function as an asynchronous function,which means the the code inside async function will not block the execution of other code.
// The await keyword is used within an async function to pause the execution of the function until a Promise is resolved or rejected.

// 3) Can we use async keyword without await keyword and vice versa?
// Yes, we can use async keyword without await keyword.

// async without await
// async function doSomething() {
//   console.log("Inside the async");
//   return "Done";
// }

// const result = doSomething();
// console.log(result);

// Note : await keyword cannot be used without async.

// 4) How do you handle erros in asyn/await?
// In async/await fuctions, we can handle errors using try/catch blocks.

// processData();

// async function processData() {
//   try {
//     const result = await fetchData();
//     console.log("Data:", result);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

// async function fetchData() {
//   try {
//     const response = await fetch("https://abc.com");

//     if (!response.ok) {
//       throw new Error("Request failed");
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error:", error);
//     throw error;
//   }
// }

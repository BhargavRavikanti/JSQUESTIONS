// "use strict";
// THIS

// 1) Alone,this refers to the global object.
// console.log(this);

// 2) In a function,this refers to the global object.
// function greet() {
//   console.log(this);
// }
// greet();

// 3) In a function,in strict mode,this is undefined.
// function greet() {
//   console.log(this);
// }
// greet();

// 6) Inside method,this refers to the owner object.
// const jonas = {
//   name: "Jonas",
//   year: 1989,
//   calcAge: function () {
//     // return this;
//     // return this.name;
//     return this.year;
//   },
// };
// console.log(jonas.calcAge());

// function greet() {
//   console.log("hello");
// }
// greet();

// greeting = () => {
//   console.log(this);
// };
// greeting();

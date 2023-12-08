// NXT WAVE
// ********
// 1) this
// (1) constructor Functions
// (2) Arrow Functions
// (3) Callbacks
// (4) Regular Functions
// (5) Object Methods

// THIS IS A SPECIAL VARIABLE
// 1) this
// this is determined in three ways
// In Objects methods, this refers to the OBJECT that executing the current function.
// In Regular function, this refers to the GLOBAL object(window object).
// In Arrow functions, this refers to the Context in which the code is defined

// *************************************
/*
// (1) THIS IN CONSTRUCTOR FUNCTIONS
// when a function is called with new, it does the following steps:
// -> creates an empty object and assign to this // this = {}; (implicitly)
// -> return this // return this (implicitly)

// function Car(color, brand) {
 //   this.color = color;
//   this.brand = brand;
//   this.start = function () {
//     console.log(this);
//   };
// }
// let car1 = new Car("blue", "Audi");
// car1.start();
// // this = car1
// let car2 = new Car("red", "Tata");
// car2.start();
// // this = car2
// let car3 = new Car("red", "Tata");
// car3.start();
// // this = car3
// // In Constructor function,this refers to the instance object

// this in Constructor functions
//Arrow function as method

// function Car(color, brand) {
 //   this.color = color;
//   this.brand = brand;
//   this.start = () => {
 //     console.log(this);
//   };
// }
// let car1 = new Car("blue", "Audi");
// console.log(car1);
// car1.start();
// // this = car1
// let car2 = new Car("red", "Tata");
// car2.start();
// // this = car2
// let car3 = new Car("red", "Tata");
// car3.start();
// // this = car3
// Arrow function inherits this from the context in which the code is defined
*/

// *************************************
/*
// (2) THIS IN ARROW FUNCTIONS
// In Arrow functions,this depends on two aspects:
// -> when the code is defined
// -> context

// -> when the code is defined
// when is callback function defined?
// let car1 = {
//   color: "blue",
//   brand: "Audi",
//   start: function () {
//     setTimout(function () {
//       console.log(this);
//     }, 1000);
//   },
// };
// car1.start();

// -> context
// EXAMPLE 1
// console.log(this);
// this = window object (global object)
// context means
// console.log(this); is in window context

// -> context
// EXAMPLE 2
// let car2 = {
//   color: "blue",
//   brand: "Audi",
//   start: function () {
//     console.log(this);
//   },
// };
// car2.start();
// this = car2
// console.log(this); anedhi car2 ane object yokka context lo undhi

// this in Arrow functions
// object method
// let car3 = {
//   color: "blue",
//   brand: "Audi",
//   start: () => {
//     console.log(this);
//   },
// };
// car3.start();
// this = window
// Arrow function inherits this from the context in which the code is defined
*/

// *************************************
/*
// (3) THIS IN CALLBACKS
//Arrow functions with Callbacks
// let car4 = {
//   color: "blue",
//   brand: "Audi",
//   start: function () {
//     setTimeout(() => {
 //       console.log(this);
 //     }, 1000);
 //   },
 // };
// car4.start();
// this = car4

// this in callbacks
//Arrow functions with Callbacks
// let cars = ["Audi", "BMW", "Mercedes"];
// let car5 = {
//   color: "blue",
//   brand: "Audi",
//   start: function () {
//     let audiIndex = cars.findIndex((car) => console.log(this));
//   },
// };
// car5.start();
// this = car5
*/

// *************************************
/*
// (4) THIS IN REGULAR FUNCTIONS
function start() {
 console.log(this);
}
start();
// this = window object(global object)
// In Regular function,this refers to the window object.
*/

// *************************************
/*
// (5) THIS IN OBJECT METHODS
// let car = {
//   color: "blue",
//   brand: "Audi",
//   start: function () {
//     console.log(this);
//   },
// };
// console.log(car);
// car.start();
// this = car object
// In objects,this refers to the object that executing the current function
*/

// THIS
// It has different values depending on where it is used:
// (1) In a method,this refers to the owner object.
// (2) Alone, this refers to the global object.
// (3) In a function, this refers to the global object.
// (4) In a function,in strict mode, this is undefined.
// (5) In an event, this refers to the element that received the event.
// (6) Methods like call(), and apply() and bind() can refer this to any object

// (1) In a method,this refers to the owner object.
// let car = {
//   color: "blue",
//   brand: "Audi",
//   start: function () {
//     console.log(this);
//   },
// };
// console.log(car);
// car.start();
// this = car object
// In objects,this refers to the object that executing the current function

// (2) Alone, this refers to the global object.
// console.log(this); // this = global object or window.

// (3) In a function, this refers to the global object.
// function start() {
//   console.log(this);
// }
// start();
// this = window object(global object)
// In Regular function,this refers to the window object.

// (4) In a function,in strict mode, this is undefined.

// (5) In an event, this refers to the element that received the event.

// (6) Methods like call(), and apply() and bind() can refer this to any object

// With the call() method, you can write a method that can be used on different objects.

// CALL() ****************************

// call()
// object 1
// wrote a method on bharu object to use that method on different objects
// const bharu = {
//   name: "Bharu",
//   age: 29,
//   details: function () {
//     console.log(this);
//     console.log(`${this.name}, ${this.age}`);
//   },
// };
// bharu.details(); // this = bharu

// object 2
// const dhanush = {
//   name: "dhanush",
//   age: 18,
// };
// dhanush.details(); // wrong method
// using method from bharu object
// bharu.details.call(dhanush); // this = dhanush
// note : we are changing this value which means changing owner of the object using call() method.

// object 3
// const sadhana = {
//   name: "sadhana",
//   age: 21,
// };
// bharu.details.call(sadhana); // this = sadhana

// object 4
// const jayasri = {
//   name: "jayasri",
//   age: 20,
// };
// bharu.details.call(jayasri); // this = jayasri

// object 5
// const randomPerson = {
//   name: "randomPerson",
//   age: 35,
// };
// bharu.details.call(randomPerson); // this = randomPerson

// bharu.details.call(dhanush); // this = dhanush
// bharu.details.call({ name: "Peter", age: 35 }); // this = passed arguments object
// bharu.details.call({ name: "Shark", age: 50, power: "none" }); // this = passed arguments object

// we can do like this also we are creating function for getting name and age value
// function data() {
//   console.log(this);
//   console.log(`${this.name}, ${this.age}`);
// }

// data.call(dhanush); // this = dhanush
// data.call(bharu); // this = bharu

// data.call({ name: "Zofan", age: 20 }); // this = passed arguments object
// data.call({ name: "Superman", age: 50 }); // this = passed arguments object

// console.log("************************************");

// With the apply() method, you can write a method that can be used on different objects.

// APPLY() ****************************

// apply()

// object 1
// const john = {
//   name: "john",
//   age: 24,
// };

// object 2
// const susan = {
//   name: "susan",
//   age: 21,
// };

// function greet(city, country) {
//   console.log(this);
//   console.log(
//     `Hello, I'm ${this.name} and I'm ${this.age} years old and I live in ${city}, ${country}`
//   );
// }

// greet.apply(john); // works like call // this = john
// greet.apply(susan); // works like call // this = susan
// greet.apply({ name: "peter", age: 30 }); // works like call // this passed arguments object

// now it's going to make sense
// when using apply if you want to pass arguments make sure to pass arguments as array of elements like this ["Hyd","India"]

// greet.apply(john, ["Hyd", "India"]); // this = john
// greet.apply(susan, ["warangal", "India"]); // this = susan
// greet.apply({ name: "peter", age: 30 }, ["washington", "USA"]); // this = passed argument object

// console.log("************************************");

// BIND() ****************************

/*
The bind function creates a copy of a function with a new value to the this present inside the calling function.
*/

/*
but we can call it whenever we want, Example if you want to call/invoke after ten 10 seconds you can. if you want to call it after 1 hour you can.
*/

// bind()

// object 1
// const john = {
//   name: "john",
//   age: 24,
// };

// object 2
// const susan = {
//   name: "susan",
//   age: 21,
// };

// function greet(city, country) {
//   console.log(this);
//   console.log(
//     `Hello, I'm ${this.name} and I'm ${this.age} years old and I live in ${city}, ${country}`
//   );
// }

// assign, call it later
// const susanGreat = greet.bind(susan, "toronto", "ca"); // assigned // this = pointing to susan
// // whenever you want to invoke, invoke it
// susanGreat(); // invoked
// const johnGreat = greet.bind(john, "HYD", "India"); // asiigned // this = pointing to john
// // whenever you want to invoke, invoke it
// johnGreat(); // invoked

// // assigning, but we call it whenever we want
// const johnData = greet.bind(john, "HYD", "India");
// const susanData = greet.bind(susan, "Warangal", "India");

// // Now I want call or invoke it
// johnData();
// susanData();

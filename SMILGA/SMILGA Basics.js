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
// this
// points to the left of the dot

// const john = {
//   firstName: "john",
//   lastName: "anderson",
//   fullName: function () {
//     console.log(this);
//     console.log(`My full name is ${this.firstName} ${this.lastName}`);
//   },
// };
// const bob = {
//   firstName: "peter",
//   lastName: "sanders",
//   fullName: function () {
//     console.log(this);
//     console.log(`My full name is ${this.firstName} ${this.lastName}`);
//   },
// };

// john.fullName();
// bob.fullName();

// ======================================
// 005 - this - Keyword Advanced
// ======================================
/* In Reg Functions (not arrow) "this"
determined by "HOW"!!! a function is invoked (left of .)

defaults to global - window
arrow functions - pump the breaks
*/

// console.log(this);

// function showThis() {
//   console.log(this);
// }

// const john = {
//   name: "john",
//   showThis: showThis,
// };
// const bob = {
//   name: "bob",
//   showThis: showThis,
// };

// john.showThis(); // refer to john object
// bob.showThis(); // refer to bob object

// showThis(); // refer to window object

// const btn1 = document.querySelector(".btn-1");
// const btn2 = document.querySelector(".btn-2");

// btn1.addEventListener("click", showThis);
// btn2.addEventListener("click", showThis);
// btn2.addEventListener("click", function () {
//   showThis();
// });

// ======================================
// 006 - Factory Functions
// ======================================
// Blue Print
// Factory Functions and Constructor Functions
// Factory Functions

// A Factory function is any function that returns a new object for every function call

// Factory function is a function that can return a new object
// If we need to produce several objects that contain the same logic, we may write the logic in a function and utilise it as a factory. It's like an actual factory making items.

// Any function is a Factory function that can return a new object

// In JavaScript, any function can return a new object. When it’s not a constructor function or class, it’s called a factory function.

/*
// A factory function is a function that creates an object and returns it. 
// It is similar to constructor functions/class functions. 
// The factory function is a very useful tool in JavaScript since it returns the object of any class directly.
*/

// const john = {
//   firstName: "john",
//   lastName: "anderson",
//   fullName: function () {
//     console.log(
//       `My full name is ${this.firstName} ${this.lastName} and I love JS`
//     );
//   },
// };
// const bob = {
//   firstName: "peter",
//   lastName: "sanders",
//   fullName: function () {
//     console.log(`My full name is ${this.firstName} ${this.lastName}`);
//   },
// };

// Factory function
// function createPerson(firstName, lastName) {
//   return {
//     firstName: firstName,
//     lastName: lastName,
//     fullName: function () {
//       console.log(
//         `My full name is ${this.firstName} ${this.lastName} and I love JS`
//       );
//     },
//   };
// }

// console.log(createPerson);
// console.log(createPerson());
// const john = createPerson("john", "anderson");
// john.fullName();
// const bob = createPerson("bob", "apple");
// bob.fullName();
// const susy = createPerson("susy", "jordon");
// susy.fullName();

// ======================================
// 007 - Constructor Functions
// ======================================
// Blue Print
// Factory Functions and Constructor Functions
// Constructor Functions
// new - creates new object, points to it, omit return

// FACTORY FUNCTION
// function createPerson(firstName, lastName) {
//   return {
//     firstName: firstName,
//     lastName: lastName,
//     fullName: function () {
//       console.log(
//         `My full name is ${this.firstName} ${this.lastName} and I love JS`
//       );
//     },
//   };
// }

/*
// JavaScript CONSTRUCTOR FUNCTION
// In JavaScript, a constructor function is a function used to create objects.

// In the below example, function Person() is an object constructor function.

// To create an object from a constructor function, we use the new keyword.

// Note: It is considered a good practice to capitalize the first letter of your constructor function.
*/

// CONSTRUCTOR FUNCTION
// In JavaScript, a constructor function is a function used to create objects.
// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.fullName = function () {
//     console.log(
//       `My full name is ${this.firstName} ${this.lastName} and I love React`
//     );
//   };
//   console.log(this);
// }
// In the above example, function Person() is an object constructor function.

// To create an object from a constructor function, we use the new keyword.

// Note: It is considered a good practice to capitalize the first letter of your constructor function.

// // create objects
// const john = new Person("john", "anderson");
// const bob = new Person("bob", "apple");
// const susy = new Person("susy", "jordan");
// // access properties
// john.fullName();
// bob.fullName();
// susy.fullName();
// Create Multiple Objects with Constructor Function

// In JavaScript, you can create multiple objects from a constructor function.

// In the above program, three objects are created using the same constructor function.

// ======================================
// 008 - Constructor Property
// ======================================
// All Objects in Javascript have access to constructor property that returns a constructor function that created it.
// built in constructor functions
// arrays and functions are objects in javascript

// constructor property returns the function which created the instance object.

// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.fullName = function () {
//     console.log(
//       `My full name is ${this.firstName} ${this.lastName} and I love React`
//     );
//   };
// }

// const john = new Person("john", "sanders");
// console.log(john.constructor); // constructor property is telling john object is created from Person constructor function.
// const peter = new Person("peter", "parker");
// console.log(peter.constructor); // constructor property is telling peter object is created from Person constructor function.

// const bob = {};
// console.log(bob.constructor);
// const list = [];
// console.log(list.constructor);
// const sayHi = function () {};
// console.log(sayHi.constructor);

// const susy = new john.constructor("susy", "carpenter");
// susy.fullName();

// ======================================
// 009 - Prototype Property
// ======================================
/*
Prototypal Inheritance Model
Javascript uses prototypal inheritance model. That means that every constructor function/class has a prototype property that is shared by every instance of the constructor/class. So any properties and methods or prototype can be acessed by every instance. prototype property returns a object
*/

// function Account(name, initialBalance) {
//   this.name = name;
//   this.balance = initialBalance;
// }

// const john = new Account("john", 200);
// const bob = new Account("bob", 0);

// Account.prototype.bank = "CHASE";
// Account.prototype.deposit = function (amount) {
//   this.balance += amount;
//   console.log(`Hello ${this.name}, your balance is ${this.balance}`);
// };
// console.log(john.bank);
// console.log(bob);

// john.deposit(300);
// bob.deposit(1000);

// ======================================
// 010 - Property Lookup
// ======================================
/*
Property Lookup
If child does not have ask parent
Everything in JS is an Object
*/

// function Account(name, initialBalance) {
//   this.name = name;
//   this.balance = initialBalance;
//   // this.bank = "Bank Of America";
//   // john checks bank(method) first in instance or not, then checks in prototype if it is not in prototype also then checks in parent(built in object prototype) then it gives undefined
// }

// const john = new Account("john", 200);
// const bob = new Account("bob", 0);

// Account.prototype.bank = "CHASE";
// Account.prototype.deposit = function (amount) {
//   this.balance += amount;
//   console.log(`Hello ${this.name}, your balance is ${this.balance}`);
// };
// // console.log(john.bank);
// console.log(bob);
// console.log({}); // we can use/we can access all the methods and properties(like hasOwnproperty,isPrototypeOf,toString,...) which are stored in prototype [[Prototype]] : Object which are already made for us to use(built in properties or methods) to all the arrays we created.

// console.log([]); // we can use/we can access all the methods and properties(like filter,reduce,map,...) which are in prototype [[Prototype]] : Array(0) which are already made for us to use(built in properties or methods) to all the arrays we created.

// ======================================
// 011 - ES6 Class Syntax
// ======================================
/*
ES6 Classes - Syntactic Sugar
Prototypal Inheritance

*/

/*
// using contructor function to produce objects/instances
function Account(name, initialBalance) {
  this.name = name;
  this.balance = initialBalance;
  // this.bank = 'Bank Of America';
}

const john = new Account("john", 200);
const bob = new Account("bob", 0);

Account.prototype.bank = "CHASE";
Account.prototype.deposit = function (amount) {
  this.balance += amount;
  console.log(`Hello ${this.name}, your balance is ${this.balance}`);
};
console.log(john.bank);
console.log(bob);
*/

// using Class to produce objects/instances
// Classes are a bit easier to read code
// class Account {
//   constructor(name, initialBalance) {
//     this.name = name;
//     this.balance = initialBalance;
//   }
//   bank = "Chase";
//   deposit(amount) {
//     this.balance += amount;
//     console.log(`Hello ${this.name}, your balance is ${this.balance}`);
//   }
// }

// const john = new Account("john", 0);
// console.log(john);
// console.log(john.name);
// john.deposit(500);
// console.log(john.bank);

// const bob = new Account("bob", 700);
// console.log(bob);
// console.log(bob.name);
// bob.deposit(1000);
// console.log(bob.bank);

// ======================================
// 012 - Call
// ======================================
// call,apply,bind are function methods (built in function methods)
// call - runs instantly, arguments - list of items

/*
Call is a function that helps you change the context of the invoking function. In layperson's terms, it helps you replace the value of this inside a function with whatever value you want.
*/

/*
// With the call() method, you can write a method that can be used on different objects.
*/

// const john = {
//   name: "john",
//   age: 24,
//   greet: function () {
//     console.log(this);
//     console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old`);
//   },
// };
// const susan = {
//   name: "susan",
//   age: 21,
// };

// john.greet();

// this will fail

// susan.greet(); // bcoz greet method is in john object so we call for susan
// greet(); // ReferenceError: greet is not defined
// const secondGreet = john.greet;
// secondGreet();

// function greet() {
//   console.log(this); // this = window
//   console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old`);
// }
// this will fail to

// susan.greet(); // TypeError: susan.greet is not a function
// greet();
// const secondGreet = john.greet;
// secondGreet();

// greet.call(john);
// greet.call(susan);
// greet.call({ name: "peter", age: 30 });

// john.greet.call(susan);

// MY PRACTICE

// const bharu = {
//   name: "Bharu",
//   age: 29,
//   details: function () {
//     console.log(`${this.name}, ${this.age}`);
//   },
// };
// const dhanush = {
//   name: "dhanush",
//   age: 18,
// };

// function data() {
//   console.log(this);
//   console.log(`${this.name}, ${this.age}`);
// }

// data.call(dhanush);
// data.call(bharu);

// bharu.details.call(dhanush);
// bharu.details.call({ name: "Peter", age: 35 });
// bharu.details.call({ name: "Shark", age: 50 });

// data.call({ name: "Zofan", age: 20 });
// data.call({ name: "Superman", age: 50 });

// if you want pass arguments make sure to pass arguments as list of items like this "bharu","dhanush"

// const bharu = {
//   name: "Bharu",
//   age: 29,
//   details: function (anime, food) {
//     console.log(`${this.name}, ${this.age}, ${anime}, ${food}`);
//   },
// };
// const dhanush = {
//   name: "dhanush",
//   age: 18,
// };

// function data(manga, favFood) {
//   console.log(this);
//   console.log(`${this.name}, ${this.age}, ${manga}, ${favFood}`);
// }

// data.call(dhanush, "magic emperor", "manchuria");
// data.call(bharu, "demon master", "faloda");

// bharu.details.call(dhanush, "God of Arts", "pizza");
// bharu.details.call({ name: "Peter", age: 35 }, "Demon God", "chips");
// bharu.details.call({ name: "Shark", age: 50 });

// data.call({ name: "Zofan", age: 20 }, "Invincible God", "sweets");
// data.call({ name: "Superman", age: 50 });

// ======================================
// 013 - Apply,Arguments
// ======================================
// call,apply,bind are function methods (built in function methods)
// call - runs instantly, arguments - list of items
// apply - runs instantly, arguments - array of items
// bind - assign, use later, arguments - list of items

/*
Apply is very similar to the call function. The only difference is that in apply you can pass an array as an argument list.
*/

/*
With the apply() method, you can write a method that can be used on different objects.
*/

// const john = {
//   name: "john",
//   age: 24,
// };
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

// greet.apply(john); // works like call
// greet.apply(susan); // works like call
// greet.apply({ name: "peter", age: 30 }); // works like call

// now it's going to make sense
// when using apply if you want to pass arguments make sure to pass arguments as array of elements like this ["Hyd","India"]

// greet.apply(john, ["Hyd", "India"]);
// greet.apply(susan, ["warangal", "India"]);
// greet.apply({ name: "peter", age: 30 }, ["washington", "USA"]);

// ======================================
// 014 - Bind
// ======================================
// call - runs instantly, arguments - list of items
// apply - runs instantly, arguments - array of items
// bind - assign, use later, arguments - list of items

/*
The bind function creates a copy of a function with a new value to the this present inside the calling function.
*/

/*
but we can call it whenever we want, Example if you want to call/invoke after ten 10 seconds you can. if you want to call it after 1 hour you can.
*/

// const john = {
//   name: "john",
//   age: 24,
// };
// const susan = {
//   name: "susan",
//   age: 21,
// };

// function greet(city, country) {
//   // console.log(this);
//   console.log(
//     `Hello, I'm ${this.name} and I'm ${this.age} years old and I live in ${city}, ${country}`
//   );
// }

// assign, call it later
// const susanGreat = greet.bind(susan, "toronto", "ca"); // asiigned // this = pointing to susan
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

// ======================================
// 015 - Button Example
// ======================================
// call,apply,bind Real Example

// const counter = {
//   count: 0,
//   increment() {
//     console.log(this);
//     this.count++;
//     console.log(this.count);
//   },
// };

// const btn = document.querySelector(".increment");

// fail
// btn.addEventListener("click", counter.increment); // this = pointing to button

// some edge cases
// btn.addEventListener("click", counter.increment.bind(counter)); // this = pointing to counter object
// or
// const increment = counter.increment.bind(counter);
// btn.addEventListener("click", increment);
// if you don,t want that eventlistener or that increment functionality anymore you can remove it using below method
// btn.removeEventListener("click", increment);

// ======================================
// 000 - JavaScript Accessors(Getters and Setters)
// ======================================
// JavaScript Object Accessors
// JavaScript Accessors (Getters and Setters)
// Getters and setters allow you to define Object Accessors (Computed Properties).

// JavaScript Getter (The get Keyword)
// JavaScript Setter (The set Keyword)

// Data Quality
// JavaScript can secure better data quality when using getters and setters.

// Why Using Getters and Setters?
// It gives simpler syntax
// It allows equal syntax for properties and methods
// It can secure better data quality
// It is useful for doing things behind-the-scenes

// get is treated as property
// set is also treated as property

/*
const person = {
  name: "vishwajeet",
  age: 25,

  // getName: function () {
  //   return this.name.toUpperCase();
  // },

  // using get
  // get getName() {
  //   return this.name.toUpperCase();
  // },

  // using set
  set setName(n) {
    return (this.name = n.toUpperCase());
  },
};
// console.log(person.getName);
// // console.log(person.name.toUpperCase());

// person.name = "ajit";
// console.log(person.getName);

// using set
person.setName = "ajit";
console.log(person);
*/

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
// ======================================
// 001 - ES6 Modile Intro
// ======================================

// ======================================
// 002 - VAR,LET,CONST
// ======================================
// var, let , const
// define, update, redifine
// const cannot mutate primitive type

/*
// var can define,update,redefine
var number = 100; // definie
console.log(number);
// update
number = 200; // update
console.log(number);
var number = "orange"; // redefine
console.log(number);

// let define,update,cannot redefine
// let amount = 100; // define
// // console.log(amount);
// amount = 200; // update
// // console.log(amount);
// // let amount = 'orange'; // cannot redefine

// const define,cannot redefine
// const total = 100; // define
// // console.log(total);
// // total = 200; // cannot update
const person = { name: "bob" };
console.log(person.name);
person.name = "john";
console.log(person.name);
*/

// ======================================
// 003 - Function Scop and Block Scope
// ======================================
// var, let , const
// let, const - blocked scoped {} - anything within {}
// var - function scoped

/*
// global scope

console.log(amount);
let amount = 100;

function greet() {
  // local scope
  var random = 'some random value';
  console.log(`hello there ${amount} ${random}`);
}
// console.log(random);

// // greet();

// let total = 1000;
// let test = true;

// if (test) {
//   // local scope
//   let total = 'oranges and onions';
//   let value = 'some random value';
//   console.log('hello there');
// }

// // console.log(value);
// {
//   let total = 100;
//   console.log(total);
// }
// {
//   let total = 100;
//   console.log(total);
// }

// console.log(total);
*/

// ======================================
// 004 - Template Strings
// ======================================
// Template Strings/Literals - backticks ` `

/*
const name = "bob";
const lastName = "sanders";
const age = 25;

// concat +
const phrase =
  "My full name is " +
  name +
  " " +
  lastName.toUpperCase() +
  " and I'm " +
  age * 2 +
  " years old.";
console.log(phrase);

// Template Strings/Literals
const phrase2 = `My full name is ${name} ${lastName.toUpperCase()} and I'm ${
  age * 2
} years old`;
console.log(phrase2);
*/

// ======================================
// 005 - Template Strings-HTML
// ======================================
// Template Strings/Literals
// `` backticks above tab key left of 1 key

/*
const person = {
  name: "kyle",
  job: "developer",
  hobbies: ["surfing", "baking", "bowling"],
};

const result = document.getElementById("result");

// using concat +
// result.innerHTML = "<h2>" + person.name + "</h2>" + "<p>" + person.job + "</p>";

// using Template Strings/Literals
result.innerHTML = `
<h2>${person.name}</h2>
<p>${person.job}</p>
<ul>
${person.hobbies
  .map((item) => {
    return `<li>${item}</li>`;
  })
  .join("")}
</ul>
`;
*/

// ======================================
// 006 - Tagged Template Literals
// ======================================

// ======================================
// 007 - Arrow Functions-Basics
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
// ======================================
// 012 - Swap Variables
// ======================================
// Destructuring
// faster/easier way to access/unpack values from arrays
// objects into variables
// Arrays

/*
// we can only swap variables using let
// swap variables general method
let first = "bob";
let second = "john";
console.log(first, second);

// let temp = second;
// second = first;
// first = temp;
// console.log(first, second);

// after knowing destructuring we can swap variables easily
[second, first] = [first, second];
console.log(first, second);
console.log(typeof first, typeof second);
*/

// ======================================
// 013 -
// ======================================
// ======================================
// 014 -
// ======================================
// ======================================
// 015 - New String Methods
// ======================================
// new string methods
// startsWith(), endsWith(), includes(),repeat()

/*
const person = "Peter Smith";
const employee = "23456-EMP-PETER-SMITH";
const manager = "23456-MAN-JOHN-DOE";
// starts with
console.log(person.startsWith("Pet"));
console.log(person.startsWith("Pe"));
console.log(person.startsWith("P"));
console.log(person.startsWith("e"));
console.log(person.startsWith("peter")); // case sensitive

console.log(employee.startsWith("EMP", 6));

// // ends with
// console.log(manager.endsWith("DOE"));
// console.log(manager.endsWith("MAN", 9));
// // includes
// console.log(manager.includes("MAN"));
// console.log(manager.includes("mAN"));

// const multiplyPeople = (person, amount) => person.repeat(amount);

// // repeat
// const people = multiplyPeople(person, 10);
// console.log(people);
*/

// ======================================
// 016 -
// ======================================
// ======================================
// 017 -
// ======================================
// ======================================
// 018 -
// ======================================
// ======================================
// 019 -
// ======================================
// ======================================
// 020 -
// ======================================
// ======================================
// 021 -
// ======================================
// ======================================
// 022 -
// ======================================
// ======================================
// 023 -
// ======================================
// ======================================
// 024 -
// ======================================
// ======================================
// 025 -
// ======================================
// ======================================
// 026 -
// ======================================
// ======================================
// 027 -
// ======================================
// ======================================
// 028 -
// ======================================
// ======================================
// 029 -
// ======================================
// ======================================
// 030 -
// ======================================
// ======================================
// 031 -
// ======================================
// ======================================
// 032 -
// ======================================
// ======================================
// 033 -
// ======================================
// ======================================
// 034 -
// ======================================

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
// what are callback functions?
// functions that are passed as arguments to other functions.

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

// const heading1 = document.querySelector(".one");
// const heading2 = document.querySelector(".two");
// const heading3 = document.querySelector(".three");
/*
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
  //// METHOD 3 USING PROMISES
  // even if addColor function defined on out will work
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
  // addColor(1000, heading1, "red")
  //   .then(() => addColor(2000, heading2, "green"))
  //   .then(() => addColor(1000, heading3, "blue"))
  //   .catch((err) => console.log(err));
  /////////////////////////////
  ////////////////////////////
  // EXAMPLE 2
  // TOTAL 4 SECONDS FOR WHOLE PROCESS 1+2+1
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
  // function addSecond(time, step) {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       console.log(`${step}`);
  //       resolve();
  //     }, time);
  //   });
  // }
  // addSecond(1000, "1 second")
  //   .then(() => addSecond(2000, "2 second"))
  //   .then(() => addSecond(1000, "1 second"));
});
*/

/*
// EXAMPLE 2
// TOTAL 4 SECONDS FOR WHOLE PROCESS 1+2+1
// METHOD 1 (callback hell)
// setTimeout(() => {
//   console.log("1 second");
//   setTimeout(() => {
//     console.log("2 second");
//     setTimeout(() => {
//       console.log("1 second");
//     }, 1000);
//   }, 2000);
// }, 1000);

// METHOD 2
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
// TOTAL 4 SECONDS FOR WHOLE PROCESS 1+2+1
// function addSecond(time, step) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(`${step}`);
//       resolve();
//     }, time);
//   });
// }

// addSecond(1000, "1 second")
//   .then(() => addSecond(2000, "2 second"))
//   .then(() => addSecond(1000, "1 second"));
*/

//////////////////////
/*
// changing color using promises
const heading1 = document.querySelector(".one");
const heading2 = document.querySelector(".two");
const heading3 = document.querySelector(".three");

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

addColor(1000, heading1, "red")
  .then(() => addColor(2000, heading2, "green"))
  .then(() => addColor(1000, heading3, "blue"))
  .catch((err) => console.log(err));
  */

//////////////////////////

// function addSecond(time, step) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(`${step}`);
//       resolve();
//     }, time);
//   });
// }

// addSecond(1000, "1 second")
//   .then(() => addSecond(2000, "2 second"))
//   .then(() => addSecond(1000, "1 second"));

// ======================================
// 007 - Promises
// ======================================
// callbacks, promises, async/await
// PROMISES - Pending, Resolved, Rejected
// then, catch - pass another callback

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
// old style method
// important words

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
// The fetch() method starts the process of fetching a resource from a server.
// The fetch() method returns a Promise that resolves to a Response object.
// 😀 No need for XMLHttpRequest anymore.
// syntax
// fetch(The name of a resource to fetch); like url

// modern method to get data from api's
// Fetch built-in
// promised based
// XHR is not wrong, you can complete all our upcoming examples and projects using XHR. Fetch is just alternative approach that has simpler and cleaner syntax. The end result is the same.Still get dynamically, behind the scenes.

/*
const url = "./SMILGA/api/people.json";

// const response = fetch(url);
// console.log(response);

// fetch(url)
//   .then((resp) => {
//     // response object
//     // useful properties and methods
//     // console.log(resp);
//     // convert response into JSON data
//     // returns promise
//     return resp.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.log(err));

// using arrow functions
fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
  */

// ======================================
// 007 - Fetch - Errors gotcha
// ======================================
// const url = "./SMILGA/api/people.jsons";

// fetch(url)
//   .then((response) => console.log(response))
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// ======================================
// 008 - Fetch - Big Picture
// ======================================

// ======================================
// 009 - Fetch with Functions
// ======================================
// const url = "./SMILGA/api/people.json";

// const btn = document.querySelector(".btn");

// btn.addEventListener("click", () => {
//   fetch(url)
//     .then((resp) => resp.json())
//     .then((data) => {
//       // console.log(data);
//       displayItems(data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// const displayItems = (items) => {
//   const displayData = items
//     .map((item) => {
//       const { name } = item;
//       return `<p>${name}</p>`;
//     })
//     .join("");
//   const element = document.createElement("div");
//   element.innerHTML = displayData;
//   document.body.appendChild(element);
// };

// ======================================
// 010 - Fetch - with async/await
// ======================================
// above example using async/await
// a bit easy method than above example and xhr method

/*
const url = "./SMILGA/api/people.json";

const btn = document.querySelector(".btn");

btn.addEventListener("click", async () => {
  const response = await fetch(url);
  const data = await response.json();
  displayItems(data);
});

const displayItems = (items) => {
  const displayData = items
    .map((item) => {
      const { name, id } = item;
      return `<p>${name}</p>`;
    })
    .join("");
  const element = document.createElement("div");
  element.innerHTML = displayData;
  document.body.appendChild(element);
};
*/

// ======================================
// 011 - Try Catch
// ======================================
/*
// JavaScript Errors(w3schools)
// try and catch a nice way to handle errors
// SYNTAX
// try {
//   Block of code to try
// }
// catch(err) {
//   Block of code to handle errors
// }


// Throw, and Try...Catch...Finally
// The try statement defines a code block to run (to try).
// The catch statement defines a code block to handle any error.
// The finally statement defines a code block to run regardless of the result.
// The throw statement defines a custom error.

// Errors Will Happen!
// When executing JavaScript code, different errors can occur.
// Errors can be coding errors made by the programmer, errors due to wrong input, and other unforeseeable things.

// JavaScript try and catch
// The try statement allows you to define a block of code to be tested for errors while it is being executed.
// The catch statement allows you to define a block of code to be executed, if an error occurs in the try block.

// The JavaScript statements try and catch come in pairs:
// try {
//   Block of code to try
// }
// catch(err) {
//   Block of code to handle errors
// }

// JavaScript Throws Errors
// When an error occurs, JavaScript will normally stop and generate an error message.
// The technical term for this is: JavaScript will throw an exception (throw an error).

// JavaScript will actually create an Error object with two properties: name and message.

// The throw Statement
// The throw statement allows you to create a custom error.
// Technically you can throw an exception (throw an error).

// The exception can be a JavaScript String, a Number, a Boolean or an Object:
// throw "Too big";    // throw a text
// throw 500;          // throw a number
// If you use throw together with try and catch, you can control program flow and generate custom error messages.
*/

// console.log(random);

// try {
//   console.log("hello");
//   console.log(random);
// } catch (error) {
//   console.log(error);
// }

// console.log("hey");

/*
// EXAMPLE
const url = "./SMILGA/api/people.json";

const btn = document.querySelector(".btn");

btn.addEventListener("click", async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    displayItems(data);
  } catch (error) {
    console.log(error);
  }
});

const displayItems = (items) => {
  const displayData = items
    .map((item) => {
      const { name, id } = item;
      return `<p>${name}</p>`;
    })
    .join("");
  const element = document.createElement("div");
  element.innerHTML = displayData;
  document.body.appendChild(element);
};
*/

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

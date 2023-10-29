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

// function CreateCar(color, brand) {
//   this.color = color;
//   this.brand = brand;
//   this.start = function () {
//     console.log("started");
//   };
// }

// let car1 = new CreateCar("blue", "Audi");
// let car2 = new CreateCar("red", "Tata");
// let car3 = new CreateCar("green", "BMW");
// console.log(car1);
// console.log(car2);
// console.log(car3);

// car1 is instance
// car1.start() is instance method
// car1.color,car1.brand are instance properties

// Differnces between Factory functions and Constructor functions
// Factory functions
// (1) Follows camelCase notation
// (2) No need of new Operator for function calling
// (3) Explicitly need to return the Object

// Constructor functions
// (1) Allows PascalCase notation
// (2) Need new Operator for function calling
// (3) create object returns implicitly

// JS Functions
// Functions are Objects
// Similar to Objects,functions also properties and methods

// Default Function properties and Methods
// Properties
// (1) name
// (2) length
// (3) constructor
// (4) prototype
// .....many more.....

// Methods
// (1) apply()
// (2) bind()
// (3) call()
// (4) toString()
// ...... many more.......

// function CreateCar(color, brand) {
//   this.color = color;
//   this.brand = brand;
//   this.start = function () {
//     console.log("started");
//   };
// }

// name = This property returns the name of the function
// console.log(CreateCar.name);
// // length = This property returns the number of parameters we pass to the function
// console.log(CreateCar.length);
// console.log(typeof CreateCar);

// constructor
// The Constructor Property
// Every object in js has a constructor property
// The constructor property refers to the constructor function which is used to create the object

// let car1 = new CreateCar("blue", "Audi");
// let car2 = new CreateCar("red", "Tata");
// let car3 = new CreateCar("green", "BMW");
// console.log(car1.constructor);
// console.log(car2.constructor);
// console.log(car3.constructor);

// BUILT IN CONSTRUCTOR FUNCTIONS
// (1) function Date()
// (2) function Error()
// (3) function Promise()
// (4) function Object()
// (5) function String()
// (6) function Number()
// ....... many more ........
// These are the Constructor functions provided by the Javascript already

// Built in Date Constructor Function(or object you can say bcoz functions are objects in end)
// Date
// To work with date and time in our applications, we use built in Date constructor function

// Current Date and Time
// let now = new Date();
// console.log(now);
// console.log(typeof now);
// Creating a Date object
// without passing any arguments to the function gives current date and time

// Passing arguments to Date Function
// String Format
// syntax new Date(datestring)
// let date = new Date("2023-10-27");
// console.log(date);

// Passing arguments to Date Function
// Number Format
// syntax new Date(year,month,date,hours,minutes,seconds,milli seconds)

// let date1 = new Date(1947, 7, 15, 1, 3, 15, 0);
// console.log(date1);

// let date2 = new Date(1947, 7, 15);
// console.log(date2);

// How to access & set Date?
// Date function
// Instance Methods
// There are methods to access and set values like a year,month,etc in the Date Object.

// getFullYear()
// setFullYear(year,[month],[date])
// getDate()
// setDate(date)
// getMinutes()
// ....many more...

// ACCESSING DATE VALUES
// let date1 = new Date(1947, 7, 15, 1, 3, 15, 0);
// console.log(date1.getFullYear());
// console.log(date1.getMonth());

// SETTING DATE VALUES
// let date1 = new Date(1947, 7, 15);
// console.log(date1);
// date1.setFullYear(2021);
// console.log(date1.getFullYear());
// date1.setDate(1);
// console.log(date1.getDate());
// console.log(date1);

// ======================================
// 004 - More Modern JS Concepts Part-3
// ======================================
// 1) this
// (1) constructor Functions
// (2) Arrow Functions
// (3) Callbacks
// (4) Regular Functions
// (5) Object Methods

// 2) JS Values
// (1) Mutable
// (2) Immutable

// 3) Declaring Variables
// (1) let vs const

// 1) this
// this is determined in three ways
// In Objects methods, this refers to the OBJECT that executing the current function.
// In Regular function, this refers to the GLOBAL object(window object).
// In Arrow functions, this refers to the Context in which the code is defined

// (1) constructor Functions
// (2) Arrow Functions
// (3) Callbacks
// (4) Regular Functions
// (5) Object Methods

////////////////////////////////////
// Prototypes and Classes
////////////////////////////////////

// ======================================
// 001 - Protopal Inheritence
// ======================================
// 1) Functions
// (1) Prototype Property

// 2) Prototype
// (1) Prototypal Inheritence

// 3) Built in constructors
// (1) new Function
// (2) new Array

// 1) Functions
// (1) Prototype Property

// Constructor Functions
// Built in Contructor functions
// function Array()
// function Function()
// function Promise()
// function Object()
// function String()
// function Number()
// These are the Constructor functions already provided by the javascript

// Built in Array Constructor

// creating an Array // older way of writing
// let myArray = new Array("a", 2, true);
// console.log(myArray);
// myArray.push("pen");
// console.log(myArray);
// console.log(myArray.length);
// // Modern way of writing an array
// let myArray1 = ["a", 2, true];
// console.log(myArray1);
// myArray1.push("pen");
// console.log(myArray1);
// console.log(myArray1.length);

// (1) Prototype Property
// Prototype property will be shared across all the instances of its constructor function

// Accessing Contructor Prototype
// console.log(Array.prototype);

// Array
// Accessing Prototype of Instance
// let myArray = new Array("a", 2, true);
// console.log(Object.getPrototypeOf(myArray));

// Prototype in Multiple Instances
// let myArray = new Array("a", 2, true);
// let sports = new Array("cricket", "Hockey", "Football");
// console.log(Object.getPrototypeOf(sports));

// Array
// Prototypal Inheritence
// on calling the new() operator, all the properties defined on the prototype will become accessible to the instance objects
// This process is called Prototypal inheritence

// BUILT IN FUNCTION CONSTRUCTOR

// default functions properties and methods
// properties - name,length,constructor,prototype,....
// methods - apply(),bind(),call(),toString(),......

// Creating a function
// older way of writing
// let Car = new Function(
//   "color,brand",
//   `this.color = color;
//  this.brand = brand;
//  this.start = function(){
//   console.log("started");
//  }`
// );
// console.log(Car);
// console.log(Function.prototype);

// modern way of writing
// function Car(color, brand) {
//   this.color = color;
//   this.brand = brand;
//   this.start = function () {
//     console.log("started");
//   };
// }
// console.log(Car);
// console.log(Function.prototype);
// console.log(Object.getPrototypeOf(Car));
// let car1 = new Car("blue", "Audi");
// // Accessing Prototype of Car Instance
// console.log(Object.getPrototypeOf(car1));

// Adding Properties and Methods to Prototype
// Person Example
// Creating Single Object
// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }
// let person1 = new Person("Virat", "Kohli");
// console.log(person1);
// let person2 = new Person("Sachin", "Tendulkar");
// console.log(person2);

// INSTANCE PROPERTIES
// Proprties specific to the object
// Examples
// gender,yearOfBirth,friendList,name

// PROTOTYPE PROPERTIES
// Properties common across instances
// Examples
// calculateAge,displayGrettings,dispplayProfileDetails,calculateIncome

// ======================================
// 00 - JS Classes
// ======================================
// Creating multiple objects - JS Classes is one of modern method
// JS Classes - constructor()
// inheritence - super(),extends

// CLASS is a special type of  function used for creating multiple objects

// CLASS SYNTAX
// class MyClass {
//   constructor(property1, property2) {
//     this.property1 = property1;
//     this.property2 = property2;
//   }
//   method1() {...}
//   method2() {...}
// }

// let myObject = new NyClass(property1, property2);

// constructor method
// The constructor method is a special method of a class for creating and initializing an object of that class
//   constructor(property1, property2) {
//     this.property1 = property1;
//     this.property2 = property2;
//   }

// class
// CREATING A SINGLE OBJECT
// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
//   displayFullName() {
//     return this.firstName + " " + this.lastName;
//   }
// }
// let person1 = new Person("Virat", "Kohli");
// console.log(person1);
// console.log(person1.displayFullName());
// console.log(Person.prototype); // acessing class prototype
// console.log(Object.getPrototypeOf(person1)); // accessing instance prototype

// // creating multiple instances
// let person2 = new Person("Sachin", "Tendulkar");
// let person3 = new Person("Sawra", "Gangowli");
// console.log(person2);
// console.log(person3);
// console.log(person2.displayFullName()); // accessing method from class
// console.log(Object.getPrototypeOf(person2)); // accessing instance prototype
// console.log(person3.displayFullName()); // accessing method from class
// console.log(Object.getPrototypeOf(person3)); // accessing instance prototype

// // class
// // Type of Class
// console.log(typeof Person); // created class is function
// console.log(typeof person1); // created instance from is class object remember

// // INHERITENCE IN JS CLASSES

// // EXAMPLE
// // ANIMAL CLASS
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
//   eat() {
//     return `${this.name} is eating!`;
//   }
//   makeSound() {
//     return `${this.name} is shouting`;
//   }
// }

// let animal1 = new Animal("gorilla");
// console.log(animal1);
// console.log(animal1.eat());

// // class
// // INHERITENCE
// // Inheritence is a mechanism by which a class inherits methods and properties from another class
// // Super Class -> Sub Class

// class Dog extends Animal {
//   constructor(name, breed) {
//     super(name);
//     this.breed = breed;
//   }
//   sniff() {
//     return `${this.name} is sniffling`;
//   }
// }
// let dog = new Dog("dog", "German Shepard");
// console.log(dog);
// console.log(dog.sniff());
// console.log(dog.eat());
// console.log(dog.makeSound());

// class Cat extends Animal {
//   constructor(name, breed) {
//     super(name);
//     this.breed = breed;
//   }
//   knead() {
//     return `${this.name} is kneading`;
//   }
// }
// let cat = new Cat("cat", "Persian Cat");
// console.log(cat);
// console.log(cat.knead());
// console.log(cat.eat());
// console.log(cat.makeSound());

// class Animal1 {
//   constructor(name) {
//     this.name = name;
//   }
//   eat() {
//     return this;
//   }
//   makeSound() {
//     return `${this.name} is shouting`;
//   }
// }

// let animal2 = new Animal1("gorilla");
// console.log(animal2);
// console.log(animal2.eat());
// // In Class , this refers to the instance object means animal2
// // this = animal2

// let animal3 = new Animal1("dog");
// console.log(animal3);
// console.log(animal3.eat());
// // In Class , this refers to the instance object means animal3
// // this = animal3

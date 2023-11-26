////////////////////////////////
// OBJECT ORIENTED PROGRAMMING
////////////////////////////////
// what are objects?
// what is object oriented programming(oop)?

// To understand oop we need to understand these topics
// object basics, nested objects, dot notation, bracket notation
// this keyword basics and advanced
// factory functions
// contructor functions
// constructor property
// what is prototype,prototype property,prototypal inheritence
// class
// functions default methods like call,apply,bind
// Methods to creating objects
// we have multiple methods to create objects
// (1) Using Object Literals
// (2) Using Factory function
// (3) Using Constructor function
// (4) Using JS Classes
// .....

// Methods to creating objects
// we have multiple methods to create objects
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
// Blue Print
// Factory Functions

// IMPORTANT DEFINITION (no need to see ohters definitions)
/*
// Factory function is a function that can return new object
// FunctionName should follow camelCase naming convention
*/

// A Factory function is any function that returns a new object for every function call
// FunctionName should follow camelCase naming convention

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
/*
// Factory function is a function that can return new object
// FunctionName should follow camelCase naming convention
*/
// FACTORY FUNCTION SYNTAX
// function functionName(paramater1,paramater2,...){
//  return{
//   property1: parameter1,
//   property2: parameter2,
//   ....
//   ....
//  }
// }
// let myObject = functionName(argument1,argument2,...)

// EXAMPLE 1
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

// EXAMPLE 2
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
// console.log(typeof createPerson);
// console.log(typeof createPerson());
// const john = createPerson("john", "anderson");
// console.log(john);
// john.fullName();
// const bob = createPerson("bob", "apple");
// console.log(bob);
// bob.fullName();
// const susy = createPerson("susy", "jordon");
// console.log(susy);
// susy.fullName();

// (3) Using Constructor function
// constructor function returns a new object on calling with the new operator.
// The created new object is called an instance.
// Note: Function name should follow PascalCase naming convention (means first letter also should be capital letter).

// The new Operator
// when a function is called with new,it does the following steps
// (1) creates an empty object and assigns to this
// this = { }; (implicitly)
// (2) Return this
// Return this (implicitly)

// Blue Print
// Factory Functions and Constructor Functions
// Constructor Functions
// new - creates new object, points to it, omit return

// CONSTRUCTOR FUNCTION SYNTAX
// function functionName(paramater1,paramater2,...){
// this.property1 = parameter1;
// this.property2 = parameter2;
// ......
// ......
// }
// let myObject = new FunctionName(argument1,argument2,...)

// EXAMPLE 1
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

// EXAMPLE 2
// In JavaScript, a constructor function is a function used to create objects.
// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.fullName = function () {
//     console.log(
//       `My full name is ${this.firstName} ${this.lastName} and I love React`
//     );
//   };
//   // console.log(this);
// }
// In the above example, function Person() is an object constructor function.

// To create an object from a constructor function, we use the new keyword.

// Note: It is considered a good practice to capitalize the first letter of your constructor function.

// // create objects or instances
// const john = new Person("john", "anderson");
// const bob = new Person("bob", "apple");
// const susy = new Person("susy", "jordan");
// console.log(john);
// console.log(bob);
// console.log(susy);
// // access properties
// john.fullName();
// bob.fullName();
// susy.fullName();
// Create Multiple Objects with Constructor Function

// In JavaScript, you can create multiple objects from a constructor function.

// In the above program, three objects are created using the same constructor function.

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

// // name = This property returns the name of the function
// console.log(CreateCar.name);
// // length = This property returns the number of parameters we pass to the function
// console.log(CreateCar.length);
// console.log(typeof CreateCar);

// constructor
// The Constructor Property
// Every object in js has a constructor property
// The constructor property refers to the constructor function which is used to create the that object

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

/* // MY DEFINITONS
// prototype property/object is a property that it has all the methods and properties present which are defined on the constructor function.
// this prototype property will we be shared across all instances of its constructor function
// methods and properties which are available in the prototype property can be accessed or used for all the instances which are created from its constructor function.
// This process is called prototypal inheritance.
*/

//  vvv imp
// prototype // prototype property // object
// [[prototype]] : Object
// prototype is nothing but object
// console.log(Object.prototype);
// it has collection of methods and properties which are defined on the constructor function
// those methods and properties can be accessed for all the instances(objects) is called prototypal inheritance.

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
// (4) USING JS CLASSES
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

////////////////////////////////
// SIMPLIFIED VERSION OF OOP
////////////////////////////////
// 1) WHAT IS OOP?
// 2)
// Methods to creating objects
// we have multiple methods to create objects
// (1) Using Object Literals
// (2) Using Factory function
// (3)
// -> Using Constructor function,
// -> // Differences between Factory functions and Constructor functions,
// -> Default Function properties and Methods,
// -> constructor property (IMP),
// -> Built in constructor functions,
// -> Prototype, Prototype property, Prototypal Inheritence,Prototype Chain
// (4) Using JS Classes

// ======================================
// (1) Using Object Literals
// ======================================

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

// ======================================
// (2) Using Factory function
// ======================================
/*
// Factory function is a function that can return new object
// FunctionName should follow camelCase naming convention 
*/

// FACTORY FUNCTION SYNTAX
// function functionName(paramater1,paramater2,...){
//  return{
//   property1: parameter1,
//   property2: parameter2,
//   ....
//   ....
//  }
// }
// let myObject = functionName(argument1,argument2,...)

// EXAMPLE 1
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

// EXAMPLE 2
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
// console.log(typeof createPerson);
// console.log(typeof createPerson());
// const john = createPerson("john", "anderson");
// console.log(john);
// john.fullName();
// const bob = createPerson("bob", "apple");
// console.log(bob);
// bob.fullName();
// const susy = createPerson("susy", "jordon");
// console.log(susy);
// susy.fullName();

// ======================================
// (3) Using Constructor function
// ======================================
/*
// a constructor function is a function used to create objects on calling with the new operator.
// The created new object is called an instance.
// Note: Function name should follow PascalCase naming convention (means first letter also should be capital letter).

// The new Operator
// when a function is called with new,it does the following steps
// (1) creates an empty object and assigns to this
// this = { }; (implicitly)
// (2) Return this
// Return this (implicitly)
*/

// CONSTRUCTOR FUNCTION SYNTAX
// function functionName(paramater1,paramater2,...){
// this.property1 = parameter1;
// this.property2 = parameter2;
// ......
// ......
// }
// let myObject = new FunctionName(argument1,argument2,...)

// EXAMPLE 1
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
// console.log(car1.color);
// console.log(car1.brand);
// car1.start();

// car1 is instance
// car1.start() is instance method
// car1.color,car1.brand are instance properties

// EXAMPLE 2
// In JavaScript, a constructor function is a function used to create objects.
// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.fullName = function () {
//     console.log(
//       `My full name is ${this.firstName} ${this.lastName} and I love React`
//     );
//   };
//   // console.log(this);
// }

// // create objects or instances
// const john = new Person("john", "anderson");
// const bob = new Person("bob", "apple");
// const susy = new Person("susy", "jordan");
// console.log(john);
// console.log(bob);
// console.log(susy);
// // access properties
// console.log(john.firstName);
// console.log(john.lastName);
// john.fullName();
// bob.fullName();
// susy.fullName();

// ======================================
// Differnces between Factory functions and Constructor functions
// ======================================
// Differnces between Factory functions and Constructor functions
// Factory functions
// (1) Follows camelCase notation
// (2) No need of new Operator for function calling
// (3) Explicitly need to return the Object

// Constructor functions
// (1) Allows PascalCase notation
// (2) Need new Operator for function calling
// (3) create object returns implicitly

// ======================================
// Default Function properties and Methods
// ======================================
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

// // name = This property returns the name of the function
// console.log(CreateCar.name);
// // length = This property returns the number of parameters we pass to the function
// console.log(CreateCar.length);
// console.log(typeof CreateCar);

// ======================================
// constructor property
// ======================================
// The Constructor Property
// Every object in js has a constructor property
// arrays and functions are objects in javascript
// constructor property returns the function which created the instance object.

// EXAMPLE 1
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
// console.log(car1.constructor);
// console.log(car2.constructor);
// console.log(car3.constructor);

// EXAMPLE 2
// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.fullName = function () {
//     console.log(
//       `My full name is ${this.firstName} ${this.lastName} and I love React`
//     );
//   };
// }

// method 1 creating instance from using constructor function
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

// method 2 creating instances from using first instance but we should have first instance otherwise we cant use this method
// const susy = new john.constructor("susy", "carpenter");
// susy.fullName();

// ======================================
// Built in constructor functions
// ======================================
// Built in constructor functions
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

// ======================================
//
// ======================================
// ======================================
//
// ======================================
// ======================================
//
// ======================================

////////////////////////////////
// OBJECT ORIENTED PROGRAMMING
// youtube Venkatesh Mogili
////////////////////////////////

// Contents(IMP Topics)
// 1) OOPS Introduction
// 2) Objects
// 3) Classes
// How many methods we have to create objects?
// 4) Encapsulation
// 5) Abstraction
// 6) Inheritance
// 7) Polymorphism

// ======================================
// 1) OOPS Introduction
// ======================================
// ======================================
// 2) Objects
// ======================================
// Objects have attributes/properties and actions/behavious
// Attributes
// Black color
// Apple Mobile

// Actions
// Calling
// Playing games
// Taking pictures

// // Example
// let mobile = {
//   // Attributes / Properties
//   color: "black",
//   name: "apple",

//   // Actions / behaviours / methods
//   calling: function () {
//     console.log("Call to chinni");
//   },

//   playPUBG: function () {
//     console.log("Intro music -> Shoot enemy -> close and sleep");
//   },

//   takePicture: function () {
//     console.log("Smile please -> Nice, kepp smiling like this");
//   },
// };

// ======================================
// 3) Classes
// ======================================
// Class is a blueprint for creating objects.
// We can create any number of objects with the same properties and actions by using Classes.

/*
// Example
// Blue Print
class Mobile {
  constructor(color, name) {
    this.color = color;
    this.name = name;
  }

  calling() {
    console.log("Call to chinni");
  }

  playPUBG() {
    console.log("Intro music -> Shoot enemy -> close and sleep");
  }

  takePicture() {
    console.log("Smile please -> Nice, kepp smiling like this");
  }
}

// Creating multiple objects/intances from class(blue print)
let apple = new Mobile("black", "apple");
let redmi = new Mobile("silver", "redmi");

console.log("Apple mobile is ready", apple);
console.log("Redmi mobile is ready", redmi);

// Getting/Setting Attributes

// Properties/Attributes
console.log(`What is the color of apple mobile?, ${apple.color}`);

// Actions/Functions/Methods
apple.calling();
apple.playPUBG();
apple.takePicture();
*/

// ======================================
// How many methods we have to create objects?
// ======================================
// #1) Object Literal
// #2) Object.create()
// #3) Functions are objects in javascript(constructor functions(IMP) or factory functions)
// #4) Using Classes (*IMP)

// #1) Object Literal
// =======================================

/*
let mobile1 = {
  // Attributes / Properties
  color: "black",
  name: "apple",

  // Actions / behaviours / methods
  calling: function () {
    console.log("Call to chinni");
  },

  playPUBG: function () {
    console.log("Intro music -> Shoot enemy -> close and sleep");
  },

  takePicture: function () {
    console.log("Smile please -> Nice, kepp smiling like this");
  },
};

console.log(mobile1);
console.log(typeof mobile1);
*/

// #2) Object.create()
// =======================================

/*
let mobile2 = Object.create({});
// Attributes / Properties
mobile2.color = "black";
mobile2.apple = "apple";

// Actions / behaviours / methods
mobile2.calling = function () {
  console.log("Call to chinni");
};

(mobile2.playPUBG = function () {
  console.log("Intro music -> Shoot enemy -> close and sleep");
}),
  (mobile2.takePicture = function () {
    console.log("Smile please -> Nice, kepp smiling like this");
  }),
  console.log(mobile2);
console.log(typeof mobile2);
*/

// #3) Functions are objects in javascript
// =======================================
// we can create objects by using factory function or constructor function

/*
function Mobilee() {
  return "mobile";
}
let mobile3 = new Mobilee();

// Attributes / Properties
mobile3.color = "black";
// mobile3[color]= "black";
mobile3.apple = "apple";
// mobile3[apple] = "apple";

// Actions / behaviours / methods
mobile3.calling = function () {
  console.log("Call to chinni");
};

(mobile3.playPUBG = function () {
  console.log("Intro music -> Shoot enemy -> close and sleep");
}),
  (mobile3.takePicture = function () {
    console.log("Smile please -> Nice, kepp smiling like this");
  }),
  console.log(mobile3);
console.log(typeof mobile3);
*/

// #4) Using Classes (*IMP)
// =======================================

/*
class Mobileee {}
let mobile4 = new Mobileee();

// Attributes / Properties
mobile4.color = "black";
mobile4.apple = "apple";

// Actions / behaviours / methods
mobile4.calling = function () {
  console.log("Call to chinni");
};

(mobile4.playPUBG = function () {
  console.log("Intro music -> Shoot enemy -> close and sleep");
}),
  (mobile4.takePicture = function () {
    console.log("Smile please -> Nice, kepp smiling like this");
  }),
  console.log(mobile4);
console.log(typeof mobile4);
*/

// normal get and set methods
// Example
// Blue Print
// #1 Creating class
// class Mobile {
//   constructor(name, color) {
//     this.name = name;
//     this.color = color;
//   }

//   // get methods
//   calling() {
//     console.log("Call to chinni");
//   }

//   playGame() {
//     console.log("Playing games");
//   }

//   // set methods
//   setName(newName) {
//     this.name = newName;
//   }

//   setAge(age) {
//     // property      = parameter // property name your wish but when calling exact use that name ,parameter name should be same
//     this.instanceAge = age;
//   }
// }

// // // #2 Creating/Instantiating objects by using class
// let redmi = new Mobile("Redmi Note 7", "Black");
// let apple = new Mobile("Apple", "silver");
// console.log(redmi);
// console.log(apple);

// // // #3 Getting/Setting the properties and actions/methods with created object(instance).
// console.log(redmi.color);
// console.log(redmi.name);
// redmi.calling();

// redmi.setName("Redmi Note 9 Pro");
// console.log(redmi.name);

// redmi.setAge(50);
// console.log(redmi.instanceAge);
// apple.setAge(40);
// console.log(apple.instanceAge);

// // #4 creating prototype
// Mobile.prototype.iamMostSelling = function () {
//   console.log(`${this.name} is most selling`);
// };
// console.log(redmi);
// redmi.iamMostSelling();

// Mobile.prototype.iamCool = `Iam  cool`;
// console.log(redmi);
// console.log(redmi.iamCool);

// ======================================
// 4) Encapsulation/Data Hiding
// ======================================
// #1) Creating Encapsulated class
// #2) Creating/Instantiating objects by using class
// #3) Getting/Setting the properties and actions with created object.

/*
// #1) Creating Encapsulated class
class Bank {
  constructor(name, account_no, account_type) {
    var name = name;
    var account_no = account_no;
    var account_type = account_type;

    // get methods
    this.getName = () => {
      return name;
    };
    this.getAccountNum = () => {
      return account_no;
    };
    this.getAccountType = () => {
      return account_type;
    };

    // set methods
    this.setName = (newName) => {
      name = newName;
    };
    this.setAccountNumber = () => {
      account_no = Math.floor(Math.random() * 9000000000);
    };
    this.setAccountType = (accountType) => {
      account_type = accountType;
    };
  }
}

// #2) Creating/Instantiating objects by using class
let venkatesh = new Bank("Venkatesh", null, "Savings");
let chinni = new Bank("Chinni", null, "Current");

// #3) Getting/Setting the properties and actions with created object.

venkatesh.setAccountNumber();
console.log(venkatesh.getAccountNum());
venkatesh.account_no = 123;
console.log(venkatesh.getAccountNum());
// console.log(venkatesh.name);
// venkatesh.setName("Vivek");
// console.log(venkatesh.getName());
// venkatesh.setAccountNumber();
// console.log(venkatesh.getAccountNum());
// console.log(chinni.getName());
// chinni.setAccountNumber();
// console.log(chinni.getAccountNum());
*/

// ======================================
// 5) Abstraction
// ======================================
// #1) Creating Abstract class
// #2) Creating/Instantiating objects by using class
// #3) Getting/Setting the properties and actions with created object(instance).

/*
// #1) Creating Abstract class
class Mobile {
  constructor(name, color, initialCharging) {
    this.name = name;
    this.color = color;
    this.initialCharging = initialCharging;
    var currentCharging = 0;
    var chargingDetails = (charge) => {
      currentCharging = this.initialCharging + charge;
      if (currentCharging > 100) {
        throw Error("Mobile is fully charged");
      }
      console.log("Cureent Charging " + currentCharging);
    };

    this.plugInCharge = (charge) => {
      chargingDetails(charge);
    };
  }

  // get methods
  calling() {
    console.log("Call to chinni");
  }

  playGame() {
    console.log("Playing games");
  }

  // set methods
  setName(newName) {
    this.name = newName;
  }
}

// #2) Creating/Instantiating objects by using class
let redmi = new Mobile("Redmi Note 7", "Black", 20);
let apple = new Mobile("Apple", "silver", 20);

// #3) Getting/Setting the properties and actions with created object(instance).
// redmi.plugInCharge(30);
// redmi.currentCharging = 200;
console.log(redmi.name);
console.log(redmi.color);
// console.log(redmi.currentCharging);
// console.log(redmi.chargingDetails());
redmi.plugInCharge(70);
// redmi.plugInCharge(100);
*/

// ======================================
// 6) Inheritance
// ======================================
// #1) Creating Parent class
// #2) Extending Parent class to child class
// #3) Extending Parent class to One more child class
// #4) Creating/Instantiating objects by using class
// #5) Getting/Setting the properties and actions with created object(instance).

/*
// #1) Creating Parent class
class Person {
  constructor(name, designation) {
    this.name = name;
    this.designation = designation;
  }
  learn() {
    console.log("Learning something");
  }
  eat() {
    console.log("Eating");
  }
  sleep() {
    "Sleeping";
  }
}

// #2) Extending Parent class to child class
class Developer extends Person {
  constructor(name, designation, companyName) {
    super(name, designation);
    this.companyName = companyName;
  }
  coding() {
    console.log("Javascript coding...");
  }
}

// #3) Extending Parent class to One more child class
class Dancer extends Person {
  constructor(name, designation, schoolName) {
    super(name, designation);
    this.schoolName = schoolName;
  }
  dancing() {
    console.log("Classical Dancing...");
  }
}

// #4) Creating/Instantiating objects by using class
// let person = new Person("Human", "Nothing");
// console.log(person);

// let venkatesh = new Developer(
//   "Venkatesh",
//   "Full Stack Developer",
//   "Doodleblue"
// );
// console.log(venkatesh);

let ramani = new Dancer("Ramani", "Classical Dancer", "Dancing School");
console.log(ramani);

// #5) Getting/Setting the properties and actions with created object(instance).
// venkatesh.coding();
// venkatesh.eat();
// venkatesh.learn();

ramani.dancing();
ramani.eat();
ramani.learn();
*/

// ======================================
// 7) Polymorphism
// ======================================
// #1) Creating Parent class
// #2) Extending Parent class to child class
// #3) Extending Parent class to One more child class
// #4) Creating/Instantiating objects by using class
// #5) Getting/Setting the properties and actions with created object(instance).

/*
// #1) Creating Parent class
class Person {
  constructor(name, designation) {
    this.name = name;
    this.designation = designation;
  }
  learn() {
    console.log("Learning something");
  }
  eat() {
    console.log("Eating");
  }
  sleep() {
    "Sleeping";
  }
}

// #2) Extending Parent class to child class
class Developer extends Person {
  constructor(name, designation, companyName) {
    super(name, designation);
    this.companyName = companyName;
  }
  coding() {
    console.log("Javascript coding...");
  }
  learn() {
    console.log("Learning OOPS Concepts");
  }
}

// #3) Extending Parent class to One more child class
class Dancer extends Person {
  constructor(name, designation, schoolName) {
    super(name, designation);
    this.schoolName = schoolName;
  }
  dancing() {
    console.log("Classical Dancing...");
  }
  learn() {
    console.log("Learning Bharatha Natyam");
  }
}

// #4) Creating/Instantiating objects by using class
let person = new Person("Human", "Nothing");
console.log(person);

let venkatesh = new Developer(
  "Venkatesh",
  "Full Stack Developer",
  "Doodleblue"
);
console.log(venkatesh);

let ramani = new Dancer("Ramani", "Classical Dancer", "Dancing School");
console.log(ramani);

// #5) Getting/Setting the properties and actions with created object(instance).
// venkatesh.coding();
// venkatesh.eat();
venkatesh.learn();

// ramani.dancing();
// ramani.eat();
ramani.learn();
person.learn();
*/

// // my practice
// // constructor function // parent
// function CreateCar(color, brand) {
//   this.color = color;
//   this.brand = brand;
// }

// console.log(CreateCar);
// console.log(CreateCar.name);
// console.log(CreateCar.length);
// console.log(typeof CreateCar);

// // creating instances or objects // child or children
// let car1 = new CreateCar("blue", "Audi");
// let car2 = new CreateCar("red", "Tata");
// console.log(car1);
// console.log(car2);

// // acessing instance properties
// console.log(car1.color);
// console.log(car1.brand);
// console.log(car2.color);
// console.log(car2.brand);

// console.log(car1.constructor);
// console.log(car2.constructor);

// console.log(car1 instanceof CreateCar);
// const bike = "yamaha";
// console.log(bike instanceof CreateCar);

// console.log(CreateCar.prototype);

// CreateCar.prototype.iamHero = function () {
//   console.log(`${this.brand} is a hero`);
// };
// console.log(car1);
// console.log(car2);

// console.log(CreateCar);
// console.log(CreateCar.prototype);
// console.log(car1.__proto__);

// console.log(CreateCar.prototype === car1.__proto__);
// // or
// console.log(CreateCar.prototype.isPrototypeOf(car1));

// CreateCar.prototype.species = "Homo Sapiens";
// console.log(car1);
// console.log(car2);

// console.log(car1.hasOwnProperty("color"));
// console.log(car1.hasOwnProperty("brand"));
// console.log(car1.hasOwnProperty("species"));
// console.log(car1.hasOwnProperty("iamHero"));
// console.log(car1.hasOwnProperty("rock"));

///////////////////////////////////////////////
/* // MY DEFINITONS
// prototype property/object is a property that it has all the methods and properties present which are defined on the constructor function.
// this prototype property will we be shared across all instances of its constructor function
// methods and properties which are available in the prototype property can be accessed or used for all the instances which are created from its constructor function.
// This process is called prototypal inheritance.
*/

//  vvv imp
// prototype // prototype property // object
// [[prototype]] : Object
// prototype is nothing but object
// console.log(Object.prototype);
// it has collection of methods and properties which are defined on the constructor function
// those methods and properties can be accessed for all the instances(objects) is called prototypal inheritance.
///////////////////////////////////////////////

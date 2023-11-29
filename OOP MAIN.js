////////////////////////////////
// OBJECT ORIENTED PROGRAMMING
////////////////////////////////
// what are objects?
// what is object oriented programming(oop)?

// To understand oop we need to understand these topics
// object basics, nested objects, dot notation, bracket notation
// this keyword basics and advanced
// Methods to creating objects
// we have multiple methods to create objects
// (1) Using Object Literals
// (2) Using Factory function
// (3) Using Constructor function
// -> constructor property
// -> Differnces between Factory functions and Constructor functions
// -> // Default Function properties and Methods

// ->  what are built in constructor functions
// -> what is prototype or prototype property
// -> prototypal inheritance
// -> prototype chain
// -> Prototypal Inheritance on Built in Objects
// (4) Using JS Classes
// Keywords : class,constructor(),super,extends
// Normal get and set methods
// Setters and Getters (special get and set methods)
// Static Methods
// (5) Using Object.create()
// functions default methods like call,apply,bind
// Inheritance between Classes: Constructor Functions
// Inheritance between Classes: ES6 Classes
// Inheritance between Classes: Object.create()
// THE 4 FUNDAMENTAL PRINCIPLES OF OOP
// (1) Abstraction
// (2) Encapsulation
// (3) inheritance
// (4) polymorphism
// Property Lookup (can call prototype chain)

///////////////////////////
// NOTES
///////////////////////////

// what are objects in JS?
// In real world a person is an object,a chair is object
// object's properties : black hair,black eyes,faie skin
//  object's actions : eat,sleep,walk,play,study
/*
// definition : An object is a data type that allows you to store key(properties)-value pairs.
// objects can store strings,number,boolean,null,undefined and arrays,functions and also objects
*/

// what is object oriented programming(oop)?
/*
// Object-Oriented Programming(oop) is a programming style based on classes and objects.grouping data and methods inside a box.
// OOP was developed to make code looks nicer,easier to understand and easier to maintain.
*/
// OOP was developed to make code more flexible and easier to maintain.

// Note: JavaScript is not an object-oriented language. Neither is it completely a functional language. JavaScript is a prototype-based procedural language. It supports both functional and object-oriented patterns of programming.
/*
// The 4 fundamental priciples of OOP
// 1) Abstraction
// 2) Encapsulation
// 3) inheritance
// 4) polymorphism
*/

// To understand oop we need to understand these topics
// object basics, nested objects, dot notation, bracket notation
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
// this keyword basics and advanced
// ======================================

// Methods to creating objects
// we have multiple methods to create objects
// ======================================
// // (1) Using Object Literals(Basic style)
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
// defintion : factory function is way to create new objects
// factory functions are nothing but blue print for creating objects
// functionName should follow camelCase

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
// definition : constructor function is a function used to create objects on calling with the new operator.
// constructor functions are nothing but blue print for creating objects
// To create an object from a constructor function, we use the new keyword.
// Note: It is considered a good practice to capitalize the first letter of your constructor function.

// The new Operator
// when a function is called with new,it does the following steps
// (1) creates an empty object and assigns to this
// this = { }; (implicitly)
// (2) Return this
// Return this (implicitly)

// jonas
// new {} is created
// function is called, this = {}
// {} linked to prototype
// function automatically return {}

// CONSTRUCTOR FUNCTION SYNTAX
// function functionName(paramater1,paramater2,...){
// this.property1 = parameter1;
// this.property2 = parameter2;
// ......
// ......
// }
// let myObject = new FunctionName(argument1,argument2,...)

// // EXAMPLE 1
// function CreateCar(color, brand) {
//   this.color = color;
//   this.brand = brand;
//   this.start = function () {
//     console.log("started");
//   };
// }

// // creating new objects
// let car1 = new CreateCar("blue", "Audi");
// let car2 = new CreateCar("red", "Tata");
// let car3 = new CreateCar("green", "BMW");
// // created objects are called instances

// console.log(car1);
// console.log(car2);
// console.log(car3);

// // car1 is instance
// car1.start(); // is instance method
// // car1.color,car1.brand are instance properties
// console.log(CreateCar); // returns constructor function
// console.log(CreateCar.name); // returns constructor function name
// console.log(CreateCar.length); // returns number of parameters we pass to the function
// console.log(typeof CreateCar); // returns what type CreateCar is

// -> constructor property
// constructor property should use on children to know which parent created him.
// console.log(car1.constructor); // returns parent(from which constructor function car1(child) is made )

// name = This property returns the name of the function
// length = This property returns the number of parameters we pass to the function

// you can say Createcar or constructor function is a parent
// car1,car2,car3 are instances or children

// // EXAMPLE 2
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
// john.fullName();
// bob.fullName();
// susy.fullName();

// ======================================
// -> Differnces between Factory functions and Constructor functions
// ======================================
// Factory functions
// (1) Follows camelCase notation
// (2) No need of new Operator for function calling
// (3) Explicitly need to return the Object

// Constructor functions
// (1) Allows PascalCase notation
// (2) Need new Operator for function calling
// (3) create object returns implicitly
// ======================================
// -> Default Function properties and Methods
// Properties
// ======================================
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
// ======================================
// ->  what are built in constructor functions
// ======================================
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
// -> what is prototype or prototype property
// ======================================
// prototype // prototype property // object
// [[prototype]] : Object
// definition : prototype is nothing but object it has all the methods and properties present which are defined on the constructor function.
// this prototype property will we be shared across all instances of its constructor function
// methods and properties which are available in the prototype property can be accessed or used for all the instances which are created from its constructor function.
// This process is called prototypal inheritance.
/*
// Easiest definiton of prototypal inheritance
defintion : Prototypal inheritance allows objects to inherit peoperties and methods from parent objects.
*/

// Accessing Array constructor prototype
// console.log(Array.prototype); // it shows all methods and properties an array can use

// Array
// Accessing prototype of instance
// let myArray = new Array("a", 2, true);
// console.log(Object.getPrototypeOf(myArray));

// console.log(Object.prototype);

/*
// Prototypes

const Person = function (firstName, birthYear) {
  // console.log(this);
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // (bad practice)Never create a method inside a contructor function
  // this.calcAge = function(){
  //  console.log(2037-this.birthYear);
  // }
};

const jonas = new Person("Jonas", "1991");
const matilda = new Person("Matilda", 2017);
const jack = new Person("Jack", 1975);
console.log(jonas);
console.log(matilda, jack);

console.log(jonas instanceof Person);
const jay = "Jay";
console.log(jay instanceof Person);

// // Prototypes
console.log(Person.prototype);

// // (good practice) Always create methods using prototype property outside the construction function
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
jonas.calcAge(); // this = jonas
matilda.calcAge(); // this = matilda
jack.calcAge(); // this = jack

// Any object always has access to the methods and properties from its prototype and the prototype of jonas and matilda is Person.prototype

console.log(Person.prototype);
console.log(jonas.__proto__);

console.log(jonas.__proto__ === Person.prototype);
console.log(matilda.__proto__ === Person.prototype);

// // IMP REMEMBER
console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(jack));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = "Homo Sapiens"; // this property will show in jonas,matilda,jack prototype
console.log(jonas, matilda, jack);
console.log(jonas.species, matilda.species, jack.species);

Person.prototype.iamHero = function () {
  console.log(`${this.firstName} is a Hero`);
};
jonas.iamHero();
console.log(jonas, matilda, jack);
// see iamHero method will be added to prototype [[prototype]] : Object

// // own properties or own methods are only the ones that are declared directly in the object itself
// // species property and iamHero method is not declared in the Person constructor function. so species and iamHero is not own property of Person.
// // It is created outside of that constructor function.
// // so it will show up in instances prototype [[prototype]] : Object
// console.log(jonas, matilda, jack);
// console.log(Person);
// console.log(Person.prototype);

// // WE CAN CHECK THE PROPERTY OR METHOD, IS OWN OF THAT OBJECT(instance) OR NOT
console.log(jonas.hasOwnProperty("firstName")); // true
console.log(jonas.hasOwnProperty("species")); // false

// creating prototype means creating a method or property outside of the constructor function.
// All the instances created from the constructor function can use prototype(property or method) is called prototypal inheritance.
// so All 3 instances jonas,matilda,jack can use calcAge is called prototypal inheritance.

// creating prototype which means creating a method or property
Person.prototype.species = "Homo Sapiens";
console.log(jonas.species);
console.log(matilda.species);
console.log(jack.species);

// we can check constructor function(Person) prototype and instances(john,matilda,jack) prototype are same or not
console.log(Person.prototype === jonas.__proto__);
console.log(Person.prototype === matilda.__proto__);
console.log(Person.prototype === jack.__proto__);

// checking what prototypes are created in Person
console.log(Person.prototype); // species and calcAge
console.log(jonas.__proto__); // species and calcAge
console.log(matilda.__proto__); // species and calcAge
console.log(jack.__proto__); // species and calcAge

// checking Person prototypes and instances(john,matilda,jack) prototypes are same or not
console.log(Person.prototype === jonas.__proto__); // same prototype
console.log(Person.prototype === matilda.__proto__); // same prototype
console.log(Person.prototype === jack.__proto__); // same prototype

// IMP ********** if we use word prototype means we are creating property or method outside the constructor function
// calcAge method is prototype
// species property is prototype
*/

// ======================================
// -> prototypal inheritance
// ======================================
/*
// Easiest definiton of prototypal inheritance
defintion : Prototypal inheritance allows objects to inherit peoperties and methods from parent objects.
*/
/*
// Parent Object (prototype)
const vehicle = {
  type: "Car",
  drive() {
    console.log("Driving.....");
  },
};

// Creating a child object using Object.create()
const bmw = Object.create(vehicle);
console.log(bmw.type); // able to access parent property means inheriting from parent
bmw.drive(); // able to access parent method means inheriting from parent
*/

// ======================================
// -> prototype chain
// ======================================

// ******** WHAT IS PROTOTYPE CHAIN?
// john is connected to prototype
// The ability of looking up methods and properties in a prototype is what we called prototype chain.
// so the jonas object and it,s prototype basically form a prototype chain.

// PROTOTYPE CHAIN : Series of links between objects,linked through prototypes (similar to the scope chain)
// object.prototype is usually the top of the chain which means that it,s prototype is null

// ======================================
// -> Prototypal Inheritance on Built in Objects
// ======================================

/*
console.log(jonas.__proto__); // points to Person prototype
console.log(jonas.__proto__.__proto__); // this is Object.prototype (top of the prototype chain) // points to built in built in objects prototype
console.log(Object.prototype); // same as above one

console.log(jonas.__proto__.__proto__.__proto__); // there is no prototype // so null

console.log(jonas.hasOwnProperty("firstName")); // true
console.log(jonas.hasOwnProperty("species")); // false

// hasOwnProperty is a property or method from built in object

// ********************
// Example
// prototype chain
// jonas checking where is hasOwnProperty
// jonas looking first hasOwnProperty in Person but not found so looking hasOwnProperty in built in object then found hasOwnProperty in built in object.
// this lookup is called prototype chain.
// ********************

// if you want see the Person constructor function written code location
// console.log(Person); // click that result then that will take you to where that constructor function code written on jonas Basics or on that page
// console.log(Person.prototype);
console.log(Person.prototype.constructor); // click that result then that will take you to where that constructor function code written on jonas Basics or on that page

console.dir(Person.prototype.constructor); // ƒ Person(firstName, birthYear)

console.log(Array.prototype);
const arr = [3, 6, 6, 5, 6, 9, 9];
console.log(arr);
console.log(arr.__proto__); // [constructor: ƒ, at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, …] //
console.log(arr.__proto__ === Array.prototype); // new Array === []

console.log(arr.__proto__.__proto__);
console.log(arr.__proto__.__proto__.__proto__); // level 1 arrays methods level 2 object methods level 3 null
console.log(arr);
*/

/*
// Never do this it is only for educational knowledge purpose only
// we added a new method to the prototype property of the array constructor and so therefore, all arrays will inherit this method
// we can use this created method for any array
Array.prototype.unique = function () {
  return [...new Set(this)]; // new Set() gives unique elements
};
console.log(arr.unique());

const arr1 = [1, 1, 2, 3, 4, 5, 4, 3, 2, 1];
console.log(new Set(arr1));
console.log(new Set([1, 1, 2, 3, 4, 5, 4, 3, 2, 1]));

const h1 = document.querySelector("h1");
// console.log(h1);
console.dir(h1); // see prototype
console.dir((x) => x + 1); // see prototype
*/

// ======================================
// (4) Using JS Classes (IMP)
// ======================================
/*
// Keywords : class,constructor(),super,extends

// class definition : class is a special type of function used to create objects.
// class is blueprint for creating objects.
// we can create any number of objects with the same properties and methods(actions) by using classes.

// we can say class is parent, created objects/instances from the class are children
// class = Parent , instance = child, instances = children

//classes : classes serve as blueprints for creating objects and their structure and behaviour.

// Advantages of classes
// (1) Object Creation
// (2) Encapsulation
// (3) Inheritance
// (4) Code Reusability
// (5) Polymorphism
// (6) Abstraction

// CLASS SYNTAX
// class MyClass {
//   constructor(property1, property2,..) {
//     this.property1 = property1;
//     this.property2 = property2;
//     .....
//   }
//   method1() {...}
//   method2() {...}
// }

// let myObject = new MyClass(property1, property2);

// constructor method
// The constructor method is a special method of a class for creating and initializing an object of that class
//   constructor(property1, property2) {
//     this.property1 = property1;
//     this.property2 = property2;
//   }

// Syntax:

// class classname {
//   constructor(parameter) {
//     this.classname = parameter;
//   }
// }

// EXAMPLE
// class Declaration
class PersonCl {
  // constructor is the method of class so it must called constructor only
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // instance methods
  // Methods will be added to .prototype property so that all the instances can have access to them
  // But even if you create prototype outside of the class it will also works same
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`sir/ madam ${this.fullName}`);
  }
}

const jessica = new PersonCl("Jessica Davis", 1996); // instance
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);
jessica.greet();

// get prototype of PersonCl
console.log(PersonCl.prototype);
// get prototype of instances
console.log(jessica.__proto__);
// or using below method we can get prototype of jessica
console.log(Object.getPrototypeOf(jessica));

// checking prototype of PersonCl and jessica are same or not
// why we to need to check
// Because make sure we are applying correct prototype(method or property) to jessica so that we can get desired result or output
console.log(PersonCl.prototype === jessica.__proto__);
// or
console.log(PersonCl.prototype === Object.getPrototypeOf(jessica));

// BEST PRACTICE creating prototypes after constructor method
// But creating prototype ouside of the class also works same but use this whenever it is necessary only

// rewriting greet() method
PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.fullName}`);
};
jessica.greet();

// creating prototype (method or property)
PersonCl.prototype.iamHero = function () {
  console.log(`${this.fullName} is a hero`);
};
console.log(jessica);
jessica.iamHero();
PersonCl.prototype.species = "Homo sapiens";
console.log(jessica);
console.log(jessica.species);

// imp points
// 1. Classes are NOT hoisted, function declarations are hoisted which means we can use them before they are declared in the code but with Classes that doesn't work.
// 2. Classes are first-class citizens, which means we can pass them into functions as arguments and also return them from functions that is because class are really just a special kind of function behind the scenes.
// 3. Classes are executed in strict mode

// 4. At last the question is which one to use constructor functions or Classes -> personal preference
// -> if you want to use Classes make to understand 100% of constructor functions,prototype,prototypal inheritance,prototype chain
*/

// ======================================
// Normal get and set methods
// ======================================
// normal get and set set methods means just functions

/*
// normal get and set methods
// Example
// Blue Print
// #1 Creating class
class Mobile {
  constructor(name, color) {
    this.name = name;
    this.color = color;
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

  setAge(age) {
    // property      = parameter // property name your wish but when calling exact use that name ,parameter name should be same
    this.instanceAge = age;
  }
}

// // // #2 Creating/Instantiating objects by using class
let redmi = new Mobile("Redmi Note 7", "Black");
let apple = new Mobile("Apple", "silver");
console.log(redmi);
console.log(apple);

// // // #3 Getting/Setting the properties and actions/methods with created object(instance).
console.log(redmi.color);
console.log(redmi.name);
redmi.calling();

redmi.setName("Redmi Note 9 Pro");
console.log(redmi.name);

redmi.setAge(50);
console.log(redmi.instanceAge);
apple.setAge(40);
console.log(apple.instanceAge);

// // #4 creating prototype
Mobile.prototype.iamMostSelling = function () {
  console.log(`${this.name} is most selling`);
};
console.log(redmi);
redmi.iamMostSelling();

Mobile.prototype.iamCool = `Iam  cool`;
console.log(redmi);
console.log(redmi.iamCool);
*/

// ======================================
// Setters and Getters (special get and set methods)
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

// * setters and getters will be very useful ib data validation

/*
// EXAMPLE 1
// GETTERS / SETTERS

class Mobile {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  // normal get methods
  calling() {
    console.log("call to chinni");
  }

  playGame() {
    console.log("playing games");
  }

  // normal set methods
  setName(newName) {
    this.name = newName;
  }

  setAge(age) {
    this.instaceAge = age;
  }

  // special get method
  get getCalling() {
    console.log("CALL TO CHINNI");
  }

  get getPlayingGame() {
    console.log("PLAYING GAMES");
  }

  // special set method
  set setNewName(anyName) {
    this.name = anyName;
  }

  set setNewAge(anyAge) {
    this.Age = anyAge;
  }
}

// creating objects/instances from Mobile class
let redmi = new Mobile("redmi", "Black");
let apple = new Mobile("apple", "Silver");
console.log(redmi.name);
console.log(apple.name);
// calling get methods
redmi.calling();
apple.calling();
// calling set methods
redmi.setName("Redmi Note 9 Pro");
console.log(redmi.name);
apple.setName("Apple 10 Pro");
console.log(apple.name);

// calling SPECIAL get methods
// redmi.getCalling(); // error // this style is for normal get method
redmi.getCalling; // calling like normal property like redmi.name
redmi.getPlayingGame;
apple.getCalling;
apple.getPlayingGame;

// calling SPECIAL set methods
// redmi.setNewName("REDMI ROCKZZ"); // error // this is wrong // this style is for normal set method
redmi.setNewName = "REDMI ROCKZZ"; // special set method style
console.log(redmi.name);
apple.setNewName = "APPLE KING";
console.log(apple.name);

// redmi.setNewAge(100); // error // this is wrong // this style is for normal set method
redmi.setNewAge = 150; // special set method style
console.log(redmi.Age);
apple.setNewAge = 200;
console.log(apple.Age);
*/

/*
// EXAMPLE 2
const account = {
  owner: "jonas",
  movements: [200, 530, 120, 300],

  get latest() {
    // wanted last one
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    // adding element at last
    this.movements.push(mov);
  },
};

console.log(account.latest);

console.log(account.movements);

account.latest = 50;
console.log(account.movements);
account.latest = 100;
console.log(account.movements);
*/

// ======================================
// Static Methods
// ======================================
/*
// What is a Static Method in JavaScript?
// A static method is a method that is defined in a class using the static keyword.
//  Such a method turns out to be slightly different than a usual JavaScript method. The way the static method is different is that 
// it cannot be accessed by any of the instantiated objects of the class. 
// Rather, the static method can only be accessed using the class name because it directly belongs to the class.

// we used static keyword for the only purpose of class can have access hey method
// instances will not have access to hey method means instances cannot inherit

// EXAMPLE
// STATIC METHOD
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`sir/ madam ${this.fullName}`);
  }

  // static method;
  static hey() {
    console.log("Hey there");
    // console.log(this);
  }
}

const jessica = new PersonCl("Jessica Davis", 1996); // instance
const walter = new PersonCl("Walter White", 1965);
console.log(PersonCl); // returns that class or constructor function
console.log(PersonCl.prototype);
PersonCl.hey(); // class can have access to hey()
// walter.hey(); // instances cannot inherit or access hey() when we used static keyword
// jessica.hey();
jessica.calcAge();
jessica.greet();
*/

// ======================================
// (5) Using Object.create()
// ======================================
/*
// The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.

// up until now we have used methods like constructor functions,classes to create/produce/make objects(or instances).

// Now we use another method Object.create

// no prototype property,no constructor functions and no new operator
// so instead we can use Object.create to manually set the prototype of an object to any other object that we want
*/

/*
// EXAMPLE 1
// general object making syntax
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
console.log(PersonProto);
// we can call above object as prototype
// using that prototype we will create new objects

// creating new objects
const steven = Object.create(PersonProto);
// steven linked to PersonProto object
console.log(PersonProto);
console.log(steven);
steven.name = "Steven";
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__);
console.log(steven.__proto__ === PersonProto);
// // or either way works
console.log(Object.getPrototypeOf(steven) === PersonProto);

const sarah = Object.create(PersonProto); // Object.create(PersonProto); so that sarah can use PersonProto  stored methods and properties
console.log(sarah);
sarah.init("Sarah", 1979); // creating sarah object or instance
console.log(sarah);
sarah.calcAge();

// creating a method for sarah only
sarah.calculateAge = function () {
  console.log(2000 - this.birthYear);
};
sarah.calculateAge();
// steven.calculateAge(); // error // this method is only for sarah // steven will not inherit
console.log(PersonProto);
console.log(steven);
console.log(sarah);
*/

/*
// The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.
// To understand the Object.create method, just remember that it takes two parameters. The first parameter is a mandatory object that serves as the prototype of the new object to be created. The second parameter is an optional object which contains the properties to be added to the new object.

// We will not deep dive into prototypes and inheritance chains now to keep our focus on the topic. But as a quick point, you can think of prototypes as objects from which other objects can borrow properties/methods they need.

// Imagine you have an organization represented by orgObject

const orgObject = { company: "ABC Corp" };
console.log(orgObject);
// And you want to create employees for this organization. Clearly, you want all the employee objects.

const employee1 = Object.create(orgObject, {
  name: { value: "Bharath Vallapa" },
});
const employee2 = Object.create(orgObject, {
  name: { value: "Ravi Teja" },
  age: { value: 20 },
  school: { value: "ssvm" },
});

console.log(employee1); // { company: "ABC Corp" } in prototype
console.log(employee1.name);
console.log(employee2);
console.log(employee2.name);

// above object another method i believe this is easy and clean
const orgObject2 = { company: "RRB Tunder" };
console.log(orgObject2);

const EmployeeOne = Object.create(orgObject2);
EmployeeOne.name = "Raizel Noblesse";
const EmployeeTwo = Object.create(orgObject2);
EmployeeTwo.name = "Anos Voldigod";
console.log(EmployeeOne);
console.log(EmployeeTwo);
console.log(EmployeeOne.name);
console.log(EmployeeTwo.name);

// method 3 // but in this method we can see function is used for creating employees name // not good method if we need privacy
const orgObject3 = {
  company: "DEMON KING CORP",
  name(name) {
    this.name = name;
  },
};
console.log(orgObject3);

const Emp1 = Object.create(orgObject3);
Emp1.name("Ravi Teja");
console.log(Emp1);
const Emp2 = Object.create(orgObject3);
Emp2.name("Anos Voldigod");
console.log(Emp2);
*/

// ======================================
// functions default methods like call,apply,bind
// ======================================
// from john smilga
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
// Inheritance between Classes: Constructor Functions
// ======================================
/*
///////////////
// before learning inheritance learn built in function methods call,apply,bind.
//////////////

// EXAMPLE
// constructor function inheritance example
// Person = parent constructor function
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

// Student = child constructor function
const Student = function (firstName, birthYear, course) {
  // Student inheritng Person methods
  Person.call(this, firstName, birthYear); // this refers to Person
  this.course = course; // this refers to Student
};

// linking protypes
Student.prototype = Object.create(Person.prototype);

// linked prototypes together so mike is instanceof Student and also Person and also Object
// we manually manipulated prototype chain because we linked Person and Student

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

// creating objects
const mike = new Student("Mike", 2020, "Computer Science");
console.log(mike);
console.log(mike.firstName); // inheriting property from Person
console.log(mike.birthYear); // inheriting property from Person
console.log(mike.course); // inheriting property from Student
mike.introduce(); // inheriting method from Student
mike.calcAge(); // inheriting method from Person

const tyson = new Student("Tyson", 2012, "Mechinical");
const anos = new Student("Anos", 1995, "Chemistry");
const anthony = new Student("Anthony", 1999, "Physics");
console.log(anos.firstName);
anos.introduce();
console.log(tyson.course);
tyson.calcAge();
tyson.introduce();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);
console.log(mike.__proto__.__proto__.__proto__);
console.log(mike.__proto__.__proto__.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

// linked prototypes together so mike is instanceof Student and also Person and also Object
// we manually manipulated prototype chain because we linked Person and Student

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
*/

// ======================================
// Inheritance between Classes: ES6 Classes
// ======================================

/*
// imp keywords // JS Classes - class,constructor()
// inheritence - super(),extends

Inheritance in javascript aids a new class to have all the functionality of another class while having its own functionality as well. *The inheritance in javascript primarily involves two segments:

Child class: The class which inherits the properties of another class is known as the child class.

Parent class: The class whose property is being inherited is known as the parent class.

Class Inheritance
To create a class inheritance, use the extends keyword.

A class created with a class inheritance inherits all the methods from another class:

The super() method refers to the parent class.

By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods.

Inheritance is useful for code reusability: reuse properties and methods of an existing class when you create a new class.
*/

/*
// SYNTAX
class Parent {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }
}

// simply put Child extends parent means child can use all methods and properties of Parent
class Child extends Parent {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first!
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }
}

// creating objects/instances can use Parent and Child properties and methods
// we can think of this instances are grand children for Parent and children for Child
// level 1 parent level 2 child level 3 grandchild
const martha = new Child("Martha Jones", 2012, "Computer Science");
const williams = new Child("Williams Sands", 2015, "Computer Science");
martha.calcAge(); // inheriting from Parent
martha.introduce(); // inheriting from Child
*/

/*
// EXAMPLE 1
// ***************
// class Declaration
// (parent class PersonCl)
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  whoAreyou() {
    return this;
  }
}

// to implement inheritance between ES6 classes we only need two ingredients extends keyword and super function.

// (child class StudentCl)
// (class StudentCl extends PersonCl {} means child can inherit parent methods and properties means child can use parent methods and properties)

// simply put child(StudentCl) extends parent means child can use all methods and properties of parent(PersonCl)

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first!
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  // overwriting or modifying calcAge() method
  // indeed this calaAge method over wrote the previous one from the parent class
  calcAge() {
    console.log(
      `I,m ${
        2037 - this.birthYear
      } years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentCl("Martha Jones", 2012, "Computer Science");
martha.introduce(); // accessing method from child class
martha.calcAge(); // accessing method from parent class
martha.greet(); // accessing method from parent class
console.log(martha);
console.log(martha.whoAreyou());
// In Class , this refers to the instance object means martha
// this = martha object

console.log(martha.__proto__);

const ragav = new StudentCl("Ragav Williams", 2008, "Computer Science");
ragav.introduce(); // accessing method from child class
ragav.calcAge(); // accessing method from parent class
ragav.greet(); // accessing method from parent class
console.log(ragav);
console.log(ragav.whoAreyou());
// In Class , this refers to the instance object means ragav
// this = ragav object

console.log(ragav.__proto__);
*/

/*
// EXAMPLE 2
// ***************
// ANIMAL CLASS = Parent
class Animal {
  constructor(name) {
    this.name = name;
  }
  eat() {
    return `${this.name} is eating!`;
  }
  makeSound() {
    return `${this.name} is shouting`;
  }
}

let animal1 = new Animal("gorilla");
console.log(animal1);
console.log(animal1.eat());
console.log(animal1.makeSound());

// // class
// // INHERITENCE
// // Inheritence is a mechanism by which a class inherits methods and properties from another class
// // Super Class -> Sub Class

// using extends keyword means we can use all methods and properties of parent class(Animal)
// Dog extends Animal means Dog(child) can use all methods and properties of Animal(parent)

// simply put child(Dog) extends parent means child can use all methods and properties of parent(Animal)

// DOG CLASS = child
class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  sniff() {
    return `${this.name} is sniffling`;
  }
}

let dog = new Dog("dog", "German Shepard");
console.log(dog);
console.log(dog.sniff());
console.log(dog.eat());
console.log(dog.makeSound());

// CAT CLASS = child
class Cat extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  knead() {
    return `${this.name} is kneading`;
  }
}

let cat = new Cat("cat", "Persian Cat");
console.log(cat);
console.log(cat.knead());
console.log(cat.eat());
console.log(cat.makeSound());
*/

// EXAMPLE 3 (TO UNDERSTAND this)
// ***************
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
// console.log(animal2.makeSound());

// let animal3 = new Animal1("dog");
// console.log(animal3);
// console.log(animal3.eat());
// // In Class , this refers to the instance object means animal3
// // this = animal3
// console.log(animal3.makeSound());

// ======================================
// Inheritance between Classes: Object.create()
// ======================================
/*
// Using “Object.create()” is the most basic way to create an inheritance model in JavaScript. Object.create() can be used to create a new object using the existing object as a prototype. The existing object is made available as a prototype making all the properties of the existing object available to the new object.

// The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.
*/

/*
// EXAMPLE
// general object making syntax
// PersonProto = Parent
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

// steven = child
const steven = Object.create(PersonProto);
console.log(steven);

// StudentProto = child
const StudentProto = Object.create(PersonProto); // empty object // now we can use this StudentProto to create new students
console.log(StudentProto);

StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

// studentjay = child = student1(can inherit(can use) methods from PersonProto and StudentProto)
const studentjay = Object.create(StudentProto);
studentjay.init("Jay", 2010, "Computer Science");
console.log(studentjay);

studentjay.introduce(); // inheriting from StudentProto
studentjay.calcAge(); // inheriting from PersonProto
*/

// THE 4 FUNDAMENTAL PRINCIPLES OF OOP
// (1) Abstraction
// (2) Encapsulation
// (3) inheritance
// (4) polymorphism
// ======================================
// (1) Abstraction
// ======================================

// Abstraction : Ignoring or hiding details that don't matter,allowing us to get an overview perspective of the thing we are implementing,instead of messing with details that don't really matter to our implementation.

/*
// JavaScript Abstraction
// An abstraction is a way of hiding the implementation details and showing only the functionality to the users. In other words, it ignores the irrelevant details and shows only the required one.

// Points to remember
// We cannot create an instance of Abstract Class.
// It reduces the duplication of code.
*/

/*
phone{
 charge
 volume
 voltage
 temperature

 homeBtn(){}
 volumeBtn(){}
 screen(){}
 verifyVolt(){}
 verifyTemp(){}
 vibrate(){}
 soundSpeaker(){}
 soundEar(){}
 frontCamOn(){}
 frontCamOff(){}
 rearCamOn(){}
 rearCamOff(){}
}
// Do we need above all these low-level details?
// No
// so we can ignore or hide details which are useless when implementing program

// Abstracting details(which means what we really need details)

 phone {
  charge
  volume

  homeBtn(){}
  volumeBtn(){}
  screen(){}
 }
// details have been abstracted away from phone.
*/

/*
// EXAMPLE
// *******
// #1) Creating Abstract class
// #2) Creating/Instantiating objects by using class
// #3) Getting/Setting the properties and actions with created object(instance).

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
// (2) Encapsulation/Data Hiding
// ======================================
// (2) Encapsulation
// Encapsulation : Keeping properties and methods private inside the class,so they are not accessible from outside the class.some methods can be exposed as a public interface(API)

/*
// (API -> Application Programming Interface means a software intermediary that allows two applications to talk to each other. APIs are an accessible way to extract and share data within and across organizations.

APIs are all around us. Every time you use a rideshare app, send a mobile payment, or change the thermostat temperature from your phone, you’re using an API.When you use one of the above apps, they connect to the Internet and send data to a server. The server then retrieves that data, interprets it, performs the necessary actions, and sends it back to your phone. The application then interprets that data and presents you with the information you wanted in a readable way. )
*/

/*
// Encapsulation
Encapsulation is a fundamental concept in object-oriented programming that refers to the practice of hiding the internal details of an object and exposing only the necessary information to the outside world. Encapsulation helps in maintaining the integrity of data and ensures that it is not accessed or modified inappropriately.

Encapsulation in JavaScript: In JavaScript, encapsulation can be achieved using two techniques: using closures and using classes
*/

/*
// Encapsulation Understanding Purpose 
User{
user
private password // private NOT accessible from outside the class!
private email // private NOT accessible from outside the class!

login(word){
 this.password === word // STILL accessible from outside the class!
}
Comment(text){
 this.checkSPAM(text) // STILL accessible from outside the class!
}
 // private NOT accessible from outside the class!
private checkSPAM(text){
 // Verify logic
}
}

// WHY?
// Prevents external code from accidentally manipulating internal properties/state

// Allows to change internal implementation without the risk of breaking external code
*/

/*
// EXAMPLE
// *******
// #1) Creating Encapsulated class
// #2) Creating/Instantiating objects by using class
// #3) Getting/Setting the properties and actions with created object.

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
// (3) inheritance
// ======================================
// Javascript accepts single inheritance only
// Inheritance is a mechanism that allows children to inherit features from parents.

// defintion : Inheritance is a mechanism that allows objects to inherit peoperties and methods from parent objects.

// Inheritance Understanding Purpose
// Human name,Learn(),Eat(),Sleep
// Dancer inherits these features name,Learn(),Eat(),Sleep from parents and his own Dancing()
// Developer inherits these features name,Learn(),Eat(),Sleep from parents and his own Coding

/*
// EXAMPLE
// *******
// #1) Creating Parent class
// #2) Extending Parent class to child class
// #3) Extending Parent class to One more child class
// #4) Creating/Instantiating objects by using class
// #5) Getting/Setting the properties and actions with created object(instance).

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
// venkatesh.learn();

ramani.dancing();
ramani.eat();
ramani.learn();
*/

// ======================================
// (4) polymorphism
// ======================================
// Polymorphism : A child class can overwrite a method it inherited from a parent class [it's more complex than that,but enough for our purposes].

// Polymorphism Understanding Purpose

/*
// Parent class
User{
 user
 password
 email

 login(password){
  // Login logic
 }
 sendMessage(str){
  // Sending logic
 }
}

// child class inherits from Parent(User)
Admin{
 user
 password
 email

 login(password,key){
  // DIFFERENT LOGIN
 }
 deleteUser(user){
  // Deleting logic
 }
}
// Own login method,Overwriting login method inherited from User

// child class inherits from Parent(User)
Author{
 user
 password
 email
 
 login(password){
  // MORE DIFFERENT
 }
 writePost(str){
  // Writing logic
 }
}
// Own login method,Overwriting login method inherited from User
*/

/*
// EXAMPLE
// *******
// #1) Creating Parent class
// #2) Extending Parent class to child class
// #3) Extending Parent class to One more child class
// #4) Creating/Instantiating objects by using class
// #5) Getting/Setting the properties and actions with created object(instance).

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

// ======================================
// Property Lookup (can call prototype chain)
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

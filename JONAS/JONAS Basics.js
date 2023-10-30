////////////////////////////////
// 001 - Welcome,Welcome,Welcome
////////////////////////////////
////////////////////////////////
// 002 - JavaScript Fundamentals - Part 1
////////////////////////////////
////////////////////////////////
// 003 - JavaScript Fundamentals - Part 2
////////////////////////////////
////////////////////////////////
// 004 - How tp Navigate This Course
////////////////////////////////
////////////////////////////////
// 005 - Developer Skills & Editor Setup
////////////////////////////////
////////////////////////////////
// 006 - [OPTIONAL] HTML & CSS Crash Course
////////////////////////////////
////////////////////////////////
// 007 - JavaScript in the Browser_DOM and Events Fundamentals
////////////////////////////////
////////////////////////////////
// 008 - How Javascript Works Behind the Scenes
////////////////////////////////

// ======================================
// 001 -
// ======================================
// ======================================
// 002 -
// ======================================
// ======================================
// 003 -
// ======================================
// ======================================
// 004 -
// ======================================
// ======================================
// 005 -
// ======================================
// ======================================
// 006 -
// ======================================
// ======================================
// 007 -
// ======================================
// ======================================
// 008 -
// ======================================
// ======================================
// 009 -
// ======================================
// ======================================
// 010 - The this Keyword
// ======================================
// ======================================
// 011 -
// ======================================
// ======================================
// 012 -
// ======================================
// ======================================
// 013 -
// ======================================
// ======================================
// 014 -
// ======================================

////////////////////////////////
// 009 - Data Structures,Modern Operators and Strings
////////////////////////////////
////////////////////////////////
// 010 - A Closer Look at Functions
////////////////////////////////
////////////////////////////////
// 011 - Working With Arrays
////////////////////////////////
////////////////////////////////
// 012 - Numbers,Dates,Intl and Timers
////////////////////////////////
////////////////////////////////
// 013 - Advanced DOM and Events
////////////////////////////////
////////////////////////////////
// 014 - Object Oriented Programming(OOP) With JavaScript
////////////////////////////////
// ======================================
// 001 - Section Intro
// ======================================
// ======================================
// 003 - What is Object Oriented Programming
// ======================================
// 1) what is object oriented programming (oop) ?

// THE FOUR FUNDAMENTAL OOP PRINCIPLES
// (1) Abstraction
// (2) Encapsulation
// (3) Inheritance
// (4) Polymorphism

// (1) Abstraction
// Abstraction : Ignoring or hiding details that don't matter,allowing us to get an overview perspective of the thing we are implementing,instead of messing with details that don't really matter to our implementation.

/*
// JavaScript Abstraction
// An abstraction is a way of hiding the implementation details and showing only the functionality to the users. In other words, it ignores the irrelevant details and shows only the required one.

// Points to remember
// We cannot create an instance of Abstract Class.
// It reduces the duplication of code.
*/

// EXAMPLE

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

// (3) Inheritance
//

// ======================================
// 004 - OOP in JavaScript
// ======================================

// ======================================
// 005 - Constructor Functions and the new operator
// ======================================
// const Person = function (firstName, birthYear) {
//   // console.log(this);
//   // Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   // (bad practice)Never create a method inside a contructor function
//   this.calcAge = function(){
//    console.log(2037-this.birthYear);
//   }
// };

// const jonas = new Person("Jonas", "1991");
// console.log(jonas);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

// const matilda = new Person("Matilda", 2017);
// const jack = new Person("Matilda", 1975);
// console.log(matilda, jack);

// instance property to check the jonas is really instance object (created from constructor function) or not if it is instance gives true or if it not an instance gives false.
// const jay = "Jay";
// console.log(jonas instanceof Person);
// console.log(matilda instanceof Person);
// console.log(jack instanceof Person);
// console.log(jay instanceof Person);

// ======================================
// 006 - Prototypes
// ======================================
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
console.log(jonas);

const matilda = new Person("Matilda", 2017);
const jack = new Person("Matilda", 1975);
console.log(matilda, jack);

console.log(jonas instanceof Person);

// Prototypes
console.log(Person.prototype);

// (good practice) Always create methods using prototype property outside the construction function
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
jonas.calcAge(); // this = jonas
matilda.calcAge(); // this = matilda
jack.calcAge(); // this = jack

// Any object always has access to the methods and properties from its prototype and the prototype of jonas and matilda is Person.prototype

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

// IMP REMEMBER
console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(jack));
console.log(Person.prototype.isPrototypeOf(Person));

// we can think prototype property as prototypeOfLinkedObjects

Person.prototype.species = "Homo Sapiens"; // this property will show in jonas,matilda,jack prototype
console.log(jonas, matilda, jack);
console.log(jonas.species, matilda.species, jack.species);

// own properties or own methods are only the ones that are declared directly in the object itself
// species property is not declared in the Person constructor function. so species is not own property of Person.
// It is created outside of that constructor function.

// WE CAN CHECK THE PROPERTY OR METHOD IS OWN OF THAT OBJECT(CONTRUCTOR FUNCTION) OR NOT
console.log(jonas.hasOwnProperty("firstName")); // true
console.log(jonas.hasOwnProperty("species")); // false

// ======================================
// 007 -Prototypal Inheritance and The Prototype Chain
// ======================================

// ======================================
// 008 - Prototypal Inheritance on Built in Objects
// ======================================

// ======================================
// 009 - Coding Challenge 1
// ======================================
// ======================================
// 010 - ES6 Classes
// ======================================
// ======================================
// 011 - Setters and Getters
// ======================================
// ======================================
// 012 - Static Methods
// ======================================
// ======================================
// 013 - Object.create
// ======================================
// ======================================
// 014 - Coding Challenge 2
// ======================================
// ======================================
// 015 - Inheritance between Classes: Constructor Functions
// ======================================
// ======================================
// 016 - Coding Challenge 3
// ======================================
// ======================================
// 017 - Inheritance between Classes: ES6 Classes
// ======================================
// ======================================
// 018 - Inheritance between Classes: Object.create
// ======================================
// ======================================
// 019 - Another Class Example
// ======================================
// ======================================
// 020 - Encapsulation Protected Properties and Methods
// ======================================
// ======================================
// 021 - Encapsulation Private Class Fields and Methods
// ======================================
// ======================================
// 022 - Chaining Methods
// ======================================
// ======================================
// 023 - ES6 Classes Summary
// ======================================
// ======================================
// 024 - Coding Challenge 4
// ======================================

////////////////////////////////
// 015 -
////////////////////////////////
////////////////////////////////
// 016 -
////////////////////////////////
////////////////////////////////
// 017 -
////////////////////////////////
////////////////////////////////
// 018 -
////////////////////////////////
////////////////////////////////
// 019 - Setting Up Git and Deployment
////////////////////////////////
////////////////////////////////
// 020 - The End_
////////////////////////////////

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

/*
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

// WE CAN CHECK THE PROPERTY OR METHOD, IS OWN OF THAT OBJECT(instance) OR NOT
console.log(jonas.hasOwnProperty("firstName")); // true
console.log(jonas.hasOwnProperty("species")); // false
*/

// ======================================
// 007 -Prototypal Inheritance and The Prototype Chain
// ======================================

/*
// Prototypal Inheritance
// Example
const Person = function (firstName, birthYear, favFood) {
  this.firstName = firstName;
  this.birthYear = birthYear;
  // this.favFood = this.favFood;
};

// if objects are created from constructor function then those objects are called instances(or instance objects).

// creating instances
const john = new Person("John", 1997);
const matilda = new Person("Matilda", 2017);
const jack = new Person("Jack", 1987);

// creating prototype which means creating a method or property outside of the constructor function
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

// All the instances created from the constructor function can use prototype(property or method) is called prototypal inheritance.
// so All 3 instances john,matilda,jack can use calcAge is called prototypal inheritance.
// john.calcAge();
// matilda.calcAge();
// jack.calcAge();

// creating prototype which means creating a method or property
Person.prototype.species = "Homo Sapiens";
// console.log(john.species);
// console.log(matilda.species);
// console.log(jack.species);
// End of Prototypal Inheritance Example

// imp points
// // WE CAN CHECK THE PROPERTY OR METHOD, IS OWN OF THAT OBJECT(instance) OR NOT
console.log(john.hasOwnProperty("firstName"));
console.log(john.hasOwnProperty("species"));
console.log(john.hasOwnProperty("calcAge"));

console.log(john); // calcAge and species will show in instances(john,matilda,jack) prototype by clicking [[Prototype]] : Object only bcoz that are created outside of constructor function

// we can check constructor function(Person) prototype and instances(john,matilda,jack) prototype are same or not
console.log(Person.prototype === john.__proto__);
console.log(Person.prototype === matilda.__proto__);
console.log(Person.prototype === jack.__proto__);

// checking what prototypes are created in Person
console.log(Person.prototype); // species and calcAge
console.log(john.__proto__); // species and calcAge
console.log(matilda.__proto__); // species and calcAge
console.log(jack.__proto__); // species and calcAge

// checking Person prototypes and instances(john,matilda,jack) prototypes are same or not
console.log(Person.prototype === john.__proto__); // same prototype
console.log(Person.prototype === matilda.__proto__); // same prototype
console.log(Person.prototype === jack.__proto__); // same prototype

// IMP ********** if we use word prototype means we are creating property or method outside the constructor function
// calcAge method is prototype
// species property is prototype

// ******** WHAT IS PROTOTYPE CHANGE?
// john is connected to prototype
// The ability of looking up methods and properties in a prototype is what we called prototype chain.
// so the john object and it,s prototype basically form a prototype chain.

// PROTOTYPE CHAIN : Series of links between objects,linked through prototypes (similar to the scope chain)
// object.prototype is usually the top of the chain which means that it,s prototype is null
*/

// ======================================
// 008 - Prototypal Inheritance on Built in Objects
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


console.log(Person); // click that result then that will take you to where that constructor function code written on jonas Basics or on that page
console.log(Person.prototype);
console.log(Person.prototype.constructor); // click that result then that will take you to where that constructor function code written on jonas Basics or on that page

console.dir(Person.prototype.constructor); // ƒ Person(firstName, birthYear)

const arr = [3, 6, 6, 5, 6, 9, 9];
console.log(arr.__proto__); // [constructor: ƒ, at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, …] //
console.log(arr.__proto__ === Array.prototype); // new Array === []

console.log(arr.__proto__.__proto__);
console.log(arr);

// Never do this it is only for educational knowledge purpose only
// we added a new method to the prototype property of the array constructor and so therefore, all arrays will inherit this method
// we can use this created method for any array
// Array.prototype.unique = function () {
//   return [...new Set(this)]; // new Set() gives unique elements
// };
// console.log(arr.unique());

// const arr1 = [1, 1, 2, 3, 4, 5, 4, 3, 2, 1];
// console.log(new Set(arr1));
// console.log(new Set([1, 1, 2, 3, 4, 5, 4, 3, 2, 1]));

const h1 = document.querySelector("h1");
// console.log(h1);
console.dir(h1); // see prototype
console.dir((x) => x + 1); // see prototype
*/

// ======================================
// 009 - Coding Challenge 1
// ======================================
/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/
// solution
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// const bmw = new Car("BMW", 120);
// const mercedes = new Car("Mercedes", 95);

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`when accelerated ${this.make} is going at ${this.speed} km/h`);
// };
// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(
//     `when applying brake ${this.make} is going at ${this.speed} km/h`
//   );
// };

// bmw.accelerate(); // 130
// bmw.accelerate(); // 140
// bmw.brake(); // 135
// bmw.accelerate(); // 145
// bmw.brake(); // 140
// mercedes.accelerate(); // 105
// mercedes.accelerate(); // 115
// mercedes.brake(); // 110
// mercedes.accelerate(); // 120
// mercedes.brake(); // 115

// ======================================
// 010 - ES6 Classes
// ======================================
// class Expression
// const PersonCl = class{}

/*
// classes
// The new version of JavaScript (ES6) introduced the use of classes instead of functions. Prior to ES6, there were only classes and, functions which are callable objects. A class in javascript is basically a blueprint or template of the object. New objects can be created from a class.

// Classes are similar to functions. Here, a class keyword is used instead of a function keyword. Unlike functions classes in JavaScript are not hoisted. The constructor method is used to initialize. The class name is user-defined.

// Syntax:

// class classname {
//   constructor(parameter) {
//     this.classname = parameter;
//   }
// }
*/

/*
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
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    console.log(name);
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // static method
  static hey() {
    console.log("Hey there");
    console.log(this);
  }
}

const jessica = new PersonCl("Jessica Davis", 1996); // instance
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

// get prototype of PersonCl
console.log(PersonCl.prototype);
console.log(jessica.__proto__);
// // or using below method we can get prototype of jessica
// console.log(Object.getPrototypeOf(jessica));

// checking prototype of PersonCl and jessica are same or not
// why we to need to check
// Because make sure we are applying correct prototype(method or property) to jessica so that we can get desired result or output
console.log(PersonCl.prototype === jessica.__proto__);
// or
console.log(PersonCl.prototype === Object.getPrototypeOf(jessica));

// BEST PRACTICE creating prototypes after constructor method
// But creating prototype ouside of the class also works same but use this whenever it is necessary only
// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
jessica.greet();

// imp points
// 1. Classes are NOT hoisted, function declarations are hoisted which means we can use them before they are declared in the code but with Classes that doesn't work.
// 2. Classes are first-class citizens, which means we can pass them into functions as arguments and also return them from functions that is because class are really just a special kind of function behind the scenes.
// 3. Classes are executed in strict mode

// 4. At last the question is which one to use constructor functions or Classes -> personal preference
// -> if you want to use Classes make to understand 100% of constructor functions,prototype,prototypal inheritance,prototype chain
*/

// ======================================
// 011 - Setters and Getters
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
const walter = new PersonCl("Walter White", 1965);
console.log(walter);
console.log(walter.fullName);

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
// 012 - Static Methods
// ======================================
/*
// What is a Static Method in JavaScript?
// A static method is a method that is defined in a class using the static keyword. Such a method turns out to be slightly different than a usual JavaScript method. The way the static method is different is that it cannot be accessed by any of the instantiated objects of the class. Rather, the static method can only be accessed using the class name because it directly belongs to the class.

// we used static keyword for the only purpose of class can have access hey method
// instances will not have access to hey method means instances cannot inherit

PersonCl.hey(); // class can have access to hey()
// walter.hey(); // instances cannot inherit or access hey() when we used static keyword
*/

// ======================================
// 013 - Object.create
// ======================================
/*
// The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.

// up until now we have used methods like constructor functions,classes to create/produce/make objects(or instances).

// Now we use another method Object.create

// no prototype property,no constructor functions and no new operator
// so instead we can use Object.create to manually set the prototype of an object to any other object that we want
*/

/*
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

const steven = Object.create(PersonProto);
// steven linked to PersonProto object
console.log(steven);
steven.name = "Steven";
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__);
console.log(steven.__proto__ === PersonProto);
// or either way works
console.log(Object.getPrototypeOf(steven) === PersonProto);

const sarah = Object.create(PersonProto); // Object.create(PersonProto); so that sarah can use PersonProto  stored methods and properties
sarah.init("Sarah", 1979); // creating sarah object or instance
sarah.calcAge();
*/

/*
The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.
To understand the Object.create method, just remember that it takes two parameters. The first parameter is a mandatory object that serves as the prototype of the new object to be created. The second parameter is an optional object which contains the properties to be added to the new object.

We will not deep dive into prototypes and inheritance chains now to keep our focus on the topic. But as a quick point, you can think of prototypes as objects from which other objects can borrow properties/methods they need.

Imagine you have an organization represented by orgObject

const orgObject = { company: 'ABC Corp' };
And you want to create employees for this organization. Clearly, you want all the employee objects.

const employee = Object.create(orgObject, { name: { value: 'EmployeeOne' } });

console.log(employee); // { company: "ABC Corp" }
console.log(employee.name); // "EmployeeOne"
*/

// ======================================
// 014 - Coding Challenge 2
// ======================================
// ======================================
// 015 - Inheritance between Classes: Constructor Functions
// ======================================

/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// linking protypes
Student.prototype = Object.create(Person.prototype);

// linked prototypes together so mike is instanceof Student and also Person and also Object
// we manually manipulated prototype chain because we linked Person and Student 

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student("Mike", 2020, "Computer Science");
// console.log(mike);
mike.introduce();
mike.calcAge();

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
// 016 - Coding Challenge 3
// ======================================
/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`when accelerated ${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(
    `when applying brake ${this.make} is going at ${this.speed} km/h`
  );
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

// linking the prototypes
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

// a child class can over write a method that it inherited from the parent class, if we didn't create below accelerate method then it will use parent accelerate method means then the tesla simply would inherit the accelerate method from the Car (this lookup is called prototype chain )
// how prototype chain or property lookup works?
// first telsa would look for accelerate method on EV.prototype.accelerate if not find out then tesla looks for Car.accelerate.prototype if not find out then tesla looks for Object.prototype.accelerate if not find out then we gets (error) (because Object.prototype is top of the prototype chain. if tesla not found in Object prototype then results error)
// tesla looks in child then in parent then in object if not found in any one then results error bcoz it does not exist

// see result by commenting EV.prototype.accelerate and Car.prototype.accelerate

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`
  );
};

const tesla = new EV("Tesla", 120, 23);
// console.log(tesla);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();
*/

// ======================================
// 017 - Inheritance between Classes: ES6 Classes
// ======================================
/*
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
// class Declaration
// (parent class PersonCl)
class PersonCl {
  // constructor is the method of class so it must called constructor only
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // instance methods
  // Methods will be added to .prototype property so that all the instances can have access to them
  // But even if you create prototype outside of the class it will also works same in classes like constructor function
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    // console.log(name);
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // static method
  static hey() {
    console.log("Hey there");
    console.log(this);
  }
}

// to implement inheritance between ES6 classes we only need two ingredients extends keyword and super function.

// (child class StudentCl)
// (class StudentCl extends PersonCl {} means child can inherit parent methods and properties means child can use parent methods and properties)

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first!
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

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
console.log(martha);

console.log(martha.__proto__);
*/

// ======================================
// 018 - Inheritance between Classes: Object.create
// ======================================
/*
// Using “Object.create” is the most basic way to create an inheritance model in JavaScript. Object.create can be used to create a new object using the existing object as a prototype. The existing object is made available as a prototype making all the properties of the existing object available to the new object.


// The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.
*/

/*
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

const steven = Object.create(PersonProto);
console.log(steven);

const StudentProto = Object.create(PersonProto);
console.log(StudentProto);

StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init("Jay", 2010, "Computer Science");
// console.log(jay);

jay.introduce();
*/

// ======================================
// 019 - Another Class Example
// ======================================

/*
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this._pin = pin;
    this._movements = []; // protected
    this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // Public interface
  getMovements() {
    return this._movements;
  }

  deposit(val) {
    this._movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  _approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log("Loan Approved");
    }
  }
}

const acc1 = new Account("Jonas", "EUR", 1111);
// console.log(acc1);

// acc1.movements.push(250);
// acc1.movements.push(-140);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
// acc1.approveLoan(1000);
console.log(acc1.getMovements());

console.log(acc1);
console.log(acc1.pin); // we are able to access pin outside of the class Account but it should not be accessible outside of the class
*/

// ======================================
// 020 - Encapsulation Protected Properties and Methods
// ======================================
// (2) Encapsulation
// Encapsulation : Keeping properties and methods private inside the class,so they are not accessible from outside the class. some methods can be exposed as a public interface(API)

/*
// (API -> Application Programming Interface means a software intermediary that allows two applications to talk to each other. APIs are an accessible way to extract and share data within and across organizations.

APIs are all around us. Every time you use a rideshare app, send a mobile payment, or change the thermostat temperature from your phone, you’re using an API.When you use one of the above apps, they connect to the Internet and send data to a server. The server then retrieves that data, interprets it, performs the necessary actions, and sends it back to your phone. The application then interprets that data and presents you with the information you wanted in a readable way. )
*/

/*
// Encapsulation
Encapsulation is a fundamental concept in object-oriented programming that refers to the practice of hiding the internal details of an object and exposing only the necessary information to the outside world. Encapsulation helps in maintaining the integrity of data and ensures that it is not accessed or modified inappropriately.

Encapsulation in JavaScript: In JavaScript, encapsulation can be achieved using two techniques: using closures and using classes
*/

// ======================================
// 021 - Encapsulation Private Class Fields and Methods
// ======================================

// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// (there is also the static version)

/*
class Account {
  // 1) Public fields (instances) which means there are all not on the prototype
  locale = navigator.language;

  // 2) Private fields (instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // protected property
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // 3) Public methods

  // Public interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  // requestLoan(val) {
  //   if (this.#approveLoan(val)) {
  //     this.deposit(val);
  //     console.log("Loan Approved");
  //   }
  // }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log("Loan Approved");
    }
  }

  static helper() {
    console.log("Helper");
  }

  // 4) Private methods
  // #approveLoan(val) {
  //   return true;
  // }
  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account("Jonas", "EUR", 1111);
// console.log(acc1);

// acc1.movements.push(250);
// acc1.movements.push(-140);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
// acc1.approveLoan(1000);
console.log(acc1.getMovements());

console.log(acc1);

// console.log(acc1.#movements);
// Property '#movements' is not accessible outside class 'Account' because it has a private identifier.ts(18013)

// console.log(acc1.#pin);
// Property '#pin' is not accessible outside class 'Account' because it has a private identifier.

// console.log(acc1.#approvedLoan(100));

Account.helper();
*/

// ======================================
// 022 - Chaining Methods
// ======================================

/*
class Account {
  // 1) Public fields (instances) which means there are all not on the prototype
  locale = navigator.language;

  // 2) Private fields (instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // protected property
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // 3) Public methods

  // Public interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  // requestLoan(val) {
  //   if (this.#approveLoan(val)) {
  //     this.deposit(val);
  //     console.log("Loan Approved");
  //   }
  // }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log("Loan Approved");
      return this;
    }
  }

  static helper() {
    console.log("Helper");
  }

  // 4) Private methods
  // #approveLoan(val) {
  //   return true;
  // }
  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account("Jonas", "EUR", 1111);
// console.log(acc1);

// acc1.movements.push(250);
// acc1.movements.push(-140);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
// acc1.approveLoan(1000);
console.log(acc1.getMovements());

console.log(acc1);

// console.log(acc1.#movements);
// Property '#movements' is not accessible outside class 'Account' because it has a private identifier.ts(18013)

// console.log(acc1.#pin);
// Property '#pin' is not accessible outside class 'Account' because it has a private identifier.

// console.log(acc1.#approvedLoan(100));

Account.helper();

// Chaining
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());
*/

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

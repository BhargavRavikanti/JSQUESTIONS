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

// NXT WAVE
// console.log(Array.prototype);

// let myArray = new Array("a", 2, true);
// console.log(Object.getPrototypeOf(myArray));
// let sports = new Array("cricket", "Hockey", "Football");
// console.log(Object.getPrototypeOf(sports));

// Built in constructor function
// let sum = new Function("a", "b", "return a+b");
// console.log(sum(2, 6));
// console.log(sum(2, 20));

// let add = Function("a", "b", "return a+b");
// console.log(add(2, 6));
// console.log(add(2, 20));

// let Car = new Function(
//   "color",
//   "brand",
//   `this.color = color;
//  this.brand = brand;
//  this.start = function(){
//   console.log("started);
//  };`
// );
// console.log(Car);

// console.log(Function.prototype);
// console.log(Object.getPrototypeOf(sum));

// function Car(color, brand) {
//   this.color = color;
//   this.brand = brand;
//   this.start = function () {
//     console.log("started");
//   };
// }
// console.log(Car);
// console.log(Car.prototype);

// // creating an instance
// let car1 = new Car("blue", "Audi");
// console.log(car1);
// console.log(Object.getPrototypeOf(car1));

// prototype
// Adding Property to the Prototype
// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }
// Person.prototype.displayFullName = function () {
//   return this.firstName + " " + this.lastName;
// };
// let person1 = new Person("Virat", "Kohli");
// let person2 = new Person("Sachin", "Tendulkar");
// console.log(person1);
// console.log(person2);

// // constructor function
// console.log(Person);
// console.log(Person.prototype);
// // instances
// console.log(person1);
// console.log(person2);
// console.log(Object.getPrototypeOf(person1));
// console.log(Object.getPrototypeOf(person2));
// console.log(person1.displayFullName());
// console.log(person2.displayFullName());

// // checking person1.displayFullName and person2.displayFullName have same function or not
// // checking does prototype object shares or not
// console.log(Object.getPrototypeOf(person1) === Object.getPrototypeOf(person2)); // true
// // means prototype object shares across the instances of object

// // getting Instance specific properties
// console.log(Object.getOwnPropertyNames(person1));
// console.log(Object.getOwnPropertyNames(person2));

// console.log(Object.getPrototypeOf(person1));

// WRITING CreateCar FUNCTION CONSTRUCTOR
// function CreateCar(color, brand) {
//   this.color = color;
//   this.brand = brand;
// }
// CreateCar.prototype.start = function () {
//   console.log("started");
// };
// CreateCar.prototype.finished = function () {
//   console.log("finished");
// };
// console.log(CreateCar);
// // accessing prototype of CreateCar
// console.log(CreateCar.prototype);

// let car1 = new CreateCar("blue", "Audi");
// let car2 = new CreateCar("green", "Tata");
// let car3 = new CreateCar("red", "BMW");
// console.log(car1);
// console.log(car2);
// console.log(car3);
// console.log(Object.getPrototypeOf(car1));
// console.log(Object.getPrototypeOf(car2));
// console.log(Object.getPrototypeOf(car3));
// car1.start();
// car2.start();
// car3.start();
// car1.finished();
// car2.finished();
// car3.finished();

// // getting Instance specific properties
// console.log(Object.getOwnPropertyNames(car1));
// console.log(Object.getOwnPropertyNames(car2));
// console.log(Object.getOwnPropertyNames(car3));

// console.log(Object.getPrototypeOf(car1) === Object.getPrototypeOf(car2));

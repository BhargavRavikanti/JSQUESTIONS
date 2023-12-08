// =========================================
// =========================================
//               COLT STEELE
// =========================================
// =========================================



// ======================================
// 01 - Introduction
// ======================================

// 001 How This Course Works
// ======================================
// 002 JS, ECMA, TC39_ What Do They Mean..
// ======================================
// 003 The Tools You Need
// ======================================
// 005 A Quick Note About MDN
// ======================================

// ======================================
// 02 - JS Values & Variables
// ======================================

// 001 Goals & Primitives
// ======================================
// GOALS
// Work with primitive
// Understand let & const
// Use String Template Literals
// Work with common operators/methods

// 002 Running Code in the JS Console
// ======================================
// 003 Introducing Numbers
// ======================================

// console.log(13);
// console.log(345);
// console.log(-2);
// console.log(2.345);
// console.log(1.0000000000000009);
// console.log(1.00000000000000009);

// simple operations

// // Addition
// console.log(50 + 5);
// // subtraction
// console.log(90 - 1);
// // multiplication
// console.log(11111 * 7);
// // division
// console.log(400 / 25);
// // modulo
// // modulo gives remainder
// console.log(27 % 2);
// console.log(27 % 3);
// console.log(7 % 3);
// // exponential
// console.log(2 ** 3);
// console.log(2 ** 4);
// console.log(2 ** 5);
// console.log(3 ** 2);
// console.log(3 ** 3);
// console.log(3 ** 4);
// console.log(3 ** 5);
// console.log(3 ** 6);
// console.log(4 ** 4);
// console.log(5 ** 5);

// console.log(3 - 9 * 2);
// // correct way remember BODMAS RULE Bracket Of Division Multiplication Addition Subtraction
// console.log((3 - 9) * 2);

// 004 NaN & Infinity
// ======================================

// NaN
// NOT A NUMBER
// NaN is a numeric value that represents something that is not ...a number
// In JavaScript, NaN stands for Not a Number. It represents a value that is not a valid number. It can be used to check whether a number entered is a valid number or not a number.

// console.log(0 / 0);
// console.log(NaN / 0);
// console.log(1 + NaN);
// console.log(5 + NaN);
// console.log(NaN + 7);

// console.log(1 / 0);
// console.log(-1 / 0);

// console.log(0);
// console.log(-0);

// console.log("bharu" - 1);
// console.log("bharu" / 1);
// console.log("bharu" * 1);
// console.log("bharu" % 1);

// // remember this
// console.log("2" - 1);
// console.log("2" + 1);
// console.log("2" * 1);
// console.log("2" / 1);

// 005 Numbers Quiz
// ======================================

// console.log(1.5 + 1.5 * 2);
// console.log((10 % 6) ** 2);
// console.log(200 + 0 / 0);

// 006 Variables & Let
// ======================================

// BASIC SYNTAX
// let someName = value;
// let is useful for updating values

// let age = 72;
// console.log(age);

// age = age + 1;
// console.log(age);

// age = age + 10;
// console.log(age);

// age = 18;
// console.log(age);

// let hens = 4;
// let roosters = 2;

// console.log(hens + roosters);

// // update values

// // a raccoon killed a hen
// hens - 1;
// console.log(hens); // 4!

// // correct way of updating or to actually change hens
// hens = hens - 1;
// console.log(hens); // 3

// 007 Unary Operators
// ======================================
// uninary means one side
// x(operand) +(operator) y(operand) =(opeator) z(result)

// // normal way
// let score = 0;
// score = score + 10;
// console.log(score);

// score += 1;
// console.log(score);

// score += 10;
// console.log(score);

// score -= 100;
// console.log(score);

// score = 150;
// console.log(score);

// let bonusMult = 3;
// // score = score * bonusMult;
// // console.log(score);
// score *= bonusMult;
// console.log(score);

// // uninary
// let counter = 0;
// console.log(counter);
// counter++;
// console.log(counter);
// counter++;
// console.log(counter);
// counter++;
// console.log(counter);
// counter++;
// console.log(counter);
// counter--;
// console.log(counter);

// 008 Introducing Const
// ======================================
// const means just constant you cannot change value
// const works just like let, except you CANNOT change the value

// const pens = 4;
// // pens = 20;
// console.log(pens); // ERROR!
// // const works just like let, except you CANNOT change the value

// const personAge = 17;
// // personAge = personAge + 1;
// console.log(personAge); // ERROR!

// // WHY USE CONST?
// // we use CONST to make sure the value does not change

// const pi = 3.14159;
// const daysInWeek = 7;
// const minutesInHour = 60;

// // Once we cover Arrays & Objects, we will see other situations where CONST makes sense over LET.

// const peopleCount = 10;
// // let peopleCount = 3; // ERROR! once using const we cannot declare same variable name for let

// 009 The Legacy of Var
// ======================================

// 010 Variables Quiz
// ======================================

// let eggCount = 42;
// eggCount + 2;
// console.log(eggCount);

// const rating = 7.5;
// // rating = 8;
// console.log(rating);

// let wind_Speed = 76;

// // wind_Speed += 5; // not good
// wind_Speed--; // not good
// console.log(wind_Speed);

////////////////////////////////
// 03 - How to Model Data Efficiency
////////////////////////////////

// 001 Booleans Intro
// ======================================

// booleans are simple True or False values Yes or No. 1 or 0.

// let isLoggedIn = true;
// console.log(isLoggedIn);
// let gameOver = false;
// console.log(gameOver);
// const isWaterWet = true;
// console.log(isWaterWet);

// let isHungry = true;
// console.log(isHungry);
// isHungry = false;
// console.log(isHungry);

// VARIABLES CAN CHANGE TYPE
// you probably would not change a number to a boolean, but you can!

// let numDonuts = 12; // it is a Number
// console.log(typeof numDonuts);
// numDonuts = false; // now it is a Boolean
// console.log(typeof numDonuts);
// numDonuts = 129873872; // back to Number
// console.log(typeof numDonuts);

// 002 Strings
// ======================================

// let name = "Ziggy";
// console.log(typeof name, name);
// let msg = "Please do not feed the chimps";
// console.log(typeof msg);
// let animal = "Dumbo Octopus";
// console.log(typeof animal);
// const number = 87;
// console.log(typeof number, number);
// const string = "87";
// console.log(typeof string, string);

// let firstName = "Bhargav";
// let lastName = "Ravikanti";
// // + means concat concat means combining into one
// console.log(firstName + lastName);
// console.log(firstName + " " + lastName);

// let hi = "hi" + 1; // string + number = string
// console.log(hi, typeof hi);
// hi = "hi" - 1; // string - number = number
// console.log(hi, typeof hi);
// hi = "hi" / 1; // string / number = number
// console.log(hi, typeof hi);
// let hello = "hello" - "h";
// console.log(hello);
// hello = "hello" / "h";
// console.log(hello);
// hello = "hello" / 1;
// console.log(hello);

// // for me it is weird behavior
// let someThing = "2" + 1;
// console.log(someThing);
// someThing = "2" - 1;
// console.log(someThing);
// someThing = "2" * 1;
// console.log(someThing);
// someThing = "2" / 1;
// console.log(someThing);
// someThing = "2" % 1;
// console.log(someThing);
// someThing = "3" % 2;
// console.log(someThing);

// ======================================
// 003 - String Indices
// ======================================
// length property gives how many characters it has

// console.log("hello".length);
// console.log("lolololololol".length);
// console.log(".         ".length);

// let mySong = "Surfin' USA";
// console.log(mySong.length);
// console.log(mySong[0]);
// console.log(mySong[1]);
// console.log(mySong[2]);
// console.log(mySong[3]);
// console.log(mySong[3]);
// console.log(mySong.length);
// console.log(mySong[11]);
// console.log(mySong[110]);
// console.log(mySong[10]);
// console.log(mySong[mySong.length - 1]); // gives last character // we will use this when we don't know how many characters it has
// console.log(mySong[mySong.length - 2]); // gives second character from last
// console.log(mySong[mySong.length - 3]); // gives third character from last
// console.log(mySong[mySong.length - 4]); // gives fourth character from last  // empty space is also a character

// console.log((mySong[0] = "A"));
// console.log(mySong); // we can't change string characters string are immutable means cannot changeble

// ======================================
// 004 - String Methods
// ======================================
// syntax string.method()
// 1.toUpperCase() 2.toLowerCase()

// 3.trim()
// The trim() method removes whitespace from both sides of a string.
// The trim() method does not change the original string

// let msg = "you are so grounded mr";
// console.log(msg.toUpperCase); // wrong
// console.log(msg.toUpperCase()); // () correct
// console.log(msg); // original is unchanged bcoz string are immutable

// msg = msg.toUpperCase(); // updating msg value using LET so we can update
// console.log(msg);
// console.log(msg.toLocaleLowerCase());
// console.log(msg); // original is unchanged

// // correct way of changing case
// let king = "I am king";
// let yellKing = king.toUpperCase();
// console.log(yellKing);
// console.log(king);

// let color = "        purple           ";
// console.log(color.trim());
// console.log(color.trim().toUpperCase());
// console.log(color.trim().toUpperCase().toLowerCase());
// console.log(color);

// let middleSpaces = "     mnedfgerg  erger regerghrtg    ";
// console.log(middleSpaces.trim()); // trim() will not remove middle empty spaces
// console.log(middleSpaces);

// ======================================
// 005 - More String Methods
// ======================================
// syntax string.method(arguments)
// some methods accept arguments that modify their behavior.we pass these arguments inside of the parentheses.

// 4.indexOf()
// The indexOf() method returns the position(means index number) of the first occurrence of a value in a string.
// The indexOf() method returns -1 if the value is not found.
// The indexOf() method is case sensitive.

// 5.slice()
// The slice() method extracts a part of a string.
// The slice() method returns the extracted part in a new string.
// The slice() method does not change the original string.
// The start and end parameters specifies the part of the string to extract.
// The first position is 0, the second is 1, ...
// A negative number selects from the end of the string.

// 6.replace()
// The replace() method searches a string for a value or a regular expression.
// The replace() method returns a new string with the value(s) replaced.
// The replace() method does not change the original string.
// If you replace a value, only the first instance will be replaced. To replace all instances, use a regular expression with the g modifier set.

// let tvShow = "catdog";

// console.log(tvShow.indexOf("cat"));
// console.log(tvShow.indexOf("dog"));
// console.log(tvShow.indexOf("z")); // -1 means (not found that character)
// console.log(tvShow.indexOf("o"));
// console.log(tvShow.indexOf("g"));
// console.log(tvShow.indexOf("G")); // case sensitive means cannot use capital G instead of g. // returns -1.

// console.log(tvShow.length);
// console.log(tvShow[tvShow.length - 1]); // getting last character

// console.log(tvShow);

// let ball = "Baseball";

// console.log(ball.indexOf("Base"));
// console.log(ball.indexOf("ase"));
// console.log(ball.indexOf("base")); // -1
// console.log(ball.indexOf("b"));
// console.log(ball.indexOf("ll"));

// console.log("baseball".indexOf("ball"));
// console.log("baseball".indexOf("b"));
// console.log("Baseball".indexOf("b"));
// console.log("Baseball".indexOf("entertaining"));

// console.log("Baseball".slice(4));
// console.log("Baseball".slice(-1)); // l
// console.log("Baseball".slice(-2)); // ll
// console.log("Baseball".slice(-4)); //

// let sport = "Baseball";

// console.log(sport.slice(4)); // returns all the characters from 4th index
// console.log(sport.slice(40)); // there is no 40 index number so gets empty
// console.log(sport.slice(0, 4));
// console.log(sport.slice(-1));
// console.log(sport.slice(-2));
// console.log(sport.slice(-3));
// console.log(sport.slice(-5));
// console.log(sport.slice(-5, -1)); // will not give -1 index character "l"
// console.log(sport.slice(-5, -3)); // will not give -3 index character which is "a"

// console.log("superhero".slice(2));
// console.log("superhero".slice(0, 5)); // returns 0 to 5th index number but not 5th index character.
// console.log("superhero".slice(0, 5).length);

// console.log("$50.60".slice(1));

// console.log("baseball is entertaining".replace("entertaining", "ok"));

// console.log("ha ha ha".replace("ha", "hee"));
// console.log("ha ha ha".replace("ha ha", "spar"));
// console.log("ha ha ha".replace("ha ha ha", "power"));
// console.log("ha ha ha".replace("haaa", "power")); // if haaa doesn't find. it reamains unchanged

// ======================================
// 006 - Strings Quiz
// ======================================

// const age = "5" + "4";
// console.log(age);
// console.log("5" + "4"); // + means combining strings into one string // "54"
// console.log("5" - "4"); // results mathematical calculations and returns as a number// 1
// console.log("5" * "4"); // results mathematical calculations // 20
// console.log("5" / "4"); // results mathematical calculations // 1.25
// console.log("5" % "4"); // results mathematical calculations // 1

// console.log("pecan pie"[7]);
// console.log("pecan pie"[0]);
// console.log("pecan pie".length);
// console.log("pecan pie"[9]);
// // getting last character method if not stored as a variable
// console.log("pecan pie".length - 1);
// console.log("pecan pie"[8]);
// // getting last character method if stored as a variable
// let someWord = "pecan pie";
// console.log(someWord[someWord.length - 1]);

// console.log("PUP"[3]);

// // using LET
// let song = "london calling";
// song.toUpperCase(); // wrong way change uppercase
// console.log(song);
// song = song.toUpperCase(); // wright way change uppercase
// console.log(song);

// //using CONST
// const songss = "london calling";
// songss.toUpperCase(); // wrong way change uppercase
// console.log(songss);
// // songss = songss.toUpperCase(); // gives error so store it in a new variable
// const sung = songss.toUpperCase();
// console.log(sung);
// // console.log(songss); // original string will not change

// let userInput = " TODD@gmail.com";
// let cleanedInput = userInput.trim().toLowerCase();
// console.log(cleanedInput);
// console.log(cleanedInput[cleanedInput.length - 1]);

// let park = "Yellowstone";
// const index = park.indexOf("stone");
// console.log(index);
// console.log(park.indexOf("Stone")); // case sensitive
// console.log(park.slice());
// console.log(park.slice(0, 6));

// let yell = "GO AWAY!!";
// let indexx = yell.indexOf("!");
// console.log(indexx);

// console.log("GARBAGE!".slice(2));
// console.log("GARBAGE!".slice(2).replace("B", ""));
// console.log("GARBAGE!".slice(2).replace("B", " "));
// console.log("GARBAGE!".slice(2).replace("B", "  "));

// ======================================
// 007 - String Escape Characters
// ======================================

// console.log("HELLO\nGOODBYE");
// // console.log("\"); // wrong
// console.log("\\"); // wright

// ======================================
// 008 - String Template Literals
// ======================================

// Template literals are strings that allow embedded expressions, which will be evaluated and then turned into a resulting string.
// `` backticks key usually above the tab key

// console.log(`I counted ${3 + 4} sheep`);
// console.log(`I counted ${3 + 4 + 5} sheep`);
// console.log(`I counted ${3 + 4 + 5 + 6} sheep`);
// console.log(`bharu rockzz`); // we can make a string using backticks
// console.log(`he said 'lol'`);
// console.log(`' ""`);
// console.log(`${1 + 5}`);
// console.log(typeof `${1 + 5}`);
// console.log(`You owe me ${100 + 218937}`);
// console.log("${1+3}");

// let userName = "Ziggy31";
// console.log(`Welcome back, ${userName}`);
// console.log(`GAME OVER ${userName.toUpperCase()}`);

// let animal = "pig";
// let sound = "oink";
// console.log(animal + " says " + sound);
// console.log(`${animal} says ${sound}`); // using template literals
// console.log(animal + " says " + sound + "!");
// console.log(`${animal} says ${sound}!`); // using template literals // easy to read

// let item = "cucumbers";
// let price = 1.99;
// let quantity = 4;
// console.log(`You bought ${quantity} ${item} total price: $${price * quantity}`);

// const minAge = 21;
// let yourAge = 19;
// console.log(
//   `You must be ${minAge} or older to enter. Come back in ${
//     minAge - yourAge
//   } years`
// );

// ======================================
// 009 - Null & Undefined
// ======================================
// Null *) "Intenational abscence of any value"
//      *) Must be assigned
// Undefined *) variables that do not have an assigned value are undefined

// console.log(null);
// console.log(undefined);

// // No one is logged in yet...
// let loggedInUser = null; // value is explicitly nothing
// console.log(loggedInUser);
// // A user logs in...
// loggedInUser = "Alan Rickman";
// console.log(loggedInUser);

// console.log("lol"[4]);
// const u = undefined;
// console.log(u);

// let color;
// console.log(color); // it exists but value not assigned
// // // console.log(bhar); // it does not exist so error

// ======================================
// 010 - The Math Object & Random Numbers
// ======================================
// MATH OBJECT contains properties and methods for mathematical constants and functions

// console.log(Math);
// console.log(Math.PI);
// console.log(Math.floor(3, 657));
// console.log(Math.floor(3.657));
// console.log(Math.floor(3, 6577777));
// console.log(Math.floor(3.6577777));
// console.log(Math.floor(3.9999999));
// console.log(Math.round(4.6));
// console.log(Math.round(4.4));
// console.log(Math.round(7.3));
// console.log(Math.round(7.7));
// console.log(Math.pow(7, 2));
// console.log(Math.pow(7, 3));
// console.log(Math.pow(7, 7));

// RANDOM NUMBERS Math.random() gives us a random decimal between 0 and 1 (non-inclusive)

// RANDOM INTEGERS Let's generate random numbers between 1 and 10

// const step1 = Math.random(); // gives 0 to 1 not including 1
// console.log(step1);
// const step2 = step1 * 10;
// console.log(step2);
// const step3 = Math.floor(step2);
// console.log(step3);
// const step4 = step3 + 1; // so we need to add 1 at last bcoz we want result between 1 to 10 not 0 to 10
// console.log(step4);

// or

// console.log(Math.floor(Math.random() * 10) + 1);

// RANDOM INTEGERS Let's generate random numbers between 1 and 6 for dice roll

// console.log(Math.floor(Math.random() * 6) + 1);

// ======================================
// 011 - TYPE OF
// ======================================

// console.log(typeof 99);
// console.log(typeof true);
// console.log(typeof "mystery");
// console.log(typeof mystery);
// console.log(typeof "99 balloons");
// console.log(typeof undefined);
// console.log(typeof null); // object // weird behaviour of javascript

// ======================================
// 012 - parseInt & parseFloat
// ======================================
// The parseInt method parses a value as a string and returns the first integer.
// parseInt & parseFloat use to parse strings into numbers, but watch out NaN!

// console.log(parseInt("24"));
// console.log(parseInt("24.987")); // 24
// console.log(parseInt("28dayslater"));
// console.log(parseInt("dayslater28"));

// console.log(parseFloat("24.987")); // 24.987
// console.log(parseFloat("7"));
// console.log(parseFloat("7.0"));
// console.log(parseFloat("i ate 3 shramp")); // NaN

// console.log("21" + 1); // 211
// console.log(parseInt("21") + 1); // 22

// console.log(parseFloat("33.5"));
// console.log(parseInt("$99")); // NaN
// console.log(parseInt("99$"));
// console.log(parseInt("99cents"));
// console.log(parseInt("9976654665457cents"));
// console.log(parseInt("   9976654665457cents"));
// console.log(parseInt("   .9976654665457cents")); // NaN
// console.log(parseInt(".9976654665457cents"));

/*
Description
The parseInt method parses a value as a string and returns the first integer.

A radix parameter specifies the number system to use:

2 = binary, 8 = octal, 10 = decimal, 16 = hexadecimal.

If radix is omitted, JavaScript assumes radix 10. If the value begins with "0x", JavaScript assumes radix 16.

Notes
If the first character cannot be converted, NaN is returned.

Leading and trailing spaces are ignored.

Only the first integer found is returned.

Older browsers will return 8 for parseInt("010"). Older versions of ECMAScript used octal (radix 8) for values beginning with "0". From ECMAScript 5 (2009) default is decimal (radix 10).

Syntax
parseInt(string, radix)
Parameters
Parameter	Description
value	Required.
The value to be parsed.
radix	Optional. Default is 10.
A number (2 to 36) specifying the number system.
Return Value
Type	Description
A number.	NaN if no integer is found.
*/

////////////////////////////////
// 04 - Controlling Program Logic and Flow
////////////////////////////////

// ======================================
// 001 - Making Decisions in JS
// ======================================
// GOALS
// Understand comparision Operators
// Write Conditionals
// Work with Boolean Operators

// ======================================
// 002 - Comparision Operators
// ======================================
// COMPARISIONS
// >    GREATER THAN
// <    LESS THAN
// >=   GREATER THAN OR EQUAL TO
// <=   LESS THAN OR EQUAL TO
// ==   EQUALITY
// !=   NOT EQUAL
// ===  STRICT EQUALITY
// !==  STRICT NON-EQUALITY

// console.log(10 > 1);
// console.log(0.2 > 0.3);
// console.log(-10 < 0);
// console.log(50.5 < 5);
// console.log(0.5 <= 0.5);
// console.log(0.4 <= 0.5);
// console.log(99 >= 4); // Notice these all return a Boolean
// console.log(99 >= 99);
// console.log("a" < "b");
// console.log("a" > "b");
// console.log("A" > "b");
// console.log("A" < "b");

// console.log(-2 > 1);
// console.log(10 < 999);
// console.log(2 >= 2);
// console.log(2 >= 5);
// console.log(55.1 <= 55.5);
// console.log("hello" >= "hello!");
// console.log("hello" >= "hello");
// console.log("hello" >= "hellos");
// console.log("hello".length >= "hello!".length);
// console.log("hello".length >= "hello!".length - 1);
// console.log("hello".length >= "hello!".length - 2);

// console.log("a" < "A"); // All lower case letters are greater than all uppercase letters (a-z > A-Z)
// console.log("A" < "a");
// console.log("B" < "a");

// console.log("#" < "$"); // $ is greater than #

// 003 Double Equals(==)
// ======================================
// Checks for equality of value, but not equality of type.
// It coerces both values to the same type and then compares them.
// This can lead to some unexpected results!
// In JS 1 is true 0 is false

// console.log(5 == 5);
// console.log("b" == "c");
// console.log("b" == "b");
// console.log(7 == "7"); // value same but not type // 7 is number "7" is string
// console.log(0 == "");
// console.log(true == false);
// console.log(0 == false);
// console.log(null == undefined);

// console.log(4 == 4);
// console.log("a" == "a");
// console.log(false == false);
// console.log(8 == "8");
// console.log(0 == "s");
// console.log(0 == ""); // empty can considered as 0 // value same but not type // 0 is number "" is string
// console.log(1 == true);
// console.log(0 == false);
// console.log(1 == false);
// console.log(0 == true);
// console.log(null == undefined);

// 004 Triple Equals (===)
// ======================================
// Checks for equality of VALUE and TYPE
// In general mostly use === in programs

// console.log(5 === 5);
// console.log(5 == 5);
// console.log("5" === 5);
// console.log("5" == 5);

// console.log(1 === 2);
// console.log(2 === "2");
// console.log(2 == "2");
// console.log(false === 0);
// console.log(false == 0);

// Same applies for != and !==
// console.log(10 != "10");
// console.log(10 !== "10");

// console.log(undefined == null);
// console.log(undefined === null);

// let isLoggedIn = false;
// console.log(isLoggedIn == false);
// isLoggedIn = 0;
// console.log(isLoggedIn == false);
// console.log(isLoggedIn === false);

// console.log(1 != 2);
// console.log(1 != "1");
// console.log(1 !== "1");

// 005 Running Code From a Script
// ======================================

// console.log(3 + 4, "hello", true);

// 006 if Statements
// ======================================
// CONDITIONALS
// Making decisions with code
// conditionals can have 3 different pieces if, if else and else

// if
// Run code if a given condition is true

// // Example
// let rating = 3;

// if (rating === 3) {
//   console.log("YOU ARE A SUPERSTAR"); // rating = 3 it is true so this code is running on console
// }

// if (rating === 2) {
//   console.log("YOU ARE A SUPERSTAR"); // rating = 3 but we have given rating = 2 it is false so this code is not running on console
// }

// if (rating < 3) {
//   console.log("YOU ARE NOT A SUPERSTAR");
// }

// rating = 2;

// if (rating < 3) {
//   console.log("YOU ARE NOT A SUPERSTAR");
// }

// // Example
// if (1 === 1) {
//   console.log("it is true");
// }
// if (1 !== 1) {
//   console.log("it is true");
// }

// // Example
// let num = 37;

// if (num % 2 !== 0) {
//   console.log("ODD NUMBER");
// }

// num = 38;

// if (num % 2 !== 0) {
//   console.log("ODD NUMBER");
// }

// 007 Else if
// ======================================
// else if
// if not the first thing, maybe this other thing??

// Example
// 3 - superstar
// 2 - meets expectations
// 1 - needs improvement
// anything else - wtf?

// Example
// let rating = 2;

// if (rating === 3) {
//   console.log("YOU ARE A SUPERSTAR");
// } else if (rating === 2) {
//   console.log("MEETS EXPECTATIONS");
// } else if (rating === 1) {
//   console.log("NEEDS IMPROVEMENT");
// }

// rating = 1;

// if (rating === 3) {
//   console.log("YOU ARE A SUPERSTAR");
// } else if (rating === 2) {
//   console.log("MEETS EXPECTATIONS");
// } else if (rating === 1) {
//   console.log("NEEDS IMPROVEMENT");
// }

// My Example
// 18 years unte vote veyavochu lekapothe veyaradhu

// let voteAge = 18;

// if (voteAge === 18) {
//   console.log("YOU CAN VOTE");
// } else if (voteAge === 15) {
//   console.log("YOU CAN'T VOTE");
// }

// voteAge = 15;

// if (voteAge === 18) {
//   console.log("YOU CAN VOTE");
// } else if (voteAge === 15) {
//   console.log("YOU CAN'T VOTE");
// }

// My Example
// Licence unte bike drive cheyochu lekapothe drive cheyakudadhu

// let drivingLicence = "have";

// if (drivingLicence === "have") {
//   console.log("YOU CAN DRIVE");
// } else if (drivingLicence === "haven't") {
//   console.log("YOU CAN'T DRIVE");
// }

// drivingLicence = "haven't";

// if (drivingLicence === "have") {
//   console.log("YOU CAN DRIVE");
// } else if (drivingLicence === "haven't") {
//   console.log("YOU CAN'T DRIVE");
// }

// My Example
// helmet vunte you can go lekapothe pay 150rs

// let helmet = "have";

// if (helmet === "have") {
//   console.log("YOU CAN GO");
// } else if (helmet === "haven't") {
//   console.log("150RS FINE");
// }

// helmet = "haven't";

// if (helmet === "have") {
//   console.log("YOU CAN GO");
// } else if (helmet === "haven't") {
//   console.log("150rs FINE");
// }

// // My Example

// let money = 10;

// if (money === 10) {
//   console.log("I WILL BUY CHIPS");
// } else if (money < 10) {
//   console.log("I WILL BUY CHOCLATE");
// } else if (money > 10) {
//   console.log("I WILL BUY STING");
// }

// money = 5;

// if (money === 10) {
//   console.log("I WILL BUY CHIPS");
// } else if (money < 10) {
//   console.log("I WILL BUY CHOCLATE");
// } else if (money > 10) {
//   console.log("I WILL BUY STING");
// }

// money = 20;

// if (money === 10) {
//   console.log("I WILL BUY CHIPS");
// } else if (money < 10) {
//   console.log("I WILL BUY CHOCLATE");
// } else if (money > 10) {
//   console.log("I WILL BUY DAIRY MILK");
// } else if (money >= 20) {
//   console.log("I WILL BUY STING");
// }

// // My Example
// // 21 years lekapothe you can't marry

// let marriage = 21;

// if (marriage !== 21) {
//   console.log("YOU CANT MARRY");
// }

// marriage = 21;

// if (marriage !== 20) {
//   console.log("YOU CANT MARRY");
// }

// 008 else
// ======================================
// else
// if nothing else was true, do this...

// Example
// 3 - superstar
// 2 - meets expectations
// 1 - needs improvement
// anything else - invalid rating

// let rating = 213;

// if (rating === 3) {
//   console.log("YOU ARE A SUPERSTAR");
// } else if (rating === 2) {
//   console.log("MEETS EXPECTATIONS");
// } else if (rating === 1) {
//   console.log("NEEDS IMPROVEMENT");
// } else {
//   console.log("IVALID RATING");
// }

// rating = 5;

// if (rating > 3) {
//   console.log("YOU ARE A SUPERSTAR");
// } else if (rating === 2) {
//   console.log("MEETS EXPECTATIONS");
// } else if (rating === 1) {
//   console.log("NEEDS IMPROVEMENT");
// } else {
//   console.log("IVALID RATING");
// }

// rating = 1;

// if (rating > 3) {
//   console.log("YOU ARE A SUPERSTAR");
// } else if (rating === 2) {
//   console.log("MEETS EXPECTATIONS");
// } else if (rating <= 1) {
//   console.log("NEEDS IMPROVEMENT");
// } else {
//   console.log("IVALID RATING");
// }

// Example

// let highScore = 1430;
// let userScore = 1200;

// if (userScore >= highScore) {
//   console.log(`Congrats, you have new high score of ${userScore}`);
//   console.log((highScore = userScore));
// } else {
//   console.log(
//     `Your score of ${userScore} did not beat the high score of ${highScore}`
//   );
// }

// highScore = 1430;
// userScore = 1600;

// if (userScore >= highScore) {
//   console.log(`Congrats, you have new high score of ${userScore}`);
//   console.log((highScore = userScore));
// } else {
//   console.log(
//     `Your score of ${userScore} did not beat the high score of ${highScore}`
//   );
// }

// highScore = 1430;
// userScore = 1300;

// if (userScore >= highScore) {
//   console.log(`Congrats, you have new high score of ${userScore}`);
//   console.log((highScore = userScore));
// } else {
//   console.log(
//     `Your score of ${userScore} did not beat the high score of ${highScore}`
//   );
// }

// highScore = 1430;
// userScore = 1500;

// if (userScore >= highScore) {
//   console.log(
//     `Congrats, you have new high score of ${userScore} win by ${
//       userScore - highScore
//     }`
//   );
//   console.log((highScore = userScore));
// } else {
//   console.log(
//     `Your score of ${userScore} did not beat the high score of ${highScore} lost by ${
//       highScore - userScore
//     }`
//   );
// }

// highScore = 1430;
// userScore = 1267;

// if (userScore >= highScore) {
//   console.log(
//     `Congrats, you have new high score of ${userScore} win by ${
//       userScore - highScore
//     }`
//   );
//   console.log((highScore = userScore));
// } else {
//   console.log(
//     `Your score of ${userScore} did not beat the high score of ${highScore} lost by ${
//       highScore - userScore
//     }`
//   );
// }

// ======================================
// 009 - Nesting Conditionals
// ======================================
// we can nest conditionals inside conditional

// console.log("bharu".indexOf(" "));

// let password = "hello kitty";
// let password = "hellokitty";
// let password = "hellokitty";

// if (password.length >= 6) {
//   if (password.indexOf(" ") === -1) {
//     console.log("Valid Password");
//   } else {
//     console.log("Password is long enough, but cannot contain spaces");
//   }
// } else {
//   console.log("Password must be longer!");
// }

// 010 Truthy & Falsy Values
// ======================================
// All values have an inherent truthy or falsy boolean value
// Falsy values: "", '', ``, 0, -0, NaN, false, null, undefined
// Everthing else is truthy!

// let mystery = 5; // truthy
// let mystery = 999; // truthy
// let mystery = 0;
// let mystery = 0 / 0;
// let mystery = "bhargav"; // truthy
// let mystery = " "; // truthy
// let mystery = "";
// let mystery = null;
// let mystery = undefined;
// let mystery = NaN;

// if (mystery) {
//   console.log("TRUTHY");
// } else {
//   console.log("FALSY");
// }

// let loggedInUser = "thomas123";
// let loggedInUser = null;
// let loggedInUser = "";
// let loggedInUser = "thomas123";
// let loggedInUser = "thomas123";

// if (loggedInUser) {
//   console.log("YOU ARE LOGGED IN!");
// } else {
//   console.log("PLEASE LOG IN!");
// }

// 011 Logical AND (&&)
// ======================================
// LOGICAL OPERATORS
// LOGICAL AND ( && ), LOGICAL OR ( || ), LOGICAL NOT ( ! )

// logical AND ( && ) Both sides must me true in order for the whole thing to be true

// console.log(true && true); // true
// console.log(true && false); // false
// console.log(false && false); // false
// console.log(false && true); // false

// console.log(1 <= 4 && "a" === "a");
// console.log(9 > 10 && 9 >= 9);
// console.log("abc".length === 3 && 1 + 1 === 4);

// console.log(1 <= 2 && 5 === 5);

// let password = "chickenGal";

// if (password.length >= 8 && password.indexOf(" ") === -1) {
//   console.log("VALID PASWWORD");
// } else {
//   console.log("INVALID PASSWORD");
// }

//using if else only

// let password = "cat dog";

// if (password.length >= 6) {
//   if (password.indexOf(" ") === -1) {
//     console.log("Password cannot include spaces");
//   } else {
//     console.log("Valid password!!");
//   }
// } else {
//   console.log("Password too short!");
// }

// using logical operators logical AND ( && )

// let password = "chickenGal";
// let password = "chicken Gal";
// let password = "chicken8Gal";

// if (password.length >= 8 && password.indexOf(" ") === -1) {
//   console.log("VALID PASSWORD");
// } else {
//   console.log("INVALID PASSWORD");
// }

// ======================================
// 012 - Logical OR ( || )
// ======================================
//if one side is true, the whole thing is true

// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

// only one side needs to be true!
// console.log(1 !== 1 || 10 === 10);
// console.log(10 / 2 === 5 || null);
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean(0) || Boolean(undefined));

// let age = 78;
// let age = 3;
// let age = 30;
// let age = 65;

// if (age < 6 || age >= 65) {
//   console.log("YOU GET IN FOR FREE");
// } else {
//   console.log("YOU MUST PAYYYYY!");
// }

// using normal if else if else not using logical OR (||)
// let age = 78;
// let age = 3;
// let age = 30;
// let age = 65;

// if (age < 6) {
//   console.log("YOU GET IN FOR FREE");
// } else if (age >= 65) {
//   console.log("YOU GET IN FOR FREE");
// } else {
//   console.log("YOU MUST PAYYYY!");
// }

// let color = "violet";
// if (color === "pruple" || color === "lilac" || color === "violet") {
//   console.log("GREAT CHOICE!");
// }

// ======================================
// 013 - NOT operator (!)
// ======================================
// logical NOT (!) returns true if the expression is false

// console.log(!null);
// console.log(!0);
// console.log(!"");
// console.log(Boolean(45)); // Boolean gives true or false
// console.log(!45);
// console.log(!"bharu");

// let loggedInUser;

// console.log(loggedInUser);
// console.log(Boolean(loggedInUser)); // checking loggedInUser is true or false // got false
// console.log(!loggedInUser);

// if code runs when condition is true
// loggedInUser false, by using !loggedInUser we are setting it to true
// but we are changing loggedInUser to true using !
// if (!loggedInUser) {
//   console.log("GET OUT OF HERE!");
// }

// let flavor = "grape";
// let flavor = "watermelon";
// console.log(Boolean(flavor));
// console.log(!flavor);
// console.log(Boolean(flavor !== "cherry"));

// if (flavor !== "grape" && flavor !== "cherry") {
//   console.log("WE DON'T HAVE THAT FLAVOR");
// }

// let flavor = "grape";
// if (flavor === "grape" || flavor === "cherry") {
//  console.log("WE ONLY HAVE GRAPE AND CHERRY");
// }

// // let flavor = "grape";
// let flavor = "watermelon";
// if (!(flavor === "grape" || flavor === "cherry")) {
//   console.log("WE ONLY HAVE GRAPE AND CHERRY");
// }

// console.log(true);
// console.log(!true);

// // let money = 10;
// let money = 1;

// if (money !== 10) {
//   console.log("he has 10rs");
// }

// ======================================
// 014 - Operator Precedence
// ======================================
// OPERATOR PRECEDENCE
// NOT (!) has higher precedence that && and ||
// AND (&&) has higher precedence than ||
// ! && || // You can alter this using parens ()

// let x = 7;
// console.log(x === 7 || (x === 3 && x > 10));
// console.log((x === 7 || x === 3) && x > 10);

// ======================================
// 015 - The Switch Statement
// ======================================

// using if else if
// let day = 1;
// let day = 2;
// let day = 3;
// let day = 4;
// let day = 5;
// let day = 6;
// let day = 7;
// let day = 9;
// let day = 34;

// if (day === 1) {
//   console.log("monday");
// } else if (day === 2) {
//   console.log("tuesday");
// } else if (day === 3) {
//   console.log("wednesday");
// } else if (day === 4) {
//   console.log("thursday");
// } else if (day === 5) {
//   console.log("friday");
// } else if (day === 6) {
//   console.log("saturday");
// } else if (day === 7) {
//   console.log("sunday");
// } else {
//   console.log("INVALID DAY");
// }

// using switch statement
// switch (day) {
//   case 1:
//     console.log("monday");
//     break;
//   case 2:
//     console.log("tuesday");
//     break;
//   case 3:
//     console.log("wednesday");
//   case 4:
//     console.log("thursday");
//     break;
//   case 5:
//     console.log("friday");
//     break;
//   case 6:
//     console.log("saturday");
//     break;
//   case 7:
//     console.log("sunday");
//     break;
//   default:
//     console.log("INVALID DAY");
// }

// let emoji = "sad face";
// let emoji = "happy face";
// let emoji = "lips";
// let emoji = "heart";

// switch (emoji) {
//   case "sad face":
//   case "happy face":
//     console.log("yellow");
//     break;
//   case "eggplant":
//     console.log("purple");
//   case "heart":
//   case "lips":
//     console.log("red");
//     break;
// }

// ======================================
// 016 - Ternary Operator
// ======================================
// This operator is frequently used as an alternative to an if...else statement.
// condition ? expressionIfTrue : expressionIfFalse

// let num = 7;

// if (num === 7) {
//  console.log("lucky");
// } else {
//  console.log("bad!");
// }

// let num = 7;
// let num = 5;
// num === 7 ? console.log("lucky") : console.log("bad!");

// let age = 21;
// let age = 18;
// age === 21 ? console.log("can marry") : console.log("can't marry");

// let status = "online";
// let status = "offline";

// let color;
// if (status === "offline") {
//   console.log((color = "red"));
// } else {
//   console.log((color = "green"));
// }

// let status = "online";
// let status = "offline";

// let color = status === "offline" ? console.log("red") : console.log("green");

////////////////////////////////
// 05 - Capture Collections of Data with Arrays
////////////////////////////////

// ======================================
// 001 - Creating Arrays
// ======================================
// GOALS
// Work with Arrays
// Write Object Literals
// Understand Reference Types
// Use common Array/Object methods

// CREATING ARRAYS
// // To make an empty array
// let students = [];

// // An array of strings
// let colors = ["red", "orange", "yellow"];

// // An array of numbers
// let lottoNums = [19, 22, 56, 12, 51];

// // A mixed array
// let stuff = [true, 68, "cat", null];

// let shoppingList = ["cereal", "cheese", "ice"];
// console.log(shoppingList);

// let lotto = [45, 12, 23, 25, 34];
// console.log(lotto);

// let myCollection = [12, "dog", true, null, NaN];
// console.log(myCollection);

// // creating array using Array literal syntax
// let newArray = new Array();
// console.log(newArray);
// newArray = new Array(1, 2, 3, 4, 5);
// console.log(newArray);

// ======================================
// 002 - Array Indices
// ======================================
// ARRAYS ARE INDEXED
// Accessing items from an array

// //           [  0        1         2        3        4       5          6   ]
// let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

// console.log(colors.length);

// console.log(colors[0]);
// console.log(colors[1]);
// console.log(colors[2]);
// console.log(colors[3]);
// console.log(colors[4]);
// console.log(colors[5]);
// console.log(colors[6]);
// console.log(colors[7]);
// console.log(colors[colors.length - 1]); // if we don't know what element in the array is last we can use this method
// console.log(colors[colors.length - 2]); // getting second last element from an array

// console.log("bharu"[0]);
// console.log("bharu"[3]);

// ======================================
// 003 - Modifying Arrays
// =====================================
// unlike strings which are immutable Arrays are mutuable which means we can change array items

// let colors = ["rad", "orange", "green", "yellow"];
// console.log(colors);

// colors[0] = "red"; // changing index 0 "rad" to "red"
// console.log(colors);

// colors[2] = "yellow";
// colors[3] = "green";
// console.log(colors);

// colors[4]; // undefined
// console.log(colors[4]);
// colors[4] = "blue"; // creating item to index 4
// console.log(colors);
// colors[5] = "pink";
// console.log(colors);
// console.log(colors.length);
// console.log(colors[colors.length - 1]);

// let shoppingList = ["Cheddar cheese", "2% Milk"];

// shoppingList[1] = "whole Milk";
// console.log(shoppingList);
// console.log(shoppingList.length);
// shoppingList[2] = "Ice Cream";
// console.log(shoppingList);

// shoppingList[shoppingList.length] = "Tomatoes"; // if we don't know last index to add an item use this method
// console.log(shoppingList);
// shoppingList[shoppingList.length] = "Potatoes";
// console.log(shoppingList);
// shoppingList[0] = "Bread";
// console.log(shoppingList);

// ======================================
// 004 - Push and Pop
// ======================================
// ARRAY METHODS
// Push - add to end
// Pop - remove from end

// let topSongs = [
//   "First Time Ever I Saw Your Face",
//   "God Only Knows",
//   "A Day In The Life",
//   "Life On Mars",
// ];

// // adding item on last using general method
// // topSongs[topSongs.length] = "Fortunate Son";
// // console.log(topSongs);

// // adding item on last using array method PUSH
// topSongs.push("Fortunate Son");
// console.log(topSongs);
// topSongs.push(true);
// console.log(topSongs);

// // POP
// topSongs.pop();
// console.log(topSongs);
// let nextSong = topSongs.pop();
// console.log(nextSong);
// console.log(topSongs);

// topSongs.pop();
// console.log(topSongs);

// topSongs.pop();
// topSongs.pop();
// topSongs.pop();
// console.log(topSongs); // we emptied topSongs array
// topSongs.pop();
// topSongs.pop();
// console.log(topSongs);

// ======================================
// 005 - Shift and Unshift
// ======================================
// Unshift - add to start
// shift - remove from start

// let dishes = ["big platter"];
// console.log(dishes);
// dishes.unshift("large plate");
// console.log(dishes);
// dishes.unshift("small plate");
// console.log(dishes);
// dishes.unshift("cereal bowl");
// dishes.unshift("mug");
// dishes.unshift("dirty spoon");
// console.log(dishes);

// dishes.shift();
// console.log(dishes);
// dishes.shift();
// console.log(dishes);
// dishes.shift();
// console.log(dishes);
// dishes.shift();
// dishes.shift();
// dishes.shift();
// dishes.shift();
// console.log(dishes);

// dishes.unshift("fork", "knife");
// console.log(dishes); // ['fork', 'knife']
// dishes.unshift("small spoon");
// dishes.unshift("large spoon");
// console.log(dishes); // ['large spoon', 'small spoon', 'fork', 'knife']

// dishes.push("platter");
// console.log(dishes);
// dishes.push("cutting board", "cookie sheet");
// console.log(dishes);

// 006 Concat
// ======================================
// MORE METHODS!
// concat - merge arrays
// includes - look for a value
// indexOf - just like str.indexOf
// join - creates a string from array
// reverse - reverses an array!
// slice - copy portion of an array
// spilce - remove/replace elements
// sort - sorts an array

// CONCAT - merge arrays

// let fruits = ["apple", "banana"];
// let veggies = ["asparagus", "brussel sprouts"];
// let meats = ["steak", "chicken breast"];
// console.log(fruits.concat(veggies)); // order matters
// console.log(veggies.concat(fruits)); // order matters
// console.log(fruits.concat(fruits));
// let allFood = fruits.concat(veggies, meats);
// console.log(allFood);
// console.log(fruits);
// console.log(veggies);
// console.log(meats);

// ======================================
// 007 - Includes and IndexOf
// ======================================
// includes - look for a value
// indexOf - just like str.indexOf

// let ingredients = [
//   "water",
//   "corn starch",
//   "flour",
//   "cheese",
//   "brown sugar",
//   "shrimp",
//   "eel",
//   "butter",
// ];

// // includes
// // includes returns true or false
// console.log(ingredients.includes("fish"));
// console.log(ingredients.includes("shrimp"));
// console.log(ingredients.includes("corn"));
// console.log(ingredients.includes("corn starch"));

// console.log(ingredients.length); // 8
// console.log(ingredients.includes("water"));
// console.log(ingredients.includes("water", 0)); // water is after 0 index so it is true
// console.log(ingredients.includes("water", 3)); // water is not after 3 index so it is false
// console.log(ingredients.includes("flour", 1)); // true
// console.log(ingredients.includes("flour", 3)); // false
// console.log(ingredients.includes("eel", 5));
// console.log(ingredients.includes("eel", 6));
// console.log(ingredients.includes("eel", 7));

// if (ingredients.includes("flour")) {
//   console.log("I AM GLUTEN FREE, I CANNOT EAT THAT!");
// }

// // indexOf
// //indexOf returns an index (or -1 if not found)

// console.log(ingredients.indexOf("eel"));
// console.log(ingredients.indexOf("maple syrup"));
// console.log(ingredients.indexOf("cheese", 5)); // is cheese after index 5 No so it gives -1
// console.log(ingredients.indexOf("cheese", 2)); // is cheese after index 2 Yes so it gives index 3, means cheese index is 3

// // observe it so you can understand completely indexOf method concept
// console.log(ingredients.indexOf("brown sugar"));
// console.log(ingredients.indexOf("brown"));
// console.log(ingredients.indexOf("brown sugar", 2));
// console.log(ingredients.indexOf("brown sugar", 4));
// console.log(ingredients.indexOf("brown sugar", 5));

// ======================================
// 008 - Reverse and Join
// ======================================
// Join - creates a string from an array
// Reverse - reverses an array!

// let letters = ["T", "C", "E", "P", "S", "E", "R"];

// // Reverse
// console.log(letters.reverse());
// console.log(letters);

// // Join
// letters = ["T", "C", "E", "P", "S", "E", "R"];
// console.log(letters.join());
// console.log(letters.join(""));
// console.log(letters.join("&"));
// console.log(letters.join(" & "));
// console.log(letters.reverse().join("."));
// console.log(letters);
// console.log(letters.join("-"));

// console.log([12.3, 60, false].join()); // converted into string
// console.log(typeof [12.3, 60, false].join());
// console.log([12.3, 60, false].join(" "));
// console.log([12.3, 60, false].join(" # "));
// console.log([12.3, 60, false].join(" # -> "));

// ======================================
// 009 - Slice
// ======================================
// slice - copy portion of an array

// let animals = ["shark", "salmon", "whale", "bear", "lizard", "tortoise"];

// //                                                                          [   0        1    ]
// let swimmers = animals.slice(0, 2); // doesn't include index 2 gives // (2) ['shark', 'salmon']
// console.log(swimmers);
// console.log(animals.slice(0, 3));

// let mammals = animals.slice(2, 4);
// console.log(mammals);

// let reptiles = animals.slice(4, 6);
// console.log(reptiles);
// console.log(animals.slice(4)); // gives index 4 to all the end of the array // (2) ['lizard', 'tortoise']

// let quadruped = animals.slice(-3); // gives last 3 three elements // (3) ['bear', 'lizard', 'tortoise']
// console.log(quadruped);

// quadruped = animals.slice(-3, -1); // except last element gives other 2 elements // (2) ['bear', 'lizard']
// console.log(quadruped);

// let copy = animals.slice(); // returns copy of an array
// console.log(copy);

// console.log(animals); // original

// ======================================
// 010 - Splice
// ======================================
// spilce - remove/replace elements

// let animals = ["shark", "salmon", "whale", "bear", "lizard", "tortoise"];

// console.log(animals.splice(1, 0, "octupus")); // returns empty array [] bcpz i didn't any element
// console.log(animals); // returns modified array index 1 is salmon replaced with octopus
// // (7) ['shark', 'octupus', 'salmon', 'whale', 'bear', 'lizard', 'tortoise']

// console.log(animals.splice(3, 2)); // returns deleted 2 items from index index // (2) ['whale', 'bear']
// console.log(animals); // (5) ['shark', 'octupus', 'salmon', 'lizard', 'tortoise']

// console.log(animals.splice(3, 0, "snake", "frog")); // deleted 0 items // []
// console.log(animals); // added elements from index 3 which are snake,frog
// // (7) ['shark', 'octupus', 'salmon', 'snake', 'frog', 'lizard', 'tortoise']

// console.log(animals.splice(0, 2, "SHARK!", "OCTOPUS!")); // deleted items (2) ['shark', 'octupus']
// console.log(animals.slice(0, 2)); // you can check what you replaced using slice // (2) ['SHARK!', 'OCTOPUS!']

// console.log(animals); // (7) ['SHARK!', 'OCTOPUS!', 'salmon', 'snake', 'frog', 'lizard', 'tortoise']

/*
// NOTES
animals = [ 'shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise' ];

//splice(startIdx, deleteCount, itemsToInsert);

// =====================
// INSERTING w/ SPLICE
// =====================
// 'at index 1, delete 0 items and insert "octopus"'
animals.splice(1, 0, 'octopus');
//["shark", "octopus", "salmon", "whale", "bear", "lizard", "tortoise"]

// =====================
// DELETING w/ SPLICE
// =====================
//'at index 5, delete 2 items'
animals.splice(5, 2);
//["shark", "octopus", "salmon", "whale", "bear"]

// =====================
// REPLACING w/ SPLICE
// =====================
//'at index 3, delete 2 items and replace them with "orca" and "grizzly"'
animals.splice(3, 2, 'orca', 'grizzly');
// ["shark", "octopus", "salmon", "orca", "grizzly"]
*/

// ======================================
// 011 - Sorting(part 1)
// ======================================
// sort - sorts an array

/*
// NOTES
let people = [ 'Mrs. Robsinson', 'Angie', 'Jolene', 'Maggie May', 'Roxanne' ];

people.sort();
// ["Angie", "Jolene", "Maggie May", "Mrs. Robsinson", "Roxanne"]

let nums = [ 34, 10, 100000, 67, 99 ];

nums.sort();
//[10, 100000, 34, 67, 99]

//Sorts by converting values to strings and comparing their UTF-16 character codes.

//We will learn how to change this behavior later on!
*/

// let people = ["Mrs. Robsinson", "Angie", "Jolene", "Maggie May", "Roxanne"];

// console.log(people.sort()); // gives in alphabeteical order means sorting
// console.log(people); // original also changed means mutated

// let nums = [34, 10, 100000, 67, 99];

// console.log(nums.sort());
// //Sorts by converting values to strings and comparing their UTF-16 character codes.
// console.log(nums);

// 012 Intro to Reference Types
// ======================================
// Refernce vs Value
// Primitive Data Types
// String, Number, Symbol, Boolean, Undefined, Null,
// Arrays, Functions, Objects = object
// typeof

// when assigning primitive data type value to a variable any changes are made directly to that value, without affecting original value

// when assigning non-primitive data type value to a variable is done by reference so any changes will affect all the references.

/*
// NOTES
// ===============
// VALUE TYPES
// ===============
//Value Types - the variable stores the actual value:

let x = 100;
let y = x;

//If we change x
x = 99;
//y is unchanged
y; //100

// ===============
// REFERENCE TYPES
// ===============

// Array variables do not hold the actual array
//Instead, they store a REFERENCE to the array

let nums = [ 2, 4, 6, 8 ];
let myNums = nums; //myNums references the same array

// If we change nums
nums.push('BOO!');

//My nums is also changed:
myNums; //[2, 4, 6, 8, "BOO!"]
*/

// let fruit = "orange"; // fruit is storing the value of orange
// let color = fruit; // color is aslo storing the value of orange
// console.log(color);
// console.log(fruit);

// fruit = "watermelon"; // changing fruit value to watermelon
// console.log(fruit);
// console.log(color); // but color value didn't change // orange

// let nums = [5, 6, 7, 8];
// let otherNums = nums;

// console.log(nums);
// console.log(nums.push(9));
// console.log(nums);
// console.log(otherNums);

// console.log(otherNums.pop());
// console.log(otherNums.pop());
// console.log(otherNums.pop());

// console.log(nums);
// console.log(otherNums);

/*
// NOTES from SMILGA
// Refernce vs Value
// Primitive Data Types
// String, Number, Symbol, Boolean, Undefined, Null,
// Arrays, Functions, Objects = object
// typeof

// when assigning primitive data type value to a variable any changes are made directly to that value, without affecting original value

// when assigning non-primitive data type value to a variable is done by reference so any changes will affect all the references.

const number = 1;
let number2 = number;
number2 = 7;
console.log(`the first value is ${number}`);
console.log(`the second value is ${number2}`);

let person = { name: 'bob' };
let person2 = { ...person };
person2.name = 'susy';
console.log(`the name of the first person is ${person.name}`);
console.log(`the name of the second person is ${person2.name}`);
*/

// ======================================
// 013 - Using Const with Arrays
// ======================================
// CONST & ARRAYS
// You will often see people use const with arrays

// let x = 34;
// x += 5;
// console.log(x);

// const city = "Lisbon";
// console.log(city);
// // // // city = "London"; // you cannot change the const value of variable

// const foods = ["milk"];
// foods.push("chocolate");
// console.log(foods);
// foods.unshift("tortillas");
// console.log(foods);
// console.log(foods.pop());
// console.log(foods.pop());
// console.log(foods.pop());
// console.log(foods);

// // // foods = []; // we cannot do this

// ======================================
// 014 - Working with Nested Arrays
// ======================================
// NESTED ARRAYS or MULTI DIMENSIONAL ARRAYS
// We can store arrays inside other arrays!

/*
// NOTES
const animalPairs = [
	[ 'doe', [ 'buck', 'stag' ] ],
	[ 'ewe', 'ram' ],
	[ 'peahen', 'peacock' ]
];

//To access 'ewe'
animalPairs[1][0];

//To access 'buck'
animalPairs[0][1][0];

//Updating a sub-array:
animalPairs[0][1].push('hart');
//apparently some people call male deer 'harts'.  idk.
*/

// const animalPairs = [
//   ["doe", "buck"],
//   ["ewe", "ram"],
//   ["peahen", "peacock"],
// ];

// console.log(animalPairs);
// console.log(animalPairs[2]);
// console.log(typeof animalPairs[2]);
// console.log(animalPairs[2][0]);
// console.log(typeof animalPairs[2][0]);
// console.log(animalPairs[2][1]);
// console.log(animalPairs[1][1]);

// console.log(animalPairs[0]);
// console.log(animalPairs[0][1]);

// console.log((animalPairs[0][1] = "stag"));

// console.log(animalPairs);

// Nested arrays
// const board = [
//   ["O", null, "X"],
//   [null, "X", "O"],
//   ["X", "O", null],
// ];

// const animalPairs = [
//   ["doe", ["buck", "stag"]],
//   ["ewe", "ram"],
//   ["peahen", "peacock"],
// ];

// console.log(animalPairs[0]);
// console.log(animalPairs[0][1][1]);

////////////////////////////////
// 06 - Objects - The Core of Javascript
////////////////////////////////

// ======================================
// 001 - Intro to Objects
// ======================================
// OBJECTS
// Objects are collections of properties.
// Properties are key-value pair.
// Rather than accessing data using an index, we use custom keys.

/*
// NOTES
// ARRAYS ARE NOT IDEAL FOR STORING ALL TYPES OF DATA.

// We could use an array if we made sure we always follow the same pattern:
//index 0: total steps
//index 1: total floors
//etc.
const fitbitData = [ 308756, 1814, 211 ];

//We have no insight into WHAT we are storing at each index

//And we could mess things up super easily if we're not careful
const lucyFitbitData = [ 12344, 1814, 211 ];

// OBJECTS TO THE RESCUE!
*/

// AN OBJECT
// const fitbitData = {
//   totalSteps: 308727,
//   totalMiles: 211.7,
//   avgCalorieBurn: 5755,
//   workoutsThisWeek: "5 of 7",
//   avgGoodSleep: "2:13",
// };

// ======================================
// 002 - Creating Object Literals
// ======================================
// PROPERTY = KEY + VALUE
// VALID KEYS
// All keys are converted to strings
// Except for Symbols,which we haven't covered yet

// totalSteps  -> 308727,
// totalMiles  -> 211.7,
// avgCalorieBurn -> 5755,
// workoutsThisWeek -> '5 of 7',
// avgGoodSleep   -> '2:13's

// const fitBitData = {
//   totalSteps: 308727,
//   totalMiles: 211.7,
//   avgCalorieBurn: 5755,
//   workoutsThisWeek: "5 of 7",
//   avgGoodSleep: "2:13",
//   45: "forty five",
// };

// console.log(fitBitData);

// console.log("asd".length);
// console.log("asd".toUpperCase());

// console.log(fitBitData.totalMiles);
// console.log(fitBitData.avgCalorieBurn);
// console.log(fitBitData.45); // doesn,t work using dot

// // ALL TYPES WELCOME
// let comment = {
//   username: "sillyGoose420",
//   downVotes: 19,
//   upVotes: 214,
//   netScore: 195,
//   commentText: "Tastes linke chicken lol",
//   tags: ["#hilarious", "#funny", "#silly"],
//   isGilded: false,
// };

// ======================================
// 003 - Accessing Object Properties
// ======================================
// PROPERTY = KEY + VALUE
// VALID KEYS
// All keys are converted to strings

/*
// NOTES
const palette = {
  red: "#eb4d4b",
  yellow: "#f9ca24",
  blue: "#30336b",
};

//DOT NOTATION
palette.red; //'#eb4d4b'

//SQUARE BRACKET NOTATION
palette["yellow"]; //'#f9ca24'

//With square brackets, we can also use dynamic key names:

let mysteryColor = "blue";
palette[mysteryColor]; //'#30336b'
*/

// const numbers = {
//   100: "one hundred",
//   16: "sixteen",
//   "76 trombones": "great song!",
//   name: "bharu",
// };

// console.log(numbers.name);

// // // // console.log(numbers.100); // . method doesn't work

// console.log(numbers[100]); // [ ] this works

// console.log(numbers["100"]); // [ ] this also works bcoz all keys converted to strings

// console.log(numbers);

// console.log(numbers["76 trombones"]);

// const palette = {
//   red: "#eb4d4b",
//   yellow: "#f9ca24",
//   blue: "#30336b",
// };

// console.log(palette.blue);

// console.log(palette["blue"]); // this also works

// console.log(palette.yellow);

// let mysteryColor = "yellow";
// console.log(palette[mysteryColor]);

// console.log(palette.green);
// console.log(palette["asd"]);

// console.log(palette["bl" + "ue"]);

// ======================================
// 004 - Adding and Updating Properties
// ======================================
// UPDATING & ADDING PROPERTIES

/*
// NOTES
const userReviews = {};

//Adding a new property:
userReviews["queenBee49"] = 4.0;
userReviews.mrSmith78 = 3.5;

//Updating existing properties
userReviews["queenBee49"] += 2;
userReviews.mrSmith78++;
*/

// const userReviews = {};

// userReviews["queenBee49"] = 4.0;
// console.log(userReviews);

// userReviews.mrSmith78 = 3.8;
// console.log(userReviews);

// console.log(userReviews.colt);

// userReviews["queenBee49"] += 2;
// console.log(userReviews);

// userReviews.mrSmith78++;
// console.log(userReviews);

// ======================================
// 005 - Nested Arrays & Objects
// ======================================
// ARRAYS + OBJECTS

// const student = {
//   firstName: "David",
//   lastName: "Jones",
//   strengths: ["Music", "Art"],
//   exams: {
//     midterm: 92,
//     final: 88,
//   },
// };

// // const avg = (student.exams.midterm + student.exams.final) / 2;

// const average = (student.exams.midterm + student.exams.final) / 2;
// console.log(average);

// console.log(student.strengths[1]);

// const shoppingCart = [
//   {
//     product: "Jenga Classic",
//     price: 6.88,
//     quantity: 1,
//   },
//   {
//     product: "Echo Dot",
//     price: 29.99,
//     quantity: 3,
//   },
//   {
//     product: "Fire Stick",
//     price: 39.99,
//     quantity: 2,
//   },
// ];

// console.log(shoppingCart[0].product);
// console.log(shoppingCart[1].price);
// console.log(shoppingCart[2].quantity);

// const game = {
//   player1: {
//     username: "Blue",
//     playingAs: "X",
//   },
//   player2: {
//     username: "Muffins",
//     playingAs: "O",
//   },
//   board: [
//     ["O", null, "X"],
//     ["X", "O", "X"],
//     [null, "O", "X"],
//   ],
// };

// console.log(game.player1.playingAs);
// console.log(game.player2.username);

// console.log(game.board[1][1]);
// console.log(game.board[1][2]);

// ======================================
// 006 - Objects and Reference Types
// ======================================
//Objects & Arrays are reference types
//Both variables reflect that change...

/*
// NOTES
const palette = {
  red: "#eb4d4b",
  yellow: "#f9ca24",
  blue: "#30336b",
};

//Objects & Arrays are reference types
const palette2 = palette;
//If we change one value...
palette2.green = "#ebf876";

//Both variables reflect that change...
palette.green; //"#ebf876"
palette2.green; //"#ebf876"
*/

// const palette = {
//   red: "#eb4d4b",
//   yellow: "#f9ca24",
//   blue: "#30336b",
// };

// const palette2 = palette;
// palette2.green = "#ebf876";
// console.log(palette);
// console.log(palette2);
// palette2.green = "bharu";
// console.log(palette);
// console.log(palette2);
// palette.yellow = "yellowcolor";
// console.log(palette);
// console.log(palette2);

// ======================================
// 007 -Array_Object Equality
// ======================================

// let nums = [1, 2, 3];
// let mystery = [1, 2, 3];
// let moreNums = nums;

// //They 'look' the same, but refer to different arrays
// console.log(nums === mystery); // false

// //These two arrays reference the exact same array, so we get true:
// console.log(nums === moreNums); //true

// const user = {
//   username: "CherryGarcia8",
//   email: "garcia@gmail.com",
//   notifications: ["message", "alert"],
// };

// //THIS WILL NOT WORK!
// if (user.notifications === []) {
//   console.log("NO NEW NOTIFICATIONS!");
// }
// // THIS VERSION DOES WORK!
// if (!user.notifications.length) {
//   console.log("NO NEW NOTIFICATIONS!");
// }

// console.log({} === {});
// console.log({ a: 1 } === { a: 1 });
// let data1 = { a: 1 };
// let data2 = data1;
// console.log(data1 === data2);
// data1.name = "bharu";
// console.log(data1);
// console.log(data2);
// data2.age = 28;
// console.log(data1);
// console.log(data2);

////////////////////////////////
// 07 - The World of Loops
////////////////////////////////

// 001 Intro to Loops
// ======================================
// GOALS
// Write for loops
// Write while loops
// Avoid infinite loops!
// Iterate over arrays and objects

// LOOPS
// Doing things repeatedly
// Loops allow us to repeat code
// *) Print "hello" 10 times
// *) Sum all numbers in an array
// There are multiple types:
// for loop
// while loop
// for...of loop
// for...in loop

// 002 For Loops
// ======================================
// FOR LOOPS
// for(initialExpression,condition,incrementExpression){}

// To avoid infinite loops remember below points
// for(i=some num;then i should have <=;if i needs increment){}
// for(i=some num;then i should have >=;if i needs decrement){}

/*
// NOTES
// 3 pieces to a for loop:
// 1 - Variable declaration
// 2 - The condition
// 3 - Update the loop variable

// STEP 1: 'let i = 1' - start i at 1
// STEP 2: 'i <= 10' - run the loop as long as i <= 10
// STEP 3: 'i++' - add 1 to i each time through
for (let i = 1; i <= 10; i++) {
	console.log('HELLO:', i);
}

// Counting by 3's:
for (let i = 1; i <= 10; i += 3) {
	console.log('HELLO:', i);
}

// Printing first 20 perfect squares:
for (let num = 1; num <= 20; num++) {
	console.log(`${num}x${num} = ${num * num}`);
}

// Counting DOWN from 200 by intervals of 25:
for (let i = 200; i >= 0; i -= 25) {
	console.log(i);
}
console.log('AFTER THE LOOP!');
*/

// 10 total Times

// 50 initial value
// 60 when to run the loop
// +1 how to change value each time

// for (let i = 1; i <= 10; i++) {
//   console.log("Hello", i);
// }

// for (let i = 1; i <= 10; i += 3) {
//   console.log("HELLO:", i);
// }

// for (let num = 1; num <= 20; num++) {
//   console.log(`${num}x${num}=${num * num}`);
// }

// To avoid infinite loops remember below points
// for(i=some num;then i should have <=;if i needs increment){}
// for(i=some num;then i should have >=;if i needs decrement){}

// start i at 50
// subtract 10 each iteration
// Keep going as long as i >= 0

// for (let i = 50; i >= 0; i -= 10) {
//   console.log(i);
// }

// for (let i = 200; i >= 0; i -= 25) {
//   console.log(i);
// }

// write 1 to 30 perfect squares
// for (let i = 1; i <= 30; i++) {
//   console.log(`${i}x${i}=${i * i}`);
// }

// for (let i = 20; i >= 0; i--) {
//   console.log(`${i}x${i}=${i * i}`);
// }

// write 1 to 30 perfect squares in reverse order
// for (let i = 30; i >= 0; i--) {
//   console.log(`${i}x${i}=${i * i}`, i);
// }

// write Programs
// 1) write 1 to 20 perfect squares
// 2) write 1 to 20 perfect squares in reverse order
// 3) write 1 to 30 perfect squares
// 4) write 1 to 30 perfect squares in reverse order
// 5) write 1 to 10 perfect cubes
// 6) write 1 to 10 perfect cubes in reverse order
// 7) write 1 to 20 perfect cubes
// 8) write 1 to 20 perfect cubes in reverse order

// for (let i = 1; i <= 20; i++) {
//   console.log(`${i}x${i}=${i * i}`, i);
// }

// for (let i = 20; i >= 1; i--) {
//   console.log(`${i}x${i}=${i * i}`, i);
// }

// for (let i = 1; i <= 30; i++) {
//   console.log(`${i}x${i}=${i * i}`, i);
// }

// for (let i = 30; i >= 1; i--) {
//   console.log(`${i}x${i}=${i * i}`, i);
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(`${i}x${i}x${i}=${i * i * i}`, i);
// }

// for (let i = 10; i >= 1; i--) {
//   console.log(`${i}x${i}x${i}=${i * i * i}`, i);
// }

// for (let i = 1; i <= 20; i++) {
//   console.log(`${i}x${i}x${i}=${i * i * i}`, i);
// }

// for (let i = 20; i >= 1; i--) {
//   console.log(`${i}x${i}x${i}=${i * i * i}`, i);
// }

// 003 Infinite Loops
// ======================================
// INFINITE LOOPS

/*
// NOTES
// DON'T RUN THIS!
// for (let i = 1; i !== 20; i += 2) {
// 	console.log(i);
// }

// THE ABOVE LOOP NEVER ENDS
// i starts at 1, and we add 2 each time
// 1,3,5,7,9,11,13,15,17,19,21,etc.
// i never hits 20, so the loop condition is always true

// Instead, write it this way:
for (let i = 1; i <= 20; i += 2) {
	console.log(i);
}
*/

// // DO NOT RUN THIS CODE! RESULTS INFINITE LOOP!!!
// // for (let i = 20; i >= 0; i++) {
//   console.log(i);
// } // BADDDD!

// 004 For Loops & Arrays
// ======================================
// FOR LOOPS + ARRAYS
// To loop over an array, start at 0 and continue to the last index(length-1)

// ======= EXAMPLE 1 ==========
// Printing each element in an array
// const examScores = [98, 77, 84, 91, 57, 66];

// for (let i = 0; i < examScores.length; i++) {
//   console.log(i, examScores[i]);
// }
// OR
// for (let i = 0; i <= examScores.length - 1; i++) {
//   console.log(i, examScores[i]);
// }

// ======= EXAMPLE 2 ==========
// // Same idea, but with a more complex array
// const myStudents = [
//   {
//     firstName: "Zeus",
//     grade: 86,
//   },
//   {
//     firstName: "Artemis",
//     grade: 97,
//   },
//   {
//     firstName: "Hera",
//     grade: 72,
//   },
//   {
//     firstName: "Apollo",
//     grade: 90,
//   },
// ];

// traditional way or long way
// for (let i = 0; i < myStudents.length; i++) {
//   console.log(`${myStudents[i].firstName} scored ${myStudents[i].grade}`);
// }

// smart way
// for (let i = 0; i < myStudents.length; i++) {
//   let student = myStudents[i];
//   console.log(`${student.firstName} scored ${student.grade}`);
// }

// for (let i = 0; i < myStudents.length; i++) {
// 	let student = myStudents[i];
// 	console.log(`${student.firstName} scored ${student.grade}`);
// }

// ======= EXAMPLE 3 ==========
// // Averaging all grades in myStudents array
// let total = 0; //total will hold the sum of all grades

// for (let i = 0; i < myStudents.length; i++) {
// 	let student = myStudents[i];
// 	total += student.grade; //add each grade to total
// }
// console.log(total / myStudents.length); //divide by number of students

// ======= EXAMPLE 4 ==========
// // Reversing a string
// const word = "stressed";

// for (let i = 0; i < word.length; i++) {
//   console.log(word[i], i);
// }

// for (let i = word.length - 1; i >= 0; i--) {
//   console.log(word[i], i);
// }

// let reversedWord = ""; //will hold reversed string

// // //Loop backwards over the string
// for (let i = word.length - 1; i >= 0; i--) {
//   reversedWord += word[i]; //add each char to reversedWord
// }

// console.log(reversedWord);

// PRACTICE
// const examScores = [22, 98, 77, 84, 76, 65, 89, 91, 57, 66];

// FORWORD LOOPING
// for (let i = 0; i < examScores.length; i++) {
//   console.log(examScores[i]);
// }
// FORWARD LOOPING WITH INDEX NUMBERED
// for (let i = 0; i < examScores.length; i++) {
//   console.log(examScores[i], i);
// }
// BACKWARD LOOPING
// for (let i = examScores.length - 1; i >= 0; i--) {
//   console.log(examScores[i]);
// }
// BACKWARD LOOPING WITH INDEX NUMBERED
// for (let i = examScores.length - 1; i >= 0; i--) {
//   console.log(examScores[i], i);
// }

// AVG OF examScores
// let total = 0;
// for (let i = 0; i < examScores.length; i++) {
//   total += examScores[i];
// }
// console.log(total / examScores.length);

// const myStudents = [
//   {
//     firstName: "Zeus",
//     grade: 86,
//   },
//   {
//     firstName: "Artemis",
//     grade: 97,
//   },
//   {
//     firstName: "Hera",
//     grade: 72,
//   },
//   {
//     firstName: "Apollo",
//     grade: 90,
//   },
//   {
//     firstName: "bharu",
//     grade: 80,
//   },
//   {
//     firstName: "dhanush",
//     grade: 99,
//   },
// ];

// FORWARD LOOPING WITH INDEX NUMBERED
// for (let i = 0; i < myStudents.length; i++) {
//   console.log(myStudents[i], i);
// }

// WITHOUT STORING IN A VARIABLE
// for (let i = 0; i < myStudents.length; i++) {
//   console.log(`${myStudents[i].firstName} scored ${myStudents[i].grade}`);
// }
//OR
// WITH STORING IN A VARIABLE
// for (let i = 0; i < myStudents.length; i++) {
//   let student = myStudents[i];
//   console.log(`${student.firstName} scored ${student.grade}`);
// }

// AVG GRADE
// let total = 0;
// for (let i = 0; i < myStudents.length; i++) {
//   total += myStudents[i].grade;
//   console.log(total); // this gives iteration 86,86+97=183,255,...,524
// }
// console.log(total); // this gives addition of myStudents[i].grade
// console.log(total / myStudents.length);

// OR

// // Averaging all grades in myStudents array
// let total = 0; //total will hold the sum of all grades

// for (let i = 0; i < myStudents.length; i++) {
// 	let student = myStudents[i];
// 	total += student.grade; //add each grade to total
// }
// console.log(total / myStudents.length); //divide by number of students

// const str = "RavikantiBhargav";
// console.log(str.length);

// FORWARD LOOPING WITH INDEX NUMBERED
// for (let i = 0; i < str.length; i++) {
//   console.log(str[i], i);
// }

// // Loop backwards over the string

// let reversedWord = "";
// for (let i = str.length - 1; i >= 0; i--) {
//   reversedWord += str[i];
//   // console.log(reversedWord);
// }
// console.log(reversedWord);
// console.log(reversedWord.length);

// 005 Nested for Loops
// ======================================

// for (let i = 1; i <= 10; i++) {
//   console.log("     OUTER LOOP", i);
//   for (let j = 10; j >= 0; j -= 2) {
//     console.log("inner loop", j);
//   }
// }

// // EXAMPLE 2
// // Sum all elements in our 2048 board
// const gameBoard = [
//   [4, 32, 8, 4],
//   [64, 8, 32, 2],
//   [8, 32, 16, 4],
//   [2, 8, 4, 2],
// ];

// traditional
// for (let i = 0; i < gameBoard.length; i++) {
//   console.log(gameBoard[i]);
//   for (let j = 0; j < gameBoard.length; j++) {
//     console.log(gameBoard[i][j]);
//   }
// }
// or
// for (let i = 0; i < gameBoard.length; i++) {
//   let row = gameBoard[i];
//   console.log(row);
//   for (let j = 0; j < gameBoard.length; j++) {
//     console.log(row[j]);
//   }
// }
// calculating totalscore
// let totalScore = 0;
// for (let i = 0; i < gameBoard.length; i++) {
//   let row = gameBoard[i];
//   for (let j = 0; j < row.length; j++) {
//     totalScore += row[j];
//   }
// }
// console.log(totalScore);

// let totalScore = 0;
// //outer loop iterates through the rows
// for (let i = 0; i < gameBoard.length; i++) {
//   let row = gameBoard[i];
//   //inner loop iterates over each cell in a given row
//   for (let j = 0; j < row.length; j++) {
//     totalScore += row[j];
//   }
// }
// console.log(totalScore);

// 006 Intro to While Loop
// ======================================
// WHILE LOOPS
// A while loop continues to run as long as its test condition is true

// for (let i = 0; i <= 5; i++) {
//   console.log(i);
// }

// Recreating the above example using while loop
// let j = 0;
// while (j <= 5) {
//   console.log(j);
//   j++;
// }

// 007 More While Loops
// ======================================
// WHILE LOOPS
// A while loop continues to run as long as its test condition is true

/*
// NOTES
// Pick a target number we are trying to guess
const target = Math.floor(Math.random() * 10);
// Make initial guess
let guess = Math.floor(Math.random() * 10);

// Continue looping while guess is not the target num
while (guess !== target) {
	console.log(`Target: ${target} Guess: ${guess}`);
	// IMPORTANT!!
	// Update the value of guess each time through the loop
	guess = Math.floor(Math.random() * 10);
}
console.log(`Target: ${target} Guess: ${guess}`);
console.log(`CONGRATS YOU WIN!!`);
*/

/*
const target = Math.floor(Math.random() * 10);

let guess = Math.floor(Math.random() * 10);

while (guess !== target) {
  console.log(`Target: ${target} Guess: ${guess}`);
  guess = Math.floor(Math.random() * 10);
}
console.log(`Target: ${target} Guess: ${guess}`);
console.log(`congrats you win`);
*/

// while(some condition)
// in the loop, update or attempt to make that condition false

// const targetScore = Math.floor(Math.random() * 10);

// let playerScore = Math.floor(Math.random() * 10);

// while (playerScore !== targetScore) {
//   console.log(`PLAYER: ${playerScore} TARGET:${targetScore}`);
//   playerScore = Math.floor(Math.random() * 10);
// }
// console.log(`PLAYER: ${playerScore} TARGET:${targetScore}`);
// console.log(`CONGRATS PLAYER`);

// 008 Break Keyword
// ======================================

// const target = Math.floor(Math.random() * 10);
// let guess;
// //ANOTHER APPROACH TO THE PREVIOUS GUESSING 'GAME'
// while (true) {
//   if (target === guess) break; //Break stops the loop in its tracks
//   console.log(`Target: ${target} Guess: ${guess}`);
//   guess = Math.floor(Math.random() * 10);
// }
// console.log(`Target: ${target} Guess: ${guess}`);
// console.log(`CONGRATS YOU WIN!!`);

// 009 For...Of Intro
// ======================================
// FOR...OF LOOP
// A nice and easy way of iterating over arrays (or other iterable objects)
// for(variable of iterable){
//     statement
// }

/*
// NOTES
let subreddits = ["soccer", "popheads", "cringe", "books"];
// With a standard for loop
for (let i = 0; i < subreddits.length; i++) {
  console.log(subreddits[i]);
}
//Much cleaner  with a for...of loop!
for (let sub of subreddits) {
  console.log(sub);
}
//Works with other iterables, like strings!
for (let char of "cockadoodledoo") {
  console.log(char.toUpperCase());
}
*/

// let subreddits = ["soccer", "popheads", "cringe", "books"];

// using for loop
// for (let i = 0; i < subreddits.length; i++) {
//   console.log(subreddits[i],i);
// }

// using for of loop too easy for iterating
// for (let sub of subreddits) {
//   console.log(sub);
// }

// const word = "Bhargavravikanti";
// for (let i of word) {
//   console.log(i);
// }

// for (let char of "cockadoodledoo") {
//   console.log(char.toUpperCase());
// }

// 010 Comparing For and For...Of
// ======================================

/*
// NOTES
const magicSquare = [
  [2, 7, 6],
  [9, 5, 1],
  [4, 3, 8],
];

// Version using a for loop...
for (let i = 0; i < magicSquare.length; i++) {
  let row = magicSquare[i];
  let sum = 0;
  for (let j = 0; j < row.length; j++) {
    sum += row[j];
  }
  console.log(`${row} summed to ${sum}`);
}

// Much cleaner version using a for...of
for (let row of magicSquare) {
  let sum = 0;
  for (let num of row) {
    sum += num;
  }
  console.log(`${row} summed to ${sum}`);
}

// EXAMPLE 2
// If you need the indices, use a traditional for loop!
const words1 = ["mail", "milk", "bath", "black"];
const words2 = ["box", "shake", "tub", "berry"];

for (let i = 0; i < words1.length; i++) {
  //Access index i of both arrays
  console.log(`${words1[i]}${words2[i]}`);
}
*/

// const magicSquare = [
//   [2, 7, 6],
//   [9, 5, 1],
//   [4, 3, 8],
// ];

// for (let i = 0; i < magicSquare.length; i++) {
//   // console.log(magicSquare[i]);
//   let row = magicSquare[i];
//   let sum = 0;
//   for (let j = 0; j < magicSquare.length; j++) {
//     // console.log(row[j]);
//     sum += row[j];
//   }
//   console.log(`${row} summed is ${sum}`);
// }

// for (let row of magicSquare) {
//   let sum = 0;
//   for (let num of row) {
//     sum += num;
//   }
//   console.log(`${row} summed to ${sum}`);
// }

// If you need the indices, use a traditional for loop!
// const words1 = ["mail", "milk", "bath", "black"];
// const words2 = ["box", "shake", "tub", "berry"];

// for (let i = 0; i < words1.length; i++) {
//   //Access index i of both arrays
//   console.log(`${words1[i]}${words2[i]}`);
// }

// 011 For...Of with Objects
// ======================================
// OBJECTS!
// We can loop over the keys of an object, using Objects.keys()
// Three methods to convert objects into arrays
// Object.keys() - converts property names into array
// Object.values() - converts property values into array
// Object.entries() - converts both

/*
// NOTES
const movieReviews = {
  Arrival: 9.5,
  Alien: 9,
  Amelie: 8,
  "In Bruges": 9,
  Amadeus: 10,
  "Kill Bill": 8,
  "Little Miss Sunshine": 8.5,
  Coraline: 7.5,
};

// THIS DOES NOT WORK!
// OBJECTS ARE NOT ITERABLE (can't use a for...of loop)
// for (let x of movieReviews) {
// 	console.log(x);
// }

// We CAN iterate over the keys of an object
for (let movie of Object.keys(movieReviews)) {
  console.log(`You rated ${movie} - ${movieReviews[movie]}`);
}

// We can also iterate over the values
// To calculate the average movie rating:
const ratings = Object.values(movieReviews);
let total = 0;
for (let r of ratings) {
  total += r;
}
let avg = total / ratings.length;
console.log("Average Rating: ", avg);
*/

// const movieReviews = {
//   Arrival: 9.5,
//   Alien: 9,
//   Amelie: 8,
//   "In Bruges": 9,
//   Amadeus: 10,
//   "Kill Bill": 8,
//   "Little Miss Sunshine": 8.5,
//   Coraline: 7.5,
// };

// console.log(Object.keys(movieReviews));
// console.log(Object.values(movieReviews));

// for (let movie of Object.keys(movieReviews)) {
//   console.log(movie, movieReviews[movie]);
// }

// approach 1
// let total = 0;
// for (let val of Object.values(movieReviews)) {
//   // console.log(val);
//   total += val;
// }
// console.log(total);
// let avg = total / Object.values(movieReviews).length;
// console.log(avg);

// approach 2
// let ratings = Object.values(movieReviews);
// let total = 0;
// for (let val of ratings) {
//   // console.log(val);
//   total += val;
// }
// // console.log(total);
// let avg = total / ratings.length;
// console.log(avg);

// console.log(Object.keys(movieReviews)[0]);
// console.log(Object.keys(movieReviews)[1]);
// console.log(Object.keys(movieReviews)[2]);

// console.log(Object.values(movieReviews)[0]);
// console.log(Object.values(movieReviews)[1]);
// console.log(Object.values(movieReviews)[2]);

// console.log(Object.entries(movieReviews));
// console.log(Object.entries(movieReviews)[0]);
// console.log(Object.entries(movieReviews)[1]);
// console.log(Object.entries(movieReviews)[3]);

// my rating to movies
// for (let movie of Object.keys(movieReviews)) {
//   // console.log(movie, movieReviews[movie]);
//   let score = movieReviews[movie];
//   console.log(`I rated ${movie} ${score}/10`);
// }

// Three methods to convert objects into arrays
// Object.keys() - converts property names into array
// Object.values() - converts property values into array
// Object.entries() - converts both

// const person = {
//   name: "john",
//   age: 25,
//   status: "student",
// };

// // Object.keys()
// console.log(Object.keys(person));
// console.log(Object.keys(person)[0]);
// console.log(Object.keys(person)[1]);
// console.log(Object.keys(person)[2]);
// console.log(Object.keys(person)[2], typeof Object.keys(person)[2]);
// console.log(Object.keys(person)[3]);
// // Object.values()
// console.log(Object.values(person));
// console.log(Object.values(person)[0]);
// console.log(Object.values(person)[1]);
// console.log(Object.values(person)[2]);
// console.log(Object.values(person)[2], typeof Object.values(person)[2]);
// console.log(Object.values(person)[3]);
// // Object.entries()
// console.log(Object.entries(person));
// console.log(Object.entries(person)[0]);
// console.log(Object.entries(person)[1]);
// console.log(Object.entries(person)[2]);
// console.log(Object.entries(person)[2], typeof Object.entries(person)[2]);
// console.log(Object.entries(person)[3]);

// 012 For...In Loops
// ======================================
// To iterate objects directly without using Object.keys() for keys or Object.values() for values of an object or Object.entries() for both Instead use for...in loop

// const jeopardyWinnings = {
//   regularPLay: 2522700,
//   watsonChallenge: 300000,
//   tournamentOfChampions: 500000,
//   battleOfTheDecades: 100000,
// };

// for (let prop in jeopardyWinnings) {
//   // console.log(prop);
//   // console.log(prop, jeopardyWinnings[prop]);
//   console.log(jeopardyWinnings[prop]);
// }

// let total = 0;
// for (let prop in jeopardyWinnings) {
//   // console.log(prop);
//   // console.log(prop, jeopardyWinnings[prop]);
//   // console.log(jeopardyWinnings[prop]);
//   total += jeopardyWinnings[prop];
// }
// console.log(total);
// console.log(`Ken Jennings Total Earnings: ${total}`);

// Technically we can use for...in with an array
// Techniclly arrays also objects which means we can use for...in loop with an array
// don,t use for..in with an array even if you can use there are some issues and also you can easily iterate an array using for...of loop
// use for...in for Objects only

// for (let k in [88, 99, 77, 66]) {
//   // console.log(k); // array indices we can consider as keys so array values consider as values
//   console.log(k, [88, 99, 77, 66][k]);
// }

// console.log(jeopardyWinnings["regularPLay"]);
// console.log(jeopardyWinnings);

// 00 Todo List Project
// ======================================

// let input = prompt("what would like to do?");
// const todos = ["Collect Chiken Eggs", "Clean Litter Box"];

// while (input !== "quit" && input !== "q") {
//   if (input === "list") {
//     console.log("******************");
//     for (let i = 0; i < todos.length; i++) {
//       console.log(`${i}: ${todos[i]}`);
//     }
//     console.log("******************");
//   } else if (input === "new") {
//     const newTodo = prompt("OK, WHAT IS THE TODO?");
//     todos.push(newTodo);
//     console.log(`${newTodo} added to the list`);
//   } else if (input === "delete") {
//     const index = parseInt(prompt("OK, ENTER AN INDEX TO DELETE:"));
//     if (!Number.isNaN(index)) {
//       const deleted = todos.splice(index, 1);
//       console.log(`Ok, deleted ${deleted[0]}`);
//     } else {
//       console.log("Unknown index");
//     }
//   }
//   input = prompt("what would like to do?");
// }
// console.log("OK YOU QUIT THE APP");

// // Revising splice
// const nums = [1, 2, 3, 4, 5];
// console.log(nums);
// console.log(nums.splice(2, 1));
// console.log(nums.splice(2, 2));
// console.log(nums.splice(2, 2));
// console.log(nums);

// const smallLetters = ["a", "b", "c"];
// console.log(smallLetters.splice("1", 1)); // even if you enter any number as a string it deletes that indexed number   // same as normal // ['b']
// console.log(smallLetters.splice("1", 1)); // ["c"]
// console.log(smallLetters); // ["a"]

// // remember this
// console.log(smallLetters.splice("dfgfgdfgf", 1)); // if you enter text string it  deletes index number 0 // ["a"]
// console.log(smallLetters); // [] = resulted empty array

// console.log(parseInt("23"), typeof parseInt("23")); // converts string into number
// console.log(parseInt("sdfdsfdsfgdsg")); // NAN
// console.log(parseInt("0")); // 0

// // Method to check whether it is a number or not a number
// console.log(Number.isNaN(32345)); // false
// console.log(Number.isNaN(NaN)); // true

// 00 Guessing Game // some problem with ths code getting infinite
// ======================================
// console.log(Math.floor(Math.random())); // gives always 0

// let maximum = parseInt(prompt("Enter the maximum number!"));
// while (!maximum) {
//   maximum = parseInt(prompt("Enter a number!"));
// }

// const targetNum = Math.floor(Math.random() * maximum) + 1;
// console.log(targetNum);

// let guess = parseInt(prompt("Enter your first guess!"));
// let attempts = 1;

// while (parseInt(guess) !== targetNum) {
//   if (guess === "q") break;
//   attempts++;
//   if (guess > targetNum) {
//     guess = prompt("Too high! Enter a new guess:");
//   } else {
//     guess = prompt("Too low! Enter a new guess:");
//   }
// }

// if (guess === "q") {
//   console.log("OK, YOU QUIT");
// } else {
//   console.log("CONGRATS YOU WIN!");
//   console.log(`You got it! It took you ${attempts} guesses`);
// }

// ======================================
// 0 - All 34 String Methods in Javascript in ONE VIDEO
// ======================================

// Strings as objects

// const str = "A String primitive";

// const str1 = new String("A String object");

// console.log(str.length);
// console.log(str1.length);

// const str2 = "Code Explained";
// console.log(str2.length);
// // String Character Access
// console.log(str2[0]);
// console.log(str2[5]);
// console.log(str2[str2.length - 1]);
// console.log(str2[str2.length - 2]);
// console.log(str2[str2.length - 4]);

// 01 - String.charAt()
// console.log(str2.charAt(5));

// 02 - String.indexOf() 03 - String.lastIndexOf()

// const s = "The code undefined code code !";
// console.log(s.indexOf("Code"));
// console.log(s.indexOf("code")); // gives first occurence
// console.log(s.indexOf("code", 4));
// console.log(s.indexOf("code", 5));
// console.log(s.indexOf("code", -5));
// console.log(s.indexOf(""));
// console.log(s.indexOf());

// console.log(s.lastIndexOf("Code"));
// console.log(s.lastIndexOf("code")); // last occurence
// console.log(s.lastIndexOf("code", 24));
// console.log(s.lastIndexOf("code", 23));
// console.log(s.lastIndexOf("code", -5));
// console.log(s.lastIndexOf(""));
// console.log(s.lastIndexOf());

// 04 - String.slice() 05 - String.substring()

// const s = "The morning is upon us.";
// console.log(s.length);

// console.log(s.slice(12));
// console.log(s.slice(-11));
// console.log(s.slice(23));
// console.log(s.slice(13, 16));
// console.log(s.slice(16, 13));
// console.log(s.slice(-8, -4));
// console.log(s.slice(-8, 4));
// console.log(s.slice(8, -4));

// console.log(s.substring(12));
// console.log(s.substring(-11)); // negative behaves as 0 index so it gives whole string returns
// console.log(s.substring(23));
// console.log(s.substring(13, 16));
// console.log(s.substring(16, 13));
// console.log(s.substring(-8, -4));
// console.log(s.substring(-8, 4));
// console.log(s.substring(8, -4));

// 06 - String.split()

// const string = "The morning is upon us.";
// console.log(string.split());
// console.log(string.split(""));
// console.log(string.split(" "));
// console.log(string.split("o")); // o will not include
// console.log(string.split("o", 2));
// console.log(string.split("o", 0));

// 07 - String.includes()

// const sentence = "The quick brown fox jumps over the lazy dog.";
// console.log(sentence.includes("fox"));
// console.log(sentence.includes("Fox"));
// console.log(sentence.includes("fox", 0));
// console.log(sentence.includes("fox", 16));
// console.log(sentence.includes("fox", 17));

// 08 - String.startsWith()

// const str = "Cats are the best!";
// console.log(str.startsWith("Cats"));
// console.log(str.startsWith("are"));
// console.log(str.startsWith("are", 5));

// 09 - String.endsWith()

// const str = "Cats are the best!";
// console.log(str.length);
// console.log(str.endsWith("best!"));
// console.log(str.endsWith("best"));
// console.log(str.endsWith("best", 17));

// 10 - String.concat()

// const str1 = "Hello";
// const str2 = "World";
// console.log(str1.concat(str2));
// console.log(str1.concat(" ", str2));

// 11 - String.repeat()

// console.log("abc".repeat(0));
// console.log("abc".repeat(1));
// console.log("abc".repeat(2));
// console.log("abc".repeat(3));
// console.log("abc".repeat(3.5));
// // console.log("abc".repeat(-1)); // error
// // console.log("abc".repeat(1 / 0)); // error

// 12 - String.trimStart() 13 - String.trim() 14 - String.trimEnd()

// const greeting = "           Hello world!      ";
// console.log(greeting.trim());
// console.log(greeting.trimStart());
// console.log(greeting.trimEnd());

// 15 - String.padStart() 16 - String.padEnd()

// console.log("abc".padStart(10));
// console.log("abc".padEnd(10));
// console.log("abc".padStart(10, "foo"));
// console.log("abc".padEnd(10, "foo"));
// console.log("abc".padStart(10, "12345678"));
// console.log("abc".padEnd(10, "12345678"));
// console.log("abc".padStart(2));
// console.log("abc".padEnd(2));

// 17 - String.localeCompare()

// 18 - String.search()

// let text = "The rain in SPAIN stays mainly in the plain";
// console.log(text.search("ain"));
// console.log(text.search(/ain/));
// console.log(text.search(/AIN/));
// console.log(text.search(/AIN/i));
// console.log(text.search(/w/));

// 19 - String.match()

// let text = "The rain in SPAIN stays mainly in the plain";
// console.log(text.match("ain"));
// console.log(text.match(/ain/));
// console.log(text.match(/ain/g));
// console.log(text.match(/ain/gi));
// console.log(text.match(/w/));

// 20 - String.matchAll()

// let text = "The rain in SPAIN stays mainly in the plain";
// // console.log(text.matchAll("ain"));
// // console.log(text.matchAll(/ain/g));
// let res = text.matchAll("ain");
// console.log([...res]);
// res = text.matchAll(/ain/gi);
// console.log([...res]);
// res = text.matchAll(/w/gi);
// console.log([...res]);
// // console.log(text.matchAll(/ain/)); // error

// 21 - String.replace()

// let text = "Mr Blue has a blue house and a blue car";
// console.log(text.replace("blue", "red"));

// let result = text.replace("blue", (match) => {
//   return match.toUpperCase();
// });

// console.log(result);

// result = text.replace(/blue/g, "red");
// console.log(result);

// result = text.replace(/blue/gi, "red");
// console.log(result);

// result = text.replace(/blue/gi, (match) => {
//   return match.toUpperCase();
// });
// console.log(result);

// 22 - String.replaceAll()

// let text = "Mr Blue has a blue house and a blue car";
// console.log(text.replaceAll("blue", "red"));
// let result = text.replaceAll("blue", (match) => {
//   return match.toUpperCase();
// });
// console.log(result);
// result = text.replaceAll(/blue/g, "red");
// console.log(result);

// result = text.replaceAll(/blue/gi, "red");
// console.log(result);

// result = text.replaceAll(/blue/gi, (match) => {
//   return match.toUpperCase();
// });
// console.log(result);

// result = text.replaceAll(/blue/gi, "powerup".toUpperCase());
// console.log(result);

// // result = text.replaceAll(/blue/, "red"); // error
// console.log(result);

// 23 - String.charCodeAt() 24 - String.codePointAt()

// 25 - String.fromCharCode() 26 - String.fromCodePoint()

// 27 - String.normalize()

// 28 - String.toLowerCase() 29 - String.toUpperCase()

// const greeting = "hello WORLD!";
// console.log(greeting.toLowerCase());
// console.log(greeting.toUpperCase());

// 30 - String.toLocaleUpperCase() 31 - String.toLocaleLowerCase()

// const lower = "istanbul";
// console.log(lower.toLocaleUpperCase("en-US")); // English US

// const upper = lower.toLocaleUpperCase("tr");
// console.log(upper); // Turkish

// console.log(upper.toLocaleLowerCase("en-US"));

// console.log(upper.toLocaleLowerCase("tr"));

// 32 - String.toString() 33 - String.valueOf()

// const stringObject = new String("Hello World!");
// console.log(stringObject.toString());
// console.log(stringObject.valueOf());

// 34 - String.raw()

////////////////////////////////
// 08 - Writing Resusable Code with Functions
////////////////////////////////

// 001 Our First Function
// ======================================
// GOALS
// write valid functions
// write functions with arguments
// compare function expressions & function statements
// write a bunch of functions

/*
// NOTES

// // STEP 1: Define the function:
// function grumpus() {
//   console.log("ugh...you again...");
//   console.log("FOR THE LAST TIME...");
//   console.log("LEAVE ME ALONE!!!");
// }
// // STEP 2: Call the function:
// grumpus();
// grumpus();
// grumpus();

// for (let i = 0; i < 50; i++) {
//   grumpus();
// }
*/

// My Practice
// FUNCTIONS
// Reusable procedures
// Functions allow us to write reusable, modular code
// We define a "chunk" of code that we can then execute at a later point.
// what is function?
// A function is a group of reusable code which can be called anywhere in your program. This eliminates the need of writing the same code again and again.

// function grumps() {
//   console.log("iam bharu");
//   console.log("iam fine");
//   console.log("iam better");
// }

// // grumps();
// // grumps();
// // grumps();
// // console.log(grumps);

// // looping
// for (let i = 0; i < 3; i++) {
//   grumps();
// }

// 002 Dice Roll Function
// ======================================

/*
// NOTES

// // Define our first function
// function rollDie() {
//   // Pick a random number from 1-6
//   // - Math.random() gives us a decimal from 0-1
//   // - We multiply by 6, so now we have a random number between 0 up to 6 (but not including 6).  Something likee 3.490823 or 5.991234
//   // - Then we floor to remove the decimal,  leaving us with a whole number from 0-5
//   //- Lastly we add one, to get a number between 1 and 6
//   let roll = Math.floor(Math.random() * 6) + 1;
//   console.log(`Rolled: ${roll}`);
// }

// // We can call functions inside of other functions!
// function throwDice() {
//   rollDie();
//   rollDie();
//   rollDie();
//   rollDie();
//   rollDie();
//   rollDie();
// }

// //Call it!
// throwDice();
*/

// My Practice

// function rollDie() {
//   let roll = Math.floor(Math.random() * 6) + 1;
//   console.log(`Rolled: ${roll}`);
// }

// there are many methods to throw dice 6 times

// METHOD 1 typing 6 times

// rollDie();
// rollDie();
// rollDie();
// rollDie();
// rollDie();
// rollDie();

// METHOD 2 looping

// for (let i = 0; i < 6; i++) {
//   rollDie();
// }

// METHOD 3 // imp Function within a function

// function throwDice() {
//   rollDie();
//   rollDie();
//   rollDie();
//   rollDie();
//   rollDie();
//   rollDie();
// }

// throwDice();
// console.log(rollDie);
// console.log(throwDice);

// 003 Introducing Arguments
// ======================================
// INPUTS Right now, our simple functions accept zero inputs. They behave the same way every time.
// function greet() {
//   console.log("Hi");
// }
// greet();
// greet();
// greet();
// every time we get same result without inputs

// ARGUMENTS we can also write functions that accept inputs, called arguments
// function greet(name) {
//   console.log("Hi", name);
// }
// greet("bharu"); // with inputs we are getting what we enter in arguments values
// greet("dhanush");

/*
// NOTES 

// function greet() {
// 	console.log('Hi');
// }

// // greet now expects a single argument
// function greet(nickname) {
//   console.log(`Hi, ${nickname}!`);
// }
// greet("Sansa");
// greet("Ramsay");

// // EXAMPLE 2
// function rollDie() {
//   let roll = Math.floor(Math.random() * 6) + 1;
//   console.log(`Rolled: ${roll}`);
// }
// // We can now specify how many dice to roll!
// function throwDice(numRolls) {
//   for (let i = 0; i < numRolls; i++) {
//     rollDie();
//   }
// }

// throwDice(2);
// throwDice(6);
*/

// My Practice

// without inputs
// function greet() {
//   console.log("Hi");
// }
// greet();
// greet();
// greet();

// with inputs
// function greet(nickname) {
//   console.log(`Hi, ${nickname}!`);
// }
// greet("bharu");
// greet("dhanush");
// greet("ram");

// We have seen this before
// No inputs
// console.log("hello".toUpperCase());
// // Arguments
// // Different inputs
// console.log("hello".indexOf("h"));
// console.log("hello".indexOf("o"));
// console.log("hello".indexOf("p"));

// Example 2
// function rollDie() {
//   let roll = Math.floor(Math.random() * 6) + 1;
//   console.log(`Rolled:${roll}`);
// }
// function throwDice(numRoles) {
//   for (let i = 0; i < numRoles; i++) {
//     rollDie();
//   }
// }

// throwDice(5);
// throwDice(2);
// throwDice(4);

// 004 Functions With Multiple Arguments
// ======================================

/*
// Notes

// function square(num) {
//   console.log(num * num);
// }

// function sum(x, y) {
//   console.log(x + y);
// }

// function divide(a, b) {
//   console.log(a / b);
// }
*/

// My Practice

// function square(num) {
//   console.log(num * num);
// }
// square(4);
// square(5);
// square(7);

// function sum(x, y) {
//   console.log(x + y);
// }
// sum(2, 4);
// sum(2, 9);
// sum(10, 9);
// sum(10); // second argument is undefined // NaN
// console.log(5 / undefined);
// // sum(,10); // error

// function subtraction(x, y) {
//   console.log(x - y);
// }
// subtraction(4, 2);
// subtraction(20, 2);
// subtraction(2, 5);
// subtraction(2);

// function division(x, y) {
//   console.log(x / y);
// }
// division(10, 2);
// division(10, 5);
// division(10, 3);
// division(10, 15);

// function getRemainder(x, y) {
//   console.log(x % y);
// }
// getRemainder(10, 4);
// getRemainder(9, 4);
// getRemainder(9, 8);

// 005 The Return statement
// ======================================
// RETURN
// Built-in methods RETURN values when we call them.We can store these values:

// NO RETURN
// Our functions print values out, but cannot store or capture in variables

// With RETURN
// Now we can capture or store a return value in variable!

// RETURN
// The return statement ends function execution AND specifies the value to be returned by that function

/*
// NOTES

// // No return!
// function add(x, y) {
//   console.log(x + y);
// }

// // This version returns the sum of x & y;
// function add(x, y) {
//   return x + y;
// }

// // We can capture the return value:
// const total = add(4, 9); //13
*/

// My Pratice

// const yell = "I will end you".toUpperCase();
// console.log(yell);

// const idx = ["a", "b", "c"].indexOf("c");
// console.log(idx);

// console.log("hello".toUpperCase());

// "hello".toUpperCase(); // nothing happens

// const scream = "hello".toUpperCase();
// console.log(scream);

// NO RETURN
// Our functions print values out, but cannot store or capture in variables

// function add(x, y) {
//   console.log(x + y);
// }
// add(1, 2);
// const sum = add(1, 2); // only can print in console
// console.log(sum); // we cannot store add(1,2) value in sum variable

// With RETURN
// Now we can capture or store a return value in variables!

// function add(x, y) {
//   return x + y; // RETURN!
// }

// const sum = add(10, 16);
// console.log(sum); // we can now store or capture add(1,2) value in sum variable bcoz RETURN
// const answer = add(100, 200);
// console.log(answer);
// const addition = add(12, 12);
// console.log(addition);

// 006 More on Return Values
// ======================================
// RETURN
// The return statement ends function execution AND specifies the value to be returned by that function

/*
// NOTES

// function square(x) {
//   return x * x;
//   console.log("ALL DONE!"); //this NEVER runs;
// }

// // One way of writing this function
// function isPurple(color) {
//   if (color.toLowerCase() === "purple") {
//     return true;
//   } else {
//     return false;
//   }
// }

// // We don't need the else!
// function isPurple(color) {
//   if (color.toLowerCase() === "purple") {
//     return true;
//   }
//   return false;
// }

// // An even shorter way!
// function isPurple(color) {
//   return color.toLowerCase() === "purple";
// }

// function containsPurple(arr) {
//   for (let color of arr) {
//     if (color === "purple" || color === "magenta") {
//       return true;
//     }
//   }
//   return false;
// }
*/

// My Practice

// RETURN
// The return statement ends function execution AND specifies the value to be returned by that function
// function square(x) {
//   return x * x;
//   console.log("ALL DONE!"); // this code never runs
// }

// function isPurple(color) {
//   if (color.toLowerCase() === "purple") {
//     return true;
//     console.log("YAY!"); // never runs
//   } else {
//     return false;
//   }
// }
// console.log(isPurple("blue"));
// console.log(isPurple("purple"));
// console.log(isPurple("PURPLE"));
// console.log(isPurple("PURPPLEE"));

// better way and shorter way, We don't need the else!
// function isPurple(color) {
//   if (color.toLowerCase() === "purple") {
//     return true;
//   }
//   return false;
// }
// console.log(isPurple("purple"));
// console.log(isPurple("purplesed"));

// Even shorter way
// function isPurple(color) {
//   return color.toLowerCase() === "purple";
// }
// console.log(isPurple("purple"));
// console.log(isPurple("PURPLE"));
// console.log(isPurple("PURPPLEE"));

// Another Example
// function containsPurple(arr) {
//   for (let color of arr) {
//     if (color === "purple" || color === "magenta") {
//       return true;
//     }
//     // return false; // if return before completing the loop it checks only green is there, if not there it gives false
//   }
//   return false; // return should be at the end of the loop so it checks first green, ...then last purple purple is there so returns true
// }
// console.log(containsPurple(["green", "purple"]));
// console.log(containsPurple(["green", "yellow", "purple"]));
// console.log(containsPurple(["green", "yellow", "purple"]));
// console.log(containsPurple(["green", "yellow", "purpleee"]));

// 007 Function Challenge 1 password Validator
// ======================================

/*
// NOTES

// // Write a isValidPassword function
// // It accepts 2 arguments: password and username
// // Password must:
// //	- be at least 8 characters
// //  - cannot contain spaces
// //  - cannot contain the username
// // If all requirements are met, return true.
// //Otherwise: false

// // isValidPassword('89Fjj1nms', 'dogLuvr');  //true
// // isValidPassword('dogLuvr123!', 'dogLuvr') //false
// // isValidPassword('hello1', 'dogLuvr') //false

// function isValidPassword(password, username) {
//   if (password.length < 8) {
//     return false;
//   }
//   if (password.indexOf(" ") !== -1) {
//     return false;
//   }
//   if (password.indexOf(username) !== -1) {
//     return false;
//   }
//   return true;
// }

// function isValidPassword(password, username) {
//   if (
//     password.length < 8 ||
//     password.indexOf(" ") !== -1 ||
//     password.indexOf(username) !== -1
//   ) {
//     return false;
//   }
//   return true;
// }

// function isValidPassword(password, username) {
//   const tooShort = password.length < 8;
//   const hasSpace = password.indexOf(" ") !== -1;
//   const tooSimilar = password.indexOf(username) !== -1;
//   if (tooShort || hasSpace || tooSimilar) return false;
//   return true;
// }

// function isValidPassword(password, username) {
//   const tooShort = password.length < 8;
//   const hasSpace = password.indexOf(" ") !== -1;
//   const tooSimilar = password.indexOf(username) !== -1;
//   if (!tooShort && !hasSpace && !tooSimilar) return true;
//   return false;
// }

// function isValidPassword(password, username) {
//   const tooShort = password.length < 8;
//   const hasSpace = password.indexOf(" ") !== -1;
//   const tooSimilar = password.indexOf(username) !== -1;
//   return !tooShort && !hasSpace && !tooSimilar;
// }
*/

// My Practice

// // Write a isValidPassword function
// // It accepts 2 arguments: password and username
// // Password must:
// //	- be at least 8 characters
// //  - cannot contain spaces
// //  - cannot contain the username
// // If all requirements are met, return true.
// //Otherwise: false

// function isValidPassword(password, username) {
//   if (password.length < 8) {
//     return false;
//   }
//   if (password.indexOf(" ") !== -1) {
//     return false;
//   }
//   if (password.indexOf(username) !== -1) {
//     return false;
//   }
//   return true;
// }

// console.log(isValidPassword("89Fjj1nms", "dogLuvr"));
// console.log(isValidPassword("89Fjj1", "dogLuv"));
// console.log(isValidPassword("bharu1234", "bharu"));
// console.log(isValidPassword("1234bharu1234", "bharu"));
// console.log(isValidPassword("1234haru1234", "bharu"));
// console.log(isValidPassword("1234haru 1234", "bharu"));

// function isValidPassword(password, username) {
//   if (
//     password.length < 8 ||
//     password.indexOf(" ") !== -1 ||
//     password.indexOf(username) !== -1 ||
//     username.indexOf(" ") !== -1
//   ) {
//     return false;
//   }
//   return true;
// }

// console.log(isValidPassword("bharu123", "dhanush"));
// console.log(isValidPassword("bharu12 3", "dhanush"));
// console.log(isValidPassword("bharu123", "d hanush"));

// function isValidPassword(password, username) {
//   const tooShort = password.length < 8;
//   const hasSpace = password.indexOf(" ") !== -1;
//   const tooSimilar = password.indexOf(username) !== -1;
//   const hasSpaceUsername = username.indexOf(" ") !== -1;
//   if (tooShort || hasSpace || tooSimilar) return false;
//   return true;
// }

// console.log(isValidPassword("bharu123", "dhanush"));
// console.log(isValidPassword("bharu12 3", "dhanush"));
// console.log(isValidPassword("bharu12", "dhanush"));
// console.log(isValidPassword("bharu123", "d hanush"));
// console.log(isValidPassword("bharu123", "dhanushbharu"));
// console.log(isValidPassword("bharu123", "bharu123"));

// 008 Function Challenge 2 Average
// ======================================

/*
// NOTES

// // Write a function to find the average value in an array of numbers
// //avg([0,50]) //25
// //avg([75,76,80,95,100]) //85.2

// function avg(arr) {
//   let total = 0;
//   //loop over each num
//   for (let num of arr) {
//     //add them together
//     total += num;
//   }
//   //divide by number of nums
//   return total / arr.length;
// }
*/

// My Practice

// function avg(arr) {
//   let total = 0;
//   for (let num of arr) {
//     total += num;
//   }
//   return total / arr.length;
// }

// console.log(avg([20, 20, 20, 20, 10]));
// console.log(avg([0, 50]));
// console.log(avg([75, 76, 80, 95, 100]));

// 009 Function Challenge 3 Pangrams
// ======================================

/*
// NOTES

// // A pangram is a sentence that contains every letter of the alphabet, like:
// //"The quick brown fox jumps over the lazy dog"

// // Write a function called isPangram, which checks to see if a given sentence contains every letter of the alphabet.  Make sure you igore string casing!

// // isPangram('The five boxing wizards jump quickly') //true
// // isPangram('The five boxing wizards jump quick') //false

// // Version using indexOf
// function isPangram(sentence) {
//   let lowerCased = sentence.toLowerCase();
//   for (let char of "abcdefghijklmnopqrstuvwxyz") {
//     if (lowerCased.indexOf(char) === -1) {
//       return false;
//     }
//   }
//   return true;
// }

// // Version using string.includes()
// // Nice and clean, but not supported in IE
// function isPangram(sentence) {
//   let lowerCased = sentence.toLowerCase();
//   for (let char of "abcdefghijklmnopqrstuvwxyz") {
//     if (!lowerCased.includes(char)) {
//       return false;
//     }
//   }
//   return true;
// }
*/

// My Practice

// Method 1
// function isPangram(sentence) {
//   let lowerCased = sentence.toLowerCase();
//   for (let char of "abcdefghijklmnopqrstuvwxyz") {
//     if (lowerCased.indexOf(char) === -1) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isPangram("the five boxing wizards jump quickly")); //true
// console.log(isPangram("The five boxing wizards jump quicklY")); //false
// console.log(isPangram("The five boxing wizards jump quick")); //false // not a pangram
// console.log(isPangram("Iam bharu rockzz")); //false // not a pangram

// Method 2
// function isPangram(sentence) {
//   let lowerCased = sentence.toLowerCase();
//   for (let char of "abcdefghijklmnopqrstuvwxyz") {
//     if (!lowerCased.includes(char)) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(isPangram("the five boxing wizards jump quickly")); //true
// console.log(isPangram("The five boxing wizards jump quicklY")); //false
// console.log(isPangram("The five boxing wizards jump quick")); //false // not a pangram
// console.log(isPangram("Iam bharu rockzz")); //false // not a pangram

// 010 Function Challenge 4 Get Playing Card
// ======================================

/*
// NOTES

// Write a getCard() function which returns a random playing card object, like:
// 		{
// 			value: 'K'
// 			suit: 'clubs'
// 		}
//Pick a random value from:
//----1,2,3,4,5,6,7,8,9,10,J,Q,K,A
//Pick a random suit from:
//----clubs,spades, hearts, diamonds
//Return both in an object

// function getCard() {
// 	const values = [
// 		'1',
// 		'2',
// 		'3',
// 		'4',
// 		'5',
// 		'6',
// 		'7',
// 		'8',
// 		'9',
// 		'10',
// 		'J',
// 		'Q',
// 		'K',
// 		'A'
// 	];
// 	const valIdx = Math.floor(Math.random() * values.length);
// 	const value = values[valIdx];

// 	const suits = [ 'clubs', 'spades', 'hearts', 'diamonds' ];
// 	const suitIdx = Math.floor(Math.random() * suits.length);
// 	const suit = suits[suitIdx];
// 	return { value: value, suit: suit };
// }

// function pick(arr) {
//   //return random element from arr
//   const idx = Math.floor(Math.random() * arr.length);
//   return arr[idx];
// }

// function getCard() {
//   const values = [
//     "1",
//     "2",
//     "3",
//     "4",
//     "5",
//     "6",
//     "7",
//     "8",
//     "9",
//     "10",
//     "J",
//     "Q",
//     "K",
//     "A",
//   ];
//   const suits = ["clubs", "spades", "hearts", "diamonds"];
//   return { value: pick(values), suit: pick(suits) };
// }
*/

// My Practice

// Write a getCard() function which returns a random playing card object, like:
// 		{
// 			value: 'K'
// 			suit: 'clubs'
// 		}
//Pick a random value from:
//----1,2,3,4,5,6,7,8,9,10,J,Q,K,A
//Pick a random suit from:
//----clubs,spades, hearts, diamonds
//Return both in an object

// Method 1
// function getCard() {
//   const values = [
//     "1",
//     "2",
//     "3",
//     "4",
//     "5",
//     "6",
//     "7",
//     "8",
//     "9",
//     "10",
//     "J",
//     "Q",
//     "K",
//     "A",
//   ];
//   const valIdx = Math.floor(Math.random() * values.length);
//   const value = values[valIdx];

//   const suits = ["clubs", "spades", "hearts", "diamonds"];
//   const suitsIdx = Math.floor(Math.random() * suits.length);
//   const suit = suits[suitsIdx];

//   return { value: value, suit: suit };
//   // console.log(value, suit);
// }
// getCard();

// Method 2

// Write a getCard() function which returns a random playing card object, like:
// 		{
// 			value: 'K'
// 			suit: 'clubs'
// 		}
//Pick a random value from:
//----1,2,3,4,5,6,7,8,9,10,J,Q,K,A
//Pick a random suit from:
//----clubs,spades, hearts, diamonds
//Return both in an object

// function pick(arr) {
//   const idx = Math.floor(Math.random() * arr.length);
//   return arr[idx];
// }

// function getCard() {
//   const values = [
//     "1",
//     "2",
//     "3",
//     "4",
//     "5",
//     "6",
//     "7",
//     "8",
//     "9",
//     "10",
//     "J",
//     "Q",
//     "K",
//     "A",
//   ];

//   const suits = ["clubs", "spades", "hearts", "diamonds"];

//   return { value: pick(values), suit: pick(suits) };
// }

// console.log(getCard());

////////////////////////////////
// 09 - An Advanced Look at Functions
////////////////////////////////

// 001 Function Scope
// ======================================
// FUNCTIONS IN DETAIL
// Imporant things you should know about functions
// GOALS
// Understand Scope
// Write Higher Order Functions
// Pass functions as callbacks

// Scope refers to the part of a program where we can access a variable.

/*
// NOTES

// //These variables are SCOPED to the function
// function lol() {
//   let person = "Tom";
//   const age = 45;
//   var color = "teal";
//   console.log(age);
// }
// // These variables are SCOPED to changeColor()
// function changeColor() {
//   let color = "purple";
//   const age = 19;
//   console.log(age);
// }
// lol();
// changeColor();
// age; //DOES NOT EXIST!
// color; //DOES NOT EXIST!
// person; //DOES NOT EXIST!

// let bird = "mandarin duck";

// function birdWatch() {
//   //this bird is scoped to birdWatch()
//   let bird = "golden pheasant";
//   console.log(bird); //"golden pheasant"
// }
// birdWatch();
// console.log(bird); //"mandarin duck"
*/

// My Practice

// FUNCTIONS IN DETAIL
// Imporant things you should know about functions
// GOALS
// Understand Scope
// Write Higher Order Functions
// Pass functions as callbacks

// SCOPE
// Variable "visibility"
// The location where a variable is defined dictates WHERE WE HAVE ACCESS TO THE VARIABLE

// FUNCTION SCOPE
function lol() {
  let person = "Tom";
  console.log(person);
  const age = 45;
  console.log(age);
  var color = "teal";
  console.log(color);
}
// lol(); // we can access person age color inside the function
// console.log(person);
// console.log(age);
// console.log(color); // person age color are scoped to lol() means we cannot access out side of that function

// function lol() {
//   let person = "Tom";
//   const age = 45;
//   var color = "teal";
//   console.log(age);
// }

// function changeColor() {
//   let color = "purple";
//   const age = 19;
//   console.log(age);
// }
// lol();
// changeColor();

// Another Example
// let bird = "mandarin duck"; // let const var behave the same way for function scope
// const bird = "mandarin duck";
// var bird = "mandarin duck";

// function birdWatch() {
//   // let bird = "golden pheasant";
//   // const bird = "golden pheasant";
//   var bird = "golden pheasant";
//   console.log(bird);
// }
// birdWatch();
// console.log(bird);

// 002 Block Scope
// ======================================

/*
// NOTES

// // let & const are BLOCK SCOPED
// if (true) {
//   const animal = "eel";
//   console.log(animal); //'eel'
// }
// console.log(animal); //NOT DEFINED!

// // VAR IS NOT BLOCK SCOPED
// if (true) {
//   var animal = "eel";
//   console.log(animal); //'eel'
// }
// console.log(animal); //'eel'

// // let animals = ['grizzly bear', 'panda bear', 'spectacled bear'];
// // var i = 10;
// // for (var i = 0; i < animals.length; i++) {
// //   console.log(i, animals[i])
// // }
// // console.log(i)

// // let animals = ['grizzly bear', 'panda bear', 'spectacled bear'];
// // let i = 10;
// // for (let i = 0; i < animals.length; i++) {
// //   console.log(i, animals[i])
// // }
// // console.log(i)

// function doubleArr(arr) {
//   const result = []; //scoped to the doubleArr function
//   for (let num of arr) {
//     let double = num * 2; //scoped to this loop
//     result.push(double);
//   }
//   return result;
// }
*/

// My Practice

// if (true) {
//   let animal = "eel";
//   console.log(animal);
// }
// // console.log(animal); // animal is not defined // animal is not accessed at outside

// if (true) {
//   var animal = "eel";
//   console.log(animal);
// }
// console.log(animal); // animal access to outside of the scope there is potentional problem

// UNDERSTAND THIS
// let animals = ["grizzly bear", "panda bear", "spectacled bear"];
// var i = 10;
// for (var i = 0; i < animals.length; i++) {
//   console.log(i, animals[i]);
// }
// console.log(i); // the only i value we are getting is from loop // this is a problem we are not able to call declared i variable

// UNDERSTAND THIS
// let animals = ["grizzly bear", "panda bear", "spectacled bear"];
// var i = 10;
// for (let i = 0; i < animals.length; i++) {
//   console.log(i, animals[i]);
// }
// console.log(i);

// UNDERSTAND THIS
// let animals = ["grizzly bear", "panda bear", "spectacled bear"];
// let i = 10;
// for (let i = 0; i < animals.length; i++) {
//   console.log(i, animals[i]);
// }
// console.log(i); // i they exist in different scopes so they are not confliciting

// function doubleArr(arr) {
//   const result = [];
//   for (let num of arr) {
//     let double = num * 2;
//     result.push(double);
//   }
//   return result;
// }
// console.log(doubleArr([2, 4]));
// console.log(doubleArr([6, 12]));

// 003 Lexical Scope
// ======================================

/*
// NOTES

function outer() {
  let movie = 'Amadeus';

  function inner() {
    // let movie = "The Shining";

    function extraInner() {
      //movie is not defined in this function
      //but it has access to parent function's variables
      console.log(movie.toUpperCase())
    }
    extraInner();
  }
  inner();
}

outer(); //'AMADEUS'

*/

// My Practice

// 004 Function Expressions
// ======================================
// FUNCTIONS EXPRESSIONS
// There is another syntax we can use to define functions:
// Function can be stored in variable because functions are objects
// FUNCTIONS ARE OBJECTS
// Functions can store in an array
// Functions can be passed as an arguments

/*
// NOTES

// // Function Statement
// function add(x, y) {
  //   return x + y;
  // }

  // // Function Expression (Anonymous)
  // const sum = function (x, y) {
    //   return x + y;
    // };
    
    // // Function Expression (Named)
    // const product = function multiply(x, y) {
      //   return x * y;
      // };
      */

// My Practice

// // Function Statement
// function add(x, y) {
//   return x + y;
// }
// console.log(add(2, 3));

// // Function Expression (Anonymous)
// const add = function (x, y) {
//   return x + y;
// };
// console.log(add(4, 5));
// console.dir(add);

// // Function Expression (Named)
// const add = function sum(x, y) {
//   return x, y;
// };
// console.log(add(3, 3));

// // Function Expression (Named)
// const product = function multiply(x, y) {
//   return x * y;
// };
// console.log(product(3, 5));

// 005 High Order Functions
// ======================================
// FUNCTIONS ARE OBJECTS
// A function which takes another function as an argument or returns a function is known as higher order function.
// HIGHER ORDER FUNCTIONS
//Functions that operate on/with other functions. They can:
// -> Accept other functions as arguments
// -> Return a function

/*
// NOTES

// function add(x, y) {
//   return x + y;
// }

// const subtract = function (x, y) {
//   return x - y;
// };

// function multiply(x, y) {
//   return x * y;
// }

// const divide = function (x, y) {
//   return x / y;
// };

// //We can store functions in an array!
// const operations = [add, subtract, multiply, divide];

// //Loop over all the functions in operations
// for (let func of operations) {
//   let result = func(30, 5); //execute func!
//   console.log(result);
// }

// // We can also store functions in objects!
// const thing = {
//   doSomething: multiply,
// };
// thing.doSomething(4, 5); //20
*/

// My Practice

// A function which takes another function as an argument or returns a function is known as higher order function.
// HIGHER ORDER FUNCTIONS
//Functions that operate on/with other functions. They can:
// -> Accept other functions as arguments
// -> Return a function

// function add(x, y) {
//   return x + y;
// }

// const subtract = function (x, y) {
//   return x - y;
// };

// function multiply(x, y) {
//   return x * y;
// }

// const divide = function (x, y) {
//   return x / y;
// };

// //We can store functions in an array!
// const operations = [add, subtract, multiply, divide];
// console.log(operations[0]);
// console.log(operations[1]);
// console.log(add);
// console.log(operations[1]());
// console.log(operations[1](100, 4));
// console.log(operations[0](94, 6));

// for (let func of operations) {
//   let result = func(30, 5);
//   console.log(result);
// }

// // We can also store functions in objects!
// by adding a function to an object is called method
// const thing = {
//   doSomething: multiply,
// };
// console.log(thing);
// console.log(thing.doSomething(50, 2));

// 006 Functions as Arguments
// ======================================
// HIGHER ORDER FUNCTIONS
// A function which takes another function as an argument
// or returns a function is known as higher order function.
// HIGHER ORDER FUNCTIONS
//Functions that operate on/with other functions. They can:
// -> Accept other functions as arguments
// -> Return a function

/*
// NOTES

// // This function accepts another function as an argument
// function callThreeTimes(f) {
//   //And calls it 3 times:
//   f();
//   f();
//   f();
// }

// function cry() {
//   console.log("BOO HOO I'M SO SAD!");
// }

// function rage() {
//   console.log("I HATE EVERYTHING!");
// }

// function repeatNTimes(action, num) {
//   // call action (a function) num number of times
//   for (let i = 0; i < num; i++) {
//     action();
//   }
// }

// repeatNTimes(rage, 13);

// // Accepts 2 functions as arguments
// // Randomly selects 1 to execute
// function pickOne(f1, f2) {
//   let rand = Math.random();
//   if (rand < 0.5) {
//     f1();
//   } else {
//     f2();
//   }
// }
*/

// My Practice

// HIGHER ORDER FUNCTIONS
// A function which takes another function as an argument
// or returns a function is known as higher order function.
// HIGHER ORDER FUNCTIONS
//Functions that operate on/with other functions. They can:
// -> Accept other functions as arguments
// -> Return a function

// FUNCTIONS AS ARGUMENTS
// // This function accepts another function as an argument
// function callTwice(func) {
//   func();
//   func();
// }

// function laugh() {
//   console.log("hahahahahahah"); // we can pass this function as an argument
// }

// callTwice(laugh); // passing  function laugh as an argument

// function callThreeTimes(f) {
//   f();
//   f();
//   f();
// }

// function cry() {
//   console.log("iam sad");
// }

// function rage() {
//   console.log("i hate everthing");
// }

// callThreeTimes(cry);
// callThreeTimes(rage);
// callThreeTimes(work);

// function work() {
//   console.log("i have work");
// }

// function repeatNTimes(action, num) {
//   for (let i = 0; i < num; i++) {
//     action();
//   }
// }

// repeatNTimes(rage, 13);
// repeatNTimes(cry, 13);
// repeatNTimes(rage, 10);

// function pickOne(f1, f2) {
//   let rand = Math.random();
//   if (rand < 0.5) {
//     f1();
//   } else {
//     f2();
//   }
//   console.log(rand);
// }

// pickOne(cry, rage);

// 007 Functions as Return Values
// ======================================
// HIGHER ORDER FUNCTIONS
//Functions that operate on/with other functions. They can:
// -> Accept other functions as arguments
// -> Return a function

/*
// NOTES

// // This function returns a function!
// function multiplyBy(num) {
//   return function (x) {
//     return x * num;
//   };
// }

// //triple holds a function:
// const triple = multiplyBy(3);
// //we can call it:
// triple(4); //12
// triple(10); //30

// const double = multiplyBy(2);
// double(3); //6
// double(9); //18

// const halve = multiplyBy(0.5);
// halve(5); //2.5
// halve(100); //50

// // This function also acts as a "function factory"
// function makeBetweenFunc(x, y) {
//   return function (num) {
//     return num >= x && num <= y;
//   };
// }
// // This function checks if a value is between 0 and 18
// const isChild = makeBetweenFunc(0, 18);
// isChild(10); //true
// isChild(56); //false

// const isInNineties = makeBetweenFunc(1990, 1999);
// isInNineties(1994); //true
// isInNineties(1987); //false

// const isNiceWeather = makeBetweenFunc(60, 79);
// isNiceWeather(68); //true
// isNiceWeather(98); //false
*/

// My Practice
// HIGHER ORDER FUNCTIONS
//Functions that operate on/with other functions. They can:
// -> Accept other functions as arguments
// -> Return a function

// // METHOD 2
// function multiplyBy(num) {
//   const f = function () {
//     console.log("Blah");
//   };
//   return f;
// }

// console.log(multiplyBy);
// console.log(multiplyBy());

// // storing in a variable
// const mystery = multiplyBy();
// console.log(mystery);

// METHOD 1 better and standard approach
// function multiplyBy(num) {
//   return function () {
//     console.log("hi");
//   };
// }

// console.log(multiplyBy);
// console.log(multiplyBy());

// // storing in a variable
// const mystery = multiplyBy();
// console.log(mystery);

// ANOTHER EXAMPLE
// function multiplyBy(num) {
//   return function (x) {
//     return x * num;
//   };
// }

// const double = multiplyBy(2);
// console.log(double(3));
// console.log(double(10));
// THIS WORKS TO JUST REMEMBER THIS NOT IMPORTANT
// console.log(multiplyBy(3)(5)); // num -> 3, x -> 5
// console.log(multiplyBy(2)(8)); // num -> 2, x -> 8

// const triple = multiplyBy(3);
// console.log(triple); // triple is holding function(x){
// // return x*num};// calling triple(10) 10 -> x so answer is 10 * 3 = 30
// console.log(triple(10));
// console.log(triple(100));

// const halve = multiplyBy(0.5);
// console.log(halve);
// console.log(halve()); // didn't pass parameter so NaN
// console.log(halve(1));
// console.log(halve(10));
// console.log(halve(100));
// console.log(halve(3));

// function makeBetweenFunc(x, y) {
//   return function (num) {
//     return num >= x && num <= y;
//   };
// }

// const isChild = makeBetweenFunc(0, 18);
// console.log(isChild);
// // // isChild storing function (num){
// // return num >=x && num <= y;
// //}
// console.log(isChild(2)); // 2 -> num So x=0,y=18, passing parameter num is 2. 2 is > x and 2 is less than y so giving boolean expression true
// console.log(isChild(10));
// console.log(isChild(19)); // 19 -> num So x=0,y=18, passing parameter num is 19. 19 is > x and 19 greater than y but y = 18 only so giving boolean expression false
// console.log(isChild(30));
// console.log(isChild(15));
// console.log(isChild(45));

// const isInNineties = makeBetweenFunc(1990, 1999);
// console.log(isInNineties);
// console.log(isInNineties(1989));
// console.log(isInNineties(1992));
// console.log(isInNineties(1992));
// console.log(isInNineties(1993));
// console.log(isInNineties(2000));
// console.log(isInNineties(2002));

// const isNiceWeather = makeBetweenFunc(60, 79);
// console.log(isNiceWeather);
// console.log(isNiceWeather(45));
// console.log(isNiceWeather(76));
// console.log(isNiceWeather(98));
// console.log(isNiceWeather(30));
// console.log(isNiceWeather(81));

// 008 Callbacks
// ======================================
// CALLBACK FUNCTIONS A callback function is a function passed into another function as an argument, which is then invoked inside the outer function.
// my definiton of callback function: A function passing as an argument to higher order function.
/*
// NOTES

// function grumpus() {
//   alert("GAHHH GO AWAY!");
// }

// // setTimeout(callback, delay)
// setTimeout(function () {
//   //we pass an anonymous callback function
//   alert("WELCOME!");
// }, 5000);

// //DON'T WORRY ABOUT ANY OF THIS SYNTAX!!
// const btn = document.querySelector("button");
// // JUST FOCUS ON THE CALLBACK WE PASS IN!
// btn.addEventListener("click", function () {
//   alert("WHY DID YOU CLICK ME!!??");
// });

*/

// My Practice
// CALLBACK FUNCTIONS A callback function is a function passed into another function as an argument, which is then invoked inside the outer function.

//  Callbacks make sure that a function is not going to run before a task is completed but will run right after the task has completed.
// METHOD 1
// function grumps() {
//   // console.log("go away");
//   alert("hello bharu");
// }

// setTimeout(grumps, 5000);

// METHOD 2
// using anonymous function for one time use only
// setTimeout(function () {
//   alert("hi bharu");
// }, 5000);

// ANOTHER Example
// function callTwice(func) {
//   func();
//   func();
// }

// function laugh() {
//   console.log("hahahahaha");
// }

// callTwice(laugh); // laugh is a call back function

// 009 Hoisting
// ======================================
// HOISTING
// Housting allows you to use functions and variables before they are declared

/*
// NOTES

// variables declared with var are hoisted
// console.log(animal);
// var animal = 'Tapir';
// console.log(animal);

// variables declared with let & const are not hoisted
// const shrimp = 'Harlequin Shrimp';
// console.log(shrimp);

// function statements are hoisted
// howl();

// function howl() {
//   console.log("AWOOOOOOO");
// }

// function expressions are...kind of hoisted.
// The variable is hoisted, but has a value of undefined
// hoot();
// var hoot = function () {
//   console.log("HOOOO HOOOOO");
// };
*/

// My Practice
// Housting allows you to use functions and variables before they are declared

// console.log(animal);
// var animal = "Tapir";
// console.log(animal);

// // // console.log(shrimp); // cannot access "shrimp" before initialization
// let shrimp = "Harlequin Shrimp";
// console.log(shrimp);

// howl(); // this also works

// function howl() {
//   console.log("awoooooooo");
// }

// howl();

// STORING FUNCTION IN A VARIABLE

// // hoot(); // this will not work
// console.log(hoot); // undefined

// var hoot = function () {
//   console.log("hooooooo hooooooo");
// };

// hoot();

////////////////////////////////
// 010 - Apply Functions to Collections of Data
////////////////////////////////

// 001 Intro to Array Callback Methods
// ======================================
// ARRAY CALLBACK METHODS
// Arrays come with many built-in methods that accept call functions
// Now that we have covered callbacks, we can learn these methods!
// SUPER USEFUL!

// GOALS
//Understand and use these methods:
// 1) forEach
// 2) map
// 3) filter
// 4) find
// 5) reduce
// 6) some
// 7) every

// 002 forEach
// ======================================
// Accepts a callback function.
// Calls the function once per element in the array.
// The forEach() method calls a function and iterates over the elements of an array.The forEach() method can also be used on MAPS and  SETS.

/*
// NOTES

// const numbers = [20, 21, 22, 23, 24, 25, 26, 27];

// // Using anonymous function expression:
// numbers.forEach(function (num) {
//   console.log(num * 2);
// });

// function printTriple(n) {
//   console.log(n * 3);
// }

// // Using a pre-defined function:
// numbers.forEach(printTriple);

// // Using the index:
// numbers.forEach(function (num, idx) {
//   console.log(idx, num);
// });

// const books = [
//   {
//     title: "Good Omens",
//     authors: ["Terry Pratchett", "Neil Gaiman"],
//     rating: 4.25,
//   },
//   {
//     title: "Bone: The Complete Edition",
//     authors: ["Jeff Smith"],
//     rating: 4.42,
//   },
//   {
//     title: "American Gods",
//     authors: ["Neil Gaiman"],
//     rating: 4.11,
//   },
//   {
  //     title: "A Gentleman in Moscow",
  //     authors: ["Amor Towles"],
  //     rating: 4.36,
  //   },
  // ];
  
  // // Printing all book titles using forEach:
  // books.forEach(function (book) {
    //   console.log(book.title.toUpperCase());
    // });
    
    // // Printing all book titles using for...of:
    // for (let book of books) {
      //   console.log(book.title.toUpperCase());
      // }
      
      // // Printing all book titles using for loop:
      // for (let i = 0; i < books.length; i++) {
//   console.log(books[i].title.toUpperCase());
// }
*/

// My Practice
// Accepts a callback function.
// Calls the function once per element in the array.
// The forEach() method calls a function and iterates over the elements of an array.The forEach() method can also be used on MAPS and  SETS.

// const numbers = [20, 21, 22, 23, 24, 25, 26, 27];
// const evenNumbers = [2, 4, 6, 8, 10];

// using anonymous function // mostly we use this type
// numbers.forEach(function (num) {
//   console.log(num);
// });
// numbers.forEach(function (num) {
//   console.log(num * 2);
// });
// numbers.forEach(function (num) {
//   console.log(num * num);
// });

// function we can re-use
// function printTriple(n) {
//   console.log(n * 3);
// }

// numbers.forEach(printTriple);
// evenNumbers.forEach(printTriple); // 2x3,4x3,6x3,8x3,10x3

// const books = [
//   {
//     title: "Good Omens",
//     authors: ["Terry Pratchett", "Neil Gaiman"],
//     rating: 4.25,
//   },
//   {
//     title: "Bone: The Complete Edition",
//     authors: ["Jeff Smith"],
//     rating: 4.42,
//   },
//   {
//     title: "American Gods",
//     authors: ["Neil Gaiman"],
//     rating: 4.11,
//   },
//   {
//     title: "A Gentleman in Moscow",
//     authors: ["Amor Towles"],
//     rating: 4.36,
//   },
// ];

// books.forEach(function (item) {
//   console.log(item);
// });
// books.forEach(function (item) {
//   console.log(item.title);
// });

// we can use any of these methods to achieve the same result but forEach() method may be better i think
// books.forEach(function (item) {
//   console.log(item.title.toUpperCase());
// });

// // using for of loop
// for (let book of books) {
//   console.log(book.title.toUpperCase());
// }

// // using regular for loop
// for (let i = 0; i < books.length; i++) {
//   console.log(books[i].title.toUpperCase());
// }

// forEach() using two parameters we can get index too
// numbers.forEach(function (num, index) {
//   console.log(index, num);
// });

// evenNumbers.forEach(function (num, index) {
//   console.log(index, num);
// });

// books.forEach(function (element, elementindex) {
//   console.log(elementindex, element);
// });

// const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];

// nums.forEach(function (element) {
//   console.log(element * element);
// });

// nums.forEach(function (element) {
//   if (element % 2 === 0) {
//     console.log(element);
//   }
// });

// 003 Map
// ======================================
// MAP Creates a new array with the results of calling a callback on every element in the array

/*
// NOTES

// const numbers = [20, 21, 22, 23, 24, 25, 26, 27];
// const words = ['asap', 'byob', 'rsvp', 'diy'];

// //Map creates a new array by calling your callback function with each element in the original array.
// const doubles = numbers.map(function (num) {
//   return num * 2; //Need to return the value!
// });
// //[40, 42, 44, 46, 48, 50, 52, 54]

// const numDetail = numbers.map(function (n) {
//   return {
//     value: n,
//     isEven: n % 2 === 0
//   }
// })

// const abbrevs = words.map(function (word) {
//   return word.toUpperCase().split('').join('.');
// })
// //["A.S.A.P", "B.Y.O.B", "R.S.V.P", "D.I.Y"]

// const books = [{
//     title: 'Good Omens',
//     authors: ['Terry Pratchett', 'Neil Gaiman'],
//     rating: 4.25
//   },
//   {
//     title: 'Bone: The Complete Edition',
//     authors: ['Jeff Smith'],
//     rating: 4.42
//   },
//   {
//     title: 'American Gods',
//     authors: ['Neil Gaiman'],
//     rating: 4.11
//   },
//   {
//     title: 'A Gentleman in Moscow',
//     authors: ['Amor Towles'],
//     rating: 4.36
//   }
// ]

// const titles = books.map(function (b) {
//   return b.title;
// })
// //["Good Omens", "Bone: The Complete Edition", "American Gods", "A Gentleman in Moscow"]
*/

// My practice

// MAP Creates a new array with the results of calling a callback on every element in the array
// The map() method is an iterative method. It calls a provided callbackFn function once for each element in an array and constructs a new array from the results.

// const numbers = [20, 21, 22, 23, 24, 25, 26, 27];

// const doubles = numbers.map(function (element) {
//   return element * 2;
// });
// console.log(doubles);
// console.log(numbers); // map method does not mutate original array

// // squares array
// const squares = numbers.map(function (element) {
//   return element * element;
// });
// console.log(squares);

// // cubes array
// const cubes = numbers.map(function (element) {
//   return element * element * element;
// });
// console.log(cubes);

// // checking value is even or not if even gets TRUE otherwise FALSE
// const numDetail = numbers.map(function (num) {
//   return {
//     value: num,
//     isEven: num % 2 === 0,
//   };
// });
// console.log(numDetail);

// // checking value is even or not if odd gets TRUE otherwise FALSE
// const isOdd = numbers.map(function (num) {
//   return {
//     value: num,
//     isOdd: num % 2 === 1,
//   };
// });
// console.log(isOdd);

// using for of looping doubling an array elements
// const doubles2 = [];
// for (let num of numbers) {
//   doubles2.push(num * 2);
// }
// console.log(doubles2);

// const words = ["asap", "byob", "rsvp", "diy"];

// console.log("asap".toUpperCase().split("").join("."));
// console.log("asap".toUpperCase().split("").join("-"));

// const abbrevs = words.map(function (word) {
//   return word.toUpperCase().split("").join(".");
// });
// console.log(abbrevs);
// // // console.log(words); // original will not change

// const abbrevs2 = words.map(function (word) {
//   return word.toUpperCase().split("").join("-");
// });
// console.log(abbrevs2);
// // // console.log(words); // original will not change

// const books = [
//   {
//     title: "Good Omens",
//     authors: ["Terry Pratchett", "Neil Gaiman"],
//     rating: 4.25,
//   },
//   {
//     title: "Bone: The Complete Edition",
//     authors: ["Jeff Smith"],
//     rating: 4.42,
//   },
//   {
//     title: "American Gods",
//     authors: ["Neil Gaiman"],
//     rating: 4.11,
//   },
//   {
//     title: "A Gentleman in Moscow",
//     authors: ["Amor Towles"],
//     rating: 4.36,
//   },
// ];

// const titles = books.map(function (b) {
//   return b.title.toUpperCase();
// });
// console.log(titles);

// const authorsArr = books.map(function (b) {
//   return b.authors;
// });
// console.log(authorsArr);

// const ratingsArr = books.map(function (b) {
//   return b.rating;
// });
// console.log(ratingsArr);

// const texts = ["rofl", "lol", "omg", "ttyl"];
// const caps = texts.map(function (t) {
//   return t.toUpperCase();
// });
// console.log(caps);

// const caps2 = texts.map(function (t) {
//   return t.toUpperCase().split("").join("-");
// });
// console.log(caps2);

// 004 Arrow Functions Intro
// ======================================
// syntactically compact alternative to a regular function expression

/*
NOTES

// //Non-arrow function expression:
// // const square = function (x) {
// //   return x * x;
// // }

// // Equivalent arrow function:
// const square = (x) => {
//   return x * x;
// }

// //parens are option when you have 1 parameter
// const isEven = num => {
//   return num % 2 === 0;
// }

// //Must include parens for multiple parameters
// const multiply = (x, y) => {
//   return x * y;
// }

// // Must include parens for zero parameters
// const greet = () => {
//   console.log("HI!")
// }
*/

// My Practice
// another way of writing functions
// syntactically compact alternative to a regular function expression

// // without array function
// const square = function(x){
//   return x*x;
// }

// arrow function
// const square = (x) => {
//   return x * x;
// };
// console.log(square(3));

// const isEven = (num) => {
//   return num % 2 === 0;
// };
// console.log(isEven(8));
// console.log(isEven(5));

// const multiply = (x, y) => {
//   return x * y;
// };
// console.log(multiply(2, 3));
// console.log(multiply(10, 8));

// const add = (x, y) => {
//   return x + y;
// };
// console.log(add(10, 10));
// console.log(add(10, 30));

// const subtraction = (x, y) => {
//   return x - y;
// };
// console.log(subtraction(100, 90));
// console.log(subtraction(8, 10));

// const modulus = (x, y) => {
//   return x % y;
// };
// console.log(modulus(10, 2));
// console.log(modulus(10, 3));

// Use empty parens for functions w/ no parameters:
// const greet = () => {
//   return "Hello Bharu";
// };
// console.log(greet());

// const greeting = (name) => {
//   return `Hi, ${name}`;
// };
// console.log(greeting("Bharu"));
// console.log(greeting("Dhanush"));

// 005 Arrow Function Implicit Returns
// ======================================
// IMPLICIT RETURN
// All these functions do the same thing:
// const isEven = function (num) { // Regular Function Expression
//  return num % 2 === 0;
// };
// const isEven = (num) => { // arrow function with parens around parameter
//   return num%2===0;
// };
// const isEven = num => { // no parens around parameter
//  return num%2===0;
// };
// const isEven = num => { // implicit return
//   num%2===0;
// };
// const isEven = num => num % 2 === 0; // one-liner implicit return

/*
// NOTES

// // "Regular" arrow function:
// const square = n => {
//   return n * n;
// }
// // Implicit Return, on multiple lines using parens
// const square1 = n => (
//   n * n
// )

// // Implicit return one-liner:
// const square2 = n => n * n;

// const nums = [1, 2, 3, 4, 5, 6, 7, 8];

// // ALL THREE VERSIONS GIVE US THE SAME RESULT:
// const doubles1 = nums.map(function (n) {
//   return n * 2;
// })

// const doubles2 = nums.map(n => {
//   return n * 2;
// })

// const doubles3 = nums.map(n => n * 2);

// const parityList = nums.map(function (n) {
//   if (n % 2 === 0) return 'even';
//   return 'odd';
// })

// const parityList1 = nums.map((n) => {
//   if (n % 2 === 0) return 'even';
//   return 'odd';
// });
// const parityList2 = nums.map((n) => (
//   n % 2 === 0 ? 'even' : 'odd'
// ));

// const parityList3 = nums.map((n) => n % 2 === 0 ? 'even' : 'odd');
*/

// My Practice

// one-liner arrow function
// const square = (x) => x * x;
// console.log(square(5));
// console.log(square(7));

// const addition = (x, y) => x + y;
// console.log(addition(2, 8));
// console.log(addition(50, 50));

// const subtraction = (x, y) => x - y;
// console.log(subtraction(50, 50));
// console.log(subtraction(50, 30));

// const multiplication = (x, y) => x * y;
// console.log(multiplication(5, 3));
// console.log(multiplication(5, 5));

// const nums = [1, 2, 3, 4, 5, 6, 7, 8];

// without arrow function
// const double1 = nums.map(function (n) {
//   return n * 2;
// });
// console.log(double1);

// // using arrow function
// const double2 = nums.map((n) => {
//   return n * 2;
// });
// console.log(double2);

// const double3 = nums.map((n) => n * 2);
// console.log(double3);

// const triple1 = nums.map((n) => {
//   return n * 3;
// });
// console.log(triple1);

// const triple2 = nums.map((n) => n * 3);
// console.log(triple2);

// const parityList1 = nums.map(function (n) {
//   if (n % 2 === 0) return "even";
//   return "odd";
// });

// console.log(parityList1);

// const parityList2 = nums.map((n) => {
//   if (n % 2 === 0) return "even";
//   return "odd";
// });
// console.log(parityList2);

// const parityList3 = nums.map((n) => (n % 2 === 0 ? "even" : "odd"));
// console.log(parityList3);

// 006 Array.find
// ======================================
// FIND returns the value of the FIRST ELEMENT in the array that satisfies the provived testing function.

/*
// NOTES

// let movies = [
//   "The Fantastic Mr. Fox",
//   "Mr. and Mrs. Smith",
//   "Mrs. Doubtfire",
//   "Mr. Deeds",
// ];

// // Find first movie that includes 'Mrs' in its title:
// const movie = movies.find((movie) => {
//   return movie.includes("Mrs");
// });

// //Find first movie that begins with 'Mrs':
// const movie2 = movies.find((m) => m.indexOf("Mrs") === 0);

// const books = [
//   {
//     title: "Good Omens",
//     authors: ["Terry Pratchett", "Neil Gaiman"],
//     rating: 4.25,
//   },
//   {
//     title: "Bone: The Complete Edition",
//     authors: ["Jeff Smith"],
//     rating: 4.42,
//   },
//   {
//     title: "American Gods",
//     authors: ["Neil Gaiman"],
//     rating: 4.11,
//   },
//   {
//     title: "A Gentleman in Moscow",
//     authors: ["Amor Towles"],
//     rating: 4.36,
//   },
// ];
// //Find first book w/ rating over 4.3
// const goodBook = books.find((b) => b.rating >= 4.3);

// //Find first book with Neil Gaiman as an author:
// const neilBook = books.find((b) => b.authors.includes("Neil Gaiman"));
*/

// My Practice

// let movies = [
//   "The Fantastic Mr. Fox",
//   "Mr. and Mrs. Smith",
//   "Mrs. Doubtfire",
//   "Mr. Deeds",
// ];

// const movie1 = movies.find((m) => {
//   return m.includes("Mrs");
// });
// console.log(movie1);

// const movie2 = movies.find((m) => {
//   return m.indexOf("Mrs") === 0;
// });
// console.log(movie2);

// const movie3 = movies.find((m) => m.indexOf("Mrs") === 0);
// console.log(movie3);

// Another Example

// const books = [
//   {
//     title: "Good Omens",
//     authors: ["Terry Pratchett", "Neil Gaiman"],
//     rating: 4.25,
//   },
//   {
//     title: "Bone: The Complete Edition",
//     authors: ["Jeff Smith"],
//     rating: 4.42,
//   },
//   {
//     title: "American Gods",
//     authors: ["Neil Gaiman"],
//     rating: 4.11,
//   },
//   {
//     title: "A Gentleman in Moscow",
//     authors: ["Amor Towles"],
//     rating: 4.36,
//   },
// ];

// const goodBook = books.find((b) => {
//   return b.rating >= 4.3;
// });
// console.log(goodBook);

// const neilBook = books.find((b) => b.authors.includes("Neil Gaiman"));
// console.log(neilBook); // find only gives first occurence

// const goodBook2 = books.find((b) => {
//   return b.rating === 4.11 && b.authors.includes("Neil Gaiman");
// });
// console.log(goodBook2);

// 007 Filter
// ======================================
// FILTER creates a new array with all elements that pass the test implemented by the provided function.
// Javascript Array filter(). The filter() method returns a new array with all elements that pass the test defined by the given function.

/*
// NOTES

// const nums = [34, 35, 67, 54, 109, 102, 32, 9];

// const odds = nums.filter((n) => n % 2 === 1);
// const evens = nums.filter((n) => n % 2 === 0);
// const bigNums = nums.filter((n) => n > 50);

// const books = [
//   {
//     title: "Good Omens",
//     authors: ["Terry Pratchett", "Neil Gaiman"],
//     rating: 4.25,
//     genres: ["fiction", "fantasy"],
//   },
//   {
//     title: "Changing My Mind",
//     authors: ["Zadie Smith"],
//     rating: 3.83,
//     genres: ["nonfiction", "essays"],
//   },
//   {
//     title: "Bone: The Complete Edition",
//     authors: ["Jeff Smith"],
//     rating: 4.42,
//     genres: ["fiction", "graphic novel", "fantasy"],
//   },
//   {
//     title: "American Gods",
//     authors: ["Neil Gaiman"],
//     rating: 4.11,
//     genres: ["fiction", "fantasy"],
//   },
//   {
//     title: "A Gentleman in Moscow",
//     authors: ["Amor Towles"],
//     rating: 4.36,
//     genres: ["fiction", "historical fiction"],
//   },
//   {
//     title: "The Name of the Wind",
//     authors: ["Patrick Rothfuss"],
//     rating: 4.54,
//     genres: ["fiction", "fantasy"],
//   },
//   {
//     title: "The Overstory",
//     authors: ["Richard Powers"],
//     rating: 4.19,
//     genres: ["fiction", "short stories"],
//   },
//   {
//     title: "The Way of Kings",
//     authors: ["Brandon Sanderson"],
//     rating: 4.65,
//     genres: ["fantasy", "epic"],
//   },
//   {
//     title: "Lord of the flies",
//     authors: ["William Golding"],
//     rating: 3.67,
//     genres: ["fiction"],
//   },
// ];

// //All books rated over 4.3:
// const goodBooks = books.filter((b) => b.rating > 4.3);

// // All books with fantasy as a genre:
// const fantasyBooks = books.filter((book) => book.genres.includes("fantasy"));

// // all books that are either short stories or essays:
// const shortForm = books.filter(
//   (book) =>
//     book.genres.includes("short stories") || book.genres.includes("essays")
// );

// // Simple search functionality:
// const query = "The";
// const results = books.filter((book) => {
//   const title = book.title.toLowerCase();
//   return title.includes(query.toLowerCase());
// });
*/

// My Practice

// example 1

// const nums = [34, 35, 67, 54, 109, 102, 32, 9];

// const odds = nums.filter((n) => n % 2 === 1);
// console.log(odds);

// const evens = nums.filter((n) => n % 2 === 0);
// console.log(evens);
// console.log(nums); // original will not change

// const bigNums = nums.filter((n) => n > 50);
// console.log(bigNums);

// const smallNums = nums.filter((n) => n < 50);
// console.log(smallNums);

// Another Example 2
// FILTER creates a new array with all elements that pass the test implemented by the provided function.
// Javascript Array filter(). The filter() method returns a new array with all elements that pass the test defined by the given function.

// const books = [
//   {
//     title: "Good Omens",
//     authors: ["Terry Pratchett", "Neil Gaiman"],
//     rating: 4.25,
//     genres: ["fiction", "fantasy"],
//   },
//   {
//     title: "Changing My Mind",
//     authors: ["Zadie Smith"],
//     rating: 3.83,
//     genres: ["nonfiction", "essays"],
//   },
//   {
//     title: "Bone: The Complete Edition",
//     authors: ["Jeff Smith"],
//     rating: 4.42,
//     genres: ["fiction", "graphic novel", "fantasy"],
//   },
//   {
//     title: "American Gods",
//     authors: ["Neil Gaiman"],
//     rating: 4.11,
//     genres: ["fiction", "fantasy"],
//   },
//   {
//     title: "A Gentleman in Moscow",
//     authors: ["Amor Towles"],
//     rating: 4.36,
//     genres: ["fiction", "historical fiction"],
//   },
//   {
//     title: "The Name of the Wind",
//     authors: ["Patrick Rothfuss"],
//     rating: 4.54,
//     genres: ["fiction", "fantasy"],
//   },
//   {
//     title: "The Overstory",
//     authors: ["Richard Powers"],
//     rating: 4.19,
//     genres: ["fiction", "short stories"],
//   },
//   {
//     title: "The Way of Kings",
//     authors: ["Brandon Sanderson"],
//     rating: 4.65,
//     genres: ["fantasy", "epic"],
//   },
//   {
//     title: "Lord of the flies",
//     authors: ["William Golding"],
//     rating: 3.67,
//     genres: ["fiction"],
//   },
// ];

// const goodBooks = books.filter((b) => b.rating > 4.3);
// console.log(goodBooks);
// console.log(books); // original will not change

// const fantasyBooks = books.filter((b) => b.genres.includes("fantasy"));
// console.log(fantasyBooks);

// const epic = books.filter((b) => b.genres.includes("epic")); // one-liner arrow function
// console.log(epic);
// // OR
// const epicBook = books.filter((b) => {
//   return b.genres.includes("epic");
// });
// console.log(epicBook);

// // one-liner arrow function
// const graphicNovelBook = books.filter(
//   (b) => b.genres.includes("graphic novel") // case sensitive if you use capital N gives empty array
// );
// console.log(graphicNovelBook);
// // OR using return
// const graphicNovelBook1 = books.filter((b) => {
//   return b.genres.includes("graphic novel");
// });
// console.log(graphicNovelBook1);

// const shortStoryEssays = books.filter(
//   (b) => b.genres.includes("short stories") || b.genres.includes("essays")
// );
// console.log(shortStoryEssays);

// const searchThe = books.filter((b) => b.title.includes("The"));
// console.log(searchThe); // only gets books that has The

// // IMPORTANT METHOD TO REMEMBER
// // SEARCH METHOD STEPS  does not matter if the search enter value is case sensitive
// const query = "The";
// const results = books.filter((b) => {
//   const title = b.title.toLowerCase(); // converting title to lowercase
//   return title.includes(query.toLowerCase()); // query to lowercase
// });
// console.log(results);

// Another Example 3

// const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];
// const odds = nums.filter((n) => {
//   return n % 2 === 1; // our callback returns true or false
//   // if it returns true, n is added to the filtered array
// });
// console.log(odds); // (5) [9, 7, 5, 3, 1]
// // one-liner arrow function
// const odds1 = nums.filter((n) => n % 2 === 1);
// console.log(odds1);

// const smallNums = nums.filter((n) => {
//   return n < 5;
// });
// console.log(smallNums);
// // one-liner arrow function
// const smallNums1 = nums.filter((n) => n < 5);
// console.log(smallNums1);

// 008 Some & Every
// ======================================
// EVERY tests whether all elements in the array pass the provided function. It returns a Boolean value.
// SOME similar to every, but returns true if ANY of the array elements pass the test function

/*
NOTES

// const words = ["dog", "dig", "log", "bag", "wag"];

// //Is every word 3 characters long?
// const all3Letters = words.every((word) => word.length === 3);

// // Do all words end in 'g'?
// const allEndInG = words.every((word) => {
//   const last = word.length - 1;
//   return word[last] === "g";
// });

// //Does at least 1 book start with 'd'?
// const someStartWithD = words.some((word) => word[0] === "d");

// // Do all words start with 'd'?
// const allStartWithD = words.every((word) => word[0] === "d");

// const books = [
//   {
//     title: "Good Omens",
//     authors: ["Terry Pratchett", "Neil Gaiman"],
//     rating: 4.25,
//     genres: ["fiction", "fantasy"],
//   },
//   {
//     title: "Changing My Mind",
//     authors: ["Zadie Smith"],
//     rating: 3.83,
//     genres: ["nonfiction", "essays"],
//   },
//   {
//     title: "Bone: The Complete Edition",
//     authors: ["Jeff Smith"],
//     rating: 4.42,
//     genres: ["fiction", "graphic novel", "fantasy"],
//   },
//   {
//     title: "American Gods",
//     authors: ["Neil Gaiman"],
//     rating: 4.11,
//     genres: ["fiction", "fantasy"],
//   },
//   {
//     title: "A Gentleman in Moscow",
//     authors: ["Amor Towles"],
//     rating: 4.36,
//     genres: ["fiction", "historical fiction"],
//   },
//   {
//     title: "The Name of the Wind",
//     authors: ["Patrick Rothfuss"],
//     rating: 4.54,
//     genres: ["fiction", "fantasy"],
//   },
//   {
//     title: "The Overstory",
//     authors: ["Richard Powers"],
//     rating: 4.19,
//     genres: ["fiction", "short stories"],
//   },
//   {
//     title: "The Way of Kings",
//     authors: ["Brandon Sanderson"],
//     rating: 4.65,
//     genres: ["fantasy", "epic"],
//   },
//   {
//     title: "Lord of the flies",
//     authors: ["William Golding"],
//     rating: 3.67,
//     genres: ["fiction"],
//   },
// ];
// //Are all books rated 3.5 or higher?
// const allGoodBooks = books.every((book) => book.rating > 3.5);

// //Do any books have 2 authors?
// const any2Authors = books.some((book) => book.authors.length === 2);
*/

// My Practice
// EVERY tests whether all elements in the array pass the provided function. It returns a Boolean value.
// SOME similar to every, but returns true if ANY of the array elements pass the test function

// const words = ["dog", "dig", "log", "bag", "wag"];

// const checkLength = words.every((word) => {
//   // return w.length === 3;
//   return word.length === 4;
// });
// console.log(checkLength);

// const checkEndG = words.every((word) => {
//   return word[word.length - 1] === "g";
// });
// console.log(checkEndG);

// const words = ["dog", "dig", "dog", "dag", "dag"];
// const checkStartD = words.every((word) => {
//   // return word[0] === "d";
//   return word[1] === "d";
// });
// console.log(checkStartD);

// SOME similar to every, but returns true if ANY of the array elements pass the test function

// const words = ["dog", "dig", "log", "bag", "wag"];

// const someStartWithD = words.some((word) => word[0] === "d");
// console.log(someStartWithD);
// const allStartWithD = words.every((word) => word[0] === "d");
// console.log(allStartWithD);

// Another Example

// const books = [
//   {
//     title: "Good Omens",
//     authors: ["Terry Pratchett", "Neil Gaiman"],
//     rating: 4.25,
//     genres: ["fiction", "fantasy"],
//   },
//   {
//     title: "Changing My Mind",
//     authors: ["Zadie Smith"],
//     rating: 3.83,
//     genres: ["nonfiction", "essays"],
//   },
//   {
//     title: "Bone: The Complete Edition",
//     authors: ["Jeff Smith"],
//     rating: 4.42,
//     genres: ["fiction", "graphic novel", "fantasy"],
//   },
//   {
//     title: "American Gods",
//     authors: ["Neil Gaiman"],
//     rating: 4.11,
//     genres: ["fiction", "fantasy"],
//   },
//   {
//     title: "A Gentleman in Moscow",
//     authors: ["Amor Towles"],
//     rating: 4.36,
//     genres: ["fiction", "historical fiction"],
//   },
//   {
//     title: "The Name of the Wind",
//     authors: ["Patrick Rothfuss"],
//     rating: 4.54,
//     genres: ["fiction", "fantasy"],
//   },
//   {
//     title: "The Overstory",
//     authors: ["Richard Powers"],
//     rating: 4.19,
//     genres: ["fiction", "short stories"],
//   },
//   {
//     title: "The Way of Kings",
//     authors: ["Brandon Sanderson"],
//     rating: 4.65,
//     genres: ["fantasy", "epic"],
//   },
//   {
//     title: "Lord of the flies",
//     authors: ["William Golding"],
//     rating: 3.67,
//     genres: ["fiction"],
//   },
// ];

// const allGoodBooks = books.every((book) => book.rating > 3.5);
// console.log(allGoodBooks);

// const any2Authors = books.some((book) => book.authors.length === 2);
// console.log(any2Authors);

// Another SOME Example

// const words = ["dog", "jello", "log", "cupcake", "bag", "wag"];

// // Are there any words longer than 4 characters?
// const longerThan4C = words.some((word) => {
//   return words.length > 4;
// });
// // // console.log(longerThan4C);

// // // Do any words start with "Z"?
// const anyStartZ = words.some((word) => {
//   // return word[0] === "Z";
//   return word[0] === "j";
// });
// console.log(anyStartZ);

// // // Do any words contain "cake"?
// const containCake = words.some((word) => {
//   return word.includes("cake");
// });
// console.log(containCake);

// 009 Revisiting Sort Part - 2
// ======================================
// syntax : arr.sort(compareFunc(a,b))
//// If compareFunc(a,b) returns less than 0
// Sort a before b
//// If compareFunc(a,b) returns 0
// Leave a and b unchanged with respect to each other
//// If compareFunc(a,b) returns greater than 0
// sort b before a

/*
// NOTES

// const prices = [400.5, 3000, 99.99, 35.99, 12.0, 9500];
// // REMEMBER THAT SORT() MUTATES THE ORIGINAL ARRAY!
// // I'm using slice() to create a new copy, otherwise we would be sorting the same array 3 times:

// // Default string sort :(
// const badSort = prices.slice().sort();

// // Ascending Sort:
// const ascSort = prices.slice().sort((a, b) => a - b);

// // Descending Sort:
// const descSort = prices.slice().sort((a, b) => b - a);

// const books = [
//   {
//     title: "Good Omens",
//     authors: ["Terry Pratchett", "Neil Gaiman"],
//     rating: 4.25,
//     genres: ["fiction", "fantasy"],
//   },
//   {
//     title: "Changing My Mind",
//     authors: ["Zadie Smith"],
//     rating: 3.83,
//     genres: ["nonfiction", "essays"],
//   },
//   {
//     title: "Bone: The Complete Edition",
//     authors: ["Jeff Smith"],
//     rating: 4.42,
//     genres: ["fiction", "graphic novel", "fantasy"],
//   },
//   {
//     title: "American Gods",
//     authors: ["Neil Gaiman"],
//     rating: 4.11,
//     genres: ["fiction", "fantasy"],
//   },
//   {
//     title: "A Gentleman in Moscow",
//     authors: ["Amor Towles"],
//     rating: 4.36,
//     genres: ["fiction", "historical fiction"],
//   },
//   {
//     title: "The Name of the Wind",
//     authors: ["Patrick Rothfuss"],
//     rating: 4.54,
//     genres: ["fiction", "fantasy"],
//   },
//   {
//     title: "The Overstory",
//     authors: ["Richard Powers"],
//     rating: 4.19,
//     genres: ["fiction", "short stories"],
//   },
//   {
//     title: "The Way of Kings",
//     authors: ["Brandon Sanderson"],
//     rating: 4.65,
//     genres: ["fantasy", "epic"],
//   },
//   {
//     title: "Lord of the flies",
//     authors: ["William Golding"],
//     rating: 3.67,
//     genres: ["fiction"],
//   },
// ];

// // Sorting books by their rating:
// books.sort((a, b) => b.rating - a.rating);
*/

// My Practice

// syntax : arr.sort(compareFunc(a,b))
//// If compareFunc(a,b) returns less than 0
// Sort a before b
//// If compareFunc(a,b) returns 0
// Leave a and b unchanged with respect to each other
//// If compareFunc(a,b) returns greater than 0
// sort b before a

// =================================================
// const myArr = [400.5, 3000];
// const ascSort = myArr.sort((a, b) => a - b);
// console.log(ascSort); // waste of effort
// const descSort = myArr.sort((a, b) => b - a);
// console.log(descSort);
// console.log(ascSort); // mutates the original array
// console.log(myArr);
// a        b
// 400.5   3000 = negative number (-) means moving the smaller numbers to left side of the array [400.5,3000]
// 400.5   3000 = positive number (+) means moving the larger numbers to left side of the array [3000,400.5]
// =================================================

// const prices = [400.5, 3000, 99.99, 35.99, 12.0, 9500];

// console.log(prices.sort()); // (6) [12, 3000, 35.99, 400.5, 9500, 99.99] // not the way we wanted 99.99 should on index 2

// const ascendingSort = prices.sort((a, b) => a - b);
// console.log(ascendingSort);
// const descendingSort = prices.sort((a, b) => b - a);
// console.log(descendingSort);
// console.log(ascendingSort); // gives the descending sort value means mutated

// // sort() is mutating
// // so we using slice() because it gives copy of that array
// const badSort = prices.slice().sort();
// console.log(badSort);
// const goodAscSort = prices.slice().sort((a, b) => a - b);
// console.log(goodAscSort);
// const goodDescSort = prices.slice().sort((a, b) => b - a);
// console.log(goodDescSort);

// console.log(badSort);
// console.log(goodAscSort);
// console.log(goodDescSort);

// 010 Reduce Intro part - 1
// ======================================
// REDUCE Executes a reducer function on each element of the array, resulting in a single value.
// The array reduce in JavaScript is a predefined method used to reduce an array to a single value by passing a callback function on each element of the array. It accepts a function executed on all the items of the specified array in the left-to-right sequence. The returned single value is stored in the accumulator. Thus, array reduce JavaScript is a non-mutating method. This means that instead of changing the actual value variable, it will hold the computed value in the accumulator without changing the original value variable.

/*
// NOTES

// const nums = [3, 4, 5, 6, 7];
// // To multiply all values in nums:
// const product = nums.reduce((total, currentVal) => {
//   return total * currentVal;
// });

// // total    currentVal    returnVal
// // 3             4           12
// // 12            5           60
// // 60            6           360
// // 360           7           2520

// //Final Return Value: 2520
*/

// My Practice

// REDUCE Executes a reducer function on each element of the array, resulting in a single value.

// const nums = [3, 4, 5, 6, 7];
// const product = nums.reduce((total, currentVal) => {
//   return total * currentVal;
// });
// console.log(product); // like this works reduce method 3*4*5*6*7 = 2520 // reduces the array into single value

// const addition = nums.reduce((total, currentVal) => {
//   return total + currentVal;
// });
// console.log(addition);

// // SUMMING AN ARRAY
// const arr = [3, 5, 7, 9, 11];
// const summing = arr.reduce((total, currentVal) => {
//   return total + currentVal;
// });
// console.log(summing);

// 011 Reduce pt.2
// ======================================
// REDUCE Executes a reducer function on each element of the array, resulting in a single value.

/*
// NOTES

// const grades = [87, 64, 96, 92, 88, 99, 73, 70, 64];

// // One approach to find max using reduce:
// // const maxGrade = grades.reduce((max, currVal) => {
// //   if (currVal > max) return currVal;
// //   return max;
// // });

// // A shorter version using Math.max:
// const maxGrade = grades.reduce((max, currVal) => {
//   return Math.max(max, currVal)
// });
// // Finding the min value using Math.min:
// const minGrade = grades.reduce((min, currVal) => (
//   //using implicit return for variety's sake
//   Math.min(min, currVal)
// ));

// // max     currVal    return
// // 87        64         87
// // 87        96         96
// // 96        92         96
// /// etc.

// // We can specify an initial value as the 2nd argument to reduce:
// // arr.reduce(reducerFunction, initialValue)
// const total = [10, 20, 30, 40, 50].reduce((sum, currVal) => {
//   return sum + currVal;
// }, 1000) //sum starts at 1000, then each element is added to it
*/

// My Practice

// REDUCE Executes a reducer function on each element of the array, resulting in a single value.

// const grades = [87, 64, 96, 92, 88, 99, 73, 70, 64];
// const maxGrade = grades.reduce((max, currentVal) => {
//   if (currentVal > max) return currentVal;
//   return max;
// });
// console.log(maxGrade);

// const maxGrade = grades.reduce((max, currentVal) => {
//   return Math.max(max, currentVal);
// });
// console.log(maxGrade);

// const minGrade = grades.reduce((min, currentVal) => {
//   return Math.min(min, currentVal);
// });
// console.log(minGrade);

// console.log(Math.max(3, 5));
// console.log(Math.max(3, 10));
// console.log(Math.max(9, 1));

// // FINDING MAX VAL
// let grades = [89, 96, 58, 77, 62, 93, 81, 99, 73];

// const maxGrade = grades.reduce((max, currentVal) => {
//   if (currentVal > max) return currentVal;
//   return max;
// });
// console.log(maxGrade);

// // FINDING MAX VAL
// const minGrade = grades.reduce((min, currentVal) => {
//   if (currentVal < min) return currentVal;
//   return min;
// });
// console.log(minGrade);

// // A Shorter way Math.max & implicit return
// const topScore = grades.reduce((max, currentVal) => {
//   return Math.max(max, currentVal);
// });
// console.log(topScore);
// const lowScore = grades.reduce((min, currentVal) => {
//   return Math.min(min, currentVal);
// });
// console.log(lowScore);

// let sum = [10, 20, 30, 40, 50].reduce((sum, currentVal) => {
//   return sum + currentVal;
// }, 0);
// console.log(sum);
// sum = [10, 20, 30, 40, 50].reduce((sum, currentVal) => {
//   return sum + currentVal;
// }, 1000);
// console.log(sum);

// 012 Even More Reduce part-3
// ======================================

/*
// NOTES

// const votes = ["y", "y", "n", "y", "n", "y", "n", "y", "n", "n", "n", "y", "y"];

// // To tally the votes:
// // const results = votes.reduce((tally, val) => {
// //   if (tally[val]) {
// //     tally[val]++
// //   } else {
// //     tally[val] = 1;
// //   }
// //   return tally;
// // }, {})

// // The shorter version:
// const results = votes.reduce((tally, val) => {
//   tally[val] = (tally[val] || 0) + 1;
//   return tally;
// }, {});

// const books = [
//   {
//     title: "Good Omens",
//     authors: ["Terry Pratchett", "Neil Gaiman"],
//     rating: 4.25,
//     genres: ["fiction", "fantasy"],
//   },
//   {
//     title: "Changing My Mind",
//     authors: ["Zadie Smith"],
//     rating: 3.83,
//     genres: ["nonfiction", "essays"],
//   },
//   {
//     title: "Bone: The Complete Edition",
//     authors: ["Jeff Smith"],
//     rating: 4.42,
//     genres: ["fiction", "graphic novel", "fantasy"],
//   },
//   {
//     title: "American Gods",
//     authors: ["Neil Gaiman"],
//     rating: 4.11,
//     genres: ["fiction", "fantasy"],
//   },
//   {
//     title: "A Gentleman in Moscow",
//     authors: ["Amor Towles"],
//     rating: 4.36,
//     genres: ["fiction", "historical fiction"],
//   },
//   {
//     title: "The Name of the Wind",
//     authors: ["Patrick Rothfuss"],
//     rating: 4.54,
//     genres: ["fiction", "fantasy"],
//   },
//   {
//     title: "The Overstory",
//     authors: ["Richard Powers"],
//     rating: 4.19,
//     genres: ["fiction", "short stories"],
//   },
//   {
//     title: "A Truly Horrible Book",
//     authors: ["Xavier Time"],
//     rating: 2.18,
//     genres: ["fiction", "garbage"],
//   },
//   {
//     title: "The Way of Kings",
//     authors: ["Brandon Sanderson"],
//     rating: 4.65,
//     genres: ["fantasy", "epic"],
//   },
//   {
//     title: "Lord of the flies",
//     authors: ["William Golding"],
//     rating: 3.67,
//     genres: ["fiction"],
//   },
// ];
// // To group books by rating:
// const groupedByRatings = books.reduce((groupedBooks, book) => {
//   const key = Math.floor(book.rating);
//   if (!groupedBooks[key]) groupedBooks[key] = [];
//   groupedBooks[key].push(book);
//   return groupedBooks;
// }, {});
*/

// My Practice

// const votes = ["y", "y", "n", "y", "n", "y", "n", "y", "n", "n", "n", "y", "y"];

// const results = votes.reduce((tally, val) => {
//   if (tally[val]) {
//     tally[val]++;
//   } else {
//     tally[val] = 1;
//   }
//   return tally;
// }, {});
// console.log(results);

// // shorter way
// const results = votes.reduce((tally, value) => {
//   tally[value] = (tally[value] || 0) + 1;
//   return tally;
// }, {});
// console.log(results);

// const items = [
//   "bharu",
//   "bharu",
//   "dhanush",
//   "bharu",
//   "dhanush",
//   "bharu",
//   "dhanush",
//   "sadhana",
//   "dhanush",
//   "bharu",
//   "sadhana",
// ];

// const howManyItemsEach = items.reduce((tally, value) => {
//   if (tally[value]) {
//     tally[value]++;
//   } else {
//     tally[value] = 1;
//   }
//   return tally;
// }, {});
// console.log(howManyItemsEach);

// // shorter way
// const howManyItemsEach = items.reduce((tally, value) => {
//   tally[value] = (tally[value] || 0) + 1;
//   return tally;
// }, {});
// console.log(howManyItemsEach);

// EXAMPLE 2

// const books = [
//   {
//     title: "Good Omens",
//     authors: ["Terry Pratchett", "Neil Gaiman"],
//     rating: 4.25,
//     genres: ["fiction", "fantasy"],
//   },
//   {
//     title: "Changing My Mind",
//     authors: ["Zadie Smith"],
//     rating: 3.83,
//     genres: ["nonfiction", "essays"],
//   },
//   {
//     title: "Bone: The Complete Edition",
//     authors: ["Jeff Smith"],
//     rating: 4.42,
//     genres: ["fiction", "graphic novel", "fantasy"],
//   },
//   {
//     title: "American Gods",
//     authors: ["Neil Gaiman"],
//     rating: 4.11,
//     genres: ["fiction", "fantasy"],
//   },
//   {
//     title: "A Gentleman in Moscow",
//     authors: ["Amor Towles"],
//     rating: 4.36,
//     genres: ["fiction", "historical fiction"],
//   },
//   {
//     title: "The Name of the Wind",
//     authors: ["Patrick Rothfuss"],
//     rating: 4.54,
//     genres: ["fiction", "fantasy"],
//   },
//   {
//     title: "The Overstory",
//     authors: ["Richard Powers"],
//     rating: 4.19,
//     genres: ["fiction", "short stories"],
//   },
//   {
//     title: "A Truly Horrible Book",
//     authors: ["Xavier Time"],
//     rating: 2.18,
//     genres: ["fiction", "garbage"],
//   },
//   {
//     title: "The Way of Kings",
//     authors: ["Brandon Sanderson"],
//     rating: 4.65,
//     genres: ["fantasy", "epic"],
//   },
//   {
//     title: "Lord of the flies",
//     authors: ["William Golding"],
//     rating: 3.67,
//     genres: ["fiction"],
//   },
// ];

// const groupedByRatings = books.reduce((groupedBooks, book) => {
//   const key = Math.floor(book.rating);
//   if (!groupedBooks[key]) groupedBooks[key] = [];
//   groupedBooks[key].push(book);
//   return groupedBooks;
// }, {});
// console.log(groupedByRatings);

///////////////////////////////////////
// 11 - A Few Miscellaneous JS Features
//////////////////////////////////////

// ===================================
// 001 - New JS Features Intro
// ===================================
// Arrow Functions
// String Template Literals
// Let & Const
// For...of
// For...in
// Exponent Operator
// String.includes()
// Array.includes ()
// Object.values ()
// Rest & spread -> now
// Destructuring -> now
// Default Function Parameters -> now
// Object Enhancements -> soon
// Classes -> soon
// Async Functions -> soon

// GOALS
// Work with rest & spread
// Add default function parameters
// Understanding destructuring

// ===================================
// 002 - Default Parameters
// ===================================

/*
// NOTES

// The old way of adding a default value:
// function multiply(x, y) {
//   if (typeof y === 'undefined') {
//     y = 1;
//   }
//   return x * y;
// }

// A slightly shorter version:
// function multiply(x, y) {
//   y = typeof y === 'undefined' ? 1 : y
//   return x * y;
// }

// // The new super clean way of adding defaults!
// function multiply(x, y = 1) {
//   return x * y;
// }
// multiply(3, 4); //12
// multiply(3); //3

// Another example!
// const greet = (person, greeting = 'hi') => {
//   console.log(`${greeting}, ${person}!`)
// }

// Default value of an array:
// const blah = (x, y = [1, 2, 3]) => {
//   console.log(x, y);
// }

// Multiple default values are possible, but rare
// const greet = (person, greeting = 'hi', punctuation = '!') => {
//   console.log(`${greeting}, ${person} ${punctuation}`)
// }
*/

// My Practice

// // older ways
// // Default Paramters
// function multiply(x, y) {
//   if (typeof b === "undefined") {
//     y = 1;
//   }
//   return x * y;
// }
// console.log(multiply(7));
// console.log(multiply(7, 3));

// function multiply(x, y) {
//   y = typeof y === "undefined" ? 1 : y;
//   return x * y;
// }
// console.log(multiply(8));
// console.log(multiply(8, 3));

// // DEFAULT PARAMETERS The New Way
// function multiply(x, y = 1) {
//   return x * y;
// }
// console.log(multiply(9));
// console.log(multiply(9, 3));

// const greet = (person, greeting = "hi") => {
//   return `${greeting}, ${person}`;
// };
// console.log(greet("tim"));
// console.log(greet("tim", "YOO"));

// const blah = (x, y = [1, 2, 3]) => {
//   console.log(x, y);
// };
// blah(1);
// blah(2, 3);

// const greet1 = (person, greeting = "hi", punctuation = "!") => {
//   console.log(`${greeting}, ${person} ${punctuation}`);
// };
// greet1("anya");
// greet1("bharu");
// greet1("dhanush");

// ===================================
// 003 - Spread for Function Calls
// ===================================
// SPREAD
// Spread syntax allows an iterable such as an array to be EXPANDED in places where zero or more arguments (for function calls)
// or
// elements (for array literals) are expected,
// or
// an object expression to be EXPANDED in places where zero or more key-value pairs (for object literals) are expected.

// There are only three use cases
// spread in function calls
// spread in array literals
// spread in object literals
/*

// NOTES

// function giveMeFour(a, b, c, d) {
//   console.log("a", a);
//   console.log("b", b);
//   console.log("c", c);
//   console.log("d", d);
// }

// const colors = ["red", "orange", "yellow", "green"];

// // Without spread:
// giveMeFour(colors);
// // a ["red", "orange", "yellow", "green"]
// // b undefined
// // c undefined
// // d undefined

// // WITH SPREAD!!!
// // Values are passed as separate args:
// giveMeFour(...colors);
// // a 'red'
// // b 'orange'
// // c 'yellow'
// // d 'green'

// //We can also spread strings!
// giveMeFour(..."GOAT");
// // a G
// // b O
// // c A
// // d T
*/

// My Practice

// SPREAD
// Spread syntax allows an iterable such as an array to be EXPANDED in places where zero or more arguments (for function calls)
// or
// elements (for array literals) are expected,
// or
// an object expression to be EXPANDED in places where zero or more key-value pairs (for object literals) are expected.

// There is only three use cases
// spread in function calls
// spread in array literals
// spread in object literals

// SPREAD For Function Calls
// Expands an iterable (array, string, etc.)

// const nums = [9, 3, 2, 8];
// console.log(Math.max(nums)); // NaN
// // Use spread!
// console.log(Math.max(...nums)); // 9 // gives the max element
// console.log(typeof Math.max(...nums));
// console.log(...nums);

// console.log(Math.max(3, 4, 5, 6, 7, 12, 19, 99, 3));
// console.log(Math.min(3, 4, 5, 6, 7, 12, 19, 99, 3));

// const nums1 = [45, 23, 34, 7, 5];
// console.log(Math.max(nums1)); // NaN
// console.log(Math.max(...nums1)); // this means Math.max(45, 23, 34, 7, 5) gives max number 45
// console.log(...nums1); // 45 23 34 7 5 // means removing brackets spreads all elements

// function giveMeFour(a, b, c, d) {
//   console.log("a", a);
//   console.log("b", b);
//   console.log("c", c);
//   console.log("d", d);
// }
// giveMeFour(4, 5, 6, 7);

// const colors = ["red", "orange", "yellow", "green"];
// giveMeFour(colors);
// giveMeFour(...colors);

// const string = "GOAT";
// giveMeFour(string);
// giveMeFour(...string); // means spread(...) making like giveMeFour("G","O","A","T");
// giveMeFour("G", "O", "A", "T"); // but typing sucks

// // // make a variable
// let name = "bhar";
// // // use spread
// giveMeFour(...name);
// name = "bharu";
// giveMeFour(...name); // not giving u bcoz giveMeFour function has four paramaters so it is giving b h a r

// ===================================
// 004 - Spread in Array Literals
// ===================================
// SPREAD In Array Literals
// Creates a new array using an existing array. Spreads the elements from one array into new array.
// original arrays will not change only makes copy

/*
// NOTES

// const cephalopods = [
//   "dumbo octopus",
//   "humboldt squid",
//   "flamboyant cuttlefish",
// ];

// const gastropods = ["giant african snail", "banana slug", "variable neon slug"];

// const cnidaria = ["fire coral", "moon jelly"];

// const mollusca = [...cephalopods, ...gastropods];
// //["dumbo octopus", "humboldt squid", "flamboyant cuttlefish", "giant african snail", "banana slug", "variable neon slug"]

// const inverts = [...cnidaria, ...gastropods, ...cephalopods];
// //["fire coral", "moon jelly", "giant african snail", "banana slug", "variable neon slug", "dumbo octopus", "humboldt squid", "flamboyant cuttlefish"]

// const cephCopy = [...cephalopods];
// //["dumbo octopus", "humboldt squid", "flamboyant cuttlefish"]
*/

// My Practice

// SPREAD In Array Literals
// Creates a new array using an existing array. Spreads the elements from one array into new array.
// original arrays will not change only makes copy
// we can use spread to combine arrays and we can also add elements in an arrays

// const nums1 = [1, 2, 3];
// const nums2 = [4, 5, 6];
// const spreadNums = [...nums1, ...nums2];
// console.log(spreadNums); // (6) [1, 2, 3, 4, 5, 6]
// const spreadNums1 = [...nums1, ...nums2, 7, 8, 9];
// console.log(spreadNums1); // (9) [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(nums1, nums2); // originals will not change

// const cephalopods = [
//   "dumbo octopus",
//   "humboldt squid",
//   "flamboyant cuttlefish",
// ];

// const gastropods = ["giant african snail", "banana slug", "variable neon slug"];

// const cnidaria = ["fire coral", "moon jelly"];

// const mollusca = [...cephalopods, ...gastropods];
// console.log(mollusca); // using spread we combined arrays as a copy // (6) ['dumbo octopus', 'humboldt squid', 'flamboyant cuttlefish', 'giant african snail', 'banana slug', 'variable neon slug']

// let inverts = [...cnidaria, ...gastropods, ...cephalopods];
// console.log(inverts); // (8) ['fire coral', 'moon jelly', 'giant african snail', 'banana slug', 'variable neon slug', 'dumbo octopus', 'humboldt squid', 'flamboyant cuttlefish']

// // we can also add elements to inverts if we want
// inverts = [
//   "some inverts",
//   "more inverts",
//   ...cnidaria,
//   ...gastropods,
//   ...cephalopods,
// ];
// console.log(inverts); // (10) ['some inverts', 'more inverts', 'fire coral', 'moon jelly', 'giant african snail', 'banana slug', 'variable neon slug', 'dumbo octopus', 'humboldt squid', 'flamboyant cuttlefish']

// const cephCopy = [...cephalopods];
// console.log(cephCopy);

// console.log(cephCopy === cephalopods); // false

// const copy = cephalopods;
// console.log(copy === cephalopods); // true

// console.log("abcdefg".split("")); // (7) ['a', 'b', 'c', 'd', 'e', 'f', 'g']
// console.log([..."abcdefg"]); // (7) ['a', 'b', 'c', 'd', 'e', 'f', 'g']
// console.log([..."abc", ..."def", "HELLO!!"]); // (7) ['a', 'b', 'c', 'd', 'e', 'f', 'HELLO!!']

// ===================================
// 005 - Spread in Object Literals
// ===================================
// SPREAD In Object Literals
// Copies properties from one object into another object literal.

/*
// NOTES

// const feline = {
//   legs: 4,
//   family: "Felidae",
// };

// const canine = {
//   family: "Caninae",
//   furry: true,
//   legs: 4,
// };

// const dog = {
//   ...canine,
//   isPet: true,
//   adorable: true,
// };
// //{family: "Caninae", furry: true, legs: 4, isPet: true, adorable: true}

// const houseCat = {
//   ...feline,
//   isGrumpy: true,
//   personality: "unpredictable",
// };
// //{legs: 4, family: "Felidae", isGrumpy: true, personality: "unpredictable"}

// const catDog = {
//   ...canine,
//   ...feline,
// };
// //{family: "Felidae", furry: true, legs: 4}

// //Order matters! Legs will be 3 here, because we set it AFTER spreading canine.
// const tripod = {
//   ...canine,
//   legs: 3,
// };
// //{family: "Caninae", furry: true, legs: 3}

// const catDogClone = {
//   ...catDog,
// };

// const random = [
//   ..."hello",
//   {
//     ...catDog,
//   },
// ];
*/

// My Practice

// SPREAD In Object Literals
// Copies properties from one object into another object literal.

// const feline = {
//   legs: 4,
//   family: "Felidae",
// };

// const canine = {
//   family: "Caninae",
//   furry: true,
// };

// const dog = {
//   ...canine,
//   isPet: true,
//   adorable: true,
// };
// console.log(dog); // {family: 'Caninae', furry: true, isPet: true, adorable: true}

// const houseCat = {
//   ...feline,
//   isGrumpy: true,
//   personality: "unpredictable",
// };
// console.log(houseCat); // {legs: 4, family: 'Felidae', isGrumpy: true, personality: 'unpredictable'}

// const felineOne = {
//   legs: 4,
//   family: "Felidae",
// };

// const canineOne = {
//   family: "Caninae",
//   furry: true,
//   legs: 4,
// };

// const catDog = {
//   ...canineOne,
//   ...felineOne,
// };
// console.log(catDog); // {family: 'Felidae', furry: true, legs: 4}

// const tripod = {
//   ...canineOne,
//   legs: 3,
// };
// console.log(tripod); // {family: 'Caninae', furry: true, legs: 3} // order matters legs were over written

// const tripod1 = {
//   legs: 3,
//   ...canineOne,
// };
// console.log(tripod1); // {legs: 4, family: 'Caninae', furry: true}

// const catDogClone = {
//   ...catDog, // cloning catDog
// };
// console.log(catDogClone);
// console.log(catDogClone === catDog); // false // we cloned catDog to catDogClone means catDogClone is another object so they are not same

// // // objects are not iterable
// // // console.log([...dog]); // TypeError: dog is not iterable

// console.log({ ...[4, 5, 6] }); // {0: 4, 1: 5, 2: 6} // gets key value pairs

// // we can iterate string in object // not that useful mostly
// console.log({ ..."asdasd" }); // {0: 'a', 1: 's', 2: 'd', 3: 'a', 4: 's', 5: 'd'}

// const random = [..."hello", { ...catDog }];
// console.log(random);

// ===================================
// 006 - The Arguments Object(not new)
// ===================================

// ===================================
// 007 - Rest Parameters (new)
// ===================================
// REST PARAMETERS collects all remaining arguments into an actual array

/*
// NOTES

// // OLD WAY!
// // function sum() {
// //   const argsArr = [...arguments]
// //   return argsArr.reduce((total, currVal) => {
// //     return total + currVal
// //   })
// // }

// // New way using rest:
// function sum(...nums) {
//   return nums.reduce((total, currVal) => {
//     return total + currVal;
//   });
// }

// //We can have named params and then collect the rest into an array:
// function fullName(first, last, ...titles) {
//   console.log("first", first);
//   console.log("last", last);
//   console.log("titles", titles);
// }

// // We can use rest parameters in arrow functions!
// const multiply = (...nums) => nums.reduce((total, currVal) => total * currVal);
*/

// My Practice

// REST PARAMETERS collects all remaining arguments into an actual array

// function sumAll(...nums) {
//   let total = 0;
//   for (let n of nums) total += n; // total = total + n
//   return total;
// }
// console.log(sumAll(1, 2));
// console.log(sumAll(1, 2, 3, 4, 5));

// function sum(...nums) {
//   return nums.reduce((total, currentVal) => {
//     return total + currentVal;
//   });
// }
// console.log(sum(4, 5, 6, 7));

// function fullName(first, last, ...titles) {
//   console.log("first", first);
//   console.log("last", last);
//   console.log("titles", titles);
// }
// fullName("bharu", "rockzz", "demon king", "magic emperor", "strongest");
// // first bharu
// // app.js:7135 last rockzz
// // app.js:7136 titles (3) ['demon king', 'magic emperor', 'strongest']

// const multiply = (...nums) => {
//   return nums.reduce((total, currentValue) => total * currentValue);
// };
// console.log(multiply(4, 5, 6));
// console.log(multiply(4, 4, 4));
// console.log(multiply(9, 9, 1, 1, 2));

// const add = (...nums) => {
//   return nums.reduce((total, currentValue) => total + currentValue);
// };
// console.log(add(4, 5, 6));
// console.log(add(4, 5, 6, 5));

// ===================================
// 008 - Destructuring Arrays
// ===================================
// DESTRUCTURING A short, clean syntax to "unpack":
// -> Values from arrays
// -> Properties from objects
// Into distinct variables
// Destructuring is To extract individual values into variables from arrays,objects,nested,parameters

/*
// NOTES

// const raceResults = [
//   "Eliud Kipchoge",
//   "Feyisa Lelisa",
//   "Galen Rupp",
//   "Ghirmay Ghebreslassie",
//   "Alphonce Simbu",
//   "Jared Ward",
// ];

// // The old way:
// // const gold = raceResults[0]
// // const silver = raceResults[1]
// // const bronze = raceResults[2]

// // Using Destructuring:
// const [gold, silver, bronze] = raceResults;
// gold; //'Eliud Kipchoge'
// silver; //'Feyisa Lelisa'
// bronze; //'Galen Rupp'

// const [first, , , fourth] = raceResults;
// first; //'Eliud Kipchoge'
// fourth; //'Ghirmay Ghebreslassie'

// const [winner, ...others] = raceResults;
// winner; //'Eliud Kipchoge'
// others; //["Feyisa Lelisa", "Galen Rupp", "Ghirmay Ghebreslassie", "Alphonce Simbu", "Jared Ward"]
*/

// My Practice

// DESTRUCTURING A short, clean syntax to "sunpack":
// -> Values from arrays
// -> Properties from objects
// Into distinct variables

// const raceResults = [
//   "Eliud Kipchoge",
//   "Feyisa Lelisa",
//   "Galen Rupp",
//   "Ghirmay Ghebreslassie",
//   "Alphonce Simbu",
//   "Jared Ward",
// ];

// // OLD way destructuring one at a time
// const gold = raceResults[0];
// console.log(gold); // Eliud Kipchoge
// const silver = raceResults[1];
// console.log(silver); // Feyisa Lelisa
// const bronze = raceResults[2];
// console.log(bronze); // Galen Rupp

// // NEW way destructuring All at once, unpacking values all at once and storing in variables
// const [gold, silver, bronze] = raceResults;
// console.log(gold); // Eliud Kipchoge
// console.log(silver); // Feyisa Lelisa
// console.log(bronze); // Galen Rupp

// console.log(raceResults); // will not  change or mutate

// const [first, , , fourth] = raceResults; // , -> skips that indexed element
// console.log(first); // Eliud Kipchoge
// console.log(fourth); // Ghirmay Ghebreslassie

// const [winner, ...others] = raceResults;
// console.log(winner); // Eliud Kipchoge
// console.log(others); // (5) ['Feyisa Lelisa', 'Galen Rupp', 'Ghirmay Ghebreslassie', 'Alphonce Simbu', 'Jared Ward']

// SUMMARY // ARRAY Destructuring
// const raceResults1 = ["Eliud Kipchoge", "Feyisa Lelisa", "Galen Rupp"];

// const [goldd, silverr, bronzee] = raceResults1;
// const [fastest, ...everyoneElse] = raceResults1;

// console.log(goldd); // Eliud Kipchoge
// console.log(silverr); // Feyisa Lelisa
// console.log(bronzee); // Galen Rupp

// console.log(fastest); // Eliud Kipchoge
// console.log(everyoneElse); // (2) ['Feyisa Lelisa', 'Galen Rupp']

// ===================================
// 009 - Destructuring Objects
// ===================================

/*
// NOTES

// const runner = {
//   first: "Eliud",
//   last: "Kipchoge",
//   country: "Kenya",
//   title: "Elder of the Order of the Golden Heart of Kenya",
// };

// // const {
// //   first,
// //   last,
// //   time
// // } = runner;

// const { country: nation, title: honorific } = runner;

// const { first, last, ...other } = runner;
*/

// My Practice

// const runner = {
//   first: "Eliud",
//   last: "Kipchoge",
//   country: "Kenya",
//   title: "Elder of the Order of the Golden Heart of Kenya",
// };

// // The variable names must be existing key names
// // you can variable name as property name only other name are undefined time -> undefined
// const { first, last, time } = runner;
// console.log(first); // Eliud
// console.log(last); // Kipchoge
// console.log(time); // undefined

// const { country, state } = runner;
// console.log(country); // kenya
// console.log(state); // undefined

// // The variable names must be existing key names but we name them using below method
// const { country: nation, title: honorific } = runner;
// console.log(nation); // kenya
// console.log(honorific); // Elder of the Order of the Golden Heart of Kenya

// const { first, last, ...other } = runner;
// console.log(first); // Eliud
// console.log(last); // Kipchoge
// console.log(other); // {country: 'Kenya', title: 'Elder of the Order of the Golden Heart of Kenya'}

// SUMMARY // OBJECT Destructuring

// const runner = {
//   first: "Eliud",
//   last: "Kipchoge",
//   country: "Kenya",
//   title: "Elder of the Order of the Golden Heart of Kenya",
// };

// const { first, last, country, time } = runner;
// const { first: one, last: end, country: nation } = runner;
// const { first: numberOne, last: numberEnd, ...other } = runner;

// console.log(first); // Eliud
// console.log(last); // Kipchoge
// console.log(country); // Kenya
// console.log(time); // undefined

// console.log(one); // Eluid
// console.log(end); // Kipchoge
// console.log(nation); // Kenya

// console.log(numberOne); // Eluid
// console.log(numberEnd); // Kipchoge
// console.log(other); // {country: 'Kenya', title: 'Elder of the Order of the Golden Heart of Kenya'}

// ===================================
// 010 - Nested Destructuring
// ===================================

/*
// NOTES

// const results = [
//   {
//     first: "Eliud",
//     last: "Kipchoge",
//     country: "Kenya",
//   },
//   {
//     first: "Feyisa",
//     last: "Lilesa",
//     country: "Ethiopia",
//   },
//   {
//     first: "Galen",
//     last: "Rupp",
//     country: "United States",
//   },
// ];
// // NESTED DESTRUCTURING
// const [{ first: goldWinner }, { country }] = results;
// goldWinner; //"Eliud"
// country; //"Ethiopia"
*/

// My Practice

const results = [
  {
    first: "Eliud",
    last: "Kipchoge",
    country: "Kenya",
  },
  {
    first: "Feyisa",
    last: "Lilesa",
    country: "Ethiopia",
  },
  {
    first: "Galen",
    last: "Rupp",
    country: "United States",
  },
];

// const [{ first: goldWinner }, { country }] = results;
// console.log(goldWinner); // Eliud
// console.log(country); // Ethiopia

// // another way to destructuring or unpack country value into varable
// const [, silverMedal] = results;
// const { country } = silverMedal;
// console.log(country); // Ethiopia

// ===================================
// 011 - Destructuring Parameters
// ===================================

/*
// NOTES

// const runner = {
//   first: "Eliud",
//   last: "Kipchoge",
//   country: "Kenya",
//   title: "Elder of the Order of the Golden Heart of Kenya",
// };

// // Rather than destructuring INSIDE the function body
// // function print(person) {
// //   const {
// //     first,
// //     last,
// //     title
// //   } = person;
// //   console.log(`${first} ${last}, ${title}`)
// // }

// // We can unpack the values we want right in the parameter list:
// function print({ first, last, title }) {
//   console.log(`${first} ${last}, ${title}`);
// }

// const response = ["HTTP/1.1", "200 OK", "application/json"];

// // Also works with array parameters:
// function parseResponse([protocol, statusCode, contentType]) {
//   console.log(`Status: ${statusCode}`);
// }
*/

// My Practice

// const runner = {
//   first: "Eliud",
//   last: "Kipchoge",
//   country: "Kenya",
//   title: "Elder of the Order of the Golden Heart of Kenya",
// };

// function print(person) {
//   const { first, last, title } = person;
//   console.log(`${first} ${last}, ${title}`);
// }
// print(runner);

// // Another Method Easy for me
// function print({ first, last, title }) {
//   console.log(`${first} ${last}, ${title}`);
// }
// print(runner);

// const response = ["HTTP/1.1", "200 OK", "application/json"];

// function parseResponse([protocol, statusCode, contentType]) {
//   console.log(`Status: ${statusCode}`);
// }
// parseResponse(response);

// =========================================
// =========================================
//               JOHN SMILGA
// =========================================
// =========================================

////////////////////////////////
// 03 - Javascript Tutorial Continued
////////////////////////////////

// ===================================
// 001 - Connecting The Dots
// ===================================

// String Methods
// Global/Local Scope
// Array Iterators - (map,filter,reduce)
// Global Objects - Math,Date

// ===================================
// 002 - String Properties and Methods
// ===================================
// String properties and methods
// wrapper String Object, don't memorize methods

/*
// NOTES

// String properties and methods
// wrapper String Object, don't memorize methods
let text = ' Peter Jordan';
let result = text.length;
console.log(result);

console.log(text.length);
console.log(text.toLowerCase());
console.log(text.toUpperCase());
console.log(text.charAt(0));
console.log(text.charAt(text.length - 1));
console.log(text.indexOf('e'));
console.log(text);
console.log(text.trim());
console.log(text.trim().toLowerCase().startsWith('peter'));
console.log(text.includes('eter'));
console.log(text.slice(0, 2));
console.log(text.slice(-3));

// const person = {
//   name: 'peter', // property
//   greeting() {
//     // method
//     console.log("Hey, I'm Peter");
//   },
// };

// console.log(person);

// console.log(person.name);
// person.greeting();

*/

// My Practice
// String properties and methods
// wrapper String Object, don't memorize methods

// let text = " Peter Jordan";
// let result = text.length;
// console.log(result);

// console.log(text.length);
// console.log(text.toLowerCase());
// console.log(text.toUpperCase());
// console.log(text.charAt(0));
// console.log(text.charAt(12)); // returns entered index num character
// console.log(text.charAt(text.length - 1)); // returns last character
// console.log(text.indexOf("P")); // opposite of chartAt // returns index num of character
// console.log(text.indexOf("e")); // opposite of chartAt // returns index num of character
// console.log(text.indexOf("P")); // if entered character is not in the string returns -1
// console.log(text);
// console.log(text.trim()); // removes white spaces
// console.log(text.startsWith("Peter")); // returns true or false
// console.log(text.trim().toLowerCase().startsWith("peter"));
// console.log(text.includes("eter")); // checks the entered value in it or not // returns true or false
// console.log(text.slice(0, 2)); // does not include index 2 // returns 0 index and 1 index characters
// console.log(text.slice(0, 4)); // does not include index 2 // returns 0 1 2 3 index characters
// console.log(text.slice(-1)); // returns last character
// console.log(text.slice(-2)); // returns last two character
// console.log(text.slice(-3)); // returns last three character

// const person = {
//   name: "peter", // property
//   greeting() {
//     // method
//     console.log("Hey, I'm Peter");
//   },
// };

// console.log(person);

// console.log(person.name);
// person.greeting();

// ===================================
// 003 - Template Literals
// ===================================
// Template Literals - ES6+
// Backtick characters `` - above tab (left from one)
// Interpolation ${} - insert expression(value)

/*
// NOTES

// Template Literals - ES6+
// Backtick characters `` - above tab (left from one)
// Interpolation ${} - insert expression(value)

const name = 'john';
const age = 25;
const sentence = "Hey it's " + name + ' and he is ' + age + ' years old';

const value = `Hey it's ${name} and he is ${age} years old. And here is some simple math ${
  4 + 4
}`;
console.log(value);

console.log(sentence);

*/

// My Practice

// Template Literals - ES6+
// Backtick characters `` - above tab (left from one)
// Interpolation ${} - insert expression(value)

// const name = "john";
// const age = 25;
// const sentence = "Hey it's " + name + " and he is " + age + " years old";

// console.log(sentence);

// const value = `Hey it's ${name} and he is ${age} years old. And here is some simple math ${
//   4 + 4
// }`;

// console.log(value);

// const myName = "bharu";
// const myAge = 28;
// const myValue = `Iam ${myName} and age is ${myAge}.`;
// console.log(myValue);

// ===================================
// 004 - Strings Challenge
// ===================================
/* 
## Strings #8

1. create function fullName
2. accept two parameters "firstName", "lastName"
3. add them together (concat) and return result in uppercase
4. invoke fullName and pass some values
5. log result
6. change the order of arguments
7. refactor to object parameter

*/

/*
// NOTES

// function fullName(firstName, lastName) {
//   const fullName = `${firstName} ${lastName}`;
//   return fullName.toUpperCase();
// }
// console.log(fullName('john', 'smith'));

function fullName({ firstName, lastName }) {
  const fullName = `${firstName} ${lastName}`;
  return fullName.toUpperCase();
}

console.log(fullName({ lastName: 'jordan', firstName: 'peter' }));
*/

// My Practice

/* 
## Strings #8

1. create function fullName
2. accept two parameters "firstName", "lastName"
3. add them together (concat) and return result in uppercase
4. invoke fullName and pass some values
5. log result
6. change the order of arguments
7. refactor to object parameter

*/

// function fullName(firstName, lastName) {
//   const fullName = `${firstName} ${lastName}`;
//   return fullName.toUpperCase();
// }
// console.log(fullName("bharu", "rockzz"));
// console.log(fullName("dhanush", "nursing"));

// refactoring to object parameters

// function fullName({ firstName, lastName }) {
//   const fullName = `${firstName} ${lastName}`;
//   return fullName.toUpperCase();
// }
// console.log(fullName({ lastName: "rockzz", firstName: "bharu" }));
// console.log(fullName({ lastName: "nursing", firstName: "dhanush" }));

// ===================================
// 005 - Array Properties and Methods
// ===================================

/*
// NOTES

// Array Properties and Methods
let names = ['john', 'bobo', 'barry', 'olga', 'ben'];

//length
console.log(names.length);
console.log(names[names.length - 1]);

// concat
const lastNames = ['pepper', 'onion', 'banana'];
const allNames = names.concat(lastNames);
console.log(allNames);
// reverse
console.log(allNames.reverse());

//unshift
allNames.unshift('susy');
allNames.unshift('anna');
console.log(allNames);
//shift
allNames.shift();
allNames.shift();
allNames.shift();
allNames.shift();
console.log(allNames);
//push
allNames.push('susy');
console.log(allNames);
//pop
allNames.pop();
// allNames.pop();
// allNames.pop();
// allNames.pop();
console.log(allNames);
// splice - mutates original array
const specificNames = allNames.splice(0, 3);
console.log(specificNames);
console.log(allNames);

*/

// My Practice

// // Array Properties and Methods
// let names = ["john", "bobo", "barry", "olga", "ben"];

// // length
// console.log(names.length);
// console.log(names[0]); // returns index 0 element
// console.log(names[3]); // returns index 3 element
// console.log(names[names.length - 1]); // returns last element
// console.log(names[names.length - 2]); // returns second last element

// // concat
// const lastNames = ["pepper", "onion", "banana"];
// const allNames = names.concat(lastNames); // returns names array + lastNames array into allNames
// console.log(allNames);

// // reverse
// console.log(allNames.reverse());

// // unshift // adds an element at beginning of the array
// allNames.unshift("susy");
// allNames.unshift("anna");
// console.log(allNames);

// // shift // deletes an element at beginning of the array
// allNames.shift(); // no need passing arguments
// allNames.shift();
// allNames.shift();
// allNames.shift();
// console.log(allNames);

// // push // adds an element at end of the array
// allNames.push("susy");
// allNames.push("anna");
// allNames.push("bharu");
// allNames.push("dhanush");
// console.log(allNames);

// // pop // deletes an element at end of the array
// allNames.pop();
// // allNames.pop();
// // allNames.pop();
// // allNames.pop();
// console.log(allNames);

// // mind-map -> // unshift // shift // push // pop - uspushpop

// // splice - mutates original array
// const specificNames = allNames.splice(2, 1); // 2->from index 2, 1-> how many we should delete
// console.log(specificNames); // deleted index 2 and returns what index 2 had
// console.log(allNames); // mutated array
// const delIndex0 = allNames.splice(0, 1);
// console.log(delIndex0);
// console.log(allNames);

// ===================================
// 006 - Exercise - Full Name
// ===================================

/*
// NOTES

// Arrays and for loop

const names = ['anna', 'susy', 'bob'];
const lastName = 'shakeandbake';
let newArray = [];

//for loop
for (let i = 0; i < names.length; i++) {
  console.log(i);
  console.log(names[i]);
  const fullName = `${names[i]} ${lastName}`;
  newArray.push(fullName);
}

console.log(names);
console.log(newArray);
*/

// My Practice

// // Arrays and for loop
// const names = ["anna", "susy", "bob"];
// const lastName = "shakeandbake";
// let newArray = [];

// const newArray1 = newArray.concat(names).concat(lastName);
// console.log(newArray1);

// // for loop
// for (let i = 0; i < names.length; i++) {
//   // console.log(i);
//   // console.log(names[i]);
//   newArray.push(`${names[i]} ${lastName}`);
// }
// console.log(names);
// console.log(newArray);

// ===================================
// 007 - Exercise - Calculate Total
// ===================================
// Functions, return, if, arrays, for loop

/*
// NOTES

// Functions, return, if, arrays, for loop

const gas = [20, 40, 100, 30];
const food = [10, 40, 50];

function calculateTotal(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  if (total > 100) {
    console.log(`Whoa! You are spending way too much`);
    return total;
  }
  console.log(`You are good total is less than 100`);

  return total;
}

const gasTotal = calculateTotal(gas);
const foodTotal = calculateTotal(food);
const randomTotal = calculateTotal([200, 4000, 500, 1]);

console.log({
  gas: gasTotal,
  food: foodTotal,
  random: randomTotal,
});

*/

// My Practice
// Functions, return, if, arrays, for loop

// const gas = [20, 40, 100, 30];
// const food = [10, 40, 50];

// function calculateTotal(array) {
//   let total = 0;
//   for (let i = 0; i < array.length; i++) {
//     // console.log(array[i]);
//     total += array[i];
//   }
//   // console.log(total);
//   if (total > 100) {
//     console.log("whoa! You are spending way too much");
//     return total;
//   }
//   console.log("You are good total is less than 100");

//   return total;
// }
// // calculateTotal(gas);
// const gasTotal = calculateTotal(gas);
// const foodTotal = calculateTotal(food);
// const randomTotal = calculateTotal([200, 4000, 500, 1]);
// const randomTotal1 = calculateTotal([200, 4000, 500, 1, 200]);
// const gymExpenses = calculateTotal([1000, 1600, 2000]);

// console.log({
//   gas: gasTotal,
//   food: foodTotal,
//   random: randomTotal,
//   random1: randomTotal1,
//   gym: gymExpenses,
// });

// ===================================
// 008 - Value vs Reference
// ===================================
// Refernce vs Value
// Primitive Data Types
// String, Number, Symbol, Boolean, Undefined, Null,
// Arrays, Functions, Objects = object
// typeof

// when assigning primitive data type value to a variable any changes are made directly to that value, without affecting original value

// when assigning non-primitive data type value to a variable is done by reference so any changes will affect all the references.

// The fundamental difference between primitives and non-primitive is that primitives are immutable and non-primitive are mutable .

/*
// NOTES

const number = 1;
let number2 = number;
number2 = 7;
console.log(`the first value is ${number}`);
console.log(`the second value is ${number2}`);

let person = { name: 'bob' };
let person2 = { ...person };
person2.name = 'susy';
console.log(`the name of the first person is ${person.name}`);
console.log(`the name of the second person is ${person2.name}`);

*/

// My Practice
// Refernce vs Value
// Primitive Data Types
// String, Number, Symbol, Boolean, Undefined, Null,
// Arrays, Functions, Objects = object
// typeof

// when assigning primitive data type value to a variable any changes are made directly to that value, without affecting original value

// when assigning non-primitive data type value to a variable is done by reference so any changes will affect all the references.

// The fundamental difference between primitives and non-primitive is that primitives are immutable and non-primitive are mutable .

// const number = 1;
// let number2 = number;
// console.log(`the first value is ${number}`);
// number2 = 7;
// console.log(`the first value is ${number}`);
// console.log(`the second value is ${number2}`);

// let person = { name: "bob" };
// // let person2 = person; // it affects both values // pit fall
// let person2 = { ...person }; // use this method to avoid pit fall
// person2.name = "susy";

// console.log(`the name of the first person is ${person.name}`);
// console.log(`the name of the second person is ${person2.name}`);

// ===================================
// 009 - Null and Undefined
// ===================================
// Null and Undefined
// both represent "no value"

// undefined - "javascript can not find value for this"

// variable without value
// missing function parameters
// missing object properties

// null - "developer sets the value"

// My Practice

// let number = 20 + null; // 20 + 0;
// console.log(number);
// let number2 = 20 + undefined; // 20 + 0;
// console.log(number2);

// ===================================
// 010 - Truthy and Falsy
// ===================================
// Truthy and Falsy
// falsy values - > "",'',``,0 ,-0 ,NaN ,false, null, undefined
// Rest are truthy values

/*
// NOTES

// Truthy and Falsy
// falsy values - > "",'',``,0 ,-0 ,NaN ,false, null, undefined
// Rest are truthy values

const bool1 = true;
const bool2 = 2 > 1;

const text = '';

if (text) {
  console.log('hey the value Truthy');
} else {
  console.log('hey the value Falsy');
}

// if (bool1) {
//   console.log(`Hey it works!`);
// }
// if (bool2) {
//   console.log(`Hey it also works!`);
// }

*/

// My Practice

// Truthy and Falsy
// falsy values - > "",'',``,0 ,-0 ,NaN ,false, null, undefined
// Rest are truthy values

// const bool1 = true;
// const bool2 = 2 > 1;

// if (bool1) {
//   console.log("Hey it works!");
// }
// if (bool2) {
//   console.log("Hey it also works!");
// }

// let text = "john"; // truthy
// text = ""; // falsy
// text = "n"; // truthy
// text = 0; // falsy
// text = -0; // falsy
// text = NaN; // falsy
// text = false; // falsy
// text = null; // falsy
// text = undefined; // falsy
// text = 25; // truthy
// text = "bharu"; // truthy

// if (text) {
//   console.log(`hey the value ${text} is Truthy`);
// } else {
//   console.log(`hey the value ${text} is Falsy`);
// }

// ===================================
// 011 - Ternary Operator
// ===================================

/*
// NOTES

// unary operator -  typeof
let text = 'some text';
// console.log(typeof text); // operand
// binary operator - assignment
let number = 3;
let number2 = 2 + 5;
// ternary operator
// condition ? (runs if true) : (runs if false)

const value = 1 < 0;

value ? console.log('value is true') : console.log('value is false');

// if (value) {
//   console.log('value is true');
// } else {
//   console.log('value is false');
// }
*/

// My Practice

// // unary operator -  typeof
// let text = "some text";
// console.log(typeof text); // operand
// // binary operator - assignment
// let number = 3;
// let number2 = 2 + 5;
// // ternary operator
// // condition ? (runs if true) : (runs if false)

// let value = 2 > 1;
// value = 1 < 0;

// if (value) {
//   console.log("value is true");
// } else {
//   console.log("value is false");
// }

// // condition ? (runs if true) : (runs if false)
// value ? console.log("value is true") : console.log("value is false");

// let myAge = 28;
// let anotherAge = 30;
// let compareAge = myAge > anotherAge;

// compareAge ? console.log(true) : console.log(false);
// // or
// myAge > anotherAge ? console.log(true) : console.log(false);

// compareAge = myAge < anotherAge;
// compareAge ? console.log(true) : console.log(false);

// ===================================
// 012 - Global Scope
// ===================================

// Global Scope vs Local Scope
// any variable outside code block {} is said to be in Global Scope
// can be accesss anywhere in the program
// Gotchas : name collisions, modify by mistake

/*
// NOTES

// Global Scope vs Local Scope
// any variable outside code block {} is said to be in Global Scope
// can be accesss anywhere in the program
// Gotchas : name collisions, modify by mistake

let name = 'bobo';
name = 'peter';

function calculate() {
  // some other code...
  console.log(name);
  name = 'orange';
  function inner() {
    name = 'inner name value';
    console.log(`this is from inner function ${name}`);
  }
  inner();
}
calculate();

if (true) {
  // some other code...
  console.log(name);
  name = 'pants';
}

console.log(`my name is ${name} and I'm awesome`);

*/

// My Practice

// Global Scope vs Local Scope
// any variable outside code block {} is said to be in Global Scope
// can be accesss anywhere in the program
// Gotchas : name collisions, modify by mistake

// let name = "bobo";
// name = "peter";
// //// const name = "john"; // app.js:8159 Uncaught SyntaxError: Identifier 'name' has already been declared (at app.js:8159:7)
// //// const name1 = "john"; // allowed
// //// const name2 = "john"; // allowed

// function calculate() {
//   // some other code...
//   console.log(name);
//   name = "orange";
//   function inner() {
//     name = "inner name value";
//     console.log(`this is from inner function ${name}`);
//   }
//   inner();
// }
// calculate();

// if (true) {
//   // some other code...
//   console.log(name);
//   name = "pants";
// }

// console.log(`my name is ${name} and I'm awesome`);

// ===================================
// 013 - Local Scope
// ===================================
// Local Scope
// can not be access from outside code blocks
// if - NOT VAR

/*
// NOTES

// Local Scope
// can not be access from outside code blocks
// if - NOT VAR

let name = 'bobo';

function calculate() {
  const name = 'john';
  const age = 25;
  // code goes here
  becomesGlobal = 'global variable';
}

calculate();
console.log(becomesGlobal);

if (true) {
  const name = 'john';
}

{
  const name = 'john';
  const special = 'special';
}
console.log(special);

console.log(`my name is ${name} and I'm awesome`);
*/

// My Practice

// Local Scope
// can not be access from outside code blocks
// if - NOT VAR

// let name = "bobo";

// function calculate() {
//   const name = "john"; // we cannot access or modify this from outside
//   const age = "25";
//   // code goes here
//   becomesGlobal = "global variable";
// }
// calculate();
// console.log(becomesGlobal);

// if (true) {
//   const name = "john"; //  // we cannot access or modify this from outside
// }

// {
//   const name = "john"; //  // we cannot access or modify this from outside
//   const special = "special"; //  // we cannot access or modify this from outside
//   // But we can access from inside
//   console.log(name);
//   console.log(special);
// }
// // // console.log(special); //  //  // we cannot access or modify this from outside

// console.log(`my name is ${name} and I'm awesome`);

// ===================================
// 014 - Variable Lookup
// ===================================
// // Variable Lookup
// {} - code block

/*
// NOTES

// Variable Lookup
// {} - code block

const globalNumber = 5;

function add(num1, num2) {
  // const globalNumber = 20;
  const result = num1 + num2 + globalNumber;
  function multiply() {
    // const globalNumber = 100;
    const multiplyResult = result * globalNumber;
    console.log(multiplyResult);
  }
  console.log(multiplyResult);

  multiply();
  return result;
}

console.log(add(3, 4));
*/

// My Practice

// Variable Lookup
// {} - code block

// const globalNumber = 5;

// function add(num1, num2) {
//   // const globalNumber = 20;
//   const result = num1 + num2 + globalNumber; // if function has globalNumber variable it will use it result=3+4+20=27// otherwise it will use outside globalNumber result = 3+4+5=12
//   function multiply() {
//     // const globalNumber = 100;
//     const multiplyResult = result * globalNumber;
//     console.log(multiplyResult);
//   }
//   multiply();
//   return result;
// }

// console.log(add(3, 4));

// ===================================
// 015 - Callback Functions, Higher Order Functions
// ===================================
// Callback Functions, Higher Order Functions, Functions as First Class Objects/Citizens
// Functions are first class objects - stored in a variable (expression), passed as an argument to another function, return from the function (closure)

// Higher Order function - accepts another function as an argument or returns another function as a result

// Callback Function - passed to a another function as an an argument and executed inside that function

/*
// NOTES

function morning(name) {
  return `Good morning ${name.toUpperCase()}`;
}
function afternoon(name) {
  return `Good afternoon ${name.repeat(3)}`;
}

function greet(name, cb) {
  const myName = 'john';
  console.log(`${cb(name)}, my name is ${myName}`);
}

greet('bobo', morning);
greet('peter', afternoon);

// Callback Functions, Higher Order Functions, Functions as First Class Objects/Citizens
// Functions are first class objects - stored in a variable (expression), passed as an argument to another function, return from the function (closure)

// Higher Order function - accepts another function as an argument or returns another function as a result

// Callback Function - passed to a another function as an an argument and executed inside that function

// function greetMorning(name) {
//   const myName = 'john';
//   console.log(`Good morning ${name}, my name is ${myName}`);
// }
// function greetAfternoon(name) {
//   const myName = 'susan';
//   console.log(`Good afternoon ${name}, my name is ${myName}`);
// }
*/

// My Practice

// Callback Functions, Higher Order Functions, Functions as First Class Objects/Citizens
// Functions are first class objects - stored in a variable (expression), passed as an argument to another function, return from the function (closure)

// Higher Order function - accepts another function as an argument or returns another function as a result

// Callback Function - passed to a another function as an an argument and executed inside that function

// function greetMorning(name) {
//   const myName = "john";
//   console.log(`Good morning ${name}, my name is ${myName}`);
// }
// function greetAfternoon(name) {
//   const myName = "john";
//   console.log(`Good afternoon ${name}, my name is ${myName}`);
// }
// greetMorning("bobo");
// greetAfternoon("peter");

// function morning(name) {
//   return `Good morning ${name.toUpperCase()}`;
// }
// // function afternoon(name) {
// //   return `Good afternoon ${name.repeat(3)}`;
// // }

// function greet(name, cb) {
//   const myName = "john";
//   console.log(`${cb(name)}, my name is ${myName}`);
// }
// greet("bobo", morning);
// greet("peter", afternoon);

// ===================================
// 016 - Array Iterators
// ===================================

/*
// NOTES

// Powerfull Array Methods
// forEach, map, filter, find, reduce
// Iterate over array - no for loop required
// Accept CALLBACK function as an argument, calls Callback against each item in a array. Reference Item in the Callback Paramater.

const numbers = [0, 1, 2, 3, 4];

// show all numbers

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
*/

// My Practice

// Powerfull Array Methods
// forEach, map, filter, find, reduce
// Iterate over array - no for loop required
// Accept CALLBACK function as an argument, calls Callback against each item in a array. Reference Item in the Callback Paramater.

// const numbers = [0, 1, 2, 3, 4];

// // show all numbers

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// ===================================
// 017 - forEach
// ===================================
// forEach
// does not return new array

/*
// NOTES

// forEach
// does not return new array

const people = [
  { name: 'bob', age: 20, position: 'developer' },
  { name: 'peter', age: 25, position: 'designer' },
  { name: 'susy', age: 30, position: 'the boss' },
];

function showPerson(person) {
  console.log(person.position.toUpperCase());
}

// people.forEach(showPerson);

people.forEach(function (item) {
  console.log(item.position.toUpperCase());
});
*/

// My Practice

// forEach
// does not return new array

// const people = [
//   { name: "bob", age: 20, position: "developer" },
//   { name: "peter", age: 25, position: "designer" },
//   { name: "susy", age: 30, position: "the boss" },
// ];

// // iterating people array

// // traditional for loop
// for (let i = 0; i < people.length; i++) {
//   console.log(people[i]);
// }
// // for of loop
// for (let item of people) {
//   console.log(item);
// }

// // right now we need these methods
// // method 1 // using function declaration
// function showPerson(person) {
//   console.log(person);
// }
// // method 2 // using function expression
// const showPerson2 = function (person) {
//   console.log(person);
// };

// people.forEach(showPerson);
// people.forEach(showPerson2);
// // method 3 // using anonymous function
// people.forEach(function (item) {
//   console.log(item);
// });
// // method 4 // using arrow function
// people.forEach((person) => {
//   console.log(person);
// });

// people.forEach(function (item) {
//   console.log(item.position.toUpperCase());
// });

// people.forEach(function (item) {
//   console.log(item.name.toUpperCase());
// });
// // using arrow function
// people.forEach((item) => {
//   console.log(item.position.toUpperCase());
// });

// people.forEach((item) => {
//   console.log(item.name.toUpperCase());
// });

// ===================================
// 018 - map
// ===================================
// map
// does return a new array
// does not change size of original array
// uses values from original array when making new one
// map is the most used method for vanilla js and react also.

/*
// NOTES

// map
// does return a new array
// does not change size of original array
// uses values from original array when making new one

const people = [
  { name: 'bob', age: 20, position: 'developer' },
  { name: 'peter', age: 25, position: 'designer' },
  { name: 'susy', age: 30, position: 'the boss' },
  { name: 'anna', age: 35, position: 'the boss' },
];

const ages = people.map(function (person) {
  return person.age + 20;
});
const newPeople = people.map(function (person) {
  return {
    firstName: person.name.toUpperCase(),
    oldAge: person.age + 20,
  };
});

const names = people.map(function (person) {
  return `<h1>${person.name}</h1>`;
});

document.body.innerHTML = names.join('');

console.log(names);

*/

// My Practice

// map
// does return a new array
// does not change size of original array
// uses values from original array when making new one
// map is the most used method for vanilla js and react also.

// const people = [
//   { name: "bob", age: 20, position: "developer" },
//   { name: "peter", age: 25, position: "designer" },
//   { name: "susy", age: 30, position: "the boss" },
//   { name: "anna", age: 35, position: "the boss" },
// ];

// const ages = people.map(function (item) {
//   return item.age + 20;
// });
// console.log(ages);

// const newPeople = people.map(function (item) {
//   return {
//     firstName: item.name.toUpperCase(),
//     oldAge: item.age + 20,
//   };
// });
// console.log(newPeople);

// const names = people.map(function (item) {
//   return `<h1>${item.name}</h1>`;
// });
// // document.body.innerHTML = names.join(""); // not working for me i don't know why
// console.log(names);

// ===================================
// 019 - filter
// ===================================
// filter
// does return a new array
// can manipulate the size of new array
// returns based on condition

/*
// NOTES

// filter
// does return a new array
// can manipulate the size of new array
// returns based on condition

const people = [
  { name: 'bob', age: 20, position: 'developer' },
  { name: 'peter', age: 25, position: 'designer' },
  { name: 'susy', age: 30, position: 'the boss' },
  { name: 'anna', age: 35, position: 'the boss' },
];

const youngPeople = people.filter(function (person) {
  return person.age <= 25;
});

const developers = people.filter(function (person) {
  return person.position === 'senior developer';
});

console.log(developers);

*/

// My Practice

// filter
// does return a new array
// can manipulate the size of new array
// returns based on condition

// const people = [
//   { name: "bob", age: 20, position: "developer" },
//   { name: "peter", age: 25, position: "designer" },
//   { name: "susy", age: 30, position: "the boss" },
//   { name: "anna", age: 35, position: "the boss" },
// ];

// const youngPeople = people.filter(function (item) {
//   return item.age <= 25;
// });
// console.log(youngPeople);

// const developers = people.filter(function (item) {
//   return item.position === "developer";
//   // return item.position === "senior developer"; // returns empty []
// });
// console.log(developers);

// // using arrow function implicit return
// const youngPeople2 = people.filter((item) => {
//   return item.age <= 25;
// });
// console.log(youngPeople2);

// // using arrow function explicit return
// const youngPeople3 = people.filter((item) => item.age <= 25);
// console.log(youngPeople3);

// // using arrow function implicit return
// const developers2 = people.filter((item) => {
//   return item.position === "developer";
//   // return item.position === "senior developer"; // returns empty []
// });
// console.log(developers2);

// // using arrow function explicit return
// const developers3 = people.filter(
//   (item) => item.position === "developer"
//   //  item.position === "senior developer" // returns empty []
// );
// console.log(developers3);

// ===================================
// 020 - find
// ===================================
// find
// returns single instance - (in this case object)
// returns first match, if no match undefined
// great for getting unique value

/*
// NOTES

// find
// returns single instance - (in this case object)
// returns first match, if no match undefined
// great for getting unique value

const people = [
  { name: 'bob', age: 20, position: 'developer', id: 1 },
  { name: 'peter', age: 25, position: 'designer', id: 2 },
  { name: 'susy', age: 30, position: 'the boss', id: 3 },
  { name: 'anna', age: 35, position: 'the boss', id: 4 },
];
const names = ['bob', 'peter', 'susy'];
console.log(
  names.find(function (name) {
    return name === 'zelda';
  })
);

const person = people.find(function (person) {
  return person.id === 3;
});

console.log(person.name);

const person2 = people.filter(function (person) {
  return person.id === 3;
});

console.log(person2[0].name);

*/

// My Practice

// find
// returns single instance - (in this case object)
// returns first match, if no match undefined
// great for getting unique value

// const people = [
//   { name: "bob", age: 20, position: "developer", id: 1 },
//   { name: "peter", age: 25, position: "designer", id: 2 },
//   { name: "susy", age: 30, position: "the boss", id: 3 },
//   { name: "anna", age: 35, position: "the boss", id: 4 },
// ];

// const names = ["bob", "peter", "susy"];
// console.log(
//   names.find(function (name) {
//     return name === "bob";
//     // return name === "zelda"; // undefined
//   })
// );
// // find
// const person = people.find(function (item) {
//   return item.id === 3;
//   // return item.id === 5; // TypeError: Cannot read properties of undefined
// });
// console.log(person.name);
// // filter
// const person2 = people.filter(function (item) {
//   return item.id === 3;
// });
// console.log(person2);
// console.log(person2[0].name);
// ===================================
// 021 - reduce
// ===================================
// reduce
// iterates, callback function
// reduces to a single value - number, array, object
// 1 parameter ('acc') - total of all calculations
// 2 parameter ('curr') - current iteration/value

/*
// NOTES

// reduce
// iterates, callback function
// reduces to a single value - number, array, object
// 1 parameter ('acc') - total of all calculations
// 2 parameter ('curr') - current iteration/value

const people = [
  { name: 'bob', age: 20, position: 'developer', id: 1, salary: 200 },
  { name: 'peter', age: 25, position: 'designer', id: 2, salary: 300 },
  { name: 'susy', age: 30, position: 'the boss', id: 3, salary: 500 },
  { name: 'anna', age: 35, position: 'the boss', id: 4, salary: 500 },
];

const total = people.reduce(function (acc, currItem) {
  console.log(`total ${acc}`);
  console.log(`current money : ${currItem.salary}`);
  acc += currItem.salary;
  return acc;
}, 500);

console.log(total);
*/

// My Practice

// reduce
// iterates, callback function
// reduces to a single value - number, array, object
// 1 parameter ('acc') - total of all calculations
// 2 parameter ('curr') - current iteration/value

// const people = [
//   { name: "bob", age: 20, position: "developer", id: 1, salary: 200 },
//   { name: "peter", age: 25, position: "designer", id: 2, salary: 300 },
//   { name: "susy", age: 30, position: "the boss", id: 3, salary: 500 },
//   { name: "anna", age: 35, position: "the boss", id: 4, salary: 500 },
// ];

// const total = people.reduce(function (total, currentItem) {
//   console.log(`total ${total}`);
//   console.log(`current money : ${currentItem.salary}`);
//   total += currentItem.salary;
//   return total;
// }, 0);
// console.log(total);

// ===================================
// 022 - Array Challenge Intro
// ===================================

// ===================================
// 023 - Array Challenge - setup Data
// ===================================

/*
## Array Methods #9

Multiple Videos

#### Create Students Array

1. setup students array with 5 students
   {
   id: 1,
   name: 'peter',
   score: 80,
   favoriteSubject: 'math',
   },

#### Use Multiple Files

- easer to manage code base (file, project)
- order matters
- other ways to achieve the same result (ES6 modules, fetch DB )
- not limited to just static data

#### updatedStudents

1. add role:'student' property to each object
   using MAP method
2. assign to 'updatedStudents' variable and log

#### highScores

1. filter array and return only scores >= 80
2. assign to 'highScores' variable and log

#### specificId

1. find specific id in array
2. assign to 'specificId' variable and log

#### averageScore

1. sum up all student.score values with reduce
2. divide by the length of the students array
3. assign to 'averageScore' and log

#### survey

1. list favorite subjects with reduce
   {
   english: 1
   history: 1
   math: 3
   }
2. assign to survey and log
*/

// const students = [
//   {
//     id: 1,
//     name: "peter",
//     score: 80,
//     favoriteSubject: "math",
//   },
//   {
//     id: 2,
//     name: "susan",
//     score: 99,
//     favoriteSubject: "history",
//   },
//   {
//     id: 3,
//     name: "anna",
//     score: 85,
//     favoriteSubject: "math",
//   },
//   {
//     id: 4,
//     name: "john",
//     score: 34,
//     favoriteSubject: "art",
//   },
//   {
//     id: 5,
//     name: "bobo",
//     score: 74,
//     favoriteSubject: "math",
//   },
// ];
// console.log(students);

// ===================================
// 024 - Array Challenge - Multiple Files
// ===================================

// const students = [
//   {
//     id: 1,
//     name: "peter",
//     score: 80,
//     favoriteSubject: "math",
//   },
//   {
//     id: 2,
//     name: "susan",
//     score: 99,
//     favoriteSubject: "history",
//   },
//   {
//     id: 3,
//     name: "anna",
//     score: 85,
//     favoriteSubject: "math",
//   },
//   {
//     id: 4,
//     name: "john",
//     score: 34,
//     favoriteSubject: "art",
//   },
//   {
//     id: 5,
//     name: "bobo",
//     score: 74,
//     favoriteSubject: "math",
//   },
// ];
// console.log(students);

// ===================================
// 025 - Array Challenge - Map
// ===================================
/*
// #### updatedStudents

1. add role:'student' property to each object
   using MAP method
2. assign to 'updatedStudents' variable and log
*/

// const students = [
//   {
//     id: 1,
//     name: "peter",
//     score: 80,
//     favoriteSubject: "math",
//   },
//   {
//     id: 2,
//     name: "susan",
//     score: 99,
//     favoriteSubject: "history",
//   },
//   {
//     id: 3,
//     name: "anna",
//     score: 85,
//     favoriteSubject: "math",
//   },
//   {
//     id: 4,
//     name: "john",
//     score: 34,
//     favoriteSubject: "art",
//   },
//   {
//     id: 5,
//     name: "bobo",
//     score: 74,
//     favoriteSubject: "math",
//   },
// ];

// map method practice
// const updatedStudents = students.map(function (item) {
//   // console.log(item);
//   item.role = "student";
//   return item;
// });
// console.log(updatedStudents);

// ===================================
// 026 - Array Challenge - Filter
// ===================================
/*
#### highScores

1. filter array and return only scores >= 80
2. assign to 'highScores' variable and log
*/

// const students = [
//   {
//     id: 1,
//     name: "peter",
//     score: 80,
//     favoriteSubject: "math",
//   },
//   {
//     id: 2,
//     name: "susan",
//     score: 99,
//     favoriteSubject: "history",
//   },
//   {
//     id: 3,
//     name: "anna",
//     score: 85,
//     favoriteSubject: "math",
//   },
//   {
//     id: 4,
//     name: "john",
//     score: 34,
//     favoriteSubject: "art",
//   },
//   {
//     id: 5,
//     name: "bobo",
//     score: 74,
//     favoriteSubject: "math",
//   },
// ];

// filter method practice
/*
#### highScores

1. filter array and return only scores >= 80
2. assign to 'highScores' variable and log
*/

// // Method 1
// const highScores = students.filter(function (item) {
//   return item.score >= 80;
// });
// console.log(highScores);
// // Method 2
// const highScores2 = students.filter(function (item) {
//   if (item.score >= 80) {
//     return item;
//   }
// });
// console.log(highScores2);
// // Method 3 // one liner
// const highScores3 = students.filter(function (item) {
//   if (item.score >= 80) return item;
// });
// console.log(highScores3);

// ===================================
// 027 - Array Challenge - File Alternative Syntax
// ===================================

// covered in 027

// ===================================
// 028 - Array Challenge - Find
// ===================================
/*
#### specificId

1. find specific id in array
2. assign to 'specificId' variable and log
*/

// const students = [
//   {
//     id: 1,
//     name: "peter",
//     score: 80,
//     favoriteSubject: "math",
//   },
//   {
//     id: 2,
//     name: "susan",
//     score: 99,
//     favoriteSubject: "history",
//   },
//   {
//     id: 3,
//     name: "anna",
//     score: 85,
//     favoriteSubject: "math",
//   },
//   {
//     id: 4,
//     name: "john",
//     score: 34,
//     favoriteSubject: "art",
//   },
//   {
//     id: 5,
//     name: "bobo",
//     score: 74,
//     favoriteSubject: "math",
//   },
// ];

// find method practice
/*
#### specificId

1. find specific id in array
2. assign to 'specificId' variable and log
*/
// const specificId = students.find(function (item) {
//   return item.id === 1;
//   // return item.id === 2;
// });
// console.log(specificId);

// const fruits = ["banana", "orange"];

// const random = fruits.find(function (item) {
//   return item === "banana";
//   // return item === "bananas"; // undefined
// });
// console.log(random);

// ===================================
// 029 - Array Challenge - Reduce #1
// ===================================
/*
#### averageScore

1. sum up all student.score values with reduce
2. divide by the length of the students array
3. assign to 'averageScore' and log
*/

// const students = [
//   {
//     id: 1,
//     name: "peter",
//     score: 80,
//     favoriteSubject: "math",
//   },
//   {
//     id: 2,
//     name: "susan",
//     score: 99,
//     favoriteSubject: "history",
//   },
//   {
//     id: 3,
//     name: "anna",
//     score: 85,
//     favoriteSubject: "math",
//   },
//   {
//     id: 4,
//     name: "john",
//     score: 34,
//     favoriteSubject: "art",
//   },
//   {
//     id: 5,
//     name: "bobo",
//     score: 74,
//     favoriteSubject: "math",
//   },
// ];

// Reduce method practice part 1
/*
#### averageScore

1. sum up all student.score values with reduce
2. divide by the length of the students array
3. assign to 'averageScore' and log
*/

// // method 1
// const averageScore = students.reduce(function (total, currentValue) {
//   total += currentValue.score / students.length;
//   return total;
// }, 0);
// console.log(averageScore);
// method 2
// const averageScore2 = students.reduce(function (scoresTotal, student) {
//   // console.log(student);
//   // console.log(scoresTotal);
//   return (scoresTotal += student.score / students.length);
// }, 0);
// console.log(averageScore2);
// // method 3 // may be it is good method
// const averageScore3 =
//   students.reduce(function (scoresTotal, student) {
//     // console.log(student);
//     // console.log(scoresTotal);
//     return (scoresTotal += student.score);
//   }, 0) / students.length;
// console.log(averageScore3);

// ===================================
// 030 - Square Bracket Notation
// ===================================

// const subject = "art";

// const total = {};
// // total.art = "some value";
// // // or use can use any method . or []
// total[subject] = "some value"; // dynamic method
// console.log(total);

// ===================================
// 031 - Array Challenge - Reduce #2
// ===================================
/*
#### survey

1. list favorite subjects with reduce
   {
   english: 1
   history: 1
   math: 3
   }
*/

// const students = [
//   {
//     id: 1,
//     name: "peter",
//     score: 80,
//     favoriteSubject: "math",
//   },
//   {
//     id: 2,
//     name: "susan",
//     score: 99,
//     favoriteSubject: "history",
//   },
//   {
//     id: 3,
//     name: "anna",
//     score: 85,
//     favoriteSubject: "math",
//   },
//   {
//     id: 4,
//     name: "john",
//     score: 34,
//     favoriteSubject: "art",
//   },
//   {
//     id: 5,
//     name: "bobo",
//     score: 74,
//     favoriteSubject: "math",
//   },
// ];

// Reduce method practice part 2
/*
#### survey

1. list favorite subjects with reduce
   {
   english: 1
   history: 1
   math: 3
   }
*/

// const survey = students.reduce(function (survey, student) {
//   // console.log(survey);
//   // console.log(student.favoriteSubject);
//   const favSubject = student.favoriteSubject;
//   if (survey[favSubject]) {
//     survey[favSubject] = survey[favSubject] + 1;
//   } else {
//     survey[favSubject] = 1;
//   }
//   return survey;
// }, {});
// console.log(survey);

// ===================================
// 032 - Math Object
// ===================================
// Math
// Standard built-in objects - always available

/*
// NOTES

// Math
// Standard built-in objects - always available

// const number = 4.56789;
// const result = Math.floor(number);

// const number = 4.12222;
// const result = Math.ceil(number);

// const number = 89;
// const result = Math.sqrt(number);

// const result = Math.PI;
// const result = Math.min(4, 5, 6, 7, 9);
// const result = Math.max(4, 5, 6, 7, 9, 100, 200, 1000);

const result = Math.floor(Math.random() * 10 + 1);

console.log(result);
*/

// My Practice

// Math
// Standard built-in objects - always available

// const number = 4.56789;
// const result = Math.floor(number);

// const number = 4.12222;
// const result = Math.ceil(number);

// const number = 89;
// const result = Math.sqrt(number);

// const result = Math.PI;
// const result = Math.min(4, 5, 6, 7, 9);
// const result = Math.max(4, 5, 6, 7, 9, 100, 200, 1000);

// const result = Math.floor(Math.random() * 10 + 1);
// console.log(result);

// ===================================
// 033 - Date Object
// ===================================
// Date

// const months = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

// const days = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturtday",
// ];

/*
// NOTES

// const date = new Date();
const date = new Date('1/12/2004');
const month = date.getMonth();
console.log(months[month]);

const day = date.getDay();
console.log(days[day]);

console.log(date.getDate());
console.log(date.getFullYear());

const sentence = `${days[day]}, ${date.getDate()} ${
  months[month]
} ${date.getFullYear()}`;

document.body.innerHTML = sentence;
*/

// My Practice

// // const date = new Date();
// const date = new Date("1/12/2004");
// const month = date.getMonth();
// console.log(months[month]);

// const day = date.getDay();
// console.log(days[day]);

// console.log(date.getDate());
// console.log(date.getFullYear());

// const sentence = `${days[day]}, ${date.getDate()} ${
//   months[month]
// } ${date.getFullYear()}`;
// console.log(sentence);

// document.body.innerHTML = sentence;

// =========================================
// =========================================
//               COLT STEELE
// =========================================
// =========================================

////////////////////////////////
// 12 - Object Methods and the 'THIS' Keyword
////////////////////////////////

// ===================================
// 001 - Shorthand Object Properties
// ===================================
// METHOD & THIS Objects pt.2
// GOALS
// Add methods to objects
// Use new object shorthand syntax
// Understand prototypes
// Explain how the %$@# this works.

/*
// NOTES

// const getStats = (arr) => {
//   const max = Math.max(...arr);
//   const min = Math.min(...arr);
//   const sum = arr.reduce((sum, r) => sum + r);
//   const avg = sum / arr.length;
// The "old" way:
//   return {
//     max: max,
//     min: min,
//     sum: sum,
//     avg: avg
//   }
// }

const getStats = (arr) => {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const sum = arr.reduce((sum, r) => sum + r);
  const avg = sum / arr.length;
  // Using the new shorthand property syntax:
  return {
    max,
    min,
    sum,
    avg
  }
}
const reviews = [4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5];

const stats = getStats(reviews);

function pick(arr) {
  //return random element from arr
  const idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
}

function getCard() {
  const values = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'Q',
    'K',
    'A'
  ];
  const suits = ['clubs', 'spades', 'hearts', 'diamonds'];
  const value = pick(values);
  const suit = pick(suits)
  return {
    value,
    suit
  };
}
*/

// My Practice

// const getStats = (arr) => {
//   const max = Math.max(...arr);
//   const min = Math.min(...arr);
//   const sum = arr.reduce((sum, r) => sum + r);
//   const avg = sum / arr.length;
//   // the "old way"
//   return {
//     max: max,
//     min: min,
//     sum: sum,
//     avg: avg,
//   };
// };

// const getStats = (arr) => {
//   const max = Math.max(...arr);
//   const min = Math.min(...arr);
//   const sum = arr.reduce((sum, r) => sum + r);
//   const avg = sum / arr.length;
//   // Using the new shorthand property syntax:
//   return {
//     max,
//     min,
//     sum,
//     avg,
//   };
// };
// const reviews = [4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5];
// const stats = getStats(reviews);
// console.log(stats);

// function pick(arr) {
//   //return random element from arr
//   const idx = Math.floor(Math.random() * arr.length);
//   return arr[idx];
// }

// function getCard() {
//   const values = [
//     "1",
//     "2",
//     "3",
//     "4",
//     "5",
//     "6",
//     "7",
//     "8",
//     "9",
//     "10",
//     "J",
//     "Q",
//     "K",
//     "A",
//   ];
//   const suits = ["clubs", "spades", "hearts", "diamonds"];
//   const value = pick(values);
//   const suit = pick(suits);
//   return {
//     value,
//     suit,
//   };
// }
// console.log(getCard());

// ===================================
// 002 - Computed Properties
// ===================================

/*
// NOTES

const role = 'host';
const person = 'Jools Holland';
const role2 = 'Director'
const person2 = 'James Cameron'

// The old way: 
// Make the object
// const team = {};
// Then add a property using dynamic key:
// team[role] = person;
// team[role2] = person2;

// USING COMPUTED PROPERTIES!
const team = {
  [role]: person,
  [role2]: person2,
  [1 + 6 + 9]: 'sixteen'
}

// function addProp(obj, k, v) {
//   const copy = {
//     ...obj
//   };
//   copy[k] = v;
//   return copy;
// }

// const addProp = (obj, k, v) => {
//   return {
//     ...obj,
//     [k]: v
//   }
// }

const addProp = (obj, k, v) => ({
  ...obj,
  [k]: v
})
const res = addProp(team, 'happy', ':)')
*/

// My Practice

// const role = "host";
// const person = "jools Holland";
// const role2 = "director";
// const person2 = "James Cameron";

// The old way
// Make the object
// const team = {};
// team[role] = person;
// team[role2] = person2;
// console.log(team);

// COMPUTED PROPERTIES
// We can use a variable as a key name in an object literal property!
// const userName = "Jools";
// const userRole = {
//   [userName]: "Admin",
// };
// console.log(userRole);

// USING COMPUTED PROPERTIES!
// const role = "host";
// const person = "jools Holland";
// const role2 = "director";
// const person2 = "James Cameron";

// const team = {
//   [role]: person,
//   [role2]: person2,
//   [1 + 6 + 9]: "sixteen",
// };
// console.log(team);

// function addProp(object, key, value) {
//   const copy = {
//     ...object,
//   };
//   copy[key] = value;
//   return copy;
// }
// const res = addProp(team, "happy", ":)");
// console.log(res);

// // using arrow function
// const addProp = (object, key, value) => {
//   return {
//     ...object,
//     [key]: value,
//   };
// };

// const res = addProp(team, "happy", ":)");
// console.log(res);

// // using arrow function not using return
// const addProp = (object, key, value) => ({ ...object, [key]: value });

// const res = addProp(team, "happy", ":)");
// console.log(res);

// ===================================
// 003 - Adding Methods to Objects
// ===================================
// METHODS
// We can add functions as properties as objects.
// We call them methods!
// We have seen functions store them in variables,arrays,we can pass them as arguments,we can return them from a function,we can also store them in objects.

/*
// NOTES

// Adding methods to an object!
const math = {
  numbers: [1, 2, 3, 4, 5],
  add: function (x, y) {
    return x + y;
  },
  multiply: function (x, y) {
    return x * y;
  }
}

// To execute multiply:
math.multiply(5, 9); //45
*/

// My Practice

// METHODS
// We can add functions as properties as objects.
// We call them methods!
// We have seen functions store them in variables,arrays,we can pass them as arguments,we can return them from a function,we can also store them in objects.

// console.log("hello".toUpperCase()); // this is aslo a method

// it is uncommon way mostly we will not declare function outside add to object
// const add = function (x, y) {
//   return x + y;
// };

// const math = {
//   add,
// };
// console.log(math);
// console.log(math.add(2, 3));

// // common way
// const math = {
//   numbers: [1, 2, 3, 4, 5],
//   add: function (x, y) {
//     return x + y;
//   },
//   multiply: function (x, y) {
//     return x * y;
//   },
// };
// console.log(math);
// // accessing elements from objects
// console.log(math.numbers);
// console.log(math.add);
// console.log(math.multiply);
// console.log(math.add(5, 6));
// console.log(math.multiply(6, 7));

// ===================================
// 004 - Methods Shorthand Syntax
// ===================================
// SHORTHAND newer syntax

/*
// NOTES

const auth = {
  username: 'TommyBot',
  login() {
    console.log("LOGGED YOU IN!")
  },
  logout() {
    console.log("GOODBYE")
  }
}
*/

// My Practice

// // previous suntax
// const math = {
//   multiply: function (x, y) {
//     return x * y;
//   },
//   divide: function (x, y) {
//     return x / y;
//   },
//   square: function (x) {
//     return x * x;
//   },
// };
// console.log(math);
// console.log(math.multiply);
// console.log(math.multiply(4, 6));
// console.log(math.divide(15, 5));
// console.log(math.square(5));

// // newer modern syntax
// const math2 = {
//   multiply(x, y) {
//     return x * y;
//   },
//   divide(x, y) {
//     return x / y;
//   },
//   square(x) {
//     return x * x;
//   },
// };
// console.log(math2);
// console.log(math2.multiply);
// console.log(math2.multiply(4, 6));
// console.log(math2.divide(15, 5));
// console.log(math2.square(5));

// // shorthand
// // We do this so often that there's a new shortand way of adding methods.
// const math3 = {
//   blah: "Hi!",
//   add(x, y) {
//     return x + y;
//   },
//   multiply(x, y) {
//     return x * y;
//   },
// };
// console.log(math3);
// console.log(math3.add(50, 60));

// const auth = {
//   username: "TommyBot",
//   login() {
//     console.log("logged you in");
//   },
//   logout() {
//     console.log("goodbye");
//   },
//   login2: () => {
//     console.log("hello");
//   },
//   multiply: (x, y) => x * y,
//   multiply2: (x, y) => {
//     return x * y;
//   },
// };
// console.log(auth);
// auth.login();
// auth.logout();
// auth.login2();
// console.log(auth.multiply(12, 2));
// console.log(auth.multiply2(12, 4));

// ===================================
// 005 - Intro to Keyword THIS
// ===================================

/*
// NOTES

function sayHi() {
  console.log("HI")
  //this refers to the window (global scope object in the browser)
  console.log(this);
}

const greet = function () {
  //this refers to the window (global scope object in the browser)
  console.log(this);
}
*/

// My Practice

// function sayHi() {
//   console.log("HI");
//   console.log(this);
// }
// sayHi();
// console.log(window);

// const greet = function () {
//   console.log(this);
// };
// greet();

// ===================================
// 006 - Using THIS in Methods
// ===================================
// THIS IN METHODS
// Use the keyword THIS to access other properties on the same object

/*
// NOTES

function sayHi() {
  console.log("HI")
  //this refers to the window (global scope object in the browser)
  console.log(this);
}


const person = {
  first: 'Cherilyn',
  last: 'Sarkisian',
  nickName: 'Cher',
  fullName() {
    //In a method, this refers to the object the method "lives" in:
    const {
      first,
      last,
      nickName
    } = this;
    return `${first} ${last } AKA ${nickName}`;
  },
  printBio() {
    const fullName = this.fullName();
    console.log(`${fullName} is a person!`)
  }
}
*/

// My Practice

// THIS IN METHODS
// Use the keyword THIS to access other properties on the same object

// function sayHi() {
//   console.log("HI");
//   //this refers to the window (global scope object in the browser)
//   console.log(this);
// }

// const person = {
//   first: "Cherilyn",
//   last: "Sarkisian",
//   nickName: "Cher",
//   fullName() {
//     console.log(`${this.first} ${this.last} AKA ${this.nickName}`);
//   },
// };
// person.fullName();

// // using destructuring
// const person2 = {
//   first: "Cherilyn",
//   last: "Sarkisian",
//   nickName: "Cher",
//   fullName() {
//     const { first, last, nickName } = this;
//     return `${first} ${last} AKA ${nickName}`;
//   },
//   printBio() {
//     const fullName = this.fullName();
//     console.log(`${fullName} is a person!`);
//   },
// };
// person2.fullName();
// person2.nickName = "CHERRRRR";
// console.log(person2);
// person2.fullName();
// person2.printBio();

// THIS IN METHODS
// Use the keyword THIS to access other properties on the same object

// const person3 = {
//   first: "Robert",
//   last: "Herjavec",
//   // fullname() {
//   //   return `${this.first} ${this.last}`;
//   // },
//   // using destructuring
//   fullname() {
//     const { first, last } = this;
//     return `${first} ${last}`;
//   },
// };
// console.log(person3.fullname()); // Robert Herjavec
// person3.last = "Plant";
// console.log(person3.fullname()); // Robert Plant

// ===================================
// 007 - THIS Invocation Context
// ===================================
// The value of THIS depends on the invocation context of the function it is used in.
//Arrow functions don't get their 'own' this.

/*
// NOTES

function sayHi() {
  console.log("HI")
  //this refers to the window (global scope object in the browser)
  console.log(this);
}

const person = {
  first: 'Cherilyn',
  last: 'Sarkisian',
  nickName: 'Cher',
  fullName() {
    //In a method, this refers to the object the method "lives" in
    const {
      first,
      last,
      nickName
    } = this;
    return `${first} ${last } AKA ${nickName}`;
  },
  printBio() {
    console.log(this);
    const fullName = this.fullName();
    console.log(`${fullName} is a person!`)
  },
  laugh: () => {
    //Arrow functions don't get their 'own' this.
    console.log(this);
    console.log(`${this.nickName} says HAHAHAHAH`)
  }
}

// INVOCATION CONTEXT MATTERS!!!
person.printBio(); //THIS refers to the person object

const printBio = person.printBio;
printBio(); //THIS refers to window object
*/

// My Practice

// The value of THIS depends on the invocation context of the function it is used in.
//Arrow functions don't get their 'own' this.

// function sayHi() {
//   console.log("HI")
//   //this refers to the window (global scope object in the browser)
//   console.log(this);
// }

// const person = {
//   first: 'Cherilyn',
//   last: 'Sarkisian',
//   nickName: 'Cher',
//   fullName() {
//     //In a method, this refers to the object the method "lives" in
//     const {
//       first,
//       last,
//       nickName
//     } = this;
//     return `${first} ${last } AKA ${nickName}`;
//   },
//   printBio() {
//     console.log(this);
//     const fullName = this.fullName();
//     console.log(`${fullName} is a person!`)
//   },
//   laugh: () => {
//     //Arrow functions don't get their 'own' this.
//     console.log(this);
//     console.log(`${this.nickName} says HAHAHAHAH`)
//   }
// }

// // INVOCATION CONTEXT MATTERS!!!
// person.printBio(); //THIS refers to the person object

// const printBio = person.printBio;
// printBio(); //THIS refers to window object

// ===================================
// 008 - Annoyomatic Demo
// ===================================

/*
// NOTES

const annoyer = {
  phrases: ["literally", "cray cray", "I can't even", "Totes!", "YOLO", "Can't Stop, Won't Stop"],
  pickPhrase() {
    const {
      phrases
    } = this;
    const idx = Math.floor(Math.random() * phrases.length);
    return phrases[idx]
  },
  start() {
    //Use an arrow function to avoid getting a different 'this':
    this.timerId = setInterval(() => {
      console.log(this.pickPhrase())
    }, 3000)
  },
  stop() {
    clearInterval(this.timerId);
    console.log("PHEW THANK HEAVENS THAT IS OVER!")
  }
}
*/

// My Practice

// const annoyer = {
//   phrases: [
//     "literally",
//     "cray cray",
//     "I can't even",
//     "Totes!",
//     "YOLO",
//     "Can't Stop, Won't Stop",
//   ],
//   pickPhrase() {
//     const { phrases } = this;
//     const idx = Math.floor(Math.random() * phrases.length);
//     return phrases[idx];
//   },
//   start() {
//     this.timerId = setInterval(() => {
//       console.log(this.pickPhrase());
//     }, 3000);
//   },
//   stop() {
//     clearInterval(this.timerId);
//     console.log("PHEW THANK HEAVENS THAT IS OVER!");
//   },
// };
// // console.log(annoyer);
// // console.log(annoyer.pickPhrase());
// annoyer.start();
// // console.log(annoyer);
// annoyer.stop();

// ===================================
// 009 - Putting It All Together Deck Of Cards //// i will come back to practice
// ===================================

/*
// NOTES

// **********************************
// WRITING EVERYTHING USING FUNCTIONS
// **********************************
function initializeDeck() {
  const deck = [];
  const suits = ['hearts', 'diamonds', 'spades', 'clubs'];
  const values = '2,3,4,5,6,7,8,9,10,J,Q,K,A';
  for (let value of values.split(',')) {
    for (let suit of suits) {
      deck.push({
        value,
        suit
      })
    }
  }
  return deck;
}

function drawCard(deck, drawnCards) {
  const card = deck.pop();
  drawnCards.push(card);
  return card;
}

function drawMultiple(numCards, deck, drawnCards) {
  const cards = [];
  for (let i = 0; i < numCards; i++) {
    cards.push(drawCard(deck, drawnCards));
  }
  return cards;
}

function shuffle(deck) {
  // loop over array backwards
  for (let i = deck.length - 1; i > 0; i--) {
    //pick random index before current element
    let j = Math.floor(Math.random() * (i + 1));
    //swap
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}


// We have to create a bunch of variables:
const firstDeck = initializeDeck();
const drawnCards = [];
shuffle(firstDeck);
// We have to pass a ton of arguments around:
const hand1 = drawMultiple(2, firstDeck, drawnCards);
const hand2 = drawMultiple(2, firstDeck, drawnCards);
const pokerHand = drawMultiple(5, firstDeck, drawnCards);





// **********************************
// USING AN OBJECT + METHODS INSTEAD:
// **********************************

const myDeck = {
  deck: [],
  drawnCards: [],
  suits: ['hearts', 'diamonds', 'spades', 'clubs'],
  values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
  initializeDeck() {
    const {
      suits,
      values,
      deck
    } = this;
    for (let value of values.split(',')) {
      for (let suit of suits) {
        deck.push({
          value,
          suit
        })
      }
    }
    // return deck;
  },
  drawCard() {
    const card = this.deck.pop();
    this.drawnCards.push(card);
    return card;
  },
  drawMultiple(numCards) {
    const cards = [];
    for (let i = 0; i < numCards; i++) {
      cards.push(this.drawCard());
    }
    return cards;
  },
  shuffle() {
    const {
      deck
    } = this;
    // loop over array backwards
    for (let i = deck.length - 1; i > 0; i--) {
      //pick random index before current element
      let j = Math.floor(Math.random() * (i + 1));
      //swap
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
  }
}

// Much cleaner!!
myDeck.initializeDeck();
myDeck.shuffle();
const h1 = myDeck.drawMultiple(2);
const h2 = myDeck.drawMultiple(2);
const h3 = myDeck.drawMultiple(5);
*/

// My Practice

// const mainDeck = makeDeck();

// function makeDeck() {
//   const deck = [];
//   const suits = ["hearts", "diamonds", "spades", "clubs"];
//   const values = "2,3,4,5,6,7,8,9,10,J,Q,K,A";
//   for (let value of values.split(",")) {
//     for (let suit of suits) {
//       deck.push({
//         value,
//         suit,
//       });
//     }
//   }
//   return deck;
// }

// function drawCard(deck) {
//   return deck.pop();
// }

// const myDeck = makeDeck();
// const card1 = drawCard(myDeck);
// console.log(card1);
// console.log(myDeck);
// const card2 = drawCard(myDeck);
// console.log(card2);
// console.log(myDeck);

// const myDeck = {
//   deck: [],
//   drawnCards: [],
//   suits: ["hearts", "diamonds", "spades", "clubs"],
//   values: "2,3,4,5,6,7,8,9,10,J,Q,K,A",
//   initializeDeck() {
//     const { suits, values, deck } = this;
//     for (let value of values.split(",")) {
//       for (let suit of suits) {
//         deck.push({
//           value,
//           suit,
//         });
//       }
//     }
//     // return deck;
//   },
//   drawCard() {
//     const card = this.deck.pop();
//     this.drawnCards.push(card);
//     return card;
//   },
//   drawMultiple(numcards) {
//     const cards = [];
//     for (let i = 0; i < numcards; i++) {
//       cards.push(this.drawCard());
//     }
//     return cards;
//   },
//   shuffle() {
//     const { deck } = this;
//     // loop over array backwards
//     for (let i = deck.length - 1; i > 0; i--) {
//       //pick random index before current element
//       let j = Math.floor(Math.random() * (i + 1));
//       //swap
//       [deck[i], deck[j]] = [deck[j], deck[i]];
//     }
//   },
// };
// console.log(myDeck);
// console.log(myDeck.initializeDeck());
// console.log(myDeck);
// console.log(myDeck.deck);

// console.log(myDeck.initializeDeck());
// console.log(myDeck.drawCard());
// console.log(myDeck.drawCard());
// console.log(myDeck.drawCard());
// console.log(myDeck.drawCard());
// console.log(myDeck.drawCard());
// console.log(myDeck.drawCard());
// console.log(myDeck.drawCard());
// console.log(myDeck);

// console.log(myDeck.initializeDeck());
// console.log(myDeck.drawMultiple(4));
// console.log(myDeck);

// // after shuffle code put into my deck
// console.log(myDeck.initializeDeck());
// console.log(myDeck.deck);
// console.log(myDeck.shuffle());
// console.log(myDeck);

// shuffle code for practice copy and pasty to myDeck
// function shuffle(arr) {
//   // loop over array backwards
//   for (let i = arr.length - 1; i > 0; i--) {
//     //pick random index before current element
//     let j = Math.floor(Math.random() * (i + 1));
//     //swap
//     [arr[i], arr[j]] = [arr[j], arr[i]];
//     // console.log(arr);
//   }
// }
// shuffle(["a", "b", "c", "d", "e", "f"]); // testing shuffle
// shuffle(["a", "b", "c", "d", "e", "f"]); // testing shiffle

// const letters = ["a", "b", "c", "d", "e", "f"];
// console.log(([letters[0], letters[3]] = [letters[3], letters[0]]));
// console.log(letters);

// ===================================
// 010 -
// ===================================

/*
// NOTES

*/

// My Practice

////////////////////////////////
// 16 - Asynchronous Code,Callbacks & Promises
////////////////////////////////

// ===================================
// 001 - The Call Stack
// ===================================
// CALL STACK
// The machanism the JS interpreter uses to keep track of its place in a script that calls multiple functions.
// How JS "knows" what function is currently being run and what functions are called from within that function, etc.
// recently placed item will be the first thing out.

// HOW IT WORKS
// When a script calls a function, the interpreter adds it to the call stack and then starts carrying out the function.
// Any functions that are called by that function are added to the call stack furthur up, and run where their calls are reached.
// When the current function is finished, the interpreter takes it off the stack and resumes execution where it left off in the last code listing.

// const multiply = (x, y) => x * y;

// const square = (x) => multiply(x, x);

// const isRightTriangle = (a, b, c) => {
//   return square(a) + square(b) === square(c);
// };
// console.log(isRightTriangle(3, 4, 5));

// ===================================
// 002 - Call Stack Debugging Web Dev Tools
// ===================================

// const repeat = (str, times) => {
//   let result = "";
//   for (let i = 0; i < times; i++) {
//     result += str;
//   }
//   return result;
// };

// const scream = (str) => {
//   return str.toUpperCase() + "!!!";
// };

// const getRantText = (phrase) => {
//   let text = scream(phrase);
//   let rant = repeat(text, 8);
//   return rant;
// };

// const makeRant = (phrase, el) => {
//   const h1 = document.createElement("h1");
//   h1.innerText = getRantText(phrase);
//   el.appendChild(h1);
// };
// console.log("HELLO!");

// makeRant("I hate mayonnaise", document.body);
// // makeRant('if you have to cough, please cover your mouth', document.body);

// ===================================
// 003 - JS is single Threaded
// ===================================
// JS is single threaded
// WHAT DOES THAT MEAN?
// At any given point in time, that single JS thread is running at most one line of JS code.
// Javascript is a single-threaded language, meaning that just one line of code may be run at once.

/*
// NOTES

console.log('I HAPPEN FIRST!');
alert('Hi there!'); //This holds everything up!
console.log('I HAPPEN SECOND!');

console.log('I HAPPEN FIRST!');
setTimeout(function() {
	//This does NOT hold everything up, because...
	//JS relies on THE BROWSER itself to keep track of the timer
	console.log('I HAPPEN THIRD!');
}, 3000);
console.log('I HAPPEN SECOND!');
*/

// My Practice

// JS is single threaded
// WHAT DOES THAT MEAN?
// At any given point in time, that single JS thread is running at most one line of JS code.

// console.log("i happen first");
// alert("hi there");
// console.log("i happen second");

// ===================================
// 004 - How Asynchronous Callbacks Actually Work
// ===================================

// console.log("i happen first");
// alert("hi there");
// console.log("i happen second");

// JS does one thing at a time console.log("i happen first"); happens first next alert("hi there"); this works after that only this works console.log("i happen second");.but alert("hi there"); stops next line code which is  console.log("i happen second"); this.

// console.log("i happen first");
// setTimeout(function () {
//   console.log("i happen third");
// }, 3000);
// console.log("i happen second");

// but here setTimeout works after 3 secs. first  console.log("i happen first"); runs second console.log("i happen second"); runs next // setTimeout(function () {
//   console.log("i happen third");
// }, 3000); runs WHY ?
// HOW DOES IT WORK ?
// ACTUALLY THE BROWSER DOES THE WORK!

// OK BUT HOW ?
// Browsers come with WEB APIs that are able to handle certain tasks in the background (like making requests or setTimeout )

// The JS call stack recognizes these WEB API functions and pass them off to the browser to take care of

// Once the browser finishes those tasks, they return and are pushed onto the stack as a callback.

// ===================================
// 005 - Welcome to Callback Hell
// ===================================

/*
// NOTES

const btn = document.querySelector('button');

//This function moves an element "amount" number of pixels after a delay.
//If the element will stay on screen, we move the element and call the onSuccess callback function
//If the element will move off screen, we do not move the element and instead call the onFailure callback
const moveX = (element, amount, delay, onSuccess, onFailure) => {
	setTimeout(() => {
		const bodyBoundary = document.body.clientWidth;
		const elRight = element.getBoundingClientRect().right;
		const currLeft = element.getBoundingClientRect().left;
		if (elRight + amount > bodyBoundary) {
			onFailure();
		}
		else {
			element.style.transform = `translateX(${currLeft + amount}px)`;
			onSuccess();
		}
	}, delay);
};

// LOOK AT THIS UGLY MESS!
moveX(
	btn,
	300,
	1000,
	() => {
		//success callback
		moveX(
			btn,
			300,
			1000,
			() => {
				//success callback
				moveX(
					btn,
					300,
					1000,
					() => {
						//success callback
						moveX(
							btn,
							300,
							1000,
							() => {
								//success callback
								moveX(
									btn,
									300,
									1000,
									() => {
										//success callback
										alert('YOU HAVE A WIDE SCREEN!');
									},
									() => {
										//failure callback
										alert('CANNOT MOVE FURTHER!');
									}
								);
							},
							() => {
								//failure callback
								alert('CANNOT MOVE FURTHER!');
							}
						);
					},
					() => {
						//failure callback
						alert('CANNOT MOVE FURTHER!');
					}
				);
			},
			() => {
				//failure callback
				alert('CANNOT MOVE FURTHER!');
			}
		);
	},
	() => {
		//failure callback
		alert('CANNOT MOVE FURTHER!');
	}
);

*/

// My Practice

// const btn = document.querySelector("button");

// setTimeout(() => {
//   btn.style.transform = `translate(100px)`;
//   setTimeout(() => {
//     btn.style.transform = `translate(200px)`;
//     setTimeout(() => {
//       btn.style.transform = `translate(300px)`;
//       setTimeout(() => {
//         btn.style.transform = `translate(400px)`;
//         setTimeout(() => {
//           btn.style.transform = `translate(500px)`;
//         }, 3000);
//       }, 3000);
//     }, 3000);
//   }, 3000);
// }, 3000);

// const moveX = (element, amount, delay, callback, onSuccess, onFailure) => {
//   const bodyBoundary = document.body.clientWidth;
//   const elRight = element.getBoundingClientRect().right;
//   const currLeft = element.getBoundingClientRect().left;
//   if (elRight + amount > bodyBoundary) {
//     onFailure();
//   } else {
//     setTimeout(() => {
//       element.style.transform = `translateX(${currLeft + amount}px)`;
//       onSuccess();
//     }, delay);
//   }
// };

// // LOOK AT THIS UGLY MESS!
// moveX(
// 	btn,
// 	300,
// 	1000,
// 	() => {
// 		//success callback
// 		moveX(
// 			btn,
// 			300,
// 			1000,
// 			() => {
// 				//success callback
// 				moveX(
// 					btn,
// 					300,
// 					1000,
// 					() => {
// 						//success callback
// 						moveX(
// 							btn,
// 							300,
// 							1000,
// 							() => {
// 								//success callback
// 								moveX(
// 									btn,
// 									300,
// 									1000,
// 									() => {
// 										//success callback
// 										alert('YOU HAVE A WIDE SCREEN!');
// 									},
// 									() => {
// 										//failure callback
// 										alert('CANNOT MOVE FURTHER!');
// 									}
// 								);
// 							},
// 							() => {
// 								//failure callback
// 								alert('CANNOT MOVE FURTHER!');
// 							}
// 						);
// 					},
// 					() => {
// 						//failure callback
// 						alert('CANNOT MOVE FURTHER!');
// 					}
// 				);
// 			},
// 			() => {
// 				//failure callback
// 				alert('CANNOT MOVE FURTHER!');
// 			}
// 		);
// 	},
// 	() => {
// 		//failure callback
// 		alert('CANNOT MOVE FURTHER!');
// 	}
// );

// moveX(btn, 100, 2000, () => {
//   moveX(btn, 100, 3000, () => {
//     moveX(btn, 100, 3000, () => {
//       moveX(btn, 100, 3000, () => {
//         moveX(btn, 1000, 3000);
//       });
//     });
//   });
// });

// // // // // callback hell from youtube // // // // //
// function step1() {
//   setTimeout(() => {
//     console.log("step1 done");
//     setTimeout(() => {
//       console.log("step2 done");
//       setTimeout(() => {
//         console.log("step3 done");
//         setTimeout(() => {
//           console.log("step4 done");
//           setTimeout(() => {
//             console.log("step5 done");
//           }, 3000);
//         }, 3000);
//       }, 4000);
//     }, 4000);
//   }, 4000);
// }
// step1();

// ===================================
// 006 - Introducing Promises
// ===================================
// ENTER PROMISES
// A Promise is an object representing the eventual completion or failure of an asynchronous operation
// A promise is a returned object to which you attach callbacks, instead of passing callbacks into a function

/*
// NOTES

const willGetYouADog = new Promise((resolve, reject) => {
	const rand = Math.random();
	if (rand < 0.5) {
		resolve();
	}
	else {
		reject();
	}
});
willGetYouADog.then(() => {
	console.log('YAY WE GOT A DOG!!!!');
});
willGetYouADog.catch(() => {
	console.log(':( NO DOG');
});
*/

// My Practice
// ENTER PROMISES
// A Promise is an object representing the eventual completion or failure of an asynchronous operation
// A promise is a returned object to which you attach callbacks, instead of passing callbacks into a function

// const willGetYouADog = new Promise((resolve, reject) => {
//   const rand = Math.random();
//   if (rand < 0.5) {
//     resolve();
//   } else {
//     reject();
//   }
// });
// willGetYouADog.then(() => {
//   console.log("yay we got a dog");
// });
// willGetYouADog.catch(() => {
//   console.log("no dog");
// });

// ===================================
// 007 - Returning Promises from Functions
// ===================================

/*
// NOTES

const makeDogPromise = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const rand = Math.random();
			if (rand < 0.5) {
				resolve();
			}
			else {
				reject();
			}
		}, 5000);
	});
};
makeDogPromise()
	.then(() => {
		console.log('YAY WE GOT A DOG!!!!');
	})
	.catch(() => {
		console.log(':( NO DOG');
	});

*/

// My Practice

// const makeDogPromise = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const rand = Math.random();
//       if (rand < 0.5) {
//         resolve();
//       } else {
//         reject();
//       }
//     }, 5000);
//   });
// };
// makeDogPromise()
//   .then(() => {
//     console.log("YAY WE GOT A DOG!!!!");
//   })
//   .catch(() => {
//     console.log(":( NO DOG");
//   });

////////////////////////////////
////// youtube yahoo baba //////
///////////////////////////////
// function prom(complete) {
//   return new Promise(function (resolve, reject) {
//     console.log("fetching data, please wait.");
//     setTimeout(() => {
//       if (complete) {
//         resolve("iam sucessful");
//       } else {
//         reject("iam failed");
//       }
//     }, 3000);
//   });
// }

// for Method 3 these are not needed
// let onFullFillment = (result) => {
//   console.log(result);
// };

// let onRejection = (error) => {
//   console.log(error);
// };

// Method 1
// prom(false).then(onFullFillment);
// prom(false).catch(onRejection);
// Method 2
// prom(false).then(onFullFillment).catch(onRejection);
// // Method 3
// prom(true)
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// // using two paramters
// function prom(a, b) {
//   return new Promise(function (resolve, reject) {
//     console.log("fetching data, please wait.");
//     var c = a / b;
//     setTimeout(() => {
//       if ((a, b)) {
//         resolve(`Your answer ${c}`);
//       } else {
//         reject("failed to calculate.");
//       }
//     }, 3000);
//   });
// }
// // Method 3
// prom(5, 2)
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// // Method 3
// prom(9, 2)
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// ===================================
// 008 - Resolving Rejecting w_Values
// ===================================

/*
// NOTES

//This is a FAKE Http Request Function
//It takes 1 second to resolve or reject the promise, depending on the url that is passed in
const fakeRequest = (url) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const pages = {
				'/users' : [
					{ id: 1, username: 'Bilbo' },
					{ id: 5, username: 'Esmerelda' }
				],
				'/about' : 'This is the about page!'
			};
			const data = pages[url];
			if (data) {
				resolve({ status: 200, data }); //resolve with a value!
			}
			else {
				reject({ status: 404 }); //reject with a value!
			}
		}, 1000);
	});
};

fakeRequest('/users')
	.then((res) => {
		console.log('Status Code', res.status);
		console.log('Data', res.data);
		console.log('REQUEST WORKED!');
	})
	.catch((res) => {
		console.log(res.status);
		console.log('REQUEST FAILED');
	});

fakeRequest('/dogs')
	.then((res) => {
		console.log('Status Code', res.status);
		console.log('Data', res.data);
		console.log('REQUEST WORKED!');
	})
	.catch((res) => {
		console.log(res.status);
		console.log('REQUEST FAILED');
	});

*/

// My Practice

//This is a FAKE Http Request Function
//It takes 1 second to resolve or reject the promise, depending on the url that is passed in
// const fakeRequest = (url) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const pages = {
//         "/users": [
//           { id: 1, username: "Bilbo" },
//           { id: 1, username: "Esmerelda" },
//         ],
//         "/about": "This is the about page!",
//       };
//       const data = pages[url];
//       if (data) {
//         resolve({ status: 200, data });
//       } else {
//         reject({ status: 404 });
//       }
//     }, 2000);
//   });
// };

// fakeRequest("/users")
//   .then((response) => {
//     console.log("Status Code", response.status);
//     console.log("Status Code", response.data);
//     console.log("REQUEST WORKED!");
//   })
//   .catch((response) => {
//     console.log(response.status);
//     console.log("request failed");
//   });

// fakeRequest("/dogs")
//   .then((response) => {
//     console.log("Status Code", response.status);
//     console.log("Status Code", response.data);
//     console.log("REQUEST WORKED!");
//   })
//   .catch((response) => {
//     console.log(response.status);
//     console.log("request failed");
//   });

// ===================================
// 009 - The Delights of Promise Chaining not completely learned rewise it another time
// ===================================

/*
// NOTES

//This is a FAKE Http Request Function
//It takes 1 second to resolve or reject the promise, depending on the url that is passed in
const fakeRequest = (url) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const pages = {
				'/users'        : [
					{ id: 1, username: 'Bilbo' },
					{ id: 5, username: 'Esmerelda' }
				],
				'/users/1'      : {
					id        : 1,
					username  : 'Bilbo',
					upvotes   : 360,
					city      : 'Lisbon',
					topPostId : 454321
				},
				'/users/5'      : {
					id       : 5,
					username : 'Esmerelda',
					upvotes  : 571,
					city     : 'Honolulu'
				},
				'/posts/454321' : {
					id    : 454321,
					title :
						'Ladies & Gentlemen, may I introduce my pet pig, Hamlet'
				},
				'/about'        : 'This is the about page!'
			};
			const data = pages[url];
			if (data) {
				resolve({ status: 200, data }); //resolve with a value!
			}
			else {
				reject({ status: 404 }); //reject with a value!
			}
		}, 1000);
	});
};

fakeRequest('/users')
	.then((res) => {
		console.log(res);
		const id = res.data[0].id;
		return fakeRequest(`/users/${id}`);
	})
	.then((res) => {
		console.log(res);
		const postId = res.data.topPostId;
		return fakeRequest(`/posts/${postId}`);
	})
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.log('OH NO!', err);
	});

// ************************************************
// ATTEMPT 2 (deliberate error to illustrate CATCH)
// ************************************************
// fakeRequest('/users')
// 	.then((res) => {
// 		console.log(res);
// 		const id = res.data[0].id;
// 		return fakeRequest(`/useALSKDJrs/${id}`); //INVALID URL, CATCH WILL RUN!
// 	})
// 	.then((res) => {
// 		console.log(res);
// 		const postId = res.data.topPostId;
// 		return fakeRequest(`/posts/${postId}`);
// 	})
// 	.then((res) => {
// 		console.log(res);
// 	})
// 	.catch((err) => {
// 		console.log('OH NO!', err);
// 	});

*/

// My Practice

// ===================================
// 010 - Refactoring w_Promises
// ===================================

/*
// NOTES

const moveX = (element, amount, delay) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const bodyBoundary = document.body.clientWidth;
			const elRight = element.getBoundingClientRect().right;
			const currLeft = element.getBoundingClientRect().left;
			if (elRight + amount > bodyBoundary) {
				reject({ bodyBoundary, elRight, amount });
			}
			else {
				element.style.transform = `translateX(${currLeft + amount}px)`;
				resolve();
			}
		}, delay);
	});
};

const btn = document.querySelector('button');
moveX(btn, 100, 1000)
	.then(() => moveX(btn, 100, 1000))
	.then(() => moveX(btn, 100, 1000))
	.then(() => moveX(btn, 100, 1000))
	.then(() => moveX(btn, 100, 1000))
	.then(() => moveX(btn, 100, 1000))
	.then(() => moveX(btn, 100, 1000))
	.then(() => moveX(btn, 100, 1000))
	.then(() => moveX(btn, 100, 1000))
	.then(() => moveX(btn, 100, 1000))
	.then(() => moveX(btn, 100, 1000))
	.then(() => moveX(btn, 100, 1000))
	.then(() => moveX(btn, 100, 1000))
	.then(() => moveX(btn, 100, 1000))
	.then(() => moveX(btn, 100, 1000))
	.then(() => moveX(btn, 100, 1000))
	.catch(({ bodyBoundary, amount, elRight }) => {
		console.log(`Cannot Move! Body is ${bodyBoundary}px wide`);
		console.log(`Element is at ${elRight}px, ${amount}px is too large!`);
	});

//This function moves an element "amount" number of pixels after a delay.
//If the element will stay on screen, we move the element and call the onSuccess callback function
//If the element will move off screen, we do not move the element and instead call the onFailure callback
// const moveX = (element, amount, delay, onSuccess, onFailure) => {
// 	setTimeout(() => {
// 		const bodyBoundary = document.body.clientWidth;
// 		const elRight = element.getBoundingClientRect().right;
// 		const currLeft = element.getBoundingClientRect().left;
// 		if (elRight + amount > bodyBoundary) {
// 			onFailure();
// 		}
// 		else {
// 			element.style.transform = `translateX(${currLeft + amount}px)`;
// 			onSuccess();
// 		}
// 	}, delay);
// };

// LOOK AT THIS UGLY MESS!
// moveX(
// 	btn,
// 	300,
// 	1000,
// 	() => {
// 		//success callback
// 		moveX(
// 			btn,
// 			300,
// 			1000,
// 			() => {
// 				//success callback
// 				moveX(
// 					btn,
// 					300,
// 					1000,
// 					() => {
// 						//success callback
// 						moveX(
// 							btn,
// 							300,
// 							1000,
// 							() => {
// 								//success callback
// 								moveX(
// 									btn,
// 									300,
// 									1000,
// 									() => {
// 										//success callback
// 										alert('YOU HAVE A WIDE SCREEN!');
// 									},
// 									() => {
// 										//failure callback
// 										alert('CANNOT MOVE FURTHER!');
// 									}
// 								);
// 							},
// 							() => {
// 								//failure callback
// 								alert('CANNOT MOVE FURTHER!');
// 							}
// 						);
// 					},
// 					() => {
// 						//failure callback
// 						alert('CANNOT MOVE FURTHER!');
// 					}
// 				);
// 			},
// 			() => {
// 				//failure callback
// 				alert('CANNOT MOVE FURTHER!');
// 			}
// 		);
// 	},
// 	() => {
// 		//failure callback
// 		alert('CANNOT MOVE FURTHER!');
// 	}
// );


*/

// My Practice

////////////////////////////////
// 17 - Making HTTP Requests
////////////////////////////////

// continue on app2.js

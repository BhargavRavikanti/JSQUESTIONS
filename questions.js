// =========================================
// =========================================
//               COLT STEELE
// =========================================
// =========================================

////////////////////////////////
// 01 - Introduction
////////////////////////////////

// ======================================
// 001 - How This Course Works
// ======================================
// ======================================
// 002 - JS, ECMA, TC39_ What Do They Mean..
// ======================================
// ======================================
// 003 - The Tools You Need
// ======================================
// ======================================
// 005 - A Quick Note About MDN
// ======================================

////////////////////////////////
// 02 - JS Values & Variables
////////////////////////////////

// ======================================
// 001 - Goals & Primitives
// ======================================
// ======================================
// 002 - Running Code in the JS Console
// ======================================
// ======================================
// 003 - Introducing Numbers
// ======================================
// ======================================
// 004 - NaN & Infinity
// ======================================

// 1) write some programs which are NOT A NUMBER (NaN).
// 2) write some programs which are infinity.

// ======================================
// 005 - Numbers Quiz
// ======================================

// 1) write some examples for numbers.

// ======================================
// 006 - Variables & Let
// ======================================

// 1) write a variable using let and update values.
// 2) uses of let ?

// ======================================
// 007 - Unary Operators
// ======================================

// 1) write a program using binary operators and uninary operators.

// ======================================
// 008 - Introducing Const
// ======================================

// 1) Declare a variable using const.
// 2) Why we use CONST?

// ======================================
// 009 - The Legacy of Var
// ======================================
// ======================================
// ======================================
// 010 - Variables Quiz
// ======================================

// 1) create a variable using let and decrease value using uninary operator.
// 2) create a variable using let and add 2.
// 3) create a variable using const and display in console.

////////////////////////////////
// 03 - How to Model Data Efficiency
////////////////////////////////

// ======================================
// 001 - Booleans Intro
// ======================================

// 1) create a variable and set value true and console.
// 2) create a variable and set value false and console.
// 3) create a variable and set value false and update it true and console.
// 4) create a variable and set a number and change it to boolean.

// ======================================
// 002 - Strings
// ======================================

// 1) create a string and console.
// 2) create two strings and merge it and console.
// 3) create number as a string and add,sub,div,multiply,modulus observe weird behaviour.

// ======================================
// 003 - String Indices
// ======================================

// 1) create a string
// check how many characters that string has.
// access the 3rd character
// access the 6th character
// acess the last character
// set 3rd character as X
// set 6th character as Y
// set last character as Z and console it.

// ======================================
// 004 - String Methods
// ======================================
// 1) create a string having both sides some white spaces and check length and remove white spaces of that string.
// 2) create a string make all capital letters.
// make i as capital letter
// 3) create a string make all small letters.
// make I as small letter

// ======================================
// 005 - More String Methods
// ======================================

// 1) create a variable fullName store Ravikanti Bhargav as a string.
// search B  in that string see what returns to console?
// if B not present in that string what returns to console?

// 2) create a variable fullName store Ravikanti Bhargav as a string.
// extract part of a string using single paramter return to console.
// extract part of a string using two paramters return to console.
// extract part of a string using negative paramter(-1) return to console.
// extract part of a string using any negative paramter return to console.
// extract part of a string using two negative paramters return to console.

// 3) create a variable someThing store one one two two three as a string.
// replace one with "1"
// replce all two with 1
// replce all one with 2
// replace ten with 9 see what output comes?

// ======================================
// 006 - Strings Quiz
// ======================================

// 1) const age = "5" + "4";
// 2) const age1 = "5" - "4";
// 3) const age2 = "5" * "4";
// 4) const age3 = "5" / "4";
// 5) const age4 = "5" / "4";
// 6) // let userInput = "  TODD@gmail.com"; remove white spaces and return to console.
// 7) // let park = "Yellowstone"; check stone index starts from

// ======================================
// 007 - String Escape Characters
// ======================================

// 1) let escape = "HELLO\nGOODBYE"; see output
// 2) let escape1 = "HELLO\nGOODBYE\nbharu"; see output
// 3) let escape2 = "HELLO\nGOODBYE\nbharu\n time is money"; see output

// ======================================
// 008 - String Template Literals
// ======================================

// 1) let literals = `I counted ${3+4+5}`; see output
// 2) // let userName = "Ziggy31"; let combine = `welcome back, ${userName}`; console it.

// ======================================
// 009 - Null & Undefined
// ======================================

// 1) let loggedInUser = null; see output.
// 2) const u = undefined; see output.
// 3) let color; see output.

// ======================================
// 010 - The Math Object & Random Numbers
// ======================================

// 1) How to know how many math methods are in javascript?
// 2) How to find out pi value is js?
// 3) How to remove ,comes after from 3,657 and 7,8901234.
// 4) How to remove decimals from 5.657.
// 5) How to get nearest interger from 4.6,4.3,7.3,7.7.
// 6) Let's generate a random number between 0 and 1
// 7) Let's generate a random number between 0 and 10 (including 0 and 10 also).
// 8) Let's generate a random number between 1 and 10 (not including 10)
// 9) Let's generate a random number from 1 to 10 (including 10)
// 10) Find square and cube of 7 using math methods.

// ======================================
// 011 - TYPE OF
// ======================================
// 1) let random = 99; checks its type
// 2) let random1 = true; checks its type
// 3) let random2 = "mystery"; checks its type
// 4) console.log(typeof mystery); see output
// 5) let random4 = "99 ballons"; checks its type
// 6) let random5 = undefined; checks its type
// 7) let random6 = null; checks its type

// ======================================
// 012 - parseInt & parseFloat
// ======================================
// 1) How to get string "24" as a number & "24.987" with removing decimals.
// 2) How to get string "28dayslater" only 28 as a number.
// 3) How to get string "98.769" as a number & "24.987" & 7.0 without removing decimals.
// 4) // console.log(parseFloat("i ate 3 shramp")); try it.
// 5) see output of
// console.log(parseFloat("33.5"));
// console.log(parseInt("$99")); // NaN
// console.log(parseInt("99$"));
// console.log(parseInt("99cents"));
// console.log(parseInt("9976654665457cents"));
// console.log(parseInt("   9976654665457cents"));
// console.log(parseInt("   .9976654665457cents")); // NaN
// console.log(parseInt(".9976654665457cents"));

////////////////////////////////
// 04 - Controlling Program Logic and Flow
////////////////////////////////

// ======================================
// 001 - Making Decisions in JS
// ======================================
// ======================================
// 002 - Comparision Operators
// ======================================

// 1) check true or false
// 10 greater than 1
// 0.2 greater than 0.3
// -10 less than 0
// 50.5 less than 5
// 0.5 less than or equal to 0.5
// 0.4 less than or equal to 0.5
// 99 greater than or equal to 4
// 99 greater than or equal to 99
// "a" less than "b"
// "a" greater than "b"
// "A" greater than "b"
// "A" less than "b" see output

// 2) check true or false
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

// ======================================
// 003 - Double Equals(==)
// ======================================

// 1) check what results it gives
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

// ======================================
// 004 - Triple Equals (===)
// ======================================

// 1) check what results it gives
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

// ======================================
// 005 - Running Code From a Script
// ======================================
// ======================================
// 006 - if Statements
// ======================================

// 1) let num = 3;
// (1) check num = 4,
// (2) check num = 5,
// (3) check num = 3,
// (4) check num < 3,
// (5) check num > 3,
// (6) check num >= 4,
// (7) check num <= 3,
// (8) check num % 2 = 0,
// (9) check num % 2 != 0 true or false

// ======================================
// 007 - Else if
// ======================================
// 1) Example
// 3 - superstar
// 2 - meets expectations
// 1 - needs improvement
// (1) set variable let rating = 2;
// check with rating === 3, rating === 2,rating === 1
// (2) set variable let rating = 3;
// check with rating === 3, rating === 2,rating === 1
// (3) set variable let rating = 1;
// check with rating === 3, rating === 2,rating === 1

// 2) Example
// 10 - I WILL BUY CHIPS
// LESS THAN 10 - I WILL BUY CHOCKLATE
// GREATHER THAN 10 - I WILL BUY STING
// (1) set variable money = 10;
// check with money === 10, money < 10, money > 10.
// (2) set variable money = 5;
// check with money === 10, money < 10, money > 10.
// (3) set variable money = 20;
// check with money === 10, money < 10, money > 10.

// ======================================
// 008 - else
// ======================================

// 1) Example
// 3 - superstar
// 2 - meets expectations
// 1 - needs improvement
// anything else - invalid rating
// (1) set variable let rating = 2;
// check with rating === 3,rating === 2,rating === 1
// (2) set variable let rating = 3;
// check with rating === 3,rating === 2,rating === 1
// (3) set variable let rating = 1;
// check with rating === 3,rating === 2,rating === 1
// (4) set variable let rating = 100;
// check with rating === 3,rating === 2,rating === 1

// 2) set highScore = 1430; set userScore = 1200;
// check with userScore greater than highscore you win less than highscore lose equal to highscore tie.
// set userscore should be dynamic.

// 3) write a dynamic program if your age is 18 or greater than 18 you can vote otherwise you can't vote.

// ======================================
// 009 - Nesting Conditionals
// ======================================

// 1) password length should be greater or equal to 6 characters
// cannot contain spaces

// ======================================
// 010 - Truthy & Falsy Values
// ======================================

// 1) check the values truthy or falsy
// let mystery = 5;
// let mystery = 999;
// let mystery = 0;
// let mystery = 0 / 0;
// let mystery = "bhargav";
// let mystery = " ";
// let mystery = "";
// let mystery = null;
// let mystery = undefined;
// let mystery = NaN;

// let loggedInUser = "thomas123";
// let loggedInUser = null;
// let loggedInUser = "";
// let loggedInUser = "thomas123";
// let loggedInUser = "thomas123";

// ======================================
// 011 - Logical AND (&&)
// ======================================

// check its outputs
// console.log(true && true);
// console.log(true && false);
// console.log(false && false);
// console.log(false && true);

// 1) set myName true set age true
// check myName && age is true of not
// case 1
// let myName = true;
// let age = true;
// case 2
// let myName = true;
// let age = false;
// case 3
// let myName = false;
// let age = true;
// case 4
// let myName = false;
// let age = false;

// 2) check true or false
// console.log(1 <= 4 && "a" === "a");
// console.log(9 > 10 && 9 >= 9);
// console.log("abc".length === 3 && 1 + 1 === 4);
// console.log(1 <= 2 && 5 === 5);
// console.log(1 <= 2 && 5 === "5");

// 3) write a pogram to enter password
// password should be 8 or greater than 8 characters
// password cannot contain spaces

// ======================================
// 012 - Logical OR ( || )
// ======================================
// check its outputs
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

// 1) set myName true set age true
// check myName && age is true of not
// case 1
// let myName = true;
// let age = true;
// case 2
// let myName = true;
// let age = false;
// case 3
// let myName = false;
// let age = true;
// case 4
// let myName = false;
// let age = false;

// 2) check true of false
// console.log(1 !== 1 || 10 === 10);
// console.log(10 / 2 === 5 || null);
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean(0) || Boolean(undefined));

// 3) write a program to check a person age should be 18 or greater than 18 then he can vote otherwise can't.

// 4)
// let age = 78;
// let age = 3;
// let age = 30;
// let age = 65;

// if (age < 6 || age >= 65) {
//   console.log("YOU GET IN FOR FREE");
// } else {
//   console.log("YOU MUST PAYYYYY!");
// }

// 5)
// let color = "violet";
// if (color === "pruple" || color === "lilac" || color === "violet") {
//   console.log("GREAT CHOICE!");
// }

// 6) set color = "violet";
// check with color = "purple" or color = "lilac" or color = "violet"

// ======================================
// 013 - NOT operator (!)
// ======================================
// 1) check true or false
// console.log(true);
// console.log(!true);
// console.log(false);
// console.log(!false);
// console.log(!null);
// console.log(!0);
// console.log(!"");
// console.log(Boolean(45));
// console.log(!45);
// console.log(!"bharu");

// 2) check what output comes
// let loggedInUser;
// console.log(loggedInUser);
// console.log(Boolean(loggedInUser));
// console.log(Boolean(!loggedInUser));

// 3) see outputs
// let loggedInUser;
// console.log(loggedInUser);
// console.log(!loggedInUser);
// if (!loggedInUser) {
//   console.log("get out of here");
// }

// 4) see outputs
// let flavor = "grape";
// let flavor = "cherry";
// let flavor = "watermelon";
// console.log(Boolean(flavor));
// console.log(!flavor);
// console.log(Boolean(flavor !== "cherry"));
// console.log(Boolean(!(flavor === "cherry")));

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

// 5) see withouts
// console.log(true);
// console.log(!true);

// 6) see outputs
// // let money = 10;
// let money = 1;

// if (money !== 10) {
//   console.log("he has 10rs");
// }

// ======================================
// 014 - Operator Precedence
// ======================================
// 1) check true or false
// let x = 7;
// console.log(x === 7 || (x === 3 && x > 10));
// console.log((x === 7 || x === 3) && x > 10);

// ======================================
// 015 - The Switch Statement
// ======================================
// ======================================
// 016 - Ternary Operator
// ======================================

// 1)
// let status = "online";
// let color;
// if (status === "offline") {
//   console.log((color = "green"));
// } else {
//   console.log((color = "red"));
// }

// 2)
// let status = "online";
// let color;
// if (status === "online") {
//   console.log((color = "green"));
// } else {
//   console.log((color = "red"));
// }

// 3)
// let status = "online";
// let color = status === "offline" ? console.log("green") : console.log("red");
// 4)
// let status = "offline";
// let color = status === "offline" ? console.log("green") : console.log("red");

////////////////////////////////
// 05 - Capture Collections of Data with Arrays
////////////////////////////////

// ======================================
// 001 - Creating Arrays
// ======================================
// 1) How tocreate an empty array?
// 2) create an array of strings.
// 3) create an array of numbers.
// 4) create an array of mixed data types.
// 5) create an array using Array literal syntax
// 6) create an array shoppingList and put some items and console it.
// 7) create an array shoppingList using array literal syntax and put some items and console it.

// ======================================
// 002 - Array Indices
// ======================================
// ======================================
// 003 - Modifying Arrays
// ======================================
// ======================================
// 004 - Push and Pop
// ======================================
// ======================================
// 005 - Shift and Unshift
// ======================================
// ======================================
// 006 - Concat
// ======================================
// ======================================
// 007 - Includes and IndexOf
// ======================================
// ======================================
// 008 - Reverse and Join
// ======================================
// ======================================
// 009 - Slice
// ======================================
// ======================================
// 010 - Splice
// ======================================
// ======================================
// 011 - Sorting(part 1)
// ======================================

// ======================================
// 012 - Intro to Reference Types
// ======================================

// ======================================
// 013 - Using Const with Arrays
// ======================================

// ======================================
// 014 - Working with Nested Arrays
// ======================================

////////////////////////////////
// 06 - Objects - The Core of Javascript
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
// 010 -
// ======================================

////////////////////////////////
// 07 -
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
// 010 -
// ======================================

////////////////////////////////
// 08 -
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
// 010 -
// ======================================

////////////////////////////////
// 09 -
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
// 010 -
// ======================================

////////////////////////////////
// 010 -
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
// 010 -
// ======================================

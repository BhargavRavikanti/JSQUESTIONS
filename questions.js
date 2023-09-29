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
// 05 -
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
// 06 -
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

// ======================================
// 004 NaN & Infinity
// ======================================

// 1) write some programs which are NOT A NUMBER (NaN).
// 2) write some programs which are infinity.

// 1) write some programs which are NOT A NUMBER (NaN).
// console.log(1 + NaN);
// console.log("bharu" + NaN);
// console.log(NaN + "bharu");
// console.log(0 + NaN);
// console.log(0 / 0);
// console.log(-0 / 0);
// console.log("bharu" / 0);

// 2) write some programs which are infinity.
// console.log(1 / 0);
// console.log(-1 / 0);

// ======================================
// 005 - Numbers Quiz
// ======================================

// 1) write some examples for numbers.
// console.log(1.5 + 1.5 * 2);
// console.log((10 % 6) ** 2);
// console.log(200 + 0 / 0);

// ======================================
// 006 - Variables & Let
// ======================================

// 1) write a variable using let and update values.
// 2) uses of let ?

// 1) write a variable using let and update values.

// let myName = "bharu";
// console.log(myName);
// // updating a variable
// myName = "Bhargav Ravikanti";
// console.log(myName);

// 2) uses of let ?
// let is useful for updating values.

// ======================================
// 007 - Unary Operators
// ======================================

// 1) what are unary operators and what does uninary means? write an example.

// // binary way
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

// // uninary way
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

// ======================================
// 008 - Introducing Const
// ======================================

// 1) Declare a variable using const.
// 2) Why we use CONST?

// 1) Declare a variable using const.
// const myName = "Bhargav Ravikanti";
// console.log(myName);
// // myName = "Bhargav Ravikanti"; // cannot assign once it is fixed

// 2) Why we use CONST?
// // // we use CONST to make sure the value does not change

// ======================================
// 010 - Variables Quiz
// ======================================

// 1) create a variable using let and decrease value using uninary operator and also using binary operators.
// 2) create a variable using let and add 2.
// 3) create a variable using const and display in console.

// 1) create a variable using let and decrease value using uninary operator and also using binary operators.

// let bharuHas = 10;
// console.log(bharuHas);
// bharuHas--;
// console.log(bharuHas);

// binary operators
// let bharuHas = 10;
// console.log(bharuHas);
// bharuHas = bharuHas - 1;
// console.log(bharuHas);

// another way uisng binary operators
// let bharuHas = 10;
// console.log(bharuHas);
// bharuHas -= 1;
// console.log(bharuHas);

// 2) create a variable using let and add 2.
// let bharuHas = 10;
// console.log(bharuHas);
// bharuHas = bharuHas + 2;
// console.log(bharuHas);

// 3) create a variable using const and display in console.
// const myName = "Bhargav Ravikanti";
// console.log(myName);

// ======================================
// 001 - Booleans Intro
// ======================================
/*
// 1) create a variable and set value true and console.
// 2) create a variable and set value false and console.
// 3) create a variable and set value false and update it true and console.
// 4) create a variable and set a number and change it to boolean.
*/

// 1) create a variable and set value true and console.
// const bharuIsGood = true;
// console.log(bharuIsGood);

// 2) create a variable and set value false and console.
// const bharuIsBad = false;
// console.log(bharuIsBad);

// 3) create a variable and set value false and update it true and console.
// let dhanushIsGood = false;
// console.log(dhanushIsGood);
// dhanushIsGood = true;
// console.log(dhanushIsGood);

// 4) create a variable and set a number and change it to boolean.
// let bharuHas = 10;
// console.log(bharuHas);
// bharuHas = "10 rupees";
// console.log(bharuHas);
// bharuHas = true;
// console.log(bharuHas);

// ======================================
// 002 - Strings
// ======================================
/*
// 1) create a string and check whether it is a string or not and console.
// 2) create two strings and merge it and console.
// 3) create number as a string and add,sub,div,multiply,modulus observe weird behaviour.
*/

// 1) create a string and check whether it is a string or not and console.
// const brotherName = "dhanush";
// console.log(brotherName, "is a", typeof brotherName);

// 2) create two strings and merge it and console.
// const firstName = "Bhargav";
// const lastName = "Ravikanti";
// console.log(firstName + lastName);
// console.log(firstName + " " + lastName);

// 3) create number as a string and add,sub,div,multiply,modulus observe weird behaviour mainly add.
// let random = "20";
// console.log(random);
// random = "20" + 1;
// console.log(random);
// random = "20" - 1;
// console.log(random);
// random = "20" / 2;
// console.log(random);
// random = "20" % 2;
// console.log(random);
// random = "20" % 3;
// console.log(random);
// random = "20" % 7;
// console.log(random);

// ======================================
// 003 - String Indices
// ======================================
/*
// 1) create a string
// check how many characters that string has.
// access the 3rd character
// access the 6th character
// acess the last character
// set 3rd character as X
// set 6th character as Y
// set last character as Z and console it.
*/

// // 1) create a string
// let fullName = "Ravikanti Bhargav";

// // check how many characters that string has.
// console.log(fullName.length);

// // access the 3rd character
// console.log(fullName[2]);

// // access the 6th character
// console.log(fullName[5]);

// // access the last character
// console.log(fullName[fullName.length - 1]);

// // set 3rd character as X
// console.log((fullName[2] = "X"));

// // set 6th character as Y
// console.log((fullName[5] = "Y"));

// // set last character as Z and console it.
// console.log(fullName.length - 1);
// console.log(fullName[fullName.length - 1]);
// console.log((fullName[fullName.length - 1] = "Z"));

// ======================================
// 004 - String Methods
// ======================================
/*
// 1) create a string having both sides some white spaces and check length and remove white spaces of that string.
// 2) create a string make all capital letters.
// make i as capital letter
// 3) create a string make all small letters.
// make I as small letter
*/

// 1) create a string having both sides some white spaces and check length and remove white spaces from both sides of that string and check length.
// let fullName = "  Ravikanti Bhargav    ";
// console.log(fullName.length);
// let fullName1 = fullName.trim();
// console.log(fullName1);
// console.log(fullName1.length);

// 2) create a string make all letters capital.
// let fullName = "Ravikanti Bhargav";
// let fullName1 = fullName.toUpperCase();
// console.log(fullName1);

// // make i as capital letter
// console.log("Ravikanti".length);
// console.log("Ravikanti"["Ravikanti".length - 1]);
// let fullName2 = (fullName[8] = "I");
// console.log(fullName2);
// let fullName3 = fullName[8].toUpperCase();
// console.log(fullName3);

// 3) create a string make all small letters.
// let fullName = "rAVIKANTI bHARGAV";
// let fullName1 = fullName.toLowerCase();
// console.log(fullName1);

// // make i as small letter
// console.log("rAVIKANTI".length);
// console.log("rAVIKANTI"["rAVIKANTI".length - 1]);
// let fullName2 = (fullName[8] = "i"); // method 1 not recommended
// console.log(fullName2);
// let fullName3 = fullName[8].toLowerCase(); // method 2 always use this method
// console.log(fullName3);

// ======================================
// 005 - More String Methods
// ======================================
/*
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
*/

// 1) create a variable fullName store Ravikanti Bhargav.
// let fullName = "Ravikanti Bhargav";

// search B  in that string see what returns to console?
// let checkCharcter = fullName.indexOf("B");
// console.log(checkCharcter);
// console.log(fullName[10]);

// search b in that string see what returns to console?
// console.log(fullName.indexOf("b"));

// // 2) create a variable full store Ravikanti Bhargav as a string.
// let fullName = "Ravikanti Bhargav";

// // extract part of a string using single paramter return to console.
// let extractPart = fullName.slice(2);
// console.log(extractPart);

// // extract part of a string using two paramters return to console.
// let extractPart1 = fullName.slice(2, 5);
// console.log(extractPart1);

// // extract part of a string using negative paramter(-1) return to console.
// let extractPart2 = fullName.slice(-1);
// console.log(extractPart2);

// // extract part of a string using any negative paramter return to console.
// let extractPart3 = fullName.slice(-3);
// console.log(extractPart3);

// // extract part of a string using two negative paramters return to console.
// let extractPart4 = fullName.slice(-3, -1);
// console.log(extractPart4);

// 3) create a variable someThing store one one two two three in that string.
// let someThing = "one one two two three";
// console.log(someThing);

// // replace one with "1"
// let replace = someThing.replace("one", "1");
// console.log(replace);
// let replace1 = someThing.replace("two", "1");
// console.log(replace1);

// // replce all two with 1
// let replace2 = someThing.replace(/two/gi, "1");
// console.log(replace2);

// // replce all one with 2
// let replace3 = someThing.replace(/one/gi, "2");
// console.log(replace3);

// // replce ten with 2
// let replace10 = someThing.replace(/ten/gi, "9");
// console.log(replace10);

// ======================================
// 006 - Strings Quiz
// ======================================
/*
// 1) const age = "5" + "4";
// 2) const age1 = "5" - "4";
// 3) const age2 = "5" * "4";
// 4) const age3 = "5" / "4";
// 5) const age4 = "5" / "4";
// 6) // let userInput = "  TODD@gmail.com"; remove white spaces and return to console.
// 7) // let park = "Yellowstone"; check stone index starts from
*/

// 1) const age = "5" + "4";
// const age = "5" + "4";
// console.log(age);

// 2) const age1 = "5" - "4";
// const age1 = "5" - "4";
// console.log(age1);

// 3) const age2 = "5" * "4";
// const age2 = "5" * "4";
// console.log(age2);

// 4) const age3 = "5" / "4";
// const age3 = "5" / "4";
// console.log(age3);

// 5) const age4 = "5" / "4";
// const age4 = "5" % "4";
// console.log(age4);

// 6) // let userInput = "  TODD@gmail.com"; remove white spaces and return to console.
// let userInput = "  TODD@gmail.com";
// console.log(userInput);
// let removeWhiteSpaces = userInput.trim();
// console.log(removeWhiteSpaces);

// 7) // let park = "Yellowstone"; check stone index starts from
// let park = "Yellowstone";
// let check = park.indexOf("stone");
// console.log(check);

// ======================================
// 007 - String Escape Characters
// ======================================

/*
// 1) let escape = "HELLO\nGOODBYE"; see output
// 2) let escape1 = "HELLO\nGOODBYE\nbharu"; see output
// 3) let escape2 = "HELLO\nGOODBYE\nbharu\n time is money"; see output
*/

// // 1) let escape = "HELLO\nGOODBYE"; see output
// let escape = "HELLO\nGOODBYE";
// console.log(escape);

// // 2) let escape1 = "HELLO\nGOODBYE\nbharu"; see output
// let escape1 = "HELLO\nGOODBYE\nbharu";
// console.log(escape1);

// // 3) let escape2 = "HELLO\nGOODBYE\nbharu\n time is money"; see output
// let escape2 = "HELLO\nGOODBYE\nbharu\n     time is money";
// console.log(escape2);

// ======================================
// 008 - String Template Literals
// ======================================
/*
// 1) let literals = `I counted ${3+4+5}`; see output
// 2) // let userName = "Ziggy31"; let combine = `welcome back, ${userName}`; console it.
*/

// 1) let literals = "I counted ${3+4+5}"; see output
// let literals = `I counted ${3 + 4 + 5}`;
// console.log(literals);

// 2) // let userName = "Ziggy31"; let combine = `welcome back, ${userName}`; console it.
// let userName = "Ziggy31";
// let combine = `welcome back, ${userName}`;
// console.log(combine);

// ======================================
// 009 - Null & Undefined
// ======================================
/*
// 1) let loggedInUser = null; see output.
// 2) const u = undefined; see output.
// 3) let color; see output.
*/

// // 1) let loggedInUser = null; see output
// let loggedInUser = null;
// console.log(loggedInUser);

// // 2) const u = undefined; see output
// const u = undefined;
// console.log(u);

// // 3) let color;
// let color;
// console.log(color);

// ======================================
// 010 - The Math Object & Random Numbers
// ======================================
/*
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
*/

// // 1) How to know how many math methods are in js?
// console.log(Math);

// // 2) How to find out pi value is js?
// console.log(Math.PI);

// // 3) How to remove ,comes after from 3,657.
// console.log(Math.floor(3, 657));
// console.log(Math.floor(7, 8901234));

// // 4) How to remove decimals from 5.657
// console.log(Math.floor(3.567));

// // 5) How to get nearest interger from 4.6, 4.3 ,7.3 ,7.7.
// console.log(Math.round(4.6));
// console.log(Math.round(4.3));
// console.log(Math.round(7.3));
// console.log(Math.round(7.7));

// 6) Let's generate random numbers between 0 and 1
// console.log(Math.random());

// // 7) Let's generate a random number between 0 and 10 (including 0 and 10 also).
// let random = Math.floor(Math.random() * 11);
// console.log(random);

// // 8) Let's generate random numbers between 1 and 10
// let random1 = Math.floor(Math.random() * 9) + 1;
// console.log(random1);

// // 9) Let's generate a random number from 1 and 10 (including 10)
// let rand = Math.floor(Math.random() * 10) + 1;
// console.log(rand);

// // 10) Find square and cube of 7 using math methods.
// console.log(Math.pow(7, 2));
// console.log(Math.pow(7, 3));

// ======================================
// 011 - TYPE OF
// ======================================
/*
// 1) let random = 99; checks its type
// 2) let random1 = true; checks its type
// 3) let random2 = "mystery"; checks its type
// 4) console.log(typeof mystery); see output
// 5) let random4 = "99 ballons"; checks its type
// 6) let random5 = undefined; checks its type
// 7) let random6 = null; checks its type
*/

// // 1) let random = 99; checks its type
// let random = 99;
// console.log(typeof random);

// // 2) let random1 = true; checks its type
// let random1 = true;
// console.log(typeof random1);

// // 3) let random2 = "mystery"; checks its type
// let random2 = "mystery";
// console.log(typeof random2);

// // 4) console.log(typeof mystery); see output
// console.log(typeof mystery);

// // 5) let random4 = "99 ballons"; checks its type
// let random4 = "99 ballons";
// console.log(typeof random4);

// // 6) let random5 = undefined; checks its type
// let random5 = undefined;
// console.log(typeof random5);

// // 7) let random6 = null; checks its type
// let random6 = null;
// console.log(typeof random6);

// ======================================
// 012 - parseInt & parseFloat
// ======================================
/*
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
*/

// // 1) How to get string "24" as a number.
// console.log(parseInt("24"), typeof parseInt("24"));
// console.log(parseInt("24.987"), typeof parseInt("24.987"));

// // 2) How to get string "28dayslater" only 28 as a number.
// console.log(parseInt("28dayslater"));
// console.log(parseInt("05dayslater"));

// // 3) How to get string "98.769" as a number & "24.987" with removing decimals.
// console.log(parseFloat(98.769));
// console.log(parseFloat(24.987));
// console.log(parseFloat(7.0));

// // 4) // console.log(parseFloat("i ate 3 shramp")); try it.
// console.log(parseFloat("i ate 3 shramp"));

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
/*
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
*/

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

// // 1) let num = 3;
// let num = 3;
// // (1) check num = 4,
// if (num === 4) {
//   console.log("run code");
// }
// // (2) check num = 5,
// if (num === 5) {
//   console.log("run code");
// }
// // (3) check num = 3,
// if (num === 3) {
//   console.log("run code");
// }
// // (4) check num < 3,
// if (num < 3) {
//   console.log("run code");
// }
// // (5) check num > 3,
// if (num > 3) {
//   console.log("run code");
// }
// // (6) check num >= 4,
// if (num >= 4) {
//   console.log("run code");
// }
// // (7) check num <= 3,
// if (num <= 3) {
//   console.log("run code");
// }
// // (8) check num % 2 = 0,
// if (num % 3 === 0) {
//   console.log("run code");
// }
// // (9) check num % 2 != 0 true or false
// if (num % 3 !== 0) {
//   console.log("run code");
// }

// ======================================
// 007 - Else if
// ======================================
/*
// 1) Example
// 3 - superstar
// 2 - meets expectations
// 1 - needs improvement
// set variable let rating = 2;
// check with rating === 3,rating === 2,rating === 1
// set variable let rating = 3;
// check with rating === 3,rating === 2,rating === 1
// set variable let rating = 1;
// check with rating === 3,rating === 2,rating === 1

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
*/

// 1) Example
// 3 - superstar
// 2 - meets expectations
// 1 - needs improvement
// (1) set variable let rating = 2;
// check with rating === 3,rating === 2,rating === 1
//  let rating = 2;
// if (rating === 3) {
//   console.log("superstar");
// } else if (rating === 2) {
//   console.log("meets expectations");
// } else if (rating === 1) {
//   console.log("needs improvement");
// }

// (2) set variable let rating = 3;
// check with rating === 3,rating === 2,rating === 1
// let rating = 3;
// if (rating === 3) {
//   console.log("superstar");
// } else if (rating === 2) {
//   console.log("meets expectations");
// } else if (rating === 1) {
//   console.log("needs improvement");
// }

// (3) set variable let rating = 1;
// check with rating === 3,rating === 2,rating === 1
// let rating = 1;
// if (rating === 3) {
//   console.log("superstar");
// } else if (rating === 2) {
//   console.log("meets expectations");
// } else if (rating === 1) {
//   console.log("needs improvement");
// }

// 2) Example
// 10 - I WILL BUY CHIPS
// LESS THAN 10 - I WILL BUY CHOCKLATE
// GREATHER THAN 10 - I WILL BUY STING
// (1) set variable money = 10;
// check with money === 10, money < 10, money > 10.
// let money = 10;
// if (money === 10) {
//   console.log("I WILL BUY CHIPS");
// } else if (money < 10) {
//   console.log("I WILL BUY CHOCKLATE");
// } else if (money > 10) {
//   console.log("I WILL BUY STING");
// }
// (2) set variable money = 5;
// check with money === 10, money < 10, money > 10.
// let money = 5;
// if (money === 10) {
//   console.log("I WILL BUY CHIPS");
// } else if (money < 10) {
//   console.log("I WILL BUY CHOCKLATE");
// } else if (money > 10) {
//   console.log("I WILL BUY STING");
// }
// (3) set variable money = 20;
// check with money === 10, money < 10, money > 10.
// let money = 20;
// if (money === 10) {
//   console.log("I WILL BUY CHIPS");
// } else if (money < 10) {
//   console.log("I WILL BUY CHOCKLATE");
// } else if (money > 10) {
//   console.log("I WILL BUY STING");
// }

// ======================================
// 008 - else
// ======================================
/*
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
*/

// 1) Example
// 3 - superstar
// 2 - meets expectations
// 1 - needs improvement
// anything else - invalid rating
// (1) set variable let rating = 2;
// check with rating === 3,rating === 2,rating === 1
// let rating = 2;
// if (rating === 3) {
//   console.log("superstar");
// } else if (rating === 2) {
//   console.log("meets expecations");
// } else if (rating === 1) {
//   console.log("needs improvement");
// } else {
//   console.log("invalid rating");
// }

// (2) set variable let rating = 3;
// check with rating === 3,rating === 2,rating === 1
// let rating = 3;
// if (rating === 3) {
//   console.log("superstar");
// } else if (rating === 2) {
//   console.log("meets expecations");
// } else if (rating === 1) {
//   console.log("needs improvement");
// } else {
//   console.log("invalid rating");
// }

// (3) set variable let rating = 1;
// check with rating === 3,rating === 2,rating === 1
// let rating = 1;
// if (rating === 3) {
//   console.log("superstar");
// } else if (rating === 2) {
//   console.log("meets expecations");
// } else if (rating === 1) {
//   console.log("needs improvement");
// } else {
//   console.log("invalid rating");
// }

// (4) set variable let rating = 200;
// check with rating === 3,rating === 2,rating === 1
// let rating = 200;
// if (rating === 3) {
//   console.log("superstar");
// } else if (rating === 2) {
//   console.log("meets expecations");
// } else if (rating === 1) {
//   console.log("needs improvement");
// } else {
//   console.log("invalid rating");
// }

// 2) set highScore = 1430; set userScore = 1200;
// check with userScore greater than or  equal to highScore
// case 1
// let highScore = 1430;
// let userScore = 1200;
// if (userScore >= highScore) {
//   console.log("you win");
// } else {
//   console.log("you lose");
// }
// case 2
// let highScore = 1430;
// let userScore = 1600;
// if (userScore >= highScore) {
//   console.log("you win");
// } else {
//   console.log("you lose");
// }
// case 3 dynamic value
// let highScore = 1430;
// let userScore = prompt();
// if (userScore > highScore) {
//   console.log(`userscore ${userScore} high score ${highScore} you win`);
// } else if (userScore < highScore) {
//   console.log(`userscore ${userScore} high score ${highScore} you lose`);
// } else {
//   console.log(`userscore ${userScore} high score ${highScore} tie`);
// }

// 3) write a dynamic program if your age is 18 or greater than 18 you can vote otherwise you can't vote.
// let voterAge = 18;
// let yourAge = prompt();
// if (yourAge >= voterAge) {
//   console.log("you can vote");
// } else {
//   console.log("you can't vote");
// }

// ======================================
// 009 - Nesting Conditionals
// ======================================
// 1) password length should be greater or equal to 6 characters
// cannot contain spaces
// if characters greater than 8 good password.
// let password = prompt();
// if (password.length >= 6) {
//   if (password.indexOf(" ") === -1) {
//     console.log("valid password");
//   } else {
//     console.log("password is long enough, but cannot contain spaces");
//   }
// } else {
//   console.log("password must be longer");
// }

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

// if (mystery) {
//   console.log("truthy");
// } else {
//   console.log("falsy");
// }

// ======================================
// 011 - Logical AND (&&)
// ======================================
/*
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
*/

// 1) set myName true set age true
// check myName && age is true of not
// case 1
// let myName = true;
// let age = true;
// if (myName && age) {
//   console.log("true");
// } else {
//   console.log("false");
// }
// case 2
// let myName = true;
// let age = false;
// if (myName && age) {
//   console.log("true");
// } else {
//   console.log("false");
// }
// case 3
// let myName = false;
// let age = true;
// if (myName && age) {
//   console.log("true");
// } else {
//   console.log("false");
// }
// case 4
// let myName = false;
// let age = false;
// if (myName && age) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// 2) check true or false
// console.log(1 <= 4 && "a" === "a");
// console.log(9 > 10 && 9 >= 9);
// console.log("abc".length === 3 && 1 + 1 === 4);
// console.log(1 <= 2 && 5 === 5);
// console.log(1 <= 2 && 5 === "5");

// 3) write a pogram to enter password
// password should be 8 or greater than 8 characters
// password cannot contain spaces
// let password = prompt();
// if (password.length >= 8 && password.indexOf(" ") === -1) {
//   console.log("valid password");
// } else {
//   console.log("invalid password");
// }

// ======================================
// 012 - Logical OR ( || )
// ======================================
// ======================================
// 013 - 013 NOT operator (!)
// ======================================
// ======================================
// 014 - Operator Precedence
// ======================================
// ======================================
// 015 - The Switch Statement
// ======================================
// ======================================
// 016 - Ternary Operator
// ======================================

////////////////////////////////
// 05 - Capture Collections of Data with Arrays
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

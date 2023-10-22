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
*/

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
// check its outputs
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

// 1) set myName true set age true
// check myName || age is true of not
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

// if (myName || age) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// 2) check true of false
// console.log(1 !== 1 || 10 === 10);
// console.log(10 / 2 === 5 || null);
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean(0) || Boolean(undefined));

// 3) write a program to a person age should be 18 or greater than 18 then he can vote otherwise can't.
// let age = prompt();
// if (age >= 18) {
//   console.log("can vote");
// } else {
//   console.log("can't vote");
// }

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
// let color = "violet";
// if (color === "purple" || color === "lilac" || color === "violet") {
//   console.log("true");
// } else {
//   console.log("false");
// }

// ======================================
// 013 - 013 NOT operator (!)
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

////////////////////////////////
// 05 - Capture Collections of Data with Arrays
////////////////////////////////

// ======================================
// 001 - Creating Arrays
// ======================================
/*
// 1) How tocreate an empty array?
// 2) create an array of strings.
// 3) create an array of numbers.
// 4) create an array of mixed data types.
// 5) create an array using Array literal syntax
// 6) create an array shoppingList and put some items and console it.
// 7) create an array shoppingList using array literal syntax and put some items and console it.
*/

// 1) How tocreate an empty array?
// let fruits = [];
// console.log(fruits);

// 2) create an array of strings.
// let stringsArray = ["orange", "banana", "carrot", "watermelon"];
// console.log(stringsArray);

// 3) create an array of numbers.
// let numsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(numsArray);

// 4) create an array of mixed data types.
// let mixedDataTypes = [true, "banana", 5, "pine apple", 55, "67","NaN",null];
// console.log(mixedDataTypes);

// 5) create an array using Array literal syntax
// let arrayLiteral = new Array();
// arrayLiteral = [true, 30, 59, "boat", "sun", NaN, null, "67", 89];
// console.log(arrayLiteral);

// 6) create an array shoppingList and put some items and console it.
// let shoppingList = ["bread", "peanut butter", "chips", "soaps"];
// console.log(shoppingList);

// 7) create an array shoppingList using array literal syntax and put some items and console it.
// let shoppingList = new Array();
// shoppingList = ["soap", "bread", "peanut butter", "chips", "milk"];
// console.log(shoppingList);

// ======================================
// 002 - Array Indices
// ======================================
/*
// // 1)
// let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
// // get blue violet indigo from colors and console.
// // get indigo using two methods
*/

// // 1)
// let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
// // get blue violet indigo from colors and console.
// let getColors = colors[4];
// console.log(getColors);
// getColors = colors[colors.length - 1];
// console.log(getColors);

// // get indigo using two methods
// getColors = colors[colors.length - 2];
// console.log(getColors);
// getColors = colors[5];
// console.log(getColors);

// ======================================
// 003 - Modifying Arrays
// ======================================
/*
// 1) // let colors = ["rad", "orange", "green", "yellow", "pink", "blue"];
// get length of the array
// change index 0 to red
// get last index number
// get last indexed element
// change index last to green
// get pink index number
// change or set pink to white
// add two elements brown and black at last
// check length of the array
// add another two elements grey and saffron to last
// check length of the array
// add element marron to last
*/

// let colors = ["rad", "orange", "green", "yellow", "pink", "blue"];
// console.log(colors);

// // get length of the array
// console.log(colors.length);

// // change index 0 to red
// colors[0] = "red";
// console.log(colors);
// // getting last index number

// console.log(colors.length - 1);

// // get last indexed element
// console.log(colors[colors.length - 1]);

// // change last indexed element to sky blue
// colors[colors.length - 1] = "sky blue";
// console.log(colors);

// // get pink index number
// console.log(colors.length - 2);
// console.log(colors[colors.length - 2]); // checking pink or not

// // change pink to white
// colors[colors.length - 2] = "white";
// console.log(colors);

// // add two elements brown and black at last
// // step 1 get last indexed number
// console.log(colors.length - 1);
// // last step set next number to brown so on..
// colors[6] = "brown";
// console.log(colors);
// colors[7] = "black";
// console.log(colors);

// // check length of the array
// console.log(colors.length);

// // add another two elements grey and saffron to last
// console.log(colors.length - 1);
// colors[8] = "grey";
// console.log(colors);
// colors[9] = "saffron";
// console.log(colors);
// console.log(colors.length);

// // add element marron to last
// console.log(colors.length);
// colors[10] = "marron";
// console.log(colors);

// ======================================
// 004 - Push and Pop
// ======================================
/*
// 1) create an array animals and add tiger,lion,cat
// add element dog at end of array
// add three element elephant,rabbit,crocodile at end of array
// remove last element
// remove another last three elements
// make it empty array
// add tiger using push method
// add cat and dog using set method at last

// 2) create an empty array
// add 2 elements tiger,lion
// add 3 dog,cat,elephant
// make it empty array
// add 3 elements monkey,giraffee,cheetah
*/

// 1) create an array animals and add tiger,lion,cat
// add element dog at end of array
// add three element elephant,rabbit,crocodile at end of array
// remove last element
// remove another last three elements
// make it empty array
// add tiger using push method
// add cat and dog using set method at last

// const animals = ["tiger", "lion", "cat"];
// console.log(animals);

// // add element dog at end of array
// animals.push("dog");
// console.log(animals);

// // add three element elephant,rabbit,crocodile at end of array
// animals.push("elephant", "rabbit", "crocodile");
// console.log(animals);

// // remove last element
// // step 1 check what is last element
// console.log(animals[animals.length - 1]);
// // step last
// animals.pop();
// console.log(animals);

// // remove another last three elements
// console.log(animals);
// animals.pop();
// animals.pop();
// animals.pop();
// console.log(animals);

// // make it empty array
// console.log(animals);
// animals.pop();
// animals.pop();
// animals.pop();
// console.log(animals);
// animals.pop();
// animals.pop();
// console.log(animals);

// // add tiger using push method
// animals.push("tiger");
// console.log(animals);

// // add cat and dog using set method at last
// animals[1] = "cat";
// console.log(animals);
// animals[2] = "dog";
// console.log(animals);

// // 2) create an empty array
// const emptyArray = [];

// // add 2 elements tiger,lion
// emptyArray[0] = "tiger";
// emptyArray[1] = "lion";
// console.log(emptyArray);

// // add 3 dog,cat,elephant
// emptyArray[2] = "dog";
// emptyArray[3] = "cat";
// emptyArray[4] = "elephant";
// console.log(emptyArray);

// // make it empty array
// emptyArray.pop();
// emptyArray.pop();
// emptyArray.pop();
// emptyArray.pop();
// emptyArray.pop();
// console.log(emptyArray);

// // add 3 elements monkey,giraffee,cheetah
// emptyArray.push("monkey", "giraffee", "cheetah");
// console.log(emptyArray);

// ======================================
// 005 - Shift and Unshift
// ======================================
/*
// 1) make an empty array animals
// add elements tiger,lion
// add elements at start crocodile
// add another 2 elements at start dog,cat
// add another 4 elements zebra,rino,dinosar,deer
// see the length of the array
// delete start item
// again delete start 2 items
*/

// // 1) make an empty array animals
// const emptyArray = [];
// console.log(emptyArray);

// // add elements tiger,lion
// emptyArray[0] = "tiger";
// emptyArray[1] = "lion";
// console.log(emptyArray);

// // add elements at start crocodile
// emptyArray.unshift("crocodile");
// console.log(emptyArray);

// // add another 2 elements at start dog,cat
// emptyArray.unshift("dog", "cat");
// console.log(emptyArray);

// // add another 4 elements zebra,rino,dinosar,deer
// emptyArray.unshift("zebra", "rino", "dinosar", "deer");
// console.log(emptyArray);

// // see the length of the array
// console.log(emptyArray.length);

// // delete start item
// console.log(emptyArray);
// console.log(emptyArray.length);
// emptyArray.shift();
// console.log(emptyArray);
// console.log(emptyArray.length);

// // again delete start 2 items
// emptyArray.shift();
// emptyArray.shift();
// console.log(emptyArray);
// console.log(emptyArray.length);

// ======================================
// 006 - Concat
// ======================================
/*
// // 1)
// let fruits = ["apple", "banana"];
// let veggies = ["asparagus", "brussel sprouts"];
// let meats = ["steak", "chicken breast"];

// merge two arrays fruits and veggies.
// is order matters when merging arrays?
// merge same array see result.
// merge same array another time see result
// merge same array another 3 times see result.
// create a variable allFood and merge fruits,veggies and meat into allFood.
// do real fruits,veggies,meats values changes?
*/

// 1)
// let fruits = ["apple", "banana"];
// let veggies = ["asparagus", "brussel sprouts"];
// let meats = ["steak", "chicken breast"];

// // merge two arrays fruits and veggies
// const fruitVeggies = fruits.concat(veggies);
// console.log(fruitVeggies);
// console.log(fruitVeggies.length);

// // merge two arrays veggies and fruits
// const veggieFruits = veggies.concat(fruits);
// console.log(veggieFruits);
// console.log(fruitVeggies.length);

// is order matters when merging arrays
// yes absolutely bcoz concat array comes last which means fruits elements comes last in the array
// ex: const veggieFruits = veggies.concat(fruits); (4) ['asparagus', 'brussel sprouts', 'apple', 'banana']

// // merge same array see result
// let sameArray = fruits.concat(fruits);
// console.log(sameArray);
// console.log(sameArray.length);

// // merge same array another time see result
// sameArray = fruits.concat(fruits).concat(fruits);
// console.log(sameArray);
// console.log(sameArray.length);

// // merge same array another three times see result
// sameArray = sameArray.concat(fruits).concat(fruits).concat(fruits);
// console.log(sameArray);
// console.log(sameArray.length);

// // create a variable allFood and merge fruits,veggies and meat into allFood.
// const allFood = fruits.concat(veggies).concat(meats);
// console.log(allFood);
// console.log(allFood.length);

// // create a variable allFood and merge fruits,veggies and meat into allFood.
// // do real fruits,veggies,meats values changes?
// // no it wiii not change
// console.log(fruits);
// console.log(veggies);
// console.log(meats);

// ======================================
// 007 - Includes and IndexOf
// ======================================
/*
// 1)
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
// (1) see fish is present in array or not
// (2) see flour is present in array or not
// (3) see eel is present in array or not
// (4) see water is present in array or not also see water is after index 0 or not
// (5) see shrimp is present in array or not also see  shrimp is after index 0 or not
// (6) see shrimp is present in array or not also see  shrimp is after index 4 or not
// (7) see shrimp is present in array or not also see  shrimp is after index 5 or not
// (8) see shrimp is present in array or not also see  shrimp is after index 6 or not
// (9) see shrimp is present in array or not also see  shrimp is after index 7 or not
// (10) see flour is present array or not if present you can start eating otherwise no flour
// (11) get index number of eel
// (12) get what element index 6 has
// (13) get index number of shrimp
// (14) get what element index 5 has
// (15) get index number of power
// (16) get index number of thunder
// (17) get index number of butter
// (18) get index number of brown sugar
// (19) get index number of brown
// (20) get index number of brown sugar and enter index number as 2
// (21) get index number of brown sugar and enter index number as 4
// (22) get index number of brown sugar and enter index number as 5
// (23) get index number of brown sugar and enter index number as 5
*/

// 1)
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
// (1) see fish is present in array or not
// console.log(ingredients.includes("fish"));

// (2) see flour is present in array or not
// console.log(ingredients.includes("flour"));

// (3) see eel is present in array or not
// console.log(ingredients.includes("eel"));

// (4) see water is present in array or not also see water is after index 0 or not
// console.log(ingredients.includes("water", 0));
// console.log(ingredients.includes("water", 1));
// console.log(ingredients.includes("water", 5));

// (5) see shrimp is present in array or not also see  shrimp is after index 0 or not
// console.log(ingredients.includes("shrimp", 0));

// (6) see shrimp is present in array or not also see  shrimp is after index 4 or not
// console.log(ingredients.includes("shrimp", 4));

// (7) see shrimp is present in array or not also see  shrimp is after index 5 or not
// console.log(ingredients[5]);
// console.log(ingredients.includes("shrimp", 5));

// (8) see shrimp is present in array or not also see  shrimp is after index 6 or not
// console.log(ingredients.includes("shrimp", 6));

// (9) see shrimp is present in array or not also see  shrimp is after index 7 or not
// console.log(ingredients.includes("shrimp", 7));

// (10) see flour is present array or not if present you can start eating otherwise no flour
// if (ingredients.includes("flour")) {
//   console.log("you can start eating");
// } else {
//   console.log("no flour");
// }

// // (11) get index number of eel
// console.log(ingredients.indexOf("eel"));

// // (12) get what element index 6 has
// console.log(ingredients[6]);

// // (13) get index number of shrimp
// console.log(ingredients.indexOf("shrimp"));

// // (14) get what element index 5 has
// console.log(ingredients[5]);

// // (15) get index number of power
// console.log(ingredients.indexOf("power"));

// // (16) get index number of thunder
// console.log(ingredients.indexOf("thunder"));

// // (17) get index number of butter
// console.log(ingredients.indexOf("butter", 8));

// // (18) get index number of brown sugar
// console.log(ingredients.indexOf("brown sugar"));

// // (19) get index number of brown
// console.log(ingredients.indexOf("brown"));

// // (20) get index number of brown sugar and enter index number as 2
// console.log(ingredients.indexOf("brown sugar", 2));

// // (21) get index number of brown sugar and enter index number as 4
// console.log(ingredients.indexOf("brown sugar", 4));

// // (22) get index number of brown sugar and enter index number as 5
// console.log(ingredients.indexOf("brown sugar", 5));

// // (23) get index number of brown sugar and enter index number as 5
// console.log(ingredients.indexOf("brown sugar", 6));

// ======================================
// 008 - Reverse and Join
// ======================================

// 1)
// let letters = ["T", "C", "E", "P", "S", "E", "R"];
// (1) reverse the array
// console.log(letters.reverse());
// console.log(letters);

// (2) create string from array letters
// console.log(letters.join());

// (3) remove cama's from array letters and return as a string
// console.log(letters.join(""));

// (4) add & symbol between array elements from array letters and return as a string
// console.log(letters.join("&"));

// (5) add space between array elements and return as a string
// console.log(letters.join(" "));
// console.log(letters.reverse().join("."));

// (6) does reverse method mutates an array?
// yes it mutates an array
// console.log(letters);

// (7) output should be T & C & E & P & S & E & R
// console.log(letters.join(" & "));

// (8) output shoulb be T-C-E-P-S-E-R
// console.log(letters.join("-"));

// 2)
// let animals = ["tiger", "lion", "cat", "dog", "elephant"];
// // (1) create a string from array animals
// console.log(animals.join());

// // (2) remove cama's between array elements and return as a string
// console.log(animals.join(""));

// // (3) add & symbol between array elements and return as a string
// console.log(animals.join(" $ "));

// // (4) add space between array elements and return as a string
// console.log(animals.join(" "));

// 3)
// let someThing = [12.3, 60, false, null, undefined];
// // (1) convert this array into string.
// console.log(someThing.join());

// // (2) 12.3 60 false output should be
// console.log(someThing.join(" "));

// // (3) output should be 12.3 # 60 # false #  #
// console.log(someThing.join(" # "));

// // (4) output should be 12.3 # -> 60 # -> false # ->  # ->
// console.log(someThing.join(" # -> "));

// ======================================
// 009 - Slice
// ======================================
/*
// 1)
// let animals = ["shark", "salmon", "whale", "bear", "lizard", "tortoise"];
// (1) // output shoulb be (2) ['shark', 'salmon']
// (2) // output should be (3) ['shark', 'salmon', 'whale']
// (3) // output should be (2) ['whale', 'bear']
// (4) // output should be (2) ['lizard', 'tortoise']
// (5) // output should be (2) ['lizard', 'tortoise'] using single paramater
// (6) // output should be (3) ['bear', 'lizard', 'tortoise'] using negative single paramater
// (6) // output should be using negative paramaters (2) ['bear', 'lizard']
// (7) // (6) ['shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise'] return as a copy array
// (8) // console original array
*/

// 1)
// let animals = ["shark", "salmon", "whale", "bear", "lizard", "tortoise"];
// (1) // output shoulb be (2) ['shark', 'salmon']

// (2) // output should be (3) ['shark', 'salmon', 'whale']

// (3) // output should be (2) ['whale', 'bear']

// (4) // output should be (2) ['lizard', 'tortoise']

// (5) // output should be (2) ['lizard', 'tortoise'] using single paramater

// (6) // output should be (3) ['bear', 'lizard', 'tortoise'] using negative single paramater

// (7) // output should be using negative paramaters (2) ['bear', 'lizard']

// (8) // (6) ['shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise'] return as a copy array

// (9) // console original array

// ======================================
// 010 - Splice
// ======================================
/*
// 1)
// let animals = ["shark", "salmon", "whale", "bear"];

// (1) insert octopus at index 1 and check what it returns and console animals to check octopus is added or not
// (2) delete 2 elements from index 3 and see what returns and console animals array
// (3) insert two elements snake and frog from index 3 and check what it returns and console animals array check snake and frog added to animals array
// (4) delete two elements and insert two elements SHARK! & OCTOPUS! from index 0 see what returns and console animals array to check animals array
// (5) what are the things we can do using splice method
// (6) what are the parameters splice can have
// (7) does original array mutates using splice method?
// (8) does original array mutates using splice method? if does give an example
// (9) if we insert elements without delete items what returns using splice method write an example
// (10) if we delete elements from an array using splice method what returns write an example
*/

// let animals = ["shark", "salmon", "whale", "bear"];

// (1) insert octopus at index 1 and console animals to check octopus is added or not
// console.log(animals.splice(1, 0, "octopus"));
// console.log(animals);

// (2) delete 2 elements from index 3 and see what returns and console animals array
// console.log(animals.splice(3, 2));
// console.log(animals);

// (3) insert two elements snake and frog from index 3 and check what it returns and console animals array check snake and frog added to animals array
// console.log(animals.splice(3, 0, "snake", "frog"));
// console.log(animals);

// (4) delete two elements and insert two elements SHARK! & OCTOPUS! from index 0 see what returns and console animals array to check animals array
// console.log(animals.splice(0, 2, "SHARK!", "OCTOPUS!"));
// console.log(animals);

// (5) what are the things we can do using splice method
// INSERT elements,DELETE elements,REPLACE elements.

// (6) what are the parameters splice can have
//splice(startIdx, deleteCount, itemsToInsert);

// (7) does original array mutates using splice method?
// YES

// (8) does original array mutates using splice method? if does give an example
// const names = ["sai", "raju", "krish", "shane"];
// console.log(names);
// console.log(names.splice(0, 2));
// console.log(names);

// (9) if we insert elements without delete items what returns using splice method write an example
// returns empty array
// const nums = [1, 2, 3, 4, 5];
// console.log(nums);
// console.log(nums.splice(1, 0, "bake", "shake"));
// console.log(nums);

// (10) if we delete elements from an array using splice method what returns write an example
// it returns deleted elements
// const squares = [1, 4, 8, 16, 25];
// console.log(squares);
// console.log(squares.splice(0, 3));
// console.log(squares);

// ======================================
// 011 - Sorting(part 1)
// ======================================
// 1)
// let people = ["Mrs. Robsinson", "Angie", "Jolene", "Maggie May", "Roxanne"];
// console.log(people);
// // (1) sort array and observe it
// console.log(people.sort());

// 2)
// let names = [
//   "angi",
//   "agra",
//   "aroma",
//   "bat",
//   "bskta",
//   "batista",
//   "cat",
//   "zebra",
// ];
// console.log(names);
// // (1) sort array and observe it
// console.log(names.sort());

// 3)
// let nums = [34, 10, "bats", 19876, "art", 100000, 67, 99];
// console.log(nums);
// // // (1) sort array and observe it
// console.log(nums.sort());

// ======================================
// 012 - Intro to Reference Types
// ======================================

// ======================================
// 013 - Using Const with Arrays
// ======================================
// ======================================
// 014 - Working with Nested Arrays
// ======================================
/*
// 1)
// const animalPairs = [
//   ["doe", "buck"],
//   ["ewe", "ram"],
//   ["peahen", "peacock"],
// ];
// (1) access third element
// (2) access peahen
// (2) access peacock
// (3) access ram
// (4) access first element
// (5) access buck
// (6) set dark instead of buck
// (7) set pecock as parrot
// (8) insert value hart in element one at ending
// (9) insert values water,air,gas in element two  at ending

// 2) Nested arrays
// const board = [
//   ["O", null, "X"],
//   [null, "X", "O"],
//   ["X", "O", null],
// ];
// (1) access null from third element
// (2) access third element

// 3)
// const animalPairs1 = [
//   ["doe", ["buck", "stag"]],
//   ["ewe", "ram"],
//   ["peahen", "peacock"],
// ];
// (1) To access 'ewe'
// (2) To access 'buck'
// (3) To access 'stag'
// (4) insert element hart & sort at end in sub array
*/

// 1)
// const animalPairs = [
//   ["doe", "buck"],
//   ["ewe", "ram"],
//   ["peahen", "peacock"],
// ];
// console.log(animalPairs);

// // (1) access third element
// // console.log(animalPairs[2]);

// // (2) access peahen
// console.log(animalPairs[2][0]);

// // (2) access peacock
// console.log(animalPairs[2][1]);

// // (3) access ram
// console.log(animalPairs[1][1]);

// // (4) access first element
// console.log(animalPairs[0]);

// // (5) access buck
// console.log(animalPairs[0][1]);

// // (6) set dark instead of buck
// animalPairs[0][1] = "dark";
// console.log(animalPairs[0][1]);
// console.log(animalPairs);

// // (7) set pecock as parrot
// animalPairs[2][1] = "parrot";
// console.log(animalPairs[2][1]);
// console.log(animalPairs);

// // (8) insert value hart in element one at ending
// animalPairs[0].push("hart");
// console.log(animalPairs[0]);

// // (9) insert values water,air,gas in element two  at ending
// animalPairs[1].push("water", "air", "gas");
// console.log(animalPairs[1]);
// console.log(animalPairs);

// 2) Nested arrays
// const board = [
//   ["O", null, "X"],
//   [null, "X", "O"],
//   ["X", "O", null],
// ];
// // (1) access null from third element
// console.log(board[2][2]);

// // (2) access third element
// console.log(board[2]);

// // 3)
// const animalPairs1 = [
//   ["doe", ["buck", "stag"]],
//   ["ewe", "ram"],
//   ["peahen", "peacock"],
// ];
// // (1) To access 'ewe'
// console.log(animalPairs1[1][0]);

// // (2) To access 'buck'
// console.log(animalPairs1[0][1][0]);

// // (3) To access 'stag'
// console.log(animalPairs1[0][1][1]);

// // (4) insert element hart & sort at end in sub array
// animalPairs1[0][1].push("hart", "sort");
// console.log(animalPairs1[0][1]);
// console.log(animalPairs1);

////////////////////////////////
// 06 - Objects - The Core of Javascript
////////////////////////////////

// ======================================
// 001 - Intro to Objects
// ======================================
// ======================================
// 002 - Creating Object Literals
// ======================================

// 1) create an object
// const fitBitData = {
//   totalSteps: 308727,
//   totalMiles: 211.7,
//   avgCalorieBurn: 5755,
//   workoutsThisWeek: "5 of 7",
//   avgGoodSleep: "2:13",
//   45: "forty five",
// };
// console.log(fitBitData);

// // (1) access totalMiles
// console.log(fitBitData.totalMiles);
// // (2) access avgCalorieBurn
// console.log(fitBitData.avgCalorieBurn);
// console.log(fitBitData);
// // (3) how to acces 45 value
// we can access 45 key values by two methods
// console.log(fitBitData["45"]);
// console.log(fitBitData[45]);
// console.log(fitBitData.45); // dot method will not work

// 2) create an object using different data types
// let comment = {
//   username: "sillyGoose420",
//   downVotes: 19,
//   upVotes: 214,
//   netScore: 195,
//   commentText: "Tastes linke chicken lol",
//   tags: ["#hilarious", "#funny", "#silly"],
//   isGilded: false,
// };
// console.log(comment);

// // (1) access username
// console.log(comment.username);
// // (2) access tags
// console.log(comment.tags);
// // (3) access #silly
// console.log(comment.tags[2]);
// // (4) access isGilded
// console.log(comment.isGilded);

// ======================================
// 003 - Accessing Object Properties
// ======================================
/*
// 1)
// const palette = {
//   red: "#eb4d4b",
//   yellow: "#f9ca24",
//   blue: "#30336b",
// };
// (1) access red value uisng dot notation
// (2) access red value using square bracket notation
// (3) access blue value using square bracket notaion
//(4) assign blue key to variable mysteryColor and console palette of mysteryColor
// (5) assign red key to variable anotherColor and console palette of anotherColor
// (6) see it works or not
// palette["bl" + "ue"]
// (7) see it works or not
// palette["ye" + "llow"]
*/

// 1)
// const palette = {
//   red: "#eb4d4b",
//   yellow: "#f9ca24",
//   blue: "#30336b",
// };
// console.log(palette);

// (1) access red value uisng dot notation
// console.log(palette.red);

// (2) access red value using square bracket notation
// console.log(palette["red"]);

// (3) access blue value using square bracket notaion
// console.log(palette["blue"]);
// console.log(palette.blue);

//(4) assign blue key to variable mysteryColor and check palette of mysteryColor
// let mysteryColor = "blue";
// console.log(palette[mysteryColor]);
// console.log(palette);

// (5) assign red key to variable anotherColor and check palette of anotherColor
// let anotherColor = "red";
// console.log(palette[anotherColor]);
// console.log(palette);

// (6) see it works or not
// palette["bl" + "ue"]
// console.log(palette["bl" + "ue"]);

// (7) see it works or not
// palette["ye" + "llow"]
// console.log(palette["ye" + "llow"]);

// ======================================
// 004 - Adding and Updating Properties
// ======================================
/*
// 1) create an empty userReviews object
// (1) add property queenBee49 and set value as 4.0 and access
// (2) add property queenBee70 and set value as 4.9 and access using dot and square backet methods
// (3) add property mrSmith78 and set value as 3.5 and access using dot and square backet methods
// (4) update existing property queenBee49 add 2 to existing value and also add 4 to exisiting value
// (5) update existing property mrSmith78 add 1 to existing value and also add another 1 to exisiting value
*/

// 1) create an empty userReviews object
// const userReviews = {};
// console.log(userReviews);

// (1) add property queenBee49 and set value as 4.0 and access
// userReviews.queenBee49 = 4.0;
// console.log(userReviews.queenBee49);
// console.log(userReviews);

// (2) add property queenBee70 and set value as 4.9 and access using dot and square backet methods
// userReviews["queenBee70"] = 4.9;
// console.log(userReviews.queenBee70);
// // or
// console.log(userReviews["queenBee70"]);
// console.log(userReviews);

// (3) add property mrSmith78 and set value as 3.5 and access using dot and square backet methods
// userReviews.mrSmith78 = 3.5;
// console.log(userReviews.mrSmith78);
// console.log(userReviews["mrSmith78"]);
// console.log(userReviews);

// (4) update existing property queenBee49 add 2 to existing value and also add 4 to exisiting value
// console.log(userReviews.queenBee49);
// userReviews.queenBee49 += 2;
// console.log(userReviews.queenBee49);
// userReviews.queenBee49 += 4;
// console.log(userReviews.queenBee49);

// (5) update existing property mrSmith78 add 1 to existing value and also add another 1 to exisiting value
// console.log(userReviews.mrSmith78);
// userReviews.mrSmith78++;
// console.log(userReviews.mrSmith78);
// userReviews.mrSmith78++;
// console.log(userReviews.mrSmith78);

// ======================================
// 005 - Nested Arrays & Objects
// ======================================
/*
// 1)
// const student = {
//   firstName: "David",
//   lastName: "Jones",
//   strengths: ["Music", "Art"],
//   exams: {
//     midterm: 92,
//     final: 88,
//   },
// };
// (1) access final value
// (2) access art
// (3) access strengths
// (4) access exams
// (5) find the average of exams
// (6) add property extra in exams and assign value 90

// 2)
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
// (1) access second element
// (2) access product value of first element
// (3) access price value of third element
// (4) access quantity value of third element

// 3)
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
// (1) access playingAs from player1
// (2) access player2 username
// (3) access X from second element of board
// (4) access null from third element of board
*/

// 1)
// const student = {
//   firstName: "David",
//   lastName: "Jones",
//   strengths: ["Music", "Art"],
//   exams: {
//     midterm: 92,
//     final: 88,
//   },
// };

// // (1) access final value
// console.log(student.exams.final);

// // (2) access art
// console.log(student.strengths[1]);

// // (3) access strengths
// console.log(student.strengths);

// // (4) access exams
// console.log(student.exams);

// // (5) find the average of exams
// const avg = (student.exams.midterm + student.exams.final) / 2;
// console.log(avg);

// // (6) add property extra in exams and assign value 90
// student.exams.extra = 90;
// console.log(student.exams.extra);
// console.log(student.exams);

// 2)
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

// // (1) access second element
// console.log(shoppingCart[1]);

// // (2) access product value of first element
// console.log(shoppingCart[0].product);

// // (3) access price value of third element
// console.log(shoppingCart[2].price);

// // (4) access quantity value of third element
// console.log(shoppingCart[2].quantity);

// 3)
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

// // (1) access playingAs from player1
// console.log(game.player1.playingAs);

// // (2) access player2 username
// console.log(game.player2.username);

// // (3) access X from second element of board
// console.log(game.board[1][2]);

// // (4) access null from third element of board
// console.log(game.board[2][0]);

// ======================================
// 006 - Objects and Reference Types
// ======================================
// ======================================
// 007 -Array_Object Equality
// ======================================

// 1)
// let nums = [1, 2, 3];
// let mystery = [1, 2, 3];
// let moreNums = nums;
// // (1) check nums and mystery with strict equality si true or false
// console.log(nums === mystery);

// // (2) check nums and moreNums with strict equality si true or false
// console.log(nums === moreNums);

// 2) check true or false
// console.log({} === {});
// console.log({ a: 1 } === { a: 1 });

// 3)
// let data1 = { a: 1 };
// let data2 = data1;
// console.log(data1 === data2);
// // (1) add property name and set value bharu to data1 and console data1 & data2 and observe
// data1.name = "bharu";
// console.log(data1);
// console.log(data2);
// // (2) add property age and set value 28 to data1 and console data1 & data2 and observe
// data2.age = 28;
// console.log(data1);
// console.log(data2);

////////////////////////////////
// 07 - The World of Loops
////////////////////////////////

// ======================================
// 001 - Intro to Loops
// ======================================
// ======================================
// 002 - For Loops
// ======================================
// 1) write for loop syntax and definition of for loop.

// 2) print hello 10 times using for loop
// for (let i = 1; i <= 10; i++) {
//   console.log("hello", i);
// }

// 3) hello Counting by 3's:
// for (let i = 1; i <= 10; i += 3) {
//   console.log("hello", i);
// }

// 4) write 1 to 20 perfect squares
// for (let i = 1; i <= 20; i++) {
//   console.log(`${i} X ${i} = ${i * i}`);
// }

// 5) write 1 to 20 perfect squares in reverse order
// for (let i = 20; i >= 1; i--) {
//   console.log(`${i} X ${i} = ${i * i}`);
// }

// 6) write 1 to 30 perfect squares
// for (let i = 0; i <= 30; i++) {
//   console.log(`${i} X ${i} = ${i * i}`);
// }

// 7) write 1 to 30 perfect squares in reverse order
// for (let i = 30; i >= 1; i--) {
//   console.log(`${i} X ${i} = ${i * i}`);
// }

// 8) write 1 to 10 perfect cubes
// for (let i = 0; i <= 10; i++) {
//   console.log(`${i} X ${i} X ${i} = ${i * i * i}`);
// }

// 9) write 1 to 10 perfect cubes in reverse order
// for (let i = 10; i >= 1; i--) {
//   console.log(`${i} X ${i} X ${i} = ${i * i * i}`);
// }

// 10) write 1 to 20 perfect cubes
// for (let i = 1; i <= 20; i++) {
//   console.log(`${i} X ${i} X ${i} = ${i * i * i}`);
// }

// 11) write 1 to 20 perfect cubes in reverse order
// for (let i = 20; i >= 1; i--) {
//   console.log(`${i} X ${i} X ${i} = ${i * i * i}`);
// }

// 12) print hello world every multiples of 3 to 30
// for (let i = 3; i <= 30; i += 3) {
//   console.log("hello world", i);
// }

// 13) write 10 table up to 100

// 14) write 7 table up to 70

// 15) let name = "strong"; iterate or loop each character in each line over name.
// let name = "strong";
// let str = "";
// for (let i = 0; i <= name.length - 1; i++) {
//   str = name[i];
//   console.log(str);
// }

// 16) let name = "strong"; iterate or loop each character in each line over string in reverse order.
// let name = "strong";
// let str = "";
// for (let i = name.length - 1; i >= 0; i--) {
//   str = name[i];
//   console.log(str);
// }

// 17) let name = "strong"; iterate or loop over string in reverse order.
// let name = "strong";
// let str = "";
// for (let i = name.length - 1; i >= 0; i--) {
//   str += name[i];
// }
// console.log(str);

// ======================================
// 003 - Infinite Loops
// ======================================
// To avoid infinite loops remember below points
// for(i=some num;then i should have <=;if i needs increment){}
// for(i=some num;then i should have >=;if i needs decrement){}

// ======================================
// 004 - For Loops & Arrays
// ======================================
// 1)
// (1) Printing each element in an array using two approaches.
// const examScores = [98, 77, 84, 91, 57, 66];
// approach 1
// for (let i = 0; i <= examScores.length - 1; i++) {
//   console.log(i, examScores[i]);
// }
// approach 2
// for (let i = 0; i < examScores.length; i++) {
//   console.log(i, examScores[i]);
// }

// (2) Printing each element in an array using two approaches in reverse order.

// approach 1
// for (let i = examScores.length - 1; i >= 0; i--) {
//   console.log(i, examScores[i]);
// }

// // approach 2
// for (let i = examScores.length - 1; i > 0; i--) {
//   console.log(i, examScores[i]);
// }

// 2)
// firstname scored 86 ....like this loop over
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

// (1) traditional way or long way
// for (let i = 0; i <= myStudents.length - 1; i++) {
//   console.log(`${myStudents[i].firstName} scored ${myStudents[i].grade}`);
// }

// (2) smart way
// for (let i = 0; i <= myStudents.length - 1; i++) {
//   let students = myStudents[i];
//   console.log(`${students.firstName} scored ${students.grade}`);
// }

// (3) Averaging all grades in myStudents array traditional way or long way
// let total = 0;
// for (let i = 0; i <= myStudents.length - 1; i++) {
//   total += myStudents[i].grade;
// }
// console.log(total / myStudents.length);

// (4) Averaging all grades in myStudents array smart way
// let total = 0;
// for (let i = 0; i < myStudents.length; i++) {
//   let students = myStudents[i];
//   total += students.grade;
// }
// console.log(total);
// console.log(total / myStudents.length);
// console.log((86 + 97 + 72 + 90) / 4); // for cross check sum of all grade / no of elements in an array

// 3) Reversing a string
// const word = "stressed";
// let str = "";
// for (let i = word.length - 1; i >= 0; i--) {
//   // console.log(i, word[i]);
//   str += word[i];
// }
// console.log(str);

// 4) sum of first 10 numbers
// let total = 0;
// for (let i = 1; i <= 10; i++) {
//   // console.log(i);
//   total += i;
// }
// console.log(total);

// 5)
// const examScores = [22, 98, 77, 84, 76, 65, 89, 91, 57, 66];
// FORWORD LOOPING
// FORWARD LOOPING WITH INDEX NUMBERED
// BACKWARD LOOPING
// BACKWARD LOOPING WITH INDEX NUMBERED
// AVG OF examScores

// 6)
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
// WITHOUT STORING IN A VARIABLE
// WITH STORING IN A VARIABLE
// AVG GRADE

// 7)
// const str = "RavikantiBhargav";
// FORWARD LOOPING WITH INDEX NUMBERED
// Loop backwards over the string

// ======================================
// 005 - Nested for Loops
// ======================================

// 1) write outer loop 1 to 10 and inner loop 1 to 3
// for (let i = 1; i <= 5; i++) {
//   console.log("OUTER LOOP", i);
//   for (let j = 1; j <= 3; j++) {
//     console.log("           inner loop", j);
//   }
// }

// 2) Sum all elements in our 2048 board
// const gameBoard = [
//   [4, 32, 8, 4],
//   [64, 8, 32, 2],
//   [8, 32, 16, 4],
//   [2, 8, 4, 2],
// ];

// approach 1
// let total = 0;
// for (let i = 0; i < gameBoard.length; i++) {
//   for (let j = 0; j < gameBoard.length; j++) {
//     total += gameBoard[i][j];
//   }
// }
// console.log(total);

// approach 2
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

// ======================================
// 006 - Intro to While Loop
// ======================================
// 1) print 1 to 5 using for loop
// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

// 2) print 1 to 5 using for while loop
// let i = 1;
// while (i <= 5) {
//   console.log(i);
//   i++;
// }

// ======================================
// 007 - More While Loops
// ======================================
// 1) create a variable target and store random number & create a variable playerscore and store random number write a program which shows player score and target score if those two scores got equal show congrats player.
// let target = Math.floor(Math.random() * 10);
// let playerScore = Math.floor(Math.random() * 10);
// while (playerScore !== target) {
//   console.log(`player : ${playerScore} target : ${target}`);
//   playerScore = Math.floor(Math.random() * 10);
// }
// console.log(`PLAYER : ${playerScore} TARGET : ${target}`);
// console.log("congrats player");

// ======================================
// 008 - Break Keyword
// ======================================
// ======================================
// 009 - For...Of Intro
// ======================================
// 1)
// let subreddits = ["soccer", "popheads", "cringe", "books"];
// (1) iterate using for loop
// for (let i = 0; i < subreddits.length; i++) {
//   console.log(i, subreddits[i]);
// }
// (2) using for of
// for (let sub of subreddits) {
//   console.log(sub);
// }

// 2)
// const word = "strong";
// for (let char of word) {
//   console.log(char);
// }

// 3)
// for (let char of "strongest") {
//   console.log(char);
// }

// ======================================
// 010 - Comparing For and For...Of
// ======================================
// 1)
// const magicSquare = [
//   [2, 7, 6],
//   [9, 5, 1],
//   [4, 3, 8],
// ];

// (1) using for loop to iterate
// for (let i = 0; i < magicSquare.length; i++) {
//   let sum = 0;
//   for (let j = 0; j < magicSquare.length; j++) {
//     sum += magicSquare[i][j];
//   }
//   console.log(`${magicSquare[i]} summed to ${sum}`);
// }

// (2) using for of
// for (let row of magicSquare) {
//   let sum = 0;
//   for (let num of row) {
//     sum += num;
//   }
//   console.log(`${row} summed to ${sum}`);
// }

// 2)
// const words1 = ["mail", "milk", "bath", "black"];
// const words2 = ["box", "shake", "tub", "berry"];
// for (let i = 0; i < words1.length; i++) {
//   console.log(i, `${words1[i]} and ${words2[i]}`);
// }

// ======================================
// 011 - For...Of with Objects
// ======================================
// 1) what are the three methods that converts objects into an array.
// Object.keys() - converts property names into array
// Object.values() - converts property values into array
// Object.entries() - converts both

// 2)
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

// (1) iterate keys,values,both
// for (let keys of Object.keys(movieReviews)) {
//   console.log(keys);
// }
// for (let values of Object.values(movieReviews)) {
//   console.log(values);
// }
// for (let entries of Object.entries(movieReviews)) {
//   console.log(entries);
// }

// (2) iterate all movies and its ratings
// for (movie of Object.keys(movieReviews)) {
//   // console.log(movie);
//   console.log(`You rated ${movie} - ${movieReviews[movie]}`);
// }

// (3) check what gives
// console.log(Object.keys(movieReviews));
// console.log(Object.values(movieReviews));
// console.log(Object.entries(movieReviews));

// (4) find avg of values
// approach 1
// let total = 0;
// for (let avg of Object.values(movieReviews)) {
//   // console.log(avg);
//   total += avg;
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

// (5) access all keys,1,2,3 elements from keys
// console.log(Object.keys(movieReviews));
// console.log(Object.keys(movieReviews)[0]);
// console.log(Object.keys(movieReviews)[1]);
// console.log(Object.keys(movieReviews)[2]);

// (6) access all values,1,2,3 elements from values
// console.log(Object.values(movieReviews));
// console.log(Object.values(movieReviews)[0]);
// console.log(Object.values(movieReviews)[1]);
// console.log(Object.values(movieReviews)[2]);

// (7) access both keys and values,1,2,4 elements from both
// console.log(Object.entries(movieReviews));
// console.log(Object.entries(movieReviews)[0]);
// console.log(Object.entries(movieReviews)[1]);
// console.log(Object.entries(movieReviews)[3]);

// (8) my rating to movies and movies should be uppercase
// for (let movie of Object.keys(movieReviews)) {
//   // console.log(movie, movieReviews[movie]);
//   let score = movieReviews[movie];
//   console.log(`I rated ${movie.toUpperCase()} ${score}/10`);
// }

// 3)
// const person = {
//   name: "john",
//   age: 25,
//   status: "student",
// };

// (1) access all keys, access elements 1,2,3,type of element 3
// console.log(Object.keys(person));
// console.log(Object.keys(person)[0]);
// console.log(Object.keys(person)[1]);
// console.log(Object.keys(person)[2]);
// console.log(Object.keys(person)[2], typeof Object.keys(person)[2]);
// console.log(Object.keys(person)[3]);

// (2) access all values, access elements 1,2,3, type of element 3
// console.log(Object.values(person));
// console.log(Object.values(person)[0]);
// console.log(Object.values(person)[1]);
// console.log(Object.values(person)[2]);
// console.log(Object.values(person)[2], typeof Object.values(person)[2]);
// console.log(Object.values(person)[3]);

// (3) access all keys and values, access elements 1,2,3, type of element 3
// console.log(Object.entries(person));
// console.log(Object.entries(person)[0]);
// console.log(Object.entries(person)[1]);
// console.log(Object.entries(person)[2]);
// console.log(Object.entries(person)[2], typeof Object.entries(person)[2]);
// console.log(Object.entries(person)[3]);

// ======================================
// 012 - For...In Loops
// ======================================
// 1) why is used for in loops.
// To iterate objects directly without using Object.keys() for keys or Object.values() for values of an object or Object.entries() for both Instead use for...in loop

// 2)
// const jeopardyWinnings = {
//   regularPLay: 2522700,
//   watsonChallenge: 300000,
//   tournamentOfChampions: 500000,
//   battleOfTheDecades: 100000,
// };
// (1) iterate keys and values and keys values using for in loop
// for (let prop in jeopardyWinnings) {
//   // console.log(prop);
//   // console.log(prop, jeopardyWinnings[prop]);
//   console.log(jeopardyWinnings[prop]);
// }

// (2) calculate total
// let total = 0;
// for (let prop in jeopardyWinnings) {
//   total += jeopardyWinnings[prop];
// }
// console.log(total);

// (3) see what gives
// console.log(jeopardyWinnings["regularPLay"]);
// console.log(jeopardyWinnings);

// 3)
// for (let k in [88, 99, 77, 66]) {
//   // console.log(k); // array indices we can consider as keys so array values consider as values
//   console.log(k, [88, 99, 77, 66][k]);
// }

// ======================================
// 00 - Todo List Project
// ======================================
// ======================================
// 00 - Guessing Game
// ======================================

// ======================================
// 0 - All 34 String Methods in Javascript in ONE VIDEO
// ======================================

////////////////////////////////
// 08 - Writing Resusable Code with Functions
////////////////////////////////

// ======================================
// 001 -  Our First Function
// ======================================
// 1) important points on functions?
// step 1 define the function
// step 2 call the function

// 2) what is function?
// A function is a group of reusable code which can be called anywhere in your program. This eliminates the need of writing the same code again and again.

// 3) create a function grumps() which can console iam bharu,iam fine,iam better when we call the function.
// STEP 1: Define the function:
// function grumps() {
//   console.log("iam bharu");
//   console.log("iam fine");
//   console.log("iam better");
// }

// // STEP 2: Call the function:
// grumps();

// 4) write a loop which can repeat grumps() three times.
// for (let i = 0; i <= 3; i++) {
//   grumps();
// }

// ======================================
// 002 - Dice Roll Function
// ======================================
// 1) write a function rollDie() create a variable roll and store which can result random number 1-6
// function rollDie() {
//   let roll = Math.floor(Math.random() * 6) + 1;
//   console.log(`Rolled: ${roll}`);
// }
// rollDie();
// rollDie();
// rollDie();
// rollDie();
// rollDie();
// rollDie();

// 2) write a loop which can throw dice 6 times
// for (let i = 1; i <= 6; i++) {
//   rollDie();
// }

// 3) write a function throwDice() we can roll rollDie 6 times per call.
// function throwDice() {
//   rollDie();
//   rollDie();
//   rollDie();
//   rollDie();
//   rollDie();
//   rollDie();
// }
// throwDice();

// ======================================
// 003 - Introducing Arguments
// ======================================
// 1) what are parameters, arguments in functions.
// PARAMETERS : Parameters act as variables inside the function.
// ARGUMENTS : A function's argument is the value we supply when calling a function. Real arguments are provided whenever we call the function in the program.

// 2) create a function greet() set paramater name which can greet Hello which name you input as argument EX:hello bharu
// function greet(name) {
//   console.log("Hello", name);
// }
// // greet();
// // greet("bharu");
// greet("ram");

// 3) create a function greet() set paramater name1,name2 which can greet Hello which name you input as arguments EX:hello bharu and dhanush
// function greet(name1, name2) {
//   console.log(`Hello ${name1} and ${name2}`);
// }
// greet("bharu", "dhanchu");
// greet("sai", "ram");

// 4) write a function rollDie() and create variable roll which can hold code of random numbers 1-6 and create another function throwDice set parameter numRolls which can specify how many dice to roll
// function rollDie() {
//   let roll = Math.floor(Math.random() * 6) + 1;
//   console.log(`Rolled : ${roll}`);
// }

// function throwDice(numRolls) {
//   for (let i = 1; i <= numRolls; i++) {
//     rollDie();
//   }
// }

// throwDice(5);
// throwDice(6);
// throwDice(10);

// 5) create a function square of a number set parameter num
// function square(num) {
//   console.log(num * num);
// }
// square(6);
// square(10);

// 6) create a function cube of a number set parameter num
// function cube(num) {
//   console.log(num * num * num);
// }
// cube(3);
// cube(5);

// ======================================
// 004 - Functions With Multiple Arguments
// ======================================
// 1) create functions addition of two numbers,subtraction of two numbers,multiplication of two numbers,division of two numbers,remainder and set parameters x & y.

// function addition(x, y) {
//   console.log(x + y);
// }
// addition(2, 3);
// addition(10, 2);

// function subtraction(x, y) {
//   console.log(x - y);
// }
// subtraction(5, 2);
// subtraction(10, 2);

// function multiplication(x, y) {
//   console.log(x * y);
// }
// multiplication(5, 6);
// multiplication(10, 6);

// function division(x, y) {
//   console.log(x / y);
// }
// division(10, 5);
// division(9, 5);

// function getRemainder(x, y) {
//   console.log(x % y);
// }
// getRemainder(9, 5);
// getRemainder(6, 5);

// 2) write a function which can greet three persons
// function greet(name1, name2, name3) {
//   console.log(`Hello ${name1}, ${name2} and ${name3}`);
// }
// greet("bharu", "sai", "shiva");

// ======================================
// 005 - The Return statement
// ======================================
// 1) what is return?
// Built-in methods RETURN values when we call them.We can store these values:
// With RETURN
// Now we can capture or store a return value in variable!
// RETURN
// The return statement ends function execution AND specifies the value to be returned by that function

// 2) with out return?
// NO RETURN
// Our functions print values out, but cannot store or capture in variables

// 3) write a function without return which adds two numbers.
// function add(x, y) {
//   console.log(x + y);
// }
// add(5, 6); // 11 without return we cannot store this value in a variable  only can print in console

// 4) write a function with return which adds two numbers.
// function sum(x, y) {
//   return x + y;
// }
// // Now we can capture or store a return value in variable!
// const addition = sum(2, 4);
// console.log(addition);
// let addition2 = sum(5, 10);
// console.log(addition2);

// ======================================
// 006 - More on Return Values
// ======================================
// 1) write a function isPurple parameter color to check purple or not if purple true if not purple false using return and make color to lowercase.
// (1) using general if else
// function isPurple(color) {
//   if (color.toLowerCase() === "purple") {
//     return true;
//   } else {
//     return false;
//   }
// }

// // let checkColor = isPurple("purple");
// let checkColor = isPurple("purpleeee");
// console.log(checkColor);

// (2) We don't need the else!
// function isPurple(color) {
//   if (color.toLowerCase() === "purple") {
//     return true;
//   }
//   return false;
// }
// let checkColor = isPurple("purple");
// let checkColor = isPurple("purpleeee");
// console.log(checkColor);

// (3) only using function with return shorter way
// function isPurple(color) {
//   return color.toLowerCase() === "purple";
// }
// // let checkColor = isPurple("purple");
// let checkColor = isPurple("purpleeee");
// console.log(checkColor);

// 2) create a function containsPurple set parameter array check color is purple or color is magenta.
// function containsPurple(arr) {
//   for (let color of arr) {
//     if (color === "purple" || color === "magenta") {
//       return true;
//     }
//   }
//   return false;
// }
// let checkColor = containsPurple(["red", "magenta"]);
// let checkColor2 = containsPurple(["purple", "mag"]);
// let checkColor3 = containsPurple(["purple", "magenta"]);
// let checkColor4 = containsPurple(["pu", "mag"]);
// console.log(checkColor);
// console.log(checkColor2);
// console.log(checkColor3);
// console.log(checkColor4);

// ======================================
// 007 - Function Challenge 1 password Validator
// ======================================
// ======================================
// 008 - Function Challenge 2 Average
// ======================================
// ======================================
// 009 - Function Challenge 3 Pangrams
// ======================================
// ======================================
// 010 - Function Challenge 4 Get Playing Card
// ======================================

////////////////////////////////
// 09 - An Advanced Look at Functions
////////////////////////////////

// ======================================
// 000 - Scope
// ======================================
// What Is Scope?
// Scope refers to the part of a program where we can access a variable.

// Scope Levels
// The four different scope levels are:

// (1) Global Scope
// (2) Module Scope // don't pay attention now
// (3) Block Scope
// (4) Function Scope
// (5) local scope
// (6) lexical scope
// (7) hoisting
// (8) variable lookup

// (1) Global Scope
// Variables declared Globally (outside any functions, if statements, for loops, etc. ) have Global Scope.

// Global variables can be accessed from anywhere in a JavaScript program.

// Variables declared with var, let and const are quite similar when declared outside a block.

// They all have Global Scope:

// const a = 1;
// let b = "boat";
// var c = "car";
// d = "dog";

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// function greet() {
//   // console.log(a);
//   // console.log(b);
//   // console.log(c);
//   // console.log(d);
// }
// greet();

// if (6 < 7) {
//   // console.log(a);
//   // console.log(b);
//   // console.log(c);
//   // console.log(d);
// }

// for (let i = 1; i <= 1; i++) {
//   // console.log(a);
//   // console.log(b);
//   // console.log(c);
//   // console.log(d);
// }

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// Automatically Global
// If you assign a value to a variable that has not been declared, it will automatically become a GLOBAL variable.

// This code example will declare a global variable carName, even if the value is assigned inside a function.

// call();
// function call() {
//   const carName1 = "Volvo";
//   let carName2 = "swift";
//   var carName3 = "alto";
//   carName4 = "nano";
//   console.log(carName1);
//   console.log(carName2);
//   console.log(carName3);
//   console.log(carName4);
// }
// console.log("**************");
// call();

// (3) Block Scope
// Before ES6 (2015), JavaScript had only Global Scope and Function Scope.

// ES6 introduced two important new JavaScript keywords: let and const.

// These two keywords provide Block Scope in JavaScript.

// Variables declared inside a { } block cannot be accessed from outside the block:

// {
//   const animal1 = "lion";
//   let animal2 = "tiger";
//   var animal3 = "elephant";
//   animal4 = "crocodile";
//   // console.log(animal1);
//   // console.log(animal2);
//   // console.log(animal3);
//   // console.log(animal4);
// }

// // console.log(animal1); // cannot be accessed
// // console.log(animal2); // cannot be accessed
// // console.log(animal3); // can be accessed
// // console.log("*************");
// // console.log(animal4); // can be accessed

// Variables declared with the var keyword can NOT have block scope.

// {
//   var x = 2;
// }
// // x can NOT be used here
// console.log(x); // can be accessed

// Variables declared inside a { } block can be accessed from outside the block.

// Local Scope
// Variables declared within a JavaScript function, become LOCAL to the function.

// animals();
// console.log("*********");
// function animals() {
// const animal1 = "lion";
// let animal2 = "tiger";
// var animal3 = "elephant";
// animal4 = "crocodile"; // don,t pay attention
// console.log(animal1);
// console.log(animal2);
// console.log(animal3);
// console.log(animal4);
// }
// animals();

// console.log(animal1); // cannot be accessed
// console.log(animal2); // cannot be accessed
// console.log(animal3); cannot be accessed
// console.log("*************");
// console.log(animal4); // can be accessed // weird case // don,t pay attention

// (4) Function Scope
// JavaScript has function scope: Each function creates a new scope.

// Variables defined inside a function are not accessible (visible) from outside the function.

// Variables declared with var, let and const are quite similar when declared inside a function.

// animals();
// console.log("*********");
// function animals() {
//   const animal1 = "lion";
//   let animal2 = "tiger";
//   var animal3 = "elephant";

//   // console.log(animal1);
//   // console.log(animal2);
//   // console.log(animal3);
// }
// animals();

// console.log(animal1); // cannot be accessed
// console.log(animal2); // cannot be accessed
// console.log(animal3); // cannot be accessed

// (6) lexical scope
// Lexical scope is the ability for a function scope to access variables from the parent scope. We call the child function to be lexically bound by that of the parent function.

// The nested scope allows functions to access variables defined in parent functions, and block scope allows variables to have limited accessibility within a block of code.

// function outer() {
//   let movie = "darling";
//   function inner() {
//     console.log(movie.toUpperCase());
//   }
//   inner();
// }
// outer();

// function outer() {
//   let movie = "darling";
//   function inner() {
//     function innerMost() {
//       console.log(movie.toUpperCase());
//     }
//     innerMost();
//   }
//   inner();
// }
// outer();

// check this out
// function outer() {
//   let movie = "darling";
//   function inner() {
//     let movie = "Mr.Perfect";
//     console.log(movie.toUpperCase());
//   }
//   inner();
// }
// outer();

// check this out
// function outer() {
//   let movie = "darling";
//   function inner() {
//     let movie = "Mr.Perfect";
//     function innerMost() {
//       let movie = "Chakram";
//       console.log(movie.toUpperCase());
//     }
//     innerMost();
//   }
//   inner();
// }
// outer();

// (7) hoisting
// In JavaScript, hoisting allows you to use functions and variables before they're declared. In this post, we'll learn what hoisting is and how it works.

// Variable hoisting with var
// When the interpreter hoists a variable declared with var, it initializes its value to undefined. The first line of code below will output undefined:

// console.log(foo); // undefined

// var foo = "bar";

// console.log(foo); // "bar"

// As we defined earlier, hoisting comes from the interpreter splitting variable declaration and assignment. We can achieve this same behavior manually by splitting the declaration and assignment into two steps:

// var foo;

// console.log(foo); // undefined

// foo = "foo";

// console.log(foo); // "foo"

// Remember that the first console.log(foo) outputs undefined because foo is hoisted and given a default value (not because the variable is never declared). Using an undeclared variable will throw a ReferenceError instead:

// console.log(foo); // Uncaught ReferenceError: foo is not defined

// Thankfully the let and const variables, introduced in ECMAScript 2015, behave differently.

// Variable hoisting with let and const
// Variables declared with let and const are hoisted but not initialized with a default value. Accessing a let or const variable before it's declared will result in a ReferenceError:

// console.log(foo); // Uncaught ReferenceError: Cannot access 'foo' before initialization

// let foo = 'bar';  // Same behavior for variables declared with const

// ********************
// simplyfying hoisting
// ********************
// In JavaScript, hoisting allows you to use functions and variables before they're declared. In this post, we'll learn what hoisting is and how it works.
// var is hoisting
// let and const not hoisting

// (1) using var
// console.log(animal); // undefined
// var animal = "Tapir";
// console.log(animal); // Tapir

// (2) using let
// console.log(bird); // QUESTIONSexample.js:3506 Uncaught ReferenceError: Cannot access 'bird' before initialization
// at QUESTIONSexample.js:3506:13
// let bird = "peacock";
// console.log(bird); // peacock

// (3) using const
// console.log(alphabets); // QUESTIONSexample.js:3510 Uncaught ReferenceError: Cannot access 'alphabets' before initialization
// const alphabets = "abcdef";
// console.log(alphabets); // abcdef

// Functions

// function declarations are hoisting
// greet(); // hello

// function greet() {
//   console.log("hello");
// }
// greet(); // hello

// // functions expressions are not hoisted
// greet(); // QUESTIONSexample.js:3532 Uncaught ReferenceError: Cannot access 'greet' before initialization

// let greet = function () {
//   console.log("hello");
// };
// greet(); // hello

// (8) variable lookup
// variable Lookup
// {} - code block

// const globalNumber = 5; // third preference

// function add(num1, num2) {
//   const globalNumber = 20; // second preference
//   const result = num1 + num2 + globalNumber;
//   function multiply() {
//     const globalNumber = 100; // first preference
//     const multiplyResult = result * globalNumber;
//     console.log(multiplyResult);
//   }
//   multiply();
//   return result;
// }
// console.log(add(3, 4));

// ======================================
// 001 - Function Scope
// ======================================
// first class function

// (1) Assigning a function to a variable
// const foo = () => {
//   console.log("foobar");
// };
// foo(); // Invoke it using the variable
// // foobar

// (2) Passing a function as an argument
// function sayHello() {
//   return "Hello, ";
// }
// function greeting(helloMessage, name) {
//   console.log(helloMessage() + name);
// }
// // Pass `sayHello` as an argument to `greeting` function
// greeting(sayHello, "JavaScript!");
// // Hello, JavaScript!

// (3) Returning a function
// function sayHello() {
//   return () => {
//     console.log("Hello!");
//   };
// }
// let x = sayHello();
// console.log(x);

// ======================================
// 002 - Block Scope
// ======================================
// ======================================
// 003 - Lexical Scope
// ======================================
// ======================================
// 004 - Function Expressions
// ======================================
/*
// 1) what is Function Expression? write function expressions for addition,subtraction,multiplication and division.
// 2) write 5 ways of functions
// (1) function declaration square
// (2) function expression(anonymous) square
// (3) function expression(named multiply) product
// (4) arrow function expression square
// (5) concise arrow function expression
*/

// 1) what is Function Expression? write function expressions for addition,subtraction,multiplication and division.
// const addition = function (x, y) {
//   return x + y;
// };
// console.log(addition(7, 3));

// const subtraction = function (x, y) {
//   return x - y;
// };
// console.log(subtraction(10, 5));

// const multiplication = function (x, y) {
//   console.log(x * y);
// };
// multiplication(2, 5);

// const division = function (x, y) {
//   console.log(x / y);
// };
// division(10, 5);

// 2) write 5 ways of functions

// (1) function declaration square
// function square(x) {
//   console.log(x * x);
// }
// square(2);

// (2) function expression(anonymous) square
// const square = function (x) {
//   console.log(x * x);
// };
// square(5);

// (3) function expression(named multiply) product
// const product = function multiply(x, y) {
//   console.log(x * y);
// };
// product(5, 6);

// (4) arrow function expression square
// const square = (x) => {
//   return x * x;
// };
// console.log(square(5));

// (5) concise arrow function expression
// const square = (x) => x * x;
// console.log(square(6));

// ======================================
// 005 - High Order Functions
// ======================================
/*
// 1) what are first class functions? give examples.
// 2) write function add,subtract,multiply and divide declarations
// (1) store them in operations array
// console.log(operations[0]);
// console.log(operations[1]);
// console.log(add);
// console.log(operations[1]());
// console.log(operations[1](100, 4));
// console.log(operations[0](94, 6));
// (2) Loop over all the functions in operations
// (3) store function multiply in thing object
// 2) what are higher order functions?give examples.
*/

// 1) what are first class functions? give examples.

// 2) write function add,subtract,multiply and divide declarations
// function add(x, y) {
//   return x + y;
// }
// function subtract(x, y) {
//   return x - y;
// }
// function multiply(x, y) {
//   return x * y;
// }
// function divide(x, y) {
//   return x / y;
// }

// (1) store them in operations array
// const operations = [add, subtract, multiply, divide];
// console.log(operations);
// console.log(operations[0]);
// console.log(operations[1]);
// console.log(add);
// console.log(operations[1]());
// console.log(operations[1](100, 4));
// console.log(operations[0](94, 6));

// (2) Loop over all the functions in operations
// for (let func of operations) {
//   let result = func(30, 5);
//   console.log(result);
// }

// (3) store function multiply.add.subtract,divide in thing object
// const thing = {
//   doSomething: multiply,
//   add: add,
//   subtract: subtract,
//   divide: divide,
// };
// console.log(thing);
// console.log(thing.doSomething(4, 5));
// console.log(add(5, 5));
// console.log(subtract(5, 5));
// console.log(divide(5, 5));

// 3) what are higher order functions?give examples.
// HIGHER ORDER FUNCTIONS
// can accept other functions as arguments
// can return a function

// ======================================
// 006 - Functions as Arguments
// ======================================
// 1) create a higher order function callTwice() parameter func which can show two times of what passing function has  and create a function laugh which contains hahaha and pass laugh function as an argument to callTwice and make another function cry which contains iam sad and  pass cry function as an argument to callTwice.

// function callTwice(func) {
//   func();
//   func();
// }

// function laugh() {
//   console.log("hahaha");
// }

// callTwice(laugh);

// function cry() {
//   console.log("iam sad");
// }

// callTwice(cry);

// 2) create a higher order function callThrice() parameter func which can show two times of what passing function has  and create three functions cry,rage,work which contains iam sad,i hate everthing,i have work pass those three functions as an arguments to callThrice.
// function callThrice(f) {
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
// function work() {
//   console.log("i have work");
// }

// callThrice(cry);
// callThrice(rage);
// callThrice(work);

// 3) create a higher order function which has the ability to enter a number so that passing function value prints what number you have enter times.

// function repeatNTimes(func, num) {
//   for (let i = 1; i <= num; i++) {
//     func();
//   }
// }

// function cry() {
//   console.log("iam sad");
// }
// function rage() {
//   console.log("i hate everthing");
// }
// function work() {
//   console.log("i have work");
// }

// repeatNTimes(cry, 5);
// repeatNTimes(rage, 5);
// repeatNTimes(work, 5);

// 4) create a higher order function pickOne parameters f1,f2 which has the ability to pickOne f1 or f2 by using random number method.pass any two functions to get one function return.

// function pickOne(f1, f2) {
//   let rand = Math.random();
//   console.log(rand);
//   if (rand < 0.5) {
//     f1();
//   } else {
//     f2();
//   }
// }

// function cry() {
//   console.log("iam sad");
// }
// function rage() {
//   console.log("i hate everthing");
// }
// function work() {
//   console.log("i have work");
// }

// pickOne(cry, rage);
// pickOne(work, rage);
// pickOne(cry, work);

// ======================================
// 007 - Functions as Return Values
// ======================================
// 1) write an higher order function multiplyBy parameter num which returns another function paramter x which can do x multiply num and create a variable double store multiplyBy(2) and create a variable trple store multiplyBy(3) and create a variable halve store multiplyBy(0.5)

// function multiplyBy(num) {
//   return function (x) {
//     return num * x;
//   };
// }

// const double = multiplyBy(2);
// console.log(double(3));
// console.log(double(10));
// console.log(multiplyBy(5)(4));
// console.log(multiplyBy(5)(5));

// const triple = multiplyBy(3);
// console.log(triple(5));
// console.log(triple(10));

// const halve = multiplyBy(0.5);
// console.log(halve(5));
// console.log(halve(10));
// console.log(halve());

// 2) make a function which tells true or false what you entered number is greater than or equal to x and less than or equal to y.create a variable  isChild ,isNineties,isNiceWeather
// function makeBetweenFunc(x, y) {
//   return function (num) {
//     return num >= x && num <= y;
//   };
// }

// const isChild = makeBetweenFunc(0, 18);
// console.log(isChild(10));
// console.log(isChild(2));
// console.log(isChild(10));
// console.log(isChild(19));
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

// ======================================
// 008 - Callbacks
// ======================================
/*
// 1) what are callback functions?
// 2)
// (1) create higher function greet paramters name,cb contains name and invoke cb
// (2) create callback function goodMorning contains Good Morning
// (3) pass goodMorning function as an argument to higher order function greet
// (4) invoke higher order function greet pass arguments bharu,callback function goodMorning.
*/

// 1) what are callback functions?
// function passed to another function(higher order function) as an agument and executed/invoked inside that function(higher order function).

//  Callbacks make sure that a function is not going to run before a task is completed but will run right after the task has completed.

/*
// PRACTICE

// greet is higher order function
// function greet(name, cb) {
//   cb();
//   console.log(name);
// }

// create function goodMorning contains good morning
// function goodMorning() {
//   console.log("good morning"); // goodMorning is callback function
// }

// create function goodEvening contains Good evening
// function goodEvening() {
//   console.log("good evening"); // goodEvening is callback function
// }

// greet("Jonas", goodMorning);
// greet("Peter", goodEvening);

// method 1
// function greeting() {
//   console.log("good morning bharu");
// }
// setTimeout(greeting, 5000);

// callback functions we use mostly for one time use as an anonymous functions passed as an argument of higher order functions.

// method 2 generally used method
// generally we use callback functions like this
// setTimeout(function () {
//   console.log("good morning bharu");
// }, 3000);

// seTimeOut function is higher order function which is built in function.
*/

// 2)
// (1) create higher function greet paramters name,cb contains name and invoke cb
// function greet(name, cb) {
//   console.log(name);
//   cb();
// }

// (2) create callback function goodMorning contains Good Morning
// function goodMorning() {
//   console.log("Good Morning");
// }

// (3) invoke higher order function greet pass arguments bharu,goodMorning.
// pass goodMorning function as an argument to higher order function greet
// greet("bharu", goodMorning);

// 3)
// (1) create callBack function goodEvening contains Good Evening bharu
// function goodEvening() {
//   console.log("Good Evening bharu");
// }
// (2) pass goodEvening to higher order function setTimeOut built in functions
// setTimeout(goodEvening);

// (3) set parameter 2 5000 milli seconds to execute after 5 seconds
// setInterval(goodEvening, 5000);

// ======================================
// 009 - Hoisting
// ======================================
// 1) what is Hoisting?
// Housting allows you to use functions and variables before they are declared

////////////////////////////////
// 010 - Apply Functions to Collections of Data
////////////////////////////////

// ======================================
// 001 - Intro to Array Callback Methods
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

// 1) what are array callback methods?
//f f f s e r m

// ======================================
// 002 - forEach
// ======================================
// 1) what is foreach method?
// Accepts a callback function.
// Calls the function once per element in the array.
// The forEach() method calls a function and iterates over the elements of an array.The forEach() method can also be used on MAPS and  SETS.

// 2)
// (1) create numbers array which contains 20,21,22,23,24,25,26,27
// const numbers = [20, 21, 22, 23, 24, 25, 26, 27];

// // (2) using anonymous function make numbers array elements double like 20*2,21*2....
// numbers.forEach(function (numbersElements) {
//   console.log(numbersElements * 2);
// });

// console.log("*******************************");
// (3) create function printTriple which can make numbers array elements into triple value like 20*3,21*3,.....
// function triple(numElements) {
//   console.log(numElements * 3);
// }
// // // Using a pre-defined function:
// numbers.forEach(triple);
// console.log("*******************************");

// // (4) iterate numbers array with index
// numbers.forEach(function (idxNo, numbersElements) {
//   console.log(numbersElements, idxNo);
// });
// console.log("*******************************");

// numbers.forEach(function (idxNo, numbersElements) {
//   console.log(idxNo, numbersElements);
// });
// console.log("*******************************");

// 3) create randomArray contains 10,20,bharu,ten,singer,false and iterate randomArray along with index numbers
// const randomArray = [10, 20, "bharu", "ten", "singer", false];
// randomArray.forEach(function (idx, elements) {
//   console.log(elements, idx);
// });
// randomArray.forEach(function (idx, elements) {
//   console.log(idx, elements);
// });

// 4)
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

// // (1) Printing all book titles using forEach:
// books.forEach(function (elements) {
//   console.log(elements.title);
// });
// console.log("*******************************");

// // (2) Printing all book titles using forEach: and makes titles capital letters
// books.forEach(function (elements) {
//   console.log(elements.title.toUpperCase());
// });
// console.log("*******************************");

// // (3) Printing all book titles using for...of:
// for (let elements of books) {
//   console.log(elements.title);
// }
// console.log("*******************************");

// // (4) Printing all book titles using for...of: and make titles capital letters
// for (let elements of books) {
//   console.log(elements.title.toUpperCase());
// }
// console.log("*******************************");

// // (5) Printing all book titles using for loop: and make titles capital letters
// for (let i = 0; i < books.length; i++) {
//   console.log(books[i].title.toUpperCase());
// }

// 5)
// // (1) print all elements iterate like 9*9,8*8,....
// const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];
// nums.forEach(function (elements) {
//   console.log(elements * elements);
// });
// console.log("********************************");

// // (2) write a program which print elements gives remainder 0 only when divided by 2
// nums.forEach(function (elements) {
//   if (elements % 2 === 0) {
//     console.log(elements);
//   }
// });

// ======================================
// 003 - Map
// ======================================
// 1) what is map() method?why we need it?when to use?
// The Array.map() method allows you to iterate over an array and modify its elements using a callback function. The callback function will then be executed on each of the array's elements.

// Sometimes you may need to take an array and apply some procedure to its elements so that you get a new array with modified elements.

// Instead of manually iterating over the array using a loop, you can simply use the built-in Array.map() method.

// The Array.map() method is commonly used to apply some changes to the elements, whether multiplying by a specific number as in the code above, or doing any other operations that you might require for your application.

// 2)
// const numbers = [20, 21, 22, 23, 24, 25, 26, 27];
// (1) iterate numbers using map with result of doubles like 20*2,21*2...
// const doubles = numbers.map(function (element) {
//   return element * 2;
// });
// console.log(doubles);
// console.log(numbers);

// (2) iterate numbers using map with result of squares like 20*20,21*21...
// const squares = numbers.map(function (elements) {
//   return elements * elements;
// });
// console.log(squares);

// (3) iterate numbers using map with result of triples like 20*3,21*3...
// const triples = numbers.map(function (elements) {
//   return elements * 3;
// });
// console.log(triples);

// (4) check numbers elements which are even using map() return object which are true which are false
// const checkEven = numbers.map(function (elements) {
//   return {
//     value: elements,
//     isEven: elements % 2 === 0,
//   };
// });
// console.log(checkEven);

// (5) check numbers elements which are odd using map() return object which are true which are false
// const checkOdd = numbers.map(function (elements) {
//   return {
//     value: elements,
//     isOdd: elements % 2 === 1,
//   };
// });
// console.log(checkOdd);

// (6) using for of looping doubling an array elements
// const doubles2 = [];
// for (let num of numbers) {
//   doubles2.push(num * 2);
// }
// console.log(doubles2);

// 3)
// const words = ["asap", "byob", "rsvp", "diy"];
// // output should be // //["A.S.A.P", "B.Y.O.B", "R.S.V.P", "D.I.Y"]
// const abbrevs = words.map(function (word) {
//   return word.toUpperCase().split("").join(".");
// });
// console.log(abbrevs);

// 4)
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

// (1) return all title in an array
// const titles = books.map(function (elements) {
//   return elements.title;
// });
// console.log(titles);

// (2) return authors in an array
// const authors = books.map(function (elements) {
//   return elements.authors;
// });
// console.log(authors);

// (3) return all 0 index authors in an array
// const authors2 = books.map(function (elements) {
//   return elements.authors[0];
// });
// console.log(authors2);

// (4) return titles and rating in an array
// const ratings = books.map(function (elements) {
//   return {
//     titles: elements.title,
//     ratings: elements.rating,
//   };
// });
// console.log(ratings);

// 5)
// const texts = ["rofl", "lol", "omg", "ttyl"];
// (1) make texts elements capital letters return an array
// const copy = texts.map(function (elements) {
//   return elements.toUpperCase();
// });
// console.log(copy);
// (2) make texts elements capital letters and split return an array
// const copy2 = texts.map(function (elements) {
//   return elements.toUpperCase().split();
// });
// console.log(copy2);

// (3) make texts elements capital letters and split return an array
// const copy3 = texts.map(function (elements) {
//   return elements.toUpperCase().split("");
// });
// console.log(copy3);

// (4) make texts elements capital letters and split and join return an array output (4) ['R-O-F-L', 'L-O-L', 'O-M-G', 'T-T-Y-L']
// const copy4 = texts.map(function (elements) {
//   return elements.toUpperCase().split("").join("-");
// });
// console.log(copy4);

// ======================================
// 004 - Arrow Functions Intro
// ======================================
// 1) what is arrow function?
// syntactically compact alternative to a regular function expression

// 2) write function expression for square of a number
// const square = function (x) {
//   return x * x;
// };
// console.log(square(5));

// 3) write arrow function to get square of any number.
// const square = (num) => {
//   return num * num;
// };
// console.log(square(5));

// 4) write arrow function to check a number is even or not if it is even true otherwise false.
// const isEven = (num) => {
//   return num % 2 === 0;
// };
// console.log(isEven(5));
// console.log(isEven(6));

// 5) write arrow function to get multiplication of two numbers.
// const multiplication = (x, y) => {
//   return x * y;
// };
// console.log(multiplication(5, 10));
// console.log(multiplication(5, 20));

// // 6) write arrow function which console hi.
// const greet = () => {
//   return "Hi";
// };
// console.log(greet());
// // or
// const greet1 = () => {
//   console.log("hi");
// };
// greet1();

// // 7) write arrow function to greet a person hello like Hello Bharu...
// const greeting = (name) => {
//   return `Hello ${name}`;
// };
// console.log(greeting("Bharu"));
// console.log(greeting("Dhanush"));

// ======================================
// 005 - Arrow Function Implicit Returns
// ======================================
// 1) what is implicit means?
// suggested though not directly expressed.

// 2) create a function expression to check a number is even or not if even true otherwise false.
// const isEven = function (num) {
//   return num % 2 === 0;
// };
// console.log(isEven(5));
// console.log(isEven(6));

// 3) create a arrow with return or regular arrow function to check a number is even or not if even true otherwise false.
// const isEven = (num) => {
//   return num % 2 === 0;
// };
// console.log(isEven(5));
// console.log(isEven(6));

// 4) create a arrow function oneliner to check a number is even or not if even true otherwise false.
// const isEven = (num) => num % 2 === 0;
// console.log(isEven(5));
// console.log(isEven(6));

// 5) write arrow function to get square of a number.
// const square = (num) => {
//   return num * num;
// };
// console.log(square(5));
// console.log(square(6));

// 6) write one liner arrow function to get square of a number.
// const square1 = (num) => num * num;
// console.log(square1(5));
// console.log(square1(6));

// 7)
// const nums = [1, 2, 3, 4, 5, 6, 7, 8];
// (1) make nums array double using anonymous function and return as an array
// const doubles1 = nums.map(function (elements) {
//   return elements * 2;
// });
// console.log(doubles1);

// (2) make nums array double using regular arrow function and return as an array
// const doubles2 = nums.map((elements) => {
//   return elements * 2;
// });
// console.log(doubles2);

// (3) make nums array double using one liner arrow function and return as an array
// const doubles3 = nums.map((elements) => elements * 2);
// console.log(doubles3);

// (4) craete an anonymous function to check which elements of nums is even if even return even if odd return odd return as an array.
// const list1 = nums.map(function (elements) {
//   if (elements % 2 === 0) return "even";
//   return "odd";
// });
// console.log(list1);

// (5) craete an one liner arrow function to check which elements of nums is even if even return even if odd return odd return as an array.
// const list2 = nums.map((elements) => (elements % 2 === 0 ? "even" : "odd"));
// console.log(list2);

// 8) write one liner arrow functions for square, addition,subtraction,multiplication
// const square = (num) => num * num;
// console.log(square(5));
// console.log(square(6));

// const addition = (x, y) => x + y;
// console.log(addition(5, 5));
// console.log(addition(5, 6));

// const subtraction = (x, y) => x - y;
// console.log(subtraction(10, 5));

// const multiplication = (x, y) => x * y;
// console.log(multiplication(10, 8));

// ======================================
// 006 - Array.find
// ======================================
// 1) what is find method?
// FIND merthod returns the value of the FIRST ELEMENT in the array that satisfies the provived testing function.

// 2)
// let movies = [
//   "The Fantastic Mr. Fox",
//   "Mr. and Mrs. Smith",
//   "Mrs. Doubtfire",
//   "Mr. Deeds",
// ];

// (1) Find first movie that includes 'Mrs' in its title:
// const movie = movies.find((movie) => {
//   return movie.includes("Mrs");
// });
// console.log(movie);

// // (2) Find first movie that begins with 'Mrs':
// const movie2 = movies.find((movie) => {
//   return movie.indexOf("Mrs") === 0;
// });
// console.log(movie2);

// // (3) Find first movie that includes 'Mr' in its title:
// const movie3 = movies.find((movie) => {
//   return movie.includes("Mr");
// });
// console.log(movie3);

// // (4) Find first movie that begins with 'Mr':
// const movie4 = movies.find((movie) => {
//   return movie.indexOf("Mr") === 0;
// });
// console.log(movie4);

// 3)
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

// (1) Find book rating over 4.3
// const goodBook = books.find((book) => book.rating >= 4.3);
// console.log(goodBook);

// (2) Find book with Neil Gaiman as an author:
// const neilBook = books.find((b) => b.authors.includes("Neil Gaiman"));
// console.log(neilBook);

// (3) find a book which rating less than 4.25
// const rating = books.find((r) => r.rating < 4.25);
// console.log(rating);

// 4) find book with Amor Towels as an author:
// const amorBook = books.find((book) => book.authors.includes("Amor Towles"));
// console.log(amorBook);

// ======================================
// 007 - Filter
// ======================================
// 1) what is filter()?
// FILTER creates a new array with all elements that pass the test implemented by the provided function.
// Javascript Array filter(). The filter() method returns a new array with all elements that pass the test defined by the given function.

// // 2)
// const nums = [34, 35, 67, 54, 109, 102, 32, 9];
// // (1) get all odds from nums in a new array
// const odds = nums.filter((num) => num % 2 === 1);
// console.log(odds);

// // (2) get all evens from nums in a new array
// const evens = nums.filter((num) => num % 2 === 0);
// console.log(evens);

// // (3) get numbers greater than 50 from nums
// const bigNums = nums.filter((num) => num > 50);
// console.log(bigNums);

// // (4) get numbers greater less than 5 from nums
// const less5Nums = nums.filter((num) => num < 5);
// console.log(less5Nums);

// // (5) get numbers greater less than 45 from nums
// const less45Nums = nums.filter((num) => num < 45);
// console.log(less45Nums);

// 3)
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

// (1) return all books which are rated over 4.3
// const goodBooks = books.filter((book) => book.rating > 4.3);
// console.log(goodBooks);

// (2) return all books with fantasy as a genre
// const goodBooks1 = books.filter((book) => book.genres.includes("fantasy"));
// console.log(goodBooks1);

// (3) return all books that are either short stories or essays:
// const goodBooks2 = books.filter(
//   (book) =>
//     book.genres.includes("short stories") || book.genres.includes("essays")
// );
// console.log(goodBooks2);

// (4) build a search functionality to get books
// get books which contains the
// const query = "bone";
// const results = books.filter((book) => {
//   const title = book.title.toLowerCase();
//   return title.includes(query.toLowerCase());
// });
// console.log(results);

// (5) build a search functionality to get books dynamically like if we enter the which contains the books will return
// const dynamicQuery = prompt();
// const results1 = books.filter((book) => {
//   const title = book.title.toLowerCase();
//   return title.includes(dynamicQuery.toLowerCase());
// });
// console.log(results1);

// (6) build dynamically search functionality for getting genres
// const dynamicQuery = prompt();
// const results1 = books.filter((book) => {
//   const genre = book.genres;
//   return genre.includes(dynamicQuery.toLowerCase());
// });
// console.log(results1);

// ======================================
// 008 - Some & Every
// ======================================
// 1) what is some method?
// returns true if ANY of the array elements pass the test function.

// 2) what is Every method?
// returns true if all the array elements pass the test function.

// 3)
// const words = ["dog", "dig", "log", "bag", "wag"];

// (1) is every word 3 characters long?
// const all3Letters = words.every((word) => word.length === 3);
// console.log(all3Letters);

// (2) is every word 2 characters long?
// const all2Letters = words.every((word) => word.length === 2);
// console.log(all2Letters);

// (3) Do all words end in 'g'?
// const allEndG = words.every((word) => {
//   return word[word.length - 1] === "g";
// });
// console.log(allEndG);

// (4) Does at least 1 book start with 'd'?
// const atleastStartd = words.some((word) => {
//   return word[0] === "d";
// });
// console.log(atleastStartd);

// (5) Do all words start with 'd'?
// const allStartd = words.every((word) => {
//   return word[0] === "d";
// });
// console.log(allStartd);

// 4)
// const animals = ["tiger", "lion", "elephant", "horse", "tiger", "lion"];

// (1) is every word 4 or greater than 4 characters long?
// const every4 = animals.every((animal) => {
//   return animal.length >= 4;
// });
// console.log(every4);

// (2) Does at least 1 animal start with 't'?
// const animal1 = animals.some((animal) => {
//   return animal[0] === "t";
// });
// console.log(animal1);

// (3) Does at least 1 animal index 2 starts with 'o'?
// const animal2 = animals.some((animal) => {
//   return animal[2] === "o";
// });
// console.log(animal2);

// // 5)
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

// // (1) Are all books rated 3.5 or higher?
// const rated = books.every((book) => book.rating >= 3.5);
// console.log(rated);

// // (2) Do any books have 2 authors?
// const author = books.some((book) => book.authors.length === 2);
// console.log(author);

// // (3) Do any books have 3 authors?
// const author1 = books.some((book) => book.authors.length === 3);
// console.log(author1);

// // (4) Do any books have 3 genres?
// const genre1 = books.some((book) => book.genres.length === 3);
// console.log(genre1);

// // (5) Do any books have 4 genres?
// const genre2 = books.some((book) => book.genres.length === 4);
// console.log(genre2);

// // (6) Are all books rated 3.5 or lower?
// const rated1 = books.every((book) => book.rating <= 3.5);
// console.log(rated1);

// 6)
// const words = ["dog", "jello", "log", "cupcake", "bag", "wag"];

// (1) Are there any words longer than 4 characters?
// const longerThan4C = words.some((word) => {
//   return word.length > 4;
// });
// console.log(longerThan4C);

// (2) Are all words longer than 4 characters?
// const AlllongerThan4C = words.every((word) => {
//   return word.length > 4;
// });
// console.log(AlllongerThan4C);

// (3) Are all words 3 or longer than 3 characters?
// const AlllongerThan3C = words.every((word) => {
//   return word.length >= 3;
// });
// console.log(AlllongerThan3C);

// (4) Do any words start with "Z" and check with "j?
// const anyStartZ = words.some((word) => {
//   // return word[0] === "Z";
//   return word[0] === "j";
// });
// console.log(anyStartZ);

// (5) Do any words contain "cake"?
// const containCake = words.some((word) => {
//   return word.includes("cake");
// });
// console.log(containCake);

// ======================================
// 009 - Revisiting Sort Part - 2
// ======================================
// ======================================
// 010 - Reduce Intro part - 1
// ======================================
// 1) what is reduce method?
// The array reduce is a method used to reduce an array to a single value by passing a callback function on each element of the array.

// 2) does reduce method mutates the original array?
// yes

// 3)
// const nums = [3, 4, 5, 6, 7];
// // // (1) To multiply all values in nums:
// const product = nums.reduce((total, currentVal) => total * currentVal);
// console.log(product);

// // // (2) To add all values in nums
// const addition = nums.reduce((total, currentVal) => total + currentVal);
// console.log(addition);

// // // (3) to subtract all values in nums
// const subtraction = nums.reduce((total, currentVal) => total - currentVal);
// console.log(subtraction);

// ======================================
// 011 - Reduce pt.2
// ======================================
// ======================================
// 012 - Even More Reduce part-3
// ======================================

////////////////////////////////
// 011 - A few Miscellaneous JS Features
////////////////////////////////

// ======================================
// 001 - New Js Features Intro
// ======================================
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

// ======================================
// 002 - Default Parameters
// ======================================
// 1) what are default paramters?
//  If a function in JavaScript is called with missing arguments (less than declared), the missing values are set to undefined

// Sometimes this is acceptable, but sometimes it is better to assign a default value to the parameter:

// 2) create function multiply paramaters x,y make parameter y default value as y=1
// (1) pass arguments 3,4
// (2) pass argument 3 only
// function multiply(x, y = 1) {
//   return x * y;
// }
// console.log(multiply(3, 4));
// console.log(multiply(3));

// 3) create function addition paramaters x,y make parameter y default value as y=5
// (1) pass arguments 3,4
// (2) pass argument 3 only
// function addition(x, y = 5) {
//   return x + y;
// }
// console.log(addition(3, 4));
// console.log(addition(3));

// 4) create function greet parameters person,greeting set default paramter greeting value hi and greet contains greeting,person print to console.
// function greet(person, greeting = "hi") {
//   return `${greeting}, ${person}`;
// }
// console.log(greet("bharu"));
// console.log(greet("Satish", "Hello"));

// 5)
// Default value of an array:
// const blah = (x, y = [1, 2, 3]) => {
//   console.log(x, y);
// };
// blah(1);
// blah(2, 3);
// blah(2, [234]);
// blah(2, [234, 3, 4, 5, 6]);

// 6)
// Multiple default values are possible, but rare
// const greet1 = (person, greeting = "hi", punctuation = "!") => {
//   console.log(`${greeting}, ${person} ${punctuation}`);
// };
// greet1("anya");
// greet1("bharu");
// greet1("dhanush");

// ======================================
// 003 - Spread for Function Calls
// ======================================
// 1) what is spread?
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

// 2) create a function giveMeFour with parameters a,b,c,d and contains console.log(a),console.log(b),console.log(c),console.log(d).
function giveMeFour(a, b, c, d) {
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
}
// (1) create an array colors which contains red,orange,yellow,green.first pass colors as an argument to giveMeFour second pass colors as an argument to giveMeFour using spread operator.
// const colors = ["red", "orange", "yellow", "green"];
// giveMeFour(colors);
// giveMeFour(...colors);

// (2) pass string GOAT as an argument to giveMeFour uisng spread operator
// giveMeFour("GOAT");
// giveMeFour(..."GOAT");

// (3) pass string bharu as an argument to giveMeFour uisng spread operator
// giveMeFour(..."bharu");

// 3) find max value of nums
// const nums = [9, 3, 2, 8];
// console.log(Math.max(nums));
// console.log(Math.max(...nums));

// ======================================
// 004 - Spread in Array Literals
// ======================================
// 1) what is spread in array literals?
// Creates a new array using an existing array. Spreads the elements from one array into new array.
// original arrays will not change only makes copy
// we can use spread to combine arrays and we can also add elements in an arrays

// // 2)
// const animals1 = ["lion", "tiger", "cat"];
// const animals2 = ["elephant", "dog", "crocodile"];
// const birds = ["peacock", "parrot"];

// // (1) merge animals1 & animals2 into a new array using spread operator and check to console.
// const animals = [...animals1, ...animals2];
// console.log(animals);

// // (2) merge animals2 & animals1 into a new array using spread operator and check to console.
// const Animals = [...animals2, ...animals1];
// console.log(Animals);

// // (3) create a copy array of birds using spread operator
// const flyings = [...birds];
// console.log(flyings);

// // (4) merge animals2 & birds into a new array using spread operator and check to console.
// const merging = [...animals2, ...birds];
// console.log(merging);

// // (5) create a copy array of animals2 using spread operator
// const copyAnimals2 = [...animals2];
// console.log(copyAnimals2);

// 3)
// const nums1 = [1, 2, 3];
// const nums2 = [4, 5, 6];
// // (1) nums1 & nums2 into a new array using spread operator and check to console.
// const nums = [...nums1, ...nums2];
// console.log(nums);
// // (2) nums2 & nums1 & add values 7,8,9 into a new array using spread operator and check to console.
// const reverseNums = [...nums2, ...nums1, 7, 8, 9];
// console.log(reverseNums);

// ======================================
// 005 - Spread in Object Literals
// ======================================
// 1) what is spread in object literals?
// Copies properties from one object into another object literal.

// 2)
// const feline = {
//   legs: 4,
//   family: "Felidae",
// };

// const canine = {
//   family: "Caninae",
//   furry: true,
//   legs: 4,
// };

// (1) create dog and spread canine and add property isPet set value true and add property adorable set value true and console dog
// const dog = {
//   ...canine,
//   isPet: true,
//   adorable: true,
// };
// console.log(dog);

// (2) create houseCat and spread feline and add property isGrumpy set value true and add property personality set value unpredictable and console houseCat
// const houseCat = {
//   ...feline,
//   isGrumpy: true,
//   personality: "unpredictable",
// };
// console.log(houseCat);

// (3) create catDog and spread canine,feline and console catDog
// const catDog = {
//   ...canine,
//   ...feline,
// };
// console.log(catDog);

// (4) create tripod and spread canine and create property legs set value 3 and console tripod.
// const tripod = {
//   ...canine,
//   legs: 3,
// };
// console.log(tripod);

// (5) create catDogClone and spread catDog
// const catDogClone = {
//   ...catDog,
// };
// console.log(catDogClone);

// (6) create random array contains ..."hello", and create object and spread catDog and console random.
// const random = [
//   ..."hello",
//   {
//     ...catDog,
//   },
// ];
// console.log(random);

// ======================================
// 006 - The Arguments Object(not new)
// ======================================
// ======================================
// 007 - Rest Paramters(new)
// ======================================
// 1) what are Rest Paramters?
// REST PARAMETERS collects all remaining arguments into an actual array

// 2) write a function which can add all the values which are passed as an arguments results into single number.
// function add(...nums) {
//   return nums.reduce((total, currentVal) => {
//     return total + currentVal;
//   });
// }
// console.log(add(2, 3, 4));
// console.log(add(2, 3, 4, 10, 20));

// 3) write a function with parameters name1,name2 and use rest paramters to store rest of the names are in an array first pass arguments bharu danchu second pass arguments bharu,danchu,danush,bhargav,sadhana
// function names(name1, name2, ...names) {
//   console.log(name1);
//   console.log(name2);
//   console.log(names);
// }
// names("bharu", "danchu");
// names("bharu", "danchu", "dhanush", "bhargav", "sadhana");

// 4) create arrow function expression multiply parameters rest parameters nums which can pass n number of arguments results into single number
// const multiply = (...nums) =>
//   nums.reduce((total, currentval) => total * currentval);
// console.log(multiply(1, 2, 3));
// console.log(multiply(1, 2, 3, 4));
// console.log(multiply(1, 2, 3, 4, 5));

// ======================================
// 008 - Destructuring Arrays
// ======================================
// 1) what is destructuring?
// DESTRUCTURING A short, clean syntax to "unpack":
// -> Values from arrays
// -> Properties from objects
// Into distinct variables
// Destructuring is To extract individual values into variables from arrays,objects,nested,parameters

// 2)
// const raceResults = [
//   "Eliud Kipchoge",
//   "Feyisa Lelisa",
//   "Galen Rupp",
//   "Ghirmay Ghebreslassie",
//   "Alphonce Simbu",
//   "Jared Ward",
// ];

// (1) extract elements 0,1,3 & last from raceResults and store in variables in old way and console.
// const word1 = raceResults[0];
// console.log(word1);
// const word2 = raceResults[1];
// console.log(word2);
// const word4 = raceResults[3];
// console.log(word4);
// const wordLast = raceResults[raceResults.length - 1];
// console.log(wordLast);

// (2) extract elements 1,2,4 from raceResults using destructuring and console.
// const [e1, e2, , e4] = raceResults;
// console.log(e1);
// console.log(e2);
// console.log(e4);

// (3) extract element 1 & use spread operator to extract remaining elements  assign to array and console
// const [first, ...others] = raceResults;
// console.log(first);
// console.log(others);

// ======================================
// 009 - Destructuring Objects
// ======================================
// ======================================
// 010 - Nested Destructuring
// ======================================
// ======================================
// 011 - Destructuring Paramters
// ======================================

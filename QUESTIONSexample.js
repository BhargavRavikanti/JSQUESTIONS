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

// ======================================
// 005 - Nested for Loops
// ======================================
// ======================================
// 006 - Intro to While Loop
// ======================================
// ======================================
// 007 - More While Loops
// ======================================
// ======================================
// 008 - Break Keyword
// ======================================
// ======================================
// 009 - For...Of Intro
// ======================================
// ======================================
// 010 - Comparing For and For...Of
// ======================================
// ======================================
// 011 - For...Of with Objects
// ======================================
// ======================================
// 012 - For...In Loops
// ======================================

////////////////////////////////
// 08 - Writing Resusable Code with Functions
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
// 09 - An Advanced Look at Functions
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

////////////////////////////////
// 010 - Apply Functions to Collections of Data
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
// ======================================
// 011 -
// ======================================
// ======================================
// 012 -
// ======================================

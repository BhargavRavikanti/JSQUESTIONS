////////////////////////////////
// 17 - Making HTTP Requests
////////////////////////////////

// ===================================
// 001 - Intro to AJAX
// ===================================
// REQUESTS
// -> XMLHTTP
// -> FETCH
// -> AXIOS (famous Library)

// AJAX  -> ASYNCHRONOUS JAVASCRIPT AND XML

// AJAJ -> ASYNCHRONOUS JAVASCRIPT AND JSON

// ===================================
// 002 - JSON & XML
// ===================================
// JSON -> JavaScript Object Notation
// XML -> Extensible Markup Language (XML)

// JavaScript Object Notation (JSON) is a standard text-based format for representing structured data based on JavaScript object syntax. It is commonly used for transmitting data in web applications (e.g., sending some data from the server to the client, so it can be displayed on a web page, or vice versa).

/*

JavaScript JSON
JSON is a format for storing and transporting data.

JSON is often used when data is sent from a server to a web page.

What is JSON?
JSON stands for JavaScript Object Notation
JSON is a lightweight data interchange format
JSON is language independent *
JSON is "self-describing" and easy to understand
* The JSON syntax is derived from JavaScript object notation syntax, but the JSON format is text only. Code for reading and generating JSON data can be written in any programming language.

JSON Example
This JSON syntax defines an employees object: an array of 3 employee records (objects):

JSON Example
{
"employees":[
  {"firstName":"John", "lastName":"Doe"},
  {"firstName":"Anna", "lastName":"Smith"},
  {"firstName":"Peter", "lastName":"Jones"}
]
}

The JSON Format Evaluates to JavaScript Objects
The JSON format is syntactically identical to the code for creating JavaScript objects.

Because of this similarity, a JavaScript program can easily convert JSON data into native JavaScript objects.

JSON Syntax Rules
Data is in name/value pairs
Data is separated by commas
Curly braces hold objects
Square brackets hold arrays

*/

// XML -> Extensible Markup Language (XML) is a markup language that provides rules to define any data. Unlike other programming languages, XML cannot perform computing operations by itself.

/*
XML is a software- and hardware-independent tool for storing and transporting data.

What is XML?
XML stands for eXtensible Markup Language
XML is a markup language much like HTML
XML was designed to store and transport data
XML was designed to be self-descriptive
XML is a W3C Recommendation
XML Does Not DO Anything
Maybe it is a little hard to understand, but XML does not DO anything.

Someone must write a piece of software to send, receive, store, or display it:

The Difference Between XML and HTML
XML and HTML were designed with different goals:

XML was designed to carry data - with focus on what data is
HTML was designed to display data - with focus on how data looks
XML tags are not predefined like HTML tags are
*/

// This is JSON format // we cannot store complicated things like functions
// {"squadName" : "Super hero squad",
// "homeTown" : "Metro City",
// "formed" : 2016,
// "secretBase" : "Super tower",
// "active" : true,
// "members" : [
//   "Molecule Man",
//   "Madame Uppercut",
//   "Eternal Flame"
// ]
// }

// ===================================
// 003 - XML HttpRequests_ The Basics
// ===================================
// XMLHttpRequest
// The "original" way of sending requests via JS.
// Does not support promises, so... lots of callbacks!
// WTF is going on with the weird captilization?
// Cluncky syntax that I find difficult to remember!

/*
// NOTES

const firstReq = new XMLHttpRequest();
firstReq.addEventListener('load', function() {
	console.log('IT WORKED!!!');
	const data = JSON.parse(this.responseText);
	for (let planet of data.results) {
		console.log(planet.name);
	}
});
firstReq.addEventListener('error', () => {
	console.log('ERROR!!!!!!');
});
firstReq.open('GET', 'https://swapi.co/api/planets/');
firstReq.send();
console.log('Request Sent!');
*/

// My Practice

// ===================================
// 004 - XMLHttpRequests_Chaining Requests
// ===================================

/*
// NOTES
const firstReq = new XMLHttpRequest();
firstReq.addEventListener('load', function() {
	console.log('FIRST REQUEST WORKED!!!');
	const data = JSON.parse(this.responseText);
	const filmURL = data.results[0].films[0];
	const filmReq = new XMLHttpRequest();
	filmReq.addEventListener('load', function() {
		console.log('SECOND REQUEST WORKED!!!');
		const filmData = JSON.parse(this.responseText);
		console.log(filmData.title);
	});
	filmReq.addEventListener('error', function(e) {
		console.log('ERROR!!', e);
	});
	filmReq.open('GET', filmURL);
	filmReq.send();
});
firstReq.addEventListener('error', (e) => {
	console.log('ERROR!!!!!!');
});
firstReq.open('GET', 'https://swapi.co/api/planets/');
firstReq.send();
console.log('Request Sent!');

*/

// My Practice

// ===================================
// 005 - A Better Way_Fetch
// ===================================
// Fetch API
// The newer way of making requests via JS
// Supports promises!
// Not supported in Internet explorer :(

// The fetch() method in JavaScript is used to request data from a server. The request can be of any type of API that returns the data in JSON or XML. The fetch() method requires one parameter, the URL to request, and returns a promise.

// Description
// The fetch() method starts the process of fetching a resource from a server.

// The fetch() method returns a Promise that resolves to a Response object.

// 😀 No need for XMLHttpRequest anymore.

// Syntax
// fetch(file)

// Parameters
// Parameter	   Description
// file	        Optional.
//              The name of a resource to fetch.

// Return Value
// Type      Description
// Promise   A Promise that resolves to a Response object.

/*
// NOTES

// const firstReq = new XMLHttpRequest();
// firstReq.addEventListener('load', function() {
// 	console.log('FIRST REQUEST WORKED!!!');
// 	const data = JSON.parse(this.responseText);
// 	const filmURL = data.results[0].films[0];
// 	const filmReq = new XMLHttpRequest();
// 	filmReq.addEventListener('load', function() {
// 		console.log('SECOND REQUEST WORKED!!!');
// 		const filmData = JSON.parse(this.responseText);
// 		console.log(filmData.title);
// 	});
// 	filmReq.addEventListener('error', function(e) {
// 		console.log('ERROR!!', e);
// 	});
// 	filmReq.open('GET', filmURL);
// 	filmReq.send();
// });
// firstReq.addEventListener('error', (e) => {
// 	console.log('ERROR!!!!!!');
// });
// firstReq.open('GET', 'https://swapi.co/api/planets/');
// firstReq.send();
// console.log('Request Sent!');

// 😀 No need for XMLHttpRequest anymore.
// The fetch() method

fetch('https://swapi.co/api/planetsuy21/')
	.then((response) => {
		if (!response.ok)
			throw new Error(`Status Code Error: ${response.status}`);

		response.json().then((data) => {
			for (let planet of data.results) {
				console.log(planet.name);
			}
		});
	})
	.catch((err) => {
		console.log('SOMETHING WENT WRONG WITH FETCH!');
		console.log(err);
	});

*/

// My Practice

// fetch("https://icanhazdadjoke.com/23/2").then((response) => {
//   console.log(response);
// });

// ===================================
// 006 - Chaining Fetch Chains
// ===================================

/*
// NOTES

*/

// My Practice
// ===================================
// 007 - Refactoring Fetch Chains
// ===================================

/*
// NOTES

*/

// My Practice
// ===================================
// 008 - An Even Better Way_Axios
// ===================================

/*
// NOTES

*/

// My Practice

// ===================================
// 009 - Sequential Axios Requests
// ===================================

/*
// NOTES

*/

// My Practice

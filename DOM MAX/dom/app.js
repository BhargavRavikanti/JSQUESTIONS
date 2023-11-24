// 003 - Document and Window Object
// console.log(document);
// console.dir(document);
// console.log(window);

// 004 - Understanding the DOM and how it's created

// 005 - Nodes & Elements - Querying the DOM Overview
// Element Nodes
// Text Nodes
// Attribute Nodes

// 006 - Selecting(Querying) Elements in the DOM
// const h1 = document.getElementById("main-title");
// console.log(h1);
// console.dir(h1);

// const li = document.getElementsByClassName("list-item");
// console.log(li);

// console.log(document.querySelector(".list-item"));
// console.log(document.querySelector("ul li:first-of-type"));
// console.log(document.querySelector("ul li:last-of-type"));
// console.log(document.querySelectorAll(".list-item"));

// 008 - Exploring and Changing DOM Properties
// const h1 = document.querySelector("h1");
// console.log(h1);
// console.log(h1.textContent); // gives text from h1 element
// console.log(h1.id); // gives id name of h1 element
// console.log(h1.className); // gives class name of h1 but we didn't add class name so got empty
// h1.textContent = "Some new Text!"; // changing text of h1
// console.log(h1);
// h1.className = "title"; // creating class with the name of title to h1
// console.log(h1);
// console.log(h1.className);
// h1.style.color = "white";
// h1.style.backgroundColor = "red";
// console.dir(h1);

// 009 - Attributes vs Properties
// const input = document.querySelector("input");
// console.log(input);
// console.dir(input);
// const input2 = document.querySelector("input");
// console.dir(input2);
// console.dir(input2.defaultValue);

// input2.value = "Some other input the user might have entered";
// console.log(input2.defaultValue);

// input.setAttribute("value", "some other default text"); // setting attribute value
// console.log(input);

// console.log(input.getAttribute("value")); // prefered method // getting attribute value
// console.log(input.defaultValue); // not prefered
// console.log(input2.defaultValue); // not preferd

// 010 - Selecting Multiple Elements & Summary
// const allLis = document.querySelectorAll("li"); // returns all li tags as NodeList // we can use array methods, loops
// console.log(allLis);
// console.log(allLis[0]);
// console.log(allLis[1]);

// // const listItemElements = document.querySelectorAll("li");
// const listItemElements = document.getElementsByTagName("li");
// for (const listItemEl of listItemElements) {
//   // console.log(listItemEl);
//   console.dir(listItemEl);
// }

// summary
// const h1 = document.getElementById("main-title");
// h1.textContent = "Some new title!";
// // h1.textContent = h1.textContent + " Iam hero!";
// h1.style.color = "white";
// h1.style.backgroundColor = "black";

// const li = document.querySelector("li:last-of-type");
// li.textContent = li.textContent + " (changed!)";

// const body = document.body;
// console.log(body.querySelector("h1"));
// console.log(body.querySelector("li"));
// console.log(body.querySelectorAll("li"));

// 011 - Traversing(means travel across or through) the DOM
// Children, Descendants, Parent & Ancestors

// Example
/*
<div>
  <p>
 A <em>test!</em>
  </p>
</div>
 */

// 1) Child
// Direct child node or element
// <p> is a child of <div>.<em> is not!

// 2) Descendant
// Direct or indirect child node or element
// <p> is a Descendant of <div>.So is <em>!

// 3) Parent
// Direct parent node or element
// <div> is a parent of <p> but not of <em>!

// Ancestor
// Direct or indirect parent node/element
// <div> is an ancestor of <p> and of <em>!

// 012 - Traversing Child Nodes
// before using below properties we need to select a parent element to traverse
// children,childNodes,firstChild,firstElementChild,lastChild,lastElementChild

// const h1 = document.getElementById("main-title");
// h1.textContent = "Some new title!";
// // h1.textContent = h1.textContent + " Iam hero!";
// h1.style.color = "white";
// h1.style.backgroundColor = "black";

// const li = document.querySelector("li:last-of-type");
// li.textContent = li.textContent + " (changed!)";

// const ul = document.querySelector("ul");
// console.log(ul);
// console.log(ul.children); // gives all direct children of ul // html collection
// console.log(ul.children[1]);
// console.log(ul.children[0]);
// console.log(ul.children[2]);

// console.log(ul.childNodes); // gives text nodes(empty text) also // gives nodelist
// console.log(ul.childNodes[0]);
// console.log(ul.childNodes[1]);
// console.log(ul.childNodes[2]);
// console.log(ul.childNodes[3]);

// console.log(ul.firstChild); // returns first text node (white space)
// console.log(ul.firstElementChild); // returns first element child of ul
// console.log(ul.lastChild);
// console.log(ul.lastElementChild); // returns last element child of ul

// 013 - Using parentNode & parentElement
// before using below properties we need to select a child element to traverse
// Using parentNode & parentElement means always refers to the nearest parent element
// you can use any one which you like or prefer to get parent element

// const h1 = document.getElementById("main-title");
// h1.textContent = "Some new title!";
// h1.style.color = "white";
// h1.style.backgroundColor = "black";

// const li = document.querySelector("li:last-of-type");
// li.textContent = li.textContent + " (changed!)";

// const liFirst = document.querySelector("li");
// console.log(liFirst);
// console.log(liFirst.parentNode); // you can only have parentNode & parentElement
// console.log(liFirst.parentElement);

// console.log(liFirst.closest("body"));
// console.log(liFirst.closest("header"));

// 014 - Selecting Sibling Elements
// previousSibling,previousElementSibling,nextSibling,nextElementSibling

// const h1 = document.getElementById("main-title");
// h1.textContent = "Some new title!";
// h1.style.color = "white";
// h1.style.backgroundColor = "black";

// const li = document.querySelector("li:last-of-type");
// li.textContent = li.textContent + " (changed!)";
// console.log(li);

// const ul = li.parentElement;
// console.log(ul);
// console.log(ul.previousSibling);
// console.log(ul.previousElementSibling);
// console.log(ul.nextSibling);
// console.log(ul.nextElementSibling);

// 015 - Traversal vs Query Methods

// const h1 = document.getElementById("main-title");
// h1.textContent = "Some new title!";
// h1.style.color = "white";
// h1.style.backgroundColor = "black";

// const li = document.querySelector("li:last-of-type");
// li.textContent = li.textContent + " (changed!)";
// console.log(li);

// Traversing (here difficult to understand)
// const ul = document.body.firstElementChild.nextElementSibling;
// console.log(ul);
// const firstLi = ul.firstElementChild;
// console.log(firstLi);

// // Query selector methods
// const uL = document.querySelector("ul");
// console.log(uL);
// const Firstli = document.querySelector("li:first-of-type");
// console.log(Firstli);
// const FirstLi = uL.firstElementChild;
// console.log(FirstLi);

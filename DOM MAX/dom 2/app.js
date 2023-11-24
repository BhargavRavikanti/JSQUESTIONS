// 016 - Styling DOM Elements
// Via style Property,Via className,Via classList

/*
const section = document.querySelector("section");
const button = document.querySelector("button");
// console.log(section);
// console.log(button);

// Via style property
// section.style.backgroundColor = "blue";
// section.className = ""; // setting className red-bg to empty
// section.className = "red-bg"; // setting className empty to red-bg
// console.log(section.className);

button.addEventListener("click", () => {
  // Via className
  // if (section.className === "red-bg visible") {
  //   section.className = "red-bg invisible";
  // } else {
  //   section.className = "red-bg visible";
  // }

  // or

  // Via classList
  section.classList.toggle("invisible");
});
*/

// 017 - Creating Elements with JS - Overview
// Creating & Inserting Elements

// HTMLstring

// innerHTML
// add(render)HTML string

// insertAdjacentHTML()
// add(render)HTML string in specific position

///////////////////////////////////////////////////////////

// createElement()

// appendChild/append()
// Append new DOM element/node

// prepend(),before(),after(),insertBefore()
// insert new DOM element/node in specific position

// replaceChild(),replaceWith()
// Replace existing DOM element/node with new one

// 018 - Adding Elements via HTML in Code
// const section = document.querySelector("section");
// console.log(section);
// console.log(section.textContent);
// console.log((section.textContent = "New content!")); // it will remove all elements and only place New content on section tag only.

// removing all elements and adding h2 to section
// console.log((section.innerHTML = "<h2> A new title! </h2>"));

// Adding an element to ul
// const list = document.querySelector("ul");
// list.innerHTML = list.innerHTML + "<li>Item 4</li>";
// list.innerHTML = list.innerHTML + "<li>Item 5</li>";
// console.log(list);
// console.log(section.textContent);

// const div = document.querySelector("div");
// console.log(div);
// console.log((div.innerHTML = div.innerHTML + "<p>Something went wrong!</p>"));
// div.insertAdjacentHTML("beforeend", "<p>Something went wrong!</p>");

// 019 - Adding Elements via createElement()

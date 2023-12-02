// method 1
// function getElement(selection) {
//   const element = document.querySelector(selection);
//   if (element) {
//     return element;
//   } else {
//     throw Error("you did not select element");
//   }
// }

// export default getElement;

// method 2
export default function (selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  } else {
    throw Error("you did not select element");
  }
}

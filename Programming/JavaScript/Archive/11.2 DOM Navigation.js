// Chapter 7 
// Describe in notes #11.
document 

document.documentElement

document.body

document.head

document.title


// Accessing the children, parents of an element 

// Children are nested 
console.log("return first child:", document.body.firstChild);
console.log("return last child:", document.body.lastChild);
console.log("return all children of body as a NodeList:", document.body.childNodes);
/* 
NodeList is not an array by default:
if we have to make it an Array
we use `Array.from()` method to do so 
*/
console.log(Array.from(document.body.childNodes));

// below will return null as <body>'s parent <html> doesn't have a child after to <body>
console.log("return next sibling:", document.body.nextSibling);

document.body.nextSibling
document.body.previousSibling
document.body.parentNode

// # ELEMENT ONLY NAVIGATION

document.body.lastElementChild // like this

document.body.nextElementSibling // like this

//  # TABLE based NAVIGATION

// # Searching the DOM
// document.getElementById
// document.getElementsByClassName

let heading = document.querySelectorAll("h1")
heading[0].style.color="green"
heading[1].style.color="violet"
Array.from(document.childNodes)[2].querySelectorAll("p")

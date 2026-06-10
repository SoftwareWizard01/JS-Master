// What is DOM? How does it represent the HTML structure ?
//DOm stands for Document Object Model. It represents the HTML document in a tree structure where each noe is an object representing the part of the document. It allows us to manipulate the HTML elements, attributes and content using JS.

// Name the types of nodes in the DOM tree?
// The types of nodes in the DOM tree are:
// 1. Element Node: Represents an HTML element, such as <div>, <p>, <a>, etc.
// 2. Text Node: Represents the text content within an element.
// 3. Attribute Node: Represents the attributes of an element, such as id, class, src, etc.
// 4. Comment Node: Represents the comments in the HTML document.

// What is the difference between element node and text node in DOM tree ?
// The difference between element node and text node in the DOM tree is:
// 1. Element node: <p>,<div>,<a> etc. It represents the HTML elements and can have attributes and child nodes.
// 1. Text node: It represents the text content within an element. It does not have attributes or child nodes.
// 2. Element node: is actual HTML tag.
// 2. Text node: is the text content inside the HTML tag. For example, in <p>Hello World</p>, <p> is an element node and "Hello World" is a text node.

// Inspect the following HTML code in the browser and identify each node
// <!DOCTYPE html>
// <html>
// <head>
//     <title>DOM Example</title>
// </head>
// <body>
//     <div>                                --> div is an element node
//         Hello <span> World </span>       --> Hello is a text node while <span> is an element node and World is
//                                              a text node inside the span element
//     </div>
// </body>
// </html>

// What is a difference between getElementById() and querySelector() method in DOM ?
// The difference between getElementById() and querySelector() method in DOM is:
// 1. getElementById(): This method is used to select an element by its unique id attribute. It returns a single element that matches the specified id. Only worked on based of the id.
// 2. querySelector(): This method is used to select the first element that matches a specified CSS selector. It can be used to select elements based on their tag name, class name, id, or any other valid CSS selector. It returns the first matching element in the document.

//What does getElementsByClassName() method return ? Is it an Array ?

// getElementsByClassName() method returns the HTMLCollection not exactly array but it is an array-like object. It is a live collection of elements that have the specified class name. It can be accessed using index and has a length property, but it does not have all the methods of an array.

// Use querySelectorAll() to select all buttons withclass ".buy-now"
const buynow = document.querySelectorAll(`.buy-now`);
console.log(buynow);

//Task 1: Select the heading of the page by ID and change its text to "Welcome to the New World Order".

const h1 = document.querySelector(`#world`);
h1.textContent = "Welcome to the New World Order";
console.log(h1);

// Task 2: Select all <li> elements and print their text using a loop.

let lis = document.querySelectorAll(`li`);
lis.forEach(function (val) {
  console.log(val.textContent);
});

// What is the difference between innerText, textContent and innerHTML ?

// innerText and textContent: Changes the text content of the element. for eg.:-> h1.innerText = "<i> Hello World </i>"
// here <i> Hello World </i> will be printed as it is on the screen.
// innerHTML: Changes the HTML content of the element, allowing you to add or modify HTML tags within an element. It can be used to insert new HTML elements or modify existing ones, while innerText and textContent only changes the text content without affecting the HTML structure.

// h1.innerHTML = "<i> Hello World </i>"; // This will convert "Hello World" in italic on the screen.

// When to use textContent instead of innerText ?
// textContent: Comparaitively faster than innerText and is a new method to change the text content of an element.It selects all the text content of an element, including hidden elements, and does not trigger a reflow of the page.

// innerText: It is an older method and is slower than textContent. It only selects the visible text content of an element and triggers a reflow of the page, which can impact performance if used frequently or on large documents. It also does not include hidden elements in its selection.

// Task 3: Select a paragraph and replace it's content with :
// { <b>Updated</b> by JavaScript }

let p = document.querySelector(`p`);
p.innerHTML = `<b>Updated</b> by JavaScript`;
console.log(p);

// How do you get an src of an image using JavaScript ?
let img = document.querySelector(`img`);
console.log(img.getAttribute(`src`));

// What does setAttribute() do ?
// Changes the attribute of any element
document
  .querySelector("img")
  .setAttribute("src", "https://wallpapercave.com/wp/wp2066094.jpg");

// Select a link and update it's href to point to https://www.sheryians.com.

document.querySelector("a").setAttribute("href", "https://www.sheryians.com");
document.querySelector("a").textContent = `Sheryians`;

// Add a title attribute to a div dynamically
let title = document
  .querySelector("div")
  .setAttribute("title", "This is a title");

// Remove the disabled attribute from a button
let btn = document.querySelector("button");
btn.removeAttribute("disabled");

// What does createElement() do ? What's returned ?
document.createElement("h2");
let h2 = "Veer Bhogya Vasundhara";
console.log(h2);

// What is the difference between appendChild() and prepend() ?
// append hamesha last mai element ko add karta hai and prepend hamesha starting mia element ko add karta hai

//Can you remove an element using removeChild() ?
// Yes you can

// Create a new list item <li>New task</li> and add it to the end of a <ul>

let ul = document.querySelector("ul");
let li = document.createElement("li");
li.textContent = "New Task";
ul.appendChild(li);

// Create a new image element with a placeholder source and add it at the top of a div
//important
let image = document.createElement("img");
let source = image.setAttribute(
  "src",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROHxYft1f_Ln_y_scKnh8-g5rLMmce7JKyPQ&s",
);
document.querySelector("div").prepend(image);

// Select the first item in a list and delete it from the DOM.
let unol = document.querySelector("ul");
let first = unol.querySelector("li");
unol.removeChild(first);

// Add a highlight class to every even item in a list
let high = document.querySelectorAll("ul li:nth-child(2n)");
high.forEach(function (val) {
  val.classList.add("highlight");
});

// Set the font size of all <p> elements to 18px using .style

let para = document.querySelectorAll("p");
para.forEach(function (val) {
  val.style.fontSize = "10px";
});

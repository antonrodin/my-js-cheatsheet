// CLASSES & ATTR

//Get the first <li> element
const firstLi = document.querySelector('li:first-child');

//Get the first children, <a> element
const link = firstLi.children[0];

let val;

// CLASSES
/***************/

//Get ClassNames
val = link.className;

//Get Arrayof Classes
val = link.classList;

//Check if contains class test
link.classList.contains('test');

//Get first Element from array of classes
val = link.classList[0];

//Add new class to element
link.classList.add('test');

//Remove class from the element
link.classList.remove('test');

//Link <a> element
val = link;

// ATTRIBUTES
/**************/

//Get href attribute
val = link.getAttribute('href');

//Set href attribute
val = link.setAttribute('href', 'http://google.com');

//Set title attribute
link.setAttribute('title', 'Google');

//Check if exists title attribute
val = link.hasAttribute('title');

//Remove title attribute
link.removeAttribute('title');
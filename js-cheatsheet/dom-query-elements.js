//Select ONLY ONE first element <li>
let element = document.querySelector('li');

//Select ONLY ONE first element with class="element"
let element = document.querySelector('element');

//Select ONLY ONE last <li> element
let element = document.querySelector('li:last-child');

//Set shit for element
element.style.color = "red";
element.style.display = "none";
element.textContent = "Foo Bar";
element.innerHTML = "<b>Foo</b> Bar";

//Get ALL elements by class name
let items = document.getElementsByClassName('collection-item');

//Get ALL <li> elements
items = document.getElementsByTagName('li');

//Variable items is not an array
items = Array.from(items);
items.reverse();

//forEach Iterator
items.forEach(element => {
    console.log(element.className);
});

//Select ALL <li> elements with class=collection-item
let elements = document.querySelectorAll('li .collection-item');
elements.forEach(function(element) {
    element.innerHTML = "<b>Shit</b>";
})
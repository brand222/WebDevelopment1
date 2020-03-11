// EXAMINE THE DOCUMENT OBJECT //
console.dir(document);

//this gives you the loopback address
console.log(document.domain);

// gives you the URL of the site
console.log(document.URL);

//gives you the title
console.log(document.title);

// gives you document type
console.log(document.doctype);

// gives head of page
console.log(document.head);

//gives you body of page
console.log(document.body);

//gives you everything
console.log(document.all);

//changes an element by it's index
//document.all[10].textContent = 'Hello';

//returns all the forms and their properties (and index for a specific form)
console.log(document.forms[0]);

//returns all the links of the page and their properties
console.log(document.links);

//returns all images
console.log(document.images);

// GETELEMENTBYID //
//console.log(document.getElementById('header-title'));
var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');
console.log(headerTitle);

// textContent ignores element styling
headerTitle.textContent = 'Hello';

//inner text respects styling towards elements
headerTitle.innerText = 'Goodbye';

//this injects the inner HTML h3 inside of the h1 tag
headerTitle.innerHTML = '<h3>Hello</h3>'

header.style.borderBottom = 'solid 3px #000';

// GETELEMENTSBYCLASSNAME //
//this returns a collection of elements based on classname provided
var items = document.getElementsByClassName('list-group-item');
console.log(items);
//accessing the collection index for a specific element
console.log(items[1]);
//changing the text of the element by index
items[1].textContent = 'Hello 2';
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'yellow';

//loops through all the rows and turns them grey
for(var i = 0; i < items.length; i++){
    items[i].style.backgroundColor = '#f4f4f4';
}

//GETSELEMENTSBYTAGNAME //
var li = document.getElementsByTagName('li');
console.log(li);

// QUERYSELECTOR //
var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #ccc';

var input = document.querySelector('input');
input.value = 'Username';

var input2 = document.getElementById('password-field');
input2.value = 'Password';

var submit = document.querySelector('input[type="submit"]');
submit.value = 'Login';

var item = document.querySelector('.list-group-item');
item.style.color = 'red';

var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'blue';

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = 'green';

// QUERYSELECTOR ALL //
var titles = document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent = 'Hello';

// uses CssSelectors to target specific elements
var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');

//changes color of odd rows
for(var i = 0; i < odd.length; i++) {
    odd[i].style.backgroundColor = '#f4f4f4';
}

//changes color of even rows
for(var j = 0; j < even.length; j++) {
    even[j].style.backgroundColor = '#ccc';
}

//TRAVERSING THE DOM //
var itemList = document.querySelector('#items');
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = '#f4f4f4';

console.log(itemList.parentNode.parentNode);
//this is basically the same thing as the parent node
console.log(itemList.parentElement);

//this also prints out the line breaks (whitespaces)
console.log(itemList.childNodes);
//this only prints out the rows (with no line breaks)
console.log(itemList.children);
itemList.children[1].style.backgroundColor = 'yellow';

// firstChild gives you the first whitespace
console.log(itemList.firstChild);
//firstElementChild gives you the first element
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = "Hello 1";
//last element
itemList.lastElementChild.textContent = 'Hello 4';

// nextSibling
//console.log(itemList.nextSibling);
// nextElementSibling
//console.log(itemList.nextElementSibling);

// previous sibling
console.log(itemList.previousSibling);
// previousElementSibling
console.log(itemList.previousElementSibling);

//create a div webelement
var newDiv = document.createElement('div');



// Add class
newDiv.className = 'hello';

// Add id
newDiv.id = 'hello1';

newDiv.setAttribute('title', 'Hello Div');

// create a text node
var newDivtext = document.createTextNode('Hello World');

// add text to div
newDiv.appendChild(newDivtext);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');


console.log(newDiv);

newDiv.style.fontSize = '30px';

container.insertBefore(newDiv, h1);

// var button = document.getElementById('button').addEventListener('click', buttonClick);

// function buttonClick(e) {
// //    // console.log('Button Clicked');
// //    document.getElementById('header-title').textContent = 'Changed';
// //    document.querySelector('#header-title').style.color = '#000000';

// //console.log(e);
// console.log(e.target);
// console.log(e.target.id);
// console.log(e.target.className);
// console.log(e.target.classList);
// var output = document.getElementById('output');
// output.innerHTML = '<h3>'+ e.target.id + '</h3>';

// //the type of the event that occurred
// console.log(e.type);

// //these tell you the position of where you click on the element
// console.log(e.clientX);
// console.log(e.clientY);
// console.log(e.offsetY);

// //this returns a boolean on whether you click it with the 'alt', 'ctrl', or 'shift' keys pressed
// console.log(e.altKey);
// console.log(e.ctrlKey);
// console.log(e.shiftKey);
// }

var button = document.getElementById('button');
var box = document.getElementById('box');

//runs when you click the element
// button.addEventListener('click', runEvent);

//runs when you double-click the element
// button.addEventListener('dblclick', runEvent);

//this runs as soon as you click
// button.addEventListener('mousedown', runEvent);

//this runs as soon as you let go of your click
// button.addEventListener('mouseup', runEvent);

// //runs every time your mouse enters the black box
// box.addEventListener('mouseenter', runEvent);
// // runs every time your mouse leaves the black box
// // box.addEventListener('mouseleave', runEvent);

// //mouseover
//  box.addEventListener('mouseover', runEvent);

//mouse out
// box.addEventListener('mouseout', runEvent);

box.addEventListener('mousemove', runEvent);

var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');
var select = document.querySelector('select');

// listens for each time you type a key into the input field
itemInput.addEventListener('keydown', runEvent);

//holding keys down and releasing keys
// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keypress', runEvent);

//when your cursor focus is inside the field
itemInput.addEventListener('focus', runEvent);

//when your focus is NO LONGER in the field
itemInput.addEventListener('blur', runEvent);


//records when you cut or paste text from the field
itemInput.addEventListener('cut', runEvent);
itemInput.addEventListener('paste', runEvent);

select.addEventListener('change', runEvent);


form.addEventListener('submit', runEvent);
function runEvent(e) {
    e.preventDefault();
console.log('EVENT TYPE: ' + e.type);

console.log(e.target.value);

// document.getElementById('output').innerHTML= '<h3>' +e.target.value+'</h3>';

// //tracks mouse movements and displays labels
// // output.innerHTML = '<h3>MouseX: '+e.offsetX+' </h3><h3>MouseY: '+ e.offsetY+'</h3>';

// // box.style.backgroundColor = "rgb("+e.offsetX+" , "+ e.offsetY+", 40)";
// document.body.style.backgroundColor = "rgb("+e.offsetX+" , "+ e.offsetY+", 40)";
}



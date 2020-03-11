// // Single element selectors
// console.log(document.getElementById('my-form'));

// //this will only select 1 element (based on what you provide)
// console.log(document.querySelector('h1'));
// // this will select multiple elements by the identifier you provide (id, name, class etc...)
// console.log(document.querySelectorAll('.item'));
// // select an item by class name
// console.log(document.getElementsByClassName('item'));
// // select item(s) by tag name
// console.log(document.getElementsByTagName('li'));


// const items = document.querySelectorAll('.item');
// // looping through each item
// items.forEach((item) => console.log(item));
// //identify all item rows
// const ul = document.querySelector('.items');
// //removes the last item row
// ul.lastElementChild.remove();
// // edit a row's text
// ul.firstElementChild.textContent = 'Hello';
// // edit another row's text
// ul.children[1].innerText = 'Brandon';
// // change the html in the element
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

// const btn = document.querySelector('.btn');
// //turns the button red
// // btn.style.background = 'red';

// /*
// Events on the DOM
// */

// //mouseover, mouseout, etc...
// btn.addEventListener('mouseover', (e) => {
//     //e.preventDefault();
//     document.querySelector('#my-form').style.background = '#ccc';
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.items').lastElementChild.innerHTML = '<h2>Hello<h2>';
// });

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    if (nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        setTimeout(() => msg.remove(), 3000);
    }
    else
    {
        const li = document.createElement('li');
        li.appendChild(
          document.createTextNode(`${nameInput.value} : ${emailInput.value}`)
        );
        userList.appendChild(li);

        //clear the fields
        nameInput.value = '';
        emailInput.value = '';
        console.log('success');
    }
}
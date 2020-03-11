//this is a message to the console
console.log("hello world");
//this is an error to the console
console.error("this is an error");
//this is a warning to the console
console.warn("This is a warning");

// var = globally scoped

//start using 'let' going forward

//always use constants unless you know you are going to reassign the variable
const score = 10;
console.log(score);

//data types = Strings, Numbers, Booleans, null, undefined

const name = "Brandon";
const age = 29;
console.log("my name is " + name);
const isCool = true;
const x = null;
const y = undefined;
let z;

//typeof returns the datatype of the variable (value) you pass
console.log(typeof name);
console.log(typeof x);
console.log(age);
console.log(typeof y);
console.log(typeof z);

//Concatenation
console.log("my name is " + name + " and my age is " + age);
// here is an easier way to concatenate
console.log(`My name is ${name} and i am ${age}`);

var s = "Hello World";
//prints out string length
console.log(s.length);
//prints out string to upper case
console.log(s.toUpperCase());
//preints out string to lower case
console.log(s.toLowerCase());
//prints out substring
console.log(s.substring(0, 5));

const words = "technology, computers, it, code";
// creates an array of the items seperated by commas and spaces
console.log(words.split(", "));

const numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers);

const fruits = ["apples", "oranges", "pears"];

console.log(fruits);
//accessing index of 1 from array
console.log(fruits[1]);
fruits[4] = "bannanas";
//put something at the end of the array
fruits.push("mangos");
//put something at the beginning of the array
fruits.unshift("strawberries");
//take something off the end of the array (takes out mangos)
fruits.pop();
//loop through array
for (var i = 0; i <= fruits.length - 1; i++) {
  console.log(fruits[i]);
}
//checks whether something is an array
console.log(Array.isArray("hello"));

console.log("here is the index of oranges " + fruits.indexOf("oranges"));

/*
Object literals
*/
const person = {
  firstName: "Brandon",
  lastName: "McDonald",
  age: 29,
  hobbies: ["boxing", "sports", "gaming"],
  address: {
    street: "51 Rainey Street",
    city: "Austin",
    state: "TX"
  }
};
console.log(person.hobbies[1]);
const { firstName, lastName } = person;
person.email = "brandon.mcdonald@yahoo.com";
console.log(person);

console.log("--------------------------------------------------");
console.log("--------------------------------------------------");
console.log("ARRAY OF OBJECTS");
console.log("--------------------------------------------------");
console.log("--------------------------------------------------");

const todos = [
  {
    id: 1,
    text: "Take out trash",
    isCompleted: true
  },
  {
    id: 2,
    text: "Meeting with boss",
    isCompleted: true
  },
  {
    id: 3,
    text: "Dentist appt",
    isCompleted: false
  }
];

console.log(todos[1].text);

//converts the object to JSON format
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

console.log("--------------------------------------------------");
console.log("--------------------------------------------------");
console.log("LOOPS");
console.log("--------------------------------------------------");
console.log("--------------------------------------------------");

//for loop
for (let i = 0; i <= 10; i++) {
  console.log(`For loops Number: ${i}`);
}

//while loops
let j = 0;
while (j <= 10) {
  console.log(j);
  j++;
}

// looping through an array
for (let i = 0; i <= todos.length - 1; i++) {
  console.log(todos[i].text);
}

//here is a for of loop in javascript
for (let todo of todos) {
  console.log(todo.id);
}

//forEach loop
todos.forEach(function(todo) {
  console.log(todo.text);
});

// map - returns an array
const todoText = todos.map(function(todo) {
  return todo.text;
});

console.log(todoText);

//filter - returns only things that you specify
const todoCompleted = todos.filter(function(todo) {
  return todo.isCompleted === true;
});

console.log(todoCompleted);

const u = 10;

// ? do this ':' (otherwise) do this
const color = u > 10 ? "red" : "blue";

console.log(color);

/*
Switch statement
*/
switch (color) {
  case "red":
    console.log("color is red");
    break;
  case "blue":
    console.log("color is blue");
    break;
  default:
    console.log("color is NOT red or blue");
    break;
}

/*Functions*/

// function addNums(num1 = 1, num2 = 1) {
// return num1 + num2;
// }

// console.log(addNums());

//here is the first way to do it
// const addNums = (num1 = 1, num2 = 1) => {
//   return num1 + num2;
// }

//now we can make it even shorter (on one line)
const addNums = (num1 = 1, num2 = 3) => num1 + num2;

console.log(addNums());

/*
OOPS
*/

//constructor function
// function Person(firstName, lastName, dob) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.dob = new Date(dob);
// }

// Person.prototype.getBirthYear = function() {
//   return this.dob.getFullYear();
// }

// Person.prototype.getFullName = function() {
//   return `${this.firstName} ${this.lastName}`;
// }

class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }

  getBirthYear() {
    return this.dob.getFullYear();
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }


}

//instantiate object
const person1 = new Person('brandon', 'mcdonald', '4-16-1990');
const person2 = new Person('madeline', 'mcdonald', '6-14-1995');

console.log(person1.getBirthYear());

console.log(person2.getFullName());

console.log(person1.getFullName());


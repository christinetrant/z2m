// change everything below to the newer Javascript!

// LET + CONST

// var a = 'test';
// var b = true;
// var c = 789;
// a = 'test2';
let a = 'test';
const b = true;
const c = 789;
a = 'test2';


// DESTRUCTURING
// To take an object or array and convert it into smaller objects, smaller elements or smaller variables
// var person = {
//     firstName : "John",
//     lastName  : "Doe",
//     age       : 50,
//     eyeColor  : "blue"
// };
// 
// var firstName = person.firstName;
// var lastName = person.lastName;
// var age = person.age;
// var eyeColor = person.eyeColor;
const person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};
let { firstName, lastName, age, eyeColor } = person;

// DESTRUCTURING IN ARRAYS
const alphabet = ['A', 'B', 'C', 'D', 'E', 'F'];
const numbers = ['1', '2', '3', '4', '5', '6'];
// We want to get first two elements of alphabet array:
// const a = alphabet[0];
// const b = alphabet[1];
// We take the element we want to destructure and place it on right - in this case it is alphabet, we want variable names a and b (surround in square brackets as it is an array).  It will take the first and second elements.
const [ a, b ] = alphabet;
console.log(a);
console.log(b);
// What if we want to skip the second element? We remove b and keep the comma
const [a,, c]
console.log(a);
console.log(c);
// SPREAD OPERATOR - 1st & 3rd element are saved into a and c, 2nd element is skipped (,) and the remaining elements are saved into variable rest using ...
const [ a,, c, ...rest ] = alphabet;
console.log(a);
console.log(c);
console.log(rest);
// Can use destructuring and spread operator to combine arrays:
// As they are on the right-hand side of equals we assign all elements in alphabet followed by all elements in numbers
const newArray = [...alphabet, ...numbers]
// same as const newArray = alphabet.concat(numbers);
console.log(newArray);

function sumAndMultiply(a, b) {
	return [a+b, a*b]
} 
const array = sumAndMultiply(2, 3);
console.log(array);
// can be destructured to:
const [sum, multiply] = sumAndMultiply(2, 3);
// default value:
const [sum, multiply, division = 'No division'] = sumAndMultiply(2, 3);
console.log(sum);
console.log(multiply);
console.log(division);

// DESTRUCTURING IN OBJECTS
const personOne = {
	name: 'Kyle',
	age: 24,
	address: {
		city: 'Long Island',
		state: 'New York',
	},
}
const personTwo = {
	name: 'Christine',
	age: 35,
	address: {
		city: 'Peckham',
		state: 'London',
	},
}
// To destructure an object we use curly brackets:
const { name, age } = personTwo;
console.log(name);
console.log(age);

// Unlike destructuring in arrays it does not need to match position it needs to match name of the key,  to change the variable name we can do:
const { name: firstName, age } = personTwo;
console.log(firstName);
console.log(age);
// We can still use default values inside here:
const { name: firstName = 'John', age, favoriteFood = 'Rice' } = personTwo;
console.log(firstName);
console.log(age);
console.log(favoriteFood);
// We can use the spread operator:
const { name, age, ...rest } = personTwo;
console.log(firstName);
console.log(age);
console.log(rest);
// We can destructure nested objects - to get the street in the address object:
const { name, age, address: { state } } = personTwo;
console.log(firstName);
console.log(age);
console.log(state);

// To combine objects:
const personOne = {
	name: 'Kyle',
	age: 24,
	address: {
		city: 'Long Island',
		state: 'New York',
	},
}
const personTwo = {
	age: 35,
	favoriteFood: 'Pizza',
}
// So personOne is put in the object first, then personTwo is put in the object and it will overwrite any elements with the same key, e.g., age will be 35 as personTwo was placed in there last and favoriteFood will be added as a new element.
const personThree = { ...personOne, ...personTwo };

function printUser(user) {
	console.log(user)
}
printUser(personOne);
// What if we only want selected elements of the object:
function printUser(user) {
	console.log(`Name is: ${user.name}.  Age is ${user.age}.`);
}
printUser(personOne);
// As we only want the name and the age of the given object we can destructure, as we will be passing in personOne, we can also add default arguments here:
function printUser({ name, age, favoriteFood = 'Watermelon' }) {
	console.log(`Name is: ${name}.  Age is ${age}.  Favorite Food is ${favoriteFood}.`);
}
printUser(personOne);

// OBJECT PROPERTIES

// var a = 'test';
// var b = true;
// var c = 789;

// var okObj = {
//   a: a,
//   b: b,
//   c: c
// };
const a = 'test';
const b = true;
const c = 789;

const okObj = { a, b, c };


// TEMPLATE STRINGS
// var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";
const message = `Hello ${firstName} have I met you before? I think we met in ${city} last summer no???`;

// DEFAULT ARGUMENTS
// default age to 10;
// function isValidAge(age) {
//     return age
// }
const isValidAge = (age = 10) => age;

// SYMBOL
// Create a symbol: "This is my first Symbol"
const sym1 = Symbol("This is my first Symbol");

// ARROW FUNCTIONS
// function whereAmI(username, location) {
//     if (username && location) {
//         return "I am not lost";
//     } else {
//         return "I am totally lost!";
//     }
// }
const whereAmI = (username, location) => username && location ? "I am not lost" : "I am totally lost!";

// or
// if not on one line curly brackets have to be added and return the ternary statement
const whereAmI = (username, location) => {
	return username && location ? "I am not lost" : "I am totally lost!";
}

// A named function with multiple in this case 2 parameters
function sum(a, b) {
	return a + b;
}
// becomes:
const sum2 = (a, b) => a + b;

// A named function with 1 parameter
function isPositive(number) {
	return number >= 0;
}
// becomes:
const isPositive2 = (number) => number >= 0;

// A named function with no parameters
function randomNumber() {
	return Math.random;
}
// becomes:
const randomNumber2 = () => Math.random;

// An anonymous function
document.addEventListener('click', function() {
	console.log('Click!')
})
// becomes:
document.addEventListener('click', () => console.log('Click!'));

// 
class Person {
	constructor(name) {
		this.name = name;
	}

	printNameArrow() {
		setTimeout(() => {
			console.log('Arrow: ' + this.name)
		}, 100)
	}

	printNameFunction() {
		setTimeout(function() {
			console.log('Function: ' + this.name)
		}, 100)
	}
}

let person = newPerson('Bob')
person.printNameArrow()
// Arrow: Bob
person.printNameFunction()
// Function: 

// using the old function syntax it redefines 'this' to the global scope as that is where the function is called.  It can't access the object 'this' whereas the arrow function can - it is more intuitive and recommended
console.log(this.name) // 
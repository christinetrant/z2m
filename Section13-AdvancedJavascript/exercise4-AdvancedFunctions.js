//Solve these problems:

//#1 Create a one line function that adds adds two parameters
const add = (a, b) => a + b;

//Closure: What does the last line return?
const addTo = x => y => x + y
var addToTen = addTo(10)
addToTen(3)
// 13

//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1)
// 31


//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5)
add5(12)
// 17

//Composing: What does the last line return?
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10)
// 16

//What are the two elements of a pure function?
// Avoiding Side Effects and functional purity
// e.g. 
var a = 1;
function b() {
	a = 2;
} 
// This changes the scope outside the function which isn't ideal.  We want to keep them in their own universe.
// Determinism:
// Anything we put into the function will get the same result, like in my background generator when random errors popped up with generating a hex number - this was a side effect and returned an error instead of desired value.

// input -> function -> return -> value


// CLOSURES: 
// A function ran, the function execures.  It's never going to be run again BUT it's going to remember that there are references to thos variables so the child scope always has access to the parent scope:
const first = () => {
	const greet = 'Hi';
	const second = () => {
		const name = 'Bobby';
		alert(greet);
	}
	return second;
}

const newFunc = first();
newFunc();
// second has access to greet but first does no have access to name.


// CURRYING
const multiply = (a, b) => a +b;
const curriedMulitply = (a) = (b) => a + b;
const multiplyBy5(5);


// COMPOSE
const compose = (f, g) => (a) => f(g(a));
//  f & g are both functions
const sum = (num) => num + 1;
compose(sum, sum)(5);
// Answer will be (sum(sum(5)))
// sum(5+1) = 6
// 6 + 1 = 7
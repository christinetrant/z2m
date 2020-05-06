// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

turtle = turtle.padStart(8);
rabbit = rabbit.padStart(8);

// it should look like this:
'     ||<- Start line'
'       🐢'
'       🐇'

// when you do:
console.log(startLine);
console.log(turtle);
console.log(rabbit);


// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, '=');
// "🐢======="

rabbit.trim().padEnd(9, ' Rabbit')
// "🐇 Rabbit"

rabbit.trim().padStart(4, '+')
// "++🐇"


// #3) Get the below object to go from:
let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
}
// to this:
'my name is Rudolf the reindeer'

let temp = Object.entries(obj).map(value => value.join(' '));
temp.join(' ');
// becomes:
Object.entries(obj).map(value => value.join(' ')).join(' ');

// LECTURE NOTES
// Object.values
// Object.entries
// Object.keys (old)

let obj = {
	username0: 'Santa',
	username1: 'Rudolf',
	username2: 'Grinch',
}

Object.keys(obj).forEach((key, index) => {
	console.log(key, obj[key]);
});
// username0 Santa
// username1 Rudolf
// username2 Grinch

Object.values(obj).forEach(value => {
	console.log(value);
});
// Santa
// Rudolf
// Grinch

Object.entries(obj).forEach(value => {
	console.log(value);
});
// ["username0", "Santa"]
// ["username1", "Rudolf"]
// ["username2", "Grinch"]

Object.entries(obj).map(value => {
	return value[1] + value[0].replace('username', '');
})
// ["Santa0", "Rudolf1", "Grinch2"]
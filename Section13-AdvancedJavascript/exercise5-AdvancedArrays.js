// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },
];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
let newArray = [];
array.forEach(arr => {
  // object destructuring
  let { username } = arr;
  newArray.push(username + '!');
});
console.log('forEach', newArray);

//Create an array using map that has all the usernames with a "? to each of the usernames
const mapArray = array.map(arr => {
  let { username } = arr;
  return username = (username+'?');
});
console.log('map', mapArray);

//Filter the array to only include users who are on team: red
const filterArray = array.filter(arr => arr.team === 'red');
console.log('filter', filterArray);

//Find out the total score of all users using reduce
const reduceArray = array.reduce((acc, num) => {
  return acc + num.score;
}, 0);
console.log('reduce', reduceArray);

// (1), what is the value of i?
// The index of array - 0, 1, 2, 3, 4, 5
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
// const newArray = arrayNum.map((num, i) => {
// 	console.log(num, i);
// 	alert(num);
// 	return num * 2;
// })
const newArray = arrayNum.map((num, i) => num * 2);

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const mapArray2 = array.map(arr => {
  const innerArray = arr.items.map(arr2 => {
    // let {item} = arr2
    return arr2+'!';
  })
  arr.items = innerArray;
  return array;
});
console.log('map', mapArray2);

// LECTURE NOTES:
const array = [1, 2, 10, 16];

// For Each Loop
// forEach can have multiple lines of code and does whatever we want it to on each element 
const double = [];
const newArray = array.forEach((num) => {
	double.push(num*2);
});
console.log('forEach', double);

// Map, filter, reduce
// These are all pure functions with no side effects

// With map there is a restriciton - it expects there to be a return element, but it will create a new array
const mapArray = array.map((num) => {
	return num*2;
});
console.log('map', mapArray);
// With a single parameter we can remove brackets and as return is used it can be moved to one line of code & curly brackets removed
// const mapArray = array.map(num => num*2);

// Filter
// const filterArray = array.filter(num => {
// 	return num > 5;
// });
const filterArray = array.filter(num => num > 5);
console.log('filter', filterArray);

// Reduce
const reduceArray = array.reduce((accumulator, num) => {
	// accumulator is something where we can store info that happens in body of function
	return accumulator + num;
	// everytime you iterate through array -> accumulator plus 1 will equal 29:
	// 0 + 1
	// 1 + 2
	// 3 + 10
	// 13 + 16
	// As accumulator is set to 0 in line below answer is 29
}, 0); 
console.log('reduce', reduceArray);





















// DELETE AFTER!

//Create an array using map that has all the usernames with a "? to each of the usernames
const mapUserArray = array.map(user => {
	let { username } = user;
	return username + '?';
});
console.log('map', mapUserArray);

//Filter the array to only include users who are on team: red
// const filterUserArray = array.filter(t => {
// 	let {team} = t;
// 	if(team === 'red') {
// 		return team;
// 	}
// });
const filterUserArray = array.filter(user => user.team === 'red');
console.log('filter', filterUserArray);
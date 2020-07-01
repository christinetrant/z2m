// LECTURE NOTES:
const array = [1, 2, 10, 16];

// FOR EACH LOOP
// forEach can have multiple lines of code and does whatever we want it to on each element 
const double = [];
const newArray = array.forEach((num) => {
  double.push(num*2);
});
console.log('forEach', double);

// MAP, FILTER, REDUCE
// These are all pure functions with no side effects

// MAP
// With map there is a restriciton - it expects there to be a return element, but it will create a new array
const mapArray = array.map((num) => {
  return num*2;
});
console.log('map', mapArray);
// With a single parameter we can remove brackets and as return is used it can be moved to one line of code & curly brackets removed
// const mapArray = array.map(num => num*2);

// FILTER
// const filterArray = array.filter(num => {
//  return num > 5;
// });
const filterArray = array.filter(num => num > 5);
console.log('filter', filterArray);

// REDUCE
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

//ADDTIONAL NOTES (from Web Dev Simplified: https://www.youtube.com/watch?v=R8rmfD9Y5-c)
const items = [
  { name: 'Bike', price: 100 },
  { name: 'TV', price: 200 },
  { name: 'Album', price: 10 },
  { name: 'Book', price: 5 },
  { name: 'Phone', price: 500 },
  { name: 'Computer', price: 1000 },
  { name: 'Keyboard', price: 25 },
]

// FILTER
// Filter to get all items that are less than 100:
const filteredItems = items.filter((items) => {
  return item.price <= 100;
}) 
console.log(filteredItems);

// MAP
// Map allows you to take one array and convert it into a new array so all the items in the array are going to look slightly different
// If we want to get the name of every item: 
const itemNames = items.map((item) => {
  return item.name;
})
console.log(itemNames);

// FIND
// Allows you to find a single object in an array, note that it will return the first item in array that matches the condition
// If we want to find the item with name of 'Book':
const foundItem = items.find((item) => {
  return item.name === 'Book';
})
console.log(foundItem);

// FOREACH
// ForEach does not return anything
// To print out all item prices:
items.forEach((item) => {
  console.log(item.price);
})

// SOME
// returns true or false
// To check if the array contains any items that are less than 100:
const hasInexpensiveItems = items.some((item) => {
  return item.price <= 100;
})
console.log(hasInexpensiveItems);

// EVERY
// Similar to some but it checks every item in array
// To check if every item is under 100 will return false:
const hasInexpensiveItems = items.every((item) => {
  return item.price <= 100;
})
console.log(hasInexpensiveItems); // false
// But to check if every item is under 1000 will return true:
const hasInexpensiveItems = items.every((item) => {
  return item.price <= 1000;
})
console.log(hasInexpensiveItems); // true

// REDUCE
// It is slightly different as it is doing an operation on the array and returning a combination of all those different operations
// If we want to get the total price of all the items in the array:
const total = items.reduce((currentTotal, item) => {
  return item.price + currentTotal;
}, 0)
console.log(total); // 1840

// INCLUDES
// It doesn't take a function it just takes a single argument
const items = [1, 2, 3, 4, 5];
// Let's check if two is inside the array:
const includesTwo = items.includes(2);
console.log(includesTwo); // true



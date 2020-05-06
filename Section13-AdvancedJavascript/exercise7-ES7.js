// Solve the below problems:


// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
dragons.includes('John');
console.log(dragons);
// false

// #2) Check if this array includes any name that has "John" inside of it. If it does, return that name or names in an array.
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
const checkDragons = dragons.filter(i => i.includes('John'));
console.log('filter', checkDragons);

// #3) Create a function that calulates the power of 100 of a number entered as a parameter
const power100 = (num) => num**100;
power100(2);

// #4) Useing your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result
power100(10000);
// infinity
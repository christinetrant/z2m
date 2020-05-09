// DEBUGGING
// Looking at code and figuring out why it isn't runnin as expected
// Simplify so that you can understand - so if we have a complex function like below:
const flattened = [[0,1], [2,3], [4,5]].reduce((a,b) => a.concat(b), [])
// Break it down
// We can see reduce so we know that a is the accumulator & it begins as an empty array, b looks like it loops/iterates over the 3 nested arrays ->
const flattened = [[0,1], [2,3], [4,5]].reduce((accumulator,array) => accumulator.concat(array), []);
// Using concat it will combine the accumulator to the array it iterates over - we can check by console logging the accumulator and array to figure out what it is doing:
const flattened = [[0,1], [2,3], [4,5]].reduce((accumulator, array) => {
	console.log(array)
	console.log(accumulator)
	return accumulator.concat(array)
}, []);
// Console:
// [0, 1]				// first iteration over index 0
// []						// accumulator is empty array
// [2, 3]				// second iteration
// [0, 1]				// accumulator is [0, 1]
// [4, 5]				// third iteration
// [0, 1, 2, 3]	// accumulator is [0, 1, 2, 3]
// Result of flattened:
// [0, 1, 2, 3, 4, 5]
// So we can see it just flattens the array

// instead of using console.log we can use DEBUGGER
const flattened = [[0,1], [2,3], [4,5]].reduce((accumulator, array) => {
	debugger;
	return accumulator.concat(array)
}, []);
// when we run this in the console we can go step by step through the function - it is a great tool!


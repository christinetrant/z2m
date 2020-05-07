// Solve the below questions:

// #1 Turn this array into a new array: [1,2,3,[4],[5]]. Bonus if you can do it on one line
const array = [[1],[2],[3],[[[4]]],[[[5]]]]
console.log(array.flat(2))
// [1, 2, 3, [4], [5]]


// #2 Turn this array into a new array: [ 'Hello young grasshopper!', 'you are', 'learning fast!' ]
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
let greet1 = greeting.flatMap(x => x.join(' '));
// ["Hello young grasshopper!", "you are", "learning fast!"]
// 0: "Hello young grasshopper!"
// 1: "you are"
// 2: "learning fast!"


//#3 Turn the greeting array above into a string: 'Hello young grasshopper you are learning fast!'
// greeting.flat().join(' ');
greet1.join(' ');
// "Hello young grasshopper! you are learning fast!"

// Not the best way and leaves a space at end!
greeting.flat().reduce((a, x) => {
	return a + x + ' ';
},'')
// "Hello young grasshopper! you are learning fast! "


//#4 Turn the trapped 3 number into: [3]
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
trapped.flat(50) // [3]
// or
trapped.flat(Infinity) // [3]


//#5 Clean up this email to have no whitespaces. Make the answer be in a single line (return a new string):
const userEmail3 = '     cannotfillemailformcorrectly@gmail.com   '
const newString = userEmail3.trimStart().trimEnd()
// "cannotfillemailformcorrectly@gmail.com"


//#6 Turn the below users (value is their ID number) into an array: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
const users = { user1: 18273, user2: 92833, user3: 90315 }
const usersArr = Object.entries(users)
// [Array(2), Array(2), Array(2)]
// 0: (2) ["user1", 18273]
// 1: (2) ["user2", 92833]
// 2: (2) ["user3", 90315]


//#7 change the output array of the above to have the user's IDs multiplied by 2 -- Should output:[ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]

// let temp = Object.entries(users).map(value => value[1]*2);
// SO CLOSE!!!! Above answer where i got stuck after too long
let temp = Object.entries(users).map(value => {
	return [value[0], value[1]*2]
});


//#8 change the output array of question #7 back into an object with all the users IDs updated to their new version. Should output: { user1: 36546, user2: 185666, user3: 180630 }
const usersObj = Object.fromEntries(temp);








// LECTURE NOTES:
// FLAT
// flattens nested array - default is one level
const array = [1, [2, 3], [4, 5]]
array.flat()
// [1, 2, 3, 4, 5]

const array2 = [1, 2, [3, 4, [5]]]
array2.flat()
// [1, 2, 3, 4, [5]]
array2.flat(2)
// [1, 2, 3, 4, 5]

// With many nested arrays we can see that there are less than 50 levels so we can flatten by 50:
const jurassicPark = [['🦕', '🦗'], '🦔', '🦍', ['🦩', '🐩'], [[[['🦖']]], '🐅'], ['🦚', '🦇']]
jurassicPark.flat(50);
// ["🦕", "🦗", "🦔", "🦍", "🦩", "🐩", "🦖", "🐅", "🦚", "🦇"]

const entries = ['Bob', 'Sally',,,,,,,'Cindy'];
// ["Bob", "Sally", empty × 6, "Cindy"]
entries.flat();
// ["Bob", "Sally", "Cindy"]

// FLAT MAP
// Will map over the array and flatten as well as add a T-rex to the end of flattened array
// First, map gets executed and the result of it gets flattened afterwards
const jurassicParkChaos = jurassicPark.flatMap(creature => creature + '🦖');
// ["🦕,🦗🦖", "🦔🦖", "🦍🦖", "🦩,🐩🦖", "🦖,🐅🦖", "🦚,🦇🦖"]
// 0: "🦕,🦗🦖"
// 1: "🦔🦖"
// 2: "🦍🦖"
// 3: "🦩,🐩🦖"
// 4: "🦖,🐅🦖"
// 5: "🦚,🦇🦖"

// TRIM END & TRIM START
const userEmail1 = '              user1@gmail.com'
const userEmail2 = 'imarealboy@hotmail.com         '
console.log(userEmail1.trimStart());
console.log(userEmail2.trimEnd());
// user1@gmail.com
// imarealboy@hotmail.com

// FROM ENTRIES
// The opposite to entries in Advanced Arryas - this takes an array and converts it into an object:
userProfiles = [['commanderTom', 23], ['derekZlander', 40], ['Hansel', 32]]
Object.fromEntries(userProfiles);
// {commanderTom: 23, derekZlander: 40, Hansel: 32}

// So from this object we could use entries() and get the original array:
const obj = Object.fromEntries(userProfiles);
Object.entries(obj);
// [Array(2), Array(2), Array(2)]
// 0: (2) ["commanderTom", 23]
// 1: (2) ["derekZlander", 40]
// 2: (2) ["Hansel", 32]

// TRY CATCH
try {
	4+5
} catch {

}
// 9 which is the same as just doing 4+5
// But if we have bob + 'hi' - bob is not defined so:
try {
	bob + 'hi'
} catch {
	console.log("Something's not right")
}
// Something's not right

// In older versions of ECMAScript we had to add an error parameter for catch to work:
try {
	bob + 'hi'
} catch(e) {
	console.log("Something's not right: " + e)
}
// Something's not right: ReferenceError: bob is not defined
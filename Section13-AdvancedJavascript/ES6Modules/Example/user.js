// class User {
// 	constructor(name, age) {
// 		this.name = name
// 		this.age = age
// 	}
// }
// function printName(user) {
// 	console.log(`User's name is ${user.name}.`);
// }
// function printAge(user) {
// 	console.log(`User's age is ${user.age}.`);
// }

// // We want to export the user class as the export default
// export default User
// // We can export the two functions with curly brackets
// export { printName, printAge }


// OR
// Instead of exporting at the end of the file we can export as we go along:
export default class User {
	constructor(name, age) {
		this.name = name
		this.age = age
	}
}
export function printName(user) {
	console.log(`User's name is ${user.name}.`);
}
export function printAge(user) {
	console.log(`User's age is ${user.age}.`);
}
// './' to use relative path or '/' to use absolute path
// We don't have to use the same name as in user.js 
// import User from './user.js'
// import U from './user.js'
// To import the functions we need to use curly brackets
// import U, { printName, printAge } from './user.js'
// If we want to change the name of functions we need to do:
import U, { printName as printUserName, printAge } from './user.js'


const user = new U('Bob', 11)
console.log(user)
printUserName(user)
printAge(user)
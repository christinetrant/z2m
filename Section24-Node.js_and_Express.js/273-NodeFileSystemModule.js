// NODE FILE SYSTEM MODULE
// fs stands for file system:
/*
	const fs = require('fs');

	fs.readFile('./hello.txt', (err, data) => {
		if(err) {
			console.log('error!')
		}
		console.log(data)
	})
*/
// Result:  
// <Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64>  
// To get it as a string we need to parse the data using toString in utf8 which is default:

const fs = require('fs');

fs.readFile('./hello.txt', (err, data) => {
	if(err) {
		console.log('error!')
	}
	console.log('async', data.toString())
	// same as console.log(data.toString('utf8'))
})


const file = fs.readFileSync('./hello.txt');
console.log('sync', file.toString())

// readFileSync means it will execute immediately
// readFile like javascript is asynchronous so it has a callback function - it will carry out the function in the background while the rest of the code is ran, once all functions are done it will go back to the asynchronous code with the result or error



// APPEND
// If no such file exists it will create a new one
// Takes 3 parameters - name of file, content of file and error
fs.appendFile('./hello.txt', ' This is so cool!', err => {
	if(err) {
		console.log('Oh no! ', err);
	}
});
// IF we check our hello.txt we can see 'This is so cool' has been added


// WRITE
// Creates a new file
fs.writeFile('bye.txt', 'Sad to see you go', err => {
	if(err) {
		console.log(err)
	}
})


// DELETE
fs.unlink('./bye.txt', err => {
	if(err) {
		console.log(err)
	}
	console.log('Deleted!')
})

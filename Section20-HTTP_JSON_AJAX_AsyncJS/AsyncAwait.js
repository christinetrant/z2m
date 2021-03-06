// Async Await

// This promise:
movePlayer(100, 'Left')
	.then(() => movePlayer(400, 'Left'))
	.then(() => movePlayer(10, 'Right'))
	.then(() => movePlayer(330, 'Left'))
// above promise as an async await function:
async function playerStart() {
	await movePlayer(100, 'Left')
	await movePlayer(400, 'Left')
	await movePlayer(10, 'Right')
	await movePlayer(330, 'Left')
}


fetch('https://jsonplaceholder.typicode.com/users')
	.then(response => response.json())
	.then(console.log)

// becomes:
async function fetchUsers() {
	const resp = await fetch('https://jsonplaceholder.typicode.com/users')
	const data = await resp.json();
	console.log(data);
}


const urls = [
	'https://jsonplaceholder.typicode.com/users',
	'https://jsonplaceholder.typicode.com/posts',
	'https://jsonplaceholder.typicode.com/albums'
]

Promise.all(urls.map(url => {
	return fetch(url).then(response => response.json())
})).then(results => {
	console.log(results[0])
	console.log(results[1])
	console.log(results[2])
}).catch(() => console.log('error'))

// becomes: 
const getData = async function() {
	const [ users, posts, albums ] = await Promise.all(urls.map(url => {
		return fetch(url).then(response => response.json())
	}))
	console.log('users', users)
	console.log('posts', posts)
	console.log('albums', albums)
}

// Note that above there is no catch - we use try catch loop:
const getData = async function() {
	try {
		const [ users, posts, albums ] = await Promise.all(urls.map(url => {
			return fetch(url).then(response => response.json())
		}))
		console.log('users', users)
		console.log('posts', posts)
		console.log('albums', albums)
	} catch (err) {
		console.log('Error:', err)
	}
}










/***********************************************/
/*****     WEB DEV SIMPLIFIED EXAMPLES     *****/
/***********************************************/
function makeRequest(location) {
	return new Promise((resolve, reject) => {
		console.log(`Making request to ${location}`)
		if(location === 'Google') {
			resolve('Google says hi')
		} else {
			reject('We can only talk to Google')
		}
	})
}

function processRequest(response) {
	return new Promise((resolve, reject) => {
		console.log('Processing response')
		resolve(`Extra information + ${response}`)
	})
}

// Promise
makeRequest('Google').then(response => {
	console.log('Response Received')
	return processRequest(response)
}).then(processResponse => {
	console.log(processResponse)
}).catch(err => {
	console.log(err)
})
// If we have 'Facebook' instead of Google we will get the error response

// Async function
async function doWork() {
	try {
		const response = await makeRequest('Google')
		console.log('Response Received')
		const processResponse = await processRequest(response)
	} catch (err) {
		console.log(err)
	}
}
doWork()
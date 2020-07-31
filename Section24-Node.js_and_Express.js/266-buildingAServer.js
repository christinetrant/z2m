// CREATING A SERVER

// In package.json we want nodemon to listen to server.js so we type:

/* 
	"scripts": {
    "start": "nodemon server.js"
  }, 
*/

// Then in terminal to start nodemon:
/* 
	npm start 
*/

// Node comes with its own HTTP module and that's what we're going to use to create our server:
const http = require('http');

// We simply grab the HTTP module and then create a server by defining it saying 'http.createServer()' and create a function
const server = http.createServer(() => {
	console.log('I hear you, thanks for the request!')
})

// And then finally we have to do 'server.listen()' and give it the port number that we want to listen for.
server.listen(3000);

// In terminal type: node server.js
// And it looks like it's just hanging there.
// But if we go to localhost:3000 on our browser then back to terminal we can see 'I hear you, thanks for the request!'
// It's running here in the Terminal. But it's listening to connections.


// Let's use the parameters that 'createServer' gets us.
// Any time we try to connect, we have a 'request' then a 'response' parameter that we can use:
const http = require('http');

const server = http.createServer((request, response) => {
	response.setHeader('Content-Type', 'text/html');
	response.end('<h1>Hello</h1>');
})
server.listen(3000);

// Run nodemon (npm start), go back and refresh and we get 'helloooooo'; go to the Network tab and we see that localhost gets a 200 response; if we click on localhost we see that the response was 'Hello'
// If we go to Headers it was a 200 status code and the content type was 'text/html'.

// We can also listen to requests.
// So for example we can console.log 'request.headers', 'method' and finally something like 'url'
const http = require('http');

const server = http.createServer((request, response) => {
	console.log('headers', request.headers)
	console.log('method', request.method)
	console.log('url', request.url)
	response.setHeader('Content-Type', 'text/html');
	response.end('<h1>Hello</h1>');
})
server.listen(3000);


// 'request' gives us a lot information about the requests that we receive.
// headers are 'localhost: 3000'.
// We see that 'user-agent' was Mozilla, Windows. So that's what we used.
// And the method was a 'GET' method and the url was just the backslash [\].

// If I now enter 'localhost:3000/profile/123'
// I get 'method GET' and 'url' was '/profile/123'
// So we get information about the request that the front-end made, which is very cool.

// Now with our response we responded with 'text/html' but you remember JSON right? We talked about how useful JSON is when doing AJAX requests.

// Of course if I go and change 'Content-Type' to 'application/json' then you'll just have to get used to this but this is the way you say that the content type is JSON.
const http = require('http');

const server = http.createServer((request, response) => {
	console.log('headers', request.headers)
	console.log('method', request.method)
	console.log('url', request.url)

	const user = {
		name: 'John',
		hobby: 'skating'
	}
	response.setHeader('Content-Type', 'application/json');
	response.end(JSON.stringify(user));
})
server.listen(3000);
// Now we can send a JavaScript object such as 'user' and will say "name: 'John'" "hobby: 'Skating'".

// Now this user, I can pass here, but remember in order to transfer between the wires we need to use 'JSON.stringify'.
// But again we're changing this object into a JSON string so that we can send it over the wires.

// If I save and let's go back and refresh I get – look at that! – a JSON response again "name: 'John', hobby: 'skating'" and if I click on the Network tab here I see that the 'Content-Type' is 'application/json' and the response is in JSON format.

// So on the front-end we'll run 'json.parse()'

// And then this [{"name:"John","hobby":"Skating"}] in order to convert it to a JavaScript object.

// We've just created our very first server but this HTTP is pretty bare bones; as you can imagine, building servers is something that everybody does that has a website and there are many tools that we can use now that are more elegant than running HTTP, and the most popular and the best one to use with Node.js is something called Express.js

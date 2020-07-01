// people use libraries just like we used React on the front-end on top of JavaScript to make our lives easier and build faster more robust servers.

// And there are many libraries that people use with Node to create a server. The most popular one at the momenet is Express.
// There's other ones like Koa, Meteor, Hapi, but their usage is very very small.

// So first we need to install Express.
/* 
	npm install express 
*/

// The way you create an Express server is very simple: you simply do:
const express = require('express');

// // We have to do a 'const app' and then to create that app, to run Express, we simply do 'express()'
const app = express();
// // And then finally
app.listen(3000);

// We have Express running.
/* 
	npm start 
*/
// Then to localhost:3000 we see 'Cannot GET' because we're not doing anything. But in just three lines we have a server.

// To do a GET request with Express we simply do
const express = require('express');

const app = express();
// 'app.get()' – in the first parameter is the path; we'll just do the route path ['/'].
// And the second parameter receives a request and a response and in Express
app.get('/', (req, res) => {
	res.send("hello")
	// can also send html
	res.send("<h1>hello</h1>")
	// can also send JSON and it automatically does the 'JSON.stringify()' and returns a JSON Content-Type an 'application/json' Content-Type with the response that is JSON.
	const user = {
		name: 'Sally',
		hobby: 'soccer'
	}
	res.send(user);
})
app.listen(3000);

// We can also do POST requests.

// So for example if I did 'post' '/profile', well now if I refresh I get an error because now I've made the Request Method, which was GET from the browser.
app.post('/profile', (req, res) => {
	const user = {
		name: 'Sally',
		hobby: 'soccer'
	}
})
app.listen(3000);


// But just to show you how Express works I can keep adding these routes - let's do 'get' a '/profile' that returns "getting profile".
app.get('/profile', (req, res) => {
	res.send("getting profile");
})
// And if I do a another 'get' this time to the 'root' url [/] and this one I'll just say "getting root"
app.get('/', (req, res) => {
	res.send("getting root");
})

app.post('/profile', (req, res) => {
	const user = {
		name: 'Sally',
		hobby: 'soccer'
	}
	res.send(user);
})
app.listen(3000);
// if I save this now and refresh '/profile' I'll get a '200 OK' with the response of 'getting pro and if I do no '/profile' and just the 'root' url I'll I get 'root'.

// And the way Express works is it checks each one line by line.

// So for example it will check, "Hey did the GET request have the 'root' url [/]?".

// "Did the GET request have '/profile'.

// Did the POST request have '/profile'.

// And if it matches any of these it will run whatever the function inside of it is.

// If I do a url that doesn't exist I get a '404 Not Found' because we did a GET request to this url that doesn't exist. So using this we can use the GET method the POST method, the PUT method and the DELETE method.

// But as we can see it's a simple matter of saying if you go to this route do this if you go to this one do this and everything is just logical and trickles all the way down.
// MIDDLEWARE
// If I run the server here I just have a simple server that sends 'test test', Express has a concept of middleware and if I do 'app.use()' this is a generic Express middleware that I can enter in here.

// And what middleware does is – as the request is coming in it's going to pass through this 'use' function and then trickle down to whatever we get:
// POST, PUT, DELETE and this middleware is going to do something to the request that we just had in order to perhaps make it easier to work with down here.

const express = require('express');

const app = express();

// Middleware
// 'app.use()' receives 'request', 'response' and then something called 'next'.
app.use((req, res, next) => {
	console.log('<h1>Hello</h1>');
	// If I go back I see that 'helllooo' gets triggered because I'm console logging it but it never reaches here because in order for the middleware to keep passing data through it needs to call 'next' - The third parameter.
	next();
})


app.get('/', (req, res) => {
	res.send('test test');
})

app.listen(3000);


// So now by calling 'next' if I refresh I receive 'testest'.
// So the middleware the way it works is we use 'app.use()' it gets the requests of the website; the request comes through.

// We can do whatever we want with it.

// In our case we're not really touching it we're just console logging 'helllooo' and then we hit next and then Express keeps running through these [app.get() and app.listen()] functions.

// I just wanted to show you the basic concept of middleware: something that receives ahead of time before we get to the routes, the request, modifies it and then passes the next function to keep it going.
// RESTful API
// A REST API defines a set of functions which developers can perform requests and receive responses via a HTTP protocol such as GET, POST, PUT, DELETE.

// A web browser sends a request and just hopes that the server returns what the browser asked for.
// A Google server can send us whatever it wants.  It doesn't have to follow the rules that perhaps the web browser sets. 

// With RESTful API we're able to create an API that is RESTful – something that follows the rules that everybody can agree on so that we have compatibility between different systems.

// So a RESTful API is an architectural style and it's an approach to communications; an agreed upon set of rules so everyone plays nicely. 

/* A RESTful API users 
 - GET to receive a resource, 
 - PUT to change the state or update a resource,  - a POST that creates a resource, and a 
 - DELETE to remove it.
*/

// And that's something that we've already talked about, and the RESTful API is a way to define our server so that it specifies what it can provide and how to use it.  In other words the URL parameters should make sense.

/* EXAMPLE
 if we're doing '/profile' – we expect that 
 - if it's a GET request we're going to get a profile. 
 - if it's a POST request we're going to add a profile.
 - if it's a PUT perhaps we're updating the profile, and this URL makes sense.
*/

/* REST APis are something called 'stateless' – meaning that calls can be made independently of one another and each call contains all the data necessary to complete itself successfully. A server doesn't need to keep memorizing things.

Each request that comes in has enough information that the server can respond with, regardless of who that person is.
*/
// So in this example let's build a small little app that has a RESTful API.
// npm start
/*
	const express = require('express');

	const app = express();

	app.use(express.urlencoded({extended: true}))
	app.use(express.json())

	app.get('/', (req, res) => {
		console.log(req.query);
		console.log(req.body)
		console.log(req.headers);
		console.log(req.params);
	}) 
*/
/*
'req.query' is what we get when we do a GET query.
'console.log(req.query)'
go to localhost and in here – add a question mark to say that this is a query string and say e.g., 
	localhost:3000/name=andrei&age=31
Press enter and in node terminal we get the object:
	{ name: 'andrei', age: '31' }
*/

// We also have request body [req.body], which again we've talked about – using something like your 'urlencoded' or 'JSON' body-parsers, we can add that middleware to receive whatever the request sends in the body.

// We also have request dot headers [req.headers].
// 'console.log(req.headers)' well this time using Postman I can say in the header – and it has a nice Headers tab - you see that we have Content-Type 'application/json', which automatically does it because the last request was a JSON request.

// But I can put in anything here I can say 'name' is 'andrei' – or this time just to change it we'll say 'sally' If I send this I see that now (req.header) has all these headers but also – name: 'sally'.

// And then finally we also have something called (req.params)
// And if 'console.log(req.params)' – this is a syntax where you use the parameters of the URL.
/* If I do the semicolon and then let's say 'id' e.g. 
app.get('/:id', (req, res) => {
	console.log(req.params)
}) 
['localhost:3000/:id'] – I save this and now we have access to whatever the parameter is of the URL.
// So let's just say 'localhost:3000/1234' and I'll remove the header for now.
// If I 'Send' I now have { id: '1234' } right.


// we also want to respond with a status, let's say a status of 404 and we could say send("not found") if I refresh and send now, I get 'not found' with a status of 404.
/* 
app.get('/:id', (req, res) => {
	console.log(req.params)
	res.status(404).send('not found')
})
*/
// And again you customize – so that we have a RESTful API – the GET, POST, PUT, and DELETE to follow the rules that the web browsers expect.


// Static
// Static assets like index.html, css, javascript etc
//Within the public folder is a simple html file
const express = require('express');

const app = express();
app.use(express.static(__dirname + '/public'))

app.listen(3000);
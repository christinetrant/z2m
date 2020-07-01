// 270. POSTMAN

// app.use(express.urlencoded({extended: false}));
// app.use(express.json());


// const express = require('express');

// const app = express();

// app.get('/', (req, res) => {
// 	res.send("getting root");
// });

// app.get('/profile', (req, res) => {
// 	res.send("getting profile");
// });

// app.post('/profile', (req,res) => {
// 	const user = {
// 		name: 'Sally',
// 		hobby: 'soccer'
// 	}
// 	res.send(user);
// });

// app.listen(3000);
// Welcome back. Let's try and get this 'post' request to work, that we couldn't get in the previous video.

// Now in order for us to test something more than just GET, well we can use the Terminal but there's a really nice tool that allows us to make these requests to a server and see what we get back.

// And it's called Postman.

// If you go to www.getpostman.com it is one of the best tools if you're ever working with a server.

// We see the ones that we care about DELETE, PUT, POST, GET right there and you simply enter the URL that you want to have this running on.

// So in our example let's do 'npm start' again.

// And while the server is running let's just go to '/profile'.

// And then in here we want to say 'localhost:3000' – that's the port that we gave it – and we'll say

// '/profile'

// So we want to do a GET request over here.

// If I click send I get 'getting profile'. It gives me the Headers and the Body, which is great, but now because we have this tool we can also do a POST request.

// So let's say that we are no longer sending the 'user'.

// We want to send a response [res].

// And from this response we want to return whatever user that we submit to '/profile'.

// We're going to change this to a POST and with a POST remember that we can actually add things to the body and you see over here that there's a couple of options: 'form-data' the 'x-www-form-urlencoded' we have 'raw' and then 'binary'.

// These two are forms through HTML.

// If you usually do an HTML form tag and do a GET or a POST request you can just click on this and you can see here 'Key Value' so I can say name equals 'andrei'.

// And now when I send this I get 'Sally' and 'soccer' well because well I haven't saved this yet let's go back to what we had before and send that again we see that the POST request is working.

// And if I want to access this information I simply do
/* 
	(req.body)
*/

// But let's see if this works.

// If I click send I get 'undefined' and that is because Express only gives you a little bit.

// You still need a few packages if you want this to work.

// If you ever want to access '(req.body)' well you need to use a middleware and the middleware that we want is called body-parser and you'll use it and most Express servers, so you'll just get used to it.

// It's 'npm install body-parser'.

// And now this body-parser what it's going to do is it's going to grab whatever information we receive and parse it just like JSON or forms into something that we can use. In order to actually use it well, we know how middleware works, we simply at the top say 'app.use()' and body-parser it will come with a 'bodyParser' that we'll just require with the package that we just installed.

// In 'app.use()' we simply do
/*
	bodyParser.urlencoded
*/
// Which is how we're able to get this ['x-www-form-urlencoded'].

// And we just have to pass it a parameter: {extended: false}.

// NB body parser is now part of express
// const express = require('express');
// // const bodyParser = require('body-parser');

// const app = express();

// app.use(express.urlencoded({extended: false}));

// app.get('/', (req, res) => {
// 	res.send("getting root");
// });

// app.get('/profile', (req, res) => {
// 	res.send("getting profile");
// });

// app.post('/profile', (req,res) => {
// 	console.log(req.body)
// 	const user = {
// 		name: 'Sally',
// 		hobby: 'soccer'
// 	}
// 	res.send(user);
// });

// app.listen(3000);
// we'll do 'npm start' if we go back and send again.
// {name: 'christine'} because we've sent our 'Key Value' with form data.

// So if you're building a server for a form that gets submitted you'll use this.


// But as you know there's also JSON that we can use and the way we use JSON is we click on 'raw' and in here we can send whichever things we want; in our case it's going to be JSON, and with JSON we can now say what we want to send, and if we ever do any wrong syntax, it'll tell us that this is wrong JSON.

// But let's just say for the '/profile' I want to add a new user and this user will be called – remember double quotes here – we'll have "user" and this user will be called "Jenny" and "Jenny" will have a hobby of "tennis"

// That's JSON. If I now send this I get an empty object. Again because we've only told it to parse 'urlencoded' body-parser needs to also know about JSON. Again in order to do that we say 'app.use(bodyParser.json())'
const express = require('express');

const app = express();

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.get('/', (req, res) => {
	res.send("getting root");
});

app.get('/profile', (req, res) => {
	res.send("getting profile");
});

app.post('/profile', (req,res) => {
	console.log(req.body)
	res.send('Success!');
});

app.listen(3000);
// If we save that and send again - look at that - we have { user: 'Jenny', hobby: 'tennis' }.

// So now we can add that user by maybe adding it to our database and then sending a response 'Success'


// We get a response 'Success' that we've posted "Jenny" "tennis" in this way we can also do PUT, which is very similar we just send the data but PUT is used for updating if we want to update perhaps Jenny to have a different hobby and DELETE to delete maybe that user, something that we'll get into in the next video.

// But as you can see Postman is great.
// It's a great way to test out your server before you connect it to your front-end, something that we'll definitely do in this course in our final project.


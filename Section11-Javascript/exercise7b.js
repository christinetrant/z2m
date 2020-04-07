// Create an object and an array which we will use in our facebook exercise. 

var database = [
	{
		username: "Christine",
		password: "mumstheword",
	},
	{
		username: "Sally",
		password: "password",
	},
	{
		username: "Ted",
		password: "123",
	},
];

var newsFeed = [
	{
		username: "JD",
		timeline: "I like inner monologues",
	},
	{
		username: "Turk",
		timeline: "baby baby baby oh!",
	},
	{
		username: "Eliot",
		timeline: "frick frick frick!!!!",
	}
];

function isUserValid(username, password) {
	for(var i = 0; i < database.length; i++) {
		if(database[i].username === username && 
			database[i].password === password) {
			return true;
		}
	}
	return false;
}

function signIn(username, password) {
	if(isUserValid(username, password)) {
		console.log(newsFeed);
	} else {
		alert("Sorry, your login details are incorrect");
	}
}

var usernamePrompt = prompt("Enter your username");
var passwordPrompt = prompt("Enter your password");

signIn(usernamePrompt, passwordPrompt);
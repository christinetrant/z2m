// Generate a random number,
// Prompt user to guess it,
// Check that valid num is entered and if not, display appropriate error message,using the switch statement,feed back to user if it is too high,too low or correct,
// if incorrect prompt another guess,allow 3 attempts"

// returns a random integer from 0 to 10
// var randomNum = Math.floor(Math.random() * 11);   
var i=0;
while(i<3) {
	var randomNum = 3    
	var userGuess = Number(prompt("Guess a number between 0 to 10"));
	// var answer = userGuess === randomNum ? true : userGuess > randomNum ? "high" : "low";

	// console.log(answer, randomNum, userGuess);
	// switch(answer) {
	switch(true) {
		// case true: 
		case userGuess === randomNum: 
			response = alert("Correct! You win the game");
			i=3;
			break;
		// case "high":
		case userGuess > randomNum: 
			response = alert("Too high!");
			i++;
			break;
		// case "low":	
		case userGuess < randomNum: 
			response = alert("Too Low!");
			i++;
			break;
		default:
			response = alert("Unlucky! Try again");
	}
}
response = alert("Game over!");

// EXERCISE 3
// Make a Calculator! using prompt(), and variables, make a program that does the following:
// 1. Prompts the user for first number.
// 2. Stores that first number
// 3. Prompts the user for the second number.
// 4. stores that number and responds with the SUM by using an alert.  
var firstNumber = prompt("Enter your first number");
var secondNumber = prompt("Enter your second number");
var sum = Number(firstNumber) + Number(secondNumber);
alert("The sum of your numbers is " + sum);


// BONUS: Make a program that can subtract, multiply, and also divide!
var subtract = firstNumber - secondNumber;
var multiply = firstNumber * secondNumber;
var divide = firstNumber / secondNumber;



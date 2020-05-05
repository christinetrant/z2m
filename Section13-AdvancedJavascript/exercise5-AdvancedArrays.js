// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },
];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
const addExclamationUsername = [];
array.forEach((user) => {
  addExclamationUsername.push(user.username + '!');
})
console.log(addExclamationUsername);

//Create an array using map that has all the usernames with a "? to each of the usernames
const addQuestionUsername = array.map((user) => {
  // instead of user.username can destructure to:
  // { username } = user;
  // return username+'?'
  return user.username + '?';
})
console.log(addQuestionUsername);

//Filter the array to only include users who are on team: red
const teamRed = array.filter((user) => {
  return user.team === 'red';
})
console.log(teamRed);

//Find out the total score of all users using reduce
const totalScore = array.reduce((currentScore, user) => {
  return user.score + currentScore;
}, 0)
console.log(totalScore);

// (1), what is the value of i? // The index of array - 0, 1, 2, 3, 4, 5
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
// const newArray = arrayNum.map((num, i) => {
//  console.log(num, i);
//  alert(num);
//  return num * 2;
// })
const newArray = arrayNum.map((num, i) => num * 2);

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const bonusArray = array.map((user) => {
  user.items = user.items.map(item => {
    return item + '!';
  })
  return user;
})
console.log(bonusArray);
// to make simpler looking
const bonusArray = array.map((user) => {
  user.items = user.items.map(item => item + '!');
  return user;
})
console.log(bonusArray);

// Promises are a new feature in JavaScript as of ES6.

// A promise maybe in one of three possible states fulfilled, rejected or pending.

// A promise is an object that may produce a single value sometime in the future. Either a resolved value, or a reason that it's not resolved or rejected.

// Before Promises we had callbacks:
el.addEventListener('click', submitForm);

// callback pyramid of doom:
movePlayer(100, 'Left', function () {
  movePlayer(400, 'Left', function () {
    movePlayer(10, 'Right', function () {
      movePlayer(330, 'Left', function () {});
    });
  });
});

// Using promises for the above example:
movePlayer(100, 'Left')
  .then(() => movePlayer(400, 'Left'))
  .then(() => movePlayer(10, 'Right'))
  .then(() => movePlayer(330, 'Left'));

// A more realistic example:
grabTweets('twitter/andreineagoie', (error, andreiTweets) => {
  if (error) {
    throw Error;
  }
  displayTweets(andreiTweets);
  grabTweets('twitter/elonmusk', (error, elonTweets) => {
    if (error) {
      throw Error;
    }
    displayTweets(elonTweets);
    grabTweets('twitter/someoneelse', (error, someoneTweets) => {
      if (error) {
        throw Error;
      }
      displayTweets(someoneTweets);
    });
  });
});
// to check for error we have a lot of repetition of code.

// promises serve the same purpose as callbacks.

// This promise has parameter that either resolves or rejects:
const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve('This worked');
  } else {
    reject('Error, it broke');
  }
});
// So if the promise returned is true we can resolve it.
// Otherwise we're going to reject.

// now we can run the promise using .then
// So again once the promise is resolved or rejected .then I want to get the results and then we want to console.log the 'result'.
promise.then(result => console.log(result));

// Let's say that now with 'Stuff Worked' I want to grab the result.
// And add an exclamation mark to it and then- and this is called chaining in promises.
// Then after I do that it's going to return this return the result with the exclamation mark and in our case
promise.then(result => result + '!').then(result2 => console.log(result2));

// Stuff worked!

// If we have an error and that error causes us to throw an error.
// With promises you can use '.catch()'
// And this will catch any error that the promise may have.
promise
  .then(result => result + '!')
  .then(result2 => {
    throw Error;
    console.log(result2);
  })
  .catch(() => console.log('error!'));
// 'error!'

promise
  .then(result => result + '!')
  .then(result2 => result2 + '?')
  .catch(() => console.log('error!'))
  .then(result3 => {
    throw Error;
    console.log((result3 = '!'));
  });

// Where you put the catch statement it's going to check and run if anything before it fails.
// So '.catch' only runs if something fails in between here.
// But we still get an error in the console because we threw an error but the catch statement never runs

// A promise has a resolve and a reject.

// But we see that with a promise we can give it to a variable and run this and do something with it asynchronously.

/* Promises are great for asynchronous programming:

	Asynchronous programming makes it possible to express waiting for long-running actions without freezing the program during these actions. JavaScript environments typically implement this style of programming using callbacks, functions that are called when the actions complete.
*/

// When you don't want javascript to block the execution of your code like making API calls, grabbing data from a database or maybe optimizing an image you use a promise so that the task happens in the back when the promise gets resolved or rejected then you'll get that response.

const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve('This worked');
  } else {
    reject('Error, it broke');
  }
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'Hello');
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'Is it me');
});

const promise4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 5000, 'You are looking for?');
});

Promise.all([promise, promise2, promise3, promise4]).then(values => {
  console.log(values);
});
// Five seconds later. You see here that even though these ones took a lot less well because we did 'promise.all' it waited until all the promises were resolved and then logged out the values very cool.

// Let's finish up with the final example that has some real world applications so that you have an idea of when we want to use promises

// a list of URLs from a simple API.
const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
];

// We have users, posts and albums.
// This is very similar to something you do on a Website where you want to grab some information maybe from your server from the database with users, posts and albums and let's say that they're all important to us for the page for the profile page of the user.

Promise.all(
  urls.map(url => {
    return fetch(url).then(response => response.json());
  })
)
  .then(results => {
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
  })
  .catch(() => console.log('error'));

// "How can we grab them all?" Well again using promises we can just to promise.all and we can just grab the URLs.  And in this case we can just map over this so it's an array.
// With each URL that we grab. We want to fetch a web API to grab URLs make an AJAX call to the URL and this is going to return us remember an array because we're getting a promise.

// A promise is an object that may produce a single value sometime in the future either resolved or rejected with a reason why it was rejected and a promise may be in one of three possible states it can be fulfilled, rejected or pending.

// ES2020

// PROMISE.ALLSETTLED
// Remembering Promise.all:
const promiseOne = new Promise((resolve, reject) => setTimeout(resolve, 3000));
const promiseTwo = new Promise((resolve, reject) => setTimeout(reject, 3000));

Promise.all([promiseOne, promiseTwo]).then(data => console.log(data));
// will return Promise {<pending>} so we add a catch:
Promise.all([promiseOne, promiseTwo])
  .then(data => console.log(data))
  .catch(e => console.log('something failed', e));

// We get 'something failed' as Promise.all has to have all promises resolved, promises.allSettled returns all promises results once they have all run, it doesn't care about resolve or reject
Promise.allSettled([promiseOne, promiseTwo])
  .then(data => console.log(data))
  .catch(e => console.log('something failed', e));
// (2) [{…}, {…}]
// 0: {status: "fulfilled", value: undefined}
// 1: {status: "rejected", reason: undefined}
// length: 2
// __proto__: Array(0)

// globalThis

/***********************************************/
/*****     WEB DEV SIMPLIFIED EXAMPLES     *****/
/***********************************************/
function watchTutorialCallback(callback, errorCallback) {
  let userLeft = false;
  let userWatchingCatMeme = false;

  if (userLeft) {
    errorCallback({
      name: 'User Left',
      message: ':('
    });
  } else if (userWatchingCatMeme) {
    errorCallback({
      name: 'User Watching Cat Meme',
      message: 'WebDevSimplified < Cat'
    });
  } else {
    callback('Thumbs up and Subscribe');
  }
}

function watchTutorialPromise() {
  let userLeft = false;
  let userWatchingCatMeme = false;
  return new Promise((resolve, reject) => {
    if (userLeft) {
      reject({
        name: 'User Left',
        message: ':('
      });
    } else if (userWatchingCatMeme) {
      reject({
        name: 'User Watching Cat Meme',
        message: 'WebDevSimplified < Cat'
      });
    } else {
      resolve('Thumbs up and Subscribe');
    }
  });
}

watchTutorialCallback(
  message => {
    console.log(message);
  },
  error => {
    console.log(error.name + ' ' + error.message);
  }
);

watchTutorialPromise()
  .then(message => {
    console.log(message);
  })
  .catch(error => {
    console.log(error.name + ' ' + error.message);
  });

const recordVideoOne = new Promise((resolve, reject) => {
  resolve('Video 1 Recorded');
});

const recordVideoTwo = new Promise((resolve, reject) => {
  resolve('Video 2 Recorded');
});

const recordVideoThree = new Promise((resolve, reject) => {
  resolve('Video 3 Recorded');
});

Promise.all([recordVideoOne, recordVideoTwo, recordVideoThree]).then(
  messages => {
    console.log(messages);
  }
);

// .race completes whichever promise finishes first
Promise.race([recordVideoOne, recordVideoTwo, recordVideoThree]).then(
  message => {
    console.log(message);
  }
);

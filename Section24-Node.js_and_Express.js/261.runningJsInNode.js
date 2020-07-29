// 262. RUNNING SCRIPT>JS IN NODE:
// const a = 4;
// const b = 5;

// console.log(a + b);
// In order to run this script, in terminal type 'node' and then the script name: 'script.js'.
// And it'll give us 9.

// Now you also see that it exited; it didn't stay in the program, and that is because at the end of the file, once it reads everything and executes it – so the last thing it executes is 'console.log' – it runs 'process.exit' and exits out of the file. 

// Node can also use setTiemout so below example waits 3 seconds then executes then exits
// setTimeout(() => {
// 	console.log(a+b);
// }, 3000)

// And again within node we can actually use things that might be useful for us based on what global objects we have.

// For example one of the most popular ones are '__dirname' 
// console.log(__dirname);
// 'node script.js' ...
// I get my directory: 'node'.


// 263. MODULES IN NODE:
// let's add a new file, and we'll call this 'script2.js'.

// Node has yet to implement the new ES6 feature of import statements.
// import largeNumber from './script2.js';

// In order for you to get familiarized with CommonJS we're going to use the 'require' form.
const script2 = require('./262.ModulesInNode.js');
// Well because now we've exported this object, and the way we want to access it, here,

// We're exporting a global object which we can name whatever.

// In our case we can say 'script2' and in order to get the property of 'script2' well we'll say

// 'script2.largeNumber'

const a = script2.largeNumber;
const b = 5;

console.log(a + b);



// 265. TYPES OF MODULES:
// There are three kinds of modules that you can have in Node.

// We've seen that we have this type which we already know about which is a module that you create yourself like 'script2' and has its module exports and you give it the path to the file so you can find it.
// require('./script2.js')

// There's also something called 'built-in modules' and built-in modules are modules that come already pre-installed with Node.

// For example one of the more popular ones is the 'fs' module and this module:
// const c = require('fs');
// console.log(c);
// We get a module with a whole bunch of things. But it allows us to read the file system.

// TYPE 1: 
// if you had a text file and you wanted to read through the text file and extract out how many times the word 'hello' was said, well you can write that by simply using the file system module and using something like 'readFile:' or 'readFileSync:' which will output – do something like 'readFile' – it will output the contents of the file and then you can do whatever you want with it.

// TYPE 2:
// Another popular one is the HTTP module which as you can guess is the module that we'll use later on to build a server. And you can read up on all these modules but those two are probably the most popular.
// In our case as web developers we're really concerned with the HTTP one these modules are without the 'path' – they're just simply exactly like that [('http')].

// TYPE 3: 
// And then finally the third type of module again the one that we know is something from npm, a package.
// And one of my favorite packages to use with Node is something called 'nodemon' and nodemon is really really nice because well if I clear this and install npm 'install' – and I'll have to do 'npm init' first actually to make sure that I have a 'package.json' file and if I pass the '-y' it'll just say yes to all the prompts that I get beforehand.

// npm init -y
// npm install nodemon --save-dev

// If I go to 'package.json' I see that now I have nodemon in 'devDependencies' and we haven't seen this before.

// Up until now we've done '--save' or nothing at all and automatically put it in 'dependencies' 'devDependencies' are dependencies that we only use when we're developing.

// When we actually release this app or the server it won't be included because nodeman is just for our enjoyment while we're developing.

// Now let me show you what nodeman does. nodemon now can be used because it's in 'node_modules'. If you go to '.bin' you see nodemon here.  Well because it's in the package 'node_modules .bin' I can use the command such as "start" and say "nodemon" and Node is smart enough to know that if I run nodemon it's going to look in the '.bin' folder and find it there; if it finds it there, which it does, it'll run the command.

// Let's save run 'npm start' and we have a 'clean exit'.

// But you see that something is still running.

// If I change const a to equal 6 and save, it I'll watch those changes; it keeps listening to changes and it will output everything.

// Again if I change this, so I don't have to keep running the 'node script.js' command.

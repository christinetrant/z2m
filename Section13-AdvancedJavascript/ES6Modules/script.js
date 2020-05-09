// // --------------------IIFE-------------------- 
// // Immediately Invoked Function Expression
// // Still not ideal as order of the files is still important so lack of dependancy resolution
// // js1 - first file loaded
// var myApp = {}

// //js2
// (function() {
// 	myApp.add = function(a, b) {
// 		return a + b;
// 	}
// })();

// // jQuery uses this: allows us to use $


// // ---------------CommonJS + Browserify---------------
// // It runs before the website is online - it bundles everything into a single file (bundle.js)
// // js1
// module.exports = function add(a, b) {
// 	return a + b;
// }

// // js2
// // assuming the js file is add.js
// var add = require('./add');


// ---------------ES6 + Webpack2---------------
// Think of modules as building blocks - different pieces of code: each piece is really good at doing one thing

// js1
export const add = (a, b) => a + b;
// or
export default function add() {
	return a + b;
}

// js2
import { add } from './add';
// or
import add from './add';

// export default can only be used once along with import add
// any other export will then be imported through curly brackets

// Webpack is like Browserify - it is a module bundler so it has a config file - which would look something like:
// webpack
module.exports = {
	entry: '/app/main.js',
	output: {
		path: './dist',
		filename: 'bundle.js'
	}
}
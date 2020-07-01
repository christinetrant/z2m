const largeNumber = 356;


// And if we want to export this and say 'export default largeNumber' and now within 'script.js' I do


// export default largeNumber;

// 'module' is a global object that we have access to, and using 'module.exports' we can say what objects I want to export in this file.

// If I run 'node script.js'

// I get [object Object]5.

module.exports = {
	largeNumber: largeNumber
}
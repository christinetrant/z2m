// DOM Strings
var body = document.querySelector('body');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');

var h3Type = document.getElementsByClassName('type')[0];
var h3Output = document.getElementsByClassName('output')[0];

var button = document.querySelector('button');

var radialBtn = document.getElementById('radialBtn');
var linearBtn = document.getElementById('linearBtn');
// var twoColors = document.getElementById('twoColorBtn');
// var threeColors = document.getElementById('threeColorBtn');

// body.style.backgroundImage = radial-gradient(#e66465, #9198e5);
// Linear Gradient Function
function linear() {
	var lBg = "linear-gradient(to right, " + color1.value +", " +color2.value +")";

	linearBtn.style.backgroundImage = lBg;

	body.style.backgroundImage = lBg;

	linearBtn.classList.add('active');
	radialBtn.classList.remove('active');
	radialBtn.style.backgroundImage = "none";
}
// Radial Gradient Function
function radial() {
	var rBg = "radial-gradient(" + color1.value +", " + color2.value + ")"; 
	
	radialBtn.style.backgroundImage = rBg;
	body.style.backgroundImage = rBg;

	radialBtn.classList.add('active');
	linearBtn.classList.remove('active');
	linearBtn.style.backgroundImage = "none";
}
// Two Colors

// Three Colors

function colorInput() {
	// Display color values in h3 tag
	h3Type.textContent = "Linear Gradient: ";
	h3Output.textContent = color1.value + "   ➡   " + color2.value;
	// Change the background to have new colors
	console.log(body, h3Output);
	body.style.backgroundImage = "linear-gradient(to right, " + color1.value +", " +color2.value +")";
	// // for(var i=0; i<button.length;i++) {
		// linearBtn.style.backgroundImage = "linear-gradient(to right, " + color1.value +", " +color2.value +")";
	// }
}
// function hover() {
// 	console.log("mouse?");
// 	radialBtn.style.backgroundImage = "linear-gradient(to right, " + color1.value +", " +color2.value +")"
// }
// function nohover() {
// 	radialBtn.style.backgroundImage = "none"
// }
// document.getElementById('radialBtn').addEventListener('mouseenter', hover);
// document.getElementById('radialBtn').addEventListener('mouseleave', nohover);

// HAVE TRIPLE GRADIENT OPTION?
// #3a1c71 → #d76d77 → #ffaf7b

// Event Listeners
document.addEventListener('input', colorInput);
linearBtn.addEventListener('click', linear);
radialBtn.addEventListener('click', radial);


// want linear to be the initial view
// linear();
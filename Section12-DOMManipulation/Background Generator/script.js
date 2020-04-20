// DOM Strings
var body = document.querySelector('body');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');

var h3Title = document.getElementsByClassName('type')[0];
var h3Output = document.getElementsByClassName('output')[0];


var radialBtn = document.getElementById('radialBtn');
var linearBtn = document.getElementById('linearBtn');
// var twoColors = document.getElementById('twoColorBtn');
// var threeColors = document.getElementById('threeColorBtn');
var button = document.getElementsByClassName('buttons')[0];
console.log(button.getElementsByClassName('btn')[0]);
console.log(linearBtn.classList.value);
// body.style.backgroundImage = radial-gradient(#e66465, #9198e5);
// Linear Gradient Function
function linear() {
	var linearBg = "linear-gradient(to right, " + color1.value +", " +color2.value +")";

	// linearBtn.style.backgroundImage = linearBg;
	body.style.backgroundImage = linearBg;

	linearBtn.classList.add('active');
	radialBtn.classList.remove('active');
	radialBtn.style.backgroundImage = "none";

	// Display color values in h3 tag
	h3Title.textContent = "Linear Gradient: ";
	h3Output.textContent = color1.value + "   ➡   " + color2.value;
}
// Radial Gradient Function
function radial() {
var radialBg = "radial-gradient(" + color1.value +", " + color2.value + ")";	
	// radialBtn.style.backgroundImage = radialBg;
	body.style.backgroundImage = radialBg;

	radialBtn.classList.add('active');
	linearBtn.classList.remove('active');
	linearBtn.style.backgroundImage = "none";

	// Display color values in h3 tag
	h3Title.textContent = "Radial Gradient: ";
	h3Output.textContent = color1.value + "   ➡   " + color2.value;
	// h3Display();
}
function colorInput() {

	if(linearBtn.className === ('btn active')) {
		console.log("linear active");
		linear();
	} else if(radialBtn.className === ('btn active')) {
		console.log("radial active");
		radial();
	}
	// linear();
	// Change the background to have new colors
	console.log(body, h3Output);
	
}

// HAVE TRIPLE GRADIENT OPTION?
// #3a1c71 → #d76d77 → #ffaf7b

// Event Listeners
document.addEventListener('input', colorInput);
linearBtn.addEventListener('click', linear);
radialBtn.addEventListener('click', radial);


// want linear to be the initial view
linear();

console.log(linearBtn.className === ('btn active'));
console.log(radialBtn.className === ('btn active'));
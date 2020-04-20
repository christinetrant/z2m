// DOM Strings
var body = document.querySelector('body');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');

var h3Title = document.getElementsByClassName('type')[0];
var h3Colors = document.getElementsByClassName('output')[0];
var button = document.getElementsByClassName('btn');

var twoColorDiv = document.getElementById('twoColorInput');
var threeColorDiv = document.getElementById('threeColorInput');

var radialBtn = document.getElementById('radialBtn');
var linearBtn = document.getElementById('linearBtn');
var twoColorBtn = document.getElementById('twoColorBtn');
var threeColorBtn = document.getElementById('threeColorBtn');

console.log(twoColorDiv, twoColorBtn);


// Linear Gradient Function
function linear() {
	var linearBg = "linear-gradient(to right, " + color1.value +", " +color2.value +")";

	// Change the background to have new colors
	body.style.backgroundImage = linearBg;
	// Change the classes so the linear button has active class
	linearBtn.classList.add('active');
	radialBtn.classList.remove('active');

	// Display color values in h3 tag
	h3Title.textContent = "Linear Gradient: ";
	h3Colors.textContent = color1.value + "   ➡   " + color2.value;
}

// Radial Gradient Function
function radial() {
var radialBg = "radial-gradient(" + color1.value +", " + color2.value + ")";	
	// Change the background to have new colors
	body.style.backgroundImage = radialBg;
	// Change the classes so the radial button has active class
	radialBtn.classList.add('active');
	linearBtn.classList.remove('active');

	// Display color values in h3 tag
	h3Title.textContent = "Radial Gradient: ";
	h3Colors.textContent = color1.value + "   ➡   " + color2.value;
}


function twoColor() {
	twoColorBtn.classList.add('active');
	threeColorBtn.classList.remove('active');
	twoColorDiv.classList.remove('hidden');
	threeColorDiv.classList.add('hidden');
	
}
function threeColor() {
	threeColorBtn.classList.add('active');
	threeColorDiv.classList.remove('hidden');

	twoColorBtn.classList.remove('active');
	twoColorDiv.classList.add('hidden');
}
// When the color is changed through the input element
function colorInput() {
	// If the linear button is active we want the output to be linear gradient
	if(linearBtn.className === ('btn active')) {
		linear();
	// otherwise we'd like it to be a radial gradient 
	} else if(radialBtn.className === ('btn active')) {
		radial();
	}	
}

// Hover over buttons
function hover(event) {
	if(linearBtn.className === ('btn active')) {
		event.target.style.backgroundImage = "linear-gradient(to right, " + color1.value +", " +color2.value +")"
		linearBtn.style.backgroundImage= "none";
	} else if(radialBtn.className === ('btn active')) {
		event.target.style.backgroundImage = "radial-gradient(" + color1.value +", " +color2.value +")"
		radialBtn.style.backgroundImage= "none";
	}
}
function nohover(event) {
	event.target.style.backgroundImage = "none"
}


// HAVE TRIPLE GRADIENT OPTION?
// #3a1c71 → #d76d77 → #ffaf7b

// EVENT LISTENERS
document.addEventListener('input', colorInput);
linearBtn.addEventListener('click', linear);
radialBtn.addEventListener('click', radial);
twoColorBtn.addEventListener('click', twoColor);
threeColorBtn.addEventListener('click', threeColor);
// Loop through all buttons and add gradient effect on hover and remove when mouse leaves
for(var i=0; i<button.length; i++) {
	button[i].addEventListener('mouseenter', hover);
	button[i].addEventListener('mouseleave', nohover);
}

// want linear gradient & two color option to be the initial view
linear();
twoColor();
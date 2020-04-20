// DOM Strings
var body = document.querySelector('body');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');

var color1a = document.querySelector('.color1a');
var color2a = document.querySelector('.color2a');
var color3a = document.querySelector('.color3a');

var h3Title = document.getElementsByClassName('type')[0];
var h3Colors = document.getElementsByClassName('output')[0];
var button = document.getElementsByClassName('btn');

var twoColorDiv = document.getElementById('twoColorInput');
var threeColorDiv = document.getElementById('threeColorInput');

var radialBtn = document.getElementById('radialBtn');
var linearBtn = document.getElementById('linearBtn');
var twoColorBtn = document.getElementById('twoColorBtn');
var threeColorBtn = document.getElementById('threeColorBtn');

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

function linearThree() {
	console.log("Three!");
	var linearBg3 = "linear-gradient(to right, " + color1a.value +", " +color2a.value +", " + color3a.value + ")";
	// Change the background to have new colors
	body.style.backgroundImage = linearBg3;
	// Change the classes so the linear button has active class
	linearBtn.classList.add('active');
	radialBtn.classList.remove('active');
	// Display color values in h3 tag
	h3Title.textContent = "Linear Gradient: ";
	h3Colors.textContent = color1a.value + "   ➡   " + color2a.value + "   ➡   " + color3a.value;
}
function radialThree() {
	console.log("R Three!");
	var radialBg3 = "radial-gradient(" + color1a.value +", " + color2a.value +", " + color3a.value + ")";	
	// Change the background to have new colors
	body.style.backgroundImage = radialBg3;

	// Change the classes so the radial button has active class
	radialBtn.classList.add('active');
	linearBtn.classList.remove('active');
	// Display color values in h3 tag
	h3Title.textContent = "Radial Gradient: ";
	h3Colors.textContent = color1a.value + "   ➡   " + color2a.value+ "   ➡   " + color3a.value;
}


function twoColor() {
	twoColorBtn.classList.add('active');
	threeColorBtn.classList.remove('active');
	twoColorDiv.classList.remove('hidden');
	threeColorDiv.classList.add('hidden');

	// if(linearBtn.className === ('btn active')) {
	// 	linear();
	// 	console.log("TEST3");
	// }	else if(radialBtn.className === ('btn active')) {
	// 	radial();
	// 	console.log("TEST4");
	// }	
	
}
function threeColor() {
	threeColorBtn.classList.add('active');
	twoColorBtn.classList.remove('active');
	threeColorDiv.classList.remove('hidden');
	twoColorDiv.classList.add('hidden');

// 	if(linearBtn.className === ('btn active')) {
// 		linearThree();
// 		console.log("TEST1");
// 	}	else if(radialBtn.className === ('btn active')) {
// 		radialThree();
// 		console.log("TEST2");
// 	}
}
// When the color is changed through the input element
function colorInput() {
	// If the linear button is active we want the output to be linear gradient
	if(linearBtn.classList.contains('active') 
		&& twoColorBtn.classList.contains('active')) {
			linear();
			console.log("ONE");
	} else if(linearBtn.classList.contains('active') 
		&& threeColorBtn.classList.contains('active')) {
		linearThree();
		console.log("TWO");
	// otherwise we'd like it to be a radial gradient 
	} else if(radialBtn.classList.contains('active') 
		&& twoColorBtn.classList.contains('active')) {
			radial();
			console.log("THREE");
	} else if(radialBtn.classList.contains('active')
		&& threeColorBtn.classList.contains('active')) {
			radialThree();
			console.log("FOUR");
	}	
}

// Hover over buttons
function hover(event) {
	var linearBg = "linear-gradient(to right, " + color1.value +", " +color2.value +")";
	var radialBg = "radial-gradient(" + color1.value +", " +color2.value +")";

	if(linearBtn.className === ('btn active')) {
		event.target.style.backgroundImage = linearBg;
		linearBtn.style.backgroundImage= "none";
	} else if(radialBtn.className === ('btn active')) {
		event.target.style.backgroundImage = radialBg;
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

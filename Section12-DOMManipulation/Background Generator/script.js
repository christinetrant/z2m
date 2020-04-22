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

// If linear button is active 
function linearBtnActive() {
	linearBtn.classList.add('active');
	radialBtn.classList.remove('active');
	h3Title.textContent = "Linear Gradient: ";
}
// If radial button is active
function radialBtnActive() {
	radialBtn.classList.add('active');
	linearBtn.classList.remove('active');
	h3Title.textContent = "Radial Gradient: ";
}
// If two color button is active
function twoBtnActive() {
	twoColorBtn.classList.add('active');
	threeColorBtn.classList.remove('active');
	// Hide the three color input div and show the two color input
	twoColorDiv.classList.remove('hidden');
	threeColorDiv.classList.add('hidden');
}
// If three color button is active
function threeBtnActive() {
	threeColorBtn.classList.add('active');
	twoColorBtn.classList.remove('active');
	// Hide the two color input div and show the three color input
	threeColorDiv.classList.remove('hidden');
	twoColorDiv.classList.add('hidden');	
}

// If Linear & Two Color Button Selected
function linearTwo() {
	// Change the background to have new colors
	body.style.backgroundImage = "linear-gradient(to right, " + color1.value +", " +color2.value +")";
	// Change the classes so the linear button has active class
	linearBtnActive();
	// Change the classes so the two color button has active class
	twoBtnActive();
	// Display color values in h3 tag
	h3Colors.textContent = color1.value + "   ➡   " + color2.value;
}

// If Linear & Three Color Button Selected
function linearThree() {
	// Change the background to have new colors
	body.style.backgroundImage = "linear-gradient(to right, " + color1a.value +", " +color2a.value +", " + color3a.value + ")";
	// Change the classes so the linear button has active class
	linearBtnActive();
	// Change the classes so the three color button has active class
	threeBtnActive();
	// Display color values in h3 tag
	h3Colors.textContent = color1a.value + "   ➡   " + color2a.value + "   ➡   " + color3a.value;
}

// If Radial & Two Color Button Selected
function radialTwo() {
	// Change the background to have new colors
	body.style.backgroundImage = "radial-gradient(" + color1.value +", " + color2.value + ")";	
	// Change the classes so the radial button has active class
	radialBtnActive();
	// Change the classes so the two color button has active class
	twoBtnActive();
	// Display color values in h3 tag
	h3Colors.textContent = color1.value + "   ➡   " + color2.value;
}

// If Radial & Three Color Button Selected
function radialThree() {
	// Change the background to have new colors
	body.style.backgroundImage = "radial-gradient(" + color1a.value +", " + color2a.value +", " + color3a.value + ")";	
	// Change the classes so the radial button has active class
	radialBtnActive();
	// Change the classes so the three color button has active class
	threeBtnActive();
	// Display color values in h3 tag
	h3Colors.textContent = color1a.value + "   ➡   " + color2a.value+ "   ➡   " + color3a.value;
}
// If Two Color Button Selected
function two() {
	// If the linear button is active we want the output to be linear gradient
	if(linearBtn.classList.contains('active')) {
			linearTwo();
	} else if(radialBtn.classList.contains('active')) {
			radialTwo();
	}	
}
// If Three Color Button Selected
function three() {
	if(linearBtn.classList.contains('active')) {
			linearThree();
	} else if(radialBtn.classList.contains('active')) {
			radialThree();
	}	
}
// If Linear Button Selected
function linear() {
	// If the linear button is active we want the output to be linear gradient
	if(twoColorBtn.classList.contains('active')) {
			linearTwo();
	} else if(threeColorBtn.classList.contains('active')) {
		linearThree();
	}
}
// If Radial Button Selected
function radial() {
	// otherwise we'd like it to be a radial gradient 
	if(twoColorBtn.classList.contains('active')) {
			radialTwo();
	} else if(threeColorBtn.classList.contains('active')) {
			radialThree();
	}	
}
// When the color is changed through the input element
function colorInput() {
	// If the linear button is active we want the output to be linear gradient
	if(linearBtn.classList.contains('active') && twoColorBtn.classList.contains('active')) {
			linearTwo();
		console.log("input function - 2 button linear");
	} else if(linearBtn.classList.contains('active') && threeColorBtn.classList.contains('active')) {
		linearThree();
		console.log("input function - 3 button linear");
	// otherwise we'd like it to be a radial gradient 
	} else if(radialBtn.classList.contains('active') && twoColorBtn.classList.contains('active')) {
			radialTwo();
			console.log("input function - 2 button radial");
	} else if(radialBtn.classList.contains('active') && threeColorBtn.classList.contains('active')) {
			radialThree();
			console.log("input function - 3 button radial");
	}	
}

// Hover over buttons
function hover(event) {
	var linearTwoBg = "linear-gradient(to right, " + color1.value +", " +color2.value +")";
	var linearThreeBg = "linear-gradient(to right, " + color1a.value +", " +color2a.value +", " +color3a.value +")";
	var radialTwoBg = "radial-gradient(" + color1.value +", " +color2.value +")";
	var radialThreeBg = "radial-gradient(" + color1a.value +", " +color2a.value +", " +color3a.value +")";

	if(linearBtn.classList.contains('active') && twoColorBtn.classList.contains('active')) {
		event.target.style.backgroundImage = linearTwoBg;
		linearBtn.style.backgroundImage= "none";
		twoColorBtn.style.backgroundImage= "none";
	} else if(linearBtn.classList.contains('active') && threeColorBtn.classList.contains('active')) {
		event.target.style.backgroundImage = linearThreeBg;
		linearBtn.style.backgroundImage= "none";
		threeColorBtn.style.backgroundImage= "none";
	// otherwise we'd like it to be a radial gradient 
	} else if(radialBtn.classList.contains('active') && twoColorBtn.classList.contains('active')) {
		event.target.style.backgroundImage = radialTwoBg;
		radialBtn.style.backgroundImage= "none";
		twoColorBtn.style.backgroundImage= "none";
	} else if(radialBtn.classList.contains('active') && threeColorBtn.classList.contains('active')) {
		event.target.style.backgroundImage = radialThreeBg;
		radialBtn.style.backgroundImage= "none";
		threeColorBtn.style.backgroundImage= "none";
	}	
}
function nohover(event) {
	event.target.style.backgroundImage = "none"
}

// EVENT LISTENERS
document.addEventListener('input', colorInput);
linearBtn.addEventListener('click', linear);
radialBtn.addEventListener('click', radial);
twoColorBtn.addEventListener('click', two);
threeColorBtn.addEventListener('click', three);
// Loop through all buttons and add gradient effect on hover and remove when mouse leaves
for(var i=0; i<button.length; i++) {
	button[i].addEventListener('mouseenter', hover);
	button[i].addEventListener('mouseleave', nohover);
}

// want linear gradient & two color option to be the initial view
linearTwo();

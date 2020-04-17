var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var h3 = document.querySelector('h3');
// var color = document.getElementById('colors')
// console.log(h3.textContent.value);
console.log("Before", color1.value);

document.addEventListener('input', function() {
	console.log("After color 1");
	console.log(color1.value);
	h3.textContent = "HEY!";

	});



// HAVE TRIPLE GRADIENT OPTION?
// #3a1c71 → #d76d77 → #ffaf7b

// RADIAL GRADIENT OPTION?
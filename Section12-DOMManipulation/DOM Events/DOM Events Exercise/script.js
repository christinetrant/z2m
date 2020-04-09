// Using the Shopping List files from the previous videos update the shopping list app to do the following:

// 1. If you click on the list item, it toggles the .done  class on and off.

// 2. Add buttons next to each list item to delete the item when clicked on its corresponding delete button.

// 3. BONUS: When adding a new list item, it automatically adds the delete button next to it (hint: be sure to check if new items are clickable too!)

var button = document.getElementById("enter");
var input = document.getElementById("inputText")
var ul = document.querySelector("ul");
// var li = document.querySelectorAll("li");

function addListItem() {
	// 1. Create a new list item
	var listItem = document.createElement("li");
	// 2. Get value of the input
	var inputItem = document.createTextNode(input.value);
	// 3. Add value to the new list item
	listItem.appendChild(inputItem);
	// 4. Add new list item to the bottom of the ul
	ul.appendChild(listItem);
	// 5. Clear input field
	input.value = "";
	// focus style on input field
	input.focus();
}

// li.forEach(function(item, i) {
// 	li.toggle(item);
// });
// document.addEventListener("click", function () {
// 	for(var i = 0; i < li.length; i++) {
// 		if(li.indexOf(i) === i) {
// 			console.log(li[i].value);
// 		}
// 	}
// });

// var li = document.querySelectorAll("li");
// console.log(li[0])
	
// li.forEach(function(item, i) {
	document.addEventListener("click", function (event) {
		// console.log(item, i, li[i]);
		console.log(event.target);
		// console.log(event.target.tagName);
		if(event.target.tagName === "LI") {
			event.target.classList.toggle("done");
			// console.log("List item clicked!!!");
		}
	});
// });
function inputValueLength() {
	return input.value.length;
}

function addAfterClick() {
	if(inputValueLength() > 0) {
		// console.log("click click!");
		addListItem();
	}
}
function addAfterEnter(event) {
	if(inputValueLength() > 0 && event.which === 13) {
		console.log("enter!");
		addListItem();
	}
}
button.addEventListener("click", addAfterClick);

input.addEventListener("keypress", addAfterEnter);
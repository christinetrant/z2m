var button = document.getElementById("enter");
var input = document.getElementById("inputText")
var ul = document.querySelector("ul");

// when user clicks button have event listener
// when user hits enter key (which = 13) have event listener
// for both of above need to store input text
// then need to add to end of list (ul append?create textnode?)
// clear input field ""
// can't have empty string added string length > 0

//toggle done or not

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
	if(inputValueLength > 0 && event.which === 13) {
		// console.log("enter!");
		addListItem();
	}
}
button.addEventListener("click", addAfterClick);

input.addEventListener("keypress", addAfterEnter);
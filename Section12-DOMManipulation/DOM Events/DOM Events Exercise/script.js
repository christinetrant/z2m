// Using the Shopping List files from the previous videos update the shopping list app to do the following:

// 1. If you click on the list item, it toggles the .done class on and off.
// 2. Add buttons next to each list item to delete the item when clicked on its corresponding delete button.
// 3. BONUS: When adding a new list item, it automatically adds the delete button next to it (hint: be sure to check if new items are clickable too!)
// 4. MY PESONAL BONUS: Make existing items editable

// NEED TO DIABLE OTHER BUTTONS WHEN IN EDIT MODE

// DOM Strings
var button = document.getElementById("enter");
var input = document.getElementById("inputText")
var ul = document.querySelector("ul");
var li = document.querySelector("li");
var del = document.getElementsByClassName("del");
var edit = document.getElementsByClassName("edit");

var tickBtn = li.childNodes[3];
var delBtn = li.childNodes[5];

function clearInput() {
	// Clear input field
	input.value = "";
	// Focus style on input field
	input.focus();
}

function addListItem() {
	// 1. Create a new list item and span
	var listItem = document.createElement("li");
	var spanEl = document.createElement("span");
	// 2. Get value of the input
	var inputItem = document.createTextNode(input.value);
	// 3. Create Delete & Edit Buttons to add to list items
	var editBtn = document.createElement("button");
	editBtn.classList.add("edit");
	editBtn.innerHTML = "Edit";
	var delBtn = document.createElement("button");
	delBtn.classList.add("del");
	delBtn.innerHTML = "Del";
	// 4. Add value to the new span item then add to list item
	listItem.appendChild(spanEl);
	spanEl.appendChild(inputItem);
	// 5. Add edit and delete buttons to list item
	listItem.appendChild(editBtn);
	listItem.appendChild(delBtn);
	// 6. Add new list item to the bottom of the ul
	ul.appendChild(listItem);
	// 7. Clear the input and add fosus()
	clearInput();
}

// Edit an existing list item [FIRST STEP]
function editListItem(event) {
	var editContent = event.target.parentNode.getElementsByTagName("span")[0];
	console.log(editContent);
	// If editContent is true while in it:
	if(editContent) {
		// if edit mode hasn't been selected yet
		if(event.target.className === "edit") {
			editItem(event);
			// else if buttons are still in edit mode
		} else if(event.target.className === "tick") {
			if(inputValueLength() > 0) {
				confirmEdit(event);
			} else {
				console.log("Can't be empty!")
				editItem(event);
			}
		} 
	} else {
		console.log("No chance Lance");
	} 
}

// EDIT LIST ITEM [SECOND STEP]
function editItem(event) {
	var editContent = event.target.parentNode.getElementsByTagName("span")[0];
	// 1. Have the input equal the text so it can be edited
	input.value = editContent.textContent;
	// 2. Focus on the input area
	input.focus();
	// 3. Change text on button to show it is in edit mode
	button.innerHTML = "Confirm";
	// Change classes from edit to tick[e.g. confirm]
	event.target.classList.remove('edit');
	event.target.classList.add('tick');
	// Hide DELETE & ENTER button while editing
	// event.target.parentNode.getElementsByClassName("del")[0].classList.add('hidden');
	ul.classList.add('opacity');
	// button.classList.add('hidden');
	// Remove event listener for AddAfterEnter key as we need a new action - updateAfterEnter
	input.removeEventListener("keypress", addAfterEnter);
	button.removeEventListener("click", addAfterClick);
	ul.removeEventListener("click", toggleListItem);
	ul.removeEventListener("click", deleteListItem);
	ul.removeEventListener("click", editListItem);
	console.log("addAfterEnter Event Listener removed");
	input.addEventListener("keypress", updateAfterEnter);
	button.addEventListener("click", updateAfterClick);
}

// UPDATE LIST ITEM [THIRD STEP]
function confirmEdit(event) {
	var editContent = event.target.parentNode.getElementsByTagName("span")[0];
	// The list item is updated
	editContent.textContent = input.value;
	// Need to change all buttons to regular state as they don't change on enter key
	button.innerHTML = "Enter";
	tickBtn.classList.remove("tick");
	tickBtn.classList.add("edit");
	// hide unnecessary buttons
	// delBtn.classList.remove("hidden");
	// button.classList.remove('hidden');
	// Remove event listener for AddAfterEnter key as we need a new action - updateAfterEnter
	input.removeEventListener("keypress", updateAfterEnter);
	button.removeEventListener("click", updateAfterClick);
	console.log("addAfterEnter Event Listener reinstated");
	input.addEventListener("keypress", addAfterEnter);
	button.addEventListener("click", addAfterClick);
	ul.addEventListener("click", toggleListItem);
	ul.addEventListener("click", deleteListItem);
	ul.addEventListener("click", editListItem);
	// 7. Clear the input and add focus()
	clearInput();
}


function toggleListItem(event) {
	if(event.target.tagName === "SPAN") {
			console.log("Is this working?");
			event.target.classList.toggle("done");
	}
}

function deleteListItem(event) {
	if(event.target.className === "del") {
		ul.removeChild(event.target.parentNode);
	}
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
	if(inputValueLength() > 0 && event.which === 13) {
		// console.log("enter!");
		addListItem();
	}
}
function updateAfterClick() {
	if(inputValueLength() > 0) {
		confirmEdit(event);
		console.log("click click!");
	}
}
function updateAfterEnter(event) {
	if(inputValueLength() > 0 && event.which === 13) {
		confirmEdit(event);
	}
}

button.addEventListener("click", addAfterClick);

input.addEventListener("keypress", addAfterEnter);

ul.addEventListener("click", toggleListItem);

ul.addEventListener("click", deleteListItem);

ul.addEventListener("click", editListItem);


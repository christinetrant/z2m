// Using the Shopping List files from the previous videos update the shopping list app to do the following:

// 1. If you click on the list item, it toggles the .done class on and off.

// 2. Add buttons next to each list item to delete the item when clicked on its corresponding delete button.

// 3. BONUS: When adding a new list item, it automatically adds the delete button next to it (hint: be sure to check if new items are clickable too!)

// DOM Strings
var button = document.getElementById("enter");
var input = document.getElementById("inputText")
var ul = document.querySelector("ul");
var li = document.querySelector("li");
var del = document.getElementsByClassName("del");
var edit = document.getElementsByClassName("edit");

// Created DOM Strings

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
	// 7. Clear input field
	input.value = "";
	// 8. Focus style on input field
	input.focus();
}

function editBtn(event) {
	var editContent = event.target.parentNode.getElementsByTagName("span")[0];
	
		console.log("Let's edit!");
		editContent.contentEditable = "true";
		editContent.focus();
		event.target.innerHTML = "Tick";
		event.target.classList.remove('edit');
		event.target.classList.add('tick');
	
}

function UneditBtn(event) {
var editContent = event.target.parentNode.getElementsByTagName("span")[0];
		editContent.contentEditable = "false";
		event.target.innerHTML = "Edit";
		event.target.classList.remove('tick');
		event.target.classList.add('edit');
	
}

// Edit an existing list item
function editListItem(event) {
	// console.log(event.target.className);
	var editContent = event.target.parentNode.getElementsByTagName("span")[0];
	if(editContent) {
		if(event.target.className === "edit") {
			console.log(editContent);
			editBtn(event);
		} else if(event.target.className === "tick") {
			UneditBtn(event);
		} 
		} else {
			console.log("No chance Lance");
		
	} 
	
}

function toggleListItem(event) {
	// console.log(event.target);
	if(event.target.tagName === "SPAN") {
		event.target.classList.toggle("done");
	}
}

function deleteListItem(event) {
	// console.log(event.target.className);
	if(event.target.className === "del") {
		// console.log("delete button clicked!");
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
button.addEventListener("click", addAfterClick);

input.addEventListener("keypress", addAfterEnter);

ul.addEventListener("click", toggleListItem);

ul.addEventListener("click", deleteListItem);

ul.addEventListener("click", editListItem);


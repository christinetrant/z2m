// Using the Shopping List files from the previous videos update the shopping list app to do the following:

// 1. If you click on the list item, it toggles the .done class on and off.

// 2. Add buttons next to each list item to delete the item when clicked on its corresponding delete button.

// 3. BONUS: When adding a new list item, it automatically adds the delete button next to it (hint: be sure to check if new items are clickable too!)

var button = document.getElementById("enter");
var input = document.getElementById("inputText")
var ul = document.querySelector("ul");
var li = document.querySelector("li");
var del = document.getElementsByClassName("del");
var edit = document.getElementsByClassName("edit");

function addListItem() {
	// 1. Create a new list item
	var listItem = document.createElement("li");
	var spanEl = document.createElement("span");
	// 2. Get value of the input
	var inputItem = document.createTextNode(input.value);
	// Create Delete & Edit Buttons to add to list items
	var editBtn = document.createElement("button");
	editBtn.classList.add("edit");
	editBtn.innerHTML = "Edit";
	var delBtn = document.createElement("button");
	delBtn.classList.add("del");
	delBtn.innerHTML = "Del";
	// 3. Add value to the new list item
	listItem.appendChild(spanEl);
	spanEl.appendChild(inputItem);
	// 4. Add new list item to the bottom of the ul
	ul.appendChild(listItem);
	listItem.appendChild(editBtn);
	listItem.appendChild(delBtn);
	// 5. Clear input field
	input.value = "";
	// focus style on input field
	input.focus();
}

function editListItem(event) {
	// console.log(event.target.className);
	if(event.target.className === "edit") {
		console.log(event.target.parentNode.getElementsByTagName("span")[0]);
		if(event.target.parentNode.getElementsByTagName("span")[0]) {
			console.log("Let's edit!");
		} else {
			console.log("No chance Lance");
		}
		// var edt = document.getElementsByTagName("span");
		// console.log(edt);
		// var editEl = event.target.parentNode;
		// editEl.setAttribute("contentEditable", true);
		// editEl.focus();
		// if(listEl.contentEditable = "false") {
			// listEl.contentEditable = "true";
		// } else {
			// listEl.contentEditable = "false";
		// }
		// ul.removeChild(event.target.parentNode);
	}
}

// function createDelBtn() {}
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


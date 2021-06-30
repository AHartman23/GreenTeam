//add new key=>value to the HTML5 storage
function SaveItem() {
			
	var name = document.forms.ShoppingList.name.value;
	var price = document.forms.ShoppingList.price.value;
	var data = document.forms.ShoppingList.data.value;
	localStorage.setItem(name, price, data);
	doShowAll();
}
function ModifyItem() {
	var name1 = document.forms.ShoppingList.name.value;
	var price1 = document.forms.ShoppingList.price.value;
	var data1 = document.forms.ShoppingList.data.value;
	//check if name1 is already exists
//check if key exists
			if (localStorage.getItem(name1) !=null)
			{
			  //update
			  localStorage.setItem(name1,price1,data1);
			  document.forms.ShoppingList.data.value = localStorage.getItem(name1);
			}
		
	
	doShowAll();
}
//delete an existing key=>value from the HTML5 storage
function RemoveItem() {
	var name = document.forms.ShoppingList.name.value;
	document.forms.ShoppingList.data.value = localStorage.removeItem(name);
	doShowAll();
}
//restart the local storage
function ClearAll() {
	localStorage.clear();
	doShowAll();
}
// dynamically populate the table with shopping list items
function doShowAll() {
	if (CheckBrowser()) {
		var key = "";
		var list = "<tr><th>Item</th><th>Price</th><th>Value</th></tr>\n";
		var i = 0;
		for (i = 0; i < localStorage.length; i++) {
		//for (i = 0; i <= localStorage.length-1; i++) {
			key = localStorage.key(i);
			list += "<tr><td>" + key + "</td>\n<td>"
					+ localStorage.getItem(key) + "</td>\n<td>" + localStorage.getItem(key) + "</td></tr>\n";
		}
		//if no item exists in the cart
		if (list == "<tr><th>Item</th><th>Price</th><th>Value</th></tr>\n") {
			list += "<tr><td><i>empty</i></td>\n<td><i>empty</i></td>\n<td><i>empty</i></td></tr>\n";
		}
		//bind the data to html table
		document.getElementById('list').innerHTML = list;
	} else {
		alert('Cannot save shopping list as your browser does not support HTML 5');
	}
}


function CheckBrowser() {
	if ('localStorage' in window && window['localStorage'] !== null) {
		//using localStorage object to store data
		return true;
	} else {
			return false;
	}
}

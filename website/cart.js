
//MAIN

//Stock Variables
var stock1 = 19
document.getElementById("stock1").innerHTML = stock1
var stock2 = 21
document.getElementById("stock2").innerHTML = stock2
var stock3 = 40
document.getElementById("stock3").innerHTML = stock3
var stock4 = 39
document.getElementById("stock4").innerHTML = stock4
var stock5 = 26
document.getElementById("stock5").innerHTML = stock5
var stock6 = 31
document.getElementById("stock6").innerHTML = stock6
var stock7 = 19
document.getElementById("stock7").innerHTML = stock7
var stock8 = 41
document.getElementById("stock8").innerHTML = stock8
var stock9 = 27
document.getElementById("stock9").innerHTML = stock9
var stock10 = 6
document.getElementById("stock10").innerHTML = stock10
var stock11 = 15
document.getElementById("stock11").innerHTML = stock11
var stock12 = 22
document.getElementById("stock12").innerHTML = stock12
var stock13 = 42
document.getElementById("stock13").innerHTML = stock13
var stock14 =36
document.getElementById("stock14").innerHTML = stock14











if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}



function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }
    
    
    //add to cart button
var addToCartButtons = document.getElementsByClassName('AddTOCartButton')
for (var i = 0; i <= addToCartButtons.length; i++) {
	var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
	}
}

function removeCartItem(event) {
    
    var buttonClicked = event.target
	inventoryHelper(event)
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
    
}
//assists in increasing inventory when item is removed from cart
function inventoryHelper(event){
	 var button = event.target
    	var shopItem = button.parentElement.parentElement
    	var name = shopItem.getElementsByClassName('cart-item-title')[0].innerText
    	incInventory(name)
		
    	
}



// clear cart function 
function ClearClicked() {
	var cartItems = document.getElementsByClassName('cart-items')[0]
	
    	while (cartItems.hasChildNodes()) {
			var name = cartItems.getElementsByClassName('cart-item-title')[0].innerText
			incInventory(name)
        	cartItems.removeChild(cartItems.firstChild)
   	 }
   	 updateCartTotal()
}

//click of add to cart button 

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var name = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    addItemToCart(name, price, imageSrc)
	updateCartTotal()
}

// Add item to cart function (3 variables)

function addItemToCart(name, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
	var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
    //Is item already in cart? check 
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == name) {
        quantityElement.value = str(int(quantityElement.value)+1)
            return
        }
    }
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${name}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    //item was added to cart -> decrease inventory
   decInventory(name)
}





function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}
function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}












function PurchaseClicked(){
	var cartItems = document.getElementsByClassName('cart-items')[0]
    	while (cartItems.hasChildNodes()) {
    		for (var i = 0; i < cartItems.length; i++){
    			name = cartItems[i].getElementsByClassName('shop-item-title')
    		}
        	cartItems.removeChild(cartItems.firstChild)
   	 }
   	 updateCartTotal()
}




//decreases inventory
function decInventory(name){
 if (name == "Bulldog Hardware 5/16 in. 18 x 3 in. Carriage Bolt (2 Pack)"){
    	stock1--
    	document.getElementById("stock1").innerHTML = stock1
    } else if (name == "SnapSkru 50-Pack Assorted Length Assorted Diameter Kit Drywall Anchor (Screws Included)"){
    	stock2--
    	document.getElementById("stock2").innerHTML = stock2
    } else if (name == "Hyper Tough 16-Ounce Claw Hammer with Fiberglass Handle"){
    	stock3--
    	document.getElementById("stock3").innerHTML = stock3
    } else if (name == "HART 6-Piece Screwdriver Set with Comfort Grip Handle"){
    	stock4--
    	document.getElementById("stock4").innerHTML = stock4
    } else if (name == "Hyper Tough 5 Amp Corded Drill, 3/8 inch Keyless Chuck, Variable Speed, Lock-on Feature & Belt Clip"){
    	stock5--
    	document.getElementById("stock5").innerHTML = stock5
    } else if (name == "Hillman The Fastener Center Steel Wire Nail & Brad Assortment Kit (266 Pcs.)"){
    	stock6--
    	document.getElementById("stock6").innerHTML = stock6
    } else if (name == "TITAN 4-in Polyurethane Swivel Caster"){
    	stock7--
    	document.getElementById("stock7").innerHTML = stock7
    } else if (name == "National Hardware 1-1/2-in Steel Zinc-Plated Corner Brace"){
    	stock8--
    	document.getElementById("stock8").innerHTML = stock8
    } else if (name == "3M Tough General Purpose Gray Rubberized Duct Tape 1.88-in x 45 Yards"){
    	stock9--
    	document.getElementById("stock9").innerHTML = stock9
    } else if (name == "LIQUID NAILS Small Projects 4-fl oz Super Glue White Multipurpose Adhesive"){
    	stock10--
    	document.getElementById("stock10").innerHTML = stock10
    } else if (name == "Lutron Claro 15-Amp Single-Pole Rocker Light Switch, White"){
    	stock11--
    	document.getElementById("stock11").innerHTML = stock11
    } else if (name == "1/2-in x 13 Galvanized Steel Hex Nut"){
    	stock12--
    	document.getElementById("stock12").innerHTML = stock12
    } else if (name == "CRAFTSMAN 10-Compartment Plastic Small Parts Organizer"){
    	stock13--
    	document.getElementById("stock13").innerHTML = stock13
    } else if (name == "GE Relax 60-Watt EQ A19 Soft White Dimmable LED Light Bulb (4-Pack)"){
    	stock14--
    	document.getElementById("stock14").innerHTML = stock14
    } else {
    	document.getElementById("stock14").innerHTML = "There was an issue"
    }
}



//increases inventory
function incInventory(name){
if (name == "Bulldog Hardware 5/16 in. 18 x 3 in. Carriage Bolt (2 Pack)"){
    	stock1++
    	document.getElementById("stock1").innerHTML = stock1
    } else if (name == "SnapSkru 50-Pack Assorted Length Assorted Diameter Kit Drywall Anchor (Screws Included)"){
    	stock2++
    	document.getElementById("stock2").innerHTML = stock2
    } else if (name == "Hyper Tough 16-Ounce Claw Hammer with Fiberglass Handle"){
    	stock3++
    	document.getElementById("stock3").innerHTML = stock3
    } else if (name == "HART 6-Piece Screwdriver Set with Comfort Grip Handle"){
    	stock4++
    	document.getElementById("stock4").innerHTML = stock4
    } else if (name == "Hyper Tough 5 Amp Corded Drill, 3/8 inch Keyless Chuck, Variable Speed, Lock-on Feature & Belt Clip"){
    	stock5++
    	document.getElementById("stock5").innerHTML = stock5
    } else if (name == "Hillman The Fastener Center Steel Wire Nail & Brad Assortment Kit (266 Pcs.)"){
    	stock6++
    	document.getElementById("stock6").innerHTML = stock6
    } else if (name == "TITAN 4-in Polyurethane Swivel Caster"){
    	stock7++
    	document.getElementById("stock7").innerHTML = stock7
    } else if (name == "National Hardware 1-1/2-in Steel Zinc-Plated Corner Brace"){
    	stock8++
    	document.getElementById("stock8").innerHTML = stock8
    } else if (name == "3M Tough General Purpose Gray Rubberized Duct Tape 1.88-in x 45 Yards"){
    	stock9++
    	document.getElementById("stock9").innerHTML = stock9
    } else if (name == "LIQUID NAILS Small Projects 4-fl oz Super Glue White Multipurpose Adhesive"){
    	stock10++
    	document.getElementById("stock10").innerHTML = stock10
    } else if (name == "Lutron Claro 15-Amp Single-Pole Rocker Light Switch, White"){
    	stock11++
    	document.getElementById("stock11").innerHTML = stock11
    } else if (name == "1/2-in x 13 Galvanized Steel Hex Nut"){
    	stock12++
    	document.getElementById("stock12").innerHTML = stock12
    } else if (name == "CRAFTSMAN 10-Compartment Plastic Small Parts Organizer"){
    	stock13++
    	document.getElementById("stock13").innerHTML = stock13
    } else if (name == "GE Relax 60-Watt EQ A19 Soft White Dimmable LED Light Bulb (4-Pack)"){
    	stock14++
    	document.getElementById("stock14").innerHTML = stock14
    } else {
    	document.getElementById("stock14").innerHTML = "There was an issue"
    }
}





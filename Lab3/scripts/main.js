
// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp

function openInfo(evt, tabName) {

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";

}


	
// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices(slct1, slct2) {
    var s1 = document.getElementById(slct1);
    var s2 = document.getElementById(slct2);
	
	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    s2.innerHTML = "";
		
	// obtain a reduced list of products based on restrictions
    var optionArray = restrictListProducts(products, s1.value);
	optionArray.sort((a,b) => a.price - b.price)
	console.log(optionArray)

	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>
		
	for (i = 0; i < optionArray.length; i++) {

		const listItem = document.createElement('li');
		listItem.classList.add('product');
	
		const img = document.createElement('img');
		img.src = optionArray[i].imgSrc;
		img.alt = optionArray[i].name;
	
		const price = document.createElement('h3');
		price.classList.add('price');
		price.innerHTML = `<strong>$${optionArray[i].price}</strong>`;

		const checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = optionArray[i].name;
	
		const description = document.createElement('p');
		description.classList.add('description');
		description.textContent = optionArray[i].name
	
		const addToCartBtn = document.createElement('button');
		addToCartBtn.classList.add('add-to-cart');
		addToCartBtn.textContent = 'Add to Cart';

		const quantityDiv = document.createElement('div');
		const quantityLabel = document.createElement('label');
		quantityLabel.textContent = "Quantity: ";
		const quantityInput = document.createElement('input');
		quantityInput.type = "number";
		quantityInput.id = "quantity_" + optionArray[i].name;
    	quantityInput.name = "quantity_" + optionArray[i].name; 
		quantityInput.min = "0";
		quantityInput.value = "1";
		quantityDiv.appendChild(quantityLabel);
		quantityDiv.appendChild(quantityInput);

		listItem.appendChild(img);
		listItem.appendChild(price);
		listItem.appendChild(checkbox);
		listItem.appendChild(description);
		listItem.appendChild(quantityDiv)

		s2.appendChild(listItem)   
	}
}
	
// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(){
	
	var ele = document.getElementsByName("product");
	var chosenProducts = [];
	
	var c = document.getElementById('displayCart');
	c.innerHTML = "";
	
	// build list of selected item
	var para = document.createElement("P");
	para.innerHTML = "You selected : ";
	para.appendChild(document.createElement("br"));
	for (i = 0; i < ele.length; i++) { 
		if (ele[i].checked) {
			var productQuantity = document.getElementById("quantity_" + ele[i].value).value;
			var product = products.find(p => p.name === ele[i].value);
			if (product) {
				var totalproductPrice = product.price * productQuantity
				para.appendChild(document.createTextNode(ele[i].value + " x " + productQuantity + " ($" + totalproductPrice.toFixed(2) + ")"));
			} else {
				para.appendChild(document.createTextNode(ele[i].value + " x " + productQuantity + " (Product not found)"));
			}

            para.appendChild(document.createElement("br"));
            chosenProducts.push({name: ele[i].value, quantity: productQuantity});
		}
	}
		
	// add paragraph and total price
	c.appendChild(para);
	c.appendChild(document.createTextNode("Total Price is $" + getTotalPrice(chosenProducts).toFixed(2)));
		
}


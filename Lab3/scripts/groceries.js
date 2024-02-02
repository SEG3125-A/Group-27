	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
    {
		name: "Neilson Milk",
		imgSrc: 'images/milk.jpg',
		category: ["Dairy", "Baking", "Beverages"],
		vegetarian: true,
		vegan: false,
		lactoseIntolerant: false,
		glutenIntolerant: true,
		organic: false,
		price: 5.50
    },
    {
		name: "Wonder White Bread",
		imgSrc: 'images/bread.jpg',
		category: "Grains",
		vegetarian: true,
		vegan: true,
		lactoseIntolerant: true,
		glutenIntolerant: false,
		organic: false,
		price: 4
    },
    {
		name: "Organic Eggs",
		imgSrc: 'images/organic_eggs.jpg',
		category: ["Dairy", "Baking"],
		vegetarian: true,
		vegan: false,
		lactoseIntolerant: true,
		glutenIntolerant: true,
		organic: true,
		price: 5.50
    },
    {
		name: "Earthbound Farm Organic Carrots",
		imgSrc: 'images/organic_carrots.jpg',
		category: ["Vegetables"],
		vegetarian: true,
		vegan: true,
		lactoseIntolerant: true,
		glutenIntolerant: true,
		organic: true,
		price: 4.20
    },
    {
		name: "Farmers Market Fuji Apples",
		imgSrc: 'images/fuji_apples.jpg',
		category: ["Fruits"],
		vegetarian: true,
		vegan: true,
		lactoseIntolerant: true,
		glutenIntolerant: true,
		organic: false,
		price: 2.90
    },
    {
		name: "Farm Boy Pure Ontario Honey",
		imgSrc: 'images/honey.jpg',
		category: ["Baking"],
		vegetarian: true,
		vegan: false,
		lactoseIntolerant: true,
		glutenIntolerant: true,
		organic: false,
		price: 6.50
    },
    {
		name: "Kellogg Cornflakes",
		imgSrc: 'images/cornflakes.jpg',
		category: ["Cereal", "Grains"],
		vegetarian: true,
		vegan: true,
		lactoseIntolerant: true,
		glutenIntolerant: false,
		organic: false,
		price: 7
    },
    {
		name: "Organic Sunflower Oil",
		imgSrc: 'images/organic_sunflower_oil.jpg',
		category: ["Baking", "Cooking", "Oil"],
		vegetarian: true,
		vegan: true,
		lactoseIntolerant: true,
		glutenIntolerant: true,
		organic: true,
		price: 10.50
    },
    {
		name: "Italpasta Fusilli",
		imgSrc: 'images/fusilli_pasta.jpg',
		category: ["Grains"],
		vegetarian: true,
		vegan: true,
		lactoseIntolerant: true,
		glutenIntolerant: false,
		organic: false,
		price: 7.50
    },
    {
		name: "Organic Chicken Thigh",
		imgSrc: 'images/organic_chicken.jpg',
		category: ["Meat"],
		vegetarian: false,
		vegan: false,
		lactoseIntolerant: true,
		glutenIntolerant: true,
		organic: true,
		price: 15.50
    },
    {
		name: "Fresh Organic Salmon",
		imgSrc: 'images/fresh_organic_salmon.jpg',
		category: ["Seafood"],
		vegetarian: false,
		vegan: false,
		lactoseIntolerant: true,
		glutenIntolerant: true,
		organic: true,
		price: 18
    },
	{
		name: "Burpee Signature Broccoli",
		imgSrc: 'images/broccoli.jpg',
		category: ["Vegetables"],
		vegetarian: true,
		vegan: true,
		lactoseIntolerant: false,
		glutenIntolerant: false,
		organic: false,
		price: 18
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let products_info = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			products_info.push(prods[i]);
		}
		else if ((restriction == "Gluten Intolerant") && (prods[i].glutenIntolerant == true)){
			products_info.push(prods[i]);
		}
		else if ((restriction == "Vegan") && (prods[i].vegan == true)){
			products_info.push(prods[i]);
		}
		else if ((restriction == "Lactose Intolerant") && (prods[i].lactoseIntolerant == true)){
			products_info.push(prods[i]);
		}
		else if ((restriction == "Organic") && (prods[i].organic == true)){
			products_info.push(prods[i]);
		}
		else if ((restriction == "Meat") && (prods[i].category.includes("Meat"))){
			products_info.push(prods[i]);
		}
		else if ((restriction == "Vegetables") && (prods[i].category.includes("Vegetables"))){
			products_info.push(prods[i]);
		}
		else if ((restriction == "Dairy") && (prods[i].category.includes("Dairy"))){
			products_info.push(prods[i]);
		}
		else if ((restriction == "Cereal") && (prods[i].category.includes("Cereal"))){
			products_info.push(prods[i]);
		}
		else if ((restriction == "Fruits") && (prods[i].category.includes("Fruits"))){
			products_info.push(prods[i]);
		}
		else if ((restriction == "Baking") && (prods[i].category.includes("Baking"))){
			products_info.push(prods[i]);
		}
		else if (restriction == "None"){
			products_info.push(prods[i]);
		}
	}
	return products_info;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		let productObject = chosenProducts.find(p => p.name == products[i].name);
		if (productObject) {
			totalPrice += (products[i].price * productObject.quantity);
		}
	}
	return totalPrice;
}

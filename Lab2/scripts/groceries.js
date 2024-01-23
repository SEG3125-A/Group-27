	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
    {
		name: "Neilson Milk",
		imgSrc: 'images/milk.jpg',
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
		vegetarian: false,
		vegan: false,
		lactoseIntolerant: true,
		glutenIntolerant: true,
		organic: true,
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
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}

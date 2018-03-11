var input = document.getElementById("search_input");

var btn = document.getElementById("search_btn");
var productInfo = document.getElementById("product_info");
var productName = document.getElementById("product_name");
var productPrice = document.getElementById("product_price");
var availability = document.getElementById("availability");

var products = [
	{
		name: "dell",
		price: 1200,
		available: true
	},

	{
		name: "hp",
		price: 1000,
		available: false
	},

	{
		name: "macbook",
		price: 1200,
		available: false
	},

	{
		name: "iphone",
		price: 900,
		available: true
	},
];

btn.addEventListener("click", function () {
	
	productInfo.classList.add("info");

	for (var i = 0; i < products.length; i++) {
	
		if (input.value === products[i].name) {
			
			productName.innerHTML = products[i].name;
			productPrice.innerHTML = "Price: $" + products[i].price;


			if (products[i].available) {

				availability.textContent = "Product is available";
				addAvailableClass();
						
			} else {

				availability.innerHTML = "Sorry, This product is not available";
				addNotAvailableClass();
			}

			break;

		} else {
			productName.innerHTML = "";
			productPrice.innerHTML = "";

			availability.textContent = "Theres no such a product.";
			addNotAvailableClass();
			
		}	
	}

	input.value = "";

});

input.addEventListener("keydown", function (event) {
	if (event.keyCode == 13) {
		btn.click();
	}
});

function addAvailableClass() {
	if (!availability.classList.contains("available")) {
		availability.classList.remove("not_available");
		availability.classList.add("available");
	}	
}

function addNotAvailableClass() {
	if (!availability.classList.contains("not_available")) {
		availability.classList.remove("available");
		availability.classList.add("not_available");
	}
}


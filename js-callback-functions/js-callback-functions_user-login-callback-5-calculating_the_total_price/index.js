const products = [
	{ name: "Saffron", price: 50 },
	{ name: "Cinnamon", price: 6 },
	{ name: "Cardamom", price: 12 },
	{ name: "Turmeric", price: 9 },
	{ name: "Paprika", price: 4 },
	{ name: "Garam Masala", price: 10 },
	{ name: "Vanilla Bean", price: 15 },
	{ name: "Coriander", price: 6 },
];

function calculateTotalPrice(products, extraPrice) {
	let totalPrice = 0;

	for (const product of products) {
		extraPrice(product);

		totalPrice += extraPrice(product);
	}

	return totalPrice;
}

function extraPrice(product) {
	return product.price;
}

const totalPrice = calculateTotalPrice(products, extraPrice);
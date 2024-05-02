const numbers = [1, 2, 3, 4, 5, 23, 45, 65];

function myMap(numbers = [], double = callback) {
	const results = [];

	for (const number of numbers) {
		results.push(double(number));
	}

	return results;
}

function double(number) {
	return number * 2;
}

const doubledNumbers = myMap(numbers, double);

state_capitals = [{ state: "Maine", capital: "Augusta" }];
capital(state_capitals)[0]; // returns "The capital of Maine is Augusta"

country_capitals = [{ country: "Spain", capital: "Madrid" }];
capital(country_capitals)[0]; // returns "The capital of Spain is Madrid"

mixed_capitals: [
	{ state: "Maine", capital: "Augusta" },
	{ country: "Spain", capital: "Madrid" },
];
capital(mixed_capitals)[1]; // returns "The capital of Spain is Madrid"

function capital(capitals) {
	return capitals.map(
		(capital) => `The capital of ${capital.state || capital.country} is ${capital.capital}`
	);
}

// Thinking process:
//
// Iterating over the stat_capitals array
// Pass define the parameter in the .map method
// Return the concatenated sentence consisting of a string and the retrieved values from the passed argument depending on the first key is 'state' or 'country' along to the 'capital' as template literals.

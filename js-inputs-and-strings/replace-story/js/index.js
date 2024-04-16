console.clear();

const form = document.querySelector('[data-js="form"]');
const nameInput = document.querySelector('[data-js="name"]');
const colorInput = document.querySelector('[data-js="color"]');
const hoursInput = document.querySelector('[data-js="hours"]');
const output = document.querySelector('[data-js="output"]');

form.addEventListener("submit", (e) => {
	const story = `
"DON'T TOUCH IT, ${nameInput.value.toUpperCase()}!",
I yelled as ${nameInput.value} was about to touch
the walls we had painted ${colorInput.value} not
${hoursInput.value} hours ago.
I would have expected their memory to
last at least ${+hoursInput.value + 1} hours.`;

	e.preventDefault();
	output.innerHTML = story;
});

console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const pizzaElement1 = document.querySelector('[data-js="pizza-1"]');
const pizzaElement2 = document.querySelector('[data-js="pizza-2"]');

const output = document.querySelector('[data-js="output"]');

// Get correct sizes of the pizza elements when page is loaded and reflect them visually
updatePizzaDisplay(pizzaElement1, pizzaInput1.value);
updatePizzaDisplay(pizzaElement2, pizzaInput2.value);

pizzaInput1.addEventListener("input", () => {
  // write your code here
  const pizzaSize1 = pizzaInput1.value;
  const pizzaSize2 = pizzaInput2.value;

  calculatePizzaGain(pizzaSize1, pizzaSize2);
  updatePizzaDisplay(pizzaElement1, pizzaSize1);
});

pizzaInput2.addEventListener("input", () => {
  // write your code here
  const pizzaSize1 = pizzaInput1.value;
  const pizzaSize2 = pizzaInput2.value;

  calculatePizzaGain(pizzaSize1, pizzaSize2);
  updatePizzaDisplay(pizzaElement2, pizzaSize2);
});

// Task 1
// define the function calculatePizzaGain here
function calculatePizzaGain(diameter1, diameter2) {
  const area1 = Math.PI * (diameter1 / 2) * (diameter1 / 2);
  const area2 = Math.PI * (diameter2 / 2) * (diameter2 / 2);

  output.textContent = Math.round(((area2 - area1) / area1) * 100);
}

// Task 2
// define the function updatePizzaDisplay here
function updatePizzaDisplay(pizzaElement, newSize) {
  pizzaElement.style.width = (newSize / 24) * 100 + "px";
}

// updatePizzaDisplay(pizzaElement1, 50);

// Task 3
// define the function updateOutputColor here

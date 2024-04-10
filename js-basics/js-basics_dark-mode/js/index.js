console.clear();

const bodyElement = document.querySelector('[data-js="body"]');
const switchDarkMode = document.querySelector('[data-js="dark-mode-button"]');
const switchLightMode = document.querySelector('[data-js="light-mode-button"]');
const switchToggle = document.querySelector('[data-js="toggle-button"]');

switchDarkMode.addEventListener("click", function() {
	bodyElement.classList.add('dark');
})

switchLightMode.addEventListener("click", function() {
	bodyElement.classList.remove('dark');
})

switchToggle.addEventListener("click", function() {
	bodyElement.classList.toggle('dark');
})
console.clear();

const bodyElement = document.querySelector('[data-js="body"]');
const switchDarkMode = document.querySelector('[data-js="dark-mode-button"]');

switchDarkMode.addEventListener("click", function() {
	bodyElement.classList.add('dark');
})
console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", (e) => {
  // Exercise: Append a new entry to the toast messages container
  e.preventDefault();

  const listItem = document.createElement("li");
  listItem.setAttribute("class", "toast-container__message");

  toastContainer.append(listItem);
  listItem.textContent = "I'm a toast message.";
});

clearButton.addEventListener("click", () => {
  // Exercise: Clear the stack of toast messages
});

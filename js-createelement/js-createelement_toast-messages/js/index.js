console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

function createElement() {
  const listItem = document.createElement("li");
  listItem.setAttribute("class", "toast-container__message");
  listItem.textContent = "I'm a toast message.";

  return listItem;
}

addButton.addEventListener("click", (e) => {
  // Exercise: Append a new entry to the toast messages container
  e.preventDefault();

  const listItemCreated = createElement();
  toastContainer.append(listItemCreated);
});

clearButton.addEventListener("click", (e) => {
  // Exercise: Clear the stack of toast messages
  e.preventDefault();

  toastContainer.innerHTML = "";
});

console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (e) => {
  const formData = new FormData(e.target);
  e.preventDefault();
  
  console.log("Object.fromEntries(formData)): ", Object.fromEntries(formData));

  e.target.reset();
});

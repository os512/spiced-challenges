console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

// Create Section
//
function createSection() {
  const section = document.createElement("section");
  section.setAttribute("class", "post");

  document.querySelector("body").append(section);

  return section;
}

// Create Paragraph
//
function createParagraph() {
  const paragraph = document.createElement("p");
  paragraph.setAttribute("class", "post__content");
  paragraph.textContent =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";

  return paragraph;
}

// Create Footer
//
function createFooter() {
  const footer = document.createElement("footer");
  footer.setAttribute("class", "post__footer");

  return footer;
}

// Create Footer > Span
//
function createSpan() {
  const span = document.createElement("span");
  span.setAttribute("class", "post__username");

  span.textContent = "@username";

  return span;
}

// Create Footer > Button
//
function createButton() {
  const button = document.createElement("button");
  button.setAttribute("class", "post__button");
  button.setAttribute("type", "button");
  button.setAttribute("data-js", "like-button");

  button.textContent = "♥ Like";

  return button;
}

// Register all create element functions
//
function registerCreateElements() {
  const sectionCreated = createSection();
  const paragraphCreated = createParagraph();
  const footerCreated = createFooter();

  sectionCreated.append(paragraphCreated, footerCreated);

  const spanCreated = createSpan();
  const buttonCreated = createButton();

  footerCreated.append(spanCreated, buttonCreated);
}

registerCreateElements();

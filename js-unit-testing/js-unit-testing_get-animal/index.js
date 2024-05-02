export function getAnimal(animals = "") {
  if (animals === "cats") {
    return `I totally love ${animals}!`;
  } else if (animals === "dogs") {
    return `I like ${animals}!`;
  } else {
    return "I do not like animals at all!";
  }
}

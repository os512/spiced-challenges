import { getRandomColor } from "./utils/randomColor.js";
import Circle from "./components/Circle/Circle.js";
import Square from "./components/square/square.js";
import Pentagon from "./components/Pentagon/Pentagon.js";

console.clear();

const root = document.getElementById("root");

const circle = Circle();
const square = Square();
const pentagon = Pentagon();



root.append(circle, square, pentagon);

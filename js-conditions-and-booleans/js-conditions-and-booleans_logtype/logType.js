let data;

// data = null;
// data = "hello";
// data = "234";
// data = 234;
// data = 9007199254740991n;
// data = true;
// data = NaN;
// data = [];
// data = [0];
// data = [1, 34, 4545];
// data = {name: "john"};
// data = () => console.log("chegg");

switch (typeof data) {
	case "undefined":
		console.log("undefined!");
		break;
	case "string":
		console.log("string!");
		break;
	case "function":
		console.log("function!");
		break;
	case "boolean":
		console.log("boolean");
		break;
	case "bigint":
		console.log("bigint!");
		break;
	case "number":
		if (Number.isNaN(data)) {
			console.log("not a number!");
		} else {
			console.log("number!");
		}
		break;
	case "object":
		if (data === null) {
			console.log("null");
		} else if (Array.isArray(data)) {
			console.log("array!");
		} else {
			console.log("object!");
		}
		break;
	default:
		console.log("I have no idea!");
		break;
}

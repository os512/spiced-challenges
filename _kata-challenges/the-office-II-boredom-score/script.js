/*

Challenge: The Office II - Boredom Score

Every now and then people in the office moves teams or departments. Depending what people are doing with their time they can become more or less boring. Time to assess the current team.

You will be provided with an object(staff) containing the staff names as keys, and the department they work in as values.

Each department has a different boredom assessment score, as follows:

accounts = 1
finance = 2
canteen = 10
regulation = 3
trading = 6
change = 6
IS = 8
retail = 5
cleaning = 4
pissing about = 25

Depending on the cumulative score of the team, return the appropriate sentiment:

<=80: 'kill me now'
< 100 & > 80: 'i can handle this'
100 or over: 'party time!!'

*/

describe("Example tests", () => {
	Test.assertEquals(
		boredom({
			tim: "change",
			jim: "accounts",
			randy: "canteen",
			sandy: "change",
			andy: "change",
			katie: "IS",
			laura: "change",
			saajid: "IS",
			alex: "trading",
			john: "accounts",
			mr: "finance",
		}),
		"kill me now"
	);
	Test.assertEquals(
		boredom({
			tim: "IS",
			jim: "finance",
			randy: "pissing about",
			sandy: "cleaning",
			andy: "cleaning",
			katie: "cleaning",
			laura: "pissing about",
			saajid: "regulation",
			alex: "regulation",
			john: "accounts",
			mr: "canteen",
		}),
		"i can handle this"
	);
	Test.assertEquals(
		boredom({
			tim: "accounts",
			jim: "accounts",
			randy: "pissing about",
			sandy: "finance",
			andy: "change",
			katie: "IS",
			laura: "IS",
			saajid: "canteen",
			alex: "pissing about",
			john: "retail",
			mr: "pissing about",
		}),
		"party time!!"
	);
});

const staff = {
	tim: "change",
	jim: "accounts",
	randy: "canteen",
	sandy: "change",
	andy: "change",
	katie: "IS",
	laura: "change",
	saajid: "IS",
	alex: "trading",
	john: "accounts",
	mr: "finance",
};

// Reasoning:
//
// The function `boredom()` takes an object `staff` as argument
// The function `boredom()` returns a string
// Define a count variable `totalBoredomAssessmentScore` and initialize it with 0
// Define an object `boredomAssessmentScores` including all departments with its associated boredom assessment score
// Iterate over the `staff` object and retrieve the departments of every single person
// For every found person multiply its associated department with the respective `boredomAssessmentScores` key
// Adding up the result of the multiplication to the `totalBoredomAssessmentScore` variable
// Return the statement as string conditionally based on how high the `totalBoredomAssessmentScore` is

// Implementation:
//

let totalBoredomAssessmentScore = 0;

const boredomAssessmentScores = {
	accounts: 1,
	finance: 2,
	canteen: 10,
	regulation: 3,
	trading: 6,
	change: 6,
	IS: 8,
	retail: 5,
	cleaning: 4,
	"pissing about": 25,
};

function boredom(staff) {}

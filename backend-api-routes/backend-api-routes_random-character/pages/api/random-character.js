import Chance from "chance";

const chance = new Chance();

// example character object with random values
const character = {
  firstName: chance?.first(),
  lastName: chance?.last(),
  twitterName: chance?.twitter(),
  geohash: chance?.geohash(),
  // ... some more keys here ...
};

export default function handler(request, response) {
  console.log(character);
  response.status(200).json(character);
}

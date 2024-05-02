console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data.results[2].eye_color);

	const results = data.results;

    return data.results.forEach((result) => {
      console.log(result.eye_color);
    });
  } catch (error) {
    console.error(error);
  }
}

fetchData();

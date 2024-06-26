import "./App.css";
import { useState } from "react";

export default function App() {
  const [holiday, setHoliday] = useState(""),
    [date, setDate] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const [holidayInput, dateInput] = event.target.elements;

    setHoliday(holidayInput.value);
    setDate(dateInput.value);
  }

  return (
    <div className="container">
      <h1>Favourite Holiday Data Storage</h1>
      <h2 id="favourite-holiday">Please tell us your favourite holiday!</h2>
      <form
        className="form"
        aria-labelledby="favourite-holiday"
        onSubmit={handleSubmit}
      >
        <label htmlFor="holiday">My Favourite Holiday: </label>
        <input
          id="holiday"
          type="text"
          name="holiday"
          placeholder="e.g. Christmas"
        />
        <label htmlFor="date">Date: </label>
        <input id="date" type="date" name="date" />
        <button type="submit" className="form__submit-button">
          Submit
        </button>
      </form>
      <h2>Output of Submitted Data</h2>
      <p>
        Favourite Holiday:{" "}
        <span className="output">{holiday ? holiday : "New Year"}</span>
      </p>
      <p>
        Date: <span className="output">{date ? date : "Well..."}</span>
      </p>
    </div>
  );
}

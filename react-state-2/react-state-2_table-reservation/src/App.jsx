import Counter from "./components/Counter";
import { useState } from "react";
import "./App.css";

export default function App() {
  const [people, setPeople] = useState(0);

  function handleAddPerson() {
    setPeople(people + 1);
  }

  function handleDeletePerson() {
    people > 0 ? setPeople(people - 1) : 0;
  }

  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter onAdd={handleAddPerson} onDelete={handleDeletePerson}></Counter>
      <p>You are going to reserve a table for {people} people.</p>
    </div>
  );
}

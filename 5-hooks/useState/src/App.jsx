import "./App.css";
import { useState } from "react";

const App = () => {
  const [age, setAge] = useState(25);
  const [year, setYear] = useState(2024);

  const handleAgeIncrease = () => {
    setAge(age + 1);
  };

  const handleYearIncrease = () => {
    setYear(year + 1);
  };

  return (
    <div className="app">
      <h1>Learning useState</h1>

      <div className="age">
        <p> I am {age} years old</p>
        <p> This is year {year}</p>
      </div>
      <button onClick={handleAgeIncrease}>Increment age </button>
      <button onClick={handleYearIncrease}>Increment year </button>
    </div>
  );
};

export default App;

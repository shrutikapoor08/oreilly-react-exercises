import "./App.css";
import { useState } from "react";

const App = () => {
  const [age, setAge] = useState(25);

  const handleAgeIncrease = () => {
    setAge(age + 1);
  };

  const handleAgeDecrease = () => {
    //TODO: Implement this function to decrease age
  };

  return (
    <div className="app">
      <h1>Learning useState</h1>
      <div className="age">
        <p>I am {age} years old </p>
      </div>

      <button onClick={handleAgeIncrease}>Increment age </button>
    </div>
  );
};

export default App;

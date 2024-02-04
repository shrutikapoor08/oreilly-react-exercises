import { useState } from "react";

import "./App.css";

const Name = ({ name }) => {
  return <p className="name-heading">Hi, {name}</p>;
};

const App = () => {
  return (
    <div className="App">
      <Name name="Shruti Kapoor" />
    </div>
  );
};

export default App;

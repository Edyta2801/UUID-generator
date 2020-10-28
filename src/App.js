import React, { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

function App() {

  const [id, setId] = useState(uuidv4());
  const handleClick = () => setId(uuidv4());

  return (
    <div className="App">
      <p>{id}</p>
      <button onClick={handleClick}>Refresh me</button>
    </div>
  );
}

export default App;

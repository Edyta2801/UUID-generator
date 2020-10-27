import React from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

function App() {
  return (
    <div className="App">
     <p>{uuidv4()}</p>
    </div>
  );
}

export default App;

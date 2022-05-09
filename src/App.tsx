import React from "react";
import { Addcount } from "./Addcount";

import "./App.css";
import { Count } from "./count";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Count />
        <Addcount />
      </header>
    </div>
  );
}

export default App;

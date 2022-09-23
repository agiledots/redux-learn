import React from "react";
import "./App.css";

import Count1 from "./components/Count1";
import Count2 from "./components/Count2";
import Count3 from "./components/Count3";

function App() {
  return (
    <div>
      <div className="App">
        <Count1></Count1>
        <Count2></Count2>
        <Count3></Count3>
      </div>
    </div>
  );
}

export default App;

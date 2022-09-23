import React from "react";
import "./App.css";

import store from "./store/index";

function App() {
  return (
    <div>
      <div className="App">
        <h1>Redux Learn</h1>
        <p>Count:{store.getState().count}</p>
      </div>
    </div>
  );
}

export default App;

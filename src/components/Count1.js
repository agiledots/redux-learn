import React from "react";

import store from "../store/index";

// Componentsは 直接に store で redudx の state を取得

function Count1({ count }) {
  return (
    <div>
      <div className="App">
        <h1>Redux Learn</h1>
        <p>Count1: {store.getState().count}</p>
      </div>
    </div>
  );
}

export default Count1;

import React from "react";

function App() {

  type WindowStates = "open" | "closed" | "minimized";

  const getWindowStates = (temp : WindowStates) => {
    return temp;
  }
  const tmp = getWindowStates("closed");
  return (
    <div className="App">
      <h1>{tmp}</h1>
    </div>
  );
}

export default App;

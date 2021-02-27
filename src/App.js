import React from "react";
import Opening from "./pages/Opening";

import "./App.scss";

const data = {
  background: "img",
  des: ["text1", "text2"],
  selectiong: [
    {
      A: "optionA",
      B: "optionB",
    },
  ],
};

const a = () => {};

function App() {
  return (
    <div className="App">
      <Opening></Opening>
    </div>
  );
}

export default App;

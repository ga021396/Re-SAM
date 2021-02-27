import React from "react";
import Opening from "./pages/Opening";
import Mask from "./pages/Mask";

import { useSelector } from "react-redux";
import { getLoading } from "./store/stage/selectors";

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
  const isLoading = useSelector(getLoading);
  return (
    <div className="App">
      {isLoading && <Mask></Mask>}
      <Opening></Opening>
    </div>
  );
}

export default App;

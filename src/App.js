import React from "react";
import Opening from "./pages/Opening";
import Mask from "./pages/Mask";
import Scene from "./pages/Scene";

import { useSelector } from "react-redux";
import { getLoading, getScene } from "./store/stage/selectors";

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
  const scene = useSelector(getScene);

  return (
    <div className="App">
      {isLoading && <Mask></Mask>}
      {scene === 0 && <Opening></Opening>}
      {scene === 1 && <Scene></Scene>}
    </div>
  );
}

export default App;

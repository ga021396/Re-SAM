import React from "react";
import OpenAnimation from "./pages/OpenAnimation";
import Opening from "./pages/Opening";
import Mask from "./pages/Mask";
import Scene from "./pages/Scene";

import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getLoading, getScene } from "./store/stage/selectors";
import { scene1, scene2 } from "./data";
import opening from "./music/opening.mp3";

import "./App.scss";

function App() {
  const isLoading = useSelector(getLoading);
  const scene = useSelector(getScene);
  const [audio, setAudio] = useState(new Audio(opening));

  const handleClickOptionA = () => {};
  const handleClickOptionB = () => {};

  const playAudio = () => {
    audio.volume = 0.1;
    audio.play();
  };

  const pauseAudio = () => {
    audio.pause();
  };

  return (
    <div className="App">
      {isLoading && <Mask></Mask>}
      {scene === 0 && <OpenAnimation playAudio={playAudio}></OpenAnimation>}
      {scene === 1 && (
        <Opening
          audio={audio}
          setAudio={(audio) => setAudio()}
          playAudio={playAudio}
          pauseAudio={pauseAudio}
        ></Opening>
      )}
      {scene === 2 && (
        <Scene
          audio={audio}
          setAudio={(audio) => setAudio()}
          playAudio={playAudio}
          pauseAudio={pauseAudio}
          data={scene1}
          nextScene={3}
          Afn={handleClickOptionA}
          Bfn={handleClickOptionB}
        ></Scene>
      )}
      {scene === 3 && (
        <Scene
          audio={audio}
          setAudio={(audio) => setAudio()}
          playAudio={playAudio}
          pauseAudio={pauseAudio}
          data={scene2}
          nextScene={4}
          Afn={handleClickOptionA}
          Bfn={handleClickOptionB}
        ></Scene>
      )}
    </div>
  );
}

export default App;

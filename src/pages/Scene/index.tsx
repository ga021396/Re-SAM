import "./scene.scss";
import { useState } from "react";
import { Scene as SceneType } from "../../store/scene1/type";
import { useDispatch } from "react-redux";
import { fetchLoading, fetchScene } from "../../store/stage/action";

const snow = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

type SceneProps = {
  data: SceneType;
  nextScene: number;
  Afn?: any;
  Bfn?: any;
};

type AudioHandler = {
  audio: any;
  setAudio: any;
  playAudio: any;
  pauseAudio: any;
};

function Scene({
  data,
  nextScene,
  Afn,
  Bfn,
  audio,
  setAudio,
  playAudio,
  pauseAudio,
}: SceneProps & AudioHandler) {
  const dispatch = useDispatch();
  const [order, setOrder] = useState(0);

  const isOption = data.text[order]?.option;

  const handleNextText = () => {
    if (order < data.text.length - 1) setOrder(order + 1);
    else {
      dispatch(fetchLoading(true));
      setTimeout(() => {
        dispatch(fetchScene(nextScene));
      }, 2000);
      setTimeout(() => {
        dispatch(fetchLoading(false));
      }, 4000);
    }
  };

  const handleClickOption = (fn: any) => {
    fn();
    handleNextText();
  };

  return (
    <div className="scene-container">
      {snow.map(() => (
        <div className="svg"></div>
      ))}
      <div
        className="scene-content"
        style={{ backgroundImage: `url(${data.background})` }}
      >
        {isOption && (
          <div className="option-container">
            <button className="option" onClick={() => handleClickOption(Afn)}>
              {isOption && isOption.A}
            </button>
            <button className="option" onClick={() => handleClickOption(Bfn)}>
              {isOption && isOption.B}
            </button>
          </div>
        )}
        <div className="text-container" onClick={handleNextText}>
          {data.text[order].role && <label>{data.text[order].role}</label>}
          {data.text[order].des}
        </div>
      </div>
    </div>
  );
}

export default Scene;

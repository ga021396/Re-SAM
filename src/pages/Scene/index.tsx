import "./scene.scss";

import { useDispatch } from "react-redux";
import { fetchLoading, fetchScene } from "../../store/stage/action";

const snow = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

function Scene() {
  return (
    <div className="scene-container">
      {snow.map(() => (
        <div className="svg"></div>
      ))}
      <div className="scene-content">
        <div className="option-container">
          <button className="option">yes</button>
          <button className="option">no</button>
        </div>
        <div className="text-container">
          <label>cliff</label>
          測是蚊子 一 一一
        </div>
      </div>
    </div>
  );
}

export default Scene;

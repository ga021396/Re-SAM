import "./opening.scss";
import { useSelector, useDispatch } from "react-redux";
import { getHero } from "../../store/hero/selectors";
import { Hero } from "../../store/hero/type";
import { useState } from "react";
import { fetch } from "../../store/hero/action";

function Opening() {
  const dispatch = useDispatch();

  return (
    <div className="scene-container">
      <div className="btnCon">
        <button className="Btn" onClick={() => {}}>
          開始
        </button>

        <div className="Btn" onClick={() => {}}>
          說明
        </div>
      </div>
    </div>
  );
}

export default Opening;

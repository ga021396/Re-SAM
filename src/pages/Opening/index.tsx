import "./opening.scss";
import { useSelector, useDispatch } from "react-redux";
import { getHero } from "../../store/hero/selectors";
import { Hero } from "../../store/hero/type";
import { useState } from "react";
import { fetch } from "../../store/hero/action";

const snow = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

function Opening() {
  const dispatch = useDispatch();

  return (
    <div className="container">
      {snow.map(() => (
        <div className="svg"></div>
      ))}

      <div className={"titleContainer"}>
        <div className={"title"}>Re:Sam</div>
        <div className="btnCon">
          <button className="Btn" onClick={() => {}}>
            開始
          </button>

          <div className="Btn" onClick={() => {}}>
            說明
          </div>
        </div>
      </div>
    </div>
  );
}

export default Opening;

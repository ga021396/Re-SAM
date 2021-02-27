import "./opening.scss";

import { useDispatch } from "react-redux";
import { fetchLoading, fetchScene } from "../../store/stage/action";

const snow = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

function Opening() {
  const dispatch = useDispatch();
  const handle = () => {
    dispatch(fetchLoading(true));
    setTimeout(() => {
      dispatch(fetchScene(1));
    }, 2000);
    setTimeout(() => {
      dispatch(fetchLoading(false));
    }, 4000);
  };

  return (
    <div className="container">
      {snow.map(() => (
        <div className="svg"></div>
      ))}

      <div className={"loadingContainer"}>
        <div className="firText">如果可以回到過去</div>
        <div className="secText">你會怎麼選擇呢</div>
      </div>

      <div className={"titleContainer"}>
        <div className={"title"}>Re:Sam</div>
        <div className="btnCon">
          <button className={"Btn cur"} onClick={handle}>
            開始
          </button>
        </div>
      </div>
    </div>
  );
}

export default Opening;

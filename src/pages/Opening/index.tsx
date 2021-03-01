import "./opening.scss";
import { useDispatch } from "react-redux";
import { fetchLoading, fetchScene } from "../../store/stage/action";

const snow = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

type AudioHandler = {
  audio: any;
  setAudio: any;
  playAudio: any;
  pauseAudio: any;
};

function Opening({ pauseAudio }: AudioHandler) {
  const dispatch = useDispatch();
  const handle = () => {
    dispatch(fetchLoading(true));
    setTimeout(() => {
      dispatch(fetchScene(2));
      pauseAudio();
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

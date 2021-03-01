import "./openAnimation.scss";
import { useDispatch } from "react-redux";
import { fetchScene } from "../../store/stage/action";
import { useState, useEffect } from "react";

function OpenAnimation({ playAudio }: any) {
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);

  const handleClick = () => {
    if (count === 2) {
      playAudio();
      dispatch(fetchScene(1));
    } else {
      setCount(count + 1);
    }
  };

  return (
    <div className="container">
      <div className={"loadingContainer"} onClick={handleClick}>
        {count === 0 && (
          <div className="typewriter">
            <h1>我的名字叫做張家盛。</h1>
          </div>
        )}
        {count === 1 && (
          <div className="typewriter">
            <h1>這是一個屬於我的故事。</h1>
          </div>
        )}
        {count === 2 && (
          <div className="typewriter">
            <h1>一個有「如果」的故事。</h1>
          </div>
        )}

        {/* <div className="firText">如果可以回到過去</div>
        <div className="secText">你會怎麼選擇呢</div> */}
      </div>
    </div>
  );
}

export default OpenAnimation;

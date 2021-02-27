import { combineReducers } from "redux";
import stageReducer from "./stage/reducer";
import heroReducer from "./hero/reducer";
import scene1Reducer from "./scene1/reducer";

export default combineReducers({
  stage: stageReducer,
  hero: heroReducer,
  scene1: scene1Reducer,
});

import { combineReducers } from "redux";
import { createReducer } from "typesafe-actions";
import { fetchLoadingAsync, fetchMessageAsync } from "./action";

export const loading = createReducer(false as boolean).handleAction(
  [fetchLoadingAsync.success],
  (state: any, action: any) => {
    return action.payload;
  }
);

export const message = createReducer("" as string).handleAction(
  [fetchMessageAsync.success],
  (state: any, action: any) => {
    return action.payload;
  }
);

const stageReducer = combineReducers({
  loading,
  message,
});

export default stageReducer;
export type countState = ReturnType<typeof stageReducer>;

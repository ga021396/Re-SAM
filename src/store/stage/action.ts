import { Dispatch } from "redux";
import { createAsyncAction, RootAction, RootState } from "typesafe-actions";

export const fetchLoadingAsync = createAsyncAction(
  "FETCH_REQUEST",
  "FETCH_LOADING_SUCCESS",
  "FETCH_FAILURE"
)<undefined, boolean, Error>();

export const fetchSceneAsync = createAsyncAction(
  "FETCH_REQUEST",
  "FETCH_SCENE_SUCCESS",
  "FETCH_FAILURE"
)<undefined, number, Error>();

export const fetchMessageAsync = createAsyncAction(
  "FETCH_REQUEST",
  "FETCH_MESSAGE_SUCCESS",
  "FETCH_FAILURE"
)<undefined, string, Error>();

export const fetchLoading = (mask: boolean): any => async (
  dispatch: Dispatch<RootAction>,
  getState: () => RootState
) => {
  dispatch(fetchLoadingAsync.success(mask));
};

export const fetchScene = (scene: number): any => async (
  dispatch: Dispatch<RootAction>,
  getState: () => RootState
) => {
  dispatch(fetchSceneAsync.success(scene));
};

export const fetchMessage = (message: string): any => async (
  dispatch: Dispatch<RootAction>,
  getState: () => RootState
) => {
  dispatch(fetchMessageAsync.success(message));
};

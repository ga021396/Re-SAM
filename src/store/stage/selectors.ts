import { createSelector } from "reselect";
import { RootState } from "typesafe-actions";
import { countState } from "./reducer";

export const getState = (state: RootState) => state.stage;

export const getLoading = createSelector(
  getState,
  (state: countState) => state.loading
);

export const getScene = createSelector(
  getState,
  (state: countState) => state.scene
);

export const getMessage = createSelector(
  getState,
  (state: countState) => state.message
);

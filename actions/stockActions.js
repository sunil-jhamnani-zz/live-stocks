import {TOGGLE_MODE} from "../actionTypes/stockActionTypes";

export const ToggleMode = viewMode => ({
  type: TOGGLE_MODE,
  viewMode
});
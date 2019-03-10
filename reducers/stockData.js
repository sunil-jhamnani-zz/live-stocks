import {TOGGLE_MODE} from "../actionTypes/stockActionTypes";

const initialState = {
  viewMode: 'tags'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MODE:
      return { ...state, viewMode: action.viewMode};
    default:
      return state;
  }
}
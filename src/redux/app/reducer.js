import * as actionTypes from "./actionType";

const initialState = {
  name: ""
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DISPLAY_TEXT:
      return {
        ...state,
        name: action.name
      };
    case actionTypes.SET_MOBILE_NAMES:
      return {
        ...state,
        mobiles: action.mobileList
      };
    default:
      return state;
  }
};

export default appReducer;

import * as actionTypes from "./actionType";

export const setName = name => {
  return { type: actionTypes.DISPLAY_TEXT, name };
};

export const getMobilesName = mobileList => {
  return { type: actionTypes.SET_MOBILE_NAMES, mobileList };
};

import { createStore } from "redux";
import rootReducer from "./reducer";
import { combineReducers } from "redux";

const store = createStore(combineReducers(rootReducer));

export default store;

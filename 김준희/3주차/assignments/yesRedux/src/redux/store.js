import { createStore } from "redux";
import rootReducer from "./reducer"; // rootReducer를 import합니다.

const initialState = {
  count: 0,
};

const store = createStore(rootReducer, initialState); // initialState를 createStore 함수에 전달합니다.

export default store;

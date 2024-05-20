import { INCREMENT } from "./actions";
import initialState from "./store";



const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    default:
      return state;
  }
};

export default rootReducer;

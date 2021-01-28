import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";
import translate from "./translate";
import user from "./user";

const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default: {
      const combineReducer = combineReducers({
        user,
        translate,
      });
      return combineReducer(state, action);
    }
  }
};
export default rootReducer;

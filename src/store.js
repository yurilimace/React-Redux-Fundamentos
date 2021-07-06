import { createStore } from "redux";
import MessageReducer from "./reducers/message";
import UserReducer from "./reducers/user";
import { combineReducers } from "redux";
const initialState = { message: "" };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "change":
//       console.log(action, "<---- action");
//       return { ...state, message: action.teste };
//     default:
//       return state;
//   }
// };

const store = createStore(
  combineReducers({ User: UserReducer, Message: MessageReducer })
);

export default store;

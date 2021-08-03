import { createStore, applyMiddleware } from "redux";
import MessageReducer from "./reducers/message";
import UserReducer from "./reducers/user";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import DogsReducer from "./reducers/dogs";
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
  combineReducers({
    User: UserReducer,
    Message: MessageReducer,
    Dogs: DogsReducer,
  }),
  applyMiddleware(thunk)
);

export default store;

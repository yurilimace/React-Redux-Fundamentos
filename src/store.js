import { createStore, applyMiddleware } from "redux";
import MessageReducer from "./reducers/message";
import UserReducer from "./reducers/user";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import DogsReducer from "./reducers/dogs";
import createSagaMiddleware from "redux-saga";
import MySaga from "./Sagas/saga";
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
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  combineReducers({
    User: UserReducer,
    Message: MessageReducer,
    Dogs: DogsReducer,
  }),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(MySaga);

export default store;

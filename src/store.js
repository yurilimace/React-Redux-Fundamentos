import { createStore } from "redux";

const initialState = { message: "" };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "change":
      console.log(action, "<---- action");
      return { ...state, message: action.teste };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;

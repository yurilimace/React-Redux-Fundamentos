const MessageReducer = (state = { message: "" }, action) => {
  switch (action.type) {
    case "changeMessage":
      console.log(action, "<---- action");
      return { ...state, message: action.teste };
    default:
      return state;
  }
};

export default MessageReducer;

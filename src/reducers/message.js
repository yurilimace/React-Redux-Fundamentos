const MessageReducer = (state = { message: "" }, action) => {
  switch (action.type) {
    case "changeMessage":
      return { ...state, message: action.teste };
    default:
      return state;
  }
};

export default MessageReducer;

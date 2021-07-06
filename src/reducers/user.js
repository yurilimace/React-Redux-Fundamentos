const UserReducer = (state = { User: { Name: "", Age: 0 } }, action) => {
  switch (action.type) {
    case "change":
      return { ...state, User: { Name: action.Name, Age: action.Age } };
    default:
      return state;
  }
};

export default UserReducer;

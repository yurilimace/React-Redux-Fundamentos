const DogsReducer = (state = { listofDogs: [] }, action) => {
  switch (action.type) {
    case "LoadedList":
      console.log("disparou");
      return { ...state, listofDogs: action.payload };
    default:
      return state;
  }
};

export default DogsReducer;

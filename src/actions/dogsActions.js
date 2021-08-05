import BaseApi from "../backend/baseApi";

export function LoadDogList() {
  return async (dispatch) => {
    const { data } = await BaseApi.get("/list/all");
    const reponseListHandler = Object.keys(data.message).map((x) => {
      if (data.message[x].length > 0) {
        return { name: x, list: data.message[x] };
      }
      return undefined;
    });
    const filtredResponseList = await reponseListHandler.filter(
      (x) => x !== undefined
    );

    dispatch({ type: "LoadedList", payload: filtredResponseList });
  };
}

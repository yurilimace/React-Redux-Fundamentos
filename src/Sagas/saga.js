import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import BaseApi from "../backend/baseApi";

async function obtainDogList() {
  try {
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
    return filtredResponseList;
  } catch (err) {
    console.log(err);
    console.log("deu ruim");
  }
}

function* getDogList(action) {
  const response = yield call(obtainDogList);
  yield put({ type: "LoadedList", payload: response });
}

function* MySaga() {
  console.log("disparou");
  yield takeEvery("ACTION_DISPATCH_SAGA", getDogList);
}

export default MySaga;

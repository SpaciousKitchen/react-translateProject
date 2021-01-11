import { all, fork } from "redux-saga/effects";
import axios from "axios";
import userSaga from "./user";
import translateSaga from "./translate";

axios.defaults.withCredentials = true;

export function* rootSaga() {
  yield all([fork(userSaga), fork(translateSaga)]);
}

export default rootSaga;

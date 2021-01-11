import { all, takeLatest, fork, put } from "redux-saga/effects";

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
} from "../reducers/user";

// function loginAPI(data) {
//   return axios.post("http://172.30.1.52:5000/login", data);
// }

function* login(action) {
  // const result = yield call(loginAPI, action.data);
  console.log(action.data);
  try {
    yield put({
      type: LOGIN_SUCCESS,
      // data: result.data.googleId,
      data: "ddd",
    });
  } catch (error) {
    yield put({
      type: LOGIN_FAILURE,
      error: error.response.data,
    });
  }
}

function* watchlogin() {
  yield takeLatest(LOGIN_REQUEST, login);
}

// function logoutAPI(data) {
//   return axios.post("/logout", data, { withCredentials: true });
// }

function* logout(action) {
  // const result = yield call(logoutAPI, action.id);
  console.log(action.data);
  try {
    yield put({
      type: LOGOUT_SUCCESS,
    });
  } catch (error) {
    yield put({
      type: LOGOUT_FAILURE,
      error: error.response.data,
    });
  }
}

function* watchlogout() {
  yield takeLatest(LOGOUT_REQUEST, logout);
}

export default function* translateSaga() {
  console.log("watch Saga");
  yield all([fork(watchlogin), fork(watchlogout)]);
}

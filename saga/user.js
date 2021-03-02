import { all, takeLatest, fork, put, call } from "redux-saga/effects";
import axios from "axios";
import {
  LOAD_USERINFO_REQUEST,
  LOAD_USERINFO_SUCCESS,
  LOAD_USERINFO_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  SEND_EMAIL_REQUEST,
  SEND_EMAIL_SUCCESS,
  SEND_EMAIL_FAILURE,
} from "../reducers/user";
import { LOAD_TRANSLATE_SIMPLE_REQUEST } from "../reducers/translate";

function loadUserInfoAPI() {
  return axios.get("/loadUserInfo");
}

function* loadUserInfo() {
  const result = yield call(loadUserInfoAPI);

  try {
    yield put({
      type: LOAD_USERINFO_SUCCESS,
      data: result.data,
    });
    yield put({
      type: LOAD_TRANSLATE_SIMPLE_REQUEST,
    });
  } catch (error) {
    yield put({
      type: LOAD_USERINFO_FAILURE,
      error: error.response.data,
    });
  }
}

function* watchloadUserInfo() {
  yield takeLatest(LOAD_USERINFO_REQUEST, loadUserInfo);
}

function loginAPI(data) {
  return axios.post("/login", data);
}

function* login(action) {
  const result = yield call(loginAPI, action.data, { withCredentials: true });

  try {
    yield put({
      type: LOGIN_SUCCESS,
      data: result.data,
    });
    yield put({
      type: LOAD_TRANSLATE_SIMPLE_REQUEST,
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

function logoutAPI(data) {
  return axios.post("/logout", data, { withCredentials: true });
}

function* logout(action) {
  const result = yield call(logoutAPI, action.id);

  try {
    yield put({
      type: LOGOUT_SUCCESS,
    });
  } catch (error) {
    yield put({
      type: LOGOUT_FAILURE,
      error: result.data.error,
    });
  }
}

function* watchlogout() {
  yield takeLatest(LOGOUT_REQUEST, logout);
}

function sendEmailAPI(data) {
  return axios.post("/mail", data);
}

function* sendEmail(action) {
  const result = yield call(sendEmailAPI, action.data);

  if (result.data.error) {
    yield put({
      type: SEND_EMAIL_FAILURE,
      error: result.data.error,
    });
    return;
  }

  try {
    yield put({
      type: SEND_EMAIL_SUCCESS,
    });
  } catch (error) {
    yield put({
      type: SEND_EMAIL_FAILURE,
      error: result.data.error,
    });
  }
}

function* watchSendEmail() {
  yield takeLatest(SEND_EMAIL_REQUEST, sendEmail);
}

export default function* translateSaga() {
  yield all([
    fork(watchloadUserInfo),
    fork(watchlogin),
    fork(watchlogout),
    fork(watchSendEmail),
  ]);
}

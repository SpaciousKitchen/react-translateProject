import axios from "axios";
import { all, takeLatest, fork, put, call } from "redux-saga/effects";
import {
  LOAD_TRANSLATE_SIMPLE_REQUEST,
  LOAD_TRANSLATE_SIMPLE_SUCCESS,
  LOAD_TRANSLATE_SIMPLE_FAILURE,
  TRANSLATE_SIMPLE_REQUEST,
  TRANSLATE_SIMPLE_SUCCESS,
  TRANSLATE_SIMPLE_FAILURE,
  TRANSLATE_TEMPLATE_REQUEST,
  TRANSLATE_TEMPLATE_SUCCESS,
  TRANSLATE_TEMPLATE_FAILURE,
  REMOVE_SIMPLE_REQUEST,
  REMOVE_SIMPLE_SUCCESS,
  REMOVE_SIMPLE_FAILURE,
} from "../reducers/translate";

function loadtranslateSimpleAPI(data) {
  return axios.post("/history", data);
}

function* loadTranslateSimple(action) {
  const result = yield call(loadtranslateSimpleAPI, action.data);

  try {
    yield put({
      type: LOAD_TRANSLATE_SIMPLE_SUCCESS,
      data: result.data.response,
    });
  } catch (error) {
    yield put({
      type: LOAD_TRANSLATE_SIMPLE_FAILURE,
      error: result.data.error,
    });
  }
}

function* watchLoadTranslateSimple() {
  yield takeLatest(LOAD_TRANSLATE_SIMPLE_REQUEST, loadTranslateSimple);
}
function translateSimpleAPI(data) {
  return axios.post("/extractverbphrase", data);
}

function* translateSimple(action) {
  const result = yield call(translateSimpleAPI, action.data);
  try {
    yield put({
      type: TRANSLATE_SIMPLE_SUCCESS,
      data: result.data.response,
    });
  } catch (error) {
    yield put({
      type: TRANSLATE_SIMPLE_FAILURE,
      error: result.data.error,
    });
  }
}

function* watchTranslateSimple() {
  yield takeLatest(TRANSLATE_SIMPLE_REQUEST, translateSimple);
}

function translateTemplateAPI(data) {
  return axios.post("/extractverbphrase", data);
}

function* translateTemplate(action) {
  const result = yield call(translateTemplateAPI, action.data);

  try {
    yield put({
      type: TRANSLATE_TEMPLATE_SUCCESS,
      id: result.data.response.id,
      output: result.data.response.output,
      option: action.value,
    });
  } catch (error) {
    yield put({
      type: TRANSLATE_TEMPLATE_FAILURE,
      error: result.data.error,
    });
  }
}

function* watchTranslateTemplate() {
  yield takeLatest(TRANSLATE_TEMPLATE_REQUEST, translateTemplate);
}

function removeSimpleAPI(data) {
  return axios.post("/delhistory", data);
}

function* removeSimple(action) {
  const result = yield call(removeSimpleAPI, action.data);

  try {
    yield put({
      type: REMOVE_SIMPLE_SUCCESS,
      historyid: result.data.response.historyid,
    });
  } catch (error) {
    yield put({
      type: REMOVE_SIMPLE_FAILURE,
      error: result.data.error,
    });
  }
}

function* watchRemoveSimple() {
  yield takeLatest(REMOVE_SIMPLE_REQUEST, removeSimple);
}

export default function* translateSaga() {
  yield all([
    fork(watchLoadTranslateSimple),
    fork(watchRemoveSimple),
    fork(watchTranslateSimple),
    fork(watchTranslateTemplate),
  ]);
}

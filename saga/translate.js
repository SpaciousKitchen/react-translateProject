import axios from "axios";

import { all, takeLatest, fork, put, call } from "redux-saga/effects";
import faker from "faker";
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
} from "../reducers/translate";

function loadtranslateSimpleAPI(data) {
  return axios.post("/history", data);
}

function* loadTranslateSimple(action) {
  console.log("load_history");
  const result = yield call(loadtranslateSimpleAPI, action.data);
  console.log(result);
  try {
    yield put({
      type: LOAD_TRANSLATE_SIMPLE_SUCCESS,
      data: result.data.response.result,
    });
  } catch (error) {
    console.log("fails");
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
  console.log(result);
  try {
    yield put({
      type: TRANSLATE_SIMPLE_SUCCESS,
      Output: result.data.response.output,
      Input: action.data.content,
      id: faker.random.number(),
    });
  } catch (error) {
    console.log("fails");
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
      Output: result.data.response.output,
      Input: action.data,
      Prams: action.value,
      id: faker.random.number(),
      option: action.value,
    });
  } catch (error) {
    console.log("fails");

    yield put({
      type: TRANSLATE_TEMPLATE_FAILURE,
      error: result.data.error,
    });
  }
}

function* watchTranslateTemplate() {
  yield takeLatest(TRANSLATE_TEMPLATE_REQUEST, translateTemplate);
}

export default function* translateSaga() {
  console.log("watch SagaTranslate");
  yield all([
    fork(watchLoadTranslateSimple),
    fork(watchTranslateSimple),
    fork(watchTranslateTemplate),
  ]);
}

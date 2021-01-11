import { applyMiddleware, compose, createStore } from "redux";

import { createWrapper } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import reducer from "../reducers";
// eslint-disable-next-line import/no-named-as-default
import rootSaga from "../saga";

const configureStore = () => {
  const sagaMiddleWare = createSagaMiddleware();
  const midlewares = [sagaMiddleWare];
  const enhance =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(...midlewares))
      : composeWithDevTools(applyMiddleware(...midlewares));
  const store = createStore(reducer, enhance);
  store.sagaTask = sagaMiddleWare.run(rootSaga);
  return store;
};
const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === "development",
});

export default wrapper;

import thunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";

import { createLogger } from "redux-logger";

import { countReducer } from "./reducers/countReducer";
import { postsReducer } from "./reducers/postsReducer";

const rootReducer = combineReducers({
  countReducer,
  postsReducer,
});

// https://www.npmjs.com/package/redux-logger
const logger = createLogger({
  // ...options
});

const middlewares = [
  thunk,
  process.env.NODE_ENV !== "production" && logger,
].filter(Boolean);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);
console.log(store.getState());

export default store;

import thunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware } from "redux";

import { countReducer } from "./reducers/countReducer";
import { postsReducer } from "./reducers/postsReducer";

const rootReducer = combineReducers({
  countReducer,
  postsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
console.log(store.getState());

export default store;

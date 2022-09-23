import { createStore, combineReducers } from "redux";
import { countReducer } from "./reducers/countReducer";
import { postsReducer } from "./reducers/postsReducer";

const rootReducer = combineReducers({
  countReducer,
  postsReducer,
});

const store = createStore(rootReducer);
console.log(store.getState());

export default store;

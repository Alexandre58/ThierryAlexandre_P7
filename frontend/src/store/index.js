import { applyMiddleware, combineReducers, createStore } from "redux";
import rootReducer from "../reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { getPosts } from "../actions/post.action";
//import { AuthReducer } from "../reducer/AuthReducer";

/*
const reducers = combineReducers({
  auth: AuthReducer,
})
*/

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
store.dispatch(getPosts());

export default store;
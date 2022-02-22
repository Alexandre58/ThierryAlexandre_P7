import { applyMiddleware, createStore } from "redux";
import rootReducer from "../reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { getPosts } from "../actions/post.action";
//import { getUser } from "../actions/user.actions";
//import { getUserToken } from "../actions/user.actions";
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
//store.dispatch(getUser());
//store.dispatch(getUserToken());

export default store;
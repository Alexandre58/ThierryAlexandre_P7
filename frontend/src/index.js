import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//redux
import { Provider } from "react-redux";
import store from "./store";
/*
//import thunk/communication asynchrone avec application externe
import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";//import composeWithDevToolsa retirer en production
import rootReducer from  './reducer';
import { getPosts } from './actions/post.action';
*/
/*
 store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))
//dispatch getPosts proviens de post.action//des que le store est monté il est envoyé 
//store va =-1 post-action
store.dispatch(getPosts())
*/

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);



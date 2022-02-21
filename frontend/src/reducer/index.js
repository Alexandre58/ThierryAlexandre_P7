import { combineReducers } from "redux";
import  userReducer  from "./user.reducer";
import  postReducer  from "./post.reducer";
//

//stock tout les reducer et envoi a l'index.js
/*
const initialState = {
    uid: "user id",
    userName: "Joel",
    userEmail: "ntjoel19@gmail.com",
    job: "OpenClassrooms and fullstack dev",
    techno:"Js,Backend nodejs, React, angular ,redux..",
    pays: "Cameroun"
   
  };
   */
  const initialState = {}
  const rootReducer = (state = initialState, action) => {
    return state;
  };
 
  //va   vers index src et proviens de post et user reducer
  export default combineReducers({
    rootReducer,
    userReducer,
    postReducer
  })

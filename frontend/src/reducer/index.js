import { combineReducers } from "redux";
import  userReducer  from "./user.reducer";
import  postReducer  from "./post.reducer";
//

//stock tout les reducer et envoi a l'index.js

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

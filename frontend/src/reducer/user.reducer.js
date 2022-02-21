import {
  GET_USER,
  GET_USER_TOKEN,
  UPLOAD_PICTURE,
 // GET_USER_ERROR,
} from "../actions/user.actions";

const initialState = {};

export default function userReducer(state = initialState, action) {
  if (action.type === GET_USER) {
    return action.payload;
  } else if (action.type === GET_USER_TOKEN) {
    return action.payload;
  }
 switch (action.type) {
   case GET_USER:
     return action.payload
   case UPLOAD_PICTURE:
     return {
       ...state,
       picture: action.payload
     }

   default:
     return state;
 }


 
}

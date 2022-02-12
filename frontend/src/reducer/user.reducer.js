import {
  GET_USER,
  GET_USER_TOKEN,
  GET_USER_ERROR,
} from "../actions/user.actions";

const initialState = {};

export default function userReducer(state = initialState, action) {
  if (action.type == GET_USER) {
    return action.paylod;
  } else if (action.type == GET_USER_TOKEN) {
    return action.paylod;
  }
  return state;
}

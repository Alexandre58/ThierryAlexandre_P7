
import { ADD_POSTS, GET_POSTS, ADD_COMMENT } from "../actions/post.action";

const initialState = {};

//traitement des donnée de post.action
//proviens de post.action /envoi ver index.js/reducer
export default function postReducer(state = initialState, action) {
    switch (action.type) {
        case GET_POSTS:
            return action.payload;
        case ADD_POSTS:
            return [action.payload, ...state];
        case ADD_COMMENT:
            return action.payload;
        default:
            return state;
    }
}




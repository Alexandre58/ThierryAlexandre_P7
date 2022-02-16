import axios from "axios";

export const GET_USER = "GET_USER";
export const GET_USER_ERROR = "GET_USER_ERROR";
export const GET_USER_TOKEN = "GET_USER_TOKEN";

//envoi ver post.reducer avec dispatch(dispatch envoi vers le reducer)
export const getUser = userId => {
  return dispatch => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}api/${userId}/profiluser`)
      .then(res => {
        dispatch({ type: GET_USER, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: GET_USER_ERROR, payload: err });
      });
  };
};

export const getUserToken = () => {
  return dispatch => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}/tokenRecup`)
      .then(res => {
        dispatch({ type: GET_USER_TOKEN, payload: res.data });
      });
  };
};

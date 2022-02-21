import axios from "axios";

export const GET_USER = "GET_USER";
export const GET_USER_ERROR = "GET_USER_ERROR";
export const GET_USER_TOKEN = "GET_USER_TOKEN";
export const UPLOAD_PICTURE = "UPLOAD_PICTURE";

//envoi ver post.reducer avec dispatch(dispatch envoi vers le reducer)
export const getUser = (userId) => {
  return (dispatch) => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}/api/${userId}/profiluser`)
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
      .get(`${process.env.REACT_APP_API_URL}tokenRecup`)
      .then(res => {
        dispatch({ type: GET_USER_TOKEN, payload: res.data });
      });
  };
};

export const uploadPicture = (data, id) => {
  return (dispatch)=> {
    return axios 
    .post(`${process.env.REACT_APP_API_URL}/api/users/profil/`, data)
    .then((res) => {
      return axios 
      .get(`${process.env.REACT_APP_API_URL}/api/users/${id}/`)
      .then((res) => {
        dispatch({type: UPLOAD_PICTURE, payload: res.data.avatar})
      })
      .catch((err)=> {
        console.log(err);
      })
    })
  }
}

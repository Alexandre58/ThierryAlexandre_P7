import axios from "axios";

export const GET_USER = "GET_USER";
export const GET_USER_ERROR = "GET_USER_ERROR";
export const GET_USER_TOKEN = "GET_USER_TOKEN";
export const UPLOAD_PICTURE = "UPLOAD_PICTURE";
export const UPDATE_BIO = "UPDATE_BIO";

//envoi ver post.reducer avec dispatch(dispatch envoi vers le reducer)
export const getUser = () => {
  return (dispatch) => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}/api/users/ `)
      .then(res => {
        dispatch({ type: GET_USER, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: GET_USER_ERROR, payload: err });
      });
  };
};
//token recup
export const getUserToken = () => {
  return dispatch => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}tokenRecup`)
      .then(res => {
        dispatch({ type: GET_USER_TOKEN, payload: res.data });
      });
  };
};
//images
export const uploadPicture = (data, id) => {
  return (dispatch)=> {
    return axios 
    .post(`${process.env.REACT_APP_API_URL}/images`, data)
    .then((res) => {
      return axios 
      .get(`${process.env.REACT_APP_API_URL}/api/users/${id}`)
      .then((res) => {
        dispatch({type: UPLOAD_PICTURE, payload: res.data.images})
        
      })
      .catch((err)=> {
        console.log(err);
      })
    })
  }
}

//update bio profil.js

export const updateBio = (userId, bio) => {
       return (dispatch) => {
         return axios({
           method: "put",
           url:`${process.env.REACT_APP_API_URL}/api/users/profil/` + userId.id,
           data: { bio },
           withCredentials: true,
         })
         .then((res)=> {
           dispatch({ type: UPDATE_BIO, payload:bio })
         })
         .catch((err) => console.log(err));
       }

}

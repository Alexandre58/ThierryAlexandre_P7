import axios from "axios";

export const GET_POSTS = "GET_POSTS";
export const ADD_POSTS = "ADD_POSTS";

//envoi vers post.reducer (dispatch envoi vers le reducer api/posts)
export const getPosts = ()=> {
    return (dispatch) => {
        return  axios 
        .get('http://localhost:4000/api/posts?_sort=id&_order=desc')
        .then((res)=>{
           console.log(res);
               dispatch({type: GET_POSTS, payload: res.data})
        })
        .catch((err)=> console.log(err));
    };
};
//?_sort=id&_order=desc

//add post
export const addPost = data => {
    return dispatch => {
      return axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}/api/posts/new`,
        data: data,
        withCredentials: true,
      })
        .then(res => {
          console.log(res);
          dispatch({ type: ADD_POSTS, payload: data });
        })
        .catch(err => console.log(err));
    };
  };
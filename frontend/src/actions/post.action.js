import axios from "axios";

export const GET_POSTS = "GET_POSTS";

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
//recuperer res.data dans reducer pour le traiter
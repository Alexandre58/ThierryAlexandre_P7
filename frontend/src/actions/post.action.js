/*import axios from "axios";

export const GET_POSTS = "GET_POSTS";

//envoi ver post.reducer avec dispatch(dispatch envoi vers le reducer)
export const getPosts = ()=> {
    return (dispatch) => {
        return axios
        .get('http://localhost:4000/api/posts/')
        .then((res)=>{
               dispatch({type: GET_POSTS, payload: res.data})
        })
        .catch((err)=> {
            console.log(err);
        })
        
    }
}
//?_sort=id&_order=desc*/
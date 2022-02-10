import axios from "axios";

export const GET_USER = "GET_USER";

//envoi ver post.reducer avec dispatch(dispatch envoi vers le reducer)
export const getUser = (userId)=> {
    return (dispatch) => {
        return axios
        .get(`${process.env.REACT_APP_API_URL}/api/${userId}/profiluser`)
        .then((res)=>{
               dispatch({type: GET_USER, payload: res.data})
        })
        .catch((err)=> {
            console.log(err);
        })
        
    }
}
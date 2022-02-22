import React from 'react';
import axios from 'axios';
import cookie from 'js-cookie'



const Logout = () => {
  function effacerCookies() {
    cookie.remove("token",{
      expires: 1
 });
  }
   
  
  async function logout() {
  await axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}/api/user/deconnect`,
       withCredentials: true
   }).then(function(){
      effacerCookies();
   }).catch(
     function(err) {
          console.log(err);
     }
   )
   window.location = "/";
  }
 
  

    return (
      <li onClick={logout}>
          <p>Voulez-vous vous deconnecter</p>
      </li>
    );
};

export default Logout;
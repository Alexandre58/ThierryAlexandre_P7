import React from 'react';
import axios from 'axios';
import cookie from 'js-cookie';
import "../../style/logout.scss";


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
      <div className='logout_deconnect_container'>
          <li onClick={logout}>
              <p className='logout_deconnect'>Merci de votre visite, cliquer pour valider la déconnexion...<br/>A bientôt!</p>

          </li>
      </div>
    );
};

export default Logout;
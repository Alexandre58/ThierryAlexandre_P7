import React from 'react';
import axios from 'axios';
import cookie from 'js-cookie'



const Logout = () => {
    

    return (
      <li onClick={logout}>
          <p>Vous n'êtes pas connecté</p>
      </li>
    );
};

export default Logout;
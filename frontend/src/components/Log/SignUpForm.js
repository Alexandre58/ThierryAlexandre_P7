import React from 'react';

import '../SignupForm.scss';
import { Typography } from "@material-ui/core";
const SignUpForm = () => {
    return (

        <>
        <div className="signup_components">
        <Typography variant="h2" className="h2signup">
          S'inscrire
        </Typography>
        <form className="form_signup">
    
        <input className="btnType" type="text"  placeholder="Votre prenom" required />
     
        <input className="btnType" type="text"   placeholder="Votre nom" required />
   
        <input className="btnType" type="password"  placeholder="mot de passe" required />
  
        <input className="btnType" type="password"  placeholder="confirm mot de passe" required />
 
        <input className="btnType" type="email"  placeholder="exemple@groupomania.com" required />
   
        <button type="submit" className="btnSignup">S'inscrire</button>
      </form>
      </div>
      </>
    );
};

export default SignUpForm;
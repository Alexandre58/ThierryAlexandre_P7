import React from 'react';
import { Typography } from '@material-ui/core';
//css in home.scss
const SignUp = () => {
    return (
        <div className='signup_components'>
           <Typography variant='h2' className='h2signup' >S'inscrire</Typography> 
           <form className='form_signup'>
           <input type="text" placeholder='Votre prenom' required />
           <input type="text" placeholder='Votre nom' required />
           <input type="text" placeholder='mot de passe required'/>
           <input type="text" placeholder='confirm mot de passe' required/>
           <input type="email" placeholder='exemple@groupomania.com' required/>

          <input type="submit" value="envoyer" />
       
       </form>
        </div>
    );
};

export default SignUp;
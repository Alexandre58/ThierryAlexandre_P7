import { Typography } from '@material-ui/core';
import React from 'react';

const Login = () => {
    return (
        <div className='login_components'>
            <Typography variant='h2' className='h2login' >Déjà incris</Typography> 
            <form className='form_login'>
                <input type="text" placeholder='Votre prenom' required />
                <input type="text" placeholder='Votre nom' required />
                <input type="text" placeholder='mot de passe required'/>
             
                <input type="email" placeholder='exemple@groupomania.com' required/>
 
           <input type="submit" value="envoyer" />
        
        </form>
        </div>
    );
};

export default Login
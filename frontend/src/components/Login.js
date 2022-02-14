import { Typography } from '@material-ui/core';
import React from 'react';

const Login = () => {
    return (
        <div className='login_components'>
            <Typography variant='h2' className='h2login' >Déjà incris</Typography> 
            <form className='form_login'>
                <input className="btnType" type="text" placeholder='Votre prenom' required />
                <input className="btnType" type="text" placeholder='Votre nom' required />
                <input className="btnType" type="password" placeholder='mot de passe' required/>
             
                <input className="btnType" type="email" placeholder='exemple@groupomania.com' required/>
 
           <button type="submit" className='btnLogin'>Se connecter</button>
        
        </form>
        </div>
    );
};

export default Login
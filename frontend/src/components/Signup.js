import React, { useState } from "react";
import { Typography } from "@material-ui/core";
//css in home.scss


const SignUp = () => {
    const [firstname, setFirstname]= useState('');
    const [lastname, setLastname]= useState('');
    const [password, setPassword]= useState('');
    const [email, setEmail]= useState('');
    const [errors, setErrors] = useState('');
    let errorsObj = {
          firstname: '',
          lastname: '',
          password: '',
          email: ''
    };
   // const [password, setPassword] = useState(errorObj);
   function onSignup(e) {
        e.preventDefault();
        let error = false;
        const errorObj = { ...errorsObj};

        if(firstname === '') {
            errorObj.firstname = 'Votre nom est obligatoire';
            error = true;
        }
        if(lastname === '') {
            errorObj.lastname = 'Votre nom est obligatoire';
            error = true;
        }
        if(email === '') {
            errorObj.email = 'Email is Required';
            error = true;
        }
        if(password === '') {
            errorObj.password = 'Password is Required';
            error = true;
        }
        setErrors(errorObj);
        if(!error) {
            console.log('Formulaire à étais bien envoyé');
           
        }
   }

  return (
    <div className="signup_components">
      <Typography variant="h2" className="h2signup">
        S'inscrire
      </Typography>

      <form onSubmit={onSignup} className="form_signup">
    
        <input className="btnType" type="text" value={firstname} onChange={(e)=> setFirstname(e.target.value)} placeholder="Votre prenom" required />
        {errors.firstname && <div>{ errors.firstname }</div>}
        <input className="btnType" type="text" value={lastname} onChange={(e)=> setLastname (e.target.value)}  placeholder="Votre nom" required />
        {errors.lastname && <div>{ errors.lastname }</div>}
        <input className="btnType" type="password" value={password} onChange={(e)=> setPassword (e.target.value)}  placeholder="mot de passe" required />
        {errors.password && <div>{ errors.password }</div>}
        <input className="btnType" type="password" value={password} onChange={(e)=> setPassword(e.target.value)}  placeholder="confirm mot de passe" required />
        {errors.password && <div>{ errors.password }</div>}
        <input className="btnType" type="email" value={email} onChange={(e)=> setEmail(e.target.value)}  placeholder="exemple@groupomania.com" required />
        {errors.email && <div>{ errors.email }</div>}
        <button type="submit" className="btnSignup">S'inscrire</button>
      </form>
    </div>
   
  );
}


export default SignUp;

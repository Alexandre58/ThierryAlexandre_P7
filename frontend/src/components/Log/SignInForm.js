import React  from 'react';
import { useState }from 'react';
import { Typography } from "@material-ui/core";
import './SignInForm.scss';
import axios from 'axios';

const SignInForm = () => {
    const [firstname, setFirstname]= useState('');
    const [lastname, setLastname]= useState('');
    const [password, setPassword]= useState('');
    const [email, setEmail]= useState('');

    const handleLogin = (e)=> {
          e.preventDefault();
          const firstnameError = document.querySelector('.firstname.error');
          const lastnameError = document.querySelector('.lastname.error');
          const passwordError = document.querySelector('.password.error');
          const emailError = document.querySelector('.email.error');
         

/*${process.env.REACT_APP_API_URL}*/
          axios({
            methode: "post",
            url: `http://localhost:4000/api/user/login`,
            withCredentials: true,
            data: {
              firstname,
              lastname,
              password,
              email
              
            }
          })
          .then((res) => {
            console.log(res);
            if(res.data.errors) {
              firstnameError.innerHTML = res.data.errors.firstname;
              lastnameError.innerHTML = res.data.errors.lastname;
              passwordError.innerHTML = res.data.errors.password;
              emailError.innerHTML = res.data.errors.email;
             
            }else {
              window.location = '/';
            }
           
          })
          .catch((err) => {
            console.log(err);
      });
    };
   
    return (
     <>
        <div className='login_components'>
        <Typography variant='h2' className='h2login' >Se connecter</Typography> 
       
        <form action="" onSubmit={handleLogin} id="sing-up-form" className='form_login'>
        
            <label htmlFor="firstname">Prenom</label>
            <input className="btnType" type="text" name="firstname" id="firstname" onChange={(e) => setFirstname(e.target.value)} value={firstname} placeholder="Votre prenom" required />
            <div className='firstname error'></div>
         
            <label htmlFor="lastname">Nom</label>
            <input className="btnType" type="text" name="lastname" id="lastname" onChange={(e) => setLastname(e.target.value)} value={lastname}  placeholder="Votre nom" required />
            <div className='lastname error'></div>

            <label htmlFor="password">Password</label>
            <input className="btnType" type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="mot de passe" required/>
            <div className='password error'></div>

            <label htmlFor="email">Email</label>
            <input className="btnType" type="email" name="email" id="email" onChange={(e)=> setEmail(e.target.value)} value={email} placeholder="exemple@groupomania.com" required/>
            <div className='email error'></div>

            <input type="submit" className='btnLogin' value="Se connecter" />
    
      </form>
      </div>
      </>
  
    );
};

export default SignInForm;
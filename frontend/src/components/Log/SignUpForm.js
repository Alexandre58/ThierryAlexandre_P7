import React, { useState } from 'react';
//import SignInForm from './SignInForm';
import '../../style/SignupForm.scss';
import axios from 'axios';
import { Typography } from "@material-ui/core";
const SignUpForm = () => {
    
      const [firstname, setFirstname]= useState('');
      const [lastname, setLastname]= useState('');
      const [password, setPassword]= useState('');
      const[confirmPassword,setConfirmPassword]= useState('');
      const [email, setEmail]= useState('');

      const handleRegister = async (e) => {
        e.preventDefault();
        const firstnameError = document.querySelector(".confirmPassword.error");
        const lastnameError = document.querySelector(".confirmPassword.error");
        const passwordError = document.querySelector(".password.error");
        const confirmPasswordError = document.querySelector(".confirmPassword.error");
        const emailError = document.querySelector(".email.error");

       confirmPassword.innerHTML = "";
    /////////////////////////
    ////////////

     axios({
            method: "post",
            url: `http://localhost:4000/api/user/sign-up`,
            data: {
              firstname,
              lastname,
              password,
             confirmPassword,
              email
            },
          })
            .then((res) => {
              console.log(res);
              if (res.data.errors) {
                firstnameError.innerHTML = res.data.errors.firstname;
                lastnameError.innerHTML = res.data.errors.lastname;
                passwordError.innerHTML = res.data.errors.password;
                confirmPasswordError.innerHTML = res.data.errors.confirmPassword;
                emailError.innerHTML = res.data.errors.email;
              } 
            })
            .catch((err) => console.log(err));
        }
     

    return (

      <div className="signup_components">
      <Typography variant="h2" className="h2signup">
        S'inscrire
      </Typography>
        
        <form action="" onSubmit={handleRegister}  className="form_signup">
    
             <label htmlFor= "firstname">Prenom</label>
            <input className="btnType" type= "text" name= "firstname" id="firstname" placeholder="Votre prenom" required onChange={(e) => setFirstname(e.target.value)} value={firstname} />
            <div className= 'firstname error'></div>
         
            <label htmlFor= "lastname">Nom</label>
            <input className= "btnType" type="text" name="lastname" id="lastname"   placeholder="Votre nom" required onChange={(e) => setLastname(e.target.value)} value={lastname} />
            <div className= 'lastname error'></div>

            <label htmlFor= "password">Password</label>
            <input className= "btnType" type="password" name="password" id="password" placeholder="mot de passe" required  onChange={(e) => setPassword(e.target.value)} value={password} />
            <div className= 'password error'></div>

            <label htmlFor = "password">Confirm Password</label>
            <input className ="btnType" type ="password" name ="confirmPassword" id ="confirmPassword" onChange = {(e) => setConfirmPassword(e.target.value)} value = {confirmPassword} placeholder ="confirmer le mot de passe" required/>
            <div className ='confirmPassword error'></div>
 
            <label htmlFor= "email">Email</label>
            <input className="btnType" type="email" name="email" id="email" placeholder="exemple@groupomania.com" required onChange={(e)=> setEmail(e.target.value)} value={email} />
            <div className='email error'></div>
   
        <button type="submit" className="btnSignup">S'inscrire</button>
      </form>
      </div>
          
      );
    }   
   


export default SignUpForm;
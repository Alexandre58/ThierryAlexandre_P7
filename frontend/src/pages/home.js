//import { Link } from "react-router-dom";
import React, { useState, useContext, createContext } from "react";


import { NavBar } from '../components/NavBar'
import { Footer } from '../components/Footer'
import { Typography } from '@material-ui/core';
import './home.scss'
import Log from "../components/Log/index";

/*fetch('http://localhost:4000/api/posts').then((response)=> {
  console.log(response);
  return response.json();
  
  }).then((result)=> {
    console.log(result);
  })
  fetch('http://localhost:4000/api/users').then((response)=> {
    console.log(response);
    return response.json();
    
    }).then((result)=> {
      console.log(result);
    })
*/
export const Home = () => {
    


  //const [signUpModal, setSignUpModal] = useState(true); 
  //const [loginModal, loginUpModal] = useState(false);
  return (
    //scss in home.scss
    <>
       <NavBar />
      {/*page à créer*/}
      
      <section className="section_home">
          <div className="h1_Home" >
            <Typography variant='h1' className="h1_home_titre" >Bienvenu sur Groupomania</Typography> 
          </div>
          <div className="connection-form">
            <div className="form-container">
              <Log signin={false} signup={true} />
           
            </div>
          </div>
      </section>
      <Footer />
    </>
  );
};

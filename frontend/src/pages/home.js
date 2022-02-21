//import { Link } from "react-router-dom";
import React from "react";


import { NavBar } from '../components/NavBar'
import { Footer } from '../components/Footer'
import { Typography } from '@material-ui/core';
import '../style/home.scss'
import Log from "../components/Log";

export const Home = () => {

  return (
    //scss in home.scss
    <>
    
    <NavBar />
    <main className="mainRoot">  
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
      </main>
      <Footer />
    
    </>
  );
};

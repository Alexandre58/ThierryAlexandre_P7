//raccourci rsc
import React from "react";
import "./profils.scss";
import { NavBar } from "../components/NavBar";
import Log from "../components/Log";
import { Typography } from "@material-ui/core";
import { Footer } from '../components/Footer'
export const Profil = () => {


  return (
    <>
      <NavBar />
          <section className="section_profil">
            <div className="profil_container">
              <Typography variant="h1" className="h1profil">
                Bienvenu sur votre profil Groupomania
              </Typography>
            </div>
            <div className="signin_profil">
            <Log signin={false} signup={true} />
          </div>
            <div className="profil_page">
              <div className="img_container_profil">
              <img src={require ("../images/image_fkctWwWEdRrlktfd9elt5.jpg" ) } className="img_profil" alt="logo du site groupomania" />
              </div>
          
              <div className="content_profil">
                
              <label for="story">Votre histoire en quelques mots...</label>

              <textarea id="story" name="story" rows="30" cols="39">
                
                
              </textarea>
              </div>
            </div>
          
          </section>
      <Footer />  
    </>
  );
};

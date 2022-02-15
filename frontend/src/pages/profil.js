//raccourci rsc
import React from "react";
import "./profils.scss";
import { NavBar } from "../components/NavBar";
import Log from "../components/Log";
import { Typography } from "@material-ui/core";
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
            <img
              src="../images/image_fkctWwWEdRrlktfd9elt5.jpg"
              alt="imagelogin"
            />
          </div>
      
          <div className="content_profil">
         
            <p>
            BIO BIO
            BIO BIO
            BIO BIO
            BIO BIO
            BIO BIO
            BIO BIO
            BIO BIO
            BIO BIO
            BIO BIO
            BIO BIO
            BIO BIO
            BIO BIO
            BIO BIO
            BIO BIO
            BIO BIO
            BIO BIO
            BIO BIO
            BIO BIO
            BIO BIO
            BIO BIO
            BIO BIO
            BIO BIO
            BIO BIO
            BIO BIO
            BIO BIO
            BIO BIO
            BIO BIO
            BIO BIO
            BIO BIO
            BIO BIO
            BIO BIO
            BIO BIO
            BIO BIO
            BIO BIO
            BIO BIO
            BIO BIO
            BIO BIO
            BIO BIO
            BIO BIO
            BIO BIO
            BIO BIO
            BIO BIO
            BIO BIO
            BIO BIO
            BIO BIO
            BIO BIO
            BIO BIO
            BIO BIO
            BIO BIO
            BIO BIO
            BIO BIO
            BIO BIO
            BIO BIO
            BIO BIO
            BIO BIO
            BIO BIO
           
            </p>
          </div>
        </div>
       
      </section>
    </>
  );
};

//raccourci rsc
import React from "react";
import '../style/profils.scss'
import { NavBar } from "../components/NavBar";
import UploadImg from "../images/UploadImg";
import { Typography } from "@material-ui/core";
import { Footer } from "../components/Footer";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

import { useSelector } from 'react-redux';


export const Profil = () => {
  const userId = useSelector((state) => state.userReducer);
//  const postId = useSelector((state) => state.postReducer);

  return (
    <>
      <NavBar />
      <section className="section_profil">
          <div className="profil_container">
            <Typography variant="h1" className="h1profil">
               {userId.firstname} Bienvenu sur votre profil {userId.firstname} Groupomania
            </Typography>
          </div>
        
          <div className="profil_page">
            <div className="img_container_profil">
              <img
                src={require("../images/image_fkctWwWEdRrlktfd9elt5.jpg")}
                className="img_profil"
                alt="logo du site groupomania" />
      {/*a mettre          <img src={userId.attachment} alt="image de l'utilisateur groupomania" />
                UPLOAD profil_container
                <p>{errors.maxSize}</p>
                <p>{errors.format}</p>
           */}
               
            </div>
            <TextareaAutosize
              aria-label="minimum height"
              className="content_profil2"
              minRows={20}
              placeholder="Laissez-vous guider par votre imagination..."
            />
            
          </div>
          <div className="signin_profil">
            <UploadImg />
          </div>
      </section>
      <Footer />
    </>
  );
};

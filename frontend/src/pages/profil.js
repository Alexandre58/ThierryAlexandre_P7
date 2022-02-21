//raccourci rsc
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//css
import "../style/profils.scss";
import { NavBar } from "../components/NavBar";
import UploadImg from "../images/UploadImg";

//material ui
import { Typography } from "@material-ui/core";
import { Footer } from "../components/Footer";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { updateBio } from "../actions/user.actions";

export const Profil = () => {
  //BIO
  const [bio, setBio] = useState("");
  const [updateForm, setUpdateForm] = useState(false);
  const dispatch = useDispatch();

  //USER
  const userId = useSelector((state) => state.userReducer);
  //  const postId = useSelector((state) => state.postReducer);

  //function validate change bio
  const handleUpdate = () => {
    dispatch(updateBio(userId._id, bio));
    setUpdateForm(false);
  };

  return (
    <>
      <NavBar />
      <section className="section_profil">
        <div className="profil_container">
          <Typography variant="h1" className="h1profil">
            Vous pouvez changer votre bio et votre photo {userId.firstname} {userId.lastname}
          </Typography>
        </div>

        <div className="profil_page">
          <div className="img_container_profil">
            <img
              src={require("../images/image_fkctWwWEdRrlktfd9elt5.jpg")}
              className="img_profil"
              alt="logo du site groupomania"
            />
            {/*a mettre          <img src={userId.attachment} alt="image de l'utilisateur groupomania" />
                  UPLOAD profil_container
                  <p>{errors.maxSize}</p>
                  <p>{errors.format}</p>
            */}
          </div>

          <div className="bio_profil_container">
            <h3>Votre bio</h3>
            {updateForm === false && (
              <>
                <p onClick={() => setUpdateForm(!updateForm)}>{userId.bio}</p>
                <button className="content_profil_button" onClick={() => setUpdateForm(!updateForm)}>
                  Cliquer ici pour mettre à jour votre profil
                </button>
              </>
            )}
            {updateForm && (
              <>
                <TextareaAutosize defaultValue={ userId.bio } onChange={(e) => setBio(e.target.value)} aria-label="minimum height" className="content_profil2" minRows={20} placeholder="Laissez-vous guider par votre imagination..." />
                <button className="content_profil_button2" onClick={handleUpdate}>Valider vos modifications</button>
              </>
            )}
            
          </div>
          <div className="signin_profil">
            <UploadImg />
          </div>
        </div>
       
      </section>
      <Footer />
    </>
  );
};

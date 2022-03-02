//raccourci rsc
import React, { useContext, useState } from "react";
import { UidContext } from "../App";
import { useDispatch, useSelector } from "react-redux";
import BtnValid from "../components/BtnValid";

//css
import "../style/profils.scss";
//import
import { NavBar } from "../components/NavBar";
import { Home } from "../pages/home";
import UploadImg from "../images/UploadImg";
//material ui
import { Typography } from "@material-ui/core";
import { Footer } from "../components/Footer";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { updateBio } from "../actions/user.actions";
import { findUser } from "../components/Utils";
import BtnDelete from "../components/BtnDelete";

export const Profil = () => {
  const dispatch = useDispatch();
  //BIO
  const [bio, setBio] = useState("");
  const [updateForm, setUpdateForm] = useState(false);
  //USER
  const uid = useContext(UidContext);
  const userId = useSelector(state => state.userReducer);
  const user = findUser(uid, userId);
  //function validate change bio
  const handleUpdate = () => {
    dispatch(updateBio(userId.id, bio));
    setUpdateForm(false);
  };

  return (
    <>
      {uid && <NavBar uid={uid} allUsers={userId} user={user} />}

      {!uid ? (
        <Home />
      ) : (
        <section className="section_profil">
          <div className="profil_container">
            <Typography variant="h1" className="h1profil">
              Vous pouvez changer votre bio et votre photo
            </Typography>
          </div>

          <div className="profil_page">
            <div className="img_container_profil">
              <img
                src={require("../images/image_fkctWwWEdRrlktfd9elt5.jpg")}
                className="img_profil"
                alt="image profil"
              />
              {/*a mettre          <img src={userId.attachment} alt="image de l'utilisateur groupomania" />
                    UPLOAD profil_container
                    <p>{errors.maxSize}</p>
                    <p>{errors.format}</p>
              */}
            </div>
            <div className="bio_profil_container">
              <h3>{user ? user.bio : "Vous n'avez pas encore de bio"}</h3>
              {updateForm === false && (
                <>
                  <p onClick={() => setUpdateForm(!updateForm)}>{userId.bio}</p>
                  <button
                    className="content_profil_button"
                    onClick={() => setUpdateForm(!updateForm)}
                  >
                    Mettre à jour votre bio
                  </button>
                </>
              )}
             
              {updateForm && (
                <>
                  <TextareaAutosize
                    defaultValue={user.bio}
                    onChange={e => setBio(e.target.value)}
                    aria-label="minimum height"
                    className="content_profil2"
                    minRows={20}
                    placeholder="Laissez-vous guider par votre imagination..."
                  />

                  <BtnValid
                    onClick={() => setUpdateForm(!updateForm)}
                    action={"SAVE_BIO"}
                    content={bio}
                    user={user}
                  />
                </>
              )}
            </div>

            <div className="signin_profil">
              <BtnDelete action={"DELETE_USER"} data={uid} />
              <UploadImg />
            </div>
          </div>
        </section>
      )}
      <Footer />
    </>
  );
};

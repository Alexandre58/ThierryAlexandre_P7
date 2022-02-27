import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { UidContext } from "../App";
import { isEmpty } from "./Utils";
import "../style/navBar.scss";

export const NavBar = () => {
  const uid = useContext(UidContext);

  const users = useSelector(state => state.userReducer);

  return (
    <>
      <header className="header_navBar">
        <nav className="navBarSite">
          <ul className="ulHome">
            {uid ? (
              <li>
                <Link aria-label="Vous déconnecter" to="/deconnexion">Deconnexion</Link>
              </li>
            ) : (
              <li>
                <Link aria-label="Vous connecter" to="/">Connexion</Link>
              </li>
            )}

            <li>
              <Link aria-label="accéder aux messages et en créer" to="/Blog">Blogs</Link>
            </li>
            <li>
              <Link aria-label="accéder à votre profif et le modifier"  to="/Profil">Profil</Link>
            </li>
          </ul>
        </nav>

        {uid ? (
          <p className="p_Navbar">
            {" "}
            Bonjour {!isEmpty(users[0]) && users[0].firstname}
          </p>
        ) : (
          <p className="p_Navbar">Merci de bien vouloir vous connecter</p>
        )}

        <Link to="/Blog">
          <div className="img_navBar">
            <img
              src={require("../images/icon-left-font-long.png")}
              alt="logo de notre site groupomania"
            />
          </div>
        </Link>
      </header>
    </>
  );
};

import { Link } from "react-router-dom";
import React, { useState, useContext, createContext } from "react";
import SignUp from "../components/Signup";
import Login from "../components/Login";
//import './home.scss';

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
  const [signUpModal, setSignUpModal] = useState(true); //model inscription qui s'affiche
  const [loginModal, loginUpModal] = useState(false);
  return (
    //navBars
    <>
      <nav className="navBarSite" >
        <ul className="ulHome">
          <li>
            <Link to="/">Inscription-connexion</Link>
          </li>
          <li>
            <Link to="/Blog">Blogs</Link>
          </li>
          <li>
            <Link to="/Profil">Profil</Link>
          </li>
        </ul>
      </nav>
      {/*page à créer*/}
      <div>
        <h1>Page inscription </h1>
      </div>
      <div className="connection-form">
        <div className="form-container">
          <ul>
            <li>S'incrire</li>
            <li>Se connecter</li>
          </ul>
          {signUpModal && <SignUp />}
          {loginModal && <Login />}
        </div>
      </div>
    </>
  );
};

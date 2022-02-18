import React from 'react';
import { Link } from "react-router-dom";


export const NavBar = () => {
    return (
        <>
        <header className="header_navBar">
            <nav className="navBarSite" >
                <ul className="ulHome">
                    <li>
                      <Link to="/">Connexion</Link>
                    </li>
                    <li>
                      <Link to="/Blog">Blogs</Link>
                    </li>
                    <li>
                      <Link to="/Profil">Profil</Link>
                    </li>
                </ul>              
            </nav>
            <div className='img_navBar'>
                    <img src={require ("../images/icon-left-font-long.png") } alt="logo du site groupomania" />
            </div>
        </header>
        </>
    );
};

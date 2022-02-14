//raccourci rsc
import React from 'react';
import './profils.scss';
import { NavBar } from '../components/NavBar'
import { Typography } from '@material-ui/core';
export const Profil = () => {
    return (
        <>
        <NavBar />
        <section className='section_profil'>
        <div className='profil_container'>
           <Typography variant='h1' className='h1profil'>Bienvenu sur votre profil Groupomania</Typography> 
        </div>
  </section>
        </>
    );
};


import React, { useContext } from 'react';
import './blog.scss';
//import Post from '../components/posts';
import { useSelector } from 'react-redux';
import { NavBar } from '../components/NavBar'
import { Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { Footer } from '../components/Footer'
//import { UidContext } from '../App';

export const Blog = () => {
    //if user connected
   //  const uid = useContext(UidContext);


    const posts = useSelector((state) => state.postReducer)
    
    //) => state.postReducer.firstname si l'on veut
    console.log( posts);
    return (
        <>     
        <NavBar />       
               <section className='section_blog'>
               <Container>
                    <div className='blog_container'>
                           <Typography variant='h1' className='h1blog'>Bienvenu sur Groupomania publications</Typography> 
                    </div>
                  
                   
                   </Container>
              </section>
       <Footer />    
        </>
    );
};

import React from 'react';
import './blog.scss';
//import Post from '../components/posts';
import { useSelector } from 'react-redux';
import { NavBar } from '../components/NavBar'
import { Typography } from '@material-ui/core';


export const Blog = () => {
    const posts = useSelector((state) => state.postReducer)
    
    //) => state.postReducer.firstname si l'on veut
    console.log( posts);
    return (
        <>     
        <NavBar />       
               <section className='section_blog'>
                    <div className='blog_container'>
                           <Typography variant='h1' className='h1blog'>Bienvenu sur Groupomania publications</Typography> 
                    </div>
                    <div>
                        
                    </div>
              </section>
        </>
    );
};

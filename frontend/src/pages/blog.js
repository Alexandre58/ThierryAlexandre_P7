import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";

import '../style/blog.scss'


import { NavBar } from "../components/NavBar";
import { BlogNotConnect  } from "../components/BlogNotConnect";
import MediaCard from "../components/MediaCard";
import UidContext from "../App";
import { Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import { Footer } from "../components/Footer";


//import { Posts } from '../components/Posts'
export const Blog = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postReducer);
  console.log(posts);
//USER
  const userId = useSelector((state) => state.userReducer);
  
  
  return (
    <>
      <NavBar />
      <section className="section_blog">
        <div className="blog_container">
          <Typography variant="h1" className="h1blog">
            Bienvenu sur Groupomania publications {userId.firstname} {userId.lastname}
          </Typography>

        </div>
        <Container>
          <MediaCard />
       </Container>
   {/*    {userId ? (
          <>
            <Container>
              <MediaCard />
            </Container>
          </>
        ) : (
          <BlogNotConnect />
        )}*/}  
      </section>

      <Footer />
    </>
  );
};

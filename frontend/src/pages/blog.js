import React, { useContext } from "react";
import '../style/blog.scss'
//import Post from '../components/posts';
import { useSelector } from "react-redux";
import { NavBar } from "../components/NavBar";
import { BlogNotConnect  } from "../components/BlogNotConnect";
import MediaCard from "../components/MediaCard";
import UidContext from "../App";
import { Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import { Footer } from "../components/Footer";
//import { UidContext } from '../App';

//import { Posts } from '../components/Posts'
export const Blog = () => {
 // const userData = useContext(UidContext);
  const posts = useSelector((state) => state.postReducer);
  console.log(posts);

  //) => state.postReducer.firstname si l'on veut
  console.log(posts);
  return (
    <>
      <NavBar />
      <section className="section_blog">
        <div className="blog_container">
          <Typography variant="h1" className="h1blog">
            Bienvenu sur Groupomania publications
          </Typography>
        </div>
        <Container>
        <MediaCard />
      </Container>
   {/*    {userData ? (
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

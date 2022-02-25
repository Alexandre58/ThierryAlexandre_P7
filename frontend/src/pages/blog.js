import { useSelector, useDispatch } from "react-redux";

//import { BlogNotConnect  } from "../components/BlogNotConnect";
//material ui
import { Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container";
//import file.js
import { Footer } from "../components/Footer";
import { isEmpty } from "../components/Utils";
import Users from "../components/Users";
import { NavBar } from "../components/NavBar";
import MediaCard from "../components/MediaCard";
import FormPost from "../components/FormPost";
//import { Home } from './home';
import { getComments } from "../actions/post.action";

//scss
import "../style/blog.scss";
/*pour memoire et remettre la connection correct 
{userId ? <Home/> :
        <>
  }
    </>

 */

export const Blog = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.postReducer);
  //USER
  const userId = useSelector(state => state.userReducer);

  //
  return (
    <>
      <NavBar />
      <section className="section_blog">
        <Users />
        <div className="blog_container">
          <Typography variant="h1" className="h1blog">
            Bienvenu {/*  {userId[0].firstname} {userId[0].lastname}*/} sur
            Groupomania publications
          </Typography>
        </div>
        <Container>
          <FormPost />
          <div className="container_blog_mediaCard">
            {!isEmpty(posts) &&
              posts.map((post, index) => {
                return <MediaCard post={post} key={post.id} />;
              })}
          </div>
        </Container>
      </section>

      <Footer />
    </>
  );
};

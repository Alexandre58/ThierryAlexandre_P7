import { useSelector } from "react-redux";

//import { BlogNotConnect  } from "../components/BlogNotConnect";
//material ui
import { Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container";
//import file.js
import { Footer } from "../components/Footer";
import { isEmpty } from "../components/Utils";
import Users from '../components/Users';
import { NavBar } from "../components/NavBar";
import MediaCard from "../components/MediaCard";
import FormPost from '../components/FormPost'
//import { Home } from './home';

//scss
import '../style/blog.scss'
/*
{userId ? <Home/> :
        <>
  }
    </>

 */

export const Blog = () => {
 // const dispatch = useDispatch();
  const posts = useSelector((state) => state.postReducer);
  console.log(posts);
//USER
  const userId = useSelector((state) => state.userReducer);
  console.log(userId);

  return (
    <>
      
          <NavBar />
          <section className="section_blog">
          <Users />
          <div className="blog_container">
            <Typography variant="h1" className="h1blog">
              Bienvenu sur Groupomania publications {userId.firstname} {userId.lastname}
            </Typography>
          </div>
       
          <Container>
            <FormPost/>
            <div className="container_blog_mediaCard" >
              {!isEmpty(posts) && posts.map((post, index) => <MediaCard post={post} key={index} />)}
            </div>  
          </Container>
          {/*{userId ? (
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

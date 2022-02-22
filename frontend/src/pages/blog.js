
import { useSelector } from "react-redux";


//scss
import '../style/blog.scss'

//import file.js
import { NavBar } from "../components/NavBar";
//import { BlogNotConnect  } from "../components/BlogNotConnect";
import MediaCard from "../components/MediaCard";
//import UidContext from "../App";

//material ui
import { Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import { Footer } from "../components/Footer";
import { isEmpty } from "../components/Utils";



export const Blog = () => {
 // const dispatch = useDispatch();
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
          <div className="container_blog_mediaCard" >
            {!isEmpty(posts) && posts.map((post, index) => <MediaCard post={post} key={index} />)}
          </div>
          
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

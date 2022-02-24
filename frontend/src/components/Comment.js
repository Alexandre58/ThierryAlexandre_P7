import React from 'react';
import { useSelector } from "react-redux";
import { isEmpty } from "../components/Utils";
import BtnValid from './BtnValid';

import "../style/comment.scss"


//matrial ui
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function Comment(post) {
 //USER
  const users = useSelector((state) => state.userReducer);



  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
   
        <>
      
          <div>
             <form className='container_comment'>
                  <Typography className={classes.heading}>{!isEmpty(users[0]) && users[0].firstname} {!isEmpty(users[0]) && users[0].lastname}</Typography>
                  <textarea className='comment_textArea' defaultValue={post.content} placeholder="Vous desirez mettre un  commentaire..."></textarea>
               {/**    <input type="submit" value="Validez votre commentaire" />*/} 
               <BtnValid />
              </form>   
          </div>     
          
       </>  
     
 
  );
}
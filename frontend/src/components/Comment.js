import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "../components/Utils";
import BtnValid from './BtnValid';
import BtnDelete from './BtnDelete';
import BtnModified from './BtnModified';
import { addComment, getPosts } from '../actions/post.action'

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

export default function Comment({post}) {
 //USER
 console.log(post);
  const [content, setComment] = React.useState("");
  const users = useSelector((state) => state.userReducer);
  const classes = useStyles();
 // const [expanded, setExpanded] = React.useState(false);
  const dispatch = useDispatch();



  const handleChange =(e) => {
    e.preventDefault();
     dispatch(addComment(post, {content: content, messageId:post.id}) )
     .then(()=> dispatch(getPosts()) )
     .then(()=> setComment("") )

  };

  return (
   
        <>
      
          <div>
             <form className='container_comment' onSubmit={e => handleChange(e) }>
                  <Typography className={classes.heading}>{!isEmpty(users[0]) && users[0].firstname} {!isEmpty(users[0]) && users[0].lastname}</Typography>
                  <textarea className='comment_textArea' value={content} onChange= {(e)=> setComment(e.target.value)} defaultValue={post.content} placeholder="Vous desirez mettre un  commentaire..."></textarea>
              {/*   <input type="submit" value="Validez votre commentaire" />*/} 
               <BtnValid />
               <BtnModified /> 
               <BtnDelete /> 

              </form>
               
          </div>     
          
       </>  
     
 
  );
}
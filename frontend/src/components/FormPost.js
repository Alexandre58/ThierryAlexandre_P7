import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addPost, getPosts } from '../actions/post.action';
import { isEmpty } from "../components/Utils";
import BtnDeletePost from './BtnDeletePost';
import BtnModifiedPost from './BtnModifiedPost';
//scss blog.js
import "../style/blog.scss";
import "../style/btnDeleteandMody.scss"
const FormPost = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
   // const [attachment, setAttachment] = useState("");
   

    const users = useSelector((state) => state.userReducer);
    const dispatch = useDispatch();

//if not emply
const handleForm = async (e) => {
    e.preventDefault();
   if(title && content) {
     const data = {
       title: title,
       content: content,
     };
     await dispatch(addPost(data));
     setTitle("");
     setContent("");
     dispatch(getPosts());
   }
 };
 
    return (
      <>
        
      <form className='form_mediaCard' onSubmit={e => handleForm(e) }>
     
          <p className='p_form_mediaCard'>Vous pouvez créer votre message ici {!isEmpty(users[0]) && users[0].firstname}</p>
          <input className='input_title_mediaCard' type="text" placeholder="Titre de votre message :" value={title} onChange={(e) => setTitle(e.target.value)} /> 
          <textarea className='input_post_mediaCard' placeholder="dites nous en plus sur vous ..." value={content} onChange={e => setContent(e.target.value)}></textarea>
          <input className='input_button_mediaCard' type="submit" value="Envoyer"/>
          <div className='btnDeleteAndMofified_FormPost_container'>
              <BtnDeletePost />
              <BtnModifiedPost />
          </div>
         
      </form>
     </>
    );
};

export default FormPost;
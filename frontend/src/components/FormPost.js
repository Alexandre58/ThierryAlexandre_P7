import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addPost } from '../actions/post.action';
//scss blog.js
import "../style/blog.scss";
const FormPost = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const users = useSelector((state) => state.userReducer);
    const dispatch = useDispatch();

//if not emply
const handleForm = (e) => {
    e.preventDefault();
   if(title && content) {
     const data = {
       title: title,
       content: content,
       firstname: users[0].firstname,
       lastname: users[0].lastname,
       likes: 0 ,
     };
     dispatch(addPost(data));
     setTitle("");
     setContent("");
   }
 };



    return (
    <form className='form_mediaCard' onSubmit={e => handleForm(e) }>
        <input className='input_title_mediaCard' type="text" placeholder="Titre du message :" value={title} onChange={(e) => setTitle(e.target.value)} /> 
        <textarea className='input_post_mediaCard' placeholder="dites nous en plus sur vous ..." value={content} onChange={e => setContent(e.target.value)}></textarea>
        <input className='input_button_mediaCard' type="submit" value="Envoyer"/>
     </form>
    );
};

export default FormPost;
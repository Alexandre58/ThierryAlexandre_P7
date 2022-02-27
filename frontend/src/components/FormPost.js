import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost, getPosts } from "../actions/post.action";
import { isEmpty } from "../components/Utils";
import BtnDeletePost from "./BtnDelete";
import BtnModifiedPost from "./BtnModified";
import BtnValid from "./BtnValid";

//scss blog.js
import "../style/btnDeleteandMody.scss";
import "../style/formPost.scss";

const FormPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  // const [attachment, setAttachment] = useState("");

  const users = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  //if not emply
  const handleForm = async e => {
    e.preventDefault();
    if (title && content) {
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
      <form aria-label="vous pouvez pouvez créer votre message dans ce formulaire" className="form_mediaCard" onSubmit={e => handleForm(e)}>
        <p className="p_form_mediaCard">
          Vous pouvez créer votre message ici{" "}
          {!isEmpty(users[0]) && users[0].firstname}
        </p>
        <input
          aria-label="vous pouvez mettre un titre à votre message"
          className="input_title_mediaCard"
          type="text"
          placeholder="Titre de votre message :"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <textarea
          aria-label="votre histoire ,vos envies , les recontres avec vos collégues !, enovyez leurs des message"
          className="input_post_mediaCard"
          placeholder="dites nous en plus sur vous ..."
          value={content}
          onChange={e => setContent(e.target.value)}
        ></textarea>

        <div className="btnDeleteAndMofified_FormPost_container">
          <input
            aria-label="vous pouvez envoyer votre message ici"
            className="input_button_mediaCard"
            type="submit"
            value="Envoyer"
          />
        </div>
      </form>
    </>
  );
};

export default FormPost;

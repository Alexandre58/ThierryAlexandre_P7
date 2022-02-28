import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import { useDispatch } from "react-redux";
import { deletePost, getComments, deleteComment } from "../actions/post.action";
import axios from "axios";
import { deleteUser } from "../actions/user.actions";

const BtnDelete = ({ action, data }) => {
  const dispatch = useDispatch();

  const deleteIt = e => {
    e.preventDefault();
    if (action == "DELETE_COMMENT") {
      dispatch(deleteComment(data)).then(res => {
        axios({
          method: "get",
          url: `${process.env.REACT_APP_API_URL}/api/comments/${data.postId}`,
          withCredentials: true,
        })
          .then(res => {
            console.log(res);
            dispatch(getComments(data.post));
          })
          .catch(err => console.log(err));
      });
    } else if (action === "DELETE_POST") {
      dispatch(deletePost(data)).then(res => {
        axios({
          method: "get",
          url: `${process.env.REACT_APP_API_URL}/api/posts/${data.id}`,
          withCredentials: true,
        })
          .then(res => {
            console.log(res);
          })
          .catch(err => console.log(err));
      });
    } else if (action == "DELETE_USER") {
      dispatch(deleteUser(data)).then(res => {
        window.location = "/";
      });
    }
  };

  return (
    <>
      <button
        onClick={e => deleteIt(e)}
        aria-label="delete"
        className="btn_btnModifiedPost"
      >
        <DeleteIcon />
      </button>
    </>
  );
};

export default BtnDelete;
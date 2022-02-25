import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "../components/Utils";
import BtnValid from "./BtnValid";
import BtnDelete from "./BtnDelete";
import BtnModified from "./BtnModified";
import { addComment, getComments, getPosts } from "../actions/post.action";

import "../style/comment.scss";

//matrial ui
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

import axios from "axios";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function Comment({ post }) {
  //USER
  console.log(post);
  const [content, setComment] = React.useState("");
  const users = useSelector(state => state.userReducer);
  const [comments, setComments] = React.useState([]);
  const classes = useStyles();
  // const [expanded, setExpanded] = React.useState(false);
  const dispatch = useDispatch();

  //const uid = useContext(UidContext);

  React.useEffect(() => {
    axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}/api/comments/${post.id}`,
      withCredentials: true,
    })
      .then(res => {
        setComments(res.data);
        console.log(comments);
      })
      .catch(err => console.log(err));
  }, []);

  const handleChange = e => {
    e.preventDefault();
    dispatch(addComment(post, { content: content, messageId: post.id })).then(
      res => {
        axios({
          method: "get",
          url: `${process.env.REACT_APP_API_URL}/api/comments/${post.id}`,
          withCredentials: true,
        })
          .then(res => {
            setComments(res.data);
            setComment("");
            console.log(comments);
          })
          .catch(err => console.log(err));
      }
    );
  };

  return (
    <>
      {comments ? (
        comments.map((com, index) => {
          return (
            <div key={com.id}>
              {users.map(us => {
                return us.id === com.userId ? (
                  <div key={us.id}>
                    {us.firstname} {us.firstname}
                  </div>
                ) : (
                  ""
                );
              })}
              <strong>{com.content}</strong> <em>{com.createdAt}</em>
              <BtnDelete />
              <BtnModified />
              <Divider light />
            </div>
          );
        })
      ) : (
        <></>
      )}
      <div>
        <form className="container_comment" onSubmit={e => handleChange(e)}>
          <Typography className={classes.heading}>
            {!isEmpty(users[0]) && users[0].firstname}{" "}
            {!isEmpty(users[0]) && users[0].lastname}
          </Typography>
          <textarea
            className="comment_textArea"
            value={content}
            onChange={e => setComment(e.target.value)}
            placeholder="Vous desirez mettre un  commentaire..."
          ></textarea>
          {/*   <input type="submit" value="Validez votre commentaire" />*/}
          <BtnValid />
          <BtnDelete />
        </form>
      </div>
    </>
  );
}
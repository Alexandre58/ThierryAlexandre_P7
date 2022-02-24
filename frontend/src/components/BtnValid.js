import React from "react";
import "../style/btnDeleteandMody.scss";
import {} from "../actions/post.action";

const BtnValid = () => {
  const saveComment = () => {};

  return (
    <button onClick={e => saveComment(e)} className="btn_btnModifiedPost">
      Enregistrer
    </button>
  );
};

export default BtnValid;

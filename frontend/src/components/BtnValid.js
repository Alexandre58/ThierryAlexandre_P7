import React from "react";
import "../style/btnDeleteandMody.scss";
import {} from "../actions/post.action";
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import IconButton from '@material-ui/core/IconButton';
//
//
//

const BtnValid = () => {
  const saveComment = () => {};

  return (
    <>
      <button onClick={e => saveComment(e)} className="btn_btnModifiedPost">
           <SaveAltIcon />
      </button>
  
       
  

    </>
  );
};

export default BtnValid;

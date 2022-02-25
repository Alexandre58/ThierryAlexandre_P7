import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

import "../style/btnDeleteandMody.scss";
const BtnDelete = () => {


    return (
        <>
        <button aria-label="delete"  className="btn_btnModifiedPost">
          <DeleteIcon />
        </button>
      
        </>
    );
};

export default BtnDelete;
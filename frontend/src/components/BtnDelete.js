import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

const BtnDelete = () => {


    return (
        <>
            
            <IconButton aria-label="delete" className='btn_btnDeletePost'>
                <DeleteIcon />
            </IconButton>
        </>
    );
};

export default BtnDelete;
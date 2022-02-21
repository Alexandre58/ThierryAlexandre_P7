import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {uploadPicture} from '../actions/user.actions';


const UploadImg = () => {
    const [file, setFile] = useState();
    const dispatch = useDispatch();
    const userId = useSelector((state) => state.userReducer);

    const handlePicture =(e)=> {
          e.preventDefault();
          const data = new FormData();
          data.append("avatar", userId.avatar);
          data.append("userId", userId._id);
          data.append("file", file);

          dispatch(uploadPicture(data, userId._id));

    }
    return (
        <>
        <form action="" onSubmit={handlePicture} className="upload_img_profil">
                <label htmlFor="file">Si vous désirez changer d'image</label>
                <input type="file" id="file" name="file" accept=".jpg, .jpeg, .png" 
                 onChange={(e) => setFile(e.target.files[0])} />
       
                    <br/>
                 <input type="submit" value="Mis a jour de l'image" />
        </form>
        </>
    );
};

export default UploadImg;
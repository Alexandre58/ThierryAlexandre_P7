//design card users
import { useSelector } from "react-redux";
import { isEmpty } from "../components/Utils";

import "../style/users.scss";


const Users = () => {
    //USER
    const users = useSelector((state) => state.userReducer);
   
  return (
    <div className="user-container">
        <p>{!isEmpty(users) && users[0].firstname} {!isEmpty(users[0]) && users[0].lastname}</p>
        <div className="img__users">
        <img
          src={require("../images/image_fkctWwWEdRrlktfd9elt5.jpg")}
          className="img_profil"
          alt="image profil utilisateur"
        />
      </div>
     
      
    </div>
  );
};

export default Users;
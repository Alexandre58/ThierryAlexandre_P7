//design card users
import { useSelector } from "react-redux";
import { isEmpty, findUser } from "./Utils";

import "../style/users.scss";

const Users = ({ uid, allUsers, user }) => {
  //USER
  const users = useSelector(state => state.userReducer);

  return (
    <div className="user-container">
      <p>
        {!isEmpty(user) && user.firstname} {!isEmpty(user) && user.lastname}
      </p>
      <div className="img__users">
        <img
          src={require("../images/icon.png")}
          className="img_profil"
          alt="profil utilisateur"
        />
      </div>
    </div>
  );
};

export default Users;
import React, { useEffect, useState, createContext } from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { Home } from "./pages/home";
import { Profil } from "./pages/profil";
import { Blog } from "./pages/blog";
import axios from 'axios';

import { useDispatch } from "react-redux";
//import { getUserToken } from "./actions/user.actions";
import { getUser } from "./actions/user.actions";

export const UidContext = createContext();


const App = () => {
  const [userId, setUserId ] = useState(null);
  const dispatch = useDispatch();
 // const userData = useSelector(state => state.userReducer);
 // console.log(userData);
/*  useEffect(() => {
    dispatch(getUserToken());
  }, [dispatch]);
  console.log(userData);
*/

  useEffect(() => {
    const fetchToken = async() => {
      await axios ({
        method : "get",
        url: `${process.env.REACT_APP_API_URL}tokenRecup`,
        withCredentials: true,
      })
      .then((res)=> {
        console.log(res);
        setUserId(res.data)
      })
      .catch((err)=> console.log("No Token recup"))
    }
       fetchToken();

       if(userId) dispatch(getUser(userId))
    }, [userId, dispatch]);

  return (
    <UidContext.Provider value={userId}>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/profil" element component={Profil} />
          <Route path="/blog" element component={Blog} />
        {/*  <Route path="/login" element component={Login} />
          <Route path="/signUp" element component={SignUp} />*/} 
          <Redirect to="/" />
        </Switch>
      </Router>
    </UidContext.Provider>
  );
};

export default App;

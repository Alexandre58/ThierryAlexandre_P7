import React, { useEffect, useState, createContext } from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { Home } from "./pages/home";
import { Profil } from "./pages/profil";
import { Blog } from "./pages/blog";


import { useDispatch, useSelector } from "react-redux";
import { getUserToken } from "./actions/user.actions";

const UidContext = createContext();


const App = () => {
 /* const dispatch = useDispatch();
  const userData = useSelector(state => state.userReducer);
  console.log(userData);
  useEffect(() => {
    dispatch(getUserToken());
  }, [dispatch]);
  console.log(userData);
*/
  return (
    <UidContext.Provider value={"id"}>
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

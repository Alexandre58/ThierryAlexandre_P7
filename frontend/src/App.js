//import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState, createContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./pages/home";
import { Profil } from "./pages/profil";
import { Blog } from "./pages/blog";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import { useDispatch, useSelector } from "react-redux";
import { getUserToken } from "./actions/user.actions";
import { Typography } from '@material-ui/core';
const UidContext = createContext();
const App = () => {
  const dispatch = useDispatch();
  const userData = useSelector(state => state.userReducer);
  console.log(userData);
  useEffect(() => {
    dispatch(getUserToken());
  }, [dispatch]);
  console.log(userData);

  return (
    <UidContext.Provider value={userData}>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/profil" element component={Profil} />
          <Route path="/blog" element component={Blog} />
          <Route path="/login" element component={Login} />
          <Route path="/signUp" element component={SignUp} />
        </Switch>
      </Router>
    </UidContext.Provider>
  );
};

export default App;

//import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState, createContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { Home } from "./pages/home";
import { Profil } from "./pages/profil";
import { Blog } from "./pages/blog";
import  Login  from "./components/Login";
import  SignUp  from "./components/Signup";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getUser } from './actions/user.actions';



const UidContext = createContext();
const App = () => {
  const [userId, setuserId]= useState(null);
  const dispatch = useDispatch();
   useEffect (()=> {
     const userToken = async function() {
           await axios.get(`${process.env.REACT_APP_API_URL}/tokenValidation`)
           .then((res)=> {
              setuserId(res.data)
           })
           .catch(err => console.log(err));

     }
    userToken();
    if(userId) {
      dispatch(getUser(userId))
    }
   },[userId, dispatch])
  return (
    <UidContext.Provider value={userId}>
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


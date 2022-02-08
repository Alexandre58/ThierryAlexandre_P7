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

const UidContext = createContext();
const App = () => {
  return (
    <UidContext.Provider value={"uid"}>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/profil" element={Profil} />
        </Switch>
      </Router>
    </UidContext.Provider>
  );
};

export default App;


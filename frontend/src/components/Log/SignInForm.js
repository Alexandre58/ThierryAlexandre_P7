import React from "react";
import { useState } from "react";
import { Typography } from "@material-ui/core";
import "../../style/SignInForm.scss";
import axios from "axios";

const SignInForm = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const passwordError = document.querySelector(".password.error");
    const emailError = document.querySelector(".email.error");

    /*`http://localhost:4000/api/user/login`*/
    axios({
      methode: "post",
      url: `${process.env.REACT_APP_API_URL}/api/user/login`,
      withCredentials: true,
      data: {
        "password": password,
        "email": email,
      },
    })
      .then((res) => {
        console.log({
          password,
          email,
        });
        console.log(res);
        if (res.data.errors) {
          passwordError.innerHTML = res.data.errors.password;
          emailError.innerHTML = res.data.errors.email;
        } else {
          window.location = "/";
        }
      })
      .catch((err) => {
        console.log({
          password,
          email,
        });
        console.log(err);
      });
  };

  return (
    <>
      <div className="login_components">
        <Typography variant="h2" className="h2login">
          Se connecter
        </Typography>

        <form action="" onSubmit={handleLogin} className="form_login">
          <label htmlFor="password">Password</label>
          <input
            className="btnType"
            type="password"
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="mot de passe"
            required
          />
          <div className="password error"></div>

          <label htmlFor="email">Email</label>
          <input
            className="btnType"
            type="email"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="exemple@groupomania.com"
            required
          />
          <div className="email error"></div>

          <input type="submit" className="btnLogin" value="Se connecter" />
        </form>
      </div>
    </>
  );
};

export default SignInForm;

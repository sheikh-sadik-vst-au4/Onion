import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import "./login.css";
import app from "../../Appbasic";
const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuthentication = (event) => {
    event.preventDefault();
    if (
      username.toLowerCase() === "admin" &&
      password.toLowerCase() === "admin"
    ) {
      setIsAuthenticated(true);
      app.setToken("sdklhafkjlsdhafsdjfhvskgksdklhafkjlsdhafsdjfhvskgk");
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/home"></Redirect>;
  } else {
    return (
      <div className="login-wrapper">
        <div className="login-inner">
          <h3>Admin Login</h3>
          <hr></hr>
          <form onSubmit={handleAuthentication}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                placeholder="ex. bruce@wyane.com"
                autoComplete="current-password"
                value={username}
                onChange={(event) => setUserName(event.target.value)}
                required
              ></input>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="enter password"
                autoComplete="current-password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              ></input>
            </div>
            <input
              type="submit"
              className="btn btn-dark btn-block"
              value="Sign-In"
            />
          </form>
        </div>
      </div>
    );
  }
};

export default Login;

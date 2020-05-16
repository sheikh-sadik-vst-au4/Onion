import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/Login/login";
import app from "./Appbasic";

const Content = () => (
  <div className="container">
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <RequiresAuthentication path="/home" component={Home} />
      </Switch>
    </BrowserRouter>
  </div>
);
const RequiresAuthentication = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      app.getToken() ? (
        <div>
          <Component {...props} />
        </div>
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

export default Content;

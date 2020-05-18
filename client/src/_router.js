import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Login from "./pages/Login";
import app from "./Appbasic";
import Home from './pages/Home';
import Logout from './pages/Logout';
const Content = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/logout" component={Logout} />
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
